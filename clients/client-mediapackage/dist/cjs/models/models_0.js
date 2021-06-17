"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreateHarvestJobResponse = exports.CreateHarvestJobRequest = exports.CreateChannelResponse = exports.CreateChannelRequest = exports.UnprocessableEntityException = exports.TooManyRequestsException = exports.ServiceUnavailableException = exports.NotFoundException = exports.InternalServerErrorException = exports.ForbiddenException = exports.ConfigureLogsResponse = exports.ConfigureLogsRequest = exports.CmafPackageCreateOrUpdateParameters = exports.OriginEndpoint = exports.Origination = exports.MssPackage = exports.MssEncryption = exports.HlsPackage = exports.HlsEncryption = exports.EncryptionMethod = exports.DashPackage = exports.UtcTiming = exports.SegmentTemplateFormat = exports.Profile = exports.ManifestLayout = exports.DashEncryption = exports.CmafPackage = exports.StreamSelection = exports.StreamOrder = exports.CmafEncryption = exports.SpekeKeyProvider = exports.EncryptionContractConfiguration = exports.PresetSpeke20Video = exports.PresetSpeke20Audio = exports.Authorization = exports.HlsManifestCreateOrUpdateParameters = exports.AdsOnDeliveryRestrictions = exports.HlsManifest = exports.PlaylistType = exports.AdMarkers = exports.HarvestJob = exports.Status = exports.S3Destination = exports.Channel = exports.IngressAccessLogs = exports.HlsIngest = exports.IngestEndpoint = exports.EgressAccessLogs = exports.__PeriodTriggersElement = exports.__AdTriggersElement = void 0;
exports.UpdateOriginEndpointResponse = exports.UpdateOriginEndpointRequest = exports.UpdateChannelResponse = exports.UpdateChannelRequest = exports.UntagResourceRequest = exports.TagResourceRequest = exports.RotateIngestEndpointCredentialsResponse = exports.RotateIngestEndpointCredentialsRequest = exports.RotateChannelCredentialsResponse = exports.RotateChannelCredentialsRequest = exports.ListTagsForResourceResponse = exports.ListTagsForResourceRequest = exports.ListOriginEndpointsResponse = exports.ListOriginEndpointsRequest = exports.ListHarvestJobsResponse = exports.ListHarvestJobsRequest = exports.ListChannelsResponse = exports.ListChannelsRequest = exports.DescribeOriginEndpointResponse = exports.DescribeOriginEndpointRequest = exports.DescribeHarvestJobResponse = exports.DescribeHarvestJobRequest = exports.DescribeChannelResponse = exports.DescribeChannelRequest = exports.DeleteOriginEndpointResponse = exports.DeleteOriginEndpointRequest = exports.DeleteChannelResponse = exports.DeleteChannelRequest = exports.CreateOriginEndpointResponse = exports.CreateOriginEndpointRequest = void 0;
var __AdTriggersElement;
(function (__AdTriggersElement) {
    __AdTriggersElement["BREAK"] = "BREAK";
    __AdTriggersElement["DISTRIBUTOR_ADVERTISEMENT"] = "DISTRIBUTOR_ADVERTISEMENT";
    __AdTriggersElement["DISTRIBUTOR_OVERLAY_PLACEMENT_OPPORTUNITY"] = "DISTRIBUTOR_OVERLAY_PLACEMENT_OPPORTUNITY";
    __AdTriggersElement["DISTRIBUTOR_PLACEMENT_OPPORTUNITY"] = "DISTRIBUTOR_PLACEMENT_OPPORTUNITY";
    __AdTriggersElement["PROVIDER_ADVERTISEMENT"] = "PROVIDER_ADVERTISEMENT";
    __AdTriggersElement["PROVIDER_OVERLAY_PLACEMENT_OPPORTUNITY"] = "PROVIDER_OVERLAY_PLACEMENT_OPPORTUNITY";
    __AdTriggersElement["PROVIDER_PLACEMENT_OPPORTUNITY"] = "PROVIDER_PLACEMENT_OPPORTUNITY";
    __AdTriggersElement["SPLICE_INSERT"] = "SPLICE_INSERT";
})(__AdTriggersElement = exports.__AdTriggersElement || (exports.__AdTriggersElement = {}));
var __PeriodTriggersElement;
(function (__PeriodTriggersElement) {
    __PeriodTriggersElement["ADS"] = "ADS";
})(__PeriodTriggersElement = exports.__PeriodTriggersElement || (exports.__PeriodTriggersElement = {}));
var EgressAccessLogs;
(function (EgressAccessLogs) {
    /**
     * @internal
     */
    EgressAccessLogs.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(EgressAccessLogs = exports.EgressAccessLogs || (exports.EgressAccessLogs = {}));
var IngestEndpoint;
(function (IngestEndpoint) {
    /**
     * @internal
     */
    IngestEndpoint.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(IngestEndpoint = exports.IngestEndpoint || (exports.IngestEndpoint = {}));
var HlsIngest;
(function (HlsIngest) {
    /**
     * @internal
     */
    HlsIngest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(HlsIngest = exports.HlsIngest || (exports.HlsIngest = {}));
var IngressAccessLogs;
(function (IngressAccessLogs) {
    /**
     * @internal
     */
    IngressAccessLogs.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(IngressAccessLogs = exports.IngressAccessLogs || (exports.IngressAccessLogs = {}));
var Channel;
(function (Channel) {
    /**
     * @internal
     */
    Channel.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(Channel = exports.Channel || (exports.Channel = {}));
var S3Destination;
(function (S3Destination) {
    /**
     * @internal
     */
    S3Destination.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(S3Destination = exports.S3Destination || (exports.S3Destination = {}));
var Status;
(function (Status) {
    Status["FAILED"] = "FAILED";
    Status["IN_PROGRESS"] = "IN_PROGRESS";
    Status["SUCCEEDED"] = "SUCCEEDED";
})(Status = exports.Status || (exports.Status = {}));
var HarvestJob;
(function (HarvestJob) {
    /**
     * @internal
     */
    HarvestJob.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(HarvestJob = exports.HarvestJob || (exports.HarvestJob = {}));
var AdMarkers;
(function (AdMarkers) {
    AdMarkers["DATERANGE"] = "DATERANGE";
    AdMarkers["NONE"] = "NONE";
    AdMarkers["PASSTHROUGH"] = "PASSTHROUGH";
    AdMarkers["SCTE35_ENHANCED"] = "SCTE35_ENHANCED";
})(AdMarkers = exports.AdMarkers || (exports.AdMarkers = {}));
var PlaylistType;
(function (PlaylistType) {
    PlaylistType["EVENT"] = "EVENT";
    PlaylistType["NONE"] = "NONE";
    PlaylistType["VOD"] = "VOD";
})(PlaylistType = exports.PlaylistType || (exports.PlaylistType = {}));
var HlsManifest;
(function (HlsManifest) {
    /**
     * @internal
     */
    HlsManifest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(HlsManifest = exports.HlsManifest || (exports.HlsManifest = {}));
var AdsOnDeliveryRestrictions;
(function (AdsOnDeliveryRestrictions) {
    AdsOnDeliveryRestrictions["BOTH"] = "BOTH";
    AdsOnDeliveryRestrictions["NONE"] = "NONE";
    AdsOnDeliveryRestrictions["RESTRICTED"] = "RESTRICTED";
    AdsOnDeliveryRestrictions["UNRESTRICTED"] = "UNRESTRICTED";
})(AdsOnDeliveryRestrictions = exports.AdsOnDeliveryRestrictions || (exports.AdsOnDeliveryRestrictions = {}));
var HlsManifestCreateOrUpdateParameters;
(function (HlsManifestCreateOrUpdateParameters) {
    /**
     * @internal
     */
    HlsManifestCreateOrUpdateParameters.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(HlsManifestCreateOrUpdateParameters = exports.HlsManifestCreateOrUpdateParameters || (exports.HlsManifestCreateOrUpdateParameters = {}));
var Authorization;
(function (Authorization) {
    /**
     * @internal
     */
    Authorization.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(Authorization = exports.Authorization || (exports.Authorization = {}));
var PresetSpeke20Audio;
(function (PresetSpeke20Audio) {
    PresetSpeke20Audio["PRESET_AUDIO_1"] = "PRESET-AUDIO-1";
})(PresetSpeke20Audio = exports.PresetSpeke20Audio || (exports.PresetSpeke20Audio = {}));
var PresetSpeke20Video;
(function (PresetSpeke20Video) {
    PresetSpeke20Video["PRESET_VIDEO_1"] = "PRESET-VIDEO-1";
})(PresetSpeke20Video = exports.PresetSpeke20Video || (exports.PresetSpeke20Video = {}));
var EncryptionContractConfiguration;
(function (EncryptionContractConfiguration) {
    /**
     * @internal
     */
    EncryptionContractConfiguration.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(EncryptionContractConfiguration = exports.EncryptionContractConfiguration || (exports.EncryptionContractConfiguration = {}));
var SpekeKeyProvider;
(function (SpekeKeyProvider) {
    /**
     * @internal
     */
    SpekeKeyProvider.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(SpekeKeyProvider = exports.SpekeKeyProvider || (exports.SpekeKeyProvider = {}));
var CmafEncryption;
(function (CmafEncryption) {
    /**
     * @internal
     */
    CmafEncryption.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(CmafEncryption = exports.CmafEncryption || (exports.CmafEncryption = {}));
var StreamOrder;
(function (StreamOrder) {
    StreamOrder["ORIGINAL"] = "ORIGINAL";
    StreamOrder["VIDEO_BITRATE_ASCENDING"] = "VIDEO_BITRATE_ASCENDING";
    StreamOrder["VIDEO_BITRATE_DESCENDING"] = "VIDEO_BITRATE_DESCENDING";
})(StreamOrder = exports.StreamOrder || (exports.StreamOrder = {}));
var StreamSelection;
(function (StreamSelection) {
    /**
     * @internal
     */
    StreamSelection.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(StreamSelection = exports.StreamSelection || (exports.StreamSelection = {}));
var CmafPackage;
(function (CmafPackage) {
    /**
     * @internal
     */
    CmafPackage.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(CmafPackage = exports.CmafPackage || (exports.CmafPackage = {}));
var DashEncryption;
(function (DashEncryption) {
    /**
     * @internal
     */
    DashEncryption.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(DashEncryption = exports.DashEncryption || (exports.DashEncryption = {}));
var ManifestLayout;
(function (ManifestLayout) {
    ManifestLayout["COMPACT"] = "COMPACT";
    ManifestLayout["FULL"] = "FULL";
})(ManifestLayout = exports.ManifestLayout || (exports.ManifestLayout = {}));
var Profile;
(function (Profile) {
    Profile["HBBTV_1_5"] = "HBBTV_1_5";
    Profile["NONE"] = "NONE";
})(Profile = exports.Profile || (exports.Profile = {}));
var SegmentTemplateFormat;
(function (SegmentTemplateFormat) {
    SegmentTemplateFormat["NUMBER_WITH_DURATION"] = "NUMBER_WITH_DURATION";
    SegmentTemplateFormat["NUMBER_WITH_TIMELINE"] = "NUMBER_WITH_TIMELINE";
    SegmentTemplateFormat["TIME_WITH_TIMELINE"] = "TIME_WITH_TIMELINE";
})(SegmentTemplateFormat = exports.SegmentTemplateFormat || (exports.SegmentTemplateFormat = {}));
var UtcTiming;
(function (UtcTiming) {
    UtcTiming["HTTP_HEAD"] = "HTTP-HEAD";
    UtcTiming["HTTP_ISO"] = "HTTP-ISO";
    UtcTiming["NONE"] = "NONE";
})(UtcTiming = exports.UtcTiming || (exports.UtcTiming = {}));
var DashPackage;
(function (DashPackage) {
    /**
     * @internal
     */
    DashPackage.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(DashPackage = exports.DashPackage || (exports.DashPackage = {}));
var EncryptionMethod;
(function (EncryptionMethod) {
    EncryptionMethod["AES_128"] = "AES_128";
    EncryptionMethod["SAMPLE_AES"] = "SAMPLE_AES";
})(EncryptionMethod = exports.EncryptionMethod || (exports.EncryptionMethod = {}));
var HlsEncryption;
(function (HlsEncryption) {
    /**
     * @internal
     */
    HlsEncryption.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(HlsEncryption = exports.HlsEncryption || (exports.HlsEncryption = {}));
var HlsPackage;
(function (HlsPackage) {
    /**
     * @internal
     */
    HlsPackage.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(HlsPackage = exports.HlsPackage || (exports.HlsPackage = {}));
var MssEncryption;
(function (MssEncryption) {
    /**
     * @internal
     */
    MssEncryption.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(MssEncryption = exports.MssEncryption || (exports.MssEncryption = {}));
var MssPackage;
(function (MssPackage) {
    /**
     * @internal
     */
    MssPackage.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(MssPackage = exports.MssPackage || (exports.MssPackage = {}));
var Origination;
(function (Origination) {
    Origination["ALLOW"] = "ALLOW";
    Origination["DENY"] = "DENY";
})(Origination = exports.Origination || (exports.Origination = {}));
var OriginEndpoint;
(function (OriginEndpoint) {
    /**
     * @internal
     */
    OriginEndpoint.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(OriginEndpoint = exports.OriginEndpoint || (exports.OriginEndpoint = {}));
var CmafPackageCreateOrUpdateParameters;
(function (CmafPackageCreateOrUpdateParameters) {
    /**
     * @internal
     */
    CmafPackageCreateOrUpdateParameters.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(CmafPackageCreateOrUpdateParameters = exports.CmafPackageCreateOrUpdateParameters || (exports.CmafPackageCreateOrUpdateParameters = {}));
var ConfigureLogsRequest;
(function (ConfigureLogsRequest) {
    /**
     * @internal
     */
    ConfigureLogsRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(ConfigureLogsRequest = exports.ConfigureLogsRequest || (exports.ConfigureLogsRequest = {}));
var ConfigureLogsResponse;
(function (ConfigureLogsResponse) {
    /**
     * @internal
     */
    ConfigureLogsResponse.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(ConfigureLogsResponse = exports.ConfigureLogsResponse || (exports.ConfigureLogsResponse = {}));
var ForbiddenException;
(function (ForbiddenException) {
    /**
     * @internal
     */
    ForbiddenException.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(ForbiddenException = exports.ForbiddenException || (exports.ForbiddenException = {}));
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
var ServiceUnavailableException;
(function (ServiceUnavailableException) {
    /**
     * @internal
     */
    ServiceUnavailableException.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(ServiceUnavailableException = exports.ServiceUnavailableException || (exports.ServiceUnavailableException = {}));
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
var CreateHarvestJobRequest;
(function (CreateHarvestJobRequest) {
    /**
     * @internal
     */
    CreateHarvestJobRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(CreateHarvestJobRequest = exports.CreateHarvestJobRequest || (exports.CreateHarvestJobRequest = {}));
var CreateHarvestJobResponse;
(function (CreateHarvestJobResponse) {
    /**
     * @internal
     */
    CreateHarvestJobResponse.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(CreateHarvestJobResponse = exports.CreateHarvestJobResponse || (exports.CreateHarvestJobResponse = {}));
var CreateOriginEndpointRequest;
(function (CreateOriginEndpointRequest) {
    /**
     * @internal
     */
    CreateOriginEndpointRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(CreateOriginEndpointRequest = exports.CreateOriginEndpointRequest || (exports.CreateOriginEndpointRequest = {}));
var CreateOriginEndpointResponse;
(function (CreateOriginEndpointResponse) {
    /**
     * @internal
     */
    CreateOriginEndpointResponse.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(CreateOriginEndpointResponse = exports.CreateOriginEndpointResponse || (exports.CreateOriginEndpointResponse = {}));
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
var DeleteOriginEndpointRequest;
(function (DeleteOriginEndpointRequest) {
    /**
     * @internal
     */
    DeleteOriginEndpointRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(DeleteOriginEndpointRequest = exports.DeleteOriginEndpointRequest || (exports.DeleteOriginEndpointRequest = {}));
var DeleteOriginEndpointResponse;
(function (DeleteOriginEndpointResponse) {
    /**
     * @internal
     */
    DeleteOriginEndpointResponse.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(DeleteOriginEndpointResponse = exports.DeleteOriginEndpointResponse || (exports.DeleteOriginEndpointResponse = {}));
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
var DescribeHarvestJobRequest;
(function (DescribeHarvestJobRequest) {
    /**
     * @internal
     */
    DescribeHarvestJobRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(DescribeHarvestJobRequest = exports.DescribeHarvestJobRequest || (exports.DescribeHarvestJobRequest = {}));
var DescribeHarvestJobResponse;
(function (DescribeHarvestJobResponse) {
    /**
     * @internal
     */
    DescribeHarvestJobResponse.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(DescribeHarvestJobResponse = exports.DescribeHarvestJobResponse || (exports.DescribeHarvestJobResponse = {}));
var DescribeOriginEndpointRequest;
(function (DescribeOriginEndpointRequest) {
    /**
     * @internal
     */
    DescribeOriginEndpointRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(DescribeOriginEndpointRequest = exports.DescribeOriginEndpointRequest || (exports.DescribeOriginEndpointRequest = {}));
var DescribeOriginEndpointResponse;
(function (DescribeOriginEndpointResponse) {
    /**
     * @internal
     */
    DescribeOriginEndpointResponse.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(DescribeOriginEndpointResponse = exports.DescribeOriginEndpointResponse || (exports.DescribeOriginEndpointResponse = {}));
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
var ListHarvestJobsRequest;
(function (ListHarvestJobsRequest) {
    /**
     * @internal
     */
    ListHarvestJobsRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(ListHarvestJobsRequest = exports.ListHarvestJobsRequest || (exports.ListHarvestJobsRequest = {}));
var ListHarvestJobsResponse;
(function (ListHarvestJobsResponse) {
    /**
     * @internal
     */
    ListHarvestJobsResponse.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(ListHarvestJobsResponse = exports.ListHarvestJobsResponse || (exports.ListHarvestJobsResponse = {}));
var ListOriginEndpointsRequest;
(function (ListOriginEndpointsRequest) {
    /**
     * @internal
     */
    ListOriginEndpointsRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(ListOriginEndpointsRequest = exports.ListOriginEndpointsRequest || (exports.ListOriginEndpointsRequest = {}));
var ListOriginEndpointsResponse;
(function (ListOriginEndpointsResponse) {
    /**
     * @internal
     */
    ListOriginEndpointsResponse.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(ListOriginEndpointsResponse = exports.ListOriginEndpointsResponse || (exports.ListOriginEndpointsResponse = {}));
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
var RotateChannelCredentialsRequest;
(function (RotateChannelCredentialsRequest) {
    /**
     * @internal
     */
    RotateChannelCredentialsRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(RotateChannelCredentialsRequest = exports.RotateChannelCredentialsRequest || (exports.RotateChannelCredentialsRequest = {}));
var RotateChannelCredentialsResponse;
(function (RotateChannelCredentialsResponse) {
    /**
     * @internal
     */
    RotateChannelCredentialsResponse.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(RotateChannelCredentialsResponse = exports.RotateChannelCredentialsResponse || (exports.RotateChannelCredentialsResponse = {}));
var RotateIngestEndpointCredentialsRequest;
(function (RotateIngestEndpointCredentialsRequest) {
    /**
     * @internal
     */
    RotateIngestEndpointCredentialsRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(RotateIngestEndpointCredentialsRequest = exports.RotateIngestEndpointCredentialsRequest || (exports.RotateIngestEndpointCredentialsRequest = {}));
var RotateIngestEndpointCredentialsResponse;
(function (RotateIngestEndpointCredentialsResponse) {
    /**
     * @internal
     */
    RotateIngestEndpointCredentialsResponse.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(RotateIngestEndpointCredentialsResponse = exports.RotateIngestEndpointCredentialsResponse || (exports.RotateIngestEndpointCredentialsResponse = {}));
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
var UpdateOriginEndpointRequest;
(function (UpdateOriginEndpointRequest) {
    /**
     * @internal
     */
    UpdateOriginEndpointRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(UpdateOriginEndpointRequest = exports.UpdateOriginEndpointRequest || (exports.UpdateOriginEndpointRequest = {}));
var UpdateOriginEndpointResponse;
(function (UpdateOriginEndpointResponse) {
    /**
     * @internal
     */
    UpdateOriginEndpointResponse.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(UpdateOriginEndpointResponse = exports.UpdateOriginEndpointResponse || (exports.UpdateOriginEndpointResponse = {}));
//# sourceMappingURL=models_0.js.map