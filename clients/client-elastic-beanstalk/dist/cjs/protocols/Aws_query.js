"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.deserializeAws_queryAssociateEnvironmentOperationsRoleCommand = exports.deserializeAws_queryApplyEnvironmentManagedActionCommand = exports.deserializeAws_queryAbortEnvironmentUpdateCommand = exports.serializeAws_queryValidateConfigurationSettingsCommand = exports.serializeAws_queryUpdateTagsForResourceCommand = exports.serializeAws_queryUpdateEnvironmentCommand = exports.serializeAws_queryUpdateConfigurationTemplateCommand = exports.serializeAws_queryUpdateApplicationVersionCommand = exports.serializeAws_queryUpdateApplicationResourceLifecycleCommand = exports.serializeAws_queryUpdateApplicationCommand = exports.serializeAws_queryTerminateEnvironmentCommand = exports.serializeAws_querySwapEnvironmentCNAMEsCommand = exports.serializeAws_queryRetrieveEnvironmentInfoCommand = exports.serializeAws_queryRestartAppServerCommand = exports.serializeAws_queryRequestEnvironmentInfoCommand = exports.serializeAws_queryRebuildEnvironmentCommand = exports.serializeAws_queryListTagsForResourceCommand = exports.serializeAws_queryListPlatformVersionsCommand = exports.serializeAws_queryListPlatformBranchesCommand = exports.serializeAws_queryListAvailableSolutionStacksCommand = exports.serializeAws_queryDisassociateEnvironmentOperationsRoleCommand = exports.serializeAws_queryDescribePlatformVersionCommand = exports.serializeAws_queryDescribeInstancesHealthCommand = exports.serializeAws_queryDescribeEventsCommand = exports.serializeAws_queryDescribeEnvironmentsCommand = exports.serializeAws_queryDescribeEnvironmentResourcesCommand = exports.serializeAws_queryDescribeEnvironmentManagedActionsCommand = exports.serializeAws_queryDescribeEnvironmentManagedActionHistoryCommand = exports.serializeAws_queryDescribeEnvironmentHealthCommand = exports.serializeAws_queryDescribeConfigurationSettingsCommand = exports.serializeAws_queryDescribeConfigurationOptionsCommand = exports.serializeAws_queryDescribeApplicationVersionsCommand = exports.serializeAws_queryDescribeApplicationsCommand = exports.serializeAws_queryDescribeAccountAttributesCommand = exports.serializeAws_queryDeletePlatformVersionCommand = exports.serializeAws_queryDeleteEnvironmentConfigurationCommand = exports.serializeAws_queryDeleteConfigurationTemplateCommand = exports.serializeAws_queryDeleteApplicationVersionCommand = exports.serializeAws_queryDeleteApplicationCommand = exports.serializeAws_queryCreateStorageLocationCommand = exports.serializeAws_queryCreatePlatformVersionCommand = exports.serializeAws_queryCreateEnvironmentCommand = exports.serializeAws_queryCreateConfigurationTemplateCommand = exports.serializeAws_queryCreateApplicationVersionCommand = exports.serializeAws_queryCreateApplicationCommand = exports.serializeAws_queryComposeEnvironmentsCommand = exports.serializeAws_queryCheckDNSAvailabilityCommand = exports.serializeAws_queryAssociateEnvironmentOperationsRoleCommand = exports.serializeAws_queryApplyEnvironmentManagedActionCommand = exports.serializeAws_queryAbortEnvironmentUpdateCommand = void 0;
exports.deserializeAws_queryValidateConfigurationSettingsCommand = exports.deserializeAws_queryUpdateTagsForResourceCommand = exports.deserializeAws_queryUpdateEnvironmentCommand = exports.deserializeAws_queryUpdateConfigurationTemplateCommand = exports.deserializeAws_queryUpdateApplicationVersionCommand = exports.deserializeAws_queryUpdateApplicationResourceLifecycleCommand = exports.deserializeAws_queryUpdateApplicationCommand = exports.deserializeAws_queryTerminateEnvironmentCommand = exports.deserializeAws_querySwapEnvironmentCNAMEsCommand = exports.deserializeAws_queryRetrieveEnvironmentInfoCommand = exports.deserializeAws_queryRestartAppServerCommand = exports.deserializeAws_queryRequestEnvironmentInfoCommand = exports.deserializeAws_queryRebuildEnvironmentCommand = exports.deserializeAws_queryListTagsForResourceCommand = exports.deserializeAws_queryListPlatformVersionsCommand = exports.deserializeAws_queryListPlatformBranchesCommand = exports.deserializeAws_queryListAvailableSolutionStacksCommand = exports.deserializeAws_queryDisassociateEnvironmentOperationsRoleCommand = exports.deserializeAws_queryDescribePlatformVersionCommand = exports.deserializeAws_queryDescribeInstancesHealthCommand = exports.deserializeAws_queryDescribeEventsCommand = exports.deserializeAws_queryDescribeEnvironmentsCommand = exports.deserializeAws_queryDescribeEnvironmentResourcesCommand = exports.deserializeAws_queryDescribeEnvironmentManagedActionsCommand = exports.deserializeAws_queryDescribeEnvironmentManagedActionHistoryCommand = exports.deserializeAws_queryDescribeEnvironmentHealthCommand = exports.deserializeAws_queryDescribeConfigurationSettingsCommand = exports.deserializeAws_queryDescribeConfigurationOptionsCommand = exports.deserializeAws_queryDescribeApplicationVersionsCommand = exports.deserializeAws_queryDescribeApplicationsCommand = exports.deserializeAws_queryDescribeAccountAttributesCommand = exports.deserializeAws_queryDeletePlatformVersionCommand = exports.deserializeAws_queryDeleteEnvironmentConfigurationCommand = exports.deserializeAws_queryDeleteConfigurationTemplateCommand = exports.deserializeAws_queryDeleteApplicationVersionCommand = exports.deserializeAws_queryDeleteApplicationCommand = exports.deserializeAws_queryCreateStorageLocationCommand = exports.deserializeAws_queryCreatePlatformVersionCommand = exports.deserializeAws_queryCreateEnvironmentCommand = exports.deserializeAws_queryCreateConfigurationTemplateCommand = exports.deserializeAws_queryCreateApplicationVersionCommand = exports.deserializeAws_queryCreateApplicationCommand = exports.deserializeAws_queryComposeEnvironmentsCommand = exports.deserializeAws_queryCheckDNSAvailabilityCommand = void 0;
const protocol_http_1 = require("@aws-sdk/protocol-http");
const smithy_client_1 = require("@aws-sdk/smithy-client");
const entities_1 = require("entities");
const fast_xml_parser_1 = require("fast-xml-parser");
const serializeAws_queryAbortEnvironmentUpdateCommand = async (input, context) => {
    const headers = {
        "content-type": "application/x-www-form-urlencoded",
    };
    let body;
    body = buildFormUrlencodedString({
        ...serializeAws_queryAbortEnvironmentUpdateMessage(input, context),
        Action: "AbortEnvironmentUpdate",
        Version: "2010-12-01",
    });
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
exports.serializeAws_queryAbortEnvironmentUpdateCommand = serializeAws_queryAbortEnvironmentUpdateCommand;
const serializeAws_queryApplyEnvironmentManagedActionCommand = async (input, context) => {
    const headers = {
        "content-type": "application/x-www-form-urlencoded",
    };
    let body;
    body = buildFormUrlencodedString({
        ...serializeAws_queryApplyEnvironmentManagedActionRequest(input, context),
        Action: "ApplyEnvironmentManagedAction",
        Version: "2010-12-01",
    });
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
exports.serializeAws_queryApplyEnvironmentManagedActionCommand = serializeAws_queryApplyEnvironmentManagedActionCommand;
const serializeAws_queryAssociateEnvironmentOperationsRoleCommand = async (input, context) => {
    const headers = {
        "content-type": "application/x-www-form-urlencoded",
    };
    let body;
    body = buildFormUrlencodedString({
        ...serializeAws_queryAssociateEnvironmentOperationsRoleMessage(input, context),
        Action: "AssociateEnvironmentOperationsRole",
        Version: "2010-12-01",
    });
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
exports.serializeAws_queryAssociateEnvironmentOperationsRoleCommand = serializeAws_queryAssociateEnvironmentOperationsRoleCommand;
const serializeAws_queryCheckDNSAvailabilityCommand = async (input, context) => {
    const headers = {
        "content-type": "application/x-www-form-urlencoded",
    };
    let body;
    body = buildFormUrlencodedString({
        ...serializeAws_queryCheckDNSAvailabilityMessage(input, context),
        Action: "CheckDNSAvailability",
        Version: "2010-12-01",
    });
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
exports.serializeAws_queryCheckDNSAvailabilityCommand = serializeAws_queryCheckDNSAvailabilityCommand;
const serializeAws_queryComposeEnvironmentsCommand = async (input, context) => {
    const headers = {
        "content-type": "application/x-www-form-urlencoded",
    };
    let body;
    body = buildFormUrlencodedString({
        ...serializeAws_queryComposeEnvironmentsMessage(input, context),
        Action: "ComposeEnvironments",
        Version: "2010-12-01",
    });
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
exports.serializeAws_queryComposeEnvironmentsCommand = serializeAws_queryComposeEnvironmentsCommand;
const serializeAws_queryCreateApplicationCommand = async (input, context) => {
    const headers = {
        "content-type": "application/x-www-form-urlencoded",
    };
    let body;
    body = buildFormUrlencodedString({
        ...serializeAws_queryCreateApplicationMessage(input, context),
        Action: "CreateApplication",
        Version: "2010-12-01",
    });
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
exports.serializeAws_queryCreateApplicationCommand = serializeAws_queryCreateApplicationCommand;
const serializeAws_queryCreateApplicationVersionCommand = async (input, context) => {
    const headers = {
        "content-type": "application/x-www-form-urlencoded",
    };
    let body;
    body = buildFormUrlencodedString({
        ...serializeAws_queryCreateApplicationVersionMessage(input, context),
        Action: "CreateApplicationVersion",
        Version: "2010-12-01",
    });
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
exports.serializeAws_queryCreateApplicationVersionCommand = serializeAws_queryCreateApplicationVersionCommand;
const serializeAws_queryCreateConfigurationTemplateCommand = async (input, context) => {
    const headers = {
        "content-type": "application/x-www-form-urlencoded",
    };
    let body;
    body = buildFormUrlencodedString({
        ...serializeAws_queryCreateConfigurationTemplateMessage(input, context),
        Action: "CreateConfigurationTemplate",
        Version: "2010-12-01",
    });
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
exports.serializeAws_queryCreateConfigurationTemplateCommand = serializeAws_queryCreateConfigurationTemplateCommand;
const serializeAws_queryCreateEnvironmentCommand = async (input, context) => {
    const headers = {
        "content-type": "application/x-www-form-urlencoded",
    };
    let body;
    body = buildFormUrlencodedString({
        ...serializeAws_queryCreateEnvironmentMessage(input, context),
        Action: "CreateEnvironment",
        Version: "2010-12-01",
    });
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
exports.serializeAws_queryCreateEnvironmentCommand = serializeAws_queryCreateEnvironmentCommand;
const serializeAws_queryCreatePlatformVersionCommand = async (input, context) => {
    const headers = {
        "content-type": "application/x-www-form-urlencoded",
    };
    let body;
    body = buildFormUrlencodedString({
        ...serializeAws_queryCreatePlatformVersionRequest(input, context),
        Action: "CreatePlatformVersion",
        Version: "2010-12-01",
    });
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
exports.serializeAws_queryCreatePlatformVersionCommand = serializeAws_queryCreatePlatformVersionCommand;
const serializeAws_queryCreateStorageLocationCommand = async (input, context) => {
    const headers = {
        "content-type": "application/x-www-form-urlencoded",
    };
    const body = buildFormUrlencodedString({
        Action: "CreateStorageLocation",
        Version: "2010-12-01",
    });
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
exports.serializeAws_queryCreateStorageLocationCommand = serializeAws_queryCreateStorageLocationCommand;
const serializeAws_queryDeleteApplicationCommand = async (input, context) => {
    const headers = {
        "content-type": "application/x-www-form-urlencoded",
    };
    let body;
    body = buildFormUrlencodedString({
        ...serializeAws_queryDeleteApplicationMessage(input, context),
        Action: "DeleteApplication",
        Version: "2010-12-01",
    });
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
exports.serializeAws_queryDeleteApplicationCommand = serializeAws_queryDeleteApplicationCommand;
const serializeAws_queryDeleteApplicationVersionCommand = async (input, context) => {
    const headers = {
        "content-type": "application/x-www-form-urlencoded",
    };
    let body;
    body = buildFormUrlencodedString({
        ...serializeAws_queryDeleteApplicationVersionMessage(input, context),
        Action: "DeleteApplicationVersion",
        Version: "2010-12-01",
    });
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
exports.serializeAws_queryDeleteApplicationVersionCommand = serializeAws_queryDeleteApplicationVersionCommand;
const serializeAws_queryDeleteConfigurationTemplateCommand = async (input, context) => {
    const headers = {
        "content-type": "application/x-www-form-urlencoded",
    };
    let body;
    body = buildFormUrlencodedString({
        ...serializeAws_queryDeleteConfigurationTemplateMessage(input, context),
        Action: "DeleteConfigurationTemplate",
        Version: "2010-12-01",
    });
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
exports.serializeAws_queryDeleteConfigurationTemplateCommand = serializeAws_queryDeleteConfigurationTemplateCommand;
const serializeAws_queryDeleteEnvironmentConfigurationCommand = async (input, context) => {
    const headers = {
        "content-type": "application/x-www-form-urlencoded",
    };
    let body;
    body = buildFormUrlencodedString({
        ...serializeAws_queryDeleteEnvironmentConfigurationMessage(input, context),
        Action: "DeleteEnvironmentConfiguration",
        Version: "2010-12-01",
    });
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
exports.serializeAws_queryDeleteEnvironmentConfigurationCommand = serializeAws_queryDeleteEnvironmentConfigurationCommand;
const serializeAws_queryDeletePlatformVersionCommand = async (input, context) => {
    const headers = {
        "content-type": "application/x-www-form-urlencoded",
    };
    let body;
    body = buildFormUrlencodedString({
        ...serializeAws_queryDeletePlatformVersionRequest(input, context),
        Action: "DeletePlatformVersion",
        Version: "2010-12-01",
    });
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
exports.serializeAws_queryDeletePlatformVersionCommand = serializeAws_queryDeletePlatformVersionCommand;
const serializeAws_queryDescribeAccountAttributesCommand = async (input, context) => {
    const headers = {
        "content-type": "application/x-www-form-urlencoded",
    };
    const body = buildFormUrlencodedString({
        Action: "DescribeAccountAttributes",
        Version: "2010-12-01",
    });
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
exports.serializeAws_queryDescribeAccountAttributesCommand = serializeAws_queryDescribeAccountAttributesCommand;
const serializeAws_queryDescribeApplicationsCommand = async (input, context) => {
    const headers = {
        "content-type": "application/x-www-form-urlencoded",
    };
    let body;
    body = buildFormUrlencodedString({
        ...serializeAws_queryDescribeApplicationsMessage(input, context),
        Action: "DescribeApplications",
        Version: "2010-12-01",
    });
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
exports.serializeAws_queryDescribeApplicationsCommand = serializeAws_queryDescribeApplicationsCommand;
const serializeAws_queryDescribeApplicationVersionsCommand = async (input, context) => {
    const headers = {
        "content-type": "application/x-www-form-urlencoded",
    };
    let body;
    body = buildFormUrlencodedString({
        ...serializeAws_queryDescribeApplicationVersionsMessage(input, context),
        Action: "DescribeApplicationVersions",
        Version: "2010-12-01",
    });
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
exports.serializeAws_queryDescribeApplicationVersionsCommand = serializeAws_queryDescribeApplicationVersionsCommand;
const serializeAws_queryDescribeConfigurationOptionsCommand = async (input, context) => {
    const headers = {
        "content-type": "application/x-www-form-urlencoded",
    };
    let body;
    body = buildFormUrlencodedString({
        ...serializeAws_queryDescribeConfigurationOptionsMessage(input, context),
        Action: "DescribeConfigurationOptions",
        Version: "2010-12-01",
    });
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
exports.serializeAws_queryDescribeConfigurationOptionsCommand = serializeAws_queryDescribeConfigurationOptionsCommand;
const serializeAws_queryDescribeConfigurationSettingsCommand = async (input, context) => {
    const headers = {
        "content-type": "application/x-www-form-urlencoded",
    };
    let body;
    body = buildFormUrlencodedString({
        ...serializeAws_queryDescribeConfigurationSettingsMessage(input, context),
        Action: "DescribeConfigurationSettings",
        Version: "2010-12-01",
    });
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
exports.serializeAws_queryDescribeConfigurationSettingsCommand = serializeAws_queryDescribeConfigurationSettingsCommand;
const serializeAws_queryDescribeEnvironmentHealthCommand = async (input, context) => {
    const headers = {
        "content-type": "application/x-www-form-urlencoded",
    };
    let body;
    body = buildFormUrlencodedString({
        ...serializeAws_queryDescribeEnvironmentHealthRequest(input, context),
        Action: "DescribeEnvironmentHealth",
        Version: "2010-12-01",
    });
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
exports.serializeAws_queryDescribeEnvironmentHealthCommand = serializeAws_queryDescribeEnvironmentHealthCommand;
const serializeAws_queryDescribeEnvironmentManagedActionHistoryCommand = async (input, context) => {
    const headers = {
        "content-type": "application/x-www-form-urlencoded",
    };
    let body;
    body = buildFormUrlencodedString({
        ...serializeAws_queryDescribeEnvironmentManagedActionHistoryRequest(input, context),
        Action: "DescribeEnvironmentManagedActionHistory",
        Version: "2010-12-01",
    });
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
exports.serializeAws_queryDescribeEnvironmentManagedActionHistoryCommand = serializeAws_queryDescribeEnvironmentManagedActionHistoryCommand;
const serializeAws_queryDescribeEnvironmentManagedActionsCommand = async (input, context) => {
    const headers = {
        "content-type": "application/x-www-form-urlencoded",
    };
    let body;
    body = buildFormUrlencodedString({
        ...serializeAws_queryDescribeEnvironmentManagedActionsRequest(input, context),
        Action: "DescribeEnvironmentManagedActions",
        Version: "2010-12-01",
    });
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
exports.serializeAws_queryDescribeEnvironmentManagedActionsCommand = serializeAws_queryDescribeEnvironmentManagedActionsCommand;
const serializeAws_queryDescribeEnvironmentResourcesCommand = async (input, context) => {
    const headers = {
        "content-type": "application/x-www-form-urlencoded",
    };
    let body;
    body = buildFormUrlencodedString({
        ...serializeAws_queryDescribeEnvironmentResourcesMessage(input, context),
        Action: "DescribeEnvironmentResources",
        Version: "2010-12-01",
    });
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
exports.serializeAws_queryDescribeEnvironmentResourcesCommand = serializeAws_queryDescribeEnvironmentResourcesCommand;
const serializeAws_queryDescribeEnvironmentsCommand = async (input, context) => {
    const headers = {
        "content-type": "application/x-www-form-urlencoded",
    };
    let body;
    body = buildFormUrlencodedString({
        ...serializeAws_queryDescribeEnvironmentsMessage(input, context),
        Action: "DescribeEnvironments",
        Version: "2010-12-01",
    });
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
exports.serializeAws_queryDescribeEnvironmentsCommand = serializeAws_queryDescribeEnvironmentsCommand;
const serializeAws_queryDescribeEventsCommand = async (input, context) => {
    const headers = {
        "content-type": "application/x-www-form-urlencoded",
    };
    let body;
    body = buildFormUrlencodedString({
        ...serializeAws_queryDescribeEventsMessage(input, context),
        Action: "DescribeEvents",
        Version: "2010-12-01",
    });
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
exports.serializeAws_queryDescribeEventsCommand = serializeAws_queryDescribeEventsCommand;
const serializeAws_queryDescribeInstancesHealthCommand = async (input, context) => {
    const headers = {
        "content-type": "application/x-www-form-urlencoded",
    };
    let body;
    body = buildFormUrlencodedString({
        ...serializeAws_queryDescribeInstancesHealthRequest(input, context),
        Action: "DescribeInstancesHealth",
        Version: "2010-12-01",
    });
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
exports.serializeAws_queryDescribeInstancesHealthCommand = serializeAws_queryDescribeInstancesHealthCommand;
const serializeAws_queryDescribePlatformVersionCommand = async (input, context) => {
    const headers = {
        "content-type": "application/x-www-form-urlencoded",
    };
    let body;
    body = buildFormUrlencodedString({
        ...serializeAws_queryDescribePlatformVersionRequest(input, context),
        Action: "DescribePlatformVersion",
        Version: "2010-12-01",
    });
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
exports.serializeAws_queryDescribePlatformVersionCommand = serializeAws_queryDescribePlatformVersionCommand;
const serializeAws_queryDisassociateEnvironmentOperationsRoleCommand = async (input, context) => {
    const headers = {
        "content-type": "application/x-www-form-urlencoded",
    };
    let body;
    body = buildFormUrlencodedString({
        ...serializeAws_queryDisassociateEnvironmentOperationsRoleMessage(input, context),
        Action: "DisassociateEnvironmentOperationsRole",
        Version: "2010-12-01",
    });
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
exports.serializeAws_queryDisassociateEnvironmentOperationsRoleCommand = serializeAws_queryDisassociateEnvironmentOperationsRoleCommand;
const serializeAws_queryListAvailableSolutionStacksCommand = async (input, context) => {
    const headers = {
        "content-type": "application/x-www-form-urlencoded",
    };
    const body = buildFormUrlencodedString({
        Action: "ListAvailableSolutionStacks",
        Version: "2010-12-01",
    });
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
exports.serializeAws_queryListAvailableSolutionStacksCommand = serializeAws_queryListAvailableSolutionStacksCommand;
const serializeAws_queryListPlatformBranchesCommand = async (input, context) => {
    const headers = {
        "content-type": "application/x-www-form-urlencoded",
    };
    let body;
    body = buildFormUrlencodedString({
        ...serializeAws_queryListPlatformBranchesRequest(input, context),
        Action: "ListPlatformBranches",
        Version: "2010-12-01",
    });
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
exports.serializeAws_queryListPlatformBranchesCommand = serializeAws_queryListPlatformBranchesCommand;
const serializeAws_queryListPlatformVersionsCommand = async (input, context) => {
    const headers = {
        "content-type": "application/x-www-form-urlencoded",
    };
    let body;
    body = buildFormUrlencodedString({
        ...serializeAws_queryListPlatformVersionsRequest(input, context),
        Action: "ListPlatformVersions",
        Version: "2010-12-01",
    });
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
exports.serializeAws_queryListPlatformVersionsCommand = serializeAws_queryListPlatformVersionsCommand;
const serializeAws_queryListTagsForResourceCommand = async (input, context) => {
    const headers = {
        "content-type": "application/x-www-form-urlencoded",
    };
    let body;
    body = buildFormUrlencodedString({
        ...serializeAws_queryListTagsForResourceMessage(input, context),
        Action: "ListTagsForResource",
        Version: "2010-12-01",
    });
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
exports.serializeAws_queryListTagsForResourceCommand = serializeAws_queryListTagsForResourceCommand;
const serializeAws_queryRebuildEnvironmentCommand = async (input, context) => {
    const headers = {
        "content-type": "application/x-www-form-urlencoded",
    };
    let body;
    body = buildFormUrlencodedString({
        ...serializeAws_queryRebuildEnvironmentMessage(input, context),
        Action: "RebuildEnvironment",
        Version: "2010-12-01",
    });
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
exports.serializeAws_queryRebuildEnvironmentCommand = serializeAws_queryRebuildEnvironmentCommand;
const serializeAws_queryRequestEnvironmentInfoCommand = async (input, context) => {
    const headers = {
        "content-type": "application/x-www-form-urlencoded",
    };
    let body;
    body = buildFormUrlencodedString({
        ...serializeAws_queryRequestEnvironmentInfoMessage(input, context),
        Action: "RequestEnvironmentInfo",
        Version: "2010-12-01",
    });
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
exports.serializeAws_queryRequestEnvironmentInfoCommand = serializeAws_queryRequestEnvironmentInfoCommand;
const serializeAws_queryRestartAppServerCommand = async (input, context) => {
    const headers = {
        "content-type": "application/x-www-form-urlencoded",
    };
    let body;
    body = buildFormUrlencodedString({
        ...serializeAws_queryRestartAppServerMessage(input, context),
        Action: "RestartAppServer",
        Version: "2010-12-01",
    });
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
exports.serializeAws_queryRestartAppServerCommand = serializeAws_queryRestartAppServerCommand;
const serializeAws_queryRetrieveEnvironmentInfoCommand = async (input, context) => {
    const headers = {
        "content-type": "application/x-www-form-urlencoded",
    };
    let body;
    body = buildFormUrlencodedString({
        ...serializeAws_queryRetrieveEnvironmentInfoMessage(input, context),
        Action: "RetrieveEnvironmentInfo",
        Version: "2010-12-01",
    });
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
exports.serializeAws_queryRetrieveEnvironmentInfoCommand = serializeAws_queryRetrieveEnvironmentInfoCommand;
const serializeAws_querySwapEnvironmentCNAMEsCommand = async (input, context) => {
    const headers = {
        "content-type": "application/x-www-form-urlencoded",
    };
    let body;
    body = buildFormUrlencodedString({
        ...serializeAws_querySwapEnvironmentCNAMEsMessage(input, context),
        Action: "SwapEnvironmentCNAMEs",
        Version: "2010-12-01",
    });
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
exports.serializeAws_querySwapEnvironmentCNAMEsCommand = serializeAws_querySwapEnvironmentCNAMEsCommand;
const serializeAws_queryTerminateEnvironmentCommand = async (input, context) => {
    const headers = {
        "content-type": "application/x-www-form-urlencoded",
    };
    let body;
    body = buildFormUrlencodedString({
        ...serializeAws_queryTerminateEnvironmentMessage(input, context),
        Action: "TerminateEnvironment",
        Version: "2010-12-01",
    });
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
exports.serializeAws_queryTerminateEnvironmentCommand = serializeAws_queryTerminateEnvironmentCommand;
const serializeAws_queryUpdateApplicationCommand = async (input, context) => {
    const headers = {
        "content-type": "application/x-www-form-urlencoded",
    };
    let body;
    body = buildFormUrlencodedString({
        ...serializeAws_queryUpdateApplicationMessage(input, context),
        Action: "UpdateApplication",
        Version: "2010-12-01",
    });
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
exports.serializeAws_queryUpdateApplicationCommand = serializeAws_queryUpdateApplicationCommand;
const serializeAws_queryUpdateApplicationResourceLifecycleCommand = async (input, context) => {
    const headers = {
        "content-type": "application/x-www-form-urlencoded",
    };
    let body;
    body = buildFormUrlencodedString({
        ...serializeAws_queryUpdateApplicationResourceLifecycleMessage(input, context),
        Action: "UpdateApplicationResourceLifecycle",
        Version: "2010-12-01",
    });
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
exports.serializeAws_queryUpdateApplicationResourceLifecycleCommand = serializeAws_queryUpdateApplicationResourceLifecycleCommand;
const serializeAws_queryUpdateApplicationVersionCommand = async (input, context) => {
    const headers = {
        "content-type": "application/x-www-form-urlencoded",
    };
    let body;
    body = buildFormUrlencodedString({
        ...serializeAws_queryUpdateApplicationVersionMessage(input, context),
        Action: "UpdateApplicationVersion",
        Version: "2010-12-01",
    });
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
exports.serializeAws_queryUpdateApplicationVersionCommand = serializeAws_queryUpdateApplicationVersionCommand;
const serializeAws_queryUpdateConfigurationTemplateCommand = async (input, context) => {
    const headers = {
        "content-type": "application/x-www-form-urlencoded",
    };
    let body;
    body = buildFormUrlencodedString({
        ...serializeAws_queryUpdateConfigurationTemplateMessage(input, context),
        Action: "UpdateConfigurationTemplate",
        Version: "2010-12-01",
    });
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
exports.serializeAws_queryUpdateConfigurationTemplateCommand = serializeAws_queryUpdateConfigurationTemplateCommand;
const serializeAws_queryUpdateEnvironmentCommand = async (input, context) => {
    const headers = {
        "content-type": "application/x-www-form-urlencoded",
    };
    let body;
    body = buildFormUrlencodedString({
        ...serializeAws_queryUpdateEnvironmentMessage(input, context),
        Action: "UpdateEnvironment",
        Version: "2010-12-01",
    });
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
exports.serializeAws_queryUpdateEnvironmentCommand = serializeAws_queryUpdateEnvironmentCommand;
const serializeAws_queryUpdateTagsForResourceCommand = async (input, context) => {
    const headers = {
        "content-type": "application/x-www-form-urlencoded",
    };
    let body;
    body = buildFormUrlencodedString({
        ...serializeAws_queryUpdateTagsForResourceMessage(input, context),
        Action: "UpdateTagsForResource",
        Version: "2010-12-01",
    });
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
exports.serializeAws_queryUpdateTagsForResourceCommand = serializeAws_queryUpdateTagsForResourceCommand;
const serializeAws_queryValidateConfigurationSettingsCommand = async (input, context) => {
    const headers = {
        "content-type": "application/x-www-form-urlencoded",
    };
    let body;
    body = buildFormUrlencodedString({
        ...serializeAws_queryValidateConfigurationSettingsMessage(input, context),
        Action: "ValidateConfigurationSettings",
        Version: "2010-12-01",
    });
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
exports.serializeAws_queryValidateConfigurationSettingsCommand = serializeAws_queryValidateConfigurationSettingsCommand;
const deserializeAws_queryAbortEnvironmentUpdateCommand = async (output, context) => {
    if (output.statusCode >= 300) {
        return deserializeAws_queryAbortEnvironmentUpdateCommandError(output, context);
    }
    await collectBody(output.body, context);
    const response = {
        $metadata: deserializeMetadata(output),
    };
    return Promise.resolve(response);
};
exports.deserializeAws_queryAbortEnvironmentUpdateCommand = deserializeAws_queryAbortEnvironmentUpdateCommand;
const deserializeAws_queryAbortEnvironmentUpdateCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadQueryErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "InsufficientPrivilegesException":
        case "com.amazonaws.elasticbeanstalk#InsufficientPrivilegesException":
            response = {
                ...(await deserializeAws_queryInsufficientPrivilegesExceptionResponse(parsedOutput, context)),
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
const deserializeAws_queryApplyEnvironmentManagedActionCommand = async (output, context) => {
    if (output.statusCode >= 300) {
        return deserializeAws_queryApplyEnvironmentManagedActionCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_queryApplyEnvironmentManagedActionResult(data.ApplyEnvironmentManagedActionResult, context);
    const response = {
        $metadata: deserializeMetadata(output),
        ...contents,
    };
    return Promise.resolve(response);
};
exports.deserializeAws_queryApplyEnvironmentManagedActionCommand = deserializeAws_queryApplyEnvironmentManagedActionCommand;
const deserializeAws_queryApplyEnvironmentManagedActionCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadQueryErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "ElasticBeanstalkServiceException":
        case "com.amazonaws.elasticbeanstalk#ElasticBeanstalkServiceException":
            response = {
                ...(await deserializeAws_queryElasticBeanstalkServiceExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ManagedActionInvalidStateException":
        case "com.amazonaws.elasticbeanstalk#ManagedActionInvalidStateException":
            response = {
                ...(await deserializeAws_queryManagedActionInvalidStateExceptionResponse(parsedOutput, context)),
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
const deserializeAws_queryAssociateEnvironmentOperationsRoleCommand = async (output, context) => {
    if (output.statusCode >= 300) {
        return deserializeAws_queryAssociateEnvironmentOperationsRoleCommandError(output, context);
    }
    await collectBody(output.body, context);
    const response = {
        $metadata: deserializeMetadata(output),
    };
    return Promise.resolve(response);
};
exports.deserializeAws_queryAssociateEnvironmentOperationsRoleCommand = deserializeAws_queryAssociateEnvironmentOperationsRoleCommand;
const deserializeAws_queryAssociateEnvironmentOperationsRoleCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadQueryErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "InsufficientPrivilegesException":
        case "com.amazonaws.elasticbeanstalk#InsufficientPrivilegesException":
            response = {
                ...(await deserializeAws_queryInsufficientPrivilegesExceptionResponse(parsedOutput, context)),
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
const deserializeAws_queryCheckDNSAvailabilityCommand = async (output, context) => {
    if (output.statusCode >= 300) {
        return deserializeAws_queryCheckDNSAvailabilityCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_queryCheckDNSAvailabilityResultMessage(data.CheckDNSAvailabilityResult, context);
    const response = {
        $metadata: deserializeMetadata(output),
        ...contents,
    };
    return Promise.resolve(response);
};
exports.deserializeAws_queryCheckDNSAvailabilityCommand = deserializeAws_queryCheckDNSAvailabilityCommand;
const deserializeAws_queryCheckDNSAvailabilityCommandError = async (output, context) => {
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
const deserializeAws_queryComposeEnvironmentsCommand = async (output, context) => {
    if (output.statusCode >= 300) {
        return deserializeAws_queryComposeEnvironmentsCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_queryEnvironmentDescriptionsMessage(data.ComposeEnvironmentsResult, context);
    const response = {
        $metadata: deserializeMetadata(output),
        ...contents,
    };
    return Promise.resolve(response);
};
exports.deserializeAws_queryComposeEnvironmentsCommand = deserializeAws_queryComposeEnvironmentsCommand;
const deserializeAws_queryComposeEnvironmentsCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadQueryErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "InsufficientPrivilegesException":
        case "com.amazonaws.elasticbeanstalk#InsufficientPrivilegesException":
            response = {
                ...(await deserializeAws_queryInsufficientPrivilegesExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "TooManyEnvironmentsException":
        case "com.amazonaws.elasticbeanstalk#TooManyEnvironmentsException":
            response = {
                ...(await deserializeAws_queryTooManyEnvironmentsExceptionResponse(parsedOutput, context)),
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
const deserializeAws_queryCreateApplicationCommand = async (output, context) => {
    if (output.statusCode >= 300) {
        return deserializeAws_queryCreateApplicationCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_queryApplicationDescriptionMessage(data.CreateApplicationResult, context);
    const response = {
        $metadata: deserializeMetadata(output),
        ...contents,
    };
    return Promise.resolve(response);
};
exports.deserializeAws_queryCreateApplicationCommand = deserializeAws_queryCreateApplicationCommand;
const deserializeAws_queryCreateApplicationCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadQueryErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "TooManyApplicationsException":
        case "com.amazonaws.elasticbeanstalk#TooManyApplicationsException":
            response = {
                ...(await deserializeAws_queryTooManyApplicationsExceptionResponse(parsedOutput, context)),
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
const deserializeAws_queryCreateApplicationVersionCommand = async (output, context) => {
    if (output.statusCode >= 300) {
        return deserializeAws_queryCreateApplicationVersionCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_queryApplicationVersionDescriptionMessage(data.CreateApplicationVersionResult, context);
    const response = {
        $metadata: deserializeMetadata(output),
        ...contents,
    };
    return Promise.resolve(response);
};
exports.deserializeAws_queryCreateApplicationVersionCommand = deserializeAws_queryCreateApplicationVersionCommand;
const deserializeAws_queryCreateApplicationVersionCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadQueryErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "CodeBuildNotInServiceRegionException":
        case "com.amazonaws.elasticbeanstalk#CodeBuildNotInServiceRegionException":
            response = {
                ...(await deserializeAws_queryCodeBuildNotInServiceRegionExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InsufficientPrivilegesException":
        case "com.amazonaws.elasticbeanstalk#InsufficientPrivilegesException":
            response = {
                ...(await deserializeAws_queryInsufficientPrivilegesExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "S3LocationNotInServiceRegionException":
        case "com.amazonaws.elasticbeanstalk#S3LocationNotInServiceRegionException":
            response = {
                ...(await deserializeAws_queryS3LocationNotInServiceRegionExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "TooManyApplicationsException":
        case "com.amazonaws.elasticbeanstalk#TooManyApplicationsException":
            response = {
                ...(await deserializeAws_queryTooManyApplicationsExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "TooManyApplicationVersionsException":
        case "com.amazonaws.elasticbeanstalk#TooManyApplicationVersionsException":
            response = {
                ...(await deserializeAws_queryTooManyApplicationVersionsExceptionResponse(parsedOutput, context)),
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
const deserializeAws_queryCreateConfigurationTemplateCommand = async (output, context) => {
    if (output.statusCode >= 300) {
        return deserializeAws_queryCreateConfigurationTemplateCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_queryConfigurationSettingsDescription(data.CreateConfigurationTemplateResult, context);
    const response = {
        $metadata: deserializeMetadata(output),
        ...contents,
    };
    return Promise.resolve(response);
};
exports.deserializeAws_queryCreateConfigurationTemplateCommand = deserializeAws_queryCreateConfigurationTemplateCommand;
const deserializeAws_queryCreateConfigurationTemplateCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadQueryErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "InsufficientPrivilegesException":
        case "com.amazonaws.elasticbeanstalk#InsufficientPrivilegesException":
            response = {
                ...(await deserializeAws_queryInsufficientPrivilegesExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "TooManyBucketsException":
        case "com.amazonaws.elasticbeanstalk#TooManyBucketsException":
            response = {
                ...(await deserializeAws_queryTooManyBucketsExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "TooManyConfigurationTemplatesException":
        case "com.amazonaws.elasticbeanstalk#TooManyConfigurationTemplatesException":
            response = {
                ...(await deserializeAws_queryTooManyConfigurationTemplatesExceptionResponse(parsedOutput, context)),
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
const deserializeAws_queryCreateEnvironmentCommand = async (output, context) => {
    if (output.statusCode >= 300) {
        return deserializeAws_queryCreateEnvironmentCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_queryEnvironmentDescription(data.CreateEnvironmentResult, context);
    const response = {
        $metadata: deserializeMetadata(output),
        ...contents,
    };
    return Promise.resolve(response);
};
exports.deserializeAws_queryCreateEnvironmentCommand = deserializeAws_queryCreateEnvironmentCommand;
const deserializeAws_queryCreateEnvironmentCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadQueryErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "InsufficientPrivilegesException":
        case "com.amazonaws.elasticbeanstalk#InsufficientPrivilegesException":
            response = {
                ...(await deserializeAws_queryInsufficientPrivilegesExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "TooManyEnvironmentsException":
        case "com.amazonaws.elasticbeanstalk#TooManyEnvironmentsException":
            response = {
                ...(await deserializeAws_queryTooManyEnvironmentsExceptionResponse(parsedOutput, context)),
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
const deserializeAws_queryCreatePlatformVersionCommand = async (output, context) => {
    if (output.statusCode >= 300) {
        return deserializeAws_queryCreatePlatformVersionCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_queryCreatePlatformVersionResult(data.CreatePlatformVersionResult, context);
    const response = {
        $metadata: deserializeMetadata(output),
        ...contents,
    };
    return Promise.resolve(response);
};
exports.deserializeAws_queryCreatePlatformVersionCommand = deserializeAws_queryCreatePlatformVersionCommand;
const deserializeAws_queryCreatePlatformVersionCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadQueryErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "ElasticBeanstalkServiceException":
        case "com.amazonaws.elasticbeanstalk#ElasticBeanstalkServiceException":
            response = {
                ...(await deserializeAws_queryElasticBeanstalkServiceExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InsufficientPrivilegesException":
        case "com.amazonaws.elasticbeanstalk#InsufficientPrivilegesException":
            response = {
                ...(await deserializeAws_queryInsufficientPrivilegesExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "TooManyPlatformsException":
        case "com.amazonaws.elasticbeanstalk#TooManyPlatformsException":
            response = {
                ...(await deserializeAws_queryTooManyPlatformsExceptionResponse(parsedOutput, context)),
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
const deserializeAws_queryCreateStorageLocationCommand = async (output, context) => {
    if (output.statusCode >= 300) {
        return deserializeAws_queryCreateStorageLocationCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_queryCreateStorageLocationResultMessage(data.CreateStorageLocationResult, context);
    const response = {
        $metadata: deserializeMetadata(output),
        ...contents,
    };
    return Promise.resolve(response);
};
exports.deserializeAws_queryCreateStorageLocationCommand = deserializeAws_queryCreateStorageLocationCommand;
const deserializeAws_queryCreateStorageLocationCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadQueryErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "InsufficientPrivilegesException":
        case "com.amazonaws.elasticbeanstalk#InsufficientPrivilegesException":
            response = {
                ...(await deserializeAws_queryInsufficientPrivilegesExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "S3SubscriptionRequiredException":
        case "com.amazonaws.elasticbeanstalk#S3SubscriptionRequiredException":
            response = {
                ...(await deserializeAws_queryS3SubscriptionRequiredExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "TooManyBucketsException":
        case "com.amazonaws.elasticbeanstalk#TooManyBucketsException":
            response = {
                ...(await deserializeAws_queryTooManyBucketsExceptionResponse(parsedOutput, context)),
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
const deserializeAws_queryDeleteApplicationCommand = async (output, context) => {
    if (output.statusCode >= 300) {
        return deserializeAws_queryDeleteApplicationCommandError(output, context);
    }
    await collectBody(output.body, context);
    const response = {
        $metadata: deserializeMetadata(output),
    };
    return Promise.resolve(response);
};
exports.deserializeAws_queryDeleteApplicationCommand = deserializeAws_queryDeleteApplicationCommand;
const deserializeAws_queryDeleteApplicationCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadQueryErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "OperationInProgressException":
        case "com.amazonaws.elasticbeanstalk#OperationInProgressException":
            response = {
                ...(await deserializeAws_queryOperationInProgressExceptionResponse(parsedOutput, context)),
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
const deserializeAws_queryDeleteApplicationVersionCommand = async (output, context) => {
    if (output.statusCode >= 300) {
        return deserializeAws_queryDeleteApplicationVersionCommandError(output, context);
    }
    await collectBody(output.body, context);
    const response = {
        $metadata: deserializeMetadata(output),
    };
    return Promise.resolve(response);
};
exports.deserializeAws_queryDeleteApplicationVersionCommand = deserializeAws_queryDeleteApplicationVersionCommand;
const deserializeAws_queryDeleteApplicationVersionCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadQueryErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "InsufficientPrivilegesException":
        case "com.amazonaws.elasticbeanstalk#InsufficientPrivilegesException":
            response = {
                ...(await deserializeAws_queryInsufficientPrivilegesExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "OperationInProgressException":
        case "com.amazonaws.elasticbeanstalk#OperationInProgressException":
            response = {
                ...(await deserializeAws_queryOperationInProgressExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "S3LocationNotInServiceRegionException":
        case "com.amazonaws.elasticbeanstalk#S3LocationNotInServiceRegionException":
            response = {
                ...(await deserializeAws_queryS3LocationNotInServiceRegionExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "SourceBundleDeletionException":
        case "com.amazonaws.elasticbeanstalk#SourceBundleDeletionException":
            response = {
                ...(await deserializeAws_querySourceBundleDeletionExceptionResponse(parsedOutput, context)),
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
const deserializeAws_queryDeleteConfigurationTemplateCommand = async (output, context) => {
    if (output.statusCode >= 300) {
        return deserializeAws_queryDeleteConfigurationTemplateCommandError(output, context);
    }
    await collectBody(output.body, context);
    const response = {
        $metadata: deserializeMetadata(output),
    };
    return Promise.resolve(response);
};
exports.deserializeAws_queryDeleteConfigurationTemplateCommand = deserializeAws_queryDeleteConfigurationTemplateCommand;
const deserializeAws_queryDeleteConfigurationTemplateCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadQueryErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "OperationInProgressException":
        case "com.amazonaws.elasticbeanstalk#OperationInProgressException":
            response = {
                ...(await deserializeAws_queryOperationInProgressExceptionResponse(parsedOutput, context)),
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
const deserializeAws_queryDeleteEnvironmentConfigurationCommand = async (output, context) => {
    if (output.statusCode >= 300) {
        return deserializeAws_queryDeleteEnvironmentConfigurationCommandError(output, context);
    }
    await collectBody(output.body, context);
    const response = {
        $metadata: deserializeMetadata(output),
    };
    return Promise.resolve(response);
};
exports.deserializeAws_queryDeleteEnvironmentConfigurationCommand = deserializeAws_queryDeleteEnvironmentConfigurationCommand;
const deserializeAws_queryDeleteEnvironmentConfigurationCommandError = async (output, context) => {
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
const deserializeAws_queryDeletePlatformVersionCommand = async (output, context) => {
    if (output.statusCode >= 300) {
        return deserializeAws_queryDeletePlatformVersionCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_queryDeletePlatformVersionResult(data.DeletePlatformVersionResult, context);
    const response = {
        $metadata: deserializeMetadata(output),
        ...contents,
    };
    return Promise.resolve(response);
};
exports.deserializeAws_queryDeletePlatformVersionCommand = deserializeAws_queryDeletePlatformVersionCommand;
const deserializeAws_queryDeletePlatformVersionCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadQueryErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "ElasticBeanstalkServiceException":
        case "com.amazonaws.elasticbeanstalk#ElasticBeanstalkServiceException":
            response = {
                ...(await deserializeAws_queryElasticBeanstalkServiceExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InsufficientPrivilegesException":
        case "com.amazonaws.elasticbeanstalk#InsufficientPrivilegesException":
            response = {
                ...(await deserializeAws_queryInsufficientPrivilegesExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "OperationInProgressException":
        case "com.amazonaws.elasticbeanstalk#OperationInProgressException":
            response = {
                ...(await deserializeAws_queryOperationInProgressExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "PlatformVersionStillReferencedException":
        case "com.amazonaws.elasticbeanstalk#PlatformVersionStillReferencedException":
            response = {
                ...(await deserializeAws_queryPlatformVersionStillReferencedExceptionResponse(parsedOutput, context)),
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
const deserializeAws_queryDescribeAccountAttributesCommand = async (output, context) => {
    if (output.statusCode >= 300) {
        return deserializeAws_queryDescribeAccountAttributesCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_queryDescribeAccountAttributesResult(data.DescribeAccountAttributesResult, context);
    const response = {
        $metadata: deserializeMetadata(output),
        ...contents,
    };
    return Promise.resolve(response);
};
exports.deserializeAws_queryDescribeAccountAttributesCommand = deserializeAws_queryDescribeAccountAttributesCommand;
const deserializeAws_queryDescribeAccountAttributesCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadQueryErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "InsufficientPrivilegesException":
        case "com.amazonaws.elasticbeanstalk#InsufficientPrivilegesException":
            response = {
                ...(await deserializeAws_queryInsufficientPrivilegesExceptionResponse(parsedOutput, context)),
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
const deserializeAws_queryDescribeApplicationsCommand = async (output, context) => {
    if (output.statusCode >= 300) {
        return deserializeAws_queryDescribeApplicationsCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_queryApplicationDescriptionsMessage(data.DescribeApplicationsResult, context);
    const response = {
        $metadata: deserializeMetadata(output),
        ...contents,
    };
    return Promise.resolve(response);
};
exports.deserializeAws_queryDescribeApplicationsCommand = deserializeAws_queryDescribeApplicationsCommand;
const deserializeAws_queryDescribeApplicationsCommandError = async (output, context) => {
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
const deserializeAws_queryDescribeApplicationVersionsCommand = async (output, context) => {
    if (output.statusCode >= 300) {
        return deserializeAws_queryDescribeApplicationVersionsCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_queryApplicationVersionDescriptionsMessage(data.DescribeApplicationVersionsResult, context);
    const response = {
        $metadata: deserializeMetadata(output),
        ...contents,
    };
    return Promise.resolve(response);
};
exports.deserializeAws_queryDescribeApplicationVersionsCommand = deserializeAws_queryDescribeApplicationVersionsCommand;
const deserializeAws_queryDescribeApplicationVersionsCommandError = async (output, context) => {
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
const deserializeAws_queryDescribeConfigurationOptionsCommand = async (output, context) => {
    if (output.statusCode >= 300) {
        return deserializeAws_queryDescribeConfigurationOptionsCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_queryConfigurationOptionsDescription(data.DescribeConfigurationOptionsResult, context);
    const response = {
        $metadata: deserializeMetadata(output),
        ...contents,
    };
    return Promise.resolve(response);
};
exports.deserializeAws_queryDescribeConfigurationOptionsCommand = deserializeAws_queryDescribeConfigurationOptionsCommand;
const deserializeAws_queryDescribeConfigurationOptionsCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadQueryErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "TooManyBucketsException":
        case "com.amazonaws.elasticbeanstalk#TooManyBucketsException":
            response = {
                ...(await deserializeAws_queryTooManyBucketsExceptionResponse(parsedOutput, context)),
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
const deserializeAws_queryDescribeConfigurationSettingsCommand = async (output, context) => {
    if (output.statusCode >= 300) {
        return deserializeAws_queryDescribeConfigurationSettingsCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_queryConfigurationSettingsDescriptions(data.DescribeConfigurationSettingsResult, context);
    const response = {
        $metadata: deserializeMetadata(output),
        ...contents,
    };
    return Promise.resolve(response);
};
exports.deserializeAws_queryDescribeConfigurationSettingsCommand = deserializeAws_queryDescribeConfigurationSettingsCommand;
const deserializeAws_queryDescribeConfigurationSettingsCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadQueryErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "TooManyBucketsException":
        case "com.amazonaws.elasticbeanstalk#TooManyBucketsException":
            response = {
                ...(await deserializeAws_queryTooManyBucketsExceptionResponse(parsedOutput, context)),
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
const deserializeAws_queryDescribeEnvironmentHealthCommand = async (output, context) => {
    if (output.statusCode >= 300) {
        return deserializeAws_queryDescribeEnvironmentHealthCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_queryDescribeEnvironmentHealthResult(data.DescribeEnvironmentHealthResult, context);
    const response = {
        $metadata: deserializeMetadata(output),
        ...contents,
    };
    return Promise.resolve(response);
};
exports.deserializeAws_queryDescribeEnvironmentHealthCommand = deserializeAws_queryDescribeEnvironmentHealthCommand;
const deserializeAws_queryDescribeEnvironmentHealthCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadQueryErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "ElasticBeanstalkServiceException":
        case "com.amazonaws.elasticbeanstalk#ElasticBeanstalkServiceException":
            response = {
                ...(await deserializeAws_queryElasticBeanstalkServiceExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InvalidRequestException":
        case "com.amazonaws.elasticbeanstalk#InvalidRequestException":
            response = {
                ...(await deserializeAws_queryInvalidRequestExceptionResponse(parsedOutput, context)),
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
const deserializeAws_queryDescribeEnvironmentManagedActionHistoryCommand = async (output, context) => {
    if (output.statusCode >= 300) {
        return deserializeAws_queryDescribeEnvironmentManagedActionHistoryCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_queryDescribeEnvironmentManagedActionHistoryResult(data.DescribeEnvironmentManagedActionHistoryResult, context);
    const response = {
        $metadata: deserializeMetadata(output),
        ...contents,
    };
    return Promise.resolve(response);
};
exports.deserializeAws_queryDescribeEnvironmentManagedActionHistoryCommand = deserializeAws_queryDescribeEnvironmentManagedActionHistoryCommand;
const deserializeAws_queryDescribeEnvironmentManagedActionHistoryCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadQueryErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "ElasticBeanstalkServiceException":
        case "com.amazonaws.elasticbeanstalk#ElasticBeanstalkServiceException":
            response = {
                ...(await deserializeAws_queryElasticBeanstalkServiceExceptionResponse(parsedOutput, context)),
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
const deserializeAws_queryDescribeEnvironmentManagedActionsCommand = async (output, context) => {
    if (output.statusCode >= 300) {
        return deserializeAws_queryDescribeEnvironmentManagedActionsCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_queryDescribeEnvironmentManagedActionsResult(data.DescribeEnvironmentManagedActionsResult, context);
    const response = {
        $metadata: deserializeMetadata(output),
        ...contents,
    };
    return Promise.resolve(response);
};
exports.deserializeAws_queryDescribeEnvironmentManagedActionsCommand = deserializeAws_queryDescribeEnvironmentManagedActionsCommand;
const deserializeAws_queryDescribeEnvironmentManagedActionsCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadQueryErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "ElasticBeanstalkServiceException":
        case "com.amazonaws.elasticbeanstalk#ElasticBeanstalkServiceException":
            response = {
                ...(await deserializeAws_queryElasticBeanstalkServiceExceptionResponse(parsedOutput, context)),
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
const deserializeAws_queryDescribeEnvironmentResourcesCommand = async (output, context) => {
    if (output.statusCode >= 300) {
        return deserializeAws_queryDescribeEnvironmentResourcesCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_queryEnvironmentResourceDescriptionsMessage(data.DescribeEnvironmentResourcesResult, context);
    const response = {
        $metadata: deserializeMetadata(output),
        ...contents,
    };
    return Promise.resolve(response);
};
exports.deserializeAws_queryDescribeEnvironmentResourcesCommand = deserializeAws_queryDescribeEnvironmentResourcesCommand;
const deserializeAws_queryDescribeEnvironmentResourcesCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadQueryErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "InsufficientPrivilegesException":
        case "com.amazonaws.elasticbeanstalk#InsufficientPrivilegesException":
            response = {
                ...(await deserializeAws_queryInsufficientPrivilegesExceptionResponse(parsedOutput, context)),
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
const deserializeAws_queryDescribeEnvironmentsCommand = async (output, context) => {
    if (output.statusCode >= 300) {
        return deserializeAws_queryDescribeEnvironmentsCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_queryEnvironmentDescriptionsMessage(data.DescribeEnvironmentsResult, context);
    const response = {
        $metadata: deserializeMetadata(output),
        ...contents,
    };
    return Promise.resolve(response);
};
exports.deserializeAws_queryDescribeEnvironmentsCommand = deserializeAws_queryDescribeEnvironmentsCommand;
const deserializeAws_queryDescribeEnvironmentsCommandError = async (output, context) => {
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
const deserializeAws_queryDescribeEventsCommand = async (output, context) => {
    if (output.statusCode >= 300) {
        return deserializeAws_queryDescribeEventsCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_queryEventDescriptionsMessage(data.DescribeEventsResult, context);
    const response = {
        $metadata: deserializeMetadata(output),
        ...contents,
    };
    return Promise.resolve(response);
};
exports.deserializeAws_queryDescribeEventsCommand = deserializeAws_queryDescribeEventsCommand;
const deserializeAws_queryDescribeEventsCommandError = async (output, context) => {
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
const deserializeAws_queryDescribeInstancesHealthCommand = async (output, context) => {
    if (output.statusCode >= 300) {
        return deserializeAws_queryDescribeInstancesHealthCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_queryDescribeInstancesHealthResult(data.DescribeInstancesHealthResult, context);
    const response = {
        $metadata: deserializeMetadata(output),
        ...contents,
    };
    return Promise.resolve(response);
};
exports.deserializeAws_queryDescribeInstancesHealthCommand = deserializeAws_queryDescribeInstancesHealthCommand;
const deserializeAws_queryDescribeInstancesHealthCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadQueryErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "ElasticBeanstalkServiceException":
        case "com.amazonaws.elasticbeanstalk#ElasticBeanstalkServiceException":
            response = {
                ...(await deserializeAws_queryElasticBeanstalkServiceExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InvalidRequestException":
        case "com.amazonaws.elasticbeanstalk#InvalidRequestException":
            response = {
                ...(await deserializeAws_queryInvalidRequestExceptionResponse(parsedOutput, context)),
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
const deserializeAws_queryDescribePlatformVersionCommand = async (output, context) => {
    if (output.statusCode >= 300) {
        return deserializeAws_queryDescribePlatformVersionCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_queryDescribePlatformVersionResult(data.DescribePlatformVersionResult, context);
    const response = {
        $metadata: deserializeMetadata(output),
        ...contents,
    };
    return Promise.resolve(response);
};
exports.deserializeAws_queryDescribePlatformVersionCommand = deserializeAws_queryDescribePlatformVersionCommand;
const deserializeAws_queryDescribePlatformVersionCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadQueryErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "ElasticBeanstalkServiceException":
        case "com.amazonaws.elasticbeanstalk#ElasticBeanstalkServiceException":
            response = {
                ...(await deserializeAws_queryElasticBeanstalkServiceExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InsufficientPrivilegesException":
        case "com.amazonaws.elasticbeanstalk#InsufficientPrivilegesException":
            response = {
                ...(await deserializeAws_queryInsufficientPrivilegesExceptionResponse(parsedOutput, context)),
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
const deserializeAws_queryDisassociateEnvironmentOperationsRoleCommand = async (output, context) => {
    if (output.statusCode >= 300) {
        return deserializeAws_queryDisassociateEnvironmentOperationsRoleCommandError(output, context);
    }
    await collectBody(output.body, context);
    const response = {
        $metadata: deserializeMetadata(output),
    };
    return Promise.resolve(response);
};
exports.deserializeAws_queryDisassociateEnvironmentOperationsRoleCommand = deserializeAws_queryDisassociateEnvironmentOperationsRoleCommand;
const deserializeAws_queryDisassociateEnvironmentOperationsRoleCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadQueryErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "InsufficientPrivilegesException":
        case "com.amazonaws.elasticbeanstalk#InsufficientPrivilegesException":
            response = {
                ...(await deserializeAws_queryInsufficientPrivilegesExceptionResponse(parsedOutput, context)),
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
const deserializeAws_queryListAvailableSolutionStacksCommand = async (output, context) => {
    if (output.statusCode >= 300) {
        return deserializeAws_queryListAvailableSolutionStacksCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_queryListAvailableSolutionStacksResultMessage(data.ListAvailableSolutionStacksResult, context);
    const response = {
        $metadata: deserializeMetadata(output),
        ...contents,
    };
    return Promise.resolve(response);
};
exports.deserializeAws_queryListAvailableSolutionStacksCommand = deserializeAws_queryListAvailableSolutionStacksCommand;
const deserializeAws_queryListAvailableSolutionStacksCommandError = async (output, context) => {
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
const deserializeAws_queryListPlatformBranchesCommand = async (output, context) => {
    if (output.statusCode >= 300) {
        return deserializeAws_queryListPlatformBranchesCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_queryListPlatformBranchesResult(data.ListPlatformBranchesResult, context);
    const response = {
        $metadata: deserializeMetadata(output),
        ...contents,
    };
    return Promise.resolve(response);
};
exports.deserializeAws_queryListPlatformBranchesCommand = deserializeAws_queryListPlatformBranchesCommand;
const deserializeAws_queryListPlatformBranchesCommandError = async (output, context) => {
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
const deserializeAws_queryListPlatformVersionsCommand = async (output, context) => {
    if (output.statusCode >= 300) {
        return deserializeAws_queryListPlatformVersionsCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_queryListPlatformVersionsResult(data.ListPlatformVersionsResult, context);
    const response = {
        $metadata: deserializeMetadata(output),
        ...contents,
    };
    return Promise.resolve(response);
};
exports.deserializeAws_queryListPlatformVersionsCommand = deserializeAws_queryListPlatformVersionsCommand;
const deserializeAws_queryListPlatformVersionsCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadQueryErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "ElasticBeanstalkServiceException":
        case "com.amazonaws.elasticbeanstalk#ElasticBeanstalkServiceException":
            response = {
                ...(await deserializeAws_queryElasticBeanstalkServiceExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InsufficientPrivilegesException":
        case "com.amazonaws.elasticbeanstalk#InsufficientPrivilegesException":
            response = {
                ...(await deserializeAws_queryInsufficientPrivilegesExceptionResponse(parsedOutput, context)),
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
const deserializeAws_queryListTagsForResourceCommand = async (output, context) => {
    if (output.statusCode >= 300) {
        return deserializeAws_queryListTagsForResourceCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_queryResourceTagsDescriptionMessage(data.ListTagsForResourceResult, context);
    const response = {
        $metadata: deserializeMetadata(output),
        ...contents,
    };
    return Promise.resolve(response);
};
exports.deserializeAws_queryListTagsForResourceCommand = deserializeAws_queryListTagsForResourceCommand;
const deserializeAws_queryListTagsForResourceCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadQueryErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "InsufficientPrivilegesException":
        case "com.amazonaws.elasticbeanstalk#InsufficientPrivilegesException":
            response = {
                ...(await deserializeAws_queryInsufficientPrivilegesExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ResourceNotFoundException":
        case "com.amazonaws.elasticbeanstalk#ResourceNotFoundException":
            response = {
                ...(await deserializeAws_queryResourceNotFoundExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ResourceTypeNotSupportedException":
        case "com.amazonaws.elasticbeanstalk#ResourceTypeNotSupportedException":
            response = {
                ...(await deserializeAws_queryResourceTypeNotSupportedExceptionResponse(parsedOutput, context)),
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
const deserializeAws_queryRebuildEnvironmentCommand = async (output, context) => {
    if (output.statusCode >= 300) {
        return deserializeAws_queryRebuildEnvironmentCommandError(output, context);
    }
    await collectBody(output.body, context);
    const response = {
        $metadata: deserializeMetadata(output),
    };
    return Promise.resolve(response);
};
exports.deserializeAws_queryRebuildEnvironmentCommand = deserializeAws_queryRebuildEnvironmentCommand;
const deserializeAws_queryRebuildEnvironmentCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadQueryErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "InsufficientPrivilegesException":
        case "com.amazonaws.elasticbeanstalk#InsufficientPrivilegesException":
            response = {
                ...(await deserializeAws_queryInsufficientPrivilegesExceptionResponse(parsedOutput, context)),
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
const deserializeAws_queryRequestEnvironmentInfoCommand = async (output, context) => {
    if (output.statusCode >= 300) {
        return deserializeAws_queryRequestEnvironmentInfoCommandError(output, context);
    }
    await collectBody(output.body, context);
    const response = {
        $metadata: deserializeMetadata(output),
    };
    return Promise.resolve(response);
};
exports.deserializeAws_queryRequestEnvironmentInfoCommand = deserializeAws_queryRequestEnvironmentInfoCommand;
const deserializeAws_queryRequestEnvironmentInfoCommandError = async (output, context) => {
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
const deserializeAws_queryRestartAppServerCommand = async (output, context) => {
    if (output.statusCode >= 300) {
        return deserializeAws_queryRestartAppServerCommandError(output, context);
    }
    await collectBody(output.body, context);
    const response = {
        $metadata: deserializeMetadata(output),
    };
    return Promise.resolve(response);
};
exports.deserializeAws_queryRestartAppServerCommand = deserializeAws_queryRestartAppServerCommand;
const deserializeAws_queryRestartAppServerCommandError = async (output, context) => {
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
const deserializeAws_queryRetrieveEnvironmentInfoCommand = async (output, context) => {
    if (output.statusCode >= 300) {
        return deserializeAws_queryRetrieveEnvironmentInfoCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_queryRetrieveEnvironmentInfoResultMessage(data.RetrieveEnvironmentInfoResult, context);
    const response = {
        $metadata: deserializeMetadata(output),
        ...contents,
    };
    return Promise.resolve(response);
};
exports.deserializeAws_queryRetrieveEnvironmentInfoCommand = deserializeAws_queryRetrieveEnvironmentInfoCommand;
const deserializeAws_queryRetrieveEnvironmentInfoCommandError = async (output, context) => {
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
const deserializeAws_querySwapEnvironmentCNAMEsCommand = async (output, context) => {
    if (output.statusCode >= 300) {
        return deserializeAws_querySwapEnvironmentCNAMEsCommandError(output, context);
    }
    await collectBody(output.body, context);
    const response = {
        $metadata: deserializeMetadata(output),
    };
    return Promise.resolve(response);
};
exports.deserializeAws_querySwapEnvironmentCNAMEsCommand = deserializeAws_querySwapEnvironmentCNAMEsCommand;
const deserializeAws_querySwapEnvironmentCNAMEsCommandError = async (output, context) => {
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
const deserializeAws_queryTerminateEnvironmentCommand = async (output, context) => {
    if (output.statusCode >= 300) {
        return deserializeAws_queryTerminateEnvironmentCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_queryEnvironmentDescription(data.TerminateEnvironmentResult, context);
    const response = {
        $metadata: deserializeMetadata(output),
        ...contents,
    };
    return Promise.resolve(response);
};
exports.deserializeAws_queryTerminateEnvironmentCommand = deserializeAws_queryTerminateEnvironmentCommand;
const deserializeAws_queryTerminateEnvironmentCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadQueryErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "InsufficientPrivilegesException":
        case "com.amazonaws.elasticbeanstalk#InsufficientPrivilegesException":
            response = {
                ...(await deserializeAws_queryInsufficientPrivilegesExceptionResponse(parsedOutput, context)),
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
const deserializeAws_queryUpdateApplicationCommand = async (output, context) => {
    if (output.statusCode >= 300) {
        return deserializeAws_queryUpdateApplicationCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_queryApplicationDescriptionMessage(data.UpdateApplicationResult, context);
    const response = {
        $metadata: deserializeMetadata(output),
        ...contents,
    };
    return Promise.resolve(response);
};
exports.deserializeAws_queryUpdateApplicationCommand = deserializeAws_queryUpdateApplicationCommand;
const deserializeAws_queryUpdateApplicationCommandError = async (output, context) => {
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
const deserializeAws_queryUpdateApplicationResourceLifecycleCommand = async (output, context) => {
    if (output.statusCode >= 300) {
        return deserializeAws_queryUpdateApplicationResourceLifecycleCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_queryApplicationResourceLifecycleDescriptionMessage(data.UpdateApplicationResourceLifecycleResult, context);
    const response = {
        $metadata: deserializeMetadata(output),
        ...contents,
    };
    return Promise.resolve(response);
};
exports.deserializeAws_queryUpdateApplicationResourceLifecycleCommand = deserializeAws_queryUpdateApplicationResourceLifecycleCommand;
const deserializeAws_queryUpdateApplicationResourceLifecycleCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadQueryErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "InsufficientPrivilegesException":
        case "com.amazonaws.elasticbeanstalk#InsufficientPrivilegesException":
            response = {
                ...(await deserializeAws_queryInsufficientPrivilegesExceptionResponse(parsedOutput, context)),
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
const deserializeAws_queryUpdateApplicationVersionCommand = async (output, context) => {
    if (output.statusCode >= 300) {
        return deserializeAws_queryUpdateApplicationVersionCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_queryApplicationVersionDescriptionMessage(data.UpdateApplicationVersionResult, context);
    const response = {
        $metadata: deserializeMetadata(output),
        ...contents,
    };
    return Promise.resolve(response);
};
exports.deserializeAws_queryUpdateApplicationVersionCommand = deserializeAws_queryUpdateApplicationVersionCommand;
const deserializeAws_queryUpdateApplicationVersionCommandError = async (output, context) => {
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
const deserializeAws_queryUpdateConfigurationTemplateCommand = async (output, context) => {
    if (output.statusCode >= 300) {
        return deserializeAws_queryUpdateConfigurationTemplateCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_queryConfigurationSettingsDescription(data.UpdateConfigurationTemplateResult, context);
    const response = {
        $metadata: deserializeMetadata(output),
        ...contents,
    };
    return Promise.resolve(response);
};
exports.deserializeAws_queryUpdateConfigurationTemplateCommand = deserializeAws_queryUpdateConfigurationTemplateCommand;
const deserializeAws_queryUpdateConfigurationTemplateCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadQueryErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "InsufficientPrivilegesException":
        case "com.amazonaws.elasticbeanstalk#InsufficientPrivilegesException":
            response = {
                ...(await deserializeAws_queryInsufficientPrivilegesExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "TooManyBucketsException":
        case "com.amazonaws.elasticbeanstalk#TooManyBucketsException":
            response = {
                ...(await deserializeAws_queryTooManyBucketsExceptionResponse(parsedOutput, context)),
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
const deserializeAws_queryUpdateEnvironmentCommand = async (output, context) => {
    if (output.statusCode >= 300) {
        return deserializeAws_queryUpdateEnvironmentCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_queryEnvironmentDescription(data.UpdateEnvironmentResult, context);
    const response = {
        $metadata: deserializeMetadata(output),
        ...contents,
    };
    return Promise.resolve(response);
};
exports.deserializeAws_queryUpdateEnvironmentCommand = deserializeAws_queryUpdateEnvironmentCommand;
const deserializeAws_queryUpdateEnvironmentCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadQueryErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "InsufficientPrivilegesException":
        case "com.amazonaws.elasticbeanstalk#InsufficientPrivilegesException":
            response = {
                ...(await deserializeAws_queryInsufficientPrivilegesExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "TooManyBucketsException":
        case "com.amazonaws.elasticbeanstalk#TooManyBucketsException":
            response = {
                ...(await deserializeAws_queryTooManyBucketsExceptionResponse(parsedOutput, context)),
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
const deserializeAws_queryUpdateTagsForResourceCommand = async (output, context) => {
    if (output.statusCode >= 300) {
        return deserializeAws_queryUpdateTagsForResourceCommandError(output, context);
    }
    await collectBody(output.body, context);
    const response = {
        $metadata: deserializeMetadata(output),
    };
    return Promise.resolve(response);
};
exports.deserializeAws_queryUpdateTagsForResourceCommand = deserializeAws_queryUpdateTagsForResourceCommand;
const deserializeAws_queryUpdateTagsForResourceCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadQueryErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "InsufficientPrivilegesException":
        case "com.amazonaws.elasticbeanstalk#InsufficientPrivilegesException":
            response = {
                ...(await deserializeAws_queryInsufficientPrivilegesExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "OperationInProgressException":
        case "com.amazonaws.elasticbeanstalk#OperationInProgressException":
            response = {
                ...(await deserializeAws_queryOperationInProgressExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ResourceNotFoundException":
        case "com.amazonaws.elasticbeanstalk#ResourceNotFoundException":
            response = {
                ...(await deserializeAws_queryResourceNotFoundExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ResourceTypeNotSupportedException":
        case "com.amazonaws.elasticbeanstalk#ResourceTypeNotSupportedException":
            response = {
                ...(await deserializeAws_queryResourceTypeNotSupportedExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "TooManyTagsException":
        case "com.amazonaws.elasticbeanstalk#TooManyTagsException":
            response = {
                ...(await deserializeAws_queryTooManyTagsExceptionResponse(parsedOutput, context)),
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
const deserializeAws_queryValidateConfigurationSettingsCommand = async (output, context) => {
    if (output.statusCode >= 300) {
        return deserializeAws_queryValidateConfigurationSettingsCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_queryConfigurationSettingsValidationMessages(data.ValidateConfigurationSettingsResult, context);
    const response = {
        $metadata: deserializeMetadata(output),
        ...contents,
    };
    return Promise.resolve(response);
};
exports.deserializeAws_queryValidateConfigurationSettingsCommand = deserializeAws_queryValidateConfigurationSettingsCommand;
const deserializeAws_queryValidateConfigurationSettingsCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadQueryErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "InsufficientPrivilegesException":
        case "com.amazonaws.elasticbeanstalk#InsufficientPrivilegesException":
            response = {
                ...(await deserializeAws_queryInsufficientPrivilegesExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "TooManyBucketsException":
        case "com.amazonaws.elasticbeanstalk#TooManyBucketsException":
            response = {
                ...(await deserializeAws_queryTooManyBucketsExceptionResponse(parsedOutput, context)),
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
const deserializeAws_queryCodeBuildNotInServiceRegionExceptionResponse = async (parsedOutput, context) => {
    const body = parsedOutput.body;
    const deserialized = deserializeAws_queryCodeBuildNotInServiceRegionException(body.Error, context);
    const contents = {
        name: "CodeBuildNotInServiceRegionException",
        $fault: "client",
        $metadata: deserializeMetadata(parsedOutput),
        ...deserialized,
    };
    return contents;
};
const deserializeAws_queryElasticBeanstalkServiceExceptionResponse = async (parsedOutput, context) => {
    const body = parsedOutput.body;
    const deserialized = deserializeAws_queryElasticBeanstalkServiceException(body.Error, context);
    const contents = {
        name: "ElasticBeanstalkServiceException",
        $fault: "client",
        $metadata: deserializeMetadata(parsedOutput),
        ...deserialized,
    };
    return contents;
};
const deserializeAws_queryInsufficientPrivilegesExceptionResponse = async (parsedOutput, context) => {
    const body = parsedOutput.body;
    const deserialized = deserializeAws_queryInsufficientPrivilegesException(body.Error, context);
    const contents = {
        name: "InsufficientPrivilegesException",
        $fault: "client",
        $metadata: deserializeMetadata(parsedOutput),
        ...deserialized,
    };
    return contents;
};
const deserializeAws_queryInvalidRequestExceptionResponse = async (parsedOutput, context) => {
    const body = parsedOutput.body;
    const deserialized = deserializeAws_queryInvalidRequestException(body.Error, context);
    const contents = {
        name: "InvalidRequestException",
        $fault: "client",
        $metadata: deserializeMetadata(parsedOutput),
        ...deserialized,
    };
    return contents;
};
const deserializeAws_queryManagedActionInvalidStateExceptionResponse = async (parsedOutput, context) => {
    const body = parsedOutput.body;
    const deserialized = deserializeAws_queryManagedActionInvalidStateException(body.Error, context);
    const contents = {
        name: "ManagedActionInvalidStateException",
        $fault: "client",
        $metadata: deserializeMetadata(parsedOutput),
        ...deserialized,
    };
    return contents;
};
const deserializeAws_queryOperationInProgressExceptionResponse = async (parsedOutput, context) => {
    const body = parsedOutput.body;
    const deserialized = deserializeAws_queryOperationInProgressException(body.Error, context);
    const contents = {
        name: "OperationInProgressException",
        $fault: "client",
        $metadata: deserializeMetadata(parsedOutput),
        ...deserialized,
    };
    return contents;
};
const deserializeAws_queryPlatformVersionStillReferencedExceptionResponse = async (parsedOutput, context) => {
    const body = parsedOutput.body;
    const deserialized = deserializeAws_queryPlatformVersionStillReferencedException(body.Error, context);
    const contents = {
        name: "PlatformVersionStillReferencedException",
        $fault: "client",
        $metadata: deserializeMetadata(parsedOutput),
        ...deserialized,
    };
    return contents;
};
const deserializeAws_queryResourceNotFoundExceptionResponse = async (parsedOutput, context) => {
    const body = parsedOutput.body;
    const deserialized = deserializeAws_queryResourceNotFoundException(body.Error, context);
    const contents = {
        name: "ResourceNotFoundException",
        $fault: "client",
        $metadata: deserializeMetadata(parsedOutput),
        ...deserialized,
    };
    return contents;
};
const deserializeAws_queryResourceTypeNotSupportedExceptionResponse = async (parsedOutput, context) => {
    const body = parsedOutput.body;
    const deserialized = deserializeAws_queryResourceTypeNotSupportedException(body.Error, context);
    const contents = {
        name: "ResourceTypeNotSupportedException",
        $fault: "client",
        $metadata: deserializeMetadata(parsedOutput),
        ...deserialized,
    };
    return contents;
};
const deserializeAws_queryS3LocationNotInServiceRegionExceptionResponse = async (parsedOutput, context) => {
    const body = parsedOutput.body;
    const deserialized = deserializeAws_queryS3LocationNotInServiceRegionException(body.Error, context);
    const contents = {
        name: "S3LocationNotInServiceRegionException",
        $fault: "client",
        $metadata: deserializeMetadata(parsedOutput),
        ...deserialized,
    };
    return contents;
};
const deserializeAws_queryS3SubscriptionRequiredExceptionResponse = async (parsedOutput, context) => {
    const body = parsedOutput.body;
    const deserialized = deserializeAws_queryS3SubscriptionRequiredException(body.Error, context);
    const contents = {
        name: "S3SubscriptionRequiredException",
        $fault: "client",
        $metadata: deserializeMetadata(parsedOutput),
        ...deserialized,
    };
    return contents;
};
const deserializeAws_querySourceBundleDeletionExceptionResponse = async (parsedOutput, context) => {
    const body = parsedOutput.body;
    const deserialized = deserializeAws_querySourceBundleDeletionException(body.Error, context);
    const contents = {
        name: "SourceBundleDeletionException",
        $fault: "client",
        $metadata: deserializeMetadata(parsedOutput),
        ...deserialized,
    };
    return contents;
};
const deserializeAws_queryTooManyApplicationsExceptionResponse = async (parsedOutput, context) => {
    const body = parsedOutput.body;
    const deserialized = deserializeAws_queryTooManyApplicationsException(body.Error, context);
    const contents = {
        name: "TooManyApplicationsException",
        $fault: "client",
        $metadata: deserializeMetadata(parsedOutput),
        ...deserialized,
    };
    return contents;
};
const deserializeAws_queryTooManyApplicationVersionsExceptionResponse = async (parsedOutput, context) => {
    const body = parsedOutput.body;
    const deserialized = deserializeAws_queryTooManyApplicationVersionsException(body.Error, context);
    const contents = {
        name: "TooManyApplicationVersionsException",
        $fault: "client",
        $metadata: deserializeMetadata(parsedOutput),
        ...deserialized,
    };
    return contents;
};
const deserializeAws_queryTooManyBucketsExceptionResponse = async (parsedOutput, context) => {
    const body = parsedOutput.body;
    const deserialized = deserializeAws_queryTooManyBucketsException(body.Error, context);
    const contents = {
        name: "TooManyBucketsException",
        $fault: "client",
        $metadata: deserializeMetadata(parsedOutput),
        ...deserialized,
    };
    return contents;
};
const deserializeAws_queryTooManyConfigurationTemplatesExceptionResponse = async (parsedOutput, context) => {
    const body = parsedOutput.body;
    const deserialized = deserializeAws_queryTooManyConfigurationTemplatesException(body.Error, context);
    const contents = {
        name: "TooManyConfigurationTemplatesException",
        $fault: "client",
        $metadata: deserializeMetadata(parsedOutput),
        ...deserialized,
    };
    return contents;
};
const deserializeAws_queryTooManyEnvironmentsExceptionResponse = async (parsedOutput, context) => {
    const body = parsedOutput.body;
    const deserialized = deserializeAws_queryTooManyEnvironmentsException(body.Error, context);
    const contents = {
        name: "TooManyEnvironmentsException",
        $fault: "client",
        $metadata: deserializeMetadata(parsedOutput),
        ...deserialized,
    };
    return contents;
};
const deserializeAws_queryTooManyPlatformsExceptionResponse = async (parsedOutput, context) => {
    const body = parsedOutput.body;
    const deserialized = deserializeAws_queryTooManyPlatformsException(body.Error, context);
    const contents = {
        name: "TooManyPlatformsException",
        $fault: "client",
        $metadata: deserializeMetadata(parsedOutput),
        ...deserialized,
    };
    return contents;
};
const deserializeAws_queryTooManyTagsExceptionResponse = async (parsedOutput, context) => {
    const body = parsedOutput.body;
    const deserialized = deserializeAws_queryTooManyTagsException(body.Error, context);
    const contents = {
        name: "TooManyTagsException",
        $fault: "client",
        $metadata: deserializeMetadata(parsedOutput),
        ...deserialized,
    };
    return contents;
};
const serializeAws_queryAbortEnvironmentUpdateMessage = (input, context) => {
    const entries = {};
    if (input.EnvironmentId !== undefined && input.EnvironmentId !== null) {
        entries["EnvironmentId"] = input.EnvironmentId;
    }
    if (input.EnvironmentName !== undefined && input.EnvironmentName !== null) {
        entries["EnvironmentName"] = input.EnvironmentName;
    }
    return entries;
};
const serializeAws_queryApplicationNamesList = (input, context) => {
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
const serializeAws_queryApplicationResourceLifecycleConfig = (input, context) => {
    const entries = {};
    if (input.ServiceRole !== undefined && input.ServiceRole !== null) {
        entries["ServiceRole"] = input.ServiceRole;
    }
    if (input.VersionLifecycleConfig !== undefined && input.VersionLifecycleConfig !== null) {
        const memberEntries = serializeAws_queryApplicationVersionLifecycleConfig(input.VersionLifecycleConfig, context);
        Object.entries(memberEntries).forEach(([key, value]) => {
            const loc = `VersionLifecycleConfig.${key}`;
            entries[loc] = value;
        });
    }
    return entries;
};
const serializeAws_queryApplicationVersionLifecycleConfig = (input, context) => {
    const entries = {};
    if (input.MaxCountRule !== undefined && input.MaxCountRule !== null) {
        const memberEntries = serializeAws_queryMaxCountRule(input.MaxCountRule, context);
        Object.entries(memberEntries).forEach(([key, value]) => {
            const loc = `MaxCountRule.${key}`;
            entries[loc] = value;
        });
    }
    if (input.MaxAgeRule !== undefined && input.MaxAgeRule !== null) {
        const memberEntries = serializeAws_queryMaxAgeRule(input.MaxAgeRule, context);
        Object.entries(memberEntries).forEach(([key, value]) => {
            const loc = `MaxAgeRule.${key}`;
            entries[loc] = value;
        });
    }
    return entries;
};
const serializeAws_queryApplyEnvironmentManagedActionRequest = (input, context) => {
    const entries = {};
    if (input.EnvironmentName !== undefined && input.EnvironmentName !== null) {
        entries["EnvironmentName"] = input.EnvironmentName;
    }
    if (input.EnvironmentId !== undefined && input.EnvironmentId !== null) {
        entries["EnvironmentId"] = input.EnvironmentId;
    }
    if (input.ActionId !== undefined && input.ActionId !== null) {
        entries["ActionId"] = input.ActionId;
    }
    return entries;
};
const serializeAws_queryAssociateEnvironmentOperationsRoleMessage = (input, context) => {
    const entries = {};
    if (input.EnvironmentName !== undefined && input.EnvironmentName !== null) {
        entries["EnvironmentName"] = input.EnvironmentName;
    }
    if (input.OperationsRole !== undefined && input.OperationsRole !== null) {
        entries["OperationsRole"] = input.OperationsRole;
    }
    return entries;
};
const serializeAws_queryBuildConfiguration = (input, context) => {
    const entries = {};
    if (input.ArtifactName !== undefined && input.ArtifactName !== null) {
        entries["ArtifactName"] = input.ArtifactName;
    }
    if (input.CodeBuildServiceRole !== undefined && input.CodeBuildServiceRole !== null) {
        entries["CodeBuildServiceRole"] = input.CodeBuildServiceRole;
    }
    if (input.ComputeType !== undefined && input.ComputeType !== null) {
        entries["ComputeType"] = input.ComputeType;
    }
    if (input.Image !== undefined && input.Image !== null) {
        entries["Image"] = input.Image;
    }
    if (input.TimeoutInMinutes !== undefined && input.TimeoutInMinutes !== null) {
        entries["TimeoutInMinutes"] = input.TimeoutInMinutes;
    }
    return entries;
};
const serializeAws_queryCheckDNSAvailabilityMessage = (input, context) => {
    const entries = {};
    if (input.CNAMEPrefix !== undefined && input.CNAMEPrefix !== null) {
        entries["CNAMEPrefix"] = input.CNAMEPrefix;
    }
    return entries;
};
const serializeAws_queryComposeEnvironmentsMessage = (input, context) => {
    const entries = {};
    if (input.ApplicationName !== undefined && input.ApplicationName !== null) {
        entries["ApplicationName"] = input.ApplicationName;
    }
    if (input.GroupName !== undefined && input.GroupName !== null) {
        entries["GroupName"] = input.GroupName;
    }
    if (input.VersionLabels !== undefined && input.VersionLabels !== null) {
        const memberEntries = serializeAws_queryVersionLabels(input.VersionLabels, context);
        Object.entries(memberEntries).forEach(([key, value]) => {
            const loc = `VersionLabels.${key}`;
            entries[loc] = value;
        });
    }
    return entries;
};
const serializeAws_queryConfigurationOptionSetting = (input, context) => {
    const entries = {};
    if (input.ResourceName !== undefined && input.ResourceName !== null) {
        entries["ResourceName"] = input.ResourceName;
    }
    if (input.Namespace !== undefined && input.Namespace !== null) {
        entries["Namespace"] = input.Namespace;
    }
    if (input.OptionName !== undefined && input.OptionName !== null) {
        entries["OptionName"] = input.OptionName;
    }
    if (input.Value !== undefined && input.Value !== null) {
        entries["Value"] = input.Value;
    }
    return entries;
};
const serializeAws_queryConfigurationOptionSettingsList = (input, context) => {
    const entries = {};
    let counter = 1;
    for (let entry of input) {
        if (entry === null) {
            continue;
        }
        const memberEntries = serializeAws_queryConfigurationOptionSetting(entry, context);
        Object.entries(memberEntries).forEach(([key, value]) => {
            entries[`member.${counter}.${key}`] = value;
        });
        counter++;
    }
    return entries;
};
const serializeAws_queryCreateApplicationMessage = (input, context) => {
    const entries = {};
    if (input.ApplicationName !== undefined && input.ApplicationName !== null) {
        entries["ApplicationName"] = input.ApplicationName;
    }
    if (input.Description !== undefined && input.Description !== null) {
        entries["Description"] = input.Description;
    }
    if (input.ResourceLifecycleConfig !== undefined && input.ResourceLifecycleConfig !== null) {
        const memberEntries = serializeAws_queryApplicationResourceLifecycleConfig(input.ResourceLifecycleConfig, context);
        Object.entries(memberEntries).forEach(([key, value]) => {
            const loc = `ResourceLifecycleConfig.${key}`;
            entries[loc] = value;
        });
    }
    if (input.Tags !== undefined && input.Tags !== null) {
        const memberEntries = serializeAws_queryTags(input.Tags, context);
        Object.entries(memberEntries).forEach(([key, value]) => {
            const loc = `Tags.${key}`;
            entries[loc] = value;
        });
    }
    return entries;
};
const serializeAws_queryCreateApplicationVersionMessage = (input, context) => {
    const entries = {};
    if (input.ApplicationName !== undefined && input.ApplicationName !== null) {
        entries["ApplicationName"] = input.ApplicationName;
    }
    if (input.VersionLabel !== undefined && input.VersionLabel !== null) {
        entries["VersionLabel"] = input.VersionLabel;
    }
    if (input.Description !== undefined && input.Description !== null) {
        entries["Description"] = input.Description;
    }
    if (input.SourceBuildInformation !== undefined && input.SourceBuildInformation !== null) {
        const memberEntries = serializeAws_querySourceBuildInformation(input.SourceBuildInformation, context);
        Object.entries(memberEntries).forEach(([key, value]) => {
            const loc = `SourceBuildInformation.${key}`;
            entries[loc] = value;
        });
    }
    if (input.SourceBundle !== undefined && input.SourceBundle !== null) {
        const memberEntries = serializeAws_queryS3Location(input.SourceBundle, context);
        Object.entries(memberEntries).forEach(([key, value]) => {
            const loc = `SourceBundle.${key}`;
            entries[loc] = value;
        });
    }
    if (input.BuildConfiguration !== undefined && input.BuildConfiguration !== null) {
        const memberEntries = serializeAws_queryBuildConfiguration(input.BuildConfiguration, context);
        Object.entries(memberEntries).forEach(([key, value]) => {
            const loc = `BuildConfiguration.${key}`;
            entries[loc] = value;
        });
    }
    if (input.AutoCreateApplication !== undefined && input.AutoCreateApplication !== null) {
        entries["AutoCreateApplication"] = input.AutoCreateApplication;
    }
    if (input.Process !== undefined && input.Process !== null) {
        entries["Process"] = input.Process;
    }
    if (input.Tags !== undefined && input.Tags !== null) {
        const memberEntries = serializeAws_queryTags(input.Tags, context);
        Object.entries(memberEntries).forEach(([key, value]) => {
            const loc = `Tags.${key}`;
            entries[loc] = value;
        });
    }
    return entries;
};
const serializeAws_queryCreateConfigurationTemplateMessage = (input, context) => {
    const entries = {};
    if (input.ApplicationName !== undefined && input.ApplicationName !== null) {
        entries["ApplicationName"] = input.ApplicationName;
    }
    if (input.TemplateName !== undefined && input.TemplateName !== null) {
        entries["TemplateName"] = input.TemplateName;
    }
    if (input.SolutionStackName !== undefined && input.SolutionStackName !== null) {
        entries["SolutionStackName"] = input.SolutionStackName;
    }
    if (input.PlatformArn !== undefined && input.PlatformArn !== null) {
        entries["PlatformArn"] = input.PlatformArn;
    }
    if (input.SourceConfiguration !== undefined && input.SourceConfiguration !== null) {
        const memberEntries = serializeAws_querySourceConfiguration(input.SourceConfiguration, context);
        Object.entries(memberEntries).forEach(([key, value]) => {
            const loc = `SourceConfiguration.${key}`;
            entries[loc] = value;
        });
    }
    if (input.EnvironmentId !== undefined && input.EnvironmentId !== null) {
        entries["EnvironmentId"] = input.EnvironmentId;
    }
    if (input.Description !== undefined && input.Description !== null) {
        entries["Description"] = input.Description;
    }
    if (input.OptionSettings !== undefined && input.OptionSettings !== null) {
        const memberEntries = serializeAws_queryConfigurationOptionSettingsList(input.OptionSettings, context);
        Object.entries(memberEntries).forEach(([key, value]) => {
            const loc = `OptionSettings.${key}`;
            entries[loc] = value;
        });
    }
    if (input.Tags !== undefined && input.Tags !== null) {
        const memberEntries = serializeAws_queryTags(input.Tags, context);
        Object.entries(memberEntries).forEach(([key, value]) => {
            const loc = `Tags.${key}`;
            entries[loc] = value;
        });
    }
    return entries;
};
const serializeAws_queryCreateEnvironmentMessage = (input, context) => {
    const entries = {};
    if (input.ApplicationName !== undefined && input.ApplicationName !== null) {
        entries["ApplicationName"] = input.ApplicationName;
    }
    if (input.EnvironmentName !== undefined && input.EnvironmentName !== null) {
        entries["EnvironmentName"] = input.EnvironmentName;
    }
    if (input.GroupName !== undefined && input.GroupName !== null) {
        entries["GroupName"] = input.GroupName;
    }
    if (input.Description !== undefined && input.Description !== null) {
        entries["Description"] = input.Description;
    }
    if (input.CNAMEPrefix !== undefined && input.CNAMEPrefix !== null) {
        entries["CNAMEPrefix"] = input.CNAMEPrefix;
    }
    if (input.Tier !== undefined && input.Tier !== null) {
        const memberEntries = serializeAws_queryEnvironmentTier(input.Tier, context);
        Object.entries(memberEntries).forEach(([key, value]) => {
            const loc = `Tier.${key}`;
            entries[loc] = value;
        });
    }
    if (input.Tags !== undefined && input.Tags !== null) {
        const memberEntries = serializeAws_queryTags(input.Tags, context);
        Object.entries(memberEntries).forEach(([key, value]) => {
            const loc = `Tags.${key}`;
            entries[loc] = value;
        });
    }
    if (input.VersionLabel !== undefined && input.VersionLabel !== null) {
        entries["VersionLabel"] = input.VersionLabel;
    }
    if (input.TemplateName !== undefined && input.TemplateName !== null) {
        entries["TemplateName"] = input.TemplateName;
    }
    if (input.SolutionStackName !== undefined && input.SolutionStackName !== null) {
        entries["SolutionStackName"] = input.SolutionStackName;
    }
    if (input.PlatformArn !== undefined && input.PlatformArn !== null) {
        entries["PlatformArn"] = input.PlatformArn;
    }
    if (input.OptionSettings !== undefined && input.OptionSettings !== null) {
        const memberEntries = serializeAws_queryConfigurationOptionSettingsList(input.OptionSettings, context);
        Object.entries(memberEntries).forEach(([key, value]) => {
            const loc = `OptionSettings.${key}`;
            entries[loc] = value;
        });
    }
    if (input.OptionsToRemove !== undefined && input.OptionsToRemove !== null) {
        const memberEntries = serializeAws_queryOptionsSpecifierList(input.OptionsToRemove, context);
        Object.entries(memberEntries).forEach(([key, value]) => {
            const loc = `OptionsToRemove.${key}`;
            entries[loc] = value;
        });
    }
    if (input.OperationsRole !== undefined && input.OperationsRole !== null) {
        entries["OperationsRole"] = input.OperationsRole;
    }
    return entries;
};
const serializeAws_queryCreatePlatformVersionRequest = (input, context) => {
    const entries = {};
    if (input.PlatformName !== undefined && input.PlatformName !== null) {
        entries["PlatformName"] = input.PlatformName;
    }
    if (input.PlatformVersion !== undefined && input.PlatformVersion !== null) {
        entries["PlatformVersion"] = input.PlatformVersion;
    }
    if (input.PlatformDefinitionBundle !== undefined && input.PlatformDefinitionBundle !== null) {
        const memberEntries = serializeAws_queryS3Location(input.PlatformDefinitionBundle, context);
        Object.entries(memberEntries).forEach(([key, value]) => {
            const loc = `PlatformDefinitionBundle.${key}`;
            entries[loc] = value;
        });
    }
    if (input.EnvironmentName !== undefined && input.EnvironmentName !== null) {
        entries["EnvironmentName"] = input.EnvironmentName;
    }
    if (input.OptionSettings !== undefined && input.OptionSettings !== null) {
        const memberEntries = serializeAws_queryConfigurationOptionSettingsList(input.OptionSettings, context);
        Object.entries(memberEntries).forEach(([key, value]) => {
            const loc = `OptionSettings.${key}`;
            entries[loc] = value;
        });
    }
    if (input.Tags !== undefined && input.Tags !== null) {
        const memberEntries = serializeAws_queryTags(input.Tags, context);
        Object.entries(memberEntries).forEach(([key, value]) => {
            const loc = `Tags.${key}`;
            entries[loc] = value;
        });
    }
    return entries;
};
const serializeAws_queryDeleteApplicationMessage = (input, context) => {
    const entries = {};
    if (input.ApplicationName !== undefined && input.ApplicationName !== null) {
        entries["ApplicationName"] = input.ApplicationName;
    }
    if (input.TerminateEnvByForce !== undefined && input.TerminateEnvByForce !== null) {
        entries["TerminateEnvByForce"] = input.TerminateEnvByForce;
    }
    return entries;
};
const serializeAws_queryDeleteApplicationVersionMessage = (input, context) => {
    const entries = {};
    if (input.ApplicationName !== undefined && input.ApplicationName !== null) {
        entries["ApplicationName"] = input.ApplicationName;
    }
    if (input.VersionLabel !== undefined && input.VersionLabel !== null) {
        entries["VersionLabel"] = input.VersionLabel;
    }
    if (input.DeleteSourceBundle !== undefined && input.DeleteSourceBundle !== null) {
        entries["DeleteSourceBundle"] = input.DeleteSourceBundle;
    }
    return entries;
};
const serializeAws_queryDeleteConfigurationTemplateMessage = (input, context) => {
    const entries = {};
    if (input.ApplicationName !== undefined && input.ApplicationName !== null) {
        entries["ApplicationName"] = input.ApplicationName;
    }
    if (input.TemplateName !== undefined && input.TemplateName !== null) {
        entries["TemplateName"] = input.TemplateName;
    }
    return entries;
};
const serializeAws_queryDeleteEnvironmentConfigurationMessage = (input, context) => {
    const entries = {};
    if (input.ApplicationName !== undefined && input.ApplicationName !== null) {
        entries["ApplicationName"] = input.ApplicationName;
    }
    if (input.EnvironmentName !== undefined && input.EnvironmentName !== null) {
        entries["EnvironmentName"] = input.EnvironmentName;
    }
    return entries;
};
const serializeAws_queryDeletePlatformVersionRequest = (input, context) => {
    const entries = {};
    if (input.PlatformArn !== undefined && input.PlatformArn !== null) {
        entries["PlatformArn"] = input.PlatformArn;
    }
    return entries;
};
const serializeAws_queryDescribeApplicationsMessage = (input, context) => {
    const entries = {};
    if (input.ApplicationNames !== undefined && input.ApplicationNames !== null) {
        const memberEntries = serializeAws_queryApplicationNamesList(input.ApplicationNames, context);
        Object.entries(memberEntries).forEach(([key, value]) => {
            const loc = `ApplicationNames.${key}`;
            entries[loc] = value;
        });
    }
    return entries;
};
const serializeAws_queryDescribeApplicationVersionsMessage = (input, context) => {
    const entries = {};
    if (input.ApplicationName !== undefined && input.ApplicationName !== null) {
        entries["ApplicationName"] = input.ApplicationName;
    }
    if (input.VersionLabels !== undefined && input.VersionLabels !== null) {
        const memberEntries = serializeAws_queryVersionLabelsList(input.VersionLabels, context);
        Object.entries(memberEntries).forEach(([key, value]) => {
            const loc = `VersionLabels.${key}`;
            entries[loc] = value;
        });
    }
    if (input.MaxRecords !== undefined && input.MaxRecords !== null) {
        entries["MaxRecords"] = input.MaxRecords;
    }
    if (input.NextToken !== undefined && input.NextToken !== null) {
        entries["NextToken"] = input.NextToken;
    }
    return entries;
};
const serializeAws_queryDescribeConfigurationOptionsMessage = (input, context) => {
    const entries = {};
    if (input.ApplicationName !== undefined && input.ApplicationName !== null) {
        entries["ApplicationName"] = input.ApplicationName;
    }
    if (input.TemplateName !== undefined && input.TemplateName !== null) {
        entries["TemplateName"] = input.TemplateName;
    }
    if (input.EnvironmentName !== undefined && input.EnvironmentName !== null) {
        entries["EnvironmentName"] = input.EnvironmentName;
    }
    if (input.SolutionStackName !== undefined && input.SolutionStackName !== null) {
        entries["SolutionStackName"] = input.SolutionStackName;
    }
    if (input.PlatformArn !== undefined && input.PlatformArn !== null) {
        entries["PlatformArn"] = input.PlatformArn;
    }
    if (input.Options !== undefined && input.Options !== null) {
        const memberEntries = serializeAws_queryOptionsSpecifierList(input.Options, context);
        Object.entries(memberEntries).forEach(([key, value]) => {
            const loc = `Options.${key}`;
            entries[loc] = value;
        });
    }
    return entries;
};
const serializeAws_queryDescribeConfigurationSettingsMessage = (input, context) => {
    const entries = {};
    if (input.ApplicationName !== undefined && input.ApplicationName !== null) {
        entries["ApplicationName"] = input.ApplicationName;
    }
    if (input.TemplateName !== undefined && input.TemplateName !== null) {
        entries["TemplateName"] = input.TemplateName;
    }
    if (input.EnvironmentName !== undefined && input.EnvironmentName !== null) {
        entries["EnvironmentName"] = input.EnvironmentName;
    }
    return entries;
};
const serializeAws_queryDescribeEnvironmentHealthRequest = (input, context) => {
    const entries = {};
    if (input.EnvironmentName !== undefined && input.EnvironmentName !== null) {
        entries["EnvironmentName"] = input.EnvironmentName;
    }
    if (input.EnvironmentId !== undefined && input.EnvironmentId !== null) {
        entries["EnvironmentId"] = input.EnvironmentId;
    }
    if (input.AttributeNames !== undefined && input.AttributeNames !== null) {
        const memberEntries = serializeAws_queryEnvironmentHealthAttributes(input.AttributeNames, context);
        Object.entries(memberEntries).forEach(([key, value]) => {
            const loc = `AttributeNames.${key}`;
            entries[loc] = value;
        });
    }
    return entries;
};
const serializeAws_queryDescribeEnvironmentManagedActionHistoryRequest = (input, context) => {
    const entries = {};
    if (input.EnvironmentId !== undefined && input.EnvironmentId !== null) {
        entries["EnvironmentId"] = input.EnvironmentId;
    }
    if (input.EnvironmentName !== undefined && input.EnvironmentName !== null) {
        entries["EnvironmentName"] = input.EnvironmentName;
    }
    if (input.NextToken !== undefined && input.NextToken !== null) {
        entries["NextToken"] = input.NextToken;
    }
    if (input.MaxItems !== undefined && input.MaxItems !== null) {
        entries["MaxItems"] = input.MaxItems;
    }
    return entries;
};
const serializeAws_queryDescribeEnvironmentManagedActionsRequest = (input, context) => {
    const entries = {};
    if (input.EnvironmentName !== undefined && input.EnvironmentName !== null) {
        entries["EnvironmentName"] = input.EnvironmentName;
    }
    if (input.EnvironmentId !== undefined && input.EnvironmentId !== null) {
        entries["EnvironmentId"] = input.EnvironmentId;
    }
    if (input.Status !== undefined && input.Status !== null) {
        entries["Status"] = input.Status;
    }
    return entries;
};
const serializeAws_queryDescribeEnvironmentResourcesMessage = (input, context) => {
    const entries = {};
    if (input.EnvironmentId !== undefined && input.EnvironmentId !== null) {
        entries["EnvironmentId"] = input.EnvironmentId;
    }
    if (input.EnvironmentName !== undefined && input.EnvironmentName !== null) {
        entries["EnvironmentName"] = input.EnvironmentName;
    }
    return entries;
};
const serializeAws_queryDescribeEnvironmentsMessage = (input, context) => {
    const entries = {};
    if (input.ApplicationName !== undefined && input.ApplicationName !== null) {
        entries["ApplicationName"] = input.ApplicationName;
    }
    if (input.VersionLabel !== undefined && input.VersionLabel !== null) {
        entries["VersionLabel"] = input.VersionLabel;
    }
    if (input.EnvironmentIds !== undefined && input.EnvironmentIds !== null) {
        const memberEntries = serializeAws_queryEnvironmentIdList(input.EnvironmentIds, context);
        Object.entries(memberEntries).forEach(([key, value]) => {
            const loc = `EnvironmentIds.${key}`;
            entries[loc] = value;
        });
    }
    if (input.EnvironmentNames !== undefined && input.EnvironmentNames !== null) {
        const memberEntries = serializeAws_queryEnvironmentNamesList(input.EnvironmentNames, context);
        Object.entries(memberEntries).forEach(([key, value]) => {
            const loc = `EnvironmentNames.${key}`;
            entries[loc] = value;
        });
    }
    if (input.IncludeDeleted !== undefined && input.IncludeDeleted !== null) {
        entries["IncludeDeleted"] = input.IncludeDeleted;
    }
    if (input.IncludedDeletedBackTo !== undefined && input.IncludedDeletedBackTo !== null) {
        entries["IncludedDeletedBackTo"] = input.IncludedDeletedBackTo.toISOString().split(".")[0] + "Z";
    }
    if (input.MaxRecords !== undefined && input.MaxRecords !== null) {
        entries["MaxRecords"] = input.MaxRecords;
    }
    if (input.NextToken !== undefined && input.NextToken !== null) {
        entries["NextToken"] = input.NextToken;
    }
    return entries;
};
const serializeAws_queryDescribeEventsMessage = (input, context) => {
    const entries = {};
    if (input.ApplicationName !== undefined && input.ApplicationName !== null) {
        entries["ApplicationName"] = input.ApplicationName;
    }
    if (input.VersionLabel !== undefined && input.VersionLabel !== null) {
        entries["VersionLabel"] = input.VersionLabel;
    }
    if (input.TemplateName !== undefined && input.TemplateName !== null) {
        entries["TemplateName"] = input.TemplateName;
    }
    if (input.EnvironmentId !== undefined && input.EnvironmentId !== null) {
        entries["EnvironmentId"] = input.EnvironmentId;
    }
    if (input.EnvironmentName !== undefined && input.EnvironmentName !== null) {
        entries["EnvironmentName"] = input.EnvironmentName;
    }
    if (input.PlatformArn !== undefined && input.PlatformArn !== null) {
        entries["PlatformArn"] = input.PlatformArn;
    }
    if (input.RequestId !== undefined && input.RequestId !== null) {
        entries["RequestId"] = input.RequestId;
    }
    if (input.Severity !== undefined && input.Severity !== null) {
        entries["Severity"] = input.Severity;
    }
    if (input.StartTime !== undefined && input.StartTime !== null) {
        entries["StartTime"] = input.StartTime.toISOString().split(".")[0] + "Z";
    }
    if (input.EndTime !== undefined && input.EndTime !== null) {
        entries["EndTime"] = input.EndTime.toISOString().split(".")[0] + "Z";
    }
    if (input.MaxRecords !== undefined && input.MaxRecords !== null) {
        entries["MaxRecords"] = input.MaxRecords;
    }
    if (input.NextToken !== undefined && input.NextToken !== null) {
        entries["NextToken"] = input.NextToken;
    }
    return entries;
};
const serializeAws_queryDescribeInstancesHealthRequest = (input, context) => {
    const entries = {};
    if (input.EnvironmentName !== undefined && input.EnvironmentName !== null) {
        entries["EnvironmentName"] = input.EnvironmentName;
    }
    if (input.EnvironmentId !== undefined && input.EnvironmentId !== null) {
        entries["EnvironmentId"] = input.EnvironmentId;
    }
    if (input.AttributeNames !== undefined && input.AttributeNames !== null) {
        const memberEntries = serializeAws_queryInstancesHealthAttributes(input.AttributeNames, context);
        Object.entries(memberEntries).forEach(([key, value]) => {
            const loc = `AttributeNames.${key}`;
            entries[loc] = value;
        });
    }
    if (input.NextToken !== undefined && input.NextToken !== null) {
        entries["NextToken"] = input.NextToken;
    }
    return entries;
};
const serializeAws_queryDescribePlatformVersionRequest = (input, context) => {
    const entries = {};
    if (input.PlatformArn !== undefined && input.PlatformArn !== null) {
        entries["PlatformArn"] = input.PlatformArn;
    }
    return entries;
};
const serializeAws_queryDisassociateEnvironmentOperationsRoleMessage = (input, context) => {
    const entries = {};
    if (input.EnvironmentName !== undefined && input.EnvironmentName !== null) {
        entries["EnvironmentName"] = input.EnvironmentName;
    }
    return entries;
};
const serializeAws_queryEnvironmentHealthAttributes = (input, context) => {
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
const serializeAws_queryEnvironmentIdList = (input, context) => {
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
const serializeAws_queryEnvironmentNamesList = (input, context) => {
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
const serializeAws_queryEnvironmentTier = (input, context) => {
    const entries = {};
    if (input.Name !== undefined && input.Name !== null) {
        entries["Name"] = input.Name;
    }
    if (input.Type !== undefined && input.Type !== null) {
        entries["Type"] = input.Type;
    }
    if (input.Version !== undefined && input.Version !== null) {
        entries["Version"] = input.Version;
    }
    return entries;
};
const serializeAws_queryInstancesHealthAttributes = (input, context) => {
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
const serializeAws_queryListPlatformBranchesRequest = (input, context) => {
    const entries = {};
    if (input.Filters !== undefined && input.Filters !== null) {
        const memberEntries = serializeAws_querySearchFilters(input.Filters, context);
        Object.entries(memberEntries).forEach(([key, value]) => {
            const loc = `Filters.${key}`;
            entries[loc] = value;
        });
    }
    if (input.MaxRecords !== undefined && input.MaxRecords !== null) {
        entries["MaxRecords"] = input.MaxRecords;
    }
    if (input.NextToken !== undefined && input.NextToken !== null) {
        entries["NextToken"] = input.NextToken;
    }
    return entries;
};
const serializeAws_queryListPlatformVersionsRequest = (input, context) => {
    const entries = {};
    if (input.Filters !== undefined && input.Filters !== null) {
        const memberEntries = serializeAws_queryPlatformFilters(input.Filters, context);
        Object.entries(memberEntries).forEach(([key, value]) => {
            const loc = `Filters.${key}`;
            entries[loc] = value;
        });
    }
    if (input.MaxRecords !== undefined && input.MaxRecords !== null) {
        entries["MaxRecords"] = input.MaxRecords;
    }
    if (input.NextToken !== undefined && input.NextToken !== null) {
        entries["NextToken"] = input.NextToken;
    }
    return entries;
};
const serializeAws_queryListTagsForResourceMessage = (input, context) => {
    const entries = {};
    if (input.ResourceArn !== undefined && input.ResourceArn !== null) {
        entries["ResourceArn"] = input.ResourceArn;
    }
    return entries;
};
const serializeAws_queryMaxAgeRule = (input, context) => {
    const entries = {};
    if (input.Enabled !== undefined && input.Enabled !== null) {
        entries["Enabled"] = input.Enabled;
    }
    if (input.MaxAgeInDays !== undefined && input.MaxAgeInDays !== null) {
        entries["MaxAgeInDays"] = input.MaxAgeInDays;
    }
    if (input.DeleteSourceFromS3 !== undefined && input.DeleteSourceFromS3 !== null) {
        entries["DeleteSourceFromS3"] = input.DeleteSourceFromS3;
    }
    return entries;
};
const serializeAws_queryMaxCountRule = (input, context) => {
    const entries = {};
    if (input.Enabled !== undefined && input.Enabled !== null) {
        entries["Enabled"] = input.Enabled;
    }
    if (input.MaxCount !== undefined && input.MaxCount !== null) {
        entries["MaxCount"] = input.MaxCount;
    }
    if (input.DeleteSourceFromS3 !== undefined && input.DeleteSourceFromS3 !== null) {
        entries["DeleteSourceFromS3"] = input.DeleteSourceFromS3;
    }
    return entries;
};
const serializeAws_queryOptionSpecification = (input, context) => {
    const entries = {};
    if (input.ResourceName !== undefined && input.ResourceName !== null) {
        entries["ResourceName"] = input.ResourceName;
    }
    if (input.Namespace !== undefined && input.Namespace !== null) {
        entries["Namespace"] = input.Namespace;
    }
    if (input.OptionName !== undefined && input.OptionName !== null) {
        entries["OptionName"] = input.OptionName;
    }
    return entries;
};
const serializeAws_queryOptionsSpecifierList = (input, context) => {
    const entries = {};
    let counter = 1;
    for (let entry of input) {
        if (entry === null) {
            continue;
        }
        const memberEntries = serializeAws_queryOptionSpecification(entry, context);
        Object.entries(memberEntries).forEach(([key, value]) => {
            entries[`member.${counter}.${key}`] = value;
        });
        counter++;
    }
    return entries;
};
const serializeAws_queryPlatformFilter = (input, context) => {
    const entries = {};
    if (input.Type !== undefined && input.Type !== null) {
        entries["Type"] = input.Type;
    }
    if (input.Operator !== undefined && input.Operator !== null) {
        entries["Operator"] = input.Operator;
    }
    if (input.Values !== undefined && input.Values !== null) {
        const memberEntries = serializeAws_queryPlatformFilterValueList(input.Values, context);
        Object.entries(memberEntries).forEach(([key, value]) => {
            const loc = `Values.${key}`;
            entries[loc] = value;
        });
    }
    return entries;
};
const serializeAws_queryPlatformFilters = (input, context) => {
    const entries = {};
    let counter = 1;
    for (let entry of input) {
        if (entry === null) {
            continue;
        }
        const memberEntries = serializeAws_queryPlatformFilter(entry, context);
        Object.entries(memberEntries).forEach(([key, value]) => {
            entries[`member.${counter}.${key}`] = value;
        });
        counter++;
    }
    return entries;
};
const serializeAws_queryPlatformFilterValueList = (input, context) => {
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
const serializeAws_queryRebuildEnvironmentMessage = (input, context) => {
    const entries = {};
    if (input.EnvironmentId !== undefined && input.EnvironmentId !== null) {
        entries["EnvironmentId"] = input.EnvironmentId;
    }
    if (input.EnvironmentName !== undefined && input.EnvironmentName !== null) {
        entries["EnvironmentName"] = input.EnvironmentName;
    }
    return entries;
};
const serializeAws_queryRequestEnvironmentInfoMessage = (input, context) => {
    const entries = {};
    if (input.EnvironmentId !== undefined && input.EnvironmentId !== null) {
        entries["EnvironmentId"] = input.EnvironmentId;
    }
    if (input.EnvironmentName !== undefined && input.EnvironmentName !== null) {
        entries["EnvironmentName"] = input.EnvironmentName;
    }
    if (input.InfoType !== undefined && input.InfoType !== null) {
        entries["InfoType"] = input.InfoType;
    }
    return entries;
};
const serializeAws_queryRestartAppServerMessage = (input, context) => {
    const entries = {};
    if (input.EnvironmentId !== undefined && input.EnvironmentId !== null) {
        entries["EnvironmentId"] = input.EnvironmentId;
    }
    if (input.EnvironmentName !== undefined && input.EnvironmentName !== null) {
        entries["EnvironmentName"] = input.EnvironmentName;
    }
    return entries;
};
const serializeAws_queryRetrieveEnvironmentInfoMessage = (input, context) => {
    const entries = {};
    if (input.EnvironmentId !== undefined && input.EnvironmentId !== null) {
        entries["EnvironmentId"] = input.EnvironmentId;
    }
    if (input.EnvironmentName !== undefined && input.EnvironmentName !== null) {
        entries["EnvironmentName"] = input.EnvironmentName;
    }
    if (input.InfoType !== undefined && input.InfoType !== null) {
        entries["InfoType"] = input.InfoType;
    }
    return entries;
};
const serializeAws_queryS3Location = (input, context) => {
    const entries = {};
    if (input.S3Bucket !== undefined && input.S3Bucket !== null) {
        entries["S3Bucket"] = input.S3Bucket;
    }
    if (input.S3Key !== undefined && input.S3Key !== null) {
        entries["S3Key"] = input.S3Key;
    }
    return entries;
};
const serializeAws_querySearchFilter = (input, context) => {
    const entries = {};
    if (input.Attribute !== undefined && input.Attribute !== null) {
        entries["Attribute"] = input.Attribute;
    }
    if (input.Operator !== undefined && input.Operator !== null) {
        entries["Operator"] = input.Operator;
    }
    if (input.Values !== undefined && input.Values !== null) {
        const memberEntries = serializeAws_querySearchFilterValues(input.Values, context);
        Object.entries(memberEntries).forEach(([key, value]) => {
            const loc = `Values.${key}`;
            entries[loc] = value;
        });
    }
    return entries;
};
const serializeAws_querySearchFilters = (input, context) => {
    const entries = {};
    let counter = 1;
    for (let entry of input) {
        if (entry === null) {
            continue;
        }
        const memberEntries = serializeAws_querySearchFilter(entry, context);
        Object.entries(memberEntries).forEach(([key, value]) => {
            entries[`member.${counter}.${key}`] = value;
        });
        counter++;
    }
    return entries;
};
const serializeAws_querySearchFilterValues = (input, context) => {
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
const serializeAws_querySourceBuildInformation = (input, context) => {
    const entries = {};
    if (input.SourceType !== undefined && input.SourceType !== null) {
        entries["SourceType"] = input.SourceType;
    }
    if (input.SourceRepository !== undefined && input.SourceRepository !== null) {
        entries["SourceRepository"] = input.SourceRepository;
    }
    if (input.SourceLocation !== undefined && input.SourceLocation !== null) {
        entries["SourceLocation"] = input.SourceLocation;
    }
    return entries;
};
const serializeAws_querySourceConfiguration = (input, context) => {
    const entries = {};
    if (input.ApplicationName !== undefined && input.ApplicationName !== null) {
        entries["ApplicationName"] = input.ApplicationName;
    }
    if (input.TemplateName !== undefined && input.TemplateName !== null) {
        entries["TemplateName"] = input.TemplateName;
    }
    return entries;
};
const serializeAws_querySwapEnvironmentCNAMEsMessage = (input, context) => {
    const entries = {};
    if (input.SourceEnvironmentId !== undefined && input.SourceEnvironmentId !== null) {
        entries["SourceEnvironmentId"] = input.SourceEnvironmentId;
    }
    if (input.SourceEnvironmentName !== undefined && input.SourceEnvironmentName !== null) {
        entries["SourceEnvironmentName"] = input.SourceEnvironmentName;
    }
    if (input.DestinationEnvironmentId !== undefined && input.DestinationEnvironmentId !== null) {
        entries["DestinationEnvironmentId"] = input.DestinationEnvironmentId;
    }
    if (input.DestinationEnvironmentName !== undefined && input.DestinationEnvironmentName !== null) {
        entries["DestinationEnvironmentName"] = input.DestinationEnvironmentName;
    }
    return entries;
};
const serializeAws_queryTag = (input, context) => {
    const entries = {};
    if (input.Key !== undefined && input.Key !== null) {
        entries["Key"] = input.Key;
    }
    if (input.Value !== undefined && input.Value !== null) {
        entries["Value"] = input.Value;
    }
    return entries;
};
const serializeAws_queryTagKeyList = (input, context) => {
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
const serializeAws_queryTagList = (input, context) => {
    const entries = {};
    let counter = 1;
    for (let entry of input) {
        if (entry === null) {
            continue;
        }
        const memberEntries = serializeAws_queryTag(entry, context);
        Object.entries(memberEntries).forEach(([key, value]) => {
            entries[`member.${counter}.${key}`] = value;
        });
        counter++;
    }
    return entries;
};
const serializeAws_queryTags = (input, context) => {
    const entries = {};
    let counter = 1;
    for (let entry of input) {
        if (entry === null) {
            continue;
        }
        const memberEntries = serializeAws_queryTag(entry, context);
        Object.entries(memberEntries).forEach(([key, value]) => {
            entries[`member.${counter}.${key}`] = value;
        });
        counter++;
    }
    return entries;
};
const serializeAws_queryTerminateEnvironmentMessage = (input, context) => {
    const entries = {};
    if (input.EnvironmentId !== undefined && input.EnvironmentId !== null) {
        entries["EnvironmentId"] = input.EnvironmentId;
    }
    if (input.EnvironmentName !== undefined && input.EnvironmentName !== null) {
        entries["EnvironmentName"] = input.EnvironmentName;
    }
    if (input.TerminateResources !== undefined && input.TerminateResources !== null) {
        entries["TerminateResources"] = input.TerminateResources;
    }
    if (input.ForceTerminate !== undefined && input.ForceTerminate !== null) {
        entries["ForceTerminate"] = input.ForceTerminate;
    }
    return entries;
};
const serializeAws_queryUpdateApplicationMessage = (input, context) => {
    const entries = {};
    if (input.ApplicationName !== undefined && input.ApplicationName !== null) {
        entries["ApplicationName"] = input.ApplicationName;
    }
    if (input.Description !== undefined && input.Description !== null) {
        entries["Description"] = input.Description;
    }
    return entries;
};
const serializeAws_queryUpdateApplicationResourceLifecycleMessage = (input, context) => {
    const entries = {};
    if (input.ApplicationName !== undefined && input.ApplicationName !== null) {
        entries["ApplicationName"] = input.ApplicationName;
    }
    if (input.ResourceLifecycleConfig !== undefined && input.ResourceLifecycleConfig !== null) {
        const memberEntries = serializeAws_queryApplicationResourceLifecycleConfig(input.ResourceLifecycleConfig, context);
        Object.entries(memberEntries).forEach(([key, value]) => {
            const loc = `ResourceLifecycleConfig.${key}`;
            entries[loc] = value;
        });
    }
    return entries;
};
const serializeAws_queryUpdateApplicationVersionMessage = (input, context) => {
    const entries = {};
    if (input.ApplicationName !== undefined && input.ApplicationName !== null) {
        entries["ApplicationName"] = input.ApplicationName;
    }
    if (input.VersionLabel !== undefined && input.VersionLabel !== null) {
        entries["VersionLabel"] = input.VersionLabel;
    }
    if (input.Description !== undefined && input.Description !== null) {
        entries["Description"] = input.Description;
    }
    return entries;
};
const serializeAws_queryUpdateConfigurationTemplateMessage = (input, context) => {
    const entries = {};
    if (input.ApplicationName !== undefined && input.ApplicationName !== null) {
        entries["ApplicationName"] = input.ApplicationName;
    }
    if (input.TemplateName !== undefined && input.TemplateName !== null) {
        entries["TemplateName"] = input.TemplateName;
    }
    if (input.Description !== undefined && input.Description !== null) {
        entries["Description"] = input.Description;
    }
    if (input.OptionSettings !== undefined && input.OptionSettings !== null) {
        const memberEntries = serializeAws_queryConfigurationOptionSettingsList(input.OptionSettings, context);
        Object.entries(memberEntries).forEach(([key, value]) => {
            const loc = `OptionSettings.${key}`;
            entries[loc] = value;
        });
    }
    if (input.OptionsToRemove !== undefined && input.OptionsToRemove !== null) {
        const memberEntries = serializeAws_queryOptionsSpecifierList(input.OptionsToRemove, context);
        Object.entries(memberEntries).forEach(([key, value]) => {
            const loc = `OptionsToRemove.${key}`;
            entries[loc] = value;
        });
    }
    return entries;
};
const serializeAws_queryUpdateEnvironmentMessage = (input, context) => {
    const entries = {};
    if (input.ApplicationName !== undefined && input.ApplicationName !== null) {
        entries["ApplicationName"] = input.ApplicationName;
    }
    if (input.EnvironmentId !== undefined && input.EnvironmentId !== null) {
        entries["EnvironmentId"] = input.EnvironmentId;
    }
    if (input.EnvironmentName !== undefined && input.EnvironmentName !== null) {
        entries["EnvironmentName"] = input.EnvironmentName;
    }
    if (input.GroupName !== undefined && input.GroupName !== null) {
        entries["GroupName"] = input.GroupName;
    }
    if (input.Description !== undefined && input.Description !== null) {
        entries["Description"] = input.Description;
    }
    if (input.Tier !== undefined && input.Tier !== null) {
        const memberEntries = serializeAws_queryEnvironmentTier(input.Tier, context);
        Object.entries(memberEntries).forEach(([key, value]) => {
            const loc = `Tier.${key}`;
            entries[loc] = value;
        });
    }
    if (input.VersionLabel !== undefined && input.VersionLabel !== null) {
        entries["VersionLabel"] = input.VersionLabel;
    }
    if (input.TemplateName !== undefined && input.TemplateName !== null) {
        entries["TemplateName"] = input.TemplateName;
    }
    if (input.SolutionStackName !== undefined && input.SolutionStackName !== null) {
        entries["SolutionStackName"] = input.SolutionStackName;
    }
    if (input.PlatformArn !== undefined && input.PlatformArn !== null) {
        entries["PlatformArn"] = input.PlatformArn;
    }
    if (input.OptionSettings !== undefined && input.OptionSettings !== null) {
        const memberEntries = serializeAws_queryConfigurationOptionSettingsList(input.OptionSettings, context);
        Object.entries(memberEntries).forEach(([key, value]) => {
            const loc = `OptionSettings.${key}`;
            entries[loc] = value;
        });
    }
    if (input.OptionsToRemove !== undefined && input.OptionsToRemove !== null) {
        const memberEntries = serializeAws_queryOptionsSpecifierList(input.OptionsToRemove, context);
        Object.entries(memberEntries).forEach(([key, value]) => {
            const loc = `OptionsToRemove.${key}`;
            entries[loc] = value;
        });
    }
    return entries;
};
const serializeAws_queryUpdateTagsForResourceMessage = (input, context) => {
    const entries = {};
    if (input.ResourceArn !== undefined && input.ResourceArn !== null) {
        entries["ResourceArn"] = input.ResourceArn;
    }
    if (input.TagsToAdd !== undefined && input.TagsToAdd !== null) {
        const memberEntries = serializeAws_queryTagList(input.TagsToAdd, context);
        Object.entries(memberEntries).forEach(([key, value]) => {
            const loc = `TagsToAdd.${key}`;
            entries[loc] = value;
        });
    }
    if (input.TagsToRemove !== undefined && input.TagsToRemove !== null) {
        const memberEntries = serializeAws_queryTagKeyList(input.TagsToRemove, context);
        Object.entries(memberEntries).forEach(([key, value]) => {
            const loc = `TagsToRemove.${key}`;
            entries[loc] = value;
        });
    }
    return entries;
};
const serializeAws_queryValidateConfigurationSettingsMessage = (input, context) => {
    const entries = {};
    if (input.ApplicationName !== undefined && input.ApplicationName !== null) {
        entries["ApplicationName"] = input.ApplicationName;
    }
    if (input.TemplateName !== undefined && input.TemplateName !== null) {
        entries["TemplateName"] = input.TemplateName;
    }
    if (input.EnvironmentName !== undefined && input.EnvironmentName !== null) {
        entries["EnvironmentName"] = input.EnvironmentName;
    }
    if (input.OptionSettings !== undefined && input.OptionSettings !== null) {
        const memberEntries = serializeAws_queryConfigurationOptionSettingsList(input.OptionSettings, context);
        Object.entries(memberEntries).forEach(([key, value]) => {
            const loc = `OptionSettings.${key}`;
            entries[loc] = value;
        });
    }
    return entries;
};
const serializeAws_queryVersionLabels = (input, context) => {
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
const serializeAws_queryVersionLabelsList = (input, context) => {
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
const deserializeAws_queryApplicationDescription = (output, context) => {
    let contents = {
        ApplicationArn: undefined,
        ApplicationName: undefined,
        Description: undefined,
        DateCreated: undefined,
        DateUpdated: undefined,
        Versions: undefined,
        ConfigurationTemplates: undefined,
        ResourceLifecycleConfig: undefined,
    };
    if (output["ApplicationArn"] !== undefined) {
        contents.ApplicationArn = output["ApplicationArn"];
    }
    if (output["ApplicationName"] !== undefined) {
        contents.ApplicationName = output["ApplicationName"];
    }
    if (output["Description"] !== undefined) {
        contents.Description = output["Description"];
    }
    if (output["DateCreated"] !== undefined) {
        contents.DateCreated = new Date(output["DateCreated"]);
    }
    if (output["DateUpdated"] !== undefined) {
        contents.DateUpdated = new Date(output["DateUpdated"]);
    }
    if (output.Versions === "") {
        contents.Versions = [];
    }
    if (output["Versions"] !== undefined && output["Versions"]["member"] !== undefined) {
        contents.Versions = deserializeAws_queryVersionLabelsList(smithy_client_1.getArrayIfSingleItem(output["Versions"]["member"]), context);
    }
    if (output.ConfigurationTemplates === "") {
        contents.ConfigurationTemplates = [];
    }
    if (output["ConfigurationTemplates"] !== undefined && output["ConfigurationTemplates"]["member"] !== undefined) {
        contents.ConfigurationTemplates = deserializeAws_queryConfigurationTemplateNamesList(smithy_client_1.getArrayIfSingleItem(output["ConfigurationTemplates"]["member"]), context);
    }
    if (output["ResourceLifecycleConfig"] !== undefined) {
        contents.ResourceLifecycleConfig = deserializeAws_queryApplicationResourceLifecycleConfig(output["ResourceLifecycleConfig"], context);
    }
    return contents;
};
const deserializeAws_queryApplicationDescriptionList = (output, context) => {
    return (output || [])
        .filter((e) => e != null)
        .map((entry) => {
        if (entry === null) {
            return null;
        }
        return deserializeAws_queryApplicationDescription(entry, context);
    });
};
const deserializeAws_queryApplicationDescriptionMessage = (output, context) => {
    let contents = {
        Application: undefined,
    };
    if (output["Application"] !== undefined) {
        contents.Application = deserializeAws_queryApplicationDescription(output["Application"], context);
    }
    return contents;
};
const deserializeAws_queryApplicationDescriptionsMessage = (output, context) => {
    let contents = {
        Applications: undefined,
    };
    if (output.Applications === "") {
        contents.Applications = [];
    }
    if (output["Applications"] !== undefined && output["Applications"]["member"] !== undefined) {
        contents.Applications = deserializeAws_queryApplicationDescriptionList(smithy_client_1.getArrayIfSingleItem(output["Applications"]["member"]), context);
    }
    return contents;
};
const deserializeAws_queryApplicationMetrics = (output, context) => {
    let contents = {
        Duration: undefined,
        RequestCount: undefined,
        StatusCodes: undefined,
        Latency: undefined,
    };
    if (output["Duration"] !== undefined) {
        contents.Duration = parseInt(output["Duration"]);
    }
    if (output["RequestCount"] !== undefined) {
        contents.RequestCount = parseInt(output["RequestCount"]);
    }
    if (output["StatusCodes"] !== undefined) {
        contents.StatusCodes = deserializeAws_queryStatusCodes(output["StatusCodes"], context);
    }
    if (output["Latency"] !== undefined) {
        contents.Latency = deserializeAws_queryLatency(output["Latency"], context);
    }
    return contents;
};
const deserializeAws_queryApplicationResourceLifecycleConfig = (output, context) => {
    let contents = {
        ServiceRole: undefined,
        VersionLifecycleConfig: undefined,
    };
    if (output["ServiceRole"] !== undefined) {
        contents.ServiceRole = output["ServiceRole"];
    }
    if (output["VersionLifecycleConfig"] !== undefined) {
        contents.VersionLifecycleConfig = deserializeAws_queryApplicationVersionLifecycleConfig(output["VersionLifecycleConfig"], context);
    }
    return contents;
};
const deserializeAws_queryApplicationResourceLifecycleDescriptionMessage = (output, context) => {
    let contents = {
        ApplicationName: undefined,
        ResourceLifecycleConfig: undefined,
    };
    if (output["ApplicationName"] !== undefined) {
        contents.ApplicationName = output["ApplicationName"];
    }
    if (output["ResourceLifecycleConfig"] !== undefined) {
        contents.ResourceLifecycleConfig = deserializeAws_queryApplicationResourceLifecycleConfig(output["ResourceLifecycleConfig"], context);
    }
    return contents;
};
const deserializeAws_queryApplicationVersionDescription = (output, context) => {
    let contents = {
        ApplicationVersionArn: undefined,
        ApplicationName: undefined,
        Description: undefined,
        VersionLabel: undefined,
        SourceBuildInformation: undefined,
        BuildArn: undefined,
        SourceBundle: undefined,
        DateCreated: undefined,
        DateUpdated: undefined,
        Status: undefined,
    };
    if (output["ApplicationVersionArn"] !== undefined) {
        contents.ApplicationVersionArn = output["ApplicationVersionArn"];
    }
    if (output["ApplicationName"] !== undefined) {
        contents.ApplicationName = output["ApplicationName"];
    }
    if (output["Description"] !== undefined) {
        contents.Description = output["Description"];
    }
    if (output["VersionLabel"] !== undefined) {
        contents.VersionLabel = output["VersionLabel"];
    }
    if (output["SourceBuildInformation"] !== undefined) {
        contents.SourceBuildInformation = deserializeAws_querySourceBuildInformation(output["SourceBuildInformation"], context);
    }
    if (output["BuildArn"] !== undefined) {
        contents.BuildArn = output["BuildArn"];
    }
    if (output["SourceBundle"] !== undefined) {
        contents.SourceBundle = deserializeAws_queryS3Location(output["SourceBundle"], context);
    }
    if (output["DateCreated"] !== undefined) {
        contents.DateCreated = new Date(output["DateCreated"]);
    }
    if (output["DateUpdated"] !== undefined) {
        contents.DateUpdated = new Date(output["DateUpdated"]);
    }
    if (output["Status"] !== undefined) {
        contents.Status = output["Status"];
    }
    return contents;
};
const deserializeAws_queryApplicationVersionDescriptionList = (output, context) => {
    return (output || [])
        .filter((e) => e != null)
        .map((entry) => {
        if (entry === null) {
            return null;
        }
        return deserializeAws_queryApplicationVersionDescription(entry, context);
    });
};
const deserializeAws_queryApplicationVersionDescriptionMessage = (output, context) => {
    let contents = {
        ApplicationVersion: undefined,
    };
    if (output["ApplicationVersion"] !== undefined) {
        contents.ApplicationVersion = deserializeAws_queryApplicationVersionDescription(output["ApplicationVersion"], context);
    }
    return contents;
};
const deserializeAws_queryApplicationVersionDescriptionsMessage = (output, context) => {
    let contents = {
        ApplicationVersions: undefined,
        NextToken: undefined,
    };
    if (output.ApplicationVersions === "") {
        contents.ApplicationVersions = [];
    }
    if (output["ApplicationVersions"] !== undefined && output["ApplicationVersions"]["member"] !== undefined) {
        contents.ApplicationVersions = deserializeAws_queryApplicationVersionDescriptionList(smithy_client_1.getArrayIfSingleItem(output["ApplicationVersions"]["member"]), context);
    }
    if (output["NextToken"] !== undefined) {
        contents.NextToken = output["NextToken"];
    }
    return contents;
};
const deserializeAws_queryApplicationVersionLifecycleConfig = (output, context) => {
    let contents = {
        MaxCountRule: undefined,
        MaxAgeRule: undefined,
    };
    if (output["MaxCountRule"] !== undefined) {
        contents.MaxCountRule = deserializeAws_queryMaxCountRule(output["MaxCountRule"], context);
    }
    if (output["MaxAgeRule"] !== undefined) {
        contents.MaxAgeRule = deserializeAws_queryMaxAgeRule(output["MaxAgeRule"], context);
    }
    return contents;
};
const deserializeAws_queryApplyEnvironmentManagedActionResult = (output, context) => {
    let contents = {
        ActionId: undefined,
        ActionDescription: undefined,
        ActionType: undefined,
        Status: undefined,
    };
    if (output["ActionId"] !== undefined) {
        contents.ActionId = output["ActionId"];
    }
    if (output["ActionDescription"] !== undefined) {
        contents.ActionDescription = output["ActionDescription"];
    }
    if (output["ActionType"] !== undefined) {
        contents.ActionType = output["ActionType"];
    }
    if (output["Status"] !== undefined) {
        contents.Status = output["Status"];
    }
    return contents;
};
const deserializeAws_queryAutoScalingGroup = (output, context) => {
    let contents = {
        Name: undefined,
    };
    if (output["Name"] !== undefined) {
        contents.Name = output["Name"];
    }
    return contents;
};
const deserializeAws_queryAutoScalingGroupList = (output, context) => {
    return (output || [])
        .filter((e) => e != null)
        .map((entry) => {
        if (entry === null) {
            return null;
        }
        return deserializeAws_queryAutoScalingGroup(entry, context);
    });
};
const deserializeAws_queryAvailableSolutionStackDetailsList = (output, context) => {
    return (output || [])
        .filter((e) => e != null)
        .map((entry) => {
        if (entry === null) {
            return null;
        }
        return deserializeAws_querySolutionStackDescription(entry, context);
    });
};
const deserializeAws_queryAvailableSolutionStackNamesList = (output, context) => {
    return (output || [])
        .filter((e) => e != null)
        .map((entry) => {
        if (entry === null) {
            return null;
        }
        return entry;
    });
};
const deserializeAws_queryBuilder = (output, context) => {
    let contents = {
        ARN: undefined,
    };
    if (output["ARN"] !== undefined) {
        contents.ARN = output["ARN"];
    }
    return contents;
};
const deserializeAws_queryCauses = (output, context) => {
    return (output || [])
        .filter((e) => e != null)
        .map((entry) => {
        if (entry === null) {
            return null;
        }
        return entry;
    });
};
const deserializeAws_queryCheckDNSAvailabilityResultMessage = (output, context) => {
    let contents = {
        Available: undefined,
        FullyQualifiedCNAME: undefined,
    };
    if (output["Available"] !== undefined) {
        contents.Available = output["Available"] == "true";
    }
    if (output["FullyQualifiedCNAME"] !== undefined) {
        contents.FullyQualifiedCNAME = output["FullyQualifiedCNAME"];
    }
    return contents;
};
const deserializeAws_queryCodeBuildNotInServiceRegionException = (output, context) => {
    let contents = {
        message: undefined,
    };
    if (output["message"] !== undefined) {
        contents.message = output["message"];
    }
    return contents;
};
const deserializeAws_queryConfigurationOptionDescription = (output, context) => {
    let contents = {
        Namespace: undefined,
        Name: undefined,
        DefaultValue: undefined,
        ChangeSeverity: undefined,
        UserDefined: undefined,
        ValueType: undefined,
        ValueOptions: undefined,
        MinValue: undefined,
        MaxValue: undefined,
        MaxLength: undefined,
        Regex: undefined,
    };
    if (output["Namespace"] !== undefined) {
        contents.Namespace = output["Namespace"];
    }
    if (output["Name"] !== undefined) {
        contents.Name = output["Name"];
    }
    if (output["DefaultValue"] !== undefined) {
        contents.DefaultValue = output["DefaultValue"];
    }
    if (output["ChangeSeverity"] !== undefined) {
        contents.ChangeSeverity = output["ChangeSeverity"];
    }
    if (output["UserDefined"] !== undefined) {
        contents.UserDefined = output["UserDefined"] == "true";
    }
    if (output["ValueType"] !== undefined) {
        contents.ValueType = output["ValueType"];
    }
    if (output.ValueOptions === "") {
        contents.ValueOptions = [];
    }
    if (output["ValueOptions"] !== undefined && output["ValueOptions"]["member"] !== undefined) {
        contents.ValueOptions = deserializeAws_queryConfigurationOptionPossibleValues(smithy_client_1.getArrayIfSingleItem(output["ValueOptions"]["member"]), context);
    }
    if (output["MinValue"] !== undefined) {
        contents.MinValue = parseInt(output["MinValue"]);
    }
    if (output["MaxValue"] !== undefined) {
        contents.MaxValue = parseInt(output["MaxValue"]);
    }
    if (output["MaxLength"] !== undefined) {
        contents.MaxLength = parseInt(output["MaxLength"]);
    }
    if (output["Regex"] !== undefined) {
        contents.Regex = deserializeAws_queryOptionRestrictionRegex(output["Regex"], context);
    }
    return contents;
};
const deserializeAws_queryConfigurationOptionDescriptionsList = (output, context) => {
    return (output || [])
        .filter((e) => e != null)
        .map((entry) => {
        if (entry === null) {
            return null;
        }
        return deserializeAws_queryConfigurationOptionDescription(entry, context);
    });
};
const deserializeAws_queryConfigurationOptionPossibleValues = (output, context) => {
    return (output || [])
        .filter((e) => e != null)
        .map((entry) => {
        if (entry === null) {
            return null;
        }
        return entry;
    });
};
const deserializeAws_queryConfigurationOptionsDescription = (output, context) => {
    let contents = {
        SolutionStackName: undefined,
        PlatformArn: undefined,
        Options: undefined,
    };
    if (output["SolutionStackName"] !== undefined) {
        contents.SolutionStackName = output["SolutionStackName"];
    }
    if (output["PlatformArn"] !== undefined) {
        contents.PlatformArn = output["PlatformArn"];
    }
    if (output.Options === "") {
        contents.Options = [];
    }
    if (output["Options"] !== undefined && output["Options"]["member"] !== undefined) {
        contents.Options = deserializeAws_queryConfigurationOptionDescriptionsList(smithy_client_1.getArrayIfSingleItem(output["Options"]["member"]), context);
    }
    return contents;
};
const deserializeAws_queryConfigurationOptionSetting = (output, context) => {
    let contents = {
        ResourceName: undefined,
        Namespace: undefined,
        OptionName: undefined,
        Value: undefined,
    };
    if (output["ResourceName"] !== undefined) {
        contents.ResourceName = output["ResourceName"];
    }
    if (output["Namespace"] !== undefined) {
        contents.Namespace = output["Namespace"];
    }
    if (output["OptionName"] !== undefined) {
        contents.OptionName = output["OptionName"];
    }
    if (output["Value"] !== undefined) {
        contents.Value = output["Value"];
    }
    return contents;
};
const deserializeAws_queryConfigurationOptionSettingsList = (output, context) => {
    return (output || [])
        .filter((e) => e != null)
        .map((entry) => {
        if (entry === null) {
            return null;
        }
        return deserializeAws_queryConfigurationOptionSetting(entry, context);
    });
};
const deserializeAws_queryConfigurationSettingsDescription = (output, context) => {
    let contents = {
        SolutionStackName: undefined,
        PlatformArn: undefined,
        ApplicationName: undefined,
        TemplateName: undefined,
        Description: undefined,
        EnvironmentName: undefined,
        DeploymentStatus: undefined,
        DateCreated: undefined,
        DateUpdated: undefined,
        OptionSettings: undefined,
    };
    if (output["SolutionStackName"] !== undefined) {
        contents.SolutionStackName = output["SolutionStackName"];
    }
    if (output["PlatformArn"] !== undefined) {
        contents.PlatformArn = output["PlatformArn"];
    }
    if (output["ApplicationName"] !== undefined) {
        contents.ApplicationName = output["ApplicationName"];
    }
    if (output["TemplateName"] !== undefined) {
        contents.TemplateName = output["TemplateName"];
    }
    if (output["Description"] !== undefined) {
        contents.Description = output["Description"];
    }
    if (output["EnvironmentName"] !== undefined) {
        contents.EnvironmentName = output["EnvironmentName"];
    }
    if (output["DeploymentStatus"] !== undefined) {
        contents.DeploymentStatus = output["DeploymentStatus"];
    }
    if (output["DateCreated"] !== undefined) {
        contents.DateCreated = new Date(output["DateCreated"]);
    }
    if (output["DateUpdated"] !== undefined) {
        contents.DateUpdated = new Date(output["DateUpdated"]);
    }
    if (output.OptionSettings === "") {
        contents.OptionSettings = [];
    }
    if (output["OptionSettings"] !== undefined && output["OptionSettings"]["member"] !== undefined) {
        contents.OptionSettings = deserializeAws_queryConfigurationOptionSettingsList(smithy_client_1.getArrayIfSingleItem(output["OptionSettings"]["member"]), context);
    }
    return contents;
};
const deserializeAws_queryConfigurationSettingsDescriptionList = (output, context) => {
    return (output || [])
        .filter((e) => e != null)
        .map((entry) => {
        if (entry === null) {
            return null;
        }
        return deserializeAws_queryConfigurationSettingsDescription(entry, context);
    });
};
const deserializeAws_queryConfigurationSettingsDescriptions = (output, context) => {
    let contents = {
        ConfigurationSettings: undefined,
    };
    if (output.ConfigurationSettings === "") {
        contents.ConfigurationSettings = [];
    }
    if (output["ConfigurationSettings"] !== undefined && output["ConfigurationSettings"]["member"] !== undefined) {
        contents.ConfigurationSettings = deserializeAws_queryConfigurationSettingsDescriptionList(smithy_client_1.getArrayIfSingleItem(output["ConfigurationSettings"]["member"]), context);
    }
    return contents;
};
const deserializeAws_queryConfigurationSettingsValidationMessages = (output, context) => {
    let contents = {
        Messages: undefined,
    };
    if (output.Messages === "") {
        contents.Messages = [];
    }
    if (output["Messages"] !== undefined && output["Messages"]["member"] !== undefined) {
        contents.Messages = deserializeAws_queryValidationMessagesList(smithy_client_1.getArrayIfSingleItem(output["Messages"]["member"]), context);
    }
    return contents;
};
const deserializeAws_queryConfigurationTemplateNamesList = (output, context) => {
    return (output || [])
        .filter((e) => e != null)
        .map((entry) => {
        if (entry === null) {
            return null;
        }
        return entry;
    });
};
const deserializeAws_queryCPUUtilization = (output, context) => {
    let contents = {
        User: undefined,
        Nice: undefined,
        System: undefined,
        Idle: undefined,
        IOWait: undefined,
        IRQ: undefined,
        SoftIRQ: undefined,
        Privileged: undefined,
    };
    if (output["User"] !== undefined) {
        contents.User = parseFloat(output["User"]);
    }
    if (output["Nice"] !== undefined) {
        contents.Nice = parseFloat(output["Nice"]);
    }
    if (output["System"] !== undefined) {
        contents.System = parseFloat(output["System"]);
    }
    if (output["Idle"] !== undefined) {
        contents.Idle = parseFloat(output["Idle"]);
    }
    if (output["IOWait"] !== undefined) {
        contents.IOWait = parseFloat(output["IOWait"]);
    }
    if (output["IRQ"] !== undefined) {
        contents.IRQ = parseFloat(output["IRQ"]);
    }
    if (output["SoftIRQ"] !== undefined) {
        contents.SoftIRQ = parseFloat(output["SoftIRQ"]);
    }
    if (output["Privileged"] !== undefined) {
        contents.Privileged = parseFloat(output["Privileged"]);
    }
    return contents;
};
const deserializeAws_queryCreatePlatformVersionResult = (output, context) => {
    let contents = {
        PlatformSummary: undefined,
        Builder: undefined,
    };
    if (output["PlatformSummary"] !== undefined) {
        contents.PlatformSummary = deserializeAws_queryPlatformSummary(output["PlatformSummary"], context);
    }
    if (output["Builder"] !== undefined) {
        contents.Builder = deserializeAws_queryBuilder(output["Builder"], context);
    }
    return contents;
};
const deserializeAws_queryCreateStorageLocationResultMessage = (output, context) => {
    let contents = {
        S3Bucket: undefined,
    };
    if (output["S3Bucket"] !== undefined) {
        contents.S3Bucket = output["S3Bucket"];
    }
    return contents;
};
const deserializeAws_queryCustomAmi = (output, context) => {
    let contents = {
        VirtualizationType: undefined,
        ImageId: undefined,
    };
    if (output["VirtualizationType"] !== undefined) {
        contents.VirtualizationType = output["VirtualizationType"];
    }
    if (output["ImageId"] !== undefined) {
        contents.ImageId = output["ImageId"];
    }
    return contents;
};
const deserializeAws_queryCustomAmiList = (output, context) => {
    return (output || [])
        .filter((e) => e != null)
        .map((entry) => {
        if (entry === null) {
            return null;
        }
        return deserializeAws_queryCustomAmi(entry, context);
    });
};
const deserializeAws_queryDeletePlatformVersionResult = (output, context) => {
    let contents = {
        PlatformSummary: undefined,
    };
    if (output["PlatformSummary"] !== undefined) {
        contents.PlatformSummary = deserializeAws_queryPlatformSummary(output["PlatformSummary"], context);
    }
    return contents;
};
const deserializeAws_queryDeployment = (output, context) => {
    let contents = {
        VersionLabel: undefined,
        DeploymentId: undefined,
        Status: undefined,
        DeploymentTime: undefined,
    };
    if (output["VersionLabel"] !== undefined) {
        contents.VersionLabel = output["VersionLabel"];
    }
    if (output["DeploymentId"] !== undefined) {
        contents.DeploymentId = parseInt(output["DeploymentId"]);
    }
    if (output["Status"] !== undefined) {
        contents.Status = output["Status"];
    }
    if (output["DeploymentTime"] !== undefined) {
        contents.DeploymentTime = new Date(output["DeploymentTime"]);
    }
    return contents;
};
const deserializeAws_queryDescribeAccountAttributesResult = (output, context) => {
    let contents = {
        ResourceQuotas: undefined,
    };
    if (output["ResourceQuotas"] !== undefined) {
        contents.ResourceQuotas = deserializeAws_queryResourceQuotas(output["ResourceQuotas"], context);
    }
    return contents;
};
const deserializeAws_queryDescribeEnvironmentHealthResult = (output, context) => {
    let contents = {
        EnvironmentName: undefined,
        HealthStatus: undefined,
        Status: undefined,
        Color: undefined,
        Causes: undefined,
        ApplicationMetrics: undefined,
        InstancesHealth: undefined,
        RefreshedAt: undefined,
    };
    if (output["EnvironmentName"] !== undefined) {
        contents.EnvironmentName = output["EnvironmentName"];
    }
    if (output["HealthStatus"] !== undefined) {
        contents.HealthStatus = output["HealthStatus"];
    }
    if (output["Status"] !== undefined) {
        contents.Status = output["Status"];
    }
    if (output["Color"] !== undefined) {
        contents.Color = output["Color"];
    }
    if (output.Causes === "") {
        contents.Causes = [];
    }
    if (output["Causes"] !== undefined && output["Causes"]["member"] !== undefined) {
        contents.Causes = deserializeAws_queryCauses(smithy_client_1.getArrayIfSingleItem(output["Causes"]["member"]), context);
    }
    if (output["ApplicationMetrics"] !== undefined) {
        contents.ApplicationMetrics = deserializeAws_queryApplicationMetrics(output["ApplicationMetrics"], context);
    }
    if (output["InstancesHealth"] !== undefined) {
        contents.InstancesHealth = deserializeAws_queryInstanceHealthSummary(output["InstancesHealth"], context);
    }
    if (output["RefreshedAt"] !== undefined) {
        contents.RefreshedAt = new Date(output["RefreshedAt"]);
    }
    return contents;
};
const deserializeAws_queryDescribeEnvironmentManagedActionHistoryResult = (output, context) => {
    let contents = {
        ManagedActionHistoryItems: undefined,
        NextToken: undefined,
    };
    if (output.ManagedActionHistoryItems === "") {
        contents.ManagedActionHistoryItems = [];
    }
    if (output["ManagedActionHistoryItems"] !== undefined &&
        output["ManagedActionHistoryItems"]["member"] !== undefined) {
        contents.ManagedActionHistoryItems = deserializeAws_queryManagedActionHistoryItems(smithy_client_1.getArrayIfSingleItem(output["ManagedActionHistoryItems"]["member"]), context);
    }
    if (output["NextToken"] !== undefined) {
        contents.NextToken = output["NextToken"];
    }
    return contents;
};
const deserializeAws_queryDescribeEnvironmentManagedActionsResult = (output, context) => {
    let contents = {
        ManagedActions: undefined,
    };
    if (output.ManagedActions === "") {
        contents.ManagedActions = [];
    }
    if (output["ManagedActions"] !== undefined && output["ManagedActions"]["member"] !== undefined) {
        contents.ManagedActions = deserializeAws_queryManagedActions(smithy_client_1.getArrayIfSingleItem(output["ManagedActions"]["member"]), context);
    }
    return contents;
};
const deserializeAws_queryDescribeInstancesHealthResult = (output, context) => {
    let contents = {
        InstanceHealthList: undefined,
        RefreshedAt: undefined,
        NextToken: undefined,
    };
    if (output.InstanceHealthList === "") {
        contents.InstanceHealthList = [];
    }
    if (output["InstanceHealthList"] !== undefined && output["InstanceHealthList"]["member"] !== undefined) {
        contents.InstanceHealthList = deserializeAws_queryInstanceHealthList(smithy_client_1.getArrayIfSingleItem(output["InstanceHealthList"]["member"]), context);
    }
    if (output["RefreshedAt"] !== undefined) {
        contents.RefreshedAt = new Date(output["RefreshedAt"]);
    }
    if (output["NextToken"] !== undefined) {
        contents.NextToken = output["NextToken"];
    }
    return contents;
};
const deserializeAws_queryDescribePlatformVersionResult = (output, context) => {
    let contents = {
        PlatformDescription: undefined,
    };
    if (output["PlatformDescription"] !== undefined) {
        contents.PlatformDescription = deserializeAws_queryPlatformDescription(output["PlatformDescription"], context);
    }
    return contents;
};
const deserializeAws_queryElasticBeanstalkServiceException = (output, context) => {
    let contents = {
        message: undefined,
    };
    if (output["message"] !== undefined) {
        contents.message = output["message"];
    }
    return contents;
};
const deserializeAws_queryEnvironmentDescription = (output, context) => {
    let contents = {
        EnvironmentName: undefined,
        EnvironmentId: undefined,
        ApplicationName: undefined,
        VersionLabel: undefined,
        SolutionStackName: undefined,
        PlatformArn: undefined,
        TemplateName: undefined,
        Description: undefined,
        EndpointURL: undefined,
        CNAME: undefined,
        DateCreated: undefined,
        DateUpdated: undefined,
        Status: undefined,
        AbortableOperationInProgress: undefined,
        Health: undefined,
        HealthStatus: undefined,
        Resources: undefined,
        Tier: undefined,
        EnvironmentLinks: undefined,
        EnvironmentArn: undefined,
        OperationsRole: undefined,
    };
    if (output["EnvironmentName"] !== undefined) {
        contents.EnvironmentName = output["EnvironmentName"];
    }
    if (output["EnvironmentId"] !== undefined) {
        contents.EnvironmentId = output["EnvironmentId"];
    }
    if (output["ApplicationName"] !== undefined) {
        contents.ApplicationName = output["ApplicationName"];
    }
    if (output["VersionLabel"] !== undefined) {
        contents.VersionLabel = output["VersionLabel"];
    }
    if (output["SolutionStackName"] !== undefined) {
        contents.SolutionStackName = output["SolutionStackName"];
    }
    if (output["PlatformArn"] !== undefined) {
        contents.PlatformArn = output["PlatformArn"];
    }
    if (output["TemplateName"] !== undefined) {
        contents.TemplateName = output["TemplateName"];
    }
    if (output["Description"] !== undefined) {
        contents.Description = output["Description"];
    }
    if (output["EndpointURL"] !== undefined) {
        contents.EndpointURL = output["EndpointURL"];
    }
    if (output["CNAME"] !== undefined) {
        contents.CNAME = output["CNAME"];
    }
    if (output["DateCreated"] !== undefined) {
        contents.DateCreated = new Date(output["DateCreated"]);
    }
    if (output["DateUpdated"] !== undefined) {
        contents.DateUpdated = new Date(output["DateUpdated"]);
    }
    if (output["Status"] !== undefined) {
        contents.Status = output["Status"];
    }
    if (output["AbortableOperationInProgress"] !== undefined) {
        contents.AbortableOperationInProgress = output["AbortableOperationInProgress"] == "true";
    }
    if (output["Health"] !== undefined) {
        contents.Health = output["Health"];
    }
    if (output["HealthStatus"] !== undefined) {
        contents.HealthStatus = output["HealthStatus"];
    }
    if (output["Resources"] !== undefined) {
        contents.Resources = deserializeAws_queryEnvironmentResourcesDescription(output["Resources"], context);
    }
    if (output["Tier"] !== undefined) {
        contents.Tier = deserializeAws_queryEnvironmentTier(output["Tier"], context);
    }
    if (output.EnvironmentLinks === "") {
        contents.EnvironmentLinks = [];
    }
    if (output["EnvironmentLinks"] !== undefined && output["EnvironmentLinks"]["member"] !== undefined) {
        contents.EnvironmentLinks = deserializeAws_queryEnvironmentLinks(smithy_client_1.getArrayIfSingleItem(output["EnvironmentLinks"]["member"]), context);
    }
    if (output["EnvironmentArn"] !== undefined) {
        contents.EnvironmentArn = output["EnvironmentArn"];
    }
    if (output["OperationsRole"] !== undefined) {
        contents.OperationsRole = output["OperationsRole"];
    }
    return contents;
};
const deserializeAws_queryEnvironmentDescriptionsList = (output, context) => {
    return (output || [])
        .filter((e) => e != null)
        .map((entry) => {
        if (entry === null) {
            return null;
        }
        return deserializeAws_queryEnvironmentDescription(entry, context);
    });
};
const deserializeAws_queryEnvironmentDescriptionsMessage = (output, context) => {
    let contents = {
        Environments: undefined,
        NextToken: undefined,
    };
    if (output.Environments === "") {
        contents.Environments = [];
    }
    if (output["Environments"] !== undefined && output["Environments"]["member"] !== undefined) {
        contents.Environments = deserializeAws_queryEnvironmentDescriptionsList(smithy_client_1.getArrayIfSingleItem(output["Environments"]["member"]), context);
    }
    if (output["NextToken"] !== undefined) {
        contents.NextToken = output["NextToken"];
    }
    return contents;
};
const deserializeAws_queryEnvironmentInfoDescription = (output, context) => {
    let contents = {
        InfoType: undefined,
        Ec2InstanceId: undefined,
        SampleTimestamp: undefined,
        Message: undefined,
    };
    if (output["InfoType"] !== undefined) {
        contents.InfoType = output["InfoType"];
    }
    if (output["Ec2InstanceId"] !== undefined) {
        contents.Ec2InstanceId = output["Ec2InstanceId"];
    }
    if (output["SampleTimestamp"] !== undefined) {
        contents.SampleTimestamp = new Date(output["SampleTimestamp"]);
    }
    if (output["Message"] !== undefined) {
        contents.Message = output["Message"];
    }
    return contents;
};
const deserializeAws_queryEnvironmentInfoDescriptionList = (output, context) => {
    return (output || [])
        .filter((e) => e != null)
        .map((entry) => {
        if (entry === null) {
            return null;
        }
        return deserializeAws_queryEnvironmentInfoDescription(entry, context);
    });
};
const deserializeAws_queryEnvironmentLink = (output, context) => {
    let contents = {
        LinkName: undefined,
        EnvironmentName: undefined,
    };
    if (output["LinkName"] !== undefined) {
        contents.LinkName = output["LinkName"];
    }
    if (output["EnvironmentName"] !== undefined) {
        contents.EnvironmentName = output["EnvironmentName"];
    }
    return contents;
};
const deserializeAws_queryEnvironmentLinks = (output, context) => {
    return (output || [])
        .filter((e) => e != null)
        .map((entry) => {
        if (entry === null) {
            return null;
        }
        return deserializeAws_queryEnvironmentLink(entry, context);
    });
};
const deserializeAws_queryEnvironmentResourceDescription = (output, context) => {
    let contents = {
        EnvironmentName: undefined,
        AutoScalingGroups: undefined,
        Instances: undefined,
        LaunchConfigurations: undefined,
        LaunchTemplates: undefined,
        LoadBalancers: undefined,
        Triggers: undefined,
        Queues: undefined,
    };
    if (output["EnvironmentName"] !== undefined) {
        contents.EnvironmentName = output["EnvironmentName"];
    }
    if (output.AutoScalingGroups === "") {
        contents.AutoScalingGroups = [];
    }
    if (output["AutoScalingGroups"] !== undefined && output["AutoScalingGroups"]["member"] !== undefined) {
        contents.AutoScalingGroups = deserializeAws_queryAutoScalingGroupList(smithy_client_1.getArrayIfSingleItem(output["AutoScalingGroups"]["member"]), context);
    }
    if (output.Instances === "") {
        contents.Instances = [];
    }
    if (output["Instances"] !== undefined && output["Instances"]["member"] !== undefined) {
        contents.Instances = deserializeAws_queryInstanceList(smithy_client_1.getArrayIfSingleItem(output["Instances"]["member"]), context);
    }
    if (output.LaunchConfigurations === "") {
        contents.LaunchConfigurations = [];
    }
    if (output["LaunchConfigurations"] !== undefined && output["LaunchConfigurations"]["member"] !== undefined) {
        contents.LaunchConfigurations = deserializeAws_queryLaunchConfigurationList(smithy_client_1.getArrayIfSingleItem(output["LaunchConfigurations"]["member"]), context);
    }
    if (output.LaunchTemplates === "") {
        contents.LaunchTemplates = [];
    }
    if (output["LaunchTemplates"] !== undefined && output["LaunchTemplates"]["member"] !== undefined) {
        contents.LaunchTemplates = deserializeAws_queryLaunchTemplateList(smithy_client_1.getArrayIfSingleItem(output["LaunchTemplates"]["member"]), context);
    }
    if (output.LoadBalancers === "") {
        contents.LoadBalancers = [];
    }
    if (output["LoadBalancers"] !== undefined && output["LoadBalancers"]["member"] !== undefined) {
        contents.LoadBalancers = deserializeAws_queryLoadBalancerList(smithy_client_1.getArrayIfSingleItem(output["LoadBalancers"]["member"]), context);
    }
    if (output.Triggers === "") {
        contents.Triggers = [];
    }
    if (output["Triggers"] !== undefined && output["Triggers"]["member"] !== undefined) {
        contents.Triggers = deserializeAws_queryTriggerList(smithy_client_1.getArrayIfSingleItem(output["Triggers"]["member"]), context);
    }
    if (output.Queues === "") {
        contents.Queues = [];
    }
    if (output["Queues"] !== undefined && output["Queues"]["member"] !== undefined) {
        contents.Queues = deserializeAws_queryQueueList(smithy_client_1.getArrayIfSingleItem(output["Queues"]["member"]), context);
    }
    return contents;
};
const deserializeAws_queryEnvironmentResourceDescriptionsMessage = (output, context) => {
    let contents = {
        EnvironmentResources: undefined,
    };
    if (output["EnvironmentResources"] !== undefined) {
        contents.EnvironmentResources = deserializeAws_queryEnvironmentResourceDescription(output["EnvironmentResources"], context);
    }
    return contents;
};
const deserializeAws_queryEnvironmentResourcesDescription = (output, context) => {
    let contents = {
        LoadBalancer: undefined,
    };
    if (output["LoadBalancer"] !== undefined) {
        contents.LoadBalancer = deserializeAws_queryLoadBalancerDescription(output["LoadBalancer"], context);
    }
    return contents;
};
const deserializeAws_queryEnvironmentTier = (output, context) => {
    let contents = {
        Name: undefined,
        Type: undefined,
        Version: undefined,
    };
    if (output["Name"] !== undefined) {
        contents.Name = output["Name"];
    }
    if (output["Type"] !== undefined) {
        contents.Type = output["Type"];
    }
    if (output["Version"] !== undefined) {
        contents.Version = output["Version"];
    }
    return contents;
};
const deserializeAws_queryEventDescription = (output, context) => {
    let contents = {
        EventDate: undefined,
        Message: undefined,
        ApplicationName: undefined,
        VersionLabel: undefined,
        TemplateName: undefined,
        EnvironmentName: undefined,
        PlatformArn: undefined,
        RequestId: undefined,
        Severity: undefined,
    };
    if (output["EventDate"] !== undefined) {
        contents.EventDate = new Date(output["EventDate"]);
    }
    if (output["Message"] !== undefined) {
        contents.Message = output["Message"];
    }
    if (output["ApplicationName"] !== undefined) {
        contents.ApplicationName = output["ApplicationName"];
    }
    if (output["VersionLabel"] !== undefined) {
        contents.VersionLabel = output["VersionLabel"];
    }
    if (output["TemplateName"] !== undefined) {
        contents.TemplateName = output["TemplateName"];
    }
    if (output["EnvironmentName"] !== undefined) {
        contents.EnvironmentName = output["EnvironmentName"];
    }
    if (output["PlatformArn"] !== undefined) {
        contents.PlatformArn = output["PlatformArn"];
    }
    if (output["RequestId"] !== undefined) {
        contents.RequestId = output["RequestId"];
    }
    if (output["Severity"] !== undefined) {
        contents.Severity = output["Severity"];
    }
    return contents;
};
const deserializeAws_queryEventDescriptionList = (output, context) => {
    return (output || [])
        .filter((e) => e != null)
        .map((entry) => {
        if (entry === null) {
            return null;
        }
        return deserializeAws_queryEventDescription(entry, context);
    });
};
const deserializeAws_queryEventDescriptionsMessage = (output, context) => {
    let contents = {
        Events: undefined,
        NextToken: undefined,
    };
    if (output.Events === "") {
        contents.Events = [];
    }
    if (output["Events"] !== undefined && output["Events"]["member"] !== undefined) {
        contents.Events = deserializeAws_queryEventDescriptionList(smithy_client_1.getArrayIfSingleItem(output["Events"]["member"]), context);
    }
    if (output["NextToken"] !== undefined) {
        contents.NextToken = output["NextToken"];
    }
    return contents;
};
const deserializeAws_queryInstance = (output, context) => {
    let contents = {
        Id: undefined,
    };
    if (output["Id"] !== undefined) {
        contents.Id = output["Id"];
    }
    return contents;
};
const deserializeAws_queryInstanceHealthList = (output, context) => {
    return (output || [])
        .filter((e) => e != null)
        .map((entry) => {
        if (entry === null) {
            return null;
        }
        return deserializeAws_querySingleInstanceHealth(entry, context);
    });
};
const deserializeAws_queryInstanceHealthSummary = (output, context) => {
    let contents = {
        NoData: undefined,
        Unknown: undefined,
        Pending: undefined,
        Ok: undefined,
        Info: undefined,
        Warning: undefined,
        Degraded: undefined,
        Severe: undefined,
    };
    if (output["NoData"] !== undefined) {
        contents.NoData = parseInt(output["NoData"]);
    }
    if (output["Unknown"] !== undefined) {
        contents.Unknown = parseInt(output["Unknown"]);
    }
    if (output["Pending"] !== undefined) {
        contents.Pending = parseInt(output["Pending"]);
    }
    if (output["Ok"] !== undefined) {
        contents.Ok = parseInt(output["Ok"]);
    }
    if (output["Info"] !== undefined) {
        contents.Info = parseInt(output["Info"]);
    }
    if (output["Warning"] !== undefined) {
        contents.Warning = parseInt(output["Warning"]);
    }
    if (output["Degraded"] !== undefined) {
        contents.Degraded = parseInt(output["Degraded"]);
    }
    if (output["Severe"] !== undefined) {
        contents.Severe = parseInt(output["Severe"]);
    }
    return contents;
};
const deserializeAws_queryInstanceList = (output, context) => {
    return (output || [])
        .filter((e) => e != null)
        .map((entry) => {
        if (entry === null) {
            return null;
        }
        return deserializeAws_queryInstance(entry, context);
    });
};
const deserializeAws_queryInsufficientPrivilegesException = (output, context) => {
    let contents = {
        message: undefined,
    };
    if (output["message"] !== undefined) {
        contents.message = output["message"];
    }
    return contents;
};
const deserializeAws_queryInvalidRequestException = (output, context) => {
    let contents = {
        message: undefined,
    };
    if (output["message"] !== undefined) {
        contents.message = output["message"];
    }
    return contents;
};
const deserializeAws_queryLatency = (output, context) => {
    let contents = {
        P999: undefined,
        P99: undefined,
        P95: undefined,
        P90: undefined,
        P85: undefined,
        P75: undefined,
        P50: undefined,
        P10: undefined,
    };
    if (output["P999"] !== undefined) {
        contents.P999 = parseFloat(output["P999"]);
    }
    if (output["P99"] !== undefined) {
        contents.P99 = parseFloat(output["P99"]);
    }
    if (output["P95"] !== undefined) {
        contents.P95 = parseFloat(output["P95"]);
    }
    if (output["P90"] !== undefined) {
        contents.P90 = parseFloat(output["P90"]);
    }
    if (output["P85"] !== undefined) {
        contents.P85 = parseFloat(output["P85"]);
    }
    if (output["P75"] !== undefined) {
        contents.P75 = parseFloat(output["P75"]);
    }
    if (output["P50"] !== undefined) {
        contents.P50 = parseFloat(output["P50"]);
    }
    if (output["P10"] !== undefined) {
        contents.P10 = parseFloat(output["P10"]);
    }
    return contents;
};
const deserializeAws_queryLaunchConfiguration = (output, context) => {
    let contents = {
        Name: undefined,
    };
    if (output["Name"] !== undefined) {
        contents.Name = output["Name"];
    }
    return contents;
};
const deserializeAws_queryLaunchConfigurationList = (output, context) => {
    return (output || [])
        .filter((e) => e != null)
        .map((entry) => {
        if (entry === null) {
            return null;
        }
        return deserializeAws_queryLaunchConfiguration(entry, context);
    });
};
const deserializeAws_queryLaunchTemplate = (output, context) => {
    let contents = {
        Id: undefined,
    };
    if (output["Id"] !== undefined) {
        contents.Id = output["Id"];
    }
    return contents;
};
const deserializeAws_queryLaunchTemplateList = (output, context) => {
    return (output || [])
        .filter((e) => e != null)
        .map((entry) => {
        if (entry === null) {
            return null;
        }
        return deserializeAws_queryLaunchTemplate(entry, context);
    });
};
const deserializeAws_queryListAvailableSolutionStacksResultMessage = (output, context) => {
    let contents = {
        SolutionStacks: undefined,
        SolutionStackDetails: undefined,
    };
    if (output.SolutionStacks === "") {
        contents.SolutionStacks = [];
    }
    if (output["SolutionStacks"] !== undefined && output["SolutionStacks"]["member"] !== undefined) {
        contents.SolutionStacks = deserializeAws_queryAvailableSolutionStackNamesList(smithy_client_1.getArrayIfSingleItem(output["SolutionStacks"]["member"]), context);
    }
    if (output.SolutionStackDetails === "") {
        contents.SolutionStackDetails = [];
    }
    if (output["SolutionStackDetails"] !== undefined && output["SolutionStackDetails"]["member"] !== undefined) {
        contents.SolutionStackDetails = deserializeAws_queryAvailableSolutionStackDetailsList(smithy_client_1.getArrayIfSingleItem(output["SolutionStackDetails"]["member"]), context);
    }
    return contents;
};
const deserializeAws_queryListener = (output, context) => {
    let contents = {
        Protocol: undefined,
        Port: undefined,
    };
    if (output["Protocol"] !== undefined) {
        contents.Protocol = output["Protocol"];
    }
    if (output["Port"] !== undefined) {
        contents.Port = parseInt(output["Port"]);
    }
    return contents;
};
const deserializeAws_queryListPlatformBranchesResult = (output, context) => {
    let contents = {
        PlatformBranchSummaryList: undefined,
        NextToken: undefined,
    };
    if (output.PlatformBranchSummaryList === "") {
        contents.PlatformBranchSummaryList = [];
    }
    if (output["PlatformBranchSummaryList"] !== undefined &&
        output["PlatformBranchSummaryList"]["member"] !== undefined) {
        contents.PlatformBranchSummaryList = deserializeAws_queryPlatformBranchSummaryList(smithy_client_1.getArrayIfSingleItem(output["PlatformBranchSummaryList"]["member"]), context);
    }
    if (output["NextToken"] !== undefined) {
        contents.NextToken = output["NextToken"];
    }
    return contents;
};
const deserializeAws_queryListPlatformVersionsResult = (output, context) => {
    let contents = {
        PlatformSummaryList: undefined,
        NextToken: undefined,
    };
    if (output.PlatformSummaryList === "") {
        contents.PlatformSummaryList = [];
    }
    if (output["PlatformSummaryList"] !== undefined && output["PlatformSummaryList"]["member"] !== undefined) {
        contents.PlatformSummaryList = deserializeAws_queryPlatformSummaryList(smithy_client_1.getArrayIfSingleItem(output["PlatformSummaryList"]["member"]), context);
    }
    if (output["NextToken"] !== undefined) {
        contents.NextToken = output["NextToken"];
    }
    return contents;
};
const deserializeAws_queryLoadAverage = (output, context) => {
    return (output || [])
        .filter((e) => e != null)
        .map((entry) => {
        if (entry === null) {
            return null;
        }
        return parseFloat(entry);
    });
};
const deserializeAws_queryLoadBalancer = (output, context) => {
    let contents = {
        Name: undefined,
    };
    if (output["Name"] !== undefined) {
        contents.Name = output["Name"];
    }
    return contents;
};
const deserializeAws_queryLoadBalancerDescription = (output, context) => {
    let contents = {
        LoadBalancerName: undefined,
        Domain: undefined,
        Listeners: undefined,
    };
    if (output["LoadBalancerName"] !== undefined) {
        contents.LoadBalancerName = output["LoadBalancerName"];
    }
    if (output["Domain"] !== undefined) {
        contents.Domain = output["Domain"];
    }
    if (output.Listeners === "") {
        contents.Listeners = [];
    }
    if (output["Listeners"] !== undefined && output["Listeners"]["member"] !== undefined) {
        contents.Listeners = deserializeAws_queryLoadBalancerListenersDescription(smithy_client_1.getArrayIfSingleItem(output["Listeners"]["member"]), context);
    }
    return contents;
};
const deserializeAws_queryLoadBalancerList = (output, context) => {
    return (output || [])
        .filter((e) => e != null)
        .map((entry) => {
        if (entry === null) {
            return null;
        }
        return deserializeAws_queryLoadBalancer(entry, context);
    });
};
const deserializeAws_queryLoadBalancerListenersDescription = (output, context) => {
    return (output || [])
        .filter((e) => e != null)
        .map((entry) => {
        if (entry === null) {
            return null;
        }
        return deserializeAws_queryListener(entry, context);
    });
};
const deserializeAws_queryManagedAction = (output, context) => {
    let contents = {
        ActionId: undefined,
        ActionDescription: undefined,
        ActionType: undefined,
        Status: undefined,
        WindowStartTime: undefined,
    };
    if (output["ActionId"] !== undefined) {
        contents.ActionId = output["ActionId"];
    }
    if (output["ActionDescription"] !== undefined) {
        contents.ActionDescription = output["ActionDescription"];
    }
    if (output["ActionType"] !== undefined) {
        contents.ActionType = output["ActionType"];
    }
    if (output["Status"] !== undefined) {
        contents.Status = output["Status"];
    }
    if (output["WindowStartTime"] !== undefined) {
        contents.WindowStartTime = new Date(output["WindowStartTime"]);
    }
    return contents;
};
const deserializeAws_queryManagedActionHistoryItem = (output, context) => {
    let contents = {
        ActionId: undefined,
        ActionType: undefined,
        ActionDescription: undefined,
        FailureType: undefined,
        Status: undefined,
        FailureDescription: undefined,
        ExecutedTime: undefined,
        FinishedTime: undefined,
    };
    if (output["ActionId"] !== undefined) {
        contents.ActionId = output["ActionId"];
    }
    if (output["ActionType"] !== undefined) {
        contents.ActionType = output["ActionType"];
    }
    if (output["ActionDescription"] !== undefined) {
        contents.ActionDescription = output["ActionDescription"];
    }
    if (output["FailureType"] !== undefined) {
        contents.FailureType = output["FailureType"];
    }
    if (output["Status"] !== undefined) {
        contents.Status = output["Status"];
    }
    if (output["FailureDescription"] !== undefined) {
        contents.FailureDescription = output["FailureDescription"];
    }
    if (output["ExecutedTime"] !== undefined) {
        contents.ExecutedTime = new Date(output["ExecutedTime"]);
    }
    if (output["FinishedTime"] !== undefined) {
        contents.FinishedTime = new Date(output["FinishedTime"]);
    }
    return contents;
};
const deserializeAws_queryManagedActionHistoryItems = (output, context) => {
    return (output || [])
        .filter((e) => e != null)
        .map((entry) => {
        if (entry === null) {
            return null;
        }
        return deserializeAws_queryManagedActionHistoryItem(entry, context);
    });
};
const deserializeAws_queryManagedActionInvalidStateException = (output, context) => {
    let contents = {
        message: undefined,
    };
    if (output["message"] !== undefined) {
        contents.message = output["message"];
    }
    return contents;
};
const deserializeAws_queryManagedActions = (output, context) => {
    return (output || [])
        .filter((e) => e != null)
        .map((entry) => {
        if (entry === null) {
            return null;
        }
        return deserializeAws_queryManagedAction(entry, context);
    });
};
const deserializeAws_queryMaxAgeRule = (output, context) => {
    let contents = {
        Enabled: undefined,
        MaxAgeInDays: undefined,
        DeleteSourceFromS3: undefined,
    };
    if (output["Enabled"] !== undefined) {
        contents.Enabled = output["Enabled"] == "true";
    }
    if (output["MaxAgeInDays"] !== undefined) {
        contents.MaxAgeInDays = parseInt(output["MaxAgeInDays"]);
    }
    if (output["DeleteSourceFromS3"] !== undefined) {
        contents.DeleteSourceFromS3 = output["DeleteSourceFromS3"] == "true";
    }
    return contents;
};
const deserializeAws_queryMaxCountRule = (output, context) => {
    let contents = {
        Enabled: undefined,
        MaxCount: undefined,
        DeleteSourceFromS3: undefined,
    };
    if (output["Enabled"] !== undefined) {
        contents.Enabled = output["Enabled"] == "true";
    }
    if (output["MaxCount"] !== undefined) {
        contents.MaxCount = parseInt(output["MaxCount"]);
    }
    if (output["DeleteSourceFromS3"] !== undefined) {
        contents.DeleteSourceFromS3 = output["DeleteSourceFromS3"] == "true";
    }
    return contents;
};
const deserializeAws_queryOperationInProgressException = (output, context) => {
    let contents = {
        message: undefined,
    };
    if (output["message"] !== undefined) {
        contents.message = output["message"];
    }
    return contents;
};
const deserializeAws_queryOptionRestrictionRegex = (output, context) => {
    let contents = {
        Pattern: undefined,
        Label: undefined,
    };
    if (output["Pattern"] !== undefined) {
        contents.Pattern = output["Pattern"];
    }
    if (output["Label"] !== undefined) {
        contents.Label = output["Label"];
    }
    return contents;
};
const deserializeAws_queryPlatformBranchSummary = (output, context) => {
    let contents = {
        PlatformName: undefined,
        BranchName: undefined,
        LifecycleState: undefined,
        BranchOrder: undefined,
        SupportedTierList: undefined,
    };
    if (output["PlatformName"] !== undefined) {
        contents.PlatformName = output["PlatformName"];
    }
    if (output["BranchName"] !== undefined) {
        contents.BranchName = output["BranchName"];
    }
    if (output["LifecycleState"] !== undefined) {
        contents.LifecycleState = output["LifecycleState"];
    }
    if (output["BranchOrder"] !== undefined) {
        contents.BranchOrder = parseInt(output["BranchOrder"]);
    }
    if (output.SupportedTierList === "") {
        contents.SupportedTierList = [];
    }
    if (output["SupportedTierList"] !== undefined && output["SupportedTierList"]["member"] !== undefined) {
        contents.SupportedTierList = deserializeAws_querySupportedTierList(smithy_client_1.getArrayIfSingleItem(output["SupportedTierList"]["member"]), context);
    }
    return contents;
};
const deserializeAws_queryPlatformBranchSummaryList = (output, context) => {
    return (output || [])
        .filter((e) => e != null)
        .map((entry) => {
        if (entry === null) {
            return null;
        }
        return deserializeAws_queryPlatformBranchSummary(entry, context);
    });
};
const deserializeAws_queryPlatformDescription = (output, context) => {
    let contents = {
        PlatformArn: undefined,
        PlatformOwner: undefined,
        PlatformName: undefined,
        PlatformVersion: undefined,
        SolutionStackName: undefined,
        PlatformStatus: undefined,
        DateCreated: undefined,
        DateUpdated: undefined,
        PlatformCategory: undefined,
        Description: undefined,
        Maintainer: undefined,
        OperatingSystemName: undefined,
        OperatingSystemVersion: undefined,
        ProgrammingLanguages: undefined,
        Frameworks: undefined,
        CustomAmiList: undefined,
        SupportedTierList: undefined,
        SupportedAddonList: undefined,
        PlatformLifecycleState: undefined,
        PlatformBranchName: undefined,
        PlatformBranchLifecycleState: undefined,
    };
    if (output["PlatformArn"] !== undefined) {
        contents.PlatformArn = output["PlatformArn"];
    }
    if (output["PlatformOwner"] !== undefined) {
        contents.PlatformOwner = output["PlatformOwner"];
    }
    if (output["PlatformName"] !== undefined) {
        contents.PlatformName = output["PlatformName"];
    }
    if (output["PlatformVersion"] !== undefined) {
        contents.PlatformVersion = output["PlatformVersion"];
    }
    if (output["SolutionStackName"] !== undefined) {
        contents.SolutionStackName = output["SolutionStackName"];
    }
    if (output["PlatformStatus"] !== undefined) {
        contents.PlatformStatus = output["PlatformStatus"];
    }
    if (output["DateCreated"] !== undefined) {
        contents.DateCreated = new Date(output["DateCreated"]);
    }
    if (output["DateUpdated"] !== undefined) {
        contents.DateUpdated = new Date(output["DateUpdated"]);
    }
    if (output["PlatformCategory"] !== undefined) {
        contents.PlatformCategory = output["PlatformCategory"];
    }
    if (output["Description"] !== undefined) {
        contents.Description = output["Description"];
    }
    if (output["Maintainer"] !== undefined) {
        contents.Maintainer = output["Maintainer"];
    }
    if (output["OperatingSystemName"] !== undefined) {
        contents.OperatingSystemName = output["OperatingSystemName"];
    }
    if (output["OperatingSystemVersion"] !== undefined) {
        contents.OperatingSystemVersion = output["OperatingSystemVersion"];
    }
    if (output.ProgrammingLanguages === "") {
        contents.ProgrammingLanguages = [];
    }
    if (output["ProgrammingLanguages"] !== undefined && output["ProgrammingLanguages"]["member"] !== undefined) {
        contents.ProgrammingLanguages = deserializeAws_queryPlatformProgrammingLanguages(smithy_client_1.getArrayIfSingleItem(output["ProgrammingLanguages"]["member"]), context);
    }
    if (output.Frameworks === "") {
        contents.Frameworks = [];
    }
    if (output["Frameworks"] !== undefined && output["Frameworks"]["member"] !== undefined) {
        contents.Frameworks = deserializeAws_queryPlatformFrameworks(smithy_client_1.getArrayIfSingleItem(output["Frameworks"]["member"]), context);
    }
    if (output.CustomAmiList === "") {
        contents.CustomAmiList = [];
    }
    if (output["CustomAmiList"] !== undefined && output["CustomAmiList"]["member"] !== undefined) {
        contents.CustomAmiList = deserializeAws_queryCustomAmiList(smithy_client_1.getArrayIfSingleItem(output["CustomAmiList"]["member"]), context);
    }
    if (output.SupportedTierList === "") {
        contents.SupportedTierList = [];
    }
    if (output["SupportedTierList"] !== undefined && output["SupportedTierList"]["member"] !== undefined) {
        contents.SupportedTierList = deserializeAws_querySupportedTierList(smithy_client_1.getArrayIfSingleItem(output["SupportedTierList"]["member"]), context);
    }
    if (output.SupportedAddonList === "") {
        contents.SupportedAddonList = [];
    }
    if (output["SupportedAddonList"] !== undefined && output["SupportedAddonList"]["member"] !== undefined) {
        contents.SupportedAddonList = deserializeAws_querySupportedAddonList(smithy_client_1.getArrayIfSingleItem(output["SupportedAddonList"]["member"]), context);
    }
    if (output["PlatformLifecycleState"] !== undefined) {
        contents.PlatformLifecycleState = output["PlatformLifecycleState"];
    }
    if (output["PlatformBranchName"] !== undefined) {
        contents.PlatformBranchName = output["PlatformBranchName"];
    }
    if (output["PlatformBranchLifecycleState"] !== undefined) {
        contents.PlatformBranchLifecycleState = output["PlatformBranchLifecycleState"];
    }
    return contents;
};
const deserializeAws_queryPlatformFramework = (output, context) => {
    let contents = {
        Name: undefined,
        Version: undefined,
    };
    if (output["Name"] !== undefined) {
        contents.Name = output["Name"];
    }
    if (output["Version"] !== undefined) {
        contents.Version = output["Version"];
    }
    return contents;
};
const deserializeAws_queryPlatformFrameworks = (output, context) => {
    return (output || [])
        .filter((e) => e != null)
        .map((entry) => {
        if (entry === null) {
            return null;
        }
        return deserializeAws_queryPlatformFramework(entry, context);
    });
};
const deserializeAws_queryPlatformProgrammingLanguage = (output, context) => {
    let contents = {
        Name: undefined,
        Version: undefined,
    };
    if (output["Name"] !== undefined) {
        contents.Name = output["Name"];
    }
    if (output["Version"] !== undefined) {
        contents.Version = output["Version"];
    }
    return contents;
};
const deserializeAws_queryPlatformProgrammingLanguages = (output, context) => {
    return (output || [])
        .filter((e) => e != null)
        .map((entry) => {
        if (entry === null) {
            return null;
        }
        return deserializeAws_queryPlatformProgrammingLanguage(entry, context);
    });
};
const deserializeAws_queryPlatformSummary = (output, context) => {
    let contents = {
        PlatformArn: undefined,
        PlatformOwner: undefined,
        PlatformStatus: undefined,
        PlatformCategory: undefined,
        OperatingSystemName: undefined,
        OperatingSystemVersion: undefined,
        SupportedTierList: undefined,
        SupportedAddonList: undefined,
        PlatformLifecycleState: undefined,
        PlatformVersion: undefined,
        PlatformBranchName: undefined,
        PlatformBranchLifecycleState: undefined,
    };
    if (output["PlatformArn"] !== undefined) {
        contents.PlatformArn = output["PlatformArn"];
    }
    if (output["PlatformOwner"] !== undefined) {
        contents.PlatformOwner = output["PlatformOwner"];
    }
    if (output["PlatformStatus"] !== undefined) {
        contents.PlatformStatus = output["PlatformStatus"];
    }
    if (output["PlatformCategory"] !== undefined) {
        contents.PlatformCategory = output["PlatformCategory"];
    }
    if (output["OperatingSystemName"] !== undefined) {
        contents.OperatingSystemName = output["OperatingSystemName"];
    }
    if (output["OperatingSystemVersion"] !== undefined) {
        contents.OperatingSystemVersion = output["OperatingSystemVersion"];
    }
    if (output.SupportedTierList === "") {
        contents.SupportedTierList = [];
    }
    if (output["SupportedTierList"] !== undefined && output["SupportedTierList"]["member"] !== undefined) {
        contents.SupportedTierList = deserializeAws_querySupportedTierList(smithy_client_1.getArrayIfSingleItem(output["SupportedTierList"]["member"]), context);
    }
    if (output.SupportedAddonList === "") {
        contents.SupportedAddonList = [];
    }
    if (output["SupportedAddonList"] !== undefined && output["SupportedAddonList"]["member"] !== undefined) {
        contents.SupportedAddonList = deserializeAws_querySupportedAddonList(smithy_client_1.getArrayIfSingleItem(output["SupportedAddonList"]["member"]), context);
    }
    if (output["PlatformLifecycleState"] !== undefined) {
        contents.PlatformLifecycleState = output["PlatformLifecycleState"];
    }
    if (output["PlatformVersion"] !== undefined) {
        contents.PlatformVersion = output["PlatformVersion"];
    }
    if (output["PlatformBranchName"] !== undefined) {
        contents.PlatformBranchName = output["PlatformBranchName"];
    }
    if (output["PlatformBranchLifecycleState"] !== undefined) {
        contents.PlatformBranchLifecycleState = output["PlatformBranchLifecycleState"];
    }
    return contents;
};
const deserializeAws_queryPlatformSummaryList = (output, context) => {
    return (output || [])
        .filter((e) => e != null)
        .map((entry) => {
        if (entry === null) {
            return null;
        }
        return deserializeAws_queryPlatformSummary(entry, context);
    });
};
const deserializeAws_queryPlatformVersionStillReferencedException = (output, context) => {
    let contents = {
        message: undefined,
    };
    if (output["message"] !== undefined) {
        contents.message = output["message"];
    }
    return contents;
};
const deserializeAws_queryQueue = (output, context) => {
    let contents = {
        Name: undefined,
        URL: undefined,
    };
    if (output["Name"] !== undefined) {
        contents.Name = output["Name"];
    }
    if (output["URL"] !== undefined) {
        contents.URL = output["URL"];
    }
    return contents;
};
const deserializeAws_queryQueueList = (output, context) => {
    return (output || [])
        .filter((e) => e != null)
        .map((entry) => {
        if (entry === null) {
            return null;
        }
        return deserializeAws_queryQueue(entry, context);
    });
};
const deserializeAws_queryResourceNotFoundException = (output, context) => {
    let contents = {
        message: undefined,
    };
    if (output["message"] !== undefined) {
        contents.message = output["message"];
    }
    return contents;
};
const deserializeAws_queryResourceQuota = (output, context) => {
    let contents = {
        Maximum: undefined,
    };
    if (output["Maximum"] !== undefined) {
        contents.Maximum = parseInt(output["Maximum"]);
    }
    return contents;
};
const deserializeAws_queryResourceQuotas = (output, context) => {
    let contents = {
        ApplicationQuota: undefined,
        ApplicationVersionQuota: undefined,
        EnvironmentQuota: undefined,
        ConfigurationTemplateQuota: undefined,
        CustomPlatformQuota: undefined,
    };
    if (output["ApplicationQuota"] !== undefined) {
        contents.ApplicationQuota = deserializeAws_queryResourceQuota(output["ApplicationQuota"], context);
    }
    if (output["ApplicationVersionQuota"] !== undefined) {
        contents.ApplicationVersionQuota = deserializeAws_queryResourceQuota(output["ApplicationVersionQuota"], context);
    }
    if (output["EnvironmentQuota"] !== undefined) {
        contents.EnvironmentQuota = deserializeAws_queryResourceQuota(output["EnvironmentQuota"], context);
    }
    if (output["ConfigurationTemplateQuota"] !== undefined) {
        contents.ConfigurationTemplateQuota = deserializeAws_queryResourceQuota(output["ConfigurationTemplateQuota"], context);
    }
    if (output["CustomPlatformQuota"] !== undefined) {
        contents.CustomPlatformQuota = deserializeAws_queryResourceQuota(output["CustomPlatformQuota"], context);
    }
    return contents;
};
const deserializeAws_queryResourceTagsDescriptionMessage = (output, context) => {
    let contents = {
        ResourceArn: undefined,
        ResourceTags: undefined,
    };
    if (output["ResourceArn"] !== undefined) {
        contents.ResourceArn = output["ResourceArn"];
    }
    if (output.ResourceTags === "") {
        contents.ResourceTags = [];
    }
    if (output["ResourceTags"] !== undefined && output["ResourceTags"]["member"] !== undefined) {
        contents.ResourceTags = deserializeAws_queryTagList(smithy_client_1.getArrayIfSingleItem(output["ResourceTags"]["member"]), context);
    }
    return contents;
};
const deserializeAws_queryResourceTypeNotSupportedException = (output, context) => {
    let contents = {
        message: undefined,
    };
    if (output["message"] !== undefined) {
        contents.message = output["message"];
    }
    return contents;
};
const deserializeAws_queryRetrieveEnvironmentInfoResultMessage = (output, context) => {
    let contents = {
        EnvironmentInfo: undefined,
    };
    if (output.EnvironmentInfo === "") {
        contents.EnvironmentInfo = [];
    }
    if (output["EnvironmentInfo"] !== undefined && output["EnvironmentInfo"]["member"] !== undefined) {
        contents.EnvironmentInfo = deserializeAws_queryEnvironmentInfoDescriptionList(smithy_client_1.getArrayIfSingleItem(output["EnvironmentInfo"]["member"]), context);
    }
    return contents;
};
const deserializeAws_queryS3Location = (output, context) => {
    let contents = {
        S3Bucket: undefined,
        S3Key: undefined,
    };
    if (output["S3Bucket"] !== undefined) {
        contents.S3Bucket = output["S3Bucket"];
    }
    if (output["S3Key"] !== undefined) {
        contents.S3Key = output["S3Key"];
    }
    return contents;
};
const deserializeAws_queryS3LocationNotInServiceRegionException = (output, context) => {
    let contents = {
        message: undefined,
    };
    if (output["message"] !== undefined) {
        contents.message = output["message"];
    }
    return contents;
};
const deserializeAws_queryS3SubscriptionRequiredException = (output, context) => {
    let contents = {
        message: undefined,
    };
    if (output["message"] !== undefined) {
        contents.message = output["message"];
    }
    return contents;
};
const deserializeAws_querySingleInstanceHealth = (output, context) => {
    let contents = {
        InstanceId: undefined,
        HealthStatus: undefined,
        Color: undefined,
        Causes: undefined,
        LaunchedAt: undefined,
        ApplicationMetrics: undefined,
        System: undefined,
        Deployment: undefined,
        AvailabilityZone: undefined,
        InstanceType: undefined,
    };
    if (output["InstanceId"] !== undefined) {
        contents.InstanceId = output["InstanceId"];
    }
    if (output["HealthStatus"] !== undefined) {
        contents.HealthStatus = output["HealthStatus"];
    }
    if (output["Color"] !== undefined) {
        contents.Color = output["Color"];
    }
    if (output.Causes === "") {
        contents.Causes = [];
    }
    if (output["Causes"] !== undefined && output["Causes"]["member"] !== undefined) {
        contents.Causes = deserializeAws_queryCauses(smithy_client_1.getArrayIfSingleItem(output["Causes"]["member"]), context);
    }
    if (output["LaunchedAt"] !== undefined) {
        contents.LaunchedAt = new Date(output["LaunchedAt"]);
    }
    if (output["ApplicationMetrics"] !== undefined) {
        contents.ApplicationMetrics = deserializeAws_queryApplicationMetrics(output["ApplicationMetrics"], context);
    }
    if (output["System"] !== undefined) {
        contents.System = deserializeAws_querySystemStatus(output["System"], context);
    }
    if (output["Deployment"] !== undefined) {
        contents.Deployment = deserializeAws_queryDeployment(output["Deployment"], context);
    }
    if (output["AvailabilityZone"] !== undefined) {
        contents.AvailabilityZone = output["AvailabilityZone"];
    }
    if (output["InstanceType"] !== undefined) {
        contents.InstanceType = output["InstanceType"];
    }
    return contents;
};
const deserializeAws_querySolutionStackDescription = (output, context) => {
    let contents = {
        SolutionStackName: undefined,
        PermittedFileTypes: undefined,
    };
    if (output["SolutionStackName"] !== undefined) {
        contents.SolutionStackName = output["SolutionStackName"];
    }
    if (output.PermittedFileTypes === "") {
        contents.PermittedFileTypes = [];
    }
    if (output["PermittedFileTypes"] !== undefined && output["PermittedFileTypes"]["member"] !== undefined) {
        contents.PermittedFileTypes = deserializeAws_querySolutionStackFileTypeList(smithy_client_1.getArrayIfSingleItem(output["PermittedFileTypes"]["member"]), context);
    }
    return contents;
};
const deserializeAws_querySolutionStackFileTypeList = (output, context) => {
    return (output || [])
        .filter((e) => e != null)
        .map((entry) => {
        if (entry === null) {
            return null;
        }
        return entry;
    });
};
const deserializeAws_querySourceBuildInformation = (output, context) => {
    let contents = {
        SourceType: undefined,
        SourceRepository: undefined,
        SourceLocation: undefined,
    };
    if (output["SourceType"] !== undefined) {
        contents.SourceType = output["SourceType"];
    }
    if (output["SourceRepository"] !== undefined) {
        contents.SourceRepository = output["SourceRepository"];
    }
    if (output["SourceLocation"] !== undefined) {
        contents.SourceLocation = output["SourceLocation"];
    }
    return contents;
};
const deserializeAws_querySourceBundleDeletionException = (output, context) => {
    let contents = {
        message: undefined,
    };
    if (output["message"] !== undefined) {
        contents.message = output["message"];
    }
    return contents;
};
const deserializeAws_queryStatusCodes = (output, context) => {
    let contents = {
        Status2xx: undefined,
        Status3xx: undefined,
        Status4xx: undefined,
        Status5xx: undefined,
    };
    if (output["Status2xx"] !== undefined) {
        contents.Status2xx = parseInt(output["Status2xx"]);
    }
    if (output["Status3xx"] !== undefined) {
        contents.Status3xx = parseInt(output["Status3xx"]);
    }
    if (output["Status4xx"] !== undefined) {
        contents.Status4xx = parseInt(output["Status4xx"]);
    }
    if (output["Status5xx"] !== undefined) {
        contents.Status5xx = parseInt(output["Status5xx"]);
    }
    return contents;
};
const deserializeAws_querySupportedAddonList = (output, context) => {
    return (output || [])
        .filter((e) => e != null)
        .map((entry) => {
        if (entry === null) {
            return null;
        }
        return entry;
    });
};
const deserializeAws_querySupportedTierList = (output, context) => {
    return (output || [])
        .filter((e) => e != null)
        .map((entry) => {
        if (entry === null) {
            return null;
        }
        return entry;
    });
};
const deserializeAws_querySystemStatus = (output, context) => {
    let contents = {
        CPUUtilization: undefined,
        LoadAverage: undefined,
    };
    if (output["CPUUtilization"] !== undefined) {
        contents.CPUUtilization = deserializeAws_queryCPUUtilization(output["CPUUtilization"], context);
    }
    if (output.LoadAverage === "") {
        contents.LoadAverage = [];
    }
    if (output["LoadAverage"] !== undefined && output["LoadAverage"]["member"] !== undefined) {
        contents.LoadAverage = deserializeAws_queryLoadAverage(smithy_client_1.getArrayIfSingleItem(output["LoadAverage"]["member"]), context);
    }
    return contents;
};
const deserializeAws_queryTag = (output, context) => {
    let contents = {
        Key: undefined,
        Value: undefined,
    };
    if (output["Key"] !== undefined) {
        contents.Key = output["Key"];
    }
    if (output["Value"] !== undefined) {
        contents.Value = output["Value"];
    }
    return contents;
};
const deserializeAws_queryTagList = (output, context) => {
    return (output || [])
        .filter((e) => e != null)
        .map((entry) => {
        if (entry === null) {
            return null;
        }
        return deserializeAws_queryTag(entry, context);
    });
};
const deserializeAws_queryTooManyApplicationsException = (output, context) => {
    let contents = {
        message: undefined,
    };
    if (output["message"] !== undefined) {
        contents.message = output["message"];
    }
    return contents;
};
const deserializeAws_queryTooManyApplicationVersionsException = (output, context) => {
    let contents = {
        message: undefined,
    };
    if (output["message"] !== undefined) {
        contents.message = output["message"];
    }
    return contents;
};
const deserializeAws_queryTooManyBucketsException = (output, context) => {
    let contents = {
        message: undefined,
    };
    if (output["message"] !== undefined) {
        contents.message = output["message"];
    }
    return contents;
};
const deserializeAws_queryTooManyConfigurationTemplatesException = (output, context) => {
    let contents = {
        message: undefined,
    };
    if (output["message"] !== undefined) {
        contents.message = output["message"];
    }
    return contents;
};
const deserializeAws_queryTooManyEnvironmentsException = (output, context) => {
    let contents = {
        message: undefined,
    };
    if (output["message"] !== undefined) {
        contents.message = output["message"];
    }
    return contents;
};
const deserializeAws_queryTooManyPlatformsException = (output, context) => {
    let contents = {
        message: undefined,
    };
    if (output["message"] !== undefined) {
        contents.message = output["message"];
    }
    return contents;
};
const deserializeAws_queryTooManyTagsException = (output, context) => {
    let contents = {
        message: undefined,
    };
    if (output["message"] !== undefined) {
        contents.message = output["message"];
    }
    return contents;
};
const deserializeAws_queryTrigger = (output, context) => {
    let contents = {
        Name: undefined,
    };
    if (output["Name"] !== undefined) {
        contents.Name = output["Name"];
    }
    return contents;
};
const deserializeAws_queryTriggerList = (output, context) => {
    return (output || [])
        .filter((e) => e != null)
        .map((entry) => {
        if (entry === null) {
            return null;
        }
        return deserializeAws_queryTrigger(entry, context);
    });
};
const deserializeAws_queryValidationMessage = (output, context) => {
    let contents = {
        Message: undefined,
        Severity: undefined,
        Namespace: undefined,
        OptionName: undefined,
    };
    if (output["Message"] !== undefined) {
        contents.Message = output["Message"];
    }
    if (output["Severity"] !== undefined) {
        contents.Severity = output["Severity"];
    }
    if (output["Namespace"] !== undefined) {
        contents.Namespace = output["Namespace"];
    }
    if (output["OptionName"] !== undefined) {
        contents.OptionName = output["OptionName"];
    }
    return contents;
};
const deserializeAws_queryValidationMessagesList = (output, context) => {
    return (output || [])
        .filter((e) => e != null)
        .map((entry) => {
        if (entry === null) {
            return null;
        }
        return deserializeAws_queryValidationMessage(entry, context);
    });
};
const deserializeAws_queryVersionLabelsList = (output, context) => {
    return (output || [])
        .filter((e) => e != null)
        .map((entry) => {
        if (entry === null) {
            return null;
        }
        return entry;
    });
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