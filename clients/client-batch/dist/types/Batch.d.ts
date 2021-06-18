import { BatchClient } from "./BatchClient";
import { CancelJobCommandInput, CancelJobCommandOutput } from "./commands/CancelJobCommand";
import {
  CreateComputeEnvironmentCommandInput,
  CreateComputeEnvironmentCommandOutput,
} from "./commands/CreateComputeEnvironmentCommand";
import { CreateJobQueueCommandInput, CreateJobQueueCommandOutput } from "./commands/CreateJobQueueCommand";
import {
  DeleteComputeEnvironmentCommandInput,
  DeleteComputeEnvironmentCommandOutput,
} from "./commands/DeleteComputeEnvironmentCommand";
import { DeleteJobQueueCommandInput, DeleteJobQueueCommandOutput } from "./commands/DeleteJobQueueCommand";
import {
  DeregisterJobDefinitionCommandInput,
  DeregisterJobDefinitionCommandOutput,
} from "./commands/DeregisterJobDefinitionCommand";
import {
  DescribeComputeEnvironmentsCommandInput,
  DescribeComputeEnvironmentsCommandOutput,
} from "./commands/DescribeComputeEnvironmentsCommand";
import {
  DescribeJobDefinitionsCommandInput,
  DescribeJobDefinitionsCommandOutput,
} from "./commands/DescribeJobDefinitionsCommand";
import { DescribeJobQueuesCommandInput, DescribeJobQueuesCommandOutput } from "./commands/DescribeJobQueuesCommand";
import { DescribeJobsCommandInput, DescribeJobsCommandOutput } from "./commands/DescribeJobsCommand";
import { ListJobsCommandInput, ListJobsCommandOutput } from "./commands/ListJobsCommand";
import {
  ListTagsForResourceCommandInput,
  ListTagsForResourceCommandOutput,
} from "./commands/ListTagsForResourceCommand";
import {
  RegisterJobDefinitionCommandInput,
  RegisterJobDefinitionCommandOutput,
} from "./commands/RegisterJobDefinitionCommand";
import { SubmitJobCommandInput, SubmitJobCommandOutput } from "./commands/SubmitJobCommand";
import { TagResourceCommandInput, TagResourceCommandOutput } from "./commands/TagResourceCommand";
import { TerminateJobCommandInput, TerminateJobCommandOutput } from "./commands/TerminateJobCommand";
import { UntagResourceCommandInput, UntagResourceCommandOutput } from "./commands/UntagResourceCommand";
import {
  UpdateComputeEnvironmentCommandInput,
  UpdateComputeEnvironmentCommandOutput,
} from "./commands/UpdateComputeEnvironmentCommand";
import { UpdateJobQueueCommandInput, UpdateJobQueueCommandOutput } from "./commands/UpdateJobQueueCommand";
import { HttpHandlerOptions as __HttpHandlerOptions } from "@aws-sdk/types";
/**
 * <p>Using AWS Batch, you can run batch computing workloads on the AWS Cloud. Batch computing is a common means for
 *    developers, scientists, and engineers to access large amounts of compute resources. AWS Batch uses the advantages of
 *    this computing workload to remove the undifferentiated heavy lifting of configuring and managing required
 *    infrastructure. At the same time, it also adopts a familiar batch computing software approach. Given these
 *    advantages, AWS Batch can help you to efficiently provision resources in response to jobs submitted, thus effectively
 *    helping you to eliminate capacity constraints, reduce compute costs, and deliver your results more quickly.</p>
 *          <p>As a fully managed service, AWS Batch can run batch computing workloads of any scale. AWS Batch automatically
 *    provisions compute resources and optimizes workload distribution based on the quantity and scale of your specific
 *    workloads. With AWS Batch, there's no need to install or manage batch computing software. This means that you can focus
 *    your time and energy on analyzing results and solving your specific problems.</p>
 */
export declare class Batch extends BatchClient {
  /**
   * <p>Cancels a job in an AWS Batch job queue. Jobs that are in the <code>SUBMITTED</code>, <code>PENDING</code>, or
   *     <code>RUNNABLE</code> state are canceled. Jobs that have progressed to <code>STARTING</code> or <code>RUNNING</code>
   *    aren't canceled, but the API operation still succeeds, even if no job is canceled. These jobs must be terminated with
   *    the <a>TerminateJob</a> operation.</p>
   */
  cancelJob(args: CancelJobCommandInput, options?: __HttpHandlerOptions): Promise<CancelJobCommandOutput>;
  cancelJob(args: CancelJobCommandInput, cb: (err: any, data?: CancelJobCommandOutput) => void): void;
  cancelJob(
    args: CancelJobCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: CancelJobCommandOutput) => void
  ): void;
  /**
   * <p>Creates an AWS Batch compute environment. You can create <code>MANAGED</code> or <code>UNMANAGED</code> compute
   *    environments. <code>MANAGED</code> compute environments can use Amazon EC2 or AWS Fargate resources.
   *     <code>UNMANAGED</code> compute environments can only use EC2 resources.</p>
   *          <p>In a managed compute environment, AWS Batch manages the capacity and instance types of the compute resources
   *    within the environment. This is based on the compute resource specification that you define or the <a href="https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/ec2-launch-templates.html">launch template</a> that you
   *    specify when you create the compute environment. Either, you can choose to use EC2 On-Demand Instances and EC2 Spot
   *    Instances. Or, you can use Fargate and Fargate Spot capacity in your managed compute environment. You can
   *    optionally set a maximum price so that Spot Instances only launch
   *    when
   *    the Spot Instance price is less than a specified percentage of the On-Demand price.</p>
   *
   *          <note>
   *             <p>Multi-node parallel jobs aren't supported on Spot Instances.</p>
   *          </note>
   *          <p>In an unmanaged compute environment, you can manage your own EC2 compute resources and have a lot of flexibility
   *    with how you configure your compute resources. For example, you can use custom AMIs. However, you must verify that
   *    each of your AMIs meet the Amazon ECS container instance AMI specification. For more information, see <a href="https://docs.aws.amazon.com/AmazonECS/latest/developerguide/container_instance_AMIs.html">container instance AMIs</a> in the
   *     <i>Amazon Elastic Container Service Developer Guide</i>. After you created your unmanaged compute environment, you can use the <a>DescribeComputeEnvironments</a> operation to find the Amazon ECS cluster that's associated with it. Then, launch
   *    your container instances into that Amazon ECS cluster. For more information, see <a href="https://docs.aws.amazon.com/AmazonECS/latest/developerguide/launch_container_instance.html">Launching an Amazon ECS container instance</a> in the
   *     <i>Amazon Elastic Container Service Developer Guide</i>.</p>
   *          <note>
   *             <p>AWS Batch doesn't upgrade the AMIs in a compute environment after the environment is created. For example, it
   *     doesn't update the AMIs when a newer version of the Amazon ECS optimized AMI is available. Therefore, you're responsible
   *     for managing the guest operating system (including its updates and security patches) and any additional application
   *     software or utilities that you install on the compute resources. To use a new AMI for your AWS Batch jobs, complete
   *     these steps:</p>
   *             <ol>
   *                <li>
   *                   <p>Create a new compute environment with the new AMI.</p>
   *                </li>
   *                <li>
   *                   <p>Add the compute environment to an existing job queue.</p>
   *                </li>
   *                <li>
   *                   <p>Remove the earlier compute environment from your job queue.</p>
   *                </li>
   *                <li>
   *                   <p>Delete the earlier compute environment.</p>
   *                </li>
   *             </ol>
   *          </note>
   */
  createComputeEnvironment(
    args: CreateComputeEnvironmentCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<CreateComputeEnvironmentCommandOutput>;
  createComputeEnvironment(
    args: CreateComputeEnvironmentCommandInput,
    cb: (err: any, data?: CreateComputeEnvironmentCommandOutput) => void
  ): void;
  createComputeEnvironment(
    args: CreateComputeEnvironmentCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: CreateComputeEnvironmentCommandOutput) => void
  ): void;
  /**
   * <p>Creates an AWS Batch job queue. When you create a job queue, you associate one or more compute environments to the
   *    queue and assign an order of preference for the compute environments.</p>
   *          <p>You also set a priority to the job queue that determines the order that the AWS Batch scheduler places jobs onto
   *    its associated compute environments. For example, if a compute environment is associated with more than one job
   *    queue, the job queue with a higher priority is given preference for scheduling jobs to that compute
   *    environment.</p>
   */
  createJobQueue(
    args: CreateJobQueueCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<CreateJobQueueCommandOutput>;
  createJobQueue(args: CreateJobQueueCommandInput, cb: (err: any, data?: CreateJobQueueCommandOutput) => void): void;
  createJobQueue(
    args: CreateJobQueueCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: CreateJobQueueCommandOutput) => void
  ): void;
  /**
   * <p>Deletes an AWS Batch compute environment.</p>
   *          <p>Before you can delete a compute environment, you must set its state to <code>DISABLED</code> with the <a>UpdateComputeEnvironment</a> API operation and disassociate it from any job queues with the <a>UpdateJobQueue</a> API operation. Compute environments that use AWS Fargate resources must terminate all
   *    active jobs on that compute environment before deleting the compute environment. If this isn't done, the compute
   *    environment enters an invalid state.</p>
   */
  deleteComputeEnvironment(
    args: DeleteComputeEnvironmentCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DeleteComputeEnvironmentCommandOutput>;
  deleteComputeEnvironment(
    args: DeleteComputeEnvironmentCommandInput,
    cb: (err: any, data?: DeleteComputeEnvironmentCommandOutput) => void
  ): void;
  deleteComputeEnvironment(
    args: DeleteComputeEnvironmentCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DeleteComputeEnvironmentCommandOutput) => void
  ): void;
  /**
   * <p>Deletes the specified job queue. You must first disable submissions for a queue with the <a>UpdateJobQueue</a> operation. All jobs in the queue are eventually terminated when you delete a job queue.
   *    The jobs are terminated at a rate of about 16 jobs each second.</p>
   *          <p>It's not necessary to disassociate compute environments from a queue before submitting a
   *     <code>DeleteJobQueue</code> request.</p>
   */
  deleteJobQueue(
    args: DeleteJobQueueCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DeleteJobQueueCommandOutput>;
  deleteJobQueue(args: DeleteJobQueueCommandInput, cb: (err: any, data?: DeleteJobQueueCommandOutput) => void): void;
  deleteJobQueue(
    args: DeleteJobQueueCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DeleteJobQueueCommandOutput) => void
  ): void;
  /**
   * <p>Deregisters an AWS Batch job definition. Job definitions are permanently deleted after 180 days.</p>
   */
  deregisterJobDefinition(
    args: DeregisterJobDefinitionCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DeregisterJobDefinitionCommandOutput>;
  deregisterJobDefinition(
    args: DeregisterJobDefinitionCommandInput,
    cb: (err: any, data?: DeregisterJobDefinitionCommandOutput) => void
  ): void;
  deregisterJobDefinition(
    args: DeregisterJobDefinitionCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DeregisterJobDefinitionCommandOutput) => void
  ): void;
  /**
   * <p>Describes one or more of your compute environments.</p>
   *          <p>If you're using an unmanaged compute environment, you can use the <code>DescribeComputeEnvironment</code>
   *    operation to determine the <code>ecsClusterArn</code> that you should launch your Amazon ECS container instances
   *    into.</p>
   */
  describeComputeEnvironments(
    args: DescribeComputeEnvironmentsCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DescribeComputeEnvironmentsCommandOutput>;
  describeComputeEnvironments(
    args: DescribeComputeEnvironmentsCommandInput,
    cb: (err: any, data?: DescribeComputeEnvironmentsCommandOutput) => void
  ): void;
  describeComputeEnvironments(
    args: DescribeComputeEnvironmentsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DescribeComputeEnvironmentsCommandOutput) => void
  ): void;
  /**
   * <p>Describes a list of job definitions. You can specify a <code>status</code> (such as <code>ACTIVE</code>) to only
   *    return job definitions that match that status.</p>
   */
  describeJobDefinitions(
    args: DescribeJobDefinitionsCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DescribeJobDefinitionsCommandOutput>;
  describeJobDefinitions(
    args: DescribeJobDefinitionsCommandInput,
    cb: (err: any, data?: DescribeJobDefinitionsCommandOutput) => void
  ): void;
  describeJobDefinitions(
    args: DescribeJobDefinitionsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DescribeJobDefinitionsCommandOutput) => void
  ): void;
  /**
   * <p>Describes one or more of your job queues.</p>
   */
  describeJobQueues(
    args: DescribeJobQueuesCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DescribeJobQueuesCommandOutput>;
  describeJobQueues(
    args: DescribeJobQueuesCommandInput,
    cb: (err: any, data?: DescribeJobQueuesCommandOutput) => void
  ): void;
  describeJobQueues(
    args: DescribeJobQueuesCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DescribeJobQueuesCommandOutput) => void
  ): void;
  /**
   * <p>Describes a list of AWS Batch jobs.</p>
   */
  describeJobs(args: DescribeJobsCommandInput, options?: __HttpHandlerOptions): Promise<DescribeJobsCommandOutput>;
  describeJobs(args: DescribeJobsCommandInput, cb: (err: any, data?: DescribeJobsCommandOutput) => void): void;
  describeJobs(
    args: DescribeJobsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DescribeJobsCommandOutput) => void
  ): void;
  /**
   * <p>Returns a list of AWS Batch jobs.</p>
   *          <p>You must specify only one of the following items:</p>
   *          <ul>
   *             <li>
   *                <p>A job queue ID to return a list of jobs in that job queue</p>
   *             </li>
   *             <li>
   *                <p>A multi-node parallel job ID to return a list of nodes for that job</p>
   *             </li>
   *             <li>
   *                <p>An array job ID to return a list of the children for that job</p>
   *             </li>
   *          </ul>
   *          <p>You can filter the results by job status with the <code>jobStatus</code> parameter. If you don't specify a
   *    status, only <code>RUNNING</code> jobs are returned.</p>
   */
  listJobs(args: ListJobsCommandInput, options?: __HttpHandlerOptions): Promise<ListJobsCommandOutput>;
  listJobs(args: ListJobsCommandInput, cb: (err: any, data?: ListJobsCommandOutput) => void): void;
  listJobs(
    args: ListJobsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ListJobsCommandOutput) => void
  ): void;
  /**
   * <p>Lists the tags for an AWS Batch resource. AWS Batch resources that support tags are compute environments, jobs, job definitions, and job
   *  queues. ARNs for child jobs of array and multi-node parallel (MNP) jobs are not supported.</p>
   */
  listTagsForResource(
    args: ListTagsForResourceCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ListTagsForResourceCommandOutput>;
  listTagsForResource(
    args: ListTagsForResourceCommandInput,
    cb: (err: any, data?: ListTagsForResourceCommandOutput) => void
  ): void;
  listTagsForResource(
    args: ListTagsForResourceCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ListTagsForResourceCommandOutput) => void
  ): void;
  /**
   * <p>Registers an AWS Batch job definition.</p>
   */
  registerJobDefinition(
    args: RegisterJobDefinitionCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<RegisterJobDefinitionCommandOutput>;
  registerJobDefinition(
    args: RegisterJobDefinitionCommandInput,
    cb: (err: any, data?: RegisterJobDefinitionCommandOutput) => void
  ): void;
  registerJobDefinition(
    args: RegisterJobDefinitionCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: RegisterJobDefinitionCommandOutput) => void
  ): void;
  /**
   * <p>Submits an AWS Batch job from a job definition. Parameters that are specified during <a>SubmitJob</a>
   *    override parameters defined in the job definition. vCPU and memory requirements that are specified in the
   *     <code>ResourceRequirements</code> objects in the job definition are the exception. They can't be overridden this way
   *    using the <code>memory</code> and <code>vcpus</code> parameters. Rather, you must specify updates to job definition
   *    parameters in a <code>ResourceRequirements</code> object that's included in the <code>containerOverrides</code>
   *    parameter.</p>
   *          <important>
   *             <p>Jobs that run on Fargate resources can't be guaranteed to run for more than 14 days. This is because, after 14
   *     days, Fargate resources might become unavailable and job might be terminated.</p>
   *          </important>
   */
  submitJob(args: SubmitJobCommandInput, options?: __HttpHandlerOptions): Promise<SubmitJobCommandOutput>;
  submitJob(args: SubmitJobCommandInput, cb: (err: any, data?: SubmitJobCommandOutput) => void): void;
  submitJob(
    args: SubmitJobCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: SubmitJobCommandOutput) => void
  ): void;
  /**
   * <p>Associates the specified tags to a resource with the specified <code>resourceArn</code>. If existing tags on a
   *    resource aren't specified in the request parameters, they aren't changed. When a resource is deleted, the tags
   *    associated with that resource are deleted as well. AWS Batch resources that support tags are compute environments, jobs, job definitions, and job
   *  queues. ARNs for child jobs of array and multi-node parallel (MNP) jobs are not supported.</p>
   */
  tagResource(args: TagResourceCommandInput, options?: __HttpHandlerOptions): Promise<TagResourceCommandOutput>;
  tagResource(args: TagResourceCommandInput, cb: (err: any, data?: TagResourceCommandOutput) => void): void;
  tagResource(
    args: TagResourceCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: TagResourceCommandOutput) => void
  ): void;
  /**
   * <p>Terminates a job in a job queue. Jobs that are in the <code>STARTING</code> or <code>RUNNING</code> state are
   *    terminated, which causes them to transition to <code>FAILED</code>. Jobs that have not progressed to the
   *     <code>STARTING</code> state are cancelled.</p>
   */
  terminateJob(args: TerminateJobCommandInput, options?: __HttpHandlerOptions): Promise<TerminateJobCommandOutput>;
  terminateJob(args: TerminateJobCommandInput, cb: (err: any, data?: TerminateJobCommandOutput) => void): void;
  terminateJob(
    args: TerminateJobCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: TerminateJobCommandOutput) => void
  ): void;
  /**
   * <p>Deletes specified tags from an AWS Batch resource.</p>
   */
  untagResource(args: UntagResourceCommandInput, options?: __HttpHandlerOptions): Promise<UntagResourceCommandOutput>;
  untagResource(args: UntagResourceCommandInput, cb: (err: any, data?: UntagResourceCommandOutput) => void): void;
  untagResource(
    args: UntagResourceCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: UntagResourceCommandOutput) => void
  ): void;
  /**
   * <p>Updates an AWS Batch compute environment.</p>
   */
  updateComputeEnvironment(
    args: UpdateComputeEnvironmentCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<UpdateComputeEnvironmentCommandOutput>;
  updateComputeEnvironment(
    args: UpdateComputeEnvironmentCommandInput,
    cb: (err: any, data?: UpdateComputeEnvironmentCommandOutput) => void
  ): void;
  updateComputeEnvironment(
    args: UpdateComputeEnvironmentCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: UpdateComputeEnvironmentCommandOutput) => void
  ): void;
  /**
   * <p>Updates a job queue.</p>
   */
  updateJobQueue(
    args: UpdateJobQueueCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<UpdateJobQueueCommandOutput>;
  updateJobQueue(args: UpdateJobQueueCommandInput, cb: (err: any, data?: UpdateJobQueueCommandOutput) => void): void;
  updateJobQueue(
    args: UpdateJobQueueCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: UpdateJobQueueCommandOutput) => void
  ): void;
}
