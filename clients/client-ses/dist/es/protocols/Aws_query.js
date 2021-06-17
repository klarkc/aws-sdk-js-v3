import { __assign, __awaiter, __generator, __read, __values } from "tslib";
import { HttpRequest as __HttpRequest } from "@aws-sdk/protocol-http";
import { extendedEncodeURIComponent as __extendedEncodeURIComponent, getArrayIfSingleItem as __getArrayIfSingleItem, getValueFromTextNode as __getValueFromTextNode, } from "@aws-sdk/smithy-client";
import { decodeHTML } from "entities";
import { parse as xmlParse } from "fast-xml-parser";
export var serializeAws_queryCloneReceiptRuleSetCommand = function (input, context) { return __awaiter(void 0, void 0, void 0, function () {
    var headers, body;
    return __generator(this, function (_a) {
        headers = {
            "content-type": "application/x-www-form-urlencoded",
        };
        body = buildFormUrlencodedString(__assign(__assign({}, serializeAws_queryCloneReceiptRuleSetRequest(input, context)), { Action: "CloneReceiptRuleSet", Version: "2010-12-01" }));
        return [2 /*return*/, buildHttpRpcRequest(context, headers, "/", undefined, body)];
    });
}); };
export var serializeAws_queryCreateConfigurationSetCommand = function (input, context) { return __awaiter(void 0, void 0, void 0, function () {
    var headers, body;
    return __generator(this, function (_a) {
        headers = {
            "content-type": "application/x-www-form-urlencoded",
        };
        body = buildFormUrlencodedString(__assign(__assign({}, serializeAws_queryCreateConfigurationSetRequest(input, context)), { Action: "CreateConfigurationSet", Version: "2010-12-01" }));
        return [2 /*return*/, buildHttpRpcRequest(context, headers, "/", undefined, body)];
    });
}); };
export var serializeAws_queryCreateConfigurationSetEventDestinationCommand = function (input, context) { return __awaiter(void 0, void 0, void 0, function () {
    var headers, body;
    return __generator(this, function (_a) {
        headers = {
            "content-type": "application/x-www-form-urlencoded",
        };
        body = buildFormUrlencodedString(__assign(__assign({}, serializeAws_queryCreateConfigurationSetEventDestinationRequest(input, context)), { Action: "CreateConfigurationSetEventDestination", Version: "2010-12-01" }));
        return [2 /*return*/, buildHttpRpcRequest(context, headers, "/", undefined, body)];
    });
}); };
export var serializeAws_queryCreateConfigurationSetTrackingOptionsCommand = function (input, context) { return __awaiter(void 0, void 0, void 0, function () {
    var headers, body;
    return __generator(this, function (_a) {
        headers = {
            "content-type": "application/x-www-form-urlencoded",
        };
        body = buildFormUrlencodedString(__assign(__assign({}, serializeAws_queryCreateConfigurationSetTrackingOptionsRequest(input, context)), { Action: "CreateConfigurationSetTrackingOptions", Version: "2010-12-01" }));
        return [2 /*return*/, buildHttpRpcRequest(context, headers, "/", undefined, body)];
    });
}); };
export var serializeAws_queryCreateCustomVerificationEmailTemplateCommand = function (input, context) { return __awaiter(void 0, void 0, void 0, function () {
    var headers, body;
    return __generator(this, function (_a) {
        headers = {
            "content-type": "application/x-www-form-urlencoded",
        };
        body = buildFormUrlencodedString(__assign(__assign({}, serializeAws_queryCreateCustomVerificationEmailTemplateRequest(input, context)), { Action: "CreateCustomVerificationEmailTemplate", Version: "2010-12-01" }));
        return [2 /*return*/, buildHttpRpcRequest(context, headers, "/", undefined, body)];
    });
}); };
export var serializeAws_queryCreateReceiptFilterCommand = function (input, context) { return __awaiter(void 0, void 0, void 0, function () {
    var headers, body;
    return __generator(this, function (_a) {
        headers = {
            "content-type": "application/x-www-form-urlencoded",
        };
        body = buildFormUrlencodedString(__assign(__assign({}, serializeAws_queryCreateReceiptFilterRequest(input, context)), { Action: "CreateReceiptFilter", Version: "2010-12-01" }));
        return [2 /*return*/, buildHttpRpcRequest(context, headers, "/", undefined, body)];
    });
}); };
export var serializeAws_queryCreateReceiptRuleCommand = function (input, context) { return __awaiter(void 0, void 0, void 0, function () {
    var headers, body;
    return __generator(this, function (_a) {
        headers = {
            "content-type": "application/x-www-form-urlencoded",
        };
        body = buildFormUrlencodedString(__assign(__assign({}, serializeAws_queryCreateReceiptRuleRequest(input, context)), { Action: "CreateReceiptRule", Version: "2010-12-01" }));
        return [2 /*return*/, buildHttpRpcRequest(context, headers, "/", undefined, body)];
    });
}); };
export var serializeAws_queryCreateReceiptRuleSetCommand = function (input, context) { return __awaiter(void 0, void 0, void 0, function () {
    var headers, body;
    return __generator(this, function (_a) {
        headers = {
            "content-type": "application/x-www-form-urlencoded",
        };
        body = buildFormUrlencodedString(__assign(__assign({}, serializeAws_queryCreateReceiptRuleSetRequest(input, context)), { Action: "CreateReceiptRuleSet", Version: "2010-12-01" }));
        return [2 /*return*/, buildHttpRpcRequest(context, headers, "/", undefined, body)];
    });
}); };
export var serializeAws_queryCreateTemplateCommand = function (input, context) { return __awaiter(void 0, void 0, void 0, function () {
    var headers, body;
    return __generator(this, function (_a) {
        headers = {
            "content-type": "application/x-www-form-urlencoded",
        };
        body = buildFormUrlencodedString(__assign(__assign({}, serializeAws_queryCreateTemplateRequest(input, context)), { Action: "CreateTemplate", Version: "2010-12-01" }));
        return [2 /*return*/, buildHttpRpcRequest(context, headers, "/", undefined, body)];
    });
}); };
export var serializeAws_queryDeleteConfigurationSetCommand = function (input, context) { return __awaiter(void 0, void 0, void 0, function () {
    var headers, body;
    return __generator(this, function (_a) {
        headers = {
            "content-type": "application/x-www-form-urlencoded",
        };
        body = buildFormUrlencodedString(__assign(__assign({}, serializeAws_queryDeleteConfigurationSetRequest(input, context)), { Action: "DeleteConfigurationSet", Version: "2010-12-01" }));
        return [2 /*return*/, buildHttpRpcRequest(context, headers, "/", undefined, body)];
    });
}); };
export var serializeAws_queryDeleteConfigurationSetEventDestinationCommand = function (input, context) { return __awaiter(void 0, void 0, void 0, function () {
    var headers, body;
    return __generator(this, function (_a) {
        headers = {
            "content-type": "application/x-www-form-urlencoded",
        };
        body = buildFormUrlencodedString(__assign(__assign({}, serializeAws_queryDeleteConfigurationSetEventDestinationRequest(input, context)), { Action: "DeleteConfigurationSetEventDestination", Version: "2010-12-01" }));
        return [2 /*return*/, buildHttpRpcRequest(context, headers, "/", undefined, body)];
    });
}); };
export var serializeAws_queryDeleteConfigurationSetTrackingOptionsCommand = function (input, context) { return __awaiter(void 0, void 0, void 0, function () {
    var headers, body;
    return __generator(this, function (_a) {
        headers = {
            "content-type": "application/x-www-form-urlencoded",
        };
        body = buildFormUrlencodedString(__assign(__assign({}, serializeAws_queryDeleteConfigurationSetTrackingOptionsRequest(input, context)), { Action: "DeleteConfigurationSetTrackingOptions", Version: "2010-12-01" }));
        return [2 /*return*/, buildHttpRpcRequest(context, headers, "/", undefined, body)];
    });
}); };
export var serializeAws_queryDeleteCustomVerificationEmailTemplateCommand = function (input, context) { return __awaiter(void 0, void 0, void 0, function () {
    var headers, body;
    return __generator(this, function (_a) {
        headers = {
            "content-type": "application/x-www-form-urlencoded",
        };
        body = buildFormUrlencodedString(__assign(__assign({}, serializeAws_queryDeleteCustomVerificationEmailTemplateRequest(input, context)), { Action: "DeleteCustomVerificationEmailTemplate", Version: "2010-12-01" }));
        return [2 /*return*/, buildHttpRpcRequest(context, headers, "/", undefined, body)];
    });
}); };
export var serializeAws_queryDeleteIdentityCommand = function (input, context) { return __awaiter(void 0, void 0, void 0, function () {
    var headers, body;
    return __generator(this, function (_a) {
        headers = {
            "content-type": "application/x-www-form-urlencoded",
        };
        body = buildFormUrlencodedString(__assign(__assign({}, serializeAws_queryDeleteIdentityRequest(input, context)), { Action: "DeleteIdentity", Version: "2010-12-01" }));
        return [2 /*return*/, buildHttpRpcRequest(context, headers, "/", undefined, body)];
    });
}); };
export var serializeAws_queryDeleteIdentityPolicyCommand = function (input, context) { return __awaiter(void 0, void 0, void 0, function () {
    var headers, body;
    return __generator(this, function (_a) {
        headers = {
            "content-type": "application/x-www-form-urlencoded",
        };
        body = buildFormUrlencodedString(__assign(__assign({}, serializeAws_queryDeleteIdentityPolicyRequest(input, context)), { Action: "DeleteIdentityPolicy", Version: "2010-12-01" }));
        return [2 /*return*/, buildHttpRpcRequest(context, headers, "/", undefined, body)];
    });
}); };
export var serializeAws_queryDeleteReceiptFilterCommand = function (input, context) { return __awaiter(void 0, void 0, void 0, function () {
    var headers, body;
    return __generator(this, function (_a) {
        headers = {
            "content-type": "application/x-www-form-urlencoded",
        };
        body = buildFormUrlencodedString(__assign(__assign({}, serializeAws_queryDeleteReceiptFilterRequest(input, context)), { Action: "DeleteReceiptFilter", Version: "2010-12-01" }));
        return [2 /*return*/, buildHttpRpcRequest(context, headers, "/", undefined, body)];
    });
}); };
export var serializeAws_queryDeleteReceiptRuleCommand = function (input, context) { return __awaiter(void 0, void 0, void 0, function () {
    var headers, body;
    return __generator(this, function (_a) {
        headers = {
            "content-type": "application/x-www-form-urlencoded",
        };
        body = buildFormUrlencodedString(__assign(__assign({}, serializeAws_queryDeleteReceiptRuleRequest(input, context)), { Action: "DeleteReceiptRule", Version: "2010-12-01" }));
        return [2 /*return*/, buildHttpRpcRequest(context, headers, "/", undefined, body)];
    });
}); };
export var serializeAws_queryDeleteReceiptRuleSetCommand = function (input, context) { return __awaiter(void 0, void 0, void 0, function () {
    var headers, body;
    return __generator(this, function (_a) {
        headers = {
            "content-type": "application/x-www-form-urlencoded",
        };
        body = buildFormUrlencodedString(__assign(__assign({}, serializeAws_queryDeleteReceiptRuleSetRequest(input, context)), { Action: "DeleteReceiptRuleSet", Version: "2010-12-01" }));
        return [2 /*return*/, buildHttpRpcRequest(context, headers, "/", undefined, body)];
    });
}); };
export var serializeAws_queryDeleteTemplateCommand = function (input, context) { return __awaiter(void 0, void 0, void 0, function () {
    var headers, body;
    return __generator(this, function (_a) {
        headers = {
            "content-type": "application/x-www-form-urlencoded",
        };
        body = buildFormUrlencodedString(__assign(__assign({}, serializeAws_queryDeleteTemplateRequest(input, context)), { Action: "DeleteTemplate", Version: "2010-12-01" }));
        return [2 /*return*/, buildHttpRpcRequest(context, headers, "/", undefined, body)];
    });
}); };
export var serializeAws_queryDeleteVerifiedEmailAddressCommand = function (input, context) { return __awaiter(void 0, void 0, void 0, function () {
    var headers, body;
    return __generator(this, function (_a) {
        headers = {
            "content-type": "application/x-www-form-urlencoded",
        };
        body = buildFormUrlencodedString(__assign(__assign({}, serializeAws_queryDeleteVerifiedEmailAddressRequest(input, context)), { Action: "DeleteVerifiedEmailAddress", Version: "2010-12-01" }));
        return [2 /*return*/, buildHttpRpcRequest(context, headers, "/", undefined, body)];
    });
}); };
export var serializeAws_queryDescribeActiveReceiptRuleSetCommand = function (input, context) { return __awaiter(void 0, void 0, void 0, function () {
    var headers, body;
    return __generator(this, function (_a) {
        headers = {
            "content-type": "application/x-www-form-urlencoded",
        };
        body = buildFormUrlencodedString(__assign(__assign({}, serializeAws_queryDescribeActiveReceiptRuleSetRequest(input, context)), { Action: "DescribeActiveReceiptRuleSet", Version: "2010-12-01" }));
        return [2 /*return*/, buildHttpRpcRequest(context, headers, "/", undefined, body)];
    });
}); };
export var serializeAws_queryDescribeConfigurationSetCommand = function (input, context) { return __awaiter(void 0, void 0, void 0, function () {
    var headers, body;
    return __generator(this, function (_a) {
        headers = {
            "content-type": "application/x-www-form-urlencoded",
        };
        body = buildFormUrlencodedString(__assign(__assign({}, serializeAws_queryDescribeConfigurationSetRequest(input, context)), { Action: "DescribeConfigurationSet", Version: "2010-12-01" }));
        return [2 /*return*/, buildHttpRpcRequest(context, headers, "/", undefined, body)];
    });
}); };
export var serializeAws_queryDescribeReceiptRuleCommand = function (input, context) { return __awaiter(void 0, void 0, void 0, function () {
    var headers, body;
    return __generator(this, function (_a) {
        headers = {
            "content-type": "application/x-www-form-urlencoded",
        };
        body = buildFormUrlencodedString(__assign(__assign({}, serializeAws_queryDescribeReceiptRuleRequest(input, context)), { Action: "DescribeReceiptRule", Version: "2010-12-01" }));
        return [2 /*return*/, buildHttpRpcRequest(context, headers, "/", undefined, body)];
    });
}); };
export var serializeAws_queryDescribeReceiptRuleSetCommand = function (input, context) { return __awaiter(void 0, void 0, void 0, function () {
    var headers, body;
    return __generator(this, function (_a) {
        headers = {
            "content-type": "application/x-www-form-urlencoded",
        };
        body = buildFormUrlencodedString(__assign(__assign({}, serializeAws_queryDescribeReceiptRuleSetRequest(input, context)), { Action: "DescribeReceiptRuleSet", Version: "2010-12-01" }));
        return [2 /*return*/, buildHttpRpcRequest(context, headers, "/", undefined, body)];
    });
}); };
export var serializeAws_queryGetAccountSendingEnabledCommand = function (input, context) { return __awaiter(void 0, void 0, void 0, function () {
    var headers, body;
    return __generator(this, function (_a) {
        headers = {
            "content-type": "application/x-www-form-urlencoded",
        };
        body = buildFormUrlencodedString({
            Action: "GetAccountSendingEnabled",
            Version: "2010-12-01",
        });
        return [2 /*return*/, buildHttpRpcRequest(context, headers, "/", undefined, body)];
    });
}); };
export var serializeAws_queryGetCustomVerificationEmailTemplateCommand = function (input, context) { return __awaiter(void 0, void 0, void 0, function () {
    var headers, body;
    return __generator(this, function (_a) {
        headers = {
            "content-type": "application/x-www-form-urlencoded",
        };
        body = buildFormUrlencodedString(__assign(__assign({}, serializeAws_queryGetCustomVerificationEmailTemplateRequest(input, context)), { Action: "GetCustomVerificationEmailTemplate", Version: "2010-12-01" }));
        return [2 /*return*/, buildHttpRpcRequest(context, headers, "/", undefined, body)];
    });
}); };
export var serializeAws_queryGetIdentityDkimAttributesCommand = function (input, context) { return __awaiter(void 0, void 0, void 0, function () {
    var headers, body;
    return __generator(this, function (_a) {
        headers = {
            "content-type": "application/x-www-form-urlencoded",
        };
        body = buildFormUrlencodedString(__assign(__assign({}, serializeAws_queryGetIdentityDkimAttributesRequest(input, context)), { Action: "GetIdentityDkimAttributes", Version: "2010-12-01" }));
        return [2 /*return*/, buildHttpRpcRequest(context, headers, "/", undefined, body)];
    });
}); };
export var serializeAws_queryGetIdentityMailFromDomainAttributesCommand = function (input, context) { return __awaiter(void 0, void 0, void 0, function () {
    var headers, body;
    return __generator(this, function (_a) {
        headers = {
            "content-type": "application/x-www-form-urlencoded",
        };
        body = buildFormUrlencodedString(__assign(__assign({}, serializeAws_queryGetIdentityMailFromDomainAttributesRequest(input, context)), { Action: "GetIdentityMailFromDomainAttributes", Version: "2010-12-01" }));
        return [2 /*return*/, buildHttpRpcRequest(context, headers, "/", undefined, body)];
    });
}); };
export var serializeAws_queryGetIdentityNotificationAttributesCommand = function (input, context) { return __awaiter(void 0, void 0, void 0, function () {
    var headers, body;
    return __generator(this, function (_a) {
        headers = {
            "content-type": "application/x-www-form-urlencoded",
        };
        body = buildFormUrlencodedString(__assign(__assign({}, serializeAws_queryGetIdentityNotificationAttributesRequest(input, context)), { Action: "GetIdentityNotificationAttributes", Version: "2010-12-01" }));
        return [2 /*return*/, buildHttpRpcRequest(context, headers, "/", undefined, body)];
    });
}); };
export var serializeAws_queryGetIdentityPoliciesCommand = function (input, context) { return __awaiter(void 0, void 0, void 0, function () {
    var headers, body;
    return __generator(this, function (_a) {
        headers = {
            "content-type": "application/x-www-form-urlencoded",
        };
        body = buildFormUrlencodedString(__assign(__assign({}, serializeAws_queryGetIdentityPoliciesRequest(input, context)), { Action: "GetIdentityPolicies", Version: "2010-12-01" }));
        return [2 /*return*/, buildHttpRpcRequest(context, headers, "/", undefined, body)];
    });
}); };
export var serializeAws_queryGetIdentityVerificationAttributesCommand = function (input, context) { return __awaiter(void 0, void 0, void 0, function () {
    var headers, body;
    return __generator(this, function (_a) {
        headers = {
            "content-type": "application/x-www-form-urlencoded",
        };
        body = buildFormUrlencodedString(__assign(__assign({}, serializeAws_queryGetIdentityVerificationAttributesRequest(input, context)), { Action: "GetIdentityVerificationAttributes", Version: "2010-12-01" }));
        return [2 /*return*/, buildHttpRpcRequest(context, headers, "/", undefined, body)];
    });
}); };
export var serializeAws_queryGetSendQuotaCommand = function (input, context) { return __awaiter(void 0, void 0, void 0, function () {
    var headers, body;
    return __generator(this, function (_a) {
        headers = {
            "content-type": "application/x-www-form-urlencoded",
        };
        body = buildFormUrlencodedString({
            Action: "GetSendQuota",
            Version: "2010-12-01",
        });
        return [2 /*return*/, buildHttpRpcRequest(context, headers, "/", undefined, body)];
    });
}); };
export var serializeAws_queryGetSendStatisticsCommand = function (input, context) { return __awaiter(void 0, void 0, void 0, function () {
    var headers, body;
    return __generator(this, function (_a) {
        headers = {
            "content-type": "application/x-www-form-urlencoded",
        };
        body = buildFormUrlencodedString({
            Action: "GetSendStatistics",
            Version: "2010-12-01",
        });
        return [2 /*return*/, buildHttpRpcRequest(context, headers, "/", undefined, body)];
    });
}); };
export var serializeAws_queryGetTemplateCommand = function (input, context) { return __awaiter(void 0, void 0, void 0, function () {
    var headers, body;
    return __generator(this, function (_a) {
        headers = {
            "content-type": "application/x-www-form-urlencoded",
        };
        body = buildFormUrlencodedString(__assign(__assign({}, serializeAws_queryGetTemplateRequest(input, context)), { Action: "GetTemplate", Version: "2010-12-01" }));
        return [2 /*return*/, buildHttpRpcRequest(context, headers, "/", undefined, body)];
    });
}); };
export var serializeAws_queryListConfigurationSetsCommand = function (input, context) { return __awaiter(void 0, void 0, void 0, function () {
    var headers, body;
    return __generator(this, function (_a) {
        headers = {
            "content-type": "application/x-www-form-urlencoded",
        };
        body = buildFormUrlencodedString(__assign(__assign({}, serializeAws_queryListConfigurationSetsRequest(input, context)), { Action: "ListConfigurationSets", Version: "2010-12-01" }));
        return [2 /*return*/, buildHttpRpcRequest(context, headers, "/", undefined, body)];
    });
}); };
export var serializeAws_queryListCustomVerificationEmailTemplatesCommand = function (input, context) { return __awaiter(void 0, void 0, void 0, function () {
    var headers, body;
    return __generator(this, function (_a) {
        headers = {
            "content-type": "application/x-www-form-urlencoded",
        };
        body = buildFormUrlencodedString(__assign(__assign({}, serializeAws_queryListCustomVerificationEmailTemplatesRequest(input, context)), { Action: "ListCustomVerificationEmailTemplates", Version: "2010-12-01" }));
        return [2 /*return*/, buildHttpRpcRequest(context, headers, "/", undefined, body)];
    });
}); };
export var serializeAws_queryListIdentitiesCommand = function (input, context) { return __awaiter(void 0, void 0, void 0, function () {
    var headers, body;
    return __generator(this, function (_a) {
        headers = {
            "content-type": "application/x-www-form-urlencoded",
        };
        body = buildFormUrlencodedString(__assign(__assign({}, serializeAws_queryListIdentitiesRequest(input, context)), { Action: "ListIdentities", Version: "2010-12-01" }));
        return [2 /*return*/, buildHttpRpcRequest(context, headers, "/", undefined, body)];
    });
}); };
export var serializeAws_queryListIdentityPoliciesCommand = function (input, context) { return __awaiter(void 0, void 0, void 0, function () {
    var headers, body;
    return __generator(this, function (_a) {
        headers = {
            "content-type": "application/x-www-form-urlencoded",
        };
        body = buildFormUrlencodedString(__assign(__assign({}, serializeAws_queryListIdentityPoliciesRequest(input, context)), { Action: "ListIdentityPolicies", Version: "2010-12-01" }));
        return [2 /*return*/, buildHttpRpcRequest(context, headers, "/", undefined, body)];
    });
}); };
export var serializeAws_queryListReceiptFiltersCommand = function (input, context) { return __awaiter(void 0, void 0, void 0, function () {
    var headers, body;
    return __generator(this, function (_a) {
        headers = {
            "content-type": "application/x-www-form-urlencoded",
        };
        body = buildFormUrlencodedString(__assign(__assign({}, serializeAws_queryListReceiptFiltersRequest(input, context)), { Action: "ListReceiptFilters", Version: "2010-12-01" }));
        return [2 /*return*/, buildHttpRpcRequest(context, headers, "/", undefined, body)];
    });
}); };
export var serializeAws_queryListReceiptRuleSetsCommand = function (input, context) { return __awaiter(void 0, void 0, void 0, function () {
    var headers, body;
    return __generator(this, function (_a) {
        headers = {
            "content-type": "application/x-www-form-urlencoded",
        };
        body = buildFormUrlencodedString(__assign(__assign({}, serializeAws_queryListReceiptRuleSetsRequest(input, context)), { Action: "ListReceiptRuleSets", Version: "2010-12-01" }));
        return [2 /*return*/, buildHttpRpcRequest(context, headers, "/", undefined, body)];
    });
}); };
export var serializeAws_queryListTemplatesCommand = function (input, context) { return __awaiter(void 0, void 0, void 0, function () {
    var headers, body;
    return __generator(this, function (_a) {
        headers = {
            "content-type": "application/x-www-form-urlencoded",
        };
        body = buildFormUrlencodedString(__assign(__assign({}, serializeAws_queryListTemplatesRequest(input, context)), { Action: "ListTemplates", Version: "2010-12-01" }));
        return [2 /*return*/, buildHttpRpcRequest(context, headers, "/", undefined, body)];
    });
}); };
export var serializeAws_queryListVerifiedEmailAddressesCommand = function (input, context) { return __awaiter(void 0, void 0, void 0, function () {
    var headers, body;
    return __generator(this, function (_a) {
        headers = {
            "content-type": "application/x-www-form-urlencoded",
        };
        body = buildFormUrlencodedString({
            Action: "ListVerifiedEmailAddresses",
            Version: "2010-12-01",
        });
        return [2 /*return*/, buildHttpRpcRequest(context, headers, "/", undefined, body)];
    });
}); };
export var serializeAws_queryPutConfigurationSetDeliveryOptionsCommand = function (input, context) { return __awaiter(void 0, void 0, void 0, function () {
    var headers, body;
    return __generator(this, function (_a) {
        headers = {
            "content-type": "application/x-www-form-urlencoded",
        };
        body = buildFormUrlencodedString(__assign(__assign({}, serializeAws_queryPutConfigurationSetDeliveryOptionsRequest(input, context)), { Action: "PutConfigurationSetDeliveryOptions", Version: "2010-12-01" }));
        return [2 /*return*/, buildHttpRpcRequest(context, headers, "/", undefined, body)];
    });
}); };
export var serializeAws_queryPutIdentityPolicyCommand = function (input, context) { return __awaiter(void 0, void 0, void 0, function () {
    var headers, body;
    return __generator(this, function (_a) {
        headers = {
            "content-type": "application/x-www-form-urlencoded",
        };
        body = buildFormUrlencodedString(__assign(__assign({}, serializeAws_queryPutIdentityPolicyRequest(input, context)), { Action: "PutIdentityPolicy", Version: "2010-12-01" }));
        return [2 /*return*/, buildHttpRpcRequest(context, headers, "/", undefined, body)];
    });
}); };
export var serializeAws_queryReorderReceiptRuleSetCommand = function (input, context) { return __awaiter(void 0, void 0, void 0, function () {
    var headers, body;
    return __generator(this, function (_a) {
        headers = {
            "content-type": "application/x-www-form-urlencoded",
        };
        body = buildFormUrlencodedString(__assign(__assign({}, serializeAws_queryReorderReceiptRuleSetRequest(input, context)), { Action: "ReorderReceiptRuleSet", Version: "2010-12-01" }));
        return [2 /*return*/, buildHttpRpcRequest(context, headers, "/", undefined, body)];
    });
}); };
export var serializeAws_querySendBounceCommand = function (input, context) { return __awaiter(void 0, void 0, void 0, function () {
    var headers, body;
    return __generator(this, function (_a) {
        headers = {
            "content-type": "application/x-www-form-urlencoded",
        };
        body = buildFormUrlencodedString(__assign(__assign({}, serializeAws_querySendBounceRequest(input, context)), { Action: "SendBounce", Version: "2010-12-01" }));
        return [2 /*return*/, buildHttpRpcRequest(context, headers, "/", undefined, body)];
    });
}); };
export var serializeAws_querySendBulkTemplatedEmailCommand = function (input, context) { return __awaiter(void 0, void 0, void 0, function () {
    var headers, body;
    return __generator(this, function (_a) {
        headers = {
            "content-type": "application/x-www-form-urlencoded",
        };
        body = buildFormUrlencodedString(__assign(__assign({}, serializeAws_querySendBulkTemplatedEmailRequest(input, context)), { Action: "SendBulkTemplatedEmail", Version: "2010-12-01" }));
        return [2 /*return*/, buildHttpRpcRequest(context, headers, "/", undefined, body)];
    });
}); };
export var serializeAws_querySendCustomVerificationEmailCommand = function (input, context) { return __awaiter(void 0, void 0, void 0, function () {
    var headers, body;
    return __generator(this, function (_a) {
        headers = {
            "content-type": "application/x-www-form-urlencoded",
        };
        body = buildFormUrlencodedString(__assign(__assign({}, serializeAws_querySendCustomVerificationEmailRequest(input, context)), { Action: "SendCustomVerificationEmail", Version: "2010-12-01" }));
        return [2 /*return*/, buildHttpRpcRequest(context, headers, "/", undefined, body)];
    });
}); };
export var serializeAws_querySendEmailCommand = function (input, context) { return __awaiter(void 0, void 0, void 0, function () {
    var headers, body;
    return __generator(this, function (_a) {
        headers = {
            "content-type": "application/x-www-form-urlencoded",
        };
        body = buildFormUrlencodedString(__assign(__assign({}, serializeAws_querySendEmailRequest(input, context)), { Action: "SendEmail", Version: "2010-12-01" }));
        return [2 /*return*/, buildHttpRpcRequest(context, headers, "/", undefined, body)];
    });
}); };
export var serializeAws_querySendRawEmailCommand = function (input, context) { return __awaiter(void 0, void 0, void 0, function () {
    var headers, body;
    return __generator(this, function (_a) {
        headers = {
            "content-type": "application/x-www-form-urlencoded",
        };
        body = buildFormUrlencodedString(__assign(__assign({}, serializeAws_querySendRawEmailRequest(input, context)), { Action: "SendRawEmail", Version: "2010-12-01" }));
        return [2 /*return*/, buildHttpRpcRequest(context, headers, "/", undefined, body)];
    });
}); };
export var serializeAws_querySendTemplatedEmailCommand = function (input, context) { return __awaiter(void 0, void 0, void 0, function () {
    var headers, body;
    return __generator(this, function (_a) {
        headers = {
            "content-type": "application/x-www-form-urlencoded",
        };
        body = buildFormUrlencodedString(__assign(__assign({}, serializeAws_querySendTemplatedEmailRequest(input, context)), { Action: "SendTemplatedEmail", Version: "2010-12-01" }));
        return [2 /*return*/, buildHttpRpcRequest(context, headers, "/", undefined, body)];
    });
}); };
export var serializeAws_querySetActiveReceiptRuleSetCommand = function (input, context) { return __awaiter(void 0, void 0, void 0, function () {
    var headers, body;
    return __generator(this, function (_a) {
        headers = {
            "content-type": "application/x-www-form-urlencoded",
        };
        body = buildFormUrlencodedString(__assign(__assign({}, serializeAws_querySetActiveReceiptRuleSetRequest(input, context)), { Action: "SetActiveReceiptRuleSet", Version: "2010-12-01" }));
        return [2 /*return*/, buildHttpRpcRequest(context, headers, "/", undefined, body)];
    });
}); };
export var serializeAws_querySetIdentityDkimEnabledCommand = function (input, context) { return __awaiter(void 0, void 0, void 0, function () {
    var headers, body;
    return __generator(this, function (_a) {
        headers = {
            "content-type": "application/x-www-form-urlencoded",
        };
        body = buildFormUrlencodedString(__assign(__assign({}, serializeAws_querySetIdentityDkimEnabledRequest(input, context)), { Action: "SetIdentityDkimEnabled", Version: "2010-12-01" }));
        return [2 /*return*/, buildHttpRpcRequest(context, headers, "/", undefined, body)];
    });
}); };
export var serializeAws_querySetIdentityFeedbackForwardingEnabledCommand = function (input, context) { return __awaiter(void 0, void 0, void 0, function () {
    var headers, body;
    return __generator(this, function (_a) {
        headers = {
            "content-type": "application/x-www-form-urlencoded",
        };
        body = buildFormUrlencodedString(__assign(__assign({}, serializeAws_querySetIdentityFeedbackForwardingEnabledRequest(input, context)), { Action: "SetIdentityFeedbackForwardingEnabled", Version: "2010-12-01" }));
        return [2 /*return*/, buildHttpRpcRequest(context, headers, "/", undefined, body)];
    });
}); };
export var serializeAws_querySetIdentityHeadersInNotificationsEnabledCommand = function (input, context) { return __awaiter(void 0, void 0, void 0, function () {
    var headers, body;
    return __generator(this, function (_a) {
        headers = {
            "content-type": "application/x-www-form-urlencoded",
        };
        body = buildFormUrlencodedString(__assign(__assign({}, serializeAws_querySetIdentityHeadersInNotificationsEnabledRequest(input, context)), { Action: "SetIdentityHeadersInNotificationsEnabled", Version: "2010-12-01" }));
        return [2 /*return*/, buildHttpRpcRequest(context, headers, "/", undefined, body)];
    });
}); };
export var serializeAws_querySetIdentityMailFromDomainCommand = function (input, context) { return __awaiter(void 0, void 0, void 0, function () {
    var headers, body;
    return __generator(this, function (_a) {
        headers = {
            "content-type": "application/x-www-form-urlencoded",
        };
        body = buildFormUrlencodedString(__assign(__assign({}, serializeAws_querySetIdentityMailFromDomainRequest(input, context)), { Action: "SetIdentityMailFromDomain", Version: "2010-12-01" }));
        return [2 /*return*/, buildHttpRpcRequest(context, headers, "/", undefined, body)];
    });
}); };
export var serializeAws_querySetIdentityNotificationTopicCommand = function (input, context) { return __awaiter(void 0, void 0, void 0, function () {
    var headers, body;
    return __generator(this, function (_a) {
        headers = {
            "content-type": "application/x-www-form-urlencoded",
        };
        body = buildFormUrlencodedString(__assign(__assign({}, serializeAws_querySetIdentityNotificationTopicRequest(input, context)), { Action: "SetIdentityNotificationTopic", Version: "2010-12-01" }));
        return [2 /*return*/, buildHttpRpcRequest(context, headers, "/", undefined, body)];
    });
}); };
export var serializeAws_querySetReceiptRulePositionCommand = function (input, context) { return __awaiter(void 0, void 0, void 0, function () {
    var headers, body;
    return __generator(this, function (_a) {
        headers = {
            "content-type": "application/x-www-form-urlencoded",
        };
        body = buildFormUrlencodedString(__assign(__assign({}, serializeAws_querySetReceiptRulePositionRequest(input, context)), { Action: "SetReceiptRulePosition", Version: "2010-12-01" }));
        return [2 /*return*/, buildHttpRpcRequest(context, headers, "/", undefined, body)];
    });
}); };
export var serializeAws_queryTestRenderTemplateCommand = function (input, context) { return __awaiter(void 0, void 0, void 0, function () {
    var headers, body;
    return __generator(this, function (_a) {
        headers = {
            "content-type": "application/x-www-form-urlencoded",
        };
        body = buildFormUrlencodedString(__assign(__assign({}, serializeAws_queryTestRenderTemplateRequest(input, context)), { Action: "TestRenderTemplate", Version: "2010-12-01" }));
        return [2 /*return*/, buildHttpRpcRequest(context, headers, "/", undefined, body)];
    });
}); };
export var serializeAws_queryUpdateAccountSendingEnabledCommand = function (input, context) { return __awaiter(void 0, void 0, void 0, function () {
    var headers, body;
    return __generator(this, function (_a) {
        headers = {
            "content-type": "application/x-www-form-urlencoded",
        };
        body = buildFormUrlencodedString(__assign(__assign({}, serializeAws_queryUpdateAccountSendingEnabledRequest(input, context)), { Action: "UpdateAccountSendingEnabled", Version: "2010-12-01" }));
        return [2 /*return*/, buildHttpRpcRequest(context, headers, "/", undefined, body)];
    });
}); };
export var serializeAws_queryUpdateConfigurationSetEventDestinationCommand = function (input, context) { return __awaiter(void 0, void 0, void 0, function () {
    var headers, body;
    return __generator(this, function (_a) {
        headers = {
            "content-type": "application/x-www-form-urlencoded",
        };
        body = buildFormUrlencodedString(__assign(__assign({}, serializeAws_queryUpdateConfigurationSetEventDestinationRequest(input, context)), { Action: "UpdateConfigurationSetEventDestination", Version: "2010-12-01" }));
        return [2 /*return*/, buildHttpRpcRequest(context, headers, "/", undefined, body)];
    });
}); };
export var serializeAws_queryUpdateConfigurationSetReputationMetricsEnabledCommand = function (input, context) { return __awaiter(void 0, void 0, void 0, function () {
    var headers, body;
    return __generator(this, function (_a) {
        headers = {
            "content-type": "application/x-www-form-urlencoded",
        };
        body = buildFormUrlencodedString(__assign(__assign({}, serializeAws_queryUpdateConfigurationSetReputationMetricsEnabledRequest(input, context)), { Action: "UpdateConfigurationSetReputationMetricsEnabled", Version: "2010-12-01" }));
        return [2 /*return*/, buildHttpRpcRequest(context, headers, "/", undefined, body)];
    });
}); };
export var serializeAws_queryUpdateConfigurationSetSendingEnabledCommand = function (input, context) { return __awaiter(void 0, void 0, void 0, function () {
    var headers, body;
    return __generator(this, function (_a) {
        headers = {
            "content-type": "application/x-www-form-urlencoded",
        };
        body = buildFormUrlencodedString(__assign(__assign({}, serializeAws_queryUpdateConfigurationSetSendingEnabledRequest(input, context)), { Action: "UpdateConfigurationSetSendingEnabled", Version: "2010-12-01" }));
        return [2 /*return*/, buildHttpRpcRequest(context, headers, "/", undefined, body)];
    });
}); };
export var serializeAws_queryUpdateConfigurationSetTrackingOptionsCommand = function (input, context) { return __awaiter(void 0, void 0, void 0, function () {
    var headers, body;
    return __generator(this, function (_a) {
        headers = {
            "content-type": "application/x-www-form-urlencoded",
        };
        body = buildFormUrlencodedString(__assign(__assign({}, serializeAws_queryUpdateConfigurationSetTrackingOptionsRequest(input, context)), { Action: "UpdateConfigurationSetTrackingOptions", Version: "2010-12-01" }));
        return [2 /*return*/, buildHttpRpcRequest(context, headers, "/", undefined, body)];
    });
}); };
export var serializeAws_queryUpdateCustomVerificationEmailTemplateCommand = function (input, context) { return __awaiter(void 0, void 0, void 0, function () {
    var headers, body;
    return __generator(this, function (_a) {
        headers = {
            "content-type": "application/x-www-form-urlencoded",
        };
        body = buildFormUrlencodedString(__assign(__assign({}, serializeAws_queryUpdateCustomVerificationEmailTemplateRequest(input, context)), { Action: "UpdateCustomVerificationEmailTemplate", Version: "2010-12-01" }));
        return [2 /*return*/, buildHttpRpcRequest(context, headers, "/", undefined, body)];
    });
}); };
export var serializeAws_queryUpdateReceiptRuleCommand = function (input, context) { return __awaiter(void 0, void 0, void 0, function () {
    var headers, body;
    return __generator(this, function (_a) {
        headers = {
            "content-type": "application/x-www-form-urlencoded",
        };
        body = buildFormUrlencodedString(__assign(__assign({}, serializeAws_queryUpdateReceiptRuleRequest(input, context)), { Action: "UpdateReceiptRule", Version: "2010-12-01" }));
        return [2 /*return*/, buildHttpRpcRequest(context, headers, "/", undefined, body)];
    });
}); };
export var serializeAws_queryUpdateTemplateCommand = function (input, context) { return __awaiter(void 0, void 0, void 0, function () {
    var headers, body;
    return __generator(this, function (_a) {
        headers = {
            "content-type": "application/x-www-form-urlencoded",
        };
        body = buildFormUrlencodedString(__assign(__assign({}, serializeAws_queryUpdateTemplateRequest(input, context)), { Action: "UpdateTemplate", Version: "2010-12-01" }));
        return [2 /*return*/, buildHttpRpcRequest(context, headers, "/", undefined, body)];
    });
}); };
export var serializeAws_queryVerifyDomainDkimCommand = function (input, context) { return __awaiter(void 0, void 0, void 0, function () {
    var headers, body;
    return __generator(this, function (_a) {
        headers = {
            "content-type": "application/x-www-form-urlencoded",
        };
        body = buildFormUrlencodedString(__assign(__assign({}, serializeAws_queryVerifyDomainDkimRequest(input, context)), { Action: "VerifyDomainDkim", Version: "2010-12-01" }));
        return [2 /*return*/, buildHttpRpcRequest(context, headers, "/", undefined, body)];
    });
}); };
export var serializeAws_queryVerifyDomainIdentityCommand = function (input, context) { return __awaiter(void 0, void 0, void 0, function () {
    var headers, body;
    return __generator(this, function (_a) {
        headers = {
            "content-type": "application/x-www-form-urlencoded",
        };
        body = buildFormUrlencodedString(__assign(__assign({}, serializeAws_queryVerifyDomainIdentityRequest(input, context)), { Action: "VerifyDomainIdentity", Version: "2010-12-01" }));
        return [2 /*return*/, buildHttpRpcRequest(context, headers, "/", undefined, body)];
    });
}); };
export var serializeAws_queryVerifyEmailAddressCommand = function (input, context) { return __awaiter(void 0, void 0, void 0, function () {
    var headers, body;
    return __generator(this, function (_a) {
        headers = {
            "content-type": "application/x-www-form-urlencoded",
        };
        body = buildFormUrlencodedString(__assign(__assign({}, serializeAws_queryVerifyEmailAddressRequest(input, context)), { Action: "VerifyEmailAddress", Version: "2010-12-01" }));
        return [2 /*return*/, buildHttpRpcRequest(context, headers, "/", undefined, body)];
    });
}); };
export var serializeAws_queryVerifyEmailIdentityCommand = function (input, context) { return __awaiter(void 0, void 0, void 0, function () {
    var headers, body;
    return __generator(this, function (_a) {
        headers = {
            "content-type": "application/x-www-form-urlencoded",
        };
        body = buildFormUrlencodedString(__assign(__assign({}, serializeAws_queryVerifyEmailIdentityRequest(input, context)), { Action: "VerifyEmailIdentity", Version: "2010-12-01" }));
        return [2 /*return*/, buildHttpRpcRequest(context, headers, "/", undefined, body)];
    });
}); };
export var deserializeAws_queryCloneReceiptRuleSetCommand = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
    var data, contents, response;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                if (output.statusCode >= 300) {
                    return [2 /*return*/, deserializeAws_queryCloneReceiptRuleSetCommandError(output, context)];
                }
                return [4 /*yield*/, parseBody(output.body, context)];
            case 1:
                data = _a.sent();
                contents = {};
                contents = deserializeAws_queryCloneReceiptRuleSetResponse(data.CloneReceiptRuleSetResult, context);
                response = __assign({ $metadata: deserializeMetadata(output) }, contents);
                return [2 /*return*/, Promise.resolve(response)];
        }
    });
}); };
var deserializeAws_queryCloneReceiptRuleSetCommandError = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
    var parsedOutput, _a, response, errorCode, _b, _c, _d, _e, parsedBody, message;
    var _f;
    return __generator(this, function (_g) {
        switch (_g.label) {
            case 0:
                _a = [__assign({}, output)];
                _f = {};
                return [4 /*yield*/, parseBody(output.body, context)];
            case 1:
                parsedOutput = __assign.apply(void 0, _a.concat([(_f.body = _g.sent(), _f)]));
                errorCode = "UnknownError";
                errorCode = loadQueryErrorCode(output, parsedOutput.body);
                _b = errorCode;
                switch (_b) {
                    case "AlreadyExistsException": return [3 /*break*/, 2];
                    case "com.amazonaws.ses#AlreadyExistsException": return [3 /*break*/, 2];
                    case "LimitExceededException": return [3 /*break*/, 4];
                    case "com.amazonaws.ses#LimitExceededException": return [3 /*break*/, 4];
                    case "RuleSetDoesNotExistException": return [3 /*break*/, 6];
                    case "com.amazonaws.ses#RuleSetDoesNotExistException": return [3 /*break*/, 6];
                }
                return [3 /*break*/, 8];
            case 2:
                _c = [{}];
                return [4 /*yield*/, deserializeAws_queryAlreadyExistsExceptionResponse(parsedOutput, context)];
            case 3:
                response = __assign.apply(void 0, [__assign.apply(void 0, _c.concat([(_g.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 9];
            case 4:
                _d = [{}];
                return [4 /*yield*/, deserializeAws_queryLimitExceededExceptionResponse(parsedOutput, context)];
            case 5:
                response = __assign.apply(void 0, [__assign.apply(void 0, _d.concat([(_g.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 9];
            case 6:
                _e = [{}];
                return [4 /*yield*/, deserializeAws_queryRuleSetDoesNotExistExceptionResponse(parsedOutput, context)];
            case 7:
                response = __assign.apply(void 0, [__assign.apply(void 0, _e.concat([(_g.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 9];
            case 8:
                parsedBody = parsedOutput.body;
                errorCode = parsedBody.Error.code || parsedBody.Error.Code || errorCode;
                response = __assign(__assign({}, parsedBody.Error), { name: "" + errorCode, message: parsedBody.Error.message || parsedBody.Error.Message || errorCode, $fault: "client", $metadata: deserializeMetadata(output) });
                _g.label = 9;
            case 9:
                message = response.message || response.Message || errorCode;
                response.message = message;
                delete response.Message;
                return [2 /*return*/, Promise.reject(Object.assign(new Error(message), response))];
        }
    });
}); };
export var deserializeAws_queryCreateConfigurationSetCommand = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
    var data, contents, response;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                if (output.statusCode >= 300) {
                    return [2 /*return*/, deserializeAws_queryCreateConfigurationSetCommandError(output, context)];
                }
                return [4 /*yield*/, parseBody(output.body, context)];
            case 1:
                data = _a.sent();
                contents = {};
                contents = deserializeAws_queryCreateConfigurationSetResponse(data.CreateConfigurationSetResult, context);
                response = __assign({ $metadata: deserializeMetadata(output) }, contents);
                return [2 /*return*/, Promise.resolve(response)];
        }
    });
}); };
var deserializeAws_queryCreateConfigurationSetCommandError = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
    var parsedOutput, _a, response, errorCode, _b, _c, _d, _e, parsedBody, message;
    var _f;
    return __generator(this, function (_g) {
        switch (_g.label) {
            case 0:
                _a = [__assign({}, output)];
                _f = {};
                return [4 /*yield*/, parseBody(output.body, context)];
            case 1:
                parsedOutput = __assign.apply(void 0, _a.concat([(_f.body = _g.sent(), _f)]));
                errorCode = "UnknownError";
                errorCode = loadQueryErrorCode(output, parsedOutput.body);
                _b = errorCode;
                switch (_b) {
                    case "ConfigurationSetAlreadyExistsException": return [3 /*break*/, 2];
                    case "com.amazonaws.ses#ConfigurationSetAlreadyExistsException": return [3 /*break*/, 2];
                    case "InvalidConfigurationSetException": return [3 /*break*/, 4];
                    case "com.amazonaws.ses#InvalidConfigurationSetException": return [3 /*break*/, 4];
                    case "LimitExceededException": return [3 /*break*/, 6];
                    case "com.amazonaws.ses#LimitExceededException": return [3 /*break*/, 6];
                }
                return [3 /*break*/, 8];
            case 2:
                _c = [{}];
                return [4 /*yield*/, deserializeAws_queryConfigurationSetAlreadyExistsExceptionResponse(parsedOutput, context)];
            case 3:
                response = __assign.apply(void 0, [__assign.apply(void 0, _c.concat([(_g.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 9];
            case 4:
                _d = [{}];
                return [4 /*yield*/, deserializeAws_queryInvalidConfigurationSetExceptionResponse(parsedOutput, context)];
            case 5:
                response = __assign.apply(void 0, [__assign.apply(void 0, _d.concat([(_g.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 9];
            case 6:
                _e = [{}];
                return [4 /*yield*/, deserializeAws_queryLimitExceededExceptionResponse(parsedOutput, context)];
            case 7:
                response = __assign.apply(void 0, [__assign.apply(void 0, _e.concat([(_g.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 9];
            case 8:
                parsedBody = parsedOutput.body;
                errorCode = parsedBody.Error.code || parsedBody.Error.Code || errorCode;
                response = __assign(__assign({}, parsedBody.Error), { name: "" + errorCode, message: parsedBody.Error.message || parsedBody.Error.Message || errorCode, $fault: "client", $metadata: deserializeMetadata(output) });
                _g.label = 9;
            case 9:
                message = response.message || response.Message || errorCode;
                response.message = message;
                delete response.Message;
                return [2 /*return*/, Promise.reject(Object.assign(new Error(message), response))];
        }
    });
}); };
export var deserializeAws_queryCreateConfigurationSetEventDestinationCommand = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
    var data, contents, response;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                if (output.statusCode >= 300) {
                    return [2 /*return*/, deserializeAws_queryCreateConfigurationSetEventDestinationCommandError(output, context)];
                }
                return [4 /*yield*/, parseBody(output.body, context)];
            case 1:
                data = _a.sent();
                contents = {};
                contents = deserializeAws_queryCreateConfigurationSetEventDestinationResponse(data.CreateConfigurationSetEventDestinationResult, context);
                response = __assign({ $metadata: deserializeMetadata(output) }, contents);
                return [2 /*return*/, Promise.resolve(response)];
        }
    });
}); };
var deserializeAws_queryCreateConfigurationSetEventDestinationCommandError = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
    var parsedOutput, _a, response, errorCode, _b, _c, _d, _e, _f, _g, _h, parsedBody, message;
    var _j;
    return __generator(this, function (_k) {
        switch (_k.label) {
            case 0:
                _a = [__assign({}, output)];
                _j = {};
                return [4 /*yield*/, parseBody(output.body, context)];
            case 1:
                parsedOutput = __assign.apply(void 0, _a.concat([(_j.body = _k.sent(), _j)]));
                errorCode = "UnknownError";
                errorCode = loadQueryErrorCode(output, parsedOutput.body);
                _b = errorCode;
                switch (_b) {
                    case "ConfigurationSetDoesNotExistException": return [3 /*break*/, 2];
                    case "com.amazonaws.ses#ConfigurationSetDoesNotExistException": return [3 /*break*/, 2];
                    case "EventDestinationAlreadyExistsException": return [3 /*break*/, 4];
                    case "com.amazonaws.ses#EventDestinationAlreadyExistsException": return [3 /*break*/, 4];
                    case "InvalidCloudWatchDestinationException": return [3 /*break*/, 6];
                    case "com.amazonaws.ses#InvalidCloudWatchDestinationException": return [3 /*break*/, 6];
                    case "InvalidFirehoseDestinationException": return [3 /*break*/, 8];
                    case "com.amazonaws.ses#InvalidFirehoseDestinationException": return [3 /*break*/, 8];
                    case "InvalidSNSDestinationException": return [3 /*break*/, 10];
                    case "com.amazonaws.ses#InvalidSNSDestinationException": return [3 /*break*/, 10];
                    case "LimitExceededException": return [3 /*break*/, 12];
                    case "com.amazonaws.ses#LimitExceededException": return [3 /*break*/, 12];
                }
                return [3 /*break*/, 14];
            case 2:
                _c = [{}];
                return [4 /*yield*/, deserializeAws_queryConfigurationSetDoesNotExistExceptionResponse(parsedOutput, context)];
            case 3:
                response = __assign.apply(void 0, [__assign.apply(void 0, _c.concat([(_k.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 15];
            case 4:
                _d = [{}];
                return [4 /*yield*/, deserializeAws_queryEventDestinationAlreadyExistsExceptionResponse(parsedOutput, context)];
            case 5:
                response = __assign.apply(void 0, [__assign.apply(void 0, _d.concat([(_k.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 15];
            case 6:
                _e = [{}];
                return [4 /*yield*/, deserializeAws_queryInvalidCloudWatchDestinationExceptionResponse(parsedOutput, context)];
            case 7:
                response = __assign.apply(void 0, [__assign.apply(void 0, _e.concat([(_k.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 15];
            case 8:
                _f = [{}];
                return [4 /*yield*/, deserializeAws_queryInvalidFirehoseDestinationExceptionResponse(parsedOutput, context)];
            case 9:
                response = __assign.apply(void 0, [__assign.apply(void 0, _f.concat([(_k.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 15];
            case 10:
                _g = [{}];
                return [4 /*yield*/, deserializeAws_queryInvalidSNSDestinationExceptionResponse(parsedOutput, context)];
            case 11:
                response = __assign.apply(void 0, [__assign.apply(void 0, _g.concat([(_k.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 15];
            case 12:
                _h = [{}];
                return [4 /*yield*/, deserializeAws_queryLimitExceededExceptionResponse(parsedOutput, context)];
            case 13:
                response = __assign.apply(void 0, [__assign.apply(void 0, _h.concat([(_k.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 15];
            case 14:
                parsedBody = parsedOutput.body;
                errorCode = parsedBody.Error.code || parsedBody.Error.Code || errorCode;
                response = __assign(__assign({}, parsedBody.Error), { name: "" + errorCode, message: parsedBody.Error.message || parsedBody.Error.Message || errorCode, $fault: "client", $metadata: deserializeMetadata(output) });
                _k.label = 15;
            case 15:
                message = response.message || response.Message || errorCode;
                response.message = message;
                delete response.Message;
                return [2 /*return*/, Promise.reject(Object.assign(new Error(message), response))];
        }
    });
}); };
export var deserializeAws_queryCreateConfigurationSetTrackingOptionsCommand = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
    var data, contents, response;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                if (output.statusCode >= 300) {
                    return [2 /*return*/, deserializeAws_queryCreateConfigurationSetTrackingOptionsCommandError(output, context)];
                }
                return [4 /*yield*/, parseBody(output.body, context)];
            case 1:
                data = _a.sent();
                contents = {};
                contents = deserializeAws_queryCreateConfigurationSetTrackingOptionsResponse(data.CreateConfigurationSetTrackingOptionsResult, context);
                response = __assign({ $metadata: deserializeMetadata(output) }, contents);
                return [2 /*return*/, Promise.resolve(response)];
        }
    });
}); };
var deserializeAws_queryCreateConfigurationSetTrackingOptionsCommandError = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
    var parsedOutput, _a, response, errorCode, _b, _c, _d, _e, parsedBody, message;
    var _f;
    return __generator(this, function (_g) {
        switch (_g.label) {
            case 0:
                _a = [__assign({}, output)];
                _f = {};
                return [4 /*yield*/, parseBody(output.body, context)];
            case 1:
                parsedOutput = __assign.apply(void 0, _a.concat([(_f.body = _g.sent(), _f)]));
                errorCode = "UnknownError";
                errorCode = loadQueryErrorCode(output, parsedOutput.body);
                _b = errorCode;
                switch (_b) {
                    case "ConfigurationSetDoesNotExistException": return [3 /*break*/, 2];
                    case "com.amazonaws.ses#ConfigurationSetDoesNotExistException": return [3 /*break*/, 2];
                    case "InvalidTrackingOptionsException": return [3 /*break*/, 4];
                    case "com.amazonaws.ses#InvalidTrackingOptionsException": return [3 /*break*/, 4];
                    case "TrackingOptionsAlreadyExistsException": return [3 /*break*/, 6];
                    case "com.amazonaws.ses#TrackingOptionsAlreadyExistsException": return [3 /*break*/, 6];
                }
                return [3 /*break*/, 8];
            case 2:
                _c = [{}];
                return [4 /*yield*/, deserializeAws_queryConfigurationSetDoesNotExistExceptionResponse(parsedOutput, context)];
            case 3:
                response = __assign.apply(void 0, [__assign.apply(void 0, _c.concat([(_g.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 9];
            case 4:
                _d = [{}];
                return [4 /*yield*/, deserializeAws_queryInvalidTrackingOptionsExceptionResponse(parsedOutput, context)];
            case 5:
                response = __assign.apply(void 0, [__assign.apply(void 0, _d.concat([(_g.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 9];
            case 6:
                _e = [{}];
                return [4 /*yield*/, deserializeAws_queryTrackingOptionsAlreadyExistsExceptionResponse(parsedOutput, context)];
            case 7:
                response = __assign.apply(void 0, [__assign.apply(void 0, _e.concat([(_g.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 9];
            case 8:
                parsedBody = parsedOutput.body;
                errorCode = parsedBody.Error.code || parsedBody.Error.Code || errorCode;
                response = __assign(__assign({}, parsedBody.Error), { name: "" + errorCode, message: parsedBody.Error.message || parsedBody.Error.Message || errorCode, $fault: "client", $metadata: deserializeMetadata(output) });
                _g.label = 9;
            case 9:
                message = response.message || response.Message || errorCode;
                response.message = message;
                delete response.Message;
                return [2 /*return*/, Promise.reject(Object.assign(new Error(message), response))];
        }
    });
}); };
export var deserializeAws_queryCreateCustomVerificationEmailTemplateCommand = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
    var response;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                if (output.statusCode >= 300) {
                    return [2 /*return*/, deserializeAws_queryCreateCustomVerificationEmailTemplateCommandError(output, context)];
                }
                return [4 /*yield*/, collectBody(output.body, context)];
            case 1:
                _a.sent();
                response = {
                    $metadata: deserializeMetadata(output),
                };
                return [2 /*return*/, Promise.resolve(response)];
        }
    });
}); };
var deserializeAws_queryCreateCustomVerificationEmailTemplateCommandError = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
    var parsedOutput, _a, response, errorCode, _b, _c, _d, _e, _f, parsedBody, message;
    var _g;
    return __generator(this, function (_h) {
        switch (_h.label) {
            case 0:
                _a = [__assign({}, output)];
                _g = {};
                return [4 /*yield*/, parseBody(output.body, context)];
            case 1:
                parsedOutput = __assign.apply(void 0, _a.concat([(_g.body = _h.sent(), _g)]));
                errorCode = "UnknownError";
                errorCode = loadQueryErrorCode(output, parsedOutput.body);
                _b = errorCode;
                switch (_b) {
                    case "CustomVerificationEmailInvalidContentException": return [3 /*break*/, 2];
                    case "com.amazonaws.ses#CustomVerificationEmailInvalidContentException": return [3 /*break*/, 2];
                    case "CustomVerificationEmailTemplateAlreadyExistsException": return [3 /*break*/, 4];
                    case "com.amazonaws.ses#CustomVerificationEmailTemplateAlreadyExistsException": return [3 /*break*/, 4];
                    case "FromEmailAddressNotVerifiedException": return [3 /*break*/, 6];
                    case "com.amazonaws.ses#FromEmailAddressNotVerifiedException": return [3 /*break*/, 6];
                    case "LimitExceededException": return [3 /*break*/, 8];
                    case "com.amazonaws.ses#LimitExceededException": return [3 /*break*/, 8];
                }
                return [3 /*break*/, 10];
            case 2:
                _c = [{}];
                return [4 /*yield*/, deserializeAws_queryCustomVerificationEmailInvalidContentExceptionResponse(parsedOutput, context)];
            case 3:
                response = __assign.apply(void 0, [__assign.apply(void 0, _c.concat([(_h.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 11];
            case 4:
                _d = [{}];
                return [4 /*yield*/, deserializeAws_queryCustomVerificationEmailTemplateAlreadyExistsExceptionResponse(parsedOutput, context)];
            case 5:
                response = __assign.apply(void 0, [__assign.apply(void 0, _d.concat([(_h.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 11];
            case 6:
                _e = [{}];
                return [4 /*yield*/, deserializeAws_queryFromEmailAddressNotVerifiedExceptionResponse(parsedOutput, context)];
            case 7:
                response = __assign.apply(void 0, [__assign.apply(void 0, _e.concat([(_h.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 11];
            case 8:
                _f = [{}];
                return [4 /*yield*/, deserializeAws_queryLimitExceededExceptionResponse(parsedOutput, context)];
            case 9:
                response = __assign.apply(void 0, [__assign.apply(void 0, _f.concat([(_h.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 11];
            case 10:
                parsedBody = parsedOutput.body;
                errorCode = parsedBody.Error.code || parsedBody.Error.Code || errorCode;
                response = __assign(__assign({}, parsedBody.Error), { name: "" + errorCode, message: parsedBody.Error.message || parsedBody.Error.Message || errorCode, $fault: "client", $metadata: deserializeMetadata(output) });
                _h.label = 11;
            case 11:
                message = response.message || response.Message || errorCode;
                response.message = message;
                delete response.Message;
                return [2 /*return*/, Promise.reject(Object.assign(new Error(message), response))];
        }
    });
}); };
export var deserializeAws_queryCreateReceiptFilterCommand = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
    var data, contents, response;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                if (output.statusCode >= 300) {
                    return [2 /*return*/, deserializeAws_queryCreateReceiptFilterCommandError(output, context)];
                }
                return [4 /*yield*/, parseBody(output.body, context)];
            case 1:
                data = _a.sent();
                contents = {};
                contents = deserializeAws_queryCreateReceiptFilterResponse(data.CreateReceiptFilterResult, context);
                response = __assign({ $metadata: deserializeMetadata(output) }, contents);
                return [2 /*return*/, Promise.resolve(response)];
        }
    });
}); };
var deserializeAws_queryCreateReceiptFilterCommandError = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
    var parsedOutput, _a, response, errorCode, _b, _c, _d, parsedBody, message;
    var _e;
    return __generator(this, function (_f) {
        switch (_f.label) {
            case 0:
                _a = [__assign({}, output)];
                _e = {};
                return [4 /*yield*/, parseBody(output.body, context)];
            case 1:
                parsedOutput = __assign.apply(void 0, _a.concat([(_e.body = _f.sent(), _e)]));
                errorCode = "UnknownError";
                errorCode = loadQueryErrorCode(output, parsedOutput.body);
                _b = errorCode;
                switch (_b) {
                    case "AlreadyExistsException": return [3 /*break*/, 2];
                    case "com.amazonaws.ses#AlreadyExistsException": return [3 /*break*/, 2];
                    case "LimitExceededException": return [3 /*break*/, 4];
                    case "com.amazonaws.ses#LimitExceededException": return [3 /*break*/, 4];
                }
                return [3 /*break*/, 6];
            case 2:
                _c = [{}];
                return [4 /*yield*/, deserializeAws_queryAlreadyExistsExceptionResponse(parsedOutput, context)];
            case 3:
                response = __assign.apply(void 0, [__assign.apply(void 0, _c.concat([(_f.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 7];
            case 4:
                _d = [{}];
                return [4 /*yield*/, deserializeAws_queryLimitExceededExceptionResponse(parsedOutput, context)];
            case 5:
                response = __assign.apply(void 0, [__assign.apply(void 0, _d.concat([(_f.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 7];
            case 6:
                parsedBody = parsedOutput.body;
                errorCode = parsedBody.Error.code || parsedBody.Error.Code || errorCode;
                response = __assign(__assign({}, parsedBody.Error), { name: "" + errorCode, message: parsedBody.Error.message || parsedBody.Error.Message || errorCode, $fault: "client", $metadata: deserializeMetadata(output) });
                _f.label = 7;
            case 7:
                message = response.message || response.Message || errorCode;
                response.message = message;
                delete response.Message;
                return [2 /*return*/, Promise.reject(Object.assign(new Error(message), response))];
        }
    });
}); };
export var deserializeAws_queryCreateReceiptRuleCommand = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
    var data, contents, response;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                if (output.statusCode >= 300) {
                    return [2 /*return*/, deserializeAws_queryCreateReceiptRuleCommandError(output, context)];
                }
                return [4 /*yield*/, parseBody(output.body, context)];
            case 1:
                data = _a.sent();
                contents = {};
                contents = deserializeAws_queryCreateReceiptRuleResponse(data.CreateReceiptRuleResult, context);
                response = __assign({ $metadata: deserializeMetadata(output) }, contents);
                return [2 /*return*/, Promise.resolve(response)];
        }
    });
}); };
var deserializeAws_queryCreateReceiptRuleCommandError = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
    var parsedOutput, _a, response, errorCode, _b, _c, _d, _e, _f, _g, _h, _j, parsedBody, message;
    var _k;
    return __generator(this, function (_l) {
        switch (_l.label) {
            case 0:
                _a = [__assign({}, output)];
                _k = {};
                return [4 /*yield*/, parseBody(output.body, context)];
            case 1:
                parsedOutput = __assign.apply(void 0, _a.concat([(_k.body = _l.sent(), _k)]));
                errorCode = "UnknownError";
                errorCode = loadQueryErrorCode(output, parsedOutput.body);
                _b = errorCode;
                switch (_b) {
                    case "AlreadyExistsException": return [3 /*break*/, 2];
                    case "com.amazonaws.ses#AlreadyExistsException": return [3 /*break*/, 2];
                    case "InvalidLambdaFunctionException": return [3 /*break*/, 4];
                    case "com.amazonaws.ses#InvalidLambdaFunctionException": return [3 /*break*/, 4];
                    case "InvalidS3ConfigurationException": return [3 /*break*/, 6];
                    case "com.amazonaws.ses#InvalidS3ConfigurationException": return [3 /*break*/, 6];
                    case "InvalidSnsTopicException": return [3 /*break*/, 8];
                    case "com.amazonaws.ses#InvalidSnsTopicException": return [3 /*break*/, 8];
                    case "LimitExceededException": return [3 /*break*/, 10];
                    case "com.amazonaws.ses#LimitExceededException": return [3 /*break*/, 10];
                    case "RuleDoesNotExistException": return [3 /*break*/, 12];
                    case "com.amazonaws.ses#RuleDoesNotExistException": return [3 /*break*/, 12];
                    case "RuleSetDoesNotExistException": return [3 /*break*/, 14];
                    case "com.amazonaws.ses#RuleSetDoesNotExistException": return [3 /*break*/, 14];
                }
                return [3 /*break*/, 16];
            case 2:
                _c = [{}];
                return [4 /*yield*/, deserializeAws_queryAlreadyExistsExceptionResponse(parsedOutput, context)];
            case 3:
                response = __assign.apply(void 0, [__assign.apply(void 0, _c.concat([(_l.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 17];
            case 4:
                _d = [{}];
                return [4 /*yield*/, deserializeAws_queryInvalidLambdaFunctionExceptionResponse(parsedOutput, context)];
            case 5:
                response = __assign.apply(void 0, [__assign.apply(void 0, _d.concat([(_l.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 17];
            case 6:
                _e = [{}];
                return [4 /*yield*/, deserializeAws_queryInvalidS3ConfigurationExceptionResponse(parsedOutput, context)];
            case 7:
                response = __assign.apply(void 0, [__assign.apply(void 0, _e.concat([(_l.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 17];
            case 8:
                _f = [{}];
                return [4 /*yield*/, deserializeAws_queryInvalidSnsTopicExceptionResponse(parsedOutput, context)];
            case 9:
                response = __assign.apply(void 0, [__assign.apply(void 0, _f.concat([(_l.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 17];
            case 10:
                _g = [{}];
                return [4 /*yield*/, deserializeAws_queryLimitExceededExceptionResponse(parsedOutput, context)];
            case 11:
                response = __assign.apply(void 0, [__assign.apply(void 0, _g.concat([(_l.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 17];
            case 12:
                _h = [{}];
                return [4 /*yield*/, deserializeAws_queryRuleDoesNotExistExceptionResponse(parsedOutput, context)];
            case 13:
                response = __assign.apply(void 0, [__assign.apply(void 0, _h.concat([(_l.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 17];
            case 14:
                _j = [{}];
                return [4 /*yield*/, deserializeAws_queryRuleSetDoesNotExistExceptionResponse(parsedOutput, context)];
            case 15:
                response = __assign.apply(void 0, [__assign.apply(void 0, _j.concat([(_l.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 17];
            case 16:
                parsedBody = parsedOutput.body;
                errorCode = parsedBody.Error.code || parsedBody.Error.Code || errorCode;
                response = __assign(__assign({}, parsedBody.Error), { name: "" + errorCode, message: parsedBody.Error.message || parsedBody.Error.Message || errorCode, $fault: "client", $metadata: deserializeMetadata(output) });
                _l.label = 17;
            case 17:
                message = response.message || response.Message || errorCode;
                response.message = message;
                delete response.Message;
                return [2 /*return*/, Promise.reject(Object.assign(new Error(message), response))];
        }
    });
}); };
export var deserializeAws_queryCreateReceiptRuleSetCommand = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
    var data, contents, response;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                if (output.statusCode >= 300) {
                    return [2 /*return*/, deserializeAws_queryCreateReceiptRuleSetCommandError(output, context)];
                }
                return [4 /*yield*/, parseBody(output.body, context)];
            case 1:
                data = _a.sent();
                contents = {};
                contents = deserializeAws_queryCreateReceiptRuleSetResponse(data.CreateReceiptRuleSetResult, context);
                response = __assign({ $metadata: deserializeMetadata(output) }, contents);
                return [2 /*return*/, Promise.resolve(response)];
        }
    });
}); };
var deserializeAws_queryCreateReceiptRuleSetCommandError = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
    var parsedOutput, _a, response, errorCode, _b, _c, _d, parsedBody, message;
    var _e;
    return __generator(this, function (_f) {
        switch (_f.label) {
            case 0:
                _a = [__assign({}, output)];
                _e = {};
                return [4 /*yield*/, parseBody(output.body, context)];
            case 1:
                parsedOutput = __assign.apply(void 0, _a.concat([(_e.body = _f.sent(), _e)]));
                errorCode = "UnknownError";
                errorCode = loadQueryErrorCode(output, parsedOutput.body);
                _b = errorCode;
                switch (_b) {
                    case "AlreadyExistsException": return [3 /*break*/, 2];
                    case "com.amazonaws.ses#AlreadyExistsException": return [3 /*break*/, 2];
                    case "LimitExceededException": return [3 /*break*/, 4];
                    case "com.amazonaws.ses#LimitExceededException": return [3 /*break*/, 4];
                }
                return [3 /*break*/, 6];
            case 2:
                _c = [{}];
                return [4 /*yield*/, deserializeAws_queryAlreadyExistsExceptionResponse(parsedOutput, context)];
            case 3:
                response = __assign.apply(void 0, [__assign.apply(void 0, _c.concat([(_f.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 7];
            case 4:
                _d = [{}];
                return [4 /*yield*/, deserializeAws_queryLimitExceededExceptionResponse(parsedOutput, context)];
            case 5:
                response = __assign.apply(void 0, [__assign.apply(void 0, _d.concat([(_f.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 7];
            case 6:
                parsedBody = parsedOutput.body;
                errorCode = parsedBody.Error.code || parsedBody.Error.Code || errorCode;
                response = __assign(__assign({}, parsedBody.Error), { name: "" + errorCode, message: parsedBody.Error.message || parsedBody.Error.Message || errorCode, $fault: "client", $metadata: deserializeMetadata(output) });
                _f.label = 7;
            case 7:
                message = response.message || response.Message || errorCode;
                response.message = message;
                delete response.Message;
                return [2 /*return*/, Promise.reject(Object.assign(new Error(message), response))];
        }
    });
}); };
export var deserializeAws_queryCreateTemplateCommand = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
    var data, contents, response;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                if (output.statusCode >= 300) {
                    return [2 /*return*/, deserializeAws_queryCreateTemplateCommandError(output, context)];
                }
                return [4 /*yield*/, parseBody(output.body, context)];
            case 1:
                data = _a.sent();
                contents = {};
                contents = deserializeAws_queryCreateTemplateResponse(data.CreateTemplateResult, context);
                response = __assign({ $metadata: deserializeMetadata(output) }, contents);
                return [2 /*return*/, Promise.resolve(response)];
        }
    });
}); };
var deserializeAws_queryCreateTemplateCommandError = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
    var parsedOutput, _a, response, errorCode, _b, _c, _d, _e, parsedBody, message;
    var _f;
    return __generator(this, function (_g) {
        switch (_g.label) {
            case 0:
                _a = [__assign({}, output)];
                _f = {};
                return [4 /*yield*/, parseBody(output.body, context)];
            case 1:
                parsedOutput = __assign.apply(void 0, _a.concat([(_f.body = _g.sent(), _f)]));
                errorCode = "UnknownError";
                errorCode = loadQueryErrorCode(output, parsedOutput.body);
                _b = errorCode;
                switch (_b) {
                    case "AlreadyExistsException": return [3 /*break*/, 2];
                    case "com.amazonaws.ses#AlreadyExistsException": return [3 /*break*/, 2];
                    case "InvalidTemplateException": return [3 /*break*/, 4];
                    case "com.amazonaws.ses#InvalidTemplateException": return [3 /*break*/, 4];
                    case "LimitExceededException": return [3 /*break*/, 6];
                    case "com.amazonaws.ses#LimitExceededException": return [3 /*break*/, 6];
                }
                return [3 /*break*/, 8];
            case 2:
                _c = [{}];
                return [4 /*yield*/, deserializeAws_queryAlreadyExistsExceptionResponse(parsedOutput, context)];
            case 3:
                response = __assign.apply(void 0, [__assign.apply(void 0, _c.concat([(_g.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 9];
            case 4:
                _d = [{}];
                return [4 /*yield*/, deserializeAws_queryInvalidTemplateExceptionResponse(parsedOutput, context)];
            case 5:
                response = __assign.apply(void 0, [__assign.apply(void 0, _d.concat([(_g.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 9];
            case 6:
                _e = [{}];
                return [4 /*yield*/, deserializeAws_queryLimitExceededExceptionResponse(parsedOutput, context)];
            case 7:
                response = __assign.apply(void 0, [__assign.apply(void 0, _e.concat([(_g.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 9];
            case 8:
                parsedBody = parsedOutput.body;
                errorCode = parsedBody.Error.code || parsedBody.Error.Code || errorCode;
                response = __assign(__assign({}, parsedBody.Error), { name: "" + errorCode, message: parsedBody.Error.message || parsedBody.Error.Message || errorCode, $fault: "client", $metadata: deserializeMetadata(output) });
                _g.label = 9;
            case 9:
                message = response.message || response.Message || errorCode;
                response.message = message;
                delete response.Message;
                return [2 /*return*/, Promise.reject(Object.assign(new Error(message), response))];
        }
    });
}); };
export var deserializeAws_queryDeleteConfigurationSetCommand = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
    var data, contents, response;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                if (output.statusCode >= 300) {
                    return [2 /*return*/, deserializeAws_queryDeleteConfigurationSetCommandError(output, context)];
                }
                return [4 /*yield*/, parseBody(output.body, context)];
            case 1:
                data = _a.sent();
                contents = {};
                contents = deserializeAws_queryDeleteConfigurationSetResponse(data.DeleteConfigurationSetResult, context);
                response = __assign({ $metadata: deserializeMetadata(output) }, contents);
                return [2 /*return*/, Promise.resolve(response)];
        }
    });
}); };
var deserializeAws_queryDeleteConfigurationSetCommandError = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
    var parsedOutput, _a, response, errorCode, _b, _c, parsedBody, message;
    var _d;
    return __generator(this, function (_e) {
        switch (_e.label) {
            case 0:
                _a = [__assign({}, output)];
                _d = {};
                return [4 /*yield*/, parseBody(output.body, context)];
            case 1:
                parsedOutput = __assign.apply(void 0, _a.concat([(_d.body = _e.sent(), _d)]));
                errorCode = "UnknownError";
                errorCode = loadQueryErrorCode(output, parsedOutput.body);
                _b = errorCode;
                switch (_b) {
                    case "ConfigurationSetDoesNotExistException": return [3 /*break*/, 2];
                    case "com.amazonaws.ses#ConfigurationSetDoesNotExistException": return [3 /*break*/, 2];
                }
                return [3 /*break*/, 4];
            case 2:
                _c = [{}];
                return [4 /*yield*/, deserializeAws_queryConfigurationSetDoesNotExistExceptionResponse(parsedOutput, context)];
            case 3:
                response = __assign.apply(void 0, [__assign.apply(void 0, _c.concat([(_e.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 5];
            case 4:
                parsedBody = parsedOutput.body;
                errorCode = parsedBody.Error.code || parsedBody.Error.Code || errorCode;
                response = __assign(__assign({}, parsedBody.Error), { name: "" + errorCode, message: parsedBody.Error.message || parsedBody.Error.Message || errorCode, $fault: "client", $metadata: deserializeMetadata(output) });
                _e.label = 5;
            case 5:
                message = response.message || response.Message || errorCode;
                response.message = message;
                delete response.Message;
                return [2 /*return*/, Promise.reject(Object.assign(new Error(message), response))];
        }
    });
}); };
export var deserializeAws_queryDeleteConfigurationSetEventDestinationCommand = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
    var data, contents, response;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                if (output.statusCode >= 300) {
                    return [2 /*return*/, deserializeAws_queryDeleteConfigurationSetEventDestinationCommandError(output, context)];
                }
                return [4 /*yield*/, parseBody(output.body, context)];
            case 1:
                data = _a.sent();
                contents = {};
                contents = deserializeAws_queryDeleteConfigurationSetEventDestinationResponse(data.DeleteConfigurationSetEventDestinationResult, context);
                response = __assign({ $metadata: deserializeMetadata(output) }, contents);
                return [2 /*return*/, Promise.resolve(response)];
        }
    });
}); };
var deserializeAws_queryDeleteConfigurationSetEventDestinationCommandError = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
    var parsedOutput, _a, response, errorCode, _b, _c, _d, parsedBody, message;
    var _e;
    return __generator(this, function (_f) {
        switch (_f.label) {
            case 0:
                _a = [__assign({}, output)];
                _e = {};
                return [4 /*yield*/, parseBody(output.body, context)];
            case 1:
                parsedOutput = __assign.apply(void 0, _a.concat([(_e.body = _f.sent(), _e)]));
                errorCode = "UnknownError";
                errorCode = loadQueryErrorCode(output, parsedOutput.body);
                _b = errorCode;
                switch (_b) {
                    case "ConfigurationSetDoesNotExistException": return [3 /*break*/, 2];
                    case "com.amazonaws.ses#ConfigurationSetDoesNotExistException": return [3 /*break*/, 2];
                    case "EventDestinationDoesNotExistException": return [3 /*break*/, 4];
                    case "com.amazonaws.ses#EventDestinationDoesNotExistException": return [3 /*break*/, 4];
                }
                return [3 /*break*/, 6];
            case 2:
                _c = [{}];
                return [4 /*yield*/, deserializeAws_queryConfigurationSetDoesNotExistExceptionResponse(parsedOutput, context)];
            case 3:
                response = __assign.apply(void 0, [__assign.apply(void 0, _c.concat([(_f.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 7];
            case 4:
                _d = [{}];
                return [4 /*yield*/, deserializeAws_queryEventDestinationDoesNotExistExceptionResponse(parsedOutput, context)];
            case 5:
                response = __assign.apply(void 0, [__assign.apply(void 0, _d.concat([(_f.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 7];
            case 6:
                parsedBody = parsedOutput.body;
                errorCode = parsedBody.Error.code || parsedBody.Error.Code || errorCode;
                response = __assign(__assign({}, parsedBody.Error), { name: "" + errorCode, message: parsedBody.Error.message || parsedBody.Error.Message || errorCode, $fault: "client", $metadata: deserializeMetadata(output) });
                _f.label = 7;
            case 7:
                message = response.message || response.Message || errorCode;
                response.message = message;
                delete response.Message;
                return [2 /*return*/, Promise.reject(Object.assign(new Error(message), response))];
        }
    });
}); };
export var deserializeAws_queryDeleteConfigurationSetTrackingOptionsCommand = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
    var data, contents, response;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                if (output.statusCode >= 300) {
                    return [2 /*return*/, deserializeAws_queryDeleteConfigurationSetTrackingOptionsCommandError(output, context)];
                }
                return [4 /*yield*/, parseBody(output.body, context)];
            case 1:
                data = _a.sent();
                contents = {};
                contents = deserializeAws_queryDeleteConfigurationSetTrackingOptionsResponse(data.DeleteConfigurationSetTrackingOptionsResult, context);
                response = __assign({ $metadata: deserializeMetadata(output) }, contents);
                return [2 /*return*/, Promise.resolve(response)];
        }
    });
}); };
var deserializeAws_queryDeleteConfigurationSetTrackingOptionsCommandError = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
    var parsedOutput, _a, response, errorCode, _b, _c, _d, parsedBody, message;
    var _e;
    return __generator(this, function (_f) {
        switch (_f.label) {
            case 0:
                _a = [__assign({}, output)];
                _e = {};
                return [4 /*yield*/, parseBody(output.body, context)];
            case 1:
                parsedOutput = __assign.apply(void 0, _a.concat([(_e.body = _f.sent(), _e)]));
                errorCode = "UnknownError";
                errorCode = loadQueryErrorCode(output, parsedOutput.body);
                _b = errorCode;
                switch (_b) {
                    case "ConfigurationSetDoesNotExistException": return [3 /*break*/, 2];
                    case "com.amazonaws.ses#ConfigurationSetDoesNotExistException": return [3 /*break*/, 2];
                    case "TrackingOptionsDoesNotExistException": return [3 /*break*/, 4];
                    case "com.amazonaws.ses#TrackingOptionsDoesNotExistException": return [3 /*break*/, 4];
                }
                return [3 /*break*/, 6];
            case 2:
                _c = [{}];
                return [4 /*yield*/, deserializeAws_queryConfigurationSetDoesNotExistExceptionResponse(parsedOutput, context)];
            case 3:
                response = __assign.apply(void 0, [__assign.apply(void 0, _c.concat([(_f.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 7];
            case 4:
                _d = [{}];
                return [4 /*yield*/, deserializeAws_queryTrackingOptionsDoesNotExistExceptionResponse(parsedOutput, context)];
            case 5:
                response = __assign.apply(void 0, [__assign.apply(void 0, _d.concat([(_f.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 7];
            case 6:
                parsedBody = parsedOutput.body;
                errorCode = parsedBody.Error.code || parsedBody.Error.Code || errorCode;
                response = __assign(__assign({}, parsedBody.Error), { name: "" + errorCode, message: parsedBody.Error.message || parsedBody.Error.Message || errorCode, $fault: "client", $metadata: deserializeMetadata(output) });
                _f.label = 7;
            case 7:
                message = response.message || response.Message || errorCode;
                response.message = message;
                delete response.Message;
                return [2 /*return*/, Promise.reject(Object.assign(new Error(message), response))];
        }
    });
}); };
export var deserializeAws_queryDeleteCustomVerificationEmailTemplateCommand = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
    var response;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                if (output.statusCode >= 300) {
                    return [2 /*return*/, deserializeAws_queryDeleteCustomVerificationEmailTemplateCommandError(output, context)];
                }
                return [4 /*yield*/, collectBody(output.body, context)];
            case 1:
                _a.sent();
                response = {
                    $metadata: deserializeMetadata(output),
                };
                return [2 /*return*/, Promise.resolve(response)];
        }
    });
}); };
var deserializeAws_queryDeleteCustomVerificationEmailTemplateCommandError = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
    var parsedOutput, _a, response, errorCode, parsedBody, message;
    var _b;
    return __generator(this, function (_c) {
        switch (_c.label) {
            case 0:
                _a = [__assign({}, output)];
                _b = {};
                return [4 /*yield*/, parseBody(output.body, context)];
            case 1:
                parsedOutput = __assign.apply(void 0, _a.concat([(_b.body = _c.sent(), _b)]));
                errorCode = "UnknownError";
                errorCode = loadQueryErrorCode(output, parsedOutput.body);
                switch (errorCode) {
                    default:
                        parsedBody = parsedOutput.body;
                        errorCode = parsedBody.Error.code || parsedBody.Error.Code || errorCode;
                        response = __assign(__assign({}, parsedBody.Error), { name: "" + errorCode, message: parsedBody.Error.message || parsedBody.Error.Message || errorCode, $fault: "client", $metadata: deserializeMetadata(output) });
                }
                message = response.message || response.Message || errorCode;
                response.message = message;
                delete response.Message;
                return [2 /*return*/, Promise.reject(Object.assign(new Error(message), response))];
        }
    });
}); };
export var deserializeAws_queryDeleteIdentityCommand = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
    var data, contents, response;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                if (output.statusCode >= 300) {
                    return [2 /*return*/, deserializeAws_queryDeleteIdentityCommandError(output, context)];
                }
                return [4 /*yield*/, parseBody(output.body, context)];
            case 1:
                data = _a.sent();
                contents = {};
                contents = deserializeAws_queryDeleteIdentityResponse(data.DeleteIdentityResult, context);
                response = __assign({ $metadata: deserializeMetadata(output) }, contents);
                return [2 /*return*/, Promise.resolve(response)];
        }
    });
}); };
var deserializeAws_queryDeleteIdentityCommandError = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
    var parsedOutput, _a, response, errorCode, parsedBody, message;
    var _b;
    return __generator(this, function (_c) {
        switch (_c.label) {
            case 0:
                _a = [__assign({}, output)];
                _b = {};
                return [4 /*yield*/, parseBody(output.body, context)];
            case 1:
                parsedOutput = __assign.apply(void 0, _a.concat([(_b.body = _c.sent(), _b)]));
                errorCode = "UnknownError";
                errorCode = loadQueryErrorCode(output, parsedOutput.body);
                switch (errorCode) {
                    default:
                        parsedBody = parsedOutput.body;
                        errorCode = parsedBody.Error.code || parsedBody.Error.Code || errorCode;
                        response = __assign(__assign({}, parsedBody.Error), { name: "" + errorCode, message: parsedBody.Error.message || parsedBody.Error.Message || errorCode, $fault: "client", $metadata: deserializeMetadata(output) });
                }
                message = response.message || response.Message || errorCode;
                response.message = message;
                delete response.Message;
                return [2 /*return*/, Promise.reject(Object.assign(new Error(message), response))];
        }
    });
}); };
export var deserializeAws_queryDeleteIdentityPolicyCommand = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
    var data, contents, response;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                if (output.statusCode >= 300) {
                    return [2 /*return*/, deserializeAws_queryDeleteIdentityPolicyCommandError(output, context)];
                }
                return [4 /*yield*/, parseBody(output.body, context)];
            case 1:
                data = _a.sent();
                contents = {};
                contents = deserializeAws_queryDeleteIdentityPolicyResponse(data.DeleteIdentityPolicyResult, context);
                response = __assign({ $metadata: deserializeMetadata(output) }, contents);
                return [2 /*return*/, Promise.resolve(response)];
        }
    });
}); };
var deserializeAws_queryDeleteIdentityPolicyCommandError = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
    var parsedOutput, _a, response, errorCode, parsedBody, message;
    var _b;
    return __generator(this, function (_c) {
        switch (_c.label) {
            case 0:
                _a = [__assign({}, output)];
                _b = {};
                return [4 /*yield*/, parseBody(output.body, context)];
            case 1:
                parsedOutput = __assign.apply(void 0, _a.concat([(_b.body = _c.sent(), _b)]));
                errorCode = "UnknownError";
                errorCode = loadQueryErrorCode(output, parsedOutput.body);
                switch (errorCode) {
                    default:
                        parsedBody = parsedOutput.body;
                        errorCode = parsedBody.Error.code || parsedBody.Error.Code || errorCode;
                        response = __assign(__assign({}, parsedBody.Error), { name: "" + errorCode, message: parsedBody.Error.message || parsedBody.Error.Message || errorCode, $fault: "client", $metadata: deserializeMetadata(output) });
                }
                message = response.message || response.Message || errorCode;
                response.message = message;
                delete response.Message;
                return [2 /*return*/, Promise.reject(Object.assign(new Error(message), response))];
        }
    });
}); };
export var deserializeAws_queryDeleteReceiptFilterCommand = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
    var data, contents, response;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                if (output.statusCode >= 300) {
                    return [2 /*return*/, deserializeAws_queryDeleteReceiptFilterCommandError(output, context)];
                }
                return [4 /*yield*/, parseBody(output.body, context)];
            case 1:
                data = _a.sent();
                contents = {};
                contents = deserializeAws_queryDeleteReceiptFilterResponse(data.DeleteReceiptFilterResult, context);
                response = __assign({ $metadata: deserializeMetadata(output) }, contents);
                return [2 /*return*/, Promise.resolve(response)];
        }
    });
}); };
var deserializeAws_queryDeleteReceiptFilterCommandError = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
    var parsedOutput, _a, response, errorCode, parsedBody, message;
    var _b;
    return __generator(this, function (_c) {
        switch (_c.label) {
            case 0:
                _a = [__assign({}, output)];
                _b = {};
                return [4 /*yield*/, parseBody(output.body, context)];
            case 1:
                parsedOutput = __assign.apply(void 0, _a.concat([(_b.body = _c.sent(), _b)]));
                errorCode = "UnknownError";
                errorCode = loadQueryErrorCode(output, parsedOutput.body);
                switch (errorCode) {
                    default:
                        parsedBody = parsedOutput.body;
                        errorCode = parsedBody.Error.code || parsedBody.Error.Code || errorCode;
                        response = __assign(__assign({}, parsedBody.Error), { name: "" + errorCode, message: parsedBody.Error.message || parsedBody.Error.Message || errorCode, $fault: "client", $metadata: deserializeMetadata(output) });
                }
                message = response.message || response.Message || errorCode;
                response.message = message;
                delete response.Message;
                return [2 /*return*/, Promise.reject(Object.assign(new Error(message), response))];
        }
    });
}); };
export var deserializeAws_queryDeleteReceiptRuleCommand = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
    var data, contents, response;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                if (output.statusCode >= 300) {
                    return [2 /*return*/, deserializeAws_queryDeleteReceiptRuleCommandError(output, context)];
                }
                return [4 /*yield*/, parseBody(output.body, context)];
            case 1:
                data = _a.sent();
                contents = {};
                contents = deserializeAws_queryDeleteReceiptRuleResponse(data.DeleteReceiptRuleResult, context);
                response = __assign({ $metadata: deserializeMetadata(output) }, contents);
                return [2 /*return*/, Promise.resolve(response)];
        }
    });
}); };
var deserializeAws_queryDeleteReceiptRuleCommandError = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
    var parsedOutput, _a, response, errorCode, _b, _c, parsedBody, message;
    var _d;
    return __generator(this, function (_e) {
        switch (_e.label) {
            case 0:
                _a = [__assign({}, output)];
                _d = {};
                return [4 /*yield*/, parseBody(output.body, context)];
            case 1:
                parsedOutput = __assign.apply(void 0, _a.concat([(_d.body = _e.sent(), _d)]));
                errorCode = "UnknownError";
                errorCode = loadQueryErrorCode(output, parsedOutput.body);
                _b = errorCode;
                switch (_b) {
                    case "RuleSetDoesNotExistException": return [3 /*break*/, 2];
                    case "com.amazonaws.ses#RuleSetDoesNotExistException": return [3 /*break*/, 2];
                }
                return [3 /*break*/, 4];
            case 2:
                _c = [{}];
                return [4 /*yield*/, deserializeAws_queryRuleSetDoesNotExistExceptionResponse(parsedOutput, context)];
            case 3:
                response = __assign.apply(void 0, [__assign.apply(void 0, _c.concat([(_e.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 5];
            case 4:
                parsedBody = parsedOutput.body;
                errorCode = parsedBody.Error.code || parsedBody.Error.Code || errorCode;
                response = __assign(__assign({}, parsedBody.Error), { name: "" + errorCode, message: parsedBody.Error.message || parsedBody.Error.Message || errorCode, $fault: "client", $metadata: deserializeMetadata(output) });
                _e.label = 5;
            case 5:
                message = response.message || response.Message || errorCode;
                response.message = message;
                delete response.Message;
                return [2 /*return*/, Promise.reject(Object.assign(new Error(message), response))];
        }
    });
}); };
export var deserializeAws_queryDeleteReceiptRuleSetCommand = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
    var data, contents, response;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                if (output.statusCode >= 300) {
                    return [2 /*return*/, deserializeAws_queryDeleteReceiptRuleSetCommandError(output, context)];
                }
                return [4 /*yield*/, parseBody(output.body, context)];
            case 1:
                data = _a.sent();
                contents = {};
                contents = deserializeAws_queryDeleteReceiptRuleSetResponse(data.DeleteReceiptRuleSetResult, context);
                response = __assign({ $metadata: deserializeMetadata(output) }, contents);
                return [2 /*return*/, Promise.resolve(response)];
        }
    });
}); };
var deserializeAws_queryDeleteReceiptRuleSetCommandError = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
    var parsedOutput, _a, response, errorCode, _b, _c, parsedBody, message;
    var _d;
    return __generator(this, function (_e) {
        switch (_e.label) {
            case 0:
                _a = [__assign({}, output)];
                _d = {};
                return [4 /*yield*/, parseBody(output.body, context)];
            case 1:
                parsedOutput = __assign.apply(void 0, _a.concat([(_d.body = _e.sent(), _d)]));
                errorCode = "UnknownError";
                errorCode = loadQueryErrorCode(output, parsedOutput.body);
                _b = errorCode;
                switch (_b) {
                    case "CannotDeleteException": return [3 /*break*/, 2];
                    case "com.amazonaws.ses#CannotDeleteException": return [3 /*break*/, 2];
                }
                return [3 /*break*/, 4];
            case 2:
                _c = [{}];
                return [4 /*yield*/, deserializeAws_queryCannotDeleteExceptionResponse(parsedOutput, context)];
            case 3:
                response = __assign.apply(void 0, [__assign.apply(void 0, _c.concat([(_e.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 5];
            case 4:
                parsedBody = parsedOutput.body;
                errorCode = parsedBody.Error.code || parsedBody.Error.Code || errorCode;
                response = __assign(__assign({}, parsedBody.Error), { name: "" + errorCode, message: parsedBody.Error.message || parsedBody.Error.Message || errorCode, $fault: "client", $metadata: deserializeMetadata(output) });
                _e.label = 5;
            case 5:
                message = response.message || response.Message || errorCode;
                response.message = message;
                delete response.Message;
                return [2 /*return*/, Promise.reject(Object.assign(new Error(message), response))];
        }
    });
}); };
export var deserializeAws_queryDeleteTemplateCommand = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
    var data, contents, response;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                if (output.statusCode >= 300) {
                    return [2 /*return*/, deserializeAws_queryDeleteTemplateCommandError(output, context)];
                }
                return [4 /*yield*/, parseBody(output.body, context)];
            case 1:
                data = _a.sent();
                contents = {};
                contents = deserializeAws_queryDeleteTemplateResponse(data.DeleteTemplateResult, context);
                response = __assign({ $metadata: deserializeMetadata(output) }, contents);
                return [2 /*return*/, Promise.resolve(response)];
        }
    });
}); };
var deserializeAws_queryDeleteTemplateCommandError = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
    var parsedOutput, _a, response, errorCode, parsedBody, message;
    var _b;
    return __generator(this, function (_c) {
        switch (_c.label) {
            case 0:
                _a = [__assign({}, output)];
                _b = {};
                return [4 /*yield*/, parseBody(output.body, context)];
            case 1:
                parsedOutput = __assign.apply(void 0, _a.concat([(_b.body = _c.sent(), _b)]));
                errorCode = "UnknownError";
                errorCode = loadQueryErrorCode(output, parsedOutput.body);
                switch (errorCode) {
                    default:
                        parsedBody = parsedOutput.body;
                        errorCode = parsedBody.Error.code || parsedBody.Error.Code || errorCode;
                        response = __assign(__assign({}, parsedBody.Error), { name: "" + errorCode, message: parsedBody.Error.message || parsedBody.Error.Message || errorCode, $fault: "client", $metadata: deserializeMetadata(output) });
                }
                message = response.message || response.Message || errorCode;
                response.message = message;
                delete response.Message;
                return [2 /*return*/, Promise.reject(Object.assign(new Error(message), response))];
        }
    });
}); };
export var deserializeAws_queryDeleteVerifiedEmailAddressCommand = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
    var response;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                if (output.statusCode >= 300) {
                    return [2 /*return*/, deserializeAws_queryDeleteVerifiedEmailAddressCommandError(output, context)];
                }
                return [4 /*yield*/, collectBody(output.body, context)];
            case 1:
                _a.sent();
                response = {
                    $metadata: deserializeMetadata(output),
                };
                return [2 /*return*/, Promise.resolve(response)];
        }
    });
}); };
var deserializeAws_queryDeleteVerifiedEmailAddressCommandError = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
    var parsedOutput, _a, response, errorCode, parsedBody, message;
    var _b;
    return __generator(this, function (_c) {
        switch (_c.label) {
            case 0:
                _a = [__assign({}, output)];
                _b = {};
                return [4 /*yield*/, parseBody(output.body, context)];
            case 1:
                parsedOutput = __assign.apply(void 0, _a.concat([(_b.body = _c.sent(), _b)]));
                errorCode = "UnknownError";
                errorCode = loadQueryErrorCode(output, parsedOutput.body);
                switch (errorCode) {
                    default:
                        parsedBody = parsedOutput.body;
                        errorCode = parsedBody.Error.code || parsedBody.Error.Code || errorCode;
                        response = __assign(__assign({}, parsedBody.Error), { name: "" + errorCode, message: parsedBody.Error.message || parsedBody.Error.Message || errorCode, $fault: "client", $metadata: deserializeMetadata(output) });
                }
                message = response.message || response.Message || errorCode;
                response.message = message;
                delete response.Message;
                return [2 /*return*/, Promise.reject(Object.assign(new Error(message), response))];
        }
    });
}); };
export var deserializeAws_queryDescribeActiveReceiptRuleSetCommand = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
    var data, contents, response;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                if (output.statusCode >= 300) {
                    return [2 /*return*/, deserializeAws_queryDescribeActiveReceiptRuleSetCommandError(output, context)];
                }
                return [4 /*yield*/, parseBody(output.body, context)];
            case 1:
                data = _a.sent();
                contents = {};
                contents = deserializeAws_queryDescribeActiveReceiptRuleSetResponse(data.DescribeActiveReceiptRuleSetResult, context);
                response = __assign({ $metadata: deserializeMetadata(output) }, contents);
                return [2 /*return*/, Promise.resolve(response)];
        }
    });
}); };
var deserializeAws_queryDescribeActiveReceiptRuleSetCommandError = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
    var parsedOutput, _a, response, errorCode, parsedBody, message;
    var _b;
    return __generator(this, function (_c) {
        switch (_c.label) {
            case 0:
                _a = [__assign({}, output)];
                _b = {};
                return [4 /*yield*/, parseBody(output.body, context)];
            case 1:
                parsedOutput = __assign.apply(void 0, _a.concat([(_b.body = _c.sent(), _b)]));
                errorCode = "UnknownError";
                errorCode = loadQueryErrorCode(output, parsedOutput.body);
                switch (errorCode) {
                    default:
                        parsedBody = parsedOutput.body;
                        errorCode = parsedBody.Error.code || parsedBody.Error.Code || errorCode;
                        response = __assign(__assign({}, parsedBody.Error), { name: "" + errorCode, message: parsedBody.Error.message || parsedBody.Error.Message || errorCode, $fault: "client", $metadata: deserializeMetadata(output) });
                }
                message = response.message || response.Message || errorCode;
                response.message = message;
                delete response.Message;
                return [2 /*return*/, Promise.reject(Object.assign(new Error(message), response))];
        }
    });
}); };
export var deserializeAws_queryDescribeConfigurationSetCommand = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
    var data, contents, response;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                if (output.statusCode >= 300) {
                    return [2 /*return*/, deserializeAws_queryDescribeConfigurationSetCommandError(output, context)];
                }
                return [4 /*yield*/, parseBody(output.body, context)];
            case 1:
                data = _a.sent();
                contents = {};
                contents = deserializeAws_queryDescribeConfigurationSetResponse(data.DescribeConfigurationSetResult, context);
                response = __assign({ $metadata: deserializeMetadata(output) }, contents);
                return [2 /*return*/, Promise.resolve(response)];
        }
    });
}); };
var deserializeAws_queryDescribeConfigurationSetCommandError = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
    var parsedOutput, _a, response, errorCode, _b, _c, parsedBody, message;
    var _d;
    return __generator(this, function (_e) {
        switch (_e.label) {
            case 0:
                _a = [__assign({}, output)];
                _d = {};
                return [4 /*yield*/, parseBody(output.body, context)];
            case 1:
                parsedOutput = __assign.apply(void 0, _a.concat([(_d.body = _e.sent(), _d)]));
                errorCode = "UnknownError";
                errorCode = loadQueryErrorCode(output, parsedOutput.body);
                _b = errorCode;
                switch (_b) {
                    case "ConfigurationSetDoesNotExistException": return [3 /*break*/, 2];
                    case "com.amazonaws.ses#ConfigurationSetDoesNotExistException": return [3 /*break*/, 2];
                }
                return [3 /*break*/, 4];
            case 2:
                _c = [{}];
                return [4 /*yield*/, deserializeAws_queryConfigurationSetDoesNotExistExceptionResponse(parsedOutput, context)];
            case 3:
                response = __assign.apply(void 0, [__assign.apply(void 0, _c.concat([(_e.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 5];
            case 4:
                parsedBody = parsedOutput.body;
                errorCode = parsedBody.Error.code || parsedBody.Error.Code || errorCode;
                response = __assign(__assign({}, parsedBody.Error), { name: "" + errorCode, message: parsedBody.Error.message || parsedBody.Error.Message || errorCode, $fault: "client", $metadata: deserializeMetadata(output) });
                _e.label = 5;
            case 5:
                message = response.message || response.Message || errorCode;
                response.message = message;
                delete response.Message;
                return [2 /*return*/, Promise.reject(Object.assign(new Error(message), response))];
        }
    });
}); };
export var deserializeAws_queryDescribeReceiptRuleCommand = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
    var data, contents, response;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                if (output.statusCode >= 300) {
                    return [2 /*return*/, deserializeAws_queryDescribeReceiptRuleCommandError(output, context)];
                }
                return [4 /*yield*/, parseBody(output.body, context)];
            case 1:
                data = _a.sent();
                contents = {};
                contents = deserializeAws_queryDescribeReceiptRuleResponse(data.DescribeReceiptRuleResult, context);
                response = __assign({ $metadata: deserializeMetadata(output) }, contents);
                return [2 /*return*/, Promise.resolve(response)];
        }
    });
}); };
var deserializeAws_queryDescribeReceiptRuleCommandError = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
    var parsedOutput, _a, response, errorCode, _b, _c, _d, parsedBody, message;
    var _e;
    return __generator(this, function (_f) {
        switch (_f.label) {
            case 0:
                _a = [__assign({}, output)];
                _e = {};
                return [4 /*yield*/, parseBody(output.body, context)];
            case 1:
                parsedOutput = __assign.apply(void 0, _a.concat([(_e.body = _f.sent(), _e)]));
                errorCode = "UnknownError";
                errorCode = loadQueryErrorCode(output, parsedOutput.body);
                _b = errorCode;
                switch (_b) {
                    case "RuleDoesNotExistException": return [3 /*break*/, 2];
                    case "com.amazonaws.ses#RuleDoesNotExistException": return [3 /*break*/, 2];
                    case "RuleSetDoesNotExistException": return [3 /*break*/, 4];
                    case "com.amazonaws.ses#RuleSetDoesNotExistException": return [3 /*break*/, 4];
                }
                return [3 /*break*/, 6];
            case 2:
                _c = [{}];
                return [4 /*yield*/, deserializeAws_queryRuleDoesNotExistExceptionResponse(parsedOutput, context)];
            case 3:
                response = __assign.apply(void 0, [__assign.apply(void 0, _c.concat([(_f.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 7];
            case 4:
                _d = [{}];
                return [4 /*yield*/, deserializeAws_queryRuleSetDoesNotExistExceptionResponse(parsedOutput, context)];
            case 5:
                response = __assign.apply(void 0, [__assign.apply(void 0, _d.concat([(_f.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 7];
            case 6:
                parsedBody = parsedOutput.body;
                errorCode = parsedBody.Error.code || parsedBody.Error.Code || errorCode;
                response = __assign(__assign({}, parsedBody.Error), { name: "" + errorCode, message: parsedBody.Error.message || parsedBody.Error.Message || errorCode, $fault: "client", $metadata: deserializeMetadata(output) });
                _f.label = 7;
            case 7:
                message = response.message || response.Message || errorCode;
                response.message = message;
                delete response.Message;
                return [2 /*return*/, Promise.reject(Object.assign(new Error(message), response))];
        }
    });
}); };
export var deserializeAws_queryDescribeReceiptRuleSetCommand = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
    var data, contents, response;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                if (output.statusCode >= 300) {
                    return [2 /*return*/, deserializeAws_queryDescribeReceiptRuleSetCommandError(output, context)];
                }
                return [4 /*yield*/, parseBody(output.body, context)];
            case 1:
                data = _a.sent();
                contents = {};
                contents = deserializeAws_queryDescribeReceiptRuleSetResponse(data.DescribeReceiptRuleSetResult, context);
                response = __assign({ $metadata: deserializeMetadata(output) }, contents);
                return [2 /*return*/, Promise.resolve(response)];
        }
    });
}); };
var deserializeAws_queryDescribeReceiptRuleSetCommandError = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
    var parsedOutput, _a, response, errorCode, _b, _c, parsedBody, message;
    var _d;
    return __generator(this, function (_e) {
        switch (_e.label) {
            case 0:
                _a = [__assign({}, output)];
                _d = {};
                return [4 /*yield*/, parseBody(output.body, context)];
            case 1:
                parsedOutput = __assign.apply(void 0, _a.concat([(_d.body = _e.sent(), _d)]));
                errorCode = "UnknownError";
                errorCode = loadQueryErrorCode(output, parsedOutput.body);
                _b = errorCode;
                switch (_b) {
                    case "RuleSetDoesNotExistException": return [3 /*break*/, 2];
                    case "com.amazonaws.ses#RuleSetDoesNotExistException": return [3 /*break*/, 2];
                }
                return [3 /*break*/, 4];
            case 2:
                _c = [{}];
                return [4 /*yield*/, deserializeAws_queryRuleSetDoesNotExistExceptionResponse(parsedOutput, context)];
            case 3:
                response = __assign.apply(void 0, [__assign.apply(void 0, _c.concat([(_e.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 5];
            case 4:
                parsedBody = parsedOutput.body;
                errorCode = parsedBody.Error.code || parsedBody.Error.Code || errorCode;
                response = __assign(__assign({}, parsedBody.Error), { name: "" + errorCode, message: parsedBody.Error.message || parsedBody.Error.Message || errorCode, $fault: "client", $metadata: deserializeMetadata(output) });
                _e.label = 5;
            case 5:
                message = response.message || response.Message || errorCode;
                response.message = message;
                delete response.Message;
                return [2 /*return*/, Promise.reject(Object.assign(new Error(message), response))];
        }
    });
}); };
export var deserializeAws_queryGetAccountSendingEnabledCommand = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
    var data, contents, response;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                if (output.statusCode >= 300) {
                    return [2 /*return*/, deserializeAws_queryGetAccountSendingEnabledCommandError(output, context)];
                }
                return [4 /*yield*/, parseBody(output.body, context)];
            case 1:
                data = _a.sent();
                contents = {};
                contents = deserializeAws_queryGetAccountSendingEnabledResponse(data.GetAccountSendingEnabledResult, context);
                response = __assign({ $metadata: deserializeMetadata(output) }, contents);
                return [2 /*return*/, Promise.resolve(response)];
        }
    });
}); };
var deserializeAws_queryGetAccountSendingEnabledCommandError = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
    var parsedOutput, _a, response, errorCode, parsedBody, message;
    var _b;
    return __generator(this, function (_c) {
        switch (_c.label) {
            case 0:
                _a = [__assign({}, output)];
                _b = {};
                return [4 /*yield*/, parseBody(output.body, context)];
            case 1:
                parsedOutput = __assign.apply(void 0, _a.concat([(_b.body = _c.sent(), _b)]));
                errorCode = "UnknownError";
                errorCode = loadQueryErrorCode(output, parsedOutput.body);
                switch (errorCode) {
                    default:
                        parsedBody = parsedOutput.body;
                        errorCode = parsedBody.Error.code || parsedBody.Error.Code || errorCode;
                        response = __assign(__assign({}, parsedBody.Error), { name: "" + errorCode, message: parsedBody.Error.message || parsedBody.Error.Message || errorCode, $fault: "client", $metadata: deserializeMetadata(output) });
                }
                message = response.message || response.Message || errorCode;
                response.message = message;
                delete response.Message;
                return [2 /*return*/, Promise.reject(Object.assign(new Error(message), response))];
        }
    });
}); };
export var deserializeAws_queryGetCustomVerificationEmailTemplateCommand = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
    var data, contents, response;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                if (output.statusCode >= 300) {
                    return [2 /*return*/, deserializeAws_queryGetCustomVerificationEmailTemplateCommandError(output, context)];
                }
                return [4 /*yield*/, parseBody(output.body, context)];
            case 1:
                data = _a.sent();
                contents = {};
                contents = deserializeAws_queryGetCustomVerificationEmailTemplateResponse(data.GetCustomVerificationEmailTemplateResult, context);
                response = __assign({ $metadata: deserializeMetadata(output) }, contents);
                return [2 /*return*/, Promise.resolve(response)];
        }
    });
}); };
var deserializeAws_queryGetCustomVerificationEmailTemplateCommandError = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
    var parsedOutput, _a, response, errorCode, _b, _c, parsedBody, message;
    var _d;
    return __generator(this, function (_e) {
        switch (_e.label) {
            case 0:
                _a = [__assign({}, output)];
                _d = {};
                return [4 /*yield*/, parseBody(output.body, context)];
            case 1:
                parsedOutput = __assign.apply(void 0, _a.concat([(_d.body = _e.sent(), _d)]));
                errorCode = "UnknownError";
                errorCode = loadQueryErrorCode(output, parsedOutput.body);
                _b = errorCode;
                switch (_b) {
                    case "CustomVerificationEmailTemplateDoesNotExistException": return [3 /*break*/, 2];
                    case "com.amazonaws.ses#CustomVerificationEmailTemplateDoesNotExistException": return [3 /*break*/, 2];
                }
                return [3 /*break*/, 4];
            case 2:
                _c = [{}];
                return [4 /*yield*/, deserializeAws_queryCustomVerificationEmailTemplateDoesNotExistExceptionResponse(parsedOutput, context)];
            case 3:
                response = __assign.apply(void 0, [__assign.apply(void 0, _c.concat([(_e.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 5];
            case 4:
                parsedBody = parsedOutput.body;
                errorCode = parsedBody.Error.code || parsedBody.Error.Code || errorCode;
                response = __assign(__assign({}, parsedBody.Error), { name: "" + errorCode, message: parsedBody.Error.message || parsedBody.Error.Message || errorCode, $fault: "client", $metadata: deserializeMetadata(output) });
                _e.label = 5;
            case 5:
                message = response.message || response.Message || errorCode;
                response.message = message;
                delete response.Message;
                return [2 /*return*/, Promise.reject(Object.assign(new Error(message), response))];
        }
    });
}); };
export var deserializeAws_queryGetIdentityDkimAttributesCommand = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
    var data, contents, response;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                if (output.statusCode >= 300) {
                    return [2 /*return*/, deserializeAws_queryGetIdentityDkimAttributesCommandError(output, context)];
                }
                return [4 /*yield*/, parseBody(output.body, context)];
            case 1:
                data = _a.sent();
                contents = {};
                contents = deserializeAws_queryGetIdentityDkimAttributesResponse(data.GetIdentityDkimAttributesResult, context);
                response = __assign({ $metadata: deserializeMetadata(output) }, contents);
                return [2 /*return*/, Promise.resolve(response)];
        }
    });
}); };
var deserializeAws_queryGetIdentityDkimAttributesCommandError = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
    var parsedOutput, _a, response, errorCode, parsedBody, message;
    var _b;
    return __generator(this, function (_c) {
        switch (_c.label) {
            case 0:
                _a = [__assign({}, output)];
                _b = {};
                return [4 /*yield*/, parseBody(output.body, context)];
            case 1:
                parsedOutput = __assign.apply(void 0, _a.concat([(_b.body = _c.sent(), _b)]));
                errorCode = "UnknownError";
                errorCode = loadQueryErrorCode(output, parsedOutput.body);
                switch (errorCode) {
                    default:
                        parsedBody = parsedOutput.body;
                        errorCode = parsedBody.Error.code || parsedBody.Error.Code || errorCode;
                        response = __assign(__assign({}, parsedBody.Error), { name: "" + errorCode, message: parsedBody.Error.message || parsedBody.Error.Message || errorCode, $fault: "client", $metadata: deserializeMetadata(output) });
                }
                message = response.message || response.Message || errorCode;
                response.message = message;
                delete response.Message;
                return [2 /*return*/, Promise.reject(Object.assign(new Error(message), response))];
        }
    });
}); };
export var deserializeAws_queryGetIdentityMailFromDomainAttributesCommand = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
    var data, contents, response;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                if (output.statusCode >= 300) {
                    return [2 /*return*/, deserializeAws_queryGetIdentityMailFromDomainAttributesCommandError(output, context)];
                }
                return [4 /*yield*/, parseBody(output.body, context)];
            case 1:
                data = _a.sent();
                contents = {};
                contents = deserializeAws_queryGetIdentityMailFromDomainAttributesResponse(data.GetIdentityMailFromDomainAttributesResult, context);
                response = __assign({ $metadata: deserializeMetadata(output) }, contents);
                return [2 /*return*/, Promise.resolve(response)];
        }
    });
}); };
var deserializeAws_queryGetIdentityMailFromDomainAttributesCommandError = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
    var parsedOutput, _a, response, errorCode, parsedBody, message;
    var _b;
    return __generator(this, function (_c) {
        switch (_c.label) {
            case 0:
                _a = [__assign({}, output)];
                _b = {};
                return [4 /*yield*/, parseBody(output.body, context)];
            case 1:
                parsedOutput = __assign.apply(void 0, _a.concat([(_b.body = _c.sent(), _b)]));
                errorCode = "UnknownError";
                errorCode = loadQueryErrorCode(output, parsedOutput.body);
                switch (errorCode) {
                    default:
                        parsedBody = parsedOutput.body;
                        errorCode = parsedBody.Error.code || parsedBody.Error.Code || errorCode;
                        response = __assign(__assign({}, parsedBody.Error), { name: "" + errorCode, message: parsedBody.Error.message || parsedBody.Error.Message || errorCode, $fault: "client", $metadata: deserializeMetadata(output) });
                }
                message = response.message || response.Message || errorCode;
                response.message = message;
                delete response.Message;
                return [2 /*return*/, Promise.reject(Object.assign(new Error(message), response))];
        }
    });
}); };
export var deserializeAws_queryGetIdentityNotificationAttributesCommand = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
    var data, contents, response;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                if (output.statusCode >= 300) {
                    return [2 /*return*/, deserializeAws_queryGetIdentityNotificationAttributesCommandError(output, context)];
                }
                return [4 /*yield*/, parseBody(output.body, context)];
            case 1:
                data = _a.sent();
                contents = {};
                contents = deserializeAws_queryGetIdentityNotificationAttributesResponse(data.GetIdentityNotificationAttributesResult, context);
                response = __assign({ $metadata: deserializeMetadata(output) }, contents);
                return [2 /*return*/, Promise.resolve(response)];
        }
    });
}); };
var deserializeAws_queryGetIdentityNotificationAttributesCommandError = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
    var parsedOutput, _a, response, errorCode, parsedBody, message;
    var _b;
    return __generator(this, function (_c) {
        switch (_c.label) {
            case 0:
                _a = [__assign({}, output)];
                _b = {};
                return [4 /*yield*/, parseBody(output.body, context)];
            case 1:
                parsedOutput = __assign.apply(void 0, _a.concat([(_b.body = _c.sent(), _b)]));
                errorCode = "UnknownError";
                errorCode = loadQueryErrorCode(output, parsedOutput.body);
                switch (errorCode) {
                    default:
                        parsedBody = parsedOutput.body;
                        errorCode = parsedBody.Error.code || parsedBody.Error.Code || errorCode;
                        response = __assign(__assign({}, parsedBody.Error), { name: "" + errorCode, message: parsedBody.Error.message || parsedBody.Error.Message || errorCode, $fault: "client", $metadata: deserializeMetadata(output) });
                }
                message = response.message || response.Message || errorCode;
                response.message = message;
                delete response.Message;
                return [2 /*return*/, Promise.reject(Object.assign(new Error(message), response))];
        }
    });
}); };
export var deserializeAws_queryGetIdentityPoliciesCommand = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
    var data, contents, response;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                if (output.statusCode >= 300) {
                    return [2 /*return*/, deserializeAws_queryGetIdentityPoliciesCommandError(output, context)];
                }
                return [4 /*yield*/, parseBody(output.body, context)];
            case 1:
                data = _a.sent();
                contents = {};
                contents = deserializeAws_queryGetIdentityPoliciesResponse(data.GetIdentityPoliciesResult, context);
                response = __assign({ $metadata: deserializeMetadata(output) }, contents);
                return [2 /*return*/, Promise.resolve(response)];
        }
    });
}); };
var deserializeAws_queryGetIdentityPoliciesCommandError = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
    var parsedOutput, _a, response, errorCode, parsedBody, message;
    var _b;
    return __generator(this, function (_c) {
        switch (_c.label) {
            case 0:
                _a = [__assign({}, output)];
                _b = {};
                return [4 /*yield*/, parseBody(output.body, context)];
            case 1:
                parsedOutput = __assign.apply(void 0, _a.concat([(_b.body = _c.sent(), _b)]));
                errorCode = "UnknownError";
                errorCode = loadQueryErrorCode(output, parsedOutput.body);
                switch (errorCode) {
                    default:
                        parsedBody = parsedOutput.body;
                        errorCode = parsedBody.Error.code || parsedBody.Error.Code || errorCode;
                        response = __assign(__assign({}, parsedBody.Error), { name: "" + errorCode, message: parsedBody.Error.message || parsedBody.Error.Message || errorCode, $fault: "client", $metadata: deserializeMetadata(output) });
                }
                message = response.message || response.Message || errorCode;
                response.message = message;
                delete response.Message;
                return [2 /*return*/, Promise.reject(Object.assign(new Error(message), response))];
        }
    });
}); };
export var deserializeAws_queryGetIdentityVerificationAttributesCommand = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
    var data, contents, response;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                if (output.statusCode >= 300) {
                    return [2 /*return*/, deserializeAws_queryGetIdentityVerificationAttributesCommandError(output, context)];
                }
                return [4 /*yield*/, parseBody(output.body, context)];
            case 1:
                data = _a.sent();
                contents = {};
                contents = deserializeAws_queryGetIdentityVerificationAttributesResponse(data.GetIdentityVerificationAttributesResult, context);
                response = __assign({ $metadata: deserializeMetadata(output) }, contents);
                return [2 /*return*/, Promise.resolve(response)];
        }
    });
}); };
var deserializeAws_queryGetIdentityVerificationAttributesCommandError = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
    var parsedOutput, _a, response, errorCode, parsedBody, message;
    var _b;
    return __generator(this, function (_c) {
        switch (_c.label) {
            case 0:
                _a = [__assign({}, output)];
                _b = {};
                return [4 /*yield*/, parseBody(output.body, context)];
            case 1:
                parsedOutput = __assign.apply(void 0, _a.concat([(_b.body = _c.sent(), _b)]));
                errorCode = "UnknownError";
                errorCode = loadQueryErrorCode(output, parsedOutput.body);
                switch (errorCode) {
                    default:
                        parsedBody = parsedOutput.body;
                        errorCode = parsedBody.Error.code || parsedBody.Error.Code || errorCode;
                        response = __assign(__assign({}, parsedBody.Error), { name: "" + errorCode, message: parsedBody.Error.message || parsedBody.Error.Message || errorCode, $fault: "client", $metadata: deserializeMetadata(output) });
                }
                message = response.message || response.Message || errorCode;
                response.message = message;
                delete response.Message;
                return [2 /*return*/, Promise.reject(Object.assign(new Error(message), response))];
        }
    });
}); };
export var deserializeAws_queryGetSendQuotaCommand = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
    var data, contents, response;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                if (output.statusCode >= 300) {
                    return [2 /*return*/, deserializeAws_queryGetSendQuotaCommandError(output, context)];
                }
                return [4 /*yield*/, parseBody(output.body, context)];
            case 1:
                data = _a.sent();
                contents = {};
                contents = deserializeAws_queryGetSendQuotaResponse(data.GetSendQuotaResult, context);
                response = __assign({ $metadata: deserializeMetadata(output) }, contents);
                return [2 /*return*/, Promise.resolve(response)];
        }
    });
}); };
var deserializeAws_queryGetSendQuotaCommandError = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
    var parsedOutput, _a, response, errorCode, parsedBody, message;
    var _b;
    return __generator(this, function (_c) {
        switch (_c.label) {
            case 0:
                _a = [__assign({}, output)];
                _b = {};
                return [4 /*yield*/, parseBody(output.body, context)];
            case 1:
                parsedOutput = __assign.apply(void 0, _a.concat([(_b.body = _c.sent(), _b)]));
                errorCode = "UnknownError";
                errorCode = loadQueryErrorCode(output, parsedOutput.body);
                switch (errorCode) {
                    default:
                        parsedBody = parsedOutput.body;
                        errorCode = parsedBody.Error.code || parsedBody.Error.Code || errorCode;
                        response = __assign(__assign({}, parsedBody.Error), { name: "" + errorCode, message: parsedBody.Error.message || parsedBody.Error.Message || errorCode, $fault: "client", $metadata: deserializeMetadata(output) });
                }
                message = response.message || response.Message || errorCode;
                response.message = message;
                delete response.Message;
                return [2 /*return*/, Promise.reject(Object.assign(new Error(message), response))];
        }
    });
}); };
export var deserializeAws_queryGetSendStatisticsCommand = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
    var data, contents, response;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                if (output.statusCode >= 300) {
                    return [2 /*return*/, deserializeAws_queryGetSendStatisticsCommandError(output, context)];
                }
                return [4 /*yield*/, parseBody(output.body, context)];
            case 1:
                data = _a.sent();
                contents = {};
                contents = deserializeAws_queryGetSendStatisticsResponse(data.GetSendStatisticsResult, context);
                response = __assign({ $metadata: deserializeMetadata(output) }, contents);
                return [2 /*return*/, Promise.resolve(response)];
        }
    });
}); };
var deserializeAws_queryGetSendStatisticsCommandError = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
    var parsedOutput, _a, response, errorCode, parsedBody, message;
    var _b;
    return __generator(this, function (_c) {
        switch (_c.label) {
            case 0:
                _a = [__assign({}, output)];
                _b = {};
                return [4 /*yield*/, parseBody(output.body, context)];
            case 1:
                parsedOutput = __assign.apply(void 0, _a.concat([(_b.body = _c.sent(), _b)]));
                errorCode = "UnknownError";
                errorCode = loadQueryErrorCode(output, parsedOutput.body);
                switch (errorCode) {
                    default:
                        parsedBody = parsedOutput.body;
                        errorCode = parsedBody.Error.code || parsedBody.Error.Code || errorCode;
                        response = __assign(__assign({}, parsedBody.Error), { name: "" + errorCode, message: parsedBody.Error.message || parsedBody.Error.Message || errorCode, $fault: "client", $metadata: deserializeMetadata(output) });
                }
                message = response.message || response.Message || errorCode;
                response.message = message;
                delete response.Message;
                return [2 /*return*/, Promise.reject(Object.assign(new Error(message), response))];
        }
    });
}); };
export var deserializeAws_queryGetTemplateCommand = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
    var data, contents, response;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                if (output.statusCode >= 300) {
                    return [2 /*return*/, deserializeAws_queryGetTemplateCommandError(output, context)];
                }
                return [4 /*yield*/, parseBody(output.body, context)];
            case 1:
                data = _a.sent();
                contents = {};
                contents = deserializeAws_queryGetTemplateResponse(data.GetTemplateResult, context);
                response = __assign({ $metadata: deserializeMetadata(output) }, contents);
                return [2 /*return*/, Promise.resolve(response)];
        }
    });
}); };
var deserializeAws_queryGetTemplateCommandError = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
    var parsedOutput, _a, response, errorCode, _b, _c, parsedBody, message;
    var _d;
    return __generator(this, function (_e) {
        switch (_e.label) {
            case 0:
                _a = [__assign({}, output)];
                _d = {};
                return [4 /*yield*/, parseBody(output.body, context)];
            case 1:
                parsedOutput = __assign.apply(void 0, _a.concat([(_d.body = _e.sent(), _d)]));
                errorCode = "UnknownError";
                errorCode = loadQueryErrorCode(output, parsedOutput.body);
                _b = errorCode;
                switch (_b) {
                    case "TemplateDoesNotExistException": return [3 /*break*/, 2];
                    case "com.amazonaws.ses#TemplateDoesNotExistException": return [3 /*break*/, 2];
                }
                return [3 /*break*/, 4];
            case 2:
                _c = [{}];
                return [4 /*yield*/, deserializeAws_queryTemplateDoesNotExistExceptionResponse(parsedOutput, context)];
            case 3:
                response = __assign.apply(void 0, [__assign.apply(void 0, _c.concat([(_e.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 5];
            case 4:
                parsedBody = parsedOutput.body;
                errorCode = parsedBody.Error.code || parsedBody.Error.Code || errorCode;
                response = __assign(__assign({}, parsedBody.Error), { name: "" + errorCode, message: parsedBody.Error.message || parsedBody.Error.Message || errorCode, $fault: "client", $metadata: deserializeMetadata(output) });
                _e.label = 5;
            case 5:
                message = response.message || response.Message || errorCode;
                response.message = message;
                delete response.Message;
                return [2 /*return*/, Promise.reject(Object.assign(new Error(message), response))];
        }
    });
}); };
export var deserializeAws_queryListConfigurationSetsCommand = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
    var data, contents, response;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                if (output.statusCode >= 300) {
                    return [2 /*return*/, deserializeAws_queryListConfigurationSetsCommandError(output, context)];
                }
                return [4 /*yield*/, parseBody(output.body, context)];
            case 1:
                data = _a.sent();
                contents = {};
                contents = deserializeAws_queryListConfigurationSetsResponse(data.ListConfigurationSetsResult, context);
                response = __assign({ $metadata: deserializeMetadata(output) }, contents);
                return [2 /*return*/, Promise.resolve(response)];
        }
    });
}); };
var deserializeAws_queryListConfigurationSetsCommandError = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
    var parsedOutput, _a, response, errorCode, parsedBody, message;
    var _b;
    return __generator(this, function (_c) {
        switch (_c.label) {
            case 0:
                _a = [__assign({}, output)];
                _b = {};
                return [4 /*yield*/, parseBody(output.body, context)];
            case 1:
                parsedOutput = __assign.apply(void 0, _a.concat([(_b.body = _c.sent(), _b)]));
                errorCode = "UnknownError";
                errorCode = loadQueryErrorCode(output, parsedOutput.body);
                switch (errorCode) {
                    default:
                        parsedBody = parsedOutput.body;
                        errorCode = parsedBody.Error.code || parsedBody.Error.Code || errorCode;
                        response = __assign(__assign({}, parsedBody.Error), { name: "" + errorCode, message: parsedBody.Error.message || parsedBody.Error.Message || errorCode, $fault: "client", $metadata: deserializeMetadata(output) });
                }
                message = response.message || response.Message || errorCode;
                response.message = message;
                delete response.Message;
                return [2 /*return*/, Promise.reject(Object.assign(new Error(message), response))];
        }
    });
}); };
export var deserializeAws_queryListCustomVerificationEmailTemplatesCommand = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
    var data, contents, response;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                if (output.statusCode >= 300) {
                    return [2 /*return*/, deserializeAws_queryListCustomVerificationEmailTemplatesCommandError(output, context)];
                }
                return [4 /*yield*/, parseBody(output.body, context)];
            case 1:
                data = _a.sent();
                contents = {};
                contents = deserializeAws_queryListCustomVerificationEmailTemplatesResponse(data.ListCustomVerificationEmailTemplatesResult, context);
                response = __assign({ $metadata: deserializeMetadata(output) }, contents);
                return [2 /*return*/, Promise.resolve(response)];
        }
    });
}); };
var deserializeAws_queryListCustomVerificationEmailTemplatesCommandError = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
    var parsedOutput, _a, response, errorCode, parsedBody, message;
    var _b;
    return __generator(this, function (_c) {
        switch (_c.label) {
            case 0:
                _a = [__assign({}, output)];
                _b = {};
                return [4 /*yield*/, parseBody(output.body, context)];
            case 1:
                parsedOutput = __assign.apply(void 0, _a.concat([(_b.body = _c.sent(), _b)]));
                errorCode = "UnknownError";
                errorCode = loadQueryErrorCode(output, parsedOutput.body);
                switch (errorCode) {
                    default:
                        parsedBody = parsedOutput.body;
                        errorCode = parsedBody.Error.code || parsedBody.Error.Code || errorCode;
                        response = __assign(__assign({}, parsedBody.Error), { name: "" + errorCode, message: parsedBody.Error.message || parsedBody.Error.Message || errorCode, $fault: "client", $metadata: deserializeMetadata(output) });
                }
                message = response.message || response.Message || errorCode;
                response.message = message;
                delete response.Message;
                return [2 /*return*/, Promise.reject(Object.assign(new Error(message), response))];
        }
    });
}); };
export var deserializeAws_queryListIdentitiesCommand = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
    var data, contents, response;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                if (output.statusCode >= 300) {
                    return [2 /*return*/, deserializeAws_queryListIdentitiesCommandError(output, context)];
                }
                return [4 /*yield*/, parseBody(output.body, context)];
            case 1:
                data = _a.sent();
                contents = {};
                contents = deserializeAws_queryListIdentitiesResponse(data.ListIdentitiesResult, context);
                response = __assign({ $metadata: deserializeMetadata(output) }, contents);
                return [2 /*return*/, Promise.resolve(response)];
        }
    });
}); };
var deserializeAws_queryListIdentitiesCommandError = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
    var parsedOutput, _a, response, errorCode, parsedBody, message;
    var _b;
    return __generator(this, function (_c) {
        switch (_c.label) {
            case 0:
                _a = [__assign({}, output)];
                _b = {};
                return [4 /*yield*/, parseBody(output.body, context)];
            case 1:
                parsedOutput = __assign.apply(void 0, _a.concat([(_b.body = _c.sent(), _b)]));
                errorCode = "UnknownError";
                errorCode = loadQueryErrorCode(output, parsedOutput.body);
                switch (errorCode) {
                    default:
                        parsedBody = parsedOutput.body;
                        errorCode = parsedBody.Error.code || parsedBody.Error.Code || errorCode;
                        response = __assign(__assign({}, parsedBody.Error), { name: "" + errorCode, message: parsedBody.Error.message || parsedBody.Error.Message || errorCode, $fault: "client", $metadata: deserializeMetadata(output) });
                }
                message = response.message || response.Message || errorCode;
                response.message = message;
                delete response.Message;
                return [2 /*return*/, Promise.reject(Object.assign(new Error(message), response))];
        }
    });
}); };
export var deserializeAws_queryListIdentityPoliciesCommand = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
    var data, contents, response;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                if (output.statusCode >= 300) {
                    return [2 /*return*/, deserializeAws_queryListIdentityPoliciesCommandError(output, context)];
                }
                return [4 /*yield*/, parseBody(output.body, context)];
            case 1:
                data = _a.sent();
                contents = {};
                contents = deserializeAws_queryListIdentityPoliciesResponse(data.ListIdentityPoliciesResult, context);
                response = __assign({ $metadata: deserializeMetadata(output) }, contents);
                return [2 /*return*/, Promise.resolve(response)];
        }
    });
}); };
var deserializeAws_queryListIdentityPoliciesCommandError = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
    var parsedOutput, _a, response, errorCode, parsedBody, message;
    var _b;
    return __generator(this, function (_c) {
        switch (_c.label) {
            case 0:
                _a = [__assign({}, output)];
                _b = {};
                return [4 /*yield*/, parseBody(output.body, context)];
            case 1:
                parsedOutput = __assign.apply(void 0, _a.concat([(_b.body = _c.sent(), _b)]));
                errorCode = "UnknownError";
                errorCode = loadQueryErrorCode(output, parsedOutput.body);
                switch (errorCode) {
                    default:
                        parsedBody = parsedOutput.body;
                        errorCode = parsedBody.Error.code || parsedBody.Error.Code || errorCode;
                        response = __assign(__assign({}, parsedBody.Error), { name: "" + errorCode, message: parsedBody.Error.message || parsedBody.Error.Message || errorCode, $fault: "client", $metadata: deserializeMetadata(output) });
                }
                message = response.message || response.Message || errorCode;
                response.message = message;
                delete response.Message;
                return [2 /*return*/, Promise.reject(Object.assign(new Error(message), response))];
        }
    });
}); };
export var deserializeAws_queryListReceiptFiltersCommand = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
    var data, contents, response;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                if (output.statusCode >= 300) {
                    return [2 /*return*/, deserializeAws_queryListReceiptFiltersCommandError(output, context)];
                }
                return [4 /*yield*/, parseBody(output.body, context)];
            case 1:
                data = _a.sent();
                contents = {};
                contents = deserializeAws_queryListReceiptFiltersResponse(data.ListReceiptFiltersResult, context);
                response = __assign({ $metadata: deserializeMetadata(output) }, contents);
                return [2 /*return*/, Promise.resolve(response)];
        }
    });
}); };
var deserializeAws_queryListReceiptFiltersCommandError = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
    var parsedOutput, _a, response, errorCode, parsedBody, message;
    var _b;
    return __generator(this, function (_c) {
        switch (_c.label) {
            case 0:
                _a = [__assign({}, output)];
                _b = {};
                return [4 /*yield*/, parseBody(output.body, context)];
            case 1:
                parsedOutput = __assign.apply(void 0, _a.concat([(_b.body = _c.sent(), _b)]));
                errorCode = "UnknownError";
                errorCode = loadQueryErrorCode(output, parsedOutput.body);
                switch (errorCode) {
                    default:
                        parsedBody = parsedOutput.body;
                        errorCode = parsedBody.Error.code || parsedBody.Error.Code || errorCode;
                        response = __assign(__assign({}, parsedBody.Error), { name: "" + errorCode, message: parsedBody.Error.message || parsedBody.Error.Message || errorCode, $fault: "client", $metadata: deserializeMetadata(output) });
                }
                message = response.message || response.Message || errorCode;
                response.message = message;
                delete response.Message;
                return [2 /*return*/, Promise.reject(Object.assign(new Error(message), response))];
        }
    });
}); };
export var deserializeAws_queryListReceiptRuleSetsCommand = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
    var data, contents, response;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                if (output.statusCode >= 300) {
                    return [2 /*return*/, deserializeAws_queryListReceiptRuleSetsCommandError(output, context)];
                }
                return [4 /*yield*/, parseBody(output.body, context)];
            case 1:
                data = _a.sent();
                contents = {};
                contents = deserializeAws_queryListReceiptRuleSetsResponse(data.ListReceiptRuleSetsResult, context);
                response = __assign({ $metadata: deserializeMetadata(output) }, contents);
                return [2 /*return*/, Promise.resolve(response)];
        }
    });
}); };
var deserializeAws_queryListReceiptRuleSetsCommandError = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
    var parsedOutput, _a, response, errorCode, parsedBody, message;
    var _b;
    return __generator(this, function (_c) {
        switch (_c.label) {
            case 0:
                _a = [__assign({}, output)];
                _b = {};
                return [4 /*yield*/, parseBody(output.body, context)];
            case 1:
                parsedOutput = __assign.apply(void 0, _a.concat([(_b.body = _c.sent(), _b)]));
                errorCode = "UnknownError";
                errorCode = loadQueryErrorCode(output, parsedOutput.body);
                switch (errorCode) {
                    default:
                        parsedBody = parsedOutput.body;
                        errorCode = parsedBody.Error.code || parsedBody.Error.Code || errorCode;
                        response = __assign(__assign({}, parsedBody.Error), { name: "" + errorCode, message: parsedBody.Error.message || parsedBody.Error.Message || errorCode, $fault: "client", $metadata: deserializeMetadata(output) });
                }
                message = response.message || response.Message || errorCode;
                response.message = message;
                delete response.Message;
                return [2 /*return*/, Promise.reject(Object.assign(new Error(message), response))];
        }
    });
}); };
export var deserializeAws_queryListTemplatesCommand = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
    var data, contents, response;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                if (output.statusCode >= 300) {
                    return [2 /*return*/, deserializeAws_queryListTemplatesCommandError(output, context)];
                }
                return [4 /*yield*/, parseBody(output.body, context)];
            case 1:
                data = _a.sent();
                contents = {};
                contents = deserializeAws_queryListTemplatesResponse(data.ListTemplatesResult, context);
                response = __assign({ $metadata: deserializeMetadata(output) }, contents);
                return [2 /*return*/, Promise.resolve(response)];
        }
    });
}); };
var deserializeAws_queryListTemplatesCommandError = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
    var parsedOutput, _a, response, errorCode, parsedBody, message;
    var _b;
    return __generator(this, function (_c) {
        switch (_c.label) {
            case 0:
                _a = [__assign({}, output)];
                _b = {};
                return [4 /*yield*/, parseBody(output.body, context)];
            case 1:
                parsedOutput = __assign.apply(void 0, _a.concat([(_b.body = _c.sent(), _b)]));
                errorCode = "UnknownError";
                errorCode = loadQueryErrorCode(output, parsedOutput.body);
                switch (errorCode) {
                    default:
                        parsedBody = parsedOutput.body;
                        errorCode = parsedBody.Error.code || parsedBody.Error.Code || errorCode;
                        response = __assign(__assign({}, parsedBody.Error), { name: "" + errorCode, message: parsedBody.Error.message || parsedBody.Error.Message || errorCode, $fault: "client", $metadata: deserializeMetadata(output) });
                }
                message = response.message || response.Message || errorCode;
                response.message = message;
                delete response.Message;
                return [2 /*return*/, Promise.reject(Object.assign(new Error(message), response))];
        }
    });
}); };
export var deserializeAws_queryListVerifiedEmailAddressesCommand = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
    var data, contents, response;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                if (output.statusCode >= 300) {
                    return [2 /*return*/, deserializeAws_queryListVerifiedEmailAddressesCommandError(output, context)];
                }
                return [4 /*yield*/, parseBody(output.body, context)];
            case 1:
                data = _a.sent();
                contents = {};
                contents = deserializeAws_queryListVerifiedEmailAddressesResponse(data.ListVerifiedEmailAddressesResult, context);
                response = __assign({ $metadata: deserializeMetadata(output) }, contents);
                return [2 /*return*/, Promise.resolve(response)];
        }
    });
}); };
var deserializeAws_queryListVerifiedEmailAddressesCommandError = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
    var parsedOutput, _a, response, errorCode, parsedBody, message;
    var _b;
    return __generator(this, function (_c) {
        switch (_c.label) {
            case 0:
                _a = [__assign({}, output)];
                _b = {};
                return [4 /*yield*/, parseBody(output.body, context)];
            case 1:
                parsedOutput = __assign.apply(void 0, _a.concat([(_b.body = _c.sent(), _b)]));
                errorCode = "UnknownError";
                errorCode = loadQueryErrorCode(output, parsedOutput.body);
                switch (errorCode) {
                    default:
                        parsedBody = parsedOutput.body;
                        errorCode = parsedBody.Error.code || parsedBody.Error.Code || errorCode;
                        response = __assign(__assign({}, parsedBody.Error), { name: "" + errorCode, message: parsedBody.Error.message || parsedBody.Error.Message || errorCode, $fault: "client", $metadata: deserializeMetadata(output) });
                }
                message = response.message || response.Message || errorCode;
                response.message = message;
                delete response.Message;
                return [2 /*return*/, Promise.reject(Object.assign(new Error(message), response))];
        }
    });
}); };
export var deserializeAws_queryPutConfigurationSetDeliveryOptionsCommand = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
    var data, contents, response;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                if (output.statusCode >= 300) {
                    return [2 /*return*/, deserializeAws_queryPutConfigurationSetDeliveryOptionsCommandError(output, context)];
                }
                return [4 /*yield*/, parseBody(output.body, context)];
            case 1:
                data = _a.sent();
                contents = {};
                contents = deserializeAws_queryPutConfigurationSetDeliveryOptionsResponse(data.PutConfigurationSetDeliveryOptionsResult, context);
                response = __assign({ $metadata: deserializeMetadata(output) }, contents);
                return [2 /*return*/, Promise.resolve(response)];
        }
    });
}); };
var deserializeAws_queryPutConfigurationSetDeliveryOptionsCommandError = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
    var parsedOutput, _a, response, errorCode, _b, _c, _d, parsedBody, message;
    var _e;
    return __generator(this, function (_f) {
        switch (_f.label) {
            case 0:
                _a = [__assign({}, output)];
                _e = {};
                return [4 /*yield*/, parseBody(output.body, context)];
            case 1:
                parsedOutput = __assign.apply(void 0, _a.concat([(_e.body = _f.sent(), _e)]));
                errorCode = "UnknownError";
                errorCode = loadQueryErrorCode(output, parsedOutput.body);
                _b = errorCode;
                switch (_b) {
                    case "ConfigurationSetDoesNotExistException": return [3 /*break*/, 2];
                    case "com.amazonaws.ses#ConfigurationSetDoesNotExistException": return [3 /*break*/, 2];
                    case "InvalidDeliveryOptionsException": return [3 /*break*/, 4];
                    case "com.amazonaws.ses#InvalidDeliveryOptionsException": return [3 /*break*/, 4];
                }
                return [3 /*break*/, 6];
            case 2:
                _c = [{}];
                return [4 /*yield*/, deserializeAws_queryConfigurationSetDoesNotExistExceptionResponse(parsedOutput, context)];
            case 3:
                response = __assign.apply(void 0, [__assign.apply(void 0, _c.concat([(_f.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 7];
            case 4:
                _d = [{}];
                return [4 /*yield*/, deserializeAws_queryInvalidDeliveryOptionsExceptionResponse(parsedOutput, context)];
            case 5:
                response = __assign.apply(void 0, [__assign.apply(void 0, _d.concat([(_f.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 7];
            case 6:
                parsedBody = parsedOutput.body;
                errorCode = parsedBody.Error.code || parsedBody.Error.Code || errorCode;
                response = __assign(__assign({}, parsedBody.Error), { name: "" + errorCode, message: parsedBody.Error.message || parsedBody.Error.Message || errorCode, $fault: "client", $metadata: deserializeMetadata(output) });
                _f.label = 7;
            case 7:
                message = response.message || response.Message || errorCode;
                response.message = message;
                delete response.Message;
                return [2 /*return*/, Promise.reject(Object.assign(new Error(message), response))];
        }
    });
}); };
export var deserializeAws_queryPutIdentityPolicyCommand = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
    var data, contents, response;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                if (output.statusCode >= 300) {
                    return [2 /*return*/, deserializeAws_queryPutIdentityPolicyCommandError(output, context)];
                }
                return [4 /*yield*/, parseBody(output.body, context)];
            case 1:
                data = _a.sent();
                contents = {};
                contents = deserializeAws_queryPutIdentityPolicyResponse(data.PutIdentityPolicyResult, context);
                response = __assign({ $metadata: deserializeMetadata(output) }, contents);
                return [2 /*return*/, Promise.resolve(response)];
        }
    });
}); };
var deserializeAws_queryPutIdentityPolicyCommandError = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
    var parsedOutput, _a, response, errorCode, _b, _c, parsedBody, message;
    var _d;
    return __generator(this, function (_e) {
        switch (_e.label) {
            case 0:
                _a = [__assign({}, output)];
                _d = {};
                return [4 /*yield*/, parseBody(output.body, context)];
            case 1:
                parsedOutput = __assign.apply(void 0, _a.concat([(_d.body = _e.sent(), _d)]));
                errorCode = "UnknownError";
                errorCode = loadQueryErrorCode(output, parsedOutput.body);
                _b = errorCode;
                switch (_b) {
                    case "InvalidPolicyException": return [3 /*break*/, 2];
                    case "com.amazonaws.ses#InvalidPolicyException": return [3 /*break*/, 2];
                }
                return [3 /*break*/, 4];
            case 2:
                _c = [{}];
                return [4 /*yield*/, deserializeAws_queryInvalidPolicyExceptionResponse(parsedOutput, context)];
            case 3:
                response = __assign.apply(void 0, [__assign.apply(void 0, _c.concat([(_e.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 5];
            case 4:
                parsedBody = parsedOutput.body;
                errorCode = parsedBody.Error.code || parsedBody.Error.Code || errorCode;
                response = __assign(__assign({}, parsedBody.Error), { name: "" + errorCode, message: parsedBody.Error.message || parsedBody.Error.Message || errorCode, $fault: "client", $metadata: deserializeMetadata(output) });
                _e.label = 5;
            case 5:
                message = response.message || response.Message || errorCode;
                response.message = message;
                delete response.Message;
                return [2 /*return*/, Promise.reject(Object.assign(new Error(message), response))];
        }
    });
}); };
export var deserializeAws_queryReorderReceiptRuleSetCommand = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
    var data, contents, response;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                if (output.statusCode >= 300) {
                    return [2 /*return*/, deserializeAws_queryReorderReceiptRuleSetCommandError(output, context)];
                }
                return [4 /*yield*/, parseBody(output.body, context)];
            case 1:
                data = _a.sent();
                contents = {};
                contents = deserializeAws_queryReorderReceiptRuleSetResponse(data.ReorderReceiptRuleSetResult, context);
                response = __assign({ $metadata: deserializeMetadata(output) }, contents);
                return [2 /*return*/, Promise.resolve(response)];
        }
    });
}); };
var deserializeAws_queryReorderReceiptRuleSetCommandError = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
    var parsedOutput, _a, response, errorCode, _b, _c, _d, parsedBody, message;
    var _e;
    return __generator(this, function (_f) {
        switch (_f.label) {
            case 0:
                _a = [__assign({}, output)];
                _e = {};
                return [4 /*yield*/, parseBody(output.body, context)];
            case 1:
                parsedOutput = __assign.apply(void 0, _a.concat([(_e.body = _f.sent(), _e)]));
                errorCode = "UnknownError";
                errorCode = loadQueryErrorCode(output, parsedOutput.body);
                _b = errorCode;
                switch (_b) {
                    case "RuleDoesNotExistException": return [3 /*break*/, 2];
                    case "com.amazonaws.ses#RuleDoesNotExistException": return [3 /*break*/, 2];
                    case "RuleSetDoesNotExistException": return [3 /*break*/, 4];
                    case "com.amazonaws.ses#RuleSetDoesNotExistException": return [3 /*break*/, 4];
                }
                return [3 /*break*/, 6];
            case 2:
                _c = [{}];
                return [4 /*yield*/, deserializeAws_queryRuleDoesNotExistExceptionResponse(parsedOutput, context)];
            case 3:
                response = __assign.apply(void 0, [__assign.apply(void 0, _c.concat([(_f.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 7];
            case 4:
                _d = [{}];
                return [4 /*yield*/, deserializeAws_queryRuleSetDoesNotExistExceptionResponse(parsedOutput, context)];
            case 5:
                response = __assign.apply(void 0, [__assign.apply(void 0, _d.concat([(_f.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 7];
            case 6:
                parsedBody = parsedOutput.body;
                errorCode = parsedBody.Error.code || parsedBody.Error.Code || errorCode;
                response = __assign(__assign({}, parsedBody.Error), { name: "" + errorCode, message: parsedBody.Error.message || parsedBody.Error.Message || errorCode, $fault: "client", $metadata: deserializeMetadata(output) });
                _f.label = 7;
            case 7:
                message = response.message || response.Message || errorCode;
                response.message = message;
                delete response.Message;
                return [2 /*return*/, Promise.reject(Object.assign(new Error(message), response))];
        }
    });
}); };
export var deserializeAws_querySendBounceCommand = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
    var data, contents, response;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                if (output.statusCode >= 300) {
                    return [2 /*return*/, deserializeAws_querySendBounceCommandError(output, context)];
                }
                return [4 /*yield*/, parseBody(output.body, context)];
            case 1:
                data = _a.sent();
                contents = {};
                contents = deserializeAws_querySendBounceResponse(data.SendBounceResult, context);
                response = __assign({ $metadata: deserializeMetadata(output) }, contents);
                return [2 /*return*/, Promise.resolve(response)];
        }
    });
}); };
var deserializeAws_querySendBounceCommandError = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
    var parsedOutput, _a, response, errorCode, _b, _c, parsedBody, message;
    var _d;
    return __generator(this, function (_e) {
        switch (_e.label) {
            case 0:
                _a = [__assign({}, output)];
                _d = {};
                return [4 /*yield*/, parseBody(output.body, context)];
            case 1:
                parsedOutput = __assign.apply(void 0, _a.concat([(_d.body = _e.sent(), _d)]));
                errorCode = "UnknownError";
                errorCode = loadQueryErrorCode(output, parsedOutput.body);
                _b = errorCode;
                switch (_b) {
                    case "MessageRejected": return [3 /*break*/, 2];
                    case "com.amazonaws.ses#MessageRejected": return [3 /*break*/, 2];
                }
                return [3 /*break*/, 4];
            case 2:
                _c = [{}];
                return [4 /*yield*/, deserializeAws_queryMessageRejectedResponse(parsedOutput, context)];
            case 3:
                response = __assign.apply(void 0, [__assign.apply(void 0, _c.concat([(_e.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 5];
            case 4:
                parsedBody = parsedOutput.body;
                errorCode = parsedBody.Error.code || parsedBody.Error.Code || errorCode;
                response = __assign(__assign({}, parsedBody.Error), { name: "" + errorCode, message: parsedBody.Error.message || parsedBody.Error.Message || errorCode, $fault: "client", $metadata: deserializeMetadata(output) });
                _e.label = 5;
            case 5:
                message = response.message || response.Message || errorCode;
                response.message = message;
                delete response.Message;
                return [2 /*return*/, Promise.reject(Object.assign(new Error(message), response))];
        }
    });
}); };
export var deserializeAws_querySendBulkTemplatedEmailCommand = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
    var data, contents, response;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                if (output.statusCode >= 300) {
                    return [2 /*return*/, deserializeAws_querySendBulkTemplatedEmailCommandError(output, context)];
                }
                return [4 /*yield*/, parseBody(output.body, context)];
            case 1:
                data = _a.sent();
                contents = {};
                contents = deserializeAws_querySendBulkTemplatedEmailResponse(data.SendBulkTemplatedEmailResult, context);
                response = __assign({ $metadata: deserializeMetadata(output) }, contents);
                return [2 /*return*/, Promise.resolve(response)];
        }
    });
}); };
var deserializeAws_querySendBulkTemplatedEmailCommandError = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
    var parsedOutput, _a, response, errorCode, _b, _c, _d, _e, _f, _g, _h, parsedBody, message;
    var _j;
    return __generator(this, function (_k) {
        switch (_k.label) {
            case 0:
                _a = [__assign({}, output)];
                _j = {};
                return [4 /*yield*/, parseBody(output.body, context)];
            case 1:
                parsedOutput = __assign.apply(void 0, _a.concat([(_j.body = _k.sent(), _j)]));
                errorCode = "UnknownError";
                errorCode = loadQueryErrorCode(output, parsedOutput.body);
                _b = errorCode;
                switch (_b) {
                    case "AccountSendingPausedException": return [3 /*break*/, 2];
                    case "com.amazonaws.ses#AccountSendingPausedException": return [3 /*break*/, 2];
                    case "ConfigurationSetDoesNotExistException": return [3 /*break*/, 4];
                    case "com.amazonaws.ses#ConfigurationSetDoesNotExistException": return [3 /*break*/, 4];
                    case "ConfigurationSetSendingPausedException": return [3 /*break*/, 6];
                    case "com.amazonaws.ses#ConfigurationSetSendingPausedException": return [3 /*break*/, 6];
                    case "MailFromDomainNotVerifiedException": return [3 /*break*/, 8];
                    case "com.amazonaws.ses#MailFromDomainNotVerifiedException": return [3 /*break*/, 8];
                    case "MessageRejected": return [3 /*break*/, 10];
                    case "com.amazonaws.ses#MessageRejected": return [3 /*break*/, 10];
                    case "TemplateDoesNotExistException": return [3 /*break*/, 12];
                    case "com.amazonaws.ses#TemplateDoesNotExistException": return [3 /*break*/, 12];
                }
                return [3 /*break*/, 14];
            case 2:
                _c = [{}];
                return [4 /*yield*/, deserializeAws_queryAccountSendingPausedExceptionResponse(parsedOutput, context)];
            case 3:
                response = __assign.apply(void 0, [__assign.apply(void 0, _c.concat([(_k.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 15];
            case 4:
                _d = [{}];
                return [4 /*yield*/, deserializeAws_queryConfigurationSetDoesNotExistExceptionResponse(parsedOutput, context)];
            case 5:
                response = __assign.apply(void 0, [__assign.apply(void 0, _d.concat([(_k.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 15];
            case 6:
                _e = [{}];
                return [4 /*yield*/, deserializeAws_queryConfigurationSetSendingPausedExceptionResponse(parsedOutput, context)];
            case 7:
                response = __assign.apply(void 0, [__assign.apply(void 0, _e.concat([(_k.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 15];
            case 8:
                _f = [{}];
                return [4 /*yield*/, deserializeAws_queryMailFromDomainNotVerifiedExceptionResponse(parsedOutput, context)];
            case 9:
                response = __assign.apply(void 0, [__assign.apply(void 0, _f.concat([(_k.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 15];
            case 10:
                _g = [{}];
                return [4 /*yield*/, deserializeAws_queryMessageRejectedResponse(parsedOutput, context)];
            case 11:
                response = __assign.apply(void 0, [__assign.apply(void 0, _g.concat([(_k.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 15];
            case 12:
                _h = [{}];
                return [4 /*yield*/, deserializeAws_queryTemplateDoesNotExistExceptionResponse(parsedOutput, context)];
            case 13:
                response = __assign.apply(void 0, [__assign.apply(void 0, _h.concat([(_k.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 15];
            case 14:
                parsedBody = parsedOutput.body;
                errorCode = parsedBody.Error.code || parsedBody.Error.Code || errorCode;
                response = __assign(__assign({}, parsedBody.Error), { name: "" + errorCode, message: parsedBody.Error.message || parsedBody.Error.Message || errorCode, $fault: "client", $metadata: deserializeMetadata(output) });
                _k.label = 15;
            case 15:
                message = response.message || response.Message || errorCode;
                response.message = message;
                delete response.Message;
                return [2 /*return*/, Promise.reject(Object.assign(new Error(message), response))];
        }
    });
}); };
export var deserializeAws_querySendCustomVerificationEmailCommand = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
    var data, contents, response;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                if (output.statusCode >= 300) {
                    return [2 /*return*/, deserializeAws_querySendCustomVerificationEmailCommandError(output, context)];
                }
                return [4 /*yield*/, parseBody(output.body, context)];
            case 1:
                data = _a.sent();
                contents = {};
                contents = deserializeAws_querySendCustomVerificationEmailResponse(data.SendCustomVerificationEmailResult, context);
                response = __assign({ $metadata: deserializeMetadata(output) }, contents);
                return [2 /*return*/, Promise.resolve(response)];
        }
    });
}); };
var deserializeAws_querySendCustomVerificationEmailCommandError = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
    var parsedOutput, _a, response, errorCode, _b, _c, _d, _e, _f, _g, parsedBody, message;
    var _h;
    return __generator(this, function (_j) {
        switch (_j.label) {
            case 0:
                _a = [__assign({}, output)];
                _h = {};
                return [4 /*yield*/, parseBody(output.body, context)];
            case 1:
                parsedOutput = __assign.apply(void 0, _a.concat([(_h.body = _j.sent(), _h)]));
                errorCode = "UnknownError";
                errorCode = loadQueryErrorCode(output, parsedOutput.body);
                _b = errorCode;
                switch (_b) {
                    case "ConfigurationSetDoesNotExistException": return [3 /*break*/, 2];
                    case "com.amazonaws.ses#ConfigurationSetDoesNotExistException": return [3 /*break*/, 2];
                    case "CustomVerificationEmailTemplateDoesNotExistException": return [3 /*break*/, 4];
                    case "com.amazonaws.ses#CustomVerificationEmailTemplateDoesNotExistException": return [3 /*break*/, 4];
                    case "FromEmailAddressNotVerifiedException": return [3 /*break*/, 6];
                    case "com.amazonaws.ses#FromEmailAddressNotVerifiedException": return [3 /*break*/, 6];
                    case "MessageRejected": return [3 /*break*/, 8];
                    case "com.amazonaws.ses#MessageRejected": return [3 /*break*/, 8];
                    case "ProductionAccessNotGrantedException": return [3 /*break*/, 10];
                    case "com.amazonaws.ses#ProductionAccessNotGrantedException": return [3 /*break*/, 10];
                }
                return [3 /*break*/, 12];
            case 2:
                _c = [{}];
                return [4 /*yield*/, deserializeAws_queryConfigurationSetDoesNotExistExceptionResponse(parsedOutput, context)];
            case 3:
                response = __assign.apply(void 0, [__assign.apply(void 0, _c.concat([(_j.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 13];
            case 4:
                _d = [{}];
                return [4 /*yield*/, deserializeAws_queryCustomVerificationEmailTemplateDoesNotExistExceptionResponse(parsedOutput, context)];
            case 5:
                response = __assign.apply(void 0, [__assign.apply(void 0, _d.concat([(_j.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 13];
            case 6:
                _e = [{}];
                return [4 /*yield*/, deserializeAws_queryFromEmailAddressNotVerifiedExceptionResponse(parsedOutput, context)];
            case 7:
                response = __assign.apply(void 0, [__assign.apply(void 0, _e.concat([(_j.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 13];
            case 8:
                _f = [{}];
                return [4 /*yield*/, deserializeAws_queryMessageRejectedResponse(parsedOutput, context)];
            case 9:
                response = __assign.apply(void 0, [__assign.apply(void 0, _f.concat([(_j.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 13];
            case 10:
                _g = [{}];
                return [4 /*yield*/, deserializeAws_queryProductionAccessNotGrantedExceptionResponse(parsedOutput, context)];
            case 11:
                response = __assign.apply(void 0, [__assign.apply(void 0, _g.concat([(_j.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 13];
            case 12:
                parsedBody = parsedOutput.body;
                errorCode = parsedBody.Error.code || parsedBody.Error.Code || errorCode;
                response = __assign(__assign({}, parsedBody.Error), { name: "" + errorCode, message: parsedBody.Error.message || parsedBody.Error.Message || errorCode, $fault: "client", $metadata: deserializeMetadata(output) });
                _j.label = 13;
            case 13:
                message = response.message || response.Message || errorCode;
                response.message = message;
                delete response.Message;
                return [2 /*return*/, Promise.reject(Object.assign(new Error(message), response))];
        }
    });
}); };
export var deserializeAws_querySendEmailCommand = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
    var data, contents, response;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                if (output.statusCode >= 300) {
                    return [2 /*return*/, deserializeAws_querySendEmailCommandError(output, context)];
                }
                return [4 /*yield*/, parseBody(output.body, context)];
            case 1:
                data = _a.sent();
                contents = {};
                contents = deserializeAws_querySendEmailResponse(data.SendEmailResult, context);
                response = __assign({ $metadata: deserializeMetadata(output) }, contents);
                return [2 /*return*/, Promise.resolve(response)];
        }
    });
}); };
var deserializeAws_querySendEmailCommandError = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
    var parsedOutput, _a, response, errorCode, _b, _c, _d, _e, _f, _g, parsedBody, message;
    var _h;
    return __generator(this, function (_j) {
        switch (_j.label) {
            case 0:
                _a = [__assign({}, output)];
                _h = {};
                return [4 /*yield*/, parseBody(output.body, context)];
            case 1:
                parsedOutput = __assign.apply(void 0, _a.concat([(_h.body = _j.sent(), _h)]));
                errorCode = "UnknownError";
                errorCode = loadQueryErrorCode(output, parsedOutput.body);
                _b = errorCode;
                switch (_b) {
                    case "AccountSendingPausedException": return [3 /*break*/, 2];
                    case "com.amazonaws.ses#AccountSendingPausedException": return [3 /*break*/, 2];
                    case "ConfigurationSetDoesNotExistException": return [3 /*break*/, 4];
                    case "com.amazonaws.ses#ConfigurationSetDoesNotExistException": return [3 /*break*/, 4];
                    case "ConfigurationSetSendingPausedException": return [3 /*break*/, 6];
                    case "com.amazonaws.ses#ConfigurationSetSendingPausedException": return [3 /*break*/, 6];
                    case "MailFromDomainNotVerifiedException": return [3 /*break*/, 8];
                    case "com.amazonaws.ses#MailFromDomainNotVerifiedException": return [3 /*break*/, 8];
                    case "MessageRejected": return [3 /*break*/, 10];
                    case "com.amazonaws.ses#MessageRejected": return [3 /*break*/, 10];
                }
                return [3 /*break*/, 12];
            case 2:
                _c = [{}];
                return [4 /*yield*/, deserializeAws_queryAccountSendingPausedExceptionResponse(parsedOutput, context)];
            case 3:
                response = __assign.apply(void 0, [__assign.apply(void 0, _c.concat([(_j.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 13];
            case 4:
                _d = [{}];
                return [4 /*yield*/, deserializeAws_queryConfigurationSetDoesNotExistExceptionResponse(parsedOutput, context)];
            case 5:
                response = __assign.apply(void 0, [__assign.apply(void 0, _d.concat([(_j.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 13];
            case 6:
                _e = [{}];
                return [4 /*yield*/, deserializeAws_queryConfigurationSetSendingPausedExceptionResponse(parsedOutput, context)];
            case 7:
                response = __assign.apply(void 0, [__assign.apply(void 0, _e.concat([(_j.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 13];
            case 8:
                _f = [{}];
                return [4 /*yield*/, deserializeAws_queryMailFromDomainNotVerifiedExceptionResponse(parsedOutput, context)];
            case 9:
                response = __assign.apply(void 0, [__assign.apply(void 0, _f.concat([(_j.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 13];
            case 10:
                _g = [{}];
                return [4 /*yield*/, deserializeAws_queryMessageRejectedResponse(parsedOutput, context)];
            case 11:
                response = __assign.apply(void 0, [__assign.apply(void 0, _g.concat([(_j.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 13];
            case 12:
                parsedBody = parsedOutput.body;
                errorCode = parsedBody.Error.code || parsedBody.Error.Code || errorCode;
                response = __assign(__assign({}, parsedBody.Error), { name: "" + errorCode, message: parsedBody.Error.message || parsedBody.Error.Message || errorCode, $fault: "client", $metadata: deserializeMetadata(output) });
                _j.label = 13;
            case 13:
                message = response.message || response.Message || errorCode;
                response.message = message;
                delete response.Message;
                return [2 /*return*/, Promise.reject(Object.assign(new Error(message), response))];
        }
    });
}); };
export var deserializeAws_querySendRawEmailCommand = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
    var data, contents, response;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                if (output.statusCode >= 300) {
                    return [2 /*return*/, deserializeAws_querySendRawEmailCommandError(output, context)];
                }
                return [4 /*yield*/, parseBody(output.body, context)];
            case 1:
                data = _a.sent();
                contents = {};
                contents = deserializeAws_querySendRawEmailResponse(data.SendRawEmailResult, context);
                response = __assign({ $metadata: deserializeMetadata(output) }, contents);
                return [2 /*return*/, Promise.resolve(response)];
        }
    });
}); };
var deserializeAws_querySendRawEmailCommandError = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
    var parsedOutput, _a, response, errorCode, _b, _c, _d, _e, _f, _g, parsedBody, message;
    var _h;
    return __generator(this, function (_j) {
        switch (_j.label) {
            case 0:
                _a = [__assign({}, output)];
                _h = {};
                return [4 /*yield*/, parseBody(output.body, context)];
            case 1:
                parsedOutput = __assign.apply(void 0, _a.concat([(_h.body = _j.sent(), _h)]));
                errorCode = "UnknownError";
                errorCode = loadQueryErrorCode(output, parsedOutput.body);
                _b = errorCode;
                switch (_b) {
                    case "AccountSendingPausedException": return [3 /*break*/, 2];
                    case "com.amazonaws.ses#AccountSendingPausedException": return [3 /*break*/, 2];
                    case "ConfigurationSetDoesNotExistException": return [3 /*break*/, 4];
                    case "com.amazonaws.ses#ConfigurationSetDoesNotExistException": return [3 /*break*/, 4];
                    case "ConfigurationSetSendingPausedException": return [3 /*break*/, 6];
                    case "com.amazonaws.ses#ConfigurationSetSendingPausedException": return [3 /*break*/, 6];
                    case "MailFromDomainNotVerifiedException": return [3 /*break*/, 8];
                    case "com.amazonaws.ses#MailFromDomainNotVerifiedException": return [3 /*break*/, 8];
                    case "MessageRejected": return [3 /*break*/, 10];
                    case "com.amazonaws.ses#MessageRejected": return [3 /*break*/, 10];
                }
                return [3 /*break*/, 12];
            case 2:
                _c = [{}];
                return [4 /*yield*/, deserializeAws_queryAccountSendingPausedExceptionResponse(parsedOutput, context)];
            case 3:
                response = __assign.apply(void 0, [__assign.apply(void 0, _c.concat([(_j.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 13];
            case 4:
                _d = [{}];
                return [4 /*yield*/, deserializeAws_queryConfigurationSetDoesNotExistExceptionResponse(parsedOutput, context)];
            case 5:
                response = __assign.apply(void 0, [__assign.apply(void 0, _d.concat([(_j.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 13];
            case 6:
                _e = [{}];
                return [4 /*yield*/, deserializeAws_queryConfigurationSetSendingPausedExceptionResponse(parsedOutput, context)];
            case 7:
                response = __assign.apply(void 0, [__assign.apply(void 0, _e.concat([(_j.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 13];
            case 8:
                _f = [{}];
                return [4 /*yield*/, deserializeAws_queryMailFromDomainNotVerifiedExceptionResponse(parsedOutput, context)];
            case 9:
                response = __assign.apply(void 0, [__assign.apply(void 0, _f.concat([(_j.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 13];
            case 10:
                _g = [{}];
                return [4 /*yield*/, deserializeAws_queryMessageRejectedResponse(parsedOutput, context)];
            case 11:
                response = __assign.apply(void 0, [__assign.apply(void 0, _g.concat([(_j.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 13];
            case 12:
                parsedBody = parsedOutput.body;
                errorCode = parsedBody.Error.code || parsedBody.Error.Code || errorCode;
                response = __assign(__assign({}, parsedBody.Error), { name: "" + errorCode, message: parsedBody.Error.message || parsedBody.Error.Message || errorCode, $fault: "client", $metadata: deserializeMetadata(output) });
                _j.label = 13;
            case 13:
                message = response.message || response.Message || errorCode;
                response.message = message;
                delete response.Message;
                return [2 /*return*/, Promise.reject(Object.assign(new Error(message), response))];
        }
    });
}); };
export var deserializeAws_querySendTemplatedEmailCommand = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
    var data, contents, response;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                if (output.statusCode >= 300) {
                    return [2 /*return*/, deserializeAws_querySendTemplatedEmailCommandError(output, context)];
                }
                return [4 /*yield*/, parseBody(output.body, context)];
            case 1:
                data = _a.sent();
                contents = {};
                contents = deserializeAws_querySendTemplatedEmailResponse(data.SendTemplatedEmailResult, context);
                response = __assign({ $metadata: deserializeMetadata(output) }, contents);
                return [2 /*return*/, Promise.resolve(response)];
        }
    });
}); };
var deserializeAws_querySendTemplatedEmailCommandError = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
    var parsedOutput, _a, response, errorCode, _b, _c, _d, _e, _f, _g, _h, parsedBody, message;
    var _j;
    return __generator(this, function (_k) {
        switch (_k.label) {
            case 0:
                _a = [__assign({}, output)];
                _j = {};
                return [4 /*yield*/, parseBody(output.body, context)];
            case 1:
                parsedOutput = __assign.apply(void 0, _a.concat([(_j.body = _k.sent(), _j)]));
                errorCode = "UnknownError";
                errorCode = loadQueryErrorCode(output, parsedOutput.body);
                _b = errorCode;
                switch (_b) {
                    case "AccountSendingPausedException": return [3 /*break*/, 2];
                    case "com.amazonaws.ses#AccountSendingPausedException": return [3 /*break*/, 2];
                    case "ConfigurationSetDoesNotExistException": return [3 /*break*/, 4];
                    case "com.amazonaws.ses#ConfigurationSetDoesNotExistException": return [3 /*break*/, 4];
                    case "ConfigurationSetSendingPausedException": return [3 /*break*/, 6];
                    case "com.amazonaws.ses#ConfigurationSetSendingPausedException": return [3 /*break*/, 6];
                    case "MailFromDomainNotVerifiedException": return [3 /*break*/, 8];
                    case "com.amazonaws.ses#MailFromDomainNotVerifiedException": return [3 /*break*/, 8];
                    case "MessageRejected": return [3 /*break*/, 10];
                    case "com.amazonaws.ses#MessageRejected": return [3 /*break*/, 10];
                    case "TemplateDoesNotExistException": return [3 /*break*/, 12];
                    case "com.amazonaws.ses#TemplateDoesNotExistException": return [3 /*break*/, 12];
                }
                return [3 /*break*/, 14];
            case 2:
                _c = [{}];
                return [4 /*yield*/, deserializeAws_queryAccountSendingPausedExceptionResponse(parsedOutput, context)];
            case 3:
                response = __assign.apply(void 0, [__assign.apply(void 0, _c.concat([(_k.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 15];
            case 4:
                _d = [{}];
                return [4 /*yield*/, deserializeAws_queryConfigurationSetDoesNotExistExceptionResponse(parsedOutput, context)];
            case 5:
                response = __assign.apply(void 0, [__assign.apply(void 0, _d.concat([(_k.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 15];
            case 6:
                _e = [{}];
                return [4 /*yield*/, deserializeAws_queryConfigurationSetSendingPausedExceptionResponse(parsedOutput, context)];
            case 7:
                response = __assign.apply(void 0, [__assign.apply(void 0, _e.concat([(_k.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 15];
            case 8:
                _f = [{}];
                return [4 /*yield*/, deserializeAws_queryMailFromDomainNotVerifiedExceptionResponse(parsedOutput, context)];
            case 9:
                response = __assign.apply(void 0, [__assign.apply(void 0, _f.concat([(_k.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 15];
            case 10:
                _g = [{}];
                return [4 /*yield*/, deserializeAws_queryMessageRejectedResponse(parsedOutput, context)];
            case 11:
                response = __assign.apply(void 0, [__assign.apply(void 0, _g.concat([(_k.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 15];
            case 12:
                _h = [{}];
                return [4 /*yield*/, deserializeAws_queryTemplateDoesNotExistExceptionResponse(parsedOutput, context)];
            case 13:
                response = __assign.apply(void 0, [__assign.apply(void 0, _h.concat([(_k.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 15];
            case 14:
                parsedBody = parsedOutput.body;
                errorCode = parsedBody.Error.code || parsedBody.Error.Code || errorCode;
                response = __assign(__assign({}, parsedBody.Error), { name: "" + errorCode, message: parsedBody.Error.message || parsedBody.Error.Message || errorCode, $fault: "client", $metadata: deserializeMetadata(output) });
                _k.label = 15;
            case 15:
                message = response.message || response.Message || errorCode;
                response.message = message;
                delete response.Message;
                return [2 /*return*/, Promise.reject(Object.assign(new Error(message), response))];
        }
    });
}); };
export var deserializeAws_querySetActiveReceiptRuleSetCommand = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
    var data, contents, response;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                if (output.statusCode >= 300) {
                    return [2 /*return*/, deserializeAws_querySetActiveReceiptRuleSetCommandError(output, context)];
                }
                return [4 /*yield*/, parseBody(output.body, context)];
            case 1:
                data = _a.sent();
                contents = {};
                contents = deserializeAws_querySetActiveReceiptRuleSetResponse(data.SetActiveReceiptRuleSetResult, context);
                response = __assign({ $metadata: deserializeMetadata(output) }, contents);
                return [2 /*return*/, Promise.resolve(response)];
        }
    });
}); };
var deserializeAws_querySetActiveReceiptRuleSetCommandError = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
    var parsedOutput, _a, response, errorCode, _b, _c, parsedBody, message;
    var _d;
    return __generator(this, function (_e) {
        switch (_e.label) {
            case 0:
                _a = [__assign({}, output)];
                _d = {};
                return [4 /*yield*/, parseBody(output.body, context)];
            case 1:
                parsedOutput = __assign.apply(void 0, _a.concat([(_d.body = _e.sent(), _d)]));
                errorCode = "UnknownError";
                errorCode = loadQueryErrorCode(output, parsedOutput.body);
                _b = errorCode;
                switch (_b) {
                    case "RuleSetDoesNotExistException": return [3 /*break*/, 2];
                    case "com.amazonaws.ses#RuleSetDoesNotExistException": return [3 /*break*/, 2];
                }
                return [3 /*break*/, 4];
            case 2:
                _c = [{}];
                return [4 /*yield*/, deserializeAws_queryRuleSetDoesNotExistExceptionResponse(parsedOutput, context)];
            case 3:
                response = __assign.apply(void 0, [__assign.apply(void 0, _c.concat([(_e.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 5];
            case 4:
                parsedBody = parsedOutput.body;
                errorCode = parsedBody.Error.code || parsedBody.Error.Code || errorCode;
                response = __assign(__assign({}, parsedBody.Error), { name: "" + errorCode, message: parsedBody.Error.message || parsedBody.Error.Message || errorCode, $fault: "client", $metadata: deserializeMetadata(output) });
                _e.label = 5;
            case 5:
                message = response.message || response.Message || errorCode;
                response.message = message;
                delete response.Message;
                return [2 /*return*/, Promise.reject(Object.assign(new Error(message), response))];
        }
    });
}); };
export var deserializeAws_querySetIdentityDkimEnabledCommand = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
    var data, contents, response;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                if (output.statusCode >= 300) {
                    return [2 /*return*/, deserializeAws_querySetIdentityDkimEnabledCommandError(output, context)];
                }
                return [4 /*yield*/, parseBody(output.body, context)];
            case 1:
                data = _a.sent();
                contents = {};
                contents = deserializeAws_querySetIdentityDkimEnabledResponse(data.SetIdentityDkimEnabledResult, context);
                response = __assign({ $metadata: deserializeMetadata(output) }, contents);
                return [2 /*return*/, Promise.resolve(response)];
        }
    });
}); };
var deserializeAws_querySetIdentityDkimEnabledCommandError = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
    var parsedOutput, _a, response, errorCode, parsedBody, message;
    var _b;
    return __generator(this, function (_c) {
        switch (_c.label) {
            case 0:
                _a = [__assign({}, output)];
                _b = {};
                return [4 /*yield*/, parseBody(output.body, context)];
            case 1:
                parsedOutput = __assign.apply(void 0, _a.concat([(_b.body = _c.sent(), _b)]));
                errorCode = "UnknownError";
                errorCode = loadQueryErrorCode(output, parsedOutput.body);
                switch (errorCode) {
                    default:
                        parsedBody = parsedOutput.body;
                        errorCode = parsedBody.Error.code || parsedBody.Error.Code || errorCode;
                        response = __assign(__assign({}, parsedBody.Error), { name: "" + errorCode, message: parsedBody.Error.message || parsedBody.Error.Message || errorCode, $fault: "client", $metadata: deserializeMetadata(output) });
                }
                message = response.message || response.Message || errorCode;
                response.message = message;
                delete response.Message;
                return [2 /*return*/, Promise.reject(Object.assign(new Error(message), response))];
        }
    });
}); };
export var deserializeAws_querySetIdentityFeedbackForwardingEnabledCommand = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
    var data, contents, response;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                if (output.statusCode >= 300) {
                    return [2 /*return*/, deserializeAws_querySetIdentityFeedbackForwardingEnabledCommandError(output, context)];
                }
                return [4 /*yield*/, parseBody(output.body, context)];
            case 1:
                data = _a.sent();
                contents = {};
                contents = deserializeAws_querySetIdentityFeedbackForwardingEnabledResponse(data.SetIdentityFeedbackForwardingEnabledResult, context);
                response = __assign({ $metadata: deserializeMetadata(output) }, contents);
                return [2 /*return*/, Promise.resolve(response)];
        }
    });
}); };
var deserializeAws_querySetIdentityFeedbackForwardingEnabledCommandError = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
    var parsedOutput, _a, response, errorCode, parsedBody, message;
    var _b;
    return __generator(this, function (_c) {
        switch (_c.label) {
            case 0:
                _a = [__assign({}, output)];
                _b = {};
                return [4 /*yield*/, parseBody(output.body, context)];
            case 1:
                parsedOutput = __assign.apply(void 0, _a.concat([(_b.body = _c.sent(), _b)]));
                errorCode = "UnknownError";
                errorCode = loadQueryErrorCode(output, parsedOutput.body);
                switch (errorCode) {
                    default:
                        parsedBody = parsedOutput.body;
                        errorCode = parsedBody.Error.code || parsedBody.Error.Code || errorCode;
                        response = __assign(__assign({}, parsedBody.Error), { name: "" + errorCode, message: parsedBody.Error.message || parsedBody.Error.Message || errorCode, $fault: "client", $metadata: deserializeMetadata(output) });
                }
                message = response.message || response.Message || errorCode;
                response.message = message;
                delete response.Message;
                return [2 /*return*/, Promise.reject(Object.assign(new Error(message), response))];
        }
    });
}); };
export var deserializeAws_querySetIdentityHeadersInNotificationsEnabledCommand = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
    var data, contents, response;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                if (output.statusCode >= 300) {
                    return [2 /*return*/, deserializeAws_querySetIdentityHeadersInNotificationsEnabledCommandError(output, context)];
                }
                return [4 /*yield*/, parseBody(output.body, context)];
            case 1:
                data = _a.sent();
                contents = {};
                contents = deserializeAws_querySetIdentityHeadersInNotificationsEnabledResponse(data.SetIdentityHeadersInNotificationsEnabledResult, context);
                response = __assign({ $metadata: deserializeMetadata(output) }, contents);
                return [2 /*return*/, Promise.resolve(response)];
        }
    });
}); };
var deserializeAws_querySetIdentityHeadersInNotificationsEnabledCommandError = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
    var parsedOutput, _a, response, errorCode, parsedBody, message;
    var _b;
    return __generator(this, function (_c) {
        switch (_c.label) {
            case 0:
                _a = [__assign({}, output)];
                _b = {};
                return [4 /*yield*/, parseBody(output.body, context)];
            case 1:
                parsedOutput = __assign.apply(void 0, _a.concat([(_b.body = _c.sent(), _b)]));
                errorCode = "UnknownError";
                errorCode = loadQueryErrorCode(output, parsedOutput.body);
                switch (errorCode) {
                    default:
                        parsedBody = parsedOutput.body;
                        errorCode = parsedBody.Error.code || parsedBody.Error.Code || errorCode;
                        response = __assign(__assign({}, parsedBody.Error), { name: "" + errorCode, message: parsedBody.Error.message || parsedBody.Error.Message || errorCode, $fault: "client", $metadata: deserializeMetadata(output) });
                }
                message = response.message || response.Message || errorCode;
                response.message = message;
                delete response.Message;
                return [2 /*return*/, Promise.reject(Object.assign(new Error(message), response))];
        }
    });
}); };
export var deserializeAws_querySetIdentityMailFromDomainCommand = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
    var data, contents, response;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                if (output.statusCode >= 300) {
                    return [2 /*return*/, deserializeAws_querySetIdentityMailFromDomainCommandError(output, context)];
                }
                return [4 /*yield*/, parseBody(output.body, context)];
            case 1:
                data = _a.sent();
                contents = {};
                contents = deserializeAws_querySetIdentityMailFromDomainResponse(data.SetIdentityMailFromDomainResult, context);
                response = __assign({ $metadata: deserializeMetadata(output) }, contents);
                return [2 /*return*/, Promise.resolve(response)];
        }
    });
}); };
var deserializeAws_querySetIdentityMailFromDomainCommandError = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
    var parsedOutput, _a, response, errorCode, parsedBody, message;
    var _b;
    return __generator(this, function (_c) {
        switch (_c.label) {
            case 0:
                _a = [__assign({}, output)];
                _b = {};
                return [4 /*yield*/, parseBody(output.body, context)];
            case 1:
                parsedOutput = __assign.apply(void 0, _a.concat([(_b.body = _c.sent(), _b)]));
                errorCode = "UnknownError";
                errorCode = loadQueryErrorCode(output, parsedOutput.body);
                switch (errorCode) {
                    default:
                        parsedBody = parsedOutput.body;
                        errorCode = parsedBody.Error.code || parsedBody.Error.Code || errorCode;
                        response = __assign(__assign({}, parsedBody.Error), { name: "" + errorCode, message: parsedBody.Error.message || parsedBody.Error.Message || errorCode, $fault: "client", $metadata: deserializeMetadata(output) });
                }
                message = response.message || response.Message || errorCode;
                response.message = message;
                delete response.Message;
                return [2 /*return*/, Promise.reject(Object.assign(new Error(message), response))];
        }
    });
}); };
export var deserializeAws_querySetIdentityNotificationTopicCommand = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
    var data, contents, response;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                if (output.statusCode >= 300) {
                    return [2 /*return*/, deserializeAws_querySetIdentityNotificationTopicCommandError(output, context)];
                }
                return [4 /*yield*/, parseBody(output.body, context)];
            case 1:
                data = _a.sent();
                contents = {};
                contents = deserializeAws_querySetIdentityNotificationTopicResponse(data.SetIdentityNotificationTopicResult, context);
                response = __assign({ $metadata: deserializeMetadata(output) }, contents);
                return [2 /*return*/, Promise.resolve(response)];
        }
    });
}); };
var deserializeAws_querySetIdentityNotificationTopicCommandError = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
    var parsedOutput, _a, response, errorCode, parsedBody, message;
    var _b;
    return __generator(this, function (_c) {
        switch (_c.label) {
            case 0:
                _a = [__assign({}, output)];
                _b = {};
                return [4 /*yield*/, parseBody(output.body, context)];
            case 1:
                parsedOutput = __assign.apply(void 0, _a.concat([(_b.body = _c.sent(), _b)]));
                errorCode = "UnknownError";
                errorCode = loadQueryErrorCode(output, parsedOutput.body);
                switch (errorCode) {
                    default:
                        parsedBody = parsedOutput.body;
                        errorCode = parsedBody.Error.code || parsedBody.Error.Code || errorCode;
                        response = __assign(__assign({}, parsedBody.Error), { name: "" + errorCode, message: parsedBody.Error.message || parsedBody.Error.Message || errorCode, $fault: "client", $metadata: deserializeMetadata(output) });
                }
                message = response.message || response.Message || errorCode;
                response.message = message;
                delete response.Message;
                return [2 /*return*/, Promise.reject(Object.assign(new Error(message), response))];
        }
    });
}); };
export var deserializeAws_querySetReceiptRulePositionCommand = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
    var data, contents, response;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                if (output.statusCode >= 300) {
                    return [2 /*return*/, deserializeAws_querySetReceiptRulePositionCommandError(output, context)];
                }
                return [4 /*yield*/, parseBody(output.body, context)];
            case 1:
                data = _a.sent();
                contents = {};
                contents = deserializeAws_querySetReceiptRulePositionResponse(data.SetReceiptRulePositionResult, context);
                response = __assign({ $metadata: deserializeMetadata(output) }, contents);
                return [2 /*return*/, Promise.resolve(response)];
        }
    });
}); };
var deserializeAws_querySetReceiptRulePositionCommandError = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
    var parsedOutput, _a, response, errorCode, _b, _c, _d, parsedBody, message;
    var _e;
    return __generator(this, function (_f) {
        switch (_f.label) {
            case 0:
                _a = [__assign({}, output)];
                _e = {};
                return [4 /*yield*/, parseBody(output.body, context)];
            case 1:
                parsedOutput = __assign.apply(void 0, _a.concat([(_e.body = _f.sent(), _e)]));
                errorCode = "UnknownError";
                errorCode = loadQueryErrorCode(output, parsedOutput.body);
                _b = errorCode;
                switch (_b) {
                    case "RuleDoesNotExistException": return [3 /*break*/, 2];
                    case "com.amazonaws.ses#RuleDoesNotExistException": return [3 /*break*/, 2];
                    case "RuleSetDoesNotExistException": return [3 /*break*/, 4];
                    case "com.amazonaws.ses#RuleSetDoesNotExistException": return [3 /*break*/, 4];
                }
                return [3 /*break*/, 6];
            case 2:
                _c = [{}];
                return [4 /*yield*/, deserializeAws_queryRuleDoesNotExistExceptionResponse(parsedOutput, context)];
            case 3:
                response = __assign.apply(void 0, [__assign.apply(void 0, _c.concat([(_f.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 7];
            case 4:
                _d = [{}];
                return [4 /*yield*/, deserializeAws_queryRuleSetDoesNotExistExceptionResponse(parsedOutput, context)];
            case 5:
                response = __assign.apply(void 0, [__assign.apply(void 0, _d.concat([(_f.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 7];
            case 6:
                parsedBody = parsedOutput.body;
                errorCode = parsedBody.Error.code || parsedBody.Error.Code || errorCode;
                response = __assign(__assign({}, parsedBody.Error), { name: "" + errorCode, message: parsedBody.Error.message || parsedBody.Error.Message || errorCode, $fault: "client", $metadata: deserializeMetadata(output) });
                _f.label = 7;
            case 7:
                message = response.message || response.Message || errorCode;
                response.message = message;
                delete response.Message;
                return [2 /*return*/, Promise.reject(Object.assign(new Error(message), response))];
        }
    });
}); };
export var deserializeAws_queryTestRenderTemplateCommand = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
    var data, contents, response;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                if (output.statusCode >= 300) {
                    return [2 /*return*/, deserializeAws_queryTestRenderTemplateCommandError(output, context)];
                }
                return [4 /*yield*/, parseBody(output.body, context)];
            case 1:
                data = _a.sent();
                contents = {};
                contents = deserializeAws_queryTestRenderTemplateResponse(data.TestRenderTemplateResult, context);
                response = __assign({ $metadata: deserializeMetadata(output) }, contents);
                return [2 /*return*/, Promise.resolve(response)];
        }
    });
}); };
var deserializeAws_queryTestRenderTemplateCommandError = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
    var parsedOutput, _a, response, errorCode, _b, _c, _d, _e, parsedBody, message;
    var _f;
    return __generator(this, function (_g) {
        switch (_g.label) {
            case 0:
                _a = [__assign({}, output)];
                _f = {};
                return [4 /*yield*/, parseBody(output.body, context)];
            case 1:
                parsedOutput = __assign.apply(void 0, _a.concat([(_f.body = _g.sent(), _f)]));
                errorCode = "UnknownError";
                errorCode = loadQueryErrorCode(output, parsedOutput.body);
                _b = errorCode;
                switch (_b) {
                    case "InvalidRenderingParameterException": return [3 /*break*/, 2];
                    case "com.amazonaws.ses#InvalidRenderingParameterException": return [3 /*break*/, 2];
                    case "MissingRenderingAttributeException": return [3 /*break*/, 4];
                    case "com.amazonaws.ses#MissingRenderingAttributeException": return [3 /*break*/, 4];
                    case "TemplateDoesNotExistException": return [3 /*break*/, 6];
                    case "com.amazonaws.ses#TemplateDoesNotExistException": return [3 /*break*/, 6];
                }
                return [3 /*break*/, 8];
            case 2:
                _c = [{}];
                return [4 /*yield*/, deserializeAws_queryInvalidRenderingParameterExceptionResponse(parsedOutput, context)];
            case 3:
                response = __assign.apply(void 0, [__assign.apply(void 0, _c.concat([(_g.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 9];
            case 4:
                _d = [{}];
                return [4 /*yield*/, deserializeAws_queryMissingRenderingAttributeExceptionResponse(parsedOutput, context)];
            case 5:
                response = __assign.apply(void 0, [__assign.apply(void 0, _d.concat([(_g.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 9];
            case 6:
                _e = [{}];
                return [4 /*yield*/, deserializeAws_queryTemplateDoesNotExistExceptionResponse(parsedOutput, context)];
            case 7:
                response = __assign.apply(void 0, [__assign.apply(void 0, _e.concat([(_g.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 9];
            case 8:
                parsedBody = parsedOutput.body;
                errorCode = parsedBody.Error.code || parsedBody.Error.Code || errorCode;
                response = __assign(__assign({}, parsedBody.Error), { name: "" + errorCode, message: parsedBody.Error.message || parsedBody.Error.Message || errorCode, $fault: "client", $metadata: deserializeMetadata(output) });
                _g.label = 9;
            case 9:
                message = response.message || response.Message || errorCode;
                response.message = message;
                delete response.Message;
                return [2 /*return*/, Promise.reject(Object.assign(new Error(message), response))];
        }
    });
}); };
export var deserializeAws_queryUpdateAccountSendingEnabledCommand = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
    var response;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                if (output.statusCode >= 300) {
                    return [2 /*return*/, deserializeAws_queryUpdateAccountSendingEnabledCommandError(output, context)];
                }
                return [4 /*yield*/, collectBody(output.body, context)];
            case 1:
                _a.sent();
                response = {
                    $metadata: deserializeMetadata(output),
                };
                return [2 /*return*/, Promise.resolve(response)];
        }
    });
}); };
var deserializeAws_queryUpdateAccountSendingEnabledCommandError = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
    var parsedOutput, _a, response, errorCode, parsedBody, message;
    var _b;
    return __generator(this, function (_c) {
        switch (_c.label) {
            case 0:
                _a = [__assign({}, output)];
                _b = {};
                return [4 /*yield*/, parseBody(output.body, context)];
            case 1:
                parsedOutput = __assign.apply(void 0, _a.concat([(_b.body = _c.sent(), _b)]));
                errorCode = "UnknownError";
                errorCode = loadQueryErrorCode(output, parsedOutput.body);
                switch (errorCode) {
                    default:
                        parsedBody = parsedOutput.body;
                        errorCode = parsedBody.Error.code || parsedBody.Error.Code || errorCode;
                        response = __assign(__assign({}, parsedBody.Error), { name: "" + errorCode, message: parsedBody.Error.message || parsedBody.Error.Message || errorCode, $fault: "client", $metadata: deserializeMetadata(output) });
                }
                message = response.message || response.Message || errorCode;
                response.message = message;
                delete response.Message;
                return [2 /*return*/, Promise.reject(Object.assign(new Error(message), response))];
        }
    });
}); };
export var deserializeAws_queryUpdateConfigurationSetEventDestinationCommand = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
    var data, contents, response;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                if (output.statusCode >= 300) {
                    return [2 /*return*/, deserializeAws_queryUpdateConfigurationSetEventDestinationCommandError(output, context)];
                }
                return [4 /*yield*/, parseBody(output.body, context)];
            case 1:
                data = _a.sent();
                contents = {};
                contents = deserializeAws_queryUpdateConfigurationSetEventDestinationResponse(data.UpdateConfigurationSetEventDestinationResult, context);
                response = __assign({ $metadata: deserializeMetadata(output) }, contents);
                return [2 /*return*/, Promise.resolve(response)];
        }
    });
}); };
var deserializeAws_queryUpdateConfigurationSetEventDestinationCommandError = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
    var parsedOutput, _a, response, errorCode, _b, _c, _d, _e, _f, _g, parsedBody, message;
    var _h;
    return __generator(this, function (_j) {
        switch (_j.label) {
            case 0:
                _a = [__assign({}, output)];
                _h = {};
                return [4 /*yield*/, parseBody(output.body, context)];
            case 1:
                parsedOutput = __assign.apply(void 0, _a.concat([(_h.body = _j.sent(), _h)]));
                errorCode = "UnknownError";
                errorCode = loadQueryErrorCode(output, parsedOutput.body);
                _b = errorCode;
                switch (_b) {
                    case "ConfigurationSetDoesNotExistException": return [3 /*break*/, 2];
                    case "com.amazonaws.ses#ConfigurationSetDoesNotExistException": return [3 /*break*/, 2];
                    case "EventDestinationDoesNotExistException": return [3 /*break*/, 4];
                    case "com.amazonaws.ses#EventDestinationDoesNotExistException": return [3 /*break*/, 4];
                    case "InvalidCloudWatchDestinationException": return [3 /*break*/, 6];
                    case "com.amazonaws.ses#InvalidCloudWatchDestinationException": return [3 /*break*/, 6];
                    case "InvalidFirehoseDestinationException": return [3 /*break*/, 8];
                    case "com.amazonaws.ses#InvalidFirehoseDestinationException": return [3 /*break*/, 8];
                    case "InvalidSNSDestinationException": return [3 /*break*/, 10];
                    case "com.amazonaws.ses#InvalidSNSDestinationException": return [3 /*break*/, 10];
                }
                return [3 /*break*/, 12];
            case 2:
                _c = [{}];
                return [4 /*yield*/, deserializeAws_queryConfigurationSetDoesNotExistExceptionResponse(parsedOutput, context)];
            case 3:
                response = __assign.apply(void 0, [__assign.apply(void 0, _c.concat([(_j.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 13];
            case 4:
                _d = [{}];
                return [4 /*yield*/, deserializeAws_queryEventDestinationDoesNotExistExceptionResponse(parsedOutput, context)];
            case 5:
                response = __assign.apply(void 0, [__assign.apply(void 0, _d.concat([(_j.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 13];
            case 6:
                _e = [{}];
                return [4 /*yield*/, deserializeAws_queryInvalidCloudWatchDestinationExceptionResponse(parsedOutput, context)];
            case 7:
                response = __assign.apply(void 0, [__assign.apply(void 0, _e.concat([(_j.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 13];
            case 8:
                _f = [{}];
                return [4 /*yield*/, deserializeAws_queryInvalidFirehoseDestinationExceptionResponse(parsedOutput, context)];
            case 9:
                response = __assign.apply(void 0, [__assign.apply(void 0, _f.concat([(_j.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 13];
            case 10:
                _g = [{}];
                return [4 /*yield*/, deserializeAws_queryInvalidSNSDestinationExceptionResponse(parsedOutput, context)];
            case 11:
                response = __assign.apply(void 0, [__assign.apply(void 0, _g.concat([(_j.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 13];
            case 12:
                parsedBody = parsedOutput.body;
                errorCode = parsedBody.Error.code || parsedBody.Error.Code || errorCode;
                response = __assign(__assign({}, parsedBody.Error), { name: "" + errorCode, message: parsedBody.Error.message || parsedBody.Error.Message || errorCode, $fault: "client", $metadata: deserializeMetadata(output) });
                _j.label = 13;
            case 13:
                message = response.message || response.Message || errorCode;
                response.message = message;
                delete response.Message;
                return [2 /*return*/, Promise.reject(Object.assign(new Error(message), response))];
        }
    });
}); };
export var deserializeAws_queryUpdateConfigurationSetReputationMetricsEnabledCommand = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
    var response;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                if (output.statusCode >= 300) {
                    return [2 /*return*/, deserializeAws_queryUpdateConfigurationSetReputationMetricsEnabledCommandError(output, context)];
                }
                return [4 /*yield*/, collectBody(output.body, context)];
            case 1:
                _a.sent();
                response = {
                    $metadata: deserializeMetadata(output),
                };
                return [2 /*return*/, Promise.resolve(response)];
        }
    });
}); };
var deserializeAws_queryUpdateConfigurationSetReputationMetricsEnabledCommandError = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
    var parsedOutput, _a, response, errorCode, _b, _c, parsedBody, message;
    var _d;
    return __generator(this, function (_e) {
        switch (_e.label) {
            case 0:
                _a = [__assign({}, output)];
                _d = {};
                return [4 /*yield*/, parseBody(output.body, context)];
            case 1:
                parsedOutput = __assign.apply(void 0, _a.concat([(_d.body = _e.sent(), _d)]));
                errorCode = "UnknownError";
                errorCode = loadQueryErrorCode(output, parsedOutput.body);
                _b = errorCode;
                switch (_b) {
                    case "ConfigurationSetDoesNotExistException": return [3 /*break*/, 2];
                    case "com.amazonaws.ses#ConfigurationSetDoesNotExistException": return [3 /*break*/, 2];
                }
                return [3 /*break*/, 4];
            case 2:
                _c = [{}];
                return [4 /*yield*/, deserializeAws_queryConfigurationSetDoesNotExistExceptionResponse(parsedOutput, context)];
            case 3:
                response = __assign.apply(void 0, [__assign.apply(void 0, _c.concat([(_e.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 5];
            case 4:
                parsedBody = parsedOutput.body;
                errorCode = parsedBody.Error.code || parsedBody.Error.Code || errorCode;
                response = __assign(__assign({}, parsedBody.Error), { name: "" + errorCode, message: parsedBody.Error.message || parsedBody.Error.Message || errorCode, $fault: "client", $metadata: deserializeMetadata(output) });
                _e.label = 5;
            case 5:
                message = response.message || response.Message || errorCode;
                response.message = message;
                delete response.Message;
                return [2 /*return*/, Promise.reject(Object.assign(new Error(message), response))];
        }
    });
}); };
export var deserializeAws_queryUpdateConfigurationSetSendingEnabledCommand = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
    var response;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                if (output.statusCode >= 300) {
                    return [2 /*return*/, deserializeAws_queryUpdateConfigurationSetSendingEnabledCommandError(output, context)];
                }
                return [4 /*yield*/, collectBody(output.body, context)];
            case 1:
                _a.sent();
                response = {
                    $metadata: deserializeMetadata(output),
                };
                return [2 /*return*/, Promise.resolve(response)];
        }
    });
}); };
var deserializeAws_queryUpdateConfigurationSetSendingEnabledCommandError = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
    var parsedOutput, _a, response, errorCode, _b, _c, parsedBody, message;
    var _d;
    return __generator(this, function (_e) {
        switch (_e.label) {
            case 0:
                _a = [__assign({}, output)];
                _d = {};
                return [4 /*yield*/, parseBody(output.body, context)];
            case 1:
                parsedOutput = __assign.apply(void 0, _a.concat([(_d.body = _e.sent(), _d)]));
                errorCode = "UnknownError";
                errorCode = loadQueryErrorCode(output, parsedOutput.body);
                _b = errorCode;
                switch (_b) {
                    case "ConfigurationSetDoesNotExistException": return [3 /*break*/, 2];
                    case "com.amazonaws.ses#ConfigurationSetDoesNotExistException": return [3 /*break*/, 2];
                }
                return [3 /*break*/, 4];
            case 2:
                _c = [{}];
                return [4 /*yield*/, deserializeAws_queryConfigurationSetDoesNotExistExceptionResponse(parsedOutput, context)];
            case 3:
                response = __assign.apply(void 0, [__assign.apply(void 0, _c.concat([(_e.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 5];
            case 4:
                parsedBody = parsedOutput.body;
                errorCode = parsedBody.Error.code || parsedBody.Error.Code || errorCode;
                response = __assign(__assign({}, parsedBody.Error), { name: "" + errorCode, message: parsedBody.Error.message || parsedBody.Error.Message || errorCode, $fault: "client", $metadata: deserializeMetadata(output) });
                _e.label = 5;
            case 5:
                message = response.message || response.Message || errorCode;
                response.message = message;
                delete response.Message;
                return [2 /*return*/, Promise.reject(Object.assign(new Error(message), response))];
        }
    });
}); };
export var deserializeAws_queryUpdateConfigurationSetTrackingOptionsCommand = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
    var data, contents, response;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                if (output.statusCode >= 300) {
                    return [2 /*return*/, deserializeAws_queryUpdateConfigurationSetTrackingOptionsCommandError(output, context)];
                }
                return [4 /*yield*/, parseBody(output.body, context)];
            case 1:
                data = _a.sent();
                contents = {};
                contents = deserializeAws_queryUpdateConfigurationSetTrackingOptionsResponse(data.UpdateConfigurationSetTrackingOptionsResult, context);
                response = __assign({ $metadata: deserializeMetadata(output) }, contents);
                return [2 /*return*/, Promise.resolve(response)];
        }
    });
}); };
var deserializeAws_queryUpdateConfigurationSetTrackingOptionsCommandError = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
    var parsedOutput, _a, response, errorCode, _b, _c, _d, _e, parsedBody, message;
    var _f;
    return __generator(this, function (_g) {
        switch (_g.label) {
            case 0:
                _a = [__assign({}, output)];
                _f = {};
                return [4 /*yield*/, parseBody(output.body, context)];
            case 1:
                parsedOutput = __assign.apply(void 0, _a.concat([(_f.body = _g.sent(), _f)]));
                errorCode = "UnknownError";
                errorCode = loadQueryErrorCode(output, parsedOutput.body);
                _b = errorCode;
                switch (_b) {
                    case "ConfigurationSetDoesNotExistException": return [3 /*break*/, 2];
                    case "com.amazonaws.ses#ConfigurationSetDoesNotExistException": return [3 /*break*/, 2];
                    case "InvalidTrackingOptionsException": return [3 /*break*/, 4];
                    case "com.amazonaws.ses#InvalidTrackingOptionsException": return [3 /*break*/, 4];
                    case "TrackingOptionsDoesNotExistException": return [3 /*break*/, 6];
                    case "com.amazonaws.ses#TrackingOptionsDoesNotExistException": return [3 /*break*/, 6];
                }
                return [3 /*break*/, 8];
            case 2:
                _c = [{}];
                return [4 /*yield*/, deserializeAws_queryConfigurationSetDoesNotExistExceptionResponse(parsedOutput, context)];
            case 3:
                response = __assign.apply(void 0, [__assign.apply(void 0, _c.concat([(_g.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 9];
            case 4:
                _d = [{}];
                return [4 /*yield*/, deserializeAws_queryInvalidTrackingOptionsExceptionResponse(parsedOutput, context)];
            case 5:
                response = __assign.apply(void 0, [__assign.apply(void 0, _d.concat([(_g.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 9];
            case 6:
                _e = [{}];
                return [4 /*yield*/, deserializeAws_queryTrackingOptionsDoesNotExistExceptionResponse(parsedOutput, context)];
            case 7:
                response = __assign.apply(void 0, [__assign.apply(void 0, _e.concat([(_g.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 9];
            case 8:
                parsedBody = parsedOutput.body;
                errorCode = parsedBody.Error.code || parsedBody.Error.Code || errorCode;
                response = __assign(__assign({}, parsedBody.Error), { name: "" + errorCode, message: parsedBody.Error.message || parsedBody.Error.Message || errorCode, $fault: "client", $metadata: deserializeMetadata(output) });
                _g.label = 9;
            case 9:
                message = response.message || response.Message || errorCode;
                response.message = message;
                delete response.Message;
                return [2 /*return*/, Promise.reject(Object.assign(new Error(message), response))];
        }
    });
}); };
export var deserializeAws_queryUpdateCustomVerificationEmailTemplateCommand = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
    var response;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                if (output.statusCode >= 300) {
                    return [2 /*return*/, deserializeAws_queryUpdateCustomVerificationEmailTemplateCommandError(output, context)];
                }
                return [4 /*yield*/, collectBody(output.body, context)];
            case 1:
                _a.sent();
                response = {
                    $metadata: deserializeMetadata(output),
                };
                return [2 /*return*/, Promise.resolve(response)];
        }
    });
}); };
var deserializeAws_queryUpdateCustomVerificationEmailTemplateCommandError = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
    var parsedOutput, _a, response, errorCode, _b, _c, _d, _e, parsedBody, message;
    var _f;
    return __generator(this, function (_g) {
        switch (_g.label) {
            case 0:
                _a = [__assign({}, output)];
                _f = {};
                return [4 /*yield*/, parseBody(output.body, context)];
            case 1:
                parsedOutput = __assign.apply(void 0, _a.concat([(_f.body = _g.sent(), _f)]));
                errorCode = "UnknownError";
                errorCode = loadQueryErrorCode(output, parsedOutput.body);
                _b = errorCode;
                switch (_b) {
                    case "CustomVerificationEmailInvalidContentException": return [3 /*break*/, 2];
                    case "com.amazonaws.ses#CustomVerificationEmailInvalidContentException": return [3 /*break*/, 2];
                    case "CustomVerificationEmailTemplateDoesNotExistException": return [3 /*break*/, 4];
                    case "com.amazonaws.ses#CustomVerificationEmailTemplateDoesNotExistException": return [3 /*break*/, 4];
                    case "FromEmailAddressNotVerifiedException": return [3 /*break*/, 6];
                    case "com.amazonaws.ses#FromEmailAddressNotVerifiedException": return [3 /*break*/, 6];
                }
                return [3 /*break*/, 8];
            case 2:
                _c = [{}];
                return [4 /*yield*/, deserializeAws_queryCustomVerificationEmailInvalidContentExceptionResponse(parsedOutput, context)];
            case 3:
                response = __assign.apply(void 0, [__assign.apply(void 0, _c.concat([(_g.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 9];
            case 4:
                _d = [{}];
                return [4 /*yield*/, deserializeAws_queryCustomVerificationEmailTemplateDoesNotExistExceptionResponse(parsedOutput, context)];
            case 5:
                response = __assign.apply(void 0, [__assign.apply(void 0, _d.concat([(_g.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 9];
            case 6:
                _e = [{}];
                return [4 /*yield*/, deserializeAws_queryFromEmailAddressNotVerifiedExceptionResponse(parsedOutput, context)];
            case 7:
                response = __assign.apply(void 0, [__assign.apply(void 0, _e.concat([(_g.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 9];
            case 8:
                parsedBody = parsedOutput.body;
                errorCode = parsedBody.Error.code || parsedBody.Error.Code || errorCode;
                response = __assign(__assign({}, parsedBody.Error), { name: "" + errorCode, message: parsedBody.Error.message || parsedBody.Error.Message || errorCode, $fault: "client", $metadata: deserializeMetadata(output) });
                _g.label = 9;
            case 9:
                message = response.message || response.Message || errorCode;
                response.message = message;
                delete response.Message;
                return [2 /*return*/, Promise.reject(Object.assign(new Error(message), response))];
        }
    });
}); };
export var deserializeAws_queryUpdateReceiptRuleCommand = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
    var data, contents, response;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                if (output.statusCode >= 300) {
                    return [2 /*return*/, deserializeAws_queryUpdateReceiptRuleCommandError(output, context)];
                }
                return [4 /*yield*/, parseBody(output.body, context)];
            case 1:
                data = _a.sent();
                contents = {};
                contents = deserializeAws_queryUpdateReceiptRuleResponse(data.UpdateReceiptRuleResult, context);
                response = __assign({ $metadata: deserializeMetadata(output) }, contents);
                return [2 /*return*/, Promise.resolve(response)];
        }
    });
}); };
var deserializeAws_queryUpdateReceiptRuleCommandError = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
    var parsedOutput, _a, response, errorCode, _b, _c, _d, _e, _f, _g, _h, parsedBody, message;
    var _j;
    return __generator(this, function (_k) {
        switch (_k.label) {
            case 0:
                _a = [__assign({}, output)];
                _j = {};
                return [4 /*yield*/, parseBody(output.body, context)];
            case 1:
                parsedOutput = __assign.apply(void 0, _a.concat([(_j.body = _k.sent(), _j)]));
                errorCode = "UnknownError";
                errorCode = loadQueryErrorCode(output, parsedOutput.body);
                _b = errorCode;
                switch (_b) {
                    case "InvalidLambdaFunctionException": return [3 /*break*/, 2];
                    case "com.amazonaws.ses#InvalidLambdaFunctionException": return [3 /*break*/, 2];
                    case "InvalidS3ConfigurationException": return [3 /*break*/, 4];
                    case "com.amazonaws.ses#InvalidS3ConfigurationException": return [3 /*break*/, 4];
                    case "InvalidSnsTopicException": return [3 /*break*/, 6];
                    case "com.amazonaws.ses#InvalidSnsTopicException": return [3 /*break*/, 6];
                    case "LimitExceededException": return [3 /*break*/, 8];
                    case "com.amazonaws.ses#LimitExceededException": return [3 /*break*/, 8];
                    case "RuleDoesNotExistException": return [3 /*break*/, 10];
                    case "com.amazonaws.ses#RuleDoesNotExistException": return [3 /*break*/, 10];
                    case "RuleSetDoesNotExistException": return [3 /*break*/, 12];
                    case "com.amazonaws.ses#RuleSetDoesNotExistException": return [3 /*break*/, 12];
                }
                return [3 /*break*/, 14];
            case 2:
                _c = [{}];
                return [4 /*yield*/, deserializeAws_queryInvalidLambdaFunctionExceptionResponse(parsedOutput, context)];
            case 3:
                response = __assign.apply(void 0, [__assign.apply(void 0, _c.concat([(_k.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 15];
            case 4:
                _d = [{}];
                return [4 /*yield*/, deserializeAws_queryInvalidS3ConfigurationExceptionResponse(parsedOutput, context)];
            case 5:
                response = __assign.apply(void 0, [__assign.apply(void 0, _d.concat([(_k.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 15];
            case 6:
                _e = [{}];
                return [4 /*yield*/, deserializeAws_queryInvalidSnsTopicExceptionResponse(parsedOutput, context)];
            case 7:
                response = __assign.apply(void 0, [__assign.apply(void 0, _e.concat([(_k.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 15];
            case 8:
                _f = [{}];
                return [4 /*yield*/, deserializeAws_queryLimitExceededExceptionResponse(parsedOutput, context)];
            case 9:
                response = __assign.apply(void 0, [__assign.apply(void 0, _f.concat([(_k.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 15];
            case 10:
                _g = [{}];
                return [4 /*yield*/, deserializeAws_queryRuleDoesNotExistExceptionResponse(parsedOutput, context)];
            case 11:
                response = __assign.apply(void 0, [__assign.apply(void 0, _g.concat([(_k.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 15];
            case 12:
                _h = [{}];
                return [4 /*yield*/, deserializeAws_queryRuleSetDoesNotExistExceptionResponse(parsedOutput, context)];
            case 13:
                response = __assign.apply(void 0, [__assign.apply(void 0, _h.concat([(_k.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 15];
            case 14:
                parsedBody = parsedOutput.body;
                errorCode = parsedBody.Error.code || parsedBody.Error.Code || errorCode;
                response = __assign(__assign({}, parsedBody.Error), { name: "" + errorCode, message: parsedBody.Error.message || parsedBody.Error.Message || errorCode, $fault: "client", $metadata: deserializeMetadata(output) });
                _k.label = 15;
            case 15:
                message = response.message || response.Message || errorCode;
                response.message = message;
                delete response.Message;
                return [2 /*return*/, Promise.reject(Object.assign(new Error(message), response))];
        }
    });
}); };
export var deserializeAws_queryUpdateTemplateCommand = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
    var data, contents, response;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                if (output.statusCode >= 300) {
                    return [2 /*return*/, deserializeAws_queryUpdateTemplateCommandError(output, context)];
                }
                return [4 /*yield*/, parseBody(output.body, context)];
            case 1:
                data = _a.sent();
                contents = {};
                contents = deserializeAws_queryUpdateTemplateResponse(data.UpdateTemplateResult, context);
                response = __assign({ $metadata: deserializeMetadata(output) }, contents);
                return [2 /*return*/, Promise.resolve(response)];
        }
    });
}); };
var deserializeAws_queryUpdateTemplateCommandError = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
    var parsedOutput, _a, response, errorCode, _b, _c, _d, parsedBody, message;
    var _e;
    return __generator(this, function (_f) {
        switch (_f.label) {
            case 0:
                _a = [__assign({}, output)];
                _e = {};
                return [4 /*yield*/, parseBody(output.body, context)];
            case 1:
                parsedOutput = __assign.apply(void 0, _a.concat([(_e.body = _f.sent(), _e)]));
                errorCode = "UnknownError";
                errorCode = loadQueryErrorCode(output, parsedOutput.body);
                _b = errorCode;
                switch (_b) {
                    case "InvalidTemplateException": return [3 /*break*/, 2];
                    case "com.amazonaws.ses#InvalidTemplateException": return [3 /*break*/, 2];
                    case "TemplateDoesNotExistException": return [3 /*break*/, 4];
                    case "com.amazonaws.ses#TemplateDoesNotExistException": return [3 /*break*/, 4];
                }
                return [3 /*break*/, 6];
            case 2:
                _c = [{}];
                return [4 /*yield*/, deserializeAws_queryInvalidTemplateExceptionResponse(parsedOutput, context)];
            case 3:
                response = __assign.apply(void 0, [__assign.apply(void 0, _c.concat([(_f.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 7];
            case 4:
                _d = [{}];
                return [4 /*yield*/, deserializeAws_queryTemplateDoesNotExistExceptionResponse(parsedOutput, context)];
            case 5:
                response = __assign.apply(void 0, [__assign.apply(void 0, _d.concat([(_f.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 7];
            case 6:
                parsedBody = parsedOutput.body;
                errorCode = parsedBody.Error.code || parsedBody.Error.Code || errorCode;
                response = __assign(__assign({}, parsedBody.Error), { name: "" + errorCode, message: parsedBody.Error.message || parsedBody.Error.Message || errorCode, $fault: "client", $metadata: deserializeMetadata(output) });
                _f.label = 7;
            case 7:
                message = response.message || response.Message || errorCode;
                response.message = message;
                delete response.Message;
                return [2 /*return*/, Promise.reject(Object.assign(new Error(message), response))];
        }
    });
}); };
export var deserializeAws_queryVerifyDomainDkimCommand = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
    var data, contents, response;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                if (output.statusCode >= 300) {
                    return [2 /*return*/, deserializeAws_queryVerifyDomainDkimCommandError(output, context)];
                }
                return [4 /*yield*/, parseBody(output.body, context)];
            case 1:
                data = _a.sent();
                contents = {};
                contents = deserializeAws_queryVerifyDomainDkimResponse(data.VerifyDomainDkimResult, context);
                response = __assign({ $metadata: deserializeMetadata(output) }, contents);
                return [2 /*return*/, Promise.resolve(response)];
        }
    });
}); };
var deserializeAws_queryVerifyDomainDkimCommandError = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
    var parsedOutput, _a, response, errorCode, parsedBody, message;
    var _b;
    return __generator(this, function (_c) {
        switch (_c.label) {
            case 0:
                _a = [__assign({}, output)];
                _b = {};
                return [4 /*yield*/, parseBody(output.body, context)];
            case 1:
                parsedOutput = __assign.apply(void 0, _a.concat([(_b.body = _c.sent(), _b)]));
                errorCode = "UnknownError";
                errorCode = loadQueryErrorCode(output, parsedOutput.body);
                switch (errorCode) {
                    default:
                        parsedBody = parsedOutput.body;
                        errorCode = parsedBody.Error.code || parsedBody.Error.Code || errorCode;
                        response = __assign(__assign({}, parsedBody.Error), { name: "" + errorCode, message: parsedBody.Error.message || parsedBody.Error.Message || errorCode, $fault: "client", $metadata: deserializeMetadata(output) });
                }
                message = response.message || response.Message || errorCode;
                response.message = message;
                delete response.Message;
                return [2 /*return*/, Promise.reject(Object.assign(new Error(message), response))];
        }
    });
}); };
export var deserializeAws_queryVerifyDomainIdentityCommand = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
    var data, contents, response;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                if (output.statusCode >= 300) {
                    return [2 /*return*/, deserializeAws_queryVerifyDomainIdentityCommandError(output, context)];
                }
                return [4 /*yield*/, parseBody(output.body, context)];
            case 1:
                data = _a.sent();
                contents = {};
                contents = deserializeAws_queryVerifyDomainIdentityResponse(data.VerifyDomainIdentityResult, context);
                response = __assign({ $metadata: deserializeMetadata(output) }, contents);
                return [2 /*return*/, Promise.resolve(response)];
        }
    });
}); };
var deserializeAws_queryVerifyDomainIdentityCommandError = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
    var parsedOutput, _a, response, errorCode, parsedBody, message;
    var _b;
    return __generator(this, function (_c) {
        switch (_c.label) {
            case 0:
                _a = [__assign({}, output)];
                _b = {};
                return [4 /*yield*/, parseBody(output.body, context)];
            case 1:
                parsedOutput = __assign.apply(void 0, _a.concat([(_b.body = _c.sent(), _b)]));
                errorCode = "UnknownError";
                errorCode = loadQueryErrorCode(output, parsedOutput.body);
                switch (errorCode) {
                    default:
                        parsedBody = parsedOutput.body;
                        errorCode = parsedBody.Error.code || parsedBody.Error.Code || errorCode;
                        response = __assign(__assign({}, parsedBody.Error), { name: "" + errorCode, message: parsedBody.Error.message || parsedBody.Error.Message || errorCode, $fault: "client", $metadata: deserializeMetadata(output) });
                }
                message = response.message || response.Message || errorCode;
                response.message = message;
                delete response.Message;
                return [2 /*return*/, Promise.reject(Object.assign(new Error(message), response))];
        }
    });
}); };
export var deserializeAws_queryVerifyEmailAddressCommand = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
    var response;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                if (output.statusCode >= 300) {
                    return [2 /*return*/, deserializeAws_queryVerifyEmailAddressCommandError(output, context)];
                }
                return [4 /*yield*/, collectBody(output.body, context)];
            case 1:
                _a.sent();
                response = {
                    $metadata: deserializeMetadata(output),
                };
                return [2 /*return*/, Promise.resolve(response)];
        }
    });
}); };
var deserializeAws_queryVerifyEmailAddressCommandError = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
    var parsedOutput, _a, response, errorCode, parsedBody, message;
    var _b;
    return __generator(this, function (_c) {
        switch (_c.label) {
            case 0:
                _a = [__assign({}, output)];
                _b = {};
                return [4 /*yield*/, parseBody(output.body, context)];
            case 1:
                parsedOutput = __assign.apply(void 0, _a.concat([(_b.body = _c.sent(), _b)]));
                errorCode = "UnknownError";
                errorCode = loadQueryErrorCode(output, parsedOutput.body);
                switch (errorCode) {
                    default:
                        parsedBody = parsedOutput.body;
                        errorCode = parsedBody.Error.code || parsedBody.Error.Code || errorCode;
                        response = __assign(__assign({}, parsedBody.Error), { name: "" + errorCode, message: parsedBody.Error.message || parsedBody.Error.Message || errorCode, $fault: "client", $metadata: deserializeMetadata(output) });
                }
                message = response.message || response.Message || errorCode;
                response.message = message;
                delete response.Message;
                return [2 /*return*/, Promise.reject(Object.assign(new Error(message), response))];
        }
    });
}); };
export var deserializeAws_queryVerifyEmailIdentityCommand = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
    var data, contents, response;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                if (output.statusCode >= 300) {
                    return [2 /*return*/, deserializeAws_queryVerifyEmailIdentityCommandError(output, context)];
                }
                return [4 /*yield*/, parseBody(output.body, context)];
            case 1:
                data = _a.sent();
                contents = {};
                contents = deserializeAws_queryVerifyEmailIdentityResponse(data.VerifyEmailIdentityResult, context);
                response = __assign({ $metadata: deserializeMetadata(output) }, contents);
                return [2 /*return*/, Promise.resolve(response)];
        }
    });
}); };
var deserializeAws_queryVerifyEmailIdentityCommandError = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
    var parsedOutput, _a, response, errorCode, parsedBody, message;
    var _b;
    return __generator(this, function (_c) {
        switch (_c.label) {
            case 0:
                _a = [__assign({}, output)];
                _b = {};
                return [4 /*yield*/, parseBody(output.body, context)];
            case 1:
                parsedOutput = __assign.apply(void 0, _a.concat([(_b.body = _c.sent(), _b)]));
                errorCode = "UnknownError";
                errorCode = loadQueryErrorCode(output, parsedOutput.body);
                switch (errorCode) {
                    default:
                        parsedBody = parsedOutput.body;
                        errorCode = parsedBody.Error.code || parsedBody.Error.Code || errorCode;
                        response = __assign(__assign({}, parsedBody.Error), { name: "" + errorCode, message: parsedBody.Error.message || parsedBody.Error.Message || errorCode, $fault: "client", $metadata: deserializeMetadata(output) });
                }
                message = response.message || response.Message || errorCode;
                response.message = message;
                delete response.Message;
                return [2 /*return*/, Promise.reject(Object.assign(new Error(message), response))];
        }
    });
}); };
var deserializeAws_queryAccountSendingPausedExceptionResponse = function (parsedOutput, context) { return __awaiter(void 0, void 0, void 0, function () {
    var body, deserialized, contents;
    return __generator(this, function (_a) {
        body = parsedOutput.body;
        deserialized = deserializeAws_queryAccountSendingPausedException(body.Error, context);
        contents = __assign({ name: "AccountSendingPausedException", $fault: "client", $metadata: deserializeMetadata(parsedOutput) }, deserialized);
        return [2 /*return*/, contents];
    });
}); };
var deserializeAws_queryAlreadyExistsExceptionResponse = function (parsedOutput, context) { return __awaiter(void 0, void 0, void 0, function () {
    var body, deserialized, contents;
    return __generator(this, function (_a) {
        body = parsedOutput.body;
        deserialized = deserializeAws_queryAlreadyExistsException(body.Error, context);
        contents = __assign({ name: "AlreadyExistsException", $fault: "client", $metadata: deserializeMetadata(parsedOutput) }, deserialized);
        return [2 /*return*/, contents];
    });
}); };
var deserializeAws_queryCannotDeleteExceptionResponse = function (parsedOutput, context) { return __awaiter(void 0, void 0, void 0, function () {
    var body, deserialized, contents;
    return __generator(this, function (_a) {
        body = parsedOutput.body;
        deserialized = deserializeAws_queryCannotDeleteException(body.Error, context);
        contents = __assign({ name: "CannotDeleteException", $fault: "client", $metadata: deserializeMetadata(parsedOutput) }, deserialized);
        return [2 /*return*/, contents];
    });
}); };
var deserializeAws_queryConfigurationSetAlreadyExistsExceptionResponse = function (parsedOutput, context) { return __awaiter(void 0, void 0, void 0, function () {
    var body, deserialized, contents;
    return __generator(this, function (_a) {
        body = parsedOutput.body;
        deserialized = deserializeAws_queryConfigurationSetAlreadyExistsException(body.Error, context);
        contents = __assign({ name: "ConfigurationSetAlreadyExistsException", $fault: "client", $metadata: deserializeMetadata(parsedOutput) }, deserialized);
        return [2 /*return*/, contents];
    });
}); };
var deserializeAws_queryConfigurationSetDoesNotExistExceptionResponse = function (parsedOutput, context) { return __awaiter(void 0, void 0, void 0, function () {
    var body, deserialized, contents;
    return __generator(this, function (_a) {
        body = parsedOutput.body;
        deserialized = deserializeAws_queryConfigurationSetDoesNotExistException(body.Error, context);
        contents = __assign({ name: "ConfigurationSetDoesNotExistException", $fault: "client", $metadata: deserializeMetadata(parsedOutput) }, deserialized);
        return [2 /*return*/, contents];
    });
}); };
var deserializeAws_queryConfigurationSetSendingPausedExceptionResponse = function (parsedOutput, context) { return __awaiter(void 0, void 0, void 0, function () {
    var body, deserialized, contents;
    return __generator(this, function (_a) {
        body = parsedOutput.body;
        deserialized = deserializeAws_queryConfigurationSetSendingPausedException(body.Error, context);
        contents = __assign({ name: "ConfigurationSetSendingPausedException", $fault: "client", $metadata: deserializeMetadata(parsedOutput) }, deserialized);
        return [2 /*return*/, contents];
    });
}); };
var deserializeAws_queryCustomVerificationEmailInvalidContentExceptionResponse = function (parsedOutput, context) { return __awaiter(void 0, void 0, void 0, function () {
    var body, deserialized, contents;
    return __generator(this, function (_a) {
        body = parsedOutput.body;
        deserialized = deserializeAws_queryCustomVerificationEmailInvalidContentException(body.Error, context);
        contents = __assign({ name: "CustomVerificationEmailInvalidContentException", $fault: "client", $metadata: deserializeMetadata(parsedOutput) }, deserialized);
        return [2 /*return*/, contents];
    });
}); };
var deserializeAws_queryCustomVerificationEmailTemplateAlreadyExistsExceptionResponse = function (parsedOutput, context) { return __awaiter(void 0, void 0, void 0, function () {
    var body, deserialized, contents;
    return __generator(this, function (_a) {
        body = parsedOutput.body;
        deserialized = deserializeAws_queryCustomVerificationEmailTemplateAlreadyExistsException(body.Error, context);
        contents = __assign({ name: "CustomVerificationEmailTemplateAlreadyExistsException", $fault: "client", $metadata: deserializeMetadata(parsedOutput) }, deserialized);
        return [2 /*return*/, contents];
    });
}); };
var deserializeAws_queryCustomVerificationEmailTemplateDoesNotExistExceptionResponse = function (parsedOutput, context) { return __awaiter(void 0, void 0, void 0, function () {
    var body, deserialized, contents;
    return __generator(this, function (_a) {
        body = parsedOutput.body;
        deserialized = deserializeAws_queryCustomVerificationEmailTemplateDoesNotExistException(body.Error, context);
        contents = __assign({ name: "CustomVerificationEmailTemplateDoesNotExistException", $fault: "client", $metadata: deserializeMetadata(parsedOutput) }, deserialized);
        return [2 /*return*/, contents];
    });
}); };
var deserializeAws_queryEventDestinationAlreadyExistsExceptionResponse = function (parsedOutput, context) { return __awaiter(void 0, void 0, void 0, function () {
    var body, deserialized, contents;
    return __generator(this, function (_a) {
        body = parsedOutput.body;
        deserialized = deserializeAws_queryEventDestinationAlreadyExistsException(body.Error, context);
        contents = __assign({ name: "EventDestinationAlreadyExistsException", $fault: "client", $metadata: deserializeMetadata(parsedOutput) }, deserialized);
        return [2 /*return*/, contents];
    });
}); };
var deserializeAws_queryEventDestinationDoesNotExistExceptionResponse = function (parsedOutput, context) { return __awaiter(void 0, void 0, void 0, function () {
    var body, deserialized, contents;
    return __generator(this, function (_a) {
        body = parsedOutput.body;
        deserialized = deserializeAws_queryEventDestinationDoesNotExistException(body.Error, context);
        contents = __assign({ name: "EventDestinationDoesNotExistException", $fault: "client", $metadata: deserializeMetadata(parsedOutput) }, deserialized);
        return [2 /*return*/, contents];
    });
}); };
var deserializeAws_queryFromEmailAddressNotVerifiedExceptionResponse = function (parsedOutput, context) { return __awaiter(void 0, void 0, void 0, function () {
    var body, deserialized, contents;
    return __generator(this, function (_a) {
        body = parsedOutput.body;
        deserialized = deserializeAws_queryFromEmailAddressNotVerifiedException(body.Error, context);
        contents = __assign({ name: "FromEmailAddressNotVerifiedException", $fault: "client", $metadata: deserializeMetadata(parsedOutput) }, deserialized);
        return [2 /*return*/, contents];
    });
}); };
var deserializeAws_queryInvalidCloudWatchDestinationExceptionResponse = function (parsedOutput, context) { return __awaiter(void 0, void 0, void 0, function () {
    var body, deserialized, contents;
    return __generator(this, function (_a) {
        body = parsedOutput.body;
        deserialized = deserializeAws_queryInvalidCloudWatchDestinationException(body.Error, context);
        contents = __assign({ name: "InvalidCloudWatchDestinationException", $fault: "client", $metadata: deserializeMetadata(parsedOutput) }, deserialized);
        return [2 /*return*/, contents];
    });
}); };
var deserializeAws_queryInvalidConfigurationSetExceptionResponse = function (parsedOutput, context) { return __awaiter(void 0, void 0, void 0, function () {
    var body, deserialized, contents;
    return __generator(this, function (_a) {
        body = parsedOutput.body;
        deserialized = deserializeAws_queryInvalidConfigurationSetException(body.Error, context);
        contents = __assign({ name: "InvalidConfigurationSetException", $fault: "client", $metadata: deserializeMetadata(parsedOutput) }, deserialized);
        return [2 /*return*/, contents];
    });
}); };
var deserializeAws_queryInvalidDeliveryOptionsExceptionResponse = function (parsedOutput, context) { return __awaiter(void 0, void 0, void 0, function () {
    var body, deserialized, contents;
    return __generator(this, function (_a) {
        body = parsedOutput.body;
        deserialized = deserializeAws_queryInvalidDeliveryOptionsException(body.Error, context);
        contents = __assign({ name: "InvalidDeliveryOptionsException", $fault: "client", $metadata: deserializeMetadata(parsedOutput) }, deserialized);
        return [2 /*return*/, contents];
    });
}); };
var deserializeAws_queryInvalidFirehoseDestinationExceptionResponse = function (parsedOutput, context) { return __awaiter(void 0, void 0, void 0, function () {
    var body, deserialized, contents;
    return __generator(this, function (_a) {
        body = parsedOutput.body;
        deserialized = deserializeAws_queryInvalidFirehoseDestinationException(body.Error, context);
        contents = __assign({ name: "InvalidFirehoseDestinationException", $fault: "client", $metadata: deserializeMetadata(parsedOutput) }, deserialized);
        return [2 /*return*/, contents];
    });
}); };
var deserializeAws_queryInvalidLambdaFunctionExceptionResponse = function (parsedOutput, context) { return __awaiter(void 0, void 0, void 0, function () {
    var body, deserialized, contents;
    return __generator(this, function (_a) {
        body = parsedOutput.body;
        deserialized = deserializeAws_queryInvalidLambdaFunctionException(body.Error, context);
        contents = __assign({ name: "InvalidLambdaFunctionException", $fault: "client", $metadata: deserializeMetadata(parsedOutput) }, deserialized);
        return [2 /*return*/, contents];
    });
}); };
var deserializeAws_queryInvalidPolicyExceptionResponse = function (parsedOutput, context) { return __awaiter(void 0, void 0, void 0, function () {
    var body, deserialized, contents;
    return __generator(this, function (_a) {
        body = parsedOutput.body;
        deserialized = deserializeAws_queryInvalidPolicyException(body.Error, context);
        contents = __assign({ name: "InvalidPolicyException", $fault: "client", $metadata: deserializeMetadata(parsedOutput) }, deserialized);
        return [2 /*return*/, contents];
    });
}); };
var deserializeAws_queryInvalidRenderingParameterExceptionResponse = function (parsedOutput, context) { return __awaiter(void 0, void 0, void 0, function () {
    var body, deserialized, contents;
    return __generator(this, function (_a) {
        body = parsedOutput.body;
        deserialized = deserializeAws_queryInvalidRenderingParameterException(body.Error, context);
        contents = __assign({ name: "InvalidRenderingParameterException", $fault: "client", $metadata: deserializeMetadata(parsedOutput) }, deserialized);
        return [2 /*return*/, contents];
    });
}); };
var deserializeAws_queryInvalidS3ConfigurationExceptionResponse = function (parsedOutput, context) { return __awaiter(void 0, void 0, void 0, function () {
    var body, deserialized, contents;
    return __generator(this, function (_a) {
        body = parsedOutput.body;
        deserialized = deserializeAws_queryInvalidS3ConfigurationException(body.Error, context);
        contents = __assign({ name: "InvalidS3ConfigurationException", $fault: "client", $metadata: deserializeMetadata(parsedOutput) }, deserialized);
        return [2 /*return*/, contents];
    });
}); };
var deserializeAws_queryInvalidSNSDestinationExceptionResponse = function (parsedOutput, context) { return __awaiter(void 0, void 0, void 0, function () {
    var body, deserialized, contents;
    return __generator(this, function (_a) {
        body = parsedOutput.body;
        deserialized = deserializeAws_queryInvalidSNSDestinationException(body.Error, context);
        contents = __assign({ name: "InvalidSNSDestinationException", $fault: "client", $metadata: deserializeMetadata(parsedOutput) }, deserialized);
        return [2 /*return*/, contents];
    });
}); };
var deserializeAws_queryInvalidSnsTopicExceptionResponse = function (parsedOutput, context) { return __awaiter(void 0, void 0, void 0, function () {
    var body, deserialized, contents;
    return __generator(this, function (_a) {
        body = parsedOutput.body;
        deserialized = deserializeAws_queryInvalidSnsTopicException(body.Error, context);
        contents = __assign({ name: "InvalidSnsTopicException", $fault: "client", $metadata: deserializeMetadata(parsedOutput) }, deserialized);
        return [2 /*return*/, contents];
    });
}); };
var deserializeAws_queryInvalidTemplateExceptionResponse = function (parsedOutput, context) { return __awaiter(void 0, void 0, void 0, function () {
    var body, deserialized, contents;
    return __generator(this, function (_a) {
        body = parsedOutput.body;
        deserialized = deserializeAws_queryInvalidTemplateException(body.Error, context);
        contents = __assign({ name: "InvalidTemplateException", $fault: "client", $metadata: deserializeMetadata(parsedOutput) }, deserialized);
        return [2 /*return*/, contents];
    });
}); };
var deserializeAws_queryInvalidTrackingOptionsExceptionResponse = function (parsedOutput, context) { return __awaiter(void 0, void 0, void 0, function () {
    var body, deserialized, contents;
    return __generator(this, function (_a) {
        body = parsedOutput.body;
        deserialized = deserializeAws_queryInvalidTrackingOptionsException(body.Error, context);
        contents = __assign({ name: "InvalidTrackingOptionsException", $fault: "client", $metadata: deserializeMetadata(parsedOutput) }, deserialized);
        return [2 /*return*/, contents];
    });
}); };
var deserializeAws_queryLimitExceededExceptionResponse = function (parsedOutput, context) { return __awaiter(void 0, void 0, void 0, function () {
    var body, deserialized, contents;
    return __generator(this, function (_a) {
        body = parsedOutput.body;
        deserialized = deserializeAws_queryLimitExceededException(body.Error, context);
        contents = __assign({ name: "LimitExceededException", $fault: "client", $metadata: deserializeMetadata(parsedOutput) }, deserialized);
        return [2 /*return*/, contents];
    });
}); };
var deserializeAws_queryMailFromDomainNotVerifiedExceptionResponse = function (parsedOutput, context) { return __awaiter(void 0, void 0, void 0, function () {
    var body, deserialized, contents;
    return __generator(this, function (_a) {
        body = parsedOutput.body;
        deserialized = deserializeAws_queryMailFromDomainNotVerifiedException(body.Error, context);
        contents = __assign({ name: "MailFromDomainNotVerifiedException", $fault: "client", $metadata: deserializeMetadata(parsedOutput) }, deserialized);
        return [2 /*return*/, contents];
    });
}); };
var deserializeAws_queryMessageRejectedResponse = function (parsedOutput, context) { return __awaiter(void 0, void 0, void 0, function () {
    var body, deserialized, contents;
    return __generator(this, function (_a) {
        body = parsedOutput.body;
        deserialized = deserializeAws_queryMessageRejected(body.Error, context);
        contents = __assign({ name: "MessageRejected", $fault: "client", $metadata: deserializeMetadata(parsedOutput) }, deserialized);
        return [2 /*return*/, contents];
    });
}); };
var deserializeAws_queryMissingRenderingAttributeExceptionResponse = function (parsedOutput, context) { return __awaiter(void 0, void 0, void 0, function () {
    var body, deserialized, contents;
    return __generator(this, function (_a) {
        body = parsedOutput.body;
        deserialized = deserializeAws_queryMissingRenderingAttributeException(body.Error, context);
        contents = __assign({ name: "MissingRenderingAttributeException", $fault: "client", $metadata: deserializeMetadata(parsedOutput) }, deserialized);
        return [2 /*return*/, contents];
    });
}); };
var deserializeAws_queryProductionAccessNotGrantedExceptionResponse = function (parsedOutput, context) { return __awaiter(void 0, void 0, void 0, function () {
    var body, deserialized, contents;
    return __generator(this, function (_a) {
        body = parsedOutput.body;
        deserialized = deserializeAws_queryProductionAccessNotGrantedException(body.Error, context);
        contents = __assign({ name: "ProductionAccessNotGrantedException", $fault: "client", $metadata: deserializeMetadata(parsedOutput) }, deserialized);
        return [2 /*return*/, contents];
    });
}); };
var deserializeAws_queryRuleDoesNotExistExceptionResponse = function (parsedOutput, context) { return __awaiter(void 0, void 0, void 0, function () {
    var body, deserialized, contents;
    return __generator(this, function (_a) {
        body = parsedOutput.body;
        deserialized = deserializeAws_queryRuleDoesNotExistException(body.Error, context);
        contents = __assign({ name: "RuleDoesNotExistException", $fault: "client", $metadata: deserializeMetadata(parsedOutput) }, deserialized);
        return [2 /*return*/, contents];
    });
}); };
var deserializeAws_queryRuleSetDoesNotExistExceptionResponse = function (parsedOutput, context) { return __awaiter(void 0, void 0, void 0, function () {
    var body, deserialized, contents;
    return __generator(this, function (_a) {
        body = parsedOutput.body;
        deserialized = deserializeAws_queryRuleSetDoesNotExistException(body.Error, context);
        contents = __assign({ name: "RuleSetDoesNotExistException", $fault: "client", $metadata: deserializeMetadata(parsedOutput) }, deserialized);
        return [2 /*return*/, contents];
    });
}); };
var deserializeAws_queryTemplateDoesNotExistExceptionResponse = function (parsedOutput, context) { return __awaiter(void 0, void 0, void 0, function () {
    var body, deserialized, contents;
    return __generator(this, function (_a) {
        body = parsedOutput.body;
        deserialized = deserializeAws_queryTemplateDoesNotExistException(body.Error, context);
        contents = __assign({ name: "TemplateDoesNotExistException", $fault: "client", $metadata: deserializeMetadata(parsedOutput) }, deserialized);
        return [2 /*return*/, contents];
    });
}); };
var deserializeAws_queryTrackingOptionsAlreadyExistsExceptionResponse = function (parsedOutput, context) { return __awaiter(void 0, void 0, void 0, function () {
    var body, deserialized, contents;
    return __generator(this, function (_a) {
        body = parsedOutput.body;
        deserialized = deserializeAws_queryTrackingOptionsAlreadyExistsException(body.Error, context);
        contents = __assign({ name: "TrackingOptionsAlreadyExistsException", $fault: "client", $metadata: deserializeMetadata(parsedOutput) }, deserialized);
        return [2 /*return*/, contents];
    });
}); };
var deserializeAws_queryTrackingOptionsDoesNotExistExceptionResponse = function (parsedOutput, context) { return __awaiter(void 0, void 0, void 0, function () {
    var body, deserialized, contents;
    return __generator(this, function (_a) {
        body = parsedOutput.body;
        deserialized = deserializeAws_queryTrackingOptionsDoesNotExistException(body.Error, context);
        contents = __assign({ name: "TrackingOptionsDoesNotExistException", $fault: "client", $metadata: deserializeMetadata(parsedOutput) }, deserialized);
        return [2 /*return*/, contents];
    });
}); };
var serializeAws_queryAddHeaderAction = function (input, context) {
    var entries = {};
    if (input.HeaderName !== undefined && input.HeaderName !== null) {
        entries["HeaderName"] = input.HeaderName;
    }
    if (input.HeaderValue !== undefined && input.HeaderValue !== null) {
        entries["HeaderValue"] = input.HeaderValue;
    }
    return entries;
};
var serializeAws_queryAddressList = function (input, context) {
    var e_1, _a;
    var entries = {};
    var counter = 1;
    try {
        for (var input_1 = __values(input), input_1_1 = input_1.next(); !input_1_1.done; input_1_1 = input_1.next()) {
            var entry = input_1_1.value;
            if (entry === null) {
                continue;
            }
            entries["member." + counter] = entry;
            counter++;
        }
    }
    catch (e_1_1) { e_1 = { error: e_1_1 }; }
    finally {
        try {
            if (input_1_1 && !input_1_1.done && (_a = input_1.return)) _a.call(input_1);
        }
        finally { if (e_1) throw e_1.error; }
    }
    return entries;
};
var serializeAws_queryBody = function (input, context) {
    var entries = {};
    if (input.Text !== undefined && input.Text !== null) {
        var memberEntries = serializeAws_queryContent(input.Text, context);
        Object.entries(memberEntries).forEach(function (_a) {
            var _b = __read(_a, 2), key = _b[0], value = _b[1];
            var loc = "Text." + key;
            entries[loc] = value;
        });
    }
    if (input.Html !== undefined && input.Html !== null) {
        var memberEntries = serializeAws_queryContent(input.Html, context);
        Object.entries(memberEntries).forEach(function (_a) {
            var _b = __read(_a, 2), key = _b[0], value = _b[1];
            var loc = "Html." + key;
            entries[loc] = value;
        });
    }
    return entries;
};
var serializeAws_queryBounceAction = function (input, context) {
    var entries = {};
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
var serializeAws_queryBouncedRecipientInfo = function (input, context) {
    var entries = {};
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
        var memberEntries = serializeAws_queryRecipientDsnFields(input.RecipientDsnFields, context);
        Object.entries(memberEntries).forEach(function (_a) {
            var _b = __read(_a, 2), key = _b[0], value = _b[1];
            var loc = "RecipientDsnFields." + key;
            entries[loc] = value;
        });
    }
    return entries;
};
var serializeAws_queryBouncedRecipientInfoList = function (input, context) {
    var e_2, _a;
    var entries = {};
    var counter = 1;
    try {
        for (var input_2 = __values(input), input_2_1 = input_2.next(); !input_2_1.done; input_2_1 = input_2.next()) {
            var entry = input_2_1.value;
            if (entry === null) {
                continue;
            }
            var memberEntries = serializeAws_queryBouncedRecipientInfo(entry, context);
            Object.entries(memberEntries).forEach(function (_a) {
                var _b = __read(_a, 2), key = _b[0], value = _b[1];
                entries["member." + counter + "." + key] = value;
            });
            counter++;
        }
    }
    catch (e_2_1) { e_2 = { error: e_2_1 }; }
    finally {
        try {
            if (input_2_1 && !input_2_1.done && (_a = input_2.return)) _a.call(input_2);
        }
        finally { if (e_2) throw e_2.error; }
    }
    return entries;
};
var serializeAws_queryBulkEmailDestination = function (input, context) {
    var entries = {};
    if (input.Destination !== undefined && input.Destination !== null) {
        var memberEntries = serializeAws_queryDestination(input.Destination, context);
        Object.entries(memberEntries).forEach(function (_a) {
            var _b = __read(_a, 2), key = _b[0], value = _b[1];
            var loc = "Destination." + key;
            entries[loc] = value;
        });
    }
    if (input.ReplacementTags !== undefined && input.ReplacementTags !== null) {
        var memberEntries = serializeAws_queryMessageTagList(input.ReplacementTags, context);
        Object.entries(memberEntries).forEach(function (_a) {
            var _b = __read(_a, 2), key = _b[0], value = _b[1];
            var loc = "ReplacementTags." + key;
            entries[loc] = value;
        });
    }
    if (input.ReplacementTemplateData !== undefined && input.ReplacementTemplateData !== null) {
        entries["ReplacementTemplateData"] = input.ReplacementTemplateData;
    }
    return entries;
};
var serializeAws_queryBulkEmailDestinationList = function (input, context) {
    var e_3, _a;
    var entries = {};
    var counter = 1;
    try {
        for (var input_3 = __values(input), input_3_1 = input_3.next(); !input_3_1.done; input_3_1 = input_3.next()) {
            var entry = input_3_1.value;
            if (entry === null) {
                continue;
            }
            var memberEntries = serializeAws_queryBulkEmailDestination(entry, context);
            Object.entries(memberEntries).forEach(function (_a) {
                var _b = __read(_a, 2), key = _b[0], value = _b[1];
                entries["member." + counter + "." + key] = value;
            });
            counter++;
        }
    }
    catch (e_3_1) { e_3 = { error: e_3_1 }; }
    finally {
        try {
            if (input_3_1 && !input_3_1.done && (_a = input_3.return)) _a.call(input_3);
        }
        finally { if (e_3) throw e_3.error; }
    }
    return entries;
};
var serializeAws_queryCloneReceiptRuleSetRequest = function (input, context) {
    var entries = {};
    if (input.RuleSetName !== undefined && input.RuleSetName !== null) {
        entries["RuleSetName"] = input.RuleSetName;
    }
    if (input.OriginalRuleSetName !== undefined && input.OriginalRuleSetName !== null) {
        entries["OriginalRuleSetName"] = input.OriginalRuleSetName;
    }
    return entries;
};
var serializeAws_queryCloudWatchDestination = function (input, context) {
    var entries = {};
    if (input.DimensionConfigurations !== undefined && input.DimensionConfigurations !== null) {
        var memberEntries = serializeAws_queryCloudWatchDimensionConfigurations(input.DimensionConfigurations, context);
        Object.entries(memberEntries).forEach(function (_a) {
            var _b = __read(_a, 2), key = _b[0], value = _b[1];
            var loc = "DimensionConfigurations." + key;
            entries[loc] = value;
        });
    }
    return entries;
};
var serializeAws_queryCloudWatchDimensionConfiguration = function (input, context) {
    var entries = {};
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
var serializeAws_queryCloudWatchDimensionConfigurations = function (input, context) {
    var e_4, _a;
    var entries = {};
    var counter = 1;
    try {
        for (var input_4 = __values(input), input_4_1 = input_4.next(); !input_4_1.done; input_4_1 = input_4.next()) {
            var entry = input_4_1.value;
            if (entry === null) {
                continue;
            }
            var memberEntries = serializeAws_queryCloudWatchDimensionConfiguration(entry, context);
            Object.entries(memberEntries).forEach(function (_a) {
                var _b = __read(_a, 2), key = _b[0], value = _b[1];
                entries["member." + counter + "." + key] = value;
            });
            counter++;
        }
    }
    catch (e_4_1) { e_4 = { error: e_4_1 }; }
    finally {
        try {
            if (input_4_1 && !input_4_1.done && (_a = input_4.return)) _a.call(input_4);
        }
        finally { if (e_4) throw e_4.error; }
    }
    return entries;
};
var serializeAws_queryConfigurationSet = function (input, context) {
    var entries = {};
    if (input.Name !== undefined && input.Name !== null) {
        entries["Name"] = input.Name;
    }
    return entries;
};
var serializeAws_queryConfigurationSetAttributeList = function (input, context) {
    var e_5, _a;
    var entries = {};
    var counter = 1;
    try {
        for (var input_5 = __values(input), input_5_1 = input_5.next(); !input_5_1.done; input_5_1 = input_5.next()) {
            var entry = input_5_1.value;
            if (entry === null) {
                continue;
            }
            entries["member." + counter] = entry;
            counter++;
        }
    }
    catch (e_5_1) { e_5 = { error: e_5_1 }; }
    finally {
        try {
            if (input_5_1 && !input_5_1.done && (_a = input_5.return)) _a.call(input_5);
        }
        finally { if (e_5) throw e_5.error; }
    }
    return entries;
};
var serializeAws_queryContent = function (input, context) {
    var entries = {};
    if (input.Data !== undefined && input.Data !== null) {
        entries["Data"] = input.Data;
    }
    if (input.Charset !== undefined && input.Charset !== null) {
        entries["Charset"] = input.Charset;
    }
    return entries;
};
var serializeAws_queryCreateConfigurationSetEventDestinationRequest = function (input, context) {
    var entries = {};
    if (input.ConfigurationSetName !== undefined && input.ConfigurationSetName !== null) {
        entries["ConfigurationSetName"] = input.ConfigurationSetName;
    }
    if (input.EventDestination !== undefined && input.EventDestination !== null) {
        var memberEntries = serializeAws_queryEventDestination(input.EventDestination, context);
        Object.entries(memberEntries).forEach(function (_a) {
            var _b = __read(_a, 2), key = _b[0], value = _b[1];
            var loc = "EventDestination." + key;
            entries[loc] = value;
        });
    }
    return entries;
};
var serializeAws_queryCreateConfigurationSetRequest = function (input, context) {
    var entries = {};
    if (input.ConfigurationSet !== undefined && input.ConfigurationSet !== null) {
        var memberEntries = serializeAws_queryConfigurationSet(input.ConfigurationSet, context);
        Object.entries(memberEntries).forEach(function (_a) {
            var _b = __read(_a, 2), key = _b[0], value = _b[1];
            var loc = "ConfigurationSet." + key;
            entries[loc] = value;
        });
    }
    return entries;
};
var serializeAws_queryCreateConfigurationSetTrackingOptionsRequest = function (input, context) {
    var entries = {};
    if (input.ConfigurationSetName !== undefined && input.ConfigurationSetName !== null) {
        entries["ConfigurationSetName"] = input.ConfigurationSetName;
    }
    if (input.TrackingOptions !== undefined && input.TrackingOptions !== null) {
        var memberEntries = serializeAws_queryTrackingOptions(input.TrackingOptions, context);
        Object.entries(memberEntries).forEach(function (_a) {
            var _b = __read(_a, 2), key = _b[0], value = _b[1];
            var loc = "TrackingOptions." + key;
            entries[loc] = value;
        });
    }
    return entries;
};
var serializeAws_queryCreateCustomVerificationEmailTemplateRequest = function (input, context) {
    var entries = {};
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
var serializeAws_queryCreateReceiptFilterRequest = function (input, context) {
    var entries = {};
    if (input.Filter !== undefined && input.Filter !== null) {
        var memberEntries = serializeAws_queryReceiptFilter(input.Filter, context);
        Object.entries(memberEntries).forEach(function (_a) {
            var _b = __read(_a, 2), key = _b[0], value = _b[1];
            var loc = "Filter." + key;
            entries[loc] = value;
        });
    }
    return entries;
};
var serializeAws_queryCreateReceiptRuleRequest = function (input, context) {
    var entries = {};
    if (input.RuleSetName !== undefined && input.RuleSetName !== null) {
        entries["RuleSetName"] = input.RuleSetName;
    }
    if (input.After !== undefined && input.After !== null) {
        entries["After"] = input.After;
    }
    if (input.Rule !== undefined && input.Rule !== null) {
        var memberEntries = serializeAws_queryReceiptRule(input.Rule, context);
        Object.entries(memberEntries).forEach(function (_a) {
            var _b = __read(_a, 2), key = _b[0], value = _b[1];
            var loc = "Rule." + key;
            entries[loc] = value;
        });
    }
    return entries;
};
var serializeAws_queryCreateReceiptRuleSetRequest = function (input, context) {
    var entries = {};
    if (input.RuleSetName !== undefined && input.RuleSetName !== null) {
        entries["RuleSetName"] = input.RuleSetName;
    }
    return entries;
};
var serializeAws_queryCreateTemplateRequest = function (input, context) {
    var entries = {};
    if (input.Template !== undefined && input.Template !== null) {
        var memberEntries = serializeAws_queryTemplate(input.Template, context);
        Object.entries(memberEntries).forEach(function (_a) {
            var _b = __read(_a, 2), key = _b[0], value = _b[1];
            var loc = "Template." + key;
            entries[loc] = value;
        });
    }
    return entries;
};
var serializeAws_queryDeleteConfigurationSetEventDestinationRequest = function (input, context) {
    var entries = {};
    if (input.ConfigurationSetName !== undefined && input.ConfigurationSetName !== null) {
        entries["ConfigurationSetName"] = input.ConfigurationSetName;
    }
    if (input.EventDestinationName !== undefined && input.EventDestinationName !== null) {
        entries["EventDestinationName"] = input.EventDestinationName;
    }
    return entries;
};
var serializeAws_queryDeleteConfigurationSetRequest = function (input, context) {
    var entries = {};
    if (input.ConfigurationSetName !== undefined && input.ConfigurationSetName !== null) {
        entries["ConfigurationSetName"] = input.ConfigurationSetName;
    }
    return entries;
};
var serializeAws_queryDeleteConfigurationSetTrackingOptionsRequest = function (input, context) {
    var entries = {};
    if (input.ConfigurationSetName !== undefined && input.ConfigurationSetName !== null) {
        entries["ConfigurationSetName"] = input.ConfigurationSetName;
    }
    return entries;
};
var serializeAws_queryDeleteCustomVerificationEmailTemplateRequest = function (input, context) {
    var entries = {};
    if (input.TemplateName !== undefined && input.TemplateName !== null) {
        entries["TemplateName"] = input.TemplateName;
    }
    return entries;
};
var serializeAws_queryDeleteIdentityPolicyRequest = function (input, context) {
    var entries = {};
    if (input.Identity !== undefined && input.Identity !== null) {
        entries["Identity"] = input.Identity;
    }
    if (input.PolicyName !== undefined && input.PolicyName !== null) {
        entries["PolicyName"] = input.PolicyName;
    }
    return entries;
};
var serializeAws_queryDeleteIdentityRequest = function (input, context) {
    var entries = {};
    if (input.Identity !== undefined && input.Identity !== null) {
        entries["Identity"] = input.Identity;
    }
    return entries;
};
var serializeAws_queryDeleteReceiptFilterRequest = function (input, context) {
    var entries = {};
    if (input.FilterName !== undefined && input.FilterName !== null) {
        entries["FilterName"] = input.FilterName;
    }
    return entries;
};
var serializeAws_queryDeleteReceiptRuleRequest = function (input, context) {
    var entries = {};
    if (input.RuleSetName !== undefined && input.RuleSetName !== null) {
        entries["RuleSetName"] = input.RuleSetName;
    }
    if (input.RuleName !== undefined && input.RuleName !== null) {
        entries["RuleName"] = input.RuleName;
    }
    return entries;
};
var serializeAws_queryDeleteReceiptRuleSetRequest = function (input, context) {
    var entries = {};
    if (input.RuleSetName !== undefined && input.RuleSetName !== null) {
        entries["RuleSetName"] = input.RuleSetName;
    }
    return entries;
};
var serializeAws_queryDeleteTemplateRequest = function (input, context) {
    var entries = {};
    if (input.TemplateName !== undefined && input.TemplateName !== null) {
        entries["TemplateName"] = input.TemplateName;
    }
    return entries;
};
var serializeAws_queryDeleteVerifiedEmailAddressRequest = function (input, context) {
    var entries = {};
    if (input.EmailAddress !== undefined && input.EmailAddress !== null) {
        entries["EmailAddress"] = input.EmailAddress;
    }
    return entries;
};
var serializeAws_queryDeliveryOptions = function (input, context) {
    var entries = {};
    if (input.TlsPolicy !== undefined && input.TlsPolicy !== null) {
        entries["TlsPolicy"] = input.TlsPolicy;
    }
    return entries;
};
var serializeAws_queryDescribeActiveReceiptRuleSetRequest = function (input, context) {
    var entries = {};
    return entries;
};
var serializeAws_queryDescribeConfigurationSetRequest = function (input, context) {
    var entries = {};
    if (input.ConfigurationSetName !== undefined && input.ConfigurationSetName !== null) {
        entries["ConfigurationSetName"] = input.ConfigurationSetName;
    }
    if (input.ConfigurationSetAttributeNames !== undefined && input.ConfigurationSetAttributeNames !== null) {
        var memberEntries = serializeAws_queryConfigurationSetAttributeList(input.ConfigurationSetAttributeNames, context);
        Object.entries(memberEntries).forEach(function (_a) {
            var _b = __read(_a, 2), key = _b[0], value = _b[1];
            var loc = "ConfigurationSetAttributeNames." + key;
            entries[loc] = value;
        });
    }
    return entries;
};
var serializeAws_queryDescribeReceiptRuleRequest = function (input, context) {
    var entries = {};
    if (input.RuleSetName !== undefined && input.RuleSetName !== null) {
        entries["RuleSetName"] = input.RuleSetName;
    }
    if (input.RuleName !== undefined && input.RuleName !== null) {
        entries["RuleName"] = input.RuleName;
    }
    return entries;
};
var serializeAws_queryDescribeReceiptRuleSetRequest = function (input, context) {
    var entries = {};
    if (input.RuleSetName !== undefined && input.RuleSetName !== null) {
        entries["RuleSetName"] = input.RuleSetName;
    }
    return entries;
};
var serializeAws_queryDestination = function (input, context) {
    var entries = {};
    if (input.ToAddresses !== undefined && input.ToAddresses !== null) {
        var memberEntries = serializeAws_queryAddressList(input.ToAddresses, context);
        Object.entries(memberEntries).forEach(function (_a) {
            var _b = __read(_a, 2), key = _b[0], value = _b[1];
            var loc = "ToAddresses." + key;
            entries[loc] = value;
        });
    }
    if (input.CcAddresses !== undefined && input.CcAddresses !== null) {
        var memberEntries = serializeAws_queryAddressList(input.CcAddresses, context);
        Object.entries(memberEntries).forEach(function (_a) {
            var _b = __read(_a, 2), key = _b[0], value = _b[1];
            var loc = "CcAddresses." + key;
            entries[loc] = value;
        });
    }
    if (input.BccAddresses !== undefined && input.BccAddresses !== null) {
        var memberEntries = serializeAws_queryAddressList(input.BccAddresses, context);
        Object.entries(memberEntries).forEach(function (_a) {
            var _b = __read(_a, 2), key = _b[0], value = _b[1];
            var loc = "BccAddresses." + key;
            entries[loc] = value;
        });
    }
    return entries;
};
var serializeAws_queryEventDestination = function (input, context) {
    var entries = {};
    if (input.Name !== undefined && input.Name !== null) {
        entries["Name"] = input.Name;
    }
    if (input.Enabled !== undefined && input.Enabled !== null) {
        entries["Enabled"] = input.Enabled;
    }
    if (input.MatchingEventTypes !== undefined && input.MatchingEventTypes !== null) {
        var memberEntries = serializeAws_queryEventTypes(input.MatchingEventTypes, context);
        Object.entries(memberEntries).forEach(function (_a) {
            var _b = __read(_a, 2), key = _b[0], value = _b[1];
            var loc = "MatchingEventTypes." + key;
            entries[loc] = value;
        });
    }
    if (input.KinesisFirehoseDestination !== undefined && input.KinesisFirehoseDestination !== null) {
        var memberEntries = serializeAws_queryKinesisFirehoseDestination(input.KinesisFirehoseDestination, context);
        Object.entries(memberEntries).forEach(function (_a) {
            var _b = __read(_a, 2), key = _b[0], value = _b[1];
            var loc = "KinesisFirehoseDestination." + key;
            entries[loc] = value;
        });
    }
    if (input.CloudWatchDestination !== undefined && input.CloudWatchDestination !== null) {
        var memberEntries = serializeAws_queryCloudWatchDestination(input.CloudWatchDestination, context);
        Object.entries(memberEntries).forEach(function (_a) {
            var _b = __read(_a, 2), key = _b[0], value = _b[1];
            var loc = "CloudWatchDestination." + key;
            entries[loc] = value;
        });
    }
    if (input.SNSDestination !== undefined && input.SNSDestination !== null) {
        var memberEntries = serializeAws_querySNSDestination(input.SNSDestination, context);
        Object.entries(memberEntries).forEach(function (_a) {
            var _b = __read(_a, 2), key = _b[0], value = _b[1];
            var loc = "SNSDestination." + key;
            entries[loc] = value;
        });
    }
    return entries;
};
var serializeAws_queryEventTypes = function (input, context) {
    var e_6, _a;
    var entries = {};
    var counter = 1;
    try {
        for (var input_6 = __values(input), input_6_1 = input_6.next(); !input_6_1.done; input_6_1 = input_6.next()) {
            var entry = input_6_1.value;
            if (entry === null) {
                continue;
            }
            entries["member." + counter] = entry;
            counter++;
        }
    }
    catch (e_6_1) { e_6 = { error: e_6_1 }; }
    finally {
        try {
            if (input_6_1 && !input_6_1.done && (_a = input_6.return)) _a.call(input_6);
        }
        finally { if (e_6) throw e_6.error; }
    }
    return entries;
};
var serializeAws_queryExtensionField = function (input, context) {
    var entries = {};
    if (input.Name !== undefined && input.Name !== null) {
        entries["Name"] = input.Name;
    }
    if (input.Value !== undefined && input.Value !== null) {
        entries["Value"] = input.Value;
    }
    return entries;
};
var serializeAws_queryExtensionFieldList = function (input, context) {
    var e_7, _a;
    var entries = {};
    var counter = 1;
    try {
        for (var input_7 = __values(input), input_7_1 = input_7.next(); !input_7_1.done; input_7_1 = input_7.next()) {
            var entry = input_7_1.value;
            if (entry === null) {
                continue;
            }
            var memberEntries = serializeAws_queryExtensionField(entry, context);
            Object.entries(memberEntries).forEach(function (_a) {
                var _b = __read(_a, 2), key = _b[0], value = _b[1];
                entries["member." + counter + "." + key] = value;
            });
            counter++;
        }
    }
    catch (e_7_1) { e_7 = { error: e_7_1 }; }
    finally {
        try {
            if (input_7_1 && !input_7_1.done && (_a = input_7.return)) _a.call(input_7);
        }
        finally { if (e_7) throw e_7.error; }
    }
    return entries;
};
var serializeAws_queryGetCustomVerificationEmailTemplateRequest = function (input, context) {
    var entries = {};
    if (input.TemplateName !== undefined && input.TemplateName !== null) {
        entries["TemplateName"] = input.TemplateName;
    }
    return entries;
};
var serializeAws_queryGetIdentityDkimAttributesRequest = function (input, context) {
    var entries = {};
    if (input.Identities !== undefined && input.Identities !== null) {
        var memberEntries = serializeAws_queryIdentityList(input.Identities, context);
        Object.entries(memberEntries).forEach(function (_a) {
            var _b = __read(_a, 2), key = _b[0], value = _b[1];
            var loc = "Identities." + key;
            entries[loc] = value;
        });
    }
    return entries;
};
var serializeAws_queryGetIdentityMailFromDomainAttributesRequest = function (input, context) {
    var entries = {};
    if (input.Identities !== undefined && input.Identities !== null) {
        var memberEntries = serializeAws_queryIdentityList(input.Identities, context);
        Object.entries(memberEntries).forEach(function (_a) {
            var _b = __read(_a, 2), key = _b[0], value = _b[1];
            var loc = "Identities." + key;
            entries[loc] = value;
        });
    }
    return entries;
};
var serializeAws_queryGetIdentityNotificationAttributesRequest = function (input, context) {
    var entries = {};
    if (input.Identities !== undefined && input.Identities !== null) {
        var memberEntries = serializeAws_queryIdentityList(input.Identities, context);
        Object.entries(memberEntries).forEach(function (_a) {
            var _b = __read(_a, 2), key = _b[0], value = _b[1];
            var loc = "Identities." + key;
            entries[loc] = value;
        });
    }
    return entries;
};
var serializeAws_queryGetIdentityPoliciesRequest = function (input, context) {
    var entries = {};
    if (input.Identity !== undefined && input.Identity !== null) {
        entries["Identity"] = input.Identity;
    }
    if (input.PolicyNames !== undefined && input.PolicyNames !== null) {
        var memberEntries = serializeAws_queryPolicyNameList(input.PolicyNames, context);
        Object.entries(memberEntries).forEach(function (_a) {
            var _b = __read(_a, 2), key = _b[0], value = _b[1];
            var loc = "PolicyNames." + key;
            entries[loc] = value;
        });
    }
    return entries;
};
var serializeAws_queryGetIdentityVerificationAttributesRequest = function (input, context) {
    var entries = {};
    if (input.Identities !== undefined && input.Identities !== null) {
        var memberEntries = serializeAws_queryIdentityList(input.Identities, context);
        Object.entries(memberEntries).forEach(function (_a) {
            var _b = __read(_a, 2), key = _b[0], value = _b[1];
            var loc = "Identities." + key;
            entries[loc] = value;
        });
    }
    return entries;
};
var serializeAws_queryGetTemplateRequest = function (input, context) {
    var entries = {};
    if (input.TemplateName !== undefined && input.TemplateName !== null) {
        entries["TemplateName"] = input.TemplateName;
    }
    return entries;
};
var serializeAws_queryIdentityList = function (input, context) {
    var e_8, _a;
    var entries = {};
    var counter = 1;
    try {
        for (var input_8 = __values(input), input_8_1 = input_8.next(); !input_8_1.done; input_8_1 = input_8.next()) {
            var entry = input_8_1.value;
            if (entry === null) {
                continue;
            }
            entries["member." + counter] = entry;
            counter++;
        }
    }
    catch (e_8_1) { e_8 = { error: e_8_1 }; }
    finally {
        try {
            if (input_8_1 && !input_8_1.done && (_a = input_8.return)) _a.call(input_8);
        }
        finally { if (e_8) throw e_8.error; }
    }
    return entries;
};
var serializeAws_queryKinesisFirehoseDestination = function (input, context) {
    var entries = {};
    if (input.IAMRoleARN !== undefined && input.IAMRoleARN !== null) {
        entries["IAMRoleARN"] = input.IAMRoleARN;
    }
    if (input.DeliveryStreamARN !== undefined && input.DeliveryStreamARN !== null) {
        entries["DeliveryStreamARN"] = input.DeliveryStreamARN;
    }
    return entries;
};
var serializeAws_queryLambdaAction = function (input, context) {
    var entries = {};
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
var serializeAws_queryListConfigurationSetsRequest = function (input, context) {
    var entries = {};
    if (input.NextToken !== undefined && input.NextToken !== null) {
        entries["NextToken"] = input.NextToken;
    }
    if (input.MaxItems !== undefined && input.MaxItems !== null) {
        entries["MaxItems"] = input.MaxItems;
    }
    return entries;
};
var serializeAws_queryListCustomVerificationEmailTemplatesRequest = function (input, context) {
    var entries = {};
    if (input.NextToken !== undefined && input.NextToken !== null) {
        entries["NextToken"] = input.NextToken;
    }
    if (input.MaxResults !== undefined && input.MaxResults !== null) {
        entries["MaxResults"] = input.MaxResults;
    }
    return entries;
};
var serializeAws_queryListIdentitiesRequest = function (input, context) {
    var entries = {};
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
var serializeAws_queryListIdentityPoliciesRequest = function (input, context) {
    var entries = {};
    if (input.Identity !== undefined && input.Identity !== null) {
        entries["Identity"] = input.Identity;
    }
    return entries;
};
var serializeAws_queryListReceiptFiltersRequest = function (input, context) {
    var entries = {};
    return entries;
};
var serializeAws_queryListReceiptRuleSetsRequest = function (input, context) {
    var entries = {};
    if (input.NextToken !== undefined && input.NextToken !== null) {
        entries["NextToken"] = input.NextToken;
    }
    return entries;
};
var serializeAws_queryListTemplatesRequest = function (input, context) {
    var entries = {};
    if (input.NextToken !== undefined && input.NextToken !== null) {
        entries["NextToken"] = input.NextToken;
    }
    if (input.MaxItems !== undefined && input.MaxItems !== null) {
        entries["MaxItems"] = input.MaxItems;
    }
    return entries;
};
var serializeAws_queryMessage = function (input, context) {
    var entries = {};
    if (input.Subject !== undefined && input.Subject !== null) {
        var memberEntries = serializeAws_queryContent(input.Subject, context);
        Object.entries(memberEntries).forEach(function (_a) {
            var _b = __read(_a, 2), key = _b[0], value = _b[1];
            var loc = "Subject." + key;
            entries[loc] = value;
        });
    }
    if (input.Body !== undefined && input.Body !== null) {
        var memberEntries = serializeAws_queryBody(input.Body, context);
        Object.entries(memberEntries).forEach(function (_a) {
            var _b = __read(_a, 2), key = _b[0], value = _b[1];
            var loc = "Body." + key;
            entries[loc] = value;
        });
    }
    return entries;
};
var serializeAws_queryMessageDsn = function (input, context) {
    var entries = {};
    if (input.ReportingMta !== undefined && input.ReportingMta !== null) {
        entries["ReportingMta"] = input.ReportingMta;
    }
    if (input.ArrivalDate !== undefined && input.ArrivalDate !== null) {
        entries["ArrivalDate"] = input.ArrivalDate.toISOString().split(".")[0] + "Z";
    }
    if (input.ExtensionFields !== undefined && input.ExtensionFields !== null) {
        var memberEntries = serializeAws_queryExtensionFieldList(input.ExtensionFields, context);
        Object.entries(memberEntries).forEach(function (_a) {
            var _b = __read(_a, 2), key = _b[0], value = _b[1];
            var loc = "ExtensionFields." + key;
            entries[loc] = value;
        });
    }
    return entries;
};
var serializeAws_queryMessageTag = function (input, context) {
    var entries = {};
    if (input.Name !== undefined && input.Name !== null) {
        entries["Name"] = input.Name;
    }
    if (input.Value !== undefined && input.Value !== null) {
        entries["Value"] = input.Value;
    }
    return entries;
};
var serializeAws_queryMessageTagList = function (input, context) {
    var e_9, _a;
    var entries = {};
    var counter = 1;
    try {
        for (var input_9 = __values(input), input_9_1 = input_9.next(); !input_9_1.done; input_9_1 = input_9.next()) {
            var entry = input_9_1.value;
            if (entry === null) {
                continue;
            }
            var memberEntries = serializeAws_queryMessageTag(entry, context);
            Object.entries(memberEntries).forEach(function (_a) {
                var _b = __read(_a, 2), key = _b[0], value = _b[1];
                entries["member." + counter + "." + key] = value;
            });
            counter++;
        }
    }
    catch (e_9_1) { e_9 = { error: e_9_1 }; }
    finally {
        try {
            if (input_9_1 && !input_9_1.done && (_a = input_9.return)) _a.call(input_9);
        }
        finally { if (e_9) throw e_9.error; }
    }
    return entries;
};
var serializeAws_queryPolicyNameList = function (input, context) {
    var e_10, _a;
    var entries = {};
    var counter = 1;
    try {
        for (var input_10 = __values(input), input_10_1 = input_10.next(); !input_10_1.done; input_10_1 = input_10.next()) {
            var entry = input_10_1.value;
            if (entry === null) {
                continue;
            }
            entries["member." + counter] = entry;
            counter++;
        }
    }
    catch (e_10_1) { e_10 = { error: e_10_1 }; }
    finally {
        try {
            if (input_10_1 && !input_10_1.done && (_a = input_10.return)) _a.call(input_10);
        }
        finally { if (e_10) throw e_10.error; }
    }
    return entries;
};
var serializeAws_queryPutConfigurationSetDeliveryOptionsRequest = function (input, context) {
    var entries = {};
    if (input.ConfigurationSetName !== undefined && input.ConfigurationSetName !== null) {
        entries["ConfigurationSetName"] = input.ConfigurationSetName;
    }
    if (input.DeliveryOptions !== undefined && input.DeliveryOptions !== null) {
        var memberEntries = serializeAws_queryDeliveryOptions(input.DeliveryOptions, context);
        Object.entries(memberEntries).forEach(function (_a) {
            var _b = __read(_a, 2), key = _b[0], value = _b[1];
            var loc = "DeliveryOptions." + key;
            entries[loc] = value;
        });
    }
    return entries;
};
var serializeAws_queryPutIdentityPolicyRequest = function (input, context) {
    var entries = {};
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
var serializeAws_queryRawMessage = function (input, context) {
    var entries = {};
    if (input.Data !== undefined && input.Data !== null) {
        entries["Data"] = context.base64Encoder(input.Data);
    }
    return entries;
};
var serializeAws_queryReceiptAction = function (input, context) {
    var entries = {};
    if (input.S3Action !== undefined && input.S3Action !== null) {
        var memberEntries = serializeAws_queryS3Action(input.S3Action, context);
        Object.entries(memberEntries).forEach(function (_a) {
            var _b = __read(_a, 2), key = _b[0], value = _b[1];
            var loc = "S3Action." + key;
            entries[loc] = value;
        });
    }
    if (input.BounceAction !== undefined && input.BounceAction !== null) {
        var memberEntries = serializeAws_queryBounceAction(input.BounceAction, context);
        Object.entries(memberEntries).forEach(function (_a) {
            var _b = __read(_a, 2), key = _b[0], value = _b[1];
            var loc = "BounceAction." + key;
            entries[loc] = value;
        });
    }
    if (input.WorkmailAction !== undefined && input.WorkmailAction !== null) {
        var memberEntries = serializeAws_queryWorkmailAction(input.WorkmailAction, context);
        Object.entries(memberEntries).forEach(function (_a) {
            var _b = __read(_a, 2), key = _b[0], value = _b[1];
            var loc = "WorkmailAction." + key;
            entries[loc] = value;
        });
    }
    if (input.LambdaAction !== undefined && input.LambdaAction !== null) {
        var memberEntries = serializeAws_queryLambdaAction(input.LambdaAction, context);
        Object.entries(memberEntries).forEach(function (_a) {
            var _b = __read(_a, 2), key = _b[0], value = _b[1];
            var loc = "LambdaAction." + key;
            entries[loc] = value;
        });
    }
    if (input.StopAction !== undefined && input.StopAction !== null) {
        var memberEntries = serializeAws_queryStopAction(input.StopAction, context);
        Object.entries(memberEntries).forEach(function (_a) {
            var _b = __read(_a, 2), key = _b[0], value = _b[1];
            var loc = "StopAction." + key;
            entries[loc] = value;
        });
    }
    if (input.AddHeaderAction !== undefined && input.AddHeaderAction !== null) {
        var memberEntries = serializeAws_queryAddHeaderAction(input.AddHeaderAction, context);
        Object.entries(memberEntries).forEach(function (_a) {
            var _b = __read(_a, 2), key = _b[0], value = _b[1];
            var loc = "AddHeaderAction." + key;
            entries[loc] = value;
        });
    }
    if (input.SNSAction !== undefined && input.SNSAction !== null) {
        var memberEntries = serializeAws_querySNSAction(input.SNSAction, context);
        Object.entries(memberEntries).forEach(function (_a) {
            var _b = __read(_a, 2), key = _b[0], value = _b[1];
            var loc = "SNSAction." + key;
            entries[loc] = value;
        });
    }
    return entries;
};
var serializeAws_queryReceiptActionsList = function (input, context) {
    var e_11, _a;
    var entries = {};
    var counter = 1;
    try {
        for (var input_11 = __values(input), input_11_1 = input_11.next(); !input_11_1.done; input_11_1 = input_11.next()) {
            var entry = input_11_1.value;
            if (entry === null) {
                continue;
            }
            var memberEntries = serializeAws_queryReceiptAction(entry, context);
            Object.entries(memberEntries).forEach(function (_a) {
                var _b = __read(_a, 2), key = _b[0], value = _b[1];
                entries["member." + counter + "." + key] = value;
            });
            counter++;
        }
    }
    catch (e_11_1) { e_11 = { error: e_11_1 }; }
    finally {
        try {
            if (input_11_1 && !input_11_1.done && (_a = input_11.return)) _a.call(input_11);
        }
        finally { if (e_11) throw e_11.error; }
    }
    return entries;
};
var serializeAws_queryReceiptFilter = function (input, context) {
    var entries = {};
    if (input.Name !== undefined && input.Name !== null) {
        entries["Name"] = input.Name;
    }
    if (input.IpFilter !== undefined && input.IpFilter !== null) {
        var memberEntries = serializeAws_queryReceiptIpFilter(input.IpFilter, context);
        Object.entries(memberEntries).forEach(function (_a) {
            var _b = __read(_a, 2), key = _b[0], value = _b[1];
            var loc = "IpFilter." + key;
            entries[loc] = value;
        });
    }
    return entries;
};
var serializeAws_queryReceiptIpFilter = function (input, context) {
    var entries = {};
    if (input.Policy !== undefined && input.Policy !== null) {
        entries["Policy"] = input.Policy;
    }
    if (input.Cidr !== undefined && input.Cidr !== null) {
        entries["Cidr"] = input.Cidr;
    }
    return entries;
};
var serializeAws_queryReceiptRule = function (input, context) {
    var entries = {};
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
        var memberEntries = serializeAws_queryRecipientsList(input.Recipients, context);
        Object.entries(memberEntries).forEach(function (_a) {
            var _b = __read(_a, 2), key = _b[0], value = _b[1];
            var loc = "Recipients." + key;
            entries[loc] = value;
        });
    }
    if (input.Actions !== undefined && input.Actions !== null) {
        var memberEntries = serializeAws_queryReceiptActionsList(input.Actions, context);
        Object.entries(memberEntries).forEach(function (_a) {
            var _b = __read(_a, 2), key = _b[0], value = _b[1];
            var loc = "Actions." + key;
            entries[loc] = value;
        });
    }
    if (input.ScanEnabled !== undefined && input.ScanEnabled !== null) {
        entries["ScanEnabled"] = input.ScanEnabled;
    }
    return entries;
};
var serializeAws_queryReceiptRuleNamesList = function (input, context) {
    var e_12, _a;
    var entries = {};
    var counter = 1;
    try {
        for (var input_12 = __values(input), input_12_1 = input_12.next(); !input_12_1.done; input_12_1 = input_12.next()) {
            var entry = input_12_1.value;
            if (entry === null) {
                continue;
            }
            entries["member." + counter] = entry;
            counter++;
        }
    }
    catch (e_12_1) { e_12 = { error: e_12_1 }; }
    finally {
        try {
            if (input_12_1 && !input_12_1.done && (_a = input_12.return)) _a.call(input_12);
        }
        finally { if (e_12) throw e_12.error; }
    }
    return entries;
};
var serializeAws_queryRecipientDsnFields = function (input, context) {
    var entries = {};
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
        var memberEntries = serializeAws_queryExtensionFieldList(input.ExtensionFields, context);
        Object.entries(memberEntries).forEach(function (_a) {
            var _b = __read(_a, 2), key = _b[0], value = _b[1];
            var loc = "ExtensionFields." + key;
            entries[loc] = value;
        });
    }
    return entries;
};
var serializeAws_queryRecipientsList = function (input, context) {
    var e_13, _a;
    var entries = {};
    var counter = 1;
    try {
        for (var input_13 = __values(input), input_13_1 = input_13.next(); !input_13_1.done; input_13_1 = input_13.next()) {
            var entry = input_13_1.value;
            if (entry === null) {
                continue;
            }
            entries["member." + counter] = entry;
            counter++;
        }
    }
    catch (e_13_1) { e_13 = { error: e_13_1 }; }
    finally {
        try {
            if (input_13_1 && !input_13_1.done && (_a = input_13.return)) _a.call(input_13);
        }
        finally { if (e_13) throw e_13.error; }
    }
    return entries;
};
var serializeAws_queryReorderReceiptRuleSetRequest = function (input, context) {
    var entries = {};
    if (input.RuleSetName !== undefined && input.RuleSetName !== null) {
        entries["RuleSetName"] = input.RuleSetName;
    }
    if (input.RuleNames !== undefined && input.RuleNames !== null) {
        var memberEntries = serializeAws_queryReceiptRuleNamesList(input.RuleNames, context);
        Object.entries(memberEntries).forEach(function (_a) {
            var _b = __read(_a, 2), key = _b[0], value = _b[1];
            var loc = "RuleNames." + key;
            entries[loc] = value;
        });
    }
    return entries;
};
var serializeAws_queryS3Action = function (input, context) {
    var entries = {};
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
var serializeAws_querySendBounceRequest = function (input, context) {
    var entries = {};
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
        var memberEntries = serializeAws_queryMessageDsn(input.MessageDsn, context);
        Object.entries(memberEntries).forEach(function (_a) {
            var _b = __read(_a, 2), key = _b[0], value = _b[1];
            var loc = "MessageDsn." + key;
            entries[loc] = value;
        });
    }
    if (input.BouncedRecipientInfoList !== undefined && input.BouncedRecipientInfoList !== null) {
        var memberEntries = serializeAws_queryBouncedRecipientInfoList(input.BouncedRecipientInfoList, context);
        Object.entries(memberEntries).forEach(function (_a) {
            var _b = __read(_a, 2), key = _b[0], value = _b[1];
            var loc = "BouncedRecipientInfoList." + key;
            entries[loc] = value;
        });
    }
    if (input.BounceSenderArn !== undefined && input.BounceSenderArn !== null) {
        entries["BounceSenderArn"] = input.BounceSenderArn;
    }
    return entries;
};
var serializeAws_querySendBulkTemplatedEmailRequest = function (input, context) {
    var entries = {};
    if (input.Source !== undefined && input.Source !== null) {
        entries["Source"] = input.Source;
    }
    if (input.SourceArn !== undefined && input.SourceArn !== null) {
        entries["SourceArn"] = input.SourceArn;
    }
    if (input.ReplyToAddresses !== undefined && input.ReplyToAddresses !== null) {
        var memberEntries = serializeAws_queryAddressList(input.ReplyToAddresses, context);
        Object.entries(memberEntries).forEach(function (_a) {
            var _b = __read(_a, 2), key = _b[0], value = _b[1];
            var loc = "ReplyToAddresses." + key;
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
        var memberEntries = serializeAws_queryMessageTagList(input.DefaultTags, context);
        Object.entries(memberEntries).forEach(function (_a) {
            var _b = __read(_a, 2), key = _b[0], value = _b[1];
            var loc = "DefaultTags." + key;
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
        var memberEntries = serializeAws_queryBulkEmailDestinationList(input.Destinations, context);
        Object.entries(memberEntries).forEach(function (_a) {
            var _b = __read(_a, 2), key = _b[0], value = _b[1];
            var loc = "Destinations." + key;
            entries[loc] = value;
        });
    }
    return entries;
};
var serializeAws_querySendCustomVerificationEmailRequest = function (input, context) {
    var entries = {};
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
var serializeAws_querySendEmailRequest = function (input, context) {
    var entries = {};
    if (input.Source !== undefined && input.Source !== null) {
        entries["Source"] = input.Source;
    }
    if (input.Destination !== undefined && input.Destination !== null) {
        var memberEntries = serializeAws_queryDestination(input.Destination, context);
        Object.entries(memberEntries).forEach(function (_a) {
            var _b = __read(_a, 2), key = _b[0], value = _b[1];
            var loc = "Destination." + key;
            entries[loc] = value;
        });
    }
    if (input.Message !== undefined && input.Message !== null) {
        var memberEntries = serializeAws_queryMessage(input.Message, context);
        Object.entries(memberEntries).forEach(function (_a) {
            var _b = __read(_a, 2), key = _b[0], value = _b[1];
            var loc = "Message." + key;
            entries[loc] = value;
        });
    }
    if (input.ReplyToAddresses !== undefined && input.ReplyToAddresses !== null) {
        var memberEntries = serializeAws_queryAddressList(input.ReplyToAddresses, context);
        Object.entries(memberEntries).forEach(function (_a) {
            var _b = __read(_a, 2), key = _b[0], value = _b[1];
            var loc = "ReplyToAddresses." + key;
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
        var memberEntries = serializeAws_queryMessageTagList(input.Tags, context);
        Object.entries(memberEntries).forEach(function (_a) {
            var _b = __read(_a, 2), key = _b[0], value = _b[1];
            var loc = "Tags." + key;
            entries[loc] = value;
        });
    }
    if (input.ConfigurationSetName !== undefined && input.ConfigurationSetName !== null) {
        entries["ConfigurationSetName"] = input.ConfigurationSetName;
    }
    return entries;
};
var serializeAws_querySendRawEmailRequest = function (input, context) {
    var entries = {};
    if (input.Source !== undefined && input.Source !== null) {
        entries["Source"] = input.Source;
    }
    if (input.Destinations !== undefined && input.Destinations !== null) {
        var memberEntries = serializeAws_queryAddressList(input.Destinations, context);
        Object.entries(memberEntries).forEach(function (_a) {
            var _b = __read(_a, 2), key = _b[0], value = _b[1];
            var loc = "Destinations." + key;
            entries[loc] = value;
        });
    }
    if (input.RawMessage !== undefined && input.RawMessage !== null) {
        var memberEntries = serializeAws_queryRawMessage(input.RawMessage, context);
        Object.entries(memberEntries).forEach(function (_a) {
            var _b = __read(_a, 2), key = _b[0], value = _b[1];
            var loc = "RawMessage." + key;
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
        var memberEntries = serializeAws_queryMessageTagList(input.Tags, context);
        Object.entries(memberEntries).forEach(function (_a) {
            var _b = __read(_a, 2), key = _b[0], value = _b[1];
            var loc = "Tags." + key;
            entries[loc] = value;
        });
    }
    if (input.ConfigurationSetName !== undefined && input.ConfigurationSetName !== null) {
        entries["ConfigurationSetName"] = input.ConfigurationSetName;
    }
    return entries;
};
var serializeAws_querySendTemplatedEmailRequest = function (input, context) {
    var entries = {};
    if (input.Source !== undefined && input.Source !== null) {
        entries["Source"] = input.Source;
    }
    if (input.Destination !== undefined && input.Destination !== null) {
        var memberEntries = serializeAws_queryDestination(input.Destination, context);
        Object.entries(memberEntries).forEach(function (_a) {
            var _b = __read(_a, 2), key = _b[0], value = _b[1];
            var loc = "Destination." + key;
            entries[loc] = value;
        });
    }
    if (input.ReplyToAddresses !== undefined && input.ReplyToAddresses !== null) {
        var memberEntries = serializeAws_queryAddressList(input.ReplyToAddresses, context);
        Object.entries(memberEntries).forEach(function (_a) {
            var _b = __read(_a, 2), key = _b[0], value = _b[1];
            var loc = "ReplyToAddresses." + key;
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
        var memberEntries = serializeAws_queryMessageTagList(input.Tags, context);
        Object.entries(memberEntries).forEach(function (_a) {
            var _b = __read(_a, 2), key = _b[0], value = _b[1];
            var loc = "Tags." + key;
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
var serializeAws_querySetActiveReceiptRuleSetRequest = function (input, context) {
    var entries = {};
    if (input.RuleSetName !== undefined && input.RuleSetName !== null) {
        entries["RuleSetName"] = input.RuleSetName;
    }
    return entries;
};
var serializeAws_querySetIdentityDkimEnabledRequest = function (input, context) {
    var entries = {};
    if (input.Identity !== undefined && input.Identity !== null) {
        entries["Identity"] = input.Identity;
    }
    if (input.DkimEnabled !== undefined && input.DkimEnabled !== null) {
        entries["DkimEnabled"] = input.DkimEnabled;
    }
    return entries;
};
var serializeAws_querySetIdentityFeedbackForwardingEnabledRequest = function (input, context) {
    var entries = {};
    if (input.Identity !== undefined && input.Identity !== null) {
        entries["Identity"] = input.Identity;
    }
    if (input.ForwardingEnabled !== undefined && input.ForwardingEnabled !== null) {
        entries["ForwardingEnabled"] = input.ForwardingEnabled;
    }
    return entries;
};
var serializeAws_querySetIdentityHeadersInNotificationsEnabledRequest = function (input, context) {
    var entries = {};
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
var serializeAws_querySetIdentityMailFromDomainRequest = function (input, context) {
    var entries = {};
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
var serializeAws_querySetIdentityNotificationTopicRequest = function (input, context) {
    var entries = {};
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
var serializeAws_querySetReceiptRulePositionRequest = function (input, context) {
    var entries = {};
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
var serializeAws_querySNSAction = function (input, context) {
    var entries = {};
    if (input.TopicArn !== undefined && input.TopicArn !== null) {
        entries["TopicArn"] = input.TopicArn;
    }
    if (input.Encoding !== undefined && input.Encoding !== null) {
        entries["Encoding"] = input.Encoding;
    }
    return entries;
};
var serializeAws_querySNSDestination = function (input, context) {
    var entries = {};
    if (input.TopicARN !== undefined && input.TopicARN !== null) {
        entries["TopicARN"] = input.TopicARN;
    }
    return entries;
};
var serializeAws_queryStopAction = function (input, context) {
    var entries = {};
    if (input.Scope !== undefined && input.Scope !== null) {
        entries["Scope"] = input.Scope;
    }
    if (input.TopicArn !== undefined && input.TopicArn !== null) {
        entries["TopicArn"] = input.TopicArn;
    }
    return entries;
};
var serializeAws_queryTemplate = function (input, context) {
    var entries = {};
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
var serializeAws_queryTestRenderTemplateRequest = function (input, context) {
    var entries = {};
    if (input.TemplateName !== undefined && input.TemplateName !== null) {
        entries["TemplateName"] = input.TemplateName;
    }
    if (input.TemplateData !== undefined && input.TemplateData !== null) {
        entries["TemplateData"] = input.TemplateData;
    }
    return entries;
};
var serializeAws_queryTrackingOptions = function (input, context) {
    var entries = {};
    if (input.CustomRedirectDomain !== undefined && input.CustomRedirectDomain !== null) {
        entries["CustomRedirectDomain"] = input.CustomRedirectDomain;
    }
    return entries;
};
var serializeAws_queryUpdateAccountSendingEnabledRequest = function (input, context) {
    var entries = {};
    if (input.Enabled !== undefined && input.Enabled !== null) {
        entries["Enabled"] = input.Enabled;
    }
    return entries;
};
var serializeAws_queryUpdateConfigurationSetEventDestinationRequest = function (input, context) {
    var entries = {};
    if (input.ConfigurationSetName !== undefined && input.ConfigurationSetName !== null) {
        entries["ConfigurationSetName"] = input.ConfigurationSetName;
    }
    if (input.EventDestination !== undefined && input.EventDestination !== null) {
        var memberEntries = serializeAws_queryEventDestination(input.EventDestination, context);
        Object.entries(memberEntries).forEach(function (_a) {
            var _b = __read(_a, 2), key = _b[0], value = _b[1];
            var loc = "EventDestination." + key;
            entries[loc] = value;
        });
    }
    return entries;
};
var serializeAws_queryUpdateConfigurationSetReputationMetricsEnabledRequest = function (input, context) {
    var entries = {};
    if (input.ConfigurationSetName !== undefined && input.ConfigurationSetName !== null) {
        entries["ConfigurationSetName"] = input.ConfigurationSetName;
    }
    if (input.Enabled !== undefined && input.Enabled !== null) {
        entries["Enabled"] = input.Enabled;
    }
    return entries;
};
var serializeAws_queryUpdateConfigurationSetSendingEnabledRequest = function (input, context) {
    var entries = {};
    if (input.ConfigurationSetName !== undefined && input.ConfigurationSetName !== null) {
        entries["ConfigurationSetName"] = input.ConfigurationSetName;
    }
    if (input.Enabled !== undefined && input.Enabled !== null) {
        entries["Enabled"] = input.Enabled;
    }
    return entries;
};
var serializeAws_queryUpdateConfigurationSetTrackingOptionsRequest = function (input, context) {
    var entries = {};
    if (input.ConfigurationSetName !== undefined && input.ConfigurationSetName !== null) {
        entries["ConfigurationSetName"] = input.ConfigurationSetName;
    }
    if (input.TrackingOptions !== undefined && input.TrackingOptions !== null) {
        var memberEntries = serializeAws_queryTrackingOptions(input.TrackingOptions, context);
        Object.entries(memberEntries).forEach(function (_a) {
            var _b = __read(_a, 2), key = _b[0], value = _b[1];
            var loc = "TrackingOptions." + key;
            entries[loc] = value;
        });
    }
    return entries;
};
var serializeAws_queryUpdateCustomVerificationEmailTemplateRequest = function (input, context) {
    var entries = {};
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
var serializeAws_queryUpdateReceiptRuleRequest = function (input, context) {
    var entries = {};
    if (input.RuleSetName !== undefined && input.RuleSetName !== null) {
        entries["RuleSetName"] = input.RuleSetName;
    }
    if (input.Rule !== undefined && input.Rule !== null) {
        var memberEntries = serializeAws_queryReceiptRule(input.Rule, context);
        Object.entries(memberEntries).forEach(function (_a) {
            var _b = __read(_a, 2), key = _b[0], value = _b[1];
            var loc = "Rule." + key;
            entries[loc] = value;
        });
    }
    return entries;
};
var serializeAws_queryUpdateTemplateRequest = function (input, context) {
    var entries = {};
    if (input.Template !== undefined && input.Template !== null) {
        var memberEntries = serializeAws_queryTemplate(input.Template, context);
        Object.entries(memberEntries).forEach(function (_a) {
            var _b = __read(_a, 2), key = _b[0], value = _b[1];
            var loc = "Template." + key;
            entries[loc] = value;
        });
    }
    return entries;
};
var serializeAws_queryVerifyDomainDkimRequest = function (input, context) {
    var entries = {};
    if (input.Domain !== undefined && input.Domain !== null) {
        entries["Domain"] = input.Domain;
    }
    return entries;
};
var serializeAws_queryVerifyDomainIdentityRequest = function (input, context) {
    var entries = {};
    if (input.Domain !== undefined && input.Domain !== null) {
        entries["Domain"] = input.Domain;
    }
    return entries;
};
var serializeAws_queryVerifyEmailAddressRequest = function (input, context) {
    var entries = {};
    if (input.EmailAddress !== undefined && input.EmailAddress !== null) {
        entries["EmailAddress"] = input.EmailAddress;
    }
    return entries;
};
var serializeAws_queryVerifyEmailIdentityRequest = function (input, context) {
    var entries = {};
    if (input.EmailAddress !== undefined && input.EmailAddress !== null) {
        entries["EmailAddress"] = input.EmailAddress;
    }
    return entries;
};
var serializeAws_queryWorkmailAction = function (input, context) {
    var entries = {};
    if (input.TopicArn !== undefined && input.TopicArn !== null) {
        entries["TopicArn"] = input.TopicArn;
    }
    if (input.OrganizationArn !== undefined && input.OrganizationArn !== null) {
        entries["OrganizationArn"] = input.OrganizationArn;
    }
    return entries;
};
var deserializeAws_queryAccountSendingPausedException = function (output, context) {
    var contents = {
        message: undefined,
    };
    if (output["message"] !== undefined) {
        contents.message = output["message"];
    }
    return contents;
};
var deserializeAws_queryAddHeaderAction = function (output, context) {
    var contents = {
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
var deserializeAws_queryAddressList = function (output, context) {
    return (output || [])
        .filter(function (e) { return e != null; })
        .map(function (entry) {
        if (entry === null) {
            return null;
        }
        return entry;
    });
};
var deserializeAws_queryAlreadyExistsException = function (output, context) {
    var contents = {
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
var deserializeAws_queryBounceAction = function (output, context) {
    var contents = {
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
var deserializeAws_queryBulkEmailDestinationStatus = function (output, context) {
    var contents = {
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
var deserializeAws_queryBulkEmailDestinationStatusList = function (output, context) {
    return (output || [])
        .filter(function (e) { return e != null; })
        .map(function (entry) {
        if (entry === null) {
            return null;
        }
        return deserializeAws_queryBulkEmailDestinationStatus(entry, context);
    });
};
var deserializeAws_queryCannotDeleteException = function (output, context) {
    var contents = {
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
var deserializeAws_queryCloneReceiptRuleSetResponse = function (output, context) {
    var contents = {};
    return contents;
};
var deserializeAws_queryCloudWatchDestination = function (output, context) {
    var contents = {
        DimensionConfigurations: undefined,
    };
    if (output.DimensionConfigurations === "") {
        contents.DimensionConfigurations = [];
    }
    if (output["DimensionConfigurations"] !== undefined && output["DimensionConfigurations"]["member"] !== undefined) {
        contents.DimensionConfigurations = deserializeAws_queryCloudWatchDimensionConfigurations(__getArrayIfSingleItem(output["DimensionConfigurations"]["member"]), context);
    }
    return contents;
};
var deserializeAws_queryCloudWatchDimensionConfiguration = function (output, context) {
    var contents = {
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
var deserializeAws_queryCloudWatchDimensionConfigurations = function (output, context) {
    return (output || [])
        .filter(function (e) { return e != null; })
        .map(function (entry) {
        if (entry === null) {
            return null;
        }
        return deserializeAws_queryCloudWatchDimensionConfiguration(entry, context);
    });
};
var deserializeAws_queryConfigurationSet = function (output, context) {
    var contents = {
        Name: undefined,
    };
    if (output["Name"] !== undefined) {
        contents.Name = output["Name"];
    }
    return contents;
};
var deserializeAws_queryConfigurationSetAlreadyExistsException = function (output, context) {
    var contents = {
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
var deserializeAws_queryConfigurationSetDoesNotExistException = function (output, context) {
    var contents = {
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
var deserializeAws_queryConfigurationSets = function (output, context) {
    return (output || [])
        .filter(function (e) { return e != null; })
        .map(function (entry) {
        if (entry === null) {
            return null;
        }
        return deserializeAws_queryConfigurationSet(entry, context);
    });
};
var deserializeAws_queryConfigurationSetSendingPausedException = function (output, context) {
    var contents = {
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
var deserializeAws_queryCreateConfigurationSetEventDestinationResponse = function (output, context) {
    var contents = {};
    return contents;
};
var deserializeAws_queryCreateConfigurationSetResponse = function (output, context) {
    var contents = {};
    return contents;
};
var deserializeAws_queryCreateConfigurationSetTrackingOptionsResponse = function (output, context) {
    var contents = {};
    return contents;
};
var deserializeAws_queryCreateReceiptFilterResponse = function (output, context) {
    var contents = {};
    return contents;
};
var deserializeAws_queryCreateReceiptRuleResponse = function (output, context) {
    var contents = {};
    return contents;
};
var deserializeAws_queryCreateReceiptRuleSetResponse = function (output, context) {
    var contents = {};
    return contents;
};
var deserializeAws_queryCreateTemplateResponse = function (output, context) {
    var contents = {};
    return contents;
};
var deserializeAws_queryCustomVerificationEmailInvalidContentException = function (output, context) {
    var contents = {
        message: undefined,
    };
    if (output["message"] !== undefined) {
        contents.message = output["message"];
    }
    return contents;
};
var deserializeAws_queryCustomVerificationEmailTemplate = function (output, context) {
    var contents = {
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
var deserializeAws_queryCustomVerificationEmailTemplateAlreadyExistsException = function (output, context) {
    var contents = {
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
var deserializeAws_queryCustomVerificationEmailTemplateDoesNotExistException = function (output, context) {
    var contents = {
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
var deserializeAws_queryCustomVerificationEmailTemplates = function (output, context) {
    return (output || [])
        .filter(function (e) { return e != null; })
        .map(function (entry) {
        if (entry === null) {
            return null;
        }
        return deserializeAws_queryCustomVerificationEmailTemplate(entry, context);
    });
};
var deserializeAws_queryDeleteConfigurationSetEventDestinationResponse = function (output, context) {
    var contents = {};
    return contents;
};
var deserializeAws_queryDeleteConfigurationSetResponse = function (output, context) {
    var contents = {};
    return contents;
};
var deserializeAws_queryDeleteConfigurationSetTrackingOptionsResponse = function (output, context) {
    var contents = {};
    return contents;
};
var deserializeAws_queryDeleteIdentityPolicyResponse = function (output, context) {
    var contents = {};
    return contents;
};
var deserializeAws_queryDeleteIdentityResponse = function (output, context) {
    var contents = {};
    return contents;
};
var deserializeAws_queryDeleteReceiptFilterResponse = function (output, context) {
    var contents = {};
    return contents;
};
var deserializeAws_queryDeleteReceiptRuleResponse = function (output, context) {
    var contents = {};
    return contents;
};
var deserializeAws_queryDeleteReceiptRuleSetResponse = function (output, context) {
    var contents = {};
    return contents;
};
var deserializeAws_queryDeleteTemplateResponse = function (output, context) {
    var contents = {};
    return contents;
};
var deserializeAws_queryDeliveryOptions = function (output, context) {
    var contents = {
        TlsPolicy: undefined,
    };
    if (output["TlsPolicy"] !== undefined) {
        contents.TlsPolicy = output["TlsPolicy"];
    }
    return contents;
};
var deserializeAws_queryDescribeActiveReceiptRuleSetResponse = function (output, context) {
    var contents = {
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
        contents.Rules = deserializeAws_queryReceiptRulesList(__getArrayIfSingleItem(output["Rules"]["member"]), context);
    }
    return contents;
};
var deserializeAws_queryDescribeConfigurationSetResponse = function (output, context) {
    var contents = {
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
        contents.EventDestinations = deserializeAws_queryEventDestinations(__getArrayIfSingleItem(output["EventDestinations"]["member"]), context);
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
var deserializeAws_queryDescribeReceiptRuleResponse = function (output, context) {
    var contents = {
        Rule: undefined,
    };
    if (output["Rule"] !== undefined) {
        contents.Rule = deserializeAws_queryReceiptRule(output["Rule"], context);
    }
    return contents;
};
var deserializeAws_queryDescribeReceiptRuleSetResponse = function (output, context) {
    var contents = {
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
        contents.Rules = deserializeAws_queryReceiptRulesList(__getArrayIfSingleItem(output["Rules"]["member"]), context);
    }
    return contents;
};
var deserializeAws_queryDkimAttributes = function (output, context) {
    return output.reduce(function (acc, pair) {
        var _a;
        if (pair["value"] === null) {
            return acc;
        }
        return __assign(__assign({}, acc), (_a = {}, _a[pair["key"]] = deserializeAws_queryIdentityDkimAttributes(pair["value"], context), _a));
    }, {});
};
var deserializeAws_queryEventDestination = function (output, context) {
    var contents = {
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
        contents.MatchingEventTypes = deserializeAws_queryEventTypes(__getArrayIfSingleItem(output["MatchingEventTypes"]["member"]), context);
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
var deserializeAws_queryEventDestinationAlreadyExistsException = function (output, context) {
    var contents = {
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
var deserializeAws_queryEventDestinationDoesNotExistException = function (output, context) {
    var contents = {
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
var deserializeAws_queryEventDestinations = function (output, context) {
    return (output || [])
        .filter(function (e) { return e != null; })
        .map(function (entry) {
        if (entry === null) {
            return null;
        }
        return deserializeAws_queryEventDestination(entry, context);
    });
};
var deserializeAws_queryEventTypes = function (output, context) {
    return (output || [])
        .filter(function (e) { return e != null; })
        .map(function (entry) {
        if (entry === null) {
            return null;
        }
        return entry;
    });
};
var deserializeAws_queryFromEmailAddressNotVerifiedException = function (output, context) {
    var contents = {
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
var deserializeAws_queryGetAccountSendingEnabledResponse = function (output, context) {
    var contents = {
        Enabled: undefined,
    };
    if (output["Enabled"] !== undefined) {
        contents.Enabled = output["Enabled"] == "true";
    }
    return contents;
};
var deserializeAws_queryGetCustomVerificationEmailTemplateResponse = function (output, context) {
    var contents = {
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
var deserializeAws_queryGetIdentityDkimAttributesResponse = function (output, context) {
    var contents = {
        DkimAttributes: undefined,
    };
    if (output.DkimAttributes === "") {
        contents.DkimAttributes = {};
    }
    if (output["DkimAttributes"] !== undefined && output["DkimAttributes"]["entry"] !== undefined) {
        contents.DkimAttributes = deserializeAws_queryDkimAttributes(__getArrayIfSingleItem(output["DkimAttributes"]["entry"]), context);
    }
    return contents;
};
var deserializeAws_queryGetIdentityMailFromDomainAttributesResponse = function (output, context) {
    var contents = {
        MailFromDomainAttributes: undefined,
    };
    if (output.MailFromDomainAttributes === "") {
        contents.MailFromDomainAttributes = {};
    }
    if (output["MailFromDomainAttributes"] !== undefined && output["MailFromDomainAttributes"]["entry"] !== undefined) {
        contents.MailFromDomainAttributes = deserializeAws_queryMailFromDomainAttributes(__getArrayIfSingleItem(output["MailFromDomainAttributes"]["entry"]), context);
    }
    return contents;
};
var deserializeAws_queryGetIdentityNotificationAttributesResponse = function (output, context) {
    var contents = {
        NotificationAttributes: undefined,
    };
    if (output.NotificationAttributes === "") {
        contents.NotificationAttributes = {};
    }
    if (output["NotificationAttributes"] !== undefined && output["NotificationAttributes"]["entry"] !== undefined) {
        contents.NotificationAttributes = deserializeAws_queryNotificationAttributes(__getArrayIfSingleItem(output["NotificationAttributes"]["entry"]), context);
    }
    return contents;
};
var deserializeAws_queryGetIdentityPoliciesResponse = function (output, context) {
    var contents = {
        Policies: undefined,
    };
    if (output.Policies === "") {
        contents.Policies = {};
    }
    if (output["Policies"] !== undefined && output["Policies"]["entry"] !== undefined) {
        contents.Policies = deserializeAws_queryPolicyMap(__getArrayIfSingleItem(output["Policies"]["entry"]), context);
    }
    return contents;
};
var deserializeAws_queryGetIdentityVerificationAttributesResponse = function (output, context) {
    var contents = {
        VerificationAttributes: undefined,
    };
    if (output.VerificationAttributes === "") {
        contents.VerificationAttributes = {};
    }
    if (output["VerificationAttributes"] !== undefined && output["VerificationAttributes"]["entry"] !== undefined) {
        contents.VerificationAttributes = deserializeAws_queryVerificationAttributes(__getArrayIfSingleItem(output["VerificationAttributes"]["entry"]), context);
    }
    return contents;
};
var deserializeAws_queryGetSendQuotaResponse = function (output, context) {
    var contents = {
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
var deserializeAws_queryGetSendStatisticsResponse = function (output, context) {
    var contents = {
        SendDataPoints: undefined,
    };
    if (output.SendDataPoints === "") {
        contents.SendDataPoints = [];
    }
    if (output["SendDataPoints"] !== undefined && output["SendDataPoints"]["member"] !== undefined) {
        contents.SendDataPoints = deserializeAws_querySendDataPointList(__getArrayIfSingleItem(output["SendDataPoints"]["member"]), context);
    }
    return contents;
};
var deserializeAws_queryGetTemplateResponse = function (output, context) {
    var contents = {
        Template: undefined,
    };
    if (output["Template"] !== undefined) {
        contents.Template = deserializeAws_queryTemplate(output["Template"], context);
    }
    return contents;
};
var deserializeAws_queryIdentityDkimAttributes = function (output, context) {
    var contents = {
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
        contents.DkimTokens = deserializeAws_queryVerificationTokenList(__getArrayIfSingleItem(output["DkimTokens"]["member"]), context);
    }
    return contents;
};
var deserializeAws_queryIdentityList = function (output, context) {
    return (output || [])
        .filter(function (e) { return e != null; })
        .map(function (entry) {
        if (entry === null) {
            return null;
        }
        return entry;
    });
};
var deserializeAws_queryIdentityMailFromDomainAttributes = function (output, context) {
    var contents = {
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
var deserializeAws_queryIdentityNotificationAttributes = function (output, context) {
    var contents = {
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
var deserializeAws_queryIdentityVerificationAttributes = function (output, context) {
    var contents = {
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
var deserializeAws_queryInvalidCloudWatchDestinationException = function (output, context) {
    var contents = {
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
var deserializeAws_queryInvalidConfigurationSetException = function (output, context) {
    var contents = {
        message: undefined,
    };
    if (output["message"] !== undefined) {
        contents.message = output["message"];
    }
    return contents;
};
var deserializeAws_queryInvalidDeliveryOptionsException = function (output, context) {
    var contents = {
        message: undefined,
    };
    if (output["message"] !== undefined) {
        contents.message = output["message"];
    }
    return contents;
};
var deserializeAws_queryInvalidFirehoseDestinationException = function (output, context) {
    var contents = {
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
var deserializeAws_queryInvalidLambdaFunctionException = function (output, context) {
    var contents = {
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
var deserializeAws_queryInvalidPolicyException = function (output, context) {
    var contents = {
        message: undefined,
    };
    if (output["message"] !== undefined) {
        contents.message = output["message"];
    }
    return contents;
};
var deserializeAws_queryInvalidRenderingParameterException = function (output, context) {
    var contents = {
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
var deserializeAws_queryInvalidS3ConfigurationException = function (output, context) {
    var contents = {
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
var deserializeAws_queryInvalidSNSDestinationException = function (output, context) {
    var contents = {
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
var deserializeAws_queryInvalidSnsTopicException = function (output, context) {
    var contents = {
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
var deserializeAws_queryInvalidTemplateException = function (output, context) {
    var contents = {
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
var deserializeAws_queryInvalidTrackingOptionsException = function (output, context) {
    var contents = {
        message: undefined,
    };
    if (output["message"] !== undefined) {
        contents.message = output["message"];
    }
    return contents;
};
var deserializeAws_queryKinesisFirehoseDestination = function (output, context) {
    var contents = {
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
var deserializeAws_queryLambdaAction = function (output, context) {
    var contents = {
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
var deserializeAws_queryLimitExceededException = function (output, context) {
    var contents = {
        message: undefined,
    };
    if (output["message"] !== undefined) {
        contents.message = output["message"];
    }
    return contents;
};
var deserializeAws_queryListConfigurationSetsResponse = function (output, context) {
    var contents = {
        ConfigurationSets: undefined,
        NextToken: undefined,
    };
    if (output.ConfigurationSets === "") {
        contents.ConfigurationSets = [];
    }
    if (output["ConfigurationSets"] !== undefined && output["ConfigurationSets"]["member"] !== undefined) {
        contents.ConfigurationSets = deserializeAws_queryConfigurationSets(__getArrayIfSingleItem(output["ConfigurationSets"]["member"]), context);
    }
    if (output["NextToken"] !== undefined) {
        contents.NextToken = output["NextToken"];
    }
    return contents;
};
var deserializeAws_queryListCustomVerificationEmailTemplatesResponse = function (output, context) {
    var contents = {
        CustomVerificationEmailTemplates: undefined,
        NextToken: undefined,
    };
    if (output.CustomVerificationEmailTemplates === "") {
        contents.CustomVerificationEmailTemplates = [];
    }
    if (output["CustomVerificationEmailTemplates"] !== undefined &&
        output["CustomVerificationEmailTemplates"]["member"] !== undefined) {
        contents.CustomVerificationEmailTemplates = deserializeAws_queryCustomVerificationEmailTemplates(__getArrayIfSingleItem(output["CustomVerificationEmailTemplates"]["member"]), context);
    }
    if (output["NextToken"] !== undefined) {
        contents.NextToken = output["NextToken"];
    }
    return contents;
};
var deserializeAws_queryListIdentitiesResponse = function (output, context) {
    var contents = {
        Identities: undefined,
        NextToken: undefined,
    };
    if (output.Identities === "") {
        contents.Identities = [];
    }
    if (output["Identities"] !== undefined && output["Identities"]["member"] !== undefined) {
        contents.Identities = deserializeAws_queryIdentityList(__getArrayIfSingleItem(output["Identities"]["member"]), context);
    }
    if (output["NextToken"] !== undefined) {
        contents.NextToken = output["NextToken"];
    }
    return contents;
};
var deserializeAws_queryListIdentityPoliciesResponse = function (output, context) {
    var contents = {
        PolicyNames: undefined,
    };
    if (output.PolicyNames === "") {
        contents.PolicyNames = [];
    }
    if (output["PolicyNames"] !== undefined && output["PolicyNames"]["member"] !== undefined) {
        contents.PolicyNames = deserializeAws_queryPolicyNameList(__getArrayIfSingleItem(output["PolicyNames"]["member"]), context);
    }
    return contents;
};
var deserializeAws_queryListReceiptFiltersResponse = function (output, context) {
    var contents = {
        Filters: undefined,
    };
    if (output.Filters === "") {
        contents.Filters = [];
    }
    if (output["Filters"] !== undefined && output["Filters"]["member"] !== undefined) {
        contents.Filters = deserializeAws_queryReceiptFilterList(__getArrayIfSingleItem(output["Filters"]["member"]), context);
    }
    return contents;
};
var deserializeAws_queryListReceiptRuleSetsResponse = function (output, context) {
    var contents = {
        RuleSets: undefined,
        NextToken: undefined,
    };
    if (output.RuleSets === "") {
        contents.RuleSets = [];
    }
    if (output["RuleSets"] !== undefined && output["RuleSets"]["member"] !== undefined) {
        contents.RuleSets = deserializeAws_queryReceiptRuleSetsLists(__getArrayIfSingleItem(output["RuleSets"]["member"]), context);
    }
    if (output["NextToken"] !== undefined) {
        contents.NextToken = output["NextToken"];
    }
    return contents;
};
var deserializeAws_queryListTemplatesResponse = function (output, context) {
    var contents = {
        TemplatesMetadata: undefined,
        NextToken: undefined,
    };
    if (output.TemplatesMetadata === "") {
        contents.TemplatesMetadata = [];
    }
    if (output["TemplatesMetadata"] !== undefined && output["TemplatesMetadata"]["member"] !== undefined) {
        contents.TemplatesMetadata = deserializeAws_queryTemplateMetadataList(__getArrayIfSingleItem(output["TemplatesMetadata"]["member"]), context);
    }
    if (output["NextToken"] !== undefined) {
        contents.NextToken = output["NextToken"];
    }
    return contents;
};
var deserializeAws_queryListVerifiedEmailAddressesResponse = function (output, context) {
    var contents = {
        VerifiedEmailAddresses: undefined,
    };
    if (output.VerifiedEmailAddresses === "") {
        contents.VerifiedEmailAddresses = [];
    }
    if (output["VerifiedEmailAddresses"] !== undefined && output["VerifiedEmailAddresses"]["member"] !== undefined) {
        contents.VerifiedEmailAddresses = deserializeAws_queryAddressList(__getArrayIfSingleItem(output["VerifiedEmailAddresses"]["member"]), context);
    }
    return contents;
};
var deserializeAws_queryMailFromDomainAttributes = function (output, context) {
    return output.reduce(function (acc, pair) {
        var _a;
        if (pair["value"] === null) {
            return acc;
        }
        return __assign(__assign({}, acc), (_a = {}, _a[pair["key"]] = deserializeAws_queryIdentityMailFromDomainAttributes(pair["value"], context), _a));
    }, {});
};
var deserializeAws_queryMailFromDomainNotVerifiedException = function (output, context) {
    var contents = {
        message: undefined,
    };
    if (output["message"] !== undefined) {
        contents.message = output["message"];
    }
    return contents;
};
var deserializeAws_queryMessageRejected = function (output, context) {
    var contents = {
        message: undefined,
    };
    if (output["message"] !== undefined) {
        contents.message = output["message"];
    }
    return contents;
};
var deserializeAws_queryMissingRenderingAttributeException = function (output, context) {
    var contents = {
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
var deserializeAws_queryNotificationAttributes = function (output, context) {
    return output.reduce(function (acc, pair) {
        var _a;
        if (pair["value"] === null) {
            return acc;
        }
        return __assign(__assign({}, acc), (_a = {}, _a[pair["key"]] = deserializeAws_queryIdentityNotificationAttributes(pair["value"], context), _a));
    }, {});
};
var deserializeAws_queryPolicyMap = function (output, context) {
    return output.reduce(function (acc, pair) {
        var _a;
        if (pair["value"] === null) {
            return acc;
        }
        return __assign(__assign({}, acc), (_a = {}, _a[pair["key"]] = pair["value"], _a));
    }, {});
};
var deserializeAws_queryPolicyNameList = function (output, context) {
    return (output || [])
        .filter(function (e) { return e != null; })
        .map(function (entry) {
        if (entry === null) {
            return null;
        }
        return entry;
    });
};
var deserializeAws_queryProductionAccessNotGrantedException = function (output, context) {
    var contents = {
        message: undefined,
    };
    if (output["message"] !== undefined) {
        contents.message = output["message"];
    }
    return contents;
};
var deserializeAws_queryPutConfigurationSetDeliveryOptionsResponse = function (output, context) {
    var contents = {};
    return contents;
};
var deserializeAws_queryPutIdentityPolicyResponse = function (output, context) {
    var contents = {};
    return contents;
};
var deserializeAws_queryReceiptAction = function (output, context) {
    var contents = {
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
var deserializeAws_queryReceiptActionsList = function (output, context) {
    return (output || [])
        .filter(function (e) { return e != null; })
        .map(function (entry) {
        if (entry === null) {
            return null;
        }
        return deserializeAws_queryReceiptAction(entry, context);
    });
};
var deserializeAws_queryReceiptFilter = function (output, context) {
    var contents = {
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
var deserializeAws_queryReceiptFilterList = function (output, context) {
    return (output || [])
        .filter(function (e) { return e != null; })
        .map(function (entry) {
        if (entry === null) {
            return null;
        }
        return deserializeAws_queryReceiptFilter(entry, context);
    });
};
var deserializeAws_queryReceiptIpFilter = function (output, context) {
    var contents = {
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
var deserializeAws_queryReceiptRule = function (output, context) {
    var contents = {
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
        contents.Recipients = deserializeAws_queryRecipientsList(__getArrayIfSingleItem(output["Recipients"]["member"]), context);
    }
    if (output.Actions === "") {
        contents.Actions = [];
    }
    if (output["Actions"] !== undefined && output["Actions"]["member"] !== undefined) {
        contents.Actions = deserializeAws_queryReceiptActionsList(__getArrayIfSingleItem(output["Actions"]["member"]), context);
    }
    if (output["ScanEnabled"] !== undefined) {
        contents.ScanEnabled = output["ScanEnabled"] == "true";
    }
    return contents;
};
var deserializeAws_queryReceiptRuleSetMetadata = function (output, context) {
    var contents = {
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
var deserializeAws_queryReceiptRuleSetsLists = function (output, context) {
    return (output || [])
        .filter(function (e) { return e != null; })
        .map(function (entry) {
        if (entry === null) {
            return null;
        }
        return deserializeAws_queryReceiptRuleSetMetadata(entry, context);
    });
};
var deserializeAws_queryReceiptRulesList = function (output, context) {
    return (output || [])
        .filter(function (e) { return e != null; })
        .map(function (entry) {
        if (entry === null) {
            return null;
        }
        return deserializeAws_queryReceiptRule(entry, context);
    });
};
var deserializeAws_queryRecipientsList = function (output, context) {
    return (output || [])
        .filter(function (e) { return e != null; })
        .map(function (entry) {
        if (entry === null) {
            return null;
        }
        return entry;
    });
};
var deserializeAws_queryReorderReceiptRuleSetResponse = function (output, context) {
    var contents = {};
    return contents;
};
var deserializeAws_queryReputationOptions = function (output, context) {
    var contents = {
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
var deserializeAws_queryRuleDoesNotExistException = function (output, context) {
    var contents = {
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
var deserializeAws_queryRuleSetDoesNotExistException = function (output, context) {
    var contents = {
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
var deserializeAws_queryS3Action = function (output, context) {
    var contents = {
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
var deserializeAws_querySendBounceResponse = function (output, context) {
    var contents = {
        MessageId: undefined,
    };
    if (output["MessageId"] !== undefined) {
        contents.MessageId = output["MessageId"];
    }
    return contents;
};
var deserializeAws_querySendBulkTemplatedEmailResponse = function (output, context) {
    var contents = {
        Status: undefined,
    };
    if (output.Status === "") {
        contents.Status = [];
    }
    if (output["Status"] !== undefined && output["Status"]["member"] !== undefined) {
        contents.Status = deserializeAws_queryBulkEmailDestinationStatusList(__getArrayIfSingleItem(output["Status"]["member"]), context);
    }
    return contents;
};
var deserializeAws_querySendCustomVerificationEmailResponse = function (output, context) {
    var contents = {
        MessageId: undefined,
    };
    if (output["MessageId"] !== undefined) {
        contents.MessageId = output["MessageId"];
    }
    return contents;
};
var deserializeAws_querySendDataPoint = function (output, context) {
    var contents = {
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
var deserializeAws_querySendDataPointList = function (output, context) {
    return (output || [])
        .filter(function (e) { return e != null; })
        .map(function (entry) {
        if (entry === null) {
            return null;
        }
        return deserializeAws_querySendDataPoint(entry, context);
    });
};
var deserializeAws_querySendEmailResponse = function (output, context) {
    var contents = {
        MessageId: undefined,
    };
    if (output["MessageId"] !== undefined) {
        contents.MessageId = output["MessageId"];
    }
    return contents;
};
var deserializeAws_querySendRawEmailResponse = function (output, context) {
    var contents = {
        MessageId: undefined,
    };
    if (output["MessageId"] !== undefined) {
        contents.MessageId = output["MessageId"];
    }
    return contents;
};
var deserializeAws_querySendTemplatedEmailResponse = function (output, context) {
    var contents = {
        MessageId: undefined,
    };
    if (output["MessageId"] !== undefined) {
        contents.MessageId = output["MessageId"];
    }
    return contents;
};
var deserializeAws_querySetActiveReceiptRuleSetResponse = function (output, context) {
    var contents = {};
    return contents;
};
var deserializeAws_querySetIdentityDkimEnabledResponse = function (output, context) {
    var contents = {};
    return contents;
};
var deserializeAws_querySetIdentityFeedbackForwardingEnabledResponse = function (output, context) {
    var contents = {};
    return contents;
};
var deserializeAws_querySetIdentityHeadersInNotificationsEnabledResponse = function (output, context) {
    var contents = {};
    return contents;
};
var deserializeAws_querySetIdentityMailFromDomainResponse = function (output, context) {
    var contents = {};
    return contents;
};
var deserializeAws_querySetIdentityNotificationTopicResponse = function (output, context) {
    var contents = {};
    return contents;
};
var deserializeAws_querySetReceiptRulePositionResponse = function (output, context) {
    var contents = {};
    return contents;
};
var deserializeAws_querySNSAction = function (output, context) {
    var contents = {
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
var deserializeAws_querySNSDestination = function (output, context) {
    var contents = {
        TopicARN: undefined,
    };
    if (output["TopicARN"] !== undefined) {
        contents.TopicARN = output["TopicARN"];
    }
    return contents;
};
var deserializeAws_queryStopAction = function (output, context) {
    var contents = {
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
var deserializeAws_queryTemplate = function (output, context) {
    var contents = {
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
var deserializeAws_queryTemplateDoesNotExistException = function (output, context) {
    var contents = {
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
var deserializeAws_queryTemplateMetadata = function (output, context) {
    var contents = {
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
var deserializeAws_queryTemplateMetadataList = function (output, context) {
    return (output || [])
        .filter(function (e) { return e != null; })
        .map(function (entry) {
        if (entry === null) {
            return null;
        }
        return deserializeAws_queryTemplateMetadata(entry, context);
    });
};
var deserializeAws_queryTestRenderTemplateResponse = function (output, context) {
    var contents = {
        RenderedTemplate: undefined,
    };
    if (output["RenderedTemplate"] !== undefined) {
        contents.RenderedTemplate = output["RenderedTemplate"];
    }
    return contents;
};
var deserializeAws_queryTrackingOptions = function (output, context) {
    var contents = {
        CustomRedirectDomain: undefined,
    };
    if (output["CustomRedirectDomain"] !== undefined) {
        contents.CustomRedirectDomain = output["CustomRedirectDomain"];
    }
    return contents;
};
var deserializeAws_queryTrackingOptionsAlreadyExistsException = function (output, context) {
    var contents = {
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
var deserializeAws_queryTrackingOptionsDoesNotExistException = function (output, context) {
    var contents = {
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
var deserializeAws_queryUpdateConfigurationSetEventDestinationResponse = function (output, context) {
    var contents = {};
    return contents;
};
var deserializeAws_queryUpdateConfigurationSetTrackingOptionsResponse = function (output, context) {
    var contents = {};
    return contents;
};
var deserializeAws_queryUpdateReceiptRuleResponse = function (output, context) {
    var contents = {};
    return contents;
};
var deserializeAws_queryUpdateTemplateResponse = function (output, context) {
    var contents = {};
    return contents;
};
var deserializeAws_queryVerificationAttributes = function (output, context) {
    return output.reduce(function (acc, pair) {
        var _a;
        if (pair["value"] === null) {
            return acc;
        }
        return __assign(__assign({}, acc), (_a = {}, _a[pair["key"]] = deserializeAws_queryIdentityVerificationAttributes(pair["value"], context), _a));
    }, {});
};
var deserializeAws_queryVerificationTokenList = function (output, context) {
    return (output || [])
        .filter(function (e) { return e != null; })
        .map(function (entry) {
        if (entry === null) {
            return null;
        }
        return entry;
    });
};
var deserializeAws_queryVerifyDomainDkimResponse = function (output, context) {
    var contents = {
        DkimTokens: undefined,
    };
    if (output.DkimTokens === "") {
        contents.DkimTokens = [];
    }
    if (output["DkimTokens"] !== undefined && output["DkimTokens"]["member"] !== undefined) {
        contents.DkimTokens = deserializeAws_queryVerificationTokenList(__getArrayIfSingleItem(output["DkimTokens"]["member"]), context);
    }
    return contents;
};
var deserializeAws_queryVerifyDomainIdentityResponse = function (output, context) {
    var contents = {
        VerificationToken: undefined,
    };
    if (output["VerificationToken"] !== undefined) {
        contents.VerificationToken = output["VerificationToken"];
    }
    return contents;
};
var deserializeAws_queryVerifyEmailIdentityResponse = function (output, context) {
    var contents = {};
    return contents;
};
var deserializeAws_queryWorkmailAction = function (output, context) {
    var contents = {
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
var deserializeMetadata = function (output) {
    var _a;
    return ({
        httpStatusCode: output.statusCode,
        requestId: (_a = output.headers["x-amzn-requestid"]) !== null && _a !== void 0 ? _a : output.headers["x-amzn-request-id"],
        extendedRequestId: output.headers["x-amz-id-2"],
        cfId: output.headers["x-amz-cf-id"],
    });
};
// Collect low-level response body stream to Uint8Array.
var collectBody = function (streamBody, context) {
    if (streamBody === void 0) { streamBody = new Uint8Array(); }
    if (streamBody instanceof Uint8Array) {
        return Promise.resolve(streamBody);
    }
    return context.streamCollector(streamBody) || Promise.resolve(new Uint8Array());
};
// Encode Uint8Array data into string with utf-8.
var collectBodyString = function (streamBody, context) {
    return collectBody(streamBody, context).then(function (body) { return context.utf8Encoder(body); });
};
var buildHttpRpcRequest = function (context, headers, path, resolvedHostname, body) { return __awaiter(void 0, void 0, void 0, function () {
    var _a, hostname, _b, protocol, port, contents;
    return __generator(this, function (_c) {
        switch (_c.label) {
            case 0: return [4 /*yield*/, context.endpoint()];
            case 1:
                _a = _c.sent(), hostname = _a.hostname, _b = _a.protocol, protocol = _b === void 0 ? "https" : _b, port = _a.port;
                contents = {
                    protocol: protocol,
                    hostname: hostname,
                    port: port,
                    method: "POST",
                    path: path,
                    headers: headers,
                };
                if (resolvedHostname !== undefined) {
                    contents.hostname = resolvedHostname;
                }
                if (body !== undefined) {
                    contents.body = body;
                }
                return [2 /*return*/, new __HttpRequest(contents)];
        }
    });
}); };
var parseBody = function (streamBody, context) {
    return collectBodyString(streamBody, context).then(function (encoded) {
        if (encoded.length) {
            var parsedObj = xmlParse(encoded, {
                attributeNamePrefix: "",
                ignoreAttributes: false,
                parseNodeValue: false,
                trimValues: false,
                tagValueProcessor: function (val, tagName) { return (val.trim() === "" ? "" : decodeHTML(val)); },
            });
            var textNodeName = "#text";
            var key = Object.keys(parsedObj)[0];
            var parsedObjToReturn = parsedObj[key];
            if (parsedObjToReturn[textNodeName]) {
                parsedObjToReturn[key] = parsedObjToReturn[textNodeName];
                delete parsedObjToReturn[textNodeName];
            }
            return __getValueFromTextNode(parsedObjToReturn);
        }
        return {};
    });
};
var buildFormUrlencodedString = function (formEntries) {
    return Object.entries(formEntries)
        .map(function (_a) {
        var _b = __read(_a, 2), key = _b[0], value = _b[1];
        return __extendedEncodeURIComponent(key) + "=" + __extendedEncodeURIComponent(value);
    })
        .join("&");
};
var loadQueryErrorCode = function (output, data) {
    if (data.Error.Code !== undefined) {
        return data.Error.Code;
    }
    if (output.statusCode == 404) {
        return "NotFound";
    }
    return "";
};
//# sourceMappingURL=Aws_query.js.map