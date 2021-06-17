"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ListDomainsResponse = exports.ListDomainsRequest = exports.ListDevicesResponse = exports.ListDevicesRequest = exports.FleetSummary = exports.DomainSummary = exports.DisassociateWebsiteCertificateAuthorityResponse = exports.DisassociateWebsiteCertificateAuthorityRequest = exports.DisassociateWebsiteAuthorizationProviderResponse = exports.DisassociateWebsiteAuthorizationProviderRequest = exports.DisassociateDomainResponse = exports.DisassociateDomainRequest = exports.DeviceSummary = exports.DescribeWebsiteCertificateAuthorityResponse = exports.DescribeWebsiteCertificateAuthorityRequest = exports.DescribeIdentityProviderConfigurationResponse = exports.IdentityProviderType = exports.DescribeIdentityProviderConfigurationRequest = exports.DescribeFleetMetadataResponse = exports.FleetStatus = exports.DescribeFleetMetadataRequest = exports.DescribeDomainResponse = exports.DomainStatus = exports.DescribeDomainRequest = exports.DescribeDevicePolicyConfigurationResponse = exports.DescribeDevicePolicyConfigurationRequest = exports.DescribeDeviceResponse = exports.DeviceStatus = exports.DescribeDeviceRequest = exports.DescribeCompanyNetworkConfigurationResponse = exports.DescribeCompanyNetworkConfigurationRequest = exports.DescribeAuditStreamConfigurationResponse = exports.DescribeAuditStreamConfigurationRequest = exports.DeleteFleetResponse = exports.DeleteFleetRequest = exports.CreateFleetResponse = exports.CreateFleetRequest = exports.AssociateWebsiteCertificateAuthorityResponse = exports.AssociateWebsiteCertificateAuthorityRequest = exports.AssociateWebsiteAuthorizationProviderResponse = exports.AssociateWebsiteAuthorizationProviderRequest = exports.AuthorizationProviderType = exports.UnauthorizedException = exports.TooManyRequestsException = exports.ResourceNotFoundException = exports.ResourceAlreadyExistsException = exports.InvalidRequestException = exports.InternalServerErrorException = exports.AssociateDomainResponse = exports.AssociateDomainRequest = void 0;
exports.UpdateIdentityProviderConfigurationResponse = exports.UpdateIdentityProviderConfigurationRequest = exports.UpdateFleetMetadataResponse = exports.UpdateFleetMetadataRequest = exports.UpdateDomainMetadataResponse = exports.UpdateDomainMetadataRequest = exports.UpdateDevicePolicyConfigurationResponse = exports.UpdateDevicePolicyConfigurationRequest = exports.UpdateCompanyNetworkConfigurationResponse = exports.UpdateCompanyNetworkConfigurationRequest = exports.UpdateAuditStreamConfigurationResponse = exports.UpdateAuditStreamConfigurationRequest = exports.UntagResourceResponse = exports.UntagResourceRequest = exports.TagResourceResponse = exports.TagResourceRequest = exports.SignOutUserResponse = exports.SignOutUserRequest = exports.RevokeDomainAccessResponse = exports.RevokeDomainAccessRequest = exports.RestoreDomainAccessResponse = exports.RestoreDomainAccessRequest = exports.ListWebsiteCertificateAuthoritiesResponse = exports.WebsiteCaSummary = exports.ListWebsiteCertificateAuthoritiesRequest = exports.ListWebsiteAuthorizationProvidersResponse = exports.WebsiteAuthorizationProviderSummary = exports.ListWebsiteAuthorizationProvidersRequest = exports.ListTagsForResourceResponse = exports.ListTagsForResourceRequest = exports.ListFleetsResponse = exports.ListFleetsRequest = void 0;
var AssociateDomainRequest;
(function (AssociateDomainRequest) {
    /**
     * @internal
     */
    AssociateDomainRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(AssociateDomainRequest = exports.AssociateDomainRequest || (exports.AssociateDomainRequest = {}));
var AssociateDomainResponse;
(function (AssociateDomainResponse) {
    /**
     * @internal
     */
    AssociateDomainResponse.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(AssociateDomainResponse = exports.AssociateDomainResponse || (exports.AssociateDomainResponse = {}));
var InternalServerErrorException;
(function (InternalServerErrorException) {
    /**
     * @internal
     */
    InternalServerErrorException.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(InternalServerErrorException = exports.InternalServerErrorException || (exports.InternalServerErrorException = {}));
var InvalidRequestException;
(function (InvalidRequestException) {
    /**
     * @internal
     */
    InvalidRequestException.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(InvalidRequestException = exports.InvalidRequestException || (exports.InvalidRequestException = {}));
var ResourceAlreadyExistsException;
(function (ResourceAlreadyExistsException) {
    /**
     * @internal
     */
    ResourceAlreadyExistsException.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(ResourceAlreadyExistsException = exports.ResourceAlreadyExistsException || (exports.ResourceAlreadyExistsException = {}));
var ResourceNotFoundException;
(function (ResourceNotFoundException) {
    /**
     * @internal
     */
    ResourceNotFoundException.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(ResourceNotFoundException = exports.ResourceNotFoundException || (exports.ResourceNotFoundException = {}));
var TooManyRequestsException;
(function (TooManyRequestsException) {
    /**
     * @internal
     */
    TooManyRequestsException.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(TooManyRequestsException = exports.TooManyRequestsException || (exports.TooManyRequestsException = {}));
var UnauthorizedException;
(function (UnauthorizedException) {
    /**
     * @internal
     */
    UnauthorizedException.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(UnauthorizedException = exports.UnauthorizedException || (exports.UnauthorizedException = {}));
var AuthorizationProviderType;
(function (AuthorizationProviderType) {
    AuthorizationProviderType["SAML"] = "SAML";
})(AuthorizationProviderType = exports.AuthorizationProviderType || (exports.AuthorizationProviderType = {}));
var AssociateWebsiteAuthorizationProviderRequest;
(function (AssociateWebsiteAuthorizationProviderRequest) {
    /**
     * @internal
     */
    AssociateWebsiteAuthorizationProviderRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(AssociateWebsiteAuthorizationProviderRequest = exports.AssociateWebsiteAuthorizationProviderRequest || (exports.AssociateWebsiteAuthorizationProviderRequest = {}));
var AssociateWebsiteAuthorizationProviderResponse;
(function (AssociateWebsiteAuthorizationProviderResponse) {
    /**
     * @internal
     */
    AssociateWebsiteAuthorizationProviderResponse.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(AssociateWebsiteAuthorizationProviderResponse = exports.AssociateWebsiteAuthorizationProviderResponse || (exports.AssociateWebsiteAuthorizationProviderResponse = {}));
var AssociateWebsiteCertificateAuthorityRequest;
(function (AssociateWebsiteCertificateAuthorityRequest) {
    /**
     * @internal
     */
    AssociateWebsiteCertificateAuthorityRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(AssociateWebsiteCertificateAuthorityRequest = exports.AssociateWebsiteCertificateAuthorityRequest || (exports.AssociateWebsiteCertificateAuthorityRequest = {}));
var AssociateWebsiteCertificateAuthorityResponse;
(function (AssociateWebsiteCertificateAuthorityResponse) {
    /**
     * @internal
     */
    AssociateWebsiteCertificateAuthorityResponse.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(AssociateWebsiteCertificateAuthorityResponse = exports.AssociateWebsiteCertificateAuthorityResponse || (exports.AssociateWebsiteCertificateAuthorityResponse = {}));
var CreateFleetRequest;
(function (CreateFleetRequest) {
    /**
     * @internal
     */
    CreateFleetRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(CreateFleetRequest = exports.CreateFleetRequest || (exports.CreateFleetRequest = {}));
var CreateFleetResponse;
(function (CreateFleetResponse) {
    /**
     * @internal
     */
    CreateFleetResponse.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(CreateFleetResponse = exports.CreateFleetResponse || (exports.CreateFleetResponse = {}));
var DeleteFleetRequest;
(function (DeleteFleetRequest) {
    /**
     * @internal
     */
    DeleteFleetRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(DeleteFleetRequest = exports.DeleteFleetRequest || (exports.DeleteFleetRequest = {}));
var DeleteFleetResponse;
(function (DeleteFleetResponse) {
    /**
     * @internal
     */
    DeleteFleetResponse.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(DeleteFleetResponse = exports.DeleteFleetResponse || (exports.DeleteFleetResponse = {}));
var DescribeAuditStreamConfigurationRequest;
(function (DescribeAuditStreamConfigurationRequest) {
    /**
     * @internal
     */
    DescribeAuditStreamConfigurationRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(DescribeAuditStreamConfigurationRequest = exports.DescribeAuditStreamConfigurationRequest || (exports.DescribeAuditStreamConfigurationRequest = {}));
var DescribeAuditStreamConfigurationResponse;
(function (DescribeAuditStreamConfigurationResponse) {
    /**
     * @internal
     */
    DescribeAuditStreamConfigurationResponse.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(DescribeAuditStreamConfigurationResponse = exports.DescribeAuditStreamConfigurationResponse || (exports.DescribeAuditStreamConfigurationResponse = {}));
var DescribeCompanyNetworkConfigurationRequest;
(function (DescribeCompanyNetworkConfigurationRequest) {
    /**
     * @internal
     */
    DescribeCompanyNetworkConfigurationRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(DescribeCompanyNetworkConfigurationRequest = exports.DescribeCompanyNetworkConfigurationRequest || (exports.DescribeCompanyNetworkConfigurationRequest = {}));
var DescribeCompanyNetworkConfigurationResponse;
(function (DescribeCompanyNetworkConfigurationResponse) {
    /**
     * @internal
     */
    DescribeCompanyNetworkConfigurationResponse.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(DescribeCompanyNetworkConfigurationResponse = exports.DescribeCompanyNetworkConfigurationResponse || (exports.DescribeCompanyNetworkConfigurationResponse = {}));
var DescribeDeviceRequest;
(function (DescribeDeviceRequest) {
    /**
     * @internal
     */
    DescribeDeviceRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(DescribeDeviceRequest = exports.DescribeDeviceRequest || (exports.DescribeDeviceRequest = {}));
var DeviceStatus;
(function (DeviceStatus) {
    DeviceStatus["ACTIVE"] = "ACTIVE";
    DeviceStatus["SIGNED_OUT"] = "SIGNED_OUT";
})(DeviceStatus = exports.DeviceStatus || (exports.DeviceStatus = {}));
var DescribeDeviceResponse;
(function (DescribeDeviceResponse) {
    /**
     * @internal
     */
    DescribeDeviceResponse.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(DescribeDeviceResponse = exports.DescribeDeviceResponse || (exports.DescribeDeviceResponse = {}));
var DescribeDevicePolicyConfigurationRequest;
(function (DescribeDevicePolicyConfigurationRequest) {
    /**
     * @internal
     */
    DescribeDevicePolicyConfigurationRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(DescribeDevicePolicyConfigurationRequest = exports.DescribeDevicePolicyConfigurationRequest || (exports.DescribeDevicePolicyConfigurationRequest = {}));
var DescribeDevicePolicyConfigurationResponse;
(function (DescribeDevicePolicyConfigurationResponse) {
    /**
     * @internal
     */
    DescribeDevicePolicyConfigurationResponse.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(DescribeDevicePolicyConfigurationResponse = exports.DescribeDevicePolicyConfigurationResponse || (exports.DescribeDevicePolicyConfigurationResponse = {}));
var DescribeDomainRequest;
(function (DescribeDomainRequest) {
    /**
     * @internal
     */
    DescribeDomainRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(DescribeDomainRequest = exports.DescribeDomainRequest || (exports.DescribeDomainRequest = {}));
var DomainStatus;
(function (DomainStatus) {
    DomainStatus["ACTIVE"] = "ACTIVE";
    DomainStatus["ASSOCIATING"] = "ASSOCIATING";
    DomainStatus["DISASSOCIATED"] = "DISASSOCIATED";
    DomainStatus["DISASSOCIATING"] = "DISASSOCIATING";
    DomainStatus["FAILED_TO_ASSOCIATE"] = "FAILED_TO_ASSOCIATE";
    DomainStatus["FAILED_TO_DISASSOCIATE"] = "FAILED_TO_DISASSOCIATE";
    DomainStatus["INACTIVE"] = "INACTIVE";
    DomainStatus["PENDING_VALIDATION"] = "PENDING_VALIDATION";
})(DomainStatus = exports.DomainStatus || (exports.DomainStatus = {}));
var DescribeDomainResponse;
(function (DescribeDomainResponse) {
    /**
     * @internal
     */
    DescribeDomainResponse.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(DescribeDomainResponse = exports.DescribeDomainResponse || (exports.DescribeDomainResponse = {}));
var DescribeFleetMetadataRequest;
(function (DescribeFleetMetadataRequest) {
    /**
     * @internal
     */
    DescribeFleetMetadataRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(DescribeFleetMetadataRequest = exports.DescribeFleetMetadataRequest || (exports.DescribeFleetMetadataRequest = {}));
var FleetStatus;
(function (FleetStatus) {
    FleetStatus["ACTIVE"] = "ACTIVE";
    FleetStatus["CREATING"] = "CREATING";
    FleetStatus["DELETED"] = "DELETED";
    FleetStatus["DELETING"] = "DELETING";
    FleetStatus["FAILED_TO_CREATE"] = "FAILED_TO_CREATE";
    FleetStatus["FAILED_TO_DELETE"] = "FAILED_TO_DELETE";
})(FleetStatus = exports.FleetStatus || (exports.FleetStatus = {}));
var DescribeFleetMetadataResponse;
(function (DescribeFleetMetadataResponse) {
    /**
     * @internal
     */
    DescribeFleetMetadataResponse.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(DescribeFleetMetadataResponse = exports.DescribeFleetMetadataResponse || (exports.DescribeFleetMetadataResponse = {}));
var DescribeIdentityProviderConfigurationRequest;
(function (DescribeIdentityProviderConfigurationRequest) {
    /**
     * @internal
     */
    DescribeIdentityProviderConfigurationRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(DescribeIdentityProviderConfigurationRequest = exports.DescribeIdentityProviderConfigurationRequest || (exports.DescribeIdentityProviderConfigurationRequest = {}));
var IdentityProviderType;
(function (IdentityProviderType) {
    IdentityProviderType["SAML"] = "SAML";
})(IdentityProviderType = exports.IdentityProviderType || (exports.IdentityProviderType = {}));
var DescribeIdentityProviderConfigurationResponse;
(function (DescribeIdentityProviderConfigurationResponse) {
    /**
     * @internal
     */
    DescribeIdentityProviderConfigurationResponse.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(DescribeIdentityProviderConfigurationResponse = exports.DescribeIdentityProviderConfigurationResponse || (exports.DescribeIdentityProviderConfigurationResponse = {}));
var DescribeWebsiteCertificateAuthorityRequest;
(function (DescribeWebsiteCertificateAuthorityRequest) {
    /**
     * @internal
     */
    DescribeWebsiteCertificateAuthorityRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(DescribeWebsiteCertificateAuthorityRequest = exports.DescribeWebsiteCertificateAuthorityRequest || (exports.DescribeWebsiteCertificateAuthorityRequest = {}));
var DescribeWebsiteCertificateAuthorityResponse;
(function (DescribeWebsiteCertificateAuthorityResponse) {
    /**
     * @internal
     */
    DescribeWebsiteCertificateAuthorityResponse.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(DescribeWebsiteCertificateAuthorityResponse = exports.DescribeWebsiteCertificateAuthorityResponse || (exports.DescribeWebsiteCertificateAuthorityResponse = {}));
var DeviceSummary;
(function (DeviceSummary) {
    /**
     * @internal
     */
    DeviceSummary.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(DeviceSummary = exports.DeviceSummary || (exports.DeviceSummary = {}));
var DisassociateDomainRequest;
(function (DisassociateDomainRequest) {
    /**
     * @internal
     */
    DisassociateDomainRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(DisassociateDomainRequest = exports.DisassociateDomainRequest || (exports.DisassociateDomainRequest = {}));
var DisassociateDomainResponse;
(function (DisassociateDomainResponse) {
    /**
     * @internal
     */
    DisassociateDomainResponse.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(DisassociateDomainResponse = exports.DisassociateDomainResponse || (exports.DisassociateDomainResponse = {}));
var DisassociateWebsiteAuthorizationProviderRequest;
(function (DisassociateWebsiteAuthorizationProviderRequest) {
    /**
     * @internal
     */
    DisassociateWebsiteAuthorizationProviderRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(DisassociateWebsiteAuthorizationProviderRequest = exports.DisassociateWebsiteAuthorizationProviderRequest || (exports.DisassociateWebsiteAuthorizationProviderRequest = {}));
var DisassociateWebsiteAuthorizationProviderResponse;
(function (DisassociateWebsiteAuthorizationProviderResponse) {
    /**
     * @internal
     */
    DisassociateWebsiteAuthorizationProviderResponse.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(DisassociateWebsiteAuthorizationProviderResponse = exports.DisassociateWebsiteAuthorizationProviderResponse || (exports.DisassociateWebsiteAuthorizationProviderResponse = {}));
var DisassociateWebsiteCertificateAuthorityRequest;
(function (DisassociateWebsiteCertificateAuthorityRequest) {
    /**
     * @internal
     */
    DisassociateWebsiteCertificateAuthorityRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(DisassociateWebsiteCertificateAuthorityRequest = exports.DisassociateWebsiteCertificateAuthorityRequest || (exports.DisassociateWebsiteCertificateAuthorityRequest = {}));
var DisassociateWebsiteCertificateAuthorityResponse;
(function (DisassociateWebsiteCertificateAuthorityResponse) {
    /**
     * @internal
     */
    DisassociateWebsiteCertificateAuthorityResponse.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(DisassociateWebsiteCertificateAuthorityResponse = exports.DisassociateWebsiteCertificateAuthorityResponse || (exports.DisassociateWebsiteCertificateAuthorityResponse = {}));
var DomainSummary;
(function (DomainSummary) {
    /**
     * @internal
     */
    DomainSummary.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(DomainSummary = exports.DomainSummary || (exports.DomainSummary = {}));
var FleetSummary;
(function (FleetSummary) {
    /**
     * @internal
     */
    FleetSummary.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(FleetSummary = exports.FleetSummary || (exports.FleetSummary = {}));
var ListDevicesRequest;
(function (ListDevicesRequest) {
    /**
     * @internal
     */
    ListDevicesRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(ListDevicesRequest = exports.ListDevicesRequest || (exports.ListDevicesRequest = {}));
var ListDevicesResponse;
(function (ListDevicesResponse) {
    /**
     * @internal
     */
    ListDevicesResponse.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(ListDevicesResponse = exports.ListDevicesResponse || (exports.ListDevicesResponse = {}));
var ListDomainsRequest;
(function (ListDomainsRequest) {
    /**
     * @internal
     */
    ListDomainsRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(ListDomainsRequest = exports.ListDomainsRequest || (exports.ListDomainsRequest = {}));
var ListDomainsResponse;
(function (ListDomainsResponse) {
    /**
     * @internal
     */
    ListDomainsResponse.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(ListDomainsResponse = exports.ListDomainsResponse || (exports.ListDomainsResponse = {}));
var ListFleetsRequest;
(function (ListFleetsRequest) {
    /**
     * @internal
     */
    ListFleetsRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(ListFleetsRequest = exports.ListFleetsRequest || (exports.ListFleetsRequest = {}));
var ListFleetsResponse;
(function (ListFleetsResponse) {
    /**
     * @internal
     */
    ListFleetsResponse.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(ListFleetsResponse = exports.ListFleetsResponse || (exports.ListFleetsResponse = {}));
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
var ListWebsiteAuthorizationProvidersRequest;
(function (ListWebsiteAuthorizationProvidersRequest) {
    /**
     * @internal
     */
    ListWebsiteAuthorizationProvidersRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(ListWebsiteAuthorizationProvidersRequest = exports.ListWebsiteAuthorizationProvidersRequest || (exports.ListWebsiteAuthorizationProvidersRequest = {}));
var WebsiteAuthorizationProviderSummary;
(function (WebsiteAuthorizationProviderSummary) {
    /**
     * @internal
     */
    WebsiteAuthorizationProviderSummary.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(WebsiteAuthorizationProviderSummary = exports.WebsiteAuthorizationProviderSummary || (exports.WebsiteAuthorizationProviderSummary = {}));
var ListWebsiteAuthorizationProvidersResponse;
(function (ListWebsiteAuthorizationProvidersResponse) {
    /**
     * @internal
     */
    ListWebsiteAuthorizationProvidersResponse.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(ListWebsiteAuthorizationProvidersResponse = exports.ListWebsiteAuthorizationProvidersResponse || (exports.ListWebsiteAuthorizationProvidersResponse = {}));
var ListWebsiteCertificateAuthoritiesRequest;
(function (ListWebsiteCertificateAuthoritiesRequest) {
    /**
     * @internal
     */
    ListWebsiteCertificateAuthoritiesRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(ListWebsiteCertificateAuthoritiesRequest = exports.ListWebsiteCertificateAuthoritiesRequest || (exports.ListWebsiteCertificateAuthoritiesRequest = {}));
var WebsiteCaSummary;
(function (WebsiteCaSummary) {
    /**
     * @internal
     */
    WebsiteCaSummary.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(WebsiteCaSummary = exports.WebsiteCaSummary || (exports.WebsiteCaSummary = {}));
var ListWebsiteCertificateAuthoritiesResponse;
(function (ListWebsiteCertificateAuthoritiesResponse) {
    /**
     * @internal
     */
    ListWebsiteCertificateAuthoritiesResponse.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(ListWebsiteCertificateAuthoritiesResponse = exports.ListWebsiteCertificateAuthoritiesResponse || (exports.ListWebsiteCertificateAuthoritiesResponse = {}));
var RestoreDomainAccessRequest;
(function (RestoreDomainAccessRequest) {
    /**
     * @internal
     */
    RestoreDomainAccessRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(RestoreDomainAccessRequest = exports.RestoreDomainAccessRequest || (exports.RestoreDomainAccessRequest = {}));
var RestoreDomainAccessResponse;
(function (RestoreDomainAccessResponse) {
    /**
     * @internal
     */
    RestoreDomainAccessResponse.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(RestoreDomainAccessResponse = exports.RestoreDomainAccessResponse || (exports.RestoreDomainAccessResponse = {}));
var RevokeDomainAccessRequest;
(function (RevokeDomainAccessRequest) {
    /**
     * @internal
     */
    RevokeDomainAccessRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(RevokeDomainAccessRequest = exports.RevokeDomainAccessRequest || (exports.RevokeDomainAccessRequest = {}));
var RevokeDomainAccessResponse;
(function (RevokeDomainAccessResponse) {
    /**
     * @internal
     */
    RevokeDomainAccessResponse.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(RevokeDomainAccessResponse = exports.RevokeDomainAccessResponse || (exports.RevokeDomainAccessResponse = {}));
var SignOutUserRequest;
(function (SignOutUserRequest) {
    /**
     * @internal
     */
    SignOutUserRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(SignOutUserRequest = exports.SignOutUserRequest || (exports.SignOutUserRequest = {}));
var SignOutUserResponse;
(function (SignOutUserResponse) {
    /**
     * @internal
     */
    SignOutUserResponse.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(SignOutUserResponse = exports.SignOutUserResponse || (exports.SignOutUserResponse = {}));
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
var UpdateAuditStreamConfigurationRequest;
(function (UpdateAuditStreamConfigurationRequest) {
    /**
     * @internal
     */
    UpdateAuditStreamConfigurationRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(UpdateAuditStreamConfigurationRequest = exports.UpdateAuditStreamConfigurationRequest || (exports.UpdateAuditStreamConfigurationRequest = {}));
var UpdateAuditStreamConfigurationResponse;
(function (UpdateAuditStreamConfigurationResponse) {
    /**
     * @internal
     */
    UpdateAuditStreamConfigurationResponse.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(UpdateAuditStreamConfigurationResponse = exports.UpdateAuditStreamConfigurationResponse || (exports.UpdateAuditStreamConfigurationResponse = {}));
var UpdateCompanyNetworkConfigurationRequest;
(function (UpdateCompanyNetworkConfigurationRequest) {
    /**
     * @internal
     */
    UpdateCompanyNetworkConfigurationRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(UpdateCompanyNetworkConfigurationRequest = exports.UpdateCompanyNetworkConfigurationRequest || (exports.UpdateCompanyNetworkConfigurationRequest = {}));
var UpdateCompanyNetworkConfigurationResponse;
(function (UpdateCompanyNetworkConfigurationResponse) {
    /**
     * @internal
     */
    UpdateCompanyNetworkConfigurationResponse.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(UpdateCompanyNetworkConfigurationResponse = exports.UpdateCompanyNetworkConfigurationResponse || (exports.UpdateCompanyNetworkConfigurationResponse = {}));
var UpdateDevicePolicyConfigurationRequest;
(function (UpdateDevicePolicyConfigurationRequest) {
    /**
     * @internal
     */
    UpdateDevicePolicyConfigurationRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(UpdateDevicePolicyConfigurationRequest = exports.UpdateDevicePolicyConfigurationRequest || (exports.UpdateDevicePolicyConfigurationRequest = {}));
var UpdateDevicePolicyConfigurationResponse;
(function (UpdateDevicePolicyConfigurationResponse) {
    /**
     * @internal
     */
    UpdateDevicePolicyConfigurationResponse.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(UpdateDevicePolicyConfigurationResponse = exports.UpdateDevicePolicyConfigurationResponse || (exports.UpdateDevicePolicyConfigurationResponse = {}));
var UpdateDomainMetadataRequest;
(function (UpdateDomainMetadataRequest) {
    /**
     * @internal
     */
    UpdateDomainMetadataRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(UpdateDomainMetadataRequest = exports.UpdateDomainMetadataRequest || (exports.UpdateDomainMetadataRequest = {}));
var UpdateDomainMetadataResponse;
(function (UpdateDomainMetadataResponse) {
    /**
     * @internal
     */
    UpdateDomainMetadataResponse.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(UpdateDomainMetadataResponse = exports.UpdateDomainMetadataResponse || (exports.UpdateDomainMetadataResponse = {}));
var UpdateFleetMetadataRequest;
(function (UpdateFleetMetadataRequest) {
    /**
     * @internal
     */
    UpdateFleetMetadataRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(UpdateFleetMetadataRequest = exports.UpdateFleetMetadataRequest || (exports.UpdateFleetMetadataRequest = {}));
var UpdateFleetMetadataResponse;
(function (UpdateFleetMetadataResponse) {
    /**
     * @internal
     */
    UpdateFleetMetadataResponse.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(UpdateFleetMetadataResponse = exports.UpdateFleetMetadataResponse || (exports.UpdateFleetMetadataResponse = {}));
var UpdateIdentityProviderConfigurationRequest;
(function (UpdateIdentityProviderConfigurationRequest) {
    /**
     * @internal
     */
    UpdateIdentityProviderConfigurationRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(UpdateIdentityProviderConfigurationRequest = exports.UpdateIdentityProviderConfigurationRequest || (exports.UpdateIdentityProviderConfigurationRequest = {}));
var UpdateIdentityProviderConfigurationResponse;
(function (UpdateIdentityProviderConfigurationResponse) {
    /**
     * @internal
     */
    UpdateIdentityProviderConfigurationResponse.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(UpdateIdentityProviderConfigurationResponse = exports.UpdateIdentityProviderConfigurationResponse || (exports.UpdateIdentityProviderConfigurationResponse = {}));
//# sourceMappingURL=models_0.js.map