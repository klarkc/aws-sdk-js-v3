"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DataflowDetail = exports.Source = exports.Destination = exports.ContactStatus = exports.DescribeContactRequest = exports.ConfigDetails = exports.S3RecordingDetails = exports.EndpointDetails = exports.SecurityDetails = exports.DataflowEndpoint = exports.EndpointStatus = exports.SocketAddress = exports.UpdateConfigRequest = exports.ListConfigsResponse = exports.ConfigListItem = exports.ListConfigsRequest = exports.GetConfigResponse = exports.GetConfigRequest = exports.DeleteConfigRequest = exports.ResourceLimitExceededException = exports.CreateConfigRequest = exports.ConfigTypeData = exports.UplinkEchoConfig = exports.TrackingConfig = exports.Criticality = exports.S3RecordingConfig = exports.DataflowEndpointConfig = exports.ConfigIdResponse = exports.ConfigCapabilityType = exports.ResourceNotFoundException = exports.InvalidParameterException = exports.DependencyException = exports.ContactIdResponse = exports.CancelContactRequest = exports.AntennaUplinkConfig = exports.Eirp = exports.EirpUnits = exports.UplinkSpectrumConfig = exports.AntennaDownlinkDemodDecodeConfig = exports.DemodulationConfig = exports.DecodeConfig = exports.AntennaDownlinkConfig = exports.SpectrumConfig = exports.Polarization = exports.Frequency = exports.FrequencyUnits = exports.FrequencyBandwidth = exports.BandwidthUnits = exports.AntennaDemodDecodeDetails = exports.AngleUnits = void 0;
exports.UntagResourceResponse = exports.UntagResourceRequest = exports.TagResourceResponse = exports.TagResourceRequest = exports.ListSatellitesResponse = exports.SatelliteListItem = exports.ListSatellitesRequest = exports.UpdateMissionProfileRequest = exports.ListMissionProfilesResponse = exports.MissionProfileListItem = exports.ListMissionProfilesRequest = exports.ListTagsForResourceResponse = exports.ListTagsForResourceRequest = exports.ListGroundStationsResponse = exports.GroundStationData = exports.ListGroundStationsRequest = exports.GetSatelliteResponse = exports.GetSatelliteRequest = exports.GetMissionProfileResponse = exports.GetMissionProfileRequest = exports.GetMinuteUsageResponse = exports.GetMinuteUsageRequest = exports.DeleteMissionProfileRequest = exports.ListDataflowEndpointGroupsResponse = exports.DataflowEndpointListItem = exports.ListDataflowEndpointGroupsRequest = exports.GetDataflowEndpointGroupResponse = exports.GetDataflowEndpointGroupRequest = exports.DeleteDataflowEndpointGroupRequest = exports.MissionProfileIdResponse = exports.CreateMissionProfileRequest = exports.DataflowEndpointGroupIdResponse = exports.CreateDataflowEndpointGroupRequest = exports.ReserveContactRequest = exports.ListContactsResponse = exports.ContactData = exports.ListContactsRequest = exports.DescribeContactResponse = exports.Elevation = void 0;
var AngleUnits;
(function (AngleUnits) {
    AngleUnits["DEGREE_ANGLE"] = "DEGREE_ANGLE";
    AngleUnits["RADIAN"] = "RADIAN";
})(AngleUnits = exports.AngleUnits || (exports.AngleUnits = {}));
var AntennaDemodDecodeDetails;
(function (AntennaDemodDecodeDetails) {
    /**
     * @internal
     */
    AntennaDemodDecodeDetails.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(AntennaDemodDecodeDetails = exports.AntennaDemodDecodeDetails || (exports.AntennaDemodDecodeDetails = {}));
var BandwidthUnits;
(function (BandwidthUnits) {
    BandwidthUnits["GHZ"] = "GHz";
    BandwidthUnits["KHZ"] = "kHz";
    BandwidthUnits["MHZ"] = "MHz";
})(BandwidthUnits = exports.BandwidthUnits || (exports.BandwidthUnits = {}));
var FrequencyBandwidth;
(function (FrequencyBandwidth) {
    /**
     * @internal
     */
    FrequencyBandwidth.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(FrequencyBandwidth = exports.FrequencyBandwidth || (exports.FrequencyBandwidth = {}));
var FrequencyUnits;
(function (FrequencyUnits) {
    FrequencyUnits["GHZ"] = "GHz";
    FrequencyUnits["KHZ"] = "kHz";
    FrequencyUnits["MHZ"] = "MHz";
})(FrequencyUnits = exports.FrequencyUnits || (exports.FrequencyUnits = {}));
var Frequency;
(function (Frequency) {
    /**
     * @internal
     */
    Frequency.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(Frequency = exports.Frequency || (exports.Frequency = {}));
var Polarization;
(function (Polarization) {
    Polarization["LEFT_HAND"] = "LEFT_HAND";
    Polarization["NONE"] = "NONE";
    Polarization["RIGHT_HAND"] = "RIGHT_HAND";
})(Polarization = exports.Polarization || (exports.Polarization = {}));
var SpectrumConfig;
(function (SpectrumConfig) {
    /**
     * @internal
     */
    SpectrumConfig.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(SpectrumConfig = exports.SpectrumConfig || (exports.SpectrumConfig = {}));
var AntennaDownlinkConfig;
(function (AntennaDownlinkConfig) {
    /**
     * @internal
     */
    AntennaDownlinkConfig.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(AntennaDownlinkConfig = exports.AntennaDownlinkConfig || (exports.AntennaDownlinkConfig = {}));
var DecodeConfig;
(function (DecodeConfig) {
    /**
     * @internal
     */
    DecodeConfig.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(DecodeConfig = exports.DecodeConfig || (exports.DecodeConfig = {}));
var DemodulationConfig;
(function (DemodulationConfig) {
    /**
     * @internal
     */
    DemodulationConfig.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(DemodulationConfig = exports.DemodulationConfig || (exports.DemodulationConfig = {}));
var AntennaDownlinkDemodDecodeConfig;
(function (AntennaDownlinkDemodDecodeConfig) {
    /**
     * @internal
     */
    AntennaDownlinkDemodDecodeConfig.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(AntennaDownlinkDemodDecodeConfig = exports.AntennaDownlinkDemodDecodeConfig || (exports.AntennaDownlinkDemodDecodeConfig = {}));
var UplinkSpectrumConfig;
(function (UplinkSpectrumConfig) {
    /**
     * @internal
     */
    UplinkSpectrumConfig.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(UplinkSpectrumConfig = exports.UplinkSpectrumConfig || (exports.UplinkSpectrumConfig = {}));
var EirpUnits;
(function (EirpUnits) {
    EirpUnits["DBW"] = "dBW";
})(EirpUnits = exports.EirpUnits || (exports.EirpUnits = {}));
var Eirp;
(function (Eirp) {
    /**
     * @internal
     */
    Eirp.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(Eirp = exports.Eirp || (exports.Eirp = {}));
var AntennaUplinkConfig;
(function (AntennaUplinkConfig) {
    /**
     * @internal
     */
    AntennaUplinkConfig.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(AntennaUplinkConfig = exports.AntennaUplinkConfig || (exports.AntennaUplinkConfig = {}));
var CancelContactRequest;
(function (CancelContactRequest) {
    /**
     * @internal
     */
    CancelContactRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(CancelContactRequest = exports.CancelContactRequest || (exports.CancelContactRequest = {}));
var ContactIdResponse;
(function (ContactIdResponse) {
    /**
     * @internal
     */
    ContactIdResponse.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(ContactIdResponse = exports.ContactIdResponse || (exports.ContactIdResponse = {}));
var DependencyException;
(function (DependencyException) {
    /**
     * @internal
     */
    DependencyException.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(DependencyException = exports.DependencyException || (exports.DependencyException = {}));
var InvalidParameterException;
(function (InvalidParameterException) {
    /**
     * @internal
     */
    InvalidParameterException.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(InvalidParameterException = exports.InvalidParameterException || (exports.InvalidParameterException = {}));
var ResourceNotFoundException;
(function (ResourceNotFoundException) {
    /**
     * @internal
     */
    ResourceNotFoundException.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(ResourceNotFoundException = exports.ResourceNotFoundException || (exports.ResourceNotFoundException = {}));
var ConfigCapabilityType;
(function (ConfigCapabilityType) {
    ConfigCapabilityType["ANTENNA_DOWNLINK"] = "antenna-downlink";
    ConfigCapabilityType["ANTENNA_DOWNLINK_DEMOD_DECODE"] = "antenna-downlink-demod-decode";
    ConfigCapabilityType["ANTENNA_UPLINK"] = "antenna-uplink";
    ConfigCapabilityType["DATAFLOW_ENDPOINT"] = "dataflow-endpoint";
    ConfigCapabilityType["S3_RECORDING"] = "s3-recording";
    ConfigCapabilityType["TRACKING"] = "tracking";
    ConfigCapabilityType["UPLINK_ECHO"] = "uplink-echo";
})(ConfigCapabilityType = exports.ConfigCapabilityType || (exports.ConfigCapabilityType = {}));
var ConfigIdResponse;
(function (ConfigIdResponse) {
    /**
     * @internal
     */
    ConfigIdResponse.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(ConfigIdResponse = exports.ConfigIdResponse || (exports.ConfigIdResponse = {}));
var DataflowEndpointConfig;
(function (DataflowEndpointConfig) {
    /**
     * @internal
     */
    DataflowEndpointConfig.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(DataflowEndpointConfig = exports.DataflowEndpointConfig || (exports.DataflowEndpointConfig = {}));
var S3RecordingConfig;
(function (S3RecordingConfig) {
    /**
     * @internal
     */
    S3RecordingConfig.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(S3RecordingConfig = exports.S3RecordingConfig || (exports.S3RecordingConfig = {}));
var Criticality;
(function (Criticality) {
    Criticality["PREFERRED"] = "PREFERRED";
    Criticality["REMOVED"] = "REMOVED";
    Criticality["REQUIRED"] = "REQUIRED";
})(Criticality = exports.Criticality || (exports.Criticality = {}));
var TrackingConfig;
(function (TrackingConfig) {
    /**
     * @internal
     */
    TrackingConfig.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(TrackingConfig = exports.TrackingConfig || (exports.TrackingConfig = {}));
var UplinkEchoConfig;
(function (UplinkEchoConfig) {
    /**
     * @internal
     */
    UplinkEchoConfig.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(UplinkEchoConfig = exports.UplinkEchoConfig || (exports.UplinkEchoConfig = {}));
var ConfigTypeData;
(function (ConfigTypeData) {
    ConfigTypeData.visit = (value, visitor) => {
        if (value.antennaDownlinkConfig !== undefined)
            return visitor.antennaDownlinkConfig(value.antennaDownlinkConfig);
        if (value.trackingConfig !== undefined)
            return visitor.trackingConfig(value.trackingConfig);
        if (value.dataflowEndpointConfig !== undefined)
            return visitor.dataflowEndpointConfig(value.dataflowEndpointConfig);
        if (value.antennaDownlinkDemodDecodeConfig !== undefined)
            return visitor.antennaDownlinkDemodDecodeConfig(value.antennaDownlinkDemodDecodeConfig);
        if (value.antennaUplinkConfig !== undefined)
            return visitor.antennaUplinkConfig(value.antennaUplinkConfig);
        if (value.uplinkEchoConfig !== undefined)
            return visitor.uplinkEchoConfig(value.uplinkEchoConfig);
        if (value.s3RecordingConfig !== undefined)
            return visitor.s3RecordingConfig(value.s3RecordingConfig);
        return visitor._(value.$unknown[0], value.$unknown[1]);
    };
    /**
     * @internal
     */
    ConfigTypeData.filterSensitiveLog = (obj) => {
        if (obj.antennaDownlinkConfig !== undefined)
            return { antennaDownlinkConfig: AntennaDownlinkConfig.filterSensitiveLog(obj.antennaDownlinkConfig) };
        if (obj.trackingConfig !== undefined)
            return { trackingConfig: TrackingConfig.filterSensitiveLog(obj.trackingConfig) };
        if (obj.dataflowEndpointConfig !== undefined)
            return { dataflowEndpointConfig: DataflowEndpointConfig.filterSensitiveLog(obj.dataflowEndpointConfig) };
        if (obj.antennaDownlinkDemodDecodeConfig !== undefined)
            return {
                antennaDownlinkDemodDecodeConfig: AntennaDownlinkDemodDecodeConfig.filterSensitiveLog(obj.antennaDownlinkDemodDecodeConfig),
            };
        if (obj.antennaUplinkConfig !== undefined)
            return { antennaUplinkConfig: AntennaUplinkConfig.filterSensitiveLog(obj.antennaUplinkConfig) };
        if (obj.uplinkEchoConfig !== undefined)
            return { uplinkEchoConfig: UplinkEchoConfig.filterSensitiveLog(obj.uplinkEchoConfig) };
        if (obj.s3RecordingConfig !== undefined)
            return { s3RecordingConfig: S3RecordingConfig.filterSensitiveLog(obj.s3RecordingConfig) };
        if (obj.$unknown !== undefined)
            return { [obj.$unknown[0]]: "UNKNOWN" };
    };
})(ConfigTypeData = exports.ConfigTypeData || (exports.ConfigTypeData = {}));
var CreateConfigRequest;
(function (CreateConfigRequest) {
    /**
     * @internal
     */
    CreateConfigRequest.filterSensitiveLog = (obj) => ({
        ...obj,
        ...(obj.configData && { configData: ConfigTypeData.filterSensitiveLog(obj.configData) }),
    });
})(CreateConfigRequest = exports.CreateConfigRequest || (exports.CreateConfigRequest = {}));
var ResourceLimitExceededException;
(function (ResourceLimitExceededException) {
    /**
     * @internal
     */
    ResourceLimitExceededException.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(ResourceLimitExceededException = exports.ResourceLimitExceededException || (exports.ResourceLimitExceededException = {}));
var DeleteConfigRequest;
(function (DeleteConfigRequest) {
    /**
     * @internal
     */
    DeleteConfigRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(DeleteConfigRequest = exports.DeleteConfigRequest || (exports.DeleteConfigRequest = {}));
var GetConfigRequest;
(function (GetConfigRequest) {
    /**
     * @internal
     */
    GetConfigRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(GetConfigRequest = exports.GetConfigRequest || (exports.GetConfigRequest = {}));
var GetConfigResponse;
(function (GetConfigResponse) {
    /**
     * @internal
     */
    GetConfigResponse.filterSensitiveLog = (obj) => ({
        ...obj,
        ...(obj.configData && { configData: ConfigTypeData.filterSensitiveLog(obj.configData) }),
    });
})(GetConfigResponse = exports.GetConfigResponse || (exports.GetConfigResponse = {}));
var ListConfigsRequest;
(function (ListConfigsRequest) {
    /**
     * @internal
     */
    ListConfigsRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(ListConfigsRequest = exports.ListConfigsRequest || (exports.ListConfigsRequest = {}));
var ConfigListItem;
(function (ConfigListItem) {
    /**
     * @internal
     */
    ConfigListItem.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(ConfigListItem = exports.ConfigListItem || (exports.ConfigListItem = {}));
var ListConfigsResponse;
(function (ListConfigsResponse) {
    /**
     * @internal
     */
    ListConfigsResponse.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(ListConfigsResponse = exports.ListConfigsResponse || (exports.ListConfigsResponse = {}));
var UpdateConfigRequest;
(function (UpdateConfigRequest) {
    /**
     * @internal
     */
    UpdateConfigRequest.filterSensitiveLog = (obj) => ({
        ...obj,
        ...(obj.configData && { configData: ConfigTypeData.filterSensitiveLog(obj.configData) }),
    });
})(UpdateConfigRequest = exports.UpdateConfigRequest || (exports.UpdateConfigRequest = {}));
var SocketAddress;
(function (SocketAddress) {
    /**
     * @internal
     */
    SocketAddress.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(SocketAddress = exports.SocketAddress || (exports.SocketAddress = {}));
var EndpointStatus;
(function (EndpointStatus) {
    EndpointStatus["created"] = "created";
    EndpointStatus["creating"] = "creating";
    EndpointStatus["deleted"] = "deleted";
    EndpointStatus["deleting"] = "deleting";
    EndpointStatus["failed"] = "failed";
})(EndpointStatus = exports.EndpointStatus || (exports.EndpointStatus = {}));
var DataflowEndpoint;
(function (DataflowEndpoint) {
    /**
     * @internal
     */
    DataflowEndpoint.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(DataflowEndpoint = exports.DataflowEndpoint || (exports.DataflowEndpoint = {}));
var SecurityDetails;
(function (SecurityDetails) {
    /**
     * @internal
     */
    SecurityDetails.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(SecurityDetails = exports.SecurityDetails || (exports.SecurityDetails = {}));
var EndpointDetails;
(function (EndpointDetails) {
    /**
     * @internal
     */
    EndpointDetails.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(EndpointDetails = exports.EndpointDetails || (exports.EndpointDetails = {}));
var S3RecordingDetails;
(function (S3RecordingDetails) {
    /**
     * @internal
     */
    S3RecordingDetails.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(S3RecordingDetails = exports.S3RecordingDetails || (exports.S3RecordingDetails = {}));
var ConfigDetails;
(function (ConfigDetails) {
    ConfigDetails.visit = (value, visitor) => {
        if (value.endpointDetails !== undefined)
            return visitor.endpointDetails(value.endpointDetails);
        if (value.antennaDemodDecodeDetails !== undefined)
            return visitor.antennaDemodDecodeDetails(value.antennaDemodDecodeDetails);
        if (value.s3RecordingDetails !== undefined)
            return visitor.s3RecordingDetails(value.s3RecordingDetails);
        return visitor._(value.$unknown[0], value.$unknown[1]);
    };
    /**
     * @internal
     */
    ConfigDetails.filterSensitiveLog = (obj) => {
        if (obj.endpointDetails !== undefined)
            return { endpointDetails: EndpointDetails.filterSensitiveLog(obj.endpointDetails) };
        if (obj.antennaDemodDecodeDetails !== undefined)
            return { antennaDemodDecodeDetails: AntennaDemodDecodeDetails.filterSensitiveLog(obj.antennaDemodDecodeDetails) };
        if (obj.s3RecordingDetails !== undefined)
            return { s3RecordingDetails: S3RecordingDetails.filterSensitiveLog(obj.s3RecordingDetails) };
        if (obj.$unknown !== undefined)
            return { [obj.$unknown[0]]: "UNKNOWN" };
    };
})(ConfigDetails = exports.ConfigDetails || (exports.ConfigDetails = {}));
var DescribeContactRequest;
(function (DescribeContactRequest) {
    /**
     * @internal
     */
    DescribeContactRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(DescribeContactRequest = exports.DescribeContactRequest || (exports.DescribeContactRequest = {}));
var ContactStatus;
(function (ContactStatus) {
    ContactStatus["AVAILABLE"] = "AVAILABLE";
    ContactStatus["AWS_CANCELLED"] = "AWS_CANCELLED";
    ContactStatus["AWS_FAILED"] = "AWS_FAILED";
    ContactStatus["CANCELLED"] = "CANCELLED";
    ContactStatus["CANCELLING"] = "CANCELLING";
    ContactStatus["COMPLETED"] = "COMPLETED";
    ContactStatus["FAILED"] = "FAILED";
    ContactStatus["FAILED_TO_SCHEDULE"] = "FAILED_TO_SCHEDULE";
    ContactStatus["PASS"] = "PASS";
    ContactStatus["POSTPASS"] = "POSTPASS";
    ContactStatus["PREPASS"] = "PREPASS";
    ContactStatus["SCHEDULED"] = "SCHEDULED";
    ContactStatus["SCHEDULING"] = "SCHEDULING";
})(ContactStatus = exports.ContactStatus || (exports.ContactStatus = {}));
var Destination;
(function (Destination) {
    /**
     * @internal
     */
    Destination.filterSensitiveLog = (obj) => ({
        ...obj,
        ...(obj.configDetails && { configDetails: ConfigDetails.filterSensitiveLog(obj.configDetails) }),
    });
})(Destination = exports.Destination || (exports.Destination = {}));
var Source;
(function (Source) {
    /**
     * @internal
     */
    Source.filterSensitiveLog = (obj) => ({
        ...obj,
        ...(obj.configDetails && { configDetails: ConfigDetails.filterSensitiveLog(obj.configDetails) }),
    });
})(Source = exports.Source || (exports.Source = {}));
var DataflowDetail;
(function (DataflowDetail) {
    /**
     * @internal
     */
    DataflowDetail.filterSensitiveLog = (obj) => ({
        ...obj,
        ...(obj.source && { source: Source.filterSensitiveLog(obj.source) }),
        ...(obj.destination && { destination: Destination.filterSensitiveLog(obj.destination) }),
    });
})(DataflowDetail = exports.DataflowDetail || (exports.DataflowDetail = {}));
var Elevation;
(function (Elevation) {
    /**
     * @internal
     */
    Elevation.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(Elevation = exports.Elevation || (exports.Elevation = {}));
var DescribeContactResponse;
(function (DescribeContactResponse) {
    /**
     * @internal
     */
    DescribeContactResponse.filterSensitiveLog = (obj) => ({
        ...obj,
        ...(obj.dataflowList && { dataflowList: obj.dataflowList.map((item) => DataflowDetail.filterSensitiveLog(item)) }),
    });
})(DescribeContactResponse = exports.DescribeContactResponse || (exports.DescribeContactResponse = {}));
var ListContactsRequest;
(function (ListContactsRequest) {
    /**
     * @internal
     */
    ListContactsRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(ListContactsRequest = exports.ListContactsRequest || (exports.ListContactsRequest = {}));
var ContactData;
(function (ContactData) {
    /**
     * @internal
     */
    ContactData.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(ContactData = exports.ContactData || (exports.ContactData = {}));
var ListContactsResponse;
(function (ListContactsResponse) {
    /**
     * @internal
     */
    ListContactsResponse.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(ListContactsResponse = exports.ListContactsResponse || (exports.ListContactsResponse = {}));
var ReserveContactRequest;
(function (ReserveContactRequest) {
    /**
     * @internal
     */
    ReserveContactRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(ReserveContactRequest = exports.ReserveContactRequest || (exports.ReserveContactRequest = {}));
var CreateDataflowEndpointGroupRequest;
(function (CreateDataflowEndpointGroupRequest) {
    /**
     * @internal
     */
    CreateDataflowEndpointGroupRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(CreateDataflowEndpointGroupRequest = exports.CreateDataflowEndpointGroupRequest || (exports.CreateDataflowEndpointGroupRequest = {}));
var DataflowEndpointGroupIdResponse;
(function (DataflowEndpointGroupIdResponse) {
    /**
     * @internal
     */
    DataflowEndpointGroupIdResponse.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(DataflowEndpointGroupIdResponse = exports.DataflowEndpointGroupIdResponse || (exports.DataflowEndpointGroupIdResponse = {}));
var CreateMissionProfileRequest;
(function (CreateMissionProfileRequest) {
    /**
     * @internal
     */
    CreateMissionProfileRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(CreateMissionProfileRequest = exports.CreateMissionProfileRequest || (exports.CreateMissionProfileRequest = {}));
var MissionProfileIdResponse;
(function (MissionProfileIdResponse) {
    /**
     * @internal
     */
    MissionProfileIdResponse.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(MissionProfileIdResponse = exports.MissionProfileIdResponse || (exports.MissionProfileIdResponse = {}));
var DeleteDataflowEndpointGroupRequest;
(function (DeleteDataflowEndpointGroupRequest) {
    /**
     * @internal
     */
    DeleteDataflowEndpointGroupRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(DeleteDataflowEndpointGroupRequest = exports.DeleteDataflowEndpointGroupRequest || (exports.DeleteDataflowEndpointGroupRequest = {}));
var GetDataflowEndpointGroupRequest;
(function (GetDataflowEndpointGroupRequest) {
    /**
     * @internal
     */
    GetDataflowEndpointGroupRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(GetDataflowEndpointGroupRequest = exports.GetDataflowEndpointGroupRequest || (exports.GetDataflowEndpointGroupRequest = {}));
var GetDataflowEndpointGroupResponse;
(function (GetDataflowEndpointGroupResponse) {
    /**
     * @internal
     */
    GetDataflowEndpointGroupResponse.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(GetDataflowEndpointGroupResponse = exports.GetDataflowEndpointGroupResponse || (exports.GetDataflowEndpointGroupResponse = {}));
var ListDataflowEndpointGroupsRequest;
(function (ListDataflowEndpointGroupsRequest) {
    /**
     * @internal
     */
    ListDataflowEndpointGroupsRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(ListDataflowEndpointGroupsRequest = exports.ListDataflowEndpointGroupsRequest || (exports.ListDataflowEndpointGroupsRequest = {}));
var DataflowEndpointListItem;
(function (DataflowEndpointListItem) {
    /**
     * @internal
     */
    DataflowEndpointListItem.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(DataflowEndpointListItem = exports.DataflowEndpointListItem || (exports.DataflowEndpointListItem = {}));
var ListDataflowEndpointGroupsResponse;
(function (ListDataflowEndpointGroupsResponse) {
    /**
     * @internal
     */
    ListDataflowEndpointGroupsResponse.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(ListDataflowEndpointGroupsResponse = exports.ListDataflowEndpointGroupsResponse || (exports.ListDataflowEndpointGroupsResponse = {}));
var DeleteMissionProfileRequest;
(function (DeleteMissionProfileRequest) {
    /**
     * @internal
     */
    DeleteMissionProfileRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(DeleteMissionProfileRequest = exports.DeleteMissionProfileRequest || (exports.DeleteMissionProfileRequest = {}));
var GetMinuteUsageRequest;
(function (GetMinuteUsageRequest) {
    /**
     * @internal
     */
    GetMinuteUsageRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(GetMinuteUsageRequest = exports.GetMinuteUsageRequest || (exports.GetMinuteUsageRequest = {}));
var GetMinuteUsageResponse;
(function (GetMinuteUsageResponse) {
    /**
     * @internal
     */
    GetMinuteUsageResponse.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(GetMinuteUsageResponse = exports.GetMinuteUsageResponse || (exports.GetMinuteUsageResponse = {}));
var GetMissionProfileRequest;
(function (GetMissionProfileRequest) {
    /**
     * @internal
     */
    GetMissionProfileRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(GetMissionProfileRequest = exports.GetMissionProfileRequest || (exports.GetMissionProfileRequest = {}));
var GetMissionProfileResponse;
(function (GetMissionProfileResponse) {
    /**
     * @internal
     */
    GetMissionProfileResponse.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(GetMissionProfileResponse = exports.GetMissionProfileResponse || (exports.GetMissionProfileResponse = {}));
var GetSatelliteRequest;
(function (GetSatelliteRequest) {
    /**
     * @internal
     */
    GetSatelliteRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(GetSatelliteRequest = exports.GetSatelliteRequest || (exports.GetSatelliteRequest = {}));
var GetSatelliteResponse;
(function (GetSatelliteResponse) {
    /**
     * @internal
     */
    GetSatelliteResponse.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(GetSatelliteResponse = exports.GetSatelliteResponse || (exports.GetSatelliteResponse = {}));
var ListGroundStationsRequest;
(function (ListGroundStationsRequest) {
    /**
     * @internal
     */
    ListGroundStationsRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(ListGroundStationsRequest = exports.ListGroundStationsRequest || (exports.ListGroundStationsRequest = {}));
var GroundStationData;
(function (GroundStationData) {
    /**
     * @internal
     */
    GroundStationData.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(GroundStationData = exports.GroundStationData || (exports.GroundStationData = {}));
var ListGroundStationsResponse;
(function (ListGroundStationsResponse) {
    /**
     * @internal
     */
    ListGroundStationsResponse.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(ListGroundStationsResponse = exports.ListGroundStationsResponse || (exports.ListGroundStationsResponse = {}));
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
var ListMissionProfilesRequest;
(function (ListMissionProfilesRequest) {
    /**
     * @internal
     */
    ListMissionProfilesRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(ListMissionProfilesRequest = exports.ListMissionProfilesRequest || (exports.ListMissionProfilesRequest = {}));
var MissionProfileListItem;
(function (MissionProfileListItem) {
    /**
     * @internal
     */
    MissionProfileListItem.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(MissionProfileListItem = exports.MissionProfileListItem || (exports.MissionProfileListItem = {}));
var ListMissionProfilesResponse;
(function (ListMissionProfilesResponse) {
    /**
     * @internal
     */
    ListMissionProfilesResponse.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(ListMissionProfilesResponse = exports.ListMissionProfilesResponse || (exports.ListMissionProfilesResponse = {}));
var UpdateMissionProfileRequest;
(function (UpdateMissionProfileRequest) {
    /**
     * @internal
     */
    UpdateMissionProfileRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(UpdateMissionProfileRequest = exports.UpdateMissionProfileRequest || (exports.UpdateMissionProfileRequest = {}));
var ListSatellitesRequest;
(function (ListSatellitesRequest) {
    /**
     * @internal
     */
    ListSatellitesRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(ListSatellitesRequest = exports.ListSatellitesRequest || (exports.ListSatellitesRequest = {}));
var SatelliteListItem;
(function (SatelliteListItem) {
    /**
     * @internal
     */
    SatelliteListItem.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(SatelliteListItem = exports.SatelliteListItem || (exports.SatelliteListItem = {}));
var ListSatellitesResponse;
(function (ListSatellitesResponse) {
    /**
     * @internal
     */
    ListSatellitesResponse.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(ListSatellitesResponse = exports.ListSatellitesResponse || (exports.ListSatellitesResponse = {}));
var TagResourceRequest;
(function (TagResourceRequest) {
    /**
     * @internal
     */
    TagResourceRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(TagResourceRequest = exports.TagResourceRequest || (exports.TagResourceRequest = {}));
var TagResourceResponse;
(function (TagResourceResponse) {
    /**
     * @internal
     */
    TagResourceResponse.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(TagResourceResponse = exports.TagResourceResponse || (exports.TagResourceResponse = {}));
var UntagResourceRequest;
(function (UntagResourceRequest) {
    /**
     * @internal
     */
    UntagResourceRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(UntagResourceRequest = exports.UntagResourceRequest || (exports.UntagResourceRequest = {}));
var UntagResourceResponse;
(function (UntagResourceResponse) {
    /**
     * @internal
     */
    UntagResourceResponse.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(UntagResourceResponse = exports.UntagResourceResponse || (exports.UntagResourceResponse = {}));
//# sourceMappingURL=models_0.js.map