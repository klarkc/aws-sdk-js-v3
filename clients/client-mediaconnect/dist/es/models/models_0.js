import { __assign } from "tslib";
export var Colorimetry;
(function (Colorimetry) {
    Colorimetry["BT2020"] = "BT2020";
    Colorimetry["BT2100"] = "BT2100";
    Colorimetry["BT601"] = "BT601";
    Colorimetry["BT709"] = "BT709";
    Colorimetry["ST2065_1"] = "ST2065-1";
    Colorimetry["ST2065_3"] = "ST2065-3";
    Colorimetry["XYZ"] = "XYZ";
})(Colorimetry || (Colorimetry = {}));
export var Range;
(function (Range) {
    Range["FULL"] = "FULL";
    Range["FULLPROTECT"] = "FULLPROTECT";
    Range["NARROW"] = "NARROW";
})(Range || (Range = {}));
export var ScanMode;
(function (ScanMode) {
    ScanMode["interlace"] = "interlace";
    ScanMode["progressive"] = "progressive";
    ScanMode["progressive_segmented_frame"] = "progressive-segmented-frame";
})(ScanMode || (ScanMode = {}));
export var Tcs;
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
})(Tcs || (Tcs = {}));
export var FmtpRequest;
(function (FmtpRequest) {
    /**
     * @internal
     */
    FmtpRequest.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(FmtpRequest || (FmtpRequest = {}));
export var MediaStreamAttributesRequest;
(function (MediaStreamAttributesRequest) {
    /**
     * @internal
     */
    MediaStreamAttributesRequest.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(MediaStreamAttributesRequest || (MediaStreamAttributesRequest = {}));
export var MediaStreamType;
(function (MediaStreamType) {
    MediaStreamType["ancillary_data"] = "ancillary-data";
    MediaStreamType["audio"] = "audio";
    MediaStreamType["video"] = "video";
})(MediaStreamType || (MediaStreamType = {}));
export var AddMediaStreamRequest;
(function (AddMediaStreamRequest) {
    /**
     * @internal
     */
    AddMediaStreamRequest.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(AddMediaStreamRequest || (AddMediaStreamRequest = {}));
export var Algorithm;
(function (Algorithm) {
    Algorithm["aes128"] = "aes128";
    Algorithm["aes192"] = "aes192";
    Algorithm["aes256"] = "aes256";
})(Algorithm || (Algorithm = {}));
export var KeyType;
(function (KeyType) {
    KeyType["speke"] = "speke";
    KeyType["srt_password"] = "srt-password";
    KeyType["static_key"] = "static-key";
})(KeyType || (KeyType = {}));
export var Encryption;
(function (Encryption) {
    /**
     * @internal
     */
    Encryption.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(Encryption || (Encryption = {}));
export var InterfaceRequest;
(function (InterfaceRequest) {
    /**
     * @internal
     */
    InterfaceRequest.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(InterfaceRequest || (InterfaceRequest = {}));
export var DestinationConfigurationRequest;
(function (DestinationConfigurationRequest) {
    /**
     * @internal
     */
    DestinationConfigurationRequest.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(DestinationConfigurationRequest || (DestinationConfigurationRequest = {}));
export var EncodingName;
(function (EncodingName) {
    EncodingName["jxsv"] = "jxsv";
    EncodingName["pcm"] = "pcm";
    EncodingName["raw"] = "raw";
    EncodingName["smpte291"] = "smpte291";
})(EncodingName || (EncodingName = {}));
export var EncoderProfile;
(function (EncoderProfile) {
    EncoderProfile["high"] = "high";
    EncoderProfile["main"] = "main";
})(EncoderProfile || (EncoderProfile = {}));
export var EncodingParametersRequest;
(function (EncodingParametersRequest) {
    /**
     * @internal
     */
    EncodingParametersRequest.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(EncodingParametersRequest || (EncodingParametersRequest = {}));
export var MediaStreamOutputConfigurationRequest;
(function (MediaStreamOutputConfigurationRequest) {
    /**
     * @internal
     */
    MediaStreamOutputConfigurationRequest.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(MediaStreamOutputConfigurationRequest || (MediaStreamOutputConfigurationRequest = {}));
export var Protocol;
(function (Protocol) {
    Protocol["cdi"] = "cdi";
    Protocol["rist"] = "rist";
    Protocol["rtp"] = "rtp";
    Protocol["rtp_fec"] = "rtp-fec";
    Protocol["srt_listener"] = "srt-listener";
    Protocol["st2110_jpegxs"] = "st2110-jpegxs";
    Protocol["zixi_pull"] = "zixi-pull";
    Protocol["zixi_push"] = "zixi-push";
})(Protocol || (Protocol = {}));
export var VpcInterfaceAttachment;
(function (VpcInterfaceAttachment) {
    /**
     * @internal
     */
    VpcInterfaceAttachment.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(VpcInterfaceAttachment || (VpcInterfaceAttachment = {}));
export var AddOutputRequest;
(function (AddOutputRequest) {
    /**
     * @internal
     */
    AddOutputRequest.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(AddOutputRequest || (AddOutputRequest = {}));
export var Interface;
(function (Interface) {
    /**
     * @internal
     */
    Interface.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(Interface || (Interface = {}));
export var DestinationConfiguration;
(function (DestinationConfiguration) {
    /**
     * @internal
     */
    DestinationConfiguration.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(DestinationConfiguration || (DestinationConfiguration = {}));
export var EntitlementStatus;
(function (EntitlementStatus) {
    EntitlementStatus["DISABLED"] = "DISABLED";
    EntitlementStatus["ENABLED"] = "ENABLED";
})(EntitlementStatus || (EntitlementStatus = {}));
export var Entitlement;
(function (Entitlement) {
    /**
     * @internal
     */
    Entitlement.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(Entitlement || (Entitlement = {}));
export var GrantEntitlementRequest;
(function (GrantEntitlementRequest) {
    /**
     * @internal
     */
    GrantEntitlementRequest.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(GrantEntitlementRequest || (GrantEntitlementRequest = {}));
export var InputConfiguration;
(function (InputConfiguration) {
    /**
     * @internal
     */
    InputConfiguration.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(InputConfiguration || (InputConfiguration = {}));
export var InputConfigurationRequest;
(function (InputConfigurationRequest) {
    /**
     * @internal
     */
    InputConfigurationRequest.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(InputConfigurationRequest || (InputConfigurationRequest = {}));
export var ListedEntitlement;
(function (ListedEntitlement) {
    /**
     * @internal
     */
    ListedEntitlement.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(ListedEntitlement || (ListedEntitlement = {}));
export var SourceType;
(function (SourceType) {
    SourceType["ENTITLED"] = "ENTITLED";
    SourceType["OWNED"] = "OWNED";
})(SourceType || (SourceType = {}));
export var Status;
(function (Status) {
    Status["ACTIVE"] = "ACTIVE";
    Status["DELETING"] = "DELETING";
    Status["ERROR"] = "ERROR";
    Status["STANDBY"] = "STANDBY";
    Status["STARTING"] = "STARTING";
    Status["STOPPING"] = "STOPPING";
    Status["UPDATING"] = "UPDATING";
})(Status || (Status = {}));
export var ListedFlow;
(function (ListedFlow) {
    /**
     * @internal
     */
    ListedFlow.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(ListedFlow || (ListedFlow = {}));
export var Fmtp;
(function (Fmtp) {
    /**
     * @internal
     */
    Fmtp.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(Fmtp || (Fmtp = {}));
export var MediaStreamAttributes;
(function (MediaStreamAttributes) {
    /**
     * @internal
     */
    MediaStreamAttributes.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(MediaStreamAttributes || (MediaStreamAttributes = {}));
export var MediaStream;
(function (MediaStream) {
    /**
     * @internal
     */
    MediaStream.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(MediaStream || (MediaStream = {}));
export var EncodingParameters;
(function (EncodingParameters) {
    /**
     * @internal
     */
    EncodingParameters.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(EncodingParameters || (EncodingParameters = {}));
export var MediaStreamOutputConfiguration;
(function (MediaStreamOutputConfiguration) {
    /**
     * @internal
     */
    MediaStreamOutputConfiguration.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(MediaStreamOutputConfiguration || (MediaStreamOutputConfiguration = {}));
export var MediaStreamSourceConfiguration;
(function (MediaStreamSourceConfiguration) {
    /**
     * @internal
     */
    MediaStreamSourceConfiguration.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(MediaStreamSourceConfiguration || (MediaStreamSourceConfiguration = {}));
export var MediaStreamSourceConfigurationRequest;
(function (MediaStreamSourceConfigurationRequest) {
    /**
     * @internal
     */
    MediaStreamSourceConfigurationRequest.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(MediaStreamSourceConfigurationRequest || (MediaStreamSourceConfigurationRequest = {}));
export var DurationUnits;
(function (DurationUnits) {
    DurationUnits["MONTHS"] = "MONTHS";
})(DurationUnits || (DurationUnits = {}));
export var PriceUnits;
(function (PriceUnits) {
    PriceUnits["HOURLY"] = "HOURLY";
})(PriceUnits || (PriceUnits = {}));
export var ResourceType;
(function (ResourceType) {
    ResourceType["Mbps_Outbound_Bandwidth"] = "Mbps_Outbound_Bandwidth";
})(ResourceType || (ResourceType = {}));
export var ResourceSpecification;
(function (ResourceSpecification) {
    /**
     * @internal
     */
    ResourceSpecification.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(ResourceSpecification || (ResourceSpecification = {}));
export var Offering;
(function (Offering) {
    /**
     * @internal
     */
    Offering.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(Offering || (Offering = {}));
export var Transport;
(function (Transport) {
    /**
     * @internal
     */
    Transport.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(Transport || (Transport = {}));
export var Output;
(function (Output) {
    /**
     * @internal
     */
    Output.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(Output || (Output = {}));
export var ReservationState;
(function (ReservationState) {
    ReservationState["ACTIVE"] = "ACTIVE";
    ReservationState["CANCELED"] = "CANCELED";
    ReservationState["EXPIRED"] = "EXPIRED";
    ReservationState["PROCESSING"] = "PROCESSING";
})(ReservationState || (ReservationState = {}));
export var Reservation;
(function (Reservation) {
    /**
     * @internal
     */
    Reservation.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(Reservation || (Reservation = {}));
export var SetSourceRequest;
(function (SetSourceRequest) {
    /**
     * @internal
     */
    SetSourceRequest.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(SetSourceRequest || (SetSourceRequest = {}));
export var Source;
(function (Source) {
    /**
     * @internal
     */
    Source.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(Source || (Source = {}));
export var NetworkInterfaceType;
(function (NetworkInterfaceType) {
    NetworkInterfaceType["efa"] = "efa";
    NetworkInterfaceType["ena"] = "ena";
})(NetworkInterfaceType || (NetworkInterfaceType = {}));
export var VpcInterface;
(function (VpcInterface) {
    /**
     * @internal
     */
    VpcInterface.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(VpcInterface || (VpcInterface = {}));
export var VpcInterfaceRequest;
(function (VpcInterfaceRequest) {
    /**
     * @internal
     */
    VpcInterfaceRequest.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(VpcInterfaceRequest || (VpcInterfaceRequest = {}));
export var AddFlowMediaStreamsRequest;
(function (AddFlowMediaStreamsRequest) {
    /**
     * @internal
     */
    AddFlowMediaStreamsRequest.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(AddFlowMediaStreamsRequest || (AddFlowMediaStreamsRequest = {}));
export var AddFlowMediaStreamsResponse;
(function (AddFlowMediaStreamsResponse) {
    /**
     * @internal
     */
    AddFlowMediaStreamsResponse.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(AddFlowMediaStreamsResponse || (AddFlowMediaStreamsResponse = {}));
export var BadRequestException;
(function (BadRequestException) {
    /**
     * @internal
     */
    BadRequestException.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(BadRequestException || (BadRequestException = {}));
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
export var ServiceUnavailableException;
(function (ServiceUnavailableException) {
    /**
     * @internal
     */
    ServiceUnavailableException.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(ServiceUnavailableException || (ServiceUnavailableException = {}));
export var TooManyRequestsException;
(function (TooManyRequestsException) {
    /**
     * @internal
     */
    TooManyRequestsException.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(TooManyRequestsException || (TooManyRequestsException = {}));
export var AddFlowOutputs420Exception;
(function (AddFlowOutputs420Exception) {
    /**
     * @internal
     */
    AddFlowOutputs420Exception.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(AddFlowOutputs420Exception || (AddFlowOutputs420Exception = {}));
export var AddFlowOutputsRequest;
(function (AddFlowOutputsRequest) {
    /**
     * @internal
     */
    AddFlowOutputsRequest.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(AddFlowOutputsRequest || (AddFlowOutputsRequest = {}));
export var AddFlowOutputsResponse;
(function (AddFlowOutputsResponse) {
    /**
     * @internal
     */
    AddFlowOutputsResponse.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(AddFlowOutputsResponse || (AddFlowOutputsResponse = {}));
export var AddFlowSourcesRequest;
(function (AddFlowSourcesRequest) {
    /**
     * @internal
     */
    AddFlowSourcesRequest.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(AddFlowSourcesRequest || (AddFlowSourcesRequest = {}));
export var AddFlowSourcesResponse;
(function (AddFlowSourcesResponse) {
    /**
     * @internal
     */
    AddFlowSourcesResponse.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(AddFlowSourcesResponse || (AddFlowSourcesResponse = {}));
export var AddFlowVpcInterfacesRequest;
(function (AddFlowVpcInterfacesRequest) {
    /**
     * @internal
     */
    AddFlowVpcInterfacesRequest.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(AddFlowVpcInterfacesRequest || (AddFlowVpcInterfacesRequest = {}));
export var AddFlowVpcInterfacesResponse;
(function (AddFlowVpcInterfacesResponse) {
    /**
     * @internal
     */
    AddFlowVpcInterfacesResponse.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(AddFlowVpcInterfacesResponse || (AddFlowVpcInterfacesResponse = {}));
export var CreateFlow420Exception;
(function (CreateFlow420Exception) {
    /**
     * @internal
     */
    CreateFlow420Exception.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(CreateFlow420Exception || (CreateFlow420Exception = {}));
export var State;
(function (State) {
    State["DISABLED"] = "DISABLED";
    State["ENABLED"] = "ENABLED";
})(State || (State = {}));
export var FailoverConfig;
(function (FailoverConfig) {
    /**
     * @internal
     */
    FailoverConfig.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(FailoverConfig || (FailoverConfig = {}));
export var CreateFlowRequest;
(function (CreateFlowRequest) {
    /**
     * @internal
     */
    CreateFlowRequest.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(CreateFlowRequest || (CreateFlowRequest = {}));
export var Flow;
(function (Flow) {
    /**
     * @internal
     */
    Flow.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(Flow || (Flow = {}));
export var CreateFlowResponse;
(function (CreateFlowResponse) {
    /**
     * @internal
     */
    CreateFlowResponse.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(CreateFlowResponse || (CreateFlowResponse = {}));
export var DeleteFlowRequest;
(function (DeleteFlowRequest) {
    /**
     * @internal
     */
    DeleteFlowRequest.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(DeleteFlowRequest || (DeleteFlowRequest = {}));
export var DeleteFlowResponse;
(function (DeleteFlowResponse) {
    /**
     * @internal
     */
    DeleteFlowResponse.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(DeleteFlowResponse || (DeleteFlowResponse = {}));
export var DescribeFlowRequest;
(function (DescribeFlowRequest) {
    /**
     * @internal
     */
    DescribeFlowRequest.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(DescribeFlowRequest || (DescribeFlowRequest = {}));
export var Messages;
(function (Messages) {
    /**
     * @internal
     */
    Messages.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(Messages || (Messages = {}));
export var DescribeFlowResponse;
(function (DescribeFlowResponse) {
    /**
     * @internal
     */
    DescribeFlowResponse.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(DescribeFlowResponse || (DescribeFlowResponse = {}));
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
export var GrantFlowEntitlements420Exception;
(function (GrantFlowEntitlements420Exception) {
    /**
     * @internal
     */
    GrantFlowEntitlements420Exception.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(GrantFlowEntitlements420Exception || (GrantFlowEntitlements420Exception = {}));
export var GrantFlowEntitlementsRequest;
(function (GrantFlowEntitlementsRequest) {
    /**
     * @internal
     */
    GrantFlowEntitlementsRequest.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(GrantFlowEntitlementsRequest || (GrantFlowEntitlementsRequest = {}));
export var GrantFlowEntitlementsResponse;
(function (GrantFlowEntitlementsResponse) {
    /**
     * @internal
     */
    GrantFlowEntitlementsResponse.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(GrantFlowEntitlementsResponse || (GrantFlowEntitlementsResponse = {}));
export var ListEntitlementsRequest;
(function (ListEntitlementsRequest) {
    /**
     * @internal
     */
    ListEntitlementsRequest.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(ListEntitlementsRequest || (ListEntitlementsRequest = {}));
export var ListEntitlementsResponse;
(function (ListEntitlementsResponse) {
    /**
     * @internal
     */
    ListEntitlementsResponse.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(ListEntitlementsResponse || (ListEntitlementsResponse = {}));
export var ListFlowsRequest;
(function (ListFlowsRequest) {
    /**
     * @internal
     */
    ListFlowsRequest.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(ListFlowsRequest || (ListFlowsRequest = {}));
export var ListFlowsResponse;
(function (ListFlowsResponse) {
    /**
     * @internal
     */
    ListFlowsResponse.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(ListFlowsResponse || (ListFlowsResponse = {}));
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
export var RemoveFlowMediaStreamRequest;
(function (RemoveFlowMediaStreamRequest) {
    /**
     * @internal
     */
    RemoveFlowMediaStreamRequest.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(RemoveFlowMediaStreamRequest || (RemoveFlowMediaStreamRequest = {}));
export var RemoveFlowMediaStreamResponse;
(function (RemoveFlowMediaStreamResponse) {
    /**
     * @internal
     */
    RemoveFlowMediaStreamResponse.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(RemoveFlowMediaStreamResponse || (RemoveFlowMediaStreamResponse = {}));
export var RemoveFlowOutputRequest;
(function (RemoveFlowOutputRequest) {
    /**
     * @internal
     */
    RemoveFlowOutputRequest.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(RemoveFlowOutputRequest || (RemoveFlowOutputRequest = {}));
export var RemoveFlowOutputResponse;
(function (RemoveFlowOutputResponse) {
    /**
     * @internal
     */
    RemoveFlowOutputResponse.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(RemoveFlowOutputResponse || (RemoveFlowOutputResponse = {}));
export var RemoveFlowSourceRequest;
(function (RemoveFlowSourceRequest) {
    /**
     * @internal
     */
    RemoveFlowSourceRequest.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(RemoveFlowSourceRequest || (RemoveFlowSourceRequest = {}));
export var RemoveFlowSourceResponse;
(function (RemoveFlowSourceResponse) {
    /**
     * @internal
     */
    RemoveFlowSourceResponse.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(RemoveFlowSourceResponse || (RemoveFlowSourceResponse = {}));
export var RemoveFlowVpcInterfaceRequest;
(function (RemoveFlowVpcInterfaceRequest) {
    /**
     * @internal
     */
    RemoveFlowVpcInterfaceRequest.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(RemoveFlowVpcInterfaceRequest || (RemoveFlowVpcInterfaceRequest = {}));
export var RemoveFlowVpcInterfaceResponse;
(function (RemoveFlowVpcInterfaceResponse) {
    /**
     * @internal
     */
    RemoveFlowVpcInterfaceResponse.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(RemoveFlowVpcInterfaceResponse || (RemoveFlowVpcInterfaceResponse = {}));
export var RevokeFlowEntitlementRequest;
(function (RevokeFlowEntitlementRequest) {
    /**
     * @internal
     */
    RevokeFlowEntitlementRequest.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(RevokeFlowEntitlementRequest || (RevokeFlowEntitlementRequest = {}));
export var RevokeFlowEntitlementResponse;
(function (RevokeFlowEntitlementResponse) {
    /**
     * @internal
     */
    RevokeFlowEntitlementResponse.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(RevokeFlowEntitlementResponse || (RevokeFlowEntitlementResponse = {}));
export var StartFlowRequest;
(function (StartFlowRequest) {
    /**
     * @internal
     */
    StartFlowRequest.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(StartFlowRequest || (StartFlowRequest = {}));
export var StartFlowResponse;
(function (StartFlowResponse) {
    /**
     * @internal
     */
    StartFlowResponse.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(StartFlowResponse || (StartFlowResponse = {}));
export var StopFlowRequest;
(function (StopFlowRequest) {
    /**
     * @internal
     */
    StopFlowRequest.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(StopFlowRequest || (StopFlowRequest = {}));
export var StopFlowResponse;
(function (StopFlowResponse) {
    /**
     * @internal
     */
    StopFlowResponse.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(StopFlowResponse || (StopFlowResponse = {}));
export var TagResourceRequest;
(function (TagResourceRequest) {
    /**
     * @internal
     */
    TagResourceRequest.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(TagResourceRequest || (TagResourceRequest = {}));
export var UntagResourceRequest;
(function (UntagResourceRequest) {
    /**
     * @internal
     */
    UntagResourceRequest.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(UntagResourceRequest || (UntagResourceRequest = {}));
export var UpdateFailoverConfig;
(function (UpdateFailoverConfig) {
    /**
     * @internal
     */
    UpdateFailoverConfig.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(UpdateFailoverConfig || (UpdateFailoverConfig = {}));
export var UpdateFlowRequest;
(function (UpdateFlowRequest) {
    /**
     * @internal
     */
    UpdateFlowRequest.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(UpdateFlowRequest || (UpdateFlowRequest = {}));
export var UpdateFlowResponse;
(function (UpdateFlowResponse) {
    /**
     * @internal
     */
    UpdateFlowResponse.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(UpdateFlowResponse || (UpdateFlowResponse = {}));
export var UpdateEncryption;
(function (UpdateEncryption) {
    /**
     * @internal
     */
    UpdateEncryption.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(UpdateEncryption || (UpdateEncryption = {}));
export var UpdateFlowEntitlementRequest;
(function (UpdateFlowEntitlementRequest) {
    /**
     * @internal
     */
    UpdateFlowEntitlementRequest.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(UpdateFlowEntitlementRequest || (UpdateFlowEntitlementRequest = {}));
export var UpdateFlowEntitlementResponse;
(function (UpdateFlowEntitlementResponse) {
    /**
     * @internal
     */
    UpdateFlowEntitlementResponse.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(UpdateFlowEntitlementResponse || (UpdateFlowEntitlementResponse = {}));
export var UpdateFlowMediaStreamRequest;
(function (UpdateFlowMediaStreamRequest) {
    /**
     * @internal
     */
    UpdateFlowMediaStreamRequest.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(UpdateFlowMediaStreamRequest || (UpdateFlowMediaStreamRequest = {}));
export var UpdateFlowMediaStreamResponse;
(function (UpdateFlowMediaStreamResponse) {
    /**
     * @internal
     */
    UpdateFlowMediaStreamResponse.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(UpdateFlowMediaStreamResponse || (UpdateFlowMediaStreamResponse = {}));
export var UpdateFlowOutputRequest;
(function (UpdateFlowOutputRequest) {
    /**
     * @internal
     */
    UpdateFlowOutputRequest.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(UpdateFlowOutputRequest || (UpdateFlowOutputRequest = {}));
export var UpdateFlowOutputResponse;
(function (UpdateFlowOutputResponse) {
    /**
     * @internal
     */
    UpdateFlowOutputResponse.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(UpdateFlowOutputResponse || (UpdateFlowOutputResponse = {}));
export var UpdateFlowSourceRequest;
(function (UpdateFlowSourceRequest) {
    /**
     * @internal
     */
    UpdateFlowSourceRequest.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(UpdateFlowSourceRequest || (UpdateFlowSourceRequest = {}));
export var UpdateFlowSourceResponse;
(function (UpdateFlowSourceResponse) {
    /**
     * @internal
     */
    UpdateFlowSourceResponse.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(UpdateFlowSourceResponse || (UpdateFlowSourceResponse = {}));
//# sourceMappingURL=models_0.js.map