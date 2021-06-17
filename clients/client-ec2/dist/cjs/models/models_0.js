"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AlternatePathHint = exports.AllowedPrincipal = exports.PrincipalType = exports.AllocationStrategy = exports.AllocateHostsResult = exports.AllocateHostsRequest = exports.AllocateAddressResult = exports.AllocateAddressRequest = exports.TagSpecification = exports.AdvertiseByoipCidrResult = exports.ByoipCidr = exports.AdvertiseByoipCidrRequest = exports.AddressAttribute = exports.PtrUpdateStatus = exports.Address = exports.AddPrefixListEntry = exports.ActivityStatus = exports.ActiveInstance = exports.InstanceHealthStatus = exports.AccountAttribute = exports.AccountAttributeValue = exports.AcceptVpcPeeringConnectionResult = exports.VpcPeeringConnection = exports.VpcPeeringConnectionStateReason = exports.VpcPeeringConnectionVpcInfo = exports.VpcPeeringConnectionOptionsDescription = exports.Ipv6CidrBlock = exports.CidrBlock = exports.AcceptVpcPeeringConnectionRequest = exports.AcceptVpcEndpointConnectionsResult = exports.UnsuccessfulItem = exports.UnsuccessfulItemError = exports.AcceptVpcEndpointConnectionsRequest = exports.AcceptTransitGatewayVpcAttachmentResult = exports.TransitGatewayVpcAttachment = exports.TransitGatewayVpcAttachmentOptions = exports.AcceptTransitGatewayVpcAttachmentRequest = exports.AcceptTransitGatewayPeeringAttachmentResult = exports.TransitGatewayPeeringAttachment = exports.Tag = exports.PeeringAttachmentStatus = exports.PeeringTgwInfo = exports.AcceptTransitGatewayPeeringAttachmentRequest = exports.AcceptTransitGatewayMulticastDomainAssociationsResult = exports.TransitGatewayMulticastDomainAssociations = exports.SubnetAssociation = exports.AcceptTransitGatewayMulticastDomainAssociationsRequest = exports.AcceptReservedInstancesExchangeQuoteResult = exports.AcceptReservedInstancesExchangeQuoteRequest = exports.TargetConfigurationRequest = void 0;
exports.ClientVpnAuthorizationRuleStatus = exports.AuthorizeClientVpnIngressRequest = exports.AttachVpnGatewayResult = exports.VpcAttachment = exports.AttachVpnGatewayRequest = exports.VolumeAttachment = exports.AttachVolumeRequest = exports.AttachNetworkInterfaceResult = exports.AttachNetworkInterfaceRequest = exports.AttachInternetGatewayRequest = exports.AttachClassicLinkVpcResult = exports.AttachClassicLinkVpcRequest = exports.AssociateVpcCidrBlockResult = exports.VpcIpv6CidrBlockAssociation = exports.VpcCidrBlockAssociation = exports.VpcCidrBlockState = exports.AssociateVpcCidrBlockRequest = exports.AssociateTransitGatewayRouteTableResult = exports.TransitGatewayAssociation = exports.AssociateTransitGatewayRouteTableRequest = exports.AssociateTransitGatewayMulticastDomainResult = exports.AssociateTransitGatewayMulticastDomainRequest = exports.AssociateSubnetCidrBlockResult = exports.SubnetIpv6CidrBlockAssociation = exports.SubnetCidrBlockState = exports.AssociateSubnetCidrBlockRequest = exports.AssociateRouteTableResult = exports.RouteTableAssociationState = exports.AssociateRouteTableRequest = exports.AssociateIamInstanceProfileResult = exports.IamInstanceProfileAssociation = exports.IamInstanceProfileAssociationState = exports.IamInstanceProfile = exports.AssociateIamInstanceProfileRequest = exports.IamInstanceProfileSpecification = exports.AssociateEnclaveCertificateIamRoleResult = exports.AssociateEnclaveCertificateIamRoleRequest = exports.AssociateDhcpOptionsRequest = exports.AssociateClientVpnTargetNetworkResult = exports.AssociationStatus = exports.AssociateClientVpnTargetNetworkRequest = exports.AssociateAddressResult = exports.AssociateAddressRequest = exports.AssignPrivateIpAddressesResult = exports.AssignedPrivateIpAddress = exports.AssignPrivateIpAddressesRequest = exports.AssignIpv6AddressesResult = exports.AssignIpv6AddressesRequest = exports.ApplySecurityGroupsToClientVpnTargetNetworkResult = exports.ApplySecurityGroupsToClientVpnTargetNetworkRequest = void 0;
exports.CreateCarrierGatewayRequest = exports.CreateCapacityReservationResult = exports.CapacityReservation = exports.CreateCapacityReservationRequest = exports.CapacityReservationInstancePlatform = exports.CopySnapshotResult = exports.CopySnapshotRequest = exports.CopyImageResult = exports.CopyImageRequest = exports.CopyFpgaImageResult = exports.CopyFpgaImageRequest = exports.ConfirmProductInstanceResult = exports.ConfirmProductInstanceRequest = exports.CancelSpotInstanceRequestsResult = exports.CancelledSpotInstanceRequest = exports.CancelSpotInstanceRequestsRequest = exports.CancelSpotFleetRequestsResponse = exports.CancelSpotFleetRequestsErrorItem = exports.CancelSpotFleetRequestsError = exports.CancelBatchErrorCode = exports.CancelSpotFleetRequestsSuccessItem = exports.BatchState = exports.CancelSpotFleetRequestsRequest = exports.CancelReservedInstancesListingResult = exports.ReservedInstancesListing = exports.PriceSchedule = exports.InstanceCount = exports.CancelReservedInstancesListingRequest = exports.CancelImportTaskResult = exports.CancelImportTaskRequest = exports.CancelExportTaskRequest = exports.CancelConversionRequest = exports.CancelCapacityReservationResult = exports.CancelCapacityReservationRequest = exports.CancelBundleTaskResult = exports.CancelBundleTaskRequest = exports.BundleInstanceResult = exports.BundleTask = exports.BundleTaskError = exports.BundleInstanceRequest = exports.Storage = exports.S3Storage = exports.AuthorizeSecurityGroupIngressRequest = exports.AuthorizeSecurityGroupEgressRequest = exports.IpPermission = exports.UserIdGroupPair = exports.PrefixListId = exports.Ipv6Range = exports.IpRange = exports.AuthorizeClientVpnIngressResult = void 0;
exports.FleetType = exports.TargetCapacitySpecificationRequest = exports.DefaultTargetCapacityType = exports.SpotOptionsRequest = exports.FleetSpotMaintenanceStrategiesRequest = exports.FleetSpotCapacityRebalanceRequest = exports.FleetReplacementStrategy = exports.SpotAllocationStrategy = exports.OnDemandOptionsRequest = exports.CapacityReservationOptionsRequest = exports.FleetCapacityReservationUsageStrategy = exports.FleetOnDemandAllocationStrategy = exports.FleetLaunchTemplateConfigRequest = exports.FleetLaunchTemplateOverridesRequest = exports.Placement = exports.FleetLaunchTemplateSpecificationRequest = exports.FleetExcessCapacityTerminationPolicy = exports.CreateEgressOnlyInternetGatewayResult = exports.EgressOnlyInternetGateway = exports.InternetGatewayAttachment = exports.CreateEgressOnlyInternetGatewayRequest = exports.CreateDhcpOptionsResult = exports.DhcpOptions = exports.DhcpConfiguration = exports.AttributeValue = exports.CreateDhcpOptionsRequest = exports.NewDhcpConfiguration = exports.CreateDefaultVpcResult = exports.Vpc = exports.CreateDefaultVpcRequest = exports.CreateDefaultSubnetResult = exports.Subnet = exports.CreateDefaultSubnetRequest = exports.CreateCustomerGatewayResult = exports.CustomerGateway = exports.CreateCustomerGatewayRequest = exports.CreateClientVpnRouteResult = exports.ClientVpnRouteStatus = exports.CreateClientVpnRouteRequest = exports.CreateClientVpnEndpointResult = exports.ClientVpnEndpointStatus = exports.CreateClientVpnEndpointRequest = exports.ConnectionLogOptions = exports.ClientConnectOptions = exports.ClientVpnAuthenticationRequest = exports.CertificateAuthenticationRequest = exports.FederatedAuthenticationRequest = exports.DirectoryServiceAuthenticationRequest = exports.CreateCarrierGatewayResult = exports.CarrierGateway = void 0;
exports.LaunchTemplateIamInstanceProfileSpecificationRequest = exports.LaunchTemplateHibernationOptionsRequest = exports.LaunchTemplateEnclaveOptionsRequest = exports.LaunchTemplateElasticInferenceAccelerator = exports.ElasticGpuSpecification = exports.CreditSpecificationRequest = exports.LaunchTemplateCpuOptionsRequest = exports.LaunchTemplateCapacityReservationSpecificationRequest = exports.CapacityReservationTarget = exports.LaunchTemplateBlockDeviceMappingRequest = exports.LaunchTemplateEbsBlockDeviceRequest = exports.KeyPair = exports.CreateKeyPairRequest = exports.CreateInternetGatewayResult = exports.InternetGateway = exports.CreateInternetGatewayRequest = exports.CreateInstanceExportTaskResult = exports.ExportTask = exports.InstanceExportDetails = exports.ExportToS3Task = exports.CreateInstanceExportTaskRequest = exports.ExportToS3TaskSpecification = exports.CreateImageResult = exports.CreateImageRequest = exports.BlockDeviceMapping = exports.EbsBlockDevice = exports.CreateFpgaImageResult = exports.CreateFpgaImageRequest = exports.StorageLocation = exports.CreateFlowLogsResult = exports.CreateFlowLogsRequest = exports.CreateFleetResult = exports.CreateFleetInstance = exports.CreateFleetError = exports.InstanceLifecycle = exports.LaunchTemplateAndOverridesResponse = exports.FleetLaunchTemplateOverrides = exports.PlacementResponse = exports.FleetLaunchTemplateSpecification = exports.CreateFleetRequest = void 0;
const smithy_client_1 = require("@aws-sdk/smithy-client");
var TargetConfigurationRequest;
(function (TargetConfigurationRequest) {
    /**
     * @internal
     */
    TargetConfigurationRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(TargetConfigurationRequest = exports.TargetConfigurationRequest || (exports.TargetConfigurationRequest = {}));
var AcceptReservedInstancesExchangeQuoteRequest;
(function (AcceptReservedInstancesExchangeQuoteRequest) {
    /**
     * @internal
     */
    AcceptReservedInstancesExchangeQuoteRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(AcceptReservedInstancesExchangeQuoteRequest = exports.AcceptReservedInstancesExchangeQuoteRequest || (exports.AcceptReservedInstancesExchangeQuoteRequest = {}));
var AcceptReservedInstancesExchangeQuoteResult;
(function (AcceptReservedInstancesExchangeQuoteResult) {
    /**
     * @internal
     */
    AcceptReservedInstancesExchangeQuoteResult.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(AcceptReservedInstancesExchangeQuoteResult = exports.AcceptReservedInstancesExchangeQuoteResult || (exports.AcceptReservedInstancesExchangeQuoteResult = {}));
var AcceptTransitGatewayMulticastDomainAssociationsRequest;
(function (AcceptTransitGatewayMulticastDomainAssociationsRequest) {
    /**
     * @internal
     */
    AcceptTransitGatewayMulticastDomainAssociationsRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(AcceptTransitGatewayMulticastDomainAssociationsRequest = exports.AcceptTransitGatewayMulticastDomainAssociationsRequest || (exports.AcceptTransitGatewayMulticastDomainAssociationsRequest = {}));
var SubnetAssociation;
(function (SubnetAssociation) {
    /**
     * @internal
     */
    SubnetAssociation.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(SubnetAssociation = exports.SubnetAssociation || (exports.SubnetAssociation = {}));
var TransitGatewayMulticastDomainAssociations;
(function (TransitGatewayMulticastDomainAssociations) {
    /**
     * @internal
     */
    TransitGatewayMulticastDomainAssociations.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(TransitGatewayMulticastDomainAssociations = exports.TransitGatewayMulticastDomainAssociations || (exports.TransitGatewayMulticastDomainAssociations = {}));
var AcceptTransitGatewayMulticastDomainAssociationsResult;
(function (AcceptTransitGatewayMulticastDomainAssociationsResult) {
    /**
     * @internal
     */
    AcceptTransitGatewayMulticastDomainAssociationsResult.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(AcceptTransitGatewayMulticastDomainAssociationsResult = exports.AcceptTransitGatewayMulticastDomainAssociationsResult || (exports.AcceptTransitGatewayMulticastDomainAssociationsResult = {}));
var AcceptTransitGatewayPeeringAttachmentRequest;
(function (AcceptTransitGatewayPeeringAttachmentRequest) {
    /**
     * @internal
     */
    AcceptTransitGatewayPeeringAttachmentRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(AcceptTransitGatewayPeeringAttachmentRequest = exports.AcceptTransitGatewayPeeringAttachmentRequest || (exports.AcceptTransitGatewayPeeringAttachmentRequest = {}));
var PeeringTgwInfo;
(function (PeeringTgwInfo) {
    /**
     * @internal
     */
    PeeringTgwInfo.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(PeeringTgwInfo = exports.PeeringTgwInfo || (exports.PeeringTgwInfo = {}));
var PeeringAttachmentStatus;
(function (PeeringAttachmentStatus) {
    /**
     * @internal
     */
    PeeringAttachmentStatus.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(PeeringAttachmentStatus = exports.PeeringAttachmentStatus || (exports.PeeringAttachmentStatus = {}));
var Tag;
(function (Tag) {
    /**
     * @internal
     */
    Tag.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(Tag = exports.Tag || (exports.Tag = {}));
var TransitGatewayPeeringAttachment;
(function (TransitGatewayPeeringAttachment) {
    /**
     * @internal
     */
    TransitGatewayPeeringAttachment.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(TransitGatewayPeeringAttachment = exports.TransitGatewayPeeringAttachment || (exports.TransitGatewayPeeringAttachment = {}));
var AcceptTransitGatewayPeeringAttachmentResult;
(function (AcceptTransitGatewayPeeringAttachmentResult) {
    /**
     * @internal
     */
    AcceptTransitGatewayPeeringAttachmentResult.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(AcceptTransitGatewayPeeringAttachmentResult = exports.AcceptTransitGatewayPeeringAttachmentResult || (exports.AcceptTransitGatewayPeeringAttachmentResult = {}));
var AcceptTransitGatewayVpcAttachmentRequest;
(function (AcceptTransitGatewayVpcAttachmentRequest) {
    /**
     * @internal
     */
    AcceptTransitGatewayVpcAttachmentRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(AcceptTransitGatewayVpcAttachmentRequest = exports.AcceptTransitGatewayVpcAttachmentRequest || (exports.AcceptTransitGatewayVpcAttachmentRequest = {}));
var TransitGatewayVpcAttachmentOptions;
(function (TransitGatewayVpcAttachmentOptions) {
    /**
     * @internal
     */
    TransitGatewayVpcAttachmentOptions.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(TransitGatewayVpcAttachmentOptions = exports.TransitGatewayVpcAttachmentOptions || (exports.TransitGatewayVpcAttachmentOptions = {}));
var TransitGatewayVpcAttachment;
(function (TransitGatewayVpcAttachment) {
    /**
     * @internal
     */
    TransitGatewayVpcAttachment.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(TransitGatewayVpcAttachment = exports.TransitGatewayVpcAttachment || (exports.TransitGatewayVpcAttachment = {}));
var AcceptTransitGatewayVpcAttachmentResult;
(function (AcceptTransitGatewayVpcAttachmentResult) {
    /**
     * @internal
     */
    AcceptTransitGatewayVpcAttachmentResult.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(AcceptTransitGatewayVpcAttachmentResult = exports.AcceptTransitGatewayVpcAttachmentResult || (exports.AcceptTransitGatewayVpcAttachmentResult = {}));
var AcceptVpcEndpointConnectionsRequest;
(function (AcceptVpcEndpointConnectionsRequest) {
    /**
     * @internal
     */
    AcceptVpcEndpointConnectionsRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(AcceptVpcEndpointConnectionsRequest = exports.AcceptVpcEndpointConnectionsRequest || (exports.AcceptVpcEndpointConnectionsRequest = {}));
var UnsuccessfulItemError;
(function (UnsuccessfulItemError) {
    /**
     * @internal
     */
    UnsuccessfulItemError.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(UnsuccessfulItemError = exports.UnsuccessfulItemError || (exports.UnsuccessfulItemError = {}));
var UnsuccessfulItem;
(function (UnsuccessfulItem) {
    /**
     * @internal
     */
    UnsuccessfulItem.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(UnsuccessfulItem = exports.UnsuccessfulItem || (exports.UnsuccessfulItem = {}));
var AcceptVpcEndpointConnectionsResult;
(function (AcceptVpcEndpointConnectionsResult) {
    /**
     * @internal
     */
    AcceptVpcEndpointConnectionsResult.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(AcceptVpcEndpointConnectionsResult = exports.AcceptVpcEndpointConnectionsResult || (exports.AcceptVpcEndpointConnectionsResult = {}));
var AcceptVpcPeeringConnectionRequest;
(function (AcceptVpcPeeringConnectionRequest) {
    /**
     * @internal
     */
    AcceptVpcPeeringConnectionRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(AcceptVpcPeeringConnectionRequest = exports.AcceptVpcPeeringConnectionRequest || (exports.AcceptVpcPeeringConnectionRequest = {}));
var CidrBlock;
(function (CidrBlock) {
    /**
     * @internal
     */
    CidrBlock.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(CidrBlock = exports.CidrBlock || (exports.CidrBlock = {}));
var Ipv6CidrBlock;
(function (Ipv6CidrBlock) {
    /**
     * @internal
     */
    Ipv6CidrBlock.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(Ipv6CidrBlock = exports.Ipv6CidrBlock || (exports.Ipv6CidrBlock = {}));
var VpcPeeringConnectionOptionsDescription;
(function (VpcPeeringConnectionOptionsDescription) {
    /**
     * @internal
     */
    VpcPeeringConnectionOptionsDescription.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(VpcPeeringConnectionOptionsDescription = exports.VpcPeeringConnectionOptionsDescription || (exports.VpcPeeringConnectionOptionsDescription = {}));
var VpcPeeringConnectionVpcInfo;
(function (VpcPeeringConnectionVpcInfo) {
    /**
     * @internal
     */
    VpcPeeringConnectionVpcInfo.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(VpcPeeringConnectionVpcInfo = exports.VpcPeeringConnectionVpcInfo || (exports.VpcPeeringConnectionVpcInfo = {}));
var VpcPeeringConnectionStateReason;
(function (VpcPeeringConnectionStateReason) {
    /**
     * @internal
     */
    VpcPeeringConnectionStateReason.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(VpcPeeringConnectionStateReason = exports.VpcPeeringConnectionStateReason || (exports.VpcPeeringConnectionStateReason = {}));
var VpcPeeringConnection;
(function (VpcPeeringConnection) {
    /**
     * @internal
     */
    VpcPeeringConnection.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(VpcPeeringConnection = exports.VpcPeeringConnection || (exports.VpcPeeringConnection = {}));
var AcceptVpcPeeringConnectionResult;
(function (AcceptVpcPeeringConnectionResult) {
    /**
     * @internal
     */
    AcceptVpcPeeringConnectionResult.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(AcceptVpcPeeringConnectionResult = exports.AcceptVpcPeeringConnectionResult || (exports.AcceptVpcPeeringConnectionResult = {}));
var AccountAttributeValue;
(function (AccountAttributeValue) {
    /**
     * @internal
     */
    AccountAttributeValue.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(AccountAttributeValue = exports.AccountAttributeValue || (exports.AccountAttributeValue = {}));
var AccountAttribute;
(function (AccountAttribute) {
    /**
     * @internal
     */
    AccountAttribute.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(AccountAttribute = exports.AccountAttribute || (exports.AccountAttribute = {}));
var InstanceHealthStatus;
(function (InstanceHealthStatus) {
    InstanceHealthStatus["HEALTHY_STATUS"] = "healthy";
    InstanceHealthStatus["UNHEALTHY_STATUS"] = "unhealthy";
})(InstanceHealthStatus = exports.InstanceHealthStatus || (exports.InstanceHealthStatus = {}));
var ActiveInstance;
(function (ActiveInstance) {
    /**
     * @internal
     */
    ActiveInstance.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(ActiveInstance = exports.ActiveInstance || (exports.ActiveInstance = {}));
var ActivityStatus;
(function (ActivityStatus) {
    ActivityStatus["ERROR"] = "error";
    ActivityStatus["FULFILLED"] = "fulfilled";
    ActivityStatus["PENDING_FULFILLMENT"] = "pending_fulfillment";
    ActivityStatus["PENDING_TERMINATION"] = "pending_termination";
})(ActivityStatus = exports.ActivityStatus || (exports.ActivityStatus = {}));
var AddPrefixListEntry;
(function (AddPrefixListEntry) {
    /**
     * @internal
     */
    AddPrefixListEntry.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(AddPrefixListEntry = exports.AddPrefixListEntry || (exports.AddPrefixListEntry = {}));
var Address;
(function (Address) {
    /**
     * @internal
     */
    Address.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(Address = exports.Address || (exports.Address = {}));
var PtrUpdateStatus;
(function (PtrUpdateStatus) {
    /**
     * @internal
     */
    PtrUpdateStatus.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(PtrUpdateStatus = exports.PtrUpdateStatus || (exports.PtrUpdateStatus = {}));
var AddressAttribute;
(function (AddressAttribute) {
    /**
     * @internal
     */
    AddressAttribute.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(AddressAttribute = exports.AddressAttribute || (exports.AddressAttribute = {}));
var AdvertiseByoipCidrRequest;
(function (AdvertiseByoipCidrRequest) {
    /**
     * @internal
     */
    AdvertiseByoipCidrRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(AdvertiseByoipCidrRequest = exports.AdvertiseByoipCidrRequest || (exports.AdvertiseByoipCidrRequest = {}));
var ByoipCidr;
(function (ByoipCidr) {
    /**
     * @internal
     */
    ByoipCidr.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(ByoipCidr = exports.ByoipCidr || (exports.ByoipCidr = {}));
var AdvertiseByoipCidrResult;
(function (AdvertiseByoipCidrResult) {
    /**
     * @internal
     */
    AdvertiseByoipCidrResult.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(AdvertiseByoipCidrResult = exports.AdvertiseByoipCidrResult || (exports.AdvertiseByoipCidrResult = {}));
var TagSpecification;
(function (TagSpecification) {
    /**
     * @internal
     */
    TagSpecification.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(TagSpecification = exports.TagSpecification || (exports.TagSpecification = {}));
var AllocateAddressRequest;
(function (AllocateAddressRequest) {
    /**
     * @internal
     */
    AllocateAddressRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(AllocateAddressRequest = exports.AllocateAddressRequest || (exports.AllocateAddressRequest = {}));
var AllocateAddressResult;
(function (AllocateAddressResult) {
    /**
     * @internal
     */
    AllocateAddressResult.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(AllocateAddressResult = exports.AllocateAddressResult || (exports.AllocateAddressResult = {}));
var AllocateHostsRequest;
(function (AllocateHostsRequest) {
    /**
     * @internal
     */
    AllocateHostsRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(AllocateHostsRequest = exports.AllocateHostsRequest || (exports.AllocateHostsRequest = {}));
var AllocateHostsResult;
(function (AllocateHostsResult) {
    /**
     * @internal
     */
    AllocateHostsResult.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(AllocateHostsResult = exports.AllocateHostsResult || (exports.AllocateHostsResult = {}));
var AllocationStrategy;
(function (AllocationStrategy) {
    AllocationStrategy["CAPACITY_OPTIMIZED"] = "capacityOptimized";
    AllocationStrategy["CAPACITY_OPTIMIZED_PRIORITIZED"] = "capacityOptimizedPrioritized";
    AllocationStrategy["DIVERSIFIED"] = "diversified";
    AllocationStrategy["LOWEST_PRICE"] = "lowestPrice";
})(AllocationStrategy = exports.AllocationStrategy || (exports.AllocationStrategy = {}));
var PrincipalType;
(function (PrincipalType) {
    PrincipalType["Account"] = "Account";
    PrincipalType["All"] = "All";
    PrincipalType["OrganizationUnit"] = "OrganizationUnit";
    PrincipalType["Role"] = "Role";
    PrincipalType["Service"] = "Service";
    PrincipalType["User"] = "User";
})(PrincipalType = exports.PrincipalType || (exports.PrincipalType = {}));
var AllowedPrincipal;
(function (AllowedPrincipal) {
    /**
     * @internal
     */
    AllowedPrincipal.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(AllowedPrincipal = exports.AllowedPrincipal || (exports.AllowedPrincipal = {}));
var AlternatePathHint;
(function (AlternatePathHint) {
    /**
     * @internal
     */
    AlternatePathHint.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(AlternatePathHint = exports.AlternatePathHint || (exports.AlternatePathHint = {}));
var ApplySecurityGroupsToClientVpnTargetNetworkRequest;
(function (ApplySecurityGroupsToClientVpnTargetNetworkRequest) {
    /**
     * @internal
     */
    ApplySecurityGroupsToClientVpnTargetNetworkRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(ApplySecurityGroupsToClientVpnTargetNetworkRequest = exports.ApplySecurityGroupsToClientVpnTargetNetworkRequest || (exports.ApplySecurityGroupsToClientVpnTargetNetworkRequest = {}));
var ApplySecurityGroupsToClientVpnTargetNetworkResult;
(function (ApplySecurityGroupsToClientVpnTargetNetworkResult) {
    /**
     * @internal
     */
    ApplySecurityGroupsToClientVpnTargetNetworkResult.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(ApplySecurityGroupsToClientVpnTargetNetworkResult = exports.ApplySecurityGroupsToClientVpnTargetNetworkResult || (exports.ApplySecurityGroupsToClientVpnTargetNetworkResult = {}));
var AssignIpv6AddressesRequest;
(function (AssignIpv6AddressesRequest) {
    /**
     * @internal
     */
    AssignIpv6AddressesRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(AssignIpv6AddressesRequest = exports.AssignIpv6AddressesRequest || (exports.AssignIpv6AddressesRequest = {}));
var AssignIpv6AddressesResult;
(function (AssignIpv6AddressesResult) {
    /**
     * @internal
     */
    AssignIpv6AddressesResult.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(AssignIpv6AddressesResult = exports.AssignIpv6AddressesResult || (exports.AssignIpv6AddressesResult = {}));
var AssignPrivateIpAddressesRequest;
(function (AssignPrivateIpAddressesRequest) {
    /**
     * @internal
     */
    AssignPrivateIpAddressesRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(AssignPrivateIpAddressesRequest = exports.AssignPrivateIpAddressesRequest || (exports.AssignPrivateIpAddressesRequest = {}));
var AssignedPrivateIpAddress;
(function (AssignedPrivateIpAddress) {
    /**
     * @internal
     */
    AssignedPrivateIpAddress.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(AssignedPrivateIpAddress = exports.AssignedPrivateIpAddress || (exports.AssignedPrivateIpAddress = {}));
var AssignPrivateIpAddressesResult;
(function (AssignPrivateIpAddressesResult) {
    /**
     * @internal
     */
    AssignPrivateIpAddressesResult.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(AssignPrivateIpAddressesResult = exports.AssignPrivateIpAddressesResult || (exports.AssignPrivateIpAddressesResult = {}));
var AssociateAddressRequest;
(function (AssociateAddressRequest) {
    /**
     * @internal
     */
    AssociateAddressRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(AssociateAddressRequest = exports.AssociateAddressRequest || (exports.AssociateAddressRequest = {}));
var AssociateAddressResult;
(function (AssociateAddressResult) {
    /**
     * @internal
     */
    AssociateAddressResult.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(AssociateAddressResult = exports.AssociateAddressResult || (exports.AssociateAddressResult = {}));
var AssociateClientVpnTargetNetworkRequest;
(function (AssociateClientVpnTargetNetworkRequest) {
    /**
     * @internal
     */
    AssociateClientVpnTargetNetworkRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(AssociateClientVpnTargetNetworkRequest = exports.AssociateClientVpnTargetNetworkRequest || (exports.AssociateClientVpnTargetNetworkRequest = {}));
var AssociationStatus;
(function (AssociationStatus) {
    /**
     * @internal
     */
    AssociationStatus.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(AssociationStatus = exports.AssociationStatus || (exports.AssociationStatus = {}));
var AssociateClientVpnTargetNetworkResult;
(function (AssociateClientVpnTargetNetworkResult) {
    /**
     * @internal
     */
    AssociateClientVpnTargetNetworkResult.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(AssociateClientVpnTargetNetworkResult = exports.AssociateClientVpnTargetNetworkResult || (exports.AssociateClientVpnTargetNetworkResult = {}));
var AssociateDhcpOptionsRequest;
(function (AssociateDhcpOptionsRequest) {
    /**
     * @internal
     */
    AssociateDhcpOptionsRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(AssociateDhcpOptionsRequest = exports.AssociateDhcpOptionsRequest || (exports.AssociateDhcpOptionsRequest = {}));
var AssociateEnclaveCertificateIamRoleRequest;
(function (AssociateEnclaveCertificateIamRoleRequest) {
    /**
     * @internal
     */
    AssociateEnclaveCertificateIamRoleRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(AssociateEnclaveCertificateIamRoleRequest = exports.AssociateEnclaveCertificateIamRoleRequest || (exports.AssociateEnclaveCertificateIamRoleRequest = {}));
var AssociateEnclaveCertificateIamRoleResult;
(function (AssociateEnclaveCertificateIamRoleResult) {
    /**
     * @internal
     */
    AssociateEnclaveCertificateIamRoleResult.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(AssociateEnclaveCertificateIamRoleResult = exports.AssociateEnclaveCertificateIamRoleResult || (exports.AssociateEnclaveCertificateIamRoleResult = {}));
var IamInstanceProfileSpecification;
(function (IamInstanceProfileSpecification) {
    /**
     * @internal
     */
    IamInstanceProfileSpecification.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(IamInstanceProfileSpecification = exports.IamInstanceProfileSpecification || (exports.IamInstanceProfileSpecification = {}));
var AssociateIamInstanceProfileRequest;
(function (AssociateIamInstanceProfileRequest) {
    /**
     * @internal
     */
    AssociateIamInstanceProfileRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(AssociateIamInstanceProfileRequest = exports.AssociateIamInstanceProfileRequest || (exports.AssociateIamInstanceProfileRequest = {}));
var IamInstanceProfile;
(function (IamInstanceProfile) {
    /**
     * @internal
     */
    IamInstanceProfile.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(IamInstanceProfile = exports.IamInstanceProfile || (exports.IamInstanceProfile = {}));
var IamInstanceProfileAssociationState;
(function (IamInstanceProfileAssociationState) {
    IamInstanceProfileAssociationState["ASSOCIATED"] = "associated";
    IamInstanceProfileAssociationState["ASSOCIATING"] = "associating";
    IamInstanceProfileAssociationState["DISASSOCIATED"] = "disassociated";
    IamInstanceProfileAssociationState["DISASSOCIATING"] = "disassociating";
})(IamInstanceProfileAssociationState = exports.IamInstanceProfileAssociationState || (exports.IamInstanceProfileAssociationState = {}));
var IamInstanceProfileAssociation;
(function (IamInstanceProfileAssociation) {
    /**
     * @internal
     */
    IamInstanceProfileAssociation.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(IamInstanceProfileAssociation = exports.IamInstanceProfileAssociation || (exports.IamInstanceProfileAssociation = {}));
var AssociateIamInstanceProfileResult;
(function (AssociateIamInstanceProfileResult) {
    /**
     * @internal
     */
    AssociateIamInstanceProfileResult.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(AssociateIamInstanceProfileResult = exports.AssociateIamInstanceProfileResult || (exports.AssociateIamInstanceProfileResult = {}));
var AssociateRouteTableRequest;
(function (AssociateRouteTableRequest) {
    /**
     * @internal
     */
    AssociateRouteTableRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(AssociateRouteTableRequest = exports.AssociateRouteTableRequest || (exports.AssociateRouteTableRequest = {}));
var RouteTableAssociationState;
(function (RouteTableAssociationState) {
    /**
     * @internal
     */
    RouteTableAssociationState.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(RouteTableAssociationState = exports.RouteTableAssociationState || (exports.RouteTableAssociationState = {}));
var AssociateRouteTableResult;
(function (AssociateRouteTableResult) {
    /**
     * @internal
     */
    AssociateRouteTableResult.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(AssociateRouteTableResult = exports.AssociateRouteTableResult || (exports.AssociateRouteTableResult = {}));
var AssociateSubnetCidrBlockRequest;
(function (AssociateSubnetCidrBlockRequest) {
    /**
     * @internal
     */
    AssociateSubnetCidrBlockRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(AssociateSubnetCidrBlockRequest = exports.AssociateSubnetCidrBlockRequest || (exports.AssociateSubnetCidrBlockRequest = {}));
var SubnetCidrBlockState;
(function (SubnetCidrBlockState) {
    /**
     * @internal
     */
    SubnetCidrBlockState.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(SubnetCidrBlockState = exports.SubnetCidrBlockState || (exports.SubnetCidrBlockState = {}));
var SubnetIpv6CidrBlockAssociation;
(function (SubnetIpv6CidrBlockAssociation) {
    /**
     * @internal
     */
    SubnetIpv6CidrBlockAssociation.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(SubnetIpv6CidrBlockAssociation = exports.SubnetIpv6CidrBlockAssociation || (exports.SubnetIpv6CidrBlockAssociation = {}));
var AssociateSubnetCidrBlockResult;
(function (AssociateSubnetCidrBlockResult) {
    /**
     * @internal
     */
    AssociateSubnetCidrBlockResult.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(AssociateSubnetCidrBlockResult = exports.AssociateSubnetCidrBlockResult || (exports.AssociateSubnetCidrBlockResult = {}));
var AssociateTransitGatewayMulticastDomainRequest;
(function (AssociateTransitGatewayMulticastDomainRequest) {
    /**
     * @internal
     */
    AssociateTransitGatewayMulticastDomainRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(AssociateTransitGatewayMulticastDomainRequest = exports.AssociateTransitGatewayMulticastDomainRequest || (exports.AssociateTransitGatewayMulticastDomainRequest = {}));
var AssociateTransitGatewayMulticastDomainResult;
(function (AssociateTransitGatewayMulticastDomainResult) {
    /**
     * @internal
     */
    AssociateTransitGatewayMulticastDomainResult.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(AssociateTransitGatewayMulticastDomainResult = exports.AssociateTransitGatewayMulticastDomainResult || (exports.AssociateTransitGatewayMulticastDomainResult = {}));
var AssociateTransitGatewayRouteTableRequest;
(function (AssociateTransitGatewayRouteTableRequest) {
    /**
     * @internal
     */
    AssociateTransitGatewayRouteTableRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(AssociateTransitGatewayRouteTableRequest = exports.AssociateTransitGatewayRouteTableRequest || (exports.AssociateTransitGatewayRouteTableRequest = {}));
var TransitGatewayAssociation;
(function (TransitGatewayAssociation) {
    /**
     * @internal
     */
    TransitGatewayAssociation.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(TransitGatewayAssociation = exports.TransitGatewayAssociation || (exports.TransitGatewayAssociation = {}));
var AssociateTransitGatewayRouteTableResult;
(function (AssociateTransitGatewayRouteTableResult) {
    /**
     * @internal
     */
    AssociateTransitGatewayRouteTableResult.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(AssociateTransitGatewayRouteTableResult = exports.AssociateTransitGatewayRouteTableResult || (exports.AssociateTransitGatewayRouteTableResult = {}));
var AssociateVpcCidrBlockRequest;
(function (AssociateVpcCidrBlockRequest) {
    /**
     * @internal
     */
    AssociateVpcCidrBlockRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(AssociateVpcCidrBlockRequest = exports.AssociateVpcCidrBlockRequest || (exports.AssociateVpcCidrBlockRequest = {}));
var VpcCidrBlockState;
(function (VpcCidrBlockState) {
    /**
     * @internal
     */
    VpcCidrBlockState.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(VpcCidrBlockState = exports.VpcCidrBlockState || (exports.VpcCidrBlockState = {}));
var VpcCidrBlockAssociation;
(function (VpcCidrBlockAssociation) {
    /**
     * @internal
     */
    VpcCidrBlockAssociation.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(VpcCidrBlockAssociation = exports.VpcCidrBlockAssociation || (exports.VpcCidrBlockAssociation = {}));
var VpcIpv6CidrBlockAssociation;
(function (VpcIpv6CidrBlockAssociation) {
    /**
     * @internal
     */
    VpcIpv6CidrBlockAssociation.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(VpcIpv6CidrBlockAssociation = exports.VpcIpv6CidrBlockAssociation || (exports.VpcIpv6CidrBlockAssociation = {}));
var AssociateVpcCidrBlockResult;
(function (AssociateVpcCidrBlockResult) {
    /**
     * @internal
     */
    AssociateVpcCidrBlockResult.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(AssociateVpcCidrBlockResult = exports.AssociateVpcCidrBlockResult || (exports.AssociateVpcCidrBlockResult = {}));
var AttachClassicLinkVpcRequest;
(function (AttachClassicLinkVpcRequest) {
    /**
     * @internal
     */
    AttachClassicLinkVpcRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(AttachClassicLinkVpcRequest = exports.AttachClassicLinkVpcRequest || (exports.AttachClassicLinkVpcRequest = {}));
var AttachClassicLinkVpcResult;
(function (AttachClassicLinkVpcResult) {
    /**
     * @internal
     */
    AttachClassicLinkVpcResult.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(AttachClassicLinkVpcResult = exports.AttachClassicLinkVpcResult || (exports.AttachClassicLinkVpcResult = {}));
var AttachInternetGatewayRequest;
(function (AttachInternetGatewayRequest) {
    /**
     * @internal
     */
    AttachInternetGatewayRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(AttachInternetGatewayRequest = exports.AttachInternetGatewayRequest || (exports.AttachInternetGatewayRequest = {}));
var AttachNetworkInterfaceRequest;
(function (AttachNetworkInterfaceRequest) {
    /**
     * @internal
     */
    AttachNetworkInterfaceRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(AttachNetworkInterfaceRequest = exports.AttachNetworkInterfaceRequest || (exports.AttachNetworkInterfaceRequest = {}));
var AttachNetworkInterfaceResult;
(function (AttachNetworkInterfaceResult) {
    /**
     * @internal
     */
    AttachNetworkInterfaceResult.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(AttachNetworkInterfaceResult = exports.AttachNetworkInterfaceResult || (exports.AttachNetworkInterfaceResult = {}));
var AttachVolumeRequest;
(function (AttachVolumeRequest) {
    /**
     * @internal
     */
    AttachVolumeRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(AttachVolumeRequest = exports.AttachVolumeRequest || (exports.AttachVolumeRequest = {}));
var VolumeAttachment;
(function (VolumeAttachment) {
    /**
     * @internal
     */
    VolumeAttachment.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(VolumeAttachment = exports.VolumeAttachment || (exports.VolumeAttachment = {}));
var AttachVpnGatewayRequest;
(function (AttachVpnGatewayRequest) {
    /**
     * @internal
     */
    AttachVpnGatewayRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(AttachVpnGatewayRequest = exports.AttachVpnGatewayRequest || (exports.AttachVpnGatewayRequest = {}));
var VpcAttachment;
(function (VpcAttachment) {
    /**
     * @internal
     */
    VpcAttachment.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(VpcAttachment = exports.VpcAttachment || (exports.VpcAttachment = {}));
var AttachVpnGatewayResult;
(function (AttachVpnGatewayResult) {
    /**
     * @internal
     */
    AttachVpnGatewayResult.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(AttachVpnGatewayResult = exports.AttachVpnGatewayResult || (exports.AttachVpnGatewayResult = {}));
var AuthorizeClientVpnIngressRequest;
(function (AuthorizeClientVpnIngressRequest) {
    /**
     * @internal
     */
    AuthorizeClientVpnIngressRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(AuthorizeClientVpnIngressRequest = exports.AuthorizeClientVpnIngressRequest || (exports.AuthorizeClientVpnIngressRequest = {}));
var ClientVpnAuthorizationRuleStatus;
(function (ClientVpnAuthorizationRuleStatus) {
    /**
     * @internal
     */
    ClientVpnAuthorizationRuleStatus.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(ClientVpnAuthorizationRuleStatus = exports.ClientVpnAuthorizationRuleStatus || (exports.ClientVpnAuthorizationRuleStatus = {}));
var AuthorizeClientVpnIngressResult;
(function (AuthorizeClientVpnIngressResult) {
    /**
     * @internal
     */
    AuthorizeClientVpnIngressResult.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(AuthorizeClientVpnIngressResult = exports.AuthorizeClientVpnIngressResult || (exports.AuthorizeClientVpnIngressResult = {}));
var IpRange;
(function (IpRange) {
    /**
     * @internal
     */
    IpRange.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(IpRange = exports.IpRange || (exports.IpRange = {}));
var Ipv6Range;
(function (Ipv6Range) {
    /**
     * @internal
     */
    Ipv6Range.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(Ipv6Range = exports.Ipv6Range || (exports.Ipv6Range = {}));
var PrefixListId;
(function (PrefixListId) {
    /**
     * @internal
     */
    PrefixListId.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(PrefixListId = exports.PrefixListId || (exports.PrefixListId = {}));
var UserIdGroupPair;
(function (UserIdGroupPair) {
    /**
     * @internal
     */
    UserIdGroupPair.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(UserIdGroupPair = exports.UserIdGroupPair || (exports.UserIdGroupPair = {}));
var IpPermission;
(function (IpPermission) {
    /**
     * @internal
     */
    IpPermission.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(IpPermission = exports.IpPermission || (exports.IpPermission = {}));
var AuthorizeSecurityGroupEgressRequest;
(function (AuthorizeSecurityGroupEgressRequest) {
    /**
     * @internal
     */
    AuthorizeSecurityGroupEgressRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(AuthorizeSecurityGroupEgressRequest = exports.AuthorizeSecurityGroupEgressRequest || (exports.AuthorizeSecurityGroupEgressRequest = {}));
var AuthorizeSecurityGroupIngressRequest;
(function (AuthorizeSecurityGroupIngressRequest) {
    /**
     * @internal
     */
    AuthorizeSecurityGroupIngressRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(AuthorizeSecurityGroupIngressRequest = exports.AuthorizeSecurityGroupIngressRequest || (exports.AuthorizeSecurityGroupIngressRequest = {}));
var S3Storage;
(function (S3Storage) {
    /**
     * @internal
     */
    S3Storage.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(S3Storage = exports.S3Storage || (exports.S3Storage = {}));
var Storage;
(function (Storage) {
    /**
     * @internal
     */
    Storage.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(Storage = exports.Storage || (exports.Storage = {}));
var BundleInstanceRequest;
(function (BundleInstanceRequest) {
    /**
     * @internal
     */
    BundleInstanceRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(BundleInstanceRequest = exports.BundleInstanceRequest || (exports.BundleInstanceRequest = {}));
var BundleTaskError;
(function (BundleTaskError) {
    /**
     * @internal
     */
    BundleTaskError.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(BundleTaskError = exports.BundleTaskError || (exports.BundleTaskError = {}));
var BundleTask;
(function (BundleTask) {
    /**
     * @internal
     */
    BundleTask.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(BundleTask = exports.BundleTask || (exports.BundleTask = {}));
var BundleInstanceResult;
(function (BundleInstanceResult) {
    /**
     * @internal
     */
    BundleInstanceResult.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(BundleInstanceResult = exports.BundleInstanceResult || (exports.BundleInstanceResult = {}));
var CancelBundleTaskRequest;
(function (CancelBundleTaskRequest) {
    /**
     * @internal
     */
    CancelBundleTaskRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(CancelBundleTaskRequest = exports.CancelBundleTaskRequest || (exports.CancelBundleTaskRequest = {}));
var CancelBundleTaskResult;
(function (CancelBundleTaskResult) {
    /**
     * @internal
     */
    CancelBundleTaskResult.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(CancelBundleTaskResult = exports.CancelBundleTaskResult || (exports.CancelBundleTaskResult = {}));
var CancelCapacityReservationRequest;
(function (CancelCapacityReservationRequest) {
    /**
     * @internal
     */
    CancelCapacityReservationRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(CancelCapacityReservationRequest = exports.CancelCapacityReservationRequest || (exports.CancelCapacityReservationRequest = {}));
var CancelCapacityReservationResult;
(function (CancelCapacityReservationResult) {
    /**
     * @internal
     */
    CancelCapacityReservationResult.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(CancelCapacityReservationResult = exports.CancelCapacityReservationResult || (exports.CancelCapacityReservationResult = {}));
var CancelConversionRequest;
(function (CancelConversionRequest) {
    /**
     * @internal
     */
    CancelConversionRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(CancelConversionRequest = exports.CancelConversionRequest || (exports.CancelConversionRequest = {}));
var CancelExportTaskRequest;
(function (CancelExportTaskRequest) {
    /**
     * @internal
     */
    CancelExportTaskRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(CancelExportTaskRequest = exports.CancelExportTaskRequest || (exports.CancelExportTaskRequest = {}));
var CancelImportTaskRequest;
(function (CancelImportTaskRequest) {
    /**
     * @internal
     */
    CancelImportTaskRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(CancelImportTaskRequest = exports.CancelImportTaskRequest || (exports.CancelImportTaskRequest = {}));
var CancelImportTaskResult;
(function (CancelImportTaskResult) {
    /**
     * @internal
     */
    CancelImportTaskResult.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(CancelImportTaskResult = exports.CancelImportTaskResult || (exports.CancelImportTaskResult = {}));
var CancelReservedInstancesListingRequest;
(function (CancelReservedInstancesListingRequest) {
    /**
     * @internal
     */
    CancelReservedInstancesListingRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(CancelReservedInstancesListingRequest = exports.CancelReservedInstancesListingRequest || (exports.CancelReservedInstancesListingRequest = {}));
var InstanceCount;
(function (InstanceCount) {
    /**
     * @internal
     */
    InstanceCount.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(InstanceCount = exports.InstanceCount || (exports.InstanceCount = {}));
var PriceSchedule;
(function (PriceSchedule) {
    /**
     * @internal
     */
    PriceSchedule.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(PriceSchedule = exports.PriceSchedule || (exports.PriceSchedule = {}));
var ReservedInstancesListing;
(function (ReservedInstancesListing) {
    /**
     * @internal
     */
    ReservedInstancesListing.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(ReservedInstancesListing = exports.ReservedInstancesListing || (exports.ReservedInstancesListing = {}));
var CancelReservedInstancesListingResult;
(function (CancelReservedInstancesListingResult) {
    /**
     * @internal
     */
    CancelReservedInstancesListingResult.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(CancelReservedInstancesListingResult = exports.CancelReservedInstancesListingResult || (exports.CancelReservedInstancesListingResult = {}));
var CancelSpotFleetRequestsRequest;
(function (CancelSpotFleetRequestsRequest) {
    /**
     * @internal
     */
    CancelSpotFleetRequestsRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(CancelSpotFleetRequestsRequest = exports.CancelSpotFleetRequestsRequest || (exports.CancelSpotFleetRequestsRequest = {}));
var BatchState;
(function (BatchState) {
    BatchState["ACTIVE"] = "active";
    BatchState["CANCELLED"] = "cancelled";
    BatchState["CANCELLED_RUNNING"] = "cancelled_running";
    BatchState["CANCELLED_TERMINATING_INSTANCES"] = "cancelled_terminating";
    BatchState["FAILED"] = "failed";
    BatchState["MODIFYING"] = "modifying";
    BatchState["SUBMITTED"] = "submitted";
})(BatchState = exports.BatchState || (exports.BatchState = {}));
var CancelSpotFleetRequestsSuccessItem;
(function (CancelSpotFleetRequestsSuccessItem) {
    /**
     * @internal
     */
    CancelSpotFleetRequestsSuccessItem.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(CancelSpotFleetRequestsSuccessItem = exports.CancelSpotFleetRequestsSuccessItem || (exports.CancelSpotFleetRequestsSuccessItem = {}));
var CancelBatchErrorCode;
(function (CancelBatchErrorCode) {
    CancelBatchErrorCode["FLEET_REQUEST_ID_DOES_NOT_EXIST"] = "fleetRequestIdDoesNotExist";
    CancelBatchErrorCode["FLEET_REQUEST_ID_MALFORMED"] = "fleetRequestIdMalformed";
    CancelBatchErrorCode["FLEET_REQUEST_NOT_IN_CANCELLABLE_STATE"] = "fleetRequestNotInCancellableState";
    CancelBatchErrorCode["UNEXPECTED_ERROR"] = "unexpectedError";
})(CancelBatchErrorCode = exports.CancelBatchErrorCode || (exports.CancelBatchErrorCode = {}));
var CancelSpotFleetRequestsError;
(function (CancelSpotFleetRequestsError) {
    /**
     * @internal
     */
    CancelSpotFleetRequestsError.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(CancelSpotFleetRequestsError = exports.CancelSpotFleetRequestsError || (exports.CancelSpotFleetRequestsError = {}));
var CancelSpotFleetRequestsErrorItem;
(function (CancelSpotFleetRequestsErrorItem) {
    /**
     * @internal
     */
    CancelSpotFleetRequestsErrorItem.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(CancelSpotFleetRequestsErrorItem = exports.CancelSpotFleetRequestsErrorItem || (exports.CancelSpotFleetRequestsErrorItem = {}));
var CancelSpotFleetRequestsResponse;
(function (CancelSpotFleetRequestsResponse) {
    /**
     * @internal
     */
    CancelSpotFleetRequestsResponse.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(CancelSpotFleetRequestsResponse = exports.CancelSpotFleetRequestsResponse || (exports.CancelSpotFleetRequestsResponse = {}));
var CancelSpotInstanceRequestsRequest;
(function (CancelSpotInstanceRequestsRequest) {
    /**
     * @internal
     */
    CancelSpotInstanceRequestsRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(CancelSpotInstanceRequestsRequest = exports.CancelSpotInstanceRequestsRequest || (exports.CancelSpotInstanceRequestsRequest = {}));
var CancelledSpotInstanceRequest;
(function (CancelledSpotInstanceRequest) {
    /**
     * @internal
     */
    CancelledSpotInstanceRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(CancelledSpotInstanceRequest = exports.CancelledSpotInstanceRequest || (exports.CancelledSpotInstanceRequest = {}));
var CancelSpotInstanceRequestsResult;
(function (CancelSpotInstanceRequestsResult) {
    /**
     * @internal
     */
    CancelSpotInstanceRequestsResult.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(CancelSpotInstanceRequestsResult = exports.CancelSpotInstanceRequestsResult || (exports.CancelSpotInstanceRequestsResult = {}));
var ConfirmProductInstanceRequest;
(function (ConfirmProductInstanceRequest) {
    /**
     * @internal
     */
    ConfirmProductInstanceRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(ConfirmProductInstanceRequest = exports.ConfirmProductInstanceRequest || (exports.ConfirmProductInstanceRequest = {}));
var ConfirmProductInstanceResult;
(function (ConfirmProductInstanceResult) {
    /**
     * @internal
     */
    ConfirmProductInstanceResult.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(ConfirmProductInstanceResult = exports.ConfirmProductInstanceResult || (exports.ConfirmProductInstanceResult = {}));
var CopyFpgaImageRequest;
(function (CopyFpgaImageRequest) {
    /**
     * @internal
     */
    CopyFpgaImageRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(CopyFpgaImageRequest = exports.CopyFpgaImageRequest || (exports.CopyFpgaImageRequest = {}));
var CopyFpgaImageResult;
(function (CopyFpgaImageResult) {
    /**
     * @internal
     */
    CopyFpgaImageResult.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(CopyFpgaImageResult = exports.CopyFpgaImageResult || (exports.CopyFpgaImageResult = {}));
var CopyImageRequest;
(function (CopyImageRequest) {
    /**
     * @internal
     */
    CopyImageRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(CopyImageRequest = exports.CopyImageRequest || (exports.CopyImageRequest = {}));
var CopyImageResult;
(function (CopyImageResult) {
    /**
     * @internal
     */
    CopyImageResult.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(CopyImageResult = exports.CopyImageResult || (exports.CopyImageResult = {}));
var CopySnapshotRequest;
(function (CopySnapshotRequest) {
    /**
     * @internal
     */
    CopySnapshotRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(CopySnapshotRequest = exports.CopySnapshotRequest || (exports.CopySnapshotRequest = {}));
var CopySnapshotResult;
(function (CopySnapshotResult) {
    /**
     * @internal
     */
    CopySnapshotResult.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(CopySnapshotResult = exports.CopySnapshotResult || (exports.CopySnapshotResult = {}));
var CapacityReservationInstancePlatform;
(function (CapacityReservationInstancePlatform) {
    CapacityReservationInstancePlatform["LINUX_UNIX"] = "Linux/UNIX";
    CapacityReservationInstancePlatform["LINUX_WITH_SQL_SERVER_ENTERPRISE"] = "Linux with SQL Server Enterprise";
    CapacityReservationInstancePlatform["LINUX_WITH_SQL_SERVER_STANDARD"] = "Linux with SQL Server Standard";
    CapacityReservationInstancePlatform["LINUX_WITH_SQL_SERVER_WEB"] = "Linux with SQL Server Web";
    CapacityReservationInstancePlatform["RED_HAT_ENTERPRISE_LINUX"] = "Red Hat Enterprise Linux";
    CapacityReservationInstancePlatform["SUSE_LINUX"] = "SUSE Linux";
    CapacityReservationInstancePlatform["WINDOWS"] = "Windows";
    CapacityReservationInstancePlatform["WINDOWS_WITH_SQL_SERVER"] = "Windows with SQL Server";
    CapacityReservationInstancePlatform["WINDOWS_WITH_SQL_SERVER_ENTERPRISE"] = "Windows with SQL Server Enterprise";
    CapacityReservationInstancePlatform["WINDOWS_WITH_SQL_SERVER_STANDARD"] = "Windows with SQL Server Standard";
    CapacityReservationInstancePlatform["WINDOWS_WITH_SQL_SERVER_WEB"] = "Windows with SQL Server Web";
})(CapacityReservationInstancePlatform = exports.CapacityReservationInstancePlatform || (exports.CapacityReservationInstancePlatform = {}));
var CreateCapacityReservationRequest;
(function (CreateCapacityReservationRequest) {
    /**
     * @internal
     */
    CreateCapacityReservationRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(CreateCapacityReservationRequest = exports.CreateCapacityReservationRequest || (exports.CreateCapacityReservationRequest = {}));
var CapacityReservation;
(function (CapacityReservation) {
    /**
     * @internal
     */
    CapacityReservation.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(CapacityReservation = exports.CapacityReservation || (exports.CapacityReservation = {}));
var CreateCapacityReservationResult;
(function (CreateCapacityReservationResult) {
    /**
     * @internal
     */
    CreateCapacityReservationResult.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(CreateCapacityReservationResult = exports.CreateCapacityReservationResult || (exports.CreateCapacityReservationResult = {}));
var CreateCarrierGatewayRequest;
(function (CreateCarrierGatewayRequest) {
    /**
     * @internal
     */
    CreateCarrierGatewayRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(CreateCarrierGatewayRequest = exports.CreateCarrierGatewayRequest || (exports.CreateCarrierGatewayRequest = {}));
var CarrierGateway;
(function (CarrierGateway) {
    /**
     * @internal
     */
    CarrierGateway.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(CarrierGateway = exports.CarrierGateway || (exports.CarrierGateway = {}));
var CreateCarrierGatewayResult;
(function (CreateCarrierGatewayResult) {
    /**
     * @internal
     */
    CreateCarrierGatewayResult.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(CreateCarrierGatewayResult = exports.CreateCarrierGatewayResult || (exports.CreateCarrierGatewayResult = {}));
var DirectoryServiceAuthenticationRequest;
(function (DirectoryServiceAuthenticationRequest) {
    /**
     * @internal
     */
    DirectoryServiceAuthenticationRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(DirectoryServiceAuthenticationRequest = exports.DirectoryServiceAuthenticationRequest || (exports.DirectoryServiceAuthenticationRequest = {}));
var FederatedAuthenticationRequest;
(function (FederatedAuthenticationRequest) {
    /**
     * @internal
     */
    FederatedAuthenticationRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(FederatedAuthenticationRequest = exports.FederatedAuthenticationRequest || (exports.FederatedAuthenticationRequest = {}));
var CertificateAuthenticationRequest;
(function (CertificateAuthenticationRequest) {
    /**
     * @internal
     */
    CertificateAuthenticationRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(CertificateAuthenticationRequest = exports.CertificateAuthenticationRequest || (exports.CertificateAuthenticationRequest = {}));
var ClientVpnAuthenticationRequest;
(function (ClientVpnAuthenticationRequest) {
    /**
     * @internal
     */
    ClientVpnAuthenticationRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(ClientVpnAuthenticationRequest = exports.ClientVpnAuthenticationRequest || (exports.ClientVpnAuthenticationRequest = {}));
var ClientConnectOptions;
(function (ClientConnectOptions) {
    /**
     * @internal
     */
    ClientConnectOptions.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(ClientConnectOptions = exports.ClientConnectOptions || (exports.ClientConnectOptions = {}));
var ConnectionLogOptions;
(function (ConnectionLogOptions) {
    /**
     * @internal
     */
    ConnectionLogOptions.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(ConnectionLogOptions = exports.ConnectionLogOptions || (exports.ConnectionLogOptions = {}));
var CreateClientVpnEndpointRequest;
(function (CreateClientVpnEndpointRequest) {
    /**
     * @internal
     */
    CreateClientVpnEndpointRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(CreateClientVpnEndpointRequest = exports.CreateClientVpnEndpointRequest || (exports.CreateClientVpnEndpointRequest = {}));
var ClientVpnEndpointStatus;
(function (ClientVpnEndpointStatus) {
    /**
     * @internal
     */
    ClientVpnEndpointStatus.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(ClientVpnEndpointStatus = exports.ClientVpnEndpointStatus || (exports.ClientVpnEndpointStatus = {}));
var CreateClientVpnEndpointResult;
(function (CreateClientVpnEndpointResult) {
    /**
     * @internal
     */
    CreateClientVpnEndpointResult.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(CreateClientVpnEndpointResult = exports.CreateClientVpnEndpointResult || (exports.CreateClientVpnEndpointResult = {}));
var CreateClientVpnRouteRequest;
(function (CreateClientVpnRouteRequest) {
    /**
     * @internal
     */
    CreateClientVpnRouteRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(CreateClientVpnRouteRequest = exports.CreateClientVpnRouteRequest || (exports.CreateClientVpnRouteRequest = {}));
var ClientVpnRouteStatus;
(function (ClientVpnRouteStatus) {
    /**
     * @internal
     */
    ClientVpnRouteStatus.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(ClientVpnRouteStatus = exports.ClientVpnRouteStatus || (exports.ClientVpnRouteStatus = {}));
var CreateClientVpnRouteResult;
(function (CreateClientVpnRouteResult) {
    /**
     * @internal
     */
    CreateClientVpnRouteResult.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(CreateClientVpnRouteResult = exports.CreateClientVpnRouteResult || (exports.CreateClientVpnRouteResult = {}));
var CreateCustomerGatewayRequest;
(function (CreateCustomerGatewayRequest) {
    /**
     * @internal
     */
    CreateCustomerGatewayRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(CreateCustomerGatewayRequest = exports.CreateCustomerGatewayRequest || (exports.CreateCustomerGatewayRequest = {}));
var CustomerGateway;
(function (CustomerGateway) {
    /**
     * @internal
     */
    CustomerGateway.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(CustomerGateway = exports.CustomerGateway || (exports.CustomerGateway = {}));
var CreateCustomerGatewayResult;
(function (CreateCustomerGatewayResult) {
    /**
     * @internal
     */
    CreateCustomerGatewayResult.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(CreateCustomerGatewayResult = exports.CreateCustomerGatewayResult || (exports.CreateCustomerGatewayResult = {}));
var CreateDefaultSubnetRequest;
(function (CreateDefaultSubnetRequest) {
    /**
     * @internal
     */
    CreateDefaultSubnetRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(CreateDefaultSubnetRequest = exports.CreateDefaultSubnetRequest || (exports.CreateDefaultSubnetRequest = {}));
var Subnet;
(function (Subnet) {
    /**
     * @internal
     */
    Subnet.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(Subnet = exports.Subnet || (exports.Subnet = {}));
var CreateDefaultSubnetResult;
(function (CreateDefaultSubnetResult) {
    /**
     * @internal
     */
    CreateDefaultSubnetResult.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(CreateDefaultSubnetResult = exports.CreateDefaultSubnetResult || (exports.CreateDefaultSubnetResult = {}));
var CreateDefaultVpcRequest;
(function (CreateDefaultVpcRequest) {
    /**
     * @internal
     */
    CreateDefaultVpcRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(CreateDefaultVpcRequest = exports.CreateDefaultVpcRequest || (exports.CreateDefaultVpcRequest = {}));
var Vpc;
(function (Vpc) {
    /**
     * @internal
     */
    Vpc.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(Vpc = exports.Vpc || (exports.Vpc = {}));
var CreateDefaultVpcResult;
(function (CreateDefaultVpcResult) {
    /**
     * @internal
     */
    CreateDefaultVpcResult.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(CreateDefaultVpcResult = exports.CreateDefaultVpcResult || (exports.CreateDefaultVpcResult = {}));
var NewDhcpConfiguration;
(function (NewDhcpConfiguration) {
    /**
     * @internal
     */
    NewDhcpConfiguration.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(NewDhcpConfiguration = exports.NewDhcpConfiguration || (exports.NewDhcpConfiguration = {}));
var CreateDhcpOptionsRequest;
(function (CreateDhcpOptionsRequest) {
    /**
     * @internal
     */
    CreateDhcpOptionsRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(CreateDhcpOptionsRequest = exports.CreateDhcpOptionsRequest || (exports.CreateDhcpOptionsRequest = {}));
var AttributeValue;
(function (AttributeValue) {
    /**
     * @internal
     */
    AttributeValue.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(AttributeValue = exports.AttributeValue || (exports.AttributeValue = {}));
var DhcpConfiguration;
(function (DhcpConfiguration) {
    /**
     * @internal
     */
    DhcpConfiguration.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(DhcpConfiguration = exports.DhcpConfiguration || (exports.DhcpConfiguration = {}));
var DhcpOptions;
(function (DhcpOptions) {
    /**
     * @internal
     */
    DhcpOptions.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(DhcpOptions = exports.DhcpOptions || (exports.DhcpOptions = {}));
var CreateDhcpOptionsResult;
(function (CreateDhcpOptionsResult) {
    /**
     * @internal
     */
    CreateDhcpOptionsResult.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(CreateDhcpOptionsResult = exports.CreateDhcpOptionsResult || (exports.CreateDhcpOptionsResult = {}));
var CreateEgressOnlyInternetGatewayRequest;
(function (CreateEgressOnlyInternetGatewayRequest) {
    /**
     * @internal
     */
    CreateEgressOnlyInternetGatewayRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(CreateEgressOnlyInternetGatewayRequest = exports.CreateEgressOnlyInternetGatewayRequest || (exports.CreateEgressOnlyInternetGatewayRequest = {}));
var InternetGatewayAttachment;
(function (InternetGatewayAttachment) {
    /**
     * @internal
     */
    InternetGatewayAttachment.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(InternetGatewayAttachment = exports.InternetGatewayAttachment || (exports.InternetGatewayAttachment = {}));
var EgressOnlyInternetGateway;
(function (EgressOnlyInternetGateway) {
    /**
     * @internal
     */
    EgressOnlyInternetGateway.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(EgressOnlyInternetGateway = exports.EgressOnlyInternetGateway || (exports.EgressOnlyInternetGateway = {}));
var CreateEgressOnlyInternetGatewayResult;
(function (CreateEgressOnlyInternetGatewayResult) {
    /**
     * @internal
     */
    CreateEgressOnlyInternetGatewayResult.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(CreateEgressOnlyInternetGatewayResult = exports.CreateEgressOnlyInternetGatewayResult || (exports.CreateEgressOnlyInternetGatewayResult = {}));
var FleetExcessCapacityTerminationPolicy;
(function (FleetExcessCapacityTerminationPolicy) {
    FleetExcessCapacityTerminationPolicy["NO_TERMINATION"] = "no-termination";
    FleetExcessCapacityTerminationPolicy["TERMINATION"] = "termination";
})(FleetExcessCapacityTerminationPolicy = exports.FleetExcessCapacityTerminationPolicy || (exports.FleetExcessCapacityTerminationPolicy = {}));
var FleetLaunchTemplateSpecificationRequest;
(function (FleetLaunchTemplateSpecificationRequest) {
    /**
     * @internal
     */
    FleetLaunchTemplateSpecificationRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(FleetLaunchTemplateSpecificationRequest = exports.FleetLaunchTemplateSpecificationRequest || (exports.FleetLaunchTemplateSpecificationRequest = {}));
var Placement;
(function (Placement) {
    /**
     * @internal
     */
    Placement.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(Placement = exports.Placement || (exports.Placement = {}));
var FleetLaunchTemplateOverridesRequest;
(function (FleetLaunchTemplateOverridesRequest) {
    /**
     * @internal
     */
    FleetLaunchTemplateOverridesRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(FleetLaunchTemplateOverridesRequest = exports.FleetLaunchTemplateOverridesRequest || (exports.FleetLaunchTemplateOverridesRequest = {}));
var FleetLaunchTemplateConfigRequest;
(function (FleetLaunchTemplateConfigRequest) {
    /**
     * @internal
     */
    FleetLaunchTemplateConfigRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(FleetLaunchTemplateConfigRequest = exports.FleetLaunchTemplateConfigRequest || (exports.FleetLaunchTemplateConfigRequest = {}));
var FleetOnDemandAllocationStrategy;
(function (FleetOnDemandAllocationStrategy) {
    FleetOnDemandAllocationStrategy["LOWEST_PRICE"] = "lowest-price";
    FleetOnDemandAllocationStrategy["PRIORITIZED"] = "prioritized";
})(FleetOnDemandAllocationStrategy = exports.FleetOnDemandAllocationStrategy || (exports.FleetOnDemandAllocationStrategy = {}));
var FleetCapacityReservationUsageStrategy;
(function (FleetCapacityReservationUsageStrategy) {
    FleetCapacityReservationUsageStrategy["USE_CAPACITY_RESERVATIONS_FIRST"] = "use-capacity-reservations-first";
})(FleetCapacityReservationUsageStrategy = exports.FleetCapacityReservationUsageStrategy || (exports.FleetCapacityReservationUsageStrategy = {}));
var CapacityReservationOptionsRequest;
(function (CapacityReservationOptionsRequest) {
    /**
     * @internal
     */
    CapacityReservationOptionsRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(CapacityReservationOptionsRequest = exports.CapacityReservationOptionsRequest || (exports.CapacityReservationOptionsRequest = {}));
var OnDemandOptionsRequest;
(function (OnDemandOptionsRequest) {
    /**
     * @internal
     */
    OnDemandOptionsRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(OnDemandOptionsRequest = exports.OnDemandOptionsRequest || (exports.OnDemandOptionsRequest = {}));
var SpotAllocationStrategy;
(function (SpotAllocationStrategy) {
    SpotAllocationStrategy["CAPACITY_OPTIMIZED"] = "capacity-optimized";
    SpotAllocationStrategy["CAPACITY_OPTIMIZED_PRIORITIZED"] = "capacity-optimized-prioritized";
    SpotAllocationStrategy["DIVERSIFIED"] = "diversified";
    SpotAllocationStrategy["LOWEST_PRICE"] = "lowest-price";
})(SpotAllocationStrategy = exports.SpotAllocationStrategy || (exports.SpotAllocationStrategy = {}));
var FleetReplacementStrategy;
(function (FleetReplacementStrategy) {
    FleetReplacementStrategy["LAUNCH"] = "launch";
})(FleetReplacementStrategy = exports.FleetReplacementStrategy || (exports.FleetReplacementStrategy = {}));
var FleetSpotCapacityRebalanceRequest;
(function (FleetSpotCapacityRebalanceRequest) {
    /**
     * @internal
     */
    FleetSpotCapacityRebalanceRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(FleetSpotCapacityRebalanceRequest = exports.FleetSpotCapacityRebalanceRequest || (exports.FleetSpotCapacityRebalanceRequest = {}));
var FleetSpotMaintenanceStrategiesRequest;
(function (FleetSpotMaintenanceStrategiesRequest) {
    /**
     * @internal
     */
    FleetSpotMaintenanceStrategiesRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(FleetSpotMaintenanceStrategiesRequest = exports.FleetSpotMaintenanceStrategiesRequest || (exports.FleetSpotMaintenanceStrategiesRequest = {}));
var SpotOptionsRequest;
(function (SpotOptionsRequest) {
    /**
     * @internal
     */
    SpotOptionsRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(SpotOptionsRequest = exports.SpotOptionsRequest || (exports.SpotOptionsRequest = {}));
var DefaultTargetCapacityType;
(function (DefaultTargetCapacityType) {
    DefaultTargetCapacityType["ON_DEMAND"] = "on-demand";
    DefaultTargetCapacityType["SPOT"] = "spot";
})(DefaultTargetCapacityType = exports.DefaultTargetCapacityType || (exports.DefaultTargetCapacityType = {}));
var TargetCapacitySpecificationRequest;
(function (TargetCapacitySpecificationRequest) {
    /**
     * @internal
     */
    TargetCapacitySpecificationRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(TargetCapacitySpecificationRequest = exports.TargetCapacitySpecificationRequest || (exports.TargetCapacitySpecificationRequest = {}));
var FleetType;
(function (FleetType) {
    FleetType["INSTANT"] = "instant";
    FleetType["MAINTAIN"] = "maintain";
    FleetType["REQUEST"] = "request";
})(FleetType = exports.FleetType || (exports.FleetType = {}));
var CreateFleetRequest;
(function (CreateFleetRequest) {
    /**
     * @internal
     */
    CreateFleetRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(CreateFleetRequest = exports.CreateFleetRequest || (exports.CreateFleetRequest = {}));
var FleetLaunchTemplateSpecification;
(function (FleetLaunchTemplateSpecification) {
    /**
     * @internal
     */
    FleetLaunchTemplateSpecification.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(FleetLaunchTemplateSpecification = exports.FleetLaunchTemplateSpecification || (exports.FleetLaunchTemplateSpecification = {}));
var PlacementResponse;
(function (PlacementResponse) {
    /**
     * @internal
     */
    PlacementResponse.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(PlacementResponse = exports.PlacementResponse || (exports.PlacementResponse = {}));
var FleetLaunchTemplateOverrides;
(function (FleetLaunchTemplateOverrides) {
    /**
     * @internal
     */
    FleetLaunchTemplateOverrides.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(FleetLaunchTemplateOverrides = exports.FleetLaunchTemplateOverrides || (exports.FleetLaunchTemplateOverrides = {}));
var LaunchTemplateAndOverridesResponse;
(function (LaunchTemplateAndOverridesResponse) {
    /**
     * @internal
     */
    LaunchTemplateAndOverridesResponse.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(LaunchTemplateAndOverridesResponse = exports.LaunchTemplateAndOverridesResponse || (exports.LaunchTemplateAndOverridesResponse = {}));
var InstanceLifecycle;
(function (InstanceLifecycle) {
    InstanceLifecycle["ON_DEMAND"] = "on-demand";
    InstanceLifecycle["SPOT"] = "spot";
})(InstanceLifecycle = exports.InstanceLifecycle || (exports.InstanceLifecycle = {}));
var CreateFleetError;
(function (CreateFleetError) {
    /**
     * @internal
     */
    CreateFleetError.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(CreateFleetError = exports.CreateFleetError || (exports.CreateFleetError = {}));
var CreateFleetInstance;
(function (CreateFleetInstance) {
    /**
     * @internal
     */
    CreateFleetInstance.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(CreateFleetInstance = exports.CreateFleetInstance || (exports.CreateFleetInstance = {}));
var CreateFleetResult;
(function (CreateFleetResult) {
    /**
     * @internal
     */
    CreateFleetResult.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(CreateFleetResult = exports.CreateFleetResult || (exports.CreateFleetResult = {}));
var CreateFlowLogsRequest;
(function (CreateFlowLogsRequest) {
    /**
     * @internal
     */
    CreateFlowLogsRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(CreateFlowLogsRequest = exports.CreateFlowLogsRequest || (exports.CreateFlowLogsRequest = {}));
var CreateFlowLogsResult;
(function (CreateFlowLogsResult) {
    /**
     * @internal
     */
    CreateFlowLogsResult.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(CreateFlowLogsResult = exports.CreateFlowLogsResult || (exports.CreateFlowLogsResult = {}));
var StorageLocation;
(function (StorageLocation) {
    /**
     * @internal
     */
    StorageLocation.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(StorageLocation = exports.StorageLocation || (exports.StorageLocation = {}));
var CreateFpgaImageRequest;
(function (CreateFpgaImageRequest) {
    /**
     * @internal
     */
    CreateFpgaImageRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(CreateFpgaImageRequest = exports.CreateFpgaImageRequest || (exports.CreateFpgaImageRequest = {}));
var CreateFpgaImageResult;
(function (CreateFpgaImageResult) {
    /**
     * @internal
     */
    CreateFpgaImageResult.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(CreateFpgaImageResult = exports.CreateFpgaImageResult || (exports.CreateFpgaImageResult = {}));
var EbsBlockDevice;
(function (EbsBlockDevice) {
    /**
     * @internal
     */
    EbsBlockDevice.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(EbsBlockDevice = exports.EbsBlockDevice || (exports.EbsBlockDevice = {}));
var BlockDeviceMapping;
(function (BlockDeviceMapping) {
    /**
     * @internal
     */
    BlockDeviceMapping.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(BlockDeviceMapping = exports.BlockDeviceMapping || (exports.BlockDeviceMapping = {}));
var CreateImageRequest;
(function (CreateImageRequest) {
    /**
     * @internal
     */
    CreateImageRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(CreateImageRequest = exports.CreateImageRequest || (exports.CreateImageRequest = {}));
var CreateImageResult;
(function (CreateImageResult) {
    /**
     * @internal
     */
    CreateImageResult.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(CreateImageResult = exports.CreateImageResult || (exports.CreateImageResult = {}));
var ExportToS3TaskSpecification;
(function (ExportToS3TaskSpecification) {
    /**
     * @internal
     */
    ExportToS3TaskSpecification.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(ExportToS3TaskSpecification = exports.ExportToS3TaskSpecification || (exports.ExportToS3TaskSpecification = {}));
var CreateInstanceExportTaskRequest;
(function (CreateInstanceExportTaskRequest) {
    /**
     * @internal
     */
    CreateInstanceExportTaskRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(CreateInstanceExportTaskRequest = exports.CreateInstanceExportTaskRequest || (exports.CreateInstanceExportTaskRequest = {}));
var ExportToS3Task;
(function (ExportToS3Task) {
    /**
     * @internal
     */
    ExportToS3Task.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(ExportToS3Task = exports.ExportToS3Task || (exports.ExportToS3Task = {}));
var InstanceExportDetails;
(function (InstanceExportDetails) {
    /**
     * @internal
     */
    InstanceExportDetails.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(InstanceExportDetails = exports.InstanceExportDetails || (exports.InstanceExportDetails = {}));
var ExportTask;
(function (ExportTask) {
    /**
     * @internal
     */
    ExportTask.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(ExportTask = exports.ExportTask || (exports.ExportTask = {}));
var CreateInstanceExportTaskResult;
(function (CreateInstanceExportTaskResult) {
    /**
     * @internal
     */
    CreateInstanceExportTaskResult.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(CreateInstanceExportTaskResult = exports.CreateInstanceExportTaskResult || (exports.CreateInstanceExportTaskResult = {}));
var CreateInternetGatewayRequest;
(function (CreateInternetGatewayRequest) {
    /**
     * @internal
     */
    CreateInternetGatewayRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(CreateInternetGatewayRequest = exports.CreateInternetGatewayRequest || (exports.CreateInternetGatewayRequest = {}));
var InternetGateway;
(function (InternetGateway) {
    /**
     * @internal
     */
    InternetGateway.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(InternetGateway = exports.InternetGateway || (exports.InternetGateway = {}));
var CreateInternetGatewayResult;
(function (CreateInternetGatewayResult) {
    /**
     * @internal
     */
    CreateInternetGatewayResult.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(CreateInternetGatewayResult = exports.CreateInternetGatewayResult || (exports.CreateInternetGatewayResult = {}));
var CreateKeyPairRequest;
(function (CreateKeyPairRequest) {
    /**
     * @internal
     */
    CreateKeyPairRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(CreateKeyPairRequest = exports.CreateKeyPairRequest || (exports.CreateKeyPairRequest = {}));
var KeyPair;
(function (KeyPair) {
    /**
     * @internal
     */
    KeyPair.filterSensitiveLog = (obj) => ({
        ...obj,
        ...(obj.KeyMaterial && { KeyMaterial: smithy_client_1.SENSITIVE_STRING }),
    });
})(KeyPair = exports.KeyPair || (exports.KeyPair = {}));
var LaunchTemplateEbsBlockDeviceRequest;
(function (LaunchTemplateEbsBlockDeviceRequest) {
    /**
     * @internal
     */
    LaunchTemplateEbsBlockDeviceRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(LaunchTemplateEbsBlockDeviceRequest = exports.LaunchTemplateEbsBlockDeviceRequest || (exports.LaunchTemplateEbsBlockDeviceRequest = {}));
var LaunchTemplateBlockDeviceMappingRequest;
(function (LaunchTemplateBlockDeviceMappingRequest) {
    /**
     * @internal
     */
    LaunchTemplateBlockDeviceMappingRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(LaunchTemplateBlockDeviceMappingRequest = exports.LaunchTemplateBlockDeviceMappingRequest || (exports.LaunchTemplateBlockDeviceMappingRequest = {}));
var CapacityReservationTarget;
(function (CapacityReservationTarget) {
    /**
     * @internal
     */
    CapacityReservationTarget.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(CapacityReservationTarget = exports.CapacityReservationTarget || (exports.CapacityReservationTarget = {}));
var LaunchTemplateCapacityReservationSpecificationRequest;
(function (LaunchTemplateCapacityReservationSpecificationRequest) {
    /**
     * @internal
     */
    LaunchTemplateCapacityReservationSpecificationRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(LaunchTemplateCapacityReservationSpecificationRequest = exports.LaunchTemplateCapacityReservationSpecificationRequest || (exports.LaunchTemplateCapacityReservationSpecificationRequest = {}));
var LaunchTemplateCpuOptionsRequest;
(function (LaunchTemplateCpuOptionsRequest) {
    /**
     * @internal
     */
    LaunchTemplateCpuOptionsRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(LaunchTemplateCpuOptionsRequest = exports.LaunchTemplateCpuOptionsRequest || (exports.LaunchTemplateCpuOptionsRequest = {}));
var CreditSpecificationRequest;
(function (CreditSpecificationRequest) {
    /**
     * @internal
     */
    CreditSpecificationRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(CreditSpecificationRequest = exports.CreditSpecificationRequest || (exports.CreditSpecificationRequest = {}));
var ElasticGpuSpecification;
(function (ElasticGpuSpecification) {
    /**
     * @internal
     */
    ElasticGpuSpecification.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(ElasticGpuSpecification = exports.ElasticGpuSpecification || (exports.ElasticGpuSpecification = {}));
var LaunchTemplateElasticInferenceAccelerator;
(function (LaunchTemplateElasticInferenceAccelerator) {
    /**
     * @internal
     */
    LaunchTemplateElasticInferenceAccelerator.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(LaunchTemplateElasticInferenceAccelerator = exports.LaunchTemplateElasticInferenceAccelerator || (exports.LaunchTemplateElasticInferenceAccelerator = {}));
var LaunchTemplateEnclaveOptionsRequest;
(function (LaunchTemplateEnclaveOptionsRequest) {
    /**
     * @internal
     */
    LaunchTemplateEnclaveOptionsRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(LaunchTemplateEnclaveOptionsRequest = exports.LaunchTemplateEnclaveOptionsRequest || (exports.LaunchTemplateEnclaveOptionsRequest = {}));
var LaunchTemplateHibernationOptionsRequest;
(function (LaunchTemplateHibernationOptionsRequest) {
    /**
     * @internal
     */
    LaunchTemplateHibernationOptionsRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(LaunchTemplateHibernationOptionsRequest = exports.LaunchTemplateHibernationOptionsRequest || (exports.LaunchTemplateHibernationOptionsRequest = {}));
var LaunchTemplateIamInstanceProfileSpecificationRequest;
(function (LaunchTemplateIamInstanceProfileSpecificationRequest) {
    /**
     * @internal
     */
    LaunchTemplateIamInstanceProfileSpecificationRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(LaunchTemplateIamInstanceProfileSpecificationRequest = exports.LaunchTemplateIamInstanceProfileSpecificationRequest || (exports.LaunchTemplateIamInstanceProfileSpecificationRequest = {}));
//# sourceMappingURL=models_0.js.map