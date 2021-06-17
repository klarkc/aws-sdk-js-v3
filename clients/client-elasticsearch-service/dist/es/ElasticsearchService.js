import { __extends } from "tslib";
import { ElasticsearchServiceClient } from "./ElasticsearchServiceClient";
import { AcceptInboundCrossClusterSearchConnectionCommand, } from "./commands/AcceptInboundCrossClusterSearchConnectionCommand";
import { AddTagsCommand } from "./commands/AddTagsCommand";
import { AssociatePackageCommand, } from "./commands/AssociatePackageCommand";
import { CancelElasticsearchServiceSoftwareUpdateCommand, } from "./commands/CancelElasticsearchServiceSoftwareUpdateCommand";
import { CreateElasticsearchDomainCommand, } from "./commands/CreateElasticsearchDomainCommand";
import { CreateOutboundCrossClusterSearchConnectionCommand, } from "./commands/CreateOutboundCrossClusterSearchConnectionCommand";
import { CreatePackageCommand, } from "./commands/CreatePackageCommand";
import { DeleteElasticsearchDomainCommand, } from "./commands/DeleteElasticsearchDomainCommand";
import { DeleteElasticsearchServiceRoleCommand, } from "./commands/DeleteElasticsearchServiceRoleCommand";
import { DeleteInboundCrossClusterSearchConnectionCommand, } from "./commands/DeleteInboundCrossClusterSearchConnectionCommand";
import { DeleteOutboundCrossClusterSearchConnectionCommand, } from "./commands/DeleteOutboundCrossClusterSearchConnectionCommand";
import { DeletePackageCommand, } from "./commands/DeletePackageCommand";
import { DescribeDomainAutoTunesCommand, } from "./commands/DescribeDomainAutoTunesCommand";
import { DescribeElasticsearchDomainCommand, } from "./commands/DescribeElasticsearchDomainCommand";
import { DescribeElasticsearchDomainConfigCommand, } from "./commands/DescribeElasticsearchDomainConfigCommand";
import { DescribeElasticsearchDomainsCommand, } from "./commands/DescribeElasticsearchDomainsCommand";
import { DescribeElasticsearchInstanceTypeLimitsCommand, } from "./commands/DescribeElasticsearchInstanceTypeLimitsCommand";
import { DescribeInboundCrossClusterSearchConnectionsCommand, } from "./commands/DescribeInboundCrossClusterSearchConnectionsCommand";
import { DescribeOutboundCrossClusterSearchConnectionsCommand, } from "./commands/DescribeOutboundCrossClusterSearchConnectionsCommand";
import { DescribePackagesCommand, } from "./commands/DescribePackagesCommand";
import { DescribeReservedElasticsearchInstanceOfferingsCommand, } from "./commands/DescribeReservedElasticsearchInstanceOfferingsCommand";
import { DescribeReservedElasticsearchInstancesCommand, } from "./commands/DescribeReservedElasticsearchInstancesCommand";
import { DissociatePackageCommand, } from "./commands/DissociatePackageCommand";
import { GetCompatibleElasticsearchVersionsCommand, } from "./commands/GetCompatibleElasticsearchVersionsCommand";
import { GetPackageVersionHistoryCommand, } from "./commands/GetPackageVersionHistoryCommand";
import { GetUpgradeHistoryCommand, } from "./commands/GetUpgradeHistoryCommand";
import { GetUpgradeStatusCommand, } from "./commands/GetUpgradeStatusCommand";
import { ListDomainNamesCommand, } from "./commands/ListDomainNamesCommand";
import { ListDomainsForPackageCommand, } from "./commands/ListDomainsForPackageCommand";
import { ListElasticsearchInstanceTypesCommand, } from "./commands/ListElasticsearchInstanceTypesCommand";
import { ListElasticsearchVersionsCommand, } from "./commands/ListElasticsearchVersionsCommand";
import { ListPackagesForDomainCommand, } from "./commands/ListPackagesForDomainCommand";
import { ListTagsCommand } from "./commands/ListTagsCommand";
import { PurchaseReservedElasticsearchInstanceOfferingCommand, } from "./commands/PurchaseReservedElasticsearchInstanceOfferingCommand";
import { RejectInboundCrossClusterSearchConnectionCommand, } from "./commands/RejectInboundCrossClusterSearchConnectionCommand";
import { RemoveTagsCommand } from "./commands/RemoveTagsCommand";
import { StartElasticsearchServiceSoftwareUpdateCommand, } from "./commands/StartElasticsearchServiceSoftwareUpdateCommand";
import { UpdateElasticsearchDomainConfigCommand, } from "./commands/UpdateElasticsearchDomainConfigCommand";
import { UpdatePackageCommand, } from "./commands/UpdatePackageCommand";
import { UpgradeElasticsearchDomainCommand, } from "./commands/UpgradeElasticsearchDomainCommand";
/**
 * <fullname>Amazon Elasticsearch Configuration Service</fullname>
 *       <p>Use the Amazon Elasticsearch Configuration API to create, configure, and manage Elasticsearch domains.</p>
 *       <p>For sample code that uses the Configuration API, see the <a href="https://docs.aws.amazon.com/elasticsearch-service/latest/developerguide/es-configuration-samples.html">Amazon Elasticsearch Service Developer Guide</a>.
 *       The guide also contains <a href="https://docs.aws.amazon.com/elasticsearch-service/latest/developerguide/es-request-signing.html">sample code for sending signed HTTP requests to the Elasticsearch APIs</a>.</p>
 *       <p>The endpoint for configuration service requests is region-specific: es.<i>region</i>.amazonaws.com.
 *          For example, es.us-east-1.amazonaws.com. For a current list of supported regions and endpoints,
 *          see <a href="http://docs.aws.amazon.com/general/latest/gr/rande.html#elasticsearch-service-regions" target="_blank">Regions and Endpoints</a>.</p>
 */
var ElasticsearchService = /** @class */ (function (_super) {
    __extends(ElasticsearchService, _super);
    function ElasticsearchService() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    ElasticsearchService.prototype.acceptInboundCrossClusterSearchConnection = function (args, optionsOrCb, cb) {
        var command = new AcceptInboundCrossClusterSearchConnectionCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error("Expect http options but get " + typeof optionsOrCb);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    };
    ElasticsearchService.prototype.addTags = function (args, optionsOrCb, cb) {
        var command = new AddTagsCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error("Expect http options but get " + typeof optionsOrCb);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    };
    ElasticsearchService.prototype.associatePackage = function (args, optionsOrCb, cb) {
        var command = new AssociatePackageCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error("Expect http options but get " + typeof optionsOrCb);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    };
    ElasticsearchService.prototype.cancelElasticsearchServiceSoftwareUpdate = function (args, optionsOrCb, cb) {
        var command = new CancelElasticsearchServiceSoftwareUpdateCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error("Expect http options but get " + typeof optionsOrCb);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    };
    ElasticsearchService.prototype.createElasticsearchDomain = function (args, optionsOrCb, cb) {
        var command = new CreateElasticsearchDomainCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error("Expect http options but get " + typeof optionsOrCb);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    };
    ElasticsearchService.prototype.createOutboundCrossClusterSearchConnection = function (args, optionsOrCb, cb) {
        var command = new CreateOutboundCrossClusterSearchConnectionCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error("Expect http options but get " + typeof optionsOrCb);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    };
    ElasticsearchService.prototype.createPackage = function (args, optionsOrCb, cb) {
        var command = new CreatePackageCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error("Expect http options but get " + typeof optionsOrCb);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    };
    ElasticsearchService.prototype.deleteElasticsearchDomain = function (args, optionsOrCb, cb) {
        var command = new DeleteElasticsearchDomainCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error("Expect http options but get " + typeof optionsOrCb);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    };
    ElasticsearchService.prototype.deleteElasticsearchServiceRole = function (args, optionsOrCb, cb) {
        var command = new DeleteElasticsearchServiceRoleCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error("Expect http options but get " + typeof optionsOrCb);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    };
    ElasticsearchService.prototype.deleteInboundCrossClusterSearchConnection = function (args, optionsOrCb, cb) {
        var command = new DeleteInboundCrossClusterSearchConnectionCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error("Expect http options but get " + typeof optionsOrCb);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    };
    ElasticsearchService.prototype.deleteOutboundCrossClusterSearchConnection = function (args, optionsOrCb, cb) {
        var command = new DeleteOutboundCrossClusterSearchConnectionCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error("Expect http options but get " + typeof optionsOrCb);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    };
    ElasticsearchService.prototype.deletePackage = function (args, optionsOrCb, cb) {
        var command = new DeletePackageCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error("Expect http options but get " + typeof optionsOrCb);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    };
    ElasticsearchService.prototype.describeDomainAutoTunes = function (args, optionsOrCb, cb) {
        var command = new DescribeDomainAutoTunesCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error("Expect http options but get " + typeof optionsOrCb);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    };
    ElasticsearchService.prototype.describeElasticsearchDomain = function (args, optionsOrCb, cb) {
        var command = new DescribeElasticsearchDomainCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error("Expect http options but get " + typeof optionsOrCb);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    };
    ElasticsearchService.prototype.describeElasticsearchDomainConfig = function (args, optionsOrCb, cb) {
        var command = new DescribeElasticsearchDomainConfigCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error("Expect http options but get " + typeof optionsOrCb);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    };
    ElasticsearchService.prototype.describeElasticsearchDomains = function (args, optionsOrCb, cb) {
        var command = new DescribeElasticsearchDomainsCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error("Expect http options but get " + typeof optionsOrCb);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    };
    ElasticsearchService.prototype.describeElasticsearchInstanceTypeLimits = function (args, optionsOrCb, cb) {
        var command = new DescribeElasticsearchInstanceTypeLimitsCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error("Expect http options but get " + typeof optionsOrCb);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    };
    ElasticsearchService.prototype.describeInboundCrossClusterSearchConnections = function (args, optionsOrCb, cb) {
        var command = new DescribeInboundCrossClusterSearchConnectionsCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error("Expect http options but get " + typeof optionsOrCb);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    };
    ElasticsearchService.prototype.describeOutboundCrossClusterSearchConnections = function (args, optionsOrCb, cb) {
        var command = new DescribeOutboundCrossClusterSearchConnectionsCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error("Expect http options but get " + typeof optionsOrCb);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    };
    ElasticsearchService.prototype.describePackages = function (args, optionsOrCb, cb) {
        var command = new DescribePackagesCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error("Expect http options but get " + typeof optionsOrCb);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    };
    ElasticsearchService.prototype.describeReservedElasticsearchInstanceOfferings = function (args, optionsOrCb, cb) {
        var command = new DescribeReservedElasticsearchInstanceOfferingsCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error("Expect http options but get " + typeof optionsOrCb);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    };
    ElasticsearchService.prototype.describeReservedElasticsearchInstances = function (args, optionsOrCb, cb) {
        var command = new DescribeReservedElasticsearchInstancesCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error("Expect http options but get " + typeof optionsOrCb);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    };
    ElasticsearchService.prototype.dissociatePackage = function (args, optionsOrCb, cb) {
        var command = new DissociatePackageCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error("Expect http options but get " + typeof optionsOrCb);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    };
    ElasticsearchService.prototype.getCompatibleElasticsearchVersions = function (args, optionsOrCb, cb) {
        var command = new GetCompatibleElasticsearchVersionsCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error("Expect http options but get " + typeof optionsOrCb);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    };
    ElasticsearchService.prototype.getPackageVersionHistory = function (args, optionsOrCb, cb) {
        var command = new GetPackageVersionHistoryCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error("Expect http options but get " + typeof optionsOrCb);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    };
    ElasticsearchService.prototype.getUpgradeHistory = function (args, optionsOrCb, cb) {
        var command = new GetUpgradeHistoryCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error("Expect http options but get " + typeof optionsOrCb);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    };
    ElasticsearchService.prototype.getUpgradeStatus = function (args, optionsOrCb, cb) {
        var command = new GetUpgradeStatusCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error("Expect http options but get " + typeof optionsOrCb);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    };
    ElasticsearchService.prototype.listDomainNames = function (args, optionsOrCb, cb) {
        var command = new ListDomainNamesCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error("Expect http options but get " + typeof optionsOrCb);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    };
    ElasticsearchService.prototype.listDomainsForPackage = function (args, optionsOrCb, cb) {
        var command = new ListDomainsForPackageCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error("Expect http options but get " + typeof optionsOrCb);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    };
    ElasticsearchService.prototype.listElasticsearchInstanceTypes = function (args, optionsOrCb, cb) {
        var command = new ListElasticsearchInstanceTypesCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error("Expect http options but get " + typeof optionsOrCb);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    };
    ElasticsearchService.prototype.listElasticsearchVersions = function (args, optionsOrCb, cb) {
        var command = new ListElasticsearchVersionsCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error("Expect http options but get " + typeof optionsOrCb);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    };
    ElasticsearchService.prototype.listPackagesForDomain = function (args, optionsOrCb, cb) {
        var command = new ListPackagesForDomainCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error("Expect http options but get " + typeof optionsOrCb);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    };
    ElasticsearchService.prototype.listTags = function (args, optionsOrCb, cb) {
        var command = new ListTagsCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error("Expect http options but get " + typeof optionsOrCb);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    };
    ElasticsearchService.prototype.purchaseReservedElasticsearchInstanceOffering = function (args, optionsOrCb, cb) {
        var command = new PurchaseReservedElasticsearchInstanceOfferingCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error("Expect http options but get " + typeof optionsOrCb);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    };
    ElasticsearchService.prototype.rejectInboundCrossClusterSearchConnection = function (args, optionsOrCb, cb) {
        var command = new RejectInboundCrossClusterSearchConnectionCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error("Expect http options but get " + typeof optionsOrCb);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    };
    ElasticsearchService.prototype.removeTags = function (args, optionsOrCb, cb) {
        var command = new RemoveTagsCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error("Expect http options but get " + typeof optionsOrCb);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    };
    ElasticsearchService.prototype.startElasticsearchServiceSoftwareUpdate = function (args, optionsOrCb, cb) {
        var command = new StartElasticsearchServiceSoftwareUpdateCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error("Expect http options but get " + typeof optionsOrCb);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    };
    ElasticsearchService.prototype.updateElasticsearchDomainConfig = function (args, optionsOrCb, cb) {
        var command = new UpdateElasticsearchDomainConfigCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error("Expect http options but get " + typeof optionsOrCb);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    };
    ElasticsearchService.prototype.updatePackage = function (args, optionsOrCb, cb) {
        var command = new UpdatePackageCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error("Expect http options but get " + typeof optionsOrCb);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    };
    ElasticsearchService.prototype.upgradeElasticsearchDomain = function (args, optionsOrCb, cb) {
        var command = new UpgradeElasticsearchDomainCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error("Expect http options but get " + typeof optionsOrCb);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    };
    return ElasticsearchService;
}(ElasticsearchServiceClient));
export { ElasticsearchService };
//# sourceMappingURL=ElasticsearchService.js.map