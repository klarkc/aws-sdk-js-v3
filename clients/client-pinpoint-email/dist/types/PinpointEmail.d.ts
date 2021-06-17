import { PinpointEmailClient } from "./PinpointEmailClient";
import { CreateConfigurationSetCommandInput, CreateConfigurationSetCommandOutput } from "./commands/CreateConfigurationSetCommand";
import { CreateConfigurationSetEventDestinationCommandInput, CreateConfigurationSetEventDestinationCommandOutput } from "./commands/CreateConfigurationSetEventDestinationCommand";
import { CreateDedicatedIpPoolCommandInput, CreateDedicatedIpPoolCommandOutput } from "./commands/CreateDedicatedIpPoolCommand";
import { CreateDeliverabilityTestReportCommandInput, CreateDeliverabilityTestReportCommandOutput } from "./commands/CreateDeliverabilityTestReportCommand";
import { CreateEmailIdentityCommandInput, CreateEmailIdentityCommandOutput } from "./commands/CreateEmailIdentityCommand";
import { DeleteConfigurationSetCommandInput, DeleteConfigurationSetCommandOutput } from "./commands/DeleteConfigurationSetCommand";
import { DeleteConfigurationSetEventDestinationCommandInput, DeleteConfigurationSetEventDestinationCommandOutput } from "./commands/DeleteConfigurationSetEventDestinationCommand";
import { DeleteDedicatedIpPoolCommandInput, DeleteDedicatedIpPoolCommandOutput } from "./commands/DeleteDedicatedIpPoolCommand";
import { DeleteEmailIdentityCommandInput, DeleteEmailIdentityCommandOutput } from "./commands/DeleteEmailIdentityCommand";
import { GetAccountCommandInput, GetAccountCommandOutput } from "./commands/GetAccountCommand";
import { GetBlacklistReportsCommandInput, GetBlacklistReportsCommandOutput } from "./commands/GetBlacklistReportsCommand";
import { GetConfigurationSetCommandInput, GetConfigurationSetCommandOutput } from "./commands/GetConfigurationSetCommand";
import { GetConfigurationSetEventDestinationsCommandInput, GetConfigurationSetEventDestinationsCommandOutput } from "./commands/GetConfigurationSetEventDestinationsCommand";
import { GetDedicatedIpCommandInput, GetDedicatedIpCommandOutput } from "./commands/GetDedicatedIpCommand";
import { GetDedicatedIpsCommandInput, GetDedicatedIpsCommandOutput } from "./commands/GetDedicatedIpsCommand";
import { GetDeliverabilityDashboardOptionsCommandInput, GetDeliverabilityDashboardOptionsCommandOutput } from "./commands/GetDeliverabilityDashboardOptionsCommand";
import { GetDeliverabilityTestReportCommandInput, GetDeliverabilityTestReportCommandOutput } from "./commands/GetDeliverabilityTestReportCommand";
import { GetDomainDeliverabilityCampaignCommandInput, GetDomainDeliverabilityCampaignCommandOutput } from "./commands/GetDomainDeliverabilityCampaignCommand";
import { GetDomainStatisticsReportCommandInput, GetDomainStatisticsReportCommandOutput } from "./commands/GetDomainStatisticsReportCommand";
import { GetEmailIdentityCommandInput, GetEmailIdentityCommandOutput } from "./commands/GetEmailIdentityCommand";
import { ListConfigurationSetsCommandInput, ListConfigurationSetsCommandOutput } from "./commands/ListConfigurationSetsCommand";
import { ListDedicatedIpPoolsCommandInput, ListDedicatedIpPoolsCommandOutput } from "./commands/ListDedicatedIpPoolsCommand";
import { ListDeliverabilityTestReportsCommandInput, ListDeliverabilityTestReportsCommandOutput } from "./commands/ListDeliverabilityTestReportsCommand";
import { ListDomainDeliverabilityCampaignsCommandInput, ListDomainDeliverabilityCampaignsCommandOutput } from "./commands/ListDomainDeliverabilityCampaignsCommand";
import { ListEmailIdentitiesCommandInput, ListEmailIdentitiesCommandOutput } from "./commands/ListEmailIdentitiesCommand";
import { ListTagsForResourceCommandInput, ListTagsForResourceCommandOutput } from "./commands/ListTagsForResourceCommand";
import { PutAccountDedicatedIpWarmupAttributesCommandInput, PutAccountDedicatedIpWarmupAttributesCommandOutput } from "./commands/PutAccountDedicatedIpWarmupAttributesCommand";
import { PutAccountSendingAttributesCommandInput, PutAccountSendingAttributesCommandOutput } from "./commands/PutAccountSendingAttributesCommand";
import { PutConfigurationSetDeliveryOptionsCommandInput, PutConfigurationSetDeliveryOptionsCommandOutput } from "./commands/PutConfigurationSetDeliveryOptionsCommand";
import { PutConfigurationSetReputationOptionsCommandInput, PutConfigurationSetReputationOptionsCommandOutput } from "./commands/PutConfigurationSetReputationOptionsCommand";
import { PutConfigurationSetSendingOptionsCommandInput, PutConfigurationSetSendingOptionsCommandOutput } from "./commands/PutConfigurationSetSendingOptionsCommand";
import { PutConfigurationSetTrackingOptionsCommandInput, PutConfigurationSetTrackingOptionsCommandOutput } from "./commands/PutConfigurationSetTrackingOptionsCommand";
import { PutDedicatedIpInPoolCommandInput, PutDedicatedIpInPoolCommandOutput } from "./commands/PutDedicatedIpInPoolCommand";
import { PutDedicatedIpWarmupAttributesCommandInput, PutDedicatedIpWarmupAttributesCommandOutput } from "./commands/PutDedicatedIpWarmupAttributesCommand";
import { PutDeliverabilityDashboardOptionCommandInput, PutDeliverabilityDashboardOptionCommandOutput } from "./commands/PutDeliverabilityDashboardOptionCommand";
import { PutEmailIdentityDkimAttributesCommandInput, PutEmailIdentityDkimAttributesCommandOutput } from "./commands/PutEmailIdentityDkimAttributesCommand";
import { PutEmailIdentityFeedbackAttributesCommandInput, PutEmailIdentityFeedbackAttributesCommandOutput } from "./commands/PutEmailIdentityFeedbackAttributesCommand";
import { PutEmailIdentityMailFromAttributesCommandInput, PutEmailIdentityMailFromAttributesCommandOutput } from "./commands/PutEmailIdentityMailFromAttributesCommand";
import { SendEmailCommandInput, SendEmailCommandOutput } from "./commands/SendEmailCommand";
import { TagResourceCommandInput, TagResourceCommandOutput } from "./commands/TagResourceCommand";
import { UntagResourceCommandInput, UntagResourceCommandOutput } from "./commands/UntagResourceCommand";
import { UpdateConfigurationSetEventDestinationCommandInput, UpdateConfigurationSetEventDestinationCommandOutput } from "./commands/UpdateConfigurationSetEventDestinationCommand";
import { HttpHandlerOptions as __HttpHandlerOptions } from "@aws-sdk/types";
/**
 * <fullname>Amazon Pinpoint Email Service</fullname>
 *         <p>Welcome to the <i>Amazon Pinpoint Email API Reference</i>. This guide provides
 *             information about the Amazon Pinpoint Email API (version 1.0), including supported
 *             operations, data types, parameters, and schemas.</p>
 *         <p>
 *             <a href="https://aws.amazon.com/pinpoint">Amazon Pinpoint</a> is an AWS service that you
 *             can use to engage with your customers across multiple messaging channels. You can use
 *             Amazon Pinpoint to send email, SMS text messages, voice messages, and push notifications. The
 *             Amazon Pinpoint Email API provides programmatic access to options that are unique to the
 *             email channel and supplement the options provided by the Amazon Pinpoint API.</p>
 *         <p>If you're new to Amazon Pinpoint, you might find it helpful to also review the <a href="https://docs.aws.amazon.com/pinpoint/latest/developerguide/welcome.html">Amazon
 *                 Pinpoint Developer Guide</a>. The <i>Amazon Pinpoint Developer
 *                 Guide</i> provides tutorials, code samples, and procedures that demonstrate
 *             how to use Amazon Pinpoint features programmatically and how to integrate Amazon Pinpoint functionality into
 *             mobile apps and other types of applications. The guide also provides information about
 *             key topics such as Amazon Pinpoint integration with other AWS services and the limits that apply
 *             to using the service.</p>
 *         <p>The Amazon Pinpoint Email API is available in several AWS Regions and it provides an endpoint
 *             for each of these Regions. For a list of all the Regions and endpoints where the API is
 *             currently available, see <a href="https://docs.aws.amazon.com/general/latest/gr/rande.html#pinpoint_region">AWS Service Endpoints</a> in
 *             the <i>Amazon Web Services General Reference</i>. To learn more about AWS Regions, see
 *                 <a href="https://docs.aws.amazon.com/general/latest/gr/rande-manage.html">Managing AWS
 *                 Regions</a> in the <i>Amazon Web Services General Reference</i>.</p>
 *         <p>In each Region, AWS maintains multiple Availability Zones. These Availability Zones
 *             are physically isolated from each other, but are united by private, low-latency,
 *             high-throughput, and highly redundant network connections. These Availability Zones
 *             enable us to provide very high levels of availability and redundancy, while also
 *             minimizing latency. To learn more about the number of Availability Zones that are
 *             available in each Region, see <a href="http://aws.amazon.com/about-aws/global-infrastructure/">AWS Global Infrastructure</a>.</p>
 */
export declare class PinpointEmail extends PinpointEmailClient {
    /**
     * <p>Create a configuration set. <i>Configuration sets</i> are groups of
     *             rules that you can apply to the emails you send using Amazon Pinpoint. You apply a configuration
     *             set to an email by including a reference to the configuration set in the headers of the
     *             email. When you apply a configuration set to an email, all of the rules in that
     *             configuration set are applied to the email. </p>
     */
    createConfigurationSet(args: CreateConfigurationSetCommandInput, options?: __HttpHandlerOptions): Promise<CreateConfigurationSetCommandOutput>;
    createConfigurationSet(args: CreateConfigurationSetCommandInput, cb: (err: any, data?: CreateConfigurationSetCommandOutput) => void): void;
    createConfigurationSet(args: CreateConfigurationSetCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: CreateConfigurationSetCommandOutput) => void): void;
    /**
     * <p>Create an event destination. In Amazon Pinpoint, <i>events</i> include message
     *             sends, deliveries, opens, clicks, bounces, and complaints. <i>Event
     *                 destinations</i> are places that you can send information about these events
     *             to. For example, you can send event data to Amazon SNS to receive notifications when you
     *             receive bounces or complaints, or you can use Amazon Kinesis Data Firehose to stream data to Amazon S3 for long-term
     *             storage.</p>
     *         <p>A single configuration set can include more than one event destination.</p>
     */
    createConfigurationSetEventDestination(args: CreateConfigurationSetEventDestinationCommandInput, options?: __HttpHandlerOptions): Promise<CreateConfigurationSetEventDestinationCommandOutput>;
    createConfigurationSetEventDestination(args: CreateConfigurationSetEventDestinationCommandInput, cb: (err: any, data?: CreateConfigurationSetEventDestinationCommandOutput) => void): void;
    createConfigurationSetEventDestination(args: CreateConfigurationSetEventDestinationCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: CreateConfigurationSetEventDestinationCommandOutput) => void): void;
    /**
     * <p>Create a new pool of dedicated IP addresses. A pool can include one or more dedicated
     *             IP addresses that are associated with your Amazon Pinpoint account. You can associate a pool with
     *             a configuration set. When you send an email that uses that configuration set, Amazon Pinpoint
     *             sends it using only the IP addresses in the associated pool.</p>
     */
    createDedicatedIpPool(args: CreateDedicatedIpPoolCommandInput, options?: __HttpHandlerOptions): Promise<CreateDedicatedIpPoolCommandOutput>;
    createDedicatedIpPool(args: CreateDedicatedIpPoolCommandInput, cb: (err: any, data?: CreateDedicatedIpPoolCommandOutput) => void): void;
    createDedicatedIpPool(args: CreateDedicatedIpPoolCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: CreateDedicatedIpPoolCommandOutput) => void): void;
    /**
     * <p>Create a new predictive inbox placement test. Predictive inbox placement tests can help you predict how your messages will be handled
     *             by various email providers around the world. When you perform a predictive inbox placement test, you provide a
     *             sample message that contains the content that you plan to send to your customers. Amazon Pinpoint
     *             then sends that message to special email addresses spread across several major email
     *             providers. After about 24 hours, the test is complete, and you can use the
     *                 <code>GetDeliverabilityTestReport</code> operation to view the results of the
     *             test.</p>
     */
    createDeliverabilityTestReport(args: CreateDeliverabilityTestReportCommandInput, options?: __HttpHandlerOptions): Promise<CreateDeliverabilityTestReportCommandOutput>;
    createDeliverabilityTestReport(args: CreateDeliverabilityTestReportCommandInput, cb: (err: any, data?: CreateDeliverabilityTestReportCommandOutput) => void): void;
    createDeliverabilityTestReport(args: CreateDeliverabilityTestReportCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: CreateDeliverabilityTestReportCommandOutput) => void): void;
    /**
     * <p>Verifies an email identity for use with Amazon Pinpoint. In Amazon Pinpoint, an identity is an email
     *             address or domain that you use when you send email. Before you can use an identity to
     *             send email with Amazon Pinpoint, you first have to verify it. By verifying an address, you
     *             demonstrate that you're the owner of the address, and that you've given Amazon Pinpoint permission
     *             to send email from the address.</p>
     *         <p>When you verify an email address, Amazon Pinpoint sends an email to the address. Your email
     *             address is verified as soon as you follow the link in the verification email.
     *
     *         </p>
     *         <p>When you verify a domain, this operation provides a set of DKIM tokens, which you can
     *             convert into CNAME tokens. You add these CNAME tokens to the DNS configuration for your
     *             domain. Your domain is verified when Amazon Pinpoint detects these records in the DNS
     *             configuration for your domain. It usually takes around 72 hours to complete the domain
     *             verification process.</p>
     */
    createEmailIdentity(args: CreateEmailIdentityCommandInput, options?: __HttpHandlerOptions): Promise<CreateEmailIdentityCommandOutput>;
    createEmailIdentity(args: CreateEmailIdentityCommandInput, cb: (err: any, data?: CreateEmailIdentityCommandOutput) => void): void;
    createEmailIdentity(args: CreateEmailIdentityCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: CreateEmailIdentityCommandOutput) => void): void;
    /**
     * <p>Delete an existing configuration set.</p>
     *         <p>In Amazon Pinpoint, <i>configuration sets</i> are groups of rules that you can
     *             apply to the emails you send. You apply a configuration set to an email by including a
     *             reference to the configuration set in the headers of the email. When you apply a
     *             configuration set to an email, all of the rules in that configuration set are applied to
     *             the email.</p>
     */
    deleteConfigurationSet(args: DeleteConfigurationSetCommandInput, options?: __HttpHandlerOptions): Promise<DeleteConfigurationSetCommandOutput>;
    deleteConfigurationSet(args: DeleteConfigurationSetCommandInput, cb: (err: any, data?: DeleteConfigurationSetCommandOutput) => void): void;
    deleteConfigurationSet(args: DeleteConfigurationSetCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: DeleteConfigurationSetCommandOutput) => void): void;
    /**
     * <p>Delete an event destination.</p>
     *         <p>In Amazon Pinpoint, <i>events</i> include message sends, deliveries, opens,
     *             clicks, bounces, and complaints. <i>Event destinations</i> are places that
     *             you can send information about these events to. For example, you can send event data to
     *             Amazon SNS to receive notifications when you receive bounces or complaints, or you can use
     *             Amazon Kinesis Data Firehose to stream data to Amazon S3 for long-term storage.</p>
     */
    deleteConfigurationSetEventDestination(args: DeleteConfigurationSetEventDestinationCommandInput, options?: __HttpHandlerOptions): Promise<DeleteConfigurationSetEventDestinationCommandOutput>;
    deleteConfigurationSetEventDestination(args: DeleteConfigurationSetEventDestinationCommandInput, cb: (err: any, data?: DeleteConfigurationSetEventDestinationCommandOutput) => void): void;
    deleteConfigurationSetEventDestination(args: DeleteConfigurationSetEventDestinationCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: DeleteConfigurationSetEventDestinationCommandOutput) => void): void;
    /**
     * <p>Delete a dedicated IP pool.</p>
     */
    deleteDedicatedIpPool(args: DeleteDedicatedIpPoolCommandInput, options?: __HttpHandlerOptions): Promise<DeleteDedicatedIpPoolCommandOutput>;
    deleteDedicatedIpPool(args: DeleteDedicatedIpPoolCommandInput, cb: (err: any, data?: DeleteDedicatedIpPoolCommandOutput) => void): void;
    deleteDedicatedIpPool(args: DeleteDedicatedIpPoolCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: DeleteDedicatedIpPoolCommandOutput) => void): void;
    /**
     * <p>Deletes an email identity that you previously verified for use with Amazon Pinpoint. An identity
     *             can be either an email address or a domain name.</p>
     */
    deleteEmailIdentity(args: DeleteEmailIdentityCommandInput, options?: __HttpHandlerOptions): Promise<DeleteEmailIdentityCommandOutput>;
    deleteEmailIdentity(args: DeleteEmailIdentityCommandInput, cb: (err: any, data?: DeleteEmailIdentityCommandOutput) => void): void;
    deleteEmailIdentity(args: DeleteEmailIdentityCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: DeleteEmailIdentityCommandOutput) => void): void;
    /**
     * <p>Obtain information about the email-sending status and capabilities of your Amazon Pinpoint
     *             account in the current AWS Region.</p>
     */
    getAccount(args: GetAccountCommandInput, options?: __HttpHandlerOptions): Promise<GetAccountCommandOutput>;
    getAccount(args: GetAccountCommandInput, cb: (err: any, data?: GetAccountCommandOutput) => void): void;
    getAccount(args: GetAccountCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: GetAccountCommandOutput) => void): void;
    /**
     * <p>Retrieve a list of the blacklists that your dedicated IP addresses appear on.</p>
     */
    getBlacklistReports(args: GetBlacklistReportsCommandInput, options?: __HttpHandlerOptions): Promise<GetBlacklistReportsCommandOutput>;
    getBlacklistReports(args: GetBlacklistReportsCommandInput, cb: (err: any, data?: GetBlacklistReportsCommandOutput) => void): void;
    getBlacklistReports(args: GetBlacklistReportsCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: GetBlacklistReportsCommandOutput) => void): void;
    /**
     * <p>Get information about an existing configuration set, including the dedicated IP pool
     *             that it's associated with, whether or not it's enabled for sending email, and
     *             more.</p>
     *         <p>In Amazon Pinpoint, <i>configuration sets</i> are groups of rules that you can
     *             apply to the emails you send. You apply a configuration set to an email by including a
     *             reference to the configuration set in the headers of the email. When you apply a
     *             configuration set to an email, all of the rules in that configuration set are applied to
     *             the email.</p>
     */
    getConfigurationSet(args: GetConfigurationSetCommandInput, options?: __HttpHandlerOptions): Promise<GetConfigurationSetCommandOutput>;
    getConfigurationSet(args: GetConfigurationSetCommandInput, cb: (err: any, data?: GetConfigurationSetCommandOutput) => void): void;
    getConfigurationSet(args: GetConfigurationSetCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: GetConfigurationSetCommandOutput) => void): void;
    /**
     * <p>Retrieve a list of event destinations that are associated with a configuration
     *             set.</p>
     *         <p>In Amazon Pinpoint, <i>events</i> include message sends, deliveries, opens,
     *             clicks, bounces, and complaints. <i>Event destinations</i> are places that
     *             you can send information about these events to. For example, you can send event data to
     *             Amazon SNS to receive notifications when you receive bounces or complaints, or you can use
     *             Amazon Kinesis Data Firehose to stream data to Amazon S3 for long-term storage.</p>
     */
    getConfigurationSetEventDestinations(args: GetConfigurationSetEventDestinationsCommandInput, options?: __HttpHandlerOptions): Promise<GetConfigurationSetEventDestinationsCommandOutput>;
    getConfigurationSetEventDestinations(args: GetConfigurationSetEventDestinationsCommandInput, cb: (err: any, data?: GetConfigurationSetEventDestinationsCommandOutput) => void): void;
    getConfigurationSetEventDestinations(args: GetConfigurationSetEventDestinationsCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: GetConfigurationSetEventDestinationsCommandOutput) => void): void;
    /**
     * <p>Get information about a dedicated IP address, including the name of the dedicated IP
     *             pool that it's associated with, as well information about the automatic warm-up process
     *             for the address.</p>
     */
    getDedicatedIp(args: GetDedicatedIpCommandInput, options?: __HttpHandlerOptions): Promise<GetDedicatedIpCommandOutput>;
    getDedicatedIp(args: GetDedicatedIpCommandInput, cb: (err: any, data?: GetDedicatedIpCommandOutput) => void): void;
    getDedicatedIp(args: GetDedicatedIpCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: GetDedicatedIpCommandOutput) => void): void;
    /**
     * <p>List the dedicated IP addresses that are associated with your Amazon Pinpoint
     *             account.</p>
     */
    getDedicatedIps(args: GetDedicatedIpsCommandInput, options?: __HttpHandlerOptions): Promise<GetDedicatedIpsCommandOutput>;
    getDedicatedIps(args: GetDedicatedIpsCommandInput, cb: (err: any, data?: GetDedicatedIpsCommandOutput) => void): void;
    getDedicatedIps(args: GetDedicatedIpsCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: GetDedicatedIpsCommandOutput) => void): void;
    /**
     * <p>Retrieve information about the status of the Deliverability dashboard for your Amazon Pinpoint account.
     *             When the Deliverability dashboard is enabled, you gain access to reputation, deliverability, and
     *             other metrics for the domains that you use to send email using Amazon Pinpoint. You also gain the
     *             ability to perform predictive inbox placement tests.</p>
     *         <p>When you use the Deliverability dashboard, you pay a monthly subscription charge, in addition
     *             to any other fees that you accrue by using Amazon Pinpoint. For more information about the
     *             features and cost of a Deliverability dashboard subscription, see <a href="http://aws.amazon.com/pinpoint/pricing/">Amazon Pinpoint Pricing</a>.</p>
     */
    getDeliverabilityDashboardOptions(args: GetDeliverabilityDashboardOptionsCommandInput, options?: __HttpHandlerOptions): Promise<GetDeliverabilityDashboardOptionsCommandOutput>;
    getDeliverabilityDashboardOptions(args: GetDeliverabilityDashboardOptionsCommandInput, cb: (err: any, data?: GetDeliverabilityDashboardOptionsCommandOutput) => void): void;
    getDeliverabilityDashboardOptions(args: GetDeliverabilityDashboardOptionsCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: GetDeliverabilityDashboardOptionsCommandOutput) => void): void;
    /**
     * <p>Retrieve the results of a predictive inbox placement test.</p>
     */
    getDeliverabilityTestReport(args: GetDeliverabilityTestReportCommandInput, options?: __HttpHandlerOptions): Promise<GetDeliverabilityTestReportCommandOutput>;
    getDeliverabilityTestReport(args: GetDeliverabilityTestReportCommandInput, cb: (err: any, data?: GetDeliverabilityTestReportCommandOutput) => void): void;
    getDeliverabilityTestReport(args: GetDeliverabilityTestReportCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: GetDeliverabilityTestReportCommandOutput) => void): void;
    /**
     * <p>Retrieve all the deliverability data for a specific campaign. This data is available
     *             for a campaign only if the campaign sent email by using a domain that the
     *             Deliverability dashboard is enabled for (<code>PutDeliverabilityDashboardOption</code>
     *             operation).</p>
     */
    getDomainDeliverabilityCampaign(args: GetDomainDeliverabilityCampaignCommandInput, options?: __HttpHandlerOptions): Promise<GetDomainDeliverabilityCampaignCommandOutput>;
    getDomainDeliverabilityCampaign(args: GetDomainDeliverabilityCampaignCommandInput, cb: (err: any, data?: GetDomainDeliverabilityCampaignCommandOutput) => void): void;
    getDomainDeliverabilityCampaign(args: GetDomainDeliverabilityCampaignCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: GetDomainDeliverabilityCampaignCommandOutput) => void): void;
    /**
     * <p>Retrieve inbox placement and engagement rates for the domains that you use to send
     *             email.</p>
     */
    getDomainStatisticsReport(args: GetDomainStatisticsReportCommandInput, options?: __HttpHandlerOptions): Promise<GetDomainStatisticsReportCommandOutput>;
    getDomainStatisticsReport(args: GetDomainStatisticsReportCommandInput, cb: (err: any, data?: GetDomainStatisticsReportCommandOutput) => void): void;
    getDomainStatisticsReport(args: GetDomainStatisticsReportCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: GetDomainStatisticsReportCommandOutput) => void): void;
    /**
     * <p>Provides information about a specific identity associated with your Amazon Pinpoint account,
     *             including the identity's verification status, its DKIM authentication status, and its
     *             custom Mail-From settings.</p>
     */
    getEmailIdentity(args: GetEmailIdentityCommandInput, options?: __HttpHandlerOptions): Promise<GetEmailIdentityCommandOutput>;
    getEmailIdentity(args: GetEmailIdentityCommandInput, cb: (err: any, data?: GetEmailIdentityCommandOutput) => void): void;
    getEmailIdentity(args: GetEmailIdentityCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: GetEmailIdentityCommandOutput) => void): void;
    /**
     * <p>List all of the configuration sets associated with your Amazon Pinpoint account in the current
     *             region.</p>
     *         <p>In Amazon Pinpoint, <i>configuration sets</i> are groups of rules that you can
     *             apply to the emails you send. You apply a configuration set to an email by including a
     *             reference to the configuration set in the headers of the email. When you apply a
     *             configuration set to an email, all of the rules in that configuration set are applied to
     *             the email.</p>
     */
    listConfigurationSets(args: ListConfigurationSetsCommandInput, options?: __HttpHandlerOptions): Promise<ListConfigurationSetsCommandOutput>;
    listConfigurationSets(args: ListConfigurationSetsCommandInput, cb: (err: any, data?: ListConfigurationSetsCommandOutput) => void): void;
    listConfigurationSets(args: ListConfigurationSetsCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: ListConfigurationSetsCommandOutput) => void): void;
    /**
     * <p>List all of the dedicated IP pools that exist in your Amazon Pinpoint account in the current
     *             AWS Region.</p>
     */
    listDedicatedIpPools(args: ListDedicatedIpPoolsCommandInput, options?: __HttpHandlerOptions): Promise<ListDedicatedIpPoolsCommandOutput>;
    listDedicatedIpPools(args: ListDedicatedIpPoolsCommandInput, cb: (err: any, data?: ListDedicatedIpPoolsCommandOutput) => void): void;
    listDedicatedIpPools(args: ListDedicatedIpPoolsCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: ListDedicatedIpPoolsCommandOutput) => void): void;
    /**
     * <p>Show a list of the predictive inbox placement tests that you've performed, regardless of their statuses. For
     *             predictive inbox placement tests that are complete, you can use the <code>GetDeliverabilityTestReport</code>
     *             operation to view the results.</p>
     */
    listDeliverabilityTestReports(args: ListDeliverabilityTestReportsCommandInput, options?: __HttpHandlerOptions): Promise<ListDeliverabilityTestReportsCommandOutput>;
    listDeliverabilityTestReports(args: ListDeliverabilityTestReportsCommandInput, cb: (err: any, data?: ListDeliverabilityTestReportsCommandOutput) => void): void;
    listDeliverabilityTestReports(args: ListDeliverabilityTestReportsCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: ListDeliverabilityTestReportsCommandOutput) => void): void;
    /**
     * <p>Retrieve deliverability data for all the campaigns that used a specific domain to send
     *             email during a specified time range. This data is available for a domain only if you
     *             enabled the Deliverability dashboard (<code>PutDeliverabilityDashboardOption</code> operation)
     *             for the domain.</p>
     */
    listDomainDeliverabilityCampaigns(args: ListDomainDeliverabilityCampaignsCommandInput, options?: __HttpHandlerOptions): Promise<ListDomainDeliverabilityCampaignsCommandOutput>;
    listDomainDeliverabilityCampaigns(args: ListDomainDeliverabilityCampaignsCommandInput, cb: (err: any, data?: ListDomainDeliverabilityCampaignsCommandOutput) => void): void;
    listDomainDeliverabilityCampaigns(args: ListDomainDeliverabilityCampaignsCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: ListDomainDeliverabilityCampaignsCommandOutput) => void): void;
    /**
     * <p>Returns a list of all of the email identities that are associated with your Amazon Pinpoint
     *             account. An identity can be either an email address or a domain. This operation returns
     *             identities that are verified as well as those that aren't.</p>
     */
    listEmailIdentities(args: ListEmailIdentitiesCommandInput, options?: __HttpHandlerOptions): Promise<ListEmailIdentitiesCommandOutput>;
    listEmailIdentities(args: ListEmailIdentitiesCommandInput, cb: (err: any, data?: ListEmailIdentitiesCommandOutput) => void): void;
    listEmailIdentities(args: ListEmailIdentitiesCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: ListEmailIdentitiesCommandOutput) => void): void;
    /**
     * <p>Retrieve a list of the tags (keys and values) that are associated with a specified
     *             resource. A <i>tag</i> is a label that you optionally define and associate
     *             with a resource in Amazon Pinpoint. Each tag consists of a required <i>tag
     *                 key</i> and an optional associated <i>tag value</i>. A tag key
     *             is a general label that acts as a category for more specific tag values. A tag value
     *             acts as a descriptor within a tag key.</p>
     */
    listTagsForResource(args: ListTagsForResourceCommandInput, options?: __HttpHandlerOptions): Promise<ListTagsForResourceCommandOutput>;
    listTagsForResource(args: ListTagsForResourceCommandInput, cb: (err: any, data?: ListTagsForResourceCommandOutput) => void): void;
    listTagsForResource(args: ListTagsForResourceCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: ListTagsForResourceCommandOutput) => void): void;
    /**
     * <p>Enable or disable the automatic warm-up feature for dedicated IP addresses.</p>
     */
    putAccountDedicatedIpWarmupAttributes(args: PutAccountDedicatedIpWarmupAttributesCommandInput, options?: __HttpHandlerOptions): Promise<PutAccountDedicatedIpWarmupAttributesCommandOutput>;
    putAccountDedicatedIpWarmupAttributes(args: PutAccountDedicatedIpWarmupAttributesCommandInput, cb: (err: any, data?: PutAccountDedicatedIpWarmupAttributesCommandOutput) => void): void;
    putAccountDedicatedIpWarmupAttributes(args: PutAccountDedicatedIpWarmupAttributesCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: PutAccountDedicatedIpWarmupAttributesCommandOutput) => void): void;
    /**
     * <p>Enable or disable the ability of your account to send email.</p>
     */
    putAccountSendingAttributes(args: PutAccountSendingAttributesCommandInput, options?: __HttpHandlerOptions): Promise<PutAccountSendingAttributesCommandOutput>;
    putAccountSendingAttributes(args: PutAccountSendingAttributesCommandInput, cb: (err: any, data?: PutAccountSendingAttributesCommandOutput) => void): void;
    putAccountSendingAttributes(args: PutAccountSendingAttributesCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: PutAccountSendingAttributesCommandOutput) => void): void;
    /**
     * <p>Associate a configuration set with a dedicated IP pool. You can use dedicated IP pools
     *             to create groups of dedicated IP addresses for sending specific types of email.</p>
     */
    putConfigurationSetDeliveryOptions(args: PutConfigurationSetDeliveryOptionsCommandInput, options?: __HttpHandlerOptions): Promise<PutConfigurationSetDeliveryOptionsCommandOutput>;
    putConfigurationSetDeliveryOptions(args: PutConfigurationSetDeliveryOptionsCommandInput, cb: (err: any, data?: PutConfigurationSetDeliveryOptionsCommandOutput) => void): void;
    putConfigurationSetDeliveryOptions(args: PutConfigurationSetDeliveryOptionsCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: PutConfigurationSetDeliveryOptionsCommandOutput) => void): void;
    /**
     * <p>Enable or disable collection of reputation metrics for emails that you send using a
     *             particular configuration set in a specific AWS Region.</p>
     */
    putConfigurationSetReputationOptions(args: PutConfigurationSetReputationOptionsCommandInput, options?: __HttpHandlerOptions): Promise<PutConfigurationSetReputationOptionsCommandOutput>;
    putConfigurationSetReputationOptions(args: PutConfigurationSetReputationOptionsCommandInput, cb: (err: any, data?: PutConfigurationSetReputationOptionsCommandOutput) => void): void;
    putConfigurationSetReputationOptions(args: PutConfigurationSetReputationOptionsCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: PutConfigurationSetReputationOptionsCommandOutput) => void): void;
    /**
     * <p>Enable or disable email sending for messages that use a particular configuration set
     *             in a specific AWS Region.</p>
     */
    putConfigurationSetSendingOptions(args: PutConfigurationSetSendingOptionsCommandInput, options?: __HttpHandlerOptions): Promise<PutConfigurationSetSendingOptionsCommandOutput>;
    putConfigurationSetSendingOptions(args: PutConfigurationSetSendingOptionsCommandInput, cb: (err: any, data?: PutConfigurationSetSendingOptionsCommandOutput) => void): void;
    putConfigurationSetSendingOptions(args: PutConfigurationSetSendingOptionsCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: PutConfigurationSetSendingOptionsCommandOutput) => void): void;
    /**
     * <p>Specify a custom domain to use for open and click tracking elements in email that you
     *             send using Amazon Pinpoint.</p>
     */
    putConfigurationSetTrackingOptions(args: PutConfigurationSetTrackingOptionsCommandInput, options?: __HttpHandlerOptions): Promise<PutConfigurationSetTrackingOptionsCommandOutput>;
    putConfigurationSetTrackingOptions(args: PutConfigurationSetTrackingOptionsCommandInput, cb: (err: any, data?: PutConfigurationSetTrackingOptionsCommandOutput) => void): void;
    putConfigurationSetTrackingOptions(args: PutConfigurationSetTrackingOptionsCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: PutConfigurationSetTrackingOptionsCommandOutput) => void): void;
    /**
     * <p>Move a dedicated IP address to an existing dedicated IP pool.</p>
     *         <note>
     *             <p>The dedicated IP address that you specify must already exist, and must be
     *                 associated with your Amazon Pinpoint account.
     *
     *             </p>
     *             <p>The dedicated IP pool you specify must already exist. You can create a new pool by
     *                 using the <code>CreateDedicatedIpPool</code> operation.</p>
     *
     *         </note>
     */
    putDedicatedIpInPool(args: PutDedicatedIpInPoolCommandInput, options?: __HttpHandlerOptions): Promise<PutDedicatedIpInPoolCommandOutput>;
    putDedicatedIpInPool(args: PutDedicatedIpInPoolCommandInput, cb: (err: any, data?: PutDedicatedIpInPoolCommandOutput) => void): void;
    putDedicatedIpInPool(args: PutDedicatedIpInPoolCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: PutDedicatedIpInPoolCommandOutput) => void): void;
    /**
     * <p></p>
     */
    putDedicatedIpWarmupAttributes(args: PutDedicatedIpWarmupAttributesCommandInput, options?: __HttpHandlerOptions): Promise<PutDedicatedIpWarmupAttributesCommandOutput>;
    putDedicatedIpWarmupAttributes(args: PutDedicatedIpWarmupAttributesCommandInput, cb: (err: any, data?: PutDedicatedIpWarmupAttributesCommandOutput) => void): void;
    putDedicatedIpWarmupAttributes(args: PutDedicatedIpWarmupAttributesCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: PutDedicatedIpWarmupAttributesCommandOutput) => void): void;
    /**
     * <p>Enable or disable the Deliverability dashboard for your Amazon Pinpoint account. When you enable the
     *             Deliverability dashboard, you gain access to reputation, deliverability, and other metrics for
     *             the domains that you use to send email using Amazon Pinpoint. You also gain the ability to perform
     *             predictive inbox placement tests.</p>
     *         <p>When you use the Deliverability dashboard, you pay a monthly subscription charge, in addition
     *             to any other fees that you accrue by using Amazon Pinpoint. For more information about the
     *             features and cost of a Deliverability dashboard subscription, see <a href="http://aws.amazon.com/pinpoint/pricing/">Amazon Pinpoint Pricing</a>.</p>
     */
    putDeliverabilityDashboardOption(args: PutDeliverabilityDashboardOptionCommandInput, options?: __HttpHandlerOptions): Promise<PutDeliverabilityDashboardOptionCommandOutput>;
    putDeliverabilityDashboardOption(args: PutDeliverabilityDashboardOptionCommandInput, cb: (err: any, data?: PutDeliverabilityDashboardOptionCommandOutput) => void): void;
    putDeliverabilityDashboardOption(args: PutDeliverabilityDashboardOptionCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: PutDeliverabilityDashboardOptionCommandOutput) => void): void;
    /**
     * <p>Used to enable or disable DKIM authentication for an email identity.</p>
     */
    putEmailIdentityDkimAttributes(args: PutEmailIdentityDkimAttributesCommandInput, options?: __HttpHandlerOptions): Promise<PutEmailIdentityDkimAttributesCommandOutput>;
    putEmailIdentityDkimAttributes(args: PutEmailIdentityDkimAttributesCommandInput, cb: (err: any, data?: PutEmailIdentityDkimAttributesCommandOutput) => void): void;
    putEmailIdentityDkimAttributes(args: PutEmailIdentityDkimAttributesCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: PutEmailIdentityDkimAttributesCommandOutput) => void): void;
    /**
     * <p>Used to enable or disable feedback forwarding for an identity. This setting determines
     *             what happens when an identity is used to send an email that results in a bounce or
     *             complaint event.</p>
     *         <p>When you enable feedback forwarding, Amazon Pinpoint sends you email notifications when bounce
     *             or complaint events occur. Amazon Pinpoint sends this notification to the address that you
     *             specified in the Return-Path header of the original email.</p>
     *         <p>When you disable feedback forwarding, Amazon Pinpoint sends notifications through other
     *             mechanisms, such as by notifying an Amazon SNS topic. You're required to have a method of
     *             tracking bounces and complaints. If you haven't set up another mechanism for receiving
     *             bounce or complaint notifications, Amazon Pinpoint sends an email notification when these events
     *             occur (even if this setting is disabled).</p>
     */
    putEmailIdentityFeedbackAttributes(args: PutEmailIdentityFeedbackAttributesCommandInput, options?: __HttpHandlerOptions): Promise<PutEmailIdentityFeedbackAttributesCommandOutput>;
    putEmailIdentityFeedbackAttributes(args: PutEmailIdentityFeedbackAttributesCommandInput, cb: (err: any, data?: PutEmailIdentityFeedbackAttributesCommandOutput) => void): void;
    putEmailIdentityFeedbackAttributes(args: PutEmailIdentityFeedbackAttributesCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: PutEmailIdentityFeedbackAttributesCommandOutput) => void): void;
    /**
     * <p>Used to enable or disable the custom Mail-From domain configuration for an email
     *             identity.</p>
     */
    putEmailIdentityMailFromAttributes(args: PutEmailIdentityMailFromAttributesCommandInput, options?: __HttpHandlerOptions): Promise<PutEmailIdentityMailFromAttributesCommandOutput>;
    putEmailIdentityMailFromAttributes(args: PutEmailIdentityMailFromAttributesCommandInput, cb: (err: any, data?: PutEmailIdentityMailFromAttributesCommandOutput) => void): void;
    putEmailIdentityMailFromAttributes(args: PutEmailIdentityMailFromAttributesCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: PutEmailIdentityMailFromAttributesCommandOutput) => void): void;
    /**
     * <p>Sends an email message. You can use the Amazon Pinpoint Email API to send two types of
     *             messages:</p>
     *         <ul>
     *             <li>
     *                 <p>
     *                   <b>Simple</b> – A standard email message. When
     *                     you create this type of message, you specify the sender, the recipient, and the
     *                     message body, and Amazon Pinpoint assembles the message for you.</p>
     *             </li>
     *             <li>
     *                 <p>
     *                   <b>Raw</b> –  A raw, MIME-formatted email
     *                     message. When you send this type of email, you have to specify all of the
     *                     message headers, as well as the message body. You can use this message type to
     *                     send messages that contain attachments. The message that you specify has to be a
     *                     valid MIME message.</p>
     *             </li>
     *          </ul>
     */
    sendEmail(args: SendEmailCommandInput, options?: __HttpHandlerOptions): Promise<SendEmailCommandOutput>;
    sendEmail(args: SendEmailCommandInput, cb: (err: any, data?: SendEmailCommandOutput) => void): void;
    sendEmail(args: SendEmailCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: SendEmailCommandOutput) => void): void;
    /**
     * <p>Add one or more tags (keys and values) to a specified resource. A
     *                 <i>tag</i> is a label that you optionally define and associate with a
     *             resource in Amazon Pinpoint. Tags can help you categorize and manage resources in different ways,
     *             such as by purpose, owner, environment, or other criteria. A resource can have as many
     *             as 50 tags.</p>
     *         <p>Each tag consists of a required <i>tag key</i> and an
     *                 associated <i>tag value</i>, both of which you define. A tag key is a
     *             general label that acts as a category for more specific tag values. A tag value acts as
     *             a descriptor within a tag key.</p>
     */
    tagResource(args: TagResourceCommandInput, options?: __HttpHandlerOptions): Promise<TagResourceCommandOutput>;
    tagResource(args: TagResourceCommandInput, cb: (err: any, data?: TagResourceCommandOutput) => void): void;
    tagResource(args: TagResourceCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: TagResourceCommandOutput) => void): void;
    /**
     * <p>Remove one or more tags (keys and values) from a specified resource.</p>
     */
    untagResource(args: UntagResourceCommandInput, options?: __HttpHandlerOptions): Promise<UntagResourceCommandOutput>;
    untagResource(args: UntagResourceCommandInput, cb: (err: any, data?: UntagResourceCommandOutput) => void): void;
    untagResource(args: UntagResourceCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: UntagResourceCommandOutput) => void): void;
    /**
     * <p>Update the configuration of an event destination for a configuration set.</p>
     *         <p>In Amazon Pinpoint, <i>events</i> include message sends, deliveries, opens,
     *             clicks, bounces, and complaints. <i>Event destinations</i> are places that
     *             you can send information about these events to. For example, you can send event data to
     *             Amazon SNS to receive notifications when you receive bounces or complaints, or you can use
     *             Amazon Kinesis Data Firehose to stream data to Amazon S3 for long-term storage.</p>
     */
    updateConfigurationSetEventDestination(args: UpdateConfigurationSetEventDestinationCommandInput, options?: __HttpHandlerOptions): Promise<UpdateConfigurationSetEventDestinationCommandOutput>;
    updateConfigurationSetEventDestination(args: UpdateConfigurationSetEventDestinationCommandInput, cb: (err: any, data?: UpdateConfigurationSetEventDestinationCommandOutput) => void): void;
    updateConfigurationSetEventDestination(args: UpdateConfigurationSetEventDestinationCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: UpdateConfigurationSetEventDestinationCommandOutput) => void): void;
}
