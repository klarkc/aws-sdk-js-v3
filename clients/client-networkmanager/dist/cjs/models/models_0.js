"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DeleteGlobalNetworkRequest = exports.DeleteDeviceResponse = exports.DeleteDeviceRequest = exports.DeleteConnectionResponse = exports.DeleteConnectionRequest = exports.CreateSiteResponse = exports.Site = exports.SiteState = exports.CreateSiteRequest = exports.CreateLinkResponse = exports.Link = exports.LinkState = exports.CreateLinkRequest = exports.CreateGlobalNetworkResponse = exports.GlobalNetwork = exports.GlobalNetworkState = exports.CreateGlobalNetworkRequest = exports.CreateDeviceResponse = exports.Device = exports.DeviceState = exports.CreateDeviceRequest = exports.Location = exports.CreateConnectionResponse = exports.CreateConnectionRequest = exports.Connection = exports.Tag = exports.ConnectionState = exports.Bandwidth = exports.AWSLocation = exports.AssociateTransitGatewayConnectPeerResponse = exports.TransitGatewayConnectPeerAssociation = exports.TransitGatewayConnectPeerAssociationState = exports.AssociateTransitGatewayConnectPeerRequest = exports.AssociateLinkResponse = exports.LinkAssociation = exports.LinkAssociationState = exports.AssociateLinkRequest = exports.ValidationException = exports.ValidationExceptionReason = exports.ValidationExceptionField = exports.ThrottlingException = exports.ServiceQuotaExceededException = exports.ResourceNotFoundException = exports.InternalServerException = exports.ConflictException = exports.AssociateCustomerGatewayResponse = exports.CustomerGatewayAssociation = exports.CustomerGatewayAssociationState = exports.AssociateCustomerGatewayRequest = exports.AccessDeniedException = void 0;
exports.UpdateLinkResponse = exports.UpdateLinkRequest = exports.UpdateGlobalNetworkResponse = exports.UpdateGlobalNetworkRequest = exports.UpdateDeviceResponse = exports.UpdateDeviceRequest = exports.UpdateConnectionResponse = exports.UpdateConnectionRequest = exports.UntagResourceResponse = exports.UntagResourceRequest = exports.TagResourceResponse = exports.TagResourceRequest = exports.RegisterTransitGatewayResponse = exports.RegisterTransitGatewayRequest = exports.ListTagsForResourceResponse = exports.ListTagsForResourceRequest = exports.GetTransitGatewayRegistrationsResponse = exports.GetTransitGatewayRegistrationsRequest = exports.GetTransitGatewayConnectPeerAssociationsResponse = exports.GetTransitGatewayConnectPeerAssociationsRequest = exports.GetSitesResponse = exports.GetSitesRequest = exports.GetLinksResponse = exports.GetLinksRequest = exports.GetLinkAssociationsResponse = exports.GetLinkAssociationsRequest = exports.GetDevicesResponse = exports.GetDevicesRequest = exports.GetCustomerGatewayAssociationsResponse = exports.GetCustomerGatewayAssociationsRequest = exports.GetConnectionsResponse = exports.GetConnectionsRequest = exports.DisassociateTransitGatewayConnectPeerResponse = exports.DisassociateTransitGatewayConnectPeerRequest = exports.DisassociateLinkResponse = exports.DisassociateLinkRequest = exports.DisassociateCustomerGatewayResponse = exports.DisassociateCustomerGatewayRequest = exports.DescribeGlobalNetworksResponse = exports.DescribeGlobalNetworksRequest = exports.DeregisterTransitGatewayResponse = exports.TransitGatewayRegistration = exports.TransitGatewayRegistrationStateReason = exports.TransitGatewayRegistrationState = exports.DeregisterTransitGatewayRequest = exports.DeleteSiteResponse = exports.DeleteSiteRequest = exports.DeleteLinkResponse = exports.DeleteLinkRequest = exports.DeleteGlobalNetworkResponse = void 0;
exports.UpdateSiteResponse = exports.UpdateSiteRequest = void 0;
const smithy_client_1 = require("@aws-sdk/smithy-client");
var AccessDeniedException;
(function (AccessDeniedException) {
    /**
     * @internal
     */
    AccessDeniedException.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(AccessDeniedException = exports.AccessDeniedException || (exports.AccessDeniedException = {}));
var AssociateCustomerGatewayRequest;
(function (AssociateCustomerGatewayRequest) {
    /**
     * @internal
     */
    AssociateCustomerGatewayRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(AssociateCustomerGatewayRequest = exports.AssociateCustomerGatewayRequest || (exports.AssociateCustomerGatewayRequest = {}));
var CustomerGatewayAssociationState;
(function (CustomerGatewayAssociationState) {
    CustomerGatewayAssociationState["available"] = "AVAILABLE";
    CustomerGatewayAssociationState["deleted"] = "DELETED";
    CustomerGatewayAssociationState["deleting"] = "DELETING";
    CustomerGatewayAssociationState["pending"] = "PENDING";
})(CustomerGatewayAssociationState = exports.CustomerGatewayAssociationState || (exports.CustomerGatewayAssociationState = {}));
var CustomerGatewayAssociation;
(function (CustomerGatewayAssociation) {
    /**
     * @internal
     */
    CustomerGatewayAssociation.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(CustomerGatewayAssociation = exports.CustomerGatewayAssociation || (exports.CustomerGatewayAssociation = {}));
var AssociateCustomerGatewayResponse;
(function (AssociateCustomerGatewayResponse) {
    /**
     * @internal
     */
    AssociateCustomerGatewayResponse.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(AssociateCustomerGatewayResponse = exports.AssociateCustomerGatewayResponse || (exports.AssociateCustomerGatewayResponse = {}));
var ConflictException;
(function (ConflictException) {
    /**
     * @internal
     */
    ConflictException.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(ConflictException = exports.ConflictException || (exports.ConflictException = {}));
var InternalServerException;
(function (InternalServerException) {
    /**
     * @internal
     */
    InternalServerException.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(InternalServerException = exports.InternalServerException || (exports.InternalServerException = {}));
var ResourceNotFoundException;
(function (ResourceNotFoundException) {
    /**
     * @internal
     */
    ResourceNotFoundException.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(ResourceNotFoundException = exports.ResourceNotFoundException || (exports.ResourceNotFoundException = {}));
var ServiceQuotaExceededException;
(function (ServiceQuotaExceededException) {
    /**
     * @internal
     */
    ServiceQuotaExceededException.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(ServiceQuotaExceededException = exports.ServiceQuotaExceededException || (exports.ServiceQuotaExceededException = {}));
var ThrottlingException;
(function (ThrottlingException) {
    /**
     * @internal
     */
    ThrottlingException.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(ThrottlingException = exports.ThrottlingException || (exports.ThrottlingException = {}));
var ValidationExceptionField;
(function (ValidationExceptionField) {
    /**
     * @internal
     */
    ValidationExceptionField.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(ValidationExceptionField = exports.ValidationExceptionField || (exports.ValidationExceptionField = {}));
var ValidationExceptionReason;
(function (ValidationExceptionReason) {
    ValidationExceptionReason["CANNOT_PARSE"] = "CannotParse";
    ValidationExceptionReason["FIELD_VALIDATION_FAILED"] = "FieldValidationFailed";
    ValidationExceptionReason["OTHER"] = "Other";
    ValidationExceptionReason["UNKNOWN_OPERATION"] = "UnknownOperation";
})(ValidationExceptionReason = exports.ValidationExceptionReason || (exports.ValidationExceptionReason = {}));
var ValidationException;
(function (ValidationException) {
    /**
     * @internal
     */
    ValidationException.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(ValidationException = exports.ValidationException || (exports.ValidationException = {}));
var AssociateLinkRequest;
(function (AssociateLinkRequest) {
    /**
     * @internal
     */
    AssociateLinkRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(AssociateLinkRequest = exports.AssociateLinkRequest || (exports.AssociateLinkRequest = {}));
var LinkAssociationState;
(function (LinkAssociationState) {
    LinkAssociationState["available"] = "AVAILABLE";
    LinkAssociationState["deleted"] = "DELETED";
    LinkAssociationState["deleting"] = "DELETING";
    LinkAssociationState["pending"] = "PENDING";
})(LinkAssociationState = exports.LinkAssociationState || (exports.LinkAssociationState = {}));
var LinkAssociation;
(function (LinkAssociation) {
    /**
     * @internal
     */
    LinkAssociation.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(LinkAssociation = exports.LinkAssociation || (exports.LinkAssociation = {}));
var AssociateLinkResponse;
(function (AssociateLinkResponse) {
    /**
     * @internal
     */
    AssociateLinkResponse.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(AssociateLinkResponse = exports.AssociateLinkResponse || (exports.AssociateLinkResponse = {}));
var AssociateTransitGatewayConnectPeerRequest;
(function (AssociateTransitGatewayConnectPeerRequest) {
    /**
     * @internal
     */
    AssociateTransitGatewayConnectPeerRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(AssociateTransitGatewayConnectPeerRequest = exports.AssociateTransitGatewayConnectPeerRequest || (exports.AssociateTransitGatewayConnectPeerRequest = {}));
var TransitGatewayConnectPeerAssociationState;
(function (TransitGatewayConnectPeerAssociationState) {
    TransitGatewayConnectPeerAssociationState["available"] = "AVAILABLE";
    TransitGatewayConnectPeerAssociationState["deleted"] = "DELETED";
    TransitGatewayConnectPeerAssociationState["deleting"] = "DELETING";
    TransitGatewayConnectPeerAssociationState["pending"] = "PENDING";
})(TransitGatewayConnectPeerAssociationState = exports.TransitGatewayConnectPeerAssociationState || (exports.TransitGatewayConnectPeerAssociationState = {}));
var TransitGatewayConnectPeerAssociation;
(function (TransitGatewayConnectPeerAssociation) {
    /**
     * @internal
     */
    TransitGatewayConnectPeerAssociation.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(TransitGatewayConnectPeerAssociation = exports.TransitGatewayConnectPeerAssociation || (exports.TransitGatewayConnectPeerAssociation = {}));
var AssociateTransitGatewayConnectPeerResponse;
(function (AssociateTransitGatewayConnectPeerResponse) {
    /**
     * @internal
     */
    AssociateTransitGatewayConnectPeerResponse.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(AssociateTransitGatewayConnectPeerResponse = exports.AssociateTransitGatewayConnectPeerResponse || (exports.AssociateTransitGatewayConnectPeerResponse = {}));
var AWSLocation;
(function (AWSLocation) {
    /**
     * @internal
     */
    AWSLocation.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(AWSLocation = exports.AWSLocation || (exports.AWSLocation = {}));
var Bandwidth;
(function (Bandwidth) {
    /**
     * @internal
     */
    Bandwidth.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(Bandwidth = exports.Bandwidth || (exports.Bandwidth = {}));
var ConnectionState;
(function (ConnectionState) {
    ConnectionState["available"] = "AVAILABLE";
    ConnectionState["deleting"] = "DELETING";
    ConnectionState["pending"] = "PENDING";
    ConnectionState["updating"] = "UPDATING";
})(ConnectionState = exports.ConnectionState || (exports.ConnectionState = {}));
var Tag;
(function (Tag) {
    /**
     * @internal
     */
    Tag.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(Tag = exports.Tag || (exports.Tag = {}));
var Connection;
(function (Connection) {
    /**
     * @internal
     */
    Connection.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(Connection = exports.Connection || (exports.Connection = {}));
var CreateConnectionRequest;
(function (CreateConnectionRequest) {
    /**
     * @internal
     */
    CreateConnectionRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(CreateConnectionRequest = exports.CreateConnectionRequest || (exports.CreateConnectionRequest = {}));
var CreateConnectionResponse;
(function (CreateConnectionResponse) {
    /**
     * @internal
     */
    CreateConnectionResponse.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(CreateConnectionResponse = exports.CreateConnectionResponse || (exports.CreateConnectionResponse = {}));
var Location;
(function (Location) {
    /**
     * @internal
     */
    Location.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(Location = exports.Location || (exports.Location = {}));
var CreateDeviceRequest;
(function (CreateDeviceRequest) {
    /**
     * @internal
     */
    CreateDeviceRequest.filterSensitiveLog = (obj) => ({
        ...obj,
        ...(obj.Location && { Location: smithy_client_1.SENSITIVE_STRING }),
    });
})(CreateDeviceRequest = exports.CreateDeviceRequest || (exports.CreateDeviceRequest = {}));
var DeviceState;
(function (DeviceState) {
    DeviceState["available"] = "AVAILABLE";
    DeviceState["deleting"] = "DELETING";
    DeviceState["pending"] = "PENDING";
    DeviceState["updating"] = "UPDATING";
})(DeviceState = exports.DeviceState || (exports.DeviceState = {}));
var Device;
(function (Device) {
    /**
     * @internal
     */
    Device.filterSensitiveLog = (obj) => ({
        ...obj,
        ...(obj.Location && { Location: smithy_client_1.SENSITIVE_STRING }),
    });
})(Device = exports.Device || (exports.Device = {}));
var CreateDeviceResponse;
(function (CreateDeviceResponse) {
    /**
     * @internal
     */
    CreateDeviceResponse.filterSensitiveLog = (obj) => ({
        ...obj,
        ...(obj.Device && { Device: Device.filterSensitiveLog(obj.Device) }),
    });
})(CreateDeviceResponse = exports.CreateDeviceResponse || (exports.CreateDeviceResponse = {}));
var CreateGlobalNetworkRequest;
(function (CreateGlobalNetworkRequest) {
    /**
     * @internal
     */
    CreateGlobalNetworkRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(CreateGlobalNetworkRequest = exports.CreateGlobalNetworkRequest || (exports.CreateGlobalNetworkRequest = {}));
var GlobalNetworkState;
(function (GlobalNetworkState) {
    GlobalNetworkState["available"] = "AVAILABLE";
    GlobalNetworkState["deleting"] = "DELETING";
    GlobalNetworkState["pending"] = "PENDING";
    GlobalNetworkState["updating"] = "UPDATING";
})(GlobalNetworkState = exports.GlobalNetworkState || (exports.GlobalNetworkState = {}));
var GlobalNetwork;
(function (GlobalNetwork) {
    /**
     * @internal
     */
    GlobalNetwork.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(GlobalNetwork = exports.GlobalNetwork || (exports.GlobalNetwork = {}));
var CreateGlobalNetworkResponse;
(function (CreateGlobalNetworkResponse) {
    /**
     * @internal
     */
    CreateGlobalNetworkResponse.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(CreateGlobalNetworkResponse = exports.CreateGlobalNetworkResponse || (exports.CreateGlobalNetworkResponse = {}));
var CreateLinkRequest;
(function (CreateLinkRequest) {
    /**
     * @internal
     */
    CreateLinkRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(CreateLinkRequest = exports.CreateLinkRequest || (exports.CreateLinkRequest = {}));
var LinkState;
(function (LinkState) {
    LinkState["available"] = "AVAILABLE";
    LinkState["deleting"] = "DELETING";
    LinkState["pending"] = "PENDING";
    LinkState["updating"] = "UPDATING";
})(LinkState = exports.LinkState || (exports.LinkState = {}));
var Link;
(function (Link) {
    /**
     * @internal
     */
    Link.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(Link = exports.Link || (exports.Link = {}));
var CreateLinkResponse;
(function (CreateLinkResponse) {
    /**
     * @internal
     */
    CreateLinkResponse.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(CreateLinkResponse = exports.CreateLinkResponse || (exports.CreateLinkResponse = {}));
var CreateSiteRequest;
(function (CreateSiteRequest) {
    /**
     * @internal
     */
    CreateSiteRequest.filterSensitiveLog = (obj) => ({
        ...obj,
        ...(obj.Location && { Location: smithy_client_1.SENSITIVE_STRING }),
    });
})(CreateSiteRequest = exports.CreateSiteRequest || (exports.CreateSiteRequest = {}));
var SiteState;
(function (SiteState) {
    SiteState["available"] = "AVAILABLE";
    SiteState["deleting"] = "DELETING";
    SiteState["pending"] = "PENDING";
    SiteState["updating"] = "UPDATING";
})(SiteState = exports.SiteState || (exports.SiteState = {}));
var Site;
(function (Site) {
    /**
     * @internal
     */
    Site.filterSensitiveLog = (obj) => ({
        ...obj,
        ...(obj.Location && { Location: smithy_client_1.SENSITIVE_STRING }),
    });
})(Site = exports.Site || (exports.Site = {}));
var CreateSiteResponse;
(function (CreateSiteResponse) {
    /**
     * @internal
     */
    CreateSiteResponse.filterSensitiveLog = (obj) => ({
        ...obj,
        ...(obj.Site && { Site: Site.filterSensitiveLog(obj.Site) }),
    });
})(CreateSiteResponse = exports.CreateSiteResponse || (exports.CreateSiteResponse = {}));
var DeleteConnectionRequest;
(function (DeleteConnectionRequest) {
    /**
     * @internal
     */
    DeleteConnectionRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(DeleteConnectionRequest = exports.DeleteConnectionRequest || (exports.DeleteConnectionRequest = {}));
var DeleteConnectionResponse;
(function (DeleteConnectionResponse) {
    /**
     * @internal
     */
    DeleteConnectionResponse.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(DeleteConnectionResponse = exports.DeleteConnectionResponse || (exports.DeleteConnectionResponse = {}));
var DeleteDeviceRequest;
(function (DeleteDeviceRequest) {
    /**
     * @internal
     */
    DeleteDeviceRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(DeleteDeviceRequest = exports.DeleteDeviceRequest || (exports.DeleteDeviceRequest = {}));
var DeleteDeviceResponse;
(function (DeleteDeviceResponse) {
    /**
     * @internal
     */
    DeleteDeviceResponse.filterSensitiveLog = (obj) => ({
        ...obj,
        ...(obj.Device && { Device: Device.filterSensitiveLog(obj.Device) }),
    });
})(DeleteDeviceResponse = exports.DeleteDeviceResponse || (exports.DeleteDeviceResponse = {}));
var DeleteGlobalNetworkRequest;
(function (DeleteGlobalNetworkRequest) {
    /**
     * @internal
     */
    DeleteGlobalNetworkRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(DeleteGlobalNetworkRequest = exports.DeleteGlobalNetworkRequest || (exports.DeleteGlobalNetworkRequest = {}));
var DeleteGlobalNetworkResponse;
(function (DeleteGlobalNetworkResponse) {
    /**
     * @internal
     */
    DeleteGlobalNetworkResponse.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(DeleteGlobalNetworkResponse = exports.DeleteGlobalNetworkResponse || (exports.DeleteGlobalNetworkResponse = {}));
var DeleteLinkRequest;
(function (DeleteLinkRequest) {
    /**
     * @internal
     */
    DeleteLinkRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(DeleteLinkRequest = exports.DeleteLinkRequest || (exports.DeleteLinkRequest = {}));
var DeleteLinkResponse;
(function (DeleteLinkResponse) {
    /**
     * @internal
     */
    DeleteLinkResponse.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(DeleteLinkResponse = exports.DeleteLinkResponse || (exports.DeleteLinkResponse = {}));
var DeleteSiteRequest;
(function (DeleteSiteRequest) {
    /**
     * @internal
     */
    DeleteSiteRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(DeleteSiteRequest = exports.DeleteSiteRequest || (exports.DeleteSiteRequest = {}));
var DeleteSiteResponse;
(function (DeleteSiteResponse) {
    /**
     * @internal
     */
    DeleteSiteResponse.filterSensitiveLog = (obj) => ({
        ...obj,
        ...(obj.Site && { Site: Site.filterSensitiveLog(obj.Site) }),
    });
})(DeleteSiteResponse = exports.DeleteSiteResponse || (exports.DeleteSiteResponse = {}));
var DeregisterTransitGatewayRequest;
(function (DeregisterTransitGatewayRequest) {
    /**
     * @internal
     */
    DeregisterTransitGatewayRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(DeregisterTransitGatewayRequest = exports.DeregisterTransitGatewayRequest || (exports.DeregisterTransitGatewayRequest = {}));
var TransitGatewayRegistrationState;
(function (TransitGatewayRegistrationState) {
    TransitGatewayRegistrationState["available"] = "AVAILABLE";
    TransitGatewayRegistrationState["deleted"] = "DELETED";
    TransitGatewayRegistrationState["deleting"] = "DELETING";
    TransitGatewayRegistrationState["failed"] = "FAILED";
    TransitGatewayRegistrationState["pending"] = "PENDING";
})(TransitGatewayRegistrationState = exports.TransitGatewayRegistrationState || (exports.TransitGatewayRegistrationState = {}));
var TransitGatewayRegistrationStateReason;
(function (TransitGatewayRegistrationStateReason) {
    /**
     * @internal
     */
    TransitGatewayRegistrationStateReason.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(TransitGatewayRegistrationStateReason = exports.TransitGatewayRegistrationStateReason || (exports.TransitGatewayRegistrationStateReason = {}));
var TransitGatewayRegistration;
(function (TransitGatewayRegistration) {
    /**
     * @internal
     */
    TransitGatewayRegistration.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(TransitGatewayRegistration = exports.TransitGatewayRegistration || (exports.TransitGatewayRegistration = {}));
var DeregisterTransitGatewayResponse;
(function (DeregisterTransitGatewayResponse) {
    /**
     * @internal
     */
    DeregisterTransitGatewayResponse.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(DeregisterTransitGatewayResponse = exports.DeregisterTransitGatewayResponse || (exports.DeregisterTransitGatewayResponse = {}));
var DescribeGlobalNetworksRequest;
(function (DescribeGlobalNetworksRequest) {
    /**
     * @internal
     */
    DescribeGlobalNetworksRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(DescribeGlobalNetworksRequest = exports.DescribeGlobalNetworksRequest || (exports.DescribeGlobalNetworksRequest = {}));
var DescribeGlobalNetworksResponse;
(function (DescribeGlobalNetworksResponse) {
    /**
     * @internal
     */
    DescribeGlobalNetworksResponse.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(DescribeGlobalNetworksResponse = exports.DescribeGlobalNetworksResponse || (exports.DescribeGlobalNetworksResponse = {}));
var DisassociateCustomerGatewayRequest;
(function (DisassociateCustomerGatewayRequest) {
    /**
     * @internal
     */
    DisassociateCustomerGatewayRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(DisassociateCustomerGatewayRequest = exports.DisassociateCustomerGatewayRequest || (exports.DisassociateCustomerGatewayRequest = {}));
var DisassociateCustomerGatewayResponse;
(function (DisassociateCustomerGatewayResponse) {
    /**
     * @internal
     */
    DisassociateCustomerGatewayResponse.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(DisassociateCustomerGatewayResponse = exports.DisassociateCustomerGatewayResponse || (exports.DisassociateCustomerGatewayResponse = {}));
var DisassociateLinkRequest;
(function (DisassociateLinkRequest) {
    /**
     * @internal
     */
    DisassociateLinkRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(DisassociateLinkRequest = exports.DisassociateLinkRequest || (exports.DisassociateLinkRequest = {}));
var DisassociateLinkResponse;
(function (DisassociateLinkResponse) {
    /**
     * @internal
     */
    DisassociateLinkResponse.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(DisassociateLinkResponse = exports.DisassociateLinkResponse || (exports.DisassociateLinkResponse = {}));
var DisassociateTransitGatewayConnectPeerRequest;
(function (DisassociateTransitGatewayConnectPeerRequest) {
    /**
     * @internal
     */
    DisassociateTransitGatewayConnectPeerRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(DisassociateTransitGatewayConnectPeerRequest = exports.DisassociateTransitGatewayConnectPeerRequest || (exports.DisassociateTransitGatewayConnectPeerRequest = {}));
var DisassociateTransitGatewayConnectPeerResponse;
(function (DisassociateTransitGatewayConnectPeerResponse) {
    /**
     * @internal
     */
    DisassociateTransitGatewayConnectPeerResponse.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(DisassociateTransitGatewayConnectPeerResponse = exports.DisassociateTransitGatewayConnectPeerResponse || (exports.DisassociateTransitGatewayConnectPeerResponse = {}));
var GetConnectionsRequest;
(function (GetConnectionsRequest) {
    /**
     * @internal
     */
    GetConnectionsRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(GetConnectionsRequest = exports.GetConnectionsRequest || (exports.GetConnectionsRequest = {}));
var GetConnectionsResponse;
(function (GetConnectionsResponse) {
    /**
     * @internal
     */
    GetConnectionsResponse.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(GetConnectionsResponse = exports.GetConnectionsResponse || (exports.GetConnectionsResponse = {}));
var GetCustomerGatewayAssociationsRequest;
(function (GetCustomerGatewayAssociationsRequest) {
    /**
     * @internal
     */
    GetCustomerGatewayAssociationsRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(GetCustomerGatewayAssociationsRequest = exports.GetCustomerGatewayAssociationsRequest || (exports.GetCustomerGatewayAssociationsRequest = {}));
var GetCustomerGatewayAssociationsResponse;
(function (GetCustomerGatewayAssociationsResponse) {
    /**
     * @internal
     */
    GetCustomerGatewayAssociationsResponse.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(GetCustomerGatewayAssociationsResponse = exports.GetCustomerGatewayAssociationsResponse || (exports.GetCustomerGatewayAssociationsResponse = {}));
var GetDevicesRequest;
(function (GetDevicesRequest) {
    /**
     * @internal
     */
    GetDevicesRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(GetDevicesRequest = exports.GetDevicesRequest || (exports.GetDevicesRequest = {}));
var GetDevicesResponse;
(function (GetDevicesResponse) {
    /**
     * @internal
     */
    GetDevicesResponse.filterSensitiveLog = (obj) => ({
        ...obj,
        ...(obj.Devices && { Devices: obj.Devices.map((item) => Device.filterSensitiveLog(item)) }),
    });
})(GetDevicesResponse = exports.GetDevicesResponse || (exports.GetDevicesResponse = {}));
var GetLinkAssociationsRequest;
(function (GetLinkAssociationsRequest) {
    /**
     * @internal
     */
    GetLinkAssociationsRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(GetLinkAssociationsRequest = exports.GetLinkAssociationsRequest || (exports.GetLinkAssociationsRequest = {}));
var GetLinkAssociationsResponse;
(function (GetLinkAssociationsResponse) {
    /**
     * @internal
     */
    GetLinkAssociationsResponse.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(GetLinkAssociationsResponse = exports.GetLinkAssociationsResponse || (exports.GetLinkAssociationsResponse = {}));
var GetLinksRequest;
(function (GetLinksRequest) {
    /**
     * @internal
     */
    GetLinksRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(GetLinksRequest = exports.GetLinksRequest || (exports.GetLinksRequest = {}));
var GetLinksResponse;
(function (GetLinksResponse) {
    /**
     * @internal
     */
    GetLinksResponse.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(GetLinksResponse = exports.GetLinksResponse || (exports.GetLinksResponse = {}));
var GetSitesRequest;
(function (GetSitesRequest) {
    /**
     * @internal
     */
    GetSitesRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(GetSitesRequest = exports.GetSitesRequest || (exports.GetSitesRequest = {}));
var GetSitesResponse;
(function (GetSitesResponse) {
    /**
     * @internal
     */
    GetSitesResponse.filterSensitiveLog = (obj) => ({
        ...obj,
        ...(obj.Sites && { Sites: obj.Sites.map((item) => Site.filterSensitiveLog(item)) }),
    });
})(GetSitesResponse = exports.GetSitesResponse || (exports.GetSitesResponse = {}));
var GetTransitGatewayConnectPeerAssociationsRequest;
(function (GetTransitGatewayConnectPeerAssociationsRequest) {
    /**
     * @internal
     */
    GetTransitGatewayConnectPeerAssociationsRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(GetTransitGatewayConnectPeerAssociationsRequest = exports.GetTransitGatewayConnectPeerAssociationsRequest || (exports.GetTransitGatewayConnectPeerAssociationsRequest = {}));
var GetTransitGatewayConnectPeerAssociationsResponse;
(function (GetTransitGatewayConnectPeerAssociationsResponse) {
    /**
     * @internal
     */
    GetTransitGatewayConnectPeerAssociationsResponse.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(GetTransitGatewayConnectPeerAssociationsResponse = exports.GetTransitGatewayConnectPeerAssociationsResponse || (exports.GetTransitGatewayConnectPeerAssociationsResponse = {}));
var GetTransitGatewayRegistrationsRequest;
(function (GetTransitGatewayRegistrationsRequest) {
    /**
     * @internal
     */
    GetTransitGatewayRegistrationsRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(GetTransitGatewayRegistrationsRequest = exports.GetTransitGatewayRegistrationsRequest || (exports.GetTransitGatewayRegistrationsRequest = {}));
var GetTransitGatewayRegistrationsResponse;
(function (GetTransitGatewayRegistrationsResponse) {
    /**
     * @internal
     */
    GetTransitGatewayRegistrationsResponse.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(GetTransitGatewayRegistrationsResponse = exports.GetTransitGatewayRegistrationsResponse || (exports.GetTransitGatewayRegistrationsResponse = {}));
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
var RegisterTransitGatewayRequest;
(function (RegisterTransitGatewayRequest) {
    /**
     * @internal
     */
    RegisterTransitGatewayRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(RegisterTransitGatewayRequest = exports.RegisterTransitGatewayRequest || (exports.RegisterTransitGatewayRequest = {}));
var RegisterTransitGatewayResponse;
(function (RegisterTransitGatewayResponse) {
    /**
     * @internal
     */
    RegisterTransitGatewayResponse.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(RegisterTransitGatewayResponse = exports.RegisterTransitGatewayResponse || (exports.RegisterTransitGatewayResponse = {}));
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
var UpdateConnectionRequest;
(function (UpdateConnectionRequest) {
    /**
     * @internal
     */
    UpdateConnectionRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(UpdateConnectionRequest = exports.UpdateConnectionRequest || (exports.UpdateConnectionRequest = {}));
var UpdateConnectionResponse;
(function (UpdateConnectionResponse) {
    /**
     * @internal
     */
    UpdateConnectionResponse.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(UpdateConnectionResponse = exports.UpdateConnectionResponse || (exports.UpdateConnectionResponse = {}));
var UpdateDeviceRequest;
(function (UpdateDeviceRequest) {
    /**
     * @internal
     */
    UpdateDeviceRequest.filterSensitiveLog = (obj) => ({
        ...obj,
        ...(obj.Location && { Location: smithy_client_1.SENSITIVE_STRING }),
    });
})(UpdateDeviceRequest = exports.UpdateDeviceRequest || (exports.UpdateDeviceRequest = {}));
var UpdateDeviceResponse;
(function (UpdateDeviceResponse) {
    /**
     * @internal
     */
    UpdateDeviceResponse.filterSensitiveLog = (obj) => ({
        ...obj,
        ...(obj.Device && { Device: Device.filterSensitiveLog(obj.Device) }),
    });
})(UpdateDeviceResponse = exports.UpdateDeviceResponse || (exports.UpdateDeviceResponse = {}));
var UpdateGlobalNetworkRequest;
(function (UpdateGlobalNetworkRequest) {
    /**
     * @internal
     */
    UpdateGlobalNetworkRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(UpdateGlobalNetworkRequest = exports.UpdateGlobalNetworkRequest || (exports.UpdateGlobalNetworkRequest = {}));
var UpdateGlobalNetworkResponse;
(function (UpdateGlobalNetworkResponse) {
    /**
     * @internal
     */
    UpdateGlobalNetworkResponse.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(UpdateGlobalNetworkResponse = exports.UpdateGlobalNetworkResponse || (exports.UpdateGlobalNetworkResponse = {}));
var UpdateLinkRequest;
(function (UpdateLinkRequest) {
    /**
     * @internal
     */
    UpdateLinkRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(UpdateLinkRequest = exports.UpdateLinkRequest || (exports.UpdateLinkRequest = {}));
var UpdateLinkResponse;
(function (UpdateLinkResponse) {
    /**
     * @internal
     */
    UpdateLinkResponse.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(UpdateLinkResponse = exports.UpdateLinkResponse || (exports.UpdateLinkResponse = {}));
var UpdateSiteRequest;
(function (UpdateSiteRequest) {
    /**
     * @internal
     */
    UpdateSiteRequest.filterSensitiveLog = (obj) => ({
        ...obj,
        ...(obj.Location && { Location: smithy_client_1.SENSITIVE_STRING }),
    });
})(UpdateSiteRequest = exports.UpdateSiteRequest || (exports.UpdateSiteRequest = {}));
var UpdateSiteResponse;
(function (UpdateSiteResponse) {
    /**
     * @internal
     */
    UpdateSiteResponse.filterSensitiveLog = (obj) => ({
        ...obj,
        ...(obj.Site && { Site: Site.filterSensitiveLog(obj.Site) }),
    });
})(UpdateSiteResponse = exports.UpdateSiteResponse || (exports.UpdateSiteResponse = {}));
//# sourceMappingURL=models_0.js.map