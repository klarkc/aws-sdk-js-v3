import { XRayClient } from "./XRayClient";
import { BatchGetTracesCommandInput, BatchGetTracesCommandOutput } from "./commands/BatchGetTracesCommand";
import { CreateGroupCommandInput, CreateGroupCommandOutput } from "./commands/CreateGroupCommand";
import { CreateSamplingRuleCommandInput, CreateSamplingRuleCommandOutput } from "./commands/CreateSamplingRuleCommand";
import { DeleteGroupCommandInput, DeleteGroupCommandOutput } from "./commands/DeleteGroupCommand";
import { DeleteSamplingRuleCommandInput, DeleteSamplingRuleCommandOutput } from "./commands/DeleteSamplingRuleCommand";
import { GetEncryptionConfigCommandInput, GetEncryptionConfigCommandOutput } from "./commands/GetEncryptionConfigCommand";
import { GetGroupCommandInput, GetGroupCommandOutput } from "./commands/GetGroupCommand";
import { GetGroupsCommandInput, GetGroupsCommandOutput } from "./commands/GetGroupsCommand";
import { GetInsightCommandInput, GetInsightCommandOutput } from "./commands/GetInsightCommand";
import { GetInsightEventsCommandInput, GetInsightEventsCommandOutput } from "./commands/GetInsightEventsCommand";
import { GetInsightImpactGraphCommandInput, GetInsightImpactGraphCommandOutput } from "./commands/GetInsightImpactGraphCommand";
import { GetInsightSummariesCommandInput, GetInsightSummariesCommandOutput } from "./commands/GetInsightSummariesCommand";
import { GetSamplingRulesCommandInput, GetSamplingRulesCommandOutput } from "./commands/GetSamplingRulesCommand";
import { GetSamplingStatisticSummariesCommandInput, GetSamplingStatisticSummariesCommandOutput } from "./commands/GetSamplingStatisticSummariesCommand";
import { GetSamplingTargetsCommandInput, GetSamplingTargetsCommandOutput } from "./commands/GetSamplingTargetsCommand";
import { GetServiceGraphCommandInput, GetServiceGraphCommandOutput } from "./commands/GetServiceGraphCommand";
import { GetTimeSeriesServiceStatisticsCommandInput, GetTimeSeriesServiceStatisticsCommandOutput } from "./commands/GetTimeSeriesServiceStatisticsCommand";
import { GetTraceGraphCommandInput, GetTraceGraphCommandOutput } from "./commands/GetTraceGraphCommand";
import { GetTraceSummariesCommandInput, GetTraceSummariesCommandOutput } from "./commands/GetTraceSummariesCommand";
import { ListTagsForResourceCommandInput, ListTagsForResourceCommandOutput } from "./commands/ListTagsForResourceCommand";
import { PutEncryptionConfigCommandInput, PutEncryptionConfigCommandOutput } from "./commands/PutEncryptionConfigCommand";
import { PutTelemetryRecordsCommandInput, PutTelemetryRecordsCommandOutput } from "./commands/PutTelemetryRecordsCommand";
import { PutTraceSegmentsCommandInput, PutTraceSegmentsCommandOutput } from "./commands/PutTraceSegmentsCommand";
import { TagResourceCommandInput, TagResourceCommandOutput } from "./commands/TagResourceCommand";
import { UntagResourceCommandInput, UntagResourceCommandOutput } from "./commands/UntagResourceCommand";
import { UpdateGroupCommandInput, UpdateGroupCommandOutput } from "./commands/UpdateGroupCommand";
import { UpdateSamplingRuleCommandInput, UpdateSamplingRuleCommandOutput } from "./commands/UpdateSamplingRuleCommand";
import { HttpHandlerOptions as __HttpHandlerOptions } from "@aws-sdk/types";
/**
 * <p>AWS X-Ray provides APIs for managing debug traces and retrieving service maps
 *       and other data created by processing those traces.</p>
 */
export declare class XRay extends XRayClient {
    /**
     * <p>Retrieves a list of traces specified by ID. Each trace is a collection of segment
     *       documents that originates from a single request. Use <code>GetTraceSummaries</code> to get a
     *       list of trace IDs.</p>
     */
    batchGetTraces(args: BatchGetTracesCommandInput, options?: __HttpHandlerOptions): Promise<BatchGetTracesCommandOutput>;
    batchGetTraces(args: BatchGetTracesCommandInput, cb: (err: any, data?: BatchGetTracesCommandOutput) => void): void;
    batchGetTraces(args: BatchGetTracesCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: BatchGetTracesCommandOutput) => void): void;
    /**
     * <p>Creates a group resource with a name and a filter expression. </p>
     */
    createGroup(args: CreateGroupCommandInput, options?: __HttpHandlerOptions): Promise<CreateGroupCommandOutput>;
    createGroup(args: CreateGroupCommandInput, cb: (err: any, data?: CreateGroupCommandOutput) => void): void;
    createGroup(args: CreateGroupCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: CreateGroupCommandOutput) => void): void;
    /**
     * <p>Creates a rule to control sampling behavior for instrumented applications. Services
     *          retrieve rules with <a>GetSamplingRules</a>, and evaluate each rule in ascending
     *          order of <i>priority</i> for each request. If a rule matches, the service
     *          records a trace, borrowing it from the reservoir size. After 10 seconds, the service
     *          reports back to X-Ray with <a>GetSamplingTargets</a> to get updated versions of
     *          each in-use rule. The updated rule contains a trace quota that the service can use instead
     *          of borrowing from the reservoir.</p>
     */
    createSamplingRule(args: CreateSamplingRuleCommandInput, options?: __HttpHandlerOptions): Promise<CreateSamplingRuleCommandOutput>;
    createSamplingRule(args: CreateSamplingRuleCommandInput, cb: (err: any, data?: CreateSamplingRuleCommandOutput) => void): void;
    createSamplingRule(args: CreateSamplingRuleCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: CreateSamplingRuleCommandOutput) => void): void;
    /**
     * <p>Deletes a group resource.</p>
     */
    deleteGroup(args: DeleteGroupCommandInput, options?: __HttpHandlerOptions): Promise<DeleteGroupCommandOutput>;
    deleteGroup(args: DeleteGroupCommandInput, cb: (err: any, data?: DeleteGroupCommandOutput) => void): void;
    deleteGroup(args: DeleteGroupCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: DeleteGroupCommandOutput) => void): void;
    /**
     * <p>Deletes a sampling rule.</p>
     */
    deleteSamplingRule(args: DeleteSamplingRuleCommandInput, options?: __HttpHandlerOptions): Promise<DeleteSamplingRuleCommandOutput>;
    deleteSamplingRule(args: DeleteSamplingRuleCommandInput, cb: (err: any, data?: DeleteSamplingRuleCommandOutput) => void): void;
    deleteSamplingRule(args: DeleteSamplingRuleCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: DeleteSamplingRuleCommandOutput) => void): void;
    /**
     * <p>Retrieves the current encryption configuration for X-Ray data.</p>
     */
    getEncryptionConfig(args: GetEncryptionConfigCommandInput, options?: __HttpHandlerOptions): Promise<GetEncryptionConfigCommandOutput>;
    getEncryptionConfig(args: GetEncryptionConfigCommandInput, cb: (err: any, data?: GetEncryptionConfigCommandOutput) => void): void;
    getEncryptionConfig(args: GetEncryptionConfigCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: GetEncryptionConfigCommandOutput) => void): void;
    /**
     * <p>Retrieves group resource details.</p>
     */
    getGroup(args: GetGroupCommandInput, options?: __HttpHandlerOptions): Promise<GetGroupCommandOutput>;
    getGroup(args: GetGroupCommandInput, cb: (err: any, data?: GetGroupCommandOutput) => void): void;
    getGroup(args: GetGroupCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: GetGroupCommandOutput) => void): void;
    /**
     * <p>Retrieves all active group details.</p>
     */
    getGroups(args: GetGroupsCommandInput, options?: __HttpHandlerOptions): Promise<GetGroupsCommandOutput>;
    getGroups(args: GetGroupsCommandInput, cb: (err: any, data?: GetGroupsCommandOutput) => void): void;
    getGroups(args: GetGroupsCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: GetGroupsCommandOutput) => void): void;
    /**
     * <p>Retrieves the summary information of an insight. This includes impact to clients and
     *          root cause services, the top anomalous services, the category, the state of the insight,
     *          and the start and end time of the insight.</p>
     */
    getInsight(args: GetInsightCommandInput, options?: __HttpHandlerOptions): Promise<GetInsightCommandOutput>;
    getInsight(args: GetInsightCommandInput, cb: (err: any, data?: GetInsightCommandOutput) => void): void;
    getInsight(args: GetInsightCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: GetInsightCommandOutput) => void): void;
    /**
     * <p>X-Ray reevaluates insights periodically until they're resolved, and records each intermediate state as an
     *          event. You can review an insight's events in the Impact Timeline on the Inspect page in the X-Ray
     *          console.</p>
     */
    getInsightEvents(args: GetInsightEventsCommandInput, options?: __HttpHandlerOptions): Promise<GetInsightEventsCommandOutput>;
    getInsightEvents(args: GetInsightEventsCommandInput, cb: (err: any, data?: GetInsightEventsCommandOutput) => void): void;
    getInsightEvents(args: GetInsightEventsCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: GetInsightEventsCommandOutput) => void): void;
    /**
     * <p>Retrieves a service graph structure filtered by the specified insight. The service graph is limited to only
     *          structural information. For a complete service graph, use this API with the GetServiceGraph API.</p>
     */
    getInsightImpactGraph(args: GetInsightImpactGraphCommandInput, options?: __HttpHandlerOptions): Promise<GetInsightImpactGraphCommandOutput>;
    getInsightImpactGraph(args: GetInsightImpactGraphCommandInput, cb: (err: any, data?: GetInsightImpactGraphCommandOutput) => void): void;
    getInsightImpactGraph(args: GetInsightImpactGraphCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: GetInsightImpactGraphCommandOutput) => void): void;
    /**
     * <p>Retrieves the summaries of all insights in the specified group matching the provided filter values.</p>
     */
    getInsightSummaries(args: GetInsightSummariesCommandInput, options?: __HttpHandlerOptions): Promise<GetInsightSummariesCommandOutput>;
    getInsightSummaries(args: GetInsightSummariesCommandInput, cb: (err: any, data?: GetInsightSummariesCommandOutput) => void): void;
    getInsightSummaries(args: GetInsightSummariesCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: GetInsightSummariesCommandOutput) => void): void;
    /**
     * <p>Retrieves all sampling rules.</p>
     */
    getSamplingRules(args: GetSamplingRulesCommandInput, options?: __HttpHandlerOptions): Promise<GetSamplingRulesCommandOutput>;
    getSamplingRules(args: GetSamplingRulesCommandInput, cb: (err: any, data?: GetSamplingRulesCommandOutput) => void): void;
    getSamplingRules(args: GetSamplingRulesCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: GetSamplingRulesCommandOutput) => void): void;
    /**
     * <p>Retrieves information about recent sampling results for all sampling rules.</p>
     */
    getSamplingStatisticSummaries(args: GetSamplingStatisticSummariesCommandInput, options?: __HttpHandlerOptions): Promise<GetSamplingStatisticSummariesCommandOutput>;
    getSamplingStatisticSummaries(args: GetSamplingStatisticSummariesCommandInput, cb: (err: any, data?: GetSamplingStatisticSummariesCommandOutput) => void): void;
    getSamplingStatisticSummaries(args: GetSamplingStatisticSummariesCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: GetSamplingStatisticSummariesCommandOutput) => void): void;
    /**
     * <p>Requests a sampling quota for rules that the service is using to sample requests.
     *       </p>
     */
    getSamplingTargets(args: GetSamplingTargetsCommandInput, options?: __HttpHandlerOptions): Promise<GetSamplingTargetsCommandOutput>;
    getSamplingTargets(args: GetSamplingTargetsCommandInput, cb: (err: any, data?: GetSamplingTargetsCommandOutput) => void): void;
    getSamplingTargets(args: GetSamplingTargetsCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: GetSamplingTargetsCommandOutput) => void): void;
    /**
     * <p>Retrieves a document that describes services that process incoming requests, and
     *       downstream services that they call as a result. Root services process incoming requests and
     *       make calls to downstream services. Root services are applications that use the <a href="https://docs.aws.amazon.com/xray/index.html">AWS X-Ray SDK</a>.
     *       Downstream services can be other applications, AWS resources, HTTP web APIs, or SQL
     *       databases.</p>
     */
    getServiceGraph(args: GetServiceGraphCommandInput, options?: __HttpHandlerOptions): Promise<GetServiceGraphCommandOutput>;
    getServiceGraph(args: GetServiceGraphCommandInput, cb: (err: any, data?: GetServiceGraphCommandOutput) => void): void;
    getServiceGraph(args: GetServiceGraphCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: GetServiceGraphCommandOutput) => void): void;
    /**
     * <p>Get an aggregation of service statistics defined by a specific time
     *             range.</p>
     */
    getTimeSeriesServiceStatistics(args: GetTimeSeriesServiceStatisticsCommandInput, options?: __HttpHandlerOptions): Promise<GetTimeSeriesServiceStatisticsCommandOutput>;
    getTimeSeriesServiceStatistics(args: GetTimeSeriesServiceStatisticsCommandInput, cb: (err: any, data?: GetTimeSeriesServiceStatisticsCommandOutput) => void): void;
    getTimeSeriesServiceStatistics(args: GetTimeSeriesServiceStatisticsCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: GetTimeSeriesServiceStatisticsCommandOutput) => void): void;
    /**
     * <p>Retrieves a service graph for one or more specific trace IDs.</p>
     */
    getTraceGraph(args: GetTraceGraphCommandInput, options?: __HttpHandlerOptions): Promise<GetTraceGraphCommandOutput>;
    getTraceGraph(args: GetTraceGraphCommandInput, cb: (err: any, data?: GetTraceGraphCommandOutput) => void): void;
    getTraceGraph(args: GetTraceGraphCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: GetTraceGraphCommandOutput) => void): void;
    /**
     * <p>Retrieves IDs and annotations for traces available for a specified time frame using an
     *       optional filter. To get the full traces, pass the trace IDs to
     *       <code>BatchGetTraces</code>.</p>
     *          <p>A filter expression can target traced requests that hit specific service nodes or
     *       edges, have errors, or come from a known user. For example, the following filter expression
     *       targets traces that pass through <code>api.example.com</code>:</p>
     *          <p>
     *             <code>service("api.example.com")</code>
     *          </p>
     *          <p>This filter expression finds traces that have an annotation named <code>account</code>
     *       with the value <code>12345</code>:</p>
     *          <p>
     *             <code>annotation.account = "12345"</code>
     *          </p>
     *          <p>For a full list of indexed fields and keywords that you can use in filter expressions,
     *       see <a href="https://docs.aws.amazon.com/xray/latest/devguide/xray-console-filters.html">Using Filter
     *         Expressions</a> in the <i>AWS X-Ray Developer Guide</i>.</p>
     */
    getTraceSummaries(args: GetTraceSummariesCommandInput, options?: __HttpHandlerOptions): Promise<GetTraceSummariesCommandOutput>;
    getTraceSummaries(args: GetTraceSummariesCommandInput, cb: (err: any, data?: GetTraceSummariesCommandOutput) => void): void;
    getTraceSummaries(args: GetTraceSummariesCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: GetTraceSummariesCommandOutput) => void): void;
    /**
     * <p>Returns a list of tags that are applied to the specified AWS X-Ray group or sampling rule.</p>
     */
    listTagsForResource(args: ListTagsForResourceCommandInput, options?: __HttpHandlerOptions): Promise<ListTagsForResourceCommandOutput>;
    listTagsForResource(args: ListTagsForResourceCommandInput, cb: (err: any, data?: ListTagsForResourceCommandOutput) => void): void;
    listTagsForResource(args: ListTagsForResourceCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: ListTagsForResourceCommandOutput) => void): void;
    /**
     * <p>Updates the encryption configuration for X-Ray data.</p>
     */
    putEncryptionConfig(args: PutEncryptionConfigCommandInput, options?: __HttpHandlerOptions): Promise<PutEncryptionConfigCommandOutput>;
    putEncryptionConfig(args: PutEncryptionConfigCommandInput, cb: (err: any, data?: PutEncryptionConfigCommandOutput) => void): void;
    putEncryptionConfig(args: PutEncryptionConfigCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: PutEncryptionConfigCommandOutput) => void): void;
    /**
     * <p>Used by the AWS X-Ray daemon to upload telemetry.</p>
     */
    putTelemetryRecords(args: PutTelemetryRecordsCommandInput, options?: __HttpHandlerOptions): Promise<PutTelemetryRecordsCommandOutput>;
    putTelemetryRecords(args: PutTelemetryRecordsCommandInput, cb: (err: any, data?: PutTelemetryRecordsCommandOutput) => void): void;
    putTelemetryRecords(args: PutTelemetryRecordsCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: PutTelemetryRecordsCommandOutput) => void): void;
    /**
     * <p>Uploads segment documents to AWS X-Ray. The <a href="https://docs.aws.amazon.com/xray/index.html">X-Ray SDK</a> generates segment documents and sends them to the X-Ray daemon, which uploads them in
     *       batches. A segment document can be a completed segment, an in-progress segment, or an array of
     *       subsegments.</p>
     *          <p>Segments must include the following fields. For the full segment document schema, see
     *         <a href="https://docs.aws.amazon.com/xray/latest/devguide/xray-api-segmentdocuments.html">AWS X-Ray
     *         Segment Documents</a> in the <i>AWS X-Ray Developer Guide</i>.</p>
     *          <p class="title">
     *             <b>Required segment document fields</b>
     *          </p>
     *          <ul>
     *             <li>
     *                <p>
     *                   <code>name</code> - The name of the service that handled the request.</p>
     *             </li>
     *             <li>
     *                <p>
     *                   <code>id</code> - A 64-bit identifier for the segment, unique among segments in the same trace, in 16
     *           hexadecimal digits.</p>
     *             </li>
     *             <li>
     *                <p>
     *                   <code>trace_id</code> - A unique identifier that connects all segments and subsegments originating from
     *           a single client request.</p>
     *             </li>
     *             <li>
     *                <p>
     *                   <code>start_time</code> - Time the segment or subsegment was created, in floating point seconds in
     *           epoch time, accurate to milliseconds. For example, <code>1480615200.010</code> or
     *             <code>1.480615200010E9</code>.</p>
     *             </li>
     *             <li>
     *                <p>
     *                   <code>end_time</code> - Time the segment or subsegment was closed. For example,
     *             <code>1480615200.090</code> or <code>1.480615200090E9</code>. Specify either an <code>end_time</code> or
     *             <code>in_progress</code>.</p>
     *             </li>
     *             <li>
     *                <p>
     *                   <code>in_progress</code> - Set to <code>true</code> instead of specifying an <code>end_time</code> to
     *           record that a segment has been started, but is not complete. Send an in-progress segment when your application
     *           receives a request that will take a long time to serve, to trace that the request was received. When the
     *           response is sent, send the complete segment to overwrite the in-progress segment.</p>
     *             </li>
     *          </ul>
     *          <p>A <code>trace_id</code> consists of three numbers separated by hyphens. For example,
     *       1-58406520-a006649127e371903a2de979. This includes:</p>
     *          <p class="title">
     *             <b>Trace ID Format</b>
     *          </p>
     *          <ul>
     *             <li>
     *                <p>The version number, for instance, <code>1</code>.</p>
     *             </li>
     *             <li>
     *                <p>The time of the original request, in Unix epoch time, in 8 hexadecimal digits. For
     *           example, 10:00AM December 2nd, 2016 PST in epoch time is <code>1480615200</code> seconds,
     *           or <code>58406520</code> in hexadecimal.</p>
     *             </li>
     *             <li>
     *                <p>A 96-bit identifier for the trace, globally unique, in 24 hexadecimal
     *           digits.</p>
     *             </li>
     *          </ul>
     */
    putTraceSegments(args: PutTraceSegmentsCommandInput, options?: __HttpHandlerOptions): Promise<PutTraceSegmentsCommandOutput>;
    putTraceSegments(args: PutTraceSegmentsCommandInput, cb: (err: any, data?: PutTraceSegmentsCommandOutput) => void): void;
    putTraceSegments(args: PutTraceSegmentsCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: PutTraceSegmentsCommandOutput) => void): void;
    /**
     * <p>Applies tags to an existing AWS X-Ray group or sampling rule.</p>
     */
    tagResource(args: TagResourceCommandInput, options?: __HttpHandlerOptions): Promise<TagResourceCommandOutput>;
    tagResource(args: TagResourceCommandInput, cb: (err: any, data?: TagResourceCommandOutput) => void): void;
    tagResource(args: TagResourceCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: TagResourceCommandOutput) => void): void;
    /**
     * <p>Removes tags from an AWS X-Ray group or sampling rule. You cannot edit or delete system
     *       tags (those with an <code>aws:</code> prefix).</p>
     */
    untagResource(args: UntagResourceCommandInput, options?: __HttpHandlerOptions): Promise<UntagResourceCommandOutput>;
    untagResource(args: UntagResourceCommandInput, cb: (err: any, data?: UntagResourceCommandOutput) => void): void;
    untagResource(args: UntagResourceCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: UntagResourceCommandOutput) => void): void;
    /**
     * <p>Updates a group resource.</p>
     */
    updateGroup(args: UpdateGroupCommandInput, options?: __HttpHandlerOptions): Promise<UpdateGroupCommandOutput>;
    updateGroup(args: UpdateGroupCommandInput, cb: (err: any, data?: UpdateGroupCommandOutput) => void): void;
    updateGroup(args: UpdateGroupCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: UpdateGroupCommandOutput) => void): void;
    /**
     * <p>Modifies a sampling rule's configuration.</p>
     */
    updateSamplingRule(args: UpdateSamplingRuleCommandInput, options?: __HttpHandlerOptions): Promise<UpdateSamplingRuleCommandOutput>;
    updateSamplingRule(args: UpdateSamplingRuleCommandInput, cb: (err: any, data?: UpdateSamplingRuleCommandOutput) => void): void;
    updateSamplingRule(args: UpdateSamplingRuleCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: UpdateSamplingRuleCommandOutput) => void): void;
}
