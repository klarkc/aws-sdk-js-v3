"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SESv2 = void 0;
const SESv2Client_1 = require("./SESv2Client");
const CreateConfigurationSetCommand_1 = require("./commands/CreateConfigurationSetCommand");
const CreateConfigurationSetEventDestinationCommand_1 = require("./commands/CreateConfigurationSetEventDestinationCommand");
const CreateContactCommand_1 = require("./commands/CreateContactCommand");
const CreateContactListCommand_1 = require("./commands/CreateContactListCommand");
const CreateCustomVerificationEmailTemplateCommand_1 = require("./commands/CreateCustomVerificationEmailTemplateCommand");
const CreateDedicatedIpPoolCommand_1 = require("./commands/CreateDedicatedIpPoolCommand");
const CreateDeliverabilityTestReportCommand_1 = require("./commands/CreateDeliverabilityTestReportCommand");
const CreateEmailIdentityCommand_1 = require("./commands/CreateEmailIdentityCommand");
const CreateEmailIdentityPolicyCommand_1 = require("./commands/CreateEmailIdentityPolicyCommand");
const CreateEmailTemplateCommand_1 = require("./commands/CreateEmailTemplateCommand");
const CreateImportJobCommand_1 = require("./commands/CreateImportJobCommand");
const DeleteConfigurationSetCommand_1 = require("./commands/DeleteConfigurationSetCommand");
const DeleteConfigurationSetEventDestinationCommand_1 = require("./commands/DeleteConfigurationSetEventDestinationCommand");
const DeleteContactCommand_1 = require("./commands/DeleteContactCommand");
const DeleteContactListCommand_1 = require("./commands/DeleteContactListCommand");
const DeleteCustomVerificationEmailTemplateCommand_1 = require("./commands/DeleteCustomVerificationEmailTemplateCommand");
const DeleteDedicatedIpPoolCommand_1 = require("./commands/DeleteDedicatedIpPoolCommand");
const DeleteEmailIdentityCommand_1 = require("./commands/DeleteEmailIdentityCommand");
const DeleteEmailIdentityPolicyCommand_1 = require("./commands/DeleteEmailIdentityPolicyCommand");
const DeleteEmailTemplateCommand_1 = require("./commands/DeleteEmailTemplateCommand");
const DeleteSuppressedDestinationCommand_1 = require("./commands/DeleteSuppressedDestinationCommand");
const GetAccountCommand_1 = require("./commands/GetAccountCommand");
const GetBlacklistReportsCommand_1 = require("./commands/GetBlacklistReportsCommand");
const GetConfigurationSetCommand_1 = require("./commands/GetConfigurationSetCommand");
const GetConfigurationSetEventDestinationsCommand_1 = require("./commands/GetConfigurationSetEventDestinationsCommand");
const GetContactCommand_1 = require("./commands/GetContactCommand");
const GetContactListCommand_1 = require("./commands/GetContactListCommand");
const GetCustomVerificationEmailTemplateCommand_1 = require("./commands/GetCustomVerificationEmailTemplateCommand");
const GetDedicatedIpCommand_1 = require("./commands/GetDedicatedIpCommand");
const GetDedicatedIpsCommand_1 = require("./commands/GetDedicatedIpsCommand");
const GetDeliverabilityDashboardOptionsCommand_1 = require("./commands/GetDeliverabilityDashboardOptionsCommand");
const GetDeliverabilityTestReportCommand_1 = require("./commands/GetDeliverabilityTestReportCommand");
const GetDomainDeliverabilityCampaignCommand_1 = require("./commands/GetDomainDeliverabilityCampaignCommand");
const GetDomainStatisticsReportCommand_1 = require("./commands/GetDomainStatisticsReportCommand");
const GetEmailIdentityCommand_1 = require("./commands/GetEmailIdentityCommand");
const GetEmailIdentityPoliciesCommand_1 = require("./commands/GetEmailIdentityPoliciesCommand");
const GetEmailTemplateCommand_1 = require("./commands/GetEmailTemplateCommand");
const GetImportJobCommand_1 = require("./commands/GetImportJobCommand");
const GetSuppressedDestinationCommand_1 = require("./commands/GetSuppressedDestinationCommand");
const ListConfigurationSetsCommand_1 = require("./commands/ListConfigurationSetsCommand");
const ListContactListsCommand_1 = require("./commands/ListContactListsCommand");
const ListContactsCommand_1 = require("./commands/ListContactsCommand");
const ListCustomVerificationEmailTemplatesCommand_1 = require("./commands/ListCustomVerificationEmailTemplatesCommand");
const ListDedicatedIpPoolsCommand_1 = require("./commands/ListDedicatedIpPoolsCommand");
const ListDeliverabilityTestReportsCommand_1 = require("./commands/ListDeliverabilityTestReportsCommand");
const ListDomainDeliverabilityCampaignsCommand_1 = require("./commands/ListDomainDeliverabilityCampaignsCommand");
const ListEmailIdentitiesCommand_1 = require("./commands/ListEmailIdentitiesCommand");
const ListEmailTemplatesCommand_1 = require("./commands/ListEmailTemplatesCommand");
const ListImportJobsCommand_1 = require("./commands/ListImportJobsCommand");
const ListSuppressedDestinationsCommand_1 = require("./commands/ListSuppressedDestinationsCommand");
const ListTagsForResourceCommand_1 = require("./commands/ListTagsForResourceCommand");
const PutAccountDedicatedIpWarmupAttributesCommand_1 = require("./commands/PutAccountDedicatedIpWarmupAttributesCommand");
const PutAccountDetailsCommand_1 = require("./commands/PutAccountDetailsCommand");
const PutAccountSendingAttributesCommand_1 = require("./commands/PutAccountSendingAttributesCommand");
const PutAccountSuppressionAttributesCommand_1 = require("./commands/PutAccountSuppressionAttributesCommand");
const PutConfigurationSetDeliveryOptionsCommand_1 = require("./commands/PutConfigurationSetDeliveryOptionsCommand");
const PutConfigurationSetReputationOptionsCommand_1 = require("./commands/PutConfigurationSetReputationOptionsCommand");
const PutConfigurationSetSendingOptionsCommand_1 = require("./commands/PutConfigurationSetSendingOptionsCommand");
const PutConfigurationSetSuppressionOptionsCommand_1 = require("./commands/PutConfigurationSetSuppressionOptionsCommand");
const PutConfigurationSetTrackingOptionsCommand_1 = require("./commands/PutConfigurationSetTrackingOptionsCommand");
const PutDedicatedIpInPoolCommand_1 = require("./commands/PutDedicatedIpInPoolCommand");
const PutDedicatedIpWarmupAttributesCommand_1 = require("./commands/PutDedicatedIpWarmupAttributesCommand");
const PutDeliverabilityDashboardOptionCommand_1 = require("./commands/PutDeliverabilityDashboardOptionCommand");
const PutEmailIdentityConfigurationSetAttributesCommand_1 = require("./commands/PutEmailIdentityConfigurationSetAttributesCommand");
const PutEmailIdentityDkimAttributesCommand_1 = require("./commands/PutEmailIdentityDkimAttributesCommand");
const PutEmailIdentityDkimSigningAttributesCommand_1 = require("./commands/PutEmailIdentityDkimSigningAttributesCommand");
const PutEmailIdentityFeedbackAttributesCommand_1 = require("./commands/PutEmailIdentityFeedbackAttributesCommand");
const PutEmailIdentityMailFromAttributesCommand_1 = require("./commands/PutEmailIdentityMailFromAttributesCommand");
const PutSuppressedDestinationCommand_1 = require("./commands/PutSuppressedDestinationCommand");
const SendBulkEmailCommand_1 = require("./commands/SendBulkEmailCommand");
const SendCustomVerificationEmailCommand_1 = require("./commands/SendCustomVerificationEmailCommand");
const SendEmailCommand_1 = require("./commands/SendEmailCommand");
const TagResourceCommand_1 = require("./commands/TagResourceCommand");
const TestRenderEmailTemplateCommand_1 = require("./commands/TestRenderEmailTemplateCommand");
const UntagResourceCommand_1 = require("./commands/UntagResourceCommand");
const UpdateConfigurationSetEventDestinationCommand_1 = require("./commands/UpdateConfigurationSetEventDestinationCommand");
const UpdateContactCommand_1 = require("./commands/UpdateContactCommand");
const UpdateContactListCommand_1 = require("./commands/UpdateContactListCommand");
const UpdateCustomVerificationEmailTemplateCommand_1 = require("./commands/UpdateCustomVerificationEmailTemplateCommand");
const UpdateEmailIdentityPolicyCommand_1 = require("./commands/UpdateEmailIdentityPolicyCommand");
const UpdateEmailTemplateCommand_1 = require("./commands/UpdateEmailTemplateCommand");
/**
 * <fullname>Amazon SES API v2</fullname>
 *         <p>Welcome to the Amazon SES API v2 Reference. This guide provides information about the Amazon SES API v2,
 *             including supported operations, data types, parameters, and schemas.</p>
 *         <p>
 *             <a href="https://aws.amazon.com/pinpoint">Amazon SES</a> is an AWS service that
 *             you can use to send email messages to your customers.</p>
 *         <p>If you're new to Amazon SES API v2, you might find it helpful to also review the <a href="https://docs.aws.amazon.com/ses/latest/DeveloperGuide/">Amazon Simple Email Service Developer
 *                 Guide</a>. The <i>Amazon SES Developer Guide</i> provides information
 *             and code samples that demonstrate how to use Amazon SES API v2 features programmatically.</p>
 *         <p>The Amazon SES API v2 is available in several AWS Regions and it provides an endpoint for each
 *             of these Regions. For a list of all the Regions and endpoints where the API is currently
 *             available, see <a href="https://docs.aws.amazon.com/general/latest/gr/rande.html#ses_region">AWS Service Endpoints</a> in the <i>Amazon Web Services General Reference</i>. To
 *             learn more about AWS Regions, see <a href="https://docs.aws.amazon.com/general/latest/gr/rande-manage.html">Managing AWS Regions</a> in the
 *                 <i>Amazon Web Services General Reference</i>.</p>
 *         <p>In each Region, AWS maintains multiple Availability Zones. These Availability Zones
 *             are physically isolated from each other, but are united by private, low-latency,
 *             high-throughput, and highly redundant network connections. These Availability Zones
 *             enable us to provide very high levels of availability and redundancy, while also
 *             minimizing latency. To learn more about the number of Availability Zones that are
 *             available in each Region, see <a href="http://aws.amazon.com/about-aws/global-infrastructure/">AWS Global Infrastructure</a>.</p>
 */
class SESv2 extends SESv2Client_1.SESv2Client {
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
    createContact(args, optionsOrCb, cb) {
        const command = new CreateContactCommand_1.CreateContactCommand(args);
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
    createContactList(args, optionsOrCb, cb) {
        const command = new CreateContactListCommand_1.CreateContactListCommand(args);
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
    createCustomVerificationEmailTemplate(args, optionsOrCb, cb) {
        const command = new CreateCustomVerificationEmailTemplateCommand_1.CreateCustomVerificationEmailTemplateCommand(args);
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
    createEmailIdentityPolicy(args, optionsOrCb, cb) {
        const command = new CreateEmailIdentityPolicyCommand_1.CreateEmailIdentityPolicyCommand(args);
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
    createEmailTemplate(args, optionsOrCb, cb) {
        const command = new CreateEmailTemplateCommand_1.CreateEmailTemplateCommand(args);
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
    createImportJob(args, optionsOrCb, cb) {
        const command = new CreateImportJobCommand_1.CreateImportJobCommand(args);
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
    deleteContact(args, optionsOrCb, cb) {
        const command = new DeleteContactCommand_1.DeleteContactCommand(args);
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
    deleteContactList(args, optionsOrCb, cb) {
        const command = new DeleteContactListCommand_1.DeleteContactListCommand(args);
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
    deleteCustomVerificationEmailTemplate(args, optionsOrCb, cb) {
        const command = new DeleteCustomVerificationEmailTemplateCommand_1.DeleteCustomVerificationEmailTemplateCommand(args);
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
    deleteEmailIdentityPolicy(args, optionsOrCb, cb) {
        const command = new DeleteEmailIdentityPolicyCommand_1.DeleteEmailIdentityPolicyCommand(args);
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
    deleteEmailTemplate(args, optionsOrCb, cb) {
        const command = new DeleteEmailTemplateCommand_1.DeleteEmailTemplateCommand(args);
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
    deleteSuppressedDestination(args, optionsOrCb, cb) {
        const command = new DeleteSuppressedDestinationCommand_1.DeleteSuppressedDestinationCommand(args);
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
    getContact(args, optionsOrCb, cb) {
        const command = new GetContactCommand_1.GetContactCommand(args);
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
    getContactList(args, optionsOrCb, cb) {
        const command = new GetContactListCommand_1.GetContactListCommand(args);
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
    getCustomVerificationEmailTemplate(args, optionsOrCb, cb) {
        const command = new GetCustomVerificationEmailTemplateCommand_1.GetCustomVerificationEmailTemplateCommand(args);
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
    getEmailIdentityPolicies(args, optionsOrCb, cb) {
        const command = new GetEmailIdentityPoliciesCommand_1.GetEmailIdentityPoliciesCommand(args);
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
    getEmailTemplate(args, optionsOrCb, cb) {
        const command = new GetEmailTemplateCommand_1.GetEmailTemplateCommand(args);
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
    getImportJob(args, optionsOrCb, cb) {
        const command = new GetImportJobCommand_1.GetImportJobCommand(args);
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
    getSuppressedDestination(args, optionsOrCb, cb) {
        const command = new GetSuppressedDestinationCommand_1.GetSuppressedDestinationCommand(args);
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
    listContactLists(args, optionsOrCb, cb) {
        const command = new ListContactListsCommand_1.ListContactListsCommand(args);
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
    listContacts(args, optionsOrCb, cb) {
        const command = new ListContactsCommand_1.ListContactsCommand(args);
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
    listCustomVerificationEmailTemplates(args, optionsOrCb, cb) {
        const command = new ListCustomVerificationEmailTemplatesCommand_1.ListCustomVerificationEmailTemplatesCommand(args);
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
    listEmailTemplates(args, optionsOrCb, cb) {
        const command = new ListEmailTemplatesCommand_1.ListEmailTemplatesCommand(args);
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
    listImportJobs(args, optionsOrCb, cb) {
        const command = new ListImportJobsCommand_1.ListImportJobsCommand(args);
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
    listSuppressedDestinations(args, optionsOrCb, cb) {
        const command = new ListSuppressedDestinationsCommand_1.ListSuppressedDestinationsCommand(args);
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
    putAccountDetails(args, optionsOrCb, cb) {
        const command = new PutAccountDetailsCommand_1.PutAccountDetailsCommand(args);
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
    putAccountSuppressionAttributes(args, optionsOrCb, cb) {
        const command = new PutAccountSuppressionAttributesCommand_1.PutAccountSuppressionAttributesCommand(args);
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
    putConfigurationSetSuppressionOptions(args, optionsOrCb, cb) {
        const command = new PutConfigurationSetSuppressionOptionsCommand_1.PutConfigurationSetSuppressionOptionsCommand(args);
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
    putEmailIdentityConfigurationSetAttributes(args, optionsOrCb, cb) {
        const command = new PutEmailIdentityConfigurationSetAttributesCommand_1.PutEmailIdentityConfigurationSetAttributesCommand(args);
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
    putEmailIdentityDkimSigningAttributes(args, optionsOrCb, cb) {
        const command = new PutEmailIdentityDkimSigningAttributesCommand_1.PutEmailIdentityDkimSigningAttributesCommand(args);
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
    putSuppressedDestination(args, optionsOrCb, cb) {
        const command = new PutSuppressedDestinationCommand_1.PutSuppressedDestinationCommand(args);
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
    sendBulkEmail(args, optionsOrCb, cb) {
        const command = new SendBulkEmailCommand_1.SendBulkEmailCommand(args);
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
    sendCustomVerificationEmail(args, optionsOrCb, cb) {
        const command = new SendCustomVerificationEmailCommand_1.SendCustomVerificationEmailCommand(args);
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
    testRenderEmailTemplate(args, optionsOrCb, cb) {
        const command = new TestRenderEmailTemplateCommand_1.TestRenderEmailTemplateCommand(args);
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
    updateContact(args, optionsOrCb, cb) {
        const command = new UpdateContactCommand_1.UpdateContactCommand(args);
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
    updateContactList(args, optionsOrCb, cb) {
        const command = new UpdateContactListCommand_1.UpdateContactListCommand(args);
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
    updateCustomVerificationEmailTemplate(args, optionsOrCb, cb) {
        const command = new UpdateCustomVerificationEmailTemplateCommand_1.UpdateCustomVerificationEmailTemplateCommand(args);
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
    updateEmailIdentityPolicy(args, optionsOrCb, cb) {
        const command = new UpdateEmailIdentityPolicyCommand_1.UpdateEmailIdentityPolicyCommand(args);
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
    updateEmailTemplate(args, optionsOrCb, cb) {
        const command = new UpdateEmailTemplateCommand_1.UpdateEmailTemplateCommand(args);
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
exports.SESv2 = SESv2;
//# sourceMappingURL=SESv2.js.map