"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DescribePackagingConfigurationResponse = exports.DescribePackagingConfigurationRequest = exports.DescribeAssetResponse = exports.DescribeAssetRequest = exports.DeletePackagingGroupResponse = exports.DeletePackagingGroupRequest = exports.DeletePackagingConfigurationResponse = exports.DeletePackagingConfigurationRequest = exports.DeleteAssetResponse = exports.DeleteAssetRequest = exports.CreatePackagingGroupResponse = exports.CreatePackagingGroupRequest = exports.CreatePackagingConfigurationResponse = exports.CreatePackagingConfigurationRequest = exports.CreateAssetResponse = exports.CreateAssetRequest = exports.UnprocessableEntityException = exports.TooManyRequestsException = exports.ServiceUnavailableException = exports.NotFoundException = exports.InternalServerErrorException = exports.ForbiddenException = exports.ConfigureLogsResponse = exports.ConfigureLogsRequest = exports.PackagingGroup = exports.EgressAccessLogs = exports.Authorization = exports.PackagingConfiguration = exports.MssPackage = exports.MssEncryption = exports.HlsPackage = exports.HlsEncryption = exports.EncryptionMethod = exports.DashPackage = exports.SegmentTemplateFormat = exports.DashEncryption = exports.CmafPackage = exports.CmafEncryption = exports.SpekeKeyProvider = exports.MssManifest = exports.HlsManifest = exports.AdMarkers = exports.EgressEndpoint = exports.DashManifest = exports.StreamSelection = exports.StreamOrder = exports.Profile = exports.ManifestLayout = exports.AssetShallow = exports.__PeriodTriggersElement = void 0;
exports.UpdatePackagingGroupResponse = exports.UpdatePackagingGroupRequest = exports.UntagResourceRequest = exports.TagResourceRequest = exports.ListTagsForResourceResponse = exports.ListTagsForResourceRequest = exports.ListPackagingGroupsResponse = exports.ListPackagingGroupsRequest = exports.ListPackagingConfigurationsResponse = exports.ListPackagingConfigurationsRequest = exports.ListAssetsResponse = exports.ListAssetsRequest = exports.DescribePackagingGroupResponse = exports.DescribePackagingGroupRequest = void 0;
var __PeriodTriggersElement;
(function (__PeriodTriggersElement) {
    __PeriodTriggersElement["ADS"] = "ADS";
})(__PeriodTriggersElement = exports.__PeriodTriggersElement || (exports.__PeriodTriggersElement = {}));
var AssetShallow;
(function (AssetShallow) {
    /**
     * @internal
     */
    AssetShallow.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(AssetShallow = exports.AssetShallow || (exports.AssetShallow = {}));
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
var DashManifest;
(function (DashManifest) {
    /**
     * @internal
     */
    DashManifest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(DashManifest = exports.DashManifest || (exports.DashManifest = {}));
var EgressEndpoint;
(function (EgressEndpoint) {
    /**
     * @internal
     */
    EgressEndpoint.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(EgressEndpoint = exports.EgressEndpoint || (exports.EgressEndpoint = {}));
var AdMarkers;
(function (AdMarkers) {
    AdMarkers["NONE"] = "NONE";
    AdMarkers["PASSTHROUGH"] = "PASSTHROUGH";
    AdMarkers["SCTE35_ENHANCED"] = "SCTE35_ENHANCED";
})(AdMarkers = exports.AdMarkers || (exports.AdMarkers = {}));
var HlsManifest;
(function (HlsManifest) {
    /**
     * @internal
     */
    HlsManifest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(HlsManifest = exports.HlsManifest || (exports.HlsManifest = {}));
var MssManifest;
(function (MssManifest) {
    /**
     * @internal
     */
    MssManifest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(MssManifest = exports.MssManifest || (exports.MssManifest = {}));
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
var SegmentTemplateFormat;
(function (SegmentTemplateFormat) {
    SegmentTemplateFormat["NUMBER_WITH_DURATION"] = "NUMBER_WITH_DURATION";
    SegmentTemplateFormat["NUMBER_WITH_TIMELINE"] = "NUMBER_WITH_TIMELINE";
    SegmentTemplateFormat["TIME_WITH_TIMELINE"] = "TIME_WITH_TIMELINE";
})(SegmentTemplateFormat = exports.SegmentTemplateFormat || (exports.SegmentTemplateFormat = {}));
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
var PackagingConfiguration;
(function (PackagingConfiguration) {
    /**
     * @internal
     */
    PackagingConfiguration.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(PackagingConfiguration = exports.PackagingConfiguration || (exports.PackagingConfiguration = {}));
var Authorization;
(function (Authorization) {
    /**
     * @internal
     */
    Authorization.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(Authorization = exports.Authorization || (exports.Authorization = {}));
var EgressAccessLogs;
(function (EgressAccessLogs) {
    /**
     * @internal
     */
    EgressAccessLogs.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(EgressAccessLogs = exports.EgressAccessLogs || (exports.EgressAccessLogs = {}));
var PackagingGroup;
(function (PackagingGroup) {
    /**
     * @internal
     */
    PackagingGroup.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(PackagingGroup = exports.PackagingGroup || (exports.PackagingGroup = {}));
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
var CreateAssetRequest;
(function (CreateAssetRequest) {
    /**
     * @internal
     */
    CreateAssetRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(CreateAssetRequest = exports.CreateAssetRequest || (exports.CreateAssetRequest = {}));
var CreateAssetResponse;
(function (CreateAssetResponse) {
    /**
     * @internal
     */
    CreateAssetResponse.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(CreateAssetResponse = exports.CreateAssetResponse || (exports.CreateAssetResponse = {}));
var CreatePackagingConfigurationRequest;
(function (CreatePackagingConfigurationRequest) {
    /**
     * @internal
     */
    CreatePackagingConfigurationRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(CreatePackagingConfigurationRequest = exports.CreatePackagingConfigurationRequest || (exports.CreatePackagingConfigurationRequest = {}));
var CreatePackagingConfigurationResponse;
(function (CreatePackagingConfigurationResponse) {
    /**
     * @internal
     */
    CreatePackagingConfigurationResponse.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(CreatePackagingConfigurationResponse = exports.CreatePackagingConfigurationResponse || (exports.CreatePackagingConfigurationResponse = {}));
var CreatePackagingGroupRequest;
(function (CreatePackagingGroupRequest) {
    /**
     * @internal
     */
    CreatePackagingGroupRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(CreatePackagingGroupRequest = exports.CreatePackagingGroupRequest || (exports.CreatePackagingGroupRequest = {}));
var CreatePackagingGroupResponse;
(function (CreatePackagingGroupResponse) {
    /**
     * @internal
     */
    CreatePackagingGroupResponse.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(CreatePackagingGroupResponse = exports.CreatePackagingGroupResponse || (exports.CreatePackagingGroupResponse = {}));
var DeleteAssetRequest;
(function (DeleteAssetRequest) {
    /**
     * @internal
     */
    DeleteAssetRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(DeleteAssetRequest = exports.DeleteAssetRequest || (exports.DeleteAssetRequest = {}));
var DeleteAssetResponse;
(function (DeleteAssetResponse) {
    /**
     * @internal
     */
    DeleteAssetResponse.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(DeleteAssetResponse = exports.DeleteAssetResponse || (exports.DeleteAssetResponse = {}));
var DeletePackagingConfigurationRequest;
(function (DeletePackagingConfigurationRequest) {
    /**
     * @internal
     */
    DeletePackagingConfigurationRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(DeletePackagingConfigurationRequest = exports.DeletePackagingConfigurationRequest || (exports.DeletePackagingConfigurationRequest = {}));
var DeletePackagingConfigurationResponse;
(function (DeletePackagingConfigurationResponse) {
    /**
     * @internal
     */
    DeletePackagingConfigurationResponse.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(DeletePackagingConfigurationResponse = exports.DeletePackagingConfigurationResponse || (exports.DeletePackagingConfigurationResponse = {}));
var DeletePackagingGroupRequest;
(function (DeletePackagingGroupRequest) {
    /**
     * @internal
     */
    DeletePackagingGroupRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(DeletePackagingGroupRequest = exports.DeletePackagingGroupRequest || (exports.DeletePackagingGroupRequest = {}));
var DeletePackagingGroupResponse;
(function (DeletePackagingGroupResponse) {
    /**
     * @internal
     */
    DeletePackagingGroupResponse.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(DeletePackagingGroupResponse = exports.DeletePackagingGroupResponse || (exports.DeletePackagingGroupResponse = {}));
var DescribeAssetRequest;
(function (DescribeAssetRequest) {
    /**
     * @internal
     */
    DescribeAssetRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(DescribeAssetRequest = exports.DescribeAssetRequest || (exports.DescribeAssetRequest = {}));
var DescribeAssetResponse;
(function (DescribeAssetResponse) {
    /**
     * @internal
     */
    DescribeAssetResponse.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(DescribeAssetResponse = exports.DescribeAssetResponse || (exports.DescribeAssetResponse = {}));
var DescribePackagingConfigurationRequest;
(function (DescribePackagingConfigurationRequest) {
    /**
     * @internal
     */
    DescribePackagingConfigurationRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(DescribePackagingConfigurationRequest = exports.DescribePackagingConfigurationRequest || (exports.DescribePackagingConfigurationRequest = {}));
var DescribePackagingConfigurationResponse;
(function (DescribePackagingConfigurationResponse) {
    /**
     * @internal
     */
    DescribePackagingConfigurationResponse.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(DescribePackagingConfigurationResponse = exports.DescribePackagingConfigurationResponse || (exports.DescribePackagingConfigurationResponse = {}));
var DescribePackagingGroupRequest;
(function (DescribePackagingGroupRequest) {
    /**
     * @internal
     */
    DescribePackagingGroupRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(DescribePackagingGroupRequest = exports.DescribePackagingGroupRequest || (exports.DescribePackagingGroupRequest = {}));
var DescribePackagingGroupResponse;
(function (DescribePackagingGroupResponse) {
    /**
     * @internal
     */
    DescribePackagingGroupResponse.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(DescribePackagingGroupResponse = exports.DescribePackagingGroupResponse || (exports.DescribePackagingGroupResponse = {}));
var ListAssetsRequest;
(function (ListAssetsRequest) {
    /**
     * @internal
     */
    ListAssetsRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(ListAssetsRequest = exports.ListAssetsRequest || (exports.ListAssetsRequest = {}));
var ListAssetsResponse;
(function (ListAssetsResponse) {
    /**
     * @internal
     */
    ListAssetsResponse.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(ListAssetsResponse = exports.ListAssetsResponse || (exports.ListAssetsResponse = {}));
var ListPackagingConfigurationsRequest;
(function (ListPackagingConfigurationsRequest) {
    /**
     * @internal
     */
    ListPackagingConfigurationsRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(ListPackagingConfigurationsRequest = exports.ListPackagingConfigurationsRequest || (exports.ListPackagingConfigurationsRequest = {}));
var ListPackagingConfigurationsResponse;
(function (ListPackagingConfigurationsResponse) {
    /**
     * @internal
     */
    ListPackagingConfigurationsResponse.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(ListPackagingConfigurationsResponse = exports.ListPackagingConfigurationsResponse || (exports.ListPackagingConfigurationsResponse = {}));
var ListPackagingGroupsRequest;
(function (ListPackagingGroupsRequest) {
    /**
     * @internal
     */
    ListPackagingGroupsRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(ListPackagingGroupsRequest = exports.ListPackagingGroupsRequest || (exports.ListPackagingGroupsRequest = {}));
var ListPackagingGroupsResponse;
(function (ListPackagingGroupsResponse) {
    /**
     * @internal
     */
    ListPackagingGroupsResponse.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(ListPackagingGroupsResponse = exports.ListPackagingGroupsResponse || (exports.ListPackagingGroupsResponse = {}));
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
var UpdatePackagingGroupRequest;
(function (UpdatePackagingGroupRequest) {
    /**
     * @internal
     */
    UpdatePackagingGroupRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(UpdatePackagingGroupRequest = exports.UpdatePackagingGroupRequest || (exports.UpdatePackagingGroupRequest = {}));
var UpdatePackagingGroupResponse;
(function (UpdatePackagingGroupResponse) {
    /**
     * @internal
     */
    UpdatePackagingGroupResponse.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(UpdatePackagingGroupResponse = exports.UpdatePackagingGroupResponse || (exports.UpdatePackagingGroupResponse = {}));
//# sourceMappingURL=models_0.js.map