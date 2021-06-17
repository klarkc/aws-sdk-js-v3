/**
 * <p>Details about the target configuration.</p>
 */
export interface TargetConfigurationRequest {
    /**
     * <p>The number of instances the Covertible Reserved Instance offering can be applied to. This parameter is reserved and cannot
     *       be specified in a request</p>
     */
    InstanceCount?: number;
    /**
     * <p>The Convertible Reserved Instance offering ID.</p>
     */
    OfferingId: string | undefined;
}
export declare namespace TargetConfigurationRequest {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: TargetConfigurationRequest) => any;
}
/**
 * <p>Contains the parameters for accepting the quote.</p>
 */
export interface AcceptReservedInstancesExchangeQuoteRequest {
    /**
     * <p>Checks whether you have the required permissions for the action, without actually making the request,
     *       and provides an error response. If you have the required permissions, the error response is <code>DryRunOperation</code>.
     *       Otherwise, it is <code>UnauthorizedOperation</code>.</p>
     */
    DryRun?: boolean;
    /**
     * <p>The IDs of the Convertible Reserved Instances to exchange for another Convertible
     *             Reserved Instance of the same or higher value.</p>
     */
    ReservedInstanceIds: string[] | undefined;
    /**
     * <p>The configuration of the target Convertible Reserved Instance to exchange for your
     *             current Convertible Reserved Instances.</p>
     */
    TargetConfigurations?: TargetConfigurationRequest[];
}
export declare namespace AcceptReservedInstancesExchangeQuoteRequest {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: AcceptReservedInstancesExchangeQuoteRequest) => any;
}
/**
 * <p>The result of the exchange and whether it was <code>successful</code>.</p>
 */
export interface AcceptReservedInstancesExchangeQuoteResult {
    /**
     * <p>The ID of the successful exchange.</p>
     */
    ExchangeId?: string;
}
export declare namespace AcceptReservedInstancesExchangeQuoteResult {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: AcceptReservedInstancesExchangeQuoteResult) => any;
}
export interface AcceptTransitGatewayMulticastDomainAssociationsRequest {
    /**
     * <p>The ID of the transit gateway multicast domain.</p>
     */
    TransitGatewayMulticastDomainId?: string;
    /**
     * <p>The ID of the transit gateway attachment.</p>
     */
    TransitGatewayAttachmentId?: string;
    /**
     * <p>The IDs of the subnets to associate with the transit gateway multicast domain.</p>
     */
    SubnetIds?: string[];
    /**
     * <p>Checks whether you have the required permissions for the action, without actually making the request,
     *    and provides an error response. If you have the required permissions, the error response is <code>DryRunOperation</code>.
     *    Otherwise, it is <code>UnauthorizedOperation</code>.</p>
     */
    DryRun?: boolean;
}
export declare namespace AcceptTransitGatewayMulticastDomainAssociationsRequest {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: AcceptTransitGatewayMulticastDomainAssociationsRequest) => any;
}
export declare type TransitGatewayAttachmentResourceType = "connect" | "direct-connect-gateway" | "peering" | "tgw-peering" | "vpc" | "vpn";
export declare type TransitGatewayMulitcastDomainAssociationState = "associated" | "associating" | "disassociated" | "disassociating" | "failed" | "pendingAcceptance" | "rejected";
/**
 * <p>Describes the subnet association with the transit gateway multicast domain.</p>
 */
export interface SubnetAssociation {
    /**
     * <p>The ID of the subnet.</p>
     */
    SubnetId?: string;
    /**
     * <p>The state of the subnet association.</p>
     */
    State?: TransitGatewayMulitcastDomainAssociationState | string;
}
export declare namespace SubnetAssociation {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: SubnetAssociation) => any;
}
/**
 * <p>Describes the multicast domain associations.</p>
 */
export interface TransitGatewayMulticastDomainAssociations {
    /**
     * <p>The ID of the transit gateway multicast domain.</p>
     */
    TransitGatewayMulticastDomainId?: string;
    /**
     * <p>The ID of the transit gateway attachment.</p>
     */
    TransitGatewayAttachmentId?: string;
    /**
     * <p>The ID of the resource.</p>
     */
    ResourceId?: string;
    /**
     * <p>The type of resource, for example a VPC attachment.</p>
     */
    ResourceType?: TransitGatewayAttachmentResourceType | string;
    /**
     * <p> The ID of the AWS account that owns the resource.</p>
     */
    ResourceOwnerId?: string;
    /**
     * <p>The subnets associated with the multicast domain.</p>
     */
    Subnets?: SubnetAssociation[];
}
export declare namespace TransitGatewayMulticastDomainAssociations {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: TransitGatewayMulticastDomainAssociations) => any;
}
export interface AcceptTransitGatewayMulticastDomainAssociationsResult {
    /**
     * <p>Describes the multicast domain associations.</p>
     */
    Associations?: TransitGatewayMulticastDomainAssociations;
}
export declare namespace AcceptTransitGatewayMulticastDomainAssociationsResult {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: AcceptTransitGatewayMulticastDomainAssociationsResult) => any;
}
export interface AcceptTransitGatewayPeeringAttachmentRequest {
    /**
     * <p>The ID of the transit gateway attachment.</p>
     */
    TransitGatewayAttachmentId: string | undefined;
    /**
     * <p>Checks whether you have the required permissions for the action, without actually making the request,
     *    and provides an error response. If you have the required permissions, the error response is <code>DryRunOperation</code>.
     *    Otherwise, it is <code>UnauthorizedOperation</code>.</p>
     */
    DryRun?: boolean;
}
export declare namespace AcceptTransitGatewayPeeringAttachmentRequest {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: AcceptTransitGatewayPeeringAttachmentRequest) => any;
}
/**
 * <p>Information about the transit gateway in the peering attachment.</p>
 */
export interface PeeringTgwInfo {
    /**
     * <p>The ID of the transit gateway.</p>
     */
    TransitGatewayId?: string;
    /**
     * <p>The AWS account ID of the owner of the transit gateway.</p>
     */
    OwnerId?: string;
    /**
     * <p>The Region of the transit gateway.</p>
     */
    Region?: string;
}
export declare namespace PeeringTgwInfo {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: PeeringTgwInfo) => any;
}
export declare type TransitGatewayAttachmentState = "available" | "deleted" | "deleting" | "failed" | "failing" | "initiating" | "initiatingRequest" | "modifying" | "pending" | "pendingAcceptance" | "rejected" | "rejecting" | "rollingBack";
/**
 * <p>The status of the transit gateway peering attachment.</p>
 */
export interface PeeringAttachmentStatus {
    /**
     * <p>The status code.</p>
     */
    Code?: string;
    /**
     * <p>The status message, if applicable.</p>
     */
    Message?: string;
}
export declare namespace PeeringAttachmentStatus {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: PeeringAttachmentStatus) => any;
}
/**
 * <p>Describes a tag.</p>
 */
export interface Tag {
    /**
     * <p>The key of the tag.</p>
     *          <p>Constraints: Tag keys are case-sensitive and accept a maximum of 127 Unicode characters.
     *          May not begin with <code>aws:</code>.</p>
     */
    Key?: string;
    /**
     * <p>The value of the tag.</p>
     *          <p>Constraints: Tag values are case-sensitive and accept a maximum of 255 Unicode characters.</p>
     */
    Value?: string;
}
export declare namespace Tag {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: Tag) => any;
}
/**
 * <p>Describes the transit gateway peering attachment.</p>
 */
export interface TransitGatewayPeeringAttachment {
    /**
     * <p>The ID of the transit gateway peering attachment.</p>
     */
    TransitGatewayAttachmentId?: string;
    /**
     * <p>Information about the requester transit gateway.</p>
     */
    RequesterTgwInfo?: PeeringTgwInfo;
    /**
     * <p>Information about the accepter transit gateway.</p>
     */
    AccepterTgwInfo?: PeeringTgwInfo;
    /**
     * <p>The status of the transit gateway peering attachment.</p>
     */
    Status?: PeeringAttachmentStatus;
    /**
     * <p>The state of the transit gateway peering attachment. Note that the <code>initiating</code> state has been deprecated.</p>
     */
    State?: TransitGatewayAttachmentState | string;
    /**
     * <p>The time the transit gateway peering attachment was created.</p>
     */
    CreationTime?: Date;
    /**
     * <p>The tags for the transit gateway peering attachment.</p>
     */
    Tags?: Tag[];
}
export declare namespace TransitGatewayPeeringAttachment {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: TransitGatewayPeeringAttachment) => any;
}
export interface AcceptTransitGatewayPeeringAttachmentResult {
    /**
     * <p>The transit gateway peering attachment.</p>
     */
    TransitGatewayPeeringAttachment?: TransitGatewayPeeringAttachment;
}
export declare namespace AcceptTransitGatewayPeeringAttachmentResult {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: AcceptTransitGatewayPeeringAttachmentResult) => any;
}
export interface AcceptTransitGatewayVpcAttachmentRequest {
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
export declare namespace AcceptTransitGatewayVpcAttachmentRequest {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: AcceptTransitGatewayVpcAttachmentRequest) => any;
}
export declare type ApplianceModeSupportValue = "disable" | "enable";
export declare type DnsSupportValue = "disable" | "enable";
export declare type Ipv6SupportValue = "disable" | "enable";
/**
 * <p>Describes the VPC attachment options.</p>
 */
export interface TransitGatewayVpcAttachmentOptions {
    /**
     * <p>Indicates whether DNS support is enabled.</p>
     */
    DnsSupport?: DnsSupportValue | string;
    /**
     * <p>Indicates whether IPv6 support is disabled.</p>
     */
    Ipv6Support?: Ipv6SupportValue | string;
    /**
     * <p>Indicates whether appliance mode support is enabled.</p>
     */
    ApplianceModeSupport?: ApplianceModeSupportValue | string;
}
export declare namespace TransitGatewayVpcAttachmentOptions {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: TransitGatewayVpcAttachmentOptions) => any;
}
/**
 * <p>Describes a VPC attachment.</p>
 */
export interface TransitGatewayVpcAttachment {
    /**
     * <p>The ID of the attachment.</p>
     */
    TransitGatewayAttachmentId?: string;
    /**
     * <p>The ID of the transit gateway.</p>
     */
    TransitGatewayId?: string;
    /**
     * <p>The ID of the VPC.</p>
     */
    VpcId?: string;
    /**
     * <p>The ID of the AWS account that owns the VPC.</p>
     */
    VpcOwnerId?: string;
    /**
     * <p>The state of the VPC attachment. Note that the <code>initiating</code> state has been deprecated.</p>
     */
    State?: TransitGatewayAttachmentState | string;
    /**
     * <p>The IDs of the subnets.</p>
     */
    SubnetIds?: string[];
    /**
     * <p>The creation time.</p>
     */
    CreationTime?: Date;
    /**
     * <p>The VPC attachment options.</p>
     */
    Options?: TransitGatewayVpcAttachmentOptions;
    /**
     * <p>The tags for the VPC attachment.</p>
     */
    Tags?: Tag[];
}
export declare namespace TransitGatewayVpcAttachment {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: TransitGatewayVpcAttachment) => any;
}
export interface AcceptTransitGatewayVpcAttachmentResult {
    /**
     * <p>The VPC attachment.</p>
     */
    TransitGatewayVpcAttachment?: TransitGatewayVpcAttachment;
}
export declare namespace AcceptTransitGatewayVpcAttachmentResult {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: AcceptTransitGatewayVpcAttachmentResult) => any;
}
export interface AcceptVpcEndpointConnectionsRequest {
    /**
     * <p>Checks whether you have the required permissions for the action, without actually making the request,
     *    and provides an error response. If you have the required permissions, the error response is <code>DryRunOperation</code>.
     *    Otherwise, it is <code>UnauthorizedOperation</code>.</p>
     */
    DryRun?: boolean;
    /**
     * <p>The ID of the VPC endpoint service.</p>
     */
    ServiceId: string | undefined;
    /**
     * <p>The IDs of one or more interface VPC endpoints.</p>
     */
    VpcEndpointIds: string[] | undefined;
}
export declare namespace AcceptVpcEndpointConnectionsRequest {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: AcceptVpcEndpointConnectionsRequest) => any;
}
/**
 * <p>Information about the error that occurred. For more information about errors, see <a href="https://docs.aws.amazon.com/AWSEC2/latest/APIReference/errors-overview.html">Error Codes</a>.</p>
 */
export interface UnsuccessfulItemError {
    /**
     * <p>The error code.</p>
     */
    Code?: string;
    /**
     * <p>The error message accompanying the error code.</p>
     */
    Message?: string;
}
export declare namespace UnsuccessfulItemError {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: UnsuccessfulItemError) => any;
}
/**
 * <p>Information about items that were not successfully processed in a batch call.</p>
 */
export interface UnsuccessfulItem {
    /**
     * <p>Information about the error.</p>
     */
    Error?: UnsuccessfulItemError;
    /**
     * <p>The ID of the resource.</p>
     */
    ResourceId?: string;
}
export declare namespace UnsuccessfulItem {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: UnsuccessfulItem) => any;
}
export interface AcceptVpcEndpointConnectionsResult {
    /**
     * <p>Information about the interface endpoints that were not accepted, if
     *             applicable.</p>
     */
    Unsuccessful?: UnsuccessfulItem[];
}
export declare namespace AcceptVpcEndpointConnectionsResult {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: AcceptVpcEndpointConnectionsResult) => any;
}
export interface AcceptVpcPeeringConnectionRequest {
    /**
     * <p>Checks whether you have the required permissions for the action, without actually making the request,
     *    and provides an error response. If you have the required permissions, the error response is <code>DryRunOperation</code>.
     *    Otherwise, it is <code>UnauthorizedOperation</code>.</p>
     */
    DryRun?: boolean;
    /**
     * <p>The ID of the VPC peering connection. You must specify this parameter in the
     * 			request.</p>
     */
    VpcPeeringConnectionId?: string;
}
export declare namespace AcceptVpcPeeringConnectionRequest {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: AcceptVpcPeeringConnectionRequest) => any;
}
/**
 * <p>Describes an IPv4 CIDR block.</p>
 */
export interface CidrBlock {
    /**
     * <p>The IPv4 CIDR block.</p>
     */
    CidrBlock?: string;
}
export declare namespace CidrBlock {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: CidrBlock) => any;
}
/**
 * <p>Describes an IPv6 CIDR block.</p>
 */
export interface Ipv6CidrBlock {
    /**
     * <p>The IPv6 CIDR block.</p>
     */
    Ipv6CidrBlock?: string;
}
export declare namespace Ipv6CidrBlock {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: Ipv6CidrBlock) => any;
}
/**
 * <p>Describes the VPC peering connection options.</p>
 */
export interface VpcPeeringConnectionOptionsDescription {
    /**
     * <p>Indicates whether a local VPC can resolve public DNS hostnames to private IP addresses when queried from instances in a peer VPC.</p>
     */
    AllowDnsResolutionFromRemoteVpc?: boolean;
    /**
     * <p>Indicates whether a local ClassicLink connection can communicate with the peer VPC over the VPC peering connection.</p>
     */
    AllowEgressFromLocalClassicLinkToRemoteVpc?: boolean;
    /**
     * <p>Indicates whether a local VPC can communicate with a ClassicLink connection in the peer VPC over the VPC peering connection.</p>
     */
    AllowEgressFromLocalVpcToRemoteClassicLink?: boolean;
}
export declare namespace VpcPeeringConnectionOptionsDescription {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: VpcPeeringConnectionOptionsDescription) => any;
}
/**
 * <p>Describes a VPC in a VPC peering connection.</p>
 */
export interface VpcPeeringConnectionVpcInfo {
    /**
     * <p>The IPv4 CIDR block for the VPC.</p>
     */
    CidrBlock?: string;
    /**
     * <p>The IPv6 CIDR block for the VPC.</p>
     */
    Ipv6CidrBlockSet?: Ipv6CidrBlock[];
    /**
     * <p>Information about the IPv4 CIDR blocks for the VPC.</p>
     */
    CidrBlockSet?: CidrBlock[];
    /**
     * <p>The AWS account ID of the VPC owner.</p>
     */
    OwnerId?: string;
    /**
     * <p>Information about the VPC peering connection options for the accepter or requester VPC.</p>
     */
    PeeringOptions?: VpcPeeringConnectionOptionsDescription;
    /**
     * <p>The ID of the VPC.</p>
     */
    VpcId?: string;
    /**
     * <p>The Region in which the VPC is located.</p>
     */
    Region?: string;
}
export declare namespace VpcPeeringConnectionVpcInfo {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: VpcPeeringConnectionVpcInfo) => any;
}
export declare type VpcPeeringConnectionStateReasonCode = "active" | "deleted" | "deleting" | "expired" | "failed" | "initiating-request" | "pending-acceptance" | "provisioning" | "rejected";
/**
 * <p>Describes the status of a VPC peering connection.</p>
 */
export interface VpcPeeringConnectionStateReason {
    /**
     * <p>The status of the VPC peering connection.</p>
     */
    Code?: VpcPeeringConnectionStateReasonCode | string;
    /**
     * <p>A message that provides more information about the status, if applicable.</p>
     */
    Message?: string;
}
export declare namespace VpcPeeringConnectionStateReason {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: VpcPeeringConnectionStateReason) => any;
}
/**
 * <p>Describes a VPC peering connection.</p>
 */
export interface VpcPeeringConnection {
    /**
     * <p>Information about the accepter VPC. CIDR block information is only returned when describing an active VPC peering connection.</p>
     */
    AccepterVpcInfo?: VpcPeeringConnectionVpcInfo;
    /**
     * <p>The time that an unaccepted VPC peering connection will expire.</p>
     */
    ExpirationTime?: Date;
    /**
     * <p>Information about the requester VPC. CIDR block information is only returned when describing an active VPC peering connection.</p>
     */
    RequesterVpcInfo?: VpcPeeringConnectionVpcInfo;
    /**
     * <p>The status of the VPC peering connection.</p>
     */
    Status?: VpcPeeringConnectionStateReason;
    /**
     * <p>Any tags assigned to the resource.</p>
     */
    Tags?: Tag[];
    /**
     * <p>The ID of the VPC peering connection.</p>
     */
    VpcPeeringConnectionId?: string;
}
export declare namespace VpcPeeringConnection {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: VpcPeeringConnection) => any;
}
export interface AcceptVpcPeeringConnectionResult {
    /**
     * <p>Information about the VPC peering connection.</p>
     */
    VpcPeeringConnection?: VpcPeeringConnection;
}
export declare namespace AcceptVpcPeeringConnectionResult {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: AcceptVpcPeeringConnectionResult) => any;
}
/**
 * <p>Describes a value of an account attribute.</p>
 */
export interface AccountAttributeValue {
    /**
     * <p>The value of the attribute.</p>
     */
    AttributeValue?: string;
}
export declare namespace AccountAttributeValue {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: AccountAttributeValue) => any;
}
/**
 * <p>Describes an account attribute.</p>
 */
export interface AccountAttribute {
    /**
     * <p>The name of the account attribute.</p>
     */
    AttributeName?: string;
    /**
     * <p>The values for the account attribute.</p>
     */
    AttributeValues?: AccountAttributeValue[];
}
export declare namespace AccountAttribute {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: AccountAttribute) => any;
}
export declare type AccountAttributeName = "default-vpc" | "supported-platforms";
export declare enum InstanceHealthStatus {
    HEALTHY_STATUS = "healthy",
    UNHEALTHY_STATUS = "unhealthy"
}
/**
 * <p>Describes a running instance in a Spot Fleet.</p>
 */
export interface ActiveInstance {
    /**
     * <p>The ID of the instance.</p>
     */
    InstanceId?: string;
    /**
     * <p>The instance type.</p>
     */
    InstanceType?: string;
    /**
     * <p>The ID of the Spot Instance request.</p>
     */
    SpotInstanceRequestId?: string;
    /**
     * <p>The health status of the instance. If the status of either the instance status check
     *           or the system status check is <code>impaired</code>, the health status of the instance
     *           is <code>unhealthy</code>. Otherwise, the health status is <code>healthy</code>.</p>
     */
    InstanceHealth?: InstanceHealthStatus | string;
}
export declare namespace ActiveInstance {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: ActiveInstance) => any;
}
export declare enum ActivityStatus {
    ERROR = "error",
    FULFILLED = "fulfilled",
    PENDING_FULFILLMENT = "pending_fulfillment",
    PENDING_TERMINATION = "pending_termination"
}
/**
 * <p>An entry for a prefix list.</p>
 */
export interface AddPrefixListEntry {
    /**
     * <p>The CIDR block.</p>
     */
    Cidr: string | undefined;
    /**
     * <p>A description for the entry.</p>
     *         <p>Constraints: Up to 255 characters in length.</p>
     */
    Description?: string;
}
export declare namespace AddPrefixListEntry {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: AddPrefixListEntry) => any;
}
export declare type DomainType = "standard" | "vpc";
/**
 * <p>Describes an Elastic IP address, or a carrier IP address.</p>
 */
export interface Address {
    /**
     * <p>The ID of the instance that the address is associated with (if any).</p>
     */
    InstanceId?: string;
    /**
     * <p>The Elastic IP address.</p>
     */
    PublicIp?: string;
    /**
     * <p>The ID representing the allocation of the address for use with EC2-VPC.</p>
     */
    AllocationId?: string;
    /**
     * <p>The ID representing the association of the address with an instance in a VPC.</p>
     */
    AssociationId?: string;
    /**
     * <p>Indicates whether this Elastic IP address is for use with instances
     * 				in EC2-Classic (<code>standard</code>) or instances in a VPC (<code>vpc</code>).</p>
     */
    Domain?: DomainType | string;
    /**
     * <p>The ID of the network interface.</p>
     */
    NetworkInterfaceId?: string;
    /**
     * <p>The ID of the AWS account that owns the network interface.</p>
     */
    NetworkInterfaceOwnerId?: string;
    /**
     * <p>The private IP address associated with the Elastic IP address.</p>
     */
    PrivateIpAddress?: string;
    /**
     * <p>Any tags assigned to the Elastic IP address.</p>
     */
    Tags?: Tag[];
    /**
     * <p>The ID of an address pool.</p>
     */
    PublicIpv4Pool?: string;
    /**
     * <p>The name of the unique set of Availability Zones, Local Zones, or Wavelength Zones from
     *       which AWS advertises IP addresses. </p>
     */
    NetworkBorderGroup?: string;
    /**
     * <p>The customer-owned IP address.</p>
     */
    CustomerOwnedIp?: string;
    /**
     * <p>The ID of the customer-owned address pool.</p>
     */
    CustomerOwnedIpv4Pool?: string;
    /**
     * <p>The carrier IP address associated. This option is only available for network interfaces
     *       which  reside in a subnet in a Wavelength Zone (for example an EC2 instance). </p>
     */
    CarrierIp?: string;
}
export declare namespace Address {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: Address) => any;
}
/**
 * <p>The status of an updated pointer (PTR) record for an Elastic IP address.</p>
 */
export interface PtrUpdateStatus {
    /**
     * <p>The value for the PTR record update.</p>
     */
    Value?: string;
    /**
     * <p>The status of the PTR record update.</p>
     */
    Status?: string;
    /**
     * <p>The reason for the PTR record update.</p>
     */
    Reason?: string;
}
export declare namespace PtrUpdateStatus {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: PtrUpdateStatus) => any;
}
/**
 * <p>The attributes associated with an Elastic IP address.</p>
 */
export interface AddressAttribute {
    /**
     * <p>The public IP address.</p>
     */
    PublicIp?: string;
    /**
     * <p>[EC2-VPC] The allocation ID.</p>
     */
    AllocationId?: string;
    /**
     * <p>The pointer (PTR) record for the IP address.</p>
     */
    PtrRecord?: string;
    /**
     * <p>The updated PTR record for the IP address.</p>
     */
    PtrRecordUpdate?: PtrUpdateStatus;
}
export declare namespace AddressAttribute {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: AddressAttribute) => any;
}
export declare type AddressAttributeName = "domain-name";
export interface AdvertiseByoipCidrRequest {
    /**
     * <p>The address range, in CIDR notation. This must be the exact range that you provisioned.
     *          You can't advertise only a portion of the provisioned range.</p>
     */
    Cidr: string | undefined;
    /**
     * <p>Checks whether you have the required permissions for the action, without actually making the request,
     *    and provides an error response. If you have the required permissions, the error response is <code>DryRunOperation</code>.
     *    Otherwise, it is <code>UnauthorizedOperation</code>.</p>
     */
    DryRun?: boolean;
}
export declare namespace AdvertiseByoipCidrRequest {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: AdvertiseByoipCidrRequest) => any;
}
export declare type ByoipCidrState = "advertised" | "deprovisioned" | "failed-deprovision" | "failed-provision" | "pending-deprovision" | "pending-provision" | "provisioned" | "provisioned-not-publicly-advertisable";
/**
 * <p>Information about an address range that is provisioned for use with your AWS resources
 *          through bring your own IP addresses (BYOIP).</p>
 */
export interface ByoipCidr {
    /**
     * <p>The address range, in CIDR notation.</p>
     */
    Cidr?: string;
    /**
     * <p>The description of the address range.</p>
     */
    Description?: string;
    /**
     * <p>Upon success, contains the ID of the address pool. Otherwise, contains an error message.</p>
     */
    StatusMessage?: string;
    /**
     * <p>The state of the address pool.</p>
     */
    State?: ByoipCidrState | string;
}
export declare namespace ByoipCidr {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: ByoipCidr) => any;
}
export interface AdvertiseByoipCidrResult {
    /**
     * <p>Information about the address range.</p>
     */
    ByoipCidr?: ByoipCidr;
}
export declare namespace AdvertiseByoipCidrResult {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: AdvertiseByoipCidrResult) => any;
}
export declare type Affinity = "default" | "host";
export declare type ResourceType = "client-vpn-endpoint" | "customer-gateway" | "dedicated-host" | "dhcp-options" | "egress-only-internet-gateway" | "elastic-gpu" | "elastic-ip" | "export-image-task" | "export-instance-task" | "fleet" | "fpga-image" | "host-reservation" | "image" | "import-image-task" | "import-snapshot-task" | "instance" | "internet-gateway" | "key-pair" | "launch-template" | "local-gateway-route-table-vpc-association" | "natgateway" | "network-acl" | "network-insights-analysis" | "network-insights-path" | "network-interface" | "placement-group" | "reserved-instances" | "route-table" | "security-group" | "snapshot" | "spot-fleet-request" | "spot-instances-request" | "subnet" | "traffic-mirror-filter" | "traffic-mirror-session" | "traffic-mirror-target" | "transit-gateway" | "transit-gateway-attachment" | "transit-gateway-connect-peer" | "transit-gateway-multicast-domain" | "transit-gateway-route-table" | "volume" | "vpc" | "vpc-flow-log" | "vpc-peering-connection" | "vpn-connection" | "vpn-gateway";
/**
 * <p>The tags to apply to a resource when the resource is being created.</p>
 */
export interface TagSpecification {
    /**
     * <p>The type of resource to tag. Currently, the resource types that support tagging on
     *          creation are: <code>capacity-reservation</code> | <code>carrier-gateway</code> |
     *             <code>client-vpn-endpoint</code> |  <code>customer-gateway</code> |
     *     	   <code>dedicated-host</code> | <code>dhcp-options</code> | <code>egress-only-internet-gateway</code> | <code>elastic-ip</code> | <code>elastic-gpu</code> |
     *     	   <code>export-image-task</code>
     *          | <code>export-instance-task</code> | <code>fleet</code> | <code>fpga-image</code> |
     *     	   <code>host-reservation</code> | <code>image</code>| <code>import-image-task</code> |
     *             <code>import-snapshot-task</code> | <code>instance</code> |
     *             <code>internet-gateway</code> | <code>ipv4pool-ec2</code> | <code>ipv6pool-ec2</code> |
     *     	   <code>key-pair</code> | <code>launch-template</code> | <code>local-gateway-route-table-vpc-association</code> | <code>placement-group</code> |
     *     	   <code>prefix-list</code> | <code>natgateway</code> | <code>network-acl</code> | <code>network-interface</code> |
     *     	   <code>reserved-instances</code> |<code>route-table</code> | <code>security-group</code>| <code>snapshot</code> | <code>spot-fleet-request</code>
     *          | <code>spot-instances-request</code> | <code>snapshot</code> | <code>subnet</code> |
     *             <code>traffic-mirror-filter</code> | <code>traffic-mirror-session</code> |
     *             <code>traffic-mirror-target</code> | <code>transit-gateway</code> |
     *     	   <code>transit-gateway-attachment</code> | <code>transit-gateway-multicast-domain</code> | <code>transit-gateway-route-table</code> |
     *             <code>volume</code> |<code>vpc</code> | <code> vpc-peering-connection</code> |
     *             <code>vpc-endpoint</code> (for interface and gateway endpoints) |
     *             <code>vpc-endpoint-service</code> (for AWS PrivateLink) | <code>vpc-flow-log</code> |
     *             <code>vpn-connection</code> | <code>vpn-gateway</code>.</p>
     *          <p>To tag a resource after it has been created, see <a href="https://docs.aws.amazon.com/AWSEC2/latest/APIReference/API_CreateTags.html">CreateTags</a>.</p>
     */
    ResourceType?: ResourceType | string;
    /**
     * <p>The tags to apply to the resource.</p>
     */
    Tags?: Tag[];
}
export declare namespace TagSpecification {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: TagSpecification) => any;
}
export interface AllocateAddressRequest {
    /**
     * <p>Indicates whether the Elastic IP address is for use with instances in a VPC or instances in EC2-Classic.</p>
     *          <p>Default: If the Region supports EC2-Classic, the default is <code>standard</code>. Otherwise, the default
     *          is <code>vpc</code>.</p>
     */
    Domain?: DomainType | string;
    /**
     * <p>[EC2-VPC] The Elastic IP address to recover or an IPv4 address from an address pool.</p>
     */
    Address?: string;
    /**
     * <p>The ID of an address pool that you own. Use this parameter to let Amazon EC2 select an address from the address pool.
     *        To specify a specific address from the address pool, use the <code>Address</code> parameter instead.</p>
     */
    PublicIpv4Pool?: string;
    /**
     * <p> A unique set of Availability Zones, Local Zones, or Wavelength Zones from which AWS
     *       advertises IP addresses. Use this parameter to limit the IP address to this location. IP
     *       addresses cannot move between network border groups.</p>
     *          <p>Use <a href="https://docs.aws.amazon.com/AWSEC2/latest/APIReference/API_DescribeAvailabilityZones.html">DescribeAvailabilityZones</a> to view the network border groups.</p>
     *
     *          <note>
     *             <p>You cannot use a network border group with EC2 Classic. If you attempt this operation on EC2 classic, you will receive an <code>InvalidParameterCombination</code> error. For more information, see <a href="https://docs.aws.amazon.com/AWSEC2/latest/APIReference/errors-overview.html">Error Codes</a>.</p>
     *          </note>
     */
    NetworkBorderGroup?: string;
    /**
     * <p>The ID of a customer-owned address pool. Use this parameter to let Amazon EC2
     *         select an address from the address pool. Alternatively, specify a specific
     *         address from the address pool.</p>
     */
    CustomerOwnedIpv4Pool?: string;
    /**
     * <p>Checks whether you have the required permissions for the action, without actually making the request,
     *    and provides an error response. If you have the required permissions, the error response is <code>DryRunOperation</code>.
     *    Otherwise, it is <code>UnauthorizedOperation</code>.</p>
     */
    DryRun?: boolean;
    /**
     * <p>The tags to assign to the Elastic IP address.</p>
     */
    TagSpecifications?: TagSpecification[];
}
export declare namespace AllocateAddressRequest {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: AllocateAddressRequest) => any;
}
export interface AllocateAddressResult {
    /**
     * <p>The Elastic IP address.</p>
     */
    PublicIp?: string;
    /**
     * <p>[EC2-VPC] The ID that AWS assigns to represent the allocation of the Elastic IP address for use with instances in a VPC.</p>
     */
    AllocationId?: string;
    /**
     * <p>The ID of an address pool.</p>
     */
    PublicIpv4Pool?: string;
    /**
     * <p>The set of Availability Zones, Local Zones, or Wavelength Zones from which AWS advertises
     *       IP addresses.</p>
     */
    NetworkBorderGroup?: string;
    /**
     * <p>Indicates whether the Elastic IP address is for use with instances in a VPC (<code>vpc</code>) or
     * 				instances in EC2-Classic (<code>standard</code>).</p>
     */
    Domain?: DomainType | string;
    /**
     * <p>The customer-owned IP address.</p>
     */
    CustomerOwnedIp?: string;
    /**
     * <p>The ID of the customer-owned address pool.</p>
     */
    CustomerOwnedIpv4Pool?: string;
    /**
     * <p>The carrier IP address. This option is only available for network interfaces which  reside
     *       in a subnet in a Wavelength Zone (for example an EC2 instance). </p>
     */
    CarrierIp?: string;
}
export declare namespace AllocateAddressResult {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: AllocateAddressResult) => any;
}
export declare type AutoPlacement = "off" | "on";
export declare type HostRecovery = "off" | "on";
export interface AllocateHostsRequest {
    /**
     * <p>Indicates whether the host accepts any untargeted instance launches that
     *     		match its instance type configuration, or if it only accepts Host tenancy
     *     		instance launches that specify its unique host ID. For more information,
     *     		see <a href="https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/how-dedicated-hosts-work.html#dedicated-hosts-understanding">
     *         	Understanding auto-placement and affinity</a> in the <i>Amazon EC2 User Guide</i>.</p>
     *
     *         <p>Default: <code>on</code>
     *          </p>
     */
    AutoPlacement?: AutoPlacement | string;
    /**
     * <p>The Availability Zone in which to allocate the Dedicated Host.</p>
     */
    AvailabilityZone: string | undefined;
    /**
     * <p>Unique, case-sensitive identifier that you provide to ensure the idempotency of the request. For more information, see <a href="https://docs.aws.amazon.com/AWSEC2/latest/APIReference/Run_Instance_Idempotency.html">Ensuring Idempotency</a>.</p>
     */
    ClientToken?: string;
    /**
     * <p>Specifies the instance type to be supported by the Dedicated Hosts. If you
     * 		specify an instance type, the Dedicated Hosts support instances of the
     * 		specified instance type only.</p>
     *
     *     	    <p>If you want the Dedicated Hosts to support multiple instance types in a specific
     *     		instance family, omit this parameter and specify <b>InstanceFamily</b>
     *     		instead. You cannot specify <b>InstanceType</b> and
     *     		<b>InstanceFamily</b> in the same request.</p>
     */
    InstanceType?: string;
    /**
     * <p>Specifies the instance family to be supported by the Dedicated Hosts. If you specify
     * 			an instance family, the Dedicated Hosts support multiple instance types within that
     * 			instance family.</p>
     *
     * 		       <p>If you want the Dedicated Hosts to support a specific instance type only, omit this
     * 			parameter and specify <b>InstanceType</b>
     * 			instead. You cannot specify <b>InstanceFamily</b> and
     * 			<b>InstanceType</b> in the same request.</p>
     */
    InstanceFamily?: string;
    /**
     * <p>The number of Dedicated Hosts to allocate to your account with these parameters.</p>
     */
    Quantity: number | undefined;
    /**
     * <p>The tags to apply to the Dedicated Host during creation.</p>
     */
    TagSpecifications?: TagSpecification[];
    /**
     * <p>Indicates whether to enable or disable host recovery for the Dedicated Host.
     * 			Host recovery is disabled by default. For more information, see
     * 			<a href="https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/dedicated-hosts-recovery.html">
     * 			Host recovery</a> in the <i>Amazon EC2 User Guide</i>.</p>
     * 		       <p>Default: <code>off</code>
     *          </p>
     */
    HostRecovery?: HostRecovery | string;
}
export declare namespace AllocateHostsRequest {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: AllocateHostsRequest) => any;
}
/**
 * <p>Contains the output of AllocateHosts.</p>
 */
export interface AllocateHostsResult {
    /**
     * <p>The ID of the allocated Dedicated Host. This is used to launch an instance onto a
     * 			specific host.</p>
     */
    HostIds?: string[];
}
export declare namespace AllocateHostsResult {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: AllocateHostsResult) => any;
}
export declare type AllocationState = "available" | "pending" | "permanent-failure" | "released" | "released-permanent-failure" | "under-assessment";
export declare enum AllocationStrategy {
    CAPACITY_OPTIMIZED = "capacityOptimized",
    CAPACITY_OPTIMIZED_PRIORITIZED = "capacityOptimizedPrioritized",
    DIVERSIFIED = "diversified",
    LOWEST_PRICE = "lowestPrice"
}
export declare enum PrincipalType {
    Account = "Account",
    All = "All",
    OrganizationUnit = "OrganizationUnit",
    Role = "Role",
    Service = "Service",
    User = "User"
}
/**
 * <p>Describes a principal.</p>
 */
export interface AllowedPrincipal {
    /**
     * <p>The type of principal.</p>
     */
    PrincipalType?: PrincipalType | string;
    /**
     * <p>The Amazon Resource Name (ARN) of the principal.</p>
     */
    Principal?: string;
}
export declare namespace AllowedPrincipal {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: AllowedPrincipal) => any;
}
export declare type AllowsMultipleInstanceTypes = "off" | "on";
/**
 * <p>Describes an potential intermediate component of a feasible path.</p>
 */
export interface AlternatePathHint {
    /**
     * <p>The ID of the component.</p>
     */
    ComponentId?: string;
    /**
     * <p>The Amazon Resource Name (ARN) of the component.</p>
     */
    ComponentArn?: string;
}
export declare namespace AlternatePathHint {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: AlternatePathHint) => any;
}
export interface ApplySecurityGroupsToClientVpnTargetNetworkRequest {
    /**
     * <p>The ID of the Client VPN endpoint.</p>
     */
    ClientVpnEndpointId: string | undefined;
    /**
     * <p>The ID of the VPC in which the associated target network is located.</p>
     */
    VpcId: string | undefined;
    /**
     * <p>The IDs of the security groups to apply to the associated target network. Up to 5 security groups can
     * 			be applied to an associated target network.</p>
     */
    SecurityGroupIds: string[] | undefined;
    /**
     * <p>Checks whether you have the required permissions for the action, without actually making the request, and provides an error response. If you have the required permissions, the error response is <code>DryRunOperation</code>. Otherwise, it is <code>UnauthorizedOperation</code>.</p>
     */
    DryRun?: boolean;
}
export declare namespace ApplySecurityGroupsToClientVpnTargetNetworkRequest {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: ApplySecurityGroupsToClientVpnTargetNetworkRequest) => any;
}
export interface ApplySecurityGroupsToClientVpnTargetNetworkResult {
    /**
     * <p>The IDs of the applied security groups.</p>
     */
    SecurityGroupIds?: string[];
}
export declare namespace ApplySecurityGroupsToClientVpnTargetNetworkResult {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: ApplySecurityGroupsToClientVpnTargetNetworkResult) => any;
}
export interface AssignIpv6AddressesRequest {
    /**
     * <p>The number of additional IPv6 addresses to assign to the network interface.
     *     		The specified number of IPv6 addresses are assigned in addition to the
     *     		existing IPv6 addresses that are already assigned to the network interface.
     *     		Amazon EC2 automatically selects the IPv6 addresses from the subnet range. You
     *     		can't use this option if specifying specific IPv6 addresses.</p>
     */
    Ipv6AddressCount?: number;
    /**
     * <p>One or more specific IPv6 addresses to be assigned to the network interface. You can't use this option if you're specifying a number of IPv6 addresses.</p>
     */
    Ipv6Addresses?: string[];
    /**
     * <p>The ID of the network interface.</p>
     */
    NetworkInterfaceId: string | undefined;
}
export declare namespace AssignIpv6AddressesRequest {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: AssignIpv6AddressesRequest) => any;
}
export interface AssignIpv6AddressesResult {
    /**
     * <p>The new IPv6 addresses assigned to the network interface. Existing IPv6 addresses
     *         	that were assigned to the network interface before the request are not included.</p>
     */
    AssignedIpv6Addresses?: string[];
    /**
     * <p>The ID of the network interface.</p>
     */
    NetworkInterfaceId?: string;
}
export declare namespace AssignIpv6AddressesResult {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: AssignIpv6AddressesResult) => any;
}
/**
 * <p>Contains the parameters for AssignPrivateIpAddresses.</p>
 */
export interface AssignPrivateIpAddressesRequest {
    /**
     * <p>Indicates whether to allow an IP address that is already assigned to another network interface or instance to be reassigned to the specified network interface.</p>
     */
    AllowReassignment?: boolean;
    /**
     * <p>The ID of the network interface.</p>
     */
    NetworkInterfaceId: string | undefined;
    /**
     * <p>One or more IP addresses to be assigned as a secondary private IP address to the network interface. You can't specify this parameter when also specifying a number of secondary IP addresses.</p>
     *         <p>If you don't specify an IP address, Amazon EC2 automatically selects an IP address within the subnet range.</p>
     */
    PrivateIpAddresses?: string[];
    /**
     * <p>The number of secondary IP addresses to assign to the network interface. You can't specify this parameter when also specifying private IP addresses.</p>
     */
    SecondaryPrivateIpAddressCount?: number;
}
export declare namespace AssignPrivateIpAddressesRequest {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: AssignPrivateIpAddressesRequest) => any;
}
/**
 * <p>Describes the private IP addresses assigned to a network interface.</p>
 */
export interface AssignedPrivateIpAddress {
    /**
     * <p>The private IP address assigned to the network interface.</p>
     */
    PrivateIpAddress?: string;
}
export declare namespace AssignedPrivateIpAddress {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: AssignedPrivateIpAddress) => any;
}
export interface AssignPrivateIpAddressesResult {
    /**
     * <p>The ID of the network interface.</p>
     */
    NetworkInterfaceId?: string;
    /**
     * <p>The private IP addresses assigned to the network interface.</p>
     */
    AssignedPrivateIpAddresses?: AssignedPrivateIpAddress[];
}
export declare namespace AssignPrivateIpAddressesResult {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: AssignPrivateIpAddressesResult) => any;
}
export interface AssociateAddressRequest {
    /**
     * <p>[EC2-VPC] The allocation ID. This is required for EC2-VPC.</p>
     */
    AllocationId?: string;
    /**
     * <p>The ID of the instance. The instance must have exactly one attached network interface.
     *       For EC2-VPC, you can specify either the instance ID or the network interface ID, but not both.
     *       For EC2-Classic, you must specify an instance ID and the instance must be in the running
     *       state.</p>
     */
    InstanceId?: string;
    /**
     * <p>[EC2-Classic] The Elastic IP address to associate with the instance. This is required for
     *       EC2-Classic.</p>
     */
    PublicIp?: string;
    /**
     * <p>[EC2-VPC] For a VPC in an EC2-Classic account, specify true to allow an Elastic IP address that is already associated with an instance or network interface to be reassociated with the specified instance or network interface. Otherwise, the operation fails. In a VPC in an EC2-VPC-only account, reassociation is automatic, therefore you can specify false to ensure the operation fails if the Elastic IP address is already associated with another resource.</p>
     */
    AllowReassociation?: boolean;
    /**
     * <p>Checks whether you have the required permissions for the action, without actually making the request,
     *    and provides an error response. If you have the required permissions, the error response is <code>DryRunOperation</code>.
     *    Otherwise, it is <code>UnauthorizedOperation</code>.</p>
     */
    DryRun?: boolean;
    /**
     * <p>[EC2-VPC] The ID of the network interface. If the instance has more than one network interface, you must specify a network interface ID.</p>
     *    	     <p>For EC2-VPC, you can specify either the instance ID or the network interface ID, but not both. </p>
     */
    NetworkInterfaceId?: string;
    /**
     * <p>[EC2-VPC] The primary or secondary private IP address to associate with the Elastic IP address. If no private IP address is specified, the Elastic IP address is associated with the primary private IP address.</p>
     */
    PrivateIpAddress?: string;
}
export declare namespace AssociateAddressRequest {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: AssociateAddressRequest) => any;
}
export interface AssociateAddressResult {
    /**
     * <p>[EC2-VPC] The ID that represents the association of the Elastic IP address with an instance.</p>
     */
    AssociationId?: string;
}
export declare namespace AssociateAddressResult {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: AssociateAddressResult) => any;
}
export interface AssociateClientVpnTargetNetworkRequest {
    /**
     * <p>The ID of the Client VPN endpoint.</p>
     */
    ClientVpnEndpointId: string | undefined;
    /**
     * <p>The ID of the subnet to associate with the Client VPN endpoint.</p>
     */
    SubnetId: string | undefined;
    /**
     * <p>Unique, case-sensitive identifier that you provide to ensure the idempotency of the request. For more information, see <a href="https://docs.aws.amazon.com/AWSEC2/latest/APIReference/Run_Instance_Idempotency.html">How to Ensure Idempotency</a>.</p>
     */
    ClientToken?: string;
    /**
     * <p>Checks whether you have the required permissions for the action, without actually making the request, and provides an error response. If you have the required permissions, the error response is <code>DryRunOperation</code>. Otherwise, it is <code>UnauthorizedOperation</code>.</p>
     */
    DryRun?: boolean;
}
export declare namespace AssociateClientVpnTargetNetworkRequest {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: AssociateClientVpnTargetNetworkRequest) => any;
}
export declare type AssociationStatusCode = "associated" | "associating" | "association-failed" | "disassociated" | "disassociating";
/**
 * <p>Describes the state of a target network association.</p>
 */
export interface AssociationStatus {
    /**
     * <p>The state of the target network association.</p>
     */
    Code?: AssociationStatusCode | string;
    /**
     * <p>A message about the status of the target network association, if applicable.</p>
     */
    Message?: string;
}
export declare namespace AssociationStatus {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: AssociationStatus) => any;
}
export interface AssociateClientVpnTargetNetworkResult {
    /**
     * <p>The unique ID of the target network association.</p>
     */
    AssociationId?: string;
    /**
     * <p>The current state of the target network association.</p>
     */
    Status?: AssociationStatus;
}
export declare namespace AssociateClientVpnTargetNetworkResult {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: AssociateClientVpnTargetNetworkResult) => any;
}
export interface AssociateDhcpOptionsRequest {
    /**
     * <p>The ID of the DHCP options set, or <code>default</code> to associate
     *         no DHCP options with the VPC.</p>
     */
    DhcpOptionsId: string | undefined;
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
export declare namespace AssociateDhcpOptionsRequest {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: AssociateDhcpOptionsRequest) => any;
}
export interface AssociateEnclaveCertificateIamRoleRequest {
    /**
     * <p>The ARN of the ACM certificate with which to associate the IAM role.</p>
     */
    CertificateArn?: string;
    /**
     * <p>The ARN of the IAM role to associate with the ACM certificate. You can associate up to 16 IAM roles with an ACM
     * 			certificate.</p>
     */
    RoleArn?: string;
    /**
     * <p>Checks whether you have the required permissions for the action, without actually making the request, and provides an error response. If you have the required permissions, the error response is <code>DryRunOperation</code>. Otherwise, it is <code>UnauthorizedOperation</code>.</p>
     */
    DryRun?: boolean;
}
export declare namespace AssociateEnclaveCertificateIamRoleRequest {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: AssociateEnclaveCertificateIamRoleRequest) => any;
}
export interface AssociateEnclaveCertificateIamRoleResult {
    /**
     * <p>The name of the Amazon S3 bucket to which the certificate was uploaded.</p>
     */
    CertificateS3BucketName?: string;
    /**
     * <p>The Amazon S3 object key where the certificate, certificate chain, and encrypted private key bundle are stored. The
     * 			object key is formatted as follows:  <code>role_arn</code>/<code>certificate_arn</code>.</p>
     */
    CertificateS3ObjectKey?: string;
    /**
     * <p>The ID of the AWS KMS CMK used to encrypt the private key of the certificate.</p>
     */
    EncryptionKmsKeyId?: string;
}
export declare namespace AssociateEnclaveCertificateIamRoleResult {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: AssociateEnclaveCertificateIamRoleResult) => any;
}
/**
 * <p>Describes an IAM instance profile.</p>
 */
export interface IamInstanceProfileSpecification {
    /**
     * <p>The Amazon Resource Name (ARN) of the instance profile.</p>
     */
    Arn?: string;
    /**
     * <p>The name of the instance profile.</p>
     */
    Name?: string;
}
export declare namespace IamInstanceProfileSpecification {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: IamInstanceProfileSpecification) => any;
}
export interface AssociateIamInstanceProfileRequest {
    /**
     * <p>The IAM instance profile.</p>
     */
    IamInstanceProfile: IamInstanceProfileSpecification | undefined;
    /**
     * <p>The ID of the instance.</p>
     */
    InstanceId: string | undefined;
}
export declare namespace AssociateIamInstanceProfileRequest {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: AssociateIamInstanceProfileRequest) => any;
}
/**
 * <p>Describes an IAM instance profile.</p>
 */
export interface IamInstanceProfile {
    /**
     * <p>The Amazon Resource Name (ARN) of the instance profile.</p>
     */
    Arn?: string;
    /**
     * <p>The ID of the instance profile.</p>
     */
    Id?: string;
}
export declare namespace IamInstanceProfile {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: IamInstanceProfile) => any;
}
export declare enum IamInstanceProfileAssociationState {
    ASSOCIATED = "associated",
    ASSOCIATING = "associating",
    DISASSOCIATED = "disassociated",
    DISASSOCIATING = "disassociating"
}
/**
 * <p>Describes an association between an IAM instance profile and an instance.</p>
 */
export interface IamInstanceProfileAssociation {
    /**
     * <p>The ID of the association.</p>
     */
    AssociationId?: string;
    /**
     * <p>The ID of the instance.</p>
     */
    InstanceId?: string;
    /**
     * <p>The IAM instance profile.</p>
     */
    IamInstanceProfile?: IamInstanceProfile;
    /**
     * <p>The state of the association.</p>
     */
    State?: IamInstanceProfileAssociationState | string;
    /**
     * <p>The time the IAM instance profile was associated with the instance.</p>
     */
    Timestamp?: Date;
}
export declare namespace IamInstanceProfileAssociation {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: IamInstanceProfileAssociation) => any;
}
export interface AssociateIamInstanceProfileResult {
    /**
     * <p>Information about the IAM instance profile association.</p>
     */
    IamInstanceProfileAssociation?: IamInstanceProfileAssociation;
}
export declare namespace AssociateIamInstanceProfileResult {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: AssociateIamInstanceProfileResult) => any;
}
export interface AssociateRouteTableRequest {
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
    /**
     * <p>The ID of the subnet.</p>
     */
    SubnetId?: string;
    /**
     * <p>The ID of the internet gateway or virtual private gateway.</p>
     */
    GatewayId?: string;
}
export declare namespace AssociateRouteTableRequest {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: AssociateRouteTableRequest) => any;
}
export declare type RouteTableAssociationStateCode = "associated" | "associating" | "disassociated" | "disassociating" | "failed";
/**
 * <p>Describes the state of an association between a route table and a subnet or gateway.</p>
 */
export interface RouteTableAssociationState {
    /**
     * <p>The state of the association.</p>
     */
    State?: RouteTableAssociationStateCode | string;
    /**
     * <p>The status message, if applicable.</p>
     */
    StatusMessage?: string;
}
export declare namespace RouteTableAssociationState {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: RouteTableAssociationState) => any;
}
export interface AssociateRouteTableResult {
    /**
     * <p>The route table association ID. This ID is required for disassociating the route
     * 			table.</p>
     */
    AssociationId?: string;
    /**
     * <p>The state of the association.</p>
     */
    AssociationState?: RouteTableAssociationState;
}
export declare namespace AssociateRouteTableResult {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: AssociateRouteTableResult) => any;
}
export interface AssociateSubnetCidrBlockRequest {
    /**
     * <p>The IPv6 CIDR block for your subnet. The subnet must have a /64 prefix
     *             length.</p>
     */
    Ipv6CidrBlock: string | undefined;
    /**
     * <p>The ID of your subnet.</p>
     */
    SubnetId: string | undefined;
}
export declare namespace AssociateSubnetCidrBlockRequest {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: AssociateSubnetCidrBlockRequest) => any;
}
export declare type SubnetCidrBlockStateCode = "associated" | "associating" | "disassociated" | "disassociating" | "failed" | "failing";
/**
 * <p>Describes the state of a CIDR block.</p>
 */
export interface SubnetCidrBlockState {
    /**
     * <p>The state of a CIDR block.</p>
     */
    State?: SubnetCidrBlockStateCode | string;
    /**
     * <p>A message about the status of the CIDR block, if applicable.</p>
     */
    StatusMessage?: string;
}
export declare namespace SubnetCidrBlockState {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: SubnetCidrBlockState) => any;
}
/**
 * <p>Describes an IPv6 CIDR block associated with a subnet.</p>
 */
export interface SubnetIpv6CidrBlockAssociation {
    /**
     * <p>The association ID for the CIDR block.</p>
     */
    AssociationId?: string;
    /**
     * <p>The IPv6 CIDR block.</p>
     */
    Ipv6CidrBlock?: string;
    /**
     * <p>Information about the state of the CIDR block.</p>
     */
    Ipv6CidrBlockState?: SubnetCidrBlockState;
}
export declare namespace SubnetIpv6CidrBlockAssociation {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: SubnetIpv6CidrBlockAssociation) => any;
}
export interface AssociateSubnetCidrBlockResult {
    /**
     * <p>Information about the IPv6 CIDR block association.</p>
     */
    Ipv6CidrBlockAssociation?: SubnetIpv6CidrBlockAssociation;
    /**
     * <p>The ID of the subnet.</p>
     */
    SubnetId?: string;
}
export declare namespace AssociateSubnetCidrBlockResult {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: AssociateSubnetCidrBlockResult) => any;
}
export interface AssociateTransitGatewayMulticastDomainRequest {
    /**
     * <p>The ID of the transit gateway multicast domain.</p>
     */
    TransitGatewayMulticastDomainId?: string;
    /**
     * <p>The ID of the transit gateway attachment to associate with the transit gateway multicast domain.</p>
     */
    TransitGatewayAttachmentId?: string;
    /**
     * <p>The IDs of the subnets to associate with the transit gateway multicast domain.</p>
     */
    SubnetIds?: string[];
    /**
     * <p>Checks whether you have the required permissions for the action, without actually making the request,
     *    and provides an error response. If you have the required permissions, the error response is <code>DryRunOperation</code>.
     *    Otherwise, it is <code>UnauthorizedOperation</code>.</p>
     */
    DryRun?: boolean;
}
export declare namespace AssociateTransitGatewayMulticastDomainRequest {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: AssociateTransitGatewayMulticastDomainRequest) => any;
}
export interface AssociateTransitGatewayMulticastDomainResult {
    /**
     * <p>Information about the transit gateway multicast domain associations.</p>
     */
    Associations?: TransitGatewayMulticastDomainAssociations;
}
export declare namespace AssociateTransitGatewayMulticastDomainResult {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: AssociateTransitGatewayMulticastDomainResult) => any;
}
export interface AssociateTransitGatewayRouteTableRequest {
    /**
     * <p>The ID of the transit gateway route table.</p>
     */
    TransitGatewayRouteTableId: string | undefined;
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
export declare namespace AssociateTransitGatewayRouteTableRequest {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: AssociateTransitGatewayRouteTableRequest) => any;
}
export declare type TransitGatewayAssociationState = "associated" | "associating" | "disassociated" | "disassociating";
/**
 * <p>Describes an association between a resource attachment and a transit gateway route table.</p>
 */
export interface TransitGatewayAssociation {
    /**
     * <p>The ID of the transit gateway route table.</p>
     */
    TransitGatewayRouteTableId?: string;
    /**
     * <p>The ID of the attachment.</p>
     */
    TransitGatewayAttachmentId?: string;
    /**
     * <p>The ID of the resource.</p>
     */
    ResourceId?: string;
    /**
     * <p>The resource type. Note that the <code>tgw-peering</code> resource type has been deprecated.</p>
     */
    ResourceType?: TransitGatewayAttachmentResourceType | string;
    /**
     * <p>The state of the association.</p>
     */
    State?: TransitGatewayAssociationState | string;
}
export declare namespace TransitGatewayAssociation {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: TransitGatewayAssociation) => any;
}
export interface AssociateTransitGatewayRouteTableResult {
    /**
     * <p>The ID of the association.</p>
     */
    Association?: TransitGatewayAssociation;
}
export declare namespace AssociateTransitGatewayRouteTableResult {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: AssociateTransitGatewayRouteTableResult) => any;
}
export interface AssociateVpcCidrBlockRequest {
    /**
     * <p>Requests an Amazon-provided IPv6 CIDR block with a /56 prefix length for the VPC. You cannot specify the range of IPv6 addresses, or the size of the CIDR block.</p>
     */
    AmazonProvidedIpv6CidrBlock?: boolean;
    /**
     * <p>An IPv4 CIDR block to associate with the VPC.</p>
     */
    CidrBlock?: string;
    /**
     * <p>The ID of the VPC.</p>
     */
    VpcId: string | undefined;
    /**
     * <p>The name of the location from which we advertise the IPV6 CIDR block. Use this parameter
     *       to limit the CIDR block to this location.</p>
     *          <p> You must set <code>AmazonProvidedIpv6CidrBlock</code> to <code>true</code> to use this parameter.</p>
     *          <p> You can have one IPv6 CIDR block association per network border group.</p>
     */
    Ipv6CidrBlockNetworkBorderGroup?: string;
    /**
     * <p>The ID of an IPv6 address pool from which to allocate the IPv6 CIDR block.</p>
     */
    Ipv6Pool?: string;
    /**
     * <p>An IPv6 CIDR block from the IPv6 address pool. You must also specify <code>Ipv6Pool</code> in the request.</p>
     *         <p>To let Amazon choose the IPv6 CIDR block for you, omit this parameter.</p>
     */
    Ipv6CidrBlock?: string;
}
export declare namespace AssociateVpcCidrBlockRequest {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: AssociateVpcCidrBlockRequest) => any;
}
export declare type VpcCidrBlockStateCode = "associated" | "associating" | "disassociated" | "disassociating" | "failed" | "failing";
/**
 * <p>Describes the state of a CIDR block.</p>
 */
export interface VpcCidrBlockState {
    /**
     * <p>The state of the CIDR block.</p>
     */
    State?: VpcCidrBlockStateCode | string;
    /**
     * <p>A message about the status of the CIDR block, if applicable.</p>
     */
    StatusMessage?: string;
}
export declare namespace VpcCidrBlockState {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: VpcCidrBlockState) => any;
}
/**
 * <p>Describes an IPv4 CIDR block associated with a VPC.</p>
 */
export interface VpcCidrBlockAssociation {
    /**
     * <p>The association ID for the IPv4 CIDR block.</p>
     */
    AssociationId?: string;
    /**
     * <p>The IPv4 CIDR block.</p>
     */
    CidrBlock?: string;
    /**
     * <p>Information about the state of the CIDR block.</p>
     */
    CidrBlockState?: VpcCidrBlockState;
}
export declare namespace VpcCidrBlockAssociation {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: VpcCidrBlockAssociation) => any;
}
/**
 * <p>Describes an IPv6 CIDR block associated with a VPC.</p>
 */
export interface VpcIpv6CidrBlockAssociation {
    /**
     * <p>The association ID for the IPv6 CIDR block.</p>
     */
    AssociationId?: string;
    /**
     * <p>The IPv6 CIDR block.</p>
     */
    Ipv6CidrBlock?: string;
    /**
     * <p>Information about the state of the CIDR block.</p>
     */
    Ipv6CidrBlockState?: VpcCidrBlockState;
    /**
     * <p>The name of the unique set of Availability Zones, Local Zones, or Wavelength Zones from
     *       which AWS advertises IP addresses, for example, <code>us-east-1-wl1-bos-wlz-1</code>.</p>
     */
    NetworkBorderGroup?: string;
    /**
     * <p>The ID of the IPv6 address pool from which the IPv6 CIDR block is allocated.</p>
     */
    Ipv6Pool?: string;
}
export declare namespace VpcIpv6CidrBlockAssociation {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: VpcIpv6CidrBlockAssociation) => any;
}
export interface AssociateVpcCidrBlockResult {
    /**
     * <p>Information about the IPv6 CIDR block association.</p>
     */
    Ipv6CidrBlockAssociation?: VpcIpv6CidrBlockAssociation;
    /**
     * <p>Information about the IPv4 CIDR block association.</p>
     */
    CidrBlockAssociation?: VpcCidrBlockAssociation;
    /**
     * <p>The ID of the VPC.</p>
     */
    VpcId?: string;
}
export declare namespace AssociateVpcCidrBlockResult {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: AssociateVpcCidrBlockResult) => any;
}
export interface AttachClassicLinkVpcRequest {
    /**
     * <p>Checks whether you have the required permissions for the action, without actually making the request,
     *    and provides an error response. If you have the required permissions, the error response is <code>DryRunOperation</code>.
     *    Otherwise, it is <code>UnauthorizedOperation</code>.</p>
     */
    DryRun?: boolean;
    /**
     * <p>The ID of one or more of the VPC's security groups. You cannot specify security groups from a different VPC.</p>
     */
    Groups: string[] | undefined;
    /**
     * <p>The ID of an EC2-Classic instance to link to the ClassicLink-enabled VPC.</p>
     */
    InstanceId: string | undefined;
    /**
     * <p>The ID of a ClassicLink-enabled VPC.</p>
     */
    VpcId: string | undefined;
}
export declare namespace AttachClassicLinkVpcRequest {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: AttachClassicLinkVpcRequest) => any;
}
export interface AttachClassicLinkVpcResult {
    /**
     * <p>Returns <code>true</code> if the request succeeds; otherwise, it returns an error.</p>
     */
    Return?: boolean;
}
export declare namespace AttachClassicLinkVpcResult {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: AttachClassicLinkVpcResult) => any;
}
export interface AttachInternetGatewayRequest {
    /**
     * <p>Checks whether you have the required permissions for the action, without actually making the request,
     *    and provides an error response. If you have the required permissions, the error response is <code>DryRunOperation</code>.
     *    Otherwise, it is <code>UnauthorizedOperation</code>.</p>
     */
    DryRun?: boolean;
    /**
     * <p>The ID of the internet gateway.</p>
     */
    InternetGatewayId: string | undefined;
    /**
     * <p>The ID of the VPC.</p>
     */
    VpcId: string | undefined;
}
export declare namespace AttachInternetGatewayRequest {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: AttachInternetGatewayRequest) => any;
}
/**
 * <p>Contains the parameters for AttachNetworkInterface.</p>
 */
export interface AttachNetworkInterfaceRequest {
    /**
     * <p>The index of the device for the network interface attachment.</p>
     */
    DeviceIndex: number | undefined;
    /**
     * <p>Checks whether you have the required permissions for the action, without actually making the request,
     *             and provides an error response. If you have the required permissions, the error response is <code>DryRunOperation</code>.
     *             Otherwise, it is <code>UnauthorizedOperation</code>.</p>
     */
    DryRun?: boolean;
    /**
     * <p>The ID of the instance.</p>
     */
    InstanceId: string | undefined;
    /**
     * <p>The ID of the network interface.</p>
     */
    NetworkInterfaceId: string | undefined;
    /**
     * <p>The index of the network card. Some instance types support multiple network cards.
     *             The primary network interface must be assigned to network card index 0.
     *             The default is network card index 0.</p>
     */
    NetworkCardIndex?: number;
}
export declare namespace AttachNetworkInterfaceRequest {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: AttachNetworkInterfaceRequest) => any;
}
/**
 * <p>Contains the output of AttachNetworkInterface.</p>
 */
export interface AttachNetworkInterfaceResult {
    /**
     * <p>The ID of the network interface attachment.</p>
     */
    AttachmentId?: string;
    /**
     * <p>The index of the network card.</p>
     */
    NetworkCardIndex?: number;
}
export declare namespace AttachNetworkInterfaceResult {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: AttachNetworkInterfaceResult) => any;
}
export interface AttachVolumeRequest {
    /**
     * <p>The device name (for example, <code>/dev/sdh</code> or <code>xvdh</code>).</p>
     */
    Device: string | undefined;
    /**
     * <p>The ID of the instance.</p>
     */
    InstanceId: string | undefined;
    /**
     * <p>The ID of the EBS volume. The volume and instance must be within the same Availability
     *       Zone.</p>
     */
    VolumeId: string | undefined;
    /**
     * <p>Checks whether you have the required permissions for the action, without actually making the request,
     *    and provides an error response. If you have the required permissions, the error response is <code>DryRunOperation</code>.
     *    Otherwise, it is <code>UnauthorizedOperation</code>.</p>
     */
    DryRun?: boolean;
}
export declare namespace AttachVolumeRequest {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: AttachVolumeRequest) => any;
}
export declare type VolumeAttachmentState = "attached" | "attaching" | "busy" | "detached" | "detaching";
/**
 * <p>Describes volume attachment details.</p>
 */
export interface VolumeAttachment {
    /**
     * <p>The time stamp when the attachment initiated.</p>
     */
    AttachTime?: Date;
    /**
     * <p>The device name.</p>
     */
    Device?: string;
    /**
     * <p>The ID of the instance.</p>
     */
    InstanceId?: string;
    /**
     * <p>The attachment state of the volume.</p>
     */
    State?: VolumeAttachmentState | string;
    /**
     * <p>The ID of the volume.</p>
     */
    VolumeId?: string;
    /**
     * <p>Indicates whether the EBS volume is deleted on instance termination.</p>
     */
    DeleteOnTermination?: boolean;
}
export declare namespace VolumeAttachment {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: VolumeAttachment) => any;
}
/**
 * <p>Contains the parameters for AttachVpnGateway.</p>
 */
export interface AttachVpnGatewayRequest {
    /**
     * <p>The ID of the VPC.</p>
     */
    VpcId: string | undefined;
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
export declare namespace AttachVpnGatewayRequest {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: AttachVpnGatewayRequest) => any;
}
export declare type AttachmentStatus = "attached" | "attaching" | "detached" | "detaching";
/**
 * <p>Describes an attachment between a virtual private gateway and a VPC.</p>
 */
export interface VpcAttachment {
    /**
     * <p>The current state of the attachment.</p>
     */
    State?: AttachmentStatus | string;
    /**
     * <p>The ID of the VPC.</p>
     */
    VpcId?: string;
}
export declare namespace VpcAttachment {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: VpcAttachment) => any;
}
/**
 * <p>Contains the output of AttachVpnGateway.</p>
 */
export interface AttachVpnGatewayResult {
    /**
     * <p>Information about the attachment.</p>
     */
    VpcAttachment?: VpcAttachment;
}
export declare namespace AttachVpnGatewayResult {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: AttachVpnGatewayResult) => any;
}
export interface AuthorizeClientVpnIngressRequest {
    /**
     * <p>The ID of the Client VPN endpoint.</p>
     */
    ClientVpnEndpointId: string | undefined;
    /**
     * <p>The IPv4 address range, in CIDR notation, of the network for which access is being authorized.</p>
     */
    TargetNetworkCidr: string | undefined;
    /**
     * <p>The ID of the group to grant access to, for example, the Active Directory group or identity provider (IdP) group. Required if <code>AuthorizeAllGroups</code> is <code>false</code> or not specified.</p>
     */
    AccessGroupId?: string;
    /**
     * <p>Indicates whether to grant access to all clients. Specify <code>true</code> to grant all
     *             clients who successfully establish a VPN connection access to the network. Must be set
     *             to <code>true</code> if <code>AccessGroupId</code> is not specified.</p>
     */
    AuthorizeAllGroups?: boolean;
    /**
     * <p>A brief description of the authorization rule.</p>
     */
    Description?: string;
    /**
     * <p>Unique, case-sensitive identifier that you provide to ensure the idempotency of the request. For more information, see <a href="https://docs.aws.amazon.com/AWSEC2/latest/APIReference/Run_Instance_Idempotency.html">How to Ensure Idempotency</a>.</p>
     */
    ClientToken?: string;
    /**
     * <p>Checks whether you have the required permissions for the action, without actually making the request, and provides an error response. If you have the required permissions, the error response is <code>DryRunOperation</code>. Otherwise, it is <code>UnauthorizedOperation</code>.</p>
     */
    DryRun?: boolean;
}
export declare namespace AuthorizeClientVpnIngressRequest {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: AuthorizeClientVpnIngressRequest) => any;
}
export declare type ClientVpnAuthorizationRuleStatusCode = "active" | "authorizing" | "failed" | "revoking";
/**
 * <p>Describes the state of an authorization rule.</p>
 */
export interface ClientVpnAuthorizationRuleStatus {
    /**
     * <p>The state of the authorization rule.</p>
     */
    Code?: ClientVpnAuthorizationRuleStatusCode | string;
    /**
     * <p>A message about the status of the authorization rule, if applicable.</p>
     */
    Message?: string;
}
export declare namespace ClientVpnAuthorizationRuleStatus {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: ClientVpnAuthorizationRuleStatus) => any;
}
export interface AuthorizeClientVpnIngressResult {
    /**
     * <p>The current state of the authorization rule.</p>
     */
    Status?: ClientVpnAuthorizationRuleStatus;
}
export declare namespace AuthorizeClientVpnIngressResult {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: AuthorizeClientVpnIngressResult) => any;
}
/**
 * <p>Describes an IPv4 range.</p>
 */
export interface IpRange {
    /**
     * <p>The IPv4 CIDR range. You can either specify a CIDR range or a source security group,
     *             not both. To specify a single IPv4 address, use the /32 prefix length.</p>
     */
    CidrIp?: string;
    /**
     * <p>A description for the security group rule that references this IPv4 address range.</p>
     *          <p>Constraints: Up to 255 characters in length. Allowed characters are a-z, A-Z, 0-9,
     *         spaces, and ._-:/()#,@[]+=&;{}!$*</p>
     */
    Description?: string;
}
export declare namespace IpRange {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: IpRange) => any;
}
/**
 * <p>[EC2-VPC only] Describes an IPv6 range.</p>
 */
export interface Ipv6Range {
    /**
     * <p>The IPv6 CIDR range. You can either specify a CIDR range or a source security group,
     *         not both. To specify a single IPv6 address, use the /128 prefix length.</p>
     */
    CidrIpv6?: string;
    /**
     * <p>A description for the security group rule that references this IPv6 address range.</p>
     *          <p>Constraints: Up to 255 characters in length. Allowed characters are a-z, A-Z, 0-9,
     *         spaces, and ._-:/()#,@[]+=&;{}!$*</p>
     */
    Description?: string;
}
export declare namespace Ipv6Range {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: Ipv6Range) => any;
}
/**
 * <p>Describes a prefix list ID.</p>
 */
export interface PrefixListId {
    /**
     * <p>A description for the security group rule that references this prefix list ID.</p>
     *          <p>Constraints: Up to 255 characters in length. Allowed characters are a-z, A-Z, 0-9,
     *       spaces, and ._-:/()#,@[]+=;{}!$*</p>
     */
    Description?: string;
    /**
     * <p>The ID of the prefix.</p>
     */
    PrefixListId?: string;
}
export declare namespace PrefixListId {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: PrefixListId) => any;
}
/**
 * <p>Describes a security group and AWS account ID pair.</p>
 */
export interface UserIdGroupPair {
    /**
     * <p>A description for the security group rule that references this user ID group
     * 			pair.</p>
     *          <p>Constraints: Up to 255 characters in length. Allowed characters are a-z, A-Z, 0-9,
     *       spaces, and ._-:/()#,@[]+=;{}!$*</p>
     */
    Description?: string;
    /**
     * <p>The ID of the security group.</p>
     */
    GroupId?: string;
    /**
     * <p>The name of the security group. In a request, use this parameter for a security group
     *             in EC2-Classic or a default VPC only. For a security group in a nondefault VPC, use the
     *             security group ID. </p>
     *         <p>For a referenced security group in another VPC, this value is not returned if the
     *             referenced security group is deleted.</p>
     */
    GroupName?: string;
    /**
     * <p>The status of a VPC peering connection, if applicable.</p>
     */
    PeeringStatus?: string;
    /**
     * <p>The ID of an AWS account.</p>
     *         <p>For a referenced security group in another VPC, the account ID of the referenced
     *             security group is returned in the response. If the referenced security group is deleted,
     *             this value is not returned.</p>
     *          <p>[EC2-Classic] Required when adding or removing rules that reference a security group
     *             in another AWS account.</p>
     */
    UserId?: string;
    /**
     * <p>The ID of the VPC for the referenced security group, if applicable.</p>
     */
    VpcId?: string;
    /**
     * <p>The ID of the VPC peering connection, if applicable.</p>
     */
    VpcPeeringConnectionId?: string;
}
export declare namespace UserIdGroupPair {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: UserIdGroupPair) => any;
}
/**
 * <p>Describes a set of permissions for a security group rule.</p>
 */
export interface IpPermission {
    /**
     * <p>The start of port range for the TCP and UDP protocols, or an ICMP/ICMPv6 type number.
     *         A value of <code>-1</code> indicates all ICMP/ICMPv6 types. If you specify all
     * 		ICMP/ICMPv6 types, you must specify all codes.</p>
     */
    FromPort?: number;
    /**
     * <p>The IP protocol name (<code>tcp</code>, <code>udp</code>, <code>icmp</code>, <code>icmpv6</code>)
     *         or number (see <a href="http://www.iana.org/assignments/protocol-numbers/protocol-numbers.xhtml">Protocol Numbers</a>).</p>
     *          <p>[VPC only] Use <code>-1</code> to specify all protocols. When authorizing
     *         security group rules, specifying <code>-1</code> or a protocol number other than
     *         <code>tcp</code>, <code>udp</code>, <code>icmp</code>, or <code>icmpv6</code> allows
     *         traffic on all ports, regardless of any port range you specify. For <code>tcp</code>,
     *         <code>udp</code>, and <code>icmp</code>, you must specify a port range. For <code>icmpv6</code>,
     *         the port range is optional; if you omit the port range, traffic for all types and codes is allowed.</p>
     */
    IpProtocol?: string;
    /**
     * <p>The IPv4 ranges.</p>
     */
    IpRanges?: IpRange[];
    /**
     * <p>[VPC only] The IPv6 ranges.</p>
     */
    Ipv6Ranges?: Ipv6Range[];
    /**
     * <p>[VPC only] The prefix list IDs.</p>
     */
    PrefixListIds?: PrefixListId[];
    /**
     * <p>The end of port range for the TCP and UDP protocols, or an ICMP/ICMPv6 code. A value
     * 		of <code>-1</code> indicates all ICMP/ICMPv6 codes. If you specify all ICMP/ICMPv6 types,
     *         you must specify all codes.</p>
     */
    ToPort?: number;
    /**
     * <p>The security group and AWS account ID pairs.</p>
     */
    UserIdGroupPairs?: UserIdGroupPair[];
}
export declare namespace IpPermission {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: IpPermission) => any;
}
export interface AuthorizeSecurityGroupEgressRequest {
    /**
     * <p>Checks whether you have the required permissions for the action, without actually making the request,
     *    and provides an error response. If you have the required permissions, the error response is <code>DryRunOperation</code>.
     *    Otherwise, it is <code>UnauthorizedOperation</code>.</p>
     */
    DryRun?: boolean;
    /**
     * <p>The ID of the security group.</p>
     */
    GroupId: string | undefined;
    /**
     * <p>The sets of IP permissions. You can't specify a destination security group and a CIDR IP
     *             address range in the same set of permissions.</p>
     */
    IpPermissions?: IpPermission[];
    /**
     * <p>Not supported. Use a set of IP permissions to specify the CIDR.</p>
     */
    CidrIp?: string;
    /**
     * <p>Not supported. Use a set of IP permissions to specify the port.</p>
     */
    FromPort?: number;
    /**
     * <p>Not supported. Use a set of IP permissions to specify the protocol name or
     *             number.</p>
     */
    IpProtocol?: string;
    /**
     * <p>Not supported. Use a set of IP permissions to specify the port.</p>
     */
    ToPort?: number;
    /**
     * <p>Not supported. Use a set of IP permissions to specify a
     *             destination security group.</p>
     */
    SourceSecurityGroupName?: string;
    /**
     * <p>Not supported. Use a set of IP permissions to specify a
     *             destination security group.</p>
     */
    SourceSecurityGroupOwnerId?: string;
}
export declare namespace AuthorizeSecurityGroupEgressRequest {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: AuthorizeSecurityGroupEgressRequest) => any;
}
export interface AuthorizeSecurityGroupIngressRequest {
    /**
     * <p>The IPv4 address range, in CIDR format. You can't specify this parameter when specifying a source
     *       security group. To specify an IPv6 address range, use a set of IP permissions.</p>
     *          <p>Alternatively, use a set of IP permissions to specify multiple rules and a description for the rule.</p>
     */
    CidrIp?: string;
    /**
     * <p>The start of port range for the TCP and UDP protocols, or an ICMP type number.
     * 			For the ICMP type number, use <code>-1</code> to specify all types. If you
     * 			specify all ICMP types, you must specify all codes.</p>
     *          <p>Alternatively, use a set of IP permissions to specify multiple rules and a description for the rule.</p>
     */
    FromPort?: number;
    /**
     * <p>The ID of the security group. You must specify either the security group ID or the
     * 			security group name in the request. For security groups in a nondefault VPC, you must
     * 			specify the security group ID.</p>
     */
    GroupId?: string;
    /**
     * <p>[EC2-Classic, default VPC] The name of the security group. You must specify either the
     * 			security group ID or the security group name in the request.</p>
     */
    GroupName?: string;
    /**
     * <p>The sets of IP permissions.</p>
     */
    IpPermissions?: IpPermission[];
    /**
     * <p>The IP protocol name (<code>tcp</code>, <code>udp</code>, <code>icmp</code>) or number
     *       (see <a href="http://www.iana.org/assignments/protocol-numbers/protocol-numbers.xhtml">Protocol Numbers</a>). To specify <code>icmpv6</code>, use a set of IP permissions.</p>
     *          <p>[VPC only] Use <code>-1</code> to specify all protocols. If you specify <code>-1</code> or a
     *          protocol other than <code>tcp</code>, <code>udp</code>, or <code>icmp</code>, traffic on all ports
     *          is allowed, regardless of any ports you specify.</p>
     *          <p>Alternatively, use a set of IP permissions to specify multiple rules and a description for the rule.</p>
     */
    IpProtocol?: string;
    /**
     * <p>[EC2-Classic, default VPC] The name of the source security group. You can't specify this parameter
     *          in combination with the following parameters: the CIDR IP address range, the start of the port range,
     *          the IP protocol, and the end of the port range. Creates rules that grant full ICMP, UDP, and TCP access.
     *          To create a rule with a specific IP protocol and port range, use a set of IP permissions instead. For
     *          EC2-VPC, the source security group must be in the same VPC.</p>
     */
    SourceSecurityGroupName?: string;
    /**
     * <p>[nondefault VPC] The AWS account ID for the source security group, if the source security group is
     *          in a different account. You can't specify this parameter in combination with the following parameters:
     *          the CIDR IP address range, the IP protocol, the start of the port range, and the end of the port range.
     *          Creates rules that grant full ICMP, UDP, and TCP access. To create a rule with a specific IP protocol
     *          and port range, use a set of IP permissions instead.</p>
     */
    SourceSecurityGroupOwnerId?: string;
    /**
     * <p>The end of port range for the TCP and UDP protocols, or an ICMP code number.
     * 			For the ICMP code number, use <code>-1</code> to specify all codes. If you
     * 			specify all ICMP types, you must specify all codes.</p>
     *          <p>Alternatively, use a set of IP permissions to specify multiple rules and a description for the rule.</p>
     */
    ToPort?: number;
    /**
     * <p>Checks whether you have the required permissions for the action, without actually making the request,
     *    and provides an error response. If you have the required permissions, the error response is <code>DryRunOperation</code>.
     *    Otherwise, it is <code>UnauthorizedOperation</code>.</p>
     */
    DryRun?: boolean;
}
export declare namespace AuthorizeSecurityGroupIngressRequest {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: AuthorizeSecurityGroupIngressRequest) => any;
}
/**
 * <p>Describes the storage parameters for S3 and S3 buckets for an instance store-backed AMI.</p>
 */
export interface S3Storage {
    /**
     * <p>The access key ID of the owner of the bucket. Before you specify a value for your access key ID, review and follow the guidance
     *        in <a href="https://docs.aws.amazon.com/general/latest/gr/aws-access-keys-best-practices.html">Best Practices for Managing AWS Access Keys</a>.</p>
     */
    AWSAccessKeyId?: string;
    /**
     * <p>The bucket in which to store the AMI. You can specify a bucket that you already own or a new bucket that Amazon EC2 creates on your behalf. If you specify a bucket that belongs to someone else, Amazon EC2 returns an error.</p>
     */
    Bucket?: string;
    /**
     * <p>The beginning of the file name of the AMI.</p>
     */
    Prefix?: string;
    /**
     * <p>An Amazon S3 upload policy that gives Amazon EC2 permission to upload items into Amazon S3 on your behalf.</p>
     */
    UploadPolicy?: Uint8Array;
    /**
     * <p>The signature of the JSON document.</p>
     */
    UploadPolicySignature?: string;
}
export declare namespace S3Storage {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: S3Storage) => any;
}
/**
 * <p>Describes the storage location for an instance store-backed AMI.</p>
 */
export interface Storage {
    /**
     * <p>An Amazon S3 storage location.</p>
     */
    S3?: S3Storage;
}
export declare namespace Storage {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: Storage) => any;
}
/**
 * <p>Contains the parameters for BundleInstance.</p>
 */
export interface BundleInstanceRequest {
    /**
     * <p>The ID of the instance to bundle.</p>
     *          <p>Type: String</p>
     *          <p>Default: None</p>
     *          <p>Required: Yes</p>
     */
    InstanceId: string | undefined;
    /**
     * <p>The bucket in which to store the AMI. You can specify a bucket that you already own or a new bucket that Amazon EC2 creates on your behalf. If you specify a bucket that belongs to someone else, Amazon EC2 returns an error.</p>
     */
    Storage: Storage | undefined;
    /**
     * <p>Checks whether you have the required permissions for the action, without actually making the request,
     *        and provides an error response. If you have the required permissions, the error response is <code>DryRunOperation</code>.
     *        Otherwise, it is <code>UnauthorizedOperation</code>.</p>
     */
    DryRun?: boolean;
}
export declare namespace BundleInstanceRequest {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: BundleInstanceRequest) => any;
}
/**
 * <p>Describes an error for <a>BundleInstance</a>.</p>
 */
export interface BundleTaskError {
    /**
     * <p>The error code.</p>
     */
    Code?: string;
    /**
     * <p>The error message.</p>
     */
    Message?: string;
}
export declare namespace BundleTaskError {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: BundleTaskError) => any;
}
export declare type BundleTaskState = "bundling" | "cancelling" | "complete" | "failed" | "pending" | "storing" | "waiting-for-shutdown";
/**
 * <p>Describes a bundle task.</p>
 */
export interface BundleTask {
    /**
     * <p>The ID of the bundle task.</p>
     */
    BundleId?: string;
    /**
     * <p>If the task fails, a description of the error.</p>
     */
    BundleTaskError?: BundleTaskError;
    /**
     * <p>The ID of the instance associated with this bundle task.</p>
     */
    InstanceId?: string;
    /**
     * <p>The level of task completion, as a percent (for example, 20%).</p>
     */
    Progress?: string;
    /**
     * <p>The time this task started.</p>
     */
    StartTime?: Date;
    /**
     * <p>The state of the task.</p>
     */
    State?: BundleTaskState | string;
    /**
     * <p>The Amazon S3 storage locations.</p>
     */
    Storage?: Storage;
    /**
     * <p>The time of the most recent update for the task.</p>
     */
    UpdateTime?: Date;
}
export declare namespace BundleTask {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: BundleTask) => any;
}
/**
 * <p>Contains the output of BundleInstance.</p>
 */
export interface BundleInstanceResult {
    /**
     * <p>Information about the bundle task.</p>
     */
    BundleTask?: BundleTask;
}
export declare namespace BundleInstanceResult {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: BundleInstanceResult) => any;
}
/**
 * <p>Contains the parameters for CancelBundleTask.</p>
 */
export interface CancelBundleTaskRequest {
    /**
     * <p>The ID of the bundle task.</p>
     */
    BundleId: string | undefined;
    /**
     * <p>Checks whether you have the required permissions for the action, without actually making the request,
     *        and provides an error response. If you have the required permissions, the error response is <code>DryRunOperation</code>.
     *        Otherwise, it is <code>UnauthorizedOperation</code>.</p>
     */
    DryRun?: boolean;
}
export declare namespace CancelBundleTaskRequest {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: CancelBundleTaskRequest) => any;
}
/**
 * <p>Contains the output of CancelBundleTask.</p>
 */
export interface CancelBundleTaskResult {
    /**
     * <p>Information about the bundle task.</p>
     */
    BundleTask?: BundleTask;
}
export declare namespace CancelBundleTaskResult {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: CancelBundleTaskResult) => any;
}
export interface CancelCapacityReservationRequest {
    /**
     * <p>The ID of the Capacity Reservation to be cancelled.</p>
     */
    CapacityReservationId: string | undefined;
    /**
     * <p>Checks whether you have the required permissions for the action, without actually making the request, and provides an error response. If you have the required permissions, the error response is <code>DryRunOperation</code>. Otherwise, it is <code>UnauthorizedOperation</code>.</p>
     */
    DryRun?: boolean;
}
export declare namespace CancelCapacityReservationRequest {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: CancelCapacityReservationRequest) => any;
}
export interface CancelCapacityReservationResult {
    /**
     * <p>Returns <code>true</code> if the request succeeds; otherwise, it returns an error.</p>
     */
    Return?: boolean;
}
export declare namespace CancelCapacityReservationResult {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: CancelCapacityReservationResult) => any;
}
export interface CancelConversionRequest {
    /**
     * <p>The ID of the conversion task.</p>
     */
    ConversionTaskId: string | undefined;
    /**
     * <p>Checks whether you have the required permissions for the action, without actually making the request,
     *    and provides an error response. If you have the required permissions, the error response is <code>DryRunOperation</code>.
     *    Otherwise, it is <code>UnauthorizedOperation</code>.</p>
     */
    DryRun?: boolean;
    /**
     * <p>The reason for canceling the conversion task.</p>
     */
    ReasonMessage?: string;
}
export declare namespace CancelConversionRequest {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: CancelConversionRequest) => any;
}
export interface CancelExportTaskRequest {
    /**
     * <p>The ID of the export task. This is the ID returned by <code>CreateInstanceExportTask</code>.</p>
     */
    ExportTaskId: string | undefined;
}
export declare namespace CancelExportTaskRequest {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: CancelExportTaskRequest) => any;
}
export interface CancelImportTaskRequest {
    /**
     * <p>The reason for canceling the task.</p>
     */
    CancelReason?: string;
    /**
     * <p>Checks whether you have the required permissions for the action, without actually making the request,
     *    and provides an error response. If you have the required permissions, the error response is <code>DryRunOperation</code>.
     *    Otherwise, it is <code>UnauthorizedOperation</code>.</p>
     */
    DryRun?: boolean;
    /**
     * <p>The ID of the import image or import snapshot task to be canceled.</p>
     */
    ImportTaskId?: string;
}
export declare namespace CancelImportTaskRequest {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: CancelImportTaskRequest) => any;
}
export interface CancelImportTaskResult {
    /**
     * <p>The ID of the task being canceled.</p>
     */
    ImportTaskId?: string;
    /**
     * <p>The current state of the task being canceled.</p>
     */
    PreviousState?: string;
    /**
     * <p>The current state of the task being canceled.</p>
     */
    State?: string;
}
export declare namespace CancelImportTaskResult {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: CancelImportTaskResult) => any;
}
/**
 * <p>Contains the parameters for CancelReservedInstancesListing.</p>
 */
export interface CancelReservedInstancesListingRequest {
    /**
     * <p>The ID of the Reserved Instance listing.</p>
     */
    ReservedInstancesListingId: string | undefined;
}
export declare namespace CancelReservedInstancesListingRequest {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: CancelReservedInstancesListingRequest) => any;
}
export declare type ListingState = "available" | "cancelled" | "pending" | "sold";
/**
 * <p>Describes a Reserved Instance listing state.</p>
 */
export interface InstanceCount {
    /**
     * <p>The number of listed Reserved Instances in the state specified by the <code>state</code>.</p>
     */
    InstanceCount?: number;
    /**
     * <p>The states of the listed Reserved Instances.</p>
     */
    State?: ListingState | string;
}
export declare namespace InstanceCount {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: InstanceCount) => any;
}
export declare type CurrencyCodeValues = "USD";
/**
 * <p>Describes the price for a Reserved Instance.</p>
 */
export interface PriceSchedule {
    /**
     * <p>The current price schedule, as determined by the term remaining for the Reserved Instance in the listing.</p>
     *          <p>A specific price schedule is always in effect, but only one price schedule can be active at any time. Take, for example, a Reserved Instance listing that has five months remaining in its term. When you specify price schedules for five months and two months, this means that schedule 1, covering the first three months of the remaining term, will be active during months 5, 4, and 3. Then schedule 2, covering the last two months of the term, will be active for months 2 and 1.</p>
     */
    Active?: boolean;
    /**
     * <p>The currency for transacting the Reserved Instance resale.
     * 				At this time, the only supported currency is <code>USD</code>.</p>
     */
    CurrencyCode?: CurrencyCodeValues | string;
    /**
     * <p>The fixed price for the term.</p>
     */
    Price?: number;
    /**
     * <p>The number of months remaining in the reservation. For example, 2 is the second to the last month before the capacity reservation expires.</p>
     */
    Term?: number;
}
export declare namespace PriceSchedule {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: PriceSchedule) => any;
}
export declare type ListingStatus = "active" | "cancelled" | "closed" | "pending";
/**
 * <p>Describes a Reserved Instance listing.</p>
 */
export interface ReservedInstancesListing {
    /**
     * <p>A unique, case-sensitive key supplied by the client to ensure that the request is
     * 			idempotent. For more information, see <a href="https://docs.aws.amazon.com/AWSEC2/latest/APIReference/Run_Instance_Idempotency.html">Ensuring Idempotency</a>.</p>
     */
    ClientToken?: string;
    /**
     * <p>The time the listing was created.</p>
     */
    CreateDate?: Date;
    /**
     * <p>The number of instances in this state.</p>
     */
    InstanceCounts?: InstanceCount[];
    /**
     * <p>The price of the Reserved Instance listing.</p>
     */
    PriceSchedules?: PriceSchedule[];
    /**
     * <p>The ID of the Reserved Instance.</p>
     */
    ReservedInstancesId?: string;
    /**
     * <p>The ID of the Reserved Instance listing.</p>
     */
    ReservedInstancesListingId?: string;
    /**
     * <p>The status of the Reserved Instance listing.</p>
     */
    Status?: ListingStatus | string;
    /**
     * <p>The reason for the current status of the Reserved Instance listing. The response can be blank.</p>
     */
    StatusMessage?: string;
    /**
     * <p>Any tags assigned to the resource.</p>
     */
    Tags?: Tag[];
    /**
     * <p>The last modified timestamp of the listing.</p>
     */
    UpdateDate?: Date;
}
export declare namespace ReservedInstancesListing {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: ReservedInstancesListing) => any;
}
/**
 * <p>Contains the output of CancelReservedInstancesListing.</p>
 */
export interface CancelReservedInstancesListingResult {
    /**
     * <p>The Reserved Instance listing.</p>
     */
    ReservedInstancesListings?: ReservedInstancesListing[];
}
export declare namespace CancelReservedInstancesListingResult {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: CancelReservedInstancesListingResult) => any;
}
/**
 * <p>Contains the parameters for CancelSpotFleetRequests.</p>
 */
export interface CancelSpotFleetRequestsRequest {
    /**
     * <p>Checks whether you have the required permissions for the action, without actually making the request,
     *       and provides an error response. If you have the required permissions, the error response is <code>DryRunOperation</code>.
     *       Otherwise, it is <code>UnauthorizedOperation</code>.</p>
     */
    DryRun?: boolean;
    /**
     * <p>The IDs of the Spot Fleet requests.</p>
     */
    SpotFleetRequestIds: string[] | undefined;
    /**
     * <p>Indicates whether to terminate instances for a Spot Fleet request if it is canceled successfully.</p>
     */
    TerminateInstances: boolean | undefined;
}
export declare namespace CancelSpotFleetRequestsRequest {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: CancelSpotFleetRequestsRequest) => any;
}
export declare enum BatchState {
    ACTIVE = "active",
    CANCELLED = "cancelled",
    CANCELLED_RUNNING = "cancelled_running",
    CANCELLED_TERMINATING_INSTANCES = "cancelled_terminating",
    FAILED = "failed",
    MODIFYING = "modifying",
    SUBMITTED = "submitted"
}
/**
 * <p>Describes a Spot Fleet request that was successfully canceled.</p>
 */
export interface CancelSpotFleetRequestsSuccessItem {
    /**
     * <p>The current state of the Spot Fleet request.</p>
     */
    CurrentSpotFleetRequestState?: BatchState | string;
    /**
     * <p>The previous state of the Spot Fleet request.</p>
     */
    PreviousSpotFleetRequestState?: BatchState | string;
    /**
     * <p>The ID of the Spot Fleet request.</p>
     */
    SpotFleetRequestId?: string;
}
export declare namespace CancelSpotFleetRequestsSuccessItem {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: CancelSpotFleetRequestsSuccessItem) => any;
}
export declare enum CancelBatchErrorCode {
    FLEET_REQUEST_ID_DOES_NOT_EXIST = "fleetRequestIdDoesNotExist",
    FLEET_REQUEST_ID_MALFORMED = "fleetRequestIdMalformed",
    FLEET_REQUEST_NOT_IN_CANCELLABLE_STATE = "fleetRequestNotInCancellableState",
    UNEXPECTED_ERROR = "unexpectedError"
}
/**
 * <p>Describes a Spot Fleet error.</p>
 */
export interface CancelSpotFleetRequestsError {
    /**
     * <p>The error code.</p>
     */
    Code?: CancelBatchErrorCode | string;
    /**
     * <p>The description for the error code.</p>
     */
    Message?: string;
}
export declare namespace CancelSpotFleetRequestsError {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: CancelSpotFleetRequestsError) => any;
}
/**
 * <p>Describes a Spot Fleet request that was not successfully canceled.</p>
 */
export interface CancelSpotFleetRequestsErrorItem {
    /**
     * <p>The error.</p>
     */
    Error?: CancelSpotFleetRequestsError;
    /**
     * <p>The ID of the Spot Fleet request.</p>
     */
    SpotFleetRequestId?: string;
}
export declare namespace CancelSpotFleetRequestsErrorItem {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: CancelSpotFleetRequestsErrorItem) => any;
}
/**
 * <p>Contains the output of CancelSpotFleetRequests.</p>
 */
export interface CancelSpotFleetRequestsResponse {
    /**
     * <p>Information about the Spot Fleet requests that are successfully canceled.</p>
     */
    SuccessfulFleetRequests?: CancelSpotFleetRequestsSuccessItem[];
    /**
     * <p>Information about the Spot Fleet requests that are not successfully canceled.</p>
     */
    UnsuccessfulFleetRequests?: CancelSpotFleetRequestsErrorItem[];
}
export declare namespace CancelSpotFleetRequestsResponse {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: CancelSpotFleetRequestsResponse) => any;
}
/**
 * <p>Contains the parameters for CancelSpotInstanceRequests.</p>
 */
export interface CancelSpotInstanceRequestsRequest {
    /**
     * <p>Checks whether you have the required permissions for the action, without actually making the request,
     *        and provides an error response. If you have the required permissions, the error response is <code>DryRunOperation</code>.
     *        Otherwise, it is <code>UnauthorizedOperation</code>.</p>
     */
    DryRun?: boolean;
    /**
     * <p>One or more Spot Instance request IDs.</p>
     */
    SpotInstanceRequestIds: string[] | undefined;
}
export declare namespace CancelSpotInstanceRequestsRequest {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: CancelSpotInstanceRequestsRequest) => any;
}
export declare type CancelSpotInstanceRequestState = "active" | "cancelled" | "closed" | "completed" | "open";
/**
 * <p>Describes a request to cancel a Spot Instance.</p>
 */
export interface CancelledSpotInstanceRequest {
    /**
     * <p>The ID of the Spot Instance request.</p>
     */
    SpotInstanceRequestId?: string;
    /**
     * <p>The state of the Spot Instance request.</p>
     */
    State?: CancelSpotInstanceRequestState | string;
}
export declare namespace CancelledSpotInstanceRequest {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: CancelledSpotInstanceRequest) => any;
}
/**
 * <p>Contains the output of CancelSpotInstanceRequests.</p>
 */
export interface CancelSpotInstanceRequestsResult {
    /**
     * <p>One or more Spot Instance requests.</p>
     */
    CancelledSpotInstanceRequests?: CancelledSpotInstanceRequest[];
}
export declare namespace CancelSpotInstanceRequestsResult {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: CancelSpotInstanceRequestsResult) => any;
}
export interface ConfirmProductInstanceRequest {
    /**
     * <p>The ID of the instance.</p>
     */
    InstanceId: string | undefined;
    /**
     * <p>The product code. This must be a product code that you own.</p>
     */
    ProductCode: string | undefined;
    /**
     * <p>Checks whether you have the required permissions for the action, without actually making the request,
     *    and provides an error response. If you have the required permissions, the error response is <code>DryRunOperation</code>.
     *    Otherwise, it is <code>UnauthorizedOperation</code>.</p>
     */
    DryRun?: boolean;
}
export declare namespace ConfirmProductInstanceRequest {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: ConfirmProductInstanceRequest) => any;
}
export interface ConfirmProductInstanceResult {
    /**
     * <p>The AWS account ID of the instance owner. This is only present if the product code is
     *             attached to the instance.</p>
     */
    OwnerId?: string;
    /**
     * <p>The return value of the request. Returns <code>true</code> if the specified product
     *             code is owned by the requester and associated with the specified instance.</p>
     */
    Return?: boolean;
}
export declare namespace ConfirmProductInstanceResult {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: ConfirmProductInstanceResult) => any;
}
export interface CopyFpgaImageRequest {
    /**
     * <p>Checks whether you have the required permissions for the action, without actually making the request,
     *    and provides an error response. If you have the required permissions, the error response is <code>DryRunOperation</code>.
     *    Otherwise, it is <code>UnauthorizedOperation</code>.</p>
     */
    DryRun?: boolean;
    /**
     * <p>The ID of the source AFI.</p>
     */
    SourceFpgaImageId: string | undefined;
    /**
     * <p>The description for the new AFI.</p>
     */
    Description?: string;
    /**
     * <p>The name for the new AFI. The default is the name of the source AFI.</p>
     */
    Name?: string;
    /**
     * <p>The Region that contains the source AFI.</p>
     */
    SourceRegion: string | undefined;
    /**
     * <p>Unique, case-sensitive identifier that you provide to ensure the idempotency of the request.
     *          For more information, see <a href="https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/Run_Instance_Idempotency.html">Ensuring Idempotency</a>.</p>
     */
    ClientToken?: string;
}
export declare namespace CopyFpgaImageRequest {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: CopyFpgaImageRequest) => any;
}
export interface CopyFpgaImageResult {
    /**
     * <p>The ID of the new AFI.</p>
     */
    FpgaImageId?: string;
}
export declare namespace CopyFpgaImageResult {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: CopyFpgaImageResult) => any;
}
/**
 * <p>Contains the parameters for CopyImage.</p>
 */
export interface CopyImageRequest {
    /**
     * <p>Unique, case-sensitive identifier you provide to ensure
     *        idempotency of the request. For more information, see <a href="https://docs.aws.amazon.com/AWSEC2/latest/APIReference/Run_Instance_Idempotency.html">Ensuring idempotency</a>
     *        in the <i>Amazon EC2 API Reference</i>.</p>
     */
    ClientToken?: string;
    /**
     * <p>A description for the new AMI in the destination Region.</p>
     */
    Description?: string;
    /**
     * <p>Specifies whether the destination snapshots of the copied image should be encrypted.
     *        You can encrypt a copy of an unencrypted snapshot, but you cannot create an unencrypted
     *        copy of an encrypted snapshot. The default CMK for EBS is used unless you specify a non-default
     *        AWS Key Management Service (AWS KMS) CMK using <code>KmsKeyId</code>. For more information, see <a href="https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/EBSEncryption.html">Amazon EBS Encryption</a> in the <i>Amazon Elastic Compute Cloud User Guide</i>.</p>
     */
    Encrypted?: boolean;
    /**
     * <p>The identifier of the symmetric AWS Key Management Service (AWS KMS) customer master key (CMK) to use when creating
     *       encrypted volumes. If this parameter is not specified, your AWS managed CMK for EBS is used.
     *       If you specify a CMK, you must also set the encrypted state to <code>true</code>.</p>
     *    	     <p>You can specify a CMK using any of the following:</p>
     *    	     <ul>
     *             <li>
     *    			         <p>Key ID. For example, 1234abcd-12ab-34cd-56ef-1234567890ab.</p>
     *    		       </li>
     *             <li>
     *    	           <p>Key alias. For example, alias/ExampleAlias.</p>
     *    	        </li>
     *             <li>
     *    	           <p>Key ARN. For example, arn:aws:kms:us-east-1:012345678910:key/1234abcd-12ab-34cd-56ef-1234567890ab.</p>
     *    		       </li>
     *             <li>
     *    		          <p>Alias ARN. For example, arn:aws:kms:us-east-1:012345678910:alias/ExampleAlias.</p>
     *    		       </li>
     *          </ul>
     *          <p>AWS authenticates the CMK asynchronously. Therefore, if you specify an identifier that is not valid,
     *       the action can appear to complete, but eventually fails.</p>
     *          <p>The specified CMK must exist in the destination Region.</p>
     *          <p>Amazon EBS does not support asymmetric CMKs.</p>
     */
    KmsKeyId?: string;
    /**
     * <p>The name of the new AMI in the destination Region.</p>
     */
    Name: string | undefined;
    /**
     * <p>The ID of the AMI to copy.</p>
     */
    SourceImageId: string | undefined;
    /**
     * <p>The name of the Region that contains the AMI to copy.</p>
     */
    SourceRegion: string | undefined;
    /**
     * <p>The Amazon Resource Name (ARN) of the Outpost to which to copy the AMI. Only
     *   		specify this parameter when copying an AMI from an AWS Region to an Outpost.
     *   		The AMI must be in the Region of the destination Outpost. You cannot copy an
     *   		AMI from an Outpost to a Region, from one Outpost to another, or within the same
     *   		Outpost.</p>
     *
     *   	      <p>For more information, see <a href="https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/snapshots-outposts.html#copy-amis">
     *   		Copying AMIs from an AWS Region to an Outpost</a> in the
     *   		<i>Amazon Elastic Compute Cloud User Guide</i>.</p>
     */
    DestinationOutpostArn?: string;
    /**
     * <p>Checks whether you have the required permissions for the action, without actually making the request,
     *        and provides an error response. If you have the required permissions, the error response is <code>DryRunOperation</code>.
     *        Otherwise, it is <code>UnauthorizedOperation</code>.</p>
     */
    DryRun?: boolean;
}
export declare namespace CopyImageRequest {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: CopyImageRequest) => any;
}
/**
 * <p>Contains the output of CopyImage.</p>
 */
export interface CopyImageResult {
    /**
     * <p>The ID of the new AMI.</p>
     */
    ImageId?: string;
}
export declare namespace CopyImageResult {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: CopyImageResult) => any;
}
export interface CopySnapshotRequest {
    /**
     * <p>A description for the EBS snapshot.</p>
     */
    Description?: string;
    /**
     * <p>The Amazon Resource Name (ARN) of the Outpost to which to copy the snapshot. Only
     * 		specify this parameter when copying a snapshot from an AWS Region to an Outpost.
     * 		The snapshot must be in the Region for the destination Outpost. You cannot copy a
     * 		snapshot from an Outpost to a Region, from one Outpost to another, or within the same
     * 		Outpost.</p>
     *   	      <p>For more information, see <a href="https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/snapshots-outposts.html#copy-snapshots">
     *   		Copying snapshots from an AWS Region to an Outpost</a> in the
     *   		<i>Amazon Elastic Compute Cloud User Guide</i>.</p>
     */
    DestinationOutpostArn?: string;
    /**
     * <p>The destination Region to use in the <code>PresignedUrl</code> parameter of a snapshot
     *       copy operation. This parameter is only valid for specifying the destination Region in a
     *         <code>PresignedUrl</code> parameter, where it is required.</p>
     *
     *          <p>The snapshot copy is sent to the regional endpoint that you sent the HTTP
     *       request to (for example, <code>ec2.us-east-1.amazonaws.com</code>). With the AWS CLI, this is
     *       specified using the <code>--region</code> parameter or the default Region in your AWS
     *       configuration file.</p>
     */
    DestinationRegion?: string;
    /**
     * <p>To encrypt a copy of an unencrypted snapshot if encryption by default is not enabled,
     *       enable encryption using this parameter. Otherwise, omit this parameter. Encrypted snapshots
     *       are encrypted, even if you omit this parameter and encryption by default is not enabled. You
     *       cannot set this parameter to false. For more information, see <a href="https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/EBSEncryption.html">Amazon EBS encryption</a> in the
     *       <i>Amazon Elastic Compute Cloud User Guide</i>.</p>
     */
    Encrypted?: boolean;
    /**
     * <p>The identifier of the AWS Key Management Service (AWS KMS) customer master key (CMK) to use for Amazon EBS encryption.
     *       If this parameter is not specified, your AWS managed CMK for EBS is used. If <code>KmsKeyId</code> is
     *       specified, the encrypted state must be <code>true</code>.</p>
     *          <p>You can specify the CMK using any of the following:</p>
     *          <ul>
     *             <li>
     *                <p>Key ID. For example, 1234abcd-12ab-34cd-56ef-1234567890ab.</p>
     *             </li>
     *             <li>
     *                <p>Key alias. For example, alias/ExampleAlias.</p>
     *             </li>
     *             <li>
     *                <p>Key ARN. For example, arn:aws:kms:us-east-1:012345678910:key/1234abcd-12ab-34cd-56ef-1234567890ab.</p>
     *             </li>
     *             <li>
     *                <p>Alias ARN. For example, arn:aws:kms:us-east-1:012345678910:alias/ExampleAlias.</p>
     *             </li>
     *          </ul>
     *          <p>AWS authenticates the CMK asynchronously. Therefore, if you specify an ID, alias, or ARN that is not valid,
     *       the action can appear to complete, but eventually fails.</p>
     */
    KmsKeyId?: string;
    /**
     * <p>When you copy an encrypted source snapshot using the Amazon EC2 Query API, you must supply a
     *       pre-signed URL. This parameter is optional for unencrypted snapshots. For more information,
     *       see <a href="https://docs.aws.amazon.com/AWSEC2/latest/APIReference/Query-Requests.html">Query
     *         requests</a>.</p>
     *          <p>The <code>PresignedUrl</code> should use the snapshot source endpoint, the
     *         <code>CopySnapshot</code> action, and include the <code>SourceRegion</code>,
     *         <code>SourceSnapshotId</code>, and <code>DestinationRegion</code> parameters. The
     *         <code>PresignedUrl</code> must be signed using AWS Signature Version 4. Because EBS
     *       snapshots are stored in Amazon S3, the signing algorithm for this parameter uses the same logic
     *       that is described in <a href="https://docs.aws.amazon.com/AmazonS3/latest/API/sigv4-query-string-auth.html">Authenticating Requests: Using Query
     *         Parameters (AWS Signature Version 4)</a> in the <i>Amazon Simple Storage Service API Reference</i>. An
     *       invalid or improperly signed <code>PresignedUrl</code> will cause the copy operation to fail
     *       asynchronously, and the snapshot will move to an <code>error</code> state.</p>
     */
    PresignedUrl?: string;
    /**
     * <p>The ID of the Region that contains the snapshot to be copied.</p>
     */
    SourceRegion: string | undefined;
    /**
     * <p>The ID of the EBS snapshot to copy.</p>
     */
    SourceSnapshotId: string | undefined;
    /**
     * <p>The tags to apply to the new snapshot.</p>
     */
    TagSpecifications?: TagSpecification[];
    /**
     * <p>Checks whether you have the required permissions for the action, without actually making the request,
     *    and provides an error response. If you have the required permissions, the error response is <code>DryRunOperation</code>.
     *    Otherwise, it is <code>UnauthorizedOperation</code>.</p>
     */
    DryRun?: boolean;
}
export declare namespace CopySnapshotRequest {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: CopySnapshotRequest) => any;
}
export interface CopySnapshotResult {
    /**
     * <p>The ID of the new snapshot.</p>
     */
    SnapshotId?: string;
    /**
     * <p>Any tags applied to the new snapshot.</p>
     */
    Tags?: Tag[];
}
export declare namespace CopySnapshotResult {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: CopySnapshotResult) => any;
}
export declare type EndDateType = "limited" | "unlimited";
export declare type InstanceMatchCriteria = "open" | "targeted";
export declare enum CapacityReservationInstancePlatform {
    LINUX_UNIX = "Linux/UNIX",
    LINUX_WITH_SQL_SERVER_ENTERPRISE = "Linux with SQL Server Enterprise",
    LINUX_WITH_SQL_SERVER_STANDARD = "Linux with SQL Server Standard",
    LINUX_WITH_SQL_SERVER_WEB = "Linux with SQL Server Web",
    RED_HAT_ENTERPRISE_LINUX = "Red Hat Enterprise Linux",
    SUSE_LINUX = "SUSE Linux",
    WINDOWS = "Windows",
    WINDOWS_WITH_SQL_SERVER = "Windows with SQL Server",
    WINDOWS_WITH_SQL_SERVER_ENTERPRISE = "Windows with SQL Server Enterprise",
    WINDOWS_WITH_SQL_SERVER_STANDARD = "Windows with SQL Server Standard",
    WINDOWS_WITH_SQL_SERVER_WEB = "Windows with SQL Server Web"
}
export declare type CapacityReservationTenancy = "dedicated" | "default";
export interface CreateCapacityReservationRequest {
    /**
     * <p>Unique, case-sensitive identifier that you provide to ensure the idempotency of the request. For more information, see <a href="https://docs.aws.amazon.com/AWSEC2/latest/APIReference/Run_Instance_Idempotency.html">Ensure Idempotency</a>.</p>
     */
    ClientToken?: string;
    /**
     * <p>The instance type for which to reserve capacity. For more information, see <a href="https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/instance-types.html">Instance types</a> in the <i>Amazon EC2 User Guide</i>.</p>
     */
    InstanceType: string | undefined;
    /**
     * <p>The type of operating system for which to reserve capacity.</p>
     */
    InstancePlatform: CapacityReservationInstancePlatform | string | undefined;
    /**
     * <p>The Availability Zone in which to create the Capacity Reservation.</p>
     */
    AvailabilityZone?: string;
    /**
     * <p>The ID of the Availability Zone in which to create the Capacity Reservation.</p>
     */
    AvailabilityZoneId?: string;
    /**
     * <p>Indicates the tenancy of the Capacity Reservation. A Capacity Reservation can have one of the following tenancy settings:</p>
     * 		       <ul>
     *             <li>
     *                <p>
     *                   <code>default</code> - The Capacity Reservation is created on hardware that is shared with other AWS accounts.</p>
     *             </li>
     *             <li>
     *                <p>
     *                   <code>dedicated</code> - The Capacity Reservation is created on single-tenant hardware that is dedicated to a single AWS account.</p>
     *             </li>
     *          </ul>
     */
    Tenancy?: CapacityReservationTenancy | string;
    /**
     * <p>The number of instances for which to reserve capacity.</p>
     */
    InstanceCount: number | undefined;
    /**
     * <p>Indicates whether the Capacity Reservation supports EBS-optimized instances. This optimization provides
     * 			dedicated throughput to Amazon EBS and an optimized configuration stack to provide
     * 			optimal I/O performance. This optimization isn't available with all instance types.
     * 			Additional usage charges apply when using an EBS- optimized instance.</p>
     */
    EbsOptimized?: boolean;
    /**
     * <p>Indicates whether the Capacity Reservation supports instances with temporary, block-level
     * 			storage.</p>
     */
    EphemeralStorage?: boolean;
    /**
     * <p>The date and time at which the Capacity Reservation expires. When a Capacity Reservation expires, the reserved capacity
     * 			is released and you can no longer launch instances into it. The Capacity Reservation's state changes to
     * 				<code>expired</code> when it reaches its end date and time.</p>
     * 		       <p>You must provide an <code>EndDate</code> value if <code>EndDateType</code> is
     * 				<code>limited</code>. Omit <code>EndDate</code> if <code>EndDateType</code> is
     * 				<code>unlimited</code>.</p>
     *
     * 		       <p>If the <code>EndDateType</code> is <code>limited</code>, the Capacity Reservation is cancelled within an hour from the specified time. For example, if you specify
     * 			5/31/2019, 13:30:55, the Capacity Reservation is guaranteed to end between 13:30:55 and 14:30:55 on 5/31/2019.</p>
     */
    EndDate?: Date;
    /**
     * <p>Indicates the way in which the Capacity Reservation ends. A Capacity Reservation can have one of the following end
     * 			types:</p>
     * 		       <ul>
     *             <li>
     *                <p>
     *                   <code>unlimited</code> - The Capacity Reservation remains active until you explicitly cancel it. Do not
     * 					provide an <code>EndDate</code> if the <code>EndDateType</code> is
     * 						<code>unlimited</code>.</p>
     *             </li>
     *             <li>
     *                <p>
     *                   <code>limited</code> - The Capacity Reservation expires automatically at a specified date and time. You must
     * 					provide an <code>EndDate</code> value if the <code>EndDateType</code> value is
     * 						<code>limited</code>.</p>
     *             </li>
     *          </ul>
     */
    EndDateType?: EndDateType | string;
    /**
     * <p>Indicates the type of instance launches that the Capacity Reservation accepts. The options
     * 			include:</p>
     * 		       <ul>
     *             <li>
     *                <p>
     *                   <code>open</code> - The Capacity Reservation automatically matches all instances that have matching attributes (instance type, platform,
     * 				and Availability Zone). Instances that have matching attributes run in the Capacity Reservation automatically without specifying
     * 				any additional parameters.</p>
     *             </li>
     *             <li>
     *                <p>
     *                   <code>targeted</code> - The Capacity Reservation only accepts instances that have matching attributes
     * 					(instance type, platform, and Availability Zone), and explicitly target the
     * 					Capacity Reservation. This ensures that only permitted instances can use the reserved capacity. </p>
     *             </li>
     *          </ul>
     * 		       <p>Default: <code>open</code>
     *          </p>
     */
    InstanceMatchCriteria?: InstanceMatchCriteria | string;
    /**
     * <p>The tags to apply to the Capacity Reservation during launch.</p>
     */
    TagSpecifications?: TagSpecification[];
    /**
     * <p>Checks whether you have the required permissions for the action, without actually making the request, and provides an error response. If you have the required permissions, the error response is <code>DryRunOperation</code>. Otherwise, it is <code>UnauthorizedOperation</code>.</p>
     */
    DryRun?: boolean;
    /**
     * <p>The Amazon Resource Name (ARN) of the Outpost on which to create the Capacity Reservation.</p>
     */
    OutpostArn?: string;
}
export declare namespace CreateCapacityReservationRequest {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: CreateCapacityReservationRequest) => any;
}
export declare type CapacityReservationState = "active" | "cancelled" | "expired" | "failed" | "pending";
/**
 * <p>Describes a Capacity Reservation.</p>
 */
export interface CapacityReservation {
    /**
     * <p>The ID of the Capacity Reservation.</p>
     */
    CapacityReservationId?: string;
    /**
     * <p>The ID of the AWS account that owns the Capacity Reservation.</p>
     */
    OwnerId?: string;
    /**
     * <p>The Amazon Resource Name (ARN) of the Capacity Reservation.</p>
     */
    CapacityReservationArn?: string;
    /**
     * <p>The Availability Zone ID of the Capacity Reservation.</p>
     */
    AvailabilityZoneId?: string;
    /**
     * <p>The type of instance for which the Capacity Reservation reserves capacity.</p>
     */
    InstanceType?: string;
    /**
     * <p>The type of operating system for which the Capacity Reservation reserves capacity.</p>
     */
    InstancePlatform?: CapacityReservationInstancePlatform | string;
    /**
     * <p>The Availability Zone in which the capacity is reserved.</p>
     */
    AvailabilityZone?: string;
    /**
     * <p>Indicates the tenancy of the Capacity Reservation. A Capacity Reservation can have one of the following tenancy settings:</p>
     * 		       <ul>
     *             <li>
     *                <p>
     *                   <code>default</code> - The Capacity Reservation is created on hardware that is shared with other AWS accounts.</p>
     *             </li>
     *             <li>
     *                <p>
     *                   <code>dedicated</code> - The Capacity Reservation is created on single-tenant hardware that is dedicated to a single AWS account.</p>
     *             </li>
     *          </ul>
     */
    Tenancy?: CapacityReservationTenancy | string;
    /**
     * <p>The total number of instances for which the Capacity Reservation reserves capacity.</p>
     */
    TotalInstanceCount?: number;
    /**
     * <p>The remaining capacity. Indicates the number of instances that can be launched in the Capacity Reservation.</p>
     */
    AvailableInstanceCount?: number;
    /**
     * <p>Indicates whether the Capacity Reservation supports EBS-optimized instances. This optimization provides
     * 			dedicated throughput to Amazon EBS and an optimized configuration stack to provide
     * 			optimal I/O performance. This optimization isn't available with all instance types.
     * 			Additional usage charges apply when using an EBS- optimized instance.</p>
     */
    EbsOptimized?: boolean;
    /**
     * <p>Indicates whether the Capacity Reservation supports instances with temporary, block-level
     * 			storage.</p>
     */
    EphemeralStorage?: boolean;
    /**
     * <p>The current state of the Capacity Reservation. A Capacity Reservation can be in one of the following states:</p>
     * 			      <ul>
     *             <li>
     *                <p>
     *                   <code>active</code> - The Capacity Reservation is active and the capacity is available for your use.</p>
     *             </li>
     *             <li>
     *                <p>
     *                   <code>expired</code> - The Capacity Reservation expired automatically at the date and time specified
     * 					in your request. The reserved capacity is no longer available for your use.</p>
     *             </li>
     *             <li>
     *                <p>
     *                   <code>cancelled</code> - The Capacity Reservation was cancelled. The reserved capacity is no
     * 					longer available for your use.</p>
     *             </li>
     *             <li>
     *                <p>
     *                   <code>pending</code> - The Capacity Reservation request was successful but the capacity
     * 					provisioning is still pending.</p>
     *             </li>
     *             <li>
     *                <p>
     *                   <code>failed</code> - The Capacity Reservation request has failed. A request might fail
     * 					due to invalid request parameters, capacity constraints, or instance limit constraints.
     * 					Failed requests are retained for 60 minutes.</p>
     *             </li>
     *          </ul>
     */
    State?: CapacityReservationState | string;
    /**
     * <p>The date and time at which the Capacity Reservation was started.</p>
     */
    StartDate?: Date;
    /**
     * <p>The date and time at which the Capacity Reservation expires. When a Capacity Reservation expires, the reserved capacity
     * 			is released and you can no longer launch instances into it. The Capacity Reservation's state changes to
     * 				<code>expired</code> when it reaches its end date and time.</p>
     */
    EndDate?: Date;
    /**
     * <p>Indicates the way in which the Capacity Reservation ends. A Capacity Reservation can have one of the following end
     * 			types:</p>
     * 		       <ul>
     *             <li>
     *                <p>
     *                   <code>unlimited</code> - The Capacity Reservation remains active until you explicitly cancel it.</p>
     *             </li>
     *             <li>
     *                <p>
     *                   <code>limited</code> - The Capacity Reservation expires automatically at a specified date and time.</p>
     *             </li>
     *          </ul>
     */
    EndDateType?: EndDateType | string;
    /**
     * <p>Indicates the type of instance launches that the Capacity Reservation accepts. The options
     * 			include:</p>
     * 		       <ul>
     *             <li>
     *                <p>
     *                   <code>open</code> - The Capacity Reservation accepts all instances that have matching attributes (instance type, platform,
     * 				and Availability Zone). Instances that have matching attributes launch into the Capacity Reservation automatically without specifying
     * 				any additional parameters.</p>
     *             </li>
     *             <li>
     *                <p>
     *                   <code>targeted</code> - The Capacity Reservation only accepts instances that have matching attributes
     * 					(instance type, platform, and Availability Zone), and explicitly target the
     * 					Capacity Reservation. This ensures that only permitted instances can use the reserved capacity. </p>
     *             </li>
     *          </ul>
     */
    InstanceMatchCriteria?: InstanceMatchCriteria | string;
    /**
     * <p>The date and time at which the Capacity Reservation was created.</p>
     */
    CreateDate?: Date;
    /**
     * <p>Any tags assigned to the Capacity Reservation.</p>
     */
    Tags?: Tag[];
    /**
     * <p>The Amazon Resource Name (ARN) of the Outpost on which the Capacity
     * 	  		Reservation was created.</p>
     */
    OutpostArn?: string;
}
export declare namespace CapacityReservation {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: CapacityReservation) => any;
}
export interface CreateCapacityReservationResult {
    /**
     * <p>Information about the Capacity Reservation.</p>
     */
    CapacityReservation?: CapacityReservation;
}
export declare namespace CreateCapacityReservationResult {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: CreateCapacityReservationResult) => any;
}
export interface CreateCarrierGatewayRequest {
    /**
     * <p>The ID of the VPC to associate with the carrier gateway.</p>
     */
    VpcId: string | undefined;
    /**
     * <p>The tags to associate with the carrier gateway.</p>
     */
    TagSpecifications?: TagSpecification[];
    /**
     * <p>Checks whether you have the required permissions for the action, without actually making the request,
     *    and provides an error response. If you have the required permissions, the error response is <code>DryRunOperation</code>.
     *    Otherwise, it is <code>UnauthorizedOperation</code>.</p>
     */
    DryRun?: boolean;
    /**
     * <p>Unique, case-sensitive identifier that you provide to ensure the idempotency of the
     *             request. For more information, see <a href="https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/Run_Instance_Idempotency.html">How to Ensure
     *                 Idempotency</a>.</p>
     */
    ClientToken?: string;
}
export declare namespace CreateCarrierGatewayRequest {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: CreateCarrierGatewayRequest) => any;
}
export declare type CarrierGatewayState = "available" | "deleted" | "deleting" | "pending";
/**
 * <p>Describes a carrier gateway.</p>
 */
export interface CarrierGateway {
    /**
     * <p>The ID of the carrier gateway.</p>
     */
    CarrierGatewayId?: string;
    /**
     * <p>The ID of the VPC associated with the carrier gateway.</p>
     */
    VpcId?: string;
    /**
     * <p>The state of the carrier gateway.</p>
     */
    State?: CarrierGatewayState | string;
    /**
     * <p>The AWS account ID of the owner of the carrier gateway.</p>
     */
    OwnerId?: string;
    /**
     * <p>The tags assigned to the carrier gateway.</p>
     */
    Tags?: Tag[];
}
export declare namespace CarrierGateway {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: CarrierGateway) => any;
}
export interface CreateCarrierGatewayResult {
    /**
     * <p>Information about the carrier gateway.</p>
     */
    CarrierGateway?: CarrierGateway;
}
export declare namespace CreateCarrierGatewayResult {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: CreateCarrierGatewayResult) => any;
}
/**
 * <p>Describes the Active Directory to be used for client authentication.</p>
 */
export interface DirectoryServiceAuthenticationRequest {
    /**
     * <p>The ID of the Active Directory to be used for authentication.</p>
     */
    DirectoryId?: string;
}
export declare namespace DirectoryServiceAuthenticationRequest {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: DirectoryServiceAuthenticationRequest) => any;
}
/**
 * <p>The IAM SAML identity provider used for federated authentication.</p>
 */
export interface FederatedAuthenticationRequest {
    /**
     * <p>The Amazon Resource Name (ARN) of the IAM SAML identity provider.</p>
     */
    SAMLProviderArn?: string;
    /**
     * <p>The Amazon Resource Name (ARN) of the IAM SAML identity provider for the self-service portal.</p>
     */
    SelfServiceSAMLProviderArn?: string;
}
export declare namespace FederatedAuthenticationRequest {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: FederatedAuthenticationRequest) => any;
}
/**
 * <p>Information about the client certificate to be used for authentication.</p>
 */
export interface CertificateAuthenticationRequest {
    /**
     * <p>The ARN of the client certificate. The certificate must be signed by a certificate
     * 			authority (CA) and it must be provisioned in AWS Certificate Manager (ACM).</p>
     */
    ClientRootCertificateChainArn?: string;
}
export declare namespace CertificateAuthenticationRequest {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: CertificateAuthenticationRequest) => any;
}
export declare type ClientVpnAuthenticationType = "certificate-authentication" | "directory-service-authentication" | "federated-authentication";
/**
 * <p>Describes the authentication method to be used by a Client VPN endpoint. For more information, see <a href="https://docs.aws.amazon.com/vpn/latest/clientvpn-admin/authentication-authrization.html#client-authentication">Authentication</a>
 * 			in the <i>AWS Client VPN Administrator Guide</i>.</p>
 */
export interface ClientVpnAuthenticationRequest {
    /**
     * <p>The type of client authentication to be used.</p>
     */
    Type?: ClientVpnAuthenticationType | string;
    /**
     * <p>Information about the Active Directory to be used, if applicable. You must provide this information if <b>Type</b> is <code>directory-service-authentication</code>.</p>
     */
    ActiveDirectory?: DirectoryServiceAuthenticationRequest;
    /**
     * <p>Information about the authentication certificates to be used, if applicable. You must provide this information if <b>Type</b> is <code>certificate-authentication</code>.</p>
     */
    MutualAuthentication?: CertificateAuthenticationRequest;
    /**
     * <p>Information about the IAM SAML identity provider to be used, if applicable. You must provide this information if <b>Type</b> is <code>federated-authentication</code>.</p>
     */
    FederatedAuthentication?: FederatedAuthenticationRequest;
}
export declare namespace ClientVpnAuthenticationRequest {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: ClientVpnAuthenticationRequest) => any;
}
/**
 * <p>The options for managing connection authorization for new client connections.</p>
 */
export interface ClientConnectOptions {
    /**
     * <p>Indicates whether client connect options are enabled. The default is <code>false</code> (not enabled).</p>
     */
    Enabled?: boolean;
    /**
     * <p>The Amazon Resource Name (ARN) of the AWS Lambda function used for connection authorization.</p>
     */
    LambdaFunctionArn?: string;
}
export declare namespace ClientConnectOptions {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: ClientConnectOptions) => any;
}
/**
 * <p>Describes the client connection logging options for the Client VPN endpoint.</p>
 */
export interface ConnectionLogOptions {
    /**
     * <p>Indicates whether connection logging is enabled.</p>
     */
    Enabled?: boolean;
    /**
     * <p>The name of the CloudWatch Logs log group. Required if connection logging is enabled.</p>
     */
    CloudwatchLogGroup?: string;
    /**
     * <p>The name of the CloudWatch Logs log stream to which the connection data is published.</p>
     */
    CloudwatchLogStream?: string;
}
export declare namespace ConnectionLogOptions {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: ConnectionLogOptions) => any;
}
export declare type SelfServicePortal = "disabled" | "enabled";
export declare type TransportProtocol = "tcp" | "udp";
export interface CreateClientVpnEndpointRequest {
    /**
     * <p>The IPv4 address range, in CIDR notation, from which to assign client IP addresses. The address range cannot overlap with the local CIDR of the VPC in which the associated subnet is located, or the routes that you add manually. The address range cannot be changed after the Client VPN endpoint has been created. The CIDR block should be /22 or greater.</p>
     */
    ClientCidrBlock: string | undefined;
    /**
     * <p>The ARN of the server certificate. For more information, see
     * 			the <a href="https://docs.aws.amazon.com/acm/latest/userguide/">AWS Certificate Manager User Guide</a>.</p>
     */
    ServerCertificateArn: string | undefined;
    /**
     * <p>Information about the authentication method to be used to authenticate clients.</p>
     */
    AuthenticationOptions: ClientVpnAuthenticationRequest[] | undefined;
    /**
     * <p>Information about the client connection logging options.</p>
     * 		       <p>If you enable client connection logging, data about client connections is sent to a
     * 			Cloudwatch Logs log stream. The following information is logged:</p>
     * 		       <ul>
     *             <li>
     *                <p>Client connection requests</p>
     *             </li>
     *             <li>
     *                <p>Client connection results (successful and unsuccessful)</p>
     *             </li>
     *             <li>
     *                <p>Reasons for unsuccessful client connection requests</p>
     *             </li>
     *             <li>
     *                <p>Client connection termination time</p>
     *             </li>
     *          </ul>
     */
    ConnectionLogOptions: ConnectionLogOptions | undefined;
    /**
     * <p>Information about the DNS servers to be used for DNS resolution. A Client VPN endpoint can
     * 			have up to two DNS servers. If no DNS server is specified, the DNS address configured on the device is used for the DNS server.</p>
     */
    DnsServers?: string[];
    /**
     * <p>The transport protocol to be used by the VPN session.</p>
     * 		       <p>Default value: <code>udp</code>
     *          </p>
     */
    TransportProtocol?: TransportProtocol | string;
    /**
     * <p>The port number to assign to the Client VPN endpoint for TCP and UDP traffic.</p>
     * 	        <p>Valid Values: <code>443</code> | <code>1194</code>
     *          </p>
     * 	        <p>Default Value: <code>443</code>
     *          </p>
     */
    VpnPort?: number;
    /**
     * <p>A brief description of the Client VPN endpoint.</p>
     */
    Description?: string;
    /**
     * <p>Indicates whether split-tunnel is enabled on the AWS Client VPN endpoint.</p>
     * 		       <p>By default, split-tunnel on a VPN endpoint is disabled.</p>
     * 		       <p>For information about split-tunnel VPN endpoints, see <a href="https://docs.aws.amazon.com/vpn/latest/clientvpn-admin/split-tunnel-vpn.html">Split-Tunnel AWS Client VPN Endpoint</a> in the <i>AWS
     * 				Client VPN Administrator Guide</i>.</p>
     */
    SplitTunnel?: boolean;
    /**
     * <p>Checks whether you have the required permissions for the action, without actually making the request, and provides an error response. If you have the required permissions, the error response is <code>DryRunOperation</code>. Otherwise, it is <code>UnauthorizedOperation</code>.</p>
     */
    DryRun?: boolean;
    /**
     * <p>Unique, case-sensitive identifier that you provide to ensure the idempotency of the request. For more information, see <a href="https://docs.aws.amazon.com/AWSEC2/latest/APIReference/Run_Instance_Idempotency.html">How to Ensure Idempotency</a>.</p>
     */
    ClientToken?: string;
    /**
     * <p>The tags to apply to the Client VPN endpoint during creation.</p>
     */
    TagSpecifications?: TagSpecification[];
    /**
     * <p>The IDs of one or more security groups to apply to the target network. You must also specify the ID of the VPC that contains the security groups.</p>
     */
    SecurityGroupIds?: string[];
    /**
     * <p>The ID of the VPC to associate with the Client VPN endpoint. If no security group IDs are specified in the request, the default security group for the VPC is applied.</p>
     */
    VpcId?: string;
    /**
     * <p>Specify whether to enable the self-service portal for the Client VPN endpoint.</p>
     *         <p>Default Value: <code>enabled</code>
     *          </p>
     */
    SelfServicePortal?: SelfServicePortal | string;
    /**
     * <p>The options for managing connection authorization for new client connections.</p>
     */
    ClientConnectOptions?: ClientConnectOptions;
}
export declare namespace CreateClientVpnEndpointRequest {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: CreateClientVpnEndpointRequest) => any;
}
export declare type ClientVpnEndpointStatusCode = "available" | "deleted" | "deleting" | "pending-associate";
/**
 * <p>Describes the state of a Client VPN endpoint.</p>
 */
export interface ClientVpnEndpointStatus {
    /**
     * <p>The state of the Client VPN endpoint. Possible states include:</p>
     * 		       <ul>
     *             <li>
     * 				           <p>
     *                   <code>pending-associate</code> - The Client VPN endpoint has been created but no target networks
     * 					have been associated. The Client VPN endpoint cannot accept connections.</p>
     * 			         </li>
     *             <li>
     * 				           <p>
     *                   <code>available</code> - The Client VPN endpoint has been created and a target network has been
     * 					associated. The Client VPN endpoint can accept connections.</p>
     * 			         </li>
     *             <li>
     * 				           <p>
     *                   <code>deleting</code> - The Client VPN endpoint is being deleted. The Client VPN endpoint cannot accept
     * 					connections.</p>
     *             </li>
     *             <li>
     * 				           <p>
     *                   <code>deleted</code> - The Client VPN endpoint has been deleted. The Client VPN endpoint cannot accept
     * 					connections.</p>
     * 			         </li>
     *          </ul>
     */
    Code?: ClientVpnEndpointStatusCode | string;
    /**
     * <p>A message about the status of the Client VPN endpoint.</p>
     */
    Message?: string;
}
export declare namespace ClientVpnEndpointStatus {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: ClientVpnEndpointStatus) => any;
}
export interface CreateClientVpnEndpointResult {
    /**
     * <p>The ID of the Client VPN endpoint.</p>
     */
    ClientVpnEndpointId?: string;
    /**
     * <p>The current state of the Client VPN endpoint.</p>
     */
    Status?: ClientVpnEndpointStatus;
    /**
     * <p>The DNS name to be used by clients when establishing their VPN session.</p>
     */
    DnsName?: string;
}
export declare namespace CreateClientVpnEndpointResult {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: CreateClientVpnEndpointResult) => any;
}
export interface CreateClientVpnRouteRequest {
    /**
     * <p>The ID of the Client VPN endpoint to which to add the route.</p>
     */
    ClientVpnEndpointId: string | undefined;
    /**
     * <p>The IPv4 address range, in CIDR notation, of the route destination. For example:</p>
     * 		       <ul>
     *             <li>
     *                <p>To add a route for Internet access, enter <code>0.0.0.0/0</code>
     *                </p>
     *             </li>
     *             <li>
     *                <p>To add a route for a peered VPC, enter the peered VPC's IPv4 CIDR range</p>
     *             </li>
     *             <li>
     *                <p>To add a route for an on-premises network, enter the AWS Site-to-Site VPN connection's IPv4 CIDR range</p>
     *             </li>
     *             <li>
     *                <p>To add a route for the local network, enter the client CIDR range</p>
     *             </li>
     *          </ul>
     */
    DestinationCidrBlock: string | undefined;
    /**
     * <p>The ID of the subnet through which you want to route traffic. The specified subnet must be
     * 			an existing target network of the Client VPN endpoint.</p>
     * 	        <p>Alternatively, if you're adding a route for the local network, specify <code>local</code>.</p>
     */
    TargetVpcSubnetId: string | undefined;
    /**
     * <p>A brief description of the route.</p>
     */
    Description?: string;
    /**
     * <p>Unique, case-sensitive identifier that you provide to ensure the idempotency of the request. For more information, see <a href="https://docs.aws.amazon.com/AWSEC2/latest/APIReference/Run_Instance_Idempotency.html">How to Ensure Idempotency</a>.</p>
     */
    ClientToken?: string;
    /**
     * <p>Checks whether you have the required permissions for the action, without actually making the request, and provides an error response. If you have the required permissions, the error response is <code>DryRunOperation</code>. Otherwise, it is <code>UnauthorizedOperation</code>.</p>
     */
    DryRun?: boolean;
}
export declare namespace CreateClientVpnRouteRequest {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: CreateClientVpnRouteRequest) => any;
}
export declare type ClientVpnRouteStatusCode = "active" | "creating" | "deleting" | "failed";
/**
 * <p>Describes the state of a Client VPN endpoint route.</p>
 */
export interface ClientVpnRouteStatus {
    /**
     * <p>The state of the Client VPN endpoint route.</p>
     */
    Code?: ClientVpnRouteStatusCode | string;
    /**
     * <p>A message about the status of the Client VPN endpoint route, if applicable.</p>
     */
    Message?: string;
}
export declare namespace ClientVpnRouteStatus {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: ClientVpnRouteStatus) => any;
}
export interface CreateClientVpnRouteResult {
    /**
     * <p>The current state of the route.</p>
     */
    Status?: ClientVpnRouteStatus;
}
export declare namespace CreateClientVpnRouteResult {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: CreateClientVpnRouteResult) => any;
}
export declare type GatewayType = "ipsec.1";
/**
 * <p>Contains the parameters for CreateCustomerGateway.</p>
 */
export interface CreateCustomerGatewayRequest {
    /**
     * <p>For devices that support BGP, the customer gateway's BGP ASN.</p>
     *         <p>Default: 65000</p>
     */
    BgpAsn: number | undefined;
    /**
     * <p>The Internet-routable IP address for the customer gateway's outside interface. The address must be static.</p>
     */
    PublicIp?: string;
    /**
     * <p>The Amazon Resource Name (ARN) for the customer gateway certificate.</p>
     */
    CertificateArn?: string;
    /**
     * <p>The type of VPN connection that this customer gateway supports (<code>ipsec.1</code>).</p>
     */
    Type: GatewayType | string | undefined;
    /**
     * <p>The tags to apply to the customer gateway.</p>
     */
    TagSpecifications?: TagSpecification[];
    /**
     * <p>A name for the customer gateway device.</p>
     *         <p>Length Constraints: Up to 255 characters.</p>
     */
    DeviceName?: string;
    /**
     * <p>Checks whether you have the required permissions for the action, without actually making the request,
     *             and provides an error response. If you have the required permissions, the error response is <code>DryRunOperation</code>.
     *             Otherwise, it is <code>UnauthorizedOperation</code>.</p>
     */
    DryRun?: boolean;
}
export declare namespace CreateCustomerGatewayRequest {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: CreateCustomerGatewayRequest) => any;
}
/**
 * <p>Describes a customer gateway.</p>
 */
export interface CustomerGateway {
    /**
     * <p>The customer gateway's Border Gateway Protocol (BGP) Autonomous System Number (ASN).</p>
     */
    BgpAsn?: string;
    /**
     * <p>The ID of the customer gateway.</p>
     */
    CustomerGatewayId?: string;
    /**
     * <p>The Internet-routable IP address of the customer gateway's outside interface.</p>
     */
    IpAddress?: string;
    /**
     * <p>The Amazon Resource Name (ARN) for the customer gateway certificate.</p>
     */
    CertificateArn?: string;
    /**
     * <p>The current state of the customer gateway (<code>pending | available | deleting |
     *             deleted</code>).</p>
     */
    State?: string;
    /**
     * <p>The type of VPN connection the customer gateway supports (<code>ipsec.1</code>).</p>
     */
    Type?: string;
    /**
     * <p>The name of customer gateway device.</p>
     */
    DeviceName?: string;
    /**
     * <p>Any tags assigned to the customer gateway.</p>
     */
    Tags?: Tag[];
}
export declare namespace CustomerGateway {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: CustomerGateway) => any;
}
/**
 * <p>Contains the output of CreateCustomerGateway.</p>
 */
export interface CreateCustomerGatewayResult {
    /**
     * <p>Information about the customer gateway.</p>
     */
    CustomerGateway?: CustomerGateway;
}
export declare namespace CreateCustomerGatewayResult {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: CreateCustomerGatewayResult) => any;
}
export interface CreateDefaultSubnetRequest {
    /**
     * <p>The Availability Zone in which to create the default subnet.</p>
     */
    AvailabilityZone: string | undefined;
    /**
     * <p>Checks whether you have the required permissions for the action, without actually making the request,
     *    and provides an error response. If you have the required permissions, the error response is <code>DryRunOperation</code>.
     *    Otherwise, it is <code>UnauthorizedOperation</code>.</p>
     */
    DryRun?: boolean;
}
export declare namespace CreateDefaultSubnetRequest {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: CreateDefaultSubnetRequest) => any;
}
export declare type SubnetState = "available" | "pending";
/**
 * <p>Describes a subnet.</p>
 */
export interface Subnet {
    /**
     * <p>The Availability Zone of the subnet.</p>
     */
    AvailabilityZone?: string;
    /**
     * <p>The AZ ID of the subnet.</p>
     */
    AvailabilityZoneId?: string;
    /**
     * <p>The number of unused private IPv4 addresses in the subnet. The IPv4 addresses for any
     * 			stopped instances are considered unavailable.</p>
     */
    AvailableIpAddressCount?: number;
    /**
     * <p>The IPv4 CIDR block assigned to the subnet.</p>
     */
    CidrBlock?: string;
    /**
     * <p>Indicates whether this is the default subnet for the Availability Zone.</p>
     */
    DefaultForAz?: boolean;
    /**
     * <p>Indicates whether instances launched in this subnet receive a public IPv4 address.</p>
     */
    MapPublicIpOnLaunch?: boolean;
    /**
     * <p>Indicates whether a network interface created in this subnet (including a network
     *             interface created by <a>RunInstances</a>) receives a customer-owned IPv4 address.</p>
     */
    MapCustomerOwnedIpOnLaunch?: boolean;
    /**
     * <p>The customer-owned IPv4 address pool associated with the subnet.</p>
     */
    CustomerOwnedIpv4Pool?: string;
    /**
     * <p>The current state of the subnet.</p>
     */
    State?: SubnetState | string;
    /**
     * <p>The ID of the subnet.</p>
     */
    SubnetId?: string;
    /**
     * <p>The ID of the VPC the subnet is in.</p>
     */
    VpcId?: string;
    /**
     * <p>The ID of the AWS account that owns the subnet.</p>
     */
    OwnerId?: string;
    /**
     * <p>Indicates whether a network interface created in this subnet (including a network
     *             interface created by <a>RunInstances</a>) receives an IPv6 address.</p>
     */
    AssignIpv6AddressOnCreation?: boolean;
    /**
     * <p>Information about the IPv6 CIDR blocks associated with the subnet.</p>
     */
    Ipv6CidrBlockAssociationSet?: SubnetIpv6CidrBlockAssociation[];
    /**
     * <p>Any tags assigned to the subnet.</p>
     */
    Tags?: Tag[];
    /**
     * <p>The Amazon Resource Name (ARN) of the subnet.</p>
     */
    SubnetArn?: string;
    /**
     * <p>The Amazon Resource Name (ARN) of the Outpost.</p>
     */
    OutpostArn?: string;
}
export declare namespace Subnet {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: Subnet) => any;
}
export interface CreateDefaultSubnetResult {
    /**
     * <p>Information about the subnet.</p>
     */
    Subnet?: Subnet;
}
export declare namespace CreateDefaultSubnetResult {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: CreateDefaultSubnetResult) => any;
}
export interface CreateDefaultVpcRequest {
    /**
     * <p>Checks whether you have the required permissions for the action, without actually making the request,
     *    and provides an error response. If you have the required permissions, the error response is <code>DryRunOperation</code>.
     *    Otherwise, it is <code>UnauthorizedOperation</code>.</p>
     */
    DryRun?: boolean;
}
export declare namespace CreateDefaultVpcRequest {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: CreateDefaultVpcRequest) => any;
}
export declare type Tenancy = "dedicated" | "default" | "host";
export declare type VpcState = "available" | "pending";
/**
 * <p>Describes a VPC.</p>
 */
export interface Vpc {
    /**
     * <p>The primary IPv4 CIDR block for the VPC.</p>
     */
    CidrBlock?: string;
    /**
     * <p>The ID of the set of DHCP options you've associated with the VPC.</p>
     */
    DhcpOptionsId?: string;
    /**
     * <p>The current state of the VPC.</p>
     */
    State?: VpcState | string;
    /**
     * <p>The ID of the VPC.</p>
     */
    VpcId?: string;
    /**
     * <p>The ID of the AWS account that owns the VPC.</p>
     */
    OwnerId?: string;
    /**
     * <p>The allowed tenancy of instances launched into the VPC.</p>
     */
    InstanceTenancy?: Tenancy | string;
    /**
     * <p>Information about the IPv6 CIDR blocks associated with the VPC.</p>
     */
    Ipv6CidrBlockAssociationSet?: VpcIpv6CidrBlockAssociation[];
    /**
     * <p>Information about the IPv4 CIDR blocks associated with the VPC.</p>
     */
    CidrBlockAssociationSet?: VpcCidrBlockAssociation[];
    /**
     * <p>Indicates whether the VPC is the default VPC.</p>
     */
    IsDefault?: boolean;
    /**
     * <p>Any tags assigned to the VPC.</p>
     */
    Tags?: Tag[];
}
export declare namespace Vpc {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: Vpc) => any;
}
export interface CreateDefaultVpcResult {
    /**
     * <p>Information about the VPC.</p>
     */
    Vpc?: Vpc;
}
export declare namespace CreateDefaultVpcResult {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: CreateDefaultVpcResult) => any;
}
/**
 * <p>Describes a DHCP configuration option.</p>
 */
export interface NewDhcpConfiguration {
    /**
     * <p>The name of a DHCP option.</p>
     */
    Key?: string;
    /**
     * <p>One or more values for the DHCP option.</p>
     */
    Values?: string[];
}
export declare namespace NewDhcpConfiguration {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: NewDhcpConfiguration) => any;
}
export interface CreateDhcpOptionsRequest {
    /**
     * <p>A DHCP configuration option.</p>
     */
    DhcpConfigurations: NewDhcpConfiguration[] | undefined;
    /**
     * <p>The tags to assign to the DHCP option.</p>
     */
    TagSpecifications?: TagSpecification[];
    /**
     * <p>Checks whether you have the required permissions for the action, without actually making the request,
     *    and provides an error response. If you have the required permissions, the error response is <code>DryRunOperation</code>.
     *    Otherwise, it is <code>UnauthorizedOperation</code>.</p>
     */
    DryRun?: boolean;
}
export declare namespace CreateDhcpOptionsRequest {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: CreateDhcpOptionsRequest) => any;
}
/**
 * <p>Describes a value for a resource attribute that is a String.</p>
 */
export interface AttributeValue {
    /**
     * <p>The attribute value. The value is case-sensitive.</p>
     */
    Value?: string;
}
export declare namespace AttributeValue {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: AttributeValue) => any;
}
/**
 * <p>Describes a DHCP configuration option.</p>
 */
export interface DhcpConfiguration {
    /**
     * <p>The name of a DHCP option.</p>
     */
    Key?: string;
    /**
     * <p>One or more values for the DHCP option.</p>
     */
    Values?: AttributeValue[];
}
export declare namespace DhcpConfiguration {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: DhcpConfiguration) => any;
}
/**
 * <p>Describes a set of DHCP options.</p>
 */
export interface DhcpOptions {
    /**
     * <p>One or more DHCP options in the set.</p>
     */
    DhcpConfigurations?: DhcpConfiguration[];
    /**
     * <p>The ID of the set of DHCP options.</p>
     */
    DhcpOptionsId?: string;
    /**
     * <p>The ID of the AWS account that owns the DHCP options set.</p>
     */
    OwnerId?: string;
    /**
     * <p>Any tags assigned to the DHCP options set.</p>
     */
    Tags?: Tag[];
}
export declare namespace DhcpOptions {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: DhcpOptions) => any;
}
export interface CreateDhcpOptionsResult {
    /**
     * <p>A set of DHCP options.</p>
     */
    DhcpOptions?: DhcpOptions;
}
export declare namespace CreateDhcpOptionsResult {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: CreateDhcpOptionsResult) => any;
}
export interface CreateEgressOnlyInternetGatewayRequest {
    /**
     * <p>Unique, case-sensitive identifier that you provide to ensure the idempotency of the
     * 			request. For more information, see <a href="https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/Run_Instance_Idempotency.html">How to Ensure
     * 				Idempotency</a>.</p>
     */
    ClientToken?: string;
    /**
     * <p>Checks whether you have the required permissions for the action, without actually making the request,
     *    and provides an error response. If you have the required permissions, the error response is <code>DryRunOperation</code>.
     *    Otherwise, it is <code>UnauthorizedOperation</code>.</p>
     */
    DryRun?: boolean;
    /**
     * <p>The ID of the VPC for which to create the egress-only internet gateway.</p>
     */
    VpcId: string | undefined;
    /**
     * <p>The tags to assign to the egress-only internet gateway.</p>
     */
    TagSpecifications?: TagSpecification[];
}
export declare namespace CreateEgressOnlyInternetGatewayRequest {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: CreateEgressOnlyInternetGatewayRequest) => any;
}
/**
 * <p>Describes the attachment of a VPC to an internet gateway or an egress-only internet
 * 			gateway.</p>
 */
export interface InternetGatewayAttachment {
    /**
     * <p>The current state of the attachment. For an internet gateway, the state is
     * 				<code>available</code> when attached to a VPC; otherwise, this value is not
     * 			returned.</p>
     */
    State?: AttachmentStatus | string;
    /**
     * <p>The ID of the VPC.</p>
     */
    VpcId?: string;
}
export declare namespace InternetGatewayAttachment {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: InternetGatewayAttachment) => any;
}
/**
 * <p>Describes an egress-only internet gateway.</p>
 */
export interface EgressOnlyInternetGateway {
    /**
     * <p>Information about the attachment of the egress-only internet gateway.</p>
     */
    Attachments?: InternetGatewayAttachment[];
    /**
     * <p>The ID of the egress-only internet gateway.</p>
     */
    EgressOnlyInternetGatewayId?: string;
    /**
     * <p>The tags assigned to the egress-only internet gateway.</p>
     */
    Tags?: Tag[];
}
export declare namespace EgressOnlyInternetGateway {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: EgressOnlyInternetGateway) => any;
}
export interface CreateEgressOnlyInternetGatewayResult {
    /**
     * <p>Unique, case-sensitive identifier that you provide to ensure the idempotency of the
     * 			request.</p>
     */
    ClientToken?: string;
    /**
     * <p>Information about the egress-only internet gateway.</p>
     */
    EgressOnlyInternetGateway?: EgressOnlyInternetGateway;
}
export declare namespace CreateEgressOnlyInternetGatewayResult {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: CreateEgressOnlyInternetGatewayResult) => any;
}
export declare enum FleetExcessCapacityTerminationPolicy {
    NO_TERMINATION = "no-termination",
    TERMINATION = "termination"
}
/**
 * <p>Describes the Amazon EC2 launch template and the launch template version that can be used by
 *          an EC2 Fleet to configure Amazon EC2 instances. For information about launch templates, see <a href="https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/ec2-launch-templates.html">Launching
 *             an instance from a launch template</a> in the
 *          <i>Amazon EC2 User Guide</i>.</p>
 */
export interface FleetLaunchTemplateSpecificationRequest {
    /**
     * <p>The ID of the launch template. If you specify the template ID, you can't specify the template name.</p>
     */
    LaunchTemplateId?: string;
    /**
     * <p>The name of the launch template. If you specify the template name, you can't specify the template ID.</p>
     */
    LaunchTemplateName?: string;
    /**
     * <p>The launch template version number, <code>$Latest</code>, or <code>$Default</code>. You must specify a value, otherwise the request fails.</p>
     *          <p>If the value is <code>$Latest</code>, Amazon EC2 uses the latest version of the launch template.</p>
     *          <p>If the value is <code>$Default</code>, Amazon EC2 uses the default version of the launch template.</p>
     */
    Version?: string;
}
export declare namespace FleetLaunchTemplateSpecificationRequest {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: FleetLaunchTemplateSpecificationRequest) => any;
}
export declare type _InstanceType = "a1.2xlarge" | "a1.4xlarge" | "a1.large" | "a1.medium" | "a1.metal" | "a1.xlarge" | "c1.medium" | "c1.xlarge" | "c3.2xlarge" | "c3.4xlarge" | "c3.8xlarge" | "c3.large" | "c3.xlarge" | "c4.2xlarge" | "c4.4xlarge" | "c4.8xlarge" | "c4.large" | "c4.xlarge" | "c5.12xlarge" | "c5.18xlarge" | "c5.24xlarge" | "c5.2xlarge" | "c5.4xlarge" | "c5.9xlarge" | "c5.large" | "c5.metal" | "c5.xlarge" | "c5a.12xlarge" | "c5a.16xlarge" | "c5a.24xlarge" | "c5a.2xlarge" | "c5a.4xlarge" | "c5a.8xlarge" | "c5a.large" | "c5a.xlarge" | "c5ad.12xlarge" | "c5ad.16xlarge" | "c5ad.24xlarge" | "c5ad.2xlarge" | "c5ad.4xlarge" | "c5ad.8xlarge" | "c5ad.large" | "c5ad.xlarge" | "c5d.12xlarge" | "c5d.18xlarge" | "c5d.24xlarge" | "c5d.2xlarge" | "c5d.4xlarge" | "c5d.9xlarge" | "c5d.large" | "c5d.metal" | "c5d.xlarge" | "c5n.18xlarge" | "c5n.2xlarge" | "c5n.4xlarge" | "c5n.9xlarge" | "c5n.large" | "c5n.metal" | "c5n.xlarge" | "c6g.12xlarge" | "c6g.16xlarge" | "c6g.2xlarge" | "c6g.4xlarge" | "c6g.8xlarge" | "c6g.large" | "c6g.medium" | "c6g.metal" | "c6g.xlarge" | "c6gd.12xlarge" | "c6gd.16xlarge" | "c6gd.2xlarge" | "c6gd.4xlarge" | "c6gd.8xlarge" | "c6gd.large" | "c6gd.medium" | "c6gd.metal" | "c6gd.xlarge" | "c6gn.12xlarge" | "c6gn.16xlarge" | "c6gn.2xlarge" | "c6gn.4xlarge" | "c6gn.8xlarge" | "c6gn.large" | "c6gn.medium" | "c6gn.xlarge" | "cc1.4xlarge" | "cc2.8xlarge" | "cg1.4xlarge" | "cr1.8xlarge" | "d2.2xlarge" | "d2.4xlarge" | "d2.8xlarge" | "d2.xlarge" | "d3.2xlarge" | "d3.4xlarge" | "d3.8xlarge" | "d3.xlarge" | "d3en.12xlarge" | "d3en.2xlarge" | "d3en.4xlarge" | "d3en.6xlarge" | "d3en.8xlarge" | "d3en.xlarge" | "f1.16xlarge" | "f1.2xlarge" | "f1.4xlarge" | "g2.2xlarge" | "g2.8xlarge" | "g3.16xlarge" | "g3.4xlarge" | "g3.8xlarge" | "g3s.xlarge" | "g4ad.16xlarge" | "g4ad.4xlarge" | "g4ad.8xlarge" | "g4dn.12xlarge" | "g4dn.16xlarge" | "g4dn.2xlarge" | "g4dn.4xlarge" | "g4dn.8xlarge" | "g4dn.metal" | "g4dn.xlarge" | "h1.16xlarge" | "h1.2xlarge" | "h1.4xlarge" | "h1.8xlarge" | "hi1.4xlarge" | "hs1.8xlarge" | "i2.2xlarge" | "i2.4xlarge" | "i2.8xlarge" | "i2.xlarge" | "i3.16xlarge" | "i3.2xlarge" | "i3.4xlarge" | "i3.8xlarge" | "i3.large" | "i3.metal" | "i3.xlarge" | "i3en.12xlarge" | "i3en.24xlarge" | "i3en.2xlarge" | "i3en.3xlarge" | "i3en.6xlarge" | "i3en.large" | "i3en.metal" | "i3en.xlarge" | "inf1.24xlarge" | "inf1.2xlarge" | "inf1.6xlarge" | "inf1.xlarge" | "m1.large" | "m1.medium" | "m1.small" | "m1.xlarge" | "m2.2xlarge" | "m2.4xlarge" | "m2.xlarge" | "m3.2xlarge" | "m3.large" | "m3.medium" | "m3.xlarge" | "m4.10xlarge" | "m4.16xlarge" | "m4.2xlarge" | "m4.4xlarge" | "m4.large" | "m4.xlarge" | "m5.12xlarge" | "m5.16xlarge" | "m5.24xlarge" | "m5.2xlarge" | "m5.4xlarge" | "m5.8xlarge" | "m5.large" | "m5.metal" | "m5.xlarge" | "m5a.12xlarge" | "m5a.16xlarge" | "m5a.24xlarge" | "m5a.2xlarge" | "m5a.4xlarge" | "m5a.8xlarge" | "m5a.large" | "m5a.xlarge" | "m5ad.12xlarge" | "m5ad.16xlarge" | "m5ad.24xlarge" | "m5ad.2xlarge" | "m5ad.4xlarge" | "m5ad.8xlarge" | "m5ad.large" | "m5ad.xlarge" | "m5d.12xlarge" | "m5d.16xlarge" | "m5d.24xlarge" | "m5d.2xlarge" | "m5d.4xlarge" | "m5d.8xlarge" | "m5d.large" | "m5d.metal" | "m5d.xlarge" | "m5dn.12xlarge" | "m5dn.16xlarge" | "m5dn.24xlarge" | "m5dn.2xlarge" | "m5dn.4xlarge" | "m5dn.8xlarge" | "m5dn.large" | "m5dn.xlarge" | "m5n.12xlarge" | "m5n.16xlarge" | "m5n.24xlarge" | "m5n.2xlarge" | "m5n.4xlarge" | "m5n.8xlarge" | "m5n.large" | "m5n.xlarge" | "m5zn.12xlarge" | "m5zn.2xlarge" | "m5zn.3xlarge" | "m5zn.6xlarge" | "m5zn.large" | "m5zn.metal" | "m5zn.xlarge" | "m6g.12xlarge" | "m6g.16xlarge" | "m6g.2xlarge" | "m6g.4xlarge" | "m6g.8xlarge" | "m6g.large" | "m6g.medium" | "m6g.metal" | "m6g.xlarge" | "m6gd.12xlarge" | "m6gd.16xlarge" | "m6gd.2xlarge" | "m6gd.4xlarge" | "m6gd.8xlarge" | "m6gd.large" | "m6gd.medium" | "m6gd.metal" | "m6gd.xlarge" | "mac1.metal" | "p2.16xlarge" | "p2.8xlarge" | "p2.xlarge" | "p3.16xlarge" | "p3.2xlarge" | "p3.8xlarge" | "p3dn.24xlarge" | "p4d.24xlarge" | "r3.2xlarge" | "r3.4xlarge" | "r3.8xlarge" | "r3.large" | "r3.xlarge" | "r4.16xlarge" | "r4.2xlarge" | "r4.4xlarge" | "r4.8xlarge" | "r4.large" | "r4.xlarge" | "r5.12xlarge" | "r5.16xlarge" | "r5.24xlarge" | "r5.2xlarge" | "r5.4xlarge" | "r5.8xlarge" | "r5.large" | "r5.metal" | "r5.xlarge" | "r5a.12xlarge" | "r5a.16xlarge" | "r5a.24xlarge" | "r5a.2xlarge" | "r5a.4xlarge" | "r5a.8xlarge" | "r5a.large" | "r5a.xlarge" | "r5ad.12xlarge" | "r5ad.16xlarge" | "r5ad.24xlarge" | "r5ad.2xlarge" | "r5ad.4xlarge" | "r5ad.8xlarge" | "r5ad.large" | "r5ad.xlarge" | "r5b.12xlarge" | "r5b.16xlarge" | "r5b.24xlarge" | "r5b.2xlarge" | "r5b.4xlarge" | "r5b.8xlarge" | "r5b.large" | "r5b.metal" | "r5b.xlarge" | "r5d.12xlarge" | "r5d.16xlarge" | "r5d.24xlarge" | "r5d.2xlarge" | "r5d.4xlarge" | "r5d.8xlarge" | "r5d.large" | "r5d.metal" | "r5d.xlarge" | "r5dn.12xlarge" | "r5dn.16xlarge" | "r5dn.24xlarge" | "r5dn.2xlarge" | "r5dn.4xlarge" | "r5dn.8xlarge" | "r5dn.large" | "r5dn.xlarge" | "r5n.12xlarge" | "r5n.16xlarge" | "r5n.24xlarge" | "r5n.2xlarge" | "r5n.4xlarge" | "r5n.8xlarge" | "r5n.large" | "r5n.xlarge" | "r6g.12xlarge" | "r6g.16xlarge" | "r6g.2xlarge" | "r6g.4xlarge" | "r6g.8xlarge" | "r6g.large" | "r6g.medium" | "r6g.metal" | "r6g.xlarge" | "r6gd.12xlarge" | "r6gd.16xlarge" | "r6gd.2xlarge" | "r6gd.4xlarge" | "r6gd.8xlarge" | "r6gd.large" | "r6gd.medium" | "r6gd.metal" | "r6gd.xlarge" | "t1.micro" | "t2.2xlarge" | "t2.large" | "t2.medium" | "t2.micro" | "t2.nano" | "t2.small" | "t2.xlarge" | "t3.2xlarge" | "t3.large" | "t3.medium" | "t3.micro" | "t3.nano" | "t3.small" | "t3.xlarge" | "t3a.2xlarge" | "t3a.large" | "t3a.medium" | "t3a.micro" | "t3a.nano" | "t3a.small" | "t3a.xlarge" | "t4g.2xlarge" | "t4g.large" | "t4g.medium" | "t4g.micro" | "t4g.nano" | "t4g.small" | "t4g.xlarge" | "u-12tb1.112xlarge" | "u-12tb1.metal" | "u-18tb1.metal" | "u-24tb1.metal" | "u-6tb1.112xlarge" | "u-6tb1.56xlarge" | "u-6tb1.metal" | "u-9tb1.112xlarge" | "u-9tb1.metal" | "x1.16xlarge" | "x1.32xlarge" | "x1e.16xlarge" | "x1e.2xlarge" | "x1e.32xlarge" | "x1e.4xlarge" | "x1e.8xlarge" | "x1e.xlarge" | "x2gd.12xlarge" | "x2gd.16xlarge" | "x2gd.2xlarge" | "x2gd.4xlarge" | "x2gd.8xlarge" | "x2gd.large" | "x2gd.medium" | "x2gd.metal" | "x2gd.xlarge" | "z1d.12xlarge" | "z1d.2xlarge" | "z1d.3xlarge" | "z1d.6xlarge" | "z1d.large" | "z1d.metal" | "z1d.xlarge";
/**
 * <p>Describes the placement of an instance.</p>
 */
export interface Placement {
    /**
     * <p>The Availability Zone of the instance.</p>
     *         <p>If not specified, an Availability Zone will be automatically chosen for you based on
     *             the load balancing criteria for the Region.</p>
     *         <p>This parameter is not supported by <a href="https://docs.aws.amazon.com/AWSEC2/latest/APIReference/API_CreateFleet">CreateFleet</a>.</p>
     */
    AvailabilityZone?: string;
    /**
     * <p>The affinity setting for the instance on the Dedicated Host. This parameter is not
     *             supported for the <a href="https://docs.aws.amazon.com/AWSEC2/latest/APIReference/API_ImportInstance.html">ImportInstance</a> command.</p>
     *         <p>This parameter is not supported by <a href="https://docs.aws.amazon.com/AWSEC2/latest/APIReference/API_CreateFleet">CreateFleet</a>.</p>
     */
    Affinity?: string;
    /**
     * <p>The name of the placement group the instance is in.</p>
     */
    GroupName?: string;
    /**
     * <p>The number of the partition the instance is in. Valid only if the placement group
     *             strategy is set to <code>partition</code>.</p>
     *         <p>This parameter is not supported by <a href="https://docs.aws.amazon.com/AWSEC2/latest/APIReference/API_CreateFleet">CreateFleet</a>.</p>
     */
    PartitionNumber?: number;
    /**
     * <p>The ID of the Dedicated Host on which the instance resides. This parameter is not
     *             supported for the <a href="https://docs.aws.amazon.com/AWSEC2/latest/APIReference/API_ImportInstance.html">ImportInstance</a> command.</p>
     *         <p>This parameter is not supported by <a href="https://docs.aws.amazon.com/AWSEC2/latest/APIReference/API_CreateFleet">CreateFleet</a>.</p>
     */
    HostId?: string;
    /**
     * <p>The tenancy of the instance (if the instance is running in a VPC). An instance with a
     *             tenancy of <code>dedicated</code> runs on single-tenant hardware. The <code>host</code>
     *             tenancy is not supported for the <a href="https://docs.aws.amazon.com/AWSEC2/latest/APIReference/API_ImportInstance.html">ImportInstance</a> command.</p>
     *         <p>This parameter is not supported by <a href="https://docs.aws.amazon.com/AWSEC2/latest/APIReference/API_CreateFleet">CreateFleet</a>.</p>
     */
    Tenancy?: Tenancy | string;
    /**
     * <p>Reserved for future use.</p>
     *         <p>This parameter is not supported by <a href="https://docs.aws.amazon.com/AWSEC2/latest/APIReference/API_CreateFleet">CreateFleet</a>.</p>
     */
    SpreadDomain?: string;
    /**
     * <p>The ARN of the host resource group in which to launch the instances. If you specify
     *     		a host resource group ARN, omit the <b>Tenancy</b>
     *     		parameter or set it to <code>host</code>.</p>
     *         <p>This parameter is not supported by <a href="https://docs.aws.amazon.com/AWSEC2/latest/APIReference/API_CreateFleet">CreateFleet</a>.</p>
     */
    HostResourceGroupArn?: string;
}
export declare namespace Placement {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: Placement) => any;
}
/**
 * <p>Describes overrides for a launch template.</p>
 */
export interface FleetLaunchTemplateOverridesRequest {
    /**
     * <p>The instance type.</p>
     */
    InstanceType?: _InstanceType | string;
    /**
     * <p>The maximum price per unit hour that you are willing to pay for a Spot Instance.</p>
     */
    MaxPrice?: string;
    /**
     * <p>The IDs of the subnets in which to launch the instances. Separate multiple subnet IDs using commas (for example, <code>subnet-1234abcdeexample1, subnet-0987cdef6example2</code>). A request of type <code>instant</code> can have only one subnet ID.</p>
     */
    SubnetId?: string;
    /**
     * <p>The Availability Zone in which to launch the instances.</p>
     */
    AvailabilityZone?: string;
    /**
     * <p>The number of units provided by the specified instance type.</p>
     */
    WeightedCapacity?: number;
    /**
     * <p>The priority for the launch template override. The highest priority is launched
     *          first.</p>
     *          <p>If the On-Demand <code>AllocationStrategy</code> is set to <code>prioritized</code>,
     *          EC2 Fleet uses priority to determine which launch template override to use first in fulfilling
     *          On-Demand capacity.</p>
     *          <p>If the Spot <code>AllocationStrategy</code> is set to
     *             <code>capacity-optimized-prioritized</code>, EC2 Fleet uses priority on a best-effort basis
     *          to determine which launch template override to use in fulfilling Spot capacity, but
     *          optimizes for capacity first.</p>
     *          <p>Valid values are whole numbers starting at <code>0</code>. The lower the number, the
     *          higher the priority. If no number is set, the launch template override has the lowest
     *          priority. You can set the same priority for different launch template overrides.</p>
     */
    Priority?: number;
    /**
     * <p>The location where the instance launched, if applicable.</p>
     */
    Placement?: Placement;
}
export declare namespace FleetLaunchTemplateOverridesRequest {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: FleetLaunchTemplateOverridesRequest) => any;
}
/**
 * <p>Describes a launch template and overrides.</p>
 */
export interface FleetLaunchTemplateConfigRequest {
    /**
     * <p>The launch template to use. You must specify either the launch template ID or launch
     *          template name in the request. </p>
     */
    LaunchTemplateSpecification?: FleetLaunchTemplateSpecificationRequest;
    /**
     * <p>Any parameters that you specify override the same parameters in the launch
     *          template.</p>
     *          <p>For fleets of type <code>request</code> and <code>maintain</code>, a maximum of 300
     *          items is allowed across all launch templates.</p>
     */
    Overrides?: FleetLaunchTemplateOverridesRequest[];
}
export declare namespace FleetLaunchTemplateConfigRequest {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: FleetLaunchTemplateConfigRequest) => any;
}
export declare enum FleetOnDemandAllocationStrategy {
    LOWEST_PRICE = "lowest-price",
    PRIORITIZED = "prioritized"
}
export declare enum FleetCapacityReservationUsageStrategy {
    USE_CAPACITY_RESERVATIONS_FIRST = "use-capacity-reservations-first"
}
/**
 * <p>Describes the strategy for using unused Capacity Reservations for fulfilling On-Demand
 *          capacity.</p>
 *          <note>
 *             <p>This strategy can only be used if the EC2 Fleet is of type <code>instant</code>.</p>
 *          </note>
 *          <p>For more information about Capacity Reservations, see <a href="https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/ec2-capacity-reservations.html">On-Demand Capacity
 *             Reservations</a> in the <i>Amazon EC2 User Guide</i>. For examples of using
 *          Capacity Reservations in an EC2 Fleet, see <a href="https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/ec2-fleet-examples.html">EC2 Fleet example
 *             configurations</a> in the <i>Amazon EC2 User Guide</i>.</p>
 */
export interface CapacityReservationOptionsRequest {
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
export declare namespace CapacityReservationOptionsRequest {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: CapacityReservationOptionsRequest) => any;
}
/**
 * <p>Describes the configuration of On-Demand Instances in an EC2 Fleet.</p>
 */
export interface OnDemandOptionsRequest {
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
    CapacityReservationOptions?: CapacityReservationOptionsRequest;
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
export declare namespace OnDemandOptionsRequest {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: OnDemandOptionsRequest) => any;
}
export declare enum SpotAllocationStrategy {
    CAPACITY_OPTIMIZED = "capacity-optimized",
    CAPACITY_OPTIMIZED_PRIORITIZED = "capacity-optimized-prioritized",
    DIVERSIFIED = "diversified",
    LOWEST_PRICE = "lowest-price"
}
export declare type SpotInstanceInterruptionBehavior = "hibernate" | "stop" | "terminate";
export declare enum FleetReplacementStrategy {
    LAUNCH = "launch"
}
/**
 * <p>The Spot Instance replacement strategy to use when Amazon EC2 emits a signal that your
 *          Spot Instance is at an elevated risk of being interrupted. For more information, see
 *          <a href="https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/ec2-fleet-configuration-strategies.html#ec2-fleet-capacity-rebalance">Capacity rebalancing</a> in the <i>Amazon EC2 User Guide</i>.</p>
 */
export interface FleetSpotCapacityRebalanceRequest {
    /**
     * <p>The replacement strategy to use. Only available for fleets of type
     *          <code>maintain</code>.</p>
     *          <p>To allow EC2 Fleet to launch a replacement Spot Instance when an instance rebalance
     *          notification is emitted for an existing Spot Instance in the fleet, specify
     *          <code>launch</code>. You must specify a value, otherwise you get an error.</p>
     *          <note>
     *             <p>When a replacement instance is launched, the instance marked for rebalance is not
     *             automatically terminated. You can terminate it, or you can leave it running. You are charged for all instances while they are running.</p>
     *          </note>
     */
    ReplacementStrategy?: FleetReplacementStrategy | string;
}
export declare namespace FleetSpotCapacityRebalanceRequest {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: FleetSpotCapacityRebalanceRequest) => any;
}
/**
 * <p>The strategies for managing your Spot Instances that are at an elevated risk of being interrupted.</p>
 */
export interface FleetSpotMaintenanceStrategiesRequest {
    /**
     * <p>The strategy to use when Amazon EC2 emits a signal that your Spot Instance is at an
     *          elevated risk of being interrupted.</p>
     */
    CapacityRebalance?: FleetSpotCapacityRebalanceRequest;
}
export declare namespace FleetSpotMaintenanceStrategiesRequest {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: FleetSpotMaintenanceStrategiesRequest) => any;
}
/**
 * <p>Describes the configuration of Spot Instances in an EC2 Fleet request.</p>
 */
export interface SpotOptionsRequest {
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
     * <p>The strategies for managing your Spot Instances that are at an elevated risk of being
     *          interrupted.</p>
     */
    MaintenanceStrategies?: FleetSpotMaintenanceStrategiesRequest;
    /**
     * <p>The behavior when a Spot Instance is interrupted. The default is <code>terminate</code>.</p>
     */
    InstanceInterruptionBehavior?: SpotInstanceInterruptionBehavior | string;
    /**
     * <p>The number of Spot pools across which to allocate your target Spot capacity. Valid only
     *          when Spot <b>AllocationStrategy</b> is set to
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
export declare namespace SpotOptionsRequest {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: SpotOptionsRequest) => any;
}
export declare enum DefaultTargetCapacityType {
    ON_DEMAND = "on-demand",
    SPOT = "spot"
}
/**
 * <p>The number of units to request. You can choose to set the target capacity as the number of
 *          instances. Or you can set the target capacity to a performance characteristic that is important to your application workload,
 *          such as vCPUs, memory, or I/O. If the request type is <code>maintain</code>, you can
 *          specify a target capacity of 0 and add capacity later.</p>
 *          <p>You can use the On-Demand Instance <code>MaxTotalPrice</code> parameter, the Spot Instance
 *             <code>MaxTotalPrice</code> parameter, or both parameters to ensure that your fleet cost
 *          does not exceed your budget. If you set a maximum price per hour for the On-Demand Instances and Spot Instances
 *          in your request, EC2 Fleet will launch instances until it reaches the maximum amount that you're
 *          willing to pay. When the maximum amount you're willing to pay is reached, the fleet stops
 *          launching instances even if it hasn’t met the target capacity. The
 *          <code>MaxTotalPrice</code> parameters are located in <a href="https://docs.aws.amazon.com/AWSEC2/latest/APIReference/API_OnDemandOptionsRequest">OnDemandOptionsRequest</a>
 *          and <a href="https://docs.aws.amazon.com/AWSEC2/latest/APIReference/API_SpotOptionsRequest">SpotOptionsRequest</a>.</p>
 */
export interface TargetCapacitySpecificationRequest {
    /**
     * <p>The number of units to request, filled using
     *          <code>DefaultTargetCapacityType</code>.</p>
     */
    TotalTargetCapacity: number | undefined;
    /**
     * <p>The number of On-Demand units to request.</p>
     */
    OnDemandTargetCapacity?: number;
    /**
     * <p>The number of Spot units to request.</p>
     */
    SpotTargetCapacity?: number;
    /**
     * <p>The default <code>TotalTargetCapacity</code>, which is either <code>Spot</code> or
     *             <code>On-Demand</code>.</p>
     */
    DefaultTargetCapacityType?: DefaultTargetCapacityType | string;
}
export declare namespace TargetCapacitySpecificationRequest {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: TargetCapacitySpecificationRequest) => any;
}
export declare enum FleetType {
    INSTANT = "instant",
    MAINTAIN = "maintain",
    REQUEST = "request"
}
export interface CreateFleetRequest {
    /**
     * <p>Checks whether you have the required permissions for the action, without actually making the request,
     *    and provides an error response. If you have the required permissions, the error response is <code>DryRunOperation</code>.
     *    Otherwise, it is <code>UnauthorizedOperation</code>.</p>
     */
    DryRun?: boolean;
    /**
     * <p>Unique, case-sensitive identifier that you provide to ensure the idempotency of the
     *          request. For more information, see <a href="https://docs.aws.amazon.com/AWSEC2/latest/APIReference/Run_Instance_Idempotency.html">Ensuring
     *             Idempotency</a>.</p>
     */
    ClientToken?: string;
    /**
     * <p>Describes the configuration of Spot Instances in an EC2 Fleet.</p>
     */
    SpotOptions?: SpotOptionsRequest;
    /**
     * <p>Describes the configuration of On-Demand Instances in an EC2 Fleet.</p>
     */
    OnDemandOptions?: OnDemandOptionsRequest;
    /**
     * <p>Indicates whether running instances should be terminated if the total target capacity of
     *          the EC2 Fleet is decreased below the current size of the EC2 Fleet.</p>
     */
    ExcessCapacityTerminationPolicy?: FleetExcessCapacityTerminationPolicy | string;
    /**
     * <p>The configuration for the EC2 Fleet.</p>
     */
    LaunchTemplateConfigs: FleetLaunchTemplateConfigRequest[] | undefined;
    /**
     * <p>The number of units to request.</p>
     */
    TargetCapacitySpecification: TargetCapacitySpecificationRequest | undefined;
    /**
     * <p>Indicates whether running instances should be terminated when the EC2 Fleet expires.</p>
     */
    TerminateInstancesWithExpiration?: boolean;
    /**
     * <p>The type of request. The default value is <code>maintain</code>.</p>
     *          <ul>
     *             <li>
     *                <p>
     *                   <code>maintain</code> - The EC2 Fleet places an asynchronous request for your desired
     *                capacity, and continues to maintain your desired Spot capacity by replenishing
     *                interrupted Spot Instances.</p>
     *             </li>
     *             <li>
     *                <p>
     *                   <code>request</code> - The EC2 Fleet places an asynchronous one-time request for your
     *                desired capacity, but does submit Spot requests in alternative capacity pools if Spot
     *                capacity is unavailable, and does not maintain Spot capacity if Spot Instances are
     *                interrupted.</p>
     *             </li>
     *             <li>
     *                <p>
     *                   <code>instant</code> - The EC2 Fleet places a synchronous one-time request for your
     *                desired capacity, and returns errors for any instances that could not be
     *                launched.</p>
     *             </li>
     *          </ul>
     *          <p>For more information, see <a href="https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/ec2-fleet-configuration-strategies.html#ec2-fleet-request-type">EC2 Fleet
     *             request types</a> in the <i>Amazon EC2 User Guide</i>.</p>
     */
    Type?: FleetType | string;
    /**
     * <p>The start date and time of the request, in UTC format (for example,
     *             <i>YYYY</i>-<i>MM</i>-<i>DD</i>T<i>HH</i>:<i>MM</i>:<i>SS</i>Z).
     *          The default is to start fulfilling the request immediately.</p>
     */
    ValidFrom?: Date;
    /**
     * <p>The end date and time of the request, in UTC format (for example,
     *             <i>YYYY</i>-<i>MM</i>-<i>DD</i>T<i>HH</i>:<i>MM</i>:<i>SS</i>Z).
     *          At this point, no new EC2 Fleet requests are placed or able to fulfill the request. If no value is specified, the request remains until you cancel it.</p>
     */
    ValidUntil?: Date;
    /**
     * <p>Indicates whether EC2 Fleet should replace unhealthy Spot Instances. Supported only for
     *          fleets of type <code>maintain</code>. For more information, see <a href="https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/manage-ec2-fleet.html#ec2-fleet-health-checks">EC2 Fleet
     *             health checks</a> in the <i>Amazon EC2 User Guide</i>.</p>
     */
    ReplaceUnhealthyInstances?: boolean;
    /**
     * <p>The key-value pair for tagging the EC2 Fleet request on creation. The value for
     *             <code>ResourceType</code> must be <code>fleet</code>, otherwise the fleet request fails.
     *          To tag instances at launch, specify the tags in the <a href="https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/ec2-launch-templates.html#create-launch-template">launch
     *             template</a>. For information about tagging after launch, see <a href="https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/Using_Tags.html#tag-resources">Tagging your
     *             resources</a>.</p>
     */
    TagSpecifications?: TagSpecification[];
}
export declare namespace CreateFleetRequest {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: CreateFleetRequest) => any;
}
/**
 * <p>Describes the Amazon EC2 launch template and the launch template version that can be used by
 *             a Spot Fleet request to configure Amazon EC2 instances. For information about launch templates, see
 *                 <a href="https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/ec2-launch-templates.html">Launching an instance from a launch template</a> in the
 *                 <i>Amazon EC2 User Guide for Linux Instances</i>.</p>
 */
export interface FleetLaunchTemplateSpecification {
    /**
     * <p>The ID of the launch template. If you specify the template ID, you can't specify the template name.</p>
     */
    LaunchTemplateId?: string;
    /**
     * <p>The name of the launch template. If you specify the template name, you can't specify the template ID.</p>
     */
    LaunchTemplateName?: string;
    /**
     * <p>The launch template version number, <code>$Latest</code>, or <code>$Default</code>. You must specify a value, otherwise the request fails.</p>
     *          <p>If the value is <code>$Latest</code>, Amazon EC2 uses the latest version of the launch template.</p>
     *          <p>If the value is <code>$Default</code>, Amazon EC2 uses the default version of the launch template.</p>
     */
    Version?: string;
}
export declare namespace FleetLaunchTemplateSpecification {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: FleetLaunchTemplateSpecification) => any;
}
/**
 * <p>Describes the placement of an instance.</p>
 */
export interface PlacementResponse {
    /**
     * <p>The name of the placement group that the instance is in.</p>
     */
    GroupName?: string;
}
export declare namespace PlacementResponse {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: PlacementResponse) => any;
}
/**
 * <p>Describes overrides for a launch template.</p>
 */
export interface FleetLaunchTemplateOverrides {
    /**
     * <p>The instance type.</p>
     */
    InstanceType?: _InstanceType | string;
    /**
     * <p>The maximum price per unit hour that you are willing to pay for a Spot Instance.</p>
     */
    MaxPrice?: string;
    /**
     * <p>The ID of the subnet in which to launch the instances.</p>
     */
    SubnetId?: string;
    /**
     * <p>The Availability Zone in which to launch the instances.</p>
     */
    AvailabilityZone?: string;
    /**
     * <p>The number of units provided by the specified instance type.</p>
     */
    WeightedCapacity?: number;
    /**
     * <p>The priority for the launch template override. The highest priority is launched
     *          first.</p>
     *          <p>If the On-Demand <code>AllocationStrategy</code> is set to <code>prioritized</code>,
     *          EC2 Fleet uses priority to determine which launch template override to use first in fulfilling
     *          On-Demand capacity.</p>
     *          <p>If the Spot <code>AllocationStrategy</code> is set to
     *             <code>capacity-optimized-prioritized</code>, EC2 Fleet uses priority on a best-effort basis
     *          to determine which launch template override to use in fulfilling Spot capacity, but
     *          optimizes for capacity first.</p>
     *          <p>Valid values are whole numbers starting at <code>0</code>. The lower the number, the
     *          higher the priority. If no number is set, the override has the lowest priority. You can set
     *          the same priority for different launch template overrides.</p>
     */
    Priority?: number;
    /**
     * <p>The location where the instance launched, if applicable.</p>
     */
    Placement?: PlacementResponse;
}
export declare namespace FleetLaunchTemplateOverrides {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: FleetLaunchTemplateOverrides) => any;
}
/**
 * <p>Describes a launch template and overrides.</p>
 */
export interface LaunchTemplateAndOverridesResponse {
    /**
     * <p>The launch template.</p>
     */
    LaunchTemplateSpecification?: FleetLaunchTemplateSpecification;
    /**
     * <p>Any parameters that you specify override the same parameters in the launch
     *          template.</p>
     */
    Overrides?: FleetLaunchTemplateOverrides;
}
export declare namespace LaunchTemplateAndOverridesResponse {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: LaunchTemplateAndOverridesResponse) => any;
}
export declare enum InstanceLifecycle {
    ON_DEMAND = "on-demand",
    SPOT = "spot"
}
/**
 * <p>Describes the instances that could not be launched by the fleet.</p>
 */
export interface CreateFleetError {
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
export declare namespace CreateFleetError {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: CreateFleetError) => any;
}
export declare type PlatformValues = "Windows";
/**
 * <p>Describes the instances that were launched by the fleet.</p>
 */
export interface CreateFleetInstance {
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
export declare namespace CreateFleetInstance {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: CreateFleetInstance) => any;
}
export interface CreateFleetResult {
    /**
     * <p>The ID of the EC2 Fleet.</p>
     */
    FleetId?: string;
    /**
     * <p>Information about the instances that could not be launched by the fleet. Valid only when
     *             <b>Type</b> is set to <code>instant</code>.</p>
     */
    Errors?: CreateFleetError[];
    /**
     * <p>Information about the instances that were launched by the fleet. Valid only when
     *             <b>Type</b> is set to <code>instant</code>.</p>
     */
    Instances?: CreateFleetInstance[];
}
export declare namespace CreateFleetResult {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: CreateFleetResult) => any;
}
export declare type LogDestinationType = "cloud-watch-logs" | "s3";
export declare type FlowLogsResourceType = "NetworkInterface" | "Subnet" | "VPC";
export declare type TrafficType = "ACCEPT" | "ALL" | "REJECT";
export interface CreateFlowLogsRequest {
    /**
     * <p>Checks whether you have the required permissions for the action, without actually making the request,
     *    and provides an error response. If you have the required permissions, the error response is <code>DryRunOperation</code>.
     *    Otherwise, it is <code>UnauthorizedOperation</code>.</p>
     */
    DryRun?: boolean;
    /**
     * <p>Unique, case-sensitive identifier that you provide to ensure the idempotency of the
     *             request. For more information, see <a href="https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/Run_Instance_Idempotency.html">How to Ensure
     *                 Idempotency</a>.</p>
     */
    ClientToken?: string;
    /**
     * <p>The ARN for the IAM role that permits Amazon EC2 to publish flow logs to a CloudWatch Logs log group
     *             in your account.</p>
     *         <p>If you specify <code>LogDestinationType</code> as <code>s3</code>, do not specify
     *             <code>DeliverLogsPermissionArn</code> or <code>LogGroupName</code>.</p>
     */
    DeliverLogsPermissionArn?: string;
    /**
     * <p>The name of a new or existing CloudWatch Logs log group where Amazon EC2 publishes your flow logs.</p>
     *         <p>If you specify <code>LogDestinationType</code> as <code>s3</code>, do not specify
     *             <code>DeliverLogsPermissionArn</code> or <code>LogGroupName</code>.</p>
     */
    LogGroupName?: string;
    /**
     * <p>The ID of the subnet, network interface, or VPC for which you want to create a flow log.</p>
     *         <p>Constraints: Maximum of 1000 resources</p>
     */
    ResourceIds: string[] | undefined;
    /**
     * <p>The type of resource for which to create the flow log. For example, if you specified a VPC ID for
     *             the <code>ResourceId</code> property, specify <code>VPC</code> for this property.</p>
     */
    ResourceType: FlowLogsResourceType | string | undefined;
    /**
     * <p>The type of traffic to log. You can log traffic that the resource accepts or rejects, or all traffic.</p>
     */
    TrafficType: TrafficType | string | undefined;
    /**
     * <p>Specifies the type of destination to which the flow log data is to be published. Flow log data can be
     *             published to CloudWatch Logs or Amazon S3. To publish flow log data to CloudWatch Logs, specify <code>cloud-watch-logs</code>. To
     *             publish flow log data to Amazon S3, specify <code>s3</code>.</p>
     *         <p>If you specify <code>LogDestinationType</code> as <code>s3</code>, do not specify
     *             <code>DeliverLogsPermissionArn</code> or <code>LogGroupName</code>.</p>
     *         <p>Default: <code>cloud-watch-logs</code>
     *          </p>
     */
    LogDestinationType?: LogDestinationType | string;
    /**
     * <p>Specifies the destination to which the flow log data is to be published. Flow log data can be published
     *             to a CloudWatch Logs log group or an Amazon S3 bucket. The value specified for this parameter depends on the value specified
     *             for <code>LogDestinationType</code>.</p>
     *         <p>If <code>LogDestinationType</code> is not specified or <code>cloud-watch-logs</code>,
     *             specify the Amazon Resource Name (ARN) of the CloudWatch Logs log group. For example, to publish
     *             to a log group called <code>my-logs</code>, specify
     *             <code>arn:aws:logs:us-east-1:123456789012:log-group:my-logs</code>. Alternatively,
     *             use <code>LogGroupName</code> instead.</p>
     *         <p>If LogDestinationType is <code>s3</code>, specify the ARN of the Amazon S3 bucket. You can also specify a
     *             subfolder in the bucket. To specify a subfolder in the bucket, use the following  ARN format:
     *             <code>bucket_ARN/subfolder_name/</code>. For example, to specify a subfolder named <code>my-logs</code> in a
     *             bucket named <code>my-bucket</code>, use the following ARN: <code>arn:aws:s3:::my-bucket/my-logs/</code>. You
     *             cannot use <code>AWSLogs</code> as a subfolder name. This is a reserved term.</p>
     */
    LogDestination?: string;
    /**
     * <p>The fields to include in the flow log record, in the order in which they should
     *             appear. For a list of available fields, see <a href="https://docs.aws.amazon.com/vpc/latest/userguide/flow-logs.html#flow-log-records">Flow Log Records</a>. If you
     *             omit this parameter, the flow log is created using the default format. If you specify this parameter, you must specify at least one field.</p>
     *         <p>Specify the fields using the <code>${field-id}</code> format, separated by spaces. For
     *             the AWS CLI, use single quotation marks (' ') to surround the parameter value.</p>
     */
    LogFormat?: string;
    /**
     * <p>The tags to apply to the flow logs.</p>
     */
    TagSpecifications?: TagSpecification[];
    /**
     * <p>The maximum interval of time during which a flow of packets is captured and aggregated into a flow log record. You can specify 60 seconds (1 minute) or 600 seconds (10 minutes).</p>
     *         <p>When a network interface is attached to a <a href="https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/instance-types.html#ec2-nitro-instances">Nitro-based
     *                 instance</a>, the aggregation interval is always 60 seconds or less, regardless
     *             of the value that you specify.</p>
     *         <p>Default: 600</p>
     */
    MaxAggregationInterval?: number;
}
export declare namespace CreateFlowLogsRequest {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: CreateFlowLogsRequest) => any;
}
export interface CreateFlowLogsResult {
    /**
     * <p>Unique, case-sensitive identifier that you provide to ensure the idempotency of the
     *             request.</p>
     */
    ClientToken?: string;
    /**
     * <p>The IDs of the flow logs.</p>
     */
    FlowLogIds?: string[];
    /**
     * <p>Information about the flow logs that could not be created successfully.</p>
     */
    Unsuccessful?: UnsuccessfulItem[];
}
export declare namespace CreateFlowLogsResult {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: CreateFlowLogsResult) => any;
}
/**
 * <p>Describes a storage location in Amazon S3.</p>
 */
export interface StorageLocation {
    /**
     * <p>The name of the S3 bucket.</p>
     */
    Bucket?: string;
    /**
     * <p>The key.</p>
     */
    Key?: string;
}
export declare namespace StorageLocation {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: StorageLocation) => any;
}
export interface CreateFpgaImageRequest {
    /**
     * <p>Checks whether you have the required permissions for the action, without actually making the request,
     *    and provides an error response. If you have the required permissions, the error response is <code>DryRunOperation</code>.
     *    Otherwise, it is <code>UnauthorizedOperation</code>.</p>
     */
    DryRun?: boolean;
    /**
     * <p>The location of the encrypted design checkpoint in Amazon S3. The input must be a tarball.</p>
     */
    InputStorageLocation: StorageLocation | undefined;
    /**
     * <p>The location in Amazon S3 for the output logs.</p>
     */
    LogsStorageLocation?: StorageLocation;
    /**
     * <p>A description for the AFI.</p>
     */
    Description?: string;
    /**
     * <p>A name for the AFI.</p>
     */
    Name?: string;
    /**
     * <p>Unique, case-sensitive identifier that you provide to ensure the idempotency of the request.
     *          For more information, see <a href="https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/Run_Instance_Idempotency.html">Ensuring Idempotency</a>.</p>
     */
    ClientToken?: string;
    /**
     * <p>The tags to apply to the FPGA image during creation.</p>
     */
    TagSpecifications?: TagSpecification[];
}
export declare namespace CreateFpgaImageRequest {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: CreateFpgaImageRequest) => any;
}
export interface CreateFpgaImageResult {
    /**
     * <p>The FPGA image identifier (AFI ID).</p>
     */
    FpgaImageId?: string;
    /**
     * <p>The global FPGA image identifier (AGFI ID).</p>
     */
    FpgaImageGlobalId?: string;
}
export declare namespace CreateFpgaImageResult {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: CreateFpgaImageResult) => any;
}
export declare type VolumeType = "gp2" | "gp3" | "io1" | "io2" | "sc1" | "st1" | "standard";
/**
 * <p>Describes a block device for an EBS volume.</p>
 */
export interface EbsBlockDevice {
    /**
     * <p>Indicates whether the EBS volume is deleted on instance termination. For more
     *             information, see <a href="https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/terminating-instances.html#preserving-volumes-on-termination">Preserving Amazon EBS volumes on instance termination</a> in the
     *             <i>Amazon EC2 User Guide</i>.</p>
     */
    DeleteOnTermination?: boolean;
    /**
     * <p>The number of I/O operations per second (IOPS). For <code>gp3</code>, <code>io1</code>, and <code>io2</code> volumes, this
     *             represents the number of IOPS that are provisioned for the volume. For <code>gp2</code> volumes, this
     *             represents the baseline performance of the volume and the rate at which the volume accumulates
     *             I/O credits for bursting.</p>
     *         <p>The following are the supported values for each volume type:</p>
     *         <ul>
     *             <li>
     *                 <p>
     *                   <code>gp3</code>: 3,000-16,000 IOPS</p>
     *             </li>
     *             <li>
     *                 <p>
     *                   <code>io1</code>: 100-64,000 IOPS</p>
     *             </li>
     *             <li>
     *                 <p>
     *                   <code>io2</code>: 100-64,000 IOPS</p>
     *             </li>
     *          </ul>
     *         <p>For <code>io1</code> and <code>io2</code> volumes, we guarantee 64,000 IOPS only for
     *             <a href="https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/instance-types.html#ec2-nitro-instances">Instances built on the Nitro System</a>. Other instance families guarantee performance
     *             up to 32,000 IOPS.</p>
     *         <p>This parameter is required for <code>io1</code> and <code>io2</code> volumes.
     *             The default for <code>gp3</code> volumes is 3,000 IOPS.
     *             This parameter is not supported for <code>gp2</code>, <code>st1</code>, <code>sc1</code>, or <code>standard</code> volumes.</p>
     */
    Iops?: number;
    /**
     * <p>The ID of the snapshot.</p>
     */
    SnapshotId?: string;
    /**
     * <p>The size of the volume, in GiBs. You must specify either a snapshot ID or a volume size.
     *             If you specify a snapshot, the default is the snapshot size. You can specify a volume
     *             size that is equal to or larger than the snapshot size.</p>
     *         <p>The following are the supported volumes sizes for each volume type:</p>
     *         <ul>
     *             <li>
     *                <p>
     *                   <code>gp2</code> and <code>gp3</code>:1-16,384</p>
     *             </li>
     *             <li>
     *                <p>
     *                   <code>io1</code> and <code>io2</code>: 4-16,384</p>
     *             </li>
     *             <li>
     *                <p>
     *                   <code>st1</code> and <code>sc1</code>: 125-16,384</p>
     *             </li>
     *             <li>
     *                <p>
     *                   <code>standard</code>: 1-1,024</p>
     *             </li>
     *          </ul>
     */
    VolumeSize?: number;
    /**
     * <p>The volume type. For more information, see <a href="https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/EBSVolumeTypes.html">Amazon EBS volume types</a> in the
     *             <i>Amazon EC2 User Guide</i>. If the volume type is <code>io1</code> or <code>io2</code>,
     *             you must specify the IOPS that the volume supports.</p>
     */
    VolumeType?: VolumeType | string;
    /**
     * <p>Identifier (key ID, key alias, ID ARN, or alias ARN) for a customer managed CMK under
     *             which the EBS volume is encrypted.</p>
     *         <p>This parameter is only supported on <code>BlockDeviceMapping</code> objects called by
     *                 <a href="https://docs.aws.amazon.com/AWSEC2/latest/APIReference/API_RunInstances.html">RunInstances</a>, <a href="https://docs.aws.amazon.com/AWSEC2/latest/APIReference/API_RequestSpotFleet.html">RequestSpotFleet</a>,
     *             and <a href="https://docs.aws.amazon.com/AWSEC2/latest/APIReference/API_RequestSpotInstances.html">RequestSpotInstances</a>.</p>
     */
    KmsKeyId?: string;
    /**
     * <p>The throughput that the volume supports, in MiB/s.</p>
     *     	    <p>This parameter is valid only for <code>gp3</code> volumes.</p>
     *     	    <p>Valid Range: Minimum value of 125. Maximum value of 1000.</p>
     */
    Throughput?: number;
    /**
     * <p>The ARN of the Outpost on which the snapshot is stored.</p>
     */
    OutpostArn?: string;
    /**
     * <p>Indicates whether the encryption state of an EBS volume is changed while being
     *             restored from a backing snapshot.
     *             The effect of setting the encryption state to <code>true</code> depends on
     * the volume origin (new or from a snapshot), starting encryption state, ownership, and whether encryption by default is enabled.
     *             For more information, see <a href="https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/EBSEncryption.html#encryption-parameters">Amazon EBS encryption</a>
     *             in the <i>Amazon EC2 User Guide</i>.</p>
     *         <p>In no case can you remove encryption from an encrypted volume.</p>
     *         <p>Encrypted volumes can only be attached to instances that support Amazon EBS
     *             encryption. For more information, see <a href="https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/EBSEncryption.html#EBSEncryption_supported_instances">Supported instance types</a>.</p>
     *         <p>This parameter is not returned by .</p>
     */
    Encrypted?: boolean;
}
export declare namespace EbsBlockDevice {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: EbsBlockDevice) => any;
}
/**
 * <p>Describes a block device mapping.</p>
 */
export interface BlockDeviceMapping {
    /**
     * <p>The device name (for example, <code>/dev/sdh</code> or <code>xvdh</code>).</p>
     */
    DeviceName?: string;
    /**
     * <p>The virtual device name (<code>ephemeral</code>N). Instance store volumes are numbered
     *             starting from 0. An instance type with 2 available instance store volumes can specify
     *             mappings for <code>ephemeral0</code> and <code>ephemeral1</code>. The number of
     *             available instance store volumes depends on the instance type. After you connect to the
     *             instance, you must mount the volume.</p>
     *         <p>NVMe instance store volumes are automatically enumerated and assigned a device name.
     *             Including them in your block device mapping has no effect.</p>
     *         <p>Constraints: For M3 instances, you must specify instance store volumes in the block
     *             device mapping for the instance. When you launch an M3 instance, we ignore any instance
     *             store volumes specified in the block device mapping for the AMI.</p>
     */
    VirtualName?: string;
    /**
     * <p>Parameters used to automatically set up EBS volumes when the instance is
     *             launched.</p>
     */
    Ebs?: EbsBlockDevice;
    /**
     * <p>To omit the device from the block device mapping, specify an empty string.</p>
     */
    NoDevice?: string;
}
export declare namespace BlockDeviceMapping {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: BlockDeviceMapping) => any;
}
export interface CreateImageRequest {
    /**
     * <p>The block device mappings. This parameter cannot be used to modify the encryption
     *    		status of existing volumes or snapshots. To create an AMI with encrypted snapshots,
     *    		use the <a>CopyImage</a> action.</p>
     */
    BlockDeviceMappings?: BlockDeviceMapping[];
    /**
     * <p>A description for the new image.</p>
     */
    Description?: string;
    /**
     * <p>Checks whether you have the required permissions for the action, without actually making the request,
     *        and provides an error response. If you have the required permissions, the error response is <code>DryRunOperation</code>.
     *        Otherwise, it is <code>UnauthorizedOperation</code>.</p>
     */
    DryRun?: boolean;
    /**
     * <p>The ID of the instance.</p>
     */
    InstanceId: string | undefined;
    /**
     * <p>A name for the new image.</p>
     *          <p>Constraints: 3-128 alphanumeric characters, parentheses (()), square brackets ([]), spaces ( ), periods (.), slashes (/), dashes (-), single quotes ('), at-signs (@), or underscores(_)</p>
     */
    Name: string | undefined;
    /**
     * <p>By default, Amazon EC2 attempts to shut down and reboot the instance before creating the image. If the <code>No Reboot</code> option is set, Amazon EC2 doesn't shut down the instance before creating the image. When this option is used, file system integrity on the created image can't be guaranteed.</p>
     */
    NoReboot?: boolean;
    /**
     * <p>The tags to apply to the AMI and snapshots on creation. You can tag the AMI, the
     *       snapshots, or both.</p>
     *          <ul>
     *             <li>
     *                <p>To tag the AMI, the value for <code>ResourceType</code> must be
     *           <code>image</code>.</p>
     *             </li>
     *             <li>
     *                <p>To tag the snapshots that are created of the root volume and of other EBS volumes that
     *           are attached to the instance, the value for <code>ResourceType</code> must be
     *             <code>snapshot</code>. The same tag is applied to all of the snapshots that are
     *           created.</p>
     *             </li>
     *          </ul>
     *          <p>If you specify other values for <code>ResourceType</code>, the request fails.</p>
     *          <p>To tag an AMI or snapshot after it has been created, see <a href="https://docs.aws.amazon.com/AWSEC2/latest/APIReference/API_CreateTags.html">CreateTags</a>. </p>
     */
    TagSpecifications?: TagSpecification[];
}
export declare namespace CreateImageRequest {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: CreateImageRequest) => any;
}
export interface CreateImageResult {
    /**
     * <p>The ID of the new AMI.</p>
     */
    ImageId?: string;
}
export declare namespace CreateImageResult {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: CreateImageResult) => any;
}
export declare type ContainerFormat = "ova";
export declare type DiskImageFormat = "RAW" | "VHD" | "VMDK";
/**
 * <p>Describes an export instance task.</p>
 */
export interface ExportToS3TaskSpecification {
    /**
     * <p>The container format used to combine disk images with metadata (such as OVF). If absent, only the disk image is
     *    exported.</p>
     */
    ContainerFormat?: ContainerFormat | string;
    /**
     * <p>The format for the exported image.</p>
     */
    DiskImageFormat?: DiskImageFormat | string;
    /**
     * <p>The Amazon S3 bucket for the destination image. The destination bucket must exist and grant
     *    WRITE and READ_ACP permissions to the AWS account
     *    <code>vm-import-export@amazon.com</code>.</p>
     */
    S3Bucket?: string;
    /**
     * <p>The image is written to a single object in the Amazon S3 bucket at the S3 key s3prefix +
     *    exportTaskId + '.' + diskImageFormat.</p>
     */
    S3Prefix?: string;
}
export declare namespace ExportToS3TaskSpecification {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: ExportToS3TaskSpecification) => any;
}
export declare type ExportEnvironment = "citrix" | "microsoft" | "vmware";
export interface CreateInstanceExportTaskRequest {
    /**
     * <p>A description for the conversion task or the resource being exported. The maximum length is 255 characters.</p>
     */
    Description?: string;
    /**
     * <p>The format and location for an export instance task.</p>
     */
    ExportToS3Task: ExportToS3TaskSpecification | undefined;
    /**
     * <p>The ID of the instance.</p>
     */
    InstanceId: string | undefined;
    /**
     * <p>The target virtualization environment.</p>
     */
    TargetEnvironment: ExportEnvironment | string | undefined;
    /**
     * <p>The tags to apply to the export instance task during creation.</p>
     */
    TagSpecifications?: TagSpecification[];
}
export declare namespace CreateInstanceExportTaskRequest {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: CreateInstanceExportTaskRequest) => any;
}
/**
 * <p>Describes the format and location for the export task.</p>
 */
export interface ExportToS3Task {
    /**
     * <p>The container format used to combine disk images with metadata (such as OVF). If absent, only the disk image is
     *    exported.</p>
     */
    ContainerFormat?: ContainerFormat | string;
    /**
     * <p>The format for the exported image.</p>
     */
    DiskImageFormat?: DiskImageFormat | string;
    /**
     * <p>The Amazon S3 bucket for the destination image. The destination bucket must exist and grant
     *    WRITE and READ_ACP permissions to the AWS account
     *    <code>vm-import-export@amazon.com</code>.</p>
     */
    S3Bucket?: string;
    /**
     * <p>The encryption key for your S3 bucket.</p>
     */
    S3Key?: string;
}
export declare namespace ExportToS3Task {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: ExportToS3Task) => any;
}
/**
 * <p>Describes an instance to export.</p>
 */
export interface InstanceExportDetails {
    /**
     * <p>The ID of the resource being exported.</p>
     */
    InstanceId?: string;
    /**
     * <p>The target virtualization environment.</p>
     */
    TargetEnvironment?: ExportEnvironment | string;
}
export declare namespace InstanceExportDetails {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: InstanceExportDetails) => any;
}
export declare type ExportTaskState = "active" | "cancelled" | "cancelling" | "completed";
/**
 * <p>Describes an export instance task.</p>
 */
export interface ExportTask {
    /**
     * <p>A description of the resource being exported.</p>
     */
    Description?: string;
    /**
     * <p>The ID of the export task.</p>
     */
    ExportTaskId?: string;
    /**
     * <p>Information about the export task.</p>
     */
    ExportToS3Task?: ExportToS3Task;
    /**
     * <p>Information about the instance to export.</p>
     */
    InstanceExportDetails?: InstanceExportDetails;
    /**
     * <p>The state of the export task.</p>
     */
    State?: ExportTaskState | string;
    /**
     * <p>The status message related to the export task.</p>
     */
    StatusMessage?: string;
    /**
     * <p>The tags for the export task.</p>
     */
    Tags?: Tag[];
}
export declare namespace ExportTask {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: ExportTask) => any;
}
export interface CreateInstanceExportTaskResult {
    /**
     * <p>Information about the export instance task.</p>
     */
    ExportTask?: ExportTask;
}
export declare namespace CreateInstanceExportTaskResult {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: CreateInstanceExportTaskResult) => any;
}
export interface CreateInternetGatewayRequest {
    /**
     * <p>The tags to assign to the internet gateway.</p>
     */
    TagSpecifications?: TagSpecification[];
    /**
     * <p>Checks whether you have the required permissions for the action, without actually making the request,
     *    and provides an error response. If you have the required permissions, the error response is <code>DryRunOperation</code>.
     *    Otherwise, it is <code>UnauthorizedOperation</code>.</p>
     */
    DryRun?: boolean;
}
export declare namespace CreateInternetGatewayRequest {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: CreateInternetGatewayRequest) => any;
}
/**
 * <p>Describes an internet gateway.</p>
 */
export interface InternetGateway {
    /**
     * <p>Any VPCs attached to the internet gateway.</p>
     */
    Attachments?: InternetGatewayAttachment[];
    /**
     * <p>The ID of the internet gateway.</p>
     */
    InternetGatewayId?: string;
    /**
     * <p>The ID of the AWS account that owns the internet gateway.</p>
     */
    OwnerId?: string;
    /**
     * <p>Any tags assigned to the internet gateway.</p>
     */
    Tags?: Tag[];
}
export declare namespace InternetGateway {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: InternetGateway) => any;
}
export interface CreateInternetGatewayResult {
    /**
     * <p>Information about the internet gateway.</p>
     */
    InternetGateway?: InternetGateway;
}
export declare namespace CreateInternetGatewayResult {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: CreateInternetGatewayResult) => any;
}
export interface CreateKeyPairRequest {
    /**
     * <p>A unique name for the key pair.</p>
     * 	        <p>Constraints: Up to 255 ASCII characters</p>
     */
    KeyName: string | undefined;
    /**
     * <p>Checks whether you have the required permissions for the action, without actually making the request,
     *    and provides an error response. If you have the required permissions, the error response is <code>DryRunOperation</code>.
     *    Otherwise, it is <code>UnauthorizedOperation</code>.</p>
     */
    DryRun?: boolean;
    /**
     * <p>The tags to apply to the new key pair.</p>
     */
    TagSpecifications?: TagSpecification[];
}
export declare namespace CreateKeyPairRequest {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: CreateKeyPairRequest) => any;
}
/**
 * <p>Describes a key pair.</p>
 */
export interface KeyPair {
    /**
     * <p>The SHA-1 digest of the DER encoded private key.</p>
     */
    KeyFingerprint?: string;
    /**
     * <p>An unencrypted PEM encoded RSA private key.</p>
     */
    KeyMaterial?: string;
    /**
     * <p>The name of the key pair.</p>
     */
    KeyName?: string;
    /**
     * <p>The ID of the key pair.</p>
     */
    KeyPairId?: string;
    /**
     * <p>Any tags applied to the key pair.</p>
     */
    Tags?: Tag[];
}
export declare namespace KeyPair {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: KeyPair) => any;
}
/**
 * <p>The parameters for a block device for an EBS volume.</p>
 */
export interface LaunchTemplateEbsBlockDeviceRequest {
    /**
     * <p>Indicates whether the EBS volume is encrypted. Encrypted volumes can only be attached to instances that support Amazon EBS encryption.
     *             If you are creating a volume from a snapshot, you can't specify an encryption value.</p>
     */
    Encrypted?: boolean;
    /**
     * <p>Indicates whether the EBS volume is deleted on instance termination.</p>
     */
    DeleteOnTermination?: boolean;
    /**
     * <p>The number of I/O operations per second (IOPS). For <code>gp3</code>, <code>io1</code>, and <code>io2</code>
     *             volumes, this represents the number of IOPS that are provisioned for the volume. For <code>gp2</code> volumes,
     *             this represents the baseline performance of the volume and the rate at which the volume accumulates I/O credits
     *             for bursting.</p>
     *         <p>The following are the supported values for each volume type:</p>
     *         <ul>
     *             <li>
     *                 <p>
     *                   <code>gp3</code>: 3,000-16,000 IOPS</p>
     *             </li>
     *             <li>
     *                 <p>
     *                   <code>io1</code>: 100-64,000 IOPS</p>
     *             </li>
     *             <li>
     *                 <p>
     *                   <code>io2</code>: 100-64,000 IOPS</p>
     *             </li>
     *          </ul>
     *         <p>For <code>io1</code> and <code>io2</code> volumes, we guarantee 64,000 IOPS
     *             only for <a href="https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/instance-types.html#ec2-nitro-instances">Instances built on the Nitro System</a>. Other instance families guarantee performance up
     *             to 32,000 IOPS.</p>
     *         <p>This parameter is supported for <code>io1</code>, <code>io2</code>, and <code>gp3</code> volumes only. This parameter is not supported for
     *             <code>gp2</code>, <code>st1</code>, <code>sc1</code>, or <code>standard</code> volumes.</p>
     */
    Iops?: number;
    /**
     * <p>The ARN of the symmetric AWS Key Management Service (AWS KMS) CMK used for
     *             encryption.</p>
     */
    KmsKeyId?: string;
    /**
     * <p>The ID of the snapshot.</p>
     */
    SnapshotId?: string;
    /**
     * <p>The size of the volume, in GiBs. You must specify either a snapshot ID or a volume size. The following
     *             are the supported volumes sizes for each volume type:</p>
     *         <ul>
     *             <li>
     *                <p>
     *                   <code>gp2</code> and <code>gp3</code>: 1-16,384</p>
     *             </li>
     *             <li>
     *                <p>
     *                   <code>io1</code> and <code>io2</code>: 4-16,384</p>
     *             </li>
     *             <li>
     *                <p>
     *                   <code>st1</code> and <code>sc1</code>: 125-16,384</p>
     *             </li>
     *             <li>
     *                <p>
     *                   <code>standard</code>: 1-1,024</p>
     *             </li>
     *          </ul>
     */
    VolumeSize?: number;
    /**
     * <p>The volume type. For more information, see <a href="https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/EBSVolumeTypes.html">Amazon EBS volume types</a> in the
     *             <i>Amazon Elastic Compute Cloud User Guide</i>.</p>
     */
    VolumeType?: VolumeType | string;
    /**
     * <p>The throughput to provision for a <code>gp3</code> volume, with a maximum of 1,000 MiB/s.</p>
     *     	    <p>Valid Range: Minimum value of 125. Maximum value of 1000.</p>
     */
    Throughput?: number;
}
export declare namespace LaunchTemplateEbsBlockDeviceRequest {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: LaunchTemplateEbsBlockDeviceRequest) => any;
}
/**
 * <p>Describes a block device mapping.</p>
 */
export interface LaunchTemplateBlockDeviceMappingRequest {
    /**
     * <p>The device name (for example, /dev/sdh or xvdh).</p>
     */
    DeviceName?: string;
    /**
     * <p>The virtual device name (ephemeralN). Instance store volumes are numbered starting from 0.
     *             An instance type with 2 available instance store volumes can specify mappings for ephemeral0
     *             and ephemeral1. The number of available instance store volumes depends on the instance type.
     *             After you connect to the instance, you must mount the volume.</p>
     */
    VirtualName?: string;
    /**
     * <p>Parameters used to automatically set up EBS volumes when the instance is launched.</p>
     */
    Ebs?: LaunchTemplateEbsBlockDeviceRequest;
    /**
     * <p>To omit the device from the block device mapping, specify an empty string.</p>
     */
    NoDevice?: string;
}
export declare namespace LaunchTemplateBlockDeviceMappingRequest {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: LaunchTemplateBlockDeviceMappingRequest) => any;
}
export declare type CapacityReservationPreference = "none" | "open";
/**
 * <p>Describes a target Capacity Reservation or Capacity Reservation group.</p>
 */
export interface CapacityReservationTarget {
    /**
     * <p>The ID of the Capacity Reservation in which to run the instance.</p>
     */
    CapacityReservationId?: string;
    /**
     * <p>The ARN of the Capacity Reservation resource group in which to run the instance.</p>
     */
    CapacityReservationResourceGroupArn?: string;
}
export declare namespace CapacityReservationTarget {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: CapacityReservationTarget) => any;
}
/**
 * <p>Describes an instance's Capacity Reservation targeting option. You can specify only one option at a time. Use the
 * 			<code>CapacityReservationPreference</code> parameter to configure the instance to run in On-Demand capacity or
 * 			to run in any <code>open</code> Capacity Reservation that has matching attributes (instance type, platform, Availability Zone).
 * 			Use the <code>CapacityReservationTarget</code> parameter to explicitly target a specific Capacity Reservation or
 * 			a Capacity Reservation group.</p>
 */
export interface LaunchTemplateCapacityReservationSpecificationRequest {
    /**
     * <p>Indicates the instance's Capacity Reservation preferences. Possible preferences include:</p>
     * 		       <ul>
     *             <li>
     *                <p>
     *                   <code>open</code> - The instance can run in any <code>open</code> Capacity Reservation that has matching attributes
     * 				(instance type, platform, Availability Zone).</p>
     *             </li>
     *             <li>
     *                <p>
     *                   <code>none</code> - The instance avoids running in a Capacity Reservation even if one is available. The instance
     * 				runs in On-Demand capacity.</p>
     *             </li>
     *          </ul>
     */
    CapacityReservationPreference?: CapacityReservationPreference | string;
    /**
     * <p>Information about the target Capacity Reservation or Capacity Reservation group.</p>
     */
    CapacityReservationTarget?: CapacityReservationTarget;
}
export declare namespace LaunchTemplateCapacityReservationSpecificationRequest {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: LaunchTemplateCapacityReservationSpecificationRequest) => any;
}
/**
 * <p>The CPU options for the instance. Both the core count and threads per core
 * 			must be specified in the request.</p>
 */
export interface LaunchTemplateCpuOptionsRequest {
    /**
     * <p>The number of CPU cores for the instance.</p>
     */
    CoreCount?: number;
    /**
     * <p>The number of threads per CPU core. To disable multithreading
     * 			for the instance, specify a value of 1. Otherwise, specify the default value of 2.</p>
     */
    ThreadsPerCore?: number;
}
export declare namespace LaunchTemplateCpuOptionsRequest {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: LaunchTemplateCpuOptionsRequest) => any;
}
/**
 * <p>The credit option for CPU usage of a T2, T3, or T3a instance.</p>
 */
export interface CreditSpecificationRequest {
    /**
     * <p>The credit option for CPU usage of a T2, T3, or T3a instance. Valid values are
     *                 <code>standard</code> and <code>unlimited</code>.</p>
     */
    CpuCredits: string | undefined;
}
export declare namespace CreditSpecificationRequest {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: CreditSpecificationRequest) => any;
}
/**
 * <p>A specification for an Elastic Graphics accelerator.</p>
 */
export interface ElasticGpuSpecification {
    /**
     * <p>The type of Elastic Graphics accelerator. For more information about the values to specify for
     *             <code>Type</code>, see <a href="https://docs.aws.amazon.com/AWSEC2/latest/WindowsGuide/elastic-graphics.html#elastic-graphics-basics">Elastic Graphics Basics</a>, specifically the Elastic Graphics accelerator column, in the <i>Amazon Elastic Compute Cloud User Guide for Windows
     *                 Instances</i>.</p>
     */
    Type: string | undefined;
}
export declare namespace ElasticGpuSpecification {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: ElasticGpuSpecification) => any;
}
/**
 * <p>
 *             Describes an elastic inference accelerator.
 *         </p>
 */
export interface LaunchTemplateElasticInferenceAccelerator {
    /**
     * <p>
     *             The type of elastic inference accelerator. The possible values are eia1.medium, eia1.large, and eia1.xlarge.
     *         </p>
     */
    Type: string | undefined;
    /**
     * <p>
     *     		The number of elastic inference accelerators to attach to the instance.
     *     	</p>
     *     	    <p>Default: 1</p>
     */
    Count?: number;
}
export declare namespace LaunchTemplateElasticInferenceAccelerator {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: LaunchTemplateElasticInferenceAccelerator) => any;
}
/**
 * <p>Indicates whether the instance is enabled for AWS Nitro Enclaves. For more information,
 * 		see <a href="https://docs.aws.amazon.com/enclaves/latest/user/nitro-enclave.html">
 * 			What is AWS Nitro Enclaves?</a> in the <i>AWS Nitro Enclaves User Guide</i>.</p>
 */
export interface LaunchTemplateEnclaveOptionsRequest {
    /**
     * <p>To enable the instance for AWS Nitro Enclaves, set this parameter to <code>true</code>.</p>
     */
    Enabled?: boolean;
}
export declare namespace LaunchTemplateEnclaveOptionsRequest {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: LaunchTemplateEnclaveOptionsRequest) => any;
}
/**
 * <p>Indicates whether the instance is configured for hibernation. This parameter is valid only
 *             if the instance meets the <a href="https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/Hibernate.html#hibernating-prerequisites">hibernation
 *                 prerequisites</a>.</p>
 */
export interface LaunchTemplateHibernationOptionsRequest {
    /**
     * <p>If you set this parameter to <code>true</code>, the instance is enabled for hibernation.</p>
     *          <p>Default: <code>false</code>
     *          </p>
     */
    Configured?: boolean;
}
export declare namespace LaunchTemplateHibernationOptionsRequest {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: LaunchTemplateHibernationOptionsRequest) => any;
}
/**
 * <p>An IAM instance profile.</p>
 */
export interface LaunchTemplateIamInstanceProfileSpecificationRequest {
    /**
     * <p>The Amazon Resource Name (ARN) of the instance profile.</p>
     */
    Arn?: string;
    /**
     * <p>The name of the instance profile.</p>
     */
    Name?: string;
}
export declare namespace LaunchTemplateIamInstanceProfileSpecificationRequest {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: LaunchTemplateIamInstanceProfileSpecificationRequest) => any;
}
export declare type ShutdownBehavior = "stop" | "terminate";
export declare type MarketType = "spot";
export declare type InstanceInterruptionBehavior = "hibernate" | "stop" | "terminate";
export declare type SpotInstanceType = "one-time" | "persistent";
