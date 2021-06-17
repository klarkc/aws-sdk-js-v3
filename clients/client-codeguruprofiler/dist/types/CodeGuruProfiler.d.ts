import { CodeGuruProfilerClient } from "./CodeGuruProfilerClient";
import { AddNotificationChannelsCommandInput, AddNotificationChannelsCommandOutput } from "./commands/AddNotificationChannelsCommand";
import { BatchGetFrameMetricDataCommandInput, BatchGetFrameMetricDataCommandOutput } from "./commands/BatchGetFrameMetricDataCommand";
import { ConfigureAgentCommandInput, ConfigureAgentCommandOutput } from "./commands/ConfigureAgentCommand";
import { CreateProfilingGroupCommandInput, CreateProfilingGroupCommandOutput } from "./commands/CreateProfilingGroupCommand";
import { DeleteProfilingGroupCommandInput, DeleteProfilingGroupCommandOutput } from "./commands/DeleteProfilingGroupCommand";
import { DescribeProfilingGroupCommandInput, DescribeProfilingGroupCommandOutput } from "./commands/DescribeProfilingGroupCommand";
import { GetFindingsReportAccountSummaryCommandInput, GetFindingsReportAccountSummaryCommandOutput } from "./commands/GetFindingsReportAccountSummaryCommand";
import { GetNotificationConfigurationCommandInput, GetNotificationConfigurationCommandOutput } from "./commands/GetNotificationConfigurationCommand";
import { GetPolicyCommandInput, GetPolicyCommandOutput } from "./commands/GetPolicyCommand";
import { GetProfileCommandInput, GetProfileCommandOutput } from "./commands/GetProfileCommand";
import { GetRecommendationsCommandInput, GetRecommendationsCommandOutput } from "./commands/GetRecommendationsCommand";
import { ListFindingsReportsCommandInput, ListFindingsReportsCommandOutput } from "./commands/ListFindingsReportsCommand";
import { ListProfileTimesCommandInput, ListProfileTimesCommandOutput } from "./commands/ListProfileTimesCommand";
import { ListProfilingGroupsCommandInput, ListProfilingGroupsCommandOutput } from "./commands/ListProfilingGroupsCommand";
import { ListTagsForResourceCommandInput, ListTagsForResourceCommandOutput } from "./commands/ListTagsForResourceCommand";
import { PostAgentProfileCommandInput, PostAgentProfileCommandOutput } from "./commands/PostAgentProfileCommand";
import { PutPermissionCommandInput, PutPermissionCommandOutput } from "./commands/PutPermissionCommand";
import { RemoveNotificationChannelCommandInput, RemoveNotificationChannelCommandOutput } from "./commands/RemoveNotificationChannelCommand";
import { RemovePermissionCommandInput, RemovePermissionCommandOutput } from "./commands/RemovePermissionCommand";
import { SubmitFeedbackCommandInput, SubmitFeedbackCommandOutput } from "./commands/SubmitFeedbackCommand";
import { TagResourceCommandInput, TagResourceCommandOutput } from "./commands/TagResourceCommand";
import { UntagResourceCommandInput, UntagResourceCommandOutput } from "./commands/UntagResourceCommand";
import { UpdateProfilingGroupCommandInput, UpdateProfilingGroupCommandOutput } from "./commands/UpdateProfilingGroupCommand";
import { HttpHandlerOptions as __HttpHandlerOptions } from "@aws-sdk/types";
/**
 * <p>
 *           This section provides documentation for the Amazon CodeGuru Profiler API operations.
 *       </p>
 *          <p>
 *          Amazon CodeGuru Profiler collects runtime performance data from your live applications, and provides
 *          recommendations that can help you fine-tune your application performance. Using machine learning
 *          algorithms, CodeGuru Profiler can help you find your most expensive lines of code and suggest ways you can
 *          improve efficiency and remove CPU bottlenecks.
 *       </p>
 *          <p>
 *          Amazon CodeGuru Profiler provides different visualizations of profiling data to help you identify what code is
 *          running on the CPU, see how much time is consumed, and suggest ways to reduce CPU utilization.
 *       </p>
 *          <note>
 *             <p>Amazon CodeGuru Profiler currently supports applications written in all Java virtual machine (JVM)
 *             languages and Python. While CodeGuru Profiler supports both visualizations and recommendations for applications
 *             written in Java, it can also generate visualizations and a subset of recommendations for
 *             applications written in other JVM languages and Python.</p>
 *          </note>
 *          <p>
 *          For more information, see <a href="https://docs.aws.amazon.com/codeguru/latest/profiler-ug/what-is-codeguru-profiler.html">What is Amazon CodeGuru Profiler</a> in
 *          the <i>Amazon CodeGuru Profiler User Guide</i>.
 *       </p>
 */
export declare class CodeGuruProfiler extends CodeGuruProfilerClient {
    /**
     * <p>Add up to 2 anomaly notifications channels for a profiling group.</p>
     */
    addNotificationChannels(args: AddNotificationChannelsCommandInput, options?: __HttpHandlerOptions): Promise<AddNotificationChannelsCommandOutput>;
    addNotificationChannels(args: AddNotificationChannelsCommandInput, cb: (err: any, data?: AddNotificationChannelsCommandOutput) => void): void;
    addNotificationChannels(args: AddNotificationChannelsCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: AddNotificationChannelsCommandOutput) => void): void;
    /**
     * <p>
     *          Returns the time series of values for a requested list
     *          of frame metrics from a time period.</p>
     */
    batchGetFrameMetricData(args: BatchGetFrameMetricDataCommandInput, options?: __HttpHandlerOptions): Promise<BatchGetFrameMetricDataCommandOutput>;
    batchGetFrameMetricData(args: BatchGetFrameMetricDataCommandInput, cb: (err: any, data?: BatchGetFrameMetricDataCommandOutput) => void): void;
    batchGetFrameMetricData(args: BatchGetFrameMetricDataCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: BatchGetFrameMetricDataCommandOutput) => void): void;
    /**
     * <p>
     *           Used by profiler agents to report their current state and to receive remote
     *           configuration updates. For example, <code>ConfigureAgent</code> can be used
     *          to tell an agent whether to profile or not and for how long to return profiling data.
     *       </p>
     */
    configureAgent(args: ConfigureAgentCommandInput, options?: __HttpHandlerOptions): Promise<ConfigureAgentCommandOutput>;
    configureAgent(args: ConfigureAgentCommandInput, cb: (err: any, data?: ConfigureAgentCommandOutput) => void): void;
    configureAgent(args: ConfigureAgentCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: ConfigureAgentCommandOutput) => void): void;
    /**
     * <p>Creates a profiling group.</p>
     */
    createProfilingGroup(args: CreateProfilingGroupCommandInput, options?: __HttpHandlerOptions): Promise<CreateProfilingGroupCommandOutput>;
    createProfilingGroup(args: CreateProfilingGroupCommandInput, cb: (err: any, data?: CreateProfilingGroupCommandOutput) => void): void;
    createProfilingGroup(args: CreateProfilingGroupCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: CreateProfilingGroupCommandOutput) => void): void;
    /**
     * <p>Deletes a profiling group.</p>
     */
    deleteProfilingGroup(args: DeleteProfilingGroupCommandInput, options?: __HttpHandlerOptions): Promise<DeleteProfilingGroupCommandOutput>;
    deleteProfilingGroup(args: DeleteProfilingGroupCommandInput, cb: (err: any, data?: DeleteProfilingGroupCommandOutput) => void): void;
    deleteProfilingGroup(args: DeleteProfilingGroupCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: DeleteProfilingGroupCommandOutput) => void): void;
    /**
     * <p>
     *          Returns a <a href="https://docs.aws.amazon.com/codeguru/latest/profiler-api/API_ProfilingGroupDescription.html">
     *                <code>ProfilingGroupDescription</code>
     *             </a>
     *          object that contains information about the requested profiling group.
     *       </p>
     */
    describeProfilingGroup(args: DescribeProfilingGroupCommandInput, options?: __HttpHandlerOptions): Promise<DescribeProfilingGroupCommandOutput>;
    describeProfilingGroup(args: DescribeProfilingGroupCommandInput, cb: (err: any, data?: DescribeProfilingGroupCommandOutput) => void): void;
    describeProfilingGroup(args: DescribeProfilingGroupCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: DescribeProfilingGroupCommandOutput) => void): void;
    /**
     * <p>
     *             Returns a list of
     *             <a href="https://docs.aws.amazon.com/codeguru/latest/profiler-api/API_FindingsReportSummary.html">
     *                <code>FindingsReportSummary</code>
     *             </a>
     *             objects that contain analysis results for all profiling groups in your AWS account.
     *         </p>
     */
    getFindingsReportAccountSummary(args: GetFindingsReportAccountSummaryCommandInput, options?: __HttpHandlerOptions): Promise<GetFindingsReportAccountSummaryCommandOutput>;
    getFindingsReportAccountSummary(args: GetFindingsReportAccountSummaryCommandInput, cb: (err: any, data?: GetFindingsReportAccountSummaryCommandOutput) => void): void;
    getFindingsReportAccountSummary(args: GetFindingsReportAccountSummaryCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: GetFindingsReportAccountSummaryCommandOutput) => void): void;
    /**
     * <p>Get the current configuration for anomaly notifications for a profiling group.</p>
     */
    getNotificationConfiguration(args: GetNotificationConfigurationCommandInput, options?: __HttpHandlerOptions): Promise<GetNotificationConfigurationCommandOutput>;
    getNotificationConfiguration(args: GetNotificationConfigurationCommandInput, cb: (err: any, data?: GetNotificationConfigurationCommandOutput) => void): void;
    getNotificationConfiguration(args: GetNotificationConfigurationCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: GetNotificationConfigurationCommandOutput) => void): void;
    /**
     * <p>
     *             Returns the JSON-formatted resource-based policy on a profiling group.
     *         </p>
     */
    getPolicy(args: GetPolicyCommandInput, options?: __HttpHandlerOptions): Promise<GetPolicyCommandOutput>;
    getPolicy(args: GetPolicyCommandInput, cb: (err: any, data?: GetPolicyCommandOutput) => void): void;
    getPolicy(args: GetPolicyCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: GetPolicyCommandOutput) => void): void;
    /**
     * <p>
     *          Gets the aggregated profile of a profiling group for a specified time range.
     *          Amazon CodeGuru Profiler collects posted agent profiles for a profiling group
     *          into aggregated profiles.
     *      </p>
     *
     *          <note>
     *             <p>
     *             Because aggregated profiles expire over time <code>GetProfile</code> is not idempotent.
     *          </p>
     *          </note>
     *
     *          <p>
     *          Specify the time range for the requested aggregated profile using 1 or 2 of the following parameters: <code>startTime</code>,
     *          <code>endTime</code>, <code>period</code>. The maximum time range allowed is 7 days. If you specify all 3 parameters,
     *          an exception is thrown. If you specify only <code>period</code>, the latest aggregated profile is returned.
     *       </p>
     *
     *          <p>
     *          Aggregated profiles are available with aggregation periods of 5 minutes, 1 hour, and 1 day, aligned to
     *          UTC. The aggregation period of an aggregated profile determines how long it is retained. For more
     *          information, see <a href="https://docs.aws.amazon.com/codeguru/latest/profiler-api/API_AggregatedProfileTime.html">
     *                <code>AggregatedProfileTime</code>
     *             </a>. The aggregated profile's aggregation period determines how long
     *          it is retained by CodeGuru Profiler.
     *       </p>
     *
     *          <ul>
     *             <li>
     *                <p>
     *                If the aggregation period is 5 minutes, the aggregated profile is retained for 15 days.
     *             </p>
     *             </li>
     *             <li>
     *                <p>
     *                If the aggregation period is 1 hour, the aggregated profile is retained for 60 days.
     *             </p>
     *             </li>
     *             <li>
     *                <p>
     *                If the aggregation period is 1 day, the aggregated profile is retained for 3 years.
     *             </p>
     *             </li>
     *          </ul>
     *
     *          <p>There are two use cases for calling <code>GetProfile</code>.</p>
     *          <ol>
     *             <li>
     *                <p>
     *                If you want to return an aggregated profile that already exists, use
     *                <a href="https://docs.aws.amazon.com/codeguru/latest/profiler-api/API_ListProfileTimes.html">
     *                      <code>ListProfileTimes</code>
     *                   </a> to
     *                view the time ranges of existing aggregated profiles. Use them in a <code>GetProfile</code> request to return a specific,
     *                existing aggregated profile.
     *             </p>
     *             </li>
     *             <li>
     *                <p>
     *                If you want to return an aggregated profile for a time range that doesn't align with an existing aggregated profile,
     *                then CodeGuru Profiler makes a best effort to combine existing aggregated profiles from the requested time
     *                range and return them as one aggregated profile.
     *             </p>
     *
     *                <p> If aggregated profiles do not exist for the full time range requested, then
     *                aggregated profiles for a smaller time range are returned. For example, if the
     *                requested time range is from 00:00 to 00:20, and the existing aggregated profiles are
     *                from 00:15 and 00:25, then the aggregated profiles from 00:15 to 00:20 are returned. </p>
     *
     *
     *             </li>
     *          </ol>
     */
    getProfile(args: GetProfileCommandInput, options?: __HttpHandlerOptions): Promise<GetProfileCommandOutput>;
    getProfile(args: GetProfileCommandInput, cb: (err: any, data?: GetProfileCommandOutput) => void): void;
    getProfile(args: GetProfileCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: GetProfileCommandOutput) => void): void;
    /**
     * <p>
     *             Returns a list of
     *             <a href="https://docs.aws.amazon.com/codeguru/latest/profiler-api/API_Recommendation.html">
     *                <code>Recommendation</code>
     *             </a>
     *             objects that contain recommendations for a profiling group for a given time period. A list of
     *             <a href="https://docs.aws.amazon.com/codeguru/latest/profiler-api/API_Anomaly.html">
     *                <code>Anomaly</code>
     *             </a>
     *             objects that contains details about anomalies detected in the profiling group for the same time period is also
     *             returned.
     *         </p>
     */
    getRecommendations(args: GetRecommendationsCommandInput, options?: __HttpHandlerOptions): Promise<GetRecommendationsCommandOutput>;
    getRecommendations(args: GetRecommendationsCommandInput, cb: (err: any, data?: GetRecommendationsCommandOutput) => void): void;
    getRecommendations(args: GetRecommendationsCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: GetRecommendationsCommandOutput) => void): void;
    /**
     * <p>List the available reports for a given profiling group and time range.</p>
     */
    listFindingsReports(args: ListFindingsReportsCommandInput, options?: __HttpHandlerOptions): Promise<ListFindingsReportsCommandOutput>;
    listFindingsReports(args: ListFindingsReportsCommandInput, cb: (err: any, data?: ListFindingsReportsCommandOutput) => void): void;
    listFindingsReports(args: ListFindingsReportsCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: ListFindingsReportsCommandOutput) => void): void;
    /**
     * <p>Lists the start times of the available aggregated profiles of a profiling group
     *         for an aggregation period within the specified time range.</p>
     */
    listProfileTimes(args: ListProfileTimesCommandInput, options?: __HttpHandlerOptions): Promise<ListProfileTimesCommandOutput>;
    listProfileTimes(args: ListProfileTimesCommandInput, cb: (err: any, data?: ListProfileTimesCommandOutput) => void): void;
    listProfileTimes(args: ListProfileTimesCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: ListProfileTimesCommandOutput) => void): void;
    /**
     * <p>
     *          Returns a list of profiling groups. The profiling groups are returned as
     *          <a href="https://docs.aws.amazon.com/codeguru/latest/profiler-api/API_ProfilingGroupDescription.html">
     *                <code>ProfilingGroupDescription</code>
     *             </a>
     *          objects.
     *       </p>
     */
    listProfilingGroups(args: ListProfilingGroupsCommandInput, options?: __HttpHandlerOptions): Promise<ListProfilingGroupsCommandOutput>;
    listProfilingGroups(args: ListProfilingGroupsCommandInput, cb: (err: any, data?: ListProfilingGroupsCommandOutput) => void): void;
    listProfilingGroups(args: ListProfilingGroupsCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: ListProfilingGroupsCommandOutput) => void): void;
    /**
     * <p>
     *          Returns a list of the tags that are assigned to a specified resource.
     *       </p>
     */
    listTagsForResource(args: ListTagsForResourceCommandInput, options?: __HttpHandlerOptions): Promise<ListTagsForResourceCommandOutput>;
    listTagsForResource(args: ListTagsForResourceCommandInput, cb: (err: any, data?: ListTagsForResourceCommandOutput) => void): void;
    listTagsForResource(args: ListTagsForResourceCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: ListTagsForResourceCommandOutput) => void): void;
    /**
     * <p>
     *          Submits profiling data to an aggregated profile of a profiling group. To get an
     *          aggregated profile that is created with this profiling data, use
     *          <a href="https://docs.aws.amazon.com/codeguru/latest/profiler-api/API_GetProfile.html">
     *                <code>GetProfile</code>
     *             </a>.
     *       </p>
     */
    postAgentProfile(args: PostAgentProfileCommandInput, options?: __HttpHandlerOptions): Promise<PostAgentProfileCommandOutput>;
    postAgentProfile(args: PostAgentProfileCommandInput, cb: (err: any, data?: PostAgentProfileCommandOutput) => void): void;
    postAgentProfile(args: PostAgentProfileCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: PostAgentProfileCommandOutput) => void): void;
    /**
     * <p>
     *             Adds permissions to a profiling group's resource-based policy
     *             that are provided using an action group. If a profiling group doesn't have
     *             a resource-based policy, one is created for it using the permissions in the action group and
     *             the roles and users in the <code>principals</code> parameter.
     *         </p>
     *
     *         <p> The one supported action group that can be added is <code>agentPermission</code>
     *             which grants <code>ConfigureAgent</code> and <code>PostAgent</code> permissions. For
     *             more information, see <a href="https://docs.aws.amazon.com/codeguru/latest/profiler-ug/resource-based-policies.html">Resource-based
     *                 policies in CodeGuru Profiler</a> in the <i>Amazon CodeGuru Profiler User
     *                 Guide</i>, <a href="https://docs.aws.amazon.com/codeguru/latest/profiler-api/API_ConfigureAgent.html">
     *                <code>ConfigureAgent</code>
     *             </a>, and <a href="https://docs.aws.amazon.com/codeguru/latest/profiler-api/API_PostAgentProfile.html">
     *                <code>PostAgentProfile</code>
     *             </a>. </p>
     *
     *         <p>
     *             The first time you call <code>PutPermission</code> on a profiling group, do not specify a <code>revisionId</code> because
     *             it doesn't have a resource-based policy. Subsequent calls must provide a <code>revisionId</code> to specify
     *             which revision of the resource-based policy to add the permissions to.
     *         </p>
     *
     *         <p>
     *             The response contains the profiling group's JSON-formatted resource policy.
     *         </p>
     */
    putPermission(args: PutPermissionCommandInput, options?: __HttpHandlerOptions): Promise<PutPermissionCommandOutput>;
    putPermission(args: PutPermissionCommandInput, cb: (err: any, data?: PutPermissionCommandOutput) => void): void;
    putPermission(args: PutPermissionCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: PutPermissionCommandOutput) => void): void;
    /**
     * <p>Remove one anomaly notifications channel for a profiling group.</p>
     */
    removeNotificationChannel(args: RemoveNotificationChannelCommandInput, options?: __HttpHandlerOptions): Promise<RemoveNotificationChannelCommandOutput>;
    removeNotificationChannel(args: RemoveNotificationChannelCommandInput, cb: (err: any, data?: RemoveNotificationChannelCommandOutput) => void): void;
    removeNotificationChannel(args: RemoveNotificationChannelCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: RemoveNotificationChannelCommandOutput) => void): void;
    /**
     * <p> Removes permissions from a profiling group's resource-based policy that are provided
     *             using an action group. The one supported action group that can be removed is
     *                 <code>agentPermission</code> which grants <code>ConfigureAgent</code> and
     *                 <code>PostAgent</code> permissions. For more information, see <a href="https://docs.aws.amazon.com/codeguru/latest/profiler-ug/resource-based-policies.html">Resource-based policies in CodeGuru Profiler</a> in the <i>Amazon
     *                 CodeGuru Profiler User Guide</i>, <a href="https://docs.aws.amazon.com/codeguru/latest/profiler-api/API_ConfigureAgent.html">
     *                <code>ConfigureAgent</code>
     *             </a>, and <a href="https://docs.aws.amazon.com/codeguru/latest/profiler-api/API_PostAgentProfile.html">
     *                <code>PostAgentProfile</code>
     *             </a>. </p>
     */
    removePermission(args: RemovePermissionCommandInput, options?: __HttpHandlerOptions): Promise<RemovePermissionCommandOutput>;
    removePermission(args: RemovePermissionCommandInput, cb: (err: any, data?: RemovePermissionCommandOutput) => void): void;
    removePermission(args: RemovePermissionCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: RemovePermissionCommandOutput) => void): void;
    /**
     * <p>Sends feedback to CodeGuru Profiler about whether the anomaly detected by the analysis is
     *             useful or not.</p>
     */
    submitFeedback(args: SubmitFeedbackCommandInput, options?: __HttpHandlerOptions): Promise<SubmitFeedbackCommandOutput>;
    submitFeedback(args: SubmitFeedbackCommandInput, cb: (err: any, data?: SubmitFeedbackCommandOutput) => void): void;
    submitFeedback(args: SubmitFeedbackCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: SubmitFeedbackCommandOutput) => void): void;
    /**
     * <p>
     *          Use to assign one or more tags to a resource.
     *       </p>
     */
    tagResource(args: TagResourceCommandInput, options?: __HttpHandlerOptions): Promise<TagResourceCommandOutput>;
    tagResource(args: TagResourceCommandInput, cb: (err: any, data?: TagResourceCommandOutput) => void): void;
    tagResource(args: TagResourceCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: TagResourceCommandOutput) => void): void;
    /**
     * <p>
     *          Use to remove one or more tags from a resource.
     *       </p>
     */
    untagResource(args: UntagResourceCommandInput, options?: __HttpHandlerOptions): Promise<UntagResourceCommandOutput>;
    untagResource(args: UntagResourceCommandInput, cb: (err: any, data?: UntagResourceCommandOutput) => void): void;
    untagResource(args: UntagResourceCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: UntagResourceCommandOutput) => void): void;
    /**
     * <p>Updates a profiling group.</p>
     */
    updateProfilingGroup(args: UpdateProfilingGroupCommandInput, options?: __HttpHandlerOptions): Promise<UpdateProfilingGroupCommandOutput>;
    updateProfilingGroup(args: UpdateProfilingGroupCommandInput, cb: (err: any, data?: UpdateProfilingGroupCommandOutput) => void): void;
    updateProfilingGroup(args: UpdateProfilingGroupCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: UpdateProfilingGroupCommandOutput) => void): void;
}
