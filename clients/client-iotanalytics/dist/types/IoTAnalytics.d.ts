import { IoTAnalyticsClient } from "./IoTAnalyticsClient";
import { BatchPutMessageCommandInput, BatchPutMessageCommandOutput } from "./commands/BatchPutMessageCommand";
import { CancelPipelineReprocessingCommandInput, CancelPipelineReprocessingCommandOutput } from "./commands/CancelPipelineReprocessingCommand";
import { CreateChannelCommandInput, CreateChannelCommandOutput } from "./commands/CreateChannelCommand";
import { CreateDatasetCommandInput, CreateDatasetCommandOutput } from "./commands/CreateDatasetCommand";
import { CreateDatasetContentCommandInput, CreateDatasetContentCommandOutput } from "./commands/CreateDatasetContentCommand";
import { CreateDatastoreCommandInput, CreateDatastoreCommandOutput } from "./commands/CreateDatastoreCommand";
import { CreatePipelineCommandInput, CreatePipelineCommandOutput } from "./commands/CreatePipelineCommand";
import { DeleteChannelCommandInput, DeleteChannelCommandOutput } from "./commands/DeleteChannelCommand";
import { DeleteDatasetCommandInput, DeleteDatasetCommandOutput } from "./commands/DeleteDatasetCommand";
import { DeleteDatasetContentCommandInput, DeleteDatasetContentCommandOutput } from "./commands/DeleteDatasetContentCommand";
import { DeleteDatastoreCommandInput, DeleteDatastoreCommandOutput } from "./commands/DeleteDatastoreCommand";
import { DeletePipelineCommandInput, DeletePipelineCommandOutput } from "./commands/DeletePipelineCommand";
import { DescribeChannelCommandInput, DescribeChannelCommandOutput } from "./commands/DescribeChannelCommand";
import { DescribeDatasetCommandInput, DescribeDatasetCommandOutput } from "./commands/DescribeDatasetCommand";
import { DescribeDatastoreCommandInput, DescribeDatastoreCommandOutput } from "./commands/DescribeDatastoreCommand";
import { DescribeLoggingOptionsCommandInput, DescribeLoggingOptionsCommandOutput } from "./commands/DescribeLoggingOptionsCommand";
import { DescribePipelineCommandInput, DescribePipelineCommandOutput } from "./commands/DescribePipelineCommand";
import { GetDatasetContentCommandInput, GetDatasetContentCommandOutput } from "./commands/GetDatasetContentCommand";
import { ListChannelsCommandInput, ListChannelsCommandOutput } from "./commands/ListChannelsCommand";
import { ListDatasetContentsCommandInput, ListDatasetContentsCommandOutput } from "./commands/ListDatasetContentsCommand";
import { ListDatasetsCommandInput, ListDatasetsCommandOutput } from "./commands/ListDatasetsCommand";
import { ListDatastoresCommandInput, ListDatastoresCommandOutput } from "./commands/ListDatastoresCommand";
import { ListPipelinesCommandInput, ListPipelinesCommandOutput } from "./commands/ListPipelinesCommand";
import { ListTagsForResourceCommandInput, ListTagsForResourceCommandOutput } from "./commands/ListTagsForResourceCommand";
import { PutLoggingOptionsCommandInput, PutLoggingOptionsCommandOutput } from "./commands/PutLoggingOptionsCommand";
import { RunPipelineActivityCommandInput, RunPipelineActivityCommandOutput } from "./commands/RunPipelineActivityCommand";
import { SampleChannelDataCommandInput, SampleChannelDataCommandOutput } from "./commands/SampleChannelDataCommand";
import { StartPipelineReprocessingCommandInput, StartPipelineReprocessingCommandOutput } from "./commands/StartPipelineReprocessingCommand";
import { TagResourceCommandInput, TagResourceCommandOutput } from "./commands/TagResourceCommand";
import { UntagResourceCommandInput, UntagResourceCommandOutput } from "./commands/UntagResourceCommand";
import { UpdateChannelCommandInput, UpdateChannelCommandOutput } from "./commands/UpdateChannelCommand";
import { UpdateDatasetCommandInput, UpdateDatasetCommandOutput } from "./commands/UpdateDatasetCommand";
import { UpdateDatastoreCommandInput, UpdateDatastoreCommandOutput } from "./commands/UpdateDatastoreCommand";
import { UpdatePipelineCommandInput, UpdatePipelineCommandOutput } from "./commands/UpdatePipelineCommand";
import { HttpHandlerOptions as __HttpHandlerOptions } from "@aws-sdk/types";
/**
 * <p>AWS IoT Analytics allows you to collect large amounts of device data, process messages, and store them.
 *     You can then query the data and run sophisticated analytics on it.  AWS IoT Analytics enables advanced
 *     data exploration through integration with Jupyter Notebooks and data visualization through integration
 *     with Amazon QuickSight.</p>
 *
 *          <p>Traditional analytics and business intelligence tools are designed to process structured data. IoT data
 *     often comes from devices that record noisy processes (such as temperature, motion, or sound). As a result
 *     the data from these devices can have significant gaps, corrupted messages, and false readings that must be
 *     cleaned up before analysis can occur. Also, IoT data is often only meaningful in the context of other data
 *     from external sources. </p>
 *
 *          <p>AWS IoT Analytics automates the steps required to analyze data from IoT devices. AWS IoT Analytics
 *     filters, transforms, and enriches IoT data before storing it in a time-series data store for analysis. You
 *     can set up the service to collect only the data you need from your devices, apply mathematical transforms
 *     to process the data, and enrich the data with device-specific metadata such as device type and location
 *     before storing it. Then, you can analyze your data by running queries using the built-in SQL query engine,
 *     or perform more complex analytics and machine learning inference. AWS IoT Analytics includes pre-built models
 *     for common IoT use cases so you can answer questions like which devices are about to fail or which customers
 *     are at risk of abandoning their wearable devices.</p>
 */
export declare class IoTAnalytics extends IoTAnalyticsClient {
    /**
     * <p>Sends messages to a channel.</p>
     */
    batchPutMessage(args: BatchPutMessageCommandInput, options?: __HttpHandlerOptions): Promise<BatchPutMessageCommandOutput>;
    batchPutMessage(args: BatchPutMessageCommandInput, cb: (err: any, data?: BatchPutMessageCommandOutput) => void): void;
    batchPutMessage(args: BatchPutMessageCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: BatchPutMessageCommandOutput) => void): void;
    /**
     * <p>Cancels the reprocessing of data through the pipeline.</p>
     */
    cancelPipelineReprocessing(args: CancelPipelineReprocessingCommandInput, options?: __HttpHandlerOptions): Promise<CancelPipelineReprocessingCommandOutput>;
    cancelPipelineReprocessing(args: CancelPipelineReprocessingCommandInput, cb: (err: any, data?: CancelPipelineReprocessingCommandOutput) => void): void;
    cancelPipelineReprocessing(args: CancelPipelineReprocessingCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: CancelPipelineReprocessingCommandOutput) => void): void;
    /**
     * <p>Creates a channel. A channel collects data from an MQTT topic and archives the raw,
     *       unprocessed messages before publishing the data to a pipeline.</p>
     */
    createChannel(args: CreateChannelCommandInput, options?: __HttpHandlerOptions): Promise<CreateChannelCommandOutput>;
    createChannel(args: CreateChannelCommandInput, cb: (err: any, data?: CreateChannelCommandOutput) => void): void;
    createChannel(args: CreateChannelCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: CreateChannelCommandOutput) => void): void;
    /**
     * <p>Creates a dataset. A dataset stores data retrieved from a data store by applying a
     *         <code>queryAction</code> (a SQL query) or a <code>containerAction</code> (executing a
     *       containerized application). This operation creates the skeleton of a dataset. The dataset can
     *       be populated manually by calling <code>CreateDatasetContent</code> or automatically according
     *       to a trigger you specify.</p>
     */
    createDataset(args: CreateDatasetCommandInput, options?: __HttpHandlerOptions): Promise<CreateDatasetCommandOutput>;
    createDataset(args: CreateDatasetCommandInput, cb: (err: any, data?: CreateDatasetCommandOutput) => void): void;
    createDataset(args: CreateDatasetCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: CreateDatasetCommandOutput) => void): void;
    /**
     * <p>Creates the content of a data set by applying a <code>queryAction</code> (a SQL query) or
     *       a <code>containerAction</code> (executing a containerized application).</p>
     */
    createDatasetContent(args: CreateDatasetContentCommandInput, options?: __HttpHandlerOptions): Promise<CreateDatasetContentCommandOutput>;
    createDatasetContent(args: CreateDatasetContentCommandInput, cb: (err: any, data?: CreateDatasetContentCommandOutput) => void): void;
    createDatasetContent(args: CreateDatasetContentCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: CreateDatasetContentCommandOutput) => void): void;
    /**
     * <p>Creates a data store, which is a repository for messages.</p>
     */
    createDatastore(args: CreateDatastoreCommandInput, options?: __HttpHandlerOptions): Promise<CreateDatastoreCommandOutput>;
    createDatastore(args: CreateDatastoreCommandInput, cb: (err: any, data?: CreateDatastoreCommandOutput) => void): void;
    createDatastore(args: CreateDatastoreCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: CreateDatastoreCommandOutput) => void): void;
    /**
     * <p>Creates a pipeline. A pipeline consumes messages from a channel and allows you to process
     *       the messages before storing them in a data store. You must specify both a <code>channel</code>
     *       and a <code>datastore</code> activity and, optionally, as many as 23 additional activities in
     *       the <code>pipelineActivities</code> array.</p>
     */
    createPipeline(args: CreatePipelineCommandInput, options?: __HttpHandlerOptions): Promise<CreatePipelineCommandOutput>;
    createPipeline(args: CreatePipelineCommandInput, cb: (err: any, data?: CreatePipelineCommandOutput) => void): void;
    createPipeline(args: CreatePipelineCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: CreatePipelineCommandOutput) => void): void;
    /**
     * <p>Deletes the specified channel.</p>
     */
    deleteChannel(args: DeleteChannelCommandInput, options?: __HttpHandlerOptions): Promise<DeleteChannelCommandOutput>;
    deleteChannel(args: DeleteChannelCommandInput, cb: (err: any, data?: DeleteChannelCommandOutput) => void): void;
    deleteChannel(args: DeleteChannelCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: DeleteChannelCommandOutput) => void): void;
    /**
     * <p>Deletes the specified dataset.</p>
     *          <p>You do not have to delete the content of the dataset before you perform this
     *       operation.</p>
     */
    deleteDataset(args: DeleteDatasetCommandInput, options?: __HttpHandlerOptions): Promise<DeleteDatasetCommandOutput>;
    deleteDataset(args: DeleteDatasetCommandInput, cb: (err: any, data?: DeleteDatasetCommandOutput) => void): void;
    deleteDataset(args: DeleteDatasetCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: DeleteDatasetCommandOutput) => void): void;
    /**
     * <p>Deletes the content of the specified dataset.</p>
     */
    deleteDatasetContent(args: DeleteDatasetContentCommandInput, options?: __HttpHandlerOptions): Promise<DeleteDatasetContentCommandOutput>;
    deleteDatasetContent(args: DeleteDatasetContentCommandInput, cb: (err: any, data?: DeleteDatasetContentCommandOutput) => void): void;
    deleteDatasetContent(args: DeleteDatasetContentCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: DeleteDatasetContentCommandOutput) => void): void;
    /**
     * <p>Deletes the specified data store.</p>
     */
    deleteDatastore(args: DeleteDatastoreCommandInput, options?: __HttpHandlerOptions): Promise<DeleteDatastoreCommandOutput>;
    deleteDatastore(args: DeleteDatastoreCommandInput, cb: (err: any, data?: DeleteDatastoreCommandOutput) => void): void;
    deleteDatastore(args: DeleteDatastoreCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: DeleteDatastoreCommandOutput) => void): void;
    /**
     * <p>Deletes the specified pipeline.</p>
     */
    deletePipeline(args: DeletePipelineCommandInput, options?: __HttpHandlerOptions): Promise<DeletePipelineCommandOutput>;
    deletePipeline(args: DeletePipelineCommandInput, cb: (err: any, data?: DeletePipelineCommandOutput) => void): void;
    deletePipeline(args: DeletePipelineCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: DeletePipelineCommandOutput) => void): void;
    /**
     * <p>Retrieves information about a channel.</p>
     */
    describeChannel(args: DescribeChannelCommandInput, options?: __HttpHandlerOptions): Promise<DescribeChannelCommandOutput>;
    describeChannel(args: DescribeChannelCommandInput, cb: (err: any, data?: DescribeChannelCommandOutput) => void): void;
    describeChannel(args: DescribeChannelCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: DescribeChannelCommandOutput) => void): void;
    /**
     * <p>Retrieves information about a dataset.</p>
     */
    describeDataset(args: DescribeDatasetCommandInput, options?: __HttpHandlerOptions): Promise<DescribeDatasetCommandOutput>;
    describeDataset(args: DescribeDatasetCommandInput, cb: (err: any, data?: DescribeDatasetCommandOutput) => void): void;
    describeDataset(args: DescribeDatasetCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: DescribeDatasetCommandOutput) => void): void;
    /**
     * <p>Retrieves information about a data store.</p>
     */
    describeDatastore(args: DescribeDatastoreCommandInput, options?: __HttpHandlerOptions): Promise<DescribeDatastoreCommandOutput>;
    describeDatastore(args: DescribeDatastoreCommandInput, cb: (err: any, data?: DescribeDatastoreCommandOutput) => void): void;
    describeDatastore(args: DescribeDatastoreCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: DescribeDatastoreCommandOutput) => void): void;
    /**
     * <p>Retrieves the current settings of the AWS IoT Analytics logging options.</p>
     */
    describeLoggingOptions(args: DescribeLoggingOptionsCommandInput, options?: __HttpHandlerOptions): Promise<DescribeLoggingOptionsCommandOutput>;
    describeLoggingOptions(args: DescribeLoggingOptionsCommandInput, cb: (err: any, data?: DescribeLoggingOptionsCommandOutput) => void): void;
    describeLoggingOptions(args: DescribeLoggingOptionsCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: DescribeLoggingOptionsCommandOutput) => void): void;
    /**
     * <p>Retrieves information about a pipeline.</p>
     */
    describePipeline(args: DescribePipelineCommandInput, options?: __HttpHandlerOptions): Promise<DescribePipelineCommandOutput>;
    describePipeline(args: DescribePipelineCommandInput, cb: (err: any, data?: DescribePipelineCommandOutput) => void): void;
    describePipeline(args: DescribePipelineCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: DescribePipelineCommandOutput) => void): void;
    /**
     * <p>Retrieves the contents of a data set as presigned URIs.</p>
     */
    getDatasetContent(args: GetDatasetContentCommandInput, options?: __HttpHandlerOptions): Promise<GetDatasetContentCommandOutput>;
    getDatasetContent(args: GetDatasetContentCommandInput, cb: (err: any, data?: GetDatasetContentCommandOutput) => void): void;
    getDatasetContent(args: GetDatasetContentCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: GetDatasetContentCommandOutput) => void): void;
    /**
     * <p>Retrieves a list of channels.</p>
     */
    listChannels(args: ListChannelsCommandInput, options?: __HttpHandlerOptions): Promise<ListChannelsCommandOutput>;
    listChannels(args: ListChannelsCommandInput, cb: (err: any, data?: ListChannelsCommandOutput) => void): void;
    listChannels(args: ListChannelsCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: ListChannelsCommandOutput) => void): void;
    /**
     * <p>Lists information about data set contents that have been created.</p>
     */
    listDatasetContents(args: ListDatasetContentsCommandInput, options?: __HttpHandlerOptions): Promise<ListDatasetContentsCommandOutput>;
    listDatasetContents(args: ListDatasetContentsCommandInput, cb: (err: any, data?: ListDatasetContentsCommandOutput) => void): void;
    listDatasetContents(args: ListDatasetContentsCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: ListDatasetContentsCommandOutput) => void): void;
    /**
     * <p>Retrieves information about data sets.</p>
     */
    listDatasets(args: ListDatasetsCommandInput, options?: __HttpHandlerOptions): Promise<ListDatasetsCommandOutput>;
    listDatasets(args: ListDatasetsCommandInput, cb: (err: any, data?: ListDatasetsCommandOutput) => void): void;
    listDatasets(args: ListDatasetsCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: ListDatasetsCommandOutput) => void): void;
    /**
     * <p>Retrieves a list of data stores.</p>
     */
    listDatastores(args: ListDatastoresCommandInput, options?: __HttpHandlerOptions): Promise<ListDatastoresCommandOutput>;
    listDatastores(args: ListDatastoresCommandInput, cb: (err: any, data?: ListDatastoresCommandOutput) => void): void;
    listDatastores(args: ListDatastoresCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: ListDatastoresCommandOutput) => void): void;
    /**
     * <p>Retrieves a list of pipelines.</p>
     */
    listPipelines(args: ListPipelinesCommandInput, options?: __HttpHandlerOptions): Promise<ListPipelinesCommandOutput>;
    listPipelines(args: ListPipelinesCommandInput, cb: (err: any, data?: ListPipelinesCommandOutput) => void): void;
    listPipelines(args: ListPipelinesCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: ListPipelinesCommandOutput) => void): void;
    /**
     * <p>Lists the tags (metadata) that you have assigned to the resource.</p>
     */
    listTagsForResource(args: ListTagsForResourceCommandInput, options?: __HttpHandlerOptions): Promise<ListTagsForResourceCommandOutput>;
    listTagsForResource(args: ListTagsForResourceCommandInput, cb: (err: any, data?: ListTagsForResourceCommandOutput) => void): void;
    listTagsForResource(args: ListTagsForResourceCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: ListTagsForResourceCommandOutput) => void): void;
    /**
     * <p>Sets or updates the AWS IoT Analytics logging options.</p>
     *          <p>If you update the value of any <code>loggingOptions</code> field, it takes up to one
     *       minute for the change to take effect. Also, if you change the policy attached to the role you
     *       specified in the <code>roleArn</code> field (for example, to correct an invalid policy), it
     *       takes up to five minutes for that change to take effect. </p>
     */
    putLoggingOptions(args: PutLoggingOptionsCommandInput, options?: __HttpHandlerOptions): Promise<PutLoggingOptionsCommandOutput>;
    putLoggingOptions(args: PutLoggingOptionsCommandInput, cb: (err: any, data?: PutLoggingOptionsCommandOutput) => void): void;
    putLoggingOptions(args: PutLoggingOptionsCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: PutLoggingOptionsCommandOutput) => void): void;
    /**
     * <p>Simulates the results of running a pipeline activity on a message payload.</p>
     */
    runPipelineActivity(args: RunPipelineActivityCommandInput, options?: __HttpHandlerOptions): Promise<RunPipelineActivityCommandOutput>;
    runPipelineActivity(args: RunPipelineActivityCommandInput, cb: (err: any, data?: RunPipelineActivityCommandOutput) => void): void;
    runPipelineActivity(args: RunPipelineActivityCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: RunPipelineActivityCommandOutput) => void): void;
    /**
     * <p>Retrieves a sample of messages from the specified channel ingested during the specified
     *       timeframe. Up to 10 messages can be retrieved.</p>
     */
    sampleChannelData(args: SampleChannelDataCommandInput, options?: __HttpHandlerOptions): Promise<SampleChannelDataCommandOutput>;
    sampleChannelData(args: SampleChannelDataCommandInput, cb: (err: any, data?: SampleChannelDataCommandOutput) => void): void;
    sampleChannelData(args: SampleChannelDataCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: SampleChannelDataCommandOutput) => void): void;
    /**
     * <p>Starts the reprocessing of raw message data through the pipeline.</p>
     */
    startPipelineReprocessing(args: StartPipelineReprocessingCommandInput, options?: __HttpHandlerOptions): Promise<StartPipelineReprocessingCommandOutput>;
    startPipelineReprocessing(args: StartPipelineReprocessingCommandInput, cb: (err: any, data?: StartPipelineReprocessingCommandOutput) => void): void;
    startPipelineReprocessing(args: StartPipelineReprocessingCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: StartPipelineReprocessingCommandOutput) => void): void;
    /**
     * <p>Adds to or modifies the tags of the given resource. Tags are metadata that can be used to
     *       manage a resource.</p>
     */
    tagResource(args: TagResourceCommandInput, options?: __HttpHandlerOptions): Promise<TagResourceCommandOutput>;
    tagResource(args: TagResourceCommandInput, cb: (err: any, data?: TagResourceCommandOutput) => void): void;
    tagResource(args: TagResourceCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: TagResourceCommandOutput) => void): void;
    /**
     * <p>Removes the given tags (metadata) from the resource.</p>
     */
    untagResource(args: UntagResourceCommandInput, options?: __HttpHandlerOptions): Promise<UntagResourceCommandOutput>;
    untagResource(args: UntagResourceCommandInput, cb: (err: any, data?: UntagResourceCommandOutput) => void): void;
    untagResource(args: UntagResourceCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: UntagResourceCommandOutput) => void): void;
    /**
     * <p>Updates the settings of a channel.</p>
     */
    updateChannel(args: UpdateChannelCommandInput, options?: __HttpHandlerOptions): Promise<UpdateChannelCommandOutput>;
    updateChannel(args: UpdateChannelCommandInput, cb: (err: any, data?: UpdateChannelCommandOutput) => void): void;
    updateChannel(args: UpdateChannelCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: UpdateChannelCommandOutput) => void): void;
    /**
     * <p>Updates the settings of a data set.</p>
     */
    updateDataset(args: UpdateDatasetCommandInput, options?: __HttpHandlerOptions): Promise<UpdateDatasetCommandOutput>;
    updateDataset(args: UpdateDatasetCommandInput, cb: (err: any, data?: UpdateDatasetCommandOutput) => void): void;
    updateDataset(args: UpdateDatasetCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: UpdateDatasetCommandOutput) => void): void;
    /**
     * <p>Updates the settings of a data store.</p>
     */
    updateDatastore(args: UpdateDatastoreCommandInput, options?: __HttpHandlerOptions): Promise<UpdateDatastoreCommandOutput>;
    updateDatastore(args: UpdateDatastoreCommandInput, cb: (err: any, data?: UpdateDatastoreCommandOutput) => void): void;
    updateDatastore(args: UpdateDatastoreCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: UpdateDatastoreCommandOutput) => void): void;
    /**
     * <p>Updates the settings of a pipeline. You must specify both a <code>channel</code> and a
     *         <code>datastore</code> activity and, optionally, as many as 23 additional activities in the
     *         <code>pipelineActivities</code> array.</p>
     */
    updatePipeline(args: UpdatePipelineCommandInput, options?: __HttpHandlerOptions): Promise<UpdatePipelineCommandOutput>;
    updatePipeline(args: UpdatePipelineCommandInput, cb: (err: any, data?: UpdatePipelineCommandOutput) => void): void;
    updatePipeline(args: UpdatePipelineCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: UpdatePipelineCommandOutput) => void): void;
}
