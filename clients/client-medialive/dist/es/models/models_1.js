import { __assign } from "tslib";
export var RtmpAdMarkers;
(function (RtmpAdMarkers) {
    RtmpAdMarkers["ON_CUE_POINT_SCTE35"] = "ON_CUE_POINT_SCTE35";
})(RtmpAdMarkers || (RtmpAdMarkers = {}));
export var AuthenticationScheme;
(function (AuthenticationScheme) {
    AuthenticationScheme["AKAMAI"] = "AKAMAI";
    AuthenticationScheme["COMMON"] = "COMMON";
})(AuthenticationScheme || (AuthenticationScheme = {}));
export var RtmpCacheFullBehavior;
(function (RtmpCacheFullBehavior) {
    RtmpCacheFullBehavior["DISCONNECT_IMMEDIATELY"] = "DISCONNECT_IMMEDIATELY";
    RtmpCacheFullBehavior["WAIT_FOR_SERVER"] = "WAIT_FOR_SERVER";
})(RtmpCacheFullBehavior || (RtmpCacheFullBehavior = {}));
export var RtmpCaptionData;
(function (RtmpCaptionData) {
    RtmpCaptionData["ALL"] = "ALL";
    RtmpCaptionData["FIELD1_608"] = "FIELD1_608";
    RtmpCaptionData["FIELD1_AND_FIELD2_608"] = "FIELD1_AND_FIELD2_608";
})(RtmpCaptionData || (RtmpCaptionData = {}));
export var InputLossActionForRtmpOut;
(function (InputLossActionForRtmpOut) {
    InputLossActionForRtmpOut["EMIT_OUTPUT"] = "EMIT_OUTPUT";
    InputLossActionForRtmpOut["PAUSE_OUTPUT"] = "PAUSE_OUTPUT";
})(InputLossActionForRtmpOut || (InputLossActionForRtmpOut = {}));
export var RtmpGroupSettings;
(function (RtmpGroupSettings) {
    /**
     * @internal
     */
    RtmpGroupSettings.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(RtmpGroupSettings || (RtmpGroupSettings = {}));
export var InputLossActionForUdpOut;
(function (InputLossActionForUdpOut) {
    InputLossActionForUdpOut["DROP_PROGRAM"] = "DROP_PROGRAM";
    InputLossActionForUdpOut["DROP_TS"] = "DROP_TS";
    InputLossActionForUdpOut["EMIT_PROGRAM"] = "EMIT_PROGRAM";
})(InputLossActionForUdpOut || (InputLossActionForUdpOut = {}));
export var UdpTimedMetadataId3Frame;
(function (UdpTimedMetadataId3Frame) {
    UdpTimedMetadataId3Frame["NONE"] = "NONE";
    UdpTimedMetadataId3Frame["PRIV"] = "PRIV";
    UdpTimedMetadataId3Frame["TDRL"] = "TDRL";
})(UdpTimedMetadataId3Frame || (UdpTimedMetadataId3Frame = {}));
export var UdpGroupSettings;
(function (UdpGroupSettings) {
    /**
     * @internal
     */
    UdpGroupSettings.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(UdpGroupSettings || (UdpGroupSettings = {}));
export var OutputGroupSettings;
(function (OutputGroupSettings) {
    /**
     * @internal
     */
    OutputGroupSettings.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(OutputGroupSettings || (OutputGroupSettings = {}));
export var OutputGroup;
(function (OutputGroup) {
    /**
     * @internal
     */
    OutputGroup.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(OutputGroup || (OutputGroup = {}));
export var PipelineDetail;
(function (PipelineDetail) {
    /**
     * @internal
     */
    PipelineDetail.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(PipelineDetail || (PipelineDetail = {}));
export var PipelineId;
(function (PipelineId) {
    PipelineId["PIPELINE_0"] = "PIPELINE_0";
    PipelineId["PIPELINE_1"] = "PIPELINE_1";
})(PipelineId || (PipelineId = {}));
export var PipelinePauseStateSettings;
(function (PipelinePauseStateSettings) {
    /**
     * @internal
     */
    PipelinePauseStateSettings.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(PipelinePauseStateSettings || (PipelinePauseStateSettings = {}));
export var ReservationState;
(function (ReservationState) {
    ReservationState["ACTIVE"] = "ACTIVE";
    ReservationState["CANCELED"] = "CANCELED";
    ReservationState["DELETED"] = "DELETED";
    ReservationState["EXPIRED"] = "EXPIRED";
})(ReservationState || (ReservationState = {}));
export var Reservation;
(function (Reservation) {
    /**
     * @internal
     */
    Reservation.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(Reservation || (Reservation = {}));
export var HlsId3SegmentTaggingScheduleActionSettings;
(function (HlsId3SegmentTaggingScheduleActionSettings) {
    /**
     * @internal
     */
    HlsId3SegmentTaggingScheduleActionSettings.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(HlsId3SegmentTaggingScheduleActionSettings || (HlsId3SegmentTaggingScheduleActionSettings = {}));
export var HlsTimedMetadataScheduleActionSettings;
(function (HlsTimedMetadataScheduleActionSettings) {
    /**
     * @internal
     */
    HlsTimedMetadataScheduleActionSettings.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(HlsTimedMetadataScheduleActionSettings || (HlsTimedMetadataScheduleActionSettings = {}));
export var InputTimecodeSource;
(function (InputTimecodeSource) {
    InputTimecodeSource["EMBEDDED"] = "EMBEDDED";
    InputTimecodeSource["ZEROBASED"] = "ZEROBASED";
})(InputTimecodeSource || (InputTimecodeSource = {}));
export var StartTimecode;
(function (StartTimecode) {
    /**
     * @internal
     */
    StartTimecode.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(StartTimecode || (StartTimecode = {}));
export var LastFrameClippingBehavior;
(function (LastFrameClippingBehavior) {
    LastFrameClippingBehavior["EXCLUDE_LAST_FRAME"] = "EXCLUDE_LAST_FRAME";
    LastFrameClippingBehavior["INCLUDE_LAST_FRAME"] = "INCLUDE_LAST_FRAME";
})(LastFrameClippingBehavior || (LastFrameClippingBehavior = {}));
export var StopTimecode;
(function (StopTimecode) {
    /**
     * @internal
     */
    StopTimecode.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(StopTimecode || (StopTimecode = {}));
export var InputClippingSettings;
(function (InputClippingSettings) {
    /**
     * @internal
     */
    InputClippingSettings.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(InputClippingSettings || (InputClippingSettings = {}));
export var InputPrepareScheduleActionSettings;
(function (InputPrepareScheduleActionSettings) {
    /**
     * @internal
     */
    InputPrepareScheduleActionSettings.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(InputPrepareScheduleActionSettings || (InputPrepareScheduleActionSettings = {}));
export var InputSwitchScheduleActionSettings;
(function (InputSwitchScheduleActionSettings) {
    /**
     * @internal
     */
    InputSwitchScheduleActionSettings.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(InputSwitchScheduleActionSettings || (InputSwitchScheduleActionSettings = {}));
export var MotionGraphicsActivateScheduleActionSettings;
(function (MotionGraphicsActivateScheduleActionSettings) {
    /**
     * @internal
     */
    MotionGraphicsActivateScheduleActionSettings.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(MotionGraphicsActivateScheduleActionSettings || (MotionGraphicsActivateScheduleActionSettings = {}));
export var MotionGraphicsDeactivateScheduleActionSettings;
(function (MotionGraphicsDeactivateScheduleActionSettings) {
    /**
     * @internal
     */
    MotionGraphicsDeactivateScheduleActionSettings.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(MotionGraphicsDeactivateScheduleActionSettings || (MotionGraphicsDeactivateScheduleActionSettings = {}));
export var PauseStateScheduleActionSettings;
(function (PauseStateScheduleActionSettings) {
    /**
     * @internal
     */
    PauseStateScheduleActionSettings.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(PauseStateScheduleActionSettings || (PauseStateScheduleActionSettings = {}));
export var Scte35ReturnToNetworkScheduleActionSettings;
(function (Scte35ReturnToNetworkScheduleActionSettings) {
    /**
     * @internal
     */
    Scte35ReturnToNetworkScheduleActionSettings.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(Scte35ReturnToNetworkScheduleActionSettings || (Scte35ReturnToNetworkScheduleActionSettings = {}));
export var Scte35SpliceInsertScheduleActionSettings;
(function (Scte35SpliceInsertScheduleActionSettings) {
    /**
     * @internal
     */
    Scte35SpliceInsertScheduleActionSettings.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(Scte35SpliceInsertScheduleActionSettings || (Scte35SpliceInsertScheduleActionSettings = {}));
export var Scte35ArchiveAllowedFlag;
(function (Scte35ArchiveAllowedFlag) {
    Scte35ArchiveAllowedFlag["ARCHIVE_ALLOWED"] = "ARCHIVE_ALLOWED";
    Scte35ArchiveAllowedFlag["ARCHIVE_NOT_ALLOWED"] = "ARCHIVE_NOT_ALLOWED";
})(Scte35ArchiveAllowedFlag || (Scte35ArchiveAllowedFlag = {}));
export var Scte35DeviceRestrictions;
(function (Scte35DeviceRestrictions) {
    Scte35DeviceRestrictions["NONE"] = "NONE";
    Scte35DeviceRestrictions["RESTRICT_GROUP0"] = "RESTRICT_GROUP0";
    Scte35DeviceRestrictions["RESTRICT_GROUP1"] = "RESTRICT_GROUP1";
    Scte35DeviceRestrictions["RESTRICT_GROUP2"] = "RESTRICT_GROUP2";
})(Scte35DeviceRestrictions || (Scte35DeviceRestrictions = {}));
export var Scte35NoRegionalBlackoutFlag;
(function (Scte35NoRegionalBlackoutFlag) {
    Scte35NoRegionalBlackoutFlag["NO_REGIONAL_BLACKOUT"] = "NO_REGIONAL_BLACKOUT";
    Scte35NoRegionalBlackoutFlag["REGIONAL_BLACKOUT"] = "REGIONAL_BLACKOUT";
})(Scte35NoRegionalBlackoutFlag || (Scte35NoRegionalBlackoutFlag = {}));
export var Scte35WebDeliveryAllowedFlag;
(function (Scte35WebDeliveryAllowedFlag) {
    Scte35WebDeliveryAllowedFlag["WEB_DELIVERY_ALLOWED"] = "WEB_DELIVERY_ALLOWED";
    Scte35WebDeliveryAllowedFlag["WEB_DELIVERY_NOT_ALLOWED"] = "WEB_DELIVERY_NOT_ALLOWED";
})(Scte35WebDeliveryAllowedFlag || (Scte35WebDeliveryAllowedFlag = {}));
export var Scte35DeliveryRestrictions;
(function (Scte35DeliveryRestrictions) {
    /**
     * @internal
     */
    Scte35DeliveryRestrictions.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(Scte35DeliveryRestrictions || (Scte35DeliveryRestrictions = {}));
export var Scte35SegmentationCancelIndicator;
(function (Scte35SegmentationCancelIndicator) {
    Scte35SegmentationCancelIndicator["SEGMENTATION_EVENT_CANCELED"] = "SEGMENTATION_EVENT_CANCELED";
    Scte35SegmentationCancelIndicator["SEGMENTATION_EVENT_NOT_CANCELED"] = "SEGMENTATION_EVENT_NOT_CANCELED";
})(Scte35SegmentationCancelIndicator || (Scte35SegmentationCancelIndicator = {}));
export var Scte35SegmentationDescriptor;
(function (Scte35SegmentationDescriptor) {
    /**
     * @internal
     */
    Scte35SegmentationDescriptor.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(Scte35SegmentationDescriptor || (Scte35SegmentationDescriptor = {}));
export var Scte35DescriptorSettings;
(function (Scte35DescriptorSettings) {
    /**
     * @internal
     */
    Scte35DescriptorSettings.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(Scte35DescriptorSettings || (Scte35DescriptorSettings = {}));
export var Scte35Descriptor;
(function (Scte35Descriptor) {
    /**
     * @internal
     */
    Scte35Descriptor.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(Scte35Descriptor || (Scte35Descriptor = {}));
export var Scte35TimeSignalScheduleActionSettings;
(function (Scte35TimeSignalScheduleActionSettings) {
    /**
     * @internal
     */
    Scte35TimeSignalScheduleActionSettings.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(Scte35TimeSignalScheduleActionSettings || (Scte35TimeSignalScheduleActionSettings = {}));
export var StaticImageActivateScheduleActionSettings;
(function (StaticImageActivateScheduleActionSettings) {
    /**
     * @internal
     */
    StaticImageActivateScheduleActionSettings.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(StaticImageActivateScheduleActionSettings || (StaticImageActivateScheduleActionSettings = {}));
export var StaticImageDeactivateScheduleActionSettings;
(function (StaticImageDeactivateScheduleActionSettings) {
    /**
     * @internal
     */
    StaticImageDeactivateScheduleActionSettings.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(StaticImageDeactivateScheduleActionSettings || (StaticImageDeactivateScheduleActionSettings = {}));
export var ScheduleActionSettings;
(function (ScheduleActionSettings) {
    /**
     * @internal
     */
    ScheduleActionSettings.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(ScheduleActionSettings || (ScheduleActionSettings = {}));
export var FixedModeScheduleActionStartSettings;
(function (FixedModeScheduleActionStartSettings) {
    /**
     * @internal
     */
    FixedModeScheduleActionStartSettings.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(FixedModeScheduleActionStartSettings || (FixedModeScheduleActionStartSettings = {}));
export var FollowPoint;
(function (FollowPoint) {
    FollowPoint["END"] = "END";
    FollowPoint["START"] = "START";
})(FollowPoint || (FollowPoint = {}));
export var FollowModeScheduleActionStartSettings;
(function (FollowModeScheduleActionStartSettings) {
    /**
     * @internal
     */
    FollowModeScheduleActionStartSettings.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(FollowModeScheduleActionStartSettings || (FollowModeScheduleActionStartSettings = {}));
export var ImmediateModeScheduleActionStartSettings;
(function (ImmediateModeScheduleActionStartSettings) {
    /**
     * @internal
     */
    ImmediateModeScheduleActionStartSettings.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(ImmediateModeScheduleActionStartSettings || (ImmediateModeScheduleActionStartSettings = {}));
export var ScheduleActionStartSettings;
(function (ScheduleActionStartSettings) {
    /**
     * @internal
     */
    ScheduleActionStartSettings.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(ScheduleActionStartSettings || (ScheduleActionStartSettings = {}));
export var ScheduleAction;
(function (ScheduleAction) {
    /**
     * @internal
     */
    ScheduleAction.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(ScheduleAction || (ScheduleAction = {}));
export var InputDeviceTransferType;
(function (InputDeviceTransferType) {
    InputDeviceTransferType["INCOMING"] = "INCOMING";
    InputDeviceTransferType["OUTGOING"] = "OUTGOING";
})(InputDeviceTransferType || (InputDeviceTransferType = {}));
export var TransferringInputDeviceSummary;
(function (TransferringInputDeviceSummary) {
    /**
     * @internal
     */
    TransferringInputDeviceSummary.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(TransferringInputDeviceSummary || (TransferringInputDeviceSummary = {}));
export var ValidationError;
(function (ValidationError) {
    /**
     * @internal
     */
    ValidationError.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(ValidationError || (ValidationError = {}));
export var FrameCaptureIntervalUnit;
(function (FrameCaptureIntervalUnit) {
    FrameCaptureIntervalUnit["MILLISECONDS"] = "MILLISECONDS";
    FrameCaptureIntervalUnit["SECONDS"] = "SECONDS";
})(FrameCaptureIntervalUnit || (FrameCaptureIntervalUnit = {}));
export var FrameCaptureSettings;
(function (FrameCaptureSettings) {
    /**
     * @internal
     */
    FrameCaptureSettings.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(FrameCaptureSettings || (FrameCaptureSettings = {}));
export var H264AdaptiveQuantization;
(function (H264AdaptiveQuantization) {
    H264AdaptiveQuantization["HIGH"] = "HIGH";
    H264AdaptiveQuantization["HIGHER"] = "HIGHER";
    H264AdaptiveQuantization["LOW"] = "LOW";
    H264AdaptiveQuantization["MAX"] = "MAX";
    H264AdaptiveQuantization["MEDIUM"] = "MEDIUM";
    H264AdaptiveQuantization["OFF"] = "OFF";
})(H264AdaptiveQuantization || (H264AdaptiveQuantization = {}));
export var AfdSignaling;
(function (AfdSignaling) {
    AfdSignaling["AUTO"] = "AUTO";
    AfdSignaling["FIXED"] = "FIXED";
    AfdSignaling["NONE"] = "NONE";
})(AfdSignaling || (AfdSignaling = {}));
export var H264ColorMetadata;
(function (H264ColorMetadata) {
    H264ColorMetadata["IGNORE"] = "IGNORE";
    H264ColorMetadata["INSERT"] = "INSERT";
})(H264ColorMetadata || (H264ColorMetadata = {}));
export var ColorSpacePassthroughSettings;
(function (ColorSpacePassthroughSettings) {
    /**
     * @internal
     */
    ColorSpacePassthroughSettings.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(ColorSpacePassthroughSettings || (ColorSpacePassthroughSettings = {}));
export var Rec601Settings;
(function (Rec601Settings) {
    /**
     * @internal
     */
    Rec601Settings.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(Rec601Settings || (Rec601Settings = {}));
export var Rec709Settings;
(function (Rec709Settings) {
    /**
     * @internal
     */
    Rec709Settings.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(Rec709Settings || (Rec709Settings = {}));
export var H264ColorSpaceSettings;
(function (H264ColorSpaceSettings) {
    /**
     * @internal
     */
    H264ColorSpaceSettings.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(H264ColorSpaceSettings || (H264ColorSpaceSettings = {}));
export var H264EntropyEncoding;
(function (H264EntropyEncoding) {
    H264EntropyEncoding["CABAC"] = "CABAC";
    H264EntropyEncoding["CAVLC"] = "CAVLC";
})(H264EntropyEncoding || (H264EntropyEncoding = {}));
export var TemporalFilterPostFilterSharpening;
(function (TemporalFilterPostFilterSharpening) {
    TemporalFilterPostFilterSharpening["AUTO"] = "AUTO";
    TemporalFilterPostFilterSharpening["DISABLED"] = "DISABLED";
    TemporalFilterPostFilterSharpening["ENABLED"] = "ENABLED";
})(TemporalFilterPostFilterSharpening || (TemporalFilterPostFilterSharpening = {}));
export var TemporalFilterStrength;
(function (TemporalFilterStrength) {
    TemporalFilterStrength["AUTO"] = "AUTO";
    TemporalFilterStrength["STRENGTH_1"] = "STRENGTH_1";
    TemporalFilterStrength["STRENGTH_10"] = "STRENGTH_10";
    TemporalFilterStrength["STRENGTH_11"] = "STRENGTH_11";
    TemporalFilterStrength["STRENGTH_12"] = "STRENGTH_12";
    TemporalFilterStrength["STRENGTH_13"] = "STRENGTH_13";
    TemporalFilterStrength["STRENGTH_14"] = "STRENGTH_14";
    TemporalFilterStrength["STRENGTH_15"] = "STRENGTH_15";
    TemporalFilterStrength["STRENGTH_16"] = "STRENGTH_16";
    TemporalFilterStrength["STRENGTH_2"] = "STRENGTH_2";
    TemporalFilterStrength["STRENGTH_3"] = "STRENGTH_3";
    TemporalFilterStrength["STRENGTH_4"] = "STRENGTH_4";
    TemporalFilterStrength["STRENGTH_5"] = "STRENGTH_5";
    TemporalFilterStrength["STRENGTH_6"] = "STRENGTH_6";
    TemporalFilterStrength["STRENGTH_7"] = "STRENGTH_7";
    TemporalFilterStrength["STRENGTH_8"] = "STRENGTH_8";
    TemporalFilterStrength["STRENGTH_9"] = "STRENGTH_9";
})(TemporalFilterStrength || (TemporalFilterStrength = {}));
export var TemporalFilterSettings;
(function (TemporalFilterSettings) {
    /**
     * @internal
     */
    TemporalFilterSettings.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(TemporalFilterSettings || (TemporalFilterSettings = {}));
export var H264FilterSettings;
(function (H264FilterSettings) {
    /**
     * @internal
     */
    H264FilterSettings.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(H264FilterSettings || (H264FilterSettings = {}));
export var FixedAfd;
(function (FixedAfd) {
    FixedAfd["AFD_0000"] = "AFD_0000";
    FixedAfd["AFD_0010"] = "AFD_0010";
    FixedAfd["AFD_0011"] = "AFD_0011";
    FixedAfd["AFD_0100"] = "AFD_0100";
    FixedAfd["AFD_1000"] = "AFD_1000";
    FixedAfd["AFD_1001"] = "AFD_1001";
    FixedAfd["AFD_1010"] = "AFD_1010";
    FixedAfd["AFD_1011"] = "AFD_1011";
    FixedAfd["AFD_1101"] = "AFD_1101";
    FixedAfd["AFD_1110"] = "AFD_1110";
    FixedAfd["AFD_1111"] = "AFD_1111";
})(FixedAfd || (FixedAfd = {}));
export var H264FlickerAq;
(function (H264FlickerAq) {
    H264FlickerAq["DISABLED"] = "DISABLED";
    H264FlickerAq["ENABLED"] = "ENABLED";
})(H264FlickerAq || (H264FlickerAq = {}));
export var H264ForceFieldPictures;
(function (H264ForceFieldPictures) {
    H264ForceFieldPictures["DISABLED"] = "DISABLED";
    H264ForceFieldPictures["ENABLED"] = "ENABLED";
})(H264ForceFieldPictures || (H264ForceFieldPictures = {}));
export var H264FramerateControl;
(function (H264FramerateControl) {
    H264FramerateControl["INITIALIZE_FROM_SOURCE"] = "INITIALIZE_FROM_SOURCE";
    H264FramerateControl["SPECIFIED"] = "SPECIFIED";
})(H264FramerateControl || (H264FramerateControl = {}));
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
export var H264Level;
(function (H264Level) {
    H264Level["H264_LEVEL_1"] = "H264_LEVEL_1";
    H264Level["H264_LEVEL_1_1"] = "H264_LEVEL_1_1";
    H264Level["H264_LEVEL_1_2"] = "H264_LEVEL_1_2";
    H264Level["H264_LEVEL_1_3"] = "H264_LEVEL_1_3";
    H264Level["H264_LEVEL_2"] = "H264_LEVEL_2";
    H264Level["H264_LEVEL_2_1"] = "H264_LEVEL_2_1";
    H264Level["H264_LEVEL_2_2"] = "H264_LEVEL_2_2";
    H264Level["H264_LEVEL_3"] = "H264_LEVEL_3";
    H264Level["H264_LEVEL_3_1"] = "H264_LEVEL_3_1";
    H264Level["H264_LEVEL_3_2"] = "H264_LEVEL_3_2";
    H264Level["H264_LEVEL_4"] = "H264_LEVEL_4";
    H264Level["H264_LEVEL_4_1"] = "H264_LEVEL_4_1";
    H264Level["H264_LEVEL_4_2"] = "H264_LEVEL_4_2";
    H264Level["H264_LEVEL_5"] = "H264_LEVEL_5";
    H264Level["H264_LEVEL_5_1"] = "H264_LEVEL_5_1";
    H264Level["H264_LEVEL_5_2"] = "H264_LEVEL_5_2";
    H264Level["H264_LEVEL_AUTO"] = "H264_LEVEL_AUTO";
})(H264Level || (H264Level = {}));
export var H264LookAheadRateControl;
(function (H264LookAheadRateControl) {
    H264LookAheadRateControl["HIGH"] = "HIGH";
    H264LookAheadRateControl["LOW"] = "LOW";
    H264LookAheadRateControl["MEDIUM"] = "MEDIUM";
})(H264LookAheadRateControl || (H264LookAheadRateControl = {}));
export var H264ParControl;
(function (H264ParControl) {
    H264ParControl["INITIALIZE_FROM_SOURCE"] = "INITIALIZE_FROM_SOURCE";
    H264ParControl["SPECIFIED"] = "SPECIFIED";
})(H264ParControl || (H264ParControl = {}));
export var H264Profile;
(function (H264Profile) {
    H264Profile["BASELINE"] = "BASELINE";
    H264Profile["HIGH"] = "HIGH";
    H264Profile["HIGH_10BIT"] = "HIGH_10BIT";
    H264Profile["HIGH_422"] = "HIGH_422";
    H264Profile["HIGH_422_10BIT"] = "HIGH_422_10BIT";
    H264Profile["MAIN"] = "MAIN";
})(H264Profile || (H264Profile = {}));
export var H264QualityLevel;
(function (H264QualityLevel) {
    H264QualityLevel["ENHANCED_QUALITY"] = "ENHANCED_QUALITY";
    H264QualityLevel["STANDARD_QUALITY"] = "STANDARD_QUALITY";
})(H264QualityLevel || (H264QualityLevel = {}));
export var H264RateControlMode;
(function (H264RateControlMode) {
    H264RateControlMode["CBR"] = "CBR";
    H264RateControlMode["MULTIPLEX"] = "MULTIPLEX";
    H264RateControlMode["QVBR"] = "QVBR";
    H264RateControlMode["VBR"] = "VBR";
})(H264RateControlMode || (H264RateControlMode = {}));
export var H264ScanType;
(function (H264ScanType) {
    H264ScanType["INTERLACED"] = "INTERLACED";
    H264ScanType["PROGRESSIVE"] = "PROGRESSIVE";
})(H264ScanType || (H264ScanType = {}));
export var H264SceneChangeDetect;
(function (H264SceneChangeDetect) {
    H264SceneChangeDetect["DISABLED"] = "DISABLED";
    H264SceneChangeDetect["ENABLED"] = "ENABLED";
})(H264SceneChangeDetect || (H264SceneChangeDetect = {}));
export var H264SpatialAq;
(function (H264SpatialAq) {
    H264SpatialAq["DISABLED"] = "DISABLED";
    H264SpatialAq["ENABLED"] = "ENABLED";
})(H264SpatialAq || (H264SpatialAq = {}));
export var H264SubGopLength;
(function (H264SubGopLength) {
    H264SubGopLength["DYNAMIC"] = "DYNAMIC";
    H264SubGopLength["FIXED"] = "FIXED";
})(H264SubGopLength || (H264SubGopLength = {}));
export var H264Syntax;
(function (H264Syntax) {
    H264Syntax["DEFAULT"] = "DEFAULT";
    H264Syntax["RP2027"] = "RP2027";
})(H264Syntax || (H264Syntax = {}));
export var H264TemporalAq;
(function (H264TemporalAq) {
    H264TemporalAq["DISABLED"] = "DISABLED";
    H264TemporalAq["ENABLED"] = "ENABLED";
})(H264TemporalAq || (H264TemporalAq = {}));
export var H264TimecodeInsertionBehavior;
(function (H264TimecodeInsertionBehavior) {
    H264TimecodeInsertionBehavior["DISABLED"] = "DISABLED";
    H264TimecodeInsertionBehavior["PIC_TIMING_SEI"] = "PIC_TIMING_SEI";
})(H264TimecodeInsertionBehavior || (H264TimecodeInsertionBehavior = {}));
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
export var H265AlternativeTransferFunction;
(function (H265AlternativeTransferFunction) {
    H265AlternativeTransferFunction["INSERT"] = "INSERT";
    H265AlternativeTransferFunction["OMIT"] = "OMIT";
})(H265AlternativeTransferFunction || (H265AlternativeTransferFunction = {}));
export var H265ColorMetadata;
(function (H265ColorMetadata) {
    H265ColorMetadata["IGNORE"] = "IGNORE";
    H265ColorMetadata["INSERT"] = "INSERT";
})(H265ColorMetadata || (H265ColorMetadata = {}));
export var H265ColorSpaceSettings;
(function (H265ColorSpaceSettings) {
    /**
     * @internal
     */
    H265ColorSpaceSettings.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(H265ColorSpaceSettings || (H265ColorSpaceSettings = {}));
export var H265FilterSettings;
(function (H265FilterSettings) {
    /**
     * @internal
     */
    H265FilterSettings.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(H265FilterSettings || (H265FilterSettings = {}));
export var H265FlickerAq;
(function (H265FlickerAq) {
    H265FlickerAq["DISABLED"] = "DISABLED";
    H265FlickerAq["ENABLED"] = "ENABLED";
})(H265FlickerAq || (H265FlickerAq = {}));
export var H265GopSizeUnits;
(function (H265GopSizeUnits) {
    H265GopSizeUnits["FRAMES"] = "FRAMES";
    H265GopSizeUnits["SECONDS"] = "SECONDS";
})(H265GopSizeUnits || (H265GopSizeUnits = {}));
export var H265Level;
(function (H265Level) {
    H265Level["H265_LEVEL_1"] = "H265_LEVEL_1";
    H265Level["H265_LEVEL_2"] = "H265_LEVEL_2";
    H265Level["H265_LEVEL_2_1"] = "H265_LEVEL_2_1";
    H265Level["H265_LEVEL_3"] = "H265_LEVEL_3";
    H265Level["H265_LEVEL_3_1"] = "H265_LEVEL_3_1";
    H265Level["H265_LEVEL_4"] = "H265_LEVEL_4";
    H265Level["H265_LEVEL_4_1"] = "H265_LEVEL_4_1";
    H265Level["H265_LEVEL_5"] = "H265_LEVEL_5";
    H265Level["H265_LEVEL_5_1"] = "H265_LEVEL_5_1";
    H265Level["H265_LEVEL_5_2"] = "H265_LEVEL_5_2";
    H265Level["H265_LEVEL_6"] = "H265_LEVEL_6";
    H265Level["H265_LEVEL_6_1"] = "H265_LEVEL_6_1";
    H265Level["H265_LEVEL_6_2"] = "H265_LEVEL_6_2";
    H265Level["H265_LEVEL_AUTO"] = "H265_LEVEL_AUTO";
})(H265Level || (H265Level = {}));
export var H265LookAheadRateControl;
(function (H265LookAheadRateControl) {
    H265LookAheadRateControl["HIGH"] = "HIGH";
    H265LookAheadRateControl["LOW"] = "LOW";
    H265LookAheadRateControl["MEDIUM"] = "MEDIUM";
})(H265LookAheadRateControl || (H265LookAheadRateControl = {}));
export var H265Profile;
(function (H265Profile) {
    H265Profile["MAIN"] = "MAIN";
    H265Profile["MAIN_10BIT"] = "MAIN_10BIT";
})(H265Profile || (H265Profile = {}));
export var H265RateControlMode;
(function (H265RateControlMode) {
    H265RateControlMode["CBR"] = "CBR";
    H265RateControlMode["MULTIPLEX"] = "MULTIPLEX";
    H265RateControlMode["QVBR"] = "QVBR";
})(H265RateControlMode || (H265RateControlMode = {}));
export var H265ScanType;
(function (H265ScanType) {
    H265ScanType["INTERLACED"] = "INTERLACED";
    H265ScanType["PROGRESSIVE"] = "PROGRESSIVE";
})(H265ScanType || (H265ScanType = {}));
export var H265SceneChangeDetect;
(function (H265SceneChangeDetect) {
    H265SceneChangeDetect["DISABLED"] = "DISABLED";
    H265SceneChangeDetect["ENABLED"] = "ENABLED";
})(H265SceneChangeDetect || (H265SceneChangeDetect = {}));
export var H265Tier;
(function (H265Tier) {
    H265Tier["HIGH"] = "HIGH";
    H265Tier["MAIN"] = "MAIN";
})(H265Tier || (H265Tier = {}));
export var H265TimecodeInsertionBehavior;
(function (H265TimecodeInsertionBehavior) {
    H265TimecodeInsertionBehavior["DISABLED"] = "DISABLED";
    H265TimecodeInsertionBehavior["PIC_TIMING_SEI"] = "PIC_TIMING_SEI";
})(H265TimecodeInsertionBehavior || (H265TimecodeInsertionBehavior = {}));
export var H265Settings;
(function (H265Settings) {
    /**
     * @internal
     */
    H265Settings.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(H265Settings || (H265Settings = {}));
export var Mpeg2AdaptiveQuantization;
(function (Mpeg2AdaptiveQuantization) {
    Mpeg2AdaptiveQuantization["AUTO"] = "AUTO";
    Mpeg2AdaptiveQuantization["HIGH"] = "HIGH";
    Mpeg2AdaptiveQuantization["LOW"] = "LOW";
    Mpeg2AdaptiveQuantization["MEDIUM"] = "MEDIUM";
    Mpeg2AdaptiveQuantization["OFF"] = "OFF";
})(Mpeg2AdaptiveQuantization || (Mpeg2AdaptiveQuantization = {}));
export var Mpeg2ColorMetadata;
(function (Mpeg2ColorMetadata) {
    Mpeg2ColorMetadata["IGNORE"] = "IGNORE";
    Mpeg2ColorMetadata["INSERT"] = "INSERT";
})(Mpeg2ColorMetadata || (Mpeg2ColorMetadata = {}));
export var Mpeg2ColorSpace;
(function (Mpeg2ColorSpace) {
    Mpeg2ColorSpace["AUTO"] = "AUTO";
    Mpeg2ColorSpace["PASSTHROUGH"] = "PASSTHROUGH";
})(Mpeg2ColorSpace || (Mpeg2ColorSpace = {}));
export var Mpeg2DisplayRatio;
(function (Mpeg2DisplayRatio) {
    Mpeg2DisplayRatio["DISPLAYRATIO16X9"] = "DISPLAYRATIO16X9";
    Mpeg2DisplayRatio["DISPLAYRATIO4X3"] = "DISPLAYRATIO4X3";
})(Mpeg2DisplayRatio || (Mpeg2DisplayRatio = {}));
export var Mpeg2FilterSettings;
(function (Mpeg2FilterSettings) {
    /**
     * @internal
     */
    Mpeg2FilterSettings.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(Mpeg2FilterSettings || (Mpeg2FilterSettings = {}));
export var Mpeg2GopSizeUnits;
(function (Mpeg2GopSizeUnits) {
    Mpeg2GopSizeUnits["FRAMES"] = "FRAMES";
    Mpeg2GopSizeUnits["SECONDS"] = "SECONDS";
})(Mpeg2GopSizeUnits || (Mpeg2GopSizeUnits = {}));
export var Mpeg2ScanType;
(function (Mpeg2ScanType) {
    Mpeg2ScanType["INTERLACED"] = "INTERLACED";
    Mpeg2ScanType["PROGRESSIVE"] = "PROGRESSIVE";
})(Mpeg2ScanType || (Mpeg2ScanType = {}));
export var Mpeg2SubGopLength;
(function (Mpeg2SubGopLength) {
    Mpeg2SubGopLength["DYNAMIC"] = "DYNAMIC";
    Mpeg2SubGopLength["FIXED"] = "FIXED";
})(Mpeg2SubGopLength || (Mpeg2SubGopLength = {}));
export var Mpeg2TimecodeInsertionBehavior;
(function (Mpeg2TimecodeInsertionBehavior) {
    Mpeg2TimecodeInsertionBehavior["DISABLED"] = "DISABLED";
    Mpeg2TimecodeInsertionBehavior["GOP_TIMECODE"] = "GOP_TIMECODE";
})(Mpeg2TimecodeInsertionBehavior || (Mpeg2TimecodeInsertionBehavior = {}));
export var Mpeg2Settings;
(function (Mpeg2Settings) {
    /**
     * @internal
     */
    Mpeg2Settings.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(Mpeg2Settings || (Mpeg2Settings = {}));
export var VideoCodecSettings;
(function (VideoCodecSettings) {
    /**
     * @internal
     */
    VideoCodecSettings.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(VideoCodecSettings || (VideoCodecSettings = {}));
export var VideoDescriptionRespondToAfd;
(function (VideoDescriptionRespondToAfd) {
    VideoDescriptionRespondToAfd["NONE"] = "NONE";
    VideoDescriptionRespondToAfd["PASSTHROUGH"] = "PASSTHROUGH";
    VideoDescriptionRespondToAfd["RESPOND"] = "RESPOND";
})(VideoDescriptionRespondToAfd || (VideoDescriptionRespondToAfd = {}));
export var VideoDescriptionScalingBehavior;
(function (VideoDescriptionScalingBehavior) {
    VideoDescriptionScalingBehavior["DEFAULT"] = "DEFAULT";
    VideoDescriptionScalingBehavior["STRETCH_TO_OUTPUT"] = "STRETCH_TO_OUTPUT";
})(VideoDescriptionScalingBehavior || (VideoDescriptionScalingBehavior = {}));
export var VideoDescription;
(function (VideoDescription) {
    /**
     * @internal
     */
    VideoDescription.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(VideoDescription || (VideoDescription = {}));
export var AcceptHeader;
(function (AcceptHeader) {
    AcceptHeader["image_jpeg"] = "image/jpeg";
})(AcceptHeader || (AcceptHeader = {}));
export var AcceptInputDeviceTransferRequest;
(function (AcceptInputDeviceTransferRequest) {
    /**
     * @internal
     */
    AcceptInputDeviceTransferRequest.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(AcceptInputDeviceTransferRequest || (AcceptInputDeviceTransferRequest = {}));
export var AcceptInputDeviceTransferResponse;
(function (AcceptInputDeviceTransferResponse) {
    /**
     * @internal
     */
    AcceptInputDeviceTransferResponse.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(AcceptInputDeviceTransferResponse || (AcceptInputDeviceTransferResponse = {}));
export var BadGatewayException;
(function (BadGatewayException) {
    /**
     * @internal
     */
    BadGatewayException.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(BadGatewayException || (BadGatewayException = {}));
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
export var GatewayTimeoutException;
(function (GatewayTimeoutException) {
    /**
     * @internal
     */
    GatewayTimeoutException.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(GatewayTimeoutException || (GatewayTimeoutException = {}));
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
export var UnprocessableEntityException;
(function (UnprocessableEntityException) {
    /**
     * @internal
     */
    UnprocessableEntityException.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(UnprocessableEntityException || (UnprocessableEntityException = {}));
export var AvailBlankingState;
(function (AvailBlankingState) {
    AvailBlankingState["DISABLED"] = "DISABLED";
    AvailBlankingState["ENABLED"] = "ENABLED";
})(AvailBlankingState || (AvailBlankingState = {}));
export var AvailBlanking;
(function (AvailBlanking) {
    /**
     * @internal
     */
    AvailBlanking.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(AvailBlanking || (AvailBlanking = {}));
export var Scte35SpliceInsertNoRegionalBlackoutBehavior;
(function (Scte35SpliceInsertNoRegionalBlackoutBehavior) {
    Scte35SpliceInsertNoRegionalBlackoutBehavior["FOLLOW"] = "FOLLOW";
    Scte35SpliceInsertNoRegionalBlackoutBehavior["IGNORE"] = "IGNORE";
})(Scte35SpliceInsertNoRegionalBlackoutBehavior || (Scte35SpliceInsertNoRegionalBlackoutBehavior = {}));
export var Scte35SpliceInsertWebDeliveryAllowedBehavior;
(function (Scte35SpliceInsertWebDeliveryAllowedBehavior) {
    Scte35SpliceInsertWebDeliveryAllowedBehavior["FOLLOW"] = "FOLLOW";
    Scte35SpliceInsertWebDeliveryAllowedBehavior["IGNORE"] = "IGNORE";
})(Scte35SpliceInsertWebDeliveryAllowedBehavior || (Scte35SpliceInsertWebDeliveryAllowedBehavior = {}));
export var Scte35SpliceInsert;
(function (Scte35SpliceInsert) {
    /**
     * @internal
     */
    Scte35SpliceInsert.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(Scte35SpliceInsert || (Scte35SpliceInsert = {}));
export var Scte35AposNoRegionalBlackoutBehavior;
(function (Scte35AposNoRegionalBlackoutBehavior) {
    Scte35AposNoRegionalBlackoutBehavior["FOLLOW"] = "FOLLOW";
    Scte35AposNoRegionalBlackoutBehavior["IGNORE"] = "IGNORE";
})(Scte35AposNoRegionalBlackoutBehavior || (Scte35AposNoRegionalBlackoutBehavior = {}));
export var Scte35AposWebDeliveryAllowedBehavior;
(function (Scte35AposWebDeliveryAllowedBehavior) {
    Scte35AposWebDeliveryAllowedBehavior["FOLLOW"] = "FOLLOW";
    Scte35AposWebDeliveryAllowedBehavior["IGNORE"] = "IGNORE";
})(Scte35AposWebDeliveryAllowedBehavior || (Scte35AposWebDeliveryAllowedBehavior = {}));
export var Scte35TimeSignalApos;
(function (Scte35TimeSignalApos) {
    /**
     * @internal
     */
    Scte35TimeSignalApos.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(Scte35TimeSignalApos || (Scte35TimeSignalApos = {}));
export var AvailSettings;
(function (AvailSettings) {
    /**
     * @internal
     */
    AvailSettings.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(AvailSettings || (AvailSettings = {}));
export var AvailConfiguration;
(function (AvailConfiguration) {
    /**
     * @internal
     */
    AvailConfiguration.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(AvailConfiguration || (AvailConfiguration = {}));
export var BatchDeleteRequest;
(function (BatchDeleteRequest) {
    /**
     * @internal
     */
    BatchDeleteRequest.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(BatchDeleteRequest || (BatchDeleteRequest = {}));
export var BatchDeleteResponse;
(function (BatchDeleteResponse) {
    /**
     * @internal
     */
    BatchDeleteResponse.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(BatchDeleteResponse || (BatchDeleteResponse = {}));
export var BatchScheduleActionCreateRequest;
(function (BatchScheduleActionCreateRequest) {
    /**
     * @internal
     */
    BatchScheduleActionCreateRequest.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(BatchScheduleActionCreateRequest || (BatchScheduleActionCreateRequest = {}));
export var BatchScheduleActionCreateResult;
(function (BatchScheduleActionCreateResult) {
    /**
     * @internal
     */
    BatchScheduleActionCreateResult.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(BatchScheduleActionCreateResult || (BatchScheduleActionCreateResult = {}));
export var BatchScheduleActionDeleteRequest;
(function (BatchScheduleActionDeleteRequest) {
    /**
     * @internal
     */
    BatchScheduleActionDeleteRequest.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(BatchScheduleActionDeleteRequest || (BatchScheduleActionDeleteRequest = {}));
export var BatchScheduleActionDeleteResult;
(function (BatchScheduleActionDeleteResult) {
    /**
     * @internal
     */
    BatchScheduleActionDeleteResult.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(BatchScheduleActionDeleteResult || (BatchScheduleActionDeleteResult = {}));
export var BatchStartRequest;
(function (BatchStartRequest) {
    /**
     * @internal
     */
    BatchStartRequest.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(BatchStartRequest || (BatchStartRequest = {}));
export var BatchStartResponse;
(function (BatchStartResponse) {
    /**
     * @internal
     */
    BatchStartResponse.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(BatchStartResponse || (BatchStartResponse = {}));
export var BatchStopRequest;
(function (BatchStopRequest) {
    /**
     * @internal
     */
    BatchStopRequest.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(BatchStopRequest || (BatchStopRequest = {}));
export var BatchStopResponse;
(function (BatchStopResponse) {
    /**
     * @internal
     */
    BatchStopResponse.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(BatchStopResponse || (BatchStopResponse = {}));
export var BatchUpdateScheduleRequest;
(function (BatchUpdateScheduleRequest) {
    /**
     * @internal
     */
    BatchUpdateScheduleRequest.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(BatchUpdateScheduleRequest || (BatchUpdateScheduleRequest = {}));
export var BatchUpdateScheduleResponse;
(function (BatchUpdateScheduleResponse) {
    /**
     * @internal
     */
    BatchUpdateScheduleResponse.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(BatchUpdateScheduleResponse || (BatchUpdateScheduleResponse = {}));
export var BlackoutSlateNetworkEndBlackout;
(function (BlackoutSlateNetworkEndBlackout) {
    BlackoutSlateNetworkEndBlackout["DISABLED"] = "DISABLED";
    BlackoutSlateNetworkEndBlackout["ENABLED"] = "ENABLED";
})(BlackoutSlateNetworkEndBlackout || (BlackoutSlateNetworkEndBlackout = {}));
export var BlackoutSlateState;
(function (BlackoutSlateState) {
    BlackoutSlateState["DISABLED"] = "DISABLED";
    BlackoutSlateState["ENABLED"] = "ENABLED";
})(BlackoutSlateState || (BlackoutSlateState = {}));
export var BlackoutSlate;
(function (BlackoutSlate) {
    /**
     * @internal
     */
    BlackoutSlate.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(BlackoutSlate || (BlackoutSlate = {}));
export var CancelInputDeviceTransferRequest;
(function (CancelInputDeviceTransferRequest) {
    /**
     * @internal
     */
    CancelInputDeviceTransferRequest.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(CancelInputDeviceTransferRequest || (CancelInputDeviceTransferRequest = {}));
export var CancelInputDeviceTransferResponse;
(function (CancelInputDeviceTransferResponse) {
    /**
     * @internal
     */
    CancelInputDeviceTransferResponse.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(CancelInputDeviceTransferResponse || (CancelInputDeviceTransferResponse = {}));
export var FeatureActivationsInputPrepareScheduleActions;
(function (FeatureActivationsInputPrepareScheduleActions) {
    FeatureActivationsInputPrepareScheduleActions["DISABLED"] = "DISABLED";
    FeatureActivationsInputPrepareScheduleActions["ENABLED"] = "ENABLED";
})(FeatureActivationsInputPrepareScheduleActions || (FeatureActivationsInputPrepareScheduleActions = {}));
export var FeatureActivations;
(function (FeatureActivations) {
    /**
     * @internal
     */
    FeatureActivations.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(FeatureActivations || (FeatureActivations = {}));
export var GlobalConfigurationInputEndAction;
(function (GlobalConfigurationInputEndAction) {
    GlobalConfigurationInputEndAction["NONE"] = "NONE";
    GlobalConfigurationInputEndAction["SWITCH_AND_LOOP_INPUTS"] = "SWITCH_AND_LOOP_INPUTS";
})(GlobalConfigurationInputEndAction || (GlobalConfigurationInputEndAction = {}));
export var InputLossImageType;
(function (InputLossImageType) {
    InputLossImageType["COLOR"] = "COLOR";
    InputLossImageType["SLATE"] = "SLATE";
})(InputLossImageType || (InputLossImageType = {}));
export var InputLossBehavior;
(function (InputLossBehavior) {
    /**
     * @internal
     */
    InputLossBehavior.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(InputLossBehavior || (InputLossBehavior = {}));
export var GlobalConfigurationOutputLockingMode;
(function (GlobalConfigurationOutputLockingMode) {
    GlobalConfigurationOutputLockingMode["EPOCH_LOCKING"] = "EPOCH_LOCKING";
    GlobalConfigurationOutputLockingMode["PIPELINE_LOCKING"] = "PIPELINE_LOCKING";
})(GlobalConfigurationOutputLockingMode || (GlobalConfigurationOutputLockingMode = {}));
export var GlobalConfigurationOutputTimingSource;
(function (GlobalConfigurationOutputTimingSource) {
    GlobalConfigurationOutputTimingSource["INPUT_CLOCK"] = "INPUT_CLOCK";
    GlobalConfigurationOutputTimingSource["SYSTEM_CLOCK"] = "SYSTEM_CLOCK";
})(GlobalConfigurationOutputTimingSource || (GlobalConfigurationOutputTimingSource = {}));
export var GlobalConfigurationLowFramerateInputs;
(function (GlobalConfigurationLowFramerateInputs) {
    GlobalConfigurationLowFramerateInputs["DISABLED"] = "DISABLED";
    GlobalConfigurationLowFramerateInputs["ENABLED"] = "ENABLED";
})(GlobalConfigurationLowFramerateInputs || (GlobalConfigurationLowFramerateInputs = {}));
export var GlobalConfiguration;
(function (GlobalConfiguration) {
    /**
     * @internal
     */
    GlobalConfiguration.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(GlobalConfiguration || (GlobalConfiguration = {}));
export var MotionGraphicsInsertion;
(function (MotionGraphicsInsertion) {
    MotionGraphicsInsertion["DISABLED"] = "DISABLED";
    MotionGraphicsInsertion["ENABLED"] = "ENABLED";
})(MotionGraphicsInsertion || (MotionGraphicsInsertion = {}));
export var HtmlMotionGraphicsSettings;
(function (HtmlMotionGraphicsSettings) {
    /**
     * @internal
     */
    HtmlMotionGraphicsSettings.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(HtmlMotionGraphicsSettings || (HtmlMotionGraphicsSettings = {}));
export var MotionGraphicsSettings;
(function (MotionGraphicsSettings) {
    /**
     * @internal
     */
    MotionGraphicsSettings.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(MotionGraphicsSettings || (MotionGraphicsSettings = {}));
export var MotionGraphicsConfiguration;
(function (MotionGraphicsConfiguration) {
    /**
     * @internal
     */
    MotionGraphicsConfiguration.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(MotionGraphicsConfiguration || (MotionGraphicsConfiguration = {}));
export var NielsenPcmToId3TaggingState;
(function (NielsenPcmToId3TaggingState) {
    NielsenPcmToId3TaggingState["DISABLED"] = "DISABLED";
    NielsenPcmToId3TaggingState["ENABLED"] = "ENABLED";
})(NielsenPcmToId3TaggingState || (NielsenPcmToId3TaggingState = {}));
export var NielsenConfiguration;
(function (NielsenConfiguration) {
    /**
     * @internal
     */
    NielsenConfiguration.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(NielsenConfiguration || (NielsenConfiguration = {}));
export var TimecodeConfigSource;
(function (TimecodeConfigSource) {
    TimecodeConfigSource["EMBEDDED"] = "EMBEDDED";
    TimecodeConfigSource["SYSTEMCLOCK"] = "SYSTEMCLOCK";
    TimecodeConfigSource["ZEROBASED"] = "ZEROBASED";
})(TimecodeConfigSource || (TimecodeConfigSource = {}));
export var TimecodeConfig;
(function (TimecodeConfig) {
    /**
     * @internal
     */
    TimecodeConfig.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(TimecodeConfig || (TimecodeConfig = {}));
export var EncoderSettings;
(function (EncoderSettings) {
    /**
     * @internal
     */
    EncoderSettings.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(EncoderSettings || (EncoderSettings = {}));
export var Channel;
(function (Channel) {
    /**
     * @internal
     */
    Channel.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(Channel || (Channel = {}));
export var ContentType;
(function (ContentType) {
    ContentType["image_jpeg"] = "image/jpeg";
})(ContentType || (ContentType = {}));
export var VpcOutputSettings;
(function (VpcOutputSettings) {
    /**
     * @internal
     */
    VpcOutputSettings.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(VpcOutputSettings || (VpcOutputSettings = {}));
export var CreateChannelRequest;
(function (CreateChannelRequest) {
    /**
     * @internal
     */
    CreateChannelRequest.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(CreateChannelRequest || (CreateChannelRequest = {}));
export var CreateChannelResponse;
(function (CreateChannelResponse) {
    /**
     * @internal
     */
    CreateChannelResponse.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(CreateChannelResponse || (CreateChannelResponse = {}));
export var InputVpcRequest;
(function (InputVpcRequest) {
    /**
     * @internal
     */
    InputVpcRequest.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(InputVpcRequest || (InputVpcRequest = {}));
export var CreateInputRequest;
(function (CreateInputRequest) {
    /**
     * @internal
     */
    CreateInputRequest.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(CreateInputRequest || (CreateInputRequest = {}));
export var CreateInputResponse;
(function (CreateInputResponse) {
    /**
     * @internal
     */
    CreateInputResponse.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(CreateInputResponse || (CreateInputResponse = {}));
export var CreateInputSecurityGroupRequest;
(function (CreateInputSecurityGroupRequest) {
    /**
     * @internal
     */
    CreateInputSecurityGroupRequest.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(CreateInputSecurityGroupRequest || (CreateInputSecurityGroupRequest = {}));
export var CreateInputSecurityGroupResponse;
(function (CreateInputSecurityGroupResponse) {
    /**
     * @internal
     */
    CreateInputSecurityGroupResponse.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(CreateInputSecurityGroupResponse || (CreateInputSecurityGroupResponse = {}));
export var MultiplexSettings;
(function (MultiplexSettings) {
    /**
     * @internal
     */
    MultiplexSettings.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(MultiplexSettings || (MultiplexSettings = {}));
export var CreateMultiplexRequest;
(function (CreateMultiplexRequest) {
    /**
     * @internal
     */
    CreateMultiplexRequest.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(CreateMultiplexRequest || (CreateMultiplexRequest = {}));
export var Multiplex;
(function (Multiplex) {
    /**
     * @internal
     */
    Multiplex.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(Multiplex || (Multiplex = {}));
export var CreateMultiplexResponse;
(function (CreateMultiplexResponse) {
    /**
     * @internal
     */
    CreateMultiplexResponse.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(CreateMultiplexResponse || (CreateMultiplexResponse = {}));
export var PreferredChannelPipeline;
(function (PreferredChannelPipeline) {
    PreferredChannelPipeline["CURRENTLY_ACTIVE"] = "CURRENTLY_ACTIVE";
    PreferredChannelPipeline["PIPELINE_0"] = "PIPELINE_0";
    PreferredChannelPipeline["PIPELINE_1"] = "PIPELINE_1";
})(PreferredChannelPipeline || (PreferredChannelPipeline = {}));
export var MultiplexProgramServiceDescriptor;
(function (MultiplexProgramServiceDescriptor) {
    /**
     * @internal
     */
    MultiplexProgramServiceDescriptor.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(MultiplexProgramServiceDescriptor || (MultiplexProgramServiceDescriptor = {}));
export var MultiplexStatmuxVideoSettings;
(function (MultiplexStatmuxVideoSettings) {
    /**
     * @internal
     */
    MultiplexStatmuxVideoSettings.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(MultiplexStatmuxVideoSettings || (MultiplexStatmuxVideoSettings = {}));
export var MultiplexVideoSettings;
(function (MultiplexVideoSettings) {
    /**
     * @internal
     */
    MultiplexVideoSettings.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(MultiplexVideoSettings || (MultiplexVideoSettings = {}));
export var MultiplexProgramSettings;
(function (MultiplexProgramSettings) {
    /**
     * @internal
     */
    MultiplexProgramSettings.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(MultiplexProgramSettings || (MultiplexProgramSettings = {}));
export var CreateMultiplexProgramRequest;
(function (CreateMultiplexProgramRequest) {
    /**
     * @internal
     */
    CreateMultiplexProgramRequest.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(CreateMultiplexProgramRequest || (CreateMultiplexProgramRequest = {}));
export var MultiplexProgramPacketIdentifiersMap;
(function (MultiplexProgramPacketIdentifiersMap) {
    /**
     * @internal
     */
    MultiplexProgramPacketIdentifiersMap.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(MultiplexProgramPacketIdentifiersMap || (MultiplexProgramPacketIdentifiersMap = {}));
export var MultiplexProgram;
(function (MultiplexProgram) {
    /**
     * @internal
     */
    MultiplexProgram.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(MultiplexProgram || (MultiplexProgram = {}));
export var CreateMultiplexProgramResponse;
(function (CreateMultiplexProgramResponse) {
    /**
     * @internal
     */
    CreateMultiplexProgramResponse.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(CreateMultiplexProgramResponse || (CreateMultiplexProgramResponse = {}));
export var CreatePartnerInputRequest;
(function (CreatePartnerInputRequest) {
    /**
     * @internal
     */
    CreatePartnerInputRequest.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(CreatePartnerInputRequest || (CreatePartnerInputRequest = {}));
export var CreatePartnerInputResponse;
(function (CreatePartnerInputResponse) {
    /**
     * @internal
     */
    CreatePartnerInputResponse.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(CreatePartnerInputResponse || (CreatePartnerInputResponse = {}));
export var CreateTagsRequest;
(function (CreateTagsRequest) {
    /**
     * @internal
     */
    CreateTagsRequest.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(CreateTagsRequest || (CreateTagsRequest = {}));
export var DeleteChannelRequest;
(function (DeleteChannelRequest) {
    /**
     * @internal
     */
    DeleteChannelRequest.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(DeleteChannelRequest || (DeleteChannelRequest = {}));
export var DeleteChannelResponse;
(function (DeleteChannelResponse) {
    /**
     * @internal
     */
    DeleteChannelResponse.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(DeleteChannelResponse || (DeleteChannelResponse = {}));
export var DeleteInputRequest;
(function (DeleteInputRequest) {
    /**
     * @internal
     */
    DeleteInputRequest.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(DeleteInputRequest || (DeleteInputRequest = {}));
export var DeleteInputResponse;
(function (DeleteInputResponse) {
    /**
     * @internal
     */
    DeleteInputResponse.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(DeleteInputResponse || (DeleteInputResponse = {}));
export var DeleteInputSecurityGroupRequest;
(function (DeleteInputSecurityGroupRequest) {
    /**
     * @internal
     */
    DeleteInputSecurityGroupRequest.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(DeleteInputSecurityGroupRequest || (DeleteInputSecurityGroupRequest = {}));
export var DeleteInputSecurityGroupResponse;
(function (DeleteInputSecurityGroupResponse) {
    /**
     * @internal
     */
    DeleteInputSecurityGroupResponse.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(DeleteInputSecurityGroupResponse || (DeleteInputSecurityGroupResponse = {}));
export var DeleteMultiplexRequest;
(function (DeleteMultiplexRequest) {
    /**
     * @internal
     */
    DeleteMultiplexRequest.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(DeleteMultiplexRequest || (DeleteMultiplexRequest = {}));
export var DeleteMultiplexResponse;
(function (DeleteMultiplexResponse) {
    /**
     * @internal
     */
    DeleteMultiplexResponse.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(DeleteMultiplexResponse || (DeleteMultiplexResponse = {}));
export var DeleteMultiplexProgramRequest;
(function (DeleteMultiplexProgramRequest) {
    /**
     * @internal
     */
    DeleteMultiplexProgramRequest.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(DeleteMultiplexProgramRequest || (DeleteMultiplexProgramRequest = {}));
export var DeleteMultiplexProgramResponse;
(function (DeleteMultiplexProgramResponse) {
    /**
     * @internal
     */
    DeleteMultiplexProgramResponse.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(DeleteMultiplexProgramResponse || (DeleteMultiplexProgramResponse = {}));
export var DeleteReservationRequest;
(function (DeleteReservationRequest) {
    /**
     * @internal
     */
    DeleteReservationRequest.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(DeleteReservationRequest || (DeleteReservationRequest = {}));
export var DeleteReservationResponse;
(function (DeleteReservationResponse) {
    /**
     * @internal
     */
    DeleteReservationResponse.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(DeleteReservationResponse || (DeleteReservationResponse = {}));
export var DeleteScheduleRequest;
(function (DeleteScheduleRequest) {
    /**
     * @internal
     */
    DeleteScheduleRequest.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(DeleteScheduleRequest || (DeleteScheduleRequest = {}));
export var DeleteScheduleResponse;
(function (DeleteScheduleResponse) {
    /**
     * @internal
     */
    DeleteScheduleResponse.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(DeleteScheduleResponse || (DeleteScheduleResponse = {}));
export var DeleteTagsRequest;
(function (DeleteTagsRequest) {
    /**
     * @internal
     */
    DeleteTagsRequest.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(DeleteTagsRequest || (DeleteTagsRequest = {}));
export var DescribeChannelRequest;
(function (DescribeChannelRequest) {
    /**
     * @internal
     */
    DescribeChannelRequest.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(DescribeChannelRequest || (DescribeChannelRequest = {}));
export var DescribeChannelResponse;
(function (DescribeChannelResponse) {
    /**
     * @internal
     */
    DescribeChannelResponse.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(DescribeChannelResponse || (DescribeChannelResponse = {}));
export var DescribeInputRequest;
(function (DescribeInputRequest) {
    /**
     * @internal
     */
    DescribeInputRequest.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(DescribeInputRequest || (DescribeInputRequest = {}));
export var DescribeInputResponse;
(function (DescribeInputResponse) {
    /**
     * @internal
     */
    DescribeInputResponse.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(DescribeInputResponse || (DescribeInputResponse = {}));
export var DescribeInputDeviceRequest;
(function (DescribeInputDeviceRequest) {
    /**
     * @internal
     */
    DescribeInputDeviceRequest.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(DescribeInputDeviceRequest || (DescribeInputDeviceRequest = {}));
export var DescribeInputDeviceResponse;
(function (DescribeInputDeviceResponse) {
    /**
     * @internal
     */
    DescribeInputDeviceResponse.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(DescribeInputDeviceResponse || (DescribeInputDeviceResponse = {}));
export var DescribeInputDeviceThumbnailRequest;
(function (DescribeInputDeviceThumbnailRequest) {
    /**
     * @internal
     */
    DescribeInputDeviceThumbnailRequest.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(DescribeInputDeviceThumbnailRequest || (DescribeInputDeviceThumbnailRequest = {}));
export var DescribeInputDeviceThumbnailResponse;
(function (DescribeInputDeviceThumbnailResponse) {
    /**
     * @internal
     */
    DescribeInputDeviceThumbnailResponse.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(DescribeInputDeviceThumbnailResponse || (DescribeInputDeviceThumbnailResponse = {}));
export var DescribeInputSecurityGroupRequest;
(function (DescribeInputSecurityGroupRequest) {
    /**
     * @internal
     */
    DescribeInputSecurityGroupRequest.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(DescribeInputSecurityGroupRequest || (DescribeInputSecurityGroupRequest = {}));
export var DescribeInputSecurityGroupResponse;
(function (DescribeInputSecurityGroupResponse) {
    /**
     * @internal
     */
    DescribeInputSecurityGroupResponse.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(DescribeInputSecurityGroupResponse || (DescribeInputSecurityGroupResponse = {}));
export var DescribeMultiplexRequest;
(function (DescribeMultiplexRequest) {
    /**
     * @internal
     */
    DescribeMultiplexRequest.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(DescribeMultiplexRequest || (DescribeMultiplexRequest = {}));
export var DescribeMultiplexResponse;
(function (DescribeMultiplexResponse) {
    /**
     * @internal
     */
    DescribeMultiplexResponse.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(DescribeMultiplexResponse || (DescribeMultiplexResponse = {}));
export var DescribeMultiplexProgramRequest;
(function (DescribeMultiplexProgramRequest) {
    /**
     * @internal
     */
    DescribeMultiplexProgramRequest.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(DescribeMultiplexProgramRequest || (DescribeMultiplexProgramRequest = {}));
export var DescribeMultiplexProgramResponse;
(function (DescribeMultiplexProgramResponse) {
    /**
     * @internal
     */
    DescribeMultiplexProgramResponse.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(DescribeMultiplexProgramResponse || (DescribeMultiplexProgramResponse = {}));
export var DescribeOfferingRequest;
(function (DescribeOfferingRequest) {
    /**
     * @internal
     */
    DescribeOfferingRequest.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(DescribeOfferingRequest || (DescribeOfferingRequest = {}));
export var DescribeOfferingResponse;
(function (DescribeOfferingResponse) {
    /**
     * @internal
     */
    DescribeOfferingResponse.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(DescribeOfferingResponse || (DescribeOfferingResponse = {}));
export var DescribeReservationRequest;
(function (DescribeReservationRequest) {
    /**
     * @internal
     */
    DescribeReservationRequest.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(DescribeReservationRequest || (DescribeReservationRequest = {}));
export var DescribeReservationResponse;
(function (DescribeReservationResponse) {
    /**
     * @internal
     */
    DescribeReservationResponse.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(DescribeReservationResponse || (DescribeReservationResponse = {}));
export var DescribeScheduleRequest;
(function (DescribeScheduleRequest) {
    /**
     * @internal
     */
    DescribeScheduleRequest.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(DescribeScheduleRequest || (DescribeScheduleRequest = {}));
export var DescribeScheduleResponse;
(function (DescribeScheduleResponse) {
    /**
     * @internal
     */
    DescribeScheduleResponse.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(DescribeScheduleResponse || (DescribeScheduleResponse = {}));
export var InputDeviceConfigurableSettings;
(function (InputDeviceConfigurableSettings) {
    /**
     * @internal
     */
    InputDeviceConfigurableSettings.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(InputDeviceConfigurableSettings || (InputDeviceConfigurableSettings = {}));
export var ListChannelsRequest;
(function (ListChannelsRequest) {
    /**
     * @internal
     */
    ListChannelsRequest.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(ListChannelsRequest || (ListChannelsRequest = {}));
export var ListChannelsResponse;
(function (ListChannelsResponse) {
    /**
     * @internal
     */
    ListChannelsResponse.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(ListChannelsResponse || (ListChannelsResponse = {}));
export var ListInputDevicesRequest;
(function (ListInputDevicesRequest) {
    /**
     * @internal
     */
    ListInputDevicesRequest.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(ListInputDevicesRequest || (ListInputDevicesRequest = {}));
export var ListInputDevicesResponse;
(function (ListInputDevicesResponse) {
    /**
     * @internal
     */
    ListInputDevicesResponse.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(ListInputDevicesResponse || (ListInputDevicesResponse = {}));
export var ListInputDeviceTransfersRequest;
(function (ListInputDeviceTransfersRequest) {
    /**
     * @internal
     */
    ListInputDeviceTransfersRequest.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(ListInputDeviceTransfersRequest || (ListInputDeviceTransfersRequest = {}));
export var ListInputDeviceTransfersResponse;
(function (ListInputDeviceTransfersResponse) {
    /**
     * @internal
     */
    ListInputDeviceTransfersResponse.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(ListInputDeviceTransfersResponse || (ListInputDeviceTransfersResponse = {}));
export var ListInputsRequest;
(function (ListInputsRequest) {
    /**
     * @internal
     */
    ListInputsRequest.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(ListInputsRequest || (ListInputsRequest = {}));
export var ListInputsResponse;
(function (ListInputsResponse) {
    /**
     * @internal
     */
    ListInputsResponse.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(ListInputsResponse || (ListInputsResponse = {}));
export var ListInputSecurityGroupsRequest;
(function (ListInputSecurityGroupsRequest) {
    /**
     * @internal
     */
    ListInputSecurityGroupsRequest.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(ListInputSecurityGroupsRequest || (ListInputSecurityGroupsRequest = {}));
export var ListInputSecurityGroupsResponse;
(function (ListInputSecurityGroupsResponse) {
    /**
     * @internal
     */
    ListInputSecurityGroupsResponse.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(ListInputSecurityGroupsResponse || (ListInputSecurityGroupsResponse = {}));
export var ListMultiplexesRequest;
(function (ListMultiplexesRequest) {
    /**
     * @internal
     */
    ListMultiplexesRequest.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(ListMultiplexesRequest || (ListMultiplexesRequest = {}));
export var ListMultiplexesResponse;
(function (ListMultiplexesResponse) {
    /**
     * @internal
     */
    ListMultiplexesResponse.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(ListMultiplexesResponse || (ListMultiplexesResponse = {}));
export var ListMultiplexProgramsRequest;
(function (ListMultiplexProgramsRequest) {
    /**
     * @internal
     */
    ListMultiplexProgramsRequest.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(ListMultiplexProgramsRequest || (ListMultiplexProgramsRequest = {}));
export var ListMultiplexProgramsResponse;
(function (ListMultiplexProgramsResponse) {
    /**
     * @internal
     */
    ListMultiplexProgramsResponse.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(ListMultiplexProgramsResponse || (ListMultiplexProgramsResponse = {}));
export var ListOfferingsRequest;
(function (ListOfferingsRequest) {
    /**
     * @internal
     */
    ListOfferingsRequest.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(ListOfferingsRequest || (ListOfferingsRequest = {}));
export var ListOfferingsResponse;
(function (ListOfferingsResponse) {
    /**
     * @internal
     */
    ListOfferingsResponse.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(ListOfferingsResponse || (ListOfferingsResponse = {}));
export var ListReservationsRequest;
(function (ListReservationsRequest) {
    /**
     * @internal
     */
    ListReservationsRequest.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(ListReservationsRequest || (ListReservationsRequest = {}));
export var ListReservationsResponse;
(function (ListReservationsResponse) {
    /**
     * @internal
     */
    ListReservationsResponse.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(ListReservationsResponse || (ListReservationsResponse = {}));
export var ListTagsForResourceRequest;
(function (ListTagsForResourceRequest) {
    /**
     * @internal
     */
    ListTagsForResourceRequest.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(ListTagsForResourceRequest || (ListTagsForResourceRequest = {}));
export var ListTagsForResourceResponse;
(function (ListTagsForResourceResponse) {
    /**
     * @internal
     */
    ListTagsForResourceResponse.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(ListTagsForResourceResponse || (ListTagsForResourceResponse = {}));
export var PurchaseOfferingRequest;
(function (PurchaseOfferingRequest) {
    /**
     * @internal
     */
    PurchaseOfferingRequest.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(PurchaseOfferingRequest || (PurchaseOfferingRequest = {}));
export var PurchaseOfferingResponse;
(function (PurchaseOfferingResponse) {
    /**
     * @internal
     */
    PurchaseOfferingResponse.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(PurchaseOfferingResponse || (PurchaseOfferingResponse = {}));
export var RejectInputDeviceTransferRequest;
(function (RejectInputDeviceTransferRequest) {
    /**
     * @internal
     */
    RejectInputDeviceTransferRequest.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(RejectInputDeviceTransferRequest || (RejectInputDeviceTransferRequest = {}));
export var RejectInputDeviceTransferResponse;
(function (RejectInputDeviceTransferResponse) {
    /**
     * @internal
     */
    RejectInputDeviceTransferResponse.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(RejectInputDeviceTransferResponse || (RejectInputDeviceTransferResponse = {}));
export var StartChannelRequest;
(function (StartChannelRequest) {
    /**
     * @internal
     */
    StartChannelRequest.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(StartChannelRequest || (StartChannelRequest = {}));
export var StartChannelResponse;
(function (StartChannelResponse) {
    /**
     * @internal
     */
    StartChannelResponse.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(StartChannelResponse || (StartChannelResponse = {}));
export var StartMultiplexRequest;
(function (StartMultiplexRequest) {
    /**
     * @internal
     */
    StartMultiplexRequest.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(StartMultiplexRequest || (StartMultiplexRequest = {}));
export var StartMultiplexResponse;
(function (StartMultiplexResponse) {
    /**
     * @internal
     */
    StartMultiplexResponse.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(StartMultiplexResponse || (StartMultiplexResponse = {}));
export var StopChannelRequest;
(function (StopChannelRequest) {
    /**
     * @internal
     */
    StopChannelRequest.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(StopChannelRequest || (StopChannelRequest = {}));
export var StopChannelResponse;
(function (StopChannelResponse) {
    /**
     * @internal
     */
    StopChannelResponse.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(StopChannelResponse || (StopChannelResponse = {}));
export var StopMultiplexRequest;
(function (StopMultiplexRequest) {
    /**
     * @internal
     */
    StopMultiplexRequest.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(StopMultiplexRequest || (StopMultiplexRequest = {}));
export var StopMultiplexResponse;
(function (StopMultiplexResponse) {
    /**
     * @internal
     */
    StopMultiplexResponse.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(StopMultiplexResponse || (StopMultiplexResponse = {}));
export var TransferInputDeviceRequest;
(function (TransferInputDeviceRequest) {
    /**
     * @internal
     */
    TransferInputDeviceRequest.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(TransferInputDeviceRequest || (TransferInputDeviceRequest = {}));
export var TransferInputDeviceResponse;
(function (TransferInputDeviceResponse) {
    /**
     * @internal
     */
    TransferInputDeviceResponse.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(TransferInputDeviceResponse || (TransferInputDeviceResponse = {}));
export var UpdateChannelRequest;
(function (UpdateChannelRequest) {
    /**
     * @internal
     */
    UpdateChannelRequest.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(UpdateChannelRequest || (UpdateChannelRequest = {}));
export var UpdateChannelResponse;
(function (UpdateChannelResponse) {
    /**
     * @internal
     */
    UpdateChannelResponse.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(UpdateChannelResponse || (UpdateChannelResponse = {}));
export var UpdateChannelClassRequest;
(function (UpdateChannelClassRequest) {
    /**
     * @internal
     */
    UpdateChannelClassRequest.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(UpdateChannelClassRequest || (UpdateChannelClassRequest = {}));
export var UpdateChannelClassResponse;
(function (UpdateChannelClassResponse) {
    /**
     * @internal
     */
    UpdateChannelClassResponse.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(UpdateChannelClassResponse || (UpdateChannelClassResponse = {}));
export var UpdateInputRequest;
(function (UpdateInputRequest) {
    /**
     * @internal
     */
    UpdateInputRequest.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(UpdateInputRequest || (UpdateInputRequest = {}));
export var UpdateInputResponse;
(function (UpdateInputResponse) {
    /**
     * @internal
     */
    UpdateInputResponse.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(UpdateInputResponse || (UpdateInputResponse = {}));
export var UpdateInputDeviceRequest;
(function (UpdateInputDeviceRequest) {
    /**
     * @internal
     */
    UpdateInputDeviceRequest.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(UpdateInputDeviceRequest || (UpdateInputDeviceRequest = {}));
export var UpdateInputDeviceResponse;
(function (UpdateInputDeviceResponse) {
    /**
     * @internal
     */
    UpdateInputDeviceResponse.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(UpdateInputDeviceResponse || (UpdateInputDeviceResponse = {}));
export var UpdateInputSecurityGroupRequest;
(function (UpdateInputSecurityGroupRequest) {
    /**
     * @internal
     */
    UpdateInputSecurityGroupRequest.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(UpdateInputSecurityGroupRequest || (UpdateInputSecurityGroupRequest = {}));
export var UpdateInputSecurityGroupResponse;
(function (UpdateInputSecurityGroupResponse) {
    /**
     * @internal
     */
    UpdateInputSecurityGroupResponse.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(UpdateInputSecurityGroupResponse || (UpdateInputSecurityGroupResponse = {}));
export var UpdateMultiplexRequest;
(function (UpdateMultiplexRequest) {
    /**
     * @internal
     */
    UpdateMultiplexRequest.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(UpdateMultiplexRequest || (UpdateMultiplexRequest = {}));
export var UpdateMultiplexResponse;
(function (UpdateMultiplexResponse) {
    /**
     * @internal
     */
    UpdateMultiplexResponse.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(UpdateMultiplexResponse || (UpdateMultiplexResponse = {}));
export var UpdateMultiplexProgramRequest;
(function (UpdateMultiplexProgramRequest) {
    /**
     * @internal
     */
    UpdateMultiplexProgramRequest.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(UpdateMultiplexProgramRequest || (UpdateMultiplexProgramRequest = {}));
export var UpdateMultiplexProgramResponse;
(function (UpdateMultiplexProgramResponse) {
    /**
     * @internal
     */
    UpdateMultiplexProgramResponse.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(UpdateMultiplexProgramResponse || (UpdateMultiplexProgramResponse = {}));
export var UpdateReservationRequest;
(function (UpdateReservationRequest) {
    /**
     * @internal
     */
    UpdateReservationRequest.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(UpdateReservationRequest || (UpdateReservationRequest = {}));
export var UpdateReservationResponse;
(function (UpdateReservationResponse) {
    /**
     * @internal
     */
    UpdateReservationResponse.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(UpdateReservationResponse || (UpdateReservationResponse = {}));
//# sourceMappingURL=models_1.js.map