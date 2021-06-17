import { SmithyException as __SmithyException } from "@aws-sdk/smithy-client";
import { MetadataBearer as $MetadataBearer } from "@aws-sdk/types";
/**
 * <p>The certificate is invalid.</p>
 */
export interface CertificateValidationException extends __SmithyException, $MetadataBearer {
    name: "CertificateValidationException";
    $fault: "client";
    /**
     * <p>Additional information about the exception.</p>
     */
    message?: string;
}
export declare namespace CertificateValidationException {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: CertificateValidationException) => any;
}
export interface DescribeJobExecutionRequest {
    /**
     * <p>The unique identifier assigned to this job when it was created.</p>
     */
    jobId: string | undefined;
    /**
     * <p>The thing name associated with the device the job execution is running on.</p>
     */
    thingName: string | undefined;
    /**
     * <p>Optional. When set to true, the response contains the job document. The default is false.</p>
     */
    includeJobDocument?: boolean;
    /**
     * <p>Optional. A number that identifies a particular job execution on a particular device. If not specified,
     *          the latest job execution is returned.</p>
     */
    executionNumber?: number;
}
export declare namespace DescribeJobExecutionRequest {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: DescribeJobExecutionRequest) => any;
}
export declare enum JobExecutionStatus {
    CANCELED = "CANCELED",
    FAILED = "FAILED",
    IN_PROGRESS = "IN_PROGRESS",
    QUEUED = "QUEUED",
    REJECTED = "REJECTED",
    REMOVED = "REMOVED",
    SUCCEEDED = "SUCCEEDED",
    TIMED_OUT = "TIMED_OUT"
}
/**
 * <p>Contains data about a job execution.</p>
 */
export interface JobExecution {
    /**
     * <p>The unique identifier you assigned to this job when it was created.</p>
     */
    jobId?: string;
    /**
     * <p>The name of the thing that is executing the job.</p>
     */
    thingName?: string;
    /**
     * <p>The status of the job execution. Can be one of: "QUEUED", "IN_PROGRESS", "FAILED", "SUCCESS", "CANCELED",
     *          "REJECTED", or "REMOVED".</p>
     */
    status?: JobExecutionStatus | string;
    /**
     * <p>A collection of name/value pairs that describe the status of the job execution.</p>
     */
    statusDetails?: {
        [key: string]: string;
    };
    /**
     * <p>The time, in milliseconds since the epoch, when the job execution was enqueued.</p>
     */
    queuedAt?: number;
    /**
     * <p>The time, in milliseconds since the epoch, when the job execution was started.</p>
     */
    startedAt?: number;
    /**
     * <p>The time, in milliseconds since the epoch, when the job execution was last updated. </p>
     */
    lastUpdatedAt?: number;
    /**
     * <p>The estimated number of seconds that remain before the job execution status will be
     *            changed to <code>TIMED_OUT</code>.</p>
     */
    approximateSecondsBeforeTimedOut?: number;
    /**
     * <p>The version of the job execution. Job execution versions are incremented each time they are updated by a
     *          device.</p>
     */
    versionNumber?: number;
    /**
     * <p>A number that identifies a particular job execution on a particular device. It can be used later in
     *          commands that return or update job execution information.</p>
     */
    executionNumber?: number;
    /**
     * <p>The content of the job document.</p>
     */
    jobDocument?: string;
}
export declare namespace JobExecution {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: JobExecution) => any;
}
export interface DescribeJobExecutionResponse {
    /**
     * <p>Contains data about a job execution.</p>
     */
    execution?: JobExecution;
}
export declare namespace DescribeJobExecutionResponse {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: DescribeJobExecutionResponse) => any;
}
/**
 * <p>The contents of the request were invalid. For example, this code is returned when an UpdateJobExecution request contains invalid status details. The message contains details about the error.</p>
 */
export interface InvalidRequestException extends __SmithyException, $MetadataBearer {
    name: "InvalidRequestException";
    $fault: "client";
    /**
     * <p>The message for the exception.</p>
     */
    message?: string;
}
export declare namespace InvalidRequestException {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: InvalidRequestException) => any;
}
/**
 * <p>The specified resource does not exist.</p>
 */
export interface ResourceNotFoundException extends __SmithyException, $MetadataBearer {
    name: "ResourceNotFoundException";
    $fault: "client";
    /**
     * <p>The message for the exception.</p>
     */
    message?: string;
}
export declare namespace ResourceNotFoundException {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: ResourceNotFoundException) => any;
}
/**
 * <p>The service is temporarily unavailable.</p>
 */
export interface ServiceUnavailableException extends __SmithyException, $MetadataBearer {
    name: "ServiceUnavailableException";
    $fault: "server";
    /**
     * <p>The message for the exception.</p>
     */
    message?: string;
}
export declare namespace ServiceUnavailableException {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: ServiceUnavailableException) => any;
}
/**
 * <p>The job is in a terminal state.</p>
 */
export interface TerminalStateException extends __SmithyException, $MetadataBearer {
    name: "TerminalStateException";
    $fault: "client";
    message?: string;
}
export declare namespace TerminalStateException {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: TerminalStateException) => any;
}
/**
 * <p>The rate exceeds the limit.</p>
 */
export interface ThrottlingException extends __SmithyException, $MetadataBearer {
    name: "ThrottlingException";
    $fault: "client";
    /**
     * <p>The message associated with the exception.</p>
     */
    message?: string;
    /**
     * <p>The payload associated with the exception.</p>
     */
    payload?: Uint8Array;
}
export declare namespace ThrottlingException {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: ThrottlingException) => any;
}
export interface GetPendingJobExecutionsRequest {
    /**
     * <p>The name of the thing that is executing the job.</p>
     */
    thingName: string | undefined;
}
export declare namespace GetPendingJobExecutionsRequest {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: GetPendingJobExecutionsRequest) => any;
}
/**
 * <p>Contains a subset of information about a job execution.</p>
 */
export interface JobExecutionSummary {
    /**
     * <p>The unique identifier you assigned to this job when it was created.</p>
     */
    jobId?: string;
    /**
     * <p>The time, in milliseconds since the epoch, when the job execution was enqueued.</p>
     */
    queuedAt?: number;
    /**
     * <p>The time, in milliseconds since the epoch, when the job execution started.</p>
     */
    startedAt?: number;
    /**
     * <p>The time, in milliseconds since the epoch, when the job execution was last updated.</p>
     */
    lastUpdatedAt?: number;
    /**
     * <p>The version of the job execution. Job execution versions are incremented each time AWS IoT Jobs receives
     *          an update from a device.</p>
     */
    versionNumber?: number;
    /**
     * <p>A number that identifies a particular job execution on a particular device.</p>
     */
    executionNumber?: number;
}
export declare namespace JobExecutionSummary {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: JobExecutionSummary) => any;
}
export interface GetPendingJobExecutionsResponse {
    /**
     * <p>A list of JobExecutionSummary objects with status IN_PROGRESS.</p>
     */
    inProgressJobs?: JobExecutionSummary[];
    /**
     * <p>A list of JobExecutionSummary objects with status QUEUED.</p>
     */
    queuedJobs?: JobExecutionSummary[];
}
export declare namespace GetPendingJobExecutionsResponse {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: GetPendingJobExecutionsResponse) => any;
}
/**
 * <p>An update attempted to change the job execution to a state that is invalid because of the job execution's
 *          current state (for example, an attempt to change a request in state SUCCESS to state IN_PROGRESS). In this
 *          case, the body of the error message also contains the executionState field.</p>
 */
export interface InvalidStateTransitionException extends __SmithyException, $MetadataBearer {
    name: "InvalidStateTransitionException";
    $fault: "client";
    message?: string;
}
export declare namespace InvalidStateTransitionException {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: InvalidStateTransitionException) => any;
}
export interface StartNextPendingJobExecutionRequest {
    /**
     * <p>The name of the thing associated with the device.</p>
     */
    thingName: string | undefined;
    /**
     * <p>A collection of name/value pairs that describe the status of the job execution. If not specified, the
     *          statusDetails are unchanged.</p>
     */
    statusDetails?: {
        [key: string]: string;
    };
    /**
     * <p>Specifies the amount of time this device has to finish execution of this job. If the job
     *            execution status is not set to a terminal state before this timer expires, or before the
     *            timer is reset (by calling <code>UpdateJobExecution</code>, setting the status to
     *            <code>IN_PROGRESS</code> and specifying a new timeout value in field <code>stepTimeoutInMinutes</code>)
     *            the job execution status will be automatically set to <code>TIMED_OUT</code>.  Note that setting
     *            this timeout has no effect on that job execution timeout which may have been specified when
     *            the job was created (<code>CreateJob</code> using field <code>timeoutConfig</code>).</p>
     */
    stepTimeoutInMinutes?: number;
}
export declare namespace StartNextPendingJobExecutionRequest {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: StartNextPendingJobExecutionRequest) => any;
}
export interface StartNextPendingJobExecutionResponse {
    /**
     * <p>A JobExecution object.</p>
     */
    execution?: JobExecution;
}
export declare namespace StartNextPendingJobExecutionResponse {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: StartNextPendingJobExecutionResponse) => any;
}
export interface UpdateJobExecutionRequest {
    /**
     * <p>The unique identifier assigned to this job when it was created.</p>
     */
    jobId: string | undefined;
    /**
     * <p>The name of the thing associated with the device.</p>
     */
    thingName: string | undefined;
    /**
     * <p>The new status for the job execution (IN_PROGRESS, FAILED, SUCCESS, or REJECTED). This must be specified
     *          on every update.</p>
     */
    status: JobExecutionStatus | string | undefined;
    /**
     * <p> Optional. A collection of name/value pairs that describe the status of the job execution. If not
     *          specified, the statusDetails are unchanged.</p>
     */
    statusDetails?: {
        [key: string]: string;
    };
    /**
     * <p>Specifies the amount of time this device has to finish execution of this job. If the job
     *            execution status is not set to a terminal state before this timer expires, or before the
     *            timer is reset (by again calling <code>UpdateJobExecution</code>, setting the status to
     *            <code>IN_PROGRESS</code> and specifying a new timeout value in this field) the job execution
     *            status will be automatically set to <code>TIMED_OUT</code>.  Note that setting or resetting
     *            this timeout has no effect on that job execution timeout which may have been specified when
     *            the job was created (<code>CreateJob</code> using field <code>timeoutConfig</code>).</p>
     */
    stepTimeoutInMinutes?: number;
    /**
     * <p>Optional. The expected current version of the job execution. Each time you update the job execution, its
     *          version is incremented. If the version of the job execution stored in Jobs does not match, the update is
     *          rejected with a VersionMismatch error, and an ErrorResponse that contains the current job execution status data
     *          is returned. (This makes it unnecessary to perform a separate DescribeJobExecution request in order to obtain
     *          the job execution status data.)</p>
     */
    expectedVersion?: number;
    /**
     * <p>Optional. When included and set to true, the response contains the JobExecutionState data. The default is
     *          false.</p>
     */
    includeJobExecutionState?: boolean;
    /**
     * <p>Optional. When set to true, the response contains the job document. The default is false.</p>
     */
    includeJobDocument?: boolean;
    /**
     * <p>Optional. A number that identifies a particular job execution on a particular device.</p>
     */
    executionNumber?: number;
}
export declare namespace UpdateJobExecutionRequest {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: UpdateJobExecutionRequest) => any;
}
/**
 * <p>Contains data about the state of a job execution.</p>
 */
export interface JobExecutionState {
    /**
     * <p>The status of the job execution. Can be one of: "QUEUED", "IN_PROGRESS", "FAILED", "SUCCESS", "CANCELED",
     *          "REJECTED", or "REMOVED".</p>
     */
    status?: JobExecutionStatus | string;
    /**
     * <p>A collection of name/value pairs that describe the status of the job execution.</p>
     */
    statusDetails?: {
        [key: string]: string;
    };
    /**
     * <p>The version of the job execution. Job execution versions are incremented each time they are updated by a
     *          device.</p>
     */
    versionNumber?: number;
}
export declare namespace JobExecutionState {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: JobExecutionState) => any;
}
export interface UpdateJobExecutionResponse {
    /**
     * <p>A JobExecutionState object.</p>
     */
    executionState?: JobExecutionState;
    /**
     * <p>The contents of the Job Documents.</p>
     */
    jobDocument?: string;
}
export declare namespace UpdateJobExecutionResponse {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: UpdateJobExecutionResponse) => any;
}
