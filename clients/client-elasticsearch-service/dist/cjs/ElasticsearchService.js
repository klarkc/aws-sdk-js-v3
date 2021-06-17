"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ElasticsearchService = void 0;
const ElasticsearchServiceClient_1 = require("./ElasticsearchServiceClient");
const AcceptInboundCrossClusterSearchConnectionCommand_1 = require("./commands/AcceptInboundCrossClusterSearchConnectionCommand");
const AddTagsCommand_1 = require("./commands/AddTagsCommand");
const AssociatePackageCommand_1 = require("./commands/AssociatePackageCommand");
const CancelElasticsearchServiceSoftwareUpdateCommand_1 = require("./commands/CancelElasticsearchServiceSoftwareUpdateCommand");
const CreateElasticsearchDomainCommand_1 = require("./commands/CreateElasticsearchDomainCommand");
const CreateOutboundCrossClusterSearchConnectionCommand_1 = require("./commands/CreateOutboundCrossClusterSearchConnectionCommand");
const CreatePackageCommand_1 = require("./commands/CreatePackageCommand");
const DeleteElasticsearchDomainCommand_1 = require("./commands/DeleteElasticsearchDomainCommand");
const DeleteElasticsearchServiceRoleCommand_1 = require("./commands/DeleteElasticsearchServiceRoleCommand");
const DeleteInboundCrossClusterSearchConnectionCommand_1 = require("./commands/DeleteInboundCrossClusterSearchConnectionCommand");
const DeleteOutboundCrossClusterSearchConnectionCommand_1 = require("./commands/DeleteOutboundCrossClusterSearchConnectionCommand");
const DeletePackageCommand_1 = require("./commands/DeletePackageCommand");
const DescribeDomainAutoTunesCommand_1 = require("./commands/DescribeDomainAutoTunesCommand");
const DescribeElasticsearchDomainCommand_1 = require("./commands/DescribeElasticsearchDomainCommand");
const DescribeElasticsearchDomainConfigCommand_1 = require("./commands/DescribeElasticsearchDomainConfigCommand");
const DescribeElasticsearchDomainsCommand_1 = require("./commands/DescribeElasticsearchDomainsCommand");
const DescribeElasticsearchInstanceTypeLimitsCommand_1 = require("./commands/DescribeElasticsearchInstanceTypeLimitsCommand");
const DescribeInboundCrossClusterSearchConnectionsCommand_1 = require("./commands/DescribeInboundCrossClusterSearchConnectionsCommand");
const DescribeOutboundCrossClusterSearchConnectionsCommand_1 = require("./commands/DescribeOutboundCrossClusterSearchConnectionsCommand");
const DescribePackagesCommand_1 = require("./commands/DescribePackagesCommand");
const DescribeReservedElasticsearchInstanceOfferingsCommand_1 = require("./commands/DescribeReservedElasticsearchInstanceOfferingsCommand");
const DescribeReservedElasticsearchInstancesCommand_1 = require("./commands/DescribeReservedElasticsearchInstancesCommand");
const DissociatePackageCommand_1 = require("./commands/DissociatePackageCommand");
const GetCompatibleElasticsearchVersionsCommand_1 = require("./commands/GetCompatibleElasticsearchVersionsCommand");
const GetPackageVersionHistoryCommand_1 = require("./commands/GetPackageVersionHistoryCommand");
const GetUpgradeHistoryCommand_1 = require("./commands/GetUpgradeHistoryCommand");
const GetUpgradeStatusCommand_1 = require("./commands/GetUpgradeStatusCommand");
const ListDomainNamesCommand_1 = require("./commands/ListDomainNamesCommand");
const ListDomainsForPackageCommand_1 = require("./commands/ListDomainsForPackageCommand");
const ListElasticsearchInstanceTypesCommand_1 = require("./commands/ListElasticsearchInstanceTypesCommand");
const ListElasticsearchVersionsCommand_1 = require("./commands/ListElasticsearchVersionsCommand");
const ListPackagesForDomainCommand_1 = require("./commands/ListPackagesForDomainCommand");
const ListTagsCommand_1 = require("./commands/ListTagsCommand");
const PurchaseReservedElasticsearchInstanceOfferingCommand_1 = require("./commands/PurchaseReservedElasticsearchInstanceOfferingCommand");
const RejectInboundCrossClusterSearchConnectionCommand_1 = require("./commands/RejectInboundCrossClusterSearchConnectionCommand");
const RemoveTagsCommand_1 = require("./commands/RemoveTagsCommand");
const StartElasticsearchServiceSoftwareUpdateCommand_1 = require("./commands/StartElasticsearchServiceSoftwareUpdateCommand");
const UpdateElasticsearchDomainConfigCommand_1 = require("./commands/UpdateElasticsearchDomainConfigCommand");
const UpdatePackageCommand_1 = require("./commands/UpdatePackageCommand");
const UpgradeElasticsearchDomainCommand_1 = require("./commands/UpgradeElasticsearchDomainCommand");
/**
 * <fullname>Amazon Elasticsearch Configuration Service</fullname>
 *       <p>Use the Amazon Elasticsearch Configuration API to create, configure, and manage Elasticsearch domains.</p>
 *       <p>For sample code that uses the Configuration API, see the <a href="https://docs.aws.amazon.com/elasticsearch-service/latest/developerguide/es-configuration-samples.html">Amazon Elasticsearch Service Developer Guide</a>.
 *       The guide also contains <a href="https://docs.aws.amazon.com/elasticsearch-service/latest/developerguide/es-request-signing.html">sample code for sending signed HTTP requests to the Elasticsearch APIs</a>.</p>
 *       <p>The endpoint for configuration service requests is region-specific: es.<i>region</i>.amazonaws.com.
 *          For example, es.us-east-1.amazonaws.com. For a current list of supported regions and endpoints,
 *          see <a href="http://docs.aws.amazon.com/general/latest/gr/rande.html#elasticsearch-service-regions" target="_blank">Regions and Endpoints</a>.</p>
 */
class ElasticsearchService extends ElasticsearchServiceClient_1.ElasticsearchServiceClient {
    acceptInboundCrossClusterSearchConnection(args, optionsOrCb, cb) {
        const command = new AcceptInboundCrossClusterSearchConnectionCommand_1.AcceptInboundCrossClusterSearchConnectionCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    }
    addTags(args, optionsOrCb, cb) {
        const command = new AddTagsCommand_1.AddTagsCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    }
    associatePackage(args, optionsOrCb, cb) {
        const command = new AssociatePackageCommand_1.AssociatePackageCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    }
    cancelElasticsearchServiceSoftwareUpdate(args, optionsOrCb, cb) {
        const command = new CancelElasticsearchServiceSoftwareUpdateCommand_1.CancelElasticsearchServiceSoftwareUpdateCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    }
    createElasticsearchDomain(args, optionsOrCb, cb) {
        const command = new CreateElasticsearchDomainCommand_1.CreateElasticsearchDomainCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    }
    createOutboundCrossClusterSearchConnection(args, optionsOrCb, cb) {
        const command = new CreateOutboundCrossClusterSearchConnectionCommand_1.CreateOutboundCrossClusterSearchConnectionCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    }
    createPackage(args, optionsOrCb, cb) {
        const command = new CreatePackageCommand_1.CreatePackageCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    }
    deleteElasticsearchDomain(args, optionsOrCb, cb) {
        const command = new DeleteElasticsearchDomainCommand_1.DeleteElasticsearchDomainCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    }
    deleteElasticsearchServiceRole(args, optionsOrCb, cb) {
        const command = new DeleteElasticsearchServiceRoleCommand_1.DeleteElasticsearchServiceRoleCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    }
    deleteInboundCrossClusterSearchConnection(args, optionsOrCb, cb) {
        const command = new DeleteInboundCrossClusterSearchConnectionCommand_1.DeleteInboundCrossClusterSearchConnectionCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    }
    deleteOutboundCrossClusterSearchConnection(args, optionsOrCb, cb) {
        const command = new DeleteOutboundCrossClusterSearchConnectionCommand_1.DeleteOutboundCrossClusterSearchConnectionCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    }
    deletePackage(args, optionsOrCb, cb) {
        const command = new DeletePackageCommand_1.DeletePackageCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    }
    describeDomainAutoTunes(args, optionsOrCb, cb) {
        const command = new DescribeDomainAutoTunesCommand_1.DescribeDomainAutoTunesCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    }
    describeElasticsearchDomain(args, optionsOrCb, cb) {
        const command = new DescribeElasticsearchDomainCommand_1.DescribeElasticsearchDomainCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    }
    describeElasticsearchDomainConfig(args, optionsOrCb, cb) {
        const command = new DescribeElasticsearchDomainConfigCommand_1.DescribeElasticsearchDomainConfigCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    }
    describeElasticsearchDomains(args, optionsOrCb, cb) {
        const command = new DescribeElasticsearchDomainsCommand_1.DescribeElasticsearchDomainsCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    }
    describeElasticsearchInstanceTypeLimits(args, optionsOrCb, cb) {
        const command = new DescribeElasticsearchInstanceTypeLimitsCommand_1.DescribeElasticsearchInstanceTypeLimitsCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    }
    describeInboundCrossClusterSearchConnections(args, optionsOrCb, cb) {
        const command = new DescribeInboundCrossClusterSearchConnectionsCommand_1.DescribeInboundCrossClusterSearchConnectionsCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    }
    describeOutboundCrossClusterSearchConnections(args, optionsOrCb, cb) {
        const command = new DescribeOutboundCrossClusterSearchConnectionsCommand_1.DescribeOutboundCrossClusterSearchConnectionsCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    }
    describePackages(args, optionsOrCb, cb) {
        const command = new DescribePackagesCommand_1.DescribePackagesCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    }
    describeReservedElasticsearchInstanceOfferings(args, optionsOrCb, cb) {
        const command = new DescribeReservedElasticsearchInstanceOfferingsCommand_1.DescribeReservedElasticsearchInstanceOfferingsCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    }
    describeReservedElasticsearchInstances(args, optionsOrCb, cb) {
        const command = new DescribeReservedElasticsearchInstancesCommand_1.DescribeReservedElasticsearchInstancesCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    }
    dissociatePackage(args, optionsOrCb, cb) {
        const command = new DissociatePackageCommand_1.DissociatePackageCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    }
    getCompatibleElasticsearchVersions(args, optionsOrCb, cb) {
        const command = new GetCompatibleElasticsearchVersionsCommand_1.GetCompatibleElasticsearchVersionsCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    }
    getPackageVersionHistory(args, optionsOrCb, cb) {
        const command = new GetPackageVersionHistoryCommand_1.GetPackageVersionHistoryCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    }
    getUpgradeHistory(args, optionsOrCb, cb) {
        const command = new GetUpgradeHistoryCommand_1.GetUpgradeHistoryCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    }
    getUpgradeStatus(args, optionsOrCb, cb) {
        const command = new GetUpgradeStatusCommand_1.GetUpgradeStatusCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    }
    listDomainNames(args, optionsOrCb, cb) {
        const command = new ListDomainNamesCommand_1.ListDomainNamesCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    }
    listDomainsForPackage(args, optionsOrCb, cb) {
        const command = new ListDomainsForPackageCommand_1.ListDomainsForPackageCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    }
    listElasticsearchInstanceTypes(args, optionsOrCb, cb) {
        const command = new ListElasticsearchInstanceTypesCommand_1.ListElasticsearchInstanceTypesCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    }
    listElasticsearchVersions(args, optionsOrCb, cb) {
        const command = new ListElasticsearchVersionsCommand_1.ListElasticsearchVersionsCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    }
    listPackagesForDomain(args, optionsOrCb, cb) {
        const command = new ListPackagesForDomainCommand_1.ListPackagesForDomainCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    }
    listTags(args, optionsOrCb, cb) {
        const command = new ListTagsCommand_1.ListTagsCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    }
    purchaseReservedElasticsearchInstanceOffering(args, optionsOrCb, cb) {
        const command = new PurchaseReservedElasticsearchInstanceOfferingCommand_1.PurchaseReservedElasticsearchInstanceOfferingCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    }
    rejectInboundCrossClusterSearchConnection(args, optionsOrCb, cb) {
        const command = new RejectInboundCrossClusterSearchConnectionCommand_1.RejectInboundCrossClusterSearchConnectionCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    }
    removeTags(args, optionsOrCb, cb) {
        const command = new RemoveTagsCommand_1.RemoveTagsCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    }
    startElasticsearchServiceSoftwareUpdate(args, optionsOrCb, cb) {
        const command = new StartElasticsearchServiceSoftwareUpdateCommand_1.StartElasticsearchServiceSoftwareUpdateCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    }
    updateElasticsearchDomainConfig(args, optionsOrCb, cb) {
        const command = new UpdateElasticsearchDomainConfigCommand_1.UpdateElasticsearchDomainConfigCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    }
    updatePackage(args, optionsOrCb, cb) {
        const command = new UpdatePackageCommand_1.UpdatePackageCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    }
    upgradeElasticsearchDomain(args, optionsOrCb, cb) {
        const command = new UpgradeElasticsearchDomainCommand_1.UpgradeElasticsearchDomainCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    }
}
exports.ElasticsearchService = ElasticsearchService;
//# sourceMappingURL=ElasticsearchService.js.map