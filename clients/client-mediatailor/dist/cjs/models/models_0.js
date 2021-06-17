"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DeletePlaybackConfigurationResponse = exports.DeletePlaybackConfigurationRequest = exports.DeleteChannelPolicyResponse = exports.DeleteChannelPolicyRequest = exports.DeleteChannelResponse = exports.DeleteChannelRequest = exports.DashConfigurationForPut = exports.CreateVodSourceResponse = exports.CreateVodSourceRequest = exports.CreateSourceLocationResponse = exports.CreateSourceLocationRequest = exports.CreateProgramResponse = exports.CreateProgramRequest = exports.ScheduleConfiguration = exports.Transition = exports.RelativePosition = exports.CreateChannelResponse = exports.CreateChannelRequest = exports.PlaybackMode = exports.RequestOutputItem = exports.ChannelState = exports.BadRequestException = exports.VodSource = exports.HttpPackageConfiguration = exports.Type = exports.SourceLocation = exports.HttpConfiguration = exports.DefaultSegmentDeliveryConfiguration = exports.AccessConfiguration = exports.AccessType = exports.ScheduleEntry = exports.PlaybackConfiguration = exports.ManifestProcessingRules = exports.AdMarkerPassthrough = exports.LivePreRollConfiguration = exports.HlsConfiguration = exports.DashConfiguration = exports.OriginManifestType = exports.CdnConfiguration = exports.Bumper = exports.AvailSuppression = exports.Mode = exports.Channel = exports.ResponseOutputItem = exports.HlsPlaylistSettings = exports.DashPlaylistSettings = exports.AdBreak = exports.SpliceInsertMessage = exports.SlateSource = exports.MessageType = void 0;
exports.UpdateVodSourceResponse = exports.UpdateVodSourceRequest = exports.UpdateSourceLocationResponse = exports.UpdateSourceLocationRequest = exports.UpdateChannelResponse = exports.UpdateChannelRequest = exports.UntagResourceRequest = exports.TagResourceRequest = exports.StopChannelResponse = exports.StopChannelRequest = exports.StartChannelResponse = exports.StartChannelRequest = exports.PutPlaybackConfigurationResponse = exports.PutPlaybackConfigurationRequest = exports.PutChannelPolicyResponse = exports.PutChannelPolicyRequest = exports.ListVodSourcesResponse = exports.ListVodSourcesRequest = exports.ListTagsForResourceResponse = exports.ListTagsForResourceRequest = exports.ListSourceLocationsResponse = exports.ListSourceLocationsRequest = exports.ListPlaybackConfigurationsResponse = exports.ListPlaybackConfigurationsRequest = exports.ListChannelsResponse = exports.ListChannelsRequest = exports.GetPlaybackConfigurationResponse = exports.GetPlaybackConfigurationRequest = exports.GetChannelScheduleResponse = exports.GetChannelScheduleRequest = exports.GetChannelPolicyResponse = exports.GetChannelPolicyRequest = exports.DescribeVodSourceResponse = exports.DescribeVodSourceRequest = exports.DescribeSourceLocationResponse = exports.DescribeSourceLocationRequest = exports.DescribeProgramResponse = exports.DescribeProgramRequest = exports.DescribeChannelResponse = exports.DescribeChannelRequest = exports.DeleteVodSourceResponse = exports.DeleteVodSourceRequest = exports.DeleteSourceLocationResponse = exports.DeleteSourceLocationRequest = exports.DeleteProgramResponse = exports.DeleteProgramRequest = void 0;
var MessageType;
(function (MessageType) {
    MessageType["SPLICE_INSERT"] = "SPLICE_INSERT";
})(MessageType = exports.MessageType || (exports.MessageType = {}));
var SlateSource;
(function (SlateSource) {
    /**
     * @internal
     */
    SlateSource.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(SlateSource = exports.SlateSource || (exports.SlateSource = {}));
var SpliceInsertMessage;
(function (SpliceInsertMessage) {
    /**
     * @internal
     */
    SpliceInsertMessage.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(SpliceInsertMessage = exports.SpliceInsertMessage || (exports.SpliceInsertMessage = {}));
var AdBreak;
(function (AdBreak) {
    /**
     * @internal
     */
    AdBreak.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(AdBreak = exports.AdBreak || (exports.AdBreak = {}));
var DashPlaylistSettings;
(function (DashPlaylistSettings) {
    /**
     * @internal
     */
    DashPlaylistSettings.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(DashPlaylistSettings = exports.DashPlaylistSettings || (exports.DashPlaylistSettings = {}));
var HlsPlaylistSettings;
(function (HlsPlaylistSettings) {
    /**
     * @internal
     */
    HlsPlaylistSettings.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(HlsPlaylistSettings = exports.HlsPlaylistSettings || (exports.HlsPlaylistSettings = {}));
var ResponseOutputItem;
(function (ResponseOutputItem) {
    /**
     * @internal
     */
    ResponseOutputItem.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(ResponseOutputItem = exports.ResponseOutputItem || (exports.ResponseOutputItem = {}));
var Channel;
(function (Channel) {
    /**
     * @internal
     */
    Channel.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(Channel = exports.Channel || (exports.Channel = {}));
var Mode;
(function (Mode) {
    Mode["BEHIND_LIVE_EDGE"] = "BEHIND_LIVE_EDGE";
    Mode["OFF"] = "OFF";
})(Mode = exports.Mode || (exports.Mode = {}));
var AvailSuppression;
(function (AvailSuppression) {
    /**
     * @internal
     */
    AvailSuppression.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(AvailSuppression = exports.AvailSuppression || (exports.AvailSuppression = {}));
var Bumper;
(function (Bumper) {
    /**
     * @internal
     */
    Bumper.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(Bumper = exports.Bumper || (exports.Bumper = {}));
var CdnConfiguration;
(function (CdnConfiguration) {
    /**
     * @internal
     */
    CdnConfiguration.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(CdnConfiguration = exports.CdnConfiguration || (exports.CdnConfiguration = {}));
var OriginManifestType;
(function (OriginManifestType) {
    OriginManifestType["MULTI_PERIOD"] = "MULTI_PERIOD";
    OriginManifestType["SINGLE_PERIOD"] = "SINGLE_PERIOD";
})(OriginManifestType = exports.OriginManifestType || (exports.OriginManifestType = {}));
var DashConfiguration;
(function (DashConfiguration) {
    /**
     * @internal
     */
    DashConfiguration.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(DashConfiguration = exports.DashConfiguration || (exports.DashConfiguration = {}));
var HlsConfiguration;
(function (HlsConfiguration) {
    /**
     * @internal
     */
    HlsConfiguration.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(HlsConfiguration = exports.HlsConfiguration || (exports.HlsConfiguration = {}));
var LivePreRollConfiguration;
(function (LivePreRollConfiguration) {
    /**
     * @internal
     */
    LivePreRollConfiguration.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(LivePreRollConfiguration = exports.LivePreRollConfiguration || (exports.LivePreRollConfiguration = {}));
var AdMarkerPassthrough;
(function (AdMarkerPassthrough) {
    /**
     * @internal
     */
    AdMarkerPassthrough.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(AdMarkerPassthrough = exports.AdMarkerPassthrough || (exports.AdMarkerPassthrough = {}));
var ManifestProcessingRules;
(function (ManifestProcessingRules) {
    /**
     * @internal
     */
    ManifestProcessingRules.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(ManifestProcessingRules = exports.ManifestProcessingRules || (exports.ManifestProcessingRules = {}));
var PlaybackConfiguration;
(function (PlaybackConfiguration) {
    /**
     * @internal
     */
    PlaybackConfiguration.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(PlaybackConfiguration = exports.PlaybackConfiguration || (exports.PlaybackConfiguration = {}));
var ScheduleEntry;
(function (ScheduleEntry) {
    /**
     * @internal
     */
    ScheduleEntry.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(ScheduleEntry = exports.ScheduleEntry || (exports.ScheduleEntry = {}));
var AccessType;
(function (AccessType) {
    AccessType["S3_SIGV4"] = "S3_SIGV4";
})(AccessType = exports.AccessType || (exports.AccessType = {}));
var AccessConfiguration;
(function (AccessConfiguration) {
    /**
     * @internal
     */
    AccessConfiguration.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(AccessConfiguration = exports.AccessConfiguration || (exports.AccessConfiguration = {}));
var DefaultSegmentDeliveryConfiguration;
(function (DefaultSegmentDeliveryConfiguration) {
    /**
     * @internal
     */
    DefaultSegmentDeliveryConfiguration.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(DefaultSegmentDeliveryConfiguration = exports.DefaultSegmentDeliveryConfiguration || (exports.DefaultSegmentDeliveryConfiguration = {}));
var HttpConfiguration;
(function (HttpConfiguration) {
    /**
     * @internal
     */
    HttpConfiguration.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(HttpConfiguration = exports.HttpConfiguration || (exports.HttpConfiguration = {}));
var SourceLocation;
(function (SourceLocation) {
    /**
     * @internal
     */
    SourceLocation.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(SourceLocation = exports.SourceLocation || (exports.SourceLocation = {}));
var Type;
(function (Type) {
    Type["DASH"] = "DASH";
    Type["HLS"] = "HLS";
})(Type = exports.Type || (exports.Type = {}));
var HttpPackageConfiguration;
(function (HttpPackageConfiguration) {
    /**
     * @internal
     */
    HttpPackageConfiguration.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(HttpPackageConfiguration = exports.HttpPackageConfiguration || (exports.HttpPackageConfiguration = {}));
var VodSource;
(function (VodSource) {
    /**
     * @internal
     */
    VodSource.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(VodSource = exports.VodSource || (exports.VodSource = {}));
var BadRequestException;
(function (BadRequestException) {
    /**
     * @internal
     */
    BadRequestException.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(BadRequestException = exports.BadRequestException || (exports.BadRequestException = {}));
var ChannelState;
(function (ChannelState) {
    ChannelState["RUNNING"] = "RUNNING";
    ChannelState["STOPPED"] = "STOPPED";
})(ChannelState = exports.ChannelState || (exports.ChannelState = {}));
var RequestOutputItem;
(function (RequestOutputItem) {
    /**
     * @internal
     */
    RequestOutputItem.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(RequestOutputItem = exports.RequestOutputItem || (exports.RequestOutputItem = {}));
var PlaybackMode;
(function (PlaybackMode) {
    PlaybackMode["LOOP"] = "LOOP";
})(PlaybackMode = exports.PlaybackMode || (exports.PlaybackMode = {}));
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
var RelativePosition;
(function (RelativePosition) {
    RelativePosition["AFTER_PROGRAM"] = "AFTER_PROGRAM";
    RelativePosition["BEFORE_PROGRAM"] = "BEFORE_PROGRAM";
})(RelativePosition = exports.RelativePosition || (exports.RelativePosition = {}));
var Transition;
(function (Transition) {
    /**
     * @internal
     */
    Transition.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(Transition = exports.Transition || (exports.Transition = {}));
var ScheduleConfiguration;
(function (ScheduleConfiguration) {
    /**
     * @internal
     */
    ScheduleConfiguration.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(ScheduleConfiguration = exports.ScheduleConfiguration || (exports.ScheduleConfiguration = {}));
var CreateProgramRequest;
(function (CreateProgramRequest) {
    /**
     * @internal
     */
    CreateProgramRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(CreateProgramRequest = exports.CreateProgramRequest || (exports.CreateProgramRequest = {}));
var CreateProgramResponse;
(function (CreateProgramResponse) {
    /**
     * @internal
     */
    CreateProgramResponse.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(CreateProgramResponse = exports.CreateProgramResponse || (exports.CreateProgramResponse = {}));
var CreateSourceLocationRequest;
(function (CreateSourceLocationRequest) {
    /**
     * @internal
     */
    CreateSourceLocationRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(CreateSourceLocationRequest = exports.CreateSourceLocationRequest || (exports.CreateSourceLocationRequest = {}));
var CreateSourceLocationResponse;
(function (CreateSourceLocationResponse) {
    /**
     * @internal
     */
    CreateSourceLocationResponse.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(CreateSourceLocationResponse = exports.CreateSourceLocationResponse || (exports.CreateSourceLocationResponse = {}));
var CreateVodSourceRequest;
(function (CreateVodSourceRequest) {
    /**
     * @internal
     */
    CreateVodSourceRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(CreateVodSourceRequest = exports.CreateVodSourceRequest || (exports.CreateVodSourceRequest = {}));
var CreateVodSourceResponse;
(function (CreateVodSourceResponse) {
    /**
     * @internal
     */
    CreateVodSourceResponse.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(CreateVodSourceResponse = exports.CreateVodSourceResponse || (exports.CreateVodSourceResponse = {}));
var DashConfigurationForPut;
(function (DashConfigurationForPut) {
    /**
     * @internal
     */
    DashConfigurationForPut.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(DashConfigurationForPut = exports.DashConfigurationForPut || (exports.DashConfigurationForPut = {}));
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
var DeleteChannelPolicyRequest;
(function (DeleteChannelPolicyRequest) {
    /**
     * @internal
     */
    DeleteChannelPolicyRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(DeleteChannelPolicyRequest = exports.DeleteChannelPolicyRequest || (exports.DeleteChannelPolicyRequest = {}));
var DeleteChannelPolicyResponse;
(function (DeleteChannelPolicyResponse) {
    /**
     * @internal
     */
    DeleteChannelPolicyResponse.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(DeleteChannelPolicyResponse = exports.DeleteChannelPolicyResponse || (exports.DeleteChannelPolicyResponse = {}));
var DeletePlaybackConfigurationRequest;
(function (DeletePlaybackConfigurationRequest) {
    /**
     * @internal
     */
    DeletePlaybackConfigurationRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(DeletePlaybackConfigurationRequest = exports.DeletePlaybackConfigurationRequest || (exports.DeletePlaybackConfigurationRequest = {}));
var DeletePlaybackConfigurationResponse;
(function (DeletePlaybackConfigurationResponse) {
    /**
     * @internal
     */
    DeletePlaybackConfigurationResponse.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(DeletePlaybackConfigurationResponse = exports.DeletePlaybackConfigurationResponse || (exports.DeletePlaybackConfigurationResponse = {}));
var DeleteProgramRequest;
(function (DeleteProgramRequest) {
    /**
     * @internal
     */
    DeleteProgramRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(DeleteProgramRequest = exports.DeleteProgramRequest || (exports.DeleteProgramRequest = {}));
var DeleteProgramResponse;
(function (DeleteProgramResponse) {
    /**
     * @internal
     */
    DeleteProgramResponse.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(DeleteProgramResponse = exports.DeleteProgramResponse || (exports.DeleteProgramResponse = {}));
var DeleteSourceLocationRequest;
(function (DeleteSourceLocationRequest) {
    /**
     * @internal
     */
    DeleteSourceLocationRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(DeleteSourceLocationRequest = exports.DeleteSourceLocationRequest || (exports.DeleteSourceLocationRequest = {}));
var DeleteSourceLocationResponse;
(function (DeleteSourceLocationResponse) {
    /**
     * @internal
     */
    DeleteSourceLocationResponse.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(DeleteSourceLocationResponse = exports.DeleteSourceLocationResponse || (exports.DeleteSourceLocationResponse = {}));
var DeleteVodSourceRequest;
(function (DeleteVodSourceRequest) {
    /**
     * @internal
     */
    DeleteVodSourceRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(DeleteVodSourceRequest = exports.DeleteVodSourceRequest || (exports.DeleteVodSourceRequest = {}));
var DeleteVodSourceResponse;
(function (DeleteVodSourceResponse) {
    /**
     * @internal
     */
    DeleteVodSourceResponse.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(DeleteVodSourceResponse = exports.DeleteVodSourceResponse || (exports.DeleteVodSourceResponse = {}));
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
var DescribeProgramRequest;
(function (DescribeProgramRequest) {
    /**
     * @internal
     */
    DescribeProgramRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(DescribeProgramRequest = exports.DescribeProgramRequest || (exports.DescribeProgramRequest = {}));
var DescribeProgramResponse;
(function (DescribeProgramResponse) {
    /**
     * @internal
     */
    DescribeProgramResponse.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(DescribeProgramResponse = exports.DescribeProgramResponse || (exports.DescribeProgramResponse = {}));
var DescribeSourceLocationRequest;
(function (DescribeSourceLocationRequest) {
    /**
     * @internal
     */
    DescribeSourceLocationRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(DescribeSourceLocationRequest = exports.DescribeSourceLocationRequest || (exports.DescribeSourceLocationRequest = {}));
var DescribeSourceLocationResponse;
(function (DescribeSourceLocationResponse) {
    /**
     * @internal
     */
    DescribeSourceLocationResponse.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(DescribeSourceLocationResponse = exports.DescribeSourceLocationResponse || (exports.DescribeSourceLocationResponse = {}));
var DescribeVodSourceRequest;
(function (DescribeVodSourceRequest) {
    /**
     * @internal
     */
    DescribeVodSourceRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(DescribeVodSourceRequest = exports.DescribeVodSourceRequest || (exports.DescribeVodSourceRequest = {}));
var DescribeVodSourceResponse;
(function (DescribeVodSourceResponse) {
    /**
     * @internal
     */
    DescribeVodSourceResponse.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(DescribeVodSourceResponse = exports.DescribeVodSourceResponse || (exports.DescribeVodSourceResponse = {}));
var GetChannelPolicyRequest;
(function (GetChannelPolicyRequest) {
    /**
     * @internal
     */
    GetChannelPolicyRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(GetChannelPolicyRequest = exports.GetChannelPolicyRequest || (exports.GetChannelPolicyRequest = {}));
var GetChannelPolicyResponse;
(function (GetChannelPolicyResponse) {
    /**
     * @internal
     */
    GetChannelPolicyResponse.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(GetChannelPolicyResponse = exports.GetChannelPolicyResponse || (exports.GetChannelPolicyResponse = {}));
var GetChannelScheduleRequest;
(function (GetChannelScheduleRequest) {
    /**
     * @internal
     */
    GetChannelScheduleRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(GetChannelScheduleRequest = exports.GetChannelScheduleRequest || (exports.GetChannelScheduleRequest = {}));
var GetChannelScheduleResponse;
(function (GetChannelScheduleResponse) {
    /**
     * @internal
     */
    GetChannelScheduleResponse.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(GetChannelScheduleResponse = exports.GetChannelScheduleResponse || (exports.GetChannelScheduleResponse = {}));
var GetPlaybackConfigurationRequest;
(function (GetPlaybackConfigurationRequest) {
    /**
     * @internal
     */
    GetPlaybackConfigurationRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(GetPlaybackConfigurationRequest = exports.GetPlaybackConfigurationRequest || (exports.GetPlaybackConfigurationRequest = {}));
var GetPlaybackConfigurationResponse;
(function (GetPlaybackConfigurationResponse) {
    /**
     * @internal
     */
    GetPlaybackConfigurationResponse.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(GetPlaybackConfigurationResponse = exports.GetPlaybackConfigurationResponse || (exports.GetPlaybackConfigurationResponse = {}));
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
var ListPlaybackConfigurationsRequest;
(function (ListPlaybackConfigurationsRequest) {
    /**
     * @internal
     */
    ListPlaybackConfigurationsRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(ListPlaybackConfigurationsRequest = exports.ListPlaybackConfigurationsRequest || (exports.ListPlaybackConfigurationsRequest = {}));
var ListPlaybackConfigurationsResponse;
(function (ListPlaybackConfigurationsResponse) {
    /**
     * @internal
     */
    ListPlaybackConfigurationsResponse.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(ListPlaybackConfigurationsResponse = exports.ListPlaybackConfigurationsResponse || (exports.ListPlaybackConfigurationsResponse = {}));
var ListSourceLocationsRequest;
(function (ListSourceLocationsRequest) {
    /**
     * @internal
     */
    ListSourceLocationsRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(ListSourceLocationsRequest = exports.ListSourceLocationsRequest || (exports.ListSourceLocationsRequest = {}));
var ListSourceLocationsResponse;
(function (ListSourceLocationsResponse) {
    /**
     * @internal
     */
    ListSourceLocationsResponse.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(ListSourceLocationsResponse = exports.ListSourceLocationsResponse || (exports.ListSourceLocationsResponse = {}));
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
var ListVodSourcesRequest;
(function (ListVodSourcesRequest) {
    /**
     * @internal
     */
    ListVodSourcesRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(ListVodSourcesRequest = exports.ListVodSourcesRequest || (exports.ListVodSourcesRequest = {}));
var ListVodSourcesResponse;
(function (ListVodSourcesResponse) {
    /**
     * @internal
     */
    ListVodSourcesResponse.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(ListVodSourcesResponse = exports.ListVodSourcesResponse || (exports.ListVodSourcesResponse = {}));
var PutChannelPolicyRequest;
(function (PutChannelPolicyRequest) {
    /**
     * @internal
     */
    PutChannelPolicyRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(PutChannelPolicyRequest = exports.PutChannelPolicyRequest || (exports.PutChannelPolicyRequest = {}));
var PutChannelPolicyResponse;
(function (PutChannelPolicyResponse) {
    /**
     * @internal
     */
    PutChannelPolicyResponse.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(PutChannelPolicyResponse = exports.PutChannelPolicyResponse || (exports.PutChannelPolicyResponse = {}));
var PutPlaybackConfigurationRequest;
(function (PutPlaybackConfigurationRequest) {
    /**
     * @internal
     */
    PutPlaybackConfigurationRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(PutPlaybackConfigurationRequest = exports.PutPlaybackConfigurationRequest || (exports.PutPlaybackConfigurationRequest = {}));
var PutPlaybackConfigurationResponse;
(function (PutPlaybackConfigurationResponse) {
    /**
     * @internal
     */
    PutPlaybackConfigurationResponse.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(PutPlaybackConfigurationResponse = exports.PutPlaybackConfigurationResponse || (exports.PutPlaybackConfigurationResponse = {}));
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
var TagResourceRequest;
(function (TagResourceRequest) {
    /**
     * @internal
     */
    TagResourceRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(TagResourceRequest = exports.TagResourceRequest || (exports.TagResourceRequest = {}));
var UntagResourceRequest;
(function (UntagResourceRequest) {
    /**
     * @internal
     */
    UntagResourceRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(UntagResourceRequest = exports.UntagResourceRequest || (exports.UntagResourceRequest = {}));
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
var UpdateSourceLocationRequest;
(function (UpdateSourceLocationRequest) {
    /**
     * @internal
     */
    UpdateSourceLocationRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(UpdateSourceLocationRequest = exports.UpdateSourceLocationRequest || (exports.UpdateSourceLocationRequest = {}));
var UpdateSourceLocationResponse;
(function (UpdateSourceLocationResponse) {
    /**
     * @internal
     */
    UpdateSourceLocationResponse.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(UpdateSourceLocationResponse = exports.UpdateSourceLocationResponse || (exports.UpdateSourceLocationResponse = {}));
var UpdateVodSourceRequest;
(function (UpdateVodSourceRequest) {
    /**
     * @internal
     */
    UpdateVodSourceRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(UpdateVodSourceRequest = exports.UpdateVodSourceRequest || (exports.UpdateVodSourceRequest = {}));
var UpdateVodSourceResponse;
(function (UpdateVodSourceResponse) {
    /**
     * @internal
     */
    UpdateVodSourceResponse.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(UpdateVodSourceResponse = exports.UpdateVodSourceResponse || (exports.UpdateVodSourceResponse = {}));
//# sourceMappingURL=models_0.js.map