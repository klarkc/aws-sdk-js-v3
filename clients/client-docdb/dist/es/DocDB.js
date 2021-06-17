import { __extends } from "tslib";
import { DocDBClient } from "./DocDBClient";
import { AddTagsToResourceCommand, } from "./commands/AddTagsToResourceCommand";
import { ApplyPendingMaintenanceActionCommand, } from "./commands/ApplyPendingMaintenanceActionCommand";
import { CopyDBClusterParameterGroupCommand, } from "./commands/CopyDBClusterParameterGroupCommand";
import { CopyDBClusterSnapshotCommand, } from "./commands/CopyDBClusterSnapshotCommand";
import { CreateDBClusterCommand, } from "./commands/CreateDBClusterCommand";
import { CreateDBClusterParameterGroupCommand, } from "./commands/CreateDBClusterParameterGroupCommand";
import { CreateDBClusterSnapshotCommand, } from "./commands/CreateDBClusterSnapshotCommand";
import { CreateDBInstanceCommand, } from "./commands/CreateDBInstanceCommand";
import { CreateDBSubnetGroupCommand, } from "./commands/CreateDBSubnetGroupCommand";
import { DeleteDBClusterCommand, } from "./commands/DeleteDBClusterCommand";
import { DeleteDBClusterParameterGroupCommand, } from "./commands/DeleteDBClusterParameterGroupCommand";
import { DeleteDBClusterSnapshotCommand, } from "./commands/DeleteDBClusterSnapshotCommand";
import { DeleteDBInstanceCommand, } from "./commands/DeleteDBInstanceCommand";
import { DeleteDBSubnetGroupCommand, } from "./commands/DeleteDBSubnetGroupCommand";
import { DescribeCertificatesCommand, } from "./commands/DescribeCertificatesCommand";
import { DescribeDBClusterParameterGroupsCommand, } from "./commands/DescribeDBClusterParameterGroupsCommand";
import { DescribeDBClusterParametersCommand, } from "./commands/DescribeDBClusterParametersCommand";
import { DescribeDBClusterSnapshotAttributesCommand, } from "./commands/DescribeDBClusterSnapshotAttributesCommand";
import { DescribeDBClusterSnapshotsCommand, } from "./commands/DescribeDBClusterSnapshotsCommand";
import { DescribeDBClustersCommand, } from "./commands/DescribeDBClustersCommand";
import { DescribeDBEngineVersionsCommand, } from "./commands/DescribeDBEngineVersionsCommand";
import { DescribeDBInstancesCommand, } from "./commands/DescribeDBInstancesCommand";
import { DescribeDBSubnetGroupsCommand, } from "./commands/DescribeDBSubnetGroupsCommand";
import { DescribeEngineDefaultClusterParametersCommand, } from "./commands/DescribeEngineDefaultClusterParametersCommand";
import { DescribeEventCategoriesCommand, } from "./commands/DescribeEventCategoriesCommand";
import { DescribeEventsCommand, } from "./commands/DescribeEventsCommand";
import { DescribeOrderableDBInstanceOptionsCommand, } from "./commands/DescribeOrderableDBInstanceOptionsCommand";
import { DescribePendingMaintenanceActionsCommand, } from "./commands/DescribePendingMaintenanceActionsCommand";
import { FailoverDBClusterCommand, } from "./commands/FailoverDBClusterCommand";
import { ListTagsForResourceCommand, } from "./commands/ListTagsForResourceCommand";
import { ModifyDBClusterCommand, } from "./commands/ModifyDBClusterCommand";
import { ModifyDBClusterParameterGroupCommand, } from "./commands/ModifyDBClusterParameterGroupCommand";
import { ModifyDBClusterSnapshotAttributeCommand, } from "./commands/ModifyDBClusterSnapshotAttributeCommand";
import { ModifyDBInstanceCommand, } from "./commands/ModifyDBInstanceCommand";
import { ModifyDBSubnetGroupCommand, } from "./commands/ModifyDBSubnetGroupCommand";
import { RebootDBInstanceCommand, } from "./commands/RebootDBInstanceCommand";
import { RemoveTagsFromResourceCommand, } from "./commands/RemoveTagsFromResourceCommand";
import { ResetDBClusterParameterGroupCommand, } from "./commands/ResetDBClusterParameterGroupCommand";
import { RestoreDBClusterFromSnapshotCommand, } from "./commands/RestoreDBClusterFromSnapshotCommand";
import { RestoreDBClusterToPointInTimeCommand, } from "./commands/RestoreDBClusterToPointInTimeCommand";
import { StartDBClusterCommand, } from "./commands/StartDBClusterCommand";
import { StopDBClusterCommand, } from "./commands/StopDBClusterCommand";
/**
 * <p>Amazon DocumentDB API documentation</p>
 */
var DocDB = /** @class */ (function (_super) {
    __extends(DocDB, _super);
    function DocDB() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    DocDB.prototype.addTagsToResource = function (args, optionsOrCb, cb) {
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
    DocDB.prototype.applyPendingMaintenanceAction = function (args, optionsOrCb, cb) {
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
    DocDB.prototype.copyDBClusterParameterGroup = function (args, optionsOrCb, cb) {
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
    DocDB.prototype.copyDBClusterSnapshot = function (args, optionsOrCb, cb) {
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
    DocDB.prototype.createDBCluster = function (args, optionsOrCb, cb) {
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
    DocDB.prototype.createDBClusterParameterGroup = function (args, optionsOrCb, cb) {
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
    DocDB.prototype.createDBClusterSnapshot = function (args, optionsOrCb, cb) {
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
    DocDB.prototype.createDBInstance = function (args, optionsOrCb, cb) {
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
    DocDB.prototype.createDBSubnetGroup = function (args, optionsOrCb, cb) {
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
    DocDB.prototype.deleteDBCluster = function (args, optionsOrCb, cb) {
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
    DocDB.prototype.deleteDBClusterParameterGroup = function (args, optionsOrCb, cb) {
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
    DocDB.prototype.deleteDBClusterSnapshot = function (args, optionsOrCb, cb) {
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
    DocDB.prototype.deleteDBInstance = function (args, optionsOrCb, cb) {
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
    DocDB.prototype.deleteDBSubnetGroup = function (args, optionsOrCb, cb) {
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
    DocDB.prototype.describeCertificates = function (args, optionsOrCb, cb) {
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
    DocDB.prototype.describeDBClusterParameterGroups = function (args, optionsOrCb, cb) {
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
    DocDB.prototype.describeDBClusterParameters = function (args, optionsOrCb, cb) {
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
    DocDB.prototype.describeDBClusters = function (args, optionsOrCb, cb) {
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
    DocDB.prototype.describeDBClusterSnapshotAttributes = function (args, optionsOrCb, cb) {
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
    DocDB.prototype.describeDBClusterSnapshots = function (args, optionsOrCb, cb) {
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
    DocDB.prototype.describeDBEngineVersions = function (args, optionsOrCb, cb) {
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
    DocDB.prototype.describeDBInstances = function (args, optionsOrCb, cb) {
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
    DocDB.prototype.describeDBSubnetGroups = function (args, optionsOrCb, cb) {
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
    DocDB.prototype.describeEngineDefaultClusterParameters = function (args, optionsOrCb, cb) {
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
    DocDB.prototype.describeEventCategories = function (args, optionsOrCb, cb) {
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
    DocDB.prototype.describeEvents = function (args, optionsOrCb, cb) {
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
    DocDB.prototype.describeOrderableDBInstanceOptions = function (args, optionsOrCb, cb) {
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
    DocDB.prototype.describePendingMaintenanceActions = function (args, optionsOrCb, cb) {
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
    DocDB.prototype.failoverDBCluster = function (args, optionsOrCb, cb) {
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
    DocDB.prototype.listTagsForResource = function (args, optionsOrCb, cb) {
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
    DocDB.prototype.modifyDBCluster = function (args, optionsOrCb, cb) {
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
    DocDB.prototype.modifyDBClusterParameterGroup = function (args, optionsOrCb, cb) {
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
    DocDB.prototype.modifyDBClusterSnapshotAttribute = function (args, optionsOrCb, cb) {
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
    DocDB.prototype.modifyDBInstance = function (args, optionsOrCb, cb) {
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
    DocDB.prototype.modifyDBSubnetGroup = function (args, optionsOrCb, cb) {
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
    DocDB.prototype.rebootDBInstance = function (args, optionsOrCb, cb) {
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
    DocDB.prototype.removeTagsFromResource = function (args, optionsOrCb, cb) {
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
    DocDB.prototype.resetDBClusterParameterGroup = function (args, optionsOrCb, cb) {
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
    DocDB.prototype.restoreDBClusterFromSnapshot = function (args, optionsOrCb, cb) {
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
    DocDB.prototype.restoreDBClusterToPointInTime = function (args, optionsOrCb, cb) {
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
    DocDB.prototype.startDBCluster = function (args, optionsOrCb, cb) {
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
    DocDB.prototype.stopDBCluster = function (args, optionsOrCb, cb) {
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
    return DocDB;
}(DocDBClient));
export { DocDB };
//# sourceMappingURL=DocDB.js.map