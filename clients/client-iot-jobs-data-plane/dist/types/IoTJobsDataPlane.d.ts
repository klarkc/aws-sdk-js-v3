import { IoTJobsDataPlaneClient } from "./IoTJobsDataPlaneClient";
import { DescribeJobExecutionCommandInput, DescribeJobExecutionCommandOutput } from "./commands/DescribeJobExecutionCommand";
import { GetPendingJobExecutionsCommandInput, GetPendingJobExecutionsCommandOutput } from "./commands/GetPendingJobExecutionsCommand";
import { StartNextPendingJobExecutionCommandInput, StartNextPendingJobExecutionCommandOutput } from "./commands/StartNextPendingJobExecutionCommand";
import { UpdateJobExecutionCommandInput, UpdateJobExecutionCommandOutput } from "./commands/UpdateJobExecutionCommand";
import { HttpHandlerOptions as __HttpHandlerOptions } from "@aws-sdk/types";
/**
 * <p>AWS IoT Jobs is a service that allows you to define a set of jobs — remote operations that are sent to
 *          and executed on one or more devices connected to AWS IoT. For example, you can define a job that instructs a
 *          set of devices to download and install application or firmware updates, reboot, rotate certificates, or perform
 *          remote troubleshooting operations.</p>
 *          <p> To create a job, you make a job document which is a description of the remote operations to be
 *          performed, and you specify a list of targets that should perform the operations. The targets can be individual
 *          things, thing groups or both.</p>
 *          <p> AWS IoT Jobs sends a message to inform the targets that a job is available. The target starts the
 *          execution of the job by downloading the job document, performing the operations it specifies, and reporting its
 *          progress to AWS IoT. The Jobs service provides commands to track the progress of a job on a specific target and
 *          for all the targets of the job</p>
 */
export declare class IoTJobsDataPlane extends IoTJobsDataPlaneClient {
    /**
     * <p>Gets details of a job execution.</p>
     */
    describeJobExecution(args: DescribeJobExecutionCommandInput, options?: __HttpHandlerOptions): Promise<DescribeJobExecutionCommandOutput>;
    describeJobExecution(args: DescribeJobExecutionCommandInput, cb: (err: any, data?: DescribeJobExecutionCommandOutput) => void): void;
    describeJobExecution(args: DescribeJobExecutionCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: DescribeJobExecutionCommandOutput) => void): void;
    /**
     * <p>Gets the list of all jobs for a thing that are not in a terminal status.</p>
     */
    getPendingJobExecutions(args: GetPendingJobExecutionsCommandInput, options?: __HttpHandlerOptions): Promise<GetPendingJobExecutionsCommandOutput>;
    getPendingJobExecutions(args: GetPendingJobExecutionsCommandInput, cb: (err: any, data?: GetPendingJobExecutionsCommandOutput) => void): void;
    getPendingJobExecutions(args: GetPendingJobExecutionsCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: GetPendingJobExecutionsCommandOutput) => void): void;
    /**
     * <p>Gets and starts the next pending (status IN_PROGRESS or QUEUED) job execution for a thing.</p>
     */
    startNextPendingJobExecution(args: StartNextPendingJobExecutionCommandInput, options?: __HttpHandlerOptions): Promise<StartNextPendingJobExecutionCommandOutput>;
    startNextPendingJobExecution(args: StartNextPendingJobExecutionCommandInput, cb: (err: any, data?: StartNextPendingJobExecutionCommandOutput) => void): void;
    startNextPendingJobExecution(args: StartNextPendingJobExecutionCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: StartNextPendingJobExecutionCommandOutput) => void): void;
    /**
     * <p>Updates the status of a job execution.</p>
     */
    updateJobExecution(args: UpdateJobExecutionCommandInput, options?: __HttpHandlerOptions): Promise<UpdateJobExecutionCommandOutput>;
    updateJobExecution(args: UpdateJobExecutionCommandInput, cb: (err: any, data?: UpdateJobExecutionCommandOutput) => void): void;
    updateJobExecution(args: UpdateJobExecutionCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: UpdateJobExecutionCommandOutput) => void): void;
}
