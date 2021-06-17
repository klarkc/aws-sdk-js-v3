import { LookoutMetricsClient } from "./LookoutMetricsClient";
import { ActivateAnomalyDetectorCommandInput, ActivateAnomalyDetectorCommandOutput } from "./commands/ActivateAnomalyDetectorCommand";
import { BackTestAnomalyDetectorCommandInput, BackTestAnomalyDetectorCommandOutput } from "./commands/BackTestAnomalyDetectorCommand";
import { CreateAlertCommandInput, CreateAlertCommandOutput } from "./commands/CreateAlertCommand";
import { CreateAnomalyDetectorCommandInput, CreateAnomalyDetectorCommandOutput } from "./commands/CreateAnomalyDetectorCommand";
import { CreateMetricSetCommandInput, CreateMetricSetCommandOutput } from "./commands/CreateMetricSetCommand";
import { DeleteAlertCommandInput, DeleteAlertCommandOutput } from "./commands/DeleteAlertCommand";
import { DeleteAnomalyDetectorCommandInput, DeleteAnomalyDetectorCommandOutput } from "./commands/DeleteAnomalyDetectorCommand";
import { DescribeAlertCommandInput, DescribeAlertCommandOutput } from "./commands/DescribeAlertCommand";
import { DescribeAnomalyDetectionExecutionsCommandInput, DescribeAnomalyDetectionExecutionsCommandOutput } from "./commands/DescribeAnomalyDetectionExecutionsCommand";
import { DescribeAnomalyDetectorCommandInput, DescribeAnomalyDetectorCommandOutput } from "./commands/DescribeAnomalyDetectorCommand";
import { DescribeMetricSetCommandInput, DescribeMetricSetCommandOutput } from "./commands/DescribeMetricSetCommand";
import { GetAnomalyGroupCommandInput, GetAnomalyGroupCommandOutput } from "./commands/GetAnomalyGroupCommand";
import { GetFeedbackCommandInput, GetFeedbackCommandOutput } from "./commands/GetFeedbackCommand";
import { GetSampleDataCommandInput, GetSampleDataCommandOutput } from "./commands/GetSampleDataCommand";
import { ListAlertsCommandInput, ListAlertsCommandOutput } from "./commands/ListAlertsCommand";
import { ListAnomalyDetectorsCommandInput, ListAnomalyDetectorsCommandOutput } from "./commands/ListAnomalyDetectorsCommand";
import { ListAnomalyGroupSummariesCommandInput, ListAnomalyGroupSummariesCommandOutput } from "./commands/ListAnomalyGroupSummariesCommand";
import { ListAnomalyGroupTimeSeriesCommandInput, ListAnomalyGroupTimeSeriesCommandOutput } from "./commands/ListAnomalyGroupTimeSeriesCommand";
import { ListMetricSetsCommandInput, ListMetricSetsCommandOutput } from "./commands/ListMetricSetsCommand";
import { ListTagsForResourceCommandInput, ListTagsForResourceCommandOutput } from "./commands/ListTagsForResourceCommand";
import { PutFeedbackCommandInput, PutFeedbackCommandOutput } from "./commands/PutFeedbackCommand";
import { TagResourceCommandInput, TagResourceCommandOutput } from "./commands/TagResourceCommand";
import { UntagResourceCommandInput, UntagResourceCommandOutput } from "./commands/UntagResourceCommand";
import { UpdateAnomalyDetectorCommandInput, UpdateAnomalyDetectorCommandOutput } from "./commands/UpdateAnomalyDetectorCommand";
import { UpdateMetricSetCommandInput, UpdateMetricSetCommandOutput } from "./commands/UpdateMetricSetCommand";
import { HttpHandlerOptions as __HttpHandlerOptions } from "@aws-sdk/types";
/**
 * <p>This is the <i>Amazon Lookout for Metrics API Reference</i>. For an introduction to the service
 *       with tutorials for getting started, visit <a href="https://docs.aws.amazon.com/lookoutmetrics/latest/dev">Amazon
 *         Lookout for Metrics Developer Guide</a>.</p>
 */
export declare class LookoutMetrics extends LookoutMetricsClient {
    /**
     * <p>Activates an anomaly detector.</p>
     */
    activateAnomalyDetector(args: ActivateAnomalyDetectorCommandInput, options?: __HttpHandlerOptions): Promise<ActivateAnomalyDetectorCommandOutput>;
    activateAnomalyDetector(args: ActivateAnomalyDetectorCommandInput, cb: (err: any, data?: ActivateAnomalyDetectorCommandOutput) => void): void;
    activateAnomalyDetector(args: ActivateAnomalyDetectorCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: ActivateAnomalyDetectorCommandOutput) => void): void;
    /**
     * <p>Runs a backtest for anomaly detection for the specified resource.</p>
     */
    backTestAnomalyDetector(args: BackTestAnomalyDetectorCommandInput, options?: __HttpHandlerOptions): Promise<BackTestAnomalyDetectorCommandOutput>;
    backTestAnomalyDetector(args: BackTestAnomalyDetectorCommandInput, cb: (err: any, data?: BackTestAnomalyDetectorCommandOutput) => void): void;
    backTestAnomalyDetector(args: BackTestAnomalyDetectorCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: BackTestAnomalyDetectorCommandOutput) => void): void;
    /**
     * <p>Creates an alert for an anomaly detector.</p>
     */
    createAlert(args: CreateAlertCommandInput, options?: __HttpHandlerOptions): Promise<CreateAlertCommandOutput>;
    createAlert(args: CreateAlertCommandInput, cb: (err: any, data?: CreateAlertCommandOutput) => void): void;
    createAlert(args: CreateAlertCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: CreateAlertCommandOutput) => void): void;
    /**
     * <p>Creates an anomaly detector.</p>
     */
    createAnomalyDetector(args: CreateAnomalyDetectorCommandInput, options?: __HttpHandlerOptions): Promise<CreateAnomalyDetectorCommandOutput>;
    createAnomalyDetector(args: CreateAnomalyDetectorCommandInput, cb: (err: any, data?: CreateAnomalyDetectorCommandOutput) => void): void;
    createAnomalyDetector(args: CreateAnomalyDetectorCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: CreateAnomalyDetectorCommandOutput) => void): void;
    /**
     * <p>Creates a dataset.</p>
     */
    createMetricSet(args: CreateMetricSetCommandInput, options?: __HttpHandlerOptions): Promise<CreateMetricSetCommandOutput>;
    createMetricSet(args: CreateMetricSetCommandInput, cb: (err: any, data?: CreateMetricSetCommandOutput) => void): void;
    createMetricSet(args: CreateMetricSetCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: CreateMetricSetCommandOutput) => void): void;
    /**
     * <p>Deletes an alert.</p>
     */
    deleteAlert(args: DeleteAlertCommandInput, options?: __HttpHandlerOptions): Promise<DeleteAlertCommandOutput>;
    deleteAlert(args: DeleteAlertCommandInput, cb: (err: any, data?: DeleteAlertCommandOutput) => void): void;
    deleteAlert(args: DeleteAlertCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: DeleteAlertCommandOutput) => void): void;
    /**
     * <p>Deletes a detector. Deleting an anomaly detector will delete all of its corresponding resources including any
     *       configured datasets and alerts.</p>
     */
    deleteAnomalyDetector(args: DeleteAnomalyDetectorCommandInput, options?: __HttpHandlerOptions): Promise<DeleteAnomalyDetectorCommandOutput>;
    deleteAnomalyDetector(args: DeleteAnomalyDetectorCommandInput, cb: (err: any, data?: DeleteAnomalyDetectorCommandOutput) => void): void;
    deleteAnomalyDetector(args: DeleteAnomalyDetectorCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: DeleteAnomalyDetectorCommandOutput) => void): void;
    /**
     * <p>Describes an alert.</p>
     *          <p>Amazon Lookout for Metrics API actions are eventually consistent. If you do a read operation on a resource
     *       immediately after creating or modifying it, use retries to allow time for the write operation to complete.</p>
     */
    describeAlert(args: DescribeAlertCommandInput, options?: __HttpHandlerOptions): Promise<DescribeAlertCommandOutput>;
    describeAlert(args: DescribeAlertCommandInput, cb: (err: any, data?: DescribeAlertCommandOutput) => void): void;
    describeAlert(args: DescribeAlertCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: DescribeAlertCommandOutput) => void): void;
    /**
     * <p>Returns information about the status of the specified anomaly detection jobs.</p>
     */
    describeAnomalyDetectionExecutions(args: DescribeAnomalyDetectionExecutionsCommandInput, options?: __HttpHandlerOptions): Promise<DescribeAnomalyDetectionExecutionsCommandOutput>;
    describeAnomalyDetectionExecutions(args: DescribeAnomalyDetectionExecutionsCommandInput, cb: (err: any, data?: DescribeAnomalyDetectionExecutionsCommandOutput) => void): void;
    describeAnomalyDetectionExecutions(args: DescribeAnomalyDetectionExecutionsCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: DescribeAnomalyDetectionExecutionsCommandOutput) => void): void;
    /**
     * <p>Describes a detector.</p>
     *          <p>Amazon Lookout for Metrics API actions are eventually consistent. If you do a read operation on a resource
     *       immediately after creating or modifying it, use retries to allow time for the write operation to complete.</p>
     */
    describeAnomalyDetector(args: DescribeAnomalyDetectorCommandInput, options?: __HttpHandlerOptions): Promise<DescribeAnomalyDetectorCommandOutput>;
    describeAnomalyDetector(args: DescribeAnomalyDetectorCommandInput, cb: (err: any, data?: DescribeAnomalyDetectorCommandOutput) => void): void;
    describeAnomalyDetector(args: DescribeAnomalyDetectorCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: DescribeAnomalyDetectorCommandOutput) => void): void;
    /**
     * <p>Describes a dataset.</p>
     *          <p>Amazon Lookout for Metrics API actions are eventually consistent. If you do a read operation on a resource
     *       immediately after creating or modifying it, use retries to allow time for the write operation to complete.</p>
     */
    describeMetricSet(args: DescribeMetricSetCommandInput, options?: __HttpHandlerOptions): Promise<DescribeMetricSetCommandOutput>;
    describeMetricSet(args: DescribeMetricSetCommandInput, cb: (err: any, data?: DescribeMetricSetCommandOutput) => void): void;
    describeMetricSet(args: DescribeMetricSetCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: DescribeMetricSetCommandOutput) => void): void;
    /**
     * <p>Returns details about a group of anomalous metrics.</p>
     */
    getAnomalyGroup(args: GetAnomalyGroupCommandInput, options?: __HttpHandlerOptions): Promise<GetAnomalyGroupCommandOutput>;
    getAnomalyGroup(args: GetAnomalyGroupCommandInput, cb: (err: any, data?: GetAnomalyGroupCommandOutput) => void): void;
    getAnomalyGroup(args: GetAnomalyGroupCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: GetAnomalyGroupCommandOutput) => void): void;
    /**
     * <p>Get feedback for an anomaly group.</p>
     */
    getFeedback(args: GetFeedbackCommandInput, options?: __HttpHandlerOptions): Promise<GetFeedbackCommandOutput>;
    getFeedback(args: GetFeedbackCommandInput, cb: (err: any, data?: GetFeedbackCommandOutput) => void): void;
    getFeedback(args: GetFeedbackCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: GetFeedbackCommandOutput) => void): void;
    /**
     * <p>Returns a selection of sample records from an Amazon S3 datasource.</p>
     */
    getSampleData(args: GetSampleDataCommandInput, options?: __HttpHandlerOptions): Promise<GetSampleDataCommandOutput>;
    getSampleData(args: GetSampleDataCommandInput, cb: (err: any, data?: GetSampleDataCommandOutput) => void): void;
    getSampleData(args: GetSampleDataCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: GetSampleDataCommandOutput) => void): void;
    /**
     * <p>Lists the alerts attached to a detector.</p>
     *          <p>Amazon Lookout for Metrics API actions are eventually consistent. If you do a read operation on a resource
     *       immediately after creating or modifying it, use retries to allow time for the write operation to complete.</p>
     */
    listAlerts(args: ListAlertsCommandInput, options?: __HttpHandlerOptions): Promise<ListAlertsCommandOutput>;
    listAlerts(args: ListAlertsCommandInput, cb: (err: any, data?: ListAlertsCommandOutput) => void): void;
    listAlerts(args: ListAlertsCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: ListAlertsCommandOutput) => void): void;
    /**
     * <p>Lists the detectors in the current AWS Region.</p>
     *          <p>Amazon Lookout for Metrics API actions are eventually consistent. If you do a read operation on a resource
     *       immediately after creating or modifying it, use retries to allow time for the write operation to complete.</p>
     */
    listAnomalyDetectors(args: ListAnomalyDetectorsCommandInput, options?: __HttpHandlerOptions): Promise<ListAnomalyDetectorsCommandOutput>;
    listAnomalyDetectors(args: ListAnomalyDetectorsCommandInput, cb: (err: any, data?: ListAnomalyDetectorsCommandOutput) => void): void;
    listAnomalyDetectors(args: ListAnomalyDetectorsCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: ListAnomalyDetectorsCommandOutput) => void): void;
    /**
     * <p>Returns a list of anomaly groups.</p>
     */
    listAnomalyGroupSummaries(args: ListAnomalyGroupSummariesCommandInput, options?: __HttpHandlerOptions): Promise<ListAnomalyGroupSummariesCommandOutput>;
    listAnomalyGroupSummaries(args: ListAnomalyGroupSummariesCommandInput, cb: (err: any, data?: ListAnomalyGroupSummariesCommandOutput) => void): void;
    listAnomalyGroupSummaries(args: ListAnomalyGroupSummariesCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: ListAnomalyGroupSummariesCommandOutput) => void): void;
    /**
     * <p>Gets a list of anomalous metrics for a measure in an anomaly group.</p>
     */
    listAnomalyGroupTimeSeries(args: ListAnomalyGroupTimeSeriesCommandInput, options?: __HttpHandlerOptions): Promise<ListAnomalyGroupTimeSeriesCommandOutput>;
    listAnomalyGroupTimeSeries(args: ListAnomalyGroupTimeSeriesCommandInput, cb: (err: any, data?: ListAnomalyGroupTimeSeriesCommandOutput) => void): void;
    listAnomalyGroupTimeSeries(args: ListAnomalyGroupTimeSeriesCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: ListAnomalyGroupTimeSeriesCommandOutput) => void): void;
    /**
     * <p>Lists the datasets in the current AWS Region.</p>
     *          <p>Amazon Lookout for Metrics API actions are eventually consistent. If you do a read operation on a resource
     *       immediately after creating or modifying it, use retries to allow time for the write operation to complete.</p>
     */
    listMetricSets(args: ListMetricSetsCommandInput, options?: __HttpHandlerOptions): Promise<ListMetricSetsCommandOutput>;
    listMetricSets(args: ListMetricSetsCommandInput, cb: (err: any, data?: ListMetricSetsCommandOutput) => void): void;
    listMetricSets(args: ListMetricSetsCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: ListMetricSetsCommandOutput) => void): void;
    /**
     * <p>Gets a list of <a href="https://docs.aws.amazon.com/lookoutmetrics/latest/dev/detectors-tags.html">tags</a> for a detector, dataset, or alert.</p>
     */
    listTagsForResource(args: ListTagsForResourceCommandInput, options?: __HttpHandlerOptions): Promise<ListTagsForResourceCommandOutput>;
    listTagsForResource(args: ListTagsForResourceCommandInput, cb: (err: any, data?: ListTagsForResourceCommandOutput) => void): void;
    listTagsForResource(args: ListTagsForResourceCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: ListTagsForResourceCommandOutput) => void): void;
    /**
     * <p>Add feedback for an anomalous metric.</p>
     */
    putFeedback(args: PutFeedbackCommandInput, options?: __HttpHandlerOptions): Promise<PutFeedbackCommandOutput>;
    putFeedback(args: PutFeedbackCommandInput, cb: (err: any, data?: PutFeedbackCommandOutput) => void): void;
    putFeedback(args: PutFeedbackCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: PutFeedbackCommandOutput) => void): void;
    /**
     * <p>Adds <a href="https://docs.aws.amazon.com/lookoutmetrics/latest/dev/detectors-tags.html">tags</a> to a detector, dataset, or alert.</p>
     */
    tagResource(args: TagResourceCommandInput, options?: __HttpHandlerOptions): Promise<TagResourceCommandOutput>;
    tagResource(args: TagResourceCommandInput, cb: (err: any, data?: TagResourceCommandOutput) => void): void;
    tagResource(args: TagResourceCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: TagResourceCommandOutput) => void): void;
    /**
     * <p>Removes <a href="https://docs.aws.amazon.com/lookoutmetrics/latest/dev/detectors-tags.html">tags</a> from a detector, dataset, or alert.</p>
     */
    untagResource(args: UntagResourceCommandInput, options?: __HttpHandlerOptions): Promise<UntagResourceCommandOutput>;
    untagResource(args: UntagResourceCommandInput, cb: (err: any, data?: UntagResourceCommandOutput) => void): void;
    untagResource(args: UntagResourceCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: UntagResourceCommandOutput) => void): void;
    /**
     * <p>Updates a detector. After activation, you can only change a detector's ingestion delay and description.</p>
     */
    updateAnomalyDetector(args: UpdateAnomalyDetectorCommandInput, options?: __HttpHandlerOptions): Promise<UpdateAnomalyDetectorCommandOutput>;
    updateAnomalyDetector(args: UpdateAnomalyDetectorCommandInput, cb: (err: any, data?: UpdateAnomalyDetectorCommandOutput) => void): void;
    updateAnomalyDetector(args: UpdateAnomalyDetectorCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: UpdateAnomalyDetectorCommandOutput) => void): void;
    /**
     * <p>Updates a dataset.</p>
     */
    updateMetricSet(args: UpdateMetricSetCommandInput, options?: __HttpHandlerOptions): Promise<UpdateMetricSetCommandOutput>;
    updateMetricSet(args: UpdateMetricSetCommandInput, cb: (err: any, data?: UpdateMetricSetCommandOutput) => void): void;
    updateMetricSet(args: UpdateMetricSetCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: UpdateMetricSetCommandOutput) => void): void;
}
