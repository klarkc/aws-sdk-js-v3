import { __extends } from "tslib";
import { DatabaseMigrationServiceClient } from "./DatabaseMigrationServiceClient";
import { AddTagsToResourceCommand, } from "./commands/AddTagsToResourceCommand";
import { ApplyPendingMaintenanceActionCommand, } from "./commands/ApplyPendingMaintenanceActionCommand";
import { CancelReplicationTaskAssessmentRunCommand, } from "./commands/CancelReplicationTaskAssessmentRunCommand";
import { CreateEndpointCommand, } from "./commands/CreateEndpointCommand";
import { CreateEventSubscriptionCommand, } from "./commands/CreateEventSubscriptionCommand";
import { CreateReplicationInstanceCommand, } from "./commands/CreateReplicationInstanceCommand";
import { CreateReplicationSubnetGroupCommand, } from "./commands/CreateReplicationSubnetGroupCommand";
import { CreateReplicationTaskCommand, } from "./commands/CreateReplicationTaskCommand";
import { DeleteCertificateCommand, } from "./commands/DeleteCertificateCommand";
import { DeleteConnectionCommand, } from "./commands/DeleteConnectionCommand";
import { DeleteEndpointCommand, } from "./commands/DeleteEndpointCommand";
import { DeleteEventSubscriptionCommand, } from "./commands/DeleteEventSubscriptionCommand";
import { DeleteReplicationInstanceCommand, } from "./commands/DeleteReplicationInstanceCommand";
import { DeleteReplicationSubnetGroupCommand, } from "./commands/DeleteReplicationSubnetGroupCommand";
import { DeleteReplicationTaskAssessmentRunCommand, } from "./commands/DeleteReplicationTaskAssessmentRunCommand";
import { DeleteReplicationTaskCommand, } from "./commands/DeleteReplicationTaskCommand";
import { DescribeAccountAttributesCommand, } from "./commands/DescribeAccountAttributesCommand";
import { DescribeApplicableIndividualAssessmentsCommand, } from "./commands/DescribeApplicableIndividualAssessmentsCommand";
import { DescribeCertificatesCommand, } from "./commands/DescribeCertificatesCommand";
import { DescribeConnectionsCommand, } from "./commands/DescribeConnectionsCommand";
import { DescribeEndpointSettingsCommand, } from "./commands/DescribeEndpointSettingsCommand";
import { DescribeEndpointTypesCommand, } from "./commands/DescribeEndpointTypesCommand";
import { DescribeEndpointsCommand, } from "./commands/DescribeEndpointsCommand";
import { DescribeEventCategoriesCommand, } from "./commands/DescribeEventCategoriesCommand";
import { DescribeEventSubscriptionsCommand, } from "./commands/DescribeEventSubscriptionsCommand";
import { DescribeEventsCommand, } from "./commands/DescribeEventsCommand";
import { DescribeOrderableReplicationInstancesCommand, } from "./commands/DescribeOrderableReplicationInstancesCommand";
import { DescribePendingMaintenanceActionsCommand, } from "./commands/DescribePendingMaintenanceActionsCommand";
import { DescribeRefreshSchemasStatusCommand, } from "./commands/DescribeRefreshSchemasStatusCommand";
import { DescribeReplicationInstanceTaskLogsCommand, } from "./commands/DescribeReplicationInstanceTaskLogsCommand";
import { DescribeReplicationInstancesCommand, } from "./commands/DescribeReplicationInstancesCommand";
import { DescribeReplicationSubnetGroupsCommand, } from "./commands/DescribeReplicationSubnetGroupsCommand";
import { DescribeReplicationTaskAssessmentResultsCommand, } from "./commands/DescribeReplicationTaskAssessmentResultsCommand";
import { DescribeReplicationTaskAssessmentRunsCommand, } from "./commands/DescribeReplicationTaskAssessmentRunsCommand";
import { DescribeReplicationTaskIndividualAssessmentsCommand, } from "./commands/DescribeReplicationTaskIndividualAssessmentsCommand";
import { DescribeReplicationTasksCommand, } from "./commands/DescribeReplicationTasksCommand";
import { DescribeSchemasCommand, } from "./commands/DescribeSchemasCommand";
import { DescribeTableStatisticsCommand, } from "./commands/DescribeTableStatisticsCommand";
import { ImportCertificateCommand, } from "./commands/ImportCertificateCommand";
import { ListTagsForResourceCommand, } from "./commands/ListTagsForResourceCommand";
import { ModifyEndpointCommand, } from "./commands/ModifyEndpointCommand";
import { ModifyEventSubscriptionCommand, } from "./commands/ModifyEventSubscriptionCommand";
import { ModifyReplicationInstanceCommand, } from "./commands/ModifyReplicationInstanceCommand";
import { ModifyReplicationSubnetGroupCommand, } from "./commands/ModifyReplicationSubnetGroupCommand";
import { ModifyReplicationTaskCommand, } from "./commands/ModifyReplicationTaskCommand";
import { MoveReplicationTaskCommand, } from "./commands/MoveReplicationTaskCommand";
import { RebootReplicationInstanceCommand, } from "./commands/RebootReplicationInstanceCommand";
import { RefreshSchemasCommand, } from "./commands/RefreshSchemasCommand";
import { ReloadTablesCommand, } from "./commands/ReloadTablesCommand";
import { RemoveTagsFromResourceCommand, } from "./commands/RemoveTagsFromResourceCommand";
import { StartReplicationTaskAssessmentCommand, } from "./commands/StartReplicationTaskAssessmentCommand";
import { StartReplicationTaskAssessmentRunCommand, } from "./commands/StartReplicationTaskAssessmentRunCommand";
import { StartReplicationTaskCommand, } from "./commands/StartReplicationTaskCommand";
import { StopReplicationTaskCommand, } from "./commands/StopReplicationTaskCommand";
import { TestConnectionCommand, } from "./commands/TestConnectionCommand";
/**
 * <fullname>AWS Database Migration Service</fullname>
 *          <p>AWS Database Migration Service (AWS DMS) can migrate your data to and from the most
 *          widely used commercial and open-source databases such as Oracle, PostgreSQL, Microsoft SQL
 *          Server, Amazon Redshift, MariaDB, Amazon Aurora, MySQL, and SAP Adaptive Server Enterprise
 *          (ASE). The service supports homogeneous migrations such as Oracle to Oracle, as well as
 *          heterogeneous migrations between different database platforms, such as Oracle to MySQL or
 *          SQL Server to PostgreSQL.</p>
 *          <p>For more information about AWS DMS, see <a href="https://docs.aws.amazon.com/dms/latest/userguide/Welcome.html">What Is AWS Database Migration Service?</a>
 *          in the <i>AWS Database Migration User Guide.</i>
 *          </p>
 */
var DatabaseMigrationService = /** @class */ (function (_super) {
    __extends(DatabaseMigrationService, _super);
    function DatabaseMigrationService() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    DatabaseMigrationService.prototype.addTagsToResource = function (args, optionsOrCb, cb) {
        var command = new AddTagsToResourceCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error("Expect http options but get " + typeof optionsOrCb);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    };
    DatabaseMigrationService.prototype.applyPendingMaintenanceAction = function (args, optionsOrCb, cb) {
        var command = new ApplyPendingMaintenanceActionCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error("Expect http options but get " + typeof optionsOrCb);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    };
    DatabaseMigrationService.prototype.cancelReplicationTaskAssessmentRun = function (args, optionsOrCb, cb) {
        var command = new CancelReplicationTaskAssessmentRunCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error("Expect http options but get " + typeof optionsOrCb);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    };
    DatabaseMigrationService.prototype.createEndpoint = function (args, optionsOrCb, cb) {
        var command = new CreateEndpointCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error("Expect http options but get " + typeof optionsOrCb);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    };
    DatabaseMigrationService.prototype.createEventSubscription = function (args, optionsOrCb, cb) {
        var command = new CreateEventSubscriptionCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error("Expect http options but get " + typeof optionsOrCb);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    };
    DatabaseMigrationService.prototype.createReplicationInstance = function (args, optionsOrCb, cb) {
        var command = new CreateReplicationInstanceCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error("Expect http options but get " + typeof optionsOrCb);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    };
    DatabaseMigrationService.prototype.createReplicationSubnetGroup = function (args, optionsOrCb, cb) {
        var command = new CreateReplicationSubnetGroupCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error("Expect http options but get " + typeof optionsOrCb);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    };
    DatabaseMigrationService.prototype.createReplicationTask = function (args, optionsOrCb, cb) {
        var command = new CreateReplicationTaskCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error("Expect http options but get " + typeof optionsOrCb);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    };
    DatabaseMigrationService.prototype.deleteCertificate = function (args, optionsOrCb, cb) {
        var command = new DeleteCertificateCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error("Expect http options but get " + typeof optionsOrCb);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    };
    DatabaseMigrationService.prototype.deleteConnection = function (args, optionsOrCb, cb) {
        var command = new DeleteConnectionCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error("Expect http options but get " + typeof optionsOrCb);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    };
    DatabaseMigrationService.prototype.deleteEndpoint = function (args, optionsOrCb, cb) {
        var command = new DeleteEndpointCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error("Expect http options but get " + typeof optionsOrCb);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    };
    DatabaseMigrationService.prototype.deleteEventSubscription = function (args, optionsOrCb, cb) {
        var command = new DeleteEventSubscriptionCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error("Expect http options but get " + typeof optionsOrCb);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    };
    DatabaseMigrationService.prototype.deleteReplicationInstance = function (args, optionsOrCb, cb) {
        var command = new DeleteReplicationInstanceCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error("Expect http options but get " + typeof optionsOrCb);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    };
    DatabaseMigrationService.prototype.deleteReplicationSubnetGroup = function (args, optionsOrCb, cb) {
        var command = new DeleteReplicationSubnetGroupCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error("Expect http options but get " + typeof optionsOrCb);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    };
    DatabaseMigrationService.prototype.deleteReplicationTask = function (args, optionsOrCb, cb) {
        var command = new DeleteReplicationTaskCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error("Expect http options but get " + typeof optionsOrCb);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    };
    DatabaseMigrationService.prototype.deleteReplicationTaskAssessmentRun = function (args, optionsOrCb, cb) {
        var command = new DeleteReplicationTaskAssessmentRunCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error("Expect http options but get " + typeof optionsOrCb);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    };
    DatabaseMigrationService.prototype.describeAccountAttributes = function (args, optionsOrCb, cb) {
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
    DatabaseMigrationService.prototype.describeApplicableIndividualAssessments = function (args, optionsOrCb, cb) {
        var command = new DescribeApplicableIndividualAssessmentsCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error("Expect http options but get " + typeof optionsOrCb);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    };
    DatabaseMigrationService.prototype.describeCertificates = function (args, optionsOrCb, cb) {
        var command = new DescribeCertificatesCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error("Expect http options but get " + typeof optionsOrCb);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    };
    DatabaseMigrationService.prototype.describeConnections = function (args, optionsOrCb, cb) {
        var command = new DescribeConnectionsCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error("Expect http options but get " + typeof optionsOrCb);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    };
    DatabaseMigrationService.prototype.describeEndpoints = function (args, optionsOrCb, cb) {
        var command = new DescribeEndpointsCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error("Expect http options but get " + typeof optionsOrCb);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    };
    DatabaseMigrationService.prototype.describeEndpointSettings = function (args, optionsOrCb, cb) {
        var command = new DescribeEndpointSettingsCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error("Expect http options but get " + typeof optionsOrCb);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    };
    DatabaseMigrationService.prototype.describeEndpointTypes = function (args, optionsOrCb, cb) {
        var command = new DescribeEndpointTypesCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error("Expect http options but get " + typeof optionsOrCb);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    };
    DatabaseMigrationService.prototype.describeEventCategories = function (args, optionsOrCb, cb) {
        var command = new DescribeEventCategoriesCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error("Expect http options but get " + typeof optionsOrCb);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    };
    DatabaseMigrationService.prototype.describeEvents = function (args, optionsOrCb, cb) {
        var command = new DescribeEventsCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error("Expect http options but get " + typeof optionsOrCb);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    };
    DatabaseMigrationService.prototype.describeEventSubscriptions = function (args, optionsOrCb, cb) {
        var command = new DescribeEventSubscriptionsCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error("Expect http options but get " + typeof optionsOrCb);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    };
    DatabaseMigrationService.prototype.describeOrderableReplicationInstances = function (args, optionsOrCb, cb) {
        var command = new DescribeOrderableReplicationInstancesCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error("Expect http options but get " + typeof optionsOrCb);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    };
    DatabaseMigrationService.prototype.describePendingMaintenanceActions = function (args, optionsOrCb, cb) {
        var command = new DescribePendingMaintenanceActionsCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error("Expect http options but get " + typeof optionsOrCb);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    };
    DatabaseMigrationService.prototype.describeRefreshSchemasStatus = function (args, optionsOrCb, cb) {
        var command = new DescribeRefreshSchemasStatusCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error("Expect http options but get " + typeof optionsOrCb);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    };
    DatabaseMigrationService.prototype.describeReplicationInstances = function (args, optionsOrCb, cb) {
        var command = new DescribeReplicationInstancesCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error("Expect http options but get " + typeof optionsOrCb);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    };
    DatabaseMigrationService.prototype.describeReplicationInstanceTaskLogs = function (args, optionsOrCb, cb) {
        var command = new DescribeReplicationInstanceTaskLogsCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error("Expect http options but get " + typeof optionsOrCb);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    };
    DatabaseMigrationService.prototype.describeReplicationSubnetGroups = function (args, optionsOrCb, cb) {
        var command = new DescribeReplicationSubnetGroupsCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error("Expect http options but get " + typeof optionsOrCb);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    };
    DatabaseMigrationService.prototype.describeReplicationTaskAssessmentResults = function (args, optionsOrCb, cb) {
        var command = new DescribeReplicationTaskAssessmentResultsCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error("Expect http options but get " + typeof optionsOrCb);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    };
    DatabaseMigrationService.prototype.describeReplicationTaskAssessmentRuns = function (args, optionsOrCb, cb) {
        var command = new DescribeReplicationTaskAssessmentRunsCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error("Expect http options but get " + typeof optionsOrCb);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    };
    DatabaseMigrationService.prototype.describeReplicationTaskIndividualAssessments = function (args, optionsOrCb, cb) {
        var command = new DescribeReplicationTaskIndividualAssessmentsCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error("Expect http options but get " + typeof optionsOrCb);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    };
    DatabaseMigrationService.prototype.describeReplicationTasks = function (args, optionsOrCb, cb) {
        var command = new DescribeReplicationTasksCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error("Expect http options but get " + typeof optionsOrCb);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    };
    DatabaseMigrationService.prototype.describeSchemas = function (args, optionsOrCb, cb) {
        var command = new DescribeSchemasCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error("Expect http options but get " + typeof optionsOrCb);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    };
    DatabaseMigrationService.prototype.describeTableStatistics = function (args, optionsOrCb, cb) {
        var command = new DescribeTableStatisticsCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error("Expect http options but get " + typeof optionsOrCb);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    };
    DatabaseMigrationService.prototype.importCertificate = function (args, optionsOrCb, cb) {
        var command = new ImportCertificateCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error("Expect http options but get " + typeof optionsOrCb);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    };
    DatabaseMigrationService.prototype.listTagsForResource = function (args, optionsOrCb, cb) {
        var command = new ListTagsForResourceCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error("Expect http options but get " + typeof optionsOrCb);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    };
    DatabaseMigrationService.prototype.modifyEndpoint = function (args, optionsOrCb, cb) {
        var command = new ModifyEndpointCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error("Expect http options but get " + typeof optionsOrCb);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    };
    DatabaseMigrationService.prototype.modifyEventSubscription = function (args, optionsOrCb, cb) {
        var command = new ModifyEventSubscriptionCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error("Expect http options but get " + typeof optionsOrCb);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    };
    DatabaseMigrationService.prototype.modifyReplicationInstance = function (args, optionsOrCb, cb) {
        var command = new ModifyReplicationInstanceCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error("Expect http options but get " + typeof optionsOrCb);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    };
    DatabaseMigrationService.prototype.modifyReplicationSubnetGroup = function (args, optionsOrCb, cb) {
        var command = new ModifyReplicationSubnetGroupCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error("Expect http options but get " + typeof optionsOrCb);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    };
    DatabaseMigrationService.prototype.modifyReplicationTask = function (args, optionsOrCb, cb) {
        var command = new ModifyReplicationTaskCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error("Expect http options but get " + typeof optionsOrCb);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    };
    DatabaseMigrationService.prototype.moveReplicationTask = function (args, optionsOrCb, cb) {
        var command = new MoveReplicationTaskCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error("Expect http options but get " + typeof optionsOrCb);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    };
    DatabaseMigrationService.prototype.rebootReplicationInstance = function (args, optionsOrCb, cb) {
        var command = new RebootReplicationInstanceCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error("Expect http options but get " + typeof optionsOrCb);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    };
    DatabaseMigrationService.prototype.refreshSchemas = function (args, optionsOrCb, cb) {
        var command = new RefreshSchemasCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error("Expect http options but get " + typeof optionsOrCb);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    };
    DatabaseMigrationService.prototype.reloadTables = function (args, optionsOrCb, cb) {
        var command = new ReloadTablesCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error("Expect http options but get " + typeof optionsOrCb);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    };
    DatabaseMigrationService.prototype.removeTagsFromResource = function (args, optionsOrCb, cb) {
        var command = new RemoveTagsFromResourceCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error("Expect http options but get " + typeof optionsOrCb);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    };
    DatabaseMigrationService.prototype.startReplicationTask = function (args, optionsOrCb, cb) {
        var command = new StartReplicationTaskCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error("Expect http options but get " + typeof optionsOrCb);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    };
    DatabaseMigrationService.prototype.startReplicationTaskAssessment = function (args, optionsOrCb, cb) {
        var command = new StartReplicationTaskAssessmentCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error("Expect http options but get " + typeof optionsOrCb);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    };
    DatabaseMigrationService.prototype.startReplicationTaskAssessmentRun = function (args, optionsOrCb, cb) {
        var command = new StartReplicationTaskAssessmentRunCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error("Expect http options but get " + typeof optionsOrCb);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    };
    DatabaseMigrationService.prototype.stopReplicationTask = function (args, optionsOrCb, cb) {
        var command = new StopReplicationTaskCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error("Expect http options but get " + typeof optionsOrCb);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    };
    DatabaseMigrationService.prototype.testConnection = function (args, optionsOrCb, cb) {
        var command = new TestConnectionCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error("Expect http options but get " + typeof optionsOrCb);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    };
    return DatabaseMigrationService;
}(DatabaseMigrationServiceClient));
export { DatabaseMigrationService };
//# sourceMappingURL=DatabaseMigrationService.js.map