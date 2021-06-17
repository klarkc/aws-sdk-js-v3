import { MgnClient } from "./MgnClient";
import { ChangeServerLifeCycleStateCommandInput, ChangeServerLifeCycleStateCommandOutput } from "./commands/ChangeServerLifeCycleStateCommand";
import { CreateReplicationConfigurationTemplateCommandInput, CreateReplicationConfigurationTemplateCommandOutput } from "./commands/CreateReplicationConfigurationTemplateCommand";
import { DeleteJobCommandInput, DeleteJobCommandOutput } from "./commands/DeleteJobCommand";
import { DeleteReplicationConfigurationTemplateCommandInput, DeleteReplicationConfigurationTemplateCommandOutput } from "./commands/DeleteReplicationConfigurationTemplateCommand";
import { DeleteSourceServerCommandInput, DeleteSourceServerCommandOutput } from "./commands/DeleteSourceServerCommand";
import { DescribeJobLogItemsCommandInput, DescribeJobLogItemsCommandOutput } from "./commands/DescribeJobLogItemsCommand";
import { DescribeJobsCommandInput, DescribeJobsCommandOutput } from "./commands/DescribeJobsCommand";
import { DescribeReplicationConfigurationTemplatesCommandInput, DescribeReplicationConfigurationTemplatesCommandOutput } from "./commands/DescribeReplicationConfigurationTemplatesCommand";
import { DescribeSourceServersCommandInput, DescribeSourceServersCommandOutput } from "./commands/DescribeSourceServersCommand";
import { DisconnectFromServiceCommandInput, DisconnectFromServiceCommandOutput } from "./commands/DisconnectFromServiceCommand";
import { FinalizeCutoverCommandInput, FinalizeCutoverCommandOutput } from "./commands/FinalizeCutoverCommand";
import { GetLaunchConfigurationCommandInput, GetLaunchConfigurationCommandOutput } from "./commands/GetLaunchConfigurationCommand";
import { GetReplicationConfigurationCommandInput, GetReplicationConfigurationCommandOutput } from "./commands/GetReplicationConfigurationCommand";
import { InitializeServiceCommandInput, InitializeServiceCommandOutput } from "./commands/InitializeServiceCommand";
import { ListTagsForResourceCommandInput, ListTagsForResourceCommandOutput } from "./commands/ListTagsForResourceCommand";
import { MarkAsArchivedCommandInput, MarkAsArchivedCommandOutput } from "./commands/MarkAsArchivedCommand";
import { RetryDataReplicationCommandInput, RetryDataReplicationCommandOutput } from "./commands/RetryDataReplicationCommand";
import { StartCutoverCommandInput, StartCutoverCommandOutput } from "./commands/StartCutoverCommand";
import { StartTestCommandInput, StartTestCommandOutput } from "./commands/StartTestCommand";
import { TagResourceCommandInput, TagResourceCommandOutput } from "./commands/TagResourceCommand";
import { TerminateTargetInstancesCommandInput, TerminateTargetInstancesCommandOutput } from "./commands/TerminateTargetInstancesCommand";
import { UntagResourceCommandInput, UntagResourceCommandOutput } from "./commands/UntagResourceCommand";
import { UpdateLaunchConfigurationCommandInput, UpdateLaunchConfigurationCommandOutput } from "./commands/UpdateLaunchConfigurationCommand";
import { UpdateReplicationConfigurationCommandInput, UpdateReplicationConfigurationCommandOutput } from "./commands/UpdateReplicationConfigurationCommand";
import { UpdateReplicationConfigurationTemplateCommandInput, UpdateReplicationConfigurationTemplateCommandOutput } from "./commands/UpdateReplicationConfigurationTemplateCommand";
import { HttpHandlerOptions as __HttpHandlerOptions } from "@aws-sdk/types";
/**
 * <p>The Application Migration Service service.</p>
 */
export declare class Mgn extends MgnClient {
    /**
     * <p>Allows the user to set the SourceServer.LifeCycle.state property for specific Source Server IDs to one of the following: READY_FOR_TEST or READY_FOR_CUTOVER. This command only works if the Source Server is already launchable (dataReplicationInfo.lagDuration is not null.)</p>
     */
    changeServerLifeCycleState(args: ChangeServerLifeCycleStateCommandInput, options?: __HttpHandlerOptions): Promise<ChangeServerLifeCycleStateCommandOutput>;
    changeServerLifeCycleState(args: ChangeServerLifeCycleStateCommandInput, cb: (err: any, data?: ChangeServerLifeCycleStateCommandOutput) => void): void;
    changeServerLifeCycleState(args: ChangeServerLifeCycleStateCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: ChangeServerLifeCycleStateCommandOutput) => void): void;
    /**
     * <p>Creates a new ReplicationConfigurationTemplate.</p>
     */
    createReplicationConfigurationTemplate(args: CreateReplicationConfigurationTemplateCommandInput, options?: __HttpHandlerOptions): Promise<CreateReplicationConfigurationTemplateCommandOutput>;
    createReplicationConfigurationTemplate(args: CreateReplicationConfigurationTemplateCommandInput, cb: (err: any, data?: CreateReplicationConfigurationTemplateCommandOutput) => void): void;
    createReplicationConfigurationTemplate(args: CreateReplicationConfigurationTemplateCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: CreateReplicationConfigurationTemplateCommandOutput) => void): void;
    /**
     * <p>Deletes a single Job by ID.</p>
     */
    deleteJob(args: DeleteJobCommandInput, options?: __HttpHandlerOptions): Promise<DeleteJobCommandOutput>;
    deleteJob(args: DeleteJobCommandInput, cb: (err: any, data?: DeleteJobCommandOutput) => void): void;
    deleteJob(args: DeleteJobCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: DeleteJobCommandOutput) => void): void;
    /**
     * <p>Deletes a single Replication Configuration Template by ID</p>
     */
    deleteReplicationConfigurationTemplate(args: DeleteReplicationConfigurationTemplateCommandInput, options?: __HttpHandlerOptions): Promise<DeleteReplicationConfigurationTemplateCommandOutput>;
    deleteReplicationConfigurationTemplate(args: DeleteReplicationConfigurationTemplateCommandInput, cb: (err: any, data?: DeleteReplicationConfigurationTemplateCommandOutput) => void): void;
    deleteReplicationConfigurationTemplate(args: DeleteReplicationConfigurationTemplateCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: DeleteReplicationConfigurationTemplateCommandOutput) => void): void;
    /**
     * <p>Deletes a single source server by ID.</p>
     */
    deleteSourceServer(args: DeleteSourceServerCommandInput, options?: __HttpHandlerOptions): Promise<DeleteSourceServerCommandOutput>;
    deleteSourceServer(args: DeleteSourceServerCommandInput, cb: (err: any, data?: DeleteSourceServerCommandOutput) => void): void;
    deleteSourceServer(args: DeleteSourceServerCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: DeleteSourceServerCommandOutput) => void): void;
    /**
     * <p>Retrieves detailed Job log with paging.</p>
     */
    describeJobLogItems(args: DescribeJobLogItemsCommandInput, options?: __HttpHandlerOptions): Promise<DescribeJobLogItemsCommandOutput>;
    describeJobLogItems(args: DescribeJobLogItemsCommandInput, cb: (err: any, data?: DescribeJobLogItemsCommandOutput) => void): void;
    describeJobLogItems(args: DescribeJobLogItemsCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: DescribeJobLogItemsCommandOutput) => void): void;
    /**
     * <p>Returns a list of Jobs. Use the JobsID and fromDate and toData filters to limit which jobs are returned. The response is sorted by creationDataTime - latest date first. Jobs are normaly created by the StartTest, StartCutover, and TerminateTargetInstances APIs. Jobs are also created by DiagnosticLaunch and TerminateDiagnosticInstances, which are APIs available only to *Support* and only used in response to relevant support tickets.</p>
     */
    describeJobs(args: DescribeJobsCommandInput, options?: __HttpHandlerOptions): Promise<DescribeJobsCommandOutput>;
    describeJobs(args: DescribeJobsCommandInput, cb: (err: any, data?: DescribeJobsCommandOutput) => void): void;
    describeJobs(args: DescribeJobsCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: DescribeJobsCommandOutput) => void): void;
    /**
     * <p>Lists all ReplicationConfigurationTemplates, filtered by Source Server IDs.</p>
     */
    describeReplicationConfigurationTemplates(args: DescribeReplicationConfigurationTemplatesCommandInput, options?: __HttpHandlerOptions): Promise<DescribeReplicationConfigurationTemplatesCommandOutput>;
    describeReplicationConfigurationTemplates(args: DescribeReplicationConfigurationTemplatesCommandInput, cb: (err: any, data?: DescribeReplicationConfigurationTemplatesCommandOutput) => void): void;
    describeReplicationConfigurationTemplates(args: DescribeReplicationConfigurationTemplatesCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: DescribeReplicationConfigurationTemplatesCommandOutput) => void): void;
    /**
     * <p>Retrieves all SourceServers or multiple SourceServers by ID.</p>
     */
    describeSourceServers(args: DescribeSourceServersCommandInput, options?: __HttpHandlerOptions): Promise<DescribeSourceServersCommandOutput>;
    describeSourceServers(args: DescribeSourceServersCommandInput, cb: (err: any, data?: DescribeSourceServersCommandOutput) => void): void;
    describeSourceServers(args: DescribeSourceServersCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: DescribeSourceServersCommandOutput) => void): void;
    /**
     * <p>Disconnects specific Source Servers from Application Migration Service. Data replication is stopped immediately. All AWS resources created by Application Migration Service for enabling the replication of these source servers will be terminated / deleted within 90 minutes. Launched Test or Cutover instances will NOT be terminated. If the agent on the source server has not been prevented from communciating with the Application Migration Service service, then it will receive a command to uninstall itself (within approximately 10 minutes). The following properties of the SourceServer will be changed immediately: dataReplicationInfo.dataReplicationState will be set to DISCONNECTED; The totalStorageBytes property for each of dataReplicationInfo.replicatedDisks will be set to zero; dataReplicationInfo.lagDuration and dataReplicationInfo.lagDurationwill be nullified.</p>
     */
    disconnectFromService(args: DisconnectFromServiceCommandInput, options?: __HttpHandlerOptions): Promise<DisconnectFromServiceCommandOutput>;
    disconnectFromService(args: DisconnectFromServiceCommandInput, cb: (err: any, data?: DisconnectFromServiceCommandOutput) => void): void;
    disconnectFromService(args: DisconnectFromServiceCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: DisconnectFromServiceCommandOutput) => void): void;
    /**
     * <p>Finalizes the cutover immediately for specific Source Servers. All AWS resources created by Application Migration Service for enabling the replication of these source servers will be terminated / deleted within 90 minutes. Launched Test or Cutover instances will NOT be terminated. The AWS Replication Agent will receive a command to uninstall itself (within 10 minutes). The following properties of the SourceServer will be changed immediately: dataReplicationInfo.dataReplicationState will be to DISCONNECTED; The SourceServer.lifeCycle.state will be changed to CUTOVER; The totalStorageBytes property fo each of dataReplicationInfo.replicatedDisks will be set to zero; dataReplicationInfo.lagDuration and dataReplicationInfo.lagDurationwill be nullified.</p>
     */
    finalizeCutover(args: FinalizeCutoverCommandInput, options?: __HttpHandlerOptions): Promise<FinalizeCutoverCommandOutput>;
    finalizeCutover(args: FinalizeCutoverCommandInput, cb: (err: any, data?: FinalizeCutoverCommandOutput) => void): void;
    finalizeCutover(args: FinalizeCutoverCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: FinalizeCutoverCommandOutput) => void): void;
    /**
     * <p>Lists all LaunchConfigurations available, filtered by Source Server IDs.</p>
     */
    getLaunchConfiguration(args: GetLaunchConfigurationCommandInput, options?: __HttpHandlerOptions): Promise<GetLaunchConfigurationCommandOutput>;
    getLaunchConfiguration(args: GetLaunchConfigurationCommandInput, cb: (err: any, data?: GetLaunchConfigurationCommandOutput) => void): void;
    getLaunchConfiguration(args: GetLaunchConfigurationCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: GetLaunchConfigurationCommandOutput) => void): void;
    /**
     * <p>Lists all ReplicationConfigurations, filtered by Source Server ID.</p>
     */
    getReplicationConfiguration(args: GetReplicationConfigurationCommandInput, options?: __HttpHandlerOptions): Promise<GetReplicationConfigurationCommandOutput>;
    getReplicationConfiguration(args: GetReplicationConfigurationCommandInput, cb: (err: any, data?: GetReplicationConfigurationCommandOutput) => void): void;
    getReplicationConfiguration(args: GetReplicationConfigurationCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: GetReplicationConfigurationCommandOutput) => void): void;
    /**
     * <p>Initialize Application Migration Service.</p>
     */
    initializeService(args: InitializeServiceCommandInput, options?: __HttpHandlerOptions): Promise<InitializeServiceCommandOutput>;
    initializeService(args: InitializeServiceCommandInput, cb: (err: any, data?: InitializeServiceCommandOutput) => void): void;
    initializeService(args: InitializeServiceCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: InitializeServiceCommandOutput) => void): void;
    /**
     * <p>List all tags for your Application Migration Service resources.</p>
     */
    listTagsForResource(args: ListTagsForResourceCommandInput, options?: __HttpHandlerOptions): Promise<ListTagsForResourceCommandOutput>;
    listTagsForResource(args: ListTagsForResourceCommandInput, cb: (err: any, data?: ListTagsForResourceCommandOutput) => void): void;
    listTagsForResource(args: ListTagsForResourceCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: ListTagsForResourceCommandOutput) => void): void;
    /**
     * <p>Archives specific Source Servers by setting the SourceServer.isArchived property to true for specified SourceServers by ID. This command only works for SourceServers with a lifecycle.state which equals DISCONNECTED or CUTOVER.</p>
     */
    markAsArchived(args: MarkAsArchivedCommandInput, options?: __HttpHandlerOptions): Promise<MarkAsArchivedCommandOutput>;
    markAsArchived(args: MarkAsArchivedCommandInput, cb: (err: any, data?: MarkAsArchivedCommandOutput) => void): void;
    markAsArchived(args: MarkAsArchivedCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: MarkAsArchivedCommandOutput) => void): void;
    /**
     * <p>Causes the data replication initiation sequence to begin immediately upon next Handshake for specified SourceServer IDs, regardless of when the previous initiation started. This command will not work if the SourceServer is not stalled or is in a DISCONNECTED or STOPPED state.</p>
     */
    retryDataReplication(args: RetryDataReplicationCommandInput, options?: __HttpHandlerOptions): Promise<RetryDataReplicationCommandOutput>;
    retryDataReplication(args: RetryDataReplicationCommandInput, cb: (err: any, data?: RetryDataReplicationCommandOutput) => void): void;
    retryDataReplication(args: RetryDataReplicationCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: RetryDataReplicationCommandOutput) => void): void;
    /**
     * <p>Launches a Cutover Instance for specific Source Servers. This command starts a LAUNCH job whose initiatedBy property is StartCutover and changes the SourceServer.lifeCycle.state property to CUTTING_OVER.</p>
     */
    startCutover(args: StartCutoverCommandInput, options?: __HttpHandlerOptions): Promise<StartCutoverCommandOutput>;
    startCutover(args: StartCutoverCommandInput, cb: (err: any, data?: StartCutoverCommandOutput) => void): void;
    startCutover(args: StartCutoverCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: StartCutoverCommandOutput) => void): void;
    /**
     * <p>Lauches a Test Instance for specific Source Servers. This command starts a LAUNCH job whose initiatedBy property is StartTest and changes the SourceServer.lifeCycle.state property to TESTING.</p>
     */
    startTest(args: StartTestCommandInput, options?: __HttpHandlerOptions): Promise<StartTestCommandOutput>;
    startTest(args: StartTestCommandInput, cb: (err: any, data?: StartTestCommandOutput) => void): void;
    startTest(args: StartTestCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: StartTestCommandOutput) => void): void;
    /**
     * <p>Adds or overwrites only the specified tags for the specified Application Migration Service resource or resources. When you specify an existing tag key, the value is overwritten with the new value. Each resource can have a maximum of 50 tags. Each tag consists of a key and optional value.</p>
     */
    tagResource(args: TagResourceCommandInput, options?: __HttpHandlerOptions): Promise<TagResourceCommandOutput>;
    tagResource(args: TagResourceCommandInput, cb: (err: any, data?: TagResourceCommandOutput) => void): void;
    tagResource(args: TagResourceCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: TagResourceCommandOutput) => void): void;
    /**
     * <p>Starts a job that terminates specific launched EC2 Test and Cutover instances. This command will not work for any Source Server with a lifecycle.state of TESTING, CUTTING_OVER, or CUTOVER.</p>
     */
    terminateTargetInstances(args: TerminateTargetInstancesCommandInput, options?: __HttpHandlerOptions): Promise<TerminateTargetInstancesCommandOutput>;
    terminateTargetInstances(args: TerminateTargetInstancesCommandInput, cb: (err: any, data?: TerminateTargetInstancesCommandOutput) => void): void;
    terminateTargetInstances(args: TerminateTargetInstancesCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: TerminateTargetInstancesCommandOutput) => void): void;
    /**
     * <p>Deletes the specified set of tags from the specified set of Application Migration Service resources.</p>
     */
    untagResource(args: UntagResourceCommandInput, options?: __HttpHandlerOptions): Promise<UntagResourceCommandOutput>;
    untagResource(args: UntagResourceCommandInput, cb: (err: any, data?: UntagResourceCommandOutput) => void): void;
    untagResource(args: UntagResourceCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: UntagResourceCommandOutput) => void): void;
    /**
     * <p>Updates multiple LaunchConfigurations by Source Server ID.</p>
     */
    updateLaunchConfiguration(args: UpdateLaunchConfigurationCommandInput, options?: __HttpHandlerOptions): Promise<UpdateLaunchConfigurationCommandOutput>;
    updateLaunchConfiguration(args: UpdateLaunchConfigurationCommandInput, cb: (err: any, data?: UpdateLaunchConfigurationCommandOutput) => void): void;
    updateLaunchConfiguration(args: UpdateLaunchConfigurationCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: UpdateLaunchConfigurationCommandOutput) => void): void;
    /**
     * <p>Allows you to update multiple ReplicationConfigurations by Source Server ID.</p>
     */
    updateReplicationConfiguration(args: UpdateReplicationConfigurationCommandInput, options?: __HttpHandlerOptions): Promise<UpdateReplicationConfigurationCommandOutput>;
    updateReplicationConfiguration(args: UpdateReplicationConfigurationCommandInput, cb: (err: any, data?: UpdateReplicationConfigurationCommandOutput) => void): void;
    updateReplicationConfiguration(args: UpdateReplicationConfigurationCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: UpdateReplicationConfigurationCommandOutput) => void): void;
    /**
     * <p>Updates multiple ReplicationConfigurationTemplates by ID.</p>
     */
    updateReplicationConfigurationTemplate(args: UpdateReplicationConfigurationTemplateCommandInput, options?: __HttpHandlerOptions): Promise<UpdateReplicationConfigurationTemplateCommandOutput>;
    updateReplicationConfigurationTemplate(args: UpdateReplicationConfigurationTemplateCommandInput, cb: (err: any, data?: UpdateReplicationConfigurationTemplateCommandOutput) => void): void;
    updateReplicationConfigurationTemplate(args: UpdateReplicationConfigurationTemplateCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: UpdateReplicationConfigurationTemplateCommandOutput) => void): void;
}
