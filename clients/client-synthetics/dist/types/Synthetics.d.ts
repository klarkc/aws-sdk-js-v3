import { SyntheticsClient } from "./SyntheticsClient";
import { CreateCanaryCommandInput, CreateCanaryCommandOutput } from "./commands/CreateCanaryCommand";
import { DeleteCanaryCommandInput, DeleteCanaryCommandOutput } from "./commands/DeleteCanaryCommand";
import { DescribeCanariesCommandInput, DescribeCanariesCommandOutput } from "./commands/DescribeCanariesCommand";
import { DescribeCanariesLastRunCommandInput, DescribeCanariesLastRunCommandOutput } from "./commands/DescribeCanariesLastRunCommand";
import { DescribeRuntimeVersionsCommandInput, DescribeRuntimeVersionsCommandOutput } from "./commands/DescribeRuntimeVersionsCommand";
import { GetCanaryCommandInput, GetCanaryCommandOutput } from "./commands/GetCanaryCommand";
import { GetCanaryRunsCommandInput, GetCanaryRunsCommandOutput } from "./commands/GetCanaryRunsCommand";
import { ListTagsForResourceCommandInput, ListTagsForResourceCommandOutput } from "./commands/ListTagsForResourceCommand";
import { StartCanaryCommandInput, StartCanaryCommandOutput } from "./commands/StartCanaryCommand";
import { StopCanaryCommandInput, StopCanaryCommandOutput } from "./commands/StopCanaryCommand";
import { TagResourceCommandInput, TagResourceCommandOutput } from "./commands/TagResourceCommand";
import { UntagResourceCommandInput, UntagResourceCommandOutput } from "./commands/UntagResourceCommand";
import { UpdateCanaryCommandInput, UpdateCanaryCommandOutput } from "./commands/UpdateCanaryCommand";
import { HttpHandlerOptions as __HttpHandlerOptions } from "@aws-sdk/types";
/**
 * <fullname>Amazon CloudWatch Synthetics</fullname>
 *          <p>You can use Amazon CloudWatch Synthetics to continually monitor your services. You can
 *          create and manage <i>canaries</i>, which are modular, lightweight scripts
 *          that monitor your endpoints and APIs
 *             from the outside-in. You can set up your canaries to run
 *          24 hours a day, once per minute. The canaries help you check the availability and latency
 *          of your web services and troubleshoot anomalies by investigating load time data,
 *          screenshots of the UI, logs, and metrics. The canaries seamlessly integrate with CloudWatch
 *          ServiceLens to help you trace the causes of impacted nodes in your applications. For more
 *          information, see <a href="https://docs.aws.amazon.com/AmazonCloudWatch/latest/monitoring/ServiceLens.html">Using ServiceLens to Monitor
 *             the Health of Your Applications</a> in the <i>Amazon CloudWatch User
 *             Guide</i>.</p>
 *
 *          <p>Before you create and manage canaries, be aware of the security considerations. For more
 *          information, see <a href="https://docs.aws.amazon.com/AmazonCloudWatch/latest/monitoring/servicelens_canaries_security.html">Security
 *             Considerations for Synthetics Canaries</a>.</p>
 */
export declare class Synthetics extends SyntheticsClient {
    /**
     * <p>Creates a canary. Canaries are scripts that monitor your endpoints and APIs from the
     *          outside-in. Canaries help you check the availability and latency of your web services and
     *          troubleshoot anomalies by investigating load time data, screenshots of the UI, logs, and
     *          metrics. You can set up a canary to run continuously or just once. </p>
     *          <p>Do not use <code>CreateCanary</code> to modify an existing canary. Use <a href="https://docs.aws.amazon.com/AmazonSynthetics/latest/APIReference/API_UpdateCanary.html">UpdateCanary</a> instead.</p>
     *          <p>To create canaries, you must have the <code>CloudWatchSyntheticsFullAccess</code> policy.
     *          If you are creating a new IAM role for the canary, you also need the
     *          the <code>iam:CreateRole</code>, <code>iam:CreatePolicy</code> and
     *             <code>iam:AttachRolePolicy</code> permissions. For more information, see <a href="https://docs.aws.amazon.com/AmazonCloudWatch/latest/monitoring/CloudWatch_Synthetics_Canaries_Roles">Necessary
     *             Roles and Permissions</a>.</p>
     *          <p>Do not include secrets or proprietary information in your canary names. The canary name
     *          makes up part of the Amazon Resource Name (ARN) for the canary, and the ARN is included in
     *          outbound calls over the internet. For more information, see <a href="https://docs.aws.amazon.com/AmazonCloudWatch/latest/monitoring/servicelens_canaries_security.html">Security
     *             Considerations for Synthetics Canaries</a>.</p>
     */
    createCanary(args: CreateCanaryCommandInput, options?: __HttpHandlerOptions): Promise<CreateCanaryCommandOutput>;
    createCanary(args: CreateCanaryCommandInput, cb: (err: any, data?: CreateCanaryCommandOutput) => void): void;
    createCanary(args: CreateCanaryCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: CreateCanaryCommandOutput) => void): void;
    /**
     * <p>Permanently deletes the specified canary.</p>
     *          <p>When you delete a canary, resources used and created by the canary are not automatically deleted. After you delete a canary that you do not intend to
     *          use again, you
     *       should also delete the following:</p>
     *          <ul>
     *             <li>
     *                <p>The Lambda functions and layers used by this canary. These have the prefix
     *                      <code>cwsyn-<i>MyCanaryName</i>
     *                   </code>.</p>
     *             </li>
     *             <li>
     *                <p>The CloudWatch alarms created for this canary. These alarms have a name of
     *                      <code>Synthetics-SharpDrop-Alarm-<i>MyCanaryName</i>
     *                   </code>.</p>
     *             </li>
     *             <li>
     *                <p>Amazon S3 objects and buckets, such as the canary's artifact location.</p>
     *             </li>
     *             <li>
     *                <p>IAM roles created for the canary. If they were created in the console, these roles
     *                have the name <code>
     *                      role/service-role/CloudWatchSyntheticsRole-<i>MyCanaryName</i>
     *                   </code>.</p>
     *             </li>
     *             <li>
     *                <p>CloudWatch Logs log groups created for the canary. These logs groups have the name
     *                      <code>/aws/lambda/cwsyn-<i>MyCanaryName</i>
     *                   </code>. </p>
     *             </li>
     *          </ul>
     *
     *          <p>Before you delete a canary, you might want to use <code>GetCanary</code> to display
     *          the information about this canary. Make
     *          note of the information returned by this operation so that you can delete these resources
     *          after you delete the canary.</p>
     */
    deleteCanary(args: DeleteCanaryCommandInput, options?: __HttpHandlerOptions): Promise<DeleteCanaryCommandOutput>;
    deleteCanary(args: DeleteCanaryCommandInput, cb: (err: any, data?: DeleteCanaryCommandOutput) => void): void;
    deleteCanary(args: DeleteCanaryCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: DeleteCanaryCommandOutput) => void): void;
    /**
     * <p>This operation returns a list of the canaries in your account, along with full details
     *       about each canary.</p>
     *         <p>This operation does not have resource-level authorization, so if a user is able to use
     *             <code>DescribeCanaries</code>, the user can see all of the canaries in the account. A
     *          deny policy can only be used to restrict access to all canaries. It cannot be used on
     *          specific resources. </p>
     */
    describeCanaries(args: DescribeCanariesCommandInput, options?: __HttpHandlerOptions): Promise<DescribeCanariesCommandOutput>;
    describeCanaries(args: DescribeCanariesCommandInput, cb: (err: any, data?: DescribeCanariesCommandOutput) => void): void;
    describeCanaries(args: DescribeCanariesCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: DescribeCanariesCommandOutput) => void): void;
    /**
     * <p>Use this operation to see information from the most recent run of each canary that you have created.</p>
     */
    describeCanariesLastRun(args: DescribeCanariesLastRunCommandInput, options?: __HttpHandlerOptions): Promise<DescribeCanariesLastRunCommandOutput>;
    describeCanariesLastRun(args: DescribeCanariesLastRunCommandInput, cb: (err: any, data?: DescribeCanariesLastRunCommandOutput) => void): void;
    describeCanariesLastRun(args: DescribeCanariesLastRunCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: DescribeCanariesLastRunCommandOutput) => void): void;
    /**
     * <p>Returns a list of Synthetics canary runtime versions. For more information,
     *          see <a href="https://docs.aws.amazon.com/AmazonCloudWatch/latest/monitoring/CloudWatch_Synthetics_Canaries_Library.html">
     *             Canary Runtime Versions</a>.</p>
     */
    describeRuntimeVersions(args: DescribeRuntimeVersionsCommandInput, options?: __HttpHandlerOptions): Promise<DescribeRuntimeVersionsCommandOutput>;
    describeRuntimeVersions(args: DescribeRuntimeVersionsCommandInput, cb: (err: any, data?: DescribeRuntimeVersionsCommandOutput) => void): void;
    describeRuntimeVersions(args: DescribeRuntimeVersionsCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: DescribeRuntimeVersionsCommandOutput) => void): void;
    /**
     * <p>Retrieves complete information about one canary. You must specify
     *       the name of the canary that you want. To get a list of canaries
     *       and their names, use <a href="https://docs.aws.amazon.com/AmazonSynthetics/latest/APIReference/API_DescribeCanaries.html">DescribeCanaries</a>.</p>
     */
    getCanary(args: GetCanaryCommandInput, options?: __HttpHandlerOptions): Promise<GetCanaryCommandOutput>;
    getCanary(args: GetCanaryCommandInput, cb: (err: any, data?: GetCanaryCommandOutput) => void): void;
    getCanary(args: GetCanaryCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: GetCanaryCommandOutput) => void): void;
    /**
     * <p>Retrieves a list of runs for a specified canary.</p>
     */
    getCanaryRuns(args: GetCanaryRunsCommandInput, options?: __HttpHandlerOptions): Promise<GetCanaryRunsCommandOutput>;
    getCanaryRuns(args: GetCanaryRunsCommandInput, cb: (err: any, data?: GetCanaryRunsCommandOutput) => void): void;
    getCanaryRuns(args: GetCanaryRunsCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: GetCanaryRunsCommandOutput) => void): void;
    /**
     * <p>Displays the tags associated with a canary.</p>
     */
    listTagsForResource(args: ListTagsForResourceCommandInput, options?: __HttpHandlerOptions): Promise<ListTagsForResourceCommandOutput>;
    listTagsForResource(args: ListTagsForResourceCommandInput, cb: (err: any, data?: ListTagsForResourceCommandOutput) => void): void;
    listTagsForResource(args: ListTagsForResourceCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: ListTagsForResourceCommandOutput) => void): void;
    /**
     * <p>Use this operation to run a canary that has already been created.
     *          The frequency of the canary runs is determined by the value of the canary's <code>Schedule</code>. To see a canary's schedule,
     *          use <a href="https://docs.aws.amazon.com/AmazonSynthetics/latest/APIReference/API_GetCanary.html">GetCanary</a>.</p>
     */
    startCanary(args: StartCanaryCommandInput, options?: __HttpHandlerOptions): Promise<StartCanaryCommandOutput>;
    startCanary(args: StartCanaryCommandInput, cb: (err: any, data?: StartCanaryCommandOutput) => void): void;
    startCanary(args: StartCanaryCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: StartCanaryCommandOutput) => void): void;
    /**
     * <p>Stops the canary to prevent all future runs. If the canary is currently running,
     *          Synthetics stops waiting for the current run of the specified canary to complete. The
     *         run that is in progress completes on its own, publishes metrics, and uploads artifacts, but
     *          it is not recorded in Synthetics as a completed run.</p>
     *          <p>You can use <code>StartCanary</code> to start it running again
     *          with the canary’s current schedule at any point in the future.  </p>
     */
    stopCanary(args: StopCanaryCommandInput, options?: __HttpHandlerOptions): Promise<StopCanaryCommandOutput>;
    stopCanary(args: StopCanaryCommandInput, cb: (err: any, data?: StopCanaryCommandOutput) => void): void;
    stopCanary(args: StopCanaryCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: StopCanaryCommandOutput) => void): void;
    /**
     * <p>Assigns one or more tags (key-value pairs) to the specified canary. </p>
     *          <p>Tags can help you organize and categorize your
     *          resources. You can also use them to scope user permissions, by granting a user permission to access or change only resources with
     *          certain tag values.</p>
     *          <p>Tags don't have any semantic meaning to AWS and are interpreted strictly as strings of characters.</p>
     *          <p>You can use the <code>TagResource</code> action with a canary that already has tags. If you specify a new tag key for the alarm,
     *          this tag is appended to the list of tags associated
     *          with the alarm. If you specify a tag key that is already associated with the alarm, the new tag value that you specify replaces
     *          the previous value for that tag.</p>
     *          <p>You can associate as many as 50 tags with a canary.</p>
     */
    tagResource(args: TagResourceCommandInput, options?: __HttpHandlerOptions): Promise<TagResourceCommandOutput>;
    tagResource(args: TagResourceCommandInput, cb: (err: any, data?: TagResourceCommandOutput) => void): void;
    tagResource(args: TagResourceCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: TagResourceCommandOutput) => void): void;
    /**
     * <p>Removes one or more tags from the specified canary.</p>
     */
    untagResource(args: UntagResourceCommandInput, options?: __HttpHandlerOptions): Promise<UntagResourceCommandOutput>;
    untagResource(args: UntagResourceCommandInput, cb: (err: any, data?: UntagResourceCommandOutput) => void): void;
    untagResource(args: UntagResourceCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: UntagResourceCommandOutput) => void): void;
    /**
     * <p>Use this operation to change the settings of a canary that has
     *          already been created.</p>
     *          <p>You can't use this operation to update the tags of an existing canary. To
     *          change the tags of an existing canary, use
     *          <a href="https://docs.aws.amazon.com/AmazonSynthetics/latest/APIReference/API_TagResource.html">TagResource</a>.</p>
     */
    updateCanary(args: UpdateCanaryCommandInput, options?: __HttpHandlerOptions): Promise<UpdateCanaryCommandOutput>;
    updateCanary(args: UpdateCanaryCommandInput, cb: (err: any, data?: UpdateCanaryCommandOutput) => void): void;
    updateCanary(args: UpdateCanaryCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: UpdateCanaryCommandOutput) => void): void;
}
