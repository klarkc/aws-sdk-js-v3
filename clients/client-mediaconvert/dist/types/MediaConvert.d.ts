import { MediaConvertClient } from "./MediaConvertClient";
import { AssociateCertificateCommandInput, AssociateCertificateCommandOutput } from "./commands/AssociateCertificateCommand";
import { CancelJobCommandInput, CancelJobCommandOutput } from "./commands/CancelJobCommand";
import { CreateJobCommandInput, CreateJobCommandOutput } from "./commands/CreateJobCommand";
import { CreateJobTemplateCommandInput, CreateJobTemplateCommandOutput } from "./commands/CreateJobTemplateCommand";
import { CreatePresetCommandInput, CreatePresetCommandOutput } from "./commands/CreatePresetCommand";
import { CreateQueueCommandInput, CreateQueueCommandOutput } from "./commands/CreateQueueCommand";
import { DeleteJobTemplateCommandInput, DeleteJobTemplateCommandOutput } from "./commands/DeleteJobTemplateCommand";
import { DeletePresetCommandInput, DeletePresetCommandOutput } from "./commands/DeletePresetCommand";
import { DeleteQueueCommandInput, DeleteQueueCommandOutput } from "./commands/DeleteQueueCommand";
import { DescribeEndpointsCommandInput, DescribeEndpointsCommandOutput } from "./commands/DescribeEndpointsCommand";
import { DisassociateCertificateCommandInput, DisassociateCertificateCommandOutput } from "./commands/DisassociateCertificateCommand";
import { GetJobCommandInput, GetJobCommandOutput } from "./commands/GetJobCommand";
import { GetJobTemplateCommandInput, GetJobTemplateCommandOutput } from "./commands/GetJobTemplateCommand";
import { GetPresetCommandInput, GetPresetCommandOutput } from "./commands/GetPresetCommand";
import { GetQueueCommandInput, GetQueueCommandOutput } from "./commands/GetQueueCommand";
import { ListJobTemplatesCommandInput, ListJobTemplatesCommandOutput } from "./commands/ListJobTemplatesCommand";
import { ListJobsCommandInput, ListJobsCommandOutput } from "./commands/ListJobsCommand";
import { ListPresetsCommandInput, ListPresetsCommandOutput } from "./commands/ListPresetsCommand";
import { ListQueuesCommandInput, ListQueuesCommandOutput } from "./commands/ListQueuesCommand";
import { ListTagsForResourceCommandInput, ListTagsForResourceCommandOutput } from "./commands/ListTagsForResourceCommand";
import { TagResourceCommandInput, TagResourceCommandOutput } from "./commands/TagResourceCommand";
import { UntagResourceCommandInput, UntagResourceCommandOutput } from "./commands/UntagResourceCommand";
import { UpdateJobTemplateCommandInput, UpdateJobTemplateCommandOutput } from "./commands/UpdateJobTemplateCommand";
import { UpdatePresetCommandInput, UpdatePresetCommandOutput } from "./commands/UpdatePresetCommand";
import { UpdateQueueCommandInput, UpdateQueueCommandOutput } from "./commands/UpdateQueueCommand";
import { HttpHandlerOptions as __HttpHandlerOptions } from "@aws-sdk/types";
/**
 * AWS Elemental MediaConvert
 */
export declare class MediaConvert extends MediaConvertClient {
    /**
     * Associates an AWS Certificate Manager (ACM) Amazon Resource Name (ARN) with AWS Elemental MediaConvert.
     */
    associateCertificate(args: AssociateCertificateCommandInput, options?: __HttpHandlerOptions): Promise<AssociateCertificateCommandOutput>;
    associateCertificate(args: AssociateCertificateCommandInput, cb: (err: any, data?: AssociateCertificateCommandOutput) => void): void;
    associateCertificate(args: AssociateCertificateCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: AssociateCertificateCommandOutput) => void): void;
    /**
     * Permanently cancel a job. Once you have canceled a job, you can't start it again.
     */
    cancelJob(args: CancelJobCommandInput, options?: __HttpHandlerOptions): Promise<CancelJobCommandOutput>;
    cancelJob(args: CancelJobCommandInput, cb: (err: any, data?: CancelJobCommandOutput) => void): void;
    cancelJob(args: CancelJobCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: CancelJobCommandOutput) => void): void;
    /**
     * Create a new transcoding job. For information about jobs and job settings, see the User Guide at http://docs.aws.amazon.com/mediaconvert/latest/ug/what-is.html
     */
    createJob(args: CreateJobCommandInput, options?: __HttpHandlerOptions): Promise<CreateJobCommandOutput>;
    createJob(args: CreateJobCommandInput, cb: (err: any, data?: CreateJobCommandOutput) => void): void;
    createJob(args: CreateJobCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: CreateJobCommandOutput) => void): void;
    /**
     * Create a new job template. For information about job templates see the User Guide at http://docs.aws.amazon.com/mediaconvert/latest/ug/what-is.html
     */
    createJobTemplate(args: CreateJobTemplateCommandInput, options?: __HttpHandlerOptions): Promise<CreateJobTemplateCommandOutput>;
    createJobTemplate(args: CreateJobTemplateCommandInput, cb: (err: any, data?: CreateJobTemplateCommandOutput) => void): void;
    createJobTemplate(args: CreateJobTemplateCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: CreateJobTemplateCommandOutput) => void): void;
    /**
     * Create a new preset. For information about job templates see the User Guide at http://docs.aws.amazon.com/mediaconvert/latest/ug/what-is.html
     */
    createPreset(args: CreatePresetCommandInput, options?: __HttpHandlerOptions): Promise<CreatePresetCommandOutput>;
    createPreset(args: CreatePresetCommandInput, cb: (err: any, data?: CreatePresetCommandOutput) => void): void;
    createPreset(args: CreatePresetCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: CreatePresetCommandOutput) => void): void;
    /**
     * Create a new transcoding queue. For information about queues, see Working With Queues in the User Guide at https://docs.aws.amazon.com/mediaconvert/latest/ug/working-with-queues.html
     */
    createQueue(args: CreateQueueCommandInput, options?: __HttpHandlerOptions): Promise<CreateQueueCommandOutput>;
    createQueue(args: CreateQueueCommandInput, cb: (err: any, data?: CreateQueueCommandOutput) => void): void;
    createQueue(args: CreateQueueCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: CreateQueueCommandOutput) => void): void;
    /**
     * Permanently delete a job template you have created.
     */
    deleteJobTemplate(args: DeleteJobTemplateCommandInput, options?: __HttpHandlerOptions): Promise<DeleteJobTemplateCommandOutput>;
    deleteJobTemplate(args: DeleteJobTemplateCommandInput, cb: (err: any, data?: DeleteJobTemplateCommandOutput) => void): void;
    deleteJobTemplate(args: DeleteJobTemplateCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: DeleteJobTemplateCommandOutput) => void): void;
    /**
     * Permanently delete a preset you have created.
     */
    deletePreset(args: DeletePresetCommandInput, options?: __HttpHandlerOptions): Promise<DeletePresetCommandOutput>;
    deletePreset(args: DeletePresetCommandInput, cb: (err: any, data?: DeletePresetCommandOutput) => void): void;
    deletePreset(args: DeletePresetCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: DeletePresetCommandOutput) => void): void;
    /**
     * Permanently delete a queue you have created.
     */
    deleteQueue(args: DeleteQueueCommandInput, options?: __HttpHandlerOptions): Promise<DeleteQueueCommandOutput>;
    deleteQueue(args: DeleteQueueCommandInput, cb: (err: any, data?: DeleteQueueCommandOutput) => void): void;
    deleteQueue(args: DeleteQueueCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: DeleteQueueCommandOutput) => void): void;
    /**
     * Send an request with an empty body to the regional API endpoint to get your account API endpoint.
     */
    describeEndpoints(args: DescribeEndpointsCommandInput, options?: __HttpHandlerOptions): Promise<DescribeEndpointsCommandOutput>;
    describeEndpoints(args: DescribeEndpointsCommandInput, cb: (err: any, data?: DescribeEndpointsCommandOutput) => void): void;
    describeEndpoints(args: DescribeEndpointsCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: DescribeEndpointsCommandOutput) => void): void;
    /**
     * Removes an association between the Amazon Resource Name (ARN) of an AWS Certificate Manager (ACM) certificate and an AWS Elemental MediaConvert resource.
     */
    disassociateCertificate(args: DisassociateCertificateCommandInput, options?: __HttpHandlerOptions): Promise<DisassociateCertificateCommandOutput>;
    disassociateCertificate(args: DisassociateCertificateCommandInput, cb: (err: any, data?: DisassociateCertificateCommandOutput) => void): void;
    disassociateCertificate(args: DisassociateCertificateCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: DisassociateCertificateCommandOutput) => void): void;
    /**
     * Retrieve the JSON for a specific completed transcoding job.
     */
    getJob(args: GetJobCommandInput, options?: __HttpHandlerOptions): Promise<GetJobCommandOutput>;
    getJob(args: GetJobCommandInput, cb: (err: any, data?: GetJobCommandOutput) => void): void;
    getJob(args: GetJobCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: GetJobCommandOutput) => void): void;
    /**
     * Retrieve the JSON for a specific job template.
     */
    getJobTemplate(args: GetJobTemplateCommandInput, options?: __HttpHandlerOptions): Promise<GetJobTemplateCommandOutput>;
    getJobTemplate(args: GetJobTemplateCommandInput, cb: (err: any, data?: GetJobTemplateCommandOutput) => void): void;
    getJobTemplate(args: GetJobTemplateCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: GetJobTemplateCommandOutput) => void): void;
    /**
     * Retrieve the JSON for a specific preset.
     */
    getPreset(args: GetPresetCommandInput, options?: __HttpHandlerOptions): Promise<GetPresetCommandOutput>;
    getPreset(args: GetPresetCommandInput, cb: (err: any, data?: GetPresetCommandOutput) => void): void;
    getPreset(args: GetPresetCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: GetPresetCommandOutput) => void): void;
    /**
     * Retrieve the JSON for a specific queue.
     */
    getQueue(args: GetQueueCommandInput, options?: __HttpHandlerOptions): Promise<GetQueueCommandOutput>;
    getQueue(args: GetQueueCommandInput, cb: (err: any, data?: GetQueueCommandOutput) => void): void;
    getQueue(args: GetQueueCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: GetQueueCommandOutput) => void): void;
    /**
     * Retrieve a JSON array of up to twenty of your most recently created jobs. This array includes in-process, completed, and errored jobs. This will return the jobs themselves, not just a list of the jobs. To retrieve the twenty next most recent jobs, use the nextToken string returned with the array.
     */
    listJobs(args: ListJobsCommandInput, options?: __HttpHandlerOptions): Promise<ListJobsCommandOutput>;
    listJobs(args: ListJobsCommandInput, cb: (err: any, data?: ListJobsCommandOutput) => void): void;
    listJobs(args: ListJobsCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: ListJobsCommandOutput) => void): void;
    /**
     * Retrieve a JSON array of up to twenty of your job templates. This will return the templates themselves, not just a list of them. To retrieve the next twenty templates, use the nextToken string returned with the array
     */
    listJobTemplates(args: ListJobTemplatesCommandInput, options?: __HttpHandlerOptions): Promise<ListJobTemplatesCommandOutput>;
    listJobTemplates(args: ListJobTemplatesCommandInput, cb: (err: any, data?: ListJobTemplatesCommandOutput) => void): void;
    listJobTemplates(args: ListJobTemplatesCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: ListJobTemplatesCommandOutput) => void): void;
    /**
     * Retrieve a JSON array of up to twenty of your presets. This will return the presets themselves, not just a list of them. To retrieve the next twenty presets, use the nextToken string returned with the array.
     */
    listPresets(args: ListPresetsCommandInput, options?: __HttpHandlerOptions): Promise<ListPresetsCommandOutput>;
    listPresets(args: ListPresetsCommandInput, cb: (err: any, data?: ListPresetsCommandOutput) => void): void;
    listPresets(args: ListPresetsCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: ListPresetsCommandOutput) => void): void;
    /**
     * Retrieve a JSON array of up to twenty of your queues. This will return the queues themselves, not just a list of them. To retrieve the next twenty queues, use the nextToken string returned with the array.
     */
    listQueues(args: ListQueuesCommandInput, options?: __HttpHandlerOptions): Promise<ListQueuesCommandOutput>;
    listQueues(args: ListQueuesCommandInput, cb: (err: any, data?: ListQueuesCommandOutput) => void): void;
    listQueues(args: ListQueuesCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: ListQueuesCommandOutput) => void): void;
    /**
     * Retrieve the tags for a MediaConvert resource.
     */
    listTagsForResource(args: ListTagsForResourceCommandInput, options?: __HttpHandlerOptions): Promise<ListTagsForResourceCommandOutput>;
    listTagsForResource(args: ListTagsForResourceCommandInput, cb: (err: any, data?: ListTagsForResourceCommandOutput) => void): void;
    listTagsForResource(args: ListTagsForResourceCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: ListTagsForResourceCommandOutput) => void): void;
    /**
     * Add tags to a MediaConvert queue, preset, or job template. For information about tagging, see the User Guide at https://docs.aws.amazon.com/mediaconvert/latest/ug/tagging-resources.html
     */
    tagResource(args: TagResourceCommandInput, options?: __HttpHandlerOptions): Promise<TagResourceCommandOutput>;
    tagResource(args: TagResourceCommandInput, cb: (err: any, data?: TagResourceCommandOutput) => void): void;
    tagResource(args: TagResourceCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: TagResourceCommandOutput) => void): void;
    /**
     * Remove tags from a MediaConvert queue, preset, or job template. For information about tagging, see the User Guide at https://docs.aws.amazon.com/mediaconvert/latest/ug/tagging-resources.html
     */
    untagResource(args: UntagResourceCommandInput, options?: __HttpHandlerOptions): Promise<UntagResourceCommandOutput>;
    untagResource(args: UntagResourceCommandInput, cb: (err: any, data?: UntagResourceCommandOutput) => void): void;
    untagResource(args: UntagResourceCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: UntagResourceCommandOutput) => void): void;
    /**
     * Modify one of your existing job templates.
     */
    updateJobTemplate(args: UpdateJobTemplateCommandInput, options?: __HttpHandlerOptions): Promise<UpdateJobTemplateCommandOutput>;
    updateJobTemplate(args: UpdateJobTemplateCommandInput, cb: (err: any, data?: UpdateJobTemplateCommandOutput) => void): void;
    updateJobTemplate(args: UpdateJobTemplateCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: UpdateJobTemplateCommandOutput) => void): void;
    /**
     * Modify one of your existing presets.
     */
    updatePreset(args: UpdatePresetCommandInput, options?: __HttpHandlerOptions): Promise<UpdatePresetCommandOutput>;
    updatePreset(args: UpdatePresetCommandInput, cb: (err: any, data?: UpdatePresetCommandOutput) => void): void;
    updatePreset(args: UpdatePresetCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: UpdatePresetCommandOutput) => void): void;
    /**
     * Modify one of your existing queues.
     */
    updateQueue(args: UpdateQueueCommandInput, options?: __HttpHandlerOptions): Promise<UpdateQueueCommandOutput>;
    updateQueue(args: UpdateQueueCommandInput, cb: (err: any, data?: UpdateQueueCommandOutput) => void): void;
    updateQueue(args: UpdateQueueCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: UpdateQueueCommandOutput) => void): void;
}
