import { SmithyException as __SmithyException } from "@aws-sdk/smithy-client";
import { MetadataBearer as $MetadataBearer } from "@aws-sdk/types";
export interface AssociateDomainRequest {
    /**
     * <p>The Amazon Resource Name (ARN) of the fleet.</p>
     */
    FleetArn: string | undefined;
    /**
     * <p>The fully qualified domain name (FQDN).</p>
     */
    DomainName: string | undefined;
    /**
     * <p>The name to display.</p>
     */
    DisplayName?: string;
    /**
     * <p>The ARN of an issued ACM certificate that is valid for the domain being associated.</p>
     */
    AcmCertificateArn: string | undefined;
}
export declare namespace AssociateDomainRequest {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: AssociateDomainRequest) => any;
}
export interface AssociateDomainResponse {
}
export declare namespace AssociateDomainResponse {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: AssociateDomainResponse) => any;
}
/**
 * <p>The service is temporarily unavailable.</p>
 */
export interface InternalServerErrorException extends __SmithyException, $MetadataBearer {
    name: "InternalServerErrorException";
    $fault: "server";
    Message?: string;
}
export declare namespace InternalServerErrorException {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: InternalServerErrorException) => any;
}
/**
 * <p>The request is not valid.</p>
 */
export interface InvalidRequestException extends __SmithyException, $MetadataBearer {
    name: "InvalidRequestException";
    $fault: "client";
    Message?: string;
}
export declare namespace InvalidRequestException {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: InvalidRequestException) => any;
}
/**
 * <p>The resource already exists.</p>
 */
export interface ResourceAlreadyExistsException extends __SmithyException, $MetadataBearer {
    name: "ResourceAlreadyExistsException";
    $fault: "client";
    Message?: string;
}
export declare namespace ResourceAlreadyExistsException {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: ResourceAlreadyExistsException) => any;
}
/**
 * <p>The requested resource was not found.</p>
 */
export interface ResourceNotFoundException extends __SmithyException, $MetadataBearer {
    name: "ResourceNotFoundException";
    $fault: "client";
    Message?: string;
}
export declare namespace ResourceNotFoundException {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: ResourceNotFoundException) => any;
}
/**
 * <p>The number of requests exceeds the limit.</p>
 */
export interface TooManyRequestsException extends __SmithyException, $MetadataBearer {
    name: "TooManyRequestsException";
    $fault: "client";
    Message?: string;
}
export declare namespace TooManyRequestsException {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: TooManyRequestsException) => any;
}
/**
 * <p>You are not authorized to perform this action.</p>
 */
export interface UnauthorizedException extends __SmithyException, $MetadataBearer {
    name: "UnauthorizedException";
    $fault: "client";
    Message?: string;
}
export declare namespace UnauthorizedException {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: UnauthorizedException) => any;
}
export declare enum AuthorizationProviderType {
    SAML = "SAML"
}
export interface AssociateWebsiteAuthorizationProviderRequest {
    /**
     * <p>The ARN of the fleet.</p>
     */
    FleetArn: string | undefined;
    /**
     * <p>The authorization provider type.</p>
     */
    AuthorizationProviderType: AuthorizationProviderType | string | undefined;
    /**
     * <p>The domain name of the authorization provider. This applies only to SAML-based
     *             authorization providers.</p>
     */
    DomainName?: string;
}
export declare namespace AssociateWebsiteAuthorizationProviderRequest {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: AssociateWebsiteAuthorizationProviderRequest) => any;
}
export interface AssociateWebsiteAuthorizationProviderResponse {
    /**
     * <p>A unique identifier for the authorization provider.</p>
     */
    AuthorizationProviderId?: string;
}
export declare namespace AssociateWebsiteAuthorizationProviderResponse {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: AssociateWebsiteAuthorizationProviderResponse) => any;
}
export interface AssociateWebsiteCertificateAuthorityRequest {
    /**
     * <p>The ARN of the fleet.</p>
     */
    FleetArn: string | undefined;
    /**
     * <p>The root certificate of the CA.</p>
     */
    Certificate: string | undefined;
    /**
     * <p>The certificate name to display.</p>
     */
    DisplayName?: string;
}
export declare namespace AssociateWebsiteCertificateAuthorityRequest {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: AssociateWebsiteCertificateAuthorityRequest) => any;
}
export interface AssociateWebsiteCertificateAuthorityResponse {
    /**
     * <p>A unique identifier for the CA.</p>
     */
    WebsiteCaId?: string;
}
export declare namespace AssociateWebsiteCertificateAuthorityResponse {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: AssociateWebsiteCertificateAuthorityResponse) => any;
}
export interface CreateFleetRequest {
    /**
     * <p>A unique name for the fleet.</p>
     */
    FleetName: string | undefined;
    /**
     * <p>The fleet name to display.</p>
     */
    DisplayName?: string;
    /**
     * <p>The option to optimize for better performance by routing traffic through the closest
     *             AWS Region to users, which may be outside of your home Region.</p>
     */
    OptimizeForEndUserLocation?: boolean;
    /**
     * <p> The tags to add to the resource. A tag is a key-value pair.</p>
     */
    Tags?: {
        [key: string]: string;
    };
}
export declare namespace CreateFleetRequest {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: CreateFleetRequest) => any;
}
export interface CreateFleetResponse {
    /**
     * <p>The Amazon Resource Name (ARN) of the fleet.</p>
     */
    FleetArn?: string;
}
export declare namespace CreateFleetResponse {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: CreateFleetResponse) => any;
}
export interface DeleteFleetRequest {
    /**
     * <p>The ARN of the fleet.</p>
     */
    FleetArn: string | undefined;
}
export declare namespace DeleteFleetRequest {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: DeleteFleetRequest) => any;
}
export interface DeleteFleetResponse {
}
export declare namespace DeleteFleetResponse {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: DeleteFleetResponse) => any;
}
export interface DescribeAuditStreamConfigurationRequest {
    /**
     * <p>The ARN of the fleet.</p>
     */
    FleetArn: string | undefined;
}
export declare namespace DescribeAuditStreamConfigurationRequest {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: DescribeAuditStreamConfigurationRequest) => any;
}
export interface DescribeAuditStreamConfigurationResponse {
    /**
     * <p>The ARN of the Amazon Kinesis data stream that will receive the audit events.</p>
     */
    AuditStreamArn?: string;
}
export declare namespace DescribeAuditStreamConfigurationResponse {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: DescribeAuditStreamConfigurationResponse) => any;
}
export interface DescribeCompanyNetworkConfigurationRequest {
    /**
     * <p>The ARN of the fleet.</p>
     */
    FleetArn: string | undefined;
}
export declare namespace DescribeCompanyNetworkConfigurationRequest {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: DescribeCompanyNetworkConfigurationRequest) => any;
}
export interface DescribeCompanyNetworkConfigurationResponse {
    /**
     * <p>The VPC with connectivity to associated websites.</p>
     */
    VpcId?: string;
    /**
     * <p>The subnets used for X-ENI connections from Amazon WorkLink rendering containers.</p>
     */
    SubnetIds?: string[];
    /**
     * <p>The security groups associated with access to the provided subnets.</p>
     */
    SecurityGroupIds?: string[];
}
export declare namespace DescribeCompanyNetworkConfigurationResponse {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: DescribeCompanyNetworkConfigurationResponse) => any;
}
export interface DescribeDeviceRequest {
    /**
     * <p>The ARN of the fleet.</p>
     */
    FleetArn: string | undefined;
    /**
     * <p>A unique identifier for a registered user's device.</p>
     */
    DeviceId: string | undefined;
}
export declare namespace DescribeDeviceRequest {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: DescribeDeviceRequest) => any;
}
export declare enum DeviceStatus {
    ACTIVE = "ACTIVE",
    SIGNED_OUT = "SIGNED_OUT"
}
export interface DescribeDeviceResponse {
    /**
     * <p>The current state of the device.</p>
     */
    Status?: DeviceStatus | string;
    /**
     * <p>The model of the device.</p>
     */
    Model?: string;
    /**
     * <p>The manufacturer of the device.</p>
     */
    Manufacturer?: string;
    /**
     * <p>The operating system of the device.</p>
     */
    OperatingSystem?: string;
    /**
     * <p>The operating system version of the device.</p>
     */
    OperatingSystemVersion?: string;
    /**
     * <p>The operating system patch level of the device.</p>
     */
    PatchLevel?: string;
    /**
     * <p>The date that the device first signed in to Amazon WorkLink.</p>
     */
    FirstAccessedTime?: Date;
    /**
     * <p>The date that the device last accessed Amazon WorkLink.</p>
     */
    LastAccessedTime?: Date;
    /**
     * <p>The user name associated with the device.</p>
     */
    Username?: string;
}
export declare namespace DescribeDeviceResponse {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: DescribeDeviceResponse) => any;
}
export interface DescribeDevicePolicyConfigurationRequest {
    /**
     * <p>The ARN of the fleet.</p>
     */
    FleetArn: string | undefined;
}
export declare namespace DescribeDevicePolicyConfigurationRequest {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: DescribeDevicePolicyConfigurationRequest) => any;
}
export interface DescribeDevicePolicyConfigurationResponse {
    /**
     * <p>The certificate chain, including intermediate certificates and the root certificate authority certificate used to issue device certificates.</p>
     */
    DeviceCaCertificate?: string;
}
export declare namespace DescribeDevicePolicyConfigurationResponse {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: DescribeDevicePolicyConfigurationResponse) => any;
}
export interface DescribeDomainRequest {
    /**
     * <p>The ARN of the fleet.</p>
     */
    FleetArn: string | undefined;
    /**
     * <p>The name of the domain.</p>
     */
    DomainName: string | undefined;
}
export declare namespace DescribeDomainRequest {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: DescribeDomainRequest) => any;
}
export declare enum DomainStatus {
    ACTIVE = "ACTIVE",
    ASSOCIATING = "ASSOCIATING",
    DISASSOCIATED = "DISASSOCIATED",
    DISASSOCIATING = "DISASSOCIATING",
    FAILED_TO_ASSOCIATE = "FAILED_TO_ASSOCIATE",
    FAILED_TO_DISASSOCIATE = "FAILED_TO_DISASSOCIATE",
    INACTIVE = "INACTIVE",
    PENDING_VALIDATION = "PENDING_VALIDATION"
}
export interface DescribeDomainResponse {
    /**
     * <p>The name of the domain.</p>
     */
    DomainName?: string;
    /**
     * <p>The name to display.</p>
     */
    DisplayName?: string;
    /**
     * <p>The time that the domain was added.</p>
     */
    CreatedTime?: Date;
    /**
     * <p>The current state for the domain.</p>
     */
    DomainStatus?: DomainStatus | string;
    /**
     * <p>The ARN of an issued ACM certificate that is valid for the domain being associated.</p>
     */
    AcmCertificateArn?: string;
}
export declare namespace DescribeDomainResponse {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: DescribeDomainResponse) => any;
}
export interface DescribeFleetMetadataRequest {
    /**
     * <p>The Amazon Resource Name (ARN) of the fleet.</p>
     */
    FleetArn: string | undefined;
}
export declare namespace DescribeFleetMetadataRequest {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: DescribeFleetMetadataRequest) => any;
}
export declare enum FleetStatus {
    ACTIVE = "ACTIVE",
    CREATING = "CREATING",
    DELETED = "DELETED",
    DELETING = "DELETING",
    FAILED_TO_CREATE = "FAILED_TO_CREATE",
    FAILED_TO_DELETE = "FAILED_TO_DELETE"
}
export interface DescribeFleetMetadataResponse {
    /**
     * <p>The time that the fleet was created.</p>
     */
    CreatedTime?: Date;
    /**
     * <p>The time that the fleet was last updated.</p>
     */
    LastUpdatedTime?: Date;
    /**
     * <p>The name of the fleet.</p>
     */
    FleetName?: string;
    /**
     * <p>The name to display.</p>
     */
    DisplayName?: string;
    /**
     * <p>The option to optimize for better performance by routing traffic through the closest
     *             AWS Region to users, which may be outside of your home Region.</p>
     */
    OptimizeForEndUserLocation?: boolean;
    /**
     * <p>The identifier used by users to sign in to the Amazon WorkLink app.</p>
     */
    CompanyCode?: string;
    /**
     * <p>The current state of the fleet.</p>
     */
    FleetStatus?: FleetStatus | string;
    /**
     * <p>The tags attached to the resource. A tag is a key-value pair.</p>
     */
    Tags?: {
        [key: string]: string;
    };
}
export declare namespace DescribeFleetMetadataResponse {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: DescribeFleetMetadataResponse) => any;
}
export interface DescribeIdentityProviderConfigurationRequest {
    /**
     * <p>The ARN of the fleet.</p>
     */
    FleetArn: string | undefined;
}
export declare namespace DescribeIdentityProviderConfigurationRequest {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: DescribeIdentityProviderConfigurationRequest) => any;
}
export declare enum IdentityProviderType {
    SAML = "SAML"
}
export interface DescribeIdentityProviderConfigurationResponse {
    /**
     * <p>The type of identity provider.</p>
     */
    IdentityProviderType?: IdentityProviderType | string;
    /**
     * <p>The SAML metadata document uploaded to the user’s identity provider.</p>
     */
    ServiceProviderSamlMetadata?: string;
    /**
     * <p>The SAML metadata document provided by the user’s identity provider.</p>
     */
    IdentityProviderSamlMetadata?: string;
}
export declare namespace DescribeIdentityProviderConfigurationResponse {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: DescribeIdentityProviderConfigurationResponse) => any;
}
export interface DescribeWebsiteCertificateAuthorityRequest {
    /**
     * <p>The ARN of the fleet.</p>
     */
    FleetArn: string | undefined;
    /**
     * <p>A unique identifier for the certificate authority.</p>
     */
    WebsiteCaId: string | undefined;
}
export declare namespace DescribeWebsiteCertificateAuthorityRequest {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: DescribeWebsiteCertificateAuthorityRequest) => any;
}
export interface DescribeWebsiteCertificateAuthorityResponse {
    /**
     * <p>The root certificate of the certificate authority.</p>
     */
    Certificate?: string;
    /**
     * <p>The time that the certificate authority was added.</p>
     */
    CreatedTime?: Date;
    /**
     * <p>The certificate name to display.</p>
     */
    DisplayName?: string;
}
export declare namespace DescribeWebsiteCertificateAuthorityResponse {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: DescribeWebsiteCertificateAuthorityResponse) => any;
}
/**
 * <p>The summary of devices.</p>
 */
export interface DeviceSummary {
    /**
     * <p>The ID of the device.</p>
     */
    DeviceId?: string;
    /**
     * <p>The status of the device.</p>
     */
    DeviceStatus?: DeviceStatus | string;
}
export declare namespace DeviceSummary {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: DeviceSummary) => any;
}
export interface DisassociateDomainRequest {
    /**
     * <p>The ARN of the fleet.</p>
     */
    FleetArn: string | undefined;
    /**
     * <p>The name of the domain.</p>
     */
    DomainName: string | undefined;
}
export declare namespace DisassociateDomainRequest {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: DisassociateDomainRequest) => any;
}
export interface DisassociateDomainResponse {
}
export declare namespace DisassociateDomainResponse {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: DisassociateDomainResponse) => any;
}
export interface DisassociateWebsiteAuthorizationProviderRequest {
    /**
     * <p>The ARN of the fleet.</p>
     */
    FleetArn: string | undefined;
    /**
     * <p>A unique identifier for the authorization provider.</p>
     */
    AuthorizationProviderId: string | undefined;
}
export declare namespace DisassociateWebsiteAuthorizationProviderRequest {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: DisassociateWebsiteAuthorizationProviderRequest) => any;
}
export interface DisassociateWebsiteAuthorizationProviderResponse {
}
export declare namespace DisassociateWebsiteAuthorizationProviderResponse {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: DisassociateWebsiteAuthorizationProviderResponse) => any;
}
export interface DisassociateWebsiteCertificateAuthorityRequest {
    /**
     * <p>The ARN of the fleet.</p>
     */
    FleetArn: string | undefined;
    /**
     * <p>A unique identifier for the CA.</p>
     */
    WebsiteCaId: string | undefined;
}
export declare namespace DisassociateWebsiteCertificateAuthorityRequest {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: DisassociateWebsiteCertificateAuthorityRequest) => any;
}
export interface DisassociateWebsiteCertificateAuthorityResponse {
}
export declare namespace DisassociateWebsiteCertificateAuthorityResponse {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: DisassociateWebsiteCertificateAuthorityResponse) => any;
}
/**
 * <p>The summary of the domain.</p>
 */
export interface DomainSummary {
    /**
     * <p>The name of the domain.</p>
     */
    DomainName: string | undefined;
    /**
     * <p>The name to display.</p>
     */
    DisplayName?: string;
    /**
     * <p>The time that the domain was created.</p>
     */
    CreatedTime: Date | undefined;
    /**
     * <p>The status of the domain.</p>
     */
    DomainStatus: DomainStatus | string | undefined;
}
export declare namespace DomainSummary {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: DomainSummary) => any;
}
/**
 * <p>The summary of the fleet.</p>
 */
export interface FleetSummary {
    /**
     * <p>The Amazon Resource Name (ARN) of the fleet.</p>
     */
    FleetArn?: string;
    /**
     * <p>The time when the fleet was created.</p>
     */
    CreatedTime?: Date;
    /**
     * <p>The time when the fleet was last updated.</p>
     */
    LastUpdatedTime?: Date;
    /**
     * <p>The name of the fleet.</p>
     */
    FleetName?: string;
    /**
     * <p>The name of the fleet to display.</p>
     */
    DisplayName?: string;
    /**
     * <p>The identifier used by users to sign into the Amazon WorkLink app.</p>
     */
    CompanyCode?: string;
    /**
     * <p>The status of the fleet.</p>
     */
    FleetStatus?: FleetStatus | string;
    /**
     * <p>The tags attached to the resource. A tag is a key-value pair.</p>
     */
    Tags?: {
        [key: string]: string;
    };
}
export declare namespace FleetSummary {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: FleetSummary) => any;
}
export interface ListDevicesRequest {
    /**
     * <p>The ARN of the fleet.</p>
     */
    FleetArn: string | undefined;
    /**
     * <p>The pagination token used to retrieve the next page of results for this operation. If
     *             this value is null, it retrieves the first page.</p>
     */
    NextToken?: string;
    /**
     * <p>The maximum number of results to be included in the next page.</p>
     */
    MaxResults?: number;
}
export declare namespace ListDevicesRequest {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: ListDevicesRequest) => any;
}
export interface ListDevicesResponse {
    /**
     * <p>Information about the devices.</p>
     */
    Devices?: DeviceSummary[];
    /**
     * <p>The pagination token used to retrieve the next page of results for this operation. If
     *             there are no more pages, this value is null.</p>
     */
    NextToken?: string;
}
export declare namespace ListDevicesResponse {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: ListDevicesResponse) => any;
}
export interface ListDomainsRequest {
    /**
     * <p>The ARN of the fleet.</p>
     */
    FleetArn: string | undefined;
    /**
     * <p>The pagination token used to retrieve the next page of results for this operation. If
     *             this value is null, it retrieves the first page.</p>
     */
    NextToken?: string;
    /**
     * <p>The maximum number of results to be included in the next page.</p>
     */
    MaxResults?: number;
}
export declare namespace ListDomainsRequest {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: ListDomainsRequest) => any;
}
export interface ListDomainsResponse {
    /**
     * <p>Information about the domains.</p>
     */
    Domains?: DomainSummary[];
    /**
     * <p>The pagination token used to retrieve the next page of results for this operation. If
     *             there are no more pages, this value is null.</p>
     */
    NextToken?: string;
}
export declare namespace ListDomainsResponse {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: ListDomainsResponse) => any;
}
export interface ListFleetsRequest {
    /**
     * <p>The pagination token used to retrieve the next page of results for this operation. If
     *             this value is null, it retrieves the first page.</p>
     */
    NextToken?: string;
    /**
     * <p>The maximum number of results to be included in the next page.</p>
     */
    MaxResults?: number;
}
export declare namespace ListFleetsRequest {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: ListFleetsRequest) => any;
}
export interface ListFleetsResponse {
    /**
     * <p>The summary list of the fleets.</p>
     */
    FleetSummaryList?: FleetSummary[];
    /**
     * <p>The pagination token used to retrieve the next page of results for this operation. If
     *             there are no more pages, this value is null.</p>
     */
    NextToken?: string;
}
export declare namespace ListFleetsResponse {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: ListFleetsResponse) => any;
}
export interface ListTagsForResourceRequest {
    /**
     * <p>The Amazon Resource Name (ARN) of the fleet.</p>
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
     * <p>The tags attached to the resource. A tag is a key-value pair.</p>
     */
    Tags?: {
        [key: string]: string;
    };
}
export declare namespace ListTagsForResourceResponse {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: ListTagsForResourceResponse) => any;
}
export interface ListWebsiteAuthorizationProvidersRequest {
    /**
     * <p>The ARN of the fleet.</p>
     */
    FleetArn: string | undefined;
    /**
     * <p>The pagination token to use to retrieve the next page of results for this operation. If this value is null, it retrieves the first page.</p>
     */
    NextToken?: string;
    /**
     * <p>The maximum number of results to be included in the next page.</p>
     */
    MaxResults?: number;
}
export declare namespace ListWebsiteAuthorizationProvidersRequest {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: ListWebsiteAuthorizationProvidersRequest) => any;
}
/**
 * <p>The summary of the website authorization provider.</p>
 */
export interface WebsiteAuthorizationProviderSummary {
    /**
     * <p>A unique identifier for the authorization provider.</p>
     */
    AuthorizationProviderId?: string;
    /**
     * <p>The authorization provider type.</p>
     */
    AuthorizationProviderType: AuthorizationProviderType | string | undefined;
    /**
     * <p>The domain name of the authorization provider. This applies only to SAML-based
     *             authorization providers.</p>
     */
    DomainName?: string;
    /**
     * <p>The time of creation.</p>
     */
    CreatedTime?: Date;
}
export declare namespace WebsiteAuthorizationProviderSummary {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: WebsiteAuthorizationProviderSummary) => any;
}
export interface ListWebsiteAuthorizationProvidersResponse {
    /**
     * <p>The website authorization providers.</p>
     */
    WebsiteAuthorizationProviders?: WebsiteAuthorizationProviderSummary[];
    /**
     * <p>The pagination token to use to retrieve the next page of results for this operation. If this value is null, it retrieves the first page.</p>
     */
    NextToken?: string;
}
export declare namespace ListWebsiteAuthorizationProvidersResponse {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: ListWebsiteAuthorizationProvidersResponse) => any;
}
export interface ListWebsiteCertificateAuthoritiesRequest {
    /**
     * <p>The ARN of the fleet.</p>
     */
    FleetArn: string | undefined;
    /**
     * <p>The maximum number of results to be included in the next page.</p>
     */
    MaxResults?: number;
    /**
     * <p>The pagination token used to retrieve the next page of results for this operation. If
     *             this value is null, it retrieves the first page.</p>
     */
    NextToken?: string;
}
export declare namespace ListWebsiteCertificateAuthoritiesRequest {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: ListWebsiteCertificateAuthoritiesRequest) => any;
}
/**
 * <p>The summary of the certificate authority (CA).</p>
 */
export interface WebsiteCaSummary {
    /**
     * <p>A unique identifier for the CA.</p>
     */
    WebsiteCaId?: string;
    /**
     * <p>The time when the CA was added.</p>
     */
    CreatedTime?: Date;
    /**
     * <p>The name to display.</p>
     */
    DisplayName?: string;
}
export declare namespace WebsiteCaSummary {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: WebsiteCaSummary) => any;
}
export interface ListWebsiteCertificateAuthoritiesResponse {
    /**
     * <p>Information about the certificates.</p>
     */
    WebsiteCertificateAuthorities?: WebsiteCaSummary[];
    /**
     * <p>The pagination token used to retrieve the next page of results for this operation. If
     *             there are no more pages, this value is null.</p>
     */
    NextToken?: string;
}
export declare namespace ListWebsiteCertificateAuthoritiesResponse {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: ListWebsiteCertificateAuthoritiesResponse) => any;
}
export interface RestoreDomainAccessRequest {
    /**
     * <p>The ARN of the fleet.</p>
     */
    FleetArn: string | undefined;
    /**
     * <p>The name of the domain.</p>
     */
    DomainName: string | undefined;
}
export declare namespace RestoreDomainAccessRequest {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: RestoreDomainAccessRequest) => any;
}
export interface RestoreDomainAccessResponse {
}
export declare namespace RestoreDomainAccessResponse {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: RestoreDomainAccessResponse) => any;
}
export interface RevokeDomainAccessRequest {
    /**
     * <p>The ARN of the fleet.</p>
     */
    FleetArn: string | undefined;
    /**
     * <p>The name of the domain.</p>
     */
    DomainName: string | undefined;
}
export declare namespace RevokeDomainAccessRequest {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: RevokeDomainAccessRequest) => any;
}
export interface RevokeDomainAccessResponse {
}
export declare namespace RevokeDomainAccessResponse {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: RevokeDomainAccessResponse) => any;
}
export interface SignOutUserRequest {
    /**
     * <p>The ARN of the fleet.</p>
     */
    FleetArn: string | undefined;
    /**
     * <p>The name of the user.</p>
     */
    Username: string | undefined;
}
export declare namespace SignOutUserRequest {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: SignOutUserRequest) => any;
}
export interface SignOutUserResponse {
}
export declare namespace SignOutUserResponse {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: SignOutUserResponse) => any;
}
export interface TagResourceRequest {
    /**
     * <p>The Amazon Resource Name (ARN) of the fleet.</p>
     */
    ResourceArn: string | undefined;
    /**
     * <p>The tags to add to the resource. A tag is a key-value pair.</p>
     */
    Tags: {
        [key: string]: string;
    } | undefined;
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
     * <p>The Amazon Resource Name (ARN) of the fleet.</p>
     */
    ResourceArn: string | undefined;
    /**
     * <p>The list of tag keys to remove from the resource.</p>
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
export interface UpdateAuditStreamConfigurationRequest {
    /**
     * <p>The ARN of the fleet.</p>
     */
    FleetArn: string | undefined;
    /**
     * <p>The ARN of the Amazon Kinesis data stream that receives the audit events.</p>
     */
    AuditStreamArn?: string;
}
export declare namespace UpdateAuditStreamConfigurationRequest {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: UpdateAuditStreamConfigurationRequest) => any;
}
export interface UpdateAuditStreamConfigurationResponse {
}
export declare namespace UpdateAuditStreamConfigurationResponse {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: UpdateAuditStreamConfigurationResponse) => any;
}
export interface UpdateCompanyNetworkConfigurationRequest {
    /**
     * <p>The ARN of the fleet.</p>
     */
    FleetArn: string | undefined;
    /**
     * <p>The VPC with connectivity to associated websites.</p>
     */
    VpcId: string | undefined;
    /**
     * <p>The subnets used for X-ENI connections from Amazon WorkLink rendering containers.</p>
     */
    SubnetIds: string[] | undefined;
    /**
     * <p>The security groups associated with access to the provided subnets.</p>
     */
    SecurityGroupIds: string[] | undefined;
}
export declare namespace UpdateCompanyNetworkConfigurationRequest {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: UpdateCompanyNetworkConfigurationRequest) => any;
}
export interface UpdateCompanyNetworkConfigurationResponse {
}
export declare namespace UpdateCompanyNetworkConfigurationResponse {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: UpdateCompanyNetworkConfigurationResponse) => any;
}
export interface UpdateDevicePolicyConfigurationRequest {
    /**
     * <p>The ARN of the fleet.</p>
     */
    FleetArn: string | undefined;
    /**
     * <p>The certificate chain, including intermediate certificates and the root certificate authority certificate used to issue device certificates.</p>
     */
    DeviceCaCertificate?: string;
}
export declare namespace UpdateDevicePolicyConfigurationRequest {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: UpdateDevicePolicyConfigurationRequest) => any;
}
export interface UpdateDevicePolicyConfigurationResponse {
}
export declare namespace UpdateDevicePolicyConfigurationResponse {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: UpdateDevicePolicyConfigurationResponse) => any;
}
export interface UpdateDomainMetadataRequest {
    /**
     * <p>The ARN of the fleet.</p>
     */
    FleetArn: string | undefined;
    /**
     * <p>The name of the domain.</p>
     */
    DomainName: string | undefined;
    /**
     * <p>The name to display.</p>
     */
    DisplayName?: string;
}
export declare namespace UpdateDomainMetadataRequest {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: UpdateDomainMetadataRequest) => any;
}
export interface UpdateDomainMetadataResponse {
}
export declare namespace UpdateDomainMetadataResponse {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: UpdateDomainMetadataResponse) => any;
}
export interface UpdateFleetMetadataRequest {
    /**
     * <p>The ARN of the fleet.</p>
     */
    FleetArn: string | undefined;
    /**
     * <p>The fleet name to display. The existing DisplayName is unset if null is passed.</p>
     */
    DisplayName?: string;
    /**
     * <p>The option to optimize for better performance by routing traffic through the closest
     *             AWS Region to users, which may be outside of your home Region.</p>
     */
    OptimizeForEndUserLocation?: boolean;
}
export declare namespace UpdateFleetMetadataRequest {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: UpdateFleetMetadataRequest) => any;
}
export interface UpdateFleetMetadataResponse {
}
export declare namespace UpdateFleetMetadataResponse {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: UpdateFleetMetadataResponse) => any;
}
export interface UpdateIdentityProviderConfigurationRequest {
    /**
     * <p>The ARN of the fleet.</p>
     */
    FleetArn: string | undefined;
    /**
     * <p>The type of identity provider.</p>
     */
    IdentityProviderType: IdentityProviderType | string | undefined;
    /**
     * <p>The SAML metadata document provided by the customer’s identity provider. The existing
     *             IdentityProviderSamlMetadata is unset if null is passed.</p>
     */
    IdentityProviderSamlMetadata?: string;
}
export declare namespace UpdateIdentityProviderConfigurationRequest {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: UpdateIdentityProviderConfigurationRequest) => any;
}
export interface UpdateIdentityProviderConfigurationResponse {
}
export declare namespace UpdateIdentityProviderConfigurationResponse {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: UpdateIdentityProviderConfigurationResponse) => any;
}
