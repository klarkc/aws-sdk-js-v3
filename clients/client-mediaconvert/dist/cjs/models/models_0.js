"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Eac3Settings = exports.Eac3SurroundMode = exports.Eac3SurroundExMode = exports.Eac3StereoDownmix = exports.Eac3PhaseControl = exports.Eac3PassthroughControl = exports.Eac3MetadataControl = exports.Eac3LfeFilter = exports.Eac3LfeControl = exports.Eac3DynamicRangeCompressionRf = exports.Eac3DynamicRangeCompressionLine = exports.Eac3DcFilter = exports.Eac3CodingMode = exports.Eac3BitstreamMode = exports.Eac3AttenuationControl = exports.Eac3AtmosSettings = exports.Eac3AtmosSurroundExMode = exports.Eac3AtmosStereoDownmix = exports.Eac3AtmosMeteringMode = exports.Eac3AtmosDynamicRangeCompressionRf = exports.Eac3AtmosDynamicRangeCompressionLine = exports.Eac3AtmosDialogueIntelligence = exports.Eac3AtmosCodingMode = exports.Eac3AtmosBitstreamMode = exports.AudioCodec = exports.AiffSettings = exports.Ac3Settings = exports.Ac3MetadataControl = exports.Ac3LfeFilter = exports.Ac3DynamicRangeCompressionRf = exports.Ac3DynamicRangeCompressionProfile = exports.Ac3DynamicRangeCompressionLine = exports.Ac3CodingMode = exports.Ac3BitstreamMode = exports.AacSettings = exports.AacVbrQuality = exports.AacSpecification = exports.AacRawFormat = exports.AacRateControlMode = exports.AacCodingMode = exports.AacCodecProfile = exports.AacAudioDescriptionBroadcasterMix = exports.AudioTypeControl = exports.AudioNormalizationSettings = exports.AudioNormalizationPeakCalculation = exports.AudioNormalizationLoudnessLogging = exports.AudioNormalizationAlgorithmControl = exports.AudioNormalizationAlgorithm = exports.AudioChannelTaggingSettings = exports.AudioChannelTag = void 0;
exports.HlsAdditionalManifest = exports.Endpoint = exports.DashAdditionalManifest = exports.CmafAdditionalManifest = exports.CaptionDescriptionPreset = exports.CaptionDescription = exports.CaptionDestinationSettings = exports.WebvttDestinationSettings = exports.WebvttStylePassthrough = exports.TtmlDestinationSettings = exports.TtmlStylePassthrough = exports.TeletextDestinationSettings = exports.TeletextPageType = exports.SccDestinationSettings = exports.SccDestinationFramerate = exports.ImscDestinationSettings = exports.ImscStylePassthrough = exports.EmbeddedDestinationSettings = exports.DvbSubDestinationSettings = exports.DvbSubtitleTeletextSpacing = exports.DvbSubtitlingType = exports.DvbSubtitleShadowColor = exports.DvbSubtitleOutlineColor = exports.DvbSubtitleFontColor = exports.DvbddsHandling = exports.DvbSubtitleBackgroundColor = exports.DvbSubtitleAlignment = exports.CaptionDestinationType = exports.BurninDestinationSettings = exports.BurninSubtitleTeletextSpacing = exports.BurninSubtitleShadowColor = exports.BurninSubtitleOutlineColor = exports.FontScript = exports.BurninSubtitleFontColor = exports.BurninSubtitleBackgroundColor = exports.BurninSubtitleAlignment = exports.AudioDescription = exports.RemixSettings = exports.ChannelMapping = exports.OutputChannelMapping = exports.AudioLanguageCodeControl = exports.LanguageCode = exports.AudioCodecSettings = exports.WavSettings = exports.WavFormat = exports.VorbisSettings = exports.OpusSettings = exports.Mp3Settings = exports.Mp3RateControlMode = exports.Mp2Settings = void 0;
exports.JobMessages = exports.JobPhase = exports.BillingTagsSource = exports.AccelerationStatus = exports.AccelerationSettings = exports.AccelerationMode = exports.InputTemplate = exports.Input = exports.VideoSelector = exports.InputSampleRange = exports.InputRotate = exports.Hdr10Metadata = exports.ColorSpaceUsage = exports.ColorSpace = exports.AlphaBehavior = exports.InputTimecodeSource = exports.InputPsiControl = exports.InputScanType = exports.InputClipping = exports.ImageInserter = exports.InsertableImage = exports.InputFilterEnable = exports.InputDenoiseFilter = exports.InputDecryptionSettings = exports.DecryptionMode = exports.InputDeblockFilter = exports.Rectangle = exports.CaptionSelector = exports.CaptionSourceSettings = exports.TrackSourceSettings = exports.TeletextSourceSettings = exports.CaptionSourceType = exports.FileSourceSettings = exports.CaptionSourceFramerate = exports.FileSourceConvert608To708 = exports.EmbeddedSourceSettings = exports.EmbeddedTerminateCaptions = exports.EmbeddedConvert608To708 = exports.DvbSubSourceSettings = exports.AncillarySourceSettings = exports.AncillaryTerminateCaptions = exports.AncillaryConvert608To708 = exports.AudioSelector = exports.AudioSelectorType = exports.AudioDefaultSelection = exports.AudioSelectorGroup = exports.Id3Insertion = exports.HopDestination = exports.HlsCaptionLanguageMapping = exports.HlsAdMarkers = void 0;
exports.DashIsoHbbtvCompliance = exports.DashIsoEncryptionSettings = exports.SpekeKeyProvider = exports.DashIsoPlaybackDeviceCompatibility = exports.DashIsoGroupAudioChannelConfigSchemeIdUri = exports.CmafGroupSettings = exports.CmafWriteSegmentTimelineInRepresentation = exports.CmafWriteHLSManifest = exports.CmafWriteDASHManifest = exports.CmafStreamInfResolution = exports.CmafSegmentControl = exports.CmafPtsOffsetHandlingForBFrames = exports.CmafMpdProfile = exports.CmafManifestDurationFormat = exports.CmafManifestCompression = exports.CmafEncryptionSettings = exports.CmafKeyProviderType = exports.StaticKeyProvider = exports.SpekeKeyProviderCmaf = exports.CmafInitializationVectorInManifest = exports.CmafEncryptionType = exports.DestinationSettings = exports.S3DestinationSettings = exports.S3EncryptionSettings = exports.S3ServerSideEncryptionType = exports.S3DestinationAccessControl = exports.S3ObjectCannedAcl = exports.CmafCodecSpecification = exports.CmafClientCache = exports.AutomatedEncodingSettings = exports.AutomatedAbrSettings = exports.NielsenNonLinearWatermarkSettings = exports.NielsenUniqueTicPerAudioTrackType = exports.NielsenSourceWatermarkStatusType = exports.NielsenActiveWatermarkProcessType = exports.NielsenConfiguration = exports.MotionImageInserter = exports.MotionImagePlayback = exports.MotionImageInsertionOffset = exports.MotionImageInsertionMode = exports.MotionImageInsertionFramerate = exports.KantarWatermarkSettings = exports.EsamSettings = exports.EsamSignalProcessingNotification = exports.EsamManifestConfirmConditionNotification = exports.AvailBlanking = exports.QueueTransition = exports.OutputGroupDetail = exports.OutputDetail = exports.VideoDetail = void 0;
exports.M2tsEbpPlacement = exports.M2tsEbpAudioInterval = exports.DvbTdtSettings = exports.DvbSdtSettings = exports.OutputSdt = exports.DvbNitSettings = exports.M2tsBufferModel = exports.M2tsAudioDuration = exports.M2tsAudioBufferModel = exports.F4vSettings = exports.F4vMoovPlacement = exports.ContainerType = exports.CmfcSettings = exports.CmfcScte35Source = exports.CmfcScte35Esam = exports.CmfcIFrameOnlyManifest = exports.CmfcDescriptiveVideoServiceFlag = exports.CmfcAudioTrackType = exports.CmfcAudioDuration = exports.OutputGroupSettings = exports.OutputGroupType = exports.MsSmoothGroupSettings = exports.MsSmoothManifestEncoding = exports.MsSmoothEncryptionSettings = exports.MsSmoothAudioDeduplication = exports.MsSmoothAdditionalManifest = exports.HlsGroupSettings = exports.HlsTimedMetadataId3Frame = exports.HlsStreamInfResolution = exports.HlsSegmentControl = exports.HlsProgramDateTime = exports.HlsOutputSelection = exports.HlsManifestDurationFormat = exports.HlsManifestCompression = exports.HlsEncryptionSettings = exports.HlsKeyProviderType = exports.HlsOfflineEncrypted = exports.HlsInitializationVectorInManifest = exports.HlsEncryptionType = exports.HlsDirectoryStructure = exports.HlsCodecSpecification = exports.HlsClientCache = exports.HlsCaptionLanguageSetting = exports.HlsAudioOnlyHeader = exports.FileGroupSettings = exports.DashIsoGroupSettings = exports.DashIsoWriteSegmentTimelineInRepresentation = exports.DashIsoSegmentControl = exports.DashIsoPtsOffsetHandlingForBFrames = exports.DashIsoMpdProfile = void 0;
exports.Av1SpatialAdaptiveQuantization = exports.Av1RateControlMode = exports.Av1QvbrSettings = exports.Av1FramerateConversionAlgorithm = exports.Av1FramerateControl = exports.Av1AdaptiveQuantization = exports.AntiAlias = exports.AfdSignaling = exports.OutputSettings = exports.HlsSettings = exports.HlsIFrameOnlyManifest = exports.HlsDescriptiveVideoServiceFlag = exports.HlsAudioTrackType = exports.HlsAudioOnlyContainer = exports.ContainerSettings = exports.MxfSettings = exports.MxfProfile = exports.MxfAfdSignaling = exports.MpdSettings = exports.MpdScte35Source = exports.MpdScte35Esam = exports.MpdCaptionContainerType = exports.MpdAudioDuration = exports.MpdAccessibilityCaptionHints = exports.Mp4Settings = exports.Mp4MoovPlacement = exports.Mp4FreeSpaceBox = exports.Mp4CslgAtom = exports.MovSettings = exports.MovReference = exports.MovPaddingControl = exports.MovMpeg2FourCCControl = exports.MovCslgAtom = exports.MovClapAtom = exports.M3u8Settings = exports.TimedMetadata = exports.M3u8Scte35Source = exports.M3u8PcrControl = exports.M3u8NielsenId3 = exports.M3u8AudioDuration = exports.M2tsSettings = exports.M2tsSegmentationStyle = exports.M2tsSegmentationMarkers = exports.M2tsScte35Source = exports.M2tsScte35Esam = exports.M2tsRateMode = exports.M2tsPcrControl = exports.M2tsNielsenId3 = exports.M2tsForceTsVideoEbpOrder = exports.M2tsEsRateInPes = void 0;
var AudioChannelTag;
(function (AudioChannelTag) {
    AudioChannelTag["C"] = "C";
    AudioChannelTag["CS"] = "CS";
    AudioChannelTag["L"] = "L";
    AudioChannelTag["LC"] = "LC";
    AudioChannelTag["LFE"] = "LFE";
    AudioChannelTag["LS"] = "LS";
    AudioChannelTag["LSD"] = "LSD";
    AudioChannelTag["R"] = "R";
    AudioChannelTag["RC"] = "RC";
    AudioChannelTag["RS"] = "RS";
    AudioChannelTag["RSD"] = "RSD";
    AudioChannelTag["TCS"] = "TCS";
    AudioChannelTag["VHC"] = "VHC";
    AudioChannelTag["VHL"] = "VHL";
    AudioChannelTag["VHR"] = "VHR";
})(AudioChannelTag = exports.AudioChannelTag || (exports.AudioChannelTag = {}));
var AudioChannelTaggingSettings;
(function (AudioChannelTaggingSettings) {
    /**
     * @internal
     */
    AudioChannelTaggingSettings.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(AudioChannelTaggingSettings = exports.AudioChannelTaggingSettings || (exports.AudioChannelTaggingSettings = {}));
var AudioNormalizationAlgorithm;
(function (AudioNormalizationAlgorithm) {
    AudioNormalizationAlgorithm["ITU_BS_1770_1"] = "ITU_BS_1770_1";
    AudioNormalizationAlgorithm["ITU_BS_1770_2"] = "ITU_BS_1770_2";
    AudioNormalizationAlgorithm["ITU_BS_1770_3"] = "ITU_BS_1770_3";
    AudioNormalizationAlgorithm["ITU_BS_1770_4"] = "ITU_BS_1770_4";
})(AudioNormalizationAlgorithm = exports.AudioNormalizationAlgorithm || (exports.AudioNormalizationAlgorithm = {}));
var AudioNormalizationAlgorithmControl;
(function (AudioNormalizationAlgorithmControl) {
    AudioNormalizationAlgorithmControl["CORRECT_AUDIO"] = "CORRECT_AUDIO";
    AudioNormalizationAlgorithmControl["MEASURE_ONLY"] = "MEASURE_ONLY";
})(AudioNormalizationAlgorithmControl = exports.AudioNormalizationAlgorithmControl || (exports.AudioNormalizationAlgorithmControl = {}));
var AudioNormalizationLoudnessLogging;
(function (AudioNormalizationLoudnessLogging) {
    AudioNormalizationLoudnessLogging["DONT_LOG"] = "DONT_LOG";
    AudioNormalizationLoudnessLogging["LOG"] = "LOG";
})(AudioNormalizationLoudnessLogging = exports.AudioNormalizationLoudnessLogging || (exports.AudioNormalizationLoudnessLogging = {}));
var AudioNormalizationPeakCalculation;
(function (AudioNormalizationPeakCalculation) {
    AudioNormalizationPeakCalculation["NONE"] = "NONE";
    AudioNormalizationPeakCalculation["TRUE_PEAK"] = "TRUE_PEAK";
})(AudioNormalizationPeakCalculation = exports.AudioNormalizationPeakCalculation || (exports.AudioNormalizationPeakCalculation = {}));
var AudioNormalizationSettings;
(function (AudioNormalizationSettings) {
    /**
     * @internal
     */
    AudioNormalizationSettings.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(AudioNormalizationSettings = exports.AudioNormalizationSettings || (exports.AudioNormalizationSettings = {}));
var AudioTypeControl;
(function (AudioTypeControl) {
    AudioTypeControl["FOLLOW_INPUT"] = "FOLLOW_INPUT";
    AudioTypeControl["USE_CONFIGURED"] = "USE_CONFIGURED";
})(AudioTypeControl = exports.AudioTypeControl || (exports.AudioTypeControl = {}));
var AacAudioDescriptionBroadcasterMix;
(function (AacAudioDescriptionBroadcasterMix) {
    AacAudioDescriptionBroadcasterMix["BROADCASTER_MIXED_AD"] = "BROADCASTER_MIXED_AD";
    AacAudioDescriptionBroadcasterMix["NORMAL"] = "NORMAL";
})(AacAudioDescriptionBroadcasterMix = exports.AacAudioDescriptionBroadcasterMix || (exports.AacAudioDescriptionBroadcasterMix = {}));
var AacCodecProfile;
(function (AacCodecProfile) {
    AacCodecProfile["HEV1"] = "HEV1";
    AacCodecProfile["HEV2"] = "HEV2";
    AacCodecProfile["LC"] = "LC";
})(AacCodecProfile = exports.AacCodecProfile || (exports.AacCodecProfile = {}));
var AacCodingMode;
(function (AacCodingMode) {
    AacCodingMode["AD_RECEIVER_MIX"] = "AD_RECEIVER_MIX";
    AacCodingMode["CODING_MODE_1_0"] = "CODING_MODE_1_0";
    AacCodingMode["CODING_MODE_1_1"] = "CODING_MODE_1_1";
    AacCodingMode["CODING_MODE_2_0"] = "CODING_MODE_2_0";
    AacCodingMode["CODING_MODE_5_1"] = "CODING_MODE_5_1";
})(AacCodingMode = exports.AacCodingMode || (exports.AacCodingMode = {}));
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
var AacSpecification;
(function (AacSpecification) {
    AacSpecification["MPEG2"] = "MPEG2";
    AacSpecification["MPEG4"] = "MPEG4";
})(AacSpecification = exports.AacSpecification || (exports.AacSpecification = {}));
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
var Ac3DynamicRangeCompressionLine;
(function (Ac3DynamicRangeCompressionLine) {
    Ac3DynamicRangeCompressionLine["FILM_LIGHT"] = "FILM_LIGHT";
    Ac3DynamicRangeCompressionLine["FILM_STANDARD"] = "FILM_STANDARD";
    Ac3DynamicRangeCompressionLine["MUSIC_LIGHT"] = "MUSIC_LIGHT";
    Ac3DynamicRangeCompressionLine["MUSIC_STANDARD"] = "MUSIC_STANDARD";
    Ac3DynamicRangeCompressionLine["NONE"] = "NONE";
    Ac3DynamicRangeCompressionLine["SPEECH"] = "SPEECH";
})(Ac3DynamicRangeCompressionLine = exports.Ac3DynamicRangeCompressionLine || (exports.Ac3DynamicRangeCompressionLine = {}));
var Ac3DynamicRangeCompressionProfile;
(function (Ac3DynamicRangeCompressionProfile) {
    Ac3DynamicRangeCompressionProfile["FILM_STANDARD"] = "FILM_STANDARD";
    Ac3DynamicRangeCompressionProfile["NONE"] = "NONE";
})(Ac3DynamicRangeCompressionProfile = exports.Ac3DynamicRangeCompressionProfile || (exports.Ac3DynamicRangeCompressionProfile = {}));
var Ac3DynamicRangeCompressionRf;
(function (Ac3DynamicRangeCompressionRf) {
    Ac3DynamicRangeCompressionRf["FILM_LIGHT"] = "FILM_LIGHT";
    Ac3DynamicRangeCompressionRf["FILM_STANDARD"] = "FILM_STANDARD";
    Ac3DynamicRangeCompressionRf["MUSIC_LIGHT"] = "MUSIC_LIGHT";
    Ac3DynamicRangeCompressionRf["MUSIC_STANDARD"] = "MUSIC_STANDARD";
    Ac3DynamicRangeCompressionRf["NONE"] = "NONE";
    Ac3DynamicRangeCompressionRf["SPEECH"] = "SPEECH";
})(Ac3DynamicRangeCompressionRf = exports.Ac3DynamicRangeCompressionRf || (exports.Ac3DynamicRangeCompressionRf = {}));
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
var AiffSettings;
(function (AiffSettings) {
    /**
     * @internal
     */
    AiffSettings.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(AiffSettings = exports.AiffSettings || (exports.AiffSettings = {}));
var AudioCodec;
(function (AudioCodec) {
    AudioCodec["AAC"] = "AAC";
    AudioCodec["AC3"] = "AC3";
    AudioCodec["AIFF"] = "AIFF";
    AudioCodec["EAC3"] = "EAC3";
    AudioCodec["EAC3_ATMOS"] = "EAC3_ATMOS";
    AudioCodec["MP2"] = "MP2";
    AudioCodec["MP3"] = "MP3";
    AudioCodec["OPUS"] = "OPUS";
    AudioCodec["PASSTHROUGH"] = "PASSTHROUGH";
    AudioCodec["VORBIS"] = "VORBIS";
    AudioCodec["WAV"] = "WAV";
})(AudioCodec = exports.AudioCodec || (exports.AudioCodec = {}));
var Eac3AtmosBitstreamMode;
(function (Eac3AtmosBitstreamMode) {
    Eac3AtmosBitstreamMode["COMPLETE_MAIN"] = "COMPLETE_MAIN";
})(Eac3AtmosBitstreamMode = exports.Eac3AtmosBitstreamMode || (exports.Eac3AtmosBitstreamMode = {}));
var Eac3AtmosCodingMode;
(function (Eac3AtmosCodingMode) {
    Eac3AtmosCodingMode["CODING_MODE_9_1_6"] = "CODING_MODE_9_1_6";
})(Eac3AtmosCodingMode = exports.Eac3AtmosCodingMode || (exports.Eac3AtmosCodingMode = {}));
var Eac3AtmosDialogueIntelligence;
(function (Eac3AtmosDialogueIntelligence) {
    Eac3AtmosDialogueIntelligence["DISABLED"] = "DISABLED";
    Eac3AtmosDialogueIntelligence["ENABLED"] = "ENABLED";
})(Eac3AtmosDialogueIntelligence = exports.Eac3AtmosDialogueIntelligence || (exports.Eac3AtmosDialogueIntelligence = {}));
var Eac3AtmosDynamicRangeCompressionLine;
(function (Eac3AtmosDynamicRangeCompressionLine) {
    Eac3AtmosDynamicRangeCompressionLine["FILM_LIGHT"] = "FILM_LIGHT";
    Eac3AtmosDynamicRangeCompressionLine["FILM_STANDARD"] = "FILM_STANDARD";
    Eac3AtmosDynamicRangeCompressionLine["MUSIC_LIGHT"] = "MUSIC_LIGHT";
    Eac3AtmosDynamicRangeCompressionLine["MUSIC_STANDARD"] = "MUSIC_STANDARD";
    Eac3AtmosDynamicRangeCompressionLine["NONE"] = "NONE";
    Eac3AtmosDynamicRangeCompressionLine["SPEECH"] = "SPEECH";
})(Eac3AtmosDynamicRangeCompressionLine = exports.Eac3AtmosDynamicRangeCompressionLine || (exports.Eac3AtmosDynamicRangeCompressionLine = {}));
var Eac3AtmosDynamicRangeCompressionRf;
(function (Eac3AtmosDynamicRangeCompressionRf) {
    Eac3AtmosDynamicRangeCompressionRf["FILM_LIGHT"] = "FILM_LIGHT";
    Eac3AtmosDynamicRangeCompressionRf["FILM_STANDARD"] = "FILM_STANDARD";
    Eac3AtmosDynamicRangeCompressionRf["MUSIC_LIGHT"] = "MUSIC_LIGHT";
    Eac3AtmosDynamicRangeCompressionRf["MUSIC_STANDARD"] = "MUSIC_STANDARD";
    Eac3AtmosDynamicRangeCompressionRf["NONE"] = "NONE";
    Eac3AtmosDynamicRangeCompressionRf["SPEECH"] = "SPEECH";
})(Eac3AtmosDynamicRangeCompressionRf = exports.Eac3AtmosDynamicRangeCompressionRf || (exports.Eac3AtmosDynamicRangeCompressionRf = {}));
var Eac3AtmosMeteringMode;
(function (Eac3AtmosMeteringMode) {
    Eac3AtmosMeteringMode["ITU_BS_1770_1"] = "ITU_BS_1770_1";
    Eac3AtmosMeteringMode["ITU_BS_1770_2"] = "ITU_BS_1770_2";
    Eac3AtmosMeteringMode["ITU_BS_1770_3"] = "ITU_BS_1770_3";
    Eac3AtmosMeteringMode["ITU_BS_1770_4"] = "ITU_BS_1770_4";
    Eac3AtmosMeteringMode["LEQ_A"] = "LEQ_A";
})(Eac3AtmosMeteringMode = exports.Eac3AtmosMeteringMode || (exports.Eac3AtmosMeteringMode = {}));
var Eac3AtmosStereoDownmix;
(function (Eac3AtmosStereoDownmix) {
    Eac3AtmosStereoDownmix["DPL2"] = "DPL2";
    Eac3AtmosStereoDownmix["NOT_INDICATED"] = "NOT_INDICATED";
    Eac3AtmosStereoDownmix["STEREO"] = "STEREO";
    Eac3AtmosStereoDownmix["SURROUND"] = "SURROUND";
})(Eac3AtmosStereoDownmix = exports.Eac3AtmosStereoDownmix || (exports.Eac3AtmosStereoDownmix = {}));
var Eac3AtmosSurroundExMode;
(function (Eac3AtmosSurroundExMode) {
    Eac3AtmosSurroundExMode["DISABLED"] = "DISABLED";
    Eac3AtmosSurroundExMode["ENABLED"] = "ENABLED";
    Eac3AtmosSurroundExMode["NOT_INDICATED"] = "NOT_INDICATED";
})(Eac3AtmosSurroundExMode = exports.Eac3AtmosSurroundExMode || (exports.Eac3AtmosSurroundExMode = {}));
var Eac3AtmosSettings;
(function (Eac3AtmosSettings) {
    /**
     * @internal
     */
    Eac3AtmosSettings.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(Eac3AtmosSettings = exports.Eac3AtmosSettings || (exports.Eac3AtmosSettings = {}));
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
var Eac3DynamicRangeCompressionLine;
(function (Eac3DynamicRangeCompressionLine) {
    Eac3DynamicRangeCompressionLine["FILM_LIGHT"] = "FILM_LIGHT";
    Eac3DynamicRangeCompressionLine["FILM_STANDARD"] = "FILM_STANDARD";
    Eac3DynamicRangeCompressionLine["MUSIC_LIGHT"] = "MUSIC_LIGHT";
    Eac3DynamicRangeCompressionLine["MUSIC_STANDARD"] = "MUSIC_STANDARD";
    Eac3DynamicRangeCompressionLine["NONE"] = "NONE";
    Eac3DynamicRangeCompressionLine["SPEECH"] = "SPEECH";
})(Eac3DynamicRangeCompressionLine = exports.Eac3DynamicRangeCompressionLine || (exports.Eac3DynamicRangeCompressionLine = {}));
var Eac3DynamicRangeCompressionRf;
(function (Eac3DynamicRangeCompressionRf) {
    Eac3DynamicRangeCompressionRf["FILM_LIGHT"] = "FILM_LIGHT";
    Eac3DynamicRangeCompressionRf["FILM_STANDARD"] = "FILM_STANDARD";
    Eac3DynamicRangeCompressionRf["MUSIC_LIGHT"] = "MUSIC_LIGHT";
    Eac3DynamicRangeCompressionRf["MUSIC_STANDARD"] = "MUSIC_STANDARD";
    Eac3DynamicRangeCompressionRf["NONE"] = "NONE";
    Eac3DynamicRangeCompressionRf["SPEECH"] = "SPEECH";
})(Eac3DynamicRangeCompressionRf = exports.Eac3DynamicRangeCompressionRf || (exports.Eac3DynamicRangeCompressionRf = {}));
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
var Mp2Settings;
(function (Mp2Settings) {
    /**
     * @internal
     */
    Mp2Settings.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(Mp2Settings = exports.Mp2Settings || (exports.Mp2Settings = {}));
var Mp3RateControlMode;
(function (Mp3RateControlMode) {
    Mp3RateControlMode["CBR"] = "CBR";
    Mp3RateControlMode["VBR"] = "VBR";
})(Mp3RateControlMode = exports.Mp3RateControlMode || (exports.Mp3RateControlMode = {}));
var Mp3Settings;
(function (Mp3Settings) {
    /**
     * @internal
     */
    Mp3Settings.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(Mp3Settings = exports.Mp3Settings || (exports.Mp3Settings = {}));
var OpusSettings;
(function (OpusSettings) {
    /**
     * @internal
     */
    OpusSettings.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(OpusSettings = exports.OpusSettings || (exports.OpusSettings = {}));
var VorbisSettings;
(function (VorbisSettings) {
    /**
     * @internal
     */
    VorbisSettings.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(VorbisSettings = exports.VorbisSettings || (exports.VorbisSettings = {}));
var WavFormat;
(function (WavFormat) {
    WavFormat["RF64"] = "RF64";
    WavFormat["RIFF"] = "RIFF";
})(WavFormat = exports.WavFormat || (exports.WavFormat = {}));
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
var LanguageCode;
(function (LanguageCode) {
    LanguageCode["AAR"] = "AAR";
    LanguageCode["ABK"] = "ABK";
    LanguageCode["AFR"] = "AFR";
    LanguageCode["AKA"] = "AKA";
    LanguageCode["AMH"] = "AMH";
    LanguageCode["ARA"] = "ARA";
    LanguageCode["ARG"] = "ARG";
    LanguageCode["ASM"] = "ASM";
    LanguageCode["AVA"] = "AVA";
    LanguageCode["AVE"] = "AVE";
    LanguageCode["AYM"] = "AYM";
    LanguageCode["AZE"] = "AZE";
    LanguageCode["BAK"] = "BAK";
    LanguageCode["BAM"] = "BAM";
    LanguageCode["BEL"] = "BEL";
    LanguageCode["BEN"] = "BEN";
    LanguageCode["BIH"] = "BIH";
    LanguageCode["BIS"] = "BIS";
    LanguageCode["BOD"] = "BOD";
    LanguageCode["BOS"] = "BOS";
    LanguageCode["BRE"] = "BRE";
    LanguageCode["BUL"] = "BUL";
    LanguageCode["CAT"] = "CAT";
    LanguageCode["CES"] = "CES";
    LanguageCode["CHA"] = "CHA";
    LanguageCode["CHE"] = "CHE";
    LanguageCode["CHU"] = "CHU";
    LanguageCode["CHV"] = "CHV";
    LanguageCode["COR"] = "COR";
    LanguageCode["COS"] = "COS";
    LanguageCode["CRE"] = "CRE";
    LanguageCode["CYM"] = "CYM";
    LanguageCode["DAN"] = "DAN";
    LanguageCode["DEU"] = "DEU";
    LanguageCode["DIV"] = "DIV";
    LanguageCode["DZO"] = "DZO";
    LanguageCode["ELL"] = "ELL";
    LanguageCode["ENG"] = "ENG";
    LanguageCode["ENM"] = "ENM";
    LanguageCode["EPO"] = "EPO";
    LanguageCode["EST"] = "EST";
    LanguageCode["EUS"] = "EUS";
    LanguageCode["EWE"] = "EWE";
    LanguageCode["FAO"] = "FAO";
    LanguageCode["FAS"] = "FAS";
    LanguageCode["FIJ"] = "FIJ";
    LanguageCode["FIN"] = "FIN";
    LanguageCode["FRA"] = "FRA";
    LanguageCode["FRM"] = "FRM";
    LanguageCode["FRY"] = "FRY";
    LanguageCode["FUL"] = "FUL";
    LanguageCode["GER"] = "GER";
    LanguageCode["GLA"] = "GLA";
    LanguageCode["GLE"] = "GLE";
    LanguageCode["GLG"] = "GLG";
    LanguageCode["GLV"] = "GLV";
    LanguageCode["GRN"] = "GRN";
    LanguageCode["GUJ"] = "GUJ";
    LanguageCode["HAT"] = "HAT";
    LanguageCode["HAU"] = "HAU";
    LanguageCode["HEB"] = "HEB";
    LanguageCode["HER"] = "HER";
    LanguageCode["HIN"] = "HIN";
    LanguageCode["HMO"] = "HMO";
    LanguageCode["HRV"] = "HRV";
    LanguageCode["HUN"] = "HUN";
    LanguageCode["HYE"] = "HYE";
    LanguageCode["IBO"] = "IBO";
    LanguageCode["IDO"] = "IDO";
    LanguageCode["III"] = "III";
    LanguageCode["IKU"] = "IKU";
    LanguageCode["ILE"] = "ILE";
    LanguageCode["INA"] = "INA";
    LanguageCode["IND"] = "IND";
    LanguageCode["IPK"] = "IPK";
    LanguageCode["ISL"] = "ISL";
    LanguageCode["ITA"] = "ITA";
    LanguageCode["JAV"] = "JAV";
    LanguageCode["JPN"] = "JPN";
    LanguageCode["KAL"] = "KAL";
    LanguageCode["KAN"] = "KAN";
    LanguageCode["KAS"] = "KAS";
    LanguageCode["KAT"] = "KAT";
    LanguageCode["KAU"] = "KAU";
    LanguageCode["KAZ"] = "KAZ";
    LanguageCode["KHM"] = "KHM";
    LanguageCode["KIK"] = "KIK";
    LanguageCode["KIN"] = "KIN";
    LanguageCode["KIR"] = "KIR";
    LanguageCode["KOM"] = "KOM";
    LanguageCode["KON"] = "KON";
    LanguageCode["KOR"] = "KOR";
    LanguageCode["KUA"] = "KUA";
    LanguageCode["KUR"] = "KUR";
    LanguageCode["LAO"] = "LAO";
    LanguageCode["LAT"] = "LAT";
    LanguageCode["LAV"] = "LAV";
    LanguageCode["LIM"] = "LIM";
    LanguageCode["LIN"] = "LIN";
    LanguageCode["LIT"] = "LIT";
    LanguageCode["LTZ"] = "LTZ";
    LanguageCode["LUB"] = "LUB";
    LanguageCode["LUG"] = "LUG";
    LanguageCode["MAH"] = "MAH";
    LanguageCode["MAL"] = "MAL";
    LanguageCode["MAR"] = "MAR";
    LanguageCode["MKD"] = "MKD";
    LanguageCode["MLG"] = "MLG";
    LanguageCode["MLT"] = "MLT";
    LanguageCode["MON"] = "MON";
    LanguageCode["MRI"] = "MRI";
    LanguageCode["MSA"] = "MSA";
    LanguageCode["MYA"] = "MYA";
    LanguageCode["NAU"] = "NAU";
    LanguageCode["NAV"] = "NAV";
    LanguageCode["NBL"] = "NBL";
    LanguageCode["NDE"] = "NDE";
    LanguageCode["NDO"] = "NDO";
    LanguageCode["NEP"] = "NEP";
    LanguageCode["NLD"] = "NLD";
    LanguageCode["NNO"] = "NNO";
    LanguageCode["NOB"] = "NOB";
    LanguageCode["NOR"] = "NOR";
    LanguageCode["NYA"] = "NYA";
    LanguageCode["OCI"] = "OCI";
    LanguageCode["OJI"] = "OJI";
    LanguageCode["ORI"] = "ORI";
    LanguageCode["ORJ"] = "ORJ";
    LanguageCode["ORM"] = "ORM";
    LanguageCode["OSS"] = "OSS";
    LanguageCode["PAN"] = "PAN";
    LanguageCode["PLI"] = "PLI";
    LanguageCode["POL"] = "POL";
    LanguageCode["POR"] = "POR";
    LanguageCode["PUS"] = "PUS";
    LanguageCode["QAA"] = "QAA";
    LanguageCode["QPC"] = "QPC";
    LanguageCode["QUE"] = "QUE";
    LanguageCode["ROH"] = "ROH";
    LanguageCode["RON"] = "RON";
    LanguageCode["RUN"] = "RUN";
    LanguageCode["RUS"] = "RUS";
    LanguageCode["SAG"] = "SAG";
    LanguageCode["SAN"] = "SAN";
    LanguageCode["SIN"] = "SIN";
    LanguageCode["SLK"] = "SLK";
    LanguageCode["SLV"] = "SLV";
    LanguageCode["SME"] = "SME";
    LanguageCode["SMO"] = "SMO";
    LanguageCode["SNA"] = "SNA";
    LanguageCode["SND"] = "SND";
    LanguageCode["SOM"] = "SOM";
    LanguageCode["SOT"] = "SOT";
    LanguageCode["SPA"] = "SPA";
    LanguageCode["SQI"] = "SQI";
    LanguageCode["SRB"] = "SRB";
    LanguageCode["SRD"] = "SRD";
    LanguageCode["SSW"] = "SSW";
    LanguageCode["SUN"] = "SUN";
    LanguageCode["SWA"] = "SWA";
    LanguageCode["SWE"] = "SWE";
    LanguageCode["TAH"] = "TAH";
    LanguageCode["TAM"] = "TAM";
    LanguageCode["TAT"] = "TAT";
    LanguageCode["TEL"] = "TEL";
    LanguageCode["TGK"] = "TGK";
    LanguageCode["TGL"] = "TGL";
    LanguageCode["THA"] = "THA";
    LanguageCode["TIR"] = "TIR";
    LanguageCode["TNG"] = "TNG";
    LanguageCode["TON"] = "TON";
    LanguageCode["TSN"] = "TSN";
    LanguageCode["TSO"] = "TSO";
    LanguageCode["TUK"] = "TUK";
    LanguageCode["TUR"] = "TUR";
    LanguageCode["TWI"] = "TWI";
    LanguageCode["UIG"] = "UIG";
    LanguageCode["UKR"] = "UKR";
    LanguageCode["URD"] = "URD";
    LanguageCode["UZB"] = "UZB";
    LanguageCode["VEN"] = "VEN";
    LanguageCode["VIE"] = "VIE";
    LanguageCode["VOL"] = "VOL";
    LanguageCode["WLN"] = "WLN";
    LanguageCode["WOL"] = "WOL";
    LanguageCode["XHO"] = "XHO";
    LanguageCode["YID"] = "YID";
    LanguageCode["YOR"] = "YOR";
    LanguageCode["ZHA"] = "ZHA";
    LanguageCode["ZHO"] = "ZHO";
    LanguageCode["ZUL"] = "ZUL";
})(LanguageCode = exports.LanguageCode || (exports.LanguageCode = {}));
var AudioLanguageCodeControl;
(function (AudioLanguageCodeControl) {
    AudioLanguageCodeControl["FOLLOW_INPUT"] = "FOLLOW_INPUT";
    AudioLanguageCodeControl["USE_CONFIGURED"] = "USE_CONFIGURED";
})(AudioLanguageCodeControl = exports.AudioLanguageCodeControl || (exports.AudioLanguageCodeControl = {}));
var OutputChannelMapping;
(function (OutputChannelMapping) {
    /**
     * @internal
     */
    OutputChannelMapping.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(OutputChannelMapping = exports.OutputChannelMapping || (exports.OutputChannelMapping = {}));
var ChannelMapping;
(function (ChannelMapping) {
    /**
     * @internal
     */
    ChannelMapping.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(ChannelMapping = exports.ChannelMapping || (exports.ChannelMapping = {}));
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
var BurninSubtitleAlignment;
(function (BurninSubtitleAlignment) {
    BurninSubtitleAlignment["CENTERED"] = "CENTERED";
    BurninSubtitleAlignment["LEFT"] = "LEFT";
})(BurninSubtitleAlignment = exports.BurninSubtitleAlignment || (exports.BurninSubtitleAlignment = {}));
var BurninSubtitleBackgroundColor;
(function (BurninSubtitleBackgroundColor) {
    BurninSubtitleBackgroundColor["BLACK"] = "BLACK";
    BurninSubtitleBackgroundColor["NONE"] = "NONE";
    BurninSubtitleBackgroundColor["WHITE"] = "WHITE";
})(BurninSubtitleBackgroundColor = exports.BurninSubtitleBackgroundColor || (exports.BurninSubtitleBackgroundColor = {}));
var BurninSubtitleFontColor;
(function (BurninSubtitleFontColor) {
    BurninSubtitleFontColor["BLACK"] = "BLACK";
    BurninSubtitleFontColor["BLUE"] = "BLUE";
    BurninSubtitleFontColor["GREEN"] = "GREEN";
    BurninSubtitleFontColor["RED"] = "RED";
    BurninSubtitleFontColor["WHITE"] = "WHITE";
    BurninSubtitleFontColor["YELLOW"] = "YELLOW";
})(BurninSubtitleFontColor = exports.BurninSubtitleFontColor || (exports.BurninSubtitleFontColor = {}));
var FontScript;
(function (FontScript) {
    FontScript["AUTOMATIC"] = "AUTOMATIC";
    FontScript["HANS"] = "HANS";
    FontScript["HANT"] = "HANT";
})(FontScript = exports.FontScript || (exports.FontScript = {}));
var BurninSubtitleOutlineColor;
(function (BurninSubtitleOutlineColor) {
    BurninSubtitleOutlineColor["BLACK"] = "BLACK";
    BurninSubtitleOutlineColor["BLUE"] = "BLUE";
    BurninSubtitleOutlineColor["GREEN"] = "GREEN";
    BurninSubtitleOutlineColor["RED"] = "RED";
    BurninSubtitleOutlineColor["WHITE"] = "WHITE";
    BurninSubtitleOutlineColor["YELLOW"] = "YELLOW";
})(BurninSubtitleOutlineColor = exports.BurninSubtitleOutlineColor || (exports.BurninSubtitleOutlineColor = {}));
var BurninSubtitleShadowColor;
(function (BurninSubtitleShadowColor) {
    BurninSubtitleShadowColor["BLACK"] = "BLACK";
    BurninSubtitleShadowColor["NONE"] = "NONE";
    BurninSubtitleShadowColor["WHITE"] = "WHITE";
})(BurninSubtitleShadowColor = exports.BurninSubtitleShadowColor || (exports.BurninSubtitleShadowColor = {}));
var BurninSubtitleTeletextSpacing;
(function (BurninSubtitleTeletextSpacing) {
    BurninSubtitleTeletextSpacing["FIXED_GRID"] = "FIXED_GRID";
    BurninSubtitleTeletextSpacing["PROPORTIONAL"] = "PROPORTIONAL";
})(BurninSubtitleTeletextSpacing = exports.BurninSubtitleTeletextSpacing || (exports.BurninSubtitleTeletextSpacing = {}));
var BurninDestinationSettings;
(function (BurninDestinationSettings) {
    /**
     * @internal
     */
    BurninDestinationSettings.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(BurninDestinationSettings = exports.BurninDestinationSettings || (exports.BurninDestinationSettings = {}));
var CaptionDestinationType;
(function (CaptionDestinationType) {
    CaptionDestinationType["BURN_IN"] = "BURN_IN";
    CaptionDestinationType["DVB_SUB"] = "DVB_SUB";
    CaptionDestinationType["EMBEDDED"] = "EMBEDDED";
    CaptionDestinationType["EMBEDDED_PLUS_SCTE20"] = "EMBEDDED_PLUS_SCTE20";
    CaptionDestinationType["IMSC"] = "IMSC";
    CaptionDestinationType["SCC"] = "SCC";
    CaptionDestinationType["SCTE20_PLUS_EMBEDDED"] = "SCTE20_PLUS_EMBEDDED";
    CaptionDestinationType["SMI"] = "SMI";
    CaptionDestinationType["SRT"] = "SRT";
    CaptionDestinationType["TELETEXT"] = "TELETEXT";
    CaptionDestinationType["TTML"] = "TTML";
    CaptionDestinationType["WEBVTT"] = "WEBVTT";
})(CaptionDestinationType = exports.CaptionDestinationType || (exports.CaptionDestinationType = {}));
var DvbSubtitleAlignment;
(function (DvbSubtitleAlignment) {
    DvbSubtitleAlignment["CENTERED"] = "CENTERED";
    DvbSubtitleAlignment["LEFT"] = "LEFT";
})(DvbSubtitleAlignment = exports.DvbSubtitleAlignment || (exports.DvbSubtitleAlignment = {}));
var DvbSubtitleBackgroundColor;
(function (DvbSubtitleBackgroundColor) {
    DvbSubtitleBackgroundColor["BLACK"] = "BLACK";
    DvbSubtitleBackgroundColor["NONE"] = "NONE";
    DvbSubtitleBackgroundColor["WHITE"] = "WHITE";
})(DvbSubtitleBackgroundColor = exports.DvbSubtitleBackgroundColor || (exports.DvbSubtitleBackgroundColor = {}));
var DvbddsHandling;
(function (DvbddsHandling) {
    DvbddsHandling["NONE"] = "NONE";
    DvbddsHandling["NO_DISPLAY_WINDOW"] = "NO_DISPLAY_WINDOW";
    DvbddsHandling["SPECIFIED"] = "SPECIFIED";
})(DvbddsHandling = exports.DvbddsHandling || (exports.DvbddsHandling = {}));
var DvbSubtitleFontColor;
(function (DvbSubtitleFontColor) {
    DvbSubtitleFontColor["BLACK"] = "BLACK";
    DvbSubtitleFontColor["BLUE"] = "BLUE";
    DvbSubtitleFontColor["GREEN"] = "GREEN";
    DvbSubtitleFontColor["RED"] = "RED";
    DvbSubtitleFontColor["WHITE"] = "WHITE";
    DvbSubtitleFontColor["YELLOW"] = "YELLOW";
})(DvbSubtitleFontColor = exports.DvbSubtitleFontColor || (exports.DvbSubtitleFontColor = {}));
var DvbSubtitleOutlineColor;
(function (DvbSubtitleOutlineColor) {
    DvbSubtitleOutlineColor["BLACK"] = "BLACK";
    DvbSubtitleOutlineColor["BLUE"] = "BLUE";
    DvbSubtitleOutlineColor["GREEN"] = "GREEN";
    DvbSubtitleOutlineColor["RED"] = "RED";
    DvbSubtitleOutlineColor["WHITE"] = "WHITE";
    DvbSubtitleOutlineColor["YELLOW"] = "YELLOW";
})(DvbSubtitleOutlineColor = exports.DvbSubtitleOutlineColor || (exports.DvbSubtitleOutlineColor = {}));
var DvbSubtitleShadowColor;
(function (DvbSubtitleShadowColor) {
    DvbSubtitleShadowColor["BLACK"] = "BLACK";
    DvbSubtitleShadowColor["NONE"] = "NONE";
    DvbSubtitleShadowColor["WHITE"] = "WHITE";
})(DvbSubtitleShadowColor = exports.DvbSubtitleShadowColor || (exports.DvbSubtitleShadowColor = {}));
var DvbSubtitlingType;
(function (DvbSubtitlingType) {
    DvbSubtitlingType["HEARING_IMPAIRED"] = "HEARING_IMPAIRED";
    DvbSubtitlingType["STANDARD"] = "STANDARD";
})(DvbSubtitlingType = exports.DvbSubtitlingType || (exports.DvbSubtitlingType = {}));
var DvbSubtitleTeletextSpacing;
(function (DvbSubtitleTeletextSpacing) {
    DvbSubtitleTeletextSpacing["FIXED_GRID"] = "FIXED_GRID";
    DvbSubtitleTeletextSpacing["PROPORTIONAL"] = "PROPORTIONAL";
})(DvbSubtitleTeletextSpacing = exports.DvbSubtitleTeletextSpacing || (exports.DvbSubtitleTeletextSpacing = {}));
var DvbSubDestinationSettings;
(function (DvbSubDestinationSettings) {
    /**
     * @internal
     */
    DvbSubDestinationSettings.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(DvbSubDestinationSettings = exports.DvbSubDestinationSettings || (exports.DvbSubDestinationSettings = {}));
var EmbeddedDestinationSettings;
(function (EmbeddedDestinationSettings) {
    /**
     * @internal
     */
    EmbeddedDestinationSettings.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(EmbeddedDestinationSettings = exports.EmbeddedDestinationSettings || (exports.EmbeddedDestinationSettings = {}));
var ImscStylePassthrough;
(function (ImscStylePassthrough) {
    ImscStylePassthrough["DISABLED"] = "DISABLED";
    ImscStylePassthrough["ENABLED"] = "ENABLED";
})(ImscStylePassthrough = exports.ImscStylePassthrough || (exports.ImscStylePassthrough = {}));
var ImscDestinationSettings;
(function (ImscDestinationSettings) {
    /**
     * @internal
     */
    ImscDestinationSettings.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(ImscDestinationSettings = exports.ImscDestinationSettings || (exports.ImscDestinationSettings = {}));
var SccDestinationFramerate;
(function (SccDestinationFramerate) {
    SccDestinationFramerate["FRAMERATE_23_97"] = "FRAMERATE_23_97";
    SccDestinationFramerate["FRAMERATE_24"] = "FRAMERATE_24";
    SccDestinationFramerate["FRAMERATE_25"] = "FRAMERATE_25";
    SccDestinationFramerate["FRAMERATE_29_97_DROPFRAME"] = "FRAMERATE_29_97_DROPFRAME";
    SccDestinationFramerate["FRAMERATE_29_97_NON_DROPFRAME"] = "FRAMERATE_29_97_NON_DROPFRAME";
})(SccDestinationFramerate = exports.SccDestinationFramerate || (exports.SccDestinationFramerate = {}));
var SccDestinationSettings;
(function (SccDestinationSettings) {
    /**
     * @internal
     */
    SccDestinationSettings.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(SccDestinationSettings = exports.SccDestinationSettings || (exports.SccDestinationSettings = {}));
var TeletextPageType;
(function (TeletextPageType) {
    TeletextPageType["PAGE_TYPE_ADDL_INFO"] = "PAGE_TYPE_ADDL_INFO";
    TeletextPageType["PAGE_TYPE_HEARING_IMPAIRED_SUBTITLE"] = "PAGE_TYPE_HEARING_IMPAIRED_SUBTITLE";
    TeletextPageType["PAGE_TYPE_INITIAL"] = "PAGE_TYPE_INITIAL";
    TeletextPageType["PAGE_TYPE_PROGRAM_SCHEDULE"] = "PAGE_TYPE_PROGRAM_SCHEDULE";
    TeletextPageType["PAGE_TYPE_SUBTITLE"] = "PAGE_TYPE_SUBTITLE";
})(TeletextPageType = exports.TeletextPageType || (exports.TeletextPageType = {}));
var TeletextDestinationSettings;
(function (TeletextDestinationSettings) {
    /**
     * @internal
     */
    TeletextDestinationSettings.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(TeletextDestinationSettings = exports.TeletextDestinationSettings || (exports.TeletextDestinationSettings = {}));
var TtmlStylePassthrough;
(function (TtmlStylePassthrough) {
    TtmlStylePassthrough["DISABLED"] = "DISABLED";
    TtmlStylePassthrough["ENABLED"] = "ENABLED";
})(TtmlStylePassthrough = exports.TtmlStylePassthrough || (exports.TtmlStylePassthrough = {}));
var TtmlDestinationSettings;
(function (TtmlDestinationSettings) {
    /**
     * @internal
     */
    TtmlDestinationSettings.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(TtmlDestinationSettings = exports.TtmlDestinationSettings || (exports.TtmlDestinationSettings = {}));
var WebvttStylePassthrough;
(function (WebvttStylePassthrough) {
    WebvttStylePassthrough["DISABLED"] = "DISABLED";
    WebvttStylePassthrough["ENABLED"] = "ENABLED";
})(WebvttStylePassthrough = exports.WebvttStylePassthrough || (exports.WebvttStylePassthrough = {}));
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
var CaptionDescriptionPreset;
(function (CaptionDescriptionPreset) {
    /**
     * @internal
     */
    CaptionDescriptionPreset.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(CaptionDescriptionPreset = exports.CaptionDescriptionPreset || (exports.CaptionDescriptionPreset = {}));
var CmafAdditionalManifest;
(function (CmafAdditionalManifest) {
    /**
     * @internal
     */
    CmafAdditionalManifest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(CmafAdditionalManifest = exports.CmafAdditionalManifest || (exports.CmafAdditionalManifest = {}));
var DashAdditionalManifest;
(function (DashAdditionalManifest) {
    /**
     * @internal
     */
    DashAdditionalManifest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(DashAdditionalManifest = exports.DashAdditionalManifest || (exports.DashAdditionalManifest = {}));
var Endpoint;
(function (Endpoint) {
    /**
     * @internal
     */
    Endpoint.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(Endpoint = exports.Endpoint || (exports.Endpoint = {}));
var HlsAdditionalManifest;
(function (HlsAdditionalManifest) {
    /**
     * @internal
     */
    HlsAdditionalManifest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(HlsAdditionalManifest = exports.HlsAdditionalManifest || (exports.HlsAdditionalManifest = {}));
var HlsAdMarkers;
(function (HlsAdMarkers) {
    HlsAdMarkers["ELEMENTAL"] = "ELEMENTAL";
    HlsAdMarkers["ELEMENTAL_SCTE35"] = "ELEMENTAL_SCTE35";
})(HlsAdMarkers = exports.HlsAdMarkers || (exports.HlsAdMarkers = {}));
var HlsCaptionLanguageMapping;
(function (HlsCaptionLanguageMapping) {
    /**
     * @internal
     */
    HlsCaptionLanguageMapping.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(HlsCaptionLanguageMapping = exports.HlsCaptionLanguageMapping || (exports.HlsCaptionLanguageMapping = {}));
var HopDestination;
(function (HopDestination) {
    /**
     * @internal
     */
    HopDestination.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(HopDestination = exports.HopDestination || (exports.HopDestination = {}));
var Id3Insertion;
(function (Id3Insertion) {
    /**
     * @internal
     */
    Id3Insertion.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(Id3Insertion = exports.Id3Insertion || (exports.Id3Insertion = {}));
var AudioSelectorGroup;
(function (AudioSelectorGroup) {
    /**
     * @internal
     */
    AudioSelectorGroup.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(AudioSelectorGroup = exports.AudioSelectorGroup || (exports.AudioSelectorGroup = {}));
var AudioDefaultSelection;
(function (AudioDefaultSelection) {
    AudioDefaultSelection["DEFAULT"] = "DEFAULT";
    AudioDefaultSelection["NOT_DEFAULT"] = "NOT_DEFAULT";
})(AudioDefaultSelection = exports.AudioDefaultSelection || (exports.AudioDefaultSelection = {}));
var AudioSelectorType;
(function (AudioSelectorType) {
    AudioSelectorType["LANGUAGE_CODE"] = "LANGUAGE_CODE";
    AudioSelectorType["PID"] = "PID";
    AudioSelectorType["TRACK"] = "TRACK";
})(AudioSelectorType = exports.AudioSelectorType || (exports.AudioSelectorType = {}));
var AudioSelector;
(function (AudioSelector) {
    /**
     * @internal
     */
    AudioSelector.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(AudioSelector = exports.AudioSelector || (exports.AudioSelector = {}));
var AncillaryConvert608To708;
(function (AncillaryConvert608To708) {
    AncillaryConvert608To708["DISABLED"] = "DISABLED";
    AncillaryConvert608To708["UPCONVERT"] = "UPCONVERT";
})(AncillaryConvert608To708 = exports.AncillaryConvert608To708 || (exports.AncillaryConvert608To708 = {}));
var AncillaryTerminateCaptions;
(function (AncillaryTerminateCaptions) {
    AncillaryTerminateCaptions["DISABLED"] = "DISABLED";
    AncillaryTerminateCaptions["END_OF_INPUT"] = "END_OF_INPUT";
})(AncillaryTerminateCaptions = exports.AncillaryTerminateCaptions || (exports.AncillaryTerminateCaptions = {}));
var AncillarySourceSettings;
(function (AncillarySourceSettings) {
    /**
     * @internal
     */
    AncillarySourceSettings.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(AncillarySourceSettings = exports.AncillarySourceSettings || (exports.AncillarySourceSettings = {}));
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
var EmbeddedTerminateCaptions;
(function (EmbeddedTerminateCaptions) {
    EmbeddedTerminateCaptions["DISABLED"] = "DISABLED";
    EmbeddedTerminateCaptions["END_OF_INPUT"] = "END_OF_INPUT";
})(EmbeddedTerminateCaptions = exports.EmbeddedTerminateCaptions || (exports.EmbeddedTerminateCaptions = {}));
var EmbeddedSourceSettings;
(function (EmbeddedSourceSettings) {
    /**
     * @internal
     */
    EmbeddedSourceSettings.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(EmbeddedSourceSettings = exports.EmbeddedSourceSettings || (exports.EmbeddedSourceSettings = {}));
var FileSourceConvert608To708;
(function (FileSourceConvert608To708) {
    FileSourceConvert608To708["DISABLED"] = "DISABLED";
    FileSourceConvert608To708["UPCONVERT"] = "UPCONVERT";
})(FileSourceConvert608To708 = exports.FileSourceConvert608To708 || (exports.FileSourceConvert608To708 = {}));
var CaptionSourceFramerate;
(function (CaptionSourceFramerate) {
    /**
     * @internal
     */
    CaptionSourceFramerate.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(CaptionSourceFramerate = exports.CaptionSourceFramerate || (exports.CaptionSourceFramerate = {}));
var FileSourceSettings;
(function (FileSourceSettings) {
    /**
     * @internal
     */
    FileSourceSettings.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(FileSourceSettings = exports.FileSourceSettings || (exports.FileSourceSettings = {}));
var CaptionSourceType;
(function (CaptionSourceType) {
    CaptionSourceType["ANCILLARY"] = "ANCILLARY";
    CaptionSourceType["DVB_SUB"] = "DVB_SUB";
    CaptionSourceType["EMBEDDED"] = "EMBEDDED";
    CaptionSourceType["IMSC"] = "IMSC";
    CaptionSourceType["NULL_SOURCE"] = "NULL_SOURCE";
    CaptionSourceType["SCC"] = "SCC";
    CaptionSourceType["SCTE20"] = "SCTE20";
    CaptionSourceType["SMI"] = "SMI";
    CaptionSourceType["SMPTE_TT"] = "SMPTE_TT";
    CaptionSourceType["SRT"] = "SRT";
    CaptionSourceType["STL"] = "STL";
    CaptionSourceType["TELETEXT"] = "TELETEXT";
    CaptionSourceType["TTML"] = "TTML";
    CaptionSourceType["WEBVTT"] = "WEBVTT";
})(CaptionSourceType = exports.CaptionSourceType || (exports.CaptionSourceType = {}));
var TeletextSourceSettings;
(function (TeletextSourceSettings) {
    /**
     * @internal
     */
    TeletextSourceSettings.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(TeletextSourceSettings = exports.TeletextSourceSettings || (exports.TeletextSourceSettings = {}));
var TrackSourceSettings;
(function (TrackSourceSettings) {
    /**
     * @internal
     */
    TrackSourceSettings.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(TrackSourceSettings = exports.TrackSourceSettings || (exports.TrackSourceSettings = {}));
var CaptionSourceSettings;
(function (CaptionSourceSettings) {
    /**
     * @internal
     */
    CaptionSourceSettings.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(CaptionSourceSettings = exports.CaptionSourceSettings || (exports.CaptionSourceSettings = {}));
var CaptionSelector;
(function (CaptionSelector) {
    /**
     * @internal
     */
    CaptionSelector.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(CaptionSelector = exports.CaptionSelector || (exports.CaptionSelector = {}));
var Rectangle;
(function (Rectangle) {
    /**
     * @internal
     */
    Rectangle.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(Rectangle = exports.Rectangle || (exports.Rectangle = {}));
var InputDeblockFilter;
(function (InputDeblockFilter) {
    InputDeblockFilter["DISABLED"] = "DISABLED";
    InputDeblockFilter["ENABLED"] = "ENABLED";
})(InputDeblockFilter = exports.InputDeblockFilter || (exports.InputDeblockFilter = {}));
var DecryptionMode;
(function (DecryptionMode) {
    DecryptionMode["AES_CBC"] = "AES_CBC";
    DecryptionMode["AES_CTR"] = "AES_CTR";
    DecryptionMode["AES_GCM"] = "AES_GCM";
})(DecryptionMode = exports.DecryptionMode || (exports.DecryptionMode = {}));
var InputDecryptionSettings;
(function (InputDecryptionSettings) {
    /**
     * @internal
     */
    InputDecryptionSettings.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(InputDecryptionSettings = exports.InputDecryptionSettings || (exports.InputDecryptionSettings = {}));
var InputDenoiseFilter;
(function (InputDenoiseFilter) {
    InputDenoiseFilter["DISABLED"] = "DISABLED";
    InputDenoiseFilter["ENABLED"] = "ENABLED";
})(InputDenoiseFilter = exports.InputDenoiseFilter || (exports.InputDenoiseFilter = {}));
var InputFilterEnable;
(function (InputFilterEnable) {
    InputFilterEnable["AUTO"] = "AUTO";
    InputFilterEnable["DISABLE"] = "DISABLE";
    InputFilterEnable["FORCE"] = "FORCE";
})(InputFilterEnable = exports.InputFilterEnable || (exports.InputFilterEnable = {}));
var InsertableImage;
(function (InsertableImage) {
    /**
     * @internal
     */
    InsertableImage.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(InsertableImage = exports.InsertableImage || (exports.InsertableImage = {}));
var ImageInserter;
(function (ImageInserter) {
    /**
     * @internal
     */
    ImageInserter.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(ImageInserter = exports.ImageInserter || (exports.ImageInserter = {}));
var InputClipping;
(function (InputClipping) {
    /**
     * @internal
     */
    InputClipping.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(InputClipping = exports.InputClipping || (exports.InputClipping = {}));
var InputScanType;
(function (InputScanType) {
    InputScanType["AUTO"] = "AUTO";
    InputScanType["PSF"] = "PSF";
})(InputScanType = exports.InputScanType || (exports.InputScanType = {}));
var InputPsiControl;
(function (InputPsiControl) {
    InputPsiControl["IGNORE_PSI"] = "IGNORE_PSI";
    InputPsiControl["USE_PSI"] = "USE_PSI";
})(InputPsiControl = exports.InputPsiControl || (exports.InputPsiControl = {}));
var InputTimecodeSource;
(function (InputTimecodeSource) {
    InputTimecodeSource["EMBEDDED"] = "EMBEDDED";
    InputTimecodeSource["SPECIFIEDSTART"] = "SPECIFIEDSTART";
    InputTimecodeSource["ZEROBASED"] = "ZEROBASED";
})(InputTimecodeSource = exports.InputTimecodeSource || (exports.InputTimecodeSource = {}));
var AlphaBehavior;
(function (AlphaBehavior) {
    AlphaBehavior["DISCARD"] = "DISCARD";
    AlphaBehavior["REMAP_TO_LUMA"] = "REMAP_TO_LUMA";
})(AlphaBehavior = exports.AlphaBehavior || (exports.AlphaBehavior = {}));
var ColorSpace;
(function (ColorSpace) {
    ColorSpace["FOLLOW"] = "FOLLOW";
    ColorSpace["HDR10"] = "HDR10";
    ColorSpace["HLG_2020"] = "HLG_2020";
    ColorSpace["REC_601"] = "REC_601";
    ColorSpace["REC_709"] = "REC_709";
})(ColorSpace = exports.ColorSpace || (exports.ColorSpace = {}));
var ColorSpaceUsage;
(function (ColorSpaceUsage) {
    ColorSpaceUsage["FALLBACK"] = "FALLBACK";
    ColorSpaceUsage["FORCE"] = "FORCE";
})(ColorSpaceUsage = exports.ColorSpaceUsage || (exports.ColorSpaceUsage = {}));
var Hdr10Metadata;
(function (Hdr10Metadata) {
    /**
     * @internal
     */
    Hdr10Metadata.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(Hdr10Metadata = exports.Hdr10Metadata || (exports.Hdr10Metadata = {}));
var InputRotate;
(function (InputRotate) {
    InputRotate["AUTO"] = "AUTO";
    InputRotate["DEGREES_180"] = "DEGREES_180";
    InputRotate["DEGREES_270"] = "DEGREES_270";
    InputRotate["DEGREES_90"] = "DEGREES_90";
    InputRotate["DEGREE_0"] = "DEGREE_0";
})(InputRotate = exports.InputRotate || (exports.InputRotate = {}));
var InputSampleRange;
(function (InputSampleRange) {
    InputSampleRange["FOLLOW"] = "FOLLOW";
    InputSampleRange["FULL_RANGE"] = "FULL_RANGE";
    InputSampleRange["LIMITED_RANGE"] = "LIMITED_RANGE";
})(InputSampleRange = exports.InputSampleRange || (exports.InputSampleRange = {}));
var VideoSelector;
(function (VideoSelector) {
    /**
     * @internal
     */
    VideoSelector.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(VideoSelector = exports.VideoSelector || (exports.VideoSelector = {}));
var Input;
(function (Input) {
    /**
     * @internal
     */
    Input.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(Input = exports.Input || (exports.Input = {}));
var InputTemplate;
(function (InputTemplate) {
    /**
     * @internal
     */
    InputTemplate.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(InputTemplate = exports.InputTemplate || (exports.InputTemplate = {}));
var AccelerationMode;
(function (AccelerationMode) {
    AccelerationMode["DISABLED"] = "DISABLED";
    AccelerationMode["ENABLED"] = "ENABLED";
    AccelerationMode["PREFERRED"] = "PREFERRED";
})(AccelerationMode = exports.AccelerationMode || (exports.AccelerationMode = {}));
var AccelerationSettings;
(function (AccelerationSettings) {
    /**
     * @internal
     */
    AccelerationSettings.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(AccelerationSettings = exports.AccelerationSettings || (exports.AccelerationSettings = {}));
var AccelerationStatus;
(function (AccelerationStatus) {
    AccelerationStatus["ACCELERATED"] = "ACCELERATED";
    AccelerationStatus["IN_PROGRESS"] = "IN_PROGRESS";
    AccelerationStatus["NOT_ACCELERATED"] = "NOT_ACCELERATED";
    AccelerationStatus["NOT_APPLICABLE"] = "NOT_APPLICABLE";
})(AccelerationStatus = exports.AccelerationStatus || (exports.AccelerationStatus = {}));
var BillingTagsSource;
(function (BillingTagsSource) {
    BillingTagsSource["JOB"] = "JOB";
    BillingTagsSource["JOB_TEMPLATE"] = "JOB_TEMPLATE";
    BillingTagsSource["PRESET"] = "PRESET";
    BillingTagsSource["QUEUE"] = "QUEUE";
})(BillingTagsSource = exports.BillingTagsSource || (exports.BillingTagsSource = {}));
var JobPhase;
(function (JobPhase) {
    JobPhase["PROBING"] = "PROBING";
    JobPhase["TRANSCODING"] = "TRANSCODING";
    JobPhase["UPLOADING"] = "UPLOADING";
})(JobPhase = exports.JobPhase || (exports.JobPhase = {}));
var JobMessages;
(function (JobMessages) {
    /**
     * @internal
     */
    JobMessages.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(JobMessages = exports.JobMessages || (exports.JobMessages = {}));
var VideoDetail;
(function (VideoDetail) {
    /**
     * @internal
     */
    VideoDetail.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(VideoDetail = exports.VideoDetail || (exports.VideoDetail = {}));
var OutputDetail;
(function (OutputDetail) {
    /**
     * @internal
     */
    OutputDetail.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(OutputDetail = exports.OutputDetail || (exports.OutputDetail = {}));
var OutputGroupDetail;
(function (OutputGroupDetail) {
    /**
     * @internal
     */
    OutputGroupDetail.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(OutputGroupDetail = exports.OutputGroupDetail || (exports.OutputGroupDetail = {}));
var QueueTransition;
(function (QueueTransition) {
    /**
     * @internal
     */
    QueueTransition.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(QueueTransition = exports.QueueTransition || (exports.QueueTransition = {}));
var AvailBlanking;
(function (AvailBlanking) {
    /**
     * @internal
     */
    AvailBlanking.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(AvailBlanking = exports.AvailBlanking || (exports.AvailBlanking = {}));
var EsamManifestConfirmConditionNotification;
(function (EsamManifestConfirmConditionNotification) {
    /**
     * @internal
     */
    EsamManifestConfirmConditionNotification.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(EsamManifestConfirmConditionNotification = exports.EsamManifestConfirmConditionNotification || (exports.EsamManifestConfirmConditionNotification = {}));
var EsamSignalProcessingNotification;
(function (EsamSignalProcessingNotification) {
    /**
     * @internal
     */
    EsamSignalProcessingNotification.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(EsamSignalProcessingNotification = exports.EsamSignalProcessingNotification || (exports.EsamSignalProcessingNotification = {}));
var EsamSettings;
(function (EsamSettings) {
    /**
     * @internal
     */
    EsamSettings.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(EsamSettings = exports.EsamSettings || (exports.EsamSettings = {}));
var KantarWatermarkSettings;
(function (KantarWatermarkSettings) {
    /**
     * @internal
     */
    KantarWatermarkSettings.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(KantarWatermarkSettings = exports.KantarWatermarkSettings || (exports.KantarWatermarkSettings = {}));
var MotionImageInsertionFramerate;
(function (MotionImageInsertionFramerate) {
    /**
     * @internal
     */
    MotionImageInsertionFramerate.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(MotionImageInsertionFramerate = exports.MotionImageInsertionFramerate || (exports.MotionImageInsertionFramerate = {}));
var MotionImageInsertionMode;
(function (MotionImageInsertionMode) {
    MotionImageInsertionMode["MOV"] = "MOV";
    MotionImageInsertionMode["PNG"] = "PNG";
})(MotionImageInsertionMode = exports.MotionImageInsertionMode || (exports.MotionImageInsertionMode = {}));
var MotionImageInsertionOffset;
(function (MotionImageInsertionOffset) {
    /**
     * @internal
     */
    MotionImageInsertionOffset.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(MotionImageInsertionOffset = exports.MotionImageInsertionOffset || (exports.MotionImageInsertionOffset = {}));
var MotionImagePlayback;
(function (MotionImagePlayback) {
    MotionImagePlayback["ONCE"] = "ONCE";
    MotionImagePlayback["REPEAT"] = "REPEAT";
})(MotionImagePlayback = exports.MotionImagePlayback || (exports.MotionImagePlayback = {}));
var MotionImageInserter;
(function (MotionImageInserter) {
    /**
     * @internal
     */
    MotionImageInserter.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(MotionImageInserter = exports.MotionImageInserter || (exports.MotionImageInserter = {}));
var NielsenConfiguration;
(function (NielsenConfiguration) {
    /**
     * @internal
     */
    NielsenConfiguration.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(NielsenConfiguration = exports.NielsenConfiguration || (exports.NielsenConfiguration = {}));
var NielsenActiveWatermarkProcessType;
(function (NielsenActiveWatermarkProcessType) {
    NielsenActiveWatermarkProcessType["CBET"] = "CBET";
    NielsenActiveWatermarkProcessType["NAES2_AND_NW"] = "NAES2_AND_NW";
    NielsenActiveWatermarkProcessType["NAES2_AND_NW_AND_CBET"] = "NAES2_AND_NW_AND_CBET";
})(NielsenActiveWatermarkProcessType = exports.NielsenActiveWatermarkProcessType || (exports.NielsenActiveWatermarkProcessType = {}));
var NielsenSourceWatermarkStatusType;
(function (NielsenSourceWatermarkStatusType) {
    NielsenSourceWatermarkStatusType["CLEAN"] = "CLEAN";
    NielsenSourceWatermarkStatusType["WATERMARKED"] = "WATERMARKED";
})(NielsenSourceWatermarkStatusType = exports.NielsenSourceWatermarkStatusType || (exports.NielsenSourceWatermarkStatusType = {}));
var NielsenUniqueTicPerAudioTrackType;
(function (NielsenUniqueTicPerAudioTrackType) {
    NielsenUniqueTicPerAudioTrackType["RESERVE_UNIQUE_TICS_PER_TRACK"] = "RESERVE_UNIQUE_TICS_PER_TRACK";
    NielsenUniqueTicPerAudioTrackType["SAME_TICS_PER_TRACK"] = "SAME_TICS_PER_TRACK";
})(NielsenUniqueTicPerAudioTrackType = exports.NielsenUniqueTicPerAudioTrackType || (exports.NielsenUniqueTicPerAudioTrackType = {}));
var NielsenNonLinearWatermarkSettings;
(function (NielsenNonLinearWatermarkSettings) {
    /**
     * @internal
     */
    NielsenNonLinearWatermarkSettings.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(NielsenNonLinearWatermarkSettings = exports.NielsenNonLinearWatermarkSettings || (exports.NielsenNonLinearWatermarkSettings = {}));
var AutomatedAbrSettings;
(function (AutomatedAbrSettings) {
    /**
     * @internal
     */
    AutomatedAbrSettings.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(AutomatedAbrSettings = exports.AutomatedAbrSettings || (exports.AutomatedAbrSettings = {}));
var AutomatedEncodingSettings;
(function (AutomatedEncodingSettings) {
    /**
     * @internal
     */
    AutomatedEncodingSettings.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(AutomatedEncodingSettings = exports.AutomatedEncodingSettings || (exports.AutomatedEncodingSettings = {}));
var CmafClientCache;
(function (CmafClientCache) {
    CmafClientCache["DISABLED"] = "DISABLED";
    CmafClientCache["ENABLED"] = "ENABLED";
})(CmafClientCache = exports.CmafClientCache || (exports.CmafClientCache = {}));
var CmafCodecSpecification;
(function (CmafCodecSpecification) {
    CmafCodecSpecification["RFC_4281"] = "RFC_4281";
    CmafCodecSpecification["RFC_6381"] = "RFC_6381";
})(CmafCodecSpecification = exports.CmafCodecSpecification || (exports.CmafCodecSpecification = {}));
var S3ObjectCannedAcl;
(function (S3ObjectCannedAcl) {
    S3ObjectCannedAcl["AUTHENTICATED_READ"] = "AUTHENTICATED_READ";
    S3ObjectCannedAcl["BUCKET_OWNER_FULL_CONTROL"] = "BUCKET_OWNER_FULL_CONTROL";
    S3ObjectCannedAcl["BUCKET_OWNER_READ"] = "BUCKET_OWNER_READ";
    S3ObjectCannedAcl["PUBLIC_READ"] = "PUBLIC_READ";
})(S3ObjectCannedAcl = exports.S3ObjectCannedAcl || (exports.S3ObjectCannedAcl = {}));
var S3DestinationAccessControl;
(function (S3DestinationAccessControl) {
    /**
     * @internal
     */
    S3DestinationAccessControl.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(S3DestinationAccessControl = exports.S3DestinationAccessControl || (exports.S3DestinationAccessControl = {}));
var S3ServerSideEncryptionType;
(function (S3ServerSideEncryptionType) {
    S3ServerSideEncryptionType["SERVER_SIDE_ENCRYPTION_KMS"] = "SERVER_SIDE_ENCRYPTION_KMS";
    S3ServerSideEncryptionType["SERVER_SIDE_ENCRYPTION_S3"] = "SERVER_SIDE_ENCRYPTION_S3";
})(S3ServerSideEncryptionType = exports.S3ServerSideEncryptionType || (exports.S3ServerSideEncryptionType = {}));
var S3EncryptionSettings;
(function (S3EncryptionSettings) {
    /**
     * @internal
     */
    S3EncryptionSettings.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(S3EncryptionSettings = exports.S3EncryptionSettings || (exports.S3EncryptionSettings = {}));
var S3DestinationSettings;
(function (S3DestinationSettings) {
    /**
     * @internal
     */
    S3DestinationSettings.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(S3DestinationSettings = exports.S3DestinationSettings || (exports.S3DestinationSettings = {}));
var DestinationSettings;
(function (DestinationSettings) {
    /**
     * @internal
     */
    DestinationSettings.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(DestinationSettings = exports.DestinationSettings || (exports.DestinationSettings = {}));
var CmafEncryptionType;
(function (CmafEncryptionType) {
    CmafEncryptionType["AES_CTR"] = "AES_CTR";
    CmafEncryptionType["SAMPLE_AES"] = "SAMPLE_AES";
})(CmafEncryptionType = exports.CmafEncryptionType || (exports.CmafEncryptionType = {}));
var CmafInitializationVectorInManifest;
(function (CmafInitializationVectorInManifest) {
    CmafInitializationVectorInManifest["EXCLUDE"] = "EXCLUDE";
    CmafInitializationVectorInManifest["INCLUDE"] = "INCLUDE";
})(CmafInitializationVectorInManifest = exports.CmafInitializationVectorInManifest || (exports.CmafInitializationVectorInManifest = {}));
var SpekeKeyProviderCmaf;
(function (SpekeKeyProviderCmaf) {
    /**
     * @internal
     */
    SpekeKeyProviderCmaf.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(SpekeKeyProviderCmaf = exports.SpekeKeyProviderCmaf || (exports.SpekeKeyProviderCmaf = {}));
var StaticKeyProvider;
(function (StaticKeyProvider) {
    /**
     * @internal
     */
    StaticKeyProvider.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(StaticKeyProvider = exports.StaticKeyProvider || (exports.StaticKeyProvider = {}));
var CmafKeyProviderType;
(function (CmafKeyProviderType) {
    CmafKeyProviderType["SPEKE"] = "SPEKE";
    CmafKeyProviderType["STATIC_KEY"] = "STATIC_KEY";
})(CmafKeyProviderType = exports.CmafKeyProviderType || (exports.CmafKeyProviderType = {}));
var CmafEncryptionSettings;
(function (CmafEncryptionSettings) {
    /**
     * @internal
     */
    CmafEncryptionSettings.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(CmafEncryptionSettings = exports.CmafEncryptionSettings || (exports.CmafEncryptionSettings = {}));
var CmafManifestCompression;
(function (CmafManifestCompression) {
    CmafManifestCompression["GZIP"] = "GZIP";
    CmafManifestCompression["NONE"] = "NONE";
})(CmafManifestCompression = exports.CmafManifestCompression || (exports.CmafManifestCompression = {}));
var CmafManifestDurationFormat;
(function (CmafManifestDurationFormat) {
    CmafManifestDurationFormat["FLOATING_POINT"] = "FLOATING_POINT";
    CmafManifestDurationFormat["INTEGER"] = "INTEGER";
})(CmafManifestDurationFormat = exports.CmafManifestDurationFormat || (exports.CmafManifestDurationFormat = {}));
var CmafMpdProfile;
(function (CmafMpdProfile) {
    CmafMpdProfile["MAIN_PROFILE"] = "MAIN_PROFILE";
    CmafMpdProfile["ON_DEMAND_PROFILE"] = "ON_DEMAND_PROFILE";
})(CmafMpdProfile = exports.CmafMpdProfile || (exports.CmafMpdProfile = {}));
var CmafPtsOffsetHandlingForBFrames;
(function (CmafPtsOffsetHandlingForBFrames) {
    CmafPtsOffsetHandlingForBFrames["MATCH_INITIAL_PTS"] = "MATCH_INITIAL_PTS";
    CmafPtsOffsetHandlingForBFrames["ZERO_BASED"] = "ZERO_BASED";
})(CmafPtsOffsetHandlingForBFrames = exports.CmafPtsOffsetHandlingForBFrames || (exports.CmafPtsOffsetHandlingForBFrames = {}));
var CmafSegmentControl;
(function (CmafSegmentControl) {
    CmafSegmentControl["SEGMENTED_FILES"] = "SEGMENTED_FILES";
    CmafSegmentControl["SINGLE_FILE"] = "SINGLE_FILE";
})(CmafSegmentControl = exports.CmafSegmentControl || (exports.CmafSegmentControl = {}));
var CmafStreamInfResolution;
(function (CmafStreamInfResolution) {
    CmafStreamInfResolution["EXCLUDE"] = "EXCLUDE";
    CmafStreamInfResolution["INCLUDE"] = "INCLUDE";
})(CmafStreamInfResolution = exports.CmafStreamInfResolution || (exports.CmafStreamInfResolution = {}));
var CmafWriteDASHManifest;
(function (CmafWriteDASHManifest) {
    CmafWriteDASHManifest["DISABLED"] = "DISABLED";
    CmafWriteDASHManifest["ENABLED"] = "ENABLED";
})(CmafWriteDASHManifest = exports.CmafWriteDASHManifest || (exports.CmafWriteDASHManifest = {}));
var CmafWriteHLSManifest;
(function (CmafWriteHLSManifest) {
    CmafWriteHLSManifest["DISABLED"] = "DISABLED";
    CmafWriteHLSManifest["ENABLED"] = "ENABLED";
})(CmafWriteHLSManifest = exports.CmafWriteHLSManifest || (exports.CmafWriteHLSManifest = {}));
var CmafWriteSegmentTimelineInRepresentation;
(function (CmafWriteSegmentTimelineInRepresentation) {
    CmafWriteSegmentTimelineInRepresentation["DISABLED"] = "DISABLED";
    CmafWriteSegmentTimelineInRepresentation["ENABLED"] = "ENABLED";
})(CmafWriteSegmentTimelineInRepresentation = exports.CmafWriteSegmentTimelineInRepresentation || (exports.CmafWriteSegmentTimelineInRepresentation = {}));
var CmafGroupSettings;
(function (CmafGroupSettings) {
    /**
     * @internal
     */
    CmafGroupSettings.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(CmafGroupSettings = exports.CmafGroupSettings || (exports.CmafGroupSettings = {}));
var DashIsoGroupAudioChannelConfigSchemeIdUri;
(function (DashIsoGroupAudioChannelConfigSchemeIdUri) {
    DashIsoGroupAudioChannelConfigSchemeIdUri["DOLBY_CHANNEL_CONFIGURATION"] = "DOLBY_CHANNEL_CONFIGURATION";
    DashIsoGroupAudioChannelConfigSchemeIdUri["MPEG_CHANNEL_CONFIGURATION"] = "MPEG_CHANNEL_CONFIGURATION";
})(DashIsoGroupAudioChannelConfigSchemeIdUri = exports.DashIsoGroupAudioChannelConfigSchemeIdUri || (exports.DashIsoGroupAudioChannelConfigSchemeIdUri = {}));
var DashIsoPlaybackDeviceCompatibility;
(function (DashIsoPlaybackDeviceCompatibility) {
    DashIsoPlaybackDeviceCompatibility["CENC_V1"] = "CENC_V1";
    DashIsoPlaybackDeviceCompatibility["UNENCRYPTED_SEI"] = "UNENCRYPTED_SEI";
})(DashIsoPlaybackDeviceCompatibility = exports.DashIsoPlaybackDeviceCompatibility || (exports.DashIsoPlaybackDeviceCompatibility = {}));
var SpekeKeyProvider;
(function (SpekeKeyProvider) {
    /**
     * @internal
     */
    SpekeKeyProvider.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(SpekeKeyProvider = exports.SpekeKeyProvider || (exports.SpekeKeyProvider = {}));
var DashIsoEncryptionSettings;
(function (DashIsoEncryptionSettings) {
    /**
     * @internal
     */
    DashIsoEncryptionSettings.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(DashIsoEncryptionSettings = exports.DashIsoEncryptionSettings || (exports.DashIsoEncryptionSettings = {}));
var DashIsoHbbtvCompliance;
(function (DashIsoHbbtvCompliance) {
    DashIsoHbbtvCompliance["HBBTV_1_5"] = "HBBTV_1_5";
    DashIsoHbbtvCompliance["NONE"] = "NONE";
})(DashIsoHbbtvCompliance = exports.DashIsoHbbtvCompliance || (exports.DashIsoHbbtvCompliance = {}));
var DashIsoMpdProfile;
(function (DashIsoMpdProfile) {
    DashIsoMpdProfile["MAIN_PROFILE"] = "MAIN_PROFILE";
    DashIsoMpdProfile["ON_DEMAND_PROFILE"] = "ON_DEMAND_PROFILE";
})(DashIsoMpdProfile = exports.DashIsoMpdProfile || (exports.DashIsoMpdProfile = {}));
var DashIsoPtsOffsetHandlingForBFrames;
(function (DashIsoPtsOffsetHandlingForBFrames) {
    DashIsoPtsOffsetHandlingForBFrames["MATCH_INITIAL_PTS"] = "MATCH_INITIAL_PTS";
    DashIsoPtsOffsetHandlingForBFrames["ZERO_BASED"] = "ZERO_BASED";
})(DashIsoPtsOffsetHandlingForBFrames = exports.DashIsoPtsOffsetHandlingForBFrames || (exports.DashIsoPtsOffsetHandlingForBFrames = {}));
var DashIsoSegmentControl;
(function (DashIsoSegmentControl) {
    DashIsoSegmentControl["SEGMENTED_FILES"] = "SEGMENTED_FILES";
    DashIsoSegmentControl["SINGLE_FILE"] = "SINGLE_FILE";
})(DashIsoSegmentControl = exports.DashIsoSegmentControl || (exports.DashIsoSegmentControl = {}));
var DashIsoWriteSegmentTimelineInRepresentation;
(function (DashIsoWriteSegmentTimelineInRepresentation) {
    DashIsoWriteSegmentTimelineInRepresentation["DISABLED"] = "DISABLED";
    DashIsoWriteSegmentTimelineInRepresentation["ENABLED"] = "ENABLED";
})(DashIsoWriteSegmentTimelineInRepresentation = exports.DashIsoWriteSegmentTimelineInRepresentation || (exports.DashIsoWriteSegmentTimelineInRepresentation = {}));
var DashIsoGroupSettings;
(function (DashIsoGroupSettings) {
    /**
     * @internal
     */
    DashIsoGroupSettings.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(DashIsoGroupSettings = exports.DashIsoGroupSettings || (exports.DashIsoGroupSettings = {}));
var FileGroupSettings;
(function (FileGroupSettings) {
    /**
     * @internal
     */
    FileGroupSettings.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(FileGroupSettings = exports.FileGroupSettings || (exports.FileGroupSettings = {}));
var HlsAudioOnlyHeader;
(function (HlsAudioOnlyHeader) {
    HlsAudioOnlyHeader["EXCLUDE"] = "EXCLUDE";
    HlsAudioOnlyHeader["INCLUDE"] = "INCLUDE";
})(HlsAudioOnlyHeader = exports.HlsAudioOnlyHeader || (exports.HlsAudioOnlyHeader = {}));
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
var HlsEncryptionType;
(function (HlsEncryptionType) {
    HlsEncryptionType["AES128"] = "AES128";
    HlsEncryptionType["SAMPLE_AES"] = "SAMPLE_AES";
})(HlsEncryptionType = exports.HlsEncryptionType || (exports.HlsEncryptionType = {}));
var HlsInitializationVectorInManifest;
(function (HlsInitializationVectorInManifest) {
    HlsInitializationVectorInManifest["EXCLUDE"] = "EXCLUDE";
    HlsInitializationVectorInManifest["INCLUDE"] = "INCLUDE";
})(HlsInitializationVectorInManifest = exports.HlsInitializationVectorInManifest || (exports.HlsInitializationVectorInManifest = {}));
var HlsOfflineEncrypted;
(function (HlsOfflineEncrypted) {
    HlsOfflineEncrypted["DISABLED"] = "DISABLED";
    HlsOfflineEncrypted["ENABLED"] = "ENABLED";
})(HlsOfflineEncrypted = exports.HlsOfflineEncrypted || (exports.HlsOfflineEncrypted = {}));
var HlsKeyProviderType;
(function (HlsKeyProviderType) {
    HlsKeyProviderType["SPEKE"] = "SPEKE";
    HlsKeyProviderType["STATIC_KEY"] = "STATIC_KEY";
})(HlsKeyProviderType = exports.HlsKeyProviderType || (exports.HlsKeyProviderType = {}));
var HlsEncryptionSettings;
(function (HlsEncryptionSettings) {
    /**
     * @internal
     */
    HlsEncryptionSettings.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(HlsEncryptionSettings = exports.HlsEncryptionSettings || (exports.HlsEncryptionSettings = {}));
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
var HlsOutputSelection;
(function (HlsOutputSelection) {
    HlsOutputSelection["MANIFESTS_AND_SEGMENTS"] = "MANIFESTS_AND_SEGMENTS";
    HlsOutputSelection["SEGMENTS_ONLY"] = "SEGMENTS_ONLY";
})(HlsOutputSelection = exports.HlsOutputSelection || (exports.HlsOutputSelection = {}));
var HlsProgramDateTime;
(function (HlsProgramDateTime) {
    HlsProgramDateTime["EXCLUDE"] = "EXCLUDE";
    HlsProgramDateTime["INCLUDE"] = "INCLUDE";
})(HlsProgramDateTime = exports.HlsProgramDateTime || (exports.HlsProgramDateTime = {}));
var HlsSegmentControl;
(function (HlsSegmentControl) {
    HlsSegmentControl["SEGMENTED_FILES"] = "SEGMENTED_FILES";
    HlsSegmentControl["SINGLE_FILE"] = "SINGLE_FILE";
})(HlsSegmentControl = exports.HlsSegmentControl || (exports.HlsSegmentControl = {}));
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
var HlsGroupSettings;
(function (HlsGroupSettings) {
    /**
     * @internal
     */
    HlsGroupSettings.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(HlsGroupSettings = exports.HlsGroupSettings || (exports.HlsGroupSettings = {}));
var MsSmoothAdditionalManifest;
(function (MsSmoothAdditionalManifest) {
    /**
     * @internal
     */
    MsSmoothAdditionalManifest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(MsSmoothAdditionalManifest = exports.MsSmoothAdditionalManifest || (exports.MsSmoothAdditionalManifest = {}));
var MsSmoothAudioDeduplication;
(function (MsSmoothAudioDeduplication) {
    MsSmoothAudioDeduplication["COMBINE_DUPLICATE_STREAMS"] = "COMBINE_DUPLICATE_STREAMS";
    MsSmoothAudioDeduplication["NONE"] = "NONE";
})(MsSmoothAudioDeduplication = exports.MsSmoothAudioDeduplication || (exports.MsSmoothAudioDeduplication = {}));
var MsSmoothEncryptionSettings;
(function (MsSmoothEncryptionSettings) {
    /**
     * @internal
     */
    MsSmoothEncryptionSettings.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(MsSmoothEncryptionSettings = exports.MsSmoothEncryptionSettings || (exports.MsSmoothEncryptionSettings = {}));
var MsSmoothManifestEncoding;
(function (MsSmoothManifestEncoding) {
    MsSmoothManifestEncoding["UTF16"] = "UTF16";
    MsSmoothManifestEncoding["UTF8"] = "UTF8";
})(MsSmoothManifestEncoding = exports.MsSmoothManifestEncoding || (exports.MsSmoothManifestEncoding = {}));
var MsSmoothGroupSettings;
(function (MsSmoothGroupSettings) {
    /**
     * @internal
     */
    MsSmoothGroupSettings.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(MsSmoothGroupSettings = exports.MsSmoothGroupSettings || (exports.MsSmoothGroupSettings = {}));
var OutputGroupType;
(function (OutputGroupType) {
    OutputGroupType["CMAF_GROUP_SETTINGS"] = "CMAF_GROUP_SETTINGS";
    OutputGroupType["DASH_ISO_GROUP_SETTINGS"] = "DASH_ISO_GROUP_SETTINGS";
    OutputGroupType["FILE_GROUP_SETTINGS"] = "FILE_GROUP_SETTINGS";
    OutputGroupType["HLS_GROUP_SETTINGS"] = "HLS_GROUP_SETTINGS";
    OutputGroupType["MS_SMOOTH_GROUP_SETTINGS"] = "MS_SMOOTH_GROUP_SETTINGS";
})(OutputGroupType = exports.OutputGroupType || (exports.OutputGroupType = {}));
var OutputGroupSettings;
(function (OutputGroupSettings) {
    /**
     * @internal
     */
    OutputGroupSettings.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(OutputGroupSettings = exports.OutputGroupSettings || (exports.OutputGroupSettings = {}));
var CmfcAudioDuration;
(function (CmfcAudioDuration) {
    CmfcAudioDuration["DEFAULT_CODEC_DURATION"] = "DEFAULT_CODEC_DURATION";
    CmfcAudioDuration["MATCH_VIDEO_DURATION"] = "MATCH_VIDEO_DURATION";
})(CmfcAudioDuration = exports.CmfcAudioDuration || (exports.CmfcAudioDuration = {}));
var CmfcAudioTrackType;
(function (CmfcAudioTrackType) {
    CmfcAudioTrackType["ALTERNATE_AUDIO_AUTO_SELECT"] = "ALTERNATE_AUDIO_AUTO_SELECT";
    CmfcAudioTrackType["ALTERNATE_AUDIO_AUTO_SELECT_DEFAULT"] = "ALTERNATE_AUDIO_AUTO_SELECT_DEFAULT";
    CmfcAudioTrackType["ALTERNATE_AUDIO_NOT_AUTO_SELECT"] = "ALTERNATE_AUDIO_NOT_AUTO_SELECT";
})(CmfcAudioTrackType = exports.CmfcAudioTrackType || (exports.CmfcAudioTrackType = {}));
var CmfcDescriptiveVideoServiceFlag;
(function (CmfcDescriptiveVideoServiceFlag) {
    CmfcDescriptiveVideoServiceFlag["DONT_FLAG"] = "DONT_FLAG";
    CmfcDescriptiveVideoServiceFlag["FLAG"] = "FLAG";
})(CmfcDescriptiveVideoServiceFlag = exports.CmfcDescriptiveVideoServiceFlag || (exports.CmfcDescriptiveVideoServiceFlag = {}));
var CmfcIFrameOnlyManifest;
(function (CmfcIFrameOnlyManifest) {
    CmfcIFrameOnlyManifest["EXCLUDE"] = "EXCLUDE";
    CmfcIFrameOnlyManifest["INCLUDE"] = "INCLUDE";
})(CmfcIFrameOnlyManifest = exports.CmfcIFrameOnlyManifest || (exports.CmfcIFrameOnlyManifest = {}));
var CmfcScte35Esam;
(function (CmfcScte35Esam) {
    CmfcScte35Esam["INSERT"] = "INSERT";
    CmfcScte35Esam["NONE"] = "NONE";
})(CmfcScte35Esam = exports.CmfcScte35Esam || (exports.CmfcScte35Esam = {}));
var CmfcScte35Source;
(function (CmfcScte35Source) {
    CmfcScte35Source["NONE"] = "NONE";
    CmfcScte35Source["PASSTHROUGH"] = "PASSTHROUGH";
})(CmfcScte35Source = exports.CmfcScte35Source || (exports.CmfcScte35Source = {}));
var CmfcSettings;
(function (CmfcSettings) {
    /**
     * @internal
     */
    CmfcSettings.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(CmfcSettings = exports.CmfcSettings || (exports.CmfcSettings = {}));
var ContainerType;
(function (ContainerType) {
    ContainerType["CMFC"] = "CMFC";
    ContainerType["F4V"] = "F4V";
    ContainerType["ISMV"] = "ISMV";
    ContainerType["M2TS"] = "M2TS";
    ContainerType["M3U8"] = "M3U8";
    ContainerType["MOV"] = "MOV";
    ContainerType["MP4"] = "MP4";
    ContainerType["MPD"] = "MPD";
    ContainerType["MXF"] = "MXF";
    ContainerType["RAW"] = "RAW";
    ContainerType["WEBM"] = "WEBM";
})(ContainerType = exports.ContainerType || (exports.ContainerType = {}));
var F4vMoovPlacement;
(function (F4vMoovPlacement) {
    F4vMoovPlacement["NORMAL"] = "NORMAL";
    F4vMoovPlacement["PROGRESSIVE_DOWNLOAD"] = "PROGRESSIVE_DOWNLOAD";
})(F4vMoovPlacement = exports.F4vMoovPlacement || (exports.F4vMoovPlacement = {}));
var F4vSettings;
(function (F4vSettings) {
    /**
     * @internal
     */
    F4vSettings.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(F4vSettings = exports.F4vSettings || (exports.F4vSettings = {}));
var M2tsAudioBufferModel;
(function (M2tsAudioBufferModel) {
    M2tsAudioBufferModel["ATSC"] = "ATSC";
    M2tsAudioBufferModel["DVB"] = "DVB";
})(M2tsAudioBufferModel = exports.M2tsAudioBufferModel || (exports.M2tsAudioBufferModel = {}));
var M2tsAudioDuration;
(function (M2tsAudioDuration) {
    M2tsAudioDuration["DEFAULT_CODEC_DURATION"] = "DEFAULT_CODEC_DURATION";
    M2tsAudioDuration["MATCH_VIDEO_DURATION"] = "MATCH_VIDEO_DURATION";
})(M2tsAudioDuration = exports.M2tsAudioDuration || (exports.M2tsAudioDuration = {}));
var M2tsBufferModel;
(function (M2tsBufferModel) {
    M2tsBufferModel["MULTIPLEX"] = "MULTIPLEX";
    M2tsBufferModel["NONE"] = "NONE";
})(M2tsBufferModel = exports.M2tsBufferModel || (exports.M2tsBufferModel = {}));
var DvbNitSettings;
(function (DvbNitSettings) {
    /**
     * @internal
     */
    DvbNitSettings.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(DvbNitSettings = exports.DvbNitSettings || (exports.DvbNitSettings = {}));
var OutputSdt;
(function (OutputSdt) {
    OutputSdt["SDT_FOLLOW"] = "SDT_FOLLOW";
    OutputSdt["SDT_FOLLOW_IF_PRESENT"] = "SDT_FOLLOW_IF_PRESENT";
    OutputSdt["SDT_MANUAL"] = "SDT_MANUAL";
    OutputSdt["SDT_NONE"] = "SDT_NONE";
})(OutputSdt = exports.OutputSdt || (exports.OutputSdt = {}));
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
var M2tsEbpAudioInterval;
(function (M2tsEbpAudioInterval) {
    M2tsEbpAudioInterval["VIDEO_AND_FIXED_INTERVALS"] = "VIDEO_AND_FIXED_INTERVALS";
    M2tsEbpAudioInterval["VIDEO_INTERVAL"] = "VIDEO_INTERVAL";
})(M2tsEbpAudioInterval = exports.M2tsEbpAudioInterval || (exports.M2tsEbpAudioInterval = {}));
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
var M2tsForceTsVideoEbpOrder;
(function (M2tsForceTsVideoEbpOrder) {
    M2tsForceTsVideoEbpOrder["DEFAULT"] = "DEFAULT";
    M2tsForceTsVideoEbpOrder["FORCE"] = "FORCE";
})(M2tsForceTsVideoEbpOrder = exports.M2tsForceTsVideoEbpOrder || (exports.M2tsForceTsVideoEbpOrder = {}));
var M2tsNielsenId3;
(function (M2tsNielsenId3) {
    M2tsNielsenId3["INSERT"] = "INSERT";
    M2tsNielsenId3["NONE"] = "NONE";
})(M2tsNielsenId3 = exports.M2tsNielsenId3 || (exports.M2tsNielsenId3 = {}));
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
var M2tsScte35Esam;
(function (M2tsScte35Esam) {
    /**
     * @internal
     */
    M2tsScte35Esam.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(M2tsScte35Esam = exports.M2tsScte35Esam || (exports.M2tsScte35Esam = {}));
var M2tsScte35Source;
(function (M2tsScte35Source) {
    M2tsScte35Source["NONE"] = "NONE";
    M2tsScte35Source["PASSTHROUGH"] = "PASSTHROUGH";
})(M2tsScte35Source = exports.M2tsScte35Source || (exports.M2tsScte35Source = {}));
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
var M2tsSettings;
(function (M2tsSettings) {
    /**
     * @internal
     */
    M2tsSettings.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(M2tsSettings = exports.M2tsSettings || (exports.M2tsSettings = {}));
var M3u8AudioDuration;
(function (M3u8AudioDuration) {
    M3u8AudioDuration["DEFAULT_CODEC_DURATION"] = "DEFAULT_CODEC_DURATION";
    M3u8AudioDuration["MATCH_VIDEO_DURATION"] = "MATCH_VIDEO_DURATION";
})(M3u8AudioDuration = exports.M3u8AudioDuration || (exports.M3u8AudioDuration = {}));
var M3u8NielsenId3;
(function (M3u8NielsenId3) {
    M3u8NielsenId3["INSERT"] = "INSERT";
    M3u8NielsenId3["NONE"] = "NONE";
})(M3u8NielsenId3 = exports.M3u8NielsenId3 || (exports.M3u8NielsenId3 = {}));
var M3u8PcrControl;
(function (M3u8PcrControl) {
    M3u8PcrControl["CONFIGURED_PCR_PERIOD"] = "CONFIGURED_PCR_PERIOD";
    M3u8PcrControl["PCR_EVERY_PES_PACKET"] = "PCR_EVERY_PES_PACKET";
})(M3u8PcrControl = exports.M3u8PcrControl || (exports.M3u8PcrControl = {}));
var M3u8Scte35Source;
(function (M3u8Scte35Source) {
    M3u8Scte35Source["NONE"] = "NONE";
    M3u8Scte35Source["PASSTHROUGH"] = "PASSTHROUGH";
})(M3u8Scte35Source = exports.M3u8Scte35Source || (exports.M3u8Scte35Source = {}));
var TimedMetadata;
(function (TimedMetadata) {
    TimedMetadata["NONE"] = "NONE";
    TimedMetadata["PASSTHROUGH"] = "PASSTHROUGH";
})(TimedMetadata = exports.TimedMetadata || (exports.TimedMetadata = {}));
var M3u8Settings;
(function (M3u8Settings) {
    /**
     * @internal
     */
    M3u8Settings.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(M3u8Settings = exports.M3u8Settings || (exports.M3u8Settings = {}));
var MovClapAtom;
(function (MovClapAtom) {
    MovClapAtom["EXCLUDE"] = "EXCLUDE";
    MovClapAtom["INCLUDE"] = "INCLUDE";
})(MovClapAtom = exports.MovClapAtom || (exports.MovClapAtom = {}));
var MovCslgAtom;
(function (MovCslgAtom) {
    MovCslgAtom["EXCLUDE"] = "EXCLUDE";
    MovCslgAtom["INCLUDE"] = "INCLUDE";
})(MovCslgAtom = exports.MovCslgAtom || (exports.MovCslgAtom = {}));
var MovMpeg2FourCCControl;
(function (MovMpeg2FourCCControl) {
    MovMpeg2FourCCControl["MPEG"] = "MPEG";
    MovMpeg2FourCCControl["XDCAM"] = "XDCAM";
})(MovMpeg2FourCCControl = exports.MovMpeg2FourCCControl || (exports.MovMpeg2FourCCControl = {}));
var MovPaddingControl;
(function (MovPaddingControl) {
    MovPaddingControl["NONE"] = "NONE";
    MovPaddingControl["OMNEON"] = "OMNEON";
})(MovPaddingControl = exports.MovPaddingControl || (exports.MovPaddingControl = {}));
var MovReference;
(function (MovReference) {
    MovReference["EXTERNAL"] = "EXTERNAL";
    MovReference["SELF_CONTAINED"] = "SELF_CONTAINED";
})(MovReference = exports.MovReference || (exports.MovReference = {}));
var MovSettings;
(function (MovSettings) {
    /**
     * @internal
     */
    MovSettings.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(MovSettings = exports.MovSettings || (exports.MovSettings = {}));
var Mp4CslgAtom;
(function (Mp4CslgAtom) {
    Mp4CslgAtom["EXCLUDE"] = "EXCLUDE";
    Mp4CslgAtom["INCLUDE"] = "INCLUDE";
})(Mp4CslgAtom = exports.Mp4CslgAtom || (exports.Mp4CslgAtom = {}));
var Mp4FreeSpaceBox;
(function (Mp4FreeSpaceBox) {
    Mp4FreeSpaceBox["EXCLUDE"] = "EXCLUDE";
    Mp4FreeSpaceBox["INCLUDE"] = "INCLUDE";
})(Mp4FreeSpaceBox = exports.Mp4FreeSpaceBox || (exports.Mp4FreeSpaceBox = {}));
var Mp4MoovPlacement;
(function (Mp4MoovPlacement) {
    Mp4MoovPlacement["NORMAL"] = "NORMAL";
    Mp4MoovPlacement["PROGRESSIVE_DOWNLOAD"] = "PROGRESSIVE_DOWNLOAD";
})(Mp4MoovPlacement = exports.Mp4MoovPlacement || (exports.Mp4MoovPlacement = {}));
var Mp4Settings;
(function (Mp4Settings) {
    /**
     * @internal
     */
    Mp4Settings.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(Mp4Settings = exports.Mp4Settings || (exports.Mp4Settings = {}));
var MpdAccessibilityCaptionHints;
(function (MpdAccessibilityCaptionHints) {
    MpdAccessibilityCaptionHints["EXCLUDE"] = "EXCLUDE";
    MpdAccessibilityCaptionHints["INCLUDE"] = "INCLUDE";
})(MpdAccessibilityCaptionHints = exports.MpdAccessibilityCaptionHints || (exports.MpdAccessibilityCaptionHints = {}));
var MpdAudioDuration;
(function (MpdAudioDuration) {
    MpdAudioDuration["DEFAULT_CODEC_DURATION"] = "DEFAULT_CODEC_DURATION";
    MpdAudioDuration["MATCH_VIDEO_DURATION"] = "MATCH_VIDEO_DURATION";
})(MpdAudioDuration = exports.MpdAudioDuration || (exports.MpdAudioDuration = {}));
var MpdCaptionContainerType;
(function (MpdCaptionContainerType) {
    MpdCaptionContainerType["FRAGMENTED_MP4"] = "FRAGMENTED_MP4";
    MpdCaptionContainerType["RAW"] = "RAW";
})(MpdCaptionContainerType = exports.MpdCaptionContainerType || (exports.MpdCaptionContainerType = {}));
var MpdScte35Esam;
(function (MpdScte35Esam) {
    MpdScte35Esam["INSERT"] = "INSERT";
    MpdScte35Esam["NONE"] = "NONE";
})(MpdScte35Esam = exports.MpdScte35Esam || (exports.MpdScte35Esam = {}));
var MpdScte35Source;
(function (MpdScte35Source) {
    MpdScte35Source["NONE"] = "NONE";
    MpdScte35Source["PASSTHROUGH"] = "PASSTHROUGH";
})(MpdScte35Source = exports.MpdScte35Source || (exports.MpdScte35Source = {}));
var MpdSettings;
(function (MpdSettings) {
    /**
     * @internal
     */
    MpdSettings.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(MpdSettings = exports.MpdSettings || (exports.MpdSettings = {}));
var MxfAfdSignaling;
(function (MxfAfdSignaling) {
    MxfAfdSignaling["COPY_FROM_VIDEO"] = "COPY_FROM_VIDEO";
    MxfAfdSignaling["NO_COPY"] = "NO_COPY";
})(MxfAfdSignaling = exports.MxfAfdSignaling || (exports.MxfAfdSignaling = {}));
var MxfProfile;
(function (MxfProfile) {
    MxfProfile["D_10"] = "D_10";
    MxfProfile["OP1A"] = "OP1A";
    MxfProfile["XDCAM"] = "XDCAM";
})(MxfProfile = exports.MxfProfile || (exports.MxfProfile = {}));
var MxfSettings;
(function (MxfSettings) {
    /**
     * @internal
     */
    MxfSettings.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(MxfSettings = exports.MxfSettings || (exports.MxfSettings = {}));
var ContainerSettings;
(function (ContainerSettings) {
    /**
     * @internal
     */
    ContainerSettings.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(ContainerSettings = exports.ContainerSettings || (exports.ContainerSettings = {}));
var HlsAudioOnlyContainer;
(function (HlsAudioOnlyContainer) {
    HlsAudioOnlyContainer["AUTOMATIC"] = "AUTOMATIC";
    HlsAudioOnlyContainer["M2TS"] = "M2TS";
})(HlsAudioOnlyContainer = exports.HlsAudioOnlyContainer || (exports.HlsAudioOnlyContainer = {}));
var HlsAudioTrackType;
(function (HlsAudioTrackType) {
    HlsAudioTrackType["ALTERNATE_AUDIO_AUTO_SELECT"] = "ALTERNATE_AUDIO_AUTO_SELECT";
    HlsAudioTrackType["ALTERNATE_AUDIO_AUTO_SELECT_DEFAULT"] = "ALTERNATE_AUDIO_AUTO_SELECT_DEFAULT";
    HlsAudioTrackType["ALTERNATE_AUDIO_NOT_AUTO_SELECT"] = "ALTERNATE_AUDIO_NOT_AUTO_SELECT";
    HlsAudioTrackType["AUDIO_ONLY_VARIANT_STREAM"] = "AUDIO_ONLY_VARIANT_STREAM";
})(HlsAudioTrackType = exports.HlsAudioTrackType || (exports.HlsAudioTrackType = {}));
var HlsDescriptiveVideoServiceFlag;
(function (HlsDescriptiveVideoServiceFlag) {
    HlsDescriptiveVideoServiceFlag["DONT_FLAG"] = "DONT_FLAG";
    HlsDescriptiveVideoServiceFlag["FLAG"] = "FLAG";
})(HlsDescriptiveVideoServiceFlag = exports.HlsDescriptiveVideoServiceFlag || (exports.HlsDescriptiveVideoServiceFlag = {}));
var HlsIFrameOnlyManifest;
(function (HlsIFrameOnlyManifest) {
    HlsIFrameOnlyManifest["EXCLUDE"] = "EXCLUDE";
    HlsIFrameOnlyManifest["INCLUDE"] = "INCLUDE";
})(HlsIFrameOnlyManifest = exports.HlsIFrameOnlyManifest || (exports.HlsIFrameOnlyManifest = {}));
var HlsSettings;
(function (HlsSettings) {
    /**
     * @internal
     */
    HlsSettings.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(HlsSettings = exports.HlsSettings || (exports.HlsSettings = {}));
var OutputSettings;
(function (OutputSettings) {
    /**
     * @internal
     */
    OutputSettings.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(OutputSettings = exports.OutputSettings || (exports.OutputSettings = {}));
var AfdSignaling;
(function (AfdSignaling) {
    AfdSignaling["AUTO"] = "AUTO";
    AfdSignaling["FIXED"] = "FIXED";
    AfdSignaling["NONE"] = "NONE";
})(AfdSignaling = exports.AfdSignaling || (exports.AfdSignaling = {}));
var AntiAlias;
(function (AntiAlias) {
    AntiAlias["DISABLED"] = "DISABLED";
    AntiAlias["ENABLED"] = "ENABLED";
})(AntiAlias = exports.AntiAlias || (exports.AntiAlias = {}));
var Av1AdaptiveQuantization;
(function (Av1AdaptiveQuantization) {
    Av1AdaptiveQuantization["HIGH"] = "HIGH";
    Av1AdaptiveQuantization["HIGHER"] = "HIGHER";
    Av1AdaptiveQuantization["LOW"] = "LOW";
    Av1AdaptiveQuantization["MAX"] = "MAX";
    Av1AdaptiveQuantization["MEDIUM"] = "MEDIUM";
    Av1AdaptiveQuantization["OFF"] = "OFF";
})(Av1AdaptiveQuantization = exports.Av1AdaptiveQuantization || (exports.Av1AdaptiveQuantization = {}));
var Av1FramerateControl;
(function (Av1FramerateControl) {
    Av1FramerateControl["INITIALIZE_FROM_SOURCE"] = "INITIALIZE_FROM_SOURCE";
    Av1FramerateControl["SPECIFIED"] = "SPECIFIED";
})(Av1FramerateControl = exports.Av1FramerateControl || (exports.Av1FramerateControl = {}));
var Av1FramerateConversionAlgorithm;
(function (Av1FramerateConversionAlgorithm) {
    Av1FramerateConversionAlgorithm["DUPLICATE_DROP"] = "DUPLICATE_DROP";
    Av1FramerateConversionAlgorithm["FRAMEFORMER"] = "FRAMEFORMER";
    Av1FramerateConversionAlgorithm["INTERPOLATE"] = "INTERPOLATE";
})(Av1FramerateConversionAlgorithm = exports.Av1FramerateConversionAlgorithm || (exports.Av1FramerateConversionAlgorithm = {}));
var Av1QvbrSettings;
(function (Av1QvbrSettings) {
    /**
     * @internal
     */
    Av1QvbrSettings.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(Av1QvbrSettings = exports.Av1QvbrSettings || (exports.Av1QvbrSettings = {}));
var Av1RateControlMode;
(function (Av1RateControlMode) {
    Av1RateControlMode["QVBR"] = "QVBR";
})(Av1RateControlMode = exports.Av1RateControlMode || (exports.Av1RateControlMode = {}));
var Av1SpatialAdaptiveQuantization;
(function (Av1SpatialAdaptiveQuantization) {
    Av1SpatialAdaptiveQuantization["DISABLED"] = "DISABLED";
    Av1SpatialAdaptiveQuantization["ENABLED"] = "ENABLED";
})(Av1SpatialAdaptiveQuantization = exports.Av1SpatialAdaptiveQuantization || (exports.Av1SpatialAdaptiveQuantization = {}));
//# sourceMappingURL=models_0.js.map