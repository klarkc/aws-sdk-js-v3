import { __assign } from "tslib";
export var InputChannelLevel;
(function (InputChannelLevel) {
    /**
     * @internal
     */
    InputChannelLevel.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(InputChannelLevel || (InputChannelLevel = {}));
export var AudioChannelMapping;
(function (AudioChannelMapping) {
    /**
     * @internal
     */
    AudioChannelMapping.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(AudioChannelMapping || (AudioChannelMapping = {}));
export var AudioNormalizationAlgorithm;
(function (AudioNormalizationAlgorithm) {
    AudioNormalizationAlgorithm["ITU_1770_1"] = "ITU_1770_1";
    AudioNormalizationAlgorithm["ITU_1770_2"] = "ITU_1770_2";
})(AudioNormalizationAlgorithm || (AudioNormalizationAlgorithm = {}));
export var AudioNormalizationAlgorithmControl;
(function (AudioNormalizationAlgorithmControl) {
    AudioNormalizationAlgorithmControl["CORRECT_AUDIO"] = "CORRECT_AUDIO";
})(AudioNormalizationAlgorithmControl || (AudioNormalizationAlgorithmControl = {}));
export var AudioNormalizationSettings;
(function (AudioNormalizationSettings) {
    /**
     * @internal
     */
    AudioNormalizationSettings.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(AudioNormalizationSettings || (AudioNormalizationSettings = {}));
export var AudioType;
(function (AudioType) {
    AudioType["CLEAN_EFFECTS"] = "CLEAN_EFFECTS";
    AudioType["HEARING_IMPAIRED"] = "HEARING_IMPAIRED";
    AudioType["UNDEFINED"] = "UNDEFINED";
    AudioType["VISUAL_IMPAIRED_COMMENTARY"] = "VISUAL_IMPAIRED_COMMENTARY";
})(AudioType || (AudioType = {}));
export var AudioDescriptionAudioTypeControl;
(function (AudioDescriptionAudioTypeControl) {
    AudioDescriptionAudioTypeControl["FOLLOW_INPUT"] = "FOLLOW_INPUT";
    AudioDescriptionAudioTypeControl["USE_CONFIGURED"] = "USE_CONFIGURED";
})(AudioDescriptionAudioTypeControl || (AudioDescriptionAudioTypeControl = {}));
export var AacCodingMode;
(function (AacCodingMode) {
    AacCodingMode["AD_RECEIVER_MIX"] = "AD_RECEIVER_MIX";
    AacCodingMode["CODING_MODE_1_0"] = "CODING_MODE_1_0";
    AacCodingMode["CODING_MODE_1_1"] = "CODING_MODE_1_1";
    AacCodingMode["CODING_MODE_2_0"] = "CODING_MODE_2_0";
    AacCodingMode["CODING_MODE_5_1"] = "CODING_MODE_5_1";
})(AacCodingMode || (AacCodingMode = {}));
export var AacInputType;
(function (AacInputType) {
    AacInputType["BROADCASTER_MIXED_AD"] = "BROADCASTER_MIXED_AD";
    AacInputType["NORMAL"] = "NORMAL";
})(AacInputType || (AacInputType = {}));
export var AacProfile;
(function (AacProfile) {
    AacProfile["HEV1"] = "HEV1";
    AacProfile["HEV2"] = "HEV2";
    AacProfile["LC"] = "LC";
})(AacProfile || (AacProfile = {}));
export var AacRateControlMode;
(function (AacRateControlMode) {
    AacRateControlMode["CBR"] = "CBR";
    AacRateControlMode["VBR"] = "VBR";
})(AacRateControlMode || (AacRateControlMode = {}));
export var AacRawFormat;
(function (AacRawFormat) {
    AacRawFormat["LATM_LOAS"] = "LATM_LOAS";
    AacRawFormat["NONE"] = "NONE";
})(AacRawFormat || (AacRawFormat = {}));
export var AacSpec;
(function (AacSpec) {
    AacSpec["MPEG2"] = "MPEG2";
    AacSpec["MPEG4"] = "MPEG4";
})(AacSpec || (AacSpec = {}));
export var AacVbrQuality;
(function (AacVbrQuality) {
    AacVbrQuality["HIGH"] = "HIGH";
    AacVbrQuality["LOW"] = "LOW";
    AacVbrQuality["MEDIUM_HIGH"] = "MEDIUM_HIGH";
    AacVbrQuality["MEDIUM_LOW"] = "MEDIUM_LOW";
})(AacVbrQuality || (AacVbrQuality = {}));
export var AacSettings;
(function (AacSettings) {
    /**
     * @internal
     */
    AacSettings.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(AacSettings || (AacSettings = {}));
export var Ac3BitstreamMode;
(function (Ac3BitstreamMode) {
    Ac3BitstreamMode["COMMENTARY"] = "COMMENTARY";
    Ac3BitstreamMode["COMPLETE_MAIN"] = "COMPLETE_MAIN";
    Ac3BitstreamMode["DIALOGUE"] = "DIALOGUE";
    Ac3BitstreamMode["EMERGENCY"] = "EMERGENCY";
    Ac3BitstreamMode["HEARING_IMPAIRED"] = "HEARING_IMPAIRED";
    Ac3BitstreamMode["MUSIC_AND_EFFECTS"] = "MUSIC_AND_EFFECTS";
    Ac3BitstreamMode["VISUALLY_IMPAIRED"] = "VISUALLY_IMPAIRED";
    Ac3BitstreamMode["VOICE_OVER"] = "VOICE_OVER";
})(Ac3BitstreamMode || (Ac3BitstreamMode = {}));
export var Ac3CodingMode;
(function (Ac3CodingMode) {
    Ac3CodingMode["CODING_MODE_1_0"] = "CODING_MODE_1_0";
    Ac3CodingMode["CODING_MODE_1_1"] = "CODING_MODE_1_1";
    Ac3CodingMode["CODING_MODE_2_0"] = "CODING_MODE_2_0";
    Ac3CodingMode["CODING_MODE_3_2_LFE"] = "CODING_MODE_3_2_LFE";
})(Ac3CodingMode || (Ac3CodingMode = {}));
export var Ac3DrcProfile;
(function (Ac3DrcProfile) {
    Ac3DrcProfile["FILM_STANDARD"] = "FILM_STANDARD";
    Ac3DrcProfile["NONE"] = "NONE";
})(Ac3DrcProfile || (Ac3DrcProfile = {}));
export var Ac3LfeFilter;
(function (Ac3LfeFilter) {
    Ac3LfeFilter["DISABLED"] = "DISABLED";
    Ac3LfeFilter["ENABLED"] = "ENABLED";
})(Ac3LfeFilter || (Ac3LfeFilter = {}));
export var Ac3MetadataControl;
(function (Ac3MetadataControl) {
    Ac3MetadataControl["FOLLOW_INPUT"] = "FOLLOW_INPUT";
    Ac3MetadataControl["USE_CONFIGURED"] = "USE_CONFIGURED";
})(Ac3MetadataControl || (Ac3MetadataControl = {}));
export var Ac3Settings;
(function (Ac3Settings) {
    /**
     * @internal
     */
    Ac3Settings.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(Ac3Settings || (Ac3Settings = {}));
export var Eac3AttenuationControl;
(function (Eac3AttenuationControl) {
    Eac3AttenuationControl["ATTENUATE_3_DB"] = "ATTENUATE_3_DB";
    Eac3AttenuationControl["NONE"] = "NONE";
})(Eac3AttenuationControl || (Eac3AttenuationControl = {}));
export var Eac3BitstreamMode;
(function (Eac3BitstreamMode) {
    Eac3BitstreamMode["COMMENTARY"] = "COMMENTARY";
    Eac3BitstreamMode["COMPLETE_MAIN"] = "COMPLETE_MAIN";
    Eac3BitstreamMode["EMERGENCY"] = "EMERGENCY";
    Eac3BitstreamMode["HEARING_IMPAIRED"] = "HEARING_IMPAIRED";
    Eac3BitstreamMode["VISUALLY_IMPAIRED"] = "VISUALLY_IMPAIRED";
})(Eac3BitstreamMode || (Eac3BitstreamMode = {}));
export var Eac3CodingMode;
(function (Eac3CodingMode) {
    Eac3CodingMode["CODING_MODE_1_0"] = "CODING_MODE_1_0";
    Eac3CodingMode["CODING_MODE_2_0"] = "CODING_MODE_2_0";
    Eac3CodingMode["CODING_MODE_3_2"] = "CODING_MODE_3_2";
})(Eac3CodingMode || (Eac3CodingMode = {}));
export var Eac3DcFilter;
(function (Eac3DcFilter) {
    Eac3DcFilter["DISABLED"] = "DISABLED";
    Eac3DcFilter["ENABLED"] = "ENABLED";
})(Eac3DcFilter || (Eac3DcFilter = {}));
export var Eac3DrcLine;
(function (Eac3DrcLine) {
    Eac3DrcLine["FILM_LIGHT"] = "FILM_LIGHT";
    Eac3DrcLine["FILM_STANDARD"] = "FILM_STANDARD";
    Eac3DrcLine["MUSIC_LIGHT"] = "MUSIC_LIGHT";
    Eac3DrcLine["MUSIC_STANDARD"] = "MUSIC_STANDARD";
    Eac3DrcLine["NONE"] = "NONE";
    Eac3DrcLine["SPEECH"] = "SPEECH";
})(Eac3DrcLine || (Eac3DrcLine = {}));
export var Eac3DrcRf;
(function (Eac3DrcRf) {
    Eac3DrcRf["FILM_LIGHT"] = "FILM_LIGHT";
    Eac3DrcRf["FILM_STANDARD"] = "FILM_STANDARD";
    Eac3DrcRf["MUSIC_LIGHT"] = "MUSIC_LIGHT";
    Eac3DrcRf["MUSIC_STANDARD"] = "MUSIC_STANDARD";
    Eac3DrcRf["NONE"] = "NONE";
    Eac3DrcRf["SPEECH"] = "SPEECH";
})(Eac3DrcRf || (Eac3DrcRf = {}));
export var Eac3LfeControl;
(function (Eac3LfeControl) {
    Eac3LfeControl["LFE"] = "LFE";
    Eac3LfeControl["NO_LFE"] = "NO_LFE";
})(Eac3LfeControl || (Eac3LfeControl = {}));
export var Eac3LfeFilter;
(function (Eac3LfeFilter) {
    Eac3LfeFilter["DISABLED"] = "DISABLED";
    Eac3LfeFilter["ENABLED"] = "ENABLED";
})(Eac3LfeFilter || (Eac3LfeFilter = {}));
export var Eac3MetadataControl;
(function (Eac3MetadataControl) {
    Eac3MetadataControl["FOLLOW_INPUT"] = "FOLLOW_INPUT";
    Eac3MetadataControl["USE_CONFIGURED"] = "USE_CONFIGURED";
})(Eac3MetadataControl || (Eac3MetadataControl = {}));
export var Eac3PassthroughControl;
(function (Eac3PassthroughControl) {
    Eac3PassthroughControl["NO_PASSTHROUGH"] = "NO_PASSTHROUGH";
    Eac3PassthroughControl["WHEN_POSSIBLE"] = "WHEN_POSSIBLE";
})(Eac3PassthroughControl || (Eac3PassthroughControl = {}));
export var Eac3PhaseControl;
(function (Eac3PhaseControl) {
    Eac3PhaseControl["NO_SHIFT"] = "NO_SHIFT";
    Eac3PhaseControl["SHIFT_90_DEGREES"] = "SHIFT_90_DEGREES";
})(Eac3PhaseControl || (Eac3PhaseControl = {}));
export var Eac3StereoDownmix;
(function (Eac3StereoDownmix) {
    Eac3StereoDownmix["DPL2"] = "DPL2";
    Eac3StereoDownmix["LO_RO"] = "LO_RO";
    Eac3StereoDownmix["LT_RT"] = "LT_RT";
    Eac3StereoDownmix["NOT_INDICATED"] = "NOT_INDICATED";
})(Eac3StereoDownmix || (Eac3StereoDownmix = {}));
export var Eac3SurroundExMode;
(function (Eac3SurroundExMode) {
    Eac3SurroundExMode["DISABLED"] = "DISABLED";
    Eac3SurroundExMode["ENABLED"] = "ENABLED";
    Eac3SurroundExMode["NOT_INDICATED"] = "NOT_INDICATED";
})(Eac3SurroundExMode || (Eac3SurroundExMode = {}));
export var Eac3SurroundMode;
(function (Eac3SurroundMode) {
    Eac3SurroundMode["DISABLED"] = "DISABLED";
    Eac3SurroundMode["ENABLED"] = "ENABLED";
    Eac3SurroundMode["NOT_INDICATED"] = "NOT_INDICATED";
})(Eac3SurroundMode || (Eac3SurroundMode = {}));
export var Eac3Settings;
(function (Eac3Settings) {
    /**
     * @internal
     */
    Eac3Settings.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(Eac3Settings || (Eac3Settings = {}));
export var Mp2CodingMode;
(function (Mp2CodingMode) {
    Mp2CodingMode["CODING_MODE_1_0"] = "CODING_MODE_1_0";
    Mp2CodingMode["CODING_MODE_2_0"] = "CODING_MODE_2_0";
})(Mp2CodingMode || (Mp2CodingMode = {}));
export var Mp2Settings;
(function (Mp2Settings) {
    /**
     * @internal
     */
    Mp2Settings.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(Mp2Settings || (Mp2Settings = {}));
export var PassThroughSettings;
(function (PassThroughSettings) {
    /**
     * @internal
     */
    PassThroughSettings.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(PassThroughSettings || (PassThroughSettings = {}));
export var WavCodingMode;
(function (WavCodingMode) {
    WavCodingMode["CODING_MODE_1_0"] = "CODING_MODE_1_0";
    WavCodingMode["CODING_MODE_2_0"] = "CODING_MODE_2_0";
    WavCodingMode["CODING_MODE_4_0"] = "CODING_MODE_4_0";
    WavCodingMode["CODING_MODE_8_0"] = "CODING_MODE_8_0";
})(WavCodingMode || (WavCodingMode = {}));
export var WavSettings;
(function (WavSettings) {
    /**
     * @internal
     */
    WavSettings.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(WavSettings || (WavSettings = {}));
export var AudioCodecSettings;
(function (AudioCodecSettings) {
    /**
     * @internal
     */
    AudioCodecSettings.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(AudioCodecSettings || (AudioCodecSettings = {}));
export var AudioDescriptionLanguageCodeControl;
(function (AudioDescriptionLanguageCodeControl) {
    AudioDescriptionLanguageCodeControl["FOLLOW_INPUT"] = "FOLLOW_INPUT";
    AudioDescriptionLanguageCodeControl["USE_CONFIGURED"] = "USE_CONFIGURED";
})(AudioDescriptionLanguageCodeControl || (AudioDescriptionLanguageCodeControl = {}));
export var RemixSettings;
(function (RemixSettings) {
    /**
     * @internal
     */
    RemixSettings.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(RemixSettings || (RemixSettings = {}));
export var AudioDescription;
(function (AudioDescription) {
    /**
     * @internal
     */
    AudioDescription.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(AudioDescription || (AudioDescription = {}));
export var AudioLanguageSelectionPolicy;
(function (AudioLanguageSelectionPolicy) {
    AudioLanguageSelectionPolicy["LOOSE"] = "LOOSE";
    AudioLanguageSelectionPolicy["STRICT"] = "STRICT";
})(AudioLanguageSelectionPolicy || (AudioLanguageSelectionPolicy = {}));
export var AudioLanguageSelection;
(function (AudioLanguageSelection) {
    /**
     * @internal
     */
    AudioLanguageSelection.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(AudioLanguageSelection || (AudioLanguageSelection = {}));
export var AudioPidSelection;
(function (AudioPidSelection) {
    /**
     * @internal
     */
    AudioPidSelection.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(AudioPidSelection || (AudioPidSelection = {}));
export var AudioTrack;
(function (AudioTrack) {
    /**
     * @internal
     */
    AudioTrack.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(AudioTrack || (AudioTrack = {}));
export var AudioTrackSelection;
(function (AudioTrackSelection) {
    /**
     * @internal
     */
    AudioTrackSelection.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(AudioTrackSelection || (AudioTrackSelection = {}));
export var AudioSelectorSettings;
(function (AudioSelectorSettings) {
    /**
     * @internal
     */
    AudioSelectorSettings.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(AudioSelectorSettings || (AudioSelectorSettings = {}));
export var AudioSelector;
(function (AudioSelector) {
    /**
     * @internal
     */
    AudioSelector.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(AudioSelector || (AudioSelector = {}));
export var BatchFailedResultModel;
(function (BatchFailedResultModel) {
    /**
     * @internal
     */
    BatchFailedResultModel.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(BatchFailedResultModel || (BatchFailedResultModel = {}));
export var BatchSuccessfulResultModel;
(function (BatchSuccessfulResultModel) {
    /**
     * @internal
     */
    BatchSuccessfulResultModel.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(BatchSuccessfulResultModel || (BatchSuccessfulResultModel = {}));
export var AribDestinationSettings;
(function (AribDestinationSettings) {
    /**
     * @internal
     */
    AribDestinationSettings.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(AribDestinationSettings || (AribDestinationSettings = {}));
export var BurnInAlignment;
(function (BurnInAlignment) {
    BurnInAlignment["CENTERED"] = "CENTERED";
    BurnInAlignment["LEFT"] = "LEFT";
    BurnInAlignment["SMART"] = "SMART";
})(BurnInAlignment || (BurnInAlignment = {}));
export var BurnInBackgroundColor;
(function (BurnInBackgroundColor) {
    BurnInBackgroundColor["BLACK"] = "BLACK";
    BurnInBackgroundColor["NONE"] = "NONE";
    BurnInBackgroundColor["WHITE"] = "WHITE";
})(BurnInBackgroundColor || (BurnInBackgroundColor = {}));
export var InputLocation;
(function (InputLocation) {
    /**
     * @internal
     */
    InputLocation.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(InputLocation || (InputLocation = {}));
export var BurnInFontColor;
(function (BurnInFontColor) {
    BurnInFontColor["BLACK"] = "BLACK";
    BurnInFontColor["BLUE"] = "BLUE";
    BurnInFontColor["GREEN"] = "GREEN";
    BurnInFontColor["RED"] = "RED";
    BurnInFontColor["WHITE"] = "WHITE";
    BurnInFontColor["YELLOW"] = "YELLOW";
})(BurnInFontColor || (BurnInFontColor = {}));
export var BurnInOutlineColor;
(function (BurnInOutlineColor) {
    BurnInOutlineColor["BLACK"] = "BLACK";
    BurnInOutlineColor["BLUE"] = "BLUE";
    BurnInOutlineColor["GREEN"] = "GREEN";
    BurnInOutlineColor["RED"] = "RED";
    BurnInOutlineColor["WHITE"] = "WHITE";
    BurnInOutlineColor["YELLOW"] = "YELLOW";
})(BurnInOutlineColor || (BurnInOutlineColor = {}));
export var BurnInShadowColor;
(function (BurnInShadowColor) {
    BurnInShadowColor["BLACK"] = "BLACK";
    BurnInShadowColor["NONE"] = "NONE";
    BurnInShadowColor["WHITE"] = "WHITE";
})(BurnInShadowColor || (BurnInShadowColor = {}));
export var BurnInTeletextGridControl;
(function (BurnInTeletextGridControl) {
    BurnInTeletextGridControl["FIXED"] = "FIXED";
    BurnInTeletextGridControl["SCALED"] = "SCALED";
})(BurnInTeletextGridControl || (BurnInTeletextGridControl = {}));
export var BurnInDestinationSettings;
(function (BurnInDestinationSettings) {
    /**
     * @internal
     */
    BurnInDestinationSettings.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(BurnInDestinationSettings || (BurnInDestinationSettings = {}));
export var DvbSubDestinationAlignment;
(function (DvbSubDestinationAlignment) {
    DvbSubDestinationAlignment["CENTERED"] = "CENTERED";
    DvbSubDestinationAlignment["LEFT"] = "LEFT";
    DvbSubDestinationAlignment["SMART"] = "SMART";
})(DvbSubDestinationAlignment || (DvbSubDestinationAlignment = {}));
export var DvbSubDestinationBackgroundColor;
(function (DvbSubDestinationBackgroundColor) {
    DvbSubDestinationBackgroundColor["BLACK"] = "BLACK";
    DvbSubDestinationBackgroundColor["NONE"] = "NONE";
    DvbSubDestinationBackgroundColor["WHITE"] = "WHITE";
})(DvbSubDestinationBackgroundColor || (DvbSubDestinationBackgroundColor = {}));
export var DvbSubDestinationFontColor;
(function (DvbSubDestinationFontColor) {
    DvbSubDestinationFontColor["BLACK"] = "BLACK";
    DvbSubDestinationFontColor["BLUE"] = "BLUE";
    DvbSubDestinationFontColor["GREEN"] = "GREEN";
    DvbSubDestinationFontColor["RED"] = "RED";
    DvbSubDestinationFontColor["WHITE"] = "WHITE";
    DvbSubDestinationFontColor["YELLOW"] = "YELLOW";
})(DvbSubDestinationFontColor || (DvbSubDestinationFontColor = {}));
export var DvbSubDestinationOutlineColor;
(function (DvbSubDestinationOutlineColor) {
    DvbSubDestinationOutlineColor["BLACK"] = "BLACK";
    DvbSubDestinationOutlineColor["BLUE"] = "BLUE";
    DvbSubDestinationOutlineColor["GREEN"] = "GREEN";
    DvbSubDestinationOutlineColor["RED"] = "RED";
    DvbSubDestinationOutlineColor["WHITE"] = "WHITE";
    DvbSubDestinationOutlineColor["YELLOW"] = "YELLOW";
})(DvbSubDestinationOutlineColor || (DvbSubDestinationOutlineColor = {}));
export var DvbSubDestinationShadowColor;
(function (DvbSubDestinationShadowColor) {
    DvbSubDestinationShadowColor["BLACK"] = "BLACK";
    DvbSubDestinationShadowColor["NONE"] = "NONE";
    DvbSubDestinationShadowColor["WHITE"] = "WHITE";
})(DvbSubDestinationShadowColor || (DvbSubDestinationShadowColor = {}));
export var DvbSubDestinationTeletextGridControl;
(function (DvbSubDestinationTeletextGridControl) {
    DvbSubDestinationTeletextGridControl["FIXED"] = "FIXED";
    DvbSubDestinationTeletextGridControl["SCALED"] = "SCALED";
})(DvbSubDestinationTeletextGridControl || (DvbSubDestinationTeletextGridControl = {}));
export var DvbSubDestinationSettings;
(function (DvbSubDestinationSettings) {
    /**
     * @internal
     */
    DvbSubDestinationSettings.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(DvbSubDestinationSettings || (DvbSubDestinationSettings = {}));
export var EbuTtDFillLineGapControl;
(function (EbuTtDFillLineGapControl) {
    EbuTtDFillLineGapControl["DISABLED"] = "DISABLED";
    EbuTtDFillLineGapControl["ENABLED"] = "ENABLED";
})(EbuTtDFillLineGapControl || (EbuTtDFillLineGapControl = {}));
export var EbuTtDDestinationStyleControl;
(function (EbuTtDDestinationStyleControl) {
    EbuTtDDestinationStyleControl["EXCLUDE"] = "EXCLUDE";
    EbuTtDDestinationStyleControl["INCLUDE"] = "INCLUDE";
})(EbuTtDDestinationStyleControl || (EbuTtDDestinationStyleControl = {}));
export var EbuTtDDestinationSettings;
(function (EbuTtDDestinationSettings) {
    /**
     * @internal
     */
    EbuTtDDestinationSettings.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(EbuTtDDestinationSettings || (EbuTtDDestinationSettings = {}));
export var EmbeddedDestinationSettings;
(function (EmbeddedDestinationSettings) {
    /**
     * @internal
     */
    EmbeddedDestinationSettings.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(EmbeddedDestinationSettings || (EmbeddedDestinationSettings = {}));
export var EmbeddedPlusScte20DestinationSettings;
(function (EmbeddedPlusScte20DestinationSettings) {
    /**
     * @internal
     */
    EmbeddedPlusScte20DestinationSettings.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(EmbeddedPlusScte20DestinationSettings || (EmbeddedPlusScte20DestinationSettings = {}));
export var RtmpCaptionInfoDestinationSettings;
(function (RtmpCaptionInfoDestinationSettings) {
    /**
     * @internal
     */
    RtmpCaptionInfoDestinationSettings.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(RtmpCaptionInfoDestinationSettings || (RtmpCaptionInfoDestinationSettings = {}));
export var Scte20PlusEmbeddedDestinationSettings;
(function (Scte20PlusEmbeddedDestinationSettings) {
    /**
     * @internal
     */
    Scte20PlusEmbeddedDestinationSettings.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(Scte20PlusEmbeddedDestinationSettings || (Scte20PlusEmbeddedDestinationSettings = {}));
export var Scte27DestinationSettings;
(function (Scte27DestinationSettings) {
    /**
     * @internal
     */
    Scte27DestinationSettings.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(Scte27DestinationSettings || (Scte27DestinationSettings = {}));
export var SmpteTtDestinationSettings;
(function (SmpteTtDestinationSettings) {
    /**
     * @internal
     */
    SmpteTtDestinationSettings.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(SmpteTtDestinationSettings || (SmpteTtDestinationSettings = {}));
export var TeletextDestinationSettings;
(function (TeletextDestinationSettings) {
    /**
     * @internal
     */
    TeletextDestinationSettings.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(TeletextDestinationSettings || (TeletextDestinationSettings = {}));
export var TtmlDestinationStyleControl;
(function (TtmlDestinationStyleControl) {
    TtmlDestinationStyleControl["PASSTHROUGH"] = "PASSTHROUGH";
    TtmlDestinationStyleControl["USE_CONFIGURED"] = "USE_CONFIGURED";
})(TtmlDestinationStyleControl || (TtmlDestinationStyleControl = {}));
export var TtmlDestinationSettings;
(function (TtmlDestinationSettings) {
    /**
     * @internal
     */
    TtmlDestinationSettings.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(TtmlDestinationSettings || (TtmlDestinationSettings = {}));
export var WebvttDestinationSettings;
(function (WebvttDestinationSettings) {
    /**
     * @internal
     */
    WebvttDestinationSettings.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(WebvttDestinationSettings || (WebvttDestinationSettings = {}));
export var CaptionDestinationSettings;
(function (CaptionDestinationSettings) {
    /**
     * @internal
     */
    CaptionDestinationSettings.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(CaptionDestinationSettings || (CaptionDestinationSettings = {}));
export var CaptionDescription;
(function (CaptionDescription) {
    /**
     * @internal
     */
    CaptionDescription.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(CaptionDescription || (CaptionDescription = {}));
export var CaptionLanguageMapping;
(function (CaptionLanguageMapping) {
    /**
     * @internal
     */
    CaptionLanguageMapping.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(CaptionLanguageMapping || (CaptionLanguageMapping = {}));
export var AncillarySourceSettings;
(function (AncillarySourceSettings) {
    /**
     * @internal
     */
    AncillarySourceSettings.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(AncillarySourceSettings || (AncillarySourceSettings = {}));
export var AribSourceSettings;
(function (AribSourceSettings) {
    /**
     * @internal
     */
    AribSourceSettings.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(AribSourceSettings || (AribSourceSettings = {}));
export var DvbSubSourceSettings;
(function (DvbSubSourceSettings) {
    /**
     * @internal
     */
    DvbSubSourceSettings.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(DvbSubSourceSettings || (DvbSubSourceSettings = {}));
export var EmbeddedConvert608To708;
(function (EmbeddedConvert608To708) {
    EmbeddedConvert608To708["DISABLED"] = "DISABLED";
    EmbeddedConvert608To708["UPCONVERT"] = "UPCONVERT";
})(EmbeddedConvert608To708 || (EmbeddedConvert608To708 = {}));
export var EmbeddedScte20Detection;
(function (EmbeddedScte20Detection) {
    EmbeddedScte20Detection["AUTO"] = "AUTO";
    EmbeddedScte20Detection["OFF"] = "OFF";
})(EmbeddedScte20Detection || (EmbeddedScte20Detection = {}));
export var EmbeddedSourceSettings;
(function (EmbeddedSourceSettings) {
    /**
     * @internal
     */
    EmbeddedSourceSettings.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(EmbeddedSourceSettings || (EmbeddedSourceSettings = {}));
export var Scte20Convert608To708;
(function (Scte20Convert608To708) {
    Scte20Convert608To708["DISABLED"] = "DISABLED";
    Scte20Convert608To708["UPCONVERT"] = "UPCONVERT";
})(Scte20Convert608To708 || (Scte20Convert608To708 = {}));
export var Scte20SourceSettings;
(function (Scte20SourceSettings) {
    /**
     * @internal
     */
    Scte20SourceSettings.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(Scte20SourceSettings || (Scte20SourceSettings = {}));
export var Scte27SourceSettings;
(function (Scte27SourceSettings) {
    /**
     * @internal
     */
    Scte27SourceSettings.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(Scte27SourceSettings || (Scte27SourceSettings = {}));
export var CaptionRectangle;
(function (CaptionRectangle) {
    /**
     * @internal
     */
    CaptionRectangle.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(CaptionRectangle || (CaptionRectangle = {}));
export var TeletextSourceSettings;
(function (TeletextSourceSettings) {
    /**
     * @internal
     */
    TeletextSourceSettings.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(TeletextSourceSettings || (TeletextSourceSettings = {}));
export var CaptionSelectorSettings;
(function (CaptionSelectorSettings) {
    /**
     * @internal
     */
    CaptionSelectorSettings.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(CaptionSelectorSettings || (CaptionSelectorSettings = {}));
export var CaptionSelector;
(function (CaptionSelector) {
    /**
     * @internal
     */
    CaptionSelector.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(CaptionSelector || (CaptionSelector = {}));
export var ChannelEgressEndpoint;
(function (ChannelEgressEndpoint) {
    /**
     * @internal
     */
    ChannelEgressEndpoint.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(ChannelEgressEndpoint || (ChannelEgressEndpoint = {}));
export var CdiInputResolution;
(function (CdiInputResolution) {
    CdiInputResolution["FHD"] = "FHD";
    CdiInputResolution["HD"] = "HD";
    CdiInputResolution["SD"] = "SD";
    CdiInputResolution["UHD"] = "UHD";
})(CdiInputResolution || (CdiInputResolution = {}));
export var CdiInputSpecification;
(function (CdiInputSpecification) {
    /**
     * @internal
     */
    CdiInputSpecification.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(CdiInputSpecification || (CdiInputSpecification = {}));
export var ChannelClass;
(function (ChannelClass) {
    ChannelClass["SINGLE_PIPELINE"] = "SINGLE_PIPELINE";
    ChannelClass["STANDARD"] = "STANDARD";
})(ChannelClass || (ChannelClass = {}));
export var MediaPackageOutputDestinationSettings;
(function (MediaPackageOutputDestinationSettings) {
    /**
     * @internal
     */
    MediaPackageOutputDestinationSettings.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(MediaPackageOutputDestinationSettings || (MediaPackageOutputDestinationSettings = {}));
export var MultiplexProgramChannelDestinationSettings;
(function (MultiplexProgramChannelDestinationSettings) {
    /**
     * @internal
     */
    MultiplexProgramChannelDestinationSettings.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(MultiplexProgramChannelDestinationSettings || (MultiplexProgramChannelDestinationSettings = {}));
export var OutputDestinationSettings;
(function (OutputDestinationSettings) {
    /**
     * @internal
     */
    OutputDestinationSettings.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(OutputDestinationSettings || (OutputDestinationSettings = {}));
export var OutputDestination;
(function (OutputDestination) {
    /**
     * @internal
     */
    OutputDestination.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(OutputDestination || (OutputDestination = {}));
export var AudioSilenceFailoverSettings;
(function (AudioSilenceFailoverSettings) {
    /**
     * @internal
     */
    AudioSilenceFailoverSettings.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(AudioSilenceFailoverSettings || (AudioSilenceFailoverSettings = {}));
export var InputLossFailoverSettings;
(function (InputLossFailoverSettings) {
    /**
     * @internal
     */
    InputLossFailoverSettings.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(InputLossFailoverSettings || (InputLossFailoverSettings = {}));
export var VideoBlackFailoverSettings;
(function (VideoBlackFailoverSettings) {
    /**
     * @internal
     */
    VideoBlackFailoverSettings.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(VideoBlackFailoverSettings || (VideoBlackFailoverSettings = {}));
export var FailoverConditionSettings;
(function (FailoverConditionSettings) {
    /**
     * @internal
     */
    FailoverConditionSettings.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(FailoverConditionSettings || (FailoverConditionSettings = {}));
export var FailoverCondition;
(function (FailoverCondition) {
    /**
     * @internal
     */
    FailoverCondition.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(FailoverCondition || (FailoverCondition = {}));
export var InputPreference;
(function (InputPreference) {
    InputPreference["EQUAL_INPUT_PREFERENCE"] = "EQUAL_INPUT_PREFERENCE";
    InputPreference["PRIMARY_INPUT_PREFERRED"] = "PRIMARY_INPUT_PREFERRED";
})(InputPreference || (InputPreference = {}));
export var AutomaticInputFailoverSettings;
(function (AutomaticInputFailoverSettings) {
    /**
     * @internal
     */
    AutomaticInputFailoverSettings.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(AutomaticInputFailoverSettings || (AutomaticInputFailoverSettings = {}));
export var InputDeblockFilter;
(function (InputDeblockFilter) {
    InputDeblockFilter["DISABLED"] = "DISABLED";
    InputDeblockFilter["ENABLED"] = "ENABLED";
})(InputDeblockFilter || (InputDeblockFilter = {}));
export var InputDenoiseFilter;
(function (InputDenoiseFilter) {
    InputDenoiseFilter["DISABLED"] = "DISABLED";
    InputDenoiseFilter["ENABLED"] = "ENABLED";
})(InputDenoiseFilter || (InputDenoiseFilter = {}));
export var InputFilter;
(function (InputFilter) {
    InputFilter["AUTO"] = "AUTO";
    InputFilter["DISABLED"] = "DISABLED";
    InputFilter["FORCED"] = "FORCED";
})(InputFilter || (InputFilter = {}));
export var HlsInputSettings;
(function (HlsInputSettings) {
    /**
     * @internal
     */
    HlsInputSettings.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(HlsInputSettings || (HlsInputSettings = {}));
export var NetworkInputServerValidation;
(function (NetworkInputServerValidation) {
    NetworkInputServerValidation["CHECK_CRYPTOGRAPHY_AND_VALIDATE_NAME"] = "CHECK_CRYPTOGRAPHY_AND_VALIDATE_NAME";
    NetworkInputServerValidation["CHECK_CRYPTOGRAPHY_ONLY"] = "CHECK_CRYPTOGRAPHY_ONLY";
})(NetworkInputServerValidation || (NetworkInputServerValidation = {}));
export var NetworkInputSettings;
(function (NetworkInputSettings) {
    /**
     * @internal
     */
    NetworkInputSettings.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(NetworkInputSettings || (NetworkInputSettings = {}));
export var Smpte2038DataPreference;
(function (Smpte2038DataPreference) {
    Smpte2038DataPreference["IGNORE"] = "IGNORE";
    Smpte2038DataPreference["PREFER"] = "PREFER";
})(Smpte2038DataPreference || (Smpte2038DataPreference = {}));
export var InputSourceEndBehavior;
(function (InputSourceEndBehavior) {
    InputSourceEndBehavior["CONTINUE"] = "CONTINUE";
    InputSourceEndBehavior["LOOP"] = "LOOP";
})(InputSourceEndBehavior || (InputSourceEndBehavior = {}));
export var VideoSelectorColorSpace;
(function (VideoSelectorColorSpace) {
    VideoSelectorColorSpace["FOLLOW"] = "FOLLOW";
    VideoSelectorColorSpace["HDR10"] = "HDR10";
    VideoSelectorColorSpace["HLG_2020"] = "HLG_2020";
    VideoSelectorColorSpace["REC_601"] = "REC_601";
    VideoSelectorColorSpace["REC_709"] = "REC_709";
})(VideoSelectorColorSpace || (VideoSelectorColorSpace = {}));
export var Hdr10Settings;
(function (Hdr10Settings) {
    /**
     * @internal
     */
    Hdr10Settings.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(Hdr10Settings || (Hdr10Settings = {}));
export var VideoSelectorColorSpaceSettings;
(function (VideoSelectorColorSpaceSettings) {
    /**
     * @internal
     */
    VideoSelectorColorSpaceSettings.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(VideoSelectorColorSpaceSettings || (VideoSelectorColorSpaceSettings = {}));
export var VideoSelectorColorSpaceUsage;
(function (VideoSelectorColorSpaceUsage) {
    VideoSelectorColorSpaceUsage["FALLBACK"] = "FALLBACK";
    VideoSelectorColorSpaceUsage["FORCE"] = "FORCE";
})(VideoSelectorColorSpaceUsage || (VideoSelectorColorSpaceUsage = {}));
export var VideoSelectorPid;
(function (VideoSelectorPid) {
    /**
     * @internal
     */
    VideoSelectorPid.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(VideoSelectorPid || (VideoSelectorPid = {}));
export var VideoSelectorProgramId;
(function (VideoSelectorProgramId) {
    /**
     * @internal
     */
    VideoSelectorProgramId.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(VideoSelectorProgramId || (VideoSelectorProgramId = {}));
export var VideoSelectorSettings;
(function (VideoSelectorSettings) {
    /**
     * @internal
     */
    VideoSelectorSettings.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(VideoSelectorSettings || (VideoSelectorSettings = {}));
export var VideoSelector;
(function (VideoSelector) {
    /**
     * @internal
     */
    VideoSelector.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(VideoSelector || (VideoSelector = {}));
export var InputSettings;
(function (InputSettings) {
    /**
     * @internal
     */
    InputSettings.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(InputSettings || (InputSettings = {}));
export var InputAttachment;
(function (InputAttachment) {
    /**
     * @internal
     */
    InputAttachment.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(InputAttachment || (InputAttachment = {}));
export var InputCodec;
(function (InputCodec) {
    InputCodec["AVC"] = "AVC";
    InputCodec["HEVC"] = "HEVC";
    InputCodec["MPEG2"] = "MPEG2";
})(InputCodec || (InputCodec = {}));
export var InputMaximumBitrate;
(function (InputMaximumBitrate) {
    InputMaximumBitrate["MAX_10_MBPS"] = "MAX_10_MBPS";
    InputMaximumBitrate["MAX_20_MBPS"] = "MAX_20_MBPS";
    InputMaximumBitrate["MAX_50_MBPS"] = "MAX_50_MBPS";
})(InputMaximumBitrate || (InputMaximumBitrate = {}));
export var InputResolution;
(function (InputResolution) {
    InputResolution["HD"] = "HD";
    InputResolution["SD"] = "SD";
    InputResolution["UHD"] = "UHD";
})(InputResolution || (InputResolution = {}));
export var InputSpecification;
(function (InputSpecification) {
    /**
     * @internal
     */
    InputSpecification.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(InputSpecification || (InputSpecification = {}));
export var LogLevel;
(function (LogLevel) {
    LogLevel["DEBUG"] = "DEBUG";
    LogLevel["DISABLED"] = "DISABLED";
    LogLevel["ERROR"] = "ERROR";
    LogLevel["INFO"] = "INFO";
    LogLevel["WARNING"] = "WARNING";
})(LogLevel || (LogLevel = {}));
export var ChannelState;
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
})(ChannelState || (ChannelState = {}));
export var VpcOutputSettingsDescription;
(function (VpcOutputSettingsDescription) {
    /**
     * @internal
     */
    VpcOutputSettingsDescription.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(VpcOutputSettingsDescription || (VpcOutputSettingsDescription = {}));
export var ChannelSummary;
(function (ChannelSummary) {
    /**
     * @internal
     */
    ChannelSummary.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(ChannelSummary || (ChannelSummary = {}));
export var HlsAdMarkers;
(function (HlsAdMarkers) {
    HlsAdMarkers["ADOBE"] = "ADOBE";
    HlsAdMarkers["ELEMENTAL"] = "ELEMENTAL";
    HlsAdMarkers["ELEMENTAL_SCTE35"] = "ELEMENTAL_SCTE35";
})(HlsAdMarkers || (HlsAdMarkers = {}));
export var InputDestinationVpc;
(function (InputDestinationVpc) {
    /**
     * @internal
     */
    InputDestinationVpc.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(InputDestinationVpc || (InputDestinationVpc = {}));
export var InputDestination;
(function (InputDestination) {
    /**
     * @internal
     */
    InputDestination.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(InputDestination || (InputDestination = {}));
export var InputClass;
(function (InputClass) {
    InputClass["SINGLE_PIPELINE"] = "SINGLE_PIPELINE";
    InputClass["STANDARD"] = "STANDARD";
})(InputClass || (InputClass = {}));
export var InputDeviceSettings;
(function (InputDeviceSettings) {
    /**
     * @internal
     */
    InputDeviceSettings.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(InputDeviceSettings || (InputDeviceSettings = {}));
export var InputSourceType;
(function (InputSourceType) {
    InputSourceType["DYNAMIC"] = "DYNAMIC";
    InputSourceType["STATIC"] = "STATIC";
})(InputSourceType || (InputSourceType = {}));
export var MediaConnectFlow;
(function (MediaConnectFlow) {
    /**
     * @internal
     */
    MediaConnectFlow.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(MediaConnectFlow || (MediaConnectFlow = {}));
export var InputSource;
(function (InputSource) {
    /**
     * @internal
     */
    InputSource.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(InputSource || (InputSource = {}));
export var InputState;
(function (InputState) {
    InputState["ATTACHED"] = "ATTACHED";
    InputState["CREATING"] = "CREATING";
    InputState["DELETED"] = "DELETED";
    InputState["DELETING"] = "DELETING";
    InputState["DETACHED"] = "DETACHED";
})(InputState || (InputState = {}));
export var InputType;
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
})(InputType || (InputType = {}));
export var Input;
(function (Input) {
    /**
     * @internal
     */
    Input.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(Input || (Input = {}));
export var InputDestinationRequest;
(function (InputDestinationRequest) {
    /**
     * @internal
     */
    InputDestinationRequest.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(InputDestinationRequest || (InputDestinationRequest = {}));
export var InputDeviceRequest;
(function (InputDeviceRequest) {
    /**
     * @internal
     */
    InputDeviceRequest.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(InputDeviceRequest || (InputDeviceRequest = {}));
export var InputDeviceConnectionState;
(function (InputDeviceConnectionState) {
    InputDeviceConnectionState["CONNECTED"] = "CONNECTED";
    InputDeviceConnectionState["DISCONNECTED"] = "DISCONNECTED";
})(InputDeviceConnectionState || (InputDeviceConnectionState = {}));
export var DeviceSettingsSyncState;
(function (DeviceSettingsSyncState) {
    DeviceSettingsSyncState["SYNCED"] = "SYNCED";
    DeviceSettingsSyncState["SYNCING"] = "SYNCING";
})(DeviceSettingsSyncState || (DeviceSettingsSyncState = {}));
export var DeviceUpdateStatus;
(function (DeviceUpdateStatus) {
    DeviceUpdateStatus["NOT_UP_TO_DATE"] = "NOT_UP_TO_DATE";
    DeviceUpdateStatus["UP_TO_DATE"] = "UP_TO_DATE";
})(DeviceUpdateStatus || (DeviceUpdateStatus = {}));
export var InputDeviceActiveInput;
(function (InputDeviceActiveInput) {
    InputDeviceActiveInput["HDMI"] = "HDMI";
    InputDeviceActiveInput["SDI"] = "SDI";
})(InputDeviceActiveInput || (InputDeviceActiveInput = {}));
export var InputDeviceConfiguredInput;
(function (InputDeviceConfiguredInput) {
    InputDeviceConfiguredInput["AUTO"] = "AUTO";
    InputDeviceConfiguredInput["HDMI"] = "HDMI";
    InputDeviceConfiguredInput["SDI"] = "SDI";
})(InputDeviceConfiguredInput || (InputDeviceConfiguredInput = {}));
export var InputDeviceState;
(function (InputDeviceState) {
    InputDeviceState["IDLE"] = "IDLE";
    InputDeviceState["STREAMING"] = "STREAMING";
})(InputDeviceState || (InputDeviceState = {}));
export var InputDeviceScanType;
(function (InputDeviceScanType) {
    InputDeviceScanType["INTERLACED"] = "INTERLACED";
    InputDeviceScanType["PROGRESSIVE"] = "PROGRESSIVE";
})(InputDeviceScanType || (InputDeviceScanType = {}));
export var InputDeviceHdSettings;
(function (InputDeviceHdSettings) {
    /**
     * @internal
     */
    InputDeviceHdSettings.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(InputDeviceHdSettings || (InputDeviceHdSettings = {}));
export var InputDeviceIpScheme;
(function (InputDeviceIpScheme) {
    InputDeviceIpScheme["DHCP"] = "DHCP";
    InputDeviceIpScheme["STATIC"] = "STATIC";
})(InputDeviceIpScheme || (InputDeviceIpScheme = {}));
export var InputDeviceNetworkSettings;
(function (InputDeviceNetworkSettings) {
    /**
     * @internal
     */
    InputDeviceNetworkSettings.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(InputDeviceNetworkSettings || (InputDeviceNetworkSettings = {}));
export var InputDeviceType;
(function (InputDeviceType) {
    InputDeviceType["HD"] = "HD";
})(InputDeviceType || (InputDeviceType = {}));
export var InputDeviceUhdSettings;
(function (InputDeviceUhdSettings) {
    /**
     * @internal
     */
    InputDeviceUhdSettings.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(InputDeviceUhdSettings || (InputDeviceUhdSettings = {}));
export var InputDeviceSummary;
(function (InputDeviceSummary) {
    /**
     * @internal
     */
    InputDeviceSummary.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(InputDeviceSummary || (InputDeviceSummary = {}));
export var InputSecurityGroupState;
(function (InputSecurityGroupState) {
    InputSecurityGroupState["DELETED"] = "DELETED";
    InputSecurityGroupState["IDLE"] = "IDLE";
    InputSecurityGroupState["IN_USE"] = "IN_USE";
    InputSecurityGroupState["UPDATING"] = "UPDATING";
})(InputSecurityGroupState || (InputSecurityGroupState = {}));
export var InputWhitelistRule;
(function (InputWhitelistRule) {
    /**
     * @internal
     */
    InputWhitelistRule.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(InputWhitelistRule || (InputWhitelistRule = {}));
export var InputSecurityGroup;
(function (InputSecurityGroup) {
    /**
     * @internal
     */
    InputSecurityGroup.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(InputSecurityGroup || (InputSecurityGroup = {}));
export var InputSourceRequest;
(function (InputSourceRequest) {
    /**
     * @internal
     */
    InputSourceRequest.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(InputSourceRequest || (InputSourceRequest = {}));
export var InputWhitelistRuleCidr;
(function (InputWhitelistRuleCidr) {
    /**
     * @internal
     */
    InputWhitelistRuleCidr.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(InputWhitelistRuleCidr || (InputWhitelistRuleCidr = {}));
export var MediaConnectFlowRequest;
(function (MediaConnectFlowRequest) {
    /**
     * @internal
     */
    MediaConnectFlowRequest.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(MediaConnectFlowRequest || (MediaConnectFlowRequest = {}));
export var MultiplexMediaConnectOutputDestinationSettings;
(function (MultiplexMediaConnectOutputDestinationSettings) {
    /**
     * @internal
     */
    MultiplexMediaConnectOutputDestinationSettings.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(MultiplexMediaConnectOutputDestinationSettings || (MultiplexMediaConnectOutputDestinationSettings = {}));
export var MultiplexOutputDestination;
(function (MultiplexOutputDestination) {
    /**
     * @internal
     */
    MultiplexOutputDestination.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(MultiplexOutputDestination || (MultiplexOutputDestination = {}));
export var MultiplexProgramPipelineDetail;
(function (MultiplexProgramPipelineDetail) {
    /**
     * @internal
     */
    MultiplexProgramPipelineDetail.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(MultiplexProgramPipelineDetail || (MultiplexProgramPipelineDetail = {}));
export var MultiplexProgramSummary;
(function (MultiplexProgramSummary) {
    /**
     * @internal
     */
    MultiplexProgramSummary.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(MultiplexProgramSummary || (MultiplexProgramSummary = {}));
export var MultiplexSettingsSummary;
(function (MultiplexSettingsSummary) {
    /**
     * @internal
     */
    MultiplexSettingsSummary.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(MultiplexSettingsSummary || (MultiplexSettingsSummary = {}));
export var MultiplexState;
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
})(MultiplexState || (MultiplexState = {}));
export var MultiplexSummary;
(function (MultiplexSummary) {
    /**
     * @internal
     */
    MultiplexSummary.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(MultiplexSummary || (MultiplexSummary = {}));
export var OfferingDurationUnits;
(function (OfferingDurationUnits) {
    OfferingDurationUnits["MONTHS"] = "MONTHS";
})(OfferingDurationUnits || (OfferingDurationUnits = {}));
export var OfferingType;
(function (OfferingType) {
    OfferingType["NO_UPFRONT"] = "NO_UPFRONT";
})(OfferingType || (OfferingType = {}));
export var ReservationCodec;
(function (ReservationCodec) {
    ReservationCodec["AUDIO"] = "AUDIO";
    ReservationCodec["AVC"] = "AVC";
    ReservationCodec["HEVC"] = "HEVC";
    ReservationCodec["LINK"] = "LINK";
    ReservationCodec["MPEG2"] = "MPEG2";
})(ReservationCodec || (ReservationCodec = {}));
export var ReservationMaximumBitrate;
(function (ReservationMaximumBitrate) {
    ReservationMaximumBitrate["MAX_10_MBPS"] = "MAX_10_MBPS";
    ReservationMaximumBitrate["MAX_20_MBPS"] = "MAX_20_MBPS";
    ReservationMaximumBitrate["MAX_50_MBPS"] = "MAX_50_MBPS";
})(ReservationMaximumBitrate || (ReservationMaximumBitrate = {}));
export var ReservationMaximumFramerate;
(function (ReservationMaximumFramerate) {
    ReservationMaximumFramerate["MAX_30_FPS"] = "MAX_30_FPS";
    ReservationMaximumFramerate["MAX_60_FPS"] = "MAX_60_FPS";
})(ReservationMaximumFramerate || (ReservationMaximumFramerate = {}));
export var ReservationResolution;
(function (ReservationResolution) {
    ReservationResolution["FHD"] = "FHD";
    ReservationResolution["HD"] = "HD";
    ReservationResolution["SD"] = "SD";
    ReservationResolution["UHD"] = "UHD";
})(ReservationResolution || (ReservationResolution = {}));
export var ReservationResourceType;
(function (ReservationResourceType) {
    ReservationResourceType["CHANNEL"] = "CHANNEL";
    ReservationResourceType["INPUT"] = "INPUT";
    ReservationResourceType["MULTIPLEX"] = "MULTIPLEX";
    ReservationResourceType["OUTPUT"] = "OUTPUT";
})(ReservationResourceType || (ReservationResourceType = {}));
export var ReservationSpecialFeature;
(function (ReservationSpecialFeature) {
    ReservationSpecialFeature["ADVANCED_AUDIO"] = "ADVANCED_AUDIO";
    ReservationSpecialFeature["AUDIO_NORMALIZATION"] = "AUDIO_NORMALIZATION";
})(ReservationSpecialFeature || (ReservationSpecialFeature = {}));
export var ReservationVideoQuality;
(function (ReservationVideoQuality) {
    ReservationVideoQuality["ENHANCED"] = "ENHANCED";
    ReservationVideoQuality["PREMIUM"] = "PREMIUM";
    ReservationVideoQuality["STANDARD"] = "STANDARD";
})(ReservationVideoQuality || (ReservationVideoQuality = {}));
export var ReservationResourceSpecification;
(function (ReservationResourceSpecification) {
    /**
     * @internal
     */
    ReservationResourceSpecification.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(ReservationResourceSpecification || (ReservationResourceSpecification = {}));
export var Offering;
(function (Offering) {
    /**
     * @internal
     */
    Offering.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(Offering || (Offering = {}));
export var M2tsAbsentInputAudioBehavior;
(function (M2tsAbsentInputAudioBehavior) {
    M2tsAbsentInputAudioBehavior["DROP"] = "DROP";
    M2tsAbsentInputAudioBehavior["ENCODE_SILENCE"] = "ENCODE_SILENCE";
})(M2tsAbsentInputAudioBehavior || (M2tsAbsentInputAudioBehavior = {}));
export var M2tsArib;
(function (M2tsArib) {
    M2tsArib["DISABLED"] = "DISABLED";
    M2tsArib["ENABLED"] = "ENABLED";
})(M2tsArib || (M2tsArib = {}));
export var M2tsAribCaptionsPidControl;
(function (M2tsAribCaptionsPidControl) {
    M2tsAribCaptionsPidControl["AUTO"] = "AUTO";
    M2tsAribCaptionsPidControl["USE_CONFIGURED"] = "USE_CONFIGURED";
})(M2tsAribCaptionsPidControl || (M2tsAribCaptionsPidControl = {}));
export var M2tsAudioBufferModel;
(function (M2tsAudioBufferModel) {
    M2tsAudioBufferModel["ATSC"] = "ATSC";
    M2tsAudioBufferModel["DVB"] = "DVB";
})(M2tsAudioBufferModel || (M2tsAudioBufferModel = {}));
export var M2tsAudioStreamType;
(function (M2tsAudioStreamType) {
    M2tsAudioStreamType["ATSC"] = "ATSC";
    M2tsAudioStreamType["DVB"] = "DVB";
})(M2tsAudioStreamType || (M2tsAudioStreamType = {}));
export var M2tsBufferModel;
(function (M2tsBufferModel) {
    M2tsBufferModel["MULTIPLEX"] = "MULTIPLEX";
    M2tsBufferModel["NONE"] = "NONE";
})(M2tsBufferModel || (M2tsBufferModel = {}));
export var M2tsCcDescriptor;
(function (M2tsCcDescriptor) {
    M2tsCcDescriptor["DISABLED"] = "DISABLED";
    M2tsCcDescriptor["ENABLED"] = "ENABLED";
})(M2tsCcDescriptor || (M2tsCcDescriptor = {}));
export var DvbNitSettings;
(function (DvbNitSettings) {
    /**
     * @internal
     */
    DvbNitSettings.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(DvbNitSettings || (DvbNitSettings = {}));
export var DvbSdtOutputSdt;
(function (DvbSdtOutputSdt) {
    DvbSdtOutputSdt["SDT_FOLLOW"] = "SDT_FOLLOW";
    DvbSdtOutputSdt["SDT_FOLLOW_IF_PRESENT"] = "SDT_FOLLOW_IF_PRESENT";
    DvbSdtOutputSdt["SDT_MANUAL"] = "SDT_MANUAL";
    DvbSdtOutputSdt["SDT_NONE"] = "SDT_NONE";
})(DvbSdtOutputSdt || (DvbSdtOutputSdt = {}));
export var DvbSdtSettings;
(function (DvbSdtSettings) {
    /**
     * @internal
     */
    DvbSdtSettings.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(DvbSdtSettings || (DvbSdtSettings = {}));
export var DvbTdtSettings;
(function (DvbTdtSettings) {
    /**
     * @internal
     */
    DvbTdtSettings.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(DvbTdtSettings || (DvbTdtSettings = {}));
export var M2tsEbifControl;
(function (M2tsEbifControl) {
    M2tsEbifControl["NONE"] = "NONE";
    M2tsEbifControl["PASSTHROUGH"] = "PASSTHROUGH";
})(M2tsEbifControl || (M2tsEbifControl = {}));
export var M2tsAudioInterval;
(function (M2tsAudioInterval) {
    M2tsAudioInterval["VIDEO_AND_FIXED_INTERVALS"] = "VIDEO_AND_FIXED_INTERVALS";
    M2tsAudioInterval["VIDEO_INTERVAL"] = "VIDEO_INTERVAL";
})(M2tsAudioInterval || (M2tsAudioInterval = {}));
export var M2tsEbpPlacement;
(function (M2tsEbpPlacement) {
    M2tsEbpPlacement["VIDEO_AND_AUDIO_PIDS"] = "VIDEO_AND_AUDIO_PIDS";
    M2tsEbpPlacement["VIDEO_PID"] = "VIDEO_PID";
})(M2tsEbpPlacement || (M2tsEbpPlacement = {}));
export var M2tsEsRateInPes;
(function (M2tsEsRateInPes) {
    M2tsEsRateInPes["EXCLUDE"] = "EXCLUDE";
    M2tsEsRateInPes["INCLUDE"] = "INCLUDE";
})(M2tsEsRateInPes || (M2tsEsRateInPes = {}));
export var M2tsKlv;
(function (M2tsKlv) {
    M2tsKlv["NONE"] = "NONE";
    M2tsKlv["PASSTHROUGH"] = "PASSTHROUGH";
})(M2tsKlv || (M2tsKlv = {}));
export var M2tsNielsenId3Behavior;
(function (M2tsNielsenId3Behavior) {
    M2tsNielsenId3Behavior["NO_PASSTHROUGH"] = "NO_PASSTHROUGH";
    M2tsNielsenId3Behavior["PASSTHROUGH"] = "PASSTHROUGH";
})(M2tsNielsenId3Behavior || (M2tsNielsenId3Behavior = {}));
export var M2tsPcrControl;
(function (M2tsPcrControl) {
    M2tsPcrControl["CONFIGURED_PCR_PERIOD"] = "CONFIGURED_PCR_PERIOD";
    M2tsPcrControl["PCR_EVERY_PES_PACKET"] = "PCR_EVERY_PES_PACKET";
})(M2tsPcrControl || (M2tsPcrControl = {}));
export var M2tsRateMode;
(function (M2tsRateMode) {
    M2tsRateMode["CBR"] = "CBR";
    M2tsRateMode["VBR"] = "VBR";
})(M2tsRateMode || (M2tsRateMode = {}));
export var M2tsScte35Control;
(function (M2tsScte35Control) {
    M2tsScte35Control["NONE"] = "NONE";
    M2tsScte35Control["PASSTHROUGH"] = "PASSTHROUGH";
})(M2tsScte35Control || (M2tsScte35Control = {}));
export var M2tsSegmentationMarkers;
(function (M2tsSegmentationMarkers) {
    M2tsSegmentationMarkers["EBP"] = "EBP";
    M2tsSegmentationMarkers["EBP_LEGACY"] = "EBP_LEGACY";
    M2tsSegmentationMarkers["NONE"] = "NONE";
    M2tsSegmentationMarkers["PSI_SEGSTART"] = "PSI_SEGSTART";
    M2tsSegmentationMarkers["RAI_ADAPT"] = "RAI_ADAPT";
    M2tsSegmentationMarkers["RAI_SEGSTART"] = "RAI_SEGSTART";
})(M2tsSegmentationMarkers || (M2tsSegmentationMarkers = {}));
export var M2tsSegmentationStyle;
(function (M2tsSegmentationStyle) {
    M2tsSegmentationStyle["MAINTAIN_CADENCE"] = "MAINTAIN_CADENCE";
    M2tsSegmentationStyle["RESET_CADENCE"] = "RESET_CADENCE";
})(M2tsSegmentationStyle || (M2tsSegmentationStyle = {}));
export var M2tsTimedMetadataBehavior;
(function (M2tsTimedMetadataBehavior) {
    M2tsTimedMetadataBehavior["NO_PASSTHROUGH"] = "NO_PASSTHROUGH";
    M2tsTimedMetadataBehavior["PASSTHROUGH"] = "PASSTHROUGH";
})(M2tsTimedMetadataBehavior || (M2tsTimedMetadataBehavior = {}));
export var M2tsSettings;
(function (M2tsSettings) {
    /**
     * @internal
     */
    M2tsSettings.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(M2tsSettings || (M2tsSettings = {}));
export var RawSettings;
(function (RawSettings) {
    /**
     * @internal
     */
    RawSettings.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(RawSettings || (RawSettings = {}));
export var ArchiveContainerSettings;
(function (ArchiveContainerSettings) {
    /**
     * @internal
     */
    ArchiveContainerSettings.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(ArchiveContainerSettings || (ArchiveContainerSettings = {}));
export var ArchiveOutputSettings;
(function (ArchiveOutputSettings) {
    /**
     * @internal
     */
    ArchiveOutputSettings.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(ArchiveOutputSettings || (ArchiveOutputSettings = {}));
export var FrameCaptureOutputSettings;
(function (FrameCaptureOutputSettings) {
    /**
     * @internal
     */
    FrameCaptureOutputSettings.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(FrameCaptureOutputSettings || (FrameCaptureOutputSettings = {}));
export var HlsH265PackagingType;
(function (HlsH265PackagingType) {
    HlsH265PackagingType["HEV1"] = "HEV1";
    HlsH265PackagingType["HVC1"] = "HVC1";
})(HlsH265PackagingType || (HlsH265PackagingType = {}));
export var AudioOnlyHlsTrackType;
(function (AudioOnlyHlsTrackType) {
    AudioOnlyHlsTrackType["ALTERNATE_AUDIO_AUTO_SELECT"] = "ALTERNATE_AUDIO_AUTO_SELECT";
    AudioOnlyHlsTrackType["ALTERNATE_AUDIO_AUTO_SELECT_DEFAULT"] = "ALTERNATE_AUDIO_AUTO_SELECT_DEFAULT";
    AudioOnlyHlsTrackType["ALTERNATE_AUDIO_NOT_AUTO_SELECT"] = "ALTERNATE_AUDIO_NOT_AUTO_SELECT";
    AudioOnlyHlsTrackType["AUDIO_ONLY_VARIANT_STREAM"] = "AUDIO_ONLY_VARIANT_STREAM";
})(AudioOnlyHlsTrackType || (AudioOnlyHlsTrackType = {}));
export var AudioOnlyHlsSegmentType;
(function (AudioOnlyHlsSegmentType) {
    AudioOnlyHlsSegmentType["AAC"] = "AAC";
    AudioOnlyHlsSegmentType["FMP4"] = "FMP4";
})(AudioOnlyHlsSegmentType || (AudioOnlyHlsSegmentType = {}));
export var AudioOnlyHlsSettings;
(function (AudioOnlyHlsSettings) {
    /**
     * @internal
     */
    AudioOnlyHlsSettings.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(AudioOnlyHlsSettings || (AudioOnlyHlsSettings = {}));
export var Fmp4NielsenId3Behavior;
(function (Fmp4NielsenId3Behavior) {
    Fmp4NielsenId3Behavior["NO_PASSTHROUGH"] = "NO_PASSTHROUGH";
    Fmp4NielsenId3Behavior["PASSTHROUGH"] = "PASSTHROUGH";
})(Fmp4NielsenId3Behavior || (Fmp4NielsenId3Behavior = {}));
export var Fmp4TimedMetadataBehavior;
(function (Fmp4TimedMetadataBehavior) {
    Fmp4TimedMetadataBehavior["NO_PASSTHROUGH"] = "NO_PASSTHROUGH";
    Fmp4TimedMetadataBehavior["PASSTHROUGH"] = "PASSTHROUGH";
})(Fmp4TimedMetadataBehavior || (Fmp4TimedMetadataBehavior = {}));
export var Fmp4HlsSettings;
(function (Fmp4HlsSettings) {
    /**
     * @internal
     */
    Fmp4HlsSettings.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(Fmp4HlsSettings || (Fmp4HlsSettings = {}));
export var FrameCaptureHlsSettings;
(function (FrameCaptureHlsSettings) {
    /**
     * @internal
     */
    FrameCaptureHlsSettings.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(FrameCaptureHlsSettings || (FrameCaptureHlsSettings = {}));
export var M3u8NielsenId3Behavior;
(function (M3u8NielsenId3Behavior) {
    M3u8NielsenId3Behavior["NO_PASSTHROUGH"] = "NO_PASSTHROUGH";
    M3u8NielsenId3Behavior["PASSTHROUGH"] = "PASSTHROUGH";
})(M3u8NielsenId3Behavior || (M3u8NielsenId3Behavior = {}));
export var M3u8PcrControl;
(function (M3u8PcrControl) {
    M3u8PcrControl["CONFIGURED_PCR_PERIOD"] = "CONFIGURED_PCR_PERIOD";
    M3u8PcrControl["PCR_EVERY_PES_PACKET"] = "PCR_EVERY_PES_PACKET";
})(M3u8PcrControl || (M3u8PcrControl = {}));
export var M3u8Scte35Behavior;
(function (M3u8Scte35Behavior) {
    M3u8Scte35Behavior["NO_PASSTHROUGH"] = "NO_PASSTHROUGH";
    M3u8Scte35Behavior["PASSTHROUGH"] = "PASSTHROUGH";
})(M3u8Scte35Behavior || (M3u8Scte35Behavior = {}));
export var M3u8TimedMetadataBehavior;
(function (M3u8TimedMetadataBehavior) {
    M3u8TimedMetadataBehavior["NO_PASSTHROUGH"] = "NO_PASSTHROUGH";
    M3u8TimedMetadataBehavior["PASSTHROUGH"] = "PASSTHROUGH";
})(M3u8TimedMetadataBehavior || (M3u8TimedMetadataBehavior = {}));
export var M3u8Settings;
(function (M3u8Settings) {
    /**
     * @internal
     */
    M3u8Settings.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(M3u8Settings || (M3u8Settings = {}));
export var StandardHlsSettings;
(function (StandardHlsSettings) {
    /**
     * @internal
     */
    StandardHlsSettings.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(StandardHlsSettings || (StandardHlsSettings = {}));
export var HlsSettings;
(function (HlsSettings) {
    /**
     * @internal
     */
    HlsSettings.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(HlsSettings || (HlsSettings = {}));
export var HlsOutputSettings;
(function (HlsOutputSettings) {
    /**
     * @internal
     */
    HlsOutputSettings.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(HlsOutputSettings || (HlsOutputSettings = {}));
export var MediaPackageOutputSettings;
(function (MediaPackageOutputSettings) {
    /**
     * @internal
     */
    MediaPackageOutputSettings.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(MediaPackageOutputSettings || (MediaPackageOutputSettings = {}));
export var MsSmoothH265PackagingType;
(function (MsSmoothH265PackagingType) {
    MsSmoothH265PackagingType["HEV1"] = "HEV1";
    MsSmoothH265PackagingType["HVC1"] = "HVC1";
})(MsSmoothH265PackagingType || (MsSmoothH265PackagingType = {}));
export var MsSmoothOutputSettings;
(function (MsSmoothOutputSettings) {
    /**
     * @internal
     */
    MsSmoothOutputSettings.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(MsSmoothOutputSettings || (MsSmoothOutputSettings = {}));
export var OutputLocationRef;
(function (OutputLocationRef) {
    /**
     * @internal
     */
    OutputLocationRef.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(OutputLocationRef || (OutputLocationRef = {}));
export var MultiplexOutputSettings;
(function (MultiplexOutputSettings) {
    /**
     * @internal
     */
    MultiplexOutputSettings.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(MultiplexOutputSettings || (MultiplexOutputSettings = {}));
export var RtmpOutputCertificateMode;
(function (RtmpOutputCertificateMode) {
    RtmpOutputCertificateMode["SELF_SIGNED"] = "SELF_SIGNED";
    RtmpOutputCertificateMode["VERIFY_AUTHENTICITY"] = "VERIFY_AUTHENTICITY";
})(RtmpOutputCertificateMode || (RtmpOutputCertificateMode = {}));
export var RtmpOutputSettings;
(function (RtmpOutputSettings) {
    /**
     * @internal
     */
    RtmpOutputSettings.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(RtmpOutputSettings || (RtmpOutputSettings = {}));
export var UdpContainerSettings;
(function (UdpContainerSettings) {
    /**
     * @internal
     */
    UdpContainerSettings.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(UdpContainerSettings || (UdpContainerSettings = {}));
export var FecOutputIncludeFec;
(function (FecOutputIncludeFec) {
    FecOutputIncludeFec["COLUMN"] = "COLUMN";
    FecOutputIncludeFec["COLUMN_AND_ROW"] = "COLUMN_AND_ROW";
})(FecOutputIncludeFec || (FecOutputIncludeFec = {}));
export var FecOutputSettings;
(function (FecOutputSettings) {
    /**
     * @internal
     */
    FecOutputSettings.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(FecOutputSettings || (FecOutputSettings = {}));
export var UdpOutputSettings;
(function (UdpOutputSettings) {
    /**
     * @internal
     */
    UdpOutputSettings.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(UdpOutputSettings || (UdpOutputSettings = {}));
export var OutputSettings;
(function (OutputSettings) {
    /**
     * @internal
     */
    OutputSettings.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(OutputSettings || (OutputSettings = {}));
export var Output;
(function (Output) {
    /**
     * @internal
     */
    Output.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(Output || (Output = {}));
export var S3CannedAcl;
(function (S3CannedAcl) {
    S3CannedAcl["AUTHENTICATED_READ"] = "AUTHENTICATED_READ";
    S3CannedAcl["BUCKET_OWNER_FULL_CONTROL"] = "BUCKET_OWNER_FULL_CONTROL";
    S3CannedAcl["BUCKET_OWNER_READ"] = "BUCKET_OWNER_READ";
    S3CannedAcl["PUBLIC_READ"] = "PUBLIC_READ";
})(S3CannedAcl || (S3CannedAcl = {}));
export var ArchiveS3Settings;
(function (ArchiveS3Settings) {
    /**
     * @internal
     */
    ArchiveS3Settings.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(ArchiveS3Settings || (ArchiveS3Settings = {}));
export var ArchiveCdnSettings;
(function (ArchiveCdnSettings) {
    /**
     * @internal
     */
    ArchiveCdnSettings.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(ArchiveCdnSettings || (ArchiveCdnSettings = {}));
export var ArchiveGroupSettings;
(function (ArchiveGroupSettings) {
    /**
     * @internal
     */
    ArchiveGroupSettings.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(ArchiveGroupSettings || (ArchiveGroupSettings = {}));
export var FrameCaptureS3Settings;
(function (FrameCaptureS3Settings) {
    /**
     * @internal
     */
    FrameCaptureS3Settings.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(FrameCaptureS3Settings || (FrameCaptureS3Settings = {}));
export var FrameCaptureCdnSettings;
(function (FrameCaptureCdnSettings) {
    /**
     * @internal
     */
    FrameCaptureCdnSettings.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(FrameCaptureCdnSettings || (FrameCaptureCdnSettings = {}));
export var FrameCaptureGroupSettings;
(function (FrameCaptureGroupSettings) {
    /**
     * @internal
     */
    FrameCaptureGroupSettings.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(FrameCaptureGroupSettings || (FrameCaptureGroupSettings = {}));
export var HlsCaptionLanguageSetting;
(function (HlsCaptionLanguageSetting) {
    HlsCaptionLanguageSetting["INSERT"] = "INSERT";
    HlsCaptionLanguageSetting["NONE"] = "NONE";
    HlsCaptionLanguageSetting["OMIT"] = "OMIT";
})(HlsCaptionLanguageSetting || (HlsCaptionLanguageSetting = {}));
export var HlsClientCache;
(function (HlsClientCache) {
    HlsClientCache["DISABLED"] = "DISABLED";
    HlsClientCache["ENABLED"] = "ENABLED";
})(HlsClientCache || (HlsClientCache = {}));
export var HlsCodecSpecification;
(function (HlsCodecSpecification) {
    HlsCodecSpecification["RFC_4281"] = "RFC_4281";
    HlsCodecSpecification["RFC_6381"] = "RFC_6381";
})(HlsCodecSpecification || (HlsCodecSpecification = {}));
export var HlsDirectoryStructure;
(function (HlsDirectoryStructure) {
    HlsDirectoryStructure["SINGLE_DIRECTORY"] = "SINGLE_DIRECTORY";
    HlsDirectoryStructure["SUBDIRECTORY_PER_STREAM"] = "SUBDIRECTORY_PER_STREAM";
})(HlsDirectoryStructure || (HlsDirectoryStructure = {}));
export var HlsDiscontinuityTags;
(function (HlsDiscontinuityTags) {
    HlsDiscontinuityTags["INSERT"] = "INSERT";
    HlsDiscontinuityTags["NEVER_INSERT"] = "NEVER_INSERT";
})(HlsDiscontinuityTags || (HlsDiscontinuityTags = {}));
export var HlsEncryptionType;
(function (HlsEncryptionType) {
    HlsEncryptionType["AES128"] = "AES128";
    HlsEncryptionType["SAMPLE_AES"] = "SAMPLE_AES";
})(HlsEncryptionType || (HlsEncryptionType = {}));
export var HlsAkamaiHttpTransferMode;
(function (HlsAkamaiHttpTransferMode) {
    HlsAkamaiHttpTransferMode["CHUNKED"] = "CHUNKED";
    HlsAkamaiHttpTransferMode["NON_CHUNKED"] = "NON_CHUNKED";
})(HlsAkamaiHttpTransferMode || (HlsAkamaiHttpTransferMode = {}));
export var HlsAkamaiSettings;
(function (HlsAkamaiSettings) {
    /**
     * @internal
     */
    HlsAkamaiSettings.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(HlsAkamaiSettings || (HlsAkamaiSettings = {}));
export var HlsBasicPutSettings;
(function (HlsBasicPutSettings) {
    /**
     * @internal
     */
    HlsBasicPutSettings.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(HlsBasicPutSettings || (HlsBasicPutSettings = {}));
export var HlsMediaStoreStorageClass;
(function (HlsMediaStoreStorageClass) {
    HlsMediaStoreStorageClass["TEMPORAL"] = "TEMPORAL";
})(HlsMediaStoreStorageClass || (HlsMediaStoreStorageClass = {}));
export var HlsMediaStoreSettings;
(function (HlsMediaStoreSettings) {
    /**
     * @internal
     */
    HlsMediaStoreSettings.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(HlsMediaStoreSettings || (HlsMediaStoreSettings = {}));
export var HlsS3Settings;
(function (HlsS3Settings) {
    /**
     * @internal
     */
    HlsS3Settings.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(HlsS3Settings || (HlsS3Settings = {}));
export var HlsWebdavHttpTransferMode;
(function (HlsWebdavHttpTransferMode) {
    HlsWebdavHttpTransferMode["CHUNKED"] = "CHUNKED";
    HlsWebdavHttpTransferMode["NON_CHUNKED"] = "NON_CHUNKED";
})(HlsWebdavHttpTransferMode || (HlsWebdavHttpTransferMode = {}));
export var HlsWebdavSettings;
(function (HlsWebdavSettings) {
    /**
     * @internal
     */
    HlsWebdavSettings.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(HlsWebdavSettings || (HlsWebdavSettings = {}));
export var HlsCdnSettings;
(function (HlsCdnSettings) {
    /**
     * @internal
     */
    HlsCdnSettings.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(HlsCdnSettings || (HlsCdnSettings = {}));
export var HlsId3SegmentTaggingState;
(function (HlsId3SegmentTaggingState) {
    HlsId3SegmentTaggingState["DISABLED"] = "DISABLED";
    HlsId3SegmentTaggingState["ENABLED"] = "ENABLED";
})(HlsId3SegmentTaggingState || (HlsId3SegmentTaggingState = {}));
export var IFrameOnlyPlaylistType;
(function (IFrameOnlyPlaylistType) {
    IFrameOnlyPlaylistType["DISABLED"] = "DISABLED";
    IFrameOnlyPlaylistType["STANDARD"] = "STANDARD";
})(IFrameOnlyPlaylistType || (IFrameOnlyPlaylistType = {}));
export var HlsIncompleteSegmentBehavior;
(function (HlsIncompleteSegmentBehavior) {
    HlsIncompleteSegmentBehavior["AUTO"] = "AUTO";
    HlsIncompleteSegmentBehavior["SUPPRESS"] = "SUPPRESS";
})(HlsIncompleteSegmentBehavior || (HlsIncompleteSegmentBehavior = {}));
export var InputLossActionForHlsOut;
(function (InputLossActionForHlsOut) {
    InputLossActionForHlsOut["EMIT_OUTPUT"] = "EMIT_OUTPUT";
    InputLossActionForHlsOut["PAUSE_OUTPUT"] = "PAUSE_OUTPUT";
})(InputLossActionForHlsOut || (InputLossActionForHlsOut = {}));
export var HlsIvInManifest;
(function (HlsIvInManifest) {
    HlsIvInManifest["EXCLUDE"] = "EXCLUDE";
    HlsIvInManifest["INCLUDE"] = "INCLUDE";
})(HlsIvInManifest || (HlsIvInManifest = {}));
export var HlsIvSource;
(function (HlsIvSource) {
    HlsIvSource["EXPLICIT"] = "EXPLICIT";
    HlsIvSource["FOLLOWS_SEGMENT_NUMBER"] = "FOLLOWS_SEGMENT_NUMBER";
})(HlsIvSource || (HlsIvSource = {}));
export var StaticKeySettings;
(function (StaticKeySettings) {
    /**
     * @internal
     */
    StaticKeySettings.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(StaticKeySettings || (StaticKeySettings = {}));
export var KeyProviderSettings;
(function (KeyProviderSettings) {
    /**
     * @internal
     */
    KeyProviderSettings.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(KeyProviderSettings || (KeyProviderSettings = {}));
export var HlsManifestCompression;
(function (HlsManifestCompression) {
    HlsManifestCompression["GZIP"] = "GZIP";
    HlsManifestCompression["NONE"] = "NONE";
})(HlsManifestCompression || (HlsManifestCompression = {}));
export var HlsManifestDurationFormat;
(function (HlsManifestDurationFormat) {
    HlsManifestDurationFormat["FLOATING_POINT"] = "FLOATING_POINT";
    HlsManifestDurationFormat["INTEGER"] = "INTEGER";
})(HlsManifestDurationFormat || (HlsManifestDurationFormat = {}));
export var HlsMode;
(function (HlsMode) {
    HlsMode["LIVE"] = "LIVE";
    HlsMode["VOD"] = "VOD";
})(HlsMode || (HlsMode = {}));
export var HlsOutputSelection;
(function (HlsOutputSelection) {
    HlsOutputSelection["MANIFESTS_AND_SEGMENTS"] = "MANIFESTS_AND_SEGMENTS";
    HlsOutputSelection["SEGMENTS_ONLY"] = "SEGMENTS_ONLY";
    HlsOutputSelection["VARIANT_MANIFESTS_AND_SEGMENTS"] = "VARIANT_MANIFESTS_AND_SEGMENTS";
})(HlsOutputSelection || (HlsOutputSelection = {}));
export var HlsProgramDateTime;
(function (HlsProgramDateTime) {
    HlsProgramDateTime["EXCLUDE"] = "EXCLUDE";
    HlsProgramDateTime["INCLUDE"] = "INCLUDE";
})(HlsProgramDateTime || (HlsProgramDateTime = {}));
export var HlsRedundantManifest;
(function (HlsRedundantManifest) {
    HlsRedundantManifest["DISABLED"] = "DISABLED";
    HlsRedundantManifest["ENABLED"] = "ENABLED";
})(HlsRedundantManifest || (HlsRedundantManifest = {}));
export var HlsSegmentationMode;
(function (HlsSegmentationMode) {
    HlsSegmentationMode["USE_INPUT_SEGMENTATION"] = "USE_INPUT_SEGMENTATION";
    HlsSegmentationMode["USE_SEGMENT_DURATION"] = "USE_SEGMENT_DURATION";
})(HlsSegmentationMode || (HlsSegmentationMode = {}));
export var HlsStreamInfResolution;
(function (HlsStreamInfResolution) {
    HlsStreamInfResolution["EXCLUDE"] = "EXCLUDE";
    HlsStreamInfResolution["INCLUDE"] = "INCLUDE";
})(HlsStreamInfResolution || (HlsStreamInfResolution = {}));
export var HlsTimedMetadataId3Frame;
(function (HlsTimedMetadataId3Frame) {
    HlsTimedMetadataId3Frame["NONE"] = "NONE";
    HlsTimedMetadataId3Frame["PRIV"] = "PRIV";
    HlsTimedMetadataId3Frame["TDRL"] = "TDRL";
})(HlsTimedMetadataId3Frame || (HlsTimedMetadataId3Frame = {}));
export var HlsTsFileMode;
(function (HlsTsFileMode) {
    HlsTsFileMode["SEGMENTED_FILES"] = "SEGMENTED_FILES";
    HlsTsFileMode["SINGLE_FILE"] = "SINGLE_FILE";
})(HlsTsFileMode || (HlsTsFileMode = {}));
export var HlsGroupSettings;
(function (HlsGroupSettings) {
    /**
     * @internal
     */
    HlsGroupSettings.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(HlsGroupSettings || (HlsGroupSettings = {}));
export var MediaPackageGroupSettings;
(function (MediaPackageGroupSettings) {
    /**
     * @internal
     */
    MediaPackageGroupSettings.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(MediaPackageGroupSettings || (MediaPackageGroupSettings = {}));
export var SmoothGroupAudioOnlyTimecodeControl;
(function (SmoothGroupAudioOnlyTimecodeControl) {
    SmoothGroupAudioOnlyTimecodeControl["PASSTHROUGH"] = "PASSTHROUGH";
    SmoothGroupAudioOnlyTimecodeControl["USE_CONFIGURED_CLOCK"] = "USE_CONFIGURED_CLOCK";
})(SmoothGroupAudioOnlyTimecodeControl || (SmoothGroupAudioOnlyTimecodeControl = {}));
export var SmoothGroupCertificateMode;
(function (SmoothGroupCertificateMode) {
    SmoothGroupCertificateMode["SELF_SIGNED"] = "SELF_SIGNED";
    SmoothGroupCertificateMode["VERIFY_AUTHENTICITY"] = "VERIFY_AUTHENTICITY";
})(SmoothGroupCertificateMode || (SmoothGroupCertificateMode = {}));
export var SmoothGroupEventIdMode;
(function (SmoothGroupEventIdMode) {
    SmoothGroupEventIdMode["NO_EVENT_ID"] = "NO_EVENT_ID";
    SmoothGroupEventIdMode["USE_CONFIGURED"] = "USE_CONFIGURED";
    SmoothGroupEventIdMode["USE_TIMESTAMP"] = "USE_TIMESTAMP";
})(SmoothGroupEventIdMode || (SmoothGroupEventIdMode = {}));
export var SmoothGroupEventStopBehavior;
(function (SmoothGroupEventStopBehavior) {
    SmoothGroupEventStopBehavior["NONE"] = "NONE";
    SmoothGroupEventStopBehavior["SEND_EOS"] = "SEND_EOS";
})(SmoothGroupEventStopBehavior || (SmoothGroupEventStopBehavior = {}));
export var InputLossActionForMsSmoothOut;
(function (InputLossActionForMsSmoothOut) {
    InputLossActionForMsSmoothOut["EMIT_OUTPUT"] = "EMIT_OUTPUT";
    InputLossActionForMsSmoothOut["PAUSE_OUTPUT"] = "PAUSE_OUTPUT";
})(InputLossActionForMsSmoothOut || (InputLossActionForMsSmoothOut = {}));
export var SmoothGroupSegmentationMode;
(function (SmoothGroupSegmentationMode) {
    SmoothGroupSegmentationMode["USE_INPUT_SEGMENTATION"] = "USE_INPUT_SEGMENTATION";
    SmoothGroupSegmentationMode["USE_SEGMENT_DURATION"] = "USE_SEGMENT_DURATION";
})(SmoothGroupSegmentationMode || (SmoothGroupSegmentationMode = {}));
export var SmoothGroupSparseTrackType;
(function (SmoothGroupSparseTrackType) {
    SmoothGroupSparseTrackType["NONE"] = "NONE";
    SmoothGroupSparseTrackType["SCTE_35"] = "SCTE_35";
    SmoothGroupSparseTrackType["SCTE_35_WITHOUT_SEGMENTATION"] = "SCTE_35_WITHOUT_SEGMENTATION";
})(SmoothGroupSparseTrackType || (SmoothGroupSparseTrackType = {}));
export var SmoothGroupStreamManifestBehavior;
(function (SmoothGroupStreamManifestBehavior) {
    SmoothGroupStreamManifestBehavior["DO_NOT_SEND"] = "DO_NOT_SEND";
    SmoothGroupStreamManifestBehavior["SEND"] = "SEND";
})(SmoothGroupStreamManifestBehavior || (SmoothGroupStreamManifestBehavior = {}));
export var SmoothGroupTimestampOffsetMode;
(function (SmoothGroupTimestampOffsetMode) {
    SmoothGroupTimestampOffsetMode["USE_CONFIGURED_OFFSET"] = "USE_CONFIGURED_OFFSET";
    SmoothGroupTimestampOffsetMode["USE_EVENT_START_DATE"] = "USE_EVENT_START_DATE";
})(SmoothGroupTimestampOffsetMode || (SmoothGroupTimestampOffsetMode = {}));
export var MsSmoothGroupSettings;
(function (MsSmoothGroupSettings) {
    /**
     * @internal
     */
    MsSmoothGroupSettings.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(MsSmoothGroupSettings || (MsSmoothGroupSettings = {}));
export var MultiplexGroupSettings;
(function (MultiplexGroupSettings) {
    /**
     * @internal
     */
    MultiplexGroupSettings.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(MultiplexGroupSettings || (MultiplexGroupSettings = {}));
//# sourceMappingURL=models_0.js.map