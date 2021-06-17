import { __assign } from "tslib";
export var Av1Settings;
(function (Av1Settings) {
    /**
     * @internal
     */
    Av1Settings.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(Av1Settings || (Av1Settings = {}));
export var AvcIntraClass;
(function (AvcIntraClass) {
    AvcIntraClass["CLASS_100"] = "CLASS_100";
    AvcIntraClass["CLASS_200"] = "CLASS_200";
    AvcIntraClass["CLASS_4K_2K"] = "CLASS_4K_2K";
    AvcIntraClass["CLASS_50"] = "CLASS_50";
})(AvcIntraClass || (AvcIntraClass = {}));
export var AvcIntraUhdQualityTuningLevel;
(function (AvcIntraUhdQualityTuningLevel) {
    AvcIntraUhdQualityTuningLevel["MULTI_PASS"] = "MULTI_PASS";
    AvcIntraUhdQualityTuningLevel["SINGLE_PASS"] = "SINGLE_PASS";
})(AvcIntraUhdQualityTuningLevel || (AvcIntraUhdQualityTuningLevel = {}));
export var AvcIntraUhdSettings;
(function (AvcIntraUhdSettings) {
    /**
     * @internal
     */
    AvcIntraUhdSettings.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(AvcIntraUhdSettings || (AvcIntraUhdSettings = {}));
export var AvcIntraFramerateControl;
(function (AvcIntraFramerateControl) {
    AvcIntraFramerateControl["INITIALIZE_FROM_SOURCE"] = "INITIALIZE_FROM_SOURCE";
    AvcIntraFramerateControl["SPECIFIED"] = "SPECIFIED";
})(AvcIntraFramerateControl || (AvcIntraFramerateControl = {}));
export var AvcIntraFramerateConversionAlgorithm;
(function (AvcIntraFramerateConversionAlgorithm) {
    AvcIntraFramerateConversionAlgorithm["DUPLICATE_DROP"] = "DUPLICATE_DROP";
    AvcIntraFramerateConversionAlgorithm["FRAMEFORMER"] = "FRAMEFORMER";
    AvcIntraFramerateConversionAlgorithm["INTERPOLATE"] = "INTERPOLATE";
})(AvcIntraFramerateConversionAlgorithm || (AvcIntraFramerateConversionAlgorithm = {}));
export var AvcIntraInterlaceMode;
(function (AvcIntraInterlaceMode) {
    AvcIntraInterlaceMode["BOTTOM_FIELD"] = "BOTTOM_FIELD";
    AvcIntraInterlaceMode["FOLLOW_BOTTOM_FIELD"] = "FOLLOW_BOTTOM_FIELD";
    AvcIntraInterlaceMode["FOLLOW_TOP_FIELD"] = "FOLLOW_TOP_FIELD";
    AvcIntraInterlaceMode["PROGRESSIVE"] = "PROGRESSIVE";
    AvcIntraInterlaceMode["TOP_FIELD"] = "TOP_FIELD";
})(AvcIntraInterlaceMode || (AvcIntraInterlaceMode = {}));
export var AvcIntraScanTypeConversionMode;
(function (AvcIntraScanTypeConversionMode) {
    AvcIntraScanTypeConversionMode["INTERLACED"] = "INTERLACED";
    AvcIntraScanTypeConversionMode["INTERLACED_OPTIMIZE"] = "INTERLACED_OPTIMIZE";
})(AvcIntraScanTypeConversionMode || (AvcIntraScanTypeConversionMode = {}));
export var AvcIntraSlowPal;
(function (AvcIntraSlowPal) {
    AvcIntraSlowPal["DISABLED"] = "DISABLED";
    AvcIntraSlowPal["ENABLED"] = "ENABLED";
})(AvcIntraSlowPal || (AvcIntraSlowPal = {}));
export var AvcIntraTelecine;
(function (AvcIntraTelecine) {
    AvcIntraTelecine["HARD"] = "HARD";
    AvcIntraTelecine["NONE"] = "NONE";
})(AvcIntraTelecine || (AvcIntraTelecine = {}));
export var AvcIntraSettings;
(function (AvcIntraSettings) {
    /**
     * @internal
     */
    AvcIntraSettings.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(AvcIntraSettings || (AvcIntraSettings = {}));
export var VideoCodec;
(function (VideoCodec) {
    VideoCodec["AV1"] = "AV1";
    VideoCodec["AVC_INTRA"] = "AVC_INTRA";
    VideoCodec["FRAME_CAPTURE"] = "FRAME_CAPTURE";
    VideoCodec["H_264"] = "H_264";
    VideoCodec["H_265"] = "H_265";
    VideoCodec["MPEG2"] = "MPEG2";
    VideoCodec["PRORES"] = "PRORES";
    VideoCodec["VC3"] = "VC3";
    VideoCodec["VP8"] = "VP8";
    VideoCodec["VP9"] = "VP9";
})(VideoCodec || (VideoCodec = {}));
export var FrameCaptureSettings;
(function (FrameCaptureSettings) {
    /**
     * @internal
     */
    FrameCaptureSettings.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(FrameCaptureSettings || (FrameCaptureSettings = {}));
export var H264AdaptiveQuantization;
(function (H264AdaptiveQuantization) {
    H264AdaptiveQuantization["AUTO"] = "AUTO";
    H264AdaptiveQuantization["HIGH"] = "HIGH";
    H264AdaptiveQuantization["HIGHER"] = "HIGHER";
    H264AdaptiveQuantization["LOW"] = "LOW";
    H264AdaptiveQuantization["MAX"] = "MAX";
    H264AdaptiveQuantization["MEDIUM"] = "MEDIUM";
    H264AdaptiveQuantization["OFF"] = "OFF";
})(H264AdaptiveQuantization || (H264AdaptiveQuantization = {}));
export var H264CodecLevel;
(function (H264CodecLevel) {
    H264CodecLevel["AUTO"] = "AUTO";
    H264CodecLevel["LEVEL_1"] = "LEVEL_1";
    H264CodecLevel["LEVEL_1_1"] = "LEVEL_1_1";
    H264CodecLevel["LEVEL_1_2"] = "LEVEL_1_2";
    H264CodecLevel["LEVEL_1_3"] = "LEVEL_1_3";
    H264CodecLevel["LEVEL_2"] = "LEVEL_2";
    H264CodecLevel["LEVEL_2_1"] = "LEVEL_2_1";
    H264CodecLevel["LEVEL_2_2"] = "LEVEL_2_2";
    H264CodecLevel["LEVEL_3"] = "LEVEL_3";
    H264CodecLevel["LEVEL_3_1"] = "LEVEL_3_1";
    H264CodecLevel["LEVEL_3_2"] = "LEVEL_3_2";
    H264CodecLevel["LEVEL_4"] = "LEVEL_4";
    H264CodecLevel["LEVEL_4_1"] = "LEVEL_4_1";
    H264CodecLevel["LEVEL_4_2"] = "LEVEL_4_2";
    H264CodecLevel["LEVEL_5"] = "LEVEL_5";
    H264CodecLevel["LEVEL_5_1"] = "LEVEL_5_1";
    H264CodecLevel["LEVEL_5_2"] = "LEVEL_5_2";
})(H264CodecLevel || (H264CodecLevel = {}));
export var H264CodecProfile;
(function (H264CodecProfile) {
    H264CodecProfile["BASELINE"] = "BASELINE";
    H264CodecProfile["HIGH"] = "HIGH";
    H264CodecProfile["HIGH_10BIT"] = "HIGH_10BIT";
    H264CodecProfile["HIGH_422"] = "HIGH_422";
    H264CodecProfile["HIGH_422_10BIT"] = "HIGH_422_10BIT";
    H264CodecProfile["MAIN"] = "MAIN";
})(H264CodecProfile || (H264CodecProfile = {}));
export var H264DynamicSubGop;
(function (H264DynamicSubGop) {
    H264DynamicSubGop["ADAPTIVE"] = "ADAPTIVE";
    H264DynamicSubGop["STATIC"] = "STATIC";
})(H264DynamicSubGop || (H264DynamicSubGop = {}));
export var H264EntropyEncoding;
(function (H264EntropyEncoding) {
    H264EntropyEncoding["CABAC"] = "CABAC";
    H264EntropyEncoding["CAVLC"] = "CAVLC";
})(H264EntropyEncoding || (H264EntropyEncoding = {}));
export var H264FieldEncoding;
(function (H264FieldEncoding) {
    H264FieldEncoding["FORCE_FIELD"] = "FORCE_FIELD";
    H264FieldEncoding["PAFF"] = "PAFF";
})(H264FieldEncoding || (H264FieldEncoding = {}));
export var H264FlickerAdaptiveQuantization;
(function (H264FlickerAdaptiveQuantization) {
    H264FlickerAdaptiveQuantization["DISABLED"] = "DISABLED";
    H264FlickerAdaptiveQuantization["ENABLED"] = "ENABLED";
})(H264FlickerAdaptiveQuantization || (H264FlickerAdaptiveQuantization = {}));
export var H264FramerateControl;
(function (H264FramerateControl) {
    H264FramerateControl["INITIALIZE_FROM_SOURCE"] = "INITIALIZE_FROM_SOURCE";
    H264FramerateControl["SPECIFIED"] = "SPECIFIED";
})(H264FramerateControl || (H264FramerateControl = {}));
export var H264FramerateConversionAlgorithm;
(function (H264FramerateConversionAlgorithm) {
    H264FramerateConversionAlgorithm["DUPLICATE_DROP"] = "DUPLICATE_DROP";
    H264FramerateConversionAlgorithm["FRAMEFORMER"] = "FRAMEFORMER";
    H264FramerateConversionAlgorithm["INTERPOLATE"] = "INTERPOLATE";
})(H264FramerateConversionAlgorithm || (H264FramerateConversionAlgorithm = {}));
export var H264GopBReference;
(function (H264GopBReference) {
    H264GopBReference["DISABLED"] = "DISABLED";
    H264GopBReference["ENABLED"] = "ENABLED";
})(H264GopBReference || (H264GopBReference = {}));
export var H264GopSizeUnits;
(function (H264GopSizeUnits) {
    H264GopSizeUnits["FRAMES"] = "FRAMES";
    H264GopSizeUnits["SECONDS"] = "SECONDS";
})(H264GopSizeUnits || (H264GopSizeUnits = {}));
export var H264InterlaceMode;
(function (H264InterlaceMode) {
    H264InterlaceMode["BOTTOM_FIELD"] = "BOTTOM_FIELD";
    H264InterlaceMode["FOLLOW_BOTTOM_FIELD"] = "FOLLOW_BOTTOM_FIELD";
    H264InterlaceMode["FOLLOW_TOP_FIELD"] = "FOLLOW_TOP_FIELD";
    H264InterlaceMode["PROGRESSIVE"] = "PROGRESSIVE";
    H264InterlaceMode["TOP_FIELD"] = "TOP_FIELD";
})(H264InterlaceMode || (H264InterlaceMode = {}));
export var H264ParControl;
(function (H264ParControl) {
    H264ParControl["INITIALIZE_FROM_SOURCE"] = "INITIALIZE_FROM_SOURCE";
    H264ParControl["SPECIFIED"] = "SPECIFIED";
})(H264ParControl || (H264ParControl = {}));
export var H264QualityTuningLevel;
(function (H264QualityTuningLevel) {
    H264QualityTuningLevel["MULTI_PASS_HQ"] = "MULTI_PASS_HQ";
    H264QualityTuningLevel["SINGLE_PASS"] = "SINGLE_PASS";
    H264QualityTuningLevel["SINGLE_PASS_HQ"] = "SINGLE_PASS_HQ";
})(H264QualityTuningLevel || (H264QualityTuningLevel = {}));
export var H264QvbrSettings;
(function (H264QvbrSettings) {
    /**
     * @internal
     */
    H264QvbrSettings.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(H264QvbrSettings || (H264QvbrSettings = {}));
export var H264RateControlMode;
(function (H264RateControlMode) {
    H264RateControlMode["CBR"] = "CBR";
    H264RateControlMode["QVBR"] = "QVBR";
    H264RateControlMode["VBR"] = "VBR";
})(H264RateControlMode || (H264RateControlMode = {}));
export var H264RepeatPps;
(function (H264RepeatPps) {
    H264RepeatPps["DISABLED"] = "DISABLED";
    H264RepeatPps["ENABLED"] = "ENABLED";
})(H264RepeatPps || (H264RepeatPps = {}));
export var H264ScanTypeConversionMode;
(function (H264ScanTypeConversionMode) {
    H264ScanTypeConversionMode["INTERLACED"] = "INTERLACED";
    H264ScanTypeConversionMode["INTERLACED_OPTIMIZE"] = "INTERLACED_OPTIMIZE";
})(H264ScanTypeConversionMode || (H264ScanTypeConversionMode = {}));
export var H264SceneChangeDetect;
(function (H264SceneChangeDetect) {
    H264SceneChangeDetect["DISABLED"] = "DISABLED";
    H264SceneChangeDetect["ENABLED"] = "ENABLED";
    H264SceneChangeDetect["TRANSITION_DETECTION"] = "TRANSITION_DETECTION";
})(H264SceneChangeDetect || (H264SceneChangeDetect = {}));
export var H264SlowPal;
(function (H264SlowPal) {
    H264SlowPal["DISABLED"] = "DISABLED";
    H264SlowPal["ENABLED"] = "ENABLED";
})(H264SlowPal || (H264SlowPal = {}));
export var H264SpatialAdaptiveQuantization;
(function (H264SpatialAdaptiveQuantization) {
    H264SpatialAdaptiveQuantization["DISABLED"] = "DISABLED";
    H264SpatialAdaptiveQuantization["ENABLED"] = "ENABLED";
})(H264SpatialAdaptiveQuantization || (H264SpatialAdaptiveQuantization = {}));
export var H264Syntax;
(function (H264Syntax) {
    H264Syntax["DEFAULT"] = "DEFAULT";
    H264Syntax["RP2027"] = "RP2027";
})(H264Syntax || (H264Syntax = {}));
export var H264Telecine;
(function (H264Telecine) {
    H264Telecine["HARD"] = "HARD";
    H264Telecine["NONE"] = "NONE";
    H264Telecine["SOFT"] = "SOFT";
})(H264Telecine || (H264Telecine = {}));
export var H264TemporalAdaptiveQuantization;
(function (H264TemporalAdaptiveQuantization) {
    H264TemporalAdaptiveQuantization["DISABLED"] = "DISABLED";
    H264TemporalAdaptiveQuantization["ENABLED"] = "ENABLED";
})(H264TemporalAdaptiveQuantization || (H264TemporalAdaptiveQuantization = {}));
export var H264UnregisteredSeiTimecode;
(function (H264UnregisteredSeiTimecode) {
    H264UnregisteredSeiTimecode["DISABLED"] = "DISABLED";
    H264UnregisteredSeiTimecode["ENABLED"] = "ENABLED";
})(H264UnregisteredSeiTimecode || (H264UnregisteredSeiTimecode = {}));
export var H264Settings;
(function (H264Settings) {
    /**
     * @internal
     */
    H264Settings.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(H264Settings || (H264Settings = {}));
export var H265AdaptiveQuantization;
(function (H265AdaptiveQuantization) {
    H265AdaptiveQuantization["HIGH"] = "HIGH";
    H265AdaptiveQuantization["HIGHER"] = "HIGHER";
    H265AdaptiveQuantization["LOW"] = "LOW";
    H265AdaptiveQuantization["MAX"] = "MAX";
    H265AdaptiveQuantization["MEDIUM"] = "MEDIUM";
    H265AdaptiveQuantization["OFF"] = "OFF";
})(H265AdaptiveQuantization || (H265AdaptiveQuantization = {}));
export var H265AlternateTransferFunctionSei;
(function (H265AlternateTransferFunctionSei) {
    H265AlternateTransferFunctionSei["DISABLED"] = "DISABLED";
    H265AlternateTransferFunctionSei["ENABLED"] = "ENABLED";
})(H265AlternateTransferFunctionSei || (H265AlternateTransferFunctionSei = {}));
export var H265CodecLevel;
(function (H265CodecLevel) {
    H265CodecLevel["AUTO"] = "AUTO";
    H265CodecLevel["LEVEL_1"] = "LEVEL_1";
    H265CodecLevel["LEVEL_2"] = "LEVEL_2";
    H265CodecLevel["LEVEL_2_1"] = "LEVEL_2_1";
    H265CodecLevel["LEVEL_3"] = "LEVEL_3";
    H265CodecLevel["LEVEL_3_1"] = "LEVEL_3_1";
    H265CodecLevel["LEVEL_4"] = "LEVEL_4";
    H265CodecLevel["LEVEL_4_1"] = "LEVEL_4_1";
    H265CodecLevel["LEVEL_5"] = "LEVEL_5";
    H265CodecLevel["LEVEL_5_1"] = "LEVEL_5_1";
    H265CodecLevel["LEVEL_5_2"] = "LEVEL_5_2";
    H265CodecLevel["LEVEL_6"] = "LEVEL_6";
    H265CodecLevel["LEVEL_6_1"] = "LEVEL_6_1";
    H265CodecLevel["LEVEL_6_2"] = "LEVEL_6_2";
})(H265CodecLevel || (H265CodecLevel = {}));
export var H265CodecProfile;
(function (H265CodecProfile) {
    H265CodecProfile["MAIN10_HIGH"] = "MAIN10_HIGH";
    H265CodecProfile["MAIN10_MAIN"] = "MAIN10_MAIN";
    H265CodecProfile["MAIN_422_10BIT_HIGH"] = "MAIN_422_10BIT_HIGH";
    H265CodecProfile["MAIN_422_10BIT_MAIN"] = "MAIN_422_10BIT_MAIN";
    H265CodecProfile["MAIN_422_8BIT_HIGH"] = "MAIN_422_8BIT_HIGH";
    H265CodecProfile["MAIN_422_8BIT_MAIN"] = "MAIN_422_8BIT_MAIN";
    H265CodecProfile["MAIN_HIGH"] = "MAIN_HIGH";
    H265CodecProfile["MAIN_MAIN"] = "MAIN_MAIN";
})(H265CodecProfile || (H265CodecProfile = {}));
export var H265DynamicSubGop;
(function (H265DynamicSubGop) {
    H265DynamicSubGop["ADAPTIVE"] = "ADAPTIVE";
    H265DynamicSubGop["STATIC"] = "STATIC";
})(H265DynamicSubGop || (H265DynamicSubGop = {}));
export var H265FlickerAdaptiveQuantization;
(function (H265FlickerAdaptiveQuantization) {
    H265FlickerAdaptiveQuantization["DISABLED"] = "DISABLED";
    H265FlickerAdaptiveQuantization["ENABLED"] = "ENABLED";
})(H265FlickerAdaptiveQuantization || (H265FlickerAdaptiveQuantization = {}));
export var H265FramerateControl;
(function (H265FramerateControl) {
    H265FramerateControl["INITIALIZE_FROM_SOURCE"] = "INITIALIZE_FROM_SOURCE";
    H265FramerateControl["SPECIFIED"] = "SPECIFIED";
})(H265FramerateControl || (H265FramerateControl = {}));
export var H265FramerateConversionAlgorithm;
(function (H265FramerateConversionAlgorithm) {
    H265FramerateConversionAlgorithm["DUPLICATE_DROP"] = "DUPLICATE_DROP";
    H265FramerateConversionAlgorithm["FRAMEFORMER"] = "FRAMEFORMER";
    H265FramerateConversionAlgorithm["INTERPOLATE"] = "INTERPOLATE";
})(H265FramerateConversionAlgorithm || (H265FramerateConversionAlgorithm = {}));
export var H265GopBReference;
(function (H265GopBReference) {
    H265GopBReference["DISABLED"] = "DISABLED";
    H265GopBReference["ENABLED"] = "ENABLED";
})(H265GopBReference || (H265GopBReference = {}));
export var H265GopSizeUnits;
(function (H265GopSizeUnits) {
    H265GopSizeUnits["FRAMES"] = "FRAMES";
    H265GopSizeUnits["SECONDS"] = "SECONDS";
})(H265GopSizeUnits || (H265GopSizeUnits = {}));
export var H265InterlaceMode;
(function (H265InterlaceMode) {
    H265InterlaceMode["BOTTOM_FIELD"] = "BOTTOM_FIELD";
    H265InterlaceMode["FOLLOW_BOTTOM_FIELD"] = "FOLLOW_BOTTOM_FIELD";
    H265InterlaceMode["FOLLOW_TOP_FIELD"] = "FOLLOW_TOP_FIELD";
    H265InterlaceMode["PROGRESSIVE"] = "PROGRESSIVE";
    H265InterlaceMode["TOP_FIELD"] = "TOP_FIELD";
})(H265InterlaceMode || (H265InterlaceMode = {}));
export var H265ParControl;
(function (H265ParControl) {
    H265ParControl["INITIALIZE_FROM_SOURCE"] = "INITIALIZE_FROM_SOURCE";
    H265ParControl["SPECIFIED"] = "SPECIFIED";
})(H265ParControl || (H265ParControl = {}));
export var H265QualityTuningLevel;
(function (H265QualityTuningLevel) {
    H265QualityTuningLevel["MULTI_PASS_HQ"] = "MULTI_PASS_HQ";
    H265QualityTuningLevel["SINGLE_PASS"] = "SINGLE_PASS";
    H265QualityTuningLevel["SINGLE_PASS_HQ"] = "SINGLE_PASS_HQ";
})(H265QualityTuningLevel || (H265QualityTuningLevel = {}));
export var H265QvbrSettings;
(function (H265QvbrSettings) {
    /**
     * @internal
     */
    H265QvbrSettings.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(H265QvbrSettings || (H265QvbrSettings = {}));
export var H265RateControlMode;
(function (H265RateControlMode) {
    H265RateControlMode["CBR"] = "CBR";
    H265RateControlMode["QVBR"] = "QVBR";
    H265RateControlMode["VBR"] = "VBR";
})(H265RateControlMode || (H265RateControlMode = {}));
export var H265SampleAdaptiveOffsetFilterMode;
(function (H265SampleAdaptiveOffsetFilterMode) {
    H265SampleAdaptiveOffsetFilterMode["ADAPTIVE"] = "ADAPTIVE";
    H265SampleAdaptiveOffsetFilterMode["DEFAULT"] = "DEFAULT";
    H265SampleAdaptiveOffsetFilterMode["OFF"] = "OFF";
})(H265SampleAdaptiveOffsetFilterMode || (H265SampleAdaptiveOffsetFilterMode = {}));
export var H265ScanTypeConversionMode;
(function (H265ScanTypeConversionMode) {
    H265ScanTypeConversionMode["INTERLACED"] = "INTERLACED";
    H265ScanTypeConversionMode["INTERLACED_OPTIMIZE"] = "INTERLACED_OPTIMIZE";
})(H265ScanTypeConversionMode || (H265ScanTypeConversionMode = {}));
export var H265SceneChangeDetect;
(function (H265SceneChangeDetect) {
    H265SceneChangeDetect["DISABLED"] = "DISABLED";
    H265SceneChangeDetect["ENABLED"] = "ENABLED";
    H265SceneChangeDetect["TRANSITION_DETECTION"] = "TRANSITION_DETECTION";
})(H265SceneChangeDetect || (H265SceneChangeDetect = {}));
export var H265SlowPal;
(function (H265SlowPal) {
    H265SlowPal["DISABLED"] = "DISABLED";
    H265SlowPal["ENABLED"] = "ENABLED";
})(H265SlowPal || (H265SlowPal = {}));
export var H265SpatialAdaptiveQuantization;
(function (H265SpatialAdaptiveQuantization) {
    H265SpatialAdaptiveQuantization["DISABLED"] = "DISABLED";
    H265SpatialAdaptiveQuantization["ENABLED"] = "ENABLED";
})(H265SpatialAdaptiveQuantization || (H265SpatialAdaptiveQuantization = {}));
export var H265Telecine;
(function (H265Telecine) {
    H265Telecine["HARD"] = "HARD";
    H265Telecine["NONE"] = "NONE";
    H265Telecine["SOFT"] = "SOFT";
})(H265Telecine || (H265Telecine = {}));
export var H265TemporalAdaptiveQuantization;
(function (H265TemporalAdaptiveQuantization) {
    H265TemporalAdaptiveQuantization["DISABLED"] = "DISABLED";
    H265TemporalAdaptiveQuantization["ENABLED"] = "ENABLED";
})(H265TemporalAdaptiveQuantization || (H265TemporalAdaptiveQuantization = {}));
export var H265TemporalIds;
(function (H265TemporalIds) {
    H265TemporalIds["DISABLED"] = "DISABLED";
    H265TemporalIds["ENABLED"] = "ENABLED";
})(H265TemporalIds || (H265TemporalIds = {}));
export var H265Tiles;
(function (H265Tiles) {
    H265Tiles["DISABLED"] = "DISABLED";
    H265Tiles["ENABLED"] = "ENABLED";
})(H265Tiles || (H265Tiles = {}));
export var H265UnregisteredSeiTimecode;
(function (H265UnregisteredSeiTimecode) {
    H265UnregisteredSeiTimecode["DISABLED"] = "DISABLED";
    H265UnregisteredSeiTimecode["ENABLED"] = "ENABLED";
})(H265UnregisteredSeiTimecode || (H265UnregisteredSeiTimecode = {}));
export var H265WriteMp4PackagingType;
(function (H265WriteMp4PackagingType) {
    H265WriteMp4PackagingType["HEV1"] = "HEV1";
    H265WriteMp4PackagingType["HVC1"] = "HVC1";
})(H265WriteMp4PackagingType || (H265WriteMp4PackagingType = {}));
export var H265Settings;
(function (H265Settings) {
    /**
     * @internal
     */
    H265Settings.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(H265Settings || (H265Settings = {}));
export var Mpeg2AdaptiveQuantization;
(function (Mpeg2AdaptiveQuantization) {
    Mpeg2AdaptiveQuantization["HIGH"] = "HIGH";
    Mpeg2AdaptiveQuantization["LOW"] = "LOW";
    Mpeg2AdaptiveQuantization["MEDIUM"] = "MEDIUM";
    Mpeg2AdaptiveQuantization["OFF"] = "OFF";
})(Mpeg2AdaptiveQuantization || (Mpeg2AdaptiveQuantization = {}));
export var Mpeg2CodecLevel;
(function (Mpeg2CodecLevel) {
    Mpeg2CodecLevel["AUTO"] = "AUTO";
    Mpeg2CodecLevel["HIGH"] = "HIGH";
    Mpeg2CodecLevel["HIGH1440"] = "HIGH1440";
    Mpeg2CodecLevel["LOW"] = "LOW";
    Mpeg2CodecLevel["MAIN"] = "MAIN";
})(Mpeg2CodecLevel || (Mpeg2CodecLevel = {}));
export var Mpeg2CodecProfile;
(function (Mpeg2CodecProfile) {
    Mpeg2CodecProfile["MAIN"] = "MAIN";
    Mpeg2CodecProfile["PROFILE_422"] = "PROFILE_422";
})(Mpeg2CodecProfile || (Mpeg2CodecProfile = {}));
export var Mpeg2DynamicSubGop;
(function (Mpeg2DynamicSubGop) {
    Mpeg2DynamicSubGop["ADAPTIVE"] = "ADAPTIVE";
    Mpeg2DynamicSubGop["STATIC"] = "STATIC";
})(Mpeg2DynamicSubGop || (Mpeg2DynamicSubGop = {}));
export var Mpeg2FramerateControl;
(function (Mpeg2FramerateControl) {
    Mpeg2FramerateControl["INITIALIZE_FROM_SOURCE"] = "INITIALIZE_FROM_SOURCE";
    Mpeg2FramerateControl["SPECIFIED"] = "SPECIFIED";
})(Mpeg2FramerateControl || (Mpeg2FramerateControl = {}));
export var Mpeg2FramerateConversionAlgorithm;
(function (Mpeg2FramerateConversionAlgorithm) {
    Mpeg2FramerateConversionAlgorithm["DUPLICATE_DROP"] = "DUPLICATE_DROP";
    Mpeg2FramerateConversionAlgorithm["FRAMEFORMER"] = "FRAMEFORMER";
    Mpeg2FramerateConversionAlgorithm["INTERPOLATE"] = "INTERPOLATE";
})(Mpeg2FramerateConversionAlgorithm || (Mpeg2FramerateConversionAlgorithm = {}));
export var Mpeg2GopSizeUnits;
(function (Mpeg2GopSizeUnits) {
    Mpeg2GopSizeUnits["FRAMES"] = "FRAMES";
    Mpeg2GopSizeUnits["SECONDS"] = "SECONDS";
})(Mpeg2GopSizeUnits || (Mpeg2GopSizeUnits = {}));
export var Mpeg2InterlaceMode;
(function (Mpeg2InterlaceMode) {
    Mpeg2InterlaceMode["BOTTOM_FIELD"] = "BOTTOM_FIELD";
    Mpeg2InterlaceMode["FOLLOW_BOTTOM_FIELD"] = "FOLLOW_BOTTOM_FIELD";
    Mpeg2InterlaceMode["FOLLOW_TOP_FIELD"] = "FOLLOW_TOP_FIELD";
    Mpeg2InterlaceMode["PROGRESSIVE"] = "PROGRESSIVE";
    Mpeg2InterlaceMode["TOP_FIELD"] = "TOP_FIELD";
})(Mpeg2InterlaceMode || (Mpeg2InterlaceMode = {}));
export var Mpeg2IntraDcPrecision;
(function (Mpeg2IntraDcPrecision) {
    Mpeg2IntraDcPrecision["AUTO"] = "AUTO";
    Mpeg2IntraDcPrecision["INTRA_DC_PRECISION_10"] = "INTRA_DC_PRECISION_10";
    Mpeg2IntraDcPrecision["INTRA_DC_PRECISION_11"] = "INTRA_DC_PRECISION_11";
    Mpeg2IntraDcPrecision["INTRA_DC_PRECISION_8"] = "INTRA_DC_PRECISION_8";
    Mpeg2IntraDcPrecision["INTRA_DC_PRECISION_9"] = "INTRA_DC_PRECISION_9";
})(Mpeg2IntraDcPrecision || (Mpeg2IntraDcPrecision = {}));
export var Mpeg2ParControl;
(function (Mpeg2ParControl) {
    Mpeg2ParControl["INITIALIZE_FROM_SOURCE"] = "INITIALIZE_FROM_SOURCE";
    Mpeg2ParControl["SPECIFIED"] = "SPECIFIED";
})(Mpeg2ParControl || (Mpeg2ParControl = {}));
export var Mpeg2QualityTuningLevel;
(function (Mpeg2QualityTuningLevel) {
    Mpeg2QualityTuningLevel["MULTI_PASS"] = "MULTI_PASS";
    Mpeg2QualityTuningLevel["SINGLE_PASS"] = "SINGLE_PASS";
})(Mpeg2QualityTuningLevel || (Mpeg2QualityTuningLevel = {}));
export var Mpeg2RateControlMode;
(function (Mpeg2RateControlMode) {
    Mpeg2RateControlMode["CBR"] = "CBR";
    Mpeg2RateControlMode["VBR"] = "VBR";
})(Mpeg2RateControlMode || (Mpeg2RateControlMode = {}));
export var Mpeg2ScanTypeConversionMode;
(function (Mpeg2ScanTypeConversionMode) {
    Mpeg2ScanTypeConversionMode["INTERLACED"] = "INTERLACED";
    Mpeg2ScanTypeConversionMode["INTERLACED_OPTIMIZE"] = "INTERLACED_OPTIMIZE";
})(Mpeg2ScanTypeConversionMode || (Mpeg2ScanTypeConversionMode = {}));
export var Mpeg2SceneChangeDetect;
(function (Mpeg2SceneChangeDetect) {
    Mpeg2SceneChangeDetect["DISABLED"] = "DISABLED";
    Mpeg2SceneChangeDetect["ENABLED"] = "ENABLED";
})(Mpeg2SceneChangeDetect || (Mpeg2SceneChangeDetect = {}));
export var Mpeg2SlowPal;
(function (Mpeg2SlowPal) {
    Mpeg2SlowPal["DISABLED"] = "DISABLED";
    Mpeg2SlowPal["ENABLED"] = "ENABLED";
})(Mpeg2SlowPal || (Mpeg2SlowPal = {}));
export var Mpeg2SpatialAdaptiveQuantization;
(function (Mpeg2SpatialAdaptiveQuantization) {
    Mpeg2SpatialAdaptiveQuantization["DISABLED"] = "DISABLED";
    Mpeg2SpatialAdaptiveQuantization["ENABLED"] = "ENABLED";
})(Mpeg2SpatialAdaptiveQuantization || (Mpeg2SpatialAdaptiveQuantization = {}));
export var Mpeg2Syntax;
(function (Mpeg2Syntax) {
    Mpeg2Syntax["DEFAULT"] = "DEFAULT";
    Mpeg2Syntax["D_10"] = "D_10";
})(Mpeg2Syntax || (Mpeg2Syntax = {}));
export var Mpeg2Telecine;
(function (Mpeg2Telecine) {
    Mpeg2Telecine["HARD"] = "HARD";
    Mpeg2Telecine["NONE"] = "NONE";
    Mpeg2Telecine["SOFT"] = "SOFT";
})(Mpeg2Telecine || (Mpeg2Telecine = {}));
export var Mpeg2TemporalAdaptiveQuantization;
(function (Mpeg2TemporalAdaptiveQuantization) {
    Mpeg2TemporalAdaptiveQuantization["DISABLED"] = "DISABLED";
    Mpeg2TemporalAdaptiveQuantization["ENABLED"] = "ENABLED";
})(Mpeg2TemporalAdaptiveQuantization || (Mpeg2TemporalAdaptiveQuantization = {}));
export var Mpeg2Settings;
(function (Mpeg2Settings) {
    /**
     * @internal
     */
    Mpeg2Settings.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(Mpeg2Settings || (Mpeg2Settings = {}));
export var ProresCodecProfile;
(function (ProresCodecProfile) {
    ProresCodecProfile["APPLE_PRORES_422"] = "APPLE_PRORES_422";
    ProresCodecProfile["APPLE_PRORES_422_HQ"] = "APPLE_PRORES_422_HQ";
    ProresCodecProfile["APPLE_PRORES_422_LT"] = "APPLE_PRORES_422_LT";
    ProresCodecProfile["APPLE_PRORES_422_PROXY"] = "APPLE_PRORES_422_PROXY";
})(ProresCodecProfile || (ProresCodecProfile = {}));
export var ProresFramerateControl;
(function (ProresFramerateControl) {
    ProresFramerateControl["INITIALIZE_FROM_SOURCE"] = "INITIALIZE_FROM_SOURCE";
    ProresFramerateControl["SPECIFIED"] = "SPECIFIED";
})(ProresFramerateControl || (ProresFramerateControl = {}));
export var ProresFramerateConversionAlgorithm;
(function (ProresFramerateConversionAlgorithm) {
    ProresFramerateConversionAlgorithm["DUPLICATE_DROP"] = "DUPLICATE_DROP";
    ProresFramerateConversionAlgorithm["FRAMEFORMER"] = "FRAMEFORMER";
    ProresFramerateConversionAlgorithm["INTERPOLATE"] = "INTERPOLATE";
})(ProresFramerateConversionAlgorithm || (ProresFramerateConversionAlgorithm = {}));
export var ProresInterlaceMode;
(function (ProresInterlaceMode) {
    ProresInterlaceMode["BOTTOM_FIELD"] = "BOTTOM_FIELD";
    ProresInterlaceMode["FOLLOW_BOTTOM_FIELD"] = "FOLLOW_BOTTOM_FIELD";
    ProresInterlaceMode["FOLLOW_TOP_FIELD"] = "FOLLOW_TOP_FIELD";
    ProresInterlaceMode["PROGRESSIVE"] = "PROGRESSIVE";
    ProresInterlaceMode["TOP_FIELD"] = "TOP_FIELD";
})(ProresInterlaceMode || (ProresInterlaceMode = {}));
export var ProresParControl;
(function (ProresParControl) {
    ProresParControl["INITIALIZE_FROM_SOURCE"] = "INITIALIZE_FROM_SOURCE";
    ProresParControl["SPECIFIED"] = "SPECIFIED";
})(ProresParControl || (ProresParControl = {}));
export var ProresScanTypeConversionMode;
(function (ProresScanTypeConversionMode) {
    ProresScanTypeConversionMode["INTERLACED"] = "INTERLACED";
    ProresScanTypeConversionMode["INTERLACED_OPTIMIZE"] = "INTERLACED_OPTIMIZE";
})(ProresScanTypeConversionMode || (ProresScanTypeConversionMode = {}));
export var ProresSlowPal;
(function (ProresSlowPal) {
    ProresSlowPal["DISABLED"] = "DISABLED";
    ProresSlowPal["ENABLED"] = "ENABLED";
})(ProresSlowPal || (ProresSlowPal = {}));
export var ProresTelecine;
(function (ProresTelecine) {
    ProresTelecine["HARD"] = "HARD";
    ProresTelecine["NONE"] = "NONE";
})(ProresTelecine || (ProresTelecine = {}));
export var ProresSettings;
(function (ProresSettings) {
    /**
     * @internal
     */
    ProresSettings.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(ProresSettings || (ProresSettings = {}));
export var Vc3FramerateControl;
(function (Vc3FramerateControl) {
    Vc3FramerateControl["INITIALIZE_FROM_SOURCE"] = "INITIALIZE_FROM_SOURCE";
    Vc3FramerateControl["SPECIFIED"] = "SPECIFIED";
})(Vc3FramerateControl || (Vc3FramerateControl = {}));
export var Vc3FramerateConversionAlgorithm;
(function (Vc3FramerateConversionAlgorithm) {
    Vc3FramerateConversionAlgorithm["DUPLICATE_DROP"] = "DUPLICATE_DROP";
    Vc3FramerateConversionAlgorithm["FRAMEFORMER"] = "FRAMEFORMER";
    Vc3FramerateConversionAlgorithm["INTERPOLATE"] = "INTERPOLATE";
})(Vc3FramerateConversionAlgorithm || (Vc3FramerateConversionAlgorithm = {}));
export var Vc3InterlaceMode;
(function (Vc3InterlaceMode) {
    Vc3InterlaceMode["INTERLACED"] = "INTERLACED";
    Vc3InterlaceMode["PROGRESSIVE"] = "PROGRESSIVE";
})(Vc3InterlaceMode || (Vc3InterlaceMode = {}));
export var Vc3ScanTypeConversionMode;
(function (Vc3ScanTypeConversionMode) {
    Vc3ScanTypeConversionMode["INTERLACED"] = "INTERLACED";
    Vc3ScanTypeConversionMode["INTERLACED_OPTIMIZE"] = "INTERLACED_OPTIMIZE";
})(Vc3ScanTypeConversionMode || (Vc3ScanTypeConversionMode = {}));
export var Vc3SlowPal;
(function (Vc3SlowPal) {
    Vc3SlowPal["DISABLED"] = "DISABLED";
    Vc3SlowPal["ENABLED"] = "ENABLED";
})(Vc3SlowPal || (Vc3SlowPal = {}));
export var Vc3Telecine;
(function (Vc3Telecine) {
    Vc3Telecine["HARD"] = "HARD";
    Vc3Telecine["NONE"] = "NONE";
})(Vc3Telecine || (Vc3Telecine = {}));
export var Vc3Class;
(function (Vc3Class) {
    Vc3Class["CLASS_145_8BIT"] = "CLASS_145_8BIT";
    Vc3Class["CLASS_220_10BIT"] = "CLASS_220_10BIT";
    Vc3Class["CLASS_220_8BIT"] = "CLASS_220_8BIT";
})(Vc3Class || (Vc3Class = {}));
export var Vc3Settings;
(function (Vc3Settings) {
    /**
     * @internal
     */
    Vc3Settings.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(Vc3Settings || (Vc3Settings = {}));
export var Vp8FramerateControl;
(function (Vp8FramerateControl) {
    Vp8FramerateControl["INITIALIZE_FROM_SOURCE"] = "INITIALIZE_FROM_SOURCE";
    Vp8FramerateControl["SPECIFIED"] = "SPECIFIED";
})(Vp8FramerateControl || (Vp8FramerateControl = {}));
export var Vp8FramerateConversionAlgorithm;
(function (Vp8FramerateConversionAlgorithm) {
    Vp8FramerateConversionAlgorithm["DUPLICATE_DROP"] = "DUPLICATE_DROP";
    Vp8FramerateConversionAlgorithm["FRAMEFORMER"] = "FRAMEFORMER";
    Vp8FramerateConversionAlgorithm["INTERPOLATE"] = "INTERPOLATE";
})(Vp8FramerateConversionAlgorithm || (Vp8FramerateConversionAlgorithm = {}));
export var Vp8ParControl;
(function (Vp8ParControl) {
    Vp8ParControl["INITIALIZE_FROM_SOURCE"] = "INITIALIZE_FROM_SOURCE";
    Vp8ParControl["SPECIFIED"] = "SPECIFIED";
})(Vp8ParControl || (Vp8ParControl = {}));
export var Vp8QualityTuningLevel;
(function (Vp8QualityTuningLevel) {
    Vp8QualityTuningLevel["MULTI_PASS"] = "MULTI_PASS";
    Vp8QualityTuningLevel["MULTI_PASS_HQ"] = "MULTI_PASS_HQ";
})(Vp8QualityTuningLevel || (Vp8QualityTuningLevel = {}));
export var Vp8RateControlMode;
(function (Vp8RateControlMode) {
    Vp8RateControlMode["VBR"] = "VBR";
})(Vp8RateControlMode || (Vp8RateControlMode = {}));
export var Vp8Settings;
(function (Vp8Settings) {
    /**
     * @internal
     */
    Vp8Settings.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(Vp8Settings || (Vp8Settings = {}));
export var Vp9FramerateControl;
(function (Vp9FramerateControl) {
    Vp9FramerateControl["INITIALIZE_FROM_SOURCE"] = "INITIALIZE_FROM_SOURCE";
    Vp9FramerateControl["SPECIFIED"] = "SPECIFIED";
})(Vp9FramerateControl || (Vp9FramerateControl = {}));
export var Vp9FramerateConversionAlgorithm;
(function (Vp9FramerateConversionAlgorithm) {
    Vp9FramerateConversionAlgorithm["DUPLICATE_DROP"] = "DUPLICATE_DROP";
    Vp9FramerateConversionAlgorithm["FRAMEFORMER"] = "FRAMEFORMER";
    Vp9FramerateConversionAlgorithm["INTERPOLATE"] = "INTERPOLATE";
})(Vp9FramerateConversionAlgorithm || (Vp9FramerateConversionAlgorithm = {}));
export var Vp9ParControl;
(function (Vp9ParControl) {
    Vp9ParControl["INITIALIZE_FROM_SOURCE"] = "INITIALIZE_FROM_SOURCE";
    Vp9ParControl["SPECIFIED"] = "SPECIFIED";
})(Vp9ParControl || (Vp9ParControl = {}));
export var Vp9QualityTuningLevel;
(function (Vp9QualityTuningLevel) {
    Vp9QualityTuningLevel["MULTI_PASS"] = "MULTI_PASS";
    Vp9QualityTuningLevel["MULTI_PASS_HQ"] = "MULTI_PASS_HQ";
})(Vp9QualityTuningLevel || (Vp9QualityTuningLevel = {}));
export var Vp9RateControlMode;
(function (Vp9RateControlMode) {
    Vp9RateControlMode["VBR"] = "VBR";
})(Vp9RateControlMode || (Vp9RateControlMode = {}));
export var Vp9Settings;
(function (Vp9Settings) {
    /**
     * @internal
     */
    Vp9Settings.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(Vp9Settings || (Vp9Settings = {}));
export var VideoCodecSettings;
(function (VideoCodecSettings) {
    /**
     * @internal
     */
    VideoCodecSettings.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(VideoCodecSettings || (VideoCodecSettings = {}));
export var ColorMetadata;
(function (ColorMetadata) {
    ColorMetadata["IGNORE"] = "IGNORE";
    ColorMetadata["INSERT"] = "INSERT";
})(ColorMetadata || (ColorMetadata = {}));
export var DropFrameTimecode;
(function (DropFrameTimecode) {
    DropFrameTimecode["DISABLED"] = "DISABLED";
    DropFrameTimecode["ENABLED"] = "ENABLED";
})(DropFrameTimecode || (DropFrameTimecode = {}));
export var RespondToAfd;
(function (RespondToAfd) {
    RespondToAfd["NONE"] = "NONE";
    RespondToAfd["PASSTHROUGH"] = "PASSTHROUGH";
    RespondToAfd["RESPOND"] = "RESPOND";
})(RespondToAfd || (RespondToAfd = {}));
export var ScalingBehavior;
(function (ScalingBehavior) {
    ScalingBehavior["DEFAULT"] = "DEFAULT";
    ScalingBehavior["STRETCH_TO_OUTPUT"] = "STRETCH_TO_OUTPUT";
})(ScalingBehavior || (ScalingBehavior = {}));
export var VideoTimecodeInsertion;
(function (VideoTimecodeInsertion) {
    VideoTimecodeInsertion["DISABLED"] = "DISABLED";
    VideoTimecodeInsertion["PIC_TIMING_SEI"] = "PIC_TIMING_SEI";
})(VideoTimecodeInsertion || (VideoTimecodeInsertion = {}));
export var ColorSpaceConversion;
(function (ColorSpaceConversion) {
    ColorSpaceConversion["FORCE_601"] = "FORCE_601";
    ColorSpaceConversion["FORCE_709"] = "FORCE_709";
    ColorSpaceConversion["FORCE_HDR10"] = "FORCE_HDR10";
    ColorSpaceConversion["FORCE_HLG_2020"] = "FORCE_HLG_2020";
    ColorSpaceConversion["NONE"] = "NONE";
})(ColorSpaceConversion || (ColorSpaceConversion = {}));
export var ColorCorrector;
(function (ColorCorrector) {
    /**
     * @internal
     */
    ColorCorrector.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(ColorCorrector || (ColorCorrector = {}));
export var DeinterlaceAlgorithm;
(function (DeinterlaceAlgorithm) {
    DeinterlaceAlgorithm["BLEND"] = "BLEND";
    DeinterlaceAlgorithm["BLEND_TICKER"] = "BLEND_TICKER";
    DeinterlaceAlgorithm["INTERPOLATE"] = "INTERPOLATE";
    DeinterlaceAlgorithm["INTERPOLATE_TICKER"] = "INTERPOLATE_TICKER";
})(DeinterlaceAlgorithm || (DeinterlaceAlgorithm = {}));
export var DeinterlacerControl;
(function (DeinterlacerControl) {
    DeinterlacerControl["FORCE_ALL_FRAMES"] = "FORCE_ALL_FRAMES";
    DeinterlacerControl["NORMAL"] = "NORMAL";
})(DeinterlacerControl || (DeinterlacerControl = {}));
export var DeinterlacerMode;
(function (DeinterlacerMode) {
    DeinterlacerMode["ADAPTIVE"] = "ADAPTIVE";
    DeinterlacerMode["DEINTERLACE"] = "DEINTERLACE";
    DeinterlacerMode["INVERSE_TELECINE"] = "INVERSE_TELECINE";
})(DeinterlacerMode || (DeinterlacerMode = {}));
export var Deinterlacer;
(function (Deinterlacer) {
    /**
     * @internal
     */
    Deinterlacer.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(Deinterlacer || (Deinterlacer = {}));
export var DolbyVisionLevel6Metadata;
(function (DolbyVisionLevel6Metadata) {
    /**
     * @internal
     */
    DolbyVisionLevel6Metadata.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(DolbyVisionLevel6Metadata || (DolbyVisionLevel6Metadata = {}));
export var DolbyVisionLevel6Mode;
(function (DolbyVisionLevel6Mode) {
    DolbyVisionLevel6Mode["PASSTHROUGH"] = "PASSTHROUGH";
    DolbyVisionLevel6Mode["RECALCULATE"] = "RECALCULATE";
    DolbyVisionLevel6Mode["SPECIFY"] = "SPECIFY";
})(DolbyVisionLevel6Mode || (DolbyVisionLevel6Mode = {}));
export var DolbyVisionProfile;
(function (DolbyVisionProfile) {
    DolbyVisionProfile["PROFILE_5"] = "PROFILE_5";
})(DolbyVisionProfile || (DolbyVisionProfile = {}));
export var DolbyVision;
(function (DolbyVision) {
    /**
     * @internal
     */
    DolbyVision.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(DolbyVision || (DolbyVision = {}));
export var NoiseReducerFilter;
(function (NoiseReducerFilter) {
    NoiseReducerFilter["BILATERAL"] = "BILATERAL";
    NoiseReducerFilter["CONSERVE"] = "CONSERVE";
    NoiseReducerFilter["GAUSSIAN"] = "GAUSSIAN";
    NoiseReducerFilter["LANCZOS"] = "LANCZOS";
    NoiseReducerFilter["MEAN"] = "MEAN";
    NoiseReducerFilter["SHARPEN"] = "SHARPEN";
    NoiseReducerFilter["SPATIAL"] = "SPATIAL";
    NoiseReducerFilter["TEMPORAL"] = "TEMPORAL";
})(NoiseReducerFilter || (NoiseReducerFilter = {}));
export var NoiseReducerFilterSettings;
(function (NoiseReducerFilterSettings) {
    /**
     * @internal
     */
    NoiseReducerFilterSettings.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(NoiseReducerFilterSettings || (NoiseReducerFilterSettings = {}));
export var NoiseReducerSpatialFilterSettings;
(function (NoiseReducerSpatialFilterSettings) {
    /**
     * @internal
     */
    NoiseReducerSpatialFilterSettings.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(NoiseReducerSpatialFilterSettings || (NoiseReducerSpatialFilterSettings = {}));
export var NoiseFilterPostTemporalSharpening;
(function (NoiseFilterPostTemporalSharpening) {
    NoiseFilterPostTemporalSharpening["AUTO"] = "AUTO";
    NoiseFilterPostTemporalSharpening["DISABLED"] = "DISABLED";
    NoiseFilterPostTemporalSharpening["ENABLED"] = "ENABLED";
})(NoiseFilterPostTemporalSharpening || (NoiseFilterPostTemporalSharpening = {}));
export var NoiseReducerTemporalFilterSettings;
(function (NoiseReducerTemporalFilterSettings) {
    /**
     * @internal
     */
    NoiseReducerTemporalFilterSettings.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(NoiseReducerTemporalFilterSettings || (NoiseReducerTemporalFilterSettings = {}));
export var NoiseReducer;
(function (NoiseReducer) {
    /**
     * @internal
     */
    NoiseReducer.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(NoiseReducer || (NoiseReducer = {}));
export var WatermarkingStrength;
(function (WatermarkingStrength) {
    WatermarkingStrength["DEFAULT"] = "DEFAULT";
    WatermarkingStrength["LIGHTER"] = "LIGHTER";
    WatermarkingStrength["LIGHTEST"] = "LIGHTEST";
    WatermarkingStrength["STRONGER"] = "STRONGER";
    WatermarkingStrength["STRONGEST"] = "STRONGEST";
})(WatermarkingStrength || (WatermarkingStrength = {}));
export var NexGuardFileMarkerSettings;
(function (NexGuardFileMarkerSettings) {
    /**
     * @internal
     */
    NexGuardFileMarkerSettings.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(NexGuardFileMarkerSettings || (NexGuardFileMarkerSettings = {}));
export var PartnerWatermarking;
(function (PartnerWatermarking) {
    /**
     * @internal
     */
    PartnerWatermarking.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(PartnerWatermarking || (PartnerWatermarking = {}));
export var TimecodeBurninPosition;
(function (TimecodeBurninPosition) {
    TimecodeBurninPosition["BOTTOM_CENTER"] = "BOTTOM_CENTER";
    TimecodeBurninPosition["BOTTOM_LEFT"] = "BOTTOM_LEFT";
    TimecodeBurninPosition["BOTTOM_RIGHT"] = "BOTTOM_RIGHT";
    TimecodeBurninPosition["MIDDLE_CENTER"] = "MIDDLE_CENTER";
    TimecodeBurninPosition["MIDDLE_LEFT"] = "MIDDLE_LEFT";
    TimecodeBurninPosition["MIDDLE_RIGHT"] = "MIDDLE_RIGHT";
    TimecodeBurninPosition["TOP_CENTER"] = "TOP_CENTER";
    TimecodeBurninPosition["TOP_LEFT"] = "TOP_LEFT";
    TimecodeBurninPosition["TOP_RIGHT"] = "TOP_RIGHT";
})(TimecodeBurninPosition || (TimecodeBurninPosition = {}));
export var TimecodeBurnin;
(function (TimecodeBurnin) {
    /**
     * @internal
     */
    TimecodeBurnin.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(TimecodeBurnin || (TimecodeBurnin = {}));
export var VideoPreprocessor;
(function (VideoPreprocessor) {
    /**
     * @internal
     */
    VideoPreprocessor.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(VideoPreprocessor || (VideoPreprocessor = {}));
export var VideoDescription;
(function (VideoDescription) {
    /**
     * @internal
     */
    VideoDescription.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(VideoDescription || (VideoDescription = {}));
export var Output;
(function (Output) {
    /**
     * @internal
     */
    Output.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(Output || (Output = {}));
export var OutputGroup;
(function (OutputGroup) {
    /**
     * @internal
     */
    OutputGroup.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(OutputGroup || (OutputGroup = {}));
export var TimecodeSource;
(function (TimecodeSource) {
    TimecodeSource["EMBEDDED"] = "EMBEDDED";
    TimecodeSource["SPECIFIEDSTART"] = "SPECIFIEDSTART";
    TimecodeSource["ZEROBASED"] = "ZEROBASED";
})(TimecodeSource || (TimecodeSource = {}));
export var TimecodeConfig;
(function (TimecodeConfig) {
    /**
     * @internal
     */
    TimecodeConfig.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(TimecodeConfig || (TimecodeConfig = {}));
export var TimedMetadataInsertion;
(function (TimedMetadataInsertion) {
    /**
     * @internal
     */
    TimedMetadataInsertion.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(TimedMetadataInsertion || (TimedMetadataInsertion = {}));
export var JobSettings;
(function (JobSettings) {
    /**
     * @internal
     */
    JobSettings.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(JobSettings || (JobSettings = {}));
export var SimulateReservedQueue;
(function (SimulateReservedQueue) {
    SimulateReservedQueue["DISABLED"] = "DISABLED";
    SimulateReservedQueue["ENABLED"] = "ENABLED";
})(SimulateReservedQueue || (SimulateReservedQueue = {}));
export var JobStatus;
(function (JobStatus) {
    JobStatus["CANCELED"] = "CANCELED";
    JobStatus["COMPLETE"] = "COMPLETE";
    JobStatus["ERROR"] = "ERROR";
    JobStatus["PROGRESSING"] = "PROGRESSING";
    JobStatus["SUBMITTED"] = "SUBMITTED";
})(JobStatus || (JobStatus = {}));
export var StatusUpdateInterval;
(function (StatusUpdateInterval) {
    StatusUpdateInterval["SECONDS_10"] = "SECONDS_10";
    StatusUpdateInterval["SECONDS_12"] = "SECONDS_12";
    StatusUpdateInterval["SECONDS_120"] = "SECONDS_120";
    StatusUpdateInterval["SECONDS_15"] = "SECONDS_15";
    StatusUpdateInterval["SECONDS_180"] = "SECONDS_180";
    StatusUpdateInterval["SECONDS_20"] = "SECONDS_20";
    StatusUpdateInterval["SECONDS_240"] = "SECONDS_240";
    StatusUpdateInterval["SECONDS_30"] = "SECONDS_30";
    StatusUpdateInterval["SECONDS_300"] = "SECONDS_300";
    StatusUpdateInterval["SECONDS_360"] = "SECONDS_360";
    StatusUpdateInterval["SECONDS_420"] = "SECONDS_420";
    StatusUpdateInterval["SECONDS_480"] = "SECONDS_480";
    StatusUpdateInterval["SECONDS_540"] = "SECONDS_540";
    StatusUpdateInterval["SECONDS_60"] = "SECONDS_60";
    StatusUpdateInterval["SECONDS_600"] = "SECONDS_600";
})(StatusUpdateInterval || (StatusUpdateInterval = {}));
export var Timing;
(function (Timing) {
    /**
     * @internal
     */
    Timing.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(Timing || (Timing = {}));
export var Job;
(function (Job) {
    /**
     * @internal
     */
    Job.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(Job || (Job = {}));
export var JobTemplateSettings;
(function (JobTemplateSettings) {
    /**
     * @internal
     */
    JobTemplateSettings.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(JobTemplateSettings || (JobTemplateSettings = {}));
export var Type;
(function (Type) {
    Type["CUSTOM"] = "CUSTOM";
    Type["SYSTEM"] = "SYSTEM";
})(Type || (Type = {}));
export var JobTemplate;
(function (JobTemplate) {
    /**
     * @internal
     */
    JobTemplate.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(JobTemplate || (JobTemplate = {}));
export var PresetSettings;
(function (PresetSettings) {
    /**
     * @internal
     */
    PresetSettings.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(PresetSettings || (PresetSettings = {}));
export var Preset;
(function (Preset) {
    /**
     * @internal
     */
    Preset.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(Preset || (Preset = {}));
export var PricingPlan;
(function (PricingPlan) {
    PricingPlan["ON_DEMAND"] = "ON_DEMAND";
    PricingPlan["RESERVED"] = "RESERVED";
})(PricingPlan || (PricingPlan = {}));
export var Commitment;
(function (Commitment) {
    Commitment["ONE_YEAR"] = "ONE_YEAR";
})(Commitment || (Commitment = {}));
export var RenewalType;
(function (RenewalType) {
    RenewalType["AUTO_RENEW"] = "AUTO_RENEW";
    RenewalType["EXPIRE"] = "EXPIRE";
})(RenewalType || (RenewalType = {}));
export var ReservationPlanStatus;
(function (ReservationPlanStatus) {
    ReservationPlanStatus["ACTIVE"] = "ACTIVE";
    ReservationPlanStatus["EXPIRED"] = "EXPIRED";
})(ReservationPlanStatus || (ReservationPlanStatus = {}));
export var ReservationPlan;
(function (ReservationPlan) {
    /**
     * @internal
     */
    ReservationPlan.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(ReservationPlan || (ReservationPlan = {}));
export var QueueStatus;
(function (QueueStatus) {
    QueueStatus["ACTIVE"] = "ACTIVE";
    QueueStatus["PAUSED"] = "PAUSED";
})(QueueStatus || (QueueStatus = {}));
export var Queue;
(function (Queue) {
    /**
     * @internal
     */
    Queue.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(Queue || (Queue = {}));
export var AssociateCertificateRequest;
(function (AssociateCertificateRequest) {
    /**
     * @internal
     */
    AssociateCertificateRequest.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(AssociateCertificateRequest || (AssociateCertificateRequest = {}));
export var AssociateCertificateResponse;
(function (AssociateCertificateResponse) {
    /**
     * @internal
     */
    AssociateCertificateResponse.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(AssociateCertificateResponse || (AssociateCertificateResponse = {}));
export var BadRequestException;
(function (BadRequestException) {
    /**
     * @internal
     */
    BadRequestException.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(BadRequestException || (BadRequestException = {}));
export var ConflictException;
(function (ConflictException) {
    /**
     * @internal
     */
    ConflictException.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(ConflictException || (ConflictException = {}));
export var ForbiddenException;
(function (ForbiddenException) {
    /**
     * @internal
     */
    ForbiddenException.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(ForbiddenException || (ForbiddenException = {}));
export var InternalServerErrorException;
(function (InternalServerErrorException) {
    /**
     * @internal
     */
    InternalServerErrorException.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(InternalServerErrorException || (InternalServerErrorException = {}));
export var NotFoundException;
(function (NotFoundException) {
    /**
     * @internal
     */
    NotFoundException.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(NotFoundException || (NotFoundException = {}));
export var TooManyRequestsException;
(function (TooManyRequestsException) {
    /**
     * @internal
     */
    TooManyRequestsException.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(TooManyRequestsException || (TooManyRequestsException = {}));
export var CancelJobRequest;
(function (CancelJobRequest) {
    /**
     * @internal
     */
    CancelJobRequest.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(CancelJobRequest || (CancelJobRequest = {}));
export var CancelJobResponse;
(function (CancelJobResponse) {
    /**
     * @internal
     */
    CancelJobResponse.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(CancelJobResponse || (CancelJobResponse = {}));
export var CreateJobRequest;
(function (CreateJobRequest) {
    /**
     * @internal
     */
    CreateJobRequest.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(CreateJobRequest || (CreateJobRequest = {}));
export var CreateJobResponse;
(function (CreateJobResponse) {
    /**
     * @internal
     */
    CreateJobResponse.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(CreateJobResponse || (CreateJobResponse = {}));
export var CreateJobTemplateRequest;
(function (CreateJobTemplateRequest) {
    /**
     * @internal
     */
    CreateJobTemplateRequest.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(CreateJobTemplateRequest || (CreateJobTemplateRequest = {}));
export var CreateJobTemplateResponse;
(function (CreateJobTemplateResponse) {
    /**
     * @internal
     */
    CreateJobTemplateResponse.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(CreateJobTemplateResponse || (CreateJobTemplateResponse = {}));
export var CreatePresetRequest;
(function (CreatePresetRequest) {
    /**
     * @internal
     */
    CreatePresetRequest.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(CreatePresetRequest || (CreatePresetRequest = {}));
export var CreatePresetResponse;
(function (CreatePresetResponse) {
    /**
     * @internal
     */
    CreatePresetResponse.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(CreatePresetResponse || (CreatePresetResponse = {}));
export var ReservationPlanSettings;
(function (ReservationPlanSettings) {
    /**
     * @internal
     */
    ReservationPlanSettings.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(ReservationPlanSettings || (ReservationPlanSettings = {}));
export var CreateQueueRequest;
(function (CreateQueueRequest) {
    /**
     * @internal
     */
    CreateQueueRequest.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(CreateQueueRequest || (CreateQueueRequest = {}));
export var CreateQueueResponse;
(function (CreateQueueResponse) {
    /**
     * @internal
     */
    CreateQueueResponse.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(CreateQueueResponse || (CreateQueueResponse = {}));
export var DeleteJobTemplateRequest;
(function (DeleteJobTemplateRequest) {
    /**
     * @internal
     */
    DeleteJobTemplateRequest.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(DeleteJobTemplateRequest || (DeleteJobTemplateRequest = {}));
export var DeleteJobTemplateResponse;
(function (DeleteJobTemplateResponse) {
    /**
     * @internal
     */
    DeleteJobTemplateResponse.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(DeleteJobTemplateResponse || (DeleteJobTemplateResponse = {}));
export var DeletePresetRequest;
(function (DeletePresetRequest) {
    /**
     * @internal
     */
    DeletePresetRequest.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(DeletePresetRequest || (DeletePresetRequest = {}));
export var DeletePresetResponse;
(function (DeletePresetResponse) {
    /**
     * @internal
     */
    DeletePresetResponse.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(DeletePresetResponse || (DeletePresetResponse = {}));
export var DeleteQueueRequest;
(function (DeleteQueueRequest) {
    /**
     * @internal
     */
    DeleteQueueRequest.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(DeleteQueueRequest || (DeleteQueueRequest = {}));
export var DeleteQueueResponse;
(function (DeleteQueueResponse) {
    /**
     * @internal
     */
    DeleteQueueResponse.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(DeleteQueueResponse || (DeleteQueueResponse = {}));
export var DescribeEndpointsMode;
(function (DescribeEndpointsMode) {
    DescribeEndpointsMode["DEFAULT"] = "DEFAULT";
    DescribeEndpointsMode["GET_ONLY"] = "GET_ONLY";
})(DescribeEndpointsMode || (DescribeEndpointsMode = {}));
export var DescribeEndpointsRequest;
(function (DescribeEndpointsRequest) {
    /**
     * @internal
     */
    DescribeEndpointsRequest.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(DescribeEndpointsRequest || (DescribeEndpointsRequest = {}));
export var DescribeEndpointsResponse;
(function (DescribeEndpointsResponse) {
    /**
     * @internal
     */
    DescribeEndpointsResponse.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(DescribeEndpointsResponse || (DescribeEndpointsResponse = {}));
export var DisassociateCertificateRequest;
(function (DisassociateCertificateRequest) {
    /**
     * @internal
     */
    DisassociateCertificateRequest.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(DisassociateCertificateRequest || (DisassociateCertificateRequest = {}));
export var DisassociateCertificateResponse;
(function (DisassociateCertificateResponse) {
    /**
     * @internal
     */
    DisassociateCertificateResponse.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(DisassociateCertificateResponse || (DisassociateCertificateResponse = {}));
export var GetJobRequest;
(function (GetJobRequest) {
    /**
     * @internal
     */
    GetJobRequest.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(GetJobRequest || (GetJobRequest = {}));
export var GetJobResponse;
(function (GetJobResponse) {
    /**
     * @internal
     */
    GetJobResponse.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(GetJobResponse || (GetJobResponse = {}));
export var GetJobTemplateRequest;
(function (GetJobTemplateRequest) {
    /**
     * @internal
     */
    GetJobTemplateRequest.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(GetJobTemplateRequest || (GetJobTemplateRequest = {}));
export var GetJobTemplateResponse;
(function (GetJobTemplateResponse) {
    /**
     * @internal
     */
    GetJobTemplateResponse.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(GetJobTemplateResponse || (GetJobTemplateResponse = {}));
export var GetPresetRequest;
(function (GetPresetRequest) {
    /**
     * @internal
     */
    GetPresetRequest.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(GetPresetRequest || (GetPresetRequest = {}));
export var GetPresetResponse;
(function (GetPresetResponse) {
    /**
     * @internal
     */
    GetPresetResponse.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(GetPresetResponse || (GetPresetResponse = {}));
export var GetQueueRequest;
(function (GetQueueRequest) {
    /**
     * @internal
     */
    GetQueueRequest.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(GetQueueRequest || (GetQueueRequest = {}));
export var GetQueueResponse;
(function (GetQueueResponse) {
    /**
     * @internal
     */
    GetQueueResponse.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(GetQueueResponse || (GetQueueResponse = {}));
export var JobTemplateListBy;
(function (JobTemplateListBy) {
    JobTemplateListBy["CREATION_DATE"] = "CREATION_DATE";
    JobTemplateListBy["NAME"] = "NAME";
    JobTemplateListBy["SYSTEM"] = "SYSTEM";
})(JobTemplateListBy || (JobTemplateListBy = {}));
export var Order;
(function (Order) {
    Order["ASCENDING"] = "ASCENDING";
    Order["DESCENDING"] = "DESCENDING";
})(Order || (Order = {}));
export var ListJobsRequest;
(function (ListJobsRequest) {
    /**
     * @internal
     */
    ListJobsRequest.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(ListJobsRequest || (ListJobsRequest = {}));
export var ListJobsResponse;
(function (ListJobsResponse) {
    /**
     * @internal
     */
    ListJobsResponse.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(ListJobsResponse || (ListJobsResponse = {}));
export var ListJobTemplatesRequest;
(function (ListJobTemplatesRequest) {
    /**
     * @internal
     */
    ListJobTemplatesRequest.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(ListJobTemplatesRequest || (ListJobTemplatesRequest = {}));
export var ListJobTemplatesResponse;
(function (ListJobTemplatesResponse) {
    /**
     * @internal
     */
    ListJobTemplatesResponse.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(ListJobTemplatesResponse || (ListJobTemplatesResponse = {}));
export var PresetListBy;
(function (PresetListBy) {
    PresetListBy["CREATION_DATE"] = "CREATION_DATE";
    PresetListBy["NAME"] = "NAME";
    PresetListBy["SYSTEM"] = "SYSTEM";
})(PresetListBy || (PresetListBy = {}));
export var ListPresetsRequest;
(function (ListPresetsRequest) {
    /**
     * @internal
     */
    ListPresetsRequest.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(ListPresetsRequest || (ListPresetsRequest = {}));
export var ListPresetsResponse;
(function (ListPresetsResponse) {
    /**
     * @internal
     */
    ListPresetsResponse.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(ListPresetsResponse || (ListPresetsResponse = {}));
export var QueueListBy;
(function (QueueListBy) {
    QueueListBy["CREATION_DATE"] = "CREATION_DATE";
    QueueListBy["NAME"] = "NAME";
})(QueueListBy || (QueueListBy = {}));
export var ListQueuesRequest;
(function (ListQueuesRequest) {
    /**
     * @internal
     */
    ListQueuesRequest.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(ListQueuesRequest || (ListQueuesRequest = {}));
export var ListQueuesResponse;
(function (ListQueuesResponse) {
    /**
     * @internal
     */
    ListQueuesResponse.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(ListQueuesResponse || (ListQueuesResponse = {}));
export var ListTagsForResourceRequest;
(function (ListTagsForResourceRequest) {
    /**
     * @internal
     */
    ListTagsForResourceRequest.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(ListTagsForResourceRequest || (ListTagsForResourceRequest = {}));
export var ResourceTags;
(function (ResourceTags) {
    /**
     * @internal
     */
    ResourceTags.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(ResourceTags || (ResourceTags = {}));
export var ListTagsForResourceResponse;
(function (ListTagsForResourceResponse) {
    /**
     * @internal
     */
    ListTagsForResourceResponse.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(ListTagsForResourceResponse || (ListTagsForResourceResponse = {}));
export var TagResourceRequest;
(function (TagResourceRequest) {
    /**
     * @internal
     */
    TagResourceRequest.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(TagResourceRequest || (TagResourceRequest = {}));
export var TagResourceResponse;
(function (TagResourceResponse) {
    /**
     * @internal
     */
    TagResourceResponse.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(TagResourceResponse || (TagResourceResponse = {}));
export var UntagResourceRequest;
(function (UntagResourceRequest) {
    /**
     * @internal
     */
    UntagResourceRequest.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(UntagResourceRequest || (UntagResourceRequest = {}));
export var UntagResourceResponse;
(function (UntagResourceResponse) {
    /**
     * @internal
     */
    UntagResourceResponse.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(UntagResourceResponse || (UntagResourceResponse = {}));
export var UpdateJobTemplateRequest;
(function (UpdateJobTemplateRequest) {
    /**
     * @internal
     */
    UpdateJobTemplateRequest.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(UpdateJobTemplateRequest || (UpdateJobTemplateRequest = {}));
export var UpdateJobTemplateResponse;
(function (UpdateJobTemplateResponse) {
    /**
     * @internal
     */
    UpdateJobTemplateResponse.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(UpdateJobTemplateResponse || (UpdateJobTemplateResponse = {}));
export var UpdatePresetRequest;
(function (UpdatePresetRequest) {
    /**
     * @internal
     */
    UpdatePresetRequest.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(UpdatePresetRequest || (UpdatePresetRequest = {}));
export var UpdatePresetResponse;
(function (UpdatePresetResponse) {
    /**
     * @internal
     */
    UpdatePresetResponse.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(UpdatePresetResponse || (UpdatePresetResponse = {}));
export var UpdateQueueRequest;
(function (UpdateQueueRequest) {
    /**
     * @internal
     */
    UpdateQueueRequest.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(UpdateQueueRequest || (UpdateQueueRequest = {}));
export var UpdateQueueResponse;
(function (UpdateQueueResponse) {
    /**
     * @internal
     */
    UpdateQueueResponse.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(UpdateQueueResponse || (UpdateQueueResponse = {}));
//# sourceMappingURL=models_1.js.map