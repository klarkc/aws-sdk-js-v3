"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.serializeAws_querySendRawEmailCommand = exports.serializeAws_querySendEmailCommand = exports.serializeAws_querySendCustomVerificationEmailCommand = exports.serializeAws_querySendBulkTemplatedEmailCommand = exports.serializeAws_querySendBounceCommand = exports.serializeAws_queryReorderReceiptRuleSetCommand = exports.serializeAws_queryPutIdentityPolicyCommand = exports.serializeAws_queryPutConfigurationSetDeliveryOptionsCommand = exports.serializeAws_queryListVerifiedEmailAddressesCommand = exports.serializeAws_queryListTemplatesCommand = exports.serializeAws_queryListReceiptRuleSetsCommand = exports.serializeAws_queryListReceiptFiltersCommand = exports.serializeAws_queryListIdentityPoliciesCommand = exports.serializeAws_queryListIdentitiesCommand = exports.serializeAws_queryListCustomVerificationEmailTemplatesCommand = exports.serializeAws_queryListConfigurationSetsCommand = exports.serializeAws_queryGetTemplateCommand = exports.serializeAws_queryGetSendStatisticsCommand = exports.serializeAws_queryGetSendQuotaCommand = exports.serializeAws_queryGetIdentityVerificationAttributesCommand = exports.serializeAws_queryGetIdentityPoliciesCommand = exports.serializeAws_queryGetIdentityNotificationAttributesCommand = exports.serializeAws_queryGetIdentityMailFromDomainAttributesCommand = exports.serializeAws_queryGetIdentityDkimAttributesCommand = exports.serializeAws_queryGetCustomVerificationEmailTemplateCommand = exports.serializeAws_queryGetAccountSendingEnabledCommand = exports.serializeAws_queryDescribeReceiptRuleSetCommand = exports.serializeAws_queryDescribeReceiptRuleCommand = exports.serializeAws_queryDescribeConfigurationSetCommand = exports.serializeAws_queryDescribeActiveReceiptRuleSetCommand = exports.serializeAws_queryDeleteVerifiedEmailAddressCommand = exports.serializeAws_queryDeleteTemplateCommand = exports.serializeAws_queryDeleteReceiptRuleSetCommand = exports.serializeAws_queryDeleteReceiptRuleCommand = exports.serializeAws_queryDeleteReceiptFilterCommand = exports.serializeAws_queryDeleteIdentityPolicyCommand = exports.serializeAws_queryDeleteIdentityCommand = exports.serializeAws_queryDeleteCustomVerificationEmailTemplateCommand = exports.serializeAws_queryDeleteConfigurationSetTrackingOptionsCommand = exports.serializeAws_queryDeleteConfigurationSetEventDestinationCommand = exports.serializeAws_queryDeleteConfigurationSetCommand = exports.serializeAws_queryCreateTemplateCommand = exports.serializeAws_queryCreateReceiptRuleSetCommand = exports.serializeAws_queryCreateReceiptRuleCommand = exports.serializeAws_queryCreateReceiptFilterCommand = exports.serializeAws_queryCreateCustomVerificationEmailTemplateCommand = exports.serializeAws_queryCreateConfigurationSetTrackingOptionsCommand = exports.serializeAws_queryCreateConfigurationSetEventDestinationCommand = exports.serializeAws_queryCreateConfigurationSetCommand = exports.serializeAws_queryCloneReceiptRuleSetCommand = void 0;
exports.deserializeAws_queryGetIdentityNotificationAttributesCommand = exports.deserializeAws_queryGetIdentityMailFromDomainAttributesCommand = exports.deserializeAws_queryGetIdentityDkimAttributesCommand = exports.deserializeAws_queryGetCustomVerificationEmailTemplateCommand = exports.deserializeAws_queryGetAccountSendingEnabledCommand = exports.deserializeAws_queryDescribeReceiptRuleSetCommand = exports.deserializeAws_queryDescribeReceiptRuleCommand = exports.deserializeAws_queryDescribeConfigurationSetCommand = exports.deserializeAws_queryDescribeActiveReceiptRuleSetCommand = exports.deserializeAws_queryDeleteVerifiedEmailAddressCommand = exports.deserializeAws_queryDeleteTemplateCommand = exports.deserializeAws_queryDeleteReceiptRuleSetCommand = exports.deserializeAws_queryDeleteReceiptRuleCommand = exports.deserializeAws_queryDeleteReceiptFilterCommand = exports.deserializeAws_queryDeleteIdentityPolicyCommand = exports.deserializeAws_queryDeleteIdentityCommand = exports.deserializeAws_queryDeleteCustomVerificationEmailTemplateCommand = exports.deserializeAws_queryDeleteConfigurationSetTrackingOptionsCommand = exports.deserializeAws_queryDeleteConfigurationSetEventDestinationCommand = exports.deserializeAws_queryDeleteConfigurationSetCommand = exports.deserializeAws_queryCreateTemplateCommand = exports.deserializeAws_queryCreateReceiptRuleSetCommand = exports.deserializeAws_queryCreateReceiptRuleCommand = exports.deserializeAws_queryCreateReceiptFilterCommand = exports.deserializeAws_queryCreateCustomVerificationEmailTemplateCommand = exports.deserializeAws_queryCreateConfigurationSetTrackingOptionsCommand = exports.deserializeAws_queryCreateConfigurationSetEventDestinationCommand = exports.deserializeAws_queryCreateConfigurationSetCommand = exports.deserializeAws_queryCloneReceiptRuleSetCommand = exports.serializeAws_queryVerifyEmailIdentityCommand = exports.serializeAws_queryVerifyEmailAddressCommand = exports.serializeAws_queryVerifyDomainIdentityCommand = exports.serializeAws_queryVerifyDomainDkimCommand = exports.serializeAws_queryUpdateTemplateCommand = exports.serializeAws_queryUpdateReceiptRuleCommand = exports.serializeAws_queryUpdateCustomVerificationEmailTemplateCommand = exports.serializeAws_queryUpdateConfigurationSetTrackingOptionsCommand = exports.serializeAws_queryUpdateConfigurationSetSendingEnabledCommand = exports.serializeAws_queryUpdateConfigurationSetReputationMetricsEnabledCommand = exports.serializeAws_queryUpdateConfigurationSetEventDestinationCommand = exports.serializeAws_queryUpdateAccountSendingEnabledCommand = exports.serializeAws_queryTestRenderTemplateCommand = exports.serializeAws_querySetReceiptRulePositionCommand = exports.serializeAws_querySetIdentityNotificationTopicCommand = exports.serializeAws_querySetIdentityMailFromDomainCommand = exports.serializeAws_querySetIdentityHeadersInNotificationsEnabledCommand = exports.serializeAws_querySetIdentityFeedbackForwardingEnabledCommand = exports.serializeAws_querySetIdentityDkimEnabledCommand = exports.serializeAws_querySetActiveReceiptRuleSetCommand = exports.serializeAws_querySendTemplatedEmailCommand = void 0;
exports.deserializeAws_queryVerifyEmailIdentityCommand = exports.deserializeAws_queryVerifyEmailAddressCommand = exports.deserializeAws_queryVerifyDomainIdentityCommand = exports.deserializeAws_queryVerifyDomainDkimCommand = exports.deserializeAws_queryUpdateTemplateCommand = exports.deserializeAws_queryUpdateReceiptRuleCommand = exports.deserializeAws_queryUpdateCustomVerificationEmailTemplateCommand = exports.deserializeAws_queryUpdateConfigurationSetTrackingOptionsCommand = exports.deserializeAws_queryUpdateConfigurationSetSendingEnabledCommand = exports.deserializeAws_queryUpdateConfigurationSetReputationMetricsEnabledCommand = exports.deserializeAws_queryUpdateConfigurationSetEventDestinationCommand = exports.deserializeAws_queryUpdateAccountSendingEnabledCommand = exports.deserializeAws_queryTestRenderTemplateCommand = exports.deserializeAws_querySetReceiptRulePositionCommand = exports.deserializeAws_querySetIdentityNotificationTopicCommand = exports.deserializeAws_querySetIdentityMailFromDomainCommand = exports.deserializeAws_querySetIdentityHeadersInNotificationsEnabledCommand = exports.deserializeAws_querySetIdentityFeedbackForwardingEnabledCommand = exports.deserializeAws_querySetIdentityDkimEnabledCommand = exports.deserializeAws_querySetActiveReceiptRuleSetCommand = exports.deserializeAws_querySendTemplatedEmailCommand = exports.deserializeAws_querySendRawEmailCommand = exports.deserializeAws_querySendEmailCommand = exports.deserializeAws_querySendCustomVerificationEmailCommand = exports.deserializeAws_querySendBulkTemplatedEmailCommand = exports.deserializeAws_querySendBounceCommand = exports.deserializeAws_queryReorderReceiptRuleSetCommand = exports.deserializeAws_queryPutIdentityPolicyCommand = exports.deserializeAws_queryPutConfigurationSetDeliveryOptionsCommand = exports.deserializeAws_queryListVerifiedEmailAddressesCommand = exports.deserializeAws_queryListTemplatesCommand = exports.deserializeAws_queryListReceiptRuleSetsCommand = exports.deserializeAws_queryListReceiptFiltersCommand = exports.deserializeAws_queryListIdentityPoliciesCommand = exports.deserializeAws_queryListIdentitiesCommand = exports.deserializeAws_queryListCustomVerificationEmailTemplatesCommand = exports.deserializeAws_queryListConfigurationSetsCommand = exports.deserializeAws_queryGetTemplateCommand = exports.deserializeAws_queryGetSendStatisticsCommand = exports.deserializeAws_queryGetSendQuotaCommand = exports.deserializeAws_queryGetIdentityVerificationAttributesCommand = exports.deserializeAws_queryGetIdentityPoliciesCommand = void 0;
const protocol_http_1 = require("@aws-sdk/protocol-http");
const smithy_client_1 = require("@aws-sdk/smithy-client");
const entities_1 = require("entities");
const fast_xml_parser_1 = require("fast-xml-parser");
const serializeAws_queryCloneReceiptRuleSetCommand = async (input, context) => {
    const headers = {
        "content-type": "application/x-www-form-urlencoded",
    };
    let body;
    body = buildFormUrlencodedString({
        ...serializeAws_queryCloneReceiptRuleSetRequest(input, context),
        Action: "CloneReceiptRuleSet",
        Version: "2010-12-01",
    });
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
exports.serializeAws_queryCloneReceiptRuleSetCommand = serializeAws_queryCloneReceiptRuleSetCommand;
const serializeAws_queryCreateConfigurationSetCommand = async (input, context) => {
    const headers = {
        "content-type": "application/x-www-form-urlencoded",
    };
    let body;
    body = buildFormUrlencodedString({
        ...serializeAws_queryCreateConfigurationSetRequest(input, context),
        Action: "CreateConfigurationSet",
        Version: "2010-12-01",
    });
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
exports.serializeAws_queryCreateConfigurationSetCommand = serializeAws_queryCreateConfigurationSetCommand;
const serializeAws_queryCreateConfigurationSetEventDestinationCommand = async (input, context) => {
    const headers = {
        "content-type": "application/x-www-form-urlencoded",
    };
    let body;
    body = buildFormUrlencodedString({
        ...serializeAws_queryCreateConfigurationSetEventDestinationRequest(input, context),
        Action: "CreateConfigurationSetEventDestination",
        Version: "2010-12-01",
    });
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
exports.serializeAws_queryCreateConfigurationSetEventDestinationCommand = serializeAws_queryCreateConfigurationSetEventDestinationCommand;
const serializeAws_queryCreateConfigurationSetTrackingOptionsCommand = async (input, context) => {
    const headers = {
        "content-type": "application/x-www-form-urlencoded",
    };
    let body;
    body = buildFormUrlencodedString({
        ...serializeAws_queryCreateConfigurationSetTrackingOptionsRequest(input, context),
        Action: "CreateConfigurationSetTrackingOptions",
        Version: "2010-12-01",
    });
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
exports.serializeAws_queryCreateConfigurationSetTrackingOptionsCommand = serializeAws_queryCreateConfigurationSetTrackingOptionsCommand;
const serializeAws_queryCreateCustomVerificationEmailTemplateCommand = async (input, context) => {
    const headers = {
        "content-type": "application/x-www-form-urlencoded",
    };
    let body;
    body = buildFormUrlencodedString({
        ...serializeAws_queryCreateCustomVerificationEmailTemplateRequest(input, context),
        Action: "CreateCustomVerificationEmailTemplate",
        Version: "2010-12-01",
    });
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
exports.serializeAws_queryCreateCustomVerificationEmailTemplateCommand = serializeAws_queryCreateCustomVerificationEmailTemplateCommand;
const serializeAws_queryCreateReceiptFilterCommand = async (input, context) => {
    const headers = {
        "content-type": "application/x-www-form-urlencoded",
    };
    let body;
    body = buildFormUrlencodedString({
        ...serializeAws_queryCreateReceiptFilterRequest(input, context),
        Action: "CreateReceiptFilter",
        Version: "2010-12-01",
    });
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
exports.serializeAws_queryCreateReceiptFilterCommand = serializeAws_queryCreateReceiptFilterCommand;
const serializeAws_queryCreateReceiptRuleCommand = async (input, context) => {
    const headers = {
        "content-type": "application/x-www-form-urlencoded",
    };
    let body;
    body = buildFormUrlencodedString({
        ...serializeAws_queryCreateReceiptRuleRequest(input, context),
        Action: "CreateReceiptRule",
        Version: "2010-12-01",
    });
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
exports.serializeAws_queryCreateReceiptRuleCommand = serializeAws_queryCreateReceiptRuleCommand;
const serializeAws_queryCreateReceiptRuleSetCommand = async (input, context) => {
    const headers = {
        "content-type": "application/x-www-form-urlencoded",
    };
    let body;
    body = buildFormUrlencodedString({
        ...serializeAws_queryCreateReceiptRuleSetRequest(input, context),
        Action: "CreateReceiptRuleSet",
        Version: "2010-12-01",
    });
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
exports.serializeAws_queryCreateReceiptRuleSetCommand = serializeAws_queryCreateReceiptRuleSetCommand;
const serializeAws_queryCreateTemplateCommand = async (input, context) => {
    const headers = {
        "content-type": "application/x-www-form-urlencoded",
    };
    let body;
    body = buildFormUrlencodedString({
        ...serializeAws_queryCreateTemplateRequest(input, context),
        Action: "CreateTemplate",
        Version: "2010-12-01",
    });
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
exports.serializeAws_queryCreateTemplateCommand = serializeAws_queryCreateTemplateCommand;
const serializeAws_queryDeleteConfigurationSetCommand = async (input, context) => {
    const headers = {
        "content-type": "application/x-www-form-urlencoded",
    };
    let body;
    body = buildFormUrlencodedString({
        ...serializeAws_queryDeleteConfigurationSetRequest(input, context),
        Action: "DeleteConfigurationSet",
        Version: "2010-12-01",
    });
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
exports.serializeAws_queryDeleteConfigurationSetCommand = serializeAws_queryDeleteConfigurationSetCommand;
const serializeAws_queryDeleteConfigurationSetEventDestinationCommand = async (input, context) => {
    const headers = {
        "content-type": "application/x-www-form-urlencoded",
    };
    let body;
    body = buildFormUrlencodedString({
        ...serializeAws_queryDeleteConfigurationSetEventDestinationRequest(input, context),
        Action: "DeleteConfigurationSetEventDestination",
        Version: "2010-12-01",
    });
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
exports.serializeAws_queryDeleteConfigurationSetEventDestinationCommand = serializeAws_queryDeleteConfigurationSetEventDestinationCommand;
const serializeAws_queryDeleteConfigurationSetTrackingOptionsCommand = async (input, context) => {
    const headers = {
        "content-type": "application/x-www-form-urlencoded",
    };
    let body;
    body = buildFormUrlencodedString({
        ...serializeAws_queryDeleteConfigurationSetTrackingOptionsRequest(input, context),
        Action: "DeleteConfigurationSetTrackingOptions",
        Version: "2010-12-01",
    });
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
exports.serializeAws_queryDeleteConfigurationSetTrackingOptionsCommand = serializeAws_queryDeleteConfigurationSetTrackingOptionsCommand;
const serializeAws_queryDeleteCustomVerificationEmailTemplateCommand = async (input, context) => {
    const headers = {
        "content-type": "application/x-www-form-urlencoded",
    };
    let body;
    body = buildFormUrlencodedString({
        ...serializeAws_queryDeleteCustomVerificationEmailTemplateRequest(input, context),
        Action: "DeleteCustomVerificationEmailTemplate",
        Version: "2010-12-01",
    });
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
exports.serializeAws_queryDeleteCustomVerificationEmailTemplateCommand = serializeAws_queryDeleteCustomVerificationEmailTemplateCommand;
const serializeAws_queryDeleteIdentityCommand = async (input, context) => {
    const headers = {
        "content-type": "application/x-www-form-urlencoded",
    };
    let body;
    body = buildFormUrlencodedString({
        ...serializeAws_queryDeleteIdentityRequest(input, context),
        Action: "DeleteIdentity",
        Version: "2010-12-01",
    });
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
exports.serializeAws_queryDeleteIdentityCommand = serializeAws_queryDeleteIdentityCommand;
const serializeAws_queryDeleteIdentityPolicyCommand = async (input, context) => {
    const headers = {
        "content-type": "application/x-www-form-urlencoded",
    };
    let body;
    body = buildFormUrlencodedString({
        ...serializeAws_queryDeleteIdentityPolicyRequest(input, context),
        Action: "DeleteIdentityPolicy",
        Version: "2010-12-01",
    });
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
exports.serializeAws_queryDeleteIdentityPolicyCommand = serializeAws_queryDeleteIdentityPolicyCommand;
const serializeAws_queryDeleteReceiptFilterCommand = async (input, context) => {
    const headers = {
        "content-type": "application/x-www-form-urlencoded",
    };
    let body;
    body = buildFormUrlencodedString({
        ...serializeAws_queryDeleteReceiptFilterRequest(input, context),
        Action: "DeleteReceiptFilter",
        Version: "2010-12-01",
    });
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
exports.serializeAws_queryDeleteReceiptFilterCommand = serializeAws_queryDeleteReceiptFilterCommand;
const serializeAws_queryDeleteReceiptRuleCommand = async (input, context) => {
    const headers = {
        "content-type": "application/x-www-form-urlencoded",
    };
    let body;
    body = buildFormUrlencodedString({
        ...serializeAws_queryDeleteReceiptRuleRequest(input, context),
        Action: "DeleteReceiptRule",
        Version: "2010-12-01",
    });
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
exports.serializeAws_queryDeleteReceiptRuleCommand = serializeAws_queryDeleteReceiptRuleCommand;
const serializeAws_queryDeleteReceiptRuleSetCommand = async (input, context) => {
    const headers = {
        "content-type": "application/x-www-form-urlencoded",
    };
    let body;
    body = buildFormUrlencodedString({
        ...serializeAws_queryDeleteReceiptRuleSetRequest(input, context),
        Action: "DeleteReceiptRuleSet",
        Version: "2010-12-01",
    });
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
exports.serializeAws_queryDeleteReceiptRuleSetCommand = serializeAws_queryDeleteReceiptRuleSetCommand;
const serializeAws_queryDeleteTemplateCommand = async (input, context) => {
    const headers = {
        "content-type": "application/x-www-form-urlencoded",
    };
    let body;
    body = buildFormUrlencodedString({
        ...serializeAws_queryDeleteTemplateRequest(input, context),
        Action: "DeleteTemplate",
        Version: "2010-12-01",
    });
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
exports.serializeAws_queryDeleteTemplateCommand = serializeAws_queryDeleteTemplateCommand;
const serializeAws_queryDeleteVerifiedEmailAddressCommand = async (input, context) => {
    const headers = {
        "content-type": "application/x-www-form-urlencoded",
    };
    let body;
    body = buildFormUrlencodedString({
        ...serializeAws_queryDeleteVerifiedEmailAddressRequest(input, context),
        Action: "DeleteVerifiedEmailAddress",
        Version: "2010-12-01",
    });
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
exports.serializeAws_queryDeleteVerifiedEmailAddressCommand = serializeAws_queryDeleteVerifiedEmailAddressCommand;
const serializeAws_queryDescribeActiveReceiptRuleSetCommand = async (input, context) => {
    const headers = {
        "content-type": "application/x-www-form-urlencoded",
    };
    let body;
    body = buildFormUrlencodedString({
        ...serializeAws_queryDescribeActiveReceiptRuleSetRequest(input, context),
        Action: "DescribeActiveReceiptRuleSet",
        Version: "2010-12-01",
    });
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
exports.serializeAws_queryDescribeActiveReceiptRuleSetCommand = serializeAws_queryDescribeActiveReceiptRuleSetCommand;
const serializeAws_queryDescribeConfigurationSetCommand = async (input, context) => {
    const headers = {
        "content-type": "application/x-www-form-urlencoded",
    };
    let body;
    body = buildFormUrlencodedString({
        ...serializeAws_queryDescribeConfigurationSetRequest(input, context),
        Action: "DescribeConfigurationSet",
        Version: "2010-12-01",
    });
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
exports.serializeAws_queryDescribeConfigurationSetCommand = serializeAws_queryDescribeConfigurationSetCommand;
const serializeAws_queryDescribeReceiptRuleCommand = async (input, context) => {
    const headers = {
        "content-type": "application/x-www-form-urlencoded",
    };
    let body;
    body = buildFormUrlencodedString({
        ...serializeAws_queryDescribeReceiptRuleRequest(input, context),
        Action: "DescribeReceiptRule",
        Version: "2010-12-01",
    });
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
exports.serializeAws_queryDescribeReceiptRuleCommand = serializeAws_queryDescribeReceiptRuleCommand;
const serializeAws_queryDescribeReceiptRuleSetCommand = async (input, context) => {
    const headers = {
        "content-type": "application/x-www-form-urlencoded",
    };
    let body;
    body = buildFormUrlencodedString({
        ...serializeAws_queryDescribeReceiptRuleSetRequest(input, context),
        Action: "DescribeReceiptRuleSet",
        Version: "2010-12-01",
    });
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
exports.serializeAws_queryDescribeReceiptRuleSetCommand = serializeAws_queryDescribeReceiptRuleSetCommand;
const serializeAws_queryGetAccountSendingEnabledCommand = async (input, context) => {
    const headers = {
        "content-type": "application/x-www-form-urlencoded",
    };
    const body = buildFormUrlencodedString({
        Action: "GetAccountSendingEnabled",
        Version: "2010-12-01",
    });
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
exports.serializeAws_queryGetAccountSendingEnabledCommand = serializeAws_queryGetAccountSendingEnabledCommand;
const serializeAws_queryGetCustomVerificationEmailTemplateCommand = async (input, context) => {
    const headers = {
        "content-type": "application/x-www-form-urlencoded",
    };
    let body;
    body = buildFormUrlencodedString({
        ...serializeAws_queryGetCustomVerificationEmailTemplateRequest(input, context),
        Action: "GetCustomVerificationEmailTemplate",
        Version: "2010-12-01",
    });
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
exports.serializeAws_queryGetCustomVerificationEmailTemplateCommand = serializeAws_queryGetCustomVerificationEmailTemplateCommand;
const serializeAws_queryGetIdentityDkimAttributesCommand = async (input, context) => {
    const headers = {
        "content-type": "application/x-www-form-urlencoded",
    };
    let body;
    body = buildFormUrlencodedString({
        ...serializeAws_queryGetIdentityDkimAttributesRequest(input, context),
        Action: "GetIdentityDkimAttributes",
        Version: "2010-12-01",
    });
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
exports.serializeAws_queryGetIdentityDkimAttributesCommand = serializeAws_queryGetIdentityDkimAttributesCommand;
const serializeAws_queryGetIdentityMailFromDomainAttributesCommand = async (input, context) => {
    const headers = {
        "content-type": "application/x-www-form-urlencoded",
    };
    let body;
    body = buildFormUrlencodedString({
        ...serializeAws_queryGetIdentityMailFromDomainAttributesRequest(input, context),
        Action: "GetIdentityMailFromDomainAttributes",
        Version: "2010-12-01",
    });
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
exports.serializeAws_queryGetIdentityMailFromDomainAttributesCommand = serializeAws_queryGetIdentityMailFromDomainAttributesCommand;
const serializeAws_queryGetIdentityNotificationAttributesCommand = async (input, context) => {
    const headers = {
        "content-type": "application/x-www-form-urlencoded",
    };
    let body;
    body = buildFormUrlencodedString({
        ...serializeAws_queryGetIdentityNotificationAttributesRequest(input, context),
        Action: "GetIdentityNotificationAttributes",
        Version: "2010-12-01",
    });
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
exports.serializeAws_queryGetIdentityNotificationAttributesCommand = serializeAws_queryGetIdentityNotificationAttributesCommand;
const serializeAws_queryGetIdentityPoliciesCommand = async (input, context) => {
    const headers = {
        "content-type": "application/x-www-form-urlencoded",
    };
    let body;
    body = buildFormUrlencodedString({
        ...serializeAws_queryGetIdentityPoliciesRequest(input, context),
        Action: "GetIdentityPolicies",
        Version: "2010-12-01",
    });
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
exports.serializeAws_queryGetIdentityPoliciesCommand = serializeAws_queryGetIdentityPoliciesCommand;
const serializeAws_queryGetIdentityVerificationAttributesCommand = async (input, context) => {
    const headers = {
        "content-type": "application/x-www-form-urlencoded",
    };
    let body;
    body = buildFormUrlencodedString({
        ...serializeAws_queryGetIdentityVerificationAttributesRequest(input, context),
        Action: "GetIdentityVerificationAttributes",
        Version: "2010-12-01",
    });
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
exports.serializeAws_queryGetIdentityVerificationAttributesCommand = serializeAws_queryGetIdentityVerificationAttributesCommand;
const serializeAws_queryGetSendQuotaCommand = async (input, context) => {
    const headers = {
        "content-type": "application/x-www-form-urlencoded",
    };
    const body = buildFormUrlencodedString({
        Action: "GetSendQuota",
        Version: "2010-12-01",
    });
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
exports.serializeAws_queryGetSendQuotaCommand = serializeAws_queryGetSendQuotaCommand;
const serializeAws_queryGetSendStatisticsCommand = async (input, context) => {
    const headers = {
        "content-type": "application/x-www-form-urlencoded",
    };
    const body = buildFormUrlencodedString({
        Action: "GetSendStatistics",
        Version: "2010-12-01",
    });
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
exports.serializeAws_queryGetSendStatisticsCommand = serializeAws_queryGetSendStatisticsCommand;
const serializeAws_queryGetTemplateCommand = async (input, context) => {
    const headers = {
        "content-type": "application/x-www-form-urlencoded",
    };
    let body;
    body = buildFormUrlencodedString({
        ...serializeAws_queryGetTemplateRequest(input, context),
        Action: "GetTemplate",
        Version: "2010-12-01",
    });
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
exports.serializeAws_queryGetTemplateCommand = serializeAws_queryGetTemplateCommand;
const serializeAws_queryListConfigurationSetsCommand = async (input, context) => {
    const headers = {
        "content-type": "application/x-www-form-urlencoded",
    };
    let body;
    body = buildFormUrlencodedString({
        ...serializeAws_queryListConfigurationSetsRequest(input, context),
        Action: "ListConfigurationSets",
        Version: "2010-12-01",
    });
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
exports.serializeAws_queryListConfigurationSetsCommand = serializeAws_queryListConfigurationSetsCommand;
const serializeAws_queryListCustomVerificationEmailTemplatesCommand = async (input, context) => {
    const headers = {
        "content-type": "application/x-www-form-urlencoded",
    };
    let body;
    body = buildFormUrlencodedString({
        ...serializeAws_queryListCustomVerificationEmailTemplatesRequest(input, context),
        Action: "ListCustomVerificationEmailTemplates",
        Version: "2010-12-01",
    });
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
exports.serializeAws_queryListCustomVerificationEmailTemplatesCommand = serializeAws_queryListCustomVerificationEmailTemplatesCommand;
const serializeAws_queryListIdentitiesCommand = async (input, context) => {
    const headers = {
        "content-type": "application/x-www-form-urlencoded",
    };
    let body;
    body = buildFormUrlencodedString({
        ...serializeAws_queryListIdentitiesRequest(input, context),
        Action: "ListIdentities",
        Version: "2010-12-01",
    });
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
exports.serializeAws_queryListIdentitiesCommand = serializeAws_queryListIdentitiesCommand;
const serializeAws_queryListIdentityPoliciesCommand = async (input, context) => {
    const headers = {
        "content-type": "application/x-www-form-urlencoded",
    };
    let body;
    body = buildFormUrlencodedString({
        ...serializeAws_queryListIdentityPoliciesRequest(input, context),
        Action: "ListIdentityPolicies",
        Version: "2010-12-01",
    });
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
exports.serializeAws_queryListIdentityPoliciesCommand = serializeAws_queryListIdentityPoliciesCommand;
const serializeAws_queryListReceiptFiltersCommand = async (input, context) => {
    const headers = {
        "content-type": "application/x-www-form-urlencoded",
    };
    let body;
    body = buildFormUrlencodedString({
        ...serializeAws_queryListReceiptFiltersRequest(input, context),
        Action: "ListReceiptFilters",
        Version: "2010-12-01",
    });
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
exports.serializeAws_queryListReceiptFiltersCommand = serializeAws_queryListReceiptFiltersCommand;
const serializeAws_queryListReceiptRuleSetsCommand = async (input, context) => {
    const headers = {
        "content-type": "application/x-www-form-urlencoded",
    };
    let body;
    body = buildFormUrlencodedString({
        ...serializeAws_queryListReceiptRuleSetsRequest(input, context),
        Action: "ListReceiptRuleSets",
        Version: "2010-12-01",
    });
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
exports.serializeAws_queryListReceiptRuleSetsCommand = serializeAws_queryListReceiptRuleSetsCommand;
const serializeAws_queryListTemplatesCommand = async (input, context) => {
    const headers = {
        "content-type": "application/x-www-form-urlencoded",
    };
    let body;
    body = buildFormUrlencodedString({
        ...serializeAws_queryListTemplatesRequest(input, context),
        Action: "ListTemplates",
        Version: "2010-12-01",
    });
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
exports.serializeAws_queryListTemplatesCommand = serializeAws_queryListTemplatesCommand;
const serializeAws_queryListVerifiedEmailAddressesCommand = async (input, context) => {
    const headers = {
        "content-type": "application/x-www-form-urlencoded",
    };
    const body = buildFormUrlencodedString({
        Action: "ListVerifiedEmailAddresses",
        Version: "2010-12-01",
    });
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
exports.serializeAws_queryListVerifiedEmailAddressesCommand = serializeAws_queryListVerifiedEmailAddressesCommand;
const serializeAws_queryPutConfigurationSetDeliveryOptionsCommand = async (input, context) => {
    const headers = {
        "content-type": "application/x-www-form-urlencoded",
    };
    let body;
    body = buildFormUrlencodedString({
        ...serializeAws_queryPutConfigurationSetDeliveryOptionsRequest(input, context),
        Action: "PutConfigurationSetDeliveryOptions",
        Version: "2010-12-01",
    });
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
exports.serializeAws_queryPutConfigurationSetDeliveryOptionsCommand = serializeAws_queryPutConfigurationSetDeliveryOptionsCommand;
const serializeAws_queryPutIdentityPolicyCommand = async (input, context) => {
    const headers = {
        "content-type": "application/x-www-form-urlencoded",
    };
    let body;
    body = buildFormUrlencodedString({
        ...serializeAws_queryPutIdentityPolicyRequest(input, context),
        Action: "PutIdentityPolicy",
        Version: "2010-12-01",
    });
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
exports.serializeAws_queryPutIdentityPolicyCommand = serializeAws_queryPutIdentityPolicyCommand;
const serializeAws_queryReorderReceiptRuleSetCommand = async (input, context) => {
    const headers = {
        "content-type": "application/x-www-form-urlencoded",
    };
    let body;
    body = buildFormUrlencodedString({
        ...serializeAws_queryReorderReceiptRuleSetRequest(input, context),
        Action: "ReorderReceiptRuleSet",
        Version: "2010-12-01",
    });
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
exports.serializeAws_queryReorderReceiptRuleSetCommand = serializeAws_queryReorderReceiptRuleSetCommand;
const serializeAws_querySendBounceCommand = async (input, context) => {
    const headers = {
        "content-type": "application/x-www-form-urlencoded",
    };
    let body;
    body = buildFormUrlencodedString({
        ...serializeAws_querySendBounceRequest(input, context),
        Action: "SendBounce",
        Version: "2010-12-01",
    });
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
exports.serializeAws_querySendBounceCommand = serializeAws_querySendBounceCommand;
const serializeAws_querySendBulkTemplatedEmailCommand = async (input, context) => {
    const headers = {
        "content-type": "application/x-www-form-urlencoded",
    };
    let body;
    body = buildFormUrlencodedString({
        ...serializeAws_querySendBulkTemplatedEmailRequest(input, context),
        Action: "SendBulkTemplatedEmail",
        Version: "2010-12-01",
    });
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
exports.serializeAws_querySendBulkTemplatedEmailCommand = serializeAws_querySendBulkTemplatedEmailCommand;
const serializeAws_querySendCustomVerificationEmailCommand = async (input, context) => {
    const headers = {
        "content-type": "application/x-www-form-urlencoded",
    };
    let body;
    body = buildFormUrlencodedString({
        ...serializeAws_querySendCustomVerificationEmailRequest(input, context),
        Action: "SendCustomVerificationEmail",
        Version: "2010-12-01",
    });
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
exports.serializeAws_querySendCustomVerificationEmailCommand = serializeAws_querySendCustomVerificationEmailCommand;
const serializeAws_querySendEmailCommand = async (input, context) => {
    const headers = {
        "content-type": "application/x-www-form-urlencoded",
    };
    let body;
    body = buildFormUrlencodedString({
        ...serializeAws_querySendEmailRequest(input, context),
        Action: "SendEmail",
        Version: "2010-12-01",
    });
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
exports.serializeAws_querySendEmailCommand = serializeAws_querySendEmailCommand;
const serializeAws_querySendRawEmailCommand = async (input, context) => {
    const headers = {
        "content-type": "application/x-www-form-urlencoded",
    };
    let body;
    body = buildFormUrlencodedString({
        ...serializeAws_querySendRawEmailRequest(input, context),
        Action: "SendRawEmail",
        Version: "2010-12-01",
    });
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
exports.serializeAws_querySendRawEmailCommand = serializeAws_querySendRawEmailCommand;
const serializeAws_querySendTemplatedEmailCommand = async (input, context) => {
    const headers = {
        "content-type": "application/x-www-form-urlencoded",
    };
    let body;
    body = buildFormUrlencodedString({
        ...serializeAws_querySendTemplatedEmailRequest(input, context),
        Action: "SendTemplatedEmail",
        Version: "2010-12-01",
    });
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
exports.serializeAws_querySendTemplatedEmailCommand = serializeAws_querySendTemplatedEmailCommand;
const serializeAws_querySetActiveReceiptRuleSetCommand = async (input, context) => {
    const headers = {
        "content-type": "application/x-www-form-urlencoded",
    };
    let body;
    body = buildFormUrlencodedString({
        ...serializeAws_querySetActiveReceiptRuleSetRequest(input, context),
        Action: "SetActiveReceiptRuleSet",
        Version: "2010-12-01",
    });
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
exports.serializeAws_querySetActiveReceiptRuleSetCommand = serializeAws_querySetActiveReceiptRuleSetCommand;
const serializeAws_querySetIdentityDkimEnabledCommand = async (input, context) => {
    const headers = {
        "content-type": "application/x-www-form-urlencoded",
    };
    let body;
    body = buildFormUrlencodedString({
        ...serializeAws_querySetIdentityDkimEnabledRequest(input, context),
        Action: "SetIdentityDkimEnabled",
        Version: "2010-12-01",
    });
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
exports.serializeAws_querySetIdentityDkimEnabledCommand = serializeAws_querySetIdentityDkimEnabledCommand;
const serializeAws_querySetIdentityFeedbackForwardingEnabledCommand = async (input, context) => {
    const headers = {
        "content-type": "application/x-www-form-urlencoded",
    };
    let body;
    body = buildFormUrlencodedString({
        ...serializeAws_querySetIdentityFeedbackForwardingEnabledRequest(input, context),
        Action: "SetIdentityFeedbackForwardingEnabled",
        Version: "2010-12-01",
    });
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
exports.serializeAws_querySetIdentityFeedbackForwardingEnabledCommand = serializeAws_querySetIdentityFeedbackForwardingEnabledCommand;
const serializeAws_querySetIdentityHeadersInNotificationsEnabledCommand = async (input, context) => {
    const headers = {
        "content-type": "application/x-www-form-urlencoded",
    };
    let body;
    body = buildFormUrlencodedString({
        ...serializeAws_querySetIdentityHeadersInNotificationsEnabledRequest(input, context),
        Action: "SetIdentityHeadersInNotificationsEnabled",
        Version: "2010-12-01",
    });
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
exports.serializeAws_querySetIdentityHeadersInNotificationsEnabledCommand = serializeAws_querySetIdentityHeadersInNotificationsEnabledCommand;
const serializeAws_querySetIdentityMailFromDomainCommand = async (input, context) => {
    const headers = {
        "content-type": "application/x-www-form-urlencoded",
    };
    let body;
    body = buildFormUrlencodedString({
        ...serializeAws_querySetIdentityMailFromDomainRequest(input, context),
        Action: "SetIdentityMailFromDomain",
        Version: "2010-12-01",
    });
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
exports.serializeAws_querySetIdentityMailFromDomainCommand = serializeAws_querySetIdentityMailFromDomainCommand;
const serializeAws_querySetIdentityNotificationTopicCommand = async (input, context) => {
    const headers = {
        "content-type": "application/x-www-form-urlencoded",
    };
    let body;
    body = buildFormUrlencodedString({
        ...serializeAws_querySetIdentityNotificationTopicRequest(input, context),
        Action: "SetIdentityNotificationTopic",
        Version: "2010-12-01",
    });
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
exports.serializeAws_querySetIdentityNotificationTopicCommand = serializeAws_querySetIdentityNotificationTopicCommand;
const serializeAws_querySetReceiptRulePositionCommand = async (input, context) => {
    const headers = {
        "content-type": "application/x-www-form-urlencoded",
    };
    let body;
    body = buildFormUrlencodedString({
        ...serializeAws_querySetReceiptRulePositionRequest(input, context),
        Action: "SetReceiptRulePosition",
        Version: "2010-12-01",
    });
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
exports.serializeAws_querySetReceiptRulePositionCommand = serializeAws_querySetReceiptRulePositionCommand;
const serializeAws_queryTestRenderTemplateCommand = async (input, context) => {
    const headers = {
        "content-type": "application/x-www-form-urlencoded",
    };
    let body;
    body = buildFormUrlencodedString({
        ...serializeAws_queryTestRenderTemplateRequest(input, context),
        Action: "TestRenderTemplate",
        Version: "2010-12-01",
    });
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
exports.serializeAws_queryTestRenderTemplateCommand = serializeAws_queryTestRenderTemplateCommand;
const serializeAws_queryUpdateAccountSendingEnabledCommand = async (input, context) => {
    const headers = {
        "content-type": "application/x-www-form-urlencoded",
    };
    let body;
    body = buildFormUrlencodedString({
        ...serializeAws_queryUpdateAccountSendingEnabledRequest(input, context),
        Action: "UpdateAccountSendingEnabled",
        Version: "2010-12-01",
    });
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
exports.serializeAws_queryUpdateAccountSendingEnabledCommand = serializeAws_queryUpdateAccountSendingEnabledCommand;
const serializeAws_queryUpdateConfigurationSetEventDestinationCommand = async (input, context) => {
    const headers = {
        "content-type": "application/x-www-form-urlencoded",
    };
    let body;
    body = buildFormUrlencodedString({
        ...serializeAws_queryUpdateConfigurationSetEventDestinationRequest(input, context),
        Action: "UpdateConfigurationSetEventDestination",
        Version: "2010-12-01",
    });
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
exports.serializeAws_queryUpdateConfigurationSetEventDestinationCommand = serializeAws_queryUpdateConfigurationSetEventDestinationCommand;
const serializeAws_queryUpdateConfigurationSetReputationMetricsEnabledCommand = async (input, context) => {
    const headers = {
        "content-type": "application/x-www-form-urlencoded",
    };
    let body;
    body = buildFormUrlencodedString({
        ...serializeAws_queryUpdateConfigurationSetReputationMetricsEnabledRequest(input, context),
        Action: "UpdateConfigurationSetReputationMetricsEnabled",
        Version: "2010-12-01",
    });
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
exports.serializeAws_queryUpdateConfigurationSetReputationMetricsEnabledCommand = serializeAws_queryUpdateConfigurationSetReputationMetricsEnabledCommand;
const serializeAws_queryUpdateConfigurationSetSendingEnabledCommand = async (input, context) => {
    const headers = {
        "content-type": "application/x-www-form-urlencoded",
    };
    let body;
    body = buildFormUrlencodedString({
        ...serializeAws_queryUpdateConfigurationSetSendingEnabledRequest(input, context),
        Action: "UpdateConfigurationSetSendingEnabled",
        Version: "2010-12-01",
    });
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
exports.serializeAws_queryUpdateConfigurationSetSendingEnabledCommand = serializeAws_queryUpdateConfigurationSetSendingEnabledCommand;
const serializeAws_queryUpdateConfigurationSetTrackingOptionsCommand = async (input, context) => {
    const headers = {
        "content-type": "application/x-www-form-urlencoded",
    };
    let body;
    body = buildFormUrlencodedString({
        ...serializeAws_queryUpdateConfigurationSetTrackingOptionsRequest(input, context),
        Action: "UpdateConfigurationSetTrackingOptions",
        Version: "2010-12-01",
    });
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
exports.serializeAws_queryUpdateConfigurationSetTrackingOptionsCommand = serializeAws_queryUpdateConfigurationSetTrackingOptionsCommand;
const serializeAws_queryUpdateCustomVerificationEmailTemplateCommand = async (input, context) => {
    const headers = {
        "content-type": "application/x-www-form-urlencoded",
    };
    let body;
    body = buildFormUrlencodedString({
        ...serializeAws_queryUpdateCustomVerificationEmailTemplateRequest(input, context),
        Action: "UpdateCustomVerificationEmailTemplate",
        Version: "2010-12-01",
    });
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
exports.serializeAws_queryUpdateCustomVerificationEmailTemplateCommand = serializeAws_queryUpdateCustomVerificationEmailTemplateCommand;
const serializeAws_queryUpdateReceiptRuleCommand = async (input, context) => {
    const headers = {
        "content-type": "application/x-www-form-urlencoded",
    };
    let body;
    body = buildFormUrlencodedString({
        ...serializeAws_queryUpdateReceiptRuleRequest(input, context),
        Action: "UpdateReceiptRule",
        Version: "2010-12-01",
    });
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
exports.serializeAws_queryUpdateReceiptRuleCommand = serializeAws_queryUpdateReceiptRuleCommand;
const serializeAws_queryUpdateTemplateCommand = async (input, context) => {
    const headers = {
        "content-type": "application/x-www-form-urlencoded",
    };
    let body;
    body = buildFormUrlencodedString({
        ...serializeAws_queryUpdateTemplateRequest(input, context),
        Action: "UpdateTemplate",
        Version: "2010-12-01",
    });
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
exports.serializeAws_queryUpdateTemplateCommand = serializeAws_queryUpdateTemplateCommand;
const serializeAws_queryVerifyDomainDkimCommand = async (input, context) => {
    const headers = {
        "content-type": "application/x-www-form-urlencoded",
    };
    let body;
    body = buildFormUrlencodedString({
        ...serializeAws_queryVerifyDomainDkimRequest(input, context),
        Action: "VerifyDomainDkim",
        Version: "2010-12-01",
    });
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
exports.serializeAws_queryVerifyDomainDkimCommand = serializeAws_queryVerifyDomainDkimCommand;
const serializeAws_queryVerifyDomainIdentityCommand = async (input, context) => {
    const headers = {
        "content-type": "application/x-www-form-urlencoded",
    };
    let body;
    body = buildFormUrlencodedString({
        ...serializeAws_queryVerifyDomainIdentityRequest(input, context),
        Action: "VerifyDomainIdentity",
        Version: "2010-12-01",
    });
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
exports.serializeAws_queryVerifyDomainIdentityCommand = serializeAws_queryVerifyDomainIdentityCommand;
const serializeAws_queryVerifyEmailAddressCommand = async (input, context) => {
    const headers = {
        "content-type": "application/x-www-form-urlencoded",
    };
    let body;
    body = buildFormUrlencodedString({
        ...serializeAws_queryVerifyEmailAddressRequest(input, context),
        Action: "VerifyEmailAddress",
        Version: "2010-12-01",
    });
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
exports.serializeAws_queryVerifyEmailAddressCommand = serializeAws_queryVerifyEmailAddressCommand;
const serializeAws_queryVerifyEmailIdentityCommand = async (input, context) => {
    const headers = {
        "content-type": "application/x-www-form-urlencoded",
    };
    let body;
    body = buildFormUrlencodedString({
        ...serializeAws_queryVerifyEmailIdentityRequest(input, context),
        Action: "VerifyEmailIdentity",
        Version: "2010-12-01",
    });
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
exports.serializeAws_queryVerifyEmailIdentityCommand = serializeAws_queryVerifyEmailIdentityCommand;
const deserializeAws_queryCloneReceiptRuleSetCommand = async (output, context) => {
    if (output.statusCode >= 300) {
        return deserializeAws_queryCloneReceiptRuleSetCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_queryCloneReceiptRuleSetResponse(data.CloneReceiptRuleSetResult, context);
    const response = {
        $metadata: deserializeMetadata(output),
        ...contents,
    };
    return Promise.resolve(response);
};
exports.deserializeAws_queryCloneReceiptRuleSetCommand = deserializeAws_queryCloneReceiptRuleSetCommand;
const deserializeAws_queryCloneReceiptRuleSetCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadQueryErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "AlreadyExistsException":
        case "com.amazonaws.ses#AlreadyExistsException":
            response = {
                ...(await deserializeAws_queryAlreadyExistsExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "LimitExceededException":
        case "com.amazonaws.ses#LimitExceededException":
            response = {
                ...(await deserializeAws_queryLimitExceededExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "RuleSetDoesNotExistException":
        case "com.amazonaws.ses#RuleSetDoesNotExistException":
            response = {
                ...(await deserializeAws_queryRuleSetDoesNotExistExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        default:
            const parsedBody = parsedOutput.body;
            errorCode = parsedBody.Error.code || parsedBody.Error.Code || errorCode;
            response = {
                ...parsedBody.Error,
                name: `${errorCode}`,
                message: parsedBody.Error.message || parsedBody.Error.Message || errorCode,
                $fault: "client",
                $metadata: deserializeMetadata(output),
            };
    }
    const message = response.message || response.Message || errorCode;
    response.message = message;
    delete response.Message;
    return Promise.reject(Object.assign(new Error(message), response));
};
const deserializeAws_queryCreateConfigurationSetCommand = async (output, context) => {
    if (output.statusCode >= 300) {
        return deserializeAws_queryCreateConfigurationSetCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_queryCreateConfigurationSetResponse(data.CreateConfigurationSetResult, context);
    const response = {
        $metadata: deserializeMetadata(output),
        ...contents,
    };
    return Promise.resolve(response);
};
exports.deserializeAws_queryCreateConfigurationSetCommand = deserializeAws_queryCreateConfigurationSetCommand;
const deserializeAws_queryCreateConfigurationSetCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadQueryErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "ConfigurationSetAlreadyExistsException":
        case "com.amazonaws.ses#ConfigurationSetAlreadyExistsException":
            response = {
                ...(await deserializeAws_queryConfigurationSetAlreadyExistsExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InvalidConfigurationSetException":
        case "com.amazonaws.ses#InvalidConfigurationSetException":
            response = {
                ...(await deserializeAws_queryInvalidConfigurationSetExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "LimitExceededException":
        case "com.amazonaws.ses#LimitExceededException":
            response = {
                ...(await deserializeAws_queryLimitExceededExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        default:
            const parsedBody = parsedOutput.body;
            errorCode = parsedBody.Error.code || parsedBody.Error.Code || errorCode;
            response = {
                ...parsedBody.Error,
                name: `${errorCode}`,
                message: parsedBody.Error.message || parsedBody.Error.Message || errorCode,
                $fault: "client",
                $metadata: deserializeMetadata(output),
            };
    }
    const message = response.message || response.Message || errorCode;
    response.message = message;
    delete response.Message;
    return Promise.reject(Object.assign(new Error(message), response));
};
const deserializeAws_queryCreateConfigurationSetEventDestinationCommand = async (output, context) => {
    if (output.statusCode >= 300) {
        return deserializeAws_queryCreateConfigurationSetEventDestinationCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_queryCreateConfigurationSetEventDestinationResponse(data.CreateConfigurationSetEventDestinationResult, context);
    const response = {
        $metadata: deserializeMetadata(output),
        ...contents,
    };
    return Promise.resolve(response);
};
exports.deserializeAws_queryCreateConfigurationSetEventDestinationCommand = deserializeAws_queryCreateConfigurationSetEventDestinationCommand;
const deserializeAws_queryCreateConfigurationSetEventDestinationCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadQueryErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "ConfigurationSetDoesNotExistException":
        case "com.amazonaws.ses#ConfigurationSetDoesNotExistException":
            response = {
                ...(await deserializeAws_queryConfigurationSetDoesNotExistExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "EventDestinationAlreadyExistsException":
        case "com.amazonaws.ses#EventDestinationAlreadyExistsException":
            response = {
                ...(await deserializeAws_queryEventDestinationAlreadyExistsExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InvalidCloudWatchDestinationException":
        case "com.amazonaws.ses#InvalidCloudWatchDestinationException":
            response = {
                ...(await deserializeAws_queryInvalidCloudWatchDestinationExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InvalidFirehoseDestinationException":
        case "com.amazonaws.ses#InvalidFirehoseDestinationException":
            response = {
                ...(await deserializeAws_queryInvalidFirehoseDestinationExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InvalidSNSDestinationException":
        case "com.amazonaws.ses#InvalidSNSDestinationException":
            response = {
                ...(await deserializeAws_queryInvalidSNSDestinationExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "LimitExceededException":
        case "com.amazonaws.ses#LimitExceededException":
            response = {
                ...(await deserializeAws_queryLimitExceededExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        default:
            const parsedBody = parsedOutput.body;
            errorCode = parsedBody.Error.code || parsedBody.Error.Code || errorCode;
            response = {
                ...parsedBody.Error,
                name: `${errorCode}`,
                message: parsedBody.Error.message || parsedBody.Error.Message || errorCode,
                $fault: "client",
                $metadata: deserializeMetadata(output),
            };
    }
    const message = response.message || response.Message || errorCode;
    response.message = message;
    delete response.Message;
    return Promise.reject(Object.assign(new Error(message), response));
};
const deserializeAws_queryCreateConfigurationSetTrackingOptionsCommand = async (output, context) => {
    if (output.statusCode >= 300) {
        return deserializeAws_queryCreateConfigurationSetTrackingOptionsCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_queryCreateConfigurationSetTrackingOptionsResponse(data.CreateConfigurationSetTrackingOptionsResult, context);
    const response = {
        $metadata: deserializeMetadata(output),
        ...contents,
    };
    return Promise.resolve(response);
};
exports.deserializeAws_queryCreateConfigurationSetTrackingOptionsCommand = deserializeAws_queryCreateConfigurationSetTrackingOptionsCommand;
const deserializeAws_queryCreateConfigurationSetTrackingOptionsCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadQueryErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "ConfigurationSetDoesNotExistException":
        case "com.amazonaws.ses#ConfigurationSetDoesNotExistException":
            response = {
                ...(await deserializeAws_queryConfigurationSetDoesNotExistExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InvalidTrackingOptionsException":
        case "com.amazonaws.ses#InvalidTrackingOptionsException":
            response = {
                ...(await deserializeAws_queryInvalidTrackingOptionsExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "TrackingOptionsAlreadyExistsException":
        case "com.amazonaws.ses#TrackingOptionsAlreadyExistsException":
            response = {
                ...(await deserializeAws_queryTrackingOptionsAlreadyExistsExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        default:
            const parsedBody = parsedOutput.body;
            errorCode = parsedBody.Error.code || parsedBody.Error.Code || errorCode;
            response = {
                ...parsedBody.Error,
                name: `${errorCode}`,
                message: parsedBody.Error.message || parsedBody.Error.Message || errorCode,
                $fault: "client",
                $metadata: deserializeMetadata(output),
            };
    }
    const message = response.message || response.Message || errorCode;
    response.message = message;
    delete response.Message;
    return Promise.reject(Object.assign(new Error(message), response));
};
const deserializeAws_queryCreateCustomVerificationEmailTemplateCommand = async (output, context) => {
    if (output.statusCode >= 300) {
        return deserializeAws_queryCreateCustomVerificationEmailTemplateCommandError(output, context);
    }
    await collectBody(output.body, context);
    const response = {
        $metadata: deserializeMetadata(output),
    };
    return Promise.resolve(response);
};
exports.deserializeAws_queryCreateCustomVerificationEmailTemplateCommand = deserializeAws_queryCreateCustomVerificationEmailTemplateCommand;
const deserializeAws_queryCreateCustomVerificationEmailTemplateCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadQueryErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "CustomVerificationEmailInvalidContentException":
        case "com.amazonaws.ses#CustomVerificationEmailInvalidContentException":
            response = {
                ...(await deserializeAws_queryCustomVerificationEmailInvalidContentExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "CustomVerificationEmailTemplateAlreadyExistsException":
        case "com.amazonaws.ses#CustomVerificationEmailTemplateAlreadyExistsException":
            response = {
                ...(await deserializeAws_queryCustomVerificationEmailTemplateAlreadyExistsExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "FromEmailAddressNotVerifiedException":
        case "com.amazonaws.ses#FromEmailAddressNotVerifiedException":
            response = {
                ...(await deserializeAws_queryFromEmailAddressNotVerifiedExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "LimitExceededException":
        case "com.amazonaws.ses#LimitExceededException":
            response = {
                ...(await deserializeAws_queryLimitExceededExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        default:
            const parsedBody = parsedOutput.body;
            errorCode = parsedBody.Error.code || parsedBody.Error.Code || errorCode;
            response = {
                ...parsedBody.Error,
                name: `${errorCode}`,
                message: parsedBody.Error.message || parsedBody.Error.Message || errorCode,
                $fault: "client",
                $metadata: deserializeMetadata(output),
            };
    }
    const message = response.message || response.Message || errorCode;
    response.message = message;
    delete response.Message;
    return Promise.reject(Object.assign(new Error(message), response));
};
const deserializeAws_queryCreateReceiptFilterCommand = async (output, context) => {
    if (output.statusCode >= 300) {
        return deserializeAws_queryCreateReceiptFilterCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_queryCreateReceiptFilterResponse(data.CreateReceiptFilterResult, context);
    const response = {
        $metadata: deserializeMetadata(output),
        ...contents,
    };
    return Promise.resolve(response);
};
exports.deserializeAws_queryCreateReceiptFilterCommand = deserializeAws_queryCreateReceiptFilterCommand;
const deserializeAws_queryCreateReceiptFilterCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadQueryErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "AlreadyExistsException":
        case "com.amazonaws.ses#AlreadyExistsException":
            response = {
                ...(await deserializeAws_queryAlreadyExistsExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "LimitExceededException":
        case "com.amazonaws.ses#LimitExceededException":
            response = {
                ...(await deserializeAws_queryLimitExceededExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        default:
            const parsedBody = parsedOutput.body;
            errorCode = parsedBody.Error.code || parsedBody.Error.Code || errorCode;
            response = {
                ...parsedBody.Error,
                name: `${errorCode}`,
                message: parsedBody.Error.message || parsedBody.Error.Message || errorCode,
                $fault: "client",
                $metadata: deserializeMetadata(output),
            };
    }
    const message = response.message || response.Message || errorCode;
    response.message = message;
    delete response.Message;
    return Promise.reject(Object.assign(new Error(message), response));
};
const deserializeAws_queryCreateReceiptRuleCommand = async (output, context) => {
    if (output.statusCode >= 300) {
        return deserializeAws_queryCreateReceiptRuleCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_queryCreateReceiptRuleResponse(data.CreateReceiptRuleResult, context);
    const response = {
        $metadata: deserializeMetadata(output),
        ...contents,
    };
    return Promise.resolve(response);
};
exports.deserializeAws_queryCreateReceiptRuleCommand = deserializeAws_queryCreateReceiptRuleCommand;
const deserializeAws_queryCreateReceiptRuleCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadQueryErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "AlreadyExistsException":
        case "com.amazonaws.ses#AlreadyExistsException":
            response = {
                ...(await deserializeAws_queryAlreadyExistsExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InvalidLambdaFunctionException":
        case "com.amazonaws.ses#InvalidLambdaFunctionException":
            response = {
                ...(await deserializeAws_queryInvalidLambdaFunctionExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InvalidS3ConfigurationException":
        case "com.amazonaws.ses#InvalidS3ConfigurationException":
            response = {
                ...(await deserializeAws_queryInvalidS3ConfigurationExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InvalidSnsTopicException":
        case "com.amazonaws.ses#InvalidSnsTopicException":
            response = {
                ...(await deserializeAws_queryInvalidSnsTopicExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "LimitExceededException":
        case "com.amazonaws.ses#LimitExceededException":
            response = {
                ...(await deserializeAws_queryLimitExceededExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "RuleDoesNotExistException":
        case "com.amazonaws.ses#RuleDoesNotExistException":
            response = {
                ...(await deserializeAws_queryRuleDoesNotExistExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "RuleSetDoesNotExistException":
        case "com.amazonaws.ses#RuleSetDoesNotExistException":
            response = {
                ...(await deserializeAws_queryRuleSetDoesNotExistExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        default:
            const parsedBody = parsedOutput.body;
            errorCode = parsedBody.Error.code || parsedBody.Error.Code || errorCode;
            response = {
                ...parsedBody.Error,
                name: `${errorCode}`,
                message: parsedBody.Error.message || parsedBody.Error.Message || errorCode,
                $fault: "client",
                $metadata: deserializeMetadata(output),
            };
    }
    const message = response.message || response.Message || errorCode;
    response.message = message;
    delete response.Message;
    return Promise.reject(Object.assign(new Error(message), response));
};
const deserializeAws_queryCreateReceiptRuleSetCommand = async (output, context) => {
    if (output.statusCode >= 300) {
        return deserializeAws_queryCreateReceiptRuleSetCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_queryCreateReceiptRuleSetResponse(data.CreateReceiptRuleSetResult, context);
    const response = {
        $metadata: deserializeMetadata(output),
        ...contents,
    };
    return Promise.resolve(response);
};
exports.deserializeAws_queryCreateReceiptRuleSetCommand = deserializeAws_queryCreateReceiptRuleSetCommand;
const deserializeAws_queryCreateReceiptRuleSetCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadQueryErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "AlreadyExistsException":
        case "com.amazonaws.ses#AlreadyExistsException":
            response = {
                ...(await deserializeAws_queryAlreadyExistsExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "LimitExceededException":
        case "com.amazonaws.ses#LimitExceededException":
            response = {
                ...(await deserializeAws_queryLimitExceededExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        default:
            const parsedBody = parsedOutput.body;
            errorCode = parsedBody.Error.code || parsedBody.Error.Code || errorCode;
            response = {
                ...parsedBody.Error,
                name: `${errorCode}`,
                message: parsedBody.Error.message || parsedBody.Error.Message || errorCode,
                $fault: "client",
                $metadata: deserializeMetadata(output),
            };
    }
    const message = response.message || response.Message || errorCode;
    response.message = message;
    delete response.Message;
    return Promise.reject(Object.assign(new Error(message), response));
};
const deserializeAws_queryCreateTemplateCommand = async (output, context) => {
    if (output.statusCode >= 300) {
        return deserializeAws_queryCreateTemplateCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_queryCreateTemplateResponse(data.CreateTemplateResult, context);
    const response = {
        $metadata: deserializeMetadata(output),
        ...contents,
    };
    return Promise.resolve(response);
};
exports.deserializeAws_queryCreateTemplateCommand = deserializeAws_queryCreateTemplateCommand;
const deserializeAws_queryCreateTemplateCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadQueryErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "AlreadyExistsException":
        case "com.amazonaws.ses#AlreadyExistsException":
            response = {
                ...(await deserializeAws_queryAlreadyExistsExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InvalidTemplateException":
        case "com.amazonaws.ses#InvalidTemplateException":
            response = {
                ...(await deserializeAws_queryInvalidTemplateExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "LimitExceededException":
        case "com.amazonaws.ses#LimitExceededException":
            response = {
                ...(await deserializeAws_queryLimitExceededExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        default:
            const parsedBody = parsedOutput.body;
            errorCode = parsedBody.Error.code || parsedBody.Error.Code || errorCode;
            response = {
                ...parsedBody.Error,
                name: `${errorCode}`,
                message: parsedBody.Error.message || parsedBody.Error.Message || errorCode,
                $fault: "client",
                $metadata: deserializeMetadata(output),
            };
    }
    const message = response.message || response.Message || errorCode;
    response.message = message;
    delete response.Message;
    return Promise.reject(Object.assign(new Error(message), response));
};
const deserializeAws_queryDeleteConfigurationSetCommand = async (output, context) => {
    if (output.statusCode >= 300) {
        return deserializeAws_queryDeleteConfigurationSetCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_queryDeleteConfigurationSetResponse(data.DeleteConfigurationSetResult, context);
    const response = {
        $metadata: deserializeMetadata(output),
        ...contents,
    };
    return Promise.resolve(response);
};
exports.deserializeAws_queryDeleteConfigurationSetCommand = deserializeAws_queryDeleteConfigurationSetCommand;
const deserializeAws_queryDeleteConfigurationSetCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadQueryErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "ConfigurationSetDoesNotExistException":
        case "com.amazonaws.ses#ConfigurationSetDoesNotExistException":
            response = {
                ...(await deserializeAws_queryConfigurationSetDoesNotExistExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        default:
            const parsedBody = parsedOutput.body;
            errorCode = parsedBody.Error.code || parsedBody.Error.Code || errorCode;
            response = {
                ...parsedBody.Error,
                name: `${errorCode}`,
                message: parsedBody.Error.message || parsedBody.Error.Message || errorCode,
                $fault: "client",
                $metadata: deserializeMetadata(output),
            };
    }
    const message = response.message || response.Message || errorCode;
    response.message = message;
    delete response.Message;
    return Promise.reject(Object.assign(new Error(message), response));
};
const deserializeAws_queryDeleteConfigurationSetEventDestinationCommand = async (output, context) => {
    if (output.statusCode >= 300) {
        return deserializeAws_queryDeleteConfigurationSetEventDestinationCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_queryDeleteConfigurationSetEventDestinationResponse(data.DeleteConfigurationSetEventDestinationResult, context);
    const response = {
        $metadata: deserializeMetadata(output),
        ...contents,
    };
    return Promise.resolve(response);
};
exports.deserializeAws_queryDeleteConfigurationSetEventDestinationCommand = deserializeAws_queryDeleteConfigurationSetEventDestinationCommand;
const deserializeAws_queryDeleteConfigurationSetEventDestinationCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadQueryErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "ConfigurationSetDoesNotExistException":
        case "com.amazonaws.ses#ConfigurationSetDoesNotExistException":
            response = {
                ...(await deserializeAws_queryConfigurationSetDoesNotExistExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "EventDestinationDoesNotExistException":
        case "com.amazonaws.ses#EventDestinationDoesNotExistException":
            response = {
                ...(await deserializeAws_queryEventDestinationDoesNotExistExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        default:
            const parsedBody = parsedOutput.body;
            errorCode = parsedBody.Error.code || parsedBody.Error.Code || errorCode;
            response = {
                ...parsedBody.Error,
                name: `${errorCode}`,
                message: parsedBody.Error.message || parsedBody.Error.Message || errorCode,
                $fault: "client",
                $metadata: deserializeMetadata(output),
            };
    }
    const message = response.message || response.Message || errorCode;
    response.message = message;
    delete response.Message;
    return Promise.reject(Object.assign(new Error(message), response));
};
const deserializeAws_queryDeleteConfigurationSetTrackingOptionsCommand = async (output, context) => {
    if (output.statusCode >= 300) {
        return deserializeAws_queryDeleteConfigurationSetTrackingOptionsCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_queryDeleteConfigurationSetTrackingOptionsResponse(data.DeleteConfigurationSetTrackingOptionsResult, context);
    const response = {
        $metadata: deserializeMetadata(output),
        ...contents,
    };
    return Promise.resolve(response);
};
exports.deserializeAws_queryDeleteConfigurationSetTrackingOptionsCommand = deserializeAws_queryDeleteConfigurationSetTrackingOptionsCommand;
const deserializeAws_queryDeleteConfigurationSetTrackingOptionsCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadQueryErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "ConfigurationSetDoesNotExistException":
        case "com.amazonaws.ses#ConfigurationSetDoesNotExistException":
            response = {
                ...(await deserializeAws_queryConfigurationSetDoesNotExistExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "TrackingOptionsDoesNotExistException":
        case "com.amazonaws.ses#TrackingOptionsDoesNotExistException":
            response = {
                ...(await deserializeAws_queryTrackingOptionsDoesNotExistExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        default:
            const parsedBody = parsedOutput.body;
            errorCode = parsedBody.Error.code || parsedBody.Error.Code || errorCode;
            response = {
                ...parsedBody.Error,
                name: `${errorCode}`,
                message: parsedBody.Error.message || parsedBody.Error.Message || errorCode,
                $fault: "client",
                $metadata: deserializeMetadata(output),
            };
    }
    const message = response.message || response.Message || errorCode;
    response.message = message;
    delete response.Message;
    return Promise.reject(Object.assign(new Error(message), response));
};
const deserializeAws_queryDeleteCustomVerificationEmailTemplateCommand = async (output, context) => {
    if (output.statusCode >= 300) {
        return deserializeAws_queryDeleteCustomVerificationEmailTemplateCommandError(output, context);
    }
    await collectBody(output.body, context);
    const response = {
        $metadata: deserializeMetadata(output),
    };
    return Promise.resolve(response);
};
exports.deserializeAws_queryDeleteCustomVerificationEmailTemplateCommand = deserializeAws_queryDeleteCustomVerificationEmailTemplateCommand;
const deserializeAws_queryDeleteCustomVerificationEmailTemplateCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadQueryErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        default:
            const parsedBody = parsedOutput.body;
            errorCode = parsedBody.Error.code || parsedBody.Error.Code || errorCode;
            response = {
                ...parsedBody.Error,
                name: `${errorCode}`,
                message: parsedBody.Error.message || parsedBody.Error.Message || errorCode,
                $fault: "client",
                $metadata: deserializeMetadata(output),
            };
    }
    const message = response.message || response.Message || errorCode;
    response.message = message;
    delete response.Message;
    return Promise.reject(Object.assign(new Error(message), response));
};
const deserializeAws_queryDeleteIdentityCommand = async (output, context) => {
    if (output.statusCode >= 300) {
        return deserializeAws_queryDeleteIdentityCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_queryDeleteIdentityResponse(data.DeleteIdentityResult, context);
    const response = {
        $metadata: deserializeMetadata(output),
        ...contents,
    };
    return Promise.resolve(response);
};
exports.deserializeAws_queryDeleteIdentityCommand = deserializeAws_queryDeleteIdentityCommand;
const deserializeAws_queryDeleteIdentityCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadQueryErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        default:
            const parsedBody = parsedOutput.body;
            errorCode = parsedBody.Error.code || parsedBody.Error.Code || errorCode;
            response = {
                ...parsedBody.Error,
                name: `${errorCode}`,
                message: parsedBody.Error.message || parsedBody.Error.Message || errorCode,
                $fault: "client",
                $metadata: deserializeMetadata(output),
            };
    }
    const message = response.message || response.Message || errorCode;
    response.message = message;
    delete response.Message;
    return Promise.reject(Object.assign(new Error(message), response));
};
const deserializeAws_queryDeleteIdentityPolicyCommand = async (output, context) => {
    if (output.statusCode >= 300) {
        return deserializeAws_queryDeleteIdentityPolicyCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_queryDeleteIdentityPolicyResponse(data.DeleteIdentityPolicyResult, context);
    const response = {
        $metadata: deserializeMetadata(output),
        ...contents,
    };
    return Promise.resolve(response);
};
exports.deserializeAws_queryDeleteIdentityPolicyCommand = deserializeAws_queryDeleteIdentityPolicyCommand;
const deserializeAws_queryDeleteIdentityPolicyCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadQueryErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        default:
            const parsedBody = parsedOutput.body;
            errorCode = parsedBody.Error.code || parsedBody.Error.Code || errorCode;
            response = {
                ...parsedBody.Error,
                name: `${errorCode}`,
                message: parsedBody.Error.message || parsedBody.Error.Message || errorCode,
                $fault: "client",
                $metadata: deserializeMetadata(output),
            };
    }
    const message = response.message || response.Message || errorCode;
    response.message = message;
    delete response.Message;
    return Promise.reject(Object.assign(new Error(message), response));
};
const deserializeAws_queryDeleteReceiptFilterCommand = async (output, context) => {
    if (output.statusCode >= 300) {
        return deserializeAws_queryDeleteReceiptFilterCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_queryDeleteReceiptFilterResponse(data.DeleteReceiptFilterResult, context);
    const response = {
        $metadata: deserializeMetadata(output),
        ...contents,
    };
    return Promise.resolve(response);
};
exports.deserializeAws_queryDeleteReceiptFilterCommand = deserializeAws_queryDeleteReceiptFilterCommand;
const deserializeAws_queryDeleteReceiptFilterCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadQueryErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        default:
            const parsedBody = parsedOutput.body;
            errorCode = parsedBody.Error.code || parsedBody.Error.Code || errorCode;
            response = {
                ...parsedBody.Error,
                name: `${errorCode}`,
                message: parsedBody.Error.message || parsedBody.Error.Message || errorCode,
                $fault: "client",
                $metadata: deserializeMetadata(output),
            };
    }
    const message = response.message || response.Message || errorCode;
    response.message = message;
    delete response.Message;
    return Promise.reject(Object.assign(new Error(message), response));
};
const deserializeAws_queryDeleteReceiptRuleCommand = async (output, context) => {
    if (output.statusCode >= 300) {
        return deserializeAws_queryDeleteReceiptRuleCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_queryDeleteReceiptRuleResponse(data.DeleteReceiptRuleResult, context);
    const response = {
        $metadata: deserializeMetadata(output),
        ...contents,
    };
    return Promise.resolve(response);
};
exports.deserializeAws_queryDeleteReceiptRuleCommand = deserializeAws_queryDeleteReceiptRuleCommand;
const deserializeAws_queryDeleteReceiptRuleCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadQueryErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "RuleSetDoesNotExistException":
        case "com.amazonaws.ses#RuleSetDoesNotExistException":
            response = {
                ...(await deserializeAws_queryRuleSetDoesNotExistExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        default:
            const parsedBody = parsedOutput.body;
            errorCode = parsedBody.Error.code || parsedBody.Error.Code || errorCode;
            response = {
                ...parsedBody.Error,
                name: `${errorCode}`,
                message: parsedBody.Error.message || parsedBody.Error.Message || errorCode,
                $fault: "client",
                $metadata: deserializeMetadata(output),
            };
    }
    const message = response.message || response.Message || errorCode;
    response.message = message;
    delete response.Message;
    return Promise.reject(Object.assign(new Error(message), response));
};
const deserializeAws_queryDeleteReceiptRuleSetCommand = async (output, context) => {
    if (output.statusCode >= 300) {
        return deserializeAws_queryDeleteReceiptRuleSetCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_queryDeleteReceiptRuleSetResponse(data.DeleteReceiptRuleSetResult, context);
    const response = {
        $metadata: deserializeMetadata(output),
        ...contents,
    };
    return Promise.resolve(response);
};
exports.deserializeAws_queryDeleteReceiptRuleSetCommand = deserializeAws_queryDeleteReceiptRuleSetCommand;
const deserializeAws_queryDeleteReceiptRuleSetCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadQueryErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "CannotDeleteException":
        case "com.amazonaws.ses#CannotDeleteException":
            response = {
                ...(await deserializeAws_queryCannotDeleteExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        default:
            const parsedBody = parsedOutput.body;
            errorCode = parsedBody.Error.code || parsedBody.Error.Code || errorCode;
            response = {
                ...parsedBody.Error,
                name: `${errorCode}`,
                message: parsedBody.Error.message || parsedBody.Error.Message || errorCode,
                $fault: "client",
                $metadata: deserializeMetadata(output),
            };
    }
    const message = response.message || response.Message || errorCode;
    response.message = message;
    delete response.Message;
    return Promise.reject(Object.assign(new Error(message), response));
};
const deserializeAws_queryDeleteTemplateCommand = async (output, context) => {
    if (output.statusCode >= 300) {
        return deserializeAws_queryDeleteTemplateCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_queryDeleteTemplateResponse(data.DeleteTemplateResult, context);
    const response = {
        $metadata: deserializeMetadata(output),
        ...contents,
    };
    return Promise.resolve(response);
};
exports.deserializeAws_queryDeleteTemplateCommand = deserializeAws_queryDeleteTemplateCommand;
const deserializeAws_queryDeleteTemplateCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadQueryErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        default:
            const parsedBody = parsedOutput.body;
            errorCode = parsedBody.Error.code || parsedBody.Error.Code || errorCode;
            response = {
                ...parsedBody.Error,
                name: `${errorCode}`,
                message: parsedBody.Error.message || parsedBody.Error.Message || errorCode,
                $fault: "client",
                $metadata: deserializeMetadata(output),
            };
    }
    const message = response.message || response.Message || errorCode;
    response.message = message;
    delete response.Message;
    return Promise.reject(Object.assign(new Error(message), response));
};
const deserializeAws_queryDeleteVerifiedEmailAddressCommand = async (output, context) => {
    if (output.statusCode >= 300) {
        return deserializeAws_queryDeleteVerifiedEmailAddressCommandError(output, context);
    }
    await collectBody(output.body, context);
    const response = {
        $metadata: deserializeMetadata(output),
    };
    return Promise.resolve(response);
};
exports.deserializeAws_queryDeleteVerifiedEmailAddressCommand = deserializeAws_queryDeleteVerifiedEmailAddressCommand;
const deserializeAws_queryDeleteVerifiedEmailAddressCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadQueryErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        default:
            const parsedBody = parsedOutput.body;
            errorCode = parsedBody.Error.code || parsedBody.Error.Code || errorCode;
            response = {
                ...parsedBody.Error,
                name: `${errorCode}`,
                message: parsedBody.Error.message || parsedBody.Error.Message || errorCode,
                $fault: "client",
                $metadata: deserializeMetadata(output),
            };
    }
    const message = response.message || response.Message || errorCode;
    response.message = message;
    delete response.Message;
    return Promise.reject(Object.assign(new Error(message), response));
};
const deserializeAws_queryDescribeActiveReceiptRuleSetCommand = async (output, context) => {
    if (output.statusCode >= 300) {
        return deserializeAws_queryDescribeActiveReceiptRuleSetCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_queryDescribeActiveReceiptRuleSetResponse(data.DescribeActiveReceiptRuleSetResult, context);
    const response = {
        $metadata: deserializeMetadata(output),
        ...contents,
    };
    return Promise.resolve(response);
};
exports.deserializeAws_queryDescribeActiveReceiptRuleSetCommand = deserializeAws_queryDescribeActiveReceiptRuleSetCommand;
const deserializeAws_queryDescribeActiveReceiptRuleSetCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadQueryErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        default:
            const parsedBody = parsedOutput.body;
            errorCode = parsedBody.Error.code || parsedBody.Error.Code || errorCode;
            response = {
                ...parsedBody.Error,
                name: `${errorCode}`,
                message: parsedBody.Error.message || parsedBody.Error.Message || errorCode,
                $fault: "client",
                $metadata: deserializeMetadata(output),
            };
    }
    const message = response.message || response.Message || errorCode;
    response.message = message;
    delete response.Message;
    return Promise.reject(Object.assign(new Error(message), response));
};
const deserializeAws_queryDescribeConfigurationSetCommand = async (output, context) => {
    if (output.statusCode >= 300) {
        return deserializeAws_queryDescribeConfigurationSetCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_queryDescribeConfigurationSetResponse(data.DescribeConfigurationSetResult, context);
    const response = {
        $metadata: deserializeMetadata(output),
        ...contents,
    };
    return Promise.resolve(response);
};
exports.deserializeAws_queryDescribeConfigurationSetCommand = deserializeAws_queryDescribeConfigurationSetCommand;
const deserializeAws_queryDescribeConfigurationSetCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadQueryErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "ConfigurationSetDoesNotExistException":
        case "com.amazonaws.ses#ConfigurationSetDoesNotExistException":
            response = {
                ...(await deserializeAws_queryConfigurationSetDoesNotExistExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        default:
            const parsedBody = parsedOutput.body;
            errorCode = parsedBody.Error.code || parsedBody.Error.Code || errorCode;
            response = {
                ...parsedBody.Error,
                name: `${errorCode}`,
                message: parsedBody.Error.message || parsedBody.Error.Message || errorCode,
                $fault: "client",
                $metadata: deserializeMetadata(output),
            };
    }
    const message = response.message || response.Message || errorCode;
    response.message = message;
    delete response.Message;
    return Promise.reject(Object.assign(new Error(message), response));
};
const deserializeAws_queryDescribeReceiptRuleCommand = async (output, context) => {
    if (output.statusCode >= 300) {
        return deserializeAws_queryDescribeReceiptRuleCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_queryDescribeReceiptRuleResponse(data.DescribeReceiptRuleResult, context);
    const response = {
        $metadata: deserializeMetadata(output),
        ...contents,
    };
    return Promise.resolve(response);
};
exports.deserializeAws_queryDescribeReceiptRuleCommand = deserializeAws_queryDescribeReceiptRuleCommand;
const deserializeAws_queryDescribeReceiptRuleCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadQueryErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "RuleDoesNotExistException":
        case "com.amazonaws.ses#RuleDoesNotExistException":
            response = {
                ...(await deserializeAws_queryRuleDoesNotExistExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "RuleSetDoesNotExistException":
        case "com.amazonaws.ses#RuleSetDoesNotExistException":
            response = {
                ...(await deserializeAws_queryRuleSetDoesNotExistExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        default:
            const parsedBody = parsedOutput.body;
            errorCode = parsedBody.Error.code || parsedBody.Error.Code || errorCode;
            response = {
                ...parsedBody.Error,
                name: `${errorCode}`,
                message: parsedBody.Error.message || parsedBody.Error.Message || errorCode,
                $fault: "client",
                $metadata: deserializeMetadata(output),
            };
    }
    const message = response.message || response.Message || errorCode;
    response.message = message;
    delete response.Message;
    return Promise.reject(Object.assign(new Error(message), response));
};
const deserializeAws_queryDescribeReceiptRuleSetCommand = async (output, context) => {
    if (output.statusCode >= 300) {
        return deserializeAws_queryDescribeReceiptRuleSetCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_queryDescribeReceiptRuleSetResponse(data.DescribeReceiptRuleSetResult, context);
    const response = {
        $metadata: deserializeMetadata(output),
        ...contents,
    };
    return Promise.resolve(response);
};
exports.deserializeAws_queryDescribeReceiptRuleSetCommand = deserializeAws_queryDescribeReceiptRuleSetCommand;
const deserializeAws_queryDescribeReceiptRuleSetCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadQueryErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "RuleSetDoesNotExistException":
        case "com.amazonaws.ses#RuleSetDoesNotExistException":
            response = {
                ...(await deserializeAws_queryRuleSetDoesNotExistExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        default:
            const parsedBody = parsedOutput.body;
            errorCode = parsedBody.Error.code || parsedBody.Error.Code || errorCode;
            response = {
                ...parsedBody.Error,
                name: `${errorCode}`,
                message: parsedBody.Error.message || parsedBody.Error.Message || errorCode,
                $fault: "client",
                $metadata: deserializeMetadata(output),
            };
    }
    const message = response.message || response.Message || errorCode;
    response.message = message;
    delete response.Message;
    return Promise.reject(Object.assign(new Error(message), response));
};
const deserializeAws_queryGetAccountSendingEnabledCommand = async (output, context) => {
    if (output.statusCode >= 300) {
        return deserializeAws_queryGetAccountSendingEnabledCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_queryGetAccountSendingEnabledResponse(data.GetAccountSendingEnabledResult, context);
    const response = {
        $metadata: deserializeMetadata(output),
        ...contents,
    };
    return Promise.resolve(response);
};
exports.deserializeAws_queryGetAccountSendingEnabledCommand = deserializeAws_queryGetAccountSendingEnabledCommand;
const deserializeAws_queryGetAccountSendingEnabledCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadQueryErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        default:
            const parsedBody = parsedOutput.body;
            errorCode = parsedBody.Error.code || parsedBody.Error.Code || errorCode;
            response = {
                ...parsedBody.Error,
                name: `${errorCode}`,
                message: parsedBody.Error.message || parsedBody.Error.Message || errorCode,
                $fault: "client",
                $metadata: deserializeMetadata(output),
            };
    }
    const message = response.message || response.Message || errorCode;
    response.message = message;
    delete response.Message;
    return Promise.reject(Object.assign(new Error(message), response));
};
const deserializeAws_queryGetCustomVerificationEmailTemplateCommand = async (output, context) => {
    if (output.statusCode >= 300) {
        return deserializeAws_queryGetCustomVerificationEmailTemplateCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_queryGetCustomVerificationEmailTemplateResponse(data.GetCustomVerificationEmailTemplateResult, context);
    const response = {
        $metadata: deserializeMetadata(output),
        ...contents,
    };
    return Promise.resolve(response);
};
exports.deserializeAws_queryGetCustomVerificationEmailTemplateCommand = deserializeAws_queryGetCustomVerificationEmailTemplateCommand;
const deserializeAws_queryGetCustomVerificationEmailTemplateCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadQueryErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "CustomVerificationEmailTemplateDoesNotExistException":
        case "com.amazonaws.ses#CustomVerificationEmailTemplateDoesNotExistException":
            response = {
                ...(await deserializeAws_queryCustomVerificationEmailTemplateDoesNotExistExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        default:
            const parsedBody = parsedOutput.body;
            errorCode = parsedBody.Error.code || parsedBody.Error.Code || errorCode;
            response = {
                ...parsedBody.Error,
                name: `${errorCode}`,
                message: parsedBody.Error.message || parsedBody.Error.Message || errorCode,
                $fault: "client",
                $metadata: deserializeMetadata(output),
            };
    }
    const message = response.message || response.Message || errorCode;
    response.message = message;
    delete response.Message;
    return Promise.reject(Object.assign(new Error(message), response));
};
const deserializeAws_queryGetIdentityDkimAttributesCommand = async (output, context) => {
    if (output.statusCode >= 300) {
        return deserializeAws_queryGetIdentityDkimAttributesCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_queryGetIdentityDkimAttributesResponse(data.GetIdentityDkimAttributesResult, context);
    const response = {
        $metadata: deserializeMetadata(output),
        ...contents,
    };
    return Promise.resolve(response);
};
exports.deserializeAws_queryGetIdentityDkimAttributesCommand = deserializeAws_queryGetIdentityDkimAttributesCommand;
const deserializeAws_queryGetIdentityDkimAttributesCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadQueryErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        default:
            const parsedBody = parsedOutput.body;
            errorCode = parsedBody.Error.code || parsedBody.Error.Code || errorCode;
            response = {
                ...parsedBody.Error,
                name: `${errorCode}`,
                message: parsedBody.Error.message || parsedBody.Error.Message || errorCode,
                $fault: "client",
                $metadata: deserializeMetadata(output),
            };
    }
    const message = response.message || response.Message || errorCode;
    response.message = message;
    delete response.Message;
    return Promise.reject(Object.assign(new Error(message), response));
};
const deserializeAws_queryGetIdentityMailFromDomainAttributesCommand = async (output, context) => {
    if (output.statusCode >= 300) {
        return deserializeAws_queryGetIdentityMailFromDomainAttributesCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_queryGetIdentityMailFromDomainAttributesResponse(data.GetIdentityMailFromDomainAttributesResult, context);
    const response = {
        $metadata: deserializeMetadata(output),
        ...contents,
    };
    return Promise.resolve(response);
};
exports.deserializeAws_queryGetIdentityMailFromDomainAttributesCommand = deserializeAws_queryGetIdentityMailFromDomainAttributesCommand;
const deserializeAws_queryGetIdentityMailFromDomainAttributesCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadQueryErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        default:
            const parsedBody = parsedOutput.body;
            errorCode = parsedBody.Error.code || parsedBody.Error.Code || errorCode;
            response = {
                ...parsedBody.Error,
                name: `${errorCode}`,
                message: parsedBody.Error.message || parsedBody.Error.Message || errorCode,
                $fault: "client",
                $metadata: deserializeMetadata(output),
            };
    }
    const message = response.message || response.Message || errorCode;
    response.message = message;
    delete response.Message;
    return Promise.reject(Object.assign(new Error(message), response));
};
const deserializeAws_queryGetIdentityNotificationAttributesCommand = async (output, context) => {
    if (output.statusCode >= 300) {
        return deserializeAws_queryGetIdentityNotificationAttributesCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_queryGetIdentityNotificationAttributesResponse(data.GetIdentityNotificationAttributesResult, context);
    const response = {
        $metadata: deserializeMetadata(output),
        ...contents,
    };
    return Promise.resolve(response);
};
exports.deserializeAws_queryGetIdentityNotificationAttributesCommand = deserializeAws_queryGetIdentityNotificationAttributesCommand;
const deserializeAws_queryGetIdentityNotificationAttributesCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadQueryErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        default:
            const parsedBody = parsedOutput.body;
            errorCode = parsedBody.Error.code || parsedBody.Error.Code || errorCode;
            response = {
                ...parsedBody.Error,
                name: `${errorCode}`,
                message: parsedBody.Error.message || parsedBody.Error.Message || errorCode,
                $fault: "client",
                $metadata: deserializeMetadata(output),
            };
    }
    const message = response.message || response.Message || errorCode;
    response.message = message;
    delete response.Message;
    return Promise.reject(Object.assign(new Error(message), response));
};
const deserializeAws_queryGetIdentityPoliciesCommand = async (output, context) => {
    if (output.statusCode >= 300) {
        return deserializeAws_queryGetIdentityPoliciesCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_queryGetIdentityPoliciesResponse(data.GetIdentityPoliciesResult, context);
    const response = {
        $metadata: deserializeMetadata(output),
        ...contents,
    };
    return Promise.resolve(response);
};
exports.deserializeAws_queryGetIdentityPoliciesCommand = deserializeAws_queryGetIdentityPoliciesCommand;
const deserializeAws_queryGetIdentityPoliciesCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadQueryErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        default:
            const parsedBody = parsedOutput.body;
            errorCode = parsedBody.Error.code || parsedBody.Error.Code || errorCode;
            response = {
                ...parsedBody.Error,
                name: `${errorCode}`,
                message: parsedBody.Error.message || parsedBody.Error.Message || errorCode,
                $fault: "client",
                $metadata: deserializeMetadata(output),
            };
    }
    const message = response.message || response.Message || errorCode;
    response.message = message;
    delete response.Message;
    return Promise.reject(Object.assign(new Error(message), response));
};
const deserializeAws_queryGetIdentityVerificationAttributesCommand = async (output, context) => {
    if (output.statusCode >= 300) {
        return deserializeAws_queryGetIdentityVerificationAttributesCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_queryGetIdentityVerificationAttributesResponse(data.GetIdentityVerificationAttributesResult, context);
    const response = {
        $metadata: deserializeMetadata(output),
        ...contents,
    };
    return Promise.resolve(response);
};
exports.deserializeAws_queryGetIdentityVerificationAttributesCommand = deserializeAws_queryGetIdentityVerificationAttributesCommand;
const deserializeAws_queryGetIdentityVerificationAttributesCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadQueryErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        default:
            const parsedBody = parsedOutput.body;
            errorCode = parsedBody.Error.code || parsedBody.Error.Code || errorCode;
            response = {
                ...parsedBody.Error,
                name: `${errorCode}`,
                message: parsedBody.Error.message || parsedBody.Error.Message || errorCode,
                $fault: "client",
                $metadata: deserializeMetadata(output),
            };
    }
    const message = response.message || response.Message || errorCode;
    response.message = message;
    delete response.Message;
    return Promise.reject(Object.assign(new Error(message), response));
};
const deserializeAws_queryGetSendQuotaCommand = async (output, context) => {
    if (output.statusCode >= 300) {
        return deserializeAws_queryGetSendQuotaCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_queryGetSendQuotaResponse(data.GetSendQuotaResult, context);
    const response = {
        $metadata: deserializeMetadata(output),
        ...contents,
    };
    return Promise.resolve(response);
};
exports.deserializeAws_queryGetSendQuotaCommand = deserializeAws_queryGetSendQuotaCommand;
const deserializeAws_queryGetSendQuotaCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadQueryErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        default:
            const parsedBody = parsedOutput.body;
            errorCode = parsedBody.Error.code || parsedBody.Error.Code || errorCode;
            response = {
                ...parsedBody.Error,
                name: `${errorCode}`,
                message: parsedBody.Error.message || parsedBody.Error.Message || errorCode,
                $fault: "client",
                $metadata: deserializeMetadata(output),
            };
    }
    const message = response.message || response.Message || errorCode;
    response.message = message;
    delete response.Message;
    return Promise.reject(Object.assign(new Error(message), response));
};
const deserializeAws_queryGetSendStatisticsCommand = async (output, context) => {
    if (output.statusCode >= 300) {
        return deserializeAws_queryGetSendStatisticsCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_queryGetSendStatisticsResponse(data.GetSendStatisticsResult, context);
    const response = {
        $metadata: deserializeMetadata(output),
        ...contents,
    };
    return Promise.resolve(response);
};
exports.deserializeAws_queryGetSendStatisticsCommand = deserializeAws_queryGetSendStatisticsCommand;
const deserializeAws_queryGetSendStatisticsCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadQueryErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        default:
            const parsedBody = parsedOutput.body;
            errorCode = parsedBody.Error.code || parsedBody.Error.Code || errorCode;
            response = {
                ...parsedBody.Error,
                name: `${errorCode}`,
                message: parsedBody.Error.message || parsedBody.Error.Message || errorCode,
                $fault: "client",
                $metadata: deserializeMetadata(output),
            };
    }
    const message = response.message || response.Message || errorCode;
    response.message = message;
    delete response.Message;
    return Promise.reject(Object.assign(new Error(message), response));
};
const deserializeAws_queryGetTemplateCommand = async (output, context) => {
    if (output.statusCode >= 300) {
        return deserializeAws_queryGetTemplateCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_queryGetTemplateResponse(data.GetTemplateResult, context);
    const response = {
        $metadata: deserializeMetadata(output),
        ...contents,
    };
    return Promise.resolve(response);
};
exports.deserializeAws_queryGetTemplateCommand = deserializeAws_queryGetTemplateCommand;
const deserializeAws_queryGetTemplateCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadQueryErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "TemplateDoesNotExistException":
        case "com.amazonaws.ses#TemplateDoesNotExistException":
            response = {
                ...(await deserializeAws_queryTemplateDoesNotExistExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        default:
            const parsedBody = parsedOutput.body;
            errorCode = parsedBody.Error.code || parsedBody.Error.Code || errorCode;
            response = {
                ...parsedBody.Error,
                name: `${errorCode}`,
                message: parsedBody.Error.message || parsedBody.Error.Message || errorCode,
                $fault: "client",
                $metadata: deserializeMetadata(output),
            };
    }
    const message = response.message || response.Message || errorCode;
    response.message = message;
    delete response.Message;
    return Promise.reject(Object.assign(new Error(message), response));
};
const deserializeAws_queryListConfigurationSetsCommand = async (output, context) => {
    if (output.statusCode >= 300) {
        return deserializeAws_queryListConfigurationSetsCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_queryListConfigurationSetsResponse(data.ListConfigurationSetsResult, context);
    const response = {
        $metadata: deserializeMetadata(output),
        ...contents,
    };
    return Promise.resolve(response);
};
exports.deserializeAws_queryListConfigurationSetsCommand = deserializeAws_queryListConfigurationSetsCommand;
const deserializeAws_queryListConfigurationSetsCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadQueryErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        default:
            const parsedBody = parsedOutput.body;
            errorCode = parsedBody.Error.code || parsedBody.Error.Code || errorCode;
            response = {
                ...parsedBody.Error,
                name: `${errorCode}`,
                message: parsedBody.Error.message || parsedBody.Error.Message || errorCode,
                $fault: "client",
                $metadata: deserializeMetadata(output),
            };
    }
    const message = response.message || response.Message || errorCode;
    response.message = message;
    delete response.Message;
    return Promise.reject(Object.assign(new Error(message), response));
};
const deserializeAws_queryListCustomVerificationEmailTemplatesCommand = async (output, context) => {
    if (output.statusCode >= 300) {
        return deserializeAws_queryListCustomVerificationEmailTemplatesCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_queryListCustomVerificationEmailTemplatesResponse(data.ListCustomVerificationEmailTemplatesResult, context);
    const response = {
        $metadata: deserializeMetadata(output),
        ...contents,
    };
    return Promise.resolve(response);
};
exports.deserializeAws_queryListCustomVerificationEmailTemplatesCommand = deserializeAws_queryListCustomVerificationEmailTemplatesCommand;
const deserializeAws_queryListCustomVerificationEmailTemplatesCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadQueryErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        default:
            const parsedBody = parsedOutput.body;
            errorCode = parsedBody.Error.code || parsedBody.Error.Code || errorCode;
            response = {
                ...parsedBody.Error,
                name: `${errorCode}`,
                message: parsedBody.Error.message || parsedBody.Error.Message || errorCode,
                $fault: "client",
                $metadata: deserializeMetadata(output),
            };
    }
    const message = response.message || response.Message || errorCode;
    response.message = message;
    delete response.Message;
    return Promise.reject(Object.assign(new Error(message), response));
};
const deserializeAws_queryListIdentitiesCommand = async (output, context) => {
    if (output.statusCode >= 300) {
        return deserializeAws_queryListIdentitiesCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_queryListIdentitiesResponse(data.ListIdentitiesResult, context);
    const response = {
        $metadata: deserializeMetadata(output),
        ...contents,
    };
    return Promise.resolve(response);
};
exports.deserializeAws_queryListIdentitiesCommand = deserializeAws_queryListIdentitiesCommand;
const deserializeAws_queryListIdentitiesCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadQueryErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        default:
            const parsedBody = parsedOutput.body;
            errorCode = parsedBody.Error.code || parsedBody.Error.Code || errorCode;
            response = {
                ...parsedBody.Error,
                name: `${errorCode}`,
                message: parsedBody.Error.message || parsedBody.Error.Message || errorCode,
                $fault: "client",
                $metadata: deserializeMetadata(output),
            };
    }
    const message = response.message || response.Message || errorCode;
    response.message = message;
    delete response.Message;
    return Promise.reject(Object.assign(new Error(message), response));
};
const deserializeAws_queryListIdentityPoliciesCommand = async (output, context) => {
    if (output.statusCode >= 300) {
        return deserializeAws_queryListIdentityPoliciesCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_queryListIdentityPoliciesResponse(data.ListIdentityPoliciesResult, context);
    const response = {
        $metadata: deserializeMetadata(output),
        ...contents,
    };
    return Promise.resolve(response);
};
exports.deserializeAws_queryListIdentityPoliciesCommand = deserializeAws_queryListIdentityPoliciesCommand;
const deserializeAws_queryListIdentityPoliciesCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadQueryErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        default:
            const parsedBody = parsedOutput.body;
            errorCode = parsedBody.Error.code || parsedBody.Error.Code || errorCode;
            response = {
                ...parsedBody.Error,
                name: `${errorCode}`,
                message: parsedBody.Error.message || parsedBody.Error.Message || errorCode,
                $fault: "client",
                $metadata: deserializeMetadata(output),
            };
    }
    const message = response.message || response.Message || errorCode;
    response.message = message;
    delete response.Message;
    return Promise.reject(Object.assign(new Error(message), response));
};
const deserializeAws_queryListReceiptFiltersCommand = async (output, context) => {
    if (output.statusCode >= 300) {
        return deserializeAws_queryListReceiptFiltersCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_queryListReceiptFiltersResponse(data.ListReceiptFiltersResult, context);
    const response = {
        $metadata: deserializeMetadata(output),
        ...contents,
    };
    return Promise.resolve(response);
};
exports.deserializeAws_queryListReceiptFiltersCommand = deserializeAws_queryListReceiptFiltersCommand;
const deserializeAws_queryListReceiptFiltersCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadQueryErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        default:
            const parsedBody = parsedOutput.body;
            errorCode = parsedBody.Error.code || parsedBody.Error.Code || errorCode;
            response = {
                ...parsedBody.Error,
                name: `${errorCode}`,
                message: parsedBody.Error.message || parsedBody.Error.Message || errorCode,
                $fault: "client",
                $metadata: deserializeMetadata(output),
            };
    }
    const message = response.message || response.Message || errorCode;
    response.message = message;
    delete response.Message;
    return Promise.reject(Object.assign(new Error(message), response));
};
const deserializeAws_queryListReceiptRuleSetsCommand = async (output, context) => {
    if (output.statusCode >= 300) {
        return deserializeAws_queryListReceiptRuleSetsCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_queryListReceiptRuleSetsResponse(data.ListReceiptRuleSetsResult, context);
    const response = {
        $metadata: deserializeMetadata(output),
        ...contents,
    };
    return Promise.resolve(response);
};
exports.deserializeAws_queryListReceiptRuleSetsCommand = deserializeAws_queryListReceiptRuleSetsCommand;
const deserializeAws_queryListReceiptRuleSetsCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadQueryErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        default:
            const parsedBody = parsedOutput.body;
            errorCode = parsedBody.Error.code || parsedBody.Error.Code || errorCode;
            response = {
                ...parsedBody.Error,
                name: `${errorCode}`,
                message: parsedBody.Error.message || parsedBody.Error.Message || errorCode,
                $fault: "client",
                $metadata: deserializeMetadata(output),
            };
    }
    const message = response.message || response.Message || errorCode;
    response.message = message;
    delete response.Message;
    return Promise.reject(Object.assign(new Error(message), response));
};
const deserializeAws_queryListTemplatesCommand = async (output, context) => {
    if (output.statusCode >= 300) {
        return deserializeAws_queryListTemplatesCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_queryListTemplatesResponse(data.ListTemplatesResult, context);
    const response = {
        $metadata: deserializeMetadata(output),
        ...contents,
    };
    return Promise.resolve(response);
};
exports.deserializeAws_queryListTemplatesCommand = deserializeAws_queryListTemplatesCommand;
const deserializeAws_queryListTemplatesCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadQueryErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        default:
            const parsedBody = parsedOutput.body;
            errorCode = parsedBody.Error.code || parsedBody.Error.Code || errorCode;
            response = {
                ...parsedBody.Error,
                name: `${errorCode}`,
                message: parsedBody.Error.message || parsedBody.Error.Message || errorCode,
                $fault: "client",
                $metadata: deserializeMetadata(output),
            };
    }
    const message = response.message || response.Message || errorCode;
    response.message = message;
    delete response.Message;
    return Promise.reject(Object.assign(new Error(message), response));
};
const deserializeAws_queryListVerifiedEmailAddressesCommand = async (output, context) => {
    if (output.statusCode >= 300) {
        return deserializeAws_queryListVerifiedEmailAddressesCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_queryListVerifiedEmailAddressesResponse(data.ListVerifiedEmailAddressesResult, context);
    const response = {
        $metadata: deserializeMetadata(output),
        ...contents,
    };
    return Promise.resolve(response);
};
exports.deserializeAws_queryListVerifiedEmailAddressesCommand = deserializeAws_queryListVerifiedEmailAddressesCommand;
const deserializeAws_queryListVerifiedEmailAddressesCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadQueryErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        default:
            const parsedBody = parsedOutput.body;
            errorCode = parsedBody.Error.code || parsedBody.Error.Code || errorCode;
            response = {
                ...parsedBody.Error,
                name: `${errorCode}`,
                message: parsedBody.Error.message || parsedBody.Error.Message || errorCode,
                $fault: "client",
                $metadata: deserializeMetadata(output),
            };
    }
    const message = response.message || response.Message || errorCode;
    response.message = message;
    delete response.Message;
    return Promise.reject(Object.assign(new Error(message), response));
};
const deserializeAws_queryPutConfigurationSetDeliveryOptionsCommand = async (output, context) => {
    if (output.statusCode >= 300) {
        return deserializeAws_queryPutConfigurationSetDeliveryOptionsCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_queryPutConfigurationSetDeliveryOptionsResponse(data.PutConfigurationSetDeliveryOptionsResult, context);
    const response = {
        $metadata: deserializeMetadata(output),
        ...contents,
    };
    return Promise.resolve(response);
};
exports.deserializeAws_queryPutConfigurationSetDeliveryOptionsCommand = deserializeAws_queryPutConfigurationSetDeliveryOptionsCommand;
const deserializeAws_queryPutConfigurationSetDeliveryOptionsCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadQueryErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "ConfigurationSetDoesNotExistException":
        case "com.amazonaws.ses#ConfigurationSetDoesNotExistException":
            response = {
                ...(await deserializeAws_queryConfigurationSetDoesNotExistExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InvalidDeliveryOptionsException":
        case "com.amazonaws.ses#InvalidDeliveryOptionsException":
            response = {
                ...(await deserializeAws_queryInvalidDeliveryOptionsExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        default:
            const parsedBody = parsedOutput.body;
            errorCode = parsedBody.Error.code || parsedBody.Error.Code || errorCode;
            response = {
                ...parsedBody.Error,
                name: `${errorCode}`,
                message: parsedBody.Error.message || parsedBody.Error.Message || errorCode,
                $fault: "client",
                $metadata: deserializeMetadata(output),
            };
    }
    const message = response.message || response.Message || errorCode;
    response.message = message;
    delete response.Message;
    return Promise.reject(Object.assign(new Error(message), response));
};
const deserializeAws_queryPutIdentityPolicyCommand = async (output, context) => {
    if (output.statusCode >= 300) {
        return deserializeAws_queryPutIdentityPolicyCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_queryPutIdentityPolicyResponse(data.PutIdentityPolicyResult, context);
    const response = {
        $metadata: deserializeMetadata(output),
        ...contents,
    };
    return Promise.resolve(response);
};
exports.deserializeAws_queryPutIdentityPolicyCommand = deserializeAws_queryPutIdentityPolicyCommand;
const deserializeAws_queryPutIdentityPolicyCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadQueryErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "InvalidPolicyException":
        case "com.amazonaws.ses#InvalidPolicyException":
            response = {
                ...(await deserializeAws_queryInvalidPolicyExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        default:
            const parsedBody = parsedOutput.body;
            errorCode = parsedBody.Error.code || parsedBody.Error.Code || errorCode;
            response = {
                ...parsedBody.Error,
                name: `${errorCode}`,
                message: parsedBody.Error.message || parsedBody.Error.Message || errorCode,
                $fault: "client",
                $metadata: deserializeMetadata(output),
            };
    }
    const message = response.message || response.Message || errorCode;
    response.message = message;
    delete response.Message;
    return Promise.reject(Object.assign(new Error(message), response));
};
const deserializeAws_queryReorderReceiptRuleSetCommand = async (output, context) => {
    if (output.statusCode >= 300) {
        return deserializeAws_queryReorderReceiptRuleSetCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_queryReorderReceiptRuleSetResponse(data.ReorderReceiptRuleSetResult, context);
    const response = {
        $metadata: deserializeMetadata(output),
        ...contents,
    };
    return Promise.resolve(response);
};
exports.deserializeAws_queryReorderReceiptRuleSetCommand = deserializeAws_queryReorderReceiptRuleSetCommand;
const deserializeAws_queryReorderReceiptRuleSetCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadQueryErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "RuleDoesNotExistException":
        case "com.amazonaws.ses#RuleDoesNotExistException":
            response = {
                ...(await deserializeAws_queryRuleDoesNotExistExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "RuleSetDoesNotExistException":
        case "com.amazonaws.ses#RuleSetDoesNotExistException":
            response = {
                ...(await deserializeAws_queryRuleSetDoesNotExistExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        default:
            const parsedBody = parsedOutput.body;
            errorCode = parsedBody.Error.code || parsedBody.Error.Code || errorCode;
            response = {
                ...parsedBody.Error,
                name: `${errorCode}`,
                message: parsedBody.Error.message || parsedBody.Error.Message || errorCode,
                $fault: "client",
                $metadata: deserializeMetadata(output),
            };
    }
    const message = response.message || response.Message || errorCode;
    response.message = message;
    delete response.Message;
    return Promise.reject(Object.assign(new Error(message), response));
};
const deserializeAws_querySendBounceCommand = async (output, context) => {
    if (output.statusCode >= 300) {
        return deserializeAws_querySendBounceCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_querySendBounceResponse(data.SendBounceResult, context);
    const response = {
        $metadata: deserializeMetadata(output),
        ...contents,
    };
    return Promise.resolve(response);
};
exports.deserializeAws_querySendBounceCommand = deserializeAws_querySendBounceCommand;
const deserializeAws_querySendBounceCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadQueryErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "MessageRejected":
        case "com.amazonaws.ses#MessageRejected":
            response = {
                ...(await deserializeAws_queryMessageRejectedResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        default:
            const parsedBody = parsedOutput.body;
            errorCode = parsedBody.Error.code || parsedBody.Error.Code || errorCode;
            response = {
                ...parsedBody.Error,
                name: `${errorCode}`,
                message: parsedBody.Error.message || parsedBody.Error.Message || errorCode,
                $fault: "client",
                $metadata: deserializeMetadata(output),
            };
    }
    const message = response.message || response.Message || errorCode;
    response.message = message;
    delete response.Message;
    return Promise.reject(Object.assign(new Error(message), response));
};
const deserializeAws_querySendBulkTemplatedEmailCommand = async (output, context) => {
    if (output.statusCode >= 300) {
        return deserializeAws_querySendBulkTemplatedEmailCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_querySendBulkTemplatedEmailResponse(data.SendBulkTemplatedEmailResult, context);
    const response = {
        $metadata: deserializeMetadata(output),
        ...contents,
    };
    return Promise.resolve(response);
};
exports.deserializeAws_querySendBulkTemplatedEmailCommand = deserializeAws_querySendBulkTemplatedEmailCommand;
const deserializeAws_querySendBulkTemplatedEmailCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadQueryErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "AccountSendingPausedException":
        case "com.amazonaws.ses#AccountSendingPausedException":
            response = {
                ...(await deserializeAws_queryAccountSendingPausedExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ConfigurationSetDoesNotExistException":
        case "com.amazonaws.ses#ConfigurationSetDoesNotExistException":
            response = {
                ...(await deserializeAws_queryConfigurationSetDoesNotExistExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ConfigurationSetSendingPausedException":
        case "com.amazonaws.ses#ConfigurationSetSendingPausedException":
            response = {
                ...(await deserializeAws_queryConfigurationSetSendingPausedExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "MailFromDomainNotVerifiedException":
        case "com.amazonaws.ses#MailFromDomainNotVerifiedException":
            response = {
                ...(await deserializeAws_queryMailFromDomainNotVerifiedExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "MessageRejected":
        case "com.amazonaws.ses#MessageRejected":
            response = {
                ...(await deserializeAws_queryMessageRejectedResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "TemplateDoesNotExistException":
        case "com.amazonaws.ses#TemplateDoesNotExistException":
            response = {
                ...(await deserializeAws_queryTemplateDoesNotExistExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        default:
            const parsedBody = parsedOutput.body;
            errorCode = parsedBody.Error.code || parsedBody.Error.Code || errorCode;
            response = {
                ...parsedBody.Error,
                name: `${errorCode}`,
                message: parsedBody.Error.message || parsedBody.Error.Message || errorCode,
                $fault: "client",
                $metadata: deserializeMetadata(output),
            };
    }
    const message = response.message || response.Message || errorCode;
    response.message = message;
    delete response.Message;
    return Promise.reject(Object.assign(new Error(message), response));
};
const deserializeAws_querySendCustomVerificationEmailCommand = async (output, context) => {
    if (output.statusCode >= 300) {
        return deserializeAws_querySendCustomVerificationEmailCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_querySendCustomVerificationEmailResponse(data.SendCustomVerificationEmailResult, context);
    const response = {
        $metadata: deserializeMetadata(output),
        ...contents,
    };
    return Promise.resolve(response);
};
exports.deserializeAws_querySendCustomVerificationEmailCommand = deserializeAws_querySendCustomVerificationEmailCommand;
const deserializeAws_querySendCustomVerificationEmailCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadQueryErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "ConfigurationSetDoesNotExistException":
        case "com.amazonaws.ses#ConfigurationSetDoesNotExistException":
            response = {
                ...(await deserializeAws_queryConfigurationSetDoesNotExistExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "CustomVerificationEmailTemplateDoesNotExistException":
        case "com.amazonaws.ses#CustomVerificationEmailTemplateDoesNotExistException":
            response = {
                ...(await deserializeAws_queryCustomVerificationEmailTemplateDoesNotExistExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "FromEmailAddressNotVerifiedException":
        case "com.amazonaws.ses#FromEmailAddressNotVerifiedException":
            response = {
                ...(await deserializeAws_queryFromEmailAddressNotVerifiedExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "MessageRejected":
        case "com.amazonaws.ses#MessageRejected":
            response = {
                ...(await deserializeAws_queryMessageRejectedResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ProductionAccessNotGrantedException":
        case "com.amazonaws.ses#ProductionAccessNotGrantedException":
            response = {
                ...(await deserializeAws_queryProductionAccessNotGrantedExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        default:
            const parsedBody = parsedOutput.body;
            errorCode = parsedBody.Error.code || parsedBody.Error.Code || errorCode;
            response = {
                ...parsedBody.Error,
                name: `${errorCode}`,
                message: parsedBody.Error.message || parsedBody.Error.Message || errorCode,
                $fault: "client",
                $metadata: deserializeMetadata(output),
            };
    }
    const message = response.message || response.Message || errorCode;
    response.message = message;
    delete response.Message;
    return Promise.reject(Object.assign(new Error(message), response));
};
const deserializeAws_querySendEmailCommand = async (output, context) => {
    if (output.statusCode >= 300) {
        return deserializeAws_querySendEmailCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_querySendEmailResponse(data.SendEmailResult, context);
    const response = {
        $metadata: deserializeMetadata(output),
        ...contents,
    };
    return Promise.resolve(response);
};
exports.deserializeAws_querySendEmailCommand = deserializeAws_querySendEmailCommand;
const deserializeAws_querySendEmailCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadQueryErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "AccountSendingPausedException":
        case "com.amazonaws.ses#AccountSendingPausedException":
            response = {
                ...(await deserializeAws_queryAccountSendingPausedExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ConfigurationSetDoesNotExistException":
        case "com.amazonaws.ses#ConfigurationSetDoesNotExistException":
            response = {
                ...(await deserializeAws_queryConfigurationSetDoesNotExistExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ConfigurationSetSendingPausedException":
        case "com.amazonaws.ses#ConfigurationSetSendingPausedException":
            response = {
                ...(await deserializeAws_queryConfigurationSetSendingPausedExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "MailFromDomainNotVerifiedException":
        case "com.amazonaws.ses#MailFromDomainNotVerifiedException":
            response = {
                ...(await deserializeAws_queryMailFromDomainNotVerifiedExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "MessageRejected":
        case "com.amazonaws.ses#MessageRejected":
            response = {
                ...(await deserializeAws_queryMessageRejectedResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        default:
            const parsedBody = parsedOutput.body;
            errorCode = parsedBody.Error.code || parsedBody.Error.Code || errorCode;
            response = {
                ...parsedBody.Error,
                name: `${errorCode}`,
                message: parsedBody.Error.message || parsedBody.Error.Message || errorCode,
                $fault: "client",
                $metadata: deserializeMetadata(output),
            };
    }
    const message = response.message || response.Message || errorCode;
    response.message = message;
    delete response.Message;
    return Promise.reject(Object.assign(new Error(message), response));
};
const deserializeAws_querySendRawEmailCommand = async (output, context) => {
    if (output.statusCode >= 300) {
        return deserializeAws_querySendRawEmailCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_querySendRawEmailResponse(data.SendRawEmailResult, context);
    const response = {
        $metadata: deserializeMetadata(output),
        ...contents,
    };
    return Promise.resolve(response);
};
exports.deserializeAws_querySendRawEmailCommand = deserializeAws_querySendRawEmailCommand;
const deserializeAws_querySendRawEmailCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadQueryErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "AccountSendingPausedException":
        case "com.amazonaws.ses#AccountSendingPausedException":
            response = {
                ...(await deserializeAws_queryAccountSendingPausedExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ConfigurationSetDoesNotExistException":
        case "com.amazonaws.ses#ConfigurationSetDoesNotExistException":
            response = {
                ...(await deserializeAws_queryConfigurationSetDoesNotExistExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ConfigurationSetSendingPausedException":
        case "com.amazonaws.ses#ConfigurationSetSendingPausedException":
            response = {
                ...(await deserializeAws_queryConfigurationSetSendingPausedExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "MailFromDomainNotVerifiedException":
        case "com.amazonaws.ses#MailFromDomainNotVerifiedException":
            response = {
                ...(await deserializeAws_queryMailFromDomainNotVerifiedExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "MessageRejected":
        case "com.amazonaws.ses#MessageRejected":
            response = {
                ...(await deserializeAws_queryMessageRejectedResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        default:
            const parsedBody = parsedOutput.body;
            errorCode = parsedBody.Error.code || parsedBody.Error.Code || errorCode;
            response = {
                ...parsedBody.Error,
                name: `${errorCode}`,
                message: parsedBody.Error.message || parsedBody.Error.Message || errorCode,
                $fault: "client",
                $metadata: deserializeMetadata(output),
            };
    }
    const message = response.message || response.Message || errorCode;
    response.message = message;
    delete response.Message;
    return Promise.reject(Object.assign(new Error(message), response));
};
const deserializeAws_querySendTemplatedEmailCommand = async (output, context) => {
    if (output.statusCode >= 300) {
        return deserializeAws_querySendTemplatedEmailCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_querySendTemplatedEmailResponse(data.SendTemplatedEmailResult, context);
    const response = {
        $metadata: deserializeMetadata(output),
        ...contents,
    };
    return Promise.resolve(response);
};
exports.deserializeAws_querySendTemplatedEmailCommand = deserializeAws_querySendTemplatedEmailCommand;
const deserializeAws_querySendTemplatedEmailCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadQueryErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "AccountSendingPausedException":
        case "com.amazonaws.ses#AccountSendingPausedException":
            response = {
                ...(await deserializeAws_queryAccountSendingPausedExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ConfigurationSetDoesNotExistException":
        case "com.amazonaws.ses#ConfigurationSetDoesNotExistException":
            response = {
                ...(await deserializeAws_queryConfigurationSetDoesNotExistExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ConfigurationSetSendingPausedException":
        case "com.amazonaws.ses#ConfigurationSetSendingPausedException":
            response = {
                ...(await deserializeAws_queryConfigurationSetSendingPausedExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "MailFromDomainNotVerifiedException":
        case "com.amazonaws.ses#MailFromDomainNotVerifiedException":
            response = {
                ...(await deserializeAws_queryMailFromDomainNotVerifiedExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "MessageRejected":
        case "com.amazonaws.ses#MessageRejected":
            response = {
                ...(await deserializeAws_queryMessageRejectedResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "TemplateDoesNotExistException":
        case "com.amazonaws.ses#TemplateDoesNotExistException":
            response = {
                ...(await deserializeAws_queryTemplateDoesNotExistExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        default:
            const parsedBody = parsedOutput.body;
            errorCode = parsedBody.Error.code || parsedBody.Error.Code || errorCode;
            response = {
                ...parsedBody.Error,
                name: `${errorCode}`,
                message: parsedBody.Error.message || parsedBody.Error.Message || errorCode,
                $fault: "client",
                $metadata: deserializeMetadata(output),
            };
    }
    const message = response.message || response.Message || errorCode;
    response.message = message;
    delete response.Message;
    return Promise.reject(Object.assign(new Error(message), response));
};
const deserializeAws_querySetActiveReceiptRuleSetCommand = async (output, context) => {
    if (output.statusCode >= 300) {
        return deserializeAws_querySetActiveReceiptRuleSetCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_querySetActiveReceiptRuleSetResponse(data.SetActiveReceiptRuleSetResult, context);
    const response = {
        $metadata: deserializeMetadata(output),
        ...contents,
    };
    return Promise.resolve(response);
};
exports.deserializeAws_querySetActiveReceiptRuleSetCommand = deserializeAws_querySetActiveReceiptRuleSetCommand;
const deserializeAws_querySetActiveReceiptRuleSetCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadQueryErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "RuleSetDoesNotExistException":
        case "com.amazonaws.ses#RuleSetDoesNotExistException":
            response = {
                ...(await deserializeAws_queryRuleSetDoesNotExistExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        default:
            const parsedBody = parsedOutput.body;
            errorCode = parsedBody.Error.code || parsedBody.Error.Code || errorCode;
            response = {
                ...parsedBody.Error,
                name: `${errorCode}`,
                message: parsedBody.Error.message || parsedBody.Error.Message || errorCode,
                $fault: "client",
                $metadata: deserializeMetadata(output),
            };
    }
    const message = response.message || response.Message || errorCode;
    response.message = message;
    delete response.Message;
    return Promise.reject(Object.assign(new Error(message), response));
};
const deserializeAws_querySetIdentityDkimEnabledCommand = async (output, context) => {
    if (output.statusCode >= 300) {
        return deserializeAws_querySetIdentityDkimEnabledCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_querySetIdentityDkimEnabledResponse(data.SetIdentityDkimEnabledResult, context);
    const response = {
        $metadata: deserializeMetadata(output),
        ...contents,
    };
    return Promise.resolve(response);
};
exports.deserializeAws_querySetIdentityDkimEnabledCommand = deserializeAws_querySetIdentityDkimEnabledCommand;
const deserializeAws_querySetIdentityDkimEnabledCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadQueryErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        default:
            const parsedBody = parsedOutput.body;
            errorCode = parsedBody.Error.code || parsedBody.Error.Code || errorCode;
            response = {
                ...parsedBody.Error,
                name: `${errorCode}`,
                message: parsedBody.Error.message || parsedBody.Error.Message || errorCode,
                $fault: "client",
                $metadata: deserializeMetadata(output),
            };
    }
    const message = response.message || response.Message || errorCode;
    response.message = message;
    delete response.Message;
    return Promise.reject(Object.assign(new Error(message), response));
};
const deserializeAws_querySetIdentityFeedbackForwardingEnabledCommand = async (output, context) => {
    if (output.statusCode >= 300) {
        return deserializeAws_querySetIdentityFeedbackForwardingEnabledCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_querySetIdentityFeedbackForwardingEnabledResponse(data.SetIdentityFeedbackForwardingEnabledResult, context);
    const response = {
        $metadata: deserializeMetadata(output),
        ...contents,
    };
    return Promise.resolve(response);
};
exports.deserializeAws_querySetIdentityFeedbackForwardingEnabledCommand = deserializeAws_querySetIdentityFeedbackForwardingEnabledCommand;
const deserializeAws_querySetIdentityFeedbackForwardingEnabledCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadQueryErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        default:
            const parsedBody = parsedOutput.body;
            errorCode = parsedBody.Error.code || parsedBody.Error.Code || errorCode;
            response = {
                ...parsedBody.Error,
                name: `${errorCode}`,
                message: parsedBody.Error.message || parsedBody.Error.Message || errorCode,
                $fault: "client",
                $metadata: deserializeMetadata(output),
            };
    }
    const message = response.message || response.Message || errorCode;
    response.message = message;
    delete response.Message;
    return Promise.reject(Object.assign(new Error(message), response));
};
const deserializeAws_querySetIdentityHeadersInNotificationsEnabledCommand = async (output, context) => {
    if (output.statusCode >= 300) {
        return deserializeAws_querySetIdentityHeadersInNotificationsEnabledCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_querySetIdentityHeadersInNotificationsEnabledResponse(data.SetIdentityHeadersInNotificationsEnabledResult, context);
    const response = {
        $metadata: deserializeMetadata(output),
        ...contents,
    };
    return Promise.resolve(response);
};
exports.deserializeAws_querySetIdentityHeadersInNotificationsEnabledCommand = deserializeAws_querySetIdentityHeadersInNotificationsEnabledCommand;
const deserializeAws_querySetIdentityHeadersInNotificationsEnabledCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadQueryErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        default:
            const parsedBody = parsedOutput.body;
            errorCode = parsedBody.Error.code || parsedBody.Error.Code || errorCode;
            response = {
                ...parsedBody.Error,
                name: `${errorCode}`,
                message: parsedBody.Error.message || parsedBody.Error.Message || errorCode,
                $fault: "client",
                $metadata: deserializeMetadata(output),
            };
    }
    const message = response.message || response.Message || errorCode;
    response.message = message;
    delete response.Message;
    return Promise.reject(Object.assign(new Error(message), response));
};
const deserializeAws_querySetIdentityMailFromDomainCommand = async (output, context) => {
    if (output.statusCode >= 300) {
        return deserializeAws_querySetIdentityMailFromDomainCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_querySetIdentityMailFromDomainResponse(data.SetIdentityMailFromDomainResult, context);
    const response = {
        $metadata: deserializeMetadata(output),
        ...contents,
    };
    return Promise.resolve(response);
};
exports.deserializeAws_querySetIdentityMailFromDomainCommand = deserializeAws_querySetIdentityMailFromDomainCommand;
const deserializeAws_querySetIdentityMailFromDomainCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadQueryErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        default:
            const parsedBody = parsedOutput.body;
            errorCode = parsedBody.Error.code || parsedBody.Error.Code || errorCode;
            response = {
                ...parsedBody.Error,
                name: `${errorCode}`,
                message: parsedBody.Error.message || parsedBody.Error.Message || errorCode,
                $fault: "client",
                $metadata: deserializeMetadata(output),
            };
    }
    const message = response.message || response.Message || errorCode;
    response.message = message;
    delete response.Message;
    return Promise.reject(Object.assign(new Error(message), response));
};
const deserializeAws_querySetIdentityNotificationTopicCommand = async (output, context) => {
    if (output.statusCode >= 300) {
        return deserializeAws_querySetIdentityNotificationTopicCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_querySetIdentityNotificationTopicResponse(data.SetIdentityNotificationTopicResult, context);
    const response = {
        $metadata: deserializeMetadata(output),
        ...contents,
    };
    return Promise.resolve(response);
};
exports.deserializeAws_querySetIdentityNotificationTopicCommand = deserializeAws_querySetIdentityNotificationTopicCommand;
const deserializeAws_querySetIdentityNotificationTopicCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadQueryErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        default:
            const parsedBody = parsedOutput.body;
            errorCode = parsedBody.Error.code || parsedBody.Error.Code || errorCode;
            response = {
                ...parsedBody.Error,
                name: `${errorCode}`,
                message: parsedBody.Error.message || parsedBody.Error.Message || errorCode,
                $fault: "client",
                $metadata: deserializeMetadata(output),
            };
    }
    const message = response.message || response.Message || errorCode;
    response.message = message;
    delete response.Message;
    return Promise.reject(Object.assign(new Error(message), response));
};
const deserializeAws_querySetReceiptRulePositionCommand = async (output, context) => {
    if (output.statusCode >= 300) {
        return deserializeAws_querySetReceiptRulePositionCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_querySetReceiptRulePositionResponse(data.SetReceiptRulePositionResult, context);
    const response = {
        $metadata: deserializeMetadata(output),
        ...contents,
    };
    return Promise.resolve(response);
};
exports.deserializeAws_querySetReceiptRulePositionCommand = deserializeAws_querySetReceiptRulePositionCommand;
const deserializeAws_querySetReceiptRulePositionCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadQueryErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "RuleDoesNotExistException":
        case "com.amazonaws.ses#RuleDoesNotExistException":
            response = {
                ...(await deserializeAws_queryRuleDoesNotExistExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "RuleSetDoesNotExistException":
        case "com.amazonaws.ses#RuleSetDoesNotExistException":
            response = {
                ...(await deserializeAws_queryRuleSetDoesNotExistExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        default:
            const parsedBody = parsedOutput.body;
            errorCode = parsedBody.Error.code || parsedBody.Error.Code || errorCode;
            response = {
                ...parsedBody.Error,
                name: `${errorCode}`,
                message: parsedBody.Error.message || parsedBody.Error.Message || errorCode,
                $fault: "client",
                $metadata: deserializeMetadata(output),
            };
    }
    const message = response.message || response.Message || errorCode;
    response.message = message;
    delete response.Message;
    return Promise.reject(Object.assign(new Error(message), response));
};
const deserializeAws_queryTestRenderTemplateCommand = async (output, context) => {
    if (output.statusCode >= 300) {
        return deserializeAws_queryTestRenderTemplateCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_queryTestRenderTemplateResponse(data.TestRenderTemplateResult, context);
    const response = {
        $metadata: deserializeMetadata(output),
        ...contents,
    };
    return Promise.resolve(response);
};
exports.deserializeAws_queryTestRenderTemplateCommand = deserializeAws_queryTestRenderTemplateCommand;
const deserializeAws_queryTestRenderTemplateCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadQueryErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "InvalidRenderingParameterException":
        case "com.amazonaws.ses#InvalidRenderingParameterException":
            response = {
                ...(await deserializeAws_queryInvalidRenderingParameterExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "MissingRenderingAttributeException":
        case "com.amazonaws.ses#MissingRenderingAttributeException":
            response = {
                ...(await deserializeAws_queryMissingRenderingAttributeExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "TemplateDoesNotExistException":
        case "com.amazonaws.ses#TemplateDoesNotExistException":
            response = {
                ...(await deserializeAws_queryTemplateDoesNotExistExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        default:
            const parsedBody = parsedOutput.body;
            errorCode = parsedBody.Error.code || parsedBody.Error.Code || errorCode;
            response = {
                ...parsedBody.Error,
                name: `${errorCode}`,
                message: parsedBody.Error.message || parsedBody.Error.Message || errorCode,
                $fault: "client",
                $metadata: deserializeMetadata(output),
            };
    }
    const message = response.message || response.Message || errorCode;
    response.message = message;
    delete response.Message;
    return Promise.reject(Object.assign(new Error(message), response));
};
const deserializeAws_queryUpdateAccountSendingEnabledCommand = async (output, context) => {
    if (output.statusCode >= 300) {
        return deserializeAws_queryUpdateAccountSendingEnabledCommandError(output, context);
    }
    await collectBody(output.body, context);
    const response = {
        $metadata: deserializeMetadata(output),
    };
    return Promise.resolve(response);
};
exports.deserializeAws_queryUpdateAccountSendingEnabledCommand = deserializeAws_queryUpdateAccountSendingEnabledCommand;
const deserializeAws_queryUpdateAccountSendingEnabledCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadQueryErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        default:
            const parsedBody = parsedOutput.body;
            errorCode = parsedBody.Error.code || parsedBody.Error.Code || errorCode;
            response = {
                ...parsedBody.Error,
                name: `${errorCode}`,
                message: parsedBody.Error.message || parsedBody.Error.Message || errorCode,
                $fault: "client",
                $metadata: deserializeMetadata(output),
            };
    }
    const message = response.message || response.Message || errorCode;
    response.message = message;
    delete response.Message;
    return Promise.reject(Object.assign(new Error(message), response));
};
const deserializeAws_queryUpdateConfigurationSetEventDestinationCommand = async (output, context) => {
    if (output.statusCode >= 300) {
        return deserializeAws_queryUpdateConfigurationSetEventDestinationCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_queryUpdateConfigurationSetEventDestinationResponse(data.UpdateConfigurationSetEventDestinationResult, context);
    const response = {
        $metadata: deserializeMetadata(output),
        ...contents,
    };
    return Promise.resolve(response);
};
exports.deserializeAws_queryUpdateConfigurationSetEventDestinationCommand = deserializeAws_queryUpdateConfigurationSetEventDestinationCommand;
const deserializeAws_queryUpdateConfigurationSetEventDestinationCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadQueryErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "ConfigurationSetDoesNotExistException":
        case "com.amazonaws.ses#ConfigurationSetDoesNotExistException":
            response = {
                ...(await deserializeAws_queryConfigurationSetDoesNotExistExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "EventDestinationDoesNotExistException":
        case "com.amazonaws.ses#EventDestinationDoesNotExistException":
            response = {
                ...(await deserializeAws_queryEventDestinationDoesNotExistExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InvalidCloudWatchDestinationException":
        case "com.amazonaws.ses#InvalidCloudWatchDestinationException":
            response = {
                ...(await deserializeAws_queryInvalidCloudWatchDestinationExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InvalidFirehoseDestinationException":
        case "com.amazonaws.ses#InvalidFirehoseDestinationException":
            response = {
                ...(await deserializeAws_queryInvalidFirehoseDestinationExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InvalidSNSDestinationException":
        case "com.amazonaws.ses#InvalidSNSDestinationException":
            response = {
                ...(await deserializeAws_queryInvalidSNSDestinationExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        default:
            const parsedBody = parsedOutput.body;
            errorCode = parsedBody.Error.code || parsedBody.Error.Code || errorCode;
            response = {
                ...parsedBody.Error,
                name: `${errorCode}`,
                message: parsedBody.Error.message || parsedBody.Error.Message || errorCode,
                $fault: "client",
                $metadata: deserializeMetadata(output),
            };
    }
    const message = response.message || response.Message || errorCode;
    response.message = message;
    delete response.Message;
    return Promise.reject(Object.assign(new Error(message), response));
};
const deserializeAws_queryUpdateConfigurationSetReputationMetricsEnabledCommand = async (output, context) => {
    if (output.statusCode >= 300) {
        return deserializeAws_queryUpdateConfigurationSetReputationMetricsEnabledCommandError(output, context);
    }
    await collectBody(output.body, context);
    const response = {
        $metadata: deserializeMetadata(output),
    };
    return Promise.resolve(response);
};
exports.deserializeAws_queryUpdateConfigurationSetReputationMetricsEnabledCommand = deserializeAws_queryUpdateConfigurationSetReputationMetricsEnabledCommand;
const deserializeAws_queryUpdateConfigurationSetReputationMetricsEnabledCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadQueryErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "ConfigurationSetDoesNotExistException":
        case "com.amazonaws.ses#ConfigurationSetDoesNotExistException":
            response = {
                ...(await deserializeAws_queryConfigurationSetDoesNotExistExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        default:
            const parsedBody = parsedOutput.body;
            errorCode = parsedBody.Error.code || parsedBody.Error.Code || errorCode;
            response = {
                ...parsedBody.Error,
                name: `${errorCode}`,
                message: parsedBody.Error.message || parsedBody.Error.Message || errorCode,
                $fault: "client",
                $metadata: deserializeMetadata(output),
            };
    }
    const message = response.message || response.Message || errorCode;
    response.message = message;
    delete response.Message;
    return Promise.reject(Object.assign(new Error(message), response));
};
const deserializeAws_queryUpdateConfigurationSetSendingEnabledCommand = async (output, context) => {
    if (output.statusCode >= 300) {
        return deserializeAws_queryUpdateConfigurationSetSendingEnabledCommandError(output, context);
    }
    await collectBody(output.body, context);
    const response = {
        $metadata: deserializeMetadata(output),
    };
    return Promise.resolve(response);
};
exports.deserializeAws_queryUpdateConfigurationSetSendingEnabledCommand = deserializeAws_queryUpdateConfigurationSetSendingEnabledCommand;
const deserializeAws_queryUpdateConfigurationSetSendingEnabledCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadQueryErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "ConfigurationSetDoesNotExistException":
        case "com.amazonaws.ses#ConfigurationSetDoesNotExistException":
            response = {
                ...(await deserializeAws_queryConfigurationSetDoesNotExistExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        default:
            const parsedBody = parsedOutput.body;
            errorCode = parsedBody.Error.code || parsedBody.Error.Code || errorCode;
            response = {
                ...parsedBody.Error,
                name: `${errorCode}`,
                message: parsedBody.Error.message || parsedBody.Error.Message || errorCode,
                $fault: "client",
                $metadata: deserializeMetadata(output),
            };
    }
    const message = response.message || response.Message || errorCode;
    response.message = message;
    delete response.Message;
    return Promise.reject(Object.assign(new Error(message), response));
};
const deserializeAws_queryUpdateConfigurationSetTrackingOptionsCommand = async (output, context) => {
    if (output.statusCode >= 300) {
        return deserializeAws_queryUpdateConfigurationSetTrackingOptionsCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_queryUpdateConfigurationSetTrackingOptionsResponse(data.UpdateConfigurationSetTrackingOptionsResult, context);
    const response = {
        $metadata: deserializeMetadata(output),
        ...contents,
    };
    return Promise.resolve(response);
};
exports.deserializeAws_queryUpdateConfigurationSetTrackingOptionsCommand = deserializeAws_queryUpdateConfigurationSetTrackingOptionsCommand;
const deserializeAws_queryUpdateConfigurationSetTrackingOptionsCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadQueryErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "ConfigurationSetDoesNotExistException":
        case "com.amazonaws.ses#ConfigurationSetDoesNotExistException":
            response = {
                ...(await deserializeAws_queryConfigurationSetDoesNotExistExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InvalidTrackingOptionsException":
        case "com.amazonaws.ses#InvalidTrackingOptionsException":
            response = {
                ...(await deserializeAws_queryInvalidTrackingOptionsExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "TrackingOptionsDoesNotExistException":
        case "com.amazonaws.ses#TrackingOptionsDoesNotExistException":
            response = {
                ...(await deserializeAws_queryTrackingOptionsDoesNotExistExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        default:
            const parsedBody = parsedOutput.body;
            errorCode = parsedBody.Error.code || parsedBody.Error.Code || errorCode;
            response = {
                ...parsedBody.Error,
                name: `${errorCode}`,
                message: parsedBody.Error.message || parsedBody.Error.Message || errorCode,
                $fault: "client",
                $metadata: deserializeMetadata(output),
            };
    }
    const message = response.message || response.Message || errorCode;
    response.message = message;
    delete response.Message;
    return Promise.reject(Object.assign(new Error(message), response));
};
const deserializeAws_queryUpdateCustomVerificationEmailTemplateCommand = async (output, context) => {
    if (output.statusCode >= 300) {
        return deserializeAws_queryUpdateCustomVerificationEmailTemplateCommandError(output, context);
    }
    await collectBody(output.body, context);
    const response = {
        $metadata: deserializeMetadata(output),
    };
    return Promise.resolve(response);
};
exports.deserializeAws_queryUpdateCustomVerificationEmailTemplateCommand = deserializeAws_queryUpdateCustomVerificationEmailTemplateCommand;
const deserializeAws_queryUpdateCustomVerificationEmailTemplateCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadQueryErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "CustomVerificationEmailInvalidContentException":
        case "com.amazonaws.ses#CustomVerificationEmailInvalidContentException":
            response = {
                ...(await deserializeAws_queryCustomVerificationEmailInvalidContentExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "CustomVerificationEmailTemplateDoesNotExistException":
        case "com.amazonaws.ses#CustomVerificationEmailTemplateDoesNotExistException":
            response = {
                ...(await deserializeAws_queryCustomVerificationEmailTemplateDoesNotExistExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "FromEmailAddressNotVerifiedException":
        case "com.amazonaws.ses#FromEmailAddressNotVerifiedException":
            response = {
                ...(await deserializeAws_queryFromEmailAddressNotVerifiedExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        default:
            const parsedBody = parsedOutput.body;
            errorCode = parsedBody.Error.code || parsedBody.Error.Code || errorCode;
            response = {
                ...parsedBody.Error,
                name: `${errorCode}`,
                message: parsedBody.Error.message || parsedBody.Error.Message || errorCode,
                $fault: "client",
                $metadata: deserializeMetadata(output),
            };
    }
    const message = response.message || response.Message || errorCode;
    response.message = message;
    delete response.Message;
    return Promise.reject(Object.assign(new Error(message), response));
};
const deserializeAws_queryUpdateReceiptRuleCommand = async (output, context) => {
    if (output.statusCode >= 300) {
        return deserializeAws_queryUpdateReceiptRuleCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_queryUpdateReceiptRuleResponse(data.UpdateReceiptRuleResult, context);
    const response = {
        $metadata: deserializeMetadata(output),
        ...contents,
    };
    return Promise.resolve(response);
};
exports.deserializeAws_queryUpdateReceiptRuleCommand = deserializeAws_queryUpdateReceiptRuleCommand;
const deserializeAws_queryUpdateReceiptRuleCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadQueryErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "InvalidLambdaFunctionException":
        case "com.amazonaws.ses#InvalidLambdaFunctionException":
            response = {
                ...(await deserializeAws_queryInvalidLambdaFunctionExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InvalidS3ConfigurationException":
        case "com.amazonaws.ses#InvalidS3ConfigurationException":
            response = {
                ...(await deserializeAws_queryInvalidS3ConfigurationExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InvalidSnsTopicException":
        case "com.amazonaws.ses#InvalidSnsTopicException":
            response = {
                ...(await deserializeAws_queryInvalidSnsTopicExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "LimitExceededException":
        case "com.amazonaws.ses#LimitExceededException":
            response = {
                ...(await deserializeAws_queryLimitExceededExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "RuleDoesNotExistException":
        case "com.amazonaws.ses#RuleDoesNotExistException":
            response = {
                ...(await deserializeAws_queryRuleDoesNotExistExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "RuleSetDoesNotExistException":
        case "com.amazonaws.ses#RuleSetDoesNotExistException":
            response = {
                ...(await deserializeAws_queryRuleSetDoesNotExistExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        default:
            const parsedBody = parsedOutput.body;
            errorCode = parsedBody.Error.code || parsedBody.Error.Code || errorCode;
            response = {
                ...parsedBody.Error,
                name: `${errorCode}`,
                message: parsedBody.Error.message || parsedBody.Error.Message || errorCode,
                $fault: "client",
                $metadata: deserializeMetadata(output),
            };
    }
    const message = response.message || response.Message || errorCode;
    response.message = message;
    delete response.Message;
    return Promise.reject(Object.assign(new Error(message), response));
};
const deserializeAws_queryUpdateTemplateCommand = async (output, context) => {
    if (output.statusCode >= 300) {
        return deserializeAws_queryUpdateTemplateCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_queryUpdateTemplateResponse(data.UpdateTemplateResult, context);
    const response = {
        $metadata: deserializeMetadata(output),
        ...contents,
    };
    return Promise.resolve(response);
};
exports.deserializeAws_queryUpdateTemplateCommand = deserializeAws_queryUpdateTemplateCommand;
const deserializeAws_queryUpdateTemplateCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadQueryErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "InvalidTemplateException":
        case "com.amazonaws.ses#InvalidTemplateException":
            response = {
                ...(await deserializeAws_queryInvalidTemplateExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "TemplateDoesNotExistException":
        case "com.amazonaws.ses#TemplateDoesNotExistException":
            response = {
                ...(await deserializeAws_queryTemplateDoesNotExistExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        default:
            const parsedBody = parsedOutput.body;
            errorCode = parsedBody.Error.code || parsedBody.Error.Code || errorCode;
            response = {
                ...parsedBody.Error,
                name: `${errorCode}`,
                message: parsedBody.Error.message || parsedBody.Error.Message || errorCode,
                $fault: "client",
                $metadata: deserializeMetadata(output),
            };
    }
    const message = response.message || response.Message || errorCode;
    response.message = message;
    delete response.Message;
    return Promise.reject(Object.assign(new Error(message), response));
};
const deserializeAws_queryVerifyDomainDkimCommand = async (output, context) => {
    if (output.statusCode >= 300) {
        return deserializeAws_queryVerifyDomainDkimCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_queryVerifyDomainDkimResponse(data.VerifyDomainDkimResult, context);
    const response = {
        $metadata: deserializeMetadata(output),
        ...contents,
    };
    return Promise.resolve(response);
};
exports.deserializeAws_queryVerifyDomainDkimCommand = deserializeAws_queryVerifyDomainDkimCommand;
const deserializeAws_queryVerifyDomainDkimCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadQueryErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        default:
            const parsedBody = parsedOutput.body;
            errorCode = parsedBody.Error.code || parsedBody.Error.Code || errorCode;
            response = {
                ...parsedBody.Error,
                name: `${errorCode}`,
                message: parsedBody.Error.message || parsedBody.Error.Message || errorCode,
                $fault: "client",
                $metadata: deserializeMetadata(output),
            };
    }
    const message = response.message || response.Message || errorCode;
    response.message = message;
    delete response.Message;
    return Promise.reject(Object.assign(new Error(message), response));
};
const deserializeAws_queryVerifyDomainIdentityCommand = async (output, context) => {
    if (output.statusCode >= 300) {
        return deserializeAws_queryVerifyDomainIdentityCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_queryVerifyDomainIdentityResponse(data.VerifyDomainIdentityResult, context);
    const response = {
        $metadata: deserializeMetadata(output),
        ...contents,
    };
    return Promise.resolve(response);
};
exports.deserializeAws_queryVerifyDomainIdentityCommand = deserializeAws_queryVerifyDomainIdentityCommand;
const deserializeAws_queryVerifyDomainIdentityCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadQueryErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        default:
            const parsedBody = parsedOutput.body;
            errorCode = parsedBody.Error.code || parsedBody.Error.Code || errorCode;
            response = {
                ...parsedBody.Error,
                name: `${errorCode}`,
                message: parsedBody.Error.message || parsedBody.Error.Message || errorCode,
                $fault: "client",
                $metadata: deserializeMetadata(output),
            };
    }
    const message = response.message || response.Message || errorCode;
    response.message = message;
    delete response.Message;
    return Promise.reject(Object.assign(new Error(message), response));
};
const deserializeAws_queryVerifyEmailAddressCommand = async (output, context) => {
    if (output.statusCode >= 300) {
        return deserializeAws_queryVerifyEmailAddressCommandError(output, context);
    }
    await collectBody(output.body, context);
    const response = {
        $metadata: deserializeMetadata(output),
    };
    return Promise.resolve(response);
};
exports.deserializeAws_queryVerifyEmailAddressCommand = deserializeAws_queryVerifyEmailAddressCommand;
const deserializeAws_queryVerifyEmailAddressCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadQueryErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        default:
            const parsedBody = parsedOutput.body;
            errorCode = parsedBody.Error.code || parsedBody.Error.Code || errorCode;
            response = {
                ...parsedBody.Error,
                name: `${errorCode}`,
                message: parsedBody.Error.message || parsedBody.Error.Message || errorCode,
                $fault: "client",
                $metadata: deserializeMetadata(output),
            };
    }
    const message = response.message || response.Message || errorCode;
    response.message = message;
    delete response.Message;
    return Promise.reject(Object.assign(new Error(message), response));
};
const deserializeAws_queryVerifyEmailIdentityCommand = async (output, context) => {
    if (output.statusCode >= 300) {
        return deserializeAws_queryVerifyEmailIdentityCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_queryVerifyEmailIdentityResponse(data.VerifyEmailIdentityResult, context);
    const response = {
        $metadata: deserializeMetadata(output),
        ...contents,
    };
    return Promise.resolve(response);
};
exports.deserializeAws_queryVerifyEmailIdentityCommand = deserializeAws_queryVerifyEmailIdentityCommand;
const deserializeAws_queryVerifyEmailIdentityCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadQueryErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        default:
            const parsedBody = parsedOutput.body;
            errorCode = parsedBody.Error.code || parsedBody.Error.Code || errorCode;
            response = {
                ...parsedBody.Error,
                name: `${errorCode}`,
                message: parsedBody.Error.message || parsedBody.Error.Message || errorCode,
                $fault: "client",
                $metadata: deserializeMetadata(output),
            };
    }
    const message = response.message || response.Message || errorCode;
    response.message = message;
    delete response.Message;
    return Promise.reject(Object.assign(new Error(message), response));
};
const deserializeAws_queryAccountSendingPausedExceptionResponse = async (parsedOutput, context) => {
    const body = parsedOutput.body;
    const deserialized = deserializeAws_queryAccountSendingPausedException(body.Error, context);
    const contents = {
        name: "AccountSendingPausedException",
        $fault: "client",
        $metadata: deserializeMetadata(parsedOutput),
        ...deserialized,
    };
    return contents;
};
const deserializeAws_queryAlreadyExistsExceptionResponse = async (parsedOutput, context) => {
    const body = parsedOutput.body;
    const deserialized = deserializeAws_queryAlreadyExistsException(body.Error, context);
    const contents = {
        name: "AlreadyExistsException",
        $fault: "client",
        $metadata: deserializeMetadata(parsedOutput),
        ...deserialized,
    };
    return contents;
};
const deserializeAws_queryCannotDeleteExceptionResponse = async (parsedOutput, context) => {
    const body = parsedOutput.body;
    const deserialized = deserializeAws_queryCannotDeleteException(body.Error, context);
    const contents = {
        name: "CannotDeleteException",
        $fault: "client",
        $metadata: deserializeMetadata(parsedOutput),
        ...deserialized,
    };
    return contents;
};
const deserializeAws_queryConfigurationSetAlreadyExistsExceptionResponse = async (parsedOutput, context) => {
    const body = parsedOutput.body;
    const deserialized = deserializeAws_queryConfigurationSetAlreadyExistsException(body.Error, context);
    const contents = {
        name: "ConfigurationSetAlreadyExistsException",
        $fault: "client",
        $metadata: deserializeMetadata(parsedOutput),
        ...deserialized,
    };
    return contents;
};
const deserializeAws_queryConfigurationSetDoesNotExistExceptionResponse = async (parsedOutput, context) => {
    const body = parsedOutput.body;
    const deserialized = deserializeAws_queryConfigurationSetDoesNotExistException(body.Error, context);
    const contents = {
        name: "ConfigurationSetDoesNotExistException",
        $fault: "client",
        $metadata: deserializeMetadata(parsedOutput),
        ...deserialized,
    };
    return contents;
};
const deserializeAws_queryConfigurationSetSendingPausedExceptionResponse = async (parsedOutput, context) => {
    const body = parsedOutput.body;
    const deserialized = deserializeAws_queryConfigurationSetSendingPausedException(body.Error, context);
    const contents = {
        name: "ConfigurationSetSendingPausedException",
        $fault: "client",
        $metadata: deserializeMetadata(parsedOutput),
        ...deserialized,
    };
    return contents;
};
const deserializeAws_queryCustomVerificationEmailInvalidContentExceptionResponse = async (parsedOutput, context) => {
    const body = parsedOutput.body;
    const deserialized = deserializeAws_queryCustomVerificationEmailInvalidContentException(body.Error, context);
    const contents = {
        name: "CustomVerificationEmailInvalidContentException",
        $fault: "client",
        $metadata: deserializeMetadata(parsedOutput),
        ...deserialized,
    };
    return contents;
};
const deserializeAws_queryCustomVerificationEmailTemplateAlreadyExistsExceptionResponse = async (parsedOutput, context) => {
    const body = parsedOutput.body;
    const deserialized = deserializeAws_queryCustomVerificationEmailTemplateAlreadyExistsException(body.Error, context);
    const contents = {
        name: "CustomVerificationEmailTemplateAlreadyExistsException",
        $fault: "client",
        $metadata: deserializeMetadata(parsedOutput),
        ...deserialized,
    };
    return contents;
};
const deserializeAws_queryCustomVerificationEmailTemplateDoesNotExistExceptionResponse = async (parsedOutput, context) => {
    const body = parsedOutput.body;
    const deserialized = deserializeAws_queryCustomVerificationEmailTemplateDoesNotExistException(body.Error, context);
    const contents = {
        name: "CustomVerificationEmailTemplateDoesNotExistException",
        $fault: "client",
        $metadata: deserializeMetadata(parsedOutput),
        ...deserialized,
    };
    return contents;
};
const deserializeAws_queryEventDestinationAlreadyExistsExceptionResponse = async (parsedOutput, context) => {
    const body = parsedOutput.body;
    const deserialized = deserializeAws_queryEventDestinationAlreadyExistsException(body.Error, context);
    const contents = {
        name: "EventDestinationAlreadyExistsException",
        $fault: "client",
        $metadata: deserializeMetadata(parsedOutput),
        ...deserialized,
    };
    return contents;
};
const deserializeAws_queryEventDestinationDoesNotExistExceptionResponse = async (parsedOutput, context) => {
    const body = parsedOutput.body;
    const deserialized = deserializeAws_queryEventDestinationDoesNotExistException(body.Error, context);
    const contents = {
        name: "EventDestinationDoesNotExistException",
        $fault: "client",
        $metadata: deserializeMetadata(parsedOutput),
        ...deserialized,
    };
    return contents;
};
const deserializeAws_queryFromEmailAddressNotVerifiedExceptionResponse = async (parsedOutput, context) => {
    const body = parsedOutput.body;
    const deserialized = deserializeAws_queryFromEmailAddressNotVerifiedException(body.Error, context);
    const contents = {
        name: "FromEmailAddressNotVerifiedException",
        $fault: "client",
        $metadata: deserializeMetadata(parsedOutput),
        ...deserialized,
    };
    return contents;
};
const deserializeAws_queryInvalidCloudWatchDestinationExceptionResponse = async (parsedOutput, context) => {
    const body = parsedOutput.body;
    const deserialized = deserializeAws_queryInvalidCloudWatchDestinationException(body.Error, context);
    const contents = {
        name: "InvalidCloudWatchDestinationException",
        $fault: "client",
        $metadata: deserializeMetadata(parsedOutput),
        ...deserialized,
    };
    return contents;
};
const deserializeAws_queryInvalidConfigurationSetExceptionResponse = async (parsedOutput, context) => {
    const body = parsedOutput.body;
    const deserialized = deserializeAws_queryInvalidConfigurationSetException(body.Error, context);
    const contents = {
        name: "InvalidConfigurationSetException",
        $fault: "client",
        $metadata: deserializeMetadata(parsedOutput),
        ...deserialized,
    };
    return contents;
};
const deserializeAws_queryInvalidDeliveryOptionsExceptionResponse = async (parsedOutput, context) => {
    const body = parsedOutput.body;
    const deserialized = deserializeAws_queryInvalidDeliveryOptionsException(body.Error, context);
    const contents = {
        name: "InvalidDeliveryOptionsException",
        $fault: "client",
        $metadata: deserializeMetadata(parsedOutput),
        ...deserialized,
    };
    return contents;
};
const deserializeAws_queryInvalidFirehoseDestinationExceptionResponse = async (parsedOutput, context) => {
    const body = parsedOutput.body;
    const deserialized = deserializeAws_queryInvalidFirehoseDestinationException(body.Error, context);
    const contents = {
        name: "InvalidFirehoseDestinationException",
        $fault: "client",
        $metadata: deserializeMetadata(parsedOutput),
        ...deserialized,
    };
    return contents;
};
const deserializeAws_queryInvalidLambdaFunctionExceptionResponse = async (parsedOutput, context) => {
    const body = parsedOutput.body;
    const deserialized = deserializeAws_queryInvalidLambdaFunctionException(body.Error, context);
    const contents = {
        name: "InvalidLambdaFunctionException",
        $fault: "client",
        $metadata: deserializeMetadata(parsedOutput),
        ...deserialized,
    };
    return contents;
};
const deserializeAws_queryInvalidPolicyExceptionResponse = async (parsedOutput, context) => {
    const body = parsedOutput.body;
    const deserialized = deserializeAws_queryInvalidPolicyException(body.Error, context);
    const contents = {
        name: "InvalidPolicyException",
        $fault: "client",
        $metadata: deserializeMetadata(parsedOutput),
        ...deserialized,
    };
    return contents;
};
const deserializeAws_queryInvalidRenderingParameterExceptionResponse = async (parsedOutput, context) => {
    const body = parsedOutput.body;
    const deserialized = deserializeAws_queryInvalidRenderingParameterException(body.Error, context);
    const contents = {
        name: "InvalidRenderingParameterException",
        $fault: "client",
        $metadata: deserializeMetadata(parsedOutput),
        ...deserialized,
    };
    return contents;
};
const deserializeAws_queryInvalidS3ConfigurationExceptionResponse = async (parsedOutput, context) => {
    const body = parsedOutput.body;
    const deserialized = deserializeAws_queryInvalidS3ConfigurationException(body.Error, context);
    const contents = {
        name: "InvalidS3ConfigurationException",
        $fault: "client",
        $metadata: deserializeMetadata(parsedOutput),
        ...deserialized,
    };
    return contents;
};
const deserializeAws_queryInvalidSNSDestinationExceptionResponse = async (parsedOutput, context) => {
    const body = parsedOutput.body;
    const deserialized = deserializeAws_queryInvalidSNSDestinationException(body.Error, context);
    const contents = {
        name: "InvalidSNSDestinationException",
        $fault: "client",
        $metadata: deserializeMetadata(parsedOutput),
        ...deserialized,
    };
    return contents;
};
const deserializeAws_queryInvalidSnsTopicExceptionResponse = async (parsedOutput, context) => {
    const body = parsedOutput.body;
    const deserialized = deserializeAws_queryInvalidSnsTopicException(body.Error, context);
    const contents = {
        name: "InvalidSnsTopicException",
        $fault: "client",
        $metadata: deserializeMetadata(parsedOutput),
        ...deserialized,
    };
    return contents;
};
const deserializeAws_queryInvalidTemplateExceptionResponse = async (parsedOutput, context) => {
    const body = parsedOutput.body;
    const deserialized = deserializeAws_queryInvalidTemplateException(body.Error, context);
    const contents = {
        name: "InvalidTemplateException",
        $fault: "client",
        $metadata: deserializeMetadata(parsedOutput),
        ...deserialized,
    };
    return contents;
};
const deserializeAws_queryInvalidTrackingOptionsExceptionResponse = async (parsedOutput, context) => {
    const body = parsedOutput.body;
    const deserialized = deserializeAws_queryInvalidTrackingOptionsException(body.Error, context);
    const contents = {
        name: "InvalidTrackingOptionsException",
        $fault: "client",
        $metadata: deserializeMetadata(parsedOutput),
        ...deserialized,
    };
    return contents;
};
const deserializeAws_queryLimitExceededExceptionResponse = async (parsedOutput, context) => {
    const body = parsedOutput.body;
    const deserialized = deserializeAws_queryLimitExceededException(body.Error, context);
    const contents = {
        name: "LimitExceededException",
        $fault: "client",
        $metadata: deserializeMetadata(parsedOutput),
        ...deserialized,
    };
    return contents;
};
const deserializeAws_queryMailFromDomainNotVerifiedExceptionResponse = async (parsedOutput, context) => {
    const body = parsedOutput.body;
    const deserialized = deserializeAws_queryMailFromDomainNotVerifiedException(body.Error, context);
    const contents = {
        name: "MailFromDomainNotVerifiedException",
        $fault: "client",
        $metadata: deserializeMetadata(parsedOutput),
        ...deserialized,
    };
    return contents;
};
const deserializeAws_queryMessageRejectedResponse = async (parsedOutput, context) => {
    const body = parsedOutput.body;
    const deserialized = deserializeAws_queryMessageRejected(body.Error, context);
    const contents = {
        name: "MessageRejected",
        $fault: "client",
        $metadata: deserializeMetadata(parsedOutput),
        ...deserialized,
    };
    return contents;
};
const deserializeAws_queryMissingRenderingAttributeExceptionResponse = async (parsedOutput, context) => {
    const body = parsedOutput.body;
    const deserialized = deserializeAws_queryMissingRenderingAttributeException(body.Error, context);
    const contents = {
        name: "MissingRenderingAttributeException",
        $fault: "client",
        $metadata: deserializeMetadata(parsedOutput),
        ...deserialized,
    };
    return contents;
};
const deserializeAws_queryProductionAccessNotGrantedExceptionResponse = async (parsedOutput, context) => {
    const body = parsedOutput.body;
    const deserialized = deserializeAws_queryProductionAccessNotGrantedException(body.Error, context);
    const contents = {
        name: "ProductionAccessNotGrantedException",
        $fault: "client",
        $metadata: deserializeMetadata(parsedOutput),
        ...deserialized,
    };
    return contents;
};
const deserializeAws_queryRuleDoesNotExistExceptionResponse = async (parsedOutput, context) => {
    const body = parsedOutput.body;
    const deserialized = deserializeAws_queryRuleDoesNotExistException(body.Error, context);
    const contents = {
        name: "RuleDoesNotExistException",
        $fault: "client",
        $metadata: deserializeMetadata(parsedOutput),
        ...deserialized,
    };
    return contents;
};
const deserializeAws_queryRuleSetDoesNotExistExceptionResponse = async (parsedOutput, context) => {
    const body = parsedOutput.body;
    const deserialized = deserializeAws_queryRuleSetDoesNotExistException(body.Error, context);
    const contents = {
        name: "RuleSetDoesNotExistException",
        $fault: "client",
        $metadata: deserializeMetadata(parsedOutput),
        ...deserialized,
    };
    return contents;
};
const deserializeAws_queryTemplateDoesNotExistExceptionResponse = async (parsedOutput, context) => {
    const body = parsedOutput.body;
    const deserialized = deserializeAws_queryTemplateDoesNotExistException(body.Error, context);
    const contents = {
        name: "TemplateDoesNotExistException",
        $fault: "client",
        $metadata: deserializeMetadata(parsedOutput),
        ...deserialized,
    };
    return contents;
};
const deserializeAws_queryTrackingOptionsAlreadyExistsExceptionResponse = async (parsedOutput, context) => {
    const body = parsedOutput.body;
    const deserialized = deserializeAws_queryTrackingOptionsAlreadyExistsException(body.Error, context);
    const contents = {
        name: "TrackingOptionsAlreadyExistsException",
        $fault: "client",
        $metadata: deserializeMetadata(parsedOutput),
        ...deserialized,
    };
    return contents;
};
const deserializeAws_queryTrackingOptionsDoesNotExistExceptionResponse = async (parsedOutput, context) => {
    const body = parsedOutput.body;
    const deserialized = deserializeAws_queryTrackingOptionsDoesNotExistException(body.Error, context);
    const contents = {
        name: "TrackingOptionsDoesNotExistException",
        $fault: "client",
        $metadata: deserializeMetadata(parsedOutput),
        ...deserialized,
    };
    return contents;
};
const serializeAws_queryAddHeaderAction = (input, context) => {
    const entries = {};
    if (input.HeaderName !== undefined && input.HeaderName !== null) {
        entries["HeaderName"] = input.HeaderName;
    }
    if (input.HeaderValue !== undefined && input.HeaderValue !== null) {
        entries["HeaderValue"] = input.HeaderValue;
    }
    return entries;
};
const serializeAws_queryAddressList = (input, context) => {
    const entries = {};
    let counter = 1;
    for (let entry of input) {
        if (entry === null) {
            continue;
        }
        entries[`member.${counter}`] = entry;
        counter++;
    }
    return entries;
};
const serializeAws_queryBody = (input, context) => {
    const entries = {};
    if (input.Text !== undefined && input.Text !== null) {
        const memberEntries = serializeAws_queryContent(input.Text, context);
        Object.entries(memberEntries).forEach(([key, value]) => {
            const loc = `Text.${key}`;
            entries[loc] = value;
        });
    }
    if (input.Html !== undefined && input.Html !== null) {
        const memberEntries = serializeAws_queryContent(input.Html, context);
        Object.entries(memberEntries).forEach(([key, value]) => {
            const loc = `Html.${key}`;
            entries[loc] = value;
        });
    }
    return entries;
};
const serializeAws_queryBounceAction = (input, context) => {
    const entries = {};
    if (input.TopicArn !== undefined && input.TopicArn !== null) {
        entries["TopicArn"] = input.TopicArn;
    }
    if (input.SmtpReplyCode !== undefined && input.SmtpReplyCode !== null) {
        entries["SmtpReplyCode"] = input.SmtpReplyCode;
    }
    if (input.StatusCode !== undefined && input.StatusCode !== null) {
        entries["StatusCode"] = input.StatusCode;
    }
    if (input.Message !== undefined && input.Message !== null) {
        entries["Message"] = input.Message;
    }
    if (input.Sender !== undefined && input.Sender !== null) {
        entries["Sender"] = input.Sender;
    }
    return entries;
};
const serializeAws_queryBouncedRecipientInfo = (input, context) => {
    const entries = {};
    if (input.Recipient !== undefined && input.Recipient !== null) {
        entries["Recipient"] = input.Recipient;
    }
    if (input.RecipientArn !== undefined && input.RecipientArn !== null) {
        entries["RecipientArn"] = input.RecipientArn;
    }
    if (input.BounceType !== undefined && input.BounceType !== null) {
        entries["BounceType"] = input.BounceType;
    }
    if (input.RecipientDsnFields !== undefined && input.RecipientDsnFields !== null) {
        const memberEntries = serializeAws_queryRecipientDsnFields(input.RecipientDsnFields, context);
        Object.entries(memberEntries).forEach(([key, value]) => {
            const loc = `RecipientDsnFields.${key}`;
            entries[loc] = value;
        });
    }
    return entries;
};
const serializeAws_queryBouncedRecipientInfoList = (input, context) => {
    const entries = {};
    let counter = 1;
    for (let entry of input) {
        if (entry === null) {
            continue;
        }
        const memberEntries = serializeAws_queryBouncedRecipientInfo(entry, context);
        Object.entries(memberEntries).forEach(([key, value]) => {
            entries[`member.${counter}.${key}`] = value;
        });
        counter++;
    }
    return entries;
};
const serializeAws_queryBulkEmailDestination = (input, context) => {
    const entries = {};
    if (input.Destination !== undefined && input.Destination !== null) {
        const memberEntries = serializeAws_queryDestination(input.Destination, context);
        Object.entries(memberEntries).forEach(([key, value]) => {
            const loc = `Destination.${key}`;
            entries[loc] = value;
        });
    }
    if (input.ReplacementTags !== undefined && input.ReplacementTags !== null) {
        const memberEntries = serializeAws_queryMessageTagList(input.ReplacementTags, context);
        Object.entries(memberEntries).forEach(([key, value]) => {
            const loc = `ReplacementTags.${key}`;
            entries[loc] = value;
        });
    }
    if (input.ReplacementTemplateData !== undefined && input.ReplacementTemplateData !== null) {
        entries["ReplacementTemplateData"] = input.ReplacementTemplateData;
    }
    return entries;
};
const serializeAws_queryBulkEmailDestinationList = (input, context) => {
    const entries = {};
    let counter = 1;
    for (let entry of input) {
        if (entry === null) {
            continue;
        }
        const memberEntries = serializeAws_queryBulkEmailDestination(entry, context);
        Object.entries(memberEntries).forEach(([key, value]) => {
            entries[`member.${counter}.${key}`] = value;
        });
        counter++;
    }
    return entries;
};
const serializeAws_queryCloneReceiptRuleSetRequest = (input, context) => {
    const entries = {};
    if (input.RuleSetName !== undefined && input.RuleSetName !== null) {
        entries["RuleSetName"] = input.RuleSetName;
    }
    if (input.OriginalRuleSetName !== undefined && input.OriginalRuleSetName !== null) {
        entries["OriginalRuleSetName"] = input.OriginalRuleSetName;
    }
    return entries;
};
const serializeAws_queryCloudWatchDestination = (input, context) => {
    const entries = {};
    if (input.DimensionConfigurations !== undefined && input.DimensionConfigurations !== null) {
        const memberEntries = serializeAws_queryCloudWatchDimensionConfigurations(input.DimensionConfigurations, context);
        Object.entries(memberEntries).forEach(([key, value]) => {
            const loc = `DimensionConfigurations.${key}`;
            entries[loc] = value;
        });
    }
    return entries;
};
const serializeAws_queryCloudWatchDimensionConfiguration = (input, context) => {
    const entries = {};
    if (input.DimensionName !== undefined && input.DimensionName !== null) {
        entries["DimensionName"] = input.DimensionName;
    }
    if (input.DimensionValueSource !== undefined && input.DimensionValueSource !== null) {
        entries["DimensionValueSource"] = input.DimensionValueSource;
    }
    if (input.DefaultDimensionValue !== undefined && input.DefaultDimensionValue !== null) {
        entries["DefaultDimensionValue"] = input.DefaultDimensionValue;
    }
    return entries;
};
const serializeAws_queryCloudWatchDimensionConfigurations = (input, context) => {
    const entries = {};
    let counter = 1;
    for (let entry of input) {
        if (entry === null) {
            continue;
        }
        const memberEntries = serializeAws_queryCloudWatchDimensionConfiguration(entry, context);
        Object.entries(memberEntries).forEach(([key, value]) => {
            entries[`member.${counter}.${key}`] = value;
        });
        counter++;
    }
    return entries;
};
const serializeAws_queryConfigurationSet = (input, context) => {
    const entries = {};
    if (input.Name !== undefined && input.Name !== null) {
        entries["Name"] = input.Name;
    }
    return entries;
};
const serializeAws_queryConfigurationSetAttributeList = (input, context) => {
    const entries = {};
    let counter = 1;
    for (let entry of input) {
        if (entry === null) {
            continue;
        }
        entries[`member.${counter}`] = entry;
        counter++;
    }
    return entries;
};
const serializeAws_queryContent = (input, context) => {
    const entries = {};
    if (input.Data !== undefined && input.Data !== null) {
        entries["Data"] = input.Data;
    }
    if (input.Charset !== undefined && input.Charset !== null) {
        entries["Charset"] = input.Charset;
    }
    return entries;
};
const serializeAws_queryCreateConfigurationSetEventDestinationRequest = (input, context) => {
    const entries = {};
    if (input.ConfigurationSetName !== undefined && input.ConfigurationSetName !== null) {
        entries["ConfigurationSetName"] = input.ConfigurationSetName;
    }
    if (input.EventDestination !== undefined && input.EventDestination !== null) {
        const memberEntries = serializeAws_queryEventDestination(input.EventDestination, context);
        Object.entries(memberEntries).forEach(([key, value]) => {
            const loc = `EventDestination.${key}`;
            entries[loc] = value;
        });
    }
    return entries;
};
const serializeAws_queryCreateConfigurationSetRequest = (input, context) => {
    const entries = {};
    if (input.ConfigurationSet !== undefined && input.ConfigurationSet !== null) {
        const memberEntries = serializeAws_queryConfigurationSet(input.ConfigurationSet, context);
        Object.entries(memberEntries).forEach(([key, value]) => {
            const loc = `ConfigurationSet.${key}`;
            entries[loc] = value;
        });
    }
    return entries;
};
const serializeAws_queryCreateConfigurationSetTrackingOptionsRequest = (input, context) => {
    const entries = {};
    if (input.ConfigurationSetName !== undefined && input.ConfigurationSetName !== null) {
        entries["ConfigurationSetName"] = input.ConfigurationSetName;
    }
    if (input.TrackingOptions !== undefined && input.TrackingOptions !== null) {
        const memberEntries = serializeAws_queryTrackingOptions(input.TrackingOptions, context);
        Object.entries(memberEntries).forEach(([key, value]) => {
            const loc = `TrackingOptions.${key}`;
            entries[loc] = value;
        });
    }
    return entries;
};
const serializeAws_queryCreateCustomVerificationEmailTemplateRequest = (input, context) => {
    const entries = {};
    if (input.TemplateName !== undefined && input.TemplateName !== null) {
        entries["TemplateName"] = input.TemplateName;
    }
    if (input.FromEmailAddress !== undefined && input.FromEmailAddress !== null) {
        entries["FromEmailAddress"] = input.FromEmailAddress;
    }
    if (input.TemplateSubject !== undefined && input.TemplateSubject !== null) {
        entries["TemplateSubject"] = input.TemplateSubject;
    }
    if (input.TemplateContent !== undefined && input.TemplateContent !== null) {
        entries["TemplateContent"] = input.TemplateContent;
    }
    if (input.SuccessRedirectionURL !== undefined && input.SuccessRedirectionURL !== null) {
        entries["SuccessRedirectionURL"] = input.SuccessRedirectionURL;
    }
    if (input.FailureRedirectionURL !== undefined && input.FailureRedirectionURL !== null) {
        entries["FailureRedirectionURL"] = input.FailureRedirectionURL;
    }
    return entries;
};
const serializeAws_queryCreateReceiptFilterRequest = (input, context) => {
    const entries = {};
    if (input.Filter !== undefined && input.Filter !== null) {
        const memberEntries = serializeAws_queryReceiptFilter(input.Filter, context);
        Object.entries(memberEntries).forEach(([key, value]) => {
            const loc = `Filter.${key}`;
            entries[loc] = value;
        });
    }
    return entries;
};
const serializeAws_queryCreateReceiptRuleRequest = (input, context) => {
    const entries = {};
    if (input.RuleSetName !== undefined && input.RuleSetName !== null) {
        entries["RuleSetName"] = input.RuleSetName;
    }
    if (input.After !== undefined && input.After !== null) {
        entries["After"] = input.After;
    }
    if (input.Rule !== undefined && input.Rule !== null) {
        const memberEntries = serializeAws_queryReceiptRule(input.Rule, context);
        Object.entries(memberEntries).forEach(([key, value]) => {
            const loc = `Rule.${key}`;
            entries[loc] = value;
        });
    }
    return entries;
};
const serializeAws_queryCreateReceiptRuleSetRequest = (input, context) => {
    const entries = {};
    if (input.RuleSetName !== undefined && input.RuleSetName !== null) {
        entries["RuleSetName"] = input.RuleSetName;
    }
    return entries;
};
const serializeAws_queryCreateTemplateRequest = (input, context) => {
    const entries = {};
    if (input.Template !== undefined && input.Template !== null) {
        const memberEntries = serializeAws_queryTemplate(input.Template, context);
        Object.entries(memberEntries).forEach(([key, value]) => {
            const loc = `Template.${key}`;
            entries[loc] = value;
        });
    }
    return entries;
};
const serializeAws_queryDeleteConfigurationSetEventDestinationRequest = (input, context) => {
    const entries = {};
    if (input.ConfigurationSetName !== undefined && input.ConfigurationSetName !== null) {
        entries["ConfigurationSetName"] = input.ConfigurationSetName;
    }
    if (input.EventDestinationName !== undefined && input.EventDestinationName !== null) {
        entries["EventDestinationName"] = input.EventDestinationName;
    }
    return entries;
};
const serializeAws_queryDeleteConfigurationSetRequest = (input, context) => {
    const entries = {};
    if (input.ConfigurationSetName !== undefined && input.ConfigurationSetName !== null) {
        entries["ConfigurationSetName"] = input.ConfigurationSetName;
    }
    return entries;
};
const serializeAws_queryDeleteConfigurationSetTrackingOptionsRequest = (input, context) => {
    const entries = {};
    if (input.ConfigurationSetName !== undefined && input.ConfigurationSetName !== null) {
        entries["ConfigurationSetName"] = input.ConfigurationSetName;
    }
    return entries;
};
const serializeAws_queryDeleteCustomVerificationEmailTemplateRequest = (input, context) => {
    const entries = {};
    if (input.TemplateName !== undefined && input.TemplateName !== null) {
        entries["TemplateName"] = input.TemplateName;
    }
    return entries;
};
const serializeAws_queryDeleteIdentityPolicyRequest = (input, context) => {
    const entries = {};
    if (input.Identity !== undefined && input.Identity !== null) {
        entries["Identity"] = input.Identity;
    }
    if (input.PolicyName !== undefined && input.PolicyName !== null) {
        entries["PolicyName"] = input.PolicyName;
    }
    return entries;
};
const serializeAws_queryDeleteIdentityRequest = (input, context) => {
    const entries = {};
    if (input.Identity !== undefined && input.Identity !== null) {
        entries["Identity"] = input.Identity;
    }
    return entries;
};
const serializeAws_queryDeleteReceiptFilterRequest = (input, context) => {
    const entries = {};
    if (input.FilterName !== undefined && input.FilterName !== null) {
        entries["FilterName"] = input.FilterName;
    }
    return entries;
};
const serializeAws_queryDeleteReceiptRuleRequest = (input, context) => {
    const entries = {};
    if (input.RuleSetName !== undefined && input.RuleSetName !== null) {
        entries["RuleSetName"] = input.RuleSetName;
    }
    if (input.RuleName !== undefined && input.RuleName !== null) {
        entries["RuleName"] = input.RuleName;
    }
    return entries;
};
const serializeAws_queryDeleteReceiptRuleSetRequest = (input, context) => {
    const entries = {};
    if (input.RuleSetName !== undefined && input.RuleSetName !== null) {
        entries["RuleSetName"] = input.RuleSetName;
    }
    return entries;
};
const serializeAws_queryDeleteTemplateRequest = (input, context) => {
    const entries = {};
    if (input.TemplateName !== undefined && input.TemplateName !== null) {
        entries["TemplateName"] = input.TemplateName;
    }
    return entries;
};
const serializeAws_queryDeleteVerifiedEmailAddressRequest = (input, context) => {
    const entries = {};
    if (input.EmailAddress !== undefined && input.EmailAddress !== null) {
        entries["EmailAddress"] = input.EmailAddress;
    }
    return entries;
};
const serializeAws_queryDeliveryOptions = (input, context) => {
    const entries = {};
    if (input.TlsPolicy !== undefined && input.TlsPolicy !== null) {
        entries["TlsPolicy"] = input.TlsPolicy;
    }
    return entries;
};
const serializeAws_queryDescribeActiveReceiptRuleSetRequest = (input, context) => {
    const entries = {};
    return entries;
};
const serializeAws_queryDescribeConfigurationSetRequest = (input, context) => {
    const entries = {};
    if (input.ConfigurationSetName !== undefined && input.ConfigurationSetName !== null) {
        entries["ConfigurationSetName"] = input.ConfigurationSetName;
    }
    if (input.ConfigurationSetAttributeNames !== undefined && input.ConfigurationSetAttributeNames !== null) {
        const memberEntries = serializeAws_queryConfigurationSetAttributeList(input.ConfigurationSetAttributeNames, context);
        Object.entries(memberEntries).forEach(([key, value]) => {
            const loc = `ConfigurationSetAttributeNames.${key}`;
            entries[loc] = value;
        });
    }
    return entries;
};
const serializeAws_queryDescribeReceiptRuleRequest = (input, context) => {
    const entries = {};
    if (input.RuleSetName !== undefined && input.RuleSetName !== null) {
        entries["RuleSetName"] = input.RuleSetName;
    }
    if (input.RuleName !== undefined && input.RuleName !== null) {
        entries["RuleName"] = input.RuleName;
    }
    return entries;
};
const serializeAws_queryDescribeReceiptRuleSetRequest = (input, context) => {
    const entries = {};
    if (input.RuleSetName !== undefined && input.RuleSetName !== null) {
        entries["RuleSetName"] = input.RuleSetName;
    }
    return entries;
};
const serializeAws_queryDestination = (input, context) => {
    const entries = {};
    if (input.ToAddresses !== undefined && input.ToAddresses !== null) {
        const memberEntries = serializeAws_queryAddressList(input.ToAddresses, context);
        Object.entries(memberEntries).forEach(([key, value]) => {
            const loc = `ToAddresses.${key}`;
            entries[loc] = value;
        });
    }
    if (input.CcAddresses !== undefined && input.CcAddresses !== null) {
        const memberEntries = serializeAws_queryAddressList(input.CcAddresses, context);
        Object.entries(memberEntries).forEach(([key, value]) => {
            const loc = `CcAddresses.${key}`;
            entries[loc] = value;
        });
    }
    if (input.BccAddresses !== undefined && input.BccAddresses !== null) {
        const memberEntries = serializeAws_queryAddressList(input.BccAddresses, context);
        Object.entries(memberEntries).forEach(([key, value]) => {
            const loc = `BccAddresses.${key}`;
            entries[loc] = value;
        });
    }
    return entries;
};
const serializeAws_queryEventDestination = (input, context) => {
    const entries = {};
    if (input.Name !== undefined && input.Name !== null) {
        entries["Name"] = input.Name;
    }
    if (input.Enabled !== undefined && input.Enabled !== null) {
        entries["Enabled"] = input.Enabled;
    }
    if (input.MatchingEventTypes !== undefined && input.MatchingEventTypes !== null) {
        const memberEntries = serializeAws_queryEventTypes(input.MatchingEventTypes, context);
        Object.entries(memberEntries).forEach(([key, value]) => {
            const loc = `MatchingEventTypes.${key}`;
            entries[loc] = value;
        });
    }
    if (input.KinesisFirehoseDestination !== undefined && input.KinesisFirehoseDestination !== null) {
        const memberEntries = serializeAws_queryKinesisFirehoseDestination(input.KinesisFirehoseDestination, context);
        Object.entries(memberEntries).forEach(([key, value]) => {
            const loc = `KinesisFirehoseDestination.${key}`;
            entries[loc] = value;
        });
    }
    if (input.CloudWatchDestination !== undefined && input.CloudWatchDestination !== null) {
        const memberEntries = serializeAws_queryCloudWatchDestination(input.CloudWatchDestination, context);
        Object.entries(memberEntries).forEach(([key, value]) => {
            const loc = `CloudWatchDestination.${key}`;
            entries[loc] = value;
        });
    }
    if (input.SNSDestination !== undefined && input.SNSDestination !== null) {
        const memberEntries = serializeAws_querySNSDestination(input.SNSDestination, context);
        Object.entries(memberEntries).forEach(([key, value]) => {
            const loc = `SNSDestination.${key}`;
            entries[loc] = value;
        });
    }
    return entries;
};
const serializeAws_queryEventTypes = (input, context) => {
    const entries = {};
    let counter = 1;
    for (let entry of input) {
        if (entry === null) {
            continue;
        }
        entries[`member.${counter}`] = entry;
        counter++;
    }
    return entries;
};
const serializeAws_queryExtensionField = (input, context) => {
    const entries = {};
    if (input.Name !== undefined && input.Name !== null) {
        entries["Name"] = input.Name;
    }
    if (input.Value !== undefined && input.Value !== null) {
        entries["Value"] = input.Value;
    }
    return entries;
};
const serializeAws_queryExtensionFieldList = (input, context) => {
    const entries = {};
    let counter = 1;
    for (let entry of input) {
        if (entry === null) {
            continue;
        }
        const memberEntries = serializeAws_queryExtensionField(entry, context);
        Object.entries(memberEntries).forEach(([key, value]) => {
            entries[`member.${counter}.${key}`] = value;
        });
        counter++;
    }
    return entries;
};
const serializeAws_queryGetCustomVerificationEmailTemplateRequest = (input, context) => {
    const entries = {};
    if (input.TemplateName !== undefined && input.TemplateName !== null) {
        entries["TemplateName"] = input.TemplateName;
    }
    return entries;
};
const serializeAws_queryGetIdentityDkimAttributesRequest = (input, context) => {
    const entries = {};
    if (input.Identities !== undefined && input.Identities !== null) {
        const memberEntries = serializeAws_queryIdentityList(input.Identities, context);
        Object.entries(memberEntries).forEach(([key, value]) => {
            const loc = `Identities.${key}`;
            entries[loc] = value;
        });
    }
    return entries;
};
const serializeAws_queryGetIdentityMailFromDomainAttributesRequest = (input, context) => {
    const entries = {};
    if (input.Identities !== undefined && input.Identities !== null) {
        const memberEntries = serializeAws_queryIdentityList(input.Identities, context);
        Object.entries(memberEntries).forEach(([key, value]) => {
            const loc = `Identities.${key}`;
            entries[loc] = value;
        });
    }
    return entries;
};
const serializeAws_queryGetIdentityNotificationAttributesRequest = (input, context) => {
    const entries = {};
    if (input.Identities !== undefined && input.Identities !== null) {
        const memberEntries = serializeAws_queryIdentityList(input.Identities, context);
        Object.entries(memberEntries).forEach(([key, value]) => {
            const loc = `Identities.${key}`;
            entries[loc] = value;
        });
    }
    return entries;
};
const serializeAws_queryGetIdentityPoliciesRequest = (input, context) => {
    const entries = {};
    if (input.Identity !== undefined && input.Identity !== null) {
        entries["Identity"] = input.Identity;
    }
    if (input.PolicyNames !== undefined && input.PolicyNames !== null) {
        const memberEntries = serializeAws_queryPolicyNameList(input.PolicyNames, context);
        Object.entries(memberEntries).forEach(([key, value]) => {
            const loc = `PolicyNames.${key}`;
            entries[loc] = value;
        });
    }
    return entries;
};
const serializeAws_queryGetIdentityVerificationAttributesRequest = (input, context) => {
    const entries = {};
    if (input.Identities !== undefined && input.Identities !== null) {
        const memberEntries = serializeAws_queryIdentityList(input.Identities, context);
        Object.entries(memberEntries).forEach(([key, value]) => {
            const loc = `Identities.${key}`;
            entries[loc] = value;
        });
    }
    return entries;
};
const serializeAws_queryGetTemplateRequest = (input, context) => {
    const entries = {};
    if (input.TemplateName !== undefined && input.TemplateName !== null) {
        entries["TemplateName"] = input.TemplateName;
    }
    return entries;
};
const serializeAws_queryIdentityList = (input, context) => {
    const entries = {};
    let counter = 1;
    for (let entry of input) {
        if (entry === null) {
            continue;
        }
        entries[`member.${counter}`] = entry;
        counter++;
    }
    return entries;
};
const serializeAws_queryKinesisFirehoseDestination = (input, context) => {
    const entries = {};
    if (input.IAMRoleARN !== undefined && input.IAMRoleARN !== null) {
        entries["IAMRoleARN"] = input.IAMRoleARN;
    }
    if (input.DeliveryStreamARN !== undefined && input.DeliveryStreamARN !== null) {
        entries["DeliveryStreamARN"] = input.DeliveryStreamARN;
    }
    return entries;
};
const serializeAws_queryLambdaAction = (input, context) => {
    const entries = {};
    if (input.TopicArn !== undefined && input.TopicArn !== null) {
        entries["TopicArn"] = input.TopicArn;
    }
    if (input.FunctionArn !== undefined && input.FunctionArn !== null) {
        entries["FunctionArn"] = input.FunctionArn;
    }
    if (input.InvocationType !== undefined && input.InvocationType !== null) {
        entries["InvocationType"] = input.InvocationType;
    }
    return entries;
};
const serializeAws_queryListConfigurationSetsRequest = (input, context) => {
    const entries = {};
    if (input.NextToken !== undefined && input.NextToken !== null) {
        entries["NextToken"] = input.NextToken;
    }
    if (input.MaxItems !== undefined && input.MaxItems !== null) {
        entries["MaxItems"] = input.MaxItems;
    }
    return entries;
};
const serializeAws_queryListCustomVerificationEmailTemplatesRequest = (input, context) => {
    const entries = {};
    if (input.NextToken !== undefined && input.NextToken !== null) {
        entries["NextToken"] = input.NextToken;
    }
    if (input.MaxResults !== undefined && input.MaxResults !== null) {
        entries["MaxResults"] = input.MaxResults;
    }
    return entries;
};
const serializeAws_queryListIdentitiesRequest = (input, context) => {
    const entries = {};
    if (input.IdentityType !== undefined && input.IdentityType !== null) {
        entries["IdentityType"] = input.IdentityType;
    }
    if (input.NextToken !== undefined && input.NextToken !== null) {
        entries["NextToken"] = input.NextToken;
    }
    if (input.MaxItems !== undefined && input.MaxItems !== null) {
        entries["MaxItems"] = input.MaxItems;
    }
    return entries;
};
const serializeAws_queryListIdentityPoliciesRequest = (input, context) => {
    const entries = {};
    if (input.Identity !== undefined && input.Identity !== null) {
        entries["Identity"] = input.Identity;
    }
    return entries;
};
const serializeAws_queryListReceiptFiltersRequest = (input, context) => {
    const entries = {};
    return entries;
};
const serializeAws_queryListReceiptRuleSetsRequest = (input, context) => {
    const entries = {};
    if (input.NextToken !== undefined && input.NextToken !== null) {
        entries["NextToken"] = input.NextToken;
    }
    return entries;
};
const serializeAws_queryListTemplatesRequest = (input, context) => {
    const entries = {};
    if (input.NextToken !== undefined && input.NextToken !== null) {
        entries["NextToken"] = input.NextToken;
    }
    if (input.MaxItems !== undefined && input.MaxItems !== null) {
        entries["MaxItems"] = input.MaxItems;
    }
    return entries;
};
const serializeAws_queryMessage = (input, context) => {
    const entries = {};
    if (input.Subject !== undefined && input.Subject !== null) {
        const memberEntries = serializeAws_queryContent(input.Subject, context);
        Object.entries(memberEntries).forEach(([key, value]) => {
            const loc = `Subject.${key}`;
            entries[loc] = value;
        });
    }
    if (input.Body !== undefined && input.Body !== null) {
        const memberEntries = serializeAws_queryBody(input.Body, context);
        Object.entries(memberEntries).forEach(([key, value]) => {
            const loc = `Body.${key}`;
            entries[loc] = value;
        });
    }
    return entries;
};
const serializeAws_queryMessageDsn = (input, context) => {
    const entries = {};
    if (input.ReportingMta !== undefined && input.ReportingMta !== null) {
        entries["ReportingMta"] = input.ReportingMta;
    }
    if (input.ArrivalDate !== undefined && input.ArrivalDate !== null) {
        entries["ArrivalDate"] = input.ArrivalDate.toISOString().split(".")[0] + "Z";
    }
    if (input.ExtensionFields !== undefined && input.ExtensionFields !== null) {
        const memberEntries = serializeAws_queryExtensionFieldList(input.ExtensionFields, context);
        Object.entries(memberEntries).forEach(([key, value]) => {
            const loc = `ExtensionFields.${key}`;
            entries[loc] = value;
        });
    }
    return entries;
};
const serializeAws_queryMessageTag = (input, context) => {
    const entries = {};
    if (input.Name !== undefined && input.Name !== null) {
        entries["Name"] = input.Name;
    }
    if (input.Value !== undefined && input.Value !== null) {
        entries["Value"] = input.Value;
    }
    return entries;
};
const serializeAws_queryMessageTagList = (input, context) => {
    const entries = {};
    let counter = 1;
    for (let entry of input) {
        if (entry === null) {
            continue;
        }
        const memberEntries = serializeAws_queryMessageTag(entry, context);
        Object.entries(memberEntries).forEach(([key, value]) => {
            entries[`member.${counter}.${key}`] = value;
        });
        counter++;
    }
    return entries;
};
const serializeAws_queryPolicyNameList = (input, context) => {
    const entries = {};
    let counter = 1;
    for (let entry of input) {
        if (entry === null) {
            continue;
        }
        entries[`member.${counter}`] = entry;
        counter++;
    }
    return entries;
};
const serializeAws_queryPutConfigurationSetDeliveryOptionsRequest = (input, context) => {
    const entries = {};
    if (input.ConfigurationSetName !== undefined && input.ConfigurationSetName !== null) {
        entries["ConfigurationSetName"] = input.ConfigurationSetName;
    }
    if (input.DeliveryOptions !== undefined && input.DeliveryOptions !== null) {
        const memberEntries = serializeAws_queryDeliveryOptions(input.DeliveryOptions, context);
        Object.entries(memberEntries).forEach(([key, value]) => {
            const loc = `DeliveryOptions.${key}`;
            entries[loc] = value;
        });
    }
    return entries;
};
const serializeAws_queryPutIdentityPolicyRequest = (input, context) => {
    const entries = {};
    if (input.Identity !== undefined && input.Identity !== null) {
        entries["Identity"] = input.Identity;
    }
    if (input.PolicyName !== undefined && input.PolicyName !== null) {
        entries["PolicyName"] = input.PolicyName;
    }
    if (input.Policy !== undefined && input.Policy !== null) {
        entries["Policy"] = input.Policy;
    }
    return entries;
};
const serializeAws_queryRawMessage = (input, context) => {
    const entries = {};
    if (input.Data !== undefined && input.Data !== null) {
        entries["Data"] = context.base64Encoder(input.Data);
    }
    return entries;
};
const serializeAws_queryReceiptAction = (input, context) => {
    const entries = {};
    if (input.S3Action !== undefined && input.S3Action !== null) {
        const memberEntries = serializeAws_queryS3Action(input.S3Action, context);
        Object.entries(memberEntries).forEach(([key, value]) => {
            const loc = `S3Action.${key}`;
            entries[loc] = value;
        });
    }
    if (input.BounceAction !== undefined && input.BounceAction !== null) {
        const memberEntries = serializeAws_queryBounceAction(input.BounceAction, context);
        Object.entries(memberEntries).forEach(([key, value]) => {
            const loc = `BounceAction.${key}`;
            entries[loc] = value;
        });
    }
    if (input.WorkmailAction !== undefined && input.WorkmailAction !== null) {
        const memberEntries = serializeAws_queryWorkmailAction(input.WorkmailAction, context);
        Object.entries(memberEntries).forEach(([key, value]) => {
            const loc = `WorkmailAction.${key}`;
            entries[loc] = value;
        });
    }
    if (input.LambdaAction !== undefined && input.LambdaAction !== null) {
        const memberEntries = serializeAws_queryLambdaAction(input.LambdaAction, context);
        Object.entries(memberEntries).forEach(([key, value]) => {
            const loc = `LambdaAction.${key}`;
            entries[loc] = value;
        });
    }
    if (input.StopAction !== undefined && input.StopAction !== null) {
        const memberEntries = serializeAws_queryStopAction(input.StopAction, context);
        Object.entries(memberEntries).forEach(([key, value]) => {
            const loc = `StopAction.${key}`;
            entries[loc] = value;
        });
    }
    if (input.AddHeaderAction !== undefined && input.AddHeaderAction !== null) {
        const memberEntries = serializeAws_queryAddHeaderAction(input.AddHeaderAction, context);
        Object.entries(memberEntries).forEach(([key, value]) => {
            const loc = `AddHeaderAction.${key}`;
            entries[loc] = value;
        });
    }
    if (input.SNSAction !== undefined && input.SNSAction !== null) {
        const memberEntries = serializeAws_querySNSAction(input.SNSAction, context);
        Object.entries(memberEntries).forEach(([key, value]) => {
            const loc = `SNSAction.${key}`;
            entries[loc] = value;
        });
    }
    return entries;
};
const serializeAws_queryReceiptActionsList = (input, context) => {
    const entries = {};
    let counter = 1;
    for (let entry of input) {
        if (entry === null) {
            continue;
        }
        const memberEntries = serializeAws_queryReceiptAction(entry, context);
        Object.entries(memberEntries).forEach(([key, value]) => {
            entries[`member.${counter}.${key}`] = value;
        });
        counter++;
    }
    return entries;
};
const serializeAws_queryReceiptFilter = (input, context) => {
    const entries = {};
    if (input.Name !== undefined && input.Name !== null) {
        entries["Name"] = input.Name;
    }
    if (input.IpFilter !== undefined && input.IpFilter !== null) {
        const memberEntries = serializeAws_queryReceiptIpFilter(input.IpFilter, context);
        Object.entries(memberEntries).forEach(([key, value]) => {
            const loc = `IpFilter.${key}`;
            entries[loc] = value;
        });
    }
    return entries;
};
const serializeAws_queryReceiptIpFilter = (input, context) => {
    const entries = {};
    if (input.Policy !== undefined && input.Policy !== null) {
        entries["Policy"] = input.Policy;
    }
    if (input.Cidr !== undefined && input.Cidr !== null) {
        entries["Cidr"] = input.Cidr;
    }
    return entries;
};
const serializeAws_queryReceiptRule = (input, context) => {
    const entries = {};
    if (input.Name !== undefined && input.Name !== null) {
        entries["Name"] = input.Name;
    }
    if (input.Enabled !== undefined && input.Enabled !== null) {
        entries["Enabled"] = input.Enabled;
    }
    if (input.TlsPolicy !== undefined && input.TlsPolicy !== null) {
        entries["TlsPolicy"] = input.TlsPolicy;
    }
    if (input.Recipients !== undefined && input.Recipients !== null) {
        const memberEntries = serializeAws_queryRecipientsList(input.Recipients, context);
        Object.entries(memberEntries).forEach(([key, value]) => {
            const loc = `Recipients.${key}`;
            entries[loc] = value;
        });
    }
    if (input.Actions !== undefined && input.Actions !== null) {
        const memberEntries = serializeAws_queryReceiptActionsList(input.Actions, context);
        Object.entries(memberEntries).forEach(([key, value]) => {
            const loc = `Actions.${key}`;
            entries[loc] = value;
        });
    }
    if (input.ScanEnabled !== undefined && input.ScanEnabled !== null) {
        entries["ScanEnabled"] = input.ScanEnabled;
    }
    return entries;
};
const serializeAws_queryReceiptRuleNamesList = (input, context) => {
    const entries = {};
    let counter = 1;
    for (let entry of input) {
        if (entry === null) {
            continue;
        }
        entries[`member.${counter}`] = entry;
        counter++;
    }
    return entries;
};
const serializeAws_queryRecipientDsnFields = (input, context) => {
    const entries = {};
    if (input.FinalRecipient !== undefined && input.FinalRecipient !== null) {
        entries["FinalRecipient"] = input.FinalRecipient;
    }
    if (input.Action !== undefined && input.Action !== null) {
        entries["Action"] = input.Action;
    }
    if (input.RemoteMta !== undefined && input.RemoteMta !== null) {
        entries["RemoteMta"] = input.RemoteMta;
    }
    if (input.Status !== undefined && input.Status !== null) {
        entries["Status"] = input.Status;
    }
    if (input.DiagnosticCode !== undefined && input.DiagnosticCode !== null) {
        entries["DiagnosticCode"] = input.DiagnosticCode;
    }
    if (input.LastAttemptDate !== undefined && input.LastAttemptDate !== null) {
        entries["LastAttemptDate"] = input.LastAttemptDate.toISOString().split(".")[0] + "Z";
    }
    if (input.ExtensionFields !== undefined && input.ExtensionFields !== null) {
        const memberEntries = serializeAws_queryExtensionFieldList(input.ExtensionFields, context);
        Object.entries(memberEntries).forEach(([key, value]) => {
            const loc = `ExtensionFields.${key}`;
            entries[loc] = value;
        });
    }
    return entries;
};
const serializeAws_queryRecipientsList = (input, context) => {
    const entries = {};
    let counter = 1;
    for (let entry of input) {
        if (entry === null) {
            continue;
        }
        entries[`member.${counter}`] = entry;
        counter++;
    }
    return entries;
};
const serializeAws_queryReorderReceiptRuleSetRequest = (input, context) => {
    const entries = {};
    if (input.RuleSetName !== undefined && input.RuleSetName !== null) {
        entries["RuleSetName"] = input.RuleSetName;
    }
    if (input.RuleNames !== undefined && input.RuleNames !== null) {
        const memberEntries = serializeAws_queryReceiptRuleNamesList(input.RuleNames, context);
        Object.entries(memberEntries).forEach(([key, value]) => {
            const loc = `RuleNames.${key}`;
            entries[loc] = value;
        });
    }
    return entries;
};
const serializeAws_queryS3Action = (input, context) => {
    const entries = {};
    if (input.TopicArn !== undefined && input.TopicArn !== null) {
        entries["TopicArn"] = input.TopicArn;
    }
    if (input.BucketName !== undefined && input.BucketName !== null) {
        entries["BucketName"] = input.BucketName;
    }
    if (input.ObjectKeyPrefix !== undefined && input.ObjectKeyPrefix !== null) {
        entries["ObjectKeyPrefix"] = input.ObjectKeyPrefix;
    }
    if (input.KmsKeyArn !== undefined && input.KmsKeyArn !== null) {
        entries["KmsKeyArn"] = input.KmsKeyArn;
    }
    return entries;
};
const serializeAws_querySendBounceRequest = (input, context) => {
    const entries = {};
    if (input.OriginalMessageId !== undefined && input.OriginalMessageId !== null) {
        entries["OriginalMessageId"] = input.OriginalMessageId;
    }
    if (input.BounceSender !== undefined && input.BounceSender !== null) {
        entries["BounceSender"] = input.BounceSender;
    }
    if (input.Explanation !== undefined && input.Explanation !== null) {
        entries["Explanation"] = input.Explanation;
    }
    if (input.MessageDsn !== undefined && input.MessageDsn !== null) {
        const memberEntries = serializeAws_queryMessageDsn(input.MessageDsn, context);
        Object.entries(memberEntries).forEach(([key, value]) => {
            const loc = `MessageDsn.${key}`;
            entries[loc] = value;
        });
    }
    if (input.BouncedRecipientInfoList !== undefined && input.BouncedRecipientInfoList !== null) {
        const memberEntries = serializeAws_queryBouncedRecipientInfoList(input.BouncedRecipientInfoList, context);
        Object.entries(memberEntries).forEach(([key, value]) => {
            const loc = `BouncedRecipientInfoList.${key}`;
            entries[loc] = value;
        });
    }
    if (input.BounceSenderArn !== undefined && input.BounceSenderArn !== null) {
        entries["BounceSenderArn"] = input.BounceSenderArn;
    }
    return entries;
};
const serializeAws_querySendBulkTemplatedEmailRequest = (input, context) => {
    const entries = {};
    if (input.Source !== undefined && input.Source !== null) {
        entries["Source"] = input.Source;
    }
    if (input.SourceArn !== undefined && input.SourceArn !== null) {
        entries["SourceArn"] = input.SourceArn;
    }
    if (input.ReplyToAddresses !== undefined && input.ReplyToAddresses !== null) {
        const memberEntries = serializeAws_queryAddressList(input.ReplyToAddresses, context);
        Object.entries(memberEntries).forEach(([key, value]) => {
            const loc = `ReplyToAddresses.${key}`;
            entries[loc] = value;
        });
    }
    if (input.ReturnPath !== undefined && input.ReturnPath !== null) {
        entries["ReturnPath"] = input.ReturnPath;
    }
    if (input.ReturnPathArn !== undefined && input.ReturnPathArn !== null) {
        entries["ReturnPathArn"] = input.ReturnPathArn;
    }
    if (input.ConfigurationSetName !== undefined && input.ConfigurationSetName !== null) {
        entries["ConfigurationSetName"] = input.ConfigurationSetName;
    }
    if (input.DefaultTags !== undefined && input.DefaultTags !== null) {
        const memberEntries = serializeAws_queryMessageTagList(input.DefaultTags, context);
        Object.entries(memberEntries).forEach(([key, value]) => {
            const loc = `DefaultTags.${key}`;
            entries[loc] = value;
        });
    }
    if (input.Template !== undefined && input.Template !== null) {
        entries["Template"] = input.Template;
    }
    if (input.TemplateArn !== undefined && input.TemplateArn !== null) {
        entries["TemplateArn"] = input.TemplateArn;
    }
    if (input.DefaultTemplateData !== undefined && input.DefaultTemplateData !== null) {
        entries["DefaultTemplateData"] = input.DefaultTemplateData;
    }
    if (input.Destinations !== undefined && input.Destinations !== null) {
        const memberEntries = serializeAws_queryBulkEmailDestinationList(input.Destinations, context);
        Object.entries(memberEntries).forEach(([key, value]) => {
            const loc = `Destinations.${key}`;
            entries[loc] = value;
        });
    }
    return entries;
};
const serializeAws_querySendCustomVerificationEmailRequest = (input, context) => {
    const entries = {};
    if (input.EmailAddress !== undefined && input.EmailAddress !== null) {
        entries["EmailAddress"] = input.EmailAddress;
    }
    if (input.TemplateName !== undefined && input.TemplateName !== null) {
        entries["TemplateName"] = input.TemplateName;
    }
    if (input.ConfigurationSetName !== undefined && input.ConfigurationSetName !== null) {
        entries["ConfigurationSetName"] = input.ConfigurationSetName;
    }
    return entries;
};
const serializeAws_querySendEmailRequest = (input, context) => {
    const entries = {};
    if (input.Source !== undefined && input.Source !== null) {
        entries["Source"] = input.Source;
    }
    if (input.Destination !== undefined && input.Destination !== null) {
        const memberEntries = serializeAws_queryDestination(input.Destination, context);
        Object.entries(memberEntries).forEach(([key, value]) => {
            const loc = `Destination.${key}`;
            entries[loc] = value;
        });
    }
    if (input.Message !== undefined && input.Message !== null) {
        const memberEntries = serializeAws_queryMessage(input.Message, context);
        Object.entries(memberEntries).forEach(([key, value]) => {
            const loc = `Message.${key}`;
            entries[loc] = value;
        });
    }
    if (input.ReplyToAddresses !== undefined && input.ReplyToAddresses !== null) {
        const memberEntries = serializeAws_queryAddressList(input.ReplyToAddresses, context);
        Object.entries(memberEntries).forEach(([key, value]) => {
            const loc = `ReplyToAddresses.${key}`;
            entries[loc] = value;
        });
    }
    if (input.ReturnPath !== undefined && input.ReturnPath !== null) {
        entries["ReturnPath"] = input.ReturnPath;
    }
    if (input.SourceArn !== undefined && input.SourceArn !== null) {
        entries["SourceArn"] = input.SourceArn;
    }
    if (input.ReturnPathArn !== undefined && input.ReturnPathArn !== null) {
        entries["ReturnPathArn"] = input.ReturnPathArn;
    }
    if (input.Tags !== undefined && input.Tags !== null) {
        const memberEntries = serializeAws_queryMessageTagList(input.Tags, context);
        Object.entries(memberEntries).forEach(([key, value]) => {
            const loc = `Tags.${key}`;
            entries[loc] = value;
        });
    }
    if (input.ConfigurationSetName !== undefined && input.ConfigurationSetName !== null) {
        entries["ConfigurationSetName"] = input.ConfigurationSetName;
    }
    return entries;
};
const serializeAws_querySendRawEmailRequest = (input, context) => {
    const entries = {};
    if (input.Source !== undefined && input.Source !== null) {
        entries["Source"] = input.Source;
    }
    if (input.Destinations !== undefined && input.Destinations !== null) {
        const memberEntries = serializeAws_queryAddressList(input.Destinations, context);
        Object.entries(memberEntries).forEach(([key, value]) => {
            const loc = `Destinations.${key}`;
            entries[loc] = value;
        });
    }
    if (input.RawMessage !== undefined && input.RawMessage !== null) {
        const memberEntries = serializeAws_queryRawMessage(input.RawMessage, context);
        Object.entries(memberEntries).forEach(([key, value]) => {
            const loc = `RawMessage.${key}`;
            entries[loc] = value;
        });
    }
    if (input.FromArn !== undefined && input.FromArn !== null) {
        entries["FromArn"] = input.FromArn;
    }
    if (input.SourceArn !== undefined && input.SourceArn !== null) {
        entries["SourceArn"] = input.SourceArn;
    }
    if (input.ReturnPathArn !== undefined && input.ReturnPathArn !== null) {
        entries["ReturnPathArn"] = input.ReturnPathArn;
    }
    if (input.Tags !== undefined && input.Tags !== null) {
        const memberEntries = serializeAws_queryMessageTagList(input.Tags, context);
        Object.entries(memberEntries).forEach(([key, value]) => {
            const loc = `Tags.${key}`;
            entries[loc] = value;
        });
    }
    if (input.ConfigurationSetName !== undefined && input.ConfigurationSetName !== null) {
        entries["ConfigurationSetName"] = input.ConfigurationSetName;
    }
    return entries;
};
const serializeAws_querySendTemplatedEmailRequest = (input, context) => {
    const entries = {};
    if (input.Source !== undefined && input.Source !== null) {
        entries["Source"] = input.Source;
    }
    if (input.Destination !== undefined && input.Destination !== null) {
        const memberEntries = serializeAws_queryDestination(input.Destination, context);
        Object.entries(memberEntries).forEach(([key, value]) => {
            const loc = `Destination.${key}`;
            entries[loc] = value;
        });
    }
    if (input.ReplyToAddresses !== undefined && input.ReplyToAddresses !== null) {
        const memberEntries = serializeAws_queryAddressList(input.ReplyToAddresses, context);
        Object.entries(memberEntries).forEach(([key, value]) => {
            const loc = `ReplyToAddresses.${key}`;
            entries[loc] = value;
        });
    }
    if (input.ReturnPath !== undefined && input.ReturnPath !== null) {
        entries["ReturnPath"] = input.ReturnPath;
    }
    if (input.SourceArn !== undefined && input.SourceArn !== null) {
        entries["SourceArn"] = input.SourceArn;
    }
    if (input.ReturnPathArn !== undefined && input.ReturnPathArn !== null) {
        entries["ReturnPathArn"] = input.ReturnPathArn;
    }
    if (input.Tags !== undefined && input.Tags !== null) {
        const memberEntries = serializeAws_queryMessageTagList(input.Tags, context);
        Object.entries(memberEntries).forEach(([key, value]) => {
            const loc = `Tags.${key}`;
            entries[loc] = value;
        });
    }
    if (input.ConfigurationSetName !== undefined && input.ConfigurationSetName !== null) {
        entries["ConfigurationSetName"] = input.ConfigurationSetName;
    }
    if (input.Template !== undefined && input.Template !== null) {
        entries["Template"] = input.Template;
    }
    if (input.TemplateArn !== undefined && input.TemplateArn !== null) {
        entries["TemplateArn"] = input.TemplateArn;
    }
    if (input.TemplateData !== undefined && input.TemplateData !== null) {
        entries["TemplateData"] = input.TemplateData;
    }
    return entries;
};
const serializeAws_querySetActiveReceiptRuleSetRequest = (input, context) => {
    const entries = {};
    if (input.RuleSetName !== undefined && input.RuleSetName !== null) {
        entries["RuleSetName"] = input.RuleSetName;
    }
    return entries;
};
const serializeAws_querySetIdentityDkimEnabledRequest = (input, context) => {
    const entries = {};
    if (input.Identity !== undefined && input.Identity !== null) {
        entries["Identity"] = input.Identity;
    }
    if (input.DkimEnabled !== undefined && input.DkimEnabled !== null) {
        entries["DkimEnabled"] = input.DkimEnabled;
    }
    return entries;
};
const serializeAws_querySetIdentityFeedbackForwardingEnabledRequest = (input, context) => {
    const entries = {};
    if (input.Identity !== undefined && input.Identity !== null) {
        entries["Identity"] = input.Identity;
    }
    if (input.ForwardingEnabled !== undefined && input.ForwardingEnabled !== null) {
        entries["ForwardingEnabled"] = input.ForwardingEnabled;
    }
    return entries;
};
const serializeAws_querySetIdentityHeadersInNotificationsEnabledRequest = (input, context) => {
    const entries = {};
    if (input.Identity !== undefined && input.Identity !== null) {
        entries["Identity"] = input.Identity;
    }
    if (input.NotificationType !== undefined && input.NotificationType !== null) {
        entries["NotificationType"] = input.NotificationType;
    }
    if (input.Enabled !== undefined && input.Enabled !== null) {
        entries["Enabled"] = input.Enabled;
    }
    return entries;
};
const serializeAws_querySetIdentityMailFromDomainRequest = (input, context) => {
    const entries = {};
    if (input.Identity !== undefined && input.Identity !== null) {
        entries["Identity"] = input.Identity;
    }
    if (input.MailFromDomain !== undefined && input.MailFromDomain !== null) {
        entries["MailFromDomain"] = input.MailFromDomain;
    }
    if (input.BehaviorOnMXFailure !== undefined && input.BehaviorOnMXFailure !== null) {
        entries["BehaviorOnMXFailure"] = input.BehaviorOnMXFailure;
    }
    return entries;
};
const serializeAws_querySetIdentityNotificationTopicRequest = (input, context) => {
    const entries = {};
    if (input.Identity !== undefined && input.Identity !== null) {
        entries["Identity"] = input.Identity;
    }
    if (input.NotificationType !== undefined && input.NotificationType !== null) {
        entries["NotificationType"] = input.NotificationType;
    }
    if (input.SnsTopic !== undefined && input.SnsTopic !== null) {
        entries["SnsTopic"] = input.SnsTopic;
    }
    return entries;
};
const serializeAws_querySetReceiptRulePositionRequest = (input, context) => {
    const entries = {};
    if (input.RuleSetName !== undefined && input.RuleSetName !== null) {
        entries["RuleSetName"] = input.RuleSetName;
    }
    if (input.RuleName !== undefined && input.RuleName !== null) {
        entries["RuleName"] = input.RuleName;
    }
    if (input.After !== undefined && input.After !== null) {
        entries["After"] = input.After;
    }
    return entries;
};
const serializeAws_querySNSAction = (input, context) => {
    const entries = {};
    if (input.TopicArn !== undefined && input.TopicArn !== null) {
        entries["TopicArn"] = input.TopicArn;
    }
    if (input.Encoding !== undefined && input.Encoding !== null) {
        entries["Encoding"] = input.Encoding;
    }
    return entries;
};
const serializeAws_querySNSDestination = (input, context) => {
    const entries = {};
    if (input.TopicARN !== undefined && input.TopicARN !== null) {
        entries["TopicARN"] = input.TopicARN;
    }
    return entries;
};
const serializeAws_queryStopAction = (input, context) => {
    const entries = {};
    if (input.Scope !== undefined && input.Scope !== null) {
        entries["Scope"] = input.Scope;
    }
    if (input.TopicArn !== undefined && input.TopicArn !== null) {
        entries["TopicArn"] = input.TopicArn;
    }
    return entries;
};
const serializeAws_queryTemplate = (input, context) => {
    const entries = {};
    if (input.TemplateName !== undefined && input.TemplateName !== null) {
        entries["TemplateName"] = input.TemplateName;
    }
    if (input.SubjectPart !== undefined && input.SubjectPart !== null) {
        entries["SubjectPart"] = input.SubjectPart;
    }
    if (input.TextPart !== undefined && input.TextPart !== null) {
        entries["TextPart"] = input.TextPart;
    }
    if (input.HtmlPart !== undefined && input.HtmlPart !== null) {
        entries["HtmlPart"] = input.HtmlPart;
    }
    return entries;
};
const serializeAws_queryTestRenderTemplateRequest = (input, context) => {
    const entries = {};
    if (input.TemplateName !== undefined && input.TemplateName !== null) {
        entries["TemplateName"] = input.TemplateName;
    }
    if (input.TemplateData !== undefined && input.TemplateData !== null) {
        entries["TemplateData"] = input.TemplateData;
    }
    return entries;
};
const serializeAws_queryTrackingOptions = (input, context) => {
    const entries = {};
    if (input.CustomRedirectDomain !== undefined && input.CustomRedirectDomain !== null) {
        entries["CustomRedirectDomain"] = input.CustomRedirectDomain;
    }
    return entries;
};
const serializeAws_queryUpdateAccountSendingEnabledRequest = (input, context) => {
    const entries = {};
    if (input.Enabled !== undefined && input.Enabled !== null) {
        entries["Enabled"] = input.Enabled;
    }
    return entries;
};
const serializeAws_queryUpdateConfigurationSetEventDestinationRequest = (input, context) => {
    const entries = {};
    if (input.ConfigurationSetName !== undefined && input.ConfigurationSetName !== null) {
        entries["ConfigurationSetName"] = input.ConfigurationSetName;
    }
    if (input.EventDestination !== undefined && input.EventDestination !== null) {
        const memberEntries = serializeAws_queryEventDestination(input.EventDestination, context);
        Object.entries(memberEntries).forEach(([key, value]) => {
            const loc = `EventDestination.${key}`;
            entries[loc] = value;
        });
    }
    return entries;
};
const serializeAws_queryUpdateConfigurationSetReputationMetricsEnabledRequest = (input, context) => {
    const entries = {};
    if (input.ConfigurationSetName !== undefined && input.ConfigurationSetName !== null) {
        entries["ConfigurationSetName"] = input.ConfigurationSetName;
    }
    if (input.Enabled !== undefined && input.Enabled !== null) {
        entries["Enabled"] = input.Enabled;
    }
    return entries;
};
const serializeAws_queryUpdateConfigurationSetSendingEnabledRequest = (input, context) => {
    const entries = {};
    if (input.ConfigurationSetName !== undefined && input.ConfigurationSetName !== null) {
        entries["ConfigurationSetName"] = input.ConfigurationSetName;
    }
    if (input.Enabled !== undefined && input.Enabled !== null) {
        entries["Enabled"] = input.Enabled;
    }
    return entries;
};
const serializeAws_queryUpdateConfigurationSetTrackingOptionsRequest = (input, context) => {
    const entries = {};
    if (input.ConfigurationSetName !== undefined && input.ConfigurationSetName !== null) {
        entries["ConfigurationSetName"] = input.ConfigurationSetName;
    }
    if (input.TrackingOptions !== undefined && input.TrackingOptions !== null) {
        const memberEntries = serializeAws_queryTrackingOptions(input.TrackingOptions, context);
        Object.entries(memberEntries).forEach(([key, value]) => {
            const loc = `TrackingOptions.${key}`;
            entries[loc] = value;
        });
    }
    return entries;
};
const serializeAws_queryUpdateCustomVerificationEmailTemplateRequest = (input, context) => {
    const entries = {};
    if (input.TemplateName !== undefined && input.TemplateName !== null) {
        entries["TemplateName"] = input.TemplateName;
    }
    if (input.FromEmailAddress !== undefined && input.FromEmailAddress !== null) {
        entries["FromEmailAddress"] = input.FromEmailAddress;
    }
    if (input.TemplateSubject !== undefined && input.TemplateSubject !== null) {
        entries["TemplateSubject"] = input.TemplateSubject;
    }
    if (input.TemplateContent !== undefined && input.TemplateContent !== null) {
        entries["TemplateContent"] = input.TemplateContent;
    }
    if (input.SuccessRedirectionURL !== undefined && input.SuccessRedirectionURL !== null) {
        entries["SuccessRedirectionURL"] = input.SuccessRedirectionURL;
    }
    if (input.FailureRedirectionURL !== undefined && input.FailureRedirectionURL !== null) {
        entries["FailureRedirectionURL"] = input.FailureRedirectionURL;
    }
    return entries;
};
const serializeAws_queryUpdateReceiptRuleRequest = (input, context) => {
    const entries = {};
    if (input.RuleSetName !== undefined && input.RuleSetName !== null) {
        entries["RuleSetName"] = input.RuleSetName;
    }
    if (input.Rule !== undefined && input.Rule !== null) {
        const memberEntries = serializeAws_queryReceiptRule(input.Rule, context);
        Object.entries(memberEntries).forEach(([key, value]) => {
            const loc = `Rule.${key}`;
            entries[loc] = value;
        });
    }
    return entries;
};
const serializeAws_queryUpdateTemplateRequest = (input, context) => {
    const entries = {};
    if (input.Template !== undefined && input.Template !== null) {
        const memberEntries = serializeAws_queryTemplate(input.Template, context);
        Object.entries(memberEntries).forEach(([key, value]) => {
            const loc = `Template.${key}`;
            entries[loc] = value;
        });
    }
    return entries;
};
const serializeAws_queryVerifyDomainDkimRequest = (input, context) => {
    const entries = {};
    if (input.Domain !== undefined && input.Domain !== null) {
        entries["Domain"] = input.Domain;
    }
    return entries;
};
const serializeAws_queryVerifyDomainIdentityRequest = (input, context) => {
    const entries = {};
    if (input.Domain !== undefined && input.Domain !== null) {
        entries["Domain"] = input.Domain;
    }
    return entries;
};
const serializeAws_queryVerifyEmailAddressRequest = (input, context) => {
    const entries = {};
    if (input.EmailAddress !== undefined && input.EmailAddress !== null) {
        entries["EmailAddress"] = input.EmailAddress;
    }
    return entries;
};
const serializeAws_queryVerifyEmailIdentityRequest = (input, context) => {
    const entries = {};
    if (input.EmailAddress !== undefined && input.EmailAddress !== null) {
        entries["EmailAddress"] = input.EmailAddress;
    }
    return entries;
};
const serializeAws_queryWorkmailAction = (input, context) => {
    const entries = {};
    if (input.TopicArn !== undefined && input.TopicArn !== null) {
        entries["TopicArn"] = input.TopicArn;
    }
    if (input.OrganizationArn !== undefined && input.OrganizationArn !== null) {
        entries["OrganizationArn"] = input.OrganizationArn;
    }
    return entries;
};
const deserializeAws_queryAccountSendingPausedException = (output, context) => {
    let contents = {
        message: undefined,
    };
    if (output["message"] !== undefined) {
        contents.message = output["message"];
    }
    return contents;
};
const deserializeAws_queryAddHeaderAction = (output, context) => {
    let contents = {
        HeaderName: undefined,
        HeaderValue: undefined,
    };
    if (output["HeaderName"] !== undefined) {
        contents.HeaderName = output["HeaderName"];
    }
    if (output["HeaderValue"] !== undefined) {
        contents.HeaderValue = output["HeaderValue"];
    }
    return contents;
};
const deserializeAws_queryAddressList = (output, context) => {
    return (output || [])
        .filter((e) => e != null)
        .map((entry) => {
        if (entry === null) {
            return null;
        }
        return entry;
    });
};
const deserializeAws_queryAlreadyExistsException = (output, context) => {
    let contents = {
        Name: undefined,
        message: undefined,
    };
    if (output["Name"] !== undefined) {
        contents.Name = output["Name"];
    }
    if (output["message"] !== undefined) {
        contents.message = output["message"];
    }
    return contents;
};
const deserializeAws_queryBounceAction = (output, context) => {
    let contents = {
        TopicArn: undefined,
        SmtpReplyCode: undefined,
        StatusCode: undefined,
        Message: undefined,
        Sender: undefined,
    };
    if (output["TopicArn"] !== undefined) {
        contents.TopicArn = output["TopicArn"];
    }
    if (output["SmtpReplyCode"] !== undefined) {
        contents.SmtpReplyCode = output["SmtpReplyCode"];
    }
    if (output["StatusCode"] !== undefined) {
        contents.StatusCode = output["StatusCode"];
    }
    if (output["Message"] !== undefined) {
        contents.Message = output["Message"];
    }
    if (output["Sender"] !== undefined) {
        contents.Sender = output["Sender"];
    }
    return contents;
};
const deserializeAws_queryBulkEmailDestinationStatus = (output, context) => {
    let contents = {
        Status: undefined,
        Error: undefined,
        MessageId: undefined,
    };
    if (output["Status"] !== undefined) {
        contents.Status = output["Status"];
    }
    if (output["Error"] !== undefined) {
        contents.Error = output["Error"];
    }
    if (output["MessageId"] !== undefined) {
        contents.MessageId = output["MessageId"];
    }
    return contents;
};
const deserializeAws_queryBulkEmailDestinationStatusList = (output, context) => {
    return (output || [])
        .filter((e) => e != null)
        .map((entry) => {
        if (entry === null) {
            return null;
        }
        return deserializeAws_queryBulkEmailDestinationStatus(entry, context);
    });
};
const deserializeAws_queryCannotDeleteException = (output, context) => {
    let contents = {
        Name: undefined,
        message: undefined,
    };
    if (output["Name"] !== undefined) {
        contents.Name = output["Name"];
    }
    if (output["message"] !== undefined) {
        contents.message = output["message"];
    }
    return contents;
};
const deserializeAws_queryCloneReceiptRuleSetResponse = (output, context) => {
    let contents = {};
    return contents;
};
const deserializeAws_queryCloudWatchDestination = (output, context) => {
    let contents = {
        DimensionConfigurations: undefined,
    };
    if (output.DimensionConfigurations === "") {
        contents.DimensionConfigurations = [];
    }
    if (output["DimensionConfigurations"] !== undefined && output["DimensionConfigurations"]["member"] !== undefined) {
        contents.DimensionConfigurations = deserializeAws_queryCloudWatchDimensionConfigurations(smithy_client_1.getArrayIfSingleItem(output["DimensionConfigurations"]["member"]), context);
    }
    return contents;
};
const deserializeAws_queryCloudWatchDimensionConfiguration = (output, context) => {
    let contents = {
        DimensionName: undefined,
        DimensionValueSource: undefined,
        DefaultDimensionValue: undefined,
    };
    if (output["DimensionName"] !== undefined) {
        contents.DimensionName = output["DimensionName"];
    }
    if (output["DimensionValueSource"] !== undefined) {
        contents.DimensionValueSource = output["DimensionValueSource"];
    }
    if (output["DefaultDimensionValue"] !== undefined) {
        contents.DefaultDimensionValue = output["DefaultDimensionValue"];
    }
    return contents;
};
const deserializeAws_queryCloudWatchDimensionConfigurations = (output, context) => {
    return (output || [])
        .filter((e) => e != null)
        .map((entry) => {
        if (entry === null) {
            return null;
        }
        return deserializeAws_queryCloudWatchDimensionConfiguration(entry, context);
    });
};
const deserializeAws_queryConfigurationSet = (output, context) => {
    let contents = {
        Name: undefined,
    };
    if (output["Name"] !== undefined) {
        contents.Name = output["Name"];
    }
    return contents;
};
const deserializeAws_queryConfigurationSetAlreadyExistsException = (output, context) => {
    let contents = {
        ConfigurationSetName: undefined,
        message: undefined,
    };
    if (output["ConfigurationSetName"] !== undefined) {
        contents.ConfigurationSetName = output["ConfigurationSetName"];
    }
    if (output["message"] !== undefined) {
        contents.message = output["message"];
    }
    return contents;
};
const deserializeAws_queryConfigurationSetDoesNotExistException = (output, context) => {
    let contents = {
        ConfigurationSetName: undefined,
        message: undefined,
    };
    if (output["ConfigurationSetName"] !== undefined) {
        contents.ConfigurationSetName = output["ConfigurationSetName"];
    }
    if (output["message"] !== undefined) {
        contents.message = output["message"];
    }
    return contents;
};
const deserializeAws_queryConfigurationSets = (output, context) => {
    return (output || [])
        .filter((e) => e != null)
        .map((entry) => {
        if (entry === null) {
            return null;
        }
        return deserializeAws_queryConfigurationSet(entry, context);
    });
};
const deserializeAws_queryConfigurationSetSendingPausedException = (output, context) => {
    let contents = {
        ConfigurationSetName: undefined,
        message: undefined,
    };
    if (output["ConfigurationSetName"] !== undefined) {
        contents.ConfigurationSetName = output["ConfigurationSetName"];
    }
    if (output["message"] !== undefined) {
        contents.message = output["message"];
    }
    return contents;
};
const deserializeAws_queryCreateConfigurationSetEventDestinationResponse = (output, context) => {
    let contents = {};
    return contents;
};
const deserializeAws_queryCreateConfigurationSetResponse = (output, context) => {
    let contents = {};
    return contents;
};
const deserializeAws_queryCreateConfigurationSetTrackingOptionsResponse = (output, context) => {
    let contents = {};
    return contents;
};
const deserializeAws_queryCreateReceiptFilterResponse = (output, context) => {
    let contents = {};
    return contents;
};
const deserializeAws_queryCreateReceiptRuleResponse = (output, context) => {
    let contents = {};
    return contents;
};
const deserializeAws_queryCreateReceiptRuleSetResponse = (output, context) => {
    let contents = {};
    return contents;
};
const deserializeAws_queryCreateTemplateResponse = (output, context) => {
    let contents = {};
    return contents;
};
const deserializeAws_queryCustomVerificationEmailInvalidContentException = (output, context) => {
    let contents = {
        message: undefined,
    };
    if (output["message"] !== undefined) {
        contents.message = output["message"];
    }
    return contents;
};
const deserializeAws_queryCustomVerificationEmailTemplate = (output, context) => {
    let contents = {
        TemplateName: undefined,
        FromEmailAddress: undefined,
        TemplateSubject: undefined,
        SuccessRedirectionURL: undefined,
        FailureRedirectionURL: undefined,
    };
    if (output["TemplateName"] !== undefined) {
        contents.TemplateName = output["TemplateName"];
    }
    if (output["FromEmailAddress"] !== undefined) {
        contents.FromEmailAddress = output["FromEmailAddress"];
    }
    if (output["TemplateSubject"] !== undefined) {
        contents.TemplateSubject = output["TemplateSubject"];
    }
    if (output["SuccessRedirectionURL"] !== undefined) {
        contents.SuccessRedirectionURL = output["SuccessRedirectionURL"];
    }
    if (output["FailureRedirectionURL"] !== undefined) {
        contents.FailureRedirectionURL = output["FailureRedirectionURL"];
    }
    return contents;
};
const deserializeAws_queryCustomVerificationEmailTemplateAlreadyExistsException = (output, context) => {
    let contents = {
        CustomVerificationEmailTemplateName: undefined,
        message: undefined,
    };
    if (output["CustomVerificationEmailTemplateName"] !== undefined) {
        contents.CustomVerificationEmailTemplateName = output["CustomVerificationEmailTemplateName"];
    }
    if (output["message"] !== undefined) {
        contents.message = output["message"];
    }
    return contents;
};
const deserializeAws_queryCustomVerificationEmailTemplateDoesNotExistException = (output, context) => {
    let contents = {
        CustomVerificationEmailTemplateName: undefined,
        message: undefined,
    };
    if (output["CustomVerificationEmailTemplateName"] !== undefined) {
        contents.CustomVerificationEmailTemplateName = output["CustomVerificationEmailTemplateName"];
    }
    if (output["message"] !== undefined) {
        contents.message = output["message"];
    }
    return contents;
};
const deserializeAws_queryCustomVerificationEmailTemplates = (output, context) => {
    return (output || [])
        .filter((e) => e != null)
        .map((entry) => {
        if (entry === null) {
            return null;
        }
        return deserializeAws_queryCustomVerificationEmailTemplate(entry, context);
    });
};
const deserializeAws_queryDeleteConfigurationSetEventDestinationResponse = (output, context) => {
    let contents = {};
    return contents;
};
const deserializeAws_queryDeleteConfigurationSetResponse = (output, context) => {
    let contents = {};
    return contents;
};
const deserializeAws_queryDeleteConfigurationSetTrackingOptionsResponse = (output, context) => {
    let contents = {};
    return contents;
};
const deserializeAws_queryDeleteIdentityPolicyResponse = (output, context) => {
    let contents = {};
    return contents;
};
const deserializeAws_queryDeleteIdentityResponse = (output, context) => {
    let contents = {};
    return contents;
};
const deserializeAws_queryDeleteReceiptFilterResponse = (output, context) => {
    let contents = {};
    return contents;
};
const deserializeAws_queryDeleteReceiptRuleResponse = (output, context) => {
    let contents = {};
    return contents;
};
const deserializeAws_queryDeleteReceiptRuleSetResponse = (output, context) => {
    let contents = {};
    return contents;
};
const deserializeAws_queryDeleteTemplateResponse = (output, context) => {
    let contents = {};
    return contents;
};
const deserializeAws_queryDeliveryOptions = (output, context) => {
    let contents = {
        TlsPolicy: undefined,
    };
    if (output["TlsPolicy"] !== undefined) {
        contents.TlsPolicy = output["TlsPolicy"];
    }
    return contents;
};
const deserializeAws_queryDescribeActiveReceiptRuleSetResponse = (output, context) => {
    let contents = {
        Metadata: undefined,
        Rules: undefined,
    };
    if (output["Metadata"] !== undefined) {
        contents.Metadata = deserializeAws_queryReceiptRuleSetMetadata(output["Metadata"], context);
    }
    if (output.Rules === "") {
        contents.Rules = [];
    }
    if (output["Rules"] !== undefined && output["Rules"]["member"] !== undefined) {
        contents.Rules = deserializeAws_queryReceiptRulesList(smithy_client_1.getArrayIfSingleItem(output["Rules"]["member"]), context);
    }
    return contents;
};
const deserializeAws_queryDescribeConfigurationSetResponse = (output, context) => {
    let contents = {
        ConfigurationSet: undefined,
        EventDestinations: undefined,
        TrackingOptions: undefined,
        DeliveryOptions: undefined,
        ReputationOptions: undefined,
    };
    if (output["ConfigurationSet"] !== undefined) {
        contents.ConfigurationSet = deserializeAws_queryConfigurationSet(output["ConfigurationSet"], context);
    }
    if (output.EventDestinations === "") {
        contents.EventDestinations = [];
    }
    if (output["EventDestinations"] !== undefined && output["EventDestinations"]["member"] !== undefined) {
        contents.EventDestinations = deserializeAws_queryEventDestinations(smithy_client_1.getArrayIfSingleItem(output["EventDestinations"]["member"]), context);
    }
    if (output["TrackingOptions"] !== undefined) {
        contents.TrackingOptions = deserializeAws_queryTrackingOptions(output["TrackingOptions"], context);
    }
    if (output["DeliveryOptions"] !== undefined) {
        contents.DeliveryOptions = deserializeAws_queryDeliveryOptions(output["DeliveryOptions"], context);
    }
    if (output["ReputationOptions"] !== undefined) {
        contents.ReputationOptions = deserializeAws_queryReputationOptions(output["ReputationOptions"], context);
    }
    return contents;
};
const deserializeAws_queryDescribeReceiptRuleResponse = (output, context) => {
    let contents = {
        Rule: undefined,
    };
    if (output["Rule"] !== undefined) {
        contents.Rule = deserializeAws_queryReceiptRule(output["Rule"], context);
    }
    return contents;
};
const deserializeAws_queryDescribeReceiptRuleSetResponse = (output, context) => {
    let contents = {
        Metadata: undefined,
        Rules: undefined,
    };
    if (output["Metadata"] !== undefined) {
        contents.Metadata = deserializeAws_queryReceiptRuleSetMetadata(output["Metadata"], context);
    }
    if (output.Rules === "") {
        contents.Rules = [];
    }
    if (output["Rules"] !== undefined && output["Rules"]["member"] !== undefined) {
        contents.Rules = deserializeAws_queryReceiptRulesList(smithy_client_1.getArrayIfSingleItem(output["Rules"]["member"]), context);
    }
    return contents;
};
const deserializeAws_queryDkimAttributes = (output, context) => {
    return output.reduce((acc, pair) => {
        if (pair["value"] === null) {
            return acc;
        }
        return {
            ...acc,
            [pair["key"]]: deserializeAws_queryIdentityDkimAttributes(pair["value"], context),
        };
    }, {});
};
const deserializeAws_queryEventDestination = (output, context) => {
    let contents = {
        Name: undefined,
        Enabled: undefined,
        MatchingEventTypes: undefined,
        KinesisFirehoseDestination: undefined,
        CloudWatchDestination: undefined,
        SNSDestination: undefined,
    };
    if (output["Name"] !== undefined) {
        contents.Name = output["Name"];
    }
    if (output["Enabled"] !== undefined) {
        contents.Enabled = output["Enabled"] == "true";
    }
    if (output.MatchingEventTypes === "") {
        contents.MatchingEventTypes = [];
    }
    if (output["MatchingEventTypes"] !== undefined && output["MatchingEventTypes"]["member"] !== undefined) {
        contents.MatchingEventTypes = deserializeAws_queryEventTypes(smithy_client_1.getArrayIfSingleItem(output["MatchingEventTypes"]["member"]), context);
    }
    if (output["KinesisFirehoseDestination"] !== undefined) {
        contents.KinesisFirehoseDestination = deserializeAws_queryKinesisFirehoseDestination(output["KinesisFirehoseDestination"], context);
    }
    if (output["CloudWatchDestination"] !== undefined) {
        contents.CloudWatchDestination = deserializeAws_queryCloudWatchDestination(output["CloudWatchDestination"], context);
    }
    if (output["SNSDestination"] !== undefined) {
        contents.SNSDestination = deserializeAws_querySNSDestination(output["SNSDestination"], context);
    }
    return contents;
};
const deserializeAws_queryEventDestinationAlreadyExistsException = (output, context) => {
    let contents = {
        ConfigurationSetName: undefined,
        EventDestinationName: undefined,
        message: undefined,
    };
    if (output["ConfigurationSetName"] !== undefined) {
        contents.ConfigurationSetName = output["ConfigurationSetName"];
    }
    if (output["EventDestinationName"] !== undefined) {
        contents.EventDestinationName = output["EventDestinationName"];
    }
    if (output["message"] !== undefined) {
        contents.message = output["message"];
    }
    return contents;
};
const deserializeAws_queryEventDestinationDoesNotExistException = (output, context) => {
    let contents = {
        ConfigurationSetName: undefined,
        EventDestinationName: undefined,
        message: undefined,
    };
    if (output["ConfigurationSetName"] !== undefined) {
        contents.ConfigurationSetName = output["ConfigurationSetName"];
    }
    if (output["EventDestinationName"] !== undefined) {
        contents.EventDestinationName = output["EventDestinationName"];
    }
    if (output["message"] !== undefined) {
        contents.message = output["message"];
    }
    return contents;
};
const deserializeAws_queryEventDestinations = (output, context) => {
    return (output || [])
        .filter((e) => e != null)
        .map((entry) => {
        if (entry === null) {
            return null;
        }
        return deserializeAws_queryEventDestination(entry, context);
    });
};
const deserializeAws_queryEventTypes = (output, context) => {
    return (output || [])
        .filter((e) => e != null)
        .map((entry) => {
        if (entry === null) {
            return null;
        }
        return entry;
    });
};
const deserializeAws_queryFromEmailAddressNotVerifiedException = (output, context) => {
    let contents = {
        FromEmailAddress: undefined,
        message: undefined,
    };
    if (output["FromEmailAddress"] !== undefined) {
        contents.FromEmailAddress = output["FromEmailAddress"];
    }
    if (output["message"] !== undefined) {
        contents.message = output["message"];
    }
    return contents;
};
const deserializeAws_queryGetAccountSendingEnabledResponse = (output, context) => {
    let contents = {
        Enabled: undefined,
    };
    if (output["Enabled"] !== undefined) {
        contents.Enabled = output["Enabled"] == "true";
    }
    return contents;
};
const deserializeAws_queryGetCustomVerificationEmailTemplateResponse = (output, context) => {
    let contents = {
        TemplateName: undefined,
        FromEmailAddress: undefined,
        TemplateSubject: undefined,
        TemplateContent: undefined,
        SuccessRedirectionURL: undefined,
        FailureRedirectionURL: undefined,
    };
    if (output["TemplateName"] !== undefined) {
        contents.TemplateName = output["TemplateName"];
    }
    if (output["FromEmailAddress"] !== undefined) {
        contents.FromEmailAddress = output["FromEmailAddress"];
    }
    if (output["TemplateSubject"] !== undefined) {
        contents.TemplateSubject = output["TemplateSubject"];
    }
    if (output["TemplateContent"] !== undefined) {
        contents.TemplateContent = output["TemplateContent"];
    }
    if (output["SuccessRedirectionURL"] !== undefined) {
        contents.SuccessRedirectionURL = output["SuccessRedirectionURL"];
    }
    if (output["FailureRedirectionURL"] !== undefined) {
        contents.FailureRedirectionURL = output["FailureRedirectionURL"];
    }
    return contents;
};
const deserializeAws_queryGetIdentityDkimAttributesResponse = (output, context) => {
    let contents = {
        DkimAttributes: undefined,
    };
    if (output.DkimAttributes === "") {
        contents.DkimAttributes = {};
    }
    if (output["DkimAttributes"] !== undefined && output["DkimAttributes"]["entry"] !== undefined) {
        contents.DkimAttributes = deserializeAws_queryDkimAttributes(smithy_client_1.getArrayIfSingleItem(output["DkimAttributes"]["entry"]), context);
    }
    return contents;
};
const deserializeAws_queryGetIdentityMailFromDomainAttributesResponse = (output, context) => {
    let contents = {
        MailFromDomainAttributes: undefined,
    };
    if (output.MailFromDomainAttributes === "") {
        contents.MailFromDomainAttributes = {};
    }
    if (output["MailFromDomainAttributes"] !== undefined && output["MailFromDomainAttributes"]["entry"] !== undefined) {
        contents.MailFromDomainAttributes = deserializeAws_queryMailFromDomainAttributes(smithy_client_1.getArrayIfSingleItem(output["MailFromDomainAttributes"]["entry"]), context);
    }
    return contents;
};
const deserializeAws_queryGetIdentityNotificationAttributesResponse = (output, context) => {
    let contents = {
        NotificationAttributes: undefined,
    };
    if (output.NotificationAttributes === "") {
        contents.NotificationAttributes = {};
    }
    if (output["NotificationAttributes"] !== undefined && output["NotificationAttributes"]["entry"] !== undefined) {
        contents.NotificationAttributes = deserializeAws_queryNotificationAttributes(smithy_client_1.getArrayIfSingleItem(output["NotificationAttributes"]["entry"]), context);
    }
    return contents;
};
const deserializeAws_queryGetIdentityPoliciesResponse = (output, context) => {
    let contents = {
        Policies: undefined,
    };
    if (output.Policies === "") {
        contents.Policies = {};
    }
    if (output["Policies"] !== undefined && output["Policies"]["entry"] !== undefined) {
        contents.Policies = deserializeAws_queryPolicyMap(smithy_client_1.getArrayIfSingleItem(output["Policies"]["entry"]), context);
    }
    return contents;
};
const deserializeAws_queryGetIdentityVerificationAttributesResponse = (output, context) => {
    let contents = {
        VerificationAttributes: undefined,
    };
    if (output.VerificationAttributes === "") {
        contents.VerificationAttributes = {};
    }
    if (output["VerificationAttributes"] !== undefined && output["VerificationAttributes"]["entry"] !== undefined) {
        contents.VerificationAttributes = deserializeAws_queryVerificationAttributes(smithy_client_1.getArrayIfSingleItem(output["VerificationAttributes"]["entry"]), context);
    }
    return contents;
};
const deserializeAws_queryGetSendQuotaResponse = (output, context) => {
    let contents = {
        Max24HourSend: undefined,
        MaxSendRate: undefined,
        SentLast24Hours: undefined,
    };
    if (output["Max24HourSend"] !== undefined) {
        contents.Max24HourSend = parseFloat(output["Max24HourSend"]);
    }
    if (output["MaxSendRate"] !== undefined) {
        contents.MaxSendRate = parseFloat(output["MaxSendRate"]);
    }
    if (output["SentLast24Hours"] !== undefined) {
        contents.SentLast24Hours = parseFloat(output["SentLast24Hours"]);
    }
    return contents;
};
const deserializeAws_queryGetSendStatisticsResponse = (output, context) => {
    let contents = {
        SendDataPoints: undefined,
    };
    if (output.SendDataPoints === "") {
        contents.SendDataPoints = [];
    }
    if (output["SendDataPoints"] !== undefined && output["SendDataPoints"]["member"] !== undefined) {
        contents.SendDataPoints = deserializeAws_querySendDataPointList(smithy_client_1.getArrayIfSingleItem(output["SendDataPoints"]["member"]), context);
    }
    return contents;
};
const deserializeAws_queryGetTemplateResponse = (output, context) => {
    let contents = {
        Template: undefined,
    };
    if (output["Template"] !== undefined) {
        contents.Template = deserializeAws_queryTemplate(output["Template"], context);
    }
    return contents;
};
const deserializeAws_queryIdentityDkimAttributes = (output, context) => {
    let contents = {
        DkimEnabled: undefined,
        DkimVerificationStatus: undefined,
        DkimTokens: undefined,
    };
    if (output["DkimEnabled"] !== undefined) {
        contents.DkimEnabled = output["DkimEnabled"] == "true";
    }
    if (output["DkimVerificationStatus"] !== undefined) {
        contents.DkimVerificationStatus = output["DkimVerificationStatus"];
    }
    if (output.DkimTokens === "") {
        contents.DkimTokens = [];
    }
    if (output["DkimTokens"] !== undefined && output["DkimTokens"]["member"] !== undefined) {
        contents.DkimTokens = deserializeAws_queryVerificationTokenList(smithy_client_1.getArrayIfSingleItem(output["DkimTokens"]["member"]), context);
    }
    return contents;
};
const deserializeAws_queryIdentityList = (output, context) => {
    return (output || [])
        .filter((e) => e != null)
        .map((entry) => {
        if (entry === null) {
            return null;
        }
        return entry;
    });
};
const deserializeAws_queryIdentityMailFromDomainAttributes = (output, context) => {
    let contents = {
        MailFromDomain: undefined,
        MailFromDomainStatus: undefined,
        BehaviorOnMXFailure: undefined,
    };
    if (output["MailFromDomain"] !== undefined) {
        contents.MailFromDomain = output["MailFromDomain"];
    }
    if (output["MailFromDomainStatus"] !== undefined) {
        contents.MailFromDomainStatus = output["MailFromDomainStatus"];
    }
    if (output["BehaviorOnMXFailure"] !== undefined) {
        contents.BehaviorOnMXFailure = output["BehaviorOnMXFailure"];
    }
    return contents;
};
const deserializeAws_queryIdentityNotificationAttributes = (output, context) => {
    let contents = {
        BounceTopic: undefined,
        ComplaintTopic: undefined,
        DeliveryTopic: undefined,
        ForwardingEnabled: undefined,
        HeadersInBounceNotificationsEnabled: undefined,
        HeadersInComplaintNotificationsEnabled: undefined,
        HeadersInDeliveryNotificationsEnabled: undefined,
    };
    if (output["BounceTopic"] !== undefined) {
        contents.BounceTopic = output["BounceTopic"];
    }
    if (output["ComplaintTopic"] !== undefined) {
        contents.ComplaintTopic = output["ComplaintTopic"];
    }
    if (output["DeliveryTopic"] !== undefined) {
        contents.DeliveryTopic = output["DeliveryTopic"];
    }
    if (output["ForwardingEnabled"] !== undefined) {
        contents.ForwardingEnabled = output["ForwardingEnabled"] == "true";
    }
    if (output["HeadersInBounceNotificationsEnabled"] !== undefined) {
        contents.HeadersInBounceNotificationsEnabled = output["HeadersInBounceNotificationsEnabled"] == "true";
    }
    if (output["HeadersInComplaintNotificationsEnabled"] !== undefined) {
        contents.HeadersInComplaintNotificationsEnabled = output["HeadersInComplaintNotificationsEnabled"] == "true";
    }
    if (output["HeadersInDeliveryNotificationsEnabled"] !== undefined) {
        contents.HeadersInDeliveryNotificationsEnabled = output["HeadersInDeliveryNotificationsEnabled"] == "true";
    }
    return contents;
};
const deserializeAws_queryIdentityVerificationAttributes = (output, context) => {
    let contents = {
        VerificationStatus: undefined,
        VerificationToken: undefined,
    };
    if (output["VerificationStatus"] !== undefined) {
        contents.VerificationStatus = output["VerificationStatus"];
    }
    if (output["VerificationToken"] !== undefined) {
        contents.VerificationToken = output["VerificationToken"];
    }
    return contents;
};
const deserializeAws_queryInvalidCloudWatchDestinationException = (output, context) => {
    let contents = {
        ConfigurationSetName: undefined,
        EventDestinationName: undefined,
        message: undefined,
    };
    if (output["ConfigurationSetName"] !== undefined) {
        contents.ConfigurationSetName = output["ConfigurationSetName"];
    }
    if (output["EventDestinationName"] !== undefined) {
        contents.EventDestinationName = output["EventDestinationName"];
    }
    if (output["message"] !== undefined) {
        contents.message = output["message"];
    }
    return contents;
};
const deserializeAws_queryInvalidConfigurationSetException = (output, context) => {
    let contents = {
        message: undefined,
    };
    if (output["message"] !== undefined) {
        contents.message = output["message"];
    }
    return contents;
};
const deserializeAws_queryInvalidDeliveryOptionsException = (output, context) => {
    let contents = {
        message: undefined,
    };
    if (output["message"] !== undefined) {
        contents.message = output["message"];
    }
    return contents;
};
const deserializeAws_queryInvalidFirehoseDestinationException = (output, context) => {
    let contents = {
        ConfigurationSetName: undefined,
        EventDestinationName: undefined,
        message: undefined,
    };
    if (output["ConfigurationSetName"] !== undefined) {
        contents.ConfigurationSetName = output["ConfigurationSetName"];
    }
    if (output["EventDestinationName"] !== undefined) {
        contents.EventDestinationName = output["EventDestinationName"];
    }
    if (output["message"] !== undefined) {
        contents.message = output["message"];
    }
    return contents;
};
const deserializeAws_queryInvalidLambdaFunctionException = (output, context) => {
    let contents = {
        FunctionArn: undefined,
        message: undefined,
    };
    if (output["FunctionArn"] !== undefined) {
        contents.FunctionArn = output["FunctionArn"];
    }
    if (output["message"] !== undefined) {
        contents.message = output["message"];
    }
    return contents;
};
const deserializeAws_queryInvalidPolicyException = (output, context) => {
    let contents = {
        message: undefined,
    };
    if (output["message"] !== undefined) {
        contents.message = output["message"];
    }
    return contents;
};
const deserializeAws_queryInvalidRenderingParameterException = (output, context) => {
    let contents = {
        TemplateName: undefined,
        message: undefined,
    };
    if (output["TemplateName"] !== undefined) {
        contents.TemplateName = output["TemplateName"];
    }
    if (output["message"] !== undefined) {
        contents.message = output["message"];
    }
    return contents;
};
const deserializeAws_queryInvalidS3ConfigurationException = (output, context) => {
    let contents = {
        Bucket: undefined,
        message: undefined,
    };
    if (output["Bucket"] !== undefined) {
        contents.Bucket = output["Bucket"];
    }
    if (output["message"] !== undefined) {
        contents.message = output["message"];
    }
    return contents;
};
const deserializeAws_queryInvalidSNSDestinationException = (output, context) => {
    let contents = {
        ConfigurationSetName: undefined,
        EventDestinationName: undefined,
        message: undefined,
    };
    if (output["ConfigurationSetName"] !== undefined) {
        contents.ConfigurationSetName = output["ConfigurationSetName"];
    }
    if (output["EventDestinationName"] !== undefined) {
        contents.EventDestinationName = output["EventDestinationName"];
    }
    if (output["message"] !== undefined) {
        contents.message = output["message"];
    }
    return contents;
};
const deserializeAws_queryInvalidSnsTopicException = (output, context) => {
    let contents = {
        Topic: undefined,
        message: undefined,
    };
    if (output["Topic"] !== undefined) {
        contents.Topic = output["Topic"];
    }
    if (output["message"] !== undefined) {
        contents.message = output["message"];
    }
    return contents;
};
const deserializeAws_queryInvalidTemplateException = (output, context) => {
    let contents = {
        TemplateName: undefined,
        message: undefined,
    };
    if (output["TemplateName"] !== undefined) {
        contents.TemplateName = output["TemplateName"];
    }
    if (output["message"] !== undefined) {
        contents.message = output["message"];
    }
    return contents;
};
const deserializeAws_queryInvalidTrackingOptionsException = (output, context) => {
    let contents = {
        message: undefined,
    };
    if (output["message"] !== undefined) {
        contents.message = output["message"];
    }
    return contents;
};
const deserializeAws_queryKinesisFirehoseDestination = (output, context) => {
    let contents = {
        IAMRoleARN: undefined,
        DeliveryStreamARN: undefined,
    };
    if (output["IAMRoleARN"] !== undefined) {
        contents.IAMRoleARN = output["IAMRoleARN"];
    }
    if (output["DeliveryStreamARN"] !== undefined) {
        contents.DeliveryStreamARN = output["DeliveryStreamARN"];
    }
    return contents;
};
const deserializeAws_queryLambdaAction = (output, context) => {
    let contents = {
        TopicArn: undefined,
        FunctionArn: undefined,
        InvocationType: undefined,
    };
    if (output["TopicArn"] !== undefined) {
        contents.TopicArn = output["TopicArn"];
    }
    if (output["FunctionArn"] !== undefined) {
        contents.FunctionArn = output["FunctionArn"];
    }
    if (output["InvocationType"] !== undefined) {
        contents.InvocationType = output["InvocationType"];
    }
    return contents;
};
const deserializeAws_queryLimitExceededException = (output, context) => {
    let contents = {
        message: undefined,
    };
    if (output["message"] !== undefined) {
        contents.message = output["message"];
    }
    return contents;
};
const deserializeAws_queryListConfigurationSetsResponse = (output, context) => {
    let contents = {
        ConfigurationSets: undefined,
        NextToken: undefined,
    };
    if (output.ConfigurationSets === "") {
        contents.ConfigurationSets = [];
    }
    if (output["ConfigurationSets"] !== undefined && output["ConfigurationSets"]["member"] !== undefined) {
        contents.ConfigurationSets = deserializeAws_queryConfigurationSets(smithy_client_1.getArrayIfSingleItem(output["ConfigurationSets"]["member"]), context);
    }
    if (output["NextToken"] !== undefined) {
        contents.NextToken = output["NextToken"];
    }
    return contents;
};
const deserializeAws_queryListCustomVerificationEmailTemplatesResponse = (output, context) => {
    let contents = {
        CustomVerificationEmailTemplates: undefined,
        NextToken: undefined,
    };
    if (output.CustomVerificationEmailTemplates === "") {
        contents.CustomVerificationEmailTemplates = [];
    }
    if (output["CustomVerificationEmailTemplates"] !== undefined &&
        output["CustomVerificationEmailTemplates"]["member"] !== undefined) {
        contents.CustomVerificationEmailTemplates = deserializeAws_queryCustomVerificationEmailTemplates(smithy_client_1.getArrayIfSingleItem(output["CustomVerificationEmailTemplates"]["member"]), context);
    }
    if (output["NextToken"] !== undefined) {
        contents.NextToken = output["NextToken"];
    }
    return contents;
};
const deserializeAws_queryListIdentitiesResponse = (output, context) => {
    let contents = {
        Identities: undefined,
        NextToken: undefined,
    };
    if (output.Identities === "") {
        contents.Identities = [];
    }
    if (output["Identities"] !== undefined && output["Identities"]["member"] !== undefined) {
        contents.Identities = deserializeAws_queryIdentityList(smithy_client_1.getArrayIfSingleItem(output["Identities"]["member"]), context);
    }
    if (output["NextToken"] !== undefined) {
        contents.NextToken = output["NextToken"];
    }
    return contents;
};
const deserializeAws_queryListIdentityPoliciesResponse = (output, context) => {
    let contents = {
        PolicyNames: undefined,
    };
    if (output.PolicyNames === "") {
        contents.PolicyNames = [];
    }
    if (output["PolicyNames"] !== undefined && output["PolicyNames"]["member"] !== undefined) {
        contents.PolicyNames = deserializeAws_queryPolicyNameList(smithy_client_1.getArrayIfSingleItem(output["PolicyNames"]["member"]), context);
    }
    return contents;
};
const deserializeAws_queryListReceiptFiltersResponse = (output, context) => {
    let contents = {
        Filters: undefined,
    };
    if (output.Filters === "") {
        contents.Filters = [];
    }
    if (output["Filters"] !== undefined && output["Filters"]["member"] !== undefined) {
        contents.Filters = deserializeAws_queryReceiptFilterList(smithy_client_1.getArrayIfSingleItem(output["Filters"]["member"]), context);
    }
    return contents;
};
const deserializeAws_queryListReceiptRuleSetsResponse = (output, context) => {
    let contents = {
        RuleSets: undefined,
        NextToken: undefined,
    };
    if (output.RuleSets === "") {
        contents.RuleSets = [];
    }
    if (output["RuleSets"] !== undefined && output["RuleSets"]["member"] !== undefined) {
        contents.RuleSets = deserializeAws_queryReceiptRuleSetsLists(smithy_client_1.getArrayIfSingleItem(output["RuleSets"]["member"]), context);
    }
    if (output["NextToken"] !== undefined) {
        contents.NextToken = output["NextToken"];
    }
    return contents;
};
const deserializeAws_queryListTemplatesResponse = (output, context) => {
    let contents = {
        TemplatesMetadata: undefined,
        NextToken: undefined,
    };
    if (output.TemplatesMetadata === "") {
        contents.TemplatesMetadata = [];
    }
    if (output["TemplatesMetadata"] !== undefined && output["TemplatesMetadata"]["member"] !== undefined) {
        contents.TemplatesMetadata = deserializeAws_queryTemplateMetadataList(smithy_client_1.getArrayIfSingleItem(output["TemplatesMetadata"]["member"]), context);
    }
    if (output["NextToken"] !== undefined) {
        contents.NextToken = output["NextToken"];
    }
    return contents;
};
const deserializeAws_queryListVerifiedEmailAddressesResponse = (output, context) => {
    let contents = {
        VerifiedEmailAddresses: undefined,
    };
    if (output.VerifiedEmailAddresses === "") {
        contents.VerifiedEmailAddresses = [];
    }
    if (output["VerifiedEmailAddresses"] !== undefined && output["VerifiedEmailAddresses"]["member"] !== undefined) {
        contents.VerifiedEmailAddresses = deserializeAws_queryAddressList(smithy_client_1.getArrayIfSingleItem(output["VerifiedEmailAddresses"]["member"]), context);
    }
    return contents;
};
const deserializeAws_queryMailFromDomainAttributes = (output, context) => {
    return output.reduce((acc, pair) => {
        if (pair["value"] === null) {
            return acc;
        }
        return {
            ...acc,
            [pair["key"]]: deserializeAws_queryIdentityMailFromDomainAttributes(pair["value"], context),
        };
    }, {});
};
const deserializeAws_queryMailFromDomainNotVerifiedException = (output, context) => {
    let contents = {
        message: undefined,
    };
    if (output["message"] !== undefined) {
        contents.message = output["message"];
    }
    return contents;
};
const deserializeAws_queryMessageRejected = (output, context) => {
    let contents = {
        message: undefined,
    };
    if (output["message"] !== undefined) {
        contents.message = output["message"];
    }
    return contents;
};
const deserializeAws_queryMissingRenderingAttributeException = (output, context) => {
    let contents = {
        TemplateName: undefined,
        message: undefined,
    };
    if (output["TemplateName"] !== undefined) {
        contents.TemplateName = output["TemplateName"];
    }
    if (output["message"] !== undefined) {
        contents.message = output["message"];
    }
    return contents;
};
const deserializeAws_queryNotificationAttributes = (output, context) => {
    return output.reduce((acc, pair) => {
        if (pair["value"] === null) {
            return acc;
        }
        return {
            ...acc,
            [pair["key"]]: deserializeAws_queryIdentityNotificationAttributes(pair["value"], context),
        };
    }, {});
};
const deserializeAws_queryPolicyMap = (output, context) => {
    return output.reduce((acc, pair) => {
        if (pair["value"] === null) {
            return acc;
        }
        return {
            ...acc,
            [pair["key"]]: pair["value"],
        };
    }, {});
};
const deserializeAws_queryPolicyNameList = (output, context) => {
    return (output || [])
        .filter((e) => e != null)
        .map((entry) => {
        if (entry === null) {
            return null;
        }
        return entry;
    });
};
const deserializeAws_queryProductionAccessNotGrantedException = (output, context) => {
    let contents = {
        message: undefined,
    };
    if (output["message"] !== undefined) {
        contents.message = output["message"];
    }
    return contents;
};
const deserializeAws_queryPutConfigurationSetDeliveryOptionsResponse = (output, context) => {
    let contents = {};
    return contents;
};
const deserializeAws_queryPutIdentityPolicyResponse = (output, context) => {
    let contents = {};
    return contents;
};
const deserializeAws_queryReceiptAction = (output, context) => {
    let contents = {
        S3Action: undefined,
        BounceAction: undefined,
        WorkmailAction: undefined,
        LambdaAction: undefined,
        StopAction: undefined,
        AddHeaderAction: undefined,
        SNSAction: undefined,
    };
    if (output["S3Action"] !== undefined) {
        contents.S3Action = deserializeAws_queryS3Action(output["S3Action"], context);
    }
    if (output["BounceAction"] !== undefined) {
        contents.BounceAction = deserializeAws_queryBounceAction(output["BounceAction"], context);
    }
    if (output["WorkmailAction"] !== undefined) {
        contents.WorkmailAction = deserializeAws_queryWorkmailAction(output["WorkmailAction"], context);
    }
    if (output["LambdaAction"] !== undefined) {
        contents.LambdaAction = deserializeAws_queryLambdaAction(output["LambdaAction"], context);
    }
    if (output["StopAction"] !== undefined) {
        contents.StopAction = deserializeAws_queryStopAction(output["StopAction"], context);
    }
    if (output["AddHeaderAction"] !== undefined) {
        contents.AddHeaderAction = deserializeAws_queryAddHeaderAction(output["AddHeaderAction"], context);
    }
    if (output["SNSAction"] !== undefined) {
        contents.SNSAction = deserializeAws_querySNSAction(output["SNSAction"], context);
    }
    return contents;
};
const deserializeAws_queryReceiptActionsList = (output, context) => {
    return (output || [])
        .filter((e) => e != null)
        .map((entry) => {
        if (entry === null) {
            return null;
        }
        return deserializeAws_queryReceiptAction(entry, context);
    });
};
const deserializeAws_queryReceiptFilter = (output, context) => {
    let contents = {
        Name: undefined,
        IpFilter: undefined,
    };
    if (output["Name"] !== undefined) {
        contents.Name = output["Name"];
    }
    if (output["IpFilter"] !== undefined) {
        contents.IpFilter = deserializeAws_queryReceiptIpFilter(output["IpFilter"], context);
    }
    return contents;
};
const deserializeAws_queryReceiptFilterList = (output, context) => {
    return (output || [])
        .filter((e) => e != null)
        .map((entry) => {
        if (entry === null) {
            return null;
        }
        return deserializeAws_queryReceiptFilter(entry, context);
    });
};
const deserializeAws_queryReceiptIpFilter = (output, context) => {
    let contents = {
        Policy: undefined,
        Cidr: undefined,
    };
    if (output["Policy"] !== undefined) {
        contents.Policy = output["Policy"];
    }
    if (output["Cidr"] !== undefined) {
        contents.Cidr = output["Cidr"];
    }
    return contents;
};
const deserializeAws_queryReceiptRule = (output, context) => {
    let contents = {
        Name: undefined,
        Enabled: undefined,
        TlsPolicy: undefined,
        Recipients: undefined,
        Actions: undefined,
        ScanEnabled: undefined,
    };
    if (output["Name"] !== undefined) {
        contents.Name = output["Name"];
    }
    if (output["Enabled"] !== undefined) {
        contents.Enabled = output["Enabled"] == "true";
    }
    if (output["TlsPolicy"] !== undefined) {
        contents.TlsPolicy = output["TlsPolicy"];
    }
    if (output.Recipients === "") {
        contents.Recipients = [];
    }
    if (output["Recipients"] !== undefined && output["Recipients"]["member"] !== undefined) {
        contents.Recipients = deserializeAws_queryRecipientsList(smithy_client_1.getArrayIfSingleItem(output["Recipients"]["member"]), context);
    }
    if (output.Actions === "") {
        contents.Actions = [];
    }
    if (output["Actions"] !== undefined && output["Actions"]["member"] !== undefined) {
        contents.Actions = deserializeAws_queryReceiptActionsList(smithy_client_1.getArrayIfSingleItem(output["Actions"]["member"]), context);
    }
    if (output["ScanEnabled"] !== undefined) {
        contents.ScanEnabled = output["ScanEnabled"] == "true";
    }
    return contents;
};
const deserializeAws_queryReceiptRuleSetMetadata = (output, context) => {
    let contents = {
        Name: undefined,
        CreatedTimestamp: undefined,
    };
    if (output["Name"] !== undefined) {
        contents.Name = output["Name"];
    }
    if (output["CreatedTimestamp"] !== undefined) {
        contents.CreatedTimestamp = new Date(output["CreatedTimestamp"]);
    }
    return contents;
};
const deserializeAws_queryReceiptRuleSetsLists = (output, context) => {
    return (output || [])
        .filter((e) => e != null)
        .map((entry) => {
        if (entry === null) {
            return null;
        }
        return deserializeAws_queryReceiptRuleSetMetadata(entry, context);
    });
};
const deserializeAws_queryReceiptRulesList = (output, context) => {
    return (output || [])
        .filter((e) => e != null)
        .map((entry) => {
        if (entry === null) {
            return null;
        }
        return deserializeAws_queryReceiptRule(entry, context);
    });
};
const deserializeAws_queryRecipientsList = (output, context) => {
    return (output || [])
        .filter((e) => e != null)
        .map((entry) => {
        if (entry === null) {
            return null;
        }
        return entry;
    });
};
const deserializeAws_queryReorderReceiptRuleSetResponse = (output, context) => {
    let contents = {};
    return contents;
};
const deserializeAws_queryReputationOptions = (output, context) => {
    let contents = {
        SendingEnabled: undefined,
        ReputationMetricsEnabled: undefined,
        LastFreshStart: undefined,
    };
    if (output["SendingEnabled"] !== undefined) {
        contents.SendingEnabled = output["SendingEnabled"] == "true";
    }
    if (output["ReputationMetricsEnabled"] !== undefined) {
        contents.ReputationMetricsEnabled = output["ReputationMetricsEnabled"] == "true";
    }
    if (output["LastFreshStart"] !== undefined) {
        contents.LastFreshStart = new Date(output["LastFreshStart"]);
    }
    return contents;
};
const deserializeAws_queryRuleDoesNotExistException = (output, context) => {
    let contents = {
        Name: undefined,
        message: undefined,
    };
    if (output["Name"] !== undefined) {
        contents.Name = output["Name"];
    }
    if (output["message"] !== undefined) {
        contents.message = output["message"];
    }
    return contents;
};
const deserializeAws_queryRuleSetDoesNotExistException = (output, context) => {
    let contents = {
        Name: undefined,
        message: undefined,
    };
    if (output["Name"] !== undefined) {
        contents.Name = output["Name"];
    }
    if (output["message"] !== undefined) {
        contents.message = output["message"];
    }
    return contents;
};
const deserializeAws_queryS3Action = (output, context) => {
    let contents = {
        TopicArn: undefined,
        BucketName: undefined,
        ObjectKeyPrefix: undefined,
        KmsKeyArn: undefined,
    };
    if (output["TopicArn"] !== undefined) {
        contents.TopicArn = output["TopicArn"];
    }
    if (output["BucketName"] !== undefined) {
        contents.BucketName = output["BucketName"];
    }
    if (output["ObjectKeyPrefix"] !== undefined) {
        contents.ObjectKeyPrefix = output["ObjectKeyPrefix"];
    }
    if (output["KmsKeyArn"] !== undefined) {
        contents.KmsKeyArn = output["KmsKeyArn"];
    }
    return contents;
};
const deserializeAws_querySendBounceResponse = (output, context) => {
    let contents = {
        MessageId: undefined,
    };
    if (output["MessageId"] !== undefined) {
        contents.MessageId = output["MessageId"];
    }
    return contents;
};
const deserializeAws_querySendBulkTemplatedEmailResponse = (output, context) => {
    let contents = {
        Status: undefined,
    };
    if (output.Status === "") {
        contents.Status = [];
    }
    if (output["Status"] !== undefined && output["Status"]["member"] !== undefined) {
        contents.Status = deserializeAws_queryBulkEmailDestinationStatusList(smithy_client_1.getArrayIfSingleItem(output["Status"]["member"]), context);
    }
    return contents;
};
const deserializeAws_querySendCustomVerificationEmailResponse = (output, context) => {
    let contents = {
        MessageId: undefined,
    };
    if (output["MessageId"] !== undefined) {
        contents.MessageId = output["MessageId"];
    }
    return contents;
};
const deserializeAws_querySendDataPoint = (output, context) => {
    let contents = {
        Timestamp: undefined,
        DeliveryAttempts: undefined,
        Bounces: undefined,
        Complaints: undefined,
        Rejects: undefined,
    };
    if (output["Timestamp"] !== undefined) {
        contents.Timestamp = new Date(output["Timestamp"]);
    }
    if (output["DeliveryAttempts"] !== undefined) {
        contents.DeliveryAttempts = parseInt(output["DeliveryAttempts"]);
    }
    if (output["Bounces"] !== undefined) {
        contents.Bounces = parseInt(output["Bounces"]);
    }
    if (output["Complaints"] !== undefined) {
        contents.Complaints = parseInt(output["Complaints"]);
    }
    if (output["Rejects"] !== undefined) {
        contents.Rejects = parseInt(output["Rejects"]);
    }
    return contents;
};
const deserializeAws_querySendDataPointList = (output, context) => {
    return (output || [])
        .filter((e) => e != null)
        .map((entry) => {
        if (entry === null) {
            return null;
        }
        return deserializeAws_querySendDataPoint(entry, context);
    });
};
const deserializeAws_querySendEmailResponse = (output, context) => {
    let contents = {
        MessageId: undefined,
    };
    if (output["MessageId"] !== undefined) {
        contents.MessageId = output["MessageId"];
    }
    return contents;
};
const deserializeAws_querySendRawEmailResponse = (output, context) => {
    let contents = {
        MessageId: undefined,
    };
    if (output["MessageId"] !== undefined) {
        contents.MessageId = output["MessageId"];
    }
    return contents;
};
const deserializeAws_querySendTemplatedEmailResponse = (output, context) => {
    let contents = {
        MessageId: undefined,
    };
    if (output["MessageId"] !== undefined) {
        contents.MessageId = output["MessageId"];
    }
    return contents;
};
const deserializeAws_querySetActiveReceiptRuleSetResponse = (output, context) => {
    let contents = {};
    return contents;
};
const deserializeAws_querySetIdentityDkimEnabledResponse = (output, context) => {
    let contents = {};
    return contents;
};
const deserializeAws_querySetIdentityFeedbackForwardingEnabledResponse = (output, context) => {
    let contents = {};
    return contents;
};
const deserializeAws_querySetIdentityHeadersInNotificationsEnabledResponse = (output, context) => {
    let contents = {};
    return contents;
};
const deserializeAws_querySetIdentityMailFromDomainResponse = (output, context) => {
    let contents = {};
    return contents;
};
const deserializeAws_querySetIdentityNotificationTopicResponse = (output, context) => {
    let contents = {};
    return contents;
};
const deserializeAws_querySetReceiptRulePositionResponse = (output, context) => {
    let contents = {};
    return contents;
};
const deserializeAws_querySNSAction = (output, context) => {
    let contents = {
        TopicArn: undefined,
        Encoding: undefined,
    };
    if (output["TopicArn"] !== undefined) {
        contents.TopicArn = output["TopicArn"];
    }
    if (output["Encoding"] !== undefined) {
        contents.Encoding = output["Encoding"];
    }
    return contents;
};
const deserializeAws_querySNSDestination = (output, context) => {
    let contents = {
        TopicARN: undefined,
    };
    if (output["TopicARN"] !== undefined) {
        contents.TopicARN = output["TopicARN"];
    }
    return contents;
};
const deserializeAws_queryStopAction = (output, context) => {
    let contents = {
        Scope: undefined,
        TopicArn: undefined,
    };
    if (output["Scope"] !== undefined) {
        contents.Scope = output["Scope"];
    }
    if (output["TopicArn"] !== undefined) {
        contents.TopicArn = output["TopicArn"];
    }
    return contents;
};
const deserializeAws_queryTemplate = (output, context) => {
    let contents = {
        TemplateName: undefined,
        SubjectPart: undefined,
        TextPart: undefined,
        HtmlPart: undefined,
    };
    if (output["TemplateName"] !== undefined) {
        contents.TemplateName = output["TemplateName"];
    }
    if (output["SubjectPart"] !== undefined) {
        contents.SubjectPart = output["SubjectPart"];
    }
    if (output["TextPart"] !== undefined) {
        contents.TextPart = output["TextPart"];
    }
    if (output["HtmlPart"] !== undefined) {
        contents.HtmlPart = output["HtmlPart"];
    }
    return contents;
};
const deserializeAws_queryTemplateDoesNotExistException = (output, context) => {
    let contents = {
        TemplateName: undefined,
        message: undefined,
    };
    if (output["TemplateName"] !== undefined) {
        contents.TemplateName = output["TemplateName"];
    }
    if (output["message"] !== undefined) {
        contents.message = output["message"];
    }
    return contents;
};
const deserializeAws_queryTemplateMetadata = (output, context) => {
    let contents = {
        Name: undefined,
        CreatedTimestamp: undefined,
    };
    if (output["Name"] !== undefined) {
        contents.Name = output["Name"];
    }
    if (output["CreatedTimestamp"] !== undefined) {
        contents.CreatedTimestamp = new Date(output["CreatedTimestamp"]);
    }
    return contents;
};
const deserializeAws_queryTemplateMetadataList = (output, context) => {
    return (output || [])
        .filter((e) => e != null)
        .map((entry) => {
        if (entry === null) {
            return null;
        }
        return deserializeAws_queryTemplateMetadata(entry, context);
    });
};
const deserializeAws_queryTestRenderTemplateResponse = (output, context) => {
    let contents = {
        RenderedTemplate: undefined,
    };
    if (output["RenderedTemplate"] !== undefined) {
        contents.RenderedTemplate = output["RenderedTemplate"];
    }
    return contents;
};
const deserializeAws_queryTrackingOptions = (output, context) => {
    let contents = {
        CustomRedirectDomain: undefined,
    };
    if (output["CustomRedirectDomain"] !== undefined) {
        contents.CustomRedirectDomain = output["CustomRedirectDomain"];
    }
    return contents;
};
const deserializeAws_queryTrackingOptionsAlreadyExistsException = (output, context) => {
    let contents = {
        ConfigurationSetName: undefined,
        message: undefined,
    };
    if (output["ConfigurationSetName"] !== undefined) {
        contents.ConfigurationSetName = output["ConfigurationSetName"];
    }
    if (output["message"] !== undefined) {
        contents.message = output["message"];
    }
    return contents;
};
const deserializeAws_queryTrackingOptionsDoesNotExistException = (output, context) => {
    let contents = {
        ConfigurationSetName: undefined,
        message: undefined,
    };
    if (output["ConfigurationSetName"] !== undefined) {
        contents.ConfigurationSetName = output["ConfigurationSetName"];
    }
    if (output["message"] !== undefined) {
        contents.message = output["message"];
    }
    return contents;
};
const deserializeAws_queryUpdateConfigurationSetEventDestinationResponse = (output, context) => {
    let contents = {};
    return contents;
};
const deserializeAws_queryUpdateConfigurationSetTrackingOptionsResponse = (output, context) => {
    let contents = {};
    return contents;
};
const deserializeAws_queryUpdateReceiptRuleResponse = (output, context) => {
    let contents = {};
    return contents;
};
const deserializeAws_queryUpdateTemplateResponse = (output, context) => {
    let contents = {};
    return contents;
};
const deserializeAws_queryVerificationAttributes = (output, context) => {
    return output.reduce((acc, pair) => {
        if (pair["value"] === null) {
            return acc;
        }
        return {
            ...acc,
            [pair["key"]]: deserializeAws_queryIdentityVerificationAttributes(pair["value"], context),
        };
    }, {});
};
const deserializeAws_queryVerificationTokenList = (output, context) => {
    return (output || [])
        .filter((e) => e != null)
        .map((entry) => {
        if (entry === null) {
            return null;
        }
        return entry;
    });
};
const deserializeAws_queryVerifyDomainDkimResponse = (output, context) => {
    let contents = {
        DkimTokens: undefined,
    };
    if (output.DkimTokens === "") {
        contents.DkimTokens = [];
    }
    if (output["DkimTokens"] !== undefined && output["DkimTokens"]["member"] !== undefined) {
        contents.DkimTokens = deserializeAws_queryVerificationTokenList(smithy_client_1.getArrayIfSingleItem(output["DkimTokens"]["member"]), context);
    }
    return contents;
};
const deserializeAws_queryVerifyDomainIdentityResponse = (output, context) => {
    let contents = {
        VerificationToken: undefined,
    };
    if (output["VerificationToken"] !== undefined) {
        contents.VerificationToken = output["VerificationToken"];
    }
    return contents;
};
const deserializeAws_queryVerifyEmailIdentityResponse = (output, context) => {
    let contents = {};
    return contents;
};
const deserializeAws_queryWorkmailAction = (output, context) => {
    let contents = {
        TopicArn: undefined,
        OrganizationArn: undefined,
    };
    if (output["TopicArn"] !== undefined) {
        contents.TopicArn = output["TopicArn"];
    }
    if (output["OrganizationArn"] !== undefined) {
        contents.OrganizationArn = output["OrganizationArn"];
    }
    return contents;
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
const buildHttpRpcRequest = async (context, headers, path, resolvedHostname, body) => {
    const { hostname, protocol = "https", port } = await context.endpoint();
    const contents = {
        protocol,
        hostname,
        port,
        method: "POST",
        path,
        headers,
    };
    if (resolvedHostname !== undefined) {
        contents.hostname = resolvedHostname;
    }
    if (body !== undefined) {
        contents.body = body;
    }
    return new protocol_http_1.HttpRequest(contents);
};
const parseBody = (streamBody, context) => collectBodyString(streamBody, context).then((encoded) => {
    if (encoded.length) {
        const parsedObj = fast_xml_parser_1.parse(encoded, {
            attributeNamePrefix: "",
            ignoreAttributes: false,
            parseNodeValue: false,
            trimValues: false,
            tagValueProcessor: (val, tagName) => (val.trim() === "" ? "" : entities_1.decodeHTML(val)),
        });
        const textNodeName = "#text";
        const key = Object.keys(parsedObj)[0];
        const parsedObjToReturn = parsedObj[key];
        if (parsedObjToReturn[textNodeName]) {
            parsedObjToReturn[key] = parsedObjToReturn[textNodeName];
            delete parsedObjToReturn[textNodeName];
        }
        return smithy_client_1.getValueFromTextNode(parsedObjToReturn);
    }
    return {};
});
const buildFormUrlencodedString = (formEntries) => Object.entries(formEntries)
    .map(([key, value]) => smithy_client_1.extendedEncodeURIComponent(key) + "=" + smithy_client_1.extendedEncodeURIComponent(value))
    .join("&");
const loadQueryErrorCode = (output, data) => {
    if (data.Error.Code !== undefined) {
        return data.Error.Code;
    }
    if (output.statusCode == 404) {
        return "NotFound";
    }
    return "";
};
//# sourceMappingURL=Aws_query.js.map