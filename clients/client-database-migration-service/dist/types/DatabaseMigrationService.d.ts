import { DatabaseMigrationServiceClient } from "./DatabaseMigrationServiceClient";
import { AddTagsToResourceCommandInput, AddTagsToResourceCommandOutput } from "./commands/AddTagsToResourceCommand";
import { ApplyPendingMaintenanceActionCommandInput, ApplyPendingMaintenanceActionCommandOutput } from "./commands/ApplyPendingMaintenanceActionCommand";
import { CancelReplicationTaskAssessmentRunCommandInput, CancelReplicationTaskAssessmentRunCommandOutput } from "./commands/CancelReplicationTaskAssessmentRunCommand";
import { CreateEndpointCommandInput, CreateEndpointCommandOutput } from "./commands/CreateEndpointCommand";
import { CreateEventSubscriptionCommandInput, CreateEventSubscriptionCommandOutput } from "./commands/CreateEventSubscriptionCommand";
import { CreateReplicationInstanceCommandInput, CreateReplicationInstanceCommandOutput } from "./commands/CreateReplicationInstanceCommand";
import { CreateReplicationSubnetGroupCommandInput, CreateReplicationSubnetGroupCommandOutput } from "./commands/CreateReplicationSubnetGroupCommand";
import { CreateReplicationTaskCommandInput, CreateReplicationTaskCommandOutput } from "./commands/CreateReplicationTaskCommand";
import { DeleteCertificateCommandInput, DeleteCertificateCommandOutput } from "./commands/DeleteCertificateCommand";
import { DeleteConnectionCommandInput, DeleteConnectionCommandOutput } from "./commands/DeleteConnectionCommand";
import { DeleteEndpointCommandInput, DeleteEndpointCommandOutput } from "./commands/DeleteEndpointCommand";
import { DeleteEventSubscriptionCommandInput, DeleteEventSubscriptionCommandOutput } from "./commands/DeleteEventSubscriptionCommand";
import { DeleteReplicationInstanceCommandInput, DeleteReplicationInstanceCommandOutput } from "./commands/DeleteReplicationInstanceCommand";
import { DeleteReplicationSubnetGroupCommandInput, DeleteReplicationSubnetGroupCommandOutput } from "./commands/DeleteReplicationSubnetGroupCommand";
import { DeleteReplicationTaskAssessmentRunCommandInput, DeleteReplicationTaskAssessmentRunCommandOutput } from "./commands/DeleteReplicationTaskAssessmentRunCommand";
import { DeleteReplicationTaskCommandInput, DeleteReplicationTaskCommandOutput } from "./commands/DeleteReplicationTaskCommand";
import { DescribeAccountAttributesCommandInput, DescribeAccountAttributesCommandOutput } from "./commands/DescribeAccountAttributesCommand";
import { DescribeApplicableIndividualAssessmentsCommandInput, DescribeApplicableIndividualAssessmentsCommandOutput } from "./commands/DescribeApplicableIndividualAssessmentsCommand";
import { DescribeCertificatesCommandInput, DescribeCertificatesCommandOutput } from "./commands/DescribeCertificatesCommand";
import { DescribeConnectionsCommandInput, DescribeConnectionsCommandOutput } from "./commands/DescribeConnectionsCommand";
import { DescribeEndpointSettingsCommandInput, DescribeEndpointSettingsCommandOutput } from "./commands/DescribeEndpointSettingsCommand";
import { DescribeEndpointTypesCommandInput, DescribeEndpointTypesCommandOutput } from "./commands/DescribeEndpointTypesCommand";
import { DescribeEndpointsCommandInput, DescribeEndpointsCommandOutput } from "./commands/DescribeEndpointsCommand";
import { DescribeEventCategoriesCommandInput, DescribeEventCategoriesCommandOutput } from "./commands/DescribeEventCategoriesCommand";
import { DescribeEventSubscriptionsCommandInput, DescribeEventSubscriptionsCommandOutput } from "./commands/DescribeEventSubscriptionsCommand";
import { DescribeEventsCommandInput, DescribeEventsCommandOutput } from "./commands/DescribeEventsCommand";
import { DescribeOrderableReplicationInstancesCommandInput, DescribeOrderableReplicationInstancesCommandOutput } from "./commands/DescribeOrderableReplicationInstancesCommand";
import { DescribePendingMaintenanceActionsCommandInput, DescribePendingMaintenanceActionsCommandOutput } from "./commands/DescribePendingMaintenanceActionsCommand";
import { DescribeRefreshSchemasStatusCommandInput, DescribeRefreshSchemasStatusCommandOutput } from "./commands/DescribeRefreshSchemasStatusCommand";
import { DescribeReplicationInstanceTaskLogsCommandInput, DescribeReplicationInstanceTaskLogsCommandOutput } from "./commands/DescribeReplicationInstanceTaskLogsCommand";
import { DescribeReplicationInstancesCommandInput, DescribeReplicationInstancesCommandOutput } from "./commands/DescribeReplicationInstancesCommand";
import { DescribeReplicationSubnetGroupsCommandInput, DescribeReplicationSubnetGroupsCommandOutput } from "./commands/DescribeReplicationSubnetGroupsCommand";
import { DescribeReplicationTaskAssessmentResultsCommandInput, DescribeReplicationTaskAssessmentResultsCommandOutput } from "./commands/DescribeReplicationTaskAssessmentResultsCommand";
import { DescribeReplicationTaskAssessmentRunsCommandInput, DescribeReplicationTaskAssessmentRunsCommandOutput } from "./commands/DescribeReplicationTaskAssessmentRunsCommand";
import { DescribeReplicationTaskIndividualAssessmentsCommandInput, DescribeReplicationTaskIndividualAssessmentsCommandOutput } from "./commands/DescribeReplicationTaskIndividualAssessmentsCommand";
import { DescribeReplicationTasksCommandInput, DescribeReplicationTasksCommandOutput } from "./commands/DescribeReplicationTasksCommand";
import { DescribeSchemasCommandInput, DescribeSchemasCommandOutput } from "./commands/DescribeSchemasCommand";
import { DescribeTableStatisticsCommandInput, DescribeTableStatisticsCommandOutput } from "./commands/DescribeTableStatisticsCommand";
import { ImportCertificateCommandInput, ImportCertificateCommandOutput } from "./commands/ImportCertificateCommand";
import { ListTagsForResourceCommandInput, ListTagsForResourceCommandOutput } from "./commands/ListTagsForResourceCommand";
import { ModifyEndpointCommandInput, ModifyEndpointCommandOutput } from "./commands/ModifyEndpointCommand";
import { ModifyEventSubscriptionCommandInput, ModifyEventSubscriptionCommandOutput } from "./commands/ModifyEventSubscriptionCommand";
import { ModifyReplicationInstanceCommandInput, ModifyReplicationInstanceCommandOutput } from "./commands/ModifyReplicationInstanceCommand";
import { ModifyReplicationSubnetGroupCommandInput, ModifyReplicationSubnetGroupCommandOutput } from "./commands/ModifyReplicationSubnetGroupCommand";
import { ModifyReplicationTaskCommandInput, ModifyReplicationTaskCommandOutput } from "./commands/ModifyReplicationTaskCommand";
import { MoveReplicationTaskCommandInput, MoveReplicationTaskCommandOutput } from "./commands/MoveReplicationTaskCommand";
import { RebootReplicationInstanceCommandInput, RebootReplicationInstanceCommandOutput } from "./commands/RebootReplicationInstanceCommand";
import { RefreshSchemasCommandInput, RefreshSchemasCommandOutput } from "./commands/RefreshSchemasCommand";
import { ReloadTablesCommandInput, ReloadTablesCommandOutput } from "./commands/ReloadTablesCommand";
import { RemoveTagsFromResourceCommandInput, RemoveTagsFromResourceCommandOutput } from "./commands/RemoveTagsFromResourceCommand";
import { StartReplicationTaskAssessmentCommandInput, StartReplicationTaskAssessmentCommandOutput } from "./commands/StartReplicationTaskAssessmentCommand";
import { StartReplicationTaskAssessmentRunCommandInput, StartReplicationTaskAssessmentRunCommandOutput } from "./commands/StartReplicationTaskAssessmentRunCommand";
import { StartReplicationTaskCommandInput, StartReplicationTaskCommandOutput } from "./commands/StartReplicationTaskCommand";
import { StopReplicationTaskCommandInput, StopReplicationTaskCommandOutput } from "./commands/StopReplicationTaskCommand";
import { TestConnectionCommandInput, TestConnectionCommandOutput } from "./commands/TestConnectionCommand";
import { HttpHandlerOptions as __HttpHandlerOptions } from "@aws-sdk/types";
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
export declare class DatabaseMigrationService extends DatabaseMigrationServiceClient {
    /**
     * <p>Adds metadata tags to an AWS DMS resource, including replication instance, endpoint,
     *          security group, and migration task. These tags can also be used with cost allocation
     *          reporting to track cost associated with DMS resources, or used in a Condition statement in
     *          an IAM policy for DMS. For more information, see <a href="https://docs.aws.amazon.com/dms/latest/APIReference/API_Tag.html">
     *                <code>Tag</code>
     *             </a> data type description.</p>
     */
    addTagsToResource(args: AddTagsToResourceCommandInput, options?: __HttpHandlerOptions): Promise<AddTagsToResourceCommandOutput>;
    addTagsToResource(args: AddTagsToResourceCommandInput, cb: (err: any, data?: AddTagsToResourceCommandOutput) => void): void;
    addTagsToResource(args: AddTagsToResourceCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: AddTagsToResourceCommandOutput) => void): void;
    /**
     * <p>Applies a pending maintenance action to a resource (for example, to a replication instance).</p>
     */
    applyPendingMaintenanceAction(args: ApplyPendingMaintenanceActionCommandInput, options?: __HttpHandlerOptions): Promise<ApplyPendingMaintenanceActionCommandOutput>;
    applyPendingMaintenanceAction(args: ApplyPendingMaintenanceActionCommandInput, cb: (err: any, data?: ApplyPendingMaintenanceActionCommandOutput) => void): void;
    applyPendingMaintenanceAction(args: ApplyPendingMaintenanceActionCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: ApplyPendingMaintenanceActionCommandOutput) => void): void;
    /**
     * <p>Cancels a single premigration assessment run.</p>
     *          <p>This operation prevents any individual assessments from running if they haven't started
     *          running. It also attempts to cancel any individual assessments that are currently
     *          running.</p>
     */
    cancelReplicationTaskAssessmentRun(args: CancelReplicationTaskAssessmentRunCommandInput, options?: __HttpHandlerOptions): Promise<CancelReplicationTaskAssessmentRunCommandOutput>;
    cancelReplicationTaskAssessmentRun(args: CancelReplicationTaskAssessmentRunCommandInput, cb: (err: any, data?: CancelReplicationTaskAssessmentRunCommandOutput) => void): void;
    cancelReplicationTaskAssessmentRun(args: CancelReplicationTaskAssessmentRunCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: CancelReplicationTaskAssessmentRunCommandOutput) => void): void;
    /**
     * <p>Creates an endpoint using the provided settings.</p>
     */
    createEndpoint(args: CreateEndpointCommandInput, options?: __HttpHandlerOptions): Promise<CreateEndpointCommandOutput>;
    createEndpoint(args: CreateEndpointCommandInput, cb: (err: any, data?: CreateEndpointCommandOutput) => void): void;
    createEndpoint(args: CreateEndpointCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: CreateEndpointCommandOutput) => void): void;
    /**
     * <p> Creates an AWS DMS event notification subscription. </p>
     *          <p>You can specify the type of source (<code>SourceType</code>) you want to be notified of,
     *          provide a list of AWS DMS source IDs (<code>SourceIds</code>) that triggers the events, and
     *          provide a list of event categories (<code>EventCategories</code>) for events you want to be
     *          notified of. If you specify both the <code>SourceType</code> and <code>SourceIds</code>,
     *          such as <code>SourceType = replication-instance</code> and <code>SourceIdentifier =
     *             my-replinstance</code>, you will be notified of all the replication instance events for
     *          the specified source. If you specify a <code>SourceType</code> but don't specify a
     *             <code>SourceIdentifier</code>, you receive notice of the events for that source type for
     *          all your AWS DMS sources. If you don't specify either <code>SourceType</code> nor
     *             <code>SourceIdentifier</code>, you will be notified of events generated from all AWS DMS
     *          sources belonging to your customer account.</p>
     *          <p>For more information about AWS DMS events, see <a href="https://docs.aws.amazon.com/dms/latest/userguide/CHAP_Events.html">Working with Events and
     *             Notifications</a> in the <i>AWS Database Migration Service User
     *             Guide.</i>
     *          </p>
     */
    createEventSubscription(args: CreateEventSubscriptionCommandInput, options?: __HttpHandlerOptions): Promise<CreateEventSubscriptionCommandOutput>;
    createEventSubscription(args: CreateEventSubscriptionCommandInput, cb: (err: any, data?: CreateEventSubscriptionCommandOutput) => void): void;
    createEventSubscription(args: CreateEventSubscriptionCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: CreateEventSubscriptionCommandOutput) => void): void;
    /**
     * <p>Creates the replication instance using the specified parameters.</p>
     *          <p>AWS DMS requires that your account have certain roles with appropriate permissions
     *          before you can create a replication instance. For information on the required roles, see
     *       <a href="https://docs.aws.amazon.com/dms/latest/userguide/CHAP_Security.html#CHAP_Security.APIRole">Creating the IAM Roles to Use With the AWS CLI and AWS DMS API</a>. For
     *          information on the required permissions, see
     *       <a href="https://docs.aws.amazon.com/dms/latest/userguide/CHAP_Security.html#CHAP_Security.IAMPermissions">IAM Permissions Needed to Use AWS DMS</a>.</p>
     */
    createReplicationInstance(args: CreateReplicationInstanceCommandInput, options?: __HttpHandlerOptions): Promise<CreateReplicationInstanceCommandOutput>;
    createReplicationInstance(args: CreateReplicationInstanceCommandInput, cb: (err: any, data?: CreateReplicationInstanceCommandOutput) => void): void;
    createReplicationInstance(args: CreateReplicationInstanceCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: CreateReplicationInstanceCommandOutput) => void): void;
    /**
     * <p>Creates a replication subnet group given a list of the subnet IDs in a VPC.</p>
     */
    createReplicationSubnetGroup(args: CreateReplicationSubnetGroupCommandInput, options?: __HttpHandlerOptions): Promise<CreateReplicationSubnetGroupCommandOutput>;
    createReplicationSubnetGroup(args: CreateReplicationSubnetGroupCommandInput, cb: (err: any, data?: CreateReplicationSubnetGroupCommandOutput) => void): void;
    createReplicationSubnetGroup(args: CreateReplicationSubnetGroupCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: CreateReplicationSubnetGroupCommandOutput) => void): void;
    /**
     * <p>Creates a replication task using the specified parameters.</p>
     */
    createReplicationTask(args: CreateReplicationTaskCommandInput, options?: __HttpHandlerOptions): Promise<CreateReplicationTaskCommandOutput>;
    createReplicationTask(args: CreateReplicationTaskCommandInput, cb: (err: any, data?: CreateReplicationTaskCommandOutput) => void): void;
    createReplicationTask(args: CreateReplicationTaskCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: CreateReplicationTaskCommandOutput) => void): void;
    /**
     * <p>Deletes the specified certificate. </p>
     */
    deleteCertificate(args: DeleteCertificateCommandInput, options?: __HttpHandlerOptions): Promise<DeleteCertificateCommandOutput>;
    deleteCertificate(args: DeleteCertificateCommandInput, cb: (err: any, data?: DeleteCertificateCommandOutput) => void): void;
    deleteCertificate(args: DeleteCertificateCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: DeleteCertificateCommandOutput) => void): void;
    /**
     * <p>Deletes the connection between a replication instance and an endpoint.</p>
     */
    deleteConnection(args: DeleteConnectionCommandInput, options?: __HttpHandlerOptions): Promise<DeleteConnectionCommandOutput>;
    deleteConnection(args: DeleteConnectionCommandInput, cb: (err: any, data?: DeleteConnectionCommandOutput) => void): void;
    deleteConnection(args: DeleteConnectionCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: DeleteConnectionCommandOutput) => void): void;
    /**
     * <p>Deletes the specified endpoint.</p>
     *          <note>
     *             <p>All tasks associated with the endpoint must be deleted before you can delete the
     *             endpoint.</p>
     *          </note>
     *          <p></p>
     */
    deleteEndpoint(args: DeleteEndpointCommandInput, options?: __HttpHandlerOptions): Promise<DeleteEndpointCommandOutput>;
    deleteEndpoint(args: DeleteEndpointCommandInput, cb: (err: any, data?: DeleteEndpointCommandOutput) => void): void;
    deleteEndpoint(args: DeleteEndpointCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: DeleteEndpointCommandOutput) => void): void;
    /**
     * <p> Deletes an AWS DMS event subscription. </p>
     */
    deleteEventSubscription(args: DeleteEventSubscriptionCommandInput, options?: __HttpHandlerOptions): Promise<DeleteEventSubscriptionCommandOutput>;
    deleteEventSubscription(args: DeleteEventSubscriptionCommandInput, cb: (err: any, data?: DeleteEventSubscriptionCommandOutput) => void): void;
    deleteEventSubscription(args: DeleteEventSubscriptionCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: DeleteEventSubscriptionCommandOutput) => void): void;
    /**
     * <p>Deletes the specified replication instance.</p>
     *          <note>
     *             <p>You must delete any migration tasks that are associated with the replication instance
     *             before you can delete it.</p>
     *          </note>
     *          <p></p>
     */
    deleteReplicationInstance(args: DeleteReplicationInstanceCommandInput, options?: __HttpHandlerOptions): Promise<DeleteReplicationInstanceCommandOutput>;
    deleteReplicationInstance(args: DeleteReplicationInstanceCommandInput, cb: (err: any, data?: DeleteReplicationInstanceCommandOutput) => void): void;
    deleteReplicationInstance(args: DeleteReplicationInstanceCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: DeleteReplicationInstanceCommandOutput) => void): void;
    /**
     * <p>Deletes a subnet group.</p>
     */
    deleteReplicationSubnetGroup(args: DeleteReplicationSubnetGroupCommandInput, options?: __HttpHandlerOptions): Promise<DeleteReplicationSubnetGroupCommandOutput>;
    deleteReplicationSubnetGroup(args: DeleteReplicationSubnetGroupCommandInput, cb: (err: any, data?: DeleteReplicationSubnetGroupCommandOutput) => void): void;
    deleteReplicationSubnetGroup(args: DeleteReplicationSubnetGroupCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: DeleteReplicationSubnetGroupCommandOutput) => void): void;
    /**
     * <p>Deletes the specified replication task.</p>
     */
    deleteReplicationTask(args: DeleteReplicationTaskCommandInput, options?: __HttpHandlerOptions): Promise<DeleteReplicationTaskCommandOutput>;
    deleteReplicationTask(args: DeleteReplicationTaskCommandInput, cb: (err: any, data?: DeleteReplicationTaskCommandOutput) => void): void;
    deleteReplicationTask(args: DeleteReplicationTaskCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: DeleteReplicationTaskCommandOutput) => void): void;
    /**
     * <p>Deletes the record of a single premigration assessment run.</p>
     *          <p>This operation removes all metadata that AWS DMS maintains about this assessment run.
     *          However, the operation leaves untouched all information about this assessment run that is
     *          stored in your Amazon S3 bucket.</p>
     */
    deleteReplicationTaskAssessmentRun(args: DeleteReplicationTaskAssessmentRunCommandInput, options?: __HttpHandlerOptions): Promise<DeleteReplicationTaskAssessmentRunCommandOutput>;
    deleteReplicationTaskAssessmentRun(args: DeleteReplicationTaskAssessmentRunCommandInput, cb: (err: any, data?: DeleteReplicationTaskAssessmentRunCommandOutput) => void): void;
    deleteReplicationTaskAssessmentRun(args: DeleteReplicationTaskAssessmentRunCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: DeleteReplicationTaskAssessmentRunCommandOutput) => void): void;
    /**
     * <p>Lists all of the AWS DMS attributes for a customer account. These attributes include AWS
     *          DMS quotas for the account and a unique account identifier in a particular DMS region. DMS
     *          quotas include a list of resource quotas supported by the account, such as the number of
     *          replication instances allowed. The description for each resource quota, includes the quota
     *          name, current usage toward that quota, and the quota's maximum value. DMS uses the unique
     *          account identifier to name each artifact used by DMS in the given region.</p>
     *          <p>This command does not take any parameters.</p>
     */
    describeAccountAttributes(args: DescribeAccountAttributesCommandInput, options?: __HttpHandlerOptions): Promise<DescribeAccountAttributesCommandOutput>;
    describeAccountAttributes(args: DescribeAccountAttributesCommandInput, cb: (err: any, data?: DescribeAccountAttributesCommandOutput) => void): void;
    describeAccountAttributes(args: DescribeAccountAttributesCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: DescribeAccountAttributesCommandOutput) => void): void;
    /**
     * <p>Provides a list of individual assessments that you can specify for a new premigration
     *          assessment run, given one or more parameters.</p>
     *          <p>If you specify an existing migration task, this operation provides the default individual
     *          assessments you can specify for that task. Otherwise, the specified parameters model elements
     *          of a possible migration task on which to base a premigration assessment run.</p>
     *          <p>To use these migration task modeling parameters, you must specify an existing replication instance,
     *          a source database engine, a target database engine, and a migration type. This combination of
     *          parameters potentially limits the default individual assessments available for an assessment run
     *          created for a corresponding migration task.</p>
     *          <p>If you specify no parameters, this operation provides a list of all possible individual assessments
     *          that you can specify for an assessment run. If you specify any one of the task modeling parameters, you must
     *          specify all of them or the operation cannot provide a list of individual assessments.
     *          The only parameter that you can specify alone is for an existing migration task. The specified task
     *          definition then determines the default list of individual assessments that you can specify in an
     *          assessment run for the task.</p>
     */
    describeApplicableIndividualAssessments(args: DescribeApplicableIndividualAssessmentsCommandInput, options?: __HttpHandlerOptions): Promise<DescribeApplicableIndividualAssessmentsCommandOutput>;
    describeApplicableIndividualAssessments(args: DescribeApplicableIndividualAssessmentsCommandInput, cb: (err: any, data?: DescribeApplicableIndividualAssessmentsCommandOutput) => void): void;
    describeApplicableIndividualAssessments(args: DescribeApplicableIndividualAssessmentsCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: DescribeApplicableIndividualAssessmentsCommandOutput) => void): void;
    /**
     * <p>Provides a description of the certificate.</p>
     */
    describeCertificates(args: DescribeCertificatesCommandInput, options?: __HttpHandlerOptions): Promise<DescribeCertificatesCommandOutput>;
    describeCertificates(args: DescribeCertificatesCommandInput, cb: (err: any, data?: DescribeCertificatesCommandOutput) => void): void;
    describeCertificates(args: DescribeCertificatesCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: DescribeCertificatesCommandOutput) => void): void;
    /**
     * <p>Describes the status of the connections that have been made between the replication
     *          instance and an endpoint. Connections are created when you test an endpoint.</p>
     */
    describeConnections(args: DescribeConnectionsCommandInput, options?: __HttpHandlerOptions): Promise<DescribeConnectionsCommandOutput>;
    describeConnections(args: DescribeConnectionsCommandInput, cb: (err: any, data?: DescribeConnectionsCommandOutput) => void): void;
    describeConnections(args: DescribeConnectionsCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: DescribeConnectionsCommandOutput) => void): void;
    /**
     * <p>Returns information about the endpoints for your account in the current region.</p>
     */
    describeEndpoints(args: DescribeEndpointsCommandInput, options?: __HttpHandlerOptions): Promise<DescribeEndpointsCommandOutput>;
    describeEndpoints(args: DescribeEndpointsCommandInput, cb: (err: any, data?: DescribeEndpointsCommandOutput) => void): void;
    describeEndpoints(args: DescribeEndpointsCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: DescribeEndpointsCommandOutput) => void): void;
    /**
     * <p>Returns information about the possible endpoint settings available
     *          when you create an endpoint for a specific database engine.</p>
     */
    describeEndpointSettings(args: DescribeEndpointSettingsCommandInput, options?: __HttpHandlerOptions): Promise<DescribeEndpointSettingsCommandOutput>;
    describeEndpointSettings(args: DescribeEndpointSettingsCommandInput, cb: (err: any, data?: DescribeEndpointSettingsCommandOutput) => void): void;
    describeEndpointSettings(args: DescribeEndpointSettingsCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: DescribeEndpointSettingsCommandOutput) => void): void;
    /**
     * <p>Returns information about the type of endpoints available.</p>
     */
    describeEndpointTypes(args: DescribeEndpointTypesCommandInput, options?: __HttpHandlerOptions): Promise<DescribeEndpointTypesCommandOutput>;
    describeEndpointTypes(args: DescribeEndpointTypesCommandInput, cb: (err: any, data?: DescribeEndpointTypesCommandOutput) => void): void;
    describeEndpointTypes(args: DescribeEndpointTypesCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: DescribeEndpointTypesCommandOutput) => void): void;
    /**
     * <p>Lists categories for all event source types, or, if specified, for a specified source
     *          type. You can see a list of the event categories and source types in <a href="https://docs.aws.amazon.com/dms/latest/userguide/CHAP_Events.html">Working with Events
     *             and Notifications</a> in the <i>AWS Database Migration Service User
     *             Guide.</i>
     *          </p>
     */
    describeEventCategories(args: DescribeEventCategoriesCommandInput, options?: __HttpHandlerOptions): Promise<DescribeEventCategoriesCommandOutput>;
    describeEventCategories(args: DescribeEventCategoriesCommandInput, cb: (err: any, data?: DescribeEventCategoriesCommandOutput) => void): void;
    describeEventCategories(args: DescribeEventCategoriesCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: DescribeEventCategoriesCommandOutput) => void): void;
    /**
     * <p> Lists events for a given source identifier and source type. You can also specify a
     *          start and end time. For more information on AWS DMS events, see <a href="https://docs.aws.amazon.com/dms/latest/userguide/CHAP_Events.html">Working with Events and
     *             Notifications</a> in the <i>AWS Database Migration User
     *          Guide.</i>
     *          </p>
     */
    describeEvents(args: DescribeEventsCommandInput, options?: __HttpHandlerOptions): Promise<DescribeEventsCommandOutput>;
    describeEvents(args: DescribeEventsCommandInput, cb: (err: any, data?: DescribeEventsCommandOutput) => void): void;
    describeEvents(args: DescribeEventsCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: DescribeEventsCommandOutput) => void): void;
    /**
     * <p>Lists all the event subscriptions for a customer account. The description of a
     *          subscription includes <code>SubscriptionName</code>, <code>SNSTopicARN</code>,
     *             <code>CustomerID</code>, <code>SourceType</code>, <code>SourceID</code>,
     *             <code>CreationTime</code>, and <code>Status</code>. </p>
     *          <p>If you specify <code>SubscriptionName</code>, this action lists the description for that
     *          subscription.</p>
     */
    describeEventSubscriptions(args: DescribeEventSubscriptionsCommandInput, options?: __HttpHandlerOptions): Promise<DescribeEventSubscriptionsCommandOutput>;
    describeEventSubscriptions(args: DescribeEventSubscriptionsCommandInput, cb: (err: any, data?: DescribeEventSubscriptionsCommandOutput) => void): void;
    describeEventSubscriptions(args: DescribeEventSubscriptionsCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: DescribeEventSubscriptionsCommandOutput) => void): void;
    /**
     * <p>Returns information about the replication instance types that can be created in the
     *          specified region.</p>
     */
    describeOrderableReplicationInstances(args: DescribeOrderableReplicationInstancesCommandInput, options?: __HttpHandlerOptions): Promise<DescribeOrderableReplicationInstancesCommandOutput>;
    describeOrderableReplicationInstances(args: DescribeOrderableReplicationInstancesCommandInput, cb: (err: any, data?: DescribeOrderableReplicationInstancesCommandOutput) => void): void;
    describeOrderableReplicationInstances(args: DescribeOrderableReplicationInstancesCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: DescribeOrderableReplicationInstancesCommandOutput) => void): void;
    /**
     * <p>For internal use only</p>
     */
    describePendingMaintenanceActions(args: DescribePendingMaintenanceActionsCommandInput, options?: __HttpHandlerOptions): Promise<DescribePendingMaintenanceActionsCommandOutput>;
    describePendingMaintenanceActions(args: DescribePendingMaintenanceActionsCommandInput, cb: (err: any, data?: DescribePendingMaintenanceActionsCommandOutput) => void): void;
    describePendingMaintenanceActions(args: DescribePendingMaintenanceActionsCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: DescribePendingMaintenanceActionsCommandOutput) => void): void;
    /**
     * <p>Returns the status of the RefreshSchemas operation.</p>
     */
    describeRefreshSchemasStatus(args: DescribeRefreshSchemasStatusCommandInput, options?: __HttpHandlerOptions): Promise<DescribeRefreshSchemasStatusCommandOutput>;
    describeRefreshSchemasStatus(args: DescribeRefreshSchemasStatusCommandInput, cb: (err: any, data?: DescribeRefreshSchemasStatusCommandOutput) => void): void;
    describeRefreshSchemasStatus(args: DescribeRefreshSchemasStatusCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: DescribeRefreshSchemasStatusCommandOutput) => void): void;
    /**
     * <p>Returns information about replication instances for your account in the current
     *          region.</p>
     */
    describeReplicationInstances(args: DescribeReplicationInstancesCommandInput, options?: __HttpHandlerOptions): Promise<DescribeReplicationInstancesCommandOutput>;
    describeReplicationInstances(args: DescribeReplicationInstancesCommandInput, cb: (err: any, data?: DescribeReplicationInstancesCommandOutput) => void): void;
    describeReplicationInstances(args: DescribeReplicationInstancesCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: DescribeReplicationInstancesCommandOutput) => void): void;
    /**
     * <p>Returns information about the task logs for the specified task.</p>
     */
    describeReplicationInstanceTaskLogs(args: DescribeReplicationInstanceTaskLogsCommandInput, options?: __HttpHandlerOptions): Promise<DescribeReplicationInstanceTaskLogsCommandOutput>;
    describeReplicationInstanceTaskLogs(args: DescribeReplicationInstanceTaskLogsCommandInput, cb: (err: any, data?: DescribeReplicationInstanceTaskLogsCommandOutput) => void): void;
    describeReplicationInstanceTaskLogs(args: DescribeReplicationInstanceTaskLogsCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: DescribeReplicationInstanceTaskLogsCommandOutput) => void): void;
    /**
     * <p>Returns information about the replication subnet groups.</p>
     */
    describeReplicationSubnetGroups(args: DescribeReplicationSubnetGroupsCommandInput, options?: __HttpHandlerOptions): Promise<DescribeReplicationSubnetGroupsCommandOutput>;
    describeReplicationSubnetGroups(args: DescribeReplicationSubnetGroupsCommandInput, cb: (err: any, data?: DescribeReplicationSubnetGroupsCommandOutput) => void): void;
    describeReplicationSubnetGroups(args: DescribeReplicationSubnetGroupsCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: DescribeReplicationSubnetGroupsCommandOutput) => void): void;
    /**
     * <p>Returns the task assessment results from Amazon S3. This action always returns the
     *          latest results.</p>
     */
    describeReplicationTaskAssessmentResults(args: DescribeReplicationTaskAssessmentResultsCommandInput, options?: __HttpHandlerOptions): Promise<DescribeReplicationTaskAssessmentResultsCommandOutput>;
    describeReplicationTaskAssessmentResults(args: DescribeReplicationTaskAssessmentResultsCommandInput, cb: (err: any, data?: DescribeReplicationTaskAssessmentResultsCommandOutput) => void): void;
    describeReplicationTaskAssessmentResults(args: DescribeReplicationTaskAssessmentResultsCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: DescribeReplicationTaskAssessmentResultsCommandOutput) => void): void;
    /**
     * <p>Returns a paginated list of premigration assessment runs based on filter
     *          settings.</p>
     *          <p>These filter settings can specify a combination of premigration assessment runs,
     *          migration tasks, replication instances, and assessment run status values.</p>
     *          <note>
     *             <p>This operation doesn't return information about individual assessments. For this
     *             information, see the <code>DescribeReplicationTaskIndividualAssessments</code>
     *             operation. </p>
     *          </note>
     */
    describeReplicationTaskAssessmentRuns(args: DescribeReplicationTaskAssessmentRunsCommandInput, options?: __HttpHandlerOptions): Promise<DescribeReplicationTaskAssessmentRunsCommandOutput>;
    describeReplicationTaskAssessmentRuns(args: DescribeReplicationTaskAssessmentRunsCommandInput, cb: (err: any, data?: DescribeReplicationTaskAssessmentRunsCommandOutput) => void): void;
    describeReplicationTaskAssessmentRuns(args: DescribeReplicationTaskAssessmentRunsCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: DescribeReplicationTaskAssessmentRunsCommandOutput) => void): void;
    /**
     * <p>Returns a paginated list of individual assessments based on filter settings.</p>
     *          <p>These filter settings can specify a combination of premigration assessment runs,
     *          migration tasks, and assessment status values.</p>
     */
    describeReplicationTaskIndividualAssessments(args: DescribeReplicationTaskIndividualAssessmentsCommandInput, options?: __HttpHandlerOptions): Promise<DescribeReplicationTaskIndividualAssessmentsCommandOutput>;
    describeReplicationTaskIndividualAssessments(args: DescribeReplicationTaskIndividualAssessmentsCommandInput, cb: (err: any, data?: DescribeReplicationTaskIndividualAssessmentsCommandOutput) => void): void;
    describeReplicationTaskIndividualAssessments(args: DescribeReplicationTaskIndividualAssessmentsCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: DescribeReplicationTaskIndividualAssessmentsCommandOutput) => void): void;
    /**
     * <p>Returns information about replication tasks for your account in the current
     *          region.</p>
     */
    describeReplicationTasks(args: DescribeReplicationTasksCommandInput, options?: __HttpHandlerOptions): Promise<DescribeReplicationTasksCommandOutput>;
    describeReplicationTasks(args: DescribeReplicationTasksCommandInput, cb: (err: any, data?: DescribeReplicationTasksCommandOutput) => void): void;
    describeReplicationTasks(args: DescribeReplicationTasksCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: DescribeReplicationTasksCommandOutput) => void): void;
    /**
     * <p>Returns information about the schema for the specified endpoint.</p>
     *
     *          <p></p>
     */
    describeSchemas(args: DescribeSchemasCommandInput, options?: __HttpHandlerOptions): Promise<DescribeSchemasCommandOutput>;
    describeSchemas(args: DescribeSchemasCommandInput, cb: (err: any, data?: DescribeSchemasCommandOutput) => void): void;
    describeSchemas(args: DescribeSchemasCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: DescribeSchemasCommandOutput) => void): void;
    /**
     * <p>Returns table statistics on the database migration task, including table name, rows
     *          inserted, rows updated, and rows deleted.</p>
     *          <p>Note that the "last updated" column the DMS console only indicates the time that AWS DMS
     *          last updated the table statistics record for a table. It does not indicate the time of the
     *          last update to the table.</p>
     */
    describeTableStatistics(args: DescribeTableStatisticsCommandInput, options?: __HttpHandlerOptions): Promise<DescribeTableStatisticsCommandOutput>;
    describeTableStatistics(args: DescribeTableStatisticsCommandInput, cb: (err: any, data?: DescribeTableStatisticsCommandOutput) => void): void;
    describeTableStatistics(args: DescribeTableStatisticsCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: DescribeTableStatisticsCommandOutput) => void): void;
    /**
     * <p>Uploads the specified certificate.</p>
     */
    importCertificate(args: ImportCertificateCommandInput, options?: __HttpHandlerOptions): Promise<ImportCertificateCommandOutput>;
    importCertificate(args: ImportCertificateCommandInput, cb: (err: any, data?: ImportCertificateCommandOutput) => void): void;
    importCertificate(args: ImportCertificateCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: ImportCertificateCommandOutput) => void): void;
    /**
     * <p>Lists all metadata tags attached to an AWS DMS resource, including
     *          replication instance, endpoint, security group, and migration task.
     *          For more information, see <a href="https://docs.aws.amazon.com/dms/latest/APIReference/API_Tag.html">
     *                <code>Tag</code>
     *             </a> data type description.</p>
     */
    listTagsForResource(args: ListTagsForResourceCommandInput, options?: __HttpHandlerOptions): Promise<ListTagsForResourceCommandOutput>;
    listTagsForResource(args: ListTagsForResourceCommandInput, cb: (err: any, data?: ListTagsForResourceCommandOutput) => void): void;
    listTagsForResource(args: ListTagsForResourceCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: ListTagsForResourceCommandOutput) => void): void;
    /**
     * <p>Modifies the specified endpoint.</p>
     */
    modifyEndpoint(args: ModifyEndpointCommandInput, options?: __HttpHandlerOptions): Promise<ModifyEndpointCommandOutput>;
    modifyEndpoint(args: ModifyEndpointCommandInput, cb: (err: any, data?: ModifyEndpointCommandOutput) => void): void;
    modifyEndpoint(args: ModifyEndpointCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: ModifyEndpointCommandOutput) => void): void;
    /**
     * <p>Modifies an existing AWS DMS event notification subscription. </p>
     */
    modifyEventSubscription(args: ModifyEventSubscriptionCommandInput, options?: __HttpHandlerOptions): Promise<ModifyEventSubscriptionCommandOutput>;
    modifyEventSubscription(args: ModifyEventSubscriptionCommandInput, cb: (err: any, data?: ModifyEventSubscriptionCommandOutput) => void): void;
    modifyEventSubscription(args: ModifyEventSubscriptionCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: ModifyEventSubscriptionCommandOutput) => void): void;
    /**
     * <p>Modifies the replication instance to apply new settings. You can change one or more
     *          parameters by specifying these parameters and the new values in the request.</p>
     *          <p>Some settings are applied during the maintenance window.</p>
     *
     *          <p></p>
     */
    modifyReplicationInstance(args: ModifyReplicationInstanceCommandInput, options?: __HttpHandlerOptions): Promise<ModifyReplicationInstanceCommandOutput>;
    modifyReplicationInstance(args: ModifyReplicationInstanceCommandInput, cb: (err: any, data?: ModifyReplicationInstanceCommandOutput) => void): void;
    modifyReplicationInstance(args: ModifyReplicationInstanceCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: ModifyReplicationInstanceCommandOutput) => void): void;
    /**
     * <p>Modifies the settings for the specified replication subnet group.</p>
     */
    modifyReplicationSubnetGroup(args: ModifyReplicationSubnetGroupCommandInput, options?: __HttpHandlerOptions): Promise<ModifyReplicationSubnetGroupCommandOutput>;
    modifyReplicationSubnetGroup(args: ModifyReplicationSubnetGroupCommandInput, cb: (err: any, data?: ModifyReplicationSubnetGroupCommandOutput) => void): void;
    modifyReplicationSubnetGroup(args: ModifyReplicationSubnetGroupCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: ModifyReplicationSubnetGroupCommandOutput) => void): void;
    /**
     * <p>Modifies the specified replication task.</p>
     *          <p>You can't modify the task endpoints. The task must be stopped before you can modify it. </p>
     *          <p>For more information about AWS DMS tasks, see <a href="https://docs.aws.amazon.com/dms/latest/userguide/CHAP_Tasks.html">Working with Migration Tasks</a> in the
     *             <i>AWS Database Migration Service User Guide</i>.</p>
     */
    modifyReplicationTask(args: ModifyReplicationTaskCommandInput, options?: __HttpHandlerOptions): Promise<ModifyReplicationTaskCommandOutput>;
    modifyReplicationTask(args: ModifyReplicationTaskCommandInput, cb: (err: any, data?: ModifyReplicationTaskCommandOutput) => void): void;
    modifyReplicationTask(args: ModifyReplicationTaskCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: ModifyReplicationTaskCommandOutput) => void): void;
    /**
     * <p>Moves a replication task from its current replication instance to a different target
     *          replication instance using the specified parameters. The target replication instance must
     *          be created with the same or later AWS DMS version as the current replication
     *          instance.</p>
     */
    moveReplicationTask(args: MoveReplicationTaskCommandInput, options?: __HttpHandlerOptions): Promise<MoveReplicationTaskCommandOutput>;
    moveReplicationTask(args: MoveReplicationTaskCommandInput, cb: (err: any, data?: MoveReplicationTaskCommandOutput) => void): void;
    moveReplicationTask(args: MoveReplicationTaskCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: MoveReplicationTaskCommandOutput) => void): void;
    /**
     * <p>Reboots a replication instance. Rebooting results in a momentary outage, until the
     *          replication instance becomes available again.</p>
     */
    rebootReplicationInstance(args: RebootReplicationInstanceCommandInput, options?: __HttpHandlerOptions): Promise<RebootReplicationInstanceCommandOutput>;
    rebootReplicationInstance(args: RebootReplicationInstanceCommandInput, cb: (err: any, data?: RebootReplicationInstanceCommandOutput) => void): void;
    rebootReplicationInstance(args: RebootReplicationInstanceCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: RebootReplicationInstanceCommandOutput) => void): void;
    /**
     * <p>Populates the schema for the specified endpoint. This is an asynchronous operation and
     *          can take several minutes. You can check the status of this operation by calling the
     *          DescribeRefreshSchemasStatus operation.</p>
     */
    refreshSchemas(args: RefreshSchemasCommandInput, options?: __HttpHandlerOptions): Promise<RefreshSchemasCommandOutput>;
    refreshSchemas(args: RefreshSchemasCommandInput, cb: (err: any, data?: RefreshSchemasCommandOutput) => void): void;
    refreshSchemas(args: RefreshSchemasCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: RefreshSchemasCommandOutput) => void): void;
    /**
     * <p>Reloads the target database table with the source data. </p>
     */
    reloadTables(args: ReloadTablesCommandInput, options?: __HttpHandlerOptions): Promise<ReloadTablesCommandOutput>;
    reloadTables(args: ReloadTablesCommandInput, cb: (err: any, data?: ReloadTablesCommandOutput) => void): void;
    reloadTables(args: ReloadTablesCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: ReloadTablesCommandOutput) => void): void;
    /**
     * <p>Removes metadata tags from an AWS DMS resource, including replication instance,
     *          endpoint, security group, and migration task. For more information, see
     *          <a href="https://docs.aws.amazon.com/dms/latest/APIReference/API_Tag.html">
     *                <code>Tag</code>
     *             </a>
     *          data type description.</p>
     */
    removeTagsFromResource(args: RemoveTagsFromResourceCommandInput, options?: __HttpHandlerOptions): Promise<RemoveTagsFromResourceCommandOutput>;
    removeTagsFromResource(args: RemoveTagsFromResourceCommandInput, cb: (err: any, data?: RemoveTagsFromResourceCommandOutput) => void): void;
    removeTagsFromResource(args: RemoveTagsFromResourceCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: RemoveTagsFromResourceCommandOutput) => void): void;
    /**
     * <p>Starts the replication task.</p>
     *          <p>For more information about AWS DMS tasks, see <a href="https://docs.aws.amazon.com/dms/latest/userguide/CHAP_Tasks.html">Working with Migration Tasks </a> in the
     *             <i>AWS Database Migration Service User Guide.</i>
     *          </p>
     */
    startReplicationTask(args: StartReplicationTaskCommandInput, options?: __HttpHandlerOptions): Promise<StartReplicationTaskCommandOutput>;
    startReplicationTask(args: StartReplicationTaskCommandInput, cb: (err: any, data?: StartReplicationTaskCommandOutput) => void): void;
    startReplicationTask(args: StartReplicationTaskCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: StartReplicationTaskCommandOutput) => void): void;
    /**
     * <p> Starts the replication task assessment for unsupported data types in the source
     *          database. </p>
     */
    startReplicationTaskAssessment(args: StartReplicationTaskAssessmentCommandInput, options?: __HttpHandlerOptions): Promise<StartReplicationTaskAssessmentCommandOutput>;
    startReplicationTaskAssessment(args: StartReplicationTaskAssessmentCommandInput, cb: (err: any, data?: StartReplicationTaskAssessmentCommandOutput) => void): void;
    startReplicationTaskAssessment(args: StartReplicationTaskAssessmentCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: StartReplicationTaskAssessmentCommandOutput) => void): void;
    /**
     * <p>Starts a new premigration assessment run for one or more individual assessments
     *          of a migration task.</p>
     *          <p>The assessments that you can specify depend on the source and target database engine and
     *          the migration type defined for the given task. To run this operation, your migration task
     *          must already be created. After you run this operation, you can review the status of each
     *          individual assessment. You can also run the migration task manually after the assessment
     *          run and its individual assessments complete.</p>
     */
    startReplicationTaskAssessmentRun(args: StartReplicationTaskAssessmentRunCommandInput, options?: __HttpHandlerOptions): Promise<StartReplicationTaskAssessmentRunCommandOutput>;
    startReplicationTaskAssessmentRun(args: StartReplicationTaskAssessmentRunCommandInput, cb: (err: any, data?: StartReplicationTaskAssessmentRunCommandOutput) => void): void;
    startReplicationTaskAssessmentRun(args: StartReplicationTaskAssessmentRunCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: StartReplicationTaskAssessmentRunCommandOutput) => void): void;
    /**
     * <p>Stops the replication task.</p>
     */
    stopReplicationTask(args: StopReplicationTaskCommandInput, options?: __HttpHandlerOptions): Promise<StopReplicationTaskCommandOutput>;
    stopReplicationTask(args: StopReplicationTaskCommandInput, cb: (err: any, data?: StopReplicationTaskCommandOutput) => void): void;
    stopReplicationTask(args: StopReplicationTaskCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: StopReplicationTaskCommandOutput) => void): void;
    /**
     * <p>Tests the connection between the replication instance and the endpoint.</p>
     */
    testConnection(args: TestConnectionCommandInput, options?: __HttpHandlerOptions): Promise<TestConnectionCommandOutput>;
    testConnection(args: TestConnectionCommandInput, cb: (err: any, data?: TestConnectionCommandOutput) => void): void;
    testConnection(args: TestConnectionCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: TestConnectionCommandOutput) => void): void;
}
