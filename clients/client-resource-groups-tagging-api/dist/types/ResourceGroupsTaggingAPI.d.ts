import { ResourceGroupsTaggingAPIClient } from "./ResourceGroupsTaggingAPIClient";
import { DescribeReportCreationCommandInput, DescribeReportCreationCommandOutput } from "./commands/DescribeReportCreationCommand";
import { GetComplianceSummaryCommandInput, GetComplianceSummaryCommandOutput } from "./commands/GetComplianceSummaryCommand";
import { GetResourcesCommandInput, GetResourcesCommandOutput } from "./commands/GetResourcesCommand";
import { GetTagKeysCommandInput, GetTagKeysCommandOutput } from "./commands/GetTagKeysCommand";
import { GetTagValuesCommandInput, GetTagValuesCommandOutput } from "./commands/GetTagValuesCommand";
import { StartReportCreationCommandInput, StartReportCreationCommandOutput } from "./commands/StartReportCreationCommand";
import { TagResourcesCommandInput, TagResourcesCommandOutput } from "./commands/TagResourcesCommand";
import { UntagResourcesCommandInput, UntagResourcesCommandOutput } from "./commands/UntagResourcesCommand";
import { HttpHandlerOptions as __HttpHandlerOptions } from "@aws-sdk/types";
/**
 * <fullname>Resource Groups Tagging API</fullname>
 */
export declare class ResourceGroupsTaggingAPI extends ResourceGroupsTaggingAPIClient {
    /**
     * <p>Describes the status of the <code>StartReportCreation</code> operation. </p>
     *         <p>You can call this operation only from the organization's
     *     management account and from the us-east-1 Region.</p>
     */
    describeReportCreation(args: DescribeReportCreationCommandInput, options?: __HttpHandlerOptions): Promise<DescribeReportCreationCommandOutput>;
    describeReportCreation(args: DescribeReportCreationCommandInput, cb: (err: any, data?: DescribeReportCreationCommandOutput) => void): void;
    describeReportCreation(args: DescribeReportCreationCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: DescribeReportCreationCommandOutput) => void): void;
    /**
     * <p>Returns a table that shows counts of resources that are noncompliant with their tag
     *             policies.</p>
     *         <p>For more information on tag policies, see <a href="https://docs.aws.amazon.com/organizations/latest/userguide/orgs_manage_policies_tag-policies.html">Tag Policies</a> in
     *             the <i>AWS Organizations User Guide.</i>
     *          </p>
     *         <p>You can call this operation only from the organization's
     *     management account and from the us-east-1 Region.</p>
     *          <p>This operation supports pagination, where the response can be sent in
     *     multiple pages. You should check the <code>PaginationToken</code> response parameter to determine
     *     if there are additional results available to return. Repeat the query, passing the
     *     <code>PaginationToken</code> response parameter value as an input to the next request until you
     *     recieve a <code>null</code> value. A null value for <code>PaginationToken</code> indicates that
     *     there are no more results waiting to be returned.</p>
     */
    getComplianceSummary(args: GetComplianceSummaryCommandInput, options?: __HttpHandlerOptions): Promise<GetComplianceSummaryCommandOutput>;
    getComplianceSummary(args: GetComplianceSummaryCommandInput, cb: (err: any, data?: GetComplianceSummaryCommandOutput) => void): void;
    getComplianceSummary(args: GetComplianceSummaryCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: GetComplianceSummaryCommandOutput) => void): void;
    /**
     * <p>Returns all the tagged or previously tagged resources that are located in the
     *             specified Region for the AWS account.</p>
     *         <p>Depending on what information you want returned, you can also specify the
     *             following:</p>
     *         <ul>
     *             <li>
     *                 <p>
     *                   <i>Filters</i> that specify what tags and resource types you
     *                     want returned. The response includes all tags that are associated with the
     *                     requested resources.</p>
     *             </li>
     *             <li>
     *                 <p>Information about compliance with the account's effective tag policy. For more
     *                     information on tag policies, see <a href="https://docs.aws.amazon.com/organizations/latest/userguide/orgs_manage_policies_tag-policies.html">Tag
     *                         Policies</a> in the <i>AWS Organizations User Guide.</i>
     *                </p>
     *             </li>
     *          </ul>
     *          <p>This operation supports pagination, where the response can be sent in
     *     multiple pages. You should check the <code>PaginationToken</code> response parameter to determine
     *     if there are additional results available to return. Repeat the query, passing the
     *     <code>PaginationToken</code> response parameter value as an input to the next request until you
     *     recieve a <code>null</code> value. A null value for <code>PaginationToken</code> indicates that
     *     there are no more results waiting to be returned.</p>
     */
    getResources(args: GetResourcesCommandInput, options?: __HttpHandlerOptions): Promise<GetResourcesCommandOutput>;
    getResources(args: GetResourcesCommandInput, cb: (err: any, data?: GetResourcesCommandOutput) => void): void;
    getResources(args: GetResourcesCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: GetResourcesCommandOutput) => void): void;
    /**
     * <p>Returns all tag keys currently in use in the specified Region for the calling AWS
     *             account.</p>
     *          <p>This operation supports pagination, where the response can be sent in
     *     multiple pages. You should check the <code>PaginationToken</code> response parameter to determine
     *     if there are additional results available to return. Repeat the query, passing the
     *     <code>PaginationToken</code> response parameter value as an input to the next request until you
     *     recieve a <code>null</code> value. A null value for <code>PaginationToken</code> indicates that
     *     there are no more results waiting to be returned.</p>
     */
    getTagKeys(args: GetTagKeysCommandInput, options?: __HttpHandlerOptions): Promise<GetTagKeysCommandOutput>;
    getTagKeys(args: GetTagKeysCommandInput, cb: (err: any, data?: GetTagKeysCommandOutput) => void): void;
    getTagKeys(args: GetTagKeysCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: GetTagKeysCommandOutput) => void): void;
    /**
     * <p>Returns all tag values for the specified key that are used in the specified AWS
     *             Region for the calling AWS account.</p>
     *          <p>This operation supports pagination, where the response can be sent in
     *     multiple pages. You should check the <code>PaginationToken</code> response parameter to determine
     *     if there are additional results available to return. Repeat the query, passing the
     *     <code>PaginationToken</code> response parameter value as an input to the next request until you
     *     recieve a <code>null</code> value. A null value for <code>PaginationToken</code> indicates that
     *     there are no more results waiting to be returned.</p>
     */
    getTagValues(args: GetTagValuesCommandInput, options?: __HttpHandlerOptions): Promise<GetTagValuesCommandOutput>;
    getTagValues(args: GetTagValuesCommandInput, cb: (err: any, data?: GetTagValuesCommandOutput) => void): void;
    getTagValues(args: GetTagValuesCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: GetTagValuesCommandOutput) => void): void;
    /**
     * <p>Generates a report that lists all tagged resources in the accounts across your
     *             organization and tells whether each resource is compliant with the effective tag policy.
     *             Compliance data is refreshed daily. The report is generated asynchronously.</p>
     *         <p>The generated report is saved to the following location:</p>
     *         <p>
     *             <code>s3://example-bucket/AwsTagPolicies/o-exampleorgid/YYYY-MM-ddTHH:mm:ssZ/report.csv</code>
     *          </p>
     *         <p>You can call this operation only from the organization's
     *     management account and from the us-east-1 Region.</p>
     */
    startReportCreation(args: StartReportCreationCommandInput, options?: __HttpHandlerOptions): Promise<StartReportCreationCommandOutput>;
    startReportCreation(args: StartReportCreationCommandInput, cb: (err: any, data?: StartReportCreationCommandOutput) => void): void;
    startReportCreation(args: StartReportCreationCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: StartReportCreationCommandOutput) => void): void;
    /**
     * <p>Applies one or more tags to the specified resources. Note the following:</p>
     *         <ul>
     *             <li>
     *                 <p>Not all resources can have tags. For a list of services with resources that
     *                     support tagging using this operation, see <a href="https://docs.aws.amazon.com/resourcegroupstagging/latest/APIReference/supported-services.html">Services that support the
     *                         Resource Groups Tagging API</a>.</p>
     *             </li>
     *             <li>
     *                 <p>Each resource can have up to 50 tags. For other limits, see <a href="https://docs.aws.amazon.com/general/latest/gr/aws_tagging.html#tag-conventions">Tag Naming and Usage Conventions</a> in the <i>AWS General
     *                         Reference.</i>
     *                </p>
     *             </li>
     *             <li>
     *                 <p>You can only tag resources that are located in the specified AWS Region for
     *                     the AWS account.</p>
     *             </li>
     *             <li>
     *                 <p>To add tags to a resource, you need the necessary permissions for the service
     *                     that the resource belongs to as well as permissions for adding tags. For more
     *                     information, see the documentation for each service.</p>
     *             </li>
     *          </ul>
     *         <important>
     *             <p>Do not store personally identifiable information (PII) or other confidential or
     *                 sensitive information in tags. We use tags to provide you with billing and
     *                 administration services. Tags are not intended to be used for private or sensitive
     *                 data.</p>
     *         </important>
     */
    tagResources(args: TagResourcesCommandInput, options?: __HttpHandlerOptions): Promise<TagResourcesCommandOutput>;
    tagResources(args: TagResourcesCommandInput, cb: (err: any, data?: TagResourcesCommandOutput) => void): void;
    tagResources(args: TagResourcesCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: TagResourcesCommandOutput) => void): void;
    /**
     * <p>Removes the specified tags from the specified resources. When you specify a tag key,
     *             the action removes both that key and its associated value. The operation succeeds even
     *             if you attempt to remove tags from a resource that were already removed. Note the
     *             following:</p>
     *         <ul>
     *             <li>
     *                 <p>To remove tags from a resource, you need the necessary permissions for the
     *                     service that the resource belongs to as well as permissions for removing tags.
     *                     For more information, see the documentation for the service whose resource you
     *                     want to untag.</p>
     *             </li>
     *             <li>
     *                 <p>You can only tag resources that are located in the specified AWS Region for
     *                     the calling AWS account.</p>
     *             </li>
     *          </ul>
     */
    untagResources(args: UntagResourcesCommandInput, options?: __HttpHandlerOptions): Promise<UntagResourcesCommandOutput>;
    untagResources(args: UntagResourcesCommandInput, cb: (err: any, data?: UntagResourcesCommandOutput) => void): void;
    untagResources(args: UntagResourcesCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: UntagResourcesCommandOutput) => void): void;
}
