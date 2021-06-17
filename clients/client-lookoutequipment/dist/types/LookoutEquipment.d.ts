import { LookoutEquipmentClient } from "./LookoutEquipmentClient";
import { CreateDatasetCommandInput, CreateDatasetCommandOutput } from "./commands/CreateDatasetCommand";
import { CreateInferenceSchedulerCommandInput, CreateInferenceSchedulerCommandOutput } from "./commands/CreateInferenceSchedulerCommand";
import { CreateModelCommandInput, CreateModelCommandOutput } from "./commands/CreateModelCommand";
import { DeleteDatasetCommandInput, DeleteDatasetCommandOutput } from "./commands/DeleteDatasetCommand";
import { DeleteInferenceSchedulerCommandInput, DeleteInferenceSchedulerCommandOutput } from "./commands/DeleteInferenceSchedulerCommand";
import { DeleteModelCommandInput, DeleteModelCommandOutput } from "./commands/DeleteModelCommand";
import { DescribeDataIngestionJobCommandInput, DescribeDataIngestionJobCommandOutput } from "./commands/DescribeDataIngestionJobCommand";
import { DescribeDatasetCommandInput, DescribeDatasetCommandOutput } from "./commands/DescribeDatasetCommand";
import { DescribeInferenceSchedulerCommandInput, DescribeInferenceSchedulerCommandOutput } from "./commands/DescribeInferenceSchedulerCommand";
import { DescribeModelCommandInput, DescribeModelCommandOutput } from "./commands/DescribeModelCommand";
import { ListDataIngestionJobsCommandInput, ListDataIngestionJobsCommandOutput } from "./commands/ListDataIngestionJobsCommand";
import { ListDatasetsCommandInput, ListDatasetsCommandOutput } from "./commands/ListDatasetsCommand";
import { ListInferenceExecutionsCommandInput, ListInferenceExecutionsCommandOutput } from "./commands/ListInferenceExecutionsCommand";
import { ListInferenceSchedulersCommandInput, ListInferenceSchedulersCommandOutput } from "./commands/ListInferenceSchedulersCommand";
import { ListModelsCommandInput, ListModelsCommandOutput } from "./commands/ListModelsCommand";
import { ListTagsForResourceCommandInput, ListTagsForResourceCommandOutput } from "./commands/ListTagsForResourceCommand";
import { StartDataIngestionJobCommandInput, StartDataIngestionJobCommandOutput } from "./commands/StartDataIngestionJobCommand";
import { StartInferenceSchedulerCommandInput, StartInferenceSchedulerCommandOutput } from "./commands/StartInferenceSchedulerCommand";
import { StopInferenceSchedulerCommandInput, StopInferenceSchedulerCommandOutput } from "./commands/StopInferenceSchedulerCommand";
import { TagResourceCommandInput, TagResourceCommandOutput } from "./commands/TagResourceCommand";
import { UntagResourceCommandInput, UntagResourceCommandOutput } from "./commands/UntagResourceCommand";
import { UpdateInferenceSchedulerCommandInput, UpdateInferenceSchedulerCommandOutput } from "./commands/UpdateInferenceSchedulerCommand";
import { HttpHandlerOptions as __HttpHandlerOptions } from "@aws-sdk/types";
/**
 * <p>Amazon Lookout for Equipment is a machine learning service that uses advanced analytics to identify
 *          anomalies in machines from sensor data for use in predictive maintenance. </p>
 */
export declare class LookoutEquipment extends LookoutEquipmentClient {
    /**
     * <p>Creates a container for a collection of data being ingested for analysis. The dataset
     *          contains the metadata describing where the data is and what the data actually looks like.
     *          In other words, it contains the location of the data source, the data schema, and other
     *          information. A dataset also contains any tags associated with the ingested data. </p>
     */
    createDataset(args: CreateDatasetCommandInput, options?: __HttpHandlerOptions): Promise<CreateDatasetCommandOutput>;
    createDataset(args: CreateDatasetCommandInput, cb: (err: any, data?: CreateDatasetCommandOutput) => void): void;
    createDataset(args: CreateDatasetCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: CreateDatasetCommandOutput) => void): void;
    /**
     * <p> Creates a scheduled inference. Scheduling an inference is setting up a continuous
     *          real-time inference plan to analyze new measurement data. When setting up the schedule, you
     *          provide an S3 bucket location for the input data, assign it a delimiter between separate
     *          entries in the data, set an offset delay if desired, and set the frequency of inferencing.
     *          You must also provide an S3 bucket location for the output data. </p>
     */
    createInferenceScheduler(args: CreateInferenceSchedulerCommandInput, options?: __HttpHandlerOptions): Promise<CreateInferenceSchedulerCommandOutput>;
    createInferenceScheduler(args: CreateInferenceSchedulerCommandInput, cb: (err: any, data?: CreateInferenceSchedulerCommandOutput) => void): void;
    createInferenceScheduler(args: CreateInferenceSchedulerCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: CreateInferenceSchedulerCommandOutput) => void): void;
    /**
     * <p>Creates an ML model for data inference. </p>
     *          <p>A machine-learning (ML) model is a mathematical model that finds patterns in your data.
     *          In Amazon Lookout for Equipment, the model learns the patterns of normal behavior and detects abnormal
     *          behavior that could be potential equipment failure (or maintenance events). The models are
     *          made by analyzing normal data and abnormalities in machine behavior that have already
     *          occurred.</p>
     *          <p>Your model is trained using a portion of the data from your dataset and uses that data
     *          to learn patterns of normal behavior and abnormal patterns that lead to equipment failure.
     *          Another portion of the data is used to evaluate the model's accuracy. </p>
     */
    createModel(args: CreateModelCommandInput, options?: __HttpHandlerOptions): Promise<CreateModelCommandOutput>;
    createModel(args: CreateModelCommandInput, cb: (err: any, data?: CreateModelCommandOutput) => void): void;
    createModel(args: CreateModelCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: CreateModelCommandOutput) => void): void;
    /**
     * <p> Deletes a dataset and associated artifacts. The operation will check to see if any
     *          inference scheduler or data ingestion job is currently using the dataset, and if there
     *          isn't, the dataset, its metadata, and any associated data stored in S3 will be deleted.
     *          This does not affect any models that used this dataset for training and evaluation, but
     *          does prevent it from being used in the future. </p>
     */
    deleteDataset(args: DeleteDatasetCommandInput, options?: __HttpHandlerOptions): Promise<DeleteDatasetCommandOutput>;
    deleteDataset(args: DeleteDatasetCommandInput, cb: (err: any, data?: DeleteDatasetCommandOutput) => void): void;
    deleteDataset(args: DeleteDatasetCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: DeleteDatasetCommandOutput) => void): void;
    /**
     * <p>Deletes an inference scheduler that has been set up. Already processed output results
     *          are not affected. </p>
     */
    deleteInferenceScheduler(args: DeleteInferenceSchedulerCommandInput, options?: __HttpHandlerOptions): Promise<DeleteInferenceSchedulerCommandOutput>;
    deleteInferenceScheduler(args: DeleteInferenceSchedulerCommandInput, cb: (err: any, data?: DeleteInferenceSchedulerCommandOutput) => void): void;
    deleteInferenceScheduler(args: DeleteInferenceSchedulerCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: DeleteInferenceSchedulerCommandOutput) => void): void;
    /**
     * <p>Deletes an ML model currently available for Amazon Lookout for Equipment. This will prevent it from
     *          being used with an inference scheduler, even one that is already set up. </p>
     */
    deleteModel(args: DeleteModelCommandInput, options?: __HttpHandlerOptions): Promise<DeleteModelCommandOutput>;
    deleteModel(args: DeleteModelCommandInput, cb: (err: any, data?: DeleteModelCommandOutput) => void): void;
    deleteModel(args: DeleteModelCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: DeleteModelCommandOutput) => void): void;
    /**
     * <p>Provides information on a specific data ingestion job such as creation time, dataset
     *          ARN, status, and so on. </p>
     */
    describeDataIngestionJob(args: DescribeDataIngestionJobCommandInput, options?: __HttpHandlerOptions): Promise<DescribeDataIngestionJobCommandOutput>;
    describeDataIngestionJob(args: DescribeDataIngestionJobCommandInput, cb: (err: any, data?: DescribeDataIngestionJobCommandOutput) => void): void;
    describeDataIngestionJob(args: DescribeDataIngestionJobCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: DescribeDataIngestionJobCommandOutput) => void): void;
    /**
     * <p>Provides information on a specified dataset such as the schema location, status, and so
     *          on.</p>
     */
    describeDataset(args: DescribeDatasetCommandInput, options?: __HttpHandlerOptions): Promise<DescribeDatasetCommandOutput>;
    describeDataset(args: DescribeDatasetCommandInput, cb: (err: any, data?: DescribeDatasetCommandOutput) => void): void;
    describeDataset(args: DescribeDatasetCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: DescribeDatasetCommandOutput) => void): void;
    /**
     * <p> Specifies information about the inference scheduler being used, including name, model,
     *          status, and associated metadata </p>
     */
    describeInferenceScheduler(args: DescribeInferenceSchedulerCommandInput, options?: __HttpHandlerOptions): Promise<DescribeInferenceSchedulerCommandOutput>;
    describeInferenceScheduler(args: DescribeInferenceSchedulerCommandInput, cb: (err: any, data?: DescribeInferenceSchedulerCommandOutput) => void): void;
    describeInferenceScheduler(args: DescribeInferenceSchedulerCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: DescribeInferenceSchedulerCommandOutput) => void): void;
    /**
     * <p>Provides overall information about a specific ML model, including model name and ARN,
     *          dataset, training and evaluation information, status, and so on. </p>
     */
    describeModel(args: DescribeModelCommandInput, options?: __HttpHandlerOptions): Promise<DescribeModelCommandOutput>;
    describeModel(args: DescribeModelCommandInput, cb: (err: any, data?: DescribeModelCommandOutput) => void): void;
    describeModel(args: DescribeModelCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: DescribeModelCommandOutput) => void): void;
    /**
     * <p>Provides a list of all data ingestion jobs, including dataset name and ARN, S3 location
     *          of the input data, status, and so on. </p>
     */
    listDataIngestionJobs(args: ListDataIngestionJobsCommandInput, options?: __HttpHandlerOptions): Promise<ListDataIngestionJobsCommandOutput>;
    listDataIngestionJobs(args: ListDataIngestionJobsCommandInput, cb: (err: any, data?: ListDataIngestionJobsCommandOutput) => void): void;
    listDataIngestionJobs(args: ListDataIngestionJobsCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: ListDataIngestionJobsCommandOutput) => void): void;
    /**
     * <p>Lists all datasets currently available in your account, filtering on the dataset name.
     *       </p>
     */
    listDatasets(args: ListDatasetsCommandInput, options?: __HttpHandlerOptions): Promise<ListDatasetsCommandOutput>;
    listDatasets(args: ListDatasetsCommandInput, cb: (err: any, data?: ListDatasetsCommandOutput) => void): void;
    listDatasets(args: ListDatasetsCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: ListDatasetsCommandOutput) => void): void;
    /**
     * <p> Lists all inference executions that have been performed by the specified inference
     *          scheduler. </p>
     */
    listInferenceExecutions(args: ListInferenceExecutionsCommandInput, options?: __HttpHandlerOptions): Promise<ListInferenceExecutionsCommandOutput>;
    listInferenceExecutions(args: ListInferenceExecutionsCommandInput, cb: (err: any, data?: ListInferenceExecutionsCommandOutput) => void): void;
    listInferenceExecutions(args: ListInferenceExecutionsCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: ListInferenceExecutionsCommandOutput) => void): void;
    /**
     * <p>Retrieves a list of all inference schedulers currently available for your account.
     *       </p>
     */
    listInferenceSchedulers(args: ListInferenceSchedulersCommandInput, options?: __HttpHandlerOptions): Promise<ListInferenceSchedulersCommandOutput>;
    listInferenceSchedulers(args: ListInferenceSchedulersCommandInput, cb: (err: any, data?: ListInferenceSchedulersCommandOutput) => void): void;
    listInferenceSchedulers(args: ListInferenceSchedulersCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: ListInferenceSchedulersCommandOutput) => void): void;
    /**
     * <p>Generates a list of all models in the account, including model name and ARN, dataset,
     *          and status. </p>
     */
    listModels(args: ListModelsCommandInput, options?: __HttpHandlerOptions): Promise<ListModelsCommandOutput>;
    listModels(args: ListModelsCommandInput, cb: (err: any, data?: ListModelsCommandOutput) => void): void;
    listModels(args: ListModelsCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: ListModelsCommandOutput) => void): void;
    /**
     * <p>Lists all the tags for a specified resource, including key and value. </p>
     */
    listTagsForResource(args: ListTagsForResourceCommandInput, options?: __HttpHandlerOptions): Promise<ListTagsForResourceCommandOutput>;
    listTagsForResource(args: ListTagsForResourceCommandInput, cb: (err: any, data?: ListTagsForResourceCommandOutput) => void): void;
    listTagsForResource(args: ListTagsForResourceCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: ListTagsForResourceCommandOutput) => void): void;
    /**
     * <p>Starts a data ingestion job. Amazon Lookout for Equipment returns the job status. </p>
     */
    startDataIngestionJob(args: StartDataIngestionJobCommandInput, options?: __HttpHandlerOptions): Promise<StartDataIngestionJobCommandOutput>;
    startDataIngestionJob(args: StartDataIngestionJobCommandInput, cb: (err: any, data?: StartDataIngestionJobCommandOutput) => void): void;
    startDataIngestionJob(args: StartDataIngestionJobCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: StartDataIngestionJobCommandOutput) => void): void;
    /**
     * <p>Starts an inference scheduler. </p>
     */
    startInferenceScheduler(args: StartInferenceSchedulerCommandInput, options?: __HttpHandlerOptions): Promise<StartInferenceSchedulerCommandOutput>;
    startInferenceScheduler(args: StartInferenceSchedulerCommandInput, cb: (err: any, data?: StartInferenceSchedulerCommandOutput) => void): void;
    startInferenceScheduler(args: StartInferenceSchedulerCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: StartInferenceSchedulerCommandOutput) => void): void;
    /**
     * <p>Stops an inference scheduler. </p>
     */
    stopInferenceScheduler(args: StopInferenceSchedulerCommandInput, options?: __HttpHandlerOptions): Promise<StopInferenceSchedulerCommandOutput>;
    stopInferenceScheduler(args: StopInferenceSchedulerCommandInput, cb: (err: any, data?: StopInferenceSchedulerCommandOutput) => void): void;
    stopInferenceScheduler(args: StopInferenceSchedulerCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: StopInferenceSchedulerCommandOutput) => void): void;
    /**
     * <p>Associates a given tag to a resource in your account. A tag is a key-value pair which
     *          can be added to an Amazon Lookout for Equipment resource as metadata. Tags can be used for organizing your
     *          resources as well as helping you to search and filter by tag. Multiple tags can be added to
     *          a resource, either when you create it, or later. Up to 50 tags can be associated with each
     *          resource. </p>
     */
    tagResource(args: TagResourceCommandInput, options?: __HttpHandlerOptions): Promise<TagResourceCommandOutput>;
    tagResource(args: TagResourceCommandInput, cb: (err: any, data?: TagResourceCommandOutput) => void): void;
    tagResource(args: TagResourceCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: TagResourceCommandOutput) => void): void;
    /**
     * <p>Removes a specific tag from a given resource. The tag is specified by its key. </p>
     */
    untagResource(args: UntagResourceCommandInput, options?: __HttpHandlerOptions): Promise<UntagResourceCommandOutput>;
    untagResource(args: UntagResourceCommandInput, cb: (err: any, data?: UntagResourceCommandOutput) => void): void;
    untagResource(args: UntagResourceCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: UntagResourceCommandOutput) => void): void;
    /**
     * <p>Updates an inference scheduler. </p>
     */
    updateInferenceScheduler(args: UpdateInferenceSchedulerCommandInput, options?: __HttpHandlerOptions): Promise<UpdateInferenceSchedulerCommandOutput>;
    updateInferenceScheduler(args: UpdateInferenceSchedulerCommandInput, cb: (err: any, data?: UpdateInferenceSchedulerCommandOutput) => void): void;
    updateInferenceScheduler(args: UpdateInferenceSchedulerCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: UpdateInferenceSchedulerCommandOutput) => void): void;
}
