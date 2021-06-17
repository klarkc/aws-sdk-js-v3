"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreateManagedPrefixListResult = exports.ManagedPrefixList = exports.CreateManagedPrefixListRequest = exports.CreateLocalGatewayRouteTableVpcAssociationResult = exports.LocalGatewayRouteTableVpcAssociation = exports.CreateLocalGatewayRouteTableVpcAssociationRequest = exports.CreateLocalGatewayRouteResult = exports.LocalGatewayRoute = exports.CreateLocalGatewayRouteRequest = exports.CreateLaunchTemplateVersionResult = exports.LaunchTemplateVersion = exports.ResponseLaunchTemplateData = exports.LaunchTemplateTagSpecification = exports.LaunchTemplatePlacement = exports.LaunchTemplateInstanceNetworkInterfaceSpecification = exports.InstanceIpv6Address = exports.LaunchTemplatesMonitoring = exports.LaunchTemplateInstanceMetadataOptions = exports.LaunchTemplateLicenseConfiguration = exports.LaunchTemplateInstanceMarketOptions = exports.LaunchTemplateSpotMarketOptions = exports.LaunchTemplateIamInstanceProfileSpecification = exports.LaunchTemplateHibernationOptions = exports.LaunchTemplateEnclaveOptions = exports.LaunchTemplateElasticInferenceAcceleratorResponse = exports.ElasticGpuSpecificationResponse = exports.CreditSpecification = exports.LaunchTemplateCpuOptions = exports.LaunchTemplateCapacityReservationSpecificationResponse = exports.CapacityReservationTargetResponse = exports.LaunchTemplateBlockDeviceMapping = exports.LaunchTemplateEbsBlockDevice = exports.CreateLaunchTemplateVersionRequest = exports.CreateLaunchTemplateResult = exports.ValidationWarning = exports.ValidationError = exports.LaunchTemplate = exports.CreateLaunchTemplateRequest = exports.RequestLaunchTemplateData = exports.LaunchTemplateTagSpecificationRequest = exports.LaunchTemplatePlacementRequest = exports.LaunchTemplateInstanceNetworkInterfaceSpecificationRequest = exports.PrivateIpAddressSpecification = exports.InstanceIpv6AddressRequest = exports.LaunchTemplatesMonitoringRequest = exports.LaunchTemplateInstanceMetadataOptionsRequest = exports.LaunchTemplateHttpTokensState = exports.LaunchTemplateLicenseConfigurationRequest = exports.LaunchTemplateInstanceMarketOptionsRequest = exports.LaunchTemplateSpotMarketOptionsRequest = void 0;
exports.CreateSecurityGroupRequest = exports.CreateRouteTableResult = exports.RouteTable = exports.Route = exports.PropagatingVgw = exports.RouteTableAssociation = exports.CreateRouteTableRequest = exports.CreateRouteResult = exports.CreateRouteRequest = exports.CreateRestoreImageTaskResult = exports.CreateRestoreImageTaskRequest = exports.CreateReservedInstancesListingResult = exports.CreateReservedInstancesListingRequest = exports.PriceScheduleSpecification = exports.CreateReplaceRootVolumeTaskResult = exports.ReplaceRootVolumeTask = exports.ReplaceRootVolumeTaskState = exports.CreateReplaceRootVolumeTaskRequest = exports.CreatePlacementGroupResult = exports.PlacementGroup = exports.CreatePlacementGroupRequest = exports.CreateNetworkInterfacePermissionResult = exports.NetworkInterfacePermission = exports.NetworkInterfacePermissionState = exports.CreateNetworkInterfacePermissionRequest = exports.CreateNetworkInterfaceResult = exports.NetworkInterface = exports.NetworkInterfacePrivateIpAddress = exports.NetworkInterfaceIpv6Address = exports.GroupIdentifier = exports.NetworkInterfaceAttachment = exports.NetworkInterfaceAssociation = exports.CreateNetworkInterfaceRequest = exports.CreateNetworkInsightsPathResult = exports.NetworkInsightsPath = exports.CreateNetworkInsightsPathRequest = exports.CreateNetworkAclEntryRequest = exports.CreateNetworkAclResult = exports.NetworkAcl = exports.NetworkAclEntry = exports.PortRange = exports.IcmpTypeCode = exports.NetworkAclAssociation = exports.CreateNetworkAclRequest = exports.CreateNatGatewayResult = exports.NatGateway = exports.NatGatewayState = exports.ProvisionedBandwidth = exports.NatGatewayAddress = exports.CreateNatGatewayRequest = void 0;
exports.TransitGatewayMulticastDomainOptions = exports.CreateTransitGatewayMulticastDomainRequest = exports.CreateTransitGatewayMulticastDomainRequestOptions = exports.CreateTransitGatewayConnectPeerResult = exports.TransitGatewayConnectPeer = exports.TransitGatewayConnectPeerConfiguration = exports.TransitGatewayAttachmentBgpConfiguration = exports.CreateTransitGatewayConnectPeerRequest = exports.TransitGatewayConnectRequestBgpOptions = exports.CreateTransitGatewayConnectResult = exports.TransitGatewayConnect = exports.TransitGatewayConnectOptions = exports.CreateTransitGatewayConnectRequest = exports.CreateTransitGatewayConnectRequestOptions = exports.CreateTransitGatewayResult = exports.TransitGateway = exports.TransitGatewayOptions = exports.CreateTransitGatewayRequest = exports.TransitGatewayRequestOptions = exports.CreateTrafficMirrorTargetResult = exports.TrafficMirrorTarget = exports.CreateTrafficMirrorTargetRequest = exports.CreateTrafficMirrorSessionResult = exports.TrafficMirrorSession = exports.CreateTrafficMirrorSessionRequest = exports.CreateTrafficMirrorFilterRuleResult = exports.CreateTrafficMirrorFilterRuleRequest = exports.TrafficMirrorPortRangeRequest = exports.CreateTrafficMirrorFilterResult = exports.TrafficMirrorFilter = exports.TrafficMirrorFilterRule = exports.TrafficMirrorPortRange = exports.CreateTrafficMirrorFilterRequest = exports.CreateTagsRequest = exports.CreateSubnetResult = exports.CreateSubnetRequest = exports.CreateStoreImageTaskResult = exports.CreateStoreImageTaskRequest = exports.S3ObjectTag = exports.CreateSpotDatafeedSubscriptionResult = exports.SpotDatafeedSubscription = exports.SpotInstanceStateFault = exports.CreateSpotDatafeedSubscriptionRequest = exports.CreateSnapshotsResult = exports.SnapshotInfo = exports.CreateSnapshotsRequest = exports.InstanceSpecification = exports.Snapshot = exports.CreateSnapshotRequest = exports.CreateSecurityGroupResult = void 0;
exports.Phase2DHGroupNumbersRequestListValue = exports.Phase1IntegrityAlgorithmsRequestListValue = exports.Phase1EncryptionAlgorithmsRequestListValue = exports.Phase1DHGroupNumbersRequestListValue = exports.IKEVersionsRequestListValue = exports.CreateVpcPeeringConnectionResult = exports.CreateVpcPeeringConnectionRequest = exports.CreateVpcEndpointServiceConfigurationResult = exports.ServiceConfiguration = exports.ServiceTypeDetail = exports.ServiceType = exports.ServiceState = exports.PrivateDnsNameConfiguration = exports.DnsNameState = exports.CreateVpcEndpointServiceConfigurationRequest = exports.CreateVpcEndpointConnectionNotificationResult = exports.ConnectionNotification = exports.ConnectionNotificationType = exports.ConnectionNotificationState = exports.CreateVpcEndpointConnectionNotificationRequest = exports.CreateVpcEndpointResult = exports.VpcEndpoint = exports.State = exports.LastError = exports.SecurityGroupIdentifier = exports.DnsEntry = exports.CreateVpcEndpointRequest = exports.VpcEndpointType = exports.CreateVpcResult = exports.CreateVpcRequest = exports.Volume = exports.CreateVolumeRequest = exports.CreateTransitGatewayVpcAttachmentResult = exports.CreateTransitGatewayVpcAttachmentRequest = exports.CreateTransitGatewayVpcAttachmentRequestOptions = exports.CreateTransitGatewayRouteTableResult = exports.TransitGatewayRouteTable = exports.CreateTransitGatewayRouteTableRequest = exports.CreateTransitGatewayRouteResult = exports.TransitGatewayRoute = exports.TransitGatewayRouteAttachment = exports.CreateTransitGatewayRouteRequest = exports.CreateTransitGatewayPrefixListReferenceResult = exports.TransitGatewayPrefixListReference = exports.TransitGatewayPrefixListAttachment = exports.CreateTransitGatewayPrefixListReferenceRequest = exports.CreateTransitGatewayPeeringAttachmentResult = exports.CreateTransitGatewayPeeringAttachmentRequest = exports.CreateTransitGatewayMulticastDomainResult = exports.TransitGatewayMulticastDomain = void 0;
exports.LaunchTemplateErrorCode = exports.DeleteLaunchTemplateVersionsResponseSuccessItem = exports.DeleteLaunchTemplateVersionsRequest = exports.DeleteLaunchTemplateResult = exports.DeleteLaunchTemplateRequest = exports.DeleteKeyPairRequest = exports.DeleteInternetGatewayRequest = exports.DeleteFpgaImageResult = exports.DeleteFpgaImageRequest = exports.DeleteFlowLogsResult = exports.DeleteFlowLogsRequest = exports.DeleteFleetsResult = exports.DeleteFleetErrorItem = exports.DeleteFleetError = exports.DeleteFleetErrorCode = exports.DeleteFleetSuccessItem = exports.FleetStateCode = exports.DeleteFleetsRequest = exports.DeleteEgressOnlyInternetGatewayResult = exports.DeleteEgressOnlyInternetGatewayRequest = exports.DeleteDhcpOptionsRequest = exports.DeleteCustomerGatewayRequest = exports.DeleteClientVpnRouteResult = exports.DeleteClientVpnRouteRequest = exports.DeleteClientVpnEndpointResult = exports.DeleteClientVpnEndpointRequest = exports.DeleteCarrierGatewayResult = exports.DeleteCarrierGatewayRequest = exports.CreateVpnGatewayResult = exports.VpnGateway = exports.CreateVpnGatewayRequest = exports.CreateVpnConnectionRouteRequest = exports.CreateVpnConnectionResult = exports.VpnConnection = exports.VgwTelemetry = exports.VpnStaticRoute = exports.VpnConnectionOptions = exports.TunnelOption = exports.Phase2IntegrityAlgorithmsListValue = exports.Phase2EncryptionAlgorithmsListValue = exports.Phase2DHGroupNumbersListValue = exports.Phase1IntegrityAlgorithmsListValue = exports.Phase1EncryptionAlgorithmsListValue = exports.Phase1DHGroupNumbersListValue = exports.IKEVersionsListValue = exports.CreateVpnConnectionRequest = exports.VpnConnectionOptionsSpecification = exports.VpnTunnelOptionsSpecification = exports.Phase2IntegrityAlgorithmsRequestListValue = exports.Phase2EncryptionAlgorithmsRequestListValue = void 0;
exports.DeleteLocalGatewayRouteResult = exports.DeleteLocalGatewayRouteRequest = exports.DeleteLaunchTemplateVersionsResult = exports.DeleteLaunchTemplateVersionsResponseErrorItem = exports.ResponseError = void 0;
var LaunchTemplateSpotMarketOptionsRequest;
(function (LaunchTemplateSpotMarketOptionsRequest) {
    /**
     * @internal
     */
    LaunchTemplateSpotMarketOptionsRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(LaunchTemplateSpotMarketOptionsRequest = exports.LaunchTemplateSpotMarketOptionsRequest || (exports.LaunchTemplateSpotMarketOptionsRequest = {}));
var LaunchTemplateInstanceMarketOptionsRequest;
(function (LaunchTemplateInstanceMarketOptionsRequest) {
    /**
     * @internal
     */
    LaunchTemplateInstanceMarketOptionsRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(LaunchTemplateInstanceMarketOptionsRequest = exports.LaunchTemplateInstanceMarketOptionsRequest || (exports.LaunchTemplateInstanceMarketOptionsRequest = {}));
var LaunchTemplateLicenseConfigurationRequest;
(function (LaunchTemplateLicenseConfigurationRequest) {
    /**
     * @internal
     */
    LaunchTemplateLicenseConfigurationRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(LaunchTemplateLicenseConfigurationRequest = exports.LaunchTemplateLicenseConfigurationRequest || (exports.LaunchTemplateLicenseConfigurationRequest = {}));
var LaunchTemplateHttpTokensState;
(function (LaunchTemplateHttpTokensState) {
    LaunchTemplateHttpTokensState["optional"] = "optional";
    LaunchTemplateHttpTokensState["required"] = "required";
})(LaunchTemplateHttpTokensState = exports.LaunchTemplateHttpTokensState || (exports.LaunchTemplateHttpTokensState = {}));
var LaunchTemplateInstanceMetadataOptionsRequest;
(function (LaunchTemplateInstanceMetadataOptionsRequest) {
    /**
     * @internal
     */
    LaunchTemplateInstanceMetadataOptionsRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(LaunchTemplateInstanceMetadataOptionsRequest = exports.LaunchTemplateInstanceMetadataOptionsRequest || (exports.LaunchTemplateInstanceMetadataOptionsRequest = {}));
var LaunchTemplatesMonitoringRequest;
(function (LaunchTemplatesMonitoringRequest) {
    /**
     * @internal
     */
    LaunchTemplatesMonitoringRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(LaunchTemplatesMonitoringRequest = exports.LaunchTemplatesMonitoringRequest || (exports.LaunchTemplatesMonitoringRequest = {}));
var InstanceIpv6AddressRequest;
(function (InstanceIpv6AddressRequest) {
    /**
     * @internal
     */
    InstanceIpv6AddressRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(InstanceIpv6AddressRequest = exports.InstanceIpv6AddressRequest || (exports.InstanceIpv6AddressRequest = {}));
var PrivateIpAddressSpecification;
(function (PrivateIpAddressSpecification) {
    /**
     * @internal
     */
    PrivateIpAddressSpecification.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(PrivateIpAddressSpecification = exports.PrivateIpAddressSpecification || (exports.PrivateIpAddressSpecification = {}));
var LaunchTemplateInstanceNetworkInterfaceSpecificationRequest;
(function (LaunchTemplateInstanceNetworkInterfaceSpecificationRequest) {
    /**
     * @internal
     */
    LaunchTemplateInstanceNetworkInterfaceSpecificationRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(LaunchTemplateInstanceNetworkInterfaceSpecificationRequest = exports.LaunchTemplateInstanceNetworkInterfaceSpecificationRequest || (exports.LaunchTemplateInstanceNetworkInterfaceSpecificationRequest = {}));
var LaunchTemplatePlacementRequest;
(function (LaunchTemplatePlacementRequest) {
    /**
     * @internal
     */
    LaunchTemplatePlacementRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(LaunchTemplatePlacementRequest = exports.LaunchTemplatePlacementRequest || (exports.LaunchTemplatePlacementRequest = {}));
var LaunchTemplateTagSpecificationRequest;
(function (LaunchTemplateTagSpecificationRequest) {
    /**
     * @internal
     */
    LaunchTemplateTagSpecificationRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(LaunchTemplateTagSpecificationRequest = exports.LaunchTemplateTagSpecificationRequest || (exports.LaunchTemplateTagSpecificationRequest = {}));
var RequestLaunchTemplateData;
(function (RequestLaunchTemplateData) {
    /**
     * @internal
     */
    RequestLaunchTemplateData.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(RequestLaunchTemplateData = exports.RequestLaunchTemplateData || (exports.RequestLaunchTemplateData = {}));
var CreateLaunchTemplateRequest;
(function (CreateLaunchTemplateRequest) {
    /**
     * @internal
     */
    CreateLaunchTemplateRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(CreateLaunchTemplateRequest = exports.CreateLaunchTemplateRequest || (exports.CreateLaunchTemplateRequest = {}));
var LaunchTemplate;
(function (LaunchTemplate) {
    /**
     * @internal
     */
    LaunchTemplate.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(LaunchTemplate = exports.LaunchTemplate || (exports.LaunchTemplate = {}));
var ValidationError;
(function (ValidationError) {
    /**
     * @internal
     */
    ValidationError.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(ValidationError = exports.ValidationError || (exports.ValidationError = {}));
var ValidationWarning;
(function (ValidationWarning) {
    /**
     * @internal
     */
    ValidationWarning.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(ValidationWarning = exports.ValidationWarning || (exports.ValidationWarning = {}));
var CreateLaunchTemplateResult;
(function (CreateLaunchTemplateResult) {
    /**
     * @internal
     */
    CreateLaunchTemplateResult.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(CreateLaunchTemplateResult = exports.CreateLaunchTemplateResult || (exports.CreateLaunchTemplateResult = {}));
var CreateLaunchTemplateVersionRequest;
(function (CreateLaunchTemplateVersionRequest) {
    /**
     * @internal
     */
    CreateLaunchTemplateVersionRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(CreateLaunchTemplateVersionRequest = exports.CreateLaunchTemplateVersionRequest || (exports.CreateLaunchTemplateVersionRequest = {}));
var LaunchTemplateEbsBlockDevice;
(function (LaunchTemplateEbsBlockDevice) {
    /**
     * @internal
     */
    LaunchTemplateEbsBlockDevice.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(LaunchTemplateEbsBlockDevice = exports.LaunchTemplateEbsBlockDevice || (exports.LaunchTemplateEbsBlockDevice = {}));
var LaunchTemplateBlockDeviceMapping;
(function (LaunchTemplateBlockDeviceMapping) {
    /**
     * @internal
     */
    LaunchTemplateBlockDeviceMapping.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(LaunchTemplateBlockDeviceMapping = exports.LaunchTemplateBlockDeviceMapping || (exports.LaunchTemplateBlockDeviceMapping = {}));
var CapacityReservationTargetResponse;
(function (CapacityReservationTargetResponse) {
    /**
     * @internal
     */
    CapacityReservationTargetResponse.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(CapacityReservationTargetResponse = exports.CapacityReservationTargetResponse || (exports.CapacityReservationTargetResponse = {}));
var LaunchTemplateCapacityReservationSpecificationResponse;
(function (LaunchTemplateCapacityReservationSpecificationResponse) {
    /**
     * @internal
     */
    LaunchTemplateCapacityReservationSpecificationResponse.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(LaunchTemplateCapacityReservationSpecificationResponse = exports.LaunchTemplateCapacityReservationSpecificationResponse || (exports.LaunchTemplateCapacityReservationSpecificationResponse = {}));
var LaunchTemplateCpuOptions;
(function (LaunchTemplateCpuOptions) {
    /**
     * @internal
     */
    LaunchTemplateCpuOptions.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(LaunchTemplateCpuOptions = exports.LaunchTemplateCpuOptions || (exports.LaunchTemplateCpuOptions = {}));
var CreditSpecification;
(function (CreditSpecification) {
    /**
     * @internal
     */
    CreditSpecification.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(CreditSpecification = exports.CreditSpecification || (exports.CreditSpecification = {}));
var ElasticGpuSpecificationResponse;
(function (ElasticGpuSpecificationResponse) {
    /**
     * @internal
     */
    ElasticGpuSpecificationResponse.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(ElasticGpuSpecificationResponse = exports.ElasticGpuSpecificationResponse || (exports.ElasticGpuSpecificationResponse = {}));
var LaunchTemplateElasticInferenceAcceleratorResponse;
(function (LaunchTemplateElasticInferenceAcceleratorResponse) {
    /**
     * @internal
     */
    LaunchTemplateElasticInferenceAcceleratorResponse.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(LaunchTemplateElasticInferenceAcceleratorResponse = exports.LaunchTemplateElasticInferenceAcceleratorResponse || (exports.LaunchTemplateElasticInferenceAcceleratorResponse = {}));
var LaunchTemplateEnclaveOptions;
(function (LaunchTemplateEnclaveOptions) {
    /**
     * @internal
     */
    LaunchTemplateEnclaveOptions.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(LaunchTemplateEnclaveOptions = exports.LaunchTemplateEnclaveOptions || (exports.LaunchTemplateEnclaveOptions = {}));
var LaunchTemplateHibernationOptions;
(function (LaunchTemplateHibernationOptions) {
    /**
     * @internal
     */
    LaunchTemplateHibernationOptions.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(LaunchTemplateHibernationOptions = exports.LaunchTemplateHibernationOptions || (exports.LaunchTemplateHibernationOptions = {}));
var LaunchTemplateIamInstanceProfileSpecification;
(function (LaunchTemplateIamInstanceProfileSpecification) {
    /**
     * @internal
     */
    LaunchTemplateIamInstanceProfileSpecification.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(LaunchTemplateIamInstanceProfileSpecification = exports.LaunchTemplateIamInstanceProfileSpecification || (exports.LaunchTemplateIamInstanceProfileSpecification = {}));
var LaunchTemplateSpotMarketOptions;
(function (LaunchTemplateSpotMarketOptions) {
    /**
     * @internal
     */
    LaunchTemplateSpotMarketOptions.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(LaunchTemplateSpotMarketOptions = exports.LaunchTemplateSpotMarketOptions || (exports.LaunchTemplateSpotMarketOptions = {}));
var LaunchTemplateInstanceMarketOptions;
(function (LaunchTemplateInstanceMarketOptions) {
    /**
     * @internal
     */
    LaunchTemplateInstanceMarketOptions.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(LaunchTemplateInstanceMarketOptions = exports.LaunchTemplateInstanceMarketOptions || (exports.LaunchTemplateInstanceMarketOptions = {}));
var LaunchTemplateLicenseConfiguration;
(function (LaunchTemplateLicenseConfiguration) {
    /**
     * @internal
     */
    LaunchTemplateLicenseConfiguration.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(LaunchTemplateLicenseConfiguration = exports.LaunchTemplateLicenseConfiguration || (exports.LaunchTemplateLicenseConfiguration = {}));
var LaunchTemplateInstanceMetadataOptions;
(function (LaunchTemplateInstanceMetadataOptions) {
    /**
     * @internal
     */
    LaunchTemplateInstanceMetadataOptions.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(LaunchTemplateInstanceMetadataOptions = exports.LaunchTemplateInstanceMetadataOptions || (exports.LaunchTemplateInstanceMetadataOptions = {}));
var LaunchTemplatesMonitoring;
(function (LaunchTemplatesMonitoring) {
    /**
     * @internal
     */
    LaunchTemplatesMonitoring.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(LaunchTemplatesMonitoring = exports.LaunchTemplatesMonitoring || (exports.LaunchTemplatesMonitoring = {}));
var InstanceIpv6Address;
(function (InstanceIpv6Address) {
    /**
     * @internal
     */
    InstanceIpv6Address.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(InstanceIpv6Address = exports.InstanceIpv6Address || (exports.InstanceIpv6Address = {}));
var LaunchTemplateInstanceNetworkInterfaceSpecification;
(function (LaunchTemplateInstanceNetworkInterfaceSpecification) {
    /**
     * @internal
     */
    LaunchTemplateInstanceNetworkInterfaceSpecification.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(LaunchTemplateInstanceNetworkInterfaceSpecification = exports.LaunchTemplateInstanceNetworkInterfaceSpecification || (exports.LaunchTemplateInstanceNetworkInterfaceSpecification = {}));
var LaunchTemplatePlacement;
(function (LaunchTemplatePlacement) {
    /**
     * @internal
     */
    LaunchTemplatePlacement.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(LaunchTemplatePlacement = exports.LaunchTemplatePlacement || (exports.LaunchTemplatePlacement = {}));
var LaunchTemplateTagSpecification;
(function (LaunchTemplateTagSpecification) {
    /**
     * @internal
     */
    LaunchTemplateTagSpecification.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(LaunchTemplateTagSpecification = exports.LaunchTemplateTagSpecification || (exports.LaunchTemplateTagSpecification = {}));
var ResponseLaunchTemplateData;
(function (ResponseLaunchTemplateData) {
    /**
     * @internal
     */
    ResponseLaunchTemplateData.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(ResponseLaunchTemplateData = exports.ResponseLaunchTemplateData || (exports.ResponseLaunchTemplateData = {}));
var LaunchTemplateVersion;
(function (LaunchTemplateVersion) {
    /**
     * @internal
     */
    LaunchTemplateVersion.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(LaunchTemplateVersion = exports.LaunchTemplateVersion || (exports.LaunchTemplateVersion = {}));
var CreateLaunchTemplateVersionResult;
(function (CreateLaunchTemplateVersionResult) {
    /**
     * @internal
     */
    CreateLaunchTemplateVersionResult.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(CreateLaunchTemplateVersionResult = exports.CreateLaunchTemplateVersionResult || (exports.CreateLaunchTemplateVersionResult = {}));
var CreateLocalGatewayRouteRequest;
(function (CreateLocalGatewayRouteRequest) {
    /**
     * @internal
     */
    CreateLocalGatewayRouteRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(CreateLocalGatewayRouteRequest = exports.CreateLocalGatewayRouteRequest || (exports.CreateLocalGatewayRouteRequest = {}));
var LocalGatewayRoute;
(function (LocalGatewayRoute) {
    /**
     * @internal
     */
    LocalGatewayRoute.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(LocalGatewayRoute = exports.LocalGatewayRoute || (exports.LocalGatewayRoute = {}));
var CreateLocalGatewayRouteResult;
(function (CreateLocalGatewayRouteResult) {
    /**
     * @internal
     */
    CreateLocalGatewayRouteResult.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(CreateLocalGatewayRouteResult = exports.CreateLocalGatewayRouteResult || (exports.CreateLocalGatewayRouteResult = {}));
var CreateLocalGatewayRouteTableVpcAssociationRequest;
(function (CreateLocalGatewayRouteTableVpcAssociationRequest) {
    /**
     * @internal
     */
    CreateLocalGatewayRouteTableVpcAssociationRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(CreateLocalGatewayRouteTableVpcAssociationRequest = exports.CreateLocalGatewayRouteTableVpcAssociationRequest || (exports.CreateLocalGatewayRouteTableVpcAssociationRequest = {}));
var LocalGatewayRouteTableVpcAssociation;
(function (LocalGatewayRouteTableVpcAssociation) {
    /**
     * @internal
     */
    LocalGatewayRouteTableVpcAssociation.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(LocalGatewayRouteTableVpcAssociation = exports.LocalGatewayRouteTableVpcAssociation || (exports.LocalGatewayRouteTableVpcAssociation = {}));
var CreateLocalGatewayRouteTableVpcAssociationResult;
(function (CreateLocalGatewayRouteTableVpcAssociationResult) {
    /**
     * @internal
     */
    CreateLocalGatewayRouteTableVpcAssociationResult.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(CreateLocalGatewayRouteTableVpcAssociationResult = exports.CreateLocalGatewayRouteTableVpcAssociationResult || (exports.CreateLocalGatewayRouteTableVpcAssociationResult = {}));
var CreateManagedPrefixListRequest;
(function (CreateManagedPrefixListRequest) {
    /**
     * @internal
     */
    CreateManagedPrefixListRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(CreateManagedPrefixListRequest = exports.CreateManagedPrefixListRequest || (exports.CreateManagedPrefixListRequest = {}));
var ManagedPrefixList;
(function (ManagedPrefixList) {
    /**
     * @internal
     */
    ManagedPrefixList.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(ManagedPrefixList = exports.ManagedPrefixList || (exports.ManagedPrefixList = {}));
var CreateManagedPrefixListResult;
(function (CreateManagedPrefixListResult) {
    /**
     * @internal
     */
    CreateManagedPrefixListResult.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(CreateManagedPrefixListResult = exports.CreateManagedPrefixListResult || (exports.CreateManagedPrefixListResult = {}));
var CreateNatGatewayRequest;
(function (CreateNatGatewayRequest) {
    /**
     * @internal
     */
    CreateNatGatewayRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(CreateNatGatewayRequest = exports.CreateNatGatewayRequest || (exports.CreateNatGatewayRequest = {}));
var NatGatewayAddress;
(function (NatGatewayAddress) {
    /**
     * @internal
     */
    NatGatewayAddress.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(NatGatewayAddress = exports.NatGatewayAddress || (exports.NatGatewayAddress = {}));
var ProvisionedBandwidth;
(function (ProvisionedBandwidth) {
    /**
     * @internal
     */
    ProvisionedBandwidth.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(ProvisionedBandwidth = exports.ProvisionedBandwidth || (exports.ProvisionedBandwidth = {}));
var NatGatewayState;
(function (NatGatewayState) {
    NatGatewayState["AVAILABLE"] = "available";
    NatGatewayState["DELETED"] = "deleted";
    NatGatewayState["DELETING"] = "deleting";
    NatGatewayState["FAILED"] = "failed";
    NatGatewayState["PENDING"] = "pending";
})(NatGatewayState = exports.NatGatewayState || (exports.NatGatewayState = {}));
var NatGateway;
(function (NatGateway) {
    /**
     * @internal
     */
    NatGateway.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(NatGateway = exports.NatGateway || (exports.NatGateway = {}));
var CreateNatGatewayResult;
(function (CreateNatGatewayResult) {
    /**
     * @internal
     */
    CreateNatGatewayResult.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(CreateNatGatewayResult = exports.CreateNatGatewayResult || (exports.CreateNatGatewayResult = {}));
var CreateNetworkAclRequest;
(function (CreateNetworkAclRequest) {
    /**
     * @internal
     */
    CreateNetworkAclRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(CreateNetworkAclRequest = exports.CreateNetworkAclRequest || (exports.CreateNetworkAclRequest = {}));
var NetworkAclAssociation;
(function (NetworkAclAssociation) {
    /**
     * @internal
     */
    NetworkAclAssociation.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(NetworkAclAssociation = exports.NetworkAclAssociation || (exports.NetworkAclAssociation = {}));
var IcmpTypeCode;
(function (IcmpTypeCode) {
    /**
     * @internal
     */
    IcmpTypeCode.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(IcmpTypeCode = exports.IcmpTypeCode || (exports.IcmpTypeCode = {}));
var PortRange;
(function (PortRange) {
    /**
     * @internal
     */
    PortRange.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(PortRange = exports.PortRange || (exports.PortRange = {}));
var NetworkAclEntry;
(function (NetworkAclEntry) {
    /**
     * @internal
     */
    NetworkAclEntry.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(NetworkAclEntry = exports.NetworkAclEntry || (exports.NetworkAclEntry = {}));
var NetworkAcl;
(function (NetworkAcl) {
    /**
     * @internal
     */
    NetworkAcl.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(NetworkAcl = exports.NetworkAcl || (exports.NetworkAcl = {}));
var CreateNetworkAclResult;
(function (CreateNetworkAclResult) {
    /**
     * @internal
     */
    CreateNetworkAclResult.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(CreateNetworkAclResult = exports.CreateNetworkAclResult || (exports.CreateNetworkAclResult = {}));
var CreateNetworkAclEntryRequest;
(function (CreateNetworkAclEntryRequest) {
    /**
     * @internal
     */
    CreateNetworkAclEntryRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(CreateNetworkAclEntryRequest = exports.CreateNetworkAclEntryRequest || (exports.CreateNetworkAclEntryRequest = {}));
var CreateNetworkInsightsPathRequest;
(function (CreateNetworkInsightsPathRequest) {
    /**
     * @internal
     */
    CreateNetworkInsightsPathRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(CreateNetworkInsightsPathRequest = exports.CreateNetworkInsightsPathRequest || (exports.CreateNetworkInsightsPathRequest = {}));
var NetworkInsightsPath;
(function (NetworkInsightsPath) {
    /**
     * @internal
     */
    NetworkInsightsPath.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(NetworkInsightsPath = exports.NetworkInsightsPath || (exports.NetworkInsightsPath = {}));
var CreateNetworkInsightsPathResult;
(function (CreateNetworkInsightsPathResult) {
    /**
     * @internal
     */
    CreateNetworkInsightsPathResult.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(CreateNetworkInsightsPathResult = exports.CreateNetworkInsightsPathResult || (exports.CreateNetworkInsightsPathResult = {}));
var CreateNetworkInterfaceRequest;
(function (CreateNetworkInterfaceRequest) {
    /**
     * @internal
     */
    CreateNetworkInterfaceRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(CreateNetworkInterfaceRequest = exports.CreateNetworkInterfaceRequest || (exports.CreateNetworkInterfaceRequest = {}));
var NetworkInterfaceAssociation;
(function (NetworkInterfaceAssociation) {
    /**
     * @internal
     */
    NetworkInterfaceAssociation.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(NetworkInterfaceAssociation = exports.NetworkInterfaceAssociation || (exports.NetworkInterfaceAssociation = {}));
var NetworkInterfaceAttachment;
(function (NetworkInterfaceAttachment) {
    /**
     * @internal
     */
    NetworkInterfaceAttachment.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(NetworkInterfaceAttachment = exports.NetworkInterfaceAttachment || (exports.NetworkInterfaceAttachment = {}));
var GroupIdentifier;
(function (GroupIdentifier) {
    /**
     * @internal
     */
    GroupIdentifier.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(GroupIdentifier = exports.GroupIdentifier || (exports.GroupIdentifier = {}));
var NetworkInterfaceIpv6Address;
(function (NetworkInterfaceIpv6Address) {
    /**
     * @internal
     */
    NetworkInterfaceIpv6Address.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(NetworkInterfaceIpv6Address = exports.NetworkInterfaceIpv6Address || (exports.NetworkInterfaceIpv6Address = {}));
var NetworkInterfacePrivateIpAddress;
(function (NetworkInterfacePrivateIpAddress) {
    /**
     * @internal
     */
    NetworkInterfacePrivateIpAddress.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(NetworkInterfacePrivateIpAddress = exports.NetworkInterfacePrivateIpAddress || (exports.NetworkInterfacePrivateIpAddress = {}));
var NetworkInterface;
(function (NetworkInterface) {
    /**
     * @internal
     */
    NetworkInterface.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(NetworkInterface = exports.NetworkInterface || (exports.NetworkInterface = {}));
var CreateNetworkInterfaceResult;
(function (CreateNetworkInterfaceResult) {
    /**
     * @internal
     */
    CreateNetworkInterfaceResult.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(CreateNetworkInterfaceResult = exports.CreateNetworkInterfaceResult || (exports.CreateNetworkInterfaceResult = {}));
var CreateNetworkInterfacePermissionRequest;
(function (CreateNetworkInterfacePermissionRequest) {
    /**
     * @internal
     */
    CreateNetworkInterfacePermissionRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(CreateNetworkInterfacePermissionRequest = exports.CreateNetworkInterfacePermissionRequest || (exports.CreateNetworkInterfacePermissionRequest = {}));
var NetworkInterfacePermissionState;
(function (NetworkInterfacePermissionState) {
    /**
     * @internal
     */
    NetworkInterfacePermissionState.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(NetworkInterfacePermissionState = exports.NetworkInterfacePermissionState || (exports.NetworkInterfacePermissionState = {}));
var NetworkInterfacePermission;
(function (NetworkInterfacePermission) {
    /**
     * @internal
     */
    NetworkInterfacePermission.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(NetworkInterfacePermission = exports.NetworkInterfacePermission || (exports.NetworkInterfacePermission = {}));
var CreateNetworkInterfacePermissionResult;
(function (CreateNetworkInterfacePermissionResult) {
    /**
     * @internal
     */
    CreateNetworkInterfacePermissionResult.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(CreateNetworkInterfacePermissionResult = exports.CreateNetworkInterfacePermissionResult || (exports.CreateNetworkInterfacePermissionResult = {}));
var CreatePlacementGroupRequest;
(function (CreatePlacementGroupRequest) {
    /**
     * @internal
     */
    CreatePlacementGroupRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(CreatePlacementGroupRequest = exports.CreatePlacementGroupRequest || (exports.CreatePlacementGroupRequest = {}));
var PlacementGroup;
(function (PlacementGroup) {
    /**
     * @internal
     */
    PlacementGroup.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(PlacementGroup = exports.PlacementGroup || (exports.PlacementGroup = {}));
var CreatePlacementGroupResult;
(function (CreatePlacementGroupResult) {
    /**
     * @internal
     */
    CreatePlacementGroupResult.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(CreatePlacementGroupResult = exports.CreatePlacementGroupResult || (exports.CreatePlacementGroupResult = {}));
var CreateReplaceRootVolumeTaskRequest;
(function (CreateReplaceRootVolumeTaskRequest) {
    /**
     * @internal
     */
    CreateReplaceRootVolumeTaskRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(CreateReplaceRootVolumeTaskRequest = exports.CreateReplaceRootVolumeTaskRequest || (exports.CreateReplaceRootVolumeTaskRequest = {}));
var ReplaceRootVolumeTaskState;
(function (ReplaceRootVolumeTaskState) {
    ReplaceRootVolumeTaskState["failed"] = "failed";
    ReplaceRootVolumeTaskState["failed_detached"] = "failed-detached";
    ReplaceRootVolumeTaskState["failing"] = "failing";
    ReplaceRootVolumeTaskState["in_progress"] = "in-progress";
    ReplaceRootVolumeTaskState["pending"] = "pending";
    ReplaceRootVolumeTaskState["succeeded"] = "succeeded";
})(ReplaceRootVolumeTaskState = exports.ReplaceRootVolumeTaskState || (exports.ReplaceRootVolumeTaskState = {}));
var ReplaceRootVolumeTask;
(function (ReplaceRootVolumeTask) {
    /**
     * @internal
     */
    ReplaceRootVolumeTask.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(ReplaceRootVolumeTask = exports.ReplaceRootVolumeTask || (exports.ReplaceRootVolumeTask = {}));
var CreateReplaceRootVolumeTaskResult;
(function (CreateReplaceRootVolumeTaskResult) {
    /**
     * @internal
     */
    CreateReplaceRootVolumeTaskResult.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(CreateReplaceRootVolumeTaskResult = exports.CreateReplaceRootVolumeTaskResult || (exports.CreateReplaceRootVolumeTaskResult = {}));
var PriceScheduleSpecification;
(function (PriceScheduleSpecification) {
    /**
     * @internal
     */
    PriceScheduleSpecification.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(PriceScheduleSpecification = exports.PriceScheduleSpecification || (exports.PriceScheduleSpecification = {}));
var CreateReservedInstancesListingRequest;
(function (CreateReservedInstancesListingRequest) {
    /**
     * @internal
     */
    CreateReservedInstancesListingRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(CreateReservedInstancesListingRequest = exports.CreateReservedInstancesListingRequest || (exports.CreateReservedInstancesListingRequest = {}));
var CreateReservedInstancesListingResult;
(function (CreateReservedInstancesListingResult) {
    /**
     * @internal
     */
    CreateReservedInstancesListingResult.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(CreateReservedInstancesListingResult = exports.CreateReservedInstancesListingResult || (exports.CreateReservedInstancesListingResult = {}));
var CreateRestoreImageTaskRequest;
(function (CreateRestoreImageTaskRequest) {
    /**
     * @internal
     */
    CreateRestoreImageTaskRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(CreateRestoreImageTaskRequest = exports.CreateRestoreImageTaskRequest || (exports.CreateRestoreImageTaskRequest = {}));
var CreateRestoreImageTaskResult;
(function (CreateRestoreImageTaskResult) {
    /**
     * @internal
     */
    CreateRestoreImageTaskResult.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(CreateRestoreImageTaskResult = exports.CreateRestoreImageTaskResult || (exports.CreateRestoreImageTaskResult = {}));
var CreateRouteRequest;
(function (CreateRouteRequest) {
    /**
     * @internal
     */
    CreateRouteRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(CreateRouteRequest = exports.CreateRouteRequest || (exports.CreateRouteRequest = {}));
var CreateRouteResult;
(function (CreateRouteResult) {
    /**
     * @internal
     */
    CreateRouteResult.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(CreateRouteResult = exports.CreateRouteResult || (exports.CreateRouteResult = {}));
var CreateRouteTableRequest;
(function (CreateRouteTableRequest) {
    /**
     * @internal
     */
    CreateRouteTableRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(CreateRouteTableRequest = exports.CreateRouteTableRequest || (exports.CreateRouteTableRequest = {}));
var RouteTableAssociation;
(function (RouteTableAssociation) {
    /**
     * @internal
     */
    RouteTableAssociation.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(RouteTableAssociation = exports.RouteTableAssociation || (exports.RouteTableAssociation = {}));
var PropagatingVgw;
(function (PropagatingVgw) {
    /**
     * @internal
     */
    PropagatingVgw.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(PropagatingVgw = exports.PropagatingVgw || (exports.PropagatingVgw = {}));
var Route;
(function (Route) {
    /**
     * @internal
     */
    Route.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(Route = exports.Route || (exports.Route = {}));
var RouteTable;
(function (RouteTable) {
    /**
     * @internal
     */
    RouteTable.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(RouteTable = exports.RouteTable || (exports.RouteTable = {}));
var CreateRouteTableResult;
(function (CreateRouteTableResult) {
    /**
     * @internal
     */
    CreateRouteTableResult.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(CreateRouteTableResult = exports.CreateRouteTableResult || (exports.CreateRouteTableResult = {}));
var CreateSecurityGroupRequest;
(function (CreateSecurityGroupRequest) {
    /**
     * @internal
     */
    CreateSecurityGroupRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(CreateSecurityGroupRequest = exports.CreateSecurityGroupRequest || (exports.CreateSecurityGroupRequest = {}));
var CreateSecurityGroupResult;
(function (CreateSecurityGroupResult) {
    /**
     * @internal
     */
    CreateSecurityGroupResult.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(CreateSecurityGroupResult = exports.CreateSecurityGroupResult || (exports.CreateSecurityGroupResult = {}));
var CreateSnapshotRequest;
(function (CreateSnapshotRequest) {
    /**
     * @internal
     */
    CreateSnapshotRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(CreateSnapshotRequest = exports.CreateSnapshotRequest || (exports.CreateSnapshotRequest = {}));
var Snapshot;
(function (Snapshot) {
    /**
     * @internal
     */
    Snapshot.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(Snapshot = exports.Snapshot || (exports.Snapshot = {}));
var InstanceSpecification;
(function (InstanceSpecification) {
    /**
     * @internal
     */
    InstanceSpecification.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(InstanceSpecification = exports.InstanceSpecification || (exports.InstanceSpecification = {}));
var CreateSnapshotsRequest;
(function (CreateSnapshotsRequest) {
    /**
     * @internal
     */
    CreateSnapshotsRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(CreateSnapshotsRequest = exports.CreateSnapshotsRequest || (exports.CreateSnapshotsRequest = {}));
var SnapshotInfo;
(function (SnapshotInfo) {
    /**
     * @internal
     */
    SnapshotInfo.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(SnapshotInfo = exports.SnapshotInfo || (exports.SnapshotInfo = {}));
var CreateSnapshotsResult;
(function (CreateSnapshotsResult) {
    /**
     * @internal
     */
    CreateSnapshotsResult.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(CreateSnapshotsResult = exports.CreateSnapshotsResult || (exports.CreateSnapshotsResult = {}));
var CreateSpotDatafeedSubscriptionRequest;
(function (CreateSpotDatafeedSubscriptionRequest) {
    /**
     * @internal
     */
    CreateSpotDatafeedSubscriptionRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(CreateSpotDatafeedSubscriptionRequest = exports.CreateSpotDatafeedSubscriptionRequest || (exports.CreateSpotDatafeedSubscriptionRequest = {}));
var SpotInstanceStateFault;
(function (SpotInstanceStateFault) {
    /**
     * @internal
     */
    SpotInstanceStateFault.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(SpotInstanceStateFault = exports.SpotInstanceStateFault || (exports.SpotInstanceStateFault = {}));
var SpotDatafeedSubscription;
(function (SpotDatafeedSubscription) {
    /**
     * @internal
     */
    SpotDatafeedSubscription.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(SpotDatafeedSubscription = exports.SpotDatafeedSubscription || (exports.SpotDatafeedSubscription = {}));
var CreateSpotDatafeedSubscriptionResult;
(function (CreateSpotDatafeedSubscriptionResult) {
    /**
     * @internal
     */
    CreateSpotDatafeedSubscriptionResult.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(CreateSpotDatafeedSubscriptionResult = exports.CreateSpotDatafeedSubscriptionResult || (exports.CreateSpotDatafeedSubscriptionResult = {}));
var S3ObjectTag;
(function (S3ObjectTag) {
    /**
     * @internal
     */
    S3ObjectTag.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(S3ObjectTag = exports.S3ObjectTag || (exports.S3ObjectTag = {}));
var CreateStoreImageTaskRequest;
(function (CreateStoreImageTaskRequest) {
    /**
     * @internal
     */
    CreateStoreImageTaskRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(CreateStoreImageTaskRequest = exports.CreateStoreImageTaskRequest || (exports.CreateStoreImageTaskRequest = {}));
var CreateStoreImageTaskResult;
(function (CreateStoreImageTaskResult) {
    /**
     * @internal
     */
    CreateStoreImageTaskResult.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(CreateStoreImageTaskResult = exports.CreateStoreImageTaskResult || (exports.CreateStoreImageTaskResult = {}));
var CreateSubnetRequest;
(function (CreateSubnetRequest) {
    /**
     * @internal
     */
    CreateSubnetRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(CreateSubnetRequest = exports.CreateSubnetRequest || (exports.CreateSubnetRequest = {}));
var CreateSubnetResult;
(function (CreateSubnetResult) {
    /**
     * @internal
     */
    CreateSubnetResult.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(CreateSubnetResult = exports.CreateSubnetResult || (exports.CreateSubnetResult = {}));
var CreateTagsRequest;
(function (CreateTagsRequest) {
    /**
     * @internal
     */
    CreateTagsRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(CreateTagsRequest = exports.CreateTagsRequest || (exports.CreateTagsRequest = {}));
var CreateTrafficMirrorFilterRequest;
(function (CreateTrafficMirrorFilterRequest) {
    /**
     * @internal
     */
    CreateTrafficMirrorFilterRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(CreateTrafficMirrorFilterRequest = exports.CreateTrafficMirrorFilterRequest || (exports.CreateTrafficMirrorFilterRequest = {}));
var TrafficMirrorPortRange;
(function (TrafficMirrorPortRange) {
    /**
     * @internal
     */
    TrafficMirrorPortRange.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(TrafficMirrorPortRange = exports.TrafficMirrorPortRange || (exports.TrafficMirrorPortRange = {}));
var TrafficMirrorFilterRule;
(function (TrafficMirrorFilterRule) {
    /**
     * @internal
     */
    TrafficMirrorFilterRule.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(TrafficMirrorFilterRule = exports.TrafficMirrorFilterRule || (exports.TrafficMirrorFilterRule = {}));
var TrafficMirrorFilter;
(function (TrafficMirrorFilter) {
    /**
     * @internal
     */
    TrafficMirrorFilter.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(TrafficMirrorFilter = exports.TrafficMirrorFilter || (exports.TrafficMirrorFilter = {}));
var CreateTrafficMirrorFilterResult;
(function (CreateTrafficMirrorFilterResult) {
    /**
     * @internal
     */
    CreateTrafficMirrorFilterResult.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(CreateTrafficMirrorFilterResult = exports.CreateTrafficMirrorFilterResult || (exports.CreateTrafficMirrorFilterResult = {}));
var TrafficMirrorPortRangeRequest;
(function (TrafficMirrorPortRangeRequest) {
    /**
     * @internal
     */
    TrafficMirrorPortRangeRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(TrafficMirrorPortRangeRequest = exports.TrafficMirrorPortRangeRequest || (exports.TrafficMirrorPortRangeRequest = {}));
var CreateTrafficMirrorFilterRuleRequest;
(function (CreateTrafficMirrorFilterRuleRequest) {
    /**
     * @internal
     */
    CreateTrafficMirrorFilterRuleRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(CreateTrafficMirrorFilterRuleRequest = exports.CreateTrafficMirrorFilterRuleRequest || (exports.CreateTrafficMirrorFilterRuleRequest = {}));
var CreateTrafficMirrorFilterRuleResult;
(function (CreateTrafficMirrorFilterRuleResult) {
    /**
     * @internal
     */
    CreateTrafficMirrorFilterRuleResult.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(CreateTrafficMirrorFilterRuleResult = exports.CreateTrafficMirrorFilterRuleResult || (exports.CreateTrafficMirrorFilterRuleResult = {}));
var CreateTrafficMirrorSessionRequest;
(function (CreateTrafficMirrorSessionRequest) {
    /**
     * @internal
     */
    CreateTrafficMirrorSessionRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(CreateTrafficMirrorSessionRequest = exports.CreateTrafficMirrorSessionRequest || (exports.CreateTrafficMirrorSessionRequest = {}));
var TrafficMirrorSession;
(function (TrafficMirrorSession) {
    /**
     * @internal
     */
    TrafficMirrorSession.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(TrafficMirrorSession = exports.TrafficMirrorSession || (exports.TrafficMirrorSession = {}));
var CreateTrafficMirrorSessionResult;
(function (CreateTrafficMirrorSessionResult) {
    /**
     * @internal
     */
    CreateTrafficMirrorSessionResult.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(CreateTrafficMirrorSessionResult = exports.CreateTrafficMirrorSessionResult || (exports.CreateTrafficMirrorSessionResult = {}));
var CreateTrafficMirrorTargetRequest;
(function (CreateTrafficMirrorTargetRequest) {
    /**
     * @internal
     */
    CreateTrafficMirrorTargetRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(CreateTrafficMirrorTargetRequest = exports.CreateTrafficMirrorTargetRequest || (exports.CreateTrafficMirrorTargetRequest = {}));
var TrafficMirrorTarget;
(function (TrafficMirrorTarget) {
    /**
     * @internal
     */
    TrafficMirrorTarget.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(TrafficMirrorTarget = exports.TrafficMirrorTarget || (exports.TrafficMirrorTarget = {}));
var CreateTrafficMirrorTargetResult;
(function (CreateTrafficMirrorTargetResult) {
    /**
     * @internal
     */
    CreateTrafficMirrorTargetResult.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(CreateTrafficMirrorTargetResult = exports.CreateTrafficMirrorTargetResult || (exports.CreateTrafficMirrorTargetResult = {}));
var TransitGatewayRequestOptions;
(function (TransitGatewayRequestOptions) {
    /**
     * @internal
     */
    TransitGatewayRequestOptions.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(TransitGatewayRequestOptions = exports.TransitGatewayRequestOptions || (exports.TransitGatewayRequestOptions = {}));
var CreateTransitGatewayRequest;
(function (CreateTransitGatewayRequest) {
    /**
     * @internal
     */
    CreateTransitGatewayRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(CreateTransitGatewayRequest = exports.CreateTransitGatewayRequest || (exports.CreateTransitGatewayRequest = {}));
var TransitGatewayOptions;
(function (TransitGatewayOptions) {
    /**
     * @internal
     */
    TransitGatewayOptions.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(TransitGatewayOptions = exports.TransitGatewayOptions || (exports.TransitGatewayOptions = {}));
var TransitGateway;
(function (TransitGateway) {
    /**
     * @internal
     */
    TransitGateway.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(TransitGateway = exports.TransitGateway || (exports.TransitGateway = {}));
var CreateTransitGatewayResult;
(function (CreateTransitGatewayResult) {
    /**
     * @internal
     */
    CreateTransitGatewayResult.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(CreateTransitGatewayResult = exports.CreateTransitGatewayResult || (exports.CreateTransitGatewayResult = {}));
var CreateTransitGatewayConnectRequestOptions;
(function (CreateTransitGatewayConnectRequestOptions) {
    /**
     * @internal
     */
    CreateTransitGatewayConnectRequestOptions.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(CreateTransitGatewayConnectRequestOptions = exports.CreateTransitGatewayConnectRequestOptions || (exports.CreateTransitGatewayConnectRequestOptions = {}));
var CreateTransitGatewayConnectRequest;
(function (CreateTransitGatewayConnectRequest) {
    /**
     * @internal
     */
    CreateTransitGatewayConnectRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(CreateTransitGatewayConnectRequest = exports.CreateTransitGatewayConnectRequest || (exports.CreateTransitGatewayConnectRequest = {}));
var TransitGatewayConnectOptions;
(function (TransitGatewayConnectOptions) {
    /**
     * @internal
     */
    TransitGatewayConnectOptions.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(TransitGatewayConnectOptions = exports.TransitGatewayConnectOptions || (exports.TransitGatewayConnectOptions = {}));
var TransitGatewayConnect;
(function (TransitGatewayConnect) {
    /**
     * @internal
     */
    TransitGatewayConnect.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(TransitGatewayConnect = exports.TransitGatewayConnect || (exports.TransitGatewayConnect = {}));
var CreateTransitGatewayConnectResult;
(function (CreateTransitGatewayConnectResult) {
    /**
     * @internal
     */
    CreateTransitGatewayConnectResult.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(CreateTransitGatewayConnectResult = exports.CreateTransitGatewayConnectResult || (exports.CreateTransitGatewayConnectResult = {}));
var TransitGatewayConnectRequestBgpOptions;
(function (TransitGatewayConnectRequestBgpOptions) {
    /**
     * @internal
     */
    TransitGatewayConnectRequestBgpOptions.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(TransitGatewayConnectRequestBgpOptions = exports.TransitGatewayConnectRequestBgpOptions || (exports.TransitGatewayConnectRequestBgpOptions = {}));
var CreateTransitGatewayConnectPeerRequest;
(function (CreateTransitGatewayConnectPeerRequest) {
    /**
     * @internal
     */
    CreateTransitGatewayConnectPeerRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(CreateTransitGatewayConnectPeerRequest = exports.CreateTransitGatewayConnectPeerRequest || (exports.CreateTransitGatewayConnectPeerRequest = {}));
var TransitGatewayAttachmentBgpConfiguration;
(function (TransitGatewayAttachmentBgpConfiguration) {
    /**
     * @internal
     */
    TransitGatewayAttachmentBgpConfiguration.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(TransitGatewayAttachmentBgpConfiguration = exports.TransitGatewayAttachmentBgpConfiguration || (exports.TransitGatewayAttachmentBgpConfiguration = {}));
var TransitGatewayConnectPeerConfiguration;
(function (TransitGatewayConnectPeerConfiguration) {
    /**
     * @internal
     */
    TransitGatewayConnectPeerConfiguration.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(TransitGatewayConnectPeerConfiguration = exports.TransitGatewayConnectPeerConfiguration || (exports.TransitGatewayConnectPeerConfiguration = {}));
var TransitGatewayConnectPeer;
(function (TransitGatewayConnectPeer) {
    /**
     * @internal
     */
    TransitGatewayConnectPeer.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(TransitGatewayConnectPeer = exports.TransitGatewayConnectPeer || (exports.TransitGatewayConnectPeer = {}));
var CreateTransitGatewayConnectPeerResult;
(function (CreateTransitGatewayConnectPeerResult) {
    /**
     * @internal
     */
    CreateTransitGatewayConnectPeerResult.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(CreateTransitGatewayConnectPeerResult = exports.CreateTransitGatewayConnectPeerResult || (exports.CreateTransitGatewayConnectPeerResult = {}));
var CreateTransitGatewayMulticastDomainRequestOptions;
(function (CreateTransitGatewayMulticastDomainRequestOptions) {
    /**
     * @internal
     */
    CreateTransitGatewayMulticastDomainRequestOptions.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(CreateTransitGatewayMulticastDomainRequestOptions = exports.CreateTransitGatewayMulticastDomainRequestOptions || (exports.CreateTransitGatewayMulticastDomainRequestOptions = {}));
var CreateTransitGatewayMulticastDomainRequest;
(function (CreateTransitGatewayMulticastDomainRequest) {
    /**
     * @internal
     */
    CreateTransitGatewayMulticastDomainRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(CreateTransitGatewayMulticastDomainRequest = exports.CreateTransitGatewayMulticastDomainRequest || (exports.CreateTransitGatewayMulticastDomainRequest = {}));
var TransitGatewayMulticastDomainOptions;
(function (TransitGatewayMulticastDomainOptions) {
    /**
     * @internal
     */
    TransitGatewayMulticastDomainOptions.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(TransitGatewayMulticastDomainOptions = exports.TransitGatewayMulticastDomainOptions || (exports.TransitGatewayMulticastDomainOptions = {}));
var TransitGatewayMulticastDomain;
(function (TransitGatewayMulticastDomain) {
    /**
     * @internal
     */
    TransitGatewayMulticastDomain.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(TransitGatewayMulticastDomain = exports.TransitGatewayMulticastDomain || (exports.TransitGatewayMulticastDomain = {}));
var CreateTransitGatewayMulticastDomainResult;
(function (CreateTransitGatewayMulticastDomainResult) {
    /**
     * @internal
     */
    CreateTransitGatewayMulticastDomainResult.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(CreateTransitGatewayMulticastDomainResult = exports.CreateTransitGatewayMulticastDomainResult || (exports.CreateTransitGatewayMulticastDomainResult = {}));
var CreateTransitGatewayPeeringAttachmentRequest;
(function (CreateTransitGatewayPeeringAttachmentRequest) {
    /**
     * @internal
     */
    CreateTransitGatewayPeeringAttachmentRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(CreateTransitGatewayPeeringAttachmentRequest = exports.CreateTransitGatewayPeeringAttachmentRequest || (exports.CreateTransitGatewayPeeringAttachmentRequest = {}));
var CreateTransitGatewayPeeringAttachmentResult;
(function (CreateTransitGatewayPeeringAttachmentResult) {
    /**
     * @internal
     */
    CreateTransitGatewayPeeringAttachmentResult.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(CreateTransitGatewayPeeringAttachmentResult = exports.CreateTransitGatewayPeeringAttachmentResult || (exports.CreateTransitGatewayPeeringAttachmentResult = {}));
var CreateTransitGatewayPrefixListReferenceRequest;
(function (CreateTransitGatewayPrefixListReferenceRequest) {
    /**
     * @internal
     */
    CreateTransitGatewayPrefixListReferenceRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(CreateTransitGatewayPrefixListReferenceRequest = exports.CreateTransitGatewayPrefixListReferenceRequest || (exports.CreateTransitGatewayPrefixListReferenceRequest = {}));
var TransitGatewayPrefixListAttachment;
(function (TransitGatewayPrefixListAttachment) {
    /**
     * @internal
     */
    TransitGatewayPrefixListAttachment.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(TransitGatewayPrefixListAttachment = exports.TransitGatewayPrefixListAttachment || (exports.TransitGatewayPrefixListAttachment = {}));
var TransitGatewayPrefixListReference;
(function (TransitGatewayPrefixListReference) {
    /**
     * @internal
     */
    TransitGatewayPrefixListReference.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(TransitGatewayPrefixListReference = exports.TransitGatewayPrefixListReference || (exports.TransitGatewayPrefixListReference = {}));
var CreateTransitGatewayPrefixListReferenceResult;
(function (CreateTransitGatewayPrefixListReferenceResult) {
    /**
     * @internal
     */
    CreateTransitGatewayPrefixListReferenceResult.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(CreateTransitGatewayPrefixListReferenceResult = exports.CreateTransitGatewayPrefixListReferenceResult || (exports.CreateTransitGatewayPrefixListReferenceResult = {}));
var CreateTransitGatewayRouteRequest;
(function (CreateTransitGatewayRouteRequest) {
    /**
     * @internal
     */
    CreateTransitGatewayRouteRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(CreateTransitGatewayRouteRequest = exports.CreateTransitGatewayRouteRequest || (exports.CreateTransitGatewayRouteRequest = {}));
var TransitGatewayRouteAttachment;
(function (TransitGatewayRouteAttachment) {
    /**
     * @internal
     */
    TransitGatewayRouteAttachment.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(TransitGatewayRouteAttachment = exports.TransitGatewayRouteAttachment || (exports.TransitGatewayRouteAttachment = {}));
var TransitGatewayRoute;
(function (TransitGatewayRoute) {
    /**
     * @internal
     */
    TransitGatewayRoute.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(TransitGatewayRoute = exports.TransitGatewayRoute || (exports.TransitGatewayRoute = {}));
var CreateTransitGatewayRouteResult;
(function (CreateTransitGatewayRouteResult) {
    /**
     * @internal
     */
    CreateTransitGatewayRouteResult.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(CreateTransitGatewayRouteResult = exports.CreateTransitGatewayRouteResult || (exports.CreateTransitGatewayRouteResult = {}));
var CreateTransitGatewayRouteTableRequest;
(function (CreateTransitGatewayRouteTableRequest) {
    /**
     * @internal
     */
    CreateTransitGatewayRouteTableRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(CreateTransitGatewayRouteTableRequest = exports.CreateTransitGatewayRouteTableRequest || (exports.CreateTransitGatewayRouteTableRequest = {}));
var TransitGatewayRouteTable;
(function (TransitGatewayRouteTable) {
    /**
     * @internal
     */
    TransitGatewayRouteTable.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(TransitGatewayRouteTable = exports.TransitGatewayRouteTable || (exports.TransitGatewayRouteTable = {}));
var CreateTransitGatewayRouteTableResult;
(function (CreateTransitGatewayRouteTableResult) {
    /**
     * @internal
     */
    CreateTransitGatewayRouteTableResult.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(CreateTransitGatewayRouteTableResult = exports.CreateTransitGatewayRouteTableResult || (exports.CreateTransitGatewayRouteTableResult = {}));
var CreateTransitGatewayVpcAttachmentRequestOptions;
(function (CreateTransitGatewayVpcAttachmentRequestOptions) {
    /**
     * @internal
     */
    CreateTransitGatewayVpcAttachmentRequestOptions.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(CreateTransitGatewayVpcAttachmentRequestOptions = exports.CreateTransitGatewayVpcAttachmentRequestOptions || (exports.CreateTransitGatewayVpcAttachmentRequestOptions = {}));
var CreateTransitGatewayVpcAttachmentRequest;
(function (CreateTransitGatewayVpcAttachmentRequest) {
    /**
     * @internal
     */
    CreateTransitGatewayVpcAttachmentRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(CreateTransitGatewayVpcAttachmentRequest = exports.CreateTransitGatewayVpcAttachmentRequest || (exports.CreateTransitGatewayVpcAttachmentRequest = {}));
var CreateTransitGatewayVpcAttachmentResult;
(function (CreateTransitGatewayVpcAttachmentResult) {
    /**
     * @internal
     */
    CreateTransitGatewayVpcAttachmentResult.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(CreateTransitGatewayVpcAttachmentResult = exports.CreateTransitGatewayVpcAttachmentResult || (exports.CreateTransitGatewayVpcAttachmentResult = {}));
var CreateVolumeRequest;
(function (CreateVolumeRequest) {
    /**
     * @internal
     */
    CreateVolumeRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(CreateVolumeRequest = exports.CreateVolumeRequest || (exports.CreateVolumeRequest = {}));
var Volume;
(function (Volume) {
    /**
     * @internal
     */
    Volume.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(Volume = exports.Volume || (exports.Volume = {}));
var CreateVpcRequest;
(function (CreateVpcRequest) {
    /**
     * @internal
     */
    CreateVpcRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(CreateVpcRequest = exports.CreateVpcRequest || (exports.CreateVpcRequest = {}));
var CreateVpcResult;
(function (CreateVpcResult) {
    /**
     * @internal
     */
    CreateVpcResult.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(CreateVpcResult = exports.CreateVpcResult || (exports.CreateVpcResult = {}));
var VpcEndpointType;
(function (VpcEndpointType) {
    VpcEndpointType["Gateway"] = "Gateway";
    VpcEndpointType["GatewayLoadBalancer"] = "GatewayLoadBalancer";
    VpcEndpointType["Interface"] = "Interface";
})(VpcEndpointType = exports.VpcEndpointType || (exports.VpcEndpointType = {}));
var CreateVpcEndpointRequest;
(function (CreateVpcEndpointRequest) {
    /**
     * @internal
     */
    CreateVpcEndpointRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(CreateVpcEndpointRequest = exports.CreateVpcEndpointRequest || (exports.CreateVpcEndpointRequest = {}));
var DnsEntry;
(function (DnsEntry) {
    /**
     * @internal
     */
    DnsEntry.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(DnsEntry = exports.DnsEntry || (exports.DnsEntry = {}));
var SecurityGroupIdentifier;
(function (SecurityGroupIdentifier) {
    /**
     * @internal
     */
    SecurityGroupIdentifier.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(SecurityGroupIdentifier = exports.SecurityGroupIdentifier || (exports.SecurityGroupIdentifier = {}));
var LastError;
(function (LastError) {
    /**
     * @internal
     */
    LastError.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(LastError = exports.LastError || (exports.LastError = {}));
var State;
(function (State) {
    State["Available"] = "Available";
    State["Deleted"] = "Deleted";
    State["Deleting"] = "Deleting";
    State["Expired"] = "Expired";
    State["Failed"] = "Failed";
    State["Pending"] = "Pending";
    State["PendingAcceptance"] = "PendingAcceptance";
    State["Rejected"] = "Rejected";
})(State = exports.State || (exports.State = {}));
var VpcEndpoint;
(function (VpcEndpoint) {
    /**
     * @internal
     */
    VpcEndpoint.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(VpcEndpoint = exports.VpcEndpoint || (exports.VpcEndpoint = {}));
var CreateVpcEndpointResult;
(function (CreateVpcEndpointResult) {
    /**
     * @internal
     */
    CreateVpcEndpointResult.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(CreateVpcEndpointResult = exports.CreateVpcEndpointResult || (exports.CreateVpcEndpointResult = {}));
var CreateVpcEndpointConnectionNotificationRequest;
(function (CreateVpcEndpointConnectionNotificationRequest) {
    /**
     * @internal
     */
    CreateVpcEndpointConnectionNotificationRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(CreateVpcEndpointConnectionNotificationRequest = exports.CreateVpcEndpointConnectionNotificationRequest || (exports.CreateVpcEndpointConnectionNotificationRequest = {}));
var ConnectionNotificationState;
(function (ConnectionNotificationState) {
    ConnectionNotificationState["Disabled"] = "Disabled";
    ConnectionNotificationState["Enabled"] = "Enabled";
})(ConnectionNotificationState = exports.ConnectionNotificationState || (exports.ConnectionNotificationState = {}));
var ConnectionNotificationType;
(function (ConnectionNotificationType) {
    ConnectionNotificationType["Topic"] = "Topic";
})(ConnectionNotificationType = exports.ConnectionNotificationType || (exports.ConnectionNotificationType = {}));
var ConnectionNotification;
(function (ConnectionNotification) {
    /**
     * @internal
     */
    ConnectionNotification.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(ConnectionNotification = exports.ConnectionNotification || (exports.ConnectionNotification = {}));
var CreateVpcEndpointConnectionNotificationResult;
(function (CreateVpcEndpointConnectionNotificationResult) {
    /**
     * @internal
     */
    CreateVpcEndpointConnectionNotificationResult.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(CreateVpcEndpointConnectionNotificationResult = exports.CreateVpcEndpointConnectionNotificationResult || (exports.CreateVpcEndpointConnectionNotificationResult = {}));
var CreateVpcEndpointServiceConfigurationRequest;
(function (CreateVpcEndpointServiceConfigurationRequest) {
    /**
     * @internal
     */
    CreateVpcEndpointServiceConfigurationRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(CreateVpcEndpointServiceConfigurationRequest = exports.CreateVpcEndpointServiceConfigurationRequest || (exports.CreateVpcEndpointServiceConfigurationRequest = {}));
var DnsNameState;
(function (DnsNameState) {
    DnsNameState["Failed"] = "failed";
    DnsNameState["PendingVerification"] = "pendingVerification";
    DnsNameState["Verified"] = "verified";
})(DnsNameState = exports.DnsNameState || (exports.DnsNameState = {}));
var PrivateDnsNameConfiguration;
(function (PrivateDnsNameConfiguration) {
    /**
     * @internal
     */
    PrivateDnsNameConfiguration.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(PrivateDnsNameConfiguration = exports.PrivateDnsNameConfiguration || (exports.PrivateDnsNameConfiguration = {}));
var ServiceState;
(function (ServiceState) {
    ServiceState["Available"] = "Available";
    ServiceState["Deleted"] = "Deleted";
    ServiceState["Deleting"] = "Deleting";
    ServiceState["Failed"] = "Failed";
    ServiceState["Pending"] = "Pending";
})(ServiceState = exports.ServiceState || (exports.ServiceState = {}));
var ServiceType;
(function (ServiceType) {
    ServiceType["Gateway"] = "Gateway";
    ServiceType["GatewayLoadBalancer"] = "GatewayLoadBalancer";
    ServiceType["Interface"] = "Interface";
})(ServiceType = exports.ServiceType || (exports.ServiceType = {}));
var ServiceTypeDetail;
(function (ServiceTypeDetail) {
    /**
     * @internal
     */
    ServiceTypeDetail.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(ServiceTypeDetail = exports.ServiceTypeDetail || (exports.ServiceTypeDetail = {}));
var ServiceConfiguration;
(function (ServiceConfiguration) {
    /**
     * @internal
     */
    ServiceConfiguration.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(ServiceConfiguration = exports.ServiceConfiguration || (exports.ServiceConfiguration = {}));
var CreateVpcEndpointServiceConfigurationResult;
(function (CreateVpcEndpointServiceConfigurationResult) {
    /**
     * @internal
     */
    CreateVpcEndpointServiceConfigurationResult.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(CreateVpcEndpointServiceConfigurationResult = exports.CreateVpcEndpointServiceConfigurationResult || (exports.CreateVpcEndpointServiceConfigurationResult = {}));
var CreateVpcPeeringConnectionRequest;
(function (CreateVpcPeeringConnectionRequest) {
    /**
     * @internal
     */
    CreateVpcPeeringConnectionRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(CreateVpcPeeringConnectionRequest = exports.CreateVpcPeeringConnectionRequest || (exports.CreateVpcPeeringConnectionRequest = {}));
var CreateVpcPeeringConnectionResult;
(function (CreateVpcPeeringConnectionResult) {
    /**
     * @internal
     */
    CreateVpcPeeringConnectionResult.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(CreateVpcPeeringConnectionResult = exports.CreateVpcPeeringConnectionResult || (exports.CreateVpcPeeringConnectionResult = {}));
var IKEVersionsRequestListValue;
(function (IKEVersionsRequestListValue) {
    /**
     * @internal
     */
    IKEVersionsRequestListValue.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(IKEVersionsRequestListValue = exports.IKEVersionsRequestListValue || (exports.IKEVersionsRequestListValue = {}));
var Phase1DHGroupNumbersRequestListValue;
(function (Phase1DHGroupNumbersRequestListValue) {
    /**
     * @internal
     */
    Phase1DHGroupNumbersRequestListValue.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(Phase1DHGroupNumbersRequestListValue = exports.Phase1DHGroupNumbersRequestListValue || (exports.Phase1DHGroupNumbersRequestListValue = {}));
var Phase1EncryptionAlgorithmsRequestListValue;
(function (Phase1EncryptionAlgorithmsRequestListValue) {
    /**
     * @internal
     */
    Phase1EncryptionAlgorithmsRequestListValue.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(Phase1EncryptionAlgorithmsRequestListValue = exports.Phase1EncryptionAlgorithmsRequestListValue || (exports.Phase1EncryptionAlgorithmsRequestListValue = {}));
var Phase1IntegrityAlgorithmsRequestListValue;
(function (Phase1IntegrityAlgorithmsRequestListValue) {
    /**
     * @internal
     */
    Phase1IntegrityAlgorithmsRequestListValue.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(Phase1IntegrityAlgorithmsRequestListValue = exports.Phase1IntegrityAlgorithmsRequestListValue || (exports.Phase1IntegrityAlgorithmsRequestListValue = {}));
var Phase2DHGroupNumbersRequestListValue;
(function (Phase2DHGroupNumbersRequestListValue) {
    /**
     * @internal
     */
    Phase2DHGroupNumbersRequestListValue.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(Phase2DHGroupNumbersRequestListValue = exports.Phase2DHGroupNumbersRequestListValue || (exports.Phase2DHGroupNumbersRequestListValue = {}));
var Phase2EncryptionAlgorithmsRequestListValue;
(function (Phase2EncryptionAlgorithmsRequestListValue) {
    /**
     * @internal
     */
    Phase2EncryptionAlgorithmsRequestListValue.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(Phase2EncryptionAlgorithmsRequestListValue = exports.Phase2EncryptionAlgorithmsRequestListValue || (exports.Phase2EncryptionAlgorithmsRequestListValue = {}));
var Phase2IntegrityAlgorithmsRequestListValue;
(function (Phase2IntegrityAlgorithmsRequestListValue) {
    /**
     * @internal
     */
    Phase2IntegrityAlgorithmsRequestListValue.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(Phase2IntegrityAlgorithmsRequestListValue = exports.Phase2IntegrityAlgorithmsRequestListValue || (exports.Phase2IntegrityAlgorithmsRequestListValue = {}));
var VpnTunnelOptionsSpecification;
(function (VpnTunnelOptionsSpecification) {
    /**
     * @internal
     */
    VpnTunnelOptionsSpecification.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(VpnTunnelOptionsSpecification = exports.VpnTunnelOptionsSpecification || (exports.VpnTunnelOptionsSpecification = {}));
var VpnConnectionOptionsSpecification;
(function (VpnConnectionOptionsSpecification) {
    /**
     * @internal
     */
    VpnConnectionOptionsSpecification.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(VpnConnectionOptionsSpecification = exports.VpnConnectionOptionsSpecification || (exports.VpnConnectionOptionsSpecification = {}));
var CreateVpnConnectionRequest;
(function (CreateVpnConnectionRequest) {
    /**
     * @internal
     */
    CreateVpnConnectionRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(CreateVpnConnectionRequest = exports.CreateVpnConnectionRequest || (exports.CreateVpnConnectionRequest = {}));
var IKEVersionsListValue;
(function (IKEVersionsListValue) {
    /**
     * @internal
     */
    IKEVersionsListValue.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(IKEVersionsListValue = exports.IKEVersionsListValue || (exports.IKEVersionsListValue = {}));
var Phase1DHGroupNumbersListValue;
(function (Phase1DHGroupNumbersListValue) {
    /**
     * @internal
     */
    Phase1DHGroupNumbersListValue.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(Phase1DHGroupNumbersListValue = exports.Phase1DHGroupNumbersListValue || (exports.Phase1DHGroupNumbersListValue = {}));
var Phase1EncryptionAlgorithmsListValue;
(function (Phase1EncryptionAlgorithmsListValue) {
    /**
     * @internal
     */
    Phase1EncryptionAlgorithmsListValue.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(Phase1EncryptionAlgorithmsListValue = exports.Phase1EncryptionAlgorithmsListValue || (exports.Phase1EncryptionAlgorithmsListValue = {}));
var Phase1IntegrityAlgorithmsListValue;
(function (Phase1IntegrityAlgorithmsListValue) {
    /**
     * @internal
     */
    Phase1IntegrityAlgorithmsListValue.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(Phase1IntegrityAlgorithmsListValue = exports.Phase1IntegrityAlgorithmsListValue || (exports.Phase1IntegrityAlgorithmsListValue = {}));
var Phase2DHGroupNumbersListValue;
(function (Phase2DHGroupNumbersListValue) {
    /**
     * @internal
     */
    Phase2DHGroupNumbersListValue.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(Phase2DHGroupNumbersListValue = exports.Phase2DHGroupNumbersListValue || (exports.Phase2DHGroupNumbersListValue = {}));
var Phase2EncryptionAlgorithmsListValue;
(function (Phase2EncryptionAlgorithmsListValue) {
    /**
     * @internal
     */
    Phase2EncryptionAlgorithmsListValue.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(Phase2EncryptionAlgorithmsListValue = exports.Phase2EncryptionAlgorithmsListValue || (exports.Phase2EncryptionAlgorithmsListValue = {}));
var Phase2IntegrityAlgorithmsListValue;
(function (Phase2IntegrityAlgorithmsListValue) {
    /**
     * @internal
     */
    Phase2IntegrityAlgorithmsListValue.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(Phase2IntegrityAlgorithmsListValue = exports.Phase2IntegrityAlgorithmsListValue || (exports.Phase2IntegrityAlgorithmsListValue = {}));
var TunnelOption;
(function (TunnelOption) {
    /**
     * @internal
     */
    TunnelOption.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(TunnelOption = exports.TunnelOption || (exports.TunnelOption = {}));
var VpnConnectionOptions;
(function (VpnConnectionOptions) {
    /**
     * @internal
     */
    VpnConnectionOptions.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(VpnConnectionOptions = exports.VpnConnectionOptions || (exports.VpnConnectionOptions = {}));
var VpnStaticRoute;
(function (VpnStaticRoute) {
    /**
     * @internal
     */
    VpnStaticRoute.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(VpnStaticRoute = exports.VpnStaticRoute || (exports.VpnStaticRoute = {}));
var VgwTelemetry;
(function (VgwTelemetry) {
    /**
     * @internal
     */
    VgwTelemetry.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(VgwTelemetry = exports.VgwTelemetry || (exports.VgwTelemetry = {}));
var VpnConnection;
(function (VpnConnection) {
    /**
     * @internal
     */
    VpnConnection.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(VpnConnection = exports.VpnConnection || (exports.VpnConnection = {}));
var CreateVpnConnectionResult;
(function (CreateVpnConnectionResult) {
    /**
     * @internal
     */
    CreateVpnConnectionResult.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(CreateVpnConnectionResult = exports.CreateVpnConnectionResult || (exports.CreateVpnConnectionResult = {}));
var CreateVpnConnectionRouteRequest;
(function (CreateVpnConnectionRouteRequest) {
    /**
     * @internal
     */
    CreateVpnConnectionRouteRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(CreateVpnConnectionRouteRequest = exports.CreateVpnConnectionRouteRequest || (exports.CreateVpnConnectionRouteRequest = {}));
var CreateVpnGatewayRequest;
(function (CreateVpnGatewayRequest) {
    /**
     * @internal
     */
    CreateVpnGatewayRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(CreateVpnGatewayRequest = exports.CreateVpnGatewayRequest || (exports.CreateVpnGatewayRequest = {}));
var VpnGateway;
(function (VpnGateway) {
    /**
     * @internal
     */
    VpnGateway.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(VpnGateway = exports.VpnGateway || (exports.VpnGateway = {}));
var CreateVpnGatewayResult;
(function (CreateVpnGatewayResult) {
    /**
     * @internal
     */
    CreateVpnGatewayResult.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(CreateVpnGatewayResult = exports.CreateVpnGatewayResult || (exports.CreateVpnGatewayResult = {}));
var DeleteCarrierGatewayRequest;
(function (DeleteCarrierGatewayRequest) {
    /**
     * @internal
     */
    DeleteCarrierGatewayRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(DeleteCarrierGatewayRequest = exports.DeleteCarrierGatewayRequest || (exports.DeleteCarrierGatewayRequest = {}));
var DeleteCarrierGatewayResult;
(function (DeleteCarrierGatewayResult) {
    /**
     * @internal
     */
    DeleteCarrierGatewayResult.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(DeleteCarrierGatewayResult = exports.DeleteCarrierGatewayResult || (exports.DeleteCarrierGatewayResult = {}));
var DeleteClientVpnEndpointRequest;
(function (DeleteClientVpnEndpointRequest) {
    /**
     * @internal
     */
    DeleteClientVpnEndpointRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(DeleteClientVpnEndpointRequest = exports.DeleteClientVpnEndpointRequest || (exports.DeleteClientVpnEndpointRequest = {}));
var DeleteClientVpnEndpointResult;
(function (DeleteClientVpnEndpointResult) {
    /**
     * @internal
     */
    DeleteClientVpnEndpointResult.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(DeleteClientVpnEndpointResult = exports.DeleteClientVpnEndpointResult || (exports.DeleteClientVpnEndpointResult = {}));
var DeleteClientVpnRouteRequest;
(function (DeleteClientVpnRouteRequest) {
    /**
     * @internal
     */
    DeleteClientVpnRouteRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(DeleteClientVpnRouteRequest = exports.DeleteClientVpnRouteRequest || (exports.DeleteClientVpnRouteRequest = {}));
var DeleteClientVpnRouteResult;
(function (DeleteClientVpnRouteResult) {
    /**
     * @internal
     */
    DeleteClientVpnRouteResult.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(DeleteClientVpnRouteResult = exports.DeleteClientVpnRouteResult || (exports.DeleteClientVpnRouteResult = {}));
var DeleteCustomerGatewayRequest;
(function (DeleteCustomerGatewayRequest) {
    /**
     * @internal
     */
    DeleteCustomerGatewayRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(DeleteCustomerGatewayRequest = exports.DeleteCustomerGatewayRequest || (exports.DeleteCustomerGatewayRequest = {}));
var DeleteDhcpOptionsRequest;
(function (DeleteDhcpOptionsRequest) {
    /**
     * @internal
     */
    DeleteDhcpOptionsRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(DeleteDhcpOptionsRequest = exports.DeleteDhcpOptionsRequest || (exports.DeleteDhcpOptionsRequest = {}));
var DeleteEgressOnlyInternetGatewayRequest;
(function (DeleteEgressOnlyInternetGatewayRequest) {
    /**
     * @internal
     */
    DeleteEgressOnlyInternetGatewayRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(DeleteEgressOnlyInternetGatewayRequest = exports.DeleteEgressOnlyInternetGatewayRequest || (exports.DeleteEgressOnlyInternetGatewayRequest = {}));
var DeleteEgressOnlyInternetGatewayResult;
(function (DeleteEgressOnlyInternetGatewayResult) {
    /**
     * @internal
     */
    DeleteEgressOnlyInternetGatewayResult.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(DeleteEgressOnlyInternetGatewayResult = exports.DeleteEgressOnlyInternetGatewayResult || (exports.DeleteEgressOnlyInternetGatewayResult = {}));
var DeleteFleetsRequest;
(function (DeleteFleetsRequest) {
    /**
     * @internal
     */
    DeleteFleetsRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(DeleteFleetsRequest = exports.DeleteFleetsRequest || (exports.DeleteFleetsRequest = {}));
var FleetStateCode;
(function (FleetStateCode) {
    FleetStateCode["ACTIVE"] = "active";
    FleetStateCode["DELETED"] = "deleted";
    FleetStateCode["DELETED_RUNNING"] = "deleted_running";
    FleetStateCode["DELETED_TERMINATING_INSTANCES"] = "deleted_terminating";
    FleetStateCode["FAILED"] = "failed";
    FleetStateCode["MODIFYING"] = "modifying";
    FleetStateCode["SUBMITTED"] = "submitted";
})(FleetStateCode = exports.FleetStateCode || (exports.FleetStateCode = {}));
var DeleteFleetSuccessItem;
(function (DeleteFleetSuccessItem) {
    /**
     * @internal
     */
    DeleteFleetSuccessItem.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(DeleteFleetSuccessItem = exports.DeleteFleetSuccessItem || (exports.DeleteFleetSuccessItem = {}));
var DeleteFleetErrorCode;
(function (DeleteFleetErrorCode) {
    DeleteFleetErrorCode["FLEET_ID_DOES_NOT_EXIST"] = "fleetIdDoesNotExist";
    DeleteFleetErrorCode["FLEET_ID_MALFORMED"] = "fleetIdMalformed";
    DeleteFleetErrorCode["FLEET_NOT_IN_DELETABLE_STATE"] = "fleetNotInDeletableState";
    DeleteFleetErrorCode["UNEXPECTED_ERROR"] = "unexpectedError";
})(DeleteFleetErrorCode = exports.DeleteFleetErrorCode || (exports.DeleteFleetErrorCode = {}));
var DeleteFleetError;
(function (DeleteFleetError) {
    /**
     * @internal
     */
    DeleteFleetError.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(DeleteFleetError = exports.DeleteFleetError || (exports.DeleteFleetError = {}));
var DeleteFleetErrorItem;
(function (DeleteFleetErrorItem) {
    /**
     * @internal
     */
    DeleteFleetErrorItem.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(DeleteFleetErrorItem = exports.DeleteFleetErrorItem || (exports.DeleteFleetErrorItem = {}));
var DeleteFleetsResult;
(function (DeleteFleetsResult) {
    /**
     * @internal
     */
    DeleteFleetsResult.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(DeleteFleetsResult = exports.DeleteFleetsResult || (exports.DeleteFleetsResult = {}));
var DeleteFlowLogsRequest;
(function (DeleteFlowLogsRequest) {
    /**
     * @internal
     */
    DeleteFlowLogsRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(DeleteFlowLogsRequest = exports.DeleteFlowLogsRequest || (exports.DeleteFlowLogsRequest = {}));
var DeleteFlowLogsResult;
(function (DeleteFlowLogsResult) {
    /**
     * @internal
     */
    DeleteFlowLogsResult.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(DeleteFlowLogsResult = exports.DeleteFlowLogsResult || (exports.DeleteFlowLogsResult = {}));
var DeleteFpgaImageRequest;
(function (DeleteFpgaImageRequest) {
    /**
     * @internal
     */
    DeleteFpgaImageRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(DeleteFpgaImageRequest = exports.DeleteFpgaImageRequest || (exports.DeleteFpgaImageRequest = {}));
var DeleteFpgaImageResult;
(function (DeleteFpgaImageResult) {
    /**
     * @internal
     */
    DeleteFpgaImageResult.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(DeleteFpgaImageResult = exports.DeleteFpgaImageResult || (exports.DeleteFpgaImageResult = {}));
var DeleteInternetGatewayRequest;
(function (DeleteInternetGatewayRequest) {
    /**
     * @internal
     */
    DeleteInternetGatewayRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(DeleteInternetGatewayRequest = exports.DeleteInternetGatewayRequest || (exports.DeleteInternetGatewayRequest = {}));
var DeleteKeyPairRequest;
(function (DeleteKeyPairRequest) {
    /**
     * @internal
     */
    DeleteKeyPairRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(DeleteKeyPairRequest = exports.DeleteKeyPairRequest || (exports.DeleteKeyPairRequest = {}));
var DeleteLaunchTemplateRequest;
(function (DeleteLaunchTemplateRequest) {
    /**
     * @internal
     */
    DeleteLaunchTemplateRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(DeleteLaunchTemplateRequest = exports.DeleteLaunchTemplateRequest || (exports.DeleteLaunchTemplateRequest = {}));
var DeleteLaunchTemplateResult;
(function (DeleteLaunchTemplateResult) {
    /**
     * @internal
     */
    DeleteLaunchTemplateResult.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(DeleteLaunchTemplateResult = exports.DeleteLaunchTemplateResult || (exports.DeleteLaunchTemplateResult = {}));
var DeleteLaunchTemplateVersionsRequest;
(function (DeleteLaunchTemplateVersionsRequest) {
    /**
     * @internal
     */
    DeleteLaunchTemplateVersionsRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(DeleteLaunchTemplateVersionsRequest = exports.DeleteLaunchTemplateVersionsRequest || (exports.DeleteLaunchTemplateVersionsRequest = {}));
var DeleteLaunchTemplateVersionsResponseSuccessItem;
(function (DeleteLaunchTemplateVersionsResponseSuccessItem) {
    /**
     * @internal
     */
    DeleteLaunchTemplateVersionsResponseSuccessItem.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(DeleteLaunchTemplateVersionsResponseSuccessItem = exports.DeleteLaunchTemplateVersionsResponseSuccessItem || (exports.DeleteLaunchTemplateVersionsResponseSuccessItem = {}));
var LaunchTemplateErrorCode;
(function (LaunchTemplateErrorCode) {
    LaunchTemplateErrorCode["LAUNCH_TEMPLATE_ID_DOES_NOT_EXIST"] = "launchTemplateIdDoesNotExist";
    LaunchTemplateErrorCode["LAUNCH_TEMPLATE_ID_MALFORMED"] = "launchTemplateIdMalformed";
    LaunchTemplateErrorCode["LAUNCH_TEMPLATE_NAME_DOES_NOT_EXIST"] = "launchTemplateNameDoesNotExist";
    LaunchTemplateErrorCode["LAUNCH_TEMPLATE_NAME_MALFORMED"] = "launchTemplateNameMalformed";
    LaunchTemplateErrorCode["LAUNCH_TEMPLATE_VERSION_DOES_NOT_EXIST"] = "launchTemplateVersionDoesNotExist";
    LaunchTemplateErrorCode["UNEXPECTED_ERROR"] = "unexpectedError";
})(LaunchTemplateErrorCode = exports.LaunchTemplateErrorCode || (exports.LaunchTemplateErrorCode = {}));
var ResponseError;
(function (ResponseError) {
    /**
     * @internal
     */
    ResponseError.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(ResponseError = exports.ResponseError || (exports.ResponseError = {}));
var DeleteLaunchTemplateVersionsResponseErrorItem;
(function (DeleteLaunchTemplateVersionsResponseErrorItem) {
    /**
     * @internal
     */
    DeleteLaunchTemplateVersionsResponseErrorItem.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(DeleteLaunchTemplateVersionsResponseErrorItem = exports.DeleteLaunchTemplateVersionsResponseErrorItem || (exports.DeleteLaunchTemplateVersionsResponseErrorItem = {}));
var DeleteLaunchTemplateVersionsResult;
(function (DeleteLaunchTemplateVersionsResult) {
    /**
     * @internal
     */
    DeleteLaunchTemplateVersionsResult.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(DeleteLaunchTemplateVersionsResult = exports.DeleteLaunchTemplateVersionsResult || (exports.DeleteLaunchTemplateVersionsResult = {}));
var DeleteLocalGatewayRouteRequest;
(function (DeleteLocalGatewayRouteRequest) {
    /**
     * @internal
     */
    DeleteLocalGatewayRouteRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(DeleteLocalGatewayRouteRequest = exports.DeleteLocalGatewayRouteRequest || (exports.DeleteLocalGatewayRouteRequest = {}));
var DeleteLocalGatewayRouteResult;
(function (DeleteLocalGatewayRouteResult) {
    /**
     * @internal
     */
    DeleteLocalGatewayRouteResult.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(DeleteLocalGatewayRouteResult = exports.DeleteLocalGatewayRouteResult || (exports.DeleteLocalGatewayRouteResult = {}));
//# sourceMappingURL=models_1.js.map