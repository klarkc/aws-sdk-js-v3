import { __extends } from "tslib";
import { RDSClient } from "./RDSClient";
import { AddRoleToDBClusterCommand, } from "./commands/AddRoleToDBClusterCommand";
import { AddRoleToDBInstanceCommand, } from "./commands/AddRoleToDBInstanceCommand";
import { AddSourceIdentifierToSubscriptionCommand, } from "./commands/AddSourceIdentifierToSubscriptionCommand";
import { AddTagsToResourceCommand, } from "./commands/AddTagsToResourceCommand";
import { ApplyPendingMaintenanceActionCommand, } from "./commands/ApplyPendingMaintenanceActionCommand";
import { AuthorizeDBSecurityGroupIngressCommand, } from "./commands/AuthorizeDBSecurityGroupIngressCommand";
import { BacktrackDBClusterCommand, } from "./commands/BacktrackDBClusterCommand";
import { CancelExportTaskCommand, } from "./commands/CancelExportTaskCommand";
import { CopyDBClusterParameterGroupCommand, } from "./commands/CopyDBClusterParameterGroupCommand";
import { CopyDBClusterSnapshotCommand, } from "./commands/CopyDBClusterSnapshotCommand";
import { CopyDBParameterGroupCommand, } from "./commands/CopyDBParameterGroupCommand";
import { CopyDBSnapshotCommand, } from "./commands/CopyDBSnapshotCommand";
import { CopyOptionGroupCommand, } from "./commands/CopyOptionGroupCommand";
import { CreateCustomAvailabilityZoneCommand, } from "./commands/CreateCustomAvailabilityZoneCommand";
import { CreateDBClusterCommand, } from "./commands/CreateDBClusterCommand";
import { CreateDBClusterEndpointCommand, } from "./commands/CreateDBClusterEndpointCommand";
import { CreateDBClusterParameterGroupCommand, } from "./commands/CreateDBClusterParameterGroupCommand";
import { CreateDBClusterSnapshotCommand, } from "./commands/CreateDBClusterSnapshotCommand";
import { CreateDBInstanceCommand, } from "./commands/CreateDBInstanceCommand";
import { CreateDBInstanceReadReplicaCommand, } from "./commands/CreateDBInstanceReadReplicaCommand";
import { CreateDBParameterGroupCommand, } from "./commands/CreateDBParameterGroupCommand";
import { CreateDBProxyCommand, } from "./commands/CreateDBProxyCommand";
import { CreateDBProxyEndpointCommand, } from "./commands/CreateDBProxyEndpointCommand";
import { CreateDBSecurityGroupCommand, } from "./commands/CreateDBSecurityGroupCommand";
import { CreateDBSnapshotCommand, } from "./commands/CreateDBSnapshotCommand";
import { CreateDBSubnetGroupCommand, } from "./commands/CreateDBSubnetGroupCommand";
import { CreateEventSubscriptionCommand, } from "./commands/CreateEventSubscriptionCommand";
import { CreateGlobalClusterCommand, } from "./commands/CreateGlobalClusterCommand";
import { CreateOptionGroupCommand, } from "./commands/CreateOptionGroupCommand";
import { DeleteCustomAvailabilityZoneCommand, } from "./commands/DeleteCustomAvailabilityZoneCommand";
import { DeleteDBClusterCommand, } from "./commands/DeleteDBClusterCommand";
import { DeleteDBClusterEndpointCommand, } from "./commands/DeleteDBClusterEndpointCommand";
import { DeleteDBClusterParameterGroupCommand, } from "./commands/DeleteDBClusterParameterGroupCommand";
import { DeleteDBClusterSnapshotCommand, } from "./commands/DeleteDBClusterSnapshotCommand";
import { DeleteDBInstanceAutomatedBackupCommand, } from "./commands/DeleteDBInstanceAutomatedBackupCommand";
import { DeleteDBInstanceCommand, } from "./commands/DeleteDBInstanceCommand";
import { DeleteDBParameterGroupCommand, } from "./commands/DeleteDBParameterGroupCommand";
import { DeleteDBProxyCommand, } from "./commands/DeleteDBProxyCommand";
import { DeleteDBProxyEndpointCommand, } from "./commands/DeleteDBProxyEndpointCommand";
import { DeleteDBSecurityGroupCommand, } from "./commands/DeleteDBSecurityGroupCommand";
import { DeleteDBSnapshotCommand, } from "./commands/DeleteDBSnapshotCommand";
import { DeleteDBSubnetGroupCommand, } from "./commands/DeleteDBSubnetGroupCommand";
import { DeleteEventSubscriptionCommand, } from "./commands/DeleteEventSubscriptionCommand";
import { DeleteGlobalClusterCommand, } from "./commands/DeleteGlobalClusterCommand";
import { DeleteInstallationMediaCommand, } from "./commands/DeleteInstallationMediaCommand";
import { DeleteOptionGroupCommand, } from "./commands/DeleteOptionGroupCommand";
import { DeregisterDBProxyTargetsCommand, } from "./commands/DeregisterDBProxyTargetsCommand";
import { DescribeAccountAttributesCommand, } from "./commands/DescribeAccountAttributesCommand";
import { DescribeCertificatesCommand, } from "./commands/DescribeCertificatesCommand";
import { DescribeCustomAvailabilityZonesCommand, } from "./commands/DescribeCustomAvailabilityZonesCommand";
import { DescribeDBClusterBacktracksCommand, } from "./commands/DescribeDBClusterBacktracksCommand";
import { DescribeDBClusterEndpointsCommand, } from "./commands/DescribeDBClusterEndpointsCommand";
import { DescribeDBClusterParameterGroupsCommand, } from "./commands/DescribeDBClusterParameterGroupsCommand";
import { DescribeDBClusterParametersCommand, } from "./commands/DescribeDBClusterParametersCommand";
import { DescribeDBClusterSnapshotAttributesCommand, } from "./commands/DescribeDBClusterSnapshotAttributesCommand";
import { DescribeDBClusterSnapshotsCommand, } from "./commands/DescribeDBClusterSnapshotsCommand";
import { DescribeDBClustersCommand, } from "./commands/DescribeDBClustersCommand";
import { DescribeDBEngineVersionsCommand, } from "./commands/DescribeDBEngineVersionsCommand";
import { DescribeDBInstanceAutomatedBackupsCommand, } from "./commands/DescribeDBInstanceAutomatedBackupsCommand";
import { DescribeDBInstancesCommand, } from "./commands/DescribeDBInstancesCommand";
import { DescribeDBLogFilesCommand, } from "./commands/DescribeDBLogFilesCommand";
import { DescribeDBParameterGroupsCommand, } from "./commands/DescribeDBParameterGroupsCommand";
import { DescribeDBParametersCommand, } from "./commands/DescribeDBParametersCommand";
import { DescribeDBProxiesCommand, } from "./commands/DescribeDBProxiesCommand";
import { DescribeDBProxyEndpointsCommand, } from "./commands/DescribeDBProxyEndpointsCommand";
import { DescribeDBProxyTargetGroupsCommand, } from "./commands/DescribeDBProxyTargetGroupsCommand";
import { DescribeDBProxyTargetsCommand, } from "./commands/DescribeDBProxyTargetsCommand";
import { DescribeDBSecurityGroupsCommand, } from "./commands/DescribeDBSecurityGroupsCommand";
import { DescribeDBSnapshotAttributesCommand, } from "./commands/DescribeDBSnapshotAttributesCommand";
import { DescribeDBSnapshotsCommand, } from "./commands/DescribeDBSnapshotsCommand";
import { DescribeDBSubnetGroupsCommand, } from "./commands/DescribeDBSubnetGroupsCommand";
import { DescribeEngineDefaultClusterParametersCommand, } from "./commands/DescribeEngineDefaultClusterParametersCommand";
import { DescribeEngineDefaultParametersCommand, } from "./commands/DescribeEngineDefaultParametersCommand";
import { DescribeEventCategoriesCommand, } from "./commands/DescribeEventCategoriesCommand";
import { DescribeEventSubscriptionsCommand, } from "./commands/DescribeEventSubscriptionsCommand";
import { DescribeEventsCommand, } from "./commands/DescribeEventsCommand";
import { DescribeExportTasksCommand, } from "./commands/DescribeExportTasksCommand";
import { DescribeGlobalClustersCommand, } from "./commands/DescribeGlobalClustersCommand";
import { DescribeInstallationMediaCommand, } from "./commands/DescribeInstallationMediaCommand";
import { DescribeOptionGroupOptionsCommand, } from "./commands/DescribeOptionGroupOptionsCommand";
import { DescribeOptionGroupsCommand, } from "./commands/DescribeOptionGroupsCommand";
import { DescribeOrderableDBInstanceOptionsCommand, } from "./commands/DescribeOrderableDBInstanceOptionsCommand";
import { DescribePendingMaintenanceActionsCommand, } from "./commands/DescribePendingMaintenanceActionsCommand";
import { DescribeReservedDBInstancesCommand, } from "./commands/DescribeReservedDBInstancesCommand";
import { DescribeReservedDBInstancesOfferingsCommand, } from "./commands/DescribeReservedDBInstancesOfferingsCommand";
import { DescribeSourceRegionsCommand, } from "./commands/DescribeSourceRegionsCommand";
import { DescribeValidDBInstanceModificationsCommand, } from "./commands/DescribeValidDBInstanceModificationsCommand";
import { DownloadDBLogFilePortionCommand, } from "./commands/DownloadDBLogFilePortionCommand";
import { FailoverDBClusterCommand, } from "./commands/FailoverDBClusterCommand";
import { FailoverGlobalClusterCommand, } from "./commands/FailoverGlobalClusterCommand";
import { ImportInstallationMediaCommand, } from "./commands/ImportInstallationMediaCommand";
import { ListTagsForResourceCommand, } from "./commands/ListTagsForResourceCommand";
import { ModifyCertificatesCommand, } from "./commands/ModifyCertificatesCommand";
import { ModifyCurrentDBClusterCapacityCommand, } from "./commands/ModifyCurrentDBClusterCapacityCommand";
import { ModifyDBClusterCommand, } from "./commands/ModifyDBClusterCommand";
import { ModifyDBClusterEndpointCommand, } from "./commands/ModifyDBClusterEndpointCommand";
import { ModifyDBClusterParameterGroupCommand, } from "./commands/ModifyDBClusterParameterGroupCommand";
import { ModifyDBClusterSnapshotAttributeCommand, } from "./commands/ModifyDBClusterSnapshotAttributeCommand";
import { ModifyDBInstanceCommand, } from "./commands/ModifyDBInstanceCommand";
import { ModifyDBParameterGroupCommand, } from "./commands/ModifyDBParameterGroupCommand";
import { ModifyDBProxyCommand, } from "./commands/ModifyDBProxyCommand";
import { ModifyDBProxyEndpointCommand, } from "./commands/ModifyDBProxyEndpointCommand";
import { ModifyDBProxyTargetGroupCommand, } from "./commands/ModifyDBProxyTargetGroupCommand";
import { ModifyDBSnapshotAttributeCommand, } from "./commands/ModifyDBSnapshotAttributeCommand";
import { ModifyDBSnapshotCommand, } from "./commands/ModifyDBSnapshotCommand";
import { ModifyDBSubnetGroupCommand, } from "./commands/ModifyDBSubnetGroupCommand";
import { ModifyEventSubscriptionCommand, } from "./commands/ModifyEventSubscriptionCommand";
import { ModifyGlobalClusterCommand, } from "./commands/ModifyGlobalClusterCommand";
import { ModifyOptionGroupCommand, } from "./commands/ModifyOptionGroupCommand";
import { PromoteReadReplicaCommand, } from "./commands/PromoteReadReplicaCommand";
import { PromoteReadReplicaDBClusterCommand, } from "./commands/PromoteReadReplicaDBClusterCommand";
import { PurchaseReservedDBInstancesOfferingCommand, } from "./commands/PurchaseReservedDBInstancesOfferingCommand";
import { RebootDBInstanceCommand, } from "./commands/RebootDBInstanceCommand";
import { RegisterDBProxyTargetsCommand, } from "./commands/RegisterDBProxyTargetsCommand";
import { RemoveFromGlobalClusterCommand, } from "./commands/RemoveFromGlobalClusterCommand";
import { RemoveRoleFromDBClusterCommand, } from "./commands/RemoveRoleFromDBClusterCommand";
import { RemoveRoleFromDBInstanceCommand, } from "./commands/RemoveRoleFromDBInstanceCommand";
import { RemoveSourceIdentifierFromSubscriptionCommand, } from "./commands/RemoveSourceIdentifierFromSubscriptionCommand";
import { RemoveTagsFromResourceCommand, } from "./commands/RemoveTagsFromResourceCommand";
import { ResetDBClusterParameterGroupCommand, } from "./commands/ResetDBClusterParameterGroupCommand";
import { ResetDBParameterGroupCommand, } from "./commands/ResetDBParameterGroupCommand";
import { RestoreDBClusterFromS3Command, } from "./commands/RestoreDBClusterFromS3Command";
import { RestoreDBClusterFromSnapshotCommand, } from "./commands/RestoreDBClusterFromSnapshotCommand";
import { RestoreDBClusterToPointInTimeCommand, } from "./commands/RestoreDBClusterToPointInTimeCommand";
import { RestoreDBInstanceFromDBSnapshotCommand, } from "./commands/RestoreDBInstanceFromDBSnapshotCommand";
import { RestoreDBInstanceFromS3Command, } from "./commands/RestoreDBInstanceFromS3Command";
import { RestoreDBInstanceToPointInTimeCommand, } from "./commands/RestoreDBInstanceToPointInTimeCommand";
import { RevokeDBSecurityGroupIngressCommand, } from "./commands/RevokeDBSecurityGroupIngressCommand";
import { StartActivityStreamCommand, } from "./commands/StartActivityStreamCommand";
import { StartDBClusterCommand, } from "./commands/StartDBClusterCommand";
import { StartDBInstanceAutomatedBackupsReplicationCommand, } from "./commands/StartDBInstanceAutomatedBackupsReplicationCommand";
import { StartDBInstanceCommand, } from "./commands/StartDBInstanceCommand";
import { StartExportTaskCommand, } from "./commands/StartExportTaskCommand";
import { StopActivityStreamCommand, } from "./commands/StopActivityStreamCommand";
import { StopDBClusterCommand, } from "./commands/StopDBClusterCommand";
import { StopDBInstanceAutomatedBackupsReplicationCommand, } from "./commands/StopDBInstanceAutomatedBackupsReplicationCommand";
import { StopDBInstanceCommand, } from "./commands/StopDBInstanceCommand";
/**
 * <fullname>Amazon Relational Database Service</fullname>
 *         <p> </p>
 *          <p>Amazon Relational Database Service (Amazon RDS) is a web service that makes it easier to set up, operate, and
 *           scale a relational database in the cloud. It provides cost-efficient, resizeable capacity for an industry-standard relational
 *           database and manages common database administration tasks, freeing up developers to focus on what makes their applications
 *           and businesses unique.</p>
 *          <p>Amazon RDS gives you access to the capabilities of a MySQL, MariaDB, PostgreSQL, Microsoft SQL Server,
 *           Oracle, or Amazon Aurora database server. These capabilities mean that the code, applications, and tools
 *           you already use today with your existing databases work with Amazon RDS without modification. Amazon RDS
 *           automatically backs up your database and maintains the database software that powers your DB instance. Amazon RDS
 *           is flexible: you can scale your DB instance's compute resources and storage capacity to meet your
 *           application's demand. As with all Amazon Web Services, there are no up-front investments, and you pay only for
 *           the resources you use.</p>
 *          <p>This interface reference for Amazon RDS contains documentation for a programming or command line interface
 *           you can use to manage Amazon RDS. Amazon RDS is asynchronous, which means that some interfaces might
 *           require techniques such as polling or callback functions to determine when a command has been applied. In this
 *           reference, the parameter descriptions indicate whether a command is applied immediately, on the next instance reboot,
 *           or during the maintenance window. The reference structure is as follows, and we list following some related topics
 *           from the user guide.</p>
 *
 *          <p>
 *             <b>Amazon RDS API Reference</b>
 *          </p>
 *
 *          <ul>
 *             <li>
 *                <p>For the alphabetical list of API actions, see
 *         <a href="https://docs.aws.amazon.com/AmazonRDS/latest/APIReference/API_Operations.html">API Actions</a>.</p>
 *             </li>
 *             <li>
 *                <p>For the alphabetical list of data types, see
 *         <a href="https://docs.aws.amazon.com/AmazonRDS/latest/APIReference/API_Types.html">Data Types</a>.</p>
 *             </li>
 *             <li>
 *                <p>For a list of common query parameters, see
 *         <a href="https://docs.aws.amazon.com/AmazonRDS/latest/APIReference/CommonParameters.html">Common Parameters</a>.</p>
 *             </li>
 *             <li>
 *                <p>For descriptions of the error codes, see
 *         <a href="https://docs.aws.amazon.com/AmazonRDS/latest/APIReference/CommonErrors.html">Common Errors</a>.</p>
 *             </li>
 *          </ul>
 *
 *          <p>
 *             <b>Amazon RDS User Guide</b>
 *          </p>
 *
 *          <ul>
 *             <li>
 *                <p>For a summary of the Amazon RDS interfaces, see
 *         <a href="https://docs.aws.amazon.com/AmazonRDS/latest/UserGuide/Welcome.html#Welcome.Interfaces">Available RDS Interfaces</a>.</p>
 *             </li>
 *             <li>
 *                <p>For more information about how to use the Query API, see
 *         <a href="https://docs.aws.amazon.com/AmazonRDS/latest/UserGuide/Using_the_Query_API.html">Using the Query API</a>.</p>
 *             </li>
 *          </ul>
 */
var RDS = /** @class */ (function (_super) {
    __extends(RDS, _super);
    function RDS() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    RDS.prototype.addRoleToDBCluster = function (args, optionsOrCb, cb) {
        var command = new AddRoleToDBClusterCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error("Expect http options but get " + typeof optionsOrCb);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    };
    RDS.prototype.addRoleToDBInstance = function (args, optionsOrCb, cb) {
        var command = new AddRoleToDBInstanceCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error("Expect http options but get " + typeof optionsOrCb);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    };
    RDS.prototype.addSourceIdentifierToSubscription = function (args, optionsOrCb, cb) {
        var command = new AddSourceIdentifierToSubscriptionCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error("Expect http options but get " + typeof optionsOrCb);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    };
    RDS.prototype.addTagsToResource = function (args, optionsOrCb, cb) {
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
    RDS.prototype.applyPendingMaintenanceAction = function (args, optionsOrCb, cb) {
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
    RDS.prototype.authorizeDBSecurityGroupIngress = function (args, optionsOrCb, cb) {
        var command = new AuthorizeDBSecurityGroupIngressCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error("Expect http options but get " + typeof optionsOrCb);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    };
    RDS.prototype.backtrackDBCluster = function (args, optionsOrCb, cb) {
        var command = new BacktrackDBClusterCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error("Expect http options but get " + typeof optionsOrCb);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    };
    RDS.prototype.cancelExportTask = function (args, optionsOrCb, cb) {
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
    RDS.prototype.copyDBClusterParameterGroup = function (args, optionsOrCb, cb) {
        var command = new CopyDBClusterParameterGroupCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error("Expect http options but get " + typeof optionsOrCb);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    };
    RDS.prototype.copyDBClusterSnapshot = function (args, optionsOrCb, cb) {
        var command = new CopyDBClusterSnapshotCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error("Expect http options but get " + typeof optionsOrCb);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    };
    RDS.prototype.copyDBParameterGroup = function (args, optionsOrCb, cb) {
        var command = new CopyDBParameterGroupCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error("Expect http options but get " + typeof optionsOrCb);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    };
    RDS.prototype.copyDBSnapshot = function (args, optionsOrCb, cb) {
        var command = new CopyDBSnapshotCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error("Expect http options but get " + typeof optionsOrCb);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    };
    RDS.prototype.copyOptionGroup = function (args, optionsOrCb, cb) {
        var command = new CopyOptionGroupCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error("Expect http options but get " + typeof optionsOrCb);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    };
    RDS.prototype.createCustomAvailabilityZone = function (args, optionsOrCb, cb) {
        var command = new CreateCustomAvailabilityZoneCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error("Expect http options but get " + typeof optionsOrCb);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    };
    RDS.prototype.createDBCluster = function (args, optionsOrCb, cb) {
        var command = new CreateDBClusterCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error("Expect http options but get " + typeof optionsOrCb);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    };
    RDS.prototype.createDBClusterEndpoint = function (args, optionsOrCb, cb) {
        var command = new CreateDBClusterEndpointCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error("Expect http options but get " + typeof optionsOrCb);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    };
    RDS.prototype.createDBClusterParameterGroup = function (args, optionsOrCb, cb) {
        var command = new CreateDBClusterParameterGroupCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error("Expect http options but get " + typeof optionsOrCb);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    };
    RDS.prototype.createDBClusterSnapshot = function (args, optionsOrCb, cb) {
        var command = new CreateDBClusterSnapshotCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error("Expect http options but get " + typeof optionsOrCb);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    };
    RDS.prototype.createDBInstance = function (args, optionsOrCb, cb) {
        var command = new CreateDBInstanceCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error("Expect http options but get " + typeof optionsOrCb);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    };
    RDS.prototype.createDBInstanceReadReplica = function (args, optionsOrCb, cb) {
        var command = new CreateDBInstanceReadReplicaCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error("Expect http options but get " + typeof optionsOrCb);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    };
    RDS.prototype.createDBParameterGroup = function (args, optionsOrCb, cb) {
        var command = new CreateDBParameterGroupCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error("Expect http options but get " + typeof optionsOrCb);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    };
    RDS.prototype.createDBProxy = function (args, optionsOrCb, cb) {
        var command = new CreateDBProxyCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error("Expect http options but get " + typeof optionsOrCb);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    };
    RDS.prototype.createDBProxyEndpoint = function (args, optionsOrCb, cb) {
        var command = new CreateDBProxyEndpointCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error("Expect http options but get " + typeof optionsOrCb);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    };
    RDS.prototype.createDBSecurityGroup = function (args, optionsOrCb, cb) {
        var command = new CreateDBSecurityGroupCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error("Expect http options but get " + typeof optionsOrCb);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    };
    RDS.prototype.createDBSnapshot = function (args, optionsOrCb, cb) {
        var command = new CreateDBSnapshotCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error("Expect http options but get " + typeof optionsOrCb);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    };
    RDS.prototype.createDBSubnetGroup = function (args, optionsOrCb, cb) {
        var command = new CreateDBSubnetGroupCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error("Expect http options but get " + typeof optionsOrCb);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    };
    RDS.prototype.createEventSubscription = function (args, optionsOrCb, cb) {
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
    RDS.prototype.createGlobalCluster = function (args, optionsOrCb, cb) {
        var command = new CreateGlobalClusterCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error("Expect http options but get " + typeof optionsOrCb);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    };
    RDS.prototype.createOptionGroup = function (args, optionsOrCb, cb) {
        var command = new CreateOptionGroupCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error("Expect http options but get " + typeof optionsOrCb);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    };
    RDS.prototype.deleteCustomAvailabilityZone = function (args, optionsOrCb, cb) {
        var command = new DeleteCustomAvailabilityZoneCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error("Expect http options but get " + typeof optionsOrCb);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    };
    RDS.prototype.deleteDBCluster = function (args, optionsOrCb, cb) {
        var command = new DeleteDBClusterCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error("Expect http options but get " + typeof optionsOrCb);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    };
    RDS.prototype.deleteDBClusterEndpoint = function (args, optionsOrCb, cb) {
        var command = new DeleteDBClusterEndpointCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error("Expect http options but get " + typeof optionsOrCb);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    };
    RDS.prototype.deleteDBClusterParameterGroup = function (args, optionsOrCb, cb) {
        var command = new DeleteDBClusterParameterGroupCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error("Expect http options but get " + typeof optionsOrCb);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    };
    RDS.prototype.deleteDBClusterSnapshot = function (args, optionsOrCb, cb) {
        var command = new DeleteDBClusterSnapshotCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error("Expect http options but get " + typeof optionsOrCb);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    };
    RDS.prototype.deleteDBInstance = function (args, optionsOrCb, cb) {
        var command = new DeleteDBInstanceCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error("Expect http options but get " + typeof optionsOrCb);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    };
    RDS.prototype.deleteDBInstanceAutomatedBackup = function (args, optionsOrCb, cb) {
        var command = new DeleteDBInstanceAutomatedBackupCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error("Expect http options but get " + typeof optionsOrCb);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    };
    RDS.prototype.deleteDBParameterGroup = function (args, optionsOrCb, cb) {
        var command = new DeleteDBParameterGroupCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error("Expect http options but get " + typeof optionsOrCb);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    };
    RDS.prototype.deleteDBProxy = function (args, optionsOrCb, cb) {
        var command = new DeleteDBProxyCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error("Expect http options but get " + typeof optionsOrCb);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    };
    RDS.prototype.deleteDBProxyEndpoint = function (args, optionsOrCb, cb) {
        var command = new DeleteDBProxyEndpointCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error("Expect http options but get " + typeof optionsOrCb);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    };
    RDS.prototype.deleteDBSecurityGroup = function (args, optionsOrCb, cb) {
        var command = new DeleteDBSecurityGroupCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error("Expect http options but get " + typeof optionsOrCb);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    };
    RDS.prototype.deleteDBSnapshot = function (args, optionsOrCb, cb) {
        var command = new DeleteDBSnapshotCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error("Expect http options but get " + typeof optionsOrCb);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    };
    RDS.prototype.deleteDBSubnetGroup = function (args, optionsOrCb, cb) {
        var command = new DeleteDBSubnetGroupCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error("Expect http options but get " + typeof optionsOrCb);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    };
    RDS.prototype.deleteEventSubscription = function (args, optionsOrCb, cb) {
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
    RDS.prototype.deleteGlobalCluster = function (args, optionsOrCb, cb) {
        var command = new DeleteGlobalClusterCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error("Expect http options but get " + typeof optionsOrCb);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    };
    RDS.prototype.deleteInstallationMedia = function (args, optionsOrCb, cb) {
        var command = new DeleteInstallationMediaCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error("Expect http options but get " + typeof optionsOrCb);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    };
    RDS.prototype.deleteOptionGroup = function (args, optionsOrCb, cb) {
        var command = new DeleteOptionGroupCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error("Expect http options but get " + typeof optionsOrCb);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    };
    RDS.prototype.deregisterDBProxyTargets = function (args, optionsOrCb, cb) {
        var command = new DeregisterDBProxyTargetsCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error("Expect http options but get " + typeof optionsOrCb);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    };
    RDS.prototype.describeAccountAttributes = function (args, optionsOrCb, cb) {
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
    RDS.prototype.describeCertificates = function (args, optionsOrCb, cb) {
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
    RDS.prototype.describeCustomAvailabilityZones = function (args, optionsOrCb, cb) {
        var command = new DescribeCustomAvailabilityZonesCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error("Expect http options but get " + typeof optionsOrCb);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    };
    RDS.prototype.describeDBClusterBacktracks = function (args, optionsOrCb, cb) {
        var command = new DescribeDBClusterBacktracksCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error("Expect http options but get " + typeof optionsOrCb);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    };
    RDS.prototype.describeDBClusterEndpoints = function (args, optionsOrCb, cb) {
        var command = new DescribeDBClusterEndpointsCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error("Expect http options but get " + typeof optionsOrCb);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    };
    RDS.prototype.describeDBClusterParameterGroups = function (args, optionsOrCb, cb) {
        var command = new DescribeDBClusterParameterGroupsCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error("Expect http options but get " + typeof optionsOrCb);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    };
    RDS.prototype.describeDBClusterParameters = function (args, optionsOrCb, cb) {
        var command = new DescribeDBClusterParametersCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error("Expect http options but get " + typeof optionsOrCb);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    };
    RDS.prototype.describeDBClusters = function (args, optionsOrCb, cb) {
        var command = new DescribeDBClustersCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error("Expect http options but get " + typeof optionsOrCb);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    };
    RDS.prototype.describeDBClusterSnapshotAttributes = function (args, optionsOrCb, cb) {
        var command = new DescribeDBClusterSnapshotAttributesCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error("Expect http options but get " + typeof optionsOrCb);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    };
    RDS.prototype.describeDBClusterSnapshots = function (args, optionsOrCb, cb) {
        var command = new DescribeDBClusterSnapshotsCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error("Expect http options but get " + typeof optionsOrCb);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    };
    RDS.prototype.describeDBEngineVersions = function (args, optionsOrCb, cb) {
        var command = new DescribeDBEngineVersionsCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error("Expect http options but get " + typeof optionsOrCb);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    };
    RDS.prototype.describeDBInstanceAutomatedBackups = function (args, optionsOrCb, cb) {
        var command = new DescribeDBInstanceAutomatedBackupsCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error("Expect http options but get " + typeof optionsOrCb);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    };
    RDS.prototype.describeDBInstances = function (args, optionsOrCb, cb) {
        var command = new DescribeDBInstancesCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error("Expect http options but get " + typeof optionsOrCb);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    };
    RDS.prototype.describeDBLogFiles = function (args, optionsOrCb, cb) {
        var command = new DescribeDBLogFilesCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error("Expect http options but get " + typeof optionsOrCb);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    };
    RDS.prototype.describeDBParameterGroups = function (args, optionsOrCb, cb) {
        var command = new DescribeDBParameterGroupsCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error("Expect http options but get " + typeof optionsOrCb);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    };
    RDS.prototype.describeDBParameters = function (args, optionsOrCb, cb) {
        var command = new DescribeDBParametersCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error("Expect http options but get " + typeof optionsOrCb);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    };
    RDS.prototype.describeDBProxies = function (args, optionsOrCb, cb) {
        var command = new DescribeDBProxiesCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error("Expect http options but get " + typeof optionsOrCb);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    };
    RDS.prototype.describeDBProxyEndpoints = function (args, optionsOrCb, cb) {
        var command = new DescribeDBProxyEndpointsCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error("Expect http options but get " + typeof optionsOrCb);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    };
    RDS.prototype.describeDBProxyTargetGroups = function (args, optionsOrCb, cb) {
        var command = new DescribeDBProxyTargetGroupsCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error("Expect http options but get " + typeof optionsOrCb);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    };
    RDS.prototype.describeDBProxyTargets = function (args, optionsOrCb, cb) {
        var command = new DescribeDBProxyTargetsCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error("Expect http options but get " + typeof optionsOrCb);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    };
    RDS.prototype.describeDBSecurityGroups = function (args, optionsOrCb, cb) {
        var command = new DescribeDBSecurityGroupsCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error("Expect http options but get " + typeof optionsOrCb);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    };
    RDS.prototype.describeDBSnapshotAttributes = function (args, optionsOrCb, cb) {
        var command = new DescribeDBSnapshotAttributesCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error("Expect http options but get " + typeof optionsOrCb);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    };
    RDS.prototype.describeDBSnapshots = function (args, optionsOrCb, cb) {
        var command = new DescribeDBSnapshotsCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error("Expect http options but get " + typeof optionsOrCb);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    };
    RDS.prototype.describeDBSubnetGroups = function (args, optionsOrCb, cb) {
        var command = new DescribeDBSubnetGroupsCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error("Expect http options but get " + typeof optionsOrCb);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    };
    RDS.prototype.describeEngineDefaultClusterParameters = function (args, optionsOrCb, cb) {
        var command = new DescribeEngineDefaultClusterParametersCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error("Expect http options but get " + typeof optionsOrCb);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    };
    RDS.prototype.describeEngineDefaultParameters = function (args, optionsOrCb, cb) {
        var command = new DescribeEngineDefaultParametersCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error("Expect http options but get " + typeof optionsOrCb);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    };
    RDS.prototype.describeEventCategories = function (args, optionsOrCb, cb) {
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
    RDS.prototype.describeEvents = function (args, optionsOrCb, cb) {
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
    RDS.prototype.describeEventSubscriptions = function (args, optionsOrCb, cb) {
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
    RDS.prototype.describeExportTasks = function (args, optionsOrCb, cb) {
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
    RDS.prototype.describeGlobalClusters = function (args, optionsOrCb, cb) {
        var command = new DescribeGlobalClustersCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error("Expect http options but get " + typeof optionsOrCb);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    };
    RDS.prototype.describeInstallationMedia = function (args, optionsOrCb, cb) {
        var command = new DescribeInstallationMediaCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error("Expect http options but get " + typeof optionsOrCb);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    };
    RDS.prototype.describeOptionGroupOptions = function (args, optionsOrCb, cb) {
        var command = new DescribeOptionGroupOptionsCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error("Expect http options but get " + typeof optionsOrCb);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    };
    RDS.prototype.describeOptionGroups = function (args, optionsOrCb, cb) {
        var command = new DescribeOptionGroupsCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error("Expect http options but get " + typeof optionsOrCb);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    };
    RDS.prototype.describeOrderableDBInstanceOptions = function (args, optionsOrCb, cb) {
        var command = new DescribeOrderableDBInstanceOptionsCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error("Expect http options but get " + typeof optionsOrCb);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    };
    RDS.prototype.describePendingMaintenanceActions = function (args, optionsOrCb, cb) {
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
    RDS.prototype.describeReservedDBInstances = function (args, optionsOrCb, cb) {
        var command = new DescribeReservedDBInstancesCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error("Expect http options but get " + typeof optionsOrCb);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    };
    RDS.prototype.describeReservedDBInstancesOfferings = function (args, optionsOrCb, cb) {
        var command = new DescribeReservedDBInstancesOfferingsCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error("Expect http options but get " + typeof optionsOrCb);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    };
    RDS.prototype.describeSourceRegions = function (args, optionsOrCb, cb) {
        var command = new DescribeSourceRegionsCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error("Expect http options but get " + typeof optionsOrCb);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    };
    RDS.prototype.describeValidDBInstanceModifications = function (args, optionsOrCb, cb) {
        var command = new DescribeValidDBInstanceModificationsCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error("Expect http options but get " + typeof optionsOrCb);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    };
    RDS.prototype.downloadDBLogFilePortion = function (args, optionsOrCb, cb) {
        var command = new DownloadDBLogFilePortionCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error("Expect http options but get " + typeof optionsOrCb);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    };
    RDS.prototype.failoverDBCluster = function (args, optionsOrCb, cb) {
        var command = new FailoverDBClusterCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error("Expect http options but get " + typeof optionsOrCb);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    };
    RDS.prototype.failoverGlobalCluster = function (args, optionsOrCb, cb) {
        var command = new FailoverGlobalClusterCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error("Expect http options but get " + typeof optionsOrCb);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    };
    RDS.prototype.importInstallationMedia = function (args, optionsOrCb, cb) {
        var command = new ImportInstallationMediaCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error("Expect http options but get " + typeof optionsOrCb);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    };
    RDS.prototype.listTagsForResource = function (args, optionsOrCb, cb) {
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
    RDS.prototype.modifyCertificates = function (args, optionsOrCb, cb) {
        var command = new ModifyCertificatesCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error("Expect http options but get " + typeof optionsOrCb);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    };
    RDS.prototype.modifyCurrentDBClusterCapacity = function (args, optionsOrCb, cb) {
        var command = new ModifyCurrentDBClusterCapacityCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error("Expect http options but get " + typeof optionsOrCb);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    };
    RDS.prototype.modifyDBCluster = function (args, optionsOrCb, cb) {
        var command = new ModifyDBClusterCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error("Expect http options but get " + typeof optionsOrCb);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    };
    RDS.prototype.modifyDBClusterEndpoint = function (args, optionsOrCb, cb) {
        var command = new ModifyDBClusterEndpointCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error("Expect http options but get " + typeof optionsOrCb);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    };
    RDS.prototype.modifyDBClusterParameterGroup = function (args, optionsOrCb, cb) {
        var command = new ModifyDBClusterParameterGroupCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error("Expect http options but get " + typeof optionsOrCb);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    };
    RDS.prototype.modifyDBClusterSnapshotAttribute = function (args, optionsOrCb, cb) {
        var command = new ModifyDBClusterSnapshotAttributeCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error("Expect http options but get " + typeof optionsOrCb);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    };
    RDS.prototype.modifyDBInstance = function (args, optionsOrCb, cb) {
        var command = new ModifyDBInstanceCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error("Expect http options but get " + typeof optionsOrCb);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    };
    RDS.prototype.modifyDBParameterGroup = function (args, optionsOrCb, cb) {
        var command = new ModifyDBParameterGroupCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error("Expect http options but get " + typeof optionsOrCb);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    };
    RDS.prototype.modifyDBProxy = function (args, optionsOrCb, cb) {
        var command = new ModifyDBProxyCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error("Expect http options but get " + typeof optionsOrCb);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    };
    RDS.prototype.modifyDBProxyEndpoint = function (args, optionsOrCb, cb) {
        var command = new ModifyDBProxyEndpointCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error("Expect http options but get " + typeof optionsOrCb);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    };
    RDS.prototype.modifyDBProxyTargetGroup = function (args, optionsOrCb, cb) {
        var command = new ModifyDBProxyTargetGroupCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error("Expect http options but get " + typeof optionsOrCb);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    };
    RDS.prototype.modifyDBSnapshot = function (args, optionsOrCb, cb) {
        var command = new ModifyDBSnapshotCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error("Expect http options but get " + typeof optionsOrCb);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    };
    RDS.prototype.modifyDBSnapshotAttribute = function (args, optionsOrCb, cb) {
        var command = new ModifyDBSnapshotAttributeCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error("Expect http options but get " + typeof optionsOrCb);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    };
    RDS.prototype.modifyDBSubnetGroup = function (args, optionsOrCb, cb) {
        var command = new ModifyDBSubnetGroupCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error("Expect http options but get " + typeof optionsOrCb);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    };
    RDS.prototype.modifyEventSubscription = function (args, optionsOrCb, cb) {
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
    RDS.prototype.modifyGlobalCluster = function (args, optionsOrCb, cb) {
        var command = new ModifyGlobalClusterCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error("Expect http options but get " + typeof optionsOrCb);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    };
    RDS.prototype.modifyOptionGroup = function (args, optionsOrCb, cb) {
        var command = new ModifyOptionGroupCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error("Expect http options but get " + typeof optionsOrCb);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    };
    RDS.prototype.promoteReadReplica = function (args, optionsOrCb, cb) {
        var command = new PromoteReadReplicaCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error("Expect http options but get " + typeof optionsOrCb);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    };
    RDS.prototype.promoteReadReplicaDBCluster = function (args, optionsOrCb, cb) {
        var command = new PromoteReadReplicaDBClusterCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error("Expect http options but get " + typeof optionsOrCb);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    };
    RDS.prototype.purchaseReservedDBInstancesOffering = function (args, optionsOrCb, cb) {
        var command = new PurchaseReservedDBInstancesOfferingCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error("Expect http options but get " + typeof optionsOrCb);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    };
    RDS.prototype.rebootDBInstance = function (args, optionsOrCb, cb) {
        var command = new RebootDBInstanceCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error("Expect http options but get " + typeof optionsOrCb);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    };
    RDS.prototype.registerDBProxyTargets = function (args, optionsOrCb, cb) {
        var command = new RegisterDBProxyTargetsCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error("Expect http options but get " + typeof optionsOrCb);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    };
    RDS.prototype.removeFromGlobalCluster = function (args, optionsOrCb, cb) {
        var command = new RemoveFromGlobalClusterCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error("Expect http options but get " + typeof optionsOrCb);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    };
    RDS.prototype.removeRoleFromDBCluster = function (args, optionsOrCb, cb) {
        var command = new RemoveRoleFromDBClusterCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error("Expect http options but get " + typeof optionsOrCb);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    };
    RDS.prototype.removeRoleFromDBInstance = function (args, optionsOrCb, cb) {
        var command = new RemoveRoleFromDBInstanceCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error("Expect http options but get " + typeof optionsOrCb);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    };
    RDS.prototype.removeSourceIdentifierFromSubscription = function (args, optionsOrCb, cb) {
        var command = new RemoveSourceIdentifierFromSubscriptionCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error("Expect http options but get " + typeof optionsOrCb);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    };
    RDS.prototype.removeTagsFromResource = function (args, optionsOrCb, cb) {
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
    RDS.prototype.resetDBClusterParameterGroup = function (args, optionsOrCb, cb) {
        var command = new ResetDBClusterParameterGroupCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error("Expect http options but get " + typeof optionsOrCb);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    };
    RDS.prototype.resetDBParameterGroup = function (args, optionsOrCb, cb) {
        var command = new ResetDBParameterGroupCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error("Expect http options but get " + typeof optionsOrCb);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    };
    RDS.prototype.restoreDBClusterFromS3 = function (args, optionsOrCb, cb) {
        var command = new RestoreDBClusterFromS3Command(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error("Expect http options but get " + typeof optionsOrCb);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    };
    RDS.prototype.restoreDBClusterFromSnapshot = function (args, optionsOrCb, cb) {
        var command = new RestoreDBClusterFromSnapshotCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error("Expect http options but get " + typeof optionsOrCb);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    };
    RDS.prototype.restoreDBClusterToPointInTime = function (args, optionsOrCb, cb) {
        var command = new RestoreDBClusterToPointInTimeCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error("Expect http options but get " + typeof optionsOrCb);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    };
    RDS.prototype.restoreDBInstanceFromDBSnapshot = function (args, optionsOrCb, cb) {
        var command = new RestoreDBInstanceFromDBSnapshotCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error("Expect http options but get " + typeof optionsOrCb);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    };
    RDS.prototype.restoreDBInstanceFromS3 = function (args, optionsOrCb, cb) {
        var command = new RestoreDBInstanceFromS3Command(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error("Expect http options but get " + typeof optionsOrCb);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    };
    RDS.prototype.restoreDBInstanceToPointInTime = function (args, optionsOrCb, cb) {
        var command = new RestoreDBInstanceToPointInTimeCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error("Expect http options but get " + typeof optionsOrCb);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    };
    RDS.prototype.revokeDBSecurityGroupIngress = function (args, optionsOrCb, cb) {
        var command = new RevokeDBSecurityGroupIngressCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error("Expect http options but get " + typeof optionsOrCb);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    };
    RDS.prototype.startActivityStream = function (args, optionsOrCb, cb) {
        var command = new StartActivityStreamCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error("Expect http options but get " + typeof optionsOrCb);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    };
    RDS.prototype.startDBCluster = function (args, optionsOrCb, cb) {
        var command = new StartDBClusterCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error("Expect http options but get " + typeof optionsOrCb);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    };
    RDS.prototype.startDBInstance = function (args, optionsOrCb, cb) {
        var command = new StartDBInstanceCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error("Expect http options but get " + typeof optionsOrCb);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    };
    RDS.prototype.startDBInstanceAutomatedBackupsReplication = function (args, optionsOrCb, cb) {
        var command = new StartDBInstanceAutomatedBackupsReplicationCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error("Expect http options but get " + typeof optionsOrCb);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    };
    RDS.prototype.startExportTask = function (args, optionsOrCb, cb) {
        var command = new StartExportTaskCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error("Expect http options but get " + typeof optionsOrCb);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    };
    RDS.prototype.stopActivityStream = function (args, optionsOrCb, cb) {
        var command = new StopActivityStreamCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error("Expect http options but get " + typeof optionsOrCb);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    };
    RDS.prototype.stopDBCluster = function (args, optionsOrCb, cb) {
        var command = new StopDBClusterCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error("Expect http options but get " + typeof optionsOrCb);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    };
    RDS.prototype.stopDBInstance = function (args, optionsOrCb, cb) {
        var command = new StopDBInstanceCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error("Expect http options but get " + typeof optionsOrCb);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    };
    RDS.prototype.stopDBInstanceAutomatedBackupsReplication = function (args, optionsOrCb, cb) {
        var command = new StopDBInstanceAutomatedBackupsReplicationCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error("Expect http options but get " + typeof optionsOrCb);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    };
    return RDS;
}(RDSClient));
export { RDS };
//# sourceMappingURL=RDS.js.map