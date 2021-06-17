"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.InputDeviceTransferType = exports.ScheduleAction = exports.ScheduleActionStartSettings = exports.ImmediateModeScheduleActionStartSettings = exports.FollowModeScheduleActionStartSettings = exports.FollowPoint = exports.FixedModeScheduleActionStartSettings = exports.ScheduleActionSettings = exports.StaticImageDeactivateScheduleActionSettings = exports.StaticImageActivateScheduleActionSettings = exports.Scte35TimeSignalScheduleActionSettings = exports.Scte35Descriptor = exports.Scte35DescriptorSettings = exports.Scte35SegmentationDescriptor = exports.Scte35SegmentationCancelIndicator = exports.Scte35DeliveryRestrictions = exports.Scte35WebDeliveryAllowedFlag = exports.Scte35NoRegionalBlackoutFlag = exports.Scte35DeviceRestrictions = exports.Scte35ArchiveAllowedFlag = exports.Scte35SpliceInsertScheduleActionSettings = exports.Scte35ReturnToNetworkScheduleActionSettings = exports.PauseStateScheduleActionSettings = exports.MotionGraphicsDeactivateScheduleActionSettings = exports.MotionGraphicsActivateScheduleActionSettings = exports.InputSwitchScheduleActionSettings = exports.InputPrepareScheduleActionSettings = exports.InputClippingSettings = exports.StopTimecode = exports.LastFrameClippingBehavior = exports.StartTimecode = exports.InputTimecodeSource = exports.HlsTimedMetadataScheduleActionSettings = exports.HlsId3SegmentTaggingScheduleActionSettings = exports.Reservation = exports.ReservationState = exports.PipelinePauseStateSettings = exports.PipelineId = exports.PipelineDetail = exports.OutputGroup = exports.OutputGroupSettings = exports.UdpGroupSettings = exports.UdpTimedMetadataId3Frame = exports.InputLossActionForUdpOut = exports.RtmpGroupSettings = exports.InputLossActionForRtmpOut = exports.RtmpCaptionData = exports.RtmpCacheFullBehavior = exports.AuthenticationScheme = exports.RtmpAdMarkers = void 0;
exports.H265Tier = exports.H265SceneChangeDetect = exports.H265ScanType = exports.H265RateControlMode = exports.H265Profile = exports.H265LookAheadRateControl = exports.H265Level = exports.H265GopSizeUnits = exports.H265FlickerAq = exports.H265FilterSettings = exports.H265ColorSpaceSettings = exports.H265ColorMetadata = exports.H265AlternativeTransferFunction = exports.H265AdaptiveQuantization = exports.H264Settings = exports.H264TimecodeInsertionBehavior = exports.H264TemporalAq = exports.H264Syntax = exports.H264SubGopLength = exports.H264SpatialAq = exports.H264SceneChangeDetect = exports.H264ScanType = exports.H264RateControlMode = exports.H264QualityLevel = exports.H264Profile = exports.H264ParControl = exports.H264LookAheadRateControl = exports.H264Level = exports.H264GopSizeUnits = exports.H264GopBReference = exports.H264FramerateControl = exports.H264ForceFieldPictures = exports.H264FlickerAq = exports.FixedAfd = exports.H264FilterSettings = exports.TemporalFilterSettings = exports.TemporalFilterStrength = exports.TemporalFilterPostFilterSharpening = exports.H264EntropyEncoding = exports.H264ColorSpaceSettings = exports.Rec709Settings = exports.Rec601Settings = exports.ColorSpacePassthroughSettings = exports.H264ColorMetadata = exports.AfdSignaling = exports.H264AdaptiveQuantization = exports.FrameCaptureSettings = exports.FrameCaptureIntervalUnit = exports.ValidationError = exports.TransferringInputDeviceSummary = void 0;
exports.BatchUpdateScheduleResponse = exports.BatchUpdateScheduleRequest = exports.BatchStopResponse = exports.BatchStopRequest = exports.BatchStartResponse = exports.BatchStartRequest = exports.BatchScheduleActionDeleteResult = exports.BatchScheduleActionDeleteRequest = exports.BatchScheduleActionCreateResult = exports.BatchScheduleActionCreateRequest = exports.BatchDeleteResponse = exports.BatchDeleteRequest = exports.AvailConfiguration = exports.AvailSettings = exports.Scte35TimeSignalApos = exports.Scte35AposWebDeliveryAllowedBehavior = exports.Scte35AposNoRegionalBlackoutBehavior = exports.Scte35SpliceInsert = exports.Scte35SpliceInsertWebDeliveryAllowedBehavior = exports.Scte35SpliceInsertNoRegionalBlackoutBehavior = exports.AvailBlanking = exports.AvailBlankingState = exports.UnprocessableEntityException = exports.TooManyRequestsException = exports.NotFoundException = exports.InternalServerErrorException = exports.GatewayTimeoutException = exports.ForbiddenException = exports.ConflictException = exports.BadRequestException = exports.BadGatewayException = exports.AcceptInputDeviceTransferResponse = exports.AcceptInputDeviceTransferRequest = exports.AcceptHeader = exports.VideoDescription = exports.VideoDescriptionScalingBehavior = exports.VideoDescriptionRespondToAfd = exports.VideoCodecSettings = exports.Mpeg2Settings = exports.Mpeg2TimecodeInsertionBehavior = exports.Mpeg2SubGopLength = exports.Mpeg2ScanType = exports.Mpeg2GopSizeUnits = exports.Mpeg2FilterSettings = exports.Mpeg2DisplayRatio = exports.Mpeg2ColorSpace = exports.Mpeg2ColorMetadata = exports.Mpeg2AdaptiveQuantization = exports.H265Settings = exports.H265TimecodeInsertionBehavior = void 0;
exports.DeleteChannelRequest = exports.CreateTagsRequest = exports.CreatePartnerInputResponse = exports.CreatePartnerInputRequest = exports.CreateMultiplexProgramResponse = exports.MultiplexProgram = exports.MultiplexProgramPacketIdentifiersMap = exports.CreateMultiplexProgramRequest = exports.MultiplexProgramSettings = exports.MultiplexVideoSettings = exports.MultiplexStatmuxVideoSettings = exports.MultiplexProgramServiceDescriptor = exports.PreferredChannelPipeline = exports.CreateMultiplexResponse = exports.Multiplex = exports.CreateMultiplexRequest = exports.MultiplexSettings = exports.CreateInputSecurityGroupResponse = exports.CreateInputSecurityGroupRequest = exports.CreateInputResponse = exports.CreateInputRequest = exports.InputVpcRequest = exports.CreateChannelResponse = exports.CreateChannelRequest = exports.VpcOutputSettings = exports.ContentType = exports.Channel = exports.EncoderSettings = exports.TimecodeConfig = exports.TimecodeConfigSource = exports.NielsenConfiguration = exports.NielsenPcmToId3TaggingState = exports.MotionGraphicsConfiguration = exports.MotionGraphicsSettings = exports.HtmlMotionGraphicsSettings = exports.MotionGraphicsInsertion = exports.GlobalConfiguration = exports.GlobalConfigurationLowFramerateInputs = exports.GlobalConfigurationOutputTimingSource = exports.GlobalConfigurationOutputLockingMode = exports.InputLossBehavior = exports.InputLossImageType = exports.GlobalConfigurationInputEndAction = exports.FeatureActivations = exports.FeatureActivationsInputPrepareScheduleActions = exports.CancelInputDeviceTransferResponse = exports.CancelInputDeviceTransferRequest = exports.BlackoutSlate = exports.BlackoutSlateState = exports.BlackoutSlateNetworkEndBlackout = void 0;
exports.ListOfferingsRequest = exports.ListMultiplexProgramsResponse = exports.ListMultiplexProgramsRequest = exports.ListMultiplexesResponse = exports.ListMultiplexesRequest = exports.ListInputSecurityGroupsResponse = exports.ListInputSecurityGroupsRequest = exports.ListInputsResponse = exports.ListInputsRequest = exports.ListInputDeviceTransfersResponse = exports.ListInputDeviceTransfersRequest = exports.ListInputDevicesResponse = exports.ListInputDevicesRequest = exports.ListChannelsResponse = exports.ListChannelsRequest = exports.InputDeviceConfigurableSettings = exports.DescribeScheduleResponse = exports.DescribeScheduleRequest = exports.DescribeReservationResponse = exports.DescribeReservationRequest = exports.DescribeOfferingResponse = exports.DescribeOfferingRequest = exports.DescribeMultiplexProgramResponse = exports.DescribeMultiplexProgramRequest = exports.DescribeMultiplexResponse = exports.DescribeMultiplexRequest = exports.DescribeInputSecurityGroupResponse = exports.DescribeInputSecurityGroupRequest = exports.DescribeInputDeviceThumbnailResponse = exports.DescribeInputDeviceThumbnailRequest = exports.DescribeInputDeviceResponse = exports.DescribeInputDeviceRequest = exports.DescribeInputResponse = exports.DescribeInputRequest = exports.DescribeChannelResponse = exports.DescribeChannelRequest = exports.DeleteTagsRequest = exports.DeleteScheduleResponse = exports.DeleteScheduleRequest = exports.DeleteReservationResponse = exports.DeleteReservationRequest = exports.DeleteMultiplexProgramResponse = exports.DeleteMultiplexProgramRequest = exports.DeleteMultiplexResponse = exports.DeleteMultiplexRequest = exports.DeleteInputSecurityGroupResponse = exports.DeleteInputSecurityGroupRequest = exports.DeleteInputResponse = exports.DeleteInputRequest = exports.DeleteChannelResponse = void 0;
exports.UpdateReservationResponse = exports.UpdateReservationRequest = exports.UpdateMultiplexProgramResponse = exports.UpdateMultiplexProgramRequest = exports.UpdateMultiplexResponse = exports.UpdateMultiplexRequest = exports.UpdateInputSecurityGroupResponse = exports.UpdateInputSecurityGroupRequest = exports.UpdateInputDeviceResponse = exports.UpdateInputDeviceRequest = exports.UpdateInputResponse = exports.UpdateInputRequest = exports.UpdateChannelClassResponse = exports.UpdateChannelClassRequest = exports.UpdateChannelResponse = exports.UpdateChannelRequest = exports.TransferInputDeviceResponse = exports.TransferInputDeviceRequest = exports.StopMultiplexResponse = exports.StopMultiplexRequest = exports.StopChannelResponse = exports.StopChannelRequest = exports.StartMultiplexResponse = exports.StartMultiplexRequest = exports.StartChannelResponse = exports.StartChannelRequest = exports.RejectInputDeviceTransferResponse = exports.RejectInputDeviceTransferRequest = exports.PurchaseOfferingResponse = exports.PurchaseOfferingRequest = exports.ListTagsForResourceResponse = exports.ListTagsForResourceRequest = exports.ListReservationsResponse = exports.ListReservationsRequest = exports.ListOfferingsResponse = void 0;
var RtmpAdMarkers;
(function (RtmpAdMarkers) {
    RtmpAdMarkers["ON_CUE_POINT_SCTE35"] = "ON_CUE_POINT_SCTE35";
})(RtmpAdMarkers = exports.RtmpAdMarkers || (exports.RtmpAdMarkers = {}));
var AuthenticationScheme;
(function (AuthenticationScheme) {
    AuthenticationScheme["AKAMAI"] = "AKAMAI";
    AuthenticationScheme["COMMON"] = "COMMON";
})(AuthenticationScheme = exports.AuthenticationScheme || (exports.AuthenticationScheme = {}));
var RtmpCacheFullBehavior;
(function (RtmpCacheFullBehavior) {
    RtmpCacheFullBehavior["DISCONNECT_IMMEDIATELY"] = "DISCONNECT_IMMEDIATELY";
    RtmpCacheFullBehavior["WAIT_FOR_SERVER"] = "WAIT_FOR_SERVER";
})(RtmpCacheFullBehavior = exports.RtmpCacheFullBehavior || (exports.RtmpCacheFullBehavior = {}));
var RtmpCaptionData;
(function (RtmpCaptionData) {
    RtmpCaptionData["ALL"] = "ALL";
    RtmpCaptionData["FIELD1_608"] = "FIELD1_608";
    RtmpCaptionData["FIELD1_AND_FIELD2_608"] = "FIELD1_AND_FIELD2_608";
})(RtmpCaptionData = exports.RtmpCaptionData || (exports.RtmpCaptionData = {}));
var InputLossActionForRtmpOut;
(function (InputLossActionForRtmpOut) {
    InputLossActionForRtmpOut["EMIT_OUTPUT"] = "EMIT_OUTPUT";
    InputLossActionForRtmpOut["PAUSE_OUTPUT"] = "PAUSE_OUTPUT";
})(InputLossActionForRtmpOut = exports.InputLossActionForRtmpOut || (exports.InputLossActionForRtmpOut = {}));
var RtmpGroupSettings;
(function (RtmpGroupSettings) {
    /**
     * @internal
     */
    RtmpGroupSettings.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(RtmpGroupSettings = exports.RtmpGroupSettings || (exports.RtmpGroupSettings = {}));
var InputLossActionForUdpOut;
(function (InputLossActionForUdpOut) {
    InputLossActionForUdpOut["DROP_PROGRAM"] = "DROP_PROGRAM";
    InputLossActionForUdpOut["DROP_TS"] = "DROP_TS";
    InputLossActionForUdpOut["EMIT_PROGRAM"] = "EMIT_PROGRAM";
})(InputLossActionForUdpOut = exports.InputLossActionForUdpOut || (exports.InputLossActionForUdpOut = {}));
var UdpTimedMetadataId3Frame;
(function (UdpTimedMetadataId3Frame) {
    UdpTimedMetadataId3Frame["NONE"] = "NONE";
    UdpTimedMetadataId3Frame["PRIV"] = "PRIV";
    UdpTimedMetadataId3Frame["TDRL"] = "TDRL";
})(UdpTimedMetadataId3Frame = exports.UdpTimedMetadataId3Frame || (exports.UdpTimedMetadataId3Frame = {}));
var UdpGroupSettings;
(function (UdpGroupSettings) {
    /**
     * @internal
     */
    UdpGroupSettings.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(UdpGroupSettings = exports.UdpGroupSettings || (exports.UdpGroupSettings = {}));
var OutputGroupSettings;
(function (OutputGroupSettings) {
    /**
     * @internal
     */
    OutputGroupSettings.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(OutputGroupSettings = exports.OutputGroupSettings || (exports.OutputGroupSettings = {}));
var OutputGroup;
(function (OutputGroup) {
    /**
     * @internal
     */
    OutputGroup.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(OutputGroup = exports.OutputGroup || (exports.OutputGroup = {}));
var PipelineDetail;
(function (PipelineDetail) {
    /**
     * @internal
     */
    PipelineDetail.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(PipelineDetail = exports.PipelineDetail || (exports.PipelineDetail = {}));
var PipelineId;
(function (PipelineId) {
    PipelineId["PIPELINE_0"] = "PIPELINE_0";
    PipelineId["PIPELINE_1"] = "PIPELINE_1";
})(PipelineId = exports.PipelineId || (exports.PipelineId = {}));
var PipelinePauseStateSettings;
(function (PipelinePauseStateSettings) {
    /**
     * @internal
     */
    PipelinePauseStateSettings.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(PipelinePauseStateSettings = exports.PipelinePauseStateSettings || (exports.PipelinePauseStateSettings = {}));
var ReservationState;
(function (ReservationState) {
    ReservationState["ACTIVE"] = "ACTIVE";
    ReservationState["CANCELED"] = "CANCELED";
    ReservationState["DELETED"] = "DELETED";
    ReservationState["EXPIRED"] = "EXPIRED";
})(ReservationState = exports.ReservationState || (exports.ReservationState = {}));
var Reservation;
(function (Reservation) {
    /**
     * @internal
     */
    Reservation.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(Reservation = exports.Reservation || (exports.Reservation = {}));
var HlsId3SegmentTaggingScheduleActionSettings;
(function (HlsId3SegmentTaggingScheduleActionSettings) {
    /**
     * @internal
     */
    HlsId3SegmentTaggingScheduleActionSettings.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(HlsId3SegmentTaggingScheduleActionSettings = exports.HlsId3SegmentTaggingScheduleActionSettings || (exports.HlsId3SegmentTaggingScheduleActionSettings = {}));
var HlsTimedMetadataScheduleActionSettings;
(function (HlsTimedMetadataScheduleActionSettings) {
    /**
     * @internal
     */
    HlsTimedMetadataScheduleActionSettings.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(HlsTimedMetadataScheduleActionSettings = exports.HlsTimedMetadataScheduleActionSettings || (exports.HlsTimedMetadataScheduleActionSettings = {}));
var InputTimecodeSource;
(function (InputTimecodeSource) {
    InputTimecodeSource["EMBEDDED"] = "EMBEDDED";
    InputTimecodeSource["ZEROBASED"] = "ZEROBASED";
})(InputTimecodeSource = exports.InputTimecodeSource || (exports.InputTimecodeSource = {}));
var StartTimecode;
(function (StartTimecode) {
    /**
     * @internal
     */
    StartTimecode.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(StartTimecode = exports.StartTimecode || (exports.StartTimecode = {}));
var LastFrameClippingBehavior;
(function (LastFrameClippingBehavior) {
    LastFrameClippingBehavior["EXCLUDE_LAST_FRAME"] = "EXCLUDE_LAST_FRAME";
    LastFrameClippingBehavior["INCLUDE_LAST_FRAME"] = "INCLUDE_LAST_FRAME";
})(LastFrameClippingBehavior = exports.LastFrameClippingBehavior || (exports.LastFrameClippingBehavior = {}));
var StopTimecode;
(function (StopTimecode) {
    /**
     * @internal
     */
    StopTimecode.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(StopTimecode = exports.StopTimecode || (exports.StopTimecode = {}));
var InputClippingSettings;
(function (InputClippingSettings) {
    /**
     * @internal
     */
    InputClippingSettings.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(InputClippingSettings = exports.InputClippingSettings || (exports.InputClippingSettings = {}));
var InputPrepareScheduleActionSettings;
(function (InputPrepareScheduleActionSettings) {
    /**
     * @internal
     */
    InputPrepareScheduleActionSettings.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(InputPrepareScheduleActionSettings = exports.InputPrepareScheduleActionSettings || (exports.InputPrepareScheduleActionSettings = {}));
var InputSwitchScheduleActionSettings;
(function (InputSwitchScheduleActionSettings) {
    /**
     * @internal
     */
    InputSwitchScheduleActionSettings.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(InputSwitchScheduleActionSettings = exports.InputSwitchScheduleActionSettings || (exports.InputSwitchScheduleActionSettings = {}));
var MotionGraphicsActivateScheduleActionSettings;
(function (MotionGraphicsActivateScheduleActionSettings) {
    /**
     * @internal
     */
    MotionGraphicsActivateScheduleActionSettings.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(MotionGraphicsActivateScheduleActionSettings = exports.MotionGraphicsActivateScheduleActionSettings || (exports.MotionGraphicsActivateScheduleActionSettings = {}));
var MotionGraphicsDeactivateScheduleActionSettings;
(function (MotionGraphicsDeactivateScheduleActionSettings) {
    /**
     * @internal
     */
    MotionGraphicsDeactivateScheduleActionSettings.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(MotionGraphicsDeactivateScheduleActionSettings = exports.MotionGraphicsDeactivateScheduleActionSettings || (exports.MotionGraphicsDeactivateScheduleActionSettings = {}));
var PauseStateScheduleActionSettings;
(function (PauseStateScheduleActionSettings) {
    /**
     * @internal
     */
    PauseStateScheduleActionSettings.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(PauseStateScheduleActionSettings = exports.PauseStateScheduleActionSettings || (exports.PauseStateScheduleActionSettings = {}));
var Scte35ReturnToNetworkScheduleActionSettings;
(function (Scte35ReturnToNetworkScheduleActionSettings) {
    /**
     * @internal
     */
    Scte35ReturnToNetworkScheduleActionSettings.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(Scte35ReturnToNetworkScheduleActionSettings = exports.Scte35ReturnToNetworkScheduleActionSettings || (exports.Scte35ReturnToNetworkScheduleActionSettings = {}));
var Scte35SpliceInsertScheduleActionSettings;
(function (Scte35SpliceInsertScheduleActionSettings) {
    /**
     * @internal
     */
    Scte35SpliceInsertScheduleActionSettings.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(Scte35SpliceInsertScheduleActionSettings = exports.Scte35SpliceInsertScheduleActionSettings || (exports.Scte35SpliceInsertScheduleActionSettings = {}));
var Scte35ArchiveAllowedFlag;
(function (Scte35ArchiveAllowedFlag) {
    Scte35ArchiveAllowedFlag["ARCHIVE_ALLOWED"] = "ARCHIVE_ALLOWED";
    Scte35ArchiveAllowedFlag["ARCHIVE_NOT_ALLOWED"] = "ARCHIVE_NOT_ALLOWED";
})(Scte35ArchiveAllowedFlag = exports.Scte35ArchiveAllowedFlag || (exports.Scte35ArchiveAllowedFlag = {}));
var Scte35DeviceRestrictions;
(function (Scte35DeviceRestrictions) {
    Scte35DeviceRestrictions["NONE"] = "NONE";
    Scte35DeviceRestrictions["RESTRICT_GROUP0"] = "RESTRICT_GROUP0";
    Scte35DeviceRestrictions["RESTRICT_GROUP1"] = "RESTRICT_GROUP1";
    Scte35DeviceRestrictions["RESTRICT_GROUP2"] = "RESTRICT_GROUP2";
})(Scte35DeviceRestrictions = exports.Scte35DeviceRestrictions || (exports.Scte35DeviceRestrictions = {}));
var Scte35NoRegionalBlackoutFlag;
(function (Scte35NoRegionalBlackoutFlag) {
    Scte35NoRegionalBlackoutFlag["NO_REGIONAL_BLACKOUT"] = "NO_REGIONAL_BLACKOUT";
    Scte35NoRegionalBlackoutFlag["REGIONAL_BLACKOUT"] = "REGIONAL_BLACKOUT";
})(Scte35NoRegionalBlackoutFlag = exports.Scte35NoRegionalBlackoutFlag || (exports.Scte35NoRegionalBlackoutFlag = {}));
var Scte35WebDeliveryAllowedFlag;
(function (Scte35WebDeliveryAllowedFlag) {
    Scte35WebDeliveryAllowedFlag["WEB_DELIVERY_ALLOWED"] = "WEB_DELIVERY_ALLOWED";
    Scte35WebDeliveryAllowedFlag["WEB_DELIVERY_NOT_ALLOWED"] = "WEB_DELIVERY_NOT_ALLOWED";
})(Scte35WebDeliveryAllowedFlag = exports.Scte35WebDeliveryAllowedFlag || (exports.Scte35WebDeliveryAllowedFlag = {}));
var Scte35DeliveryRestrictions;
(function (Scte35DeliveryRestrictions) {
    /**
     * @internal
     */
    Scte35DeliveryRestrictions.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(Scte35DeliveryRestrictions = exports.Scte35DeliveryRestrictions || (exports.Scte35DeliveryRestrictions = {}));
var Scte35SegmentationCancelIndicator;
(function (Scte35SegmentationCancelIndicator) {
    Scte35SegmentationCancelIndicator["SEGMENTATION_EVENT_CANCELED"] = "SEGMENTATION_EVENT_CANCELED";
    Scte35SegmentationCancelIndicator["SEGMENTATION_EVENT_NOT_CANCELED"] = "SEGMENTATION_EVENT_NOT_CANCELED";
})(Scte35SegmentationCancelIndicator = exports.Scte35SegmentationCancelIndicator || (exports.Scte35SegmentationCancelIndicator = {}));
var Scte35SegmentationDescriptor;
(function (Scte35SegmentationDescriptor) {
    /**
     * @internal
     */
    Scte35SegmentationDescriptor.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(Scte35SegmentationDescriptor = exports.Scte35SegmentationDescriptor || (exports.Scte35SegmentationDescriptor = {}));
var Scte35DescriptorSettings;
(function (Scte35DescriptorSettings) {
    /**
     * @internal
     */
    Scte35DescriptorSettings.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(Scte35DescriptorSettings = exports.Scte35DescriptorSettings || (exports.Scte35DescriptorSettings = {}));
var Scte35Descriptor;
(function (Scte35Descriptor) {
    /**
     * @internal
     */
    Scte35Descriptor.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(Scte35Descriptor = exports.Scte35Descriptor || (exports.Scte35Descriptor = {}));
var Scte35TimeSignalScheduleActionSettings;
(function (Scte35TimeSignalScheduleActionSettings) {
    /**
     * @internal
     */
    Scte35TimeSignalScheduleActionSettings.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(Scte35TimeSignalScheduleActionSettings = exports.Scte35TimeSignalScheduleActionSettings || (exports.Scte35TimeSignalScheduleActionSettings = {}));
var StaticImageActivateScheduleActionSettings;
(function (StaticImageActivateScheduleActionSettings) {
    /**
     * @internal
     */
    StaticImageActivateScheduleActionSettings.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(StaticImageActivateScheduleActionSettings = exports.StaticImageActivateScheduleActionSettings || (exports.StaticImageActivateScheduleActionSettings = {}));
var StaticImageDeactivateScheduleActionSettings;
(function (StaticImageDeactivateScheduleActionSettings) {
    /**
     * @internal
     */
    StaticImageDeactivateScheduleActionSettings.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(StaticImageDeactivateScheduleActionSettings = exports.StaticImageDeactivateScheduleActionSettings || (exports.StaticImageDeactivateScheduleActionSettings = {}));
var ScheduleActionSettings;
(function (ScheduleActionSettings) {
    /**
     * @internal
     */
    ScheduleActionSettings.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(ScheduleActionSettings = exports.ScheduleActionSettings || (exports.ScheduleActionSettings = {}));
var FixedModeScheduleActionStartSettings;
(function (FixedModeScheduleActionStartSettings) {
    /**
     * @internal
     */
    FixedModeScheduleActionStartSettings.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(FixedModeScheduleActionStartSettings = exports.FixedModeScheduleActionStartSettings || (exports.FixedModeScheduleActionStartSettings = {}));
var FollowPoint;
(function (FollowPoint) {
    FollowPoint["END"] = "END";
    FollowPoint["START"] = "START";
})(FollowPoint = exports.FollowPoint || (exports.FollowPoint = {}));
var FollowModeScheduleActionStartSettings;
(function (FollowModeScheduleActionStartSettings) {
    /**
     * @internal
     */
    FollowModeScheduleActionStartSettings.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(FollowModeScheduleActionStartSettings = exports.FollowModeScheduleActionStartSettings || (exports.FollowModeScheduleActionStartSettings = {}));
var ImmediateModeScheduleActionStartSettings;
(function (ImmediateModeScheduleActionStartSettings) {
    /**
     * @internal
     */
    ImmediateModeScheduleActionStartSettings.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(ImmediateModeScheduleActionStartSettings = exports.ImmediateModeScheduleActionStartSettings || (exports.ImmediateModeScheduleActionStartSettings = {}));
var ScheduleActionStartSettings;
(function (ScheduleActionStartSettings) {
    /**
     * @internal
     */
    ScheduleActionStartSettings.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(ScheduleActionStartSettings = exports.ScheduleActionStartSettings || (exports.ScheduleActionStartSettings = {}));
var ScheduleAction;
(function (ScheduleAction) {
    /**
     * @internal
     */
    ScheduleAction.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(ScheduleAction = exports.ScheduleAction || (exports.ScheduleAction = {}));
var InputDeviceTransferType;
(function (InputDeviceTransferType) {
    InputDeviceTransferType["INCOMING"] = "INCOMING";
    InputDeviceTransferType["OUTGOING"] = "OUTGOING";
})(InputDeviceTransferType = exports.InputDeviceTransferType || (exports.InputDeviceTransferType = {}));
var TransferringInputDeviceSummary;
(function (TransferringInputDeviceSummary) {
    /**
     * @internal
     */
    TransferringInputDeviceSummary.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(TransferringInputDeviceSummary = exports.TransferringInputDeviceSummary || (exports.TransferringInputDeviceSummary = {}));
var ValidationError;
(function (ValidationError) {
    /**
     * @internal
     */
    ValidationError.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(ValidationError = exports.ValidationError || (exports.ValidationError = {}));
var FrameCaptureIntervalUnit;
(function (FrameCaptureIntervalUnit) {
    FrameCaptureIntervalUnit["MILLISECONDS"] = "MILLISECONDS";
    FrameCaptureIntervalUnit["SECONDS"] = "SECONDS";
})(FrameCaptureIntervalUnit = exports.FrameCaptureIntervalUnit || (exports.FrameCaptureIntervalUnit = {}));
var FrameCaptureSettings;
(function (FrameCaptureSettings) {
    /**
     * @internal
     */
    FrameCaptureSettings.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(FrameCaptureSettings = exports.FrameCaptureSettings || (exports.FrameCaptureSettings = {}));
var H264AdaptiveQuantization;
(function (H264AdaptiveQuantization) {
    H264AdaptiveQuantization["HIGH"] = "HIGH";
    H264AdaptiveQuantization["HIGHER"] = "HIGHER";
    H264AdaptiveQuantization["LOW"] = "LOW";
    H264AdaptiveQuantization["MAX"] = "MAX";
    H264AdaptiveQuantization["MEDIUM"] = "MEDIUM";
    H264AdaptiveQuantization["OFF"] = "OFF";
})(H264AdaptiveQuantization = exports.H264AdaptiveQuantization || (exports.H264AdaptiveQuantization = {}));
var AfdSignaling;
(function (AfdSignaling) {
    AfdSignaling["AUTO"] = "AUTO";
    AfdSignaling["FIXED"] = "FIXED";
    AfdSignaling["NONE"] = "NONE";
})(AfdSignaling = exports.AfdSignaling || (exports.AfdSignaling = {}));
var H264ColorMetadata;
(function (H264ColorMetadata) {
    H264ColorMetadata["IGNORE"] = "IGNORE";
    H264ColorMetadata["INSERT"] = "INSERT";
})(H264ColorMetadata = exports.H264ColorMetadata || (exports.H264ColorMetadata = {}));
var ColorSpacePassthroughSettings;
(function (ColorSpacePassthroughSettings) {
    /**
     * @internal
     */
    ColorSpacePassthroughSettings.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(ColorSpacePassthroughSettings = exports.ColorSpacePassthroughSettings || (exports.ColorSpacePassthroughSettings = {}));
var Rec601Settings;
(function (Rec601Settings) {
    /**
     * @internal
     */
    Rec601Settings.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(Rec601Settings = exports.Rec601Settings || (exports.Rec601Settings = {}));
var Rec709Settings;
(function (Rec709Settings) {
    /**
     * @internal
     */
    Rec709Settings.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(Rec709Settings = exports.Rec709Settings || (exports.Rec709Settings = {}));
var H264ColorSpaceSettings;
(function (H264ColorSpaceSettings) {
    /**
     * @internal
     */
    H264ColorSpaceSettings.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(H264ColorSpaceSettings = exports.H264ColorSpaceSettings || (exports.H264ColorSpaceSettings = {}));
var H264EntropyEncoding;
(function (H264EntropyEncoding) {
    H264EntropyEncoding["CABAC"] = "CABAC";
    H264EntropyEncoding["CAVLC"] = "CAVLC";
})(H264EntropyEncoding = exports.H264EntropyEncoding || (exports.H264EntropyEncoding = {}));
var TemporalFilterPostFilterSharpening;
(function (TemporalFilterPostFilterSharpening) {
    TemporalFilterPostFilterSharpening["AUTO"] = "AUTO";
    TemporalFilterPostFilterSharpening["DISABLED"] = "DISABLED";
    TemporalFilterPostFilterSharpening["ENABLED"] = "ENABLED";
})(TemporalFilterPostFilterSharpening = exports.TemporalFilterPostFilterSharpening || (exports.TemporalFilterPostFilterSharpening = {}));
var TemporalFilterStrength;
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
})(TemporalFilterStrength = exports.TemporalFilterStrength || (exports.TemporalFilterStrength = {}));
var TemporalFilterSettings;
(function (TemporalFilterSettings) {
    /**
     * @internal
     */
    TemporalFilterSettings.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(TemporalFilterSettings = exports.TemporalFilterSettings || (exports.TemporalFilterSettings = {}));
var H264FilterSettings;
(function (H264FilterSettings) {
    /**
     * @internal
     */
    H264FilterSettings.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(H264FilterSettings = exports.H264FilterSettings || (exports.H264FilterSettings = {}));
var FixedAfd;
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
})(FixedAfd = exports.FixedAfd || (exports.FixedAfd = {}));
var H264FlickerAq;
(function (H264FlickerAq) {
    H264FlickerAq["DISABLED"] = "DISABLED";
    H264FlickerAq["ENABLED"] = "ENABLED";
})(H264FlickerAq = exports.H264FlickerAq || (exports.H264FlickerAq = {}));
var H264ForceFieldPictures;
(function (H264ForceFieldPictures) {
    H264ForceFieldPictures["DISABLED"] = "DISABLED";
    H264ForceFieldPictures["ENABLED"] = "ENABLED";
})(H264ForceFieldPictures = exports.H264ForceFieldPictures || (exports.H264ForceFieldPictures = {}));
var H264FramerateControl;
(function (H264FramerateControl) {
    H264FramerateControl["INITIALIZE_FROM_SOURCE"] = "INITIALIZE_FROM_SOURCE";
    H264FramerateControl["SPECIFIED"] = "SPECIFIED";
})(H264FramerateControl = exports.H264FramerateControl || (exports.H264FramerateControl = {}));
var H264GopBReference;
(function (H264GopBReference) {
    H264GopBReference["DISABLED"] = "DISABLED";
    H264GopBReference["ENABLED"] = "ENABLED";
})(H264GopBReference = exports.H264GopBReference || (exports.H264GopBReference = {}));
var H264GopSizeUnits;
(function (H264GopSizeUnits) {
    H264GopSizeUnits["FRAMES"] = "FRAMES";
    H264GopSizeUnits["SECONDS"] = "SECONDS";
})(H264GopSizeUnits = exports.H264GopSizeUnits || (exports.H264GopSizeUnits = {}));
var H264Level;
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
})(H264Level = exports.H264Level || (exports.H264Level = {}));
var H264LookAheadRateControl;
(function (H264LookAheadRateControl) {
    H264LookAheadRateControl["HIGH"] = "HIGH";
    H264LookAheadRateControl["LOW"] = "LOW";
    H264LookAheadRateControl["MEDIUM"] = "MEDIUM";
})(H264LookAheadRateControl = exports.H264LookAheadRateControl || (exports.H264LookAheadRateControl = {}));
var H264ParControl;
(function (H264ParControl) {
    H264ParControl["INITIALIZE_FROM_SOURCE"] = "INITIALIZE_FROM_SOURCE";
    H264ParControl["SPECIFIED"] = "SPECIFIED";
})(H264ParControl = exports.H264ParControl || (exports.H264ParControl = {}));
var H264Profile;
(function (H264Profile) {
    H264Profile["BASELINE"] = "BASELINE";
    H264Profile["HIGH"] = "HIGH";
    H264Profile["HIGH_10BIT"] = "HIGH_10BIT";
    H264Profile["HIGH_422"] = "HIGH_422";
    H264Profile["HIGH_422_10BIT"] = "HIGH_422_10BIT";
    H264Profile["MAIN"] = "MAIN";
})(H264Profile = exports.H264Profile || (exports.H264Profile = {}));
var H264QualityLevel;
(function (H264QualityLevel) {
    H264QualityLevel["ENHANCED_QUALITY"] = "ENHANCED_QUALITY";
    H264QualityLevel["STANDARD_QUALITY"] = "STANDARD_QUALITY";
})(H264QualityLevel = exports.H264QualityLevel || (exports.H264QualityLevel = {}));
var H264RateControlMode;
(function (H264RateControlMode) {
    H264RateControlMode["CBR"] = "CBR";
    H264RateControlMode["MULTIPLEX"] = "MULTIPLEX";
    H264RateControlMode["QVBR"] = "QVBR";
    H264RateControlMode["VBR"] = "VBR";
})(H264RateControlMode = exports.H264RateControlMode || (exports.H264RateControlMode = {}));
var H264ScanType;
(function (H264ScanType) {
    H264ScanType["INTERLACED"] = "INTERLACED";
    H264ScanType["PROGRESSIVE"] = "PROGRESSIVE";
})(H264ScanType = exports.H264ScanType || (exports.H264ScanType = {}));
var H264SceneChangeDetect;
(function (H264SceneChangeDetect) {
    H264SceneChangeDetect["DISABLED"] = "DISABLED";
    H264SceneChangeDetect["ENABLED"] = "ENABLED";
})(H264SceneChangeDetect = exports.H264SceneChangeDetect || (exports.H264SceneChangeDetect = {}));
var H264SpatialAq;
(function (H264SpatialAq) {
    H264SpatialAq["DISABLED"] = "DISABLED";
    H264SpatialAq["ENABLED"] = "ENABLED";
})(H264SpatialAq = exports.H264SpatialAq || (exports.H264SpatialAq = {}));
var H264SubGopLength;
(function (H264SubGopLength) {
    H264SubGopLength["DYNAMIC"] = "DYNAMIC";
    H264SubGopLength["FIXED"] = "FIXED";
})(H264SubGopLength = exports.H264SubGopLength || (exports.H264SubGopLength = {}));
var H264Syntax;
(function (H264Syntax) {
    H264Syntax["DEFAULT"] = "DEFAULT";
    H264Syntax["RP2027"] = "RP2027";
})(H264Syntax = exports.H264Syntax || (exports.H264Syntax = {}));
var H264TemporalAq;
(function (H264TemporalAq) {
    H264TemporalAq["DISABLED"] = "DISABLED";
    H264TemporalAq["ENABLED"] = "ENABLED";
})(H264TemporalAq = exports.H264TemporalAq || (exports.H264TemporalAq = {}));
var H264TimecodeInsertionBehavior;
(function (H264TimecodeInsertionBehavior) {
    H264TimecodeInsertionBehavior["DISABLED"] = "DISABLED";
    H264TimecodeInsertionBehavior["PIC_TIMING_SEI"] = "PIC_TIMING_SEI";
})(H264TimecodeInsertionBehavior = exports.H264TimecodeInsertionBehavior || (exports.H264TimecodeInsertionBehavior = {}));
var H264Settings;
(function (H264Settings) {
    /**
     * @internal
     */
    H264Settings.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(H264Settings = exports.H264Settings || (exports.H264Settings = {}));
var H265AdaptiveQuantization;
(function (H265AdaptiveQuantization) {
    H265AdaptiveQuantization["HIGH"] = "HIGH";
    H265AdaptiveQuantization["HIGHER"] = "HIGHER";
    H265AdaptiveQuantization["LOW"] = "LOW";
    H265AdaptiveQuantization["MAX"] = "MAX";
    H265AdaptiveQuantization["MEDIUM"] = "MEDIUM";
    H265AdaptiveQuantization["OFF"] = "OFF";
})(H265AdaptiveQuantization = exports.H265AdaptiveQuantization || (exports.H265AdaptiveQuantization = {}));
var H265AlternativeTransferFunction;
(function (H265AlternativeTransferFunction) {
    H265AlternativeTransferFunction["INSERT"] = "INSERT";
    H265AlternativeTransferFunction["OMIT"] = "OMIT";
})(H265AlternativeTransferFunction = exports.H265AlternativeTransferFunction || (exports.H265AlternativeTransferFunction = {}));
var H265ColorMetadata;
(function (H265ColorMetadata) {
    H265ColorMetadata["IGNORE"] = "IGNORE";
    H265ColorMetadata["INSERT"] = "INSERT";
})(H265ColorMetadata = exports.H265ColorMetadata || (exports.H265ColorMetadata = {}));
var H265ColorSpaceSettings;
(function (H265ColorSpaceSettings) {
    /**
     * @internal
     */
    H265ColorSpaceSettings.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(H265ColorSpaceSettings = exports.H265ColorSpaceSettings || (exports.H265ColorSpaceSettings = {}));
var H265FilterSettings;
(function (H265FilterSettings) {
    /**
     * @internal
     */
    H265FilterSettings.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(H265FilterSettings = exports.H265FilterSettings || (exports.H265FilterSettings = {}));
var H265FlickerAq;
(function (H265FlickerAq) {
    H265FlickerAq["DISABLED"] = "DISABLED";
    H265FlickerAq["ENABLED"] = "ENABLED";
})(H265FlickerAq = exports.H265FlickerAq || (exports.H265FlickerAq = {}));
var H265GopSizeUnits;
(function (H265GopSizeUnits) {
    H265GopSizeUnits["FRAMES"] = "FRAMES";
    H265GopSizeUnits["SECONDS"] = "SECONDS";
})(H265GopSizeUnits = exports.H265GopSizeUnits || (exports.H265GopSizeUnits = {}));
var H265Level;
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
})(H265Level = exports.H265Level || (exports.H265Level = {}));
var H265LookAheadRateControl;
(function (H265LookAheadRateControl) {
    H265LookAheadRateControl["HIGH"] = "HIGH";
    H265LookAheadRateControl["LOW"] = "LOW";
    H265LookAheadRateControl["MEDIUM"] = "MEDIUM";
})(H265LookAheadRateControl = exports.H265LookAheadRateControl || (exports.H265LookAheadRateControl = {}));
var H265Profile;
(function (H265Profile) {
    H265Profile["MAIN"] = "MAIN";
    H265Profile["MAIN_10BIT"] = "MAIN_10BIT";
})(H265Profile = exports.H265Profile || (exports.H265Profile = {}));
var H265RateControlMode;
(function (H265RateControlMode) {
    H265RateControlMode["CBR"] = "CBR";
    H265RateControlMode["MULTIPLEX"] = "MULTIPLEX";
    H265RateControlMode["QVBR"] = "QVBR";
})(H265RateControlMode = exports.H265RateControlMode || (exports.H265RateControlMode = {}));
var H265ScanType;
(function (H265ScanType) {
    H265ScanType["INTERLACED"] = "INTERLACED";
    H265ScanType["PROGRESSIVE"] = "PROGRESSIVE";
})(H265ScanType = exports.H265ScanType || (exports.H265ScanType = {}));
var H265SceneChangeDetect;
(function (H265SceneChangeDetect) {
    H265SceneChangeDetect["DISABLED"] = "DISABLED";
    H265SceneChangeDetect["ENABLED"] = "ENABLED";
})(H265SceneChangeDetect = exports.H265SceneChangeDetect || (exports.H265SceneChangeDetect = {}));
var H265Tier;
(function (H265Tier) {
    H265Tier["HIGH"] = "HIGH";
    H265Tier["MAIN"] = "MAIN";
})(H265Tier = exports.H265Tier || (exports.H265Tier = {}));
var H265TimecodeInsertionBehavior;
(function (H265TimecodeInsertionBehavior) {
    H265TimecodeInsertionBehavior["DISABLED"] = "DISABLED";
    H265TimecodeInsertionBehavior["PIC_TIMING_SEI"] = "PIC_TIMING_SEI";
})(H265TimecodeInsertionBehavior = exports.H265TimecodeInsertionBehavior || (exports.H265TimecodeInsertionBehavior = {}));
var H265Settings;
(function (H265Settings) {
    /**
     * @internal
     */
    H265Settings.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(H265Settings = exports.H265Settings || (exports.H265Settings = {}));
var Mpeg2AdaptiveQuantization;
(function (Mpeg2AdaptiveQuantization) {
    Mpeg2AdaptiveQuantization["AUTO"] = "AUTO";
    Mpeg2AdaptiveQuantization["HIGH"] = "HIGH";
    Mpeg2AdaptiveQuantization["LOW"] = "LOW";
    Mpeg2AdaptiveQuantization["MEDIUM"] = "MEDIUM";
    Mpeg2AdaptiveQuantization["OFF"] = "OFF";
})(Mpeg2AdaptiveQuantization = exports.Mpeg2AdaptiveQuantization || (exports.Mpeg2AdaptiveQuantization = {}));
var Mpeg2ColorMetadata;
(function (Mpeg2ColorMetadata) {
    Mpeg2ColorMetadata["IGNORE"] = "IGNORE";
    Mpeg2ColorMetadata["INSERT"] = "INSERT";
})(Mpeg2ColorMetadata = exports.Mpeg2ColorMetadata || (exports.Mpeg2ColorMetadata = {}));
var Mpeg2ColorSpace;
(function (Mpeg2ColorSpace) {
    Mpeg2ColorSpace["AUTO"] = "AUTO";
    Mpeg2ColorSpace["PASSTHROUGH"] = "PASSTHROUGH";
})(Mpeg2ColorSpace = exports.Mpeg2ColorSpace || (exports.Mpeg2ColorSpace = {}));
var Mpeg2DisplayRatio;
(function (Mpeg2DisplayRatio) {
    Mpeg2DisplayRatio["DISPLAYRATIO16X9"] = "DISPLAYRATIO16X9";
    Mpeg2DisplayRatio["DISPLAYRATIO4X3"] = "DISPLAYRATIO4X3";
})(Mpeg2DisplayRatio = exports.Mpeg2DisplayRatio || (exports.Mpeg2DisplayRatio = {}));
var Mpeg2FilterSettings;
(function (Mpeg2FilterSettings) {
    /**
     * @internal
     */
    Mpeg2FilterSettings.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(Mpeg2FilterSettings = exports.Mpeg2FilterSettings || (exports.Mpeg2FilterSettings = {}));
var Mpeg2GopSizeUnits;
(function (Mpeg2GopSizeUnits) {
    Mpeg2GopSizeUnits["FRAMES"] = "FRAMES";
    Mpeg2GopSizeUnits["SECONDS"] = "SECONDS";
})(Mpeg2GopSizeUnits = exports.Mpeg2GopSizeUnits || (exports.Mpeg2GopSizeUnits = {}));
var Mpeg2ScanType;
(function (Mpeg2ScanType) {
    Mpeg2ScanType["INTERLACED"] = "INTERLACED";
    Mpeg2ScanType["PROGRESSIVE"] = "PROGRESSIVE";
})(Mpeg2ScanType = exports.Mpeg2ScanType || (exports.Mpeg2ScanType = {}));
var Mpeg2SubGopLength;
(function (Mpeg2SubGopLength) {
    Mpeg2SubGopLength["DYNAMIC"] = "DYNAMIC";
    Mpeg2SubGopLength["FIXED"] = "FIXED";
})(Mpeg2SubGopLength = exports.Mpeg2SubGopLength || (exports.Mpeg2SubGopLength = {}));
var Mpeg2TimecodeInsertionBehavior;
(function (Mpeg2TimecodeInsertionBehavior) {
    Mpeg2TimecodeInsertionBehavior["DISABLED"] = "DISABLED";
    Mpeg2TimecodeInsertionBehavior["GOP_TIMECODE"] = "GOP_TIMECODE";
})(Mpeg2TimecodeInsertionBehavior = exports.Mpeg2TimecodeInsertionBehavior || (exports.Mpeg2TimecodeInsertionBehavior = {}));
var Mpeg2Settings;
(function (Mpeg2Settings) {
    /**
     * @internal
     */
    Mpeg2Settings.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(Mpeg2Settings = exports.Mpeg2Settings || (exports.Mpeg2Settings = {}));
var VideoCodecSettings;
(function (VideoCodecSettings) {
    /**
     * @internal
     */
    VideoCodecSettings.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(VideoCodecSettings = exports.VideoCodecSettings || (exports.VideoCodecSettings = {}));
var VideoDescriptionRespondToAfd;
(function (VideoDescriptionRespondToAfd) {
    VideoDescriptionRespondToAfd["NONE"] = "NONE";
    VideoDescriptionRespondToAfd["PASSTHROUGH"] = "PASSTHROUGH";
    VideoDescriptionRespondToAfd["RESPOND"] = "RESPOND";
})(VideoDescriptionRespondToAfd = exports.VideoDescriptionRespondToAfd || (exports.VideoDescriptionRespondToAfd = {}));
var VideoDescriptionScalingBehavior;
(function (VideoDescriptionScalingBehavior) {
    VideoDescriptionScalingBehavior["DEFAULT"] = "DEFAULT";
    VideoDescriptionScalingBehavior["STRETCH_TO_OUTPUT"] = "STRETCH_TO_OUTPUT";
})(VideoDescriptionScalingBehavior = exports.VideoDescriptionScalingBehavior || (exports.VideoDescriptionScalingBehavior = {}));
var VideoDescription;
(function (VideoDescription) {
    /**
     * @internal
     */
    VideoDescription.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(VideoDescription = exports.VideoDescription || (exports.VideoDescription = {}));
var AcceptHeader;
(function (AcceptHeader) {
    AcceptHeader["image_jpeg"] = "image/jpeg";
})(AcceptHeader = exports.AcceptHeader || (exports.AcceptHeader = {}));
var AcceptInputDeviceTransferRequest;
(function (AcceptInputDeviceTransferRequest) {
    /**
     * @internal
     */
    AcceptInputDeviceTransferRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(AcceptInputDeviceTransferRequest = exports.AcceptInputDeviceTransferRequest || (exports.AcceptInputDeviceTransferRequest = {}));
var AcceptInputDeviceTransferResponse;
(function (AcceptInputDeviceTransferResponse) {
    /**
     * @internal
     */
    AcceptInputDeviceTransferResponse.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(AcceptInputDeviceTransferResponse = exports.AcceptInputDeviceTransferResponse || (exports.AcceptInputDeviceTransferResponse = {}));
var BadGatewayException;
(function (BadGatewayException) {
    /**
     * @internal
     */
    BadGatewayException.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(BadGatewayException = exports.BadGatewayException || (exports.BadGatewayException = {}));
var BadRequestException;
(function (BadRequestException) {
    /**
     * @internal
     */
    BadRequestException.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(BadRequestException = exports.BadRequestException || (exports.BadRequestException = {}));
var ConflictException;
(function (ConflictException) {
    /**
     * @internal
     */
    ConflictException.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(ConflictException = exports.ConflictException || (exports.ConflictException = {}));
var ForbiddenException;
(function (ForbiddenException) {
    /**
     * @internal
     */
    ForbiddenException.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(ForbiddenException = exports.ForbiddenException || (exports.ForbiddenException = {}));
var GatewayTimeoutException;
(function (GatewayTimeoutException) {
    /**
     * @internal
     */
    GatewayTimeoutException.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(GatewayTimeoutException = exports.GatewayTimeoutException || (exports.GatewayTimeoutException = {}));
var InternalServerErrorException;
(function (InternalServerErrorException) {
    /**
     * @internal
     */
    InternalServerErrorException.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(InternalServerErrorException = exports.InternalServerErrorException || (exports.InternalServerErrorException = {}));
var NotFoundException;
(function (NotFoundException) {
    /**
     * @internal
     */
    NotFoundException.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(NotFoundException = exports.NotFoundException || (exports.NotFoundException = {}));
var TooManyRequestsException;
(function (TooManyRequestsException) {
    /**
     * @internal
     */
    TooManyRequestsException.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(TooManyRequestsException = exports.TooManyRequestsException || (exports.TooManyRequestsException = {}));
var UnprocessableEntityException;
(function (UnprocessableEntityException) {
    /**
     * @internal
     */
    UnprocessableEntityException.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(UnprocessableEntityException = exports.UnprocessableEntityException || (exports.UnprocessableEntityException = {}));
var AvailBlankingState;
(function (AvailBlankingState) {
    AvailBlankingState["DISABLED"] = "DISABLED";
    AvailBlankingState["ENABLED"] = "ENABLED";
})(AvailBlankingState = exports.AvailBlankingState || (exports.AvailBlankingState = {}));
var AvailBlanking;
(function (AvailBlanking) {
    /**
     * @internal
     */
    AvailBlanking.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(AvailBlanking = exports.AvailBlanking || (exports.AvailBlanking = {}));
var Scte35SpliceInsertNoRegionalBlackoutBehavior;
(function (Scte35SpliceInsertNoRegionalBlackoutBehavior) {
    Scte35SpliceInsertNoRegionalBlackoutBehavior["FOLLOW"] = "FOLLOW";
    Scte35SpliceInsertNoRegionalBlackoutBehavior["IGNORE"] = "IGNORE";
})(Scte35SpliceInsertNoRegionalBlackoutBehavior = exports.Scte35SpliceInsertNoRegionalBlackoutBehavior || (exports.Scte35SpliceInsertNoRegionalBlackoutBehavior = {}));
var Scte35SpliceInsertWebDeliveryAllowedBehavior;
(function (Scte35SpliceInsertWebDeliveryAllowedBehavior) {
    Scte35SpliceInsertWebDeliveryAllowedBehavior["FOLLOW"] = "FOLLOW";
    Scte35SpliceInsertWebDeliveryAllowedBehavior["IGNORE"] = "IGNORE";
})(Scte35SpliceInsertWebDeliveryAllowedBehavior = exports.Scte35SpliceInsertWebDeliveryAllowedBehavior || (exports.Scte35SpliceInsertWebDeliveryAllowedBehavior = {}));
var Scte35SpliceInsert;
(function (Scte35SpliceInsert) {
    /**
     * @internal
     */
    Scte35SpliceInsert.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(Scte35SpliceInsert = exports.Scte35SpliceInsert || (exports.Scte35SpliceInsert = {}));
var Scte35AposNoRegionalBlackoutBehavior;
(function (Scte35AposNoRegionalBlackoutBehavior) {
    Scte35AposNoRegionalBlackoutBehavior["FOLLOW"] = "FOLLOW";
    Scte35AposNoRegionalBlackoutBehavior["IGNORE"] = "IGNORE";
})(Scte35AposNoRegionalBlackoutBehavior = exports.Scte35AposNoRegionalBlackoutBehavior || (exports.Scte35AposNoRegionalBlackoutBehavior = {}));
var Scte35AposWebDeliveryAllowedBehavior;
(function (Scte35AposWebDeliveryAllowedBehavior) {
    Scte35AposWebDeliveryAllowedBehavior["FOLLOW"] = "FOLLOW";
    Scte35AposWebDeliveryAllowedBehavior["IGNORE"] = "IGNORE";
})(Scte35AposWebDeliveryAllowedBehavior = exports.Scte35AposWebDeliveryAllowedBehavior || (exports.Scte35AposWebDeliveryAllowedBehavior = {}));
var Scte35TimeSignalApos;
(function (Scte35TimeSignalApos) {
    /**
     * @internal
     */
    Scte35TimeSignalApos.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(Scte35TimeSignalApos = exports.Scte35TimeSignalApos || (exports.Scte35TimeSignalApos = {}));
var AvailSettings;
(function (AvailSettings) {
    /**
     * @internal
     */
    AvailSettings.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(AvailSettings = exports.AvailSettings || (exports.AvailSettings = {}));
var AvailConfiguration;
(function (AvailConfiguration) {
    /**
     * @internal
     */
    AvailConfiguration.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(AvailConfiguration = exports.AvailConfiguration || (exports.AvailConfiguration = {}));
var BatchDeleteRequest;
(function (BatchDeleteRequest) {
    /**
     * @internal
     */
    BatchDeleteRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(BatchDeleteRequest = exports.BatchDeleteRequest || (exports.BatchDeleteRequest = {}));
var BatchDeleteResponse;
(function (BatchDeleteResponse) {
    /**
     * @internal
     */
    BatchDeleteResponse.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(BatchDeleteResponse = exports.BatchDeleteResponse || (exports.BatchDeleteResponse = {}));
var BatchScheduleActionCreateRequest;
(function (BatchScheduleActionCreateRequest) {
    /**
     * @internal
     */
    BatchScheduleActionCreateRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(BatchScheduleActionCreateRequest = exports.BatchScheduleActionCreateRequest || (exports.BatchScheduleActionCreateRequest = {}));
var BatchScheduleActionCreateResult;
(function (BatchScheduleActionCreateResult) {
    /**
     * @internal
     */
    BatchScheduleActionCreateResult.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(BatchScheduleActionCreateResult = exports.BatchScheduleActionCreateResult || (exports.BatchScheduleActionCreateResult = {}));
var BatchScheduleActionDeleteRequest;
(function (BatchScheduleActionDeleteRequest) {
    /**
     * @internal
     */
    BatchScheduleActionDeleteRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(BatchScheduleActionDeleteRequest = exports.BatchScheduleActionDeleteRequest || (exports.BatchScheduleActionDeleteRequest = {}));
var BatchScheduleActionDeleteResult;
(function (BatchScheduleActionDeleteResult) {
    /**
     * @internal
     */
    BatchScheduleActionDeleteResult.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(BatchScheduleActionDeleteResult = exports.BatchScheduleActionDeleteResult || (exports.BatchScheduleActionDeleteResult = {}));
var BatchStartRequest;
(function (BatchStartRequest) {
    /**
     * @internal
     */
    BatchStartRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(BatchStartRequest = exports.BatchStartRequest || (exports.BatchStartRequest = {}));
var BatchStartResponse;
(function (BatchStartResponse) {
    /**
     * @internal
     */
    BatchStartResponse.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(BatchStartResponse = exports.BatchStartResponse || (exports.BatchStartResponse = {}));
var BatchStopRequest;
(function (BatchStopRequest) {
    /**
     * @internal
     */
    BatchStopRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(BatchStopRequest = exports.BatchStopRequest || (exports.BatchStopRequest = {}));
var BatchStopResponse;
(function (BatchStopResponse) {
    /**
     * @internal
     */
    BatchStopResponse.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(BatchStopResponse = exports.BatchStopResponse || (exports.BatchStopResponse = {}));
var BatchUpdateScheduleRequest;
(function (BatchUpdateScheduleRequest) {
    /**
     * @internal
     */
    BatchUpdateScheduleRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(BatchUpdateScheduleRequest = exports.BatchUpdateScheduleRequest || (exports.BatchUpdateScheduleRequest = {}));
var BatchUpdateScheduleResponse;
(function (BatchUpdateScheduleResponse) {
    /**
     * @internal
     */
    BatchUpdateScheduleResponse.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(BatchUpdateScheduleResponse = exports.BatchUpdateScheduleResponse || (exports.BatchUpdateScheduleResponse = {}));
var BlackoutSlateNetworkEndBlackout;
(function (BlackoutSlateNetworkEndBlackout) {
    BlackoutSlateNetworkEndBlackout["DISABLED"] = "DISABLED";
    BlackoutSlateNetworkEndBlackout["ENABLED"] = "ENABLED";
})(BlackoutSlateNetworkEndBlackout = exports.BlackoutSlateNetworkEndBlackout || (exports.BlackoutSlateNetworkEndBlackout = {}));
var BlackoutSlateState;
(function (BlackoutSlateState) {
    BlackoutSlateState["DISABLED"] = "DISABLED";
    BlackoutSlateState["ENABLED"] = "ENABLED";
})(BlackoutSlateState = exports.BlackoutSlateState || (exports.BlackoutSlateState = {}));
var BlackoutSlate;
(function (BlackoutSlate) {
    /**
     * @internal
     */
    BlackoutSlate.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(BlackoutSlate = exports.BlackoutSlate || (exports.BlackoutSlate = {}));
var CancelInputDeviceTransferRequest;
(function (CancelInputDeviceTransferRequest) {
    /**
     * @internal
     */
    CancelInputDeviceTransferRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(CancelInputDeviceTransferRequest = exports.CancelInputDeviceTransferRequest || (exports.CancelInputDeviceTransferRequest = {}));
var CancelInputDeviceTransferResponse;
(function (CancelInputDeviceTransferResponse) {
    /**
     * @internal
     */
    CancelInputDeviceTransferResponse.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(CancelInputDeviceTransferResponse = exports.CancelInputDeviceTransferResponse || (exports.CancelInputDeviceTransferResponse = {}));
var FeatureActivationsInputPrepareScheduleActions;
(function (FeatureActivationsInputPrepareScheduleActions) {
    FeatureActivationsInputPrepareScheduleActions["DISABLED"] = "DISABLED";
    FeatureActivationsInputPrepareScheduleActions["ENABLED"] = "ENABLED";
})(FeatureActivationsInputPrepareScheduleActions = exports.FeatureActivationsInputPrepareScheduleActions || (exports.FeatureActivationsInputPrepareScheduleActions = {}));
var FeatureActivations;
(function (FeatureActivations) {
    /**
     * @internal
     */
    FeatureActivations.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(FeatureActivations = exports.FeatureActivations || (exports.FeatureActivations = {}));
var GlobalConfigurationInputEndAction;
(function (GlobalConfigurationInputEndAction) {
    GlobalConfigurationInputEndAction["NONE"] = "NONE";
    GlobalConfigurationInputEndAction["SWITCH_AND_LOOP_INPUTS"] = "SWITCH_AND_LOOP_INPUTS";
})(GlobalConfigurationInputEndAction = exports.GlobalConfigurationInputEndAction || (exports.GlobalConfigurationInputEndAction = {}));
var InputLossImageType;
(function (InputLossImageType) {
    InputLossImageType["COLOR"] = "COLOR";
    InputLossImageType["SLATE"] = "SLATE";
})(InputLossImageType = exports.InputLossImageType || (exports.InputLossImageType = {}));
var InputLossBehavior;
(function (InputLossBehavior) {
    /**
     * @internal
     */
    InputLossBehavior.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(InputLossBehavior = exports.InputLossBehavior || (exports.InputLossBehavior = {}));
var GlobalConfigurationOutputLockingMode;
(function (GlobalConfigurationOutputLockingMode) {
    GlobalConfigurationOutputLockingMode["EPOCH_LOCKING"] = "EPOCH_LOCKING";
    GlobalConfigurationOutputLockingMode["PIPELINE_LOCKING"] = "PIPELINE_LOCKING";
})(GlobalConfigurationOutputLockingMode = exports.GlobalConfigurationOutputLockingMode || (exports.GlobalConfigurationOutputLockingMode = {}));
var GlobalConfigurationOutputTimingSource;
(function (GlobalConfigurationOutputTimingSource) {
    GlobalConfigurationOutputTimingSource["INPUT_CLOCK"] = "INPUT_CLOCK";
    GlobalConfigurationOutputTimingSource["SYSTEM_CLOCK"] = "SYSTEM_CLOCK";
})(GlobalConfigurationOutputTimingSource = exports.GlobalConfigurationOutputTimingSource || (exports.GlobalConfigurationOutputTimingSource = {}));
var GlobalConfigurationLowFramerateInputs;
(function (GlobalConfigurationLowFramerateInputs) {
    GlobalConfigurationLowFramerateInputs["DISABLED"] = "DISABLED";
    GlobalConfigurationLowFramerateInputs["ENABLED"] = "ENABLED";
})(GlobalConfigurationLowFramerateInputs = exports.GlobalConfigurationLowFramerateInputs || (exports.GlobalConfigurationLowFramerateInputs = {}));
var GlobalConfiguration;
(function (GlobalConfiguration) {
    /**
     * @internal
     */
    GlobalConfiguration.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(GlobalConfiguration = exports.GlobalConfiguration || (exports.GlobalConfiguration = {}));
var MotionGraphicsInsertion;
(function (MotionGraphicsInsertion) {
    MotionGraphicsInsertion["DISABLED"] = "DISABLED";
    MotionGraphicsInsertion["ENABLED"] = "ENABLED";
})(MotionGraphicsInsertion = exports.MotionGraphicsInsertion || (exports.MotionGraphicsInsertion = {}));
var HtmlMotionGraphicsSettings;
(function (HtmlMotionGraphicsSettings) {
    /**
     * @internal
     */
    HtmlMotionGraphicsSettings.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(HtmlMotionGraphicsSettings = exports.HtmlMotionGraphicsSettings || (exports.HtmlMotionGraphicsSettings = {}));
var MotionGraphicsSettings;
(function (MotionGraphicsSettings) {
    /**
     * @internal
     */
    MotionGraphicsSettings.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(MotionGraphicsSettings = exports.MotionGraphicsSettings || (exports.MotionGraphicsSettings = {}));
var MotionGraphicsConfiguration;
(function (MotionGraphicsConfiguration) {
    /**
     * @internal
     */
    MotionGraphicsConfiguration.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(MotionGraphicsConfiguration = exports.MotionGraphicsConfiguration || (exports.MotionGraphicsConfiguration = {}));
var NielsenPcmToId3TaggingState;
(function (NielsenPcmToId3TaggingState) {
    NielsenPcmToId3TaggingState["DISABLED"] = "DISABLED";
    NielsenPcmToId3TaggingState["ENABLED"] = "ENABLED";
})(NielsenPcmToId3TaggingState = exports.NielsenPcmToId3TaggingState || (exports.NielsenPcmToId3TaggingState = {}));
var NielsenConfiguration;
(function (NielsenConfiguration) {
    /**
     * @internal
     */
    NielsenConfiguration.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(NielsenConfiguration = exports.NielsenConfiguration || (exports.NielsenConfiguration = {}));
var TimecodeConfigSource;
(function (TimecodeConfigSource) {
    TimecodeConfigSource["EMBEDDED"] = "EMBEDDED";
    TimecodeConfigSource["SYSTEMCLOCK"] = "SYSTEMCLOCK";
    TimecodeConfigSource["ZEROBASED"] = "ZEROBASED";
})(TimecodeConfigSource = exports.TimecodeConfigSource || (exports.TimecodeConfigSource = {}));
var TimecodeConfig;
(function (TimecodeConfig) {
    /**
     * @internal
     */
    TimecodeConfig.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(TimecodeConfig = exports.TimecodeConfig || (exports.TimecodeConfig = {}));
var EncoderSettings;
(function (EncoderSettings) {
    /**
     * @internal
     */
    EncoderSettings.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(EncoderSettings = exports.EncoderSettings || (exports.EncoderSettings = {}));
var Channel;
(function (Channel) {
    /**
     * @internal
     */
    Channel.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(Channel = exports.Channel || (exports.Channel = {}));
var ContentType;
(function (ContentType) {
    ContentType["image_jpeg"] = "image/jpeg";
})(ContentType = exports.ContentType || (exports.ContentType = {}));
var VpcOutputSettings;
(function (VpcOutputSettings) {
    /**
     * @internal
     */
    VpcOutputSettings.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(VpcOutputSettings = exports.VpcOutputSettings || (exports.VpcOutputSettings = {}));
var CreateChannelRequest;
(function (CreateChannelRequest) {
    /**
     * @internal
     */
    CreateChannelRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(CreateChannelRequest = exports.CreateChannelRequest || (exports.CreateChannelRequest = {}));
var CreateChannelResponse;
(function (CreateChannelResponse) {
    /**
     * @internal
     */
    CreateChannelResponse.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(CreateChannelResponse = exports.CreateChannelResponse || (exports.CreateChannelResponse = {}));
var InputVpcRequest;
(function (InputVpcRequest) {
    /**
     * @internal
     */
    InputVpcRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(InputVpcRequest = exports.InputVpcRequest || (exports.InputVpcRequest = {}));
var CreateInputRequest;
(function (CreateInputRequest) {
    /**
     * @internal
     */
    CreateInputRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(CreateInputRequest = exports.CreateInputRequest || (exports.CreateInputRequest = {}));
var CreateInputResponse;
(function (CreateInputResponse) {
    /**
     * @internal
     */
    CreateInputResponse.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(CreateInputResponse = exports.CreateInputResponse || (exports.CreateInputResponse = {}));
var CreateInputSecurityGroupRequest;
(function (CreateInputSecurityGroupRequest) {
    /**
     * @internal
     */
    CreateInputSecurityGroupRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(CreateInputSecurityGroupRequest = exports.CreateInputSecurityGroupRequest || (exports.CreateInputSecurityGroupRequest = {}));
var CreateInputSecurityGroupResponse;
(function (CreateInputSecurityGroupResponse) {
    /**
     * @internal
     */
    CreateInputSecurityGroupResponse.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(CreateInputSecurityGroupResponse = exports.CreateInputSecurityGroupResponse || (exports.CreateInputSecurityGroupResponse = {}));
var MultiplexSettings;
(function (MultiplexSettings) {
    /**
     * @internal
     */
    MultiplexSettings.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(MultiplexSettings = exports.MultiplexSettings || (exports.MultiplexSettings = {}));
var CreateMultiplexRequest;
(function (CreateMultiplexRequest) {
    /**
     * @internal
     */
    CreateMultiplexRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(CreateMultiplexRequest = exports.CreateMultiplexRequest || (exports.CreateMultiplexRequest = {}));
var Multiplex;
(function (Multiplex) {
    /**
     * @internal
     */
    Multiplex.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(Multiplex = exports.Multiplex || (exports.Multiplex = {}));
var CreateMultiplexResponse;
(function (CreateMultiplexResponse) {
    /**
     * @internal
     */
    CreateMultiplexResponse.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(CreateMultiplexResponse = exports.CreateMultiplexResponse || (exports.CreateMultiplexResponse = {}));
var PreferredChannelPipeline;
(function (PreferredChannelPipeline) {
    PreferredChannelPipeline["CURRENTLY_ACTIVE"] = "CURRENTLY_ACTIVE";
    PreferredChannelPipeline["PIPELINE_0"] = "PIPELINE_0";
    PreferredChannelPipeline["PIPELINE_1"] = "PIPELINE_1";
})(PreferredChannelPipeline = exports.PreferredChannelPipeline || (exports.PreferredChannelPipeline = {}));
var MultiplexProgramServiceDescriptor;
(function (MultiplexProgramServiceDescriptor) {
    /**
     * @internal
     */
    MultiplexProgramServiceDescriptor.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(MultiplexProgramServiceDescriptor = exports.MultiplexProgramServiceDescriptor || (exports.MultiplexProgramServiceDescriptor = {}));
var MultiplexStatmuxVideoSettings;
(function (MultiplexStatmuxVideoSettings) {
    /**
     * @internal
     */
    MultiplexStatmuxVideoSettings.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(MultiplexStatmuxVideoSettings = exports.MultiplexStatmuxVideoSettings || (exports.MultiplexStatmuxVideoSettings = {}));
var MultiplexVideoSettings;
(function (MultiplexVideoSettings) {
    /**
     * @internal
     */
    MultiplexVideoSettings.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(MultiplexVideoSettings = exports.MultiplexVideoSettings || (exports.MultiplexVideoSettings = {}));
var MultiplexProgramSettings;
(function (MultiplexProgramSettings) {
    /**
     * @internal
     */
    MultiplexProgramSettings.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(MultiplexProgramSettings = exports.MultiplexProgramSettings || (exports.MultiplexProgramSettings = {}));
var CreateMultiplexProgramRequest;
(function (CreateMultiplexProgramRequest) {
    /**
     * @internal
     */
    CreateMultiplexProgramRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(CreateMultiplexProgramRequest = exports.CreateMultiplexProgramRequest || (exports.CreateMultiplexProgramRequest = {}));
var MultiplexProgramPacketIdentifiersMap;
(function (MultiplexProgramPacketIdentifiersMap) {
    /**
     * @internal
     */
    MultiplexProgramPacketIdentifiersMap.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(MultiplexProgramPacketIdentifiersMap = exports.MultiplexProgramPacketIdentifiersMap || (exports.MultiplexProgramPacketIdentifiersMap = {}));
var MultiplexProgram;
(function (MultiplexProgram) {
    /**
     * @internal
     */
    MultiplexProgram.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(MultiplexProgram = exports.MultiplexProgram || (exports.MultiplexProgram = {}));
var CreateMultiplexProgramResponse;
(function (CreateMultiplexProgramResponse) {
    /**
     * @internal
     */
    CreateMultiplexProgramResponse.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(CreateMultiplexProgramResponse = exports.CreateMultiplexProgramResponse || (exports.CreateMultiplexProgramResponse = {}));
var CreatePartnerInputRequest;
(function (CreatePartnerInputRequest) {
    /**
     * @internal
     */
    CreatePartnerInputRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(CreatePartnerInputRequest = exports.CreatePartnerInputRequest || (exports.CreatePartnerInputRequest = {}));
var CreatePartnerInputResponse;
(function (CreatePartnerInputResponse) {
    /**
     * @internal
     */
    CreatePartnerInputResponse.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(CreatePartnerInputResponse = exports.CreatePartnerInputResponse || (exports.CreatePartnerInputResponse = {}));
var CreateTagsRequest;
(function (CreateTagsRequest) {
    /**
     * @internal
     */
    CreateTagsRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(CreateTagsRequest = exports.CreateTagsRequest || (exports.CreateTagsRequest = {}));
var DeleteChannelRequest;
(function (DeleteChannelRequest) {
    /**
     * @internal
     */
    DeleteChannelRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(DeleteChannelRequest = exports.DeleteChannelRequest || (exports.DeleteChannelRequest = {}));
var DeleteChannelResponse;
(function (DeleteChannelResponse) {
    /**
     * @internal
     */
    DeleteChannelResponse.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(DeleteChannelResponse = exports.DeleteChannelResponse || (exports.DeleteChannelResponse = {}));
var DeleteInputRequest;
(function (DeleteInputRequest) {
    /**
     * @internal
     */
    DeleteInputRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(DeleteInputRequest = exports.DeleteInputRequest || (exports.DeleteInputRequest = {}));
var DeleteInputResponse;
(function (DeleteInputResponse) {
    /**
     * @internal
     */
    DeleteInputResponse.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(DeleteInputResponse = exports.DeleteInputResponse || (exports.DeleteInputResponse = {}));
var DeleteInputSecurityGroupRequest;
(function (DeleteInputSecurityGroupRequest) {
    /**
     * @internal
     */
    DeleteInputSecurityGroupRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(DeleteInputSecurityGroupRequest = exports.DeleteInputSecurityGroupRequest || (exports.DeleteInputSecurityGroupRequest = {}));
var DeleteInputSecurityGroupResponse;
(function (DeleteInputSecurityGroupResponse) {
    /**
     * @internal
     */
    DeleteInputSecurityGroupResponse.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(DeleteInputSecurityGroupResponse = exports.DeleteInputSecurityGroupResponse || (exports.DeleteInputSecurityGroupResponse = {}));
var DeleteMultiplexRequest;
(function (DeleteMultiplexRequest) {
    /**
     * @internal
     */
    DeleteMultiplexRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(DeleteMultiplexRequest = exports.DeleteMultiplexRequest || (exports.DeleteMultiplexRequest = {}));
var DeleteMultiplexResponse;
(function (DeleteMultiplexResponse) {
    /**
     * @internal
     */
    DeleteMultiplexResponse.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(DeleteMultiplexResponse = exports.DeleteMultiplexResponse || (exports.DeleteMultiplexResponse = {}));
var DeleteMultiplexProgramRequest;
(function (DeleteMultiplexProgramRequest) {
    /**
     * @internal
     */
    DeleteMultiplexProgramRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(DeleteMultiplexProgramRequest = exports.DeleteMultiplexProgramRequest || (exports.DeleteMultiplexProgramRequest = {}));
var DeleteMultiplexProgramResponse;
(function (DeleteMultiplexProgramResponse) {
    /**
     * @internal
     */
    DeleteMultiplexProgramResponse.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(DeleteMultiplexProgramResponse = exports.DeleteMultiplexProgramResponse || (exports.DeleteMultiplexProgramResponse = {}));
var DeleteReservationRequest;
(function (DeleteReservationRequest) {
    /**
     * @internal
     */
    DeleteReservationRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(DeleteReservationRequest = exports.DeleteReservationRequest || (exports.DeleteReservationRequest = {}));
var DeleteReservationResponse;
(function (DeleteReservationResponse) {
    /**
     * @internal
     */
    DeleteReservationResponse.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(DeleteReservationResponse = exports.DeleteReservationResponse || (exports.DeleteReservationResponse = {}));
var DeleteScheduleRequest;
(function (DeleteScheduleRequest) {
    /**
     * @internal
     */
    DeleteScheduleRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(DeleteScheduleRequest = exports.DeleteScheduleRequest || (exports.DeleteScheduleRequest = {}));
var DeleteScheduleResponse;
(function (DeleteScheduleResponse) {
    /**
     * @internal
     */
    DeleteScheduleResponse.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(DeleteScheduleResponse = exports.DeleteScheduleResponse || (exports.DeleteScheduleResponse = {}));
var DeleteTagsRequest;
(function (DeleteTagsRequest) {
    /**
     * @internal
     */
    DeleteTagsRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(DeleteTagsRequest = exports.DeleteTagsRequest || (exports.DeleteTagsRequest = {}));
var DescribeChannelRequest;
(function (DescribeChannelRequest) {
    /**
     * @internal
     */
    DescribeChannelRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(DescribeChannelRequest = exports.DescribeChannelRequest || (exports.DescribeChannelRequest = {}));
var DescribeChannelResponse;
(function (DescribeChannelResponse) {
    /**
     * @internal
     */
    DescribeChannelResponse.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(DescribeChannelResponse = exports.DescribeChannelResponse || (exports.DescribeChannelResponse = {}));
var DescribeInputRequest;
(function (DescribeInputRequest) {
    /**
     * @internal
     */
    DescribeInputRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(DescribeInputRequest = exports.DescribeInputRequest || (exports.DescribeInputRequest = {}));
var DescribeInputResponse;
(function (DescribeInputResponse) {
    /**
     * @internal
     */
    DescribeInputResponse.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(DescribeInputResponse = exports.DescribeInputResponse || (exports.DescribeInputResponse = {}));
var DescribeInputDeviceRequest;
(function (DescribeInputDeviceRequest) {
    /**
     * @internal
     */
    DescribeInputDeviceRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(DescribeInputDeviceRequest = exports.DescribeInputDeviceRequest || (exports.DescribeInputDeviceRequest = {}));
var DescribeInputDeviceResponse;
(function (DescribeInputDeviceResponse) {
    /**
     * @internal
     */
    DescribeInputDeviceResponse.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(DescribeInputDeviceResponse = exports.DescribeInputDeviceResponse || (exports.DescribeInputDeviceResponse = {}));
var DescribeInputDeviceThumbnailRequest;
(function (DescribeInputDeviceThumbnailRequest) {
    /**
     * @internal
     */
    DescribeInputDeviceThumbnailRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(DescribeInputDeviceThumbnailRequest = exports.DescribeInputDeviceThumbnailRequest || (exports.DescribeInputDeviceThumbnailRequest = {}));
var DescribeInputDeviceThumbnailResponse;
(function (DescribeInputDeviceThumbnailResponse) {
    /**
     * @internal
     */
    DescribeInputDeviceThumbnailResponse.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(DescribeInputDeviceThumbnailResponse = exports.DescribeInputDeviceThumbnailResponse || (exports.DescribeInputDeviceThumbnailResponse = {}));
var DescribeInputSecurityGroupRequest;
(function (DescribeInputSecurityGroupRequest) {
    /**
     * @internal
     */
    DescribeInputSecurityGroupRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(DescribeInputSecurityGroupRequest = exports.DescribeInputSecurityGroupRequest || (exports.DescribeInputSecurityGroupRequest = {}));
var DescribeInputSecurityGroupResponse;
(function (DescribeInputSecurityGroupResponse) {
    /**
     * @internal
     */
    DescribeInputSecurityGroupResponse.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(DescribeInputSecurityGroupResponse = exports.DescribeInputSecurityGroupResponse || (exports.DescribeInputSecurityGroupResponse = {}));
var DescribeMultiplexRequest;
(function (DescribeMultiplexRequest) {
    /**
     * @internal
     */
    DescribeMultiplexRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(DescribeMultiplexRequest = exports.DescribeMultiplexRequest || (exports.DescribeMultiplexRequest = {}));
var DescribeMultiplexResponse;
(function (DescribeMultiplexResponse) {
    /**
     * @internal
     */
    DescribeMultiplexResponse.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(DescribeMultiplexResponse = exports.DescribeMultiplexResponse || (exports.DescribeMultiplexResponse = {}));
var DescribeMultiplexProgramRequest;
(function (DescribeMultiplexProgramRequest) {
    /**
     * @internal
     */
    DescribeMultiplexProgramRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(DescribeMultiplexProgramRequest = exports.DescribeMultiplexProgramRequest || (exports.DescribeMultiplexProgramRequest = {}));
var DescribeMultiplexProgramResponse;
(function (DescribeMultiplexProgramResponse) {
    /**
     * @internal
     */
    DescribeMultiplexProgramResponse.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(DescribeMultiplexProgramResponse = exports.DescribeMultiplexProgramResponse || (exports.DescribeMultiplexProgramResponse = {}));
var DescribeOfferingRequest;
(function (DescribeOfferingRequest) {
    /**
     * @internal
     */
    DescribeOfferingRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(DescribeOfferingRequest = exports.DescribeOfferingRequest || (exports.DescribeOfferingRequest = {}));
var DescribeOfferingResponse;
(function (DescribeOfferingResponse) {
    /**
     * @internal
     */
    DescribeOfferingResponse.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(DescribeOfferingResponse = exports.DescribeOfferingResponse || (exports.DescribeOfferingResponse = {}));
var DescribeReservationRequest;
(function (DescribeReservationRequest) {
    /**
     * @internal
     */
    DescribeReservationRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(DescribeReservationRequest = exports.DescribeReservationRequest || (exports.DescribeReservationRequest = {}));
var DescribeReservationResponse;
(function (DescribeReservationResponse) {
    /**
     * @internal
     */
    DescribeReservationResponse.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(DescribeReservationResponse = exports.DescribeReservationResponse || (exports.DescribeReservationResponse = {}));
var DescribeScheduleRequest;
(function (DescribeScheduleRequest) {
    /**
     * @internal
     */
    DescribeScheduleRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(DescribeScheduleRequest = exports.DescribeScheduleRequest || (exports.DescribeScheduleRequest = {}));
var DescribeScheduleResponse;
(function (DescribeScheduleResponse) {
    /**
     * @internal
     */
    DescribeScheduleResponse.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(DescribeScheduleResponse = exports.DescribeScheduleResponse || (exports.DescribeScheduleResponse = {}));
var InputDeviceConfigurableSettings;
(function (InputDeviceConfigurableSettings) {
    /**
     * @internal
     */
    InputDeviceConfigurableSettings.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(InputDeviceConfigurableSettings = exports.InputDeviceConfigurableSettings || (exports.InputDeviceConfigurableSettings = {}));
var ListChannelsRequest;
(function (ListChannelsRequest) {
    /**
     * @internal
     */
    ListChannelsRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(ListChannelsRequest = exports.ListChannelsRequest || (exports.ListChannelsRequest = {}));
var ListChannelsResponse;
(function (ListChannelsResponse) {
    /**
     * @internal
     */
    ListChannelsResponse.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(ListChannelsResponse = exports.ListChannelsResponse || (exports.ListChannelsResponse = {}));
var ListInputDevicesRequest;
(function (ListInputDevicesRequest) {
    /**
     * @internal
     */
    ListInputDevicesRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(ListInputDevicesRequest = exports.ListInputDevicesRequest || (exports.ListInputDevicesRequest = {}));
var ListInputDevicesResponse;
(function (ListInputDevicesResponse) {
    /**
     * @internal
     */
    ListInputDevicesResponse.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(ListInputDevicesResponse = exports.ListInputDevicesResponse || (exports.ListInputDevicesResponse = {}));
var ListInputDeviceTransfersRequest;
(function (ListInputDeviceTransfersRequest) {
    /**
     * @internal
     */
    ListInputDeviceTransfersRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(ListInputDeviceTransfersRequest = exports.ListInputDeviceTransfersRequest || (exports.ListInputDeviceTransfersRequest = {}));
var ListInputDeviceTransfersResponse;
(function (ListInputDeviceTransfersResponse) {
    /**
     * @internal
     */
    ListInputDeviceTransfersResponse.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(ListInputDeviceTransfersResponse = exports.ListInputDeviceTransfersResponse || (exports.ListInputDeviceTransfersResponse = {}));
var ListInputsRequest;
(function (ListInputsRequest) {
    /**
     * @internal
     */
    ListInputsRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(ListInputsRequest = exports.ListInputsRequest || (exports.ListInputsRequest = {}));
var ListInputsResponse;
(function (ListInputsResponse) {
    /**
     * @internal
     */
    ListInputsResponse.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(ListInputsResponse = exports.ListInputsResponse || (exports.ListInputsResponse = {}));
var ListInputSecurityGroupsRequest;
(function (ListInputSecurityGroupsRequest) {
    /**
     * @internal
     */
    ListInputSecurityGroupsRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(ListInputSecurityGroupsRequest = exports.ListInputSecurityGroupsRequest || (exports.ListInputSecurityGroupsRequest = {}));
var ListInputSecurityGroupsResponse;
(function (ListInputSecurityGroupsResponse) {
    /**
     * @internal
     */
    ListInputSecurityGroupsResponse.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(ListInputSecurityGroupsResponse = exports.ListInputSecurityGroupsResponse || (exports.ListInputSecurityGroupsResponse = {}));
var ListMultiplexesRequest;
(function (ListMultiplexesRequest) {
    /**
     * @internal
     */
    ListMultiplexesRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(ListMultiplexesRequest = exports.ListMultiplexesRequest || (exports.ListMultiplexesRequest = {}));
var ListMultiplexesResponse;
(function (ListMultiplexesResponse) {
    /**
     * @internal
     */
    ListMultiplexesResponse.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(ListMultiplexesResponse = exports.ListMultiplexesResponse || (exports.ListMultiplexesResponse = {}));
var ListMultiplexProgramsRequest;
(function (ListMultiplexProgramsRequest) {
    /**
     * @internal
     */
    ListMultiplexProgramsRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(ListMultiplexProgramsRequest = exports.ListMultiplexProgramsRequest || (exports.ListMultiplexProgramsRequest = {}));
var ListMultiplexProgramsResponse;
(function (ListMultiplexProgramsResponse) {
    /**
     * @internal
     */
    ListMultiplexProgramsResponse.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(ListMultiplexProgramsResponse = exports.ListMultiplexProgramsResponse || (exports.ListMultiplexProgramsResponse = {}));
var ListOfferingsRequest;
(function (ListOfferingsRequest) {
    /**
     * @internal
     */
    ListOfferingsRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(ListOfferingsRequest = exports.ListOfferingsRequest || (exports.ListOfferingsRequest = {}));
var ListOfferingsResponse;
(function (ListOfferingsResponse) {
    /**
     * @internal
     */
    ListOfferingsResponse.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(ListOfferingsResponse = exports.ListOfferingsResponse || (exports.ListOfferingsResponse = {}));
var ListReservationsRequest;
(function (ListReservationsRequest) {
    /**
     * @internal
     */
    ListReservationsRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(ListReservationsRequest = exports.ListReservationsRequest || (exports.ListReservationsRequest = {}));
var ListReservationsResponse;
(function (ListReservationsResponse) {
    /**
     * @internal
     */
    ListReservationsResponse.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(ListReservationsResponse = exports.ListReservationsResponse || (exports.ListReservationsResponse = {}));
var ListTagsForResourceRequest;
(function (ListTagsForResourceRequest) {
    /**
     * @internal
     */
    ListTagsForResourceRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(ListTagsForResourceRequest = exports.ListTagsForResourceRequest || (exports.ListTagsForResourceRequest = {}));
var ListTagsForResourceResponse;
(function (ListTagsForResourceResponse) {
    /**
     * @internal
     */
    ListTagsForResourceResponse.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(ListTagsForResourceResponse = exports.ListTagsForResourceResponse || (exports.ListTagsForResourceResponse = {}));
var PurchaseOfferingRequest;
(function (PurchaseOfferingRequest) {
    /**
     * @internal
     */
    PurchaseOfferingRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(PurchaseOfferingRequest = exports.PurchaseOfferingRequest || (exports.PurchaseOfferingRequest = {}));
var PurchaseOfferingResponse;
(function (PurchaseOfferingResponse) {
    /**
     * @internal
     */
    PurchaseOfferingResponse.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(PurchaseOfferingResponse = exports.PurchaseOfferingResponse || (exports.PurchaseOfferingResponse = {}));
var RejectInputDeviceTransferRequest;
(function (RejectInputDeviceTransferRequest) {
    /**
     * @internal
     */
    RejectInputDeviceTransferRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(RejectInputDeviceTransferRequest = exports.RejectInputDeviceTransferRequest || (exports.RejectInputDeviceTransferRequest = {}));
var RejectInputDeviceTransferResponse;
(function (RejectInputDeviceTransferResponse) {
    /**
     * @internal
     */
    RejectInputDeviceTransferResponse.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(RejectInputDeviceTransferResponse = exports.RejectInputDeviceTransferResponse || (exports.RejectInputDeviceTransferResponse = {}));
var StartChannelRequest;
(function (StartChannelRequest) {
    /**
     * @internal
     */
    StartChannelRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(StartChannelRequest = exports.StartChannelRequest || (exports.StartChannelRequest = {}));
var StartChannelResponse;
(function (StartChannelResponse) {
    /**
     * @internal
     */
    StartChannelResponse.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(StartChannelResponse = exports.StartChannelResponse || (exports.StartChannelResponse = {}));
var StartMultiplexRequest;
(function (StartMultiplexRequest) {
    /**
     * @internal
     */
    StartMultiplexRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(StartMultiplexRequest = exports.StartMultiplexRequest || (exports.StartMultiplexRequest = {}));
var StartMultiplexResponse;
(function (StartMultiplexResponse) {
    /**
     * @internal
     */
    StartMultiplexResponse.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(StartMultiplexResponse = exports.StartMultiplexResponse || (exports.StartMultiplexResponse = {}));
var StopChannelRequest;
(function (StopChannelRequest) {
    /**
     * @internal
     */
    StopChannelRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(StopChannelRequest = exports.StopChannelRequest || (exports.StopChannelRequest = {}));
var StopChannelResponse;
(function (StopChannelResponse) {
    /**
     * @internal
     */
    StopChannelResponse.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(StopChannelResponse = exports.StopChannelResponse || (exports.StopChannelResponse = {}));
var StopMultiplexRequest;
(function (StopMultiplexRequest) {
    /**
     * @internal
     */
    StopMultiplexRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(StopMultiplexRequest = exports.StopMultiplexRequest || (exports.StopMultiplexRequest = {}));
var StopMultiplexResponse;
(function (StopMultiplexResponse) {
    /**
     * @internal
     */
    StopMultiplexResponse.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(StopMultiplexResponse = exports.StopMultiplexResponse || (exports.StopMultiplexResponse = {}));
var TransferInputDeviceRequest;
(function (TransferInputDeviceRequest) {
    /**
     * @internal
     */
    TransferInputDeviceRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(TransferInputDeviceRequest = exports.TransferInputDeviceRequest || (exports.TransferInputDeviceRequest = {}));
var TransferInputDeviceResponse;
(function (TransferInputDeviceResponse) {
    /**
     * @internal
     */
    TransferInputDeviceResponse.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(TransferInputDeviceResponse = exports.TransferInputDeviceResponse || (exports.TransferInputDeviceResponse = {}));
var UpdateChannelRequest;
(function (UpdateChannelRequest) {
    /**
     * @internal
     */
    UpdateChannelRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(UpdateChannelRequest = exports.UpdateChannelRequest || (exports.UpdateChannelRequest = {}));
var UpdateChannelResponse;
(function (UpdateChannelResponse) {
    /**
     * @internal
     */
    UpdateChannelResponse.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(UpdateChannelResponse = exports.UpdateChannelResponse || (exports.UpdateChannelResponse = {}));
var UpdateChannelClassRequest;
(function (UpdateChannelClassRequest) {
    /**
     * @internal
     */
    UpdateChannelClassRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(UpdateChannelClassRequest = exports.UpdateChannelClassRequest || (exports.UpdateChannelClassRequest = {}));
var UpdateChannelClassResponse;
(function (UpdateChannelClassResponse) {
    /**
     * @internal
     */
    UpdateChannelClassResponse.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(UpdateChannelClassResponse = exports.UpdateChannelClassResponse || (exports.UpdateChannelClassResponse = {}));
var UpdateInputRequest;
(function (UpdateInputRequest) {
    /**
     * @internal
     */
    UpdateInputRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(UpdateInputRequest = exports.UpdateInputRequest || (exports.UpdateInputRequest = {}));
var UpdateInputResponse;
(function (UpdateInputResponse) {
    /**
     * @internal
     */
    UpdateInputResponse.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(UpdateInputResponse = exports.UpdateInputResponse || (exports.UpdateInputResponse = {}));
var UpdateInputDeviceRequest;
(function (UpdateInputDeviceRequest) {
    /**
     * @internal
     */
    UpdateInputDeviceRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(UpdateInputDeviceRequest = exports.UpdateInputDeviceRequest || (exports.UpdateInputDeviceRequest = {}));
var UpdateInputDeviceResponse;
(function (UpdateInputDeviceResponse) {
    /**
     * @internal
     */
    UpdateInputDeviceResponse.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(UpdateInputDeviceResponse = exports.UpdateInputDeviceResponse || (exports.UpdateInputDeviceResponse = {}));
var UpdateInputSecurityGroupRequest;
(function (UpdateInputSecurityGroupRequest) {
    /**
     * @internal
     */
    UpdateInputSecurityGroupRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(UpdateInputSecurityGroupRequest = exports.UpdateInputSecurityGroupRequest || (exports.UpdateInputSecurityGroupRequest = {}));
var UpdateInputSecurityGroupResponse;
(function (UpdateInputSecurityGroupResponse) {
    /**
     * @internal
     */
    UpdateInputSecurityGroupResponse.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(UpdateInputSecurityGroupResponse = exports.UpdateInputSecurityGroupResponse || (exports.UpdateInputSecurityGroupResponse = {}));
var UpdateMultiplexRequest;
(function (UpdateMultiplexRequest) {
    /**
     * @internal
     */
    UpdateMultiplexRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(UpdateMultiplexRequest = exports.UpdateMultiplexRequest || (exports.UpdateMultiplexRequest = {}));
var UpdateMultiplexResponse;
(function (UpdateMultiplexResponse) {
    /**
     * @internal
     */
    UpdateMultiplexResponse.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(UpdateMultiplexResponse = exports.UpdateMultiplexResponse || (exports.UpdateMultiplexResponse = {}));
var UpdateMultiplexProgramRequest;
(function (UpdateMultiplexProgramRequest) {
    /**
     * @internal
     */
    UpdateMultiplexProgramRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(UpdateMultiplexProgramRequest = exports.UpdateMultiplexProgramRequest || (exports.UpdateMultiplexProgramRequest = {}));
var UpdateMultiplexProgramResponse;
(function (UpdateMultiplexProgramResponse) {
    /**
     * @internal
     */
    UpdateMultiplexProgramResponse.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(UpdateMultiplexProgramResponse = exports.UpdateMultiplexProgramResponse || (exports.UpdateMultiplexProgramResponse = {}));
var UpdateReservationRequest;
(function (UpdateReservationRequest) {
    /**
     * @internal
     */
    UpdateReservationRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(UpdateReservationRequest = exports.UpdateReservationRequest || (exports.UpdateReservationRequest = {}));
var UpdateReservationResponse;
(function (UpdateReservationResponse) {
    /**
     * @internal
     */
    UpdateReservationResponse.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(UpdateReservationResponse = exports.UpdateReservationResponse || (exports.UpdateReservationResponse = {}));
//# sourceMappingURL=models_1.js.map