"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ExportClientVpnClientConfigurationResult = exports.ExportClientVpnClientConfigurationRequest = exports.ExportClientVpnClientCertificateRevocationListResult = exports.ClientCertificateRevocationListStatus = exports.ExportClientVpnClientCertificateRevocationListRequest = exports.EnableVpcClassicLinkDnsSupportResult = exports.EnableVpcClassicLinkDnsSupportRequest = exports.EnableVpcClassicLinkResult = exports.EnableVpcClassicLinkRequest = exports.EnableVolumeIORequest = exports.EnableVgwRoutePropagationRequest = exports.EnableTransitGatewayRouteTablePropagationResult = exports.EnableTransitGatewayRouteTablePropagationRequest = exports.EnableSerialConsoleAccessResult = exports.EnableSerialConsoleAccessRequest = exports.EnableFastSnapshotRestoresResult = exports.EnableFastSnapshotRestoreErrorItem = exports.EnableFastSnapshotRestoreStateErrorItem = exports.EnableFastSnapshotRestoreStateError = exports.EnableFastSnapshotRestoreSuccessItem = exports.EnableFastSnapshotRestoresRequest = exports.EnableEbsEncryptionByDefaultResult = exports.EnableEbsEncryptionByDefaultRequest = exports.DisassociateVpcCidrBlockResult = exports.DisassociateVpcCidrBlockRequest = exports.DisassociateTransitGatewayRouteTableResult = exports.DisassociateTransitGatewayRouteTableRequest = exports.DisassociateTransitGatewayMulticastDomainResult = exports.DisassociateTransitGatewayMulticastDomainRequest = exports.DisassociateSubnetCidrBlockResult = exports.DisassociateSubnetCidrBlockRequest = exports.DisassociateRouteTableRequest = exports.DisassociateIamInstanceProfileResult = exports.DisassociateIamInstanceProfileRequest = exports.DisassociateEnclaveCertificateIamRoleResult = exports.DisassociateEnclaveCertificateIamRoleRequest = exports.DisassociateClientVpnTargetNetworkResult = exports.DisassociateClientVpnTargetNetworkRequest = exports.DisassociateAddressRequest = exports.DisableVpcClassicLinkDnsSupportResult = exports.DisableVpcClassicLinkDnsSupportRequest = exports.DisableVpcClassicLinkResult = exports.DisableVpcClassicLinkRequest = exports.DisableVgwRoutePropagationRequest = exports.DisableTransitGatewayRouteTablePropagationResult = exports.TransitGatewayPropagation = exports.DisableTransitGatewayRouteTablePropagationRequest = exports.DisableSerialConsoleAccessResult = exports.DisableSerialConsoleAccessRequest = exports.DisableFastSnapshotRestoresResult = void 0;
exports.GetReservedInstancesExchangeQuoteRequest = exports.GetPasswordDataResult = exports.GetPasswordDataRequest = exports.GetManagedPrefixListEntriesResult = exports.PrefixListEntry = exports.GetManagedPrefixListEntriesRequest = exports.GetManagedPrefixListAssociationsResult = exports.PrefixListAssociation = exports.GetManagedPrefixListAssociationsRequest = exports.GetLaunchTemplateDataResult = exports.GetLaunchTemplateDataRequest = exports.GetHostReservationPurchasePreviewResult = exports.Purchase = exports.GetHostReservationPurchasePreviewRequest = exports.GetGroupsForCapacityReservationResult = exports.CapacityReservationGroup = exports.GetGroupsForCapacityReservationRequest = exports.GetFlowLogsIntegrationTemplateResult = exports.GetFlowLogsIntegrationTemplateRequest = exports.IntegrateServices = exports.AthenaIntegration = exports.PartitionLoadFrequency = exports.GetEbsEncryptionByDefaultResult = exports.GetEbsEncryptionByDefaultRequest = exports.GetEbsDefaultKmsKeyIdResult = exports.GetEbsDefaultKmsKeyIdRequest = exports.GetDefaultCreditSpecificationResult = exports.InstanceFamilyCreditSpecification = exports.GetDefaultCreditSpecificationRequest = exports.GetConsoleScreenshotResult = exports.GetConsoleScreenshotRequest = exports.GetConsoleOutputResult = exports.GetConsoleOutputRequest = exports.GetCoipPoolUsageResult = exports.CoipAddressUsage = exports.GetCoipPoolUsageRequest = exports.GetCapacityReservationUsageResult = exports.InstanceUsage = exports.GetCapacityReservationUsageRequest = exports.GetAssociatedIpv6PoolCidrsResult = exports.Ipv6CidrAssociation = exports.GetAssociatedIpv6PoolCidrsRequest = exports.GetAssociatedEnclaveCertificateIamRolesResult = exports.AssociatedRole = exports.GetAssociatedEnclaveCertificateIamRolesRequest = exports.ExportTransitGatewayRoutesResult = exports.ExportTransitGatewayRoutesRequest = exports.ExportImageResult = exports.ExportImageRequest = exports.ExportTaskS3LocationRequest = void 0;
exports.DnsServersOptionsModifyStructure = exports.ModifyCapacityReservationResult = exports.ModifyCapacityReservationRequest = exports.ModifyAvailabilityZoneGroupResult = exports.ModifyAvailabilityZoneGroupRequest = exports.ModifyAddressAttributeResult = exports.ModifyAddressAttributeRequest = exports.ImportVolumeResult = exports.ImportVolumeRequest = exports.ImportSnapshotResult = exports.ImportSnapshotRequest = exports.SnapshotDiskContainer = exports.ImportKeyPairResult = exports.ImportKeyPairRequest = exports.ImportInstanceResult = exports.ImportInstanceRequest = exports.ImportInstanceLaunchSpecification = exports.UserData = exports.DiskImage = exports.VolumeDetail = exports.DiskImageDetail = exports.ImportImageResult = exports.ImportImageRequest = exports.ImportImageLicenseConfigurationRequest = exports.ImageDiskContainer = exports.UserBucket = exports.ClientData = exports.ImportClientVpnClientCertificateRevocationListResult = exports.ImportClientVpnClientCertificateRevocationListRequest = exports.GetTransitGatewayRouteTablePropagationsResult = exports.TransitGatewayRouteTablePropagation = exports.GetTransitGatewayRouteTablePropagationsRequest = exports.GetTransitGatewayRouteTableAssociationsResult = exports.TransitGatewayRouteTableAssociation = exports.GetTransitGatewayRouteTableAssociationsRequest = exports.GetTransitGatewayPrefixListReferencesResult = exports.GetTransitGatewayPrefixListReferencesRequest = exports.GetTransitGatewayMulticastDomainAssociationsResult = exports.TransitGatewayMulticastDomainAssociation = exports.GetTransitGatewayMulticastDomainAssociationsRequest = exports.GetTransitGatewayAttachmentPropagationsResult = exports.TransitGatewayAttachmentPropagation = exports.GetTransitGatewayAttachmentPropagationsRequest = exports.GetSerialConsoleAccessStatusResult = exports.GetSerialConsoleAccessStatusRequest = exports.GetReservedInstancesExchangeQuoteResult = exports.TargetReservationValue = exports.TargetConfiguration = exports.ReservedInstanceReservationValue = exports.ReservationValue = void 0;
exports.ModifySpotFleetRequestRequest = exports.ModifySnapshotAttributeRequest = exports.CreateVolumePermissionModifications = exports.ModifyReservedInstancesResult = exports.ModifyReservedInstancesRequest = exports.ModifyNetworkInterfaceAttributeRequest = exports.NetworkInterfaceAttachmentChanges = exports.ModifyManagedPrefixListResult = exports.ModifyManagedPrefixListRequest = exports.RemovePrefixListEntry = exports.ModifyLaunchTemplateResult = exports.ModifyLaunchTemplateRequest = exports.ModifyInstancePlacementResult = exports.ModifyInstancePlacementRequest = exports.ModifyInstanceMetadataOptionsResult = exports.ModifyInstanceMetadataOptionsRequest = exports.ModifyInstanceEventStartTimeResult = exports.ModifyInstanceEventStartTimeRequest = exports.ModifyInstanceCreditSpecificationResult = exports.UnsuccessfulInstanceCreditSpecificationItem = exports.UnsuccessfulInstanceCreditSpecificationItemError = exports.UnsuccessfulInstanceCreditSpecificationErrorCode = exports.SuccessfulInstanceCreditSpecificationItem = exports.ModifyInstanceCreditSpecificationRequest = exports.InstanceCreditSpecificationRequest = exports.ModifyInstanceCapacityReservationAttributesResult = exports.ModifyInstanceCapacityReservationAttributesRequest = exports.CapacityReservationSpecification = exports.ModifyInstanceAttributeRequest = exports.BlobAttributeValue = exports.InstanceBlockDeviceMappingSpecification = exports.EbsInstanceBlockDeviceSpecification = exports.ModifyImageAttributeRequest = exports.LaunchPermissionModifications = exports.ModifyIdFormatRequest = exports.ModifyIdentityIdFormatRequest = exports.ModifyHostsResult = exports.ModifyHostsRequest = exports.ModifyFpgaImageAttributeResult = exports.ModifyFpgaImageAttributeRequest = exports.LoadPermissionModifications = exports.LoadPermissionRequest = exports.ModifyFleetResult = exports.ModifyFleetRequest = exports.ModifyEbsDefaultKmsKeyIdResult = exports.ModifyEbsDefaultKmsKeyIdRequest = exports.ModifyDefaultCreditSpecificationResult = exports.ModifyDefaultCreditSpecificationRequest = exports.ModifyClientVpnEndpointResult = exports.ModifyClientVpnEndpointRequest = void 0;
exports.CidrAuthorizationContext = exports.MoveAddressToVpcResult = exports.Status = exports.MoveAddressToVpcRequest = exports.MonitorInstancesResult = exports.InstanceMonitoring = exports.MonitorInstancesRequest = exports.ModifyVpnTunnelOptionsResult = exports.ModifyVpnTunnelOptionsRequest = exports.ModifyVpnTunnelOptionsSpecification = exports.ModifyVpnTunnelCertificateResult = exports.ModifyVpnTunnelCertificateRequest = exports.ModifyVpnConnectionOptionsResult = exports.ModifyVpnConnectionOptionsRequest = exports.ModifyVpnConnectionResult = exports.ModifyVpnConnectionRequest = exports.ModifyVpcTenancyResult = exports.ModifyVpcTenancyRequest = exports.ModifyVpcPeeringConnectionOptionsResult = exports.PeeringConnectionOptions = exports.ModifyVpcPeeringConnectionOptionsRequest = exports.PeeringConnectionOptionsRequest = exports.ModifyVpcEndpointServicePermissionsResult = exports.ModifyVpcEndpointServicePermissionsRequest = exports.ModifyVpcEndpointServiceConfigurationResult = exports.ModifyVpcEndpointServiceConfigurationRequest = exports.ModifyVpcEndpointConnectionNotificationResult = exports.ModifyVpcEndpointConnectionNotificationRequest = exports.ModifyVpcEndpointResult = exports.ModifyVpcEndpointRequest = exports.ModifyVpcAttributeRequest = exports.ModifyVolumeAttributeRequest = exports.ModifyVolumeResult = exports.ModifyVolumeRequest = exports.ModifyTransitGatewayVpcAttachmentResult = exports.ModifyTransitGatewayVpcAttachmentRequest = exports.ModifyTransitGatewayVpcAttachmentRequestOptions = exports.ModifyTransitGatewayPrefixListReferenceResult = exports.ModifyTransitGatewayPrefixListReferenceRequest = exports.ModifyTransitGatewayResult = exports.ModifyTransitGatewayRequest = exports.ModifyTransitGatewayOptions = exports.ModifyTrafficMirrorSessionResult = exports.ModifyTrafficMirrorSessionRequest = exports.ModifyTrafficMirrorFilterRuleResult = exports.ModifyTrafficMirrorFilterRuleRequest = exports.ModifyTrafficMirrorFilterNetworkServicesResult = exports.ModifyTrafficMirrorFilterNetworkServicesRequest = exports.ModifySubnetAttributeRequest = exports.ModifySpotFleetRequestResponse = void 0;
exports.ReplaceRouteRequest = exports.ReplaceNetworkAclEntryRequest = exports.ReplaceNetworkAclAssociationResult = exports.ReplaceNetworkAclAssociationRequest = exports.ReplaceIamInstanceProfileAssociationResult = exports.ReplaceIamInstanceProfileAssociationRequest = exports.ReleaseHostsResult = exports.ReleaseHostsRequest = exports.ReleaseAddressRequest = exports.RejectVpcPeeringConnectionResult = exports.RejectVpcPeeringConnectionRequest = exports.RejectVpcEndpointConnectionsResult = exports.RejectVpcEndpointConnectionsRequest = exports.RejectTransitGatewayVpcAttachmentResult = exports.RejectTransitGatewayVpcAttachmentRequest = exports.RejectTransitGatewayPeeringAttachmentResult = exports.RejectTransitGatewayPeeringAttachmentRequest = exports.RejectTransitGatewayMulticastDomainAssociationsResult = exports.RejectTransitGatewayMulticastDomainAssociationsRequest = exports.RegisterTransitGatewayMulticastGroupSourcesResult = exports.TransitGatewayMulticastRegisteredGroupSources = exports.RegisterTransitGatewayMulticastGroupSourcesRequest = exports.RegisterTransitGatewayMulticastGroupMembersResult = exports.TransitGatewayMulticastRegisteredGroupMembers = exports.RegisterTransitGatewayMulticastGroupMembersRequest = exports.RegisterInstanceEventNotificationAttributesResult = exports.RegisterInstanceEventNotificationAttributesRequest = exports.RegisterInstanceTagAttributeRequest = exports.RegisterImageResult = exports.RegisterImageRequest = exports.RebootInstancesRequest = exports.PurchaseScheduledInstancesResult = exports.PurchaseScheduledInstancesRequest = exports.PurchaseRequest = exports.PurchaseReservedInstancesOfferingResult = exports.PurchaseReservedInstancesOfferingRequest = exports.ReservedInstanceLimitPrice = exports.PurchaseHostReservationResult = exports.PurchaseHostReservationRequest = exports.ProvisionByoipCidrResult = exports.ProvisionByoipCidrRequest = void 0;
const smithy_client_1 = require("@aws-sdk/smithy-client");
var DisableFastSnapshotRestoresResult;
(function (DisableFastSnapshotRestoresResult) {
    /**
     * @internal
     */
    DisableFastSnapshotRestoresResult.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(DisableFastSnapshotRestoresResult = exports.DisableFastSnapshotRestoresResult || (exports.DisableFastSnapshotRestoresResult = {}));
var DisableSerialConsoleAccessRequest;
(function (DisableSerialConsoleAccessRequest) {
    /**
     * @internal
     */
    DisableSerialConsoleAccessRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(DisableSerialConsoleAccessRequest = exports.DisableSerialConsoleAccessRequest || (exports.DisableSerialConsoleAccessRequest = {}));
var DisableSerialConsoleAccessResult;
(function (DisableSerialConsoleAccessResult) {
    /**
     * @internal
     */
    DisableSerialConsoleAccessResult.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(DisableSerialConsoleAccessResult = exports.DisableSerialConsoleAccessResult || (exports.DisableSerialConsoleAccessResult = {}));
var DisableTransitGatewayRouteTablePropagationRequest;
(function (DisableTransitGatewayRouteTablePropagationRequest) {
    /**
     * @internal
     */
    DisableTransitGatewayRouteTablePropagationRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(DisableTransitGatewayRouteTablePropagationRequest = exports.DisableTransitGatewayRouteTablePropagationRequest || (exports.DisableTransitGatewayRouteTablePropagationRequest = {}));
var TransitGatewayPropagation;
(function (TransitGatewayPropagation) {
    /**
     * @internal
     */
    TransitGatewayPropagation.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(TransitGatewayPropagation = exports.TransitGatewayPropagation || (exports.TransitGatewayPropagation = {}));
var DisableTransitGatewayRouteTablePropagationResult;
(function (DisableTransitGatewayRouteTablePropagationResult) {
    /**
     * @internal
     */
    DisableTransitGatewayRouteTablePropagationResult.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(DisableTransitGatewayRouteTablePropagationResult = exports.DisableTransitGatewayRouteTablePropagationResult || (exports.DisableTransitGatewayRouteTablePropagationResult = {}));
var DisableVgwRoutePropagationRequest;
(function (DisableVgwRoutePropagationRequest) {
    /**
     * @internal
     */
    DisableVgwRoutePropagationRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(DisableVgwRoutePropagationRequest = exports.DisableVgwRoutePropagationRequest || (exports.DisableVgwRoutePropagationRequest = {}));
var DisableVpcClassicLinkRequest;
(function (DisableVpcClassicLinkRequest) {
    /**
     * @internal
     */
    DisableVpcClassicLinkRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(DisableVpcClassicLinkRequest = exports.DisableVpcClassicLinkRequest || (exports.DisableVpcClassicLinkRequest = {}));
var DisableVpcClassicLinkResult;
(function (DisableVpcClassicLinkResult) {
    /**
     * @internal
     */
    DisableVpcClassicLinkResult.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(DisableVpcClassicLinkResult = exports.DisableVpcClassicLinkResult || (exports.DisableVpcClassicLinkResult = {}));
var DisableVpcClassicLinkDnsSupportRequest;
(function (DisableVpcClassicLinkDnsSupportRequest) {
    /**
     * @internal
     */
    DisableVpcClassicLinkDnsSupportRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(DisableVpcClassicLinkDnsSupportRequest = exports.DisableVpcClassicLinkDnsSupportRequest || (exports.DisableVpcClassicLinkDnsSupportRequest = {}));
var DisableVpcClassicLinkDnsSupportResult;
(function (DisableVpcClassicLinkDnsSupportResult) {
    /**
     * @internal
     */
    DisableVpcClassicLinkDnsSupportResult.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(DisableVpcClassicLinkDnsSupportResult = exports.DisableVpcClassicLinkDnsSupportResult || (exports.DisableVpcClassicLinkDnsSupportResult = {}));
var DisassociateAddressRequest;
(function (DisassociateAddressRequest) {
    /**
     * @internal
     */
    DisassociateAddressRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(DisassociateAddressRequest = exports.DisassociateAddressRequest || (exports.DisassociateAddressRequest = {}));
var DisassociateClientVpnTargetNetworkRequest;
(function (DisassociateClientVpnTargetNetworkRequest) {
    /**
     * @internal
     */
    DisassociateClientVpnTargetNetworkRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(DisassociateClientVpnTargetNetworkRequest = exports.DisassociateClientVpnTargetNetworkRequest || (exports.DisassociateClientVpnTargetNetworkRequest = {}));
var DisassociateClientVpnTargetNetworkResult;
(function (DisassociateClientVpnTargetNetworkResult) {
    /**
     * @internal
     */
    DisassociateClientVpnTargetNetworkResult.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(DisassociateClientVpnTargetNetworkResult = exports.DisassociateClientVpnTargetNetworkResult || (exports.DisassociateClientVpnTargetNetworkResult = {}));
var DisassociateEnclaveCertificateIamRoleRequest;
(function (DisassociateEnclaveCertificateIamRoleRequest) {
    /**
     * @internal
     */
    DisassociateEnclaveCertificateIamRoleRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(DisassociateEnclaveCertificateIamRoleRequest = exports.DisassociateEnclaveCertificateIamRoleRequest || (exports.DisassociateEnclaveCertificateIamRoleRequest = {}));
var DisassociateEnclaveCertificateIamRoleResult;
(function (DisassociateEnclaveCertificateIamRoleResult) {
    /**
     * @internal
     */
    DisassociateEnclaveCertificateIamRoleResult.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(DisassociateEnclaveCertificateIamRoleResult = exports.DisassociateEnclaveCertificateIamRoleResult || (exports.DisassociateEnclaveCertificateIamRoleResult = {}));
var DisassociateIamInstanceProfileRequest;
(function (DisassociateIamInstanceProfileRequest) {
    /**
     * @internal
     */
    DisassociateIamInstanceProfileRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(DisassociateIamInstanceProfileRequest = exports.DisassociateIamInstanceProfileRequest || (exports.DisassociateIamInstanceProfileRequest = {}));
var DisassociateIamInstanceProfileResult;
(function (DisassociateIamInstanceProfileResult) {
    /**
     * @internal
     */
    DisassociateIamInstanceProfileResult.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(DisassociateIamInstanceProfileResult = exports.DisassociateIamInstanceProfileResult || (exports.DisassociateIamInstanceProfileResult = {}));
var DisassociateRouteTableRequest;
(function (DisassociateRouteTableRequest) {
    /**
     * @internal
     */
    DisassociateRouteTableRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(DisassociateRouteTableRequest = exports.DisassociateRouteTableRequest || (exports.DisassociateRouteTableRequest = {}));
var DisassociateSubnetCidrBlockRequest;
(function (DisassociateSubnetCidrBlockRequest) {
    /**
     * @internal
     */
    DisassociateSubnetCidrBlockRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(DisassociateSubnetCidrBlockRequest = exports.DisassociateSubnetCidrBlockRequest || (exports.DisassociateSubnetCidrBlockRequest = {}));
var DisassociateSubnetCidrBlockResult;
(function (DisassociateSubnetCidrBlockResult) {
    /**
     * @internal
     */
    DisassociateSubnetCidrBlockResult.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(DisassociateSubnetCidrBlockResult = exports.DisassociateSubnetCidrBlockResult || (exports.DisassociateSubnetCidrBlockResult = {}));
var DisassociateTransitGatewayMulticastDomainRequest;
(function (DisassociateTransitGatewayMulticastDomainRequest) {
    /**
     * @internal
     */
    DisassociateTransitGatewayMulticastDomainRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(DisassociateTransitGatewayMulticastDomainRequest = exports.DisassociateTransitGatewayMulticastDomainRequest || (exports.DisassociateTransitGatewayMulticastDomainRequest = {}));
var DisassociateTransitGatewayMulticastDomainResult;
(function (DisassociateTransitGatewayMulticastDomainResult) {
    /**
     * @internal
     */
    DisassociateTransitGatewayMulticastDomainResult.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(DisassociateTransitGatewayMulticastDomainResult = exports.DisassociateTransitGatewayMulticastDomainResult || (exports.DisassociateTransitGatewayMulticastDomainResult = {}));
var DisassociateTransitGatewayRouteTableRequest;
(function (DisassociateTransitGatewayRouteTableRequest) {
    /**
     * @internal
     */
    DisassociateTransitGatewayRouteTableRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(DisassociateTransitGatewayRouteTableRequest = exports.DisassociateTransitGatewayRouteTableRequest || (exports.DisassociateTransitGatewayRouteTableRequest = {}));
var DisassociateTransitGatewayRouteTableResult;
(function (DisassociateTransitGatewayRouteTableResult) {
    /**
     * @internal
     */
    DisassociateTransitGatewayRouteTableResult.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(DisassociateTransitGatewayRouteTableResult = exports.DisassociateTransitGatewayRouteTableResult || (exports.DisassociateTransitGatewayRouteTableResult = {}));
var DisassociateVpcCidrBlockRequest;
(function (DisassociateVpcCidrBlockRequest) {
    /**
     * @internal
     */
    DisassociateVpcCidrBlockRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(DisassociateVpcCidrBlockRequest = exports.DisassociateVpcCidrBlockRequest || (exports.DisassociateVpcCidrBlockRequest = {}));
var DisassociateVpcCidrBlockResult;
(function (DisassociateVpcCidrBlockResult) {
    /**
     * @internal
     */
    DisassociateVpcCidrBlockResult.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(DisassociateVpcCidrBlockResult = exports.DisassociateVpcCidrBlockResult || (exports.DisassociateVpcCidrBlockResult = {}));
var EnableEbsEncryptionByDefaultRequest;
(function (EnableEbsEncryptionByDefaultRequest) {
    /**
     * @internal
     */
    EnableEbsEncryptionByDefaultRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(EnableEbsEncryptionByDefaultRequest = exports.EnableEbsEncryptionByDefaultRequest || (exports.EnableEbsEncryptionByDefaultRequest = {}));
var EnableEbsEncryptionByDefaultResult;
(function (EnableEbsEncryptionByDefaultResult) {
    /**
     * @internal
     */
    EnableEbsEncryptionByDefaultResult.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(EnableEbsEncryptionByDefaultResult = exports.EnableEbsEncryptionByDefaultResult || (exports.EnableEbsEncryptionByDefaultResult = {}));
var EnableFastSnapshotRestoresRequest;
(function (EnableFastSnapshotRestoresRequest) {
    /**
     * @internal
     */
    EnableFastSnapshotRestoresRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(EnableFastSnapshotRestoresRequest = exports.EnableFastSnapshotRestoresRequest || (exports.EnableFastSnapshotRestoresRequest = {}));
var EnableFastSnapshotRestoreSuccessItem;
(function (EnableFastSnapshotRestoreSuccessItem) {
    /**
     * @internal
     */
    EnableFastSnapshotRestoreSuccessItem.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(EnableFastSnapshotRestoreSuccessItem = exports.EnableFastSnapshotRestoreSuccessItem || (exports.EnableFastSnapshotRestoreSuccessItem = {}));
var EnableFastSnapshotRestoreStateError;
(function (EnableFastSnapshotRestoreStateError) {
    /**
     * @internal
     */
    EnableFastSnapshotRestoreStateError.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(EnableFastSnapshotRestoreStateError = exports.EnableFastSnapshotRestoreStateError || (exports.EnableFastSnapshotRestoreStateError = {}));
var EnableFastSnapshotRestoreStateErrorItem;
(function (EnableFastSnapshotRestoreStateErrorItem) {
    /**
     * @internal
     */
    EnableFastSnapshotRestoreStateErrorItem.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(EnableFastSnapshotRestoreStateErrorItem = exports.EnableFastSnapshotRestoreStateErrorItem || (exports.EnableFastSnapshotRestoreStateErrorItem = {}));
var EnableFastSnapshotRestoreErrorItem;
(function (EnableFastSnapshotRestoreErrorItem) {
    /**
     * @internal
     */
    EnableFastSnapshotRestoreErrorItem.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(EnableFastSnapshotRestoreErrorItem = exports.EnableFastSnapshotRestoreErrorItem || (exports.EnableFastSnapshotRestoreErrorItem = {}));
var EnableFastSnapshotRestoresResult;
(function (EnableFastSnapshotRestoresResult) {
    /**
     * @internal
     */
    EnableFastSnapshotRestoresResult.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(EnableFastSnapshotRestoresResult = exports.EnableFastSnapshotRestoresResult || (exports.EnableFastSnapshotRestoresResult = {}));
var EnableSerialConsoleAccessRequest;
(function (EnableSerialConsoleAccessRequest) {
    /**
     * @internal
     */
    EnableSerialConsoleAccessRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(EnableSerialConsoleAccessRequest = exports.EnableSerialConsoleAccessRequest || (exports.EnableSerialConsoleAccessRequest = {}));
var EnableSerialConsoleAccessResult;
(function (EnableSerialConsoleAccessResult) {
    /**
     * @internal
     */
    EnableSerialConsoleAccessResult.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(EnableSerialConsoleAccessResult = exports.EnableSerialConsoleAccessResult || (exports.EnableSerialConsoleAccessResult = {}));
var EnableTransitGatewayRouteTablePropagationRequest;
(function (EnableTransitGatewayRouteTablePropagationRequest) {
    /**
     * @internal
     */
    EnableTransitGatewayRouteTablePropagationRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(EnableTransitGatewayRouteTablePropagationRequest = exports.EnableTransitGatewayRouteTablePropagationRequest || (exports.EnableTransitGatewayRouteTablePropagationRequest = {}));
var EnableTransitGatewayRouteTablePropagationResult;
(function (EnableTransitGatewayRouteTablePropagationResult) {
    /**
     * @internal
     */
    EnableTransitGatewayRouteTablePropagationResult.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(EnableTransitGatewayRouteTablePropagationResult = exports.EnableTransitGatewayRouteTablePropagationResult || (exports.EnableTransitGatewayRouteTablePropagationResult = {}));
var EnableVgwRoutePropagationRequest;
(function (EnableVgwRoutePropagationRequest) {
    /**
     * @internal
     */
    EnableVgwRoutePropagationRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(EnableVgwRoutePropagationRequest = exports.EnableVgwRoutePropagationRequest || (exports.EnableVgwRoutePropagationRequest = {}));
var EnableVolumeIORequest;
(function (EnableVolumeIORequest) {
    /**
     * @internal
     */
    EnableVolumeIORequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(EnableVolumeIORequest = exports.EnableVolumeIORequest || (exports.EnableVolumeIORequest = {}));
var EnableVpcClassicLinkRequest;
(function (EnableVpcClassicLinkRequest) {
    /**
     * @internal
     */
    EnableVpcClassicLinkRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(EnableVpcClassicLinkRequest = exports.EnableVpcClassicLinkRequest || (exports.EnableVpcClassicLinkRequest = {}));
var EnableVpcClassicLinkResult;
(function (EnableVpcClassicLinkResult) {
    /**
     * @internal
     */
    EnableVpcClassicLinkResult.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(EnableVpcClassicLinkResult = exports.EnableVpcClassicLinkResult || (exports.EnableVpcClassicLinkResult = {}));
var EnableVpcClassicLinkDnsSupportRequest;
(function (EnableVpcClassicLinkDnsSupportRequest) {
    /**
     * @internal
     */
    EnableVpcClassicLinkDnsSupportRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(EnableVpcClassicLinkDnsSupportRequest = exports.EnableVpcClassicLinkDnsSupportRequest || (exports.EnableVpcClassicLinkDnsSupportRequest = {}));
var EnableVpcClassicLinkDnsSupportResult;
(function (EnableVpcClassicLinkDnsSupportResult) {
    /**
     * @internal
     */
    EnableVpcClassicLinkDnsSupportResult.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(EnableVpcClassicLinkDnsSupportResult = exports.EnableVpcClassicLinkDnsSupportResult || (exports.EnableVpcClassicLinkDnsSupportResult = {}));
var ExportClientVpnClientCertificateRevocationListRequest;
(function (ExportClientVpnClientCertificateRevocationListRequest) {
    /**
     * @internal
     */
    ExportClientVpnClientCertificateRevocationListRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(ExportClientVpnClientCertificateRevocationListRequest = exports.ExportClientVpnClientCertificateRevocationListRequest || (exports.ExportClientVpnClientCertificateRevocationListRequest = {}));
var ClientCertificateRevocationListStatus;
(function (ClientCertificateRevocationListStatus) {
    /**
     * @internal
     */
    ClientCertificateRevocationListStatus.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(ClientCertificateRevocationListStatus = exports.ClientCertificateRevocationListStatus || (exports.ClientCertificateRevocationListStatus = {}));
var ExportClientVpnClientCertificateRevocationListResult;
(function (ExportClientVpnClientCertificateRevocationListResult) {
    /**
     * @internal
     */
    ExportClientVpnClientCertificateRevocationListResult.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(ExportClientVpnClientCertificateRevocationListResult = exports.ExportClientVpnClientCertificateRevocationListResult || (exports.ExportClientVpnClientCertificateRevocationListResult = {}));
var ExportClientVpnClientConfigurationRequest;
(function (ExportClientVpnClientConfigurationRequest) {
    /**
     * @internal
     */
    ExportClientVpnClientConfigurationRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(ExportClientVpnClientConfigurationRequest = exports.ExportClientVpnClientConfigurationRequest || (exports.ExportClientVpnClientConfigurationRequest = {}));
var ExportClientVpnClientConfigurationResult;
(function (ExportClientVpnClientConfigurationResult) {
    /**
     * @internal
     */
    ExportClientVpnClientConfigurationResult.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(ExportClientVpnClientConfigurationResult = exports.ExportClientVpnClientConfigurationResult || (exports.ExportClientVpnClientConfigurationResult = {}));
var ExportTaskS3LocationRequest;
(function (ExportTaskS3LocationRequest) {
    /**
     * @internal
     */
    ExportTaskS3LocationRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(ExportTaskS3LocationRequest = exports.ExportTaskS3LocationRequest || (exports.ExportTaskS3LocationRequest = {}));
var ExportImageRequest;
(function (ExportImageRequest) {
    /**
     * @internal
     */
    ExportImageRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(ExportImageRequest = exports.ExportImageRequest || (exports.ExportImageRequest = {}));
var ExportImageResult;
(function (ExportImageResult) {
    /**
     * @internal
     */
    ExportImageResult.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(ExportImageResult = exports.ExportImageResult || (exports.ExportImageResult = {}));
var ExportTransitGatewayRoutesRequest;
(function (ExportTransitGatewayRoutesRequest) {
    /**
     * @internal
     */
    ExportTransitGatewayRoutesRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(ExportTransitGatewayRoutesRequest = exports.ExportTransitGatewayRoutesRequest || (exports.ExportTransitGatewayRoutesRequest = {}));
var ExportTransitGatewayRoutesResult;
(function (ExportTransitGatewayRoutesResult) {
    /**
     * @internal
     */
    ExportTransitGatewayRoutesResult.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(ExportTransitGatewayRoutesResult = exports.ExportTransitGatewayRoutesResult || (exports.ExportTransitGatewayRoutesResult = {}));
var GetAssociatedEnclaveCertificateIamRolesRequest;
(function (GetAssociatedEnclaveCertificateIamRolesRequest) {
    /**
     * @internal
     */
    GetAssociatedEnclaveCertificateIamRolesRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(GetAssociatedEnclaveCertificateIamRolesRequest = exports.GetAssociatedEnclaveCertificateIamRolesRequest || (exports.GetAssociatedEnclaveCertificateIamRolesRequest = {}));
var AssociatedRole;
(function (AssociatedRole) {
    /**
     * @internal
     */
    AssociatedRole.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(AssociatedRole = exports.AssociatedRole || (exports.AssociatedRole = {}));
var GetAssociatedEnclaveCertificateIamRolesResult;
(function (GetAssociatedEnclaveCertificateIamRolesResult) {
    /**
     * @internal
     */
    GetAssociatedEnclaveCertificateIamRolesResult.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(GetAssociatedEnclaveCertificateIamRolesResult = exports.GetAssociatedEnclaveCertificateIamRolesResult || (exports.GetAssociatedEnclaveCertificateIamRolesResult = {}));
var GetAssociatedIpv6PoolCidrsRequest;
(function (GetAssociatedIpv6PoolCidrsRequest) {
    /**
     * @internal
     */
    GetAssociatedIpv6PoolCidrsRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(GetAssociatedIpv6PoolCidrsRequest = exports.GetAssociatedIpv6PoolCidrsRequest || (exports.GetAssociatedIpv6PoolCidrsRequest = {}));
var Ipv6CidrAssociation;
(function (Ipv6CidrAssociation) {
    /**
     * @internal
     */
    Ipv6CidrAssociation.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(Ipv6CidrAssociation = exports.Ipv6CidrAssociation || (exports.Ipv6CidrAssociation = {}));
var GetAssociatedIpv6PoolCidrsResult;
(function (GetAssociatedIpv6PoolCidrsResult) {
    /**
     * @internal
     */
    GetAssociatedIpv6PoolCidrsResult.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(GetAssociatedIpv6PoolCidrsResult = exports.GetAssociatedIpv6PoolCidrsResult || (exports.GetAssociatedIpv6PoolCidrsResult = {}));
var GetCapacityReservationUsageRequest;
(function (GetCapacityReservationUsageRequest) {
    /**
     * @internal
     */
    GetCapacityReservationUsageRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(GetCapacityReservationUsageRequest = exports.GetCapacityReservationUsageRequest || (exports.GetCapacityReservationUsageRequest = {}));
var InstanceUsage;
(function (InstanceUsage) {
    /**
     * @internal
     */
    InstanceUsage.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(InstanceUsage = exports.InstanceUsage || (exports.InstanceUsage = {}));
var GetCapacityReservationUsageResult;
(function (GetCapacityReservationUsageResult) {
    /**
     * @internal
     */
    GetCapacityReservationUsageResult.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(GetCapacityReservationUsageResult = exports.GetCapacityReservationUsageResult || (exports.GetCapacityReservationUsageResult = {}));
var GetCoipPoolUsageRequest;
(function (GetCoipPoolUsageRequest) {
    /**
     * @internal
     */
    GetCoipPoolUsageRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(GetCoipPoolUsageRequest = exports.GetCoipPoolUsageRequest || (exports.GetCoipPoolUsageRequest = {}));
var CoipAddressUsage;
(function (CoipAddressUsage) {
    /**
     * @internal
     */
    CoipAddressUsage.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(CoipAddressUsage = exports.CoipAddressUsage || (exports.CoipAddressUsage = {}));
var GetCoipPoolUsageResult;
(function (GetCoipPoolUsageResult) {
    /**
     * @internal
     */
    GetCoipPoolUsageResult.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(GetCoipPoolUsageResult = exports.GetCoipPoolUsageResult || (exports.GetCoipPoolUsageResult = {}));
var GetConsoleOutputRequest;
(function (GetConsoleOutputRequest) {
    /**
     * @internal
     */
    GetConsoleOutputRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(GetConsoleOutputRequest = exports.GetConsoleOutputRequest || (exports.GetConsoleOutputRequest = {}));
var GetConsoleOutputResult;
(function (GetConsoleOutputResult) {
    /**
     * @internal
     */
    GetConsoleOutputResult.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(GetConsoleOutputResult = exports.GetConsoleOutputResult || (exports.GetConsoleOutputResult = {}));
var GetConsoleScreenshotRequest;
(function (GetConsoleScreenshotRequest) {
    /**
     * @internal
     */
    GetConsoleScreenshotRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(GetConsoleScreenshotRequest = exports.GetConsoleScreenshotRequest || (exports.GetConsoleScreenshotRequest = {}));
var GetConsoleScreenshotResult;
(function (GetConsoleScreenshotResult) {
    /**
     * @internal
     */
    GetConsoleScreenshotResult.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(GetConsoleScreenshotResult = exports.GetConsoleScreenshotResult || (exports.GetConsoleScreenshotResult = {}));
var GetDefaultCreditSpecificationRequest;
(function (GetDefaultCreditSpecificationRequest) {
    /**
     * @internal
     */
    GetDefaultCreditSpecificationRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(GetDefaultCreditSpecificationRequest = exports.GetDefaultCreditSpecificationRequest || (exports.GetDefaultCreditSpecificationRequest = {}));
var InstanceFamilyCreditSpecification;
(function (InstanceFamilyCreditSpecification) {
    /**
     * @internal
     */
    InstanceFamilyCreditSpecification.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(InstanceFamilyCreditSpecification = exports.InstanceFamilyCreditSpecification || (exports.InstanceFamilyCreditSpecification = {}));
var GetDefaultCreditSpecificationResult;
(function (GetDefaultCreditSpecificationResult) {
    /**
     * @internal
     */
    GetDefaultCreditSpecificationResult.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(GetDefaultCreditSpecificationResult = exports.GetDefaultCreditSpecificationResult || (exports.GetDefaultCreditSpecificationResult = {}));
var GetEbsDefaultKmsKeyIdRequest;
(function (GetEbsDefaultKmsKeyIdRequest) {
    /**
     * @internal
     */
    GetEbsDefaultKmsKeyIdRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(GetEbsDefaultKmsKeyIdRequest = exports.GetEbsDefaultKmsKeyIdRequest || (exports.GetEbsDefaultKmsKeyIdRequest = {}));
var GetEbsDefaultKmsKeyIdResult;
(function (GetEbsDefaultKmsKeyIdResult) {
    /**
     * @internal
     */
    GetEbsDefaultKmsKeyIdResult.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(GetEbsDefaultKmsKeyIdResult = exports.GetEbsDefaultKmsKeyIdResult || (exports.GetEbsDefaultKmsKeyIdResult = {}));
var GetEbsEncryptionByDefaultRequest;
(function (GetEbsEncryptionByDefaultRequest) {
    /**
     * @internal
     */
    GetEbsEncryptionByDefaultRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(GetEbsEncryptionByDefaultRequest = exports.GetEbsEncryptionByDefaultRequest || (exports.GetEbsEncryptionByDefaultRequest = {}));
var GetEbsEncryptionByDefaultResult;
(function (GetEbsEncryptionByDefaultResult) {
    /**
     * @internal
     */
    GetEbsEncryptionByDefaultResult.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(GetEbsEncryptionByDefaultResult = exports.GetEbsEncryptionByDefaultResult || (exports.GetEbsEncryptionByDefaultResult = {}));
var PartitionLoadFrequency;
(function (PartitionLoadFrequency) {
    PartitionLoadFrequency["DAILY"] = "daily";
    PartitionLoadFrequency["MONTHLY"] = "monthly";
    PartitionLoadFrequency["NONE"] = "none";
    PartitionLoadFrequency["WEEKLY"] = "weekly";
})(PartitionLoadFrequency = exports.PartitionLoadFrequency || (exports.PartitionLoadFrequency = {}));
var AthenaIntegration;
(function (AthenaIntegration) {
    /**
     * @internal
     */
    AthenaIntegration.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(AthenaIntegration = exports.AthenaIntegration || (exports.AthenaIntegration = {}));
var IntegrateServices;
(function (IntegrateServices) {
    /**
     * @internal
     */
    IntegrateServices.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(IntegrateServices = exports.IntegrateServices || (exports.IntegrateServices = {}));
var GetFlowLogsIntegrationTemplateRequest;
(function (GetFlowLogsIntegrationTemplateRequest) {
    /**
     * @internal
     */
    GetFlowLogsIntegrationTemplateRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(GetFlowLogsIntegrationTemplateRequest = exports.GetFlowLogsIntegrationTemplateRequest || (exports.GetFlowLogsIntegrationTemplateRequest = {}));
var GetFlowLogsIntegrationTemplateResult;
(function (GetFlowLogsIntegrationTemplateResult) {
    /**
     * @internal
     */
    GetFlowLogsIntegrationTemplateResult.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(GetFlowLogsIntegrationTemplateResult = exports.GetFlowLogsIntegrationTemplateResult || (exports.GetFlowLogsIntegrationTemplateResult = {}));
var GetGroupsForCapacityReservationRequest;
(function (GetGroupsForCapacityReservationRequest) {
    /**
     * @internal
     */
    GetGroupsForCapacityReservationRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(GetGroupsForCapacityReservationRequest = exports.GetGroupsForCapacityReservationRequest || (exports.GetGroupsForCapacityReservationRequest = {}));
var CapacityReservationGroup;
(function (CapacityReservationGroup) {
    /**
     * @internal
     */
    CapacityReservationGroup.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(CapacityReservationGroup = exports.CapacityReservationGroup || (exports.CapacityReservationGroup = {}));
var GetGroupsForCapacityReservationResult;
(function (GetGroupsForCapacityReservationResult) {
    /**
     * @internal
     */
    GetGroupsForCapacityReservationResult.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(GetGroupsForCapacityReservationResult = exports.GetGroupsForCapacityReservationResult || (exports.GetGroupsForCapacityReservationResult = {}));
var GetHostReservationPurchasePreviewRequest;
(function (GetHostReservationPurchasePreviewRequest) {
    /**
     * @internal
     */
    GetHostReservationPurchasePreviewRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(GetHostReservationPurchasePreviewRequest = exports.GetHostReservationPurchasePreviewRequest || (exports.GetHostReservationPurchasePreviewRequest = {}));
var Purchase;
(function (Purchase) {
    /**
     * @internal
     */
    Purchase.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(Purchase = exports.Purchase || (exports.Purchase = {}));
var GetHostReservationPurchasePreviewResult;
(function (GetHostReservationPurchasePreviewResult) {
    /**
     * @internal
     */
    GetHostReservationPurchasePreviewResult.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(GetHostReservationPurchasePreviewResult = exports.GetHostReservationPurchasePreviewResult || (exports.GetHostReservationPurchasePreviewResult = {}));
var GetLaunchTemplateDataRequest;
(function (GetLaunchTemplateDataRequest) {
    /**
     * @internal
     */
    GetLaunchTemplateDataRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(GetLaunchTemplateDataRequest = exports.GetLaunchTemplateDataRequest || (exports.GetLaunchTemplateDataRequest = {}));
var GetLaunchTemplateDataResult;
(function (GetLaunchTemplateDataResult) {
    /**
     * @internal
     */
    GetLaunchTemplateDataResult.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(GetLaunchTemplateDataResult = exports.GetLaunchTemplateDataResult || (exports.GetLaunchTemplateDataResult = {}));
var GetManagedPrefixListAssociationsRequest;
(function (GetManagedPrefixListAssociationsRequest) {
    /**
     * @internal
     */
    GetManagedPrefixListAssociationsRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(GetManagedPrefixListAssociationsRequest = exports.GetManagedPrefixListAssociationsRequest || (exports.GetManagedPrefixListAssociationsRequest = {}));
var PrefixListAssociation;
(function (PrefixListAssociation) {
    /**
     * @internal
     */
    PrefixListAssociation.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(PrefixListAssociation = exports.PrefixListAssociation || (exports.PrefixListAssociation = {}));
var GetManagedPrefixListAssociationsResult;
(function (GetManagedPrefixListAssociationsResult) {
    /**
     * @internal
     */
    GetManagedPrefixListAssociationsResult.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(GetManagedPrefixListAssociationsResult = exports.GetManagedPrefixListAssociationsResult || (exports.GetManagedPrefixListAssociationsResult = {}));
var GetManagedPrefixListEntriesRequest;
(function (GetManagedPrefixListEntriesRequest) {
    /**
     * @internal
     */
    GetManagedPrefixListEntriesRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(GetManagedPrefixListEntriesRequest = exports.GetManagedPrefixListEntriesRequest || (exports.GetManagedPrefixListEntriesRequest = {}));
var PrefixListEntry;
(function (PrefixListEntry) {
    /**
     * @internal
     */
    PrefixListEntry.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(PrefixListEntry = exports.PrefixListEntry || (exports.PrefixListEntry = {}));
var GetManagedPrefixListEntriesResult;
(function (GetManagedPrefixListEntriesResult) {
    /**
     * @internal
     */
    GetManagedPrefixListEntriesResult.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(GetManagedPrefixListEntriesResult = exports.GetManagedPrefixListEntriesResult || (exports.GetManagedPrefixListEntriesResult = {}));
var GetPasswordDataRequest;
(function (GetPasswordDataRequest) {
    /**
     * @internal
     */
    GetPasswordDataRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(GetPasswordDataRequest = exports.GetPasswordDataRequest || (exports.GetPasswordDataRequest = {}));
var GetPasswordDataResult;
(function (GetPasswordDataResult) {
    /**
     * @internal
     */
    GetPasswordDataResult.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(GetPasswordDataResult = exports.GetPasswordDataResult || (exports.GetPasswordDataResult = {}));
var GetReservedInstancesExchangeQuoteRequest;
(function (GetReservedInstancesExchangeQuoteRequest) {
    /**
     * @internal
     */
    GetReservedInstancesExchangeQuoteRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(GetReservedInstancesExchangeQuoteRequest = exports.GetReservedInstancesExchangeQuoteRequest || (exports.GetReservedInstancesExchangeQuoteRequest = {}));
var ReservationValue;
(function (ReservationValue) {
    /**
     * @internal
     */
    ReservationValue.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(ReservationValue = exports.ReservationValue || (exports.ReservationValue = {}));
var ReservedInstanceReservationValue;
(function (ReservedInstanceReservationValue) {
    /**
     * @internal
     */
    ReservedInstanceReservationValue.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(ReservedInstanceReservationValue = exports.ReservedInstanceReservationValue || (exports.ReservedInstanceReservationValue = {}));
var TargetConfiguration;
(function (TargetConfiguration) {
    /**
     * @internal
     */
    TargetConfiguration.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(TargetConfiguration = exports.TargetConfiguration || (exports.TargetConfiguration = {}));
var TargetReservationValue;
(function (TargetReservationValue) {
    /**
     * @internal
     */
    TargetReservationValue.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(TargetReservationValue = exports.TargetReservationValue || (exports.TargetReservationValue = {}));
var GetReservedInstancesExchangeQuoteResult;
(function (GetReservedInstancesExchangeQuoteResult) {
    /**
     * @internal
     */
    GetReservedInstancesExchangeQuoteResult.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(GetReservedInstancesExchangeQuoteResult = exports.GetReservedInstancesExchangeQuoteResult || (exports.GetReservedInstancesExchangeQuoteResult = {}));
var GetSerialConsoleAccessStatusRequest;
(function (GetSerialConsoleAccessStatusRequest) {
    /**
     * @internal
     */
    GetSerialConsoleAccessStatusRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(GetSerialConsoleAccessStatusRequest = exports.GetSerialConsoleAccessStatusRequest || (exports.GetSerialConsoleAccessStatusRequest = {}));
var GetSerialConsoleAccessStatusResult;
(function (GetSerialConsoleAccessStatusResult) {
    /**
     * @internal
     */
    GetSerialConsoleAccessStatusResult.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(GetSerialConsoleAccessStatusResult = exports.GetSerialConsoleAccessStatusResult || (exports.GetSerialConsoleAccessStatusResult = {}));
var GetTransitGatewayAttachmentPropagationsRequest;
(function (GetTransitGatewayAttachmentPropagationsRequest) {
    /**
     * @internal
     */
    GetTransitGatewayAttachmentPropagationsRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(GetTransitGatewayAttachmentPropagationsRequest = exports.GetTransitGatewayAttachmentPropagationsRequest || (exports.GetTransitGatewayAttachmentPropagationsRequest = {}));
var TransitGatewayAttachmentPropagation;
(function (TransitGatewayAttachmentPropagation) {
    /**
     * @internal
     */
    TransitGatewayAttachmentPropagation.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(TransitGatewayAttachmentPropagation = exports.TransitGatewayAttachmentPropagation || (exports.TransitGatewayAttachmentPropagation = {}));
var GetTransitGatewayAttachmentPropagationsResult;
(function (GetTransitGatewayAttachmentPropagationsResult) {
    /**
     * @internal
     */
    GetTransitGatewayAttachmentPropagationsResult.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(GetTransitGatewayAttachmentPropagationsResult = exports.GetTransitGatewayAttachmentPropagationsResult || (exports.GetTransitGatewayAttachmentPropagationsResult = {}));
var GetTransitGatewayMulticastDomainAssociationsRequest;
(function (GetTransitGatewayMulticastDomainAssociationsRequest) {
    /**
     * @internal
     */
    GetTransitGatewayMulticastDomainAssociationsRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(GetTransitGatewayMulticastDomainAssociationsRequest = exports.GetTransitGatewayMulticastDomainAssociationsRequest || (exports.GetTransitGatewayMulticastDomainAssociationsRequest = {}));
var TransitGatewayMulticastDomainAssociation;
(function (TransitGatewayMulticastDomainAssociation) {
    /**
     * @internal
     */
    TransitGatewayMulticastDomainAssociation.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(TransitGatewayMulticastDomainAssociation = exports.TransitGatewayMulticastDomainAssociation || (exports.TransitGatewayMulticastDomainAssociation = {}));
var GetTransitGatewayMulticastDomainAssociationsResult;
(function (GetTransitGatewayMulticastDomainAssociationsResult) {
    /**
     * @internal
     */
    GetTransitGatewayMulticastDomainAssociationsResult.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(GetTransitGatewayMulticastDomainAssociationsResult = exports.GetTransitGatewayMulticastDomainAssociationsResult || (exports.GetTransitGatewayMulticastDomainAssociationsResult = {}));
var GetTransitGatewayPrefixListReferencesRequest;
(function (GetTransitGatewayPrefixListReferencesRequest) {
    /**
     * @internal
     */
    GetTransitGatewayPrefixListReferencesRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(GetTransitGatewayPrefixListReferencesRequest = exports.GetTransitGatewayPrefixListReferencesRequest || (exports.GetTransitGatewayPrefixListReferencesRequest = {}));
var GetTransitGatewayPrefixListReferencesResult;
(function (GetTransitGatewayPrefixListReferencesResult) {
    /**
     * @internal
     */
    GetTransitGatewayPrefixListReferencesResult.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(GetTransitGatewayPrefixListReferencesResult = exports.GetTransitGatewayPrefixListReferencesResult || (exports.GetTransitGatewayPrefixListReferencesResult = {}));
var GetTransitGatewayRouteTableAssociationsRequest;
(function (GetTransitGatewayRouteTableAssociationsRequest) {
    /**
     * @internal
     */
    GetTransitGatewayRouteTableAssociationsRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(GetTransitGatewayRouteTableAssociationsRequest = exports.GetTransitGatewayRouteTableAssociationsRequest || (exports.GetTransitGatewayRouteTableAssociationsRequest = {}));
var TransitGatewayRouteTableAssociation;
(function (TransitGatewayRouteTableAssociation) {
    /**
     * @internal
     */
    TransitGatewayRouteTableAssociation.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(TransitGatewayRouteTableAssociation = exports.TransitGatewayRouteTableAssociation || (exports.TransitGatewayRouteTableAssociation = {}));
var GetTransitGatewayRouteTableAssociationsResult;
(function (GetTransitGatewayRouteTableAssociationsResult) {
    /**
     * @internal
     */
    GetTransitGatewayRouteTableAssociationsResult.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(GetTransitGatewayRouteTableAssociationsResult = exports.GetTransitGatewayRouteTableAssociationsResult || (exports.GetTransitGatewayRouteTableAssociationsResult = {}));
var GetTransitGatewayRouteTablePropagationsRequest;
(function (GetTransitGatewayRouteTablePropagationsRequest) {
    /**
     * @internal
     */
    GetTransitGatewayRouteTablePropagationsRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(GetTransitGatewayRouteTablePropagationsRequest = exports.GetTransitGatewayRouteTablePropagationsRequest || (exports.GetTransitGatewayRouteTablePropagationsRequest = {}));
var TransitGatewayRouteTablePropagation;
(function (TransitGatewayRouteTablePropagation) {
    /**
     * @internal
     */
    TransitGatewayRouteTablePropagation.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(TransitGatewayRouteTablePropagation = exports.TransitGatewayRouteTablePropagation || (exports.TransitGatewayRouteTablePropagation = {}));
var GetTransitGatewayRouteTablePropagationsResult;
(function (GetTransitGatewayRouteTablePropagationsResult) {
    /**
     * @internal
     */
    GetTransitGatewayRouteTablePropagationsResult.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(GetTransitGatewayRouteTablePropagationsResult = exports.GetTransitGatewayRouteTablePropagationsResult || (exports.GetTransitGatewayRouteTablePropagationsResult = {}));
var ImportClientVpnClientCertificateRevocationListRequest;
(function (ImportClientVpnClientCertificateRevocationListRequest) {
    /**
     * @internal
     */
    ImportClientVpnClientCertificateRevocationListRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(ImportClientVpnClientCertificateRevocationListRequest = exports.ImportClientVpnClientCertificateRevocationListRequest || (exports.ImportClientVpnClientCertificateRevocationListRequest = {}));
var ImportClientVpnClientCertificateRevocationListResult;
(function (ImportClientVpnClientCertificateRevocationListResult) {
    /**
     * @internal
     */
    ImportClientVpnClientCertificateRevocationListResult.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(ImportClientVpnClientCertificateRevocationListResult = exports.ImportClientVpnClientCertificateRevocationListResult || (exports.ImportClientVpnClientCertificateRevocationListResult = {}));
var ClientData;
(function (ClientData) {
    /**
     * @internal
     */
    ClientData.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(ClientData = exports.ClientData || (exports.ClientData = {}));
var UserBucket;
(function (UserBucket) {
    /**
     * @internal
     */
    UserBucket.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(UserBucket = exports.UserBucket || (exports.UserBucket = {}));
var ImageDiskContainer;
(function (ImageDiskContainer) {
    /**
     * @internal
     */
    ImageDiskContainer.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(ImageDiskContainer = exports.ImageDiskContainer || (exports.ImageDiskContainer = {}));
var ImportImageLicenseConfigurationRequest;
(function (ImportImageLicenseConfigurationRequest) {
    /**
     * @internal
     */
    ImportImageLicenseConfigurationRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(ImportImageLicenseConfigurationRequest = exports.ImportImageLicenseConfigurationRequest || (exports.ImportImageLicenseConfigurationRequest = {}));
var ImportImageRequest;
(function (ImportImageRequest) {
    /**
     * @internal
     */
    ImportImageRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(ImportImageRequest = exports.ImportImageRequest || (exports.ImportImageRequest = {}));
var ImportImageResult;
(function (ImportImageResult) {
    /**
     * @internal
     */
    ImportImageResult.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(ImportImageResult = exports.ImportImageResult || (exports.ImportImageResult = {}));
var DiskImageDetail;
(function (DiskImageDetail) {
    /**
     * @internal
     */
    DiskImageDetail.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(DiskImageDetail = exports.DiskImageDetail || (exports.DiskImageDetail = {}));
var VolumeDetail;
(function (VolumeDetail) {
    /**
     * @internal
     */
    VolumeDetail.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(VolumeDetail = exports.VolumeDetail || (exports.VolumeDetail = {}));
var DiskImage;
(function (DiskImage) {
    /**
     * @internal
     */
    DiskImage.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(DiskImage = exports.DiskImage || (exports.DiskImage = {}));
var UserData;
(function (UserData) {
    /**
     * @internal
     */
    UserData.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(UserData = exports.UserData || (exports.UserData = {}));
var ImportInstanceLaunchSpecification;
(function (ImportInstanceLaunchSpecification) {
    /**
     * @internal
     */
    ImportInstanceLaunchSpecification.filterSensitiveLog = (obj) => ({
        ...obj,
        ...(obj.UserData && { UserData: smithy_client_1.SENSITIVE_STRING }),
    });
})(ImportInstanceLaunchSpecification = exports.ImportInstanceLaunchSpecification || (exports.ImportInstanceLaunchSpecification = {}));
var ImportInstanceRequest;
(function (ImportInstanceRequest) {
    /**
     * @internal
     */
    ImportInstanceRequest.filterSensitiveLog = (obj) => ({
        ...obj,
        ...(obj.LaunchSpecification && {
            LaunchSpecification: ImportInstanceLaunchSpecification.filterSensitiveLog(obj.LaunchSpecification),
        }),
    });
})(ImportInstanceRequest = exports.ImportInstanceRequest || (exports.ImportInstanceRequest = {}));
var ImportInstanceResult;
(function (ImportInstanceResult) {
    /**
     * @internal
     */
    ImportInstanceResult.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(ImportInstanceResult = exports.ImportInstanceResult || (exports.ImportInstanceResult = {}));
var ImportKeyPairRequest;
(function (ImportKeyPairRequest) {
    /**
     * @internal
     */
    ImportKeyPairRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(ImportKeyPairRequest = exports.ImportKeyPairRequest || (exports.ImportKeyPairRequest = {}));
var ImportKeyPairResult;
(function (ImportKeyPairResult) {
    /**
     * @internal
     */
    ImportKeyPairResult.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(ImportKeyPairResult = exports.ImportKeyPairResult || (exports.ImportKeyPairResult = {}));
var SnapshotDiskContainer;
(function (SnapshotDiskContainer) {
    /**
     * @internal
     */
    SnapshotDiskContainer.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(SnapshotDiskContainer = exports.SnapshotDiskContainer || (exports.SnapshotDiskContainer = {}));
var ImportSnapshotRequest;
(function (ImportSnapshotRequest) {
    /**
     * @internal
     */
    ImportSnapshotRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(ImportSnapshotRequest = exports.ImportSnapshotRequest || (exports.ImportSnapshotRequest = {}));
var ImportSnapshotResult;
(function (ImportSnapshotResult) {
    /**
     * @internal
     */
    ImportSnapshotResult.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(ImportSnapshotResult = exports.ImportSnapshotResult || (exports.ImportSnapshotResult = {}));
var ImportVolumeRequest;
(function (ImportVolumeRequest) {
    /**
     * @internal
     */
    ImportVolumeRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(ImportVolumeRequest = exports.ImportVolumeRequest || (exports.ImportVolumeRequest = {}));
var ImportVolumeResult;
(function (ImportVolumeResult) {
    /**
     * @internal
     */
    ImportVolumeResult.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(ImportVolumeResult = exports.ImportVolumeResult || (exports.ImportVolumeResult = {}));
var ModifyAddressAttributeRequest;
(function (ModifyAddressAttributeRequest) {
    /**
     * @internal
     */
    ModifyAddressAttributeRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(ModifyAddressAttributeRequest = exports.ModifyAddressAttributeRequest || (exports.ModifyAddressAttributeRequest = {}));
var ModifyAddressAttributeResult;
(function (ModifyAddressAttributeResult) {
    /**
     * @internal
     */
    ModifyAddressAttributeResult.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(ModifyAddressAttributeResult = exports.ModifyAddressAttributeResult || (exports.ModifyAddressAttributeResult = {}));
var ModifyAvailabilityZoneGroupRequest;
(function (ModifyAvailabilityZoneGroupRequest) {
    /**
     * @internal
     */
    ModifyAvailabilityZoneGroupRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(ModifyAvailabilityZoneGroupRequest = exports.ModifyAvailabilityZoneGroupRequest || (exports.ModifyAvailabilityZoneGroupRequest = {}));
var ModifyAvailabilityZoneGroupResult;
(function (ModifyAvailabilityZoneGroupResult) {
    /**
     * @internal
     */
    ModifyAvailabilityZoneGroupResult.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(ModifyAvailabilityZoneGroupResult = exports.ModifyAvailabilityZoneGroupResult || (exports.ModifyAvailabilityZoneGroupResult = {}));
var ModifyCapacityReservationRequest;
(function (ModifyCapacityReservationRequest) {
    /**
     * @internal
     */
    ModifyCapacityReservationRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(ModifyCapacityReservationRequest = exports.ModifyCapacityReservationRequest || (exports.ModifyCapacityReservationRequest = {}));
var ModifyCapacityReservationResult;
(function (ModifyCapacityReservationResult) {
    /**
     * @internal
     */
    ModifyCapacityReservationResult.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(ModifyCapacityReservationResult = exports.ModifyCapacityReservationResult || (exports.ModifyCapacityReservationResult = {}));
var DnsServersOptionsModifyStructure;
(function (DnsServersOptionsModifyStructure) {
    /**
     * @internal
     */
    DnsServersOptionsModifyStructure.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(DnsServersOptionsModifyStructure = exports.DnsServersOptionsModifyStructure || (exports.DnsServersOptionsModifyStructure = {}));
var ModifyClientVpnEndpointRequest;
(function (ModifyClientVpnEndpointRequest) {
    /**
     * @internal
     */
    ModifyClientVpnEndpointRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(ModifyClientVpnEndpointRequest = exports.ModifyClientVpnEndpointRequest || (exports.ModifyClientVpnEndpointRequest = {}));
var ModifyClientVpnEndpointResult;
(function (ModifyClientVpnEndpointResult) {
    /**
     * @internal
     */
    ModifyClientVpnEndpointResult.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(ModifyClientVpnEndpointResult = exports.ModifyClientVpnEndpointResult || (exports.ModifyClientVpnEndpointResult = {}));
var ModifyDefaultCreditSpecificationRequest;
(function (ModifyDefaultCreditSpecificationRequest) {
    /**
     * @internal
     */
    ModifyDefaultCreditSpecificationRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(ModifyDefaultCreditSpecificationRequest = exports.ModifyDefaultCreditSpecificationRequest || (exports.ModifyDefaultCreditSpecificationRequest = {}));
var ModifyDefaultCreditSpecificationResult;
(function (ModifyDefaultCreditSpecificationResult) {
    /**
     * @internal
     */
    ModifyDefaultCreditSpecificationResult.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(ModifyDefaultCreditSpecificationResult = exports.ModifyDefaultCreditSpecificationResult || (exports.ModifyDefaultCreditSpecificationResult = {}));
var ModifyEbsDefaultKmsKeyIdRequest;
(function (ModifyEbsDefaultKmsKeyIdRequest) {
    /**
     * @internal
     */
    ModifyEbsDefaultKmsKeyIdRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(ModifyEbsDefaultKmsKeyIdRequest = exports.ModifyEbsDefaultKmsKeyIdRequest || (exports.ModifyEbsDefaultKmsKeyIdRequest = {}));
var ModifyEbsDefaultKmsKeyIdResult;
(function (ModifyEbsDefaultKmsKeyIdResult) {
    /**
     * @internal
     */
    ModifyEbsDefaultKmsKeyIdResult.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(ModifyEbsDefaultKmsKeyIdResult = exports.ModifyEbsDefaultKmsKeyIdResult || (exports.ModifyEbsDefaultKmsKeyIdResult = {}));
var ModifyFleetRequest;
(function (ModifyFleetRequest) {
    /**
     * @internal
     */
    ModifyFleetRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(ModifyFleetRequest = exports.ModifyFleetRequest || (exports.ModifyFleetRequest = {}));
var ModifyFleetResult;
(function (ModifyFleetResult) {
    /**
     * @internal
     */
    ModifyFleetResult.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(ModifyFleetResult = exports.ModifyFleetResult || (exports.ModifyFleetResult = {}));
var LoadPermissionRequest;
(function (LoadPermissionRequest) {
    /**
     * @internal
     */
    LoadPermissionRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(LoadPermissionRequest = exports.LoadPermissionRequest || (exports.LoadPermissionRequest = {}));
var LoadPermissionModifications;
(function (LoadPermissionModifications) {
    /**
     * @internal
     */
    LoadPermissionModifications.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(LoadPermissionModifications = exports.LoadPermissionModifications || (exports.LoadPermissionModifications = {}));
var ModifyFpgaImageAttributeRequest;
(function (ModifyFpgaImageAttributeRequest) {
    /**
     * @internal
     */
    ModifyFpgaImageAttributeRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(ModifyFpgaImageAttributeRequest = exports.ModifyFpgaImageAttributeRequest || (exports.ModifyFpgaImageAttributeRequest = {}));
var ModifyFpgaImageAttributeResult;
(function (ModifyFpgaImageAttributeResult) {
    /**
     * @internal
     */
    ModifyFpgaImageAttributeResult.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(ModifyFpgaImageAttributeResult = exports.ModifyFpgaImageAttributeResult || (exports.ModifyFpgaImageAttributeResult = {}));
var ModifyHostsRequest;
(function (ModifyHostsRequest) {
    /**
     * @internal
     */
    ModifyHostsRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(ModifyHostsRequest = exports.ModifyHostsRequest || (exports.ModifyHostsRequest = {}));
var ModifyHostsResult;
(function (ModifyHostsResult) {
    /**
     * @internal
     */
    ModifyHostsResult.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(ModifyHostsResult = exports.ModifyHostsResult || (exports.ModifyHostsResult = {}));
var ModifyIdentityIdFormatRequest;
(function (ModifyIdentityIdFormatRequest) {
    /**
     * @internal
     */
    ModifyIdentityIdFormatRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(ModifyIdentityIdFormatRequest = exports.ModifyIdentityIdFormatRequest || (exports.ModifyIdentityIdFormatRequest = {}));
var ModifyIdFormatRequest;
(function (ModifyIdFormatRequest) {
    /**
     * @internal
     */
    ModifyIdFormatRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(ModifyIdFormatRequest = exports.ModifyIdFormatRequest || (exports.ModifyIdFormatRequest = {}));
var LaunchPermissionModifications;
(function (LaunchPermissionModifications) {
    /**
     * @internal
     */
    LaunchPermissionModifications.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(LaunchPermissionModifications = exports.LaunchPermissionModifications || (exports.LaunchPermissionModifications = {}));
var ModifyImageAttributeRequest;
(function (ModifyImageAttributeRequest) {
    /**
     * @internal
     */
    ModifyImageAttributeRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(ModifyImageAttributeRequest = exports.ModifyImageAttributeRequest || (exports.ModifyImageAttributeRequest = {}));
var EbsInstanceBlockDeviceSpecification;
(function (EbsInstanceBlockDeviceSpecification) {
    /**
     * @internal
     */
    EbsInstanceBlockDeviceSpecification.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(EbsInstanceBlockDeviceSpecification = exports.EbsInstanceBlockDeviceSpecification || (exports.EbsInstanceBlockDeviceSpecification = {}));
var InstanceBlockDeviceMappingSpecification;
(function (InstanceBlockDeviceMappingSpecification) {
    /**
     * @internal
     */
    InstanceBlockDeviceMappingSpecification.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(InstanceBlockDeviceMappingSpecification = exports.InstanceBlockDeviceMappingSpecification || (exports.InstanceBlockDeviceMappingSpecification = {}));
var BlobAttributeValue;
(function (BlobAttributeValue) {
    /**
     * @internal
     */
    BlobAttributeValue.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(BlobAttributeValue = exports.BlobAttributeValue || (exports.BlobAttributeValue = {}));
var ModifyInstanceAttributeRequest;
(function (ModifyInstanceAttributeRequest) {
    /**
     * @internal
     */
    ModifyInstanceAttributeRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(ModifyInstanceAttributeRequest = exports.ModifyInstanceAttributeRequest || (exports.ModifyInstanceAttributeRequest = {}));
var CapacityReservationSpecification;
(function (CapacityReservationSpecification) {
    /**
     * @internal
     */
    CapacityReservationSpecification.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(CapacityReservationSpecification = exports.CapacityReservationSpecification || (exports.CapacityReservationSpecification = {}));
var ModifyInstanceCapacityReservationAttributesRequest;
(function (ModifyInstanceCapacityReservationAttributesRequest) {
    /**
     * @internal
     */
    ModifyInstanceCapacityReservationAttributesRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(ModifyInstanceCapacityReservationAttributesRequest = exports.ModifyInstanceCapacityReservationAttributesRequest || (exports.ModifyInstanceCapacityReservationAttributesRequest = {}));
var ModifyInstanceCapacityReservationAttributesResult;
(function (ModifyInstanceCapacityReservationAttributesResult) {
    /**
     * @internal
     */
    ModifyInstanceCapacityReservationAttributesResult.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(ModifyInstanceCapacityReservationAttributesResult = exports.ModifyInstanceCapacityReservationAttributesResult || (exports.ModifyInstanceCapacityReservationAttributesResult = {}));
var InstanceCreditSpecificationRequest;
(function (InstanceCreditSpecificationRequest) {
    /**
     * @internal
     */
    InstanceCreditSpecificationRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(InstanceCreditSpecificationRequest = exports.InstanceCreditSpecificationRequest || (exports.InstanceCreditSpecificationRequest = {}));
var ModifyInstanceCreditSpecificationRequest;
(function (ModifyInstanceCreditSpecificationRequest) {
    /**
     * @internal
     */
    ModifyInstanceCreditSpecificationRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(ModifyInstanceCreditSpecificationRequest = exports.ModifyInstanceCreditSpecificationRequest || (exports.ModifyInstanceCreditSpecificationRequest = {}));
var SuccessfulInstanceCreditSpecificationItem;
(function (SuccessfulInstanceCreditSpecificationItem) {
    /**
     * @internal
     */
    SuccessfulInstanceCreditSpecificationItem.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(SuccessfulInstanceCreditSpecificationItem = exports.SuccessfulInstanceCreditSpecificationItem || (exports.SuccessfulInstanceCreditSpecificationItem = {}));
var UnsuccessfulInstanceCreditSpecificationErrorCode;
(function (UnsuccessfulInstanceCreditSpecificationErrorCode) {
    UnsuccessfulInstanceCreditSpecificationErrorCode["INCORRECT_INSTANCE_STATE"] = "IncorrectInstanceState";
    UnsuccessfulInstanceCreditSpecificationErrorCode["INSTANCE_CREDIT_SPECIFICATION_NOT_SUPPORTED"] = "InstanceCreditSpecification.NotSupported";
    UnsuccessfulInstanceCreditSpecificationErrorCode["INSTANCE_NOT_FOUND"] = "InvalidInstanceID.NotFound";
    UnsuccessfulInstanceCreditSpecificationErrorCode["INVALID_INSTANCE_ID"] = "InvalidInstanceID.Malformed";
})(UnsuccessfulInstanceCreditSpecificationErrorCode = exports.UnsuccessfulInstanceCreditSpecificationErrorCode || (exports.UnsuccessfulInstanceCreditSpecificationErrorCode = {}));
var UnsuccessfulInstanceCreditSpecificationItemError;
(function (UnsuccessfulInstanceCreditSpecificationItemError) {
    /**
     * @internal
     */
    UnsuccessfulInstanceCreditSpecificationItemError.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(UnsuccessfulInstanceCreditSpecificationItemError = exports.UnsuccessfulInstanceCreditSpecificationItemError || (exports.UnsuccessfulInstanceCreditSpecificationItemError = {}));
var UnsuccessfulInstanceCreditSpecificationItem;
(function (UnsuccessfulInstanceCreditSpecificationItem) {
    /**
     * @internal
     */
    UnsuccessfulInstanceCreditSpecificationItem.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(UnsuccessfulInstanceCreditSpecificationItem = exports.UnsuccessfulInstanceCreditSpecificationItem || (exports.UnsuccessfulInstanceCreditSpecificationItem = {}));
var ModifyInstanceCreditSpecificationResult;
(function (ModifyInstanceCreditSpecificationResult) {
    /**
     * @internal
     */
    ModifyInstanceCreditSpecificationResult.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(ModifyInstanceCreditSpecificationResult = exports.ModifyInstanceCreditSpecificationResult || (exports.ModifyInstanceCreditSpecificationResult = {}));
var ModifyInstanceEventStartTimeRequest;
(function (ModifyInstanceEventStartTimeRequest) {
    /**
     * @internal
     */
    ModifyInstanceEventStartTimeRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(ModifyInstanceEventStartTimeRequest = exports.ModifyInstanceEventStartTimeRequest || (exports.ModifyInstanceEventStartTimeRequest = {}));
var ModifyInstanceEventStartTimeResult;
(function (ModifyInstanceEventStartTimeResult) {
    /**
     * @internal
     */
    ModifyInstanceEventStartTimeResult.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(ModifyInstanceEventStartTimeResult = exports.ModifyInstanceEventStartTimeResult || (exports.ModifyInstanceEventStartTimeResult = {}));
var ModifyInstanceMetadataOptionsRequest;
(function (ModifyInstanceMetadataOptionsRequest) {
    /**
     * @internal
     */
    ModifyInstanceMetadataOptionsRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(ModifyInstanceMetadataOptionsRequest = exports.ModifyInstanceMetadataOptionsRequest || (exports.ModifyInstanceMetadataOptionsRequest = {}));
var ModifyInstanceMetadataOptionsResult;
(function (ModifyInstanceMetadataOptionsResult) {
    /**
     * @internal
     */
    ModifyInstanceMetadataOptionsResult.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(ModifyInstanceMetadataOptionsResult = exports.ModifyInstanceMetadataOptionsResult || (exports.ModifyInstanceMetadataOptionsResult = {}));
var ModifyInstancePlacementRequest;
(function (ModifyInstancePlacementRequest) {
    /**
     * @internal
     */
    ModifyInstancePlacementRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(ModifyInstancePlacementRequest = exports.ModifyInstancePlacementRequest || (exports.ModifyInstancePlacementRequest = {}));
var ModifyInstancePlacementResult;
(function (ModifyInstancePlacementResult) {
    /**
     * @internal
     */
    ModifyInstancePlacementResult.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(ModifyInstancePlacementResult = exports.ModifyInstancePlacementResult || (exports.ModifyInstancePlacementResult = {}));
var ModifyLaunchTemplateRequest;
(function (ModifyLaunchTemplateRequest) {
    /**
     * @internal
     */
    ModifyLaunchTemplateRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(ModifyLaunchTemplateRequest = exports.ModifyLaunchTemplateRequest || (exports.ModifyLaunchTemplateRequest = {}));
var ModifyLaunchTemplateResult;
(function (ModifyLaunchTemplateResult) {
    /**
     * @internal
     */
    ModifyLaunchTemplateResult.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(ModifyLaunchTemplateResult = exports.ModifyLaunchTemplateResult || (exports.ModifyLaunchTemplateResult = {}));
var RemovePrefixListEntry;
(function (RemovePrefixListEntry) {
    /**
     * @internal
     */
    RemovePrefixListEntry.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(RemovePrefixListEntry = exports.RemovePrefixListEntry || (exports.RemovePrefixListEntry = {}));
var ModifyManagedPrefixListRequest;
(function (ModifyManagedPrefixListRequest) {
    /**
     * @internal
     */
    ModifyManagedPrefixListRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(ModifyManagedPrefixListRequest = exports.ModifyManagedPrefixListRequest || (exports.ModifyManagedPrefixListRequest = {}));
var ModifyManagedPrefixListResult;
(function (ModifyManagedPrefixListResult) {
    /**
     * @internal
     */
    ModifyManagedPrefixListResult.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(ModifyManagedPrefixListResult = exports.ModifyManagedPrefixListResult || (exports.ModifyManagedPrefixListResult = {}));
var NetworkInterfaceAttachmentChanges;
(function (NetworkInterfaceAttachmentChanges) {
    /**
     * @internal
     */
    NetworkInterfaceAttachmentChanges.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(NetworkInterfaceAttachmentChanges = exports.NetworkInterfaceAttachmentChanges || (exports.NetworkInterfaceAttachmentChanges = {}));
var ModifyNetworkInterfaceAttributeRequest;
(function (ModifyNetworkInterfaceAttributeRequest) {
    /**
     * @internal
     */
    ModifyNetworkInterfaceAttributeRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(ModifyNetworkInterfaceAttributeRequest = exports.ModifyNetworkInterfaceAttributeRequest || (exports.ModifyNetworkInterfaceAttributeRequest = {}));
var ModifyReservedInstancesRequest;
(function (ModifyReservedInstancesRequest) {
    /**
     * @internal
     */
    ModifyReservedInstancesRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(ModifyReservedInstancesRequest = exports.ModifyReservedInstancesRequest || (exports.ModifyReservedInstancesRequest = {}));
var ModifyReservedInstancesResult;
(function (ModifyReservedInstancesResult) {
    /**
     * @internal
     */
    ModifyReservedInstancesResult.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(ModifyReservedInstancesResult = exports.ModifyReservedInstancesResult || (exports.ModifyReservedInstancesResult = {}));
var CreateVolumePermissionModifications;
(function (CreateVolumePermissionModifications) {
    /**
     * @internal
     */
    CreateVolumePermissionModifications.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(CreateVolumePermissionModifications = exports.CreateVolumePermissionModifications || (exports.CreateVolumePermissionModifications = {}));
var ModifySnapshotAttributeRequest;
(function (ModifySnapshotAttributeRequest) {
    /**
     * @internal
     */
    ModifySnapshotAttributeRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(ModifySnapshotAttributeRequest = exports.ModifySnapshotAttributeRequest || (exports.ModifySnapshotAttributeRequest = {}));
var ModifySpotFleetRequestRequest;
(function (ModifySpotFleetRequestRequest) {
    /**
     * @internal
     */
    ModifySpotFleetRequestRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(ModifySpotFleetRequestRequest = exports.ModifySpotFleetRequestRequest || (exports.ModifySpotFleetRequestRequest = {}));
var ModifySpotFleetRequestResponse;
(function (ModifySpotFleetRequestResponse) {
    /**
     * @internal
     */
    ModifySpotFleetRequestResponse.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(ModifySpotFleetRequestResponse = exports.ModifySpotFleetRequestResponse || (exports.ModifySpotFleetRequestResponse = {}));
var ModifySubnetAttributeRequest;
(function (ModifySubnetAttributeRequest) {
    /**
     * @internal
     */
    ModifySubnetAttributeRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(ModifySubnetAttributeRequest = exports.ModifySubnetAttributeRequest || (exports.ModifySubnetAttributeRequest = {}));
var ModifyTrafficMirrorFilterNetworkServicesRequest;
(function (ModifyTrafficMirrorFilterNetworkServicesRequest) {
    /**
     * @internal
     */
    ModifyTrafficMirrorFilterNetworkServicesRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(ModifyTrafficMirrorFilterNetworkServicesRequest = exports.ModifyTrafficMirrorFilterNetworkServicesRequest || (exports.ModifyTrafficMirrorFilterNetworkServicesRequest = {}));
var ModifyTrafficMirrorFilterNetworkServicesResult;
(function (ModifyTrafficMirrorFilterNetworkServicesResult) {
    /**
     * @internal
     */
    ModifyTrafficMirrorFilterNetworkServicesResult.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(ModifyTrafficMirrorFilterNetworkServicesResult = exports.ModifyTrafficMirrorFilterNetworkServicesResult || (exports.ModifyTrafficMirrorFilterNetworkServicesResult = {}));
var ModifyTrafficMirrorFilterRuleRequest;
(function (ModifyTrafficMirrorFilterRuleRequest) {
    /**
     * @internal
     */
    ModifyTrafficMirrorFilterRuleRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(ModifyTrafficMirrorFilterRuleRequest = exports.ModifyTrafficMirrorFilterRuleRequest || (exports.ModifyTrafficMirrorFilterRuleRequest = {}));
var ModifyTrafficMirrorFilterRuleResult;
(function (ModifyTrafficMirrorFilterRuleResult) {
    /**
     * @internal
     */
    ModifyTrafficMirrorFilterRuleResult.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(ModifyTrafficMirrorFilterRuleResult = exports.ModifyTrafficMirrorFilterRuleResult || (exports.ModifyTrafficMirrorFilterRuleResult = {}));
var ModifyTrafficMirrorSessionRequest;
(function (ModifyTrafficMirrorSessionRequest) {
    /**
     * @internal
     */
    ModifyTrafficMirrorSessionRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(ModifyTrafficMirrorSessionRequest = exports.ModifyTrafficMirrorSessionRequest || (exports.ModifyTrafficMirrorSessionRequest = {}));
var ModifyTrafficMirrorSessionResult;
(function (ModifyTrafficMirrorSessionResult) {
    /**
     * @internal
     */
    ModifyTrafficMirrorSessionResult.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(ModifyTrafficMirrorSessionResult = exports.ModifyTrafficMirrorSessionResult || (exports.ModifyTrafficMirrorSessionResult = {}));
var ModifyTransitGatewayOptions;
(function (ModifyTransitGatewayOptions) {
    /**
     * @internal
     */
    ModifyTransitGatewayOptions.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(ModifyTransitGatewayOptions = exports.ModifyTransitGatewayOptions || (exports.ModifyTransitGatewayOptions = {}));
var ModifyTransitGatewayRequest;
(function (ModifyTransitGatewayRequest) {
    /**
     * @internal
     */
    ModifyTransitGatewayRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(ModifyTransitGatewayRequest = exports.ModifyTransitGatewayRequest || (exports.ModifyTransitGatewayRequest = {}));
var ModifyTransitGatewayResult;
(function (ModifyTransitGatewayResult) {
    /**
     * @internal
     */
    ModifyTransitGatewayResult.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(ModifyTransitGatewayResult = exports.ModifyTransitGatewayResult || (exports.ModifyTransitGatewayResult = {}));
var ModifyTransitGatewayPrefixListReferenceRequest;
(function (ModifyTransitGatewayPrefixListReferenceRequest) {
    /**
     * @internal
     */
    ModifyTransitGatewayPrefixListReferenceRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(ModifyTransitGatewayPrefixListReferenceRequest = exports.ModifyTransitGatewayPrefixListReferenceRequest || (exports.ModifyTransitGatewayPrefixListReferenceRequest = {}));
var ModifyTransitGatewayPrefixListReferenceResult;
(function (ModifyTransitGatewayPrefixListReferenceResult) {
    /**
     * @internal
     */
    ModifyTransitGatewayPrefixListReferenceResult.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(ModifyTransitGatewayPrefixListReferenceResult = exports.ModifyTransitGatewayPrefixListReferenceResult || (exports.ModifyTransitGatewayPrefixListReferenceResult = {}));
var ModifyTransitGatewayVpcAttachmentRequestOptions;
(function (ModifyTransitGatewayVpcAttachmentRequestOptions) {
    /**
     * @internal
     */
    ModifyTransitGatewayVpcAttachmentRequestOptions.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(ModifyTransitGatewayVpcAttachmentRequestOptions = exports.ModifyTransitGatewayVpcAttachmentRequestOptions || (exports.ModifyTransitGatewayVpcAttachmentRequestOptions = {}));
var ModifyTransitGatewayVpcAttachmentRequest;
(function (ModifyTransitGatewayVpcAttachmentRequest) {
    /**
     * @internal
     */
    ModifyTransitGatewayVpcAttachmentRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(ModifyTransitGatewayVpcAttachmentRequest = exports.ModifyTransitGatewayVpcAttachmentRequest || (exports.ModifyTransitGatewayVpcAttachmentRequest = {}));
var ModifyTransitGatewayVpcAttachmentResult;
(function (ModifyTransitGatewayVpcAttachmentResult) {
    /**
     * @internal
     */
    ModifyTransitGatewayVpcAttachmentResult.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(ModifyTransitGatewayVpcAttachmentResult = exports.ModifyTransitGatewayVpcAttachmentResult || (exports.ModifyTransitGatewayVpcAttachmentResult = {}));
var ModifyVolumeRequest;
(function (ModifyVolumeRequest) {
    /**
     * @internal
     */
    ModifyVolumeRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(ModifyVolumeRequest = exports.ModifyVolumeRequest || (exports.ModifyVolumeRequest = {}));
var ModifyVolumeResult;
(function (ModifyVolumeResult) {
    /**
     * @internal
     */
    ModifyVolumeResult.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(ModifyVolumeResult = exports.ModifyVolumeResult || (exports.ModifyVolumeResult = {}));
var ModifyVolumeAttributeRequest;
(function (ModifyVolumeAttributeRequest) {
    /**
     * @internal
     */
    ModifyVolumeAttributeRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(ModifyVolumeAttributeRequest = exports.ModifyVolumeAttributeRequest || (exports.ModifyVolumeAttributeRequest = {}));
var ModifyVpcAttributeRequest;
(function (ModifyVpcAttributeRequest) {
    /**
     * @internal
     */
    ModifyVpcAttributeRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(ModifyVpcAttributeRequest = exports.ModifyVpcAttributeRequest || (exports.ModifyVpcAttributeRequest = {}));
var ModifyVpcEndpointRequest;
(function (ModifyVpcEndpointRequest) {
    /**
     * @internal
     */
    ModifyVpcEndpointRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(ModifyVpcEndpointRequest = exports.ModifyVpcEndpointRequest || (exports.ModifyVpcEndpointRequest = {}));
var ModifyVpcEndpointResult;
(function (ModifyVpcEndpointResult) {
    /**
     * @internal
     */
    ModifyVpcEndpointResult.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(ModifyVpcEndpointResult = exports.ModifyVpcEndpointResult || (exports.ModifyVpcEndpointResult = {}));
var ModifyVpcEndpointConnectionNotificationRequest;
(function (ModifyVpcEndpointConnectionNotificationRequest) {
    /**
     * @internal
     */
    ModifyVpcEndpointConnectionNotificationRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(ModifyVpcEndpointConnectionNotificationRequest = exports.ModifyVpcEndpointConnectionNotificationRequest || (exports.ModifyVpcEndpointConnectionNotificationRequest = {}));
var ModifyVpcEndpointConnectionNotificationResult;
(function (ModifyVpcEndpointConnectionNotificationResult) {
    /**
     * @internal
     */
    ModifyVpcEndpointConnectionNotificationResult.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(ModifyVpcEndpointConnectionNotificationResult = exports.ModifyVpcEndpointConnectionNotificationResult || (exports.ModifyVpcEndpointConnectionNotificationResult = {}));
var ModifyVpcEndpointServiceConfigurationRequest;
(function (ModifyVpcEndpointServiceConfigurationRequest) {
    /**
     * @internal
     */
    ModifyVpcEndpointServiceConfigurationRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(ModifyVpcEndpointServiceConfigurationRequest = exports.ModifyVpcEndpointServiceConfigurationRequest || (exports.ModifyVpcEndpointServiceConfigurationRequest = {}));
var ModifyVpcEndpointServiceConfigurationResult;
(function (ModifyVpcEndpointServiceConfigurationResult) {
    /**
     * @internal
     */
    ModifyVpcEndpointServiceConfigurationResult.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(ModifyVpcEndpointServiceConfigurationResult = exports.ModifyVpcEndpointServiceConfigurationResult || (exports.ModifyVpcEndpointServiceConfigurationResult = {}));
var ModifyVpcEndpointServicePermissionsRequest;
(function (ModifyVpcEndpointServicePermissionsRequest) {
    /**
     * @internal
     */
    ModifyVpcEndpointServicePermissionsRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(ModifyVpcEndpointServicePermissionsRequest = exports.ModifyVpcEndpointServicePermissionsRequest || (exports.ModifyVpcEndpointServicePermissionsRequest = {}));
var ModifyVpcEndpointServicePermissionsResult;
(function (ModifyVpcEndpointServicePermissionsResult) {
    /**
     * @internal
     */
    ModifyVpcEndpointServicePermissionsResult.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(ModifyVpcEndpointServicePermissionsResult = exports.ModifyVpcEndpointServicePermissionsResult || (exports.ModifyVpcEndpointServicePermissionsResult = {}));
var PeeringConnectionOptionsRequest;
(function (PeeringConnectionOptionsRequest) {
    /**
     * @internal
     */
    PeeringConnectionOptionsRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(PeeringConnectionOptionsRequest = exports.PeeringConnectionOptionsRequest || (exports.PeeringConnectionOptionsRequest = {}));
var ModifyVpcPeeringConnectionOptionsRequest;
(function (ModifyVpcPeeringConnectionOptionsRequest) {
    /**
     * @internal
     */
    ModifyVpcPeeringConnectionOptionsRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(ModifyVpcPeeringConnectionOptionsRequest = exports.ModifyVpcPeeringConnectionOptionsRequest || (exports.ModifyVpcPeeringConnectionOptionsRequest = {}));
var PeeringConnectionOptions;
(function (PeeringConnectionOptions) {
    /**
     * @internal
     */
    PeeringConnectionOptions.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(PeeringConnectionOptions = exports.PeeringConnectionOptions || (exports.PeeringConnectionOptions = {}));
var ModifyVpcPeeringConnectionOptionsResult;
(function (ModifyVpcPeeringConnectionOptionsResult) {
    /**
     * @internal
     */
    ModifyVpcPeeringConnectionOptionsResult.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(ModifyVpcPeeringConnectionOptionsResult = exports.ModifyVpcPeeringConnectionOptionsResult || (exports.ModifyVpcPeeringConnectionOptionsResult = {}));
var ModifyVpcTenancyRequest;
(function (ModifyVpcTenancyRequest) {
    /**
     * @internal
     */
    ModifyVpcTenancyRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(ModifyVpcTenancyRequest = exports.ModifyVpcTenancyRequest || (exports.ModifyVpcTenancyRequest = {}));
var ModifyVpcTenancyResult;
(function (ModifyVpcTenancyResult) {
    /**
     * @internal
     */
    ModifyVpcTenancyResult.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(ModifyVpcTenancyResult = exports.ModifyVpcTenancyResult || (exports.ModifyVpcTenancyResult = {}));
var ModifyVpnConnectionRequest;
(function (ModifyVpnConnectionRequest) {
    /**
     * @internal
     */
    ModifyVpnConnectionRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(ModifyVpnConnectionRequest = exports.ModifyVpnConnectionRequest || (exports.ModifyVpnConnectionRequest = {}));
var ModifyVpnConnectionResult;
(function (ModifyVpnConnectionResult) {
    /**
     * @internal
     */
    ModifyVpnConnectionResult.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(ModifyVpnConnectionResult = exports.ModifyVpnConnectionResult || (exports.ModifyVpnConnectionResult = {}));
var ModifyVpnConnectionOptionsRequest;
(function (ModifyVpnConnectionOptionsRequest) {
    /**
     * @internal
     */
    ModifyVpnConnectionOptionsRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(ModifyVpnConnectionOptionsRequest = exports.ModifyVpnConnectionOptionsRequest || (exports.ModifyVpnConnectionOptionsRequest = {}));
var ModifyVpnConnectionOptionsResult;
(function (ModifyVpnConnectionOptionsResult) {
    /**
     * @internal
     */
    ModifyVpnConnectionOptionsResult.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(ModifyVpnConnectionOptionsResult = exports.ModifyVpnConnectionOptionsResult || (exports.ModifyVpnConnectionOptionsResult = {}));
var ModifyVpnTunnelCertificateRequest;
(function (ModifyVpnTunnelCertificateRequest) {
    /**
     * @internal
     */
    ModifyVpnTunnelCertificateRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(ModifyVpnTunnelCertificateRequest = exports.ModifyVpnTunnelCertificateRequest || (exports.ModifyVpnTunnelCertificateRequest = {}));
var ModifyVpnTunnelCertificateResult;
(function (ModifyVpnTunnelCertificateResult) {
    /**
     * @internal
     */
    ModifyVpnTunnelCertificateResult.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(ModifyVpnTunnelCertificateResult = exports.ModifyVpnTunnelCertificateResult || (exports.ModifyVpnTunnelCertificateResult = {}));
var ModifyVpnTunnelOptionsSpecification;
(function (ModifyVpnTunnelOptionsSpecification) {
    /**
     * @internal
     */
    ModifyVpnTunnelOptionsSpecification.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(ModifyVpnTunnelOptionsSpecification = exports.ModifyVpnTunnelOptionsSpecification || (exports.ModifyVpnTunnelOptionsSpecification = {}));
var ModifyVpnTunnelOptionsRequest;
(function (ModifyVpnTunnelOptionsRequest) {
    /**
     * @internal
     */
    ModifyVpnTunnelOptionsRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(ModifyVpnTunnelOptionsRequest = exports.ModifyVpnTunnelOptionsRequest || (exports.ModifyVpnTunnelOptionsRequest = {}));
var ModifyVpnTunnelOptionsResult;
(function (ModifyVpnTunnelOptionsResult) {
    /**
     * @internal
     */
    ModifyVpnTunnelOptionsResult.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(ModifyVpnTunnelOptionsResult = exports.ModifyVpnTunnelOptionsResult || (exports.ModifyVpnTunnelOptionsResult = {}));
var MonitorInstancesRequest;
(function (MonitorInstancesRequest) {
    /**
     * @internal
     */
    MonitorInstancesRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(MonitorInstancesRequest = exports.MonitorInstancesRequest || (exports.MonitorInstancesRequest = {}));
var InstanceMonitoring;
(function (InstanceMonitoring) {
    /**
     * @internal
     */
    InstanceMonitoring.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(InstanceMonitoring = exports.InstanceMonitoring || (exports.InstanceMonitoring = {}));
var MonitorInstancesResult;
(function (MonitorInstancesResult) {
    /**
     * @internal
     */
    MonitorInstancesResult.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(MonitorInstancesResult = exports.MonitorInstancesResult || (exports.MonitorInstancesResult = {}));
var MoveAddressToVpcRequest;
(function (MoveAddressToVpcRequest) {
    /**
     * @internal
     */
    MoveAddressToVpcRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(MoveAddressToVpcRequest = exports.MoveAddressToVpcRequest || (exports.MoveAddressToVpcRequest = {}));
var Status;
(function (Status) {
    Status["inClassic"] = "InClassic";
    Status["inVpc"] = "InVpc";
    Status["moveInProgress"] = "MoveInProgress";
})(Status = exports.Status || (exports.Status = {}));
var MoveAddressToVpcResult;
(function (MoveAddressToVpcResult) {
    /**
     * @internal
     */
    MoveAddressToVpcResult.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(MoveAddressToVpcResult = exports.MoveAddressToVpcResult || (exports.MoveAddressToVpcResult = {}));
var CidrAuthorizationContext;
(function (CidrAuthorizationContext) {
    /**
     * @internal
     */
    CidrAuthorizationContext.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(CidrAuthorizationContext = exports.CidrAuthorizationContext || (exports.CidrAuthorizationContext = {}));
var ProvisionByoipCidrRequest;
(function (ProvisionByoipCidrRequest) {
    /**
     * @internal
     */
    ProvisionByoipCidrRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(ProvisionByoipCidrRequest = exports.ProvisionByoipCidrRequest || (exports.ProvisionByoipCidrRequest = {}));
var ProvisionByoipCidrResult;
(function (ProvisionByoipCidrResult) {
    /**
     * @internal
     */
    ProvisionByoipCidrResult.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(ProvisionByoipCidrResult = exports.ProvisionByoipCidrResult || (exports.ProvisionByoipCidrResult = {}));
var PurchaseHostReservationRequest;
(function (PurchaseHostReservationRequest) {
    /**
     * @internal
     */
    PurchaseHostReservationRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(PurchaseHostReservationRequest = exports.PurchaseHostReservationRequest || (exports.PurchaseHostReservationRequest = {}));
var PurchaseHostReservationResult;
(function (PurchaseHostReservationResult) {
    /**
     * @internal
     */
    PurchaseHostReservationResult.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(PurchaseHostReservationResult = exports.PurchaseHostReservationResult || (exports.PurchaseHostReservationResult = {}));
var ReservedInstanceLimitPrice;
(function (ReservedInstanceLimitPrice) {
    /**
     * @internal
     */
    ReservedInstanceLimitPrice.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(ReservedInstanceLimitPrice = exports.ReservedInstanceLimitPrice || (exports.ReservedInstanceLimitPrice = {}));
var PurchaseReservedInstancesOfferingRequest;
(function (PurchaseReservedInstancesOfferingRequest) {
    /**
     * @internal
     */
    PurchaseReservedInstancesOfferingRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(PurchaseReservedInstancesOfferingRequest = exports.PurchaseReservedInstancesOfferingRequest || (exports.PurchaseReservedInstancesOfferingRequest = {}));
var PurchaseReservedInstancesOfferingResult;
(function (PurchaseReservedInstancesOfferingResult) {
    /**
     * @internal
     */
    PurchaseReservedInstancesOfferingResult.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(PurchaseReservedInstancesOfferingResult = exports.PurchaseReservedInstancesOfferingResult || (exports.PurchaseReservedInstancesOfferingResult = {}));
var PurchaseRequest;
(function (PurchaseRequest) {
    /**
     * @internal
     */
    PurchaseRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(PurchaseRequest = exports.PurchaseRequest || (exports.PurchaseRequest = {}));
var PurchaseScheduledInstancesRequest;
(function (PurchaseScheduledInstancesRequest) {
    /**
     * @internal
     */
    PurchaseScheduledInstancesRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(PurchaseScheduledInstancesRequest = exports.PurchaseScheduledInstancesRequest || (exports.PurchaseScheduledInstancesRequest = {}));
var PurchaseScheduledInstancesResult;
(function (PurchaseScheduledInstancesResult) {
    /**
     * @internal
     */
    PurchaseScheduledInstancesResult.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(PurchaseScheduledInstancesResult = exports.PurchaseScheduledInstancesResult || (exports.PurchaseScheduledInstancesResult = {}));
var RebootInstancesRequest;
(function (RebootInstancesRequest) {
    /**
     * @internal
     */
    RebootInstancesRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(RebootInstancesRequest = exports.RebootInstancesRequest || (exports.RebootInstancesRequest = {}));
var RegisterImageRequest;
(function (RegisterImageRequest) {
    /**
     * @internal
     */
    RegisterImageRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(RegisterImageRequest = exports.RegisterImageRequest || (exports.RegisterImageRequest = {}));
var RegisterImageResult;
(function (RegisterImageResult) {
    /**
     * @internal
     */
    RegisterImageResult.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(RegisterImageResult = exports.RegisterImageResult || (exports.RegisterImageResult = {}));
var RegisterInstanceTagAttributeRequest;
(function (RegisterInstanceTagAttributeRequest) {
    /**
     * @internal
     */
    RegisterInstanceTagAttributeRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(RegisterInstanceTagAttributeRequest = exports.RegisterInstanceTagAttributeRequest || (exports.RegisterInstanceTagAttributeRequest = {}));
var RegisterInstanceEventNotificationAttributesRequest;
(function (RegisterInstanceEventNotificationAttributesRequest) {
    /**
     * @internal
     */
    RegisterInstanceEventNotificationAttributesRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(RegisterInstanceEventNotificationAttributesRequest = exports.RegisterInstanceEventNotificationAttributesRequest || (exports.RegisterInstanceEventNotificationAttributesRequest = {}));
var RegisterInstanceEventNotificationAttributesResult;
(function (RegisterInstanceEventNotificationAttributesResult) {
    /**
     * @internal
     */
    RegisterInstanceEventNotificationAttributesResult.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(RegisterInstanceEventNotificationAttributesResult = exports.RegisterInstanceEventNotificationAttributesResult || (exports.RegisterInstanceEventNotificationAttributesResult = {}));
var RegisterTransitGatewayMulticastGroupMembersRequest;
(function (RegisterTransitGatewayMulticastGroupMembersRequest) {
    /**
     * @internal
     */
    RegisterTransitGatewayMulticastGroupMembersRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(RegisterTransitGatewayMulticastGroupMembersRequest = exports.RegisterTransitGatewayMulticastGroupMembersRequest || (exports.RegisterTransitGatewayMulticastGroupMembersRequest = {}));
var TransitGatewayMulticastRegisteredGroupMembers;
(function (TransitGatewayMulticastRegisteredGroupMembers) {
    /**
     * @internal
     */
    TransitGatewayMulticastRegisteredGroupMembers.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(TransitGatewayMulticastRegisteredGroupMembers = exports.TransitGatewayMulticastRegisteredGroupMembers || (exports.TransitGatewayMulticastRegisteredGroupMembers = {}));
var RegisterTransitGatewayMulticastGroupMembersResult;
(function (RegisterTransitGatewayMulticastGroupMembersResult) {
    /**
     * @internal
     */
    RegisterTransitGatewayMulticastGroupMembersResult.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(RegisterTransitGatewayMulticastGroupMembersResult = exports.RegisterTransitGatewayMulticastGroupMembersResult || (exports.RegisterTransitGatewayMulticastGroupMembersResult = {}));
var RegisterTransitGatewayMulticastGroupSourcesRequest;
(function (RegisterTransitGatewayMulticastGroupSourcesRequest) {
    /**
     * @internal
     */
    RegisterTransitGatewayMulticastGroupSourcesRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(RegisterTransitGatewayMulticastGroupSourcesRequest = exports.RegisterTransitGatewayMulticastGroupSourcesRequest || (exports.RegisterTransitGatewayMulticastGroupSourcesRequest = {}));
var TransitGatewayMulticastRegisteredGroupSources;
(function (TransitGatewayMulticastRegisteredGroupSources) {
    /**
     * @internal
     */
    TransitGatewayMulticastRegisteredGroupSources.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(TransitGatewayMulticastRegisteredGroupSources = exports.TransitGatewayMulticastRegisteredGroupSources || (exports.TransitGatewayMulticastRegisteredGroupSources = {}));
var RegisterTransitGatewayMulticastGroupSourcesResult;
(function (RegisterTransitGatewayMulticastGroupSourcesResult) {
    /**
     * @internal
     */
    RegisterTransitGatewayMulticastGroupSourcesResult.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(RegisterTransitGatewayMulticastGroupSourcesResult = exports.RegisterTransitGatewayMulticastGroupSourcesResult || (exports.RegisterTransitGatewayMulticastGroupSourcesResult = {}));
var RejectTransitGatewayMulticastDomainAssociationsRequest;
(function (RejectTransitGatewayMulticastDomainAssociationsRequest) {
    /**
     * @internal
     */
    RejectTransitGatewayMulticastDomainAssociationsRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(RejectTransitGatewayMulticastDomainAssociationsRequest = exports.RejectTransitGatewayMulticastDomainAssociationsRequest || (exports.RejectTransitGatewayMulticastDomainAssociationsRequest = {}));
var RejectTransitGatewayMulticastDomainAssociationsResult;
(function (RejectTransitGatewayMulticastDomainAssociationsResult) {
    /**
     * @internal
     */
    RejectTransitGatewayMulticastDomainAssociationsResult.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(RejectTransitGatewayMulticastDomainAssociationsResult = exports.RejectTransitGatewayMulticastDomainAssociationsResult || (exports.RejectTransitGatewayMulticastDomainAssociationsResult = {}));
var RejectTransitGatewayPeeringAttachmentRequest;
(function (RejectTransitGatewayPeeringAttachmentRequest) {
    /**
     * @internal
     */
    RejectTransitGatewayPeeringAttachmentRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(RejectTransitGatewayPeeringAttachmentRequest = exports.RejectTransitGatewayPeeringAttachmentRequest || (exports.RejectTransitGatewayPeeringAttachmentRequest = {}));
var RejectTransitGatewayPeeringAttachmentResult;
(function (RejectTransitGatewayPeeringAttachmentResult) {
    /**
     * @internal
     */
    RejectTransitGatewayPeeringAttachmentResult.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(RejectTransitGatewayPeeringAttachmentResult = exports.RejectTransitGatewayPeeringAttachmentResult || (exports.RejectTransitGatewayPeeringAttachmentResult = {}));
var RejectTransitGatewayVpcAttachmentRequest;
(function (RejectTransitGatewayVpcAttachmentRequest) {
    /**
     * @internal
     */
    RejectTransitGatewayVpcAttachmentRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(RejectTransitGatewayVpcAttachmentRequest = exports.RejectTransitGatewayVpcAttachmentRequest || (exports.RejectTransitGatewayVpcAttachmentRequest = {}));
var RejectTransitGatewayVpcAttachmentResult;
(function (RejectTransitGatewayVpcAttachmentResult) {
    /**
     * @internal
     */
    RejectTransitGatewayVpcAttachmentResult.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(RejectTransitGatewayVpcAttachmentResult = exports.RejectTransitGatewayVpcAttachmentResult || (exports.RejectTransitGatewayVpcAttachmentResult = {}));
var RejectVpcEndpointConnectionsRequest;
(function (RejectVpcEndpointConnectionsRequest) {
    /**
     * @internal
     */
    RejectVpcEndpointConnectionsRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(RejectVpcEndpointConnectionsRequest = exports.RejectVpcEndpointConnectionsRequest || (exports.RejectVpcEndpointConnectionsRequest = {}));
var RejectVpcEndpointConnectionsResult;
(function (RejectVpcEndpointConnectionsResult) {
    /**
     * @internal
     */
    RejectVpcEndpointConnectionsResult.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(RejectVpcEndpointConnectionsResult = exports.RejectVpcEndpointConnectionsResult || (exports.RejectVpcEndpointConnectionsResult = {}));
var RejectVpcPeeringConnectionRequest;
(function (RejectVpcPeeringConnectionRequest) {
    /**
     * @internal
     */
    RejectVpcPeeringConnectionRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(RejectVpcPeeringConnectionRequest = exports.RejectVpcPeeringConnectionRequest || (exports.RejectVpcPeeringConnectionRequest = {}));
var RejectVpcPeeringConnectionResult;
(function (RejectVpcPeeringConnectionResult) {
    /**
     * @internal
     */
    RejectVpcPeeringConnectionResult.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(RejectVpcPeeringConnectionResult = exports.RejectVpcPeeringConnectionResult || (exports.RejectVpcPeeringConnectionResult = {}));
var ReleaseAddressRequest;
(function (ReleaseAddressRequest) {
    /**
     * @internal
     */
    ReleaseAddressRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(ReleaseAddressRequest = exports.ReleaseAddressRequest || (exports.ReleaseAddressRequest = {}));
var ReleaseHostsRequest;
(function (ReleaseHostsRequest) {
    /**
     * @internal
     */
    ReleaseHostsRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(ReleaseHostsRequest = exports.ReleaseHostsRequest || (exports.ReleaseHostsRequest = {}));
var ReleaseHostsResult;
(function (ReleaseHostsResult) {
    /**
     * @internal
     */
    ReleaseHostsResult.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(ReleaseHostsResult = exports.ReleaseHostsResult || (exports.ReleaseHostsResult = {}));
var ReplaceIamInstanceProfileAssociationRequest;
(function (ReplaceIamInstanceProfileAssociationRequest) {
    /**
     * @internal
     */
    ReplaceIamInstanceProfileAssociationRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(ReplaceIamInstanceProfileAssociationRequest = exports.ReplaceIamInstanceProfileAssociationRequest || (exports.ReplaceIamInstanceProfileAssociationRequest = {}));
var ReplaceIamInstanceProfileAssociationResult;
(function (ReplaceIamInstanceProfileAssociationResult) {
    /**
     * @internal
     */
    ReplaceIamInstanceProfileAssociationResult.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(ReplaceIamInstanceProfileAssociationResult = exports.ReplaceIamInstanceProfileAssociationResult || (exports.ReplaceIamInstanceProfileAssociationResult = {}));
var ReplaceNetworkAclAssociationRequest;
(function (ReplaceNetworkAclAssociationRequest) {
    /**
     * @internal
     */
    ReplaceNetworkAclAssociationRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(ReplaceNetworkAclAssociationRequest = exports.ReplaceNetworkAclAssociationRequest || (exports.ReplaceNetworkAclAssociationRequest = {}));
var ReplaceNetworkAclAssociationResult;
(function (ReplaceNetworkAclAssociationResult) {
    /**
     * @internal
     */
    ReplaceNetworkAclAssociationResult.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(ReplaceNetworkAclAssociationResult = exports.ReplaceNetworkAclAssociationResult || (exports.ReplaceNetworkAclAssociationResult = {}));
var ReplaceNetworkAclEntryRequest;
(function (ReplaceNetworkAclEntryRequest) {
    /**
     * @internal
     */
    ReplaceNetworkAclEntryRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(ReplaceNetworkAclEntryRequest = exports.ReplaceNetworkAclEntryRequest || (exports.ReplaceNetworkAclEntryRequest = {}));
var ReplaceRouteRequest;
(function (ReplaceRouteRequest) {
    /**
     * @internal
     */
    ReplaceRouteRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(ReplaceRouteRequest = exports.ReplaceRouteRequest || (exports.ReplaceRouteRequest = {}));
//# sourceMappingURL=models_4.js.map