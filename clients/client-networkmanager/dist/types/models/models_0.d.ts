import { SmithyException as __SmithyException } from "@aws-sdk/smithy-client";
import { MetadataBearer as $MetadataBearer } from "@aws-sdk/types";
/**
 * <p>You do not have sufficient access to perform this action.</p>
 */
export interface AccessDeniedException extends __SmithyException, $MetadataBearer {
    name: "AccessDeniedException";
    $fault: "client";
    Message: string | undefined;
}
export declare namespace AccessDeniedException {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: AccessDeniedException) => any;
}
export interface AssociateCustomerGatewayRequest {
    /**
     * <p>The Amazon Resource Name (ARN) of the customer gateway. For more information, see
     *                 <a href="https://docs.aws.amazon.com/IAM/latest/UserGuide/list_amazonec2.html#amazonec2-resources-for-iam-policies">Resources Defined by Amazon EC2</a>.</p>
     */
    CustomerGatewayArn: string | undefined;
    /**
     * <p>The ID of the global network.</p>
     */
    GlobalNetworkId: string | undefined;
    /**
     * <p>The ID of the device.</p>
     */
    DeviceId: string | undefined;
    /**
     * <p>The ID of the link.</p>
     */
    LinkId?: string;
}
export declare namespace AssociateCustomerGatewayRequest {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: AssociateCustomerGatewayRequest) => any;
}
export declare enum CustomerGatewayAssociationState {
    available = "AVAILABLE",
    deleted = "DELETED",
    deleting = "DELETING",
    pending = "PENDING"
}
/**
 * <p>Describes the association between a customer gateway, a device, and a link.</p>
 */
export interface CustomerGatewayAssociation {
    /**
     * <p>The Amazon Resource Name (ARN) of the customer gateway.</p>
     */
    CustomerGatewayArn?: string;
    /**
     * <p>The ID of the global network.</p>
     */
    GlobalNetworkId?: string;
    /**
     * <p>The ID of the device.</p>
     */
    DeviceId?: string;
    /**
     * <p>The ID of the link.</p>
     */
    LinkId?: string;
    /**
     * <p>The association state.</p>
     */
    State?: CustomerGatewayAssociationState | string;
}
export declare namespace CustomerGatewayAssociation {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: CustomerGatewayAssociation) => any;
}
export interface AssociateCustomerGatewayResponse {
    /**
     * <p>The customer gateway association.</p>
     */
    CustomerGatewayAssociation?: CustomerGatewayAssociation;
}
export declare namespace AssociateCustomerGatewayResponse {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: AssociateCustomerGatewayResponse) => any;
}
/**
 * <p>There was a conflict processing the request. Updating or deleting the resource can
 *             cause an inconsistent state.</p>
 */
export interface ConflictException extends __SmithyException, $MetadataBearer {
    name: "ConflictException";
    $fault: "client";
    Message: string | undefined;
    /**
     * <p>The ID of the resource.</p>
     */
    ResourceId: string | undefined;
    /**
     * <p>The resource type.</p>
     */
    ResourceType: string | undefined;
}
export declare namespace ConflictException {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: ConflictException) => any;
}
/**
 * <p>The request has failed due to an internal error.</p>
 */
export interface InternalServerException extends __SmithyException, $MetadataBearer {
    name: "InternalServerException";
    $fault: "server";
    Message: string | undefined;
    /**
     * <p>Indicates when to retry the request.</p>
     */
    RetryAfterSeconds?: number;
}
export declare namespace InternalServerException {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: InternalServerException) => any;
}
/**
 * <p>The specified resource could not be found.</p>
 */
export interface ResourceNotFoundException extends __SmithyException, $MetadataBearer {
    name: "ResourceNotFoundException";
    $fault: "client";
    Message: string | undefined;
    /**
     * <p>The ID of the resource.</p>
     */
    ResourceId: string | undefined;
    /**
     * <p>The resource type.</p>
     */
    ResourceType: string | undefined;
}
export declare namespace ResourceNotFoundException {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: ResourceNotFoundException) => any;
}
/**
 * <p>A service limit was exceeded.</p>
 */
export interface ServiceQuotaExceededException extends __SmithyException, $MetadataBearer {
    name: "ServiceQuotaExceededException";
    $fault: "client";
    /**
     * <p>The error message.</p>
     */
    Message: string | undefined;
    /**
     * <p>The ID of the resource.</p>
     */
    ResourceId?: string;
    /**
     * <p>The resource type.</p>
     */
    ResourceType?: string;
    /**
     * <p>The limit code.</p>
     */
    LimitCode: string | undefined;
    /**
     * <p>The service code.</p>
     */
    ServiceCode: string | undefined;
}
export declare namespace ServiceQuotaExceededException {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: ServiceQuotaExceededException) => any;
}
/**
 * <p>The request was denied due to request throttling.</p>
 */
export interface ThrottlingException extends __SmithyException, $MetadataBearer {
    name: "ThrottlingException";
    $fault: "client";
    Message: string | undefined;
    /**
     * <p>Indicates when to retry the request.</p>
     */
    RetryAfterSeconds?: number;
}
export declare namespace ThrottlingException {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: ThrottlingException) => any;
}
/**
 * <p>Describes a validation exception for a field.</p>
 */
export interface ValidationExceptionField {
    /**
     * <p>The name of the field.</p>
     */
    Name: string | undefined;
    /**
     * <p>The message for the field.</p>
     */
    Message: string | undefined;
}
export declare namespace ValidationExceptionField {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: ValidationExceptionField) => any;
}
export declare enum ValidationExceptionReason {
    CANNOT_PARSE = "CannotParse",
    FIELD_VALIDATION_FAILED = "FieldValidationFailed",
    OTHER = "Other",
    UNKNOWN_OPERATION = "UnknownOperation"
}
/**
 * <p>The input fails to satisfy the constraints.</p>
 */
export interface ValidationException extends __SmithyException, $MetadataBearer {
    name: "ValidationException";
    $fault: "client";
    Message: string | undefined;
    /**
     * <p>The reason for the error.</p>
     */
    Reason?: ValidationExceptionReason | string;
    /**
     * <p>The fields that caused the error, if applicable.</p>
     */
    Fields?: ValidationExceptionField[];
}
export declare namespace ValidationException {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: ValidationException) => any;
}
export interface AssociateLinkRequest {
    /**
     * <p>The ID of the global network.</p>
     */
    GlobalNetworkId: string | undefined;
    /**
     * <p>The ID of the device.</p>
     */
    DeviceId: string | undefined;
    /**
     * <p>The ID of the link.</p>
     */
    LinkId: string | undefined;
}
export declare namespace AssociateLinkRequest {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: AssociateLinkRequest) => any;
}
export declare enum LinkAssociationState {
    available = "AVAILABLE",
    deleted = "DELETED",
    deleting = "DELETING",
    pending = "PENDING"
}
/**
 * <p>Describes the association between a device and a link.</p>
 */
export interface LinkAssociation {
    /**
     * <p>The ID of the global network.</p>
     */
    GlobalNetworkId?: string;
    /**
     * <p>The device ID for the link association.</p>
     */
    DeviceId?: string;
    /**
     * <p>The ID of the link.</p>
     */
    LinkId?: string;
    /**
     * <p>The state of the association.</p>
     */
    LinkAssociationState?: LinkAssociationState | string;
}
export declare namespace LinkAssociation {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: LinkAssociation) => any;
}
export interface AssociateLinkResponse {
    /**
     * <p>The link association.</p>
     */
    LinkAssociation?: LinkAssociation;
}
export declare namespace AssociateLinkResponse {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: AssociateLinkResponse) => any;
}
export interface AssociateTransitGatewayConnectPeerRequest {
    /**
     * <p>The ID of the global network.</p>
     */
    GlobalNetworkId: string | undefined;
    /**
     * <p>The Amazon Resource Name (ARN) of the Connect peer.</p>
     */
    TransitGatewayConnectPeerArn: string | undefined;
    /**
     * <p>The ID of the device.</p>
     */
    DeviceId: string | undefined;
    /**
     * <p>The ID of the link.</p>
     */
    LinkId?: string;
}
export declare namespace AssociateTransitGatewayConnectPeerRequest {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: AssociateTransitGatewayConnectPeerRequest) => any;
}
export declare enum TransitGatewayConnectPeerAssociationState {
    available = "AVAILABLE",
    deleted = "DELETED",
    deleting = "DELETING",
    pending = "PENDING"
}
/**
 * <p>Describes a transit gateway Connect peer association.</p>
 */
export interface TransitGatewayConnectPeerAssociation {
    /**
     * <p>The Amazon Resource Name (ARN) of the transit gateway Connect peer.</p>
     */
    TransitGatewayConnectPeerArn?: string;
    /**
     * <p>The ID of the global network.</p>
     */
    GlobalNetworkId?: string;
    /**
     * <p>The ID of the device.</p>
     */
    DeviceId?: string;
    /**
     * <p>The ID of the link.</p>
     */
    LinkId?: string;
    /**
     * <p>The state of the association.</p>
     */
    State?: TransitGatewayConnectPeerAssociationState | string;
}
export declare namespace TransitGatewayConnectPeerAssociation {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: TransitGatewayConnectPeerAssociation) => any;
}
export interface AssociateTransitGatewayConnectPeerResponse {
    /**
     * <p>The transit gateway Connect peer association.</p>
     */
    TransitGatewayConnectPeerAssociation?: TransitGatewayConnectPeerAssociation;
}
export declare namespace AssociateTransitGatewayConnectPeerResponse {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: AssociateTransitGatewayConnectPeerResponse) => any;
}
/**
 * <p>Specifies a location in AWS.</p>
 */
export interface AWSLocation {
    /**
     * <p>The Zone the device is located in. This can be the ID of an Availability Zone, Local Zone, Wavelength Zone, or an Outpost.</p>
     */
    Zone?: string;
    /**
     * <p>The Amazon Resource Name (ARN) of the subnet the device is located in.</p>
     */
    SubnetArn?: string;
}
export declare namespace AWSLocation {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: AWSLocation) => any;
}
/**
 * <p>Describes bandwidth information.</p>
 */
export interface Bandwidth {
    /**
     * <p>Upload speed in Mbps.</p>
     */
    UploadSpeed?: number;
    /**
     * <p>Download speed in Mbps.</p>
     */
    DownloadSpeed?: number;
}
export declare namespace Bandwidth {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: Bandwidth) => any;
}
export declare enum ConnectionState {
    available = "AVAILABLE",
    deleting = "DELETING",
    pending = "PENDING",
    updating = "UPDATING"
}
/**
 * <p>Describes a tag.</p>
 */
export interface Tag {
    /**
     * <p>The tag key.</p>
     *         <p>Length Constraints: Maximum length of 128 characters.</p>
     */
    Key?: string;
    /**
     * <p>The tag value.</p>
     *         <p>Length Constraints: Maximum length of 256 characters.</p>
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
 * <p>Describes a connection.</p>
 */
export interface Connection {
    /**
     * <p>The ID of the connection.</p>
     */
    ConnectionId?: string;
    /**
     * <p>The Amazon Resource Name (ARN) of the connection.</p>
     */
    ConnectionArn?: string;
    /**
     * <p>The ID of the global network.</p>
     */
    GlobalNetworkId?: string;
    /**
     * <p>The ID of the first device in the connection.</p>
     */
    DeviceId?: string;
    /**
     * <p>The ID of the second device in the connection.</p>
     */
    ConnectedDeviceId?: string;
    /**
     * <p>The ID of the link for the first device in the connection.</p>
     */
    LinkId?: string;
    /**
     * <p>The ID of the link for the second device in the connection.</p>
     */
    ConnectedLinkId?: string;
    /**
     * <p>The description of the connection.</p>
     */
    Description?: string;
    /**
     * <p>The date and time that the connection was created.</p>
     */
    CreatedAt?: Date;
    /**
     * <p>The state of the connection.</p>
     */
    State?: ConnectionState | string;
    /**
     * <p>The tags for the connection.</p>
     */
    Tags?: Tag[];
}
export declare namespace Connection {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: Connection) => any;
}
export interface CreateConnectionRequest {
    /**
     * <p>The ID of the global network.</p>
     */
    GlobalNetworkId: string | undefined;
    /**
     * <p>The ID of the first device in the connection.</p>
     */
    DeviceId: string | undefined;
    /**
     * <p>The ID of the second device in the connection.</p>
     */
    ConnectedDeviceId: string | undefined;
    /**
     * <p>The ID of the link for the first device.</p>
     */
    LinkId?: string;
    /**
     * <p>The ID of the link for the second device.</p>
     */
    ConnectedLinkId?: string;
    /**
     * <p>A description of the connection.</p>
     *         <p>Length Constraints: Maximum length of 256 characters.</p>
     */
    Description?: string;
    /**
     * <p>The tags to apply to the resource during creation.</p>
     */
    Tags?: Tag[];
}
export declare namespace CreateConnectionRequest {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: CreateConnectionRequest) => any;
}
export interface CreateConnectionResponse {
    /**
     * <p>Information about the connection.</p>
     */
    Connection?: Connection;
}
export declare namespace CreateConnectionResponse {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: CreateConnectionResponse) => any;
}
/**
 * <p>Describes a location.</p>
 */
export interface Location {
    /**
     * <p>The physical address.</p>
     */
    Address?: string;
    /**
     * <p>The latitude.</p>
     */
    Latitude?: string;
    /**
     * <p>The longitude.</p>
     */
    Longitude?: string;
}
export declare namespace Location {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: Location) => any;
}
export interface CreateDeviceRequest {
    /**
     * <p>The ID of the global network.</p>
     */
    GlobalNetworkId: string | undefined;
    /**
     * <p>The AWS location of the device.</p>
     */
    AWSLocation?: AWSLocation;
    /**
     * <p>A description of the device.</p>
     *         <p>Length Constraints: Maximum length of 256 characters.</p>
     */
    Description?: string;
    /**
     * <p>The type of the device.</p>
     */
    Type?: string;
    /**
     * <p>The vendor of the device.</p>
     *         <p>Length Constraints: Maximum length of 128 characters.</p>
     */
    Vendor?: string;
    /**
     * <p>The model of the device.</p>
     *         <p>Length Constraints: Maximum length of 128 characters.</p>
     */
    Model?: string;
    /**
     * <p>The serial number of the device.</p>
     *         <p>Length Constraints: Maximum length of 128 characters.</p>
     */
    SerialNumber?: string;
    /**
     * <p>The location of the device.</p>
     */
    Location?: Location;
    /**
     * <p>The ID of the site.</p>
     */
    SiteId?: string;
    /**
     * <p>The tags to apply to the resource during creation.</p>
     */
    Tags?: Tag[];
}
export declare namespace CreateDeviceRequest {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: CreateDeviceRequest) => any;
}
export declare enum DeviceState {
    available = "AVAILABLE",
    deleting = "DELETING",
    pending = "PENDING",
    updating = "UPDATING"
}
/**
 * <p>Describes a device.</p>
 */
export interface Device {
    /**
     * <p>The ID of the device.</p>
     */
    DeviceId?: string;
    /**
     * <p>The Amazon Resource Name (ARN) of the device.</p>
     */
    DeviceArn?: string;
    /**
     * <p>The ID of the global network.</p>
     */
    GlobalNetworkId?: string;
    /**
     * <p>The AWS location of the device.</p>
     */
    AWSLocation?: AWSLocation;
    /**
     * <p>The description of the device.</p>
     */
    Description?: string;
    /**
     * <p>The device type.</p>
     */
    Type?: string;
    /**
     * <p>The device vendor.</p>
     */
    Vendor?: string;
    /**
     * <p>The device model.</p>
     */
    Model?: string;
    /**
     * <p>The device serial number.</p>
     */
    SerialNumber?: string;
    /**
     * <p>The site location.</p>
     */
    Location?: Location;
    /**
     * <p>The site ID.</p>
     */
    SiteId?: string;
    /**
     * <p>The date and time that the site was created.</p>
     */
    CreatedAt?: Date;
    /**
     * <p>The device state.</p>
     */
    State?: DeviceState | string;
    /**
     * <p>The tags for the device.</p>
     */
    Tags?: Tag[];
}
export declare namespace Device {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: Device) => any;
}
export interface CreateDeviceResponse {
    /**
     * <p>Information about the device.</p>
     */
    Device?: Device;
}
export declare namespace CreateDeviceResponse {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: CreateDeviceResponse) => any;
}
export interface CreateGlobalNetworkRequest {
    /**
     * <p>A description of the global network.</p>
     *         <p>Length Constraints: Maximum length of 256 characters.</p>
     */
    Description?: string;
    /**
     * <p>The tags to apply to the resource during creation.</p>
     */
    Tags?: Tag[];
}
export declare namespace CreateGlobalNetworkRequest {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: CreateGlobalNetworkRequest) => any;
}
export declare enum GlobalNetworkState {
    available = "AVAILABLE",
    deleting = "DELETING",
    pending = "PENDING",
    updating = "UPDATING"
}
/**
 * <p>Describes a global network.</p>
 */
export interface GlobalNetwork {
    /**
     * <p>The ID of the global network.</p>
     */
    GlobalNetworkId?: string;
    /**
     * <p>The Amazon Resource Name (ARN) of the global network.</p>
     */
    GlobalNetworkArn?: string;
    /**
     * <p>The description of the global network.</p>
     */
    Description?: string;
    /**
     * <p>The date and time that the global network was created.</p>
     */
    CreatedAt?: Date;
    /**
     * <p>The state of the global network.</p>
     */
    State?: GlobalNetworkState | string;
    /**
     * <p>The tags for the global network.</p>
     */
    Tags?: Tag[];
}
export declare namespace GlobalNetwork {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: GlobalNetwork) => any;
}
export interface CreateGlobalNetworkResponse {
    /**
     * <p>Information about the global network object.</p>
     */
    GlobalNetwork?: GlobalNetwork;
}
export declare namespace CreateGlobalNetworkResponse {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: CreateGlobalNetworkResponse) => any;
}
export interface CreateLinkRequest {
    /**
     * <p>The ID of the global network.</p>
     */
    GlobalNetworkId: string | undefined;
    /**
     * <p>A description of the link.</p>
     *         <p>Length Constraints: Maximum length of 256 characters.</p>
     */
    Description?: string;
    /**
     * <p>The type of the link.</p>
     *         <p>Constraints: Cannot include the following characters: | \ ^</p>
     *         <p>Length Constraints: Maximum length of 128 characters.</p>
     */
    Type?: string;
    /**
     * <p> The upload speed and download speed in Mbps. </p>
     */
    Bandwidth: Bandwidth | undefined;
    /**
     * <p>The provider of the link.</p>
     *         <p>Constraints: Cannot include the following characters: | \ ^</p>
     *         <p>Length Constraints: Maximum length of 128 characters.</p>
     */
    Provider?: string;
    /**
     * <p>The ID of the site.</p>
     */
    SiteId: string | undefined;
    /**
     * <p>The tags to apply to the resource during creation.</p>
     */
    Tags?: Tag[];
}
export declare namespace CreateLinkRequest {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: CreateLinkRequest) => any;
}
export declare enum LinkState {
    available = "AVAILABLE",
    deleting = "DELETING",
    pending = "PENDING",
    updating = "UPDATING"
}
/**
 * <p>Describes a link.</p>
 */
export interface Link {
    /**
     * <p>The ID of the link.</p>
     */
    LinkId?: string;
    /**
     * <p>The Amazon Resource Name (ARN) of the link.</p>
     */
    LinkArn?: string;
    /**
     * <p>The ID of the global network.</p>
     */
    GlobalNetworkId?: string;
    /**
     * <p>The ID of the site.</p>
     */
    SiteId?: string;
    /**
     * <p>The description of the link.</p>
     */
    Description?: string;
    /**
     * <p>The type of the link.</p>
     */
    Type?: string;
    /**
     * <p>The bandwidth for the link.</p>
     */
    Bandwidth?: Bandwidth;
    /**
     * <p>The provider of the link.</p>
     */
    Provider?: string;
    /**
     * <p>The date and time that the link was created.</p>
     */
    CreatedAt?: Date;
    /**
     * <p>The state of the link.</p>
     */
    State?: LinkState | string;
    /**
     * <p>The tags for the link.</p>
     */
    Tags?: Tag[];
}
export declare namespace Link {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: Link) => any;
}
export interface CreateLinkResponse {
    /**
     * <p>Information about the link.</p>
     */
    Link?: Link;
}
export declare namespace CreateLinkResponse {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: CreateLinkResponse) => any;
}
export interface CreateSiteRequest {
    /**
     * <p>The ID of the global network.</p>
     */
    GlobalNetworkId: string | undefined;
    /**
     * <p>A description of your site.</p>
     *         <p>Length Constraints: Maximum length of 256 characters.</p>
     */
    Description?: string;
    /**
     * <p>The site location. This information is used for visualization in the Network Manager console. If you specify the address, the latitude and longitude are automatically calculated.</p>
     *         <ul>
     *             <li>
     *                <p>
     *                   <code>Address</code>: The physical address of the site.</p>
     *             </li>
     *             <li>
     *                <p>
     *                   <code>Latitude</code>: The latitude of the site. </p>
     *             </li>
     *             <li>
     *                <p>
     *                   <code>Longitude</code>: The longitude of the site.</p>
     *             </li>
     *          </ul>
     */
    Location?: Location;
    /**
     * <p>The tags to apply to the resource during creation.</p>
     */
    Tags?: Tag[];
}
export declare namespace CreateSiteRequest {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: CreateSiteRequest) => any;
}
export declare enum SiteState {
    available = "AVAILABLE",
    deleting = "DELETING",
    pending = "PENDING",
    updating = "UPDATING"
}
/**
 * <p>Describes a site.</p>
 */
export interface Site {
    /**
     * <p>The ID of the site.</p>
     */
    SiteId?: string;
    /**
     * <p>The Amazon Resource Name (ARN) of the site.</p>
     */
    SiteArn?: string;
    /**
     * <p>The ID of the global network.</p>
     */
    GlobalNetworkId?: string;
    /**
     * <p>The description of the site.</p>
     */
    Description?: string;
    /**
     * <p>The location of the site.</p>
     */
    Location?: Location;
    /**
     * <p>The date and time that the site was created.</p>
     */
    CreatedAt?: Date;
    /**
     * <p>The state of the site.</p>
     */
    State?: SiteState | string;
    /**
     * <p>The tags for the site.</p>
     */
    Tags?: Tag[];
}
export declare namespace Site {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: Site) => any;
}
export interface CreateSiteResponse {
    /**
     * <p>Information about the site.</p>
     */
    Site?: Site;
}
export declare namespace CreateSiteResponse {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: CreateSiteResponse) => any;
}
export interface DeleteConnectionRequest {
    /**
     * <p>The ID of the global network.</p>
     */
    GlobalNetworkId: string | undefined;
    /**
     * <p>The ID of the connection.</p>
     */
    ConnectionId: string | undefined;
}
export declare namespace DeleteConnectionRequest {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: DeleteConnectionRequest) => any;
}
export interface DeleteConnectionResponse {
    /**
     * <p>Information about the connection.</p>
     */
    Connection?: Connection;
}
export declare namespace DeleteConnectionResponse {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: DeleteConnectionResponse) => any;
}
export interface DeleteDeviceRequest {
    /**
     * <p>The ID of the global network.</p>
     */
    GlobalNetworkId: string | undefined;
    /**
     * <p>The ID of the device.</p>
     */
    DeviceId: string | undefined;
}
export declare namespace DeleteDeviceRequest {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: DeleteDeviceRequest) => any;
}
export interface DeleteDeviceResponse {
    /**
     * <p>Information about the device.</p>
     */
    Device?: Device;
}
export declare namespace DeleteDeviceResponse {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: DeleteDeviceResponse) => any;
}
export interface DeleteGlobalNetworkRequest {
    /**
     * <p>The ID of the global network.</p>
     */
    GlobalNetworkId: string | undefined;
}
export declare namespace DeleteGlobalNetworkRequest {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: DeleteGlobalNetworkRequest) => any;
}
export interface DeleteGlobalNetworkResponse {
    /**
     * <p>Information about the global network.</p>
     */
    GlobalNetwork?: GlobalNetwork;
}
export declare namespace DeleteGlobalNetworkResponse {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: DeleteGlobalNetworkResponse) => any;
}
export interface DeleteLinkRequest {
    /**
     * <p>The ID of the global network.</p>
     */
    GlobalNetworkId: string | undefined;
    /**
     * <p>The ID of the link.</p>
     */
    LinkId: string | undefined;
}
export declare namespace DeleteLinkRequest {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: DeleteLinkRequest) => any;
}
export interface DeleteLinkResponse {
    /**
     * <p>Information about the link.</p>
     */
    Link?: Link;
}
export declare namespace DeleteLinkResponse {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: DeleteLinkResponse) => any;
}
export interface DeleteSiteRequest {
    /**
     * <p>The ID of the global network.</p>
     */
    GlobalNetworkId: string | undefined;
    /**
     * <p>The ID of the site.</p>
     */
    SiteId: string | undefined;
}
export declare namespace DeleteSiteRequest {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: DeleteSiteRequest) => any;
}
export interface DeleteSiteResponse {
    /**
     * <p>Information about the site.</p>
     */
    Site?: Site;
}
export declare namespace DeleteSiteResponse {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: DeleteSiteResponse) => any;
}
export interface DeregisterTransitGatewayRequest {
    /**
     * <p>The ID of the global network.</p>
     */
    GlobalNetworkId: string | undefined;
    /**
     * <p>The Amazon Resource Name (ARN) of the transit gateway.</p>
     */
    TransitGatewayArn: string | undefined;
}
export declare namespace DeregisterTransitGatewayRequest {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: DeregisterTransitGatewayRequest) => any;
}
export declare enum TransitGatewayRegistrationState {
    available = "AVAILABLE",
    deleted = "DELETED",
    deleting = "DELETING",
    failed = "FAILED",
    pending = "PENDING"
}
/**
 * <p>Describes the status of a transit gateway registration.</p>
 */
export interface TransitGatewayRegistrationStateReason {
    /**
     * <p>The code for the state reason.</p>
     */
    Code?: TransitGatewayRegistrationState | string;
    /**
     * <p>The message for the state reason.</p>
     */
    Message?: string;
}
export declare namespace TransitGatewayRegistrationStateReason {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: TransitGatewayRegistrationStateReason) => any;
}
/**
 * <p>Describes the registration of a transit gateway to a global network.</p>
 */
export interface TransitGatewayRegistration {
    /**
     * <p>The ID of the global network.</p>
     */
    GlobalNetworkId?: string;
    /**
     * <p>The Amazon Resource Name (ARN) of the transit gateway.</p>
     */
    TransitGatewayArn?: string;
    /**
     * <p>The state of the transit gateway registration.</p>
     */
    State?: TransitGatewayRegistrationStateReason;
}
export declare namespace TransitGatewayRegistration {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: TransitGatewayRegistration) => any;
}
export interface DeregisterTransitGatewayResponse {
    /**
     * <p>The transit gateway registration information.</p>
     */
    TransitGatewayRegistration?: TransitGatewayRegistration;
}
export declare namespace DeregisterTransitGatewayResponse {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: DeregisterTransitGatewayResponse) => any;
}
export interface DescribeGlobalNetworksRequest {
    /**
     * <p>The IDs of one or more global networks. The maximum is 10.</p>
     */
    GlobalNetworkIds?: string[];
    /**
     * <p>The maximum number of results to return.</p>
     */
    MaxResults?: number;
    /**
     * <p>The token for the next page of results.</p>
     */
    NextToken?: string;
}
export declare namespace DescribeGlobalNetworksRequest {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: DescribeGlobalNetworksRequest) => any;
}
export interface DescribeGlobalNetworksResponse {
    /**
     * <p>Information about the global networks.</p>
     */
    GlobalNetworks?: GlobalNetwork[];
    /**
     * <p>The token for the next page of results.</p>
     */
    NextToken?: string;
}
export declare namespace DescribeGlobalNetworksResponse {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: DescribeGlobalNetworksResponse) => any;
}
export interface DisassociateCustomerGatewayRequest {
    /**
     * <p>The ID of the global network.</p>
     */
    GlobalNetworkId: string | undefined;
    /**
     * <p>The Amazon Resource Name (ARN) of the customer gateway. For more information, see
     *                 <a href="https://docs.aws.amazon.com/IAM/latest/UserGuide/list_amazonec2.html#amazonec2-resources-for-iam-policies">Resources Defined by Amazon EC2</a>.</p>
     */
    CustomerGatewayArn: string | undefined;
}
export declare namespace DisassociateCustomerGatewayRequest {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: DisassociateCustomerGatewayRequest) => any;
}
export interface DisassociateCustomerGatewayResponse {
    /**
     * <p>Information about the customer gateway association.</p>
     */
    CustomerGatewayAssociation?: CustomerGatewayAssociation;
}
export declare namespace DisassociateCustomerGatewayResponse {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: DisassociateCustomerGatewayResponse) => any;
}
export interface DisassociateLinkRequest {
    /**
     * <p>The ID of the global network.</p>
     */
    GlobalNetworkId: string | undefined;
    /**
     * <p>The ID of the device.</p>
     */
    DeviceId: string | undefined;
    /**
     * <p>The ID of the link.</p>
     */
    LinkId: string | undefined;
}
export declare namespace DisassociateLinkRequest {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: DisassociateLinkRequest) => any;
}
export interface DisassociateLinkResponse {
    /**
     * <p>Information about the link association.</p>
     */
    LinkAssociation?: LinkAssociation;
}
export declare namespace DisassociateLinkResponse {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: DisassociateLinkResponse) => any;
}
export interface DisassociateTransitGatewayConnectPeerRequest {
    /**
     * <p>The ID of the global network.</p>
     */
    GlobalNetworkId: string | undefined;
    /**
     * <p>The Amazon Resource Name (ARN) of the transit gateway Connect peer.</p>
     */
    TransitGatewayConnectPeerArn: string | undefined;
}
export declare namespace DisassociateTransitGatewayConnectPeerRequest {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: DisassociateTransitGatewayConnectPeerRequest) => any;
}
export interface DisassociateTransitGatewayConnectPeerResponse {
    /**
     * <p>The transit gateway Connect peer association.</p>
     */
    TransitGatewayConnectPeerAssociation?: TransitGatewayConnectPeerAssociation;
}
export declare namespace DisassociateTransitGatewayConnectPeerResponse {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: DisassociateTransitGatewayConnectPeerResponse) => any;
}
export interface GetConnectionsRequest {
    /**
     * <p>The ID of the global network.</p>
     */
    GlobalNetworkId: string | undefined;
    /**
     * <p>One or more connection IDs.</p>
     */
    ConnectionIds?: string[];
    /**
     * <p>The ID of the device.</p>
     */
    DeviceId?: string;
    /**
     * <p>The maximum number of results to return.</p>
     */
    MaxResults?: number;
    /**
     * <p>The token for the next page of results.</p>
     */
    NextToken?: string;
}
export declare namespace GetConnectionsRequest {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: GetConnectionsRequest) => any;
}
export interface GetConnectionsResponse {
    /**
     * <p>Information about the connections.</p>
     */
    Connections?: Connection[];
    /**
     * <p>The token to use for the next page of results.</p>
     */
    NextToken?: string;
}
export declare namespace GetConnectionsResponse {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: GetConnectionsResponse) => any;
}
export interface GetCustomerGatewayAssociationsRequest {
    /**
     * <p>The ID of the global network.</p>
     */
    GlobalNetworkId: string | undefined;
    /**
     * <p>One or more customer gateway Amazon Resource Names (ARNs). For more information, see
     *                 <a href="https://docs.aws.amazon.com/IAM/latest/UserGuide/list_amazonec2.html#amazonec2-resources-for-iam-policies">Resources Defined by Amazon EC2</a>. The maximum is 10.</p>
     */
    CustomerGatewayArns?: string[];
    /**
     * <p>The maximum number of results to return.</p>
     */
    MaxResults?: number;
    /**
     * <p>The token for the next page of results.</p>
     */
    NextToken?: string;
}
export declare namespace GetCustomerGatewayAssociationsRequest {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: GetCustomerGatewayAssociationsRequest) => any;
}
export interface GetCustomerGatewayAssociationsResponse {
    /**
     * <p>The customer gateway associations.</p>
     */
    CustomerGatewayAssociations?: CustomerGatewayAssociation[];
    /**
     * <p>The token for the next page of results.</p>
     */
    NextToken?: string;
}
export declare namespace GetCustomerGatewayAssociationsResponse {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: GetCustomerGatewayAssociationsResponse) => any;
}
export interface GetDevicesRequest {
    /**
     * <p>The ID of the global network.</p>
     */
    GlobalNetworkId: string | undefined;
    /**
     * <p>One or more device IDs. The maximum is 10.</p>
     */
    DeviceIds?: string[];
    /**
     * <p>The ID of the site.</p>
     */
    SiteId?: string;
    /**
     * <p>The maximum number of results to return.</p>
     */
    MaxResults?: number;
    /**
     * <p>The token for the next page of results.</p>
     */
    NextToken?: string;
}
export declare namespace GetDevicesRequest {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: GetDevicesRequest) => any;
}
export interface GetDevicesResponse {
    /**
     * <p>The devices.</p>
     */
    Devices?: Device[];
    /**
     * <p>The token for the next page of results.</p>
     */
    NextToken?: string;
}
export declare namespace GetDevicesResponse {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: GetDevicesResponse) => any;
}
export interface GetLinkAssociationsRequest {
    /**
     * <p>The ID of the global network.</p>
     */
    GlobalNetworkId: string | undefined;
    /**
     * <p>The ID of the device.</p>
     */
    DeviceId?: string;
    /**
     * <p>The ID of the link.</p>
     */
    LinkId?: string;
    /**
     * <p>The maximum number of results to return.</p>
     */
    MaxResults?: number;
    /**
     * <p>The token for the next page of results.</p>
     */
    NextToken?: string;
}
export declare namespace GetLinkAssociationsRequest {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: GetLinkAssociationsRequest) => any;
}
export interface GetLinkAssociationsResponse {
    /**
     * <p>The link associations.</p>
     */
    LinkAssociations?: LinkAssociation[];
    /**
     * <p>The token for the next page of results.</p>
     */
    NextToken?: string;
}
export declare namespace GetLinkAssociationsResponse {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: GetLinkAssociationsResponse) => any;
}
export interface GetLinksRequest {
    /**
     * <p>The ID of the global network.</p>
     */
    GlobalNetworkId: string | undefined;
    /**
     * <p>One or more link IDs. The maximum is 10.</p>
     */
    LinkIds?: string[];
    /**
     * <p>The ID of the site.</p>
     */
    SiteId?: string;
    /**
     * <p>The link type.</p>
     */
    Type?: string;
    /**
     * <p>The link provider.</p>
     */
    Provider?: string;
    /**
     * <p>The maximum number of results to return.</p>
     */
    MaxResults?: number;
    /**
     * <p>The token for the next page of results.</p>
     */
    NextToken?: string;
}
export declare namespace GetLinksRequest {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: GetLinksRequest) => any;
}
export interface GetLinksResponse {
    /**
     * <p>The links.</p>
     */
    Links?: Link[];
    /**
     * <p>The token for the next page of results.</p>
     */
    NextToken?: string;
}
export declare namespace GetLinksResponse {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: GetLinksResponse) => any;
}
export interface GetSitesRequest {
    /**
     * <p>The ID of the global network.</p>
     */
    GlobalNetworkId: string | undefined;
    /**
     * <p>One or more site IDs. The maximum is 10.</p>
     */
    SiteIds?: string[];
    /**
     * <p>The maximum number of results to return.</p>
     */
    MaxResults?: number;
    /**
     * <p>The token for the next page of results.</p>
     */
    NextToken?: string;
}
export declare namespace GetSitesRequest {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: GetSitesRequest) => any;
}
export interface GetSitesResponse {
    /**
     * <p>The sites.</p>
     */
    Sites?: Site[];
    /**
     * <p>The token for the next page of results.</p>
     */
    NextToken?: string;
}
export declare namespace GetSitesResponse {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: GetSitesResponse) => any;
}
export interface GetTransitGatewayConnectPeerAssociationsRequest {
    /**
     * <p>The ID of the global network.</p>
     */
    GlobalNetworkId: string | undefined;
    /**
     * <p>One or more transit gateway Connect peer Amazon Resource Names (ARNs).</p>
     */
    TransitGatewayConnectPeerArns?: string[];
    /**
     * <p>The maximum number of results to return.</p>
     */
    MaxResults?: number;
    /**
     * <p>The token for the next page of results.</p>
     */
    NextToken?: string;
}
export declare namespace GetTransitGatewayConnectPeerAssociationsRequest {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: GetTransitGatewayConnectPeerAssociationsRequest) => any;
}
export interface GetTransitGatewayConnectPeerAssociationsResponse {
    /**
     * <p>Information about the transit gateway Connect peer associations.</p>
     */
    TransitGatewayConnectPeerAssociations?: TransitGatewayConnectPeerAssociation[];
    /**
     * <p>The token to use for the next page of results.</p>
     */
    NextToken?: string;
}
export declare namespace GetTransitGatewayConnectPeerAssociationsResponse {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: GetTransitGatewayConnectPeerAssociationsResponse) => any;
}
export interface GetTransitGatewayRegistrationsRequest {
    /**
     * <p>The ID of the global network.</p>
     */
    GlobalNetworkId: string | undefined;
    /**
     * <p>The Amazon Resource Names (ARNs) of one or more transit gateways. The maximum is
     *             10.</p>
     */
    TransitGatewayArns?: string[];
    /**
     * <p>The maximum number of results to return.</p>
     */
    MaxResults?: number;
    /**
     * <p>The token for the next page of results.</p>
     */
    NextToken?: string;
}
export declare namespace GetTransitGatewayRegistrationsRequest {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: GetTransitGatewayRegistrationsRequest) => any;
}
export interface GetTransitGatewayRegistrationsResponse {
    /**
     * <p>The transit gateway registrations.</p>
     */
    TransitGatewayRegistrations?: TransitGatewayRegistration[];
    /**
     * <p>The token for the next page of results.</p>
     */
    NextToken?: string;
}
export declare namespace GetTransitGatewayRegistrationsResponse {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: GetTransitGatewayRegistrationsResponse) => any;
}
export interface ListTagsForResourceRequest {
    /**
     * <p>The Amazon Resource Name (ARN) of the resource.</p>
     */
    ResourceArn: string | undefined;
}
export declare namespace ListTagsForResourceRequest {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: ListTagsForResourceRequest) => any;
}
export interface ListTagsForResourceResponse {
    /**
     * <p>The list of tags.</p>
     */
    TagList?: Tag[];
}
export declare namespace ListTagsForResourceResponse {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: ListTagsForResourceResponse) => any;
}
export interface RegisterTransitGatewayRequest {
    /**
     * <p>The ID of the global network.</p>
     */
    GlobalNetworkId: string | undefined;
    /**
     * <p>The Amazon Resource Name (ARN) of the transit gateway. For more information, see
     *                 <a href="https://docs.aws.amazon.com/IAM/latest/UserGuide/list_amazonec2.html#amazonec2-resources-for-iam-policies">Resources Defined by Amazon EC2</a>.</p>
     */
    TransitGatewayArn: string | undefined;
}
export declare namespace RegisterTransitGatewayRequest {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: RegisterTransitGatewayRequest) => any;
}
export interface RegisterTransitGatewayResponse {
    /**
     * <p>Information about the transit gateway registration.</p>
     */
    TransitGatewayRegistration?: TransitGatewayRegistration;
}
export declare namespace RegisterTransitGatewayResponse {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: RegisterTransitGatewayResponse) => any;
}
export interface TagResourceRequest {
    /**
     * <p>The Amazon Resource Name (ARN) of the resource.</p>
     */
    ResourceArn: string | undefined;
    /**
     * <p>The tags to apply to the specified resource.</p>
     */
    Tags: Tag[] | undefined;
}
export declare namespace TagResourceRequest {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: TagResourceRequest) => any;
}
export interface TagResourceResponse {
}
export declare namespace TagResourceResponse {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: TagResourceResponse) => any;
}
export interface UntagResourceRequest {
    /**
     * <p>The Amazon Resource Name (ARN) of the resource.</p>
     */
    ResourceArn: string | undefined;
    /**
     * <p>The tag keys to remove from the specified resource.</p>
     */
    TagKeys: string[] | undefined;
}
export declare namespace UntagResourceRequest {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: UntagResourceRequest) => any;
}
export interface UntagResourceResponse {
}
export declare namespace UntagResourceResponse {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: UntagResourceResponse) => any;
}
export interface UpdateConnectionRequest {
    /**
     * <p>The ID of the global network.</p>
     */
    GlobalNetworkId: string | undefined;
    /**
     * <p>The ID of the connection.</p>
     */
    ConnectionId: string | undefined;
    /**
     * <p>The ID of the link for the first device in the connection.</p>
     */
    LinkId?: string;
    /**
     * <p>The ID of the link for the second device in the connection.</p>
     */
    ConnectedLinkId?: string;
    /**
     * <p>A description of the connection.</p>
     *         <p>Length Constraints: Maximum length of 256 characters.</p>
     */
    Description?: string;
}
export declare namespace UpdateConnectionRequest {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: UpdateConnectionRequest) => any;
}
export interface UpdateConnectionResponse {
    /**
     * <p>Information about the connection.</p>
     */
    Connection?: Connection;
}
export declare namespace UpdateConnectionResponse {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: UpdateConnectionResponse) => any;
}
export interface UpdateDeviceRequest {
    /**
     * <p>The ID of the global network.</p>
     */
    GlobalNetworkId: string | undefined;
    /**
     * <p>The ID of the device.</p>
     */
    DeviceId: string | undefined;
    /**
     * <p>The AWS location of the device.</p>
     */
    AWSLocation?: AWSLocation;
    /**
     * <p>A description of the device.</p>
     *         <p>Length Constraints: Maximum length of 256 characters.</p>
     */
    Description?: string;
    /**
     * <p>The type of the device.</p>
     */
    Type?: string;
    /**
     * <p>The vendor of the device.</p>
     *         <p>Length Constraints: Maximum length of 128 characters.</p>
     */
    Vendor?: string;
    /**
     * <p>The model of the device.</p>
     *         <p>Length Constraints: Maximum length of 128 characters.</p>
     */
    Model?: string;
    /**
     * <p>The serial number of the device.</p>
     *         <p>Length Constraints: Maximum length of 128 characters.</p>
     */
    SerialNumber?: string;
    /**
     * <p>Describes a location.</p>
     */
    Location?: Location;
    /**
     * <p>The ID of the site.</p>
     */
    SiteId?: string;
}
export declare namespace UpdateDeviceRequest {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: UpdateDeviceRequest) => any;
}
export interface UpdateDeviceResponse {
    /**
     * <p>Information about the device.</p>
     */
    Device?: Device;
}
export declare namespace UpdateDeviceResponse {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: UpdateDeviceResponse) => any;
}
export interface UpdateGlobalNetworkRequest {
    /**
     * <p>The ID of your global network.</p>
     */
    GlobalNetworkId: string | undefined;
    /**
     * <p>A description of the global network.</p>
     *         <p>Length Constraints: Maximum length of 256 characters.</p>
     */
    Description?: string;
}
export declare namespace UpdateGlobalNetworkRequest {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: UpdateGlobalNetworkRequest) => any;
}
export interface UpdateGlobalNetworkResponse {
    /**
     * <p>Information about the global network object.</p>
     */
    GlobalNetwork?: GlobalNetwork;
}
export declare namespace UpdateGlobalNetworkResponse {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: UpdateGlobalNetworkResponse) => any;
}
export interface UpdateLinkRequest {
    /**
     * <p>The ID of the global network.</p>
     */
    GlobalNetworkId: string | undefined;
    /**
     * <p>The ID of the link.</p>
     */
    LinkId: string | undefined;
    /**
     * <p>A description of the link.</p>
     *         <p>Length Constraints: Maximum length of 256 characters.</p>
     */
    Description?: string;
    /**
     * <p>The type of the link.</p>
     *         <p>Length Constraints: Maximum length of 128 characters.</p>
     */
    Type?: string;
    /**
     * <p>The upload and download speed in Mbps. </p>
     */
    Bandwidth?: Bandwidth;
    /**
     * <p>The provider of the link.</p>
     *         <p>Length Constraints: Maximum length of 128 characters.</p>
     */
    Provider?: string;
}
export declare namespace UpdateLinkRequest {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: UpdateLinkRequest) => any;
}
export interface UpdateLinkResponse {
    /**
     * <p>Information about the link.</p>
     */
    Link?: Link;
}
export declare namespace UpdateLinkResponse {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: UpdateLinkResponse) => any;
}
export interface UpdateSiteRequest {
    /**
     * <p>The ID of the global network.</p>
     */
    GlobalNetworkId: string | undefined;
    /**
     * <p>The ID of your site.</p>
     */
    SiteId: string | undefined;
    /**
     * <p>A description of your site.</p>
     *         <p>Length Constraints: Maximum length of 256 characters.</p>
     */
    Description?: string;
    /**
     * <p>The site location:</p>
     *         <ul>
     *             <li>
     *                <p>
     *                   <code>Address</code>: The physical address of the site.</p>
     *             </li>
     *             <li>
     *                <p>
     *                   <code>Latitude</code>: The latitude of the site. </p>
     *             </li>
     *             <li>
     *                <p>
     *                   <code>Longitude</code>: The longitude of the site.</p>
     *             </li>
     *          </ul>
     */
    Location?: Location;
}
export declare namespace UpdateSiteRequest {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: UpdateSiteRequest) => any;
}
export interface UpdateSiteResponse {
    /**
     * <p>Information about the site.</p>
     */
    Site?: Site;
}
export declare namespace UpdateSiteResponse {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: UpdateSiteResponse) => any;
}
