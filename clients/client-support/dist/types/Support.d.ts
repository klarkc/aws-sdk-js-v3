import { SupportClient } from "./SupportClient";
import { AddAttachmentsToSetCommandInput, AddAttachmentsToSetCommandOutput } from "./commands/AddAttachmentsToSetCommand";
import { AddCommunicationToCaseCommandInput, AddCommunicationToCaseCommandOutput } from "./commands/AddCommunicationToCaseCommand";
import { CreateCaseCommandInput, CreateCaseCommandOutput } from "./commands/CreateCaseCommand";
import { DescribeAttachmentCommandInput, DescribeAttachmentCommandOutput } from "./commands/DescribeAttachmentCommand";
import { DescribeCasesCommandInput, DescribeCasesCommandOutput } from "./commands/DescribeCasesCommand";
import { DescribeCommunicationsCommandInput, DescribeCommunicationsCommandOutput } from "./commands/DescribeCommunicationsCommand";
import { DescribeServicesCommandInput, DescribeServicesCommandOutput } from "./commands/DescribeServicesCommand";
import { DescribeSeverityLevelsCommandInput, DescribeSeverityLevelsCommandOutput } from "./commands/DescribeSeverityLevelsCommand";
import { DescribeTrustedAdvisorCheckRefreshStatusesCommandInput, DescribeTrustedAdvisorCheckRefreshStatusesCommandOutput } from "./commands/DescribeTrustedAdvisorCheckRefreshStatusesCommand";
import { DescribeTrustedAdvisorCheckResultCommandInput, DescribeTrustedAdvisorCheckResultCommandOutput } from "./commands/DescribeTrustedAdvisorCheckResultCommand";
import { DescribeTrustedAdvisorCheckSummariesCommandInput, DescribeTrustedAdvisorCheckSummariesCommandOutput } from "./commands/DescribeTrustedAdvisorCheckSummariesCommand";
import { DescribeTrustedAdvisorChecksCommandInput, DescribeTrustedAdvisorChecksCommandOutput } from "./commands/DescribeTrustedAdvisorChecksCommand";
import { RefreshTrustedAdvisorCheckCommandInput, RefreshTrustedAdvisorCheckCommandOutput } from "./commands/RefreshTrustedAdvisorCheckCommand";
import { ResolveCaseCommandInput, ResolveCaseCommandOutput } from "./commands/ResolveCaseCommand";
import { HttpHandlerOptions as __HttpHandlerOptions } from "@aws-sdk/types";
/**
 * <fullname>AWS Support</fullname>
 *         <p>The <i>AWS Support API Reference</i> is intended for programmers who need detailed
 *             information about the AWS Support operations and data types. You can use the API to manage
 *             your support cases programmatically. The AWS Support API uses HTTP methods that return
 *             results in JSON format.</p>
 *         <note>
 *             <ul>
 *                <li>
 *                     <p>You must have a Business or Enterprise Support plan to use the AWS Support
 *                         API. </p>
 *                 </li>
 *                <li>
 *                     <p>If you call the AWS Support API from an account that does not have a
 *                         Business or Enterprise Support plan, the
 *                             <code>SubscriptionRequiredException</code> error message appears. For
 *                         information about changing your support plan, see <a href="http://aws.amazon.com/premiumsupport/">AWS Support</a>.</p>
 *                 </li>
 *             </ul>
 *         </note>
 *         <p>The AWS Support service also exposes a set of <a href="http://aws.amazon.com/premiumsupport/trustedadvisor/">AWS Trusted Advisor</a> features. You can
 *             retrieve a list of checks and their descriptions, get check results, specify checks to
 *             refresh, and get the refresh status of checks.</p>
 *         <p>The following list describes the AWS Support case management operations:</p>
 *         <ul>
 *             <li>
 *                 <p> Service names, issue categories, and available severity levels  - The
 *                         <a>DescribeServices</a> and <a>DescribeSeverityLevels</a> operations return AWS service names,
 *                     service codes, service categories, and problem severity levels. You use these
 *                     values when you call the <a>CreateCase</a> operation.</p>
 *             </li>
 *             <li>
 *                 <p> Case creation, case details, and case resolution - The <a>CreateCase</a>, <a>DescribeCases</a>, <a>DescribeAttachment</a>, and <a>ResolveCase</a> operations
 *                     create AWS Support cases, retrieve information about cases, and resolve cases.</p>
 *             </li>
 *             <li>
 *                 <p> Case communication - The <a>DescribeCommunications</a>,
 *                         <a>AddCommunicationToCase</a>, and <a>AddAttachmentsToSet</a> operations retrieve and add communications
 *                     and attachments to AWS Support cases.</p>
 *             </li>
 *          </ul>
 *         <p>The following list describes the operations available from the AWS Support service for
 *             Trusted Advisor:</p>
 *         <ul>
 *             <li>
 *                 <p>
 *                     <a>DescribeTrustedAdvisorChecks</a> returns the list of checks that
 *                     run against your AWS resources.</p>
 *             </li>
 *             <li>
 *                 <p>Using the <code>checkId</code> for a specific check returned by <a>DescribeTrustedAdvisorChecks</a>, you can call <a>DescribeTrustedAdvisorCheckResult</a> to obtain the results for the
 *                     check that you specified.</p>
 *             </li>
 *             <li>
 *                 <p>
 *                     <a>DescribeTrustedAdvisorCheckSummaries</a> returns summarized
 *                     results for one or more Trusted Advisor checks.</p>
 *             </li>
 *             <li>
 *                 <p>
 *                     <a>RefreshTrustedAdvisorCheck</a> requests that Trusted Advisor rerun a
 *                     specified check.</p>
 *             </li>
 *             <li>
 *                 <p>
 *                     <a>DescribeTrustedAdvisorCheckRefreshStatuses</a> reports the refresh
 *                     status of one or more checks.</p>
 *             </li>
 *          </ul>
 *         <p>For authentication of requests, AWS Support uses <a href="https://docs.aws.amazon.com/general/latest/gr/signature-version-4.html">Signature Version 4 Signing
 *                 Process</a>.</p>
 *         <p>See <a href="https://docs.aws.amazon.com/awssupport/latest/user/Welcome.html">About the
 *             AWS Support API</a> in the <i>AWS Support User Guide</i> for
 *             information about how to use this service to create and manage your support cases, and
 *             how to call Trusted Advisor for results of checks on your resources.</p>
 */
export declare class Support extends SupportClient {
    /**
     * <p>Adds one or more attachments to an attachment set. </p>
     *         <p>An attachment set is a temporary container for attachments that you add to a case or
     *             case communication. The set is available for 1 hour after it's created. The
     *                 <code>expiryTime</code> returned in the response is when the set expires. </p>
     *         <note>
     *             <ul>
     *                <li>
     *                     <p>You must have a Business or Enterprise Support plan to use the AWS Support
     *                         API. </p>
     *                 </li>
     *                <li>
     *                     <p>If you call the AWS Support API from an account that does not have a
     *                         Business or Enterprise Support plan, the
     *                             <code>SubscriptionRequiredException</code> error message appears. For
     *                         information about changing your support plan, see <a href="http://aws.amazon.com/premiumsupport/">AWS Support</a>.</p>
     *                 </li>
     *             </ul>
     *         </note>
     */
    addAttachmentsToSet(args: AddAttachmentsToSetCommandInput, options?: __HttpHandlerOptions): Promise<AddAttachmentsToSetCommandOutput>;
    addAttachmentsToSet(args: AddAttachmentsToSetCommandInput, cb: (err: any, data?: AddAttachmentsToSetCommandOutput) => void): void;
    addAttachmentsToSet(args: AddAttachmentsToSetCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: AddAttachmentsToSetCommandOutput) => void): void;
    /**
     * <p>Adds additional customer communication to an AWS Support case. Use the <code>caseId</code>
     *             parameter to identify the case to which to add communication. You can list a set of
     *             email addresses to copy on the communication by using the <code>ccEmailAddresses</code>
     *             parameter. The <code>communicationBody</code> value contains the text of the
     *             communication.</p>
     *
     *         <note>
     *             <ul>
     *                <li>
     *                     <p>You must have a Business or Enterprise Support plan to use the AWS Support
     *                         API. </p>
     *                 </li>
     *                <li>
     *                     <p>If you call the AWS Support API from an account that does not have a
     *                         Business or Enterprise Support plan, the
     *                             <code>SubscriptionRequiredException</code> error message appears. For
     *                         information about changing your support plan, see <a href="http://aws.amazon.com/premiumsupport/">AWS Support</a>.</p>
     *                 </li>
     *             </ul>
     *         </note>
     */
    addCommunicationToCase(args: AddCommunicationToCaseCommandInput, options?: __HttpHandlerOptions): Promise<AddCommunicationToCaseCommandOutput>;
    addCommunicationToCase(args: AddCommunicationToCaseCommandInput, cb: (err: any, data?: AddCommunicationToCaseCommandOutput) => void): void;
    addCommunicationToCase(args: AddCommunicationToCaseCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: AddCommunicationToCaseCommandOutput) => void): void;
    /**
     * <p>Creates a case in the AWS Support Center. This operation is similar to how you create a case
     *             in the AWS Support Center <a href="https://console.aws.amazon.com/support/home#/case/create">Create
     *                 Case</a> page.</p>
     *         <p>The AWS Support API doesn't support requesting service limit increases. You can submit a
     *             service limit increase in the following ways: </p>
     *         <ul>
     *             <li>
     *                 <p>Submit a request from the AWS Support Center <a href="https://console.aws.amazon.com/support/home#/case/create">Create Case</a> page.</p>
     *             </li>
     *             <li>
     *                 <p>Use the Service Quotas <a href="https://docs.aws.amazon.com/servicequotas/2019-06-24/apireference/API_RequestServiceQuotaIncrease.html">RequestServiceQuotaIncrease</a> operation.</p>
     *             </li>
     *          </ul>
     *         <p>A successful <code>CreateCase</code> request returns an AWS Support case number. You can use
     *             the <a>DescribeCases</a> operation and specify the case number to get
     *             existing AWS Support cases. After you create a case, use the <a>AddCommunicationToCase</a> operation to add additional communication or
     *             attachments to an existing case.</p>
     *         <p>The <code>caseId</code> is separate from the <code>displayId</code> that appears in
     *             the <a href="https://console.aws.amazon.com/support">AWS Support Center</a>. Use the <a>DescribeCases</a> operation to get the <code>displayId</code>.</p>
     *         <note>
     *             <ul>
     *                <li>
     *                     <p>You must have a Business or Enterprise Support plan to use the AWS Support
     *                         API. </p>
     *                 </li>
     *                <li>
     *                     <p>If you call the AWS Support API from an account that does not have a
     *                         Business or Enterprise Support plan, the
     *                             <code>SubscriptionRequiredException</code> error message appears. For
     *                         information about changing your support plan, see <a href="http://aws.amazon.com/premiumsupport/">AWS Support</a>.</p>
     *                 </li>
     *             </ul>
     *         </note>
     */
    createCase(args: CreateCaseCommandInput, options?: __HttpHandlerOptions): Promise<CreateCaseCommandOutput>;
    createCase(args: CreateCaseCommandInput, cb: (err: any, data?: CreateCaseCommandOutput) => void): void;
    createCase(args: CreateCaseCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: CreateCaseCommandOutput) => void): void;
    /**
     * <p>Returns the attachment that has the specified ID. Attachments can include screenshots,
     *             error logs, or other files that describe your issue. Attachment IDs are generated by the
     *             case management system when you add an attachment to a case or case communication.
     *             Attachment IDs are returned in the <a>AttachmentDetails</a> objects that are
     *             returned by the <a>DescribeCommunications</a> operation.</p>
     *         <note>
     *             <ul>
     *                <li>
     *                     <p>You must have a Business or Enterprise Support plan to use the AWS Support
     *                         API. </p>
     *                 </li>
     *                <li>
     *                     <p>If you call the AWS Support API from an account that does not have a
     *                         Business or Enterprise Support plan, the
     *                             <code>SubscriptionRequiredException</code> error message appears. For
     *                         information about changing your support plan, see <a href="http://aws.amazon.com/premiumsupport/">AWS Support</a>.</p>
     *                 </li>
     *             </ul>
     *         </note>
     */
    describeAttachment(args: DescribeAttachmentCommandInput, options?: __HttpHandlerOptions): Promise<DescribeAttachmentCommandOutput>;
    describeAttachment(args: DescribeAttachmentCommandInput, cb: (err: any, data?: DescribeAttachmentCommandOutput) => void): void;
    describeAttachment(args: DescribeAttachmentCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: DescribeAttachmentCommandOutput) => void): void;
    /**
     * <p>Returns a list of cases that you specify by passing one or more case IDs. You can use
     *             the <code>afterTime</code> and <code>beforeTime</code> parameters to filter the cases by
     *             date. You can set values for the <code>includeResolvedCases</code> and
     *                 <code>includeCommunications</code> parameters to specify how much information to
     *             return.</p>
     *         <p>The response returns the following in JSON format:</p>
     *         <ul>
     *             <li>
     *                 <p>One or more <a href="https://docs.aws.amazon.com/awssupport/latest/APIReference/API_CaseDetails.html">CaseDetails</a> data types.</p>
     *             </li>
     *             <li>
     *                 <p>One or more <code>nextToken</code> values, which specify where to paginate the
     *                     returned records represented by the <code>CaseDetails</code> objects.</p>
     *             </li>
     *          </ul>
     *         <p>Case data is available for 12 months after creation. If a case was created more than
     *             12 months ago, a request might return an error.</p>
     *         <note>
     *             <ul>
     *                <li>
     *                     <p>You must have a Business or Enterprise Support plan to use the AWS Support
     *                         API. </p>
     *                 </li>
     *                <li>
     *                     <p>If you call the AWS Support API from an account that does not have a
     *                         Business or Enterprise Support plan, the
     *                             <code>SubscriptionRequiredException</code> error message appears. For
     *                         information about changing your support plan, see <a href="http://aws.amazon.com/premiumsupport/">AWS Support</a>.</p>
     *                 </li>
     *             </ul>
     *         </note>
     */
    describeCases(args: DescribeCasesCommandInput, options?: __HttpHandlerOptions): Promise<DescribeCasesCommandOutput>;
    describeCases(args: DescribeCasesCommandInput, cb: (err: any, data?: DescribeCasesCommandOutput) => void): void;
    describeCases(args: DescribeCasesCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: DescribeCasesCommandOutput) => void): void;
    /**
     * <p>Returns communications and attachments for one or more support cases. Use the
     *                 <code>afterTime</code> and <code>beforeTime</code> parameters to filter by date. You
     *             can use the <code>caseId</code> parameter to restrict the results to a specific
     *             case.</p>
     *         <p>Case data is available for 12 months after creation. If a case was created more than
     *             12 months ago, a request for data might cause an error.</p>
     *         <p>You can use the <code>maxResults</code> and <code>nextToken</code> parameters to
     *             control the pagination of the results. Set <code>maxResults</code> to the number of
     *             cases that you want to display on each page, and use <code>nextToken</code> to specify
     *             the resumption of pagination.</p>
     *         <note>
     *             <ul>
     *                <li>
     *                     <p>You must have a Business or Enterprise Support plan to use the AWS Support
     *                         API. </p>
     *                 </li>
     *                <li>
     *                     <p>If you call the AWS Support API from an account that does not have a
     *                         Business or Enterprise Support plan, the
     *                             <code>SubscriptionRequiredException</code> error message appears. For
     *                         information about changing your support plan, see <a href="http://aws.amazon.com/premiumsupport/">AWS Support</a>.</p>
     *                 </li>
     *             </ul>
     *         </note>
     */
    describeCommunications(args: DescribeCommunicationsCommandInput, options?: __HttpHandlerOptions): Promise<DescribeCommunicationsCommandOutput>;
    describeCommunications(args: DescribeCommunicationsCommandInput, cb: (err: any, data?: DescribeCommunicationsCommandOutput) => void): void;
    describeCommunications(args: DescribeCommunicationsCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: DescribeCommunicationsCommandOutput) => void): void;
    /**
     * <p>Returns the current list of AWS services and a list of service categories for each
     *             service. You then use service names and categories in your <a>CreateCase</a>
     *             requests. Each AWS service has its own set of categories.</p>
     *         <p>The service codes and category codes correspond to the values that appear in the
     *                 <b>Service</b> and <b>Category</b> lists on the AWS Support Center <a href="https://console.aws.amazon.com/support/home#/case/create">Create Case</a> page. The values in those fields
     *             don't necessarily match the service codes and categories returned by the
     *                 <code>DescribeServices</code> operation. Always use the service codes and categories
     *             that the <code>DescribeServices</code> operation returns, so that you have the most
     *             recent set of service and category codes.</p>
     *         <note>
     *             <ul>
     *                <li>
     *                     <p>You must have a Business or Enterprise Support plan to use the AWS Support
     *                         API. </p>
     *                 </li>
     *                <li>
     *                     <p>If you call the AWS Support API from an account that does not have a
     *                         Business or Enterprise Support plan, the
     *                             <code>SubscriptionRequiredException</code> error message appears. For
     *                         information about changing your support plan, see <a href="http://aws.amazon.com/premiumsupport/">AWS Support</a>.</p>
     *                 </li>
     *             </ul>
     *         </note>
     */
    describeServices(args: DescribeServicesCommandInput, options?: __HttpHandlerOptions): Promise<DescribeServicesCommandOutput>;
    describeServices(args: DescribeServicesCommandInput, cb: (err: any, data?: DescribeServicesCommandOutput) => void): void;
    describeServices(args: DescribeServicesCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: DescribeServicesCommandOutput) => void): void;
    /**
     * <p>Returns the list of severity levels that you can assign to a support case. The severity
     *             level for a case is also a field in the <a>CaseDetails</a> data type that you
     *             include for a <a>CreateCase</a> request.</p>
     *         <note>
     *             <ul>
     *                <li>
     *                     <p>You must have a Business or Enterprise Support plan to use the AWS Support
     *                         API. </p>
     *                 </li>
     *                <li>
     *                     <p>If you call the AWS Support API from an account that does not have a
     *                         Business or Enterprise Support plan, the
     *                             <code>SubscriptionRequiredException</code> error message appears. For
     *                         information about changing your support plan, see <a href="http://aws.amazon.com/premiumsupport/">AWS Support</a>.</p>
     *                 </li>
     *             </ul>
     *         </note>
     */
    describeSeverityLevels(args: DescribeSeverityLevelsCommandInput, options?: __HttpHandlerOptions): Promise<DescribeSeverityLevelsCommandOutput>;
    describeSeverityLevels(args: DescribeSeverityLevelsCommandInput, cb: (err: any, data?: DescribeSeverityLevelsCommandOutput) => void): void;
    describeSeverityLevels(args: DescribeSeverityLevelsCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: DescribeSeverityLevelsCommandOutput) => void): void;
    /**
     * <p>Returns the refresh status of the AWS Trusted Advisor checks that have the specified check
     *             IDs. You can get the check IDs by calling the <a>DescribeTrustedAdvisorChecks</a> operation.</p>
     *         <p>Some checks are refreshed automatically, and you can't return their refresh statuses
     *             by using the <code>DescribeTrustedAdvisorCheckRefreshStatuses</code> operation. If you
     *             call this operation for these checks, you might see an
     *                 <code>InvalidParameterValue</code> error.</p>
     *         <note>
     *             <ul>
     *                <li>
     *                     <p>You must have a Business or Enterprise Support plan to use the AWS Support
     *                         API. </p>
     *                 </li>
     *                <li>
     *                     <p>If you call the AWS Support API from an account that does not have a
     *                         Business or Enterprise Support plan, the
     *                             <code>SubscriptionRequiredException</code> error message appears. For
     *                         information about changing your support plan, see <a href="http://aws.amazon.com/premiumsupport/">AWS Support</a>.</p>
     *                 </li>
     *             </ul>
     *         </note>
     */
    describeTrustedAdvisorCheckRefreshStatuses(args: DescribeTrustedAdvisorCheckRefreshStatusesCommandInput, options?: __HttpHandlerOptions): Promise<DescribeTrustedAdvisorCheckRefreshStatusesCommandOutput>;
    describeTrustedAdvisorCheckRefreshStatuses(args: DescribeTrustedAdvisorCheckRefreshStatusesCommandInput, cb: (err: any, data?: DescribeTrustedAdvisorCheckRefreshStatusesCommandOutput) => void): void;
    describeTrustedAdvisorCheckRefreshStatuses(args: DescribeTrustedAdvisorCheckRefreshStatusesCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: DescribeTrustedAdvisorCheckRefreshStatusesCommandOutput) => void): void;
    /**
     * <p>Returns the results of the AWS Trusted Advisor check that has the specified check ID. You
     *             can get the check IDs by calling the <a>DescribeTrustedAdvisorChecks</a>
     *             operation.</p>
     *         <p>The response contains a <a>TrustedAdvisorCheckResult</a> object, which
     *             contains these three objects:</p>
     *         <ul>
     *             <li>
     *                 <p>
     *                     <a>TrustedAdvisorCategorySpecificSummary</a>
     *                 </p>
     *             </li>
     *             <li>
     *                 <p>
     *                     <a>TrustedAdvisorResourceDetail</a>
     *                 </p>
     *             </li>
     *             <li>
     *                 <p>
     *                     <a>TrustedAdvisorResourcesSummary</a>
     *                 </p>
     *             </li>
     *          </ul>
     *         <p>In addition, the response contains these fields:</p>
     *         <ul>
     *             <li>
     *                 <p>
     *                     <b>status</b> - The alert status of the check
     *                     can be <code>ok</code> (green), <code>warning</code> (yellow),
     *                         <code>error</code> (red), or <code>not_available</code>.</p>
     *             </li>
     *             <li>
     *                 <p>
     *                     <b>timestamp</b> - The time of the last refresh
     *                     of the check.</p>
     *             </li>
     *             <li>
     *                 <p>
     *                     <b>checkId</b> - The unique identifier for the
     *                     check.</p>
     *             </li>
     *          </ul>
     *
     *         <note>
     *             <ul>
     *                <li>
     *                     <p>You must have a Business or Enterprise Support plan to use the AWS Support
     *                         API. </p>
     *                 </li>
     *                <li>
     *                     <p>If you call the AWS Support API from an account that does not have a
     *                         Business or Enterprise Support plan, the
     *                             <code>SubscriptionRequiredException</code> error message appears. For
     *                         information about changing your support plan, see <a href="http://aws.amazon.com/premiumsupport/">AWS Support</a>.</p>
     *                 </li>
     *             </ul>
     *         </note>
     */
    describeTrustedAdvisorCheckResult(args: DescribeTrustedAdvisorCheckResultCommandInput, options?: __HttpHandlerOptions): Promise<DescribeTrustedAdvisorCheckResultCommandOutput>;
    describeTrustedAdvisorCheckResult(args: DescribeTrustedAdvisorCheckResultCommandInput, cb: (err: any, data?: DescribeTrustedAdvisorCheckResultCommandOutput) => void): void;
    describeTrustedAdvisorCheckResult(args: DescribeTrustedAdvisorCheckResultCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: DescribeTrustedAdvisorCheckResultCommandOutput) => void): void;
    /**
     * <p>Returns information about all available AWS Trusted Advisor checks, including the name, ID,
     *             category, description, and metadata. You must specify a language code. The AWS Support API
     *             currently supports English ("en") and Japanese ("ja"). The response contains a <a>TrustedAdvisorCheckDescription</a> object for each check. You must set the
     *             AWS Region to us-east-1.</p>
     *
     *
     *         <note>
     *             <ul>
     *                <li>
     *                     <p>You must have a Business or Enterprise Support plan to use the AWS Support
     *                         API. </p>
     *                 </li>
     *                <li>
     *                     <p>If you call the AWS Support API from an account that does not have a
     *                         Business or Enterprise Support plan, the
     *                         <code>SubscriptionRequiredException</code> error message appears. For
     *                         information about changing your support plan, see <a href="http://aws.amazon.com/premiumsupport/">AWS Support</a>.</p>
     *                 </li>
     *                <li>
     *                     <p>The names and descriptions for Trusted Advisor checks are subject to change. We recommend
     *                         that you specify the check ID in your code to uniquely identify a check.</p>
     *                 </li>
     *             </ul>
     *         </note>
     */
    describeTrustedAdvisorChecks(args: DescribeTrustedAdvisorChecksCommandInput, options?: __HttpHandlerOptions): Promise<DescribeTrustedAdvisorChecksCommandOutput>;
    describeTrustedAdvisorChecks(args: DescribeTrustedAdvisorChecksCommandInput, cb: (err: any, data?: DescribeTrustedAdvisorChecksCommandOutput) => void): void;
    describeTrustedAdvisorChecks(args: DescribeTrustedAdvisorChecksCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: DescribeTrustedAdvisorChecksCommandOutput) => void): void;
    /**
     * <p>Returns the results for the AWS Trusted Advisor check summaries for the check IDs that you
     *             specified. You can get the check IDs by calling the <a>DescribeTrustedAdvisorChecks</a> operation.</p>
     *         <p>The response contains an array of <a>TrustedAdvisorCheckSummary</a>
     *             objects.</p>
     *         <note>
     *             <ul>
     *                <li>
     *                     <p>You must have a Business or Enterprise Support plan to use the AWS Support
     *                         API. </p>
     *                 </li>
     *                <li>
     *                     <p>If you call the AWS Support API from an account that does not have a
     *                         Business or Enterprise Support plan, the
     *                             <code>SubscriptionRequiredException</code> error message appears. For
     *                         information about changing your support plan, see <a href="http://aws.amazon.com/premiumsupport/">AWS Support</a>.</p>
     *                 </li>
     *             </ul>
     *         </note>
     */
    describeTrustedAdvisorCheckSummaries(args: DescribeTrustedAdvisorCheckSummariesCommandInput, options?: __HttpHandlerOptions): Promise<DescribeTrustedAdvisorCheckSummariesCommandOutput>;
    describeTrustedAdvisorCheckSummaries(args: DescribeTrustedAdvisorCheckSummariesCommandInput, cb: (err: any, data?: DescribeTrustedAdvisorCheckSummariesCommandOutput) => void): void;
    describeTrustedAdvisorCheckSummaries(args: DescribeTrustedAdvisorCheckSummariesCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: DescribeTrustedAdvisorCheckSummariesCommandOutput) => void): void;
    /**
     * <p>Refreshes the AWS Trusted Advisor check that you specify using the check ID. You can get the
     *             check IDs by calling the <a>DescribeTrustedAdvisorChecks</a>
     *             operation.</p>
     *         <note>
     *             <p>Some checks are refreshed automatically. If you call the
     *                     <code>RefreshTrustedAdvisorCheck</code> operation to refresh them, you might see
     *                 the <code>InvalidParameterValue</code> error.</p>
     *         </note>
     *         <p>The response contains a <a>TrustedAdvisorCheckRefreshStatus</a>
     *             object.</p>
     *         <note>
     *             <ul>
     *                <li>
     *                     <p>You must have a Business or Enterprise Support plan to use the AWS Support
     *                         API. </p>
     *                 </li>
     *                <li>
     *                     <p>If you call the AWS Support API from an account that does not have a
     *                         Business or Enterprise Support plan, the
     *                             <code>SubscriptionRequiredException</code> error message appears. For
     *                         information about changing your support plan, see <a href="http://aws.amazon.com/premiumsupport/">AWS Support</a>.</p>
     *                 </li>
     *             </ul>
     *         </note>
     */
    refreshTrustedAdvisorCheck(args: RefreshTrustedAdvisorCheckCommandInput, options?: __HttpHandlerOptions): Promise<RefreshTrustedAdvisorCheckCommandOutput>;
    refreshTrustedAdvisorCheck(args: RefreshTrustedAdvisorCheckCommandInput, cb: (err: any, data?: RefreshTrustedAdvisorCheckCommandOutput) => void): void;
    refreshTrustedAdvisorCheck(args: RefreshTrustedAdvisorCheckCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: RefreshTrustedAdvisorCheckCommandOutput) => void): void;
    /**
     * <p>Resolves a support case. This operation takes a <code>caseId</code> and returns the
     *             initial and final state of the case.</p>
     *         <note>
     *             <ul>
     *                <li>
     *                     <p>You must have a Business or Enterprise Support plan to use the AWS Support
     *                         API. </p>
     *                 </li>
     *                <li>
     *                     <p>If you call the AWS Support API from an account that does not have a
     *                         Business or Enterprise Support plan, the
     *                             <code>SubscriptionRequiredException</code> error message appears. For
     *                         information about changing your support plan, see <a href="http://aws.amazon.com/premiumsupport/">AWS Support</a>.</p>
     *                 </li>
     *             </ul>
     *         </note>
     */
    resolveCase(args: ResolveCaseCommandInput, options?: __HttpHandlerOptions): Promise<ResolveCaseCommandOutput>;
    resolveCase(args: ResolveCaseCommandInput, cb: (err: any, data?: ResolveCaseCommandOutput) => void): void;
    resolveCase(args: ResolveCaseCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: ResolveCaseCommandOutput) => void): void;
}
