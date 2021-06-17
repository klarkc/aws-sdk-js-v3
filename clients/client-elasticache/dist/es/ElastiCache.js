import { __extends } from "tslib";
import { ElastiCacheClient } from "./ElastiCacheClient";
import { AddTagsToResourceCommand, } from "./commands/AddTagsToResourceCommand";
import { AuthorizeCacheSecurityGroupIngressCommand, } from "./commands/AuthorizeCacheSecurityGroupIngressCommand";
import { BatchApplyUpdateActionCommand, } from "./commands/BatchApplyUpdateActionCommand";
import { BatchStopUpdateActionCommand, } from "./commands/BatchStopUpdateActionCommand";
import { CompleteMigrationCommand, } from "./commands/CompleteMigrationCommand";
import { CopySnapshotCommand, } from "./commands/CopySnapshotCommand";
import { CreateCacheClusterCommand, } from "./commands/CreateCacheClusterCommand";
import { CreateCacheParameterGroupCommand, } from "./commands/CreateCacheParameterGroupCommand";
import { CreateCacheSecurityGroupCommand, } from "./commands/CreateCacheSecurityGroupCommand";
import { CreateCacheSubnetGroupCommand, } from "./commands/CreateCacheSubnetGroupCommand";
import { CreateGlobalReplicationGroupCommand, } from "./commands/CreateGlobalReplicationGroupCommand";
import { CreateReplicationGroupCommand, } from "./commands/CreateReplicationGroupCommand";
import { CreateSnapshotCommand, } from "./commands/CreateSnapshotCommand";
import { CreateUserCommand } from "./commands/CreateUserCommand";
import { CreateUserGroupCommand, } from "./commands/CreateUserGroupCommand";
import { DecreaseNodeGroupsInGlobalReplicationGroupCommand, } from "./commands/DecreaseNodeGroupsInGlobalReplicationGroupCommand";
import { DecreaseReplicaCountCommand, } from "./commands/DecreaseReplicaCountCommand";
import { DeleteCacheClusterCommand, } from "./commands/DeleteCacheClusterCommand";
import { DeleteCacheParameterGroupCommand, } from "./commands/DeleteCacheParameterGroupCommand";
import { DeleteCacheSecurityGroupCommand, } from "./commands/DeleteCacheSecurityGroupCommand";
import { DeleteCacheSubnetGroupCommand, } from "./commands/DeleteCacheSubnetGroupCommand";
import { DeleteGlobalReplicationGroupCommand, } from "./commands/DeleteGlobalReplicationGroupCommand";
import { DeleteReplicationGroupCommand, } from "./commands/DeleteReplicationGroupCommand";
import { DeleteSnapshotCommand, } from "./commands/DeleteSnapshotCommand";
import { DeleteUserCommand } from "./commands/DeleteUserCommand";
import { DeleteUserGroupCommand, } from "./commands/DeleteUserGroupCommand";
import { DescribeCacheClustersCommand, } from "./commands/DescribeCacheClustersCommand";
import { DescribeCacheEngineVersionsCommand, } from "./commands/DescribeCacheEngineVersionsCommand";
import { DescribeCacheParameterGroupsCommand, } from "./commands/DescribeCacheParameterGroupsCommand";
import { DescribeCacheParametersCommand, } from "./commands/DescribeCacheParametersCommand";
import { DescribeCacheSecurityGroupsCommand, } from "./commands/DescribeCacheSecurityGroupsCommand";
import { DescribeCacheSubnetGroupsCommand, } from "./commands/DescribeCacheSubnetGroupsCommand";
import { DescribeEngineDefaultParametersCommand, } from "./commands/DescribeEngineDefaultParametersCommand";
import { DescribeEventsCommand, } from "./commands/DescribeEventsCommand";
import { DescribeGlobalReplicationGroupsCommand, } from "./commands/DescribeGlobalReplicationGroupsCommand";
import { DescribeReplicationGroupsCommand, } from "./commands/DescribeReplicationGroupsCommand";
import { DescribeReservedCacheNodesCommand, } from "./commands/DescribeReservedCacheNodesCommand";
import { DescribeReservedCacheNodesOfferingsCommand, } from "./commands/DescribeReservedCacheNodesOfferingsCommand";
import { DescribeServiceUpdatesCommand, } from "./commands/DescribeServiceUpdatesCommand";
import { DescribeSnapshotsCommand, } from "./commands/DescribeSnapshotsCommand";
import { DescribeUpdateActionsCommand, } from "./commands/DescribeUpdateActionsCommand";
import { DescribeUserGroupsCommand, } from "./commands/DescribeUserGroupsCommand";
import { DescribeUsersCommand, } from "./commands/DescribeUsersCommand";
import { DisassociateGlobalReplicationGroupCommand, } from "./commands/DisassociateGlobalReplicationGroupCommand";
import { FailoverGlobalReplicationGroupCommand, } from "./commands/FailoverGlobalReplicationGroupCommand";
import { IncreaseNodeGroupsInGlobalReplicationGroupCommand, } from "./commands/IncreaseNodeGroupsInGlobalReplicationGroupCommand";
import { IncreaseReplicaCountCommand, } from "./commands/IncreaseReplicaCountCommand";
import { ListAllowedNodeTypeModificationsCommand, } from "./commands/ListAllowedNodeTypeModificationsCommand";
import { ListTagsForResourceCommand, } from "./commands/ListTagsForResourceCommand";
import { ModifyCacheClusterCommand, } from "./commands/ModifyCacheClusterCommand";
import { ModifyCacheParameterGroupCommand, } from "./commands/ModifyCacheParameterGroupCommand";
import { ModifyCacheSubnetGroupCommand, } from "./commands/ModifyCacheSubnetGroupCommand";
import { ModifyGlobalReplicationGroupCommand, } from "./commands/ModifyGlobalReplicationGroupCommand";
import { ModifyReplicationGroupCommand, } from "./commands/ModifyReplicationGroupCommand";
import { ModifyReplicationGroupShardConfigurationCommand, } from "./commands/ModifyReplicationGroupShardConfigurationCommand";
import { ModifyUserCommand } from "./commands/ModifyUserCommand";
import { ModifyUserGroupCommand, } from "./commands/ModifyUserGroupCommand";
import { PurchaseReservedCacheNodesOfferingCommand, } from "./commands/PurchaseReservedCacheNodesOfferingCommand";
import { RebalanceSlotsInGlobalReplicationGroupCommand, } from "./commands/RebalanceSlotsInGlobalReplicationGroupCommand";
import { RebootCacheClusterCommand, } from "./commands/RebootCacheClusterCommand";
import { RemoveTagsFromResourceCommand, } from "./commands/RemoveTagsFromResourceCommand";
import { ResetCacheParameterGroupCommand, } from "./commands/ResetCacheParameterGroupCommand";
import { RevokeCacheSecurityGroupIngressCommand, } from "./commands/RevokeCacheSecurityGroupIngressCommand";
import { StartMigrationCommand, } from "./commands/StartMigrationCommand";
import { TestFailoverCommand, } from "./commands/TestFailoverCommand";
/**
 * <fullname>Amazon ElastiCache</fullname>
 *         <p>Amazon ElastiCache is a web service that makes it easier to set up, operate,
 *             and scale a distributed cache in the cloud.</p>
 *         <p>With ElastiCache, customers get all of the benefits of a high-performance,
 *             in-memory cache with less of the administrative burden involved in launching and managing a distributed cache.
 *             The service makes setup, scaling,
 *             and cluster failure handling much simpler than in a self-managed cache deployment.</p>
 *         <p>In addition, through integration with Amazon CloudWatch,
 *             customers get enhanced visibility into the key performance statistics
 *             associated with their cache and can receive alarms if a part of their cache runs hot.</p>
 */
var ElastiCache = /** @class */ (function (_super) {
    __extends(ElastiCache, _super);
    function ElastiCache() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    ElastiCache.prototype.addTagsToResource = function (args, optionsOrCb, cb) {
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
    ElastiCache.prototype.authorizeCacheSecurityGroupIngress = function (args, optionsOrCb, cb) {
        var command = new AuthorizeCacheSecurityGroupIngressCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error("Expect http options but get " + typeof optionsOrCb);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    };
    ElastiCache.prototype.batchApplyUpdateAction = function (args, optionsOrCb, cb) {
        var command = new BatchApplyUpdateActionCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error("Expect http options but get " + typeof optionsOrCb);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    };
    ElastiCache.prototype.batchStopUpdateAction = function (args, optionsOrCb, cb) {
        var command = new BatchStopUpdateActionCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error("Expect http options but get " + typeof optionsOrCb);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    };
    ElastiCache.prototype.completeMigration = function (args, optionsOrCb, cb) {
        var command = new CompleteMigrationCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error("Expect http options but get " + typeof optionsOrCb);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    };
    ElastiCache.prototype.copySnapshot = function (args, optionsOrCb, cb) {
        var command = new CopySnapshotCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error("Expect http options but get " + typeof optionsOrCb);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    };
    ElastiCache.prototype.createCacheCluster = function (args, optionsOrCb, cb) {
        var command = new CreateCacheClusterCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error("Expect http options but get " + typeof optionsOrCb);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    };
    ElastiCache.prototype.createCacheParameterGroup = function (args, optionsOrCb, cb) {
        var command = new CreateCacheParameterGroupCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error("Expect http options but get " + typeof optionsOrCb);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    };
    ElastiCache.prototype.createCacheSecurityGroup = function (args, optionsOrCb, cb) {
        var command = new CreateCacheSecurityGroupCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error("Expect http options but get " + typeof optionsOrCb);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    };
    ElastiCache.prototype.createCacheSubnetGroup = function (args, optionsOrCb, cb) {
        var command = new CreateCacheSubnetGroupCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error("Expect http options but get " + typeof optionsOrCb);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    };
    ElastiCache.prototype.createGlobalReplicationGroup = function (args, optionsOrCb, cb) {
        var command = new CreateGlobalReplicationGroupCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error("Expect http options but get " + typeof optionsOrCb);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    };
    ElastiCache.prototype.createReplicationGroup = function (args, optionsOrCb, cb) {
        var command = new CreateReplicationGroupCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error("Expect http options but get " + typeof optionsOrCb);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    };
    ElastiCache.prototype.createSnapshot = function (args, optionsOrCb, cb) {
        var command = new CreateSnapshotCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error("Expect http options but get " + typeof optionsOrCb);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    };
    ElastiCache.prototype.createUser = function (args, optionsOrCb, cb) {
        var command = new CreateUserCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error("Expect http options but get " + typeof optionsOrCb);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    };
    ElastiCache.prototype.createUserGroup = function (args, optionsOrCb, cb) {
        var command = new CreateUserGroupCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error("Expect http options but get " + typeof optionsOrCb);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    };
    ElastiCache.prototype.decreaseNodeGroupsInGlobalReplicationGroup = function (args, optionsOrCb, cb) {
        var command = new DecreaseNodeGroupsInGlobalReplicationGroupCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error("Expect http options but get " + typeof optionsOrCb);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    };
    ElastiCache.prototype.decreaseReplicaCount = function (args, optionsOrCb, cb) {
        var command = new DecreaseReplicaCountCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error("Expect http options but get " + typeof optionsOrCb);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    };
    ElastiCache.prototype.deleteCacheCluster = function (args, optionsOrCb, cb) {
        var command = new DeleteCacheClusterCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error("Expect http options but get " + typeof optionsOrCb);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    };
    ElastiCache.prototype.deleteCacheParameterGroup = function (args, optionsOrCb, cb) {
        var command = new DeleteCacheParameterGroupCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error("Expect http options but get " + typeof optionsOrCb);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    };
    ElastiCache.prototype.deleteCacheSecurityGroup = function (args, optionsOrCb, cb) {
        var command = new DeleteCacheSecurityGroupCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error("Expect http options but get " + typeof optionsOrCb);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    };
    ElastiCache.prototype.deleteCacheSubnetGroup = function (args, optionsOrCb, cb) {
        var command = new DeleteCacheSubnetGroupCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error("Expect http options but get " + typeof optionsOrCb);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    };
    ElastiCache.prototype.deleteGlobalReplicationGroup = function (args, optionsOrCb, cb) {
        var command = new DeleteGlobalReplicationGroupCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error("Expect http options but get " + typeof optionsOrCb);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    };
    ElastiCache.prototype.deleteReplicationGroup = function (args, optionsOrCb, cb) {
        var command = new DeleteReplicationGroupCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error("Expect http options but get " + typeof optionsOrCb);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    };
    ElastiCache.prototype.deleteSnapshot = function (args, optionsOrCb, cb) {
        var command = new DeleteSnapshotCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error("Expect http options but get " + typeof optionsOrCb);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    };
    ElastiCache.prototype.deleteUser = function (args, optionsOrCb, cb) {
        var command = new DeleteUserCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error("Expect http options but get " + typeof optionsOrCb);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    };
    ElastiCache.prototype.deleteUserGroup = function (args, optionsOrCb, cb) {
        var command = new DeleteUserGroupCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error("Expect http options but get " + typeof optionsOrCb);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    };
    ElastiCache.prototype.describeCacheClusters = function (args, optionsOrCb, cb) {
        var command = new DescribeCacheClustersCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error("Expect http options but get " + typeof optionsOrCb);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    };
    ElastiCache.prototype.describeCacheEngineVersions = function (args, optionsOrCb, cb) {
        var command = new DescribeCacheEngineVersionsCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error("Expect http options but get " + typeof optionsOrCb);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    };
    ElastiCache.prototype.describeCacheParameterGroups = function (args, optionsOrCb, cb) {
        var command = new DescribeCacheParameterGroupsCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error("Expect http options but get " + typeof optionsOrCb);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    };
    ElastiCache.prototype.describeCacheParameters = function (args, optionsOrCb, cb) {
        var command = new DescribeCacheParametersCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error("Expect http options but get " + typeof optionsOrCb);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    };
    ElastiCache.prototype.describeCacheSecurityGroups = function (args, optionsOrCb, cb) {
        var command = new DescribeCacheSecurityGroupsCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error("Expect http options but get " + typeof optionsOrCb);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    };
    ElastiCache.prototype.describeCacheSubnetGroups = function (args, optionsOrCb, cb) {
        var command = new DescribeCacheSubnetGroupsCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error("Expect http options but get " + typeof optionsOrCb);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    };
    ElastiCache.prototype.describeEngineDefaultParameters = function (args, optionsOrCb, cb) {
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
    ElastiCache.prototype.describeEvents = function (args, optionsOrCb, cb) {
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
    ElastiCache.prototype.describeGlobalReplicationGroups = function (args, optionsOrCb, cb) {
        var command = new DescribeGlobalReplicationGroupsCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error("Expect http options but get " + typeof optionsOrCb);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    };
    ElastiCache.prototype.describeReplicationGroups = function (args, optionsOrCb, cb) {
        var command = new DescribeReplicationGroupsCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error("Expect http options but get " + typeof optionsOrCb);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    };
    ElastiCache.prototype.describeReservedCacheNodes = function (args, optionsOrCb, cb) {
        var command = new DescribeReservedCacheNodesCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error("Expect http options but get " + typeof optionsOrCb);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    };
    ElastiCache.prototype.describeReservedCacheNodesOfferings = function (args, optionsOrCb, cb) {
        var command = new DescribeReservedCacheNodesOfferingsCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error("Expect http options but get " + typeof optionsOrCb);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    };
    ElastiCache.prototype.describeServiceUpdates = function (args, optionsOrCb, cb) {
        var command = new DescribeServiceUpdatesCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error("Expect http options but get " + typeof optionsOrCb);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    };
    ElastiCache.prototype.describeSnapshots = function (args, optionsOrCb, cb) {
        var command = new DescribeSnapshotsCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error("Expect http options but get " + typeof optionsOrCb);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    };
    ElastiCache.prototype.describeUpdateActions = function (args, optionsOrCb, cb) {
        var command = new DescribeUpdateActionsCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error("Expect http options but get " + typeof optionsOrCb);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    };
    ElastiCache.prototype.describeUserGroups = function (args, optionsOrCb, cb) {
        var command = new DescribeUserGroupsCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error("Expect http options but get " + typeof optionsOrCb);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    };
    ElastiCache.prototype.describeUsers = function (args, optionsOrCb, cb) {
        var command = new DescribeUsersCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error("Expect http options but get " + typeof optionsOrCb);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    };
    ElastiCache.prototype.disassociateGlobalReplicationGroup = function (args, optionsOrCb, cb) {
        var command = new DisassociateGlobalReplicationGroupCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error("Expect http options but get " + typeof optionsOrCb);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    };
    ElastiCache.prototype.failoverGlobalReplicationGroup = function (args, optionsOrCb, cb) {
        var command = new FailoverGlobalReplicationGroupCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error("Expect http options but get " + typeof optionsOrCb);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    };
    ElastiCache.prototype.increaseNodeGroupsInGlobalReplicationGroup = function (args, optionsOrCb, cb) {
        var command = new IncreaseNodeGroupsInGlobalReplicationGroupCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error("Expect http options but get " + typeof optionsOrCb);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    };
    ElastiCache.prototype.increaseReplicaCount = function (args, optionsOrCb, cb) {
        var command = new IncreaseReplicaCountCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error("Expect http options but get " + typeof optionsOrCb);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    };
    ElastiCache.prototype.listAllowedNodeTypeModifications = function (args, optionsOrCb, cb) {
        var command = new ListAllowedNodeTypeModificationsCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error("Expect http options but get " + typeof optionsOrCb);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    };
    ElastiCache.prototype.listTagsForResource = function (args, optionsOrCb, cb) {
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
    ElastiCache.prototype.modifyCacheCluster = function (args, optionsOrCb, cb) {
        var command = new ModifyCacheClusterCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error("Expect http options but get " + typeof optionsOrCb);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    };
    ElastiCache.prototype.modifyCacheParameterGroup = function (args, optionsOrCb, cb) {
        var command = new ModifyCacheParameterGroupCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error("Expect http options but get " + typeof optionsOrCb);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    };
    ElastiCache.prototype.modifyCacheSubnetGroup = function (args, optionsOrCb, cb) {
        var command = new ModifyCacheSubnetGroupCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error("Expect http options but get " + typeof optionsOrCb);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    };
    ElastiCache.prototype.modifyGlobalReplicationGroup = function (args, optionsOrCb, cb) {
        var command = new ModifyGlobalReplicationGroupCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error("Expect http options but get " + typeof optionsOrCb);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    };
    ElastiCache.prototype.modifyReplicationGroup = function (args, optionsOrCb, cb) {
        var command = new ModifyReplicationGroupCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error("Expect http options but get " + typeof optionsOrCb);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    };
    ElastiCache.prototype.modifyReplicationGroupShardConfiguration = function (args, optionsOrCb, cb) {
        var command = new ModifyReplicationGroupShardConfigurationCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error("Expect http options but get " + typeof optionsOrCb);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    };
    ElastiCache.prototype.modifyUser = function (args, optionsOrCb, cb) {
        var command = new ModifyUserCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error("Expect http options but get " + typeof optionsOrCb);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    };
    ElastiCache.prototype.modifyUserGroup = function (args, optionsOrCb, cb) {
        var command = new ModifyUserGroupCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error("Expect http options but get " + typeof optionsOrCb);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    };
    ElastiCache.prototype.purchaseReservedCacheNodesOffering = function (args, optionsOrCb, cb) {
        var command = new PurchaseReservedCacheNodesOfferingCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error("Expect http options but get " + typeof optionsOrCb);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    };
    ElastiCache.prototype.rebalanceSlotsInGlobalReplicationGroup = function (args, optionsOrCb, cb) {
        var command = new RebalanceSlotsInGlobalReplicationGroupCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error("Expect http options but get " + typeof optionsOrCb);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    };
    ElastiCache.prototype.rebootCacheCluster = function (args, optionsOrCb, cb) {
        var command = new RebootCacheClusterCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error("Expect http options but get " + typeof optionsOrCb);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    };
    ElastiCache.prototype.removeTagsFromResource = function (args, optionsOrCb, cb) {
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
    ElastiCache.prototype.resetCacheParameterGroup = function (args, optionsOrCb, cb) {
        var command = new ResetCacheParameterGroupCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error("Expect http options but get " + typeof optionsOrCb);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    };
    ElastiCache.prototype.revokeCacheSecurityGroupIngress = function (args, optionsOrCb, cb) {
        var command = new RevokeCacheSecurityGroupIngressCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error("Expect http options but get " + typeof optionsOrCb);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    };
    ElastiCache.prototype.startMigration = function (args, optionsOrCb, cb) {
        var command = new StartMigrationCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error("Expect http options but get " + typeof optionsOrCb);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    };
    ElastiCache.prototype.testFailover = function (args, optionsOrCb, cb) {
        var command = new TestFailoverCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error("Expect http options but get " + typeof optionsOrCb);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    };
    return ElastiCache;
}(ElastiCacheClient));
export { ElastiCache };
//# sourceMappingURL=ElastiCache.js.map