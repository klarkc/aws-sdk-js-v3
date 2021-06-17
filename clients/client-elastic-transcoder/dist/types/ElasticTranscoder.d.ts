import { ElasticTranscoderClient } from "./ElasticTranscoderClient";
import { CancelJobCommandInput, CancelJobCommandOutput } from "./commands/CancelJobCommand";
import { CreateJobCommandInput, CreateJobCommandOutput } from "./commands/CreateJobCommand";
import { CreatePipelineCommandInput, CreatePipelineCommandOutput } from "./commands/CreatePipelineCommand";
import { CreatePresetCommandInput, CreatePresetCommandOutput } from "./commands/CreatePresetCommand";
import { DeletePipelineCommandInput, DeletePipelineCommandOutput } from "./commands/DeletePipelineCommand";
import { DeletePresetCommandInput, DeletePresetCommandOutput } from "./commands/DeletePresetCommand";
import { ListJobsByPipelineCommandInput, ListJobsByPipelineCommandOutput } from "./commands/ListJobsByPipelineCommand";
import { ListJobsByStatusCommandInput, ListJobsByStatusCommandOutput } from "./commands/ListJobsByStatusCommand";
import { ListPipelinesCommandInput, ListPipelinesCommandOutput } from "./commands/ListPipelinesCommand";
import { ListPresetsCommandInput, ListPresetsCommandOutput } from "./commands/ListPresetsCommand";
import { ReadJobCommandInput, ReadJobCommandOutput } from "./commands/ReadJobCommand";
import { ReadPipelineCommandInput, ReadPipelineCommandOutput } from "./commands/ReadPipelineCommand";
import { ReadPresetCommandInput, ReadPresetCommandOutput } from "./commands/ReadPresetCommand";
import { TestRoleCommandInput, TestRoleCommandOutput } from "./commands/TestRoleCommand";
import { UpdatePipelineCommandInput, UpdatePipelineCommandOutput } from "./commands/UpdatePipelineCommand";
import { UpdatePipelineNotificationsCommandInput, UpdatePipelineNotificationsCommandOutput } from "./commands/UpdatePipelineNotificationsCommand";
import { UpdatePipelineStatusCommandInput, UpdatePipelineStatusCommandOutput } from "./commands/UpdatePipelineStatusCommand";
import { HttpHandlerOptions as __HttpHandlerOptions } from "@aws-sdk/types";
/**
 * <fullname>AWS Elastic Transcoder Service</fullname>
 *         <p>The AWS Elastic Transcoder Service.</p>
 */
export declare class ElasticTranscoder extends ElasticTranscoderClient {
    /**
     * <p>The CancelJob operation cancels an unfinished job.</p>
     *         <note>
     *             <p>You can only cancel a job that has a status of <code>Submitted</code>. To prevent a
     *             pipeline from starting to process a job while you're getting the job identifier, use
     *                 <a>UpdatePipelineStatus</a> to temporarily pause the pipeline.</p>
     *          </note>
     */
    cancelJob(args: CancelJobCommandInput, options?: __HttpHandlerOptions): Promise<CancelJobCommandOutput>;
    cancelJob(args: CancelJobCommandInput, cb: (err: any, data?: CancelJobCommandOutput) => void): void;
    cancelJob(args: CancelJobCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: CancelJobCommandOutput) => void): void;
    /**
     * <p>When you create a job, Elastic Transcoder returns JSON data that includes the values that you specified
     *             plus information about the job that is created.</p>
     *         <p>If you have specified more than one output for your jobs (for example, one output for the
     *             Kindle Fire and another output for the Apple iPhone 4s), you currently must use the Elastic Transcoder API to
     *             list the jobs (as opposed to the AWS Console).</p>
     */
    createJob(args: CreateJobCommandInput, options?: __HttpHandlerOptions): Promise<CreateJobCommandOutput>;
    createJob(args: CreateJobCommandInput, cb: (err: any, data?: CreateJobCommandOutput) => void): void;
    createJob(args: CreateJobCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: CreateJobCommandOutput) => void): void;
    /**
     * <p>The CreatePipeline operation creates a pipeline with settings that you specify.</p>
     */
    createPipeline(args: CreatePipelineCommandInput, options?: __HttpHandlerOptions): Promise<CreatePipelineCommandOutput>;
    createPipeline(args: CreatePipelineCommandInput, cb: (err: any, data?: CreatePipelineCommandOutput) => void): void;
    createPipeline(args: CreatePipelineCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: CreatePipelineCommandOutput) => void): void;
    /**
     * <p>The CreatePreset operation creates a preset with settings that you specify.</p>
     *         <important>
     *             <p>Elastic Transcoder checks the CreatePreset settings to ensure that they meet Elastic Transcoder requirements
     *             and to determine whether they comply with H.264 standards. If your settings are not
     *             valid for Elastic Transcoder, Elastic Transcoder returns an HTTP 400 response (<code>ValidationException</code>) and
     *             does not create the preset. If the settings are valid for Elastic Transcoder but aren't strictly
     *             compliant with the H.264 standard, Elastic Transcoder creates the preset and returns a warning message
     *             in the response. This helps you determine whether your settings comply with the H.264
     *             standard while giving you greater flexibility with respect to the video that Elastic Transcoder
     *             produces.</p>
     *          </important>
     *         <p>Elastic Transcoder uses the H.264 video-compression format. For more information, see the International
     *             Telecommunication Union publication <i>Recommendation ITU-T H.264: Advanced video coding
     *                 for generic audiovisual services</i>.</p>
     */
    createPreset(args: CreatePresetCommandInput, options?: __HttpHandlerOptions): Promise<CreatePresetCommandOutput>;
    createPreset(args: CreatePresetCommandInput, cb: (err: any, data?: CreatePresetCommandOutput) => void): void;
    createPreset(args: CreatePresetCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: CreatePresetCommandOutput) => void): void;
    /**
     * <p>The DeletePipeline operation removes a pipeline.</p>
     *         <p> You can only delete a pipeline that has never been used or that is not currently in use
     *             (doesn't contain any active jobs). If the pipeline is currently in use,
     *                 <code>DeletePipeline</code> returns an error. </p>
     */
    deletePipeline(args: DeletePipelineCommandInput, options?: __HttpHandlerOptions): Promise<DeletePipelineCommandOutput>;
    deletePipeline(args: DeletePipelineCommandInput, cb: (err: any, data?: DeletePipelineCommandOutput) => void): void;
    deletePipeline(args: DeletePipelineCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: DeletePipelineCommandOutput) => void): void;
    /**
     * <p>The DeletePreset operation removes a preset that you've added in an AWS region.</p>
     *         <note>
     *             <p>You can't delete the default presets that are included with Elastic Transcoder.</p>
     *         </note>
     */
    deletePreset(args: DeletePresetCommandInput, options?: __HttpHandlerOptions): Promise<DeletePresetCommandOutput>;
    deletePreset(args: DeletePresetCommandInput, cb: (err: any, data?: DeletePresetCommandOutput) => void): void;
    deletePreset(args: DeletePresetCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: DeletePresetCommandOutput) => void): void;
    /**
     * <p>The ListJobsByPipeline operation gets a list of the jobs currently in a pipeline.</p>
     *         <p>Elastic Transcoder returns all of the jobs currently in the specified pipeline. The response body contains
     *             one element for each job that satisfies the search criteria.</p>
     */
    listJobsByPipeline(args: ListJobsByPipelineCommandInput, options?: __HttpHandlerOptions): Promise<ListJobsByPipelineCommandOutput>;
    listJobsByPipeline(args: ListJobsByPipelineCommandInput, cb: (err: any, data?: ListJobsByPipelineCommandOutput) => void): void;
    listJobsByPipeline(args: ListJobsByPipelineCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: ListJobsByPipelineCommandOutput) => void): void;
    /**
     * <p>The ListJobsByStatus operation gets a list of jobs that have a specified status. The response
     *             body contains one element for each job that satisfies the search criteria.</p>
     */
    listJobsByStatus(args: ListJobsByStatusCommandInput, options?: __HttpHandlerOptions): Promise<ListJobsByStatusCommandOutput>;
    listJobsByStatus(args: ListJobsByStatusCommandInput, cb: (err: any, data?: ListJobsByStatusCommandOutput) => void): void;
    listJobsByStatus(args: ListJobsByStatusCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: ListJobsByStatusCommandOutput) => void): void;
    /**
     * <p>The ListPipelines operation gets a list of the pipelines associated with the current AWS account.</p>
     */
    listPipelines(args: ListPipelinesCommandInput, options?: __HttpHandlerOptions): Promise<ListPipelinesCommandOutput>;
    listPipelines(args: ListPipelinesCommandInput, cb: (err: any, data?: ListPipelinesCommandOutput) => void): void;
    listPipelines(args: ListPipelinesCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: ListPipelinesCommandOutput) => void): void;
    /**
     * <p>The ListPresets operation gets a list of the default presets included with Elastic Transcoder and the presets that
     *             you've added in an AWS region.</p>
     */
    listPresets(args: ListPresetsCommandInput, options?: __HttpHandlerOptions): Promise<ListPresetsCommandOutput>;
    listPresets(args: ListPresetsCommandInput, cb: (err: any, data?: ListPresetsCommandOutput) => void): void;
    listPresets(args: ListPresetsCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: ListPresetsCommandOutput) => void): void;
    /**
     * <p>The ReadJob operation returns detailed information about a job.</p>
     */
    readJob(args: ReadJobCommandInput, options?: __HttpHandlerOptions): Promise<ReadJobCommandOutput>;
    readJob(args: ReadJobCommandInput, cb: (err: any, data?: ReadJobCommandOutput) => void): void;
    readJob(args: ReadJobCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: ReadJobCommandOutput) => void): void;
    /**
     * <p>The ReadPipeline operation gets detailed information about a pipeline.</p>
     */
    readPipeline(args: ReadPipelineCommandInput, options?: __HttpHandlerOptions): Promise<ReadPipelineCommandOutput>;
    readPipeline(args: ReadPipelineCommandInput, cb: (err: any, data?: ReadPipelineCommandOutput) => void): void;
    readPipeline(args: ReadPipelineCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: ReadPipelineCommandOutput) => void): void;
    /**
     * <p>The ReadPreset operation gets detailed information about a preset.</p>
     */
    readPreset(args: ReadPresetCommandInput, options?: __HttpHandlerOptions): Promise<ReadPresetCommandOutput>;
    readPreset(args: ReadPresetCommandInput, cb: (err: any, data?: ReadPresetCommandOutput) => void): void;
    readPreset(args: ReadPresetCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: ReadPresetCommandOutput) => void): void;
    /**
     * @deprecated
     *
     * <p>The TestRole operation tests the IAM role used to create the pipeline.</p>
     *         <p>The <code>TestRole</code> action lets you determine whether the IAM role you are using
     *             has sufficient permissions to let Elastic Transcoder perform tasks associated with the transcoding
     *             process. The action attempts to assume the specified IAM role, checks read access to the
     *             input and output buckets, and tries to send a test notification to Amazon SNS topics
     *             that you specify.</p>
     */
    testRole(args: TestRoleCommandInput, options?: __HttpHandlerOptions): Promise<TestRoleCommandOutput>;
    testRole(args: TestRoleCommandInput, cb: (err: any, data?: TestRoleCommandOutput) => void): void;
    testRole(args: TestRoleCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: TestRoleCommandOutput) => void): void;
    /**
     * <p> Use the <code>UpdatePipeline</code> operation to update settings for a pipeline.</p>
     *         <important>
     *             <p>When you change pipeline settings, your changes take effect immediately.
     *             Jobs that you have already submitted and that Elastic Transcoder has not started to process are
     *             affected in addition to jobs that you submit after you change settings. </p>
     *          </important>
     */
    updatePipeline(args: UpdatePipelineCommandInput, options?: __HttpHandlerOptions): Promise<UpdatePipelineCommandOutput>;
    updatePipeline(args: UpdatePipelineCommandInput, cb: (err: any, data?: UpdatePipelineCommandOutput) => void): void;
    updatePipeline(args: UpdatePipelineCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: UpdatePipelineCommandOutput) => void): void;
    /**
     * <p>With the UpdatePipelineNotifications operation, you can update Amazon Simple Notification Service (Amazon SNS) notifications for a pipeline.</p>
     *         <p>When you update notifications for a pipeline, Elastic Transcoder returns the values that you specified in the request.</p>
     */
    updatePipelineNotifications(args: UpdatePipelineNotificationsCommandInput, options?: __HttpHandlerOptions): Promise<UpdatePipelineNotificationsCommandOutput>;
    updatePipelineNotifications(args: UpdatePipelineNotificationsCommandInput, cb: (err: any, data?: UpdatePipelineNotificationsCommandOutput) => void): void;
    updatePipelineNotifications(args: UpdatePipelineNotificationsCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: UpdatePipelineNotificationsCommandOutput) => void): void;
    /**
     * <p>The UpdatePipelineStatus operation pauses or reactivates a pipeline, so that the pipeline
     *             stops or restarts the processing of jobs.</p>
     *         <p>Changing the pipeline status is useful if you want to cancel one or more jobs. You can't
     *             cancel jobs after Elastic Transcoder has started processing them; if you pause the pipeline to which
     *             you submitted the jobs, you have more time to get the job IDs for the jobs that you want
     *             to cancel, and to send a <a>CancelJob</a> request. </p>
     */
    updatePipelineStatus(args: UpdatePipelineStatusCommandInput, options?: __HttpHandlerOptions): Promise<UpdatePipelineStatusCommandOutput>;
    updatePipelineStatus(args: UpdatePipelineStatusCommandInput, cb: (err: any, data?: UpdatePipelineStatusCommandOutput) => void): void;
    updatePipelineStatus(args: UpdatePipelineStatusCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: UpdatePipelineStatusCommandOutput) => void): void;
}
