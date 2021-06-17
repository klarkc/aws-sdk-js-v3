import { ElasticsearchServiceClient } from "./ElasticsearchServiceClient";
import { AcceptInboundCrossClusterSearchConnectionCommandInput, AcceptInboundCrossClusterSearchConnectionCommandOutput } from "./commands/AcceptInboundCrossClusterSearchConnectionCommand";
import { AddTagsCommandInput, AddTagsCommandOutput } from "./commands/AddTagsCommand";
import { AssociatePackageCommandInput, AssociatePackageCommandOutput } from "./commands/AssociatePackageCommand";
import { CancelElasticsearchServiceSoftwareUpdateCommandInput, CancelElasticsearchServiceSoftwareUpdateCommandOutput } from "./commands/CancelElasticsearchServiceSoftwareUpdateCommand";
import { CreateElasticsearchDomainCommandInput, CreateElasticsearchDomainCommandOutput } from "./commands/CreateElasticsearchDomainCommand";
import { CreateOutboundCrossClusterSearchConnectionCommandInput, CreateOutboundCrossClusterSearchConnectionCommandOutput } from "./commands/CreateOutboundCrossClusterSearchConnectionCommand";
import { CreatePackageCommandInput, CreatePackageCommandOutput } from "./commands/CreatePackageCommand";
import { DeleteElasticsearchDomainCommandInput, DeleteElasticsearchDomainCommandOutput } from "./commands/DeleteElasticsearchDomainCommand";
import { DeleteElasticsearchServiceRoleCommandInput, DeleteElasticsearchServiceRoleCommandOutput } from "./commands/DeleteElasticsearchServiceRoleCommand";
import { DeleteInboundCrossClusterSearchConnectionCommandInput, DeleteInboundCrossClusterSearchConnectionCommandOutput } from "./commands/DeleteInboundCrossClusterSearchConnectionCommand";
import { DeleteOutboundCrossClusterSearchConnectionCommandInput, DeleteOutboundCrossClusterSearchConnectionCommandOutput } from "./commands/DeleteOutboundCrossClusterSearchConnectionCommand";
import { DeletePackageCommandInput, DeletePackageCommandOutput } from "./commands/DeletePackageCommand";
import { DescribeDomainAutoTunesCommandInput, DescribeDomainAutoTunesCommandOutput } from "./commands/DescribeDomainAutoTunesCommand";
import { DescribeElasticsearchDomainCommandInput, DescribeElasticsearchDomainCommandOutput } from "./commands/DescribeElasticsearchDomainCommand";
import { DescribeElasticsearchDomainConfigCommandInput, DescribeElasticsearchDomainConfigCommandOutput } from "./commands/DescribeElasticsearchDomainConfigCommand";
import { DescribeElasticsearchDomainsCommandInput, DescribeElasticsearchDomainsCommandOutput } from "./commands/DescribeElasticsearchDomainsCommand";
import { DescribeElasticsearchInstanceTypeLimitsCommandInput, DescribeElasticsearchInstanceTypeLimitsCommandOutput } from "./commands/DescribeElasticsearchInstanceTypeLimitsCommand";
import { DescribeInboundCrossClusterSearchConnectionsCommandInput, DescribeInboundCrossClusterSearchConnectionsCommandOutput } from "./commands/DescribeInboundCrossClusterSearchConnectionsCommand";
import { DescribeOutboundCrossClusterSearchConnectionsCommandInput, DescribeOutboundCrossClusterSearchConnectionsCommandOutput } from "./commands/DescribeOutboundCrossClusterSearchConnectionsCommand";
import { DescribePackagesCommandInput, DescribePackagesCommandOutput } from "./commands/DescribePackagesCommand";
import { DescribeReservedElasticsearchInstanceOfferingsCommandInput, DescribeReservedElasticsearchInstanceOfferingsCommandOutput } from "./commands/DescribeReservedElasticsearchInstanceOfferingsCommand";
import { DescribeReservedElasticsearchInstancesCommandInput, DescribeReservedElasticsearchInstancesCommandOutput } from "./commands/DescribeReservedElasticsearchInstancesCommand";
import { DissociatePackageCommandInput, DissociatePackageCommandOutput } from "./commands/DissociatePackageCommand";
import { GetCompatibleElasticsearchVersionsCommandInput, GetCompatibleElasticsearchVersionsCommandOutput } from "./commands/GetCompatibleElasticsearchVersionsCommand";
import { GetPackageVersionHistoryCommandInput, GetPackageVersionHistoryCommandOutput } from "./commands/GetPackageVersionHistoryCommand";
import { GetUpgradeHistoryCommandInput, GetUpgradeHistoryCommandOutput } from "./commands/GetUpgradeHistoryCommand";
import { GetUpgradeStatusCommandInput, GetUpgradeStatusCommandOutput } from "./commands/GetUpgradeStatusCommand";
import { ListDomainNamesCommandInput, ListDomainNamesCommandOutput } from "./commands/ListDomainNamesCommand";
import { ListDomainsForPackageCommandInput, ListDomainsForPackageCommandOutput } from "./commands/ListDomainsForPackageCommand";
import { ListElasticsearchInstanceTypesCommandInput, ListElasticsearchInstanceTypesCommandOutput } from "./commands/ListElasticsearchInstanceTypesCommand";
import { ListElasticsearchVersionsCommandInput, ListElasticsearchVersionsCommandOutput } from "./commands/ListElasticsearchVersionsCommand";
import { ListPackagesForDomainCommandInput, ListPackagesForDomainCommandOutput } from "./commands/ListPackagesForDomainCommand";
import { ListTagsCommandInput, ListTagsCommandOutput } from "./commands/ListTagsCommand";
import { PurchaseReservedElasticsearchInstanceOfferingCommandInput, PurchaseReservedElasticsearchInstanceOfferingCommandOutput } from "./commands/PurchaseReservedElasticsearchInstanceOfferingCommand";
import { RejectInboundCrossClusterSearchConnectionCommandInput, RejectInboundCrossClusterSearchConnectionCommandOutput } from "./commands/RejectInboundCrossClusterSearchConnectionCommand";
import { RemoveTagsCommandInput, RemoveTagsCommandOutput } from "./commands/RemoveTagsCommand";
import { StartElasticsearchServiceSoftwareUpdateCommandInput, StartElasticsearchServiceSoftwareUpdateCommandOutput } from "./commands/StartElasticsearchServiceSoftwareUpdateCommand";
import { UpdateElasticsearchDomainConfigCommandInput, UpdateElasticsearchDomainConfigCommandOutput } from "./commands/UpdateElasticsearchDomainConfigCommand";
import { UpdatePackageCommandInput, UpdatePackageCommandOutput } from "./commands/UpdatePackageCommand";
import { UpgradeElasticsearchDomainCommandInput, UpgradeElasticsearchDomainCommandOutput } from "./commands/UpgradeElasticsearchDomainCommand";
import { HttpHandlerOptions as __HttpHandlerOptions } from "@aws-sdk/types";
/**
 * <fullname>Amazon Elasticsearch Configuration Service</fullname>
 *       <p>Use the Amazon Elasticsearch Configuration API to create, configure, and manage Elasticsearch domains.</p>
 *       <p>For sample code that uses the Configuration API, see the <a href="https://docs.aws.amazon.com/elasticsearch-service/latest/developerguide/es-configuration-samples.html">Amazon Elasticsearch Service Developer Guide</a>.
 *       The guide also contains <a href="https://docs.aws.amazon.com/elasticsearch-service/latest/developerguide/es-request-signing.html">sample code for sending signed HTTP requests to the Elasticsearch APIs</a>.</p>
 *       <p>The endpoint for configuration service requests is region-specific: es.<i>region</i>.amazonaws.com.
 *          For example, es.us-east-1.amazonaws.com. For a current list of supported regions and endpoints,
 *          see <a href="http://docs.aws.amazon.com/general/latest/gr/rande.html#elasticsearch-service-regions" target="_blank">Regions and Endpoints</a>.</p>
 */
export declare class ElasticsearchService extends ElasticsearchServiceClient {
    /**
     * <p>Allows the destination domain owner to accept an inbound cross-cluster search connection request.</p>
     */
    acceptInboundCrossClusterSearchConnection(args: AcceptInboundCrossClusterSearchConnectionCommandInput, options?: __HttpHandlerOptions): Promise<AcceptInboundCrossClusterSearchConnectionCommandOutput>;
    acceptInboundCrossClusterSearchConnection(args: AcceptInboundCrossClusterSearchConnectionCommandInput, cb: (err: any, data?: AcceptInboundCrossClusterSearchConnectionCommandOutput) => void): void;
    acceptInboundCrossClusterSearchConnection(args: AcceptInboundCrossClusterSearchConnectionCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: AcceptInboundCrossClusterSearchConnectionCommandOutput) => void): void;
    /**
     * <p>Attaches tags to an existing Elasticsearch domain. Tags are a set of case-sensitive key value pairs. An Elasticsearch domain may have up to 10 tags.  See <a href="http://docs.aws.amazon.com/elasticsearch-service/latest/developerguide/es-managedomains.html#es-managedomains-awsresorcetagging" target="_blank">
     *           Tagging Amazon Elasticsearch Service Domains for more information.</a></p>
     */
    addTags(args: AddTagsCommandInput, options?: __HttpHandlerOptions): Promise<AddTagsCommandOutput>;
    addTags(args: AddTagsCommandInput, cb: (err: any, data?: AddTagsCommandOutput) => void): void;
    addTags(args: AddTagsCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: AddTagsCommandOutput) => void): void;
    /**
     * <p>Associates a package with an Amazon ES domain.</p>
     */
    associatePackage(args: AssociatePackageCommandInput, options?: __HttpHandlerOptions): Promise<AssociatePackageCommandOutput>;
    associatePackage(args: AssociatePackageCommandInput, cb: (err: any, data?: AssociatePackageCommandOutput) => void): void;
    associatePackage(args: AssociatePackageCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: AssociatePackageCommandOutput) => void): void;
    /**
     * <p>Cancels a scheduled service software update for an Amazon ES domain. You can only perform this operation before the <code>AutomatedUpdateDate</code> and when the <code>UpdateStatus</code> is in the <code>PENDING_UPDATE</code> state.</p>
     */
    cancelElasticsearchServiceSoftwareUpdate(args: CancelElasticsearchServiceSoftwareUpdateCommandInput, options?: __HttpHandlerOptions): Promise<CancelElasticsearchServiceSoftwareUpdateCommandOutput>;
    cancelElasticsearchServiceSoftwareUpdate(args: CancelElasticsearchServiceSoftwareUpdateCommandInput, cb: (err: any, data?: CancelElasticsearchServiceSoftwareUpdateCommandOutput) => void): void;
    cancelElasticsearchServiceSoftwareUpdate(args: CancelElasticsearchServiceSoftwareUpdateCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: CancelElasticsearchServiceSoftwareUpdateCommandOutput) => void): void;
    /**
     * <p>Creates a new Elasticsearch domain. For more information,
     *           see <a href="http://docs.aws.amazon.com/elasticsearch-service/latest/developerguide/es-createupdatedomains.html#es-createdomains" target="_blank">Creating Elasticsearch Domains</a> in the <i>Amazon Elasticsearch Service Developer Guide</i>.</p>
     */
    createElasticsearchDomain(args: CreateElasticsearchDomainCommandInput, options?: __HttpHandlerOptions): Promise<CreateElasticsearchDomainCommandOutput>;
    createElasticsearchDomain(args: CreateElasticsearchDomainCommandInput, cb: (err: any, data?: CreateElasticsearchDomainCommandOutput) => void): void;
    createElasticsearchDomain(args: CreateElasticsearchDomainCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: CreateElasticsearchDomainCommandOutput) => void): void;
    /**
     * <p>Creates a new cross-cluster search connection from a source domain to a destination domain.</p>
     */
    createOutboundCrossClusterSearchConnection(args: CreateOutboundCrossClusterSearchConnectionCommandInput, options?: __HttpHandlerOptions): Promise<CreateOutboundCrossClusterSearchConnectionCommandOutput>;
    createOutboundCrossClusterSearchConnection(args: CreateOutboundCrossClusterSearchConnectionCommandInput, cb: (err: any, data?: CreateOutboundCrossClusterSearchConnectionCommandOutput) => void): void;
    createOutboundCrossClusterSearchConnection(args: CreateOutboundCrossClusterSearchConnectionCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: CreateOutboundCrossClusterSearchConnectionCommandOutput) => void): void;
    /**
     * <p>Create a package for use with Amazon ES domains.</p>
     */
    createPackage(args: CreatePackageCommandInput, options?: __HttpHandlerOptions): Promise<CreatePackageCommandOutput>;
    createPackage(args: CreatePackageCommandInput, cb: (err: any, data?: CreatePackageCommandOutput) => void): void;
    createPackage(args: CreatePackageCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: CreatePackageCommandOutput) => void): void;
    /**
     * <p>Permanently deletes the specified Elasticsearch domain and all of its data. Once a domain is deleted, it cannot be recovered.</p>
     */
    deleteElasticsearchDomain(args: DeleteElasticsearchDomainCommandInput, options?: __HttpHandlerOptions): Promise<DeleteElasticsearchDomainCommandOutput>;
    deleteElasticsearchDomain(args: DeleteElasticsearchDomainCommandInput, cb: (err: any, data?: DeleteElasticsearchDomainCommandOutput) => void): void;
    deleteElasticsearchDomain(args: DeleteElasticsearchDomainCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: DeleteElasticsearchDomainCommandOutput) => void): void;
    /**
     * <p>Deletes the service-linked role that Elasticsearch Service uses to manage and maintain VPC domains. Role deletion will fail if any existing VPC domains use the role. You must delete any such Elasticsearch domains before deleting the role. See <a href="http://docs.aws.amazon.com/elasticsearch-service/latest/developerguide/es-vpc.html#es-enabling-slr" target="_blank">Deleting Elasticsearch Service Role</a> in <i>VPC Endpoints for Amazon Elasticsearch Service Domains</i>.</p>
     */
    deleteElasticsearchServiceRole(args: DeleteElasticsearchServiceRoleCommandInput, options?: __HttpHandlerOptions): Promise<DeleteElasticsearchServiceRoleCommandOutput>;
    deleteElasticsearchServiceRole(args: DeleteElasticsearchServiceRoleCommandInput, cb: (err: any, data?: DeleteElasticsearchServiceRoleCommandOutput) => void): void;
    deleteElasticsearchServiceRole(args: DeleteElasticsearchServiceRoleCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: DeleteElasticsearchServiceRoleCommandOutput) => void): void;
    /**
     * <p>Allows the destination domain owner to delete an existing inbound cross-cluster search connection.</p>
     */
    deleteInboundCrossClusterSearchConnection(args: DeleteInboundCrossClusterSearchConnectionCommandInput, options?: __HttpHandlerOptions): Promise<DeleteInboundCrossClusterSearchConnectionCommandOutput>;
    deleteInboundCrossClusterSearchConnection(args: DeleteInboundCrossClusterSearchConnectionCommandInput, cb: (err: any, data?: DeleteInboundCrossClusterSearchConnectionCommandOutput) => void): void;
    deleteInboundCrossClusterSearchConnection(args: DeleteInboundCrossClusterSearchConnectionCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: DeleteInboundCrossClusterSearchConnectionCommandOutput) => void): void;
    /**
     * <p>Allows the source domain owner to delete an existing outbound cross-cluster search connection.</p>
     */
    deleteOutboundCrossClusterSearchConnection(args: DeleteOutboundCrossClusterSearchConnectionCommandInput, options?: __HttpHandlerOptions): Promise<DeleteOutboundCrossClusterSearchConnectionCommandOutput>;
    deleteOutboundCrossClusterSearchConnection(args: DeleteOutboundCrossClusterSearchConnectionCommandInput, cb: (err: any, data?: DeleteOutboundCrossClusterSearchConnectionCommandOutput) => void): void;
    deleteOutboundCrossClusterSearchConnection(args: DeleteOutboundCrossClusterSearchConnectionCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: DeleteOutboundCrossClusterSearchConnectionCommandOutput) => void): void;
    /**
     * <p>Delete the package.</p>
     */
    deletePackage(args: DeletePackageCommandInput, options?: __HttpHandlerOptions): Promise<DeletePackageCommandOutput>;
    deletePackage(args: DeletePackageCommandInput, cb: (err: any, data?: DeletePackageCommandOutput) => void): void;
    deletePackage(args: DeletePackageCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: DeletePackageCommandOutput) => void): void;
    /**
     * <p>Provides scheduled Auto-Tune action details for the Elasticsearch domain, such as Auto-Tune action type, description, severity, and scheduled date.</p>
     */
    describeDomainAutoTunes(args: DescribeDomainAutoTunesCommandInput, options?: __HttpHandlerOptions): Promise<DescribeDomainAutoTunesCommandOutput>;
    describeDomainAutoTunes(args: DescribeDomainAutoTunesCommandInput, cb: (err: any, data?: DescribeDomainAutoTunesCommandOutput) => void): void;
    describeDomainAutoTunes(args: DescribeDomainAutoTunesCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: DescribeDomainAutoTunesCommandOutput) => void): void;
    /**
     * <p>Returns domain configuration information about the specified Elasticsearch domain, including the domain ID, domain endpoint, and domain ARN.</p>
     */
    describeElasticsearchDomain(args: DescribeElasticsearchDomainCommandInput, options?: __HttpHandlerOptions): Promise<DescribeElasticsearchDomainCommandOutput>;
    describeElasticsearchDomain(args: DescribeElasticsearchDomainCommandInput, cb: (err: any, data?: DescribeElasticsearchDomainCommandOutput) => void): void;
    describeElasticsearchDomain(args: DescribeElasticsearchDomainCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: DescribeElasticsearchDomainCommandOutput) => void): void;
    /**
     * <p>Provides cluster configuration information about the specified Elasticsearch domain, such as the state, creation date, update version, and update date for cluster options.</p>
     */
    describeElasticsearchDomainConfig(args: DescribeElasticsearchDomainConfigCommandInput, options?: __HttpHandlerOptions): Promise<DescribeElasticsearchDomainConfigCommandOutput>;
    describeElasticsearchDomainConfig(args: DescribeElasticsearchDomainConfigCommandInput, cb: (err: any, data?: DescribeElasticsearchDomainConfigCommandOutput) => void): void;
    describeElasticsearchDomainConfig(args: DescribeElasticsearchDomainConfigCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: DescribeElasticsearchDomainConfigCommandOutput) => void): void;
    /**
     * <p>Returns domain configuration information about the specified Elasticsearch domains, including the domain ID, domain endpoint, and domain ARN.</p>
     */
    describeElasticsearchDomains(args: DescribeElasticsearchDomainsCommandInput, options?: __HttpHandlerOptions): Promise<DescribeElasticsearchDomainsCommandOutput>;
    describeElasticsearchDomains(args: DescribeElasticsearchDomainsCommandInput, cb: (err: any, data?: DescribeElasticsearchDomainsCommandOutput) => void): void;
    describeElasticsearchDomains(args: DescribeElasticsearchDomainsCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: DescribeElasticsearchDomainsCommandOutput) => void): void;
    /**
     * <p>
     *     Describe Elasticsearch Limits for a given InstanceType and ElasticsearchVersion.
     *     When modifying existing Domain, specify the
     *     <code>
     *       <a>DomainName</a>
     *     </code>
     *     to know what Limits are supported for modifying.
     *   </p>
     */
    describeElasticsearchInstanceTypeLimits(args: DescribeElasticsearchInstanceTypeLimitsCommandInput, options?: __HttpHandlerOptions): Promise<DescribeElasticsearchInstanceTypeLimitsCommandOutput>;
    describeElasticsearchInstanceTypeLimits(args: DescribeElasticsearchInstanceTypeLimitsCommandInput, cb: (err: any, data?: DescribeElasticsearchInstanceTypeLimitsCommandOutput) => void): void;
    describeElasticsearchInstanceTypeLimits(args: DescribeElasticsearchInstanceTypeLimitsCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: DescribeElasticsearchInstanceTypeLimitsCommandOutput) => void): void;
    /**
     * <p>Lists all the inbound cross-cluster search connections for a destination domain.</p>
     */
    describeInboundCrossClusterSearchConnections(args: DescribeInboundCrossClusterSearchConnectionsCommandInput, options?: __HttpHandlerOptions): Promise<DescribeInboundCrossClusterSearchConnectionsCommandOutput>;
    describeInboundCrossClusterSearchConnections(args: DescribeInboundCrossClusterSearchConnectionsCommandInput, cb: (err: any, data?: DescribeInboundCrossClusterSearchConnectionsCommandOutput) => void): void;
    describeInboundCrossClusterSearchConnections(args: DescribeInboundCrossClusterSearchConnectionsCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: DescribeInboundCrossClusterSearchConnectionsCommandOutput) => void): void;
    /**
     * <p>Lists all the outbound cross-cluster search connections for a source domain.</p>
     */
    describeOutboundCrossClusterSearchConnections(args: DescribeOutboundCrossClusterSearchConnectionsCommandInput, options?: __HttpHandlerOptions): Promise<DescribeOutboundCrossClusterSearchConnectionsCommandOutput>;
    describeOutboundCrossClusterSearchConnections(args: DescribeOutboundCrossClusterSearchConnectionsCommandInput, cb: (err: any, data?: DescribeOutboundCrossClusterSearchConnectionsCommandOutput) => void): void;
    describeOutboundCrossClusterSearchConnections(args: DescribeOutboundCrossClusterSearchConnectionsCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: DescribeOutboundCrossClusterSearchConnectionsCommandOutput) => void): void;
    /**
     * <p>Describes all packages available to Amazon ES. Includes options for filtering, limiting the number of results, and pagination.</p>
     */
    describePackages(args: DescribePackagesCommandInput, options?: __HttpHandlerOptions): Promise<DescribePackagesCommandOutput>;
    describePackages(args: DescribePackagesCommandInput, cb: (err: any, data?: DescribePackagesCommandOutput) => void): void;
    describePackages(args: DescribePackagesCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: DescribePackagesCommandOutput) => void): void;
    /**
     * <p>Lists available reserved Elasticsearch instance offerings.</p>
     */
    describeReservedElasticsearchInstanceOfferings(args: DescribeReservedElasticsearchInstanceOfferingsCommandInput, options?: __HttpHandlerOptions): Promise<DescribeReservedElasticsearchInstanceOfferingsCommandOutput>;
    describeReservedElasticsearchInstanceOfferings(args: DescribeReservedElasticsearchInstanceOfferingsCommandInput, cb: (err: any, data?: DescribeReservedElasticsearchInstanceOfferingsCommandOutput) => void): void;
    describeReservedElasticsearchInstanceOfferings(args: DescribeReservedElasticsearchInstanceOfferingsCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: DescribeReservedElasticsearchInstanceOfferingsCommandOutput) => void): void;
    /**
     * <p>Returns information about reserved Elasticsearch instances for this account.</p>
     */
    describeReservedElasticsearchInstances(args: DescribeReservedElasticsearchInstancesCommandInput, options?: __HttpHandlerOptions): Promise<DescribeReservedElasticsearchInstancesCommandOutput>;
    describeReservedElasticsearchInstances(args: DescribeReservedElasticsearchInstancesCommandInput, cb: (err: any, data?: DescribeReservedElasticsearchInstancesCommandOutput) => void): void;
    describeReservedElasticsearchInstances(args: DescribeReservedElasticsearchInstancesCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: DescribeReservedElasticsearchInstancesCommandOutput) => void): void;
    /**
     * <p>Dissociates a package from the Amazon ES domain.</p>
     */
    dissociatePackage(args: DissociatePackageCommandInput, options?: __HttpHandlerOptions): Promise<DissociatePackageCommandOutput>;
    dissociatePackage(args: DissociatePackageCommandInput, cb: (err: any, data?: DissociatePackageCommandOutput) => void): void;
    dissociatePackage(args: DissociatePackageCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: DissociatePackageCommandOutput) => void): void;
    /**
     * <p>
     *         Returns a list of upgrade compatible Elastisearch versions.
     *         You can optionally pass a
     *         <code>
     *           <a>DomainName</a>
     *         </code>
     *         to get all upgrade compatible Elasticsearch versions for that specific domain.
     *       </p>
     */
    getCompatibleElasticsearchVersions(args: GetCompatibleElasticsearchVersionsCommandInput, options?: __HttpHandlerOptions): Promise<GetCompatibleElasticsearchVersionsCommandOutput>;
    getCompatibleElasticsearchVersions(args: GetCompatibleElasticsearchVersionsCommandInput, cb: (err: any, data?: GetCompatibleElasticsearchVersionsCommandOutput) => void): void;
    getCompatibleElasticsearchVersions(args: GetCompatibleElasticsearchVersionsCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: GetCompatibleElasticsearchVersionsCommandOutput) => void): void;
    /**
     * <p>Returns a list of versions of the package, along with their creation time and commit message.</p>
     */
    getPackageVersionHistory(args: GetPackageVersionHistoryCommandInput, options?: __HttpHandlerOptions): Promise<GetPackageVersionHistoryCommandOutput>;
    getPackageVersionHistory(args: GetPackageVersionHistoryCommandInput, cb: (err: any, data?: GetPackageVersionHistoryCommandOutput) => void): void;
    getPackageVersionHistory(args: GetPackageVersionHistoryCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: GetPackageVersionHistoryCommandOutput) => void): void;
    /**
     * <p>Retrieves the complete history of the last 10 upgrades that were performed on the domain.</p>
     */
    getUpgradeHistory(args: GetUpgradeHistoryCommandInput, options?: __HttpHandlerOptions): Promise<GetUpgradeHistoryCommandOutput>;
    getUpgradeHistory(args: GetUpgradeHistoryCommandInput, cb: (err: any, data?: GetUpgradeHistoryCommandOutput) => void): void;
    getUpgradeHistory(args: GetUpgradeHistoryCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: GetUpgradeHistoryCommandOutput) => void): void;
    /**
     * <p>Retrieves the latest status of the last upgrade or upgrade eligibility check that was performed on the domain.</p>
     */
    getUpgradeStatus(args: GetUpgradeStatusCommandInput, options?: __HttpHandlerOptions): Promise<GetUpgradeStatusCommandOutput>;
    getUpgradeStatus(args: GetUpgradeStatusCommandInput, cb: (err: any, data?: GetUpgradeStatusCommandOutput) => void): void;
    getUpgradeStatus(args: GetUpgradeStatusCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: GetUpgradeStatusCommandOutput) => void): void;
    /**
     * <p>Returns the name of all Elasticsearch domains owned by the current user's account. </p>
     */
    listDomainNames(args: ListDomainNamesCommandInput, options?: __HttpHandlerOptions): Promise<ListDomainNamesCommandOutput>;
    listDomainNames(args: ListDomainNamesCommandInput, cb: (err: any, data?: ListDomainNamesCommandOutput) => void): void;
    listDomainNames(args: ListDomainNamesCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: ListDomainNamesCommandOutput) => void): void;
    /**
     * <p>Lists all Amazon ES domains associated with the package.</p>
     */
    listDomainsForPackage(args: ListDomainsForPackageCommandInput, options?: __HttpHandlerOptions): Promise<ListDomainsForPackageCommandOutput>;
    listDomainsForPackage(args: ListDomainsForPackageCommandInput, cb: (err: any, data?: ListDomainsForPackageCommandOutput) => void): void;
    listDomainsForPackage(args: ListDomainsForPackageCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: ListDomainsForPackageCommandOutput) => void): void;
    /**
     * <p>List all Elasticsearch instance types that are supported for given ElasticsearchVersion</p>
     */
    listElasticsearchInstanceTypes(args: ListElasticsearchInstanceTypesCommandInput, options?: __HttpHandlerOptions): Promise<ListElasticsearchInstanceTypesCommandOutput>;
    listElasticsearchInstanceTypes(args: ListElasticsearchInstanceTypesCommandInput, cb: (err: any, data?: ListElasticsearchInstanceTypesCommandOutput) => void): void;
    listElasticsearchInstanceTypes(args: ListElasticsearchInstanceTypesCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: ListElasticsearchInstanceTypesCommandOutput) => void): void;
    /**
     * <p>List all supported Elasticsearch versions</p>
     */
    listElasticsearchVersions(args: ListElasticsearchVersionsCommandInput, options?: __HttpHandlerOptions): Promise<ListElasticsearchVersionsCommandOutput>;
    listElasticsearchVersions(args: ListElasticsearchVersionsCommandInput, cb: (err: any, data?: ListElasticsearchVersionsCommandOutput) => void): void;
    listElasticsearchVersions(args: ListElasticsearchVersionsCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: ListElasticsearchVersionsCommandOutput) => void): void;
    /**
     * <p>Lists all packages associated with the Amazon ES domain.</p>
     */
    listPackagesForDomain(args: ListPackagesForDomainCommandInput, options?: __HttpHandlerOptions): Promise<ListPackagesForDomainCommandOutput>;
    listPackagesForDomain(args: ListPackagesForDomainCommandInput, cb: (err: any, data?: ListPackagesForDomainCommandOutput) => void): void;
    listPackagesForDomain(args: ListPackagesForDomainCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: ListPackagesForDomainCommandOutput) => void): void;
    /**
     * <p>Returns all tags for the given Elasticsearch domain.</p>
     */
    listTags(args: ListTagsCommandInput, options?: __HttpHandlerOptions): Promise<ListTagsCommandOutput>;
    listTags(args: ListTagsCommandInput, cb: (err: any, data?: ListTagsCommandOutput) => void): void;
    listTags(args: ListTagsCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: ListTagsCommandOutput) => void): void;
    /**
     * <p>Allows you to purchase reserved Elasticsearch instances.</p>
     */
    purchaseReservedElasticsearchInstanceOffering(args: PurchaseReservedElasticsearchInstanceOfferingCommandInput, options?: __HttpHandlerOptions): Promise<PurchaseReservedElasticsearchInstanceOfferingCommandOutput>;
    purchaseReservedElasticsearchInstanceOffering(args: PurchaseReservedElasticsearchInstanceOfferingCommandInput, cb: (err: any, data?: PurchaseReservedElasticsearchInstanceOfferingCommandOutput) => void): void;
    purchaseReservedElasticsearchInstanceOffering(args: PurchaseReservedElasticsearchInstanceOfferingCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: PurchaseReservedElasticsearchInstanceOfferingCommandOutput) => void): void;
    /**
     * <p>Allows the destination domain owner to reject an inbound cross-cluster search connection request.</p>
     */
    rejectInboundCrossClusterSearchConnection(args: RejectInboundCrossClusterSearchConnectionCommandInput, options?: __HttpHandlerOptions): Promise<RejectInboundCrossClusterSearchConnectionCommandOutput>;
    rejectInboundCrossClusterSearchConnection(args: RejectInboundCrossClusterSearchConnectionCommandInput, cb: (err: any, data?: RejectInboundCrossClusterSearchConnectionCommandOutput) => void): void;
    rejectInboundCrossClusterSearchConnection(args: RejectInboundCrossClusterSearchConnectionCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: RejectInboundCrossClusterSearchConnectionCommandOutput) => void): void;
    /**
     * <p>Removes the specified set of tags from the specified Elasticsearch domain.</p>
     */
    removeTags(args: RemoveTagsCommandInput, options?: __HttpHandlerOptions): Promise<RemoveTagsCommandOutput>;
    removeTags(args: RemoveTagsCommandInput, cb: (err: any, data?: RemoveTagsCommandOutput) => void): void;
    removeTags(args: RemoveTagsCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: RemoveTagsCommandOutput) => void): void;
    /**
     * <p>Schedules a service software update for an Amazon ES domain.</p>
     */
    startElasticsearchServiceSoftwareUpdate(args: StartElasticsearchServiceSoftwareUpdateCommandInput, options?: __HttpHandlerOptions): Promise<StartElasticsearchServiceSoftwareUpdateCommandOutput>;
    startElasticsearchServiceSoftwareUpdate(args: StartElasticsearchServiceSoftwareUpdateCommandInput, cb: (err: any, data?: StartElasticsearchServiceSoftwareUpdateCommandOutput) => void): void;
    startElasticsearchServiceSoftwareUpdate(args: StartElasticsearchServiceSoftwareUpdateCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: StartElasticsearchServiceSoftwareUpdateCommandOutput) => void): void;
    /**
     * <p>Modifies the cluster configuration of the specified Elasticsearch domain, setting as setting the instance type and the number of instances. </p>
     */
    updateElasticsearchDomainConfig(args: UpdateElasticsearchDomainConfigCommandInput, options?: __HttpHandlerOptions): Promise<UpdateElasticsearchDomainConfigCommandOutput>;
    updateElasticsearchDomainConfig(args: UpdateElasticsearchDomainConfigCommandInput, cb: (err: any, data?: UpdateElasticsearchDomainConfigCommandOutput) => void): void;
    updateElasticsearchDomainConfig(args: UpdateElasticsearchDomainConfigCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: UpdateElasticsearchDomainConfigCommandOutput) => void): void;
    /**
     * <p>Updates a package for use with Amazon ES domains.</p>
     */
    updatePackage(args: UpdatePackageCommandInput, options?: __HttpHandlerOptions): Promise<UpdatePackageCommandOutput>;
    updatePackage(args: UpdatePackageCommandInput, cb: (err: any, data?: UpdatePackageCommandOutput) => void): void;
    updatePackage(args: UpdatePackageCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: UpdatePackageCommandOutput) => void): void;
    /**
     * <p>Allows you to either upgrade your domain or perform an Upgrade eligibility check to a compatible Elasticsearch version.</p>
     */
    upgradeElasticsearchDomain(args: UpgradeElasticsearchDomainCommandInput, options?: __HttpHandlerOptions): Promise<UpgradeElasticsearchDomainCommandOutput>;
    upgradeElasticsearchDomain(args: UpgradeElasticsearchDomainCommandInput, cb: (err: any, data?: UpgradeElasticsearchDomainCommandOutput) => void): void;
    upgradeElasticsearchDomain(args: UpgradeElasticsearchDomainCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: UpgradeElasticsearchDomainCommandOutput) => void): void;
}
