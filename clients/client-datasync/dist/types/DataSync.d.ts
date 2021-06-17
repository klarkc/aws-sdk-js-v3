import { DataSyncClient } from "./DataSyncClient";
import { CancelTaskExecutionCommandInput, CancelTaskExecutionCommandOutput } from "./commands/CancelTaskExecutionCommand";
import { CreateAgentCommandInput, CreateAgentCommandOutput } from "./commands/CreateAgentCommand";
import { CreateLocationEfsCommandInput, CreateLocationEfsCommandOutput } from "./commands/CreateLocationEfsCommand";
import { CreateLocationFsxWindowsCommandInput, CreateLocationFsxWindowsCommandOutput } from "./commands/CreateLocationFsxWindowsCommand";
import { CreateLocationNfsCommandInput, CreateLocationNfsCommandOutput } from "./commands/CreateLocationNfsCommand";
import { CreateLocationObjectStorageCommandInput, CreateLocationObjectStorageCommandOutput } from "./commands/CreateLocationObjectStorageCommand";
import { CreateLocationS3CommandInput, CreateLocationS3CommandOutput } from "./commands/CreateLocationS3Command";
import { CreateLocationSmbCommandInput, CreateLocationSmbCommandOutput } from "./commands/CreateLocationSmbCommand";
import { CreateTaskCommandInput, CreateTaskCommandOutput } from "./commands/CreateTaskCommand";
import { DeleteAgentCommandInput, DeleteAgentCommandOutput } from "./commands/DeleteAgentCommand";
import { DeleteLocationCommandInput, DeleteLocationCommandOutput } from "./commands/DeleteLocationCommand";
import { DeleteTaskCommandInput, DeleteTaskCommandOutput } from "./commands/DeleteTaskCommand";
import { DescribeAgentCommandInput, DescribeAgentCommandOutput } from "./commands/DescribeAgentCommand";
import { DescribeLocationEfsCommandInput, DescribeLocationEfsCommandOutput } from "./commands/DescribeLocationEfsCommand";
import { DescribeLocationFsxWindowsCommandInput, DescribeLocationFsxWindowsCommandOutput } from "./commands/DescribeLocationFsxWindowsCommand";
import { DescribeLocationNfsCommandInput, DescribeLocationNfsCommandOutput } from "./commands/DescribeLocationNfsCommand";
import { DescribeLocationObjectStorageCommandInput, DescribeLocationObjectStorageCommandOutput } from "./commands/DescribeLocationObjectStorageCommand";
import { DescribeLocationS3CommandInput, DescribeLocationS3CommandOutput } from "./commands/DescribeLocationS3Command";
import { DescribeLocationSmbCommandInput, DescribeLocationSmbCommandOutput } from "./commands/DescribeLocationSmbCommand";
import { DescribeTaskCommandInput, DescribeTaskCommandOutput } from "./commands/DescribeTaskCommand";
import { DescribeTaskExecutionCommandInput, DescribeTaskExecutionCommandOutput } from "./commands/DescribeTaskExecutionCommand";
import { ListAgentsCommandInput, ListAgentsCommandOutput } from "./commands/ListAgentsCommand";
import { ListLocationsCommandInput, ListLocationsCommandOutput } from "./commands/ListLocationsCommand";
import { ListTagsForResourceCommandInput, ListTagsForResourceCommandOutput } from "./commands/ListTagsForResourceCommand";
import { ListTaskExecutionsCommandInput, ListTaskExecutionsCommandOutput } from "./commands/ListTaskExecutionsCommand";
import { ListTasksCommandInput, ListTasksCommandOutput } from "./commands/ListTasksCommand";
import { StartTaskExecutionCommandInput, StartTaskExecutionCommandOutput } from "./commands/StartTaskExecutionCommand";
import { TagResourceCommandInput, TagResourceCommandOutput } from "./commands/TagResourceCommand";
import { UntagResourceCommandInput, UntagResourceCommandOutput } from "./commands/UntagResourceCommand";
import { UpdateAgentCommandInput, UpdateAgentCommandOutput } from "./commands/UpdateAgentCommand";
import { UpdateLocationNfsCommandInput, UpdateLocationNfsCommandOutput } from "./commands/UpdateLocationNfsCommand";
import { UpdateLocationObjectStorageCommandInput, UpdateLocationObjectStorageCommandOutput } from "./commands/UpdateLocationObjectStorageCommand";
import { UpdateLocationSmbCommandInput, UpdateLocationSmbCommandOutput } from "./commands/UpdateLocationSmbCommand";
import { UpdateTaskCommandInput, UpdateTaskCommandOutput } from "./commands/UpdateTaskCommand";
import { UpdateTaskExecutionCommandInput, UpdateTaskExecutionCommandOutput } from "./commands/UpdateTaskExecutionCommand";
import { HttpHandlerOptions as __HttpHandlerOptions } from "@aws-sdk/types";
/**
 * <fullname>AWS DataSync</fullname>
 *
 *          <p>AWS DataSync is a managed data transfer service that makes it simpler for you to
 *       automate moving data between on-premises storage and Amazon Simple Storage Service (Amazon S3)
 *       or Amazon Elastic File System (Amazon EFS). </p>
 *          <p>This API interface reference for AWS DataSync contains documentation for a
 *       programming interface that you can use to manage AWS DataSync.</p>
 */
export declare class DataSync extends DataSyncClient {
    /**
     * <p>Cancels execution of a task. </p>
     *          <p>When you cancel a task execution, the transfer of some files is abruptly interrupted.
     *       The contents of files that are transferred to the destination might be incomplete or
     *       inconsistent with the source files. However, if you start a new task execution on the same
     *       task and you allow the task execution to complete, file content on the destination is complete
     *       and consistent. This applies to other unexpected failures that interrupt a task execution. In
     *       all of these cases, AWS DataSync successfully complete the transfer when you start the next
     *       task execution.</p>
     */
    cancelTaskExecution(args: CancelTaskExecutionCommandInput, options?: __HttpHandlerOptions): Promise<CancelTaskExecutionCommandOutput>;
    cancelTaskExecution(args: CancelTaskExecutionCommandInput, cb: (err: any, data?: CancelTaskExecutionCommandOutput) => void): void;
    cancelTaskExecution(args: CancelTaskExecutionCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: CancelTaskExecutionCommandOutput) => void): void;
    /**
     * <p>Activates an AWS DataSync agent that you have deployed on your host. The activation
     *       process associates your agent with your account. In the activation process, you specify
     *       information such as the AWS Region that you want to activate the agent in. You activate the
     *       agent in the AWS Region where your target locations (in Amazon S3 or Amazon EFS) reside. Your
     *       tasks are created in this AWS Region.</p>
     *          <p>You can activate the agent in a VPC (virtual private cloud) or provide the agent access to
     *       a VPC endpoint so you can run tasks without going over the public internet.</p>
     *          <p>You can use an agent for more than one location. If a task uses multiple agents, all of
     *       them need to have status AVAILABLE for the task to run. If you use multiple agents for a
     *       source location, the status of all the agents must be AVAILABLE for the task to run. </p>
     *
     *
     *          <p>Agents are automatically updated by AWS on a regular basis, using a mechanism that
     *       ensures minimal interruption to your tasks.</p>
     *          <p></p>
     */
    createAgent(args: CreateAgentCommandInput, options?: __HttpHandlerOptions): Promise<CreateAgentCommandOutput>;
    createAgent(args: CreateAgentCommandInput, cb: (err: any, data?: CreateAgentCommandOutput) => void): void;
    createAgent(args: CreateAgentCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: CreateAgentCommandOutput) => void): void;
    /**
     * <p>Creates an endpoint for an Amazon EFS file system.</p>
     */
    createLocationEfs(args: CreateLocationEfsCommandInput, options?: __HttpHandlerOptions): Promise<CreateLocationEfsCommandOutput>;
    createLocationEfs(args: CreateLocationEfsCommandInput, cb: (err: any, data?: CreateLocationEfsCommandOutput) => void): void;
    createLocationEfs(args: CreateLocationEfsCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: CreateLocationEfsCommandOutput) => void): void;
    /**
     * <p>Creates an endpoint for an Amazon FSx for Windows File Server file system.</p>
     */
    createLocationFsxWindows(args: CreateLocationFsxWindowsCommandInput, options?: __HttpHandlerOptions): Promise<CreateLocationFsxWindowsCommandOutput>;
    createLocationFsxWindows(args: CreateLocationFsxWindowsCommandInput, cb: (err: any, data?: CreateLocationFsxWindowsCommandOutput) => void): void;
    createLocationFsxWindows(args: CreateLocationFsxWindowsCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: CreateLocationFsxWindowsCommandOutput) => void): void;
    /**
     * <p>Defines a file system on a Network File System (NFS) server that can be read from or
     *       written to.</p>
     */
    createLocationNfs(args: CreateLocationNfsCommandInput, options?: __HttpHandlerOptions): Promise<CreateLocationNfsCommandOutput>;
    createLocationNfs(args: CreateLocationNfsCommandInput, cb: (err: any, data?: CreateLocationNfsCommandOutput) => void): void;
    createLocationNfs(args: CreateLocationNfsCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: CreateLocationNfsCommandOutput) => void): void;
    /**
     * <p>Creates an endpoint for a self-managed object storage bucket. For more information
     *       about self-managed object storage locations, see <a href="https://docs.aws.amazon.com/datasync/latest/userguide/create-object-location.html">Creating a location for object storage</a>.</p>
     */
    createLocationObjectStorage(args: CreateLocationObjectStorageCommandInput, options?: __HttpHandlerOptions): Promise<CreateLocationObjectStorageCommandOutput>;
    createLocationObjectStorage(args: CreateLocationObjectStorageCommandInput, cb: (err: any, data?: CreateLocationObjectStorageCommandOutput) => void): void;
    createLocationObjectStorage(args: CreateLocationObjectStorageCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: CreateLocationObjectStorageCommandOutput) => void): void;
    /**
     * <p>Creates an endpoint for an Amazon S3 bucket.</p>
     *
     *
     *          <p>For
     *       more information, see
     *       https://docs.aws.amazon.com/datasync/latest/userguide/create-locations-cli.html#create-location-s3-cli
     *       in the <i>AWS DataSync User Guide</i>.</p>
     */
    createLocationS3(args: CreateLocationS3CommandInput, options?: __HttpHandlerOptions): Promise<CreateLocationS3CommandOutput>;
    createLocationS3(args: CreateLocationS3CommandInput, cb: (err: any, data?: CreateLocationS3CommandOutput) => void): void;
    createLocationS3(args: CreateLocationS3CommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: CreateLocationS3CommandOutput) => void): void;
    /**
     * <p>Defines a file system on a Server Message Block (SMB) server that can be read from or
     *       written to.</p>
     */
    createLocationSmb(args: CreateLocationSmbCommandInput, options?: __HttpHandlerOptions): Promise<CreateLocationSmbCommandOutput>;
    createLocationSmb(args: CreateLocationSmbCommandInput, cb: (err: any, data?: CreateLocationSmbCommandOutput) => void): void;
    createLocationSmb(args: CreateLocationSmbCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: CreateLocationSmbCommandOutput) => void): void;
    /**
     * <p>Creates a task.</p>
     *          <p>A task includes a source location and a destination location, and a configuration
     *       that specifies how data is transferred. A task always transfers data from the source
     *       location to the destination location. The configuration specifies options such as
     *       task scheduling, bandwidth limits, etc. A task is the complete definition of a data
     *       transfer.</p>
     *          <p>When you create a task that transfers data between AWS services in different AWS Regions,
     *       one of the two locations that you specify must reside in the Region where DataSync is being
     *       used. The other location must be specified in a different Region.</p>
     *          <p>You can transfer data between commercial AWS Regions except for China, or between AWS
     *       GovCloud (US-East and US-West) Regions.</p>
     *
     *          <important>
     *             <p>When you use DataSync to copy files or objects between AWS Regions,
     *       you pay for data transfer between Regions. This is billed as data transfer OUT
     *       from your source Region to your destination Region. For more information,
     *       see <a href="http://aws.amazon.com/ec2/pricing/on-demand/#Data_Transfer">Data Transfer pricing</a>.
     *     </p>
     *          </important>
     */
    createTask(args: CreateTaskCommandInput, options?: __HttpHandlerOptions): Promise<CreateTaskCommandOutput>;
    createTask(args: CreateTaskCommandInput, cb: (err: any, data?: CreateTaskCommandOutput) => void): void;
    createTask(args: CreateTaskCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: CreateTaskCommandOutput) => void): void;
    /**
     * <p>Deletes an agent. To specify which agent to delete, use the Amazon Resource Name (ARN)
     *       of the agent in your request. The operation disassociates the agent from your AWS account.
     *       However, it doesn't delete the agent virtual machine (VM) from your on-premises
     *       environment.</p>
     */
    deleteAgent(args: DeleteAgentCommandInput, options?: __HttpHandlerOptions): Promise<DeleteAgentCommandOutput>;
    deleteAgent(args: DeleteAgentCommandInput, cb: (err: any, data?: DeleteAgentCommandOutput) => void): void;
    deleteAgent(args: DeleteAgentCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: DeleteAgentCommandOutput) => void): void;
    /**
     * <p>Deletes the configuration of a location used by AWS DataSync. </p>
     */
    deleteLocation(args: DeleteLocationCommandInput, options?: __HttpHandlerOptions): Promise<DeleteLocationCommandOutput>;
    deleteLocation(args: DeleteLocationCommandInput, cb: (err: any, data?: DeleteLocationCommandOutput) => void): void;
    deleteLocation(args: DeleteLocationCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: DeleteLocationCommandOutput) => void): void;
    /**
     * <p>Deletes a task.</p>
     */
    deleteTask(args: DeleteTaskCommandInput, options?: __HttpHandlerOptions): Promise<DeleteTaskCommandOutput>;
    deleteTask(args: DeleteTaskCommandInput, cb: (err: any, data?: DeleteTaskCommandOutput) => void): void;
    deleteTask(args: DeleteTaskCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: DeleteTaskCommandOutput) => void): void;
    /**
     * <p>Returns metadata such as the name, the network interfaces, and the status (that is,
     *       whether the agent is running or not) for an agent. To specify which agent to describe, use the
     *       Amazon Resource Name (ARN) of the agent in your request. </p>
     */
    describeAgent(args: DescribeAgentCommandInput, options?: __HttpHandlerOptions): Promise<DescribeAgentCommandOutput>;
    describeAgent(args: DescribeAgentCommandInput, cb: (err: any, data?: DescribeAgentCommandOutput) => void): void;
    describeAgent(args: DescribeAgentCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: DescribeAgentCommandOutput) => void): void;
    /**
     * <p>Returns metadata, such as the path information about an Amazon EFS location.</p>
     */
    describeLocationEfs(args: DescribeLocationEfsCommandInput, options?: __HttpHandlerOptions): Promise<DescribeLocationEfsCommandOutput>;
    describeLocationEfs(args: DescribeLocationEfsCommandInput, cb: (err: any, data?: DescribeLocationEfsCommandOutput) => void): void;
    describeLocationEfs(args: DescribeLocationEfsCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: DescribeLocationEfsCommandOutput) => void): void;
    /**
     * <p>Returns metadata, such as the path information about an Amazon FSx for Windows File Server
     *       location.</p>
     */
    describeLocationFsxWindows(args: DescribeLocationFsxWindowsCommandInput, options?: __HttpHandlerOptions): Promise<DescribeLocationFsxWindowsCommandOutput>;
    describeLocationFsxWindows(args: DescribeLocationFsxWindowsCommandInput, cb: (err: any, data?: DescribeLocationFsxWindowsCommandOutput) => void): void;
    describeLocationFsxWindows(args: DescribeLocationFsxWindowsCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: DescribeLocationFsxWindowsCommandOutput) => void): void;
    /**
     * <p>Returns metadata, such as the path information, about an NFS location.</p>
     */
    describeLocationNfs(args: DescribeLocationNfsCommandInput, options?: __HttpHandlerOptions): Promise<DescribeLocationNfsCommandOutput>;
    describeLocationNfs(args: DescribeLocationNfsCommandInput, cb: (err: any, data?: DescribeLocationNfsCommandOutput) => void): void;
    describeLocationNfs(args: DescribeLocationNfsCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: DescribeLocationNfsCommandOutput) => void): void;
    /**
     * <p>Returns metadata about a self-managed object storage server location. For more information
     *       about self-managed object storage locations, see <a href="https://docs.aws.amazon.com/datasync/latest/userguide/create-object-location.html">Creating a location for object storage</a>.</p>
     */
    describeLocationObjectStorage(args: DescribeLocationObjectStorageCommandInput, options?: __HttpHandlerOptions): Promise<DescribeLocationObjectStorageCommandOutput>;
    describeLocationObjectStorage(args: DescribeLocationObjectStorageCommandInput, cb: (err: any, data?: DescribeLocationObjectStorageCommandOutput) => void): void;
    describeLocationObjectStorage(args: DescribeLocationObjectStorageCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: DescribeLocationObjectStorageCommandOutput) => void): void;
    /**
     * <p>Returns metadata, such as bucket name, about an Amazon S3 bucket location.</p>
     */
    describeLocationS3(args: DescribeLocationS3CommandInput, options?: __HttpHandlerOptions): Promise<DescribeLocationS3CommandOutput>;
    describeLocationS3(args: DescribeLocationS3CommandInput, cb: (err: any, data?: DescribeLocationS3CommandOutput) => void): void;
    describeLocationS3(args: DescribeLocationS3CommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: DescribeLocationS3CommandOutput) => void): void;
    /**
     * <p>Returns metadata, such as the path and user information about an SMB location.</p>
     */
    describeLocationSmb(args: DescribeLocationSmbCommandInput, options?: __HttpHandlerOptions): Promise<DescribeLocationSmbCommandOutput>;
    describeLocationSmb(args: DescribeLocationSmbCommandInput, cb: (err: any, data?: DescribeLocationSmbCommandOutput) => void): void;
    describeLocationSmb(args: DescribeLocationSmbCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: DescribeLocationSmbCommandOutput) => void): void;
    /**
     * <p>Returns metadata about a task.</p>
     */
    describeTask(args: DescribeTaskCommandInput, options?: __HttpHandlerOptions): Promise<DescribeTaskCommandOutput>;
    describeTask(args: DescribeTaskCommandInput, cb: (err: any, data?: DescribeTaskCommandOutput) => void): void;
    describeTask(args: DescribeTaskCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: DescribeTaskCommandOutput) => void): void;
    /**
     * <p>Returns detailed metadata about a task that is being executed.</p>
     */
    describeTaskExecution(args: DescribeTaskExecutionCommandInput, options?: __HttpHandlerOptions): Promise<DescribeTaskExecutionCommandOutput>;
    describeTaskExecution(args: DescribeTaskExecutionCommandInput, cb: (err: any, data?: DescribeTaskExecutionCommandOutput) => void): void;
    describeTaskExecution(args: DescribeTaskExecutionCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: DescribeTaskExecutionCommandOutput) => void): void;
    /**
     * <p>Returns a list of agents owned by an AWS account in the AWS Region specified in the
     *       request. The returned list is ordered by agent Amazon Resource Name (ARN).</p>
     *          <p>By default, this operation returns a maximum of 100 agents. This operation supports
     *       pagination that enables you to optionally reduce the number of agents returned in a
     *       response.</p>
     *          <p>If you have more agents than are returned in a response (that is, the response returns
     *       only a truncated list of your agents), the response contains a marker that you can specify in
     *       your next request to fetch the next page of agents.</p>
     */
    listAgents(args: ListAgentsCommandInput, options?: __HttpHandlerOptions): Promise<ListAgentsCommandOutput>;
    listAgents(args: ListAgentsCommandInput, cb: (err: any, data?: ListAgentsCommandOutput) => void): void;
    listAgents(args: ListAgentsCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: ListAgentsCommandOutput) => void): void;
    /**
     * <p>Returns a list of source and destination locations.</p>
     *          <p>If you have more locations than are returned in a response (that is, the response
     *       returns only a truncated list of your agents), the response contains a token that you can
     *       specify in your next request to fetch the next page of locations.</p>
     */
    listLocations(args: ListLocationsCommandInput, options?: __HttpHandlerOptions): Promise<ListLocationsCommandOutput>;
    listLocations(args: ListLocationsCommandInput, cb: (err: any, data?: ListLocationsCommandOutput) => void): void;
    listLocations(args: ListLocationsCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: ListLocationsCommandOutput) => void): void;
    /**
     * <p>Returns all the tags associated with a specified resource. </p>
     */
    listTagsForResource(args: ListTagsForResourceCommandInput, options?: __HttpHandlerOptions): Promise<ListTagsForResourceCommandOutput>;
    listTagsForResource(args: ListTagsForResourceCommandInput, cb: (err: any, data?: ListTagsForResourceCommandOutput) => void): void;
    listTagsForResource(args: ListTagsForResourceCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: ListTagsForResourceCommandOutput) => void): void;
    /**
     * <p>Returns a list of executed tasks.</p>
     */
    listTaskExecutions(args: ListTaskExecutionsCommandInput, options?: __HttpHandlerOptions): Promise<ListTaskExecutionsCommandOutput>;
    listTaskExecutions(args: ListTaskExecutionsCommandInput, cb: (err: any, data?: ListTaskExecutionsCommandOutput) => void): void;
    listTaskExecutions(args: ListTaskExecutionsCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: ListTaskExecutionsCommandOutput) => void): void;
    /**
     * <p>Returns a list of all the tasks.</p>
     */
    listTasks(args: ListTasksCommandInput, options?: __HttpHandlerOptions): Promise<ListTasksCommandOutput>;
    listTasks(args: ListTasksCommandInput, cb: (err: any, data?: ListTasksCommandOutput) => void): void;
    listTasks(args: ListTasksCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: ListTasksCommandOutput) => void): void;
    /**
     * <p>Starts a specific invocation of a task. A <code>TaskExecution</code> value represents
     *       an individual run of a task. Each task can have at most one <code>TaskExecution</code> at a
     *       time.</p>
     *          <p>
     *             <code>TaskExecution</code> has the following transition phases: INITIALIZING |
     *       PREPARING | TRANSFERRING | VERIFYING | SUCCESS/FAILURE. </p>
     *
     *          <p>For detailed information, see the Task Execution section in the Components and
     *       Terminology topic in the <i>AWS DataSync User Guide</i>.</p>
     */
    startTaskExecution(args: StartTaskExecutionCommandInput, options?: __HttpHandlerOptions): Promise<StartTaskExecutionCommandOutput>;
    startTaskExecution(args: StartTaskExecutionCommandInput, cb: (err: any, data?: StartTaskExecutionCommandOutput) => void): void;
    startTaskExecution(args: StartTaskExecutionCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: StartTaskExecutionCommandOutput) => void): void;
    /**
     * <p>Applies a key-value pair to an AWS resource.</p>
     */
    tagResource(args: TagResourceCommandInput, options?: __HttpHandlerOptions): Promise<TagResourceCommandOutput>;
    tagResource(args: TagResourceCommandInput, cb: (err: any, data?: TagResourceCommandOutput) => void): void;
    tagResource(args: TagResourceCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: TagResourceCommandOutput) => void): void;
    /**
     * <p>Removes a tag from an AWS resource.</p>
     */
    untagResource(args: UntagResourceCommandInput, options?: __HttpHandlerOptions): Promise<UntagResourceCommandOutput>;
    untagResource(args: UntagResourceCommandInput, cb: (err: any, data?: UntagResourceCommandOutput) => void): void;
    untagResource(args: UntagResourceCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: UntagResourceCommandOutput) => void): void;
    /**
     * <p>Updates the name of an agent.</p>
     */
    updateAgent(args: UpdateAgentCommandInput, options?: __HttpHandlerOptions): Promise<UpdateAgentCommandOutput>;
    updateAgent(args: UpdateAgentCommandInput, cb: (err: any, data?: UpdateAgentCommandOutput) => void): void;
    updateAgent(args: UpdateAgentCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: UpdateAgentCommandOutput) => void): void;
    /**
     * <p>Updates some of the parameters of a previously created location for Network File System (NFS) access.
     *       For information about creating an NFS location, see <a href="https://docs.aws.amazon.com/datasync/latest/userguide/create-nfs-location.html">Creating a location for NFS</a>.</p>
     */
    updateLocationNfs(args: UpdateLocationNfsCommandInput, options?: __HttpHandlerOptions): Promise<UpdateLocationNfsCommandOutput>;
    updateLocationNfs(args: UpdateLocationNfsCommandInput, cb: (err: any, data?: UpdateLocationNfsCommandOutput) => void): void;
    updateLocationNfs(args: UpdateLocationNfsCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: UpdateLocationNfsCommandOutput) => void): void;
    /**
     * <p>Updates some of the parameters of a previously created location for self-managed object
     *       storage server access. For information about creating a self-managed object storage location,
     *       see <a href="https://docs.aws.amazon.com/datasync/latest/userguide/create-object-location.html">Creating a location for object storage</a>.</p>
     */
    updateLocationObjectStorage(args: UpdateLocationObjectStorageCommandInput, options?: __HttpHandlerOptions): Promise<UpdateLocationObjectStorageCommandOutput>;
    updateLocationObjectStorage(args: UpdateLocationObjectStorageCommandInput, cb: (err: any, data?: UpdateLocationObjectStorageCommandOutput) => void): void;
    updateLocationObjectStorage(args: UpdateLocationObjectStorageCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: UpdateLocationObjectStorageCommandOutput) => void): void;
    /**
     * <p>Updates some of the parameters of a previously created location for Server Message Block
     *       (SMB) file system access. For information about creating an SMB location, see
     *       <a href="https://docs.aws.amazon.com/datasync/latest/userguide/create-smb-location.html">Creating a location for SMB</a>.</p>
     */
    updateLocationSmb(args: UpdateLocationSmbCommandInput, options?: __HttpHandlerOptions): Promise<UpdateLocationSmbCommandOutput>;
    updateLocationSmb(args: UpdateLocationSmbCommandInput, cb: (err: any, data?: UpdateLocationSmbCommandOutput) => void): void;
    updateLocationSmb(args: UpdateLocationSmbCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: UpdateLocationSmbCommandOutput) => void): void;
    /**
     * <p>Updates the metadata associated with a task.</p>
     */
    updateTask(args: UpdateTaskCommandInput, options?: __HttpHandlerOptions): Promise<UpdateTaskCommandOutput>;
    updateTask(args: UpdateTaskCommandInput, cb: (err: any, data?: UpdateTaskCommandOutput) => void): void;
    updateTask(args: UpdateTaskCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: UpdateTaskCommandOutput) => void): void;
    /**
     * <p>Updates execution of a task.</p>
     *          <p>You can modify bandwidth throttling for a task execution that is running or queued.
     *       For more information, see <a href="https://docs.aws.amazon.com/datasync/latest/userguide/working-with-task-executions.html#adjust-bandwidth-throttling">Adjusting Bandwidth Throttling for a Task Execution</a>.</p>
     *
     *          <note>
     *             <p>The only <code>Option</code> that can be modified by <code>UpdateTaskExecution</code>
     *         is <code>
     *                   <a href="https://docs.aws.amazon.com/datasync/latest/userguide/API_Options.html#DataSync-Type-Options-BytesPerSecond">BytesPerSecond</a>
     *                </code>.</p>
     *          </note>
     */
    updateTaskExecution(args: UpdateTaskExecutionCommandInput, options?: __HttpHandlerOptions): Promise<UpdateTaskExecutionCommandOutput>;
    updateTaskExecution(args: UpdateTaskExecutionCommandInput, cb: (err: any, data?: UpdateTaskExecutionCommandOutput) => void): void;
    updateTaskExecution(args: UpdateTaskExecutionCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: UpdateTaskExecutionCommandOutput) => void): void;
}
