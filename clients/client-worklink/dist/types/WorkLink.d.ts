import { WorkLinkClient } from "./WorkLinkClient";
import { AssociateDomainCommandInput, AssociateDomainCommandOutput } from "./commands/AssociateDomainCommand";
import { AssociateWebsiteAuthorizationProviderCommandInput, AssociateWebsiteAuthorizationProviderCommandOutput } from "./commands/AssociateWebsiteAuthorizationProviderCommand";
import { AssociateWebsiteCertificateAuthorityCommandInput, AssociateWebsiteCertificateAuthorityCommandOutput } from "./commands/AssociateWebsiteCertificateAuthorityCommand";
import { CreateFleetCommandInput, CreateFleetCommandOutput } from "./commands/CreateFleetCommand";
import { DeleteFleetCommandInput, DeleteFleetCommandOutput } from "./commands/DeleteFleetCommand";
import { DescribeAuditStreamConfigurationCommandInput, DescribeAuditStreamConfigurationCommandOutput } from "./commands/DescribeAuditStreamConfigurationCommand";
import { DescribeCompanyNetworkConfigurationCommandInput, DescribeCompanyNetworkConfigurationCommandOutput } from "./commands/DescribeCompanyNetworkConfigurationCommand";
import { DescribeDeviceCommandInput, DescribeDeviceCommandOutput } from "./commands/DescribeDeviceCommand";
import { DescribeDevicePolicyConfigurationCommandInput, DescribeDevicePolicyConfigurationCommandOutput } from "./commands/DescribeDevicePolicyConfigurationCommand";
import { DescribeDomainCommandInput, DescribeDomainCommandOutput } from "./commands/DescribeDomainCommand";
import { DescribeFleetMetadataCommandInput, DescribeFleetMetadataCommandOutput } from "./commands/DescribeFleetMetadataCommand";
import { DescribeIdentityProviderConfigurationCommandInput, DescribeIdentityProviderConfigurationCommandOutput } from "./commands/DescribeIdentityProviderConfigurationCommand";
import { DescribeWebsiteCertificateAuthorityCommandInput, DescribeWebsiteCertificateAuthorityCommandOutput } from "./commands/DescribeWebsiteCertificateAuthorityCommand";
import { DisassociateDomainCommandInput, DisassociateDomainCommandOutput } from "./commands/DisassociateDomainCommand";
import { DisassociateWebsiteAuthorizationProviderCommandInput, DisassociateWebsiteAuthorizationProviderCommandOutput } from "./commands/DisassociateWebsiteAuthorizationProviderCommand";
import { DisassociateWebsiteCertificateAuthorityCommandInput, DisassociateWebsiteCertificateAuthorityCommandOutput } from "./commands/DisassociateWebsiteCertificateAuthorityCommand";
import { ListDevicesCommandInput, ListDevicesCommandOutput } from "./commands/ListDevicesCommand";
import { ListDomainsCommandInput, ListDomainsCommandOutput } from "./commands/ListDomainsCommand";
import { ListFleetsCommandInput, ListFleetsCommandOutput } from "./commands/ListFleetsCommand";
import { ListTagsForResourceCommandInput, ListTagsForResourceCommandOutput } from "./commands/ListTagsForResourceCommand";
import { ListWebsiteAuthorizationProvidersCommandInput, ListWebsiteAuthorizationProvidersCommandOutput } from "./commands/ListWebsiteAuthorizationProvidersCommand";
import { ListWebsiteCertificateAuthoritiesCommandInput, ListWebsiteCertificateAuthoritiesCommandOutput } from "./commands/ListWebsiteCertificateAuthoritiesCommand";
import { RestoreDomainAccessCommandInput, RestoreDomainAccessCommandOutput } from "./commands/RestoreDomainAccessCommand";
import { RevokeDomainAccessCommandInput, RevokeDomainAccessCommandOutput } from "./commands/RevokeDomainAccessCommand";
import { SignOutUserCommandInput, SignOutUserCommandOutput } from "./commands/SignOutUserCommand";
import { TagResourceCommandInput, TagResourceCommandOutput } from "./commands/TagResourceCommand";
import { UntagResourceCommandInput, UntagResourceCommandOutput } from "./commands/UntagResourceCommand";
import { UpdateAuditStreamConfigurationCommandInput, UpdateAuditStreamConfigurationCommandOutput } from "./commands/UpdateAuditStreamConfigurationCommand";
import { UpdateCompanyNetworkConfigurationCommandInput, UpdateCompanyNetworkConfigurationCommandOutput } from "./commands/UpdateCompanyNetworkConfigurationCommand";
import { UpdateDevicePolicyConfigurationCommandInput, UpdateDevicePolicyConfigurationCommandOutput } from "./commands/UpdateDevicePolicyConfigurationCommand";
import { UpdateDomainMetadataCommandInput, UpdateDomainMetadataCommandOutput } from "./commands/UpdateDomainMetadataCommand";
import { UpdateFleetMetadataCommandInput, UpdateFleetMetadataCommandOutput } from "./commands/UpdateFleetMetadataCommand";
import { UpdateIdentityProviderConfigurationCommandInput, UpdateIdentityProviderConfigurationCommandOutput } from "./commands/UpdateIdentityProviderConfigurationCommand";
import { HttpHandlerOptions as __HttpHandlerOptions } from "@aws-sdk/types";
/**
 * <p>Amazon WorkLink is a cloud-based service that provides secure access
 *             to internal websites and web apps from iOS and Android phones. In a single step, your users, such as
 *             employees, can access internal websites as efficiently as they access any other public website.
 *             They enter a URL in their web browser, or choose a link to an internal website in an email. Amazon WorkLink
 *             authenticates the user's access and securely renders authorized internal web content in a secure
 *             rendering service in the AWS cloud. Amazon WorkLink doesn't download or store any internal web content on
 *             mobile devices.</p>
 */
export declare class WorkLink extends WorkLinkClient {
    /**
     * <p>Specifies a domain to be associated to Amazon WorkLink.</p>
     */
    associateDomain(args: AssociateDomainCommandInput, options?: __HttpHandlerOptions): Promise<AssociateDomainCommandOutput>;
    associateDomain(args: AssociateDomainCommandInput, cb: (err: any, data?: AssociateDomainCommandOutput) => void): void;
    associateDomain(args: AssociateDomainCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: AssociateDomainCommandOutput) => void): void;
    /**
     * <p>Associates a website authorization provider with a specified fleet. This is used to authorize users against associated websites in the company network.</p>
     */
    associateWebsiteAuthorizationProvider(args: AssociateWebsiteAuthorizationProviderCommandInput, options?: __HttpHandlerOptions): Promise<AssociateWebsiteAuthorizationProviderCommandOutput>;
    associateWebsiteAuthorizationProvider(args: AssociateWebsiteAuthorizationProviderCommandInput, cb: (err: any, data?: AssociateWebsiteAuthorizationProviderCommandOutput) => void): void;
    associateWebsiteAuthorizationProvider(args: AssociateWebsiteAuthorizationProviderCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: AssociateWebsiteAuthorizationProviderCommandOutput) => void): void;
    /**
     * <p>Imports the root certificate of a certificate authority (CA) used to obtain TLS
     *             certificates used by associated websites within the company network.</p>
     */
    associateWebsiteCertificateAuthority(args: AssociateWebsiteCertificateAuthorityCommandInput, options?: __HttpHandlerOptions): Promise<AssociateWebsiteCertificateAuthorityCommandOutput>;
    associateWebsiteCertificateAuthority(args: AssociateWebsiteCertificateAuthorityCommandInput, cb: (err: any, data?: AssociateWebsiteCertificateAuthorityCommandOutput) => void): void;
    associateWebsiteCertificateAuthority(args: AssociateWebsiteCertificateAuthorityCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: AssociateWebsiteCertificateAuthorityCommandOutput) => void): void;
    /**
     * <p>Creates a fleet. A fleet consists of resources and the configuration that delivers
     *             associated websites to authorized users who download and set up the Amazon WorkLink app.</p>
     */
    createFleet(args: CreateFleetCommandInput, options?: __HttpHandlerOptions): Promise<CreateFleetCommandOutput>;
    createFleet(args: CreateFleetCommandInput, cb: (err: any, data?: CreateFleetCommandOutput) => void): void;
    createFleet(args: CreateFleetCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: CreateFleetCommandOutput) => void): void;
    /**
     * <p>Deletes a fleet. Prevents users from accessing previously associated websites. </p>
     */
    deleteFleet(args: DeleteFleetCommandInput, options?: __HttpHandlerOptions): Promise<DeleteFleetCommandOutput>;
    deleteFleet(args: DeleteFleetCommandInput, cb: (err: any, data?: DeleteFleetCommandOutput) => void): void;
    deleteFleet(args: DeleteFleetCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: DeleteFleetCommandOutput) => void): void;
    /**
     * <p>Describes the configuration for delivering audit streams to the customer account.</p>
     */
    describeAuditStreamConfiguration(args: DescribeAuditStreamConfigurationCommandInput, options?: __HttpHandlerOptions): Promise<DescribeAuditStreamConfigurationCommandOutput>;
    describeAuditStreamConfiguration(args: DescribeAuditStreamConfigurationCommandInput, cb: (err: any, data?: DescribeAuditStreamConfigurationCommandOutput) => void): void;
    describeAuditStreamConfiguration(args: DescribeAuditStreamConfigurationCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: DescribeAuditStreamConfigurationCommandOutput) => void): void;
    /**
     * <p>Describes the networking configuration to access the internal websites associated with
     *             the specified fleet.</p>
     */
    describeCompanyNetworkConfiguration(args: DescribeCompanyNetworkConfigurationCommandInput, options?: __HttpHandlerOptions): Promise<DescribeCompanyNetworkConfigurationCommandOutput>;
    describeCompanyNetworkConfiguration(args: DescribeCompanyNetworkConfigurationCommandInput, cb: (err: any, data?: DescribeCompanyNetworkConfigurationCommandOutput) => void): void;
    describeCompanyNetworkConfiguration(args: DescribeCompanyNetworkConfigurationCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: DescribeCompanyNetworkConfigurationCommandOutput) => void): void;
    /**
     * <p>Provides information about a user's device.</p>
     */
    describeDevice(args: DescribeDeviceCommandInput, options?: __HttpHandlerOptions): Promise<DescribeDeviceCommandOutput>;
    describeDevice(args: DescribeDeviceCommandInput, cb: (err: any, data?: DescribeDeviceCommandOutput) => void): void;
    describeDevice(args: DescribeDeviceCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: DescribeDeviceCommandOutput) => void): void;
    /**
     * <p>Describes the device policy configuration for the specified fleet.</p>
     */
    describeDevicePolicyConfiguration(args: DescribeDevicePolicyConfigurationCommandInput, options?: __HttpHandlerOptions): Promise<DescribeDevicePolicyConfigurationCommandOutput>;
    describeDevicePolicyConfiguration(args: DescribeDevicePolicyConfigurationCommandInput, cb: (err: any, data?: DescribeDevicePolicyConfigurationCommandOutput) => void): void;
    describeDevicePolicyConfiguration(args: DescribeDevicePolicyConfigurationCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: DescribeDevicePolicyConfigurationCommandOutput) => void): void;
    /**
     * <p>Provides information about the domain.</p>
     */
    describeDomain(args: DescribeDomainCommandInput, options?: __HttpHandlerOptions): Promise<DescribeDomainCommandOutput>;
    describeDomain(args: DescribeDomainCommandInput, cb: (err: any, data?: DescribeDomainCommandOutput) => void): void;
    describeDomain(args: DescribeDomainCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: DescribeDomainCommandOutput) => void): void;
    /**
     * <p>Provides basic information for the specified fleet, excluding identity provider,
     *             networking, and device configuration details.</p>
     */
    describeFleetMetadata(args: DescribeFleetMetadataCommandInput, options?: __HttpHandlerOptions): Promise<DescribeFleetMetadataCommandOutput>;
    describeFleetMetadata(args: DescribeFleetMetadataCommandInput, cb: (err: any, data?: DescribeFleetMetadataCommandOutput) => void): void;
    describeFleetMetadata(args: DescribeFleetMetadataCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: DescribeFleetMetadataCommandOutput) => void): void;
    /**
     * <p>Describes the identity provider configuration of the specified fleet.</p>
     */
    describeIdentityProviderConfiguration(args: DescribeIdentityProviderConfigurationCommandInput, options?: __HttpHandlerOptions): Promise<DescribeIdentityProviderConfigurationCommandOutput>;
    describeIdentityProviderConfiguration(args: DescribeIdentityProviderConfigurationCommandInput, cb: (err: any, data?: DescribeIdentityProviderConfigurationCommandOutput) => void): void;
    describeIdentityProviderConfiguration(args: DescribeIdentityProviderConfigurationCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: DescribeIdentityProviderConfigurationCommandOutput) => void): void;
    /**
     * <p>Provides information about the certificate authority.</p>
     */
    describeWebsiteCertificateAuthority(args: DescribeWebsiteCertificateAuthorityCommandInput, options?: __HttpHandlerOptions): Promise<DescribeWebsiteCertificateAuthorityCommandOutput>;
    describeWebsiteCertificateAuthority(args: DescribeWebsiteCertificateAuthorityCommandInput, cb: (err: any, data?: DescribeWebsiteCertificateAuthorityCommandOutput) => void): void;
    describeWebsiteCertificateAuthority(args: DescribeWebsiteCertificateAuthorityCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: DescribeWebsiteCertificateAuthorityCommandOutput) => void): void;
    /**
     * <p>Disassociates a domain from Amazon WorkLink. End users lose the ability to access the domain with Amazon WorkLink. </p>
     */
    disassociateDomain(args: DisassociateDomainCommandInput, options?: __HttpHandlerOptions): Promise<DisassociateDomainCommandOutput>;
    disassociateDomain(args: DisassociateDomainCommandInput, cb: (err: any, data?: DisassociateDomainCommandOutput) => void): void;
    disassociateDomain(args: DisassociateDomainCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: DisassociateDomainCommandOutput) => void): void;
    /**
     * <p>Disassociates a website authorization provider from a specified fleet. After the
     *             disassociation, users can't load any associated websites that require this authorization
     *             provider.</p>
     */
    disassociateWebsiteAuthorizationProvider(args: DisassociateWebsiteAuthorizationProviderCommandInput, options?: __HttpHandlerOptions): Promise<DisassociateWebsiteAuthorizationProviderCommandOutput>;
    disassociateWebsiteAuthorizationProvider(args: DisassociateWebsiteAuthorizationProviderCommandInput, cb: (err: any, data?: DisassociateWebsiteAuthorizationProviderCommandOutput) => void): void;
    disassociateWebsiteAuthorizationProvider(args: DisassociateWebsiteAuthorizationProviderCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: DisassociateWebsiteAuthorizationProviderCommandOutput) => void): void;
    /**
     * <p>Removes a certificate authority (CA).</p>
     */
    disassociateWebsiteCertificateAuthority(args: DisassociateWebsiteCertificateAuthorityCommandInput, options?: __HttpHandlerOptions): Promise<DisassociateWebsiteCertificateAuthorityCommandOutput>;
    disassociateWebsiteCertificateAuthority(args: DisassociateWebsiteCertificateAuthorityCommandInput, cb: (err: any, data?: DisassociateWebsiteCertificateAuthorityCommandOutput) => void): void;
    disassociateWebsiteCertificateAuthority(args: DisassociateWebsiteCertificateAuthorityCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: DisassociateWebsiteCertificateAuthorityCommandOutput) => void): void;
    /**
     * <p>Retrieves a list of devices registered with the specified fleet.</p>
     */
    listDevices(args: ListDevicesCommandInput, options?: __HttpHandlerOptions): Promise<ListDevicesCommandOutput>;
    listDevices(args: ListDevicesCommandInput, cb: (err: any, data?: ListDevicesCommandOutput) => void): void;
    listDevices(args: ListDevicesCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: ListDevicesCommandOutput) => void): void;
    /**
     * <p>Retrieves a list of domains associated to a specified fleet.</p>
     */
    listDomains(args: ListDomainsCommandInput, options?: __HttpHandlerOptions): Promise<ListDomainsCommandOutput>;
    listDomains(args: ListDomainsCommandInput, cb: (err: any, data?: ListDomainsCommandOutput) => void): void;
    listDomains(args: ListDomainsCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: ListDomainsCommandOutput) => void): void;
    /**
     * <p>Retrieves a list of fleets for the current account and Region.</p>
     */
    listFleets(args: ListFleetsCommandInput, options?: __HttpHandlerOptions): Promise<ListFleetsCommandOutput>;
    listFleets(args: ListFleetsCommandInput, cb: (err: any, data?: ListFleetsCommandOutput) => void): void;
    listFleets(args: ListFleetsCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: ListFleetsCommandOutput) => void): void;
    /**
     * <p>Retrieves a list of tags for the specified resource.</p>
     */
    listTagsForResource(args: ListTagsForResourceCommandInput, options?: __HttpHandlerOptions): Promise<ListTagsForResourceCommandOutput>;
    listTagsForResource(args: ListTagsForResourceCommandInput, cb: (err: any, data?: ListTagsForResourceCommandOutput) => void): void;
    listTagsForResource(args: ListTagsForResourceCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: ListTagsForResourceCommandOutput) => void): void;
    /**
     * <p>Retrieves a list of website authorization providers associated with a specified fleet.</p>
     */
    listWebsiteAuthorizationProviders(args: ListWebsiteAuthorizationProvidersCommandInput, options?: __HttpHandlerOptions): Promise<ListWebsiteAuthorizationProvidersCommandOutput>;
    listWebsiteAuthorizationProviders(args: ListWebsiteAuthorizationProvidersCommandInput, cb: (err: any, data?: ListWebsiteAuthorizationProvidersCommandOutput) => void): void;
    listWebsiteAuthorizationProviders(args: ListWebsiteAuthorizationProvidersCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: ListWebsiteAuthorizationProvidersCommandOutput) => void): void;
    /**
     * <p>Retrieves a list of certificate authorities added for the current account and
     *             Region.</p>
     */
    listWebsiteCertificateAuthorities(args: ListWebsiteCertificateAuthoritiesCommandInput, options?: __HttpHandlerOptions): Promise<ListWebsiteCertificateAuthoritiesCommandOutput>;
    listWebsiteCertificateAuthorities(args: ListWebsiteCertificateAuthoritiesCommandInput, cb: (err: any, data?: ListWebsiteCertificateAuthoritiesCommandOutput) => void): void;
    listWebsiteCertificateAuthorities(args: ListWebsiteCertificateAuthoritiesCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: ListWebsiteCertificateAuthoritiesCommandOutput) => void): void;
    /**
     * <p>Moves a domain to ACTIVE status if it was in the INACTIVE status.</p>
     */
    restoreDomainAccess(args: RestoreDomainAccessCommandInput, options?: __HttpHandlerOptions): Promise<RestoreDomainAccessCommandOutput>;
    restoreDomainAccess(args: RestoreDomainAccessCommandInput, cb: (err: any, data?: RestoreDomainAccessCommandOutput) => void): void;
    restoreDomainAccess(args: RestoreDomainAccessCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: RestoreDomainAccessCommandOutput) => void): void;
    /**
     * <p>Moves a domain to INACTIVE status if it was in the ACTIVE status.</p>
     */
    revokeDomainAccess(args: RevokeDomainAccessCommandInput, options?: __HttpHandlerOptions): Promise<RevokeDomainAccessCommandOutput>;
    revokeDomainAccess(args: RevokeDomainAccessCommandInput, cb: (err: any, data?: RevokeDomainAccessCommandOutput) => void): void;
    revokeDomainAccess(args: RevokeDomainAccessCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: RevokeDomainAccessCommandOutput) => void): void;
    /**
     * <p>Signs the user out from all of their devices. The user can sign in again if they have
     *             valid credentials.</p>
     */
    signOutUser(args: SignOutUserCommandInput, options?: __HttpHandlerOptions): Promise<SignOutUserCommandOutput>;
    signOutUser(args: SignOutUserCommandInput, cb: (err: any, data?: SignOutUserCommandOutput) => void): void;
    signOutUser(args: SignOutUserCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: SignOutUserCommandOutput) => void): void;
    /**
     * <p>Adds or overwrites one or more tags for the specified resource, such as a fleet. Each tag consists of a key and an optional value. If a resource already has a tag with the same key, this operation updates its value.</p>
     */
    tagResource(args: TagResourceCommandInput, options?: __HttpHandlerOptions): Promise<TagResourceCommandOutput>;
    tagResource(args: TagResourceCommandInput, cb: (err: any, data?: TagResourceCommandOutput) => void): void;
    tagResource(args: TagResourceCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: TagResourceCommandOutput) => void): void;
    /**
     * <p>Removes one or more tags from the specified resource.</p>
     */
    untagResource(args: UntagResourceCommandInput, options?: __HttpHandlerOptions): Promise<UntagResourceCommandOutput>;
    untagResource(args: UntagResourceCommandInput, cb: (err: any, data?: UntagResourceCommandOutput) => void): void;
    untagResource(args: UntagResourceCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: UntagResourceCommandOutput) => void): void;
    /**
     * <p>Updates the audit stream configuration for the fleet.</p>
     */
    updateAuditStreamConfiguration(args: UpdateAuditStreamConfigurationCommandInput, options?: __HttpHandlerOptions): Promise<UpdateAuditStreamConfigurationCommandOutput>;
    updateAuditStreamConfiguration(args: UpdateAuditStreamConfigurationCommandInput, cb: (err: any, data?: UpdateAuditStreamConfigurationCommandOutput) => void): void;
    updateAuditStreamConfiguration(args: UpdateAuditStreamConfigurationCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: UpdateAuditStreamConfigurationCommandOutput) => void): void;
    /**
     * <p>Updates the company network configuration for the fleet.</p>
     */
    updateCompanyNetworkConfiguration(args: UpdateCompanyNetworkConfigurationCommandInput, options?: __HttpHandlerOptions): Promise<UpdateCompanyNetworkConfigurationCommandOutput>;
    updateCompanyNetworkConfiguration(args: UpdateCompanyNetworkConfigurationCommandInput, cb: (err: any, data?: UpdateCompanyNetworkConfigurationCommandOutput) => void): void;
    updateCompanyNetworkConfiguration(args: UpdateCompanyNetworkConfigurationCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: UpdateCompanyNetworkConfigurationCommandOutput) => void): void;
    /**
     * <p>Updates the device policy configuration for the fleet.</p>
     */
    updateDevicePolicyConfiguration(args: UpdateDevicePolicyConfigurationCommandInput, options?: __HttpHandlerOptions): Promise<UpdateDevicePolicyConfigurationCommandOutput>;
    updateDevicePolicyConfiguration(args: UpdateDevicePolicyConfigurationCommandInput, cb: (err: any, data?: UpdateDevicePolicyConfigurationCommandOutput) => void): void;
    updateDevicePolicyConfiguration(args: UpdateDevicePolicyConfigurationCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: UpdateDevicePolicyConfigurationCommandOutput) => void): void;
    /**
     * <p>Updates domain metadata, such as DisplayName.</p>
     */
    updateDomainMetadata(args: UpdateDomainMetadataCommandInput, options?: __HttpHandlerOptions): Promise<UpdateDomainMetadataCommandOutput>;
    updateDomainMetadata(args: UpdateDomainMetadataCommandInput, cb: (err: any, data?: UpdateDomainMetadataCommandOutput) => void): void;
    updateDomainMetadata(args: UpdateDomainMetadataCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: UpdateDomainMetadataCommandOutput) => void): void;
    /**
     * <p>Updates fleet metadata, such as DisplayName.</p>
     */
    updateFleetMetadata(args: UpdateFleetMetadataCommandInput, options?: __HttpHandlerOptions): Promise<UpdateFleetMetadataCommandOutput>;
    updateFleetMetadata(args: UpdateFleetMetadataCommandInput, cb: (err: any, data?: UpdateFleetMetadataCommandOutput) => void): void;
    updateFleetMetadata(args: UpdateFleetMetadataCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: UpdateFleetMetadataCommandOutput) => void): void;
    /**
     * <p>Updates the identity provider configuration for the fleet.</p>
     */
    updateIdentityProviderConfiguration(args: UpdateIdentityProviderConfigurationCommandInput, options?: __HttpHandlerOptions): Promise<UpdateIdentityProviderConfigurationCommandOutput>;
    updateIdentityProviderConfiguration(args: UpdateIdentityProviderConfigurationCommandInput, cb: (err: any, data?: UpdateIdentityProviderConfigurationCommandOutput) => void): void;
    updateIdentityProviderConfiguration(args: UpdateIdentityProviderConfigurationCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: UpdateIdentityProviderConfigurationCommandOutput) => void): void;
}
