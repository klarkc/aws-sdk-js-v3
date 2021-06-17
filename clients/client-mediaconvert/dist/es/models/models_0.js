import { __assign } from "tslib";
export var AudioChannelTag;
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
})(AudioChannelTag || (AudioChannelTag = {}));
export var AudioChannelTaggingSettings;
(function (AudioChannelTaggingSettings) {
    /**
     * @internal
     */
    AudioChannelTaggingSettings.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(AudioChannelTaggingSettings || (AudioChannelTaggingSettings = {}));
export var AudioNormalizationAlgorithm;
(function (AudioNormalizationAlgorithm) {
    AudioNormalizationAlgorithm["ITU_BS_1770_1"] = "ITU_BS_1770_1";
    AudioNormalizationAlgorithm["ITU_BS_1770_2"] = "ITU_BS_1770_2";
    AudioNormalizationAlgorithm["ITU_BS_1770_3"] = "ITU_BS_1770_3";
    AudioNormalizationAlgorithm["ITU_BS_1770_4"] = "ITU_BS_1770_4";
})(AudioNormalizationAlgorithm || (AudioNormalizationAlgorithm = {}));
export var AudioNormalizationAlgorithmControl;
(function (AudioNormalizationAlgorithmControl) {
    AudioNormalizationAlgorithmControl["CORRECT_AUDIO"] = "CORRECT_AUDIO";
    AudioNormalizationAlgorithmControl["MEASURE_ONLY"] = "MEASURE_ONLY";
})(AudioNormalizationAlgorithmControl || (AudioNormalizationAlgorithmControl = {}));
export var AudioNormalizationLoudnessLogging;
(function (AudioNormalizationLoudnessLogging) {
    AudioNormalizationLoudnessLogging["DONT_LOG"] = "DONT_LOG";
    AudioNormalizationLoudnessLogging["LOG"] = "LOG";
})(AudioNormalizationLoudnessLogging || (AudioNormalizationLoudnessLogging = {}));
export var AudioNormalizationPeakCalculation;
(function (AudioNormalizationPeakCalculation) {
    AudioNormalizationPeakCalculation["NONE"] = "NONE";
    AudioNormalizationPeakCalculation["TRUE_PEAK"] = "TRUE_PEAK";
})(AudioNormalizationPeakCalculation || (AudioNormalizationPeakCalculation = {}));
export var AudioNormalizationSettings;
(function (AudioNormalizationSettings) {
    /**
     * @internal
     */
    AudioNormalizationSettings.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(AudioNormalizationSettings || (AudioNormalizationSettings = {}));
export var AudioTypeControl;
(function (AudioTypeControl) {
    AudioTypeControl["FOLLOW_INPUT"] = "FOLLOW_INPUT";
    AudioTypeControl["USE_CONFIGURED"] = "USE_CONFIGURED";
})(AudioTypeControl || (AudioTypeControl = {}));
export var AacAudioDescriptionBroadcasterMix;
(function (AacAudioDescriptionBroadcasterMix) {
    AacAudioDescriptionBroadcasterMix["BROADCASTER_MIXED_AD"] = "BROADCASTER_MIXED_AD";
    AacAudioDescriptionBroadcasterMix["NORMAL"] = "NORMAL";
})(AacAudioDescriptionBroadcasterMix || (AacAudioDescriptionBroadcasterMix = {}));
export var AacCodecProfile;
(function (AacCodecProfile) {
    AacCodecProfile["HEV1"] = "HEV1";
    AacCodecProfile["HEV2"] = "HEV2";
    AacCodecProfile["LC"] = "LC";
})(AacCodecProfile || (AacCodecProfile = {}));
export var AacCodingMode;
(function (AacCodingMode) {
    AacCodingMode["AD_RECEIVER_MIX"] = "AD_RECEIVER_MIX";
    AacCodingMode["CODING_MODE_1_0"] = "CODING_MODE_1_0";
    AacCodingMode["CODING_MODE_1_1"] = "CODING_MODE_1_1";
    AacCodingMode["CODING_MODE_2_0"] = "CODING_MODE_2_0";
    AacCodingMode["CODING_MODE_5_1"] = "CODING_MODE_5_1";
})(AacCodingMode || (AacCodingMode = {}));
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
export var AacSpecification;
(function (AacSpecification) {
    AacSpecification["MPEG2"] = "MPEG2";
    AacSpecification["MPEG4"] = "MPEG4";
})(AacSpecification || (AacSpecification = {}));
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
export var Ac3DynamicRangeCompressionLine;
(function (Ac3DynamicRangeCompressionLine) {
    Ac3DynamicRangeCompressionLine["FILM_LIGHT"] = "FILM_LIGHT";
    Ac3DynamicRangeCompressionLine["FILM_STANDARD"] = "FILM_STANDARD";
    Ac3DynamicRangeCompressionLine["MUSIC_LIGHT"] = "MUSIC_LIGHT";
    Ac3DynamicRangeCompressionLine["MUSIC_STANDARD"] = "MUSIC_STANDARD";
    Ac3DynamicRangeCompressionLine["NONE"] = "NONE";
    Ac3DynamicRangeCompressionLine["SPEECH"] = "SPEECH";
})(Ac3DynamicRangeCompressionLine || (Ac3DynamicRangeCompressionLine = {}));
export var Ac3DynamicRangeCompressionProfile;
(function (Ac3DynamicRangeCompressionProfile) {
    Ac3DynamicRangeCompressionProfile["FILM_STANDARD"] = "FILM_STANDARD";
    Ac3DynamicRangeCompressionProfile["NONE"] = "NONE";
})(Ac3DynamicRangeCompressionProfile || (Ac3DynamicRangeCompressionProfile = {}));
export var Ac3DynamicRangeCompressionRf;
(function (Ac3DynamicRangeCompressionRf) {
    Ac3DynamicRangeCompressionRf["FILM_LIGHT"] = "FILM_LIGHT";
    Ac3DynamicRangeCompressionRf["FILM_STANDARD"] = "FILM_STANDARD";
    Ac3DynamicRangeCompressionRf["MUSIC_LIGHT"] = "MUSIC_LIGHT";
    Ac3DynamicRangeCompressionRf["MUSIC_STANDARD"] = "MUSIC_STANDARD";
    Ac3DynamicRangeCompressionRf["NONE"] = "NONE";
    Ac3DynamicRangeCompressionRf["SPEECH"] = "SPEECH";
})(Ac3DynamicRangeCompressionRf || (Ac3DynamicRangeCompressionRf = {}));
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
export var AiffSettings;
(function (AiffSettings) {
    /**
     * @internal
     */
    AiffSettings.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(AiffSettings || (AiffSettings = {}));
export var AudioCodec;
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
})(AudioCodec || (AudioCodec = {}));
export var Eac3AtmosBitstreamMode;
(function (Eac3AtmosBitstreamMode) {
    Eac3AtmosBitstreamMode["COMPLETE_MAIN"] = "COMPLETE_MAIN";
})(Eac3AtmosBitstreamMode || (Eac3AtmosBitstreamMode = {}));
export var Eac3AtmosCodingMode;
(function (Eac3AtmosCodingMode) {
    Eac3AtmosCodingMode["CODING_MODE_9_1_6"] = "CODING_MODE_9_1_6";
})(Eac3AtmosCodingMode || (Eac3AtmosCodingMode = {}));
export var Eac3AtmosDialogueIntelligence;
(function (Eac3AtmosDialogueIntelligence) {
    Eac3AtmosDialogueIntelligence["DISABLED"] = "DISABLED";
    Eac3AtmosDialogueIntelligence["ENABLED"] = "ENABLED";
})(Eac3AtmosDialogueIntelligence || (Eac3AtmosDialogueIntelligence = {}));
export var Eac3AtmosDynamicRangeCompressionLine;
(function (Eac3AtmosDynamicRangeCompressionLine) {
    Eac3AtmosDynamicRangeCompressionLine["FILM_LIGHT"] = "FILM_LIGHT";
    Eac3AtmosDynamicRangeCompressionLine["FILM_STANDARD"] = "FILM_STANDARD";
    Eac3AtmosDynamicRangeCompressionLine["MUSIC_LIGHT"] = "MUSIC_LIGHT";
    Eac3AtmosDynamicRangeCompressionLine["MUSIC_STANDARD"] = "MUSIC_STANDARD";
    Eac3AtmosDynamicRangeCompressionLine["NONE"] = "NONE";
    Eac3AtmosDynamicRangeCompressionLine["SPEECH"] = "SPEECH";
})(Eac3AtmosDynamicRangeCompressionLine || (Eac3AtmosDynamicRangeCompressionLine = {}));
export var Eac3AtmosDynamicRangeCompressionRf;
(function (Eac3AtmosDynamicRangeCompressionRf) {
    Eac3AtmosDynamicRangeCompressionRf["FILM_LIGHT"] = "FILM_LIGHT";
    Eac3AtmosDynamicRangeCompressionRf["FILM_STANDARD"] = "FILM_STANDARD";
    Eac3AtmosDynamicRangeCompressionRf["MUSIC_LIGHT"] = "MUSIC_LIGHT";
    Eac3AtmosDynamicRangeCompressionRf["MUSIC_STANDARD"] = "MUSIC_STANDARD";
    Eac3AtmosDynamicRangeCompressionRf["NONE"] = "NONE";
    Eac3AtmosDynamicRangeCompressionRf["SPEECH"] = "SPEECH";
})(Eac3AtmosDynamicRangeCompressionRf || (Eac3AtmosDynamicRangeCompressionRf = {}));
export var Eac3AtmosMeteringMode;
(function (Eac3AtmosMeteringMode) {
    Eac3AtmosMeteringMode["ITU_BS_1770_1"] = "ITU_BS_1770_1";
    Eac3AtmosMeteringMode["ITU_BS_1770_2"] = "ITU_BS_1770_2";
    Eac3AtmosMeteringMode["ITU_BS_1770_3"] = "ITU_BS_1770_3";
    Eac3AtmosMeteringMode["ITU_BS_1770_4"] = "ITU_BS_1770_4";
    Eac3AtmosMeteringMode["LEQ_A"] = "LEQ_A";
})(Eac3AtmosMeteringMode || (Eac3AtmosMeteringMode = {}));
export var Eac3AtmosStereoDownmix;
(function (Eac3AtmosStereoDownmix) {
    Eac3AtmosStereoDownmix["DPL2"] = "DPL2";
    Eac3AtmosStereoDownmix["NOT_INDICATED"] = "NOT_INDICATED";
    Eac3AtmosStereoDownmix["STEREO"] = "STEREO";
    Eac3AtmosStereoDownmix["SURROUND"] = "SURROUND";
})(Eac3AtmosStereoDownmix || (Eac3AtmosStereoDownmix = {}));
export var Eac3AtmosSurroundExMode;
(function (Eac3AtmosSurroundExMode) {
    Eac3AtmosSurroundExMode["DISABLED"] = "DISABLED";
    Eac3AtmosSurroundExMode["ENABLED"] = "ENABLED";
    Eac3AtmosSurroundExMode["NOT_INDICATED"] = "NOT_INDICATED";
})(Eac3AtmosSurroundExMode || (Eac3AtmosSurroundExMode = {}));
export var Eac3AtmosSettings;
(function (Eac3AtmosSettings) {
    /**
     * @internal
     */
    Eac3AtmosSettings.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(Eac3AtmosSettings || (Eac3AtmosSettings = {}));
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
export var Eac3DynamicRangeCompressionLine;
(function (Eac3DynamicRangeCompressionLine) {
    Eac3DynamicRangeCompressionLine["FILM_LIGHT"] = "FILM_LIGHT";
    Eac3DynamicRangeCompressionLine["FILM_STANDARD"] = "FILM_STANDARD";
    Eac3DynamicRangeCompressionLine["MUSIC_LIGHT"] = "MUSIC_LIGHT";
    Eac3DynamicRangeCompressionLine["MUSIC_STANDARD"] = "MUSIC_STANDARD";
    Eac3DynamicRangeCompressionLine["NONE"] = "NONE";
    Eac3DynamicRangeCompressionLine["SPEECH"] = "SPEECH";
})(Eac3DynamicRangeCompressionLine || (Eac3DynamicRangeCompressionLine = {}));
export var Eac3DynamicRangeCompressionRf;
(function (Eac3DynamicRangeCompressionRf) {
    Eac3DynamicRangeCompressionRf["FILM_LIGHT"] = "FILM_LIGHT";
    Eac3DynamicRangeCompressionRf["FILM_STANDARD"] = "FILM_STANDARD";
    Eac3DynamicRangeCompressionRf["MUSIC_LIGHT"] = "MUSIC_LIGHT";
    Eac3DynamicRangeCompressionRf["MUSIC_STANDARD"] = "MUSIC_STANDARD";
    Eac3DynamicRangeCompressionRf["NONE"] = "NONE";
    Eac3DynamicRangeCompressionRf["SPEECH"] = "SPEECH";
})(Eac3DynamicRangeCompressionRf || (Eac3DynamicRangeCompressionRf = {}));
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
export var Mp2Settings;
(function (Mp2Settings) {
    /**
     * @internal
     */
    Mp2Settings.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(Mp2Settings || (Mp2Settings = {}));
export var Mp3RateControlMode;
(function (Mp3RateControlMode) {
    Mp3RateControlMode["CBR"] = "CBR";
    Mp3RateControlMode["VBR"] = "VBR";
})(Mp3RateControlMode || (Mp3RateControlMode = {}));
export var Mp3Settings;
(function (Mp3Settings) {
    /**
     * @internal
     */
    Mp3Settings.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(Mp3Settings || (Mp3Settings = {}));
export var OpusSettings;
(function (OpusSettings) {
    /**
     * @internal
     */
    OpusSettings.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(OpusSettings || (OpusSettings = {}));
export var VorbisSettings;
(function (VorbisSettings) {
    /**
     * @internal
     */
    VorbisSettings.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(VorbisSettings || (VorbisSettings = {}));
export var WavFormat;
(function (WavFormat) {
    WavFormat["RF64"] = "RF64";
    WavFormat["RIFF"] = "RIFF";
})(WavFormat || (WavFormat = {}));
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
export var LanguageCode;
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
})(LanguageCode || (LanguageCode = {}));
export var AudioLanguageCodeControl;
(function (AudioLanguageCodeControl) {
    AudioLanguageCodeControl["FOLLOW_INPUT"] = "FOLLOW_INPUT";
    AudioLanguageCodeControl["USE_CONFIGURED"] = "USE_CONFIGURED";
})(AudioLanguageCodeControl || (AudioLanguageCodeControl = {}));
export var OutputChannelMapping;
(function (OutputChannelMapping) {
    /**
     * @internal
     */
    OutputChannelMapping.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(OutputChannelMapping || (OutputChannelMapping = {}));
export var ChannelMapping;
(function (ChannelMapping) {
    /**
     * @internal
     */
    ChannelMapping.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(ChannelMapping || (ChannelMapping = {}));
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
export var BurninSubtitleAlignment;
(function (BurninSubtitleAlignment) {
    BurninSubtitleAlignment["CENTERED"] = "CENTERED";
    BurninSubtitleAlignment["LEFT"] = "LEFT";
})(BurninSubtitleAlignment || (BurninSubtitleAlignment = {}));
export var BurninSubtitleBackgroundColor;
(function (BurninSubtitleBackgroundColor) {
    BurninSubtitleBackgroundColor["BLACK"] = "BLACK";
    BurninSubtitleBackgroundColor["NONE"] = "NONE";
    BurninSubtitleBackgroundColor["WHITE"] = "WHITE";
})(BurninSubtitleBackgroundColor || (BurninSubtitleBackgroundColor = {}));
export var BurninSubtitleFontColor;
(function (BurninSubtitleFontColor) {
    BurninSubtitleFontColor["BLACK"] = "BLACK";
    BurninSubtitleFontColor["BLUE"] = "BLUE";
    BurninSubtitleFontColor["GREEN"] = "GREEN";
    BurninSubtitleFontColor["RED"] = "RED";
    BurninSubtitleFontColor["WHITE"] = "WHITE";
    BurninSubtitleFontColor["YELLOW"] = "YELLOW";
})(BurninSubtitleFontColor || (BurninSubtitleFontColor = {}));
export var FontScript;
(function (FontScript) {
    FontScript["AUTOMATIC"] = "AUTOMATIC";
    FontScript["HANS"] = "HANS";
    FontScript["HANT"] = "HANT";
})(FontScript || (FontScript = {}));
export var BurninSubtitleOutlineColor;
(function (BurninSubtitleOutlineColor) {
    BurninSubtitleOutlineColor["BLACK"] = "BLACK";
    BurninSubtitleOutlineColor["BLUE"] = "BLUE";
    BurninSubtitleOutlineColor["GREEN"] = "GREEN";
    BurninSubtitleOutlineColor["RED"] = "RED";
    BurninSubtitleOutlineColor["WHITE"] = "WHITE";
    BurninSubtitleOutlineColor["YELLOW"] = "YELLOW";
})(BurninSubtitleOutlineColor || (BurninSubtitleOutlineColor = {}));
export var BurninSubtitleShadowColor;
(function (BurninSubtitleShadowColor) {
    BurninSubtitleShadowColor["BLACK"] = "BLACK";
    BurninSubtitleShadowColor["NONE"] = "NONE";
    BurninSubtitleShadowColor["WHITE"] = "WHITE";
})(BurninSubtitleShadowColor || (BurninSubtitleShadowColor = {}));
export var BurninSubtitleTeletextSpacing;
(function (BurninSubtitleTeletextSpacing) {
    BurninSubtitleTeletextSpacing["FIXED_GRID"] = "FIXED_GRID";
    BurninSubtitleTeletextSpacing["PROPORTIONAL"] = "PROPORTIONAL";
})(BurninSubtitleTeletextSpacing || (BurninSubtitleTeletextSpacing = {}));
export var BurninDestinationSettings;
(function (BurninDestinationSettings) {
    /**
     * @internal
     */
    BurninDestinationSettings.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(BurninDestinationSettings || (BurninDestinationSettings = {}));
export var CaptionDestinationType;
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
})(CaptionDestinationType || (CaptionDestinationType = {}));
export var DvbSubtitleAlignment;
(function (DvbSubtitleAlignment) {
    DvbSubtitleAlignment["CENTERED"] = "CENTERED";
    DvbSubtitleAlignment["LEFT"] = "LEFT";
})(DvbSubtitleAlignment || (DvbSubtitleAlignment = {}));
export var DvbSubtitleBackgroundColor;
(function (DvbSubtitleBackgroundColor) {
    DvbSubtitleBackgroundColor["BLACK"] = "BLACK";
    DvbSubtitleBackgroundColor["NONE"] = "NONE";
    DvbSubtitleBackgroundColor["WHITE"] = "WHITE";
})(DvbSubtitleBackgroundColor || (DvbSubtitleBackgroundColor = {}));
export var DvbddsHandling;
(function (DvbddsHandling) {
    DvbddsHandling["NONE"] = "NONE";
    DvbddsHandling["NO_DISPLAY_WINDOW"] = "NO_DISPLAY_WINDOW";
    DvbddsHandling["SPECIFIED"] = "SPECIFIED";
})(DvbddsHandling || (DvbddsHandling = {}));
export var DvbSubtitleFontColor;
(function (DvbSubtitleFontColor) {
    DvbSubtitleFontColor["BLACK"] = "BLACK";
    DvbSubtitleFontColor["BLUE"] = "BLUE";
    DvbSubtitleFontColor["GREEN"] = "GREEN";
    DvbSubtitleFontColor["RED"] = "RED";
    DvbSubtitleFontColor["WHITE"] = "WHITE";
    DvbSubtitleFontColor["YELLOW"] = "YELLOW";
})(DvbSubtitleFontColor || (DvbSubtitleFontColor = {}));
export var DvbSubtitleOutlineColor;
(function (DvbSubtitleOutlineColor) {
    DvbSubtitleOutlineColor["BLACK"] = "BLACK";
    DvbSubtitleOutlineColor["BLUE"] = "BLUE";
    DvbSubtitleOutlineColor["GREEN"] = "GREEN";
    DvbSubtitleOutlineColor["RED"] = "RED";
    DvbSubtitleOutlineColor["WHITE"] = "WHITE";
    DvbSubtitleOutlineColor["YELLOW"] = "YELLOW";
})(DvbSubtitleOutlineColor || (DvbSubtitleOutlineColor = {}));
export var DvbSubtitleShadowColor;
(function (DvbSubtitleShadowColor) {
    DvbSubtitleShadowColor["BLACK"] = "BLACK";
    DvbSubtitleShadowColor["NONE"] = "NONE";
    DvbSubtitleShadowColor["WHITE"] = "WHITE";
})(DvbSubtitleShadowColor || (DvbSubtitleShadowColor = {}));
export var DvbSubtitlingType;
(function (DvbSubtitlingType) {
    DvbSubtitlingType["HEARING_IMPAIRED"] = "HEARING_IMPAIRED";
    DvbSubtitlingType["STANDARD"] = "STANDARD";
})(DvbSubtitlingType || (DvbSubtitlingType = {}));
export var DvbSubtitleTeletextSpacing;
(function (DvbSubtitleTeletextSpacing) {
    DvbSubtitleTeletextSpacing["FIXED_GRID"] = "FIXED_GRID";
    DvbSubtitleTeletextSpacing["PROPORTIONAL"] = "PROPORTIONAL";
})(DvbSubtitleTeletextSpacing || (DvbSubtitleTeletextSpacing = {}));
export var DvbSubDestinationSettings;
(function (DvbSubDestinationSettings) {
    /**
     * @internal
     */
    DvbSubDestinationSettings.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(DvbSubDestinationSettings || (DvbSubDestinationSettings = {}));
export var EmbeddedDestinationSettings;
(function (EmbeddedDestinationSettings) {
    /**
     * @internal
     */
    EmbeddedDestinationSettings.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(EmbeddedDestinationSettings || (EmbeddedDestinationSettings = {}));
export var ImscStylePassthrough;
(function (ImscStylePassthrough) {
    ImscStylePassthrough["DISABLED"] = "DISABLED";
    ImscStylePassthrough["ENABLED"] = "ENABLED";
})(ImscStylePassthrough || (ImscStylePassthrough = {}));
export var ImscDestinationSettings;
(function (ImscDestinationSettings) {
    /**
     * @internal
     */
    ImscDestinationSettings.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(ImscDestinationSettings || (ImscDestinationSettings = {}));
export var SccDestinationFramerate;
(function (SccDestinationFramerate) {
    SccDestinationFramerate["FRAMERATE_23_97"] = "FRAMERATE_23_97";
    SccDestinationFramerate["FRAMERATE_24"] = "FRAMERATE_24";
    SccDestinationFramerate["FRAMERATE_25"] = "FRAMERATE_25";
    SccDestinationFramerate["FRAMERATE_29_97_DROPFRAME"] = "FRAMERATE_29_97_DROPFRAME";
    SccDestinationFramerate["FRAMERATE_29_97_NON_DROPFRAME"] = "FRAMERATE_29_97_NON_DROPFRAME";
})(SccDestinationFramerate || (SccDestinationFramerate = {}));
export var SccDestinationSettings;
(function (SccDestinationSettings) {
    /**
     * @internal
     */
    SccDestinationSettings.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(SccDestinationSettings || (SccDestinationSettings = {}));
export var TeletextPageType;
(function (TeletextPageType) {
    TeletextPageType["PAGE_TYPE_ADDL_INFO"] = "PAGE_TYPE_ADDL_INFO";
    TeletextPageType["PAGE_TYPE_HEARING_IMPAIRED_SUBTITLE"] = "PAGE_TYPE_HEARING_IMPAIRED_SUBTITLE";
    TeletextPageType["PAGE_TYPE_INITIAL"] = "PAGE_TYPE_INITIAL";
    TeletextPageType["PAGE_TYPE_PROGRAM_SCHEDULE"] = "PAGE_TYPE_PROGRAM_SCHEDULE";
    TeletextPageType["PAGE_TYPE_SUBTITLE"] = "PAGE_TYPE_SUBTITLE";
})(TeletextPageType || (TeletextPageType = {}));
export var TeletextDestinationSettings;
(function (TeletextDestinationSettings) {
    /**
     * @internal
     */
    TeletextDestinationSettings.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(TeletextDestinationSettings || (TeletextDestinationSettings = {}));
export var TtmlStylePassthrough;
(function (TtmlStylePassthrough) {
    TtmlStylePassthrough["DISABLED"] = "DISABLED";
    TtmlStylePassthrough["ENABLED"] = "ENABLED";
})(TtmlStylePassthrough || (TtmlStylePassthrough = {}));
export var TtmlDestinationSettings;
(function (TtmlDestinationSettings) {
    /**
     * @internal
     */
    TtmlDestinationSettings.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(TtmlDestinationSettings || (TtmlDestinationSettings = {}));
export var WebvttStylePassthrough;
(function (WebvttStylePassthrough) {
    WebvttStylePassthrough["DISABLED"] = "DISABLED";
    WebvttStylePassthrough["ENABLED"] = "ENABLED";
})(WebvttStylePassthrough || (WebvttStylePassthrough = {}));
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
export var CaptionDescriptionPreset;
(function (CaptionDescriptionPreset) {
    /**
     * @internal
     */
    CaptionDescriptionPreset.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(CaptionDescriptionPreset || (CaptionDescriptionPreset = {}));
export var CmafAdditionalManifest;
(function (CmafAdditionalManifest) {
    /**
     * @internal
     */
    CmafAdditionalManifest.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(CmafAdditionalManifest || (CmafAdditionalManifest = {}));
export var DashAdditionalManifest;
(function (DashAdditionalManifest) {
    /**
     * @internal
     */
    DashAdditionalManifest.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(DashAdditionalManifest || (DashAdditionalManifest = {}));
export var Endpoint;
(function (Endpoint) {
    /**
     * @internal
     */
    Endpoint.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(Endpoint || (Endpoint = {}));
export var HlsAdditionalManifest;
(function (HlsAdditionalManifest) {
    /**
     * @internal
     */
    HlsAdditionalManifest.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(HlsAdditionalManifest || (HlsAdditionalManifest = {}));
export var HlsAdMarkers;
(function (HlsAdMarkers) {
    HlsAdMarkers["ELEMENTAL"] = "ELEMENTAL";
    HlsAdMarkers["ELEMENTAL_SCTE35"] = "ELEMENTAL_SCTE35";
})(HlsAdMarkers || (HlsAdMarkers = {}));
export var HlsCaptionLanguageMapping;
(function (HlsCaptionLanguageMapping) {
    /**
     * @internal
     */
    HlsCaptionLanguageMapping.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(HlsCaptionLanguageMapping || (HlsCaptionLanguageMapping = {}));
export var HopDestination;
(function (HopDestination) {
    /**
     * @internal
     */
    HopDestination.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(HopDestination || (HopDestination = {}));
export var Id3Insertion;
(function (Id3Insertion) {
    /**
     * @internal
     */
    Id3Insertion.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(Id3Insertion || (Id3Insertion = {}));
export var AudioSelectorGroup;
(function (AudioSelectorGroup) {
    /**
     * @internal
     */
    AudioSelectorGroup.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(AudioSelectorGroup || (AudioSelectorGroup = {}));
export var AudioDefaultSelection;
(function (AudioDefaultSelection) {
    AudioDefaultSelection["DEFAULT"] = "DEFAULT";
    AudioDefaultSelection["NOT_DEFAULT"] = "NOT_DEFAULT";
})(AudioDefaultSelection || (AudioDefaultSelection = {}));
export var AudioSelectorType;
(function (AudioSelectorType) {
    AudioSelectorType["LANGUAGE_CODE"] = "LANGUAGE_CODE";
    AudioSelectorType["PID"] = "PID";
    AudioSelectorType["TRACK"] = "TRACK";
})(AudioSelectorType || (AudioSelectorType = {}));
export var AudioSelector;
(function (AudioSelector) {
    /**
     * @internal
     */
    AudioSelector.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(AudioSelector || (AudioSelector = {}));
export var AncillaryConvert608To708;
(function (AncillaryConvert608To708) {
    AncillaryConvert608To708["DISABLED"] = "DISABLED";
    AncillaryConvert608To708["UPCONVERT"] = "UPCONVERT";
})(AncillaryConvert608To708 || (AncillaryConvert608To708 = {}));
export var AncillaryTerminateCaptions;
(function (AncillaryTerminateCaptions) {
    AncillaryTerminateCaptions["DISABLED"] = "DISABLED";
    AncillaryTerminateCaptions["END_OF_INPUT"] = "END_OF_INPUT";
})(AncillaryTerminateCaptions || (AncillaryTerminateCaptions = {}));
export var AncillarySourceSettings;
(function (AncillarySourceSettings) {
    /**
     * @internal
     */
    AncillarySourceSettings.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(AncillarySourceSettings || (AncillarySourceSettings = {}));
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
export var EmbeddedTerminateCaptions;
(function (EmbeddedTerminateCaptions) {
    EmbeddedTerminateCaptions["DISABLED"] = "DISABLED";
    EmbeddedTerminateCaptions["END_OF_INPUT"] = "END_OF_INPUT";
})(EmbeddedTerminateCaptions || (EmbeddedTerminateCaptions = {}));
export var EmbeddedSourceSettings;
(function (EmbeddedSourceSettings) {
    /**
     * @internal
     */
    EmbeddedSourceSettings.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(EmbeddedSourceSettings || (EmbeddedSourceSettings = {}));
export var FileSourceConvert608To708;
(function (FileSourceConvert608To708) {
    FileSourceConvert608To708["DISABLED"] = "DISABLED";
    FileSourceConvert608To708["UPCONVERT"] = "UPCONVERT";
})(FileSourceConvert608To708 || (FileSourceConvert608To708 = {}));
export var CaptionSourceFramerate;
(function (CaptionSourceFramerate) {
    /**
     * @internal
     */
    CaptionSourceFramerate.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(CaptionSourceFramerate || (CaptionSourceFramerate = {}));
export var FileSourceSettings;
(function (FileSourceSettings) {
    /**
     * @internal
     */
    FileSourceSettings.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(FileSourceSettings || (FileSourceSettings = {}));
export var CaptionSourceType;
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
})(CaptionSourceType || (CaptionSourceType = {}));
export var TeletextSourceSettings;
(function (TeletextSourceSettings) {
    /**
     * @internal
     */
    TeletextSourceSettings.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(TeletextSourceSettings || (TeletextSourceSettings = {}));
export var TrackSourceSettings;
(function (TrackSourceSettings) {
    /**
     * @internal
     */
    TrackSourceSettings.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(TrackSourceSettings || (TrackSourceSettings = {}));
export var CaptionSourceSettings;
(function (CaptionSourceSettings) {
    /**
     * @internal
     */
    CaptionSourceSettings.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(CaptionSourceSettings || (CaptionSourceSettings = {}));
export var CaptionSelector;
(function (CaptionSelector) {
    /**
     * @internal
     */
    CaptionSelector.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(CaptionSelector || (CaptionSelector = {}));
export var Rectangle;
(function (Rectangle) {
    /**
     * @internal
     */
    Rectangle.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(Rectangle || (Rectangle = {}));
export var InputDeblockFilter;
(function (InputDeblockFilter) {
    InputDeblockFilter["DISABLED"] = "DISABLED";
    InputDeblockFilter["ENABLED"] = "ENABLED";
})(InputDeblockFilter || (InputDeblockFilter = {}));
export var DecryptionMode;
(function (DecryptionMode) {
    DecryptionMode["AES_CBC"] = "AES_CBC";
    DecryptionMode["AES_CTR"] = "AES_CTR";
    DecryptionMode["AES_GCM"] = "AES_GCM";
})(DecryptionMode || (DecryptionMode = {}));
export var InputDecryptionSettings;
(function (InputDecryptionSettings) {
    /**
     * @internal
     */
    InputDecryptionSettings.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(InputDecryptionSettings || (InputDecryptionSettings = {}));
export var InputDenoiseFilter;
(function (InputDenoiseFilter) {
    InputDenoiseFilter["DISABLED"] = "DISABLED";
    InputDenoiseFilter["ENABLED"] = "ENABLED";
})(InputDenoiseFilter || (InputDenoiseFilter = {}));
export var InputFilterEnable;
(function (InputFilterEnable) {
    InputFilterEnable["AUTO"] = "AUTO";
    InputFilterEnable["DISABLE"] = "DISABLE";
    InputFilterEnable["FORCE"] = "FORCE";
})(InputFilterEnable || (InputFilterEnable = {}));
export var InsertableImage;
(function (InsertableImage) {
    /**
     * @internal
     */
    InsertableImage.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(InsertableImage || (InsertableImage = {}));
export var ImageInserter;
(function (ImageInserter) {
    /**
     * @internal
     */
    ImageInserter.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(ImageInserter || (ImageInserter = {}));
export var InputClipping;
(function (InputClipping) {
    /**
     * @internal
     */
    InputClipping.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(InputClipping || (InputClipping = {}));
export var InputScanType;
(function (InputScanType) {
    InputScanType["AUTO"] = "AUTO";
    InputScanType["PSF"] = "PSF";
})(InputScanType || (InputScanType = {}));
export var InputPsiControl;
(function (InputPsiControl) {
    InputPsiControl["IGNORE_PSI"] = "IGNORE_PSI";
    InputPsiControl["USE_PSI"] = "USE_PSI";
})(InputPsiControl || (InputPsiControl = {}));
export var InputTimecodeSource;
(function (InputTimecodeSource) {
    InputTimecodeSource["EMBEDDED"] = "EMBEDDED";
    InputTimecodeSource["SPECIFIEDSTART"] = "SPECIFIEDSTART";
    InputTimecodeSource["ZEROBASED"] = "ZEROBASED";
})(InputTimecodeSource || (InputTimecodeSource = {}));
export var AlphaBehavior;
(function (AlphaBehavior) {
    AlphaBehavior["DISCARD"] = "DISCARD";
    AlphaBehavior["REMAP_TO_LUMA"] = "REMAP_TO_LUMA";
})(AlphaBehavior || (AlphaBehavior = {}));
export var ColorSpace;
(function (ColorSpace) {
    ColorSpace["FOLLOW"] = "FOLLOW";
    ColorSpace["HDR10"] = "HDR10";
    ColorSpace["HLG_2020"] = "HLG_2020";
    ColorSpace["REC_601"] = "REC_601";
    ColorSpace["REC_709"] = "REC_709";
})(ColorSpace || (ColorSpace = {}));
export var ColorSpaceUsage;
(function (ColorSpaceUsage) {
    ColorSpaceUsage["FALLBACK"] = "FALLBACK";
    ColorSpaceUsage["FORCE"] = "FORCE";
})(ColorSpaceUsage || (ColorSpaceUsage = {}));
export var Hdr10Metadata;
(function (Hdr10Metadata) {
    /**
     * @internal
     */
    Hdr10Metadata.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(Hdr10Metadata || (Hdr10Metadata = {}));
export var InputRotate;
(function (InputRotate) {
    InputRotate["AUTO"] = "AUTO";
    InputRotate["DEGREES_180"] = "DEGREES_180";
    InputRotate["DEGREES_270"] = "DEGREES_270";
    InputRotate["DEGREES_90"] = "DEGREES_90";
    InputRotate["DEGREE_0"] = "DEGREE_0";
})(InputRotate || (InputRotate = {}));
export var InputSampleRange;
(function (InputSampleRange) {
    InputSampleRange["FOLLOW"] = "FOLLOW";
    InputSampleRange["FULL_RANGE"] = "FULL_RANGE";
    InputSampleRange["LIMITED_RANGE"] = "LIMITED_RANGE";
})(InputSampleRange || (InputSampleRange = {}));
export var VideoSelector;
(function (VideoSelector) {
    /**
     * @internal
     */
    VideoSelector.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(VideoSelector || (VideoSelector = {}));
export var Input;
(function (Input) {
    /**
     * @internal
     */
    Input.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(Input || (Input = {}));
export var InputTemplate;
(function (InputTemplate) {
    /**
     * @internal
     */
    InputTemplate.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(InputTemplate || (InputTemplate = {}));
export var AccelerationMode;
(function (AccelerationMode) {
    AccelerationMode["DISABLED"] = "DISABLED";
    AccelerationMode["ENABLED"] = "ENABLED";
    AccelerationMode["PREFERRED"] = "PREFERRED";
})(AccelerationMode || (AccelerationMode = {}));
export var AccelerationSettings;
(function (AccelerationSettings) {
    /**
     * @internal
     */
    AccelerationSettings.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(AccelerationSettings || (AccelerationSettings = {}));
export var AccelerationStatus;
(function (AccelerationStatus) {
    AccelerationStatus["ACCELERATED"] = "ACCELERATED";
    AccelerationStatus["IN_PROGRESS"] = "IN_PROGRESS";
    AccelerationStatus["NOT_ACCELERATED"] = "NOT_ACCELERATED";
    AccelerationStatus["NOT_APPLICABLE"] = "NOT_APPLICABLE";
})(AccelerationStatus || (AccelerationStatus = {}));
export var BillingTagsSource;
(function (BillingTagsSource) {
    BillingTagsSource["JOB"] = "JOB";
    BillingTagsSource["JOB_TEMPLATE"] = "JOB_TEMPLATE";
    BillingTagsSource["PRESET"] = "PRESET";
    BillingTagsSource["QUEUE"] = "QUEUE";
})(BillingTagsSource || (BillingTagsSource = {}));
export var JobPhase;
(function (JobPhase) {
    JobPhase["PROBING"] = "PROBING";
    JobPhase["TRANSCODING"] = "TRANSCODING";
    JobPhase["UPLOADING"] = "UPLOADING";
})(JobPhase || (JobPhase = {}));
export var JobMessages;
(function (JobMessages) {
    /**
     * @internal
     */
    JobMessages.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(JobMessages || (JobMessages = {}));
export var VideoDetail;
(function (VideoDetail) {
    /**
     * @internal
     */
    VideoDetail.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(VideoDetail || (VideoDetail = {}));
export var OutputDetail;
(function (OutputDetail) {
    /**
     * @internal
     */
    OutputDetail.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(OutputDetail || (OutputDetail = {}));
export var OutputGroupDetail;
(function (OutputGroupDetail) {
    /**
     * @internal
     */
    OutputGroupDetail.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(OutputGroupDetail || (OutputGroupDetail = {}));
export var QueueTransition;
(function (QueueTransition) {
    /**
     * @internal
     */
    QueueTransition.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(QueueTransition || (QueueTransition = {}));
export var AvailBlanking;
(function (AvailBlanking) {
    /**
     * @internal
     */
    AvailBlanking.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(AvailBlanking || (AvailBlanking = {}));
export var EsamManifestConfirmConditionNotification;
(function (EsamManifestConfirmConditionNotification) {
    /**
     * @internal
     */
    EsamManifestConfirmConditionNotification.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(EsamManifestConfirmConditionNotification || (EsamManifestConfirmConditionNotification = {}));
export var EsamSignalProcessingNotification;
(function (EsamSignalProcessingNotification) {
    /**
     * @internal
     */
    EsamSignalProcessingNotification.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(EsamSignalProcessingNotification || (EsamSignalProcessingNotification = {}));
export var EsamSettings;
(function (EsamSettings) {
    /**
     * @internal
     */
    EsamSettings.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(EsamSettings || (EsamSettings = {}));
export var KantarWatermarkSettings;
(function (KantarWatermarkSettings) {
    /**
     * @internal
     */
    KantarWatermarkSettings.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(KantarWatermarkSettings || (KantarWatermarkSettings = {}));
export var MotionImageInsertionFramerate;
(function (MotionImageInsertionFramerate) {
    /**
     * @internal
     */
    MotionImageInsertionFramerate.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(MotionImageInsertionFramerate || (MotionImageInsertionFramerate = {}));
export var MotionImageInsertionMode;
(function (MotionImageInsertionMode) {
    MotionImageInsertionMode["MOV"] = "MOV";
    MotionImageInsertionMode["PNG"] = "PNG";
})(MotionImageInsertionMode || (MotionImageInsertionMode = {}));
export var MotionImageInsertionOffset;
(function (MotionImageInsertionOffset) {
    /**
     * @internal
     */
    MotionImageInsertionOffset.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(MotionImageInsertionOffset || (MotionImageInsertionOffset = {}));
export var MotionImagePlayback;
(function (MotionImagePlayback) {
    MotionImagePlayback["ONCE"] = "ONCE";
    MotionImagePlayback["REPEAT"] = "REPEAT";
})(MotionImagePlayback || (MotionImagePlayback = {}));
export var MotionImageInserter;
(function (MotionImageInserter) {
    /**
     * @internal
     */
    MotionImageInserter.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(MotionImageInserter || (MotionImageInserter = {}));
export var NielsenConfiguration;
(function (NielsenConfiguration) {
    /**
     * @internal
     */
    NielsenConfiguration.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(NielsenConfiguration || (NielsenConfiguration = {}));
export var NielsenActiveWatermarkProcessType;
(function (NielsenActiveWatermarkProcessType) {
    NielsenActiveWatermarkProcessType["CBET"] = "CBET";
    NielsenActiveWatermarkProcessType["NAES2_AND_NW"] = "NAES2_AND_NW";
    NielsenActiveWatermarkProcessType["NAES2_AND_NW_AND_CBET"] = "NAES2_AND_NW_AND_CBET";
})(NielsenActiveWatermarkProcessType || (NielsenActiveWatermarkProcessType = {}));
export var NielsenSourceWatermarkStatusType;
(function (NielsenSourceWatermarkStatusType) {
    NielsenSourceWatermarkStatusType["CLEAN"] = "CLEAN";
    NielsenSourceWatermarkStatusType["WATERMARKED"] = "WATERMARKED";
})(NielsenSourceWatermarkStatusType || (NielsenSourceWatermarkStatusType = {}));
export var NielsenUniqueTicPerAudioTrackType;
(function (NielsenUniqueTicPerAudioTrackType) {
    NielsenUniqueTicPerAudioTrackType["RESERVE_UNIQUE_TICS_PER_TRACK"] = "RESERVE_UNIQUE_TICS_PER_TRACK";
    NielsenUniqueTicPerAudioTrackType["SAME_TICS_PER_TRACK"] = "SAME_TICS_PER_TRACK";
})(NielsenUniqueTicPerAudioTrackType || (NielsenUniqueTicPerAudioTrackType = {}));
export var NielsenNonLinearWatermarkSettings;
(function (NielsenNonLinearWatermarkSettings) {
    /**
     * @internal
     */
    NielsenNonLinearWatermarkSettings.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(NielsenNonLinearWatermarkSettings || (NielsenNonLinearWatermarkSettings = {}));
export var AutomatedAbrSettings;
(function (AutomatedAbrSettings) {
    /**
     * @internal
     */
    AutomatedAbrSettings.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(AutomatedAbrSettings || (AutomatedAbrSettings = {}));
export var AutomatedEncodingSettings;
(function (AutomatedEncodingSettings) {
    /**
     * @internal
     */
    AutomatedEncodingSettings.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(AutomatedEncodingSettings || (AutomatedEncodingSettings = {}));
export var CmafClientCache;
(function (CmafClientCache) {
    CmafClientCache["DISABLED"] = "DISABLED";
    CmafClientCache["ENABLED"] = "ENABLED";
})(CmafClientCache || (CmafClientCache = {}));
export var CmafCodecSpecification;
(function (CmafCodecSpecification) {
    CmafCodecSpecification["RFC_4281"] = "RFC_4281";
    CmafCodecSpecification["RFC_6381"] = "RFC_6381";
})(CmafCodecSpecification || (CmafCodecSpecification = {}));
export var S3ObjectCannedAcl;
(function (S3ObjectCannedAcl) {
    S3ObjectCannedAcl["AUTHENTICATED_READ"] = "AUTHENTICATED_READ";
    S3ObjectCannedAcl["BUCKET_OWNER_FULL_CONTROL"] = "BUCKET_OWNER_FULL_CONTROL";
    S3ObjectCannedAcl["BUCKET_OWNER_READ"] = "BUCKET_OWNER_READ";
    S3ObjectCannedAcl["PUBLIC_READ"] = "PUBLIC_READ";
})(S3ObjectCannedAcl || (S3ObjectCannedAcl = {}));
export var S3DestinationAccessControl;
(function (S3DestinationAccessControl) {
    /**
     * @internal
     */
    S3DestinationAccessControl.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(S3DestinationAccessControl || (S3DestinationAccessControl = {}));
export var S3ServerSideEncryptionType;
(function (S3ServerSideEncryptionType) {
    S3ServerSideEncryptionType["SERVER_SIDE_ENCRYPTION_KMS"] = "SERVER_SIDE_ENCRYPTION_KMS";
    S3ServerSideEncryptionType["SERVER_SIDE_ENCRYPTION_S3"] = "SERVER_SIDE_ENCRYPTION_S3";
})(S3ServerSideEncryptionType || (S3ServerSideEncryptionType = {}));
export var S3EncryptionSettings;
(function (S3EncryptionSettings) {
    /**
     * @internal
     */
    S3EncryptionSettings.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(S3EncryptionSettings || (S3EncryptionSettings = {}));
export var S3DestinationSettings;
(function (S3DestinationSettings) {
    /**
     * @internal
     */
    S3DestinationSettings.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(S3DestinationSettings || (S3DestinationSettings = {}));
export var DestinationSettings;
(function (DestinationSettings) {
    /**
     * @internal
     */
    DestinationSettings.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(DestinationSettings || (DestinationSettings = {}));
export var CmafEncryptionType;
(function (CmafEncryptionType) {
    CmafEncryptionType["AES_CTR"] = "AES_CTR";
    CmafEncryptionType["SAMPLE_AES"] = "SAMPLE_AES";
})(CmafEncryptionType || (CmafEncryptionType = {}));
export var CmafInitializationVectorInManifest;
(function (CmafInitializationVectorInManifest) {
    CmafInitializationVectorInManifest["EXCLUDE"] = "EXCLUDE";
    CmafInitializationVectorInManifest["INCLUDE"] = "INCLUDE";
})(CmafInitializationVectorInManifest || (CmafInitializationVectorInManifest = {}));
export var SpekeKeyProviderCmaf;
(function (SpekeKeyProviderCmaf) {
    /**
     * @internal
     */
    SpekeKeyProviderCmaf.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(SpekeKeyProviderCmaf || (SpekeKeyProviderCmaf = {}));
export var StaticKeyProvider;
(function (StaticKeyProvider) {
    /**
     * @internal
     */
    StaticKeyProvider.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(StaticKeyProvider || (StaticKeyProvider = {}));
export var CmafKeyProviderType;
(function (CmafKeyProviderType) {
    CmafKeyProviderType["SPEKE"] = "SPEKE";
    CmafKeyProviderType["STATIC_KEY"] = "STATIC_KEY";
})(CmafKeyProviderType || (CmafKeyProviderType = {}));
export var CmafEncryptionSettings;
(function (CmafEncryptionSettings) {
    /**
     * @internal
     */
    CmafEncryptionSettings.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(CmafEncryptionSettings || (CmafEncryptionSettings = {}));
export var CmafManifestCompression;
(function (CmafManifestCompression) {
    CmafManifestCompression["GZIP"] = "GZIP";
    CmafManifestCompression["NONE"] = "NONE";
})(CmafManifestCompression || (CmafManifestCompression = {}));
export var CmafManifestDurationFormat;
(function (CmafManifestDurationFormat) {
    CmafManifestDurationFormat["FLOATING_POINT"] = "FLOATING_POINT";
    CmafManifestDurationFormat["INTEGER"] = "INTEGER";
})(CmafManifestDurationFormat || (CmafManifestDurationFormat = {}));
export var CmafMpdProfile;
(function (CmafMpdProfile) {
    CmafMpdProfile["MAIN_PROFILE"] = "MAIN_PROFILE";
    CmafMpdProfile["ON_DEMAND_PROFILE"] = "ON_DEMAND_PROFILE";
})(CmafMpdProfile || (CmafMpdProfile = {}));
export var CmafPtsOffsetHandlingForBFrames;
(function (CmafPtsOffsetHandlingForBFrames) {
    CmafPtsOffsetHandlingForBFrames["MATCH_INITIAL_PTS"] = "MATCH_INITIAL_PTS";
    CmafPtsOffsetHandlingForBFrames["ZERO_BASED"] = "ZERO_BASED";
})(CmafPtsOffsetHandlingForBFrames || (CmafPtsOffsetHandlingForBFrames = {}));
export var CmafSegmentControl;
(function (CmafSegmentControl) {
    CmafSegmentControl["SEGMENTED_FILES"] = "SEGMENTED_FILES";
    CmafSegmentControl["SINGLE_FILE"] = "SINGLE_FILE";
})(CmafSegmentControl || (CmafSegmentControl = {}));
export var CmafStreamInfResolution;
(function (CmafStreamInfResolution) {
    CmafStreamInfResolution["EXCLUDE"] = "EXCLUDE";
    CmafStreamInfResolution["INCLUDE"] = "INCLUDE";
})(CmafStreamInfResolution || (CmafStreamInfResolution = {}));
export var CmafWriteDASHManifest;
(function (CmafWriteDASHManifest) {
    CmafWriteDASHManifest["DISABLED"] = "DISABLED";
    CmafWriteDASHManifest["ENABLED"] = "ENABLED";
})(CmafWriteDASHManifest || (CmafWriteDASHManifest = {}));
export var CmafWriteHLSManifest;
(function (CmafWriteHLSManifest) {
    CmafWriteHLSManifest["DISABLED"] = "DISABLED";
    CmafWriteHLSManifest["ENABLED"] = "ENABLED";
})(CmafWriteHLSManifest || (CmafWriteHLSManifest = {}));
export var CmafWriteSegmentTimelineInRepresentation;
(function (CmafWriteSegmentTimelineInRepresentation) {
    CmafWriteSegmentTimelineInRepresentation["DISABLED"] = "DISABLED";
    CmafWriteSegmentTimelineInRepresentation["ENABLED"] = "ENABLED";
})(CmafWriteSegmentTimelineInRepresentation || (CmafWriteSegmentTimelineInRepresentation = {}));
export var CmafGroupSettings;
(function (CmafGroupSettings) {
    /**
     * @internal
     */
    CmafGroupSettings.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(CmafGroupSettings || (CmafGroupSettings = {}));
export var DashIsoGroupAudioChannelConfigSchemeIdUri;
(function (DashIsoGroupAudioChannelConfigSchemeIdUri) {
    DashIsoGroupAudioChannelConfigSchemeIdUri["DOLBY_CHANNEL_CONFIGURATION"] = "DOLBY_CHANNEL_CONFIGURATION";
    DashIsoGroupAudioChannelConfigSchemeIdUri["MPEG_CHANNEL_CONFIGURATION"] = "MPEG_CHANNEL_CONFIGURATION";
})(DashIsoGroupAudioChannelConfigSchemeIdUri || (DashIsoGroupAudioChannelConfigSchemeIdUri = {}));
export var DashIsoPlaybackDeviceCompatibility;
(function (DashIsoPlaybackDeviceCompatibility) {
    DashIsoPlaybackDeviceCompatibility["CENC_V1"] = "CENC_V1";
    DashIsoPlaybackDeviceCompatibility["UNENCRYPTED_SEI"] = "UNENCRYPTED_SEI";
})(DashIsoPlaybackDeviceCompatibility || (DashIsoPlaybackDeviceCompatibility = {}));
export var SpekeKeyProvider;
(function (SpekeKeyProvider) {
    /**
     * @internal
     */
    SpekeKeyProvider.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(SpekeKeyProvider || (SpekeKeyProvider = {}));
export var DashIsoEncryptionSettings;
(function (DashIsoEncryptionSettings) {
    /**
     * @internal
     */
    DashIsoEncryptionSettings.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(DashIsoEncryptionSettings || (DashIsoEncryptionSettings = {}));
export var DashIsoHbbtvCompliance;
(function (DashIsoHbbtvCompliance) {
    DashIsoHbbtvCompliance["HBBTV_1_5"] = "HBBTV_1_5";
    DashIsoHbbtvCompliance["NONE"] = "NONE";
})(DashIsoHbbtvCompliance || (DashIsoHbbtvCompliance = {}));
export var DashIsoMpdProfile;
(function (DashIsoMpdProfile) {
    DashIsoMpdProfile["MAIN_PROFILE"] = "MAIN_PROFILE";
    DashIsoMpdProfile["ON_DEMAND_PROFILE"] = "ON_DEMAND_PROFILE";
})(DashIsoMpdProfile || (DashIsoMpdProfile = {}));
export var DashIsoPtsOffsetHandlingForBFrames;
(function (DashIsoPtsOffsetHandlingForBFrames) {
    DashIsoPtsOffsetHandlingForBFrames["MATCH_INITIAL_PTS"] = "MATCH_INITIAL_PTS";
    DashIsoPtsOffsetHandlingForBFrames["ZERO_BASED"] = "ZERO_BASED";
})(DashIsoPtsOffsetHandlingForBFrames || (DashIsoPtsOffsetHandlingForBFrames = {}));
export var DashIsoSegmentControl;
(function (DashIsoSegmentControl) {
    DashIsoSegmentControl["SEGMENTED_FILES"] = "SEGMENTED_FILES";
    DashIsoSegmentControl["SINGLE_FILE"] = "SINGLE_FILE";
})(DashIsoSegmentControl || (DashIsoSegmentControl = {}));
export var DashIsoWriteSegmentTimelineInRepresentation;
(function (DashIsoWriteSegmentTimelineInRepresentation) {
    DashIsoWriteSegmentTimelineInRepresentation["DISABLED"] = "DISABLED";
    DashIsoWriteSegmentTimelineInRepresentation["ENABLED"] = "ENABLED";
})(DashIsoWriteSegmentTimelineInRepresentation || (DashIsoWriteSegmentTimelineInRepresentation = {}));
export var DashIsoGroupSettings;
(function (DashIsoGroupSettings) {
    /**
     * @internal
     */
    DashIsoGroupSettings.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(DashIsoGroupSettings || (DashIsoGroupSettings = {}));
export var FileGroupSettings;
(function (FileGroupSettings) {
    /**
     * @internal
     */
    FileGroupSettings.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(FileGroupSettings || (FileGroupSettings = {}));
export var HlsAudioOnlyHeader;
(function (HlsAudioOnlyHeader) {
    HlsAudioOnlyHeader["EXCLUDE"] = "EXCLUDE";
    HlsAudioOnlyHeader["INCLUDE"] = "INCLUDE";
})(HlsAudioOnlyHeader || (HlsAudioOnlyHeader = {}));
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
export var HlsEncryptionType;
(function (HlsEncryptionType) {
    HlsEncryptionType["AES128"] = "AES128";
    HlsEncryptionType["SAMPLE_AES"] = "SAMPLE_AES";
})(HlsEncryptionType || (HlsEncryptionType = {}));
export var HlsInitializationVectorInManifest;
(function (HlsInitializationVectorInManifest) {
    HlsInitializationVectorInManifest["EXCLUDE"] = "EXCLUDE";
    HlsInitializationVectorInManifest["INCLUDE"] = "INCLUDE";
})(HlsInitializationVectorInManifest || (HlsInitializationVectorInManifest = {}));
export var HlsOfflineEncrypted;
(function (HlsOfflineEncrypted) {
    HlsOfflineEncrypted["DISABLED"] = "DISABLED";
    HlsOfflineEncrypted["ENABLED"] = "ENABLED";
})(HlsOfflineEncrypted || (HlsOfflineEncrypted = {}));
export var HlsKeyProviderType;
(function (HlsKeyProviderType) {
    HlsKeyProviderType["SPEKE"] = "SPEKE";
    HlsKeyProviderType["STATIC_KEY"] = "STATIC_KEY";
})(HlsKeyProviderType || (HlsKeyProviderType = {}));
export var HlsEncryptionSettings;
(function (HlsEncryptionSettings) {
    /**
     * @internal
     */
    HlsEncryptionSettings.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(HlsEncryptionSettings || (HlsEncryptionSettings = {}));
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
export var HlsOutputSelection;
(function (HlsOutputSelection) {
    HlsOutputSelection["MANIFESTS_AND_SEGMENTS"] = "MANIFESTS_AND_SEGMENTS";
    HlsOutputSelection["SEGMENTS_ONLY"] = "SEGMENTS_ONLY";
})(HlsOutputSelection || (HlsOutputSelection = {}));
export var HlsProgramDateTime;
(function (HlsProgramDateTime) {
    HlsProgramDateTime["EXCLUDE"] = "EXCLUDE";
    HlsProgramDateTime["INCLUDE"] = "INCLUDE";
})(HlsProgramDateTime || (HlsProgramDateTime = {}));
export var HlsSegmentControl;
(function (HlsSegmentControl) {
    HlsSegmentControl["SEGMENTED_FILES"] = "SEGMENTED_FILES";
    HlsSegmentControl["SINGLE_FILE"] = "SINGLE_FILE";
})(HlsSegmentControl || (HlsSegmentControl = {}));
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
export var HlsGroupSettings;
(function (HlsGroupSettings) {
    /**
     * @internal
     */
    HlsGroupSettings.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(HlsGroupSettings || (HlsGroupSettings = {}));
export var MsSmoothAdditionalManifest;
(function (MsSmoothAdditionalManifest) {
    /**
     * @internal
     */
    MsSmoothAdditionalManifest.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(MsSmoothAdditionalManifest || (MsSmoothAdditionalManifest = {}));
export var MsSmoothAudioDeduplication;
(function (MsSmoothAudioDeduplication) {
    MsSmoothAudioDeduplication["COMBINE_DUPLICATE_STREAMS"] = "COMBINE_DUPLICATE_STREAMS";
    MsSmoothAudioDeduplication["NONE"] = "NONE";
})(MsSmoothAudioDeduplication || (MsSmoothAudioDeduplication = {}));
export var MsSmoothEncryptionSettings;
(function (MsSmoothEncryptionSettings) {
    /**
     * @internal
     */
    MsSmoothEncryptionSettings.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(MsSmoothEncryptionSettings || (MsSmoothEncryptionSettings = {}));
export var MsSmoothManifestEncoding;
(function (MsSmoothManifestEncoding) {
    MsSmoothManifestEncoding["UTF16"] = "UTF16";
    MsSmoothManifestEncoding["UTF8"] = "UTF8";
})(MsSmoothManifestEncoding || (MsSmoothManifestEncoding = {}));
export var MsSmoothGroupSettings;
(function (MsSmoothGroupSettings) {
    /**
     * @internal
     */
    MsSmoothGroupSettings.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(MsSmoothGroupSettings || (MsSmoothGroupSettings = {}));
export var OutputGroupType;
(function (OutputGroupType) {
    OutputGroupType["CMAF_GROUP_SETTINGS"] = "CMAF_GROUP_SETTINGS";
    OutputGroupType["DASH_ISO_GROUP_SETTINGS"] = "DASH_ISO_GROUP_SETTINGS";
    OutputGroupType["FILE_GROUP_SETTINGS"] = "FILE_GROUP_SETTINGS";
    OutputGroupType["HLS_GROUP_SETTINGS"] = "HLS_GROUP_SETTINGS";
    OutputGroupType["MS_SMOOTH_GROUP_SETTINGS"] = "MS_SMOOTH_GROUP_SETTINGS";
})(OutputGroupType || (OutputGroupType = {}));
export var OutputGroupSettings;
(function (OutputGroupSettings) {
    /**
     * @internal
     */
    OutputGroupSettings.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(OutputGroupSettings || (OutputGroupSettings = {}));
export var CmfcAudioDuration;
(function (CmfcAudioDuration) {
    CmfcAudioDuration["DEFAULT_CODEC_DURATION"] = "DEFAULT_CODEC_DURATION";
    CmfcAudioDuration["MATCH_VIDEO_DURATION"] = "MATCH_VIDEO_DURATION";
})(CmfcAudioDuration || (CmfcAudioDuration = {}));
export var CmfcAudioTrackType;
(function (CmfcAudioTrackType) {
    CmfcAudioTrackType["ALTERNATE_AUDIO_AUTO_SELECT"] = "ALTERNATE_AUDIO_AUTO_SELECT";
    CmfcAudioTrackType["ALTERNATE_AUDIO_AUTO_SELECT_DEFAULT"] = "ALTERNATE_AUDIO_AUTO_SELECT_DEFAULT";
    CmfcAudioTrackType["ALTERNATE_AUDIO_NOT_AUTO_SELECT"] = "ALTERNATE_AUDIO_NOT_AUTO_SELECT";
})(CmfcAudioTrackType || (CmfcAudioTrackType = {}));
export var CmfcDescriptiveVideoServiceFlag;
(function (CmfcDescriptiveVideoServiceFlag) {
    CmfcDescriptiveVideoServiceFlag["DONT_FLAG"] = "DONT_FLAG";
    CmfcDescriptiveVideoServiceFlag["FLAG"] = "FLAG";
})(CmfcDescriptiveVideoServiceFlag || (CmfcDescriptiveVideoServiceFlag = {}));
export var CmfcIFrameOnlyManifest;
(function (CmfcIFrameOnlyManifest) {
    CmfcIFrameOnlyManifest["EXCLUDE"] = "EXCLUDE";
    CmfcIFrameOnlyManifest["INCLUDE"] = "INCLUDE";
})(CmfcIFrameOnlyManifest || (CmfcIFrameOnlyManifest = {}));
export var CmfcScte35Esam;
(function (CmfcScte35Esam) {
    CmfcScte35Esam["INSERT"] = "INSERT";
    CmfcScte35Esam["NONE"] = "NONE";
})(CmfcScte35Esam || (CmfcScte35Esam = {}));
export var CmfcScte35Source;
(function (CmfcScte35Source) {
    CmfcScte35Source["NONE"] = "NONE";
    CmfcScte35Source["PASSTHROUGH"] = "PASSTHROUGH";
})(CmfcScte35Source || (CmfcScte35Source = {}));
export var CmfcSettings;
(function (CmfcSettings) {
    /**
     * @internal
     */
    CmfcSettings.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(CmfcSettings || (CmfcSettings = {}));
export var ContainerType;
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
})(ContainerType || (ContainerType = {}));
export var F4vMoovPlacement;
(function (F4vMoovPlacement) {
    F4vMoovPlacement["NORMAL"] = "NORMAL";
    F4vMoovPlacement["PROGRESSIVE_DOWNLOAD"] = "PROGRESSIVE_DOWNLOAD";
})(F4vMoovPlacement || (F4vMoovPlacement = {}));
export var F4vSettings;
(function (F4vSettings) {
    /**
     * @internal
     */
    F4vSettings.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(F4vSettings || (F4vSettings = {}));
export var M2tsAudioBufferModel;
(function (M2tsAudioBufferModel) {
    M2tsAudioBufferModel["ATSC"] = "ATSC";
    M2tsAudioBufferModel["DVB"] = "DVB";
})(M2tsAudioBufferModel || (M2tsAudioBufferModel = {}));
export var M2tsAudioDuration;
(function (M2tsAudioDuration) {
    M2tsAudioDuration["DEFAULT_CODEC_DURATION"] = "DEFAULT_CODEC_DURATION";
    M2tsAudioDuration["MATCH_VIDEO_DURATION"] = "MATCH_VIDEO_DURATION";
})(M2tsAudioDuration || (M2tsAudioDuration = {}));
export var M2tsBufferModel;
(function (M2tsBufferModel) {
    M2tsBufferModel["MULTIPLEX"] = "MULTIPLEX";
    M2tsBufferModel["NONE"] = "NONE";
})(M2tsBufferModel || (M2tsBufferModel = {}));
export var DvbNitSettings;
(function (DvbNitSettings) {
    /**
     * @internal
     */
    DvbNitSettings.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(DvbNitSettings || (DvbNitSettings = {}));
export var OutputSdt;
(function (OutputSdt) {
    OutputSdt["SDT_FOLLOW"] = "SDT_FOLLOW";
    OutputSdt["SDT_FOLLOW_IF_PRESENT"] = "SDT_FOLLOW_IF_PRESENT";
    OutputSdt["SDT_MANUAL"] = "SDT_MANUAL";
    OutputSdt["SDT_NONE"] = "SDT_NONE";
})(OutputSdt || (OutputSdt = {}));
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
export var M2tsEbpAudioInterval;
(function (M2tsEbpAudioInterval) {
    M2tsEbpAudioInterval["VIDEO_AND_FIXED_INTERVALS"] = "VIDEO_AND_FIXED_INTERVALS";
    M2tsEbpAudioInterval["VIDEO_INTERVAL"] = "VIDEO_INTERVAL";
})(M2tsEbpAudioInterval || (M2tsEbpAudioInterval = {}));
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
export var M2tsForceTsVideoEbpOrder;
(function (M2tsForceTsVideoEbpOrder) {
    M2tsForceTsVideoEbpOrder["DEFAULT"] = "DEFAULT";
    M2tsForceTsVideoEbpOrder["FORCE"] = "FORCE";
})(M2tsForceTsVideoEbpOrder || (M2tsForceTsVideoEbpOrder = {}));
export var M2tsNielsenId3;
(function (M2tsNielsenId3) {
    M2tsNielsenId3["INSERT"] = "INSERT";
    M2tsNielsenId3["NONE"] = "NONE";
})(M2tsNielsenId3 || (M2tsNielsenId3 = {}));
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
export var M2tsScte35Esam;
(function (M2tsScte35Esam) {
    /**
     * @internal
     */
    M2tsScte35Esam.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(M2tsScte35Esam || (M2tsScte35Esam = {}));
export var M2tsScte35Source;
(function (M2tsScte35Source) {
    M2tsScte35Source["NONE"] = "NONE";
    M2tsScte35Source["PASSTHROUGH"] = "PASSTHROUGH";
})(M2tsScte35Source || (M2tsScte35Source = {}));
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
export var M2tsSettings;
(function (M2tsSettings) {
    /**
     * @internal
     */
    M2tsSettings.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(M2tsSettings || (M2tsSettings = {}));
export var M3u8AudioDuration;
(function (M3u8AudioDuration) {
    M3u8AudioDuration["DEFAULT_CODEC_DURATION"] = "DEFAULT_CODEC_DURATION";
    M3u8AudioDuration["MATCH_VIDEO_DURATION"] = "MATCH_VIDEO_DURATION";
})(M3u8AudioDuration || (M3u8AudioDuration = {}));
export var M3u8NielsenId3;
(function (M3u8NielsenId3) {
    M3u8NielsenId3["INSERT"] = "INSERT";
    M3u8NielsenId3["NONE"] = "NONE";
})(M3u8NielsenId3 || (M3u8NielsenId3 = {}));
export var M3u8PcrControl;
(function (M3u8PcrControl) {
    M3u8PcrControl["CONFIGURED_PCR_PERIOD"] = "CONFIGURED_PCR_PERIOD";
    M3u8PcrControl["PCR_EVERY_PES_PACKET"] = "PCR_EVERY_PES_PACKET";
})(M3u8PcrControl || (M3u8PcrControl = {}));
export var M3u8Scte35Source;
(function (M3u8Scte35Source) {
    M3u8Scte35Source["NONE"] = "NONE";
    M3u8Scte35Source["PASSTHROUGH"] = "PASSTHROUGH";
})(M3u8Scte35Source || (M3u8Scte35Source = {}));
export var TimedMetadata;
(function (TimedMetadata) {
    TimedMetadata["NONE"] = "NONE";
    TimedMetadata["PASSTHROUGH"] = "PASSTHROUGH";
})(TimedMetadata || (TimedMetadata = {}));
export var M3u8Settings;
(function (M3u8Settings) {
    /**
     * @internal
     */
    M3u8Settings.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(M3u8Settings || (M3u8Settings = {}));
export var MovClapAtom;
(function (MovClapAtom) {
    MovClapAtom["EXCLUDE"] = "EXCLUDE";
    MovClapAtom["INCLUDE"] = "INCLUDE";
})(MovClapAtom || (MovClapAtom = {}));
export var MovCslgAtom;
(function (MovCslgAtom) {
    MovCslgAtom["EXCLUDE"] = "EXCLUDE";
    MovCslgAtom["INCLUDE"] = "INCLUDE";
})(MovCslgAtom || (MovCslgAtom = {}));
export var MovMpeg2FourCCControl;
(function (MovMpeg2FourCCControl) {
    MovMpeg2FourCCControl["MPEG"] = "MPEG";
    MovMpeg2FourCCControl["XDCAM"] = "XDCAM";
})(MovMpeg2FourCCControl || (MovMpeg2FourCCControl = {}));
export var MovPaddingControl;
(function (MovPaddingControl) {
    MovPaddingControl["NONE"] = "NONE";
    MovPaddingControl["OMNEON"] = "OMNEON";
})(MovPaddingControl || (MovPaddingControl = {}));
export var MovReference;
(function (MovReference) {
    MovReference["EXTERNAL"] = "EXTERNAL";
    MovReference["SELF_CONTAINED"] = "SELF_CONTAINED";
})(MovReference || (MovReference = {}));
export var MovSettings;
(function (MovSettings) {
    /**
     * @internal
     */
    MovSettings.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(MovSettings || (MovSettings = {}));
export var Mp4CslgAtom;
(function (Mp4CslgAtom) {
    Mp4CslgAtom["EXCLUDE"] = "EXCLUDE";
    Mp4CslgAtom["INCLUDE"] = "INCLUDE";
})(Mp4CslgAtom || (Mp4CslgAtom = {}));
export var Mp4FreeSpaceBox;
(function (Mp4FreeSpaceBox) {
    Mp4FreeSpaceBox["EXCLUDE"] = "EXCLUDE";
    Mp4FreeSpaceBox["INCLUDE"] = "INCLUDE";
})(Mp4FreeSpaceBox || (Mp4FreeSpaceBox = {}));
export var Mp4MoovPlacement;
(function (Mp4MoovPlacement) {
    Mp4MoovPlacement["NORMAL"] = "NORMAL";
    Mp4MoovPlacement["PROGRESSIVE_DOWNLOAD"] = "PROGRESSIVE_DOWNLOAD";
})(Mp4MoovPlacement || (Mp4MoovPlacement = {}));
export var Mp4Settings;
(function (Mp4Settings) {
    /**
     * @internal
     */
    Mp4Settings.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(Mp4Settings || (Mp4Settings = {}));
export var MpdAccessibilityCaptionHints;
(function (MpdAccessibilityCaptionHints) {
    MpdAccessibilityCaptionHints["EXCLUDE"] = "EXCLUDE";
    MpdAccessibilityCaptionHints["INCLUDE"] = "INCLUDE";
})(MpdAccessibilityCaptionHints || (MpdAccessibilityCaptionHints = {}));
export var MpdAudioDuration;
(function (MpdAudioDuration) {
    MpdAudioDuration["DEFAULT_CODEC_DURATION"] = "DEFAULT_CODEC_DURATION";
    MpdAudioDuration["MATCH_VIDEO_DURATION"] = "MATCH_VIDEO_DURATION";
})(MpdAudioDuration || (MpdAudioDuration = {}));
export var MpdCaptionContainerType;
(function (MpdCaptionContainerType) {
    MpdCaptionContainerType["FRAGMENTED_MP4"] = "FRAGMENTED_MP4";
    MpdCaptionContainerType["RAW"] = "RAW";
})(MpdCaptionContainerType || (MpdCaptionContainerType = {}));
export var MpdScte35Esam;
(function (MpdScte35Esam) {
    MpdScte35Esam["INSERT"] = "INSERT";
    MpdScte35Esam["NONE"] = "NONE";
})(MpdScte35Esam || (MpdScte35Esam = {}));
export var MpdScte35Source;
(function (MpdScte35Source) {
    MpdScte35Source["NONE"] = "NONE";
    MpdScte35Source["PASSTHROUGH"] = "PASSTHROUGH";
})(MpdScte35Source || (MpdScte35Source = {}));
export var MpdSettings;
(function (MpdSettings) {
    /**
     * @internal
     */
    MpdSettings.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(MpdSettings || (MpdSettings = {}));
export var MxfAfdSignaling;
(function (MxfAfdSignaling) {
    MxfAfdSignaling["COPY_FROM_VIDEO"] = "COPY_FROM_VIDEO";
    MxfAfdSignaling["NO_COPY"] = "NO_COPY";
})(MxfAfdSignaling || (MxfAfdSignaling = {}));
export var MxfProfile;
(function (MxfProfile) {
    MxfProfile["D_10"] = "D_10";
    MxfProfile["OP1A"] = "OP1A";
    MxfProfile["XDCAM"] = "XDCAM";
})(MxfProfile || (MxfProfile = {}));
export var MxfSettings;
(function (MxfSettings) {
    /**
     * @internal
     */
    MxfSettings.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(MxfSettings || (MxfSettings = {}));
export var ContainerSettings;
(function (ContainerSettings) {
    /**
     * @internal
     */
    ContainerSettings.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(ContainerSettings || (ContainerSettings = {}));
export var HlsAudioOnlyContainer;
(function (HlsAudioOnlyContainer) {
    HlsAudioOnlyContainer["AUTOMATIC"] = "AUTOMATIC";
    HlsAudioOnlyContainer["M2TS"] = "M2TS";
})(HlsAudioOnlyContainer || (HlsAudioOnlyContainer = {}));
export var HlsAudioTrackType;
(function (HlsAudioTrackType) {
    HlsAudioTrackType["ALTERNATE_AUDIO_AUTO_SELECT"] = "ALTERNATE_AUDIO_AUTO_SELECT";
    HlsAudioTrackType["ALTERNATE_AUDIO_AUTO_SELECT_DEFAULT"] = "ALTERNATE_AUDIO_AUTO_SELECT_DEFAULT";
    HlsAudioTrackType["ALTERNATE_AUDIO_NOT_AUTO_SELECT"] = "ALTERNATE_AUDIO_NOT_AUTO_SELECT";
    HlsAudioTrackType["AUDIO_ONLY_VARIANT_STREAM"] = "AUDIO_ONLY_VARIANT_STREAM";
})(HlsAudioTrackType || (HlsAudioTrackType = {}));
export var HlsDescriptiveVideoServiceFlag;
(function (HlsDescriptiveVideoServiceFlag) {
    HlsDescriptiveVideoServiceFlag["DONT_FLAG"] = "DONT_FLAG";
    HlsDescriptiveVideoServiceFlag["FLAG"] = "FLAG";
})(HlsDescriptiveVideoServiceFlag || (HlsDescriptiveVideoServiceFlag = {}));
export var HlsIFrameOnlyManifest;
(function (HlsIFrameOnlyManifest) {
    HlsIFrameOnlyManifest["EXCLUDE"] = "EXCLUDE";
    HlsIFrameOnlyManifest["INCLUDE"] = "INCLUDE";
})(HlsIFrameOnlyManifest || (HlsIFrameOnlyManifest = {}));
export var HlsSettings;
(function (HlsSettings) {
    /**
     * @internal
     */
    HlsSettings.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(HlsSettings || (HlsSettings = {}));
export var OutputSettings;
(function (OutputSettings) {
    /**
     * @internal
     */
    OutputSettings.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(OutputSettings || (OutputSettings = {}));
export var AfdSignaling;
(function (AfdSignaling) {
    AfdSignaling["AUTO"] = "AUTO";
    AfdSignaling["FIXED"] = "FIXED";
    AfdSignaling["NONE"] = "NONE";
})(AfdSignaling || (AfdSignaling = {}));
export var AntiAlias;
(function (AntiAlias) {
    AntiAlias["DISABLED"] = "DISABLED";
    AntiAlias["ENABLED"] = "ENABLED";
})(AntiAlias || (AntiAlias = {}));
export var Av1AdaptiveQuantization;
(function (Av1AdaptiveQuantization) {
    Av1AdaptiveQuantization["HIGH"] = "HIGH";
    Av1AdaptiveQuantization["HIGHER"] = "HIGHER";
    Av1AdaptiveQuantization["LOW"] = "LOW";
    Av1AdaptiveQuantization["MAX"] = "MAX";
    Av1AdaptiveQuantization["MEDIUM"] = "MEDIUM";
    Av1AdaptiveQuantization["OFF"] = "OFF";
})(Av1AdaptiveQuantization || (Av1AdaptiveQuantization = {}));
export var Av1FramerateControl;
(function (Av1FramerateControl) {
    Av1FramerateControl["INITIALIZE_FROM_SOURCE"] = "INITIALIZE_FROM_SOURCE";
    Av1FramerateControl["SPECIFIED"] = "SPECIFIED";
})(Av1FramerateControl || (Av1FramerateControl = {}));
export var Av1FramerateConversionAlgorithm;
(function (Av1FramerateConversionAlgorithm) {
    Av1FramerateConversionAlgorithm["DUPLICATE_DROP"] = "DUPLICATE_DROP";
    Av1FramerateConversionAlgorithm["FRAMEFORMER"] = "FRAMEFORMER";
    Av1FramerateConversionAlgorithm["INTERPOLATE"] = "INTERPOLATE";
})(Av1FramerateConversionAlgorithm || (Av1FramerateConversionAlgorithm = {}));
export var Av1QvbrSettings;
(function (Av1QvbrSettings) {
    /**
     * @internal
     */
    Av1QvbrSettings.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(Av1QvbrSettings || (Av1QvbrSettings = {}));
export var Av1RateControlMode;
(function (Av1RateControlMode) {
    Av1RateControlMode["QVBR"] = "QVBR";
})(Av1RateControlMode || (Av1RateControlMode = {}));
export var Av1SpatialAdaptiveQuantization;
(function (Av1SpatialAdaptiveQuantization) {
    Av1SpatialAdaptiveQuantization["DISABLED"] = "DISABLED";
    Av1SpatialAdaptiveQuantization["ENABLED"] = "ENABLED";
})(Av1SpatialAdaptiveQuantization || (Av1SpatialAdaptiveQuantization = {}));
//# sourceMappingURL=models_0.js.map