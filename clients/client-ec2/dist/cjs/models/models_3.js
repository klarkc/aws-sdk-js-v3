"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.LocalGateway = exports.DescribeLocalGatewaysRequest = exports.DescribeLocalGatewayRouteTableVpcAssociationsResult = exports.DescribeLocalGatewayRouteTableVpcAssociationsRequest = exports.DescribeLocalGatewayRouteTableVirtualInterfaceGroupAssociationsResult = exports.LocalGatewayRouteTableVirtualInterfaceGroupAssociation = exports.DescribeLocalGatewayRouteTableVirtualInterfaceGroupAssociationsRequest = exports.DescribeLocalGatewayRouteTablesResult = exports.LocalGatewayRouteTable = exports.DescribeLocalGatewayRouteTablesRequest = exports.DescribeLaunchTemplateVersionsResult = exports.DescribeLaunchTemplateVersionsRequest = exports.DescribeLaunchTemplatesResult = exports.DescribeLaunchTemplatesRequest = exports.DescribeKeyPairsResult = exports.KeyPairInfo = exports.DescribeKeyPairsRequest = exports.DescribeIpv6PoolsResult = exports.Ipv6Pool = exports.PoolCidrBlock = exports.DescribeIpv6PoolsRequest = exports.DescribeInternetGatewaysResult = exports.DescribeInternetGatewaysRequest = exports.DescribeInstanceTypesResult = exports.InstanceTypeInfo = exports.VCpuInfo = exports.ProcessorInfo = exports.PlacementGroupInfo = exports.NetworkInfo = exports.NetworkCardInfo = exports.EfaInfo = exports.MemoryInfo = exports.InstanceStorageInfo = exports.EphemeralNvmeSupport = exports.DiskInfo = exports.InferenceAcceleratorInfo = exports.InferenceDeviceInfo = exports.InstanceTypeHypervisor = exports.GpuInfo = exports.GpuDeviceInfo = exports.GpuDeviceMemoryInfo = exports.FpgaInfo = exports.FpgaDeviceInfo = exports.FpgaDeviceMemoryInfo = exports.EbsInfo = exports.EbsNvmeSupport = exports.EbsOptimizedInfo = exports.DescribeInstanceTypesRequest = exports.DescribeInstanceTypeOfferingsResult = exports.InstanceTypeOffering = void 0;
exports.Region = exports.DescribeRegionsRequest = exports.DescribePublicIpv4PoolsResult = exports.PublicIpv4Pool = exports.PublicIpv4PoolRange = exports.DescribePublicIpv4PoolsRequest = exports.DescribePrincipalIdFormatResult = exports.PrincipalIdFormat = exports.DescribePrincipalIdFormatRequest = exports.DescribePrefixListsResult = exports.PrefixList = exports.DescribePrefixListsRequest = exports.DescribePlacementGroupsResult = exports.DescribePlacementGroupsRequest = exports.DescribeNetworkInterfacesResult = exports.DescribeNetworkInterfacesRequest = exports.DescribeNetworkInterfacePermissionsResult = exports.DescribeNetworkInterfacePermissionsRequest = exports.DescribeNetworkInterfaceAttributeResult = exports.DescribeNetworkInterfaceAttributeRequest = exports.DescribeNetworkInsightsPathsResult = exports.DescribeNetworkInsightsPathsRequest = exports.DescribeNetworkInsightsAnalysesResult = exports.NetworkInsightsAnalysis = exports.PathComponent = exports.AnalysisPacketHeader = exports.Explanation = exports.AnalysisSecurityGroupRule = exports.AnalysisRouteTableRoute = exports.AnalysisLoadBalancerTarget = exports.AnalysisLoadBalancerListener = exports.AnalysisAclRule = exports.AnalysisComponent = exports.DescribeNetworkInsightsAnalysesRequest = exports.DescribeNetworkAclsResult = exports.DescribeNetworkAclsRequest = exports.DescribeNatGatewaysResult = exports.DescribeNatGatewaysRequest = exports.DescribeMovingAddressesResult = exports.MovingAddressStatus = exports.DescribeMovingAddressesRequest = exports.DescribeManagedPrefixListsResult = exports.DescribeManagedPrefixListsRequest = exports.DescribeLocalGatewayVirtualInterfacesResult = exports.LocalGatewayVirtualInterface = exports.DescribeLocalGatewayVirtualInterfacesRequest = exports.DescribeLocalGatewayVirtualInterfaceGroupsResult = exports.LocalGatewayVirtualInterfaceGroup = exports.DescribeLocalGatewayVirtualInterfaceGroupsRequest = exports.DescribeLocalGatewaysResult = void 0;
exports.DescribeSpotFleetRequestHistoryRequest = exports.EventType = exports.DescribeSpotFleetInstancesResponse = exports.DescribeSpotFleetInstancesRequest = exports.DescribeSpotDatafeedSubscriptionResult = exports.DescribeSpotDatafeedSubscriptionRequest = exports.DescribeSnapshotsResult = exports.DescribeSnapshotsRequest = exports.DescribeSnapshotAttributeResult = exports.CreateVolumePermission = exports.DescribeSnapshotAttributeRequest = exports.DescribeSecurityGroupsResult = exports.SecurityGroup = exports.DescribeSecurityGroupsRequest = exports.DescribeSecurityGroupReferencesResult = exports.SecurityGroupReference = exports.DescribeSecurityGroupReferencesRequest = exports.DescribeScheduledInstancesResult = exports.ScheduledInstance = exports.DescribeScheduledInstancesRequest = exports.SlotStartTimeRangeRequest = exports.DescribeScheduledInstanceAvailabilityResult = exports.ScheduledInstanceAvailability = exports.ScheduledInstanceRecurrence = exports.DescribeScheduledInstanceAvailabilityRequest = exports.ScheduledInstanceRecurrenceRequest = exports.SlotDateTimeRangeRequest = exports.DescribeRouteTablesResult = exports.DescribeRouteTablesRequest = exports.DescribeReservedInstancesOfferingsResult = exports.ReservedInstancesOffering = exports.PricingDetail = exports.DescribeReservedInstancesOfferingsRequest = exports.DescribeReservedInstancesModificationsResult = exports.ReservedInstancesModification = exports.ReservedInstancesId = exports.ReservedInstancesModificationResult = exports.ReservedInstancesConfiguration = exports.DescribeReservedInstancesModificationsRequest = exports.DescribeReservedInstancesListingsResult = exports.DescribeReservedInstancesListingsRequest = exports.DescribeReservedInstancesResult = exports.ReservedInstances = exports.Scope = exports.RecurringCharge = exports.DescribeReservedInstancesRequest = exports.OfferingClassType = exports.DescribeReplaceRootVolumeTasksResult = exports.DescribeReplaceRootVolumeTasksRequest = exports.DescribeRegionsResult = void 0;
exports.DescribeTrafficMirrorTargetsResult = exports.DescribeTrafficMirrorTargetsRequest = exports.DescribeTrafficMirrorSessionsResult = exports.DescribeTrafficMirrorSessionsRequest = exports.DescribeTrafficMirrorFiltersResult = exports.DescribeTrafficMirrorFiltersRequest = exports.DescribeTagsResult = exports.TagDescription = exports.DescribeTagsRequest = exports.DescribeSubnetsResult = exports.DescribeSubnetsRequest = exports.DescribeStoreImageTasksResult = exports.StoreImageTaskResult = exports.DescribeStoreImageTasksRequest = exports.DescribeStaleSecurityGroupsResult = exports.StaleSecurityGroup = exports.StaleIpPermission = exports.DescribeStaleSecurityGroupsRequest = exports.DescribeSpotPriceHistoryResult = exports.SpotPrice = exports.DescribeSpotPriceHistoryRequest = exports.DescribeSpotInstanceRequestsResult = exports.SpotInstanceRequest = exports.SpotInstanceStatus = exports.LaunchSpecification = exports.RunInstancesMonitoringEnabled = exports.DescribeSpotInstanceRequestsRequest = exports.DescribeSpotFleetRequestsResponse = exports.SpotFleetRequestConfig = exports.SpotFleetRequestConfigData = exports.SpotMaintenanceStrategies = exports.SpotCapacityRebalance = exports.ReplacementStrategy = exports.OnDemandAllocationStrategy = exports.LoadBalancersConfig = exports.TargetGroupsConfig = exports.TargetGroup = exports.ClassicLoadBalancersConfig = exports.ClassicLoadBalancer = exports.LaunchTemplateConfig = exports.LaunchTemplateOverrides = exports.SpotFleetLaunchSpecification = exports.SpotFleetTagSpecification = exports.SpotPlacement = exports.InstanceNetworkInterfaceSpecification = exports.SpotFleetMonitoring = exports.ExcessCapacityTerminationPolicy = exports.DescribeSpotFleetRequestsRequest = exports.DescribeSpotFleetRequestHistoryResponse = exports.HistoryRecord = void 0;
exports.DescribeVpcEndpointServiceConfigurationsResult = exports.DescribeVpcEndpointServiceConfigurationsRequest = exports.DescribeVpcEndpointsResult = exports.DescribeVpcEndpointsRequest = exports.DescribeVpcEndpointConnectionsResult = exports.VpcEndpointConnection = exports.DescribeVpcEndpointConnectionsRequest = exports.DescribeVpcEndpointConnectionNotificationsResult = exports.DescribeVpcEndpointConnectionNotificationsRequest = exports.DescribeVpcClassicLinkDnsSupportResult = exports.ClassicLinkDnsSupport = exports.DescribeVpcClassicLinkDnsSupportRequest = exports.DescribeVpcClassicLinkResult = exports.VpcClassicLink = exports.DescribeVpcClassicLinkRequest = exports.DescribeVpcAttributeResult = exports.DescribeVpcAttributeRequest = exports.DescribeVolumeStatusResult = exports.VolumeStatusItem = exports.VolumeStatusInfo = exports.VolumeStatusDetails = exports.VolumeStatusEvent = exports.VolumeStatusAttachmentStatus = exports.VolumeStatusAction = exports.DescribeVolumeStatusRequest = exports.DescribeVolumesModificationsResult = exports.VolumeModification = exports.DescribeVolumesModificationsRequest = exports.DescribeVolumesResult = exports.DescribeVolumesRequest = exports.DescribeVolumeAttributeResult = exports.DescribeVolumeAttributeRequest = exports.DescribeTransitGatewayVpcAttachmentsResult = exports.DescribeTransitGatewayVpcAttachmentsRequest = exports.DescribeTransitGatewaysResult = exports.DescribeTransitGatewaysRequest = exports.DescribeTransitGatewayRouteTablesResult = exports.DescribeTransitGatewayRouteTablesRequest = exports.DescribeTransitGatewayPeeringAttachmentsResult = exports.DescribeTransitGatewayPeeringAttachmentsRequest = exports.DescribeTransitGatewayMulticastDomainsResult = exports.DescribeTransitGatewayMulticastDomainsRequest = exports.DescribeTransitGatewayConnectsResult = exports.DescribeTransitGatewayConnectsRequest = exports.DescribeTransitGatewayConnectPeersResult = exports.DescribeTransitGatewayConnectPeersRequest = exports.DescribeTransitGatewayAttachmentsResult = exports.TransitGatewayAttachment = exports.TransitGatewayAttachmentAssociation = exports.DescribeTransitGatewayAttachmentsRequest = void 0;
exports.DisableFastSnapshotRestoreErrorItem = exports.DisableFastSnapshotRestoreStateErrorItem = exports.DisableFastSnapshotRestoreStateError = exports.DisableFastSnapshotRestoreSuccessItem = exports.DisableFastSnapshotRestoresRequest = exports.DisableEbsEncryptionByDefaultResult = exports.DisableEbsEncryptionByDefaultRequest = exports.DetachVpnGatewayRequest = exports.DetachVolumeRequest = exports.DetachNetworkInterfaceRequest = exports.DetachInternetGatewayRequest = exports.DetachClassicLinkVpcResult = exports.DetachClassicLinkVpcRequest = exports.DescribeVpnGatewaysResult = exports.DescribeVpnGatewaysRequest = exports.DescribeVpnConnectionsResult = exports.DescribeVpnConnectionsRequest = exports.DescribeVpcsResult = exports.DescribeVpcsRequest = exports.DescribeVpcPeeringConnectionsResult = exports.DescribeVpcPeeringConnectionsRequest = exports.DescribeVpcEndpointServicesResult = exports.ServiceDetail = exports.PrivateDnsDetails = exports.DescribeVpcEndpointServicesRequest = exports.DescribeVpcEndpointServicePermissionsResult = exports.DescribeVpcEndpointServicePermissionsRequest = void 0;
var InstanceTypeOffering;
(function (InstanceTypeOffering) {
    /**
     * @internal
     */
    InstanceTypeOffering.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(InstanceTypeOffering = exports.InstanceTypeOffering || (exports.InstanceTypeOffering = {}));
var DescribeInstanceTypeOfferingsResult;
(function (DescribeInstanceTypeOfferingsResult) {
    /**
     * @internal
     */
    DescribeInstanceTypeOfferingsResult.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(DescribeInstanceTypeOfferingsResult = exports.DescribeInstanceTypeOfferingsResult || (exports.DescribeInstanceTypeOfferingsResult = {}));
var DescribeInstanceTypesRequest;
(function (DescribeInstanceTypesRequest) {
    /**
     * @internal
     */
    DescribeInstanceTypesRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(DescribeInstanceTypesRequest = exports.DescribeInstanceTypesRequest || (exports.DescribeInstanceTypesRequest = {}));
var EbsOptimizedInfo;
(function (EbsOptimizedInfo) {
    /**
     * @internal
     */
    EbsOptimizedInfo.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(EbsOptimizedInfo = exports.EbsOptimizedInfo || (exports.EbsOptimizedInfo = {}));
var EbsNvmeSupport;
(function (EbsNvmeSupport) {
    EbsNvmeSupport["REQUIRED"] = "required";
    EbsNvmeSupport["SUPPORTED"] = "supported";
    EbsNvmeSupport["UNSUPPORTED"] = "unsupported";
})(EbsNvmeSupport = exports.EbsNvmeSupport || (exports.EbsNvmeSupport = {}));
var EbsInfo;
(function (EbsInfo) {
    /**
     * @internal
     */
    EbsInfo.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(EbsInfo = exports.EbsInfo || (exports.EbsInfo = {}));
var FpgaDeviceMemoryInfo;
(function (FpgaDeviceMemoryInfo) {
    /**
     * @internal
     */
    FpgaDeviceMemoryInfo.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(FpgaDeviceMemoryInfo = exports.FpgaDeviceMemoryInfo || (exports.FpgaDeviceMemoryInfo = {}));
var FpgaDeviceInfo;
(function (FpgaDeviceInfo) {
    /**
     * @internal
     */
    FpgaDeviceInfo.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(FpgaDeviceInfo = exports.FpgaDeviceInfo || (exports.FpgaDeviceInfo = {}));
var FpgaInfo;
(function (FpgaInfo) {
    /**
     * @internal
     */
    FpgaInfo.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(FpgaInfo = exports.FpgaInfo || (exports.FpgaInfo = {}));
var GpuDeviceMemoryInfo;
(function (GpuDeviceMemoryInfo) {
    /**
     * @internal
     */
    GpuDeviceMemoryInfo.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(GpuDeviceMemoryInfo = exports.GpuDeviceMemoryInfo || (exports.GpuDeviceMemoryInfo = {}));
var GpuDeviceInfo;
(function (GpuDeviceInfo) {
    /**
     * @internal
     */
    GpuDeviceInfo.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(GpuDeviceInfo = exports.GpuDeviceInfo || (exports.GpuDeviceInfo = {}));
var GpuInfo;
(function (GpuInfo) {
    /**
     * @internal
     */
    GpuInfo.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(GpuInfo = exports.GpuInfo || (exports.GpuInfo = {}));
var InstanceTypeHypervisor;
(function (InstanceTypeHypervisor) {
    InstanceTypeHypervisor["NITRO"] = "nitro";
    InstanceTypeHypervisor["XEN"] = "xen";
})(InstanceTypeHypervisor = exports.InstanceTypeHypervisor || (exports.InstanceTypeHypervisor = {}));
var InferenceDeviceInfo;
(function (InferenceDeviceInfo) {
    /**
     * @internal
     */
    InferenceDeviceInfo.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(InferenceDeviceInfo = exports.InferenceDeviceInfo || (exports.InferenceDeviceInfo = {}));
var InferenceAcceleratorInfo;
(function (InferenceAcceleratorInfo) {
    /**
     * @internal
     */
    InferenceAcceleratorInfo.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(InferenceAcceleratorInfo = exports.InferenceAcceleratorInfo || (exports.InferenceAcceleratorInfo = {}));
var DiskInfo;
(function (DiskInfo) {
    /**
     * @internal
     */
    DiskInfo.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(DiskInfo = exports.DiskInfo || (exports.DiskInfo = {}));
var EphemeralNvmeSupport;
(function (EphemeralNvmeSupport) {
    EphemeralNvmeSupport["REQUIRED"] = "required";
    EphemeralNvmeSupport["SUPPORTED"] = "supported";
    EphemeralNvmeSupport["UNSUPPORTED"] = "unsupported";
})(EphemeralNvmeSupport = exports.EphemeralNvmeSupport || (exports.EphemeralNvmeSupport = {}));
var InstanceStorageInfo;
(function (InstanceStorageInfo) {
    /**
     * @internal
     */
    InstanceStorageInfo.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(InstanceStorageInfo = exports.InstanceStorageInfo || (exports.InstanceStorageInfo = {}));
var MemoryInfo;
(function (MemoryInfo) {
    /**
     * @internal
     */
    MemoryInfo.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(MemoryInfo = exports.MemoryInfo || (exports.MemoryInfo = {}));
var EfaInfo;
(function (EfaInfo) {
    /**
     * @internal
     */
    EfaInfo.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(EfaInfo = exports.EfaInfo || (exports.EfaInfo = {}));
var NetworkCardInfo;
(function (NetworkCardInfo) {
    /**
     * @internal
     */
    NetworkCardInfo.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(NetworkCardInfo = exports.NetworkCardInfo || (exports.NetworkCardInfo = {}));
var NetworkInfo;
(function (NetworkInfo) {
    /**
     * @internal
     */
    NetworkInfo.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(NetworkInfo = exports.NetworkInfo || (exports.NetworkInfo = {}));
var PlacementGroupInfo;
(function (PlacementGroupInfo) {
    /**
     * @internal
     */
    PlacementGroupInfo.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(PlacementGroupInfo = exports.PlacementGroupInfo || (exports.PlacementGroupInfo = {}));
var ProcessorInfo;
(function (ProcessorInfo) {
    /**
     * @internal
     */
    ProcessorInfo.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(ProcessorInfo = exports.ProcessorInfo || (exports.ProcessorInfo = {}));
var VCpuInfo;
(function (VCpuInfo) {
    /**
     * @internal
     */
    VCpuInfo.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(VCpuInfo = exports.VCpuInfo || (exports.VCpuInfo = {}));
var InstanceTypeInfo;
(function (InstanceTypeInfo) {
    /**
     * @internal
     */
    InstanceTypeInfo.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(InstanceTypeInfo = exports.InstanceTypeInfo || (exports.InstanceTypeInfo = {}));
var DescribeInstanceTypesResult;
(function (DescribeInstanceTypesResult) {
    /**
     * @internal
     */
    DescribeInstanceTypesResult.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(DescribeInstanceTypesResult = exports.DescribeInstanceTypesResult || (exports.DescribeInstanceTypesResult = {}));
var DescribeInternetGatewaysRequest;
(function (DescribeInternetGatewaysRequest) {
    /**
     * @internal
     */
    DescribeInternetGatewaysRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(DescribeInternetGatewaysRequest = exports.DescribeInternetGatewaysRequest || (exports.DescribeInternetGatewaysRequest = {}));
var DescribeInternetGatewaysResult;
(function (DescribeInternetGatewaysResult) {
    /**
     * @internal
     */
    DescribeInternetGatewaysResult.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(DescribeInternetGatewaysResult = exports.DescribeInternetGatewaysResult || (exports.DescribeInternetGatewaysResult = {}));
var DescribeIpv6PoolsRequest;
(function (DescribeIpv6PoolsRequest) {
    /**
     * @internal
     */
    DescribeIpv6PoolsRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(DescribeIpv6PoolsRequest = exports.DescribeIpv6PoolsRequest || (exports.DescribeIpv6PoolsRequest = {}));
var PoolCidrBlock;
(function (PoolCidrBlock) {
    /**
     * @internal
     */
    PoolCidrBlock.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(PoolCidrBlock = exports.PoolCidrBlock || (exports.PoolCidrBlock = {}));
var Ipv6Pool;
(function (Ipv6Pool) {
    /**
     * @internal
     */
    Ipv6Pool.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(Ipv6Pool = exports.Ipv6Pool || (exports.Ipv6Pool = {}));
var DescribeIpv6PoolsResult;
(function (DescribeIpv6PoolsResult) {
    /**
     * @internal
     */
    DescribeIpv6PoolsResult.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(DescribeIpv6PoolsResult = exports.DescribeIpv6PoolsResult || (exports.DescribeIpv6PoolsResult = {}));
var DescribeKeyPairsRequest;
(function (DescribeKeyPairsRequest) {
    /**
     * @internal
     */
    DescribeKeyPairsRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(DescribeKeyPairsRequest = exports.DescribeKeyPairsRequest || (exports.DescribeKeyPairsRequest = {}));
var KeyPairInfo;
(function (KeyPairInfo) {
    /**
     * @internal
     */
    KeyPairInfo.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(KeyPairInfo = exports.KeyPairInfo || (exports.KeyPairInfo = {}));
var DescribeKeyPairsResult;
(function (DescribeKeyPairsResult) {
    /**
     * @internal
     */
    DescribeKeyPairsResult.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(DescribeKeyPairsResult = exports.DescribeKeyPairsResult || (exports.DescribeKeyPairsResult = {}));
var DescribeLaunchTemplatesRequest;
(function (DescribeLaunchTemplatesRequest) {
    /**
     * @internal
     */
    DescribeLaunchTemplatesRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(DescribeLaunchTemplatesRequest = exports.DescribeLaunchTemplatesRequest || (exports.DescribeLaunchTemplatesRequest = {}));
var DescribeLaunchTemplatesResult;
(function (DescribeLaunchTemplatesResult) {
    /**
     * @internal
     */
    DescribeLaunchTemplatesResult.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(DescribeLaunchTemplatesResult = exports.DescribeLaunchTemplatesResult || (exports.DescribeLaunchTemplatesResult = {}));
var DescribeLaunchTemplateVersionsRequest;
(function (DescribeLaunchTemplateVersionsRequest) {
    /**
     * @internal
     */
    DescribeLaunchTemplateVersionsRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(DescribeLaunchTemplateVersionsRequest = exports.DescribeLaunchTemplateVersionsRequest || (exports.DescribeLaunchTemplateVersionsRequest = {}));
var DescribeLaunchTemplateVersionsResult;
(function (DescribeLaunchTemplateVersionsResult) {
    /**
     * @internal
     */
    DescribeLaunchTemplateVersionsResult.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(DescribeLaunchTemplateVersionsResult = exports.DescribeLaunchTemplateVersionsResult || (exports.DescribeLaunchTemplateVersionsResult = {}));
var DescribeLocalGatewayRouteTablesRequest;
(function (DescribeLocalGatewayRouteTablesRequest) {
    /**
     * @internal
     */
    DescribeLocalGatewayRouteTablesRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(DescribeLocalGatewayRouteTablesRequest = exports.DescribeLocalGatewayRouteTablesRequest || (exports.DescribeLocalGatewayRouteTablesRequest = {}));
var LocalGatewayRouteTable;
(function (LocalGatewayRouteTable) {
    /**
     * @internal
     */
    LocalGatewayRouteTable.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(LocalGatewayRouteTable = exports.LocalGatewayRouteTable || (exports.LocalGatewayRouteTable = {}));
var DescribeLocalGatewayRouteTablesResult;
(function (DescribeLocalGatewayRouteTablesResult) {
    /**
     * @internal
     */
    DescribeLocalGatewayRouteTablesResult.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(DescribeLocalGatewayRouteTablesResult = exports.DescribeLocalGatewayRouteTablesResult || (exports.DescribeLocalGatewayRouteTablesResult = {}));
var DescribeLocalGatewayRouteTableVirtualInterfaceGroupAssociationsRequest;
(function (DescribeLocalGatewayRouteTableVirtualInterfaceGroupAssociationsRequest) {
    /**
     * @internal
     */
    DescribeLocalGatewayRouteTableVirtualInterfaceGroupAssociationsRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(DescribeLocalGatewayRouteTableVirtualInterfaceGroupAssociationsRequest = exports.DescribeLocalGatewayRouteTableVirtualInterfaceGroupAssociationsRequest || (exports.DescribeLocalGatewayRouteTableVirtualInterfaceGroupAssociationsRequest = {}));
var LocalGatewayRouteTableVirtualInterfaceGroupAssociation;
(function (LocalGatewayRouteTableVirtualInterfaceGroupAssociation) {
    /**
     * @internal
     */
    LocalGatewayRouteTableVirtualInterfaceGroupAssociation.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(LocalGatewayRouteTableVirtualInterfaceGroupAssociation = exports.LocalGatewayRouteTableVirtualInterfaceGroupAssociation || (exports.LocalGatewayRouteTableVirtualInterfaceGroupAssociation = {}));
var DescribeLocalGatewayRouteTableVirtualInterfaceGroupAssociationsResult;
(function (DescribeLocalGatewayRouteTableVirtualInterfaceGroupAssociationsResult) {
    /**
     * @internal
     */
    DescribeLocalGatewayRouteTableVirtualInterfaceGroupAssociationsResult.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(DescribeLocalGatewayRouteTableVirtualInterfaceGroupAssociationsResult = exports.DescribeLocalGatewayRouteTableVirtualInterfaceGroupAssociationsResult || (exports.DescribeLocalGatewayRouteTableVirtualInterfaceGroupAssociationsResult = {}));
var DescribeLocalGatewayRouteTableVpcAssociationsRequest;
(function (DescribeLocalGatewayRouteTableVpcAssociationsRequest) {
    /**
     * @internal
     */
    DescribeLocalGatewayRouteTableVpcAssociationsRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(DescribeLocalGatewayRouteTableVpcAssociationsRequest = exports.DescribeLocalGatewayRouteTableVpcAssociationsRequest || (exports.DescribeLocalGatewayRouteTableVpcAssociationsRequest = {}));
var DescribeLocalGatewayRouteTableVpcAssociationsResult;
(function (DescribeLocalGatewayRouteTableVpcAssociationsResult) {
    /**
     * @internal
     */
    DescribeLocalGatewayRouteTableVpcAssociationsResult.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(DescribeLocalGatewayRouteTableVpcAssociationsResult = exports.DescribeLocalGatewayRouteTableVpcAssociationsResult || (exports.DescribeLocalGatewayRouteTableVpcAssociationsResult = {}));
var DescribeLocalGatewaysRequest;
(function (DescribeLocalGatewaysRequest) {
    /**
     * @internal
     */
    DescribeLocalGatewaysRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(DescribeLocalGatewaysRequest = exports.DescribeLocalGatewaysRequest || (exports.DescribeLocalGatewaysRequest = {}));
var LocalGateway;
(function (LocalGateway) {
    /**
     * @internal
     */
    LocalGateway.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(LocalGateway = exports.LocalGateway || (exports.LocalGateway = {}));
var DescribeLocalGatewaysResult;
(function (DescribeLocalGatewaysResult) {
    /**
     * @internal
     */
    DescribeLocalGatewaysResult.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(DescribeLocalGatewaysResult = exports.DescribeLocalGatewaysResult || (exports.DescribeLocalGatewaysResult = {}));
var DescribeLocalGatewayVirtualInterfaceGroupsRequest;
(function (DescribeLocalGatewayVirtualInterfaceGroupsRequest) {
    /**
     * @internal
     */
    DescribeLocalGatewayVirtualInterfaceGroupsRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(DescribeLocalGatewayVirtualInterfaceGroupsRequest = exports.DescribeLocalGatewayVirtualInterfaceGroupsRequest || (exports.DescribeLocalGatewayVirtualInterfaceGroupsRequest = {}));
var LocalGatewayVirtualInterfaceGroup;
(function (LocalGatewayVirtualInterfaceGroup) {
    /**
     * @internal
     */
    LocalGatewayVirtualInterfaceGroup.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(LocalGatewayVirtualInterfaceGroup = exports.LocalGatewayVirtualInterfaceGroup || (exports.LocalGatewayVirtualInterfaceGroup = {}));
var DescribeLocalGatewayVirtualInterfaceGroupsResult;
(function (DescribeLocalGatewayVirtualInterfaceGroupsResult) {
    /**
     * @internal
     */
    DescribeLocalGatewayVirtualInterfaceGroupsResult.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(DescribeLocalGatewayVirtualInterfaceGroupsResult = exports.DescribeLocalGatewayVirtualInterfaceGroupsResult || (exports.DescribeLocalGatewayVirtualInterfaceGroupsResult = {}));
var DescribeLocalGatewayVirtualInterfacesRequest;
(function (DescribeLocalGatewayVirtualInterfacesRequest) {
    /**
     * @internal
     */
    DescribeLocalGatewayVirtualInterfacesRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(DescribeLocalGatewayVirtualInterfacesRequest = exports.DescribeLocalGatewayVirtualInterfacesRequest || (exports.DescribeLocalGatewayVirtualInterfacesRequest = {}));
var LocalGatewayVirtualInterface;
(function (LocalGatewayVirtualInterface) {
    /**
     * @internal
     */
    LocalGatewayVirtualInterface.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(LocalGatewayVirtualInterface = exports.LocalGatewayVirtualInterface || (exports.LocalGatewayVirtualInterface = {}));
var DescribeLocalGatewayVirtualInterfacesResult;
(function (DescribeLocalGatewayVirtualInterfacesResult) {
    /**
     * @internal
     */
    DescribeLocalGatewayVirtualInterfacesResult.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(DescribeLocalGatewayVirtualInterfacesResult = exports.DescribeLocalGatewayVirtualInterfacesResult || (exports.DescribeLocalGatewayVirtualInterfacesResult = {}));
var DescribeManagedPrefixListsRequest;
(function (DescribeManagedPrefixListsRequest) {
    /**
     * @internal
     */
    DescribeManagedPrefixListsRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(DescribeManagedPrefixListsRequest = exports.DescribeManagedPrefixListsRequest || (exports.DescribeManagedPrefixListsRequest = {}));
var DescribeManagedPrefixListsResult;
(function (DescribeManagedPrefixListsResult) {
    /**
     * @internal
     */
    DescribeManagedPrefixListsResult.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(DescribeManagedPrefixListsResult = exports.DescribeManagedPrefixListsResult || (exports.DescribeManagedPrefixListsResult = {}));
var DescribeMovingAddressesRequest;
(function (DescribeMovingAddressesRequest) {
    /**
     * @internal
     */
    DescribeMovingAddressesRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(DescribeMovingAddressesRequest = exports.DescribeMovingAddressesRequest || (exports.DescribeMovingAddressesRequest = {}));
var MovingAddressStatus;
(function (MovingAddressStatus) {
    /**
     * @internal
     */
    MovingAddressStatus.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(MovingAddressStatus = exports.MovingAddressStatus || (exports.MovingAddressStatus = {}));
var DescribeMovingAddressesResult;
(function (DescribeMovingAddressesResult) {
    /**
     * @internal
     */
    DescribeMovingAddressesResult.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(DescribeMovingAddressesResult = exports.DescribeMovingAddressesResult || (exports.DescribeMovingAddressesResult = {}));
var DescribeNatGatewaysRequest;
(function (DescribeNatGatewaysRequest) {
    /**
     * @internal
     */
    DescribeNatGatewaysRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(DescribeNatGatewaysRequest = exports.DescribeNatGatewaysRequest || (exports.DescribeNatGatewaysRequest = {}));
var DescribeNatGatewaysResult;
(function (DescribeNatGatewaysResult) {
    /**
     * @internal
     */
    DescribeNatGatewaysResult.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(DescribeNatGatewaysResult = exports.DescribeNatGatewaysResult || (exports.DescribeNatGatewaysResult = {}));
var DescribeNetworkAclsRequest;
(function (DescribeNetworkAclsRequest) {
    /**
     * @internal
     */
    DescribeNetworkAclsRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(DescribeNetworkAclsRequest = exports.DescribeNetworkAclsRequest || (exports.DescribeNetworkAclsRequest = {}));
var DescribeNetworkAclsResult;
(function (DescribeNetworkAclsResult) {
    /**
     * @internal
     */
    DescribeNetworkAclsResult.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(DescribeNetworkAclsResult = exports.DescribeNetworkAclsResult || (exports.DescribeNetworkAclsResult = {}));
var DescribeNetworkInsightsAnalysesRequest;
(function (DescribeNetworkInsightsAnalysesRequest) {
    /**
     * @internal
     */
    DescribeNetworkInsightsAnalysesRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(DescribeNetworkInsightsAnalysesRequest = exports.DescribeNetworkInsightsAnalysesRequest || (exports.DescribeNetworkInsightsAnalysesRequest = {}));
var AnalysisComponent;
(function (AnalysisComponent) {
    /**
     * @internal
     */
    AnalysisComponent.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(AnalysisComponent = exports.AnalysisComponent || (exports.AnalysisComponent = {}));
var AnalysisAclRule;
(function (AnalysisAclRule) {
    /**
     * @internal
     */
    AnalysisAclRule.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(AnalysisAclRule = exports.AnalysisAclRule || (exports.AnalysisAclRule = {}));
var AnalysisLoadBalancerListener;
(function (AnalysisLoadBalancerListener) {
    /**
     * @internal
     */
    AnalysisLoadBalancerListener.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(AnalysisLoadBalancerListener = exports.AnalysisLoadBalancerListener || (exports.AnalysisLoadBalancerListener = {}));
var AnalysisLoadBalancerTarget;
(function (AnalysisLoadBalancerTarget) {
    /**
     * @internal
     */
    AnalysisLoadBalancerTarget.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(AnalysisLoadBalancerTarget = exports.AnalysisLoadBalancerTarget || (exports.AnalysisLoadBalancerTarget = {}));
var AnalysisRouteTableRoute;
(function (AnalysisRouteTableRoute) {
    /**
     * @internal
     */
    AnalysisRouteTableRoute.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(AnalysisRouteTableRoute = exports.AnalysisRouteTableRoute || (exports.AnalysisRouteTableRoute = {}));
var AnalysisSecurityGroupRule;
(function (AnalysisSecurityGroupRule) {
    /**
     * @internal
     */
    AnalysisSecurityGroupRule.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(AnalysisSecurityGroupRule = exports.AnalysisSecurityGroupRule || (exports.AnalysisSecurityGroupRule = {}));
var Explanation;
(function (Explanation) {
    /**
     * @internal
     */
    Explanation.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(Explanation = exports.Explanation || (exports.Explanation = {}));
var AnalysisPacketHeader;
(function (AnalysisPacketHeader) {
    /**
     * @internal
     */
    AnalysisPacketHeader.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(AnalysisPacketHeader = exports.AnalysisPacketHeader || (exports.AnalysisPacketHeader = {}));
var PathComponent;
(function (PathComponent) {
    /**
     * @internal
     */
    PathComponent.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(PathComponent = exports.PathComponent || (exports.PathComponent = {}));
var NetworkInsightsAnalysis;
(function (NetworkInsightsAnalysis) {
    /**
     * @internal
     */
    NetworkInsightsAnalysis.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(NetworkInsightsAnalysis = exports.NetworkInsightsAnalysis || (exports.NetworkInsightsAnalysis = {}));
var DescribeNetworkInsightsAnalysesResult;
(function (DescribeNetworkInsightsAnalysesResult) {
    /**
     * @internal
     */
    DescribeNetworkInsightsAnalysesResult.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(DescribeNetworkInsightsAnalysesResult = exports.DescribeNetworkInsightsAnalysesResult || (exports.DescribeNetworkInsightsAnalysesResult = {}));
var DescribeNetworkInsightsPathsRequest;
(function (DescribeNetworkInsightsPathsRequest) {
    /**
     * @internal
     */
    DescribeNetworkInsightsPathsRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(DescribeNetworkInsightsPathsRequest = exports.DescribeNetworkInsightsPathsRequest || (exports.DescribeNetworkInsightsPathsRequest = {}));
var DescribeNetworkInsightsPathsResult;
(function (DescribeNetworkInsightsPathsResult) {
    /**
     * @internal
     */
    DescribeNetworkInsightsPathsResult.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(DescribeNetworkInsightsPathsResult = exports.DescribeNetworkInsightsPathsResult || (exports.DescribeNetworkInsightsPathsResult = {}));
var DescribeNetworkInterfaceAttributeRequest;
(function (DescribeNetworkInterfaceAttributeRequest) {
    /**
     * @internal
     */
    DescribeNetworkInterfaceAttributeRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(DescribeNetworkInterfaceAttributeRequest = exports.DescribeNetworkInterfaceAttributeRequest || (exports.DescribeNetworkInterfaceAttributeRequest = {}));
var DescribeNetworkInterfaceAttributeResult;
(function (DescribeNetworkInterfaceAttributeResult) {
    /**
     * @internal
     */
    DescribeNetworkInterfaceAttributeResult.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(DescribeNetworkInterfaceAttributeResult = exports.DescribeNetworkInterfaceAttributeResult || (exports.DescribeNetworkInterfaceAttributeResult = {}));
var DescribeNetworkInterfacePermissionsRequest;
(function (DescribeNetworkInterfacePermissionsRequest) {
    /**
     * @internal
     */
    DescribeNetworkInterfacePermissionsRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(DescribeNetworkInterfacePermissionsRequest = exports.DescribeNetworkInterfacePermissionsRequest || (exports.DescribeNetworkInterfacePermissionsRequest = {}));
var DescribeNetworkInterfacePermissionsResult;
(function (DescribeNetworkInterfacePermissionsResult) {
    /**
     * @internal
     */
    DescribeNetworkInterfacePermissionsResult.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(DescribeNetworkInterfacePermissionsResult = exports.DescribeNetworkInterfacePermissionsResult || (exports.DescribeNetworkInterfacePermissionsResult = {}));
var DescribeNetworkInterfacesRequest;
(function (DescribeNetworkInterfacesRequest) {
    /**
     * @internal
     */
    DescribeNetworkInterfacesRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(DescribeNetworkInterfacesRequest = exports.DescribeNetworkInterfacesRequest || (exports.DescribeNetworkInterfacesRequest = {}));
var DescribeNetworkInterfacesResult;
(function (DescribeNetworkInterfacesResult) {
    /**
     * @internal
     */
    DescribeNetworkInterfacesResult.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(DescribeNetworkInterfacesResult = exports.DescribeNetworkInterfacesResult || (exports.DescribeNetworkInterfacesResult = {}));
var DescribePlacementGroupsRequest;
(function (DescribePlacementGroupsRequest) {
    /**
     * @internal
     */
    DescribePlacementGroupsRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(DescribePlacementGroupsRequest = exports.DescribePlacementGroupsRequest || (exports.DescribePlacementGroupsRequest = {}));
var DescribePlacementGroupsResult;
(function (DescribePlacementGroupsResult) {
    /**
     * @internal
     */
    DescribePlacementGroupsResult.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(DescribePlacementGroupsResult = exports.DescribePlacementGroupsResult || (exports.DescribePlacementGroupsResult = {}));
var DescribePrefixListsRequest;
(function (DescribePrefixListsRequest) {
    /**
     * @internal
     */
    DescribePrefixListsRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(DescribePrefixListsRequest = exports.DescribePrefixListsRequest || (exports.DescribePrefixListsRequest = {}));
var PrefixList;
(function (PrefixList) {
    /**
     * @internal
     */
    PrefixList.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(PrefixList = exports.PrefixList || (exports.PrefixList = {}));
var DescribePrefixListsResult;
(function (DescribePrefixListsResult) {
    /**
     * @internal
     */
    DescribePrefixListsResult.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(DescribePrefixListsResult = exports.DescribePrefixListsResult || (exports.DescribePrefixListsResult = {}));
var DescribePrincipalIdFormatRequest;
(function (DescribePrincipalIdFormatRequest) {
    /**
     * @internal
     */
    DescribePrincipalIdFormatRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(DescribePrincipalIdFormatRequest = exports.DescribePrincipalIdFormatRequest || (exports.DescribePrincipalIdFormatRequest = {}));
var PrincipalIdFormat;
(function (PrincipalIdFormat) {
    /**
     * @internal
     */
    PrincipalIdFormat.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(PrincipalIdFormat = exports.PrincipalIdFormat || (exports.PrincipalIdFormat = {}));
var DescribePrincipalIdFormatResult;
(function (DescribePrincipalIdFormatResult) {
    /**
     * @internal
     */
    DescribePrincipalIdFormatResult.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(DescribePrincipalIdFormatResult = exports.DescribePrincipalIdFormatResult || (exports.DescribePrincipalIdFormatResult = {}));
var DescribePublicIpv4PoolsRequest;
(function (DescribePublicIpv4PoolsRequest) {
    /**
     * @internal
     */
    DescribePublicIpv4PoolsRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(DescribePublicIpv4PoolsRequest = exports.DescribePublicIpv4PoolsRequest || (exports.DescribePublicIpv4PoolsRequest = {}));
var PublicIpv4PoolRange;
(function (PublicIpv4PoolRange) {
    /**
     * @internal
     */
    PublicIpv4PoolRange.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(PublicIpv4PoolRange = exports.PublicIpv4PoolRange || (exports.PublicIpv4PoolRange = {}));
var PublicIpv4Pool;
(function (PublicIpv4Pool) {
    /**
     * @internal
     */
    PublicIpv4Pool.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(PublicIpv4Pool = exports.PublicIpv4Pool || (exports.PublicIpv4Pool = {}));
var DescribePublicIpv4PoolsResult;
(function (DescribePublicIpv4PoolsResult) {
    /**
     * @internal
     */
    DescribePublicIpv4PoolsResult.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(DescribePublicIpv4PoolsResult = exports.DescribePublicIpv4PoolsResult || (exports.DescribePublicIpv4PoolsResult = {}));
var DescribeRegionsRequest;
(function (DescribeRegionsRequest) {
    /**
     * @internal
     */
    DescribeRegionsRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(DescribeRegionsRequest = exports.DescribeRegionsRequest || (exports.DescribeRegionsRequest = {}));
var Region;
(function (Region) {
    /**
     * @internal
     */
    Region.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(Region = exports.Region || (exports.Region = {}));
var DescribeRegionsResult;
(function (DescribeRegionsResult) {
    /**
     * @internal
     */
    DescribeRegionsResult.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(DescribeRegionsResult = exports.DescribeRegionsResult || (exports.DescribeRegionsResult = {}));
var DescribeReplaceRootVolumeTasksRequest;
(function (DescribeReplaceRootVolumeTasksRequest) {
    /**
     * @internal
     */
    DescribeReplaceRootVolumeTasksRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(DescribeReplaceRootVolumeTasksRequest = exports.DescribeReplaceRootVolumeTasksRequest || (exports.DescribeReplaceRootVolumeTasksRequest = {}));
var DescribeReplaceRootVolumeTasksResult;
(function (DescribeReplaceRootVolumeTasksResult) {
    /**
     * @internal
     */
    DescribeReplaceRootVolumeTasksResult.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(DescribeReplaceRootVolumeTasksResult = exports.DescribeReplaceRootVolumeTasksResult || (exports.DescribeReplaceRootVolumeTasksResult = {}));
var OfferingClassType;
(function (OfferingClassType) {
    OfferingClassType["CONVERTIBLE"] = "convertible";
    OfferingClassType["STANDARD"] = "standard";
})(OfferingClassType = exports.OfferingClassType || (exports.OfferingClassType = {}));
var DescribeReservedInstancesRequest;
(function (DescribeReservedInstancesRequest) {
    /**
     * @internal
     */
    DescribeReservedInstancesRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(DescribeReservedInstancesRequest = exports.DescribeReservedInstancesRequest || (exports.DescribeReservedInstancesRequest = {}));
var RecurringCharge;
(function (RecurringCharge) {
    /**
     * @internal
     */
    RecurringCharge.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(RecurringCharge = exports.RecurringCharge || (exports.RecurringCharge = {}));
var Scope;
(function (Scope) {
    Scope["AVAILABILITY_ZONE"] = "Availability Zone";
    Scope["REGIONAL"] = "Region";
})(Scope = exports.Scope || (exports.Scope = {}));
var ReservedInstances;
(function (ReservedInstances) {
    /**
     * @internal
     */
    ReservedInstances.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(ReservedInstances = exports.ReservedInstances || (exports.ReservedInstances = {}));
var DescribeReservedInstancesResult;
(function (DescribeReservedInstancesResult) {
    /**
     * @internal
     */
    DescribeReservedInstancesResult.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(DescribeReservedInstancesResult = exports.DescribeReservedInstancesResult || (exports.DescribeReservedInstancesResult = {}));
var DescribeReservedInstancesListingsRequest;
(function (DescribeReservedInstancesListingsRequest) {
    /**
     * @internal
     */
    DescribeReservedInstancesListingsRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(DescribeReservedInstancesListingsRequest = exports.DescribeReservedInstancesListingsRequest || (exports.DescribeReservedInstancesListingsRequest = {}));
var DescribeReservedInstancesListingsResult;
(function (DescribeReservedInstancesListingsResult) {
    /**
     * @internal
     */
    DescribeReservedInstancesListingsResult.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(DescribeReservedInstancesListingsResult = exports.DescribeReservedInstancesListingsResult || (exports.DescribeReservedInstancesListingsResult = {}));
var DescribeReservedInstancesModificationsRequest;
(function (DescribeReservedInstancesModificationsRequest) {
    /**
     * @internal
     */
    DescribeReservedInstancesModificationsRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(DescribeReservedInstancesModificationsRequest = exports.DescribeReservedInstancesModificationsRequest || (exports.DescribeReservedInstancesModificationsRequest = {}));
var ReservedInstancesConfiguration;
(function (ReservedInstancesConfiguration) {
    /**
     * @internal
     */
    ReservedInstancesConfiguration.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(ReservedInstancesConfiguration = exports.ReservedInstancesConfiguration || (exports.ReservedInstancesConfiguration = {}));
var ReservedInstancesModificationResult;
(function (ReservedInstancesModificationResult) {
    /**
     * @internal
     */
    ReservedInstancesModificationResult.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(ReservedInstancesModificationResult = exports.ReservedInstancesModificationResult || (exports.ReservedInstancesModificationResult = {}));
var ReservedInstancesId;
(function (ReservedInstancesId) {
    /**
     * @internal
     */
    ReservedInstancesId.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(ReservedInstancesId = exports.ReservedInstancesId || (exports.ReservedInstancesId = {}));
var ReservedInstancesModification;
(function (ReservedInstancesModification) {
    /**
     * @internal
     */
    ReservedInstancesModification.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(ReservedInstancesModification = exports.ReservedInstancesModification || (exports.ReservedInstancesModification = {}));
var DescribeReservedInstancesModificationsResult;
(function (DescribeReservedInstancesModificationsResult) {
    /**
     * @internal
     */
    DescribeReservedInstancesModificationsResult.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(DescribeReservedInstancesModificationsResult = exports.DescribeReservedInstancesModificationsResult || (exports.DescribeReservedInstancesModificationsResult = {}));
var DescribeReservedInstancesOfferingsRequest;
(function (DescribeReservedInstancesOfferingsRequest) {
    /**
     * @internal
     */
    DescribeReservedInstancesOfferingsRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(DescribeReservedInstancesOfferingsRequest = exports.DescribeReservedInstancesOfferingsRequest || (exports.DescribeReservedInstancesOfferingsRequest = {}));
var PricingDetail;
(function (PricingDetail) {
    /**
     * @internal
     */
    PricingDetail.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(PricingDetail = exports.PricingDetail || (exports.PricingDetail = {}));
var ReservedInstancesOffering;
(function (ReservedInstancesOffering) {
    /**
     * @internal
     */
    ReservedInstancesOffering.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(ReservedInstancesOffering = exports.ReservedInstancesOffering || (exports.ReservedInstancesOffering = {}));
var DescribeReservedInstancesOfferingsResult;
(function (DescribeReservedInstancesOfferingsResult) {
    /**
     * @internal
     */
    DescribeReservedInstancesOfferingsResult.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(DescribeReservedInstancesOfferingsResult = exports.DescribeReservedInstancesOfferingsResult || (exports.DescribeReservedInstancesOfferingsResult = {}));
var DescribeRouteTablesRequest;
(function (DescribeRouteTablesRequest) {
    /**
     * @internal
     */
    DescribeRouteTablesRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(DescribeRouteTablesRequest = exports.DescribeRouteTablesRequest || (exports.DescribeRouteTablesRequest = {}));
var DescribeRouteTablesResult;
(function (DescribeRouteTablesResult) {
    /**
     * @internal
     */
    DescribeRouteTablesResult.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(DescribeRouteTablesResult = exports.DescribeRouteTablesResult || (exports.DescribeRouteTablesResult = {}));
var SlotDateTimeRangeRequest;
(function (SlotDateTimeRangeRequest) {
    /**
     * @internal
     */
    SlotDateTimeRangeRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(SlotDateTimeRangeRequest = exports.SlotDateTimeRangeRequest || (exports.SlotDateTimeRangeRequest = {}));
var ScheduledInstanceRecurrenceRequest;
(function (ScheduledInstanceRecurrenceRequest) {
    /**
     * @internal
     */
    ScheduledInstanceRecurrenceRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(ScheduledInstanceRecurrenceRequest = exports.ScheduledInstanceRecurrenceRequest || (exports.ScheduledInstanceRecurrenceRequest = {}));
var DescribeScheduledInstanceAvailabilityRequest;
(function (DescribeScheduledInstanceAvailabilityRequest) {
    /**
     * @internal
     */
    DescribeScheduledInstanceAvailabilityRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(DescribeScheduledInstanceAvailabilityRequest = exports.DescribeScheduledInstanceAvailabilityRequest || (exports.DescribeScheduledInstanceAvailabilityRequest = {}));
var ScheduledInstanceRecurrence;
(function (ScheduledInstanceRecurrence) {
    /**
     * @internal
     */
    ScheduledInstanceRecurrence.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(ScheduledInstanceRecurrence = exports.ScheduledInstanceRecurrence || (exports.ScheduledInstanceRecurrence = {}));
var ScheduledInstanceAvailability;
(function (ScheduledInstanceAvailability) {
    /**
     * @internal
     */
    ScheduledInstanceAvailability.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(ScheduledInstanceAvailability = exports.ScheduledInstanceAvailability || (exports.ScheduledInstanceAvailability = {}));
var DescribeScheduledInstanceAvailabilityResult;
(function (DescribeScheduledInstanceAvailabilityResult) {
    /**
     * @internal
     */
    DescribeScheduledInstanceAvailabilityResult.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(DescribeScheduledInstanceAvailabilityResult = exports.DescribeScheduledInstanceAvailabilityResult || (exports.DescribeScheduledInstanceAvailabilityResult = {}));
var SlotStartTimeRangeRequest;
(function (SlotStartTimeRangeRequest) {
    /**
     * @internal
     */
    SlotStartTimeRangeRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(SlotStartTimeRangeRequest = exports.SlotStartTimeRangeRequest || (exports.SlotStartTimeRangeRequest = {}));
var DescribeScheduledInstancesRequest;
(function (DescribeScheduledInstancesRequest) {
    /**
     * @internal
     */
    DescribeScheduledInstancesRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(DescribeScheduledInstancesRequest = exports.DescribeScheduledInstancesRequest || (exports.DescribeScheduledInstancesRequest = {}));
var ScheduledInstance;
(function (ScheduledInstance) {
    /**
     * @internal
     */
    ScheduledInstance.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(ScheduledInstance = exports.ScheduledInstance || (exports.ScheduledInstance = {}));
var DescribeScheduledInstancesResult;
(function (DescribeScheduledInstancesResult) {
    /**
     * @internal
     */
    DescribeScheduledInstancesResult.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(DescribeScheduledInstancesResult = exports.DescribeScheduledInstancesResult || (exports.DescribeScheduledInstancesResult = {}));
var DescribeSecurityGroupReferencesRequest;
(function (DescribeSecurityGroupReferencesRequest) {
    /**
     * @internal
     */
    DescribeSecurityGroupReferencesRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(DescribeSecurityGroupReferencesRequest = exports.DescribeSecurityGroupReferencesRequest || (exports.DescribeSecurityGroupReferencesRequest = {}));
var SecurityGroupReference;
(function (SecurityGroupReference) {
    /**
     * @internal
     */
    SecurityGroupReference.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(SecurityGroupReference = exports.SecurityGroupReference || (exports.SecurityGroupReference = {}));
var DescribeSecurityGroupReferencesResult;
(function (DescribeSecurityGroupReferencesResult) {
    /**
     * @internal
     */
    DescribeSecurityGroupReferencesResult.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(DescribeSecurityGroupReferencesResult = exports.DescribeSecurityGroupReferencesResult || (exports.DescribeSecurityGroupReferencesResult = {}));
var DescribeSecurityGroupsRequest;
(function (DescribeSecurityGroupsRequest) {
    /**
     * @internal
     */
    DescribeSecurityGroupsRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(DescribeSecurityGroupsRequest = exports.DescribeSecurityGroupsRequest || (exports.DescribeSecurityGroupsRequest = {}));
var SecurityGroup;
(function (SecurityGroup) {
    /**
     * @internal
     */
    SecurityGroup.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(SecurityGroup = exports.SecurityGroup || (exports.SecurityGroup = {}));
var DescribeSecurityGroupsResult;
(function (DescribeSecurityGroupsResult) {
    /**
     * @internal
     */
    DescribeSecurityGroupsResult.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(DescribeSecurityGroupsResult = exports.DescribeSecurityGroupsResult || (exports.DescribeSecurityGroupsResult = {}));
var DescribeSnapshotAttributeRequest;
(function (DescribeSnapshotAttributeRequest) {
    /**
     * @internal
     */
    DescribeSnapshotAttributeRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(DescribeSnapshotAttributeRequest = exports.DescribeSnapshotAttributeRequest || (exports.DescribeSnapshotAttributeRequest = {}));
var CreateVolumePermission;
(function (CreateVolumePermission) {
    /**
     * @internal
     */
    CreateVolumePermission.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(CreateVolumePermission = exports.CreateVolumePermission || (exports.CreateVolumePermission = {}));
var DescribeSnapshotAttributeResult;
(function (DescribeSnapshotAttributeResult) {
    /**
     * @internal
     */
    DescribeSnapshotAttributeResult.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(DescribeSnapshotAttributeResult = exports.DescribeSnapshotAttributeResult || (exports.DescribeSnapshotAttributeResult = {}));
var DescribeSnapshotsRequest;
(function (DescribeSnapshotsRequest) {
    /**
     * @internal
     */
    DescribeSnapshotsRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(DescribeSnapshotsRequest = exports.DescribeSnapshotsRequest || (exports.DescribeSnapshotsRequest = {}));
var DescribeSnapshotsResult;
(function (DescribeSnapshotsResult) {
    /**
     * @internal
     */
    DescribeSnapshotsResult.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(DescribeSnapshotsResult = exports.DescribeSnapshotsResult || (exports.DescribeSnapshotsResult = {}));
var DescribeSpotDatafeedSubscriptionRequest;
(function (DescribeSpotDatafeedSubscriptionRequest) {
    /**
     * @internal
     */
    DescribeSpotDatafeedSubscriptionRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(DescribeSpotDatafeedSubscriptionRequest = exports.DescribeSpotDatafeedSubscriptionRequest || (exports.DescribeSpotDatafeedSubscriptionRequest = {}));
var DescribeSpotDatafeedSubscriptionResult;
(function (DescribeSpotDatafeedSubscriptionResult) {
    /**
     * @internal
     */
    DescribeSpotDatafeedSubscriptionResult.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(DescribeSpotDatafeedSubscriptionResult = exports.DescribeSpotDatafeedSubscriptionResult || (exports.DescribeSpotDatafeedSubscriptionResult = {}));
var DescribeSpotFleetInstancesRequest;
(function (DescribeSpotFleetInstancesRequest) {
    /**
     * @internal
     */
    DescribeSpotFleetInstancesRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(DescribeSpotFleetInstancesRequest = exports.DescribeSpotFleetInstancesRequest || (exports.DescribeSpotFleetInstancesRequest = {}));
var DescribeSpotFleetInstancesResponse;
(function (DescribeSpotFleetInstancesResponse) {
    /**
     * @internal
     */
    DescribeSpotFleetInstancesResponse.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(DescribeSpotFleetInstancesResponse = exports.DescribeSpotFleetInstancesResponse || (exports.DescribeSpotFleetInstancesResponse = {}));
var EventType;
(function (EventType) {
    EventType["BATCH_CHANGE"] = "fleetRequestChange";
    EventType["ERROR"] = "error";
    EventType["INFORMATION"] = "information";
    EventType["INSTANCE_CHANGE"] = "instanceChange";
})(EventType = exports.EventType || (exports.EventType = {}));
var DescribeSpotFleetRequestHistoryRequest;
(function (DescribeSpotFleetRequestHistoryRequest) {
    /**
     * @internal
     */
    DescribeSpotFleetRequestHistoryRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(DescribeSpotFleetRequestHistoryRequest = exports.DescribeSpotFleetRequestHistoryRequest || (exports.DescribeSpotFleetRequestHistoryRequest = {}));
var HistoryRecord;
(function (HistoryRecord) {
    /**
     * @internal
     */
    HistoryRecord.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(HistoryRecord = exports.HistoryRecord || (exports.HistoryRecord = {}));
var DescribeSpotFleetRequestHistoryResponse;
(function (DescribeSpotFleetRequestHistoryResponse) {
    /**
     * @internal
     */
    DescribeSpotFleetRequestHistoryResponse.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(DescribeSpotFleetRequestHistoryResponse = exports.DescribeSpotFleetRequestHistoryResponse || (exports.DescribeSpotFleetRequestHistoryResponse = {}));
var DescribeSpotFleetRequestsRequest;
(function (DescribeSpotFleetRequestsRequest) {
    /**
     * @internal
     */
    DescribeSpotFleetRequestsRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(DescribeSpotFleetRequestsRequest = exports.DescribeSpotFleetRequestsRequest || (exports.DescribeSpotFleetRequestsRequest = {}));
var ExcessCapacityTerminationPolicy;
(function (ExcessCapacityTerminationPolicy) {
    ExcessCapacityTerminationPolicy["DEFAULT"] = "default";
    ExcessCapacityTerminationPolicy["NO_TERMINATION"] = "noTermination";
})(ExcessCapacityTerminationPolicy = exports.ExcessCapacityTerminationPolicy || (exports.ExcessCapacityTerminationPolicy = {}));
var SpotFleetMonitoring;
(function (SpotFleetMonitoring) {
    /**
     * @internal
     */
    SpotFleetMonitoring.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(SpotFleetMonitoring = exports.SpotFleetMonitoring || (exports.SpotFleetMonitoring = {}));
var InstanceNetworkInterfaceSpecification;
(function (InstanceNetworkInterfaceSpecification) {
    /**
     * @internal
     */
    InstanceNetworkInterfaceSpecification.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(InstanceNetworkInterfaceSpecification = exports.InstanceNetworkInterfaceSpecification || (exports.InstanceNetworkInterfaceSpecification = {}));
var SpotPlacement;
(function (SpotPlacement) {
    /**
     * @internal
     */
    SpotPlacement.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(SpotPlacement = exports.SpotPlacement || (exports.SpotPlacement = {}));
var SpotFleetTagSpecification;
(function (SpotFleetTagSpecification) {
    /**
     * @internal
     */
    SpotFleetTagSpecification.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(SpotFleetTagSpecification = exports.SpotFleetTagSpecification || (exports.SpotFleetTagSpecification = {}));
var SpotFleetLaunchSpecification;
(function (SpotFleetLaunchSpecification) {
    /**
     * @internal
     */
    SpotFleetLaunchSpecification.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(SpotFleetLaunchSpecification = exports.SpotFleetLaunchSpecification || (exports.SpotFleetLaunchSpecification = {}));
var LaunchTemplateOverrides;
(function (LaunchTemplateOverrides) {
    /**
     * @internal
     */
    LaunchTemplateOverrides.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(LaunchTemplateOverrides = exports.LaunchTemplateOverrides || (exports.LaunchTemplateOverrides = {}));
var LaunchTemplateConfig;
(function (LaunchTemplateConfig) {
    /**
     * @internal
     */
    LaunchTemplateConfig.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(LaunchTemplateConfig = exports.LaunchTemplateConfig || (exports.LaunchTemplateConfig = {}));
var ClassicLoadBalancer;
(function (ClassicLoadBalancer) {
    /**
     * @internal
     */
    ClassicLoadBalancer.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(ClassicLoadBalancer = exports.ClassicLoadBalancer || (exports.ClassicLoadBalancer = {}));
var ClassicLoadBalancersConfig;
(function (ClassicLoadBalancersConfig) {
    /**
     * @internal
     */
    ClassicLoadBalancersConfig.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(ClassicLoadBalancersConfig = exports.ClassicLoadBalancersConfig || (exports.ClassicLoadBalancersConfig = {}));
var TargetGroup;
(function (TargetGroup) {
    /**
     * @internal
     */
    TargetGroup.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(TargetGroup = exports.TargetGroup || (exports.TargetGroup = {}));
var TargetGroupsConfig;
(function (TargetGroupsConfig) {
    /**
     * @internal
     */
    TargetGroupsConfig.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(TargetGroupsConfig = exports.TargetGroupsConfig || (exports.TargetGroupsConfig = {}));
var LoadBalancersConfig;
(function (LoadBalancersConfig) {
    /**
     * @internal
     */
    LoadBalancersConfig.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(LoadBalancersConfig = exports.LoadBalancersConfig || (exports.LoadBalancersConfig = {}));
var OnDemandAllocationStrategy;
(function (OnDemandAllocationStrategy) {
    OnDemandAllocationStrategy["LOWEST_PRICE"] = "lowestPrice";
    OnDemandAllocationStrategy["PRIORITIZED"] = "prioritized";
})(OnDemandAllocationStrategy = exports.OnDemandAllocationStrategy || (exports.OnDemandAllocationStrategy = {}));
var ReplacementStrategy;
(function (ReplacementStrategy) {
    ReplacementStrategy["LAUNCH"] = "launch";
})(ReplacementStrategy = exports.ReplacementStrategy || (exports.ReplacementStrategy = {}));
var SpotCapacityRebalance;
(function (SpotCapacityRebalance) {
    /**
     * @internal
     */
    SpotCapacityRebalance.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(SpotCapacityRebalance = exports.SpotCapacityRebalance || (exports.SpotCapacityRebalance = {}));
var SpotMaintenanceStrategies;
(function (SpotMaintenanceStrategies) {
    /**
     * @internal
     */
    SpotMaintenanceStrategies.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(SpotMaintenanceStrategies = exports.SpotMaintenanceStrategies || (exports.SpotMaintenanceStrategies = {}));
var SpotFleetRequestConfigData;
(function (SpotFleetRequestConfigData) {
    /**
     * @internal
     */
    SpotFleetRequestConfigData.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(SpotFleetRequestConfigData = exports.SpotFleetRequestConfigData || (exports.SpotFleetRequestConfigData = {}));
var SpotFleetRequestConfig;
(function (SpotFleetRequestConfig) {
    /**
     * @internal
     */
    SpotFleetRequestConfig.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(SpotFleetRequestConfig = exports.SpotFleetRequestConfig || (exports.SpotFleetRequestConfig = {}));
var DescribeSpotFleetRequestsResponse;
(function (DescribeSpotFleetRequestsResponse) {
    /**
     * @internal
     */
    DescribeSpotFleetRequestsResponse.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(DescribeSpotFleetRequestsResponse = exports.DescribeSpotFleetRequestsResponse || (exports.DescribeSpotFleetRequestsResponse = {}));
var DescribeSpotInstanceRequestsRequest;
(function (DescribeSpotInstanceRequestsRequest) {
    /**
     * @internal
     */
    DescribeSpotInstanceRequestsRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(DescribeSpotInstanceRequestsRequest = exports.DescribeSpotInstanceRequestsRequest || (exports.DescribeSpotInstanceRequestsRequest = {}));
var RunInstancesMonitoringEnabled;
(function (RunInstancesMonitoringEnabled) {
    /**
     * @internal
     */
    RunInstancesMonitoringEnabled.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(RunInstancesMonitoringEnabled = exports.RunInstancesMonitoringEnabled || (exports.RunInstancesMonitoringEnabled = {}));
var LaunchSpecification;
(function (LaunchSpecification) {
    /**
     * @internal
     */
    LaunchSpecification.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(LaunchSpecification = exports.LaunchSpecification || (exports.LaunchSpecification = {}));
var SpotInstanceStatus;
(function (SpotInstanceStatus) {
    /**
     * @internal
     */
    SpotInstanceStatus.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(SpotInstanceStatus = exports.SpotInstanceStatus || (exports.SpotInstanceStatus = {}));
var SpotInstanceRequest;
(function (SpotInstanceRequest) {
    /**
     * @internal
     */
    SpotInstanceRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(SpotInstanceRequest = exports.SpotInstanceRequest || (exports.SpotInstanceRequest = {}));
var DescribeSpotInstanceRequestsResult;
(function (DescribeSpotInstanceRequestsResult) {
    /**
     * @internal
     */
    DescribeSpotInstanceRequestsResult.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(DescribeSpotInstanceRequestsResult = exports.DescribeSpotInstanceRequestsResult || (exports.DescribeSpotInstanceRequestsResult = {}));
var DescribeSpotPriceHistoryRequest;
(function (DescribeSpotPriceHistoryRequest) {
    /**
     * @internal
     */
    DescribeSpotPriceHistoryRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(DescribeSpotPriceHistoryRequest = exports.DescribeSpotPriceHistoryRequest || (exports.DescribeSpotPriceHistoryRequest = {}));
var SpotPrice;
(function (SpotPrice) {
    /**
     * @internal
     */
    SpotPrice.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(SpotPrice = exports.SpotPrice || (exports.SpotPrice = {}));
var DescribeSpotPriceHistoryResult;
(function (DescribeSpotPriceHistoryResult) {
    /**
     * @internal
     */
    DescribeSpotPriceHistoryResult.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(DescribeSpotPriceHistoryResult = exports.DescribeSpotPriceHistoryResult || (exports.DescribeSpotPriceHistoryResult = {}));
var DescribeStaleSecurityGroupsRequest;
(function (DescribeStaleSecurityGroupsRequest) {
    /**
     * @internal
     */
    DescribeStaleSecurityGroupsRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(DescribeStaleSecurityGroupsRequest = exports.DescribeStaleSecurityGroupsRequest || (exports.DescribeStaleSecurityGroupsRequest = {}));
var StaleIpPermission;
(function (StaleIpPermission) {
    /**
     * @internal
     */
    StaleIpPermission.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(StaleIpPermission = exports.StaleIpPermission || (exports.StaleIpPermission = {}));
var StaleSecurityGroup;
(function (StaleSecurityGroup) {
    /**
     * @internal
     */
    StaleSecurityGroup.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(StaleSecurityGroup = exports.StaleSecurityGroup || (exports.StaleSecurityGroup = {}));
var DescribeStaleSecurityGroupsResult;
(function (DescribeStaleSecurityGroupsResult) {
    /**
     * @internal
     */
    DescribeStaleSecurityGroupsResult.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(DescribeStaleSecurityGroupsResult = exports.DescribeStaleSecurityGroupsResult || (exports.DescribeStaleSecurityGroupsResult = {}));
var DescribeStoreImageTasksRequest;
(function (DescribeStoreImageTasksRequest) {
    /**
     * @internal
     */
    DescribeStoreImageTasksRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(DescribeStoreImageTasksRequest = exports.DescribeStoreImageTasksRequest || (exports.DescribeStoreImageTasksRequest = {}));
var StoreImageTaskResult;
(function (StoreImageTaskResult) {
    /**
     * @internal
     */
    StoreImageTaskResult.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(StoreImageTaskResult = exports.StoreImageTaskResult || (exports.StoreImageTaskResult = {}));
var DescribeStoreImageTasksResult;
(function (DescribeStoreImageTasksResult) {
    /**
     * @internal
     */
    DescribeStoreImageTasksResult.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(DescribeStoreImageTasksResult = exports.DescribeStoreImageTasksResult || (exports.DescribeStoreImageTasksResult = {}));
var DescribeSubnetsRequest;
(function (DescribeSubnetsRequest) {
    /**
     * @internal
     */
    DescribeSubnetsRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(DescribeSubnetsRequest = exports.DescribeSubnetsRequest || (exports.DescribeSubnetsRequest = {}));
var DescribeSubnetsResult;
(function (DescribeSubnetsResult) {
    /**
     * @internal
     */
    DescribeSubnetsResult.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(DescribeSubnetsResult = exports.DescribeSubnetsResult || (exports.DescribeSubnetsResult = {}));
var DescribeTagsRequest;
(function (DescribeTagsRequest) {
    /**
     * @internal
     */
    DescribeTagsRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(DescribeTagsRequest = exports.DescribeTagsRequest || (exports.DescribeTagsRequest = {}));
var TagDescription;
(function (TagDescription) {
    /**
     * @internal
     */
    TagDescription.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(TagDescription = exports.TagDescription || (exports.TagDescription = {}));
var DescribeTagsResult;
(function (DescribeTagsResult) {
    /**
     * @internal
     */
    DescribeTagsResult.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(DescribeTagsResult = exports.DescribeTagsResult || (exports.DescribeTagsResult = {}));
var DescribeTrafficMirrorFiltersRequest;
(function (DescribeTrafficMirrorFiltersRequest) {
    /**
     * @internal
     */
    DescribeTrafficMirrorFiltersRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(DescribeTrafficMirrorFiltersRequest = exports.DescribeTrafficMirrorFiltersRequest || (exports.DescribeTrafficMirrorFiltersRequest = {}));
var DescribeTrafficMirrorFiltersResult;
(function (DescribeTrafficMirrorFiltersResult) {
    /**
     * @internal
     */
    DescribeTrafficMirrorFiltersResult.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(DescribeTrafficMirrorFiltersResult = exports.DescribeTrafficMirrorFiltersResult || (exports.DescribeTrafficMirrorFiltersResult = {}));
var DescribeTrafficMirrorSessionsRequest;
(function (DescribeTrafficMirrorSessionsRequest) {
    /**
     * @internal
     */
    DescribeTrafficMirrorSessionsRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(DescribeTrafficMirrorSessionsRequest = exports.DescribeTrafficMirrorSessionsRequest || (exports.DescribeTrafficMirrorSessionsRequest = {}));
var DescribeTrafficMirrorSessionsResult;
(function (DescribeTrafficMirrorSessionsResult) {
    /**
     * @internal
     */
    DescribeTrafficMirrorSessionsResult.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(DescribeTrafficMirrorSessionsResult = exports.DescribeTrafficMirrorSessionsResult || (exports.DescribeTrafficMirrorSessionsResult = {}));
var DescribeTrafficMirrorTargetsRequest;
(function (DescribeTrafficMirrorTargetsRequest) {
    /**
     * @internal
     */
    DescribeTrafficMirrorTargetsRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(DescribeTrafficMirrorTargetsRequest = exports.DescribeTrafficMirrorTargetsRequest || (exports.DescribeTrafficMirrorTargetsRequest = {}));
var DescribeTrafficMirrorTargetsResult;
(function (DescribeTrafficMirrorTargetsResult) {
    /**
     * @internal
     */
    DescribeTrafficMirrorTargetsResult.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(DescribeTrafficMirrorTargetsResult = exports.DescribeTrafficMirrorTargetsResult || (exports.DescribeTrafficMirrorTargetsResult = {}));
var DescribeTransitGatewayAttachmentsRequest;
(function (DescribeTransitGatewayAttachmentsRequest) {
    /**
     * @internal
     */
    DescribeTransitGatewayAttachmentsRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(DescribeTransitGatewayAttachmentsRequest = exports.DescribeTransitGatewayAttachmentsRequest || (exports.DescribeTransitGatewayAttachmentsRequest = {}));
var TransitGatewayAttachmentAssociation;
(function (TransitGatewayAttachmentAssociation) {
    /**
     * @internal
     */
    TransitGatewayAttachmentAssociation.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(TransitGatewayAttachmentAssociation = exports.TransitGatewayAttachmentAssociation || (exports.TransitGatewayAttachmentAssociation = {}));
var TransitGatewayAttachment;
(function (TransitGatewayAttachment) {
    /**
     * @internal
     */
    TransitGatewayAttachment.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(TransitGatewayAttachment = exports.TransitGatewayAttachment || (exports.TransitGatewayAttachment = {}));
var DescribeTransitGatewayAttachmentsResult;
(function (DescribeTransitGatewayAttachmentsResult) {
    /**
     * @internal
     */
    DescribeTransitGatewayAttachmentsResult.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(DescribeTransitGatewayAttachmentsResult = exports.DescribeTransitGatewayAttachmentsResult || (exports.DescribeTransitGatewayAttachmentsResult = {}));
var DescribeTransitGatewayConnectPeersRequest;
(function (DescribeTransitGatewayConnectPeersRequest) {
    /**
     * @internal
     */
    DescribeTransitGatewayConnectPeersRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(DescribeTransitGatewayConnectPeersRequest = exports.DescribeTransitGatewayConnectPeersRequest || (exports.DescribeTransitGatewayConnectPeersRequest = {}));
var DescribeTransitGatewayConnectPeersResult;
(function (DescribeTransitGatewayConnectPeersResult) {
    /**
     * @internal
     */
    DescribeTransitGatewayConnectPeersResult.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(DescribeTransitGatewayConnectPeersResult = exports.DescribeTransitGatewayConnectPeersResult || (exports.DescribeTransitGatewayConnectPeersResult = {}));
var DescribeTransitGatewayConnectsRequest;
(function (DescribeTransitGatewayConnectsRequest) {
    /**
     * @internal
     */
    DescribeTransitGatewayConnectsRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(DescribeTransitGatewayConnectsRequest = exports.DescribeTransitGatewayConnectsRequest || (exports.DescribeTransitGatewayConnectsRequest = {}));
var DescribeTransitGatewayConnectsResult;
(function (DescribeTransitGatewayConnectsResult) {
    /**
     * @internal
     */
    DescribeTransitGatewayConnectsResult.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(DescribeTransitGatewayConnectsResult = exports.DescribeTransitGatewayConnectsResult || (exports.DescribeTransitGatewayConnectsResult = {}));
var DescribeTransitGatewayMulticastDomainsRequest;
(function (DescribeTransitGatewayMulticastDomainsRequest) {
    /**
     * @internal
     */
    DescribeTransitGatewayMulticastDomainsRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(DescribeTransitGatewayMulticastDomainsRequest = exports.DescribeTransitGatewayMulticastDomainsRequest || (exports.DescribeTransitGatewayMulticastDomainsRequest = {}));
var DescribeTransitGatewayMulticastDomainsResult;
(function (DescribeTransitGatewayMulticastDomainsResult) {
    /**
     * @internal
     */
    DescribeTransitGatewayMulticastDomainsResult.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(DescribeTransitGatewayMulticastDomainsResult = exports.DescribeTransitGatewayMulticastDomainsResult || (exports.DescribeTransitGatewayMulticastDomainsResult = {}));
var DescribeTransitGatewayPeeringAttachmentsRequest;
(function (DescribeTransitGatewayPeeringAttachmentsRequest) {
    /**
     * @internal
     */
    DescribeTransitGatewayPeeringAttachmentsRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(DescribeTransitGatewayPeeringAttachmentsRequest = exports.DescribeTransitGatewayPeeringAttachmentsRequest || (exports.DescribeTransitGatewayPeeringAttachmentsRequest = {}));
var DescribeTransitGatewayPeeringAttachmentsResult;
(function (DescribeTransitGatewayPeeringAttachmentsResult) {
    /**
     * @internal
     */
    DescribeTransitGatewayPeeringAttachmentsResult.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(DescribeTransitGatewayPeeringAttachmentsResult = exports.DescribeTransitGatewayPeeringAttachmentsResult || (exports.DescribeTransitGatewayPeeringAttachmentsResult = {}));
var DescribeTransitGatewayRouteTablesRequest;
(function (DescribeTransitGatewayRouteTablesRequest) {
    /**
     * @internal
     */
    DescribeTransitGatewayRouteTablesRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(DescribeTransitGatewayRouteTablesRequest = exports.DescribeTransitGatewayRouteTablesRequest || (exports.DescribeTransitGatewayRouteTablesRequest = {}));
var DescribeTransitGatewayRouteTablesResult;
(function (DescribeTransitGatewayRouteTablesResult) {
    /**
     * @internal
     */
    DescribeTransitGatewayRouteTablesResult.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(DescribeTransitGatewayRouteTablesResult = exports.DescribeTransitGatewayRouteTablesResult || (exports.DescribeTransitGatewayRouteTablesResult = {}));
var DescribeTransitGatewaysRequest;
(function (DescribeTransitGatewaysRequest) {
    /**
     * @internal
     */
    DescribeTransitGatewaysRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(DescribeTransitGatewaysRequest = exports.DescribeTransitGatewaysRequest || (exports.DescribeTransitGatewaysRequest = {}));
var DescribeTransitGatewaysResult;
(function (DescribeTransitGatewaysResult) {
    /**
     * @internal
     */
    DescribeTransitGatewaysResult.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(DescribeTransitGatewaysResult = exports.DescribeTransitGatewaysResult || (exports.DescribeTransitGatewaysResult = {}));
var DescribeTransitGatewayVpcAttachmentsRequest;
(function (DescribeTransitGatewayVpcAttachmentsRequest) {
    /**
     * @internal
     */
    DescribeTransitGatewayVpcAttachmentsRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(DescribeTransitGatewayVpcAttachmentsRequest = exports.DescribeTransitGatewayVpcAttachmentsRequest || (exports.DescribeTransitGatewayVpcAttachmentsRequest = {}));
var DescribeTransitGatewayVpcAttachmentsResult;
(function (DescribeTransitGatewayVpcAttachmentsResult) {
    /**
     * @internal
     */
    DescribeTransitGatewayVpcAttachmentsResult.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(DescribeTransitGatewayVpcAttachmentsResult = exports.DescribeTransitGatewayVpcAttachmentsResult || (exports.DescribeTransitGatewayVpcAttachmentsResult = {}));
var DescribeVolumeAttributeRequest;
(function (DescribeVolumeAttributeRequest) {
    /**
     * @internal
     */
    DescribeVolumeAttributeRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(DescribeVolumeAttributeRequest = exports.DescribeVolumeAttributeRequest || (exports.DescribeVolumeAttributeRequest = {}));
var DescribeVolumeAttributeResult;
(function (DescribeVolumeAttributeResult) {
    /**
     * @internal
     */
    DescribeVolumeAttributeResult.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(DescribeVolumeAttributeResult = exports.DescribeVolumeAttributeResult || (exports.DescribeVolumeAttributeResult = {}));
var DescribeVolumesRequest;
(function (DescribeVolumesRequest) {
    /**
     * @internal
     */
    DescribeVolumesRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(DescribeVolumesRequest = exports.DescribeVolumesRequest || (exports.DescribeVolumesRequest = {}));
var DescribeVolumesResult;
(function (DescribeVolumesResult) {
    /**
     * @internal
     */
    DescribeVolumesResult.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(DescribeVolumesResult = exports.DescribeVolumesResult || (exports.DescribeVolumesResult = {}));
var DescribeVolumesModificationsRequest;
(function (DescribeVolumesModificationsRequest) {
    /**
     * @internal
     */
    DescribeVolumesModificationsRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(DescribeVolumesModificationsRequest = exports.DescribeVolumesModificationsRequest || (exports.DescribeVolumesModificationsRequest = {}));
var VolumeModification;
(function (VolumeModification) {
    /**
     * @internal
     */
    VolumeModification.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(VolumeModification = exports.VolumeModification || (exports.VolumeModification = {}));
var DescribeVolumesModificationsResult;
(function (DescribeVolumesModificationsResult) {
    /**
     * @internal
     */
    DescribeVolumesModificationsResult.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(DescribeVolumesModificationsResult = exports.DescribeVolumesModificationsResult || (exports.DescribeVolumesModificationsResult = {}));
var DescribeVolumeStatusRequest;
(function (DescribeVolumeStatusRequest) {
    /**
     * @internal
     */
    DescribeVolumeStatusRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(DescribeVolumeStatusRequest = exports.DescribeVolumeStatusRequest || (exports.DescribeVolumeStatusRequest = {}));
var VolumeStatusAction;
(function (VolumeStatusAction) {
    /**
     * @internal
     */
    VolumeStatusAction.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(VolumeStatusAction = exports.VolumeStatusAction || (exports.VolumeStatusAction = {}));
var VolumeStatusAttachmentStatus;
(function (VolumeStatusAttachmentStatus) {
    /**
     * @internal
     */
    VolumeStatusAttachmentStatus.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(VolumeStatusAttachmentStatus = exports.VolumeStatusAttachmentStatus || (exports.VolumeStatusAttachmentStatus = {}));
var VolumeStatusEvent;
(function (VolumeStatusEvent) {
    /**
     * @internal
     */
    VolumeStatusEvent.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(VolumeStatusEvent = exports.VolumeStatusEvent || (exports.VolumeStatusEvent = {}));
var VolumeStatusDetails;
(function (VolumeStatusDetails) {
    /**
     * @internal
     */
    VolumeStatusDetails.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(VolumeStatusDetails = exports.VolumeStatusDetails || (exports.VolumeStatusDetails = {}));
var VolumeStatusInfo;
(function (VolumeStatusInfo) {
    /**
     * @internal
     */
    VolumeStatusInfo.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(VolumeStatusInfo = exports.VolumeStatusInfo || (exports.VolumeStatusInfo = {}));
var VolumeStatusItem;
(function (VolumeStatusItem) {
    /**
     * @internal
     */
    VolumeStatusItem.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(VolumeStatusItem = exports.VolumeStatusItem || (exports.VolumeStatusItem = {}));
var DescribeVolumeStatusResult;
(function (DescribeVolumeStatusResult) {
    /**
     * @internal
     */
    DescribeVolumeStatusResult.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(DescribeVolumeStatusResult = exports.DescribeVolumeStatusResult || (exports.DescribeVolumeStatusResult = {}));
var DescribeVpcAttributeRequest;
(function (DescribeVpcAttributeRequest) {
    /**
     * @internal
     */
    DescribeVpcAttributeRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(DescribeVpcAttributeRequest = exports.DescribeVpcAttributeRequest || (exports.DescribeVpcAttributeRequest = {}));
var DescribeVpcAttributeResult;
(function (DescribeVpcAttributeResult) {
    /**
     * @internal
     */
    DescribeVpcAttributeResult.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(DescribeVpcAttributeResult = exports.DescribeVpcAttributeResult || (exports.DescribeVpcAttributeResult = {}));
var DescribeVpcClassicLinkRequest;
(function (DescribeVpcClassicLinkRequest) {
    /**
     * @internal
     */
    DescribeVpcClassicLinkRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(DescribeVpcClassicLinkRequest = exports.DescribeVpcClassicLinkRequest || (exports.DescribeVpcClassicLinkRequest = {}));
var VpcClassicLink;
(function (VpcClassicLink) {
    /**
     * @internal
     */
    VpcClassicLink.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(VpcClassicLink = exports.VpcClassicLink || (exports.VpcClassicLink = {}));
var DescribeVpcClassicLinkResult;
(function (DescribeVpcClassicLinkResult) {
    /**
     * @internal
     */
    DescribeVpcClassicLinkResult.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(DescribeVpcClassicLinkResult = exports.DescribeVpcClassicLinkResult || (exports.DescribeVpcClassicLinkResult = {}));
var DescribeVpcClassicLinkDnsSupportRequest;
(function (DescribeVpcClassicLinkDnsSupportRequest) {
    /**
     * @internal
     */
    DescribeVpcClassicLinkDnsSupportRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(DescribeVpcClassicLinkDnsSupportRequest = exports.DescribeVpcClassicLinkDnsSupportRequest || (exports.DescribeVpcClassicLinkDnsSupportRequest = {}));
var ClassicLinkDnsSupport;
(function (ClassicLinkDnsSupport) {
    /**
     * @internal
     */
    ClassicLinkDnsSupport.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(ClassicLinkDnsSupport = exports.ClassicLinkDnsSupport || (exports.ClassicLinkDnsSupport = {}));
var DescribeVpcClassicLinkDnsSupportResult;
(function (DescribeVpcClassicLinkDnsSupportResult) {
    /**
     * @internal
     */
    DescribeVpcClassicLinkDnsSupportResult.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(DescribeVpcClassicLinkDnsSupportResult = exports.DescribeVpcClassicLinkDnsSupportResult || (exports.DescribeVpcClassicLinkDnsSupportResult = {}));
var DescribeVpcEndpointConnectionNotificationsRequest;
(function (DescribeVpcEndpointConnectionNotificationsRequest) {
    /**
     * @internal
     */
    DescribeVpcEndpointConnectionNotificationsRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(DescribeVpcEndpointConnectionNotificationsRequest = exports.DescribeVpcEndpointConnectionNotificationsRequest || (exports.DescribeVpcEndpointConnectionNotificationsRequest = {}));
var DescribeVpcEndpointConnectionNotificationsResult;
(function (DescribeVpcEndpointConnectionNotificationsResult) {
    /**
     * @internal
     */
    DescribeVpcEndpointConnectionNotificationsResult.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(DescribeVpcEndpointConnectionNotificationsResult = exports.DescribeVpcEndpointConnectionNotificationsResult || (exports.DescribeVpcEndpointConnectionNotificationsResult = {}));
var DescribeVpcEndpointConnectionsRequest;
(function (DescribeVpcEndpointConnectionsRequest) {
    /**
     * @internal
     */
    DescribeVpcEndpointConnectionsRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(DescribeVpcEndpointConnectionsRequest = exports.DescribeVpcEndpointConnectionsRequest || (exports.DescribeVpcEndpointConnectionsRequest = {}));
var VpcEndpointConnection;
(function (VpcEndpointConnection) {
    /**
     * @internal
     */
    VpcEndpointConnection.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(VpcEndpointConnection = exports.VpcEndpointConnection || (exports.VpcEndpointConnection = {}));
var DescribeVpcEndpointConnectionsResult;
(function (DescribeVpcEndpointConnectionsResult) {
    /**
     * @internal
     */
    DescribeVpcEndpointConnectionsResult.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(DescribeVpcEndpointConnectionsResult = exports.DescribeVpcEndpointConnectionsResult || (exports.DescribeVpcEndpointConnectionsResult = {}));
var DescribeVpcEndpointsRequest;
(function (DescribeVpcEndpointsRequest) {
    /**
     * @internal
     */
    DescribeVpcEndpointsRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(DescribeVpcEndpointsRequest = exports.DescribeVpcEndpointsRequest || (exports.DescribeVpcEndpointsRequest = {}));
var DescribeVpcEndpointsResult;
(function (DescribeVpcEndpointsResult) {
    /**
     * @internal
     */
    DescribeVpcEndpointsResult.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(DescribeVpcEndpointsResult = exports.DescribeVpcEndpointsResult || (exports.DescribeVpcEndpointsResult = {}));
var DescribeVpcEndpointServiceConfigurationsRequest;
(function (DescribeVpcEndpointServiceConfigurationsRequest) {
    /**
     * @internal
     */
    DescribeVpcEndpointServiceConfigurationsRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(DescribeVpcEndpointServiceConfigurationsRequest = exports.DescribeVpcEndpointServiceConfigurationsRequest || (exports.DescribeVpcEndpointServiceConfigurationsRequest = {}));
var DescribeVpcEndpointServiceConfigurationsResult;
(function (DescribeVpcEndpointServiceConfigurationsResult) {
    /**
     * @internal
     */
    DescribeVpcEndpointServiceConfigurationsResult.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(DescribeVpcEndpointServiceConfigurationsResult = exports.DescribeVpcEndpointServiceConfigurationsResult || (exports.DescribeVpcEndpointServiceConfigurationsResult = {}));
var DescribeVpcEndpointServicePermissionsRequest;
(function (DescribeVpcEndpointServicePermissionsRequest) {
    /**
     * @internal
     */
    DescribeVpcEndpointServicePermissionsRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(DescribeVpcEndpointServicePermissionsRequest = exports.DescribeVpcEndpointServicePermissionsRequest || (exports.DescribeVpcEndpointServicePermissionsRequest = {}));
var DescribeVpcEndpointServicePermissionsResult;
(function (DescribeVpcEndpointServicePermissionsResult) {
    /**
     * @internal
     */
    DescribeVpcEndpointServicePermissionsResult.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(DescribeVpcEndpointServicePermissionsResult = exports.DescribeVpcEndpointServicePermissionsResult || (exports.DescribeVpcEndpointServicePermissionsResult = {}));
var DescribeVpcEndpointServicesRequest;
(function (DescribeVpcEndpointServicesRequest) {
    /**
     * @internal
     */
    DescribeVpcEndpointServicesRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(DescribeVpcEndpointServicesRequest = exports.DescribeVpcEndpointServicesRequest || (exports.DescribeVpcEndpointServicesRequest = {}));
var PrivateDnsDetails;
(function (PrivateDnsDetails) {
    /**
     * @internal
     */
    PrivateDnsDetails.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(PrivateDnsDetails = exports.PrivateDnsDetails || (exports.PrivateDnsDetails = {}));
var ServiceDetail;
(function (ServiceDetail) {
    /**
     * @internal
     */
    ServiceDetail.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(ServiceDetail = exports.ServiceDetail || (exports.ServiceDetail = {}));
var DescribeVpcEndpointServicesResult;
(function (DescribeVpcEndpointServicesResult) {
    /**
     * @internal
     */
    DescribeVpcEndpointServicesResult.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(DescribeVpcEndpointServicesResult = exports.DescribeVpcEndpointServicesResult || (exports.DescribeVpcEndpointServicesResult = {}));
var DescribeVpcPeeringConnectionsRequest;
(function (DescribeVpcPeeringConnectionsRequest) {
    /**
     * @internal
     */
    DescribeVpcPeeringConnectionsRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(DescribeVpcPeeringConnectionsRequest = exports.DescribeVpcPeeringConnectionsRequest || (exports.DescribeVpcPeeringConnectionsRequest = {}));
var DescribeVpcPeeringConnectionsResult;
(function (DescribeVpcPeeringConnectionsResult) {
    /**
     * @internal
     */
    DescribeVpcPeeringConnectionsResult.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(DescribeVpcPeeringConnectionsResult = exports.DescribeVpcPeeringConnectionsResult || (exports.DescribeVpcPeeringConnectionsResult = {}));
var DescribeVpcsRequest;
(function (DescribeVpcsRequest) {
    /**
     * @internal
     */
    DescribeVpcsRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(DescribeVpcsRequest = exports.DescribeVpcsRequest || (exports.DescribeVpcsRequest = {}));
var DescribeVpcsResult;
(function (DescribeVpcsResult) {
    /**
     * @internal
     */
    DescribeVpcsResult.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(DescribeVpcsResult = exports.DescribeVpcsResult || (exports.DescribeVpcsResult = {}));
var DescribeVpnConnectionsRequest;
(function (DescribeVpnConnectionsRequest) {
    /**
     * @internal
     */
    DescribeVpnConnectionsRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(DescribeVpnConnectionsRequest = exports.DescribeVpnConnectionsRequest || (exports.DescribeVpnConnectionsRequest = {}));
var DescribeVpnConnectionsResult;
(function (DescribeVpnConnectionsResult) {
    /**
     * @internal
     */
    DescribeVpnConnectionsResult.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(DescribeVpnConnectionsResult = exports.DescribeVpnConnectionsResult || (exports.DescribeVpnConnectionsResult = {}));
var DescribeVpnGatewaysRequest;
(function (DescribeVpnGatewaysRequest) {
    /**
     * @internal
     */
    DescribeVpnGatewaysRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(DescribeVpnGatewaysRequest = exports.DescribeVpnGatewaysRequest || (exports.DescribeVpnGatewaysRequest = {}));
var DescribeVpnGatewaysResult;
(function (DescribeVpnGatewaysResult) {
    /**
     * @internal
     */
    DescribeVpnGatewaysResult.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(DescribeVpnGatewaysResult = exports.DescribeVpnGatewaysResult || (exports.DescribeVpnGatewaysResult = {}));
var DetachClassicLinkVpcRequest;
(function (DetachClassicLinkVpcRequest) {
    /**
     * @internal
     */
    DetachClassicLinkVpcRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(DetachClassicLinkVpcRequest = exports.DetachClassicLinkVpcRequest || (exports.DetachClassicLinkVpcRequest = {}));
var DetachClassicLinkVpcResult;
(function (DetachClassicLinkVpcResult) {
    /**
     * @internal
     */
    DetachClassicLinkVpcResult.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(DetachClassicLinkVpcResult = exports.DetachClassicLinkVpcResult || (exports.DetachClassicLinkVpcResult = {}));
var DetachInternetGatewayRequest;
(function (DetachInternetGatewayRequest) {
    /**
     * @internal
     */
    DetachInternetGatewayRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(DetachInternetGatewayRequest = exports.DetachInternetGatewayRequest || (exports.DetachInternetGatewayRequest = {}));
var DetachNetworkInterfaceRequest;
(function (DetachNetworkInterfaceRequest) {
    /**
     * @internal
     */
    DetachNetworkInterfaceRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(DetachNetworkInterfaceRequest = exports.DetachNetworkInterfaceRequest || (exports.DetachNetworkInterfaceRequest = {}));
var DetachVolumeRequest;
(function (DetachVolumeRequest) {
    /**
     * @internal
     */
    DetachVolumeRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(DetachVolumeRequest = exports.DetachVolumeRequest || (exports.DetachVolumeRequest = {}));
var DetachVpnGatewayRequest;
(function (DetachVpnGatewayRequest) {
    /**
     * @internal
     */
    DetachVpnGatewayRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(DetachVpnGatewayRequest = exports.DetachVpnGatewayRequest || (exports.DetachVpnGatewayRequest = {}));
var DisableEbsEncryptionByDefaultRequest;
(function (DisableEbsEncryptionByDefaultRequest) {
    /**
     * @internal
     */
    DisableEbsEncryptionByDefaultRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(DisableEbsEncryptionByDefaultRequest = exports.DisableEbsEncryptionByDefaultRequest || (exports.DisableEbsEncryptionByDefaultRequest = {}));
var DisableEbsEncryptionByDefaultResult;
(function (DisableEbsEncryptionByDefaultResult) {
    /**
     * @internal
     */
    DisableEbsEncryptionByDefaultResult.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(DisableEbsEncryptionByDefaultResult = exports.DisableEbsEncryptionByDefaultResult || (exports.DisableEbsEncryptionByDefaultResult = {}));
var DisableFastSnapshotRestoresRequest;
(function (DisableFastSnapshotRestoresRequest) {
    /**
     * @internal
     */
    DisableFastSnapshotRestoresRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(DisableFastSnapshotRestoresRequest = exports.DisableFastSnapshotRestoresRequest || (exports.DisableFastSnapshotRestoresRequest = {}));
var DisableFastSnapshotRestoreSuccessItem;
(function (DisableFastSnapshotRestoreSuccessItem) {
    /**
     * @internal
     */
    DisableFastSnapshotRestoreSuccessItem.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(DisableFastSnapshotRestoreSuccessItem = exports.DisableFastSnapshotRestoreSuccessItem || (exports.DisableFastSnapshotRestoreSuccessItem = {}));
var DisableFastSnapshotRestoreStateError;
(function (DisableFastSnapshotRestoreStateError) {
    /**
     * @internal
     */
    DisableFastSnapshotRestoreStateError.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(DisableFastSnapshotRestoreStateError = exports.DisableFastSnapshotRestoreStateError || (exports.DisableFastSnapshotRestoreStateError = {}));
var DisableFastSnapshotRestoreStateErrorItem;
(function (DisableFastSnapshotRestoreStateErrorItem) {
    /**
     * @internal
     */
    DisableFastSnapshotRestoreStateErrorItem.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(DisableFastSnapshotRestoreStateErrorItem = exports.DisableFastSnapshotRestoreStateErrorItem || (exports.DisableFastSnapshotRestoreStateErrorItem = {}));
var DisableFastSnapshotRestoreErrorItem;
(function (DisableFastSnapshotRestoreErrorItem) {
    /**
     * @internal
     */
    DisableFastSnapshotRestoreErrorItem.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(DisableFastSnapshotRestoreErrorItem = exports.DisableFastSnapshotRestoreErrorItem || (exports.DisableFastSnapshotRestoreErrorItem = {}));
//# sourceMappingURL=models_3.js.map