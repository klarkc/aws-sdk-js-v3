import { __extends } from "tslib";
import { SESClient } from "./SESClient";
import { CloneReceiptRuleSetCommand, } from "./commands/CloneReceiptRuleSetCommand";
import { CreateConfigurationSetCommand, } from "./commands/CreateConfigurationSetCommand";
import { CreateConfigurationSetEventDestinationCommand, } from "./commands/CreateConfigurationSetEventDestinationCommand";
import { CreateConfigurationSetTrackingOptionsCommand, } from "./commands/CreateConfigurationSetTrackingOptionsCommand";
import { CreateCustomVerificationEmailTemplateCommand, } from "./commands/CreateCustomVerificationEmailTemplateCommand";
import { CreateReceiptFilterCommand, } from "./commands/CreateReceiptFilterCommand";
import { CreateReceiptRuleCommand, } from "./commands/CreateReceiptRuleCommand";
import { CreateReceiptRuleSetCommand, } from "./commands/CreateReceiptRuleSetCommand";
import { CreateTemplateCommand, } from "./commands/CreateTemplateCommand";
import { DeleteConfigurationSetCommand, } from "./commands/DeleteConfigurationSetCommand";
import { DeleteConfigurationSetEventDestinationCommand, } from "./commands/DeleteConfigurationSetEventDestinationCommand";
import { DeleteConfigurationSetTrackingOptionsCommand, } from "./commands/DeleteConfigurationSetTrackingOptionsCommand";
import { DeleteCustomVerificationEmailTemplateCommand, } from "./commands/DeleteCustomVerificationEmailTemplateCommand";
import { DeleteIdentityCommand, } from "./commands/DeleteIdentityCommand";
import { DeleteIdentityPolicyCommand, } from "./commands/DeleteIdentityPolicyCommand";
import { DeleteReceiptFilterCommand, } from "./commands/DeleteReceiptFilterCommand";
import { DeleteReceiptRuleCommand, } from "./commands/DeleteReceiptRuleCommand";
import { DeleteReceiptRuleSetCommand, } from "./commands/DeleteReceiptRuleSetCommand";
import { DeleteTemplateCommand, } from "./commands/DeleteTemplateCommand";
import { DeleteVerifiedEmailAddressCommand, } from "./commands/DeleteVerifiedEmailAddressCommand";
import { DescribeActiveReceiptRuleSetCommand, } from "./commands/DescribeActiveReceiptRuleSetCommand";
import { DescribeConfigurationSetCommand, } from "./commands/DescribeConfigurationSetCommand";
import { DescribeReceiptRuleCommand, } from "./commands/DescribeReceiptRuleCommand";
import { DescribeReceiptRuleSetCommand, } from "./commands/DescribeReceiptRuleSetCommand";
import { GetAccountSendingEnabledCommand, } from "./commands/GetAccountSendingEnabledCommand";
import { GetCustomVerificationEmailTemplateCommand, } from "./commands/GetCustomVerificationEmailTemplateCommand";
import { GetIdentityDkimAttributesCommand, } from "./commands/GetIdentityDkimAttributesCommand";
import { GetIdentityMailFromDomainAttributesCommand, } from "./commands/GetIdentityMailFromDomainAttributesCommand";
import { GetIdentityNotificationAttributesCommand, } from "./commands/GetIdentityNotificationAttributesCommand";
import { GetIdentityPoliciesCommand, } from "./commands/GetIdentityPoliciesCommand";
import { GetIdentityVerificationAttributesCommand, } from "./commands/GetIdentityVerificationAttributesCommand";
import { GetSendQuotaCommand, } from "./commands/GetSendQuotaCommand";
import { GetSendStatisticsCommand, } from "./commands/GetSendStatisticsCommand";
import { GetTemplateCommand } from "./commands/GetTemplateCommand";
import { ListConfigurationSetsCommand, } from "./commands/ListConfigurationSetsCommand";
import { ListCustomVerificationEmailTemplatesCommand, } from "./commands/ListCustomVerificationEmailTemplatesCommand";
import { ListIdentitiesCommand, } from "./commands/ListIdentitiesCommand";
import { ListIdentityPoliciesCommand, } from "./commands/ListIdentityPoliciesCommand";
import { ListReceiptFiltersCommand, } from "./commands/ListReceiptFiltersCommand";
import { ListReceiptRuleSetsCommand, } from "./commands/ListReceiptRuleSetsCommand";
import { ListTemplatesCommand, } from "./commands/ListTemplatesCommand";
import { ListVerifiedEmailAddressesCommand, } from "./commands/ListVerifiedEmailAddressesCommand";
import { PutConfigurationSetDeliveryOptionsCommand, } from "./commands/PutConfigurationSetDeliveryOptionsCommand";
import { PutIdentityPolicyCommand, } from "./commands/PutIdentityPolicyCommand";
import { ReorderReceiptRuleSetCommand, } from "./commands/ReorderReceiptRuleSetCommand";
import { SendBounceCommand } from "./commands/SendBounceCommand";
import { SendBulkTemplatedEmailCommand, } from "./commands/SendBulkTemplatedEmailCommand";
import { SendCustomVerificationEmailCommand, } from "./commands/SendCustomVerificationEmailCommand";
import { SendEmailCommand } from "./commands/SendEmailCommand";
import { SendRawEmailCommand, } from "./commands/SendRawEmailCommand";
import { SendTemplatedEmailCommand, } from "./commands/SendTemplatedEmailCommand";
import { SetActiveReceiptRuleSetCommand, } from "./commands/SetActiveReceiptRuleSetCommand";
import { SetIdentityDkimEnabledCommand, } from "./commands/SetIdentityDkimEnabledCommand";
import { SetIdentityFeedbackForwardingEnabledCommand, } from "./commands/SetIdentityFeedbackForwardingEnabledCommand";
import { SetIdentityHeadersInNotificationsEnabledCommand, } from "./commands/SetIdentityHeadersInNotificationsEnabledCommand";
import { SetIdentityMailFromDomainCommand, } from "./commands/SetIdentityMailFromDomainCommand";
import { SetIdentityNotificationTopicCommand, } from "./commands/SetIdentityNotificationTopicCommand";
import { SetReceiptRulePositionCommand, } from "./commands/SetReceiptRulePositionCommand";
import { TestRenderTemplateCommand, } from "./commands/TestRenderTemplateCommand";
import { UpdateAccountSendingEnabledCommand, } from "./commands/UpdateAccountSendingEnabledCommand";
import { UpdateConfigurationSetEventDestinationCommand, } from "./commands/UpdateConfigurationSetEventDestinationCommand";
import { UpdateConfigurationSetReputationMetricsEnabledCommand, } from "./commands/UpdateConfigurationSetReputationMetricsEnabledCommand";
import { UpdateConfigurationSetSendingEnabledCommand, } from "./commands/UpdateConfigurationSetSendingEnabledCommand";
import { UpdateConfigurationSetTrackingOptionsCommand, } from "./commands/UpdateConfigurationSetTrackingOptionsCommand";
import { UpdateCustomVerificationEmailTemplateCommand, } from "./commands/UpdateCustomVerificationEmailTemplateCommand";
import { UpdateReceiptRuleCommand, } from "./commands/UpdateReceiptRuleCommand";
import { UpdateTemplateCommand, } from "./commands/UpdateTemplateCommand";
import { VerifyDomainDkimCommand, } from "./commands/VerifyDomainDkimCommand";
import { VerifyDomainIdentityCommand, } from "./commands/VerifyDomainIdentityCommand";
import { VerifyEmailAddressCommand, } from "./commands/VerifyEmailAddressCommand";
import { VerifyEmailIdentityCommand, } from "./commands/VerifyEmailIdentityCommand";
/**
 * <fullname>Amazon Simple Email Service</fullname>
 *         <p> This document contains reference information for the <a href="https://aws.amazon.com/ses/">Amazon Simple Email Service</a> (Amazon SES) API, version
 *             2010-12-01. This document is best used in conjunction with the <a href="https://docs.aws.amazon.com/ses/latest/DeveloperGuide/Welcome.html">Amazon SES Developer
 *                 Guide</a>. </p>
 *         <note>
 *             <p> For a list of Amazon SES endpoints to use in service requests, see <a href="https://docs.aws.amazon.com/ses/latest/DeveloperGuide/regions.html">Regions and
 *                     Amazon SES</a> in the <a href="https://docs.aws.amazon.com/ses/latest/DeveloperGuide/Welcome.html">Amazon SES Developer
 *                 Guide</a>.</p>
 *         </note>
 */
var SES = /** @class */ (function (_super) {
    __extends(SES, _super);
    function SES() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    SES.prototype.cloneReceiptRuleSet = function (args, optionsOrCb, cb) {
        var command = new CloneReceiptRuleSetCommand(args);
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
    SES.prototype.createConfigurationSet = function (args, optionsOrCb, cb) {
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
    SES.prototype.createConfigurationSetEventDestination = function (args, optionsOrCb, cb) {
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
    SES.prototype.createConfigurationSetTrackingOptions = function (args, optionsOrCb, cb) {
        var command = new CreateConfigurationSetTrackingOptionsCommand(args);
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
    SES.prototype.createCustomVerificationEmailTemplate = function (args, optionsOrCb, cb) {
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
    SES.prototype.createReceiptFilter = function (args, optionsOrCb, cb) {
        var command = new CreateReceiptFilterCommand(args);
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
    SES.prototype.createReceiptRule = function (args, optionsOrCb, cb) {
        var command = new CreateReceiptRuleCommand(args);
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
    SES.prototype.createReceiptRuleSet = function (args, optionsOrCb, cb) {
        var command = new CreateReceiptRuleSetCommand(args);
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
    SES.prototype.createTemplate = function (args, optionsOrCb, cb) {
        var command = new CreateTemplateCommand(args);
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
    SES.prototype.deleteConfigurationSet = function (args, optionsOrCb, cb) {
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
    SES.prototype.deleteConfigurationSetEventDestination = function (args, optionsOrCb, cb) {
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
    SES.prototype.deleteConfigurationSetTrackingOptions = function (args, optionsOrCb, cb) {
        var command = new DeleteConfigurationSetTrackingOptionsCommand(args);
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
    SES.prototype.deleteCustomVerificationEmailTemplate = function (args, optionsOrCb, cb) {
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
    SES.prototype.deleteIdentity = function (args, optionsOrCb, cb) {
        var command = new DeleteIdentityCommand(args);
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
    SES.prototype.deleteIdentityPolicy = function (args, optionsOrCb, cb) {
        var command = new DeleteIdentityPolicyCommand(args);
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
    SES.prototype.deleteReceiptFilter = function (args, optionsOrCb, cb) {
        var command = new DeleteReceiptFilterCommand(args);
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
    SES.prototype.deleteReceiptRule = function (args, optionsOrCb, cb) {
        var command = new DeleteReceiptRuleCommand(args);
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
    SES.prototype.deleteReceiptRuleSet = function (args, optionsOrCb, cb) {
        var command = new DeleteReceiptRuleSetCommand(args);
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
    SES.prototype.deleteTemplate = function (args, optionsOrCb, cb) {
        var command = new DeleteTemplateCommand(args);
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
    SES.prototype.deleteVerifiedEmailAddress = function (args, optionsOrCb, cb) {
        var command = new DeleteVerifiedEmailAddressCommand(args);
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
    SES.prototype.describeActiveReceiptRuleSet = function (args, optionsOrCb, cb) {
        var command = new DescribeActiveReceiptRuleSetCommand(args);
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
    SES.prototype.describeConfigurationSet = function (args, optionsOrCb, cb) {
        var command = new DescribeConfigurationSetCommand(args);
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
    SES.prototype.describeReceiptRule = function (args, optionsOrCb, cb) {
        var command = new DescribeReceiptRuleCommand(args);
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
    SES.prototype.describeReceiptRuleSet = function (args, optionsOrCb, cb) {
        var command = new DescribeReceiptRuleSetCommand(args);
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
    SES.prototype.getAccountSendingEnabled = function (args, optionsOrCb, cb) {
        var command = new GetAccountSendingEnabledCommand(args);
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
    SES.prototype.getCustomVerificationEmailTemplate = function (args, optionsOrCb, cb) {
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
    SES.prototype.getIdentityDkimAttributes = function (args, optionsOrCb, cb) {
        var command = new GetIdentityDkimAttributesCommand(args);
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
    SES.prototype.getIdentityMailFromDomainAttributes = function (args, optionsOrCb, cb) {
        var command = new GetIdentityMailFromDomainAttributesCommand(args);
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
    SES.prototype.getIdentityNotificationAttributes = function (args, optionsOrCb, cb) {
        var command = new GetIdentityNotificationAttributesCommand(args);
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
    SES.prototype.getIdentityPolicies = function (args, optionsOrCb, cb) {
        var command = new GetIdentityPoliciesCommand(args);
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
    SES.prototype.getIdentityVerificationAttributes = function (args, optionsOrCb, cb) {
        var command = new GetIdentityVerificationAttributesCommand(args);
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
    SES.prototype.getSendQuota = function (args, optionsOrCb, cb) {
        var command = new GetSendQuotaCommand(args);
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
    SES.prototype.getSendStatistics = function (args, optionsOrCb, cb) {
        var command = new GetSendStatisticsCommand(args);
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
    SES.prototype.getTemplate = function (args, optionsOrCb, cb) {
        var command = new GetTemplateCommand(args);
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
    SES.prototype.listConfigurationSets = function (args, optionsOrCb, cb) {
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
    SES.prototype.listCustomVerificationEmailTemplates = function (args, optionsOrCb, cb) {
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
    SES.prototype.listIdentities = function (args, optionsOrCb, cb) {
        var command = new ListIdentitiesCommand(args);
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
    SES.prototype.listIdentityPolicies = function (args, optionsOrCb, cb) {
        var command = new ListIdentityPoliciesCommand(args);
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
    SES.prototype.listReceiptFilters = function (args, optionsOrCb, cb) {
        var command = new ListReceiptFiltersCommand(args);
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
    SES.prototype.listReceiptRuleSets = function (args, optionsOrCb, cb) {
        var command = new ListReceiptRuleSetsCommand(args);
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
    SES.prototype.listTemplates = function (args, optionsOrCb, cb) {
        var command = new ListTemplatesCommand(args);
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
    SES.prototype.listVerifiedEmailAddresses = function (args, optionsOrCb, cb) {
        var command = new ListVerifiedEmailAddressesCommand(args);
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
    SES.prototype.putConfigurationSetDeliveryOptions = function (args, optionsOrCb, cb) {
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
    SES.prototype.putIdentityPolicy = function (args, optionsOrCb, cb) {
        var command = new PutIdentityPolicyCommand(args);
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
    SES.prototype.reorderReceiptRuleSet = function (args, optionsOrCb, cb) {
        var command = new ReorderReceiptRuleSetCommand(args);
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
    SES.prototype.sendBounce = function (args, optionsOrCb, cb) {
        var command = new SendBounceCommand(args);
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
    SES.prototype.sendBulkTemplatedEmail = function (args, optionsOrCb, cb) {
        var command = new SendBulkTemplatedEmailCommand(args);
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
    SES.prototype.sendCustomVerificationEmail = function (args, optionsOrCb, cb) {
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
    SES.prototype.sendEmail = function (args, optionsOrCb, cb) {
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
    SES.prototype.sendRawEmail = function (args, optionsOrCb, cb) {
        var command = new SendRawEmailCommand(args);
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
    SES.prototype.sendTemplatedEmail = function (args, optionsOrCb, cb) {
        var command = new SendTemplatedEmailCommand(args);
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
    SES.prototype.setActiveReceiptRuleSet = function (args, optionsOrCb, cb) {
        var command = new SetActiveReceiptRuleSetCommand(args);
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
    SES.prototype.setIdentityDkimEnabled = function (args, optionsOrCb, cb) {
        var command = new SetIdentityDkimEnabledCommand(args);
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
    SES.prototype.setIdentityFeedbackForwardingEnabled = function (args, optionsOrCb, cb) {
        var command = new SetIdentityFeedbackForwardingEnabledCommand(args);
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
    SES.prototype.setIdentityHeadersInNotificationsEnabled = function (args, optionsOrCb, cb) {
        var command = new SetIdentityHeadersInNotificationsEnabledCommand(args);
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
    SES.prototype.setIdentityMailFromDomain = function (args, optionsOrCb, cb) {
        var command = new SetIdentityMailFromDomainCommand(args);
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
    SES.prototype.setIdentityNotificationTopic = function (args, optionsOrCb, cb) {
        var command = new SetIdentityNotificationTopicCommand(args);
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
    SES.prototype.setReceiptRulePosition = function (args, optionsOrCb, cb) {
        var command = new SetReceiptRulePositionCommand(args);
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
    SES.prototype.testRenderTemplate = function (args, optionsOrCb, cb) {
        var command = new TestRenderTemplateCommand(args);
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
    SES.prototype.updateAccountSendingEnabled = function (args, optionsOrCb, cb) {
        var command = new UpdateAccountSendingEnabledCommand(args);
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
    SES.prototype.updateConfigurationSetEventDestination = function (args, optionsOrCb, cb) {
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
    SES.prototype.updateConfigurationSetReputationMetricsEnabled = function (args, optionsOrCb, cb) {
        var command = new UpdateConfigurationSetReputationMetricsEnabledCommand(args);
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
    SES.prototype.updateConfigurationSetSendingEnabled = function (args, optionsOrCb, cb) {
        var command = new UpdateConfigurationSetSendingEnabledCommand(args);
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
    SES.prototype.updateConfigurationSetTrackingOptions = function (args, optionsOrCb, cb) {
        var command = new UpdateConfigurationSetTrackingOptionsCommand(args);
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
    SES.prototype.updateCustomVerificationEmailTemplate = function (args, optionsOrCb, cb) {
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
    SES.prototype.updateReceiptRule = function (args, optionsOrCb, cb) {
        var command = new UpdateReceiptRuleCommand(args);
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
    SES.prototype.updateTemplate = function (args, optionsOrCb, cb) {
        var command = new UpdateTemplateCommand(args);
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
    SES.prototype.verifyDomainDkim = function (args, optionsOrCb, cb) {
        var command = new VerifyDomainDkimCommand(args);
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
    SES.prototype.verifyDomainIdentity = function (args, optionsOrCb, cb) {
        var command = new VerifyDomainIdentityCommand(args);
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
    SES.prototype.verifyEmailAddress = function (args, optionsOrCb, cb) {
        var command = new VerifyEmailAddressCommand(args);
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
    SES.prototype.verifyEmailIdentity = function (args, optionsOrCb, cb) {
        var command = new VerifyEmailIdentityCommand(args);
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
    return SES;
}(SESClient));
export { SES };
//# sourceMappingURL=SES.js.map