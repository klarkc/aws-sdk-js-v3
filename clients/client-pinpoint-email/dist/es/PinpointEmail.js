import { __extends } from "tslib";
import { PinpointEmailClient } from "./PinpointEmailClient";
import { CreateConfigurationSetCommand, } from "./commands/CreateConfigurationSetCommand";
import { CreateConfigurationSetEventDestinationCommand, } from "./commands/CreateConfigurationSetEventDestinationCommand";
import { CreateDedicatedIpPoolCommand, } from "./commands/CreateDedicatedIpPoolCommand";
import { CreateDeliverabilityTestReportCommand, } from "./commands/CreateDeliverabilityTestReportCommand";
import { CreateEmailIdentityCommand, } from "./commands/CreateEmailIdentityCommand";
import { DeleteConfigurationSetCommand, } from "./commands/DeleteConfigurationSetCommand";
import { DeleteConfigurationSetEventDestinationCommand, } from "./commands/DeleteConfigurationSetEventDestinationCommand";
import { DeleteDedicatedIpPoolCommand, } from "./commands/DeleteDedicatedIpPoolCommand";
import { DeleteEmailIdentityCommand, } from "./commands/DeleteEmailIdentityCommand";
import { GetAccountCommand } from "./commands/GetAccountCommand";
import { GetBlacklistReportsCommand, } from "./commands/GetBlacklistReportsCommand";
import { GetConfigurationSetCommand, } from "./commands/GetConfigurationSetCommand";
import { GetConfigurationSetEventDestinationsCommand, } from "./commands/GetConfigurationSetEventDestinationsCommand";
import { GetDedicatedIpCommand, } from "./commands/GetDedicatedIpCommand";
import { GetDedicatedIpsCommand, } from "./commands/GetDedicatedIpsCommand";
import { GetDeliverabilityDashboardOptionsCommand, } from "./commands/GetDeliverabilityDashboardOptionsCommand";
import { GetDeliverabilityTestReportCommand, } from "./commands/GetDeliverabilityTestReportCommand";
import { GetDomainDeliverabilityCampaignCommand, } from "./commands/GetDomainDeliverabilityCampaignCommand";
import { GetDomainStatisticsReportCommand, } from "./commands/GetDomainStatisticsReportCommand";
import { GetEmailIdentityCommand, } from "./commands/GetEmailIdentityCommand";
import { ListConfigurationSetsCommand, } from "./commands/ListConfigurationSetsCommand";
import { ListDedicatedIpPoolsCommand, } from "./commands/ListDedicatedIpPoolsCommand";
import { ListDeliverabilityTestReportsCommand, } from "./commands/ListDeliverabilityTestReportsCommand";
import { ListDomainDeliverabilityCampaignsCommand, } from "./commands/ListDomainDeliverabilityCampaignsCommand";
import { ListEmailIdentitiesCommand, } from "./commands/ListEmailIdentitiesCommand";
import { ListTagsForResourceCommand, } from "./commands/ListTagsForResourceCommand";
import { PutAccountDedicatedIpWarmupAttributesCommand, } from "./commands/PutAccountDedicatedIpWarmupAttributesCommand";
import { PutAccountSendingAttributesCommand, } from "./commands/PutAccountSendingAttributesCommand";
import { PutConfigurationSetDeliveryOptionsCommand, } from "./commands/PutConfigurationSetDeliveryOptionsCommand";
import { PutConfigurationSetReputationOptionsCommand, } from "./commands/PutConfigurationSetReputationOptionsCommand";
import { PutConfigurationSetSendingOptionsCommand, } from "./commands/PutConfigurationSetSendingOptionsCommand";
import { PutConfigurationSetTrackingOptionsCommand, } from "./commands/PutConfigurationSetTrackingOptionsCommand";
import { PutDedicatedIpInPoolCommand, } from "./commands/PutDedicatedIpInPoolCommand";
import { PutDedicatedIpWarmupAttributesCommand, } from "./commands/PutDedicatedIpWarmupAttributesCommand";
import { PutDeliverabilityDashboardOptionCommand, } from "./commands/PutDeliverabilityDashboardOptionCommand";
import { PutEmailIdentityDkimAttributesCommand, } from "./commands/PutEmailIdentityDkimAttributesCommand";
import { PutEmailIdentityFeedbackAttributesCommand, } from "./commands/PutEmailIdentityFeedbackAttributesCommand";
import { PutEmailIdentityMailFromAttributesCommand, } from "./commands/PutEmailIdentityMailFromAttributesCommand";
import { SendEmailCommand } from "./commands/SendEmailCommand";
import { TagResourceCommand } from "./commands/TagResourceCommand";
import { UntagResourceCommand, } from "./commands/UntagResourceCommand";
import { UpdateConfigurationSetEventDestinationCommand, } from "./commands/UpdateConfigurationSetEventDestinationCommand";
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
var PinpointEmail = /** @class */ (function (_super) {
    __extends(PinpointEmail, _super);
    function PinpointEmail() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    PinpointEmail.prototype.createConfigurationSet = function (args, optionsOrCb, cb) {
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
    PinpointEmail.prototype.createConfigurationSetEventDestination = function (args, optionsOrCb, cb) {
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
    PinpointEmail.prototype.createDedicatedIpPool = function (args, optionsOrCb, cb) {
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
    PinpointEmail.prototype.createDeliverabilityTestReport = function (args, optionsOrCb, cb) {
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
    PinpointEmail.prototype.createEmailIdentity = function (args, optionsOrCb, cb) {
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
    PinpointEmail.prototype.deleteConfigurationSet = function (args, optionsOrCb, cb) {
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
    PinpointEmail.prototype.deleteConfigurationSetEventDestination = function (args, optionsOrCb, cb) {
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
    PinpointEmail.prototype.deleteDedicatedIpPool = function (args, optionsOrCb, cb) {
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
    PinpointEmail.prototype.deleteEmailIdentity = function (args, optionsOrCb, cb) {
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
    PinpointEmail.prototype.getAccount = function (args, optionsOrCb, cb) {
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
    PinpointEmail.prototype.getBlacklistReports = function (args, optionsOrCb, cb) {
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
    PinpointEmail.prototype.getConfigurationSet = function (args, optionsOrCb, cb) {
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
    PinpointEmail.prototype.getConfigurationSetEventDestinations = function (args, optionsOrCb, cb) {
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
    PinpointEmail.prototype.getDedicatedIp = function (args, optionsOrCb, cb) {
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
    PinpointEmail.prototype.getDedicatedIps = function (args, optionsOrCb, cb) {
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
    PinpointEmail.prototype.getDeliverabilityDashboardOptions = function (args, optionsOrCb, cb) {
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
    PinpointEmail.prototype.getDeliverabilityTestReport = function (args, optionsOrCb, cb) {
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
    PinpointEmail.prototype.getDomainDeliverabilityCampaign = function (args, optionsOrCb, cb) {
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
    PinpointEmail.prototype.getDomainStatisticsReport = function (args, optionsOrCb, cb) {
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
    PinpointEmail.prototype.getEmailIdentity = function (args, optionsOrCb, cb) {
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
    PinpointEmail.prototype.listConfigurationSets = function (args, optionsOrCb, cb) {
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
    PinpointEmail.prototype.listDedicatedIpPools = function (args, optionsOrCb, cb) {
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
    PinpointEmail.prototype.listDeliverabilityTestReports = function (args, optionsOrCb, cb) {
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
    PinpointEmail.prototype.listDomainDeliverabilityCampaigns = function (args, optionsOrCb, cb) {
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
    PinpointEmail.prototype.listEmailIdentities = function (args, optionsOrCb, cb) {
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
    PinpointEmail.prototype.listTagsForResource = function (args, optionsOrCb, cb) {
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
    PinpointEmail.prototype.putAccountDedicatedIpWarmupAttributes = function (args, optionsOrCb, cb) {
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
    PinpointEmail.prototype.putAccountSendingAttributes = function (args, optionsOrCb, cb) {
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
    PinpointEmail.prototype.putConfigurationSetDeliveryOptions = function (args, optionsOrCb, cb) {
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
    PinpointEmail.prototype.putConfigurationSetReputationOptions = function (args, optionsOrCb, cb) {
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
    PinpointEmail.prototype.putConfigurationSetSendingOptions = function (args, optionsOrCb, cb) {
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
    PinpointEmail.prototype.putConfigurationSetTrackingOptions = function (args, optionsOrCb, cb) {
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
    PinpointEmail.prototype.putDedicatedIpInPool = function (args, optionsOrCb, cb) {
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
    PinpointEmail.prototype.putDedicatedIpWarmupAttributes = function (args, optionsOrCb, cb) {
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
    PinpointEmail.prototype.putDeliverabilityDashboardOption = function (args, optionsOrCb, cb) {
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
    PinpointEmail.prototype.putEmailIdentityDkimAttributes = function (args, optionsOrCb, cb) {
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
    PinpointEmail.prototype.putEmailIdentityFeedbackAttributes = function (args, optionsOrCb, cb) {
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
    PinpointEmail.prototype.putEmailIdentityMailFromAttributes = function (args, optionsOrCb, cb) {
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
    PinpointEmail.prototype.sendEmail = function (args, optionsOrCb, cb) {
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
    PinpointEmail.prototype.tagResource = function (args, optionsOrCb, cb) {
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
    PinpointEmail.prototype.untagResource = function (args, optionsOrCb, cb) {
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
    PinpointEmail.prototype.updateConfigurationSetEventDestination = function (args, optionsOrCb, cb) {
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
    return PinpointEmail;
}(PinpointEmailClient));
export { PinpointEmail };
//# sourceMappingURL=PinpointEmail.js.map