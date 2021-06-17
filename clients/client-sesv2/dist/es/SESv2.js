import { __extends } from "tslib";
import { SESv2Client } from "./SESv2Client";
import { CreateConfigurationSetCommand, } from "./commands/CreateConfigurationSetCommand";
import { CreateConfigurationSetEventDestinationCommand, } from "./commands/CreateConfigurationSetEventDestinationCommand";
import { CreateContactCommand, } from "./commands/CreateContactCommand";
import { CreateContactListCommand, } from "./commands/CreateContactListCommand";
import { CreateCustomVerificationEmailTemplateCommand, } from "./commands/CreateCustomVerificationEmailTemplateCommand";
import { CreateDedicatedIpPoolCommand, } from "./commands/CreateDedicatedIpPoolCommand";
import { CreateDeliverabilityTestReportCommand, } from "./commands/CreateDeliverabilityTestReportCommand";
import { CreateEmailIdentityCommand, } from "./commands/CreateEmailIdentityCommand";
import { CreateEmailIdentityPolicyCommand, } from "./commands/CreateEmailIdentityPolicyCommand";
import { CreateEmailTemplateCommand, } from "./commands/CreateEmailTemplateCommand";
import { CreateImportJobCommand, } from "./commands/CreateImportJobCommand";
import { DeleteConfigurationSetCommand, } from "./commands/DeleteConfigurationSetCommand";
import { DeleteConfigurationSetEventDestinationCommand, } from "./commands/DeleteConfigurationSetEventDestinationCommand";
import { DeleteContactCommand, } from "./commands/DeleteContactCommand";
import { DeleteContactListCommand, } from "./commands/DeleteContactListCommand";
import { DeleteCustomVerificationEmailTemplateCommand, } from "./commands/DeleteCustomVerificationEmailTemplateCommand";
import { DeleteDedicatedIpPoolCommand, } from "./commands/DeleteDedicatedIpPoolCommand";
import { DeleteEmailIdentityCommand, } from "./commands/DeleteEmailIdentityCommand";
import { DeleteEmailIdentityPolicyCommand, } from "./commands/DeleteEmailIdentityPolicyCommand";
import { DeleteEmailTemplateCommand, } from "./commands/DeleteEmailTemplateCommand";
import { DeleteSuppressedDestinationCommand, } from "./commands/DeleteSuppressedDestinationCommand";
import { GetAccountCommand } from "./commands/GetAccountCommand";
import { GetBlacklistReportsCommand, } from "./commands/GetBlacklistReportsCommand";
import { GetConfigurationSetCommand, } from "./commands/GetConfigurationSetCommand";
import { GetConfigurationSetEventDestinationsCommand, } from "./commands/GetConfigurationSetEventDestinationsCommand";
import { GetContactCommand } from "./commands/GetContactCommand";
import { GetContactListCommand, } from "./commands/GetContactListCommand";
import { GetCustomVerificationEmailTemplateCommand, } from "./commands/GetCustomVerificationEmailTemplateCommand";
import { GetDedicatedIpCommand, } from "./commands/GetDedicatedIpCommand";
import { GetDedicatedIpsCommand, } from "./commands/GetDedicatedIpsCommand";
import { GetDeliverabilityDashboardOptionsCommand, } from "./commands/GetDeliverabilityDashboardOptionsCommand";
import { GetDeliverabilityTestReportCommand, } from "./commands/GetDeliverabilityTestReportCommand";
import { GetDomainDeliverabilityCampaignCommand, } from "./commands/GetDomainDeliverabilityCampaignCommand";
import { GetDomainStatisticsReportCommand, } from "./commands/GetDomainStatisticsReportCommand";
import { GetEmailIdentityCommand, } from "./commands/GetEmailIdentityCommand";
import { GetEmailIdentityPoliciesCommand, } from "./commands/GetEmailIdentityPoliciesCommand";
import { GetEmailTemplateCommand, } from "./commands/GetEmailTemplateCommand";
import { GetImportJobCommand, } from "./commands/GetImportJobCommand";
import { GetSuppressedDestinationCommand, } from "./commands/GetSuppressedDestinationCommand";
import { ListConfigurationSetsCommand, } from "./commands/ListConfigurationSetsCommand";
import { ListContactListsCommand, } from "./commands/ListContactListsCommand";
import { ListContactsCommand, } from "./commands/ListContactsCommand";
import { ListCustomVerificationEmailTemplatesCommand, } from "./commands/ListCustomVerificationEmailTemplatesCommand";
import { ListDedicatedIpPoolsCommand, } from "./commands/ListDedicatedIpPoolsCommand";
import { ListDeliverabilityTestReportsCommand, } from "./commands/ListDeliverabilityTestReportsCommand";
import { ListDomainDeliverabilityCampaignsCommand, } from "./commands/ListDomainDeliverabilityCampaignsCommand";
import { ListEmailIdentitiesCommand, } from "./commands/ListEmailIdentitiesCommand";
import { ListEmailTemplatesCommand, } from "./commands/ListEmailTemplatesCommand";
import { ListImportJobsCommand, } from "./commands/ListImportJobsCommand";
import { ListSuppressedDestinationsCommand, } from "./commands/ListSuppressedDestinationsCommand";
import { ListTagsForResourceCommand, } from "./commands/ListTagsForResourceCommand";
import { PutAccountDedicatedIpWarmupAttributesCommand, } from "./commands/PutAccountDedicatedIpWarmupAttributesCommand";
import { PutAccountDetailsCommand, } from "./commands/PutAccountDetailsCommand";
import { PutAccountSendingAttributesCommand, } from "./commands/PutAccountSendingAttributesCommand";
import { PutAccountSuppressionAttributesCommand, } from "./commands/PutAccountSuppressionAttributesCommand";
import { PutConfigurationSetDeliveryOptionsCommand, } from "./commands/PutConfigurationSetDeliveryOptionsCommand";
import { PutConfigurationSetReputationOptionsCommand, } from "./commands/PutConfigurationSetReputationOptionsCommand";
import { PutConfigurationSetSendingOptionsCommand, } from "./commands/PutConfigurationSetSendingOptionsCommand";
import { PutConfigurationSetSuppressionOptionsCommand, } from "./commands/PutConfigurationSetSuppressionOptionsCommand";
import { PutConfigurationSetTrackingOptionsCommand, } from "./commands/PutConfigurationSetTrackingOptionsCommand";
import { PutDedicatedIpInPoolCommand, } from "./commands/PutDedicatedIpInPoolCommand";
import { PutDedicatedIpWarmupAttributesCommand, } from "./commands/PutDedicatedIpWarmupAttributesCommand";
import { PutDeliverabilityDashboardOptionCommand, } from "./commands/PutDeliverabilityDashboardOptionCommand";
import { PutEmailIdentityConfigurationSetAttributesCommand, } from "./commands/PutEmailIdentityConfigurationSetAttributesCommand";
import { PutEmailIdentityDkimAttributesCommand, } from "./commands/PutEmailIdentityDkimAttributesCommand";
import { PutEmailIdentityDkimSigningAttributesCommand, } from "./commands/PutEmailIdentityDkimSigningAttributesCommand";
import { PutEmailIdentityFeedbackAttributesCommand, } from "./commands/PutEmailIdentityFeedbackAttributesCommand";
import { PutEmailIdentityMailFromAttributesCommand, } from "./commands/PutEmailIdentityMailFromAttributesCommand";
import { PutSuppressedDestinationCommand, } from "./commands/PutSuppressedDestinationCommand";
import { SendBulkEmailCommand, } from "./commands/SendBulkEmailCommand";
import { SendCustomVerificationEmailCommand, } from "./commands/SendCustomVerificationEmailCommand";
import { SendEmailCommand } from "./commands/SendEmailCommand";
import { TagResourceCommand } from "./commands/TagResourceCommand";
import { TestRenderEmailTemplateCommand, } from "./commands/TestRenderEmailTemplateCommand";
import { UntagResourceCommand, } from "./commands/UntagResourceCommand";
import { UpdateConfigurationSetEventDestinationCommand, } from "./commands/UpdateConfigurationSetEventDestinationCommand";
import { UpdateContactCommand, } from "./commands/UpdateContactCommand";
import { UpdateContactListCommand, } from "./commands/UpdateContactListCommand";
import { UpdateCustomVerificationEmailTemplateCommand, } from "./commands/UpdateCustomVerificationEmailTemplateCommand";
import { UpdateEmailIdentityPolicyCommand, } from "./commands/UpdateEmailIdentityPolicyCommand";
import { UpdateEmailTemplateCommand, } from "./commands/UpdateEmailTemplateCommand";
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
var SESv2 = /** @class */ (function (_super) {
    __extends(SESv2, _super);
    function SESv2() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    SESv2.prototype.createConfigurationSet = function (args, optionsOrCb, cb) {
        var command = new CreateConfigurationSetCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error("Expect http options but get " + typeof optionsOrCb);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    };
    SESv2.prototype.createConfigurationSetEventDestination = function (args, optionsOrCb, cb) {
        var command = new CreateConfigurationSetEventDestinationCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error("Expect http options but get " + typeof optionsOrCb);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    };
    SESv2.prototype.createContact = function (args, optionsOrCb, cb) {
        var command = new CreateContactCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error("Expect http options but get " + typeof optionsOrCb);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    };
    SESv2.prototype.createContactList = function (args, optionsOrCb, cb) {
        var command = new CreateContactListCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error("Expect http options but get " + typeof optionsOrCb);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    };
    SESv2.prototype.createCustomVerificationEmailTemplate = function (args, optionsOrCb, cb) {
        var command = new CreateCustomVerificationEmailTemplateCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error("Expect http options but get " + typeof optionsOrCb);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    };
    SESv2.prototype.createDedicatedIpPool = function (args, optionsOrCb, cb) {
        var command = new CreateDedicatedIpPoolCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error("Expect http options but get " + typeof optionsOrCb);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    };
    SESv2.prototype.createDeliverabilityTestReport = function (args, optionsOrCb, cb) {
        var command = new CreateDeliverabilityTestReportCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error("Expect http options but get " + typeof optionsOrCb);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    };
    SESv2.prototype.createEmailIdentity = function (args, optionsOrCb, cb) {
        var command = new CreateEmailIdentityCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error("Expect http options but get " + typeof optionsOrCb);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    };
    SESv2.prototype.createEmailIdentityPolicy = function (args, optionsOrCb, cb) {
        var command = new CreateEmailIdentityPolicyCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error("Expect http options but get " + typeof optionsOrCb);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    };
    SESv2.prototype.createEmailTemplate = function (args, optionsOrCb, cb) {
        var command = new CreateEmailTemplateCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error("Expect http options but get " + typeof optionsOrCb);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    };
    SESv2.prototype.createImportJob = function (args, optionsOrCb, cb) {
        var command = new CreateImportJobCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error("Expect http options but get " + typeof optionsOrCb);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    };
    SESv2.prototype.deleteConfigurationSet = function (args, optionsOrCb, cb) {
        var command = new DeleteConfigurationSetCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error("Expect http options but get " + typeof optionsOrCb);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    };
    SESv2.prototype.deleteConfigurationSetEventDestination = function (args, optionsOrCb, cb) {
        var command = new DeleteConfigurationSetEventDestinationCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error("Expect http options but get " + typeof optionsOrCb);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    };
    SESv2.prototype.deleteContact = function (args, optionsOrCb, cb) {
        var command = new DeleteContactCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error("Expect http options but get " + typeof optionsOrCb);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    };
    SESv2.prototype.deleteContactList = function (args, optionsOrCb, cb) {
        var command = new DeleteContactListCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error("Expect http options but get " + typeof optionsOrCb);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    };
    SESv2.prototype.deleteCustomVerificationEmailTemplate = function (args, optionsOrCb, cb) {
        var command = new DeleteCustomVerificationEmailTemplateCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error("Expect http options but get " + typeof optionsOrCb);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    };
    SESv2.prototype.deleteDedicatedIpPool = function (args, optionsOrCb, cb) {
        var command = new DeleteDedicatedIpPoolCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error("Expect http options but get " + typeof optionsOrCb);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    };
    SESv2.prototype.deleteEmailIdentity = function (args, optionsOrCb, cb) {
        var command = new DeleteEmailIdentityCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error("Expect http options but get " + typeof optionsOrCb);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    };
    SESv2.prototype.deleteEmailIdentityPolicy = function (args, optionsOrCb, cb) {
        var command = new DeleteEmailIdentityPolicyCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error("Expect http options but get " + typeof optionsOrCb);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    };
    SESv2.prototype.deleteEmailTemplate = function (args, optionsOrCb, cb) {
        var command = new DeleteEmailTemplateCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error("Expect http options but get " + typeof optionsOrCb);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    };
    SESv2.prototype.deleteSuppressedDestination = function (args, optionsOrCb, cb) {
        var command = new DeleteSuppressedDestinationCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error("Expect http options but get " + typeof optionsOrCb);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    };
    SESv2.prototype.getAccount = function (args, optionsOrCb, cb) {
        var command = new GetAccountCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error("Expect http options but get " + typeof optionsOrCb);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    };
    SESv2.prototype.getBlacklistReports = function (args, optionsOrCb, cb) {
        var command = new GetBlacklistReportsCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error("Expect http options but get " + typeof optionsOrCb);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    };
    SESv2.prototype.getConfigurationSet = function (args, optionsOrCb, cb) {
        var command = new GetConfigurationSetCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error("Expect http options but get " + typeof optionsOrCb);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    };
    SESv2.prototype.getConfigurationSetEventDestinations = function (args, optionsOrCb, cb) {
        var command = new GetConfigurationSetEventDestinationsCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error("Expect http options but get " + typeof optionsOrCb);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    };
    SESv2.prototype.getContact = function (args, optionsOrCb, cb) {
        var command = new GetContactCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error("Expect http options but get " + typeof optionsOrCb);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    };
    SESv2.prototype.getContactList = function (args, optionsOrCb, cb) {
        var command = new GetContactListCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error("Expect http options but get " + typeof optionsOrCb);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    };
    SESv2.prototype.getCustomVerificationEmailTemplate = function (args, optionsOrCb, cb) {
        var command = new GetCustomVerificationEmailTemplateCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error("Expect http options but get " + typeof optionsOrCb);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    };
    SESv2.prototype.getDedicatedIp = function (args, optionsOrCb, cb) {
        var command = new GetDedicatedIpCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error("Expect http options but get " + typeof optionsOrCb);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    };
    SESv2.prototype.getDedicatedIps = function (args, optionsOrCb, cb) {
        var command = new GetDedicatedIpsCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error("Expect http options but get " + typeof optionsOrCb);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    };
    SESv2.prototype.getDeliverabilityDashboardOptions = function (args, optionsOrCb, cb) {
        var command = new GetDeliverabilityDashboardOptionsCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error("Expect http options but get " + typeof optionsOrCb);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    };
    SESv2.prototype.getDeliverabilityTestReport = function (args, optionsOrCb, cb) {
        var command = new GetDeliverabilityTestReportCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error("Expect http options but get " + typeof optionsOrCb);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    };
    SESv2.prototype.getDomainDeliverabilityCampaign = function (args, optionsOrCb, cb) {
        var command = new GetDomainDeliverabilityCampaignCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error("Expect http options but get " + typeof optionsOrCb);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    };
    SESv2.prototype.getDomainStatisticsReport = function (args, optionsOrCb, cb) {
        var command = new GetDomainStatisticsReportCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error("Expect http options but get " + typeof optionsOrCb);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    };
    SESv2.prototype.getEmailIdentity = function (args, optionsOrCb, cb) {
        var command = new GetEmailIdentityCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error("Expect http options but get " + typeof optionsOrCb);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    };
    SESv2.prototype.getEmailIdentityPolicies = function (args, optionsOrCb, cb) {
        var command = new GetEmailIdentityPoliciesCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error("Expect http options but get " + typeof optionsOrCb);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    };
    SESv2.prototype.getEmailTemplate = function (args, optionsOrCb, cb) {
        var command = new GetEmailTemplateCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error("Expect http options but get " + typeof optionsOrCb);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    };
    SESv2.prototype.getImportJob = function (args, optionsOrCb, cb) {
        var command = new GetImportJobCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error("Expect http options but get " + typeof optionsOrCb);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    };
    SESv2.prototype.getSuppressedDestination = function (args, optionsOrCb, cb) {
        var command = new GetSuppressedDestinationCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error("Expect http options but get " + typeof optionsOrCb);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    };
    SESv2.prototype.listConfigurationSets = function (args, optionsOrCb, cb) {
        var command = new ListConfigurationSetsCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error("Expect http options but get " + typeof optionsOrCb);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    };
    SESv2.prototype.listContactLists = function (args, optionsOrCb, cb) {
        var command = new ListContactListsCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error("Expect http options but get " + typeof optionsOrCb);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    };
    SESv2.prototype.listContacts = function (args, optionsOrCb, cb) {
        var command = new ListContactsCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error("Expect http options but get " + typeof optionsOrCb);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    };
    SESv2.prototype.listCustomVerificationEmailTemplates = function (args, optionsOrCb, cb) {
        var command = new ListCustomVerificationEmailTemplatesCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error("Expect http options but get " + typeof optionsOrCb);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    };
    SESv2.prototype.listDedicatedIpPools = function (args, optionsOrCb, cb) {
        var command = new ListDedicatedIpPoolsCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error("Expect http options but get " + typeof optionsOrCb);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    };
    SESv2.prototype.listDeliverabilityTestReports = function (args, optionsOrCb, cb) {
        var command = new ListDeliverabilityTestReportsCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error("Expect http options but get " + typeof optionsOrCb);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    };
    SESv2.prototype.listDomainDeliverabilityCampaigns = function (args, optionsOrCb, cb) {
        var command = new ListDomainDeliverabilityCampaignsCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error("Expect http options but get " + typeof optionsOrCb);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    };
    SESv2.prototype.listEmailIdentities = function (args, optionsOrCb, cb) {
        var command = new ListEmailIdentitiesCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error("Expect http options but get " + typeof optionsOrCb);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    };
    SESv2.prototype.listEmailTemplates = function (args, optionsOrCb, cb) {
        var command = new ListEmailTemplatesCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error("Expect http options but get " + typeof optionsOrCb);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    };
    SESv2.prototype.listImportJobs = function (args, optionsOrCb, cb) {
        var command = new ListImportJobsCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error("Expect http options but get " + typeof optionsOrCb);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    };
    SESv2.prototype.listSuppressedDestinations = function (args, optionsOrCb, cb) {
        var command = new ListSuppressedDestinationsCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error("Expect http options but get " + typeof optionsOrCb);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    };
    SESv2.prototype.listTagsForResource = function (args, optionsOrCb, cb) {
        var command = new ListTagsForResourceCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error("Expect http options but get " + typeof optionsOrCb);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    };
    SESv2.prototype.putAccountDedicatedIpWarmupAttributes = function (args, optionsOrCb, cb) {
        var command = new PutAccountDedicatedIpWarmupAttributesCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error("Expect http options but get " + typeof optionsOrCb);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    };
    SESv2.prototype.putAccountDetails = function (args, optionsOrCb, cb) {
        var command = new PutAccountDetailsCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error("Expect http options but get " + typeof optionsOrCb);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    };
    SESv2.prototype.putAccountSendingAttributes = function (args, optionsOrCb, cb) {
        var command = new PutAccountSendingAttributesCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error("Expect http options but get " + typeof optionsOrCb);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    };
    SESv2.prototype.putAccountSuppressionAttributes = function (args, optionsOrCb, cb) {
        var command = new PutAccountSuppressionAttributesCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error("Expect http options but get " + typeof optionsOrCb);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    };
    SESv2.prototype.putConfigurationSetDeliveryOptions = function (args, optionsOrCb, cb) {
        var command = new PutConfigurationSetDeliveryOptionsCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error("Expect http options but get " + typeof optionsOrCb);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    };
    SESv2.prototype.putConfigurationSetReputationOptions = function (args, optionsOrCb, cb) {
        var command = new PutConfigurationSetReputationOptionsCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error("Expect http options but get " + typeof optionsOrCb);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    };
    SESv2.prototype.putConfigurationSetSendingOptions = function (args, optionsOrCb, cb) {
        var command = new PutConfigurationSetSendingOptionsCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error("Expect http options but get " + typeof optionsOrCb);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    };
    SESv2.prototype.putConfigurationSetSuppressionOptions = function (args, optionsOrCb, cb) {
        var command = new PutConfigurationSetSuppressionOptionsCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error("Expect http options but get " + typeof optionsOrCb);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    };
    SESv2.prototype.putConfigurationSetTrackingOptions = function (args, optionsOrCb, cb) {
        var command = new PutConfigurationSetTrackingOptionsCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error("Expect http options but get " + typeof optionsOrCb);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    };
    SESv2.prototype.putDedicatedIpInPool = function (args, optionsOrCb, cb) {
        var command = new PutDedicatedIpInPoolCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error("Expect http options but get " + typeof optionsOrCb);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    };
    SESv2.prototype.putDedicatedIpWarmupAttributes = function (args, optionsOrCb, cb) {
        var command = new PutDedicatedIpWarmupAttributesCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error("Expect http options but get " + typeof optionsOrCb);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    };
    SESv2.prototype.putDeliverabilityDashboardOption = function (args, optionsOrCb, cb) {
        var command = new PutDeliverabilityDashboardOptionCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error("Expect http options but get " + typeof optionsOrCb);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    };
    SESv2.prototype.putEmailIdentityConfigurationSetAttributes = function (args, optionsOrCb, cb) {
        var command = new PutEmailIdentityConfigurationSetAttributesCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error("Expect http options but get " + typeof optionsOrCb);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    };
    SESv2.prototype.putEmailIdentityDkimAttributes = function (args, optionsOrCb, cb) {
        var command = new PutEmailIdentityDkimAttributesCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error("Expect http options but get " + typeof optionsOrCb);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    };
    SESv2.prototype.putEmailIdentityDkimSigningAttributes = function (args, optionsOrCb, cb) {
        var command = new PutEmailIdentityDkimSigningAttributesCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error("Expect http options but get " + typeof optionsOrCb);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    };
    SESv2.prototype.putEmailIdentityFeedbackAttributes = function (args, optionsOrCb, cb) {
        var command = new PutEmailIdentityFeedbackAttributesCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error("Expect http options but get " + typeof optionsOrCb);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    };
    SESv2.prototype.putEmailIdentityMailFromAttributes = function (args, optionsOrCb, cb) {
        var command = new PutEmailIdentityMailFromAttributesCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error("Expect http options but get " + typeof optionsOrCb);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    };
    SESv2.prototype.putSuppressedDestination = function (args, optionsOrCb, cb) {
        var command = new PutSuppressedDestinationCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error("Expect http options but get " + typeof optionsOrCb);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    };
    SESv2.prototype.sendBulkEmail = function (args, optionsOrCb, cb) {
        var command = new SendBulkEmailCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error("Expect http options but get " + typeof optionsOrCb);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    };
    SESv2.prototype.sendCustomVerificationEmail = function (args, optionsOrCb, cb) {
        var command = new SendCustomVerificationEmailCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error("Expect http options but get " + typeof optionsOrCb);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    };
    SESv2.prototype.sendEmail = function (args, optionsOrCb, cb) {
        var command = new SendEmailCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error("Expect http options but get " + typeof optionsOrCb);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    };
    SESv2.prototype.tagResource = function (args, optionsOrCb, cb) {
        var command = new TagResourceCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error("Expect http options but get " + typeof optionsOrCb);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    };
    SESv2.prototype.testRenderEmailTemplate = function (args, optionsOrCb, cb) {
        var command = new TestRenderEmailTemplateCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error("Expect http options but get " + typeof optionsOrCb);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    };
    SESv2.prototype.untagResource = function (args, optionsOrCb, cb) {
        var command = new UntagResourceCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error("Expect http options but get " + typeof optionsOrCb);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    };
    SESv2.prototype.updateConfigurationSetEventDestination = function (args, optionsOrCb, cb) {
        var command = new UpdateConfigurationSetEventDestinationCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error("Expect http options but get " + typeof optionsOrCb);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    };
    SESv2.prototype.updateContact = function (args, optionsOrCb, cb) {
        var command = new UpdateContactCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error("Expect http options but get " + typeof optionsOrCb);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    };
    SESv2.prototype.updateContactList = function (args, optionsOrCb, cb) {
        var command = new UpdateContactListCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error("Expect http options but get " + typeof optionsOrCb);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    };
    SESv2.prototype.updateCustomVerificationEmailTemplate = function (args, optionsOrCb, cb) {
        var command = new UpdateCustomVerificationEmailTemplateCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error("Expect http options but get " + typeof optionsOrCb);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    };
    SESv2.prototype.updateEmailIdentityPolicy = function (args, optionsOrCb, cb) {
        var command = new UpdateEmailIdentityPolicyCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error("Expect http options but get " + typeof optionsOrCb);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    };
    SESv2.prototype.updateEmailTemplate = function (args, optionsOrCb, cb) {
        var command = new UpdateEmailTemplateCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error("Expect http options but get " + typeof optionsOrCb);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    };
    return SESv2;
}(SESv2Client));
export { SESv2 };
//# sourceMappingURL=SESv2.js.map