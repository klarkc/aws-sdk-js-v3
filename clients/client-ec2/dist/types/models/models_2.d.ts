import { AccountAttribute, AccountAttributeName, ActiveInstance, Address, AddressAttribute, AddressAttributeName, AllocationState, AllowsMultipleInstanceTypes, AssociationStatus, AttachmentStatus, AttributeValue, AutoPlacement, BlockDeviceMapping, BundleTask, ByoipCidr, CapacityReservation, CapacityReservationPreference, CarrierGateway, ClientVpnAuthenticationType, ClientVpnAuthorizationRuleStatus, ClientVpnEndpointStatus, ClientVpnRouteStatus, CurrencyCodeValues, CustomerGateway, DefaultTargetCapacityType, DhcpOptions, DiskImageFormat, EgressOnlyInternetGateway, ExportTask, FleetCapacityReservationUsageStrategy, FleetExcessCapacityTerminationPolicy, FleetLaunchTemplateOverrides, FleetLaunchTemplateSpecification, FleetOnDemandAllocationStrategy, FleetReplacementStrategy, FleetType, HostRecovery, IamInstanceProfile, IamInstanceProfileAssociation, InstanceLifecycle, LaunchTemplateAndOverridesResponse, LogDestinationType, Placement, PlatformValues, SpotAllocationStrategy, SpotInstanceInterruptionBehavior, Tag, TrafficType, TransitGatewayPeeringAttachment, TransitGatewayVpcAttachment, TransportProtocol, UnsuccessfulItem, _InstanceType } from "./models_0";
import { CapacityReservationTargetResponse, FleetStateCode, GroupIdentifier, InstanceIpv6Address, LocalGatewayRouteTableVpcAssociation, ManagedPrefixList, NetworkInterfaceStatus, TransitGateway, TransitGatewayConnect, TransitGatewayConnectPeer, TransitGatewayMulticastDomain, TransitGatewayPrefixListReference, TransitGatewayRoute, TransitGatewayRouteTable } from "./models_1";
export interface DeleteLocalGatewayRouteTableVpcAssociationRequest {
    /**
     * <p>The ID of the association.</p>
     */
    LocalGatewayRouteTableVpcAssociationId: string | undefined;
    /**
     * <p>Checks whether you have the required permissions for the action, without actually making the request,
     *    and provides an error response. If you have the required permissions, the error response is <code>DryRunOperation</code>.
     *    Otherwise, it is <code>UnauthorizedOperation</code>.</p>
     */
    DryRun?: boolean;
}
export declare namespace DeleteLocalGatewayRouteTableVpcAssociationRequest {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: DeleteLocalGatewayRouteTableVpcAssociationRequest) => any;
}
export interface DeleteLocalGatewayRouteTableVpcAssociationResult {
    /**
     * <p>Information about the association.</p>
     */
    LocalGatewayRouteTableVpcAssociation?: LocalGatewayRouteTableVpcAssociation;
}
export declare namespace DeleteLocalGatewayRouteTableVpcAssociationResult {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: DeleteLocalGatewayRouteTableVpcAssociationResult) => any;
}
export interface DeleteManagedPrefixListRequest {
    /**
     * <p>Checks whether you have the required permissions for the action, without actually making the request,
     *    and provides an error response. If you have the required permissions, the error response is <code>DryRunOperation</code>.
     *    Otherwise, it is <code>UnauthorizedOperation</code>.</p>
     */
    DryRun?: boolean;
    /**
     * <p>The ID of the prefix list.</p>
     */
    PrefixListId: string | undefined;
}
export declare namespace DeleteManagedPrefixListRequest {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: DeleteManagedPrefixListRequest) => any;
}
export interface DeleteManagedPrefixListResult {
    /**
     * <p>Information about the prefix list.</p>
     */
    PrefixList?: ManagedPrefixList;
}
export declare namespace DeleteManagedPrefixListResult {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: DeleteManagedPrefixListResult) => any;
}
export interface DeleteNatGatewayRequest {
    /**
     * <p>Checks whether you have the required permissions for the action, without actually making the request,
     *    and provides an error response. If you have the required permissions, the error response is <code>DryRunOperation</code>.
     *    Otherwise, it is <code>UnauthorizedOperation</code>.</p>
     */
    DryRun?: boolean;
    /**
     * <p>The ID of the NAT gateway.</p>
     */
    NatGatewayId: string | undefined;
}
export declare namespace DeleteNatGatewayRequest {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: DeleteNatGatewayRequest) => any;
}
export interface DeleteNatGatewayResult {
    /**
     * <p>The ID of the NAT gateway.</p>
     */
    NatGatewayId?: string;
}
export declare namespace DeleteNatGatewayResult {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: DeleteNatGatewayResult) => any;
}
export interface DeleteNetworkAclRequest {
    /**
     * <p>Checks whether you have the required permissions for the action, without actually making the request,
     *    and provides an error response. If you have the required permissions, the error response is <code>DryRunOperation</code>.
     *    Otherwise, it is <code>UnauthorizedOperation</code>.</p>
     */
    DryRun?: boolean;
    /**
     * <p>The ID of the network ACL.</p>
     */
    NetworkAclId: string | undefined;
}
export declare namespace DeleteNetworkAclRequest {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: DeleteNetworkAclRequest) => any;
}
export interface DeleteNetworkAclEntryRequest {
    /**
     * <p>Checks whether you have the required permissions for the action, without actually making the request,
     *    and provides an error response. If you have the required permissions, the error response is <code>DryRunOperation</code>.
     *    Otherwise, it is <code>UnauthorizedOperation</code>.</p>
     */
    DryRun?: boolean;
    /**
     * <p>Indicates whether the rule is an egress rule.</p>
     */
    Egress: boolean | undefined;
    /**
     * <p>The ID of the network ACL.</p>
     */
    NetworkAclId: string | undefined;
    /**
     * <p>The rule number of the entry to delete.</p>
     */
    RuleNumber: number | undefined;
}
export declare namespace DeleteNetworkAclEntryRequest {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: DeleteNetworkAclEntryRequest) => any;
}
export interface DeleteNetworkInsightsAnalysisRequest {
    /**
     * <p>Checks whether you have the required permissions for the action, without actually making the request,
     *    and provides an error response. If you have the required permissions, the error response is <code>DryRunOperation</code>.
     *    Otherwise, it is <code>UnauthorizedOperation</code>.</p>
     */
    DryRun?: boolean;
    /**
     * <p>The ID of the network insights analysis.</p>
     */
    NetworkInsightsAnalysisId: string | undefined;
}
export declare namespace DeleteNetworkInsightsAnalysisRequest {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: DeleteNetworkInsightsAnalysisRequest) => any;
}
export interface DeleteNetworkInsightsAnalysisResult {
    /**
     * <p>The ID of the network insights analysis.</p>
     */
    NetworkInsightsAnalysisId?: string;
}
export declare namespace DeleteNetworkInsightsAnalysisResult {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: DeleteNetworkInsightsAnalysisResult) => any;
}
export interface DeleteNetworkInsightsPathRequest {
    /**
     * <p>Checks whether you have the required permissions for the action, without actually making the request,
     *    and provides an error response. If you have the required permissions, the error response is <code>DryRunOperation</code>.
     *    Otherwise, it is <code>UnauthorizedOperation</code>.</p>
     */
    DryRun?: boolean;
    /**
     * <p>The ID of the path.</p>
     */
    NetworkInsightsPathId: string | undefined;
}
export declare namespace DeleteNetworkInsightsPathRequest {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: DeleteNetworkInsightsPathRequest) => any;
}
export interface DeleteNetworkInsightsPathResult {
    /**
     * <p>The ID of the path.</p>
     */
    NetworkInsightsPathId?: string;
}
export declare namespace DeleteNetworkInsightsPathResult {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: DeleteNetworkInsightsPathResult) => any;
}
/**
 * <p>Contains the parameters for DeleteNetworkInterface.</p>
 */
export interface DeleteNetworkInterfaceRequest {
    /**
     * <p>Checks whether you have the required permissions for the action, without actually making the request,
     *             and provides an error response. If you have the required permissions, the error response is <code>DryRunOperation</code>.
     *             Otherwise, it is <code>UnauthorizedOperation</code>.</p>
     */
    DryRun?: boolean;
    /**
     * <p>The ID of the network interface.</p>
     */
    NetworkInterfaceId: string | undefined;
}
export declare namespace DeleteNetworkInterfaceRequest {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: DeleteNetworkInterfaceRequest) => any;
}
/**
 * <p>Contains the parameters for DeleteNetworkInterfacePermission.</p>
 */
export interface DeleteNetworkInterfacePermissionRequest {
    /**
     * <p>The ID of the network interface permission.</p>
     */
    NetworkInterfacePermissionId: string | undefined;
    /**
     * <p>Specify <code>true</code> to remove the permission even if the network interface is
     * 			attached to an instance.</p>
     */
    Force?: boolean;
    /**
     * <p>Checks whether you have the required permissions for the action, without actually making the request,
     * 			and provides an error response. If you have the required permissions, the error response is <code>DryRunOperation</code>.
     * 			Otherwise, it is <code>UnauthorizedOperation</code>.</p>
     */
    DryRun?: boolean;
}
export declare namespace DeleteNetworkInterfacePermissionRequest {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: DeleteNetworkInterfacePermissionRequest) => any;
}
/**
 * <p>Contains the output for DeleteNetworkInterfacePermission.</p>
 */
export interface DeleteNetworkInterfacePermissionResult {
    /**
     * <p>Returns <code>true</code> if the request succeeds, otherwise returns an error.</p>
     */
    Return?: boolean;
}
export declare namespace DeleteNetworkInterfacePermissionResult {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: DeleteNetworkInterfacePermissionResult) => any;
}
export interface DeletePlacementGroupRequest {
    /**
     * <p>Checks whether you have the required permissions for the action, without actually making the request,
     *    and provides an error response. If you have the required permissions, the error response is <code>DryRunOperation</code>.
     *    Otherwise, it is <code>UnauthorizedOperation</code>.</p>
     */
    DryRun?: boolean;
    /**
     * <p>The name of the placement group.</p>
     */
    GroupName: string | undefined;
}
export declare namespace DeletePlacementGroupRequest {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: DeletePlacementGroupRequest) => any;
}
export interface DeleteQueuedReservedInstancesRequest {
    /**
     * <p>Checks whether you have the required permissions for the action, without actually making the request,
     *       and provides an error response. If you have the required permissions, the error response is <code>DryRunOperation</code>.
     *       Otherwise, it is <code>UnauthorizedOperation</code>.</p>
     */
    DryRun?: boolean;
    /**
     * <p>The IDs of the Reserved Instances.</p>
     */
    ReservedInstancesIds: string[] | undefined;
}
export declare namespace DeleteQueuedReservedInstancesRequest {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: DeleteQueuedReservedInstancesRequest) => any;
}
export declare enum DeleteQueuedReservedInstancesErrorCode {
    RESERVED_INSTANCES_ID_INVALID = "reserved-instances-id-invalid",
    RESERVED_INSTANCES_NOT_IN_QUEUED_STATE = "reserved-instances-not-in-queued-state",
    UNEXPECTED_ERROR = "unexpected-error"
}
/**
 * <p>Describes the error for a Reserved Instance whose queued purchase could not be deleted.</p>
 */
export interface DeleteQueuedReservedInstancesError {
    /**
     * <p>The error code.</p>
     */
    Code?: DeleteQueuedReservedInstancesErrorCode | string;
    /**
     * <p>The error message.</p>
     */
    Message?: string;
}
export declare namespace DeleteQueuedReservedInstancesError {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: DeleteQueuedReservedInstancesError) => any;
}
/**
 * <p>Describes a Reserved Instance whose queued purchase was not deleted.</p>
 */
export interface FailedQueuedPurchaseDeletion {
    /**
     * <p>The error.</p>
     */
    Error?: DeleteQueuedReservedInstancesError;
    /**
     * <p>The ID of the Reserved Instance.</p>
     */
    ReservedInstancesId?: string;
}
export declare namespace FailedQueuedPurchaseDeletion {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: FailedQueuedPurchaseDeletion) => any;
}
/**
 * <p>Describes a Reserved Instance whose queued purchase was successfully deleted.</p>
 */
export interface SuccessfulQueuedPurchaseDeletion {
    /**
     * <p>The ID of the Reserved Instance.</p>
     */
    ReservedInstancesId?: string;
}
export declare namespace SuccessfulQueuedPurchaseDeletion {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: SuccessfulQueuedPurchaseDeletion) => any;
}
export interface DeleteQueuedReservedInstancesResult {
    /**
     * <p>Information about the queued purchases that were successfully deleted.</p>
     */
    SuccessfulQueuedPurchaseDeletions?: SuccessfulQueuedPurchaseDeletion[];
    /**
     * <p>Information about the queued purchases that could not be deleted.</p>
     */
    FailedQueuedPurchaseDeletions?: FailedQueuedPurchaseDeletion[];
}
export declare namespace DeleteQueuedReservedInstancesResult {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: DeleteQueuedReservedInstancesResult) => any;
}
export interface DeleteRouteRequest {
    /**
     * <p>The IPv4 CIDR range for the route. The value you specify must match the CIDR for the route exactly.</p>
     */
    DestinationCidrBlock?: string;
    /**
     * <p>The IPv6 CIDR range for the route. The value you specify must match the CIDR for the route exactly.</p>
     */
    DestinationIpv6CidrBlock?: string;
    /**
     * <p>The ID of the prefix list for the route.</p>
     */
    DestinationPrefixListId?: string;
    /**
     * <p>Checks whether you have the required permissions for the action, without actually making the request,
     *    and provides an error response. If you have the required permissions, the error response is <code>DryRunOperation</code>.
     *    Otherwise, it is <code>UnauthorizedOperation</code>.</p>
     */
    DryRun?: boolean;
    /**
     * <p>The ID of the route table.</p>
     */
    RouteTableId: string | undefined;
}
export declare namespace DeleteRouteRequest {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: DeleteRouteRequest) => any;
}
export interface DeleteRouteTableRequest {
    /**
     * <p>Checks whether you have the required permissions for the action, without actually making the request,
     *    and provides an error response. If you have the required permissions, the error response is <code>DryRunOperation</code>.
     *    Otherwise, it is <code>UnauthorizedOperation</code>.</p>
     */
    DryRun?: boolean;
    /**
     * <p>The ID of the route table.</p>
     */
    RouteTableId: string | undefined;
}
export declare namespace DeleteRouteTableRequest {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: DeleteRouteTableRequest) => any;
}
export interface DeleteSecurityGroupRequest {
    /**
     * <p>The ID of the security group. Required for a nondefault VPC.</p>
     */
    GroupId?: string;
    /**
     * <p>[EC2-Classic, default VPC] The name of the security group. You can specify either the security group name or the security group ID.</p>
     */
    GroupName?: string;
    /**
     * <p>Checks whether you have the required permissions for the action, without actually making the request,
     *    and provides an error response. If you have the required permissions, the error response is <code>DryRunOperation</code>.
     *    Otherwise, it is <code>UnauthorizedOperation</code>.</p>
     */
    DryRun?: boolean;
}
export declare namespace DeleteSecurityGroupRequest {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: DeleteSecurityGroupRequest) => any;
}
export interface DeleteSnapshotRequest {
    /**
     * <p>The ID of the EBS snapshot.</p>
     */
    SnapshotId: string | undefined;
    /**
     * <p>Checks whether you have the required permissions for the action, without actually making the request,
     *    and provides an error response. If you have the required permissions, the error response is <code>DryRunOperation</code>.
     *    Otherwise, it is <code>UnauthorizedOperation</code>.</p>
     */
    DryRun?: boolean;
}
export declare namespace DeleteSnapshotRequest {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: DeleteSnapshotRequest) => any;
}
/**
 * <p>Contains the parameters for DeleteSpotDatafeedSubscription.</p>
 */
export interface DeleteSpotDatafeedSubscriptionRequest {
    /**
     * <p>Checks whether you have the required permissions for the action, without actually making the request,
     *        and provides an error response. If you have the required permissions, the error response is <code>DryRunOperation</code>.
     *        Otherwise, it is <code>UnauthorizedOperation</code>.</p>
     */
    DryRun?: boolean;
}
export declare namespace DeleteSpotDatafeedSubscriptionRequest {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: DeleteSpotDatafeedSubscriptionRequest) => any;
}
export interface DeleteSubnetRequest {
    /**
     * <p>The ID of the subnet.</p>
     */
    SubnetId: string | undefined;
    /**
     * <p>Checks whether you have the required permissions for the action, without actually making the request,
     *    and provides an error response. If you have the required permissions, the error response is <code>DryRunOperation</code>.
     *    Otherwise, it is <code>UnauthorizedOperation</code>.</p>
     */
    DryRun?: boolean;
}
export declare namespace DeleteSubnetRequest {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: DeleteSubnetRequest) => any;
}
export interface DeleteTagsRequest {
    /**
     * <p>Checks whether you have the required permissions for the action, without actually making the request,
     *    and provides an error response. If you have the required permissions, the error response is <code>DryRunOperation</code>.
     *    Otherwise, it is <code>UnauthorizedOperation</code>.</p>
     */
    DryRun?: boolean;
    /**
     * <p>The IDs of the resources, separated by spaces.</p>
     *    	     <p>Constraints: Up to 1000 resource IDs. We recommend breaking up this request into smaller batches.</p>
     */
    Resources: string[] | undefined;
    /**
     * <p>The tags to delete. Specify a tag key and an optional tag value to delete
     *             specific tags. If you specify a tag key without a tag value, we delete any tag with this
     *             key regardless of its value. If you specify a tag key with an empty string as the tag
     *             value, we delete the tag only if its value is an empty string.</p>
     *         <p>If you omit this parameter, we delete all user-defined tags for the specified
     *             resources. We do not delete AWS-generated tags (tags that have the <code>aws:</code>
     *             prefix).</p>
     */
    Tags?: Tag[];
}
export declare namespace DeleteTagsRequest {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: DeleteTagsRequest) => any;
}
export interface DeleteTrafficMirrorFilterRequest {
    /**
     * <p>The ID of the Traffic Mirror filter.</p>
     */
    TrafficMirrorFilterId: string | undefined;
    /**
     * <p>Checks whether you have the required permissions for the action, without actually making the request,
     *    and provides an error response. If you have the required permissions, the error response is <code>DryRunOperation</code>.
     *    Otherwise, it is <code>UnauthorizedOperation</code>.</p>
     */
    DryRun?: boolean;
}
export declare namespace DeleteTrafficMirrorFilterRequest {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: DeleteTrafficMirrorFilterRequest) => any;
}
export interface DeleteTrafficMirrorFilterResult {
    /**
     * <p>The ID of the Traffic Mirror filter.</p>
     */
    TrafficMirrorFilterId?: string;
}
export declare namespace DeleteTrafficMirrorFilterResult {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: DeleteTrafficMirrorFilterResult) => any;
}
export interface DeleteTrafficMirrorFilterRuleRequest {
    /**
     * <p>The ID of the Traffic Mirror rule.</p>
     */
    TrafficMirrorFilterRuleId: string | undefined;
    /**
     * <p>Checks whether you have the required permissions for the action, without actually making the request,
     *    and provides an error response. If you have the required permissions, the error response is <code>DryRunOperation</code>.
     *    Otherwise, it is <code>UnauthorizedOperation</code>.</p>
     */
    DryRun?: boolean;
}
export declare namespace DeleteTrafficMirrorFilterRuleRequest {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: DeleteTrafficMirrorFilterRuleRequest) => any;
}
export interface DeleteTrafficMirrorFilterRuleResult {
    /**
     * <p>The ID of the deleted Traffic Mirror rule.</p>
     */
    TrafficMirrorFilterRuleId?: string;
}
export declare namespace DeleteTrafficMirrorFilterRuleResult {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: DeleteTrafficMirrorFilterRuleResult) => any;
}
export interface DeleteTrafficMirrorSessionRequest {
    /**
     * <p>The ID of the Traffic Mirror session.</p>
     */
    TrafficMirrorSessionId: string | undefined;
    /**
     * <p>Checks whether you have the required permissions for the action, without actually making the request,
     *    and provides an error response. If you have the required permissions, the error response is <code>DryRunOperation</code>.
     *    Otherwise, it is <code>UnauthorizedOperation</code>.</p>
     */
    DryRun?: boolean;
}
export declare namespace DeleteTrafficMirrorSessionRequest {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: DeleteTrafficMirrorSessionRequest) => any;
}
export interface DeleteTrafficMirrorSessionResult {
    /**
     * <p>The ID of the deleted Traffic Mirror session.</p>
     */
    TrafficMirrorSessionId?: string;
}
export declare namespace DeleteTrafficMirrorSessionResult {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: DeleteTrafficMirrorSessionResult) => any;
}
export interface DeleteTrafficMirrorTargetRequest {
    /**
     * <p>The ID of the Traffic Mirror target.</p>
     */
    TrafficMirrorTargetId: string | undefined;
    /**
     * <p>Checks whether you have the required permissions for the action, without actually making the request,
     *    and provides an error response. If you have the required permissions, the error response is <code>DryRunOperation</code>.
     *    Otherwise, it is <code>UnauthorizedOperation</code>.</p>
     */
    DryRun?: boolean;
}
export declare namespace DeleteTrafficMirrorTargetRequest {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: DeleteTrafficMirrorTargetRequest) => any;
}
export interface DeleteTrafficMirrorTargetResult {
    /**
     * <p>The ID of the deleted Traffic Mirror target.</p>
     */
    TrafficMirrorTargetId?: string;
}
export declare namespace DeleteTrafficMirrorTargetResult {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: DeleteTrafficMirrorTargetResult) => any;
}
export interface DeleteTransitGatewayRequest {
    /**
     * <p>The ID of the transit gateway.</p>
     */
    TransitGatewayId: string | undefined;
    /**
     * <p>Checks whether you have the required permissions for the action, without actually making the request,
     *    and provides an error response. If you have the required permissions, the error response is <code>DryRunOperation</code>.
     *    Otherwise, it is <code>UnauthorizedOperation</code>.</p>
     */
    DryRun?: boolean;
}
export declare namespace DeleteTransitGatewayRequest {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: DeleteTransitGatewayRequest) => any;
}
export interface DeleteTransitGatewayResult {
    /**
     * <p>Information about the deleted transit gateway.</p>
     */
    TransitGateway?: TransitGateway;
}
export declare namespace DeleteTransitGatewayResult {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: DeleteTransitGatewayResult) => any;
}
export interface DeleteTransitGatewayConnectRequest {
    /**
     * <p>The ID of the Connect attachment.</p>
     */
    TransitGatewayAttachmentId: string | undefined;
    /**
     * <p>Checks whether you have the required permissions for the action, without actually making the request,
     *    and provides an error response. If you have the required permissions, the error response is <code>DryRunOperation</code>.
     *    Otherwise, it is <code>UnauthorizedOperation</code>.</p>
     */
    DryRun?: boolean;
}
export declare namespace DeleteTransitGatewayConnectRequest {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: DeleteTransitGatewayConnectRequest) => any;
}
export interface DeleteTransitGatewayConnectResult {
    /**
     * <p>Information about the deleted Connect attachment.</p>
     */
    TransitGatewayConnect?: TransitGatewayConnect;
}
export declare namespace DeleteTransitGatewayConnectResult {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: DeleteTransitGatewayConnectResult) => any;
}
export interface DeleteTransitGatewayConnectPeerRequest {
    /**
     * <p>The ID of the Connect peer.</p>
     */
    TransitGatewayConnectPeerId: string | undefined;
    /**
     * <p>Checks whether you have the required permissions for the action, without actually making the request,
     *    and provides an error response. If you have the required permissions, the error response is <code>DryRunOperation</code>.
     *    Otherwise, it is <code>UnauthorizedOperation</code>.</p>
     */
    DryRun?: boolean;
}
export declare namespace DeleteTransitGatewayConnectPeerRequest {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: DeleteTransitGatewayConnectPeerRequest) => any;
}
export interface DeleteTransitGatewayConnectPeerResult {
    /**
     * <p>Information about the deleted Connect peer.</p>
     */
    TransitGatewayConnectPeer?: TransitGatewayConnectPeer;
}
export declare namespace DeleteTransitGatewayConnectPeerResult {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: DeleteTransitGatewayConnectPeerResult) => any;
}
export interface DeleteTransitGatewayMulticastDomainRequest {
    /**
     * <p>The ID of the transit gateway multicast domain.</p>
     */
    TransitGatewayMulticastDomainId: string | undefined;
    /**
     * <p>Checks whether you have the required permissions for the action, without actually making the request,
     *    and provides an error response. If you have the required permissions, the error response is <code>DryRunOperation</code>.
     *    Otherwise, it is <code>UnauthorizedOperation</code>.</p>
     */
    DryRun?: boolean;
}
export declare namespace DeleteTransitGatewayMulticastDomainRequest {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: DeleteTransitGatewayMulticastDomainRequest) => any;
}
export interface DeleteTransitGatewayMulticastDomainResult {
    /**
     * <p>Information about the deleted transit gateway multicast domain.</p>
     */
    TransitGatewayMulticastDomain?: TransitGatewayMulticastDomain;
}
export declare namespace DeleteTransitGatewayMulticastDomainResult {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: DeleteTransitGatewayMulticastDomainResult) => any;
}
export interface DeleteTransitGatewayPeeringAttachmentRequest {
    /**
     * <p>The ID of the transit gateway peering attachment.</p>
     */
    TransitGatewayAttachmentId: string | undefined;
    /**
     * <p>Checks whether you have the required permissions for the action, without actually making the request,
     *    and provides an error response. If you have the required permissions, the error response is <code>DryRunOperation</code>.
     *    Otherwise, it is <code>UnauthorizedOperation</code>.</p>
     */
    DryRun?: boolean;
}
export declare namespace DeleteTransitGatewayPeeringAttachmentRequest {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: DeleteTransitGatewayPeeringAttachmentRequest) => any;
}
export interface DeleteTransitGatewayPeeringAttachmentResult {
    /**
     * <p>The transit gateway peering attachment.</p>
     */
    TransitGatewayPeeringAttachment?: TransitGatewayPeeringAttachment;
}
export declare namespace DeleteTransitGatewayPeeringAttachmentResult {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: DeleteTransitGatewayPeeringAttachmentResult) => any;
}
export interface DeleteTransitGatewayPrefixListReferenceRequest {
    /**
     * <p>The ID of the route table.</p>
     */
    TransitGatewayRouteTableId: string | undefined;
    /**
     * <p>The ID of the prefix list.</p>
     */
    PrefixListId: string | undefined;
    /**
     * <p>Checks whether you have the required permissions for the action, without actually making the request,
     *    and provides an error response. If you have the required permissions, the error response is <code>DryRunOperation</code>.
     *    Otherwise, it is <code>UnauthorizedOperation</code>.</p>
     */
    DryRun?: boolean;
}
export declare namespace DeleteTransitGatewayPrefixListReferenceRequest {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: DeleteTransitGatewayPrefixListReferenceRequest) => any;
}
export interface DeleteTransitGatewayPrefixListReferenceResult {
    /**
     * <p>Information about the deleted prefix list reference.</p>
     */
    TransitGatewayPrefixListReference?: TransitGatewayPrefixListReference;
}
export declare namespace DeleteTransitGatewayPrefixListReferenceResult {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: DeleteTransitGatewayPrefixListReferenceResult) => any;
}
export interface DeleteTransitGatewayRouteRequest {
    /**
     * <p>The ID of the transit gateway route table.</p>
     */
    TransitGatewayRouteTableId: string | undefined;
    /**
     * <p>The CIDR range for the route. This must match the CIDR for the route exactly.</p>
     */
    DestinationCidrBlock: string | undefined;
    /**
     * <p>Checks whether you have the required permissions for the action, without actually making the request,
     *    and provides an error response. If you have the required permissions, the error response is <code>DryRunOperation</code>.
     *    Otherwise, it is <code>UnauthorizedOperation</code>.</p>
     */
    DryRun?: boolean;
}
export declare namespace DeleteTransitGatewayRouteRequest {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: DeleteTransitGatewayRouteRequest) => any;
}
export interface DeleteTransitGatewayRouteResult {
    /**
     * <p>Information about the route.</p>
     */
    Route?: TransitGatewayRoute;
}
export declare namespace DeleteTransitGatewayRouteResult {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: DeleteTransitGatewayRouteResult) => any;
}
export interface DeleteTransitGatewayRouteTableRequest {
    /**
     * <p>The ID of the transit gateway route table.</p>
     */
    TransitGatewayRouteTableId: string | undefined;
    /**
     * <p>Checks whether you have the required permissions for the action, without actually making the request,
     *    and provides an error response. If you have the required permissions, the error response is <code>DryRunOperation</code>.
     *    Otherwise, it is <code>UnauthorizedOperation</code>.</p>
     */
    DryRun?: boolean;
}
export declare namespace DeleteTransitGatewayRouteTableRequest {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: DeleteTransitGatewayRouteTableRequest) => any;
}
export interface DeleteTransitGatewayRouteTableResult {
    /**
     * <p>Information about the deleted transit gateway route table.</p>
     */
    TransitGatewayRouteTable?: TransitGatewayRouteTable;
}
export declare namespace DeleteTransitGatewayRouteTableResult {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: DeleteTransitGatewayRouteTableResult) => any;
}
export interface DeleteTransitGatewayVpcAttachmentRequest {
    /**
     * <p>The ID of the attachment.</p>
     */
    TransitGatewayAttachmentId: string | undefined;
    /**
     * <p>Checks whether you have the required permissions for the action, without actually making the request,
     *    and provides an error response. If you have the required permissions, the error response is <code>DryRunOperation</code>.
     *    Otherwise, it is <code>UnauthorizedOperation</code>.</p>
     */
    DryRun?: boolean;
}
export declare namespace DeleteTransitGatewayVpcAttachmentRequest {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: DeleteTransitGatewayVpcAttachmentRequest) => any;
}
export interface DeleteTransitGatewayVpcAttachmentResult {
    /**
     * <p>Information about the deleted VPC attachment.</p>
     */
    TransitGatewayVpcAttachment?: TransitGatewayVpcAttachment;
}
export declare namespace DeleteTransitGatewayVpcAttachmentResult {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: DeleteTransitGatewayVpcAttachmentResult) => any;
}
export interface DeleteVolumeRequest {
    /**
     * <p>The ID of the volume.</p>
     */
    VolumeId: string | undefined;
    /**
     * <p>Checks whether you have the required permissions for the action, without actually making the request,
     *    and provides an error response. If you have the required permissions, the error response is <code>DryRunOperation</code>.
     *    Otherwise, it is <code>UnauthorizedOperation</code>.</p>
     */
    DryRun?: boolean;
}
export declare namespace DeleteVolumeRequest {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: DeleteVolumeRequest) => any;
}
export interface DeleteVpcRequest {
    /**
     * <p>The ID of the VPC.</p>
     */
    VpcId: string | undefined;
    /**
     * <p>Checks whether you have the required permissions for the action, without actually making the request,
     *    and provides an error response. If you have the required permissions, the error response is <code>DryRunOperation</code>.
     *    Otherwise, it is <code>UnauthorizedOperation</code>.</p>
     */
    DryRun?: boolean;
}
export declare namespace DeleteVpcRequest {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: DeleteVpcRequest) => any;
}
export interface DeleteVpcEndpointConnectionNotificationsRequest {
    /**
     * <p>Checks whether you have the required permissions for the action, without actually making the request,
     *    and provides an error response. If you have the required permissions, the error response is <code>DryRunOperation</code>.
     *    Otherwise, it is <code>UnauthorizedOperation</code>.</p>
     */
    DryRun?: boolean;
    /**
     * <p>One or more notification IDs.</p>
     */
    ConnectionNotificationIds: string[] | undefined;
}
export declare namespace DeleteVpcEndpointConnectionNotificationsRequest {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: DeleteVpcEndpointConnectionNotificationsRequest) => any;
}
export interface DeleteVpcEndpointConnectionNotificationsResult {
    /**
     * <p>Information about the notifications that could not be deleted
     *             successfully.</p>
     */
    Unsuccessful?: UnsuccessfulItem[];
}
export declare namespace DeleteVpcEndpointConnectionNotificationsResult {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: DeleteVpcEndpointConnectionNotificationsResult) => any;
}
/**
 * <p>Contains the parameters for DeleteVpcEndpoints.</p>
 */
export interface DeleteVpcEndpointsRequest {
    /**
     * <p>Checks whether you have the required permissions for the action, without actually making the request,
     *    and provides an error response. If you have the required permissions, the error response is <code>DryRunOperation</code>.
     *    Otherwise, it is <code>UnauthorizedOperation</code>.</p>
     */
    DryRun?: boolean;
    /**
     * <p>One or more VPC endpoint IDs.</p>
     */
    VpcEndpointIds: string[] | undefined;
}
export declare namespace DeleteVpcEndpointsRequest {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: DeleteVpcEndpointsRequest) => any;
}
/**
 * <p>Contains the output of DeleteVpcEndpoints.</p>
 */
export interface DeleteVpcEndpointsResult {
    /**
     * <p>Information about the VPC endpoints that were not successfully deleted.</p>
     */
    Unsuccessful?: UnsuccessfulItem[];
}
export declare namespace DeleteVpcEndpointsResult {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: DeleteVpcEndpointsResult) => any;
}
export interface DeleteVpcEndpointServiceConfigurationsRequest {
    /**
     * <p>Checks whether you have the required permissions for the action, without actually making the request,
     *    and provides an error response. If you have the required permissions, the error response is <code>DryRunOperation</code>.
     *    Otherwise, it is <code>UnauthorizedOperation</code>.</p>
     */
    DryRun?: boolean;
    /**
     * <p>The IDs of one or more services.</p>
     */
    ServiceIds: string[] | undefined;
}
export declare namespace DeleteVpcEndpointServiceConfigurationsRequest {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: DeleteVpcEndpointServiceConfigurationsRequest) => any;
}
export interface DeleteVpcEndpointServiceConfigurationsResult {
    /**
     * <p>Information about the service configurations that were not deleted, if
     *             applicable.</p>
     */
    Unsuccessful?: UnsuccessfulItem[];
}
export declare namespace DeleteVpcEndpointServiceConfigurationsResult {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: DeleteVpcEndpointServiceConfigurationsResult) => any;
}
export interface DeleteVpcPeeringConnectionRequest {
    /**
     * <p>Checks whether you have the required permissions for the action, without actually making the request,
     *    and provides an error response. If you have the required permissions, the error response is <code>DryRunOperation</code>.
     *    Otherwise, it is <code>UnauthorizedOperation</code>.</p>
     */
    DryRun?: boolean;
    /**
     * <p>The ID of the VPC peering connection.</p>
     */
    VpcPeeringConnectionId: string | undefined;
}
export declare namespace DeleteVpcPeeringConnectionRequest {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: DeleteVpcPeeringConnectionRequest) => any;
}
export interface DeleteVpcPeeringConnectionResult {
    /**
     * <p>Returns <code>true</code> if the request succeeds; otherwise, it returns an error.</p>
     */
    Return?: boolean;
}
export declare namespace DeleteVpcPeeringConnectionResult {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: DeleteVpcPeeringConnectionResult) => any;
}
/**
 * <p>Contains the parameters for DeleteVpnConnection.</p>
 */
export interface DeleteVpnConnectionRequest {
    /**
     * <p>The ID of the VPN connection.</p>
     */
    VpnConnectionId: string | undefined;
    /**
     * <p>Checks whether you have the required permissions for the action, without actually making the request,
     *             and provides an error response. If you have the required permissions, the error response is <code>DryRunOperation</code>.
     *             Otherwise, it is <code>UnauthorizedOperation</code>.</p>
     */
    DryRun?: boolean;
}
export declare namespace DeleteVpnConnectionRequest {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: DeleteVpnConnectionRequest) => any;
}
/**
 * <p>Contains the parameters for DeleteVpnConnectionRoute.</p>
 */
export interface DeleteVpnConnectionRouteRequest {
    /**
     * <p>The CIDR block associated with the local subnet of the customer network.</p>
     */
    DestinationCidrBlock: string | undefined;
    /**
     * <p>The ID of the VPN connection.</p>
     */
    VpnConnectionId: string | undefined;
}
export declare namespace DeleteVpnConnectionRouteRequest {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: DeleteVpnConnectionRouteRequest) => any;
}
/**
 * <p>Contains the parameters for DeleteVpnGateway.</p>
 */
export interface DeleteVpnGatewayRequest {
    /**
     * <p>The ID of the virtual private gateway.</p>
     */
    VpnGatewayId: string | undefined;
    /**
     * <p>Checks whether you have the required permissions for the action, without actually making the request,
     *             and provides an error response. If you have the required permissions, the error response is <code>DryRunOperation</code>.
     *             Otherwise, it is <code>UnauthorizedOperation</code>.</p>
     */
    DryRun?: boolean;
}
export declare namespace DeleteVpnGatewayRequest {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: DeleteVpnGatewayRequest) => any;
}
export interface DeprovisionByoipCidrRequest {
    /**
     * <p>The address range, in CIDR notation. The prefix must be the same prefix
     *          that you specified when you provisioned the address range.</p>
     */
    Cidr: string | undefined;
    /**
     * <p>Checks whether you have the required permissions for the action, without actually making the request,
     *    and provides an error response. If you have the required permissions, the error response is <code>DryRunOperation</code>.
     *    Otherwise, it is <code>UnauthorizedOperation</code>.</p>
     */
    DryRun?: boolean;
}
export declare namespace DeprovisionByoipCidrRequest {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: DeprovisionByoipCidrRequest) => any;
}
export interface DeprovisionByoipCidrResult {
    /**
     * <p>Information about the address range.</p>
     */
    ByoipCidr?: ByoipCidr;
}
export declare namespace DeprovisionByoipCidrResult {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: DeprovisionByoipCidrResult) => any;
}
/**
 * <p>Contains the parameters for DeregisterImage.</p>
 */
export interface DeregisterImageRequest {
    /**
     * <p>The ID of the AMI.</p>
     */
    ImageId: string | undefined;
    /**
     * <p>Checks whether you have the required permissions for the action, without actually making the request,
     *        and provides an error response. If you have the required permissions, the error response is <code>DryRunOperation</code>.
     *        Otherwise, it is <code>UnauthorizedOperation</code>.</p>
     */
    DryRun?: boolean;
}
export declare namespace DeregisterImageRequest {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: DeregisterImageRequest) => any;
}
/**
 * <p>Information about the tag keys to deregister for the current Region. You can either specify
 *    		individual tag keys or deregister all tag keys in the current Region. You must specify either
 *    		<code>IncludeAllTagsOfInstance</code> or <code>InstanceTagKeys</code> in the request</p>
 */
export interface DeregisterInstanceTagAttributeRequest {
    /**
     * <p>Indicates whether to deregister all tag keys in the current Region. Specify <code>false</code>
     *    		to deregister all tag keys.</p>
     */
    IncludeAllTagsOfInstance?: boolean;
    /**
     * <p>Information about the tag keys to deregister.</p>
     */
    InstanceTagKeys?: string[];
}
export declare namespace DeregisterInstanceTagAttributeRequest {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: DeregisterInstanceTagAttributeRequest) => any;
}
export interface DeregisterInstanceEventNotificationAttributesRequest {
    /**
     * <p>Checks whether you have the required permissions for the action, without actually making the request,
     *    and provides an error response. If you have the required permissions, the error response is <code>DryRunOperation</code>.
     *    Otherwise, it is <code>UnauthorizedOperation</code>.</p>
     */
    DryRun?: boolean;
    /**
     * <p>Information about the tag keys to deregister.</p>
     */
    InstanceTagAttribute?: DeregisterInstanceTagAttributeRequest;
}
export declare namespace DeregisterInstanceEventNotificationAttributesRequest {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: DeregisterInstanceEventNotificationAttributesRequest) => any;
}
/**
 * <p>Describes the registered tag keys for the current Region.</p>
 */
export interface InstanceTagNotificationAttribute {
    /**
     * <p>The registered tag keys.</p>
     */
    InstanceTagKeys?: string[];
    /**
     * <p>Indicates wheter all tag keys in the current Region are registered to appear in scheduled event notifications.
     *       	<code>true</code> indicates that all tag keys in the current Region are registered.</p>
     */
    IncludeAllTagsOfInstance?: boolean;
}
export declare namespace InstanceTagNotificationAttribute {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: InstanceTagNotificationAttribute) => any;
}
export interface DeregisterInstanceEventNotificationAttributesResult {
    /**
     * <p>The resulting set of tag keys.</p>
     */
    InstanceTagAttribute?: InstanceTagNotificationAttribute;
}
export declare namespace DeregisterInstanceEventNotificationAttributesResult {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: DeregisterInstanceEventNotificationAttributesResult) => any;
}
export interface DeregisterTransitGatewayMulticastGroupMembersRequest {
    /**
     * <p>The ID of the transit gateway multicast domain.</p>
     */
    TransitGatewayMulticastDomainId?: string;
    /**
     * <p>The IP address assigned to the  transit gateway multicast group.</p>
     */
    GroupIpAddress?: string;
    /**
     * <p>The IDs of the group members' network interfaces.</p>
     */
    NetworkInterfaceIds?: string[];
    /**
     * <p>Checks whether you have the required permissions for the action, without actually making the request,
     *    and provides an error response. If you have the required permissions, the error response is <code>DryRunOperation</code>.
     *    Otherwise, it is <code>UnauthorizedOperation</code>.</p>
     */
    DryRun?: boolean;
}
export declare namespace DeregisterTransitGatewayMulticastGroupMembersRequest {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: DeregisterTransitGatewayMulticastGroupMembersRequest) => any;
}
/**
 * <p>Describes the deregistered  transit gateway multicast group members.</p>
 */
export interface TransitGatewayMulticastDeregisteredGroupMembers {
    /**
     * <p>The ID of the transit gateway multicast domain.</p>
     */
    TransitGatewayMulticastDomainId?: string;
    /**
     * <p>The network interface IDs of the deregistered members.</p>
     */
    DeregisteredNetworkInterfaceIds?: string[];
    /**
     * <p>The IP address assigned to the  transit gateway multicast group.</p>
     */
    GroupIpAddress?: string;
}
export declare namespace TransitGatewayMulticastDeregisteredGroupMembers {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: TransitGatewayMulticastDeregisteredGroupMembers) => any;
}
export interface DeregisterTransitGatewayMulticastGroupMembersResult {
    /**
     * <p>Information about the deregistered members.</p>
     */
    DeregisteredMulticastGroupMembers?: TransitGatewayMulticastDeregisteredGroupMembers;
}
export declare namespace DeregisterTransitGatewayMulticastGroupMembersResult {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: DeregisterTransitGatewayMulticastGroupMembersResult) => any;
}
export interface DeregisterTransitGatewayMulticastGroupSourcesRequest {
    /**
     * <p>The ID of the transit gateway multicast domain.</p>
     */
    TransitGatewayMulticastDomainId?: string;
    /**
     * <p>The IP address assigned to the  transit gateway multicast group.</p>
     */
    GroupIpAddress?: string;
    /**
     * <p>The IDs of the group sources' network interfaces.</p>
     */
    NetworkInterfaceIds?: string[];
    /**
     * <p>Checks whether you have the required permissions for the action, without actually making the request,
     *    and provides an error response. If you have the required permissions, the error response is <code>DryRunOperation</code>.
     *    Otherwise, it is <code>UnauthorizedOperation</code>.</p>
     */
    DryRun?: boolean;
}
export declare namespace DeregisterTransitGatewayMulticastGroupSourcesRequest {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: DeregisterTransitGatewayMulticastGroupSourcesRequest) => any;
}
/**
 * <p>Describes the deregistered  transit gateway multicast group sources.</p>
 */
export interface TransitGatewayMulticastDeregisteredGroupSources {
    /**
     * <p>The ID of the transit gateway multicast domain.</p>
     */
    TransitGatewayMulticastDomainId?: string;
    /**
     * <p>The network interface IDs of the non-registered members.</p>
     */
    DeregisteredNetworkInterfaceIds?: string[];
    /**
     * <p>The IP address assigned to the  transit gateway multicast group.</p>
     */
    GroupIpAddress?: string;
}
export declare namespace TransitGatewayMulticastDeregisteredGroupSources {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: TransitGatewayMulticastDeregisteredGroupSources) => any;
}
export interface DeregisterTransitGatewayMulticastGroupSourcesResult {
    /**
     * <p>Information about the deregistered group sources.</p>
     */
    DeregisteredMulticastGroupSources?: TransitGatewayMulticastDeregisteredGroupSources;
}
export declare namespace DeregisterTransitGatewayMulticastGroupSourcesResult {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: DeregisterTransitGatewayMulticastGroupSourcesResult) => any;
}
export interface DescribeAccountAttributesRequest {
    /**
     * <p>The account attribute names.</p>
     */
    AttributeNames?: (AccountAttributeName | string)[];
    /**
     * <p>Checks whether you have the required permissions for the action, without actually making the request,
     *            and provides an error response. If you have the required permissions, the error response is <code>DryRunOperation</code>.
     *            Otherwise, it is <code>UnauthorizedOperation</code>.</p>
     */
    DryRun?: boolean;
}
export declare namespace DescribeAccountAttributesRequest {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: DescribeAccountAttributesRequest) => any;
}
export interface DescribeAccountAttributesResult {
    /**
     * <p>Information about the account attributes.</p>
     */
    AccountAttributes?: AccountAttribute[];
}
export declare namespace DescribeAccountAttributesResult {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: DescribeAccountAttributesResult) => any;
}
/**
 * <p>A filter name and value pair that is used to return a more specific list of results from a describe operation.
 *          Filters can be used to match a set of resources by specific criteria, such as tags, attributes, or IDs.</p>
 */
export interface Filter {
    /**
     * <p>The name of the filter. Filter names are case-sensitive.</p>
     */
    Name?: string;
    /**
     * <p>The filter values. Filter values are case-sensitive.</p>
     */
    Values?: string[];
}
export declare namespace Filter {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: Filter) => any;
}
export interface DescribeAddressesRequest {
    /**
     * <p>One or more filters. Filter names and values are case-sensitive.</p>
     *          <ul>
     *             <li>
     *                <p>
     *                   <code>allocation-id</code> - [EC2-VPC] The allocation ID for the address.</p>
     *             </li>
     *             <li>
     *                <p>
     *                   <code>association-id</code> - [EC2-VPC] The association ID for the address.</p>
     *             </li>
     *             <li>
     *                <p>
     *                   <code>domain</code> - Indicates whether the address is for use in EC2-Classic (<code>standard</code>)
     *               or in a VPC (<code>vpc</code>).</p>
     *             </li>
     *             <li>
     *                <p>
     *                   <code>instance-id</code> - The ID of the instance the address is associated with, if any.</p>
     *             </li>
     *             <li>
     *                <p>
     *                   <code>network-border-group</code> -  A unique set of Availability Zones, Local Zones,
     *           or Wavelength Zones from where AWS advertises IP addresses. </p>
     *             </li>
     *             <li>
     *                <p>
     *                   <code>network-interface-id</code> - [EC2-VPC] The ID of the network interface that the address is associated with, if any.</p>
     *             </li>
     *             <li>
     *                <p>
     *                   <code>network-interface-owner-id</code> - The AWS account ID of the owner.</p>
     *             </li>
     *             <li>
     *                <p>
     *                   <code>private-ip-address</code> - [EC2-VPC] The private IP address associated with the Elastic IP address.</p>
     *             </li>
     *             <li>
     *                <p>
     *                   <code>public-ip</code> - The Elastic IP address, or the carrier IP address.</p>
     *             </li>
     *             <li>
     *                <p>
     *                   <code>tag</code>:<key> - The key/value combination of a tag assigned to the resource. Use the tag key in the filter name and the tag value as the filter value.
     *     For example, to find all resources that have a tag with the key <code>Owner</code> and the value <code>TeamA</code>, specify <code>tag:Owner</code> for the filter name and <code>TeamA</code> for the filter value.</p>
     *             </li>
     *             <li>
     *                <p>
     *                   <code>tag-key</code> - The key of a tag assigned to the resource. Use this filter to find all resources assigned a tag with a specific key, regardless of the tag value.</p>
     *             </li>
     *          </ul>
     */
    Filters?: Filter[];
    /**
     * <p>One or more Elastic IP addresses.</p>
     *          <p>Default: Describes all your Elastic IP addresses.</p>
     */
    PublicIps?: string[];
    /**
     * <p>[EC2-VPC] Information about the allocation IDs.</p>
     */
    AllocationIds?: string[];
    /**
     * <p>Checks whether you have the required permissions for the action, without actually making the request,
     *    and provides an error response. If you have the required permissions, the error response is <code>DryRunOperation</code>.
     *    Otherwise, it is <code>UnauthorizedOperation</code>.</p>
     */
    DryRun?: boolean;
}
export declare namespace DescribeAddressesRequest {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: DescribeAddressesRequest) => any;
}
export interface DescribeAddressesResult {
    /**
     * <p>Information about the Elastic IP addresses.</p>
     */
    Addresses?: Address[];
}
export declare namespace DescribeAddressesResult {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: DescribeAddressesResult) => any;
}
export interface DescribeAddressesAttributeRequest {
    /**
     * <p>[EC2-VPC] The allocation IDs.</p>
     */
    AllocationIds?: string[];
    /**
     * <p>The attribute of the IP address.</p>
     */
    Attribute?: AddressAttributeName | string;
    /**
     * <p>The token for the next page of results.</p>
     */
    NextToken?: string;
    /**
     * <p>The maximum number of results to return with a single call. To retrieve the remaining results, make another call with the returned <code>nextToken</code> value.</p>
     */
    MaxResults?: number;
    /**
     * <p>Checks whether you have the required permissions for the action, without actually making the request,
     *    and provides an error response. If you have the required permissions, the error response is <code>DryRunOperation</code>.
     *    Otherwise, it is <code>UnauthorizedOperation</code>.</p>
     */
    DryRun?: boolean;
}
export declare namespace DescribeAddressesAttributeRequest {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: DescribeAddressesAttributeRequest) => any;
}
export interface DescribeAddressesAttributeResult {
    /**
     * <p>Information about the IP addresses.</p>
     */
    Addresses?: AddressAttribute[];
    /**
     * <p>The token to use to retrieve the next page of results. This value is <code>null</code> when there are no more results to return.</p>
     */
    NextToken?: string;
}
export declare namespace DescribeAddressesAttributeResult {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: DescribeAddressesAttributeResult) => any;
}
export interface DescribeAggregateIdFormatRequest {
    /**
     * <p>Checks whether you have the required permissions for the action, without actually making the request,
     *    and provides an error response. If you have the required permissions, the error response is <code>DryRunOperation</code>.
     *    Otherwise, it is <code>UnauthorizedOperation</code>.</p>
     */
    DryRun?: boolean;
}
export declare namespace DescribeAggregateIdFormatRequest {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: DescribeAggregateIdFormatRequest) => any;
}
/**
 * <p>Describes the ID format for a resource.</p>
 */
export interface IdFormat {
    /**
     * <p>The date in UTC at which you are permanently switched over to using longer IDs. If a deadline is not yet available for this resource type, this field is not returned.</p>
     */
    Deadline?: Date;
    /**
     * <p>The type of resource.</p>
     */
    Resource?: string;
    /**
     * <p>Indicates whether longer IDs (17-character IDs) are enabled for the resource.</p>
     */
    UseLongIds?: boolean;
}
export declare namespace IdFormat {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: IdFormat) => any;
}
export interface DescribeAggregateIdFormatResult {
    /**
     * <p>Indicates whether all resource types in the Region are configured to use longer IDs.
     *             This value is only <code>true</code> if all users are configured to use longer IDs for
     *             all resources types in the Region.</p>
     */
    UseLongIdsAggregated?: boolean;
    /**
     * <p>Information about each resource's ID format.</p>
     */
    Statuses?: IdFormat[];
}
export declare namespace DescribeAggregateIdFormatResult {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: DescribeAggregateIdFormatResult) => any;
}
export interface DescribeAvailabilityZonesRequest {
    /**
     * <p>The filters.</p>
     *          <ul>
     *             <li>
     *                <p>
     *                   <code>group-name</code> - For Availability Zones, use the Region name. For Local
     *           Zones, use the name of the group associated with the Local Zone (for example,
     *             <code>us-west-2-lax-1</code>) For Wavelength Zones, use the name of the group associated
     *           with the Wavelength Zone (for example, <code>us-east-1-wl1-bos-wlz-1</code>).</p>
     *             </li>
     *             <li>
     *                <p>
     *                   <code>message</code> - The Zone message.</p>
     *             </li>
     *             <li>
     *                <p>
     *                   <code>opt-in-status</code> - The opt-in status (<code>opted-in</code>, and
     *             <code>not-opted-in</code> | <code>opt-in-not-required</code>).</p>
     *             </li>
     *             <li>
     *                <p>
     *                   <code>parent-zoneID</code> - The ID of the zone that handles some of the Local Zone
     *           and Wavelength Zone control plane operations, such as API calls.</p>
     *             </li>
     *             <li>
     *                <p>
     *                   <code>parent-zoneName</code> - The ID of the zone that handles some of the Local Zone
     *           and Wavelength Zone control plane operations, such as API calls.</p>
     *             </li>
     *             <li>
     *                <p>
     *                   <code>region-name</code> - The name of the Region for the Zone (for example,
     *             <code>us-east-1</code>).</p>
     *             </li>
     *             <li>
     *                <p>
     *                   <code>state</code> - The state of the Availability Zone, the Local Zone, or the
     *           Wavelength Zone (<code>available</code> | <code>information</code> | <code>impaired</code>
     *           | <code>unavailable</code>).</p>
     *             </li>
     *             <li>
     *                <p>
     *                   <code>zone-id</code> - The ID of the Availability Zone (for example,
     *             <code>use1-az1</code>), the Local Zone (for example, <code>usw2-lax1-az1</code>), or the
     *           Wavelength Zone (for example, <code>us-east-1-wl1-bos-wlz-1</code>).</p>
     *             </li>
     *             <li>
     *                <p>
     *                   <code>zone-type</code> - The type of zone, for example, <code>local-zone</code>.</p>
     *             </li>
     *             <li>
     *                <p>
     *                   <code>zone-name</code> - The name of the Availability Zone (for example,
     *             <code>us-east-1a</code>), the Local Zone (for example, <code>us-west-2-lax-1a</code>), or
     *           the Wavelength Zone (for example, <code>us-east-1-wl1-bos-wlz-1</code>).</p>
     *             </li>
     *             <li>
     *                <p>
     *                   <code>zone-type</code> - The type of zone, for example, <code>local-zone</code>.</p>
     *             </li>
     *          </ul>
     */
    Filters?: Filter[];
    /**
     * <p>The names of the Availability Zones, Local Zones, and Wavelength Zones.</p>
     */
    ZoneNames?: string[];
    /**
     * <p>The IDs of the Availability Zones, Local Zones, and Wavelength Zones.</p>
     */
    ZoneIds?: string[];
    /**
     * <p>Include all Availability Zones, Local Zones, and Wavelength Zones regardless of your
     *       opt-in status.</p>
     *          <p>If you do not use this parameter, the results include only the zones for the Regions where you have chosen the option to opt in.</p>
     */
    AllAvailabilityZones?: boolean;
    /**
     * <p>Checks whether you have the required permissions for the action, without actually making the request,
     *    and provides an error response. If you have the required permissions, the error response is <code>DryRunOperation</code>.
     *    Otherwise, it is <code>UnauthorizedOperation</code>.</p>
     */
    DryRun?: boolean;
}
export declare namespace DescribeAvailabilityZonesRequest {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: DescribeAvailabilityZonesRequest) => any;
}
/**
 * <p>Describes a message about an Availability Zone, Local Zone, or Wavelength Zone.</p>
 */
export interface AvailabilityZoneMessage {
    /**
     * <p>The message about the Availability Zone, Local Zone, or Wavelength Zone.</p>
     */
    Message?: string;
}
export declare namespace AvailabilityZoneMessage {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: AvailabilityZoneMessage) => any;
}
export declare type AvailabilityZoneOptInStatus = "not-opted-in" | "opt-in-not-required" | "opted-in";
export declare type AvailabilityZoneState = "available" | "impaired" | "information" | "unavailable";
/**
 * <p>Describes Availability Zones, Local Zones, and Wavelength Zones.</p>
 */
export interface AvailabilityZone {
    /**
     * <p>The state of the Availability Zone, Local Zone, or Wavelength Zone.</p>
     */
    State?: AvailabilityZoneState | string;
    /**
     * <p>For Availability Zones, this parameter always has the value of
     *         <code>opt-in-not-required</code>.</p>
     *          <p>For Local Zones and Wavelength Zones, this parameter is the opt-in status. The possible
     *       values are <code>opted-in</code>, and <code>not-opted-in</code>.</p>
     */
    OptInStatus?: AvailabilityZoneOptInStatus | string;
    /**
     * <p>Any messages about the Availability Zone, Local Zone, or Wavelength Zone.</p>
     */
    Messages?: AvailabilityZoneMessage[];
    /**
     * <p>The name of the Region.</p>
     */
    RegionName?: string;
    /**
     * <p>The name of the Availability Zone, Local Zone, or Wavelength Zone.</p>
     */
    ZoneName?: string;
    /**
     * <p>The ID of the Availability Zone, Local Zone, or Wavelength Zone.</p>
     */
    ZoneId?: string;
    /**
     * <p> For Availability Zones, this parameter has the same value as the Region name.</p>
     *          <p>For Local Zones, the name of the associated group, for example
     *         <code>us-west-2-lax-1</code>.</p>
     *          <p>For Wavelength Zones, the name of the associated group, for example
     *         <code>us-east-1-wl1-bos-wlz-1</code>.</p>
     */
    GroupName?: string;
    /**
     * <p>The name of the network border group.</p>
     */
    NetworkBorderGroup?: string;
    /**
     * <p>The type of zone. The valid values are <code>availability-zone</code>,
     *         <code>local-zone</code>, and <code>wavelength-zone</code>.</p>
     */
    ZoneType?: string;
    /**
     * <p>The name of the zone that handles some of the Local Zone or Wavelength Zone control plane
     *       operations, such as API calls.</p>
     */
    ParentZoneName?: string;
    /**
     * <p>The ID of the zone that handles some of the Local Zone or Wavelength Zone control plane
     *       operations, such as API calls.</p>
     */
    ParentZoneId?: string;
}
export declare namespace AvailabilityZone {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: AvailabilityZone) => any;
}
export interface DescribeAvailabilityZonesResult {
    /**
     * <p>Information about the Availability Zones, Local Zones, and Wavelength Zones.</p>
     */
    AvailabilityZones?: AvailabilityZone[];
}
export declare namespace DescribeAvailabilityZonesResult {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: DescribeAvailabilityZonesResult) => any;
}
export interface DescribeBundleTasksRequest {
    /**
     * <p>The bundle task IDs.</p>
     *          <p>Default: Describes all your bundle tasks.</p>
     */
    BundleIds?: string[];
    /**
     * <p>The filters.</p>
     *          <ul>
     *             <li>
     *                <p>
     *                   <code>bundle-id</code> - The ID of the bundle task.</p>
     *             </li>
     *             <li>
     *                <p>
     *                   <code>error-code</code> - If the task failed, the error code returned.</p>
     *             </li>
     *             <li>
     *                <p>
     *                   <code>error-message</code> - If the task failed, the error message returned.</p>
     *             </li>
     *             <li>
     *                <p>
     *                   <code>instance-id</code> - The ID of the instance.</p>
     *             </li>
     *             <li>
     *                <p>
     *                   <code>progress</code> - The level of task completion, as a percentage (for example, 20%).</p>
     *             </li>
     *             <li>
     *                <p>
     *                   <code>s3-bucket</code> - The Amazon S3 bucket to store the AMI.</p>
     *             </li>
     *             <li>
     *                <p>
     *                   <code>s3-prefix</code> - The beginning of the AMI name.</p>
     *             </li>
     *             <li>
     *                <p>
     *                   <code>start-time</code> - The time the task started (for example, 2013-09-15T17:15:20.000Z).</p>
     *             </li>
     *             <li>
     *                <p>
     *                   <code>state</code> - The state of the task (<code>pending</code> | <code>waiting-for-shutdown</code> | <code>bundling</code> |
     *            <code>storing</code> | <code>cancelling</code> | <code>complete</code> | <code>failed</code>).</p>
     *             </li>
     *             <li>
     *                <p>
     *                   <code>update-time</code> - The time of the most recent update for the task.</p>
     *             </li>
     *          </ul>
     */
    Filters?: Filter[];
    /**
     * <p>Checks whether you have the required permissions for the action, without actually making the request,
     *        and provides an error response. If you have the required permissions, the error response is <code>DryRunOperation</code>.
     *        Otherwise, it is <code>UnauthorizedOperation</code>.</p>
     */
    DryRun?: boolean;
}
export declare namespace DescribeBundleTasksRequest {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: DescribeBundleTasksRequest) => any;
}
export interface DescribeBundleTasksResult {
    /**
     * <p>Information about the bundle tasks.</p>
     */
    BundleTasks?: BundleTask[];
}
export declare namespace DescribeBundleTasksResult {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: DescribeBundleTasksResult) => any;
}
export interface DescribeByoipCidrsRequest {
    /**
     * <p>Checks whether you have the required permissions for the action, without actually making the request,
     *    and provides an error response. If you have the required permissions, the error response is <code>DryRunOperation</code>.
     *    Otherwise, it is <code>UnauthorizedOperation</code>.</p>
     */
    DryRun?: boolean;
    /**
     * <p>The maximum number of results to return with a single call.
     * 	To retrieve the remaining results, make another call with the returned <code>nextToken</code> value.</p>
     */
    MaxResults: number | undefined;
    /**
     * <p>The token for the next page of results.</p>
     */
    NextToken?: string;
}
export declare namespace DescribeByoipCidrsRequest {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: DescribeByoipCidrsRequest) => any;
}
export interface DescribeByoipCidrsResult {
    /**
     * <p>Information about your address ranges.</p>
     */
    ByoipCidrs?: ByoipCidr[];
    /**
     * <p>The token to use to retrieve the next page of results. This value is <code>null</code> when there are no more results to return.</p>
     */
    NextToken?: string;
}
export declare namespace DescribeByoipCidrsResult {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: DescribeByoipCidrsResult) => any;
}
export interface DescribeCapacityReservationsRequest {
    /**
     * <p>The ID of the Capacity Reservation.</p>
     */
    CapacityReservationIds?: string[];
    /**
     * <p>The token to use to retrieve the next page of results.</p>
     */
    NextToken?: string;
    /**
     * <p>The maximum number of results to return for the request in a single page. The remaining results can be seen by sending another request with the returned <code>nextToken</code> value. This value can be between 5 and 500. If <code>maxResults</code> is given a larger value than 500, you receive an error.</p>
     */
    MaxResults?: number;
    /**
     * <p>One or more filters.</p>
     * 	  	     <ul>
     *             <li>
     *                <p>
     *                   <code>instance-type</code> - The type of instance for which the Capacity Reservation reserves capacity.</p>
     *             </li>
     *             <li>
     *                <p>
     *                   <code>owner-id</code> - The ID of the AWS account that owns the Capacity Reservation.</p>
     *             </li>
     *             <li>
     *                <p>
     *                   <code>availability-zone-id</code> - The Availability Zone ID of the Capacity Reservation.</p>
     *             </li>
     *             <li>
     *                <p>
     *                   <code>instance-platform</code> - The type of operating system for which the Capacity Reservation reserves capacity.</p>
     *             </li>
     *             <li>
     *                <p>
     *                   <code>availability-zone</code> - The Availability Zone ID of the Capacity Reservation.</p>
     *             </li>
     *             <li>
     *                <p>
     *                   <code>tenancy</code> - Indicates the tenancy of the Capacity Reservation. A Capacity Reservation can have one of the
     * 	  			following tenancy settings:</p>
     * 	  			         <ul>
     *                   <li>
     *                      <p>
     *                         <code>default</code> - The Capacity Reservation is created on hardware that is shared with other AWS accounts.</p>
     *                   </li>
     *                   <li>
     *                      <p>
     *                         <code>dedicated</code> - The Capacity Reservation is created on single-tenant hardware that is dedicated to a single AWS account.</p>
     *                   </li>
     *                </ul>
     * 	  			      </li>
     *             <li>
     *                <p>
     *                   <code>outpost-arn</code> - The Amazon Resource Name (ARN) of the Outpost on which the Capacity Reservation was created.</p>
     *             </li>
     *             <li>
     *                <p>
     *                   <code>state</code> - The current state of the Capacity Reservation. A Capacity Reservation can be in one of the following states:</p>
     * 	  		          <ul>
     *                   <li>
     *                      <p>
     *                         <code>active</code>- The Capacity Reservation is active and the capacity is available for your use.</p>
     *                   </li>
     *                   <li>
     *                      <p>
     *                         <code>expired</code> - The Capacity Reservation expired automatically at the date and time specified in your request.
     * 	  				The reserved capacity is no longer available for your use.</p>
     *                   </li>
     *                   <li>
     *                      <p>
     *                         <code>cancelled</code> - The Capacity Reservation was cancelled. The reserved capacity is no longer available for your use.</p>
     *                   </li>
     *                   <li>
     *                      <p>
     *                         <code>pending</code> - The Capacity Reservation request was successful but the capacity provisioning is still pending.</p>
     *                   </li>
     *                   <li>
     *                      <p>
     *                         <code>failed</code> - The Capacity Reservation request has failed. A request might fail due to invalid request parameters,
     * 	  				capacity constraints, or instance limit constraints. Failed requests are retained for 60 minutes.</p>
     * 	  		             </li>
     *                </ul>
     * 	  		       </li>
     *             <li>
     *                <p>
     *                   <code>start-date</code> - The date and time at which the Capacity Reservation was started.</p>
     *             </li>
     *             <li>
     *                <p>
     *                   <code>end-date</code> - The date and time at which the Capacity Reservation expires. When a Capacity Reservation expires, the reserved capacity is
     * 	  			released and you can no longer launch instances into it. The Capacity Reservation's state changes to expired when it reaches its end date and time.</p>
     *             </li>
     *             <li>
     *                <p>
     *                   <code>end-date-type</code> - Indicates the way in which the Capacity Reservation ends. A Capacity Reservation can have one of the following end types:</p>
     * 	  		          <ul>
     *                   <li>
     *                      <p>
     *                         <code>unlimited</code> - The Capacity Reservation remains active until you explicitly cancel it.</p>
     *                   </li>
     *                   <li>
     *                      <p>
     *                         <code>limited</code> - The Capacity Reservation expires automatically at a specified date and time.</p>
     *                   </li>
     *                </ul>
     * 	  		       </li>
     *             <li>
     *                <p>
     *                   <code>instance-match-criteria</code> - Indicates the type of instance launches that the Capacity Reservation accepts. The options include:</p>
     * 	  			         <ul>
     *                   <li>
     *                      <p>
     *                         <code>open</code> - The Capacity Reservation accepts all instances that have matching
     * 							attributes (instance type, platform, and Availability Zone). Instances
     * 							that have matching attributes launch into the Capacity Reservation
     * 							automatically without specifying any additional parameters.</p>
     *                   </li>
     *                   <li>
     *                      <p>
     *                         <code>targeted</code> - The Capacity Reservation only accepts instances that have matching
     * 							attributes (instance type, platform, and Availability Zone), and
     * 							explicitly target the Capacity Reservation. This ensures that only
     * 							permitted instances can use the reserved capacity.</p>
     *                   </li>
     *                </ul>
     * 	  		       </li>
     *          </ul>
     */
    Filters?: Filter[];
    /**
     * <p>Checks whether you have the required permissions for the action, without actually making the request, and provides an error response. If you have the required permissions, the error response is <code>DryRunOperation</code>. Otherwise, it is <code>UnauthorizedOperation</code>.</p>
     */
    DryRun?: boolean;
}
export declare namespace DescribeCapacityReservationsRequest {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: DescribeCapacityReservationsRequest) => any;
}
export interface DescribeCapacityReservationsResult {
    /**
     * <p>The token to use to retrieve the next page of results. This value is <code>null</code> when there are no more results to return.</p>
     */
    NextToken?: string;
    /**
     * <p>Information about the Capacity Reservations.</p>
     */
    CapacityReservations?: CapacityReservation[];
}
export declare namespace DescribeCapacityReservationsResult {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: DescribeCapacityReservationsResult) => any;
}
export interface DescribeCarrierGatewaysRequest {
    /**
     * <p>One or more carrier gateway IDs.</p>
     */
    CarrierGatewayIds?: string[];
    /**
     * <p>One or more filters.</p>
     *         <ul>
     *             <li>
     *                 <p>
     *                   <code>carrier-gateway-id</code> - The ID of the carrier gateway.</p>
     *             </li>
     *             <li>
     *                 <p>
     *                   <code>state</code> - The state of the carrier gateway (<code>pending</code> |
     *                     <code>failed</code> | <code>available</code> | <code>deleting</code> | <code>deleted</code>).</p>
     *             </li>
     *             <li>
     *                 <p>
     *                   <code>owner-id</code> - The AWS account ID of the owner of the carrier gateway.</p>
     *             </li>
     *             <li>
     *                 <p>
     *                   <code>tag</code>:<key> - The key/value combination of a tag assigned to the resource. Use the tag key in the filter name and the tag value as the filter value.
     *     For example, to find all resources that have a tag with the key <code>Owner</code> and the value <code>TeamA</code>, specify <code>tag:Owner</code> for the filter name and <code>TeamA</code> for the filter value.</p>
     *             </li>
     *             <li>
     *                 <p>
     *                   <code>tag-key</code> - The key of a tag assigned to the resource. Use this filter to find all resources assigned a tag with a specific key, regardless of the tag value.</p>
     *             </li>
     *             <li>
     *                 <p>
     *                   <code>vpc-id</code> - The ID of the VPC associated with the carrier gateway.</p>
     *             </li>
     *          </ul>
     */
    Filters?: Filter[];
    /**
     * <p>The maximum number of results to return with a single call.
     * 	To retrieve the remaining results, make another call with the returned <code>nextToken</code> value.</p>
     */
    MaxResults?: number;
    /**
     * <p>The token for the next page of results.</p>
     */
    NextToken?: string;
    /**
     * <p>Checks whether you have the required permissions for the action, without actually making the request,
     *    and provides an error response. If you have the required permissions, the error response is <code>DryRunOperation</code>.
     *    Otherwise, it is <code>UnauthorizedOperation</code>.</p>
     */
    DryRun?: boolean;
}
export declare namespace DescribeCarrierGatewaysRequest {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: DescribeCarrierGatewaysRequest) => any;
}
export interface DescribeCarrierGatewaysResult {
    /**
     * <p>Information about the carrier gateway.</p>
     */
    CarrierGateways?: CarrierGateway[];
    /**
     * <p>The token to use to retrieve the next page of results. This value is <code>null</code> when there are no more results to return.</p>
     */
    NextToken?: string;
}
export declare namespace DescribeCarrierGatewaysResult {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: DescribeCarrierGatewaysResult) => any;
}
export interface DescribeClassicLinkInstancesRequest {
    /**
     * <p>One or more filters.</p>
     * 		       <ul>
     *             <li>
     *                       <p>
     *                   <code>group-id</code> - The ID of a VPC security group that's associated with the instance.</p>
     *                   </li>
     *             <li>
     * 				           <p>
     *                   <code>instance-id</code> - The ID of the instance.</p>
     * 			         </li>
     *             <li>
     * 			            <p>
     *                   <code>tag</code>:<key> - The key/value combination of a tag assigned to the resource. Use the tag key in the filter name and the tag value as the filter value.
     *     For example, to find all resources that have a tag with the key <code>Owner</code> and the value <code>TeamA</code>, specify <code>tag:Owner</code> for the filter name and <code>TeamA</code> for the filter value.</p>
     * 			         </li>
     *             <li>
     * 				           <p>
     *                   <code>tag-key</code> - The key of a tag assigned to the resource. Use this filter to find all resources assigned a tag with a specific key, regardless of the tag value.</p>
     * 			         </li>
     *             <li>
     *
     * 				           <p>
     * 					             <code>vpc-id</code> - The ID of the VPC to which the instance is
     * 					linked.</p>
     *
     * 				           <p>
     *                   <code>vpc-id</code> - The ID of the VPC that the instance is linked to.</p>
     *
     * 			         </li>
     *          </ul>
     */
    Filters?: Filter[];
    /**
     * <p>Checks whether you have the required permissions for the action, without actually making the request,
     *    and provides an error response. If you have the required permissions, the error response is <code>DryRunOperation</code>.
     *    Otherwise, it is <code>UnauthorizedOperation</code>.</p>
     */
    DryRun?: boolean;
    /**
     * <p>One or more instance IDs. Must be instances linked to a VPC through ClassicLink.</p>
     */
    InstanceIds?: string[];
    /**
     * <p>The maximum number of results to return with a single call.
     * 	To retrieve the remaining results, make another call with the returned <code>nextToken</code> value.</p>
     * 		       <p>Constraint: If the value is greater than 1000, we return only 1000 items.</p>
     */
    MaxResults?: number;
    /**
     * <p>The token for the next page of results.</p>
     */
    NextToken?: string;
}
export declare namespace DescribeClassicLinkInstancesRequest {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: DescribeClassicLinkInstancesRequest) => any;
}
/**
 * <p>Describes a linked EC2-Classic instance.</p>
 */
export interface ClassicLinkInstance {
    /**
     * <p>A list of security groups.</p>
     */
    Groups?: GroupIdentifier[];
    /**
     * <p>The ID of the instance.</p>
     */
    InstanceId?: string;
    /**
     * <p>Any tags assigned to the instance.</p>
     */
    Tags?: Tag[];
    /**
     * <p>The ID of the VPC.</p>
     */
    VpcId?: string;
}
export declare namespace ClassicLinkInstance {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: ClassicLinkInstance) => any;
}
export interface DescribeClassicLinkInstancesResult {
    /**
     * <p>Information about one or more linked EC2-Classic instances.</p>
     */
    Instances?: ClassicLinkInstance[];
    /**
     * <p>The token to use to retrieve the next page of results. This value is <code>null</code> when there are no more results to return.</p>
     */
    NextToken?: string;
}
export declare namespace DescribeClassicLinkInstancesResult {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: DescribeClassicLinkInstancesResult) => any;
}
export interface DescribeClientVpnAuthorizationRulesRequest {
    /**
     * <p>The ID of the Client VPN endpoint.</p>
     */
    ClientVpnEndpointId: string | undefined;
    /**
     * <p>Checks whether you have the required permissions for the action, without actually making the request, and provides an error response. If you have the required permissions, the error response is <code>DryRunOperation</code>. Otherwise, it is <code>UnauthorizedOperation</code>.</p>
     */
    DryRun?: boolean;
    /**
     * <p>The token to retrieve the next page of results.</p>
     */
    NextToken?: string;
    /**
     * <p>One or more filters. Filter names and values are case-sensitive.</p>
     * 	        <ul>
     *             <li>
     *                <p>
     *                   <code>description</code> - The description of the authorization rule.</p>
     *             </li>
     *             <li>
     *                <p>
     *                   <code>destination-cidr</code> - The CIDR of the network to which the authorization rule
     *                     applies.</p>
     *             </li>
     *             <li>
     *                <p>
     *                   <code>group-id</code> - The ID of the Active Directory group to which the authorization rule grants access.</p>
     *             </li>
     *          </ul>
     */
    Filters?: Filter[];
    /**
     * <p>The maximum number of results to return for the request in a single page. The remaining results can be seen by sending another request with the nextToken value.</p>
     */
    MaxResults?: number;
}
export declare namespace DescribeClientVpnAuthorizationRulesRequest {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: DescribeClientVpnAuthorizationRulesRequest) => any;
}
/**
 * <p>Information about an authorization rule.</p>
 */
export interface AuthorizationRule {
    /**
     * <p>The ID of the Client VPN endpoint with which the authorization rule is associated.</p>
     */
    ClientVpnEndpointId?: string;
    /**
     * <p>A brief description of the authorization rule.</p>
     */
    Description?: string;
    /**
     * <p>The ID of the Active Directory group to which the authorization rule grants access.</p>
     */
    GroupId?: string;
    /**
     * <p>Indicates whether the authorization rule grants access to all clients.</p>
     */
    AccessAll?: boolean;
    /**
     * <p>The IPv4 address range, in CIDR notation, of the network to which the authorization rule applies.</p>
     */
    DestinationCidr?: string;
    /**
     * <p>The current state of the authorization rule.</p>
     */
    Status?: ClientVpnAuthorizationRuleStatus;
}
export declare namespace AuthorizationRule {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: AuthorizationRule) => any;
}
export interface DescribeClientVpnAuthorizationRulesResult {
    /**
     * <p>Information about the authorization rules.</p>
     */
    AuthorizationRules?: AuthorizationRule[];
    /**
     * <p>The token to use to retrieve the next page of results. This value is <code>null</code> when there are no more results to return.</p>
     */
    NextToken?: string;
}
export declare namespace DescribeClientVpnAuthorizationRulesResult {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: DescribeClientVpnAuthorizationRulesResult) => any;
}
export interface DescribeClientVpnConnectionsRequest {
    /**
     * <p>The ID of the Client VPN endpoint.</p>
     */
    ClientVpnEndpointId: string | undefined;
    /**
     * <p>One or more filters. Filter names and values are case-sensitive.</p>
     * 	        <ul>
     *             <li>
     *                <p>
     *                   <code>connection-id</code> - The ID of the connection.</p>
     *             </li>
     *             <li>
     *                <p>
     *                   <code>username</code> - For Active Directory client authentication, the user name of the
     *                     client who established the client connection.</p>
     *             </li>
     *          </ul>
     */
    Filters?: Filter[];
    /**
     * <p>The token to retrieve the next page of results.</p>
     */
    NextToken?: string;
    /**
     * <p>The maximum number of results to return for the request in a single page. The remaining results can be seen by sending another request with the nextToken value.</p>
     */
    MaxResults?: number;
    /**
     * <p>Checks whether you have the required permissions for the action, without actually making the request, and provides an error response. If you have the required permissions, the error response is <code>DryRunOperation</code>. Otherwise, it is <code>UnauthorizedOperation</code>.</p>
     */
    DryRun?: boolean;
}
export declare namespace DescribeClientVpnConnectionsRequest {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: DescribeClientVpnConnectionsRequest) => any;
}
export declare type ClientVpnConnectionStatusCode = "active" | "failed-to-terminate" | "terminated" | "terminating";
/**
 * <p>Describes the status of a client connection.</p>
 */
export interface ClientVpnConnectionStatus {
    /**
     * <p>The state of the client connection.</p>
     */
    Code?: ClientVpnConnectionStatusCode | string;
    /**
     * <p>A message about the status of the client connection, if applicable.</p>
     */
    Message?: string;
}
export declare namespace ClientVpnConnectionStatus {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: ClientVpnConnectionStatus) => any;
}
/**
 * <p>Describes a client connection.</p>
 */
export interface ClientVpnConnection {
    /**
     * <p>The ID of the Client VPN endpoint to which the client is connected.</p>
     */
    ClientVpnEndpointId?: string;
    /**
     * <p>The current date and time.</p>
     */
    Timestamp?: string;
    /**
     * <p>The ID of the client connection.</p>
     */
    ConnectionId?: string;
    /**
     * <p>The username of the client who established the client connection. This information is only provided
     * 			if Active Directory client authentication is used.</p>
     */
    Username?: string;
    /**
     * <p>The date and time the client connection was established.</p>
     */
    ConnectionEstablishedTime?: string;
    /**
     * <p>The number of bytes sent by the client.</p>
     */
    IngressBytes?: string;
    /**
     * <p>The number of bytes received by the client.</p>
     */
    EgressBytes?: string;
    /**
     * <p>The number of packets sent by the client.</p>
     */
    IngressPackets?: string;
    /**
     * <p>The number of packets received by the client.</p>
     */
    EgressPackets?: string;
    /**
     * <p>The IP address of the client.</p>
     */
    ClientIp?: string;
    /**
     * <p>The common name associated with the client. This is either the name of the client certificate,
     * 			or the Active Directory user name.</p>
     */
    CommonName?: string;
    /**
     * <p>The current state of the client connection.</p>
     */
    Status?: ClientVpnConnectionStatus;
    /**
     * <p>The date and time the client connection was terminated.</p>
     */
    ConnectionEndTime?: string;
    /**
     * <p>The statuses returned by the client connect handler for posture compliance, if applicable.</p>
     */
    PostureComplianceStatuses?: string[];
}
export declare namespace ClientVpnConnection {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: ClientVpnConnection) => any;
}
export interface DescribeClientVpnConnectionsResult {
    /**
     * <p>Information about the active and terminated client connections.</p>
     */
    Connections?: ClientVpnConnection[];
    /**
     * <p>The token to use to retrieve the next page of results. This value is <code>null</code> when there are no more results to return.</p>
     */
    NextToken?: string;
}
export declare namespace DescribeClientVpnConnectionsResult {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: DescribeClientVpnConnectionsResult) => any;
}
export interface DescribeClientVpnEndpointsRequest {
    /**
     * <p>The ID of the Client VPN endpoint.</p>
     */
    ClientVpnEndpointIds?: string[];
    /**
     * <p>The maximum number of results to return for the request in a single page. The remaining results can be seen by sending another request with the nextToken value.</p>
     */
    MaxResults?: number;
    /**
     * <p>The token to retrieve the next page of results.</p>
     */
    NextToken?: string;
    /**
     * <p>One or more filters. Filter names and values are case-sensitive.</p>
     * 	        <ul>
     *             <li>
     *                <p>
     *                   <code>endpoint-id</code> - The ID of the Client VPN endpoint.</p>
     *             </li>
     *             <li>
     *                <p>
     *                   <code>transport-protocol</code> - The transport protocol (<code>tcp</code> |
     *                     <code>udp</code>).</p>
     *             </li>
     *          </ul>
     */
    Filters?: Filter[];
    /**
     * <p>Checks whether you have the required permissions for the action, without actually making the request, and provides an error response. If you have the required permissions, the error response is <code>DryRunOperation</code>. Otherwise, it is <code>UnauthorizedOperation</code>.</p>
     */
    DryRun?: boolean;
}
export declare namespace DescribeClientVpnEndpointsRequest {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: DescribeClientVpnEndpointsRequest) => any;
}
export declare type AssociatedNetworkType = "vpc";
/**
 * <p>Describes a target network that is associated with a Client VPN endpoint. A target network is a subnet in a VPC.</p>
 */
export interface AssociatedTargetNetwork {
    /**
     * <p>The ID of the subnet.</p>
     */
    NetworkId?: string;
    /**
     * <p>The target network type.</p>
     */
    NetworkType?: AssociatedNetworkType | string;
}
export declare namespace AssociatedTargetNetwork {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: AssociatedTargetNetwork) => any;
}
/**
 * <p>Describes an Active Directory.</p>
 */
export interface DirectoryServiceAuthentication {
    /**
     * <p>The ID of the Active Directory used for authentication.</p>
     */
    DirectoryId?: string;
}
export declare namespace DirectoryServiceAuthentication {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: DirectoryServiceAuthentication) => any;
}
/**
 * <p>Describes the IAM SAML identity providers used for federated authentication.</p>
 */
export interface FederatedAuthentication {
    /**
     * <p>The Amazon Resource Name (ARN) of the IAM SAML identity provider.</p>
     */
    SamlProviderArn?: string;
    /**
     * <p>The Amazon Resource Name (ARN) of the IAM SAML identity provider for the self-service portal.</p>
     */
    SelfServiceSamlProviderArn?: string;
}
export declare namespace FederatedAuthentication {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: FederatedAuthentication) => any;
}
/**
 * <p>Information about the client certificate used for authentication.</p>
 */
export interface CertificateAuthentication {
    /**
     * <p>The ARN of the client certificate. </p>
     */
    ClientRootCertificateChain?: string;
}
export declare namespace CertificateAuthentication {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: CertificateAuthentication) => any;
}
/**
 * <p>Describes the authentication methods used by a Client VPN endpoint. For more information, see <a href="https://docs.aws.amazon.com/vpn/latest/clientvpn-admin/client-authentication.html">Authentication</a>
 * 			in the <i>AWS Client VPN Administrator Guide</i>.</p>
 */
export interface ClientVpnAuthentication {
    /**
     * <p>The authentication type used.</p>
     */
    Type?: ClientVpnAuthenticationType | string;
    /**
     * <p>Information about the Active Directory, if applicable.</p>
     */
    ActiveDirectory?: DirectoryServiceAuthentication;
    /**
     * <p>Information about the authentication certificates, if applicable.</p>
     */
    MutualAuthentication?: CertificateAuthentication;
    /**
     * <p>Information about the IAM SAML identity provider, if applicable.</p>
     */
    FederatedAuthentication?: FederatedAuthentication;
}
export declare namespace ClientVpnAuthentication {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: ClientVpnAuthentication) => any;
}
export declare type ClientVpnEndpointAttributeStatusCode = "applied" | "applying";
/**
 * <p>Describes the status of the Client VPN endpoint attribute.</p>
 */
export interface ClientVpnEndpointAttributeStatus {
    /**
     * <p>The status code.</p>
     */
    Code?: ClientVpnEndpointAttributeStatusCode | string;
    /**
     * <p>The status message.</p>
     */
    Message?: string;
}
export declare namespace ClientVpnEndpointAttributeStatus {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: ClientVpnEndpointAttributeStatus) => any;
}
/**
 * <p>The options for managing connection authorization for new client connections.</p>
 */
export interface ClientConnectResponseOptions {
    /**
     * <p>Indicates whether client connect options are enabled.</p>
     */
    Enabled?: boolean;
    /**
     * <p>The Amazon Resource Name (ARN) of the AWS Lambda function used for connection authorization.</p>
     */
    LambdaFunctionArn?: string;
    /**
     * <p>The status of any updates to the client connect options.</p>
     */
    Status?: ClientVpnEndpointAttributeStatus;
}
export declare namespace ClientConnectResponseOptions {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: ClientConnectResponseOptions) => any;
}
/**
 * <p>Information about the client connection logging options for a Client VPN endpoint.</p>
 */
export interface ConnectionLogResponseOptions {
    /**
     * <p>Indicates whether client connection logging is enabled for the Client VPN endpoint.</p>
     */
    Enabled?: boolean;
    /**
     * <p>The name of the Amazon CloudWatch Logs log group to which connection logging data is published.</p>
     */
    CloudwatchLogGroup?: string;
    /**
     * <p>The name of the Amazon CloudWatch Logs log stream to which connection logging data is published.</p>
     */
    CloudwatchLogStream?: string;
}
export declare namespace ConnectionLogResponseOptions {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: ConnectionLogResponseOptions) => any;
}
export declare type VpnProtocol = "openvpn";
/**
 * <p>Describes a Client VPN endpoint.</p>
 */
export interface ClientVpnEndpoint {
    /**
     * <p>The ID of the Client VPN endpoint.</p>
     */
    ClientVpnEndpointId?: string;
    /**
     * <p>A brief description of the endpoint.</p>
     */
    Description?: string;
    /**
     * <p>The current state of the Client VPN endpoint.</p>
     */
    Status?: ClientVpnEndpointStatus;
    /**
     * <p>The date and time the Client VPN endpoint was created.</p>
     */
    CreationTime?: string;
    /**
     * <p>The date and time the Client VPN endpoint was deleted, if applicable.</p>
     */
    DeletionTime?: string;
    /**
     * <p>The DNS name to be used by clients when connecting to the Client VPN endpoint.</p>
     */
    DnsName?: string;
    /**
     * <p>The IPv4 address range, in CIDR notation, from which client IP addresses are assigned.</p>
     */
    ClientCidrBlock?: string;
    /**
     * <p>Information about the DNS servers to be used for DNS resolution. </p>
     */
    DnsServers?: string[];
    /**
     * <p>Indicates whether split-tunnel is enabled in the AWS Client VPN endpoint.</p>
     * 		       <p>For information about split-tunnel VPN endpoints, see <a href="https://docs.aws.amazon.com/vpn/latest/clientvpn-admin/split-tunnel-vpn.html">Split-Tunnel AWS Client VPN Endpoint</a> in the <i>AWS
     * 				Client VPN Administrator Guide</i>.</p>
     */
    SplitTunnel?: boolean;
    /**
     * <p>The protocol used by the VPN session.</p>
     */
    VpnProtocol?: VpnProtocol | string;
    /**
     * <p>The transport protocol used by the Client VPN endpoint.</p>
     */
    TransportProtocol?: TransportProtocol | string;
    /**
     * <p>The port number for the  Client VPN endpoint.</p>
     */
    VpnPort?: number;
    /**
     * @deprecated
     *
     * <p>Information about the associated target networks. A target network is a subnet in a VPC.</p>
     */
    AssociatedTargetNetworks?: AssociatedTargetNetwork[];
    /**
     * <p>The ARN of the server certificate.</p>
     */
    ServerCertificateArn?: string;
    /**
     * <p>Information about the authentication method used by the Client VPN endpoint.</p>
     */
    AuthenticationOptions?: ClientVpnAuthentication[];
    /**
     * <p>Information about the client connection logging options for the Client VPN endpoint.</p>
     */
    ConnectionLogOptions?: ConnectionLogResponseOptions;
    /**
     * <p>Any tags assigned to the Client VPN endpoint.</p>
     */
    Tags?: Tag[];
    /**
     * <p>The IDs of the security groups for the target network.</p>
     */
    SecurityGroupIds?: string[];
    /**
     * <p>The ID of the VPC.</p>
     */
    VpcId?: string;
    /**
     * <p>The URL of the self-service portal.</p>
     */
    SelfServicePortalUrl?: string;
    /**
     * <p>The options for managing connection authorization for new client connections.</p>
     */
    ClientConnectOptions?: ClientConnectResponseOptions;
}
export declare namespace ClientVpnEndpoint {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: ClientVpnEndpoint) => any;
}
export interface DescribeClientVpnEndpointsResult {
    /**
     * <p>Information about the Client VPN endpoints.</p>
     */
    ClientVpnEndpoints?: ClientVpnEndpoint[];
    /**
     * <p>The token to use to retrieve the next page of results. This value is <code>null</code> when there are no more results to return.</p>
     */
    NextToken?: string;
}
export declare namespace DescribeClientVpnEndpointsResult {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: DescribeClientVpnEndpointsResult) => any;
}
export interface DescribeClientVpnRoutesRequest {
    /**
     * <p>The ID of the Client VPN endpoint.</p>
     */
    ClientVpnEndpointId: string | undefined;
    /**
     * <p>One or more filters. Filter names and values are case-sensitive.</p>
     * 	        <ul>
     *             <li>
     *                <p>
     *                   <code>destination-cidr</code> - The CIDR of the route destination.</p>
     *             </li>
     *             <li>
     *                <p>
     *                   <code>origin</code> - How the route was associated with the Client VPN endpoint (<code>associate</code> | <code>add-route</code>).</p>
     *             </li>
     *             <li>
     *                <p>
     *                   <code>target-subnet</code> - The ID of the subnet through which traffic is routed.</p>
     *             </li>
     *          </ul>
     */
    Filters?: Filter[];
    /**
     * <p>The maximum number of results to return for the request in a single page. The remaining results can be seen by sending another request with the nextToken value.</p>
     */
    MaxResults?: number;
    /**
     * <p>The token to retrieve the next page of results.</p>
     */
    NextToken?: string;
    /**
     * <p>Checks whether you have the required permissions for the action, without actually making the request, and provides an error response. If you have the required permissions, the error response is <code>DryRunOperation</code>. Otherwise, it is <code>UnauthorizedOperation</code>.</p>
     */
    DryRun?: boolean;
}
export declare namespace DescribeClientVpnRoutesRequest {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: DescribeClientVpnRoutesRequest) => any;
}
/**
 * <p>Information about a Client VPN endpoint route.</p>
 */
export interface ClientVpnRoute {
    /**
     * <p>The ID of the Client VPN endpoint with which the route is associated.</p>
     */
    ClientVpnEndpointId?: string;
    /**
     * <p>The IPv4 address range, in CIDR notation, of the route destination.</p>
     */
    DestinationCidr?: string;
    /**
     * <p>The ID of the subnet through which traffic is routed.</p>
     */
    TargetSubnet?: string;
    /**
     * <p>The route type.</p>
     */
    Type?: string;
    /**
     * <p>Indicates how the route was associated with the Client VPN endpoint.
     * 			<code>associate</code> indicates that the route was automatically added when the target network
     * 			was associated with the Client VPN endpoint. <code>add-route</code> indicates that the route
     * 			was manually added using the <b>CreateClientVpnRoute</b> action.</p>
     */
    Origin?: string;
    /**
     * <p>The current state of the route.</p>
     */
    Status?: ClientVpnRouteStatus;
    /**
     * <p>A brief description of the route.</p>
     */
    Description?: string;
}
export declare namespace ClientVpnRoute {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: ClientVpnRoute) => any;
}
export interface DescribeClientVpnRoutesResult {
    /**
     * <p>Information about the Client VPN endpoint routes.</p>
     */
    Routes?: ClientVpnRoute[];
    /**
     * <p>The token to use to retrieve the next page of results. This value is <code>null</code> when there are no more results to return.</p>
     */
    NextToken?: string;
}
export declare namespace DescribeClientVpnRoutesResult {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: DescribeClientVpnRoutesResult) => any;
}
export interface DescribeClientVpnTargetNetworksRequest {
    /**
     * <p>The ID of the Client VPN endpoint.</p>
     */
    ClientVpnEndpointId: string | undefined;
    /**
     * <p>The IDs of the target network associations.</p>
     */
    AssociationIds?: string[];
    /**
     * <p>The maximum number of results to return for the request in a single page. The remaining results can be seen by sending another request with the nextToken value.</p>
     */
    MaxResults?: number;
    /**
     * <p>The token to retrieve the next page of results.</p>
     */
    NextToken?: string;
    /**
     * <p>One or more filters. Filter names and values are case-sensitive.</p>
     * 	        <ul>
     *             <li>
     *                <p>
     *                   <code>association-id</code> - The ID of the association.</p>
     *             </li>
     *             <li>
     *                <p>
     *                   <code>target-network-id</code> - The ID of the subnet specified as the target network.</p>
     *             </li>
     *             <li>
     *                <p>
     *                   <code>vpc-id</code> - The ID of the VPC in which the target network is located.</p>
     *             </li>
     *          </ul>
     */
    Filters?: Filter[];
    /**
     * <p>Checks whether you have the required permissions for the action, without actually making the request, and provides an error response. If you have the required permissions, the error response is <code>DryRunOperation</code>. Otherwise, it is <code>UnauthorizedOperation</code>.</p>
     */
    DryRun?: boolean;
}
export declare namespace DescribeClientVpnTargetNetworksRequest {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: DescribeClientVpnTargetNetworksRequest) => any;
}
/**
 * <p>Describes a target network associated with a Client VPN endpoint.</p>
 */
export interface TargetNetwork {
    /**
     * <p>The ID of the association.</p>
     */
    AssociationId?: string;
    /**
     * <p>The ID of the VPC in which the target network (subnet) is located.</p>
     */
    VpcId?: string;
    /**
     * <p>The ID of the subnet specified as the target network.</p>
     */
    TargetNetworkId?: string;
    /**
     * <p>The ID of the Client VPN endpoint with which the target network is associated.</p>
     */
    ClientVpnEndpointId?: string;
    /**
     * <p>The current state of the target network association.</p>
     */
    Status?: AssociationStatus;
    /**
     * <p>The IDs of the security groups applied to the target network association.</p>
     */
    SecurityGroups?: string[];
}
export declare namespace TargetNetwork {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: TargetNetwork) => any;
}
export interface DescribeClientVpnTargetNetworksResult {
    /**
     * <p>Information about the associated target networks.</p>
     */
    ClientVpnTargetNetworks?: TargetNetwork[];
    /**
     * <p>The token to use to retrieve the next page of results. This value is <code>null</code> when there are no more results to return.</p>
     */
    NextToken?: string;
}
export declare namespace DescribeClientVpnTargetNetworksResult {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: DescribeClientVpnTargetNetworksResult) => any;
}
export interface DescribeCoipPoolsRequest {
    /**
     * <p>The IDs of the address pools.</p>
     */
    PoolIds?: string[];
    /**
     * <p>The filters. The following are the possible values:</p>
     *          <ul>
     *             <li>
     *                <p>
     *                   <code>coip-pool.pool-id</code>
     *                </p>
     *             </li>
     *          </ul>
     *          <ul>
     *             <li>
     *                <p>
     *                   <code>coip-pool.local-gateway-route-table-id</code>
     *                </p>
     *             </li>
     *          </ul>
     */
    Filters?: Filter[];
    /**
     * <p>The maximum number of results to return with a single call.
     * 	To retrieve the remaining results, make another call with the returned <code>nextToken</code> value.</p>
     */
    MaxResults?: number;
    /**
     * <p>The token for the next page of results.</p>
     */
    NextToken?: string;
    /**
     * <p>Checks whether you have the required permissions for the action, without actually making the request,
     *    and provides an error response. If you have the required permissions, the error response is <code>DryRunOperation</code>.
     *    Otherwise, it is <code>UnauthorizedOperation</code>.</p>
     */
    DryRun?: boolean;
}
export declare namespace DescribeCoipPoolsRequest {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: DescribeCoipPoolsRequest) => any;
}
/**
 * <p>Describes a customer-owned address pool.</p>
 */
export interface CoipPool {
    /**
     * <p>The ID of the address pool.</p>
     */
    PoolId?: string;
    /**
     * <p>The address ranges of the address pool.</p>
     */
    PoolCidrs?: string[];
    /**
     * <p>The ID of the local gateway route table.</p>
     */
    LocalGatewayRouteTableId?: string;
    /**
     * <p>The tags.</p>
     */
    Tags?: Tag[];
    /**
     * <p>The ARN of the address pool.</p>
     */
    PoolArn?: string;
}
export declare namespace CoipPool {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: CoipPool) => any;
}
export interface DescribeCoipPoolsResult {
    /**
     * <p>Information about the address pools.</p>
     */
    CoipPools?: CoipPool[];
    /**
     * <p>The token to use to retrieve the next page of results. This value is <code>null</code> when there are no more results to return.</p>
     */
    NextToken?: string;
}
export declare namespace DescribeCoipPoolsResult {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: DescribeCoipPoolsResult) => any;
}
export interface DescribeConversionTasksRequest {
    /**
     * <p>The conversion task IDs.</p>
     */
    ConversionTaskIds?: string[];
    /**
     * <p>Checks whether you have the required permissions for the action, without actually making the request,
     *    and provides an error response. If you have the required permissions, the error response is <code>DryRunOperation</code>.
     *    Otherwise, it is <code>UnauthorizedOperation</code>.</p>
     */
    DryRun?: boolean;
}
export declare namespace DescribeConversionTasksRequest {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: DescribeConversionTasksRequest) => any;
}
/**
 * <p>Describes a disk image.</p>
 */
export interface DiskImageDescription {
    /**
     * <p>The checksum computed for the disk image.</p>
     */
    Checksum?: string;
    /**
     * <p>The disk image format.</p>
     */
    Format?: DiskImageFormat | string;
    /**
     * <p>A presigned URL for the import manifest stored in Amazon S3. For information about creating a presigned URL for
     *    an Amazon S3 object, read the "Query String Request Authentication Alternative" section of the <a href="https://docs.aws.amazon.com/AmazonS3/latest/dev/RESTAuthentication.html">Authenticating REST Requests</a> topic in
     *    the <i>Amazon Simple Storage Service Developer Guide</i>.</p>
     *          <p>For information about the import manifest referenced by this API action, see <a href="https://docs.aws.amazon.com/AWSEC2/latest/APIReference/manifest.html">VM Import Manifest</a>.</p>
     */
    ImportManifestUrl?: string;
    /**
     * <p>The size of the disk image, in GiB.</p>
     */
    Size?: number;
}
export declare namespace DiskImageDescription {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: DiskImageDescription) => any;
}
/**
 * <p>Describes a disk image volume.</p>
 */
export interface DiskImageVolumeDescription {
    /**
     * <p>The volume identifier.</p>
     */
    Id?: string;
    /**
     * <p>The size of the volume, in GiB.</p>
     */
    Size?: number;
}
export declare namespace DiskImageVolumeDescription {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: DiskImageVolumeDescription) => any;
}
/**
 * <p>Describes an import volume task.</p>
 */
export interface ImportInstanceVolumeDetailItem {
    /**
     * <p>The Availability Zone where the resulting instance will reside.</p>
     */
    AvailabilityZone?: string;
    /**
     * <p>The number of bytes converted so far.</p>
     */
    BytesConverted?: number;
    /**
     * <p>A description of the task.</p>
     */
    Description?: string;
    /**
     * <p>The image.</p>
     */
    Image?: DiskImageDescription;
    /**
     * <p>The status of the import of this particular disk image.</p>
     */
    Status?: string;
    /**
     * <p>The status information or errors related to the disk image.</p>
     */
    StatusMessage?: string;
    /**
     * <p>The volume.</p>
     */
    Volume?: DiskImageVolumeDescription;
}
export declare namespace ImportInstanceVolumeDetailItem {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: ImportInstanceVolumeDetailItem) => any;
}
/**
 * <p>Describes an import instance task.</p>
 */
export interface ImportInstanceTaskDetails {
    /**
     * <p>A description of the task.</p>
     */
    Description?: string;
    /**
     * <p>The ID of the instance.</p>
     */
    InstanceId?: string;
    /**
     * <p>The instance operating system.</p>
     */
    Platform?: PlatformValues | string;
    /**
     * <p>The volumes.</p>
     */
    Volumes?: ImportInstanceVolumeDetailItem[];
}
export declare namespace ImportInstanceTaskDetails {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: ImportInstanceTaskDetails) => any;
}
/**
 * <p>Describes an import volume task.</p>
 */
export interface ImportVolumeTaskDetails {
    /**
     * <p>The Availability Zone where the resulting volume will reside.</p>
     */
    AvailabilityZone?: string;
    /**
     * <p>The number of bytes converted so far.</p>
     */
    BytesConverted?: number;
    /**
     * <p>The description you provided when starting the import volume task.</p>
     */
    Description?: string;
    /**
     * <p>The image.</p>
     */
    Image?: DiskImageDescription;
    /**
     * <p>The volume.</p>
     */
    Volume?: DiskImageVolumeDescription;
}
export declare namespace ImportVolumeTaskDetails {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: ImportVolumeTaskDetails) => any;
}
export declare type ConversionTaskState = "active" | "cancelled" | "cancelling" | "completed";
/**
 * <p>Describes a conversion task.</p>
 */
export interface ConversionTask {
    /**
     * <p>The ID of the conversion task.</p>
     */
    ConversionTaskId?: string;
    /**
     * <p>The time when the task expires. If the upload isn't complete before the expiration time, we automatically cancel
     *    the task.</p>
     */
    ExpirationTime?: string;
    /**
     * <p>If the task is for importing an instance, this contains information about the import instance task.</p>
     */
    ImportInstance?: ImportInstanceTaskDetails;
    /**
     * <p>If the task is for importing a volume, this contains information about the import volume task.</p>
     */
    ImportVolume?: ImportVolumeTaskDetails;
    /**
     * <p>The state of the conversion task.</p>
     */
    State?: ConversionTaskState | string;
    /**
     * <p>The status message related to the conversion task.</p>
     */
    StatusMessage?: string;
    /**
     * <p>Any tags assigned to the task.</p>
     */
    Tags?: Tag[];
}
export declare namespace ConversionTask {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: ConversionTask) => any;
}
export interface DescribeConversionTasksResult {
    /**
     * <p>Information about the conversion tasks.</p>
     */
    ConversionTasks?: ConversionTask[];
}
export declare namespace DescribeConversionTasksResult {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: DescribeConversionTasksResult) => any;
}
/**
 * <p>Contains the parameters for DescribeCustomerGateways.</p>
 */
export interface DescribeCustomerGatewaysRequest {
    /**
     * <p>One or more customer gateway IDs.</p>
     *         <p>Default: Describes all your customer gateways.</p>
     */
    CustomerGatewayIds?: string[];
    /**
     * <p>One or more filters.</p>
     *         <ul>
     *             <li>
     *                 <p>
     *                   <code>bgp-asn</code> - The customer gateway's Border Gateway Protocol (BGP) Autonomous System Number (ASN).</p>
     *             </li>
     *             <li>
     *                 <p>
     *                   <code>customer-gateway-id</code> - The ID of the customer gateway.</p>
     *             </li>
     *             <li>
     *                 <p>
     *                   <code>ip-address</code> - The IP address of the customer gateway's Internet-routable external interface.</p>
     *             </li>
     *             <li>
     *                 <p>
     *                   <code>state</code> - The state of the customer gateway (<code>pending</code> | <code>available</code> | <code>deleting</code> | <code>deleted</code>).</p>
     *             </li>
     *             <li>
     *                 <p>
     *                   <code>type</code> - The type of customer gateway. Currently, the only supported type is <code>ipsec.1</code>.</p>
     *             </li>
     *             <li>
     *                 <p>
     *                   <code>tag</code>:<key> - The key/value combination of a tag assigned to the resource. Use the tag key in the filter name and the tag value as the filter value.
     *     For example, to find all resources that have a tag with the key <code>Owner</code> and the value <code>TeamA</code>, specify <code>tag:Owner</code> for the filter name and <code>TeamA</code> for the filter value.</p>
     *             </li>
     *             <li>
     *                 <p>
     *                   <code>tag-key</code> - The key of a tag assigned to the resource. Use this filter to find all resources assigned a tag with a specific key, regardless of the tag value.</p>
     *             </li>
     *          </ul>
     */
    Filters?: Filter[];
    /**
     * <p>Checks whether you have the required permissions for the action, without actually making the request,
     *             and provides an error response. If you have the required permissions, the error response is <code>DryRunOperation</code>.
     *             Otherwise, it is <code>UnauthorizedOperation</code>.</p>
     */
    DryRun?: boolean;
}
export declare namespace DescribeCustomerGatewaysRequest {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: DescribeCustomerGatewaysRequest) => any;
}
/**
 * <p>Contains the output of DescribeCustomerGateways.</p>
 */
export interface DescribeCustomerGatewaysResult {
    /**
     * <p>Information about one or more customer gateways.</p>
     */
    CustomerGateways?: CustomerGateway[];
}
export declare namespace DescribeCustomerGatewaysResult {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: DescribeCustomerGatewaysResult) => any;
}
export interface DescribeDhcpOptionsRequest {
    /**
     * <p>The IDs of one or more DHCP options sets.</p>
     * 		       <p>Default: Describes all your DHCP options sets.</p>
     */
    DhcpOptionsIds?: string[];
    /**
     * <p>One or more filters.</p>
     * 		       <ul>
     *             <li>
     * 		             <p>
     *                   <code>dhcp-options-id</code> - The ID of a DHCP options set.</p>
     * 		          </li>
     *             <li>
     * 		             <p>
     *                   <code>key</code> - The key for one of the options (for example, <code>domain-name</code>).</p>
     * 		          </li>
     *             <li>
     * 		             <p>
     *                   <code>value</code> - The value for one of the options.</p>
     * 		          </li>
     *             <li>
     * 		             <p>
     *                   <code>owner-id</code> - The ID of the AWS account that owns the DHCP options set.</p>
     * 		          </li>
     *             <li>
     * 		             <p>
     *                   <code>tag</code>:<key> - The key/value combination of a tag assigned to the resource. Use the tag key in the filter name and the tag value as the filter value.
     *     For example, to find all resources that have a tag with the key <code>Owner</code> and the value <code>TeamA</code>, specify <code>tag:Owner</code> for the filter name and <code>TeamA</code> for the filter value.</p>
     * 		          </li>
     *             <li>
     * 		             <p>
     *                   <code>tag-key</code> - The key of a tag assigned to the resource. Use this filter to find all resources assigned a tag with a specific key, regardless of the tag value.</p>
     * 		          </li>
     *          </ul>
     */
    Filters?: Filter[];
    /**
     * <p>Checks whether you have the required permissions for the action, without actually making the request,
     *    and provides an error response. If you have the required permissions, the error response is <code>DryRunOperation</code>.
     *    Otherwise, it is <code>UnauthorizedOperation</code>.</p>
     */
    DryRun?: boolean;
    /**
     * <p>The token for the next page of results.</p>
     */
    NextToken?: string;
    /**
     * <p>The maximum number of results to return with a single call.
     * 	To retrieve the remaining results, make another call with the returned <code>nextToken</code> value.</p>
     */
    MaxResults?: number;
}
export declare namespace DescribeDhcpOptionsRequest {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: DescribeDhcpOptionsRequest) => any;
}
export interface DescribeDhcpOptionsResult {
    /**
     * <p>Information about one or more DHCP options sets.</p>
     */
    DhcpOptions?: DhcpOptions[];
    /**
     * <p>The token to use to retrieve the next page of results. This value is <code>null</code> when there are no more results to return.</p>
     */
    NextToken?: string;
}
export declare namespace DescribeDhcpOptionsResult {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: DescribeDhcpOptionsResult) => any;
}
export interface DescribeEgressOnlyInternetGatewaysRequest {
    /**
     * <p>Checks whether you have the required permissions for the action, without actually making the request,
     *    and provides an error response. If you have the required permissions, the error response is <code>DryRunOperation</code>.
     *    Otherwise, it is <code>UnauthorizedOperation</code>.</p>
     */
    DryRun?: boolean;
    /**
     * <p>One or more egress-only internet gateway IDs.</p>
     */
    EgressOnlyInternetGatewayIds?: string[];
    /**
     * <p>The maximum number of results to return with a single call.
     * 	To retrieve the remaining results, make another call with the returned <code>nextToken</code> value.</p>
     */
    MaxResults?: number;
    /**
     * <p>The token for the next page of results.</p>
     */
    NextToken?: string;
    /**
     * <p>One or more filters.</p>
     *     	    <ul>
     *             <li>
     *     			        <p>
     *                   <code>tag</code>:<key> - The key/value combination of a tag assigned to the resource. Use the tag key in the filter name and the tag value as the filter value.
     *     For example, to find all resources that have a tag with the key <code>Owner</code> and the value <code>TeamA</code>, specify <code>tag:Owner</code> for the filter name and <code>TeamA</code> for the filter value.</p>
     *     		      </li>
     *             <li>
     *     			        <p>
     *                   <code>tag-key</code> - The key of a tag assigned to the resource. Use this filter to find all resources assigned a tag with a specific key, regardless of the tag value.</p>
     *     		      </li>
     *          </ul>
     */
    Filters?: Filter[];
}
export declare namespace DescribeEgressOnlyInternetGatewaysRequest {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: DescribeEgressOnlyInternetGatewaysRequest) => any;
}
export interface DescribeEgressOnlyInternetGatewaysResult {
    /**
     * <p>Information about the egress-only internet gateways.</p>
     */
    EgressOnlyInternetGateways?: EgressOnlyInternetGateway[];
    /**
     * <p>The token to use to retrieve the next page of results. This value is <code>null</code> when there are no more results to return.</p>
     */
    NextToken?: string;
}
export declare namespace DescribeEgressOnlyInternetGatewaysResult {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: DescribeEgressOnlyInternetGatewaysResult) => any;
}
export interface DescribeElasticGpusRequest {
    /**
     * <p>The Elastic Graphics accelerator IDs.</p>
     */
    ElasticGpuIds?: string[];
    /**
     * <p>Checks whether you have the required permissions for the action, without actually making the request,
     *    and provides an error response. If you have the required permissions, the error response is <code>DryRunOperation</code>.
     *    Otherwise, it is <code>UnauthorizedOperation</code>.</p>
     */
    DryRun?: boolean;
    /**
     * <p>The filters.</p>
     *         <ul>
     *             <li>
     *                 <p>
     *                   <code>availability-zone</code> - The Availability Zone in which the
     *                     Elastic Graphics accelerator resides.</p>
     *             </li>
     *             <li>
     *                 <p>
     *                   <code>elastic-gpu-health</code> - The status of the Elastic Graphics accelerator
     *                         (<code>OK</code> | <code>IMPAIRED</code>).</p>
     *             </li>
     *             <li>
     *                 <p>
     *                   <code>elastic-gpu-state</code> - The state of the Elastic Graphics accelerator
     *                         (<code>ATTACHED</code>).</p>
     *             </li>
     *             <li>
     *                 <p>
     *                   <code>elastic-gpu-type</code> - The type of Elastic Graphics accelerator; for example,
     *                         <code>eg1.medium</code>.</p>
     *             </li>
     *             <li>
     *                 <p>
     *                   <code>instance-id</code> - The ID of the instance to which the
     *                     Elastic Graphics accelerator is associated.</p>
     *             </li>
     *          </ul>
     */
    Filters?: Filter[];
    /**
     * <p>The maximum number of results to return in a single call. To retrieve the remaining
     *             results, make another call with the returned <code>NextToken</code> value. This value
     *             can be between 5 and 1000.</p>
     */
    MaxResults?: number;
    /**
     * <p>The token to request the next page of results.</p>
     */
    NextToken?: string;
}
export declare namespace DescribeElasticGpusRequest {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: DescribeElasticGpusRequest) => any;
}
export declare enum ElasticGpuStatus {
    Impaired = "IMPAIRED",
    Ok = "OK"
}
/**
 * <p>Describes the status of an Elastic Graphics accelerator.</p>
 */
export interface ElasticGpuHealth {
    /**
     * <p>The health status.</p>
     */
    Status?: ElasticGpuStatus | string;
}
export declare namespace ElasticGpuHealth {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: ElasticGpuHealth) => any;
}
export declare enum ElasticGpuState {
    Attached = "ATTACHED"
}
/**
 * <p>Describes an Elastic Graphics accelerator.</p>
 */
export interface ElasticGpus {
    /**
     * <p>The ID of the Elastic Graphics accelerator.</p>
     */
    ElasticGpuId?: string;
    /**
     * <p>The Availability Zone in the which the Elastic Graphics accelerator resides.</p>
     */
    AvailabilityZone?: string;
    /**
     * <p>The type of Elastic Graphics accelerator.</p>
     */
    ElasticGpuType?: string;
    /**
     * <p>The status of the Elastic Graphics accelerator.</p>
     */
    ElasticGpuHealth?: ElasticGpuHealth;
    /**
     * <p>The state of the Elastic Graphics accelerator.</p>
     */
    ElasticGpuState?: ElasticGpuState | string;
    /**
     * <p>The ID of the instance to which the Elastic Graphics accelerator is attached.</p>
     */
    InstanceId?: string;
    /**
     * <p>The tags assigned to the Elastic Graphics accelerator.</p>
     */
    Tags?: Tag[];
}
export declare namespace ElasticGpus {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: ElasticGpus) => any;
}
export interface DescribeElasticGpusResult {
    /**
     * <p>Information about the Elastic Graphics accelerators.</p>
     */
    ElasticGpuSet?: ElasticGpus[];
    /**
     * <p>The total number of items to return. If the total number of items available is more
     *             than the value specified in max-items then a Next-Token will be provided in the output
     *             that you can use to resume pagination.</p>
     */
    MaxResults?: number;
    /**
     * <p>The token to use to retrieve the next page of results. This value is
     *                 <code>null</code> when there are no more results to return.</p>
     */
    NextToken?: string;
}
export declare namespace DescribeElasticGpusResult {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: DescribeElasticGpusResult) => any;
}
export interface DescribeExportImageTasksRequest {
    /**
     * <p>Checks whether you have the required permissions for the action, without actually making the request,
     *    and provides an error response. If you have the required permissions, the error response is <code>DryRunOperation</code>.
     *    Otherwise, it is <code>UnauthorizedOperation</code>.</p>
     */
    DryRun?: boolean;
    /**
     * <p>Filter tasks using the <code>task-state</code> filter and one of the following values: <code>active</code>,
     *     <code>completed</code>, <code>deleting</code>, or <code>deleted</code>.</p>
     */
    Filters?: Filter[];
    /**
     * <p>The IDs of the export image tasks.</p>
     */
    ExportImageTaskIds?: string[];
    /**
     * <p>The maximum number of results to return in a single call.</p>
     */
    MaxResults?: number;
    /**
     * <p>A token that indicates the next page of results.</p>
     */
    NextToken?: string;
}
export declare namespace DescribeExportImageTasksRequest {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: DescribeExportImageTasksRequest) => any;
}
/**
 * <p>Describes the destination for an export image task.</p>
 */
export interface ExportTaskS3Location {
    /**
     * <p>The destination Amazon S3 bucket.</p>
     */
    S3Bucket?: string;
    /**
     * <p>The prefix (logical hierarchy) in the bucket.</p>
     */
    S3Prefix?: string;
}
export declare namespace ExportTaskS3Location {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: ExportTaskS3Location) => any;
}
/**
 * <p>Describes an export image task.</p>
 */
export interface ExportImageTask {
    /**
     * <p>A description of the image being exported.</p>
     */
    Description?: string;
    /**
     * <p>The ID of the export image task.</p>
     */
    ExportImageTaskId?: string;
    /**
     * <p>The ID of the image.</p>
     */
    ImageId?: string;
    /**
     * <p>The percent complete of the export image task.</p>
     */
    Progress?: string;
    /**
     * <p>Information about the destination Amazon S3 bucket.</p>
     */
    S3ExportLocation?: ExportTaskS3Location;
    /**
     * <p>The status of the export image task. The possible values are <code>active</code>, <code>completed</code>,
     *     <code>deleting</code>, and <code>deleted</code>.</p>
     */
    Status?: string;
    /**
     * <p>The status message for the export image task.</p>
     */
    StatusMessage?: string;
    /**
     * <p>Any tags assigned to the export image task.</p>
     */
    Tags?: Tag[];
}
export declare namespace ExportImageTask {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: ExportImageTask) => any;
}
export interface DescribeExportImageTasksResult {
    /**
     * <p>Information about the export image tasks.</p>
     */
    ExportImageTasks?: ExportImageTask[];
    /**
     * <p>The token to use to get the next page of results. This value is <code>null</code> when there are no more results
     *    to return.</p>
     */
    NextToken?: string;
}
export declare namespace DescribeExportImageTasksResult {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: DescribeExportImageTasksResult) => any;
}
export interface DescribeExportTasksRequest {
    /**
     * <p>The export task IDs.</p>
     */
    ExportTaskIds?: string[];
    /**
     * <p>the filters for the export tasks.</p>
     */
    Filters?: Filter[];
}
export declare namespace DescribeExportTasksRequest {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: DescribeExportTasksRequest) => any;
}
export interface DescribeExportTasksResult {
    /**
     * <p>Information about the export tasks.</p>
     */
    ExportTasks?: ExportTask[];
}
export declare namespace DescribeExportTasksResult {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: DescribeExportTasksResult) => any;
}
export interface DescribeFastSnapshotRestoresRequest {
    /**
     * <p>The filters. The possible values are:</p>
     *          <ul>
     *             <li>
     *                <p>
     *                   <code>availability-zone</code>: The Availability Zone of the snapshot.</p>
     *             </li>
     *             <li>
     *                <p>
     *                   <code>owner-id</code>: The ID of the AWS account that enabled fast snapshot restore on the snapshot.</p>
     *             </li>
     *             <li>
     *                <p>
     *                   <code>snapshot-id</code>: The ID of the snapshot.</p>
     *             </li>
     *             <li>
     *                <p>
     *                   <code>state</code>: The state of fast snapshot restores for the snapshot
     *          (<code>enabling</code> |
     *           <code>optimizing</code> |
     *           <code>enabled</code> |
     *           <code>disabling</code> |
     *           <code>disabled</code>).</p>
     *             </li>
     *          </ul>
     */
    Filters?: Filter[];
    /**
     * <p>The maximum number of results to return with a single call.
     * 	To retrieve the remaining results, make another call with the returned <code>nextToken</code> value.</p>
     */
    MaxResults?: number;
    /**
     * <p>The token for the next page of results.</p>
     */
    NextToken?: string;
    /**
     * <p>Checks whether you have the required permissions for the action, without actually making the request,
     *    and provides an error response. If you have the required permissions, the error response is <code>DryRunOperation</code>.
     *    Otherwise, it is <code>UnauthorizedOperation</code>.</p>
     */
    DryRun?: boolean;
}
export declare namespace DescribeFastSnapshotRestoresRequest {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: DescribeFastSnapshotRestoresRequest) => any;
}
export declare type FastSnapshotRestoreStateCode = "disabled" | "disabling" | "enabled" | "enabling" | "optimizing";
/**
 * <p>Describes fast snapshot restores for a snapshot.</p>
 */
export interface DescribeFastSnapshotRestoreSuccessItem {
    /**
     * <p>The ID of the snapshot.</p>
     */
    SnapshotId?: string;
    /**
     * <p>The Availability Zone.</p>
     */
    AvailabilityZone?: string;
    /**
     * <p>The state of fast snapshot restores.</p>
     */
    State?: FastSnapshotRestoreStateCode | string;
    /**
     * <p>The reason for the state transition. The possible values are as follows:</p>
     *          <ul>
     *             <li>
     *                <p>
     *                   <code>Client.UserInitiated</code> - The state successfully transitioned to <code>enabling</code> or
     *           <code>disabling</code>.</p>
     *             </li>
     *             <li>
     *                <p>
     *                   <code>Client.UserInitiated - Lifecycle state transition</code> - The state successfully transitioned
     *           to <code>optimizing</code>, <code>enabled</code>, or <code>disabled</code>.</p>
     *             </li>
     *          </ul>
     */
    StateTransitionReason?: string;
    /**
     * <p>The ID of the AWS account that enabled fast snapshot restores on the snapshot.</p>
     */
    OwnerId?: string;
    /**
     * <p>The AWS owner alias that enabled fast snapshot restores on the snapshot. This is intended for future use.</p>
     */
    OwnerAlias?: string;
    /**
     * <p>The time at which fast snapshot restores entered the <code>enabling</code> state.</p>
     */
    EnablingTime?: Date;
    /**
     * <p>The time at which fast snapshot restores entered the <code>optimizing</code> state.</p>
     */
    OptimizingTime?: Date;
    /**
     * <p>The time at which fast snapshot restores entered the <code>enabled</code> state.</p>
     */
    EnabledTime?: Date;
    /**
     * <p>The time at which fast snapshot restores entered the <code>disabling</code> state.</p>
     */
    DisablingTime?: Date;
    /**
     * <p>The time at which fast snapshot restores entered the <code>disabled</code> state.</p>
     */
    DisabledTime?: Date;
}
export declare namespace DescribeFastSnapshotRestoreSuccessItem {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: DescribeFastSnapshotRestoreSuccessItem) => any;
}
export interface DescribeFastSnapshotRestoresResult {
    /**
     * <p>Information about the state of fast snapshot restores.</p>
     */
    FastSnapshotRestores?: DescribeFastSnapshotRestoreSuccessItem[];
    /**
     * <p>The token to use to retrieve the next page of results. This value is <code>null</code> when there are no more results to return.</p>
     */
    NextToken?: string;
}
export declare namespace DescribeFastSnapshotRestoresResult {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: DescribeFastSnapshotRestoresResult) => any;
}
export declare enum FleetEventType {
    FLEET_CHANGE = "fleet-change",
    INSTANCE_CHANGE = "instance-change",
    SERVICE_ERROR = "service-error"
}
export interface DescribeFleetHistoryRequest {
    /**
     * <p>Checks whether you have the required permissions for the action, without actually making the request,
     *    and provides an error response. If you have the required permissions, the error response is <code>DryRunOperation</code>.
     *    Otherwise, it is <code>UnauthorizedOperation</code>.</p>
     */
    DryRun?: boolean;
    /**
     * <p>The type of events to describe. By default, all events are described.</p>
     */
    EventType?: FleetEventType | string;
    /**
     * <p>The maximum number of results to return in a single call. Specify a value between 1 and
     *          1000. The default value is 1000. To retrieve the remaining results, make another call with
     *          the returned <code>NextToken</code> value.</p>
     */
    MaxResults?: number;
    /**
     * <p>The token for the next set of results.</p>
     */
    NextToken?: string;
    /**
     * <p>The ID of the EC2 Fleet.</p>
     */
    FleetId: string | undefined;
    /**
     * <p>The start date and time for the events, in UTC format (for example,
     *             <i>YYYY</i>-<i>MM</i>-<i>DD</i>T<i>HH</i>:<i>MM</i>:<i>SS</i>Z).</p>
     */
    StartTime: Date | undefined;
}
export declare namespace DescribeFleetHistoryRequest {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: DescribeFleetHistoryRequest) => any;
}
/**
 * <p>Describes an EC2 Fleet or Spot Fleet event.</p>
 */
export interface EventInformation {
    /**
     * <p>The description of the event.</p>
     */
    EventDescription?: string;
    /**
     * <p>The event.</p>
     *
     *          <p>The following are the <code>error</code> events:</p>
     *          <ul>
     *             <li>
     *                <p>
     *                     <code>iamFleetRoleInvalid</code> - The EC2 Fleet or Spot Fleet did not have the required
     *                     permissions either to launch or terminate an instance.</p>
     *             </li>
     *             <li>
     *                <p>
     *                   <code>spotFleetRequestConfigurationInvalid</code> - The configuration is not valid. For more information, see the description
     *           of the event.</p>
     *             </li>
     *             <li>
     *                <p>
     *                   <code>spotInstanceCountLimitExceeded</code> - You've reached the limit on the number
     *           of Spot Instances that you can launch.</p>
     *             </li>
     *          </ul>
     *
     *          <p>The following are the <code>fleetRequestChange</code> events:</p>
     *          <ul>
     *             <li>
     *                <p>
     *                     <code>active</code> - The EC2 Fleet or Spot Fleet request has been validated and Amazon EC2 is
     *                     attempting to maintain the target number of running Spot Instances.</p>
     *             </li>
     *             <li>
     *                <p>
     *                     <code>cancelled</code> - The EC2 Fleet or Spot Fleet request is canceled and has no running
     *                     Spot Instances. The EC2 Fleet or Spot Fleet will be deleted two days after its instances
     *                     were terminated.</p>
     *             </li>
     *             <li>
     *                <p>
     *                     <code>cancelled_running</code> - The EC2 Fleet or Spot Fleet request is canceled and does
     *                     not launch additional Spot Instances. Existing Spot Instances continue to run
     *                     until they are interrupted or terminated.</p>
     *             </li>
     *             <li>
     *                <p>
     *                     <code>cancelled_terminating</code> - The EC2 Fleet or Spot Fleet request is canceled and
     *                     its Spot Instances are terminating.</p>
     *             </li>
     *             <li>
     *                <p>
     *                     <code>expired</code> - The EC2 Fleet or Spot Fleet request has expired. A subsequent event
     *                     indicates that the instances were terminated, if the request was created with
     *                         <code>TerminateInstancesWithExpiration</code> set.</p>
     *             </li>
     *             <li>
     *                <p>
     *                     <code>modify_in_progress</code> - A request to modify the EC2 Fleet or Spot Fleet request
     *                     was accepted and is in progress.</p>
     *             </li>
     *             <li>
     *                <p>
     *                     <code>modify_successful</code> - The EC2 Fleet or Spot Fleet request was modified.</p>
     *             </li>
     *             <li>
     *                <p>
     *                   <code>price_update</code> - The price for a launch configuration was adjusted because
     *           it was too high. This change is permanent.</p>
     *             </li>
     *             <li>
     *                <p>
     *                     <code>submitted</code> - The EC2 Fleet or Spot Fleet request is being evaluated and Amazon EC2
     *                     is preparing to launch the target number of Spot Instances.</p>
     *             </li>
     *          </ul>
     *
     *          <p>The following are the <code>instanceChange</code> events:</p>
     *          <ul>
     *             <li>
     *                <p>
     *                   <code>launched</code> - A request was fulfilled and a new instance was launched.</p>
     *             </li>
     *             <li>
     *                <p>
     *                   <code>terminated</code> - An instance was terminated by the user.</p>
     *             </li>
     *          </ul>
     *
     *          <p>The following are the <code>Information</code> events:</p>
     *          <ul>
     *             <li>
     *                 <p>
     *                   <code>launchSpecTemporarilyBlacklisted</code> - The configuration is not valid
     *                     and several attempts to launch instances have failed. For more information, see
     *                     the description of the event.</p>
     *             </li>
     *             <li>
     *               <p>
     *                   <code>launchSpecUnusable</code> - The price in a launch specification is not valid because it is
     *                   below the Spot price or the Spot price is above the On-Demand price.</p>
     *             </li>
     *             <li>
     *               <p>
     *                   <code>fleetProgressHalted</code> - The price in every launch specification is not valid. A launch
     *                   specification might become valid if the Spot price changes.</p>
     *             </li>
     *          </ul>
     */
    EventSubType?: string;
    /**
     * <p>The ID of the instance. This information is available only for <code>instanceChange</code> events.</p>
     */
    InstanceId?: string;
}
export declare namespace EventInformation {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: EventInformation) => any;
}
/**
 * <p>Describes an event in the history of an EC2 Fleet.</p>
 */
export interface HistoryRecordEntry {
    /**
     * <p>Information about the event.</p>
     */
    EventInformation?: EventInformation;
    /**
     * <p>The event type.</p>
     */
    EventType?: FleetEventType | string;
    /**
     * <p>The date and time of the event, in UTC format (for example,
     *             <i>YYYY</i>-<i>MM</i>-<i>DD</i>T<i>HH</i>:<i>MM</i>:<i>SS</i>Z).</p>
     */
    Timestamp?: Date;
}
export declare namespace HistoryRecordEntry {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: HistoryRecordEntry) => any;
}
export interface DescribeFleetHistoryResult {
    /**
     * <p>Information about the events in the history of the EC2 Fleet.</p>
     */
    HistoryRecords?: HistoryRecordEntry[];
    /**
     * <p>The last date and time for the events, in UTC format (for example,
     *             <i>YYYY</i>-<i>MM</i>-<i>DD</i>T<i>HH</i>:<i>MM</i>:<i>SS</i>Z).
     *          All records up to this time were retrieved.</p>
     *          <p>If <code>nextToken</code> indicates that there are more results, this value is not
     *          present.</p>
     */
    LastEvaluatedTime?: Date;
    /**
     * <p>The token for the next set of results.</p>
     */
    NextToken?: string;
    /**
     * <p>The ID of the EC Fleet.</p>
     */
    FleetId?: string;
    /**
     * <p>The start date and time for the events, in UTC format (for example,
     *             <i>YYYY</i>-<i>MM</i>-<i>DD</i>T<i>HH</i>:<i>MM</i>:<i>SS</i>Z).</p>
     */
    StartTime?: Date;
}
export declare namespace DescribeFleetHistoryResult {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: DescribeFleetHistoryResult) => any;
}
export interface DescribeFleetInstancesRequest {
    /**
     * <p>Checks whether you have the required permissions for the action, without actually making the request,
     *    and provides an error response. If you have the required permissions, the error response is <code>DryRunOperation</code>.
     *    Otherwise, it is <code>UnauthorizedOperation</code>.</p>
     */
    DryRun?: boolean;
    /**
     * <p>The maximum number of results to return in a single call. Specify a value between 1 and
     *          1000. The default value is 1000. To retrieve the remaining results, make another call with
     *          the returned <code>NextToken</code> value.</p>
     */
    MaxResults?: number;
    /**
     * <p>The token for the next set of results.</p>
     */
    NextToken?: string;
    /**
     * <p>The ID of the EC2 Fleet.</p>
     */
    FleetId: string | undefined;
    /**
     * <p>The filters.</p>
     *          <ul>
     *             <li>
     *                <p>
     *                   <code>instance-type</code> - The instance type.</p>
     *             </li>
     *          </ul>
     */
    Filters?: Filter[];
}
export declare namespace DescribeFleetInstancesRequest {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: DescribeFleetInstancesRequest) => any;
}
export interface DescribeFleetInstancesResult {
    /**
     * <p>The running instances. This list is refreshed periodically and might be out of
     *          date.</p>
     */
    ActiveInstances?: ActiveInstance[];
    /**
     * <p>The token for the next set of results.</p>
     */
    NextToken?: string;
    /**
     * <p>The ID of the EC2 Fleet.</p>
     */
    FleetId?: string;
}
export declare namespace DescribeFleetInstancesResult {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: DescribeFleetInstancesResult) => any;
}
export interface DescribeFleetsRequest {
    /**
     * <p>Checks whether you have the required permissions for the action, without actually making the request,
     *    and provides an error response. If you have the required permissions, the error response is <code>DryRunOperation</code>.
     *    Otherwise, it is <code>UnauthorizedOperation</code>.</p>
     */
    DryRun?: boolean;
    /**
     * <p>The maximum number of results to return in a single call. Specify a value between 1 and
     *          1000. The default value is 1000. To retrieve the remaining results, make another call with
     *          the returned <code>NextToken</code> value.</p>
     */
    MaxResults?: number;
    /**
     * <p>The token for the next set of results.</p>
     */
    NextToken?: string;
    /**
     * <p>The ID of the EC2 Fleets.</p>
     */
    FleetIds?: string[];
    /**
     * <p>The filters.</p>
     *          <ul>
     *             <li>
     *                <p>
     *                   <code>activity-status</code> - The progress of the EC2 Fleet ( <code>error</code> |
     *                   <code>pending-fulfillment</code> | <code>pending-termination</code> |
     *                   <code>fulfilled</code>).</p>
     *             </li>
     *             <li>
     *                <p>
     *                   <code>excess-capacity-termination-policy</code> - Indicates whether to terminate
     *                running instances if the target capacity is decreased below the current EC2 Fleet size
     *                   (<code>true</code> | <code>false</code>).</p>
     *             </li>
     *             <li>
     *                <p>
     *                   <code>fleet-state</code> - The state of the EC2 Fleet (<code>submitted</code> |
     *                   <code>active</code> | <code>deleted</code> | <code>failed</code> |
     *                   <code>deleted-running</code> | <code>deleted-terminating</code> |
     *                   <code>modifying</code>).</p>
     *             </li>
     *             <li>
     *                <p>
     *                   <code>replace-unhealthy-instances</code> - Indicates whether EC2 Fleet should replace
     *                unhealthy instances (<code>true</code> | <code>false</code>).</p>
     *             </li>
     *             <li>
     *                <p>
     *                   <code>type</code> - The type of request (<code>instant</code> |
     *                   <code>request</code> | <code>maintain</code>).</p>
     *             </li>
     *          </ul>
     */
    Filters?: Filter[];
}
export declare namespace DescribeFleetsRequest {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: DescribeFleetsRequest) => any;
}
export declare enum FleetActivityStatus {
    ERROR = "error",
    FULFILLED = "fulfilled",
    PENDING_FULFILLMENT = "pending_fulfillment",
    PENDING_TERMINATION = "pending_termination"
}
/**
 * <p>Describes the instances that could not be launched by the fleet.</p>
 */
export interface DescribeFleetError {
    /**
     * <p>The launch templates and overrides that were used for launching the instances. The
     *          values that you specify in the Overrides replace the values in the launch template.</p>
     */
    LaunchTemplateAndOverrides?: LaunchTemplateAndOverridesResponse;
    /**
     * <p>Indicates if the instance that could not be launched was a Spot Instance or On-Demand Instance.</p>
     */
    Lifecycle?: InstanceLifecycle | string;
    /**
     * <p>The error code that indicates why the instance could not be launched. For more
     *          information about error codes, see <a href="https://docs.aws.amazon.com/AWSEC2/latest/APIReference/errors-overview.html.html">Error Codes</a>.</p>
     */
    ErrorCode?: string;
    /**
     * <p>The error message that describes why the instance could not be launched. For more
     *          information about error messages, see <a href="https://docs.aws.amazon.com/AWSEC2/latest/APIReference/errors-overview.html.html">Error Codes</a>.</p>
     */
    ErrorMessage?: string;
}
export declare namespace DescribeFleetError {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: DescribeFleetError) => any;
}
/**
 * <p>Describes the instances that were launched by the fleet.</p>
 */
export interface DescribeFleetsInstances {
    /**
     * <p>The launch templates and overrides that were used for launching the instances. The
     *          values that you specify in the Overrides replace the values in the launch template.</p>
     */
    LaunchTemplateAndOverrides?: LaunchTemplateAndOverridesResponse;
    /**
     * <p>Indicates if the instance that was launched is a Spot Instance or On-Demand Instance.</p>
     */
    Lifecycle?: InstanceLifecycle | string;
    /**
     * <p>The IDs of the instances.</p>
     */
    InstanceIds?: string[];
    /**
     * <p>The instance type.</p>
     */
    InstanceType?: _InstanceType | string;
    /**
     * <p>The value is <code>Windows</code> for Windows instances. Otherwise, the value is
     *          blank.</p>
     */
    Platform?: PlatformValues | string;
}
export declare namespace DescribeFleetsInstances {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: DescribeFleetsInstances) => any;
}
/**
 * <p>Describes a launch template and overrides.</p>
 */
export interface FleetLaunchTemplateConfig {
    /**
     * <p>The launch template.</p>
     */
    LaunchTemplateSpecification?: FleetLaunchTemplateSpecification;
    /**
     * <p>Any parameters that you specify override the same parameters in the launch
     *          template.</p>
     */
    Overrides?: FleetLaunchTemplateOverrides[];
}
export declare namespace FleetLaunchTemplateConfig {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: FleetLaunchTemplateConfig) => any;
}
/**
 * <p>Describes the strategy for using unused Capacity Reservations for fulfilling On-Demand
 *          capacity.</p>
 *          <note>
 *             <p>This strategy can only be used if the EC2 Fleet is of type
 *             <code>instant</code>.</p>
 *          </note>
 *          <p>For more information about Capacity Reservations, see <a href="https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/ec2-capacity-reservations.html">On-Demand Capacity
 *             Reservations</a> in the <i>Amazon EC2 User Guide</i>. For examples of using
 *          Capacity Reservations in an EC2 Fleet, see <a href="https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/ec2-fleet-examples.html">EC2 Fleet example
 *             configurations</a> in the <i>Amazon EC2 User Guide</i>.</p>
 */
export interface CapacityReservationOptions {
    /**
     * <p>Indicates whether to use unused Capacity Reservations for fulfilling On-Demand capacity.</p>
     *          <p>If you specify <code>use-capacity-reservations-first</code>, the fleet uses unused
     *          Capacity Reservations to fulfill On-Demand capacity up to the target On-Demand capacity. If
     *          multiple instance pools have unused Capacity Reservations, the On-Demand allocation
     *          strategy (<code>lowest-price</code> or <code>prioritized</code>) is applied. If the number
     *          of unused Capacity Reservations is less than the On-Demand target capacity, the remaining
     *          On-Demand target capacity is launched according to the On-Demand allocation strategy
     *             (<code>lowest-price</code> or <code>prioritized</code>).</p>
     *          <p>If you do not specify a value, the fleet fulfils the On-Demand capacity according to the
     *          chosen On-Demand allocation strategy.</p>
     */
    UsageStrategy?: FleetCapacityReservationUsageStrategy | string;
}
export declare namespace CapacityReservationOptions {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: CapacityReservationOptions) => any;
}
/**
 * <p>Describes the configuration of On-Demand Instances in an EC2 Fleet.</p>
 */
export interface OnDemandOptions {
    /**
     * <p>The order of the launch template overrides to use in fulfilling On-Demand capacity. If
     *          you specify <code>lowest-price</code>, EC2 Fleet uses price to determine the order, launching
     *          the lowest price first. If you specify <code>prioritized</code>, EC2 Fleet uses the priority
     *          that you assigned to each launch template override, launching the highest priority first.
     *          If you do not specify a value, EC2 Fleet defaults to <code>lowest-price</code>.</p>
     */
    AllocationStrategy?: FleetOnDemandAllocationStrategy | string;
    /**
     * <p>The strategy for using unused Capacity Reservations for fulfilling On-Demand capacity.
     *          Supported only for fleets of type <code>instant</code>.</p>
     */
    CapacityReservationOptions?: CapacityReservationOptions;
    /**
     * <p>Indicates that the fleet uses a single instance type to launch all On-Demand Instances in the fleet.
     *          Supported only for fleets of type <code>instant</code>.</p>
     */
    SingleInstanceType?: boolean;
    /**
     * <p>Indicates that the fleet launches all On-Demand Instances into a single Availability Zone. Supported
     *          only for fleets of type <code>instant</code>.</p>
     */
    SingleAvailabilityZone?: boolean;
    /**
     * <p>The minimum target capacity for On-Demand Instances in the fleet. If the minimum target capacity is
     *          not reached, the fleet launches no instances.</p>
     */
    MinTargetCapacity?: number;
    /**
     * <p>The maximum amount per hour for On-Demand Instances that you're willing to pay.</p>
     */
    MaxTotalPrice?: string;
}
export declare namespace OnDemandOptions {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: OnDemandOptions) => any;
}
/**
 * <p>The strategy to use when Amazon EC2 emits a signal that your Spot Instance is at an
 *          elevated risk of being interrupted.</p>
 */
export interface FleetSpotCapacityRebalance {
    /**
     * <p>To allow EC2 Fleet to launch a replacement Spot Instance when an instance rebalance
     *          notification is emitted for an existing Spot Instance in the fleet, specify
     *             <code>launch</code>. Only available for fleets of type <code>maintain</code>.</p>
     *          <note>
     *             <p>When a replacement instance is launched, the instance marked for rebalance is not
     *             automatically terminated. You can terminate it, or you can leave it running. You are charged for both instances while they are running.</p>
     *          </note>
     */
    ReplacementStrategy?: FleetReplacementStrategy | string;
}
export declare namespace FleetSpotCapacityRebalance {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: FleetSpotCapacityRebalance) => any;
}
/**
 * <p>The strategies for managing your Spot Instances that are at an elevated risk of being
 *          interrupted.</p>
 */
export interface FleetSpotMaintenanceStrategies {
    /**
     * <p>The strategy to use when Amazon EC2 emits a signal that your Spot Instance is at an
     *          elevated risk of being interrupted.</p>
     */
    CapacityRebalance?: FleetSpotCapacityRebalance;
}
export declare namespace FleetSpotMaintenanceStrategies {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: FleetSpotMaintenanceStrategies) => any;
}
/**
 * <p>Describes the configuration of Spot Instances in an EC2 Fleet.</p>
 */
export interface SpotOptions {
    /**
     * <p>Indicates how to allocate the target Spot Instance capacity across the Spot Instance pools specified by
     *          the EC2 Fleet.</p>
     *          <p>If the allocation strategy is <code>lowest-price</code>, EC2 Fleet launches instances from
     *          the Spot Instance pools with the lowest price. This is the default allocation strategy.</p>
     *          <p>If the allocation strategy is <code>diversified</code>, EC2 Fleet launches instances from all
     *          of the Spot Instance pools that you specify.</p>
     *          <p>If the allocation strategy is <code>capacity-optimized</code> (recommended), EC2 Fleet
     *          launches instances from Spot Instance pools with optimal capacity for the number of instances that
     *          are launching. To give certain instance types a higher chance of launching first, use
     *             <code>capacity-optimized-prioritized</code>. Set a priority for each instance type by
     *          using the <code>Priority</code> parameter for <code>LaunchTemplateOverrides</code>. You can
     *          assign the same priority to different <code>LaunchTemplateOverrides</code>. EC2 implements
     *          the priorities on a best-effort basis, but optimizes for capacity first.
     *             <code>capacity-optimized-prioritized</code> is supported only if your fleet uses a
     *          launch template. Note that if the On-Demand <code>AllocationStrategy</code> is set to
     *             <code>prioritized</code>, the same priority is applied when fulfilling On-Demand
     *          capacity.</p>
     */
    AllocationStrategy?: SpotAllocationStrategy | string;
    /**
     * <p>The strategies for managing your workloads on your Spot Instances that will be
     *          interrupted. Currently only the capacity rebalance strategy is available.</p>
     */
    MaintenanceStrategies?: FleetSpotMaintenanceStrategies;
    /**
     * <p>The behavior when a Spot Instance is interrupted. The default is <code>terminate</code>.</p>
     */
    InstanceInterruptionBehavior?: SpotInstanceInterruptionBehavior | string;
    /**
     * <p>The number of Spot pools across which to allocate your target Spot capacity. Valid only
     *          when <b>AllocationStrategy</b> is set to
     *             <code>lowest-price</code>. EC2 Fleet selects the cheapest Spot pools and evenly allocates
     *          your target Spot capacity across the number of Spot pools that you specify.</p>
     */
    InstancePoolsToUseCount?: number;
    /**
     * <p>Indicates that the fleet uses a single instance type to launch all Spot Instances in the fleet.
     *          Supported only for fleets of type <code>instant</code>.</p>
     */
    SingleInstanceType?: boolean;
    /**
     * <p>Indicates that the fleet launches all Spot Instances into a single Availability Zone. Supported
     *          only for fleets of type <code>instant</code>.</p>
     */
    SingleAvailabilityZone?: boolean;
    /**
     * <p>The minimum target capacity for Spot Instances in the fleet. If the minimum target capacity is
     *          not reached, the fleet launches no instances.</p>
     */
    MinTargetCapacity?: number;
    /**
     * <p>The maximum amount per hour for Spot Instances that you're willing to pay.</p>
     */
    MaxTotalPrice?: string;
}
export declare namespace SpotOptions {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: SpotOptions) => any;
}
/**
 * <p>The number of units to request. You can choose to set the target capacity in terms of
 *          instances or a performance characteristic that is important to your application workload,
 *          such as vCPUs, memory, or I/O. If the request type is <code>maintain</code>, you can
 *          specify a target capacity of 0 and add capacity later.</p>
 *          <p>You can use the On-Demand Instance <code>MaxTotalPrice</code> parameter, the Spot Instance
 *             <code>MaxTotalPrice</code>, or both to ensure that your fleet cost does not exceed your
 *          budget. If you set a maximum price per hour for the On-Demand Instances and Spot Instances in your request, EC2 Fleet
 *          will launch instances until it reaches the maximum amount that you're willing to pay. When
 *          the maximum amount you're willing to pay is reached, the fleet stops launching instances
 *          even if it hasn’t met the target capacity. The <code>MaxTotalPrice</code> parameters are
 *          located in <a href="https://docs.aws.amazon.com/AWSEC2/latest/APIReference/API_OnDemandOptions.html">OnDemandOptions</a>
 *          and <a href="https://docs.aws.amazon.com/AWSEC2/latest/APIReference/API_SpotOptions">SpotOptions</a>.</p>
 */
export interface TargetCapacitySpecification {
    /**
     * <p>The number of units to request, filled using
     *          <code>DefaultTargetCapacityType</code>.</p>
     */
    TotalTargetCapacity?: number;
    /**
     * <p>The number of On-Demand units to request. If you specify a target capacity for Spot units, you cannot specify a target capacity for On-Demand units.</p>
     */
    OnDemandTargetCapacity?: number;
    /**
     * <p>The maximum number of Spot units to launch. If you specify a target capacity for On-Demand units, you cannot specify a target capacity for Spot units.</p>
     */
    SpotTargetCapacity?: number;
    /**
     * <p>The default <code>TotalTargetCapacity</code>, which is either <code>Spot</code> or
     *             <code>On-Demand</code>.</p>
     */
    DefaultTargetCapacityType?: DefaultTargetCapacityType | string;
}
export declare namespace TargetCapacitySpecification {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: TargetCapacitySpecification) => any;
}
/**
 * <p>Describes an EC2 Fleet.</p>
 */
export interface FleetData {
    /**
     * <p>The progress of the EC2 Fleet. If there is an error, the status is <code>error</code>. After
     *          all requests are placed, the status is <code>pending_fulfillment</code>. If the size of the
     *          EC2 Fleet is equal to or greater than its target capacity, the status is <code>fulfilled</code>.
     *          If the size of the EC2 Fleet is decreased, the status is <code>pending_termination</code> while
     *          instances are terminating.</p>
     */
    ActivityStatus?: FleetActivityStatus | string;
    /**
     * <p>The creation date and time of the EC2 Fleet.</p>
     */
    CreateTime?: Date;
    /**
     * <p>The ID of the EC2 Fleet.</p>
     */
    FleetId?: string;
    /**
     * <p>The state of the EC2 Fleet.</p>
     */
    FleetState?: FleetStateCode | string;
    /**
     * <p>Unique, case-sensitive identifier that you provide to ensure the idempotency of the
     *          request. For more information, see <a href="https://docs.aws.amazon.com/AWSEC2/latest/APIReference/Run_Instance_Idempotency.html">Ensuring
     *             Idempotency</a>.</p>
     *          <p>Constraints: Maximum 64 ASCII characters</p>
     */
    ClientToken?: string;
    /**
     * <p>Indicates whether running instances should be terminated if the target capacity of the
     *          EC2 Fleet is decreased below the current size of the EC2 Fleet.</p>
     */
    ExcessCapacityTerminationPolicy?: FleetExcessCapacityTerminationPolicy | string;
    /**
     * <p>The number of units fulfilled by this request compared to the set target
     *          capacity.</p>
     */
    FulfilledCapacity?: number;
    /**
     * <p>The number of units fulfilled by this request compared to the set target On-Demand
     *          capacity.</p>
     */
    FulfilledOnDemandCapacity?: number;
    /**
     * <p>The launch template and overrides.</p>
     */
    LaunchTemplateConfigs?: FleetLaunchTemplateConfig[];
    /**
     * <p>The number of units to request. You can choose to set the target capacity in terms of
     *          instances or a performance characteristic that is important to your application workload,
     *          such as vCPUs, memory, or I/O. If the request type is <code>maintain</code>, you can
     *          specify a target capacity of 0 and add capacity later.</p>
     */
    TargetCapacitySpecification?: TargetCapacitySpecification;
    /**
     * <p>Indicates whether running instances should be terminated when the EC2 Fleet expires. </p>
     */
    TerminateInstancesWithExpiration?: boolean;
    /**
     * <p>The type of request. Indicates whether the EC2 Fleet only <code>requests</code> the target
     *          capacity, or also attempts to <code>maintain</code> it. If you request a certain target
     *          capacity, EC2 Fleet only places the required requests; it does not attempt to replenish
     *          instances if capacity is diminished, and it does not submit requests in alternative
     *          capacity pools if capacity is unavailable. To maintain a certain target capacity, EC2 Fleet
     *          places the required requests to meet this target capacity. It also automatically
     *          replenishes any interrupted Spot Instances. Default: <code>maintain</code>.</p>
     */
    Type?: FleetType | string;
    /**
     * <p>The start date and time of the request, in UTC format (for example,
     *             <i>YYYY</i>-<i>MM</i>-<i>DD</i>T<i>HH</i>:<i>MM</i>:<i>SS</i>Z).
     *          The default is to start fulfilling the request immediately. </p>
     */
    ValidFrom?: Date;
    /**
     * <p>The end date and time of the request, in UTC format (for example,
     *             <i>YYYY</i>-<i>MM</i>-<i>DD</i>T<i>HH</i>:<i>MM</i>:<i>SS</i>Z).
     *          At this point, no new instance requests are placed or able to fulfill the request. The
     *          default end date is 7 days from the current date. </p>
     */
    ValidUntil?: Date;
    /**
     * <p>Indicates whether EC2 Fleet should replace unhealthy Spot Instances. Supported only for
     *          fleets of type <code>maintain</code>. For more information, see <a href="https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/manage-ec2-fleet.html#ec2-fleet-health-checks">EC2 Fleet
     *             health checks</a> in the <i>Amazon EC2 User Guide</i>.</p>
     */
    ReplaceUnhealthyInstances?: boolean;
    /**
     * <p>The configuration of Spot Instances in an EC2 Fleet.</p>
     */
    SpotOptions?: SpotOptions;
    /**
     * <p>The allocation strategy of On-Demand Instances in an EC2 Fleet.</p>
     */
    OnDemandOptions?: OnDemandOptions;
    /**
     * <p>The tags for an EC2 Fleet resource.</p>
     */
    Tags?: Tag[];
    /**
     * <p>Information about the instances that could not be launched by the fleet. Valid only when
     *             <b>Type</b> is set to <code>instant</code>.</p>
     */
    Errors?: DescribeFleetError[];
    /**
     * <p>Information about the instances that were launched by the fleet. Valid only when
     *             <b>Type</b> is set to <code>instant</code>.</p>
     */
    Instances?: DescribeFleetsInstances[];
}
export declare namespace FleetData {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: FleetData) => any;
}
export interface DescribeFleetsResult {
    /**
     * <p>The token for the next set of results.</p>
     */
    NextToken?: string;
    /**
     * <p>Information about the EC2 Fleets.</p>
     */
    Fleets?: FleetData[];
}
export declare namespace DescribeFleetsResult {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: DescribeFleetsResult) => any;
}
export interface DescribeFlowLogsRequest {
    /**
     * <p>Checks whether you have the required permissions for the action, without actually making the request,
     *    and provides an error response. If you have the required permissions, the error response is <code>DryRunOperation</code>.
     *    Otherwise, it is <code>UnauthorizedOperation</code>.</p>
     */
    DryRun?: boolean;
    /**
     * <p>One or more filters.</p>
     *         <ul>
     *             <li>
     *                 <p>
     *                     <code>deliver-log-status</code> - The status of the logs delivery (<code>SUCCESS</code> |
     *                     <code>FAILED</code>).</p>
     *             </li>
     *             <li>
     *                 <p>
     *                     <code>log-destination-type</code> - The type of destination to which the flow
     *                     log publishes data. Possible destination types include
     *                     <code>cloud-watch-logs</code> and <code>s3</code>.</p>
     *             </li>
     *             <li>
     *                 <p>
     *                     <code>flow-log-id</code> - The ID of the flow log.</p>
     *             </li>
     *             <li>
     *                 <p>
     *                     <code>log-group-name</code> - The name of the log group.</p>
     *             </li>
     *             <li>
     *                 <p>
     *                     <code>resource-id</code> - The ID of the VPC, subnet, or network interface.</p>
     *             </li>
     *             <li>
     *                 <p>
     *                     <code>traffic-type</code> - The type of traffic (<code>ACCEPT</code> |
     *                     <code>REJECT</code> | <code>ALL</code>).</p>
     *             </li>
     *             <li>
     *                <p>
     *                   <code>tag</code>:<key> - The key/value combination of a tag assigned to the resource. Use the tag key in the filter name and the tag value as the filter value.
     *     For example, to find all resources that have a tag with the key <code>Owner</code> and the value <code>TeamA</code>, specify <code>tag:Owner</code> for the filter name and <code>TeamA</code> for the filter value.</p>
     *             </li>
     *             <li>
     *                <p>
     *                   <code>tag-key</code> - The key of a tag assigned to the resource. Use this filter to find all resources assigned a tag with a specific key, regardless of the tag value.</p>
     *             </li>
     *          </ul>
     */
    Filter?: Filter[];
    /**
     * <p>One or more flow log IDs.</p>
     *         <p>Constraint: Maximum of 1000 flow log IDs.</p>
     */
    FlowLogIds?: string[];
    /**
     * <p>The maximum number of results to return with a single call.
     * 	To retrieve the remaining results, make another call with the returned <code>nextToken</code> value.</p>
     */
    MaxResults?: number;
    /**
     * <p>The token for the next page of results.</p>
     */
    NextToken?: string;
}
export declare namespace DescribeFlowLogsRequest {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: DescribeFlowLogsRequest) => any;
}
/**
 * <p>Describes a flow log.</p>
 */
export interface FlowLog {
    /**
     * <p>The date and time the flow log was created.</p>
     */
    CreationTime?: Date;
    /**
     * <p>Information about the error that occurred. <code>Rate limited</code> indicates that
     *             CloudWatch Logs throttling has been applied for one or more network interfaces, or that you've
     *             reached the limit on the number of log groups that you can create. <code>Access
     *                 error</code> indicates that the IAM role associated with the flow log does not have
     *             sufficient permissions to publish to CloudWatch Logs. <code>Unknown error</code> indicates an
     *             internal error.</p>
     */
    DeliverLogsErrorMessage?: string;
    /**
     * <p>The ARN of the IAM role that posts logs to CloudWatch Logs.</p>
     */
    DeliverLogsPermissionArn?: string;
    /**
     * <p>The status of the logs delivery (<code>SUCCESS</code> | <code>FAILED</code>).</p>
     */
    DeliverLogsStatus?: string;
    /**
     * <p>The flow log ID.</p>
     */
    FlowLogId?: string;
    /**
     * <p>The status of the flow log (<code>ACTIVE</code>).</p>
     */
    FlowLogStatus?: string;
    /**
     * <p>The name of the flow log group.</p>
     */
    LogGroupName?: string;
    /**
     * <p>The ID of the resource on which the flow log was created.</p>
     */
    ResourceId?: string;
    /**
     * <p>The type of traffic captured for the flow log.</p>
     */
    TrafficType?: TrafficType | string;
    /**
     * <p>Specifies the type of destination to which the flow log data is published. Flow log data can be
     *             published to CloudWatch Logs or Amazon S3.</p>
     */
    LogDestinationType?: LogDestinationType | string;
    /**
     * <p>Specifies the destination to which the flow log data is published. Flow log data can be
     *             published to an CloudWatch Logs log group or an Amazon S3 bucket. If the flow log publishes to CloudWatch Logs,
     *             this element indicates the Amazon Resource Name (ARN) of the CloudWatch Logs log group to which
     *             the data is published. If the flow log publishes to Amazon S3, this element indicates the ARN
     *             of the Amazon S3 bucket to which the data is published.</p>
     */
    LogDestination?: string;
    /**
     * <p>The format of the flow log record.</p>
     */
    LogFormat?: string;
    /**
     * <p>The tags for the flow log.</p>
     */
    Tags?: Tag[];
    /**
     * <p>The maximum interval of time, in seconds, during which a flow of packets is captured and aggregated into a flow log record.</p>
     *         <p>When a network interface is attached to a <a href="https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/instance-types.html#ec2-nitro-instances">Nitro-based
     *                 instance</a>, the aggregation interval is always 60 seconds (1 minute) or less,
     *             regardless of the specified value.</p>
     *         <p>Valid Values: <code>60</code> | <code>600</code>
     *          </p>
     */
    MaxAggregationInterval?: number;
}
export declare namespace FlowLog {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: FlowLog) => any;
}
export interface DescribeFlowLogsResult {
    /**
     * <p>Information about the flow logs.</p>
     */
    FlowLogs?: FlowLog[];
    /**
     * <p>The token to use to retrieve the next page of results. This value is <code>null</code> when there are no more results to return.</p>
     */
    NextToken?: string;
}
export declare namespace DescribeFlowLogsResult {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: DescribeFlowLogsResult) => any;
}
export declare type FpgaImageAttributeName = "description" | "loadPermission" | "name" | "productCodes";
export interface DescribeFpgaImageAttributeRequest {
    /**
     * <p>Checks whether you have the required permissions for the action, without actually making the request,
     *    and provides an error response. If you have the required permissions, the error response is <code>DryRunOperation</code>.
     *    Otherwise, it is <code>UnauthorizedOperation</code>.</p>
     */
    DryRun?: boolean;
    /**
     * <p>The ID of the AFI.</p>
     */
    FpgaImageId: string | undefined;
    /**
     * <p>The AFI attribute.</p>
     */
    Attribute: FpgaImageAttributeName | string | undefined;
}
export declare namespace DescribeFpgaImageAttributeRequest {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: DescribeFpgaImageAttributeRequest) => any;
}
export declare type PermissionGroup = "all";
/**
 * <p>Describes a load permission.</p>
 */
export interface LoadPermission {
    /**
     * <p>The AWS account ID.</p>
     */
    UserId?: string;
    /**
     * <p>The name of the group.</p>
     */
    Group?: PermissionGroup | string;
}
export declare namespace LoadPermission {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: LoadPermission) => any;
}
export declare type ProductCodeValues = "devpay" | "marketplace";
/**
 * <p>Describes a product code.</p>
 */
export interface ProductCode {
    /**
     * <p>The product code.</p>
     */
    ProductCodeId?: string;
    /**
     * <p>The type of product code.</p>
     */
    ProductCodeType?: ProductCodeValues | string;
}
export declare namespace ProductCode {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: ProductCode) => any;
}
/**
 * <p>Describes an Amazon FPGA image (AFI) attribute.</p>
 */
export interface FpgaImageAttribute {
    /**
     * <p>The ID of the AFI.</p>
     */
    FpgaImageId?: string;
    /**
     * <p>The name of the AFI.</p>
     */
    Name?: string;
    /**
     * <p>The description of the AFI.</p>
     */
    Description?: string;
    /**
     * <p>The load permissions.</p>
     */
    LoadPermissions?: LoadPermission[];
    /**
     * <p>The product codes.</p>
     */
    ProductCodes?: ProductCode[];
}
export declare namespace FpgaImageAttribute {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: FpgaImageAttribute) => any;
}
export interface DescribeFpgaImageAttributeResult {
    /**
     * <p>Information about the attribute.</p>
     */
    FpgaImageAttribute?: FpgaImageAttribute;
}
export declare namespace DescribeFpgaImageAttributeResult {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: DescribeFpgaImageAttributeResult) => any;
}
export interface DescribeFpgaImagesRequest {
    /**
     * <p>Checks whether you have the required permissions for the action, without actually making the request,
     *    and provides an error response. If you have the required permissions, the error response is <code>DryRunOperation</code>.
     *    Otherwise, it is <code>UnauthorizedOperation</code>.</p>
     */
    DryRun?: boolean;
    /**
     * <p>The AFI IDs.</p>
     */
    FpgaImageIds?: string[];
    /**
     * <p>Filters the AFI by owner. Specify an AWS account ID, <code>self</code> (owner is the sender of the request), or an AWS owner alias (valid values are <code>amazon</code> | <code>aws-marketplace</code>).</p>
     */
    Owners?: string[];
    /**
     * <p>The filters.</p>
     * 		       <ul>
     *             <li>
     *                <p>
     *                   <code>create-time</code> - The creation time of the AFI.</p>
     *             </li>
     *             <li>
     *                <p>
     *                   <code>fpga-image-id</code> - The FPGA image identifier (AFI ID).</p>
     *             </li>
     *             <li>
     *                <p>
     *                   <code>fpga-image-global-id</code> - The global FPGA image identifier (AGFI ID).</p>
     *             </li>
     *             <li>
     *                <p>
     *                   <code>name</code> - The name of the AFI.</p>
     *             </li>
     *             <li>
     *                <p>
     *                   <code>owner-id</code> - The AWS account ID of the AFI owner.</p>
     *             </li>
     *             <li>
     *                <p>
     *                   <code>product-code</code> - The product code.</p>
     *             </li>
     *             <li>
     *                <p>
     *                   <code>shell-version</code> - The version of the AWS Shell that was used to create the bitstream.</p>
     *             </li>
     *             <li>
     *                <p>
     *                   <code>state</code> - The state of the AFI (<code>pending</code> | <code>failed</code> | <code>available</code> | <code>unavailable</code>).</p>
     *             </li>
     *             <li>
     *                <p>
     *                   <code>tag</code>:<key> - The key/value combination of a tag assigned to the resource. Use the tag key in the filter name and the tag value as the filter value.
     *     For example, to find all resources that have a tag with the key <code>Owner</code> and the value <code>TeamA</code>, specify <code>tag:Owner</code> for the filter name and <code>TeamA</code> for the filter value.</p>
     *             </li>
     *             <li>
     *                <p>
     *                   <code>tag-key</code> - The key of a tag assigned to the resource. Use this filter to find all resources assigned a tag with a specific key, regardless of the tag value.</p>
     *             </li>
     *             <li>
     *                <p>
     *                   <code>update-time</code> - The time of the most recent update.</p>
     *             </li>
     *          </ul>
     */
    Filters?: Filter[];
    /**
     * <p>The token to retrieve the next page of results.</p>
     */
    NextToken?: string;
    /**
     * <p>The maximum number of results to return in a single call.</p>
     */
    MaxResults?: number;
}
export declare namespace DescribeFpgaImagesRequest {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: DescribeFpgaImagesRequest) => any;
}
/**
 * <p>Describes the data that identifies an Amazon FPGA image (AFI) on the PCI bus.</p>
 */
export interface PciId {
    /**
     * <p>The ID of the device.</p>
     */
    DeviceId?: string;
    /**
     * <p>The ID of the vendor.</p>
     */
    VendorId?: string;
    /**
     * <p>The ID of the subsystem.</p>
     */
    SubsystemId?: string;
    /**
     * <p>The ID of the vendor for the subsystem.</p>
     */
    SubsystemVendorId?: string;
}
export declare namespace PciId {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: PciId) => any;
}
export declare type FpgaImageStateCode = "available" | "failed" | "pending" | "unavailable";
/**
 * <p>Describes the state of the bitstream generation process for an Amazon FPGA image (AFI).</p>
 */
export interface FpgaImageState {
    /**
     * <p>The state. The following are the possible values:</p>
     * 		       <ul>
     *             <li>
     *                <p>
     *                   <code>pending</code> - AFI bitstream generation is in progress.</p>
     *             </li>
     *             <li>
     *                <p>
     *                   <code>available</code> - The AFI is available for use.</p>
     *             </li>
     *             <li>
     *                <p>
     *                   <code>failed</code> - AFI bitstream generation failed.</p>
     *             </li>
     *             <li>
     *                <p>
     *                   <code>unavailable</code> - The AFI is no longer available for use.</p>
     *             </li>
     *          </ul>
     */
    Code?: FpgaImageStateCode | string;
    /**
     * <p>If the state is <code>failed</code>, this is the error message.</p>
     */
    Message?: string;
}
export declare namespace FpgaImageState {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: FpgaImageState) => any;
}
/**
 * <p>Describes an Amazon FPGA image (AFI).</p>
 */
export interface FpgaImage {
    /**
     * <p>The FPGA image identifier (AFI ID).</p>
     */
    FpgaImageId?: string;
    /**
     * <p>The global FPGA image identifier (AGFI ID).</p>
     */
    FpgaImageGlobalId?: string;
    /**
     * <p>The name of the AFI.</p>
     */
    Name?: string;
    /**
     * <p>The description of the AFI.</p>
     */
    Description?: string;
    /**
     * <p>The version of the AWS Shell that was used to create the bitstream.</p>
     */
    ShellVersion?: string;
    /**
     * <p>Information about the PCI bus.</p>
     */
    PciId?: PciId;
    /**
     * <p>Information about the state of the AFI.</p>
     */
    State?: FpgaImageState;
    /**
     * <p>The date and time the AFI was created.</p>
     */
    CreateTime?: Date;
    /**
     * <p>The time of the most recent update to the AFI.</p>
     */
    UpdateTime?: Date;
    /**
     * <p>The AWS account ID of the AFI owner.</p>
     */
    OwnerId?: string;
    /**
     * <p>The alias of the AFI owner. Possible values include <code>self</code>, <code>amazon</code>, and <code>aws-marketplace</code>.</p>
     */
    OwnerAlias?: string;
    /**
     * <p>The product codes for the AFI.</p>
     */
    ProductCodes?: ProductCode[];
    /**
     * <p>Any tags assigned to the AFI.</p>
     */
    Tags?: Tag[];
    /**
     * <p>Indicates whether the AFI is public.</p>
     */
    Public?: boolean;
    /**
     * <p>Indicates whether data retention support is enabled for the AFI.</p>
     */
    DataRetentionSupport?: boolean;
}
export declare namespace FpgaImage {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: FpgaImage) => any;
}
export interface DescribeFpgaImagesResult {
    /**
     * <p>Information about the FPGA images.</p>
     */
    FpgaImages?: FpgaImage[];
    /**
     * <p>The token to use to retrieve the next page of results. This value is <code>null</code> when there are no more results to return.</p>
     */
    NextToken?: string;
}
export declare namespace DescribeFpgaImagesResult {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: DescribeFpgaImagesResult) => any;
}
export interface DescribeHostReservationOfferingsRequest {
    /**
     * <p>The filters.</p>
     *         <ul>
     *             <li>
     *                 <p>
     *                     <code>instance-family</code> - The instance family of the offering (for example,
     *                         <code>m4</code>).</p>
     *             </li>
     *             <li>
     *                 <p>
     *                     <code>payment-option</code> - The payment option (<code>NoUpfront</code> |
     *                         <code>PartialUpfront</code> | <code>AllUpfront</code>).</p>
     *             </li>
     *          </ul>
     */
    Filter?: Filter[];
    /**
     * <p>This is the maximum duration of the reservation to purchase, specified in seconds.
     *             Reservations are available in one-year and three-year terms. The number of seconds
     *             specified must be the number of seconds in a year (365x24x60x60) times one of the
     *             supported durations (1 or 3). For example, specify 94608000 for three years.</p>
     */
    MaxDuration?: number;
    /**
     * <p>The maximum number of results to return for the request in a single page. The remaining results can be seen by sending another request with the returned <code>nextToken</code> value. This value can be between 5 and 500. If <code>maxResults</code> is given a larger value than 500, you receive an error.</p>
     */
    MaxResults?: number;
    /**
     * <p>This is the minimum duration of the reservation you'd like to purchase, specified
     *             in seconds. Reservations are available in one-year and three-year terms. The number of
     *             seconds specified must be the number of seconds in a year (365x24x60x60) times one of
     *             the supported durations (1 or 3). For example, specify 31536000 for one year.</p>
     */
    MinDuration?: number;
    /**
     * <p>The token to use to retrieve the next page of results.</p>
     */
    NextToken?: string;
    /**
     * <p>The ID of the reservation offering.</p>
     */
    OfferingId?: string;
}
export declare namespace DescribeHostReservationOfferingsRequest {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: DescribeHostReservationOfferingsRequest) => any;
}
export declare enum PaymentOption {
    ALL_UPFRONT = "AllUpfront",
    NO_UPFRONT = "NoUpfront",
    PARTIAL_UPFRONT = "PartialUpfront"
}
/**
 * <p>Details about the Dedicated Host Reservation offering.</p>
 */
export interface HostOffering {
    /**
     * <p>The currency of the offering.</p>
     */
    CurrencyCode?: CurrencyCodeValues | string;
    /**
     * <p>The duration of the offering (in seconds).</p>
     */
    Duration?: number;
    /**
     * <p>The hourly price of the offering.</p>
     */
    HourlyPrice?: string;
    /**
     * <p>The instance family of the offering.</p>
     */
    InstanceFamily?: string;
    /**
     * <p>The ID of the offering.</p>
     */
    OfferingId?: string;
    /**
     * <p>The available payment option.</p>
     */
    PaymentOption?: PaymentOption | string;
    /**
     * <p>The upfront price of the offering. Does not apply to No Upfront
     *             offerings.</p>
     */
    UpfrontPrice?: string;
}
export declare namespace HostOffering {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: HostOffering) => any;
}
export interface DescribeHostReservationOfferingsResult {
    /**
     * <p>The token to use to retrieve the next page of results. This value is <code>null</code> when there are no more results to return.</p>
     */
    NextToken?: string;
    /**
     * <p>Information about the offerings.</p>
     */
    OfferingSet?: HostOffering[];
}
export declare namespace DescribeHostReservationOfferingsResult {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: DescribeHostReservationOfferingsResult) => any;
}
export interface DescribeHostReservationsRequest {
    /**
     * <p>The filters.</p>
     *         <ul>
     *             <li>
     *                 <p>
     *                     <code>instance-family</code> - The instance family (for example,
     *                     <code>m4</code>).</p>
     *             </li>
     *             <li>
     *                 <p>
     *                     <code>payment-option</code> - The payment option (<code>NoUpfront</code> |
     *                         <code>PartialUpfront</code> | <code>AllUpfront</code>).</p>
     *             </li>
     *             <li>
     *                 <p>
     *                     <code>state</code> - The state of the reservation (<code>payment-pending</code>
     *                     | <code>payment-failed</code> | <code>active</code> |
     *                     <code>retired</code>).</p>
     *             </li>
     *             <li>
     *         		     <p>
     *                   <code>tag</code>:<key> - The key/value combination of a tag assigned to the resource. Use the tag key in the filter name and the tag value as the filter value.
     *     For example, to find all resources that have a tag with the key <code>Owner</code> and the value <code>TeamA</code>, specify <code>tag:Owner</code> for the filter name and <code>TeamA</code> for the filter value.</p>
     *         	   </li>
     *             <li>
     *         		     <p>
     *                   <code>tag-key</code> - The key of a tag assigned to the resource. Use this filter to find all resources assigned a tag with a specific key, regardless of the tag value.</p>
     *         	   </li>
     *          </ul>
     */
    Filter?: Filter[];
    /**
     * <p>The host reservation IDs.</p>
     */
    HostReservationIdSet?: string[];
    /**
     * <p>The maximum number of results to return for the request in a single page. The remaining results can be seen by sending another request with the returned <code>nextToken</code> value. This value can be between 5 and 500. If <code>maxResults</code> is given a larger value than 500, you receive an error.</p>
     */
    MaxResults?: number;
    /**
     * <p>The token to use to retrieve the next page of results.</p>
     */
    NextToken?: string;
}
export declare namespace DescribeHostReservationsRequest {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: DescribeHostReservationsRequest) => any;
}
export declare enum ReservationState {
    ACTIVE = "active",
    PAYMENT_FAILED = "payment-failed",
    PAYMENT_PENDING = "payment-pending",
    RETIRED = "retired"
}
/**
 * <p>Details about the Dedicated Host Reservation and associated Dedicated
 *             Hosts.</p>
 */
export interface HostReservation {
    /**
     * <p>The number of Dedicated Hosts the reservation is associated with.</p>
     */
    Count?: number;
    /**
     * <p>The currency in which the <code>upfrontPrice</code> and <code>hourlyPrice</code>
     *             amounts are specified. At this time, the only supported currency is
     *             <code>USD</code>.</p>
     */
    CurrencyCode?: CurrencyCodeValues | string;
    /**
     * <p>The length of the reservation's term, specified in seconds. Can be <code>31536000
     *                 (1 year)</code> | <code>94608000 (3 years)</code>.</p>
     */
    Duration?: number;
    /**
     * <p>The date and time that the reservation ends.</p>
     */
    End?: Date;
    /**
     * <p>The IDs of the Dedicated Hosts associated with the reservation.</p>
     */
    HostIdSet?: string[];
    /**
     * <p>The ID of the reservation that specifies the associated Dedicated Hosts.</p>
     */
    HostReservationId?: string;
    /**
     * <p>The hourly price of the reservation.</p>
     */
    HourlyPrice?: string;
    /**
     * <p>The instance family of the Dedicated Host Reservation. The instance family on the
     *             Dedicated Host must be the same in order for it to benefit from the
     *             reservation.</p>
     */
    InstanceFamily?: string;
    /**
     * <p>The ID of the reservation. This remains the same regardless of which Dedicated
     *             Hosts are associated with it.</p>
     */
    OfferingId?: string;
    /**
     * <p>The payment option selected for this reservation.</p>
     */
    PaymentOption?: PaymentOption | string;
    /**
     * <p>The date and time that the reservation started.</p>
     */
    Start?: Date;
    /**
     * <p>The state of the reservation.</p>
     */
    State?: ReservationState | string;
    /**
     * <p>The upfront price of the reservation.</p>
     */
    UpfrontPrice?: string;
    /**
     * <p>Any tags assigned to the Dedicated Host Reservation.</p>
     */
    Tags?: Tag[];
}
export declare namespace HostReservation {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: HostReservation) => any;
}
export interface DescribeHostReservationsResult {
    /**
     * <p>Details about the reservation's configuration.</p>
     */
    HostReservationSet?: HostReservation[];
    /**
     * <p>The token to use to retrieve the next page of results. This value is <code>null</code> when there are no more results to return.</p>
     */
    NextToken?: string;
}
export declare namespace DescribeHostReservationsResult {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: DescribeHostReservationsResult) => any;
}
export interface DescribeHostsRequest {
    /**
     * <p>The filters.</p>
     *         <ul>
     *             <li>
     *                 <p>
     *                   <code>auto-placement</code> - Whether auto-placement is enabled or disabled
     *                         (<code>on</code> | <code>off</code>).</p>
     *             </li>
     *             <li>
     *                 <p>
     *                   <code>availability-zone</code> - The Availability Zone of the
     *                     host.</p>
     *             </li>
     *             <li>
     *                 <p>
     *                   <code>client-token</code> - The idempotency token that you provided when you
     *                     allocated the host.</p>
     *             </li>
     *             <li>
     *                 <p>
     *                   <code>host-reservation-id</code> - The ID of the reservation assigned to
     *                     this host.</p>
     *             </li>
     *             <li>
     *                 <p>
     *                   <code>instance-type</code> - The instance type size that the Dedicated Host
     *                     is configured to support.</p>
     *             </li>
     *             <li>
     *                 <p>
     *                   <code>state</code> - The allocation state of the Dedicated Host
     *                         (<code>available</code> | <code>under-assessment</code> |
     *                         <code>permanent-failure</code> | <code>released</code> |
     *                         <code>released-permanent-failure</code>).</p>
     *             </li>
     *             <li>
     *         		     <p>
     *                   <code>tag-key</code> - The key of a tag assigned to the resource. Use this filter to find all resources assigned a tag with a specific key, regardless of the tag value.</p>
     *         	   </li>
     *          </ul>
     */
    Filter?: Filter[];
    /**
     * <p>The IDs of the Dedicated Hosts. The IDs are used for targeted instance
     *             launches.</p>
     */
    HostIds?: string[];
    /**
     * <p>The maximum number of results to return for the request in a single page. The remaining results can be seen by sending another request with the returned <code>nextToken</code> value. This value can be between 5 and 500. If <code>maxResults</code> is given a larger value than 500, you receive an error.</p>
     *          <p>You cannot specify this parameter and the host IDs parameter in the same request.</p>
     */
    MaxResults?: number;
    /**
     * <p>The token to use to retrieve the next page of results.</p>
     */
    NextToken?: string;
}
export declare namespace DescribeHostsRequest {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: DescribeHostsRequest) => any;
}
/**
 * <p>Information about the number of instances that can be launched onto the Dedicated
 *     		Host.</p>
 */
export interface InstanceCapacity {
    /**
     * <p>The number of instances that can be launched onto the Dedicated Host based on the
     *     		host's available capacity.</p>
     */
    AvailableCapacity?: number;
    /**
     * <p>The instance type supported by the Dedicated Host.</p>
     */
    InstanceType?: string;
    /**
     * <p>The total number of instances that can be launched onto the Dedicated Host if there
     *     		are no instances running on it.</p>
     */
    TotalCapacity?: number;
}
export declare namespace InstanceCapacity {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: InstanceCapacity) => any;
}
/**
 * <p>The capacity information for instances that can be launched onto the Dedicated Host. </p>
 */
export interface AvailableCapacity {
    /**
     * <p>The number of instances that can be launched onto the Dedicated Host depending on
     *     		the host's available capacity. For Dedicated Hosts that support multiple instance types,
     *     		this parameter represents the number of instances for each instance size that is
     *     		supported on the host.</p>
     */
    AvailableInstanceCapacity?: InstanceCapacity[];
    /**
     * <p>The number of vCPUs available for launching instances onto the Dedicated Host.</p>
     */
    AvailableVCpus?: number;
}
export declare namespace AvailableCapacity {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: AvailableCapacity) => any;
}
/**
 * <p>Describes the properties of a Dedicated Host.</p>
 */
export interface HostProperties {
    /**
     * <p>The number of cores on the Dedicated Host.</p>
     */
    Cores?: number;
    /**
     * <p>The instance type supported by the Dedicated Host. For example, <code>m5.large</code>.
     *         	If the host supports multiple instance types, no <b>instanceType</b>
     *         	is returned.</p>
     */
    InstanceType?: string;
    /**
     * <p>The instance family supported by the Dedicated Host. For example, <code>m5</code>.</p>
     */
    InstanceFamily?: string;
    /**
     * <p>The number of sockets on the Dedicated Host.</p>
     */
    Sockets?: number;
    /**
     * <p>The total number of vCPUs on the Dedicated Host.</p>
     */
    TotalVCpus?: number;
}
export declare namespace HostProperties {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: HostProperties) => any;
}
/**
 * <p>Describes an instance running on a Dedicated Host.</p>
 */
export interface HostInstance {
    /**
     * <p>The ID of instance that is running on the Dedicated Host.</p>
     */
    InstanceId?: string;
    /**
     * <p>The instance type (for example, <code>m3.medium</code>) of the running instance.</p>
     */
    InstanceType?: string;
    /**
     * <p>The ID of the AWS account that owns the instance.</p>
     */
    OwnerId?: string;
}
export declare namespace HostInstance {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: HostInstance) => any;
}
/**
 * <p>Describes the properties of the Dedicated Host.</p>
 */
export interface Host {
    /**
     * <p>Whether auto-placement is on or off.</p>
     */
    AutoPlacement?: AutoPlacement | string;
    /**
     * <p>The Availability Zone of the Dedicated Host.</p>
     */
    AvailabilityZone?: string;
    /**
     * <p>Information about the instances running on the Dedicated Host.</p>
     */
    AvailableCapacity?: AvailableCapacity;
    /**
     * <p>Unique, case-sensitive identifier that you provide to ensure the idempotency of the request. For more information, see <a href="https://docs.aws.amazon.com/AWSEC2/latest/APIReference/Run_Instance_Idempotency.html">Ensuring Idempotency</a>.</p>
     */
    ClientToken?: string;
    /**
     * <p>The ID of the Dedicated Host.</p>
     */
    HostId?: string;
    /**
     * <p>The hardware specifications of the Dedicated Host.</p>
     */
    HostProperties?: HostProperties;
    /**
     * <p>The reservation ID of the Dedicated Host. This returns a <code>null</code> response
     *             if the Dedicated Host doesn't have an associated reservation.</p>
     */
    HostReservationId?: string;
    /**
     * <p>The IDs and instance type that are currently running on the Dedicated
     *             Host.</p>
     */
    Instances?: HostInstance[];
    /**
     * <p>The Dedicated Host's state.</p>
     */
    State?: AllocationState | string;
    /**
     * <p>The time that the Dedicated Host was allocated.</p>
     */
    AllocationTime?: Date;
    /**
     * <p>The time that the Dedicated Host was released.</p>
     */
    ReleaseTime?: Date;
    /**
     * <p>Any tags assigned to the Dedicated Host.</p>
     */
    Tags?: Tag[];
    /**
     * <p>Indicates whether host recovery is enabled or disabled for the Dedicated Host.</p>
     */
    HostRecovery?: HostRecovery | string;
    /**
     * <p>Indicates whether the Dedicated Host supports multiple instance types of the same instance family.
     * 			If the value is <code>on</code>, the Dedicated Host supports multiple instance types in the instance family.
     * 		    If the value is <code>off</code>, the Dedicated Host supports a single instance type only.</p>
     */
    AllowsMultipleInstanceTypes?: AllowsMultipleInstanceTypes | string;
    /**
     * <p>The ID of the AWS account that owns the Dedicated Host.</p>
     */
    OwnerId?: string;
    /**
     * <p>The ID of the Availability Zone in which the Dedicated Host is allocated.</p>
     */
    AvailabilityZoneId?: string;
    /**
     * <p>Indicates whether the Dedicated Host is in a host resource group. If
     * 			<b>memberOfServiceLinkedResourceGroup</b> is
     * 			<code>true</code>, the host is in a host resource group; otherwise, it is not.</p>
     */
    MemberOfServiceLinkedResourceGroup?: boolean;
}
export declare namespace Host {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: Host) => any;
}
export interface DescribeHostsResult {
    /**
     * <p>Information about the Dedicated Hosts.</p>
     */
    Hosts?: Host[];
    /**
     * <p>The token to use to retrieve the next page of results. This value is <code>null</code> when there are no more results to return.</p>
     */
    NextToken?: string;
}
export declare namespace DescribeHostsResult {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: DescribeHostsResult) => any;
}
export interface DescribeIamInstanceProfileAssociationsRequest {
    /**
     * <p>The IAM instance profile associations.</p>
     */
    AssociationIds?: string[];
    /**
     * <p>The filters.</p>
     *         <ul>
     *             <li>
     *                <p>
     *                   <code>instance-id</code> - The ID of the instance.</p>
     *             </li>
     *             <li>
     *                <p>
     *                   <code>state</code> - The state of the association (<code>associating</code> |
     *                 <code>associated</code> | <code>disassociating</code>).</p>
     *             </li>
     *          </ul>
     */
    Filters?: Filter[];
    /**
     * <p>The maximum number of results to return in a single call. To retrieve the remaining
     *             results, make another call with the returned <code>NextToken</code> value.</p>
     */
    MaxResults?: number;
    /**
     * <p>The token to request the next page of results.</p>
     */
    NextToken?: string;
}
export declare namespace DescribeIamInstanceProfileAssociationsRequest {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: DescribeIamInstanceProfileAssociationsRequest) => any;
}
export interface DescribeIamInstanceProfileAssociationsResult {
    /**
     * <p>Information about the IAM instance profile associations.</p>
     */
    IamInstanceProfileAssociations?: IamInstanceProfileAssociation[];
    /**
     * <p>The token to use to retrieve the next page of results. This value is <code>null</code> when there are no more results to return.</p>
     */
    NextToken?: string;
}
export declare namespace DescribeIamInstanceProfileAssociationsResult {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: DescribeIamInstanceProfileAssociationsResult) => any;
}
export interface DescribeIdentityIdFormatRequest {
    /**
     * <p>The ARN of the principal, which can be an IAM role, IAM user, or the root user.</p>
     */
    PrincipalArn: string | undefined;
    /**
     * <p>The type of resource: <code>bundle</code> |
     *           <code>conversion-task</code> | <code>customer-gateway</code> | <code>dhcp-options</code> |
     *           <code>elastic-ip-allocation</code> | <code>elastic-ip-association</code> |
     *           <code>export-task</code> | <code>flow-log</code> | <code>image</code> |
     *           <code>import-task</code> | <code>instance</code> | <code>internet-gateway</code> |
     *           <code>network-acl</code> | <code>network-acl-association</code> |
     *           <code>network-interface</code> | <code>network-interface-attachment</code> |
     *           <code>prefix-list</code> | <code>reservation</code> | <code>route-table</code> |
     *           <code>route-table-association</code> | <code>security-group</code> |
     *           <code>snapshot</code> | <code>subnet</code> |
     *           <code>subnet-cidr-block-association</code> | <code>volume</code> | <code>vpc</code>
     *           | <code>vpc-cidr-block-association</code> | <code>vpc-endpoint</code> |
     *           <code>vpc-peering-connection</code> | <code>vpn-connection</code> | <code>vpn-gateway</code>
     *          </p>
     */
    Resource?: string;
}
export declare namespace DescribeIdentityIdFormatRequest {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: DescribeIdentityIdFormatRequest) => any;
}
export interface DescribeIdentityIdFormatResult {
    /**
     * <p>Information about the ID format for the resources.</p>
     */
    Statuses?: IdFormat[];
}
export declare namespace DescribeIdentityIdFormatResult {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: DescribeIdentityIdFormatResult) => any;
}
export interface DescribeIdFormatRequest {
    /**
     * <p>The type of resource: <code>bundle</code> |
     *            <code>conversion-task</code> | <code>customer-gateway</code> | <code>dhcp-options</code> |
     *            <code>elastic-ip-allocation</code> | <code>elastic-ip-association</code> |
     *            <code>export-task</code> | <code>flow-log</code> | <code>image</code> |
     *            <code>import-task</code> | <code>instance</code> | <code>internet-gateway</code> |
     *            <code>network-acl</code> | <code>network-acl-association</code> |
     *            <code>network-interface</code> | <code>network-interface-attachment</code> |
     *            <code>prefix-list</code> | <code>reservation</code> | <code>route-table</code> |
     *            <code>route-table-association</code> | <code>security-group</code> |
     *            <code>snapshot</code> | <code>subnet</code> |
     *            <code>subnet-cidr-block-association</code> | <code>volume</code> | <code>vpc</code>
     *            | <code>vpc-cidr-block-association</code> | <code>vpc-endpoint</code> |
     *            <code>vpc-peering-connection</code> | <code>vpn-connection</code> | <code>vpn-gateway</code>
     *          </p>
     */
    Resource?: string;
}
export declare namespace DescribeIdFormatRequest {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: DescribeIdFormatRequest) => any;
}
export interface DescribeIdFormatResult {
    /**
     * <p>Information about the ID format for the resource.</p>
     */
    Statuses?: IdFormat[];
}
export declare namespace DescribeIdFormatResult {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: DescribeIdFormatResult) => any;
}
export declare type ImageAttributeName = "blockDeviceMapping" | "bootMode" | "description" | "kernel" | "launchPermission" | "productCodes" | "ramdisk" | "sriovNetSupport";
/**
 * <p>Contains the parameters for DescribeImageAttribute.</p>
 */
export interface DescribeImageAttributeRequest {
    /**
     * <p>The AMI attribute.</p>
     *    	     <p>
     *             <b>Note</b>: The <code>blockDeviceMapping</code> attribute is deprecated.
     *    	    Using this attribute returns the <code>Client.AuthFailure</code> error. To get information about
     *    	    the block device mappings for an AMI, use the <a>DescribeImages</a> action.</p>
     */
    Attribute: ImageAttributeName | string | undefined;
    /**
     * <p>The ID of the AMI.</p>
     */
    ImageId: string | undefined;
    /**
     * <p>Checks whether you have the required permissions for the action, without actually making the request,
     *        and provides an error response. If you have the required permissions, the error response is <code>DryRunOperation</code>.
     *        Otherwise, it is <code>UnauthorizedOperation</code>.</p>
     */
    DryRun?: boolean;
}
export declare namespace DescribeImageAttributeRequest {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: DescribeImageAttributeRequest) => any;
}
/**
 * <p>Describes a launch permission.</p>
 */
export interface LaunchPermission {
    /**
     * <p>The name of the group.</p>
     */
    Group?: PermissionGroup | string;
    /**
     * <p>The AWS account ID.</p>
     *          <p>Constraints: Up to 10 000 account IDs can be specified in a single request.</p>
     */
    UserId?: string;
}
export declare namespace LaunchPermission {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: LaunchPermission) => any;
}
/**
 * <p>Describes an image attribute.</p>
 */
export interface ImageAttribute {
    /**
     * <p>The block device mapping entries.</p>
     */
    BlockDeviceMappings?: BlockDeviceMapping[];
    /**
     * <p>The ID of the AMI.</p>
     */
    ImageId?: string;
    /**
     * <p>The launch permissions.</p>
     */
    LaunchPermissions?: LaunchPermission[];
    /**
     * <p>The product codes.</p>
     */
    ProductCodes?: ProductCode[];
    /**
     * <p>A description for the AMI.</p>
     */
    Description?: AttributeValue;
    /**
     * <p>The kernel ID.</p>
     */
    KernelId?: AttributeValue;
    /**
     * <p>The RAM disk ID.</p>
     */
    RamdiskId?: AttributeValue;
    /**
     * <p>Indicates whether enhanced networking with the Intel 82599 Virtual Function interface is enabled.</p>
     */
    SriovNetSupport?: AttributeValue;
    /**
     * <p>Describes a value for a resource attribute that is a String.</p>
     */
    BootMode?: AttributeValue;
}
export declare namespace ImageAttribute {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: ImageAttribute) => any;
}
export interface DescribeImagesRequest {
    /**
     * <p>Scopes the images by users with explicit launch permissions.
     * 				Specify an AWS account ID, <code>self</code> (the sender of the request),
     * 				or <code>all</code> (public AMIs).</p>
     */
    ExecutableUsers?: string[];
    /**
     * <p>The filters.</p>
     *          <ul>
     *             <li>
     *                <p>
     *                   <code>architecture</code> - The image architecture (<code>i386</code> |
     *             <code>x86_64</code> | <code>arm64</code>).</p>
     *             </li>
     *             <li>
     *                <p>
     *                   <code>block-device-mapping.delete-on-termination</code> - A Boolean value that indicates
     *           whether the Amazon EBS volume is deleted on instance termination.</p>
     *             </li>
     *             <li>
     *                <p>
     *                   <code>block-device-mapping.device-name</code> - The device name specified in the block device mapping (for
     *           example, <code>/dev/sdh</code> or <code>xvdh</code>).</p>
     *             </li>
     *             <li>
     *                <p>
     *                   <code>block-device-mapping.snapshot-id</code> - The ID of the snapshot used for the EBS
     *           volume.</p>
     *             </li>
     *             <li>
     *                <p>
     *                   <code>block-device-mapping.volume-size</code> - The volume size of the EBS volume, in GiB.</p>
     *             </li>
     *             <li>
     *                <p>
     *                   <code>block-device-mapping.volume-type</code> - The volume type of the EBS volume
     *             (<code>gp2</code> | <code>io1</code> | <code>io2</code> | <code>st1 </code>| <code>sc1</code> |
     *             <code>standard</code>).</p>
     *             </li>
     *             <li>
     *     		         <p>
     *     			           <code>block-device-mapping.encrypted</code> - A Boolean that indicates whether the EBS volume is encrypted.</p>
     *     	       </li>
     *             <li>
     *                <p>
     *                   <code>description</code> - The description of the image (provided during image
     *           creation).</p>
     *             </li>
     *             <li>
     *                <p>
     *                   <code>ena-support</code> - A Boolean that indicates whether enhanced networking
     *           with ENA is enabled.</p>
     *             </li>
     *             <li>
     *                <p>
     *                   <code>hypervisor</code> - The hypervisor type (<code>ovm</code> |
     *           <code>xen</code>).</p>
     *             </li>
     *             <li>
     *                <p>
     *                   <code>image-id</code> - The ID of the image.</p>
     *             </li>
     *             <li>
     *                <p>
     *                   <code>image-type</code> - The image type (<code>machine</code> | <code>kernel</code> |
     *             <code>ramdisk</code>).</p>
     *             </li>
     *             <li>
     *                <p>
     *                   <code>is-public</code> - A Boolean that indicates whether the image is public.</p>
     *             </li>
     *             <li>
     *                <p>
     *                   <code>kernel-id</code> - The kernel ID.</p>
     *             </li>
     *             <li>
     *                <p>
     *                   <code>manifest-location</code> - The location of the image manifest.</p>
     *             </li>
     *             <li>
     *                <p>
     *                   <code>name</code> - The name of the AMI (provided during image creation).</p>
     *             </li>
     *             <li>
     *                <p>
     *                   <code>owner-alias</code> - The owner alias (<code>amazon</code> | <code>aws-marketplace</code>).
     *         	The valid aliases are defined in an Amazon-maintained list. This is not the AWS account alias that can be
     *         	set using the IAM console. We recommend that you use the <b>Owner</b>
     *         	request parameter instead of this filter.</p>
     *             </li>
     *             <li>
     *       	        <p>
     *                   <code>owner-id</code> - The AWS account ID of the owner. We recommend that you use the
     *       		<b>Owner</b> request parameter instead of this filter.</p>
     *             </li>
     *             <li>
     *                <p>
     *                   <code>platform</code> - The platform. To only list Windows-based AMIs, use
     *             <code>windows</code>.</p>
     *             </li>
     *             <li>
     *                <p>
     *                   <code>product-code</code> - The product code.</p>
     *             </li>
     *             <li>
     *                <p>
     *                   <code>product-code.type</code> - The type of the product code (<code>devpay</code> |
     *             <code>marketplace</code>).</p>
     *             </li>
     *             <li>
     *                <p>
     *                   <code>ramdisk-id</code> - The RAM disk ID.</p>
     *             </li>
     *             <li>
     *                <p>
     *                   <code>root-device-name</code> - The device name of the root device volume (for example, <code>/dev/sda1</code>).</p>
     *             </li>
     *             <li>
     *                <p>
     *                   <code>root-device-type</code> - The type of the root device volume (<code>ebs</code> |
     *             <code>instance-store</code>).</p>
     *             </li>
     *             <li>
     *                <p>
     *                   <code>state</code> - The state of the image (<code>available</code> | <code>pending</code>
     *           | <code>failed</code>).</p>
     *             </li>
     *             <li>
     *                <p>
     *                   <code>state-reason-code</code> - The reason code for the state change.</p>
     *             </li>
     *             <li>
     *                <p>
     *                   <code>state-reason-message</code> - The message for the state change.</p>
     *             </li>
     *             <li>
     *                 <p>
     *                   <code>sriov-net-support</code> - A value of <code>simple</code> indicates
     *                     that enhanced networking with the Intel 82599 VF interface is enabled.</p>
     *             </li>
     *             <li>
     *                <p>
     *                   <code>tag</code>:<key> - The key/value combination of a tag assigned to the resource. Use the tag key in the filter name and the tag value as the filter value.
     *     For example, to find all resources that have a tag with the key <code>Owner</code> and the value <code>TeamA</code>, specify <code>tag:Owner</code> for the filter name and <code>TeamA</code> for the filter value.</p>
     *             </li>
     *             <li>
     *                <p>
     *                   <code>tag-key</code> - The key of a tag assigned to the resource. Use this filter to find all resources assigned a tag with a specific key, regardless of the tag value.</p>
     *             </li>
     *             <li>
     *                <p>
     *                   <code>virtualization-type</code> - The virtualization type (<code>paravirtual</code> |
     *             <code>hvm</code>).</p>
     *             </li>
     *          </ul>
     */
    Filters?: Filter[];
    /**
     * <p>The image IDs.</p>
     *          <p>Default: Describes all images available to you.</p>
     */
    ImageIds?: string[];
    /**
     * <p>Scopes the results to images with the specified owners. You can specify a combination of
     *       AWS account IDs, <code>self</code>, <code>amazon</code>, and <code>aws-marketplace</code>.
     *       If you omit this parameter, the results include all images for which you have launch permissions,
     *       regardless of ownership.</p>
     */
    Owners?: string[];
    /**
     * <p>Checks whether you have the required permissions for the action, without actually making the request,
     *        and provides an error response. If you have the required permissions, the error response is <code>DryRunOperation</code>.
     *        Otherwise, it is <code>UnauthorizedOperation</code>.</p>
     */
    DryRun?: boolean;
}
export declare namespace DescribeImagesRequest {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: DescribeImagesRequest) => any;
}
export declare type ArchitectureValues = "arm64" | "i386" | "x86_64";
export declare type BootModeValues = "legacy-bios" | "uefi";
export declare type HypervisorType = "ovm" | "xen";
export declare type ImageTypeValues = "kernel" | "machine" | "ramdisk";
export declare type DeviceType = "ebs" | "instance-store";
export declare type ImageState = "available" | "deregistered" | "error" | "failed" | "invalid" | "pending" | "transient";
/**
 * <p>Describes a state change.</p>
 */
export interface StateReason {
    /**
     * <p>The reason code for the state change.</p>
     */
    Code?: string;
    /**
     * <p>The message for the state change.</p>
     *         <ul>
     *             <li>
     *                 <p>
     *                   <code>Server.InsufficientInstanceCapacity</code>: There was insufficient
     *                     capacity available to satisfy the launch request.</p>
     *             </li>
     *             <li>
     *                 <p>
     *                   <code>Server.InternalError</code>: An internal error caused the instance to
     *                     terminate during launch.</p>
     *             </li>
     *             <li>
     *                 <p>
     *                   <code>Server.ScheduledStop</code>: The instance was stopped due to a scheduled
     *                     retirement.</p>
     *             </li>
     *             <li>
     *                 <p>
     *                   <code>Server.SpotInstanceShutdown</code>: The instance was stopped because the
     *                     number of Spot requests with a maximum price equal to or higher than the Spot
     *                     price exceeded available capacity or because of an increase in the Spot
     *                     price.</p>
     *             </li>
     *             <li>
     *                 <p>
     *                   <code>Server.SpotInstanceTermination</code>: The instance was terminated
     *                     because the number of Spot requests with a maximum price equal to or higher than
     *                     the Spot price exceeded available capacity or because of an increase in the Spot
     *                     price.</p>
     *             </li>
     *             <li>
     *                 <p>
     *                   <code>Client.InstanceInitiatedShutdown</code>: The instance was shut down
     *                     using the <code>shutdown -h</code> command from the instance.</p>
     *             </li>
     *             <li>
     *                 <p>
     *                   <code>Client.InstanceTerminated</code>: The instance was terminated or
     *                     rebooted during AMI creation.</p>
     *             </li>
     *             <li>
     *                 <p>
     *                   <code>Client.InternalError</code>: A client error caused the instance to
     *                     terminate during launch.</p>
     *             </li>
     *             <li>
     *                 <p>
     *                   <code>Client.InvalidSnapshot.NotFound</code>: The specified snapshot was not
     *                     found.</p>
     *             </li>
     *             <li>
     *                 <p>
     *                   <code>Client.UserInitiatedHibernate</code>: Hibernation was initiated on the
     *                     instance.</p>
     *             </li>
     *             <li>
     *                 <p>
     *                   <code>Client.UserInitiatedShutdown</code>: The instance was shut down using
     *                     the Amazon EC2 API.</p>
     *             </li>
     *             <li>
     *                 <p>
     *                   <code>Client.VolumeLimitExceeded</code>: The limit on the number of EBS
     *                     volumes or total storage was exceeded. Decrease usage or request an increase in
     *                     your account limits.</p>
     *             </li>
     *          </ul>
     */
    Message?: string;
}
export declare namespace StateReason {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: StateReason) => any;
}
export declare type VirtualizationType = "hvm" | "paravirtual";
/**
 * <p>Describes an image.</p>
 */
export interface Image {
    /**
     * <p>The architecture of the image.</p>
     */
    Architecture?: ArchitectureValues | string;
    /**
     * <p>The date and time the image was created.</p>
     */
    CreationDate?: string;
    /**
     * <p>The ID of the AMI.</p>
     */
    ImageId?: string;
    /**
     * <p>The location of the AMI.</p>
     */
    ImageLocation?: string;
    /**
     * <p>The type of image.</p>
     */
    ImageType?: ImageTypeValues | string;
    /**
     * <p>Indicates whether the image has public launch permissions. The value is <code>true</code> if
     * 				this image has public launch permissions or <code>false</code>
     * 				if it has only implicit and explicit launch permissions.</p>
     */
    Public?: boolean;
    /**
     * <p>The kernel associated with the image, if any. Only applicable for machine images.</p>
     */
    KernelId?: string;
    /**
     * <p>The AWS account ID of the image owner.</p>
     */
    OwnerId?: string;
    /**
     * <p>This value is set to <code>windows</code> for Windows AMIs; otherwise, it is blank.</p>
     */
    Platform?: PlatformValues | string;
    /**
     * <p>The platform details associated with the billing code of the AMI. For more information,
     *       see <a href="https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/ami-billing-info.html">Obtaining
     *         Billing Information</a> in the <i>Amazon Elastic Compute Cloud User Guide</i>.</p>
     */
    PlatformDetails?: string;
    /**
     * <p>The operation of the Amazon EC2 instance and the billing code that is associated with the AMI.
     *         <code>usageOperation</code> corresponds to the <a href="https://docs.aws.amazon.com/cur/latest/userguide/Lineitem-columns.html#Lineitem-details-O-Operation">lineitem/Operation</a> column on your AWS Cost and Usage Report and in the <a href="https://docs.aws.amazon.com/awsaccountbilling/latest/aboutv2/price-changes.html">AWS Price
     *         List API</a>. For the list of <code>UsageOperation</code> codes, see <a href="https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/ami-billing-info.html#billing-info">Platform Details and Usage Operation Billing Codes</a> in the
     *         <i>Amazon Elastic Compute Cloud User Guide</i>.</p>
     */
    UsageOperation?: string;
    /**
     * <p>Any product codes associated with the AMI.</p>
     */
    ProductCodes?: ProductCode[];
    /**
     * <p>The RAM disk associated with the image, if any. Only applicable for machine images.</p>
     */
    RamdiskId?: string;
    /**
     * <p>The current state of the AMI. If the state is <code>available</code>, the image is successfully registered and can be used to launch an instance.</p>
     */
    State?: ImageState | string;
    /**
     * <p>Any block device mapping entries.</p>
     */
    BlockDeviceMappings?: BlockDeviceMapping[];
    /**
     * <p>The description of the AMI that was provided during image creation.</p>
     */
    Description?: string;
    /**
     * <p>Specifies whether enhanced networking with ENA is enabled.</p>
     */
    EnaSupport?: boolean;
    /**
     * <p>The hypervisor type of the image.</p>
     */
    Hypervisor?: HypervisorType | string;
    /**
     * <p>The AWS account alias (for example, <code>amazon</code>, <code>self</code>) or
     *         the AWS account ID of the AMI owner.</p>
     */
    ImageOwnerAlias?: string;
    /**
     * <p>The name of the AMI that was provided during image creation.</p>
     */
    Name?: string;
    /**
     * <p>The device name of the root device volume (for example, <code>/dev/sda1</code>).</p>
     */
    RootDeviceName?: string;
    /**
     * <p>The type of root device used by the AMI. The AMI can use an EBS volume or an instance store volume.</p>
     */
    RootDeviceType?: DeviceType | string;
    /**
     * <p>Specifies whether enhanced networking with the Intel 82599 Virtual Function interface is enabled.</p>
     */
    SriovNetSupport?: string;
    /**
     * <p>The reason for the state change.</p>
     */
    StateReason?: StateReason;
    /**
     * <p>Any tags assigned to the image.</p>
     */
    Tags?: Tag[];
    /**
     * <p>The type of virtualization of the AMI.</p>
     */
    VirtualizationType?: VirtualizationType | string;
    /**
     * <p>The boot mode of the image. For more information, see <a href="https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/ami-boot.html">Boot modes</a> in the
     *         <i>Amazon Elastic Compute Cloud User Guide</i>.</p>
     */
    BootMode?: BootModeValues | string;
}
export declare namespace Image {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: Image) => any;
}
export interface DescribeImagesResult {
    /**
     * <p>Information about the images.</p>
     */
    Images?: Image[];
}
export declare namespace DescribeImagesResult {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: DescribeImagesResult) => any;
}
export interface DescribeImportImageTasksRequest {
    /**
     * <p>Checks whether you have the required permissions for the action, without actually making the request,
     *    and provides an error response. If you have the required permissions, the error response is <code>DryRunOperation</code>.
     *    Otherwise, it is <code>UnauthorizedOperation</code>.</p>
     */
    DryRun?: boolean;
    /**
     * <p>Filter tasks using the <code>task-state</code> filter and one of the following values: <code>active</code>,
     *     <code>completed</code>, <code>deleting</code>, or <code>deleted</code>.</p>
     */
    Filters?: Filter[];
    /**
     * <p>The IDs of the import image tasks.</p>
     */
    ImportTaskIds?: string[];
    /**
     * <p>The maximum number of results to return in a single call.</p>
     */
    MaxResults?: number;
    /**
     * <p>A token that indicates the next page of results.</p>
     */
    NextToken?: string;
}
export declare namespace DescribeImportImageTasksRequest {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: DescribeImportImageTasksRequest) => any;
}
/**
 * <p> The response information for license configurations.</p>
 */
export interface ImportImageLicenseConfigurationResponse {
    /**
     * <p>The ARN of a license configuration.</p>
     */
    LicenseConfigurationArn?: string;
}
export declare namespace ImportImageLicenseConfigurationResponse {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: ImportImageLicenseConfigurationResponse) => any;
}
/**
 * <p>Describes the Amazon S3 bucket for the disk image.</p>
 */
export interface UserBucketDetails {
    /**
     * <p>The Amazon S3 bucket from which the disk image was created.</p>
     */
    S3Bucket?: string;
    /**
     * <p>The file name of the disk image.</p>
     */
    S3Key?: string;
}
export declare namespace UserBucketDetails {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: UserBucketDetails) => any;
}
/**
 * <p>Describes the snapshot created from the imported disk.</p>
 */
export interface SnapshotDetail {
    /**
     * <p>A description for the snapshot.</p>
     */
    Description?: string;
    /**
     * <p>The block device mapping for the snapshot.</p>
     */
    DeviceName?: string;
    /**
     * <p>The size of the disk in the snapshot, in GiB.</p>
     */
    DiskImageSize?: number;
    /**
     * <p>The format of the disk image from which the snapshot is created.</p>
     */
    Format?: string;
    /**
     * <p>The percentage of progress for the task.</p>
     */
    Progress?: string;
    /**
     * <p>The snapshot ID of the disk being imported.</p>
     */
    SnapshotId?: string;
    /**
     * <p>A brief status of the snapshot creation.</p>
     */
    Status?: string;
    /**
     * <p>A detailed status message for the snapshot creation.</p>
     */
    StatusMessage?: string;
    /**
     * <p>The URL used to access the disk image.</p>
     */
    Url?: string;
    /**
     * <p>The Amazon S3 bucket for the disk image.</p>
     */
    UserBucket?: UserBucketDetails;
}
export declare namespace SnapshotDetail {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: SnapshotDetail) => any;
}
/**
 * <p>Describes an import image task.</p>
 */
export interface ImportImageTask {
    /**
     * <p>The architecture of the virtual machine.</p>
     *          <p>Valid values: <code>i386</code> | <code>x86_64</code> | <code>arm64</code>
     *          </p>
     */
    Architecture?: string;
    /**
     * <p>A description of the import task.</p>
     */
    Description?: string;
    /**
     * <p>Indicates whether the image is encrypted.</p>
     */
    Encrypted?: boolean;
    /**
     * <p>The target hypervisor for the import task.</p>
     *          <p>Valid values: <code>xen</code>
     *          </p>
     */
    Hypervisor?: string;
    /**
     * <p>The ID of the Amazon Machine Image (AMI) of the imported virtual machine.</p>
     */
    ImageId?: string;
    /**
     * <p>The ID of the import image task.</p>
     */
    ImportTaskId?: string;
    /**
     * <p>The identifier for the AWS Key Management Service (AWS KMS) customer master key (CMK) that was used to create
     *    the encrypted image.</p>
     */
    KmsKeyId?: string;
    /**
     * <p>The license type of the virtual machine.</p>
     */
    LicenseType?: string;
    /**
     * <p>The description string for the import image task.</p>
     */
    Platform?: string;
    /**
     * <p>The percentage of progress of the import image task.</p>
     */
    Progress?: string;
    /**
     * <p>Information about the snapshots.</p>
     */
    SnapshotDetails?: SnapshotDetail[];
    /**
     * <p>A brief status for the import image task.</p>
     */
    Status?: string;
    /**
     * <p>A descriptive status message for the import image task.</p>
     */
    StatusMessage?: string;
    /**
     * <p>The tags for the import image task.</p>
     */
    Tags?: Tag[];
    /**
     * <p>The ARNs of the license configurations that are associated with the import image task.</p>
     */
    LicenseSpecifications?: ImportImageLicenseConfigurationResponse[];
}
export declare namespace ImportImageTask {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: ImportImageTask) => any;
}
export interface DescribeImportImageTasksResult {
    /**
     * <p>A list of zero or more import image tasks that are currently active or were completed or canceled in the
     *    previous 7 days.</p>
     */
    ImportImageTasks?: ImportImageTask[];
    /**
     * <p>The token to use to get the next page of results. This value is <code>null</code> when there are no more results
     *    to return.</p>
     */
    NextToken?: string;
}
export declare namespace DescribeImportImageTasksResult {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: DescribeImportImageTasksResult) => any;
}
export interface DescribeImportSnapshotTasksRequest {
    /**
     * <p>Checks whether you have the required permissions for the action, without actually making the request,
     *    and provides an error response. If you have the required permissions, the error response is <code>DryRunOperation</code>.
     *    Otherwise, it is <code>UnauthorizedOperation</code>.</p>
     */
    DryRun?: boolean;
    /**
     * <p>The filters.</p>
     */
    Filters?: Filter[];
    /**
     * <p>A list of import snapshot task IDs.</p>
     */
    ImportTaskIds?: string[];
    /**
     * <p>The maximum number of results to return in a single call. To retrieve the remaining results, make another call
     *    with the returned <code>NextToken</code> value.</p>
     */
    MaxResults?: number;
    /**
     * <p>A token that indicates the next page of results.</p>
     */
    NextToken?: string;
}
export declare namespace DescribeImportSnapshotTasksRequest {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: DescribeImportSnapshotTasksRequest) => any;
}
/**
 * <p>Details about the import snapshot task.</p>
 */
export interface SnapshotTaskDetail {
    /**
     * <p>The description of the snapshot.</p>
     */
    Description?: string;
    /**
     * <p>The size of the disk in the snapshot, in GiB.</p>
     */
    DiskImageSize?: number;
    /**
     * <p>Indicates whether the snapshot is encrypted.</p>
     */
    Encrypted?: boolean;
    /**
     * <p>The format of the disk image from which the snapshot is created.</p>
     */
    Format?: string;
    /**
     * <p>The identifier for the AWS Key Management Service (AWS KMS) customer master key (CMK) that was used to create
     *    the encrypted snapshot.</p>
     */
    KmsKeyId?: string;
    /**
     * <p>The percentage of completion for the import snapshot task.</p>
     */
    Progress?: string;
    /**
     * <p>The snapshot ID of the disk being imported.</p>
     */
    SnapshotId?: string;
    /**
     * <p>A brief status for the import snapshot task.</p>
     */
    Status?: string;
    /**
     * <p>A detailed status message for the import snapshot task.</p>
     */
    StatusMessage?: string;
    /**
     * <p>The URL of the disk image from which the snapshot is created.</p>
     */
    Url?: string;
    /**
     * <p>The Amazon S3 bucket for the disk image.</p>
     */
    UserBucket?: UserBucketDetails;
}
export declare namespace SnapshotTaskDetail {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: SnapshotTaskDetail) => any;
}
/**
 * <p>Describes an import snapshot task.</p>
 */
export interface ImportSnapshotTask {
    /**
     * <p>A description of the import snapshot task.</p>
     */
    Description?: string;
    /**
     * <p>The ID of the import snapshot task.</p>
     */
    ImportTaskId?: string;
    /**
     * <p>Describes an import snapshot task.</p>
     */
    SnapshotTaskDetail?: SnapshotTaskDetail;
    /**
     * <p>The tags for the import snapshot task.</p>
     */
    Tags?: Tag[];
}
export declare namespace ImportSnapshotTask {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: ImportSnapshotTask) => any;
}
export interface DescribeImportSnapshotTasksResult {
    /**
     * <p>A list of zero or more import snapshot tasks that are currently active or were completed or canceled in the
     *    previous 7 days.</p>
     */
    ImportSnapshotTasks?: ImportSnapshotTask[];
    /**
     * <p>The token to use to get the next page of results. This value is <code>null</code> when there are no more results
     *    to return.</p>
     */
    NextToken?: string;
}
export declare namespace DescribeImportSnapshotTasksResult {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: DescribeImportSnapshotTasksResult) => any;
}
export declare type InstanceAttributeName = "blockDeviceMapping" | "disableApiTermination" | "ebsOptimized" | "enaSupport" | "enclaveOptions" | "groupSet" | "instanceInitiatedShutdownBehavior" | "instanceType" | "kernel" | "productCodes" | "ramdisk" | "rootDeviceName" | "sourceDestCheck" | "sriovNetSupport" | "userData";
export interface DescribeInstanceAttributeRequest {
    /**
     * <p>The instance attribute.</p>
     *         <p>Note: The <code>enaSupport</code> attribute is not supported at this time.</p>
     */
    Attribute: InstanceAttributeName | string | undefined;
    /**
     * <p>Checks whether you have the required permissions for the action, without actually making the request,
     *    and provides an error response. If you have the required permissions, the error response is <code>DryRunOperation</code>.
     *    Otherwise, it is <code>UnauthorizedOperation</code>.</p>
     */
    DryRun?: boolean;
    /**
     * <p>The ID of the instance.</p>
     */
    InstanceId: string | undefined;
}
export declare namespace DescribeInstanceAttributeRequest {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: DescribeInstanceAttributeRequest) => any;
}
/**
 * <p>Describes a parameter used to set up an EBS volume in a block device mapping.</p>
 */
export interface EbsInstanceBlockDevice {
    /**
     * <p>The time stamp when the attachment initiated.</p>
     */
    AttachTime?: Date;
    /**
     * <p>Indicates whether the volume is deleted on instance termination.</p>
     */
    DeleteOnTermination?: boolean;
    /**
     * <p>The attachment state.</p>
     */
    Status?: AttachmentStatus | string;
    /**
     * <p>The ID of the EBS volume.</p>
     */
    VolumeId?: string;
}
export declare namespace EbsInstanceBlockDevice {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: EbsInstanceBlockDevice) => any;
}
/**
 * <p>Describes a block device mapping.</p>
 */
export interface InstanceBlockDeviceMapping {
    /**
     * <p>The device name (for example, <code>/dev/sdh</code> or <code>xvdh</code>).</p>
     */
    DeviceName?: string;
    /**
     * <p>Parameters used to automatically set up EBS volumes when the instance is
     *             launched.</p>
     */
    Ebs?: EbsInstanceBlockDevice;
}
export declare namespace InstanceBlockDeviceMapping {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: InstanceBlockDeviceMapping) => any;
}
/**
 * <p>Describes a value for a resource attribute that is a Boolean value.</p>
 */
export interface AttributeBooleanValue {
    /**
     * <p>The attribute value. The valid values are <code>true</code> or <code>false</code>.</p>
     */
    Value?: boolean;
}
export declare namespace AttributeBooleanValue {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: AttributeBooleanValue) => any;
}
/**
 * <p>Indicates whether the instance is enabled for AWS Nitro Enclaves.</p>
 */
export interface EnclaveOptions {
    /**
     * <p>If this parameter is set to <code>true</code>, the instance is enabled for AWS Nitro Enclaves;
     *     		otherwise, it is not enabled for AWS Nitro Enclaves.</p>
     */
    Enabled?: boolean;
}
export declare namespace EnclaveOptions {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: EnclaveOptions) => any;
}
/**
 * <p>Describes an instance attribute.</p>
 */
export interface InstanceAttribute {
    /**
     * <p>The security groups associated with the instance.</p>
     */
    Groups?: GroupIdentifier[];
    /**
     * <p>The block device mapping of the instance.</p>
     */
    BlockDeviceMappings?: InstanceBlockDeviceMapping[];
    /**
     * <p>If the value is <code>true</code>, you can't terminate the instance through the Amazon
     *             EC2 console, CLI, or API; otherwise, you can.</p>
     */
    DisableApiTermination?: AttributeBooleanValue;
    /**
     * <p>Indicates whether enhanced networking with ENA is enabled.</p>
     */
    EnaSupport?: AttributeBooleanValue;
    /**
     * <p>To enable the instance for AWS Nitro Enclaves, set this parameter to <code>true</code>; otherwise,
     * 		set it to <code>false</code>.</p>
     */
    EnclaveOptions?: EnclaveOptions;
    /**
     * <p>Indicates whether the instance is optimized for Amazon EBS I/O.</p>
     */
    EbsOptimized?: AttributeBooleanValue;
    /**
     * <p>The ID of the instance.</p>
     */
    InstanceId?: string;
    /**
     * <p>Indicates whether an instance stops or terminates when you initiate shutdown from the
     *             instance (using the operating system command for system shutdown).</p>
     */
    InstanceInitiatedShutdownBehavior?: AttributeValue;
    /**
     * <p>The instance type.</p>
     */
    InstanceType?: AttributeValue;
    /**
     * <p>The kernel ID.</p>
     */
    KernelId?: AttributeValue;
    /**
     * <p>A list of product codes.</p>
     */
    ProductCodes?: ProductCode[];
    /**
     * <p>The RAM disk ID.</p>
     */
    RamdiskId?: AttributeValue;
    /**
     * <p>The device name of the root device volume (for example,
     *             <code>/dev/sda1</code>).</p>
     */
    RootDeviceName?: AttributeValue;
    /**
     * <p>Enable or disable source/destination checks, which ensure that the instance
     *             is either the source or the destination of any traffic that it receives.
     *             If the value is <code>true</code>, source/destination checks are enabled;
     *             otherwise, they are disabled. The default value is <code>true</code>.
     *             You must disable source/destination checks if the instance runs services
     *             such as network address translation, routing, or firewalls.</p>
     */
    SourceDestCheck?: AttributeBooleanValue;
    /**
     * <p>Indicates whether enhanced networking with the Intel 82599 Virtual Function interface
     *             is enabled.</p>
     */
    SriovNetSupport?: AttributeValue;
    /**
     * <p>The user data.</p>
     */
    UserData?: AttributeValue;
}
export declare namespace InstanceAttribute {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: InstanceAttribute) => any;
}
export interface DescribeInstanceCreditSpecificationsRequest {
    /**
     * <p>Checks whether you have the required permissions for the action, without actually making the request,
     *    and provides an error response. If you have the required permissions, the error response is <code>DryRunOperation</code>.
     *    Otherwise, it is <code>UnauthorizedOperation</code>.</p>
     */
    DryRun?: boolean;
    /**
     * <p>The filters.</p>
     *         <ul>
     *             <li>
     *                 <p>
     *                   <code>instance-id</code> - The ID of the instance.</p>
     *             </li>
     *          </ul>
     */
    Filters?: Filter[];
    /**
     * <p>The instance IDs.</p>
     *         <p>Default: Describes all your instances.</p>
     *         <p>Constraints: Maximum 1000 explicitly specified instance IDs.</p>
     */
    InstanceIds?: string[];
    /**
     * <p>The maximum number of results to return in a single call. To retrieve the remaining
     *             results, make another call with the returned <code>NextToken</code> value. This value
     *             can be between 5 and 1000. You cannot specify this parameter and the instance IDs
     *             parameter in the same call.</p>
     */
    MaxResults?: number;
    /**
     * <p>The token to retrieve the next page of results.</p>
     */
    NextToken?: string;
}
export declare namespace DescribeInstanceCreditSpecificationsRequest {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: DescribeInstanceCreditSpecificationsRequest) => any;
}
/**
 * <p>Describes the credit option for CPU usage of a burstable performance instance. </p>
 */
export interface InstanceCreditSpecification {
    /**
     * <p>The ID of the instance.</p>
     */
    InstanceId?: string;
    /**
     * <p>The credit option for CPU usage of the instance. Valid values are
     *                 <code>standard</code> and <code>unlimited</code>.</p>
     */
    CpuCredits?: string;
}
export declare namespace InstanceCreditSpecification {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: InstanceCreditSpecification) => any;
}
export interface DescribeInstanceCreditSpecificationsResult {
    /**
     * <p>Information about the credit option for CPU usage of an instance.</p>
     */
    InstanceCreditSpecifications?: InstanceCreditSpecification[];
    /**
     * <p>The token to use to retrieve the next page of results. This value is <code>null</code>
     *             when there are no more results to return.</p>
     */
    NextToken?: string;
}
export declare namespace DescribeInstanceCreditSpecificationsResult {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: DescribeInstanceCreditSpecificationsResult) => any;
}
export interface DescribeInstanceEventNotificationAttributesRequest {
    /**
     * <p>Checks whether you have the required permissions for the action, without actually making the request,
     *    and provides an error response. If you have the required permissions, the error response is <code>DryRunOperation</code>.
     *    Otherwise, it is <code>UnauthorizedOperation</code>.</p>
     */
    DryRun?: boolean;
}
export declare namespace DescribeInstanceEventNotificationAttributesRequest {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: DescribeInstanceEventNotificationAttributesRequest) => any;
}
export interface DescribeInstanceEventNotificationAttributesResult {
    /**
     * <p>Information about the registered tag keys.</p>
     */
    InstanceTagAttribute?: InstanceTagNotificationAttribute;
}
export declare namespace DescribeInstanceEventNotificationAttributesResult {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: DescribeInstanceEventNotificationAttributesResult) => any;
}
export interface DescribeInstancesRequest {
    /**
     * <p>The filters.</p>
     *         <ul>
     *             <li>
     *                 <p>
     *                     <code>affinity</code> - The affinity setting for an instance running on a
     *                     Dedicated Host (<code>default</code> | <code>host</code>).</p>
     *             </li>
     *             <li>
     *                 <p>
     *                     <code>architecture</code> - The instance architecture (<code>i386</code> |
     *                         <code>x86_64</code> | <code>arm64</code>).</p>
     *             </li>
     *             <li>
     *                 <p>
     *                     <code>availability-zone</code> - The Availability Zone of the instance.</p>
     *             </li>
     *             <li>
     *                 <p>
     *                     <code>block-device-mapping.attach-time</code> - The attach time for an EBS
     *                     volume mapped to the instance, for example,
     *                         <code>2010-09-15T17:15:20.000Z</code>.</p>
     *             </li>
     *             <li>
     *                 <p>
     *                     <code>block-device-mapping.delete-on-termination</code> - A Boolean that
     *                     indicates whether the EBS volume is deleted on instance termination.</p>
     *             </li>
     *             <li>
     *                 <p>
     *                     <code>block-device-mapping.device-name</code> - The device name specified in the
     *                     block device mapping (for example, <code>/dev/sdh</code> or
     *                     <code>xvdh</code>).</p>
     *             </li>
     *             <li>
     *                 <p>
     *                     <code>block-device-mapping.status</code> - The status for the EBS volume
     *                         (<code>attaching</code> | <code>attached</code> | <code>detaching</code> |
     *                         <code>detached</code>).</p>
     *             </li>
     *             <li>
     *                 <p>
     *                     <code>block-device-mapping.volume-id</code> - The volume ID of the EBS
     *                     volume.</p>
     *             </li>
     *             <li>
     *                 <p>
     *                     <code>client-token</code> - The idempotency token you provided when you launched
     *                     the instance.</p>
     *             </li>
     *             <li>
     *                 <p>
     *                   <code>dns-name</code> - The public DNS name of the instance.</p>
     *             </li>
     *             <li>
     *                 <p>
     *                   <code>group-id</code> - The ID of the security group for the instance.
     *                     EC2-Classic only.</p>
     *             </li>
     *             <li>
     *                 <p>
     *                   <code>group-name</code> - The name of the security group for the instance.
     *                     EC2-Classic only.</p>
     *             </li>
     *             <li>
     *                 <p>
     *                   <code>hibernation-options.configured</code> - A Boolean that indicates whether
     *                     the instance is enabled for hibernation. A value of <code>true</code> means that
     *                     the instance is enabled for hibernation. </p>
     *             </li>
     *             <li>
     *                 <p>
     *                   <code>host-id</code> - The ID of the Dedicated Host on which the instance is
     *                     running, if applicable.</p>
     *             </li>
     *             <li>
     *                 <p>
     *                   <code>hypervisor</code> - The hypervisor type of the instance
     *                     (<code>ovm</code> | <code>xen</code>). The value <code>xen</code>
     *                     is used for both Xen and Nitro hypervisors.</p>
     *             </li>
     *             <li>
     *                 <p>
     *                   <code>iam-instance-profile.arn</code> - The instance profile associated with
     *                     the instance. Specified as an ARN.</p>
     *             </li>
     *             <li>
     *                 <p>
     *                   <code>image-id</code> - The ID of the image used to launch the
     *                     instance.</p>
     *             </li>
     *             <li>
     *                 <p>
     *                   <code>instance-id</code> - The ID of the instance.</p>
     *             </li>
     *             <li>
     *                 <p>
     *                   <code>instance-lifecycle</code> - Indicates whether this is a Spot Instance or
     *                     a Scheduled Instance (<code>spot</code> | <code>scheduled</code>).</p>
     *             </li>
     *             <li>
     *                 <p>
     *                   <code>instance-state-code</code> - The state of the instance, as a 16-bit
     *                     unsigned integer. The high byte is used for internal purposes and should be
     *                     ignored. The low byte is set based on the state represented. The valid values
     *                     are: 0 (pending), 16 (running), 32 (shutting-down), 48 (terminated), 64
     *                     (stopping), and 80 (stopped).</p>
     *             </li>
     *             <li>
     *                 <p>
     *                   <code>instance-state-name</code> - The state of the instance
     *                         (<code>pending</code> | <code>running</code> | <code>shutting-down</code> |
     *                         <code>terminated</code> | <code>stopping</code> |
     *                     <code>stopped</code>).</p>
     *             </li>
     *             <li>
     *                 <p>
     *                   <code>instance-type</code> - The type of instance (for example,
     *                         <code>t2.micro</code>).</p>
     *             </li>
     *             <li>
     *                 <p>
     *                   <code>instance.group-id</code> - The ID of the security group for the
     *                     instance. </p>
     *             </li>
     *             <li>
     *                 <p>
     *                   <code>instance.group-name</code> - The name of the security group for the
     *                     instance. </p>
     *             </li>
     *             <li>
     *                 <p>
     *                   <code>ip-address</code> - The public IPv4 address of the instance.</p>
     *             </li>
     *             <li>
     *                 <p>
     *                   <code>kernel-id</code> - The kernel ID.</p>
     *             </li>
     *             <li>
     *                 <p>
     *                   <code>key-name</code> - The name of the key pair used when the instance was
     *                     launched.</p>
     *             </li>
     *             <li>
     *                 <p>
     *                   <code>launch-index</code> - When launching multiple instances, this is the
     *                     index for the instance in the launch group (for example, 0, 1, 2, and so on). </p>
     *             </li>
     *             <li>
     *                 <p>
     *                   <code>launch-time</code> - The time when the instance was launched.</p>
     *             </li>
     *             <li>
     *                 <p>
     *                   <code>metadata-options.http-tokens</code> - The metadata request authorization
     *                     state (<code>optional</code> | <code>required</code>)</p>
     *             </li>
     *             <li>
     *                 <p>
     *                   <code>metadata-options.http-put-response-hop-limit</code> - The http metadata
     *                     request put response hop limit (integer, possible values <code>1</code> to
     *                         <code>64</code>)</p>
     *             </li>
     *             <li>
     *                 <p>
     *                   <code>metadata-options.http-endpoint</code> - Enable or disable metadata
     *                     access on http endpoint (<code>enabled</code> | <code>disabled</code>)</p>
     *             </li>
     *             <li>
     *                 <p>
     *                   <code>monitoring-state</code> - Indicates whether detailed monitoring is
     *                     enabled (<code>disabled</code> | <code>enabled</code>).</p>
     *             </li>
     *             <li>
     *                 <p>
     *                   <code>network-interface.addresses.private-ip-address</code> - The private IPv4
     *                     address associated with the network interface.</p>
     *             </li>
     *             <li>
     *                 <p>
     *                   <code>network-interface.addresses.primary</code> - Specifies whether the IPv4
     *                     address of the network interface is the primary private IPv4 address.</p>
     *             </li>
     *             <li>
     *                 <p>
     *                   <code>network-interface.addresses.association.public-ip</code> - The ID of the
     *                     association of an Elastic IP address (IPv4) with a network interface.</p>
     *             </li>
     *             <li>
     *                 <p>
     *                   <code>network-interface.addresses.association.ip-owner-id</code> - The owner
     *                     ID of the private IPv4 address associated with the network interface.</p>
     *             </li>
     *             <li>
     *                 <p>
     *                   <code>network-interface.association.public-ip</code> - The address of the
     *                     Elastic IP address (IPv4) bound to the network interface.</p>
     *             </li>
     *             <li>
     *                 <p>
     *                   <code>network-interface.association.ip-owner-id</code> - The owner of the
     *                     Elastic IP address (IPv4) associated with the network interface.</p>
     *             </li>
     *             <li>
     *                 <p>
     *                   <code>network-interface.association.allocation-id</code> - The allocation ID
     *                     returned when you allocated the Elastic IP address (IPv4) for your network
     *                     interface.</p>
     *             </li>
     *             <li>
     *                 <p>
     *                   <code>network-interface.association.association-id</code> - The association ID
     *                     returned when the network interface was associated with an IPv4 address.</p>
     *             </li>
     *             <li>
     *                 <p>
     *                   <code>network-interface.attachment.attachment-id</code> - The ID of the
     *                     interface attachment.</p>
     *             </li>
     *             <li>
     *                 <p>
     *                   <code>network-interface.attachment.instance-id</code> - The ID of the instance
     *                     to which the network interface is attached.</p>
     *             </li>
     *             <li>
     *                 <p>
     *                   <code>network-interface.attachment.instance-owner-id</code> - The owner ID of
     *                     the instance to which the network interface is attached.</p>
     *             </li>
     *             <li>
     *                 <p>
     *                   <code>network-interface.attachment.device-index</code> - The device index to
     *                     which the network interface is attached.</p>
     *             </li>
     *             <li>
     *                 <p>
     *                   <code>network-interface.attachment.status</code> - The status of the
     *                     attachment (<code>attaching</code> | <code>attached</code> |
     *                         <code>detaching</code> | <code>detached</code>).</p>
     *             </li>
     *             <li>
     *                 <p>
     *                   <code>network-interface.attachment.attach-time</code> - The time that the
     *                     network interface was attached to an instance.</p>
     *             </li>
     *             <li>
     *                 <p>
     *                   <code>network-interface.attachment.delete-on-termination</code> - Specifies
     *                     whether the attachment is deleted when an instance is terminated.</p>
     *             </li>
     *             <li>
     *                 <p>
     *                   <code>network-interface.availability-zone</code> - The Availability Zone for
     *                     the network interface.</p>
     *             </li>
     *             <li>
     *                 <p>
     *                   <code>network-interface.description</code> - The description of the network
     *                     interface.</p>
     *             </li>
     *             <li>
     *                 <p>
     *                   <code>network-interface.group-id</code> - The ID of a security group
     *                     associated with the network interface.</p>
     *             </li>
     *             <li>
     *                 <p>
     *                   <code>network-interface.group-name</code> - The name of a security group
     *                     associated with the network interface.</p>
     *             </li>
     *             <li>
     *                 <p>
     *                   <code>network-interface.ipv6-addresses.ipv6-address</code> - The IPv6 address
     *                     associated with the network interface.</p>
     *             </li>
     *             <li>
     *                 <p>
     *                   <code>network-interface.mac-address</code> - The MAC address of the network
     *                     interface.</p>
     *             </li>
     *             <li>
     *                 <p>
     *                   <code>network-interface.network-interface-id</code> - The ID of the network
     *                     interface.</p>
     *             </li>
     *             <li>
     *                 <p>
     *                   <code>network-interface.owner-id</code> - The ID of the owner of the network
     *                     interface.</p>
     *             </li>
     *             <li>
     *                 <p>
     *                   <code>network-interface.private-dns-name</code> - The private DNS name of the
     *                     network interface.</p>
     *             </li>
     *             <li>
     *                 <p>
     *                   <code>network-interface.requester-id</code> - The requester ID for the network
     *                     interface.</p>
     *             </li>
     *             <li>
     *                 <p>
     *                   <code>network-interface.requester-managed</code> - Indicates whether the
     *                     network interface is being managed by AWS.</p>
     *             </li>
     *             <li>
     *                 <p>
     *                   <code>network-interface.status</code> - The status of the network interface
     *                         (<code>available</code>) | <code>in-use</code>).</p>
     *             </li>
     *             <li>
     *                 <p>
     *                   <code>network-interface.source-dest-check</code> - Whether the network
     *                     interface performs source/destination checking. A value of <code>true</code>
     *                     means that checking is enabled, and <code>false</code> means that checking is
     *                     disabled. The value must be <code>false</code> for the network interface to
     *                     perform network address translation (NAT) in your VPC.</p>
     *             </li>
     *             <li>
     *                 <p>
     *                   <code>network-interface.subnet-id</code> - The ID of the subnet for the
     *                     network interface.</p>
     *             </li>
     *             <li>
     *                 <p>
     *                   <code>network-interface.vpc-id</code> - The ID of the VPC for the network
     *                     interface.</p>
     *             </li>
     *             <li>
     *                 <p>
     *                   <code>outpost-arn</code> - The Amazon Resource Name (ARN) of the Outpost.</p>
     *             </li>
     *             <li>
     *                 <p>
     *                     <code>owner-id</code> - The AWS account ID of the instance owner.</p>
     *             </li>
     *             <li>
     *                 <p>
     *                     <code>placement-group-name</code> - The name of the placement group for the
     *                     instance.</p>
     *             </li>
     *             <li>
     *                 <p>
     *                     <code>placement-partition-number</code> - The partition in which the instance is
     *                     located.</p>
     *             </li>
     *             <li>
     *                 <p>
     *                     <code>platform</code> - The platform. To list only Windows instances, use
     *                         <code>windows</code>.</p>
     *             </li>
     *             <li>
     *                 <p>
     *                     <code>private-dns-name</code> - The private IPv4 DNS name of the
     *                     instance.</p>
     *             </li>
     *             <li>
     *                 <p>
     *                     <code>private-ip-address</code> - The private IPv4 address of the
     *                     instance.</p>
     *             </li>
     *             <li>
     *                 <p>
     *                     <code>product-code</code> - The product code associated with the AMI used to
     *                     launch the instance.</p>
     *             </li>
     *             <li>
     *                 <p>
     *                     <code>product-code.type</code> - The type of product code (<code>devpay</code> |
     *                         <code>marketplace</code>).</p>
     *             </li>
     *             <li>
     *                 <p>
     *                     <code>ramdisk-id</code> - The RAM disk ID.</p>
     *             </li>
     *             <li>
     *                 <p>
     *                     <code>reason</code> - The reason for the current state of the instance (for
     *                     example, shows "User Initiated [date]" when you stop or terminate the instance).
     *                     Similar to the state-reason-code filter.</p>
     *             </li>
     *             <li>
     *                 <p>
     *                     <code>requester-id</code> - The ID of the entity that launched the instance on
     *                     your behalf (for example, AWS Management Console, Auto Scaling, and so
     *                     on).</p>
     *             </li>
     *             <li>
     *                 <p>
     *                     <code>reservation-id</code> - The ID of the instance's reservation. A
     *                     reservation ID is created any time you launch an instance. A reservation ID has
     *                     a one-to-one relationship with an instance launch request, but can be associated
     *                     with more than one instance if you launch multiple instances using the same
     *                     launch request. For example, if you launch one instance, you get one reservation
     *                     ID. If you launch ten instances using the same launch request, you also get one
     *                     reservation ID.</p>
     *             </li>
     *             <li>
     *                 <p>
     *                     <code>root-device-name</code> - The device name of the root device volume (for
     *                     example, <code>/dev/sda1</code>).</p>
     *             </li>
     *             <li>
     *                 <p>
     *                     <code>root-device-type</code> - The type of the root device volume
     *                         (<code>ebs</code> | <code>instance-store</code>).</p>
     *             </li>
     *             <li>
     *                 <p>
     *                     <code>source-dest-check</code> - Indicates whether the instance performs
     *                     source/destination checking. A value of <code>true</code> means that checking is
     *                     enabled, and <code>false</code> means that checking is disabled. The value must
     *                     be <code>false</code> for the instance to perform network address translation
     *                     (NAT) in your VPC. </p>
     *             </li>
     *             <li>
     *                 <p>
     *                     <code>spot-instance-request-id</code> - The ID of the Spot Instance
     *                     request.</p>
     *             </li>
     *             <li>
     *                 <p>
     *                     <code>state-reason-code</code> - The reason code for the state change.</p>
     *             </li>
     *             <li>
     *                 <p>
     *                     <code>state-reason-message</code> - A message that describes the state
     *                     change.</p>
     *             </li>
     *             <li>
     *                 <p>
     *                     <code>subnet-id</code> - The ID of the subnet for the instance.</p>
     *             </li>
     *             <li>
     *                <p>
     *                   <code>tag</code>:<key> - The key/value combination of a tag assigned to the resource. Use the tag key in the filter name and the tag value as the filter value.
     *     For example, to find all resources that have a tag with the key <code>Owner</code> and the value <code>TeamA</code>, specify <code>tag:Owner</code> for the filter name and <code>TeamA</code> for the filter value.</p>
     *             </li>
     *             <li>
     *                <p>
     *                   <code>tag-key</code> - The key of a tag assigned to the resource. Use this filter to find all resources that have a tag with a specific key, regardless of the tag value.</p>
     *             </li>
     *             <li>
     *                 <p>
     *                     <code>tenancy</code> - The tenancy of an instance (<code>dedicated</code> |
     *                         <code>default</code> | <code>host</code>).</p>
     *             </li>
     *             <li>
     *                 <p>
     *                     <code>virtualization-type</code> - The virtualization type of the instance
     *                         (<code>paravirtual</code> | <code>hvm</code>).</p>
     *             </li>
     *             <li>
     *                 <p>
     *                     <code>vpc-id</code> - The ID of the VPC that the instance is running in.</p>
     *             </li>
     *          </ul>
     */
    Filters?: Filter[];
    /**
     * <p>The instance IDs.</p>
     *         <p>Default: Describes all your instances.</p>
     */
    InstanceIds?: string[];
    /**
     * <p>Checks whether you have the required permissions for the action, without actually making the request,
     *    and provides an error response. If you have the required permissions, the error response is <code>DryRunOperation</code>.
     *    Otherwise, it is <code>UnauthorizedOperation</code>.</p>
     */
    DryRun?: boolean;
    /**
     * <p>The maximum number of results to return in a single call. To retrieve the remaining
     *             results, make another call with the returned <code>NextToken</code> value. This value
     *             can be between 5 and 1000. You cannot specify this parameter and the instance IDs
     *             parameter in the same call.</p>
     */
    MaxResults?: number;
    /**
     * <p>The token to request the next page of results.</p>
     */
    NextToken?: string;
}
export declare namespace DescribeInstancesRequest {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: DescribeInstancesRequest) => any;
}
/**
 * <p>Describes the instance's Capacity Reservation targeting preferences. The action returns the
 *                 <code>capacityReservationPreference</code> response element if the instance is
 *             configured to run in On-Demand capacity, or if it is configured in run in any
 *                 <code>open</code> Capacity Reservation that has matching attributes (instance type, platform,
 *             Availability Zone). The action returns the <code>capacityReservationTarget</code>
 *             response element if the instance explicily targets a specific Capacity Reservation or Capacity Reservation group.</p>
 */
export interface CapacityReservationSpecificationResponse {
    /**
     * <p>Describes the instance's Capacity Reservation preferences. Possible preferences include:</p>
     *         <ul>
     *             <li>
     *                 <p>
     *                   <code>open</code> - The instance can run in any <code>open</code> Capacity Reservation that
     *                     has matching attributes (instance type, platform, Availability Zone).</p>
     *             </li>
     *             <li>
     *                 <p>
     *                   <code>none</code> - The instance avoids running in a Capacity Reservation even if one is
     *                     available. The instance runs in On-Demand capacity.</p>
     *             </li>
     *          </ul>
     */
    CapacityReservationPreference?: CapacityReservationPreference | string;
    /**
     * <p>Information about the targeted Capacity Reservation or Capacity Reservation group.</p>
     */
    CapacityReservationTarget?: CapacityReservationTargetResponse;
}
export declare namespace CapacityReservationSpecificationResponse {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: CapacityReservationSpecificationResponse) => any;
}
/**
 * <p>The CPU options for the instance.</p>
 */
export interface CpuOptions {
    /**
     * <p>The number of CPU cores for the instance.</p>
     */
    CoreCount?: number;
    /**
     * <p>The number of threads per CPU core.</p>
     */
    ThreadsPerCore?: number;
}
export declare namespace CpuOptions {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: CpuOptions) => any;
}
/**
 * <p>Describes the association between an instance and an Elastic Graphics accelerator.</p>
 */
export interface ElasticGpuAssociation {
    /**
     * <p>The ID of the Elastic Graphics accelerator.</p>
     */
    ElasticGpuId?: string;
    /**
     * <p>The ID of the association.</p>
     */
    ElasticGpuAssociationId?: string;
    /**
     * <p>The state of the association between the instance and the
     *             Elastic Graphics accelerator.</p>
     */
    ElasticGpuAssociationState?: string;
    /**
     * <p>The time the Elastic Graphics accelerator was associated with the instance.</p>
     */
    ElasticGpuAssociationTime?: string;
}
export declare namespace ElasticGpuAssociation {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: ElasticGpuAssociation) => any;
}
/**
 * <p>
 *             Describes the association between an instance and an elastic inference accelerator.
 *         </p>
 */
export interface ElasticInferenceAcceleratorAssociation {
    /**
     * <p>
     *             The Amazon Resource Name (ARN) of the elastic inference accelerator.
     *         </p>
     */
    ElasticInferenceAcceleratorArn?: string;
    /**
     * <p>
     *             The ID of the association.
     *         </p>
     */
    ElasticInferenceAcceleratorAssociationId?: string;
    /**
     * <p>
     *             The state of the elastic inference accelerator.
     *         </p>
     */
    ElasticInferenceAcceleratorAssociationState?: string;
    /**
     * <p>
     *             The time at which the elastic inference accelerator is associated with an instance.
     *         </p>
     */
    ElasticInferenceAcceleratorAssociationTime?: Date;
}
export declare namespace ElasticInferenceAcceleratorAssociation {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: ElasticInferenceAcceleratorAssociation) => any;
}
/**
 * <p>Indicates whether your instance is configured for hibernation. This parameter is valid
 *             only if the instance meets the <a href="https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/Hibernate.html#hibernating-prerequisites">hibernation
 *                 prerequisites</a>. For
 *             more information, see <a href="https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/Hibernate.html">Hibernate your instance</a> in the
 *                 <i>Amazon EC2 User Guide</i>.</p>
 */
export interface HibernationOptions {
    /**
     * <p>If this parameter is set to <code>true</code>, your instance is enabled for
     *             hibernation; otherwise, it is not enabled for hibernation.</p>
     */
    Configured?: boolean;
}
export declare namespace HibernationOptions {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: HibernationOptions) => any;
}
export declare type InstanceLifecycleType = "scheduled" | "spot";
/**
 * <p>Describes a license configuration.</p>
 */
export interface LicenseConfiguration {
    /**
     * <p>The Amazon Resource Name (ARN) of the license configuration.</p>
     */
    LicenseConfigurationArn?: string;
}
export declare namespace LicenseConfiguration {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: LicenseConfiguration) => any;
}
export declare type InstanceMetadataEndpointState = "disabled" | "enabled";
export declare enum HttpTokensState {
    optional = "optional",
    required = "required"
}
export declare type InstanceMetadataOptionsState = "applied" | "pending";
/**
 * <p>The metadata options for the instance.</p>
 */
export interface InstanceMetadataOptionsResponse {
    /**
     * <p>The state of the metadata option changes.</p>
     *         <p>
     *             <code>pending</code> - The metadata options are being updated and the instance is not
     *             ready to process metadata traffic with the new selection.</p>
     *         <p>
     *             <code>applied</code> - The metadata options have been successfully applied on the
     *             instance.</p>
     */
    State?: InstanceMetadataOptionsState | string;
    /**
     * <p>The state of token usage for your instance metadata requests. If the parameter is not
     *             specified in the request, the default state is <code>optional</code>.</p>
     *         <p>If the state is <code>optional</code>, you can choose to retrieve instance metadata
     *             with or without a signed token header on your request. If you retrieve the IAM role
     *             credentials without a token, the version 1.0 role credentials are returned. If you
     *             retrieve the IAM role credentials using a valid signed token, the version 2.0 role
     *             credentials are returned.</p>
     *         <p>If the state is <code>required</code>, you must send a signed token header with any
     *             instance metadata retrieval requests. In this state, retrieving the IAM role credential
     *             always returns the version 2.0 credentials; the version 1.0 credentials are not
     *             available.</p>
     */
    HttpTokens?: HttpTokensState | string;
    /**
     * <p>The desired HTTP PUT response hop limit for instance metadata requests. The larger the
     *             number, the further instance metadata requests can travel.</p>
     *         <p>Default: 1</p>
     *         <p>Possible values: Integers from 1 to 64</p>
     */
    HttpPutResponseHopLimit?: number;
    /**
     * <p>This parameter enables or disables the HTTP metadata endpoint on your instances. If
     *             the parameter is not specified, the default state is <code>enabled</code>.</p>
     *         <note>
     *             <p>If you specify a value of <code>disabled</code>, you will not be able to access your
     *                 instance metadata.</p>
     *         </note>
     */
    HttpEndpoint?: InstanceMetadataEndpointState | string;
}
export declare namespace InstanceMetadataOptionsResponse {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: InstanceMetadataOptionsResponse) => any;
}
export declare type MonitoringState = "disabled" | "disabling" | "enabled" | "pending";
/**
 * <p>Describes the monitoring of an instance.</p>
 */
export interface Monitoring {
    /**
     * <p>Indicates whether detailed monitoring is enabled. Otherwise, basic monitoring is
     *             enabled.</p>
     */
    State?: MonitoringState | string;
}
export declare namespace Monitoring {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: Monitoring) => any;
}
/**
 * <p>Describes association information for an Elastic IP address (IPv4).</p>
 */
export interface InstanceNetworkInterfaceAssociation {
    /**
     * <p>The carrier IP address associated with the network interface.</p>
     */
    CarrierIp?: string;
    /**
     * <p>The ID of the owner of the Elastic IP address.</p>
     */
    IpOwnerId?: string;
    /**
     * <p>The public DNS name.</p>
     */
    PublicDnsName?: string;
    /**
     * <p>The public IP address or Elastic IP address bound to the network interface.</p>
     */
    PublicIp?: string;
}
export declare namespace InstanceNetworkInterfaceAssociation {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: InstanceNetworkInterfaceAssociation) => any;
}
/**
 * <p>Describes a network interface attachment.</p>
 */
export interface InstanceNetworkInterfaceAttachment {
    /**
     * <p>The time stamp when the attachment initiated.</p>
     */
    AttachTime?: Date;
    /**
     * <p>The ID of the network interface attachment.</p>
     */
    AttachmentId?: string;
    /**
     * <p>Indicates whether the network interface is deleted when the instance is terminated.</p>
     */
    DeleteOnTermination?: boolean;
    /**
     * <p>The index of the device on the instance for the network interface attachment.</p>
     */
    DeviceIndex?: number;
    /**
     * <p>The attachment state.</p>
     */
    Status?: AttachmentStatus | string;
    /**
     * <p>The index of the network card.</p>
     */
    NetworkCardIndex?: number;
}
export declare namespace InstanceNetworkInterfaceAttachment {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: InstanceNetworkInterfaceAttachment) => any;
}
/**
 * <p>Describes a private IPv4 address.</p>
 */
export interface InstancePrivateIpAddress {
    /**
     * <p>The association information for an Elastic IP address for the network interface.</p>
     */
    Association?: InstanceNetworkInterfaceAssociation;
    /**
     * <p>Indicates whether this IPv4 address is the primary private IP address of the network interface.</p>
     */
    Primary?: boolean;
    /**
     * <p>The private IPv4 DNS name.</p>
     */
    PrivateDnsName?: string;
    /**
     * <p>The private IPv4 address of the network interface.</p>
     */
    PrivateIpAddress?: string;
}
export declare namespace InstancePrivateIpAddress {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: InstancePrivateIpAddress) => any;
}
/**
 * <p>Describes a network interface.</p>
 */
export interface InstanceNetworkInterface {
    /**
     * <p>The association information for an Elastic IPv4 associated with the network
     *             interface.</p>
     */
    Association?: InstanceNetworkInterfaceAssociation;
    /**
     * <p>The network interface attachment.</p>
     */
    Attachment?: InstanceNetworkInterfaceAttachment;
    /**
     * <p>The description.</p>
     */
    Description?: string;
    /**
     * <p>One or more security groups.</p>
     */
    Groups?: GroupIdentifier[];
    /**
     * <p>One or more IPv6 addresses associated with the network interface.</p>
     */
    Ipv6Addresses?: InstanceIpv6Address[];
    /**
     * <p>The MAC address.</p>
     */
    MacAddress?: string;
    /**
     * <p>The ID of the network interface.</p>
     */
    NetworkInterfaceId?: string;
    /**
     * <p>The ID of the AWS account that created the network interface.</p>
     */
    OwnerId?: string;
    /**
     * <p>The private DNS name.</p>
     */
    PrivateDnsName?: string;
    /**
     * <p>The IPv4 address of the network interface within the subnet.</p>
     */
    PrivateIpAddress?: string;
    /**
     * <p>One or more private IPv4 addresses associated with the network interface.</p>
     */
    PrivateIpAddresses?: InstancePrivateIpAddress[];
    /**
     * <p>Indicates whether source/destination checking is enabled.</p>
     */
    SourceDestCheck?: boolean;
    /**
     * <p>The status of the network interface.</p>
     */
    Status?: NetworkInterfaceStatus | string;
    /**
     * <p>The ID of the subnet.</p>
     */
    SubnetId?: string;
    /**
     * <p>The ID of the VPC.</p>
     */
    VpcId?: string;
    /**
     * <p>Describes the type of network interface.</p>
     * 		       <p>Valid values: <code>interface</code> | <code>efa</code>
     *          </p>
     */
    InterfaceType?: string;
}
export declare namespace InstanceNetworkInterface {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: InstanceNetworkInterface) => any;
}
export declare type InstanceStateName = "pending" | "running" | "shutting-down" | "stopped" | "stopping" | "terminated";
/**
 * <p>Describes the current state of an instance.</p>
 */
export interface InstanceState {
    /**
     * <p>The state of the instance as a 16-bit unsigned integer. </p>
     *         <p>The high byte is all of the bits between 2^8 and (2^16)-1, which equals decimal values
     *             between 256 and 65,535. These numerical values are used for internal purposes and should
     *             be ignored.</p>
     *         <p>The low byte is all of the bits between 2^0 and (2^8)-1, which equals decimal values
     *             between 0 and 255. </p>
     *         <p>The valid values for instance-state-code will all be in the range of the low byte and
     *             they are:</p>
     *         <ul>
     *             <li>
     *                 <p>
     *                     <code>0</code> : <code>pending</code>
     *                 </p>
     *             </li>
     *             <li>
     *                 <p>
     *                     <code>16</code> : <code>running</code>
     *                 </p>
     *             </li>
     *             <li>
     *                 <p>
     *                     <code>32</code> : <code>shutting-down</code>
     *                 </p>
     *             </li>
     *             <li>
     *                 <p>
     *                     <code>48</code> : <code>terminated</code>
     *                 </p>
     *             </li>
     *             <li>
     *                 <p>
     *                     <code>64</code> : <code>stopping</code>
     *                 </p>
     *             </li>
     *             <li>
     *                 <p>
     *                     <code>80</code> : <code>stopped</code>
     *                 </p>
     *             </li>
     *          </ul>
     *         <p>You can ignore the high byte value by zeroing out all of the bits above 2^8 or 256 in
     *             decimal.</p>
     */
    Code?: number;
    /**
     * <p>The current state of the instance.</p>
     */
    Name?: InstanceStateName | string;
}
export declare namespace InstanceState {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: InstanceState) => any;
}
/**
 * <p>Describes an instance.</p>
 */
export interface Instance {
    /**
     * <p>The AMI launch index, which can be used to find this instance in the launch
     *             group.</p>
     */
    AmiLaunchIndex?: number;
    /**
     * <p>The ID of the AMI used to launch the instance.</p>
     */
    ImageId?: string;
    /**
     * <p>The ID of the instance.</p>
     */
    InstanceId?: string;
    /**
     * <p>The instance type.</p>
     */
    InstanceType?: _InstanceType | string;
    /**
     * <p>The kernel associated with this instance, if applicable.</p>
     */
    KernelId?: string;
    /**
     * <p>The name of the key pair, if this instance was launched with an associated key
     *             pair.</p>
     */
    KeyName?: string;
    /**
     * <p>The time the instance was launched.</p>
     */
    LaunchTime?: Date;
    /**
     * <p>The monitoring for the instance.</p>
     */
    Monitoring?: Monitoring;
    /**
     * <p>The location where the instance launched, if applicable.</p>
     */
    Placement?: Placement;
    /**
     * <p>The value is <code>Windows</code> for Windows instances; otherwise blank.</p>
     */
    Platform?: PlatformValues | string;
    /**
     * <p>(IPv4 only) The private DNS hostname name assigned to the instance. This DNS hostname
     *             can only be used inside the Amazon EC2 network. This name is not available until the
     *             instance enters the <code>running</code> state. </p>
     *         <p>[EC2-VPC] The Amazon-provided DNS server resolves Amazon-provided private DNS
     *             hostnames if you've enabled DNS resolution and DNS hostnames in your VPC. If you are not
     *             using the Amazon-provided DNS server in your VPC, your custom domain name servers must
     *             resolve the hostname as appropriate.</p>
     */
    PrivateDnsName?: string;
    /**
     * <p>The private IPv4 address assigned to the instance.</p>
     */
    PrivateIpAddress?: string;
    /**
     * <p>The product codes attached to this instance, if applicable.</p>
     */
    ProductCodes?: ProductCode[];
    /**
     * <p>(IPv4 only) The public DNS name assigned to the instance. This name is not available
     *             until the instance enters the <code>running</code> state. For EC2-VPC, this name is only
     *             available if you've enabled DNS hostnames for your VPC.</p>
     */
    PublicDnsName?: string;
    /**
     * <p>The public IPv4 address, or the Carrier IP address assigned to the instance, if
     *             applicable.</p>
     *         <p>A Carrier IP address only applies to an instance launched in a subnet associated with
     *             a Wavelength Zone.</p>
     */
    PublicIpAddress?: string;
    /**
     * <p>The RAM disk associated with this instance, if applicable.</p>
     */
    RamdiskId?: string;
    /**
     * <p>The current state of the instance.</p>
     */
    State?: InstanceState;
    /**
     * <p>The reason for the most recent state transition. This might be an empty string.</p>
     */
    StateTransitionReason?: string;
    /**
     * <p>[EC2-VPC] The ID of the subnet in which the instance is running.</p>
     */
    SubnetId?: string;
    /**
     * <p>[EC2-VPC] The ID of the VPC in which the instance is running.</p>
     */
    VpcId?: string;
    /**
     * <p>The architecture of the image.</p>
     */
    Architecture?: ArchitectureValues | string;
    /**
     * <p>Any block device mapping entries for the instance.</p>
     */
    BlockDeviceMappings?: InstanceBlockDeviceMapping[];
    /**
     * <p>The idempotency token you provided when you launched the instance, if
     *             applicable.</p>
     */
    ClientToken?: string;
    /**
     * <p>Indicates whether the instance is optimized for Amazon EBS I/O. This optimization
     *             provides dedicated throughput to Amazon EBS and an optimized configuration stack to
     *             provide optimal I/O performance. This optimization isn't available with all instance
     *             types. Additional usage charges apply when using an EBS Optimized instance.</p>
     */
    EbsOptimized?: boolean;
    /**
     * <p>Specifies whether enhanced networking with ENA is enabled.</p>
     */
    EnaSupport?: boolean;
    /**
     * <p>The hypervisor type of the instance. The value <code>xen</code> is used for both Xen and
     *             Nitro hypervisors.</p>
     */
    Hypervisor?: HypervisorType | string;
    /**
     * <p>The IAM instance profile associated with the instance, if applicable.</p>
     */
    IamInstanceProfile?: IamInstanceProfile;
    /**
     * <p>Indicates whether this is a Spot Instance or a Scheduled Instance.</p>
     */
    InstanceLifecycle?: InstanceLifecycleType | string;
    /**
     * <p>The Elastic GPU associated with the instance.</p>
     */
    ElasticGpuAssociations?: ElasticGpuAssociation[];
    /**
     * <p> The elastic inference accelerator associated with the instance.</p>
     */
    ElasticInferenceAcceleratorAssociations?: ElasticInferenceAcceleratorAssociation[];
    /**
     * <p>[EC2-VPC] The network interfaces for the instance.</p>
     */
    NetworkInterfaces?: InstanceNetworkInterface[];
    /**
     * <p>The Amazon Resource Name (ARN) of the Outpost.</p>
     */
    OutpostArn?: string;
    /**
     * <p>The device name of the root device volume (for example,
     *             <code>/dev/sda1</code>).</p>
     */
    RootDeviceName?: string;
    /**
     * <p>The root device type used by the AMI. The AMI can use an EBS volume or an instance
     *             store volume.</p>
     */
    RootDeviceType?: DeviceType | string;
    /**
     * <p>The security groups for the instance.</p>
     */
    SecurityGroups?: GroupIdentifier[];
    /**
     * <p>Indicates whether source/destination checking is enabled.</p>
     */
    SourceDestCheck?: boolean;
    /**
     * <p>If the request is a Spot Instance request, the ID of the request.</p>
     */
    SpotInstanceRequestId?: string;
    /**
     * <p>Specifies whether enhanced networking with the Intel 82599 Virtual Function interface
     *             is enabled.</p>
     */
    SriovNetSupport?: string;
    /**
     * <p>The reason for the most recent state transition.</p>
     */
    StateReason?: StateReason;
    /**
     * <p>Any tags assigned to the instance.</p>
     */
    Tags?: Tag[];
    /**
     * <p>The virtualization type of the instance.</p>
     */
    VirtualizationType?: VirtualizationType | string;
    /**
     * <p>The CPU options for the instance.</p>
     */
    CpuOptions?: CpuOptions;
    /**
     * <p>The ID of the Capacity Reservation.</p>
     */
    CapacityReservationId?: string;
    /**
     * <p>Information about the Capacity Reservation targeting option.</p>
     */
    CapacityReservationSpecification?: CapacityReservationSpecificationResponse;
    /**
     * <p>Indicates whether the instance is enabled for hibernation.</p>
     */
    HibernationOptions?: HibernationOptions;
    /**
     * <p>The license configurations.</p>
     */
    Licenses?: LicenseConfiguration[];
    /**
     * <p>The metadata options for the instance.</p>
     */
    MetadataOptions?: InstanceMetadataOptionsResponse;
    /**
     * <p>Indicates whether the instance is enabled for AWS Nitro Enclaves.</p>
     */
    EnclaveOptions?: EnclaveOptions;
    /**
     * <p>The boot mode of the instance. For more information, see <a href="https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/ami-boot.html">Boot modes</a> in the
     *                 <i>Amazon EC2 User Guide</i>.</p>
     */
    BootMode?: BootModeValues | string;
}
export declare namespace Instance {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: Instance) => any;
}
/**
 * <p>Describes a launch request for one or more instances, and includes
 *             owner, requester, and security group information that applies to all
 *             instances in the launch request.</p>
 */
export interface Reservation {
    /**
     * <p>[EC2-Classic only] The security groups.</p>
     */
    Groups?: GroupIdentifier[];
    /**
     * <p>The instances.</p>
     */
    Instances?: Instance[];
    /**
     * <p>The ID of the AWS account that owns the reservation.</p>
     */
    OwnerId?: string;
    /**
     * <p>The ID of the requester that launched the instances on your behalf (for example, AWS
     *             Management Console or Auto Scaling).</p>
     */
    RequesterId?: string;
    /**
     * <p>The ID of the reservation.</p>
     */
    ReservationId?: string;
}
export declare namespace Reservation {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: Reservation) => any;
}
export interface DescribeInstancesResult {
    /**
     * <p>Information about the reservations.</p>
     */
    Reservations?: Reservation[];
    /**
     * <p>The token to use to retrieve the next page of results. This value is <code>null</code>
     *             when there are no more results to return.</p>
     */
    NextToken?: string;
}
export declare namespace DescribeInstancesResult {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: DescribeInstancesResult) => any;
}
export interface DescribeInstanceStatusRequest {
    /**
     * <p>The filters.</p>
     *         <ul>
     *             <li>
     *                 <p>
     *                   <code>availability-zone</code> - The Availability Zone of the instance.</p>
     *             </li>
     *             <li>
     *                 <p>
     *                   <code>event.code</code> - The code for the scheduled event
     *                         (<code>instance-reboot</code> | <code>system-reboot</code> |
     *                         <code>system-maintenance</code> | <code>instance-retirement</code> |
     *                         <code>instance-stop</code>).</p>
     *             </li>
     *             <li>
     *                 <p>
     *                   <code>event.description</code> - A description of the event.</p>
     *             </li>
     *             <li>
     *                 <p>
     *                   <code>event.instance-event-id</code> - The ID of the event whose date and time
     *                     you are modifying.</p>
     *             </li>
     *             <li>
     *                 <p>
     *                   <code>event.not-after</code> - The latest end time for the scheduled event
     *                     (for example, <code>2014-09-15T17:15:20.000Z</code>).</p>
     *             </li>
     *             <li>
     *                 <p>
     *                   <code>event.not-before</code> - The earliest start time for the scheduled
     *                     event (for example, <code>2014-09-15T17:15:20.000Z</code>).</p>
     *             </li>
     *             <li>
     *                 <p>
     *                   <code>event.not-before-deadline</code> - The deadline for starting the event
     *                     (for example, <code>2014-09-15T17:15:20.000Z</code>).</p>
     *             </li>
     *             <li>
     *                 <p>
     *                   <code>instance-state-code</code> - The code for the instance state, as a
     *                     16-bit unsigned integer. The high byte is used for internal purposes and should
     *                     be ignored. The low byte is set based on the state represented. The valid values
     *                     are 0 (pending), 16 (running), 32 (shutting-down), 48 (terminated), 64
     *                     (stopping), and 80 (stopped).</p>
     *             </li>
     *             <li>
     *                 <p>
     *                   <code>instance-state-name</code> - The state of the instance
     *                         (<code>pending</code> | <code>running</code> | <code>shutting-down</code> |
     *                         <code>terminated</code> | <code>stopping</code> |
     *                     <code>stopped</code>).</p>
     *             </li>
     *             <li>
     *                 <p>
     *                   <code>instance-status.reachability</code> - Filters on instance status where
     *                     the name is <code>reachability</code> (<code>passed</code> | <code>failed</code>
     *                     | <code>initializing</code> | <code>insufficient-data</code>).</p>
     *             </li>
     *             <li>
     *                 <p>
     *                   <code>instance-status.status</code> - The status of the instance
     *                         (<code>ok</code> | <code>impaired</code> | <code>initializing</code> |
     *                         <code>insufficient-data</code> | <code>not-applicable</code>).</p>
     *             </li>
     *             <li>
     *                 <p>
     *                   <code>system-status.reachability</code> - Filters on system status where the
     *                     name is <code>reachability</code> (<code>passed</code> | <code>failed</code> |
     *                         <code>initializing</code> | <code>insufficient-data</code>).</p>
     *             </li>
     *             <li>
     *                 <p>
     *                   <code>system-status.status</code> - The system status of the instance
     *                         (<code>ok</code> | <code>impaired</code> | <code>initializing</code> |
     *                         <code>insufficient-data</code> | <code>not-applicable</code>).</p>
     *             </li>
     *          </ul>
     */
    Filters?: Filter[];
    /**
     * <p>The instance IDs.</p>
     *         <p>Default: Describes all your instances.</p>
     *         <p>Constraints: Maximum 100 explicitly specified instance IDs.</p>
     */
    InstanceIds?: string[];
    /**
     * <p>The maximum number of results to return in a single call. To retrieve the remaining
     *             results, make another call with the returned <code>NextToken</code> value. This value
     *             can be between 5 and 1000. You cannot specify this parameter and the instance IDs
     *             parameter in the same call.</p>
     */
    MaxResults?: number;
    /**
     * <p>The token to retrieve the next page of results.</p>
     */
    NextToken?: string;
    /**
     * <p>Checks whether you have the required permissions for the action, without actually making the request,
     *    and provides an error response. If you have the required permissions, the error response is <code>DryRunOperation</code>.
     *    Otherwise, it is <code>UnauthorizedOperation</code>.</p>
     */
    DryRun?: boolean;
    /**
     * <p>When <code>true</code>, includes the health status for all instances. When
     *                 <code>false</code>, includes the health status for running instances only.</p>
     *         <p>Default: <code>false</code>
     *         </p>
     */
    IncludeAllInstances?: boolean;
}
export declare namespace DescribeInstanceStatusRequest {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: DescribeInstanceStatusRequest) => any;
}
export declare type EventCode = "instance-reboot" | "instance-retirement" | "instance-stop" | "system-maintenance" | "system-reboot";
/**
 * <p>Describes a scheduled event for an instance.</p>
 */
export interface InstanceStatusEvent {
    /**
     * <p>The ID of the event.</p>
     */
    InstanceEventId?: string;
    /**
     * <p>The event code.</p>
     */
    Code?: EventCode | string;
    /**
     * <p>A description of the event.</p>
     *         <p>After a scheduled event is completed, it can still be described for up to a week. If
     *             the event has been completed, this description starts with the following text:
     *             [Completed].</p>
     */
    Description?: string;
    /**
     * <p>The latest scheduled end time for the event.</p>
     */
    NotAfter?: Date;
    /**
     * <p>The earliest scheduled start time for the event.</p>
     */
    NotBefore?: Date;
    /**
     * <p>The deadline for starting the event.</p>
     */
    NotBeforeDeadline?: Date;
}
export declare namespace InstanceStatusEvent {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: InstanceStatusEvent) => any;
}
export declare type StatusName = "reachability";
export declare type StatusType = "failed" | "initializing" | "insufficient-data" | "passed";
/**
 * <p>Describes the instance status.</p>
 */
export interface InstanceStatusDetails {
    /**
     * <p>The time when a status check failed. For an instance that was launched and impaired,
     *             this is the time when the instance was launched.</p>
     */
    ImpairedSince?: Date;
    /**
     * <p>The type of instance status.</p>
     */
    Name?: StatusName | string;
    /**
     * <p>The status.</p>
     */
    Status?: StatusType | string;
}
export declare namespace InstanceStatusDetails {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: InstanceStatusDetails) => any;
}
export declare type SummaryStatus = "impaired" | "initializing" | "insufficient-data" | "not-applicable" | "ok";
/**
 * <p>Describes the status of an instance.</p>
 */
export interface InstanceStatusSummary {
    /**
     * <p>The system instance health or application instance health.</p>
     */
    Details?: InstanceStatusDetails[];
    /**
     * <p>The status.</p>
     */
    Status?: SummaryStatus | string;
}
export declare namespace InstanceStatusSummary {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: InstanceStatusSummary) => any;
}
/**
 * <p>Describes the status of an instance.</p>
 */
export interface InstanceStatus {
    /**
     * <p>The Availability Zone of the instance.</p>
     */
    AvailabilityZone?: string;
    /**
     * <p>The Amazon Resource Name (ARN) of the Outpost.</p>
     */
    OutpostArn?: string;
    /**
     * <p>Any scheduled events associated with the instance.</p>
     */
    Events?: InstanceStatusEvent[];
    /**
     * <p>The ID of the instance.</p>
     */
    InstanceId?: string;
    /**
     * <p>The intended state of the instance. <a>DescribeInstanceStatus</a> requires
     *             that an instance be in the <code>running</code> state.</p>
     */
    InstanceState?: InstanceState;
    /**
     * <p>Reports impaired functionality that stems from issues internal to the instance, such
     *             as impaired reachability.</p>
     */
    InstanceStatus?: InstanceStatusSummary;
    /**
     * <p>Reports impaired functionality that stems from issues related to the systems that
     *             support an instance, such as hardware failures and network connectivity problems.</p>
     */
    SystemStatus?: InstanceStatusSummary;
}
export declare namespace InstanceStatus {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: InstanceStatus) => any;
}
export interface DescribeInstanceStatusResult {
    /**
     * <p>Information about the status of the instances.</p>
     */
    InstanceStatuses?: InstanceStatus[];
    /**
     * <p>The token to use to retrieve the next page of results. This value is <code>null</code>
     *             when there are no more results to return.</p>
     */
    NextToken?: string;
}
export declare namespace DescribeInstanceStatusResult {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: DescribeInstanceStatusResult) => any;
}
export declare type LocationType = "availability-zone" | "availability-zone-id" | "region";
export interface DescribeInstanceTypeOfferingsRequest {
    /**
     * <p>Checks whether you have the required permissions for the action, without actually making the request,
     *          and provides an error response. If you have the required permissions, the error response is
     *          <code>DryRunOperation</code>. Otherwise, it is <code>UnauthorizedOperation</code>.</p>
     */
    DryRun?: boolean;
    /**
     * <p>The location type.</p>
     */
    LocationType?: LocationType | string;
    /**
     * <p>One or more filters. Filter names and values are case-sensitive.</p>
     *          <ul>
     *             <li>
     *                <p>
     *                   <code>location</code> - This depends on the location type. For example, if the location type is
     *       <code>region</code> (default), the location is the Region code (for example, <code>us-east-2</code>.)</p>
     *             </li>
     *             <li>
     *                <p>
     *                   <code>instance-type</code> - The instance type. For example,
     *      <code>c5.2xlarge</code>.</p>
     *             </li>
     *          </ul>
     */
    Filters?: Filter[];
    /**
     * <p>The maximum number of results to return for the request in a single page. The remaining results
     *          can be seen by sending another request with the next token value.</p>
     */
    MaxResults?: number;
    /**
     * <p>The token to retrieve the next page of results.</p>
     */
    NextToken?: string;
}
export declare namespace DescribeInstanceTypeOfferingsRequest {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: DescribeInstanceTypeOfferingsRequest) => any;
}
