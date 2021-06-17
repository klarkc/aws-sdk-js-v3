import { LookoutVisionClient } from "./LookoutVisionClient";
import { CreateDatasetCommandInput, CreateDatasetCommandOutput } from "./commands/CreateDatasetCommand";
import { CreateModelCommandInput, CreateModelCommandOutput } from "./commands/CreateModelCommand";
import { CreateProjectCommandInput, CreateProjectCommandOutput } from "./commands/CreateProjectCommand";
import { DeleteDatasetCommandInput, DeleteDatasetCommandOutput } from "./commands/DeleteDatasetCommand";
import { DeleteModelCommandInput, DeleteModelCommandOutput } from "./commands/DeleteModelCommand";
import { DeleteProjectCommandInput, DeleteProjectCommandOutput } from "./commands/DeleteProjectCommand";
import { DescribeDatasetCommandInput, DescribeDatasetCommandOutput } from "./commands/DescribeDatasetCommand";
import { DescribeModelCommandInput, DescribeModelCommandOutput } from "./commands/DescribeModelCommand";
import { DescribeProjectCommandInput, DescribeProjectCommandOutput } from "./commands/DescribeProjectCommand";
import { DetectAnomaliesCommandInput, DetectAnomaliesCommandOutput } from "./commands/DetectAnomaliesCommand";
import { ListDatasetEntriesCommandInput, ListDatasetEntriesCommandOutput } from "./commands/ListDatasetEntriesCommand";
import { ListModelsCommandInput, ListModelsCommandOutput } from "./commands/ListModelsCommand";
import { ListProjectsCommandInput, ListProjectsCommandOutput } from "./commands/ListProjectsCommand";
import { ListTagsForResourceCommandInput, ListTagsForResourceCommandOutput } from "./commands/ListTagsForResourceCommand";
import { StartModelCommandInput, StartModelCommandOutput } from "./commands/StartModelCommand";
import { StopModelCommandInput, StopModelCommandOutput } from "./commands/StopModelCommand";
import { TagResourceCommandInput, TagResourceCommandOutput } from "./commands/TagResourceCommand";
import { UntagResourceCommandInput, UntagResourceCommandOutput } from "./commands/UntagResourceCommand";
import { UpdateDatasetEntriesCommandInput, UpdateDatasetEntriesCommandOutput } from "./commands/UpdateDatasetEntriesCommand";
import { HttpHandlerOptions as __HttpHandlerOptions } from "@aws-sdk/types";
/**
 * <p>This is the Amazon Lookout for Vision API Reference. It provides descriptions of actions,
 *       data types, common parameters, and common errors.</p>
 *          <p>Amazon Lookout for Vision enables you to find visual defects in industrial products,
 *          accurately and at scale. It uses computer vision to identify missing components in an industrial product,
 *          damage to vehicles or structures, irregularities in production lines, and even minuscule defects in
 *          silicon wafers — or any other physical item where quality is important such as a missing capacitor
 *          on printed circuit boards.</p>
 */
export declare class LookoutVision extends LookoutVisionClient {
    /**
     * <p>Creates a new dataset  in an Amazon Lookout for Vision project. <code>CreateDataset</code> can create a
     *       training or a test dataset from a valid dataset source (<code>DatasetSource</code>).</p>
     *          <p>If you want a single dataset project, specify <code>train</code> for the value of
     *          <code>DatasetType</code>.</p>
     *         <p>To have a project with separate training and test datasets, call <code>CreateDataset</code> twice.
     *            On the first call, specify <code>train</code> for the value of
     *            <code>DatasetType</code>. On the second call, specify <code>test</code> for the value of
     *            <code>DatasetType</code>. </p>
     *         <p>This operation requires permissions to perform the
     *            <code>lookoutvision:CreateDataset</code> operation.</p>
     */
    createDataset(args: CreateDatasetCommandInput, options?: __HttpHandlerOptions): Promise<CreateDatasetCommandOutput>;
    createDataset(args: CreateDatasetCommandInput, cb: (err: any, data?: CreateDatasetCommandOutput) => void): void;
    createDataset(args: CreateDatasetCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: CreateDatasetCommandOutput) => void): void;
    /**
     * <p>Creates a new version of a model within an an Amazon Lookout for Vision project.
     *       <code>CreateModel</code> is an asynchronous operation in which Amazon Lookout for Vision trains, tests,
     *        and evaluates a new version of a model. </p>
     *          <p>To get the current status, check the <code>Status</code> field returned
     *       in the response from <a>DescribeModel</a>.</p>
     *          <p>If the project has a single dataset, Amazon Lookout for Vision internally splits the dataset
     *        to create a training and a test dataset.
     *        If the project has a training and a test dataset, Lookout for Vision uses the respective datasets to train and test
     *        the model. </p>
     *          <p>After training completes, the evaluation metrics are stored at the location specified in
     *         <code>OutputConfig</code>.  </p>
     *          <p>This operation requires permissions to perform the
     *          <code>lookoutvision:CreateModel</code> operation. If you want to tag your model, you also require
     *          permission to the <code>lookoutvision:TagResource</code> operation.</p>
     */
    createModel(args: CreateModelCommandInput, options?: __HttpHandlerOptions): Promise<CreateModelCommandOutput>;
    createModel(args: CreateModelCommandInput, cb: (err: any, data?: CreateModelCommandOutput) => void): void;
    createModel(args: CreateModelCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: CreateModelCommandOutput) => void): void;
    /**
     * <p>Creates an empty Amazon Lookout for Vision project. After you create the project, add a dataset by calling
     *          <a>CreateDataset</a>.</p>
     *          <p>This operation requires permissions to perform the
     *          <code>lookoutvision:CreateProject</code> operation.</p>
     */
    createProject(args: CreateProjectCommandInput, options?: __HttpHandlerOptions): Promise<CreateProjectCommandOutput>;
    createProject(args: CreateProjectCommandInput, cb: (err: any, data?: CreateProjectCommandOutput) => void): void;
    createProject(args: CreateProjectCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: CreateProjectCommandOutput) => void): void;
    /**
     * <p>Deletes an existing Amazon Lookout for Vision <code>dataset</code>. </p>
     *          <p>If your the project has a single
     *       dataset, you must create a new dataset before you can create a model.</p>
     *          <p>If you project has a training dataset and a test dataset consider the following. </p>
     *          <ul>
     *             <li>
     *                <p>If you delete the test dataset, your project reverts to a single dataset project. If you then
     *       train the model, Amazon Lookout for Vision internally splits the remaining dataset into a training and test dataset.</p>
     *             </li>
     *             <li>
     *                <p>If you delete the training dataset, you must create a training dataset before you can create a model.</p>
     *             </li>
     *          </ul>
     *          <p>This operation requires permissions to perform the
     *          <code>lookoutvision:DeleteDataset</code> operation.</p>
     */
    deleteDataset(args: DeleteDatasetCommandInput, options?: __HttpHandlerOptions): Promise<DeleteDatasetCommandOutput>;
    deleteDataset(args: DeleteDatasetCommandInput, cb: (err: any, data?: DeleteDatasetCommandOutput) => void): void;
    deleteDataset(args: DeleteDatasetCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: DeleteDatasetCommandOutput) => void): void;
    /**
     * <p>Deletes an Amazon Lookout for Vision model. You can't delete a running model. To stop a running model,
     *       use the <a>StopModel</a> operation.</p>
     *          <p>It might take a few seconds to delete a model. To determine if a model has been deleted, call
     *          <a>ListProjects</a> and check if the version of the model (<code>ModelVersion</code>) is in the
     *          <code>Models</code> array. </p>
     *          <p>This operation requires permissions to perform the
     *          <code>lookoutvision:DeleteModel</code> operation.</p>
     */
    deleteModel(args: DeleteModelCommandInput, options?: __HttpHandlerOptions): Promise<DeleteModelCommandOutput>;
    deleteModel(args: DeleteModelCommandInput, cb: (err: any, data?: DeleteModelCommandOutput) => void): void;
    deleteModel(args: DeleteModelCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: DeleteModelCommandOutput) => void): void;
    /**
     * <p>Deletes an Amazon Lookout for Vision project.</p>
     *          <p>To delete a project, you must first delete each version of the model associated with
     *          the project. To delete a model use the <a>DeleteModel</a> operation.</p>
     *          <p>You also have to delete the dataset(s) associated with the model. For more information, see
     *          <a>DeleteDataset</a>.  The images referenced by the training and test datasets aren't deleted.
     *       </p>
     *          <p>This operation requires permissions to perform the
     *          <code>lookoutvision:DeleteProject</code> operation.</p>
     */
    deleteProject(args: DeleteProjectCommandInput, options?: __HttpHandlerOptions): Promise<DeleteProjectCommandOutput>;
    deleteProject(args: DeleteProjectCommandInput, cb: (err: any, data?: DeleteProjectCommandOutput) => void): void;
    deleteProject(args: DeleteProjectCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: DeleteProjectCommandOutput) => void): void;
    /**
     * <p>Describe an Amazon Lookout for Vision dataset.</p>
     *          <p>This operation requires permissions to perform the
     *          <code>lookoutvision:DescribeDataset</code> operation.</p>
     */
    describeDataset(args: DescribeDatasetCommandInput, options?: __HttpHandlerOptions): Promise<DescribeDatasetCommandOutput>;
    describeDataset(args: DescribeDatasetCommandInput, cb: (err: any, data?: DescribeDatasetCommandOutput) => void): void;
    describeDataset(args: DescribeDatasetCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: DescribeDatasetCommandOutput) => void): void;
    /**
     * <p>Describes a version of an Amazon Lookout for Vision model.</p>
     *          <p>This operation requires permissions to perform the
     *          <code>lookoutvision:DescribeModel</code> operation.</p>
     */
    describeModel(args: DescribeModelCommandInput, options?: __HttpHandlerOptions): Promise<DescribeModelCommandOutput>;
    describeModel(args: DescribeModelCommandInput, cb: (err: any, data?: DescribeModelCommandOutput) => void): void;
    describeModel(args: DescribeModelCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: DescribeModelCommandOutput) => void): void;
    /**
     * <p>Describes an Amazon Lookout for Vision project.</p>
     *          <p>This operation requires permissions to perform the
     *          <code>lookoutvision:DescribeProject</code> operation.</p>
     */
    describeProject(args: DescribeProjectCommandInput, options?: __HttpHandlerOptions): Promise<DescribeProjectCommandOutput>;
    describeProject(args: DescribeProjectCommandInput, cb: (err: any, data?: DescribeProjectCommandOutput) => void): void;
    describeProject(args: DescribeProjectCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: DescribeProjectCommandOutput) => void): void;
    /**
     * <p>Detects anomalies in an image that you supply. </p>
     *          <p>The response from <code>DetectAnomalies</code> includes a boolean prediction
     *          that the image contains one or more anomalies and a confidence value for the prediction.</p>
     *          <note>
     *             <p>Before calling <code>DetectAnomalies</code>, you must first start your model with the <a>StartModel</a> operation.
     *          You are charged for the amount of time, in minutes, that a model runs and for the number of anomaly detection units that your
     *          model uses. If you are not using a model, use the <a>StopModel</a> operation to stop your model. </p>
     *          </note>
     *          <p>This operation requires permissions to perform the
     *          <code>lookoutvision:DetectAnomalies</code> operation.</p>
     */
    detectAnomalies(args: DetectAnomaliesCommandInput, options?: __HttpHandlerOptions): Promise<DetectAnomaliesCommandOutput>;
    detectAnomalies(args: DetectAnomaliesCommandInput, cb: (err: any, data?: DetectAnomaliesCommandOutput) => void): void;
    detectAnomalies(args: DetectAnomaliesCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: DetectAnomaliesCommandOutput) => void): void;
    /**
     * <p>Lists the JSON Lines within a dataset. An Amazon Lookout for Vision JSON Line contains the anomaly
     *       information for a single image, including the image location and the assigned label.</p>
     *          <p>This operation requires permissions to perform the
     *          <code>lookoutvision:ListDatasetEntries</code> operation.</p>
     */
    listDatasetEntries(args: ListDatasetEntriesCommandInput, options?: __HttpHandlerOptions): Promise<ListDatasetEntriesCommandOutput>;
    listDatasetEntries(args: ListDatasetEntriesCommandInput, cb: (err: any, data?: ListDatasetEntriesCommandOutput) => void): void;
    listDatasetEntries(args: ListDatasetEntriesCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: ListDatasetEntriesCommandOutput) => void): void;
    /**
     * <p>Lists the versions of a model in an Amazon Lookout for Vision project.</p>
     *          <p>This operation requires permissions to perform the
     *          <code>lookoutvision:ListModels</code> operation.</p>
     */
    listModels(args: ListModelsCommandInput, options?: __HttpHandlerOptions): Promise<ListModelsCommandOutput>;
    listModels(args: ListModelsCommandInput, cb: (err: any, data?: ListModelsCommandOutput) => void): void;
    listModels(args: ListModelsCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: ListModelsCommandOutput) => void): void;
    /**
     * <p>Lists the Amazon Lookout for Vision projects in your AWS account.</p>
     *          <p>This operation requires permissions to perform the
     *          <code>lookoutvision:ListProjects</code> operation.</p>
     */
    listProjects(args: ListProjectsCommandInput, options?: __HttpHandlerOptions): Promise<ListProjectsCommandOutput>;
    listProjects(args: ListProjectsCommandInput, cb: (err: any, data?: ListProjectsCommandOutput) => void): void;
    listProjects(args: ListProjectsCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: ListProjectsCommandOutput) => void): void;
    /**
     * <p>Returns a list of tags attached to the specified Amazon Lookout for Vision model.</p>
     *          <p>This operation requires permissions to perform the
     *          <code>lookoutvision:ListTagsForResource</code> operation.</p>
     */
    listTagsForResource(args: ListTagsForResourceCommandInput, options?: __HttpHandlerOptions): Promise<ListTagsForResourceCommandOutput>;
    listTagsForResource(args: ListTagsForResourceCommandInput, cb: (err: any, data?: ListTagsForResourceCommandOutput) => void): void;
    listTagsForResource(args: ListTagsForResourceCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: ListTagsForResourceCommandOutput) => void): void;
    /**
     * <p>Starts the running of the version of an Amazon Lookout for Vision model. Starting a model takes a while
     *          to complete. To check the current state of the model, use <a>DescribeModel</a>.</p>
     *          <p>A model is ready to use when its status is <code>HOSTED</code>.</p>
     *          <p>Once the model is running, you can detect custom labels in new images by calling
     *          <a>DetectAnomalies</a>.</p>
     *          <note>
     *             <p>You are charged for the amount of time that the model is running. To stop a running
     *          model, call <a>StopModel</a>.</p>
     *          </note>
     *          <p>This operation requires permissions to perform the
     *          <code>lookoutvision:StartModel</code> operation.</p>
     */
    startModel(args: StartModelCommandInput, options?: __HttpHandlerOptions): Promise<StartModelCommandOutput>;
    startModel(args: StartModelCommandInput, cb: (err: any, data?: StartModelCommandOutput) => void): void;
    startModel(args: StartModelCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: StartModelCommandOutput) => void): void;
    /**
     * <p>Stops the hosting of a running model. The operation might take a while to complete. To
     *          check the current status, call <a>DescribeModel</a>. </p>
     *          <p>After the model hosting stops, the <code>Status</code> of the model is <code>TRAINED</code>.</p>
     *          <p>This operation requires permissions to perform the
     *          <code>lookoutvision:StopModel</code> operation.</p>
     */
    stopModel(args: StopModelCommandInput, options?: __HttpHandlerOptions): Promise<StopModelCommandOutput>;
    stopModel(args: StopModelCommandInput, cb: (err: any, data?: StopModelCommandOutput) => void): void;
    stopModel(args: StopModelCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: StopModelCommandOutput) => void): void;
    /**
     * <p>Adds one or more key-value tags to an Amazon Lookout for Vision model.
     *          For more information, see <i>Tagging a model</i> in the <i>Amazon Lookout for Vision Developer Guide</i>. </p>
     *          <p>This operation requires permissions to perform the
     *          <code>lookoutvision:TagResource</code> operation.</p>
     */
    tagResource(args: TagResourceCommandInput, options?: __HttpHandlerOptions): Promise<TagResourceCommandOutput>;
    tagResource(args: TagResourceCommandInput, cb: (err: any, data?: TagResourceCommandOutput) => void): void;
    tagResource(args: TagResourceCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: TagResourceCommandOutput) => void): void;
    /**
     * <p>Removes one or more tags from an Amazon Lookout for Vision model. For more information, see
     *          <i>Tagging a model</i> in the <i>Amazon Lookout for Vision Developer Guide</i>. </p>
     *          <p>This operation requires permissions to perform the
     *          <code>lookoutvision:UntagResource</code> operation.</p>
     */
    untagResource(args: UntagResourceCommandInput, options?: __HttpHandlerOptions): Promise<UntagResourceCommandOutput>;
    untagResource(args: UntagResourceCommandInput, cb: (err: any, data?: UntagResourceCommandOutput) => void): void;
    untagResource(args: UntagResourceCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: UntagResourceCommandOutput) => void): void;
    /**
     * <p>Adds one or more JSON Line entries to a dataset. A JSON Line includes information about an image
     *          used for training or testing an Amazon Lookout for Vision model. The following is an example JSON Line.</p>
     *
     *
     *          <p>Updating a dataset might take a while to complete. To check the current status, call <a>DescribeDataset</a> and
     *          check the <code>Status</code> field in the response.</p>
     *          <p>This operation requires permissions to perform the
     *          <code>lookoutvision:UpdateDatasetEntries</code> operation.</p>
     */
    updateDatasetEntries(args: UpdateDatasetEntriesCommandInput, options?: __HttpHandlerOptions): Promise<UpdateDatasetEntriesCommandOutput>;
    updateDatasetEntries(args: UpdateDatasetEntriesCommandInput, cb: (err: any, data?: UpdateDatasetEntriesCommandOutput) => void): void;
    updateDatasetEntries(args: UpdateDatasetEntriesCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: UpdateDatasetEntriesCommandOutput) => void): void;
}
