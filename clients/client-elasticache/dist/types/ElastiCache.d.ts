import { ElastiCacheClient } from "./ElastiCacheClient";
import { AddTagsToResourceCommandInput, AddTagsToResourceCommandOutput } from "./commands/AddTagsToResourceCommand";
import { AuthorizeCacheSecurityGroupIngressCommandInput, AuthorizeCacheSecurityGroupIngressCommandOutput } from "./commands/AuthorizeCacheSecurityGroupIngressCommand";
import { BatchApplyUpdateActionCommandInput, BatchApplyUpdateActionCommandOutput } from "./commands/BatchApplyUpdateActionCommand";
import { BatchStopUpdateActionCommandInput, BatchStopUpdateActionCommandOutput } from "./commands/BatchStopUpdateActionCommand";
import { CompleteMigrationCommandInput, CompleteMigrationCommandOutput } from "./commands/CompleteMigrationCommand";
import { CopySnapshotCommandInput, CopySnapshotCommandOutput } from "./commands/CopySnapshotCommand";
import { CreateCacheClusterCommandInput, CreateCacheClusterCommandOutput } from "./commands/CreateCacheClusterCommand";
import { CreateCacheParameterGroupCommandInput, CreateCacheParameterGroupCommandOutput } from "./commands/CreateCacheParameterGroupCommand";
import { CreateCacheSecurityGroupCommandInput, CreateCacheSecurityGroupCommandOutput } from "./commands/CreateCacheSecurityGroupCommand";
import { CreateCacheSubnetGroupCommandInput, CreateCacheSubnetGroupCommandOutput } from "./commands/CreateCacheSubnetGroupCommand";
import { CreateGlobalReplicationGroupCommandInput, CreateGlobalReplicationGroupCommandOutput } from "./commands/CreateGlobalReplicationGroupCommand";
import { CreateReplicationGroupCommandInput, CreateReplicationGroupCommandOutput } from "./commands/CreateReplicationGroupCommand";
import { CreateSnapshotCommandInput, CreateSnapshotCommandOutput } from "./commands/CreateSnapshotCommand";
import { CreateUserCommandInput, CreateUserCommandOutput } from "./commands/CreateUserCommand";
import { CreateUserGroupCommandInput, CreateUserGroupCommandOutput } from "./commands/CreateUserGroupCommand";
import { DecreaseNodeGroupsInGlobalReplicationGroupCommandInput, DecreaseNodeGroupsInGlobalReplicationGroupCommandOutput } from "./commands/DecreaseNodeGroupsInGlobalReplicationGroupCommand";
import { DecreaseReplicaCountCommandInput, DecreaseReplicaCountCommandOutput } from "./commands/DecreaseReplicaCountCommand";
import { DeleteCacheClusterCommandInput, DeleteCacheClusterCommandOutput } from "./commands/DeleteCacheClusterCommand";
import { DeleteCacheParameterGroupCommandInput, DeleteCacheParameterGroupCommandOutput } from "./commands/DeleteCacheParameterGroupCommand";
import { DeleteCacheSecurityGroupCommandInput, DeleteCacheSecurityGroupCommandOutput } from "./commands/DeleteCacheSecurityGroupCommand";
import { DeleteCacheSubnetGroupCommandInput, DeleteCacheSubnetGroupCommandOutput } from "./commands/DeleteCacheSubnetGroupCommand";
import { DeleteGlobalReplicationGroupCommandInput, DeleteGlobalReplicationGroupCommandOutput } from "./commands/DeleteGlobalReplicationGroupCommand";
import { DeleteReplicationGroupCommandInput, DeleteReplicationGroupCommandOutput } from "./commands/DeleteReplicationGroupCommand";
import { DeleteSnapshotCommandInput, DeleteSnapshotCommandOutput } from "./commands/DeleteSnapshotCommand";
import { DeleteUserCommandInput, DeleteUserCommandOutput } from "./commands/DeleteUserCommand";
import { DeleteUserGroupCommandInput, DeleteUserGroupCommandOutput } from "./commands/DeleteUserGroupCommand";
import { DescribeCacheClustersCommandInput, DescribeCacheClustersCommandOutput } from "./commands/DescribeCacheClustersCommand";
import { DescribeCacheEngineVersionsCommandInput, DescribeCacheEngineVersionsCommandOutput } from "./commands/DescribeCacheEngineVersionsCommand";
import { DescribeCacheParameterGroupsCommandInput, DescribeCacheParameterGroupsCommandOutput } from "./commands/DescribeCacheParameterGroupsCommand";
import { DescribeCacheParametersCommandInput, DescribeCacheParametersCommandOutput } from "./commands/DescribeCacheParametersCommand";
import { DescribeCacheSecurityGroupsCommandInput, DescribeCacheSecurityGroupsCommandOutput } from "./commands/DescribeCacheSecurityGroupsCommand";
import { DescribeCacheSubnetGroupsCommandInput, DescribeCacheSubnetGroupsCommandOutput } from "./commands/DescribeCacheSubnetGroupsCommand";
import { DescribeEngineDefaultParametersCommandInput, DescribeEngineDefaultParametersCommandOutput } from "./commands/DescribeEngineDefaultParametersCommand";
import { DescribeEventsCommandInput, DescribeEventsCommandOutput } from "./commands/DescribeEventsCommand";
import { DescribeGlobalReplicationGroupsCommandInput, DescribeGlobalReplicationGroupsCommandOutput } from "./commands/DescribeGlobalReplicationGroupsCommand";
import { DescribeReplicationGroupsCommandInput, DescribeReplicationGroupsCommandOutput } from "./commands/DescribeReplicationGroupsCommand";
import { DescribeReservedCacheNodesCommandInput, DescribeReservedCacheNodesCommandOutput } from "./commands/DescribeReservedCacheNodesCommand";
import { DescribeReservedCacheNodesOfferingsCommandInput, DescribeReservedCacheNodesOfferingsCommandOutput } from "./commands/DescribeReservedCacheNodesOfferingsCommand";
import { DescribeServiceUpdatesCommandInput, DescribeServiceUpdatesCommandOutput } from "./commands/DescribeServiceUpdatesCommand";
import { DescribeSnapshotsCommandInput, DescribeSnapshotsCommandOutput } from "./commands/DescribeSnapshotsCommand";
import { DescribeUpdateActionsCommandInput, DescribeUpdateActionsCommandOutput } from "./commands/DescribeUpdateActionsCommand";
import { DescribeUserGroupsCommandInput, DescribeUserGroupsCommandOutput } from "./commands/DescribeUserGroupsCommand";
import { DescribeUsersCommandInput, DescribeUsersCommandOutput } from "./commands/DescribeUsersCommand";
import { DisassociateGlobalReplicationGroupCommandInput, DisassociateGlobalReplicationGroupCommandOutput } from "./commands/DisassociateGlobalReplicationGroupCommand";
import { FailoverGlobalReplicationGroupCommandInput, FailoverGlobalReplicationGroupCommandOutput } from "./commands/FailoverGlobalReplicationGroupCommand";
import { IncreaseNodeGroupsInGlobalReplicationGroupCommandInput, IncreaseNodeGroupsInGlobalReplicationGroupCommandOutput } from "./commands/IncreaseNodeGroupsInGlobalReplicationGroupCommand";
import { IncreaseReplicaCountCommandInput, IncreaseReplicaCountCommandOutput } from "./commands/IncreaseReplicaCountCommand";
import { ListAllowedNodeTypeModificationsCommandInput, ListAllowedNodeTypeModificationsCommandOutput } from "./commands/ListAllowedNodeTypeModificationsCommand";
import { ListTagsForResourceCommandInput, ListTagsForResourceCommandOutput } from "./commands/ListTagsForResourceCommand";
import { ModifyCacheClusterCommandInput, ModifyCacheClusterCommandOutput } from "./commands/ModifyCacheClusterCommand";
import { ModifyCacheParameterGroupCommandInput, ModifyCacheParameterGroupCommandOutput } from "./commands/ModifyCacheParameterGroupCommand";
import { ModifyCacheSubnetGroupCommandInput, ModifyCacheSubnetGroupCommandOutput } from "./commands/ModifyCacheSubnetGroupCommand";
import { ModifyGlobalReplicationGroupCommandInput, ModifyGlobalReplicationGroupCommandOutput } from "./commands/ModifyGlobalReplicationGroupCommand";
import { ModifyReplicationGroupCommandInput, ModifyReplicationGroupCommandOutput } from "./commands/ModifyReplicationGroupCommand";
import { ModifyReplicationGroupShardConfigurationCommandInput, ModifyReplicationGroupShardConfigurationCommandOutput } from "./commands/ModifyReplicationGroupShardConfigurationCommand";
import { ModifyUserCommandInput, ModifyUserCommandOutput } from "./commands/ModifyUserCommand";
import { ModifyUserGroupCommandInput, ModifyUserGroupCommandOutput } from "./commands/ModifyUserGroupCommand";
import { PurchaseReservedCacheNodesOfferingCommandInput, PurchaseReservedCacheNodesOfferingCommandOutput } from "./commands/PurchaseReservedCacheNodesOfferingCommand";
import { RebalanceSlotsInGlobalReplicationGroupCommandInput, RebalanceSlotsInGlobalReplicationGroupCommandOutput } from "./commands/RebalanceSlotsInGlobalReplicationGroupCommand";
import { RebootCacheClusterCommandInput, RebootCacheClusterCommandOutput } from "./commands/RebootCacheClusterCommand";
import { RemoveTagsFromResourceCommandInput, RemoveTagsFromResourceCommandOutput } from "./commands/RemoveTagsFromResourceCommand";
import { ResetCacheParameterGroupCommandInput, ResetCacheParameterGroupCommandOutput } from "./commands/ResetCacheParameterGroupCommand";
import { RevokeCacheSecurityGroupIngressCommandInput, RevokeCacheSecurityGroupIngressCommandOutput } from "./commands/RevokeCacheSecurityGroupIngressCommand";
import { StartMigrationCommandInput, StartMigrationCommandOutput } from "./commands/StartMigrationCommand";
import { TestFailoverCommandInput, TestFailoverCommandOutput } from "./commands/TestFailoverCommand";
import { HttpHandlerOptions as __HttpHandlerOptions } from "@aws-sdk/types";
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
export declare class ElastiCache extends ElastiCacheClient {
    /**
     * <p>A  tag is a key-value pair where the key and value are case-sensitive.
     *             You can use tags to categorize and track all your ElastiCache resources, with the exception of global replication group. When you add or remove tags on replication groups, those actions will be replicated to all nodes in the replication group.
     *           For more information, see <a href="http://docs.aws.amazon.com/AmazonElastiCache/latest/red-ug/IAM.ResourceLevelPermissions.html">Resource-level permissions</a>.</p>
     *         <p>
     *             For example, you can use cost-allocation tags to your ElastiCache resources,
     *             AWS generates a cost allocation report as a comma-separated value (CSV) file
     *             with your usage and costs aggregated by your tags.
     *             You can apply tags that represent business categories (such as cost centers, application names, or owners)
     *             to organize your costs across multiple services.</p>
     *             <p>For more information,
     *             see <a href="https://docs.aws.amazon.com/AmazonElastiCache/latest/red-ug/Tagging.html">Using Cost Allocation Tags in Amazon ElastiCache</a>
     *             in the <i>ElastiCache User Guide</i>.</p>
     */
    addTagsToResource(args: AddTagsToResourceCommandInput, options?: __HttpHandlerOptions): Promise<AddTagsToResourceCommandOutput>;
    addTagsToResource(args: AddTagsToResourceCommandInput, cb: (err: any, data?: AddTagsToResourceCommandOutput) => void): void;
    addTagsToResource(args: AddTagsToResourceCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: AddTagsToResourceCommandOutput) => void): void;
    /**
     * <p>Allows network ingress to a cache
     *             security group. Applications using ElastiCache must be running on Amazon EC2, and Amazon EC2
     *             security groups are used as the authorization mechanism.</p>
     *         <note>
     *             <p>You cannot authorize ingress from an Amazon EC2 security group in one region to an
     *             ElastiCache cluster in another region.</p>
     *          </note>
     */
    authorizeCacheSecurityGroupIngress(args: AuthorizeCacheSecurityGroupIngressCommandInput, options?: __HttpHandlerOptions): Promise<AuthorizeCacheSecurityGroupIngressCommandOutput>;
    authorizeCacheSecurityGroupIngress(args: AuthorizeCacheSecurityGroupIngressCommandInput, cb: (err: any, data?: AuthorizeCacheSecurityGroupIngressCommandOutput) => void): void;
    authorizeCacheSecurityGroupIngress(args: AuthorizeCacheSecurityGroupIngressCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: AuthorizeCacheSecurityGroupIngressCommandOutput) => void): void;
    /**
     * <p>Apply the service update. For more information on service updates and applying them, see <a href="https://docs.aws.amazon.com/AmazonElastiCache/latest/red-ug/applying-updates.html">Applying Service Updates</a>.</p>
     */
    batchApplyUpdateAction(args: BatchApplyUpdateActionCommandInput, options?: __HttpHandlerOptions): Promise<BatchApplyUpdateActionCommandOutput>;
    batchApplyUpdateAction(args: BatchApplyUpdateActionCommandInput, cb: (err: any, data?: BatchApplyUpdateActionCommandOutput) => void): void;
    batchApplyUpdateAction(args: BatchApplyUpdateActionCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: BatchApplyUpdateActionCommandOutput) => void): void;
    /**
     * <p>Stop the service update. For more information on service updates and stopping them, see <a href="https://docs.aws.amazon.com/AmazonElastiCache/latest/red-ug/stopping-self-service-updates.html">Stopping Service Updates</a>.</p>
     */
    batchStopUpdateAction(args: BatchStopUpdateActionCommandInput, options?: __HttpHandlerOptions): Promise<BatchStopUpdateActionCommandOutput>;
    batchStopUpdateAction(args: BatchStopUpdateActionCommandInput, cb: (err: any, data?: BatchStopUpdateActionCommandOutput) => void): void;
    batchStopUpdateAction(args: BatchStopUpdateActionCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: BatchStopUpdateActionCommandOutput) => void): void;
    /**
     * <p>Complete the migration of data.</p>
     */
    completeMigration(args: CompleteMigrationCommandInput, options?: __HttpHandlerOptions): Promise<CompleteMigrationCommandOutput>;
    completeMigration(args: CompleteMigrationCommandInput, cb: (err: any, data?: CompleteMigrationCommandOutput) => void): void;
    completeMigration(args: CompleteMigrationCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: CompleteMigrationCommandOutput) => void): void;
    /**
     * <p>Makes a copy of an existing snapshot.</p>
     *
     *         <note>
     *             <p>This operation is valid for Redis only.</p>
     *          </note>
     *
     *         <important>
     *             <p>Users or groups that have permissions to use the <code>CopySnapshot</code> operation
     *                 can create their own Amazon S3 buckets and copy snapshots to it.
     *                 To control access to your snapshots, use an IAM policy to control who has the ability to use
     *                 the <code>CopySnapshot</code> operation.
     *                 For more information about using IAM to control the use of ElastiCache operations, see <a href="https://docs.aws.amazon.com/AmazonElastiCache/latest/red-ug/backups-exporting.html">Exporting Snapshots</a>
     *                 and <a href="https://docs.aws.amazon.com/AmazonElastiCache/latest/red-ug/IAM.html">Authentication & Access Control</a>.</p>
     *          </important>
     *
     *         <p>You could receive the following error messages.</p>
     *         <p class="title">
     *             <b>Error Messages</b>
     *          </p>
     *          <ul>
     *             <li>
     *                 <p>
     *                   <b>Error Message:</b>
     *                     The S3 bucket %s is outside of the region.</p>
     *                 <p>
     *                   <b>Solution:</b>
     *                     Create an Amazon S3 bucket in the same region as your snapshot.
     *                     For more information, see <a href="https://docs.aws.amazon.com/AmazonElastiCache/latest/red-ug/backups-exporting.html#backups-exporting-create-s3-bucket">Step 1: Create an Amazon S3 Bucket</a> in the ElastiCache User Guide.</p>
     *             </li>
     *             <li>
     *                 <p>
     *                   <b>Error Message:</b>
     *                     The S3 bucket %s does not exist.</p>
     *                 <p>
     *                   <b>Solution:</b>
     *                     Create an Amazon S3 bucket in the same region as your snapshot.
     *                     For more information, see <a href="https://docs.aws.amazon.com/AmazonElastiCache/latest/red-ug/backups-exporting.html#backups-exporting-create-s3-bucket">Step 1: Create an Amazon S3 Bucket</a> in the ElastiCache User Guide.</p>
     *             </li>
     *             <li>
     *                 <p>
     *                   <b>Error Message:</b>
     *                     The S3 bucket %s is not owned by the authenticated user.</p>
     *                 <p>
     *                   <b>Solution:</b>
     *                     Create an Amazon S3 bucket in the same region as your snapshot.
     *                     For more information, see <a href="https://docs.aws.amazon.com/AmazonElastiCache/latest/red-ug/backups-exporting.html#backups-exporting-create-s3-bucket">Step 1: Create an Amazon S3 Bucket</a> in the ElastiCache User Guide.</p>
     *             </li>
     *             <li>
     *                 <p>
     *                   <b>Error Message:</b>
     *                     The authenticated user does not have sufficient permissions to perform the desired activity.</p>
     *                 <p>
     *                   <b>Solution:</b>
     *                     Contact your system administrator to get the needed permissions.</p>
     *             </li>
     *             <li>
     *                 <p>
     *                   <b>Error Message:</b>
     *                     The S3 bucket %s already contains an object with key %s.</p>
     *                 <p>
     *                   <b>Solution:</b>
     *                     Give the <code>TargetSnapshotName</code> a new and unique value.
     *                     If exporting a snapshot,
     *                     you could alternatively create a new Amazon S3 bucket
     *                     and use this same value for <code>TargetSnapshotName</code>.</p>
     *             </li>
     *             <li>
     *                 <p>
     *                   <b>Error Message: </b>
     *                     ElastiCache has not been granted READ permissions %s on the S3 Bucket.</p>
     *                 <p>
     *                   <b>Solution:</b>
     *                     Add List and Read permissions on the bucket.
     *                 For more information, see <a href="https://docs.aws.amazon.com/AmazonElastiCache/latest/red-ug/backups-exporting.html#backups-exporting-grant-access">Step 2: Grant ElastiCache Access to Your Amazon S3 Bucket</a> in the ElastiCache User Guide.</p>
     *             </li>
     *             <li>
     *                 <p>
     *                   <b>Error Message: </b>
     *                     ElastiCache has not been granted WRITE permissions %s on the S3 Bucket.</p>
     *                 <p>
     *                   <b>Solution:</b>
     *                     Add Upload/Delete permissions on the bucket.
     *                     For more information, see <a href="https://docs.aws.amazon.com/AmazonElastiCache/latest/red-ug/backups-exporting.html#backups-exporting-grant-access">Step 2: Grant ElastiCache Access to Your Amazon S3 Bucket</a> in the ElastiCache User Guide.</p>
     *             </li>
     *             <li>
     *                 <p>
     *                   <b>Error Message: </b>
     *                     ElastiCache has not been granted READ_ACP permissions %s on the S3 Bucket.</p>
     *                 <p>
     *                   <b>Solution:</b>
     *                     Add View Permissions on the bucket.
     *                 For more information, see <a href="https://docs.aws.amazon.com/AmazonElastiCache/latest/red-ug/backups-exporting.html#backups-exporting-grant-access">Step 2: Grant ElastiCache Access to Your Amazon S3 Bucket</a> in the ElastiCache User Guide.</p>
     *             </li>
     *          </ul>
     */
    copySnapshot(args: CopySnapshotCommandInput, options?: __HttpHandlerOptions): Promise<CopySnapshotCommandOutput>;
    copySnapshot(args: CopySnapshotCommandInput, cb: (err: any, data?: CopySnapshotCommandOutput) => void): void;
    copySnapshot(args: CopySnapshotCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: CopySnapshotCommandOutput) => void): void;
    /**
     * <p>Creates a cluster. All nodes in the
     *             cluster run the same protocol-compliant cache engine software, either Memcached
     *             or Redis.</p>
     *         <p>This operation is not supported for Redis (cluster mode enabled) clusters.</p>
     */
    createCacheCluster(args: CreateCacheClusterCommandInput, options?: __HttpHandlerOptions): Promise<CreateCacheClusterCommandOutput>;
    createCacheCluster(args: CreateCacheClusterCommandInput, cb: (err: any, data?: CreateCacheClusterCommandOutput) => void): void;
    createCacheCluster(args: CreateCacheClusterCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: CreateCacheClusterCommandOutput) => void): void;
    /**
     * <p>Creates a new Amazon ElastiCache cache parameter group. An ElastiCache
     *             cache parameter group is a collection of parameters and their values that are applied to all of the nodes
     *             in any cluster or replication group using the CacheParameterGroup.</p>
     *         <p>A newly created CacheParameterGroup is an exact duplicate of the default parameter group
     *             for the CacheParameterGroupFamily. To customize the newly created CacheParameterGroup you can
     *             change the values of specific parameters. For more information, see:</p>
     *         <ul>
     *             <li>
     *                 <p>
     *                   <a href="https://docs.aws.amazon.com/AmazonElastiCache/latest/APIReference/API_ModifyCacheParameterGroup.html">ModifyCacheParameterGroup</a> in the ElastiCache API Reference.</p>
     *             </li>
     *             <li>
     *                 <p>
     *                   <a href="https://docs.aws.amazon.com/AmazonElastiCache/latest/red-ug/ParameterGroups.html">Parameters and Parameter Groups</a> in the ElastiCache User Guide.</p>
     *             </li>
     *          </ul>
     */
    createCacheParameterGroup(args: CreateCacheParameterGroupCommandInput, options?: __HttpHandlerOptions): Promise<CreateCacheParameterGroupCommandOutput>;
    createCacheParameterGroup(args: CreateCacheParameterGroupCommandInput, cb: (err: any, data?: CreateCacheParameterGroupCommandOutput) => void): void;
    createCacheParameterGroup(args: CreateCacheParameterGroupCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: CreateCacheParameterGroupCommandOutput) => void): void;
    /**
     * <p>Creates a new cache security group. Use a
     *             cache security group to control access to one or more clusters.</p>
     *         <p>Cache security groups are only used when you are creating a cluster outside of an Amazon
     *             Virtual Private Cloud (Amazon VPC). If you are creating a cluster inside of a VPC, use a cache
     *             subnet group instead. For more information,
     *             see <a href="https://docs.aws.amazon.com/AmazonElastiCache/latest/APIReference/API_CreateCacheSubnetGroup.html">CreateCacheSubnetGroup</a>.</p>
     */
    createCacheSecurityGroup(args: CreateCacheSecurityGroupCommandInput, options?: __HttpHandlerOptions): Promise<CreateCacheSecurityGroupCommandOutput>;
    createCacheSecurityGroup(args: CreateCacheSecurityGroupCommandInput, cb: (err: any, data?: CreateCacheSecurityGroupCommandOutput) => void): void;
    createCacheSecurityGroup(args: CreateCacheSecurityGroupCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: CreateCacheSecurityGroupCommandOutput) => void): void;
    /**
     * <p>Creates a new cache subnet group.</p>
     *         <p>Use this parameter only when you are creating a cluster in an Amazon Virtual Private Cloud (Amazon VPC).</p>
     */
    createCacheSubnetGroup(args: CreateCacheSubnetGroupCommandInput, options?: __HttpHandlerOptions): Promise<CreateCacheSubnetGroupCommandOutput>;
    createCacheSubnetGroup(args: CreateCacheSubnetGroupCommandInput, cb: (err: any, data?: CreateCacheSubnetGroupCommandOutput) => void): void;
    createCacheSubnetGroup(args: CreateCacheSubnetGroupCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: CreateCacheSubnetGroupCommandOutput) => void): void;
    /**
     * <p>Global Datastore for Redis offers fully managed, fast,
     *             reliable and secure cross-region replication.
     *             Using Global Datastore for Redis, you can create cross-region
     *             read replica clusters for ElastiCache for Redis to enable low-latency reads
     *             and disaster recovery across regions. For more information,
     *
     *             see <a href="https://docs.aws.amazon.com/AmazonElastiCache/latest/red-ug/Redis-Global-Datastore.html">Replication Across Regions Using Global Datastore</a>. </p>
     *
     *          <ul>
     *             <li>
     *                <p>The <b>GlobalReplicationGroupIdSuffix</b> is the name of the Global datastore.</p>
     *             </li>
     *             <li>
     *                <p>The <b>PrimaryReplicationGroupId</b> represents the name of the primary cluster that accepts writes and will replicate updates to the secondary cluster.</p>
     *             </li>
     *          </ul>
     */
    createGlobalReplicationGroup(args: CreateGlobalReplicationGroupCommandInput, options?: __HttpHandlerOptions): Promise<CreateGlobalReplicationGroupCommandOutput>;
    createGlobalReplicationGroup(args: CreateGlobalReplicationGroupCommandInput, cb: (err: any, data?: CreateGlobalReplicationGroupCommandOutput) => void): void;
    createGlobalReplicationGroup(args: CreateGlobalReplicationGroupCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: CreateGlobalReplicationGroupCommandOutput) => void): void;
    /**
     * <p>Creates a Redis (cluster mode disabled) or a Redis (cluster mode enabled) replication group.</p>
     *         <p>This API can be used to create a standalone regional replication group or a secondary replication group associated with a Global datastore.</p>
     *         <p>A Redis (cluster mode disabled) replication group is a collection of clusters,
     *             where one of the clusters is a read/write primary and the others are read-only replicas.
     *             Writes to the primary are asynchronously propagated to the replicas.</p>
     *         <p>A Redis cluster-mode enabled cluster is comprised of from 1 to 90 shards (API/CLI: node groups).
     *             Each shard has a primary node and up to 5 read-only replica nodes. The configuration can range from 90 shards and 0 replicas to 15 shards and 5 replicas, which is the maximum number or replicas allowed.
     *
     *         </p>
     *         <p>The node or shard limit can be increased to a maximum of 500 per cluster if the Redis engine version is 5.0.6 or higher. For example, you can choose to configure a 500 node cluster that ranges between
     *             83 shards (one primary and 5 replicas per shard) and 500 shards (single primary and no replicas). Make sure there are enough available IP addresses to accommodate the increase.
     *             Common pitfalls include the subnets in the subnet group have too small a CIDR range or the subnets are shared and heavily used by other clusters. For more information, see
     *             <a href="https://docs.aws.amazon.com/AmazonElastiCache/latest/red-ug/SubnetGroups.Creating.html">Creating a Subnet Group</a>. For versions below 5.0.6,
     *             the limit is 250 per cluster.</p>
     *         <p>To request a limit increase, see
     *             <a href="https://docs.aws.amazon.com/general/latest/gr/aws_service_limits.html">AWS Service Limits</a>
     *             and choose the limit type <b>Nodes per cluster per instance type</b>. </p>
     *         <p>When a Redis (cluster mode disabled) replication group has been successfully created,
     *             you can add one or more read replicas to it, up to a total of 5 read replicas.
     *             If you need to increase or decrease the number of node groups (console: shards),
     *             you can avail yourself of ElastiCache for Redis' scaling. For more information,
     *             see <a href="https://docs.aws.amazon.com/AmazonElastiCache/latest/red-ug/Scaling.html">Scaling ElastiCache for Redis Clusters</a> in the <i>ElastiCache User Guide</i>.</p>
     *
     *
     *         <note>
     *             <p>This operation is valid for Redis only.</p>
     *          </note>
     */
    createReplicationGroup(args: CreateReplicationGroupCommandInput, options?: __HttpHandlerOptions): Promise<CreateReplicationGroupCommandOutput>;
    createReplicationGroup(args: CreateReplicationGroupCommandInput, cb: (err: any, data?: CreateReplicationGroupCommandOutput) => void): void;
    createReplicationGroup(args: CreateReplicationGroupCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: CreateReplicationGroupCommandOutput) => void): void;
    /**
     * <p>Creates a copy of an entire cluster or replication group at a
     *             specific moment in time.</p>
     *
     *         <note>
     *             <p>This operation is valid for Redis only.</p>
     *          </note>
     */
    createSnapshot(args: CreateSnapshotCommandInput, options?: __HttpHandlerOptions): Promise<CreateSnapshotCommandOutput>;
    createSnapshot(args: CreateSnapshotCommandInput, cb: (err: any, data?: CreateSnapshotCommandOutput) => void): void;
    createSnapshot(args: CreateSnapshotCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: CreateSnapshotCommandOutput) => void): void;
    /**
     * <p>For Redis engine version 6.x onwards: Creates a Redis user. For more information, see <a href="http://docs.aws.amazon.com/AmazonElastiCache/latest/red-ug/Clusters.RBAC.html">Using Role Based Access Control (RBAC)</a>.</p>
     */
    createUser(args: CreateUserCommandInput, options?: __HttpHandlerOptions): Promise<CreateUserCommandOutput>;
    createUser(args: CreateUserCommandInput, cb: (err: any, data?: CreateUserCommandOutput) => void): void;
    createUser(args: CreateUserCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: CreateUserCommandOutput) => void): void;
    /**
     * <p>For Redis engine version 6.x onwards: Creates a Redis user group. For more information, see <a href="http://docs.aws.amazon.com/AmazonElastiCache/latest/red-ug/Clusters.RBAC.html">Using Role Based Access Control (RBAC)</a>
     *          </p>
     */
    createUserGroup(args: CreateUserGroupCommandInput, options?: __HttpHandlerOptions): Promise<CreateUserGroupCommandOutput>;
    createUserGroup(args: CreateUserGroupCommandInput, cb: (err: any, data?: CreateUserGroupCommandOutput) => void): void;
    createUserGroup(args: CreateUserGroupCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: CreateUserGroupCommandOutput) => void): void;
    /**
     * <p>Decreases the number of node groups in a Global datastore</p>
     */
    decreaseNodeGroupsInGlobalReplicationGroup(args: DecreaseNodeGroupsInGlobalReplicationGroupCommandInput, options?: __HttpHandlerOptions): Promise<DecreaseNodeGroupsInGlobalReplicationGroupCommandOutput>;
    decreaseNodeGroupsInGlobalReplicationGroup(args: DecreaseNodeGroupsInGlobalReplicationGroupCommandInput, cb: (err: any, data?: DecreaseNodeGroupsInGlobalReplicationGroupCommandOutput) => void): void;
    decreaseNodeGroupsInGlobalReplicationGroup(args: DecreaseNodeGroupsInGlobalReplicationGroupCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: DecreaseNodeGroupsInGlobalReplicationGroupCommandOutput) => void): void;
    /**
     * <p>Dynamically decreases the number of replicas in a Redis (cluster mode disabled) replication group or the number of
     *             replica nodes in one or more node groups (shards) of a Redis (cluster mode enabled) replication group. This operation
     *             is performed with no cluster down time.</p>
     */
    decreaseReplicaCount(args: DecreaseReplicaCountCommandInput, options?: __HttpHandlerOptions): Promise<DecreaseReplicaCountCommandOutput>;
    decreaseReplicaCount(args: DecreaseReplicaCountCommandInput, cb: (err: any, data?: DecreaseReplicaCountCommandOutput) => void): void;
    decreaseReplicaCount(args: DecreaseReplicaCountCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: DecreaseReplicaCountCommandOutput) => void): void;
    /**
     * <p>Deletes a previously provisioned cluster.
     *                 <code>DeleteCacheCluster</code> deletes all associated cache nodes, node endpoints and the
     *             cluster itself. When you receive a successful response from this operation,
     *             Amazon ElastiCache immediately begins deleting the cluster; you cannot cancel or revert
     *             this operation.</p>
     *         <p>This operation is not valid for:</p>
     *         <ul>
     *             <li>
     *                 <p>Redis (cluster mode enabled) clusters</p>
     *             </li>
     *             <li>
     *                 <p>Redis (cluster mode disabled) clusters</p>
     *             </li>
     *             <li>
     *
     *                 <p>A cluster that is the last read replica of a replication group</p>
     *             </li>
     *             <li>
     *                 <p>A cluster that is the primary node of a replication group</p>
     *             </li>
     *             <li>
     *                 <p>A node group (shard) that has Multi-AZ mode enabled</p>
     *             </li>
     *             <li>
     *                 <p>A cluster from a Redis (cluster mode enabled) replication group</p>
     *             </li>
     *             <li>
     *                 <p>A cluster that is not in the <code>available</code> state</p>
     *             </li>
     *          </ul>
     */
    deleteCacheCluster(args: DeleteCacheClusterCommandInput, options?: __HttpHandlerOptions): Promise<DeleteCacheClusterCommandOutput>;
    deleteCacheCluster(args: DeleteCacheClusterCommandInput, cb: (err: any, data?: DeleteCacheClusterCommandOutput) => void): void;
    deleteCacheCluster(args: DeleteCacheClusterCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: DeleteCacheClusterCommandOutput) => void): void;
    /**
     * <p>Deletes the specified cache parameter
     *             group. You cannot delete a cache parameter group if it is associated with any cache
     *             clusters. You cannot delete the default cache parameter groups in your account.</p>
     */
    deleteCacheParameterGroup(args: DeleteCacheParameterGroupCommandInput, options?: __HttpHandlerOptions): Promise<DeleteCacheParameterGroupCommandOutput>;
    deleteCacheParameterGroup(args: DeleteCacheParameterGroupCommandInput, cb: (err: any, data?: DeleteCacheParameterGroupCommandOutput) => void): void;
    deleteCacheParameterGroup(args: DeleteCacheParameterGroupCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: DeleteCacheParameterGroupCommandOutput) => void): void;
    /**
     * <p>Deletes a cache security group.</p>
     *         <note>
     *             <p>You cannot delete a cache security group if it is associated with any clusters.</p>
     *          </note>
     */
    deleteCacheSecurityGroup(args: DeleteCacheSecurityGroupCommandInput, options?: __HttpHandlerOptions): Promise<DeleteCacheSecurityGroupCommandOutput>;
    deleteCacheSecurityGroup(args: DeleteCacheSecurityGroupCommandInput, cb: (err: any, data?: DeleteCacheSecurityGroupCommandOutput) => void): void;
    deleteCacheSecurityGroup(args: DeleteCacheSecurityGroupCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: DeleteCacheSecurityGroupCommandOutput) => void): void;
    /**
     * <p>Deletes a cache subnet group.</p>
     *         <note>
     *             <p>You cannot delete a default cache subnet group or one that is associated with any clusters.</p>
     *          </note>
     */
    deleteCacheSubnetGroup(args: DeleteCacheSubnetGroupCommandInput, options?: __HttpHandlerOptions): Promise<DeleteCacheSubnetGroupCommandOutput>;
    deleteCacheSubnetGroup(args: DeleteCacheSubnetGroupCommandInput, cb: (err: any, data?: DeleteCacheSubnetGroupCommandOutput) => void): void;
    deleteCacheSubnetGroup(args: DeleteCacheSubnetGroupCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: DeleteCacheSubnetGroupCommandOutput) => void): void;
    /**
     * <p>Deleting a Global datastore is a two-step process: </p>
     *             <ul>
     *             <li>
     *                <p>First, you must <a>DisassociateGlobalReplicationGroup</a> to remove the secondary clusters in the Global datastore.</p>
     *             </li>
     *             <li>
     *                <p>Once the Global datastore contains only the primary cluster, you can use the <code>DeleteGlobalReplicationGroup</code> API to delete the Global datastore while retainining the primary cluster using <code>RetainPrimaryReplicationGroup=true</code>.</p>
     *             </li>
     *          </ul>
     *
     *
     *           <p>Since the Global Datastore has only a primary cluster, you can delete the Global Datastore
     *              while retaining the primary by setting <code>RetainPrimaryReplicationGroup=true</code>. The primary cluster is never deleted when deleting a
     *           Global Datastore. It can only be deleted when it no longer is associated with any Global Datastore.</p>
     *
     *         <p>When you receive a successful response from this operation, Amazon ElastiCache immediately begins deleting the selected resources;
     *             you cannot cancel or revert this operation.</p>
     */
    deleteGlobalReplicationGroup(args: DeleteGlobalReplicationGroupCommandInput, options?: __HttpHandlerOptions): Promise<DeleteGlobalReplicationGroupCommandOutput>;
    deleteGlobalReplicationGroup(args: DeleteGlobalReplicationGroupCommandInput, cb: (err: any, data?: DeleteGlobalReplicationGroupCommandOutput) => void): void;
    deleteGlobalReplicationGroup(args: DeleteGlobalReplicationGroupCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: DeleteGlobalReplicationGroupCommandOutput) => void): void;
    /**
     * <p>Deletes an existing replication group.
     *             By default, this operation deletes the entire replication group, including the primary/primaries and all of the read replicas.
     *             If the replication group has only one primary,
     *             you can optionally delete only the read replicas, while retaining the primary by setting <code>RetainPrimaryCluster=true</code>.</p>
     *         <p>When you receive a successful response from this operation, Amazon ElastiCache immediately begins deleting the selected resources;
     *             you cannot cancel or revert this operation.</p>
     *         <note>
     *             <p>This operation is valid for Redis only.</p>
     *          </note>
     */
    deleteReplicationGroup(args: DeleteReplicationGroupCommandInput, options?: __HttpHandlerOptions): Promise<DeleteReplicationGroupCommandOutput>;
    deleteReplicationGroup(args: DeleteReplicationGroupCommandInput, cb: (err: any, data?: DeleteReplicationGroupCommandOutput) => void): void;
    deleteReplicationGroup(args: DeleteReplicationGroupCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: DeleteReplicationGroupCommandOutput) => void): void;
    /**
     * <p>Deletes an existing snapshot. When you receive a
     *             successful response from this operation, ElastiCache immediately begins deleting the snapshot;
     *             you cannot cancel or revert this operation.</p>
     *
     *         <note>
     *             <p>This operation is valid for Redis only.</p>
     *          </note>
     */
    deleteSnapshot(args: DeleteSnapshotCommandInput, options?: __HttpHandlerOptions): Promise<DeleteSnapshotCommandOutput>;
    deleteSnapshot(args: DeleteSnapshotCommandInput, cb: (err: any, data?: DeleteSnapshotCommandOutput) => void): void;
    deleteSnapshot(args: DeleteSnapshotCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: DeleteSnapshotCommandOutput) => void): void;
    /**
     * <p>For Redis engine version 6.x onwards: Deletes a user. The user will be removed from all user groups and in turn removed from all replication groups. For more information, see <a href="http://docs.aws.amazon.com/AmazonElastiCache/latest/red-ug/Clusters.RBAC.html">Using Role Based Access Control (RBAC)</a>. </p>
     */
    deleteUser(args: DeleteUserCommandInput, options?: __HttpHandlerOptions): Promise<DeleteUserCommandOutput>;
    deleteUser(args: DeleteUserCommandInput, cb: (err: any, data?: DeleteUserCommandOutput) => void): void;
    deleteUser(args: DeleteUserCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: DeleteUserCommandOutput) => void): void;
    /**
     * <p>For Redis engine version 6.x onwards: Deletes a user group. The user group must first be disassociated from the replication group before it can be deleted. For more information, see <a href="http://docs.aws.amazon.com/AmazonElastiCache/latest/red-ug/Clusters.RBAC.html">Using Role Based Access Control (RBAC)</a>. </p>
     */
    deleteUserGroup(args: DeleteUserGroupCommandInput, options?: __HttpHandlerOptions): Promise<DeleteUserGroupCommandOutput>;
    deleteUserGroup(args: DeleteUserGroupCommandInput, cb: (err: any, data?: DeleteUserGroupCommandOutput) => void): void;
    deleteUserGroup(args: DeleteUserGroupCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: DeleteUserGroupCommandOutput) => void): void;
    /**
     * <p>Returns information about all provisioned
     *             clusters if no cluster identifier is specified, or about a specific cache
     *             cluster if a cluster identifier is supplied.</p>
     *         <p>By default, abbreviated information about the clusters is returned. You can
     *             use the optional <i>ShowCacheNodeInfo</i> flag to retrieve detailed information about the
     *             cache nodes associated with the clusters. These details include the DNS address
     *             and port for the cache node endpoint.</p>
     *         <p>If the cluster is in the <i>creating</i> state, only cluster-level information is displayed
     *             until all of the nodes are successfully provisioned.</p>
     *         <p>If the cluster is in the <i>deleting</i> state, only cluster-level information is displayed.</p>
     *         <p>If cache nodes are currently being added to the cluster, node endpoint information
     *             and creation time for the additional nodes are not displayed until they are
     *             completely provisioned. When the cluster state is <i>available</i>, the cluster is
     *             ready for use.</p>
     *         <p>If cache nodes are currently being removed from the cluster, no endpoint information
     *             for the removed nodes is displayed.</p>
     */
    describeCacheClusters(args: DescribeCacheClustersCommandInput, options?: __HttpHandlerOptions): Promise<DescribeCacheClustersCommandOutput>;
    describeCacheClusters(args: DescribeCacheClustersCommandInput, cb: (err: any, data?: DescribeCacheClustersCommandOutput) => void): void;
    describeCacheClusters(args: DescribeCacheClustersCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: DescribeCacheClustersCommandOutput) => void): void;
    /**
     * <p>Returns a list of the available cache
     *             engines and their versions.</p>
     */
    describeCacheEngineVersions(args: DescribeCacheEngineVersionsCommandInput, options?: __HttpHandlerOptions): Promise<DescribeCacheEngineVersionsCommandOutput>;
    describeCacheEngineVersions(args: DescribeCacheEngineVersionsCommandInput, cb: (err: any, data?: DescribeCacheEngineVersionsCommandOutput) => void): void;
    describeCacheEngineVersions(args: DescribeCacheEngineVersionsCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: DescribeCacheEngineVersionsCommandOutput) => void): void;
    /**
     * <p>Returns a list of cache parameter group
     *             descriptions. If a cache parameter group name is specified, the list contains only
     *             the descriptions for that group.</p>
     */
    describeCacheParameterGroups(args: DescribeCacheParameterGroupsCommandInput, options?: __HttpHandlerOptions): Promise<DescribeCacheParameterGroupsCommandOutput>;
    describeCacheParameterGroups(args: DescribeCacheParameterGroupsCommandInput, cb: (err: any, data?: DescribeCacheParameterGroupsCommandOutput) => void): void;
    describeCacheParameterGroups(args: DescribeCacheParameterGroupsCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: DescribeCacheParameterGroupsCommandOutput) => void): void;
    /**
     * <p>Returns the detailed parameter list for a
     *             particular cache parameter group.</p>
     */
    describeCacheParameters(args: DescribeCacheParametersCommandInput, options?: __HttpHandlerOptions): Promise<DescribeCacheParametersCommandOutput>;
    describeCacheParameters(args: DescribeCacheParametersCommandInput, cb: (err: any, data?: DescribeCacheParametersCommandOutput) => void): void;
    describeCacheParameters(args: DescribeCacheParametersCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: DescribeCacheParametersCommandOutput) => void): void;
    /**
     * <p>Returns a list of cache security group
     *             descriptions. If a cache security group name is specified, the list contains only
     *             the description of that group. This applicable only when you have ElastiCache in Classic setup
     *         </p>
     */
    describeCacheSecurityGroups(args: DescribeCacheSecurityGroupsCommandInput, options?: __HttpHandlerOptions): Promise<DescribeCacheSecurityGroupsCommandOutput>;
    describeCacheSecurityGroups(args: DescribeCacheSecurityGroupsCommandInput, cb: (err: any, data?: DescribeCacheSecurityGroupsCommandOutput) => void): void;
    describeCacheSecurityGroups(args: DescribeCacheSecurityGroupsCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: DescribeCacheSecurityGroupsCommandOutput) => void): void;
    /**
     * <p>Returns a list of cache subnet group
     *             descriptions. If a subnet group name is specified, the list  contains only the
     *             description of that group. This is applicable only when you have ElastiCache in VPC setup. All ElastiCache clusters now launch in VPC by default.
     *         </p>
     */
    describeCacheSubnetGroups(args: DescribeCacheSubnetGroupsCommandInput, options?: __HttpHandlerOptions): Promise<DescribeCacheSubnetGroupsCommandOutput>;
    describeCacheSubnetGroups(args: DescribeCacheSubnetGroupsCommandInput, cb: (err: any, data?: DescribeCacheSubnetGroupsCommandOutput) => void): void;
    describeCacheSubnetGroups(args: DescribeCacheSubnetGroupsCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: DescribeCacheSubnetGroupsCommandOutput) => void): void;
    /**
     * <p>Returns the default engine and
     *             system parameter information for the specified cache engine.</p>
     */
    describeEngineDefaultParameters(args: DescribeEngineDefaultParametersCommandInput, options?: __HttpHandlerOptions): Promise<DescribeEngineDefaultParametersCommandOutput>;
    describeEngineDefaultParameters(args: DescribeEngineDefaultParametersCommandInput, cb: (err: any, data?: DescribeEngineDefaultParametersCommandOutput) => void): void;
    describeEngineDefaultParameters(args: DescribeEngineDefaultParametersCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: DescribeEngineDefaultParametersCommandOutput) => void): void;
    /**
     * <p>Returns events related to clusters, cache
     *             security groups, and cache parameter groups. You can obtain events specific to a
     *             particular cluster, cache security group, or cache parameter group by providing
     *             the name as a parameter.</p>
     *         <p>By default, only the events occurring within the last hour are returned;
     *             however, you can retrieve up to 14 days' worth of events if necessary.</p>
     */
    describeEvents(args: DescribeEventsCommandInput, options?: __HttpHandlerOptions): Promise<DescribeEventsCommandOutput>;
    describeEvents(args: DescribeEventsCommandInput, cb: (err: any, data?: DescribeEventsCommandOutput) => void): void;
    describeEvents(args: DescribeEventsCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: DescribeEventsCommandOutput) => void): void;
    /**
     * <p>Returns information about a particular global replication group. If no identifier is specified, returns information about all Global datastores. </p>
     */
    describeGlobalReplicationGroups(args: DescribeGlobalReplicationGroupsCommandInput, options?: __HttpHandlerOptions): Promise<DescribeGlobalReplicationGroupsCommandOutput>;
    describeGlobalReplicationGroups(args: DescribeGlobalReplicationGroupsCommandInput, cb: (err: any, data?: DescribeGlobalReplicationGroupsCommandOutput) => void): void;
    describeGlobalReplicationGroups(args: DescribeGlobalReplicationGroupsCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: DescribeGlobalReplicationGroupsCommandOutput) => void): void;
    /**
     * <p>Returns information about a particular
     *             replication group. If no identifier is specified, <code>DescribeReplicationGroups</code>
     *             returns information about all replication groups.</p>
     *         <note>
     *             <p>This operation is valid for Redis only.</p>
     *          </note>
     */
    describeReplicationGroups(args: DescribeReplicationGroupsCommandInput, options?: __HttpHandlerOptions): Promise<DescribeReplicationGroupsCommandOutput>;
    describeReplicationGroups(args: DescribeReplicationGroupsCommandInput, cb: (err: any, data?: DescribeReplicationGroupsCommandOutput) => void): void;
    describeReplicationGroups(args: DescribeReplicationGroupsCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: DescribeReplicationGroupsCommandOutput) => void): void;
    /**
     * <p>Returns information about reserved cache
     *             nodes for this account, or about a specified reserved cache node.</p>
     */
    describeReservedCacheNodes(args: DescribeReservedCacheNodesCommandInput, options?: __HttpHandlerOptions): Promise<DescribeReservedCacheNodesCommandOutput>;
    describeReservedCacheNodes(args: DescribeReservedCacheNodesCommandInput, cb: (err: any, data?: DescribeReservedCacheNodesCommandOutput) => void): void;
    describeReservedCacheNodes(args: DescribeReservedCacheNodesCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: DescribeReservedCacheNodesCommandOutput) => void): void;
    /**
     * <p>Lists available reserved cache
     *             node offerings.</p>
     */
    describeReservedCacheNodesOfferings(args: DescribeReservedCacheNodesOfferingsCommandInput, options?: __HttpHandlerOptions): Promise<DescribeReservedCacheNodesOfferingsCommandOutput>;
    describeReservedCacheNodesOfferings(args: DescribeReservedCacheNodesOfferingsCommandInput, cb: (err: any, data?: DescribeReservedCacheNodesOfferingsCommandOutput) => void): void;
    describeReservedCacheNodesOfferings(args: DescribeReservedCacheNodesOfferingsCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: DescribeReservedCacheNodesOfferingsCommandOutput) => void): void;
    /**
     * <p>Returns details of the service updates</p>
     */
    describeServiceUpdates(args: DescribeServiceUpdatesCommandInput, options?: __HttpHandlerOptions): Promise<DescribeServiceUpdatesCommandOutput>;
    describeServiceUpdates(args: DescribeServiceUpdatesCommandInput, cb: (err: any, data?: DescribeServiceUpdatesCommandOutput) => void): void;
    describeServiceUpdates(args: DescribeServiceUpdatesCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: DescribeServiceUpdatesCommandOutput) => void): void;
    /**
     * <p>Returns information about cluster or replication group snapshots.
     *             By default, <code>DescribeSnapshots</code> lists all of your snapshots; it can optionally
     *             describe a single snapshot, or just the snapshots associated with a particular cache
     *             cluster.</p>
     *
     *         <note>
     *             <p>This operation is valid for Redis only.</p>
     *          </note>
     */
    describeSnapshots(args: DescribeSnapshotsCommandInput, options?: __HttpHandlerOptions): Promise<DescribeSnapshotsCommandOutput>;
    describeSnapshots(args: DescribeSnapshotsCommandInput, cb: (err: any, data?: DescribeSnapshotsCommandOutput) => void): void;
    describeSnapshots(args: DescribeSnapshotsCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: DescribeSnapshotsCommandOutput) => void): void;
    /**
     * <p>Returns details of the update actions </p>
     */
    describeUpdateActions(args: DescribeUpdateActionsCommandInput, options?: __HttpHandlerOptions): Promise<DescribeUpdateActionsCommandOutput>;
    describeUpdateActions(args: DescribeUpdateActionsCommandInput, cb: (err: any, data?: DescribeUpdateActionsCommandOutput) => void): void;
    describeUpdateActions(args: DescribeUpdateActionsCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: DescribeUpdateActionsCommandOutput) => void): void;
    /**
     * <p>Returns a list of user groups.</p>
     */
    describeUserGroups(args: DescribeUserGroupsCommandInput, options?: __HttpHandlerOptions): Promise<DescribeUserGroupsCommandOutput>;
    describeUserGroups(args: DescribeUserGroupsCommandInput, cb: (err: any, data?: DescribeUserGroupsCommandOutput) => void): void;
    describeUserGroups(args: DescribeUserGroupsCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: DescribeUserGroupsCommandOutput) => void): void;
    /**
     * <p>Returns a list of users.</p>
     */
    describeUsers(args: DescribeUsersCommandInput, options?: __HttpHandlerOptions): Promise<DescribeUsersCommandOutput>;
    describeUsers(args: DescribeUsersCommandInput, cb: (err: any, data?: DescribeUsersCommandOutput) => void): void;
    describeUsers(args: DescribeUsersCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: DescribeUsersCommandOutput) => void): void;
    /**
     * <p>Remove a secondary cluster from the Global datastore using the Global datastore name. The secondary cluster will no longer receive updates from the primary cluster, but will remain as a standalone cluster in that AWS region.</p>
     */
    disassociateGlobalReplicationGroup(args: DisassociateGlobalReplicationGroupCommandInput, options?: __HttpHandlerOptions): Promise<DisassociateGlobalReplicationGroupCommandOutput>;
    disassociateGlobalReplicationGroup(args: DisassociateGlobalReplicationGroupCommandInput, cb: (err: any, data?: DisassociateGlobalReplicationGroupCommandOutput) => void): void;
    disassociateGlobalReplicationGroup(args: DisassociateGlobalReplicationGroupCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: DisassociateGlobalReplicationGroupCommandOutput) => void): void;
    /**
     * <p>Used to failover the primary region to a selected secondary region. The selected secondary region will become primary, and all other clusters will become secondary.</p>
     */
    failoverGlobalReplicationGroup(args: FailoverGlobalReplicationGroupCommandInput, options?: __HttpHandlerOptions): Promise<FailoverGlobalReplicationGroupCommandOutput>;
    failoverGlobalReplicationGroup(args: FailoverGlobalReplicationGroupCommandInput, cb: (err: any, data?: FailoverGlobalReplicationGroupCommandOutput) => void): void;
    failoverGlobalReplicationGroup(args: FailoverGlobalReplicationGroupCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: FailoverGlobalReplicationGroupCommandOutput) => void): void;
    /**
     * <p>Increase the number of node groups in the Global datastore</p>
     */
    increaseNodeGroupsInGlobalReplicationGroup(args: IncreaseNodeGroupsInGlobalReplicationGroupCommandInput, options?: __HttpHandlerOptions): Promise<IncreaseNodeGroupsInGlobalReplicationGroupCommandOutput>;
    increaseNodeGroupsInGlobalReplicationGroup(args: IncreaseNodeGroupsInGlobalReplicationGroupCommandInput, cb: (err: any, data?: IncreaseNodeGroupsInGlobalReplicationGroupCommandOutput) => void): void;
    increaseNodeGroupsInGlobalReplicationGroup(args: IncreaseNodeGroupsInGlobalReplicationGroupCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: IncreaseNodeGroupsInGlobalReplicationGroupCommandOutput) => void): void;
    /**
     * <p>Dynamically increases the number of replicas in a Redis (cluster mode disabled) replication group or the number of
     *             replica nodes in one or more node groups (shards) of a Redis (cluster mode enabled) replication group. This operation
     *             is performed with no cluster down time.</p>
     */
    increaseReplicaCount(args: IncreaseReplicaCountCommandInput, options?: __HttpHandlerOptions): Promise<IncreaseReplicaCountCommandOutput>;
    increaseReplicaCount(args: IncreaseReplicaCountCommandInput, cb: (err: any, data?: IncreaseReplicaCountCommandOutput) => void): void;
    increaseReplicaCount(args: IncreaseReplicaCountCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: IncreaseReplicaCountCommandOutput) => void): void;
    /**
     * <p>Lists all available node types that you
     *             can scale your Redis cluster's or replication group's current node type.</p>
     *
     *         <p>When you use the <code>ModifyCacheCluster</code> or <code>ModifyReplicationGroup</code> operations to
     *             scale your cluster or replication group, the value of the <code>CacheNodeType</code> parameter
     *             must be one of the node types returned by this operation.</p>
     */
    listAllowedNodeTypeModifications(args: ListAllowedNodeTypeModificationsCommandInput, options?: __HttpHandlerOptions): Promise<ListAllowedNodeTypeModificationsCommandOutput>;
    listAllowedNodeTypeModifications(args: ListAllowedNodeTypeModificationsCommandInput, cb: (err: any, data?: ListAllowedNodeTypeModificationsCommandOutput) => void): void;
    listAllowedNodeTypeModifications(args: ListAllowedNodeTypeModificationsCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: ListAllowedNodeTypeModificationsCommandOutput) => void): void;
    /**
     * <p>Lists all tags currently on a  named resource.</p>
     *          <p>    A  tag is a key-value pair where the key and value are case-sensitive.
     *             You can use tags to categorize and track all your ElastiCache resources, with the exception of global replication group. When you add or remove tags on replication groups, those actions will be replicated to all nodes in the replication group.
     *      For more information, see <a href="http://docs.aws.amazon.com/AmazonElastiCache/latest/red-ug/IAM.ResourceLevelPermissions.html">Resource-level permissions</a>.</p>
     *
     *         <p>If the cluster is not in the <i>available</i> state, <code>ListTagsForResource</code>
     *             returns an error.</p>
     */
    listTagsForResource(args: ListTagsForResourceCommandInput, options?: __HttpHandlerOptions): Promise<ListTagsForResourceCommandOutput>;
    listTagsForResource(args: ListTagsForResourceCommandInput, cb: (err: any, data?: ListTagsForResourceCommandOutput) => void): void;
    listTagsForResource(args: ListTagsForResourceCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: ListTagsForResourceCommandOutput) => void): void;
    /**
     * <p>Modifies the settings for a cluster. You
     *             can use this operation to change one or more cluster configuration parameters by
     *             specifying the parameters and the new values.</p>
     */
    modifyCacheCluster(args: ModifyCacheClusterCommandInput, options?: __HttpHandlerOptions): Promise<ModifyCacheClusterCommandOutput>;
    modifyCacheCluster(args: ModifyCacheClusterCommandInput, cb: (err: any, data?: ModifyCacheClusterCommandOutput) => void): void;
    modifyCacheCluster(args: ModifyCacheClusterCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: ModifyCacheClusterCommandOutput) => void): void;
    /**
     * <p>Modifies the parameters of a cache
     *             parameter group. You can modify up to 20 parameters in a single request by submitting a
     *             list parameter name and value pairs.</p>
     */
    modifyCacheParameterGroup(args: ModifyCacheParameterGroupCommandInput, options?: __HttpHandlerOptions): Promise<ModifyCacheParameterGroupCommandOutput>;
    modifyCacheParameterGroup(args: ModifyCacheParameterGroupCommandInput, cb: (err: any, data?: ModifyCacheParameterGroupCommandOutput) => void): void;
    modifyCacheParameterGroup(args: ModifyCacheParameterGroupCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: ModifyCacheParameterGroupCommandOutput) => void): void;
    /**
     * <p>Modifies an existing cache subnet group.</p>
     */
    modifyCacheSubnetGroup(args: ModifyCacheSubnetGroupCommandInput, options?: __HttpHandlerOptions): Promise<ModifyCacheSubnetGroupCommandOutput>;
    modifyCacheSubnetGroup(args: ModifyCacheSubnetGroupCommandInput, cb: (err: any, data?: ModifyCacheSubnetGroupCommandOutput) => void): void;
    modifyCacheSubnetGroup(args: ModifyCacheSubnetGroupCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: ModifyCacheSubnetGroupCommandOutput) => void): void;
    /**
     * <p>Modifies the settings for a Global datastore.</p>
     */
    modifyGlobalReplicationGroup(args: ModifyGlobalReplicationGroupCommandInput, options?: __HttpHandlerOptions): Promise<ModifyGlobalReplicationGroupCommandOutput>;
    modifyGlobalReplicationGroup(args: ModifyGlobalReplicationGroupCommandInput, cb: (err: any, data?: ModifyGlobalReplicationGroupCommandOutput) => void): void;
    modifyGlobalReplicationGroup(args: ModifyGlobalReplicationGroupCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: ModifyGlobalReplicationGroupCommandOutput) => void): void;
    /**
     * <p>Modifies the settings for a replication group.</p>
     *
     *         <ul>
     *             <li>
     *                 <p>
     *                   <a href="https://docs.aws.amazon.com/AmazonElastiCache/latest/red-ug/scaling-redis-cluster-mode-enabled.html">Scaling for Amazon ElastiCache for Redis (cluster mode enabled)</a>
     *                     in the ElastiCache User Guide</p>
     *             </li>
     *             <li>
     *                 <p>
     *                   <a href="https://docs.aws.amazon.com/AmazonElastiCache/latest/APIReference/API_ModifyReplicationGroupShardConfiguration.html">ModifyReplicationGroupShardConfiguration</a>
     *                     in the ElastiCache API Reference</p>
     *             </li>
     *          </ul>
     *         <note>
     *             <p>This operation is valid for Redis only.</p>
     *          </note>
     */
    modifyReplicationGroup(args: ModifyReplicationGroupCommandInput, options?: __HttpHandlerOptions): Promise<ModifyReplicationGroupCommandOutput>;
    modifyReplicationGroup(args: ModifyReplicationGroupCommandInput, cb: (err: any, data?: ModifyReplicationGroupCommandOutput) => void): void;
    modifyReplicationGroup(args: ModifyReplicationGroupCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: ModifyReplicationGroupCommandOutput) => void): void;
    /**
     * <p>Modifies a replication group's shards (node groups) by allowing you to
     *             add shards, remove shards, or rebalance the keyspaces among existing shards.</p>
     */
    modifyReplicationGroupShardConfiguration(args: ModifyReplicationGroupShardConfigurationCommandInput, options?: __HttpHandlerOptions): Promise<ModifyReplicationGroupShardConfigurationCommandOutput>;
    modifyReplicationGroupShardConfiguration(args: ModifyReplicationGroupShardConfigurationCommandInput, cb: (err: any, data?: ModifyReplicationGroupShardConfigurationCommandOutput) => void): void;
    modifyReplicationGroupShardConfiguration(args: ModifyReplicationGroupShardConfigurationCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: ModifyReplicationGroupShardConfigurationCommandOutput) => void): void;
    /**
     * <p>Changes user password(s) and/or access string.</p>
     */
    modifyUser(args: ModifyUserCommandInput, options?: __HttpHandlerOptions): Promise<ModifyUserCommandOutput>;
    modifyUser(args: ModifyUserCommandInput, cb: (err: any, data?: ModifyUserCommandOutput) => void): void;
    modifyUser(args: ModifyUserCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: ModifyUserCommandOutput) => void): void;
    /**
     * <p>Changes the list of users that belong to the user group.</p>
     */
    modifyUserGroup(args: ModifyUserGroupCommandInput, options?: __HttpHandlerOptions): Promise<ModifyUserGroupCommandOutput>;
    modifyUserGroup(args: ModifyUserGroupCommandInput, cb: (err: any, data?: ModifyUserGroupCommandOutput) => void): void;
    modifyUserGroup(args: ModifyUserGroupCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: ModifyUserGroupCommandOutput) => void): void;
    /**
     * <p>Allows you to purchase a reserved
     *             cache node offering. Reserved nodes are not eligible for cancellation and are non-refundable. For more information,
     *             see <a href="https://docs.aws.amazon.com/AmazonElastiCache/latest/red-ug/reserved-nodes.html">Managing Costs with Reserved Nodes</a> for Redis or
     *             <a href="https://docs.aws.amazon.com/AmazonElastiCache/latest/mem-ug/reserved-nodes.html">Managing Costs with Reserved Nodes</a> for Memcached.</p>
     */
    purchaseReservedCacheNodesOffering(args: PurchaseReservedCacheNodesOfferingCommandInput, options?: __HttpHandlerOptions): Promise<PurchaseReservedCacheNodesOfferingCommandOutput>;
    purchaseReservedCacheNodesOffering(args: PurchaseReservedCacheNodesOfferingCommandInput, cb: (err: any, data?: PurchaseReservedCacheNodesOfferingCommandOutput) => void): void;
    purchaseReservedCacheNodesOffering(args: PurchaseReservedCacheNodesOfferingCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: PurchaseReservedCacheNodesOfferingCommandOutput) => void): void;
    /**
     * <p>Redistribute slots to ensure uniform distribution across existing shards in the cluster.</p>
     */
    rebalanceSlotsInGlobalReplicationGroup(args: RebalanceSlotsInGlobalReplicationGroupCommandInput, options?: __HttpHandlerOptions): Promise<RebalanceSlotsInGlobalReplicationGroupCommandOutput>;
    rebalanceSlotsInGlobalReplicationGroup(args: RebalanceSlotsInGlobalReplicationGroupCommandInput, cb: (err: any, data?: RebalanceSlotsInGlobalReplicationGroupCommandOutput) => void): void;
    rebalanceSlotsInGlobalReplicationGroup(args: RebalanceSlotsInGlobalReplicationGroupCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: RebalanceSlotsInGlobalReplicationGroupCommandOutput) => void): void;
    /**
     * <p>Reboots some, or all, of the cache nodes
     *             within a provisioned cluster. This operation applies any modified cache parameter
     *             groups to the cluster. The reboot operation takes place as soon as possible, and
     *             results in a momentary outage to the cluster. During the reboot, the cluster
     *             status is set to REBOOTING.</p>
     *         <p>The reboot causes the contents of the cache (for each cache node being rebooted) to be lost.</p>
     *         <p>When the reboot is complete, a cluster event is created.</p>
     *
     *         <p>Rebooting a cluster is currently supported on Memcached and Redis (cluster mode disabled) clusters.
     *             Rebooting is not supported on Redis (cluster mode enabled) clusters.</p>
     *
     *         <p>If you make changes to parameters that require a Redis (cluster mode enabled) cluster reboot for the changes to be applied,
     *             see <a href="http://docs.aws.amazon.com/AmazonElastiCache/latest/red-ug/Clusters.Rebooting.html">Rebooting a Cluster</a> for an alternate process.</p>
     */
    rebootCacheCluster(args: RebootCacheClusterCommandInput, options?: __HttpHandlerOptions): Promise<RebootCacheClusterCommandOutput>;
    rebootCacheCluster(args: RebootCacheClusterCommandInput, cb: (err: any, data?: RebootCacheClusterCommandOutput) => void): void;
    rebootCacheCluster(args: RebootCacheClusterCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: RebootCacheClusterCommandOutput) => void): void;
    /**
     * <p>Removes the tags identified by the <code>TagKeys</code>
     *             list from the named resource. A  tag is a key-value pair where the key and value are case-sensitive.
     *             You can use tags to categorize and track all your ElastiCache resources, with the exception of global replication group. When you add or remove tags on replication groups, those actions will be replicated to all nodes in the replication group.
     *         For more information, see <a href="http://docs.aws.amazon.com/AmazonElastiCache/latest/red-ug/IAM.ResourceLevelPermissions.html">Resource-level permissions</a>.</p>
     */
    removeTagsFromResource(args: RemoveTagsFromResourceCommandInput, options?: __HttpHandlerOptions): Promise<RemoveTagsFromResourceCommandOutput>;
    removeTagsFromResource(args: RemoveTagsFromResourceCommandInput, cb: (err: any, data?: RemoveTagsFromResourceCommandOutput) => void): void;
    removeTagsFromResource(args: RemoveTagsFromResourceCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: RemoveTagsFromResourceCommandOutput) => void): void;
    /**
     * <p>Modifies the parameters of a cache
     *             parameter group to the engine or system default value. You can reset specific parameters
     *             by submitting a list of parameter names. To reset the entire cache parameter group,
     *             specify the <code>ResetAllParameters</code> and <code>CacheParameterGroupName</code> parameters.</p>
     */
    resetCacheParameterGroup(args: ResetCacheParameterGroupCommandInput, options?: __HttpHandlerOptions): Promise<ResetCacheParameterGroupCommandOutput>;
    resetCacheParameterGroup(args: ResetCacheParameterGroupCommandInput, cb: (err: any, data?: ResetCacheParameterGroupCommandOutput) => void): void;
    resetCacheParameterGroup(args: ResetCacheParameterGroupCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: ResetCacheParameterGroupCommandOutput) => void): void;
    /**
     * <p>Revokes ingress from a cache security group.
     *             Use this operation to disallow access from an Amazon EC2 security group
     *             that had been previously authorized.</p>
     */
    revokeCacheSecurityGroupIngress(args: RevokeCacheSecurityGroupIngressCommandInput, options?: __HttpHandlerOptions): Promise<RevokeCacheSecurityGroupIngressCommandOutput>;
    revokeCacheSecurityGroupIngress(args: RevokeCacheSecurityGroupIngressCommandInput, cb: (err: any, data?: RevokeCacheSecurityGroupIngressCommandOutput) => void): void;
    revokeCacheSecurityGroupIngress(args: RevokeCacheSecurityGroupIngressCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: RevokeCacheSecurityGroupIngressCommandOutput) => void): void;
    /**
     * <p>Start the migration of data.</p>
     */
    startMigration(args: StartMigrationCommandInput, options?: __HttpHandlerOptions): Promise<StartMigrationCommandOutput>;
    startMigration(args: StartMigrationCommandInput, cb: (err: any, data?: StartMigrationCommandOutput) => void): void;
    startMigration(args: StartMigrationCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: StartMigrationCommandOutput) => void): void;
    /**
     * <p>Represents the input of a <code>TestFailover</code> operation which test automatic failover on
     *             a specified node group (called shard in the console) in a replication group (called cluster in the console).</p>
     *
     *         <p class="title">
     *             <b>Note the following</b>
     *          </p>
     *          <ul>
     *             <li>
     *                 <p>A customer can use this operation to test automatic failover on up to 5 shards (called node groups in the ElastiCache API and AWS CLI)
     *                     in any rolling 24-hour period.</p>
     *             </li>
     *             <li>
     *                 <p>If calling this operation on shards in different clusters (called replication groups in the API and CLI), the calls can be made concurrently.</p>
     *                 <p> </p>
     *             </li>
     *             <li>
     *                 <p>If calling this operation multiple times on different shards in the same Redis (cluster mode enabled) replication group,
     *                     the first node replacement must complete before a subsequent call can be made.</p>
     *             </li>
     *             <li>
     *                 <p>To determine whether the node replacement is complete you can check Events using the Amazon ElastiCache console,
     *                     the AWS CLI, or the ElastiCache API.
     *                     Look for the following automatic failover related events, listed here in order of occurrance:</p>
     *                 <ol>
     *                   <li>
     *                         <p>Replication group message: <code>Test Failover API called for node group <node-group-id></code>
     *                      </p>
     *                   </li>
     *                   <li>
     *                         <p>Cache cluster message: <code>Failover from primary node <primary-node-id> to replica node <node-id> completed</code>
     *                      </p>
     *                   </li>
     *                   <li>
     *                         <p>Replication group message: <code>Failover from primary node <primary-node-id> to replica node <node-id> completed</code>
     *                      </p>
     *                   </li>
     *                   <li>
     *                         <p>Cache cluster message: <code>Recovering cache nodes <node-id></code>
     *                      </p>
     *                   </li>
     *                   <li>
     *                         <p>Cache cluster message: <code>Finished recovery for cache nodes <node-id></code>
     *                      </p>
     *                   </li>
     *                </ol>
     *
     *                 <p>For more information see:</p>
     *                 <ul>
     *                   <li>
     *                         <p>
     *                         <a href="https://docs.aws.amazon.com/AmazonElastiCache/latest/red-ug/ECEvents.Viewing.html">Viewing ElastiCache Events</a>
     *                             in the <i>ElastiCache User Guide</i>
     *                      </p>
     *                   </li>
     *                   <li>
     *                         <p>
     *                         <a href="https://docs.aws.amazon.com/AmazonElastiCache/latest/APIReference/API_DescribeEvents.html">DescribeEvents</a> in the ElastiCache API Reference</p>
     *                   </li>
     *                </ul>
     *             </li>
     *          </ul>
     *
     *         <p>Also see, <a href="https://docs.aws.amazon.com/AmazonElastiCache/latest/red-ug/AutoFailover.html#auto-failover-test">Testing Multi-AZ </a> in the <i>ElastiCache User Guide</i>.</p>
     */
    testFailover(args: TestFailoverCommandInput, options?: __HttpHandlerOptions): Promise<TestFailoverCommandOutput>;
    testFailover(args: TestFailoverCommandInput, cb: (err: any, data?: TestFailoverCommandOutput) => void): void;
    testFailover(args: TestFailoverCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: TestFailoverCommandOutput) => void): void;
}
