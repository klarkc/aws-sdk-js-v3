import { ForecastClient } from "./ForecastClient";
import { CreateDatasetCommandInput, CreateDatasetCommandOutput } from "./commands/CreateDatasetCommand";
import { CreateDatasetGroupCommandInput, CreateDatasetGroupCommandOutput } from "./commands/CreateDatasetGroupCommand";
import { CreateDatasetImportJobCommandInput, CreateDatasetImportJobCommandOutput } from "./commands/CreateDatasetImportJobCommand";
import { CreateForecastCommandInput, CreateForecastCommandOutput } from "./commands/CreateForecastCommand";
import { CreateForecastExportJobCommandInput, CreateForecastExportJobCommandOutput } from "./commands/CreateForecastExportJobCommand";
import { CreatePredictorBacktestExportJobCommandInput, CreatePredictorBacktestExportJobCommandOutput } from "./commands/CreatePredictorBacktestExportJobCommand";
import { CreatePredictorCommandInput, CreatePredictorCommandOutput } from "./commands/CreatePredictorCommand";
import { DeleteDatasetCommandInput, DeleteDatasetCommandOutput } from "./commands/DeleteDatasetCommand";
import { DeleteDatasetGroupCommandInput, DeleteDatasetGroupCommandOutput } from "./commands/DeleteDatasetGroupCommand";
import { DeleteDatasetImportJobCommandInput, DeleteDatasetImportJobCommandOutput } from "./commands/DeleteDatasetImportJobCommand";
import { DeleteForecastCommandInput, DeleteForecastCommandOutput } from "./commands/DeleteForecastCommand";
import { DeleteForecastExportJobCommandInput, DeleteForecastExportJobCommandOutput } from "./commands/DeleteForecastExportJobCommand";
import { DeletePredictorBacktestExportJobCommandInput, DeletePredictorBacktestExportJobCommandOutput } from "./commands/DeletePredictorBacktestExportJobCommand";
import { DeletePredictorCommandInput, DeletePredictorCommandOutput } from "./commands/DeletePredictorCommand";
import { DeleteResourceTreeCommandInput, DeleteResourceTreeCommandOutput } from "./commands/DeleteResourceTreeCommand";
import { DescribeDatasetCommandInput, DescribeDatasetCommandOutput } from "./commands/DescribeDatasetCommand";
import { DescribeDatasetGroupCommandInput, DescribeDatasetGroupCommandOutput } from "./commands/DescribeDatasetGroupCommand";
import { DescribeDatasetImportJobCommandInput, DescribeDatasetImportJobCommandOutput } from "./commands/DescribeDatasetImportJobCommand";
import { DescribeForecastCommandInput, DescribeForecastCommandOutput } from "./commands/DescribeForecastCommand";
import { DescribeForecastExportJobCommandInput, DescribeForecastExportJobCommandOutput } from "./commands/DescribeForecastExportJobCommand";
import { DescribePredictorBacktestExportJobCommandInput, DescribePredictorBacktestExportJobCommandOutput } from "./commands/DescribePredictorBacktestExportJobCommand";
import { DescribePredictorCommandInput, DescribePredictorCommandOutput } from "./commands/DescribePredictorCommand";
import { GetAccuracyMetricsCommandInput, GetAccuracyMetricsCommandOutput } from "./commands/GetAccuracyMetricsCommand";
import { ListDatasetGroupsCommandInput, ListDatasetGroupsCommandOutput } from "./commands/ListDatasetGroupsCommand";
import { ListDatasetImportJobsCommandInput, ListDatasetImportJobsCommandOutput } from "./commands/ListDatasetImportJobsCommand";
import { ListDatasetsCommandInput, ListDatasetsCommandOutput } from "./commands/ListDatasetsCommand";
import { ListForecastExportJobsCommandInput, ListForecastExportJobsCommandOutput } from "./commands/ListForecastExportJobsCommand";
import { ListForecastsCommandInput, ListForecastsCommandOutput } from "./commands/ListForecastsCommand";
import { ListPredictorBacktestExportJobsCommandInput, ListPredictorBacktestExportJobsCommandOutput } from "./commands/ListPredictorBacktestExportJobsCommand";
import { ListPredictorsCommandInput, ListPredictorsCommandOutput } from "./commands/ListPredictorsCommand";
import { ListTagsForResourceCommandInput, ListTagsForResourceCommandOutput } from "./commands/ListTagsForResourceCommand";
import { StopResourceCommandInput, StopResourceCommandOutput } from "./commands/StopResourceCommand";
import { TagResourceCommandInput, TagResourceCommandOutput } from "./commands/TagResourceCommand";
import { UntagResourceCommandInput, UntagResourceCommandOutput } from "./commands/UntagResourceCommand";
import { UpdateDatasetGroupCommandInput, UpdateDatasetGroupCommandOutput } from "./commands/UpdateDatasetGroupCommand";
import { HttpHandlerOptions as __HttpHandlerOptions } from "@aws-sdk/types";
/**
 * <p>Provides APIs for creating and managing Amazon Forecast resources.</p>
 */
export declare class Forecast extends ForecastClient {
    /**
     * <p>Creates an Amazon Forecast dataset. The information about the dataset that you provide helps
     *       Forecast understand how to consume the data for model training. This includes the
     *       following:</p>
     *          <ul>
     *             <li>
     *                <p>
     *                   <i>
     *                      <code>DataFrequency</code>
     *                   </i> - How frequently your historical
     *           time-series data is collected.</p>
     *             </li>
     *             <li>
     *                <p>
     *                   <i>
     *                      <code>Domain</code>
     *                   </i> and
     *             <i>
     *                      <code>DatasetType</code>
     *                   </i> - Each dataset has an associated dataset
     *           domain and a type within the domain. Amazon Forecast provides a list of predefined domains and
     *           types within each domain. For each unique dataset domain and type within the domain,
     *           Amazon Forecast requires your data to include a minimum set of predefined fields.</p>
     *             </li>
     *             <li>
     *                <p>
     *                   <i>
     *                      <code>Schema</code>
     *                   </i> - A schema specifies the fields in the dataset,
     *           including the field name and data type.</p>
     *             </li>
     *          </ul>
     *          <p>After creating a dataset, you import your training data into it and add the dataset to a
     *       dataset group. You use the dataset group to create a predictor. For more information, see
     *         <a>howitworks-datasets-groups</a>.</p>
     *          <p>To get a list of all your datasets, use the <a>ListDatasets</a>
     *       operation.</p>
     *          <p>For example Forecast datasets, see the <a href="https://github.com/aws-samples/amazon-forecast-samples">Amazon Forecast Sample GitHub
     *         repository</a>.</p>
     *          <note>
     *             <p>The <code>Status</code> of a dataset must be <code>ACTIVE</code> before you can import
     *         training data. Use the <a>DescribeDataset</a> operation to get the status.</p>
     *          </note>
     */
    createDataset(args: CreateDatasetCommandInput, options?: __HttpHandlerOptions): Promise<CreateDatasetCommandOutput>;
    createDataset(args: CreateDatasetCommandInput, cb: (err: any, data?: CreateDatasetCommandOutput) => void): void;
    createDataset(args: CreateDatasetCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: CreateDatasetCommandOutput) => void): void;
    /**
     * <p>Creates a dataset group, which holds a collection of related datasets. You can add
     *       datasets to the dataset group when you create the dataset group, or later by using the <a>UpdateDatasetGroup</a> operation.</p>
     *          <p>After creating a dataset group and adding datasets, you use the dataset group when you
     *       create a predictor. For more information, see <a>howitworks-datasets-groups</a>.</p>
     *          <p>To get a list of all your datasets groups, use the <a>ListDatasetGroups</a>
     *       operation.</p>
     *          <note>
     *             <p>The <code>Status</code> of a dataset group must be <code>ACTIVE</code> before you can
     *         use the dataset group to create a predictor. To get the status, use the <a>DescribeDatasetGroup</a> operation.</p>
     *          </note>
     */
    createDatasetGroup(args: CreateDatasetGroupCommandInput, options?: __HttpHandlerOptions): Promise<CreateDatasetGroupCommandOutput>;
    createDatasetGroup(args: CreateDatasetGroupCommandInput, cb: (err: any, data?: CreateDatasetGroupCommandOutput) => void): void;
    createDatasetGroup(args: CreateDatasetGroupCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: CreateDatasetGroupCommandOutput) => void): void;
    /**
     * <p>Imports your training data to an Amazon Forecast dataset. You provide the location of your
     *       training data in an Amazon Simple Storage Service (Amazon S3) bucket and the Amazon Resource Name (ARN) of the dataset
     *       that you want to import the data to.</p>
     *          <p>You must specify a <a>DataSource</a> object that includes an AWS Identity and Access Management (IAM)
     *       role that Amazon Forecast can assume to access the data, as Amazon Forecast makes a copy of your data and
     *       processes it in an internal AWS system. For more information, see <a>aws-forecast-iam-roles</a>.</p>
     *          <p>The training data must be in CSV format. The delimiter must be a comma (,).</p>
     *          <p>You can specify the path to a specific CSV file, the S3 bucket, or to a folder in the S3
     *       bucket. For the latter two cases, Amazon Forecast imports all files up to the limit of 10,000
     *       files.</p>
     *
     *
     *          <p>Because dataset imports are not aggregated, your most recent dataset import is the one
     *       that is used when training a predictor or generating a forecast. Make sure that your most
     *       recent dataset import contains all of the data you want to model off of, and not just the new
     *       data collected since the previous import.</p>
     *
     *
     *          <p>To get a list of all your dataset import jobs, filtered by specified criteria, use the
     *         <a>ListDatasetImportJobs</a> operation.</p>
     */
    createDatasetImportJob(args: CreateDatasetImportJobCommandInput, options?: __HttpHandlerOptions): Promise<CreateDatasetImportJobCommandOutput>;
    createDatasetImportJob(args: CreateDatasetImportJobCommandInput, cb: (err: any, data?: CreateDatasetImportJobCommandOutput) => void): void;
    createDatasetImportJob(args: CreateDatasetImportJobCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: CreateDatasetImportJobCommandOutput) => void): void;
    /**
     * <p>Creates a forecast for each item in the <code>TARGET_TIME_SERIES</code> dataset that was
     *       used to train the predictor. This is known as inference. To retrieve the forecast for a single
     *       item at low latency, use the  operation. To
     *       export the complete forecast into your Amazon Simple Storage Service (Amazon S3) bucket, use the <a>CreateForecastExportJob</a> operation.</p>
     *          <p>The range of the forecast is determined by the <code>ForecastHorizon</code> value, which
     *       you specify in the <a>CreatePredictor</a> request. When you query a forecast, you
     *       can request a specific date range within the forecast.</p>
     *          <p>To get a list of all your forecasts, use the <a>ListForecasts</a>
     *       operation.</p>
     *          <note>
     *             <p>The forecasts generated by Amazon Forecast are in the same time zone as the dataset that was
     *         used to create the predictor.</p>
     *          </note>
     *          <p>For more information, see <a>howitworks-forecast</a>.</p>
     *          <note>
     *             <p>The <code>Status</code> of the forecast must be <code>ACTIVE</code> before you can query
     *         or export the forecast. Use the <a>DescribeForecast</a> operation to get the
     *         status.</p>
     *          </note>
     */
    createForecast(args: CreateForecastCommandInput, options?: __HttpHandlerOptions): Promise<CreateForecastCommandOutput>;
    createForecast(args: CreateForecastCommandInput, cb: (err: any, data?: CreateForecastCommandOutput) => void): void;
    createForecast(args: CreateForecastCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: CreateForecastCommandOutput) => void): void;
    /**
     * <p>Exports a forecast created by the <a>CreateForecast</a> operation to your
     *       Amazon Simple Storage Service (Amazon S3) bucket. The forecast file name will match the following conventions:</p>
     *          <p><ForecastExportJobName>_<ExportTimestamp>_<PartNumber></p>
     *          <p>where the <ExportTimestamp> component is in Java SimpleDateFormat
     *       (yyyy-MM-ddTHH-mm-ssZ).</p>
     *          <p>You must specify a <a>DataDestination</a> object that includes an AWS Identity and Access Management
     *       (IAM) role that Amazon Forecast can assume to access the Amazon S3 bucket. For more information, see
     *         <a>aws-forecast-iam-roles</a>.</p>
     *          <p>For more information, see <a>howitworks-forecast</a>.</p>
     *          <p>To get a list of all your forecast export jobs, use the <a>ListForecastExportJobs</a> operation.</p>
     *          <note>
     *             <p>The <code>Status</code> of the forecast export job must be <code>ACTIVE</code> before
     *         you can access the forecast in your Amazon S3 bucket. To get the status, use the <a>DescribeForecastExportJob</a> operation.</p>
     *          </note>
     */
    createForecastExportJob(args: CreateForecastExportJobCommandInput, options?: __HttpHandlerOptions): Promise<CreateForecastExportJobCommandOutput>;
    createForecastExportJob(args: CreateForecastExportJobCommandInput, cb: (err: any, data?: CreateForecastExportJobCommandOutput) => void): void;
    createForecastExportJob(args: CreateForecastExportJobCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: CreateForecastExportJobCommandOutput) => void): void;
    /**
     * <p>Creates an Amazon Forecast predictor.</p>
     *          <p>In the request, provide a dataset group and either specify an algorithm or let
     *       Amazon Forecast choose an algorithm for you using AutoML. If you specify an algorithm, you also can
     *       override algorithm-specific hyperparameters.</p>
     *          <p>Amazon Forecast uses the algorithm to train a predictor using the latest version of the
     *       datasets in the specified dataset group. You can then generate a
     *       forecast using the <a>CreateForecast</a> operation.</p>
     *          <p>
     *       To see the evaluation metrics, use the <a>GetAccuracyMetrics</a> operation.
     *     </p>
     *          <p>You can specify a featurization configuration to fill and aggregate the data
     *       fields in the <code>TARGET_TIME_SERIES</code> dataset to improve model training. For more
     *       information, see <a>FeaturizationConfig</a>.</p>
     *          <p>For RELATED_TIME_SERIES datasets, <code>CreatePredictor</code> verifies that the
     *         <code>DataFrequency</code> specified when the dataset was created matches the
     *         <code>ForecastFrequency</code>. TARGET_TIME_SERIES datasets don't have this restriction.
     *       Amazon Forecast also verifies the delimiter and timestamp format. For more information, see <a>howitworks-datasets-groups</a>.</p>
     *          <p>By default, predictors are trained and evaluated at the 0.1 (P10), 0.5 (P50), and 0.9
     *       (P90) quantiles. You can choose custom forecast types to train and evaluate your predictor
     *       by setting the <code>ForecastTypes</code>.
     *     </p>
     *          <p>
     *             <b>AutoML</b>
     *          </p>
     *          <p>If you want Amazon Forecast to evaluate each algorithm and choose the one that minimizes the
     *         <code>objective function</code>, set <code>PerformAutoML</code> to <code>true</code>. The
     *         <code>objective function</code> is defined as the mean of the weighted losses over the
     *       forecast types. By default, these are the p10, p50, and p90
     *       quantile losses. For more information, see <a>EvaluationResult</a>.</p>
     *          <p>When AutoML is enabled, the following properties are disallowed:</p>
     *          <ul>
     *             <li>
     *                <p>
     *                   <code>AlgorithmArn</code>
     *                </p>
     *             </li>
     *             <li>
     *                <p>
     *                   <code>HPOConfig</code>
     *                </p>
     *             </li>
     *             <li>
     *                <p>
     *                   <code>PerformHPO</code>
     *                </p>
     *             </li>
     *             <li>
     *                <p>
     *                   <code>TrainingParameters</code>
     *                </p>
     *             </li>
     *          </ul>
     *
     *
     *
     *          <p>To get a list of all of your predictors, use the <a>ListPredictors</a>
     *       operation.</p>
     *          <note>
     *             <p>Before you can use the predictor to create a forecast, the <code>Status</code> of the
     *         predictor must be <code>ACTIVE</code>, signifying that training has completed. To get the
     *         status, use the <a>DescribePredictor</a> operation.</p>
     *          </note>
     */
    createPredictor(args: CreatePredictorCommandInput, options?: __HttpHandlerOptions): Promise<CreatePredictorCommandOutput>;
    createPredictor(args: CreatePredictorCommandInput, cb: (err: any, data?: CreatePredictorCommandOutput) => void): void;
    createPredictor(args: CreatePredictorCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: CreatePredictorCommandOutput) => void): void;
    /**
     * <p>Exports backtest forecasts and accuracy metrics generated by the <a>CreatePredictor</a> operation. Two folders containing CSV files are exported
     *             to your specified S3 bucket.</p>
     *         <p> The export file names will match the following conventions:</p>
     *         <p>
     *             <code><ExportJobName>_<ExportTimestamp>_<PartNumber>.csv</code>
     *          </p>
     *         <p>The <ExportTimestamp> component is in Java SimpleDate format
     *             (yyyy-MM-ddTHH-mm-ssZ).</p>
     *         <p>You must specify a <a>DataDestination</a> object that includes an Amazon S3
     *             bucket and an AWS Identity and Access Management (IAM) role that Amazon Forecast can assume to access the Amazon S3
     *             bucket. For more information, see <a>aws-forecast-iam-roles</a>.</p>
     *         <note>
     *             <p>The <code>Status</code> of the export job must be <code>ACTIVE</code> before
     *                 you can access the export in your Amazon S3 bucket. To get the status, use the <a>DescribePredictorBacktestExportJob</a> operation.</p>
     *         </note>
     */
    createPredictorBacktestExportJob(args: CreatePredictorBacktestExportJobCommandInput, options?: __HttpHandlerOptions): Promise<CreatePredictorBacktestExportJobCommandOutput>;
    createPredictorBacktestExportJob(args: CreatePredictorBacktestExportJobCommandInput, cb: (err: any, data?: CreatePredictorBacktestExportJobCommandOutput) => void): void;
    createPredictorBacktestExportJob(args: CreatePredictorBacktestExportJobCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: CreatePredictorBacktestExportJobCommandOutput) => void): void;
    /**
     * <p>Deletes an Amazon Forecast dataset that was created using the <a>CreateDataset</a>
     *       operation. You can only delete datasets that have a status of <code>ACTIVE</code> or
     *         <code>CREATE_FAILED</code>. To get the status use the <a>DescribeDataset</a>
     *       operation.</p>
     *          <note>
     *             <p>Forecast does not automatically update any dataset groups that contain the deleted dataset.
     *         In order to update the dataset group, use the
     *         operation, omitting the deleted dataset's ARN.</p>
     *          </note>
     */
    deleteDataset(args: DeleteDatasetCommandInput, options?: __HttpHandlerOptions): Promise<DeleteDatasetCommandOutput>;
    deleteDataset(args: DeleteDatasetCommandInput, cb: (err: any, data?: DeleteDatasetCommandOutput) => void): void;
    deleteDataset(args: DeleteDatasetCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: DeleteDatasetCommandOutput) => void): void;
    /**
     * <p>Deletes a dataset group created using the <a>CreateDatasetGroup</a> operation.
     *       You can only delete dataset groups that have a status of <code>ACTIVE</code>,
     *         <code>CREATE_FAILED</code>, or <code>UPDATE_FAILED</code>. To get the status, use the <a>DescribeDatasetGroup</a> operation.</p>
     *          <p>This operation deletes only the dataset group, not the datasets in the group.</p>
     */
    deleteDatasetGroup(args: DeleteDatasetGroupCommandInput, options?: __HttpHandlerOptions): Promise<DeleteDatasetGroupCommandOutput>;
    deleteDatasetGroup(args: DeleteDatasetGroupCommandInput, cb: (err: any, data?: DeleteDatasetGroupCommandOutput) => void): void;
    deleteDatasetGroup(args: DeleteDatasetGroupCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: DeleteDatasetGroupCommandOutput) => void): void;
    /**
     * <p>Deletes a dataset import job created using the <a>CreateDatasetImportJob</a>
     *       operation. You can delete only dataset import jobs that have a status of <code>ACTIVE</code>
     *       or <code>CREATE_FAILED</code>. To get the status, use the <a>DescribeDatasetImportJob</a> operation.</p>
     */
    deleteDatasetImportJob(args: DeleteDatasetImportJobCommandInput, options?: __HttpHandlerOptions): Promise<DeleteDatasetImportJobCommandOutput>;
    deleteDatasetImportJob(args: DeleteDatasetImportJobCommandInput, cb: (err: any, data?: DeleteDatasetImportJobCommandOutput) => void): void;
    deleteDatasetImportJob(args: DeleteDatasetImportJobCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: DeleteDatasetImportJobCommandOutput) => void): void;
    /**
     * <p>Deletes a forecast created using the <a>CreateForecast</a> operation. You can
     *       delete only forecasts that have a status of <code>ACTIVE</code> or <code>CREATE_FAILED</code>.
     *       To get the status, use the <a>DescribeForecast</a> operation.</p>
     *          <p>You can't delete a forecast while it is being exported. After a forecast is deleted, you
     *       can no longer query the forecast.</p>
     */
    deleteForecast(args: DeleteForecastCommandInput, options?: __HttpHandlerOptions): Promise<DeleteForecastCommandOutput>;
    deleteForecast(args: DeleteForecastCommandInput, cb: (err: any, data?: DeleteForecastCommandOutput) => void): void;
    deleteForecast(args: DeleteForecastCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: DeleteForecastCommandOutput) => void): void;
    /**
     * <p>Deletes a forecast export job created using the <a>CreateForecastExportJob</a>
     *       operation. You can delete only export jobs that have a status of <code>ACTIVE</code> or
     *         <code>CREATE_FAILED</code>. To get the status, use the <a>DescribeForecastExportJob</a> operation.</p>
     */
    deleteForecastExportJob(args: DeleteForecastExportJobCommandInput, options?: __HttpHandlerOptions): Promise<DeleteForecastExportJobCommandOutput>;
    deleteForecastExportJob(args: DeleteForecastExportJobCommandInput, cb: (err: any, data?: DeleteForecastExportJobCommandOutput) => void): void;
    deleteForecastExportJob(args: DeleteForecastExportJobCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: DeleteForecastExportJobCommandOutput) => void): void;
    /**
     * <p>Deletes a predictor created using the <a>CreatePredictor</a> operation. You can
     *       delete only predictor that have a status of <code>ACTIVE</code> or <code>CREATE_FAILED</code>.
     *       To get the status, use the <a>DescribePredictor</a> operation.</p>
     */
    deletePredictor(args: DeletePredictorCommandInput, options?: __HttpHandlerOptions): Promise<DeletePredictorCommandOutput>;
    deletePredictor(args: DeletePredictorCommandInput, cb: (err: any, data?: DeletePredictorCommandOutput) => void): void;
    deletePredictor(args: DeletePredictorCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: DeletePredictorCommandOutput) => void): void;
    /**
     * <p>Deletes a predictor backtest export job.</p>
     */
    deletePredictorBacktestExportJob(args: DeletePredictorBacktestExportJobCommandInput, options?: __HttpHandlerOptions): Promise<DeletePredictorBacktestExportJobCommandOutput>;
    deletePredictorBacktestExportJob(args: DeletePredictorBacktestExportJobCommandInput, cb: (err: any, data?: DeletePredictorBacktestExportJobCommandOutput) => void): void;
    deletePredictorBacktestExportJob(args: DeletePredictorBacktestExportJobCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: DeletePredictorBacktestExportJobCommandOutput) => void): void;
    /**
     * <p>Deletes an entire resource tree. This operation will delete the parent resource and
     *             its child resources.</p>
     *         <p>Child resources are resources that were created from another resource. For example,
     *             when a forecast is generated from a predictor, the forecast is the child resource and
     *             the predictor is the parent resource.</p>
     *         <p>Amazon Forecast resources possess the following parent-child resource hierarchies:</p>
     *
     *         <ul>
     *             <li>
     *                 <p>
     *                   <b>Dataset</b>: dataset import jobs</p>
     *             </li>
     *             <li>
     *                 <p>
     *                   <b>Dataset Group</b>: predictors, predictor backtest
     *                     export jobs, forecasts, forecast export jobs</p>
     *             </li>
     *             <li>
     *                 <p>
     *                   <b>Predictor</b>: predictor backtest export jobs,
     *                     forecasts, forecast export jobs</p>
     *             </li>
     *             <li>
     *                 <p>
     *                   <b>Forecast</b>: forecast export jobs</p>
     *             </li>
     *          </ul>
     *         <note>
     *             <p>
     *                <code>DeleteResourceTree</code> will only delete Amazon Forecast resources, and will not
     *                 delete datasets or exported files stored in Amazon S3. </p>
     *         </note>
     */
    deleteResourceTree(args: DeleteResourceTreeCommandInput, options?: __HttpHandlerOptions): Promise<DeleteResourceTreeCommandOutput>;
    deleteResourceTree(args: DeleteResourceTreeCommandInput, cb: (err: any, data?: DeleteResourceTreeCommandOutput) => void): void;
    deleteResourceTree(args: DeleteResourceTreeCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: DeleteResourceTreeCommandOutput) => void): void;
    /**
     * <p>Describes an Amazon Forecast dataset created using the <a>CreateDataset</a>
     *       operation.</p>
     *          <p>In addition to listing the parameters specified in the <code>CreateDataset</code> request,
     *       this operation includes the following dataset properties:</p>
     *          <ul>
     *             <li>
     *                <p>
     *                   <code>CreationTime</code>
     *                </p>
     *             </li>
     *             <li>
     *                <p>
     *                   <code>LastModificationTime</code>
     *                </p>
     *             </li>
     *             <li>
     *                <p>
     *                   <code>Status</code>
     *                </p>
     *             </li>
     *          </ul>
     */
    describeDataset(args: DescribeDatasetCommandInput, options?: __HttpHandlerOptions): Promise<DescribeDatasetCommandOutput>;
    describeDataset(args: DescribeDatasetCommandInput, cb: (err: any, data?: DescribeDatasetCommandOutput) => void): void;
    describeDataset(args: DescribeDatasetCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: DescribeDatasetCommandOutput) => void): void;
    /**
     * <p>Describes a dataset group created using the <a>CreateDatasetGroup</a>
     *       operation.</p>
     *          <p>In addition to listing the parameters provided in the <code>CreateDatasetGroup</code>
     *       request, this operation includes the following properties:</p>
     *          <ul>
     *             <li>
     *                <p>
     *                   <code>DatasetArns</code> - The datasets belonging to the group.</p>
     *             </li>
     *             <li>
     *                <p>
     *                   <code>CreationTime</code>
     *                </p>
     *             </li>
     *             <li>
     *                <p>
     *                   <code>LastModificationTime</code>
     *                </p>
     *             </li>
     *             <li>
     *                <p>
     *                   <code>Status</code>
     *                </p>
     *             </li>
     *          </ul>
     */
    describeDatasetGroup(args: DescribeDatasetGroupCommandInput, options?: __HttpHandlerOptions): Promise<DescribeDatasetGroupCommandOutput>;
    describeDatasetGroup(args: DescribeDatasetGroupCommandInput, cb: (err: any, data?: DescribeDatasetGroupCommandOutput) => void): void;
    describeDatasetGroup(args: DescribeDatasetGroupCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: DescribeDatasetGroupCommandOutput) => void): void;
    /**
     * <p>Describes a dataset import job created using the <a>CreateDatasetImportJob</a>
     *       operation.</p>
     *          <p>In addition to listing the parameters provided in the <code>CreateDatasetImportJob</code>
     *       request, this operation includes the following properties:</p>
     *          <ul>
     *             <li>
     *                <p>
     *                   <code>CreationTime</code>
     *                </p>
     *             </li>
     *             <li>
     *                <p>
     *                   <code>LastModificationTime</code>
     *                </p>
     *             </li>
     *             <li>
     *                <p>
     *                   <code>DataSize</code>
     *                </p>
     *             </li>
     *             <li>
     *                <p>
     *                   <code>FieldStatistics</code>
     *                </p>
     *             </li>
     *             <li>
     *                <p>
     *                   <code>Status</code>
     *                </p>
     *             </li>
     *             <li>
     *                <p>
     *                   <code>Message</code> - If an error occurred, information about the error.</p>
     *             </li>
     *          </ul>
     */
    describeDatasetImportJob(args: DescribeDatasetImportJobCommandInput, options?: __HttpHandlerOptions): Promise<DescribeDatasetImportJobCommandOutput>;
    describeDatasetImportJob(args: DescribeDatasetImportJobCommandInput, cb: (err: any, data?: DescribeDatasetImportJobCommandOutput) => void): void;
    describeDatasetImportJob(args: DescribeDatasetImportJobCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: DescribeDatasetImportJobCommandOutput) => void): void;
    /**
     * <p>Describes a forecast created using the <a>CreateForecast</a> operation.</p>
     *          <p>In addition to listing the properties provided in the <code>CreateForecast</code> request,
     *       this operation lists the following properties:</p>
     *          <ul>
     *             <li>
     *                <p>
     *                   <code>DatasetGroupArn</code> - The dataset group that provided the training
     *           data.</p>
     *             </li>
     *             <li>
     *                <p>
     *                   <code>CreationTime</code>
     *                </p>
     *             </li>
     *             <li>
     *                <p>
     *                   <code>LastModificationTime</code>
     *                </p>
     *             </li>
     *             <li>
     *                <p>
     *                   <code>Status</code>
     *                </p>
     *             </li>
     *             <li>
     *                <p>
     *                   <code>Message</code> - If an error occurred, information about the error.</p>
     *             </li>
     *          </ul>
     */
    describeForecast(args: DescribeForecastCommandInput, options?: __HttpHandlerOptions): Promise<DescribeForecastCommandOutput>;
    describeForecast(args: DescribeForecastCommandInput, cb: (err: any, data?: DescribeForecastCommandOutput) => void): void;
    describeForecast(args: DescribeForecastCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: DescribeForecastCommandOutput) => void): void;
    /**
     * <p>Describes a forecast export job created using the <a>CreateForecastExportJob</a> operation.</p>
     *          <p>In addition to listing the properties provided by the user in the
     *         <code>CreateForecastExportJob</code> request, this operation lists the following
     *       properties:</p>
     *          <ul>
     *             <li>
     *                <p>
     *                   <code>CreationTime</code>
     *                </p>
     *             </li>
     *             <li>
     *                <p>
     *                   <code>LastModificationTime</code>
     *                </p>
     *             </li>
     *             <li>
     *                <p>
     *                   <code>Status</code>
     *                </p>
     *             </li>
     *             <li>
     *                <p>
     *                   <code>Message</code> - If an error occurred, information about the error.</p>
     *             </li>
     *          </ul>
     */
    describeForecastExportJob(args: DescribeForecastExportJobCommandInput, options?: __HttpHandlerOptions): Promise<DescribeForecastExportJobCommandOutput>;
    describeForecastExportJob(args: DescribeForecastExportJobCommandInput, cb: (err: any, data?: DescribeForecastExportJobCommandOutput) => void): void;
    describeForecastExportJob(args: DescribeForecastExportJobCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: DescribeForecastExportJobCommandOutput) => void): void;
    /**
     * <p>Describes a predictor created using the <a>CreatePredictor</a>
     *       operation.</p>
     *          <p>In addition to listing the properties provided in the <code>CreatePredictor</code>
     *       request, this operation lists the following properties:</p>
     *          <ul>
     *             <li>
     *                <p>
     *                   <code>DatasetImportJobArns</code> - The dataset import jobs used to import training
     *           data.</p>
     *             </li>
     *             <li>
     *                <p>
     *                   <code>AutoMLAlgorithmArns</code> - If AutoML is performed, the algorithms that were
     *           evaluated.</p>
     *             </li>
     *             <li>
     *                <p>
     *                   <code>CreationTime</code>
     *                </p>
     *             </li>
     *             <li>
     *                <p>
     *                   <code>LastModificationTime</code>
     *                </p>
     *             </li>
     *             <li>
     *                <p>
     *                   <code>Status</code>
     *                </p>
     *             </li>
     *             <li>
     *                <p>
     *                   <code>Message</code> - If an error occurred, information about the error.</p>
     *             </li>
     *          </ul>
     */
    describePredictor(args: DescribePredictorCommandInput, options?: __HttpHandlerOptions): Promise<DescribePredictorCommandOutput>;
    describePredictor(args: DescribePredictorCommandInput, cb: (err: any, data?: DescribePredictorCommandOutput) => void): void;
    describePredictor(args: DescribePredictorCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: DescribePredictorCommandOutput) => void): void;
    /**
     * <p>Describes a predictor backtest export job created using the <a>CreatePredictorBacktestExportJob</a> operation.</p>
     *         <p>In addition to listing the properties provided by the user in the
     *             <code>CreatePredictorBacktestExportJob</code> request, this operation lists the
     *             following properties:</p>
     *         <ul>
     *             <li>
     *                 <p>
     *                     <code>CreationTime</code>
     *                 </p>
     *             </li>
     *             <li>
     *                 <p>
     *                     <code>LastModificationTime</code>
     *                 </p>
     *             </li>
     *             <li>
     *                 <p>
     *                     <code>Status</code>
     *                 </p>
     *             </li>
     *             <li>
     *                 <p>
     *                   <code>Message</code> (if an error occurred)</p>
     *             </li>
     *          </ul>
     */
    describePredictorBacktestExportJob(args: DescribePredictorBacktestExportJobCommandInput, options?: __HttpHandlerOptions): Promise<DescribePredictorBacktestExportJobCommandOutput>;
    describePredictorBacktestExportJob(args: DescribePredictorBacktestExportJobCommandInput, cb: (err: any, data?: DescribePredictorBacktestExportJobCommandOutput) => void): void;
    describePredictorBacktestExportJob(args: DescribePredictorBacktestExportJobCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: DescribePredictorBacktestExportJobCommandOutput) => void): void;
    /**
     * <p>Provides metrics on the accuracy of the models that were trained by the <a>CreatePredictor</a> operation. Use metrics to see how well the model performed and
     *       to decide whether to use the predictor to generate a forecast. For more information, see
     *         <a href="https://docs.aws.amazon.com/forecast/latest/dg/metrics.html">Predictor
     *         Metrics</a>.</p>
     *          <p>This operation generates metrics for each backtest window that was evaluated. The number of backtest windows
     *       (<code>NumberOfBacktestWindows</code>) is specified using the
     *       <a>EvaluationParameters</a> object, which is optionally
     *       included in the <code>CreatePredictor</code> request. If
     *       <code>NumberOfBacktestWindows</code> isn't specified, the number defaults to one.</p>
     *          <p>The parameters of the <code>filling</code> method determine which items contribute to
     *       the metrics. If you want all items to contribute, specify <code>zero</code>.
     *       If you want only those items that have complete data in the range being evaluated to
     *       contribute, specify <code>nan</code>.
     *       For more information, see <a>FeaturizationMethod</a>.</p>
     *
     *          <note>
     *             <p>Before you can get accuracy metrics, the <code>Status</code> of the predictor must be
     *         <code>ACTIVE</code>, signifying that training has completed.
     *         To get the status, use the <a>DescribePredictor</a> operation.</p>
     *          </note>
     */
    getAccuracyMetrics(args: GetAccuracyMetricsCommandInput, options?: __HttpHandlerOptions): Promise<GetAccuracyMetricsCommandOutput>;
    getAccuracyMetrics(args: GetAccuracyMetricsCommandInput, cb: (err: any, data?: GetAccuracyMetricsCommandOutput) => void): void;
    getAccuracyMetrics(args: GetAccuracyMetricsCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: GetAccuracyMetricsCommandOutput) => void): void;
    /**
     * <p>Returns a list of dataset groups created using the <a>CreateDatasetGroup</a>
     *       operation. For each dataset group, this operation returns a summary of its properties,
     *       including its Amazon Resource Name (ARN). You can retrieve the complete set of properties by
     *       using the dataset group ARN with the <a>DescribeDatasetGroup</a> operation.</p>
     */
    listDatasetGroups(args: ListDatasetGroupsCommandInput, options?: __HttpHandlerOptions): Promise<ListDatasetGroupsCommandOutput>;
    listDatasetGroups(args: ListDatasetGroupsCommandInput, cb: (err: any, data?: ListDatasetGroupsCommandOutput) => void): void;
    listDatasetGroups(args: ListDatasetGroupsCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: ListDatasetGroupsCommandOutput) => void): void;
    /**
     * <p>Returns a list of dataset import jobs created using the <a>CreateDatasetImportJob</a> operation. For each import job, this operation returns a
     *       summary of its properties, including its Amazon Resource Name (ARN). You can retrieve the
     *       complete set of properties by using the ARN with the <a>DescribeDatasetImportJob</a> operation. You can filter the list by providing an array of <a>Filter</a>
     *       objects.</p>
     */
    listDatasetImportJobs(args: ListDatasetImportJobsCommandInput, options?: __HttpHandlerOptions): Promise<ListDatasetImportJobsCommandOutput>;
    listDatasetImportJobs(args: ListDatasetImportJobsCommandInput, cb: (err: any, data?: ListDatasetImportJobsCommandOutput) => void): void;
    listDatasetImportJobs(args: ListDatasetImportJobsCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: ListDatasetImportJobsCommandOutput) => void): void;
    /**
     * <p>Returns a list of datasets created using the <a>CreateDataset</a> operation.
     *       For each dataset, a summary of its properties, including its Amazon Resource Name (ARN), is
     *       returned. To retrieve the complete set of properties, use the ARN with the <a>DescribeDataset</a> operation.</p>
     */
    listDatasets(args: ListDatasetsCommandInput, options?: __HttpHandlerOptions): Promise<ListDatasetsCommandOutput>;
    listDatasets(args: ListDatasetsCommandInput, cb: (err: any, data?: ListDatasetsCommandOutput) => void): void;
    listDatasets(args: ListDatasetsCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: ListDatasetsCommandOutput) => void): void;
    /**
     * <p>Returns a list of forecast export jobs created using the <a>CreateForecastExportJob</a> operation. For each forecast export job, this operation
     *       returns a summary of its properties, including its Amazon Resource Name (ARN). To retrieve the
     *       complete set of properties, use the ARN with the <a>DescribeForecastExportJob</a>
     *       operation. You can filter the list using an array of <a>Filter</a> objects.</p>
     */
    listForecastExportJobs(args: ListForecastExportJobsCommandInput, options?: __HttpHandlerOptions): Promise<ListForecastExportJobsCommandOutput>;
    listForecastExportJobs(args: ListForecastExportJobsCommandInput, cb: (err: any, data?: ListForecastExportJobsCommandOutput) => void): void;
    listForecastExportJobs(args: ListForecastExportJobsCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: ListForecastExportJobsCommandOutput) => void): void;
    /**
     * <p>Returns a list of forecasts created using the <a>CreateForecast</a> operation.
     *       For each forecast, this operation returns a summary of its properties, including its Amazon
     *       Resource Name (ARN). To retrieve the complete set of properties, specify the ARN with the
     *         <a>DescribeForecast</a> operation. You can filter the list using an array of
     *         <a>Filter</a> objects.</p>
     */
    listForecasts(args: ListForecastsCommandInput, options?: __HttpHandlerOptions): Promise<ListForecastsCommandOutput>;
    listForecasts(args: ListForecastsCommandInput, cb: (err: any, data?: ListForecastsCommandOutput) => void): void;
    listForecasts(args: ListForecastsCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: ListForecastsCommandOutput) => void): void;
    /**
     * <p>Returns a list of predictor backtest export jobs created using the <a>CreatePredictorBacktestExportJob</a> operation. This operation returns a summary
     *             for each backtest export job. You can filter the list using an array of <a>Filter</a> objects.</p>
     *         <p>To retrieve the complete set of properties for a particular backtest export job, use the
     *             ARN with the <a>DescribePredictorBacktestExportJob</a> operation.</p>
     */
    listPredictorBacktestExportJobs(args: ListPredictorBacktestExportJobsCommandInput, options?: __HttpHandlerOptions): Promise<ListPredictorBacktestExportJobsCommandOutput>;
    listPredictorBacktestExportJobs(args: ListPredictorBacktestExportJobsCommandInput, cb: (err: any, data?: ListPredictorBacktestExportJobsCommandOutput) => void): void;
    listPredictorBacktestExportJobs(args: ListPredictorBacktestExportJobsCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: ListPredictorBacktestExportJobsCommandOutput) => void): void;
    /**
     * <p>Returns a list of predictors created using the <a>CreatePredictor</a>
     *       operation. For each predictor, this operation returns a summary of its properties, including
     *       its Amazon Resource Name (ARN). You can retrieve the complete set of properties by using the
     *       ARN with the <a>DescribePredictor</a> operation. You can filter the list using an
     *       array of <a>Filter</a> objects.</p>
     */
    listPredictors(args: ListPredictorsCommandInput, options?: __HttpHandlerOptions): Promise<ListPredictorsCommandOutput>;
    listPredictors(args: ListPredictorsCommandInput, cb: (err: any, data?: ListPredictorsCommandOutput) => void): void;
    listPredictors(args: ListPredictorsCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: ListPredictorsCommandOutput) => void): void;
    /**
     * <p>Lists the tags for an Amazon Forecast resource.</p>
     */
    listTagsForResource(args: ListTagsForResourceCommandInput, options?: __HttpHandlerOptions): Promise<ListTagsForResourceCommandOutput>;
    listTagsForResource(args: ListTagsForResourceCommandInput, cb: (err: any, data?: ListTagsForResourceCommandOutput) => void): void;
    listTagsForResource(args: ListTagsForResourceCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: ListTagsForResourceCommandOutput) => void): void;
    /**
     * <p>Stops a resource.</p>
     *          <p>The resource undergoes the following states:
     *          <code>CREATE_STOPPING</code> and <code>CREATE_STOPPED</code>. You cannot resume
     *          a resource once it has been stopped.</p>
     *          <p>This operation can be applied to the following resources (and their corresponding child
     *          resources):</p>
     *          <ul>
     *             <li>
     *                <p>Dataset Import Job</p>
     *             </li>
     *             <li>
     *                <p>Predictor Job</p>
     *             </li>
     *             <li>
     *                <p>Forecast Job</p>
     *             </li>
     *             <li>
     *                <p>Forecast Export Job</p>
     *             </li>
     *             <li>
     *                <p>Predictor Backtest Export Job</p>
     *             </li>
     *          </ul>
     */
    stopResource(args: StopResourceCommandInput, options?: __HttpHandlerOptions): Promise<StopResourceCommandOutput>;
    stopResource(args: StopResourceCommandInput, cb: (err: any, data?: StopResourceCommandOutput) => void): void;
    stopResource(args: StopResourceCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: StopResourceCommandOutput) => void): void;
    /**
     * <p>Associates the specified tags to a resource with the specified <code>resourceArn</code>. If existing tags on a resource are not specified in the request parameters, they are not changed. When a resource is deleted, the tags associated with that resource are also deleted.</p>
     */
    tagResource(args: TagResourceCommandInput, options?: __HttpHandlerOptions): Promise<TagResourceCommandOutput>;
    tagResource(args: TagResourceCommandInput, cb: (err: any, data?: TagResourceCommandOutput) => void): void;
    tagResource(args: TagResourceCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: TagResourceCommandOutput) => void): void;
    /**
     * <p>Deletes the specified tags from a resource.</p>
     */
    untagResource(args: UntagResourceCommandInput, options?: __HttpHandlerOptions): Promise<UntagResourceCommandOutput>;
    untagResource(args: UntagResourceCommandInput, cb: (err: any, data?: UntagResourceCommandOutput) => void): void;
    untagResource(args: UntagResourceCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: UntagResourceCommandOutput) => void): void;
    /**
     * <p>Replaces the datasets in a dataset group with the specified datasets.</p>
     *          <note>
     *             <p>The <code>Status</code> of the dataset group must be <code>ACTIVE</code> before you can
     *         use the dataset group to create a predictor. Use the <a>DescribeDatasetGroup</a>
     *         operation to get the status.</p>
     *          </note>
     */
    updateDatasetGroup(args: UpdateDatasetGroupCommandInput, options?: __HttpHandlerOptions): Promise<UpdateDatasetGroupCommandOutput>;
    updateDatasetGroup(args: UpdateDatasetGroupCommandInput, cb: (err: any, data?: UpdateDatasetGroupCommandOutput) => void): void;
    updateDatasetGroup(args: UpdateDatasetGroupCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: UpdateDatasetGroupCommandOutput) => void): void;
}
