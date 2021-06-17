import { DocDBClient } from "./DocDBClient";
import { AddTagsToResourceCommandInput, AddTagsToResourceCommandOutput } from "./commands/AddTagsToResourceCommand";
import { ApplyPendingMaintenanceActionCommandInput, ApplyPendingMaintenanceActionCommandOutput } from "./commands/ApplyPendingMaintenanceActionCommand";
import { CopyDBClusterParameterGroupCommandInput, CopyDBClusterParameterGroupCommandOutput } from "./commands/CopyDBClusterParameterGroupCommand";
import { CopyDBClusterSnapshotCommandInput, CopyDBClusterSnapshotCommandOutput } from "./commands/CopyDBClusterSnapshotCommand";
import { CreateDBClusterCommandInput, CreateDBClusterCommandOutput } from "./commands/CreateDBClusterCommand";
import { CreateDBClusterParameterGroupCommandInput, CreateDBClusterParameterGroupCommandOutput } from "./commands/CreateDBClusterParameterGroupCommand";
import { CreateDBClusterSnapshotCommandInput, CreateDBClusterSnapshotCommandOutput } from "./commands/CreateDBClusterSnapshotCommand";
import { CreateDBInstanceCommandInput, CreateDBInstanceCommandOutput } from "./commands/CreateDBInstanceCommand";
import { CreateDBSubnetGroupCommandInput, CreateDBSubnetGroupCommandOutput } from "./commands/CreateDBSubnetGroupCommand";
import { DeleteDBClusterCommandInput, DeleteDBClusterCommandOutput } from "./commands/DeleteDBClusterCommand";
import { DeleteDBClusterParameterGroupCommandInput, DeleteDBClusterParameterGroupCommandOutput } from "./commands/DeleteDBClusterParameterGroupCommand";
import { DeleteDBClusterSnapshotCommandInput, DeleteDBClusterSnapshotCommandOutput } from "./commands/DeleteDBClusterSnapshotCommand";
import { DeleteDBInstanceCommandInput, DeleteDBInstanceCommandOutput } from "./commands/DeleteDBInstanceCommand";
import { DeleteDBSubnetGroupCommandInput, DeleteDBSubnetGroupCommandOutput } from "./commands/DeleteDBSubnetGroupCommand";
import { DescribeCertificatesCommandInput, DescribeCertificatesCommandOutput } from "./commands/DescribeCertificatesCommand";
import { DescribeDBClusterParameterGroupsCommandInput, DescribeDBClusterParameterGroupsCommandOutput } from "./commands/DescribeDBClusterParameterGroupsCommand";
import { DescribeDBClusterParametersCommandInput, DescribeDBClusterParametersCommandOutput } from "./commands/DescribeDBClusterParametersCommand";
import { DescribeDBClusterSnapshotAttributesCommandInput, DescribeDBClusterSnapshotAttributesCommandOutput } from "./commands/DescribeDBClusterSnapshotAttributesCommand";
import { DescribeDBClusterSnapshotsCommandInput, DescribeDBClusterSnapshotsCommandOutput } from "./commands/DescribeDBClusterSnapshotsCommand";
import { DescribeDBClustersCommandInput, DescribeDBClustersCommandOutput } from "./commands/DescribeDBClustersCommand";
import { DescribeDBEngineVersionsCommandInput, DescribeDBEngineVersionsCommandOutput } from "./commands/DescribeDBEngineVersionsCommand";
import { DescribeDBInstancesCommandInput, DescribeDBInstancesCommandOutput } from "./commands/DescribeDBInstancesCommand";
import { DescribeDBSubnetGroupsCommandInput, DescribeDBSubnetGroupsCommandOutput } from "./commands/DescribeDBSubnetGroupsCommand";
import { DescribeEngineDefaultClusterParametersCommandInput, DescribeEngineDefaultClusterParametersCommandOutput } from "./commands/DescribeEngineDefaultClusterParametersCommand";
import { DescribeEventCategoriesCommandInput, DescribeEventCategoriesCommandOutput } from "./commands/DescribeEventCategoriesCommand";
import { DescribeEventsCommandInput, DescribeEventsCommandOutput } from "./commands/DescribeEventsCommand";
import { DescribeOrderableDBInstanceOptionsCommandInput, DescribeOrderableDBInstanceOptionsCommandOutput } from "./commands/DescribeOrderableDBInstanceOptionsCommand";
import { DescribePendingMaintenanceActionsCommandInput, DescribePendingMaintenanceActionsCommandOutput } from "./commands/DescribePendingMaintenanceActionsCommand";
import { FailoverDBClusterCommandInput, FailoverDBClusterCommandOutput } from "./commands/FailoverDBClusterCommand";
import { ListTagsForResourceCommandInput, ListTagsForResourceCommandOutput } from "./commands/ListTagsForResourceCommand";
import { ModifyDBClusterCommandInput, ModifyDBClusterCommandOutput } from "./commands/ModifyDBClusterCommand";
import { ModifyDBClusterParameterGroupCommandInput, ModifyDBClusterParameterGroupCommandOutput } from "./commands/ModifyDBClusterParameterGroupCommand";
import { ModifyDBClusterSnapshotAttributeCommandInput, ModifyDBClusterSnapshotAttributeCommandOutput } from "./commands/ModifyDBClusterSnapshotAttributeCommand";
import { ModifyDBInstanceCommandInput, ModifyDBInstanceCommandOutput } from "./commands/ModifyDBInstanceCommand";
import { ModifyDBSubnetGroupCommandInput, ModifyDBSubnetGroupCommandOutput } from "./commands/ModifyDBSubnetGroupCommand";
import { RebootDBInstanceCommandInput, RebootDBInstanceCommandOutput } from "./commands/RebootDBInstanceCommand";
import { RemoveTagsFromResourceCommandInput, RemoveTagsFromResourceCommandOutput } from "./commands/RemoveTagsFromResourceCommand";
import { ResetDBClusterParameterGroupCommandInput, ResetDBClusterParameterGroupCommandOutput } from "./commands/ResetDBClusterParameterGroupCommand";
import { RestoreDBClusterFromSnapshotCommandInput, RestoreDBClusterFromSnapshotCommandOutput } from "./commands/RestoreDBClusterFromSnapshotCommand";
import { RestoreDBClusterToPointInTimeCommandInput, RestoreDBClusterToPointInTimeCommandOutput } from "./commands/RestoreDBClusterToPointInTimeCommand";
import { StartDBClusterCommandInput, StartDBClusterCommandOutput } from "./commands/StartDBClusterCommand";
import { StopDBClusterCommandInput, StopDBClusterCommandOutput } from "./commands/StopDBClusterCommand";
import { HttpHandlerOptions as __HttpHandlerOptions } from "@aws-sdk/types";
/**
 * <p>Amazon DocumentDB API documentation</p>
 */
export declare class DocDB extends DocDBClient {
    /**
     * <p>Adds metadata tags to an Amazon DocumentDB resource. You can use these tags
     *             with cost allocation reporting to track costs that are associated
     *             with Amazon DocumentDB resources. or in a <code>Condition</code> statement in
     *             an AWS Identity and Access Management (IAM) policy for Amazon DocumentDB.</p>
     */
    addTagsToResource(args: AddTagsToResourceCommandInput, options?: __HttpHandlerOptions): Promise<AddTagsToResourceCommandOutput>;
    addTagsToResource(args: AddTagsToResourceCommandInput, cb: (err: any, data?: AddTagsToResourceCommandOutput) => void): void;
    addTagsToResource(args: AddTagsToResourceCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: AddTagsToResourceCommandOutput) => void): void;
    /**
     * <p>Applies a pending maintenance action to a resource (for example,
     *             to an Amazon DocumentDB instance).</p>
     */
    applyPendingMaintenanceAction(args: ApplyPendingMaintenanceActionCommandInput, options?: __HttpHandlerOptions): Promise<ApplyPendingMaintenanceActionCommandOutput>;
    applyPendingMaintenanceAction(args: ApplyPendingMaintenanceActionCommandInput, cb: (err: any, data?: ApplyPendingMaintenanceActionCommandOutput) => void): void;
    applyPendingMaintenanceAction(args: ApplyPendingMaintenanceActionCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: ApplyPendingMaintenanceActionCommandOutput) => void): void;
    /**
     * <p>Copies the specified cluster parameter group.</p>
     */
    copyDBClusterParameterGroup(args: CopyDBClusterParameterGroupCommandInput, options?: __HttpHandlerOptions): Promise<CopyDBClusterParameterGroupCommandOutput>;
    copyDBClusterParameterGroup(args: CopyDBClusterParameterGroupCommandInput, cb: (err: any, data?: CopyDBClusterParameterGroupCommandOutput) => void): void;
    copyDBClusterParameterGroup(args: CopyDBClusterParameterGroupCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: CopyDBClusterParameterGroupCommandOutput) => void): void;
    /**
     * <p>Copies a snapshot of a cluster.</p>
     *
     *         <p>To copy a cluster snapshot from a shared manual cluster snapshot,
     *             <code>SourceDBClusterSnapshotIdentifier</code> must be the Amazon
     *             Resource Name (ARN) of the shared cluster snapshot. You can only
     *             copy a shared DB cluster snapshot, whether encrypted or not, in the
     *             same AWS Region.</p>
     *
     *         <p>To cancel the copy operation after it is in progress, delete the
     *             target cluster snapshot identified by
     *             <code>TargetDBClusterSnapshotIdentifier</code> while that cluster
     *             snapshot is in the <i>copying</i> status.</p>
     */
    copyDBClusterSnapshot(args: CopyDBClusterSnapshotCommandInput, options?: __HttpHandlerOptions): Promise<CopyDBClusterSnapshotCommandOutput>;
    copyDBClusterSnapshot(args: CopyDBClusterSnapshotCommandInput, cb: (err: any, data?: CopyDBClusterSnapshotCommandOutput) => void): void;
    copyDBClusterSnapshot(args: CopyDBClusterSnapshotCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: CopyDBClusterSnapshotCommandOutput) => void): void;
    /**
     * <p>Creates a new Amazon DocumentDB cluster.</p>
     */
    createDBCluster(args: CreateDBClusterCommandInput, options?: __HttpHandlerOptions): Promise<CreateDBClusterCommandOutput>;
    createDBCluster(args: CreateDBClusterCommandInput, cb: (err: any, data?: CreateDBClusterCommandOutput) => void): void;
    createDBCluster(args: CreateDBClusterCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: CreateDBClusterCommandOutput) => void): void;
    /**
     * <p>Creates a new cluster parameter group.</p>
     *         <p>Parameters in a cluster parameter group apply to all of the
     *             instances in a cluster.</p>
     *         <p>A cluster parameter group is initially created with the default
     *             parameters for the database engine used by instances in the cluster.
     *             In Amazon DocumentDB, you cannot make modifications directly to the
     *             <code>default.docdb3.6</code> cluster parameter group. If your
     *             Amazon DocumentDB cluster is using the default cluster parameter group and you
     *             want to modify a value in it, you must first <a href="https://docs.aws.amazon.com/documentdb/latest/developerguide/cluster_parameter_group-create.html">
     *                 create a new parameter group</a>
     *             or <a href="https://docs.aws.amazon.com/documentdb/latest/developerguide/cluster_parameter_group-copy.html">
     *                 copy an existing parameter group</a>,
     *             modify it, and then apply the modified parameter group to your
     *             cluster. For the new cluster parameter group and associated settings
     *             to take effect, you must then reboot the instances in the cluster
     *             without failover. For more information,
     *             see <a href="https://docs.aws.amazon.com/documentdb/latest/developerguide/cluster_parameter_group-modify.html">
     *                 Modifying Amazon DocumentDB Cluster Parameter Groups</a>.
     *             </p>
     */
    createDBClusterParameterGroup(args: CreateDBClusterParameterGroupCommandInput, options?: __HttpHandlerOptions): Promise<CreateDBClusterParameterGroupCommandOutput>;
    createDBClusterParameterGroup(args: CreateDBClusterParameterGroupCommandInput, cb: (err: any, data?: CreateDBClusterParameterGroupCommandOutput) => void): void;
    createDBClusterParameterGroup(args: CreateDBClusterParameterGroupCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: CreateDBClusterParameterGroupCommandOutput) => void): void;
    /**
     * <p>Creates a snapshot of a cluster. </p>
     */
    createDBClusterSnapshot(args: CreateDBClusterSnapshotCommandInput, options?: __HttpHandlerOptions): Promise<CreateDBClusterSnapshotCommandOutput>;
    createDBClusterSnapshot(args: CreateDBClusterSnapshotCommandInput, cb: (err: any, data?: CreateDBClusterSnapshotCommandOutput) => void): void;
    createDBClusterSnapshot(args: CreateDBClusterSnapshotCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: CreateDBClusterSnapshotCommandOutput) => void): void;
    /**
     * <p>Creates a new instance.</p>
     */
    createDBInstance(args: CreateDBInstanceCommandInput, options?: __HttpHandlerOptions): Promise<CreateDBInstanceCommandOutput>;
    createDBInstance(args: CreateDBInstanceCommandInput, cb: (err: any, data?: CreateDBInstanceCommandOutput) => void): void;
    createDBInstance(args: CreateDBInstanceCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: CreateDBInstanceCommandOutput) => void): void;
    /**
     * <p>Creates a new subnet group. subnet groups must contain at least one subnet in at
     *             least two Availability Zones in the AWS Region.</p>
     */
    createDBSubnetGroup(args: CreateDBSubnetGroupCommandInput, options?: __HttpHandlerOptions): Promise<CreateDBSubnetGroupCommandOutput>;
    createDBSubnetGroup(args: CreateDBSubnetGroupCommandInput, cb: (err: any, data?: CreateDBSubnetGroupCommandOutput) => void): void;
    createDBSubnetGroup(args: CreateDBSubnetGroupCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: CreateDBSubnetGroupCommandOutput) => void): void;
    /**
     * <p>Deletes a previously provisioned cluster. When you delete a cluster, all
     *             automated backups for that cluster are deleted and can't be recovered. Manual DB
     *             cluster snapshots of the specified cluster are not deleted.</p>
     *         <p></p>
     */
    deleteDBCluster(args: DeleteDBClusterCommandInput, options?: __HttpHandlerOptions): Promise<DeleteDBClusterCommandOutput>;
    deleteDBCluster(args: DeleteDBClusterCommandInput, cb: (err: any, data?: DeleteDBClusterCommandOutput) => void): void;
    deleteDBCluster(args: DeleteDBClusterCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: DeleteDBClusterCommandOutput) => void): void;
    /**
     * <p>Deletes a specified cluster parameter group. The cluster parameter group to be
     *             deleted can't be associated with any clusters.</p>
     */
    deleteDBClusterParameterGroup(args: DeleteDBClusterParameterGroupCommandInput, options?: __HttpHandlerOptions): Promise<DeleteDBClusterParameterGroupCommandOutput>;
    deleteDBClusterParameterGroup(args: DeleteDBClusterParameterGroupCommandInput, cb: (err: any, data?: DeleteDBClusterParameterGroupCommandOutput) => void): void;
    deleteDBClusterParameterGroup(args: DeleteDBClusterParameterGroupCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: DeleteDBClusterParameterGroupCommandOutput) => void): void;
    /**
     * <p>Deletes a cluster snapshot. If the snapshot is being copied, the copy operation is
     *             terminated.</p>
     *         <note>
     *             <p>The cluster snapshot must be in the <code>available</code> state to be
     *                 deleted.</p>
     *         </note>
     */
    deleteDBClusterSnapshot(args: DeleteDBClusterSnapshotCommandInput, options?: __HttpHandlerOptions): Promise<DeleteDBClusterSnapshotCommandOutput>;
    deleteDBClusterSnapshot(args: DeleteDBClusterSnapshotCommandInput, cb: (err: any, data?: DeleteDBClusterSnapshotCommandOutput) => void): void;
    deleteDBClusterSnapshot(args: DeleteDBClusterSnapshotCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: DeleteDBClusterSnapshotCommandOutput) => void): void;
    /**
     * <p>Deletes a previously provisioned instance.
     *             </p>
     */
    deleteDBInstance(args: DeleteDBInstanceCommandInput, options?: __HttpHandlerOptions): Promise<DeleteDBInstanceCommandOutput>;
    deleteDBInstance(args: DeleteDBInstanceCommandInput, cb: (err: any, data?: DeleteDBInstanceCommandOutput) => void): void;
    deleteDBInstance(args: DeleteDBInstanceCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: DeleteDBInstanceCommandOutput) => void): void;
    /**
     * <p>Deletes a subnet group.</p>
     *         <note>
     *             <p>The specified database subnet group must not be associated with any DB
     *                 instances.</p>
     *         </note>
     */
    deleteDBSubnetGroup(args: DeleteDBSubnetGroupCommandInput, options?: __HttpHandlerOptions): Promise<DeleteDBSubnetGroupCommandOutput>;
    deleteDBSubnetGroup(args: DeleteDBSubnetGroupCommandInput, cb: (err: any, data?: DeleteDBSubnetGroupCommandOutput) => void): void;
    deleteDBSubnetGroup(args: DeleteDBSubnetGroupCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: DeleteDBSubnetGroupCommandOutput) => void): void;
    /**
     * <p>Returns a list of certificate authority (CA) certificates provided by Amazon DocumentDB for
     *             this AWS account.</p>
     */
    describeCertificates(args: DescribeCertificatesCommandInput, options?: __HttpHandlerOptions): Promise<DescribeCertificatesCommandOutput>;
    describeCertificates(args: DescribeCertificatesCommandInput, cb: (err: any, data?: DescribeCertificatesCommandOutput) => void): void;
    describeCertificates(args: DescribeCertificatesCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: DescribeCertificatesCommandOutput) => void): void;
    /**
     * <p>Returns a list of <code>DBClusterParameterGroup</code> descriptions. If a
     *                 <code>DBClusterParameterGroupName</code> parameter is specified, the list contains
     *             only the description of the specified cluster parameter group. </p>
     */
    describeDBClusterParameterGroups(args: DescribeDBClusterParameterGroupsCommandInput, options?: __HttpHandlerOptions): Promise<DescribeDBClusterParameterGroupsCommandOutput>;
    describeDBClusterParameterGroups(args: DescribeDBClusterParameterGroupsCommandInput, cb: (err: any, data?: DescribeDBClusterParameterGroupsCommandOutput) => void): void;
    describeDBClusterParameterGroups(args: DescribeDBClusterParameterGroupsCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: DescribeDBClusterParameterGroupsCommandOutput) => void): void;
    /**
     * <p>Returns the detailed parameter list for a particular cluster parameter
     *             group.</p>
     */
    describeDBClusterParameters(args: DescribeDBClusterParametersCommandInput, options?: __HttpHandlerOptions): Promise<DescribeDBClusterParametersCommandOutput>;
    describeDBClusterParameters(args: DescribeDBClusterParametersCommandInput, cb: (err: any, data?: DescribeDBClusterParametersCommandOutput) => void): void;
    describeDBClusterParameters(args: DescribeDBClusterParametersCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: DescribeDBClusterParametersCommandOutput) => void): void;
    /**
     * <p>Returns information about provisioned Amazon DocumentDB clusters. This API
     *             operation supports pagination. For certain management features
     *             such as cluster and instance lifecycle management, Amazon DocumentDB leverages
     *             operational technology that is shared with Amazon RDS and Amazon
     *             Neptune. Use the <code>filterName=engine,Values=docdb</code> filter
     *             parameter to return only Amazon DocumentDB clusters.</p>
     */
    describeDBClusters(args: DescribeDBClustersCommandInput, options?: __HttpHandlerOptions): Promise<DescribeDBClustersCommandOutput>;
    describeDBClusters(args: DescribeDBClustersCommandInput, cb: (err: any, data?: DescribeDBClustersCommandOutput) => void): void;
    describeDBClusters(args: DescribeDBClustersCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: DescribeDBClustersCommandOutput) => void): void;
    /**
     * <p>Returns a list of cluster snapshot attribute names and values for a manual DB
     *             cluster snapshot.</p>
     *         <p>When you share snapshots with other AWS accounts,
     *                 <code>DescribeDBClusterSnapshotAttributes</code> returns the <code>restore</code>
     *             attribute and a list of IDs for the AWS accounts that are authorized to copy or restore
     *             the manual cluster snapshot. If <code>all</code> is included in the list of values
     *             for the <code>restore</code> attribute, then the manual cluster snapshot is public
     *             and can be copied or restored by all AWS accounts.</p>
     */
    describeDBClusterSnapshotAttributes(args: DescribeDBClusterSnapshotAttributesCommandInput, options?: __HttpHandlerOptions): Promise<DescribeDBClusterSnapshotAttributesCommandOutput>;
    describeDBClusterSnapshotAttributes(args: DescribeDBClusterSnapshotAttributesCommandInput, cb: (err: any, data?: DescribeDBClusterSnapshotAttributesCommandOutput) => void): void;
    describeDBClusterSnapshotAttributes(args: DescribeDBClusterSnapshotAttributesCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: DescribeDBClusterSnapshotAttributesCommandOutput) => void): void;
    /**
     * <p>Returns information about cluster snapshots. This API operation supports
     *             pagination.</p>
     */
    describeDBClusterSnapshots(args: DescribeDBClusterSnapshotsCommandInput, options?: __HttpHandlerOptions): Promise<DescribeDBClusterSnapshotsCommandOutput>;
    describeDBClusterSnapshots(args: DescribeDBClusterSnapshotsCommandInput, cb: (err: any, data?: DescribeDBClusterSnapshotsCommandOutput) => void): void;
    describeDBClusterSnapshots(args: DescribeDBClusterSnapshotsCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: DescribeDBClusterSnapshotsCommandOutput) => void): void;
    /**
     * <p>Returns a list of the available engines.</p>
     */
    describeDBEngineVersions(args: DescribeDBEngineVersionsCommandInput, options?: __HttpHandlerOptions): Promise<DescribeDBEngineVersionsCommandOutput>;
    describeDBEngineVersions(args: DescribeDBEngineVersionsCommandInput, cb: (err: any, data?: DescribeDBEngineVersionsCommandOutput) => void): void;
    describeDBEngineVersions(args: DescribeDBEngineVersionsCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: DescribeDBEngineVersionsCommandOutput) => void): void;
    /**
     * <p>Returns information about provisioned Amazon DocumentDB instances. This API supports
     *             pagination.</p>
     */
    describeDBInstances(args: DescribeDBInstancesCommandInput, options?: __HttpHandlerOptions): Promise<DescribeDBInstancesCommandOutput>;
    describeDBInstances(args: DescribeDBInstancesCommandInput, cb: (err: any, data?: DescribeDBInstancesCommandOutput) => void): void;
    describeDBInstances(args: DescribeDBInstancesCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: DescribeDBInstancesCommandOutput) => void): void;
    /**
     * <p>Returns a list of <code>DBSubnetGroup</code> descriptions. If a
     *                 <code>DBSubnetGroupName</code> is specified, the list will contain only the
     *             descriptions of the specified <code>DBSubnetGroup</code>.</p>
     */
    describeDBSubnetGroups(args: DescribeDBSubnetGroupsCommandInput, options?: __HttpHandlerOptions): Promise<DescribeDBSubnetGroupsCommandOutput>;
    describeDBSubnetGroups(args: DescribeDBSubnetGroupsCommandInput, cb: (err: any, data?: DescribeDBSubnetGroupsCommandOutput) => void): void;
    describeDBSubnetGroups(args: DescribeDBSubnetGroupsCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: DescribeDBSubnetGroupsCommandOutput) => void): void;
    /**
     * <p>Returns the default engine and system parameter information for the cluster database
     *             engine.</p>
     */
    describeEngineDefaultClusterParameters(args: DescribeEngineDefaultClusterParametersCommandInput, options?: __HttpHandlerOptions): Promise<DescribeEngineDefaultClusterParametersCommandOutput>;
    describeEngineDefaultClusterParameters(args: DescribeEngineDefaultClusterParametersCommandInput, cb: (err: any, data?: DescribeEngineDefaultClusterParametersCommandOutput) => void): void;
    describeEngineDefaultClusterParameters(args: DescribeEngineDefaultClusterParametersCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: DescribeEngineDefaultClusterParametersCommandOutput) => void): void;
    /**
     * <p>Displays a list of categories for all event source types, or, if specified, for a
     *             specified source type. </p>
     */
    describeEventCategories(args: DescribeEventCategoriesCommandInput, options?: __HttpHandlerOptions): Promise<DescribeEventCategoriesCommandOutput>;
    describeEventCategories(args: DescribeEventCategoriesCommandInput, cb: (err: any, data?: DescribeEventCategoriesCommandOutput) => void): void;
    describeEventCategories(args: DescribeEventCategoriesCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: DescribeEventCategoriesCommandOutput) => void): void;
    /**
     * <p>Returns events related to instances, security groups, snapshots, and DB
     *             parameter groups for the past 14 days. You can obtain events specific to a particular DB
     *             instance, security group, snapshot, or parameter group by providing the name as
     *             a parameter. By default, the events of the past hour are returned.</p>
     */
    describeEvents(args: DescribeEventsCommandInput, options?: __HttpHandlerOptions): Promise<DescribeEventsCommandOutput>;
    describeEvents(args: DescribeEventsCommandInput, cb: (err: any, data?: DescribeEventsCommandOutput) => void): void;
    describeEvents(args: DescribeEventsCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: DescribeEventsCommandOutput) => void): void;
    /**
     * <p>Returns a list of orderable instance options for the specified engine.</p>
     */
    describeOrderableDBInstanceOptions(args: DescribeOrderableDBInstanceOptionsCommandInput, options?: __HttpHandlerOptions): Promise<DescribeOrderableDBInstanceOptionsCommandOutput>;
    describeOrderableDBInstanceOptions(args: DescribeOrderableDBInstanceOptionsCommandInput, cb: (err: any, data?: DescribeOrderableDBInstanceOptionsCommandOutput) => void): void;
    describeOrderableDBInstanceOptions(args: DescribeOrderableDBInstanceOptionsCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: DescribeOrderableDBInstanceOptionsCommandOutput) => void): void;
    /**
     * <p>Returns a list of resources (for example, instances) that have at least one pending
     *             maintenance action.</p>
     */
    describePendingMaintenanceActions(args: DescribePendingMaintenanceActionsCommandInput, options?: __HttpHandlerOptions): Promise<DescribePendingMaintenanceActionsCommandOutput>;
    describePendingMaintenanceActions(args: DescribePendingMaintenanceActionsCommandInput, cb: (err: any, data?: DescribePendingMaintenanceActionsCommandOutput) => void): void;
    describePendingMaintenanceActions(args: DescribePendingMaintenanceActionsCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: DescribePendingMaintenanceActionsCommandOutput) => void): void;
    /**
     * <p>Forces a failover for a cluster.</p>
     *         <p>A failover for a cluster promotes one of the Amazon DocumentDB replicas (read-only instances)
     *             in the cluster to be the primary instance (the cluster writer).</p>
     *         <p>If the primary instance fails, Amazon DocumentDB automatically fails over to an Amazon DocumentDB replica,
     *             if one exists. You can force a failover when you want to simulate a failure of a primary
     *             instance for
     *             testing.</p>
     */
    failoverDBCluster(args: FailoverDBClusterCommandInput, options?: __HttpHandlerOptions): Promise<FailoverDBClusterCommandOutput>;
    failoverDBCluster(args: FailoverDBClusterCommandInput, cb: (err: any, data?: FailoverDBClusterCommandOutput) => void): void;
    failoverDBCluster(args: FailoverDBClusterCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: FailoverDBClusterCommandOutput) => void): void;
    /**
     * <p>Lists all tags on an Amazon DocumentDB resource.</p>
     */
    listTagsForResource(args: ListTagsForResourceCommandInput, options?: __HttpHandlerOptions): Promise<ListTagsForResourceCommandOutput>;
    listTagsForResource(args: ListTagsForResourceCommandInput, cb: (err: any, data?: ListTagsForResourceCommandOutput) => void): void;
    listTagsForResource(args: ListTagsForResourceCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: ListTagsForResourceCommandOutput) => void): void;
    /**
     * <p>Modifies a setting for an Amazon DocumentDB cluster. You can change one or more database
     *             configuration parameters by specifying these parameters and the new values in the
     *             request. </p>
     */
    modifyDBCluster(args: ModifyDBClusterCommandInput, options?: __HttpHandlerOptions): Promise<ModifyDBClusterCommandOutput>;
    modifyDBCluster(args: ModifyDBClusterCommandInput, cb: (err: any, data?: ModifyDBClusterCommandOutput) => void): void;
    modifyDBCluster(args: ModifyDBClusterCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: ModifyDBClusterCommandOutput) => void): void;
    /**
     * <p> Modifies the parameters of a cluster parameter group. To modify more than one
     *             parameter, submit a list of the following: <code>ParameterName</code>,
     *                 <code>ParameterValue</code>, and <code>ApplyMethod</code>. A maximum of 20
     *             parameters can be modified in a single request. </p>
     *         <note>
     *             <p>Changes to dynamic parameters are applied immediately. Changes to static
     *                 parameters require a reboot or maintenance window
     *
     *                 before the change can take effect.</p>
     *         </note>
     *         <important>
     *             <p>After you create a cluster parameter group, you should wait at least 5 minutes
     *                 before creating your first cluster that uses that cluster parameter group as
     *                 the default parameter group. This allows Amazon DocumentDB to fully complete the create action
     *                 before the parameter group is used as the default for a new cluster. This step is
     *                 especially important for parameters that are critical when creating the default
     *                 database for a cluster, such as the character set for the default database
     *                 defined by the <code>character_set_database</code> parameter.</p>
     *         </important>
     */
    modifyDBClusterParameterGroup(args: ModifyDBClusterParameterGroupCommandInput, options?: __HttpHandlerOptions): Promise<ModifyDBClusterParameterGroupCommandOutput>;
    modifyDBClusterParameterGroup(args: ModifyDBClusterParameterGroupCommandInput, cb: (err: any, data?: ModifyDBClusterParameterGroupCommandOutput) => void): void;
    modifyDBClusterParameterGroup(args: ModifyDBClusterParameterGroupCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: ModifyDBClusterParameterGroupCommandOutput) => void): void;
    /**
     * <p>Adds an attribute and values to, or removes an attribute and values from, a manual DB
     *             cluster snapshot.</p>
     *         <p>To share a manual cluster snapshot with other AWS accounts, specify
     *                 <code>restore</code> as the <code>AttributeName</code>, and use the
     *                 <code>ValuesToAdd</code> parameter to add a list of IDs of the AWS accounts that are
     *             authorized to restore the manual cluster snapshot. Use the value <code>all</code> to
     *             make the manual cluster snapshot public, which means that it can be copied or
     *             restored by all AWS accounts. Do not add the <code>all</code> value for any manual DB
     *             cluster snapshots that contain private information that you don't want available to all
     *             AWS accounts. If a manual cluster snapshot is encrypted, it can be shared, but only
     *             by specifying a list of authorized AWS account IDs for the <code>ValuesToAdd</code>
     *             parameter. You can't use <code>all</code> as a value for that parameter in this
     *             case.</p>
     */
    modifyDBClusterSnapshotAttribute(args: ModifyDBClusterSnapshotAttributeCommandInput, options?: __HttpHandlerOptions): Promise<ModifyDBClusterSnapshotAttributeCommandOutput>;
    modifyDBClusterSnapshotAttribute(args: ModifyDBClusterSnapshotAttributeCommandInput, cb: (err: any, data?: ModifyDBClusterSnapshotAttributeCommandOutput) => void): void;
    modifyDBClusterSnapshotAttribute(args: ModifyDBClusterSnapshotAttributeCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: ModifyDBClusterSnapshotAttributeCommandOutput) => void): void;
    /**
     * <p>Modifies settings for an instance. You can change one or more database configuration
     *             parameters by specifying these parameters and the new values in the request.</p>
     */
    modifyDBInstance(args: ModifyDBInstanceCommandInput, options?: __HttpHandlerOptions): Promise<ModifyDBInstanceCommandOutput>;
    modifyDBInstance(args: ModifyDBInstanceCommandInput, cb: (err: any, data?: ModifyDBInstanceCommandOutput) => void): void;
    modifyDBInstance(args: ModifyDBInstanceCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: ModifyDBInstanceCommandOutput) => void): void;
    /**
     * <p>Modifies an existing subnet group. subnet groups must contain at least one
     *             subnet in at least two Availability Zones in the AWS Region.</p>
     */
    modifyDBSubnetGroup(args: ModifyDBSubnetGroupCommandInput, options?: __HttpHandlerOptions): Promise<ModifyDBSubnetGroupCommandOutput>;
    modifyDBSubnetGroup(args: ModifyDBSubnetGroupCommandInput, cb: (err: any, data?: ModifyDBSubnetGroupCommandOutput) => void): void;
    modifyDBSubnetGroup(args: ModifyDBSubnetGroupCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: ModifyDBSubnetGroupCommandOutput) => void): void;
    /**
     * <p>You might need to reboot your instance, usually for maintenance reasons. For
     *             example, if you make certain changes, or if you change the cluster parameter group
     *             that is associated with the instance, you must reboot the instance for the changes to
     *             take effect. </p>
     *         <p>Rebooting an instance restarts the database engine service. Rebooting an instance
     *             results in a momentary outage, during which the instance status is set to
     *                 <i>rebooting</i>. </p>
     */
    rebootDBInstance(args: RebootDBInstanceCommandInput, options?: __HttpHandlerOptions): Promise<RebootDBInstanceCommandOutput>;
    rebootDBInstance(args: RebootDBInstanceCommandInput, cb: (err: any, data?: RebootDBInstanceCommandOutput) => void): void;
    rebootDBInstance(args: RebootDBInstanceCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: RebootDBInstanceCommandOutput) => void): void;
    /**
     * <p>Removes metadata tags from an Amazon DocumentDB resource.</p>
     */
    removeTagsFromResource(args: RemoveTagsFromResourceCommandInput, options?: __HttpHandlerOptions): Promise<RemoveTagsFromResourceCommandOutput>;
    removeTagsFromResource(args: RemoveTagsFromResourceCommandInput, cb: (err: any, data?: RemoveTagsFromResourceCommandOutput) => void): void;
    removeTagsFromResource(args: RemoveTagsFromResourceCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: RemoveTagsFromResourceCommandOutput) => void): void;
    /**
     * <p> Modifies the parameters of a cluster parameter group to the default value. To
     *             reset specific parameters, submit a list of the following: <code>ParameterName</code>
     *             and <code>ApplyMethod</code>. To reset the entire cluster parameter group, specify
     *             the <code>DBClusterParameterGroupName</code> and <code>ResetAllParameters</code>
     *             parameters. </p>
     *         <p> When you reset the entire group, dynamic parameters are updated immediately and
     *             static parameters are set to <code>pending-reboot</code> to take effect on the next DB
     *             instance reboot.</p>
     */
    resetDBClusterParameterGroup(args: ResetDBClusterParameterGroupCommandInput, options?: __HttpHandlerOptions): Promise<ResetDBClusterParameterGroupCommandOutput>;
    resetDBClusterParameterGroup(args: ResetDBClusterParameterGroupCommandInput, cb: (err: any, data?: ResetDBClusterParameterGroupCommandOutput) => void): void;
    resetDBClusterParameterGroup(args: ResetDBClusterParameterGroupCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: ResetDBClusterParameterGroupCommandOutput) => void): void;
    /**
     * <p>Creates a new cluster from a snapshot or cluster snapshot.</p>
     *         <p>If a snapshot is specified, the target cluster is created from the source DB
     *             snapshot with a default configuration and default security group.</p>
     *         <p>If a cluster snapshot is specified, the target cluster is created from the
     *             source cluster restore point with the same configuration as the original source DB
     *             cluster, except that the new cluster is created with the default security
     *             group.</p>
     */
    restoreDBClusterFromSnapshot(args: RestoreDBClusterFromSnapshotCommandInput, options?: __HttpHandlerOptions): Promise<RestoreDBClusterFromSnapshotCommandOutput>;
    restoreDBClusterFromSnapshot(args: RestoreDBClusterFromSnapshotCommandInput, cb: (err: any, data?: RestoreDBClusterFromSnapshotCommandOutput) => void): void;
    restoreDBClusterFromSnapshot(args: RestoreDBClusterFromSnapshotCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: RestoreDBClusterFromSnapshotCommandOutput) => void): void;
    /**
     * <p>Restores a cluster to an arbitrary point in time. Users can restore to any point in
     *             time before <code>LatestRestorableTime</code> for up to
     *                 <code>BackupRetentionPeriod</code> days. The target cluster is created from the
     *             source cluster with the same configuration as the original cluster, except that
     *             the new cluster is created with the default security group. </p>
     */
    restoreDBClusterToPointInTime(args: RestoreDBClusterToPointInTimeCommandInput, options?: __HttpHandlerOptions): Promise<RestoreDBClusterToPointInTimeCommandOutput>;
    restoreDBClusterToPointInTime(args: RestoreDBClusterToPointInTimeCommandInput, cb: (err: any, data?: RestoreDBClusterToPointInTimeCommandOutput) => void): void;
    restoreDBClusterToPointInTime(args: RestoreDBClusterToPointInTimeCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: RestoreDBClusterToPointInTimeCommandOutput) => void): void;
    /**
     * <p>Restarts the stopped cluster that is specified by <code>DBClusterIdentifier</code>.
     *             For more information, see <a href="https://docs.aws.amazon.com/documentdb/latest/developerguide/db-cluster-stop-start.html">Stopping and
     *                 Starting an Amazon DocumentDB Cluster</a>.</p>
     */
    startDBCluster(args: StartDBClusterCommandInput, options?: __HttpHandlerOptions): Promise<StartDBClusterCommandOutput>;
    startDBCluster(args: StartDBClusterCommandInput, cb: (err: any, data?: StartDBClusterCommandOutput) => void): void;
    startDBCluster(args: StartDBClusterCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: StartDBClusterCommandOutput) => void): void;
    /**
     * <p>Stops the running cluster that is specified by <code>DBClusterIdentifier</code>. The
     *             cluster must be in the <i>available</i> state. For more information, see
     *                 <a href="https://docs.aws.amazon.com/documentdb/latest/developerguide/db-cluster-stop-start.html">Stopping and
     *                 Starting an Amazon DocumentDB Cluster</a>.</p>
     */
    stopDBCluster(args: StopDBClusterCommandInput, options?: __HttpHandlerOptions): Promise<StopDBClusterCommandOutput>;
    stopDBCluster(args: StopDBClusterCommandInput, cb: (err: any, data?: StopDBClusterCommandOutput) => void): void;
    stopDBCluster(args: StopDBClusterCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: StopDBClusterCommandOutput) => void): void;
}
