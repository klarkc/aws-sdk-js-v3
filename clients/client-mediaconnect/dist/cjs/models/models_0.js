"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.NetworkInterfaceType = exports.Source = exports.SetSourceRequest = exports.Reservation = exports.ReservationState = exports.Output = exports.Transport = exports.Offering = exports.ResourceSpecification = exports.ResourceType = exports.PriceUnits = exports.DurationUnits = exports.MediaStreamSourceConfigurationRequest = exports.MediaStreamSourceConfiguration = exports.MediaStreamOutputConfiguration = exports.EncodingParameters = exports.MediaStream = exports.MediaStreamAttributes = exports.Fmtp = exports.ListedFlow = exports.Status = exports.SourceType = exports.ListedEntitlement = exports.InputConfigurationRequest = exports.InputConfiguration = exports.GrantEntitlementRequest = exports.Entitlement = exports.EntitlementStatus = exports.DestinationConfiguration = exports.Interface = exports.AddOutputRequest = exports.VpcInterfaceAttachment = exports.Protocol = exports.MediaStreamOutputConfigurationRequest = exports.EncodingParametersRequest = exports.EncoderProfile = exports.EncodingName = exports.DestinationConfigurationRequest = exports.InterfaceRequest = exports.Encryption = exports.KeyType = exports.Algorithm = exports.AddMediaStreamRequest = exports.MediaStreamType = exports.MediaStreamAttributesRequest = exports.FmtpRequest = exports.Tcs = exports.ScanMode = exports.Range = exports.Colorimetry = void 0;
exports.RemoveFlowOutputRequest = exports.RemoveFlowMediaStreamResponse = exports.RemoveFlowMediaStreamRequest = exports.PurchaseOfferingResponse = exports.PurchaseOfferingRequest = exports.ListTagsForResourceResponse = exports.ListTagsForResourceRequest = exports.ListReservationsResponse = exports.ListReservationsRequest = exports.ListOfferingsResponse = exports.ListOfferingsRequest = exports.ListFlowsResponse = exports.ListFlowsRequest = exports.ListEntitlementsResponse = exports.ListEntitlementsRequest = exports.GrantFlowEntitlementsResponse = exports.GrantFlowEntitlementsRequest = exports.GrantFlowEntitlements420Exception = exports.DescribeReservationResponse = exports.DescribeReservationRequest = exports.DescribeOfferingResponse = exports.DescribeOfferingRequest = exports.DescribeFlowResponse = exports.Messages = exports.DescribeFlowRequest = exports.DeleteFlowResponse = exports.DeleteFlowRequest = exports.CreateFlowResponse = exports.Flow = exports.CreateFlowRequest = exports.FailoverConfig = exports.State = exports.CreateFlow420Exception = exports.AddFlowVpcInterfacesResponse = exports.AddFlowVpcInterfacesRequest = exports.AddFlowSourcesResponse = exports.AddFlowSourcesRequest = exports.AddFlowOutputsResponse = exports.AddFlowOutputsRequest = exports.AddFlowOutputs420Exception = exports.TooManyRequestsException = exports.ServiceUnavailableException = exports.NotFoundException = exports.InternalServerErrorException = exports.ForbiddenException = exports.BadRequestException = exports.AddFlowMediaStreamsResponse = exports.AddFlowMediaStreamsRequest = exports.VpcInterfaceRequest = exports.VpcInterface = void 0;
exports.UpdateFlowSourceResponse = exports.UpdateFlowSourceRequest = exports.UpdateFlowOutputResponse = exports.UpdateFlowOutputRequest = exports.UpdateFlowMediaStreamResponse = exports.UpdateFlowMediaStreamRequest = exports.UpdateFlowEntitlementResponse = exports.UpdateFlowEntitlementRequest = exports.UpdateEncryption = exports.UpdateFlowResponse = exports.UpdateFlowRequest = exports.UpdateFailoverConfig = exports.UntagResourceRequest = exports.TagResourceRequest = exports.StopFlowResponse = exports.StopFlowRequest = exports.StartFlowResponse = exports.StartFlowRequest = exports.RevokeFlowEntitlementResponse = exports.RevokeFlowEntitlementRequest = exports.RemoveFlowVpcInterfaceResponse = exports.RemoveFlowVpcInterfaceRequest = exports.RemoveFlowSourceResponse = exports.RemoveFlowSourceRequest = exports.RemoveFlowOutputResponse = void 0;
var Colorimetry;
(function (Colorimetry) {
    Colorimetry["BT2020"] = "BT2020";
    Colorimetry["BT2100"] = "BT2100";
    Colorimetry["BT601"] = "BT601";
    Colorimetry["BT709"] = "BT709";
    Colorimetry["ST2065_1"] = "ST2065-1";
    Colorimetry["ST2065_3"] = "ST2065-3";
    Colorimetry["XYZ"] = "XYZ";
})(Colorimetry = exports.Colorimetry || (exports.Colorimetry = {}));
var Range;
(function (Range) {
    Range["FULL"] = "FULL";
    Range["FULLPROTECT"] = "FULLPROTECT";
    Range["NARROW"] = "NARROW";
})(Range = exports.Range || (exports.Range = {}));
var ScanMode;
(function (ScanMode) {
    ScanMode["interlace"] = "interlace";
    ScanMode["progressive"] = "progressive";
    ScanMode["progressive_segmented_frame"] = "progressive-segmented-frame";
})(ScanMode = exports.ScanMode || (exports.ScanMode = {}));
var Tcs;
(function (Tcs) {
    Tcs["BT2100LINHLG"] = "BT2100LINHLG";
    Tcs["BT2100LINPQ"] = "BT2100LINPQ";
    Tcs["DENSITY"] = "DENSITY";
    Tcs["HLG"] = "HLG";
    Tcs["LINEAR"] = "LINEAR";
    Tcs["PQ"] = "PQ";
    Tcs["SDR"] = "SDR";
    Tcs["ST2065_1"] = "ST2065-1";
    Tcs["ST428_1"] = "ST428-1";
})(Tcs = exports.Tcs || (exports.Tcs = {}));
var FmtpRequest;
(function (FmtpRequest) {
    /**
     * @internal
     */
    FmtpRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(FmtpRequest = exports.FmtpRequest || (exports.FmtpRequest = {}));
var MediaStreamAttributesRequest;
(function (MediaStreamAttributesRequest) {
    /**
     * @internal
     */
    MediaStreamAttributesRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(MediaStreamAttributesRequest = exports.MediaStreamAttributesRequest || (exports.MediaStreamAttributesRequest = {}));
var MediaStreamType;
(function (MediaStreamType) {
    MediaStreamType["ancillary_data"] = "ancillary-data";
    MediaStreamType["audio"] = "audio";
    MediaStreamType["video"] = "video";
})(MediaStreamType = exports.MediaStreamType || (exports.MediaStreamType = {}));
var AddMediaStreamRequest;
(function (AddMediaStreamRequest) {
    /**
     * @internal
     */
    AddMediaStreamRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(AddMediaStreamRequest = exports.AddMediaStreamRequest || (exports.AddMediaStreamRequest = {}));
var Algorithm;
(function (Algorithm) {
    Algorithm["aes128"] = "aes128";
    Algorithm["aes192"] = "aes192";
    Algorithm["aes256"] = "aes256";
})(Algorithm = exports.Algorithm || (exports.Algorithm = {}));
var KeyType;
(function (KeyType) {
    KeyType["speke"] = "speke";
    KeyType["srt_password"] = "srt-password";
    KeyType["static_key"] = "static-key";
})(KeyType = exports.KeyType || (exports.KeyType = {}));
var Encryption;
(function (Encryption) {
    /**
     * @internal
     */
    Encryption.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(Encryption = exports.Encryption || (exports.Encryption = {}));
var InterfaceRequest;
(function (InterfaceRequest) {
    /**
     * @internal
     */
    InterfaceRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(InterfaceRequest = exports.InterfaceRequest || (exports.InterfaceRequest = {}));
var DestinationConfigurationRequest;
(function (DestinationConfigurationRequest) {
    /**
     * @internal
     */
    DestinationConfigurationRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(DestinationConfigurationRequest = exports.DestinationConfigurationRequest || (exports.DestinationConfigurationRequest = {}));
var EncodingName;
(function (EncodingName) {
    EncodingName["jxsv"] = "jxsv";
    EncodingName["pcm"] = "pcm";
    EncodingName["raw"] = "raw";
    EncodingName["smpte291"] = "smpte291";
})(EncodingName = exports.EncodingName || (exports.EncodingName = {}));
var EncoderProfile;
(function (EncoderProfile) {
    EncoderProfile["high"] = "high";
    EncoderProfile["main"] = "main";
})(EncoderProfile = exports.EncoderProfile || (exports.EncoderProfile = {}));
var EncodingParametersRequest;
(function (EncodingParametersRequest) {
    /**
     * @internal
     */
    EncodingParametersRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(EncodingParametersRequest = exports.EncodingParametersRequest || (exports.EncodingParametersRequest = {}));
var MediaStreamOutputConfigurationRequest;
(function (MediaStreamOutputConfigurationRequest) {
    /**
     * @internal
     */
    MediaStreamOutputConfigurationRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(MediaStreamOutputConfigurationRequest = exports.MediaStreamOutputConfigurationRequest || (exports.MediaStreamOutputConfigurationRequest = {}));
var Protocol;
(function (Protocol) {
    Protocol["cdi"] = "cdi";
    Protocol["rist"] = "rist";
    Protocol["rtp"] = "rtp";
    Protocol["rtp_fec"] = "rtp-fec";
    Protocol["srt_listener"] = "srt-listener";
    Protocol["st2110_jpegxs"] = "st2110-jpegxs";
    Protocol["zixi_pull"] = "zixi-pull";
    Protocol["zixi_push"] = "zixi-push";
})(Protocol = exports.Protocol || (exports.Protocol = {}));
var VpcInterfaceAttachment;
(function (VpcInterfaceAttachment) {
    /**
     * @internal
     */
    VpcInterfaceAttachment.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(VpcInterfaceAttachment = exports.VpcInterfaceAttachment || (exports.VpcInterfaceAttachment = {}));
var AddOutputRequest;
(function (AddOutputRequest) {
    /**
     * @internal
     */
    AddOutputRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(AddOutputRequest = exports.AddOutputRequest || (exports.AddOutputRequest = {}));
var Interface;
(function (Interface) {
    /**
     * @internal
     */
    Interface.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(Interface = exports.Interface || (exports.Interface = {}));
var DestinationConfiguration;
(function (DestinationConfiguration) {
    /**
     * @internal
     */
    DestinationConfiguration.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(DestinationConfiguration = exports.DestinationConfiguration || (exports.DestinationConfiguration = {}));
var EntitlementStatus;
(function (EntitlementStatus) {
    EntitlementStatus["DISABLED"] = "DISABLED";
    EntitlementStatus["ENABLED"] = "ENABLED";
})(EntitlementStatus = exports.EntitlementStatus || (exports.EntitlementStatus = {}));
var Entitlement;
(function (Entitlement) {
    /**
     * @internal
     */
    Entitlement.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(Entitlement = exports.Entitlement || (exports.Entitlement = {}));
var GrantEntitlementRequest;
(function (GrantEntitlementRequest) {
    /**
     * @internal
     */
    GrantEntitlementRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(GrantEntitlementRequest = exports.GrantEntitlementRequest || (exports.GrantEntitlementRequest = {}));
var InputConfiguration;
(function (InputConfiguration) {
    /**
     * @internal
     */
    InputConfiguration.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(InputConfiguration = exports.InputConfiguration || (exports.InputConfiguration = {}));
var InputConfigurationRequest;
(function (InputConfigurationRequest) {
    /**
     * @internal
     */
    InputConfigurationRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(InputConfigurationRequest = exports.InputConfigurationRequest || (exports.InputConfigurationRequest = {}));
var ListedEntitlement;
(function (ListedEntitlement) {
    /**
     * @internal
     */
    ListedEntitlement.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(ListedEntitlement = exports.ListedEntitlement || (exports.ListedEntitlement = {}));
var SourceType;
(function (SourceType) {
    SourceType["ENTITLED"] = "ENTITLED";
    SourceType["OWNED"] = "OWNED";
})(SourceType = exports.SourceType || (exports.SourceType = {}));
var Status;
(function (Status) {
    Status["ACTIVE"] = "ACTIVE";
    Status["DELETING"] = "DELETING";
    Status["ERROR"] = "ERROR";
    Status["STANDBY"] = "STANDBY";
    Status["STARTING"] = "STARTING";
    Status["STOPPING"] = "STOPPING";
    Status["UPDATING"] = "UPDATING";
})(Status = exports.Status || (exports.Status = {}));
var ListedFlow;
(function (ListedFlow) {
    /**
     * @internal
     */
    ListedFlow.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(ListedFlow = exports.ListedFlow || (exports.ListedFlow = {}));
var Fmtp;
(function (Fmtp) {
    /**
     * @internal
     */
    Fmtp.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(Fmtp = exports.Fmtp || (exports.Fmtp = {}));
var MediaStreamAttributes;
(function (MediaStreamAttributes) {
    /**
     * @internal
     */
    MediaStreamAttributes.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(MediaStreamAttributes = exports.MediaStreamAttributes || (exports.MediaStreamAttributes = {}));
var MediaStream;
(function (MediaStream) {
    /**
     * @internal
     */
    MediaStream.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(MediaStream = exports.MediaStream || (exports.MediaStream = {}));
var EncodingParameters;
(function (EncodingParameters) {
    /**
     * @internal
     */
    EncodingParameters.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(EncodingParameters = exports.EncodingParameters || (exports.EncodingParameters = {}));
var MediaStreamOutputConfiguration;
(function (MediaStreamOutputConfiguration) {
    /**
     * @internal
     */
    MediaStreamOutputConfiguration.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(MediaStreamOutputConfiguration = exports.MediaStreamOutputConfiguration || (exports.MediaStreamOutputConfiguration = {}));
var MediaStreamSourceConfiguration;
(function (MediaStreamSourceConfiguration) {
    /**
     * @internal
     */
    MediaStreamSourceConfiguration.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(MediaStreamSourceConfiguration = exports.MediaStreamSourceConfiguration || (exports.MediaStreamSourceConfiguration = {}));
var MediaStreamSourceConfigurationRequest;
(function (MediaStreamSourceConfigurationRequest) {
    /**
     * @internal
     */
    MediaStreamSourceConfigurationRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(MediaStreamSourceConfigurationRequest = exports.MediaStreamSourceConfigurationRequest || (exports.MediaStreamSourceConfigurationRequest = {}));
var DurationUnits;
(function (DurationUnits) {
    DurationUnits["MONTHS"] = "MONTHS";
})(DurationUnits = exports.DurationUnits || (exports.DurationUnits = {}));
var PriceUnits;
(function (PriceUnits) {
    PriceUnits["HOURLY"] = "HOURLY";
})(PriceUnits = exports.PriceUnits || (exports.PriceUnits = {}));
var ResourceType;
(function (ResourceType) {
    ResourceType["Mbps_Outbound_Bandwidth"] = "Mbps_Outbound_Bandwidth";
})(ResourceType = exports.ResourceType || (exports.ResourceType = {}));
var ResourceSpecification;
(function (ResourceSpecification) {
    /**
     * @internal
     */
    ResourceSpecification.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(ResourceSpecification = exports.ResourceSpecification || (exports.ResourceSpecification = {}));
var Offering;
(function (Offering) {
    /**
     * @internal
     */
    Offering.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(Offering = exports.Offering || (exports.Offering = {}));
var Transport;
(function (Transport) {
    /**
     * @internal
     */
    Transport.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(Transport = exports.Transport || (exports.Transport = {}));
var Output;
(function (Output) {
    /**
     * @internal
     */
    Output.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(Output = exports.Output || (exports.Output = {}));
var ReservationState;
(function (ReservationState) {
    ReservationState["ACTIVE"] = "ACTIVE";
    ReservationState["CANCELED"] = "CANCELED";
    ReservationState["EXPIRED"] = "EXPIRED";
    ReservationState["PROCESSING"] = "PROCESSING";
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
var SetSourceRequest;
(function (SetSourceRequest) {
    /**
     * @internal
     */
    SetSourceRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(SetSourceRequest = exports.SetSourceRequest || (exports.SetSourceRequest = {}));
var Source;
(function (Source) {
    /**
     * @internal
     */
    Source.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(Source = exports.Source || (exports.Source = {}));
var NetworkInterfaceType;
(function (NetworkInterfaceType) {
    NetworkInterfaceType["efa"] = "efa";
    NetworkInterfaceType["ena"] = "ena";
})(NetworkInterfaceType = exports.NetworkInterfaceType || (exports.NetworkInterfaceType = {}));
var VpcInterface;
(function (VpcInterface) {
    /**
     * @internal
     */
    VpcInterface.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(VpcInterface = exports.VpcInterface || (exports.VpcInterface = {}));
var VpcInterfaceRequest;
(function (VpcInterfaceRequest) {
    /**
     * @internal
     */
    VpcInterfaceRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(VpcInterfaceRequest = exports.VpcInterfaceRequest || (exports.VpcInterfaceRequest = {}));
var AddFlowMediaStreamsRequest;
(function (AddFlowMediaStreamsRequest) {
    /**
     * @internal
     */
    AddFlowMediaStreamsRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(AddFlowMediaStreamsRequest = exports.AddFlowMediaStreamsRequest || (exports.AddFlowMediaStreamsRequest = {}));
var AddFlowMediaStreamsResponse;
(function (AddFlowMediaStreamsResponse) {
    /**
     * @internal
     */
    AddFlowMediaStreamsResponse.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(AddFlowMediaStreamsResponse = exports.AddFlowMediaStreamsResponse || (exports.AddFlowMediaStreamsResponse = {}));
var BadRequestException;
(function (BadRequestException) {
    /**
     * @internal
     */
    BadRequestException.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(BadRequestException = exports.BadRequestException || (exports.BadRequestException = {}));
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
var AddFlowOutputs420Exception;
(function (AddFlowOutputs420Exception) {
    /**
     * @internal
     */
    AddFlowOutputs420Exception.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(AddFlowOutputs420Exception = exports.AddFlowOutputs420Exception || (exports.AddFlowOutputs420Exception = {}));
var AddFlowOutputsRequest;
(function (AddFlowOutputsRequest) {
    /**
     * @internal
     */
    AddFlowOutputsRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(AddFlowOutputsRequest = exports.AddFlowOutputsRequest || (exports.AddFlowOutputsRequest = {}));
var AddFlowOutputsResponse;
(function (AddFlowOutputsResponse) {
    /**
     * @internal
     */
    AddFlowOutputsResponse.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(AddFlowOutputsResponse = exports.AddFlowOutputsResponse || (exports.AddFlowOutputsResponse = {}));
var AddFlowSourcesRequest;
(function (AddFlowSourcesRequest) {
    /**
     * @internal
     */
    AddFlowSourcesRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(AddFlowSourcesRequest = exports.AddFlowSourcesRequest || (exports.AddFlowSourcesRequest = {}));
var AddFlowSourcesResponse;
(function (AddFlowSourcesResponse) {
    /**
     * @internal
     */
    AddFlowSourcesResponse.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(AddFlowSourcesResponse = exports.AddFlowSourcesResponse || (exports.AddFlowSourcesResponse = {}));
var AddFlowVpcInterfacesRequest;
(function (AddFlowVpcInterfacesRequest) {
    /**
     * @internal
     */
    AddFlowVpcInterfacesRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(AddFlowVpcInterfacesRequest = exports.AddFlowVpcInterfacesRequest || (exports.AddFlowVpcInterfacesRequest = {}));
var AddFlowVpcInterfacesResponse;
(function (AddFlowVpcInterfacesResponse) {
    /**
     * @internal
     */
    AddFlowVpcInterfacesResponse.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(AddFlowVpcInterfacesResponse = exports.AddFlowVpcInterfacesResponse || (exports.AddFlowVpcInterfacesResponse = {}));
var CreateFlow420Exception;
(function (CreateFlow420Exception) {
    /**
     * @internal
     */
    CreateFlow420Exception.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(CreateFlow420Exception = exports.CreateFlow420Exception || (exports.CreateFlow420Exception = {}));
var State;
(function (State) {
    State["DISABLED"] = "DISABLED";
    State["ENABLED"] = "ENABLED";
})(State = exports.State || (exports.State = {}));
var FailoverConfig;
(function (FailoverConfig) {
    /**
     * @internal
     */
    FailoverConfig.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(FailoverConfig = exports.FailoverConfig || (exports.FailoverConfig = {}));
var CreateFlowRequest;
(function (CreateFlowRequest) {
    /**
     * @internal
     */
    CreateFlowRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(CreateFlowRequest = exports.CreateFlowRequest || (exports.CreateFlowRequest = {}));
var Flow;
(function (Flow) {
    /**
     * @internal
     */
    Flow.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(Flow = exports.Flow || (exports.Flow = {}));
var CreateFlowResponse;
(function (CreateFlowResponse) {
    /**
     * @internal
     */
    CreateFlowResponse.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(CreateFlowResponse = exports.CreateFlowResponse || (exports.CreateFlowResponse = {}));
var DeleteFlowRequest;
(function (DeleteFlowRequest) {
    /**
     * @internal
     */
    DeleteFlowRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(DeleteFlowRequest = exports.DeleteFlowRequest || (exports.DeleteFlowRequest = {}));
var DeleteFlowResponse;
(function (DeleteFlowResponse) {
    /**
     * @internal
     */
    DeleteFlowResponse.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(DeleteFlowResponse = exports.DeleteFlowResponse || (exports.DeleteFlowResponse = {}));
var DescribeFlowRequest;
(function (DescribeFlowRequest) {
    /**
     * @internal
     */
    DescribeFlowRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(DescribeFlowRequest = exports.DescribeFlowRequest || (exports.DescribeFlowRequest = {}));
var Messages;
(function (Messages) {
    /**
     * @internal
     */
    Messages.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(Messages = exports.Messages || (exports.Messages = {}));
var DescribeFlowResponse;
(function (DescribeFlowResponse) {
    /**
     * @internal
     */
    DescribeFlowResponse.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(DescribeFlowResponse = exports.DescribeFlowResponse || (exports.DescribeFlowResponse = {}));
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
var GrantFlowEntitlements420Exception;
(function (GrantFlowEntitlements420Exception) {
    /**
     * @internal
     */
    GrantFlowEntitlements420Exception.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(GrantFlowEntitlements420Exception = exports.GrantFlowEntitlements420Exception || (exports.GrantFlowEntitlements420Exception = {}));
var GrantFlowEntitlementsRequest;
(function (GrantFlowEntitlementsRequest) {
    /**
     * @internal
     */
    GrantFlowEntitlementsRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(GrantFlowEntitlementsRequest = exports.GrantFlowEntitlementsRequest || (exports.GrantFlowEntitlementsRequest = {}));
var GrantFlowEntitlementsResponse;
(function (GrantFlowEntitlementsResponse) {
    /**
     * @internal
     */
    GrantFlowEntitlementsResponse.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(GrantFlowEntitlementsResponse = exports.GrantFlowEntitlementsResponse || (exports.GrantFlowEntitlementsResponse = {}));
var ListEntitlementsRequest;
(function (ListEntitlementsRequest) {
    /**
     * @internal
     */
    ListEntitlementsRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(ListEntitlementsRequest = exports.ListEntitlementsRequest || (exports.ListEntitlementsRequest = {}));
var ListEntitlementsResponse;
(function (ListEntitlementsResponse) {
    /**
     * @internal
     */
    ListEntitlementsResponse.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(ListEntitlementsResponse = exports.ListEntitlementsResponse || (exports.ListEntitlementsResponse = {}));
var ListFlowsRequest;
(function (ListFlowsRequest) {
    /**
     * @internal
     */
    ListFlowsRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(ListFlowsRequest = exports.ListFlowsRequest || (exports.ListFlowsRequest = {}));
var ListFlowsResponse;
(function (ListFlowsResponse) {
    /**
     * @internal
     */
    ListFlowsResponse.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(ListFlowsResponse = exports.ListFlowsResponse || (exports.ListFlowsResponse = {}));
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
var RemoveFlowMediaStreamRequest;
(function (RemoveFlowMediaStreamRequest) {
    /**
     * @internal
     */
    RemoveFlowMediaStreamRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(RemoveFlowMediaStreamRequest = exports.RemoveFlowMediaStreamRequest || (exports.RemoveFlowMediaStreamRequest = {}));
var RemoveFlowMediaStreamResponse;
(function (RemoveFlowMediaStreamResponse) {
    /**
     * @internal
     */
    RemoveFlowMediaStreamResponse.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(RemoveFlowMediaStreamResponse = exports.RemoveFlowMediaStreamResponse || (exports.RemoveFlowMediaStreamResponse = {}));
var RemoveFlowOutputRequest;
(function (RemoveFlowOutputRequest) {
    /**
     * @internal
     */
    RemoveFlowOutputRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(RemoveFlowOutputRequest = exports.RemoveFlowOutputRequest || (exports.RemoveFlowOutputRequest = {}));
var RemoveFlowOutputResponse;
(function (RemoveFlowOutputResponse) {
    /**
     * @internal
     */
    RemoveFlowOutputResponse.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(RemoveFlowOutputResponse = exports.RemoveFlowOutputResponse || (exports.RemoveFlowOutputResponse = {}));
var RemoveFlowSourceRequest;
(function (RemoveFlowSourceRequest) {
    /**
     * @internal
     */
    RemoveFlowSourceRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(RemoveFlowSourceRequest = exports.RemoveFlowSourceRequest || (exports.RemoveFlowSourceRequest = {}));
var RemoveFlowSourceResponse;
(function (RemoveFlowSourceResponse) {
    /**
     * @internal
     */
    RemoveFlowSourceResponse.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(RemoveFlowSourceResponse = exports.RemoveFlowSourceResponse || (exports.RemoveFlowSourceResponse = {}));
var RemoveFlowVpcInterfaceRequest;
(function (RemoveFlowVpcInterfaceRequest) {
    /**
     * @internal
     */
    RemoveFlowVpcInterfaceRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(RemoveFlowVpcInterfaceRequest = exports.RemoveFlowVpcInterfaceRequest || (exports.RemoveFlowVpcInterfaceRequest = {}));
var RemoveFlowVpcInterfaceResponse;
(function (RemoveFlowVpcInterfaceResponse) {
    /**
     * @internal
     */
    RemoveFlowVpcInterfaceResponse.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(RemoveFlowVpcInterfaceResponse = exports.RemoveFlowVpcInterfaceResponse || (exports.RemoveFlowVpcInterfaceResponse = {}));
var RevokeFlowEntitlementRequest;
(function (RevokeFlowEntitlementRequest) {
    /**
     * @internal
     */
    RevokeFlowEntitlementRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(RevokeFlowEntitlementRequest = exports.RevokeFlowEntitlementRequest || (exports.RevokeFlowEntitlementRequest = {}));
var RevokeFlowEntitlementResponse;
(function (RevokeFlowEntitlementResponse) {
    /**
     * @internal
     */
    RevokeFlowEntitlementResponse.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(RevokeFlowEntitlementResponse = exports.RevokeFlowEntitlementResponse || (exports.RevokeFlowEntitlementResponse = {}));
var StartFlowRequest;
(function (StartFlowRequest) {
    /**
     * @internal
     */
    StartFlowRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(StartFlowRequest = exports.StartFlowRequest || (exports.StartFlowRequest = {}));
var StartFlowResponse;
(function (StartFlowResponse) {
    /**
     * @internal
     */
    StartFlowResponse.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(StartFlowResponse = exports.StartFlowResponse || (exports.StartFlowResponse = {}));
var StopFlowRequest;
(function (StopFlowRequest) {
    /**
     * @internal
     */
    StopFlowRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(StopFlowRequest = exports.StopFlowRequest || (exports.StopFlowRequest = {}));
var StopFlowResponse;
(function (StopFlowResponse) {
    /**
     * @internal
     */
    StopFlowResponse.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(StopFlowResponse = exports.StopFlowResponse || (exports.StopFlowResponse = {}));
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
var UpdateFailoverConfig;
(function (UpdateFailoverConfig) {
    /**
     * @internal
     */
    UpdateFailoverConfig.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(UpdateFailoverConfig = exports.UpdateFailoverConfig || (exports.UpdateFailoverConfig = {}));
var UpdateFlowRequest;
(function (UpdateFlowRequest) {
    /**
     * @internal
     */
    UpdateFlowRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(UpdateFlowRequest = exports.UpdateFlowRequest || (exports.UpdateFlowRequest = {}));
var UpdateFlowResponse;
(function (UpdateFlowResponse) {
    /**
     * @internal
     */
    UpdateFlowResponse.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(UpdateFlowResponse = exports.UpdateFlowResponse || (exports.UpdateFlowResponse = {}));
var UpdateEncryption;
(function (UpdateEncryption) {
    /**
     * @internal
     */
    UpdateEncryption.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(UpdateEncryption = exports.UpdateEncryption || (exports.UpdateEncryption = {}));
var UpdateFlowEntitlementRequest;
(function (UpdateFlowEntitlementRequest) {
    /**
     * @internal
     */
    UpdateFlowEntitlementRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(UpdateFlowEntitlementRequest = exports.UpdateFlowEntitlementRequest || (exports.UpdateFlowEntitlementRequest = {}));
var UpdateFlowEntitlementResponse;
(function (UpdateFlowEntitlementResponse) {
    /**
     * @internal
     */
    UpdateFlowEntitlementResponse.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(UpdateFlowEntitlementResponse = exports.UpdateFlowEntitlementResponse || (exports.UpdateFlowEntitlementResponse = {}));
var UpdateFlowMediaStreamRequest;
(function (UpdateFlowMediaStreamRequest) {
    /**
     * @internal
     */
    UpdateFlowMediaStreamRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(UpdateFlowMediaStreamRequest = exports.UpdateFlowMediaStreamRequest || (exports.UpdateFlowMediaStreamRequest = {}));
var UpdateFlowMediaStreamResponse;
(function (UpdateFlowMediaStreamResponse) {
    /**
     * @internal
     */
    UpdateFlowMediaStreamResponse.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(UpdateFlowMediaStreamResponse = exports.UpdateFlowMediaStreamResponse || (exports.UpdateFlowMediaStreamResponse = {}));
var UpdateFlowOutputRequest;
(function (UpdateFlowOutputRequest) {
    /**
     * @internal
     */
    UpdateFlowOutputRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(UpdateFlowOutputRequest = exports.UpdateFlowOutputRequest || (exports.UpdateFlowOutputRequest = {}));
var UpdateFlowOutputResponse;
(function (UpdateFlowOutputResponse) {
    /**
     * @internal
     */
    UpdateFlowOutputResponse.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(UpdateFlowOutputResponse = exports.UpdateFlowOutputResponse || (exports.UpdateFlowOutputResponse = {}));
var UpdateFlowSourceRequest;
(function (UpdateFlowSourceRequest) {
    /**
     * @internal
     */
    UpdateFlowSourceRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(UpdateFlowSourceRequest = exports.UpdateFlowSourceRequest || (exports.UpdateFlowSourceRequest = {}));
var UpdateFlowSourceResponse;
(function (UpdateFlowSourceResponse) {
    /**
     * @internal
     */
    UpdateFlowSourceResponse.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(UpdateFlowSourceResponse = exports.UpdateFlowSourceResponse || (exports.UpdateFlowSourceResponse = {}));
//# sourceMappingURL=models_0.js.map