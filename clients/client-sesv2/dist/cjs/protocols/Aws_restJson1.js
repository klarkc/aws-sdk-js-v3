"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.serializeAws_restJson1ListSuppressedDestinationsCommand = exports.serializeAws_restJson1ListImportJobsCommand = exports.serializeAws_restJson1ListEmailTemplatesCommand = exports.serializeAws_restJson1ListEmailIdentitiesCommand = exports.serializeAws_restJson1ListDomainDeliverabilityCampaignsCommand = exports.serializeAws_restJson1ListDeliverabilityTestReportsCommand = exports.serializeAws_restJson1ListDedicatedIpPoolsCommand = exports.serializeAws_restJson1ListCustomVerificationEmailTemplatesCommand = exports.serializeAws_restJson1ListContactsCommand = exports.serializeAws_restJson1ListContactListsCommand = exports.serializeAws_restJson1ListConfigurationSetsCommand = exports.serializeAws_restJson1GetSuppressedDestinationCommand = exports.serializeAws_restJson1GetImportJobCommand = exports.serializeAws_restJson1GetEmailTemplateCommand = exports.serializeAws_restJson1GetEmailIdentityPoliciesCommand = exports.serializeAws_restJson1GetEmailIdentityCommand = exports.serializeAws_restJson1GetDomainStatisticsReportCommand = exports.serializeAws_restJson1GetDomainDeliverabilityCampaignCommand = exports.serializeAws_restJson1GetDeliverabilityTestReportCommand = exports.serializeAws_restJson1GetDeliverabilityDashboardOptionsCommand = exports.serializeAws_restJson1GetDedicatedIpsCommand = exports.serializeAws_restJson1GetDedicatedIpCommand = exports.serializeAws_restJson1GetCustomVerificationEmailTemplateCommand = exports.serializeAws_restJson1GetContactListCommand = exports.serializeAws_restJson1GetContactCommand = exports.serializeAws_restJson1GetConfigurationSetEventDestinationsCommand = exports.serializeAws_restJson1GetConfigurationSetCommand = exports.serializeAws_restJson1GetBlacklistReportsCommand = exports.serializeAws_restJson1GetAccountCommand = exports.serializeAws_restJson1DeleteSuppressedDestinationCommand = exports.serializeAws_restJson1DeleteEmailTemplateCommand = exports.serializeAws_restJson1DeleteEmailIdentityPolicyCommand = exports.serializeAws_restJson1DeleteEmailIdentityCommand = exports.serializeAws_restJson1DeleteDedicatedIpPoolCommand = exports.serializeAws_restJson1DeleteCustomVerificationEmailTemplateCommand = exports.serializeAws_restJson1DeleteContactListCommand = exports.serializeAws_restJson1DeleteContactCommand = exports.serializeAws_restJson1DeleteConfigurationSetEventDestinationCommand = exports.serializeAws_restJson1DeleteConfigurationSetCommand = exports.serializeAws_restJson1CreateImportJobCommand = exports.serializeAws_restJson1CreateEmailTemplateCommand = exports.serializeAws_restJson1CreateEmailIdentityPolicyCommand = exports.serializeAws_restJson1CreateEmailIdentityCommand = exports.serializeAws_restJson1CreateDeliverabilityTestReportCommand = exports.serializeAws_restJson1CreateDedicatedIpPoolCommand = exports.serializeAws_restJson1CreateCustomVerificationEmailTemplateCommand = exports.serializeAws_restJson1CreateContactListCommand = exports.serializeAws_restJson1CreateContactCommand = exports.serializeAws_restJson1CreateConfigurationSetEventDestinationCommand = exports.serializeAws_restJson1CreateConfigurationSetCommand = void 0;
exports.deserializeAws_restJson1DeleteEmailIdentityPolicyCommand = exports.deserializeAws_restJson1DeleteEmailIdentityCommand = exports.deserializeAws_restJson1DeleteDedicatedIpPoolCommand = exports.deserializeAws_restJson1DeleteCustomVerificationEmailTemplateCommand = exports.deserializeAws_restJson1DeleteContactListCommand = exports.deserializeAws_restJson1DeleteContactCommand = exports.deserializeAws_restJson1DeleteConfigurationSetEventDestinationCommand = exports.deserializeAws_restJson1DeleteConfigurationSetCommand = exports.deserializeAws_restJson1CreateImportJobCommand = exports.deserializeAws_restJson1CreateEmailTemplateCommand = exports.deserializeAws_restJson1CreateEmailIdentityPolicyCommand = exports.deserializeAws_restJson1CreateEmailIdentityCommand = exports.deserializeAws_restJson1CreateDeliverabilityTestReportCommand = exports.deserializeAws_restJson1CreateDedicatedIpPoolCommand = exports.deserializeAws_restJson1CreateCustomVerificationEmailTemplateCommand = exports.deserializeAws_restJson1CreateContactListCommand = exports.deserializeAws_restJson1CreateContactCommand = exports.deserializeAws_restJson1CreateConfigurationSetEventDestinationCommand = exports.deserializeAws_restJson1CreateConfigurationSetCommand = exports.serializeAws_restJson1UpdateEmailTemplateCommand = exports.serializeAws_restJson1UpdateEmailIdentityPolicyCommand = exports.serializeAws_restJson1UpdateCustomVerificationEmailTemplateCommand = exports.serializeAws_restJson1UpdateContactListCommand = exports.serializeAws_restJson1UpdateContactCommand = exports.serializeAws_restJson1UpdateConfigurationSetEventDestinationCommand = exports.serializeAws_restJson1UntagResourceCommand = exports.serializeAws_restJson1TestRenderEmailTemplateCommand = exports.serializeAws_restJson1TagResourceCommand = exports.serializeAws_restJson1SendEmailCommand = exports.serializeAws_restJson1SendCustomVerificationEmailCommand = exports.serializeAws_restJson1SendBulkEmailCommand = exports.serializeAws_restJson1PutSuppressedDestinationCommand = exports.serializeAws_restJson1PutEmailIdentityMailFromAttributesCommand = exports.serializeAws_restJson1PutEmailIdentityFeedbackAttributesCommand = exports.serializeAws_restJson1PutEmailIdentityDkimSigningAttributesCommand = exports.serializeAws_restJson1PutEmailIdentityDkimAttributesCommand = exports.serializeAws_restJson1PutEmailIdentityConfigurationSetAttributesCommand = exports.serializeAws_restJson1PutDeliverabilityDashboardOptionCommand = exports.serializeAws_restJson1PutDedicatedIpWarmupAttributesCommand = exports.serializeAws_restJson1PutDedicatedIpInPoolCommand = exports.serializeAws_restJson1PutConfigurationSetTrackingOptionsCommand = exports.serializeAws_restJson1PutConfigurationSetSuppressionOptionsCommand = exports.serializeAws_restJson1PutConfigurationSetSendingOptionsCommand = exports.serializeAws_restJson1PutConfigurationSetReputationOptionsCommand = exports.serializeAws_restJson1PutConfigurationSetDeliveryOptionsCommand = exports.serializeAws_restJson1PutAccountSuppressionAttributesCommand = exports.serializeAws_restJson1PutAccountSendingAttributesCommand = exports.serializeAws_restJson1PutAccountDetailsCommand = exports.serializeAws_restJson1PutAccountDedicatedIpWarmupAttributesCommand = exports.serializeAws_restJson1ListTagsForResourceCommand = void 0;
exports.deserializeAws_restJson1PutSuppressedDestinationCommand = exports.deserializeAws_restJson1PutEmailIdentityMailFromAttributesCommand = exports.deserializeAws_restJson1PutEmailIdentityFeedbackAttributesCommand = exports.deserializeAws_restJson1PutEmailIdentityDkimSigningAttributesCommand = exports.deserializeAws_restJson1PutEmailIdentityDkimAttributesCommand = exports.deserializeAws_restJson1PutEmailIdentityConfigurationSetAttributesCommand = exports.deserializeAws_restJson1PutDeliverabilityDashboardOptionCommand = exports.deserializeAws_restJson1PutDedicatedIpWarmupAttributesCommand = exports.deserializeAws_restJson1PutDedicatedIpInPoolCommand = exports.deserializeAws_restJson1PutConfigurationSetTrackingOptionsCommand = exports.deserializeAws_restJson1PutConfigurationSetSuppressionOptionsCommand = exports.deserializeAws_restJson1PutConfigurationSetSendingOptionsCommand = exports.deserializeAws_restJson1PutConfigurationSetReputationOptionsCommand = exports.deserializeAws_restJson1PutConfigurationSetDeliveryOptionsCommand = exports.deserializeAws_restJson1PutAccountSuppressionAttributesCommand = exports.deserializeAws_restJson1PutAccountSendingAttributesCommand = exports.deserializeAws_restJson1PutAccountDetailsCommand = exports.deserializeAws_restJson1PutAccountDedicatedIpWarmupAttributesCommand = exports.deserializeAws_restJson1ListTagsForResourceCommand = exports.deserializeAws_restJson1ListSuppressedDestinationsCommand = exports.deserializeAws_restJson1ListImportJobsCommand = exports.deserializeAws_restJson1ListEmailTemplatesCommand = exports.deserializeAws_restJson1ListEmailIdentitiesCommand = exports.deserializeAws_restJson1ListDomainDeliverabilityCampaignsCommand = exports.deserializeAws_restJson1ListDeliverabilityTestReportsCommand = exports.deserializeAws_restJson1ListDedicatedIpPoolsCommand = exports.deserializeAws_restJson1ListCustomVerificationEmailTemplatesCommand = exports.deserializeAws_restJson1ListContactsCommand = exports.deserializeAws_restJson1ListContactListsCommand = exports.deserializeAws_restJson1ListConfigurationSetsCommand = exports.deserializeAws_restJson1GetSuppressedDestinationCommand = exports.deserializeAws_restJson1GetImportJobCommand = exports.deserializeAws_restJson1GetEmailTemplateCommand = exports.deserializeAws_restJson1GetEmailIdentityPoliciesCommand = exports.deserializeAws_restJson1GetEmailIdentityCommand = exports.deserializeAws_restJson1GetDomainStatisticsReportCommand = exports.deserializeAws_restJson1GetDomainDeliverabilityCampaignCommand = exports.deserializeAws_restJson1GetDeliverabilityTestReportCommand = exports.deserializeAws_restJson1GetDeliverabilityDashboardOptionsCommand = exports.deserializeAws_restJson1GetDedicatedIpsCommand = exports.deserializeAws_restJson1GetDedicatedIpCommand = exports.deserializeAws_restJson1GetCustomVerificationEmailTemplateCommand = exports.deserializeAws_restJson1GetContactListCommand = exports.deserializeAws_restJson1GetContactCommand = exports.deserializeAws_restJson1GetConfigurationSetEventDestinationsCommand = exports.deserializeAws_restJson1GetConfigurationSetCommand = exports.deserializeAws_restJson1GetBlacklistReportsCommand = exports.deserializeAws_restJson1GetAccountCommand = exports.deserializeAws_restJson1DeleteSuppressedDestinationCommand = exports.deserializeAws_restJson1DeleteEmailTemplateCommand = void 0;
exports.deserializeAws_restJson1UpdateEmailTemplateCommand = exports.deserializeAws_restJson1UpdateEmailIdentityPolicyCommand = exports.deserializeAws_restJson1UpdateCustomVerificationEmailTemplateCommand = exports.deserializeAws_restJson1UpdateContactListCommand = exports.deserializeAws_restJson1UpdateContactCommand = exports.deserializeAws_restJson1UpdateConfigurationSetEventDestinationCommand = exports.deserializeAws_restJson1UntagResourceCommand = exports.deserializeAws_restJson1TestRenderEmailTemplateCommand = exports.deserializeAws_restJson1TagResourceCommand = exports.deserializeAws_restJson1SendEmailCommand = exports.deserializeAws_restJson1SendCustomVerificationEmailCommand = exports.deserializeAws_restJson1SendBulkEmailCommand = void 0;
const protocol_http_1 = require("@aws-sdk/protocol-http");
const smithy_client_1 = require("@aws-sdk/smithy-client");
const serializeAws_restJson1CreateConfigurationSetCommand = async (input, context) => {
    const headers = {
        "content-type": "application/json",
    };
    let resolvedPath = "/v2/email/configuration-sets";
    let body;
    body = JSON.stringify({
        ...(input.ConfigurationSetName !== undefined &&
            input.ConfigurationSetName !== null && { ConfigurationSetName: input.ConfigurationSetName }),
        ...(input.DeliveryOptions !== undefined &&
            input.DeliveryOptions !== null && {
            DeliveryOptions: serializeAws_restJson1DeliveryOptions(input.DeliveryOptions, context),
        }),
        ...(input.ReputationOptions !== undefined &&
            input.ReputationOptions !== null && {
            ReputationOptions: serializeAws_restJson1ReputationOptions(input.ReputationOptions, context),
        }),
        ...(input.SendingOptions !== undefined &&
            input.SendingOptions !== null && {
            SendingOptions: serializeAws_restJson1SendingOptions(input.SendingOptions, context),
        }),
        ...(input.SuppressionOptions !== undefined &&
            input.SuppressionOptions !== null && {
            SuppressionOptions: serializeAws_restJson1SuppressionOptions(input.SuppressionOptions, context),
        }),
        ...(input.Tags !== undefined &&
            input.Tags !== null && { Tags: serializeAws_restJson1TagList(input.Tags, context) }),
        ...(input.TrackingOptions !== undefined &&
            input.TrackingOptions !== null && {
            TrackingOptions: serializeAws_restJson1TrackingOptions(input.TrackingOptions, context),
        }),
    });
    const { hostname, protocol = "https", port } = await context.endpoint();
    return new protocol_http_1.HttpRequest({
        protocol,
        hostname,
        port,
        method: "POST",
        headers,
        path: resolvedPath,
        body,
    });
};
exports.serializeAws_restJson1CreateConfigurationSetCommand = serializeAws_restJson1CreateConfigurationSetCommand;
const serializeAws_restJson1CreateConfigurationSetEventDestinationCommand = async (input, context) => {
    const headers = {
        "content-type": "application/json",
    };
    let resolvedPath = "/v2/email/configuration-sets/{ConfigurationSetName}/event-destinations";
    if (input.ConfigurationSetName !== undefined) {
        const labelValue = input.ConfigurationSetName;
        if (labelValue.length <= 0) {
            throw new Error("Empty value provided for input HTTP label: ConfigurationSetName.");
        }
        resolvedPath = resolvedPath.replace("{ConfigurationSetName}", smithy_client_1.extendedEncodeURIComponent(labelValue));
    }
    else {
        throw new Error("No value provided for input HTTP label: ConfigurationSetName.");
    }
    let body;
    body = JSON.stringify({
        ...(input.EventDestination !== undefined &&
            input.EventDestination !== null && {
            EventDestination: serializeAws_restJson1EventDestinationDefinition(input.EventDestination, context),
        }),
        ...(input.EventDestinationName !== undefined &&
            input.EventDestinationName !== null && { EventDestinationName: input.EventDestinationName }),
    });
    const { hostname, protocol = "https", port } = await context.endpoint();
    return new protocol_http_1.HttpRequest({
        protocol,
        hostname,
        port,
        method: "POST",
        headers,
        path: resolvedPath,
        body,
    });
};
exports.serializeAws_restJson1CreateConfigurationSetEventDestinationCommand = serializeAws_restJson1CreateConfigurationSetEventDestinationCommand;
const serializeAws_restJson1CreateContactCommand = async (input, context) => {
    const headers = {
        "content-type": "application/json",
    };
    let resolvedPath = "/v2/email/contact-lists/{ContactListName}/contacts";
    if (input.ContactListName !== undefined) {
        const labelValue = input.ContactListName;
        if (labelValue.length <= 0) {
            throw new Error("Empty value provided for input HTTP label: ContactListName.");
        }
        resolvedPath = resolvedPath.replace("{ContactListName}", smithy_client_1.extendedEncodeURIComponent(labelValue));
    }
    else {
        throw new Error("No value provided for input HTTP label: ContactListName.");
    }
    let body;
    body = JSON.stringify({
        ...(input.AttributesData !== undefined &&
            input.AttributesData !== null && { AttributesData: input.AttributesData }),
        ...(input.EmailAddress !== undefined && input.EmailAddress !== null && { EmailAddress: input.EmailAddress }),
        ...(input.TopicPreferences !== undefined &&
            input.TopicPreferences !== null && {
            TopicPreferences: serializeAws_restJson1TopicPreferenceList(input.TopicPreferences, context),
        }),
        ...(input.UnsubscribeAll !== undefined &&
            input.UnsubscribeAll !== null && { UnsubscribeAll: input.UnsubscribeAll }),
    });
    const { hostname, protocol = "https", port } = await context.endpoint();
    return new protocol_http_1.HttpRequest({
        protocol,
        hostname,
        port,
        method: "POST",
        headers,
        path: resolvedPath,
        body,
    });
};
exports.serializeAws_restJson1CreateContactCommand = serializeAws_restJson1CreateContactCommand;
const serializeAws_restJson1CreateContactListCommand = async (input, context) => {
    const headers = {
        "content-type": "application/json",
    };
    let resolvedPath = "/v2/email/contact-lists";
    let body;
    body = JSON.stringify({
        ...(input.ContactListName !== undefined &&
            input.ContactListName !== null && { ContactListName: input.ContactListName }),
        ...(input.Description !== undefined && input.Description !== null && { Description: input.Description }),
        ...(input.Tags !== undefined &&
            input.Tags !== null && { Tags: serializeAws_restJson1TagList(input.Tags, context) }),
        ...(input.Topics !== undefined &&
            input.Topics !== null && { Topics: serializeAws_restJson1Topics(input.Topics, context) }),
    });
    const { hostname, protocol = "https", port } = await context.endpoint();
    return new protocol_http_1.HttpRequest({
        protocol,
        hostname,
        port,
        method: "POST",
        headers,
        path: resolvedPath,
        body,
    });
};
exports.serializeAws_restJson1CreateContactListCommand = serializeAws_restJson1CreateContactListCommand;
const serializeAws_restJson1CreateCustomVerificationEmailTemplateCommand = async (input, context) => {
    const headers = {
        "content-type": "application/json",
    };
    let resolvedPath = "/v2/email/custom-verification-email-templates";
    let body;
    body = JSON.stringify({
        ...(input.FailureRedirectionURL !== undefined &&
            input.FailureRedirectionURL !== null && { FailureRedirectionURL: input.FailureRedirectionURL }),
        ...(input.FromEmailAddress !== undefined &&
            input.FromEmailAddress !== null && { FromEmailAddress: input.FromEmailAddress }),
        ...(input.SuccessRedirectionURL !== undefined &&
            input.SuccessRedirectionURL !== null && { SuccessRedirectionURL: input.SuccessRedirectionURL }),
        ...(input.TemplateContent !== undefined &&
            input.TemplateContent !== null && { TemplateContent: input.TemplateContent }),
        ...(input.TemplateName !== undefined && input.TemplateName !== null && { TemplateName: input.TemplateName }),
        ...(input.TemplateSubject !== undefined &&
            input.TemplateSubject !== null && { TemplateSubject: input.TemplateSubject }),
    });
    const { hostname, protocol = "https", port } = await context.endpoint();
    return new protocol_http_1.HttpRequest({
        protocol,
        hostname,
        port,
        method: "POST",
        headers,
        path: resolvedPath,
        body,
    });
};
exports.serializeAws_restJson1CreateCustomVerificationEmailTemplateCommand = serializeAws_restJson1CreateCustomVerificationEmailTemplateCommand;
const serializeAws_restJson1CreateDedicatedIpPoolCommand = async (input, context) => {
    const headers = {
        "content-type": "application/json",
    };
    let resolvedPath = "/v2/email/dedicated-ip-pools";
    let body;
    body = JSON.stringify({
        ...(input.PoolName !== undefined && input.PoolName !== null && { PoolName: input.PoolName }),
        ...(input.Tags !== undefined &&
            input.Tags !== null && { Tags: serializeAws_restJson1TagList(input.Tags, context) }),
    });
    const { hostname, protocol = "https", port } = await context.endpoint();
    return new protocol_http_1.HttpRequest({
        protocol,
        hostname,
        port,
        method: "POST",
        headers,
        path: resolvedPath,
        body,
    });
};
exports.serializeAws_restJson1CreateDedicatedIpPoolCommand = serializeAws_restJson1CreateDedicatedIpPoolCommand;
const serializeAws_restJson1CreateDeliverabilityTestReportCommand = async (input, context) => {
    const headers = {
        "content-type": "application/json",
    };
    let resolvedPath = "/v2/email/deliverability-dashboard/test";
    let body;
    body = JSON.stringify({
        ...(input.Content !== undefined &&
            input.Content !== null && { Content: serializeAws_restJson1EmailContent(input.Content, context) }),
        ...(input.FromEmailAddress !== undefined &&
            input.FromEmailAddress !== null && { FromEmailAddress: input.FromEmailAddress }),
        ...(input.ReportName !== undefined && input.ReportName !== null && { ReportName: input.ReportName }),
        ...(input.Tags !== undefined &&
            input.Tags !== null && { Tags: serializeAws_restJson1TagList(input.Tags, context) }),
    });
    const { hostname, protocol = "https", port } = await context.endpoint();
    return new protocol_http_1.HttpRequest({
        protocol,
        hostname,
        port,
        method: "POST",
        headers,
        path: resolvedPath,
        body,
    });
};
exports.serializeAws_restJson1CreateDeliverabilityTestReportCommand = serializeAws_restJson1CreateDeliverabilityTestReportCommand;
const serializeAws_restJson1CreateEmailIdentityCommand = async (input, context) => {
    const headers = {
        "content-type": "application/json",
    };
    let resolvedPath = "/v2/email/identities";
    let body;
    body = JSON.stringify({
        ...(input.ConfigurationSetName !== undefined &&
            input.ConfigurationSetName !== null && { ConfigurationSetName: input.ConfigurationSetName }),
        ...(input.DkimSigningAttributes !== undefined &&
            input.DkimSigningAttributes !== null && {
            DkimSigningAttributes: serializeAws_restJson1DkimSigningAttributes(input.DkimSigningAttributes, context),
        }),
        ...(input.EmailIdentity !== undefined && input.EmailIdentity !== null && { EmailIdentity: input.EmailIdentity }),
        ...(input.Tags !== undefined &&
            input.Tags !== null && { Tags: serializeAws_restJson1TagList(input.Tags, context) }),
    });
    const { hostname, protocol = "https", port } = await context.endpoint();
    return new protocol_http_1.HttpRequest({
        protocol,
        hostname,
        port,
        method: "POST",
        headers,
        path: resolvedPath,
        body,
    });
};
exports.serializeAws_restJson1CreateEmailIdentityCommand = serializeAws_restJson1CreateEmailIdentityCommand;
const serializeAws_restJson1CreateEmailIdentityPolicyCommand = async (input, context) => {
    const headers = {
        "content-type": "application/json",
    };
    let resolvedPath = "/v2/email/identities/{EmailIdentity}/policies/{PolicyName}";
    if (input.EmailIdentity !== undefined) {
        const labelValue = input.EmailIdentity;
        if (labelValue.length <= 0) {
            throw new Error("Empty value provided for input HTTP label: EmailIdentity.");
        }
        resolvedPath = resolvedPath.replace("{EmailIdentity}", smithy_client_1.extendedEncodeURIComponent(labelValue));
    }
    else {
        throw new Error("No value provided for input HTTP label: EmailIdentity.");
    }
    if (input.PolicyName !== undefined) {
        const labelValue = input.PolicyName;
        if (labelValue.length <= 0) {
            throw new Error("Empty value provided for input HTTP label: PolicyName.");
        }
        resolvedPath = resolvedPath.replace("{PolicyName}", smithy_client_1.extendedEncodeURIComponent(labelValue));
    }
    else {
        throw new Error("No value provided for input HTTP label: PolicyName.");
    }
    let body;
    body = JSON.stringify({
        ...(input.Policy !== undefined && input.Policy !== null && { Policy: input.Policy }),
    });
    const { hostname, protocol = "https", port } = await context.endpoint();
    return new protocol_http_1.HttpRequest({
        protocol,
        hostname,
        port,
        method: "POST",
        headers,
        path: resolvedPath,
        body,
    });
};
exports.serializeAws_restJson1CreateEmailIdentityPolicyCommand = serializeAws_restJson1CreateEmailIdentityPolicyCommand;
const serializeAws_restJson1CreateEmailTemplateCommand = async (input, context) => {
    const headers = {
        "content-type": "application/json",
    };
    let resolvedPath = "/v2/email/templates";
    let body;
    body = JSON.stringify({
        ...(input.TemplateContent !== undefined &&
            input.TemplateContent !== null && {
            TemplateContent: serializeAws_restJson1EmailTemplateContent(input.TemplateContent, context),
        }),
        ...(input.TemplateName !== undefined && input.TemplateName !== null && { TemplateName: input.TemplateName }),
    });
    const { hostname, protocol = "https", port } = await context.endpoint();
    return new protocol_http_1.HttpRequest({
        protocol,
        hostname,
        port,
        method: "POST",
        headers,
        path: resolvedPath,
        body,
    });
};
exports.serializeAws_restJson1CreateEmailTemplateCommand = serializeAws_restJson1CreateEmailTemplateCommand;
const serializeAws_restJson1CreateImportJobCommand = async (input, context) => {
    const headers = {
        "content-type": "application/json",
    };
    let resolvedPath = "/v2/email/import-jobs";
    let body;
    body = JSON.stringify({
        ...(input.ImportDataSource !== undefined &&
            input.ImportDataSource !== null && {
            ImportDataSource: serializeAws_restJson1ImportDataSource(input.ImportDataSource, context),
        }),
        ...(input.ImportDestination !== undefined &&
            input.ImportDestination !== null && {
            ImportDestination: serializeAws_restJson1ImportDestination(input.ImportDestination, context),
        }),
    });
    const { hostname, protocol = "https", port } = await context.endpoint();
    return new protocol_http_1.HttpRequest({
        protocol,
        hostname,
        port,
        method: "POST",
        headers,
        path: resolvedPath,
        body,
    });
};
exports.serializeAws_restJson1CreateImportJobCommand = serializeAws_restJson1CreateImportJobCommand;
const serializeAws_restJson1DeleteConfigurationSetCommand = async (input, context) => {
    const headers = {};
    let resolvedPath = "/v2/email/configuration-sets/{ConfigurationSetName}";
    if (input.ConfigurationSetName !== undefined) {
        const labelValue = input.ConfigurationSetName;
        if (labelValue.length <= 0) {
            throw new Error("Empty value provided for input HTTP label: ConfigurationSetName.");
        }
        resolvedPath = resolvedPath.replace("{ConfigurationSetName}", smithy_client_1.extendedEncodeURIComponent(labelValue));
    }
    else {
        throw new Error("No value provided for input HTTP label: ConfigurationSetName.");
    }
    let body;
    const { hostname, protocol = "https", port } = await context.endpoint();
    return new protocol_http_1.HttpRequest({
        protocol,
        hostname,
        port,
        method: "DELETE",
        headers,
        path: resolvedPath,
        body,
    });
};
exports.serializeAws_restJson1DeleteConfigurationSetCommand = serializeAws_restJson1DeleteConfigurationSetCommand;
const serializeAws_restJson1DeleteConfigurationSetEventDestinationCommand = async (input, context) => {
    const headers = {};
    let resolvedPath = "/v2/email/configuration-sets/{ConfigurationSetName}/event-destinations/{EventDestinationName}";
    if (input.ConfigurationSetName !== undefined) {
        const labelValue = input.ConfigurationSetName;
        if (labelValue.length <= 0) {
            throw new Error("Empty value provided for input HTTP label: ConfigurationSetName.");
        }
        resolvedPath = resolvedPath.replace("{ConfigurationSetName}", smithy_client_1.extendedEncodeURIComponent(labelValue));
    }
    else {
        throw new Error("No value provided for input HTTP label: ConfigurationSetName.");
    }
    if (input.EventDestinationName !== undefined) {
        const labelValue = input.EventDestinationName;
        if (labelValue.length <= 0) {
            throw new Error("Empty value provided for input HTTP label: EventDestinationName.");
        }
        resolvedPath = resolvedPath.replace("{EventDestinationName}", smithy_client_1.extendedEncodeURIComponent(labelValue));
    }
    else {
        throw new Error("No value provided for input HTTP label: EventDestinationName.");
    }
    let body;
    const { hostname, protocol = "https", port } = await context.endpoint();
    return new protocol_http_1.HttpRequest({
        protocol,
        hostname,
        port,
        method: "DELETE",
        headers,
        path: resolvedPath,
        body,
    });
};
exports.serializeAws_restJson1DeleteConfigurationSetEventDestinationCommand = serializeAws_restJson1DeleteConfigurationSetEventDestinationCommand;
const serializeAws_restJson1DeleteContactCommand = async (input, context) => {
    const headers = {};
    let resolvedPath = "/v2/email/contact-lists/{ContactListName}/contacts/{EmailAddress}";
    if (input.ContactListName !== undefined) {
        const labelValue = input.ContactListName;
        if (labelValue.length <= 0) {
            throw new Error("Empty value provided for input HTTP label: ContactListName.");
        }
        resolvedPath = resolvedPath.replace("{ContactListName}", smithy_client_1.extendedEncodeURIComponent(labelValue));
    }
    else {
        throw new Error("No value provided for input HTTP label: ContactListName.");
    }
    if (input.EmailAddress !== undefined) {
        const labelValue = input.EmailAddress;
        if (labelValue.length <= 0) {
            throw new Error("Empty value provided for input HTTP label: EmailAddress.");
        }
        resolvedPath = resolvedPath.replace("{EmailAddress}", smithy_client_1.extendedEncodeURIComponent(labelValue));
    }
    else {
        throw new Error("No value provided for input HTTP label: EmailAddress.");
    }
    let body;
    const { hostname, protocol = "https", port } = await context.endpoint();
    return new protocol_http_1.HttpRequest({
        protocol,
        hostname,
        port,
        method: "DELETE",
        headers,
        path: resolvedPath,
        body,
    });
};
exports.serializeAws_restJson1DeleteContactCommand = serializeAws_restJson1DeleteContactCommand;
const serializeAws_restJson1DeleteContactListCommand = async (input, context) => {
    const headers = {};
    let resolvedPath = "/v2/email/contact-lists/{ContactListName}";
    if (input.ContactListName !== undefined) {
        const labelValue = input.ContactListName;
        if (labelValue.length <= 0) {
            throw new Error("Empty value provided for input HTTP label: ContactListName.");
        }
        resolvedPath = resolvedPath.replace("{ContactListName}", smithy_client_1.extendedEncodeURIComponent(labelValue));
    }
    else {
        throw new Error("No value provided for input HTTP label: ContactListName.");
    }
    let body;
    const { hostname, protocol = "https", port } = await context.endpoint();
    return new protocol_http_1.HttpRequest({
        protocol,
        hostname,
        port,
        method: "DELETE",
        headers,
        path: resolvedPath,
        body,
    });
};
exports.serializeAws_restJson1DeleteContactListCommand = serializeAws_restJson1DeleteContactListCommand;
const serializeAws_restJson1DeleteCustomVerificationEmailTemplateCommand = async (input, context) => {
    const headers = {};
    let resolvedPath = "/v2/email/custom-verification-email-templates/{TemplateName}";
    if (input.TemplateName !== undefined) {
        const labelValue = input.TemplateName;
        if (labelValue.length <= 0) {
            throw new Error("Empty value provided for input HTTP label: TemplateName.");
        }
        resolvedPath = resolvedPath.replace("{TemplateName}", smithy_client_1.extendedEncodeURIComponent(labelValue));
    }
    else {
        throw new Error("No value provided for input HTTP label: TemplateName.");
    }
    let body;
    const { hostname, protocol = "https", port } = await context.endpoint();
    return new protocol_http_1.HttpRequest({
        protocol,
        hostname,
        port,
        method: "DELETE",
        headers,
        path: resolvedPath,
        body,
    });
};
exports.serializeAws_restJson1DeleteCustomVerificationEmailTemplateCommand = serializeAws_restJson1DeleteCustomVerificationEmailTemplateCommand;
const serializeAws_restJson1DeleteDedicatedIpPoolCommand = async (input, context) => {
    const headers = {};
    let resolvedPath = "/v2/email/dedicated-ip-pools/{PoolName}";
    if (input.PoolName !== undefined) {
        const labelValue = input.PoolName;
        if (labelValue.length <= 0) {
            throw new Error("Empty value provided for input HTTP label: PoolName.");
        }
        resolvedPath = resolvedPath.replace("{PoolName}", smithy_client_1.extendedEncodeURIComponent(labelValue));
    }
    else {
        throw new Error("No value provided for input HTTP label: PoolName.");
    }
    let body;
    const { hostname, protocol = "https", port } = await context.endpoint();
    return new protocol_http_1.HttpRequest({
        protocol,
        hostname,
        port,
        method: "DELETE",
        headers,
        path: resolvedPath,
        body,
    });
};
exports.serializeAws_restJson1DeleteDedicatedIpPoolCommand = serializeAws_restJson1DeleteDedicatedIpPoolCommand;
const serializeAws_restJson1DeleteEmailIdentityCommand = async (input, context) => {
    const headers = {};
    let resolvedPath = "/v2/email/identities/{EmailIdentity}";
    if (input.EmailIdentity !== undefined) {
        const labelValue = input.EmailIdentity;
        if (labelValue.length <= 0) {
            throw new Error("Empty value provided for input HTTP label: EmailIdentity.");
        }
        resolvedPath = resolvedPath.replace("{EmailIdentity}", smithy_client_1.extendedEncodeURIComponent(labelValue));
    }
    else {
        throw new Error("No value provided for input HTTP label: EmailIdentity.");
    }
    let body;
    const { hostname, protocol = "https", port } = await context.endpoint();
    return new protocol_http_1.HttpRequest({
        protocol,
        hostname,
        port,
        method: "DELETE",
        headers,
        path: resolvedPath,
        body,
    });
};
exports.serializeAws_restJson1DeleteEmailIdentityCommand = serializeAws_restJson1DeleteEmailIdentityCommand;
const serializeAws_restJson1DeleteEmailIdentityPolicyCommand = async (input, context) => {
    const headers = {};
    let resolvedPath = "/v2/email/identities/{EmailIdentity}/policies/{PolicyName}";
    if (input.EmailIdentity !== undefined) {
        const labelValue = input.EmailIdentity;
        if (labelValue.length <= 0) {
            throw new Error("Empty value provided for input HTTP label: EmailIdentity.");
        }
        resolvedPath = resolvedPath.replace("{EmailIdentity}", smithy_client_1.extendedEncodeURIComponent(labelValue));
    }
    else {
        throw new Error("No value provided for input HTTP label: EmailIdentity.");
    }
    if (input.PolicyName !== undefined) {
        const labelValue = input.PolicyName;
        if (labelValue.length <= 0) {
            throw new Error("Empty value provided for input HTTP label: PolicyName.");
        }
        resolvedPath = resolvedPath.replace("{PolicyName}", smithy_client_1.extendedEncodeURIComponent(labelValue));
    }
    else {
        throw new Error("No value provided for input HTTP label: PolicyName.");
    }
    let body;
    const { hostname, protocol = "https", port } = await context.endpoint();
    return new protocol_http_1.HttpRequest({
        protocol,
        hostname,
        port,
        method: "DELETE",
        headers,
        path: resolvedPath,
        body,
    });
};
exports.serializeAws_restJson1DeleteEmailIdentityPolicyCommand = serializeAws_restJson1DeleteEmailIdentityPolicyCommand;
const serializeAws_restJson1DeleteEmailTemplateCommand = async (input, context) => {
    const headers = {};
    let resolvedPath = "/v2/email/templates/{TemplateName}";
    if (input.TemplateName !== undefined) {
        const labelValue = input.TemplateName;
        if (labelValue.length <= 0) {
            throw new Error("Empty value provided for input HTTP label: TemplateName.");
        }
        resolvedPath = resolvedPath.replace("{TemplateName}", smithy_client_1.extendedEncodeURIComponent(labelValue));
    }
    else {
        throw new Error("No value provided for input HTTP label: TemplateName.");
    }
    let body;
    const { hostname, protocol = "https", port } = await context.endpoint();
    return new protocol_http_1.HttpRequest({
        protocol,
        hostname,
        port,
        method: "DELETE",
        headers,
        path: resolvedPath,
        body,
    });
};
exports.serializeAws_restJson1DeleteEmailTemplateCommand = serializeAws_restJson1DeleteEmailTemplateCommand;
const serializeAws_restJson1DeleteSuppressedDestinationCommand = async (input, context) => {
    const headers = {};
    let resolvedPath = "/v2/email/suppression/addresses/{EmailAddress}";
    if (input.EmailAddress !== undefined) {
        const labelValue = input.EmailAddress;
        if (labelValue.length <= 0) {
            throw new Error("Empty value provided for input HTTP label: EmailAddress.");
        }
        resolvedPath = resolvedPath.replace("{EmailAddress}", smithy_client_1.extendedEncodeURIComponent(labelValue));
    }
    else {
        throw new Error("No value provided for input HTTP label: EmailAddress.");
    }
    let body;
    const { hostname, protocol = "https", port } = await context.endpoint();
    return new protocol_http_1.HttpRequest({
        protocol,
        hostname,
        port,
        method: "DELETE",
        headers,
        path: resolvedPath,
        body,
    });
};
exports.serializeAws_restJson1DeleteSuppressedDestinationCommand = serializeAws_restJson1DeleteSuppressedDestinationCommand;
const serializeAws_restJson1GetAccountCommand = async (input, context) => {
    const headers = {
        "content-type": "application/json",
    };
    let resolvedPath = "/v2/email/account";
    let body;
    body = "";
    const { hostname, protocol = "https", port } = await context.endpoint();
    return new protocol_http_1.HttpRequest({
        protocol,
        hostname,
        port,
        method: "GET",
        headers,
        path: resolvedPath,
        body,
    });
};
exports.serializeAws_restJson1GetAccountCommand = serializeAws_restJson1GetAccountCommand;
const serializeAws_restJson1GetBlacklistReportsCommand = async (input, context) => {
    const headers = {};
    let resolvedPath = "/v2/email/deliverability-dashboard/blacklist-report";
    const query = {
        ...(input.BlacklistItemNames !== undefined && {
            BlacklistItemNames: (input.BlacklistItemNames || []).map((_entry) => _entry),
        }),
    };
    let body;
    const { hostname, protocol = "https", port } = await context.endpoint();
    return new protocol_http_1.HttpRequest({
        protocol,
        hostname,
        port,
        method: "GET",
        headers,
        path: resolvedPath,
        query,
        body,
    });
};
exports.serializeAws_restJson1GetBlacklistReportsCommand = serializeAws_restJson1GetBlacklistReportsCommand;
const serializeAws_restJson1GetConfigurationSetCommand = async (input, context) => {
    const headers = {};
    let resolvedPath = "/v2/email/configuration-sets/{ConfigurationSetName}";
    if (input.ConfigurationSetName !== undefined) {
        const labelValue = input.ConfigurationSetName;
        if (labelValue.length <= 0) {
            throw new Error("Empty value provided for input HTTP label: ConfigurationSetName.");
        }
        resolvedPath = resolvedPath.replace("{ConfigurationSetName}", smithy_client_1.extendedEncodeURIComponent(labelValue));
    }
    else {
        throw new Error("No value provided for input HTTP label: ConfigurationSetName.");
    }
    let body;
    const { hostname, protocol = "https", port } = await context.endpoint();
    return new protocol_http_1.HttpRequest({
        protocol,
        hostname,
        port,
        method: "GET",
        headers,
        path: resolvedPath,
        body,
    });
};
exports.serializeAws_restJson1GetConfigurationSetCommand = serializeAws_restJson1GetConfigurationSetCommand;
const serializeAws_restJson1GetConfigurationSetEventDestinationsCommand = async (input, context) => {
    const headers = {};
    let resolvedPath = "/v2/email/configuration-sets/{ConfigurationSetName}/event-destinations";
    if (input.ConfigurationSetName !== undefined) {
        const labelValue = input.ConfigurationSetName;
        if (labelValue.length <= 0) {
            throw new Error("Empty value provided for input HTTP label: ConfigurationSetName.");
        }
        resolvedPath = resolvedPath.replace("{ConfigurationSetName}", smithy_client_1.extendedEncodeURIComponent(labelValue));
    }
    else {
        throw new Error("No value provided for input HTTP label: ConfigurationSetName.");
    }
    let body;
    const { hostname, protocol = "https", port } = await context.endpoint();
    return new protocol_http_1.HttpRequest({
        protocol,
        hostname,
        port,
        method: "GET",
        headers,
        path: resolvedPath,
        body,
    });
};
exports.serializeAws_restJson1GetConfigurationSetEventDestinationsCommand = serializeAws_restJson1GetConfigurationSetEventDestinationsCommand;
const serializeAws_restJson1GetContactCommand = async (input, context) => {
    const headers = {};
    let resolvedPath = "/v2/email/contact-lists/{ContactListName}/contacts/{EmailAddress}";
    if (input.ContactListName !== undefined) {
        const labelValue = input.ContactListName;
        if (labelValue.length <= 0) {
            throw new Error("Empty value provided for input HTTP label: ContactListName.");
        }
        resolvedPath = resolvedPath.replace("{ContactListName}", smithy_client_1.extendedEncodeURIComponent(labelValue));
    }
    else {
        throw new Error("No value provided for input HTTP label: ContactListName.");
    }
    if (input.EmailAddress !== undefined) {
        const labelValue = input.EmailAddress;
        if (labelValue.length <= 0) {
            throw new Error("Empty value provided for input HTTP label: EmailAddress.");
        }
        resolvedPath = resolvedPath.replace("{EmailAddress}", smithy_client_1.extendedEncodeURIComponent(labelValue));
    }
    else {
        throw new Error("No value provided for input HTTP label: EmailAddress.");
    }
    let body;
    const { hostname, protocol = "https", port } = await context.endpoint();
    return new protocol_http_1.HttpRequest({
        protocol,
        hostname,
        port,
        method: "GET",
        headers,
        path: resolvedPath,
        body,
    });
};
exports.serializeAws_restJson1GetContactCommand = serializeAws_restJson1GetContactCommand;
const serializeAws_restJson1GetContactListCommand = async (input, context) => {
    const headers = {};
    let resolvedPath = "/v2/email/contact-lists/{ContactListName}";
    if (input.ContactListName !== undefined) {
        const labelValue = input.ContactListName;
        if (labelValue.length <= 0) {
            throw new Error("Empty value provided for input HTTP label: ContactListName.");
        }
        resolvedPath = resolvedPath.replace("{ContactListName}", smithy_client_1.extendedEncodeURIComponent(labelValue));
    }
    else {
        throw new Error("No value provided for input HTTP label: ContactListName.");
    }
    let body;
    const { hostname, protocol = "https", port } = await context.endpoint();
    return new protocol_http_1.HttpRequest({
        protocol,
        hostname,
        port,
        method: "GET",
        headers,
        path: resolvedPath,
        body,
    });
};
exports.serializeAws_restJson1GetContactListCommand = serializeAws_restJson1GetContactListCommand;
const serializeAws_restJson1GetCustomVerificationEmailTemplateCommand = async (input, context) => {
    const headers = {};
    let resolvedPath = "/v2/email/custom-verification-email-templates/{TemplateName}";
    if (input.TemplateName !== undefined) {
        const labelValue = input.TemplateName;
        if (labelValue.length <= 0) {
            throw new Error("Empty value provided for input HTTP label: TemplateName.");
        }
        resolvedPath = resolvedPath.replace("{TemplateName}", smithy_client_1.extendedEncodeURIComponent(labelValue));
    }
    else {
        throw new Error("No value provided for input HTTP label: TemplateName.");
    }
    let body;
    const { hostname, protocol = "https", port } = await context.endpoint();
    return new protocol_http_1.HttpRequest({
        protocol,
        hostname,
        port,
        method: "GET",
        headers,
        path: resolvedPath,
        body,
    });
};
exports.serializeAws_restJson1GetCustomVerificationEmailTemplateCommand = serializeAws_restJson1GetCustomVerificationEmailTemplateCommand;
const serializeAws_restJson1GetDedicatedIpCommand = async (input, context) => {
    const headers = {};
    let resolvedPath = "/v2/email/dedicated-ips/{Ip}";
    if (input.Ip !== undefined) {
        const labelValue = input.Ip;
        if (labelValue.length <= 0) {
            throw new Error("Empty value provided for input HTTP label: Ip.");
        }
        resolvedPath = resolvedPath.replace("{Ip}", smithy_client_1.extendedEncodeURIComponent(labelValue));
    }
    else {
        throw new Error("No value provided for input HTTP label: Ip.");
    }
    let body;
    const { hostname, protocol = "https", port } = await context.endpoint();
    return new protocol_http_1.HttpRequest({
        protocol,
        hostname,
        port,
        method: "GET",
        headers,
        path: resolvedPath,
        body,
    });
};
exports.serializeAws_restJson1GetDedicatedIpCommand = serializeAws_restJson1GetDedicatedIpCommand;
const serializeAws_restJson1GetDedicatedIpsCommand = async (input, context) => {
    const headers = {};
    let resolvedPath = "/v2/email/dedicated-ips";
    const query = {
        ...(input.PoolName !== undefined && { PoolName: input.PoolName }),
        ...(input.NextToken !== undefined && { NextToken: input.NextToken }),
        ...(input.PageSize !== undefined && { PageSize: input.PageSize.toString() }),
    };
    let body;
    const { hostname, protocol = "https", port } = await context.endpoint();
    return new protocol_http_1.HttpRequest({
        protocol,
        hostname,
        port,
        method: "GET",
        headers,
        path: resolvedPath,
        query,
        body,
    });
};
exports.serializeAws_restJson1GetDedicatedIpsCommand = serializeAws_restJson1GetDedicatedIpsCommand;
const serializeAws_restJson1GetDeliverabilityDashboardOptionsCommand = async (input, context) => {
    const headers = {
        "content-type": "application/json",
    };
    let resolvedPath = "/v2/email/deliverability-dashboard";
    let body;
    body = "";
    const { hostname, protocol = "https", port } = await context.endpoint();
    return new protocol_http_1.HttpRequest({
        protocol,
        hostname,
        port,
        method: "GET",
        headers,
        path: resolvedPath,
        body,
    });
};
exports.serializeAws_restJson1GetDeliverabilityDashboardOptionsCommand = serializeAws_restJson1GetDeliverabilityDashboardOptionsCommand;
const serializeAws_restJson1GetDeliverabilityTestReportCommand = async (input, context) => {
    const headers = {};
    let resolvedPath = "/v2/email/deliverability-dashboard/test-reports/{ReportId}";
    if (input.ReportId !== undefined) {
        const labelValue = input.ReportId;
        if (labelValue.length <= 0) {
            throw new Error("Empty value provided for input HTTP label: ReportId.");
        }
        resolvedPath = resolvedPath.replace("{ReportId}", smithy_client_1.extendedEncodeURIComponent(labelValue));
    }
    else {
        throw new Error("No value provided for input HTTP label: ReportId.");
    }
    let body;
    const { hostname, protocol = "https", port } = await context.endpoint();
    return new protocol_http_1.HttpRequest({
        protocol,
        hostname,
        port,
        method: "GET",
        headers,
        path: resolvedPath,
        body,
    });
};
exports.serializeAws_restJson1GetDeliverabilityTestReportCommand = serializeAws_restJson1GetDeliverabilityTestReportCommand;
const serializeAws_restJson1GetDomainDeliverabilityCampaignCommand = async (input, context) => {
    const headers = {};
    let resolvedPath = "/v2/email/deliverability-dashboard/campaigns/{CampaignId}";
    if (input.CampaignId !== undefined) {
        const labelValue = input.CampaignId;
        if (labelValue.length <= 0) {
            throw new Error("Empty value provided for input HTTP label: CampaignId.");
        }
        resolvedPath = resolvedPath.replace("{CampaignId}", smithy_client_1.extendedEncodeURIComponent(labelValue));
    }
    else {
        throw new Error("No value provided for input HTTP label: CampaignId.");
    }
    let body;
    const { hostname, protocol = "https", port } = await context.endpoint();
    return new protocol_http_1.HttpRequest({
        protocol,
        hostname,
        port,
        method: "GET",
        headers,
        path: resolvedPath,
        body,
    });
};
exports.serializeAws_restJson1GetDomainDeliverabilityCampaignCommand = serializeAws_restJson1GetDomainDeliverabilityCampaignCommand;
const serializeAws_restJson1GetDomainStatisticsReportCommand = async (input, context) => {
    const headers = {};
    let resolvedPath = "/v2/email/deliverability-dashboard/statistics-report/{Domain}";
    if (input.Domain !== undefined) {
        const labelValue = input.Domain;
        if (labelValue.length <= 0) {
            throw new Error("Empty value provided for input HTTP label: Domain.");
        }
        resolvedPath = resolvedPath.replace("{Domain}", smithy_client_1.extendedEncodeURIComponent(labelValue));
    }
    else {
        throw new Error("No value provided for input HTTP label: Domain.");
    }
    const query = {
        ...(input.StartDate !== undefined && { StartDate: (input.StartDate.toISOString().split(".")[0] + "Z").toString() }),
        ...(input.EndDate !== undefined && { EndDate: (input.EndDate.toISOString().split(".")[0] + "Z").toString() }),
    };
    let body;
    const { hostname, protocol = "https", port } = await context.endpoint();
    return new protocol_http_1.HttpRequest({
        protocol,
        hostname,
        port,
        method: "GET",
        headers,
        path: resolvedPath,
        query,
        body,
    });
};
exports.serializeAws_restJson1GetDomainStatisticsReportCommand = serializeAws_restJson1GetDomainStatisticsReportCommand;
const serializeAws_restJson1GetEmailIdentityCommand = async (input, context) => {
    const headers = {};
    let resolvedPath = "/v2/email/identities/{EmailIdentity}";
    if (input.EmailIdentity !== undefined) {
        const labelValue = input.EmailIdentity;
        if (labelValue.length <= 0) {
            throw new Error("Empty value provided for input HTTP label: EmailIdentity.");
        }
        resolvedPath = resolvedPath.replace("{EmailIdentity}", smithy_client_1.extendedEncodeURIComponent(labelValue));
    }
    else {
        throw new Error("No value provided for input HTTP label: EmailIdentity.");
    }
    let body;
    const { hostname, protocol = "https", port } = await context.endpoint();
    return new protocol_http_1.HttpRequest({
        protocol,
        hostname,
        port,
        method: "GET",
        headers,
        path: resolvedPath,
        body,
    });
};
exports.serializeAws_restJson1GetEmailIdentityCommand = serializeAws_restJson1GetEmailIdentityCommand;
const serializeAws_restJson1GetEmailIdentityPoliciesCommand = async (input, context) => {
    const headers = {};
    let resolvedPath = "/v2/email/identities/{EmailIdentity}/policies";
    if (input.EmailIdentity !== undefined) {
        const labelValue = input.EmailIdentity;
        if (labelValue.length <= 0) {
            throw new Error("Empty value provided for input HTTP label: EmailIdentity.");
        }
        resolvedPath = resolvedPath.replace("{EmailIdentity}", smithy_client_1.extendedEncodeURIComponent(labelValue));
    }
    else {
        throw new Error("No value provided for input HTTP label: EmailIdentity.");
    }
    let body;
    const { hostname, protocol = "https", port } = await context.endpoint();
    return new protocol_http_1.HttpRequest({
        protocol,
        hostname,
        port,
        method: "GET",
        headers,
        path: resolvedPath,
        body,
    });
};
exports.serializeAws_restJson1GetEmailIdentityPoliciesCommand = serializeAws_restJson1GetEmailIdentityPoliciesCommand;
const serializeAws_restJson1GetEmailTemplateCommand = async (input, context) => {
    const headers = {};
    let resolvedPath = "/v2/email/templates/{TemplateName}";
    if (input.TemplateName !== undefined) {
        const labelValue = input.TemplateName;
        if (labelValue.length <= 0) {
            throw new Error("Empty value provided for input HTTP label: TemplateName.");
        }
        resolvedPath = resolvedPath.replace("{TemplateName}", smithy_client_1.extendedEncodeURIComponent(labelValue));
    }
    else {
        throw new Error("No value provided for input HTTP label: TemplateName.");
    }
    let body;
    const { hostname, protocol = "https", port } = await context.endpoint();
    return new protocol_http_1.HttpRequest({
        protocol,
        hostname,
        port,
        method: "GET",
        headers,
        path: resolvedPath,
        body,
    });
};
exports.serializeAws_restJson1GetEmailTemplateCommand = serializeAws_restJson1GetEmailTemplateCommand;
const serializeAws_restJson1GetImportJobCommand = async (input, context) => {
    const headers = {};
    let resolvedPath = "/v2/email/import-jobs/{JobId}";
    if (input.JobId !== undefined) {
        const labelValue = input.JobId;
        if (labelValue.length <= 0) {
            throw new Error("Empty value provided for input HTTP label: JobId.");
        }
        resolvedPath = resolvedPath.replace("{JobId}", smithy_client_1.extendedEncodeURIComponent(labelValue));
    }
    else {
        throw new Error("No value provided for input HTTP label: JobId.");
    }
    let body;
    const { hostname, protocol = "https", port } = await context.endpoint();
    return new protocol_http_1.HttpRequest({
        protocol,
        hostname,
        port,
        method: "GET",
        headers,
        path: resolvedPath,
        body,
    });
};
exports.serializeAws_restJson1GetImportJobCommand = serializeAws_restJson1GetImportJobCommand;
const serializeAws_restJson1GetSuppressedDestinationCommand = async (input, context) => {
    const headers = {};
    let resolvedPath = "/v2/email/suppression/addresses/{EmailAddress}";
    if (input.EmailAddress !== undefined) {
        const labelValue = input.EmailAddress;
        if (labelValue.length <= 0) {
            throw new Error("Empty value provided for input HTTP label: EmailAddress.");
        }
        resolvedPath = resolvedPath.replace("{EmailAddress}", smithy_client_1.extendedEncodeURIComponent(labelValue));
    }
    else {
        throw new Error("No value provided for input HTTP label: EmailAddress.");
    }
    let body;
    const { hostname, protocol = "https", port } = await context.endpoint();
    return new protocol_http_1.HttpRequest({
        protocol,
        hostname,
        port,
        method: "GET",
        headers,
        path: resolvedPath,
        body,
    });
};
exports.serializeAws_restJson1GetSuppressedDestinationCommand = serializeAws_restJson1GetSuppressedDestinationCommand;
const serializeAws_restJson1ListConfigurationSetsCommand = async (input, context) => {
    const headers = {};
    let resolvedPath = "/v2/email/configuration-sets";
    const query = {
        ...(input.NextToken !== undefined && { NextToken: input.NextToken }),
        ...(input.PageSize !== undefined && { PageSize: input.PageSize.toString() }),
    };
    let body;
    const { hostname, protocol = "https", port } = await context.endpoint();
    return new protocol_http_1.HttpRequest({
        protocol,
        hostname,
        port,
        method: "GET",
        headers,
        path: resolvedPath,
        query,
        body,
    });
};
exports.serializeAws_restJson1ListConfigurationSetsCommand = serializeAws_restJson1ListConfigurationSetsCommand;
const serializeAws_restJson1ListContactListsCommand = async (input, context) => {
    const headers = {};
    let resolvedPath = "/v2/email/contact-lists";
    const query = {
        ...(input.PageSize !== undefined && { PageSize: input.PageSize.toString() }),
        ...(input.NextToken !== undefined && { NextToken: input.NextToken }),
    };
    let body;
    const { hostname, protocol = "https", port } = await context.endpoint();
    return new protocol_http_1.HttpRequest({
        protocol,
        hostname,
        port,
        method: "GET",
        headers,
        path: resolvedPath,
        query,
        body,
    });
};
exports.serializeAws_restJson1ListContactListsCommand = serializeAws_restJson1ListContactListsCommand;
const serializeAws_restJson1ListContactsCommand = async (input, context) => {
    const headers = {
        "content-type": "application/json",
    };
    let resolvedPath = "/v2/email/contact-lists/{ContactListName}/contacts";
    if (input.ContactListName !== undefined) {
        const labelValue = input.ContactListName;
        if (labelValue.length <= 0) {
            throw new Error("Empty value provided for input HTTP label: ContactListName.");
        }
        resolvedPath = resolvedPath.replace("{ContactListName}", smithy_client_1.extendedEncodeURIComponent(labelValue));
    }
    else {
        throw new Error("No value provided for input HTTP label: ContactListName.");
    }
    const query = {
        ...(input.PageSize !== undefined && { PageSize: input.PageSize.toString() }),
        ...(input.NextToken !== undefined && { NextToken: input.NextToken }),
    };
    let body;
    body = JSON.stringify({
        ...(input.Filter !== undefined &&
            input.Filter !== null && { Filter: serializeAws_restJson1ListContactsFilter(input.Filter, context) }),
    });
    const { hostname, protocol = "https", port } = await context.endpoint();
    return new protocol_http_1.HttpRequest({
        protocol,
        hostname,
        port,
        method: "GET",
        headers,
        path: resolvedPath,
        query,
        body,
    });
};
exports.serializeAws_restJson1ListContactsCommand = serializeAws_restJson1ListContactsCommand;
const serializeAws_restJson1ListCustomVerificationEmailTemplatesCommand = async (input, context) => {
    const headers = {};
    let resolvedPath = "/v2/email/custom-verification-email-templates";
    const query = {
        ...(input.NextToken !== undefined && { NextToken: input.NextToken }),
        ...(input.PageSize !== undefined && { PageSize: input.PageSize.toString() }),
    };
    let body;
    const { hostname, protocol = "https", port } = await context.endpoint();
    return new protocol_http_1.HttpRequest({
        protocol,
        hostname,
        port,
        method: "GET",
        headers,
        path: resolvedPath,
        query,
        body,
    });
};
exports.serializeAws_restJson1ListCustomVerificationEmailTemplatesCommand = serializeAws_restJson1ListCustomVerificationEmailTemplatesCommand;
const serializeAws_restJson1ListDedicatedIpPoolsCommand = async (input, context) => {
    const headers = {};
    let resolvedPath = "/v2/email/dedicated-ip-pools";
    const query = {
        ...(input.NextToken !== undefined && { NextToken: input.NextToken }),
        ...(input.PageSize !== undefined && { PageSize: input.PageSize.toString() }),
    };
    let body;
    const { hostname, protocol = "https", port } = await context.endpoint();
    return new protocol_http_1.HttpRequest({
        protocol,
        hostname,
        port,
        method: "GET",
        headers,
        path: resolvedPath,
        query,
        body,
    });
};
exports.serializeAws_restJson1ListDedicatedIpPoolsCommand = serializeAws_restJson1ListDedicatedIpPoolsCommand;
const serializeAws_restJson1ListDeliverabilityTestReportsCommand = async (input, context) => {
    const headers = {};
    let resolvedPath = "/v2/email/deliverability-dashboard/test-reports";
    const query = {
        ...(input.NextToken !== undefined && { NextToken: input.NextToken }),
        ...(input.PageSize !== undefined && { PageSize: input.PageSize.toString() }),
    };
    let body;
    const { hostname, protocol = "https", port } = await context.endpoint();
    return new protocol_http_1.HttpRequest({
        protocol,
        hostname,
        port,
        method: "GET",
        headers,
        path: resolvedPath,
        query,
        body,
    });
};
exports.serializeAws_restJson1ListDeliverabilityTestReportsCommand = serializeAws_restJson1ListDeliverabilityTestReportsCommand;
const serializeAws_restJson1ListDomainDeliverabilityCampaignsCommand = async (input, context) => {
    const headers = {};
    let resolvedPath = "/v2/email/deliverability-dashboard/domains/{SubscribedDomain}/campaigns";
    if (input.SubscribedDomain !== undefined) {
        const labelValue = input.SubscribedDomain;
        if (labelValue.length <= 0) {
            throw new Error("Empty value provided for input HTTP label: SubscribedDomain.");
        }
        resolvedPath = resolvedPath.replace("{SubscribedDomain}", smithy_client_1.extendedEncodeURIComponent(labelValue));
    }
    else {
        throw new Error("No value provided for input HTTP label: SubscribedDomain.");
    }
    const query = {
        ...(input.StartDate !== undefined && { StartDate: (input.StartDate.toISOString().split(".")[0] + "Z").toString() }),
        ...(input.EndDate !== undefined && { EndDate: (input.EndDate.toISOString().split(".")[0] + "Z").toString() }),
        ...(input.NextToken !== undefined && { NextToken: input.NextToken }),
        ...(input.PageSize !== undefined && { PageSize: input.PageSize.toString() }),
    };
    let body;
    const { hostname, protocol = "https", port } = await context.endpoint();
    return new protocol_http_1.HttpRequest({
        protocol,
        hostname,
        port,
        method: "GET",
        headers,
        path: resolvedPath,
        query,
        body,
    });
};
exports.serializeAws_restJson1ListDomainDeliverabilityCampaignsCommand = serializeAws_restJson1ListDomainDeliverabilityCampaignsCommand;
const serializeAws_restJson1ListEmailIdentitiesCommand = async (input, context) => {
    const headers = {};
    let resolvedPath = "/v2/email/identities";
    const query = {
        ...(input.NextToken !== undefined && { NextToken: input.NextToken }),
        ...(input.PageSize !== undefined && { PageSize: input.PageSize.toString() }),
    };
    let body;
    const { hostname, protocol = "https", port } = await context.endpoint();
    return new protocol_http_1.HttpRequest({
        protocol,
        hostname,
        port,
        method: "GET",
        headers,
        path: resolvedPath,
        query,
        body,
    });
};
exports.serializeAws_restJson1ListEmailIdentitiesCommand = serializeAws_restJson1ListEmailIdentitiesCommand;
const serializeAws_restJson1ListEmailTemplatesCommand = async (input, context) => {
    const headers = {};
    let resolvedPath = "/v2/email/templates";
    const query = {
        ...(input.NextToken !== undefined && { NextToken: input.NextToken }),
        ...(input.PageSize !== undefined && { PageSize: input.PageSize.toString() }),
    };
    let body;
    const { hostname, protocol = "https", port } = await context.endpoint();
    return new protocol_http_1.HttpRequest({
        protocol,
        hostname,
        port,
        method: "GET",
        headers,
        path: resolvedPath,
        query,
        body,
    });
};
exports.serializeAws_restJson1ListEmailTemplatesCommand = serializeAws_restJson1ListEmailTemplatesCommand;
const serializeAws_restJson1ListImportJobsCommand = async (input, context) => {
    const headers = {
        "content-type": "application/json",
    };
    let resolvedPath = "/v2/email/import-jobs";
    const query = {
        ...(input.NextToken !== undefined && { NextToken: input.NextToken }),
        ...(input.PageSize !== undefined && { PageSize: input.PageSize.toString() }),
    };
    let body;
    body = JSON.stringify({
        ...(input.ImportDestinationType !== undefined &&
            input.ImportDestinationType !== null && { ImportDestinationType: input.ImportDestinationType }),
    });
    const { hostname, protocol = "https", port } = await context.endpoint();
    return new protocol_http_1.HttpRequest({
        protocol,
        hostname,
        port,
        method: "GET",
        headers,
        path: resolvedPath,
        query,
        body,
    });
};
exports.serializeAws_restJson1ListImportJobsCommand = serializeAws_restJson1ListImportJobsCommand;
const serializeAws_restJson1ListSuppressedDestinationsCommand = async (input, context) => {
    const headers = {};
    let resolvedPath = "/v2/email/suppression/addresses";
    const query = {
        ...(input.Reasons !== undefined && { Reason: (input.Reasons || []).map((_entry) => _entry) }),
        ...(input.StartDate !== undefined && { StartDate: (input.StartDate.toISOString().split(".")[0] + "Z").toString() }),
        ...(input.EndDate !== undefined && { EndDate: (input.EndDate.toISOString().split(".")[0] + "Z").toString() }),
        ...(input.NextToken !== undefined && { NextToken: input.NextToken }),
        ...(input.PageSize !== undefined && { PageSize: input.PageSize.toString() }),
    };
    let body;
    const { hostname, protocol = "https", port } = await context.endpoint();
    return new protocol_http_1.HttpRequest({
        protocol,
        hostname,
        port,
        method: "GET",
        headers,
        path: resolvedPath,
        query,
        body,
    });
};
exports.serializeAws_restJson1ListSuppressedDestinationsCommand = serializeAws_restJson1ListSuppressedDestinationsCommand;
const serializeAws_restJson1ListTagsForResourceCommand = async (input, context) => {
    const headers = {};
    let resolvedPath = "/v2/email/tags";
    const query = {
        ...(input.ResourceArn !== undefined && { ResourceArn: input.ResourceArn }),
    };
    let body;
    const { hostname, protocol = "https", port } = await context.endpoint();
    return new protocol_http_1.HttpRequest({
        protocol,
        hostname,
        port,
        method: "GET",
        headers,
        path: resolvedPath,
        query,
        body,
    });
};
exports.serializeAws_restJson1ListTagsForResourceCommand = serializeAws_restJson1ListTagsForResourceCommand;
const serializeAws_restJson1PutAccountDedicatedIpWarmupAttributesCommand = async (input, context) => {
    const headers = {
        "content-type": "application/json",
    };
    let resolvedPath = "/v2/email/account/dedicated-ips/warmup";
    let body;
    body = JSON.stringify({
        ...(input.AutoWarmupEnabled !== undefined &&
            input.AutoWarmupEnabled !== null && { AutoWarmupEnabled: input.AutoWarmupEnabled }),
    });
    const { hostname, protocol = "https", port } = await context.endpoint();
    return new protocol_http_1.HttpRequest({
        protocol,
        hostname,
        port,
        method: "PUT",
        headers,
        path: resolvedPath,
        body,
    });
};
exports.serializeAws_restJson1PutAccountDedicatedIpWarmupAttributesCommand = serializeAws_restJson1PutAccountDedicatedIpWarmupAttributesCommand;
const serializeAws_restJson1PutAccountDetailsCommand = async (input, context) => {
    const headers = {
        "content-type": "application/json",
    };
    let resolvedPath = "/v2/email/account/details";
    let body;
    body = JSON.stringify({
        ...(input.AdditionalContactEmailAddresses !== undefined &&
            input.AdditionalContactEmailAddresses !== null && {
            AdditionalContactEmailAddresses: serializeAws_restJson1AdditionalContactEmailAddresses(input.AdditionalContactEmailAddresses, context),
        }),
        ...(input.ContactLanguage !== undefined &&
            input.ContactLanguage !== null && { ContactLanguage: input.ContactLanguage }),
        ...(input.MailType !== undefined && input.MailType !== null && { MailType: input.MailType }),
        ...(input.ProductionAccessEnabled !== undefined &&
            input.ProductionAccessEnabled !== null && { ProductionAccessEnabled: input.ProductionAccessEnabled }),
        ...(input.UseCaseDescription !== undefined &&
            input.UseCaseDescription !== null && { UseCaseDescription: input.UseCaseDescription }),
        ...(input.WebsiteURL !== undefined && input.WebsiteURL !== null && { WebsiteURL: input.WebsiteURL }),
    });
    const { hostname, protocol = "https", port } = await context.endpoint();
    return new protocol_http_1.HttpRequest({
        protocol,
        hostname,
        port,
        method: "POST",
        headers,
        path: resolvedPath,
        body,
    });
};
exports.serializeAws_restJson1PutAccountDetailsCommand = serializeAws_restJson1PutAccountDetailsCommand;
const serializeAws_restJson1PutAccountSendingAttributesCommand = async (input, context) => {
    const headers = {
        "content-type": "application/json",
    };
    let resolvedPath = "/v2/email/account/sending";
    let body;
    body = JSON.stringify({
        ...(input.SendingEnabled !== undefined &&
            input.SendingEnabled !== null && { SendingEnabled: input.SendingEnabled }),
    });
    const { hostname, protocol = "https", port } = await context.endpoint();
    return new protocol_http_1.HttpRequest({
        protocol,
        hostname,
        port,
        method: "PUT",
        headers,
        path: resolvedPath,
        body,
    });
};
exports.serializeAws_restJson1PutAccountSendingAttributesCommand = serializeAws_restJson1PutAccountSendingAttributesCommand;
const serializeAws_restJson1PutAccountSuppressionAttributesCommand = async (input, context) => {
    const headers = {
        "content-type": "application/json",
    };
    let resolvedPath = "/v2/email/account/suppression";
    let body;
    body = JSON.stringify({
        ...(input.SuppressedReasons !== undefined &&
            input.SuppressedReasons !== null && {
            SuppressedReasons: serializeAws_restJson1SuppressionListReasons(input.SuppressedReasons, context),
        }),
    });
    const { hostname, protocol = "https", port } = await context.endpoint();
    return new protocol_http_1.HttpRequest({
        protocol,
        hostname,
        port,
        method: "PUT",
        headers,
        path: resolvedPath,
        body,
    });
};
exports.serializeAws_restJson1PutAccountSuppressionAttributesCommand = serializeAws_restJson1PutAccountSuppressionAttributesCommand;
const serializeAws_restJson1PutConfigurationSetDeliveryOptionsCommand = async (input, context) => {
    const headers = {
        "content-type": "application/json",
    };
    let resolvedPath = "/v2/email/configuration-sets/{ConfigurationSetName}/delivery-options";
    if (input.ConfigurationSetName !== undefined) {
        const labelValue = input.ConfigurationSetName;
        if (labelValue.length <= 0) {
            throw new Error("Empty value provided for input HTTP label: ConfigurationSetName.");
        }
        resolvedPath = resolvedPath.replace("{ConfigurationSetName}", smithy_client_1.extendedEncodeURIComponent(labelValue));
    }
    else {
        throw new Error("No value provided for input HTTP label: ConfigurationSetName.");
    }
    let body;
    body = JSON.stringify({
        ...(input.SendingPoolName !== undefined &&
            input.SendingPoolName !== null && { SendingPoolName: input.SendingPoolName }),
        ...(input.TlsPolicy !== undefined && input.TlsPolicy !== null && { TlsPolicy: input.TlsPolicy }),
    });
    const { hostname, protocol = "https", port } = await context.endpoint();
    return new protocol_http_1.HttpRequest({
        protocol,
        hostname,
        port,
        method: "PUT",
        headers,
        path: resolvedPath,
        body,
    });
};
exports.serializeAws_restJson1PutConfigurationSetDeliveryOptionsCommand = serializeAws_restJson1PutConfigurationSetDeliveryOptionsCommand;
const serializeAws_restJson1PutConfigurationSetReputationOptionsCommand = async (input, context) => {
    const headers = {
        "content-type": "application/json",
    };
    let resolvedPath = "/v2/email/configuration-sets/{ConfigurationSetName}/reputation-options";
    if (input.ConfigurationSetName !== undefined) {
        const labelValue = input.ConfigurationSetName;
        if (labelValue.length <= 0) {
            throw new Error("Empty value provided for input HTTP label: ConfigurationSetName.");
        }
        resolvedPath = resolvedPath.replace("{ConfigurationSetName}", smithy_client_1.extendedEncodeURIComponent(labelValue));
    }
    else {
        throw new Error("No value provided for input HTTP label: ConfigurationSetName.");
    }
    let body;
    body = JSON.stringify({
        ...(input.ReputationMetricsEnabled !== undefined &&
            input.ReputationMetricsEnabled !== null && { ReputationMetricsEnabled: input.ReputationMetricsEnabled }),
    });
    const { hostname, protocol = "https", port } = await context.endpoint();
    return new protocol_http_1.HttpRequest({
        protocol,
        hostname,
        port,
        method: "PUT",
        headers,
        path: resolvedPath,
        body,
    });
};
exports.serializeAws_restJson1PutConfigurationSetReputationOptionsCommand = serializeAws_restJson1PutConfigurationSetReputationOptionsCommand;
const serializeAws_restJson1PutConfigurationSetSendingOptionsCommand = async (input, context) => {
    const headers = {
        "content-type": "application/json",
    };
    let resolvedPath = "/v2/email/configuration-sets/{ConfigurationSetName}/sending";
    if (input.ConfigurationSetName !== undefined) {
        const labelValue = input.ConfigurationSetName;
        if (labelValue.length <= 0) {
            throw new Error("Empty value provided for input HTTP label: ConfigurationSetName.");
        }
        resolvedPath = resolvedPath.replace("{ConfigurationSetName}", smithy_client_1.extendedEncodeURIComponent(labelValue));
    }
    else {
        throw new Error("No value provided for input HTTP label: ConfigurationSetName.");
    }
    let body;
    body = JSON.stringify({
        ...(input.SendingEnabled !== undefined &&
            input.SendingEnabled !== null && { SendingEnabled: input.SendingEnabled }),
    });
    const { hostname, protocol = "https", port } = await context.endpoint();
    return new protocol_http_1.HttpRequest({
        protocol,
        hostname,
        port,
        method: "PUT",
        headers,
        path: resolvedPath,
        body,
    });
};
exports.serializeAws_restJson1PutConfigurationSetSendingOptionsCommand = serializeAws_restJson1PutConfigurationSetSendingOptionsCommand;
const serializeAws_restJson1PutConfigurationSetSuppressionOptionsCommand = async (input, context) => {
    const headers = {
        "content-type": "application/json",
    };
    let resolvedPath = "/v2/email/configuration-sets/{ConfigurationSetName}/suppression-options";
    if (input.ConfigurationSetName !== undefined) {
        const labelValue = input.ConfigurationSetName;
        if (labelValue.length <= 0) {
            throw new Error("Empty value provided for input HTTP label: ConfigurationSetName.");
        }
        resolvedPath = resolvedPath.replace("{ConfigurationSetName}", smithy_client_1.extendedEncodeURIComponent(labelValue));
    }
    else {
        throw new Error("No value provided for input HTTP label: ConfigurationSetName.");
    }
    let body;
    body = JSON.stringify({
        ...(input.SuppressedReasons !== undefined &&
            input.SuppressedReasons !== null && {
            SuppressedReasons: serializeAws_restJson1SuppressionListReasons(input.SuppressedReasons, context),
        }),
    });
    const { hostname, protocol = "https", port } = await context.endpoint();
    return new protocol_http_1.HttpRequest({
        protocol,
        hostname,
        port,
        method: "PUT",
        headers,
        path: resolvedPath,
        body,
    });
};
exports.serializeAws_restJson1PutConfigurationSetSuppressionOptionsCommand = serializeAws_restJson1PutConfigurationSetSuppressionOptionsCommand;
const serializeAws_restJson1PutConfigurationSetTrackingOptionsCommand = async (input, context) => {
    const headers = {
        "content-type": "application/json",
    };
    let resolvedPath = "/v2/email/configuration-sets/{ConfigurationSetName}/tracking-options";
    if (input.ConfigurationSetName !== undefined) {
        const labelValue = input.ConfigurationSetName;
        if (labelValue.length <= 0) {
            throw new Error("Empty value provided for input HTTP label: ConfigurationSetName.");
        }
        resolvedPath = resolvedPath.replace("{ConfigurationSetName}", smithy_client_1.extendedEncodeURIComponent(labelValue));
    }
    else {
        throw new Error("No value provided for input HTTP label: ConfigurationSetName.");
    }
    let body;
    body = JSON.stringify({
        ...(input.CustomRedirectDomain !== undefined &&
            input.CustomRedirectDomain !== null && { CustomRedirectDomain: input.CustomRedirectDomain }),
    });
    const { hostname, protocol = "https", port } = await context.endpoint();
    return new protocol_http_1.HttpRequest({
        protocol,
        hostname,
        port,
        method: "PUT",
        headers,
        path: resolvedPath,
        body,
    });
};
exports.serializeAws_restJson1PutConfigurationSetTrackingOptionsCommand = serializeAws_restJson1PutConfigurationSetTrackingOptionsCommand;
const serializeAws_restJson1PutDedicatedIpInPoolCommand = async (input, context) => {
    const headers = {
        "content-type": "application/json",
    };
    let resolvedPath = "/v2/email/dedicated-ips/{Ip}/pool";
    if (input.Ip !== undefined) {
        const labelValue = input.Ip;
        if (labelValue.length <= 0) {
            throw new Error("Empty value provided for input HTTP label: Ip.");
        }
        resolvedPath = resolvedPath.replace("{Ip}", smithy_client_1.extendedEncodeURIComponent(labelValue));
    }
    else {
        throw new Error("No value provided for input HTTP label: Ip.");
    }
    let body;
    body = JSON.stringify({
        ...(input.DestinationPoolName !== undefined &&
            input.DestinationPoolName !== null && { DestinationPoolName: input.DestinationPoolName }),
    });
    const { hostname, protocol = "https", port } = await context.endpoint();
    return new protocol_http_1.HttpRequest({
        protocol,
        hostname,
        port,
        method: "PUT",
        headers,
        path: resolvedPath,
        body,
    });
};
exports.serializeAws_restJson1PutDedicatedIpInPoolCommand = serializeAws_restJson1PutDedicatedIpInPoolCommand;
const serializeAws_restJson1PutDedicatedIpWarmupAttributesCommand = async (input, context) => {
    const headers = {
        "content-type": "application/json",
    };
    let resolvedPath = "/v2/email/dedicated-ips/{Ip}/warmup";
    if (input.Ip !== undefined) {
        const labelValue = input.Ip;
        if (labelValue.length <= 0) {
            throw new Error("Empty value provided for input HTTP label: Ip.");
        }
        resolvedPath = resolvedPath.replace("{Ip}", smithy_client_1.extendedEncodeURIComponent(labelValue));
    }
    else {
        throw new Error("No value provided for input HTTP label: Ip.");
    }
    let body;
    body = JSON.stringify({
        ...(input.WarmupPercentage !== undefined &&
            input.WarmupPercentage !== null && { WarmupPercentage: input.WarmupPercentage }),
    });
    const { hostname, protocol = "https", port } = await context.endpoint();
    return new protocol_http_1.HttpRequest({
        protocol,
        hostname,
        port,
        method: "PUT",
        headers,
        path: resolvedPath,
        body,
    });
};
exports.serializeAws_restJson1PutDedicatedIpWarmupAttributesCommand = serializeAws_restJson1PutDedicatedIpWarmupAttributesCommand;
const serializeAws_restJson1PutDeliverabilityDashboardOptionCommand = async (input, context) => {
    const headers = {
        "content-type": "application/json",
    };
    let resolvedPath = "/v2/email/deliverability-dashboard";
    let body;
    body = JSON.stringify({
        ...(input.DashboardEnabled !== undefined &&
            input.DashboardEnabled !== null && { DashboardEnabled: input.DashboardEnabled }),
        ...(input.SubscribedDomains !== undefined &&
            input.SubscribedDomains !== null && {
            SubscribedDomains: serializeAws_restJson1DomainDeliverabilityTrackingOptions(input.SubscribedDomains, context),
        }),
    });
    const { hostname, protocol = "https", port } = await context.endpoint();
    return new protocol_http_1.HttpRequest({
        protocol,
        hostname,
        port,
        method: "PUT",
        headers,
        path: resolvedPath,
        body,
    });
};
exports.serializeAws_restJson1PutDeliverabilityDashboardOptionCommand = serializeAws_restJson1PutDeliverabilityDashboardOptionCommand;
const serializeAws_restJson1PutEmailIdentityConfigurationSetAttributesCommand = async (input, context) => {
    const headers = {
        "content-type": "application/json",
    };
    let resolvedPath = "/v2/email/identities/{EmailIdentity}/configuration-set";
    if (input.EmailIdentity !== undefined) {
        const labelValue = input.EmailIdentity;
        if (labelValue.length <= 0) {
            throw new Error("Empty value provided for input HTTP label: EmailIdentity.");
        }
        resolvedPath = resolvedPath.replace("{EmailIdentity}", smithy_client_1.extendedEncodeURIComponent(labelValue));
    }
    else {
        throw new Error("No value provided for input HTTP label: EmailIdentity.");
    }
    let body;
    body = JSON.stringify({
        ...(input.ConfigurationSetName !== undefined &&
            input.ConfigurationSetName !== null && { ConfigurationSetName: input.ConfigurationSetName }),
    });
    const { hostname, protocol = "https", port } = await context.endpoint();
    return new protocol_http_1.HttpRequest({
        protocol,
        hostname,
        port,
        method: "PUT",
        headers,
        path: resolvedPath,
        body,
    });
};
exports.serializeAws_restJson1PutEmailIdentityConfigurationSetAttributesCommand = serializeAws_restJson1PutEmailIdentityConfigurationSetAttributesCommand;
const serializeAws_restJson1PutEmailIdentityDkimAttributesCommand = async (input, context) => {
    const headers = {
        "content-type": "application/json",
    };
    let resolvedPath = "/v2/email/identities/{EmailIdentity}/dkim";
    if (input.EmailIdentity !== undefined) {
        const labelValue = input.EmailIdentity;
        if (labelValue.length <= 0) {
            throw new Error("Empty value provided for input HTTP label: EmailIdentity.");
        }
        resolvedPath = resolvedPath.replace("{EmailIdentity}", smithy_client_1.extendedEncodeURIComponent(labelValue));
    }
    else {
        throw new Error("No value provided for input HTTP label: EmailIdentity.");
    }
    let body;
    body = JSON.stringify({
        ...(input.SigningEnabled !== undefined &&
            input.SigningEnabled !== null && { SigningEnabled: input.SigningEnabled }),
    });
    const { hostname, protocol = "https", port } = await context.endpoint();
    return new protocol_http_1.HttpRequest({
        protocol,
        hostname,
        port,
        method: "PUT",
        headers,
        path: resolvedPath,
        body,
    });
};
exports.serializeAws_restJson1PutEmailIdentityDkimAttributesCommand = serializeAws_restJson1PutEmailIdentityDkimAttributesCommand;
const serializeAws_restJson1PutEmailIdentityDkimSigningAttributesCommand = async (input, context) => {
    const headers = {
        "content-type": "application/json",
    };
    let resolvedPath = "/v1/email/identities/{EmailIdentity}/dkim/signing";
    if (input.EmailIdentity !== undefined) {
        const labelValue = input.EmailIdentity;
        if (labelValue.length <= 0) {
            throw new Error("Empty value provided for input HTTP label: EmailIdentity.");
        }
        resolvedPath = resolvedPath.replace("{EmailIdentity}", smithy_client_1.extendedEncodeURIComponent(labelValue));
    }
    else {
        throw new Error("No value provided for input HTTP label: EmailIdentity.");
    }
    let body;
    body = JSON.stringify({
        ...(input.SigningAttributes !== undefined &&
            input.SigningAttributes !== null && {
            SigningAttributes: serializeAws_restJson1DkimSigningAttributes(input.SigningAttributes, context),
        }),
        ...(input.SigningAttributesOrigin !== undefined &&
            input.SigningAttributesOrigin !== null && { SigningAttributesOrigin: input.SigningAttributesOrigin }),
    });
    const { hostname, protocol = "https", port } = await context.endpoint();
    return new protocol_http_1.HttpRequest({
        protocol,
        hostname,
        port,
        method: "PUT",
        headers,
        path: resolvedPath,
        body,
    });
};
exports.serializeAws_restJson1PutEmailIdentityDkimSigningAttributesCommand = serializeAws_restJson1PutEmailIdentityDkimSigningAttributesCommand;
const serializeAws_restJson1PutEmailIdentityFeedbackAttributesCommand = async (input, context) => {
    const headers = {
        "content-type": "application/json",
    };
    let resolvedPath = "/v2/email/identities/{EmailIdentity}/feedback";
    if (input.EmailIdentity !== undefined) {
        const labelValue = input.EmailIdentity;
        if (labelValue.length <= 0) {
            throw new Error("Empty value provided for input HTTP label: EmailIdentity.");
        }
        resolvedPath = resolvedPath.replace("{EmailIdentity}", smithy_client_1.extendedEncodeURIComponent(labelValue));
    }
    else {
        throw new Error("No value provided for input HTTP label: EmailIdentity.");
    }
    let body;
    body = JSON.stringify({
        ...(input.EmailForwardingEnabled !== undefined &&
            input.EmailForwardingEnabled !== null && { EmailForwardingEnabled: input.EmailForwardingEnabled }),
    });
    const { hostname, protocol = "https", port } = await context.endpoint();
    return new protocol_http_1.HttpRequest({
        protocol,
        hostname,
        port,
        method: "PUT",
        headers,
        path: resolvedPath,
        body,
    });
};
exports.serializeAws_restJson1PutEmailIdentityFeedbackAttributesCommand = serializeAws_restJson1PutEmailIdentityFeedbackAttributesCommand;
const serializeAws_restJson1PutEmailIdentityMailFromAttributesCommand = async (input, context) => {
    const headers = {
        "content-type": "application/json",
    };
    let resolvedPath = "/v2/email/identities/{EmailIdentity}/mail-from";
    if (input.EmailIdentity !== undefined) {
        const labelValue = input.EmailIdentity;
        if (labelValue.length <= 0) {
            throw new Error("Empty value provided for input HTTP label: EmailIdentity.");
        }
        resolvedPath = resolvedPath.replace("{EmailIdentity}", smithy_client_1.extendedEncodeURIComponent(labelValue));
    }
    else {
        throw new Error("No value provided for input HTTP label: EmailIdentity.");
    }
    let body;
    body = JSON.stringify({
        ...(input.BehaviorOnMxFailure !== undefined &&
            input.BehaviorOnMxFailure !== null && { BehaviorOnMxFailure: input.BehaviorOnMxFailure }),
        ...(input.MailFromDomain !== undefined &&
            input.MailFromDomain !== null && { MailFromDomain: input.MailFromDomain }),
    });
    const { hostname, protocol = "https", port } = await context.endpoint();
    return new protocol_http_1.HttpRequest({
        protocol,
        hostname,
        port,
        method: "PUT",
        headers,
        path: resolvedPath,
        body,
    });
};
exports.serializeAws_restJson1PutEmailIdentityMailFromAttributesCommand = serializeAws_restJson1PutEmailIdentityMailFromAttributesCommand;
const serializeAws_restJson1PutSuppressedDestinationCommand = async (input, context) => {
    const headers = {
        "content-type": "application/json",
    };
    let resolvedPath = "/v2/email/suppression/addresses";
    let body;
    body = JSON.stringify({
        ...(input.EmailAddress !== undefined && input.EmailAddress !== null && { EmailAddress: input.EmailAddress }),
        ...(input.Reason !== undefined && input.Reason !== null && { Reason: input.Reason }),
    });
    const { hostname, protocol = "https", port } = await context.endpoint();
    return new protocol_http_1.HttpRequest({
        protocol,
        hostname,
        port,
        method: "PUT",
        headers,
        path: resolvedPath,
        body,
    });
};
exports.serializeAws_restJson1PutSuppressedDestinationCommand = serializeAws_restJson1PutSuppressedDestinationCommand;
const serializeAws_restJson1SendBulkEmailCommand = async (input, context) => {
    const headers = {
        "content-type": "application/json",
    };
    let resolvedPath = "/v2/email/outbound-bulk-emails";
    let body;
    body = JSON.stringify({
        ...(input.BulkEmailEntries !== undefined &&
            input.BulkEmailEntries !== null && {
            BulkEmailEntries: serializeAws_restJson1BulkEmailEntryList(input.BulkEmailEntries, context),
        }),
        ...(input.ConfigurationSetName !== undefined &&
            input.ConfigurationSetName !== null && { ConfigurationSetName: input.ConfigurationSetName }),
        ...(input.DefaultContent !== undefined &&
            input.DefaultContent !== null && {
            DefaultContent: serializeAws_restJson1BulkEmailContent(input.DefaultContent, context),
        }),
        ...(input.DefaultEmailTags !== undefined &&
            input.DefaultEmailTags !== null && {
            DefaultEmailTags: serializeAws_restJson1MessageTagList(input.DefaultEmailTags, context),
        }),
        ...(input.FeedbackForwardingEmailAddress !== undefined &&
            input.FeedbackForwardingEmailAddress !== null && {
            FeedbackForwardingEmailAddress: input.FeedbackForwardingEmailAddress,
        }),
        ...(input.FeedbackForwardingEmailAddressIdentityArn !== undefined &&
            input.FeedbackForwardingEmailAddressIdentityArn !== null && {
            FeedbackForwardingEmailAddressIdentityArn: input.FeedbackForwardingEmailAddressIdentityArn,
        }),
        ...(input.FromEmailAddress !== undefined &&
            input.FromEmailAddress !== null && { FromEmailAddress: input.FromEmailAddress }),
        ...(input.FromEmailAddressIdentityArn !== undefined &&
            input.FromEmailAddressIdentityArn !== null && { FromEmailAddressIdentityArn: input.FromEmailAddressIdentityArn }),
        ...(input.ReplyToAddresses !== undefined &&
            input.ReplyToAddresses !== null && {
            ReplyToAddresses: serializeAws_restJson1EmailAddressList(input.ReplyToAddresses, context),
        }),
    });
    const { hostname, protocol = "https", port } = await context.endpoint();
    return new protocol_http_1.HttpRequest({
        protocol,
        hostname,
        port,
        method: "POST",
        headers,
        path: resolvedPath,
        body,
    });
};
exports.serializeAws_restJson1SendBulkEmailCommand = serializeAws_restJson1SendBulkEmailCommand;
const serializeAws_restJson1SendCustomVerificationEmailCommand = async (input, context) => {
    const headers = {
        "content-type": "application/json",
    };
    let resolvedPath = "/v2/email/outbound-custom-verification-emails";
    let body;
    body = JSON.stringify({
        ...(input.ConfigurationSetName !== undefined &&
            input.ConfigurationSetName !== null && { ConfigurationSetName: input.ConfigurationSetName }),
        ...(input.EmailAddress !== undefined && input.EmailAddress !== null && { EmailAddress: input.EmailAddress }),
        ...(input.TemplateName !== undefined && input.TemplateName !== null && { TemplateName: input.TemplateName }),
    });
    const { hostname, protocol = "https", port } = await context.endpoint();
    return new protocol_http_1.HttpRequest({
        protocol,
        hostname,
        port,
        method: "POST",
        headers,
        path: resolvedPath,
        body,
    });
};
exports.serializeAws_restJson1SendCustomVerificationEmailCommand = serializeAws_restJson1SendCustomVerificationEmailCommand;
const serializeAws_restJson1SendEmailCommand = async (input, context) => {
    const headers = {
        "content-type": "application/json",
    };
    let resolvedPath = "/v2/email/outbound-emails";
    let body;
    body = JSON.stringify({
        ...(input.ConfigurationSetName !== undefined &&
            input.ConfigurationSetName !== null && { ConfigurationSetName: input.ConfigurationSetName }),
        ...(input.Content !== undefined &&
            input.Content !== null && { Content: serializeAws_restJson1EmailContent(input.Content, context) }),
        ...(input.Destination !== undefined &&
            input.Destination !== null && { Destination: serializeAws_restJson1Destination(input.Destination, context) }),
        ...(input.EmailTags !== undefined &&
            input.EmailTags !== null && { EmailTags: serializeAws_restJson1MessageTagList(input.EmailTags, context) }),
        ...(input.FeedbackForwardingEmailAddress !== undefined &&
            input.FeedbackForwardingEmailAddress !== null && {
            FeedbackForwardingEmailAddress: input.FeedbackForwardingEmailAddress,
        }),
        ...(input.FeedbackForwardingEmailAddressIdentityArn !== undefined &&
            input.FeedbackForwardingEmailAddressIdentityArn !== null && {
            FeedbackForwardingEmailAddressIdentityArn: input.FeedbackForwardingEmailAddressIdentityArn,
        }),
        ...(input.FromEmailAddress !== undefined &&
            input.FromEmailAddress !== null && { FromEmailAddress: input.FromEmailAddress }),
        ...(input.FromEmailAddressIdentityArn !== undefined &&
            input.FromEmailAddressIdentityArn !== null && { FromEmailAddressIdentityArn: input.FromEmailAddressIdentityArn }),
        ...(input.ListManagementOptions !== undefined &&
            input.ListManagementOptions !== null && {
            ListManagementOptions: serializeAws_restJson1ListManagementOptions(input.ListManagementOptions, context),
        }),
        ...(input.ReplyToAddresses !== undefined &&
            input.ReplyToAddresses !== null && {
            ReplyToAddresses: serializeAws_restJson1EmailAddressList(input.ReplyToAddresses, context),
        }),
    });
    const { hostname, protocol = "https", port } = await context.endpoint();
    return new protocol_http_1.HttpRequest({
        protocol,
        hostname,
        port,
        method: "POST",
        headers,
        path: resolvedPath,
        body,
    });
};
exports.serializeAws_restJson1SendEmailCommand = serializeAws_restJson1SendEmailCommand;
const serializeAws_restJson1TagResourceCommand = async (input, context) => {
    const headers = {
        "content-type": "application/json",
    };
    let resolvedPath = "/v2/email/tags";
    let body;
    body = JSON.stringify({
        ...(input.ResourceArn !== undefined && input.ResourceArn !== null && { ResourceArn: input.ResourceArn }),
        ...(input.Tags !== undefined &&
            input.Tags !== null && { Tags: serializeAws_restJson1TagList(input.Tags, context) }),
    });
    const { hostname, protocol = "https", port } = await context.endpoint();
    return new protocol_http_1.HttpRequest({
        protocol,
        hostname,
        port,
        method: "POST",
        headers,
        path: resolvedPath,
        body,
    });
};
exports.serializeAws_restJson1TagResourceCommand = serializeAws_restJson1TagResourceCommand;
const serializeAws_restJson1TestRenderEmailTemplateCommand = async (input, context) => {
    const headers = {
        "content-type": "application/json",
    };
    let resolvedPath = "/v2/email/templates/{TemplateName}/render";
    if (input.TemplateName !== undefined) {
        const labelValue = input.TemplateName;
        if (labelValue.length <= 0) {
            throw new Error("Empty value provided for input HTTP label: TemplateName.");
        }
        resolvedPath = resolvedPath.replace("{TemplateName}", smithy_client_1.extendedEncodeURIComponent(labelValue));
    }
    else {
        throw new Error("No value provided for input HTTP label: TemplateName.");
    }
    let body;
    body = JSON.stringify({
        ...(input.TemplateData !== undefined && input.TemplateData !== null && { TemplateData: input.TemplateData }),
    });
    const { hostname, protocol = "https", port } = await context.endpoint();
    return new protocol_http_1.HttpRequest({
        protocol,
        hostname,
        port,
        method: "POST",
        headers,
        path: resolvedPath,
        body,
    });
};
exports.serializeAws_restJson1TestRenderEmailTemplateCommand = serializeAws_restJson1TestRenderEmailTemplateCommand;
const serializeAws_restJson1UntagResourceCommand = async (input, context) => {
    const headers = {};
    let resolvedPath = "/v2/email/tags";
    const query = {
        ...(input.ResourceArn !== undefined && { ResourceArn: input.ResourceArn }),
        ...(input.TagKeys !== undefined && { TagKeys: (input.TagKeys || []).map((_entry) => _entry) }),
    };
    let body;
    const { hostname, protocol = "https", port } = await context.endpoint();
    return new protocol_http_1.HttpRequest({
        protocol,
        hostname,
        port,
        method: "DELETE",
        headers,
        path: resolvedPath,
        query,
        body,
    });
};
exports.serializeAws_restJson1UntagResourceCommand = serializeAws_restJson1UntagResourceCommand;
const serializeAws_restJson1UpdateConfigurationSetEventDestinationCommand = async (input, context) => {
    const headers = {
        "content-type": "application/json",
    };
    let resolvedPath = "/v2/email/configuration-sets/{ConfigurationSetName}/event-destinations/{EventDestinationName}";
    if (input.ConfigurationSetName !== undefined) {
        const labelValue = input.ConfigurationSetName;
        if (labelValue.length <= 0) {
            throw new Error("Empty value provided for input HTTP label: ConfigurationSetName.");
        }
        resolvedPath = resolvedPath.replace("{ConfigurationSetName}", smithy_client_1.extendedEncodeURIComponent(labelValue));
    }
    else {
        throw new Error("No value provided for input HTTP label: ConfigurationSetName.");
    }
    if (input.EventDestinationName !== undefined) {
        const labelValue = input.EventDestinationName;
        if (labelValue.length <= 0) {
            throw new Error("Empty value provided for input HTTP label: EventDestinationName.");
        }
        resolvedPath = resolvedPath.replace("{EventDestinationName}", smithy_client_1.extendedEncodeURIComponent(labelValue));
    }
    else {
        throw new Error("No value provided for input HTTP label: EventDestinationName.");
    }
    let body;
    body = JSON.stringify({
        ...(input.EventDestination !== undefined &&
            input.EventDestination !== null && {
            EventDestination: serializeAws_restJson1EventDestinationDefinition(input.EventDestination, context),
        }),
    });
    const { hostname, protocol = "https", port } = await context.endpoint();
    return new protocol_http_1.HttpRequest({
        protocol,
        hostname,
        port,
        method: "PUT",
        headers,
        path: resolvedPath,
        body,
    });
};
exports.serializeAws_restJson1UpdateConfigurationSetEventDestinationCommand = serializeAws_restJson1UpdateConfigurationSetEventDestinationCommand;
const serializeAws_restJson1UpdateContactCommand = async (input, context) => {
    const headers = {
        "content-type": "application/json",
    };
    let resolvedPath = "/v2/email/contact-lists/{ContactListName}/contacts/{EmailAddress}";
    if (input.ContactListName !== undefined) {
        const labelValue = input.ContactListName;
        if (labelValue.length <= 0) {
            throw new Error("Empty value provided for input HTTP label: ContactListName.");
        }
        resolvedPath = resolvedPath.replace("{ContactListName}", smithy_client_1.extendedEncodeURIComponent(labelValue));
    }
    else {
        throw new Error("No value provided for input HTTP label: ContactListName.");
    }
    if (input.EmailAddress !== undefined) {
        const labelValue = input.EmailAddress;
        if (labelValue.length <= 0) {
            throw new Error("Empty value provided for input HTTP label: EmailAddress.");
        }
        resolvedPath = resolvedPath.replace("{EmailAddress}", smithy_client_1.extendedEncodeURIComponent(labelValue));
    }
    else {
        throw new Error("No value provided for input HTTP label: EmailAddress.");
    }
    let body;
    body = JSON.stringify({
        ...(input.AttributesData !== undefined &&
            input.AttributesData !== null && { AttributesData: input.AttributesData }),
        ...(input.TopicPreferences !== undefined &&
            input.TopicPreferences !== null && {
            TopicPreferences: serializeAws_restJson1TopicPreferenceList(input.TopicPreferences, context),
        }),
        ...(input.UnsubscribeAll !== undefined &&
            input.UnsubscribeAll !== null && { UnsubscribeAll: input.UnsubscribeAll }),
    });
    const { hostname, protocol = "https", port } = await context.endpoint();
    return new protocol_http_1.HttpRequest({
        protocol,
        hostname,
        port,
        method: "PUT",
        headers,
        path: resolvedPath,
        body,
    });
};
exports.serializeAws_restJson1UpdateContactCommand = serializeAws_restJson1UpdateContactCommand;
const serializeAws_restJson1UpdateContactListCommand = async (input, context) => {
    const headers = {
        "content-type": "application/json",
    };
    let resolvedPath = "/v2/email/contact-lists/{ContactListName}";
    if (input.ContactListName !== undefined) {
        const labelValue = input.ContactListName;
        if (labelValue.length <= 0) {
            throw new Error("Empty value provided for input HTTP label: ContactListName.");
        }
        resolvedPath = resolvedPath.replace("{ContactListName}", smithy_client_1.extendedEncodeURIComponent(labelValue));
    }
    else {
        throw new Error("No value provided for input HTTP label: ContactListName.");
    }
    let body;
    body = JSON.stringify({
        ...(input.Description !== undefined && input.Description !== null && { Description: input.Description }),
        ...(input.Topics !== undefined &&
            input.Topics !== null && { Topics: serializeAws_restJson1Topics(input.Topics, context) }),
    });
    const { hostname, protocol = "https", port } = await context.endpoint();
    return new protocol_http_1.HttpRequest({
        protocol,
        hostname,
        port,
        method: "PUT",
        headers,
        path: resolvedPath,
        body,
    });
};
exports.serializeAws_restJson1UpdateContactListCommand = serializeAws_restJson1UpdateContactListCommand;
const serializeAws_restJson1UpdateCustomVerificationEmailTemplateCommand = async (input, context) => {
    const headers = {
        "content-type": "application/json",
    };
    let resolvedPath = "/v2/email/custom-verification-email-templates/{TemplateName}";
    if (input.TemplateName !== undefined) {
        const labelValue = input.TemplateName;
        if (labelValue.length <= 0) {
            throw new Error("Empty value provided for input HTTP label: TemplateName.");
        }
        resolvedPath = resolvedPath.replace("{TemplateName}", smithy_client_1.extendedEncodeURIComponent(labelValue));
    }
    else {
        throw new Error("No value provided for input HTTP label: TemplateName.");
    }
    let body;
    body = JSON.stringify({
        ...(input.FailureRedirectionURL !== undefined &&
            input.FailureRedirectionURL !== null && { FailureRedirectionURL: input.FailureRedirectionURL }),
        ...(input.FromEmailAddress !== undefined &&
            input.FromEmailAddress !== null && { FromEmailAddress: input.FromEmailAddress }),
        ...(input.SuccessRedirectionURL !== undefined &&
            input.SuccessRedirectionURL !== null && { SuccessRedirectionURL: input.SuccessRedirectionURL }),
        ...(input.TemplateContent !== undefined &&
            input.TemplateContent !== null && { TemplateContent: input.TemplateContent }),
        ...(input.TemplateSubject !== undefined &&
            input.TemplateSubject !== null && { TemplateSubject: input.TemplateSubject }),
    });
    const { hostname, protocol = "https", port } = await context.endpoint();
    return new protocol_http_1.HttpRequest({
        protocol,
        hostname,
        port,
        method: "PUT",
        headers,
        path: resolvedPath,
        body,
    });
};
exports.serializeAws_restJson1UpdateCustomVerificationEmailTemplateCommand = serializeAws_restJson1UpdateCustomVerificationEmailTemplateCommand;
const serializeAws_restJson1UpdateEmailIdentityPolicyCommand = async (input, context) => {
    const headers = {
        "content-type": "application/json",
    };
    let resolvedPath = "/v2/email/identities/{EmailIdentity}/policies/{PolicyName}";
    if (input.EmailIdentity !== undefined) {
        const labelValue = input.EmailIdentity;
        if (labelValue.length <= 0) {
            throw new Error("Empty value provided for input HTTP label: EmailIdentity.");
        }
        resolvedPath = resolvedPath.replace("{EmailIdentity}", smithy_client_1.extendedEncodeURIComponent(labelValue));
    }
    else {
        throw new Error("No value provided for input HTTP label: EmailIdentity.");
    }
    if (input.PolicyName !== undefined) {
        const labelValue = input.PolicyName;
        if (labelValue.length <= 0) {
            throw new Error("Empty value provided for input HTTP label: PolicyName.");
        }
        resolvedPath = resolvedPath.replace("{PolicyName}", smithy_client_1.extendedEncodeURIComponent(labelValue));
    }
    else {
        throw new Error("No value provided for input HTTP label: PolicyName.");
    }
    let body;
    body = JSON.stringify({
        ...(input.Policy !== undefined && input.Policy !== null && { Policy: input.Policy }),
    });
    const { hostname, protocol = "https", port } = await context.endpoint();
    return new protocol_http_1.HttpRequest({
        protocol,
        hostname,
        port,
        method: "PUT",
        headers,
        path: resolvedPath,
        body,
    });
};
exports.serializeAws_restJson1UpdateEmailIdentityPolicyCommand = serializeAws_restJson1UpdateEmailIdentityPolicyCommand;
const serializeAws_restJson1UpdateEmailTemplateCommand = async (input, context) => {
    const headers = {
        "content-type": "application/json",
    };
    let resolvedPath = "/v2/email/templates/{TemplateName}";
    if (input.TemplateName !== undefined) {
        const labelValue = input.TemplateName;
        if (labelValue.length <= 0) {
            throw new Error("Empty value provided for input HTTP label: TemplateName.");
        }
        resolvedPath = resolvedPath.replace("{TemplateName}", smithy_client_1.extendedEncodeURIComponent(labelValue));
    }
    else {
        throw new Error("No value provided for input HTTP label: TemplateName.");
    }
    let body;
    body = JSON.stringify({
        ...(input.TemplateContent !== undefined &&
            input.TemplateContent !== null && {
            TemplateContent: serializeAws_restJson1EmailTemplateContent(input.TemplateContent, context),
        }),
    });
    const { hostname, protocol = "https", port } = await context.endpoint();
    return new protocol_http_1.HttpRequest({
        protocol,
        hostname,
        port,
        method: "PUT",
        headers,
        path: resolvedPath,
        body,
    });
};
exports.serializeAws_restJson1UpdateEmailTemplateCommand = serializeAws_restJson1UpdateEmailTemplateCommand;
const deserializeAws_restJson1CreateConfigurationSetCommand = async (output, context) => {
    if (output.statusCode !== 200 && output.statusCode >= 300) {
        return deserializeAws_restJson1CreateConfigurationSetCommandError(output, context);
    }
    const contents = {
        $metadata: deserializeMetadata(output),
    };
    await collectBody(output.body, context);
    return Promise.resolve(contents);
};
exports.deserializeAws_restJson1CreateConfigurationSetCommand = deserializeAws_restJson1CreateConfigurationSetCommand;
const deserializeAws_restJson1CreateConfigurationSetCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "AlreadyExistsException":
        case "com.amazonaws.sesv2#AlreadyExistsException":
            response = {
                ...(await deserializeAws_restJson1AlreadyExistsExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "BadRequestException":
        case "com.amazonaws.sesv2#BadRequestException":
            response = {
                ...(await deserializeAws_restJson1BadRequestExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ConcurrentModificationException":
        case "com.amazonaws.sesv2#ConcurrentModificationException":
            response = {
                ...(await deserializeAws_restJson1ConcurrentModificationExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "LimitExceededException":
        case "com.amazonaws.sesv2#LimitExceededException":
            response = {
                ...(await deserializeAws_restJson1LimitExceededExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "NotFoundException":
        case "com.amazonaws.sesv2#NotFoundException":
            response = {
                ...(await deserializeAws_restJson1NotFoundExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "TooManyRequestsException":
        case "com.amazonaws.sesv2#TooManyRequestsException":
            response = {
                ...(await deserializeAws_restJson1TooManyRequestsExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        default:
            const parsedBody = parsedOutput.body;
            errorCode = parsedBody.code || parsedBody.Code || errorCode;
            response = {
                ...parsedBody,
                name: `${errorCode}`,
                message: parsedBody.message || parsedBody.Message || errorCode,
                $fault: "client",
                $metadata: deserializeMetadata(output),
            };
    }
    const message = response.message || response.Message || errorCode;
    response.message = message;
    delete response.Message;
    return Promise.reject(Object.assign(new Error(message), response));
};
const deserializeAws_restJson1CreateConfigurationSetEventDestinationCommand = async (output, context) => {
    if (output.statusCode !== 200 && output.statusCode >= 300) {
        return deserializeAws_restJson1CreateConfigurationSetEventDestinationCommandError(output, context);
    }
    const contents = {
        $metadata: deserializeMetadata(output),
    };
    await collectBody(output.body, context);
    return Promise.resolve(contents);
};
exports.deserializeAws_restJson1CreateConfigurationSetEventDestinationCommand = deserializeAws_restJson1CreateConfigurationSetEventDestinationCommand;
const deserializeAws_restJson1CreateConfigurationSetEventDestinationCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "AlreadyExistsException":
        case "com.amazonaws.sesv2#AlreadyExistsException":
            response = {
                ...(await deserializeAws_restJson1AlreadyExistsExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "BadRequestException":
        case "com.amazonaws.sesv2#BadRequestException":
            response = {
                ...(await deserializeAws_restJson1BadRequestExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "LimitExceededException":
        case "com.amazonaws.sesv2#LimitExceededException":
            response = {
                ...(await deserializeAws_restJson1LimitExceededExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "NotFoundException":
        case "com.amazonaws.sesv2#NotFoundException":
            response = {
                ...(await deserializeAws_restJson1NotFoundExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "TooManyRequestsException":
        case "com.amazonaws.sesv2#TooManyRequestsException":
            response = {
                ...(await deserializeAws_restJson1TooManyRequestsExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        default:
            const parsedBody = parsedOutput.body;
            errorCode = parsedBody.code || parsedBody.Code || errorCode;
            response = {
                ...parsedBody,
                name: `${errorCode}`,
                message: parsedBody.message || parsedBody.Message || errorCode,
                $fault: "client",
                $metadata: deserializeMetadata(output),
            };
    }
    const message = response.message || response.Message || errorCode;
    response.message = message;
    delete response.Message;
    return Promise.reject(Object.assign(new Error(message), response));
};
const deserializeAws_restJson1CreateContactCommand = async (output, context) => {
    if (output.statusCode !== 200 && output.statusCode >= 300) {
        return deserializeAws_restJson1CreateContactCommandError(output, context);
    }
    const contents = {
        $metadata: deserializeMetadata(output),
    };
    await collectBody(output.body, context);
    return Promise.resolve(contents);
};
exports.deserializeAws_restJson1CreateContactCommand = deserializeAws_restJson1CreateContactCommand;
const deserializeAws_restJson1CreateContactCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "AlreadyExistsException":
        case "com.amazonaws.sesv2#AlreadyExistsException":
            response = {
                ...(await deserializeAws_restJson1AlreadyExistsExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "BadRequestException":
        case "com.amazonaws.sesv2#BadRequestException":
            response = {
                ...(await deserializeAws_restJson1BadRequestExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "NotFoundException":
        case "com.amazonaws.sesv2#NotFoundException":
            response = {
                ...(await deserializeAws_restJson1NotFoundExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "TooManyRequestsException":
        case "com.amazonaws.sesv2#TooManyRequestsException":
            response = {
                ...(await deserializeAws_restJson1TooManyRequestsExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        default:
            const parsedBody = parsedOutput.body;
            errorCode = parsedBody.code || parsedBody.Code || errorCode;
            response = {
                ...parsedBody,
                name: `${errorCode}`,
                message: parsedBody.message || parsedBody.Message || errorCode,
                $fault: "client",
                $metadata: deserializeMetadata(output),
            };
    }
    const message = response.message || response.Message || errorCode;
    response.message = message;
    delete response.Message;
    return Promise.reject(Object.assign(new Error(message), response));
};
const deserializeAws_restJson1CreateContactListCommand = async (output, context) => {
    if (output.statusCode !== 200 && output.statusCode >= 300) {
        return deserializeAws_restJson1CreateContactListCommandError(output, context);
    }
    const contents = {
        $metadata: deserializeMetadata(output),
    };
    await collectBody(output.body, context);
    return Promise.resolve(contents);
};
exports.deserializeAws_restJson1CreateContactListCommand = deserializeAws_restJson1CreateContactListCommand;
const deserializeAws_restJson1CreateContactListCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "AlreadyExistsException":
        case "com.amazonaws.sesv2#AlreadyExistsException":
            response = {
                ...(await deserializeAws_restJson1AlreadyExistsExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "BadRequestException":
        case "com.amazonaws.sesv2#BadRequestException":
            response = {
                ...(await deserializeAws_restJson1BadRequestExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "LimitExceededException":
        case "com.amazonaws.sesv2#LimitExceededException":
            response = {
                ...(await deserializeAws_restJson1LimitExceededExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "TooManyRequestsException":
        case "com.amazonaws.sesv2#TooManyRequestsException":
            response = {
                ...(await deserializeAws_restJson1TooManyRequestsExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        default:
            const parsedBody = parsedOutput.body;
            errorCode = parsedBody.code || parsedBody.Code || errorCode;
            response = {
                ...parsedBody,
                name: `${errorCode}`,
                message: parsedBody.message || parsedBody.Message || errorCode,
                $fault: "client",
                $metadata: deserializeMetadata(output),
            };
    }
    const message = response.message || response.Message || errorCode;
    response.message = message;
    delete response.Message;
    return Promise.reject(Object.assign(new Error(message), response));
};
const deserializeAws_restJson1CreateCustomVerificationEmailTemplateCommand = async (output, context) => {
    if (output.statusCode !== 200 && output.statusCode >= 300) {
        return deserializeAws_restJson1CreateCustomVerificationEmailTemplateCommandError(output, context);
    }
    const contents = {
        $metadata: deserializeMetadata(output),
    };
    await collectBody(output.body, context);
    return Promise.resolve(contents);
};
exports.deserializeAws_restJson1CreateCustomVerificationEmailTemplateCommand = deserializeAws_restJson1CreateCustomVerificationEmailTemplateCommand;
const deserializeAws_restJson1CreateCustomVerificationEmailTemplateCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "AlreadyExistsException":
        case "com.amazonaws.sesv2#AlreadyExistsException":
            response = {
                ...(await deserializeAws_restJson1AlreadyExistsExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "BadRequestException":
        case "com.amazonaws.sesv2#BadRequestException":
            response = {
                ...(await deserializeAws_restJson1BadRequestExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "LimitExceededException":
        case "com.amazonaws.sesv2#LimitExceededException":
            response = {
                ...(await deserializeAws_restJson1LimitExceededExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "NotFoundException":
        case "com.amazonaws.sesv2#NotFoundException":
            response = {
                ...(await deserializeAws_restJson1NotFoundExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "TooManyRequestsException":
        case "com.amazonaws.sesv2#TooManyRequestsException":
            response = {
                ...(await deserializeAws_restJson1TooManyRequestsExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        default:
            const parsedBody = parsedOutput.body;
            errorCode = parsedBody.code || parsedBody.Code || errorCode;
            response = {
                ...parsedBody,
                name: `${errorCode}`,
                message: parsedBody.message || parsedBody.Message || errorCode,
                $fault: "client",
                $metadata: deserializeMetadata(output),
            };
    }
    const message = response.message || response.Message || errorCode;
    response.message = message;
    delete response.Message;
    return Promise.reject(Object.assign(new Error(message), response));
};
const deserializeAws_restJson1CreateDedicatedIpPoolCommand = async (output, context) => {
    if (output.statusCode !== 200 && output.statusCode >= 300) {
        return deserializeAws_restJson1CreateDedicatedIpPoolCommandError(output, context);
    }
    const contents = {
        $metadata: deserializeMetadata(output),
    };
    await collectBody(output.body, context);
    return Promise.resolve(contents);
};
exports.deserializeAws_restJson1CreateDedicatedIpPoolCommand = deserializeAws_restJson1CreateDedicatedIpPoolCommand;
const deserializeAws_restJson1CreateDedicatedIpPoolCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "AlreadyExistsException":
        case "com.amazonaws.sesv2#AlreadyExistsException":
            response = {
                ...(await deserializeAws_restJson1AlreadyExistsExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "BadRequestException":
        case "com.amazonaws.sesv2#BadRequestException":
            response = {
                ...(await deserializeAws_restJson1BadRequestExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ConcurrentModificationException":
        case "com.amazonaws.sesv2#ConcurrentModificationException":
            response = {
                ...(await deserializeAws_restJson1ConcurrentModificationExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "LimitExceededException":
        case "com.amazonaws.sesv2#LimitExceededException":
            response = {
                ...(await deserializeAws_restJson1LimitExceededExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "TooManyRequestsException":
        case "com.amazonaws.sesv2#TooManyRequestsException":
            response = {
                ...(await deserializeAws_restJson1TooManyRequestsExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        default:
            const parsedBody = parsedOutput.body;
            errorCode = parsedBody.code || parsedBody.Code || errorCode;
            response = {
                ...parsedBody,
                name: `${errorCode}`,
                message: parsedBody.message || parsedBody.Message || errorCode,
                $fault: "client",
                $metadata: deserializeMetadata(output),
            };
    }
    const message = response.message || response.Message || errorCode;
    response.message = message;
    delete response.Message;
    return Promise.reject(Object.assign(new Error(message), response));
};
const deserializeAws_restJson1CreateDeliverabilityTestReportCommand = async (output, context) => {
    if (output.statusCode !== 200 && output.statusCode >= 300) {
        return deserializeAws_restJson1CreateDeliverabilityTestReportCommandError(output, context);
    }
    const contents = {
        $metadata: deserializeMetadata(output),
        DeliverabilityTestStatus: undefined,
        ReportId: undefined,
    };
    const data = await parseBody(output.body, context);
    if (data.DeliverabilityTestStatus !== undefined && data.DeliverabilityTestStatus !== null) {
        contents.DeliverabilityTestStatus = data.DeliverabilityTestStatus;
    }
    if (data.ReportId !== undefined && data.ReportId !== null) {
        contents.ReportId = data.ReportId;
    }
    return Promise.resolve(contents);
};
exports.deserializeAws_restJson1CreateDeliverabilityTestReportCommand = deserializeAws_restJson1CreateDeliverabilityTestReportCommand;
const deserializeAws_restJson1CreateDeliverabilityTestReportCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "AccountSuspendedException":
        case "com.amazonaws.sesv2#AccountSuspendedException":
            response = {
                ...(await deserializeAws_restJson1AccountSuspendedExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "BadRequestException":
        case "com.amazonaws.sesv2#BadRequestException":
            response = {
                ...(await deserializeAws_restJson1BadRequestExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ConcurrentModificationException":
        case "com.amazonaws.sesv2#ConcurrentModificationException":
            response = {
                ...(await deserializeAws_restJson1ConcurrentModificationExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "LimitExceededException":
        case "com.amazonaws.sesv2#LimitExceededException":
            response = {
                ...(await deserializeAws_restJson1LimitExceededExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "MailFromDomainNotVerifiedException":
        case "com.amazonaws.sesv2#MailFromDomainNotVerifiedException":
            response = {
                ...(await deserializeAws_restJson1MailFromDomainNotVerifiedExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "MessageRejected":
        case "com.amazonaws.sesv2#MessageRejected":
            response = {
                ...(await deserializeAws_restJson1MessageRejectedResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "NotFoundException":
        case "com.amazonaws.sesv2#NotFoundException":
            response = {
                ...(await deserializeAws_restJson1NotFoundExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "SendingPausedException":
        case "com.amazonaws.sesv2#SendingPausedException":
            response = {
                ...(await deserializeAws_restJson1SendingPausedExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "TooManyRequestsException":
        case "com.amazonaws.sesv2#TooManyRequestsException":
            response = {
                ...(await deserializeAws_restJson1TooManyRequestsExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        default:
            const parsedBody = parsedOutput.body;
            errorCode = parsedBody.code || parsedBody.Code || errorCode;
            response = {
                ...parsedBody,
                name: `${errorCode}`,
                message: parsedBody.message || parsedBody.Message || errorCode,
                $fault: "client",
                $metadata: deserializeMetadata(output),
            };
    }
    const message = response.message || response.Message || errorCode;
    response.message = message;
    delete response.Message;
    return Promise.reject(Object.assign(new Error(message), response));
};
const deserializeAws_restJson1CreateEmailIdentityCommand = async (output, context) => {
    if (output.statusCode !== 200 && output.statusCode >= 300) {
        return deserializeAws_restJson1CreateEmailIdentityCommandError(output, context);
    }
    const contents = {
        $metadata: deserializeMetadata(output),
        DkimAttributes: undefined,
        IdentityType: undefined,
        VerifiedForSendingStatus: undefined,
    };
    const data = await parseBody(output.body, context);
    if (data.DkimAttributes !== undefined && data.DkimAttributes !== null) {
        contents.DkimAttributes = deserializeAws_restJson1DkimAttributes(data.DkimAttributes, context);
    }
    if (data.IdentityType !== undefined && data.IdentityType !== null) {
        contents.IdentityType = data.IdentityType;
    }
    if (data.VerifiedForSendingStatus !== undefined && data.VerifiedForSendingStatus !== null) {
        contents.VerifiedForSendingStatus = data.VerifiedForSendingStatus;
    }
    return Promise.resolve(contents);
};
exports.deserializeAws_restJson1CreateEmailIdentityCommand = deserializeAws_restJson1CreateEmailIdentityCommand;
const deserializeAws_restJson1CreateEmailIdentityCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "AlreadyExistsException":
        case "com.amazonaws.sesv2#AlreadyExistsException":
            response = {
                ...(await deserializeAws_restJson1AlreadyExistsExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "BadRequestException":
        case "com.amazonaws.sesv2#BadRequestException":
            response = {
                ...(await deserializeAws_restJson1BadRequestExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ConcurrentModificationException":
        case "com.amazonaws.sesv2#ConcurrentModificationException":
            response = {
                ...(await deserializeAws_restJson1ConcurrentModificationExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "LimitExceededException":
        case "com.amazonaws.sesv2#LimitExceededException":
            response = {
                ...(await deserializeAws_restJson1LimitExceededExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "NotFoundException":
        case "com.amazonaws.sesv2#NotFoundException":
            response = {
                ...(await deserializeAws_restJson1NotFoundExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "TooManyRequestsException":
        case "com.amazonaws.sesv2#TooManyRequestsException":
            response = {
                ...(await deserializeAws_restJson1TooManyRequestsExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        default:
            const parsedBody = parsedOutput.body;
            errorCode = parsedBody.code || parsedBody.Code || errorCode;
            response = {
                ...parsedBody,
                name: `${errorCode}`,
                message: parsedBody.message || parsedBody.Message || errorCode,
                $fault: "client",
                $metadata: deserializeMetadata(output),
            };
    }
    const message = response.message || response.Message || errorCode;
    response.message = message;
    delete response.Message;
    return Promise.reject(Object.assign(new Error(message), response));
};
const deserializeAws_restJson1CreateEmailIdentityPolicyCommand = async (output, context) => {
    if (output.statusCode !== 200 && output.statusCode >= 300) {
        return deserializeAws_restJson1CreateEmailIdentityPolicyCommandError(output, context);
    }
    const contents = {
        $metadata: deserializeMetadata(output),
    };
    await collectBody(output.body, context);
    return Promise.resolve(contents);
};
exports.deserializeAws_restJson1CreateEmailIdentityPolicyCommand = deserializeAws_restJson1CreateEmailIdentityPolicyCommand;
const deserializeAws_restJson1CreateEmailIdentityPolicyCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "AlreadyExistsException":
        case "com.amazonaws.sesv2#AlreadyExistsException":
            response = {
                ...(await deserializeAws_restJson1AlreadyExistsExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "BadRequestException":
        case "com.amazonaws.sesv2#BadRequestException":
            response = {
                ...(await deserializeAws_restJson1BadRequestExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "LimitExceededException":
        case "com.amazonaws.sesv2#LimitExceededException":
            response = {
                ...(await deserializeAws_restJson1LimitExceededExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "NotFoundException":
        case "com.amazonaws.sesv2#NotFoundException":
            response = {
                ...(await deserializeAws_restJson1NotFoundExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "TooManyRequestsException":
        case "com.amazonaws.sesv2#TooManyRequestsException":
            response = {
                ...(await deserializeAws_restJson1TooManyRequestsExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        default:
            const parsedBody = parsedOutput.body;
            errorCode = parsedBody.code || parsedBody.Code || errorCode;
            response = {
                ...parsedBody,
                name: `${errorCode}`,
                message: parsedBody.message || parsedBody.Message || errorCode,
                $fault: "client",
                $metadata: deserializeMetadata(output),
            };
    }
    const message = response.message || response.Message || errorCode;
    response.message = message;
    delete response.Message;
    return Promise.reject(Object.assign(new Error(message), response));
};
const deserializeAws_restJson1CreateEmailTemplateCommand = async (output, context) => {
    if (output.statusCode !== 200 && output.statusCode >= 300) {
        return deserializeAws_restJson1CreateEmailTemplateCommandError(output, context);
    }
    const contents = {
        $metadata: deserializeMetadata(output),
    };
    await collectBody(output.body, context);
    return Promise.resolve(contents);
};
exports.deserializeAws_restJson1CreateEmailTemplateCommand = deserializeAws_restJson1CreateEmailTemplateCommand;
const deserializeAws_restJson1CreateEmailTemplateCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "AlreadyExistsException":
        case "com.amazonaws.sesv2#AlreadyExistsException":
            response = {
                ...(await deserializeAws_restJson1AlreadyExistsExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "BadRequestException":
        case "com.amazonaws.sesv2#BadRequestException":
            response = {
                ...(await deserializeAws_restJson1BadRequestExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "LimitExceededException":
        case "com.amazonaws.sesv2#LimitExceededException":
            response = {
                ...(await deserializeAws_restJson1LimitExceededExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "TooManyRequestsException":
        case "com.amazonaws.sesv2#TooManyRequestsException":
            response = {
                ...(await deserializeAws_restJson1TooManyRequestsExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        default:
            const parsedBody = parsedOutput.body;
            errorCode = parsedBody.code || parsedBody.Code || errorCode;
            response = {
                ...parsedBody,
                name: `${errorCode}`,
                message: parsedBody.message || parsedBody.Message || errorCode,
                $fault: "client",
                $metadata: deserializeMetadata(output),
            };
    }
    const message = response.message || response.Message || errorCode;
    response.message = message;
    delete response.Message;
    return Promise.reject(Object.assign(new Error(message), response));
};
const deserializeAws_restJson1CreateImportJobCommand = async (output, context) => {
    if (output.statusCode !== 200 && output.statusCode >= 300) {
        return deserializeAws_restJson1CreateImportJobCommandError(output, context);
    }
    const contents = {
        $metadata: deserializeMetadata(output),
        JobId: undefined,
    };
    const data = await parseBody(output.body, context);
    if (data.JobId !== undefined && data.JobId !== null) {
        contents.JobId = data.JobId;
    }
    return Promise.resolve(contents);
};
exports.deserializeAws_restJson1CreateImportJobCommand = deserializeAws_restJson1CreateImportJobCommand;
const deserializeAws_restJson1CreateImportJobCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "BadRequestException":
        case "com.amazonaws.sesv2#BadRequestException":
            response = {
                ...(await deserializeAws_restJson1BadRequestExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "LimitExceededException":
        case "com.amazonaws.sesv2#LimitExceededException":
            response = {
                ...(await deserializeAws_restJson1LimitExceededExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "TooManyRequestsException":
        case "com.amazonaws.sesv2#TooManyRequestsException":
            response = {
                ...(await deserializeAws_restJson1TooManyRequestsExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        default:
            const parsedBody = parsedOutput.body;
            errorCode = parsedBody.code || parsedBody.Code || errorCode;
            response = {
                ...parsedBody,
                name: `${errorCode}`,
                message: parsedBody.message || parsedBody.Message || errorCode,
                $fault: "client",
                $metadata: deserializeMetadata(output),
            };
    }
    const message = response.message || response.Message || errorCode;
    response.message = message;
    delete response.Message;
    return Promise.reject(Object.assign(new Error(message), response));
};
const deserializeAws_restJson1DeleteConfigurationSetCommand = async (output, context) => {
    if (output.statusCode !== 200 && output.statusCode >= 300) {
        return deserializeAws_restJson1DeleteConfigurationSetCommandError(output, context);
    }
    const contents = {
        $metadata: deserializeMetadata(output),
    };
    await collectBody(output.body, context);
    return Promise.resolve(contents);
};
exports.deserializeAws_restJson1DeleteConfigurationSetCommand = deserializeAws_restJson1DeleteConfigurationSetCommand;
const deserializeAws_restJson1DeleteConfigurationSetCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "BadRequestException":
        case "com.amazonaws.sesv2#BadRequestException":
            response = {
                ...(await deserializeAws_restJson1BadRequestExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ConcurrentModificationException":
        case "com.amazonaws.sesv2#ConcurrentModificationException":
            response = {
                ...(await deserializeAws_restJson1ConcurrentModificationExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "NotFoundException":
        case "com.amazonaws.sesv2#NotFoundException":
            response = {
                ...(await deserializeAws_restJson1NotFoundExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "TooManyRequestsException":
        case "com.amazonaws.sesv2#TooManyRequestsException":
            response = {
                ...(await deserializeAws_restJson1TooManyRequestsExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        default:
            const parsedBody = parsedOutput.body;
            errorCode = parsedBody.code || parsedBody.Code || errorCode;
            response = {
                ...parsedBody,
                name: `${errorCode}`,
                message: parsedBody.message || parsedBody.Message || errorCode,
                $fault: "client",
                $metadata: deserializeMetadata(output),
            };
    }
    const message = response.message || response.Message || errorCode;
    response.message = message;
    delete response.Message;
    return Promise.reject(Object.assign(new Error(message), response));
};
const deserializeAws_restJson1DeleteConfigurationSetEventDestinationCommand = async (output, context) => {
    if (output.statusCode !== 200 && output.statusCode >= 300) {
        return deserializeAws_restJson1DeleteConfigurationSetEventDestinationCommandError(output, context);
    }
    const contents = {
        $metadata: deserializeMetadata(output),
    };
    await collectBody(output.body, context);
    return Promise.resolve(contents);
};
exports.deserializeAws_restJson1DeleteConfigurationSetEventDestinationCommand = deserializeAws_restJson1DeleteConfigurationSetEventDestinationCommand;
const deserializeAws_restJson1DeleteConfigurationSetEventDestinationCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "BadRequestException":
        case "com.amazonaws.sesv2#BadRequestException":
            response = {
                ...(await deserializeAws_restJson1BadRequestExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "NotFoundException":
        case "com.amazonaws.sesv2#NotFoundException":
            response = {
                ...(await deserializeAws_restJson1NotFoundExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "TooManyRequestsException":
        case "com.amazonaws.sesv2#TooManyRequestsException":
            response = {
                ...(await deserializeAws_restJson1TooManyRequestsExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        default:
            const parsedBody = parsedOutput.body;
            errorCode = parsedBody.code || parsedBody.Code || errorCode;
            response = {
                ...parsedBody,
                name: `${errorCode}`,
                message: parsedBody.message || parsedBody.Message || errorCode,
                $fault: "client",
                $metadata: deserializeMetadata(output),
            };
    }
    const message = response.message || response.Message || errorCode;
    response.message = message;
    delete response.Message;
    return Promise.reject(Object.assign(new Error(message), response));
};
const deserializeAws_restJson1DeleteContactCommand = async (output, context) => {
    if (output.statusCode !== 200 && output.statusCode >= 300) {
        return deserializeAws_restJson1DeleteContactCommandError(output, context);
    }
    const contents = {
        $metadata: deserializeMetadata(output),
    };
    await collectBody(output.body, context);
    return Promise.resolve(contents);
};
exports.deserializeAws_restJson1DeleteContactCommand = deserializeAws_restJson1DeleteContactCommand;
const deserializeAws_restJson1DeleteContactCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "BadRequestException":
        case "com.amazonaws.sesv2#BadRequestException":
            response = {
                ...(await deserializeAws_restJson1BadRequestExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "NotFoundException":
        case "com.amazonaws.sesv2#NotFoundException":
            response = {
                ...(await deserializeAws_restJson1NotFoundExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "TooManyRequestsException":
        case "com.amazonaws.sesv2#TooManyRequestsException":
            response = {
                ...(await deserializeAws_restJson1TooManyRequestsExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        default:
            const parsedBody = parsedOutput.body;
            errorCode = parsedBody.code || parsedBody.Code || errorCode;
            response = {
                ...parsedBody,
                name: `${errorCode}`,
                message: parsedBody.message || parsedBody.Message || errorCode,
                $fault: "client",
                $metadata: deserializeMetadata(output),
            };
    }
    const message = response.message || response.Message || errorCode;
    response.message = message;
    delete response.Message;
    return Promise.reject(Object.assign(new Error(message), response));
};
const deserializeAws_restJson1DeleteContactListCommand = async (output, context) => {
    if (output.statusCode !== 200 && output.statusCode >= 300) {
        return deserializeAws_restJson1DeleteContactListCommandError(output, context);
    }
    const contents = {
        $metadata: deserializeMetadata(output),
    };
    await collectBody(output.body, context);
    return Promise.resolve(contents);
};
exports.deserializeAws_restJson1DeleteContactListCommand = deserializeAws_restJson1DeleteContactListCommand;
const deserializeAws_restJson1DeleteContactListCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "BadRequestException":
        case "com.amazonaws.sesv2#BadRequestException":
            response = {
                ...(await deserializeAws_restJson1BadRequestExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ConcurrentModificationException":
        case "com.amazonaws.sesv2#ConcurrentModificationException":
            response = {
                ...(await deserializeAws_restJson1ConcurrentModificationExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "NotFoundException":
        case "com.amazonaws.sesv2#NotFoundException":
            response = {
                ...(await deserializeAws_restJson1NotFoundExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "TooManyRequestsException":
        case "com.amazonaws.sesv2#TooManyRequestsException":
            response = {
                ...(await deserializeAws_restJson1TooManyRequestsExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        default:
            const parsedBody = parsedOutput.body;
            errorCode = parsedBody.code || parsedBody.Code || errorCode;
            response = {
                ...parsedBody,
                name: `${errorCode}`,
                message: parsedBody.message || parsedBody.Message || errorCode,
                $fault: "client",
                $metadata: deserializeMetadata(output),
            };
    }
    const message = response.message || response.Message || errorCode;
    response.message = message;
    delete response.Message;
    return Promise.reject(Object.assign(new Error(message), response));
};
const deserializeAws_restJson1DeleteCustomVerificationEmailTemplateCommand = async (output, context) => {
    if (output.statusCode !== 200 && output.statusCode >= 300) {
        return deserializeAws_restJson1DeleteCustomVerificationEmailTemplateCommandError(output, context);
    }
    const contents = {
        $metadata: deserializeMetadata(output),
    };
    await collectBody(output.body, context);
    return Promise.resolve(contents);
};
exports.deserializeAws_restJson1DeleteCustomVerificationEmailTemplateCommand = deserializeAws_restJson1DeleteCustomVerificationEmailTemplateCommand;
const deserializeAws_restJson1DeleteCustomVerificationEmailTemplateCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "BadRequestException":
        case "com.amazonaws.sesv2#BadRequestException":
            response = {
                ...(await deserializeAws_restJson1BadRequestExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "NotFoundException":
        case "com.amazonaws.sesv2#NotFoundException":
            response = {
                ...(await deserializeAws_restJson1NotFoundExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "TooManyRequestsException":
        case "com.amazonaws.sesv2#TooManyRequestsException":
            response = {
                ...(await deserializeAws_restJson1TooManyRequestsExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        default:
            const parsedBody = parsedOutput.body;
            errorCode = parsedBody.code || parsedBody.Code || errorCode;
            response = {
                ...parsedBody,
                name: `${errorCode}`,
                message: parsedBody.message || parsedBody.Message || errorCode,
                $fault: "client",
                $metadata: deserializeMetadata(output),
            };
    }
    const message = response.message || response.Message || errorCode;
    response.message = message;
    delete response.Message;
    return Promise.reject(Object.assign(new Error(message), response));
};
const deserializeAws_restJson1DeleteDedicatedIpPoolCommand = async (output, context) => {
    if (output.statusCode !== 200 && output.statusCode >= 300) {
        return deserializeAws_restJson1DeleteDedicatedIpPoolCommandError(output, context);
    }
    const contents = {
        $metadata: deserializeMetadata(output),
    };
    await collectBody(output.body, context);
    return Promise.resolve(contents);
};
exports.deserializeAws_restJson1DeleteDedicatedIpPoolCommand = deserializeAws_restJson1DeleteDedicatedIpPoolCommand;
const deserializeAws_restJson1DeleteDedicatedIpPoolCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "BadRequestException":
        case "com.amazonaws.sesv2#BadRequestException":
            response = {
                ...(await deserializeAws_restJson1BadRequestExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ConcurrentModificationException":
        case "com.amazonaws.sesv2#ConcurrentModificationException":
            response = {
                ...(await deserializeAws_restJson1ConcurrentModificationExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "NotFoundException":
        case "com.amazonaws.sesv2#NotFoundException":
            response = {
                ...(await deserializeAws_restJson1NotFoundExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "TooManyRequestsException":
        case "com.amazonaws.sesv2#TooManyRequestsException":
            response = {
                ...(await deserializeAws_restJson1TooManyRequestsExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        default:
            const parsedBody = parsedOutput.body;
            errorCode = parsedBody.code || parsedBody.Code || errorCode;
            response = {
                ...parsedBody,
                name: `${errorCode}`,
                message: parsedBody.message || parsedBody.Message || errorCode,
                $fault: "client",
                $metadata: deserializeMetadata(output),
            };
    }
    const message = response.message || response.Message || errorCode;
    response.message = message;
    delete response.Message;
    return Promise.reject(Object.assign(new Error(message), response));
};
const deserializeAws_restJson1DeleteEmailIdentityCommand = async (output, context) => {
    if (output.statusCode !== 200 && output.statusCode >= 300) {
        return deserializeAws_restJson1DeleteEmailIdentityCommandError(output, context);
    }
    const contents = {
        $metadata: deserializeMetadata(output),
    };
    await collectBody(output.body, context);
    return Promise.resolve(contents);
};
exports.deserializeAws_restJson1DeleteEmailIdentityCommand = deserializeAws_restJson1DeleteEmailIdentityCommand;
const deserializeAws_restJson1DeleteEmailIdentityCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "BadRequestException":
        case "com.amazonaws.sesv2#BadRequestException":
            response = {
                ...(await deserializeAws_restJson1BadRequestExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ConcurrentModificationException":
        case "com.amazonaws.sesv2#ConcurrentModificationException":
            response = {
                ...(await deserializeAws_restJson1ConcurrentModificationExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "NotFoundException":
        case "com.amazonaws.sesv2#NotFoundException":
            response = {
                ...(await deserializeAws_restJson1NotFoundExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "TooManyRequestsException":
        case "com.amazonaws.sesv2#TooManyRequestsException":
            response = {
                ...(await deserializeAws_restJson1TooManyRequestsExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        default:
            const parsedBody = parsedOutput.body;
            errorCode = parsedBody.code || parsedBody.Code || errorCode;
            response = {
                ...parsedBody,
                name: `${errorCode}`,
                message: parsedBody.message || parsedBody.Message || errorCode,
                $fault: "client",
                $metadata: deserializeMetadata(output),
            };
    }
    const message = response.message || response.Message || errorCode;
    response.message = message;
    delete response.Message;
    return Promise.reject(Object.assign(new Error(message), response));
};
const deserializeAws_restJson1DeleteEmailIdentityPolicyCommand = async (output, context) => {
    if (output.statusCode !== 200 && output.statusCode >= 300) {
        return deserializeAws_restJson1DeleteEmailIdentityPolicyCommandError(output, context);
    }
    const contents = {
        $metadata: deserializeMetadata(output),
    };
    await collectBody(output.body, context);
    return Promise.resolve(contents);
};
exports.deserializeAws_restJson1DeleteEmailIdentityPolicyCommand = deserializeAws_restJson1DeleteEmailIdentityPolicyCommand;
const deserializeAws_restJson1DeleteEmailIdentityPolicyCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "BadRequestException":
        case "com.amazonaws.sesv2#BadRequestException":
            response = {
                ...(await deserializeAws_restJson1BadRequestExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "NotFoundException":
        case "com.amazonaws.sesv2#NotFoundException":
            response = {
                ...(await deserializeAws_restJson1NotFoundExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "TooManyRequestsException":
        case "com.amazonaws.sesv2#TooManyRequestsException":
            response = {
                ...(await deserializeAws_restJson1TooManyRequestsExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        default:
            const parsedBody = parsedOutput.body;
            errorCode = parsedBody.code || parsedBody.Code || errorCode;
            response = {
                ...parsedBody,
                name: `${errorCode}`,
                message: parsedBody.message || parsedBody.Message || errorCode,
                $fault: "client",
                $metadata: deserializeMetadata(output),
            };
    }
    const message = response.message || response.Message || errorCode;
    response.message = message;
    delete response.Message;
    return Promise.reject(Object.assign(new Error(message), response));
};
const deserializeAws_restJson1DeleteEmailTemplateCommand = async (output, context) => {
    if (output.statusCode !== 200 && output.statusCode >= 300) {
        return deserializeAws_restJson1DeleteEmailTemplateCommandError(output, context);
    }
    const contents = {
        $metadata: deserializeMetadata(output),
    };
    await collectBody(output.body, context);
    return Promise.resolve(contents);
};
exports.deserializeAws_restJson1DeleteEmailTemplateCommand = deserializeAws_restJson1DeleteEmailTemplateCommand;
const deserializeAws_restJson1DeleteEmailTemplateCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "BadRequestException":
        case "com.amazonaws.sesv2#BadRequestException":
            response = {
                ...(await deserializeAws_restJson1BadRequestExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "NotFoundException":
        case "com.amazonaws.sesv2#NotFoundException":
            response = {
                ...(await deserializeAws_restJson1NotFoundExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "TooManyRequestsException":
        case "com.amazonaws.sesv2#TooManyRequestsException":
            response = {
                ...(await deserializeAws_restJson1TooManyRequestsExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        default:
            const parsedBody = parsedOutput.body;
            errorCode = parsedBody.code || parsedBody.Code || errorCode;
            response = {
                ...parsedBody,
                name: `${errorCode}`,
                message: parsedBody.message || parsedBody.Message || errorCode,
                $fault: "client",
                $metadata: deserializeMetadata(output),
            };
    }
    const message = response.message || response.Message || errorCode;
    response.message = message;
    delete response.Message;
    return Promise.reject(Object.assign(new Error(message), response));
};
const deserializeAws_restJson1DeleteSuppressedDestinationCommand = async (output, context) => {
    if (output.statusCode !== 200 && output.statusCode >= 300) {
        return deserializeAws_restJson1DeleteSuppressedDestinationCommandError(output, context);
    }
    const contents = {
        $metadata: deserializeMetadata(output),
    };
    await collectBody(output.body, context);
    return Promise.resolve(contents);
};
exports.deserializeAws_restJson1DeleteSuppressedDestinationCommand = deserializeAws_restJson1DeleteSuppressedDestinationCommand;
const deserializeAws_restJson1DeleteSuppressedDestinationCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "BadRequestException":
        case "com.amazonaws.sesv2#BadRequestException":
            response = {
                ...(await deserializeAws_restJson1BadRequestExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "NotFoundException":
        case "com.amazonaws.sesv2#NotFoundException":
            response = {
                ...(await deserializeAws_restJson1NotFoundExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "TooManyRequestsException":
        case "com.amazonaws.sesv2#TooManyRequestsException":
            response = {
                ...(await deserializeAws_restJson1TooManyRequestsExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        default:
            const parsedBody = parsedOutput.body;
            errorCode = parsedBody.code || parsedBody.Code || errorCode;
            response = {
                ...parsedBody,
                name: `${errorCode}`,
                message: parsedBody.message || parsedBody.Message || errorCode,
                $fault: "client",
                $metadata: deserializeMetadata(output),
            };
    }
    const message = response.message || response.Message || errorCode;
    response.message = message;
    delete response.Message;
    return Promise.reject(Object.assign(new Error(message), response));
};
const deserializeAws_restJson1GetAccountCommand = async (output, context) => {
    if (output.statusCode !== 200 && output.statusCode >= 300) {
        return deserializeAws_restJson1GetAccountCommandError(output, context);
    }
    const contents = {
        $metadata: deserializeMetadata(output),
        DedicatedIpAutoWarmupEnabled: undefined,
        Details: undefined,
        EnforcementStatus: undefined,
        ProductionAccessEnabled: undefined,
        SendQuota: undefined,
        SendingEnabled: undefined,
        SuppressionAttributes: undefined,
    };
    const data = await parseBody(output.body, context);
    if (data.DedicatedIpAutoWarmupEnabled !== undefined && data.DedicatedIpAutoWarmupEnabled !== null) {
        contents.DedicatedIpAutoWarmupEnabled = data.DedicatedIpAutoWarmupEnabled;
    }
    if (data.Details !== undefined && data.Details !== null) {
        contents.Details = deserializeAws_restJson1AccountDetails(data.Details, context);
    }
    if (data.EnforcementStatus !== undefined && data.EnforcementStatus !== null) {
        contents.EnforcementStatus = data.EnforcementStatus;
    }
    if (data.ProductionAccessEnabled !== undefined && data.ProductionAccessEnabled !== null) {
        contents.ProductionAccessEnabled = data.ProductionAccessEnabled;
    }
    if (data.SendQuota !== undefined && data.SendQuota !== null) {
        contents.SendQuota = deserializeAws_restJson1SendQuota(data.SendQuota, context);
    }
    if (data.SendingEnabled !== undefined && data.SendingEnabled !== null) {
        contents.SendingEnabled = data.SendingEnabled;
    }
    if (data.SuppressionAttributes !== undefined && data.SuppressionAttributes !== null) {
        contents.SuppressionAttributes = deserializeAws_restJson1SuppressionAttributes(data.SuppressionAttributes, context);
    }
    return Promise.resolve(contents);
};
exports.deserializeAws_restJson1GetAccountCommand = deserializeAws_restJson1GetAccountCommand;
const deserializeAws_restJson1GetAccountCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "BadRequestException":
        case "com.amazonaws.sesv2#BadRequestException":
            response = {
                ...(await deserializeAws_restJson1BadRequestExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "TooManyRequestsException":
        case "com.amazonaws.sesv2#TooManyRequestsException":
            response = {
                ...(await deserializeAws_restJson1TooManyRequestsExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        default:
            const parsedBody = parsedOutput.body;
            errorCode = parsedBody.code || parsedBody.Code || errorCode;
            response = {
                ...parsedBody,
                name: `${errorCode}`,
                message: parsedBody.message || parsedBody.Message || errorCode,
                $fault: "client",
                $metadata: deserializeMetadata(output),
            };
    }
    const message = response.message || response.Message || errorCode;
    response.message = message;
    delete response.Message;
    return Promise.reject(Object.assign(new Error(message), response));
};
const deserializeAws_restJson1GetBlacklistReportsCommand = async (output, context) => {
    if (output.statusCode !== 200 && output.statusCode >= 300) {
        return deserializeAws_restJson1GetBlacklistReportsCommandError(output, context);
    }
    const contents = {
        $metadata: deserializeMetadata(output),
        BlacklistReport: undefined,
    };
    const data = await parseBody(output.body, context);
    if (data.BlacklistReport !== undefined && data.BlacklistReport !== null) {
        contents.BlacklistReport = deserializeAws_restJson1BlacklistReport(data.BlacklistReport, context);
    }
    return Promise.resolve(contents);
};
exports.deserializeAws_restJson1GetBlacklistReportsCommand = deserializeAws_restJson1GetBlacklistReportsCommand;
const deserializeAws_restJson1GetBlacklistReportsCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "BadRequestException":
        case "com.amazonaws.sesv2#BadRequestException":
            response = {
                ...(await deserializeAws_restJson1BadRequestExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "NotFoundException":
        case "com.amazonaws.sesv2#NotFoundException":
            response = {
                ...(await deserializeAws_restJson1NotFoundExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "TooManyRequestsException":
        case "com.amazonaws.sesv2#TooManyRequestsException":
            response = {
                ...(await deserializeAws_restJson1TooManyRequestsExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        default:
            const parsedBody = parsedOutput.body;
            errorCode = parsedBody.code || parsedBody.Code || errorCode;
            response = {
                ...parsedBody,
                name: `${errorCode}`,
                message: parsedBody.message || parsedBody.Message || errorCode,
                $fault: "client",
                $metadata: deserializeMetadata(output),
            };
    }
    const message = response.message || response.Message || errorCode;
    response.message = message;
    delete response.Message;
    return Promise.reject(Object.assign(new Error(message), response));
};
const deserializeAws_restJson1GetConfigurationSetCommand = async (output, context) => {
    if (output.statusCode !== 200 && output.statusCode >= 300) {
        return deserializeAws_restJson1GetConfigurationSetCommandError(output, context);
    }
    const contents = {
        $metadata: deserializeMetadata(output),
        ConfigurationSetName: undefined,
        DeliveryOptions: undefined,
        ReputationOptions: undefined,
        SendingOptions: undefined,
        SuppressionOptions: undefined,
        Tags: undefined,
        TrackingOptions: undefined,
    };
    const data = await parseBody(output.body, context);
    if (data.ConfigurationSetName !== undefined && data.ConfigurationSetName !== null) {
        contents.ConfigurationSetName = data.ConfigurationSetName;
    }
    if (data.DeliveryOptions !== undefined && data.DeliveryOptions !== null) {
        contents.DeliveryOptions = deserializeAws_restJson1DeliveryOptions(data.DeliveryOptions, context);
    }
    if (data.ReputationOptions !== undefined && data.ReputationOptions !== null) {
        contents.ReputationOptions = deserializeAws_restJson1ReputationOptions(data.ReputationOptions, context);
    }
    if (data.SendingOptions !== undefined && data.SendingOptions !== null) {
        contents.SendingOptions = deserializeAws_restJson1SendingOptions(data.SendingOptions, context);
    }
    if (data.SuppressionOptions !== undefined && data.SuppressionOptions !== null) {
        contents.SuppressionOptions = deserializeAws_restJson1SuppressionOptions(data.SuppressionOptions, context);
    }
    if (data.Tags !== undefined && data.Tags !== null) {
        contents.Tags = deserializeAws_restJson1TagList(data.Tags, context);
    }
    if (data.TrackingOptions !== undefined && data.TrackingOptions !== null) {
        contents.TrackingOptions = deserializeAws_restJson1TrackingOptions(data.TrackingOptions, context);
    }
    return Promise.resolve(contents);
};
exports.deserializeAws_restJson1GetConfigurationSetCommand = deserializeAws_restJson1GetConfigurationSetCommand;
const deserializeAws_restJson1GetConfigurationSetCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "BadRequestException":
        case "com.amazonaws.sesv2#BadRequestException":
            response = {
                ...(await deserializeAws_restJson1BadRequestExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "NotFoundException":
        case "com.amazonaws.sesv2#NotFoundException":
            response = {
                ...(await deserializeAws_restJson1NotFoundExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "TooManyRequestsException":
        case "com.amazonaws.sesv2#TooManyRequestsException":
            response = {
                ...(await deserializeAws_restJson1TooManyRequestsExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        default:
            const parsedBody = parsedOutput.body;
            errorCode = parsedBody.code || parsedBody.Code || errorCode;
            response = {
                ...parsedBody,
                name: `${errorCode}`,
                message: parsedBody.message || parsedBody.Message || errorCode,
                $fault: "client",
                $metadata: deserializeMetadata(output),
            };
    }
    const message = response.message || response.Message || errorCode;
    response.message = message;
    delete response.Message;
    return Promise.reject(Object.assign(new Error(message), response));
};
const deserializeAws_restJson1GetConfigurationSetEventDestinationsCommand = async (output, context) => {
    if (output.statusCode !== 200 && output.statusCode >= 300) {
        return deserializeAws_restJson1GetConfigurationSetEventDestinationsCommandError(output, context);
    }
    const contents = {
        $metadata: deserializeMetadata(output),
        EventDestinations: undefined,
    };
    const data = await parseBody(output.body, context);
    if (data.EventDestinations !== undefined && data.EventDestinations !== null) {
        contents.EventDestinations = deserializeAws_restJson1EventDestinations(data.EventDestinations, context);
    }
    return Promise.resolve(contents);
};
exports.deserializeAws_restJson1GetConfigurationSetEventDestinationsCommand = deserializeAws_restJson1GetConfigurationSetEventDestinationsCommand;
const deserializeAws_restJson1GetConfigurationSetEventDestinationsCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "BadRequestException":
        case "com.amazonaws.sesv2#BadRequestException":
            response = {
                ...(await deserializeAws_restJson1BadRequestExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "NotFoundException":
        case "com.amazonaws.sesv2#NotFoundException":
            response = {
                ...(await deserializeAws_restJson1NotFoundExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "TooManyRequestsException":
        case "com.amazonaws.sesv2#TooManyRequestsException":
            response = {
                ...(await deserializeAws_restJson1TooManyRequestsExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        default:
            const parsedBody = parsedOutput.body;
            errorCode = parsedBody.code || parsedBody.Code || errorCode;
            response = {
                ...parsedBody,
                name: `${errorCode}`,
                message: parsedBody.message || parsedBody.Message || errorCode,
                $fault: "client",
                $metadata: deserializeMetadata(output),
            };
    }
    const message = response.message || response.Message || errorCode;
    response.message = message;
    delete response.Message;
    return Promise.reject(Object.assign(new Error(message), response));
};
const deserializeAws_restJson1GetContactCommand = async (output, context) => {
    if (output.statusCode !== 200 && output.statusCode >= 300) {
        return deserializeAws_restJson1GetContactCommandError(output, context);
    }
    const contents = {
        $metadata: deserializeMetadata(output),
        AttributesData: undefined,
        ContactListName: undefined,
        CreatedTimestamp: undefined,
        EmailAddress: undefined,
        LastUpdatedTimestamp: undefined,
        TopicDefaultPreferences: undefined,
        TopicPreferences: undefined,
        UnsubscribeAll: undefined,
    };
    const data = await parseBody(output.body, context);
    if (data.AttributesData !== undefined && data.AttributesData !== null) {
        contents.AttributesData = data.AttributesData;
    }
    if (data.ContactListName !== undefined && data.ContactListName !== null) {
        contents.ContactListName = data.ContactListName;
    }
    if (data.CreatedTimestamp !== undefined && data.CreatedTimestamp !== null) {
        contents.CreatedTimestamp = new Date(Math.round(data.CreatedTimestamp * 1000));
    }
    if (data.EmailAddress !== undefined && data.EmailAddress !== null) {
        contents.EmailAddress = data.EmailAddress;
    }
    if (data.LastUpdatedTimestamp !== undefined && data.LastUpdatedTimestamp !== null) {
        contents.LastUpdatedTimestamp = new Date(Math.round(data.LastUpdatedTimestamp * 1000));
    }
    if (data.TopicDefaultPreferences !== undefined && data.TopicDefaultPreferences !== null) {
        contents.TopicDefaultPreferences = deserializeAws_restJson1TopicPreferenceList(data.TopicDefaultPreferences, context);
    }
    if (data.TopicPreferences !== undefined && data.TopicPreferences !== null) {
        contents.TopicPreferences = deserializeAws_restJson1TopicPreferenceList(data.TopicPreferences, context);
    }
    if (data.UnsubscribeAll !== undefined && data.UnsubscribeAll !== null) {
        contents.UnsubscribeAll = data.UnsubscribeAll;
    }
    return Promise.resolve(contents);
};
exports.deserializeAws_restJson1GetContactCommand = deserializeAws_restJson1GetContactCommand;
const deserializeAws_restJson1GetContactCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "BadRequestException":
        case "com.amazonaws.sesv2#BadRequestException":
            response = {
                ...(await deserializeAws_restJson1BadRequestExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "NotFoundException":
        case "com.amazonaws.sesv2#NotFoundException":
            response = {
                ...(await deserializeAws_restJson1NotFoundExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "TooManyRequestsException":
        case "com.amazonaws.sesv2#TooManyRequestsException":
            response = {
                ...(await deserializeAws_restJson1TooManyRequestsExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        default:
            const parsedBody = parsedOutput.body;
            errorCode = parsedBody.code || parsedBody.Code || errorCode;
            response = {
                ...parsedBody,
                name: `${errorCode}`,
                message: parsedBody.message || parsedBody.Message || errorCode,
                $fault: "client",
                $metadata: deserializeMetadata(output),
            };
    }
    const message = response.message || response.Message || errorCode;
    response.message = message;
    delete response.Message;
    return Promise.reject(Object.assign(new Error(message), response));
};
const deserializeAws_restJson1GetContactListCommand = async (output, context) => {
    if (output.statusCode !== 200 && output.statusCode >= 300) {
        return deserializeAws_restJson1GetContactListCommandError(output, context);
    }
    const contents = {
        $metadata: deserializeMetadata(output),
        ContactListName: undefined,
        CreatedTimestamp: undefined,
        Description: undefined,
        LastUpdatedTimestamp: undefined,
        Tags: undefined,
        Topics: undefined,
    };
    const data = await parseBody(output.body, context);
    if (data.ContactListName !== undefined && data.ContactListName !== null) {
        contents.ContactListName = data.ContactListName;
    }
    if (data.CreatedTimestamp !== undefined && data.CreatedTimestamp !== null) {
        contents.CreatedTimestamp = new Date(Math.round(data.CreatedTimestamp * 1000));
    }
    if (data.Description !== undefined && data.Description !== null) {
        contents.Description = data.Description;
    }
    if (data.LastUpdatedTimestamp !== undefined && data.LastUpdatedTimestamp !== null) {
        contents.LastUpdatedTimestamp = new Date(Math.round(data.LastUpdatedTimestamp * 1000));
    }
    if (data.Tags !== undefined && data.Tags !== null) {
        contents.Tags = deserializeAws_restJson1TagList(data.Tags, context);
    }
    if (data.Topics !== undefined && data.Topics !== null) {
        contents.Topics = deserializeAws_restJson1Topics(data.Topics, context);
    }
    return Promise.resolve(contents);
};
exports.deserializeAws_restJson1GetContactListCommand = deserializeAws_restJson1GetContactListCommand;
const deserializeAws_restJson1GetContactListCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "BadRequestException":
        case "com.amazonaws.sesv2#BadRequestException":
            response = {
                ...(await deserializeAws_restJson1BadRequestExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "NotFoundException":
        case "com.amazonaws.sesv2#NotFoundException":
            response = {
                ...(await deserializeAws_restJson1NotFoundExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "TooManyRequestsException":
        case "com.amazonaws.sesv2#TooManyRequestsException":
            response = {
                ...(await deserializeAws_restJson1TooManyRequestsExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        default:
            const parsedBody = parsedOutput.body;
            errorCode = parsedBody.code || parsedBody.Code || errorCode;
            response = {
                ...parsedBody,
                name: `${errorCode}`,
                message: parsedBody.message || parsedBody.Message || errorCode,
                $fault: "client",
                $metadata: deserializeMetadata(output),
            };
    }
    const message = response.message || response.Message || errorCode;
    response.message = message;
    delete response.Message;
    return Promise.reject(Object.assign(new Error(message), response));
};
const deserializeAws_restJson1GetCustomVerificationEmailTemplateCommand = async (output, context) => {
    if (output.statusCode !== 200 && output.statusCode >= 300) {
        return deserializeAws_restJson1GetCustomVerificationEmailTemplateCommandError(output, context);
    }
    const contents = {
        $metadata: deserializeMetadata(output),
        FailureRedirectionURL: undefined,
        FromEmailAddress: undefined,
        SuccessRedirectionURL: undefined,
        TemplateContent: undefined,
        TemplateName: undefined,
        TemplateSubject: undefined,
    };
    const data = await parseBody(output.body, context);
    if (data.FailureRedirectionURL !== undefined && data.FailureRedirectionURL !== null) {
        contents.FailureRedirectionURL = data.FailureRedirectionURL;
    }
    if (data.FromEmailAddress !== undefined && data.FromEmailAddress !== null) {
        contents.FromEmailAddress = data.FromEmailAddress;
    }
    if (data.SuccessRedirectionURL !== undefined && data.SuccessRedirectionURL !== null) {
        contents.SuccessRedirectionURL = data.SuccessRedirectionURL;
    }
    if (data.TemplateContent !== undefined && data.TemplateContent !== null) {
        contents.TemplateContent = data.TemplateContent;
    }
    if (data.TemplateName !== undefined && data.TemplateName !== null) {
        contents.TemplateName = data.TemplateName;
    }
    if (data.TemplateSubject !== undefined && data.TemplateSubject !== null) {
        contents.TemplateSubject = data.TemplateSubject;
    }
    return Promise.resolve(contents);
};
exports.deserializeAws_restJson1GetCustomVerificationEmailTemplateCommand = deserializeAws_restJson1GetCustomVerificationEmailTemplateCommand;
const deserializeAws_restJson1GetCustomVerificationEmailTemplateCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "BadRequestException":
        case "com.amazonaws.sesv2#BadRequestException":
            response = {
                ...(await deserializeAws_restJson1BadRequestExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "NotFoundException":
        case "com.amazonaws.sesv2#NotFoundException":
            response = {
                ...(await deserializeAws_restJson1NotFoundExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "TooManyRequestsException":
        case "com.amazonaws.sesv2#TooManyRequestsException":
            response = {
                ...(await deserializeAws_restJson1TooManyRequestsExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        default:
            const parsedBody = parsedOutput.body;
            errorCode = parsedBody.code || parsedBody.Code || errorCode;
            response = {
                ...parsedBody,
                name: `${errorCode}`,
                message: parsedBody.message || parsedBody.Message || errorCode,
                $fault: "client",
                $metadata: deserializeMetadata(output),
            };
    }
    const message = response.message || response.Message || errorCode;
    response.message = message;
    delete response.Message;
    return Promise.reject(Object.assign(new Error(message), response));
};
const deserializeAws_restJson1GetDedicatedIpCommand = async (output, context) => {
    if (output.statusCode !== 200 && output.statusCode >= 300) {
        return deserializeAws_restJson1GetDedicatedIpCommandError(output, context);
    }
    const contents = {
        $metadata: deserializeMetadata(output),
        DedicatedIp: undefined,
    };
    const data = await parseBody(output.body, context);
    if (data.DedicatedIp !== undefined && data.DedicatedIp !== null) {
        contents.DedicatedIp = deserializeAws_restJson1DedicatedIp(data.DedicatedIp, context);
    }
    return Promise.resolve(contents);
};
exports.deserializeAws_restJson1GetDedicatedIpCommand = deserializeAws_restJson1GetDedicatedIpCommand;
const deserializeAws_restJson1GetDedicatedIpCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "BadRequestException":
        case "com.amazonaws.sesv2#BadRequestException":
            response = {
                ...(await deserializeAws_restJson1BadRequestExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "NotFoundException":
        case "com.amazonaws.sesv2#NotFoundException":
            response = {
                ...(await deserializeAws_restJson1NotFoundExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "TooManyRequestsException":
        case "com.amazonaws.sesv2#TooManyRequestsException":
            response = {
                ...(await deserializeAws_restJson1TooManyRequestsExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        default:
            const parsedBody = parsedOutput.body;
            errorCode = parsedBody.code || parsedBody.Code || errorCode;
            response = {
                ...parsedBody,
                name: `${errorCode}`,
                message: parsedBody.message || parsedBody.Message || errorCode,
                $fault: "client",
                $metadata: deserializeMetadata(output),
            };
    }
    const message = response.message || response.Message || errorCode;
    response.message = message;
    delete response.Message;
    return Promise.reject(Object.assign(new Error(message), response));
};
const deserializeAws_restJson1GetDedicatedIpsCommand = async (output, context) => {
    if (output.statusCode !== 200 && output.statusCode >= 300) {
        return deserializeAws_restJson1GetDedicatedIpsCommandError(output, context);
    }
    const contents = {
        $metadata: deserializeMetadata(output),
        DedicatedIps: undefined,
        NextToken: undefined,
    };
    const data = await parseBody(output.body, context);
    if (data.DedicatedIps !== undefined && data.DedicatedIps !== null) {
        contents.DedicatedIps = deserializeAws_restJson1DedicatedIpList(data.DedicatedIps, context);
    }
    if (data.NextToken !== undefined && data.NextToken !== null) {
        contents.NextToken = data.NextToken;
    }
    return Promise.resolve(contents);
};
exports.deserializeAws_restJson1GetDedicatedIpsCommand = deserializeAws_restJson1GetDedicatedIpsCommand;
const deserializeAws_restJson1GetDedicatedIpsCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "BadRequestException":
        case "com.amazonaws.sesv2#BadRequestException":
            response = {
                ...(await deserializeAws_restJson1BadRequestExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "NotFoundException":
        case "com.amazonaws.sesv2#NotFoundException":
            response = {
                ...(await deserializeAws_restJson1NotFoundExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "TooManyRequestsException":
        case "com.amazonaws.sesv2#TooManyRequestsException":
            response = {
                ...(await deserializeAws_restJson1TooManyRequestsExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        default:
            const parsedBody = parsedOutput.body;
            errorCode = parsedBody.code || parsedBody.Code || errorCode;
            response = {
                ...parsedBody,
                name: `${errorCode}`,
                message: parsedBody.message || parsedBody.Message || errorCode,
                $fault: "client",
                $metadata: deserializeMetadata(output),
            };
    }
    const message = response.message || response.Message || errorCode;
    response.message = message;
    delete response.Message;
    return Promise.reject(Object.assign(new Error(message), response));
};
const deserializeAws_restJson1GetDeliverabilityDashboardOptionsCommand = async (output, context) => {
    if (output.statusCode !== 200 && output.statusCode >= 300) {
        return deserializeAws_restJson1GetDeliverabilityDashboardOptionsCommandError(output, context);
    }
    const contents = {
        $metadata: deserializeMetadata(output),
        AccountStatus: undefined,
        ActiveSubscribedDomains: undefined,
        DashboardEnabled: undefined,
        PendingExpirationSubscribedDomains: undefined,
        SubscriptionExpiryDate: undefined,
    };
    const data = await parseBody(output.body, context);
    if (data.AccountStatus !== undefined && data.AccountStatus !== null) {
        contents.AccountStatus = data.AccountStatus;
    }
    if (data.ActiveSubscribedDomains !== undefined && data.ActiveSubscribedDomains !== null) {
        contents.ActiveSubscribedDomains = deserializeAws_restJson1DomainDeliverabilityTrackingOptions(data.ActiveSubscribedDomains, context);
    }
    if (data.DashboardEnabled !== undefined && data.DashboardEnabled !== null) {
        contents.DashboardEnabled = data.DashboardEnabled;
    }
    if (data.PendingExpirationSubscribedDomains !== undefined && data.PendingExpirationSubscribedDomains !== null) {
        contents.PendingExpirationSubscribedDomains = deserializeAws_restJson1DomainDeliverabilityTrackingOptions(data.PendingExpirationSubscribedDomains, context);
    }
    if (data.SubscriptionExpiryDate !== undefined && data.SubscriptionExpiryDate !== null) {
        contents.SubscriptionExpiryDate = new Date(Math.round(data.SubscriptionExpiryDate * 1000));
    }
    return Promise.resolve(contents);
};
exports.deserializeAws_restJson1GetDeliverabilityDashboardOptionsCommand = deserializeAws_restJson1GetDeliverabilityDashboardOptionsCommand;
const deserializeAws_restJson1GetDeliverabilityDashboardOptionsCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "BadRequestException":
        case "com.amazonaws.sesv2#BadRequestException":
            response = {
                ...(await deserializeAws_restJson1BadRequestExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "LimitExceededException":
        case "com.amazonaws.sesv2#LimitExceededException":
            response = {
                ...(await deserializeAws_restJson1LimitExceededExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "TooManyRequestsException":
        case "com.amazonaws.sesv2#TooManyRequestsException":
            response = {
                ...(await deserializeAws_restJson1TooManyRequestsExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        default:
            const parsedBody = parsedOutput.body;
            errorCode = parsedBody.code || parsedBody.Code || errorCode;
            response = {
                ...parsedBody,
                name: `${errorCode}`,
                message: parsedBody.message || parsedBody.Message || errorCode,
                $fault: "client",
                $metadata: deserializeMetadata(output),
            };
    }
    const message = response.message || response.Message || errorCode;
    response.message = message;
    delete response.Message;
    return Promise.reject(Object.assign(new Error(message), response));
};
const deserializeAws_restJson1GetDeliverabilityTestReportCommand = async (output, context) => {
    if (output.statusCode !== 200 && output.statusCode >= 300) {
        return deserializeAws_restJson1GetDeliverabilityTestReportCommandError(output, context);
    }
    const contents = {
        $metadata: deserializeMetadata(output),
        DeliverabilityTestReport: undefined,
        IspPlacements: undefined,
        Message: undefined,
        OverallPlacement: undefined,
        Tags: undefined,
    };
    const data = await parseBody(output.body, context);
    if (data.DeliverabilityTestReport !== undefined && data.DeliverabilityTestReport !== null) {
        contents.DeliverabilityTestReport = deserializeAws_restJson1DeliverabilityTestReport(data.DeliverabilityTestReport, context);
    }
    if (data.IspPlacements !== undefined && data.IspPlacements !== null) {
        contents.IspPlacements = deserializeAws_restJson1IspPlacements(data.IspPlacements, context);
    }
    if (data.Message !== undefined && data.Message !== null) {
        contents.Message = data.Message;
    }
    if (data.OverallPlacement !== undefined && data.OverallPlacement !== null) {
        contents.OverallPlacement = deserializeAws_restJson1PlacementStatistics(data.OverallPlacement, context);
    }
    if (data.Tags !== undefined && data.Tags !== null) {
        contents.Tags = deserializeAws_restJson1TagList(data.Tags, context);
    }
    return Promise.resolve(contents);
};
exports.deserializeAws_restJson1GetDeliverabilityTestReportCommand = deserializeAws_restJson1GetDeliverabilityTestReportCommand;
const deserializeAws_restJson1GetDeliverabilityTestReportCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "BadRequestException":
        case "com.amazonaws.sesv2#BadRequestException":
            response = {
                ...(await deserializeAws_restJson1BadRequestExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "NotFoundException":
        case "com.amazonaws.sesv2#NotFoundException":
            response = {
                ...(await deserializeAws_restJson1NotFoundExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "TooManyRequestsException":
        case "com.amazonaws.sesv2#TooManyRequestsException":
            response = {
                ...(await deserializeAws_restJson1TooManyRequestsExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        default:
            const parsedBody = parsedOutput.body;
            errorCode = parsedBody.code || parsedBody.Code || errorCode;
            response = {
                ...parsedBody,
                name: `${errorCode}`,
                message: parsedBody.message || parsedBody.Message || errorCode,
                $fault: "client",
                $metadata: deserializeMetadata(output),
            };
    }
    const message = response.message || response.Message || errorCode;
    response.message = message;
    delete response.Message;
    return Promise.reject(Object.assign(new Error(message), response));
};
const deserializeAws_restJson1GetDomainDeliverabilityCampaignCommand = async (output, context) => {
    if (output.statusCode !== 200 && output.statusCode >= 300) {
        return deserializeAws_restJson1GetDomainDeliverabilityCampaignCommandError(output, context);
    }
    const contents = {
        $metadata: deserializeMetadata(output),
        DomainDeliverabilityCampaign: undefined,
    };
    const data = await parseBody(output.body, context);
    if (data.DomainDeliverabilityCampaign !== undefined && data.DomainDeliverabilityCampaign !== null) {
        contents.DomainDeliverabilityCampaign = deserializeAws_restJson1DomainDeliverabilityCampaign(data.DomainDeliverabilityCampaign, context);
    }
    return Promise.resolve(contents);
};
exports.deserializeAws_restJson1GetDomainDeliverabilityCampaignCommand = deserializeAws_restJson1GetDomainDeliverabilityCampaignCommand;
const deserializeAws_restJson1GetDomainDeliverabilityCampaignCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "BadRequestException":
        case "com.amazonaws.sesv2#BadRequestException":
            response = {
                ...(await deserializeAws_restJson1BadRequestExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "NotFoundException":
        case "com.amazonaws.sesv2#NotFoundException":
            response = {
                ...(await deserializeAws_restJson1NotFoundExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "TooManyRequestsException":
        case "com.amazonaws.sesv2#TooManyRequestsException":
            response = {
                ...(await deserializeAws_restJson1TooManyRequestsExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        default:
            const parsedBody = parsedOutput.body;
            errorCode = parsedBody.code || parsedBody.Code || errorCode;
            response = {
                ...parsedBody,
                name: `${errorCode}`,
                message: parsedBody.message || parsedBody.Message || errorCode,
                $fault: "client",
                $metadata: deserializeMetadata(output),
            };
    }
    const message = response.message || response.Message || errorCode;
    response.message = message;
    delete response.Message;
    return Promise.reject(Object.assign(new Error(message), response));
};
const deserializeAws_restJson1GetDomainStatisticsReportCommand = async (output, context) => {
    if (output.statusCode !== 200 && output.statusCode >= 300) {
        return deserializeAws_restJson1GetDomainStatisticsReportCommandError(output, context);
    }
    const contents = {
        $metadata: deserializeMetadata(output),
        DailyVolumes: undefined,
        OverallVolume: undefined,
    };
    const data = await parseBody(output.body, context);
    if (data.DailyVolumes !== undefined && data.DailyVolumes !== null) {
        contents.DailyVolumes = deserializeAws_restJson1DailyVolumes(data.DailyVolumes, context);
    }
    if (data.OverallVolume !== undefined && data.OverallVolume !== null) {
        contents.OverallVolume = deserializeAws_restJson1OverallVolume(data.OverallVolume, context);
    }
    return Promise.resolve(contents);
};
exports.deserializeAws_restJson1GetDomainStatisticsReportCommand = deserializeAws_restJson1GetDomainStatisticsReportCommand;
const deserializeAws_restJson1GetDomainStatisticsReportCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "BadRequestException":
        case "com.amazonaws.sesv2#BadRequestException":
            response = {
                ...(await deserializeAws_restJson1BadRequestExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "NotFoundException":
        case "com.amazonaws.sesv2#NotFoundException":
            response = {
                ...(await deserializeAws_restJson1NotFoundExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "TooManyRequestsException":
        case "com.amazonaws.sesv2#TooManyRequestsException":
            response = {
                ...(await deserializeAws_restJson1TooManyRequestsExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        default:
            const parsedBody = parsedOutput.body;
            errorCode = parsedBody.code || parsedBody.Code || errorCode;
            response = {
                ...parsedBody,
                name: `${errorCode}`,
                message: parsedBody.message || parsedBody.Message || errorCode,
                $fault: "client",
                $metadata: deserializeMetadata(output),
            };
    }
    const message = response.message || response.Message || errorCode;
    response.message = message;
    delete response.Message;
    return Promise.reject(Object.assign(new Error(message), response));
};
const deserializeAws_restJson1GetEmailIdentityCommand = async (output, context) => {
    if (output.statusCode !== 200 && output.statusCode >= 300) {
        return deserializeAws_restJson1GetEmailIdentityCommandError(output, context);
    }
    const contents = {
        $metadata: deserializeMetadata(output),
        ConfigurationSetName: undefined,
        DkimAttributes: undefined,
        FeedbackForwardingStatus: undefined,
        IdentityType: undefined,
        MailFromAttributes: undefined,
        Policies: undefined,
        Tags: undefined,
        VerifiedForSendingStatus: undefined,
    };
    const data = await parseBody(output.body, context);
    if (data.ConfigurationSetName !== undefined && data.ConfigurationSetName !== null) {
        contents.ConfigurationSetName = data.ConfigurationSetName;
    }
    if (data.DkimAttributes !== undefined && data.DkimAttributes !== null) {
        contents.DkimAttributes = deserializeAws_restJson1DkimAttributes(data.DkimAttributes, context);
    }
    if (data.FeedbackForwardingStatus !== undefined && data.FeedbackForwardingStatus !== null) {
        contents.FeedbackForwardingStatus = data.FeedbackForwardingStatus;
    }
    if (data.IdentityType !== undefined && data.IdentityType !== null) {
        contents.IdentityType = data.IdentityType;
    }
    if (data.MailFromAttributes !== undefined && data.MailFromAttributes !== null) {
        contents.MailFromAttributes = deserializeAws_restJson1MailFromAttributes(data.MailFromAttributes, context);
    }
    if (data.Policies !== undefined && data.Policies !== null) {
        contents.Policies = deserializeAws_restJson1PolicyMap(data.Policies, context);
    }
    if (data.Tags !== undefined && data.Tags !== null) {
        contents.Tags = deserializeAws_restJson1TagList(data.Tags, context);
    }
    if (data.VerifiedForSendingStatus !== undefined && data.VerifiedForSendingStatus !== null) {
        contents.VerifiedForSendingStatus = data.VerifiedForSendingStatus;
    }
    return Promise.resolve(contents);
};
exports.deserializeAws_restJson1GetEmailIdentityCommand = deserializeAws_restJson1GetEmailIdentityCommand;
const deserializeAws_restJson1GetEmailIdentityCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "BadRequestException":
        case "com.amazonaws.sesv2#BadRequestException":
            response = {
                ...(await deserializeAws_restJson1BadRequestExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "NotFoundException":
        case "com.amazonaws.sesv2#NotFoundException":
            response = {
                ...(await deserializeAws_restJson1NotFoundExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "TooManyRequestsException":
        case "com.amazonaws.sesv2#TooManyRequestsException":
            response = {
                ...(await deserializeAws_restJson1TooManyRequestsExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        default:
            const parsedBody = parsedOutput.body;
            errorCode = parsedBody.code || parsedBody.Code || errorCode;
            response = {
                ...parsedBody,
                name: `${errorCode}`,
                message: parsedBody.message || parsedBody.Message || errorCode,
                $fault: "client",
                $metadata: deserializeMetadata(output),
            };
    }
    const message = response.message || response.Message || errorCode;
    response.message = message;
    delete response.Message;
    return Promise.reject(Object.assign(new Error(message), response));
};
const deserializeAws_restJson1GetEmailIdentityPoliciesCommand = async (output, context) => {
    if (output.statusCode !== 200 && output.statusCode >= 300) {
        return deserializeAws_restJson1GetEmailIdentityPoliciesCommandError(output, context);
    }
    const contents = {
        $metadata: deserializeMetadata(output),
        Policies: undefined,
    };
    const data = await parseBody(output.body, context);
    if (data.Policies !== undefined && data.Policies !== null) {
        contents.Policies = deserializeAws_restJson1PolicyMap(data.Policies, context);
    }
    return Promise.resolve(contents);
};
exports.deserializeAws_restJson1GetEmailIdentityPoliciesCommand = deserializeAws_restJson1GetEmailIdentityPoliciesCommand;
const deserializeAws_restJson1GetEmailIdentityPoliciesCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "BadRequestException":
        case "com.amazonaws.sesv2#BadRequestException":
            response = {
                ...(await deserializeAws_restJson1BadRequestExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "NotFoundException":
        case "com.amazonaws.sesv2#NotFoundException":
            response = {
                ...(await deserializeAws_restJson1NotFoundExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "TooManyRequestsException":
        case "com.amazonaws.sesv2#TooManyRequestsException":
            response = {
                ...(await deserializeAws_restJson1TooManyRequestsExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        default:
            const parsedBody = parsedOutput.body;
            errorCode = parsedBody.code || parsedBody.Code || errorCode;
            response = {
                ...parsedBody,
                name: `${errorCode}`,
                message: parsedBody.message || parsedBody.Message || errorCode,
                $fault: "client",
                $metadata: deserializeMetadata(output),
            };
    }
    const message = response.message || response.Message || errorCode;
    response.message = message;
    delete response.Message;
    return Promise.reject(Object.assign(new Error(message), response));
};
const deserializeAws_restJson1GetEmailTemplateCommand = async (output, context) => {
    if (output.statusCode !== 200 && output.statusCode >= 300) {
        return deserializeAws_restJson1GetEmailTemplateCommandError(output, context);
    }
    const contents = {
        $metadata: deserializeMetadata(output),
        TemplateContent: undefined,
        TemplateName: undefined,
    };
    const data = await parseBody(output.body, context);
    if (data.TemplateContent !== undefined && data.TemplateContent !== null) {
        contents.TemplateContent = deserializeAws_restJson1EmailTemplateContent(data.TemplateContent, context);
    }
    if (data.TemplateName !== undefined && data.TemplateName !== null) {
        contents.TemplateName = data.TemplateName;
    }
    return Promise.resolve(contents);
};
exports.deserializeAws_restJson1GetEmailTemplateCommand = deserializeAws_restJson1GetEmailTemplateCommand;
const deserializeAws_restJson1GetEmailTemplateCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "BadRequestException":
        case "com.amazonaws.sesv2#BadRequestException":
            response = {
                ...(await deserializeAws_restJson1BadRequestExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "NotFoundException":
        case "com.amazonaws.sesv2#NotFoundException":
            response = {
                ...(await deserializeAws_restJson1NotFoundExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "TooManyRequestsException":
        case "com.amazonaws.sesv2#TooManyRequestsException":
            response = {
                ...(await deserializeAws_restJson1TooManyRequestsExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        default:
            const parsedBody = parsedOutput.body;
            errorCode = parsedBody.code || parsedBody.Code || errorCode;
            response = {
                ...parsedBody,
                name: `${errorCode}`,
                message: parsedBody.message || parsedBody.Message || errorCode,
                $fault: "client",
                $metadata: deserializeMetadata(output),
            };
    }
    const message = response.message || response.Message || errorCode;
    response.message = message;
    delete response.Message;
    return Promise.reject(Object.assign(new Error(message), response));
};
const deserializeAws_restJson1GetImportJobCommand = async (output, context) => {
    if (output.statusCode !== 200 && output.statusCode >= 300) {
        return deserializeAws_restJson1GetImportJobCommandError(output, context);
    }
    const contents = {
        $metadata: deserializeMetadata(output),
        CompletedTimestamp: undefined,
        CreatedTimestamp: undefined,
        FailedRecordsCount: undefined,
        FailureInfo: undefined,
        ImportDataSource: undefined,
        ImportDestination: undefined,
        JobId: undefined,
        JobStatus: undefined,
        ProcessedRecordsCount: undefined,
    };
    const data = await parseBody(output.body, context);
    if (data.CompletedTimestamp !== undefined && data.CompletedTimestamp !== null) {
        contents.CompletedTimestamp = new Date(Math.round(data.CompletedTimestamp * 1000));
    }
    if (data.CreatedTimestamp !== undefined && data.CreatedTimestamp !== null) {
        contents.CreatedTimestamp = new Date(Math.round(data.CreatedTimestamp * 1000));
    }
    if (data.FailedRecordsCount !== undefined && data.FailedRecordsCount !== null) {
        contents.FailedRecordsCount = data.FailedRecordsCount;
    }
    if (data.FailureInfo !== undefined && data.FailureInfo !== null) {
        contents.FailureInfo = deserializeAws_restJson1FailureInfo(data.FailureInfo, context);
    }
    if (data.ImportDataSource !== undefined && data.ImportDataSource !== null) {
        contents.ImportDataSource = deserializeAws_restJson1ImportDataSource(data.ImportDataSource, context);
    }
    if (data.ImportDestination !== undefined && data.ImportDestination !== null) {
        contents.ImportDestination = deserializeAws_restJson1ImportDestination(data.ImportDestination, context);
    }
    if (data.JobId !== undefined && data.JobId !== null) {
        contents.JobId = data.JobId;
    }
    if (data.JobStatus !== undefined && data.JobStatus !== null) {
        contents.JobStatus = data.JobStatus;
    }
    if (data.ProcessedRecordsCount !== undefined && data.ProcessedRecordsCount !== null) {
        contents.ProcessedRecordsCount = data.ProcessedRecordsCount;
    }
    return Promise.resolve(contents);
};
exports.deserializeAws_restJson1GetImportJobCommand = deserializeAws_restJson1GetImportJobCommand;
const deserializeAws_restJson1GetImportJobCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "BadRequestException":
        case "com.amazonaws.sesv2#BadRequestException":
            response = {
                ...(await deserializeAws_restJson1BadRequestExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "NotFoundException":
        case "com.amazonaws.sesv2#NotFoundException":
            response = {
                ...(await deserializeAws_restJson1NotFoundExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "TooManyRequestsException":
        case "com.amazonaws.sesv2#TooManyRequestsException":
            response = {
                ...(await deserializeAws_restJson1TooManyRequestsExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        default:
            const parsedBody = parsedOutput.body;
            errorCode = parsedBody.code || parsedBody.Code || errorCode;
            response = {
                ...parsedBody,
                name: `${errorCode}`,
                message: parsedBody.message || parsedBody.Message || errorCode,
                $fault: "client",
                $metadata: deserializeMetadata(output),
            };
    }
    const message = response.message || response.Message || errorCode;
    response.message = message;
    delete response.Message;
    return Promise.reject(Object.assign(new Error(message), response));
};
const deserializeAws_restJson1GetSuppressedDestinationCommand = async (output, context) => {
    if (output.statusCode !== 200 && output.statusCode >= 300) {
        return deserializeAws_restJson1GetSuppressedDestinationCommandError(output, context);
    }
    const contents = {
        $metadata: deserializeMetadata(output),
        SuppressedDestination: undefined,
    };
    const data = await parseBody(output.body, context);
    if (data.SuppressedDestination !== undefined && data.SuppressedDestination !== null) {
        contents.SuppressedDestination = deserializeAws_restJson1SuppressedDestination(data.SuppressedDestination, context);
    }
    return Promise.resolve(contents);
};
exports.deserializeAws_restJson1GetSuppressedDestinationCommand = deserializeAws_restJson1GetSuppressedDestinationCommand;
const deserializeAws_restJson1GetSuppressedDestinationCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "BadRequestException":
        case "com.amazonaws.sesv2#BadRequestException":
            response = {
                ...(await deserializeAws_restJson1BadRequestExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "NotFoundException":
        case "com.amazonaws.sesv2#NotFoundException":
            response = {
                ...(await deserializeAws_restJson1NotFoundExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "TooManyRequestsException":
        case "com.amazonaws.sesv2#TooManyRequestsException":
            response = {
                ...(await deserializeAws_restJson1TooManyRequestsExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        default:
            const parsedBody = parsedOutput.body;
            errorCode = parsedBody.code || parsedBody.Code || errorCode;
            response = {
                ...parsedBody,
                name: `${errorCode}`,
                message: parsedBody.message || parsedBody.Message || errorCode,
                $fault: "client",
                $metadata: deserializeMetadata(output),
            };
    }
    const message = response.message || response.Message || errorCode;
    response.message = message;
    delete response.Message;
    return Promise.reject(Object.assign(new Error(message), response));
};
const deserializeAws_restJson1ListConfigurationSetsCommand = async (output, context) => {
    if (output.statusCode !== 200 && output.statusCode >= 300) {
        return deserializeAws_restJson1ListConfigurationSetsCommandError(output, context);
    }
    const contents = {
        $metadata: deserializeMetadata(output),
        ConfigurationSets: undefined,
        NextToken: undefined,
    };
    const data = await parseBody(output.body, context);
    if (data.ConfigurationSets !== undefined && data.ConfigurationSets !== null) {
        contents.ConfigurationSets = deserializeAws_restJson1ConfigurationSetNameList(data.ConfigurationSets, context);
    }
    if (data.NextToken !== undefined && data.NextToken !== null) {
        contents.NextToken = data.NextToken;
    }
    return Promise.resolve(contents);
};
exports.deserializeAws_restJson1ListConfigurationSetsCommand = deserializeAws_restJson1ListConfigurationSetsCommand;
const deserializeAws_restJson1ListConfigurationSetsCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "BadRequestException":
        case "com.amazonaws.sesv2#BadRequestException":
            response = {
                ...(await deserializeAws_restJson1BadRequestExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "TooManyRequestsException":
        case "com.amazonaws.sesv2#TooManyRequestsException":
            response = {
                ...(await deserializeAws_restJson1TooManyRequestsExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        default:
            const parsedBody = parsedOutput.body;
            errorCode = parsedBody.code || parsedBody.Code || errorCode;
            response = {
                ...parsedBody,
                name: `${errorCode}`,
                message: parsedBody.message || parsedBody.Message || errorCode,
                $fault: "client",
                $metadata: deserializeMetadata(output),
            };
    }
    const message = response.message || response.Message || errorCode;
    response.message = message;
    delete response.Message;
    return Promise.reject(Object.assign(new Error(message), response));
};
const deserializeAws_restJson1ListContactListsCommand = async (output, context) => {
    if (output.statusCode !== 200 && output.statusCode >= 300) {
        return deserializeAws_restJson1ListContactListsCommandError(output, context);
    }
    const contents = {
        $metadata: deserializeMetadata(output),
        ContactLists: undefined,
        NextToken: undefined,
    };
    const data = await parseBody(output.body, context);
    if (data.ContactLists !== undefined && data.ContactLists !== null) {
        contents.ContactLists = deserializeAws_restJson1ListOfContactLists(data.ContactLists, context);
    }
    if (data.NextToken !== undefined && data.NextToken !== null) {
        contents.NextToken = data.NextToken;
    }
    return Promise.resolve(contents);
};
exports.deserializeAws_restJson1ListContactListsCommand = deserializeAws_restJson1ListContactListsCommand;
const deserializeAws_restJson1ListContactListsCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "BadRequestException":
        case "com.amazonaws.sesv2#BadRequestException":
            response = {
                ...(await deserializeAws_restJson1BadRequestExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "TooManyRequestsException":
        case "com.amazonaws.sesv2#TooManyRequestsException":
            response = {
                ...(await deserializeAws_restJson1TooManyRequestsExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        default:
            const parsedBody = parsedOutput.body;
            errorCode = parsedBody.code || parsedBody.Code || errorCode;
            response = {
                ...parsedBody,
                name: `${errorCode}`,
                message: parsedBody.message || parsedBody.Message || errorCode,
                $fault: "client",
                $metadata: deserializeMetadata(output),
            };
    }
    const message = response.message || response.Message || errorCode;
    response.message = message;
    delete response.Message;
    return Promise.reject(Object.assign(new Error(message), response));
};
const deserializeAws_restJson1ListContactsCommand = async (output, context) => {
    if (output.statusCode !== 200 && output.statusCode >= 300) {
        return deserializeAws_restJson1ListContactsCommandError(output, context);
    }
    const contents = {
        $metadata: deserializeMetadata(output),
        Contacts: undefined,
        NextToken: undefined,
    };
    const data = await parseBody(output.body, context);
    if (data.Contacts !== undefined && data.Contacts !== null) {
        contents.Contacts = deserializeAws_restJson1ListOfContacts(data.Contacts, context);
    }
    if (data.NextToken !== undefined && data.NextToken !== null) {
        contents.NextToken = data.NextToken;
    }
    return Promise.resolve(contents);
};
exports.deserializeAws_restJson1ListContactsCommand = deserializeAws_restJson1ListContactsCommand;
const deserializeAws_restJson1ListContactsCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "BadRequestException":
        case "com.amazonaws.sesv2#BadRequestException":
            response = {
                ...(await deserializeAws_restJson1BadRequestExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "NotFoundException":
        case "com.amazonaws.sesv2#NotFoundException":
            response = {
                ...(await deserializeAws_restJson1NotFoundExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "TooManyRequestsException":
        case "com.amazonaws.sesv2#TooManyRequestsException":
            response = {
                ...(await deserializeAws_restJson1TooManyRequestsExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        default:
            const parsedBody = parsedOutput.body;
            errorCode = parsedBody.code || parsedBody.Code || errorCode;
            response = {
                ...parsedBody,
                name: `${errorCode}`,
                message: parsedBody.message || parsedBody.Message || errorCode,
                $fault: "client",
                $metadata: deserializeMetadata(output),
            };
    }
    const message = response.message || response.Message || errorCode;
    response.message = message;
    delete response.Message;
    return Promise.reject(Object.assign(new Error(message), response));
};
const deserializeAws_restJson1ListCustomVerificationEmailTemplatesCommand = async (output, context) => {
    if (output.statusCode !== 200 && output.statusCode >= 300) {
        return deserializeAws_restJson1ListCustomVerificationEmailTemplatesCommandError(output, context);
    }
    const contents = {
        $metadata: deserializeMetadata(output),
        CustomVerificationEmailTemplates: undefined,
        NextToken: undefined,
    };
    const data = await parseBody(output.body, context);
    if (data.CustomVerificationEmailTemplates !== undefined && data.CustomVerificationEmailTemplates !== null) {
        contents.CustomVerificationEmailTemplates = deserializeAws_restJson1CustomVerificationEmailTemplatesList(data.CustomVerificationEmailTemplates, context);
    }
    if (data.NextToken !== undefined && data.NextToken !== null) {
        contents.NextToken = data.NextToken;
    }
    return Promise.resolve(contents);
};
exports.deserializeAws_restJson1ListCustomVerificationEmailTemplatesCommand = deserializeAws_restJson1ListCustomVerificationEmailTemplatesCommand;
const deserializeAws_restJson1ListCustomVerificationEmailTemplatesCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "BadRequestException":
        case "com.amazonaws.sesv2#BadRequestException":
            response = {
                ...(await deserializeAws_restJson1BadRequestExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "TooManyRequestsException":
        case "com.amazonaws.sesv2#TooManyRequestsException":
            response = {
                ...(await deserializeAws_restJson1TooManyRequestsExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        default:
            const parsedBody = parsedOutput.body;
            errorCode = parsedBody.code || parsedBody.Code || errorCode;
            response = {
                ...parsedBody,
                name: `${errorCode}`,
                message: parsedBody.message || parsedBody.Message || errorCode,
                $fault: "client",
                $metadata: deserializeMetadata(output),
            };
    }
    const message = response.message || response.Message || errorCode;
    response.message = message;
    delete response.Message;
    return Promise.reject(Object.assign(new Error(message), response));
};
const deserializeAws_restJson1ListDedicatedIpPoolsCommand = async (output, context) => {
    if (output.statusCode !== 200 && output.statusCode >= 300) {
        return deserializeAws_restJson1ListDedicatedIpPoolsCommandError(output, context);
    }
    const contents = {
        $metadata: deserializeMetadata(output),
        DedicatedIpPools: undefined,
        NextToken: undefined,
    };
    const data = await parseBody(output.body, context);
    if (data.DedicatedIpPools !== undefined && data.DedicatedIpPools !== null) {
        contents.DedicatedIpPools = deserializeAws_restJson1ListOfDedicatedIpPools(data.DedicatedIpPools, context);
    }
    if (data.NextToken !== undefined && data.NextToken !== null) {
        contents.NextToken = data.NextToken;
    }
    return Promise.resolve(contents);
};
exports.deserializeAws_restJson1ListDedicatedIpPoolsCommand = deserializeAws_restJson1ListDedicatedIpPoolsCommand;
const deserializeAws_restJson1ListDedicatedIpPoolsCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "BadRequestException":
        case "com.amazonaws.sesv2#BadRequestException":
            response = {
                ...(await deserializeAws_restJson1BadRequestExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "TooManyRequestsException":
        case "com.amazonaws.sesv2#TooManyRequestsException":
            response = {
                ...(await deserializeAws_restJson1TooManyRequestsExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        default:
            const parsedBody = parsedOutput.body;
            errorCode = parsedBody.code || parsedBody.Code || errorCode;
            response = {
                ...parsedBody,
                name: `${errorCode}`,
                message: parsedBody.message || parsedBody.Message || errorCode,
                $fault: "client",
                $metadata: deserializeMetadata(output),
            };
    }
    const message = response.message || response.Message || errorCode;
    response.message = message;
    delete response.Message;
    return Promise.reject(Object.assign(new Error(message), response));
};
const deserializeAws_restJson1ListDeliverabilityTestReportsCommand = async (output, context) => {
    if (output.statusCode !== 200 && output.statusCode >= 300) {
        return deserializeAws_restJson1ListDeliverabilityTestReportsCommandError(output, context);
    }
    const contents = {
        $metadata: deserializeMetadata(output),
        DeliverabilityTestReports: undefined,
        NextToken: undefined,
    };
    const data = await parseBody(output.body, context);
    if (data.DeliverabilityTestReports !== undefined && data.DeliverabilityTestReports !== null) {
        contents.DeliverabilityTestReports = deserializeAws_restJson1DeliverabilityTestReports(data.DeliverabilityTestReports, context);
    }
    if (data.NextToken !== undefined && data.NextToken !== null) {
        contents.NextToken = data.NextToken;
    }
    return Promise.resolve(contents);
};
exports.deserializeAws_restJson1ListDeliverabilityTestReportsCommand = deserializeAws_restJson1ListDeliverabilityTestReportsCommand;
const deserializeAws_restJson1ListDeliverabilityTestReportsCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "BadRequestException":
        case "com.amazonaws.sesv2#BadRequestException":
            response = {
                ...(await deserializeAws_restJson1BadRequestExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "NotFoundException":
        case "com.amazonaws.sesv2#NotFoundException":
            response = {
                ...(await deserializeAws_restJson1NotFoundExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "TooManyRequestsException":
        case "com.amazonaws.sesv2#TooManyRequestsException":
            response = {
                ...(await deserializeAws_restJson1TooManyRequestsExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        default:
            const parsedBody = parsedOutput.body;
            errorCode = parsedBody.code || parsedBody.Code || errorCode;
            response = {
                ...parsedBody,
                name: `${errorCode}`,
                message: parsedBody.message || parsedBody.Message || errorCode,
                $fault: "client",
                $metadata: deserializeMetadata(output),
            };
    }
    const message = response.message || response.Message || errorCode;
    response.message = message;
    delete response.Message;
    return Promise.reject(Object.assign(new Error(message), response));
};
const deserializeAws_restJson1ListDomainDeliverabilityCampaignsCommand = async (output, context) => {
    if (output.statusCode !== 200 && output.statusCode >= 300) {
        return deserializeAws_restJson1ListDomainDeliverabilityCampaignsCommandError(output, context);
    }
    const contents = {
        $metadata: deserializeMetadata(output),
        DomainDeliverabilityCampaigns: undefined,
        NextToken: undefined,
    };
    const data = await parseBody(output.body, context);
    if (data.DomainDeliverabilityCampaigns !== undefined && data.DomainDeliverabilityCampaigns !== null) {
        contents.DomainDeliverabilityCampaigns = deserializeAws_restJson1DomainDeliverabilityCampaignList(data.DomainDeliverabilityCampaigns, context);
    }
    if (data.NextToken !== undefined && data.NextToken !== null) {
        contents.NextToken = data.NextToken;
    }
    return Promise.resolve(contents);
};
exports.deserializeAws_restJson1ListDomainDeliverabilityCampaignsCommand = deserializeAws_restJson1ListDomainDeliverabilityCampaignsCommand;
const deserializeAws_restJson1ListDomainDeliverabilityCampaignsCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "BadRequestException":
        case "com.amazonaws.sesv2#BadRequestException":
            response = {
                ...(await deserializeAws_restJson1BadRequestExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "NotFoundException":
        case "com.amazonaws.sesv2#NotFoundException":
            response = {
                ...(await deserializeAws_restJson1NotFoundExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "TooManyRequestsException":
        case "com.amazonaws.sesv2#TooManyRequestsException":
            response = {
                ...(await deserializeAws_restJson1TooManyRequestsExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        default:
            const parsedBody = parsedOutput.body;
            errorCode = parsedBody.code || parsedBody.Code || errorCode;
            response = {
                ...parsedBody,
                name: `${errorCode}`,
                message: parsedBody.message || parsedBody.Message || errorCode,
                $fault: "client",
                $metadata: deserializeMetadata(output),
            };
    }
    const message = response.message || response.Message || errorCode;
    response.message = message;
    delete response.Message;
    return Promise.reject(Object.assign(new Error(message), response));
};
const deserializeAws_restJson1ListEmailIdentitiesCommand = async (output, context) => {
    if (output.statusCode !== 200 && output.statusCode >= 300) {
        return deserializeAws_restJson1ListEmailIdentitiesCommandError(output, context);
    }
    const contents = {
        $metadata: deserializeMetadata(output),
        EmailIdentities: undefined,
        NextToken: undefined,
    };
    const data = await parseBody(output.body, context);
    if (data.EmailIdentities !== undefined && data.EmailIdentities !== null) {
        contents.EmailIdentities = deserializeAws_restJson1IdentityInfoList(data.EmailIdentities, context);
    }
    if (data.NextToken !== undefined && data.NextToken !== null) {
        contents.NextToken = data.NextToken;
    }
    return Promise.resolve(contents);
};
exports.deserializeAws_restJson1ListEmailIdentitiesCommand = deserializeAws_restJson1ListEmailIdentitiesCommand;
const deserializeAws_restJson1ListEmailIdentitiesCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "BadRequestException":
        case "com.amazonaws.sesv2#BadRequestException":
            response = {
                ...(await deserializeAws_restJson1BadRequestExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "TooManyRequestsException":
        case "com.amazonaws.sesv2#TooManyRequestsException":
            response = {
                ...(await deserializeAws_restJson1TooManyRequestsExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        default:
            const parsedBody = parsedOutput.body;
            errorCode = parsedBody.code || parsedBody.Code || errorCode;
            response = {
                ...parsedBody,
                name: `${errorCode}`,
                message: parsedBody.message || parsedBody.Message || errorCode,
                $fault: "client",
                $metadata: deserializeMetadata(output),
            };
    }
    const message = response.message || response.Message || errorCode;
    response.message = message;
    delete response.Message;
    return Promise.reject(Object.assign(new Error(message), response));
};
const deserializeAws_restJson1ListEmailTemplatesCommand = async (output, context) => {
    if (output.statusCode !== 200 && output.statusCode >= 300) {
        return deserializeAws_restJson1ListEmailTemplatesCommandError(output, context);
    }
    const contents = {
        $metadata: deserializeMetadata(output),
        NextToken: undefined,
        TemplatesMetadata: undefined,
    };
    const data = await parseBody(output.body, context);
    if (data.NextToken !== undefined && data.NextToken !== null) {
        contents.NextToken = data.NextToken;
    }
    if (data.TemplatesMetadata !== undefined && data.TemplatesMetadata !== null) {
        contents.TemplatesMetadata = deserializeAws_restJson1EmailTemplateMetadataList(data.TemplatesMetadata, context);
    }
    return Promise.resolve(contents);
};
exports.deserializeAws_restJson1ListEmailTemplatesCommand = deserializeAws_restJson1ListEmailTemplatesCommand;
const deserializeAws_restJson1ListEmailTemplatesCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "BadRequestException":
        case "com.amazonaws.sesv2#BadRequestException":
            response = {
                ...(await deserializeAws_restJson1BadRequestExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "TooManyRequestsException":
        case "com.amazonaws.sesv2#TooManyRequestsException":
            response = {
                ...(await deserializeAws_restJson1TooManyRequestsExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        default:
            const parsedBody = parsedOutput.body;
            errorCode = parsedBody.code || parsedBody.Code || errorCode;
            response = {
                ...parsedBody,
                name: `${errorCode}`,
                message: parsedBody.message || parsedBody.Message || errorCode,
                $fault: "client",
                $metadata: deserializeMetadata(output),
            };
    }
    const message = response.message || response.Message || errorCode;
    response.message = message;
    delete response.Message;
    return Promise.reject(Object.assign(new Error(message), response));
};
const deserializeAws_restJson1ListImportJobsCommand = async (output, context) => {
    if (output.statusCode !== 200 && output.statusCode >= 300) {
        return deserializeAws_restJson1ListImportJobsCommandError(output, context);
    }
    const contents = {
        $metadata: deserializeMetadata(output),
        ImportJobs: undefined,
        NextToken: undefined,
    };
    const data = await parseBody(output.body, context);
    if (data.ImportJobs !== undefined && data.ImportJobs !== null) {
        contents.ImportJobs = deserializeAws_restJson1ImportJobSummaryList(data.ImportJobs, context);
    }
    if (data.NextToken !== undefined && data.NextToken !== null) {
        contents.NextToken = data.NextToken;
    }
    return Promise.resolve(contents);
};
exports.deserializeAws_restJson1ListImportJobsCommand = deserializeAws_restJson1ListImportJobsCommand;
const deserializeAws_restJson1ListImportJobsCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "BadRequestException":
        case "com.amazonaws.sesv2#BadRequestException":
            response = {
                ...(await deserializeAws_restJson1BadRequestExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "TooManyRequestsException":
        case "com.amazonaws.sesv2#TooManyRequestsException":
            response = {
                ...(await deserializeAws_restJson1TooManyRequestsExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        default:
            const parsedBody = parsedOutput.body;
            errorCode = parsedBody.code || parsedBody.Code || errorCode;
            response = {
                ...parsedBody,
                name: `${errorCode}`,
                message: parsedBody.message || parsedBody.Message || errorCode,
                $fault: "client",
                $metadata: deserializeMetadata(output),
            };
    }
    const message = response.message || response.Message || errorCode;
    response.message = message;
    delete response.Message;
    return Promise.reject(Object.assign(new Error(message), response));
};
const deserializeAws_restJson1ListSuppressedDestinationsCommand = async (output, context) => {
    if (output.statusCode !== 200 && output.statusCode >= 300) {
        return deserializeAws_restJson1ListSuppressedDestinationsCommandError(output, context);
    }
    const contents = {
        $metadata: deserializeMetadata(output),
        NextToken: undefined,
        SuppressedDestinationSummaries: undefined,
    };
    const data = await parseBody(output.body, context);
    if (data.NextToken !== undefined && data.NextToken !== null) {
        contents.NextToken = data.NextToken;
    }
    if (data.SuppressedDestinationSummaries !== undefined && data.SuppressedDestinationSummaries !== null) {
        contents.SuppressedDestinationSummaries = deserializeAws_restJson1SuppressedDestinationSummaries(data.SuppressedDestinationSummaries, context);
    }
    return Promise.resolve(contents);
};
exports.deserializeAws_restJson1ListSuppressedDestinationsCommand = deserializeAws_restJson1ListSuppressedDestinationsCommand;
const deserializeAws_restJson1ListSuppressedDestinationsCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "BadRequestException":
        case "com.amazonaws.sesv2#BadRequestException":
            response = {
                ...(await deserializeAws_restJson1BadRequestExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InvalidNextTokenException":
        case "com.amazonaws.sesv2#InvalidNextTokenException":
            response = {
                ...(await deserializeAws_restJson1InvalidNextTokenExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "TooManyRequestsException":
        case "com.amazonaws.sesv2#TooManyRequestsException":
            response = {
                ...(await deserializeAws_restJson1TooManyRequestsExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        default:
            const parsedBody = parsedOutput.body;
            errorCode = parsedBody.code || parsedBody.Code || errorCode;
            response = {
                ...parsedBody,
                name: `${errorCode}`,
                message: parsedBody.message || parsedBody.Message || errorCode,
                $fault: "client",
                $metadata: deserializeMetadata(output),
            };
    }
    const message = response.message || response.Message || errorCode;
    response.message = message;
    delete response.Message;
    return Promise.reject(Object.assign(new Error(message), response));
};
const deserializeAws_restJson1ListTagsForResourceCommand = async (output, context) => {
    if (output.statusCode !== 200 && output.statusCode >= 300) {
        return deserializeAws_restJson1ListTagsForResourceCommandError(output, context);
    }
    const contents = {
        $metadata: deserializeMetadata(output),
        Tags: undefined,
    };
    const data = await parseBody(output.body, context);
    if (data.Tags !== undefined && data.Tags !== null) {
        contents.Tags = deserializeAws_restJson1TagList(data.Tags, context);
    }
    return Promise.resolve(contents);
};
exports.deserializeAws_restJson1ListTagsForResourceCommand = deserializeAws_restJson1ListTagsForResourceCommand;
const deserializeAws_restJson1ListTagsForResourceCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "BadRequestException":
        case "com.amazonaws.sesv2#BadRequestException":
            response = {
                ...(await deserializeAws_restJson1BadRequestExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "NotFoundException":
        case "com.amazonaws.sesv2#NotFoundException":
            response = {
                ...(await deserializeAws_restJson1NotFoundExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "TooManyRequestsException":
        case "com.amazonaws.sesv2#TooManyRequestsException":
            response = {
                ...(await deserializeAws_restJson1TooManyRequestsExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        default:
            const parsedBody = parsedOutput.body;
            errorCode = parsedBody.code || parsedBody.Code || errorCode;
            response = {
                ...parsedBody,
                name: `${errorCode}`,
                message: parsedBody.message || parsedBody.Message || errorCode,
                $fault: "client",
                $metadata: deserializeMetadata(output),
            };
    }
    const message = response.message || response.Message || errorCode;
    response.message = message;
    delete response.Message;
    return Promise.reject(Object.assign(new Error(message), response));
};
const deserializeAws_restJson1PutAccountDedicatedIpWarmupAttributesCommand = async (output, context) => {
    if (output.statusCode !== 200 && output.statusCode >= 300) {
        return deserializeAws_restJson1PutAccountDedicatedIpWarmupAttributesCommandError(output, context);
    }
    const contents = {
        $metadata: deserializeMetadata(output),
    };
    await collectBody(output.body, context);
    return Promise.resolve(contents);
};
exports.deserializeAws_restJson1PutAccountDedicatedIpWarmupAttributesCommand = deserializeAws_restJson1PutAccountDedicatedIpWarmupAttributesCommand;
const deserializeAws_restJson1PutAccountDedicatedIpWarmupAttributesCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "BadRequestException":
        case "com.amazonaws.sesv2#BadRequestException":
            response = {
                ...(await deserializeAws_restJson1BadRequestExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "TooManyRequestsException":
        case "com.amazonaws.sesv2#TooManyRequestsException":
            response = {
                ...(await deserializeAws_restJson1TooManyRequestsExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        default:
            const parsedBody = parsedOutput.body;
            errorCode = parsedBody.code || parsedBody.Code || errorCode;
            response = {
                ...parsedBody,
                name: `${errorCode}`,
                message: parsedBody.message || parsedBody.Message || errorCode,
                $fault: "client",
                $metadata: deserializeMetadata(output),
            };
    }
    const message = response.message || response.Message || errorCode;
    response.message = message;
    delete response.Message;
    return Promise.reject(Object.assign(new Error(message), response));
};
const deserializeAws_restJson1PutAccountDetailsCommand = async (output, context) => {
    if (output.statusCode !== 200 && output.statusCode >= 300) {
        return deserializeAws_restJson1PutAccountDetailsCommandError(output, context);
    }
    const contents = {
        $metadata: deserializeMetadata(output),
    };
    await collectBody(output.body, context);
    return Promise.resolve(contents);
};
exports.deserializeAws_restJson1PutAccountDetailsCommand = deserializeAws_restJson1PutAccountDetailsCommand;
const deserializeAws_restJson1PutAccountDetailsCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "BadRequestException":
        case "com.amazonaws.sesv2#BadRequestException":
            response = {
                ...(await deserializeAws_restJson1BadRequestExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ConflictException":
        case "com.amazonaws.sesv2#ConflictException":
            response = {
                ...(await deserializeAws_restJson1ConflictExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "TooManyRequestsException":
        case "com.amazonaws.sesv2#TooManyRequestsException":
            response = {
                ...(await deserializeAws_restJson1TooManyRequestsExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        default:
            const parsedBody = parsedOutput.body;
            errorCode = parsedBody.code || parsedBody.Code || errorCode;
            response = {
                ...parsedBody,
                name: `${errorCode}`,
                message: parsedBody.message || parsedBody.Message || errorCode,
                $fault: "client",
                $metadata: deserializeMetadata(output),
            };
    }
    const message = response.message || response.Message || errorCode;
    response.message = message;
    delete response.Message;
    return Promise.reject(Object.assign(new Error(message), response));
};
const deserializeAws_restJson1PutAccountSendingAttributesCommand = async (output, context) => {
    if (output.statusCode !== 200 && output.statusCode >= 300) {
        return deserializeAws_restJson1PutAccountSendingAttributesCommandError(output, context);
    }
    const contents = {
        $metadata: deserializeMetadata(output),
    };
    await collectBody(output.body, context);
    return Promise.resolve(contents);
};
exports.deserializeAws_restJson1PutAccountSendingAttributesCommand = deserializeAws_restJson1PutAccountSendingAttributesCommand;
const deserializeAws_restJson1PutAccountSendingAttributesCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "BadRequestException":
        case "com.amazonaws.sesv2#BadRequestException":
            response = {
                ...(await deserializeAws_restJson1BadRequestExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "TooManyRequestsException":
        case "com.amazonaws.sesv2#TooManyRequestsException":
            response = {
                ...(await deserializeAws_restJson1TooManyRequestsExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        default:
            const parsedBody = parsedOutput.body;
            errorCode = parsedBody.code || parsedBody.Code || errorCode;
            response = {
                ...parsedBody,
                name: `${errorCode}`,
                message: parsedBody.message || parsedBody.Message || errorCode,
                $fault: "client",
                $metadata: deserializeMetadata(output),
            };
    }
    const message = response.message || response.Message || errorCode;
    response.message = message;
    delete response.Message;
    return Promise.reject(Object.assign(new Error(message), response));
};
const deserializeAws_restJson1PutAccountSuppressionAttributesCommand = async (output, context) => {
    if (output.statusCode !== 200 && output.statusCode >= 300) {
        return deserializeAws_restJson1PutAccountSuppressionAttributesCommandError(output, context);
    }
    const contents = {
        $metadata: deserializeMetadata(output),
    };
    await collectBody(output.body, context);
    return Promise.resolve(contents);
};
exports.deserializeAws_restJson1PutAccountSuppressionAttributesCommand = deserializeAws_restJson1PutAccountSuppressionAttributesCommand;
const deserializeAws_restJson1PutAccountSuppressionAttributesCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "BadRequestException":
        case "com.amazonaws.sesv2#BadRequestException":
            response = {
                ...(await deserializeAws_restJson1BadRequestExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "TooManyRequestsException":
        case "com.amazonaws.sesv2#TooManyRequestsException":
            response = {
                ...(await deserializeAws_restJson1TooManyRequestsExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        default:
            const parsedBody = parsedOutput.body;
            errorCode = parsedBody.code || parsedBody.Code || errorCode;
            response = {
                ...parsedBody,
                name: `${errorCode}`,
                message: parsedBody.message || parsedBody.Message || errorCode,
                $fault: "client",
                $metadata: deserializeMetadata(output),
            };
    }
    const message = response.message || response.Message || errorCode;
    response.message = message;
    delete response.Message;
    return Promise.reject(Object.assign(new Error(message), response));
};
const deserializeAws_restJson1PutConfigurationSetDeliveryOptionsCommand = async (output, context) => {
    if (output.statusCode !== 200 && output.statusCode >= 300) {
        return deserializeAws_restJson1PutConfigurationSetDeliveryOptionsCommandError(output, context);
    }
    const contents = {
        $metadata: deserializeMetadata(output),
    };
    await collectBody(output.body, context);
    return Promise.resolve(contents);
};
exports.deserializeAws_restJson1PutConfigurationSetDeliveryOptionsCommand = deserializeAws_restJson1PutConfigurationSetDeliveryOptionsCommand;
const deserializeAws_restJson1PutConfigurationSetDeliveryOptionsCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "BadRequestException":
        case "com.amazonaws.sesv2#BadRequestException":
            response = {
                ...(await deserializeAws_restJson1BadRequestExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "NotFoundException":
        case "com.amazonaws.sesv2#NotFoundException":
            response = {
                ...(await deserializeAws_restJson1NotFoundExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "TooManyRequestsException":
        case "com.amazonaws.sesv2#TooManyRequestsException":
            response = {
                ...(await deserializeAws_restJson1TooManyRequestsExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        default:
            const parsedBody = parsedOutput.body;
            errorCode = parsedBody.code || parsedBody.Code || errorCode;
            response = {
                ...parsedBody,
                name: `${errorCode}`,
                message: parsedBody.message || parsedBody.Message || errorCode,
                $fault: "client",
                $metadata: deserializeMetadata(output),
            };
    }
    const message = response.message || response.Message || errorCode;
    response.message = message;
    delete response.Message;
    return Promise.reject(Object.assign(new Error(message), response));
};
const deserializeAws_restJson1PutConfigurationSetReputationOptionsCommand = async (output, context) => {
    if (output.statusCode !== 200 && output.statusCode >= 300) {
        return deserializeAws_restJson1PutConfigurationSetReputationOptionsCommandError(output, context);
    }
    const contents = {
        $metadata: deserializeMetadata(output),
    };
    await collectBody(output.body, context);
    return Promise.resolve(contents);
};
exports.deserializeAws_restJson1PutConfigurationSetReputationOptionsCommand = deserializeAws_restJson1PutConfigurationSetReputationOptionsCommand;
const deserializeAws_restJson1PutConfigurationSetReputationOptionsCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "BadRequestException":
        case "com.amazonaws.sesv2#BadRequestException":
            response = {
                ...(await deserializeAws_restJson1BadRequestExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "NotFoundException":
        case "com.amazonaws.sesv2#NotFoundException":
            response = {
                ...(await deserializeAws_restJson1NotFoundExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "TooManyRequestsException":
        case "com.amazonaws.sesv2#TooManyRequestsException":
            response = {
                ...(await deserializeAws_restJson1TooManyRequestsExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        default:
            const parsedBody = parsedOutput.body;
            errorCode = parsedBody.code || parsedBody.Code || errorCode;
            response = {
                ...parsedBody,
                name: `${errorCode}`,
                message: parsedBody.message || parsedBody.Message || errorCode,
                $fault: "client",
                $metadata: deserializeMetadata(output),
            };
    }
    const message = response.message || response.Message || errorCode;
    response.message = message;
    delete response.Message;
    return Promise.reject(Object.assign(new Error(message), response));
};
const deserializeAws_restJson1PutConfigurationSetSendingOptionsCommand = async (output, context) => {
    if (output.statusCode !== 200 && output.statusCode >= 300) {
        return deserializeAws_restJson1PutConfigurationSetSendingOptionsCommandError(output, context);
    }
    const contents = {
        $metadata: deserializeMetadata(output),
    };
    await collectBody(output.body, context);
    return Promise.resolve(contents);
};
exports.deserializeAws_restJson1PutConfigurationSetSendingOptionsCommand = deserializeAws_restJson1PutConfigurationSetSendingOptionsCommand;
const deserializeAws_restJson1PutConfigurationSetSendingOptionsCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "BadRequestException":
        case "com.amazonaws.sesv2#BadRequestException":
            response = {
                ...(await deserializeAws_restJson1BadRequestExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "NotFoundException":
        case "com.amazonaws.sesv2#NotFoundException":
            response = {
                ...(await deserializeAws_restJson1NotFoundExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "TooManyRequestsException":
        case "com.amazonaws.sesv2#TooManyRequestsException":
            response = {
                ...(await deserializeAws_restJson1TooManyRequestsExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        default:
            const parsedBody = parsedOutput.body;
            errorCode = parsedBody.code || parsedBody.Code || errorCode;
            response = {
                ...parsedBody,
                name: `${errorCode}`,
                message: parsedBody.message || parsedBody.Message || errorCode,
                $fault: "client",
                $metadata: deserializeMetadata(output),
            };
    }
    const message = response.message || response.Message || errorCode;
    response.message = message;
    delete response.Message;
    return Promise.reject(Object.assign(new Error(message), response));
};
const deserializeAws_restJson1PutConfigurationSetSuppressionOptionsCommand = async (output, context) => {
    if (output.statusCode !== 200 && output.statusCode >= 300) {
        return deserializeAws_restJson1PutConfigurationSetSuppressionOptionsCommandError(output, context);
    }
    const contents = {
        $metadata: deserializeMetadata(output),
    };
    await collectBody(output.body, context);
    return Promise.resolve(contents);
};
exports.deserializeAws_restJson1PutConfigurationSetSuppressionOptionsCommand = deserializeAws_restJson1PutConfigurationSetSuppressionOptionsCommand;
const deserializeAws_restJson1PutConfigurationSetSuppressionOptionsCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "BadRequestException":
        case "com.amazonaws.sesv2#BadRequestException":
            response = {
                ...(await deserializeAws_restJson1BadRequestExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "NotFoundException":
        case "com.amazonaws.sesv2#NotFoundException":
            response = {
                ...(await deserializeAws_restJson1NotFoundExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "TooManyRequestsException":
        case "com.amazonaws.sesv2#TooManyRequestsException":
            response = {
                ...(await deserializeAws_restJson1TooManyRequestsExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        default:
            const parsedBody = parsedOutput.body;
            errorCode = parsedBody.code || parsedBody.Code || errorCode;
            response = {
                ...parsedBody,
                name: `${errorCode}`,
                message: parsedBody.message || parsedBody.Message || errorCode,
                $fault: "client",
                $metadata: deserializeMetadata(output),
            };
    }
    const message = response.message || response.Message || errorCode;
    response.message = message;
    delete response.Message;
    return Promise.reject(Object.assign(new Error(message), response));
};
const deserializeAws_restJson1PutConfigurationSetTrackingOptionsCommand = async (output, context) => {
    if (output.statusCode !== 200 && output.statusCode >= 300) {
        return deserializeAws_restJson1PutConfigurationSetTrackingOptionsCommandError(output, context);
    }
    const contents = {
        $metadata: deserializeMetadata(output),
    };
    await collectBody(output.body, context);
    return Promise.resolve(contents);
};
exports.deserializeAws_restJson1PutConfigurationSetTrackingOptionsCommand = deserializeAws_restJson1PutConfigurationSetTrackingOptionsCommand;
const deserializeAws_restJson1PutConfigurationSetTrackingOptionsCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "BadRequestException":
        case "com.amazonaws.sesv2#BadRequestException":
            response = {
                ...(await deserializeAws_restJson1BadRequestExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "NotFoundException":
        case "com.amazonaws.sesv2#NotFoundException":
            response = {
                ...(await deserializeAws_restJson1NotFoundExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "TooManyRequestsException":
        case "com.amazonaws.sesv2#TooManyRequestsException":
            response = {
                ...(await deserializeAws_restJson1TooManyRequestsExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        default:
            const parsedBody = parsedOutput.body;
            errorCode = parsedBody.code || parsedBody.Code || errorCode;
            response = {
                ...parsedBody,
                name: `${errorCode}`,
                message: parsedBody.message || parsedBody.Message || errorCode,
                $fault: "client",
                $metadata: deserializeMetadata(output),
            };
    }
    const message = response.message || response.Message || errorCode;
    response.message = message;
    delete response.Message;
    return Promise.reject(Object.assign(new Error(message), response));
};
const deserializeAws_restJson1PutDedicatedIpInPoolCommand = async (output, context) => {
    if (output.statusCode !== 200 && output.statusCode >= 300) {
        return deserializeAws_restJson1PutDedicatedIpInPoolCommandError(output, context);
    }
    const contents = {
        $metadata: deserializeMetadata(output),
    };
    await collectBody(output.body, context);
    return Promise.resolve(contents);
};
exports.deserializeAws_restJson1PutDedicatedIpInPoolCommand = deserializeAws_restJson1PutDedicatedIpInPoolCommand;
const deserializeAws_restJson1PutDedicatedIpInPoolCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "BadRequestException":
        case "com.amazonaws.sesv2#BadRequestException":
            response = {
                ...(await deserializeAws_restJson1BadRequestExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "NotFoundException":
        case "com.amazonaws.sesv2#NotFoundException":
            response = {
                ...(await deserializeAws_restJson1NotFoundExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "TooManyRequestsException":
        case "com.amazonaws.sesv2#TooManyRequestsException":
            response = {
                ...(await deserializeAws_restJson1TooManyRequestsExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        default:
            const parsedBody = parsedOutput.body;
            errorCode = parsedBody.code || parsedBody.Code || errorCode;
            response = {
                ...parsedBody,
                name: `${errorCode}`,
                message: parsedBody.message || parsedBody.Message || errorCode,
                $fault: "client",
                $metadata: deserializeMetadata(output),
            };
    }
    const message = response.message || response.Message || errorCode;
    response.message = message;
    delete response.Message;
    return Promise.reject(Object.assign(new Error(message), response));
};
const deserializeAws_restJson1PutDedicatedIpWarmupAttributesCommand = async (output, context) => {
    if (output.statusCode !== 200 && output.statusCode >= 300) {
        return deserializeAws_restJson1PutDedicatedIpWarmupAttributesCommandError(output, context);
    }
    const contents = {
        $metadata: deserializeMetadata(output),
    };
    await collectBody(output.body, context);
    return Promise.resolve(contents);
};
exports.deserializeAws_restJson1PutDedicatedIpWarmupAttributesCommand = deserializeAws_restJson1PutDedicatedIpWarmupAttributesCommand;
const deserializeAws_restJson1PutDedicatedIpWarmupAttributesCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "BadRequestException":
        case "com.amazonaws.sesv2#BadRequestException":
            response = {
                ...(await deserializeAws_restJson1BadRequestExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "NotFoundException":
        case "com.amazonaws.sesv2#NotFoundException":
            response = {
                ...(await deserializeAws_restJson1NotFoundExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "TooManyRequestsException":
        case "com.amazonaws.sesv2#TooManyRequestsException":
            response = {
                ...(await deserializeAws_restJson1TooManyRequestsExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        default:
            const parsedBody = parsedOutput.body;
            errorCode = parsedBody.code || parsedBody.Code || errorCode;
            response = {
                ...parsedBody,
                name: `${errorCode}`,
                message: parsedBody.message || parsedBody.Message || errorCode,
                $fault: "client",
                $metadata: deserializeMetadata(output),
            };
    }
    const message = response.message || response.Message || errorCode;
    response.message = message;
    delete response.Message;
    return Promise.reject(Object.assign(new Error(message), response));
};
const deserializeAws_restJson1PutDeliverabilityDashboardOptionCommand = async (output, context) => {
    if (output.statusCode !== 200 && output.statusCode >= 300) {
        return deserializeAws_restJson1PutDeliverabilityDashboardOptionCommandError(output, context);
    }
    const contents = {
        $metadata: deserializeMetadata(output),
    };
    await collectBody(output.body, context);
    return Promise.resolve(contents);
};
exports.deserializeAws_restJson1PutDeliverabilityDashboardOptionCommand = deserializeAws_restJson1PutDeliverabilityDashboardOptionCommand;
const deserializeAws_restJson1PutDeliverabilityDashboardOptionCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "AlreadyExistsException":
        case "com.amazonaws.sesv2#AlreadyExistsException":
            response = {
                ...(await deserializeAws_restJson1AlreadyExistsExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "BadRequestException":
        case "com.amazonaws.sesv2#BadRequestException":
            response = {
                ...(await deserializeAws_restJson1BadRequestExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "LimitExceededException":
        case "com.amazonaws.sesv2#LimitExceededException":
            response = {
                ...(await deserializeAws_restJson1LimitExceededExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "NotFoundException":
        case "com.amazonaws.sesv2#NotFoundException":
            response = {
                ...(await deserializeAws_restJson1NotFoundExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "TooManyRequestsException":
        case "com.amazonaws.sesv2#TooManyRequestsException":
            response = {
                ...(await deserializeAws_restJson1TooManyRequestsExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        default:
            const parsedBody = parsedOutput.body;
            errorCode = parsedBody.code || parsedBody.Code || errorCode;
            response = {
                ...parsedBody,
                name: `${errorCode}`,
                message: parsedBody.message || parsedBody.Message || errorCode,
                $fault: "client",
                $metadata: deserializeMetadata(output),
            };
    }
    const message = response.message || response.Message || errorCode;
    response.message = message;
    delete response.Message;
    return Promise.reject(Object.assign(new Error(message), response));
};
const deserializeAws_restJson1PutEmailIdentityConfigurationSetAttributesCommand = async (output, context) => {
    if (output.statusCode !== 200 && output.statusCode >= 300) {
        return deserializeAws_restJson1PutEmailIdentityConfigurationSetAttributesCommandError(output, context);
    }
    const contents = {
        $metadata: deserializeMetadata(output),
    };
    await collectBody(output.body, context);
    return Promise.resolve(contents);
};
exports.deserializeAws_restJson1PutEmailIdentityConfigurationSetAttributesCommand = deserializeAws_restJson1PutEmailIdentityConfigurationSetAttributesCommand;
const deserializeAws_restJson1PutEmailIdentityConfigurationSetAttributesCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "BadRequestException":
        case "com.amazonaws.sesv2#BadRequestException":
            response = {
                ...(await deserializeAws_restJson1BadRequestExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "NotFoundException":
        case "com.amazonaws.sesv2#NotFoundException":
            response = {
                ...(await deserializeAws_restJson1NotFoundExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "TooManyRequestsException":
        case "com.amazonaws.sesv2#TooManyRequestsException":
            response = {
                ...(await deserializeAws_restJson1TooManyRequestsExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        default:
            const parsedBody = parsedOutput.body;
            errorCode = parsedBody.code || parsedBody.Code || errorCode;
            response = {
                ...parsedBody,
                name: `${errorCode}`,
                message: parsedBody.message || parsedBody.Message || errorCode,
                $fault: "client",
                $metadata: deserializeMetadata(output),
            };
    }
    const message = response.message || response.Message || errorCode;
    response.message = message;
    delete response.Message;
    return Promise.reject(Object.assign(new Error(message), response));
};
const deserializeAws_restJson1PutEmailIdentityDkimAttributesCommand = async (output, context) => {
    if (output.statusCode !== 200 && output.statusCode >= 300) {
        return deserializeAws_restJson1PutEmailIdentityDkimAttributesCommandError(output, context);
    }
    const contents = {
        $metadata: deserializeMetadata(output),
    };
    await collectBody(output.body, context);
    return Promise.resolve(contents);
};
exports.deserializeAws_restJson1PutEmailIdentityDkimAttributesCommand = deserializeAws_restJson1PutEmailIdentityDkimAttributesCommand;
const deserializeAws_restJson1PutEmailIdentityDkimAttributesCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "BadRequestException":
        case "com.amazonaws.sesv2#BadRequestException":
            response = {
                ...(await deserializeAws_restJson1BadRequestExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "NotFoundException":
        case "com.amazonaws.sesv2#NotFoundException":
            response = {
                ...(await deserializeAws_restJson1NotFoundExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "TooManyRequestsException":
        case "com.amazonaws.sesv2#TooManyRequestsException":
            response = {
                ...(await deserializeAws_restJson1TooManyRequestsExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        default:
            const parsedBody = parsedOutput.body;
            errorCode = parsedBody.code || parsedBody.Code || errorCode;
            response = {
                ...parsedBody,
                name: `${errorCode}`,
                message: parsedBody.message || parsedBody.Message || errorCode,
                $fault: "client",
                $metadata: deserializeMetadata(output),
            };
    }
    const message = response.message || response.Message || errorCode;
    response.message = message;
    delete response.Message;
    return Promise.reject(Object.assign(new Error(message), response));
};
const deserializeAws_restJson1PutEmailIdentityDkimSigningAttributesCommand = async (output, context) => {
    if (output.statusCode !== 200 && output.statusCode >= 300) {
        return deserializeAws_restJson1PutEmailIdentityDkimSigningAttributesCommandError(output, context);
    }
    const contents = {
        $metadata: deserializeMetadata(output),
        DkimStatus: undefined,
        DkimTokens: undefined,
    };
    const data = await parseBody(output.body, context);
    if (data.DkimStatus !== undefined && data.DkimStatus !== null) {
        contents.DkimStatus = data.DkimStatus;
    }
    if (data.DkimTokens !== undefined && data.DkimTokens !== null) {
        contents.DkimTokens = deserializeAws_restJson1DnsTokenList(data.DkimTokens, context);
    }
    return Promise.resolve(contents);
};
exports.deserializeAws_restJson1PutEmailIdentityDkimSigningAttributesCommand = deserializeAws_restJson1PutEmailIdentityDkimSigningAttributesCommand;
const deserializeAws_restJson1PutEmailIdentityDkimSigningAttributesCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "BadRequestException":
        case "com.amazonaws.sesv2#BadRequestException":
            response = {
                ...(await deserializeAws_restJson1BadRequestExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "NotFoundException":
        case "com.amazonaws.sesv2#NotFoundException":
            response = {
                ...(await deserializeAws_restJson1NotFoundExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "TooManyRequestsException":
        case "com.amazonaws.sesv2#TooManyRequestsException":
            response = {
                ...(await deserializeAws_restJson1TooManyRequestsExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        default:
            const parsedBody = parsedOutput.body;
            errorCode = parsedBody.code || parsedBody.Code || errorCode;
            response = {
                ...parsedBody,
                name: `${errorCode}`,
                message: parsedBody.message || parsedBody.Message || errorCode,
                $fault: "client",
                $metadata: deserializeMetadata(output),
            };
    }
    const message = response.message || response.Message || errorCode;
    response.message = message;
    delete response.Message;
    return Promise.reject(Object.assign(new Error(message), response));
};
const deserializeAws_restJson1PutEmailIdentityFeedbackAttributesCommand = async (output, context) => {
    if (output.statusCode !== 200 && output.statusCode >= 300) {
        return deserializeAws_restJson1PutEmailIdentityFeedbackAttributesCommandError(output, context);
    }
    const contents = {
        $metadata: deserializeMetadata(output),
    };
    await collectBody(output.body, context);
    return Promise.resolve(contents);
};
exports.deserializeAws_restJson1PutEmailIdentityFeedbackAttributesCommand = deserializeAws_restJson1PutEmailIdentityFeedbackAttributesCommand;
const deserializeAws_restJson1PutEmailIdentityFeedbackAttributesCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "BadRequestException":
        case "com.amazonaws.sesv2#BadRequestException":
            response = {
                ...(await deserializeAws_restJson1BadRequestExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "NotFoundException":
        case "com.amazonaws.sesv2#NotFoundException":
            response = {
                ...(await deserializeAws_restJson1NotFoundExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "TooManyRequestsException":
        case "com.amazonaws.sesv2#TooManyRequestsException":
            response = {
                ...(await deserializeAws_restJson1TooManyRequestsExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        default:
            const parsedBody = parsedOutput.body;
            errorCode = parsedBody.code || parsedBody.Code || errorCode;
            response = {
                ...parsedBody,
                name: `${errorCode}`,
                message: parsedBody.message || parsedBody.Message || errorCode,
                $fault: "client",
                $metadata: deserializeMetadata(output),
            };
    }
    const message = response.message || response.Message || errorCode;
    response.message = message;
    delete response.Message;
    return Promise.reject(Object.assign(new Error(message), response));
};
const deserializeAws_restJson1PutEmailIdentityMailFromAttributesCommand = async (output, context) => {
    if (output.statusCode !== 200 && output.statusCode >= 300) {
        return deserializeAws_restJson1PutEmailIdentityMailFromAttributesCommandError(output, context);
    }
    const contents = {
        $metadata: deserializeMetadata(output),
    };
    await collectBody(output.body, context);
    return Promise.resolve(contents);
};
exports.deserializeAws_restJson1PutEmailIdentityMailFromAttributesCommand = deserializeAws_restJson1PutEmailIdentityMailFromAttributesCommand;
const deserializeAws_restJson1PutEmailIdentityMailFromAttributesCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "BadRequestException":
        case "com.amazonaws.sesv2#BadRequestException":
            response = {
                ...(await deserializeAws_restJson1BadRequestExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "NotFoundException":
        case "com.amazonaws.sesv2#NotFoundException":
            response = {
                ...(await deserializeAws_restJson1NotFoundExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "TooManyRequestsException":
        case "com.amazonaws.sesv2#TooManyRequestsException":
            response = {
                ...(await deserializeAws_restJson1TooManyRequestsExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        default:
            const parsedBody = parsedOutput.body;
            errorCode = parsedBody.code || parsedBody.Code || errorCode;
            response = {
                ...parsedBody,
                name: `${errorCode}`,
                message: parsedBody.message || parsedBody.Message || errorCode,
                $fault: "client",
                $metadata: deserializeMetadata(output),
            };
    }
    const message = response.message || response.Message || errorCode;
    response.message = message;
    delete response.Message;
    return Promise.reject(Object.assign(new Error(message), response));
};
const deserializeAws_restJson1PutSuppressedDestinationCommand = async (output, context) => {
    if (output.statusCode !== 200 && output.statusCode >= 300) {
        return deserializeAws_restJson1PutSuppressedDestinationCommandError(output, context);
    }
    const contents = {
        $metadata: deserializeMetadata(output),
    };
    await collectBody(output.body, context);
    return Promise.resolve(contents);
};
exports.deserializeAws_restJson1PutSuppressedDestinationCommand = deserializeAws_restJson1PutSuppressedDestinationCommand;
const deserializeAws_restJson1PutSuppressedDestinationCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "BadRequestException":
        case "com.amazonaws.sesv2#BadRequestException":
            response = {
                ...(await deserializeAws_restJson1BadRequestExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "TooManyRequestsException":
        case "com.amazonaws.sesv2#TooManyRequestsException":
            response = {
                ...(await deserializeAws_restJson1TooManyRequestsExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        default:
            const parsedBody = parsedOutput.body;
            errorCode = parsedBody.code || parsedBody.Code || errorCode;
            response = {
                ...parsedBody,
                name: `${errorCode}`,
                message: parsedBody.message || parsedBody.Message || errorCode,
                $fault: "client",
                $metadata: deserializeMetadata(output),
            };
    }
    const message = response.message || response.Message || errorCode;
    response.message = message;
    delete response.Message;
    return Promise.reject(Object.assign(new Error(message), response));
};
const deserializeAws_restJson1SendBulkEmailCommand = async (output, context) => {
    if (output.statusCode !== 200 && output.statusCode >= 300) {
        return deserializeAws_restJson1SendBulkEmailCommandError(output, context);
    }
    const contents = {
        $metadata: deserializeMetadata(output),
        BulkEmailEntryResults: undefined,
    };
    const data = await parseBody(output.body, context);
    if (data.BulkEmailEntryResults !== undefined && data.BulkEmailEntryResults !== null) {
        contents.BulkEmailEntryResults = deserializeAws_restJson1BulkEmailEntryResultList(data.BulkEmailEntryResults, context);
    }
    return Promise.resolve(contents);
};
exports.deserializeAws_restJson1SendBulkEmailCommand = deserializeAws_restJson1SendBulkEmailCommand;
const deserializeAws_restJson1SendBulkEmailCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "AccountSuspendedException":
        case "com.amazonaws.sesv2#AccountSuspendedException":
            response = {
                ...(await deserializeAws_restJson1AccountSuspendedExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "BadRequestException":
        case "com.amazonaws.sesv2#BadRequestException":
            response = {
                ...(await deserializeAws_restJson1BadRequestExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "LimitExceededException":
        case "com.amazonaws.sesv2#LimitExceededException":
            response = {
                ...(await deserializeAws_restJson1LimitExceededExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "MailFromDomainNotVerifiedException":
        case "com.amazonaws.sesv2#MailFromDomainNotVerifiedException":
            response = {
                ...(await deserializeAws_restJson1MailFromDomainNotVerifiedExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "MessageRejected":
        case "com.amazonaws.sesv2#MessageRejected":
            response = {
                ...(await deserializeAws_restJson1MessageRejectedResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "NotFoundException":
        case "com.amazonaws.sesv2#NotFoundException":
            response = {
                ...(await deserializeAws_restJson1NotFoundExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "SendingPausedException":
        case "com.amazonaws.sesv2#SendingPausedException":
            response = {
                ...(await deserializeAws_restJson1SendingPausedExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "TooManyRequestsException":
        case "com.amazonaws.sesv2#TooManyRequestsException":
            response = {
                ...(await deserializeAws_restJson1TooManyRequestsExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        default:
            const parsedBody = parsedOutput.body;
            errorCode = parsedBody.code || parsedBody.Code || errorCode;
            response = {
                ...parsedBody,
                name: `${errorCode}`,
                message: parsedBody.message || parsedBody.Message || errorCode,
                $fault: "client",
                $metadata: deserializeMetadata(output),
            };
    }
    const message = response.message || response.Message || errorCode;
    response.message = message;
    delete response.Message;
    return Promise.reject(Object.assign(new Error(message), response));
};
const deserializeAws_restJson1SendCustomVerificationEmailCommand = async (output, context) => {
    if (output.statusCode !== 200 && output.statusCode >= 300) {
        return deserializeAws_restJson1SendCustomVerificationEmailCommandError(output, context);
    }
    const contents = {
        $metadata: deserializeMetadata(output),
        MessageId: undefined,
    };
    const data = await parseBody(output.body, context);
    if (data.MessageId !== undefined && data.MessageId !== null) {
        contents.MessageId = data.MessageId;
    }
    return Promise.resolve(contents);
};
exports.deserializeAws_restJson1SendCustomVerificationEmailCommand = deserializeAws_restJson1SendCustomVerificationEmailCommand;
const deserializeAws_restJson1SendCustomVerificationEmailCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "BadRequestException":
        case "com.amazonaws.sesv2#BadRequestException":
            response = {
                ...(await deserializeAws_restJson1BadRequestExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "LimitExceededException":
        case "com.amazonaws.sesv2#LimitExceededException":
            response = {
                ...(await deserializeAws_restJson1LimitExceededExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "MailFromDomainNotVerifiedException":
        case "com.amazonaws.sesv2#MailFromDomainNotVerifiedException":
            response = {
                ...(await deserializeAws_restJson1MailFromDomainNotVerifiedExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "MessageRejected":
        case "com.amazonaws.sesv2#MessageRejected":
            response = {
                ...(await deserializeAws_restJson1MessageRejectedResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "NotFoundException":
        case "com.amazonaws.sesv2#NotFoundException":
            response = {
                ...(await deserializeAws_restJson1NotFoundExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "SendingPausedException":
        case "com.amazonaws.sesv2#SendingPausedException":
            response = {
                ...(await deserializeAws_restJson1SendingPausedExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "TooManyRequestsException":
        case "com.amazonaws.sesv2#TooManyRequestsException":
            response = {
                ...(await deserializeAws_restJson1TooManyRequestsExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        default:
            const parsedBody = parsedOutput.body;
            errorCode = parsedBody.code || parsedBody.Code || errorCode;
            response = {
                ...parsedBody,
                name: `${errorCode}`,
                message: parsedBody.message || parsedBody.Message || errorCode,
                $fault: "client",
                $metadata: deserializeMetadata(output),
            };
    }
    const message = response.message || response.Message || errorCode;
    response.message = message;
    delete response.Message;
    return Promise.reject(Object.assign(new Error(message), response));
};
const deserializeAws_restJson1SendEmailCommand = async (output, context) => {
    if (output.statusCode !== 200 && output.statusCode >= 300) {
        return deserializeAws_restJson1SendEmailCommandError(output, context);
    }
    const contents = {
        $metadata: deserializeMetadata(output),
        MessageId: undefined,
    };
    const data = await parseBody(output.body, context);
    if (data.MessageId !== undefined && data.MessageId !== null) {
        contents.MessageId = data.MessageId;
    }
    return Promise.resolve(contents);
};
exports.deserializeAws_restJson1SendEmailCommand = deserializeAws_restJson1SendEmailCommand;
const deserializeAws_restJson1SendEmailCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "AccountSuspendedException":
        case "com.amazonaws.sesv2#AccountSuspendedException":
            response = {
                ...(await deserializeAws_restJson1AccountSuspendedExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "BadRequestException":
        case "com.amazonaws.sesv2#BadRequestException":
            response = {
                ...(await deserializeAws_restJson1BadRequestExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "LimitExceededException":
        case "com.amazonaws.sesv2#LimitExceededException":
            response = {
                ...(await deserializeAws_restJson1LimitExceededExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "MailFromDomainNotVerifiedException":
        case "com.amazonaws.sesv2#MailFromDomainNotVerifiedException":
            response = {
                ...(await deserializeAws_restJson1MailFromDomainNotVerifiedExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "MessageRejected":
        case "com.amazonaws.sesv2#MessageRejected":
            response = {
                ...(await deserializeAws_restJson1MessageRejectedResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "NotFoundException":
        case "com.amazonaws.sesv2#NotFoundException":
            response = {
                ...(await deserializeAws_restJson1NotFoundExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "SendingPausedException":
        case "com.amazonaws.sesv2#SendingPausedException":
            response = {
                ...(await deserializeAws_restJson1SendingPausedExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "TooManyRequestsException":
        case "com.amazonaws.sesv2#TooManyRequestsException":
            response = {
                ...(await deserializeAws_restJson1TooManyRequestsExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        default:
            const parsedBody = parsedOutput.body;
            errorCode = parsedBody.code || parsedBody.Code || errorCode;
            response = {
                ...parsedBody,
                name: `${errorCode}`,
                message: parsedBody.message || parsedBody.Message || errorCode,
                $fault: "client",
                $metadata: deserializeMetadata(output),
            };
    }
    const message = response.message || response.Message || errorCode;
    response.message = message;
    delete response.Message;
    return Promise.reject(Object.assign(new Error(message), response));
};
const deserializeAws_restJson1TagResourceCommand = async (output, context) => {
    if (output.statusCode !== 200 && output.statusCode >= 300) {
        return deserializeAws_restJson1TagResourceCommandError(output, context);
    }
    const contents = {
        $metadata: deserializeMetadata(output),
    };
    await collectBody(output.body, context);
    return Promise.resolve(contents);
};
exports.deserializeAws_restJson1TagResourceCommand = deserializeAws_restJson1TagResourceCommand;
const deserializeAws_restJson1TagResourceCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "BadRequestException":
        case "com.amazonaws.sesv2#BadRequestException":
            response = {
                ...(await deserializeAws_restJson1BadRequestExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ConcurrentModificationException":
        case "com.amazonaws.sesv2#ConcurrentModificationException":
            response = {
                ...(await deserializeAws_restJson1ConcurrentModificationExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "NotFoundException":
        case "com.amazonaws.sesv2#NotFoundException":
            response = {
                ...(await deserializeAws_restJson1NotFoundExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "TooManyRequestsException":
        case "com.amazonaws.sesv2#TooManyRequestsException":
            response = {
                ...(await deserializeAws_restJson1TooManyRequestsExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        default:
            const parsedBody = parsedOutput.body;
            errorCode = parsedBody.code || parsedBody.Code || errorCode;
            response = {
                ...parsedBody,
                name: `${errorCode}`,
                message: parsedBody.message || parsedBody.Message || errorCode,
                $fault: "client",
                $metadata: deserializeMetadata(output),
            };
    }
    const message = response.message || response.Message || errorCode;
    response.message = message;
    delete response.Message;
    return Promise.reject(Object.assign(new Error(message), response));
};
const deserializeAws_restJson1TestRenderEmailTemplateCommand = async (output, context) => {
    if (output.statusCode !== 200 && output.statusCode >= 300) {
        return deserializeAws_restJson1TestRenderEmailTemplateCommandError(output, context);
    }
    const contents = {
        $metadata: deserializeMetadata(output),
        RenderedTemplate: undefined,
    };
    const data = await parseBody(output.body, context);
    if (data.RenderedTemplate !== undefined && data.RenderedTemplate !== null) {
        contents.RenderedTemplate = data.RenderedTemplate;
    }
    return Promise.resolve(contents);
};
exports.deserializeAws_restJson1TestRenderEmailTemplateCommand = deserializeAws_restJson1TestRenderEmailTemplateCommand;
const deserializeAws_restJson1TestRenderEmailTemplateCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "BadRequestException":
        case "com.amazonaws.sesv2#BadRequestException":
            response = {
                ...(await deserializeAws_restJson1BadRequestExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "NotFoundException":
        case "com.amazonaws.sesv2#NotFoundException":
            response = {
                ...(await deserializeAws_restJson1NotFoundExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "TooManyRequestsException":
        case "com.amazonaws.sesv2#TooManyRequestsException":
            response = {
                ...(await deserializeAws_restJson1TooManyRequestsExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        default:
            const parsedBody = parsedOutput.body;
            errorCode = parsedBody.code || parsedBody.Code || errorCode;
            response = {
                ...parsedBody,
                name: `${errorCode}`,
                message: parsedBody.message || parsedBody.Message || errorCode,
                $fault: "client",
                $metadata: deserializeMetadata(output),
            };
    }
    const message = response.message || response.Message || errorCode;
    response.message = message;
    delete response.Message;
    return Promise.reject(Object.assign(new Error(message), response));
};
const deserializeAws_restJson1UntagResourceCommand = async (output, context) => {
    if (output.statusCode !== 200 && output.statusCode >= 300) {
        return deserializeAws_restJson1UntagResourceCommandError(output, context);
    }
    const contents = {
        $metadata: deserializeMetadata(output),
    };
    await collectBody(output.body, context);
    return Promise.resolve(contents);
};
exports.deserializeAws_restJson1UntagResourceCommand = deserializeAws_restJson1UntagResourceCommand;
const deserializeAws_restJson1UntagResourceCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "BadRequestException":
        case "com.amazonaws.sesv2#BadRequestException":
            response = {
                ...(await deserializeAws_restJson1BadRequestExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ConcurrentModificationException":
        case "com.amazonaws.sesv2#ConcurrentModificationException":
            response = {
                ...(await deserializeAws_restJson1ConcurrentModificationExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "NotFoundException":
        case "com.amazonaws.sesv2#NotFoundException":
            response = {
                ...(await deserializeAws_restJson1NotFoundExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "TooManyRequestsException":
        case "com.amazonaws.sesv2#TooManyRequestsException":
            response = {
                ...(await deserializeAws_restJson1TooManyRequestsExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        default:
            const parsedBody = parsedOutput.body;
            errorCode = parsedBody.code || parsedBody.Code || errorCode;
            response = {
                ...parsedBody,
                name: `${errorCode}`,
                message: parsedBody.message || parsedBody.Message || errorCode,
                $fault: "client",
                $metadata: deserializeMetadata(output),
            };
    }
    const message = response.message || response.Message || errorCode;
    response.message = message;
    delete response.Message;
    return Promise.reject(Object.assign(new Error(message), response));
};
const deserializeAws_restJson1UpdateConfigurationSetEventDestinationCommand = async (output, context) => {
    if (output.statusCode !== 200 && output.statusCode >= 300) {
        return deserializeAws_restJson1UpdateConfigurationSetEventDestinationCommandError(output, context);
    }
    const contents = {
        $metadata: deserializeMetadata(output),
    };
    await collectBody(output.body, context);
    return Promise.resolve(contents);
};
exports.deserializeAws_restJson1UpdateConfigurationSetEventDestinationCommand = deserializeAws_restJson1UpdateConfigurationSetEventDestinationCommand;
const deserializeAws_restJson1UpdateConfigurationSetEventDestinationCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "BadRequestException":
        case "com.amazonaws.sesv2#BadRequestException":
            response = {
                ...(await deserializeAws_restJson1BadRequestExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "NotFoundException":
        case "com.amazonaws.sesv2#NotFoundException":
            response = {
                ...(await deserializeAws_restJson1NotFoundExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "TooManyRequestsException":
        case "com.amazonaws.sesv2#TooManyRequestsException":
            response = {
                ...(await deserializeAws_restJson1TooManyRequestsExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        default:
            const parsedBody = parsedOutput.body;
            errorCode = parsedBody.code || parsedBody.Code || errorCode;
            response = {
                ...parsedBody,
                name: `${errorCode}`,
                message: parsedBody.message || parsedBody.Message || errorCode,
                $fault: "client",
                $metadata: deserializeMetadata(output),
            };
    }
    const message = response.message || response.Message || errorCode;
    response.message = message;
    delete response.Message;
    return Promise.reject(Object.assign(new Error(message), response));
};
const deserializeAws_restJson1UpdateContactCommand = async (output, context) => {
    if (output.statusCode !== 200 && output.statusCode >= 300) {
        return deserializeAws_restJson1UpdateContactCommandError(output, context);
    }
    const contents = {
        $metadata: deserializeMetadata(output),
    };
    await collectBody(output.body, context);
    return Promise.resolve(contents);
};
exports.deserializeAws_restJson1UpdateContactCommand = deserializeAws_restJson1UpdateContactCommand;
const deserializeAws_restJson1UpdateContactCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "BadRequestException":
        case "com.amazonaws.sesv2#BadRequestException":
            response = {
                ...(await deserializeAws_restJson1BadRequestExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ConcurrentModificationException":
        case "com.amazonaws.sesv2#ConcurrentModificationException":
            response = {
                ...(await deserializeAws_restJson1ConcurrentModificationExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "NotFoundException":
        case "com.amazonaws.sesv2#NotFoundException":
            response = {
                ...(await deserializeAws_restJson1NotFoundExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "TooManyRequestsException":
        case "com.amazonaws.sesv2#TooManyRequestsException":
            response = {
                ...(await deserializeAws_restJson1TooManyRequestsExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        default:
            const parsedBody = parsedOutput.body;
            errorCode = parsedBody.code || parsedBody.Code || errorCode;
            response = {
                ...parsedBody,
                name: `${errorCode}`,
                message: parsedBody.message || parsedBody.Message || errorCode,
                $fault: "client",
                $metadata: deserializeMetadata(output),
            };
    }
    const message = response.message || response.Message || errorCode;
    response.message = message;
    delete response.Message;
    return Promise.reject(Object.assign(new Error(message), response));
};
const deserializeAws_restJson1UpdateContactListCommand = async (output, context) => {
    if (output.statusCode !== 200 && output.statusCode >= 300) {
        return deserializeAws_restJson1UpdateContactListCommandError(output, context);
    }
    const contents = {
        $metadata: deserializeMetadata(output),
    };
    await collectBody(output.body, context);
    return Promise.resolve(contents);
};
exports.deserializeAws_restJson1UpdateContactListCommand = deserializeAws_restJson1UpdateContactListCommand;
const deserializeAws_restJson1UpdateContactListCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "BadRequestException":
        case "com.amazonaws.sesv2#BadRequestException":
            response = {
                ...(await deserializeAws_restJson1BadRequestExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ConcurrentModificationException":
        case "com.amazonaws.sesv2#ConcurrentModificationException":
            response = {
                ...(await deserializeAws_restJson1ConcurrentModificationExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "NotFoundException":
        case "com.amazonaws.sesv2#NotFoundException":
            response = {
                ...(await deserializeAws_restJson1NotFoundExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "TooManyRequestsException":
        case "com.amazonaws.sesv2#TooManyRequestsException":
            response = {
                ...(await deserializeAws_restJson1TooManyRequestsExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        default:
            const parsedBody = parsedOutput.body;
            errorCode = parsedBody.code || parsedBody.Code || errorCode;
            response = {
                ...parsedBody,
                name: `${errorCode}`,
                message: parsedBody.message || parsedBody.Message || errorCode,
                $fault: "client",
                $metadata: deserializeMetadata(output),
            };
    }
    const message = response.message || response.Message || errorCode;
    response.message = message;
    delete response.Message;
    return Promise.reject(Object.assign(new Error(message), response));
};
const deserializeAws_restJson1UpdateCustomVerificationEmailTemplateCommand = async (output, context) => {
    if (output.statusCode !== 200 && output.statusCode >= 300) {
        return deserializeAws_restJson1UpdateCustomVerificationEmailTemplateCommandError(output, context);
    }
    const contents = {
        $metadata: deserializeMetadata(output),
    };
    await collectBody(output.body, context);
    return Promise.resolve(contents);
};
exports.deserializeAws_restJson1UpdateCustomVerificationEmailTemplateCommand = deserializeAws_restJson1UpdateCustomVerificationEmailTemplateCommand;
const deserializeAws_restJson1UpdateCustomVerificationEmailTemplateCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "BadRequestException":
        case "com.amazonaws.sesv2#BadRequestException":
            response = {
                ...(await deserializeAws_restJson1BadRequestExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "NotFoundException":
        case "com.amazonaws.sesv2#NotFoundException":
            response = {
                ...(await deserializeAws_restJson1NotFoundExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "TooManyRequestsException":
        case "com.amazonaws.sesv2#TooManyRequestsException":
            response = {
                ...(await deserializeAws_restJson1TooManyRequestsExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        default:
            const parsedBody = parsedOutput.body;
            errorCode = parsedBody.code || parsedBody.Code || errorCode;
            response = {
                ...parsedBody,
                name: `${errorCode}`,
                message: parsedBody.message || parsedBody.Message || errorCode,
                $fault: "client",
                $metadata: deserializeMetadata(output),
            };
    }
    const message = response.message || response.Message || errorCode;
    response.message = message;
    delete response.Message;
    return Promise.reject(Object.assign(new Error(message), response));
};
const deserializeAws_restJson1UpdateEmailIdentityPolicyCommand = async (output, context) => {
    if (output.statusCode !== 200 && output.statusCode >= 300) {
        return deserializeAws_restJson1UpdateEmailIdentityPolicyCommandError(output, context);
    }
    const contents = {
        $metadata: deserializeMetadata(output),
    };
    await collectBody(output.body, context);
    return Promise.resolve(contents);
};
exports.deserializeAws_restJson1UpdateEmailIdentityPolicyCommand = deserializeAws_restJson1UpdateEmailIdentityPolicyCommand;
const deserializeAws_restJson1UpdateEmailIdentityPolicyCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "BadRequestException":
        case "com.amazonaws.sesv2#BadRequestException":
            response = {
                ...(await deserializeAws_restJson1BadRequestExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "NotFoundException":
        case "com.amazonaws.sesv2#NotFoundException":
            response = {
                ...(await deserializeAws_restJson1NotFoundExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "TooManyRequestsException":
        case "com.amazonaws.sesv2#TooManyRequestsException":
            response = {
                ...(await deserializeAws_restJson1TooManyRequestsExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        default:
            const parsedBody = parsedOutput.body;
            errorCode = parsedBody.code || parsedBody.Code || errorCode;
            response = {
                ...parsedBody,
                name: `${errorCode}`,
                message: parsedBody.message || parsedBody.Message || errorCode,
                $fault: "client",
                $metadata: deserializeMetadata(output),
            };
    }
    const message = response.message || response.Message || errorCode;
    response.message = message;
    delete response.Message;
    return Promise.reject(Object.assign(new Error(message), response));
};
const deserializeAws_restJson1UpdateEmailTemplateCommand = async (output, context) => {
    if (output.statusCode !== 200 && output.statusCode >= 300) {
        return deserializeAws_restJson1UpdateEmailTemplateCommandError(output, context);
    }
    const contents = {
        $metadata: deserializeMetadata(output),
    };
    await collectBody(output.body, context);
    return Promise.resolve(contents);
};
exports.deserializeAws_restJson1UpdateEmailTemplateCommand = deserializeAws_restJson1UpdateEmailTemplateCommand;
const deserializeAws_restJson1UpdateEmailTemplateCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "BadRequestException":
        case "com.amazonaws.sesv2#BadRequestException":
            response = {
                ...(await deserializeAws_restJson1BadRequestExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "NotFoundException":
        case "com.amazonaws.sesv2#NotFoundException":
            response = {
                ...(await deserializeAws_restJson1NotFoundExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "TooManyRequestsException":
        case "com.amazonaws.sesv2#TooManyRequestsException":
            response = {
                ...(await deserializeAws_restJson1TooManyRequestsExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        default:
            const parsedBody = parsedOutput.body;
            errorCode = parsedBody.code || parsedBody.Code || errorCode;
            response = {
                ...parsedBody,
                name: `${errorCode}`,
                message: parsedBody.message || parsedBody.Message || errorCode,
                $fault: "client",
                $metadata: deserializeMetadata(output),
            };
    }
    const message = response.message || response.Message || errorCode;
    response.message = message;
    delete response.Message;
    return Promise.reject(Object.assign(new Error(message), response));
};
const deserializeAws_restJson1AccountSuspendedExceptionResponse = async (parsedOutput, context) => {
    const contents = {
        name: "AccountSuspendedException",
        $fault: "client",
        $metadata: deserializeMetadata(parsedOutput),
        message: undefined,
    };
    const data = parsedOutput.body;
    if (data.message !== undefined && data.message !== null) {
        contents.message = data.message;
    }
    return contents;
};
const deserializeAws_restJson1AlreadyExistsExceptionResponse = async (parsedOutput, context) => {
    const contents = {
        name: "AlreadyExistsException",
        $fault: "client",
        $metadata: deserializeMetadata(parsedOutput),
        message: undefined,
    };
    const data = parsedOutput.body;
    if (data.message !== undefined && data.message !== null) {
        contents.message = data.message;
    }
    return contents;
};
const deserializeAws_restJson1BadRequestExceptionResponse = async (parsedOutput, context) => {
    const contents = {
        name: "BadRequestException",
        $fault: "client",
        $metadata: deserializeMetadata(parsedOutput),
        message: undefined,
    };
    const data = parsedOutput.body;
    if (data.message !== undefined && data.message !== null) {
        contents.message = data.message;
    }
    return contents;
};
const deserializeAws_restJson1ConcurrentModificationExceptionResponse = async (parsedOutput, context) => {
    const contents = {
        name: "ConcurrentModificationException",
        $fault: "server",
        $metadata: deserializeMetadata(parsedOutput),
        message: undefined,
    };
    const data = parsedOutput.body;
    if (data.message !== undefined && data.message !== null) {
        contents.message = data.message;
    }
    return contents;
};
const deserializeAws_restJson1ConflictExceptionResponse = async (parsedOutput, context) => {
    const contents = {
        name: "ConflictException",
        $fault: "client",
        $metadata: deserializeMetadata(parsedOutput),
        message: undefined,
    };
    const data = parsedOutput.body;
    if (data.message !== undefined && data.message !== null) {
        contents.message = data.message;
    }
    return contents;
};
const deserializeAws_restJson1InvalidNextTokenExceptionResponse = async (parsedOutput, context) => {
    const contents = {
        name: "InvalidNextTokenException",
        $fault: "client",
        $metadata: deserializeMetadata(parsedOutput),
        message: undefined,
    };
    const data = parsedOutput.body;
    if (data.message !== undefined && data.message !== null) {
        contents.message = data.message;
    }
    return contents;
};
const deserializeAws_restJson1LimitExceededExceptionResponse = async (parsedOutput, context) => {
    const contents = {
        name: "LimitExceededException",
        $fault: "client",
        $metadata: deserializeMetadata(parsedOutput),
        message: undefined,
    };
    const data = parsedOutput.body;
    if (data.message !== undefined && data.message !== null) {
        contents.message = data.message;
    }
    return contents;
};
const deserializeAws_restJson1MailFromDomainNotVerifiedExceptionResponse = async (parsedOutput, context) => {
    const contents = {
        name: "MailFromDomainNotVerifiedException",
        $fault: "client",
        $metadata: deserializeMetadata(parsedOutput),
        message: undefined,
    };
    const data = parsedOutput.body;
    if (data.message !== undefined && data.message !== null) {
        contents.message = data.message;
    }
    return contents;
};
const deserializeAws_restJson1MessageRejectedResponse = async (parsedOutput, context) => {
    const contents = {
        name: "MessageRejected",
        $fault: "client",
        $metadata: deserializeMetadata(parsedOutput),
        message: undefined,
    };
    const data = parsedOutput.body;
    if (data.message !== undefined && data.message !== null) {
        contents.message = data.message;
    }
    return contents;
};
const deserializeAws_restJson1NotFoundExceptionResponse = async (parsedOutput, context) => {
    const contents = {
        name: "NotFoundException",
        $fault: "client",
        $metadata: deserializeMetadata(parsedOutput),
        message: undefined,
    };
    const data = parsedOutput.body;
    if (data.message !== undefined && data.message !== null) {
        contents.message = data.message;
    }
    return contents;
};
const deserializeAws_restJson1SendingPausedExceptionResponse = async (parsedOutput, context) => {
    const contents = {
        name: "SendingPausedException",
        $fault: "client",
        $metadata: deserializeMetadata(parsedOutput),
        message: undefined,
    };
    const data = parsedOutput.body;
    if (data.message !== undefined && data.message !== null) {
        contents.message = data.message;
    }
    return contents;
};
const deserializeAws_restJson1TooManyRequestsExceptionResponse = async (parsedOutput, context) => {
    const contents = {
        name: "TooManyRequestsException",
        $fault: "client",
        $metadata: deserializeMetadata(parsedOutput),
        message: undefined,
    };
    const data = parsedOutput.body;
    if (data.message !== undefined && data.message !== null) {
        contents.message = data.message;
    }
    return contents;
};
const serializeAws_restJson1AdditionalContactEmailAddresses = (input, context) => {
    return input
        .filter((e) => e != null)
        .map((entry) => {
        if (entry === null) {
            return null;
        }
        return entry;
    });
};
const serializeAws_restJson1Body = (input, context) => {
    return {
        ...(input.Html !== undefined &&
            input.Html !== null && { Html: serializeAws_restJson1Content(input.Html, context) }),
        ...(input.Text !== undefined &&
            input.Text !== null && { Text: serializeAws_restJson1Content(input.Text, context) }),
    };
};
const serializeAws_restJson1BulkEmailContent = (input, context) => {
    return {
        ...(input.Template !== undefined &&
            input.Template !== null && { Template: serializeAws_restJson1Template(input.Template, context) }),
    };
};
const serializeAws_restJson1BulkEmailEntry = (input, context) => {
    return {
        ...(input.Destination !== undefined &&
            input.Destination !== null && { Destination: serializeAws_restJson1Destination(input.Destination, context) }),
        ...(input.ReplacementEmailContent !== undefined &&
            input.ReplacementEmailContent !== null && {
            ReplacementEmailContent: serializeAws_restJson1ReplacementEmailContent(input.ReplacementEmailContent, context),
        }),
        ...(input.ReplacementTags !== undefined &&
            input.ReplacementTags !== null && {
            ReplacementTags: serializeAws_restJson1MessageTagList(input.ReplacementTags, context),
        }),
    };
};
const serializeAws_restJson1BulkEmailEntryList = (input, context) => {
    return input
        .filter((e) => e != null)
        .map((entry) => {
        if (entry === null) {
            return null;
        }
        return serializeAws_restJson1BulkEmailEntry(entry, context);
    });
};
const serializeAws_restJson1CloudWatchDestination = (input, context) => {
    return {
        ...(input.DimensionConfigurations !== undefined &&
            input.DimensionConfigurations !== null && {
            DimensionConfigurations: serializeAws_restJson1CloudWatchDimensionConfigurations(input.DimensionConfigurations, context),
        }),
    };
};
const serializeAws_restJson1CloudWatchDimensionConfiguration = (input, context) => {
    return {
        ...(input.DefaultDimensionValue !== undefined &&
            input.DefaultDimensionValue !== null && { DefaultDimensionValue: input.DefaultDimensionValue }),
        ...(input.DimensionName !== undefined && input.DimensionName !== null && { DimensionName: input.DimensionName }),
        ...(input.DimensionValueSource !== undefined &&
            input.DimensionValueSource !== null && { DimensionValueSource: input.DimensionValueSource }),
    };
};
const serializeAws_restJson1CloudWatchDimensionConfigurations = (input, context) => {
    return input
        .filter((e) => e != null)
        .map((entry) => {
        if (entry === null) {
            return null;
        }
        return serializeAws_restJson1CloudWatchDimensionConfiguration(entry, context);
    });
};
const serializeAws_restJson1ContactListDestination = (input, context) => {
    return {
        ...(input.ContactListImportAction !== undefined &&
            input.ContactListImportAction !== null && { ContactListImportAction: input.ContactListImportAction }),
        ...(input.ContactListName !== undefined &&
            input.ContactListName !== null && { ContactListName: input.ContactListName }),
    };
};
const serializeAws_restJson1Content = (input, context) => {
    return {
        ...(input.Charset !== undefined && input.Charset !== null && { Charset: input.Charset }),
        ...(input.Data !== undefined && input.Data !== null && { Data: input.Data }),
    };
};
const serializeAws_restJson1DeliveryOptions = (input, context) => {
    return {
        ...(input.SendingPoolName !== undefined &&
            input.SendingPoolName !== null && { SendingPoolName: input.SendingPoolName }),
        ...(input.TlsPolicy !== undefined && input.TlsPolicy !== null && { TlsPolicy: input.TlsPolicy }),
    };
};
const serializeAws_restJson1Destination = (input, context) => {
    return {
        ...(input.BccAddresses !== undefined &&
            input.BccAddresses !== null && {
            BccAddresses: serializeAws_restJson1EmailAddressList(input.BccAddresses, context),
        }),
        ...(input.CcAddresses !== undefined &&
            input.CcAddresses !== null && {
            CcAddresses: serializeAws_restJson1EmailAddressList(input.CcAddresses, context),
        }),
        ...(input.ToAddresses !== undefined &&
            input.ToAddresses !== null && {
            ToAddresses: serializeAws_restJson1EmailAddressList(input.ToAddresses, context),
        }),
    };
};
const serializeAws_restJson1DkimSigningAttributes = (input, context) => {
    return {
        ...(input.DomainSigningPrivateKey !== undefined &&
            input.DomainSigningPrivateKey !== null && { DomainSigningPrivateKey: input.DomainSigningPrivateKey }),
        ...(input.DomainSigningSelector !== undefined &&
            input.DomainSigningSelector !== null && { DomainSigningSelector: input.DomainSigningSelector }),
    };
};
const serializeAws_restJson1DomainDeliverabilityTrackingOption = (input, context) => {
    return {
        ...(input.Domain !== undefined && input.Domain !== null && { Domain: input.Domain }),
        ...(input.InboxPlacementTrackingOption !== undefined &&
            input.InboxPlacementTrackingOption !== null && {
            InboxPlacementTrackingOption: serializeAws_restJson1InboxPlacementTrackingOption(input.InboxPlacementTrackingOption, context),
        }),
        ...(input.SubscriptionStartDate !== undefined &&
            input.SubscriptionStartDate !== null && {
            SubscriptionStartDate: Math.round(input.SubscriptionStartDate.getTime() / 1000),
        }),
    };
};
const serializeAws_restJson1DomainDeliverabilityTrackingOptions = (input, context) => {
    return input
        .filter((e) => e != null)
        .map((entry) => {
        if (entry === null) {
            return null;
        }
        return serializeAws_restJson1DomainDeliverabilityTrackingOption(entry, context);
    });
};
const serializeAws_restJson1EmailAddressList = (input, context) => {
    return input
        .filter((e) => e != null)
        .map((entry) => {
        if (entry === null) {
            return null;
        }
        return entry;
    });
};
const serializeAws_restJson1EmailContent = (input, context) => {
    return {
        ...(input.Raw !== undefined && input.Raw !== null && { Raw: serializeAws_restJson1RawMessage(input.Raw, context) }),
        ...(input.Simple !== undefined &&
            input.Simple !== null && { Simple: serializeAws_restJson1Message(input.Simple, context) }),
        ...(input.Template !== undefined &&
            input.Template !== null && { Template: serializeAws_restJson1Template(input.Template, context) }),
    };
};
const serializeAws_restJson1EmailTemplateContent = (input, context) => {
    return {
        ...(input.Html !== undefined && input.Html !== null && { Html: input.Html }),
        ...(input.Subject !== undefined && input.Subject !== null && { Subject: input.Subject }),
        ...(input.Text !== undefined && input.Text !== null && { Text: input.Text }),
    };
};
const serializeAws_restJson1EventDestinationDefinition = (input, context) => {
    return {
        ...(input.CloudWatchDestination !== undefined &&
            input.CloudWatchDestination !== null && {
            CloudWatchDestination: serializeAws_restJson1CloudWatchDestination(input.CloudWatchDestination, context),
        }),
        ...(input.Enabled !== undefined && input.Enabled !== null && { Enabled: input.Enabled }),
        ...(input.KinesisFirehoseDestination !== undefined &&
            input.KinesisFirehoseDestination !== null && {
            KinesisFirehoseDestination: serializeAws_restJson1KinesisFirehoseDestination(input.KinesisFirehoseDestination, context),
        }),
        ...(input.MatchingEventTypes !== undefined &&
            input.MatchingEventTypes !== null && {
            MatchingEventTypes: serializeAws_restJson1EventTypes(input.MatchingEventTypes, context),
        }),
        ...(input.PinpointDestination !== undefined &&
            input.PinpointDestination !== null && {
            PinpointDestination: serializeAws_restJson1PinpointDestination(input.PinpointDestination, context),
        }),
        ...(input.SnsDestination !== undefined &&
            input.SnsDestination !== null && {
            SnsDestination: serializeAws_restJson1SnsDestination(input.SnsDestination, context),
        }),
    };
};
const serializeAws_restJson1EventTypes = (input, context) => {
    return input
        .filter((e) => e != null)
        .map((entry) => {
        if (entry === null) {
            return null;
        }
        return entry;
    });
};
const serializeAws_restJson1ImportDataSource = (input, context) => {
    return {
        ...(input.DataFormat !== undefined && input.DataFormat !== null && { DataFormat: input.DataFormat }),
        ...(input.S3Url !== undefined && input.S3Url !== null && { S3Url: input.S3Url }),
    };
};
const serializeAws_restJson1ImportDestination = (input, context) => {
    return {
        ...(input.ContactListDestination !== undefined &&
            input.ContactListDestination !== null && {
            ContactListDestination: serializeAws_restJson1ContactListDestination(input.ContactListDestination, context),
        }),
        ...(input.SuppressionListDestination !== undefined &&
            input.SuppressionListDestination !== null && {
            SuppressionListDestination: serializeAws_restJson1SuppressionListDestination(input.SuppressionListDestination, context),
        }),
    };
};
const serializeAws_restJson1InboxPlacementTrackingOption = (input, context) => {
    return {
        ...(input.Global !== undefined && input.Global !== null && { Global: input.Global }),
        ...(input.TrackedIsps !== undefined &&
            input.TrackedIsps !== null && { TrackedIsps: serializeAws_restJson1IspNameList(input.TrackedIsps, context) }),
    };
};
const serializeAws_restJson1IspNameList = (input, context) => {
    return input
        .filter((e) => e != null)
        .map((entry) => {
        if (entry === null) {
            return null;
        }
        return entry;
    });
};
const serializeAws_restJson1KinesisFirehoseDestination = (input, context) => {
    return {
        ...(input.DeliveryStreamArn !== undefined &&
            input.DeliveryStreamArn !== null && { DeliveryStreamArn: input.DeliveryStreamArn }),
        ...(input.IamRoleArn !== undefined && input.IamRoleArn !== null && { IamRoleArn: input.IamRoleArn }),
    };
};
const serializeAws_restJson1ListContactsFilter = (input, context) => {
    return {
        ...(input.FilteredStatus !== undefined &&
            input.FilteredStatus !== null && { FilteredStatus: input.FilteredStatus }),
        ...(input.TopicFilter !== undefined &&
            input.TopicFilter !== null && { TopicFilter: serializeAws_restJson1TopicFilter(input.TopicFilter, context) }),
    };
};
const serializeAws_restJson1ListManagementOptions = (input, context) => {
    return {
        ...(input.ContactListName !== undefined &&
            input.ContactListName !== null && { ContactListName: input.ContactListName }),
        ...(input.TopicName !== undefined && input.TopicName !== null && { TopicName: input.TopicName }),
    };
};
const serializeAws_restJson1Message = (input, context) => {
    return {
        ...(input.Body !== undefined && input.Body !== null && { Body: serializeAws_restJson1Body(input.Body, context) }),
        ...(input.Subject !== undefined &&
            input.Subject !== null && { Subject: serializeAws_restJson1Content(input.Subject, context) }),
    };
};
const serializeAws_restJson1MessageTag = (input, context) => {
    return {
        ...(input.Name !== undefined && input.Name !== null && { Name: input.Name }),
        ...(input.Value !== undefined && input.Value !== null && { Value: input.Value }),
    };
};
const serializeAws_restJson1MessageTagList = (input, context) => {
    return input
        .filter((e) => e != null)
        .map((entry) => {
        if (entry === null) {
            return null;
        }
        return serializeAws_restJson1MessageTag(entry, context);
    });
};
const serializeAws_restJson1PinpointDestination = (input, context) => {
    return {
        ...(input.ApplicationArn !== undefined &&
            input.ApplicationArn !== null && { ApplicationArn: input.ApplicationArn }),
    };
};
const serializeAws_restJson1RawMessage = (input, context) => {
    return {
        ...(input.Data !== undefined && input.Data !== null && { Data: context.base64Encoder(input.Data) }),
    };
};
const serializeAws_restJson1ReplacementEmailContent = (input, context) => {
    return {
        ...(input.ReplacementTemplate !== undefined &&
            input.ReplacementTemplate !== null && {
            ReplacementTemplate: serializeAws_restJson1ReplacementTemplate(input.ReplacementTemplate, context),
        }),
    };
};
const serializeAws_restJson1ReplacementTemplate = (input, context) => {
    return {
        ...(input.ReplacementTemplateData !== undefined &&
            input.ReplacementTemplateData !== null && { ReplacementTemplateData: input.ReplacementTemplateData }),
    };
};
const serializeAws_restJson1ReputationOptions = (input, context) => {
    return {
        ...(input.LastFreshStart !== undefined &&
            input.LastFreshStart !== null && { LastFreshStart: Math.round(input.LastFreshStart.getTime() / 1000) }),
        ...(input.ReputationMetricsEnabled !== undefined &&
            input.ReputationMetricsEnabled !== null && { ReputationMetricsEnabled: input.ReputationMetricsEnabled }),
    };
};
const serializeAws_restJson1SendingOptions = (input, context) => {
    return {
        ...(input.SendingEnabled !== undefined &&
            input.SendingEnabled !== null && { SendingEnabled: input.SendingEnabled }),
    };
};
const serializeAws_restJson1SnsDestination = (input, context) => {
    return {
        ...(input.TopicArn !== undefined && input.TopicArn !== null && { TopicArn: input.TopicArn }),
    };
};
const serializeAws_restJson1SuppressionListDestination = (input, context) => {
    return {
        ...(input.SuppressionListImportAction !== undefined &&
            input.SuppressionListImportAction !== null && { SuppressionListImportAction: input.SuppressionListImportAction }),
    };
};
const serializeAws_restJson1SuppressionListReasons = (input, context) => {
    return input
        .filter((e) => e != null)
        .map((entry) => {
        if (entry === null) {
            return null;
        }
        return entry;
    });
};
const serializeAws_restJson1SuppressionOptions = (input, context) => {
    return {
        ...(input.SuppressedReasons !== undefined &&
            input.SuppressedReasons !== null && {
            SuppressedReasons: serializeAws_restJson1SuppressionListReasons(input.SuppressedReasons, context),
        }),
    };
};
const serializeAws_restJson1Tag = (input, context) => {
    return {
        ...(input.Key !== undefined && input.Key !== null && { Key: input.Key }),
        ...(input.Value !== undefined && input.Value !== null && { Value: input.Value }),
    };
};
const serializeAws_restJson1TagList = (input, context) => {
    return input
        .filter((e) => e != null)
        .map((entry) => {
        if (entry === null) {
            return null;
        }
        return serializeAws_restJson1Tag(entry, context);
    });
};
const serializeAws_restJson1Template = (input, context) => {
    return {
        ...(input.TemplateArn !== undefined && input.TemplateArn !== null && { TemplateArn: input.TemplateArn }),
        ...(input.TemplateData !== undefined && input.TemplateData !== null && { TemplateData: input.TemplateData }),
        ...(input.TemplateName !== undefined && input.TemplateName !== null && { TemplateName: input.TemplateName }),
    };
};
const serializeAws_restJson1Topic = (input, context) => {
    return {
        ...(input.DefaultSubscriptionStatus !== undefined &&
            input.DefaultSubscriptionStatus !== null && { DefaultSubscriptionStatus: input.DefaultSubscriptionStatus }),
        ...(input.Description !== undefined && input.Description !== null && { Description: input.Description }),
        ...(input.DisplayName !== undefined && input.DisplayName !== null && { DisplayName: input.DisplayName }),
        ...(input.TopicName !== undefined && input.TopicName !== null && { TopicName: input.TopicName }),
    };
};
const serializeAws_restJson1TopicFilter = (input, context) => {
    return {
        ...(input.TopicName !== undefined && input.TopicName !== null && { TopicName: input.TopicName }),
        ...(input.UseDefaultIfPreferenceUnavailable !== undefined &&
            input.UseDefaultIfPreferenceUnavailable !== null && {
            UseDefaultIfPreferenceUnavailable: input.UseDefaultIfPreferenceUnavailable,
        }),
    };
};
const serializeAws_restJson1TopicPreference = (input, context) => {
    return {
        ...(input.SubscriptionStatus !== undefined &&
            input.SubscriptionStatus !== null && { SubscriptionStatus: input.SubscriptionStatus }),
        ...(input.TopicName !== undefined && input.TopicName !== null && { TopicName: input.TopicName }),
    };
};
const serializeAws_restJson1TopicPreferenceList = (input, context) => {
    return input
        .filter((e) => e != null)
        .map((entry) => {
        if (entry === null) {
            return null;
        }
        return serializeAws_restJson1TopicPreference(entry, context);
    });
};
const serializeAws_restJson1Topics = (input, context) => {
    return input
        .filter((e) => e != null)
        .map((entry) => {
        if (entry === null) {
            return null;
        }
        return serializeAws_restJson1Topic(entry, context);
    });
};
const serializeAws_restJson1TrackingOptions = (input, context) => {
    return {
        ...(input.CustomRedirectDomain !== undefined &&
            input.CustomRedirectDomain !== null && { CustomRedirectDomain: input.CustomRedirectDomain }),
    };
};
const deserializeAws_restJson1AccountDetails = (output, context) => {
    return {
        AdditionalContactEmailAddresses: output.AdditionalContactEmailAddresses !== undefined && output.AdditionalContactEmailAddresses !== null
            ? deserializeAws_restJson1AdditionalContactEmailAddresses(output.AdditionalContactEmailAddresses, context)
            : undefined,
        ContactLanguage: output.ContactLanguage !== undefined && output.ContactLanguage !== null ? output.ContactLanguage : undefined,
        MailType: output.MailType !== undefined && output.MailType !== null ? output.MailType : undefined,
        ReviewDetails: output.ReviewDetails !== undefined && output.ReviewDetails !== null
            ? deserializeAws_restJson1ReviewDetails(output.ReviewDetails, context)
            : undefined,
        UseCaseDescription: output.UseCaseDescription !== undefined && output.UseCaseDescription !== null
            ? output.UseCaseDescription
            : undefined,
        WebsiteURL: output.WebsiteURL !== undefined && output.WebsiteURL !== null ? output.WebsiteURL : undefined,
    };
};
const deserializeAws_restJson1AdditionalContactEmailAddresses = (output, context) => {
    return (output || [])
        .filter((e) => e != null)
        .map((entry) => {
        if (entry === null) {
            return null;
        }
        return entry;
    });
};
const deserializeAws_restJson1BlacklistEntries = (output, context) => {
    return (output || [])
        .filter((e) => e != null)
        .map((entry) => {
        if (entry === null) {
            return null;
        }
        return deserializeAws_restJson1BlacklistEntry(entry, context);
    });
};
const deserializeAws_restJson1BlacklistEntry = (output, context) => {
    return {
        Description: output.Description !== undefined && output.Description !== null ? output.Description : undefined,
        ListingTime: output.ListingTime !== undefined && output.ListingTime !== null
            ? new Date(Math.round(output.ListingTime * 1000))
            : undefined,
        RblName: output.RblName !== undefined && output.RblName !== null ? output.RblName : undefined,
    };
};
const deserializeAws_restJson1BlacklistReport = (output, context) => {
    return Object.entries(output).reduce((acc, [key, value]) => {
        if (value === null) {
            return acc;
        }
        return {
            ...acc,
            [key]: deserializeAws_restJson1BlacklistEntries(value, context),
        };
    }, {});
};
const deserializeAws_restJson1BulkEmailEntryResult = (output, context) => {
    return {
        Error: output.Error !== undefined && output.Error !== null ? output.Error : undefined,
        MessageId: output.MessageId !== undefined && output.MessageId !== null ? output.MessageId : undefined,
        Status: output.Status !== undefined && output.Status !== null ? output.Status : undefined,
    };
};
const deserializeAws_restJson1BulkEmailEntryResultList = (output, context) => {
    return (output || [])
        .filter((e) => e != null)
        .map((entry) => {
        if (entry === null) {
            return null;
        }
        return deserializeAws_restJson1BulkEmailEntryResult(entry, context);
    });
};
const deserializeAws_restJson1CloudWatchDestination = (output, context) => {
    return {
        DimensionConfigurations: output.DimensionConfigurations !== undefined && output.DimensionConfigurations !== null
            ? deserializeAws_restJson1CloudWatchDimensionConfigurations(output.DimensionConfigurations, context)
            : undefined,
    };
};
const deserializeAws_restJson1CloudWatchDimensionConfiguration = (output, context) => {
    return {
        DefaultDimensionValue: output.DefaultDimensionValue !== undefined && output.DefaultDimensionValue !== null
            ? output.DefaultDimensionValue
            : undefined,
        DimensionName: output.DimensionName !== undefined && output.DimensionName !== null ? output.DimensionName : undefined,
        DimensionValueSource: output.DimensionValueSource !== undefined && output.DimensionValueSource !== null
            ? output.DimensionValueSource
            : undefined,
    };
};
const deserializeAws_restJson1CloudWatchDimensionConfigurations = (output, context) => {
    return (output || [])
        .filter((e) => e != null)
        .map((entry) => {
        if (entry === null) {
            return null;
        }
        return deserializeAws_restJson1CloudWatchDimensionConfiguration(entry, context);
    });
};
const deserializeAws_restJson1ConfigurationSetNameList = (output, context) => {
    return (output || [])
        .filter((e) => e != null)
        .map((entry) => {
        if (entry === null) {
            return null;
        }
        return entry;
    });
};
const deserializeAws_restJson1Contact = (output, context) => {
    return {
        EmailAddress: output.EmailAddress !== undefined && output.EmailAddress !== null ? output.EmailAddress : undefined,
        LastUpdatedTimestamp: output.LastUpdatedTimestamp !== undefined && output.LastUpdatedTimestamp !== null
            ? new Date(Math.round(output.LastUpdatedTimestamp * 1000))
            : undefined,
        TopicDefaultPreferences: output.TopicDefaultPreferences !== undefined && output.TopicDefaultPreferences !== null
            ? deserializeAws_restJson1TopicPreferenceList(output.TopicDefaultPreferences, context)
            : undefined,
        TopicPreferences: output.TopicPreferences !== undefined && output.TopicPreferences !== null
            ? deserializeAws_restJson1TopicPreferenceList(output.TopicPreferences, context)
            : undefined,
        UnsubscribeAll: output.UnsubscribeAll !== undefined && output.UnsubscribeAll !== null ? output.UnsubscribeAll : undefined,
    };
};
const deserializeAws_restJson1ContactList = (output, context) => {
    return {
        ContactListName: output.ContactListName !== undefined && output.ContactListName !== null ? output.ContactListName : undefined,
        LastUpdatedTimestamp: output.LastUpdatedTimestamp !== undefined && output.LastUpdatedTimestamp !== null
            ? new Date(Math.round(output.LastUpdatedTimestamp * 1000))
            : undefined,
    };
};
const deserializeAws_restJson1ContactListDestination = (output, context) => {
    return {
        ContactListImportAction: output.ContactListImportAction !== undefined && output.ContactListImportAction !== null
            ? output.ContactListImportAction
            : undefined,
        ContactListName: output.ContactListName !== undefined && output.ContactListName !== null ? output.ContactListName : undefined,
    };
};
const deserializeAws_restJson1CustomVerificationEmailTemplateMetadata = (output, context) => {
    return {
        FailureRedirectionURL: output.FailureRedirectionURL !== undefined && output.FailureRedirectionURL !== null
            ? output.FailureRedirectionURL
            : undefined,
        FromEmailAddress: output.FromEmailAddress !== undefined && output.FromEmailAddress !== null ? output.FromEmailAddress : undefined,
        SuccessRedirectionURL: output.SuccessRedirectionURL !== undefined && output.SuccessRedirectionURL !== null
            ? output.SuccessRedirectionURL
            : undefined,
        TemplateName: output.TemplateName !== undefined && output.TemplateName !== null ? output.TemplateName : undefined,
        TemplateSubject: output.TemplateSubject !== undefined && output.TemplateSubject !== null ? output.TemplateSubject : undefined,
    };
};
const deserializeAws_restJson1CustomVerificationEmailTemplatesList = (output, context) => {
    return (output || [])
        .filter((e) => e != null)
        .map((entry) => {
        if (entry === null) {
            return null;
        }
        return deserializeAws_restJson1CustomVerificationEmailTemplateMetadata(entry, context);
    });
};
const deserializeAws_restJson1DailyVolume = (output, context) => {
    return {
        DomainIspPlacements: output.DomainIspPlacements !== undefined && output.DomainIspPlacements !== null
            ? deserializeAws_restJson1DomainIspPlacements(output.DomainIspPlacements, context)
            : undefined,
        StartDate: output.StartDate !== undefined && output.StartDate !== null
            ? new Date(Math.round(output.StartDate * 1000))
            : undefined,
        VolumeStatistics: output.VolumeStatistics !== undefined && output.VolumeStatistics !== null
            ? deserializeAws_restJson1VolumeStatistics(output.VolumeStatistics, context)
            : undefined,
    };
};
const deserializeAws_restJson1DailyVolumes = (output, context) => {
    return (output || [])
        .filter((e) => e != null)
        .map((entry) => {
        if (entry === null) {
            return null;
        }
        return deserializeAws_restJson1DailyVolume(entry, context);
    });
};
const deserializeAws_restJson1DedicatedIp = (output, context) => {
    return {
        Ip: output.Ip !== undefined && output.Ip !== null ? output.Ip : undefined,
        PoolName: output.PoolName !== undefined && output.PoolName !== null ? output.PoolName : undefined,
        WarmupPercentage: output.WarmupPercentage !== undefined && output.WarmupPercentage !== null ? output.WarmupPercentage : undefined,
        WarmupStatus: output.WarmupStatus !== undefined && output.WarmupStatus !== null ? output.WarmupStatus : undefined,
    };
};
const deserializeAws_restJson1DedicatedIpList = (output, context) => {
    return (output || [])
        .filter((e) => e != null)
        .map((entry) => {
        if (entry === null) {
            return null;
        }
        return deserializeAws_restJson1DedicatedIp(entry, context);
    });
};
const deserializeAws_restJson1DeliverabilityTestReport = (output, context) => {
    return {
        CreateDate: output.CreateDate !== undefined && output.CreateDate !== null
            ? new Date(Math.round(output.CreateDate * 1000))
            : undefined,
        DeliverabilityTestStatus: output.DeliverabilityTestStatus !== undefined && output.DeliverabilityTestStatus !== null
            ? output.DeliverabilityTestStatus
            : undefined,
        FromEmailAddress: output.FromEmailAddress !== undefined && output.FromEmailAddress !== null ? output.FromEmailAddress : undefined,
        ReportId: output.ReportId !== undefined && output.ReportId !== null ? output.ReportId : undefined,
        ReportName: output.ReportName !== undefined && output.ReportName !== null ? output.ReportName : undefined,
        Subject: output.Subject !== undefined && output.Subject !== null ? output.Subject : undefined,
    };
};
const deserializeAws_restJson1DeliverabilityTestReports = (output, context) => {
    return (output || [])
        .filter((e) => e != null)
        .map((entry) => {
        if (entry === null) {
            return null;
        }
        return deserializeAws_restJson1DeliverabilityTestReport(entry, context);
    });
};
const deserializeAws_restJson1DeliveryOptions = (output, context) => {
    return {
        SendingPoolName: output.SendingPoolName !== undefined && output.SendingPoolName !== null ? output.SendingPoolName : undefined,
        TlsPolicy: output.TlsPolicy !== undefined && output.TlsPolicy !== null ? output.TlsPolicy : undefined,
    };
};
const deserializeAws_restJson1DkimAttributes = (output, context) => {
    return {
        SigningAttributesOrigin: output.SigningAttributesOrigin !== undefined && output.SigningAttributesOrigin !== null
            ? output.SigningAttributesOrigin
            : undefined,
        SigningEnabled: output.SigningEnabled !== undefined && output.SigningEnabled !== null ? output.SigningEnabled : undefined,
        Status: output.Status !== undefined && output.Status !== null ? output.Status : undefined,
        Tokens: output.Tokens !== undefined && output.Tokens !== null
            ? deserializeAws_restJson1DnsTokenList(output.Tokens, context)
            : undefined,
    };
};
const deserializeAws_restJson1DnsTokenList = (output, context) => {
    return (output || [])
        .filter((e) => e != null)
        .map((entry) => {
        if (entry === null) {
            return null;
        }
        return entry;
    });
};
const deserializeAws_restJson1DomainDeliverabilityCampaign = (output, context) => {
    return {
        CampaignId: output.CampaignId !== undefined && output.CampaignId !== null ? output.CampaignId : undefined,
        DeleteRate: output.DeleteRate !== undefined && output.DeleteRate !== null ? output.DeleteRate : undefined,
        Esps: output.Esps !== undefined && output.Esps !== null
            ? deserializeAws_restJson1Esps(output.Esps, context)
            : undefined,
        FirstSeenDateTime: output.FirstSeenDateTime !== undefined && output.FirstSeenDateTime !== null
            ? new Date(Math.round(output.FirstSeenDateTime * 1000))
            : undefined,
        FromAddress: output.FromAddress !== undefined && output.FromAddress !== null ? output.FromAddress : undefined,
        ImageUrl: output.ImageUrl !== undefined && output.ImageUrl !== null ? output.ImageUrl : undefined,
        InboxCount: output.InboxCount !== undefined && output.InboxCount !== null ? output.InboxCount : undefined,
        LastSeenDateTime: output.LastSeenDateTime !== undefined && output.LastSeenDateTime !== null
            ? new Date(Math.round(output.LastSeenDateTime * 1000))
            : undefined,
        ProjectedVolume: output.ProjectedVolume !== undefined && output.ProjectedVolume !== null ? output.ProjectedVolume : undefined,
        ReadDeleteRate: output.ReadDeleteRate !== undefined && output.ReadDeleteRate !== null ? output.ReadDeleteRate : undefined,
        ReadRate: output.ReadRate !== undefined && output.ReadRate !== null ? output.ReadRate : undefined,
        SendingIps: output.SendingIps !== undefined && output.SendingIps !== null
            ? deserializeAws_restJson1IpList(output.SendingIps, context)
            : undefined,
        SpamCount: output.SpamCount !== undefined && output.SpamCount !== null ? output.SpamCount : undefined,
        Subject: output.Subject !== undefined && output.Subject !== null ? output.Subject : undefined,
    };
};
const deserializeAws_restJson1DomainDeliverabilityCampaignList = (output, context) => {
    return (output || [])
        .filter((e) => e != null)
        .map((entry) => {
        if (entry === null) {
            return null;
        }
        return deserializeAws_restJson1DomainDeliverabilityCampaign(entry, context);
    });
};
const deserializeAws_restJson1DomainDeliverabilityTrackingOption = (output, context) => {
    return {
        Domain: output.Domain !== undefined && output.Domain !== null ? output.Domain : undefined,
        InboxPlacementTrackingOption: output.InboxPlacementTrackingOption !== undefined && output.InboxPlacementTrackingOption !== null
            ? deserializeAws_restJson1InboxPlacementTrackingOption(output.InboxPlacementTrackingOption, context)
            : undefined,
        SubscriptionStartDate: output.SubscriptionStartDate !== undefined && output.SubscriptionStartDate !== null
            ? new Date(Math.round(output.SubscriptionStartDate * 1000))
            : undefined,
    };
};
const deserializeAws_restJson1DomainDeliverabilityTrackingOptions = (output, context) => {
    return (output || [])
        .filter((e) => e != null)
        .map((entry) => {
        if (entry === null) {
            return null;
        }
        return deserializeAws_restJson1DomainDeliverabilityTrackingOption(entry, context);
    });
};
const deserializeAws_restJson1DomainIspPlacement = (output, context) => {
    return {
        InboxPercentage: output.InboxPercentage !== undefined && output.InboxPercentage !== null ? output.InboxPercentage : undefined,
        InboxRawCount: output.InboxRawCount !== undefined && output.InboxRawCount !== null ? output.InboxRawCount : undefined,
        IspName: output.IspName !== undefined && output.IspName !== null ? output.IspName : undefined,
        SpamPercentage: output.SpamPercentage !== undefined && output.SpamPercentage !== null ? output.SpamPercentage : undefined,
        SpamRawCount: output.SpamRawCount !== undefined && output.SpamRawCount !== null ? output.SpamRawCount : undefined,
    };
};
const deserializeAws_restJson1DomainIspPlacements = (output, context) => {
    return (output || [])
        .filter((e) => e != null)
        .map((entry) => {
        if (entry === null) {
            return null;
        }
        return deserializeAws_restJson1DomainIspPlacement(entry, context);
    });
};
const deserializeAws_restJson1EmailTemplateContent = (output, context) => {
    return {
        Html: output.Html !== undefined && output.Html !== null ? output.Html : undefined,
        Subject: output.Subject !== undefined && output.Subject !== null ? output.Subject : undefined,
        Text: output.Text !== undefined && output.Text !== null ? output.Text : undefined,
    };
};
const deserializeAws_restJson1EmailTemplateMetadata = (output, context) => {
    return {
        CreatedTimestamp: output.CreatedTimestamp !== undefined && output.CreatedTimestamp !== null
            ? new Date(Math.round(output.CreatedTimestamp * 1000))
            : undefined,
        TemplateName: output.TemplateName !== undefined && output.TemplateName !== null ? output.TemplateName : undefined,
    };
};
const deserializeAws_restJson1EmailTemplateMetadataList = (output, context) => {
    return (output || [])
        .filter((e) => e != null)
        .map((entry) => {
        if (entry === null) {
            return null;
        }
        return deserializeAws_restJson1EmailTemplateMetadata(entry, context);
    });
};
const deserializeAws_restJson1Esps = (output, context) => {
    return (output || [])
        .filter((e) => e != null)
        .map((entry) => {
        if (entry === null) {
            return null;
        }
        return entry;
    });
};
const deserializeAws_restJson1EventDestination = (output, context) => {
    return {
        CloudWatchDestination: output.CloudWatchDestination !== undefined && output.CloudWatchDestination !== null
            ? deserializeAws_restJson1CloudWatchDestination(output.CloudWatchDestination, context)
            : undefined,
        Enabled: output.Enabled !== undefined && output.Enabled !== null ? output.Enabled : undefined,
        KinesisFirehoseDestination: output.KinesisFirehoseDestination !== undefined && output.KinesisFirehoseDestination !== null
            ? deserializeAws_restJson1KinesisFirehoseDestination(output.KinesisFirehoseDestination, context)
            : undefined,
        MatchingEventTypes: output.MatchingEventTypes !== undefined && output.MatchingEventTypes !== null
            ? deserializeAws_restJson1EventTypes(output.MatchingEventTypes, context)
            : undefined,
        Name: output.Name !== undefined && output.Name !== null ? output.Name : undefined,
        PinpointDestination: output.PinpointDestination !== undefined && output.PinpointDestination !== null
            ? deserializeAws_restJson1PinpointDestination(output.PinpointDestination, context)
            : undefined,
        SnsDestination: output.SnsDestination !== undefined && output.SnsDestination !== null
            ? deserializeAws_restJson1SnsDestination(output.SnsDestination, context)
            : undefined,
    };
};
const deserializeAws_restJson1EventDestinations = (output, context) => {
    return (output || [])
        .filter((e) => e != null)
        .map((entry) => {
        if (entry === null) {
            return null;
        }
        return deserializeAws_restJson1EventDestination(entry, context);
    });
};
const deserializeAws_restJson1EventTypes = (output, context) => {
    return (output || [])
        .filter((e) => e != null)
        .map((entry) => {
        if (entry === null) {
            return null;
        }
        return entry;
    });
};
const deserializeAws_restJson1FailureInfo = (output, context) => {
    return {
        ErrorMessage: output.ErrorMessage !== undefined && output.ErrorMessage !== null ? output.ErrorMessage : undefined,
        FailedRecordsS3Url: output.FailedRecordsS3Url !== undefined && output.FailedRecordsS3Url !== null
            ? output.FailedRecordsS3Url
            : undefined,
    };
};
const deserializeAws_restJson1IdentityInfo = (output, context) => {
    return {
        IdentityName: output.IdentityName !== undefined && output.IdentityName !== null ? output.IdentityName : undefined,
        IdentityType: output.IdentityType !== undefined && output.IdentityType !== null ? output.IdentityType : undefined,
        SendingEnabled: output.SendingEnabled !== undefined && output.SendingEnabled !== null ? output.SendingEnabled : undefined,
    };
};
const deserializeAws_restJson1IdentityInfoList = (output, context) => {
    return (output || [])
        .filter((e) => e != null)
        .map((entry) => {
        if (entry === null) {
            return null;
        }
        return deserializeAws_restJson1IdentityInfo(entry, context);
    });
};
const deserializeAws_restJson1ImportDataSource = (output, context) => {
    return {
        DataFormat: output.DataFormat !== undefined && output.DataFormat !== null ? output.DataFormat : undefined,
        S3Url: output.S3Url !== undefined && output.S3Url !== null ? output.S3Url : undefined,
    };
};
const deserializeAws_restJson1ImportDestination = (output, context) => {
    return {
        ContactListDestination: output.ContactListDestination !== undefined && output.ContactListDestination !== null
            ? deserializeAws_restJson1ContactListDestination(output.ContactListDestination, context)
            : undefined,
        SuppressionListDestination: output.SuppressionListDestination !== undefined && output.SuppressionListDestination !== null
            ? deserializeAws_restJson1SuppressionListDestination(output.SuppressionListDestination, context)
            : undefined,
    };
};
const deserializeAws_restJson1ImportJobSummary = (output, context) => {
    return {
        CreatedTimestamp: output.CreatedTimestamp !== undefined && output.CreatedTimestamp !== null
            ? new Date(Math.round(output.CreatedTimestamp * 1000))
            : undefined,
        ImportDestination: output.ImportDestination !== undefined && output.ImportDestination !== null
            ? deserializeAws_restJson1ImportDestination(output.ImportDestination, context)
            : undefined,
        JobId: output.JobId !== undefined && output.JobId !== null ? output.JobId : undefined,
        JobStatus: output.JobStatus !== undefined && output.JobStatus !== null ? output.JobStatus : undefined,
    };
};
const deserializeAws_restJson1ImportJobSummaryList = (output, context) => {
    return (output || [])
        .filter((e) => e != null)
        .map((entry) => {
        if (entry === null) {
            return null;
        }
        return deserializeAws_restJson1ImportJobSummary(entry, context);
    });
};
const deserializeAws_restJson1InboxPlacementTrackingOption = (output, context) => {
    return {
        Global: output.Global !== undefined && output.Global !== null ? output.Global : undefined,
        TrackedIsps: output.TrackedIsps !== undefined && output.TrackedIsps !== null
            ? deserializeAws_restJson1IspNameList(output.TrackedIsps, context)
            : undefined,
    };
};
const deserializeAws_restJson1IpList = (output, context) => {
    return (output || [])
        .filter((e) => e != null)
        .map((entry) => {
        if (entry === null) {
            return null;
        }
        return entry;
    });
};
const deserializeAws_restJson1IspNameList = (output, context) => {
    return (output || [])
        .filter((e) => e != null)
        .map((entry) => {
        if (entry === null) {
            return null;
        }
        return entry;
    });
};
const deserializeAws_restJson1IspPlacement = (output, context) => {
    return {
        IspName: output.IspName !== undefined && output.IspName !== null ? output.IspName : undefined,
        PlacementStatistics: output.PlacementStatistics !== undefined && output.PlacementStatistics !== null
            ? deserializeAws_restJson1PlacementStatistics(output.PlacementStatistics, context)
            : undefined,
    };
};
const deserializeAws_restJson1IspPlacements = (output, context) => {
    return (output || [])
        .filter((e) => e != null)
        .map((entry) => {
        if (entry === null) {
            return null;
        }
        return deserializeAws_restJson1IspPlacement(entry, context);
    });
};
const deserializeAws_restJson1KinesisFirehoseDestination = (output, context) => {
    return {
        DeliveryStreamArn: output.DeliveryStreamArn !== undefined && output.DeliveryStreamArn !== null
            ? output.DeliveryStreamArn
            : undefined,
        IamRoleArn: output.IamRoleArn !== undefined && output.IamRoleArn !== null ? output.IamRoleArn : undefined,
    };
};
const deserializeAws_restJson1ListOfContactLists = (output, context) => {
    return (output || [])
        .filter((e) => e != null)
        .map((entry) => {
        if (entry === null) {
            return null;
        }
        return deserializeAws_restJson1ContactList(entry, context);
    });
};
const deserializeAws_restJson1ListOfContacts = (output, context) => {
    return (output || [])
        .filter((e) => e != null)
        .map((entry) => {
        if (entry === null) {
            return null;
        }
        return deserializeAws_restJson1Contact(entry, context);
    });
};
const deserializeAws_restJson1ListOfDedicatedIpPools = (output, context) => {
    return (output || [])
        .filter((e) => e != null)
        .map((entry) => {
        if (entry === null) {
            return null;
        }
        return entry;
    });
};
const deserializeAws_restJson1MailFromAttributes = (output, context) => {
    return {
        BehaviorOnMxFailure: output.BehaviorOnMxFailure !== undefined && output.BehaviorOnMxFailure !== null
            ? output.BehaviorOnMxFailure
            : undefined,
        MailFromDomain: output.MailFromDomain !== undefined && output.MailFromDomain !== null ? output.MailFromDomain : undefined,
        MailFromDomainStatus: output.MailFromDomainStatus !== undefined && output.MailFromDomainStatus !== null
            ? output.MailFromDomainStatus
            : undefined,
    };
};
const deserializeAws_restJson1OverallVolume = (output, context) => {
    return {
        DomainIspPlacements: output.DomainIspPlacements !== undefined && output.DomainIspPlacements !== null
            ? deserializeAws_restJson1DomainIspPlacements(output.DomainIspPlacements, context)
            : undefined,
        ReadRatePercent: output.ReadRatePercent !== undefined && output.ReadRatePercent !== null ? output.ReadRatePercent : undefined,
        VolumeStatistics: output.VolumeStatistics !== undefined && output.VolumeStatistics !== null
            ? deserializeAws_restJson1VolumeStatistics(output.VolumeStatistics, context)
            : undefined,
    };
};
const deserializeAws_restJson1PinpointDestination = (output, context) => {
    return {
        ApplicationArn: output.ApplicationArn !== undefined && output.ApplicationArn !== null ? output.ApplicationArn : undefined,
    };
};
const deserializeAws_restJson1PlacementStatistics = (output, context) => {
    return {
        DkimPercentage: output.DkimPercentage !== undefined && output.DkimPercentage !== null ? output.DkimPercentage : undefined,
        InboxPercentage: output.InboxPercentage !== undefined && output.InboxPercentage !== null ? output.InboxPercentage : undefined,
        MissingPercentage: output.MissingPercentage !== undefined && output.MissingPercentage !== null
            ? output.MissingPercentage
            : undefined,
        SpamPercentage: output.SpamPercentage !== undefined && output.SpamPercentage !== null ? output.SpamPercentage : undefined,
        SpfPercentage: output.SpfPercentage !== undefined && output.SpfPercentage !== null ? output.SpfPercentage : undefined,
    };
};
const deserializeAws_restJson1PolicyMap = (output, context) => {
    return Object.entries(output).reduce((acc, [key, value]) => {
        if (value === null) {
            return acc;
        }
        return {
            ...acc,
            [key]: value,
        };
    }, {});
};
const deserializeAws_restJson1ReputationOptions = (output, context) => {
    return {
        LastFreshStart: output.LastFreshStart !== undefined && output.LastFreshStart !== null
            ? new Date(Math.round(output.LastFreshStart * 1000))
            : undefined,
        ReputationMetricsEnabled: output.ReputationMetricsEnabled !== undefined && output.ReputationMetricsEnabled !== null
            ? output.ReputationMetricsEnabled
            : undefined,
    };
};
const deserializeAws_restJson1ReviewDetails = (output, context) => {
    return {
        CaseId: output.CaseId !== undefined && output.CaseId !== null ? output.CaseId : undefined,
        Status: output.Status !== undefined && output.Status !== null ? output.Status : undefined,
    };
};
const deserializeAws_restJson1SendingOptions = (output, context) => {
    return {
        SendingEnabled: output.SendingEnabled !== undefined && output.SendingEnabled !== null ? output.SendingEnabled : undefined,
    };
};
const deserializeAws_restJson1SendQuota = (output, context) => {
    return {
        Max24HourSend: output.Max24HourSend !== undefined && output.Max24HourSend !== null ? output.Max24HourSend : undefined,
        MaxSendRate: output.MaxSendRate !== undefined && output.MaxSendRate !== null ? output.MaxSendRate : undefined,
        SentLast24Hours: output.SentLast24Hours !== undefined && output.SentLast24Hours !== null ? output.SentLast24Hours : undefined,
    };
};
const deserializeAws_restJson1SnsDestination = (output, context) => {
    return {
        TopicArn: output.TopicArn !== undefined && output.TopicArn !== null ? output.TopicArn : undefined,
    };
};
const deserializeAws_restJson1SuppressedDestination = (output, context) => {
    return {
        Attributes: output.Attributes !== undefined && output.Attributes !== null
            ? deserializeAws_restJson1SuppressedDestinationAttributes(output.Attributes, context)
            : undefined,
        EmailAddress: output.EmailAddress !== undefined && output.EmailAddress !== null ? output.EmailAddress : undefined,
        LastUpdateTime: output.LastUpdateTime !== undefined && output.LastUpdateTime !== null
            ? new Date(Math.round(output.LastUpdateTime * 1000))
            : undefined,
        Reason: output.Reason !== undefined && output.Reason !== null ? output.Reason : undefined,
    };
};
const deserializeAws_restJson1SuppressedDestinationAttributes = (output, context) => {
    return {
        FeedbackId: output.FeedbackId !== undefined && output.FeedbackId !== null ? output.FeedbackId : undefined,
        MessageId: output.MessageId !== undefined && output.MessageId !== null ? output.MessageId : undefined,
    };
};
const deserializeAws_restJson1SuppressedDestinationSummaries = (output, context) => {
    return (output || [])
        .filter((e) => e != null)
        .map((entry) => {
        if (entry === null) {
            return null;
        }
        return deserializeAws_restJson1SuppressedDestinationSummary(entry, context);
    });
};
const deserializeAws_restJson1SuppressedDestinationSummary = (output, context) => {
    return {
        EmailAddress: output.EmailAddress !== undefined && output.EmailAddress !== null ? output.EmailAddress : undefined,
        LastUpdateTime: output.LastUpdateTime !== undefined && output.LastUpdateTime !== null
            ? new Date(Math.round(output.LastUpdateTime * 1000))
            : undefined,
        Reason: output.Reason !== undefined && output.Reason !== null ? output.Reason : undefined,
    };
};
const deserializeAws_restJson1SuppressionAttributes = (output, context) => {
    return {
        SuppressedReasons: output.SuppressedReasons !== undefined && output.SuppressedReasons !== null
            ? deserializeAws_restJson1SuppressionListReasons(output.SuppressedReasons, context)
            : undefined,
    };
};
const deserializeAws_restJson1SuppressionListDestination = (output, context) => {
    return {
        SuppressionListImportAction: output.SuppressionListImportAction !== undefined && output.SuppressionListImportAction !== null
            ? output.SuppressionListImportAction
            : undefined,
    };
};
const deserializeAws_restJson1SuppressionListReasons = (output, context) => {
    return (output || [])
        .filter((e) => e != null)
        .map((entry) => {
        if (entry === null) {
            return null;
        }
        return entry;
    });
};
const deserializeAws_restJson1SuppressionOptions = (output, context) => {
    return {
        SuppressedReasons: output.SuppressedReasons !== undefined && output.SuppressedReasons !== null
            ? deserializeAws_restJson1SuppressionListReasons(output.SuppressedReasons, context)
            : undefined,
    };
};
const deserializeAws_restJson1Tag = (output, context) => {
    return {
        Key: output.Key !== undefined && output.Key !== null ? output.Key : undefined,
        Value: output.Value !== undefined && output.Value !== null ? output.Value : undefined,
    };
};
const deserializeAws_restJson1TagList = (output, context) => {
    return (output || [])
        .filter((e) => e != null)
        .map((entry) => {
        if (entry === null) {
            return null;
        }
        return deserializeAws_restJson1Tag(entry, context);
    });
};
const deserializeAws_restJson1Topic = (output, context) => {
    return {
        DefaultSubscriptionStatus: output.DefaultSubscriptionStatus !== undefined && output.DefaultSubscriptionStatus !== null
            ? output.DefaultSubscriptionStatus
            : undefined,
        Description: output.Description !== undefined && output.Description !== null ? output.Description : undefined,
        DisplayName: output.DisplayName !== undefined && output.DisplayName !== null ? output.DisplayName : undefined,
        TopicName: output.TopicName !== undefined && output.TopicName !== null ? output.TopicName : undefined,
    };
};
const deserializeAws_restJson1TopicPreference = (output, context) => {
    return {
        SubscriptionStatus: output.SubscriptionStatus !== undefined && output.SubscriptionStatus !== null
            ? output.SubscriptionStatus
            : undefined,
        TopicName: output.TopicName !== undefined && output.TopicName !== null ? output.TopicName : undefined,
    };
};
const deserializeAws_restJson1TopicPreferenceList = (output, context) => {
    return (output || [])
        .filter((e) => e != null)
        .map((entry) => {
        if (entry === null) {
            return null;
        }
        return deserializeAws_restJson1TopicPreference(entry, context);
    });
};
const deserializeAws_restJson1Topics = (output, context) => {
    return (output || [])
        .filter((e) => e != null)
        .map((entry) => {
        if (entry === null) {
            return null;
        }
        return deserializeAws_restJson1Topic(entry, context);
    });
};
const deserializeAws_restJson1TrackingOptions = (output, context) => {
    return {
        CustomRedirectDomain: output.CustomRedirectDomain !== undefined && output.CustomRedirectDomain !== null
            ? output.CustomRedirectDomain
            : undefined,
    };
};
const deserializeAws_restJson1VolumeStatistics = (output, context) => {
    return {
        InboxRawCount: output.InboxRawCount !== undefined && output.InboxRawCount !== null ? output.InboxRawCount : undefined,
        ProjectedInbox: output.ProjectedInbox !== undefined && output.ProjectedInbox !== null ? output.ProjectedInbox : undefined,
        ProjectedSpam: output.ProjectedSpam !== undefined && output.ProjectedSpam !== null ? output.ProjectedSpam : undefined,
        SpamRawCount: output.SpamRawCount !== undefined && output.SpamRawCount !== null ? output.SpamRawCount : undefined,
    };
};
const deserializeMetadata = (output) => {
    var _a;
    return ({
        httpStatusCode: output.statusCode,
        requestId: (_a = output.headers["x-amzn-requestid"]) !== null && _a !== void 0 ? _a : output.headers["x-amzn-request-id"],
        extendedRequestId: output.headers["x-amz-id-2"],
        cfId: output.headers["x-amz-cf-id"],
    });
};
// Collect low-level response body stream to Uint8Array.
const collectBody = (streamBody = new Uint8Array(), context) => {
    if (streamBody instanceof Uint8Array) {
        return Promise.resolve(streamBody);
    }
    return context.streamCollector(streamBody) || Promise.resolve(new Uint8Array());
};
// Encode Uint8Array data into string with utf-8.
const collectBodyString = (streamBody, context) => collectBody(streamBody, context).then((body) => context.utf8Encoder(body));
const isSerializableHeaderValue = (value) => value !== undefined &&
    value !== null &&
    value !== "" &&
    (!Object.getOwnPropertyNames(value).includes("length") || value.length != 0) &&
    (!Object.getOwnPropertyNames(value).includes("size") || value.size != 0);
const parseBody = (streamBody, context) => collectBodyString(streamBody, context).then((encoded) => {
    if (encoded.length) {
        return JSON.parse(encoded);
    }
    return {};
});
/**
 * Load an error code for the aws.rest-json-1.1 protocol.
 */
const loadRestJsonErrorCode = (output, data) => {
    const findKey = (object, key) => Object.keys(object).find((k) => k.toLowerCase() === key.toLowerCase());
    const sanitizeErrorCode = (rawValue) => {
        let cleanValue = rawValue;
        if (cleanValue.indexOf(":") >= 0) {
            cleanValue = cleanValue.split(":")[0];
        }
        if (cleanValue.indexOf("#") >= 0) {
            cleanValue = cleanValue.split("#")[1];
        }
        return cleanValue;
    };
    const headerKey = findKey(output.headers, "x-amzn-errortype");
    if (headerKey !== undefined) {
        return sanitizeErrorCode(output.headers[headerKey]);
    }
    if (data.code !== undefined) {
        return sanitizeErrorCode(data.code);
    }
    if (data["__type"] !== undefined) {
        return sanitizeErrorCode(data["__type"]);
    }
    return "";
};
//# sourceMappingURL=Aws_restJson1.js.map