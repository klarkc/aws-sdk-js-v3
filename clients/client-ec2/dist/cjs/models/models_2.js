"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DeleteTransitGatewayRouteRequest = exports.DeleteTransitGatewayPrefixListReferenceResult = exports.DeleteTransitGatewayPrefixListReferenceRequest = exports.DeleteTransitGatewayPeeringAttachmentResult = exports.DeleteTransitGatewayPeeringAttachmentRequest = exports.DeleteTransitGatewayMulticastDomainResult = exports.DeleteTransitGatewayMulticastDomainRequest = exports.DeleteTransitGatewayConnectPeerResult = exports.DeleteTransitGatewayConnectPeerRequest = exports.DeleteTransitGatewayConnectResult = exports.DeleteTransitGatewayConnectRequest = exports.DeleteTransitGatewayResult = exports.DeleteTransitGatewayRequest = exports.DeleteTrafficMirrorTargetResult = exports.DeleteTrafficMirrorTargetRequest = exports.DeleteTrafficMirrorSessionResult = exports.DeleteTrafficMirrorSessionRequest = exports.DeleteTrafficMirrorFilterRuleResult = exports.DeleteTrafficMirrorFilterRuleRequest = exports.DeleteTrafficMirrorFilterResult = exports.DeleteTrafficMirrorFilterRequest = exports.DeleteTagsRequest = exports.DeleteSubnetRequest = exports.DeleteSpotDatafeedSubscriptionRequest = exports.DeleteSnapshotRequest = exports.DeleteSecurityGroupRequest = exports.DeleteRouteTableRequest = exports.DeleteRouteRequest = exports.DeleteQueuedReservedInstancesResult = exports.SuccessfulQueuedPurchaseDeletion = exports.FailedQueuedPurchaseDeletion = exports.DeleteQueuedReservedInstancesError = exports.DeleteQueuedReservedInstancesErrorCode = exports.DeleteQueuedReservedInstancesRequest = exports.DeletePlacementGroupRequest = exports.DeleteNetworkInterfacePermissionResult = exports.DeleteNetworkInterfacePermissionRequest = exports.DeleteNetworkInterfaceRequest = exports.DeleteNetworkInsightsPathResult = exports.DeleteNetworkInsightsPathRequest = exports.DeleteNetworkInsightsAnalysisResult = exports.DeleteNetworkInsightsAnalysisRequest = exports.DeleteNetworkAclEntryRequest = exports.DeleteNetworkAclRequest = exports.DeleteNatGatewayResult = exports.DeleteNatGatewayRequest = exports.DeleteManagedPrefixListResult = exports.DeleteManagedPrefixListRequest = exports.DeleteLocalGatewayRouteTableVpcAssociationResult = exports.DeleteLocalGatewayRouteTableVpcAssociationRequest = void 0;
exports.DescribeCapacityReservationsRequest = exports.DescribeByoipCidrsResult = exports.DescribeByoipCidrsRequest = exports.DescribeBundleTasksResult = exports.DescribeBundleTasksRequest = exports.DescribeAvailabilityZonesResult = exports.AvailabilityZone = exports.AvailabilityZoneMessage = exports.DescribeAvailabilityZonesRequest = exports.DescribeAggregateIdFormatResult = exports.IdFormat = exports.DescribeAggregateIdFormatRequest = exports.DescribeAddressesAttributeResult = exports.DescribeAddressesAttributeRequest = exports.DescribeAddressesResult = exports.DescribeAddressesRequest = exports.Filter = exports.DescribeAccountAttributesResult = exports.DescribeAccountAttributesRequest = exports.DeregisterTransitGatewayMulticastGroupSourcesResult = exports.TransitGatewayMulticastDeregisteredGroupSources = exports.DeregisterTransitGatewayMulticastGroupSourcesRequest = exports.DeregisterTransitGatewayMulticastGroupMembersResult = exports.TransitGatewayMulticastDeregisteredGroupMembers = exports.DeregisterTransitGatewayMulticastGroupMembersRequest = exports.DeregisterInstanceEventNotificationAttributesResult = exports.InstanceTagNotificationAttribute = exports.DeregisterInstanceEventNotificationAttributesRequest = exports.DeregisterInstanceTagAttributeRequest = exports.DeregisterImageRequest = exports.DeprovisionByoipCidrResult = exports.DeprovisionByoipCidrRequest = exports.DeleteVpnGatewayRequest = exports.DeleteVpnConnectionRouteRequest = exports.DeleteVpnConnectionRequest = exports.DeleteVpcPeeringConnectionResult = exports.DeleteVpcPeeringConnectionRequest = exports.DeleteVpcEndpointServiceConfigurationsResult = exports.DeleteVpcEndpointServiceConfigurationsRequest = exports.DeleteVpcEndpointsResult = exports.DeleteVpcEndpointsRequest = exports.DeleteVpcEndpointConnectionNotificationsResult = exports.DeleteVpcEndpointConnectionNotificationsRequest = exports.DeleteVpcRequest = exports.DeleteVolumeRequest = exports.DeleteTransitGatewayVpcAttachmentResult = exports.DeleteTransitGatewayVpcAttachmentRequest = exports.DeleteTransitGatewayRouteTableResult = exports.DeleteTransitGatewayRouteTableRequest = exports.DeleteTransitGatewayRouteResult = void 0;
exports.ElasticGpuHealth = exports.ElasticGpuStatus = exports.DescribeElasticGpusRequest = exports.DescribeEgressOnlyInternetGatewaysResult = exports.DescribeEgressOnlyInternetGatewaysRequest = exports.DescribeDhcpOptionsResult = exports.DescribeDhcpOptionsRequest = exports.DescribeCustomerGatewaysResult = exports.DescribeCustomerGatewaysRequest = exports.DescribeConversionTasksResult = exports.ConversionTask = exports.ImportVolumeTaskDetails = exports.ImportInstanceTaskDetails = exports.ImportInstanceVolumeDetailItem = exports.DiskImageVolumeDescription = exports.DiskImageDescription = exports.DescribeConversionTasksRequest = exports.DescribeCoipPoolsResult = exports.CoipPool = exports.DescribeCoipPoolsRequest = exports.DescribeClientVpnTargetNetworksResult = exports.TargetNetwork = exports.DescribeClientVpnTargetNetworksRequest = exports.DescribeClientVpnRoutesResult = exports.ClientVpnRoute = exports.DescribeClientVpnRoutesRequest = exports.DescribeClientVpnEndpointsResult = exports.ClientVpnEndpoint = exports.ConnectionLogResponseOptions = exports.ClientConnectResponseOptions = exports.ClientVpnEndpointAttributeStatus = exports.ClientVpnAuthentication = exports.CertificateAuthentication = exports.FederatedAuthentication = exports.DirectoryServiceAuthentication = exports.AssociatedTargetNetwork = exports.DescribeClientVpnEndpointsRequest = exports.DescribeClientVpnConnectionsResult = exports.ClientVpnConnection = exports.ClientVpnConnectionStatus = exports.DescribeClientVpnConnectionsRequest = exports.DescribeClientVpnAuthorizationRulesResult = exports.AuthorizationRule = exports.DescribeClientVpnAuthorizationRulesRequest = exports.DescribeClassicLinkInstancesResult = exports.ClassicLinkInstance = exports.DescribeClassicLinkInstancesRequest = exports.DescribeCarrierGatewaysResult = exports.DescribeCarrierGatewaysRequest = exports.DescribeCapacityReservationsResult = void 0;
exports.DescribeHostReservationsRequest = exports.DescribeHostReservationOfferingsResult = exports.HostOffering = exports.PaymentOption = exports.DescribeHostReservationOfferingsRequest = exports.DescribeFpgaImagesResult = exports.FpgaImage = exports.FpgaImageState = exports.PciId = exports.DescribeFpgaImagesRequest = exports.DescribeFpgaImageAttributeResult = exports.FpgaImageAttribute = exports.ProductCode = exports.LoadPermission = exports.DescribeFpgaImageAttributeRequest = exports.DescribeFlowLogsResult = exports.FlowLog = exports.DescribeFlowLogsRequest = exports.DescribeFleetsResult = exports.FleetData = exports.TargetCapacitySpecification = exports.SpotOptions = exports.FleetSpotMaintenanceStrategies = exports.FleetSpotCapacityRebalance = exports.OnDemandOptions = exports.CapacityReservationOptions = exports.FleetLaunchTemplateConfig = exports.DescribeFleetsInstances = exports.DescribeFleetError = exports.FleetActivityStatus = exports.DescribeFleetsRequest = exports.DescribeFleetInstancesResult = exports.DescribeFleetInstancesRequest = exports.DescribeFleetHistoryResult = exports.HistoryRecordEntry = exports.EventInformation = exports.DescribeFleetHistoryRequest = exports.FleetEventType = exports.DescribeFastSnapshotRestoresResult = exports.DescribeFastSnapshotRestoreSuccessItem = exports.DescribeFastSnapshotRestoresRequest = exports.DescribeExportTasksResult = exports.DescribeExportTasksRequest = exports.DescribeExportImageTasksResult = exports.ExportImageTask = exports.ExportTaskS3Location = exports.DescribeExportImageTasksRequest = exports.DescribeElasticGpusResult = exports.ElasticGpus = exports.ElasticGpuState = void 0;
exports.HibernationOptions = exports.ElasticInferenceAcceleratorAssociation = exports.ElasticGpuAssociation = exports.CpuOptions = exports.CapacityReservationSpecificationResponse = exports.DescribeInstancesRequest = exports.DescribeInstanceEventNotificationAttributesResult = exports.DescribeInstanceEventNotificationAttributesRequest = exports.DescribeInstanceCreditSpecificationsResult = exports.InstanceCreditSpecification = exports.DescribeInstanceCreditSpecificationsRequest = exports.InstanceAttribute = exports.EnclaveOptions = exports.AttributeBooleanValue = exports.InstanceBlockDeviceMapping = exports.EbsInstanceBlockDevice = exports.DescribeInstanceAttributeRequest = exports.DescribeImportSnapshotTasksResult = exports.ImportSnapshotTask = exports.SnapshotTaskDetail = exports.DescribeImportSnapshotTasksRequest = exports.DescribeImportImageTasksResult = exports.ImportImageTask = exports.SnapshotDetail = exports.UserBucketDetails = exports.ImportImageLicenseConfigurationResponse = exports.DescribeImportImageTasksRequest = exports.DescribeImagesResult = exports.Image = exports.StateReason = exports.DescribeImagesRequest = exports.ImageAttribute = exports.LaunchPermission = exports.DescribeImageAttributeRequest = exports.DescribeIdFormatResult = exports.DescribeIdFormatRequest = exports.DescribeIdentityIdFormatResult = exports.DescribeIdentityIdFormatRequest = exports.DescribeIamInstanceProfileAssociationsResult = exports.DescribeIamInstanceProfileAssociationsRequest = exports.DescribeHostsResult = exports.Host = exports.HostInstance = exports.HostProperties = exports.AvailableCapacity = exports.InstanceCapacity = exports.DescribeHostsRequest = exports.DescribeHostReservationsResult = exports.HostReservation = exports.ReservationState = void 0;
exports.DescribeInstanceTypeOfferingsRequest = exports.DescribeInstanceStatusResult = exports.InstanceStatus = exports.InstanceStatusSummary = exports.InstanceStatusDetails = exports.InstanceStatusEvent = exports.DescribeInstanceStatusRequest = exports.DescribeInstancesResult = exports.Reservation = exports.Instance = exports.InstanceState = exports.InstanceNetworkInterface = exports.InstancePrivateIpAddress = exports.InstanceNetworkInterfaceAttachment = exports.InstanceNetworkInterfaceAssociation = exports.Monitoring = exports.InstanceMetadataOptionsResponse = exports.HttpTokensState = exports.LicenseConfiguration = void 0;
var DeleteLocalGatewayRouteTableVpcAssociationRequest;
(function (DeleteLocalGatewayRouteTableVpcAssociationRequest) {
    /**
     * @internal
     */
    DeleteLocalGatewayRouteTableVpcAssociationRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(DeleteLocalGatewayRouteTableVpcAssociationRequest = exports.DeleteLocalGatewayRouteTableVpcAssociationRequest || (exports.DeleteLocalGatewayRouteTableVpcAssociationRequest = {}));
var DeleteLocalGatewayRouteTableVpcAssociationResult;
(function (DeleteLocalGatewayRouteTableVpcAssociationResult) {
    /**
     * @internal
     */
    DeleteLocalGatewayRouteTableVpcAssociationResult.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(DeleteLocalGatewayRouteTableVpcAssociationResult = exports.DeleteLocalGatewayRouteTableVpcAssociationResult || (exports.DeleteLocalGatewayRouteTableVpcAssociationResult = {}));
var DeleteManagedPrefixListRequest;
(function (DeleteManagedPrefixListRequest) {
    /**
     * @internal
     */
    DeleteManagedPrefixListRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(DeleteManagedPrefixListRequest = exports.DeleteManagedPrefixListRequest || (exports.DeleteManagedPrefixListRequest = {}));
var DeleteManagedPrefixListResult;
(function (DeleteManagedPrefixListResult) {
    /**
     * @internal
     */
    DeleteManagedPrefixListResult.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(DeleteManagedPrefixListResult = exports.DeleteManagedPrefixListResult || (exports.DeleteManagedPrefixListResult = {}));
var DeleteNatGatewayRequest;
(function (DeleteNatGatewayRequest) {
    /**
     * @internal
     */
    DeleteNatGatewayRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(DeleteNatGatewayRequest = exports.DeleteNatGatewayRequest || (exports.DeleteNatGatewayRequest = {}));
var DeleteNatGatewayResult;
(function (DeleteNatGatewayResult) {
    /**
     * @internal
     */
    DeleteNatGatewayResult.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(DeleteNatGatewayResult = exports.DeleteNatGatewayResult || (exports.DeleteNatGatewayResult = {}));
var DeleteNetworkAclRequest;
(function (DeleteNetworkAclRequest) {
    /**
     * @internal
     */
    DeleteNetworkAclRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(DeleteNetworkAclRequest = exports.DeleteNetworkAclRequest || (exports.DeleteNetworkAclRequest = {}));
var DeleteNetworkAclEntryRequest;
(function (DeleteNetworkAclEntryRequest) {
    /**
     * @internal
     */
    DeleteNetworkAclEntryRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(DeleteNetworkAclEntryRequest = exports.DeleteNetworkAclEntryRequest || (exports.DeleteNetworkAclEntryRequest = {}));
var DeleteNetworkInsightsAnalysisRequest;
(function (DeleteNetworkInsightsAnalysisRequest) {
    /**
     * @internal
     */
    DeleteNetworkInsightsAnalysisRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(DeleteNetworkInsightsAnalysisRequest = exports.DeleteNetworkInsightsAnalysisRequest || (exports.DeleteNetworkInsightsAnalysisRequest = {}));
var DeleteNetworkInsightsAnalysisResult;
(function (DeleteNetworkInsightsAnalysisResult) {
    /**
     * @internal
     */
    DeleteNetworkInsightsAnalysisResult.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(DeleteNetworkInsightsAnalysisResult = exports.DeleteNetworkInsightsAnalysisResult || (exports.DeleteNetworkInsightsAnalysisResult = {}));
var DeleteNetworkInsightsPathRequest;
(function (DeleteNetworkInsightsPathRequest) {
    /**
     * @internal
     */
    DeleteNetworkInsightsPathRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(DeleteNetworkInsightsPathRequest = exports.DeleteNetworkInsightsPathRequest || (exports.DeleteNetworkInsightsPathRequest = {}));
var DeleteNetworkInsightsPathResult;
(function (DeleteNetworkInsightsPathResult) {
    /**
     * @internal
     */
    DeleteNetworkInsightsPathResult.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(DeleteNetworkInsightsPathResult = exports.DeleteNetworkInsightsPathResult || (exports.DeleteNetworkInsightsPathResult = {}));
var DeleteNetworkInterfaceRequest;
(function (DeleteNetworkInterfaceRequest) {
    /**
     * @internal
     */
    DeleteNetworkInterfaceRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(DeleteNetworkInterfaceRequest = exports.DeleteNetworkInterfaceRequest || (exports.DeleteNetworkInterfaceRequest = {}));
var DeleteNetworkInterfacePermissionRequest;
(function (DeleteNetworkInterfacePermissionRequest) {
    /**
     * @internal
     */
    DeleteNetworkInterfacePermissionRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(DeleteNetworkInterfacePermissionRequest = exports.DeleteNetworkInterfacePermissionRequest || (exports.DeleteNetworkInterfacePermissionRequest = {}));
var DeleteNetworkInterfacePermissionResult;
(function (DeleteNetworkInterfacePermissionResult) {
    /**
     * @internal
     */
    DeleteNetworkInterfacePermissionResult.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(DeleteNetworkInterfacePermissionResult = exports.DeleteNetworkInterfacePermissionResult || (exports.DeleteNetworkInterfacePermissionResult = {}));
var DeletePlacementGroupRequest;
(function (DeletePlacementGroupRequest) {
    /**
     * @internal
     */
    DeletePlacementGroupRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(DeletePlacementGroupRequest = exports.DeletePlacementGroupRequest || (exports.DeletePlacementGroupRequest = {}));
var DeleteQueuedReservedInstancesRequest;
(function (DeleteQueuedReservedInstancesRequest) {
    /**
     * @internal
     */
    DeleteQueuedReservedInstancesRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(DeleteQueuedReservedInstancesRequest = exports.DeleteQueuedReservedInstancesRequest || (exports.DeleteQueuedReservedInstancesRequest = {}));
var DeleteQueuedReservedInstancesErrorCode;
(function (DeleteQueuedReservedInstancesErrorCode) {
    DeleteQueuedReservedInstancesErrorCode["RESERVED_INSTANCES_ID_INVALID"] = "reserved-instances-id-invalid";
    DeleteQueuedReservedInstancesErrorCode["RESERVED_INSTANCES_NOT_IN_QUEUED_STATE"] = "reserved-instances-not-in-queued-state";
    DeleteQueuedReservedInstancesErrorCode["UNEXPECTED_ERROR"] = "unexpected-error";
})(DeleteQueuedReservedInstancesErrorCode = exports.DeleteQueuedReservedInstancesErrorCode || (exports.DeleteQueuedReservedInstancesErrorCode = {}));
var DeleteQueuedReservedInstancesError;
(function (DeleteQueuedReservedInstancesError) {
    /**
     * @internal
     */
    DeleteQueuedReservedInstancesError.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(DeleteQueuedReservedInstancesError = exports.DeleteQueuedReservedInstancesError || (exports.DeleteQueuedReservedInstancesError = {}));
var FailedQueuedPurchaseDeletion;
(function (FailedQueuedPurchaseDeletion) {
    /**
     * @internal
     */
    FailedQueuedPurchaseDeletion.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(FailedQueuedPurchaseDeletion = exports.FailedQueuedPurchaseDeletion || (exports.FailedQueuedPurchaseDeletion = {}));
var SuccessfulQueuedPurchaseDeletion;
(function (SuccessfulQueuedPurchaseDeletion) {
    /**
     * @internal
     */
    SuccessfulQueuedPurchaseDeletion.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(SuccessfulQueuedPurchaseDeletion = exports.SuccessfulQueuedPurchaseDeletion || (exports.SuccessfulQueuedPurchaseDeletion = {}));
var DeleteQueuedReservedInstancesResult;
(function (DeleteQueuedReservedInstancesResult) {
    /**
     * @internal
     */
    DeleteQueuedReservedInstancesResult.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(DeleteQueuedReservedInstancesResult = exports.DeleteQueuedReservedInstancesResult || (exports.DeleteQueuedReservedInstancesResult = {}));
var DeleteRouteRequest;
(function (DeleteRouteRequest) {
    /**
     * @internal
     */
    DeleteRouteRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(DeleteRouteRequest = exports.DeleteRouteRequest || (exports.DeleteRouteRequest = {}));
var DeleteRouteTableRequest;
(function (DeleteRouteTableRequest) {
    /**
     * @internal
     */
    DeleteRouteTableRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(DeleteRouteTableRequest = exports.DeleteRouteTableRequest || (exports.DeleteRouteTableRequest = {}));
var DeleteSecurityGroupRequest;
(function (DeleteSecurityGroupRequest) {
    /**
     * @internal
     */
    DeleteSecurityGroupRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(DeleteSecurityGroupRequest = exports.DeleteSecurityGroupRequest || (exports.DeleteSecurityGroupRequest = {}));
var DeleteSnapshotRequest;
(function (DeleteSnapshotRequest) {
    /**
     * @internal
     */
    DeleteSnapshotRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(DeleteSnapshotRequest = exports.DeleteSnapshotRequest || (exports.DeleteSnapshotRequest = {}));
var DeleteSpotDatafeedSubscriptionRequest;
(function (DeleteSpotDatafeedSubscriptionRequest) {
    /**
     * @internal
     */
    DeleteSpotDatafeedSubscriptionRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(DeleteSpotDatafeedSubscriptionRequest = exports.DeleteSpotDatafeedSubscriptionRequest || (exports.DeleteSpotDatafeedSubscriptionRequest = {}));
var DeleteSubnetRequest;
(function (DeleteSubnetRequest) {
    /**
     * @internal
     */
    DeleteSubnetRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(DeleteSubnetRequest = exports.DeleteSubnetRequest || (exports.DeleteSubnetRequest = {}));
var DeleteTagsRequest;
(function (DeleteTagsRequest) {
    /**
     * @internal
     */
    DeleteTagsRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(DeleteTagsRequest = exports.DeleteTagsRequest || (exports.DeleteTagsRequest = {}));
var DeleteTrafficMirrorFilterRequest;
(function (DeleteTrafficMirrorFilterRequest) {
    /**
     * @internal
     */
    DeleteTrafficMirrorFilterRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(DeleteTrafficMirrorFilterRequest = exports.DeleteTrafficMirrorFilterRequest || (exports.DeleteTrafficMirrorFilterRequest = {}));
var DeleteTrafficMirrorFilterResult;
(function (DeleteTrafficMirrorFilterResult) {
    /**
     * @internal
     */
    DeleteTrafficMirrorFilterResult.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(DeleteTrafficMirrorFilterResult = exports.DeleteTrafficMirrorFilterResult || (exports.DeleteTrafficMirrorFilterResult = {}));
var DeleteTrafficMirrorFilterRuleRequest;
(function (DeleteTrafficMirrorFilterRuleRequest) {
    /**
     * @internal
     */
    DeleteTrafficMirrorFilterRuleRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(DeleteTrafficMirrorFilterRuleRequest = exports.DeleteTrafficMirrorFilterRuleRequest || (exports.DeleteTrafficMirrorFilterRuleRequest = {}));
var DeleteTrafficMirrorFilterRuleResult;
(function (DeleteTrafficMirrorFilterRuleResult) {
    /**
     * @internal
     */
    DeleteTrafficMirrorFilterRuleResult.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(DeleteTrafficMirrorFilterRuleResult = exports.DeleteTrafficMirrorFilterRuleResult || (exports.DeleteTrafficMirrorFilterRuleResult = {}));
var DeleteTrafficMirrorSessionRequest;
(function (DeleteTrafficMirrorSessionRequest) {
    /**
     * @internal
     */
    DeleteTrafficMirrorSessionRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(DeleteTrafficMirrorSessionRequest = exports.DeleteTrafficMirrorSessionRequest || (exports.DeleteTrafficMirrorSessionRequest = {}));
var DeleteTrafficMirrorSessionResult;
(function (DeleteTrafficMirrorSessionResult) {
    /**
     * @internal
     */
    DeleteTrafficMirrorSessionResult.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(DeleteTrafficMirrorSessionResult = exports.DeleteTrafficMirrorSessionResult || (exports.DeleteTrafficMirrorSessionResult = {}));
var DeleteTrafficMirrorTargetRequest;
(function (DeleteTrafficMirrorTargetRequest) {
    /**
     * @internal
     */
    DeleteTrafficMirrorTargetRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(DeleteTrafficMirrorTargetRequest = exports.DeleteTrafficMirrorTargetRequest || (exports.DeleteTrafficMirrorTargetRequest = {}));
var DeleteTrafficMirrorTargetResult;
(function (DeleteTrafficMirrorTargetResult) {
    /**
     * @internal
     */
    DeleteTrafficMirrorTargetResult.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(DeleteTrafficMirrorTargetResult = exports.DeleteTrafficMirrorTargetResult || (exports.DeleteTrafficMirrorTargetResult = {}));
var DeleteTransitGatewayRequest;
(function (DeleteTransitGatewayRequest) {
    /**
     * @internal
     */
    DeleteTransitGatewayRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(DeleteTransitGatewayRequest = exports.DeleteTransitGatewayRequest || (exports.DeleteTransitGatewayRequest = {}));
var DeleteTransitGatewayResult;
(function (DeleteTransitGatewayResult) {
    /**
     * @internal
     */
    DeleteTransitGatewayResult.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(DeleteTransitGatewayResult = exports.DeleteTransitGatewayResult || (exports.DeleteTransitGatewayResult = {}));
var DeleteTransitGatewayConnectRequest;
(function (DeleteTransitGatewayConnectRequest) {
    /**
     * @internal
     */
    DeleteTransitGatewayConnectRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(DeleteTransitGatewayConnectRequest = exports.DeleteTransitGatewayConnectRequest || (exports.DeleteTransitGatewayConnectRequest = {}));
var DeleteTransitGatewayConnectResult;
(function (DeleteTransitGatewayConnectResult) {
    /**
     * @internal
     */
    DeleteTransitGatewayConnectResult.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(DeleteTransitGatewayConnectResult = exports.DeleteTransitGatewayConnectResult || (exports.DeleteTransitGatewayConnectResult = {}));
var DeleteTransitGatewayConnectPeerRequest;
(function (DeleteTransitGatewayConnectPeerRequest) {
    /**
     * @internal
     */
    DeleteTransitGatewayConnectPeerRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(DeleteTransitGatewayConnectPeerRequest = exports.DeleteTransitGatewayConnectPeerRequest || (exports.DeleteTransitGatewayConnectPeerRequest = {}));
var DeleteTransitGatewayConnectPeerResult;
(function (DeleteTransitGatewayConnectPeerResult) {
    /**
     * @internal
     */
    DeleteTransitGatewayConnectPeerResult.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(DeleteTransitGatewayConnectPeerResult = exports.DeleteTransitGatewayConnectPeerResult || (exports.DeleteTransitGatewayConnectPeerResult = {}));
var DeleteTransitGatewayMulticastDomainRequest;
(function (DeleteTransitGatewayMulticastDomainRequest) {
    /**
     * @internal
     */
    DeleteTransitGatewayMulticastDomainRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(DeleteTransitGatewayMulticastDomainRequest = exports.DeleteTransitGatewayMulticastDomainRequest || (exports.DeleteTransitGatewayMulticastDomainRequest = {}));
var DeleteTransitGatewayMulticastDomainResult;
(function (DeleteTransitGatewayMulticastDomainResult) {
    /**
     * @internal
     */
    DeleteTransitGatewayMulticastDomainResult.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(DeleteTransitGatewayMulticastDomainResult = exports.DeleteTransitGatewayMulticastDomainResult || (exports.DeleteTransitGatewayMulticastDomainResult = {}));
var DeleteTransitGatewayPeeringAttachmentRequest;
(function (DeleteTransitGatewayPeeringAttachmentRequest) {
    /**
     * @internal
     */
    DeleteTransitGatewayPeeringAttachmentRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(DeleteTransitGatewayPeeringAttachmentRequest = exports.DeleteTransitGatewayPeeringAttachmentRequest || (exports.DeleteTransitGatewayPeeringAttachmentRequest = {}));
var DeleteTransitGatewayPeeringAttachmentResult;
(function (DeleteTransitGatewayPeeringAttachmentResult) {
    /**
     * @internal
     */
    DeleteTransitGatewayPeeringAttachmentResult.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(DeleteTransitGatewayPeeringAttachmentResult = exports.DeleteTransitGatewayPeeringAttachmentResult || (exports.DeleteTransitGatewayPeeringAttachmentResult = {}));
var DeleteTransitGatewayPrefixListReferenceRequest;
(function (DeleteTransitGatewayPrefixListReferenceRequest) {
    /**
     * @internal
     */
    DeleteTransitGatewayPrefixListReferenceRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(DeleteTransitGatewayPrefixListReferenceRequest = exports.DeleteTransitGatewayPrefixListReferenceRequest || (exports.DeleteTransitGatewayPrefixListReferenceRequest = {}));
var DeleteTransitGatewayPrefixListReferenceResult;
(function (DeleteTransitGatewayPrefixListReferenceResult) {
    /**
     * @internal
     */
    DeleteTransitGatewayPrefixListReferenceResult.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(DeleteTransitGatewayPrefixListReferenceResult = exports.DeleteTransitGatewayPrefixListReferenceResult || (exports.DeleteTransitGatewayPrefixListReferenceResult = {}));
var DeleteTransitGatewayRouteRequest;
(function (DeleteTransitGatewayRouteRequest) {
    /**
     * @internal
     */
    DeleteTransitGatewayRouteRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(DeleteTransitGatewayRouteRequest = exports.DeleteTransitGatewayRouteRequest || (exports.DeleteTransitGatewayRouteRequest = {}));
var DeleteTransitGatewayRouteResult;
(function (DeleteTransitGatewayRouteResult) {
    /**
     * @internal
     */
    DeleteTransitGatewayRouteResult.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(DeleteTransitGatewayRouteResult = exports.DeleteTransitGatewayRouteResult || (exports.DeleteTransitGatewayRouteResult = {}));
var DeleteTransitGatewayRouteTableRequest;
(function (DeleteTransitGatewayRouteTableRequest) {
    /**
     * @internal
     */
    DeleteTransitGatewayRouteTableRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(DeleteTransitGatewayRouteTableRequest = exports.DeleteTransitGatewayRouteTableRequest || (exports.DeleteTransitGatewayRouteTableRequest = {}));
var DeleteTransitGatewayRouteTableResult;
(function (DeleteTransitGatewayRouteTableResult) {
    /**
     * @internal
     */
    DeleteTransitGatewayRouteTableResult.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(DeleteTransitGatewayRouteTableResult = exports.DeleteTransitGatewayRouteTableResult || (exports.DeleteTransitGatewayRouteTableResult = {}));
var DeleteTransitGatewayVpcAttachmentRequest;
(function (DeleteTransitGatewayVpcAttachmentRequest) {
    /**
     * @internal
     */
    DeleteTransitGatewayVpcAttachmentRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(DeleteTransitGatewayVpcAttachmentRequest = exports.DeleteTransitGatewayVpcAttachmentRequest || (exports.DeleteTransitGatewayVpcAttachmentRequest = {}));
var DeleteTransitGatewayVpcAttachmentResult;
(function (DeleteTransitGatewayVpcAttachmentResult) {
    /**
     * @internal
     */
    DeleteTransitGatewayVpcAttachmentResult.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(DeleteTransitGatewayVpcAttachmentResult = exports.DeleteTransitGatewayVpcAttachmentResult || (exports.DeleteTransitGatewayVpcAttachmentResult = {}));
var DeleteVolumeRequest;
(function (DeleteVolumeRequest) {
    /**
     * @internal
     */
    DeleteVolumeRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(DeleteVolumeRequest = exports.DeleteVolumeRequest || (exports.DeleteVolumeRequest = {}));
var DeleteVpcRequest;
(function (DeleteVpcRequest) {
    /**
     * @internal
     */
    DeleteVpcRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(DeleteVpcRequest = exports.DeleteVpcRequest || (exports.DeleteVpcRequest = {}));
var DeleteVpcEndpointConnectionNotificationsRequest;
(function (DeleteVpcEndpointConnectionNotificationsRequest) {
    /**
     * @internal
     */
    DeleteVpcEndpointConnectionNotificationsRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(DeleteVpcEndpointConnectionNotificationsRequest = exports.DeleteVpcEndpointConnectionNotificationsRequest || (exports.DeleteVpcEndpointConnectionNotificationsRequest = {}));
var DeleteVpcEndpointConnectionNotificationsResult;
(function (DeleteVpcEndpointConnectionNotificationsResult) {
    /**
     * @internal
     */
    DeleteVpcEndpointConnectionNotificationsResult.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(DeleteVpcEndpointConnectionNotificationsResult = exports.DeleteVpcEndpointConnectionNotificationsResult || (exports.DeleteVpcEndpointConnectionNotificationsResult = {}));
var DeleteVpcEndpointsRequest;
(function (DeleteVpcEndpointsRequest) {
    /**
     * @internal
     */
    DeleteVpcEndpointsRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(DeleteVpcEndpointsRequest = exports.DeleteVpcEndpointsRequest || (exports.DeleteVpcEndpointsRequest = {}));
var DeleteVpcEndpointsResult;
(function (DeleteVpcEndpointsResult) {
    /**
     * @internal
     */
    DeleteVpcEndpointsResult.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(DeleteVpcEndpointsResult = exports.DeleteVpcEndpointsResult || (exports.DeleteVpcEndpointsResult = {}));
var DeleteVpcEndpointServiceConfigurationsRequest;
(function (DeleteVpcEndpointServiceConfigurationsRequest) {
    /**
     * @internal
     */
    DeleteVpcEndpointServiceConfigurationsRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(DeleteVpcEndpointServiceConfigurationsRequest = exports.DeleteVpcEndpointServiceConfigurationsRequest || (exports.DeleteVpcEndpointServiceConfigurationsRequest = {}));
var DeleteVpcEndpointServiceConfigurationsResult;
(function (DeleteVpcEndpointServiceConfigurationsResult) {
    /**
     * @internal
     */
    DeleteVpcEndpointServiceConfigurationsResult.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(DeleteVpcEndpointServiceConfigurationsResult = exports.DeleteVpcEndpointServiceConfigurationsResult || (exports.DeleteVpcEndpointServiceConfigurationsResult = {}));
var DeleteVpcPeeringConnectionRequest;
(function (DeleteVpcPeeringConnectionRequest) {
    /**
     * @internal
     */
    DeleteVpcPeeringConnectionRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(DeleteVpcPeeringConnectionRequest = exports.DeleteVpcPeeringConnectionRequest || (exports.DeleteVpcPeeringConnectionRequest = {}));
var DeleteVpcPeeringConnectionResult;
(function (DeleteVpcPeeringConnectionResult) {
    /**
     * @internal
     */
    DeleteVpcPeeringConnectionResult.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(DeleteVpcPeeringConnectionResult = exports.DeleteVpcPeeringConnectionResult || (exports.DeleteVpcPeeringConnectionResult = {}));
var DeleteVpnConnectionRequest;
(function (DeleteVpnConnectionRequest) {
    /**
     * @internal
     */
    DeleteVpnConnectionRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(DeleteVpnConnectionRequest = exports.DeleteVpnConnectionRequest || (exports.DeleteVpnConnectionRequest = {}));
var DeleteVpnConnectionRouteRequest;
(function (DeleteVpnConnectionRouteRequest) {
    /**
     * @internal
     */
    DeleteVpnConnectionRouteRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(DeleteVpnConnectionRouteRequest = exports.DeleteVpnConnectionRouteRequest || (exports.DeleteVpnConnectionRouteRequest = {}));
var DeleteVpnGatewayRequest;
(function (DeleteVpnGatewayRequest) {
    /**
     * @internal
     */
    DeleteVpnGatewayRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(DeleteVpnGatewayRequest = exports.DeleteVpnGatewayRequest || (exports.DeleteVpnGatewayRequest = {}));
var DeprovisionByoipCidrRequest;
(function (DeprovisionByoipCidrRequest) {
    /**
     * @internal
     */
    DeprovisionByoipCidrRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(DeprovisionByoipCidrRequest = exports.DeprovisionByoipCidrRequest || (exports.DeprovisionByoipCidrRequest = {}));
var DeprovisionByoipCidrResult;
(function (DeprovisionByoipCidrResult) {
    /**
     * @internal
     */
    DeprovisionByoipCidrResult.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(DeprovisionByoipCidrResult = exports.DeprovisionByoipCidrResult || (exports.DeprovisionByoipCidrResult = {}));
var DeregisterImageRequest;
(function (DeregisterImageRequest) {
    /**
     * @internal
     */
    DeregisterImageRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(DeregisterImageRequest = exports.DeregisterImageRequest || (exports.DeregisterImageRequest = {}));
var DeregisterInstanceTagAttributeRequest;
(function (DeregisterInstanceTagAttributeRequest) {
    /**
     * @internal
     */
    DeregisterInstanceTagAttributeRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(DeregisterInstanceTagAttributeRequest = exports.DeregisterInstanceTagAttributeRequest || (exports.DeregisterInstanceTagAttributeRequest = {}));
var DeregisterInstanceEventNotificationAttributesRequest;
(function (DeregisterInstanceEventNotificationAttributesRequest) {
    /**
     * @internal
     */
    DeregisterInstanceEventNotificationAttributesRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(DeregisterInstanceEventNotificationAttributesRequest = exports.DeregisterInstanceEventNotificationAttributesRequest || (exports.DeregisterInstanceEventNotificationAttributesRequest = {}));
var InstanceTagNotificationAttribute;
(function (InstanceTagNotificationAttribute) {
    /**
     * @internal
     */
    InstanceTagNotificationAttribute.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(InstanceTagNotificationAttribute = exports.InstanceTagNotificationAttribute || (exports.InstanceTagNotificationAttribute = {}));
var DeregisterInstanceEventNotificationAttributesResult;
(function (DeregisterInstanceEventNotificationAttributesResult) {
    /**
     * @internal
     */
    DeregisterInstanceEventNotificationAttributesResult.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(DeregisterInstanceEventNotificationAttributesResult = exports.DeregisterInstanceEventNotificationAttributesResult || (exports.DeregisterInstanceEventNotificationAttributesResult = {}));
var DeregisterTransitGatewayMulticastGroupMembersRequest;
(function (DeregisterTransitGatewayMulticastGroupMembersRequest) {
    /**
     * @internal
     */
    DeregisterTransitGatewayMulticastGroupMembersRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(DeregisterTransitGatewayMulticastGroupMembersRequest = exports.DeregisterTransitGatewayMulticastGroupMembersRequest || (exports.DeregisterTransitGatewayMulticastGroupMembersRequest = {}));
var TransitGatewayMulticastDeregisteredGroupMembers;
(function (TransitGatewayMulticastDeregisteredGroupMembers) {
    /**
     * @internal
     */
    TransitGatewayMulticastDeregisteredGroupMembers.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(TransitGatewayMulticastDeregisteredGroupMembers = exports.TransitGatewayMulticastDeregisteredGroupMembers || (exports.TransitGatewayMulticastDeregisteredGroupMembers = {}));
var DeregisterTransitGatewayMulticastGroupMembersResult;
(function (DeregisterTransitGatewayMulticastGroupMembersResult) {
    /**
     * @internal
     */
    DeregisterTransitGatewayMulticastGroupMembersResult.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(DeregisterTransitGatewayMulticastGroupMembersResult = exports.DeregisterTransitGatewayMulticastGroupMembersResult || (exports.DeregisterTransitGatewayMulticastGroupMembersResult = {}));
var DeregisterTransitGatewayMulticastGroupSourcesRequest;
(function (DeregisterTransitGatewayMulticastGroupSourcesRequest) {
    /**
     * @internal
     */
    DeregisterTransitGatewayMulticastGroupSourcesRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(DeregisterTransitGatewayMulticastGroupSourcesRequest = exports.DeregisterTransitGatewayMulticastGroupSourcesRequest || (exports.DeregisterTransitGatewayMulticastGroupSourcesRequest = {}));
var TransitGatewayMulticastDeregisteredGroupSources;
(function (TransitGatewayMulticastDeregisteredGroupSources) {
    /**
     * @internal
     */
    TransitGatewayMulticastDeregisteredGroupSources.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(TransitGatewayMulticastDeregisteredGroupSources = exports.TransitGatewayMulticastDeregisteredGroupSources || (exports.TransitGatewayMulticastDeregisteredGroupSources = {}));
var DeregisterTransitGatewayMulticastGroupSourcesResult;
(function (DeregisterTransitGatewayMulticastGroupSourcesResult) {
    /**
     * @internal
     */
    DeregisterTransitGatewayMulticastGroupSourcesResult.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(DeregisterTransitGatewayMulticastGroupSourcesResult = exports.DeregisterTransitGatewayMulticastGroupSourcesResult || (exports.DeregisterTransitGatewayMulticastGroupSourcesResult = {}));
var DescribeAccountAttributesRequest;
(function (DescribeAccountAttributesRequest) {
    /**
     * @internal
     */
    DescribeAccountAttributesRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(DescribeAccountAttributesRequest = exports.DescribeAccountAttributesRequest || (exports.DescribeAccountAttributesRequest = {}));
var DescribeAccountAttributesResult;
(function (DescribeAccountAttributesResult) {
    /**
     * @internal
     */
    DescribeAccountAttributesResult.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(DescribeAccountAttributesResult = exports.DescribeAccountAttributesResult || (exports.DescribeAccountAttributesResult = {}));
var Filter;
(function (Filter) {
    /**
     * @internal
     */
    Filter.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(Filter = exports.Filter || (exports.Filter = {}));
var DescribeAddressesRequest;
(function (DescribeAddressesRequest) {
    /**
     * @internal
     */
    DescribeAddressesRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(DescribeAddressesRequest = exports.DescribeAddressesRequest || (exports.DescribeAddressesRequest = {}));
var DescribeAddressesResult;
(function (DescribeAddressesResult) {
    /**
     * @internal
     */
    DescribeAddressesResult.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(DescribeAddressesResult = exports.DescribeAddressesResult || (exports.DescribeAddressesResult = {}));
var DescribeAddressesAttributeRequest;
(function (DescribeAddressesAttributeRequest) {
    /**
     * @internal
     */
    DescribeAddressesAttributeRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(DescribeAddressesAttributeRequest = exports.DescribeAddressesAttributeRequest || (exports.DescribeAddressesAttributeRequest = {}));
var DescribeAddressesAttributeResult;
(function (DescribeAddressesAttributeResult) {
    /**
     * @internal
     */
    DescribeAddressesAttributeResult.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(DescribeAddressesAttributeResult = exports.DescribeAddressesAttributeResult || (exports.DescribeAddressesAttributeResult = {}));
var DescribeAggregateIdFormatRequest;
(function (DescribeAggregateIdFormatRequest) {
    /**
     * @internal
     */
    DescribeAggregateIdFormatRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(DescribeAggregateIdFormatRequest = exports.DescribeAggregateIdFormatRequest || (exports.DescribeAggregateIdFormatRequest = {}));
var IdFormat;
(function (IdFormat) {
    /**
     * @internal
     */
    IdFormat.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(IdFormat = exports.IdFormat || (exports.IdFormat = {}));
var DescribeAggregateIdFormatResult;
(function (DescribeAggregateIdFormatResult) {
    /**
     * @internal
     */
    DescribeAggregateIdFormatResult.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(DescribeAggregateIdFormatResult = exports.DescribeAggregateIdFormatResult || (exports.DescribeAggregateIdFormatResult = {}));
var DescribeAvailabilityZonesRequest;
(function (DescribeAvailabilityZonesRequest) {
    /**
     * @internal
     */
    DescribeAvailabilityZonesRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(DescribeAvailabilityZonesRequest = exports.DescribeAvailabilityZonesRequest || (exports.DescribeAvailabilityZonesRequest = {}));
var AvailabilityZoneMessage;
(function (AvailabilityZoneMessage) {
    /**
     * @internal
     */
    AvailabilityZoneMessage.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(AvailabilityZoneMessage = exports.AvailabilityZoneMessage || (exports.AvailabilityZoneMessage = {}));
var AvailabilityZone;
(function (AvailabilityZone) {
    /**
     * @internal
     */
    AvailabilityZone.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(AvailabilityZone = exports.AvailabilityZone || (exports.AvailabilityZone = {}));
var DescribeAvailabilityZonesResult;
(function (DescribeAvailabilityZonesResult) {
    /**
     * @internal
     */
    DescribeAvailabilityZonesResult.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(DescribeAvailabilityZonesResult = exports.DescribeAvailabilityZonesResult || (exports.DescribeAvailabilityZonesResult = {}));
var DescribeBundleTasksRequest;
(function (DescribeBundleTasksRequest) {
    /**
     * @internal
     */
    DescribeBundleTasksRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(DescribeBundleTasksRequest = exports.DescribeBundleTasksRequest || (exports.DescribeBundleTasksRequest = {}));
var DescribeBundleTasksResult;
(function (DescribeBundleTasksResult) {
    /**
     * @internal
     */
    DescribeBundleTasksResult.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(DescribeBundleTasksResult = exports.DescribeBundleTasksResult || (exports.DescribeBundleTasksResult = {}));
var DescribeByoipCidrsRequest;
(function (DescribeByoipCidrsRequest) {
    /**
     * @internal
     */
    DescribeByoipCidrsRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(DescribeByoipCidrsRequest = exports.DescribeByoipCidrsRequest || (exports.DescribeByoipCidrsRequest = {}));
var DescribeByoipCidrsResult;
(function (DescribeByoipCidrsResult) {
    /**
     * @internal
     */
    DescribeByoipCidrsResult.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(DescribeByoipCidrsResult = exports.DescribeByoipCidrsResult || (exports.DescribeByoipCidrsResult = {}));
var DescribeCapacityReservationsRequest;
(function (DescribeCapacityReservationsRequest) {
    /**
     * @internal
     */
    DescribeCapacityReservationsRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(DescribeCapacityReservationsRequest = exports.DescribeCapacityReservationsRequest || (exports.DescribeCapacityReservationsRequest = {}));
var DescribeCapacityReservationsResult;
(function (DescribeCapacityReservationsResult) {
    /**
     * @internal
     */
    DescribeCapacityReservationsResult.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(DescribeCapacityReservationsResult = exports.DescribeCapacityReservationsResult || (exports.DescribeCapacityReservationsResult = {}));
var DescribeCarrierGatewaysRequest;
(function (DescribeCarrierGatewaysRequest) {
    /**
     * @internal
     */
    DescribeCarrierGatewaysRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(DescribeCarrierGatewaysRequest = exports.DescribeCarrierGatewaysRequest || (exports.DescribeCarrierGatewaysRequest = {}));
var DescribeCarrierGatewaysResult;
(function (DescribeCarrierGatewaysResult) {
    /**
     * @internal
     */
    DescribeCarrierGatewaysResult.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(DescribeCarrierGatewaysResult = exports.DescribeCarrierGatewaysResult || (exports.DescribeCarrierGatewaysResult = {}));
var DescribeClassicLinkInstancesRequest;
(function (DescribeClassicLinkInstancesRequest) {
    /**
     * @internal
     */
    DescribeClassicLinkInstancesRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(DescribeClassicLinkInstancesRequest = exports.DescribeClassicLinkInstancesRequest || (exports.DescribeClassicLinkInstancesRequest = {}));
var ClassicLinkInstance;
(function (ClassicLinkInstance) {
    /**
     * @internal
     */
    ClassicLinkInstance.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(ClassicLinkInstance = exports.ClassicLinkInstance || (exports.ClassicLinkInstance = {}));
var DescribeClassicLinkInstancesResult;
(function (DescribeClassicLinkInstancesResult) {
    /**
     * @internal
     */
    DescribeClassicLinkInstancesResult.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(DescribeClassicLinkInstancesResult = exports.DescribeClassicLinkInstancesResult || (exports.DescribeClassicLinkInstancesResult = {}));
var DescribeClientVpnAuthorizationRulesRequest;
(function (DescribeClientVpnAuthorizationRulesRequest) {
    /**
     * @internal
     */
    DescribeClientVpnAuthorizationRulesRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(DescribeClientVpnAuthorizationRulesRequest = exports.DescribeClientVpnAuthorizationRulesRequest || (exports.DescribeClientVpnAuthorizationRulesRequest = {}));
var AuthorizationRule;
(function (AuthorizationRule) {
    /**
     * @internal
     */
    AuthorizationRule.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(AuthorizationRule = exports.AuthorizationRule || (exports.AuthorizationRule = {}));
var DescribeClientVpnAuthorizationRulesResult;
(function (DescribeClientVpnAuthorizationRulesResult) {
    /**
     * @internal
     */
    DescribeClientVpnAuthorizationRulesResult.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(DescribeClientVpnAuthorizationRulesResult = exports.DescribeClientVpnAuthorizationRulesResult || (exports.DescribeClientVpnAuthorizationRulesResult = {}));
var DescribeClientVpnConnectionsRequest;
(function (DescribeClientVpnConnectionsRequest) {
    /**
     * @internal
     */
    DescribeClientVpnConnectionsRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(DescribeClientVpnConnectionsRequest = exports.DescribeClientVpnConnectionsRequest || (exports.DescribeClientVpnConnectionsRequest = {}));
var ClientVpnConnectionStatus;
(function (ClientVpnConnectionStatus) {
    /**
     * @internal
     */
    ClientVpnConnectionStatus.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(ClientVpnConnectionStatus = exports.ClientVpnConnectionStatus || (exports.ClientVpnConnectionStatus = {}));
var ClientVpnConnection;
(function (ClientVpnConnection) {
    /**
     * @internal
     */
    ClientVpnConnection.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(ClientVpnConnection = exports.ClientVpnConnection || (exports.ClientVpnConnection = {}));
var DescribeClientVpnConnectionsResult;
(function (DescribeClientVpnConnectionsResult) {
    /**
     * @internal
     */
    DescribeClientVpnConnectionsResult.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(DescribeClientVpnConnectionsResult = exports.DescribeClientVpnConnectionsResult || (exports.DescribeClientVpnConnectionsResult = {}));
var DescribeClientVpnEndpointsRequest;
(function (DescribeClientVpnEndpointsRequest) {
    /**
     * @internal
     */
    DescribeClientVpnEndpointsRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(DescribeClientVpnEndpointsRequest = exports.DescribeClientVpnEndpointsRequest || (exports.DescribeClientVpnEndpointsRequest = {}));
var AssociatedTargetNetwork;
(function (AssociatedTargetNetwork) {
    /**
     * @internal
     */
    AssociatedTargetNetwork.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(AssociatedTargetNetwork = exports.AssociatedTargetNetwork || (exports.AssociatedTargetNetwork = {}));
var DirectoryServiceAuthentication;
(function (DirectoryServiceAuthentication) {
    /**
     * @internal
     */
    DirectoryServiceAuthentication.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(DirectoryServiceAuthentication = exports.DirectoryServiceAuthentication || (exports.DirectoryServiceAuthentication = {}));
var FederatedAuthentication;
(function (FederatedAuthentication) {
    /**
     * @internal
     */
    FederatedAuthentication.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(FederatedAuthentication = exports.FederatedAuthentication || (exports.FederatedAuthentication = {}));
var CertificateAuthentication;
(function (CertificateAuthentication) {
    /**
     * @internal
     */
    CertificateAuthentication.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(CertificateAuthentication = exports.CertificateAuthentication || (exports.CertificateAuthentication = {}));
var ClientVpnAuthentication;
(function (ClientVpnAuthentication) {
    /**
     * @internal
     */
    ClientVpnAuthentication.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(ClientVpnAuthentication = exports.ClientVpnAuthentication || (exports.ClientVpnAuthentication = {}));
var ClientVpnEndpointAttributeStatus;
(function (ClientVpnEndpointAttributeStatus) {
    /**
     * @internal
     */
    ClientVpnEndpointAttributeStatus.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(ClientVpnEndpointAttributeStatus = exports.ClientVpnEndpointAttributeStatus || (exports.ClientVpnEndpointAttributeStatus = {}));
var ClientConnectResponseOptions;
(function (ClientConnectResponseOptions) {
    /**
     * @internal
     */
    ClientConnectResponseOptions.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(ClientConnectResponseOptions = exports.ClientConnectResponseOptions || (exports.ClientConnectResponseOptions = {}));
var ConnectionLogResponseOptions;
(function (ConnectionLogResponseOptions) {
    /**
     * @internal
     */
    ConnectionLogResponseOptions.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(ConnectionLogResponseOptions = exports.ConnectionLogResponseOptions || (exports.ConnectionLogResponseOptions = {}));
var ClientVpnEndpoint;
(function (ClientVpnEndpoint) {
    /**
     * @internal
     */
    ClientVpnEndpoint.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(ClientVpnEndpoint = exports.ClientVpnEndpoint || (exports.ClientVpnEndpoint = {}));
var DescribeClientVpnEndpointsResult;
(function (DescribeClientVpnEndpointsResult) {
    /**
     * @internal
     */
    DescribeClientVpnEndpointsResult.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(DescribeClientVpnEndpointsResult = exports.DescribeClientVpnEndpointsResult || (exports.DescribeClientVpnEndpointsResult = {}));
var DescribeClientVpnRoutesRequest;
(function (DescribeClientVpnRoutesRequest) {
    /**
     * @internal
     */
    DescribeClientVpnRoutesRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(DescribeClientVpnRoutesRequest = exports.DescribeClientVpnRoutesRequest || (exports.DescribeClientVpnRoutesRequest = {}));
var ClientVpnRoute;
(function (ClientVpnRoute) {
    /**
     * @internal
     */
    ClientVpnRoute.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(ClientVpnRoute = exports.ClientVpnRoute || (exports.ClientVpnRoute = {}));
var DescribeClientVpnRoutesResult;
(function (DescribeClientVpnRoutesResult) {
    /**
     * @internal
     */
    DescribeClientVpnRoutesResult.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(DescribeClientVpnRoutesResult = exports.DescribeClientVpnRoutesResult || (exports.DescribeClientVpnRoutesResult = {}));
var DescribeClientVpnTargetNetworksRequest;
(function (DescribeClientVpnTargetNetworksRequest) {
    /**
     * @internal
     */
    DescribeClientVpnTargetNetworksRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(DescribeClientVpnTargetNetworksRequest = exports.DescribeClientVpnTargetNetworksRequest || (exports.DescribeClientVpnTargetNetworksRequest = {}));
var TargetNetwork;
(function (TargetNetwork) {
    /**
     * @internal
     */
    TargetNetwork.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(TargetNetwork = exports.TargetNetwork || (exports.TargetNetwork = {}));
var DescribeClientVpnTargetNetworksResult;
(function (DescribeClientVpnTargetNetworksResult) {
    /**
     * @internal
     */
    DescribeClientVpnTargetNetworksResult.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(DescribeClientVpnTargetNetworksResult = exports.DescribeClientVpnTargetNetworksResult || (exports.DescribeClientVpnTargetNetworksResult = {}));
var DescribeCoipPoolsRequest;
(function (DescribeCoipPoolsRequest) {
    /**
     * @internal
     */
    DescribeCoipPoolsRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(DescribeCoipPoolsRequest = exports.DescribeCoipPoolsRequest || (exports.DescribeCoipPoolsRequest = {}));
var CoipPool;
(function (CoipPool) {
    /**
     * @internal
     */
    CoipPool.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(CoipPool = exports.CoipPool || (exports.CoipPool = {}));
var DescribeCoipPoolsResult;
(function (DescribeCoipPoolsResult) {
    /**
     * @internal
     */
    DescribeCoipPoolsResult.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(DescribeCoipPoolsResult = exports.DescribeCoipPoolsResult || (exports.DescribeCoipPoolsResult = {}));
var DescribeConversionTasksRequest;
(function (DescribeConversionTasksRequest) {
    /**
     * @internal
     */
    DescribeConversionTasksRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(DescribeConversionTasksRequest = exports.DescribeConversionTasksRequest || (exports.DescribeConversionTasksRequest = {}));
var DiskImageDescription;
(function (DiskImageDescription) {
    /**
     * @internal
     */
    DiskImageDescription.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(DiskImageDescription = exports.DiskImageDescription || (exports.DiskImageDescription = {}));
var DiskImageVolumeDescription;
(function (DiskImageVolumeDescription) {
    /**
     * @internal
     */
    DiskImageVolumeDescription.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(DiskImageVolumeDescription = exports.DiskImageVolumeDescription || (exports.DiskImageVolumeDescription = {}));
var ImportInstanceVolumeDetailItem;
(function (ImportInstanceVolumeDetailItem) {
    /**
     * @internal
     */
    ImportInstanceVolumeDetailItem.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(ImportInstanceVolumeDetailItem = exports.ImportInstanceVolumeDetailItem || (exports.ImportInstanceVolumeDetailItem = {}));
var ImportInstanceTaskDetails;
(function (ImportInstanceTaskDetails) {
    /**
     * @internal
     */
    ImportInstanceTaskDetails.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(ImportInstanceTaskDetails = exports.ImportInstanceTaskDetails || (exports.ImportInstanceTaskDetails = {}));
var ImportVolumeTaskDetails;
(function (ImportVolumeTaskDetails) {
    /**
     * @internal
     */
    ImportVolumeTaskDetails.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(ImportVolumeTaskDetails = exports.ImportVolumeTaskDetails || (exports.ImportVolumeTaskDetails = {}));
var ConversionTask;
(function (ConversionTask) {
    /**
     * @internal
     */
    ConversionTask.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(ConversionTask = exports.ConversionTask || (exports.ConversionTask = {}));
var DescribeConversionTasksResult;
(function (DescribeConversionTasksResult) {
    /**
     * @internal
     */
    DescribeConversionTasksResult.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(DescribeConversionTasksResult = exports.DescribeConversionTasksResult || (exports.DescribeConversionTasksResult = {}));
var DescribeCustomerGatewaysRequest;
(function (DescribeCustomerGatewaysRequest) {
    /**
     * @internal
     */
    DescribeCustomerGatewaysRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(DescribeCustomerGatewaysRequest = exports.DescribeCustomerGatewaysRequest || (exports.DescribeCustomerGatewaysRequest = {}));
var DescribeCustomerGatewaysResult;
(function (DescribeCustomerGatewaysResult) {
    /**
     * @internal
     */
    DescribeCustomerGatewaysResult.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(DescribeCustomerGatewaysResult = exports.DescribeCustomerGatewaysResult || (exports.DescribeCustomerGatewaysResult = {}));
var DescribeDhcpOptionsRequest;
(function (DescribeDhcpOptionsRequest) {
    /**
     * @internal
     */
    DescribeDhcpOptionsRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(DescribeDhcpOptionsRequest = exports.DescribeDhcpOptionsRequest || (exports.DescribeDhcpOptionsRequest = {}));
var DescribeDhcpOptionsResult;
(function (DescribeDhcpOptionsResult) {
    /**
     * @internal
     */
    DescribeDhcpOptionsResult.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(DescribeDhcpOptionsResult = exports.DescribeDhcpOptionsResult || (exports.DescribeDhcpOptionsResult = {}));
var DescribeEgressOnlyInternetGatewaysRequest;
(function (DescribeEgressOnlyInternetGatewaysRequest) {
    /**
     * @internal
     */
    DescribeEgressOnlyInternetGatewaysRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(DescribeEgressOnlyInternetGatewaysRequest = exports.DescribeEgressOnlyInternetGatewaysRequest || (exports.DescribeEgressOnlyInternetGatewaysRequest = {}));
var DescribeEgressOnlyInternetGatewaysResult;
(function (DescribeEgressOnlyInternetGatewaysResult) {
    /**
     * @internal
     */
    DescribeEgressOnlyInternetGatewaysResult.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(DescribeEgressOnlyInternetGatewaysResult = exports.DescribeEgressOnlyInternetGatewaysResult || (exports.DescribeEgressOnlyInternetGatewaysResult = {}));
var DescribeElasticGpusRequest;
(function (DescribeElasticGpusRequest) {
    /**
     * @internal
     */
    DescribeElasticGpusRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(DescribeElasticGpusRequest = exports.DescribeElasticGpusRequest || (exports.DescribeElasticGpusRequest = {}));
var ElasticGpuStatus;
(function (ElasticGpuStatus) {
    ElasticGpuStatus["Impaired"] = "IMPAIRED";
    ElasticGpuStatus["Ok"] = "OK";
})(ElasticGpuStatus = exports.ElasticGpuStatus || (exports.ElasticGpuStatus = {}));
var ElasticGpuHealth;
(function (ElasticGpuHealth) {
    /**
     * @internal
     */
    ElasticGpuHealth.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(ElasticGpuHealth = exports.ElasticGpuHealth || (exports.ElasticGpuHealth = {}));
var ElasticGpuState;
(function (ElasticGpuState) {
    ElasticGpuState["Attached"] = "ATTACHED";
})(ElasticGpuState = exports.ElasticGpuState || (exports.ElasticGpuState = {}));
var ElasticGpus;
(function (ElasticGpus) {
    /**
     * @internal
     */
    ElasticGpus.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(ElasticGpus = exports.ElasticGpus || (exports.ElasticGpus = {}));
var DescribeElasticGpusResult;
(function (DescribeElasticGpusResult) {
    /**
     * @internal
     */
    DescribeElasticGpusResult.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(DescribeElasticGpusResult = exports.DescribeElasticGpusResult || (exports.DescribeElasticGpusResult = {}));
var DescribeExportImageTasksRequest;
(function (DescribeExportImageTasksRequest) {
    /**
     * @internal
     */
    DescribeExportImageTasksRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(DescribeExportImageTasksRequest = exports.DescribeExportImageTasksRequest || (exports.DescribeExportImageTasksRequest = {}));
var ExportTaskS3Location;
(function (ExportTaskS3Location) {
    /**
     * @internal
     */
    ExportTaskS3Location.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(ExportTaskS3Location = exports.ExportTaskS3Location || (exports.ExportTaskS3Location = {}));
var ExportImageTask;
(function (ExportImageTask) {
    /**
     * @internal
     */
    ExportImageTask.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(ExportImageTask = exports.ExportImageTask || (exports.ExportImageTask = {}));
var DescribeExportImageTasksResult;
(function (DescribeExportImageTasksResult) {
    /**
     * @internal
     */
    DescribeExportImageTasksResult.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(DescribeExportImageTasksResult = exports.DescribeExportImageTasksResult || (exports.DescribeExportImageTasksResult = {}));
var DescribeExportTasksRequest;
(function (DescribeExportTasksRequest) {
    /**
     * @internal
     */
    DescribeExportTasksRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(DescribeExportTasksRequest = exports.DescribeExportTasksRequest || (exports.DescribeExportTasksRequest = {}));
var DescribeExportTasksResult;
(function (DescribeExportTasksResult) {
    /**
     * @internal
     */
    DescribeExportTasksResult.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(DescribeExportTasksResult = exports.DescribeExportTasksResult || (exports.DescribeExportTasksResult = {}));
var DescribeFastSnapshotRestoresRequest;
(function (DescribeFastSnapshotRestoresRequest) {
    /**
     * @internal
     */
    DescribeFastSnapshotRestoresRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(DescribeFastSnapshotRestoresRequest = exports.DescribeFastSnapshotRestoresRequest || (exports.DescribeFastSnapshotRestoresRequest = {}));
var DescribeFastSnapshotRestoreSuccessItem;
(function (DescribeFastSnapshotRestoreSuccessItem) {
    /**
     * @internal
     */
    DescribeFastSnapshotRestoreSuccessItem.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(DescribeFastSnapshotRestoreSuccessItem = exports.DescribeFastSnapshotRestoreSuccessItem || (exports.DescribeFastSnapshotRestoreSuccessItem = {}));
var DescribeFastSnapshotRestoresResult;
(function (DescribeFastSnapshotRestoresResult) {
    /**
     * @internal
     */
    DescribeFastSnapshotRestoresResult.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(DescribeFastSnapshotRestoresResult = exports.DescribeFastSnapshotRestoresResult || (exports.DescribeFastSnapshotRestoresResult = {}));
var FleetEventType;
(function (FleetEventType) {
    FleetEventType["FLEET_CHANGE"] = "fleet-change";
    FleetEventType["INSTANCE_CHANGE"] = "instance-change";
    FleetEventType["SERVICE_ERROR"] = "service-error";
})(FleetEventType = exports.FleetEventType || (exports.FleetEventType = {}));
var DescribeFleetHistoryRequest;
(function (DescribeFleetHistoryRequest) {
    /**
     * @internal
     */
    DescribeFleetHistoryRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(DescribeFleetHistoryRequest = exports.DescribeFleetHistoryRequest || (exports.DescribeFleetHistoryRequest = {}));
var EventInformation;
(function (EventInformation) {
    /**
     * @internal
     */
    EventInformation.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(EventInformation = exports.EventInformation || (exports.EventInformation = {}));
var HistoryRecordEntry;
(function (HistoryRecordEntry) {
    /**
     * @internal
     */
    HistoryRecordEntry.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(HistoryRecordEntry = exports.HistoryRecordEntry || (exports.HistoryRecordEntry = {}));
var DescribeFleetHistoryResult;
(function (DescribeFleetHistoryResult) {
    /**
     * @internal
     */
    DescribeFleetHistoryResult.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(DescribeFleetHistoryResult = exports.DescribeFleetHistoryResult || (exports.DescribeFleetHistoryResult = {}));
var DescribeFleetInstancesRequest;
(function (DescribeFleetInstancesRequest) {
    /**
     * @internal
     */
    DescribeFleetInstancesRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(DescribeFleetInstancesRequest = exports.DescribeFleetInstancesRequest || (exports.DescribeFleetInstancesRequest = {}));
var DescribeFleetInstancesResult;
(function (DescribeFleetInstancesResult) {
    /**
     * @internal
     */
    DescribeFleetInstancesResult.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(DescribeFleetInstancesResult = exports.DescribeFleetInstancesResult || (exports.DescribeFleetInstancesResult = {}));
var DescribeFleetsRequest;
(function (DescribeFleetsRequest) {
    /**
     * @internal
     */
    DescribeFleetsRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(DescribeFleetsRequest = exports.DescribeFleetsRequest || (exports.DescribeFleetsRequest = {}));
var FleetActivityStatus;
(function (FleetActivityStatus) {
    FleetActivityStatus["ERROR"] = "error";
    FleetActivityStatus["FULFILLED"] = "fulfilled";
    FleetActivityStatus["PENDING_FULFILLMENT"] = "pending_fulfillment";
    FleetActivityStatus["PENDING_TERMINATION"] = "pending_termination";
})(FleetActivityStatus = exports.FleetActivityStatus || (exports.FleetActivityStatus = {}));
var DescribeFleetError;
(function (DescribeFleetError) {
    /**
     * @internal
     */
    DescribeFleetError.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(DescribeFleetError = exports.DescribeFleetError || (exports.DescribeFleetError = {}));
var DescribeFleetsInstances;
(function (DescribeFleetsInstances) {
    /**
     * @internal
     */
    DescribeFleetsInstances.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(DescribeFleetsInstances = exports.DescribeFleetsInstances || (exports.DescribeFleetsInstances = {}));
var FleetLaunchTemplateConfig;
(function (FleetLaunchTemplateConfig) {
    /**
     * @internal
     */
    FleetLaunchTemplateConfig.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(FleetLaunchTemplateConfig = exports.FleetLaunchTemplateConfig || (exports.FleetLaunchTemplateConfig = {}));
var CapacityReservationOptions;
(function (CapacityReservationOptions) {
    /**
     * @internal
     */
    CapacityReservationOptions.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(CapacityReservationOptions = exports.CapacityReservationOptions || (exports.CapacityReservationOptions = {}));
var OnDemandOptions;
(function (OnDemandOptions) {
    /**
     * @internal
     */
    OnDemandOptions.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(OnDemandOptions = exports.OnDemandOptions || (exports.OnDemandOptions = {}));
var FleetSpotCapacityRebalance;
(function (FleetSpotCapacityRebalance) {
    /**
     * @internal
     */
    FleetSpotCapacityRebalance.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(FleetSpotCapacityRebalance = exports.FleetSpotCapacityRebalance || (exports.FleetSpotCapacityRebalance = {}));
var FleetSpotMaintenanceStrategies;
(function (FleetSpotMaintenanceStrategies) {
    /**
     * @internal
     */
    FleetSpotMaintenanceStrategies.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(FleetSpotMaintenanceStrategies = exports.FleetSpotMaintenanceStrategies || (exports.FleetSpotMaintenanceStrategies = {}));
var SpotOptions;
(function (SpotOptions) {
    /**
     * @internal
     */
    SpotOptions.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(SpotOptions = exports.SpotOptions || (exports.SpotOptions = {}));
var TargetCapacitySpecification;
(function (TargetCapacitySpecification) {
    /**
     * @internal
     */
    TargetCapacitySpecification.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(TargetCapacitySpecification = exports.TargetCapacitySpecification || (exports.TargetCapacitySpecification = {}));
var FleetData;
(function (FleetData) {
    /**
     * @internal
     */
    FleetData.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(FleetData = exports.FleetData || (exports.FleetData = {}));
var DescribeFleetsResult;
(function (DescribeFleetsResult) {
    /**
     * @internal
     */
    DescribeFleetsResult.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(DescribeFleetsResult = exports.DescribeFleetsResult || (exports.DescribeFleetsResult = {}));
var DescribeFlowLogsRequest;
(function (DescribeFlowLogsRequest) {
    /**
     * @internal
     */
    DescribeFlowLogsRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(DescribeFlowLogsRequest = exports.DescribeFlowLogsRequest || (exports.DescribeFlowLogsRequest = {}));
var FlowLog;
(function (FlowLog) {
    /**
     * @internal
     */
    FlowLog.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(FlowLog = exports.FlowLog || (exports.FlowLog = {}));
var DescribeFlowLogsResult;
(function (DescribeFlowLogsResult) {
    /**
     * @internal
     */
    DescribeFlowLogsResult.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(DescribeFlowLogsResult = exports.DescribeFlowLogsResult || (exports.DescribeFlowLogsResult = {}));
var DescribeFpgaImageAttributeRequest;
(function (DescribeFpgaImageAttributeRequest) {
    /**
     * @internal
     */
    DescribeFpgaImageAttributeRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(DescribeFpgaImageAttributeRequest = exports.DescribeFpgaImageAttributeRequest || (exports.DescribeFpgaImageAttributeRequest = {}));
var LoadPermission;
(function (LoadPermission) {
    /**
     * @internal
     */
    LoadPermission.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(LoadPermission = exports.LoadPermission || (exports.LoadPermission = {}));
var ProductCode;
(function (ProductCode) {
    /**
     * @internal
     */
    ProductCode.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(ProductCode = exports.ProductCode || (exports.ProductCode = {}));
var FpgaImageAttribute;
(function (FpgaImageAttribute) {
    /**
     * @internal
     */
    FpgaImageAttribute.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(FpgaImageAttribute = exports.FpgaImageAttribute || (exports.FpgaImageAttribute = {}));
var DescribeFpgaImageAttributeResult;
(function (DescribeFpgaImageAttributeResult) {
    /**
     * @internal
     */
    DescribeFpgaImageAttributeResult.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(DescribeFpgaImageAttributeResult = exports.DescribeFpgaImageAttributeResult || (exports.DescribeFpgaImageAttributeResult = {}));
var DescribeFpgaImagesRequest;
(function (DescribeFpgaImagesRequest) {
    /**
     * @internal
     */
    DescribeFpgaImagesRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(DescribeFpgaImagesRequest = exports.DescribeFpgaImagesRequest || (exports.DescribeFpgaImagesRequest = {}));
var PciId;
(function (PciId) {
    /**
     * @internal
     */
    PciId.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(PciId = exports.PciId || (exports.PciId = {}));
var FpgaImageState;
(function (FpgaImageState) {
    /**
     * @internal
     */
    FpgaImageState.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(FpgaImageState = exports.FpgaImageState || (exports.FpgaImageState = {}));
var FpgaImage;
(function (FpgaImage) {
    /**
     * @internal
     */
    FpgaImage.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(FpgaImage = exports.FpgaImage || (exports.FpgaImage = {}));
var DescribeFpgaImagesResult;
(function (DescribeFpgaImagesResult) {
    /**
     * @internal
     */
    DescribeFpgaImagesResult.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(DescribeFpgaImagesResult = exports.DescribeFpgaImagesResult || (exports.DescribeFpgaImagesResult = {}));
var DescribeHostReservationOfferingsRequest;
(function (DescribeHostReservationOfferingsRequest) {
    /**
     * @internal
     */
    DescribeHostReservationOfferingsRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(DescribeHostReservationOfferingsRequest = exports.DescribeHostReservationOfferingsRequest || (exports.DescribeHostReservationOfferingsRequest = {}));
var PaymentOption;
(function (PaymentOption) {
    PaymentOption["ALL_UPFRONT"] = "AllUpfront";
    PaymentOption["NO_UPFRONT"] = "NoUpfront";
    PaymentOption["PARTIAL_UPFRONT"] = "PartialUpfront";
})(PaymentOption = exports.PaymentOption || (exports.PaymentOption = {}));
var HostOffering;
(function (HostOffering) {
    /**
     * @internal
     */
    HostOffering.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(HostOffering = exports.HostOffering || (exports.HostOffering = {}));
var DescribeHostReservationOfferingsResult;
(function (DescribeHostReservationOfferingsResult) {
    /**
     * @internal
     */
    DescribeHostReservationOfferingsResult.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(DescribeHostReservationOfferingsResult = exports.DescribeHostReservationOfferingsResult || (exports.DescribeHostReservationOfferingsResult = {}));
var DescribeHostReservationsRequest;
(function (DescribeHostReservationsRequest) {
    /**
     * @internal
     */
    DescribeHostReservationsRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(DescribeHostReservationsRequest = exports.DescribeHostReservationsRequest || (exports.DescribeHostReservationsRequest = {}));
var ReservationState;
(function (ReservationState) {
    ReservationState["ACTIVE"] = "active";
    ReservationState["PAYMENT_FAILED"] = "payment-failed";
    ReservationState["PAYMENT_PENDING"] = "payment-pending";
    ReservationState["RETIRED"] = "retired";
})(ReservationState = exports.ReservationState || (exports.ReservationState = {}));
var HostReservation;
(function (HostReservation) {
    /**
     * @internal
     */
    HostReservation.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(HostReservation = exports.HostReservation || (exports.HostReservation = {}));
var DescribeHostReservationsResult;
(function (DescribeHostReservationsResult) {
    /**
     * @internal
     */
    DescribeHostReservationsResult.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(DescribeHostReservationsResult = exports.DescribeHostReservationsResult || (exports.DescribeHostReservationsResult = {}));
var DescribeHostsRequest;
(function (DescribeHostsRequest) {
    /**
     * @internal
     */
    DescribeHostsRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(DescribeHostsRequest = exports.DescribeHostsRequest || (exports.DescribeHostsRequest = {}));
var InstanceCapacity;
(function (InstanceCapacity) {
    /**
     * @internal
     */
    InstanceCapacity.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(InstanceCapacity = exports.InstanceCapacity || (exports.InstanceCapacity = {}));
var AvailableCapacity;
(function (AvailableCapacity) {
    /**
     * @internal
     */
    AvailableCapacity.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(AvailableCapacity = exports.AvailableCapacity || (exports.AvailableCapacity = {}));
var HostProperties;
(function (HostProperties) {
    /**
     * @internal
     */
    HostProperties.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(HostProperties = exports.HostProperties || (exports.HostProperties = {}));
var HostInstance;
(function (HostInstance) {
    /**
     * @internal
     */
    HostInstance.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(HostInstance = exports.HostInstance || (exports.HostInstance = {}));
var Host;
(function (Host) {
    /**
     * @internal
     */
    Host.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(Host = exports.Host || (exports.Host = {}));
var DescribeHostsResult;
(function (DescribeHostsResult) {
    /**
     * @internal
     */
    DescribeHostsResult.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(DescribeHostsResult = exports.DescribeHostsResult || (exports.DescribeHostsResult = {}));
var DescribeIamInstanceProfileAssociationsRequest;
(function (DescribeIamInstanceProfileAssociationsRequest) {
    /**
     * @internal
     */
    DescribeIamInstanceProfileAssociationsRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(DescribeIamInstanceProfileAssociationsRequest = exports.DescribeIamInstanceProfileAssociationsRequest || (exports.DescribeIamInstanceProfileAssociationsRequest = {}));
var DescribeIamInstanceProfileAssociationsResult;
(function (DescribeIamInstanceProfileAssociationsResult) {
    /**
     * @internal
     */
    DescribeIamInstanceProfileAssociationsResult.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(DescribeIamInstanceProfileAssociationsResult = exports.DescribeIamInstanceProfileAssociationsResult || (exports.DescribeIamInstanceProfileAssociationsResult = {}));
var DescribeIdentityIdFormatRequest;
(function (DescribeIdentityIdFormatRequest) {
    /**
     * @internal
     */
    DescribeIdentityIdFormatRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(DescribeIdentityIdFormatRequest = exports.DescribeIdentityIdFormatRequest || (exports.DescribeIdentityIdFormatRequest = {}));
var DescribeIdentityIdFormatResult;
(function (DescribeIdentityIdFormatResult) {
    /**
     * @internal
     */
    DescribeIdentityIdFormatResult.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(DescribeIdentityIdFormatResult = exports.DescribeIdentityIdFormatResult || (exports.DescribeIdentityIdFormatResult = {}));
var DescribeIdFormatRequest;
(function (DescribeIdFormatRequest) {
    /**
     * @internal
     */
    DescribeIdFormatRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(DescribeIdFormatRequest = exports.DescribeIdFormatRequest || (exports.DescribeIdFormatRequest = {}));
var DescribeIdFormatResult;
(function (DescribeIdFormatResult) {
    /**
     * @internal
     */
    DescribeIdFormatResult.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(DescribeIdFormatResult = exports.DescribeIdFormatResult || (exports.DescribeIdFormatResult = {}));
var DescribeImageAttributeRequest;
(function (DescribeImageAttributeRequest) {
    /**
     * @internal
     */
    DescribeImageAttributeRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(DescribeImageAttributeRequest = exports.DescribeImageAttributeRequest || (exports.DescribeImageAttributeRequest = {}));
var LaunchPermission;
(function (LaunchPermission) {
    /**
     * @internal
     */
    LaunchPermission.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(LaunchPermission = exports.LaunchPermission || (exports.LaunchPermission = {}));
var ImageAttribute;
(function (ImageAttribute) {
    /**
     * @internal
     */
    ImageAttribute.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(ImageAttribute = exports.ImageAttribute || (exports.ImageAttribute = {}));
var DescribeImagesRequest;
(function (DescribeImagesRequest) {
    /**
     * @internal
     */
    DescribeImagesRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(DescribeImagesRequest = exports.DescribeImagesRequest || (exports.DescribeImagesRequest = {}));
var StateReason;
(function (StateReason) {
    /**
     * @internal
     */
    StateReason.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(StateReason = exports.StateReason || (exports.StateReason = {}));
var Image;
(function (Image) {
    /**
     * @internal
     */
    Image.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(Image = exports.Image || (exports.Image = {}));
var DescribeImagesResult;
(function (DescribeImagesResult) {
    /**
     * @internal
     */
    DescribeImagesResult.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(DescribeImagesResult = exports.DescribeImagesResult || (exports.DescribeImagesResult = {}));
var DescribeImportImageTasksRequest;
(function (DescribeImportImageTasksRequest) {
    /**
     * @internal
     */
    DescribeImportImageTasksRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(DescribeImportImageTasksRequest = exports.DescribeImportImageTasksRequest || (exports.DescribeImportImageTasksRequest = {}));
var ImportImageLicenseConfigurationResponse;
(function (ImportImageLicenseConfigurationResponse) {
    /**
     * @internal
     */
    ImportImageLicenseConfigurationResponse.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(ImportImageLicenseConfigurationResponse = exports.ImportImageLicenseConfigurationResponse || (exports.ImportImageLicenseConfigurationResponse = {}));
var UserBucketDetails;
(function (UserBucketDetails) {
    /**
     * @internal
     */
    UserBucketDetails.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(UserBucketDetails = exports.UserBucketDetails || (exports.UserBucketDetails = {}));
var SnapshotDetail;
(function (SnapshotDetail) {
    /**
     * @internal
     */
    SnapshotDetail.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(SnapshotDetail = exports.SnapshotDetail || (exports.SnapshotDetail = {}));
var ImportImageTask;
(function (ImportImageTask) {
    /**
     * @internal
     */
    ImportImageTask.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(ImportImageTask = exports.ImportImageTask || (exports.ImportImageTask = {}));
var DescribeImportImageTasksResult;
(function (DescribeImportImageTasksResult) {
    /**
     * @internal
     */
    DescribeImportImageTasksResult.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(DescribeImportImageTasksResult = exports.DescribeImportImageTasksResult || (exports.DescribeImportImageTasksResult = {}));
var DescribeImportSnapshotTasksRequest;
(function (DescribeImportSnapshotTasksRequest) {
    /**
     * @internal
     */
    DescribeImportSnapshotTasksRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(DescribeImportSnapshotTasksRequest = exports.DescribeImportSnapshotTasksRequest || (exports.DescribeImportSnapshotTasksRequest = {}));
var SnapshotTaskDetail;
(function (SnapshotTaskDetail) {
    /**
     * @internal
     */
    SnapshotTaskDetail.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(SnapshotTaskDetail = exports.SnapshotTaskDetail || (exports.SnapshotTaskDetail = {}));
var ImportSnapshotTask;
(function (ImportSnapshotTask) {
    /**
     * @internal
     */
    ImportSnapshotTask.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(ImportSnapshotTask = exports.ImportSnapshotTask || (exports.ImportSnapshotTask = {}));
var DescribeImportSnapshotTasksResult;
(function (DescribeImportSnapshotTasksResult) {
    /**
     * @internal
     */
    DescribeImportSnapshotTasksResult.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(DescribeImportSnapshotTasksResult = exports.DescribeImportSnapshotTasksResult || (exports.DescribeImportSnapshotTasksResult = {}));
var DescribeInstanceAttributeRequest;
(function (DescribeInstanceAttributeRequest) {
    /**
     * @internal
     */
    DescribeInstanceAttributeRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(DescribeInstanceAttributeRequest = exports.DescribeInstanceAttributeRequest || (exports.DescribeInstanceAttributeRequest = {}));
var EbsInstanceBlockDevice;
(function (EbsInstanceBlockDevice) {
    /**
     * @internal
     */
    EbsInstanceBlockDevice.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(EbsInstanceBlockDevice = exports.EbsInstanceBlockDevice || (exports.EbsInstanceBlockDevice = {}));
var InstanceBlockDeviceMapping;
(function (InstanceBlockDeviceMapping) {
    /**
     * @internal
     */
    InstanceBlockDeviceMapping.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(InstanceBlockDeviceMapping = exports.InstanceBlockDeviceMapping || (exports.InstanceBlockDeviceMapping = {}));
var AttributeBooleanValue;
(function (AttributeBooleanValue) {
    /**
     * @internal
     */
    AttributeBooleanValue.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(AttributeBooleanValue = exports.AttributeBooleanValue || (exports.AttributeBooleanValue = {}));
var EnclaveOptions;
(function (EnclaveOptions) {
    /**
     * @internal
     */
    EnclaveOptions.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(EnclaveOptions = exports.EnclaveOptions || (exports.EnclaveOptions = {}));
var InstanceAttribute;
(function (InstanceAttribute) {
    /**
     * @internal
     */
    InstanceAttribute.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(InstanceAttribute = exports.InstanceAttribute || (exports.InstanceAttribute = {}));
var DescribeInstanceCreditSpecificationsRequest;
(function (DescribeInstanceCreditSpecificationsRequest) {
    /**
     * @internal
     */
    DescribeInstanceCreditSpecificationsRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(DescribeInstanceCreditSpecificationsRequest = exports.DescribeInstanceCreditSpecificationsRequest || (exports.DescribeInstanceCreditSpecificationsRequest = {}));
var InstanceCreditSpecification;
(function (InstanceCreditSpecification) {
    /**
     * @internal
     */
    InstanceCreditSpecification.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(InstanceCreditSpecification = exports.InstanceCreditSpecification || (exports.InstanceCreditSpecification = {}));
var DescribeInstanceCreditSpecificationsResult;
(function (DescribeInstanceCreditSpecificationsResult) {
    /**
     * @internal
     */
    DescribeInstanceCreditSpecificationsResult.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(DescribeInstanceCreditSpecificationsResult = exports.DescribeInstanceCreditSpecificationsResult || (exports.DescribeInstanceCreditSpecificationsResult = {}));
var DescribeInstanceEventNotificationAttributesRequest;
(function (DescribeInstanceEventNotificationAttributesRequest) {
    /**
     * @internal
     */
    DescribeInstanceEventNotificationAttributesRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(DescribeInstanceEventNotificationAttributesRequest = exports.DescribeInstanceEventNotificationAttributesRequest || (exports.DescribeInstanceEventNotificationAttributesRequest = {}));
var DescribeInstanceEventNotificationAttributesResult;
(function (DescribeInstanceEventNotificationAttributesResult) {
    /**
     * @internal
     */
    DescribeInstanceEventNotificationAttributesResult.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(DescribeInstanceEventNotificationAttributesResult = exports.DescribeInstanceEventNotificationAttributesResult || (exports.DescribeInstanceEventNotificationAttributesResult = {}));
var DescribeInstancesRequest;
(function (DescribeInstancesRequest) {
    /**
     * @internal
     */
    DescribeInstancesRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(DescribeInstancesRequest = exports.DescribeInstancesRequest || (exports.DescribeInstancesRequest = {}));
var CapacityReservationSpecificationResponse;
(function (CapacityReservationSpecificationResponse) {
    /**
     * @internal
     */
    CapacityReservationSpecificationResponse.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(CapacityReservationSpecificationResponse = exports.CapacityReservationSpecificationResponse || (exports.CapacityReservationSpecificationResponse = {}));
var CpuOptions;
(function (CpuOptions) {
    /**
     * @internal
     */
    CpuOptions.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(CpuOptions = exports.CpuOptions || (exports.CpuOptions = {}));
var ElasticGpuAssociation;
(function (ElasticGpuAssociation) {
    /**
     * @internal
     */
    ElasticGpuAssociation.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(ElasticGpuAssociation = exports.ElasticGpuAssociation || (exports.ElasticGpuAssociation = {}));
var ElasticInferenceAcceleratorAssociation;
(function (ElasticInferenceAcceleratorAssociation) {
    /**
     * @internal
     */
    ElasticInferenceAcceleratorAssociation.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(ElasticInferenceAcceleratorAssociation = exports.ElasticInferenceAcceleratorAssociation || (exports.ElasticInferenceAcceleratorAssociation = {}));
var HibernationOptions;
(function (HibernationOptions) {
    /**
     * @internal
     */
    HibernationOptions.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(HibernationOptions = exports.HibernationOptions || (exports.HibernationOptions = {}));
var LicenseConfiguration;
(function (LicenseConfiguration) {
    /**
     * @internal
     */
    LicenseConfiguration.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(LicenseConfiguration = exports.LicenseConfiguration || (exports.LicenseConfiguration = {}));
var HttpTokensState;
(function (HttpTokensState) {
    HttpTokensState["optional"] = "optional";
    HttpTokensState["required"] = "required";
})(HttpTokensState = exports.HttpTokensState || (exports.HttpTokensState = {}));
var InstanceMetadataOptionsResponse;
(function (InstanceMetadataOptionsResponse) {
    /**
     * @internal
     */
    InstanceMetadataOptionsResponse.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(InstanceMetadataOptionsResponse = exports.InstanceMetadataOptionsResponse || (exports.InstanceMetadataOptionsResponse = {}));
var Monitoring;
(function (Monitoring) {
    /**
     * @internal
     */
    Monitoring.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(Monitoring = exports.Monitoring || (exports.Monitoring = {}));
var InstanceNetworkInterfaceAssociation;
(function (InstanceNetworkInterfaceAssociation) {
    /**
     * @internal
     */
    InstanceNetworkInterfaceAssociation.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(InstanceNetworkInterfaceAssociation = exports.InstanceNetworkInterfaceAssociation || (exports.InstanceNetworkInterfaceAssociation = {}));
var InstanceNetworkInterfaceAttachment;
(function (InstanceNetworkInterfaceAttachment) {
    /**
     * @internal
     */
    InstanceNetworkInterfaceAttachment.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(InstanceNetworkInterfaceAttachment = exports.InstanceNetworkInterfaceAttachment || (exports.InstanceNetworkInterfaceAttachment = {}));
var InstancePrivateIpAddress;
(function (InstancePrivateIpAddress) {
    /**
     * @internal
     */
    InstancePrivateIpAddress.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(InstancePrivateIpAddress = exports.InstancePrivateIpAddress || (exports.InstancePrivateIpAddress = {}));
var InstanceNetworkInterface;
(function (InstanceNetworkInterface) {
    /**
     * @internal
     */
    InstanceNetworkInterface.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(InstanceNetworkInterface = exports.InstanceNetworkInterface || (exports.InstanceNetworkInterface = {}));
var InstanceState;
(function (InstanceState) {
    /**
     * @internal
     */
    InstanceState.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(InstanceState = exports.InstanceState || (exports.InstanceState = {}));
var Instance;
(function (Instance) {
    /**
     * @internal
     */
    Instance.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(Instance = exports.Instance || (exports.Instance = {}));
var Reservation;
(function (Reservation) {
    /**
     * @internal
     */
    Reservation.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(Reservation = exports.Reservation || (exports.Reservation = {}));
var DescribeInstancesResult;
(function (DescribeInstancesResult) {
    /**
     * @internal
     */
    DescribeInstancesResult.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(DescribeInstancesResult = exports.DescribeInstancesResult || (exports.DescribeInstancesResult = {}));
var DescribeInstanceStatusRequest;
(function (DescribeInstanceStatusRequest) {
    /**
     * @internal
     */
    DescribeInstanceStatusRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(DescribeInstanceStatusRequest = exports.DescribeInstanceStatusRequest || (exports.DescribeInstanceStatusRequest = {}));
var InstanceStatusEvent;
(function (InstanceStatusEvent) {
    /**
     * @internal
     */
    InstanceStatusEvent.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(InstanceStatusEvent = exports.InstanceStatusEvent || (exports.InstanceStatusEvent = {}));
var InstanceStatusDetails;
(function (InstanceStatusDetails) {
    /**
     * @internal
     */
    InstanceStatusDetails.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(InstanceStatusDetails = exports.InstanceStatusDetails || (exports.InstanceStatusDetails = {}));
var InstanceStatusSummary;
(function (InstanceStatusSummary) {
    /**
     * @internal
     */
    InstanceStatusSummary.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(InstanceStatusSummary = exports.InstanceStatusSummary || (exports.InstanceStatusSummary = {}));
var InstanceStatus;
(function (InstanceStatus) {
    /**
     * @internal
     */
    InstanceStatus.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(InstanceStatus = exports.InstanceStatus || (exports.InstanceStatus = {}));
var DescribeInstanceStatusResult;
(function (DescribeInstanceStatusResult) {
    /**
     * @internal
     */
    DescribeInstanceStatusResult.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(DescribeInstanceStatusResult = exports.DescribeInstanceStatusResult || (exports.DescribeInstanceStatusResult = {}));
var DescribeInstanceTypeOfferingsRequest;
(function (DescribeInstanceTypeOfferingsRequest) {
    /**
     * @internal
     */
    DescribeInstanceTypeOfferingsRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(DescribeInstanceTypeOfferingsRequest = exports.DescribeInstanceTypeOfferingsRequest || (exports.DescribeInstanceTypeOfferingsRequest = {}));
//# sourceMappingURL=models_2.js.map