"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PinpointEmail = void 0;
const PinpointEmailClient_1 = require("./PinpointEmailClient");
const CreateConfigurationSetCommand_1 = require("./commands/CreateConfigurationSetCommand");
const CreateConfigurationSetEventDestinationCommand_1 = require("./commands/CreateConfigurationSetEventDestinationCommand");
const CreateDedicatedIpPoolCommand_1 = require("./commands/CreateDedicatedIpPoolCommand");
const CreateDeliverabilityTestReportCommand_1 = require("./commands/CreateDeliverabilityTestReportCommand");
const CreateEmailIdentityCommand_1 = require("./commands/CreateEmailIdentityCommand");
const DeleteConfigurationSetCommand_1 = require("./commands/DeleteConfigurationSetCommand");
const DeleteConfigurationSetEventDestinationCommand_1 = require("./commands/DeleteConfigurationSetEventDestinationCommand");
const DeleteDedicatedIpPoolCommand_1 = require("./commands/DeleteDedicatedIpPoolCommand");
const DeleteEmailIdentityCommand_1 = require("./commands/DeleteEmailIdentityCommand");
const GetAccountCommand_1 = require("./commands/GetAccountCommand");
const GetBlacklistReportsCommand_1 = require("./commands/GetBlacklistReportsCommand");
const GetConfigurationSetCommand_1 = require("./commands/GetConfigurationSetCommand");
const GetConfigurationSetEventDestinationsCommand_1 = require("./commands/GetConfigurationSetEventDestinationsCommand");
const GetDedicatedIpCommand_1 = require("./commands/GetDedicatedIpCommand");
const GetDedicatedIpsCommand_1 = require("./commands/GetDedicatedIpsCommand");
const GetDeliverabilityDashboardOptionsCommand_1 = require("./commands/GetDeliverabilityDashboardOptionsCommand");
const GetDeliverabilityTestReportCommand_1 = require("./commands/GetDeliverabilityTestReportCommand");
const GetDomainDeliverabilityCampaignCommand_1 = require("./commands/GetDomainDeliverabilityCampaignCommand");
const GetDomainStatisticsReportCommand_1 = require("./commands/GetDomainStatisticsReportCommand");
const GetEmailIdentityCommand_1 = require("./commands/GetEmailIdentityCommand");
const ListConfigurationSetsCommand_1 = require("./commands/ListConfigurationSetsCommand");
const ListDedicatedIpPoolsCommand_1 = require("./commands/ListDedicatedIpPoolsCommand");
const ListDeliverabilityTestReportsCommand_1 = require("./commands/ListDeliverabilityTestReportsCommand");
const ListDomainDeliverabilityCampaignsCommand_1 = require("./commands/ListDomainDeliverabilityCampaignsCommand");
const ListEmailIdentitiesCommand_1 = require("./commands/ListEmailIdentitiesCommand");
const ListTagsForResourceCommand_1 = require("./commands/ListTagsForResourceCommand");
const PutAccountDedicatedIpWarmupAttributesCommand_1 = require("./commands/PutAccountDedicatedIpWarmupAttributesCommand");
const PutAccountSendingAttributesCommand_1 = require("./commands/PutAccountSendingAttributesCommand");
const PutConfigurationSetDeliveryOptionsCommand_1 = require("./commands/PutConfigurationSetDeliveryOptionsCommand");
const PutConfigurationSetReputationOptionsCommand_1 = require("./commands/PutConfigurationSetReputationOptionsCommand");
const PutConfigurationSetSendingOptionsCommand_1 = require("./commands/PutConfigurationSetSendingOptionsCommand");
const PutConfigurationSetTrackingOptionsCommand_1 = require("./commands/PutConfigurationSetTrackingOptionsCommand");
const PutDedicatedIpInPoolCommand_1 = require("./commands/PutDedicatedIpInPoolCommand");
const PutDedicatedIpWarmupAttributesCommand_1 = require("./commands/PutDedicatedIpWarmupAttributesCommand");
const PutDeliverabilityDashboardOptionCommand_1 = require("./commands/PutDeliverabilityDashboardOptionCommand");
const PutEmailIdentityDkimAttributesCommand_1 = require("./commands/PutEmailIdentityDkimAttributesCommand");
const PutEmailIdentityFeedbackAttributesCommand_1 = require("./commands/PutEmailIdentityFeedbackAttributesCommand");
const PutEmailIdentityMailFromAttributesCommand_1 = require("./commands/PutEmailIdentityMailFromAttributesCommand");
const SendEmailCommand_1 = require("./commands/SendEmailCommand");
const TagResourceCommand_1 = require("./commands/TagResourceCommand");
const UntagResourceCommand_1 = require("./commands/UntagResourceCommand");
const UpdateConfigurationSetEventDestinationCommand_1 = require("./commands/UpdateConfigurationSetEventDestinationCommand");
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
class PinpointEmail extends PinpointEmailClient_1.PinpointEmailClient {
    createConfigurationSet(args, optionsOrCb, cb) {
        const command = new CreateConfigurationSetCommand_1.CreateConfigurationSetCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    }
    createConfigurationSetEventDestination(args, optionsOrCb, cb) {
        const command = new CreateConfigurationSetEventDestinationCommand_1.CreateConfigurationSetEventDestinationCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    }
    createDedicatedIpPool(args, optionsOrCb, cb) {
        const command = new CreateDedicatedIpPoolCommand_1.CreateDedicatedIpPoolCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    }
    createDeliverabilityTestReport(args, optionsOrCb, cb) {
        const command = new CreateDeliverabilityTestReportCommand_1.CreateDeliverabilityTestReportCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    }
    createEmailIdentity(args, optionsOrCb, cb) {
        const command = new CreateEmailIdentityCommand_1.CreateEmailIdentityCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    }
    deleteConfigurationSet(args, optionsOrCb, cb) {
        const command = new DeleteConfigurationSetCommand_1.DeleteConfigurationSetCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    }
    deleteConfigurationSetEventDestination(args, optionsOrCb, cb) {
        const command = new DeleteConfigurationSetEventDestinationCommand_1.DeleteConfigurationSetEventDestinationCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    }
    deleteDedicatedIpPool(args, optionsOrCb, cb) {
        const command = new DeleteDedicatedIpPoolCommand_1.DeleteDedicatedIpPoolCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    }
    deleteEmailIdentity(args, optionsOrCb, cb) {
        const command = new DeleteEmailIdentityCommand_1.DeleteEmailIdentityCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    }
    getAccount(args, optionsOrCb, cb) {
        const command = new GetAccountCommand_1.GetAccountCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    }
    getBlacklistReports(args, optionsOrCb, cb) {
        const command = new GetBlacklistReportsCommand_1.GetBlacklistReportsCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    }
    getConfigurationSet(args, optionsOrCb, cb) {
        const command = new GetConfigurationSetCommand_1.GetConfigurationSetCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    }
    getConfigurationSetEventDestinations(args, optionsOrCb, cb) {
        const command = new GetConfigurationSetEventDestinationsCommand_1.GetConfigurationSetEventDestinationsCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    }
    getDedicatedIp(args, optionsOrCb, cb) {
        const command = new GetDedicatedIpCommand_1.GetDedicatedIpCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    }
    getDedicatedIps(args, optionsOrCb, cb) {
        const command = new GetDedicatedIpsCommand_1.GetDedicatedIpsCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    }
    getDeliverabilityDashboardOptions(args, optionsOrCb, cb) {
        const command = new GetDeliverabilityDashboardOptionsCommand_1.GetDeliverabilityDashboardOptionsCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    }
    getDeliverabilityTestReport(args, optionsOrCb, cb) {
        const command = new GetDeliverabilityTestReportCommand_1.GetDeliverabilityTestReportCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    }
    getDomainDeliverabilityCampaign(args, optionsOrCb, cb) {
        const command = new GetDomainDeliverabilityCampaignCommand_1.GetDomainDeliverabilityCampaignCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    }
    getDomainStatisticsReport(args, optionsOrCb, cb) {
        const command = new GetDomainStatisticsReportCommand_1.GetDomainStatisticsReportCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    }
    getEmailIdentity(args, optionsOrCb, cb) {
        const command = new GetEmailIdentityCommand_1.GetEmailIdentityCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    }
    listConfigurationSets(args, optionsOrCb, cb) {
        const command = new ListConfigurationSetsCommand_1.ListConfigurationSetsCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    }
    listDedicatedIpPools(args, optionsOrCb, cb) {
        const command = new ListDedicatedIpPoolsCommand_1.ListDedicatedIpPoolsCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    }
    listDeliverabilityTestReports(args, optionsOrCb, cb) {
        const command = new ListDeliverabilityTestReportsCommand_1.ListDeliverabilityTestReportsCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    }
    listDomainDeliverabilityCampaigns(args, optionsOrCb, cb) {
        const command = new ListDomainDeliverabilityCampaignsCommand_1.ListDomainDeliverabilityCampaignsCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    }
    listEmailIdentities(args, optionsOrCb, cb) {
        const command = new ListEmailIdentitiesCommand_1.ListEmailIdentitiesCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    }
    listTagsForResource(args, optionsOrCb, cb) {
        const command = new ListTagsForResourceCommand_1.ListTagsForResourceCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    }
    putAccountDedicatedIpWarmupAttributes(args, optionsOrCb, cb) {
        const command = new PutAccountDedicatedIpWarmupAttributesCommand_1.PutAccountDedicatedIpWarmupAttributesCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    }
    putAccountSendingAttributes(args, optionsOrCb, cb) {
        const command = new PutAccountSendingAttributesCommand_1.PutAccountSendingAttributesCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    }
    putConfigurationSetDeliveryOptions(args, optionsOrCb, cb) {
        const command = new PutConfigurationSetDeliveryOptionsCommand_1.PutConfigurationSetDeliveryOptionsCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    }
    putConfigurationSetReputationOptions(args, optionsOrCb, cb) {
        const command = new PutConfigurationSetReputationOptionsCommand_1.PutConfigurationSetReputationOptionsCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    }
    putConfigurationSetSendingOptions(args, optionsOrCb, cb) {
        const command = new PutConfigurationSetSendingOptionsCommand_1.PutConfigurationSetSendingOptionsCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    }
    putConfigurationSetTrackingOptions(args, optionsOrCb, cb) {
        const command = new PutConfigurationSetTrackingOptionsCommand_1.PutConfigurationSetTrackingOptionsCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    }
    putDedicatedIpInPool(args, optionsOrCb, cb) {
        const command = new PutDedicatedIpInPoolCommand_1.PutDedicatedIpInPoolCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    }
    putDedicatedIpWarmupAttributes(args, optionsOrCb, cb) {
        const command = new PutDedicatedIpWarmupAttributesCommand_1.PutDedicatedIpWarmupAttributesCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    }
    putDeliverabilityDashboardOption(args, optionsOrCb, cb) {
        const command = new PutDeliverabilityDashboardOptionCommand_1.PutDeliverabilityDashboardOptionCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    }
    putEmailIdentityDkimAttributes(args, optionsOrCb, cb) {
        const command = new PutEmailIdentityDkimAttributesCommand_1.PutEmailIdentityDkimAttributesCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    }
    putEmailIdentityFeedbackAttributes(args, optionsOrCb, cb) {
        const command = new PutEmailIdentityFeedbackAttributesCommand_1.PutEmailIdentityFeedbackAttributesCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    }
    putEmailIdentityMailFromAttributes(args, optionsOrCb, cb) {
        const command = new PutEmailIdentityMailFromAttributesCommand_1.PutEmailIdentityMailFromAttributesCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    }
    sendEmail(args, optionsOrCb, cb) {
        const command = new SendEmailCommand_1.SendEmailCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    }
    tagResource(args, optionsOrCb, cb) {
        const command = new TagResourceCommand_1.TagResourceCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    }
    untagResource(args, optionsOrCb, cb) {
        const command = new UntagResourceCommand_1.UntagResourceCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    }
    updateConfigurationSetEventDestination(args, optionsOrCb, cb) {
        const command = new UpdateConfigurationSetEventDestinationCommand_1.UpdateConfigurationSetEventDestinationCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    }
}
exports.PinpointEmail = PinpointEmail;
//# sourceMappingURL=PinpointEmail.js.map