import { __extends } from "tslib";
import { EC2Client } from "./EC2Client";
import { AcceptReservedInstancesExchangeQuoteCommand, } from "./commands/AcceptReservedInstancesExchangeQuoteCommand";
import { AcceptTransitGatewayMulticastDomainAssociationsCommand, } from "./commands/AcceptTransitGatewayMulticastDomainAssociationsCommand";
import { AcceptTransitGatewayPeeringAttachmentCommand, } from "./commands/AcceptTransitGatewayPeeringAttachmentCommand";
import { AcceptTransitGatewayVpcAttachmentCommand, } from "./commands/AcceptTransitGatewayVpcAttachmentCommand";
import { AcceptVpcEndpointConnectionsCommand, } from "./commands/AcceptVpcEndpointConnectionsCommand";
import { AcceptVpcPeeringConnectionCommand, } from "./commands/AcceptVpcPeeringConnectionCommand";
import { AdvertiseByoipCidrCommand, } from "./commands/AdvertiseByoipCidrCommand";
import { AllocateAddressCommand, } from "./commands/AllocateAddressCommand";
import { AllocateHostsCommand, } from "./commands/AllocateHostsCommand";
import { ApplySecurityGroupsToClientVpnTargetNetworkCommand, } from "./commands/ApplySecurityGroupsToClientVpnTargetNetworkCommand";
import { AssignIpv6AddressesCommand, } from "./commands/AssignIpv6AddressesCommand";
import { AssignPrivateIpAddressesCommand, } from "./commands/AssignPrivateIpAddressesCommand";
import { AssociateAddressCommand, } from "./commands/AssociateAddressCommand";
import { AssociateClientVpnTargetNetworkCommand, } from "./commands/AssociateClientVpnTargetNetworkCommand";
import { AssociateDhcpOptionsCommand, } from "./commands/AssociateDhcpOptionsCommand";
import { AssociateEnclaveCertificateIamRoleCommand, } from "./commands/AssociateEnclaveCertificateIamRoleCommand";
import { AssociateIamInstanceProfileCommand, } from "./commands/AssociateIamInstanceProfileCommand";
import { AssociateRouteTableCommand, } from "./commands/AssociateRouteTableCommand";
import { AssociateSubnetCidrBlockCommand, } from "./commands/AssociateSubnetCidrBlockCommand";
import { AssociateTransitGatewayMulticastDomainCommand, } from "./commands/AssociateTransitGatewayMulticastDomainCommand";
import { AssociateTransitGatewayRouteTableCommand, } from "./commands/AssociateTransitGatewayRouteTableCommand";
import { AssociateVpcCidrBlockCommand, } from "./commands/AssociateVpcCidrBlockCommand";
import { AttachClassicLinkVpcCommand, } from "./commands/AttachClassicLinkVpcCommand";
import { AttachInternetGatewayCommand, } from "./commands/AttachInternetGatewayCommand";
import { AttachNetworkInterfaceCommand, } from "./commands/AttachNetworkInterfaceCommand";
import { AttachVolumeCommand, } from "./commands/AttachVolumeCommand";
import { AttachVpnGatewayCommand, } from "./commands/AttachVpnGatewayCommand";
import { AuthorizeClientVpnIngressCommand, } from "./commands/AuthorizeClientVpnIngressCommand";
import { AuthorizeSecurityGroupEgressCommand, } from "./commands/AuthorizeSecurityGroupEgressCommand";
import { AuthorizeSecurityGroupIngressCommand, } from "./commands/AuthorizeSecurityGroupIngressCommand";
import { BundleInstanceCommand, } from "./commands/BundleInstanceCommand";
import { CancelBundleTaskCommand, } from "./commands/CancelBundleTaskCommand";
import { CancelCapacityReservationCommand, } from "./commands/CancelCapacityReservationCommand";
import { CancelConversionTaskCommand, } from "./commands/CancelConversionTaskCommand";
import { CancelExportTaskCommand, } from "./commands/CancelExportTaskCommand";
import { CancelImportTaskCommand, } from "./commands/CancelImportTaskCommand";
import { CancelReservedInstancesListingCommand, } from "./commands/CancelReservedInstancesListingCommand";
import { CancelSpotFleetRequestsCommand, } from "./commands/CancelSpotFleetRequestsCommand";
import { CancelSpotInstanceRequestsCommand, } from "./commands/CancelSpotInstanceRequestsCommand";
import { ConfirmProductInstanceCommand, } from "./commands/ConfirmProductInstanceCommand";
import { CopyFpgaImageCommand, } from "./commands/CopyFpgaImageCommand";
import { CopyImageCommand } from "./commands/CopyImageCommand";
import { CopySnapshotCommand, } from "./commands/CopySnapshotCommand";
import { CreateCapacityReservationCommand, } from "./commands/CreateCapacityReservationCommand";
import { CreateCarrierGatewayCommand, } from "./commands/CreateCarrierGatewayCommand";
import { CreateClientVpnEndpointCommand, } from "./commands/CreateClientVpnEndpointCommand";
import { CreateClientVpnRouteCommand, } from "./commands/CreateClientVpnRouteCommand";
import { CreateCustomerGatewayCommand, } from "./commands/CreateCustomerGatewayCommand";
import { CreateDefaultSubnetCommand, } from "./commands/CreateDefaultSubnetCommand";
import { CreateDefaultVpcCommand, } from "./commands/CreateDefaultVpcCommand";
import { CreateDhcpOptionsCommand, } from "./commands/CreateDhcpOptionsCommand";
import { CreateEgressOnlyInternetGatewayCommand, } from "./commands/CreateEgressOnlyInternetGatewayCommand";
import { CreateFleetCommand } from "./commands/CreateFleetCommand";
import { CreateFlowLogsCommand, } from "./commands/CreateFlowLogsCommand";
import { CreateFpgaImageCommand, } from "./commands/CreateFpgaImageCommand";
import { CreateImageCommand } from "./commands/CreateImageCommand";
import { CreateInstanceExportTaskCommand, } from "./commands/CreateInstanceExportTaskCommand";
import { CreateInternetGatewayCommand, } from "./commands/CreateInternetGatewayCommand";
import { CreateKeyPairCommand, } from "./commands/CreateKeyPairCommand";
import { CreateLaunchTemplateCommand, } from "./commands/CreateLaunchTemplateCommand";
import { CreateLaunchTemplateVersionCommand, } from "./commands/CreateLaunchTemplateVersionCommand";
import { CreateLocalGatewayRouteCommand, } from "./commands/CreateLocalGatewayRouteCommand";
import { CreateLocalGatewayRouteTableVpcAssociationCommand, } from "./commands/CreateLocalGatewayRouteTableVpcAssociationCommand";
import { CreateManagedPrefixListCommand, } from "./commands/CreateManagedPrefixListCommand";
import { CreateNatGatewayCommand, } from "./commands/CreateNatGatewayCommand";
import { CreateNetworkAclCommand, } from "./commands/CreateNetworkAclCommand";
import { CreateNetworkAclEntryCommand, } from "./commands/CreateNetworkAclEntryCommand";
import { CreateNetworkInsightsPathCommand, } from "./commands/CreateNetworkInsightsPathCommand";
import { CreateNetworkInterfaceCommand, } from "./commands/CreateNetworkInterfaceCommand";
import { CreateNetworkInterfacePermissionCommand, } from "./commands/CreateNetworkInterfacePermissionCommand";
import { CreatePlacementGroupCommand, } from "./commands/CreatePlacementGroupCommand";
import { CreateReplaceRootVolumeTaskCommand, } from "./commands/CreateReplaceRootVolumeTaskCommand";
import { CreateReservedInstancesListingCommand, } from "./commands/CreateReservedInstancesListingCommand";
import { CreateRestoreImageTaskCommand, } from "./commands/CreateRestoreImageTaskCommand";
import { CreateRouteCommand } from "./commands/CreateRouteCommand";
import { CreateRouteTableCommand, } from "./commands/CreateRouteTableCommand";
import { CreateSecurityGroupCommand, } from "./commands/CreateSecurityGroupCommand";
import { CreateSnapshotCommand, } from "./commands/CreateSnapshotCommand";
import { CreateSnapshotsCommand, } from "./commands/CreateSnapshotsCommand";
import { CreateSpotDatafeedSubscriptionCommand, } from "./commands/CreateSpotDatafeedSubscriptionCommand";
import { CreateStoreImageTaskCommand, } from "./commands/CreateStoreImageTaskCommand";
import { CreateSubnetCommand, } from "./commands/CreateSubnetCommand";
import { CreateTagsCommand } from "./commands/CreateTagsCommand";
import { CreateTrafficMirrorFilterCommand, } from "./commands/CreateTrafficMirrorFilterCommand";
import { CreateTrafficMirrorFilterRuleCommand, } from "./commands/CreateTrafficMirrorFilterRuleCommand";
import { CreateTrafficMirrorSessionCommand, } from "./commands/CreateTrafficMirrorSessionCommand";
import { CreateTrafficMirrorTargetCommand, } from "./commands/CreateTrafficMirrorTargetCommand";
import { CreateTransitGatewayCommand, } from "./commands/CreateTransitGatewayCommand";
import { CreateTransitGatewayConnectCommand, } from "./commands/CreateTransitGatewayConnectCommand";
import { CreateTransitGatewayConnectPeerCommand, } from "./commands/CreateTransitGatewayConnectPeerCommand";
import { CreateTransitGatewayMulticastDomainCommand, } from "./commands/CreateTransitGatewayMulticastDomainCommand";
import { CreateTransitGatewayPeeringAttachmentCommand, } from "./commands/CreateTransitGatewayPeeringAttachmentCommand";
import { CreateTransitGatewayPrefixListReferenceCommand, } from "./commands/CreateTransitGatewayPrefixListReferenceCommand";
import { CreateTransitGatewayRouteCommand, } from "./commands/CreateTransitGatewayRouteCommand";
import { CreateTransitGatewayRouteTableCommand, } from "./commands/CreateTransitGatewayRouteTableCommand";
import { CreateTransitGatewayVpcAttachmentCommand, } from "./commands/CreateTransitGatewayVpcAttachmentCommand";
import { CreateVolumeCommand, } from "./commands/CreateVolumeCommand";
import { CreateVpcCommand } from "./commands/CreateVpcCommand";
import { CreateVpcEndpointCommand, } from "./commands/CreateVpcEndpointCommand";
import { CreateVpcEndpointConnectionNotificationCommand, } from "./commands/CreateVpcEndpointConnectionNotificationCommand";
import { CreateVpcEndpointServiceConfigurationCommand, } from "./commands/CreateVpcEndpointServiceConfigurationCommand";
import { CreateVpcPeeringConnectionCommand, } from "./commands/CreateVpcPeeringConnectionCommand";
import { CreateVpnConnectionCommand, } from "./commands/CreateVpnConnectionCommand";
import { CreateVpnConnectionRouteCommand, } from "./commands/CreateVpnConnectionRouteCommand";
import { CreateVpnGatewayCommand, } from "./commands/CreateVpnGatewayCommand";
import { DeleteCarrierGatewayCommand, } from "./commands/DeleteCarrierGatewayCommand";
import { DeleteClientVpnEndpointCommand, } from "./commands/DeleteClientVpnEndpointCommand";
import { DeleteClientVpnRouteCommand, } from "./commands/DeleteClientVpnRouteCommand";
import { DeleteCustomerGatewayCommand, } from "./commands/DeleteCustomerGatewayCommand";
import { DeleteDhcpOptionsCommand, } from "./commands/DeleteDhcpOptionsCommand";
import { DeleteEgressOnlyInternetGatewayCommand, } from "./commands/DeleteEgressOnlyInternetGatewayCommand";
import { DeleteFleetsCommand, } from "./commands/DeleteFleetsCommand";
import { DeleteFlowLogsCommand, } from "./commands/DeleteFlowLogsCommand";
import { DeleteFpgaImageCommand, } from "./commands/DeleteFpgaImageCommand";
import { DeleteInternetGatewayCommand, } from "./commands/DeleteInternetGatewayCommand";
import { DeleteKeyPairCommand, } from "./commands/DeleteKeyPairCommand";
import { DeleteLaunchTemplateCommand, } from "./commands/DeleteLaunchTemplateCommand";
import { DeleteLaunchTemplateVersionsCommand, } from "./commands/DeleteLaunchTemplateVersionsCommand";
import { DeleteLocalGatewayRouteCommand, } from "./commands/DeleteLocalGatewayRouteCommand";
import { DeleteLocalGatewayRouteTableVpcAssociationCommand, } from "./commands/DeleteLocalGatewayRouteTableVpcAssociationCommand";
import { DeleteManagedPrefixListCommand, } from "./commands/DeleteManagedPrefixListCommand";
import { DeleteNatGatewayCommand, } from "./commands/DeleteNatGatewayCommand";
import { DeleteNetworkAclCommand, } from "./commands/DeleteNetworkAclCommand";
import { DeleteNetworkAclEntryCommand, } from "./commands/DeleteNetworkAclEntryCommand";
import { DeleteNetworkInsightsAnalysisCommand, } from "./commands/DeleteNetworkInsightsAnalysisCommand";
import { DeleteNetworkInsightsPathCommand, } from "./commands/DeleteNetworkInsightsPathCommand";
import { DeleteNetworkInterfaceCommand, } from "./commands/DeleteNetworkInterfaceCommand";
import { DeleteNetworkInterfacePermissionCommand, } from "./commands/DeleteNetworkInterfacePermissionCommand";
import { DeletePlacementGroupCommand, } from "./commands/DeletePlacementGroupCommand";
import { DeleteQueuedReservedInstancesCommand, } from "./commands/DeleteQueuedReservedInstancesCommand";
import { DeleteRouteCommand } from "./commands/DeleteRouteCommand";
import { DeleteRouteTableCommand, } from "./commands/DeleteRouteTableCommand";
import { DeleteSecurityGroupCommand, } from "./commands/DeleteSecurityGroupCommand";
import { DeleteSnapshotCommand, } from "./commands/DeleteSnapshotCommand";
import { DeleteSpotDatafeedSubscriptionCommand, } from "./commands/DeleteSpotDatafeedSubscriptionCommand";
import { DeleteSubnetCommand, } from "./commands/DeleteSubnetCommand";
import { DeleteTagsCommand } from "./commands/DeleteTagsCommand";
import { DeleteTrafficMirrorFilterCommand, } from "./commands/DeleteTrafficMirrorFilterCommand";
import { DeleteTrafficMirrorFilterRuleCommand, } from "./commands/DeleteTrafficMirrorFilterRuleCommand";
import { DeleteTrafficMirrorSessionCommand, } from "./commands/DeleteTrafficMirrorSessionCommand";
import { DeleteTrafficMirrorTargetCommand, } from "./commands/DeleteTrafficMirrorTargetCommand";
import { DeleteTransitGatewayCommand, } from "./commands/DeleteTransitGatewayCommand";
import { DeleteTransitGatewayConnectCommand, } from "./commands/DeleteTransitGatewayConnectCommand";
import { DeleteTransitGatewayConnectPeerCommand, } from "./commands/DeleteTransitGatewayConnectPeerCommand";
import { DeleteTransitGatewayMulticastDomainCommand, } from "./commands/DeleteTransitGatewayMulticastDomainCommand";
import { DeleteTransitGatewayPeeringAttachmentCommand, } from "./commands/DeleteTransitGatewayPeeringAttachmentCommand";
import { DeleteTransitGatewayPrefixListReferenceCommand, } from "./commands/DeleteTransitGatewayPrefixListReferenceCommand";
import { DeleteTransitGatewayRouteCommand, } from "./commands/DeleteTransitGatewayRouteCommand";
import { DeleteTransitGatewayRouteTableCommand, } from "./commands/DeleteTransitGatewayRouteTableCommand";
import { DeleteTransitGatewayVpcAttachmentCommand, } from "./commands/DeleteTransitGatewayVpcAttachmentCommand";
import { DeleteVolumeCommand, } from "./commands/DeleteVolumeCommand";
import { DeleteVpcCommand } from "./commands/DeleteVpcCommand";
import { DeleteVpcEndpointConnectionNotificationsCommand, } from "./commands/DeleteVpcEndpointConnectionNotificationsCommand";
import { DeleteVpcEndpointServiceConfigurationsCommand, } from "./commands/DeleteVpcEndpointServiceConfigurationsCommand";
import { DeleteVpcEndpointsCommand, } from "./commands/DeleteVpcEndpointsCommand";
import { DeleteVpcPeeringConnectionCommand, } from "./commands/DeleteVpcPeeringConnectionCommand";
import { DeleteVpnConnectionCommand, } from "./commands/DeleteVpnConnectionCommand";
import { DeleteVpnConnectionRouteCommand, } from "./commands/DeleteVpnConnectionRouteCommand";
import { DeleteVpnGatewayCommand, } from "./commands/DeleteVpnGatewayCommand";
import { DeprovisionByoipCidrCommand, } from "./commands/DeprovisionByoipCidrCommand";
import { DeregisterImageCommand, } from "./commands/DeregisterImageCommand";
import { DeregisterInstanceEventNotificationAttributesCommand, } from "./commands/DeregisterInstanceEventNotificationAttributesCommand";
import { DeregisterTransitGatewayMulticastGroupMembersCommand, } from "./commands/DeregisterTransitGatewayMulticastGroupMembersCommand";
import { DeregisterTransitGatewayMulticastGroupSourcesCommand, } from "./commands/DeregisterTransitGatewayMulticastGroupSourcesCommand";
import { DescribeAccountAttributesCommand, } from "./commands/DescribeAccountAttributesCommand";
import { DescribeAddressesAttributeCommand, } from "./commands/DescribeAddressesAttributeCommand";
import { DescribeAddressesCommand, } from "./commands/DescribeAddressesCommand";
import { DescribeAggregateIdFormatCommand, } from "./commands/DescribeAggregateIdFormatCommand";
import { DescribeAvailabilityZonesCommand, } from "./commands/DescribeAvailabilityZonesCommand";
import { DescribeBundleTasksCommand, } from "./commands/DescribeBundleTasksCommand";
import { DescribeByoipCidrsCommand, } from "./commands/DescribeByoipCidrsCommand";
import { DescribeCapacityReservationsCommand, } from "./commands/DescribeCapacityReservationsCommand";
import { DescribeCarrierGatewaysCommand, } from "./commands/DescribeCarrierGatewaysCommand";
import { DescribeClassicLinkInstancesCommand, } from "./commands/DescribeClassicLinkInstancesCommand";
import { DescribeClientVpnAuthorizationRulesCommand, } from "./commands/DescribeClientVpnAuthorizationRulesCommand";
import { DescribeClientVpnConnectionsCommand, } from "./commands/DescribeClientVpnConnectionsCommand";
import { DescribeClientVpnEndpointsCommand, } from "./commands/DescribeClientVpnEndpointsCommand";
import { DescribeClientVpnRoutesCommand, } from "./commands/DescribeClientVpnRoutesCommand";
import { DescribeClientVpnTargetNetworksCommand, } from "./commands/DescribeClientVpnTargetNetworksCommand";
import { DescribeCoipPoolsCommand, } from "./commands/DescribeCoipPoolsCommand";
import { DescribeConversionTasksCommand, } from "./commands/DescribeConversionTasksCommand";
import { DescribeCustomerGatewaysCommand, } from "./commands/DescribeCustomerGatewaysCommand";
import { DescribeDhcpOptionsCommand, } from "./commands/DescribeDhcpOptionsCommand";
import { DescribeEgressOnlyInternetGatewaysCommand, } from "./commands/DescribeEgressOnlyInternetGatewaysCommand";
import { DescribeElasticGpusCommand, } from "./commands/DescribeElasticGpusCommand";
import { DescribeExportImageTasksCommand, } from "./commands/DescribeExportImageTasksCommand";
import { DescribeExportTasksCommand, } from "./commands/DescribeExportTasksCommand";
import { DescribeFastSnapshotRestoresCommand, } from "./commands/DescribeFastSnapshotRestoresCommand";
import { DescribeFleetHistoryCommand, } from "./commands/DescribeFleetHistoryCommand";
import { DescribeFleetInstancesCommand, } from "./commands/DescribeFleetInstancesCommand";
import { DescribeFleetsCommand, } from "./commands/DescribeFleetsCommand";
import { DescribeFlowLogsCommand, } from "./commands/DescribeFlowLogsCommand";
import { DescribeFpgaImageAttributeCommand, } from "./commands/DescribeFpgaImageAttributeCommand";
import { DescribeFpgaImagesCommand, } from "./commands/DescribeFpgaImagesCommand";
import { DescribeHostReservationOfferingsCommand, } from "./commands/DescribeHostReservationOfferingsCommand";
import { DescribeHostReservationsCommand, } from "./commands/DescribeHostReservationsCommand";
import { DescribeHostsCommand, } from "./commands/DescribeHostsCommand";
import { DescribeIamInstanceProfileAssociationsCommand, } from "./commands/DescribeIamInstanceProfileAssociationsCommand";
import { DescribeIdFormatCommand, } from "./commands/DescribeIdFormatCommand";
import { DescribeIdentityIdFormatCommand, } from "./commands/DescribeIdentityIdFormatCommand";
import { DescribeImageAttributeCommand, } from "./commands/DescribeImageAttributeCommand";
import { DescribeImagesCommand, } from "./commands/DescribeImagesCommand";
import { DescribeImportImageTasksCommand, } from "./commands/DescribeImportImageTasksCommand";
import { DescribeImportSnapshotTasksCommand, } from "./commands/DescribeImportSnapshotTasksCommand";
import { DescribeInstanceAttributeCommand, } from "./commands/DescribeInstanceAttributeCommand";
import { DescribeInstanceCreditSpecificationsCommand, } from "./commands/DescribeInstanceCreditSpecificationsCommand";
import { DescribeInstanceEventNotificationAttributesCommand, } from "./commands/DescribeInstanceEventNotificationAttributesCommand";
import { DescribeInstanceStatusCommand, } from "./commands/DescribeInstanceStatusCommand";
import { DescribeInstanceTypeOfferingsCommand, } from "./commands/DescribeInstanceTypeOfferingsCommand";
import { DescribeInstanceTypesCommand, } from "./commands/DescribeInstanceTypesCommand";
import { DescribeInstancesCommand, } from "./commands/DescribeInstancesCommand";
import { DescribeInternetGatewaysCommand, } from "./commands/DescribeInternetGatewaysCommand";
import { DescribeIpv6PoolsCommand, } from "./commands/DescribeIpv6PoolsCommand";
import { DescribeKeyPairsCommand, } from "./commands/DescribeKeyPairsCommand";
import { DescribeLaunchTemplateVersionsCommand, } from "./commands/DescribeLaunchTemplateVersionsCommand";
import { DescribeLaunchTemplatesCommand, } from "./commands/DescribeLaunchTemplatesCommand";
import { DescribeLocalGatewayRouteTableVirtualInterfaceGroupAssociationsCommand, } from "./commands/DescribeLocalGatewayRouteTableVirtualInterfaceGroupAssociationsCommand";
import { DescribeLocalGatewayRouteTableVpcAssociationsCommand, } from "./commands/DescribeLocalGatewayRouteTableVpcAssociationsCommand";
import { DescribeLocalGatewayRouteTablesCommand, } from "./commands/DescribeLocalGatewayRouteTablesCommand";
import { DescribeLocalGatewayVirtualInterfaceGroupsCommand, } from "./commands/DescribeLocalGatewayVirtualInterfaceGroupsCommand";
import { DescribeLocalGatewayVirtualInterfacesCommand, } from "./commands/DescribeLocalGatewayVirtualInterfacesCommand";
import { DescribeLocalGatewaysCommand, } from "./commands/DescribeLocalGatewaysCommand";
import { DescribeManagedPrefixListsCommand, } from "./commands/DescribeManagedPrefixListsCommand";
import { DescribeMovingAddressesCommand, } from "./commands/DescribeMovingAddressesCommand";
import { DescribeNatGatewaysCommand, } from "./commands/DescribeNatGatewaysCommand";
import { DescribeNetworkAclsCommand, } from "./commands/DescribeNetworkAclsCommand";
import { DescribeNetworkInsightsAnalysesCommand, } from "./commands/DescribeNetworkInsightsAnalysesCommand";
import { DescribeNetworkInsightsPathsCommand, } from "./commands/DescribeNetworkInsightsPathsCommand";
import { DescribeNetworkInterfaceAttributeCommand, } from "./commands/DescribeNetworkInterfaceAttributeCommand";
import { DescribeNetworkInterfacePermissionsCommand, } from "./commands/DescribeNetworkInterfacePermissionsCommand";
import { DescribeNetworkInterfacesCommand, } from "./commands/DescribeNetworkInterfacesCommand";
import { DescribePlacementGroupsCommand, } from "./commands/DescribePlacementGroupsCommand";
import { DescribePrefixListsCommand, } from "./commands/DescribePrefixListsCommand";
import { DescribePrincipalIdFormatCommand, } from "./commands/DescribePrincipalIdFormatCommand";
import { DescribePublicIpv4PoolsCommand, } from "./commands/DescribePublicIpv4PoolsCommand";
import { DescribeRegionsCommand, } from "./commands/DescribeRegionsCommand";
import { DescribeReplaceRootVolumeTasksCommand, } from "./commands/DescribeReplaceRootVolumeTasksCommand";
import { DescribeReservedInstancesCommand, } from "./commands/DescribeReservedInstancesCommand";
import { DescribeReservedInstancesListingsCommand, } from "./commands/DescribeReservedInstancesListingsCommand";
import { DescribeReservedInstancesModificationsCommand, } from "./commands/DescribeReservedInstancesModificationsCommand";
import { DescribeReservedInstancesOfferingsCommand, } from "./commands/DescribeReservedInstancesOfferingsCommand";
import { DescribeRouteTablesCommand, } from "./commands/DescribeRouteTablesCommand";
import { DescribeScheduledInstanceAvailabilityCommand, } from "./commands/DescribeScheduledInstanceAvailabilityCommand";
import { DescribeScheduledInstancesCommand, } from "./commands/DescribeScheduledInstancesCommand";
import { DescribeSecurityGroupReferencesCommand, } from "./commands/DescribeSecurityGroupReferencesCommand";
import { DescribeSecurityGroupsCommand, } from "./commands/DescribeSecurityGroupsCommand";
import { DescribeSnapshotAttributeCommand, } from "./commands/DescribeSnapshotAttributeCommand";
import { DescribeSnapshotsCommand, } from "./commands/DescribeSnapshotsCommand";
import { DescribeSpotDatafeedSubscriptionCommand, } from "./commands/DescribeSpotDatafeedSubscriptionCommand";
import { DescribeSpotFleetInstancesCommand, } from "./commands/DescribeSpotFleetInstancesCommand";
import { DescribeSpotFleetRequestHistoryCommand, } from "./commands/DescribeSpotFleetRequestHistoryCommand";
import { DescribeSpotFleetRequestsCommand, } from "./commands/DescribeSpotFleetRequestsCommand";
import { DescribeSpotInstanceRequestsCommand, } from "./commands/DescribeSpotInstanceRequestsCommand";
import { DescribeSpotPriceHistoryCommand, } from "./commands/DescribeSpotPriceHistoryCommand";
import { DescribeStaleSecurityGroupsCommand, } from "./commands/DescribeStaleSecurityGroupsCommand";
import { DescribeStoreImageTasksCommand, } from "./commands/DescribeStoreImageTasksCommand";
import { DescribeSubnetsCommand, } from "./commands/DescribeSubnetsCommand";
import { DescribeTagsCommand, } from "./commands/DescribeTagsCommand";
import { DescribeTrafficMirrorFiltersCommand, } from "./commands/DescribeTrafficMirrorFiltersCommand";
import { DescribeTrafficMirrorSessionsCommand, } from "./commands/DescribeTrafficMirrorSessionsCommand";
import { DescribeTrafficMirrorTargetsCommand, } from "./commands/DescribeTrafficMirrorTargetsCommand";
import { DescribeTransitGatewayAttachmentsCommand, } from "./commands/DescribeTransitGatewayAttachmentsCommand";
import { DescribeTransitGatewayConnectPeersCommand, } from "./commands/DescribeTransitGatewayConnectPeersCommand";
import { DescribeTransitGatewayConnectsCommand, } from "./commands/DescribeTransitGatewayConnectsCommand";
import { DescribeTransitGatewayMulticastDomainsCommand, } from "./commands/DescribeTransitGatewayMulticastDomainsCommand";
import { DescribeTransitGatewayPeeringAttachmentsCommand, } from "./commands/DescribeTransitGatewayPeeringAttachmentsCommand";
import { DescribeTransitGatewayRouteTablesCommand, } from "./commands/DescribeTransitGatewayRouteTablesCommand";
import { DescribeTransitGatewayVpcAttachmentsCommand, } from "./commands/DescribeTransitGatewayVpcAttachmentsCommand";
import { DescribeTransitGatewaysCommand, } from "./commands/DescribeTransitGatewaysCommand";
import { DescribeVolumeAttributeCommand, } from "./commands/DescribeVolumeAttributeCommand";
import { DescribeVolumeStatusCommand, } from "./commands/DescribeVolumeStatusCommand";
import { DescribeVolumesCommand, } from "./commands/DescribeVolumesCommand";
import { DescribeVolumesModificationsCommand, } from "./commands/DescribeVolumesModificationsCommand";
import { DescribeVpcAttributeCommand, } from "./commands/DescribeVpcAttributeCommand";
import { DescribeVpcClassicLinkCommand, } from "./commands/DescribeVpcClassicLinkCommand";
import { DescribeVpcClassicLinkDnsSupportCommand, } from "./commands/DescribeVpcClassicLinkDnsSupportCommand";
import { DescribeVpcEndpointConnectionNotificationsCommand, } from "./commands/DescribeVpcEndpointConnectionNotificationsCommand";
import { DescribeVpcEndpointConnectionsCommand, } from "./commands/DescribeVpcEndpointConnectionsCommand";
import { DescribeVpcEndpointServiceConfigurationsCommand, } from "./commands/DescribeVpcEndpointServiceConfigurationsCommand";
import { DescribeVpcEndpointServicePermissionsCommand, } from "./commands/DescribeVpcEndpointServicePermissionsCommand";
import { DescribeVpcEndpointServicesCommand, } from "./commands/DescribeVpcEndpointServicesCommand";
import { DescribeVpcEndpointsCommand, } from "./commands/DescribeVpcEndpointsCommand";
import { DescribeVpcPeeringConnectionsCommand, } from "./commands/DescribeVpcPeeringConnectionsCommand";
import { DescribeVpcsCommand, } from "./commands/DescribeVpcsCommand";
import { DescribeVpnConnectionsCommand, } from "./commands/DescribeVpnConnectionsCommand";
import { DescribeVpnGatewaysCommand, } from "./commands/DescribeVpnGatewaysCommand";
import { DetachClassicLinkVpcCommand, } from "./commands/DetachClassicLinkVpcCommand";
import { DetachInternetGatewayCommand, } from "./commands/DetachInternetGatewayCommand";
import { DetachNetworkInterfaceCommand, } from "./commands/DetachNetworkInterfaceCommand";
import { DetachVolumeCommand, } from "./commands/DetachVolumeCommand";
import { DetachVpnGatewayCommand, } from "./commands/DetachVpnGatewayCommand";
import { DisableEbsEncryptionByDefaultCommand, } from "./commands/DisableEbsEncryptionByDefaultCommand";
import { DisableFastSnapshotRestoresCommand, } from "./commands/DisableFastSnapshotRestoresCommand";
import { DisableSerialConsoleAccessCommand, } from "./commands/DisableSerialConsoleAccessCommand";
import { DisableTransitGatewayRouteTablePropagationCommand, } from "./commands/DisableTransitGatewayRouteTablePropagationCommand";
import { DisableVgwRoutePropagationCommand, } from "./commands/DisableVgwRoutePropagationCommand";
import { DisableVpcClassicLinkCommand, } from "./commands/DisableVpcClassicLinkCommand";
import { DisableVpcClassicLinkDnsSupportCommand, } from "./commands/DisableVpcClassicLinkDnsSupportCommand";
import { DisassociateAddressCommand, } from "./commands/DisassociateAddressCommand";
import { DisassociateClientVpnTargetNetworkCommand, } from "./commands/DisassociateClientVpnTargetNetworkCommand";
import { DisassociateEnclaveCertificateIamRoleCommand, } from "./commands/DisassociateEnclaveCertificateIamRoleCommand";
import { DisassociateIamInstanceProfileCommand, } from "./commands/DisassociateIamInstanceProfileCommand";
import { DisassociateRouteTableCommand, } from "./commands/DisassociateRouteTableCommand";
import { DisassociateSubnetCidrBlockCommand, } from "./commands/DisassociateSubnetCidrBlockCommand";
import { DisassociateTransitGatewayMulticastDomainCommand, } from "./commands/DisassociateTransitGatewayMulticastDomainCommand";
import { DisassociateTransitGatewayRouteTableCommand, } from "./commands/DisassociateTransitGatewayRouteTableCommand";
import { DisassociateVpcCidrBlockCommand, } from "./commands/DisassociateVpcCidrBlockCommand";
import { EnableEbsEncryptionByDefaultCommand, } from "./commands/EnableEbsEncryptionByDefaultCommand";
import { EnableFastSnapshotRestoresCommand, } from "./commands/EnableFastSnapshotRestoresCommand";
import { EnableSerialConsoleAccessCommand, } from "./commands/EnableSerialConsoleAccessCommand";
import { EnableTransitGatewayRouteTablePropagationCommand, } from "./commands/EnableTransitGatewayRouteTablePropagationCommand";
import { EnableVgwRoutePropagationCommand, } from "./commands/EnableVgwRoutePropagationCommand";
import { EnableVolumeIOCommand, } from "./commands/EnableVolumeIOCommand";
import { EnableVpcClassicLinkCommand, } from "./commands/EnableVpcClassicLinkCommand";
import { EnableVpcClassicLinkDnsSupportCommand, } from "./commands/EnableVpcClassicLinkDnsSupportCommand";
import { ExportClientVpnClientCertificateRevocationListCommand, } from "./commands/ExportClientVpnClientCertificateRevocationListCommand";
import { ExportClientVpnClientConfigurationCommand, } from "./commands/ExportClientVpnClientConfigurationCommand";
import { ExportImageCommand } from "./commands/ExportImageCommand";
import { ExportTransitGatewayRoutesCommand, } from "./commands/ExportTransitGatewayRoutesCommand";
import { GetAssociatedEnclaveCertificateIamRolesCommand, } from "./commands/GetAssociatedEnclaveCertificateIamRolesCommand";
import { GetAssociatedIpv6PoolCidrsCommand, } from "./commands/GetAssociatedIpv6PoolCidrsCommand";
import { GetCapacityReservationUsageCommand, } from "./commands/GetCapacityReservationUsageCommand";
import { GetCoipPoolUsageCommand, } from "./commands/GetCoipPoolUsageCommand";
import { GetConsoleOutputCommand, } from "./commands/GetConsoleOutputCommand";
import { GetConsoleScreenshotCommand, } from "./commands/GetConsoleScreenshotCommand";
import { GetDefaultCreditSpecificationCommand, } from "./commands/GetDefaultCreditSpecificationCommand";
import { GetEbsDefaultKmsKeyIdCommand, } from "./commands/GetEbsDefaultKmsKeyIdCommand";
import { GetEbsEncryptionByDefaultCommand, } from "./commands/GetEbsEncryptionByDefaultCommand";
import { GetFlowLogsIntegrationTemplateCommand, } from "./commands/GetFlowLogsIntegrationTemplateCommand";
import { GetGroupsForCapacityReservationCommand, } from "./commands/GetGroupsForCapacityReservationCommand";
import { GetHostReservationPurchasePreviewCommand, } from "./commands/GetHostReservationPurchasePreviewCommand";
import { GetLaunchTemplateDataCommand, } from "./commands/GetLaunchTemplateDataCommand";
import { GetManagedPrefixListAssociationsCommand, } from "./commands/GetManagedPrefixListAssociationsCommand";
import { GetManagedPrefixListEntriesCommand, } from "./commands/GetManagedPrefixListEntriesCommand";
import { GetPasswordDataCommand, } from "./commands/GetPasswordDataCommand";
import { GetReservedInstancesExchangeQuoteCommand, } from "./commands/GetReservedInstancesExchangeQuoteCommand";
import { GetSerialConsoleAccessStatusCommand, } from "./commands/GetSerialConsoleAccessStatusCommand";
import { GetTransitGatewayAttachmentPropagationsCommand, } from "./commands/GetTransitGatewayAttachmentPropagationsCommand";
import { GetTransitGatewayMulticastDomainAssociationsCommand, } from "./commands/GetTransitGatewayMulticastDomainAssociationsCommand";
import { GetTransitGatewayPrefixListReferencesCommand, } from "./commands/GetTransitGatewayPrefixListReferencesCommand";
import { GetTransitGatewayRouteTableAssociationsCommand, } from "./commands/GetTransitGatewayRouteTableAssociationsCommand";
import { GetTransitGatewayRouteTablePropagationsCommand, } from "./commands/GetTransitGatewayRouteTablePropagationsCommand";
import { ImportClientVpnClientCertificateRevocationListCommand, } from "./commands/ImportClientVpnClientCertificateRevocationListCommand";
import { ImportImageCommand } from "./commands/ImportImageCommand";
import { ImportInstanceCommand, } from "./commands/ImportInstanceCommand";
import { ImportKeyPairCommand, } from "./commands/ImportKeyPairCommand";
import { ImportSnapshotCommand, } from "./commands/ImportSnapshotCommand";
import { ImportVolumeCommand, } from "./commands/ImportVolumeCommand";
import { ModifyAddressAttributeCommand, } from "./commands/ModifyAddressAttributeCommand";
import { ModifyAvailabilityZoneGroupCommand, } from "./commands/ModifyAvailabilityZoneGroupCommand";
import { ModifyCapacityReservationCommand, } from "./commands/ModifyCapacityReservationCommand";
import { ModifyClientVpnEndpointCommand, } from "./commands/ModifyClientVpnEndpointCommand";
import { ModifyDefaultCreditSpecificationCommand, } from "./commands/ModifyDefaultCreditSpecificationCommand";
import { ModifyEbsDefaultKmsKeyIdCommand, } from "./commands/ModifyEbsDefaultKmsKeyIdCommand";
import { ModifyFleetCommand } from "./commands/ModifyFleetCommand";
import { ModifyFpgaImageAttributeCommand, } from "./commands/ModifyFpgaImageAttributeCommand";
import { ModifyHostsCommand } from "./commands/ModifyHostsCommand";
import { ModifyIdFormatCommand, } from "./commands/ModifyIdFormatCommand";
import { ModifyIdentityIdFormatCommand, } from "./commands/ModifyIdentityIdFormatCommand";
import { ModifyImageAttributeCommand, } from "./commands/ModifyImageAttributeCommand";
import { ModifyInstanceAttributeCommand, } from "./commands/ModifyInstanceAttributeCommand";
import { ModifyInstanceCapacityReservationAttributesCommand, } from "./commands/ModifyInstanceCapacityReservationAttributesCommand";
import { ModifyInstanceCreditSpecificationCommand, } from "./commands/ModifyInstanceCreditSpecificationCommand";
import { ModifyInstanceEventStartTimeCommand, } from "./commands/ModifyInstanceEventStartTimeCommand";
import { ModifyInstanceMetadataOptionsCommand, } from "./commands/ModifyInstanceMetadataOptionsCommand";
import { ModifyInstancePlacementCommand, } from "./commands/ModifyInstancePlacementCommand";
import { ModifyLaunchTemplateCommand, } from "./commands/ModifyLaunchTemplateCommand";
import { ModifyManagedPrefixListCommand, } from "./commands/ModifyManagedPrefixListCommand";
import { ModifyNetworkInterfaceAttributeCommand, } from "./commands/ModifyNetworkInterfaceAttributeCommand";
import { ModifyReservedInstancesCommand, } from "./commands/ModifyReservedInstancesCommand";
import { ModifySnapshotAttributeCommand, } from "./commands/ModifySnapshotAttributeCommand";
import { ModifySpotFleetRequestCommand, } from "./commands/ModifySpotFleetRequestCommand";
import { ModifySubnetAttributeCommand, } from "./commands/ModifySubnetAttributeCommand";
import { ModifyTrafficMirrorFilterNetworkServicesCommand, } from "./commands/ModifyTrafficMirrorFilterNetworkServicesCommand";
import { ModifyTrafficMirrorFilterRuleCommand, } from "./commands/ModifyTrafficMirrorFilterRuleCommand";
import { ModifyTrafficMirrorSessionCommand, } from "./commands/ModifyTrafficMirrorSessionCommand";
import { ModifyTransitGatewayCommand, } from "./commands/ModifyTransitGatewayCommand";
import { ModifyTransitGatewayPrefixListReferenceCommand, } from "./commands/ModifyTransitGatewayPrefixListReferenceCommand";
import { ModifyTransitGatewayVpcAttachmentCommand, } from "./commands/ModifyTransitGatewayVpcAttachmentCommand";
import { ModifyVolumeAttributeCommand, } from "./commands/ModifyVolumeAttributeCommand";
import { ModifyVolumeCommand, } from "./commands/ModifyVolumeCommand";
import { ModifyVpcAttributeCommand, } from "./commands/ModifyVpcAttributeCommand";
import { ModifyVpcEndpointCommand, } from "./commands/ModifyVpcEndpointCommand";
import { ModifyVpcEndpointConnectionNotificationCommand, } from "./commands/ModifyVpcEndpointConnectionNotificationCommand";
import { ModifyVpcEndpointServiceConfigurationCommand, } from "./commands/ModifyVpcEndpointServiceConfigurationCommand";
import { ModifyVpcEndpointServicePermissionsCommand, } from "./commands/ModifyVpcEndpointServicePermissionsCommand";
import { ModifyVpcPeeringConnectionOptionsCommand, } from "./commands/ModifyVpcPeeringConnectionOptionsCommand";
import { ModifyVpcTenancyCommand, } from "./commands/ModifyVpcTenancyCommand";
import { ModifyVpnConnectionCommand, } from "./commands/ModifyVpnConnectionCommand";
import { ModifyVpnConnectionOptionsCommand, } from "./commands/ModifyVpnConnectionOptionsCommand";
import { ModifyVpnTunnelCertificateCommand, } from "./commands/ModifyVpnTunnelCertificateCommand";
import { ModifyVpnTunnelOptionsCommand, } from "./commands/ModifyVpnTunnelOptionsCommand";
import { MonitorInstancesCommand, } from "./commands/MonitorInstancesCommand";
import { MoveAddressToVpcCommand, } from "./commands/MoveAddressToVpcCommand";
import { ProvisionByoipCidrCommand, } from "./commands/ProvisionByoipCidrCommand";
import { PurchaseHostReservationCommand, } from "./commands/PurchaseHostReservationCommand";
import { PurchaseReservedInstancesOfferingCommand, } from "./commands/PurchaseReservedInstancesOfferingCommand";
import { PurchaseScheduledInstancesCommand, } from "./commands/PurchaseScheduledInstancesCommand";
import { RebootInstancesCommand, } from "./commands/RebootInstancesCommand";
import { RegisterImageCommand, } from "./commands/RegisterImageCommand";
import { RegisterInstanceEventNotificationAttributesCommand, } from "./commands/RegisterInstanceEventNotificationAttributesCommand";
import { RegisterTransitGatewayMulticastGroupMembersCommand, } from "./commands/RegisterTransitGatewayMulticastGroupMembersCommand";
import { RegisterTransitGatewayMulticastGroupSourcesCommand, } from "./commands/RegisterTransitGatewayMulticastGroupSourcesCommand";
import { RejectTransitGatewayMulticastDomainAssociationsCommand, } from "./commands/RejectTransitGatewayMulticastDomainAssociationsCommand";
import { RejectTransitGatewayPeeringAttachmentCommand, } from "./commands/RejectTransitGatewayPeeringAttachmentCommand";
import { RejectTransitGatewayVpcAttachmentCommand, } from "./commands/RejectTransitGatewayVpcAttachmentCommand";
import { RejectVpcEndpointConnectionsCommand, } from "./commands/RejectVpcEndpointConnectionsCommand";
import { RejectVpcPeeringConnectionCommand, } from "./commands/RejectVpcPeeringConnectionCommand";
import { ReleaseAddressCommand, } from "./commands/ReleaseAddressCommand";
import { ReleaseHostsCommand, } from "./commands/ReleaseHostsCommand";
import { ReplaceIamInstanceProfileAssociationCommand, } from "./commands/ReplaceIamInstanceProfileAssociationCommand";
import { ReplaceNetworkAclAssociationCommand, } from "./commands/ReplaceNetworkAclAssociationCommand";
import { ReplaceNetworkAclEntryCommand, } from "./commands/ReplaceNetworkAclEntryCommand";
import { ReplaceRouteCommand, } from "./commands/ReplaceRouteCommand";
import { ReplaceRouteTableAssociationCommand, } from "./commands/ReplaceRouteTableAssociationCommand";
import { ReplaceTransitGatewayRouteCommand, } from "./commands/ReplaceTransitGatewayRouteCommand";
import { ReportInstanceStatusCommand, } from "./commands/ReportInstanceStatusCommand";
import { RequestSpotFleetCommand, } from "./commands/RequestSpotFleetCommand";
import { RequestSpotInstancesCommand, } from "./commands/RequestSpotInstancesCommand";
import { ResetAddressAttributeCommand, } from "./commands/ResetAddressAttributeCommand";
import { ResetEbsDefaultKmsKeyIdCommand, } from "./commands/ResetEbsDefaultKmsKeyIdCommand";
import { ResetFpgaImageAttributeCommand, } from "./commands/ResetFpgaImageAttributeCommand";
import { ResetImageAttributeCommand, } from "./commands/ResetImageAttributeCommand";
import { ResetInstanceAttributeCommand, } from "./commands/ResetInstanceAttributeCommand";
import { ResetNetworkInterfaceAttributeCommand, } from "./commands/ResetNetworkInterfaceAttributeCommand";
import { ResetSnapshotAttributeCommand, } from "./commands/ResetSnapshotAttributeCommand";
import { RestoreAddressToClassicCommand, } from "./commands/RestoreAddressToClassicCommand";
import { RestoreManagedPrefixListVersionCommand, } from "./commands/RestoreManagedPrefixListVersionCommand";
import { RevokeClientVpnIngressCommand, } from "./commands/RevokeClientVpnIngressCommand";
import { RevokeSecurityGroupEgressCommand, } from "./commands/RevokeSecurityGroupEgressCommand";
import { RevokeSecurityGroupIngressCommand, } from "./commands/RevokeSecurityGroupIngressCommand";
import { RunInstancesCommand, } from "./commands/RunInstancesCommand";
import { RunScheduledInstancesCommand, } from "./commands/RunScheduledInstancesCommand";
import { SearchLocalGatewayRoutesCommand, } from "./commands/SearchLocalGatewayRoutesCommand";
import { SearchTransitGatewayMulticastGroupsCommand, } from "./commands/SearchTransitGatewayMulticastGroupsCommand";
import { SearchTransitGatewayRoutesCommand, } from "./commands/SearchTransitGatewayRoutesCommand";
import { SendDiagnosticInterruptCommand, } from "./commands/SendDiagnosticInterruptCommand";
import { StartInstancesCommand, } from "./commands/StartInstancesCommand";
import { StartNetworkInsightsAnalysisCommand, } from "./commands/StartNetworkInsightsAnalysisCommand";
import { StartVpcEndpointServicePrivateDnsVerificationCommand, } from "./commands/StartVpcEndpointServicePrivateDnsVerificationCommand";
import { StopInstancesCommand, } from "./commands/StopInstancesCommand";
import { TerminateClientVpnConnectionsCommand, } from "./commands/TerminateClientVpnConnectionsCommand";
import { TerminateInstancesCommand, } from "./commands/TerminateInstancesCommand";
import { UnassignIpv6AddressesCommand, } from "./commands/UnassignIpv6AddressesCommand";
import { UnassignPrivateIpAddressesCommand, } from "./commands/UnassignPrivateIpAddressesCommand";
import { UnmonitorInstancesCommand, } from "./commands/UnmonitorInstancesCommand";
import { UpdateSecurityGroupRuleDescriptionsEgressCommand, } from "./commands/UpdateSecurityGroupRuleDescriptionsEgressCommand";
import { UpdateSecurityGroupRuleDescriptionsIngressCommand, } from "./commands/UpdateSecurityGroupRuleDescriptionsIngressCommand";
import { WithdrawByoipCidrCommand, } from "./commands/WithdrawByoipCidrCommand";
/**
 * <fullname>Amazon Elastic Compute Cloud</fullname>
 *          <p>Amazon Elastic Compute Cloud (Amazon EC2) provides secure and resizable computing capacity in the AWS Cloud.
 *           Using Amazon EC2 eliminates the need to invest in hardware up front, so you can develop and deploy applications
 *           faster. Amazon Virtual Private Cloud (Amazon VPC) enables you to provision a logically isolated section of the
 *           AWS Cloud where you can launch AWS resources in a virtual network that you've defined. Amazon Elastic Block Store
 *           (Amazon EBS) provides block level storage volumes for use with EC2 instances. EBS volumes are highly available
 *           and reliable storage volumes that can be attached to any running instance and used like a hard drive.</p>
 *          <p>To learn more, see the following resources:</p>
 *          <ul>
 *             <li>
 *                <p>Amazon EC2: <a href="http://aws.amazon.com/ec2">AmazonEC2 product page</a>, <a href="http://aws.amazon.com/documentation/ec2">Amazon EC2 documentation</a>
 *                </p>
 *             </li>
 *             <li>
 *                <p>Amazon EBS: <a href="http://aws.amazon.com/ebs">Amazon EBS product page</a>, <a href="http://aws.amazon.com/documentation/ebs">Amazon EBS documentation</a>
 *                </p>
 *             </li>
 *             <li>
 *                <p>Amazon VPC: <a href="http://aws.amazon.com/vpc">Amazon VPC product page</a>, <a href="http://aws.amazon.com/documentation/vpc">Amazon VPC documentation</a>
 *                </p>
 *             </li>
 *             <li>
 *                <p>AWS VPN: <a href="http://aws.amazon.com/vpn">AWS VPN product page</a>, <a href="http://aws.amazon.com/documentation/vpn">AWS VPN documentation</a>
 *                </p>
 *             </li>
 *          </ul>
 */
var EC2 = /** @class */ (function (_super) {
    __extends(EC2, _super);
    function EC2() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    EC2.prototype.acceptReservedInstancesExchangeQuote = function (args, optionsOrCb, cb) {
        var command = new AcceptReservedInstancesExchangeQuoteCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error("Expect http options but get " + typeof optionsOrCb);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    };
    EC2.prototype.acceptTransitGatewayMulticastDomainAssociations = function (args, optionsOrCb, cb) {
        var command = new AcceptTransitGatewayMulticastDomainAssociationsCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error("Expect http options but get " + typeof optionsOrCb);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    };
    EC2.prototype.acceptTransitGatewayPeeringAttachment = function (args, optionsOrCb, cb) {
        var command = new AcceptTransitGatewayPeeringAttachmentCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error("Expect http options but get " + typeof optionsOrCb);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    };
    EC2.prototype.acceptTransitGatewayVpcAttachment = function (args, optionsOrCb, cb) {
        var command = new AcceptTransitGatewayVpcAttachmentCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error("Expect http options but get " + typeof optionsOrCb);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    };
    EC2.prototype.acceptVpcEndpointConnections = function (args, optionsOrCb, cb) {
        var command = new AcceptVpcEndpointConnectionsCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error("Expect http options but get " + typeof optionsOrCb);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    };
    EC2.prototype.acceptVpcPeeringConnection = function (args, optionsOrCb, cb) {
        var command = new AcceptVpcPeeringConnectionCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error("Expect http options but get " + typeof optionsOrCb);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    };
    EC2.prototype.advertiseByoipCidr = function (args, optionsOrCb, cb) {
        var command = new AdvertiseByoipCidrCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error("Expect http options but get " + typeof optionsOrCb);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    };
    EC2.prototype.allocateAddress = function (args, optionsOrCb, cb) {
        var command = new AllocateAddressCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error("Expect http options but get " + typeof optionsOrCb);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    };
    EC2.prototype.allocateHosts = function (args, optionsOrCb, cb) {
        var command = new AllocateHostsCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error("Expect http options but get " + typeof optionsOrCb);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    };
    EC2.prototype.applySecurityGroupsToClientVpnTargetNetwork = function (args, optionsOrCb, cb) {
        var command = new ApplySecurityGroupsToClientVpnTargetNetworkCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error("Expect http options but get " + typeof optionsOrCb);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    };
    EC2.prototype.assignIpv6Addresses = function (args, optionsOrCb, cb) {
        var command = new AssignIpv6AddressesCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error("Expect http options but get " + typeof optionsOrCb);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    };
    EC2.prototype.assignPrivateIpAddresses = function (args, optionsOrCb, cb) {
        var command = new AssignPrivateIpAddressesCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error("Expect http options but get " + typeof optionsOrCb);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    };
    EC2.prototype.associateAddress = function (args, optionsOrCb, cb) {
        var command = new AssociateAddressCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error("Expect http options but get " + typeof optionsOrCb);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    };
    EC2.prototype.associateClientVpnTargetNetwork = function (args, optionsOrCb, cb) {
        var command = new AssociateClientVpnTargetNetworkCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error("Expect http options but get " + typeof optionsOrCb);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    };
    EC2.prototype.associateDhcpOptions = function (args, optionsOrCb, cb) {
        var command = new AssociateDhcpOptionsCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error("Expect http options but get " + typeof optionsOrCb);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    };
    EC2.prototype.associateEnclaveCertificateIamRole = function (args, optionsOrCb, cb) {
        var command = new AssociateEnclaveCertificateIamRoleCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error("Expect http options but get " + typeof optionsOrCb);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    };
    EC2.prototype.associateIamInstanceProfile = function (args, optionsOrCb, cb) {
        var command = new AssociateIamInstanceProfileCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error("Expect http options but get " + typeof optionsOrCb);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    };
    EC2.prototype.associateRouteTable = function (args, optionsOrCb, cb) {
        var command = new AssociateRouteTableCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error("Expect http options but get " + typeof optionsOrCb);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    };
    EC2.prototype.associateSubnetCidrBlock = function (args, optionsOrCb, cb) {
        var command = new AssociateSubnetCidrBlockCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error("Expect http options but get " + typeof optionsOrCb);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    };
    EC2.prototype.associateTransitGatewayMulticastDomain = function (args, optionsOrCb, cb) {
        var command = new AssociateTransitGatewayMulticastDomainCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error("Expect http options but get " + typeof optionsOrCb);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    };
    EC2.prototype.associateTransitGatewayRouteTable = function (args, optionsOrCb, cb) {
        var command = new AssociateTransitGatewayRouteTableCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error("Expect http options but get " + typeof optionsOrCb);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    };
    EC2.prototype.associateVpcCidrBlock = function (args, optionsOrCb, cb) {
        var command = new AssociateVpcCidrBlockCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error("Expect http options but get " + typeof optionsOrCb);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    };
    EC2.prototype.attachClassicLinkVpc = function (args, optionsOrCb, cb) {
        var command = new AttachClassicLinkVpcCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error("Expect http options but get " + typeof optionsOrCb);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    };
    EC2.prototype.attachInternetGateway = function (args, optionsOrCb, cb) {
        var command = new AttachInternetGatewayCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error("Expect http options but get " + typeof optionsOrCb);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    };
    EC2.prototype.attachNetworkInterface = function (args, optionsOrCb, cb) {
        var command = new AttachNetworkInterfaceCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error("Expect http options but get " + typeof optionsOrCb);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    };
    EC2.prototype.attachVolume = function (args, optionsOrCb, cb) {
        var command = new AttachVolumeCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error("Expect http options but get " + typeof optionsOrCb);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    };
    EC2.prototype.attachVpnGateway = function (args, optionsOrCb, cb) {
        var command = new AttachVpnGatewayCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error("Expect http options but get " + typeof optionsOrCb);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    };
    EC2.prototype.authorizeClientVpnIngress = function (args, optionsOrCb, cb) {
        var command = new AuthorizeClientVpnIngressCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error("Expect http options but get " + typeof optionsOrCb);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    };
    EC2.prototype.authorizeSecurityGroupEgress = function (args, optionsOrCb, cb) {
        var command = new AuthorizeSecurityGroupEgressCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error("Expect http options but get " + typeof optionsOrCb);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    };
    EC2.prototype.authorizeSecurityGroupIngress = function (args, optionsOrCb, cb) {
        var command = new AuthorizeSecurityGroupIngressCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error("Expect http options but get " + typeof optionsOrCb);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    };
    EC2.prototype.bundleInstance = function (args, optionsOrCb, cb) {
        var command = new BundleInstanceCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error("Expect http options but get " + typeof optionsOrCb);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    };
    EC2.prototype.cancelBundleTask = function (args, optionsOrCb, cb) {
        var command = new CancelBundleTaskCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error("Expect http options but get " + typeof optionsOrCb);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    };
    EC2.prototype.cancelCapacityReservation = function (args, optionsOrCb, cb) {
        var command = new CancelCapacityReservationCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error("Expect http options but get " + typeof optionsOrCb);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    };
    EC2.prototype.cancelConversionTask = function (args, optionsOrCb, cb) {
        var command = new CancelConversionTaskCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error("Expect http options but get " + typeof optionsOrCb);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    };
    EC2.prototype.cancelExportTask = function (args, optionsOrCb, cb) {
        var command = new CancelExportTaskCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error("Expect http options but get " + typeof optionsOrCb);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    };
    EC2.prototype.cancelImportTask = function (args, optionsOrCb, cb) {
        var command = new CancelImportTaskCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error("Expect http options but get " + typeof optionsOrCb);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    };
    EC2.prototype.cancelReservedInstancesListing = function (args, optionsOrCb, cb) {
        var command = new CancelReservedInstancesListingCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error("Expect http options but get " + typeof optionsOrCb);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    };
    EC2.prototype.cancelSpotFleetRequests = function (args, optionsOrCb, cb) {
        var command = new CancelSpotFleetRequestsCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error("Expect http options but get " + typeof optionsOrCb);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    };
    EC2.prototype.cancelSpotInstanceRequests = function (args, optionsOrCb, cb) {
        var command = new CancelSpotInstanceRequestsCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error("Expect http options but get " + typeof optionsOrCb);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    };
    EC2.prototype.confirmProductInstance = function (args, optionsOrCb, cb) {
        var command = new ConfirmProductInstanceCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error("Expect http options but get " + typeof optionsOrCb);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    };
    EC2.prototype.copyFpgaImage = function (args, optionsOrCb, cb) {
        var command = new CopyFpgaImageCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error("Expect http options but get " + typeof optionsOrCb);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    };
    EC2.prototype.copyImage = function (args, optionsOrCb, cb) {
        var command = new CopyImageCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error("Expect http options but get " + typeof optionsOrCb);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    };
    EC2.prototype.copySnapshot = function (args, optionsOrCb, cb) {
        var command = new CopySnapshotCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error("Expect http options but get " + typeof optionsOrCb);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    };
    EC2.prototype.createCapacityReservation = function (args, optionsOrCb, cb) {
        var command = new CreateCapacityReservationCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error("Expect http options but get " + typeof optionsOrCb);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    };
    EC2.prototype.createCarrierGateway = function (args, optionsOrCb, cb) {
        var command = new CreateCarrierGatewayCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error("Expect http options but get " + typeof optionsOrCb);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    };
    EC2.prototype.createClientVpnEndpoint = function (args, optionsOrCb, cb) {
        var command = new CreateClientVpnEndpointCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error("Expect http options but get " + typeof optionsOrCb);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    };
    EC2.prototype.createClientVpnRoute = function (args, optionsOrCb, cb) {
        var command = new CreateClientVpnRouteCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error("Expect http options but get " + typeof optionsOrCb);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    };
    EC2.prototype.createCustomerGateway = function (args, optionsOrCb, cb) {
        var command = new CreateCustomerGatewayCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error("Expect http options but get " + typeof optionsOrCb);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    };
    EC2.prototype.createDefaultSubnet = function (args, optionsOrCb, cb) {
        var command = new CreateDefaultSubnetCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error("Expect http options but get " + typeof optionsOrCb);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    };
    EC2.prototype.createDefaultVpc = function (args, optionsOrCb, cb) {
        var command = new CreateDefaultVpcCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error("Expect http options but get " + typeof optionsOrCb);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    };
    EC2.prototype.createDhcpOptions = function (args, optionsOrCb, cb) {
        var command = new CreateDhcpOptionsCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error("Expect http options but get " + typeof optionsOrCb);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    };
    EC2.prototype.createEgressOnlyInternetGateway = function (args, optionsOrCb, cb) {
        var command = new CreateEgressOnlyInternetGatewayCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error("Expect http options but get " + typeof optionsOrCb);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    };
    EC2.prototype.createFleet = function (args, optionsOrCb, cb) {
        var command = new CreateFleetCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error("Expect http options but get " + typeof optionsOrCb);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    };
    EC2.prototype.createFlowLogs = function (args, optionsOrCb, cb) {
        var command = new CreateFlowLogsCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error("Expect http options but get " + typeof optionsOrCb);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    };
    EC2.prototype.createFpgaImage = function (args, optionsOrCb, cb) {
        var command = new CreateFpgaImageCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error("Expect http options but get " + typeof optionsOrCb);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    };
    EC2.prototype.createImage = function (args, optionsOrCb, cb) {
        var command = new CreateImageCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error("Expect http options but get " + typeof optionsOrCb);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    };
    EC2.prototype.createInstanceExportTask = function (args, optionsOrCb, cb) {
        var command = new CreateInstanceExportTaskCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error("Expect http options but get " + typeof optionsOrCb);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    };
    EC2.prototype.createInternetGateway = function (args, optionsOrCb, cb) {
        var command = new CreateInternetGatewayCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error("Expect http options but get " + typeof optionsOrCb);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    };
    EC2.prototype.createKeyPair = function (args, optionsOrCb, cb) {
        var command = new CreateKeyPairCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error("Expect http options but get " + typeof optionsOrCb);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    };
    EC2.prototype.createLaunchTemplate = function (args, optionsOrCb, cb) {
        var command = new CreateLaunchTemplateCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error("Expect http options but get " + typeof optionsOrCb);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    };
    EC2.prototype.createLaunchTemplateVersion = function (args, optionsOrCb, cb) {
        var command = new CreateLaunchTemplateVersionCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error("Expect http options but get " + typeof optionsOrCb);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    };
    EC2.prototype.createLocalGatewayRoute = function (args, optionsOrCb, cb) {
        var command = new CreateLocalGatewayRouteCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error("Expect http options but get " + typeof optionsOrCb);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    };
    EC2.prototype.createLocalGatewayRouteTableVpcAssociation = function (args, optionsOrCb, cb) {
        var command = new CreateLocalGatewayRouteTableVpcAssociationCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error("Expect http options but get " + typeof optionsOrCb);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    };
    EC2.prototype.createManagedPrefixList = function (args, optionsOrCb, cb) {
        var command = new CreateManagedPrefixListCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error("Expect http options but get " + typeof optionsOrCb);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    };
    EC2.prototype.createNatGateway = function (args, optionsOrCb, cb) {
        var command = new CreateNatGatewayCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error("Expect http options but get " + typeof optionsOrCb);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    };
    EC2.prototype.createNetworkAcl = function (args, optionsOrCb, cb) {
        var command = new CreateNetworkAclCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error("Expect http options but get " + typeof optionsOrCb);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    };
    EC2.prototype.createNetworkAclEntry = function (args, optionsOrCb, cb) {
        var command = new CreateNetworkAclEntryCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error("Expect http options but get " + typeof optionsOrCb);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    };
    EC2.prototype.createNetworkInsightsPath = function (args, optionsOrCb, cb) {
        var command = new CreateNetworkInsightsPathCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error("Expect http options but get " + typeof optionsOrCb);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    };
    EC2.prototype.createNetworkInterface = function (args, optionsOrCb, cb) {
        var command = new CreateNetworkInterfaceCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error("Expect http options but get " + typeof optionsOrCb);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    };
    EC2.prototype.createNetworkInterfacePermission = function (args, optionsOrCb, cb) {
        var command = new CreateNetworkInterfacePermissionCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error("Expect http options but get " + typeof optionsOrCb);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    };
    EC2.prototype.createPlacementGroup = function (args, optionsOrCb, cb) {
        var command = new CreatePlacementGroupCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error("Expect http options but get " + typeof optionsOrCb);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    };
    EC2.prototype.createReplaceRootVolumeTask = function (args, optionsOrCb, cb) {
        var command = new CreateReplaceRootVolumeTaskCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error("Expect http options but get " + typeof optionsOrCb);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    };
    EC2.prototype.createReservedInstancesListing = function (args, optionsOrCb, cb) {
        var command = new CreateReservedInstancesListingCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error("Expect http options but get " + typeof optionsOrCb);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    };
    EC2.prototype.createRestoreImageTask = function (args, optionsOrCb, cb) {
        var command = new CreateRestoreImageTaskCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error("Expect http options but get " + typeof optionsOrCb);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    };
    EC2.prototype.createRoute = function (args, optionsOrCb, cb) {
        var command = new CreateRouteCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error("Expect http options but get " + typeof optionsOrCb);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    };
    EC2.prototype.createRouteTable = function (args, optionsOrCb, cb) {
        var command = new CreateRouteTableCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error("Expect http options but get " + typeof optionsOrCb);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    };
    EC2.prototype.createSecurityGroup = function (args, optionsOrCb, cb) {
        var command = new CreateSecurityGroupCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error("Expect http options but get " + typeof optionsOrCb);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    };
    EC2.prototype.createSnapshot = function (args, optionsOrCb, cb) {
        var command = new CreateSnapshotCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error("Expect http options but get " + typeof optionsOrCb);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    };
    EC2.prototype.createSnapshots = function (args, optionsOrCb, cb) {
        var command = new CreateSnapshotsCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error("Expect http options but get " + typeof optionsOrCb);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    };
    EC2.prototype.createSpotDatafeedSubscription = function (args, optionsOrCb, cb) {
        var command = new CreateSpotDatafeedSubscriptionCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error("Expect http options but get " + typeof optionsOrCb);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    };
    EC2.prototype.createStoreImageTask = function (args, optionsOrCb, cb) {
        var command = new CreateStoreImageTaskCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error("Expect http options but get " + typeof optionsOrCb);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    };
    EC2.prototype.createSubnet = function (args, optionsOrCb, cb) {
        var command = new CreateSubnetCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error("Expect http options but get " + typeof optionsOrCb);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    };
    EC2.prototype.createTags = function (args, optionsOrCb, cb) {
        var command = new CreateTagsCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error("Expect http options but get " + typeof optionsOrCb);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    };
    EC2.prototype.createTrafficMirrorFilter = function (args, optionsOrCb, cb) {
        var command = new CreateTrafficMirrorFilterCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error("Expect http options but get " + typeof optionsOrCb);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    };
    EC2.prototype.createTrafficMirrorFilterRule = function (args, optionsOrCb, cb) {
        var command = new CreateTrafficMirrorFilterRuleCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error("Expect http options but get " + typeof optionsOrCb);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    };
    EC2.prototype.createTrafficMirrorSession = function (args, optionsOrCb, cb) {
        var command = new CreateTrafficMirrorSessionCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error("Expect http options but get " + typeof optionsOrCb);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    };
    EC2.prototype.createTrafficMirrorTarget = function (args, optionsOrCb, cb) {
        var command = new CreateTrafficMirrorTargetCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error("Expect http options but get " + typeof optionsOrCb);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    };
    EC2.prototype.createTransitGateway = function (args, optionsOrCb, cb) {
        var command = new CreateTransitGatewayCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error("Expect http options but get " + typeof optionsOrCb);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    };
    EC2.prototype.createTransitGatewayConnect = function (args, optionsOrCb, cb) {
        var command = new CreateTransitGatewayConnectCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error("Expect http options but get " + typeof optionsOrCb);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    };
    EC2.prototype.createTransitGatewayConnectPeer = function (args, optionsOrCb, cb) {
        var command = new CreateTransitGatewayConnectPeerCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error("Expect http options but get " + typeof optionsOrCb);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    };
    EC2.prototype.createTransitGatewayMulticastDomain = function (args, optionsOrCb, cb) {
        var command = new CreateTransitGatewayMulticastDomainCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error("Expect http options but get " + typeof optionsOrCb);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    };
    EC2.prototype.createTransitGatewayPeeringAttachment = function (args, optionsOrCb, cb) {
        var command = new CreateTransitGatewayPeeringAttachmentCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error("Expect http options but get " + typeof optionsOrCb);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    };
    EC2.prototype.createTransitGatewayPrefixListReference = function (args, optionsOrCb, cb) {
        var command = new CreateTransitGatewayPrefixListReferenceCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error("Expect http options but get " + typeof optionsOrCb);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    };
    EC2.prototype.createTransitGatewayRoute = function (args, optionsOrCb, cb) {
        var command = new CreateTransitGatewayRouteCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error("Expect http options but get " + typeof optionsOrCb);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    };
    EC2.prototype.createTransitGatewayRouteTable = function (args, optionsOrCb, cb) {
        var command = new CreateTransitGatewayRouteTableCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error("Expect http options but get " + typeof optionsOrCb);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    };
    EC2.prototype.createTransitGatewayVpcAttachment = function (args, optionsOrCb, cb) {
        var command = new CreateTransitGatewayVpcAttachmentCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error("Expect http options but get " + typeof optionsOrCb);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    };
    EC2.prototype.createVolume = function (args, optionsOrCb, cb) {
        var command = new CreateVolumeCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error("Expect http options but get " + typeof optionsOrCb);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    };
    EC2.prototype.createVpc = function (args, optionsOrCb, cb) {
        var command = new CreateVpcCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error("Expect http options but get " + typeof optionsOrCb);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    };
    EC2.prototype.createVpcEndpoint = function (args, optionsOrCb, cb) {
        var command = new CreateVpcEndpointCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error("Expect http options but get " + typeof optionsOrCb);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    };
    EC2.prototype.createVpcEndpointConnectionNotification = function (args, optionsOrCb, cb) {
        var command = new CreateVpcEndpointConnectionNotificationCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error("Expect http options but get " + typeof optionsOrCb);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    };
    EC2.prototype.createVpcEndpointServiceConfiguration = function (args, optionsOrCb, cb) {
        var command = new CreateVpcEndpointServiceConfigurationCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error("Expect http options but get " + typeof optionsOrCb);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    };
    EC2.prototype.createVpcPeeringConnection = function (args, optionsOrCb, cb) {
        var command = new CreateVpcPeeringConnectionCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error("Expect http options but get " + typeof optionsOrCb);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    };
    EC2.prototype.createVpnConnection = function (args, optionsOrCb, cb) {
        var command = new CreateVpnConnectionCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error("Expect http options but get " + typeof optionsOrCb);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    };
    EC2.prototype.createVpnConnectionRoute = function (args, optionsOrCb, cb) {
        var command = new CreateVpnConnectionRouteCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error("Expect http options but get " + typeof optionsOrCb);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    };
    EC2.prototype.createVpnGateway = function (args, optionsOrCb, cb) {
        var command = new CreateVpnGatewayCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error("Expect http options but get " + typeof optionsOrCb);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    };
    EC2.prototype.deleteCarrierGateway = function (args, optionsOrCb, cb) {
        var command = new DeleteCarrierGatewayCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error("Expect http options but get " + typeof optionsOrCb);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    };
    EC2.prototype.deleteClientVpnEndpoint = function (args, optionsOrCb, cb) {
        var command = new DeleteClientVpnEndpointCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error("Expect http options but get " + typeof optionsOrCb);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    };
    EC2.prototype.deleteClientVpnRoute = function (args, optionsOrCb, cb) {
        var command = new DeleteClientVpnRouteCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error("Expect http options but get " + typeof optionsOrCb);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    };
    EC2.prototype.deleteCustomerGateway = function (args, optionsOrCb, cb) {
        var command = new DeleteCustomerGatewayCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error("Expect http options but get " + typeof optionsOrCb);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    };
    EC2.prototype.deleteDhcpOptions = function (args, optionsOrCb, cb) {
        var command = new DeleteDhcpOptionsCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error("Expect http options but get " + typeof optionsOrCb);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    };
    EC2.prototype.deleteEgressOnlyInternetGateway = function (args, optionsOrCb, cb) {
        var command = new DeleteEgressOnlyInternetGatewayCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error("Expect http options but get " + typeof optionsOrCb);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    };
    EC2.prototype.deleteFleets = function (args, optionsOrCb, cb) {
        var command = new DeleteFleetsCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error("Expect http options but get " + typeof optionsOrCb);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    };
    EC2.prototype.deleteFlowLogs = function (args, optionsOrCb, cb) {
        var command = new DeleteFlowLogsCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error("Expect http options but get " + typeof optionsOrCb);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    };
    EC2.prototype.deleteFpgaImage = function (args, optionsOrCb, cb) {
        var command = new DeleteFpgaImageCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error("Expect http options but get " + typeof optionsOrCb);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    };
    EC2.prototype.deleteInternetGateway = function (args, optionsOrCb, cb) {
        var command = new DeleteInternetGatewayCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error("Expect http options but get " + typeof optionsOrCb);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    };
    EC2.prototype.deleteKeyPair = function (args, optionsOrCb, cb) {
        var command = new DeleteKeyPairCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error("Expect http options but get " + typeof optionsOrCb);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    };
    EC2.prototype.deleteLaunchTemplate = function (args, optionsOrCb, cb) {
        var command = new DeleteLaunchTemplateCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error("Expect http options but get " + typeof optionsOrCb);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    };
    EC2.prototype.deleteLaunchTemplateVersions = function (args, optionsOrCb, cb) {
        var command = new DeleteLaunchTemplateVersionsCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error("Expect http options but get " + typeof optionsOrCb);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    };
    EC2.prototype.deleteLocalGatewayRoute = function (args, optionsOrCb, cb) {
        var command = new DeleteLocalGatewayRouteCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error("Expect http options but get " + typeof optionsOrCb);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    };
    EC2.prototype.deleteLocalGatewayRouteTableVpcAssociation = function (args, optionsOrCb, cb) {
        var command = new DeleteLocalGatewayRouteTableVpcAssociationCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error("Expect http options but get " + typeof optionsOrCb);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    };
    EC2.prototype.deleteManagedPrefixList = function (args, optionsOrCb, cb) {
        var command = new DeleteManagedPrefixListCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error("Expect http options but get " + typeof optionsOrCb);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    };
    EC2.prototype.deleteNatGateway = function (args, optionsOrCb, cb) {
        var command = new DeleteNatGatewayCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error("Expect http options but get " + typeof optionsOrCb);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    };
    EC2.prototype.deleteNetworkAcl = function (args, optionsOrCb, cb) {
        var command = new DeleteNetworkAclCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error("Expect http options but get " + typeof optionsOrCb);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    };
    EC2.prototype.deleteNetworkAclEntry = function (args, optionsOrCb, cb) {
        var command = new DeleteNetworkAclEntryCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error("Expect http options but get " + typeof optionsOrCb);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    };
    EC2.prototype.deleteNetworkInsightsAnalysis = function (args, optionsOrCb, cb) {
        var command = new DeleteNetworkInsightsAnalysisCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error("Expect http options but get " + typeof optionsOrCb);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    };
    EC2.prototype.deleteNetworkInsightsPath = function (args, optionsOrCb, cb) {
        var command = new DeleteNetworkInsightsPathCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error("Expect http options but get " + typeof optionsOrCb);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    };
    EC2.prototype.deleteNetworkInterface = function (args, optionsOrCb, cb) {
        var command = new DeleteNetworkInterfaceCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error("Expect http options but get " + typeof optionsOrCb);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    };
    EC2.prototype.deleteNetworkInterfacePermission = function (args, optionsOrCb, cb) {
        var command = new DeleteNetworkInterfacePermissionCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error("Expect http options but get " + typeof optionsOrCb);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    };
    EC2.prototype.deletePlacementGroup = function (args, optionsOrCb, cb) {
        var command = new DeletePlacementGroupCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error("Expect http options but get " + typeof optionsOrCb);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    };
    EC2.prototype.deleteQueuedReservedInstances = function (args, optionsOrCb, cb) {
        var command = new DeleteQueuedReservedInstancesCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error("Expect http options but get " + typeof optionsOrCb);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    };
    EC2.prototype.deleteRoute = function (args, optionsOrCb, cb) {
        var command = new DeleteRouteCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error("Expect http options but get " + typeof optionsOrCb);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    };
    EC2.prototype.deleteRouteTable = function (args, optionsOrCb, cb) {
        var command = new DeleteRouteTableCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error("Expect http options but get " + typeof optionsOrCb);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    };
    EC2.prototype.deleteSecurityGroup = function (args, optionsOrCb, cb) {
        var command = new DeleteSecurityGroupCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error("Expect http options but get " + typeof optionsOrCb);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    };
    EC2.prototype.deleteSnapshot = function (args, optionsOrCb, cb) {
        var command = new DeleteSnapshotCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error("Expect http options but get " + typeof optionsOrCb);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    };
    EC2.prototype.deleteSpotDatafeedSubscription = function (args, optionsOrCb, cb) {
        var command = new DeleteSpotDatafeedSubscriptionCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error("Expect http options but get " + typeof optionsOrCb);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    };
    EC2.prototype.deleteSubnet = function (args, optionsOrCb, cb) {
        var command = new DeleteSubnetCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error("Expect http options but get " + typeof optionsOrCb);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    };
    EC2.prototype.deleteTags = function (args, optionsOrCb, cb) {
        var command = new DeleteTagsCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error("Expect http options but get " + typeof optionsOrCb);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    };
    EC2.prototype.deleteTrafficMirrorFilter = function (args, optionsOrCb, cb) {
        var command = new DeleteTrafficMirrorFilterCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error("Expect http options but get " + typeof optionsOrCb);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    };
    EC2.prototype.deleteTrafficMirrorFilterRule = function (args, optionsOrCb, cb) {
        var command = new DeleteTrafficMirrorFilterRuleCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error("Expect http options but get " + typeof optionsOrCb);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    };
    EC2.prototype.deleteTrafficMirrorSession = function (args, optionsOrCb, cb) {
        var command = new DeleteTrafficMirrorSessionCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error("Expect http options but get " + typeof optionsOrCb);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    };
    EC2.prototype.deleteTrafficMirrorTarget = function (args, optionsOrCb, cb) {
        var command = new DeleteTrafficMirrorTargetCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error("Expect http options but get " + typeof optionsOrCb);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    };
    EC2.prototype.deleteTransitGateway = function (args, optionsOrCb, cb) {
        var command = new DeleteTransitGatewayCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error("Expect http options but get " + typeof optionsOrCb);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    };
    EC2.prototype.deleteTransitGatewayConnect = function (args, optionsOrCb, cb) {
        var command = new DeleteTransitGatewayConnectCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error("Expect http options but get " + typeof optionsOrCb);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    };
    EC2.prototype.deleteTransitGatewayConnectPeer = function (args, optionsOrCb, cb) {
        var command = new DeleteTransitGatewayConnectPeerCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error("Expect http options but get " + typeof optionsOrCb);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    };
    EC2.prototype.deleteTransitGatewayMulticastDomain = function (args, optionsOrCb, cb) {
        var command = new DeleteTransitGatewayMulticastDomainCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error("Expect http options but get " + typeof optionsOrCb);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    };
    EC2.prototype.deleteTransitGatewayPeeringAttachment = function (args, optionsOrCb, cb) {
        var command = new DeleteTransitGatewayPeeringAttachmentCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error("Expect http options but get " + typeof optionsOrCb);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    };
    EC2.prototype.deleteTransitGatewayPrefixListReference = function (args, optionsOrCb, cb) {
        var command = new DeleteTransitGatewayPrefixListReferenceCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error("Expect http options but get " + typeof optionsOrCb);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    };
    EC2.prototype.deleteTransitGatewayRoute = function (args, optionsOrCb, cb) {
        var command = new DeleteTransitGatewayRouteCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error("Expect http options but get " + typeof optionsOrCb);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    };
    EC2.prototype.deleteTransitGatewayRouteTable = function (args, optionsOrCb, cb) {
        var command = new DeleteTransitGatewayRouteTableCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error("Expect http options but get " + typeof optionsOrCb);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    };
    EC2.prototype.deleteTransitGatewayVpcAttachment = function (args, optionsOrCb, cb) {
        var command = new DeleteTransitGatewayVpcAttachmentCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error("Expect http options but get " + typeof optionsOrCb);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    };
    EC2.prototype.deleteVolume = function (args, optionsOrCb, cb) {
        var command = new DeleteVolumeCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error("Expect http options but get " + typeof optionsOrCb);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    };
    EC2.prototype.deleteVpc = function (args, optionsOrCb, cb) {
        var command = new DeleteVpcCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error("Expect http options but get " + typeof optionsOrCb);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    };
    EC2.prototype.deleteVpcEndpointConnectionNotifications = function (args, optionsOrCb, cb) {
        var command = new DeleteVpcEndpointConnectionNotificationsCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error("Expect http options but get " + typeof optionsOrCb);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    };
    EC2.prototype.deleteVpcEndpoints = function (args, optionsOrCb, cb) {
        var command = new DeleteVpcEndpointsCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error("Expect http options but get " + typeof optionsOrCb);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    };
    EC2.prototype.deleteVpcEndpointServiceConfigurations = function (args, optionsOrCb, cb) {
        var command = new DeleteVpcEndpointServiceConfigurationsCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error("Expect http options but get " + typeof optionsOrCb);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    };
    EC2.prototype.deleteVpcPeeringConnection = function (args, optionsOrCb, cb) {
        var command = new DeleteVpcPeeringConnectionCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error("Expect http options but get " + typeof optionsOrCb);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    };
    EC2.prototype.deleteVpnConnection = function (args, optionsOrCb, cb) {
        var command = new DeleteVpnConnectionCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error("Expect http options but get " + typeof optionsOrCb);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    };
    EC2.prototype.deleteVpnConnectionRoute = function (args, optionsOrCb, cb) {
        var command = new DeleteVpnConnectionRouteCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error("Expect http options but get " + typeof optionsOrCb);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    };
    EC2.prototype.deleteVpnGateway = function (args, optionsOrCb, cb) {
        var command = new DeleteVpnGatewayCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error("Expect http options but get " + typeof optionsOrCb);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    };
    EC2.prototype.deprovisionByoipCidr = function (args, optionsOrCb, cb) {
        var command = new DeprovisionByoipCidrCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error("Expect http options but get " + typeof optionsOrCb);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    };
    EC2.prototype.deregisterImage = function (args, optionsOrCb, cb) {
        var command = new DeregisterImageCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error("Expect http options but get " + typeof optionsOrCb);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    };
    EC2.prototype.deregisterInstanceEventNotificationAttributes = function (args, optionsOrCb, cb) {
        var command = new DeregisterInstanceEventNotificationAttributesCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error("Expect http options but get " + typeof optionsOrCb);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    };
    EC2.prototype.deregisterTransitGatewayMulticastGroupMembers = function (args, optionsOrCb, cb) {
        var command = new DeregisterTransitGatewayMulticastGroupMembersCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error("Expect http options but get " + typeof optionsOrCb);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    };
    EC2.prototype.deregisterTransitGatewayMulticastGroupSources = function (args, optionsOrCb, cb) {
        var command = new DeregisterTransitGatewayMulticastGroupSourcesCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error("Expect http options but get " + typeof optionsOrCb);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    };
    EC2.prototype.describeAccountAttributes = function (args, optionsOrCb, cb) {
        var command = new DescribeAccountAttributesCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error("Expect http options but get " + typeof optionsOrCb);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    };
    EC2.prototype.describeAddresses = function (args, optionsOrCb, cb) {
        var command = new DescribeAddressesCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error("Expect http options but get " + typeof optionsOrCb);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    };
    EC2.prototype.describeAddressesAttribute = function (args, optionsOrCb, cb) {
        var command = new DescribeAddressesAttributeCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error("Expect http options but get " + typeof optionsOrCb);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    };
    EC2.prototype.describeAggregateIdFormat = function (args, optionsOrCb, cb) {
        var command = new DescribeAggregateIdFormatCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error("Expect http options but get " + typeof optionsOrCb);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    };
    EC2.prototype.describeAvailabilityZones = function (args, optionsOrCb, cb) {
        var command = new DescribeAvailabilityZonesCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error("Expect http options but get " + typeof optionsOrCb);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    };
    EC2.prototype.describeBundleTasks = function (args, optionsOrCb, cb) {
        var command = new DescribeBundleTasksCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error("Expect http options but get " + typeof optionsOrCb);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    };
    EC2.prototype.describeByoipCidrs = function (args, optionsOrCb, cb) {
        var command = new DescribeByoipCidrsCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error("Expect http options but get " + typeof optionsOrCb);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    };
    EC2.prototype.describeCapacityReservations = function (args, optionsOrCb, cb) {
        var command = new DescribeCapacityReservationsCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error("Expect http options but get " + typeof optionsOrCb);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    };
    EC2.prototype.describeCarrierGateways = function (args, optionsOrCb, cb) {
        var command = new DescribeCarrierGatewaysCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error("Expect http options but get " + typeof optionsOrCb);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    };
    EC2.prototype.describeClassicLinkInstances = function (args, optionsOrCb, cb) {
        var command = new DescribeClassicLinkInstancesCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error("Expect http options but get " + typeof optionsOrCb);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    };
    EC2.prototype.describeClientVpnAuthorizationRules = function (args, optionsOrCb, cb) {
        var command = new DescribeClientVpnAuthorizationRulesCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error("Expect http options but get " + typeof optionsOrCb);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    };
    EC2.prototype.describeClientVpnConnections = function (args, optionsOrCb, cb) {
        var command = new DescribeClientVpnConnectionsCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error("Expect http options but get " + typeof optionsOrCb);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    };
    EC2.prototype.describeClientVpnEndpoints = function (args, optionsOrCb, cb) {
        var command = new DescribeClientVpnEndpointsCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error("Expect http options but get " + typeof optionsOrCb);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    };
    EC2.prototype.describeClientVpnRoutes = function (args, optionsOrCb, cb) {
        var command = new DescribeClientVpnRoutesCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error("Expect http options but get " + typeof optionsOrCb);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    };
    EC2.prototype.describeClientVpnTargetNetworks = function (args, optionsOrCb, cb) {
        var command = new DescribeClientVpnTargetNetworksCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error("Expect http options but get " + typeof optionsOrCb);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    };
    EC2.prototype.describeCoipPools = function (args, optionsOrCb, cb) {
        var command = new DescribeCoipPoolsCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error("Expect http options but get " + typeof optionsOrCb);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    };
    EC2.prototype.describeConversionTasks = function (args, optionsOrCb, cb) {
        var command = new DescribeConversionTasksCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error("Expect http options but get " + typeof optionsOrCb);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    };
    EC2.prototype.describeCustomerGateways = function (args, optionsOrCb, cb) {
        var command = new DescribeCustomerGatewaysCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error("Expect http options but get " + typeof optionsOrCb);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    };
    EC2.prototype.describeDhcpOptions = function (args, optionsOrCb, cb) {
        var command = new DescribeDhcpOptionsCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error("Expect http options but get " + typeof optionsOrCb);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    };
    EC2.prototype.describeEgressOnlyInternetGateways = function (args, optionsOrCb, cb) {
        var command = new DescribeEgressOnlyInternetGatewaysCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error("Expect http options but get " + typeof optionsOrCb);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    };
    EC2.prototype.describeElasticGpus = function (args, optionsOrCb, cb) {
        var command = new DescribeElasticGpusCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error("Expect http options but get " + typeof optionsOrCb);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    };
    EC2.prototype.describeExportImageTasks = function (args, optionsOrCb, cb) {
        var command = new DescribeExportImageTasksCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error("Expect http options but get " + typeof optionsOrCb);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    };
    EC2.prototype.describeExportTasks = function (args, optionsOrCb, cb) {
        var command = new DescribeExportTasksCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error("Expect http options but get " + typeof optionsOrCb);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    };
    EC2.prototype.describeFastSnapshotRestores = function (args, optionsOrCb, cb) {
        var command = new DescribeFastSnapshotRestoresCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error("Expect http options but get " + typeof optionsOrCb);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    };
    EC2.prototype.describeFleetHistory = function (args, optionsOrCb, cb) {
        var command = new DescribeFleetHistoryCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error("Expect http options but get " + typeof optionsOrCb);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    };
    EC2.prototype.describeFleetInstances = function (args, optionsOrCb, cb) {
        var command = new DescribeFleetInstancesCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error("Expect http options but get " + typeof optionsOrCb);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    };
    EC2.prototype.describeFleets = function (args, optionsOrCb, cb) {
        var command = new DescribeFleetsCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error("Expect http options but get " + typeof optionsOrCb);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    };
    EC2.prototype.describeFlowLogs = function (args, optionsOrCb, cb) {
        var command = new DescribeFlowLogsCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error("Expect http options but get " + typeof optionsOrCb);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    };
    EC2.prototype.describeFpgaImageAttribute = function (args, optionsOrCb, cb) {
        var command = new DescribeFpgaImageAttributeCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error("Expect http options but get " + typeof optionsOrCb);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    };
    EC2.prototype.describeFpgaImages = function (args, optionsOrCb, cb) {
        var command = new DescribeFpgaImagesCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error("Expect http options but get " + typeof optionsOrCb);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    };
    EC2.prototype.describeHostReservationOfferings = function (args, optionsOrCb, cb) {
        var command = new DescribeHostReservationOfferingsCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error("Expect http options but get " + typeof optionsOrCb);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    };
    EC2.prototype.describeHostReservations = function (args, optionsOrCb, cb) {
        var command = new DescribeHostReservationsCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error("Expect http options but get " + typeof optionsOrCb);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    };
    EC2.prototype.describeHosts = function (args, optionsOrCb, cb) {
        var command = new DescribeHostsCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error("Expect http options but get " + typeof optionsOrCb);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    };
    EC2.prototype.describeIamInstanceProfileAssociations = function (args, optionsOrCb, cb) {
        var command = new DescribeIamInstanceProfileAssociationsCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error("Expect http options but get " + typeof optionsOrCb);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    };
    EC2.prototype.describeIdentityIdFormat = function (args, optionsOrCb, cb) {
        var command = new DescribeIdentityIdFormatCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error("Expect http options but get " + typeof optionsOrCb);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    };
    EC2.prototype.describeIdFormat = function (args, optionsOrCb, cb) {
        var command = new DescribeIdFormatCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error("Expect http options but get " + typeof optionsOrCb);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    };
    EC2.prototype.describeImageAttribute = function (args, optionsOrCb, cb) {
        var command = new DescribeImageAttributeCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error("Expect http options but get " + typeof optionsOrCb);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    };
    EC2.prototype.describeImages = function (args, optionsOrCb, cb) {
        var command = new DescribeImagesCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error("Expect http options but get " + typeof optionsOrCb);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    };
    EC2.prototype.describeImportImageTasks = function (args, optionsOrCb, cb) {
        var command = new DescribeImportImageTasksCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error("Expect http options but get " + typeof optionsOrCb);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    };
    EC2.prototype.describeImportSnapshotTasks = function (args, optionsOrCb, cb) {
        var command = new DescribeImportSnapshotTasksCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error("Expect http options but get " + typeof optionsOrCb);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    };
    EC2.prototype.describeInstanceAttribute = function (args, optionsOrCb, cb) {
        var command = new DescribeInstanceAttributeCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error("Expect http options but get " + typeof optionsOrCb);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    };
    EC2.prototype.describeInstanceCreditSpecifications = function (args, optionsOrCb, cb) {
        var command = new DescribeInstanceCreditSpecificationsCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error("Expect http options but get " + typeof optionsOrCb);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    };
    EC2.prototype.describeInstanceEventNotificationAttributes = function (args, optionsOrCb, cb) {
        var command = new DescribeInstanceEventNotificationAttributesCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error("Expect http options but get " + typeof optionsOrCb);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    };
    EC2.prototype.describeInstances = function (args, optionsOrCb, cb) {
        var command = new DescribeInstancesCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error("Expect http options but get " + typeof optionsOrCb);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    };
    EC2.prototype.describeInstanceStatus = function (args, optionsOrCb, cb) {
        var command = new DescribeInstanceStatusCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error("Expect http options but get " + typeof optionsOrCb);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    };
    EC2.prototype.describeInstanceTypeOfferings = function (args, optionsOrCb, cb) {
        var command = new DescribeInstanceTypeOfferingsCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error("Expect http options but get " + typeof optionsOrCb);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    };
    EC2.prototype.describeInstanceTypes = function (args, optionsOrCb, cb) {
        var command = new DescribeInstanceTypesCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error("Expect http options but get " + typeof optionsOrCb);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    };
    EC2.prototype.describeInternetGateways = function (args, optionsOrCb, cb) {
        var command = new DescribeInternetGatewaysCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error("Expect http options but get " + typeof optionsOrCb);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    };
    EC2.prototype.describeIpv6Pools = function (args, optionsOrCb, cb) {
        var command = new DescribeIpv6PoolsCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error("Expect http options but get " + typeof optionsOrCb);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    };
    EC2.prototype.describeKeyPairs = function (args, optionsOrCb, cb) {
        var command = new DescribeKeyPairsCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error("Expect http options but get " + typeof optionsOrCb);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    };
    EC2.prototype.describeLaunchTemplates = function (args, optionsOrCb, cb) {
        var command = new DescribeLaunchTemplatesCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error("Expect http options but get " + typeof optionsOrCb);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    };
    EC2.prototype.describeLaunchTemplateVersions = function (args, optionsOrCb, cb) {
        var command = new DescribeLaunchTemplateVersionsCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error("Expect http options but get " + typeof optionsOrCb);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    };
    EC2.prototype.describeLocalGatewayRouteTables = function (args, optionsOrCb, cb) {
        var command = new DescribeLocalGatewayRouteTablesCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error("Expect http options but get " + typeof optionsOrCb);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    };
    EC2.prototype.describeLocalGatewayRouteTableVirtualInterfaceGroupAssociations = function (args, optionsOrCb, cb) {
        var command = new DescribeLocalGatewayRouteTableVirtualInterfaceGroupAssociationsCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error("Expect http options but get " + typeof optionsOrCb);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    };
    EC2.prototype.describeLocalGatewayRouteTableVpcAssociations = function (args, optionsOrCb, cb) {
        var command = new DescribeLocalGatewayRouteTableVpcAssociationsCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error("Expect http options but get " + typeof optionsOrCb);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    };
    EC2.prototype.describeLocalGateways = function (args, optionsOrCb, cb) {
        var command = new DescribeLocalGatewaysCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error("Expect http options but get " + typeof optionsOrCb);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    };
    EC2.prototype.describeLocalGatewayVirtualInterfaceGroups = function (args, optionsOrCb, cb) {
        var command = new DescribeLocalGatewayVirtualInterfaceGroupsCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error("Expect http options but get " + typeof optionsOrCb);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    };
    EC2.prototype.describeLocalGatewayVirtualInterfaces = function (args, optionsOrCb, cb) {
        var command = new DescribeLocalGatewayVirtualInterfacesCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error("Expect http options but get " + typeof optionsOrCb);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    };
    EC2.prototype.describeManagedPrefixLists = function (args, optionsOrCb, cb) {
        var command = new DescribeManagedPrefixListsCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error("Expect http options but get " + typeof optionsOrCb);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    };
    EC2.prototype.describeMovingAddresses = function (args, optionsOrCb, cb) {
        var command = new DescribeMovingAddressesCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error("Expect http options but get " + typeof optionsOrCb);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    };
    EC2.prototype.describeNatGateways = function (args, optionsOrCb, cb) {
        var command = new DescribeNatGatewaysCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error("Expect http options but get " + typeof optionsOrCb);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    };
    EC2.prototype.describeNetworkAcls = function (args, optionsOrCb, cb) {
        var command = new DescribeNetworkAclsCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error("Expect http options but get " + typeof optionsOrCb);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    };
    EC2.prototype.describeNetworkInsightsAnalyses = function (args, optionsOrCb, cb) {
        var command = new DescribeNetworkInsightsAnalysesCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error("Expect http options but get " + typeof optionsOrCb);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    };
    EC2.prototype.describeNetworkInsightsPaths = function (args, optionsOrCb, cb) {
        var command = new DescribeNetworkInsightsPathsCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error("Expect http options but get " + typeof optionsOrCb);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    };
    EC2.prototype.describeNetworkInterfaceAttribute = function (args, optionsOrCb, cb) {
        var command = new DescribeNetworkInterfaceAttributeCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error("Expect http options but get " + typeof optionsOrCb);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    };
    EC2.prototype.describeNetworkInterfacePermissions = function (args, optionsOrCb, cb) {
        var command = new DescribeNetworkInterfacePermissionsCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error("Expect http options but get " + typeof optionsOrCb);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    };
    EC2.prototype.describeNetworkInterfaces = function (args, optionsOrCb, cb) {
        var command = new DescribeNetworkInterfacesCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error("Expect http options but get " + typeof optionsOrCb);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    };
    EC2.prototype.describePlacementGroups = function (args, optionsOrCb, cb) {
        var command = new DescribePlacementGroupsCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error("Expect http options but get " + typeof optionsOrCb);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    };
    EC2.prototype.describePrefixLists = function (args, optionsOrCb, cb) {
        var command = new DescribePrefixListsCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error("Expect http options but get " + typeof optionsOrCb);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    };
    EC2.prototype.describePrincipalIdFormat = function (args, optionsOrCb, cb) {
        var command = new DescribePrincipalIdFormatCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error("Expect http options but get " + typeof optionsOrCb);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    };
    EC2.prototype.describePublicIpv4Pools = function (args, optionsOrCb, cb) {
        var command = new DescribePublicIpv4PoolsCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error("Expect http options but get " + typeof optionsOrCb);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    };
    EC2.prototype.describeRegions = function (args, optionsOrCb, cb) {
        var command = new DescribeRegionsCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error("Expect http options but get " + typeof optionsOrCb);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    };
    EC2.prototype.describeReplaceRootVolumeTasks = function (args, optionsOrCb, cb) {
        var command = new DescribeReplaceRootVolumeTasksCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error("Expect http options but get " + typeof optionsOrCb);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    };
    EC2.prototype.describeReservedInstances = function (args, optionsOrCb, cb) {
        var command = new DescribeReservedInstancesCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error("Expect http options but get " + typeof optionsOrCb);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    };
    EC2.prototype.describeReservedInstancesListings = function (args, optionsOrCb, cb) {
        var command = new DescribeReservedInstancesListingsCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error("Expect http options but get " + typeof optionsOrCb);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    };
    EC2.prototype.describeReservedInstancesModifications = function (args, optionsOrCb, cb) {
        var command = new DescribeReservedInstancesModificationsCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error("Expect http options but get " + typeof optionsOrCb);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    };
    EC2.prototype.describeReservedInstancesOfferings = function (args, optionsOrCb, cb) {
        var command = new DescribeReservedInstancesOfferingsCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error("Expect http options but get " + typeof optionsOrCb);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    };
    EC2.prototype.describeRouteTables = function (args, optionsOrCb, cb) {
        var command = new DescribeRouteTablesCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error("Expect http options but get " + typeof optionsOrCb);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    };
    EC2.prototype.describeScheduledInstanceAvailability = function (args, optionsOrCb, cb) {
        var command = new DescribeScheduledInstanceAvailabilityCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error("Expect http options but get " + typeof optionsOrCb);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    };
    EC2.prototype.describeScheduledInstances = function (args, optionsOrCb, cb) {
        var command = new DescribeScheduledInstancesCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error("Expect http options but get " + typeof optionsOrCb);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    };
    EC2.prototype.describeSecurityGroupReferences = function (args, optionsOrCb, cb) {
        var command = new DescribeSecurityGroupReferencesCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error("Expect http options but get " + typeof optionsOrCb);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    };
    EC2.prototype.describeSecurityGroups = function (args, optionsOrCb, cb) {
        var command = new DescribeSecurityGroupsCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error("Expect http options but get " + typeof optionsOrCb);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    };
    EC2.prototype.describeSnapshotAttribute = function (args, optionsOrCb, cb) {
        var command = new DescribeSnapshotAttributeCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error("Expect http options but get " + typeof optionsOrCb);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    };
    EC2.prototype.describeSnapshots = function (args, optionsOrCb, cb) {
        var command = new DescribeSnapshotsCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error("Expect http options but get " + typeof optionsOrCb);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    };
    EC2.prototype.describeSpotDatafeedSubscription = function (args, optionsOrCb, cb) {
        var command = new DescribeSpotDatafeedSubscriptionCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error("Expect http options but get " + typeof optionsOrCb);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    };
    EC2.prototype.describeSpotFleetInstances = function (args, optionsOrCb, cb) {
        var command = new DescribeSpotFleetInstancesCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error("Expect http options but get " + typeof optionsOrCb);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    };
    EC2.prototype.describeSpotFleetRequestHistory = function (args, optionsOrCb, cb) {
        var command = new DescribeSpotFleetRequestHistoryCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error("Expect http options but get " + typeof optionsOrCb);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    };
    EC2.prototype.describeSpotFleetRequests = function (args, optionsOrCb, cb) {
        var command = new DescribeSpotFleetRequestsCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error("Expect http options but get " + typeof optionsOrCb);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    };
    EC2.prototype.describeSpotInstanceRequests = function (args, optionsOrCb, cb) {
        var command = new DescribeSpotInstanceRequestsCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error("Expect http options but get " + typeof optionsOrCb);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    };
    EC2.prototype.describeSpotPriceHistory = function (args, optionsOrCb, cb) {
        var command = new DescribeSpotPriceHistoryCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error("Expect http options but get " + typeof optionsOrCb);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    };
    EC2.prototype.describeStaleSecurityGroups = function (args, optionsOrCb, cb) {
        var command = new DescribeStaleSecurityGroupsCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error("Expect http options but get " + typeof optionsOrCb);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    };
    EC2.prototype.describeStoreImageTasks = function (args, optionsOrCb, cb) {
        var command = new DescribeStoreImageTasksCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error("Expect http options but get " + typeof optionsOrCb);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    };
    EC2.prototype.describeSubnets = function (args, optionsOrCb, cb) {
        var command = new DescribeSubnetsCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error("Expect http options but get " + typeof optionsOrCb);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    };
    EC2.prototype.describeTags = function (args, optionsOrCb, cb) {
        var command = new DescribeTagsCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error("Expect http options but get " + typeof optionsOrCb);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    };
    EC2.prototype.describeTrafficMirrorFilters = function (args, optionsOrCb, cb) {
        var command = new DescribeTrafficMirrorFiltersCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error("Expect http options but get " + typeof optionsOrCb);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    };
    EC2.prototype.describeTrafficMirrorSessions = function (args, optionsOrCb, cb) {
        var command = new DescribeTrafficMirrorSessionsCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error("Expect http options but get " + typeof optionsOrCb);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    };
    EC2.prototype.describeTrafficMirrorTargets = function (args, optionsOrCb, cb) {
        var command = new DescribeTrafficMirrorTargetsCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error("Expect http options but get " + typeof optionsOrCb);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    };
    EC2.prototype.describeTransitGatewayAttachments = function (args, optionsOrCb, cb) {
        var command = new DescribeTransitGatewayAttachmentsCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error("Expect http options but get " + typeof optionsOrCb);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    };
    EC2.prototype.describeTransitGatewayConnectPeers = function (args, optionsOrCb, cb) {
        var command = new DescribeTransitGatewayConnectPeersCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error("Expect http options but get " + typeof optionsOrCb);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    };
    EC2.prototype.describeTransitGatewayConnects = function (args, optionsOrCb, cb) {
        var command = new DescribeTransitGatewayConnectsCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error("Expect http options but get " + typeof optionsOrCb);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    };
    EC2.prototype.describeTransitGatewayMulticastDomains = function (args, optionsOrCb, cb) {
        var command = new DescribeTransitGatewayMulticastDomainsCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error("Expect http options but get " + typeof optionsOrCb);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    };
    EC2.prototype.describeTransitGatewayPeeringAttachments = function (args, optionsOrCb, cb) {
        var command = new DescribeTransitGatewayPeeringAttachmentsCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error("Expect http options but get " + typeof optionsOrCb);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    };
    EC2.prototype.describeTransitGatewayRouteTables = function (args, optionsOrCb, cb) {
        var command = new DescribeTransitGatewayRouteTablesCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error("Expect http options but get " + typeof optionsOrCb);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    };
    EC2.prototype.describeTransitGateways = function (args, optionsOrCb, cb) {
        var command = new DescribeTransitGatewaysCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error("Expect http options but get " + typeof optionsOrCb);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    };
    EC2.prototype.describeTransitGatewayVpcAttachments = function (args, optionsOrCb, cb) {
        var command = new DescribeTransitGatewayVpcAttachmentsCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error("Expect http options but get " + typeof optionsOrCb);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    };
    EC2.prototype.describeVolumeAttribute = function (args, optionsOrCb, cb) {
        var command = new DescribeVolumeAttributeCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error("Expect http options but get " + typeof optionsOrCb);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    };
    EC2.prototype.describeVolumes = function (args, optionsOrCb, cb) {
        var command = new DescribeVolumesCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error("Expect http options but get " + typeof optionsOrCb);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    };
    EC2.prototype.describeVolumesModifications = function (args, optionsOrCb, cb) {
        var command = new DescribeVolumesModificationsCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error("Expect http options but get " + typeof optionsOrCb);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    };
    EC2.prototype.describeVolumeStatus = function (args, optionsOrCb, cb) {
        var command = new DescribeVolumeStatusCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error("Expect http options but get " + typeof optionsOrCb);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    };
    EC2.prototype.describeVpcAttribute = function (args, optionsOrCb, cb) {
        var command = new DescribeVpcAttributeCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error("Expect http options but get " + typeof optionsOrCb);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    };
    EC2.prototype.describeVpcClassicLink = function (args, optionsOrCb, cb) {
        var command = new DescribeVpcClassicLinkCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error("Expect http options but get " + typeof optionsOrCb);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    };
    EC2.prototype.describeVpcClassicLinkDnsSupport = function (args, optionsOrCb, cb) {
        var command = new DescribeVpcClassicLinkDnsSupportCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error("Expect http options but get " + typeof optionsOrCb);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    };
    EC2.prototype.describeVpcEndpointConnectionNotifications = function (args, optionsOrCb, cb) {
        var command = new DescribeVpcEndpointConnectionNotificationsCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error("Expect http options but get " + typeof optionsOrCb);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    };
    EC2.prototype.describeVpcEndpointConnections = function (args, optionsOrCb, cb) {
        var command = new DescribeVpcEndpointConnectionsCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error("Expect http options but get " + typeof optionsOrCb);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    };
    EC2.prototype.describeVpcEndpoints = function (args, optionsOrCb, cb) {
        var command = new DescribeVpcEndpointsCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error("Expect http options but get " + typeof optionsOrCb);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    };
    EC2.prototype.describeVpcEndpointServiceConfigurations = function (args, optionsOrCb, cb) {
        var command = new DescribeVpcEndpointServiceConfigurationsCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error("Expect http options but get " + typeof optionsOrCb);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    };
    EC2.prototype.describeVpcEndpointServicePermissions = function (args, optionsOrCb, cb) {
        var command = new DescribeVpcEndpointServicePermissionsCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error("Expect http options but get " + typeof optionsOrCb);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    };
    EC2.prototype.describeVpcEndpointServices = function (args, optionsOrCb, cb) {
        var command = new DescribeVpcEndpointServicesCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error("Expect http options but get " + typeof optionsOrCb);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    };
    EC2.prototype.describeVpcPeeringConnections = function (args, optionsOrCb, cb) {
        var command = new DescribeVpcPeeringConnectionsCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error("Expect http options but get " + typeof optionsOrCb);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    };
    EC2.prototype.describeVpcs = function (args, optionsOrCb, cb) {
        var command = new DescribeVpcsCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error("Expect http options but get " + typeof optionsOrCb);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    };
    EC2.prototype.describeVpnConnections = function (args, optionsOrCb, cb) {
        var command = new DescribeVpnConnectionsCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error("Expect http options but get " + typeof optionsOrCb);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    };
    EC2.prototype.describeVpnGateways = function (args, optionsOrCb, cb) {
        var command = new DescribeVpnGatewaysCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error("Expect http options but get " + typeof optionsOrCb);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    };
    EC2.prototype.detachClassicLinkVpc = function (args, optionsOrCb, cb) {
        var command = new DetachClassicLinkVpcCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error("Expect http options but get " + typeof optionsOrCb);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    };
    EC2.prototype.detachInternetGateway = function (args, optionsOrCb, cb) {
        var command = new DetachInternetGatewayCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error("Expect http options but get " + typeof optionsOrCb);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    };
    EC2.prototype.detachNetworkInterface = function (args, optionsOrCb, cb) {
        var command = new DetachNetworkInterfaceCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error("Expect http options but get " + typeof optionsOrCb);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    };
    EC2.prototype.detachVolume = function (args, optionsOrCb, cb) {
        var command = new DetachVolumeCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error("Expect http options but get " + typeof optionsOrCb);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    };
    EC2.prototype.detachVpnGateway = function (args, optionsOrCb, cb) {
        var command = new DetachVpnGatewayCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error("Expect http options but get " + typeof optionsOrCb);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    };
    EC2.prototype.disableEbsEncryptionByDefault = function (args, optionsOrCb, cb) {
        var command = new DisableEbsEncryptionByDefaultCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error("Expect http options but get " + typeof optionsOrCb);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    };
    EC2.prototype.disableFastSnapshotRestores = function (args, optionsOrCb, cb) {
        var command = new DisableFastSnapshotRestoresCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error("Expect http options but get " + typeof optionsOrCb);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    };
    EC2.prototype.disableSerialConsoleAccess = function (args, optionsOrCb, cb) {
        var command = new DisableSerialConsoleAccessCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error("Expect http options but get " + typeof optionsOrCb);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    };
    EC2.prototype.disableTransitGatewayRouteTablePropagation = function (args, optionsOrCb, cb) {
        var command = new DisableTransitGatewayRouteTablePropagationCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error("Expect http options but get " + typeof optionsOrCb);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    };
    EC2.prototype.disableVgwRoutePropagation = function (args, optionsOrCb, cb) {
        var command = new DisableVgwRoutePropagationCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error("Expect http options but get " + typeof optionsOrCb);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    };
    EC2.prototype.disableVpcClassicLink = function (args, optionsOrCb, cb) {
        var command = new DisableVpcClassicLinkCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error("Expect http options but get " + typeof optionsOrCb);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    };
    EC2.prototype.disableVpcClassicLinkDnsSupport = function (args, optionsOrCb, cb) {
        var command = new DisableVpcClassicLinkDnsSupportCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error("Expect http options but get " + typeof optionsOrCb);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    };
    EC2.prototype.disassociateAddress = function (args, optionsOrCb, cb) {
        var command = new DisassociateAddressCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error("Expect http options but get " + typeof optionsOrCb);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    };
    EC2.prototype.disassociateClientVpnTargetNetwork = function (args, optionsOrCb, cb) {
        var command = new DisassociateClientVpnTargetNetworkCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error("Expect http options but get " + typeof optionsOrCb);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    };
    EC2.prototype.disassociateEnclaveCertificateIamRole = function (args, optionsOrCb, cb) {
        var command = new DisassociateEnclaveCertificateIamRoleCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error("Expect http options but get " + typeof optionsOrCb);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    };
    EC2.prototype.disassociateIamInstanceProfile = function (args, optionsOrCb, cb) {
        var command = new DisassociateIamInstanceProfileCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error("Expect http options but get " + typeof optionsOrCb);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    };
    EC2.prototype.disassociateRouteTable = function (args, optionsOrCb, cb) {
        var command = new DisassociateRouteTableCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error("Expect http options but get " + typeof optionsOrCb);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    };
    EC2.prototype.disassociateSubnetCidrBlock = function (args, optionsOrCb, cb) {
        var command = new DisassociateSubnetCidrBlockCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error("Expect http options but get " + typeof optionsOrCb);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    };
    EC2.prototype.disassociateTransitGatewayMulticastDomain = function (args, optionsOrCb, cb) {
        var command = new DisassociateTransitGatewayMulticastDomainCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error("Expect http options but get " + typeof optionsOrCb);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    };
    EC2.prototype.disassociateTransitGatewayRouteTable = function (args, optionsOrCb, cb) {
        var command = new DisassociateTransitGatewayRouteTableCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error("Expect http options but get " + typeof optionsOrCb);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    };
    EC2.prototype.disassociateVpcCidrBlock = function (args, optionsOrCb, cb) {
        var command = new DisassociateVpcCidrBlockCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error("Expect http options but get " + typeof optionsOrCb);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    };
    EC2.prototype.enableEbsEncryptionByDefault = function (args, optionsOrCb, cb) {
        var command = new EnableEbsEncryptionByDefaultCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error("Expect http options but get " + typeof optionsOrCb);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    };
    EC2.prototype.enableFastSnapshotRestores = function (args, optionsOrCb, cb) {
        var command = new EnableFastSnapshotRestoresCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error("Expect http options but get " + typeof optionsOrCb);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    };
    EC2.prototype.enableSerialConsoleAccess = function (args, optionsOrCb, cb) {
        var command = new EnableSerialConsoleAccessCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error("Expect http options but get " + typeof optionsOrCb);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    };
    EC2.prototype.enableTransitGatewayRouteTablePropagation = function (args, optionsOrCb, cb) {
        var command = new EnableTransitGatewayRouteTablePropagationCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error("Expect http options but get " + typeof optionsOrCb);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    };
    EC2.prototype.enableVgwRoutePropagation = function (args, optionsOrCb, cb) {
        var command = new EnableVgwRoutePropagationCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error("Expect http options but get " + typeof optionsOrCb);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    };
    EC2.prototype.enableVolumeIO = function (args, optionsOrCb, cb) {
        var command = new EnableVolumeIOCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error("Expect http options but get " + typeof optionsOrCb);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    };
    EC2.prototype.enableVpcClassicLink = function (args, optionsOrCb, cb) {
        var command = new EnableVpcClassicLinkCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error("Expect http options but get " + typeof optionsOrCb);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    };
    EC2.prototype.enableVpcClassicLinkDnsSupport = function (args, optionsOrCb, cb) {
        var command = new EnableVpcClassicLinkDnsSupportCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error("Expect http options but get " + typeof optionsOrCb);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    };
    EC2.prototype.exportClientVpnClientCertificateRevocationList = function (args, optionsOrCb, cb) {
        var command = new ExportClientVpnClientCertificateRevocationListCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error("Expect http options but get " + typeof optionsOrCb);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    };
    EC2.prototype.exportClientVpnClientConfiguration = function (args, optionsOrCb, cb) {
        var command = new ExportClientVpnClientConfigurationCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error("Expect http options but get " + typeof optionsOrCb);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    };
    EC2.prototype.exportImage = function (args, optionsOrCb, cb) {
        var command = new ExportImageCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error("Expect http options but get " + typeof optionsOrCb);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    };
    EC2.prototype.exportTransitGatewayRoutes = function (args, optionsOrCb, cb) {
        var command = new ExportTransitGatewayRoutesCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error("Expect http options but get " + typeof optionsOrCb);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    };
    EC2.prototype.getAssociatedEnclaveCertificateIamRoles = function (args, optionsOrCb, cb) {
        var command = new GetAssociatedEnclaveCertificateIamRolesCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error("Expect http options but get " + typeof optionsOrCb);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    };
    EC2.prototype.getAssociatedIpv6PoolCidrs = function (args, optionsOrCb, cb) {
        var command = new GetAssociatedIpv6PoolCidrsCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error("Expect http options but get " + typeof optionsOrCb);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    };
    EC2.prototype.getCapacityReservationUsage = function (args, optionsOrCb, cb) {
        var command = new GetCapacityReservationUsageCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error("Expect http options but get " + typeof optionsOrCb);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    };
    EC2.prototype.getCoipPoolUsage = function (args, optionsOrCb, cb) {
        var command = new GetCoipPoolUsageCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error("Expect http options but get " + typeof optionsOrCb);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    };
    EC2.prototype.getConsoleOutput = function (args, optionsOrCb, cb) {
        var command = new GetConsoleOutputCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error("Expect http options but get " + typeof optionsOrCb);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    };
    EC2.prototype.getConsoleScreenshot = function (args, optionsOrCb, cb) {
        var command = new GetConsoleScreenshotCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error("Expect http options but get " + typeof optionsOrCb);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    };
    EC2.prototype.getDefaultCreditSpecification = function (args, optionsOrCb, cb) {
        var command = new GetDefaultCreditSpecificationCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error("Expect http options but get " + typeof optionsOrCb);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    };
    EC2.prototype.getEbsDefaultKmsKeyId = function (args, optionsOrCb, cb) {
        var command = new GetEbsDefaultKmsKeyIdCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error("Expect http options but get " + typeof optionsOrCb);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    };
    EC2.prototype.getEbsEncryptionByDefault = function (args, optionsOrCb, cb) {
        var command = new GetEbsEncryptionByDefaultCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error("Expect http options but get " + typeof optionsOrCb);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    };
    EC2.prototype.getFlowLogsIntegrationTemplate = function (args, optionsOrCb, cb) {
        var command = new GetFlowLogsIntegrationTemplateCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error("Expect http options but get " + typeof optionsOrCb);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    };
    EC2.prototype.getGroupsForCapacityReservation = function (args, optionsOrCb, cb) {
        var command = new GetGroupsForCapacityReservationCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error("Expect http options but get " + typeof optionsOrCb);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    };
    EC2.prototype.getHostReservationPurchasePreview = function (args, optionsOrCb, cb) {
        var command = new GetHostReservationPurchasePreviewCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error("Expect http options but get " + typeof optionsOrCb);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    };
    EC2.prototype.getLaunchTemplateData = function (args, optionsOrCb, cb) {
        var command = new GetLaunchTemplateDataCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error("Expect http options but get " + typeof optionsOrCb);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    };
    EC2.prototype.getManagedPrefixListAssociations = function (args, optionsOrCb, cb) {
        var command = new GetManagedPrefixListAssociationsCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error("Expect http options but get " + typeof optionsOrCb);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    };
    EC2.prototype.getManagedPrefixListEntries = function (args, optionsOrCb, cb) {
        var command = new GetManagedPrefixListEntriesCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error("Expect http options but get " + typeof optionsOrCb);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    };
    EC2.prototype.getPasswordData = function (args, optionsOrCb, cb) {
        var command = new GetPasswordDataCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error("Expect http options but get " + typeof optionsOrCb);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    };
    EC2.prototype.getReservedInstancesExchangeQuote = function (args, optionsOrCb, cb) {
        var command = new GetReservedInstancesExchangeQuoteCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error("Expect http options but get " + typeof optionsOrCb);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    };
    EC2.prototype.getSerialConsoleAccessStatus = function (args, optionsOrCb, cb) {
        var command = new GetSerialConsoleAccessStatusCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error("Expect http options but get " + typeof optionsOrCb);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    };
    EC2.prototype.getTransitGatewayAttachmentPropagations = function (args, optionsOrCb, cb) {
        var command = new GetTransitGatewayAttachmentPropagationsCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error("Expect http options but get " + typeof optionsOrCb);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    };
    EC2.prototype.getTransitGatewayMulticastDomainAssociations = function (args, optionsOrCb, cb) {
        var command = new GetTransitGatewayMulticastDomainAssociationsCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error("Expect http options but get " + typeof optionsOrCb);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    };
    EC2.prototype.getTransitGatewayPrefixListReferences = function (args, optionsOrCb, cb) {
        var command = new GetTransitGatewayPrefixListReferencesCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error("Expect http options but get " + typeof optionsOrCb);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    };
    EC2.prototype.getTransitGatewayRouteTableAssociations = function (args, optionsOrCb, cb) {
        var command = new GetTransitGatewayRouteTableAssociationsCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error("Expect http options but get " + typeof optionsOrCb);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    };
    EC2.prototype.getTransitGatewayRouteTablePropagations = function (args, optionsOrCb, cb) {
        var command = new GetTransitGatewayRouteTablePropagationsCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error("Expect http options but get " + typeof optionsOrCb);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    };
    EC2.prototype.importClientVpnClientCertificateRevocationList = function (args, optionsOrCb, cb) {
        var command = new ImportClientVpnClientCertificateRevocationListCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error("Expect http options but get " + typeof optionsOrCb);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    };
    EC2.prototype.importImage = function (args, optionsOrCb, cb) {
        var command = new ImportImageCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error("Expect http options but get " + typeof optionsOrCb);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    };
    EC2.prototype.importInstance = function (args, optionsOrCb, cb) {
        var command = new ImportInstanceCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error("Expect http options but get " + typeof optionsOrCb);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    };
    EC2.prototype.importKeyPair = function (args, optionsOrCb, cb) {
        var command = new ImportKeyPairCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error("Expect http options but get " + typeof optionsOrCb);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    };
    EC2.prototype.importSnapshot = function (args, optionsOrCb, cb) {
        var command = new ImportSnapshotCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error("Expect http options but get " + typeof optionsOrCb);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    };
    EC2.prototype.importVolume = function (args, optionsOrCb, cb) {
        var command = new ImportVolumeCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error("Expect http options but get " + typeof optionsOrCb);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    };
    EC2.prototype.modifyAddressAttribute = function (args, optionsOrCb, cb) {
        var command = new ModifyAddressAttributeCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error("Expect http options but get " + typeof optionsOrCb);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    };
    EC2.prototype.modifyAvailabilityZoneGroup = function (args, optionsOrCb, cb) {
        var command = new ModifyAvailabilityZoneGroupCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error("Expect http options but get " + typeof optionsOrCb);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    };
    EC2.prototype.modifyCapacityReservation = function (args, optionsOrCb, cb) {
        var command = new ModifyCapacityReservationCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error("Expect http options but get " + typeof optionsOrCb);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    };
    EC2.prototype.modifyClientVpnEndpoint = function (args, optionsOrCb, cb) {
        var command = new ModifyClientVpnEndpointCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error("Expect http options but get " + typeof optionsOrCb);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    };
    EC2.prototype.modifyDefaultCreditSpecification = function (args, optionsOrCb, cb) {
        var command = new ModifyDefaultCreditSpecificationCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error("Expect http options but get " + typeof optionsOrCb);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    };
    EC2.prototype.modifyEbsDefaultKmsKeyId = function (args, optionsOrCb, cb) {
        var command = new ModifyEbsDefaultKmsKeyIdCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error("Expect http options but get " + typeof optionsOrCb);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    };
    EC2.prototype.modifyFleet = function (args, optionsOrCb, cb) {
        var command = new ModifyFleetCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error("Expect http options but get " + typeof optionsOrCb);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    };
    EC2.prototype.modifyFpgaImageAttribute = function (args, optionsOrCb, cb) {
        var command = new ModifyFpgaImageAttributeCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error("Expect http options but get " + typeof optionsOrCb);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    };
    EC2.prototype.modifyHosts = function (args, optionsOrCb, cb) {
        var command = new ModifyHostsCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error("Expect http options but get " + typeof optionsOrCb);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    };
    EC2.prototype.modifyIdentityIdFormat = function (args, optionsOrCb, cb) {
        var command = new ModifyIdentityIdFormatCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error("Expect http options but get " + typeof optionsOrCb);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    };
    EC2.prototype.modifyIdFormat = function (args, optionsOrCb, cb) {
        var command = new ModifyIdFormatCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error("Expect http options but get " + typeof optionsOrCb);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    };
    EC2.prototype.modifyImageAttribute = function (args, optionsOrCb, cb) {
        var command = new ModifyImageAttributeCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error("Expect http options but get " + typeof optionsOrCb);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    };
    EC2.prototype.modifyInstanceAttribute = function (args, optionsOrCb, cb) {
        var command = new ModifyInstanceAttributeCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error("Expect http options but get " + typeof optionsOrCb);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    };
    EC2.prototype.modifyInstanceCapacityReservationAttributes = function (args, optionsOrCb, cb) {
        var command = new ModifyInstanceCapacityReservationAttributesCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error("Expect http options but get " + typeof optionsOrCb);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    };
    EC2.prototype.modifyInstanceCreditSpecification = function (args, optionsOrCb, cb) {
        var command = new ModifyInstanceCreditSpecificationCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error("Expect http options but get " + typeof optionsOrCb);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    };
    EC2.prototype.modifyInstanceEventStartTime = function (args, optionsOrCb, cb) {
        var command = new ModifyInstanceEventStartTimeCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error("Expect http options but get " + typeof optionsOrCb);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    };
    EC2.prototype.modifyInstanceMetadataOptions = function (args, optionsOrCb, cb) {
        var command = new ModifyInstanceMetadataOptionsCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error("Expect http options but get " + typeof optionsOrCb);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    };
    EC2.prototype.modifyInstancePlacement = function (args, optionsOrCb, cb) {
        var command = new ModifyInstancePlacementCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error("Expect http options but get " + typeof optionsOrCb);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    };
    EC2.prototype.modifyLaunchTemplate = function (args, optionsOrCb, cb) {
        var command = new ModifyLaunchTemplateCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error("Expect http options but get " + typeof optionsOrCb);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    };
    EC2.prototype.modifyManagedPrefixList = function (args, optionsOrCb, cb) {
        var command = new ModifyManagedPrefixListCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error("Expect http options but get " + typeof optionsOrCb);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    };
    EC2.prototype.modifyNetworkInterfaceAttribute = function (args, optionsOrCb, cb) {
        var command = new ModifyNetworkInterfaceAttributeCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error("Expect http options but get " + typeof optionsOrCb);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    };
    EC2.prototype.modifyReservedInstances = function (args, optionsOrCb, cb) {
        var command = new ModifyReservedInstancesCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error("Expect http options but get " + typeof optionsOrCb);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    };
    EC2.prototype.modifySnapshotAttribute = function (args, optionsOrCb, cb) {
        var command = new ModifySnapshotAttributeCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error("Expect http options but get " + typeof optionsOrCb);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    };
    EC2.prototype.modifySpotFleetRequest = function (args, optionsOrCb, cb) {
        var command = new ModifySpotFleetRequestCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error("Expect http options but get " + typeof optionsOrCb);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    };
    EC2.prototype.modifySubnetAttribute = function (args, optionsOrCb, cb) {
        var command = new ModifySubnetAttributeCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error("Expect http options but get " + typeof optionsOrCb);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    };
    EC2.prototype.modifyTrafficMirrorFilterNetworkServices = function (args, optionsOrCb, cb) {
        var command = new ModifyTrafficMirrorFilterNetworkServicesCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error("Expect http options but get " + typeof optionsOrCb);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    };
    EC2.prototype.modifyTrafficMirrorFilterRule = function (args, optionsOrCb, cb) {
        var command = new ModifyTrafficMirrorFilterRuleCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error("Expect http options but get " + typeof optionsOrCb);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    };
    EC2.prototype.modifyTrafficMirrorSession = function (args, optionsOrCb, cb) {
        var command = new ModifyTrafficMirrorSessionCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error("Expect http options but get " + typeof optionsOrCb);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    };
    EC2.prototype.modifyTransitGateway = function (args, optionsOrCb, cb) {
        var command = new ModifyTransitGatewayCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error("Expect http options but get " + typeof optionsOrCb);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    };
    EC2.prototype.modifyTransitGatewayPrefixListReference = function (args, optionsOrCb, cb) {
        var command = new ModifyTransitGatewayPrefixListReferenceCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error("Expect http options but get " + typeof optionsOrCb);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    };
    EC2.prototype.modifyTransitGatewayVpcAttachment = function (args, optionsOrCb, cb) {
        var command = new ModifyTransitGatewayVpcAttachmentCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error("Expect http options but get " + typeof optionsOrCb);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    };
    EC2.prototype.modifyVolume = function (args, optionsOrCb, cb) {
        var command = new ModifyVolumeCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error("Expect http options but get " + typeof optionsOrCb);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    };
    EC2.prototype.modifyVolumeAttribute = function (args, optionsOrCb, cb) {
        var command = new ModifyVolumeAttributeCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error("Expect http options but get " + typeof optionsOrCb);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    };
    EC2.prototype.modifyVpcAttribute = function (args, optionsOrCb, cb) {
        var command = new ModifyVpcAttributeCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error("Expect http options but get " + typeof optionsOrCb);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    };
    EC2.prototype.modifyVpcEndpoint = function (args, optionsOrCb, cb) {
        var command = new ModifyVpcEndpointCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error("Expect http options but get " + typeof optionsOrCb);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    };
    EC2.prototype.modifyVpcEndpointConnectionNotification = function (args, optionsOrCb, cb) {
        var command = new ModifyVpcEndpointConnectionNotificationCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error("Expect http options but get " + typeof optionsOrCb);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    };
    EC2.prototype.modifyVpcEndpointServiceConfiguration = function (args, optionsOrCb, cb) {
        var command = new ModifyVpcEndpointServiceConfigurationCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error("Expect http options but get " + typeof optionsOrCb);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    };
    EC2.prototype.modifyVpcEndpointServicePermissions = function (args, optionsOrCb, cb) {
        var command = new ModifyVpcEndpointServicePermissionsCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error("Expect http options but get " + typeof optionsOrCb);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    };
    EC2.prototype.modifyVpcPeeringConnectionOptions = function (args, optionsOrCb, cb) {
        var command = new ModifyVpcPeeringConnectionOptionsCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error("Expect http options but get " + typeof optionsOrCb);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    };
    EC2.prototype.modifyVpcTenancy = function (args, optionsOrCb, cb) {
        var command = new ModifyVpcTenancyCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error("Expect http options but get " + typeof optionsOrCb);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    };
    EC2.prototype.modifyVpnConnection = function (args, optionsOrCb, cb) {
        var command = new ModifyVpnConnectionCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error("Expect http options but get " + typeof optionsOrCb);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    };
    EC2.prototype.modifyVpnConnectionOptions = function (args, optionsOrCb, cb) {
        var command = new ModifyVpnConnectionOptionsCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error("Expect http options but get " + typeof optionsOrCb);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    };
    EC2.prototype.modifyVpnTunnelCertificate = function (args, optionsOrCb, cb) {
        var command = new ModifyVpnTunnelCertificateCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error("Expect http options but get " + typeof optionsOrCb);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    };
    EC2.prototype.modifyVpnTunnelOptions = function (args, optionsOrCb, cb) {
        var command = new ModifyVpnTunnelOptionsCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error("Expect http options but get " + typeof optionsOrCb);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    };
    EC2.prototype.monitorInstances = function (args, optionsOrCb, cb) {
        var command = new MonitorInstancesCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error("Expect http options but get " + typeof optionsOrCb);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    };
    EC2.prototype.moveAddressToVpc = function (args, optionsOrCb, cb) {
        var command = new MoveAddressToVpcCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error("Expect http options but get " + typeof optionsOrCb);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    };
    EC2.prototype.provisionByoipCidr = function (args, optionsOrCb, cb) {
        var command = new ProvisionByoipCidrCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error("Expect http options but get " + typeof optionsOrCb);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    };
    EC2.prototype.purchaseHostReservation = function (args, optionsOrCb, cb) {
        var command = new PurchaseHostReservationCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error("Expect http options but get " + typeof optionsOrCb);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    };
    EC2.prototype.purchaseReservedInstancesOffering = function (args, optionsOrCb, cb) {
        var command = new PurchaseReservedInstancesOfferingCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error("Expect http options but get " + typeof optionsOrCb);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    };
    EC2.prototype.purchaseScheduledInstances = function (args, optionsOrCb, cb) {
        var command = new PurchaseScheduledInstancesCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error("Expect http options but get " + typeof optionsOrCb);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    };
    EC2.prototype.rebootInstances = function (args, optionsOrCb, cb) {
        var command = new RebootInstancesCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error("Expect http options but get " + typeof optionsOrCb);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    };
    EC2.prototype.registerImage = function (args, optionsOrCb, cb) {
        var command = new RegisterImageCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error("Expect http options but get " + typeof optionsOrCb);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    };
    EC2.prototype.registerInstanceEventNotificationAttributes = function (args, optionsOrCb, cb) {
        var command = new RegisterInstanceEventNotificationAttributesCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error("Expect http options but get " + typeof optionsOrCb);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    };
    EC2.prototype.registerTransitGatewayMulticastGroupMembers = function (args, optionsOrCb, cb) {
        var command = new RegisterTransitGatewayMulticastGroupMembersCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error("Expect http options but get " + typeof optionsOrCb);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    };
    EC2.prototype.registerTransitGatewayMulticastGroupSources = function (args, optionsOrCb, cb) {
        var command = new RegisterTransitGatewayMulticastGroupSourcesCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error("Expect http options but get " + typeof optionsOrCb);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    };
    EC2.prototype.rejectTransitGatewayMulticastDomainAssociations = function (args, optionsOrCb, cb) {
        var command = new RejectTransitGatewayMulticastDomainAssociationsCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error("Expect http options but get " + typeof optionsOrCb);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    };
    EC2.prototype.rejectTransitGatewayPeeringAttachment = function (args, optionsOrCb, cb) {
        var command = new RejectTransitGatewayPeeringAttachmentCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error("Expect http options but get " + typeof optionsOrCb);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    };
    EC2.prototype.rejectTransitGatewayVpcAttachment = function (args, optionsOrCb, cb) {
        var command = new RejectTransitGatewayVpcAttachmentCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error("Expect http options but get " + typeof optionsOrCb);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    };
    EC2.prototype.rejectVpcEndpointConnections = function (args, optionsOrCb, cb) {
        var command = new RejectVpcEndpointConnectionsCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error("Expect http options but get " + typeof optionsOrCb);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    };
    EC2.prototype.rejectVpcPeeringConnection = function (args, optionsOrCb, cb) {
        var command = new RejectVpcPeeringConnectionCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error("Expect http options but get " + typeof optionsOrCb);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    };
    EC2.prototype.releaseAddress = function (args, optionsOrCb, cb) {
        var command = new ReleaseAddressCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error("Expect http options but get " + typeof optionsOrCb);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    };
    EC2.prototype.releaseHosts = function (args, optionsOrCb, cb) {
        var command = new ReleaseHostsCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error("Expect http options but get " + typeof optionsOrCb);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    };
    EC2.prototype.replaceIamInstanceProfileAssociation = function (args, optionsOrCb, cb) {
        var command = new ReplaceIamInstanceProfileAssociationCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error("Expect http options but get " + typeof optionsOrCb);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    };
    EC2.prototype.replaceNetworkAclAssociation = function (args, optionsOrCb, cb) {
        var command = new ReplaceNetworkAclAssociationCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error("Expect http options but get " + typeof optionsOrCb);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    };
    EC2.prototype.replaceNetworkAclEntry = function (args, optionsOrCb, cb) {
        var command = new ReplaceNetworkAclEntryCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error("Expect http options but get " + typeof optionsOrCb);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    };
    EC2.prototype.replaceRoute = function (args, optionsOrCb, cb) {
        var command = new ReplaceRouteCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error("Expect http options but get " + typeof optionsOrCb);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    };
    EC2.prototype.replaceRouteTableAssociation = function (args, optionsOrCb, cb) {
        var command = new ReplaceRouteTableAssociationCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error("Expect http options but get " + typeof optionsOrCb);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    };
    EC2.prototype.replaceTransitGatewayRoute = function (args, optionsOrCb, cb) {
        var command = new ReplaceTransitGatewayRouteCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error("Expect http options but get " + typeof optionsOrCb);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    };
    EC2.prototype.reportInstanceStatus = function (args, optionsOrCb, cb) {
        var command = new ReportInstanceStatusCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error("Expect http options but get " + typeof optionsOrCb);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    };
    EC2.prototype.requestSpotFleet = function (args, optionsOrCb, cb) {
        var command = new RequestSpotFleetCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error("Expect http options but get " + typeof optionsOrCb);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    };
    EC2.prototype.requestSpotInstances = function (args, optionsOrCb, cb) {
        var command = new RequestSpotInstancesCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error("Expect http options but get " + typeof optionsOrCb);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    };
    EC2.prototype.resetAddressAttribute = function (args, optionsOrCb, cb) {
        var command = new ResetAddressAttributeCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error("Expect http options but get " + typeof optionsOrCb);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    };
    EC2.prototype.resetEbsDefaultKmsKeyId = function (args, optionsOrCb, cb) {
        var command = new ResetEbsDefaultKmsKeyIdCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error("Expect http options but get " + typeof optionsOrCb);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    };
    EC2.prototype.resetFpgaImageAttribute = function (args, optionsOrCb, cb) {
        var command = new ResetFpgaImageAttributeCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error("Expect http options but get " + typeof optionsOrCb);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    };
    EC2.prototype.resetImageAttribute = function (args, optionsOrCb, cb) {
        var command = new ResetImageAttributeCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error("Expect http options but get " + typeof optionsOrCb);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    };
    EC2.prototype.resetInstanceAttribute = function (args, optionsOrCb, cb) {
        var command = new ResetInstanceAttributeCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error("Expect http options but get " + typeof optionsOrCb);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    };
    EC2.prototype.resetNetworkInterfaceAttribute = function (args, optionsOrCb, cb) {
        var command = new ResetNetworkInterfaceAttributeCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error("Expect http options but get " + typeof optionsOrCb);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    };
    EC2.prototype.resetSnapshotAttribute = function (args, optionsOrCb, cb) {
        var command = new ResetSnapshotAttributeCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error("Expect http options but get " + typeof optionsOrCb);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    };
    EC2.prototype.restoreAddressToClassic = function (args, optionsOrCb, cb) {
        var command = new RestoreAddressToClassicCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error("Expect http options but get " + typeof optionsOrCb);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    };
    EC2.prototype.restoreManagedPrefixListVersion = function (args, optionsOrCb, cb) {
        var command = new RestoreManagedPrefixListVersionCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error("Expect http options but get " + typeof optionsOrCb);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    };
    EC2.prototype.revokeClientVpnIngress = function (args, optionsOrCb, cb) {
        var command = new RevokeClientVpnIngressCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error("Expect http options but get " + typeof optionsOrCb);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    };
    EC2.prototype.revokeSecurityGroupEgress = function (args, optionsOrCb, cb) {
        var command = new RevokeSecurityGroupEgressCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error("Expect http options but get " + typeof optionsOrCb);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    };
    EC2.prototype.revokeSecurityGroupIngress = function (args, optionsOrCb, cb) {
        var command = new RevokeSecurityGroupIngressCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error("Expect http options but get " + typeof optionsOrCb);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    };
    EC2.prototype.runInstances = function (args, optionsOrCb, cb) {
        var command = new RunInstancesCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error("Expect http options but get " + typeof optionsOrCb);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    };
    EC2.prototype.runScheduledInstances = function (args, optionsOrCb, cb) {
        var command = new RunScheduledInstancesCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error("Expect http options but get " + typeof optionsOrCb);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    };
    EC2.prototype.searchLocalGatewayRoutes = function (args, optionsOrCb, cb) {
        var command = new SearchLocalGatewayRoutesCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error("Expect http options but get " + typeof optionsOrCb);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    };
    EC2.prototype.searchTransitGatewayMulticastGroups = function (args, optionsOrCb, cb) {
        var command = new SearchTransitGatewayMulticastGroupsCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error("Expect http options but get " + typeof optionsOrCb);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    };
    EC2.prototype.searchTransitGatewayRoutes = function (args, optionsOrCb, cb) {
        var command = new SearchTransitGatewayRoutesCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error("Expect http options but get " + typeof optionsOrCb);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    };
    EC2.prototype.sendDiagnosticInterrupt = function (args, optionsOrCb, cb) {
        var command = new SendDiagnosticInterruptCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error("Expect http options but get " + typeof optionsOrCb);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    };
    EC2.prototype.startInstances = function (args, optionsOrCb, cb) {
        var command = new StartInstancesCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error("Expect http options but get " + typeof optionsOrCb);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    };
    EC2.prototype.startNetworkInsightsAnalysis = function (args, optionsOrCb, cb) {
        var command = new StartNetworkInsightsAnalysisCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error("Expect http options but get " + typeof optionsOrCb);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    };
    EC2.prototype.startVpcEndpointServicePrivateDnsVerification = function (args, optionsOrCb, cb) {
        var command = new StartVpcEndpointServicePrivateDnsVerificationCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error("Expect http options but get " + typeof optionsOrCb);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    };
    EC2.prototype.stopInstances = function (args, optionsOrCb, cb) {
        var command = new StopInstancesCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error("Expect http options but get " + typeof optionsOrCb);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    };
    EC2.prototype.terminateClientVpnConnections = function (args, optionsOrCb, cb) {
        var command = new TerminateClientVpnConnectionsCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error("Expect http options but get " + typeof optionsOrCb);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    };
    EC2.prototype.terminateInstances = function (args, optionsOrCb, cb) {
        var command = new TerminateInstancesCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error("Expect http options but get " + typeof optionsOrCb);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    };
    EC2.prototype.unassignIpv6Addresses = function (args, optionsOrCb, cb) {
        var command = new UnassignIpv6AddressesCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error("Expect http options but get " + typeof optionsOrCb);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    };
    EC2.prototype.unassignPrivateIpAddresses = function (args, optionsOrCb, cb) {
        var command = new UnassignPrivateIpAddressesCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error("Expect http options but get " + typeof optionsOrCb);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    };
    EC2.prototype.unmonitorInstances = function (args, optionsOrCb, cb) {
        var command = new UnmonitorInstancesCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error("Expect http options but get " + typeof optionsOrCb);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    };
    EC2.prototype.updateSecurityGroupRuleDescriptionsEgress = function (args, optionsOrCb, cb) {
        var command = new UpdateSecurityGroupRuleDescriptionsEgressCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error("Expect http options but get " + typeof optionsOrCb);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    };
    EC2.prototype.updateSecurityGroupRuleDescriptionsIngress = function (args, optionsOrCb, cb) {
        var command = new UpdateSecurityGroupRuleDescriptionsIngressCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error("Expect http options but get " + typeof optionsOrCb);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    };
    EC2.prototype.withdrawByoipCidr = function (args, optionsOrCb, cb) {
        var command = new WithdrawByoipCidrCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error("Expect http options but get " + typeof optionsOrCb);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    };
    return EC2;
}(EC2Client));
export { EC2 };
//# sourceMappingURL=EC2.js.map