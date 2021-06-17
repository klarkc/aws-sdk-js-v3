"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.HealthCheckProtocol = exports.EndpointConfiguration = exports.CreateCustomRoutingListenerResponse = exports.CustomRoutingListener = exports.CreateCustomRoutingListenerRequest = exports.PortRange = exports.ListenerNotFoundException = exports.InvalidPortRangeException = exports.EndpointGroupAlreadyExistsException = exports.CreateCustomRoutingEndpointGroupResponse = exports.CustomRoutingEndpointGroup = exports.CustomRoutingDestinationDescription = exports.Protocol = exports.CreateCustomRoutingEndpointGroupRequest = exports.CustomRoutingDestinationConfiguration = exports.CustomRoutingProtocol = exports.CreateCustomRoutingAcceleratorResponse = exports.CustomRoutingAccelerator = exports.CreateCustomRoutingAcceleratorRequest = exports.CreateAcceleratorResponse = exports.CreateAcceleratorRequest = exports.Tag = exports.CidrAuthorizationContext = exports.AssociatedListenerFoundException = exports.AssociatedEndpointGroupFoundException = exports.AllowCustomRoutingTrafficRequest = exports.IncorrectCidrStateException = exports.ByoipCidrNotFoundException = exports.AdvertiseByoipCidrResponse = exports.ByoipCidr = exports.ByoipCidrState = exports.ByoipCidrEvent = exports.AdvertiseByoipCidrRequest = exports.LimitExceededException = exports.InvalidArgumentException = exports.InternalServiceErrorException = exports.EndpointGroupNotFoundException = exports.EndpointAlreadyExistsException = exports.ConflictException = exports.AddCustomRoutingEndpointsResponse = exports.CustomRoutingEndpointDescription = exports.AddCustomRoutingEndpointsRequest = exports.CustomRoutingEndpointConfiguration = exports.AccessDeniedException = exports.AcceleratorNotFoundException = exports.AcceleratorNotDisabledException = exports.AcceleratorAttributes = exports.Accelerator = exports.IpSet = exports.IpAddressType = void 0;
exports.ListCustomRoutingPortMappingsRequest = exports.ListCustomRoutingListenersResponse = exports.ListCustomRoutingListenersRequest = exports.ListCustomRoutingEndpointGroupsResponse = exports.ListCustomRoutingEndpointGroupsRequest = exports.ListCustomRoutingAcceleratorsResponse = exports.ListCustomRoutingAcceleratorsRequest = exports.ListByoipCidrsResponse = exports.ListByoipCidrsRequest = exports.ListAcceleratorsResponse = exports.ListAcceleratorsRequest = exports.InvalidNextTokenException = exports.EndpointNotFoundException = exports.DestinationPortMapping = exports.SocketAddress = exports.DescribeListenerResponse = exports.DescribeListenerRequest = exports.DescribeEndpointGroupResponse = exports.DescribeEndpointGroupRequest = exports.DescribeCustomRoutingListenerResponse = exports.DescribeCustomRoutingListenerRequest = exports.DescribeCustomRoutingEndpointGroupResponse = exports.DescribeCustomRoutingEndpointGroupRequest = exports.DescribeCustomRoutingAcceleratorAttributesResponse = exports.DescribeCustomRoutingAcceleratorAttributesRequest = exports.DescribeCustomRoutingAcceleratorResponse = exports.DescribeCustomRoutingAcceleratorRequest = exports.DescribeAcceleratorAttributesResponse = exports.DescribeAcceleratorAttributesRequest = exports.DescribeAcceleratorResponse = exports.DescribeAcceleratorRequest = exports.DeprovisionByoipCidrResponse = exports.DeprovisionByoipCidrRequest = exports.DenyCustomRoutingTrafficRequest = exports.DeleteListenerRequest = exports.DeleteEndpointGroupRequest = exports.DeleteCustomRoutingListenerRequest = exports.DeleteCustomRoutingEndpointGroupRequest = exports.DeleteCustomRoutingAcceleratorRequest = exports.DeleteAcceleratorRequest = exports.CustomRoutingDestinationTrafficState = exports.CustomRoutingAcceleratorAttributes = exports.CreateListenerResponse = exports.Listener = exports.CreateListenerRequest = exports.CreateEndpointGroupResponse = exports.EndpointGroup = exports.EndpointDescription = exports.CreateEndpointGroupRequest = exports.PortOverride = void 0;
exports.WithdrawByoipCidrResponse = exports.WithdrawByoipCidrRequest = exports.UpdateListenerResponse = exports.UpdateListenerRequest = exports.UpdateEndpointGroupResponse = exports.UpdateEndpointGroupRequest = exports.UpdateCustomRoutingListenerResponse = exports.UpdateCustomRoutingListenerRequest = exports.UpdateCustomRoutingAcceleratorAttributesResponse = exports.UpdateCustomRoutingAcceleratorAttributesRequest = exports.UpdateCustomRoutingAcceleratorResponse = exports.UpdateCustomRoutingAcceleratorRequest = exports.UpdateAcceleratorAttributesResponse = exports.UpdateAcceleratorAttributesRequest = exports.UpdateAcceleratorResponse = exports.UpdateAcceleratorRequest = exports.UntagResourceResponse = exports.UntagResourceRequest = exports.TagResourceResponse = exports.TagResourceRequest = exports.RemoveCustomRoutingEndpointsRequest = exports.ProvisionByoipCidrResponse = exports.ProvisionByoipCidrRequest = exports.ListTagsForResourceResponse = exports.ListTagsForResourceRequest = exports.ListListenersResponse = exports.ListListenersRequest = exports.ListEndpointGroupsResponse = exports.ListEndpointGroupsRequest = exports.ListCustomRoutingPortMappingsByDestinationResponse = exports.ListCustomRoutingPortMappingsByDestinationRequest = exports.ListCustomRoutingPortMappingsResponse = exports.PortMapping = void 0;
var IpAddressType;
(function (IpAddressType) {
    IpAddressType["IPV4"] = "IPV4";
})(IpAddressType = exports.IpAddressType || (exports.IpAddressType = {}));
var IpSet;
(function (IpSet) {
    /**
     * @internal
     */
    IpSet.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(IpSet = exports.IpSet || (exports.IpSet = {}));
var Accelerator;
(function (Accelerator) {
    /**
     * @internal
     */
    Accelerator.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(Accelerator = exports.Accelerator || (exports.Accelerator = {}));
var AcceleratorAttributes;
(function (AcceleratorAttributes) {
    /**
     * @internal
     */
    AcceleratorAttributes.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(AcceleratorAttributes = exports.AcceleratorAttributes || (exports.AcceleratorAttributes = {}));
var AcceleratorNotDisabledException;
(function (AcceleratorNotDisabledException) {
    /**
     * @internal
     */
    AcceleratorNotDisabledException.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(AcceleratorNotDisabledException = exports.AcceleratorNotDisabledException || (exports.AcceleratorNotDisabledException = {}));
var AcceleratorNotFoundException;
(function (AcceleratorNotFoundException) {
    /**
     * @internal
     */
    AcceleratorNotFoundException.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(AcceleratorNotFoundException = exports.AcceleratorNotFoundException || (exports.AcceleratorNotFoundException = {}));
var AccessDeniedException;
(function (AccessDeniedException) {
    /**
     * @internal
     */
    AccessDeniedException.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(AccessDeniedException = exports.AccessDeniedException || (exports.AccessDeniedException = {}));
var CustomRoutingEndpointConfiguration;
(function (CustomRoutingEndpointConfiguration) {
    /**
     * @internal
     */
    CustomRoutingEndpointConfiguration.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(CustomRoutingEndpointConfiguration = exports.CustomRoutingEndpointConfiguration || (exports.CustomRoutingEndpointConfiguration = {}));
var AddCustomRoutingEndpointsRequest;
(function (AddCustomRoutingEndpointsRequest) {
    /**
     * @internal
     */
    AddCustomRoutingEndpointsRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(AddCustomRoutingEndpointsRequest = exports.AddCustomRoutingEndpointsRequest || (exports.AddCustomRoutingEndpointsRequest = {}));
var CustomRoutingEndpointDescription;
(function (CustomRoutingEndpointDescription) {
    /**
     * @internal
     */
    CustomRoutingEndpointDescription.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(CustomRoutingEndpointDescription = exports.CustomRoutingEndpointDescription || (exports.CustomRoutingEndpointDescription = {}));
var AddCustomRoutingEndpointsResponse;
(function (AddCustomRoutingEndpointsResponse) {
    /**
     * @internal
     */
    AddCustomRoutingEndpointsResponse.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(AddCustomRoutingEndpointsResponse = exports.AddCustomRoutingEndpointsResponse || (exports.AddCustomRoutingEndpointsResponse = {}));
var ConflictException;
(function (ConflictException) {
    /**
     * @internal
     */
    ConflictException.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(ConflictException = exports.ConflictException || (exports.ConflictException = {}));
var EndpointAlreadyExistsException;
(function (EndpointAlreadyExistsException) {
    /**
     * @internal
     */
    EndpointAlreadyExistsException.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(EndpointAlreadyExistsException = exports.EndpointAlreadyExistsException || (exports.EndpointAlreadyExistsException = {}));
var EndpointGroupNotFoundException;
(function (EndpointGroupNotFoundException) {
    /**
     * @internal
     */
    EndpointGroupNotFoundException.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(EndpointGroupNotFoundException = exports.EndpointGroupNotFoundException || (exports.EndpointGroupNotFoundException = {}));
var InternalServiceErrorException;
(function (InternalServiceErrorException) {
    /**
     * @internal
     */
    InternalServiceErrorException.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(InternalServiceErrorException = exports.InternalServiceErrorException || (exports.InternalServiceErrorException = {}));
var InvalidArgumentException;
(function (InvalidArgumentException) {
    /**
     * @internal
     */
    InvalidArgumentException.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(InvalidArgumentException = exports.InvalidArgumentException || (exports.InvalidArgumentException = {}));
var LimitExceededException;
(function (LimitExceededException) {
    /**
     * @internal
     */
    LimitExceededException.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(LimitExceededException = exports.LimitExceededException || (exports.LimitExceededException = {}));
var AdvertiseByoipCidrRequest;
(function (AdvertiseByoipCidrRequest) {
    /**
     * @internal
     */
    AdvertiseByoipCidrRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(AdvertiseByoipCidrRequest = exports.AdvertiseByoipCidrRequest || (exports.AdvertiseByoipCidrRequest = {}));
var ByoipCidrEvent;
(function (ByoipCidrEvent) {
    /**
     * @internal
     */
    ByoipCidrEvent.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(ByoipCidrEvent = exports.ByoipCidrEvent || (exports.ByoipCidrEvent = {}));
var ByoipCidrState;
(function (ByoipCidrState) {
    ByoipCidrState["ADVERTISING"] = "ADVERTISING";
    ByoipCidrState["DEPROVISIONED"] = "DEPROVISIONED";
    ByoipCidrState["FAILED_ADVERTISING"] = "FAILED_ADVERTISING";
    ByoipCidrState["FAILED_DEPROVISION"] = "FAILED_DEPROVISION";
    ByoipCidrState["FAILED_PROVISION"] = "FAILED_PROVISION";
    ByoipCidrState["FAILED_WITHDRAW"] = "FAILED_WITHDRAW";
    ByoipCidrState["PENDING_ADVERTISING"] = "PENDING_ADVERTISING";
    ByoipCidrState["PENDING_DEPROVISIONING"] = "PENDING_DEPROVISIONING";
    ByoipCidrState["PENDING_PROVISIONING"] = "PENDING_PROVISIONING";
    ByoipCidrState["PENDING_WITHDRAWING"] = "PENDING_WITHDRAWING";
    ByoipCidrState["READY"] = "READY";
})(ByoipCidrState = exports.ByoipCidrState || (exports.ByoipCidrState = {}));
var ByoipCidr;
(function (ByoipCidr) {
    /**
     * @internal
     */
    ByoipCidr.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(ByoipCidr = exports.ByoipCidr || (exports.ByoipCidr = {}));
var AdvertiseByoipCidrResponse;
(function (AdvertiseByoipCidrResponse) {
    /**
     * @internal
     */
    AdvertiseByoipCidrResponse.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(AdvertiseByoipCidrResponse = exports.AdvertiseByoipCidrResponse || (exports.AdvertiseByoipCidrResponse = {}));
var ByoipCidrNotFoundException;
(function (ByoipCidrNotFoundException) {
    /**
     * @internal
     */
    ByoipCidrNotFoundException.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(ByoipCidrNotFoundException = exports.ByoipCidrNotFoundException || (exports.ByoipCidrNotFoundException = {}));
var IncorrectCidrStateException;
(function (IncorrectCidrStateException) {
    /**
     * @internal
     */
    IncorrectCidrStateException.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(IncorrectCidrStateException = exports.IncorrectCidrStateException || (exports.IncorrectCidrStateException = {}));
var AllowCustomRoutingTrafficRequest;
(function (AllowCustomRoutingTrafficRequest) {
    /**
     * @internal
     */
    AllowCustomRoutingTrafficRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(AllowCustomRoutingTrafficRequest = exports.AllowCustomRoutingTrafficRequest || (exports.AllowCustomRoutingTrafficRequest = {}));
var AssociatedEndpointGroupFoundException;
(function (AssociatedEndpointGroupFoundException) {
    /**
     * @internal
     */
    AssociatedEndpointGroupFoundException.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(AssociatedEndpointGroupFoundException = exports.AssociatedEndpointGroupFoundException || (exports.AssociatedEndpointGroupFoundException = {}));
var AssociatedListenerFoundException;
(function (AssociatedListenerFoundException) {
    /**
     * @internal
     */
    AssociatedListenerFoundException.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(AssociatedListenerFoundException = exports.AssociatedListenerFoundException || (exports.AssociatedListenerFoundException = {}));
var CidrAuthorizationContext;
(function (CidrAuthorizationContext) {
    /**
     * @internal
     */
    CidrAuthorizationContext.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(CidrAuthorizationContext = exports.CidrAuthorizationContext || (exports.CidrAuthorizationContext = {}));
var Tag;
(function (Tag) {
    /**
     * @internal
     */
    Tag.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(Tag = exports.Tag || (exports.Tag = {}));
var CreateAcceleratorRequest;
(function (CreateAcceleratorRequest) {
    /**
     * @internal
     */
    CreateAcceleratorRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(CreateAcceleratorRequest = exports.CreateAcceleratorRequest || (exports.CreateAcceleratorRequest = {}));
var CreateAcceleratorResponse;
(function (CreateAcceleratorResponse) {
    /**
     * @internal
     */
    CreateAcceleratorResponse.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(CreateAcceleratorResponse = exports.CreateAcceleratorResponse || (exports.CreateAcceleratorResponse = {}));
var CreateCustomRoutingAcceleratorRequest;
(function (CreateCustomRoutingAcceleratorRequest) {
    /**
     * @internal
     */
    CreateCustomRoutingAcceleratorRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(CreateCustomRoutingAcceleratorRequest = exports.CreateCustomRoutingAcceleratorRequest || (exports.CreateCustomRoutingAcceleratorRequest = {}));
var CustomRoutingAccelerator;
(function (CustomRoutingAccelerator) {
    /**
     * @internal
     */
    CustomRoutingAccelerator.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(CustomRoutingAccelerator = exports.CustomRoutingAccelerator || (exports.CustomRoutingAccelerator = {}));
var CreateCustomRoutingAcceleratorResponse;
(function (CreateCustomRoutingAcceleratorResponse) {
    /**
     * @internal
     */
    CreateCustomRoutingAcceleratorResponse.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(CreateCustomRoutingAcceleratorResponse = exports.CreateCustomRoutingAcceleratorResponse || (exports.CreateCustomRoutingAcceleratorResponse = {}));
var CustomRoutingProtocol;
(function (CustomRoutingProtocol) {
    CustomRoutingProtocol["TCP"] = "TCP";
    CustomRoutingProtocol["UDP"] = "UDP";
})(CustomRoutingProtocol = exports.CustomRoutingProtocol || (exports.CustomRoutingProtocol = {}));
var CustomRoutingDestinationConfiguration;
(function (CustomRoutingDestinationConfiguration) {
    /**
     * @internal
     */
    CustomRoutingDestinationConfiguration.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(CustomRoutingDestinationConfiguration = exports.CustomRoutingDestinationConfiguration || (exports.CustomRoutingDestinationConfiguration = {}));
var CreateCustomRoutingEndpointGroupRequest;
(function (CreateCustomRoutingEndpointGroupRequest) {
    /**
     * @internal
     */
    CreateCustomRoutingEndpointGroupRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(CreateCustomRoutingEndpointGroupRequest = exports.CreateCustomRoutingEndpointGroupRequest || (exports.CreateCustomRoutingEndpointGroupRequest = {}));
var Protocol;
(function (Protocol) {
    Protocol["TCP"] = "TCP";
    Protocol["UDP"] = "UDP";
})(Protocol = exports.Protocol || (exports.Protocol = {}));
var CustomRoutingDestinationDescription;
(function (CustomRoutingDestinationDescription) {
    /**
     * @internal
     */
    CustomRoutingDestinationDescription.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(CustomRoutingDestinationDescription = exports.CustomRoutingDestinationDescription || (exports.CustomRoutingDestinationDescription = {}));
var CustomRoutingEndpointGroup;
(function (CustomRoutingEndpointGroup) {
    /**
     * @internal
     */
    CustomRoutingEndpointGroup.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(CustomRoutingEndpointGroup = exports.CustomRoutingEndpointGroup || (exports.CustomRoutingEndpointGroup = {}));
var CreateCustomRoutingEndpointGroupResponse;
(function (CreateCustomRoutingEndpointGroupResponse) {
    /**
     * @internal
     */
    CreateCustomRoutingEndpointGroupResponse.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(CreateCustomRoutingEndpointGroupResponse = exports.CreateCustomRoutingEndpointGroupResponse || (exports.CreateCustomRoutingEndpointGroupResponse = {}));
var EndpointGroupAlreadyExistsException;
(function (EndpointGroupAlreadyExistsException) {
    /**
     * @internal
     */
    EndpointGroupAlreadyExistsException.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(EndpointGroupAlreadyExistsException = exports.EndpointGroupAlreadyExistsException || (exports.EndpointGroupAlreadyExistsException = {}));
var InvalidPortRangeException;
(function (InvalidPortRangeException) {
    /**
     * @internal
     */
    InvalidPortRangeException.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(InvalidPortRangeException = exports.InvalidPortRangeException || (exports.InvalidPortRangeException = {}));
var ListenerNotFoundException;
(function (ListenerNotFoundException) {
    /**
     * @internal
     */
    ListenerNotFoundException.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(ListenerNotFoundException = exports.ListenerNotFoundException || (exports.ListenerNotFoundException = {}));
var PortRange;
(function (PortRange) {
    /**
     * @internal
     */
    PortRange.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(PortRange = exports.PortRange || (exports.PortRange = {}));
var CreateCustomRoutingListenerRequest;
(function (CreateCustomRoutingListenerRequest) {
    /**
     * @internal
     */
    CreateCustomRoutingListenerRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(CreateCustomRoutingListenerRequest = exports.CreateCustomRoutingListenerRequest || (exports.CreateCustomRoutingListenerRequest = {}));
var CustomRoutingListener;
(function (CustomRoutingListener) {
    /**
     * @internal
     */
    CustomRoutingListener.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(CustomRoutingListener = exports.CustomRoutingListener || (exports.CustomRoutingListener = {}));
var CreateCustomRoutingListenerResponse;
(function (CreateCustomRoutingListenerResponse) {
    /**
     * @internal
     */
    CreateCustomRoutingListenerResponse.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(CreateCustomRoutingListenerResponse = exports.CreateCustomRoutingListenerResponse || (exports.CreateCustomRoutingListenerResponse = {}));
var EndpointConfiguration;
(function (EndpointConfiguration) {
    /**
     * @internal
     */
    EndpointConfiguration.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(EndpointConfiguration = exports.EndpointConfiguration || (exports.EndpointConfiguration = {}));
var HealthCheckProtocol;
(function (HealthCheckProtocol) {
    HealthCheckProtocol["HTTP"] = "HTTP";
    HealthCheckProtocol["HTTPS"] = "HTTPS";
    HealthCheckProtocol["TCP"] = "TCP";
})(HealthCheckProtocol = exports.HealthCheckProtocol || (exports.HealthCheckProtocol = {}));
var PortOverride;
(function (PortOverride) {
    /**
     * @internal
     */
    PortOverride.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(PortOverride = exports.PortOverride || (exports.PortOverride = {}));
var CreateEndpointGroupRequest;
(function (CreateEndpointGroupRequest) {
    /**
     * @internal
     */
    CreateEndpointGroupRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(CreateEndpointGroupRequest = exports.CreateEndpointGroupRequest || (exports.CreateEndpointGroupRequest = {}));
var EndpointDescription;
(function (EndpointDescription) {
    /**
     * @internal
     */
    EndpointDescription.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(EndpointDescription = exports.EndpointDescription || (exports.EndpointDescription = {}));
var EndpointGroup;
(function (EndpointGroup) {
    /**
     * @internal
     */
    EndpointGroup.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(EndpointGroup = exports.EndpointGroup || (exports.EndpointGroup = {}));
var CreateEndpointGroupResponse;
(function (CreateEndpointGroupResponse) {
    /**
     * @internal
     */
    CreateEndpointGroupResponse.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(CreateEndpointGroupResponse = exports.CreateEndpointGroupResponse || (exports.CreateEndpointGroupResponse = {}));
var CreateListenerRequest;
(function (CreateListenerRequest) {
    /**
     * @internal
     */
    CreateListenerRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(CreateListenerRequest = exports.CreateListenerRequest || (exports.CreateListenerRequest = {}));
var Listener;
(function (Listener) {
    /**
     * @internal
     */
    Listener.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(Listener = exports.Listener || (exports.Listener = {}));
var CreateListenerResponse;
(function (CreateListenerResponse) {
    /**
     * @internal
     */
    CreateListenerResponse.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(CreateListenerResponse = exports.CreateListenerResponse || (exports.CreateListenerResponse = {}));
var CustomRoutingAcceleratorAttributes;
(function (CustomRoutingAcceleratorAttributes) {
    /**
     * @internal
     */
    CustomRoutingAcceleratorAttributes.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(CustomRoutingAcceleratorAttributes = exports.CustomRoutingAcceleratorAttributes || (exports.CustomRoutingAcceleratorAttributes = {}));
var CustomRoutingDestinationTrafficState;
(function (CustomRoutingDestinationTrafficState) {
    CustomRoutingDestinationTrafficState["ALLOW"] = "ALLOW";
    CustomRoutingDestinationTrafficState["DENY"] = "DENY";
})(CustomRoutingDestinationTrafficState = exports.CustomRoutingDestinationTrafficState || (exports.CustomRoutingDestinationTrafficState = {}));
var DeleteAcceleratorRequest;
(function (DeleteAcceleratorRequest) {
    /**
     * @internal
     */
    DeleteAcceleratorRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(DeleteAcceleratorRequest = exports.DeleteAcceleratorRequest || (exports.DeleteAcceleratorRequest = {}));
var DeleteCustomRoutingAcceleratorRequest;
(function (DeleteCustomRoutingAcceleratorRequest) {
    /**
     * @internal
     */
    DeleteCustomRoutingAcceleratorRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(DeleteCustomRoutingAcceleratorRequest = exports.DeleteCustomRoutingAcceleratorRequest || (exports.DeleteCustomRoutingAcceleratorRequest = {}));
var DeleteCustomRoutingEndpointGroupRequest;
(function (DeleteCustomRoutingEndpointGroupRequest) {
    /**
     * @internal
     */
    DeleteCustomRoutingEndpointGroupRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(DeleteCustomRoutingEndpointGroupRequest = exports.DeleteCustomRoutingEndpointGroupRequest || (exports.DeleteCustomRoutingEndpointGroupRequest = {}));
var DeleteCustomRoutingListenerRequest;
(function (DeleteCustomRoutingListenerRequest) {
    /**
     * @internal
     */
    DeleteCustomRoutingListenerRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(DeleteCustomRoutingListenerRequest = exports.DeleteCustomRoutingListenerRequest || (exports.DeleteCustomRoutingListenerRequest = {}));
var DeleteEndpointGroupRequest;
(function (DeleteEndpointGroupRequest) {
    /**
     * @internal
     */
    DeleteEndpointGroupRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(DeleteEndpointGroupRequest = exports.DeleteEndpointGroupRequest || (exports.DeleteEndpointGroupRequest = {}));
var DeleteListenerRequest;
(function (DeleteListenerRequest) {
    /**
     * @internal
     */
    DeleteListenerRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(DeleteListenerRequest = exports.DeleteListenerRequest || (exports.DeleteListenerRequest = {}));
var DenyCustomRoutingTrafficRequest;
(function (DenyCustomRoutingTrafficRequest) {
    /**
     * @internal
     */
    DenyCustomRoutingTrafficRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(DenyCustomRoutingTrafficRequest = exports.DenyCustomRoutingTrafficRequest || (exports.DenyCustomRoutingTrafficRequest = {}));
var DeprovisionByoipCidrRequest;
(function (DeprovisionByoipCidrRequest) {
    /**
     * @internal
     */
    DeprovisionByoipCidrRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(DeprovisionByoipCidrRequest = exports.DeprovisionByoipCidrRequest || (exports.DeprovisionByoipCidrRequest = {}));
var DeprovisionByoipCidrResponse;
(function (DeprovisionByoipCidrResponse) {
    /**
     * @internal
     */
    DeprovisionByoipCidrResponse.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(DeprovisionByoipCidrResponse = exports.DeprovisionByoipCidrResponse || (exports.DeprovisionByoipCidrResponse = {}));
var DescribeAcceleratorRequest;
(function (DescribeAcceleratorRequest) {
    /**
     * @internal
     */
    DescribeAcceleratorRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(DescribeAcceleratorRequest = exports.DescribeAcceleratorRequest || (exports.DescribeAcceleratorRequest = {}));
var DescribeAcceleratorResponse;
(function (DescribeAcceleratorResponse) {
    /**
     * @internal
     */
    DescribeAcceleratorResponse.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(DescribeAcceleratorResponse = exports.DescribeAcceleratorResponse || (exports.DescribeAcceleratorResponse = {}));
var DescribeAcceleratorAttributesRequest;
(function (DescribeAcceleratorAttributesRequest) {
    /**
     * @internal
     */
    DescribeAcceleratorAttributesRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(DescribeAcceleratorAttributesRequest = exports.DescribeAcceleratorAttributesRequest || (exports.DescribeAcceleratorAttributesRequest = {}));
var DescribeAcceleratorAttributesResponse;
(function (DescribeAcceleratorAttributesResponse) {
    /**
     * @internal
     */
    DescribeAcceleratorAttributesResponse.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(DescribeAcceleratorAttributesResponse = exports.DescribeAcceleratorAttributesResponse || (exports.DescribeAcceleratorAttributesResponse = {}));
var DescribeCustomRoutingAcceleratorRequest;
(function (DescribeCustomRoutingAcceleratorRequest) {
    /**
     * @internal
     */
    DescribeCustomRoutingAcceleratorRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(DescribeCustomRoutingAcceleratorRequest = exports.DescribeCustomRoutingAcceleratorRequest || (exports.DescribeCustomRoutingAcceleratorRequest = {}));
var DescribeCustomRoutingAcceleratorResponse;
(function (DescribeCustomRoutingAcceleratorResponse) {
    /**
     * @internal
     */
    DescribeCustomRoutingAcceleratorResponse.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(DescribeCustomRoutingAcceleratorResponse = exports.DescribeCustomRoutingAcceleratorResponse || (exports.DescribeCustomRoutingAcceleratorResponse = {}));
var DescribeCustomRoutingAcceleratorAttributesRequest;
(function (DescribeCustomRoutingAcceleratorAttributesRequest) {
    /**
     * @internal
     */
    DescribeCustomRoutingAcceleratorAttributesRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(DescribeCustomRoutingAcceleratorAttributesRequest = exports.DescribeCustomRoutingAcceleratorAttributesRequest || (exports.DescribeCustomRoutingAcceleratorAttributesRequest = {}));
var DescribeCustomRoutingAcceleratorAttributesResponse;
(function (DescribeCustomRoutingAcceleratorAttributesResponse) {
    /**
     * @internal
     */
    DescribeCustomRoutingAcceleratorAttributesResponse.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(DescribeCustomRoutingAcceleratorAttributesResponse = exports.DescribeCustomRoutingAcceleratorAttributesResponse || (exports.DescribeCustomRoutingAcceleratorAttributesResponse = {}));
var DescribeCustomRoutingEndpointGroupRequest;
(function (DescribeCustomRoutingEndpointGroupRequest) {
    /**
     * @internal
     */
    DescribeCustomRoutingEndpointGroupRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(DescribeCustomRoutingEndpointGroupRequest = exports.DescribeCustomRoutingEndpointGroupRequest || (exports.DescribeCustomRoutingEndpointGroupRequest = {}));
var DescribeCustomRoutingEndpointGroupResponse;
(function (DescribeCustomRoutingEndpointGroupResponse) {
    /**
     * @internal
     */
    DescribeCustomRoutingEndpointGroupResponse.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(DescribeCustomRoutingEndpointGroupResponse = exports.DescribeCustomRoutingEndpointGroupResponse || (exports.DescribeCustomRoutingEndpointGroupResponse = {}));
var DescribeCustomRoutingListenerRequest;
(function (DescribeCustomRoutingListenerRequest) {
    /**
     * @internal
     */
    DescribeCustomRoutingListenerRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(DescribeCustomRoutingListenerRequest = exports.DescribeCustomRoutingListenerRequest || (exports.DescribeCustomRoutingListenerRequest = {}));
var DescribeCustomRoutingListenerResponse;
(function (DescribeCustomRoutingListenerResponse) {
    /**
     * @internal
     */
    DescribeCustomRoutingListenerResponse.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(DescribeCustomRoutingListenerResponse = exports.DescribeCustomRoutingListenerResponse || (exports.DescribeCustomRoutingListenerResponse = {}));
var DescribeEndpointGroupRequest;
(function (DescribeEndpointGroupRequest) {
    /**
     * @internal
     */
    DescribeEndpointGroupRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(DescribeEndpointGroupRequest = exports.DescribeEndpointGroupRequest || (exports.DescribeEndpointGroupRequest = {}));
var DescribeEndpointGroupResponse;
(function (DescribeEndpointGroupResponse) {
    /**
     * @internal
     */
    DescribeEndpointGroupResponse.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(DescribeEndpointGroupResponse = exports.DescribeEndpointGroupResponse || (exports.DescribeEndpointGroupResponse = {}));
var DescribeListenerRequest;
(function (DescribeListenerRequest) {
    /**
     * @internal
     */
    DescribeListenerRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(DescribeListenerRequest = exports.DescribeListenerRequest || (exports.DescribeListenerRequest = {}));
var DescribeListenerResponse;
(function (DescribeListenerResponse) {
    /**
     * @internal
     */
    DescribeListenerResponse.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(DescribeListenerResponse = exports.DescribeListenerResponse || (exports.DescribeListenerResponse = {}));
var SocketAddress;
(function (SocketAddress) {
    /**
     * @internal
     */
    SocketAddress.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(SocketAddress = exports.SocketAddress || (exports.SocketAddress = {}));
var DestinationPortMapping;
(function (DestinationPortMapping) {
    /**
     * @internal
     */
    DestinationPortMapping.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(DestinationPortMapping = exports.DestinationPortMapping || (exports.DestinationPortMapping = {}));
var EndpointNotFoundException;
(function (EndpointNotFoundException) {
    /**
     * @internal
     */
    EndpointNotFoundException.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(EndpointNotFoundException = exports.EndpointNotFoundException || (exports.EndpointNotFoundException = {}));
var InvalidNextTokenException;
(function (InvalidNextTokenException) {
    /**
     * @internal
     */
    InvalidNextTokenException.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(InvalidNextTokenException = exports.InvalidNextTokenException || (exports.InvalidNextTokenException = {}));
var ListAcceleratorsRequest;
(function (ListAcceleratorsRequest) {
    /**
     * @internal
     */
    ListAcceleratorsRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(ListAcceleratorsRequest = exports.ListAcceleratorsRequest || (exports.ListAcceleratorsRequest = {}));
var ListAcceleratorsResponse;
(function (ListAcceleratorsResponse) {
    /**
     * @internal
     */
    ListAcceleratorsResponse.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(ListAcceleratorsResponse = exports.ListAcceleratorsResponse || (exports.ListAcceleratorsResponse = {}));
var ListByoipCidrsRequest;
(function (ListByoipCidrsRequest) {
    /**
     * @internal
     */
    ListByoipCidrsRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(ListByoipCidrsRequest = exports.ListByoipCidrsRequest || (exports.ListByoipCidrsRequest = {}));
var ListByoipCidrsResponse;
(function (ListByoipCidrsResponse) {
    /**
     * @internal
     */
    ListByoipCidrsResponse.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(ListByoipCidrsResponse = exports.ListByoipCidrsResponse || (exports.ListByoipCidrsResponse = {}));
var ListCustomRoutingAcceleratorsRequest;
(function (ListCustomRoutingAcceleratorsRequest) {
    /**
     * @internal
     */
    ListCustomRoutingAcceleratorsRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(ListCustomRoutingAcceleratorsRequest = exports.ListCustomRoutingAcceleratorsRequest || (exports.ListCustomRoutingAcceleratorsRequest = {}));
var ListCustomRoutingAcceleratorsResponse;
(function (ListCustomRoutingAcceleratorsResponse) {
    /**
     * @internal
     */
    ListCustomRoutingAcceleratorsResponse.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(ListCustomRoutingAcceleratorsResponse = exports.ListCustomRoutingAcceleratorsResponse || (exports.ListCustomRoutingAcceleratorsResponse = {}));
var ListCustomRoutingEndpointGroupsRequest;
(function (ListCustomRoutingEndpointGroupsRequest) {
    /**
     * @internal
     */
    ListCustomRoutingEndpointGroupsRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(ListCustomRoutingEndpointGroupsRequest = exports.ListCustomRoutingEndpointGroupsRequest || (exports.ListCustomRoutingEndpointGroupsRequest = {}));
var ListCustomRoutingEndpointGroupsResponse;
(function (ListCustomRoutingEndpointGroupsResponse) {
    /**
     * @internal
     */
    ListCustomRoutingEndpointGroupsResponse.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(ListCustomRoutingEndpointGroupsResponse = exports.ListCustomRoutingEndpointGroupsResponse || (exports.ListCustomRoutingEndpointGroupsResponse = {}));
var ListCustomRoutingListenersRequest;
(function (ListCustomRoutingListenersRequest) {
    /**
     * @internal
     */
    ListCustomRoutingListenersRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(ListCustomRoutingListenersRequest = exports.ListCustomRoutingListenersRequest || (exports.ListCustomRoutingListenersRequest = {}));
var ListCustomRoutingListenersResponse;
(function (ListCustomRoutingListenersResponse) {
    /**
     * @internal
     */
    ListCustomRoutingListenersResponse.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(ListCustomRoutingListenersResponse = exports.ListCustomRoutingListenersResponse || (exports.ListCustomRoutingListenersResponse = {}));
var ListCustomRoutingPortMappingsRequest;
(function (ListCustomRoutingPortMappingsRequest) {
    /**
     * @internal
     */
    ListCustomRoutingPortMappingsRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(ListCustomRoutingPortMappingsRequest = exports.ListCustomRoutingPortMappingsRequest || (exports.ListCustomRoutingPortMappingsRequest = {}));
var PortMapping;
(function (PortMapping) {
    /**
     * @internal
     */
    PortMapping.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(PortMapping = exports.PortMapping || (exports.PortMapping = {}));
var ListCustomRoutingPortMappingsResponse;
(function (ListCustomRoutingPortMappingsResponse) {
    /**
     * @internal
     */
    ListCustomRoutingPortMappingsResponse.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(ListCustomRoutingPortMappingsResponse = exports.ListCustomRoutingPortMappingsResponse || (exports.ListCustomRoutingPortMappingsResponse = {}));
var ListCustomRoutingPortMappingsByDestinationRequest;
(function (ListCustomRoutingPortMappingsByDestinationRequest) {
    /**
     * @internal
     */
    ListCustomRoutingPortMappingsByDestinationRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(ListCustomRoutingPortMappingsByDestinationRequest = exports.ListCustomRoutingPortMappingsByDestinationRequest || (exports.ListCustomRoutingPortMappingsByDestinationRequest = {}));
var ListCustomRoutingPortMappingsByDestinationResponse;
(function (ListCustomRoutingPortMappingsByDestinationResponse) {
    /**
     * @internal
     */
    ListCustomRoutingPortMappingsByDestinationResponse.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(ListCustomRoutingPortMappingsByDestinationResponse = exports.ListCustomRoutingPortMappingsByDestinationResponse || (exports.ListCustomRoutingPortMappingsByDestinationResponse = {}));
var ListEndpointGroupsRequest;
(function (ListEndpointGroupsRequest) {
    /**
     * @internal
     */
    ListEndpointGroupsRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(ListEndpointGroupsRequest = exports.ListEndpointGroupsRequest || (exports.ListEndpointGroupsRequest = {}));
var ListEndpointGroupsResponse;
(function (ListEndpointGroupsResponse) {
    /**
     * @internal
     */
    ListEndpointGroupsResponse.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(ListEndpointGroupsResponse = exports.ListEndpointGroupsResponse || (exports.ListEndpointGroupsResponse = {}));
var ListListenersRequest;
(function (ListListenersRequest) {
    /**
     * @internal
     */
    ListListenersRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(ListListenersRequest = exports.ListListenersRequest || (exports.ListListenersRequest = {}));
var ListListenersResponse;
(function (ListListenersResponse) {
    /**
     * @internal
     */
    ListListenersResponse.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(ListListenersResponse = exports.ListListenersResponse || (exports.ListListenersResponse = {}));
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
var ProvisionByoipCidrRequest;
(function (ProvisionByoipCidrRequest) {
    /**
     * @internal
     */
    ProvisionByoipCidrRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(ProvisionByoipCidrRequest = exports.ProvisionByoipCidrRequest || (exports.ProvisionByoipCidrRequest = {}));
var ProvisionByoipCidrResponse;
(function (ProvisionByoipCidrResponse) {
    /**
     * @internal
     */
    ProvisionByoipCidrResponse.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(ProvisionByoipCidrResponse = exports.ProvisionByoipCidrResponse || (exports.ProvisionByoipCidrResponse = {}));
var RemoveCustomRoutingEndpointsRequest;
(function (RemoveCustomRoutingEndpointsRequest) {
    /**
     * @internal
     */
    RemoveCustomRoutingEndpointsRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(RemoveCustomRoutingEndpointsRequest = exports.RemoveCustomRoutingEndpointsRequest || (exports.RemoveCustomRoutingEndpointsRequest = {}));
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
var UpdateAcceleratorRequest;
(function (UpdateAcceleratorRequest) {
    /**
     * @internal
     */
    UpdateAcceleratorRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(UpdateAcceleratorRequest = exports.UpdateAcceleratorRequest || (exports.UpdateAcceleratorRequest = {}));
var UpdateAcceleratorResponse;
(function (UpdateAcceleratorResponse) {
    /**
     * @internal
     */
    UpdateAcceleratorResponse.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(UpdateAcceleratorResponse = exports.UpdateAcceleratorResponse || (exports.UpdateAcceleratorResponse = {}));
var UpdateAcceleratorAttributesRequest;
(function (UpdateAcceleratorAttributesRequest) {
    /**
     * @internal
     */
    UpdateAcceleratorAttributesRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(UpdateAcceleratorAttributesRequest = exports.UpdateAcceleratorAttributesRequest || (exports.UpdateAcceleratorAttributesRequest = {}));
var UpdateAcceleratorAttributesResponse;
(function (UpdateAcceleratorAttributesResponse) {
    /**
     * @internal
     */
    UpdateAcceleratorAttributesResponse.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(UpdateAcceleratorAttributesResponse = exports.UpdateAcceleratorAttributesResponse || (exports.UpdateAcceleratorAttributesResponse = {}));
var UpdateCustomRoutingAcceleratorRequest;
(function (UpdateCustomRoutingAcceleratorRequest) {
    /**
     * @internal
     */
    UpdateCustomRoutingAcceleratorRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(UpdateCustomRoutingAcceleratorRequest = exports.UpdateCustomRoutingAcceleratorRequest || (exports.UpdateCustomRoutingAcceleratorRequest = {}));
var UpdateCustomRoutingAcceleratorResponse;
(function (UpdateCustomRoutingAcceleratorResponse) {
    /**
     * @internal
     */
    UpdateCustomRoutingAcceleratorResponse.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(UpdateCustomRoutingAcceleratorResponse = exports.UpdateCustomRoutingAcceleratorResponse || (exports.UpdateCustomRoutingAcceleratorResponse = {}));
var UpdateCustomRoutingAcceleratorAttributesRequest;
(function (UpdateCustomRoutingAcceleratorAttributesRequest) {
    /**
     * @internal
     */
    UpdateCustomRoutingAcceleratorAttributesRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(UpdateCustomRoutingAcceleratorAttributesRequest = exports.UpdateCustomRoutingAcceleratorAttributesRequest || (exports.UpdateCustomRoutingAcceleratorAttributesRequest = {}));
var UpdateCustomRoutingAcceleratorAttributesResponse;
(function (UpdateCustomRoutingAcceleratorAttributesResponse) {
    /**
     * @internal
     */
    UpdateCustomRoutingAcceleratorAttributesResponse.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(UpdateCustomRoutingAcceleratorAttributesResponse = exports.UpdateCustomRoutingAcceleratorAttributesResponse || (exports.UpdateCustomRoutingAcceleratorAttributesResponse = {}));
var UpdateCustomRoutingListenerRequest;
(function (UpdateCustomRoutingListenerRequest) {
    /**
     * @internal
     */
    UpdateCustomRoutingListenerRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(UpdateCustomRoutingListenerRequest = exports.UpdateCustomRoutingListenerRequest || (exports.UpdateCustomRoutingListenerRequest = {}));
var UpdateCustomRoutingListenerResponse;
(function (UpdateCustomRoutingListenerResponse) {
    /**
     * @internal
     */
    UpdateCustomRoutingListenerResponse.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(UpdateCustomRoutingListenerResponse = exports.UpdateCustomRoutingListenerResponse || (exports.UpdateCustomRoutingListenerResponse = {}));
var UpdateEndpointGroupRequest;
(function (UpdateEndpointGroupRequest) {
    /**
     * @internal
     */
    UpdateEndpointGroupRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(UpdateEndpointGroupRequest = exports.UpdateEndpointGroupRequest || (exports.UpdateEndpointGroupRequest = {}));
var UpdateEndpointGroupResponse;
(function (UpdateEndpointGroupResponse) {
    /**
     * @internal
     */
    UpdateEndpointGroupResponse.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(UpdateEndpointGroupResponse = exports.UpdateEndpointGroupResponse || (exports.UpdateEndpointGroupResponse = {}));
var UpdateListenerRequest;
(function (UpdateListenerRequest) {
    /**
     * @internal
     */
    UpdateListenerRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(UpdateListenerRequest = exports.UpdateListenerRequest || (exports.UpdateListenerRequest = {}));
var UpdateListenerResponse;
(function (UpdateListenerResponse) {
    /**
     * @internal
     */
    UpdateListenerResponse.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(UpdateListenerResponse = exports.UpdateListenerResponse || (exports.UpdateListenerResponse = {}));
var WithdrawByoipCidrRequest;
(function (WithdrawByoipCidrRequest) {
    /**
     * @internal
     */
    WithdrawByoipCidrRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(WithdrawByoipCidrRequest = exports.WithdrawByoipCidrRequest || (exports.WithdrawByoipCidrRequest = {}));
var WithdrawByoipCidrResponse;
(function (WithdrawByoipCidrResponse) {
    /**
     * @internal
     */
    WithdrawByoipCidrResponse.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(WithdrawByoipCidrResponse = exports.WithdrawByoipCidrResponse || (exports.WithdrawByoipCidrResponse = {}));
//# sourceMappingURL=models_0.js.map