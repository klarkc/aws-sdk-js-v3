import { __assign } from "tslib";
import { SENSITIVE_STRING } from "@aws-sdk/smithy-client";
export var AccessDeniedException;
(function (AccessDeniedException) {
    /**
     * @internal
     */
    AccessDeniedException.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(AccessDeniedException || (AccessDeniedException = {}));
export var AssociateCustomerGatewayRequest;
(function (AssociateCustomerGatewayRequest) {
    /**
     * @internal
     */
    AssociateCustomerGatewayRequest.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(AssociateCustomerGatewayRequest || (AssociateCustomerGatewayRequest = {}));
export var CustomerGatewayAssociationState;
(function (CustomerGatewayAssociationState) {
    CustomerGatewayAssociationState["available"] = "AVAILABLE";
    CustomerGatewayAssociationState["deleted"] = "DELETED";
    CustomerGatewayAssociationState["deleting"] = "DELETING";
    CustomerGatewayAssociationState["pending"] = "PENDING";
})(CustomerGatewayAssociationState || (CustomerGatewayAssociationState = {}));
export var CustomerGatewayAssociation;
(function (CustomerGatewayAssociation) {
    /**
     * @internal
     */
    CustomerGatewayAssociation.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(CustomerGatewayAssociation || (CustomerGatewayAssociation = {}));
export var AssociateCustomerGatewayResponse;
(function (AssociateCustomerGatewayResponse) {
    /**
     * @internal
     */
    AssociateCustomerGatewayResponse.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(AssociateCustomerGatewayResponse || (AssociateCustomerGatewayResponse = {}));
export var ConflictException;
(function (ConflictException) {
    /**
     * @internal
     */
    ConflictException.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(ConflictException || (ConflictException = {}));
export var InternalServerException;
(function (InternalServerException) {
    /**
     * @internal
     */
    InternalServerException.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(InternalServerException || (InternalServerException = {}));
export var ResourceNotFoundException;
(function (ResourceNotFoundException) {
    /**
     * @internal
     */
    ResourceNotFoundException.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(ResourceNotFoundException || (ResourceNotFoundException = {}));
export var ServiceQuotaExceededException;
(function (ServiceQuotaExceededException) {
    /**
     * @internal
     */
    ServiceQuotaExceededException.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(ServiceQuotaExceededException || (ServiceQuotaExceededException = {}));
export var ThrottlingException;
(function (ThrottlingException) {
    /**
     * @internal
     */
    ThrottlingException.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(ThrottlingException || (ThrottlingException = {}));
export var ValidationExceptionField;
(function (ValidationExceptionField) {
    /**
     * @internal
     */
    ValidationExceptionField.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(ValidationExceptionField || (ValidationExceptionField = {}));
export var ValidationExceptionReason;
(function (ValidationExceptionReason) {
    ValidationExceptionReason["CANNOT_PARSE"] = "CannotParse";
    ValidationExceptionReason["FIELD_VALIDATION_FAILED"] = "FieldValidationFailed";
    ValidationExceptionReason["OTHER"] = "Other";
    ValidationExceptionReason["UNKNOWN_OPERATION"] = "UnknownOperation";
})(ValidationExceptionReason || (ValidationExceptionReason = {}));
export var ValidationException;
(function (ValidationException) {
    /**
     * @internal
     */
    ValidationException.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(ValidationException || (ValidationException = {}));
export var AssociateLinkRequest;
(function (AssociateLinkRequest) {
    /**
     * @internal
     */
    AssociateLinkRequest.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(AssociateLinkRequest || (AssociateLinkRequest = {}));
export var LinkAssociationState;
(function (LinkAssociationState) {
    LinkAssociationState["available"] = "AVAILABLE";
    LinkAssociationState["deleted"] = "DELETED";
    LinkAssociationState["deleting"] = "DELETING";
    LinkAssociationState["pending"] = "PENDING";
})(LinkAssociationState || (LinkAssociationState = {}));
export var LinkAssociation;
(function (LinkAssociation) {
    /**
     * @internal
     */
    LinkAssociation.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(LinkAssociation || (LinkAssociation = {}));
export var AssociateLinkResponse;
(function (AssociateLinkResponse) {
    /**
     * @internal
     */
    AssociateLinkResponse.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(AssociateLinkResponse || (AssociateLinkResponse = {}));
export var AssociateTransitGatewayConnectPeerRequest;
(function (AssociateTransitGatewayConnectPeerRequest) {
    /**
     * @internal
     */
    AssociateTransitGatewayConnectPeerRequest.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(AssociateTransitGatewayConnectPeerRequest || (AssociateTransitGatewayConnectPeerRequest = {}));
export var TransitGatewayConnectPeerAssociationState;
(function (TransitGatewayConnectPeerAssociationState) {
    TransitGatewayConnectPeerAssociationState["available"] = "AVAILABLE";
    TransitGatewayConnectPeerAssociationState["deleted"] = "DELETED";
    TransitGatewayConnectPeerAssociationState["deleting"] = "DELETING";
    TransitGatewayConnectPeerAssociationState["pending"] = "PENDING";
})(TransitGatewayConnectPeerAssociationState || (TransitGatewayConnectPeerAssociationState = {}));
export var TransitGatewayConnectPeerAssociation;
(function (TransitGatewayConnectPeerAssociation) {
    /**
     * @internal
     */
    TransitGatewayConnectPeerAssociation.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(TransitGatewayConnectPeerAssociation || (TransitGatewayConnectPeerAssociation = {}));
export var AssociateTransitGatewayConnectPeerResponse;
(function (AssociateTransitGatewayConnectPeerResponse) {
    /**
     * @internal
     */
    AssociateTransitGatewayConnectPeerResponse.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(AssociateTransitGatewayConnectPeerResponse || (AssociateTransitGatewayConnectPeerResponse = {}));
export var AWSLocation;
(function (AWSLocation) {
    /**
     * @internal
     */
    AWSLocation.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(AWSLocation || (AWSLocation = {}));
export var Bandwidth;
(function (Bandwidth) {
    /**
     * @internal
     */
    Bandwidth.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(Bandwidth || (Bandwidth = {}));
export var ConnectionState;
(function (ConnectionState) {
    ConnectionState["available"] = "AVAILABLE";
    ConnectionState["deleting"] = "DELETING";
    ConnectionState["pending"] = "PENDING";
    ConnectionState["updating"] = "UPDATING";
})(ConnectionState || (ConnectionState = {}));
export var Tag;
(function (Tag) {
    /**
     * @internal
     */
    Tag.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(Tag || (Tag = {}));
export var Connection;
(function (Connection) {
    /**
     * @internal
     */
    Connection.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(Connection || (Connection = {}));
export var CreateConnectionRequest;
(function (CreateConnectionRequest) {
    /**
     * @internal
     */
    CreateConnectionRequest.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(CreateConnectionRequest || (CreateConnectionRequest = {}));
export var CreateConnectionResponse;
(function (CreateConnectionResponse) {
    /**
     * @internal
     */
    CreateConnectionResponse.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(CreateConnectionResponse || (CreateConnectionResponse = {}));
export var Location;
(function (Location) {
    /**
     * @internal
     */
    Location.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(Location || (Location = {}));
export var CreateDeviceRequest;
(function (CreateDeviceRequest) {
    /**
     * @internal
     */
    CreateDeviceRequest.filterSensitiveLog = function (obj) { return (__assign(__assign({}, obj), (obj.Location && { Location: SENSITIVE_STRING }))); };
})(CreateDeviceRequest || (CreateDeviceRequest = {}));
export var DeviceState;
(function (DeviceState) {
    DeviceState["available"] = "AVAILABLE";
    DeviceState["deleting"] = "DELETING";
    DeviceState["pending"] = "PENDING";
    DeviceState["updating"] = "UPDATING";
})(DeviceState || (DeviceState = {}));
export var Device;
(function (Device) {
    /**
     * @internal
     */
    Device.filterSensitiveLog = function (obj) { return (__assign(__assign({}, obj), (obj.Location && { Location: SENSITIVE_STRING }))); };
})(Device || (Device = {}));
export var CreateDeviceResponse;
(function (CreateDeviceResponse) {
    /**
     * @internal
     */
    CreateDeviceResponse.filterSensitiveLog = function (obj) { return (__assign(__assign({}, obj), (obj.Device && { Device: Device.filterSensitiveLog(obj.Device) }))); };
})(CreateDeviceResponse || (CreateDeviceResponse = {}));
export var CreateGlobalNetworkRequest;
(function (CreateGlobalNetworkRequest) {
    /**
     * @internal
     */
    CreateGlobalNetworkRequest.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(CreateGlobalNetworkRequest || (CreateGlobalNetworkRequest = {}));
export var GlobalNetworkState;
(function (GlobalNetworkState) {
    GlobalNetworkState["available"] = "AVAILABLE";
    GlobalNetworkState["deleting"] = "DELETING";
    GlobalNetworkState["pending"] = "PENDING";
    GlobalNetworkState["updating"] = "UPDATING";
})(GlobalNetworkState || (GlobalNetworkState = {}));
export var GlobalNetwork;
(function (GlobalNetwork) {
    /**
     * @internal
     */
    GlobalNetwork.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(GlobalNetwork || (GlobalNetwork = {}));
export var CreateGlobalNetworkResponse;
(function (CreateGlobalNetworkResponse) {
    /**
     * @internal
     */
    CreateGlobalNetworkResponse.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(CreateGlobalNetworkResponse || (CreateGlobalNetworkResponse = {}));
export var CreateLinkRequest;
(function (CreateLinkRequest) {
    /**
     * @internal
     */
    CreateLinkRequest.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(CreateLinkRequest || (CreateLinkRequest = {}));
export var LinkState;
(function (LinkState) {
    LinkState["available"] = "AVAILABLE";
    LinkState["deleting"] = "DELETING";
    LinkState["pending"] = "PENDING";
    LinkState["updating"] = "UPDATING";
})(LinkState || (LinkState = {}));
export var Link;
(function (Link) {
    /**
     * @internal
     */
    Link.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(Link || (Link = {}));
export var CreateLinkResponse;
(function (CreateLinkResponse) {
    /**
     * @internal
     */
    CreateLinkResponse.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(CreateLinkResponse || (CreateLinkResponse = {}));
export var CreateSiteRequest;
(function (CreateSiteRequest) {
    /**
     * @internal
     */
    CreateSiteRequest.filterSensitiveLog = function (obj) { return (__assign(__assign({}, obj), (obj.Location && { Location: SENSITIVE_STRING }))); };
})(CreateSiteRequest || (CreateSiteRequest = {}));
export var SiteState;
(function (SiteState) {
    SiteState["available"] = "AVAILABLE";
    SiteState["deleting"] = "DELETING";
    SiteState["pending"] = "PENDING";
    SiteState["updating"] = "UPDATING";
})(SiteState || (SiteState = {}));
export var Site;
(function (Site) {
    /**
     * @internal
     */
    Site.filterSensitiveLog = function (obj) { return (__assign(__assign({}, obj), (obj.Location && { Location: SENSITIVE_STRING }))); };
})(Site || (Site = {}));
export var CreateSiteResponse;
(function (CreateSiteResponse) {
    /**
     * @internal
     */
    CreateSiteResponse.filterSensitiveLog = function (obj) { return (__assign(__assign({}, obj), (obj.Site && { Site: Site.filterSensitiveLog(obj.Site) }))); };
})(CreateSiteResponse || (CreateSiteResponse = {}));
export var DeleteConnectionRequest;
(function (DeleteConnectionRequest) {
    /**
     * @internal
     */
    DeleteConnectionRequest.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(DeleteConnectionRequest || (DeleteConnectionRequest = {}));
export var DeleteConnectionResponse;
(function (DeleteConnectionResponse) {
    /**
     * @internal
     */
    DeleteConnectionResponse.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(DeleteConnectionResponse || (DeleteConnectionResponse = {}));
export var DeleteDeviceRequest;
(function (DeleteDeviceRequest) {
    /**
     * @internal
     */
    DeleteDeviceRequest.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(DeleteDeviceRequest || (DeleteDeviceRequest = {}));
export var DeleteDeviceResponse;
(function (DeleteDeviceResponse) {
    /**
     * @internal
     */
    DeleteDeviceResponse.filterSensitiveLog = function (obj) { return (__assign(__assign({}, obj), (obj.Device && { Device: Device.filterSensitiveLog(obj.Device) }))); };
})(DeleteDeviceResponse || (DeleteDeviceResponse = {}));
export var DeleteGlobalNetworkRequest;
(function (DeleteGlobalNetworkRequest) {
    /**
     * @internal
     */
    DeleteGlobalNetworkRequest.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(DeleteGlobalNetworkRequest || (DeleteGlobalNetworkRequest = {}));
export var DeleteGlobalNetworkResponse;
(function (DeleteGlobalNetworkResponse) {
    /**
     * @internal
     */
    DeleteGlobalNetworkResponse.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(DeleteGlobalNetworkResponse || (DeleteGlobalNetworkResponse = {}));
export var DeleteLinkRequest;
(function (DeleteLinkRequest) {
    /**
     * @internal
     */
    DeleteLinkRequest.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(DeleteLinkRequest || (DeleteLinkRequest = {}));
export var DeleteLinkResponse;
(function (DeleteLinkResponse) {
    /**
     * @internal
     */
    DeleteLinkResponse.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(DeleteLinkResponse || (DeleteLinkResponse = {}));
export var DeleteSiteRequest;
(function (DeleteSiteRequest) {
    /**
     * @internal
     */
    DeleteSiteRequest.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(DeleteSiteRequest || (DeleteSiteRequest = {}));
export var DeleteSiteResponse;
(function (DeleteSiteResponse) {
    /**
     * @internal
     */
    DeleteSiteResponse.filterSensitiveLog = function (obj) { return (__assign(__assign({}, obj), (obj.Site && { Site: Site.filterSensitiveLog(obj.Site) }))); };
})(DeleteSiteResponse || (DeleteSiteResponse = {}));
export var DeregisterTransitGatewayRequest;
(function (DeregisterTransitGatewayRequest) {
    /**
     * @internal
     */
    DeregisterTransitGatewayRequest.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(DeregisterTransitGatewayRequest || (DeregisterTransitGatewayRequest = {}));
export var TransitGatewayRegistrationState;
(function (TransitGatewayRegistrationState) {
    TransitGatewayRegistrationState["available"] = "AVAILABLE";
    TransitGatewayRegistrationState["deleted"] = "DELETED";
    TransitGatewayRegistrationState["deleting"] = "DELETING";
    TransitGatewayRegistrationState["failed"] = "FAILED";
    TransitGatewayRegistrationState["pending"] = "PENDING";
})(TransitGatewayRegistrationState || (TransitGatewayRegistrationState = {}));
export var TransitGatewayRegistrationStateReason;
(function (TransitGatewayRegistrationStateReason) {
    /**
     * @internal
     */
    TransitGatewayRegistrationStateReason.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(TransitGatewayRegistrationStateReason || (TransitGatewayRegistrationStateReason = {}));
export var TransitGatewayRegistration;
(function (TransitGatewayRegistration) {
    /**
     * @internal
     */
    TransitGatewayRegistration.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(TransitGatewayRegistration || (TransitGatewayRegistration = {}));
export var DeregisterTransitGatewayResponse;
(function (DeregisterTransitGatewayResponse) {
    /**
     * @internal
     */
    DeregisterTransitGatewayResponse.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(DeregisterTransitGatewayResponse || (DeregisterTransitGatewayResponse = {}));
export var DescribeGlobalNetworksRequest;
(function (DescribeGlobalNetworksRequest) {
    /**
     * @internal
     */
    DescribeGlobalNetworksRequest.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(DescribeGlobalNetworksRequest || (DescribeGlobalNetworksRequest = {}));
export var DescribeGlobalNetworksResponse;
(function (DescribeGlobalNetworksResponse) {
    /**
     * @internal
     */
    DescribeGlobalNetworksResponse.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(DescribeGlobalNetworksResponse || (DescribeGlobalNetworksResponse = {}));
export var DisassociateCustomerGatewayRequest;
(function (DisassociateCustomerGatewayRequest) {
    /**
     * @internal
     */
    DisassociateCustomerGatewayRequest.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(DisassociateCustomerGatewayRequest || (DisassociateCustomerGatewayRequest = {}));
export var DisassociateCustomerGatewayResponse;
(function (DisassociateCustomerGatewayResponse) {
    /**
     * @internal
     */
    DisassociateCustomerGatewayResponse.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(DisassociateCustomerGatewayResponse || (DisassociateCustomerGatewayResponse = {}));
export var DisassociateLinkRequest;
(function (DisassociateLinkRequest) {
    /**
     * @internal
     */
    DisassociateLinkRequest.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(DisassociateLinkRequest || (DisassociateLinkRequest = {}));
export var DisassociateLinkResponse;
(function (DisassociateLinkResponse) {
    /**
     * @internal
     */
    DisassociateLinkResponse.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(DisassociateLinkResponse || (DisassociateLinkResponse = {}));
export var DisassociateTransitGatewayConnectPeerRequest;
(function (DisassociateTransitGatewayConnectPeerRequest) {
    /**
     * @internal
     */
    DisassociateTransitGatewayConnectPeerRequest.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(DisassociateTransitGatewayConnectPeerRequest || (DisassociateTransitGatewayConnectPeerRequest = {}));
export var DisassociateTransitGatewayConnectPeerResponse;
(function (DisassociateTransitGatewayConnectPeerResponse) {
    /**
     * @internal
     */
    DisassociateTransitGatewayConnectPeerResponse.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(DisassociateTransitGatewayConnectPeerResponse || (DisassociateTransitGatewayConnectPeerResponse = {}));
export var GetConnectionsRequest;
(function (GetConnectionsRequest) {
    /**
     * @internal
     */
    GetConnectionsRequest.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(GetConnectionsRequest || (GetConnectionsRequest = {}));
export var GetConnectionsResponse;
(function (GetConnectionsResponse) {
    /**
     * @internal
     */
    GetConnectionsResponse.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(GetConnectionsResponse || (GetConnectionsResponse = {}));
export var GetCustomerGatewayAssociationsRequest;
(function (GetCustomerGatewayAssociationsRequest) {
    /**
     * @internal
     */
    GetCustomerGatewayAssociationsRequest.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(GetCustomerGatewayAssociationsRequest || (GetCustomerGatewayAssociationsRequest = {}));
export var GetCustomerGatewayAssociationsResponse;
(function (GetCustomerGatewayAssociationsResponse) {
    /**
     * @internal
     */
    GetCustomerGatewayAssociationsResponse.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(GetCustomerGatewayAssociationsResponse || (GetCustomerGatewayAssociationsResponse = {}));
export var GetDevicesRequest;
(function (GetDevicesRequest) {
    /**
     * @internal
     */
    GetDevicesRequest.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(GetDevicesRequest || (GetDevicesRequest = {}));
export var GetDevicesResponse;
(function (GetDevicesResponse) {
    /**
     * @internal
     */
    GetDevicesResponse.filterSensitiveLog = function (obj) { return (__assign(__assign({}, obj), (obj.Devices && { Devices: obj.Devices.map(function (item) { return Device.filterSensitiveLog(item); }) }))); };
})(GetDevicesResponse || (GetDevicesResponse = {}));
export var GetLinkAssociationsRequest;
(function (GetLinkAssociationsRequest) {
    /**
     * @internal
     */
    GetLinkAssociationsRequest.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(GetLinkAssociationsRequest || (GetLinkAssociationsRequest = {}));
export var GetLinkAssociationsResponse;
(function (GetLinkAssociationsResponse) {
    /**
     * @internal
     */
    GetLinkAssociationsResponse.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(GetLinkAssociationsResponse || (GetLinkAssociationsResponse = {}));
export var GetLinksRequest;
(function (GetLinksRequest) {
    /**
     * @internal
     */
    GetLinksRequest.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(GetLinksRequest || (GetLinksRequest = {}));
export var GetLinksResponse;
(function (GetLinksResponse) {
    /**
     * @internal
     */
    GetLinksResponse.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(GetLinksResponse || (GetLinksResponse = {}));
export var GetSitesRequest;
(function (GetSitesRequest) {
    /**
     * @internal
     */
    GetSitesRequest.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(GetSitesRequest || (GetSitesRequest = {}));
export var GetSitesResponse;
(function (GetSitesResponse) {
    /**
     * @internal
     */
    GetSitesResponse.filterSensitiveLog = function (obj) { return (__assign(__assign({}, obj), (obj.Sites && { Sites: obj.Sites.map(function (item) { return Site.filterSensitiveLog(item); }) }))); };
})(GetSitesResponse || (GetSitesResponse = {}));
export var GetTransitGatewayConnectPeerAssociationsRequest;
(function (GetTransitGatewayConnectPeerAssociationsRequest) {
    /**
     * @internal
     */
    GetTransitGatewayConnectPeerAssociationsRequest.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(GetTransitGatewayConnectPeerAssociationsRequest || (GetTransitGatewayConnectPeerAssociationsRequest = {}));
export var GetTransitGatewayConnectPeerAssociationsResponse;
(function (GetTransitGatewayConnectPeerAssociationsResponse) {
    /**
     * @internal
     */
    GetTransitGatewayConnectPeerAssociationsResponse.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(GetTransitGatewayConnectPeerAssociationsResponse || (GetTransitGatewayConnectPeerAssociationsResponse = {}));
export var GetTransitGatewayRegistrationsRequest;
(function (GetTransitGatewayRegistrationsRequest) {
    /**
     * @internal
     */
    GetTransitGatewayRegistrationsRequest.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(GetTransitGatewayRegistrationsRequest || (GetTransitGatewayRegistrationsRequest = {}));
export var GetTransitGatewayRegistrationsResponse;
(function (GetTransitGatewayRegistrationsResponse) {
    /**
     * @internal
     */
    GetTransitGatewayRegistrationsResponse.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(GetTransitGatewayRegistrationsResponse || (GetTransitGatewayRegistrationsResponse = {}));
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
export var RegisterTransitGatewayRequest;
(function (RegisterTransitGatewayRequest) {
    /**
     * @internal
     */
    RegisterTransitGatewayRequest.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(RegisterTransitGatewayRequest || (RegisterTransitGatewayRequest = {}));
export var RegisterTransitGatewayResponse;
(function (RegisterTransitGatewayResponse) {
    /**
     * @internal
     */
    RegisterTransitGatewayResponse.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(RegisterTransitGatewayResponse || (RegisterTransitGatewayResponse = {}));
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
export var UpdateConnectionRequest;
(function (UpdateConnectionRequest) {
    /**
     * @internal
     */
    UpdateConnectionRequest.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(UpdateConnectionRequest || (UpdateConnectionRequest = {}));
export var UpdateConnectionResponse;
(function (UpdateConnectionResponse) {
    /**
     * @internal
     */
    UpdateConnectionResponse.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(UpdateConnectionResponse || (UpdateConnectionResponse = {}));
export var UpdateDeviceRequest;
(function (UpdateDeviceRequest) {
    /**
     * @internal
     */
    UpdateDeviceRequest.filterSensitiveLog = function (obj) { return (__assign(__assign({}, obj), (obj.Location && { Location: SENSITIVE_STRING }))); };
})(UpdateDeviceRequest || (UpdateDeviceRequest = {}));
export var UpdateDeviceResponse;
(function (UpdateDeviceResponse) {
    /**
     * @internal
     */
    UpdateDeviceResponse.filterSensitiveLog = function (obj) { return (__assign(__assign({}, obj), (obj.Device && { Device: Device.filterSensitiveLog(obj.Device) }))); };
})(UpdateDeviceResponse || (UpdateDeviceResponse = {}));
export var UpdateGlobalNetworkRequest;
(function (UpdateGlobalNetworkRequest) {
    /**
     * @internal
     */
    UpdateGlobalNetworkRequest.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(UpdateGlobalNetworkRequest || (UpdateGlobalNetworkRequest = {}));
export var UpdateGlobalNetworkResponse;
(function (UpdateGlobalNetworkResponse) {
    /**
     * @internal
     */
    UpdateGlobalNetworkResponse.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(UpdateGlobalNetworkResponse || (UpdateGlobalNetworkResponse = {}));
export var UpdateLinkRequest;
(function (UpdateLinkRequest) {
    /**
     * @internal
     */
    UpdateLinkRequest.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(UpdateLinkRequest || (UpdateLinkRequest = {}));
export var UpdateLinkResponse;
(function (UpdateLinkResponse) {
    /**
     * @internal
     */
    UpdateLinkResponse.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(UpdateLinkResponse || (UpdateLinkResponse = {}));
export var UpdateSiteRequest;
(function (UpdateSiteRequest) {
    /**
     * @internal
     */
    UpdateSiteRequest.filterSensitiveLog = function (obj) { return (__assign(__assign({}, obj), (obj.Location && { Location: SENSITIVE_STRING }))); };
})(UpdateSiteRequest || (UpdateSiteRequest = {}));
export var UpdateSiteResponse;
(function (UpdateSiteResponse) {
    /**
     * @internal
     */
    UpdateSiteResponse.filterSensitiveLog = function (obj) { return (__assign(__assign({}, obj), (obj.Site && { Site: Site.filterSensitiveLog(obj.Site) }))); };
})(UpdateSiteResponse || (UpdateSiteResponse = {}));
//# sourceMappingURL=models_0.js.map