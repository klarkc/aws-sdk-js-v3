"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.deserializeAws_json1_1CreateGrantCommand = exports.deserializeAws_json1_1CheckoutLicenseCommand = exports.deserializeAws_json1_1CheckoutBorrowLicenseCommand = exports.deserializeAws_json1_1CheckInLicenseCommand = exports.deserializeAws_json1_1AcceptGrantCommand = exports.serializeAws_json1_1UpdateServiceSettingsCommand = exports.serializeAws_json1_1UpdateLicenseSpecificationsForResourceCommand = exports.serializeAws_json1_1UpdateLicenseManagerReportGeneratorCommand = exports.serializeAws_json1_1UpdateLicenseConfigurationCommand = exports.serializeAws_json1_1UntagResourceCommand = exports.serializeAws_json1_1TagResourceCommand = exports.serializeAws_json1_1RejectGrantCommand = exports.serializeAws_json1_1ListUsageForLicenseConfigurationCommand = exports.serializeAws_json1_1ListTokensCommand = exports.serializeAws_json1_1ListTagsForResourceCommand = exports.serializeAws_json1_1ListResourceInventoryCommand = exports.serializeAws_json1_1ListReceivedLicensesCommand = exports.serializeAws_json1_1ListReceivedGrantsCommand = exports.serializeAws_json1_1ListLicenseVersionsCommand = exports.serializeAws_json1_1ListLicenseSpecificationsForResourceCommand = exports.serializeAws_json1_1ListLicensesCommand = exports.serializeAws_json1_1ListLicenseManagerReportGeneratorsCommand = exports.serializeAws_json1_1ListLicenseConfigurationsCommand = exports.serializeAws_json1_1ListFailuresForLicenseConfigurationOperationsCommand = exports.serializeAws_json1_1ListDistributedGrantsCommand = exports.serializeAws_json1_1ListAssociationsForLicenseConfigurationCommand = exports.serializeAws_json1_1GetServiceSettingsCommand = exports.serializeAws_json1_1GetLicenseUsageCommand = exports.serializeAws_json1_1GetLicenseManagerReportGeneratorCommand = exports.serializeAws_json1_1GetLicenseConfigurationCommand = exports.serializeAws_json1_1GetLicenseCommand = exports.serializeAws_json1_1GetGrantCommand = exports.serializeAws_json1_1GetAccessTokenCommand = exports.serializeAws_json1_1ExtendLicenseConsumptionCommand = exports.serializeAws_json1_1DeleteTokenCommand = exports.serializeAws_json1_1DeleteLicenseManagerReportGeneratorCommand = exports.serializeAws_json1_1DeleteLicenseConfigurationCommand = exports.serializeAws_json1_1DeleteLicenseCommand = exports.serializeAws_json1_1DeleteGrantCommand = exports.serializeAws_json1_1CreateTokenCommand = exports.serializeAws_json1_1CreateLicenseVersionCommand = exports.serializeAws_json1_1CreateLicenseManagerReportGeneratorCommand = exports.serializeAws_json1_1CreateLicenseConfigurationCommand = exports.serializeAws_json1_1CreateLicenseCommand = exports.serializeAws_json1_1CreateGrantVersionCommand = exports.serializeAws_json1_1CreateGrantCommand = exports.serializeAws_json1_1CheckoutLicenseCommand = exports.serializeAws_json1_1CheckoutBorrowLicenseCommand = exports.serializeAws_json1_1CheckInLicenseCommand = exports.serializeAws_json1_1AcceptGrantCommand = void 0;
exports.deserializeAws_json1_1UpdateServiceSettingsCommand = exports.deserializeAws_json1_1UpdateLicenseSpecificationsForResourceCommand = exports.deserializeAws_json1_1UpdateLicenseManagerReportGeneratorCommand = exports.deserializeAws_json1_1UpdateLicenseConfigurationCommand = exports.deserializeAws_json1_1UntagResourceCommand = exports.deserializeAws_json1_1TagResourceCommand = exports.deserializeAws_json1_1RejectGrantCommand = exports.deserializeAws_json1_1ListUsageForLicenseConfigurationCommand = exports.deserializeAws_json1_1ListTokensCommand = exports.deserializeAws_json1_1ListTagsForResourceCommand = exports.deserializeAws_json1_1ListResourceInventoryCommand = exports.deserializeAws_json1_1ListReceivedLicensesCommand = exports.deserializeAws_json1_1ListReceivedGrantsCommand = exports.deserializeAws_json1_1ListLicenseVersionsCommand = exports.deserializeAws_json1_1ListLicenseSpecificationsForResourceCommand = exports.deserializeAws_json1_1ListLicensesCommand = exports.deserializeAws_json1_1ListLicenseManagerReportGeneratorsCommand = exports.deserializeAws_json1_1ListLicenseConfigurationsCommand = exports.deserializeAws_json1_1ListFailuresForLicenseConfigurationOperationsCommand = exports.deserializeAws_json1_1ListDistributedGrantsCommand = exports.deserializeAws_json1_1ListAssociationsForLicenseConfigurationCommand = exports.deserializeAws_json1_1GetServiceSettingsCommand = exports.deserializeAws_json1_1GetLicenseUsageCommand = exports.deserializeAws_json1_1GetLicenseManagerReportGeneratorCommand = exports.deserializeAws_json1_1GetLicenseConfigurationCommand = exports.deserializeAws_json1_1GetLicenseCommand = exports.deserializeAws_json1_1GetGrantCommand = exports.deserializeAws_json1_1GetAccessTokenCommand = exports.deserializeAws_json1_1ExtendLicenseConsumptionCommand = exports.deserializeAws_json1_1DeleteTokenCommand = exports.deserializeAws_json1_1DeleteLicenseManagerReportGeneratorCommand = exports.deserializeAws_json1_1DeleteLicenseConfigurationCommand = exports.deserializeAws_json1_1DeleteLicenseCommand = exports.deserializeAws_json1_1DeleteGrantCommand = exports.deserializeAws_json1_1CreateTokenCommand = exports.deserializeAws_json1_1CreateLicenseVersionCommand = exports.deserializeAws_json1_1CreateLicenseManagerReportGeneratorCommand = exports.deserializeAws_json1_1CreateLicenseConfigurationCommand = exports.deserializeAws_json1_1CreateLicenseCommand = exports.deserializeAws_json1_1CreateGrantVersionCommand = void 0;
const protocol_http_1 = require("@aws-sdk/protocol-http");
const serializeAws_json1_1AcceptGrantCommand = async (input, context) => {
    const headers = {
        "content-type": "application/x-amz-json-1.1",
        "x-amz-target": "AWSLicenseManager.AcceptGrant",
    };
    let body;
    body = JSON.stringify(serializeAws_json1_1AcceptGrantRequest(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
exports.serializeAws_json1_1AcceptGrantCommand = serializeAws_json1_1AcceptGrantCommand;
const serializeAws_json1_1CheckInLicenseCommand = async (input, context) => {
    const headers = {
        "content-type": "application/x-amz-json-1.1",
        "x-amz-target": "AWSLicenseManager.CheckInLicense",
    };
    let body;
    body = JSON.stringify(serializeAws_json1_1CheckInLicenseRequest(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
exports.serializeAws_json1_1CheckInLicenseCommand = serializeAws_json1_1CheckInLicenseCommand;
const serializeAws_json1_1CheckoutBorrowLicenseCommand = async (input, context) => {
    const headers = {
        "content-type": "application/x-amz-json-1.1",
        "x-amz-target": "AWSLicenseManager.CheckoutBorrowLicense",
    };
    let body;
    body = JSON.stringify(serializeAws_json1_1CheckoutBorrowLicenseRequest(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
exports.serializeAws_json1_1CheckoutBorrowLicenseCommand = serializeAws_json1_1CheckoutBorrowLicenseCommand;
const serializeAws_json1_1CheckoutLicenseCommand = async (input, context) => {
    const headers = {
        "content-type": "application/x-amz-json-1.1",
        "x-amz-target": "AWSLicenseManager.CheckoutLicense",
    };
    let body;
    body = JSON.stringify(serializeAws_json1_1CheckoutLicenseRequest(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
exports.serializeAws_json1_1CheckoutLicenseCommand = serializeAws_json1_1CheckoutLicenseCommand;
const serializeAws_json1_1CreateGrantCommand = async (input, context) => {
    const headers = {
        "content-type": "application/x-amz-json-1.1",
        "x-amz-target": "AWSLicenseManager.CreateGrant",
    };
    let body;
    body = JSON.stringify(serializeAws_json1_1CreateGrantRequest(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
exports.serializeAws_json1_1CreateGrantCommand = serializeAws_json1_1CreateGrantCommand;
const serializeAws_json1_1CreateGrantVersionCommand = async (input, context) => {
    const headers = {
        "content-type": "application/x-amz-json-1.1",
        "x-amz-target": "AWSLicenseManager.CreateGrantVersion",
    };
    let body;
    body = JSON.stringify(serializeAws_json1_1CreateGrantVersionRequest(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
exports.serializeAws_json1_1CreateGrantVersionCommand = serializeAws_json1_1CreateGrantVersionCommand;
const serializeAws_json1_1CreateLicenseCommand = async (input, context) => {
    const headers = {
        "content-type": "application/x-amz-json-1.1",
        "x-amz-target": "AWSLicenseManager.CreateLicense",
    };
    let body;
    body = JSON.stringify(serializeAws_json1_1CreateLicenseRequest(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
exports.serializeAws_json1_1CreateLicenseCommand = serializeAws_json1_1CreateLicenseCommand;
const serializeAws_json1_1CreateLicenseConfigurationCommand = async (input, context) => {
    const headers = {
        "content-type": "application/x-amz-json-1.1",
        "x-amz-target": "AWSLicenseManager.CreateLicenseConfiguration",
    };
    let body;
    body = JSON.stringify(serializeAws_json1_1CreateLicenseConfigurationRequest(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
exports.serializeAws_json1_1CreateLicenseConfigurationCommand = serializeAws_json1_1CreateLicenseConfigurationCommand;
const serializeAws_json1_1CreateLicenseManagerReportGeneratorCommand = async (input, context) => {
    const headers = {
        "content-type": "application/x-amz-json-1.1",
        "x-amz-target": "AWSLicenseManager.CreateLicenseManagerReportGenerator",
    };
    let body;
    body = JSON.stringify(serializeAws_json1_1CreateLicenseManagerReportGeneratorRequest(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
exports.serializeAws_json1_1CreateLicenseManagerReportGeneratorCommand = serializeAws_json1_1CreateLicenseManagerReportGeneratorCommand;
const serializeAws_json1_1CreateLicenseVersionCommand = async (input, context) => {
    const headers = {
        "content-type": "application/x-amz-json-1.1",
        "x-amz-target": "AWSLicenseManager.CreateLicenseVersion",
    };
    let body;
    body = JSON.stringify(serializeAws_json1_1CreateLicenseVersionRequest(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
exports.serializeAws_json1_1CreateLicenseVersionCommand = serializeAws_json1_1CreateLicenseVersionCommand;
const serializeAws_json1_1CreateTokenCommand = async (input, context) => {
    const headers = {
        "content-type": "application/x-amz-json-1.1",
        "x-amz-target": "AWSLicenseManager.CreateToken",
    };
    let body;
    body = JSON.stringify(serializeAws_json1_1CreateTokenRequest(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
exports.serializeAws_json1_1CreateTokenCommand = serializeAws_json1_1CreateTokenCommand;
const serializeAws_json1_1DeleteGrantCommand = async (input, context) => {
    const headers = {
        "content-type": "application/x-amz-json-1.1",
        "x-amz-target": "AWSLicenseManager.DeleteGrant",
    };
    let body;
    body = JSON.stringify(serializeAws_json1_1DeleteGrantRequest(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
exports.serializeAws_json1_1DeleteGrantCommand = serializeAws_json1_1DeleteGrantCommand;
const serializeAws_json1_1DeleteLicenseCommand = async (input, context) => {
    const headers = {
        "content-type": "application/x-amz-json-1.1",
        "x-amz-target": "AWSLicenseManager.DeleteLicense",
    };
    let body;
    body = JSON.stringify(serializeAws_json1_1DeleteLicenseRequest(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
exports.serializeAws_json1_1DeleteLicenseCommand = serializeAws_json1_1DeleteLicenseCommand;
const serializeAws_json1_1DeleteLicenseConfigurationCommand = async (input, context) => {
    const headers = {
        "content-type": "application/x-amz-json-1.1",
        "x-amz-target": "AWSLicenseManager.DeleteLicenseConfiguration",
    };
    let body;
    body = JSON.stringify(serializeAws_json1_1DeleteLicenseConfigurationRequest(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
exports.serializeAws_json1_1DeleteLicenseConfigurationCommand = serializeAws_json1_1DeleteLicenseConfigurationCommand;
const serializeAws_json1_1DeleteLicenseManagerReportGeneratorCommand = async (input, context) => {
    const headers = {
        "content-type": "application/x-amz-json-1.1",
        "x-amz-target": "AWSLicenseManager.DeleteLicenseManagerReportGenerator",
    };
    let body;
    body = JSON.stringify(serializeAws_json1_1DeleteLicenseManagerReportGeneratorRequest(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
exports.serializeAws_json1_1DeleteLicenseManagerReportGeneratorCommand = serializeAws_json1_1DeleteLicenseManagerReportGeneratorCommand;
const serializeAws_json1_1DeleteTokenCommand = async (input, context) => {
    const headers = {
        "content-type": "application/x-amz-json-1.1",
        "x-amz-target": "AWSLicenseManager.DeleteToken",
    };
    let body;
    body = JSON.stringify(serializeAws_json1_1DeleteTokenRequest(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
exports.serializeAws_json1_1DeleteTokenCommand = serializeAws_json1_1DeleteTokenCommand;
const serializeAws_json1_1ExtendLicenseConsumptionCommand = async (input, context) => {
    const headers = {
        "content-type": "application/x-amz-json-1.1",
        "x-amz-target": "AWSLicenseManager.ExtendLicenseConsumption",
    };
    let body;
    body = JSON.stringify(serializeAws_json1_1ExtendLicenseConsumptionRequest(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
exports.serializeAws_json1_1ExtendLicenseConsumptionCommand = serializeAws_json1_1ExtendLicenseConsumptionCommand;
const serializeAws_json1_1GetAccessTokenCommand = async (input, context) => {
    const headers = {
        "content-type": "application/x-amz-json-1.1",
        "x-amz-target": "AWSLicenseManager.GetAccessToken",
    };
    let body;
    body = JSON.stringify(serializeAws_json1_1GetAccessTokenRequest(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
exports.serializeAws_json1_1GetAccessTokenCommand = serializeAws_json1_1GetAccessTokenCommand;
const serializeAws_json1_1GetGrantCommand = async (input, context) => {
    const headers = {
        "content-type": "application/x-amz-json-1.1",
        "x-amz-target": "AWSLicenseManager.GetGrant",
    };
    let body;
    body = JSON.stringify(serializeAws_json1_1GetGrantRequest(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
exports.serializeAws_json1_1GetGrantCommand = serializeAws_json1_1GetGrantCommand;
const serializeAws_json1_1GetLicenseCommand = async (input, context) => {
    const headers = {
        "content-type": "application/x-amz-json-1.1",
        "x-amz-target": "AWSLicenseManager.GetLicense",
    };
    let body;
    body = JSON.stringify(serializeAws_json1_1GetLicenseRequest(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
exports.serializeAws_json1_1GetLicenseCommand = serializeAws_json1_1GetLicenseCommand;
const serializeAws_json1_1GetLicenseConfigurationCommand = async (input, context) => {
    const headers = {
        "content-type": "application/x-amz-json-1.1",
        "x-amz-target": "AWSLicenseManager.GetLicenseConfiguration",
    };
    let body;
    body = JSON.stringify(serializeAws_json1_1GetLicenseConfigurationRequest(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
exports.serializeAws_json1_1GetLicenseConfigurationCommand = serializeAws_json1_1GetLicenseConfigurationCommand;
const serializeAws_json1_1GetLicenseManagerReportGeneratorCommand = async (input, context) => {
    const headers = {
        "content-type": "application/x-amz-json-1.1",
        "x-amz-target": "AWSLicenseManager.GetLicenseManagerReportGenerator",
    };
    let body;
    body = JSON.stringify(serializeAws_json1_1GetLicenseManagerReportGeneratorRequest(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
exports.serializeAws_json1_1GetLicenseManagerReportGeneratorCommand = serializeAws_json1_1GetLicenseManagerReportGeneratorCommand;
const serializeAws_json1_1GetLicenseUsageCommand = async (input, context) => {
    const headers = {
        "content-type": "application/x-amz-json-1.1",
        "x-amz-target": "AWSLicenseManager.GetLicenseUsage",
    };
    let body;
    body = JSON.stringify(serializeAws_json1_1GetLicenseUsageRequest(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
exports.serializeAws_json1_1GetLicenseUsageCommand = serializeAws_json1_1GetLicenseUsageCommand;
const serializeAws_json1_1GetServiceSettingsCommand = async (input, context) => {
    const headers = {
        "content-type": "application/x-amz-json-1.1",
        "x-amz-target": "AWSLicenseManager.GetServiceSettings",
    };
    let body;
    body = JSON.stringify(serializeAws_json1_1GetServiceSettingsRequest(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
exports.serializeAws_json1_1GetServiceSettingsCommand = serializeAws_json1_1GetServiceSettingsCommand;
const serializeAws_json1_1ListAssociationsForLicenseConfigurationCommand = async (input, context) => {
    const headers = {
        "content-type": "application/x-amz-json-1.1",
        "x-amz-target": "AWSLicenseManager.ListAssociationsForLicenseConfiguration",
    };
    let body;
    body = JSON.stringify(serializeAws_json1_1ListAssociationsForLicenseConfigurationRequest(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
exports.serializeAws_json1_1ListAssociationsForLicenseConfigurationCommand = serializeAws_json1_1ListAssociationsForLicenseConfigurationCommand;
const serializeAws_json1_1ListDistributedGrantsCommand = async (input, context) => {
    const headers = {
        "content-type": "application/x-amz-json-1.1",
        "x-amz-target": "AWSLicenseManager.ListDistributedGrants",
    };
    let body;
    body = JSON.stringify(serializeAws_json1_1ListDistributedGrantsRequest(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
exports.serializeAws_json1_1ListDistributedGrantsCommand = serializeAws_json1_1ListDistributedGrantsCommand;
const serializeAws_json1_1ListFailuresForLicenseConfigurationOperationsCommand = async (input, context) => {
    const headers = {
        "content-type": "application/x-amz-json-1.1",
        "x-amz-target": "AWSLicenseManager.ListFailuresForLicenseConfigurationOperations",
    };
    let body;
    body = JSON.stringify(serializeAws_json1_1ListFailuresForLicenseConfigurationOperationsRequest(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
exports.serializeAws_json1_1ListFailuresForLicenseConfigurationOperationsCommand = serializeAws_json1_1ListFailuresForLicenseConfigurationOperationsCommand;
const serializeAws_json1_1ListLicenseConfigurationsCommand = async (input, context) => {
    const headers = {
        "content-type": "application/x-amz-json-1.1",
        "x-amz-target": "AWSLicenseManager.ListLicenseConfigurations",
    };
    let body;
    body = JSON.stringify(serializeAws_json1_1ListLicenseConfigurationsRequest(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
exports.serializeAws_json1_1ListLicenseConfigurationsCommand = serializeAws_json1_1ListLicenseConfigurationsCommand;
const serializeAws_json1_1ListLicenseManagerReportGeneratorsCommand = async (input, context) => {
    const headers = {
        "content-type": "application/x-amz-json-1.1",
        "x-amz-target": "AWSLicenseManager.ListLicenseManagerReportGenerators",
    };
    let body;
    body = JSON.stringify(serializeAws_json1_1ListLicenseManagerReportGeneratorsRequest(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
exports.serializeAws_json1_1ListLicenseManagerReportGeneratorsCommand = serializeAws_json1_1ListLicenseManagerReportGeneratorsCommand;
const serializeAws_json1_1ListLicensesCommand = async (input, context) => {
    const headers = {
        "content-type": "application/x-amz-json-1.1",
        "x-amz-target": "AWSLicenseManager.ListLicenses",
    };
    let body;
    body = JSON.stringify(serializeAws_json1_1ListLicensesRequest(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
exports.serializeAws_json1_1ListLicensesCommand = serializeAws_json1_1ListLicensesCommand;
const serializeAws_json1_1ListLicenseSpecificationsForResourceCommand = async (input, context) => {
    const headers = {
        "content-type": "application/x-amz-json-1.1",
        "x-amz-target": "AWSLicenseManager.ListLicenseSpecificationsForResource",
    };
    let body;
    body = JSON.stringify(serializeAws_json1_1ListLicenseSpecificationsForResourceRequest(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
exports.serializeAws_json1_1ListLicenseSpecificationsForResourceCommand = serializeAws_json1_1ListLicenseSpecificationsForResourceCommand;
const serializeAws_json1_1ListLicenseVersionsCommand = async (input, context) => {
    const headers = {
        "content-type": "application/x-amz-json-1.1",
        "x-amz-target": "AWSLicenseManager.ListLicenseVersions",
    };
    let body;
    body = JSON.stringify(serializeAws_json1_1ListLicenseVersionsRequest(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
exports.serializeAws_json1_1ListLicenseVersionsCommand = serializeAws_json1_1ListLicenseVersionsCommand;
const serializeAws_json1_1ListReceivedGrantsCommand = async (input, context) => {
    const headers = {
        "content-type": "application/x-amz-json-1.1",
        "x-amz-target": "AWSLicenseManager.ListReceivedGrants",
    };
    let body;
    body = JSON.stringify(serializeAws_json1_1ListReceivedGrantsRequest(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
exports.serializeAws_json1_1ListReceivedGrantsCommand = serializeAws_json1_1ListReceivedGrantsCommand;
const serializeAws_json1_1ListReceivedLicensesCommand = async (input, context) => {
    const headers = {
        "content-type": "application/x-amz-json-1.1",
        "x-amz-target": "AWSLicenseManager.ListReceivedLicenses",
    };
    let body;
    body = JSON.stringify(serializeAws_json1_1ListReceivedLicensesRequest(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
exports.serializeAws_json1_1ListReceivedLicensesCommand = serializeAws_json1_1ListReceivedLicensesCommand;
const serializeAws_json1_1ListResourceInventoryCommand = async (input, context) => {
    const headers = {
        "content-type": "application/x-amz-json-1.1",
        "x-amz-target": "AWSLicenseManager.ListResourceInventory",
    };
    let body;
    body = JSON.stringify(serializeAws_json1_1ListResourceInventoryRequest(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
exports.serializeAws_json1_1ListResourceInventoryCommand = serializeAws_json1_1ListResourceInventoryCommand;
const serializeAws_json1_1ListTagsForResourceCommand = async (input, context) => {
    const headers = {
        "content-type": "application/x-amz-json-1.1",
        "x-amz-target": "AWSLicenseManager.ListTagsForResource",
    };
    let body;
    body = JSON.stringify(serializeAws_json1_1ListTagsForResourceRequest(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
exports.serializeAws_json1_1ListTagsForResourceCommand = serializeAws_json1_1ListTagsForResourceCommand;
const serializeAws_json1_1ListTokensCommand = async (input, context) => {
    const headers = {
        "content-type": "application/x-amz-json-1.1",
        "x-amz-target": "AWSLicenseManager.ListTokens",
    };
    let body;
    body = JSON.stringify(serializeAws_json1_1ListTokensRequest(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
exports.serializeAws_json1_1ListTokensCommand = serializeAws_json1_1ListTokensCommand;
const serializeAws_json1_1ListUsageForLicenseConfigurationCommand = async (input, context) => {
    const headers = {
        "content-type": "application/x-amz-json-1.1",
        "x-amz-target": "AWSLicenseManager.ListUsageForLicenseConfiguration",
    };
    let body;
    body = JSON.stringify(serializeAws_json1_1ListUsageForLicenseConfigurationRequest(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
exports.serializeAws_json1_1ListUsageForLicenseConfigurationCommand = serializeAws_json1_1ListUsageForLicenseConfigurationCommand;
const serializeAws_json1_1RejectGrantCommand = async (input, context) => {
    const headers = {
        "content-type": "application/x-amz-json-1.1",
        "x-amz-target": "AWSLicenseManager.RejectGrant",
    };
    let body;
    body = JSON.stringify(serializeAws_json1_1RejectGrantRequest(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
exports.serializeAws_json1_1RejectGrantCommand = serializeAws_json1_1RejectGrantCommand;
const serializeAws_json1_1TagResourceCommand = async (input, context) => {
    const headers = {
        "content-type": "application/x-amz-json-1.1",
        "x-amz-target": "AWSLicenseManager.TagResource",
    };
    let body;
    body = JSON.stringify(serializeAws_json1_1TagResourceRequest(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
exports.serializeAws_json1_1TagResourceCommand = serializeAws_json1_1TagResourceCommand;
const serializeAws_json1_1UntagResourceCommand = async (input, context) => {
    const headers = {
        "content-type": "application/x-amz-json-1.1",
        "x-amz-target": "AWSLicenseManager.UntagResource",
    };
    let body;
    body = JSON.stringify(serializeAws_json1_1UntagResourceRequest(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
exports.serializeAws_json1_1UntagResourceCommand = serializeAws_json1_1UntagResourceCommand;
const serializeAws_json1_1UpdateLicenseConfigurationCommand = async (input, context) => {
    const headers = {
        "content-type": "application/x-amz-json-1.1",
        "x-amz-target": "AWSLicenseManager.UpdateLicenseConfiguration",
    };
    let body;
    body = JSON.stringify(serializeAws_json1_1UpdateLicenseConfigurationRequest(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
exports.serializeAws_json1_1UpdateLicenseConfigurationCommand = serializeAws_json1_1UpdateLicenseConfigurationCommand;
const serializeAws_json1_1UpdateLicenseManagerReportGeneratorCommand = async (input, context) => {
    const headers = {
        "content-type": "application/x-amz-json-1.1",
        "x-amz-target": "AWSLicenseManager.UpdateLicenseManagerReportGenerator",
    };
    let body;
    body = JSON.stringify(serializeAws_json1_1UpdateLicenseManagerReportGeneratorRequest(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
exports.serializeAws_json1_1UpdateLicenseManagerReportGeneratorCommand = serializeAws_json1_1UpdateLicenseManagerReportGeneratorCommand;
const serializeAws_json1_1UpdateLicenseSpecificationsForResourceCommand = async (input, context) => {
    const headers = {
        "content-type": "application/x-amz-json-1.1",
        "x-amz-target": "AWSLicenseManager.UpdateLicenseSpecificationsForResource",
    };
    let body;
    body = JSON.stringify(serializeAws_json1_1UpdateLicenseSpecificationsForResourceRequest(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
exports.serializeAws_json1_1UpdateLicenseSpecificationsForResourceCommand = serializeAws_json1_1UpdateLicenseSpecificationsForResourceCommand;
const serializeAws_json1_1UpdateServiceSettingsCommand = async (input, context) => {
    const headers = {
        "content-type": "application/x-amz-json-1.1",
        "x-amz-target": "AWSLicenseManager.UpdateServiceSettings",
    };
    let body;
    body = JSON.stringify(serializeAws_json1_1UpdateServiceSettingsRequest(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
exports.serializeAws_json1_1UpdateServiceSettingsCommand = serializeAws_json1_1UpdateServiceSettingsCommand;
const deserializeAws_json1_1AcceptGrantCommand = async (output, context) => {
    if (output.statusCode >= 300) {
        return deserializeAws_json1_1AcceptGrantCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1AcceptGrantResponse(data, context);
    const response = {
        $metadata: deserializeMetadata(output),
        ...contents,
    };
    return Promise.resolve(response);
};
exports.deserializeAws_json1_1AcceptGrantCommand = deserializeAws_json1_1AcceptGrantCommand;
const deserializeAws_json1_1AcceptGrantCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "AccessDeniedException":
        case "com.amazonaws.licensemanager#AccessDeniedException":
            response = {
                ...(await deserializeAws_json1_1AccessDeniedExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "AuthorizationException":
        case "com.amazonaws.licensemanager#AuthorizationException":
            response = {
                ...(await deserializeAws_json1_1AuthorizationExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InvalidParameterValueException":
        case "com.amazonaws.licensemanager#InvalidParameterValueException":
            response = {
                ...(await deserializeAws_json1_1InvalidParameterValueExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "RateLimitExceededException":
        case "com.amazonaws.licensemanager#RateLimitExceededException":
            response = {
                ...(await deserializeAws_json1_1RateLimitExceededExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ResourceLimitExceededException":
        case "com.amazonaws.licensemanager#ResourceLimitExceededException":
            response = {
                ...(await deserializeAws_json1_1ResourceLimitExceededExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ServerInternalException":
        case "com.amazonaws.licensemanager#ServerInternalException":
            response = {
                ...(await deserializeAws_json1_1ServerInternalExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ValidationException":
        case "com.amazonaws.licensemanager#ValidationException":
            response = {
                ...(await deserializeAws_json1_1ValidationExceptionResponse(parsedOutput, context)),
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
const deserializeAws_json1_1CheckInLicenseCommand = async (output, context) => {
    if (output.statusCode >= 300) {
        return deserializeAws_json1_1CheckInLicenseCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1CheckInLicenseResponse(data, context);
    const response = {
        $metadata: deserializeMetadata(output),
        ...contents,
    };
    return Promise.resolve(response);
};
exports.deserializeAws_json1_1CheckInLicenseCommand = deserializeAws_json1_1CheckInLicenseCommand;
const deserializeAws_json1_1CheckInLicenseCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "AccessDeniedException":
        case "com.amazonaws.licensemanager#AccessDeniedException":
            response = {
                ...(await deserializeAws_json1_1AccessDeniedExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "AuthorizationException":
        case "com.amazonaws.licensemanager#AuthorizationException":
            response = {
                ...(await deserializeAws_json1_1AuthorizationExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ConflictException":
        case "com.amazonaws.licensemanager#ConflictException":
            response = {
                ...(await deserializeAws_json1_1ConflictExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "RateLimitExceededException":
        case "com.amazonaws.licensemanager#RateLimitExceededException":
            response = {
                ...(await deserializeAws_json1_1RateLimitExceededExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ResourceNotFoundException":
        case "com.amazonaws.licensemanager#ResourceNotFoundException":
            response = {
                ...(await deserializeAws_json1_1ResourceNotFoundExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ServerInternalException":
        case "com.amazonaws.licensemanager#ServerInternalException":
            response = {
                ...(await deserializeAws_json1_1ServerInternalExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ValidationException":
        case "com.amazonaws.licensemanager#ValidationException":
            response = {
                ...(await deserializeAws_json1_1ValidationExceptionResponse(parsedOutput, context)),
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
const deserializeAws_json1_1CheckoutBorrowLicenseCommand = async (output, context) => {
    if (output.statusCode >= 300) {
        return deserializeAws_json1_1CheckoutBorrowLicenseCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1CheckoutBorrowLicenseResponse(data, context);
    const response = {
        $metadata: deserializeMetadata(output),
        ...contents,
    };
    return Promise.resolve(response);
};
exports.deserializeAws_json1_1CheckoutBorrowLicenseCommand = deserializeAws_json1_1CheckoutBorrowLicenseCommand;
const deserializeAws_json1_1CheckoutBorrowLicenseCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "AccessDeniedException":
        case "com.amazonaws.licensemanager#AccessDeniedException":
            response = {
                ...(await deserializeAws_json1_1AccessDeniedExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "AuthorizationException":
        case "com.amazonaws.licensemanager#AuthorizationException":
            response = {
                ...(await deserializeAws_json1_1AuthorizationExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "EntitlementNotAllowedException":
        case "com.amazonaws.licensemanager#EntitlementNotAllowedException":
            response = {
                ...(await deserializeAws_json1_1EntitlementNotAllowedExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "NoEntitlementsAllowedException":
        case "com.amazonaws.licensemanager#NoEntitlementsAllowedException":
            response = {
                ...(await deserializeAws_json1_1NoEntitlementsAllowedExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "RateLimitExceededException":
        case "com.amazonaws.licensemanager#RateLimitExceededException":
            response = {
                ...(await deserializeAws_json1_1RateLimitExceededExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "RedirectException":
        case "com.amazonaws.licensemanager#RedirectException":
            response = {
                ...(await deserializeAws_json1_1RedirectExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ResourceNotFoundException":
        case "com.amazonaws.licensemanager#ResourceNotFoundException":
            response = {
                ...(await deserializeAws_json1_1ResourceNotFoundExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ServerInternalException":
        case "com.amazonaws.licensemanager#ServerInternalException":
            response = {
                ...(await deserializeAws_json1_1ServerInternalExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "UnsupportedDigitalSignatureMethodException":
        case "com.amazonaws.licensemanager#UnsupportedDigitalSignatureMethodException":
            response = {
                ...(await deserializeAws_json1_1UnsupportedDigitalSignatureMethodExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ValidationException":
        case "com.amazonaws.licensemanager#ValidationException":
            response = {
                ...(await deserializeAws_json1_1ValidationExceptionResponse(parsedOutput, context)),
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
const deserializeAws_json1_1CheckoutLicenseCommand = async (output, context) => {
    if (output.statusCode >= 300) {
        return deserializeAws_json1_1CheckoutLicenseCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1CheckoutLicenseResponse(data, context);
    const response = {
        $metadata: deserializeMetadata(output),
        ...contents,
    };
    return Promise.resolve(response);
};
exports.deserializeAws_json1_1CheckoutLicenseCommand = deserializeAws_json1_1CheckoutLicenseCommand;
const deserializeAws_json1_1CheckoutLicenseCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "AccessDeniedException":
        case "com.amazonaws.licensemanager#AccessDeniedException":
            response = {
                ...(await deserializeAws_json1_1AccessDeniedExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "AuthorizationException":
        case "com.amazonaws.licensemanager#AuthorizationException":
            response = {
                ...(await deserializeAws_json1_1AuthorizationExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "NoEntitlementsAllowedException":
        case "com.amazonaws.licensemanager#NoEntitlementsAllowedException":
            response = {
                ...(await deserializeAws_json1_1NoEntitlementsAllowedExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "RateLimitExceededException":
        case "com.amazonaws.licensemanager#RateLimitExceededException":
            response = {
                ...(await deserializeAws_json1_1RateLimitExceededExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "RedirectException":
        case "com.amazonaws.licensemanager#RedirectException":
            response = {
                ...(await deserializeAws_json1_1RedirectExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ResourceNotFoundException":
        case "com.amazonaws.licensemanager#ResourceNotFoundException":
            response = {
                ...(await deserializeAws_json1_1ResourceNotFoundExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ServerInternalException":
        case "com.amazonaws.licensemanager#ServerInternalException":
            response = {
                ...(await deserializeAws_json1_1ServerInternalExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "UnsupportedDigitalSignatureMethodException":
        case "com.amazonaws.licensemanager#UnsupportedDigitalSignatureMethodException":
            response = {
                ...(await deserializeAws_json1_1UnsupportedDigitalSignatureMethodExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ValidationException":
        case "com.amazonaws.licensemanager#ValidationException":
            response = {
                ...(await deserializeAws_json1_1ValidationExceptionResponse(parsedOutput, context)),
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
const deserializeAws_json1_1CreateGrantCommand = async (output, context) => {
    if (output.statusCode >= 300) {
        return deserializeAws_json1_1CreateGrantCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1CreateGrantResponse(data, context);
    const response = {
        $metadata: deserializeMetadata(output),
        ...contents,
    };
    return Promise.resolve(response);
};
exports.deserializeAws_json1_1CreateGrantCommand = deserializeAws_json1_1CreateGrantCommand;
const deserializeAws_json1_1CreateGrantCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "AccessDeniedException":
        case "com.amazonaws.licensemanager#AccessDeniedException":
            response = {
                ...(await deserializeAws_json1_1AccessDeniedExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "AuthorizationException":
        case "com.amazonaws.licensemanager#AuthorizationException":
            response = {
                ...(await deserializeAws_json1_1AuthorizationExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InvalidParameterValueException":
        case "com.amazonaws.licensemanager#InvalidParameterValueException":
            response = {
                ...(await deserializeAws_json1_1InvalidParameterValueExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "RateLimitExceededException":
        case "com.amazonaws.licensemanager#RateLimitExceededException":
            response = {
                ...(await deserializeAws_json1_1RateLimitExceededExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ResourceLimitExceededException":
        case "com.amazonaws.licensemanager#ResourceLimitExceededException":
            response = {
                ...(await deserializeAws_json1_1ResourceLimitExceededExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ServerInternalException":
        case "com.amazonaws.licensemanager#ServerInternalException":
            response = {
                ...(await deserializeAws_json1_1ServerInternalExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ValidationException":
        case "com.amazonaws.licensemanager#ValidationException":
            response = {
                ...(await deserializeAws_json1_1ValidationExceptionResponse(parsedOutput, context)),
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
const deserializeAws_json1_1CreateGrantVersionCommand = async (output, context) => {
    if (output.statusCode >= 300) {
        return deserializeAws_json1_1CreateGrantVersionCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1CreateGrantVersionResponse(data, context);
    const response = {
        $metadata: deserializeMetadata(output),
        ...contents,
    };
    return Promise.resolve(response);
};
exports.deserializeAws_json1_1CreateGrantVersionCommand = deserializeAws_json1_1CreateGrantVersionCommand;
const deserializeAws_json1_1CreateGrantVersionCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "AccessDeniedException":
        case "com.amazonaws.licensemanager#AccessDeniedException":
            response = {
                ...(await deserializeAws_json1_1AccessDeniedExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "AuthorizationException":
        case "com.amazonaws.licensemanager#AuthorizationException":
            response = {
                ...(await deserializeAws_json1_1AuthorizationExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InvalidParameterValueException":
        case "com.amazonaws.licensemanager#InvalidParameterValueException":
            response = {
                ...(await deserializeAws_json1_1InvalidParameterValueExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "RateLimitExceededException":
        case "com.amazonaws.licensemanager#RateLimitExceededException":
            response = {
                ...(await deserializeAws_json1_1RateLimitExceededExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ResourceLimitExceededException":
        case "com.amazonaws.licensemanager#ResourceLimitExceededException":
            response = {
                ...(await deserializeAws_json1_1ResourceLimitExceededExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ServerInternalException":
        case "com.amazonaws.licensemanager#ServerInternalException":
            response = {
                ...(await deserializeAws_json1_1ServerInternalExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ValidationException":
        case "com.amazonaws.licensemanager#ValidationException":
            response = {
                ...(await deserializeAws_json1_1ValidationExceptionResponse(parsedOutput, context)),
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
const deserializeAws_json1_1CreateLicenseCommand = async (output, context) => {
    if (output.statusCode >= 300) {
        return deserializeAws_json1_1CreateLicenseCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1CreateLicenseResponse(data, context);
    const response = {
        $metadata: deserializeMetadata(output),
        ...contents,
    };
    return Promise.resolve(response);
};
exports.deserializeAws_json1_1CreateLicenseCommand = deserializeAws_json1_1CreateLicenseCommand;
const deserializeAws_json1_1CreateLicenseCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "AccessDeniedException":
        case "com.amazonaws.licensemanager#AccessDeniedException":
            response = {
                ...(await deserializeAws_json1_1AccessDeniedExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "AuthorizationException":
        case "com.amazonaws.licensemanager#AuthorizationException":
            response = {
                ...(await deserializeAws_json1_1AuthorizationExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InvalidParameterValueException":
        case "com.amazonaws.licensemanager#InvalidParameterValueException":
            response = {
                ...(await deserializeAws_json1_1InvalidParameterValueExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "RateLimitExceededException":
        case "com.amazonaws.licensemanager#RateLimitExceededException":
            response = {
                ...(await deserializeAws_json1_1RateLimitExceededExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "RedirectException":
        case "com.amazonaws.licensemanager#RedirectException":
            response = {
                ...(await deserializeAws_json1_1RedirectExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ServerInternalException":
        case "com.amazonaws.licensemanager#ServerInternalException":
            response = {
                ...(await deserializeAws_json1_1ServerInternalExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ValidationException":
        case "com.amazonaws.licensemanager#ValidationException":
            response = {
                ...(await deserializeAws_json1_1ValidationExceptionResponse(parsedOutput, context)),
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
const deserializeAws_json1_1CreateLicenseConfigurationCommand = async (output, context) => {
    if (output.statusCode >= 300) {
        return deserializeAws_json1_1CreateLicenseConfigurationCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1CreateLicenseConfigurationResponse(data, context);
    const response = {
        $metadata: deserializeMetadata(output),
        ...contents,
    };
    return Promise.resolve(response);
};
exports.deserializeAws_json1_1CreateLicenseConfigurationCommand = deserializeAws_json1_1CreateLicenseConfigurationCommand;
const deserializeAws_json1_1CreateLicenseConfigurationCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "AccessDeniedException":
        case "com.amazonaws.licensemanager#AccessDeniedException":
            response = {
                ...(await deserializeAws_json1_1AccessDeniedExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "AuthorizationException":
        case "com.amazonaws.licensemanager#AuthorizationException":
            response = {
                ...(await deserializeAws_json1_1AuthorizationExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InvalidParameterValueException":
        case "com.amazonaws.licensemanager#InvalidParameterValueException":
            response = {
                ...(await deserializeAws_json1_1InvalidParameterValueExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "RateLimitExceededException":
        case "com.amazonaws.licensemanager#RateLimitExceededException":
            response = {
                ...(await deserializeAws_json1_1RateLimitExceededExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ResourceLimitExceededException":
        case "com.amazonaws.licensemanager#ResourceLimitExceededException":
            response = {
                ...(await deserializeAws_json1_1ResourceLimitExceededExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ServerInternalException":
        case "com.amazonaws.licensemanager#ServerInternalException":
            response = {
                ...(await deserializeAws_json1_1ServerInternalExceptionResponse(parsedOutput, context)),
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
const deserializeAws_json1_1CreateLicenseManagerReportGeneratorCommand = async (output, context) => {
    if (output.statusCode >= 300) {
        return deserializeAws_json1_1CreateLicenseManagerReportGeneratorCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1CreateLicenseManagerReportGeneratorResponse(data, context);
    const response = {
        $metadata: deserializeMetadata(output),
        ...contents,
    };
    return Promise.resolve(response);
};
exports.deserializeAws_json1_1CreateLicenseManagerReportGeneratorCommand = deserializeAws_json1_1CreateLicenseManagerReportGeneratorCommand;
const deserializeAws_json1_1CreateLicenseManagerReportGeneratorCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "AccessDeniedException":
        case "com.amazonaws.licensemanager#AccessDeniedException":
            response = {
                ...(await deserializeAws_json1_1AccessDeniedExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "AuthorizationException":
        case "com.amazonaws.licensemanager#AuthorizationException":
            response = {
                ...(await deserializeAws_json1_1AuthorizationExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InvalidParameterValueException":
        case "com.amazonaws.licensemanager#InvalidParameterValueException":
            response = {
                ...(await deserializeAws_json1_1InvalidParameterValueExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "RateLimitExceededException":
        case "com.amazonaws.licensemanager#RateLimitExceededException":
            response = {
                ...(await deserializeAws_json1_1RateLimitExceededExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ResourceLimitExceededException":
        case "com.amazonaws.licensemanager#ResourceLimitExceededException":
            response = {
                ...(await deserializeAws_json1_1ResourceLimitExceededExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ResourceNotFoundException":
        case "com.amazonaws.licensemanager#ResourceNotFoundException":
            response = {
                ...(await deserializeAws_json1_1ResourceNotFoundExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ServerInternalException":
        case "com.amazonaws.licensemanager#ServerInternalException":
            response = {
                ...(await deserializeAws_json1_1ServerInternalExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ValidationException":
        case "com.amazonaws.licensemanager#ValidationException":
            response = {
                ...(await deserializeAws_json1_1ValidationExceptionResponse(parsedOutput, context)),
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
const deserializeAws_json1_1CreateLicenseVersionCommand = async (output, context) => {
    if (output.statusCode >= 300) {
        return deserializeAws_json1_1CreateLicenseVersionCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1CreateLicenseVersionResponse(data, context);
    const response = {
        $metadata: deserializeMetadata(output),
        ...contents,
    };
    return Promise.resolve(response);
};
exports.deserializeAws_json1_1CreateLicenseVersionCommand = deserializeAws_json1_1CreateLicenseVersionCommand;
const deserializeAws_json1_1CreateLicenseVersionCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "AccessDeniedException":
        case "com.amazonaws.licensemanager#AccessDeniedException":
            response = {
                ...(await deserializeAws_json1_1AccessDeniedExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "AuthorizationException":
        case "com.amazonaws.licensemanager#AuthorizationException":
            response = {
                ...(await deserializeAws_json1_1AuthorizationExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ConflictException":
        case "com.amazonaws.licensemanager#ConflictException":
            response = {
                ...(await deserializeAws_json1_1ConflictExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "RateLimitExceededException":
        case "com.amazonaws.licensemanager#RateLimitExceededException":
            response = {
                ...(await deserializeAws_json1_1RateLimitExceededExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "RedirectException":
        case "com.amazonaws.licensemanager#RedirectException":
            response = {
                ...(await deserializeAws_json1_1RedirectExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ResourceNotFoundException":
        case "com.amazonaws.licensemanager#ResourceNotFoundException":
            response = {
                ...(await deserializeAws_json1_1ResourceNotFoundExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ServerInternalException":
        case "com.amazonaws.licensemanager#ServerInternalException":
            response = {
                ...(await deserializeAws_json1_1ServerInternalExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ValidationException":
        case "com.amazonaws.licensemanager#ValidationException":
            response = {
                ...(await deserializeAws_json1_1ValidationExceptionResponse(parsedOutput, context)),
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
const deserializeAws_json1_1CreateTokenCommand = async (output, context) => {
    if (output.statusCode >= 300) {
        return deserializeAws_json1_1CreateTokenCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1CreateTokenResponse(data, context);
    const response = {
        $metadata: deserializeMetadata(output),
        ...contents,
    };
    return Promise.resolve(response);
};
exports.deserializeAws_json1_1CreateTokenCommand = deserializeAws_json1_1CreateTokenCommand;
const deserializeAws_json1_1CreateTokenCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "AccessDeniedException":
        case "com.amazonaws.licensemanager#AccessDeniedException":
            response = {
                ...(await deserializeAws_json1_1AccessDeniedExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "AuthorizationException":
        case "com.amazonaws.licensemanager#AuthorizationException":
            response = {
                ...(await deserializeAws_json1_1AuthorizationExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "RateLimitExceededException":
        case "com.amazonaws.licensemanager#RateLimitExceededException":
            response = {
                ...(await deserializeAws_json1_1RateLimitExceededExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "RedirectException":
        case "com.amazonaws.licensemanager#RedirectException":
            response = {
                ...(await deserializeAws_json1_1RedirectExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ResourceLimitExceededException":
        case "com.amazonaws.licensemanager#ResourceLimitExceededException":
            response = {
                ...(await deserializeAws_json1_1ResourceLimitExceededExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ResourceNotFoundException":
        case "com.amazonaws.licensemanager#ResourceNotFoundException":
            response = {
                ...(await deserializeAws_json1_1ResourceNotFoundExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ServerInternalException":
        case "com.amazonaws.licensemanager#ServerInternalException":
            response = {
                ...(await deserializeAws_json1_1ServerInternalExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ValidationException":
        case "com.amazonaws.licensemanager#ValidationException":
            response = {
                ...(await deserializeAws_json1_1ValidationExceptionResponse(parsedOutput, context)),
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
const deserializeAws_json1_1DeleteGrantCommand = async (output, context) => {
    if (output.statusCode >= 300) {
        return deserializeAws_json1_1DeleteGrantCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1DeleteGrantResponse(data, context);
    const response = {
        $metadata: deserializeMetadata(output),
        ...contents,
    };
    return Promise.resolve(response);
};
exports.deserializeAws_json1_1DeleteGrantCommand = deserializeAws_json1_1DeleteGrantCommand;
const deserializeAws_json1_1DeleteGrantCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "AccessDeniedException":
        case "com.amazonaws.licensemanager#AccessDeniedException":
            response = {
                ...(await deserializeAws_json1_1AccessDeniedExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "AuthorizationException":
        case "com.amazonaws.licensemanager#AuthorizationException":
            response = {
                ...(await deserializeAws_json1_1AuthorizationExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InvalidParameterValueException":
        case "com.amazonaws.licensemanager#InvalidParameterValueException":
            response = {
                ...(await deserializeAws_json1_1InvalidParameterValueExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "RateLimitExceededException":
        case "com.amazonaws.licensemanager#RateLimitExceededException":
            response = {
                ...(await deserializeAws_json1_1RateLimitExceededExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ResourceLimitExceededException":
        case "com.amazonaws.licensemanager#ResourceLimitExceededException":
            response = {
                ...(await deserializeAws_json1_1ResourceLimitExceededExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ServerInternalException":
        case "com.amazonaws.licensemanager#ServerInternalException":
            response = {
                ...(await deserializeAws_json1_1ServerInternalExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ValidationException":
        case "com.amazonaws.licensemanager#ValidationException":
            response = {
                ...(await deserializeAws_json1_1ValidationExceptionResponse(parsedOutput, context)),
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
const deserializeAws_json1_1DeleteLicenseCommand = async (output, context) => {
    if (output.statusCode >= 300) {
        return deserializeAws_json1_1DeleteLicenseCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1DeleteLicenseResponse(data, context);
    const response = {
        $metadata: deserializeMetadata(output),
        ...contents,
    };
    return Promise.resolve(response);
};
exports.deserializeAws_json1_1DeleteLicenseCommand = deserializeAws_json1_1DeleteLicenseCommand;
const deserializeAws_json1_1DeleteLicenseCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "AccessDeniedException":
        case "com.amazonaws.licensemanager#AccessDeniedException":
            response = {
                ...(await deserializeAws_json1_1AccessDeniedExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "AuthorizationException":
        case "com.amazonaws.licensemanager#AuthorizationException":
            response = {
                ...(await deserializeAws_json1_1AuthorizationExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ConflictException":
        case "com.amazonaws.licensemanager#ConflictException":
            response = {
                ...(await deserializeAws_json1_1ConflictExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InvalidParameterValueException":
        case "com.amazonaws.licensemanager#InvalidParameterValueException":
            response = {
                ...(await deserializeAws_json1_1InvalidParameterValueExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "RateLimitExceededException":
        case "com.amazonaws.licensemanager#RateLimitExceededException":
            response = {
                ...(await deserializeAws_json1_1RateLimitExceededExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "RedirectException":
        case "com.amazonaws.licensemanager#RedirectException":
            response = {
                ...(await deserializeAws_json1_1RedirectExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ServerInternalException":
        case "com.amazonaws.licensemanager#ServerInternalException":
            response = {
                ...(await deserializeAws_json1_1ServerInternalExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ValidationException":
        case "com.amazonaws.licensemanager#ValidationException":
            response = {
                ...(await deserializeAws_json1_1ValidationExceptionResponse(parsedOutput, context)),
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
const deserializeAws_json1_1DeleteLicenseConfigurationCommand = async (output, context) => {
    if (output.statusCode >= 300) {
        return deserializeAws_json1_1DeleteLicenseConfigurationCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1DeleteLicenseConfigurationResponse(data, context);
    const response = {
        $metadata: deserializeMetadata(output),
        ...contents,
    };
    return Promise.resolve(response);
};
exports.deserializeAws_json1_1DeleteLicenseConfigurationCommand = deserializeAws_json1_1DeleteLicenseConfigurationCommand;
const deserializeAws_json1_1DeleteLicenseConfigurationCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "AccessDeniedException":
        case "com.amazonaws.licensemanager#AccessDeniedException":
            response = {
                ...(await deserializeAws_json1_1AccessDeniedExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "AuthorizationException":
        case "com.amazonaws.licensemanager#AuthorizationException":
            response = {
                ...(await deserializeAws_json1_1AuthorizationExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InvalidParameterValueException":
        case "com.amazonaws.licensemanager#InvalidParameterValueException":
            response = {
                ...(await deserializeAws_json1_1InvalidParameterValueExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "RateLimitExceededException":
        case "com.amazonaws.licensemanager#RateLimitExceededException":
            response = {
                ...(await deserializeAws_json1_1RateLimitExceededExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ServerInternalException":
        case "com.amazonaws.licensemanager#ServerInternalException":
            response = {
                ...(await deserializeAws_json1_1ServerInternalExceptionResponse(parsedOutput, context)),
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
const deserializeAws_json1_1DeleteLicenseManagerReportGeneratorCommand = async (output, context) => {
    if (output.statusCode >= 300) {
        return deserializeAws_json1_1DeleteLicenseManagerReportGeneratorCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1DeleteLicenseManagerReportGeneratorResponse(data, context);
    const response = {
        $metadata: deserializeMetadata(output),
        ...contents,
    };
    return Promise.resolve(response);
};
exports.deserializeAws_json1_1DeleteLicenseManagerReportGeneratorCommand = deserializeAws_json1_1DeleteLicenseManagerReportGeneratorCommand;
const deserializeAws_json1_1DeleteLicenseManagerReportGeneratorCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "AccessDeniedException":
        case "com.amazonaws.licensemanager#AccessDeniedException":
            response = {
                ...(await deserializeAws_json1_1AccessDeniedExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "AuthorizationException":
        case "com.amazonaws.licensemanager#AuthorizationException":
            response = {
                ...(await deserializeAws_json1_1AuthorizationExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InvalidParameterValueException":
        case "com.amazonaws.licensemanager#InvalidParameterValueException":
            response = {
                ...(await deserializeAws_json1_1InvalidParameterValueExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "RateLimitExceededException":
        case "com.amazonaws.licensemanager#RateLimitExceededException":
            response = {
                ...(await deserializeAws_json1_1RateLimitExceededExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ResourceLimitExceededException":
        case "com.amazonaws.licensemanager#ResourceLimitExceededException":
            response = {
                ...(await deserializeAws_json1_1ResourceLimitExceededExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ResourceNotFoundException":
        case "com.amazonaws.licensemanager#ResourceNotFoundException":
            response = {
                ...(await deserializeAws_json1_1ResourceNotFoundExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ServerInternalException":
        case "com.amazonaws.licensemanager#ServerInternalException":
            response = {
                ...(await deserializeAws_json1_1ServerInternalExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ValidationException":
        case "com.amazonaws.licensemanager#ValidationException":
            response = {
                ...(await deserializeAws_json1_1ValidationExceptionResponse(parsedOutput, context)),
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
const deserializeAws_json1_1DeleteTokenCommand = async (output, context) => {
    if (output.statusCode >= 300) {
        return deserializeAws_json1_1DeleteTokenCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1DeleteTokenResponse(data, context);
    const response = {
        $metadata: deserializeMetadata(output),
        ...contents,
    };
    return Promise.resolve(response);
};
exports.deserializeAws_json1_1DeleteTokenCommand = deserializeAws_json1_1DeleteTokenCommand;
const deserializeAws_json1_1DeleteTokenCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "AccessDeniedException":
        case "com.amazonaws.licensemanager#AccessDeniedException":
            response = {
                ...(await deserializeAws_json1_1AccessDeniedExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "AuthorizationException":
        case "com.amazonaws.licensemanager#AuthorizationException":
            response = {
                ...(await deserializeAws_json1_1AuthorizationExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "RateLimitExceededException":
        case "com.amazonaws.licensemanager#RateLimitExceededException":
            response = {
                ...(await deserializeAws_json1_1RateLimitExceededExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "RedirectException":
        case "com.amazonaws.licensemanager#RedirectException":
            response = {
                ...(await deserializeAws_json1_1RedirectExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ResourceNotFoundException":
        case "com.amazonaws.licensemanager#ResourceNotFoundException":
            response = {
                ...(await deserializeAws_json1_1ResourceNotFoundExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ServerInternalException":
        case "com.amazonaws.licensemanager#ServerInternalException":
            response = {
                ...(await deserializeAws_json1_1ServerInternalExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ValidationException":
        case "com.amazonaws.licensemanager#ValidationException":
            response = {
                ...(await deserializeAws_json1_1ValidationExceptionResponse(parsedOutput, context)),
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
const deserializeAws_json1_1ExtendLicenseConsumptionCommand = async (output, context) => {
    if (output.statusCode >= 300) {
        return deserializeAws_json1_1ExtendLicenseConsumptionCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1ExtendLicenseConsumptionResponse(data, context);
    const response = {
        $metadata: deserializeMetadata(output),
        ...contents,
    };
    return Promise.resolve(response);
};
exports.deserializeAws_json1_1ExtendLicenseConsumptionCommand = deserializeAws_json1_1ExtendLicenseConsumptionCommand;
const deserializeAws_json1_1ExtendLicenseConsumptionCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "AccessDeniedException":
        case "com.amazonaws.licensemanager#AccessDeniedException":
            response = {
                ...(await deserializeAws_json1_1AccessDeniedExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "AuthorizationException":
        case "com.amazonaws.licensemanager#AuthorizationException":
            response = {
                ...(await deserializeAws_json1_1AuthorizationExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InvalidParameterValueException":
        case "com.amazonaws.licensemanager#InvalidParameterValueException":
            response = {
                ...(await deserializeAws_json1_1InvalidParameterValueExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "RateLimitExceededException":
        case "com.amazonaws.licensemanager#RateLimitExceededException":
            response = {
                ...(await deserializeAws_json1_1RateLimitExceededExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ResourceNotFoundException":
        case "com.amazonaws.licensemanager#ResourceNotFoundException":
            response = {
                ...(await deserializeAws_json1_1ResourceNotFoundExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ServerInternalException":
        case "com.amazonaws.licensemanager#ServerInternalException":
            response = {
                ...(await deserializeAws_json1_1ServerInternalExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ValidationException":
        case "com.amazonaws.licensemanager#ValidationException":
            response = {
                ...(await deserializeAws_json1_1ValidationExceptionResponse(parsedOutput, context)),
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
const deserializeAws_json1_1GetAccessTokenCommand = async (output, context) => {
    if (output.statusCode >= 300) {
        return deserializeAws_json1_1GetAccessTokenCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1GetAccessTokenResponse(data, context);
    const response = {
        $metadata: deserializeMetadata(output),
        ...contents,
    };
    return Promise.resolve(response);
};
exports.deserializeAws_json1_1GetAccessTokenCommand = deserializeAws_json1_1GetAccessTokenCommand;
const deserializeAws_json1_1GetAccessTokenCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "AccessDeniedException":
        case "com.amazonaws.licensemanager#AccessDeniedException":
            response = {
                ...(await deserializeAws_json1_1AccessDeniedExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "AuthorizationException":
        case "com.amazonaws.licensemanager#AuthorizationException":
            response = {
                ...(await deserializeAws_json1_1AuthorizationExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "RateLimitExceededException":
        case "com.amazonaws.licensemanager#RateLimitExceededException":
            response = {
                ...(await deserializeAws_json1_1RateLimitExceededExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ServerInternalException":
        case "com.amazonaws.licensemanager#ServerInternalException":
            response = {
                ...(await deserializeAws_json1_1ServerInternalExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ValidationException":
        case "com.amazonaws.licensemanager#ValidationException":
            response = {
                ...(await deserializeAws_json1_1ValidationExceptionResponse(parsedOutput, context)),
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
const deserializeAws_json1_1GetGrantCommand = async (output, context) => {
    if (output.statusCode >= 300) {
        return deserializeAws_json1_1GetGrantCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1GetGrantResponse(data, context);
    const response = {
        $metadata: deserializeMetadata(output),
        ...contents,
    };
    return Promise.resolve(response);
};
exports.deserializeAws_json1_1GetGrantCommand = deserializeAws_json1_1GetGrantCommand;
const deserializeAws_json1_1GetGrantCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "AccessDeniedException":
        case "com.amazonaws.licensemanager#AccessDeniedException":
            response = {
                ...(await deserializeAws_json1_1AccessDeniedExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "AuthorizationException":
        case "com.amazonaws.licensemanager#AuthorizationException":
            response = {
                ...(await deserializeAws_json1_1AuthorizationExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InvalidParameterValueException":
        case "com.amazonaws.licensemanager#InvalidParameterValueException":
            response = {
                ...(await deserializeAws_json1_1InvalidParameterValueExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "RateLimitExceededException":
        case "com.amazonaws.licensemanager#RateLimitExceededException":
            response = {
                ...(await deserializeAws_json1_1RateLimitExceededExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ResourceLimitExceededException":
        case "com.amazonaws.licensemanager#ResourceLimitExceededException":
            response = {
                ...(await deserializeAws_json1_1ResourceLimitExceededExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ServerInternalException":
        case "com.amazonaws.licensemanager#ServerInternalException":
            response = {
                ...(await deserializeAws_json1_1ServerInternalExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ValidationException":
        case "com.amazonaws.licensemanager#ValidationException":
            response = {
                ...(await deserializeAws_json1_1ValidationExceptionResponse(parsedOutput, context)),
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
const deserializeAws_json1_1GetLicenseCommand = async (output, context) => {
    if (output.statusCode >= 300) {
        return deserializeAws_json1_1GetLicenseCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1GetLicenseResponse(data, context);
    const response = {
        $metadata: deserializeMetadata(output),
        ...contents,
    };
    return Promise.resolve(response);
};
exports.deserializeAws_json1_1GetLicenseCommand = deserializeAws_json1_1GetLicenseCommand;
const deserializeAws_json1_1GetLicenseCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "AccessDeniedException":
        case "com.amazonaws.licensemanager#AccessDeniedException":
            response = {
                ...(await deserializeAws_json1_1AccessDeniedExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "AuthorizationException":
        case "com.amazonaws.licensemanager#AuthorizationException":
            response = {
                ...(await deserializeAws_json1_1AuthorizationExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InvalidParameterValueException":
        case "com.amazonaws.licensemanager#InvalidParameterValueException":
            response = {
                ...(await deserializeAws_json1_1InvalidParameterValueExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "RateLimitExceededException":
        case "com.amazonaws.licensemanager#RateLimitExceededException":
            response = {
                ...(await deserializeAws_json1_1RateLimitExceededExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ServerInternalException":
        case "com.amazonaws.licensemanager#ServerInternalException":
            response = {
                ...(await deserializeAws_json1_1ServerInternalExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ValidationException":
        case "com.amazonaws.licensemanager#ValidationException":
            response = {
                ...(await deserializeAws_json1_1ValidationExceptionResponse(parsedOutput, context)),
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
const deserializeAws_json1_1GetLicenseConfigurationCommand = async (output, context) => {
    if (output.statusCode >= 300) {
        return deserializeAws_json1_1GetLicenseConfigurationCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1GetLicenseConfigurationResponse(data, context);
    const response = {
        $metadata: deserializeMetadata(output),
        ...contents,
    };
    return Promise.resolve(response);
};
exports.deserializeAws_json1_1GetLicenseConfigurationCommand = deserializeAws_json1_1GetLicenseConfigurationCommand;
const deserializeAws_json1_1GetLicenseConfigurationCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "AccessDeniedException":
        case "com.amazonaws.licensemanager#AccessDeniedException":
            response = {
                ...(await deserializeAws_json1_1AccessDeniedExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "AuthorizationException":
        case "com.amazonaws.licensemanager#AuthorizationException":
            response = {
                ...(await deserializeAws_json1_1AuthorizationExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InvalidParameterValueException":
        case "com.amazonaws.licensemanager#InvalidParameterValueException":
            response = {
                ...(await deserializeAws_json1_1InvalidParameterValueExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "RateLimitExceededException":
        case "com.amazonaws.licensemanager#RateLimitExceededException":
            response = {
                ...(await deserializeAws_json1_1RateLimitExceededExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ServerInternalException":
        case "com.amazonaws.licensemanager#ServerInternalException":
            response = {
                ...(await deserializeAws_json1_1ServerInternalExceptionResponse(parsedOutput, context)),
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
const deserializeAws_json1_1GetLicenseManagerReportGeneratorCommand = async (output, context) => {
    if (output.statusCode >= 300) {
        return deserializeAws_json1_1GetLicenseManagerReportGeneratorCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1GetLicenseManagerReportGeneratorResponse(data, context);
    const response = {
        $metadata: deserializeMetadata(output),
        ...contents,
    };
    return Promise.resolve(response);
};
exports.deserializeAws_json1_1GetLicenseManagerReportGeneratorCommand = deserializeAws_json1_1GetLicenseManagerReportGeneratorCommand;
const deserializeAws_json1_1GetLicenseManagerReportGeneratorCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "AccessDeniedException":
        case "com.amazonaws.licensemanager#AccessDeniedException":
            response = {
                ...(await deserializeAws_json1_1AccessDeniedExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "AuthorizationException":
        case "com.amazonaws.licensemanager#AuthorizationException":
            response = {
                ...(await deserializeAws_json1_1AuthorizationExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InvalidParameterValueException":
        case "com.amazonaws.licensemanager#InvalidParameterValueException":
            response = {
                ...(await deserializeAws_json1_1InvalidParameterValueExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "RateLimitExceededException":
        case "com.amazonaws.licensemanager#RateLimitExceededException":
            response = {
                ...(await deserializeAws_json1_1RateLimitExceededExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ResourceLimitExceededException":
        case "com.amazonaws.licensemanager#ResourceLimitExceededException":
            response = {
                ...(await deserializeAws_json1_1ResourceLimitExceededExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ResourceNotFoundException":
        case "com.amazonaws.licensemanager#ResourceNotFoundException":
            response = {
                ...(await deserializeAws_json1_1ResourceNotFoundExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ServerInternalException":
        case "com.amazonaws.licensemanager#ServerInternalException":
            response = {
                ...(await deserializeAws_json1_1ServerInternalExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ValidationException":
        case "com.amazonaws.licensemanager#ValidationException":
            response = {
                ...(await deserializeAws_json1_1ValidationExceptionResponse(parsedOutput, context)),
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
const deserializeAws_json1_1GetLicenseUsageCommand = async (output, context) => {
    if (output.statusCode >= 300) {
        return deserializeAws_json1_1GetLicenseUsageCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1GetLicenseUsageResponse(data, context);
    const response = {
        $metadata: deserializeMetadata(output),
        ...contents,
    };
    return Promise.resolve(response);
};
exports.deserializeAws_json1_1GetLicenseUsageCommand = deserializeAws_json1_1GetLicenseUsageCommand;
const deserializeAws_json1_1GetLicenseUsageCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "AccessDeniedException":
        case "com.amazonaws.licensemanager#AccessDeniedException":
            response = {
                ...(await deserializeAws_json1_1AccessDeniedExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "AuthorizationException":
        case "com.amazonaws.licensemanager#AuthorizationException":
            response = {
                ...(await deserializeAws_json1_1AuthorizationExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InvalidParameterValueException":
        case "com.amazonaws.licensemanager#InvalidParameterValueException":
            response = {
                ...(await deserializeAws_json1_1InvalidParameterValueExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "RateLimitExceededException":
        case "com.amazonaws.licensemanager#RateLimitExceededException":
            response = {
                ...(await deserializeAws_json1_1RateLimitExceededExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ServerInternalException":
        case "com.amazonaws.licensemanager#ServerInternalException":
            response = {
                ...(await deserializeAws_json1_1ServerInternalExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ValidationException":
        case "com.amazonaws.licensemanager#ValidationException":
            response = {
                ...(await deserializeAws_json1_1ValidationExceptionResponse(parsedOutput, context)),
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
const deserializeAws_json1_1GetServiceSettingsCommand = async (output, context) => {
    if (output.statusCode >= 300) {
        return deserializeAws_json1_1GetServiceSettingsCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1GetServiceSettingsResponse(data, context);
    const response = {
        $metadata: deserializeMetadata(output),
        ...contents,
    };
    return Promise.resolve(response);
};
exports.deserializeAws_json1_1GetServiceSettingsCommand = deserializeAws_json1_1GetServiceSettingsCommand;
const deserializeAws_json1_1GetServiceSettingsCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "AccessDeniedException":
        case "com.amazonaws.licensemanager#AccessDeniedException":
            response = {
                ...(await deserializeAws_json1_1AccessDeniedExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "AuthorizationException":
        case "com.amazonaws.licensemanager#AuthorizationException":
            response = {
                ...(await deserializeAws_json1_1AuthorizationExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "RateLimitExceededException":
        case "com.amazonaws.licensemanager#RateLimitExceededException":
            response = {
                ...(await deserializeAws_json1_1RateLimitExceededExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ServerInternalException":
        case "com.amazonaws.licensemanager#ServerInternalException":
            response = {
                ...(await deserializeAws_json1_1ServerInternalExceptionResponse(parsedOutput, context)),
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
const deserializeAws_json1_1ListAssociationsForLicenseConfigurationCommand = async (output, context) => {
    if (output.statusCode >= 300) {
        return deserializeAws_json1_1ListAssociationsForLicenseConfigurationCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1ListAssociationsForLicenseConfigurationResponse(data, context);
    const response = {
        $metadata: deserializeMetadata(output),
        ...contents,
    };
    return Promise.resolve(response);
};
exports.deserializeAws_json1_1ListAssociationsForLicenseConfigurationCommand = deserializeAws_json1_1ListAssociationsForLicenseConfigurationCommand;
const deserializeAws_json1_1ListAssociationsForLicenseConfigurationCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "AccessDeniedException":
        case "com.amazonaws.licensemanager#AccessDeniedException":
            response = {
                ...(await deserializeAws_json1_1AccessDeniedExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "AuthorizationException":
        case "com.amazonaws.licensemanager#AuthorizationException":
            response = {
                ...(await deserializeAws_json1_1AuthorizationExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "FilterLimitExceededException":
        case "com.amazonaws.licensemanager#FilterLimitExceededException":
            response = {
                ...(await deserializeAws_json1_1FilterLimitExceededExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InvalidParameterValueException":
        case "com.amazonaws.licensemanager#InvalidParameterValueException":
            response = {
                ...(await deserializeAws_json1_1InvalidParameterValueExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "RateLimitExceededException":
        case "com.amazonaws.licensemanager#RateLimitExceededException":
            response = {
                ...(await deserializeAws_json1_1RateLimitExceededExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ServerInternalException":
        case "com.amazonaws.licensemanager#ServerInternalException":
            response = {
                ...(await deserializeAws_json1_1ServerInternalExceptionResponse(parsedOutput, context)),
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
const deserializeAws_json1_1ListDistributedGrantsCommand = async (output, context) => {
    if (output.statusCode >= 300) {
        return deserializeAws_json1_1ListDistributedGrantsCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1ListDistributedGrantsResponse(data, context);
    const response = {
        $metadata: deserializeMetadata(output),
        ...contents,
    };
    return Promise.resolve(response);
};
exports.deserializeAws_json1_1ListDistributedGrantsCommand = deserializeAws_json1_1ListDistributedGrantsCommand;
const deserializeAws_json1_1ListDistributedGrantsCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "AccessDeniedException":
        case "com.amazonaws.licensemanager#AccessDeniedException":
            response = {
                ...(await deserializeAws_json1_1AccessDeniedExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "AuthorizationException":
        case "com.amazonaws.licensemanager#AuthorizationException":
            response = {
                ...(await deserializeAws_json1_1AuthorizationExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InvalidParameterValueException":
        case "com.amazonaws.licensemanager#InvalidParameterValueException":
            response = {
                ...(await deserializeAws_json1_1InvalidParameterValueExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "RateLimitExceededException":
        case "com.amazonaws.licensemanager#RateLimitExceededException":
            response = {
                ...(await deserializeAws_json1_1RateLimitExceededExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ResourceLimitExceededException":
        case "com.amazonaws.licensemanager#ResourceLimitExceededException":
            response = {
                ...(await deserializeAws_json1_1ResourceLimitExceededExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ServerInternalException":
        case "com.amazonaws.licensemanager#ServerInternalException":
            response = {
                ...(await deserializeAws_json1_1ServerInternalExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ValidationException":
        case "com.amazonaws.licensemanager#ValidationException":
            response = {
                ...(await deserializeAws_json1_1ValidationExceptionResponse(parsedOutput, context)),
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
const deserializeAws_json1_1ListFailuresForLicenseConfigurationOperationsCommand = async (output, context) => {
    if (output.statusCode >= 300) {
        return deserializeAws_json1_1ListFailuresForLicenseConfigurationOperationsCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1ListFailuresForLicenseConfigurationOperationsResponse(data, context);
    const response = {
        $metadata: deserializeMetadata(output),
        ...contents,
    };
    return Promise.resolve(response);
};
exports.deserializeAws_json1_1ListFailuresForLicenseConfigurationOperationsCommand = deserializeAws_json1_1ListFailuresForLicenseConfigurationOperationsCommand;
const deserializeAws_json1_1ListFailuresForLicenseConfigurationOperationsCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "AccessDeniedException":
        case "com.amazonaws.licensemanager#AccessDeniedException":
            response = {
                ...(await deserializeAws_json1_1AccessDeniedExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "AuthorizationException":
        case "com.amazonaws.licensemanager#AuthorizationException":
            response = {
                ...(await deserializeAws_json1_1AuthorizationExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InvalidParameterValueException":
        case "com.amazonaws.licensemanager#InvalidParameterValueException":
            response = {
                ...(await deserializeAws_json1_1InvalidParameterValueExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "RateLimitExceededException":
        case "com.amazonaws.licensemanager#RateLimitExceededException":
            response = {
                ...(await deserializeAws_json1_1RateLimitExceededExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ServerInternalException":
        case "com.amazonaws.licensemanager#ServerInternalException":
            response = {
                ...(await deserializeAws_json1_1ServerInternalExceptionResponse(parsedOutput, context)),
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
const deserializeAws_json1_1ListLicenseConfigurationsCommand = async (output, context) => {
    if (output.statusCode >= 300) {
        return deserializeAws_json1_1ListLicenseConfigurationsCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1ListLicenseConfigurationsResponse(data, context);
    const response = {
        $metadata: deserializeMetadata(output),
        ...contents,
    };
    return Promise.resolve(response);
};
exports.deserializeAws_json1_1ListLicenseConfigurationsCommand = deserializeAws_json1_1ListLicenseConfigurationsCommand;
const deserializeAws_json1_1ListLicenseConfigurationsCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "AccessDeniedException":
        case "com.amazonaws.licensemanager#AccessDeniedException":
            response = {
                ...(await deserializeAws_json1_1AccessDeniedExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "AuthorizationException":
        case "com.amazonaws.licensemanager#AuthorizationException":
            response = {
                ...(await deserializeAws_json1_1AuthorizationExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "FilterLimitExceededException":
        case "com.amazonaws.licensemanager#FilterLimitExceededException":
            response = {
                ...(await deserializeAws_json1_1FilterLimitExceededExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InvalidParameterValueException":
        case "com.amazonaws.licensemanager#InvalidParameterValueException":
            response = {
                ...(await deserializeAws_json1_1InvalidParameterValueExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "RateLimitExceededException":
        case "com.amazonaws.licensemanager#RateLimitExceededException":
            response = {
                ...(await deserializeAws_json1_1RateLimitExceededExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ServerInternalException":
        case "com.amazonaws.licensemanager#ServerInternalException":
            response = {
                ...(await deserializeAws_json1_1ServerInternalExceptionResponse(parsedOutput, context)),
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
const deserializeAws_json1_1ListLicenseManagerReportGeneratorsCommand = async (output, context) => {
    if (output.statusCode >= 300) {
        return deserializeAws_json1_1ListLicenseManagerReportGeneratorsCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1ListLicenseManagerReportGeneratorsResponse(data, context);
    const response = {
        $metadata: deserializeMetadata(output),
        ...contents,
    };
    return Promise.resolve(response);
};
exports.deserializeAws_json1_1ListLicenseManagerReportGeneratorsCommand = deserializeAws_json1_1ListLicenseManagerReportGeneratorsCommand;
const deserializeAws_json1_1ListLicenseManagerReportGeneratorsCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "AccessDeniedException":
        case "com.amazonaws.licensemanager#AccessDeniedException":
            response = {
                ...(await deserializeAws_json1_1AccessDeniedExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "AuthorizationException":
        case "com.amazonaws.licensemanager#AuthorizationException":
            response = {
                ...(await deserializeAws_json1_1AuthorizationExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InvalidParameterValueException":
        case "com.amazonaws.licensemanager#InvalidParameterValueException":
            response = {
                ...(await deserializeAws_json1_1InvalidParameterValueExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "RateLimitExceededException":
        case "com.amazonaws.licensemanager#RateLimitExceededException":
            response = {
                ...(await deserializeAws_json1_1RateLimitExceededExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ResourceLimitExceededException":
        case "com.amazonaws.licensemanager#ResourceLimitExceededException":
            response = {
                ...(await deserializeAws_json1_1ResourceLimitExceededExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ResourceNotFoundException":
        case "com.amazonaws.licensemanager#ResourceNotFoundException":
            response = {
                ...(await deserializeAws_json1_1ResourceNotFoundExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ServerInternalException":
        case "com.amazonaws.licensemanager#ServerInternalException":
            response = {
                ...(await deserializeAws_json1_1ServerInternalExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ValidationException":
        case "com.amazonaws.licensemanager#ValidationException":
            response = {
                ...(await deserializeAws_json1_1ValidationExceptionResponse(parsedOutput, context)),
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
const deserializeAws_json1_1ListLicensesCommand = async (output, context) => {
    if (output.statusCode >= 300) {
        return deserializeAws_json1_1ListLicensesCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1ListLicensesResponse(data, context);
    const response = {
        $metadata: deserializeMetadata(output),
        ...contents,
    };
    return Promise.resolve(response);
};
exports.deserializeAws_json1_1ListLicensesCommand = deserializeAws_json1_1ListLicensesCommand;
const deserializeAws_json1_1ListLicensesCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "AccessDeniedException":
        case "com.amazonaws.licensemanager#AccessDeniedException":
            response = {
                ...(await deserializeAws_json1_1AccessDeniedExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "AuthorizationException":
        case "com.amazonaws.licensemanager#AuthorizationException":
            response = {
                ...(await deserializeAws_json1_1AuthorizationExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InvalidParameterValueException":
        case "com.amazonaws.licensemanager#InvalidParameterValueException":
            response = {
                ...(await deserializeAws_json1_1InvalidParameterValueExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "RateLimitExceededException":
        case "com.amazonaws.licensemanager#RateLimitExceededException":
            response = {
                ...(await deserializeAws_json1_1RateLimitExceededExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ServerInternalException":
        case "com.amazonaws.licensemanager#ServerInternalException":
            response = {
                ...(await deserializeAws_json1_1ServerInternalExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ValidationException":
        case "com.amazonaws.licensemanager#ValidationException":
            response = {
                ...(await deserializeAws_json1_1ValidationExceptionResponse(parsedOutput, context)),
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
const deserializeAws_json1_1ListLicenseSpecificationsForResourceCommand = async (output, context) => {
    if (output.statusCode >= 300) {
        return deserializeAws_json1_1ListLicenseSpecificationsForResourceCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1ListLicenseSpecificationsForResourceResponse(data, context);
    const response = {
        $metadata: deserializeMetadata(output),
        ...contents,
    };
    return Promise.resolve(response);
};
exports.deserializeAws_json1_1ListLicenseSpecificationsForResourceCommand = deserializeAws_json1_1ListLicenseSpecificationsForResourceCommand;
const deserializeAws_json1_1ListLicenseSpecificationsForResourceCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "AccessDeniedException":
        case "com.amazonaws.licensemanager#AccessDeniedException":
            response = {
                ...(await deserializeAws_json1_1AccessDeniedExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "AuthorizationException":
        case "com.amazonaws.licensemanager#AuthorizationException":
            response = {
                ...(await deserializeAws_json1_1AuthorizationExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InvalidParameterValueException":
        case "com.amazonaws.licensemanager#InvalidParameterValueException":
            response = {
                ...(await deserializeAws_json1_1InvalidParameterValueExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "RateLimitExceededException":
        case "com.amazonaws.licensemanager#RateLimitExceededException":
            response = {
                ...(await deserializeAws_json1_1RateLimitExceededExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ServerInternalException":
        case "com.amazonaws.licensemanager#ServerInternalException":
            response = {
                ...(await deserializeAws_json1_1ServerInternalExceptionResponse(parsedOutput, context)),
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
const deserializeAws_json1_1ListLicenseVersionsCommand = async (output, context) => {
    if (output.statusCode >= 300) {
        return deserializeAws_json1_1ListLicenseVersionsCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1ListLicenseVersionsResponse(data, context);
    const response = {
        $metadata: deserializeMetadata(output),
        ...contents,
    };
    return Promise.resolve(response);
};
exports.deserializeAws_json1_1ListLicenseVersionsCommand = deserializeAws_json1_1ListLicenseVersionsCommand;
const deserializeAws_json1_1ListLicenseVersionsCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "AccessDeniedException":
        case "com.amazonaws.licensemanager#AccessDeniedException":
            response = {
                ...(await deserializeAws_json1_1AccessDeniedExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "AuthorizationException":
        case "com.amazonaws.licensemanager#AuthorizationException":
            response = {
                ...(await deserializeAws_json1_1AuthorizationExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InvalidParameterValueException":
        case "com.amazonaws.licensemanager#InvalidParameterValueException":
            response = {
                ...(await deserializeAws_json1_1InvalidParameterValueExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "RateLimitExceededException":
        case "com.amazonaws.licensemanager#RateLimitExceededException":
            response = {
                ...(await deserializeAws_json1_1RateLimitExceededExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ServerInternalException":
        case "com.amazonaws.licensemanager#ServerInternalException":
            response = {
                ...(await deserializeAws_json1_1ServerInternalExceptionResponse(parsedOutput, context)),
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
const deserializeAws_json1_1ListReceivedGrantsCommand = async (output, context) => {
    if (output.statusCode >= 300) {
        return deserializeAws_json1_1ListReceivedGrantsCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1ListReceivedGrantsResponse(data, context);
    const response = {
        $metadata: deserializeMetadata(output),
        ...contents,
    };
    return Promise.resolve(response);
};
exports.deserializeAws_json1_1ListReceivedGrantsCommand = deserializeAws_json1_1ListReceivedGrantsCommand;
const deserializeAws_json1_1ListReceivedGrantsCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "AccessDeniedException":
        case "com.amazonaws.licensemanager#AccessDeniedException":
            response = {
                ...(await deserializeAws_json1_1AccessDeniedExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "AuthorizationException":
        case "com.amazonaws.licensemanager#AuthorizationException":
            response = {
                ...(await deserializeAws_json1_1AuthorizationExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InvalidParameterValueException":
        case "com.amazonaws.licensemanager#InvalidParameterValueException":
            response = {
                ...(await deserializeAws_json1_1InvalidParameterValueExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "RateLimitExceededException":
        case "com.amazonaws.licensemanager#RateLimitExceededException":
            response = {
                ...(await deserializeAws_json1_1RateLimitExceededExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ResourceLimitExceededException":
        case "com.amazonaws.licensemanager#ResourceLimitExceededException":
            response = {
                ...(await deserializeAws_json1_1ResourceLimitExceededExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ServerInternalException":
        case "com.amazonaws.licensemanager#ServerInternalException":
            response = {
                ...(await deserializeAws_json1_1ServerInternalExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ValidationException":
        case "com.amazonaws.licensemanager#ValidationException":
            response = {
                ...(await deserializeAws_json1_1ValidationExceptionResponse(parsedOutput, context)),
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
const deserializeAws_json1_1ListReceivedLicensesCommand = async (output, context) => {
    if (output.statusCode >= 300) {
        return deserializeAws_json1_1ListReceivedLicensesCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1ListReceivedLicensesResponse(data, context);
    const response = {
        $metadata: deserializeMetadata(output),
        ...contents,
    };
    return Promise.resolve(response);
};
exports.deserializeAws_json1_1ListReceivedLicensesCommand = deserializeAws_json1_1ListReceivedLicensesCommand;
const deserializeAws_json1_1ListReceivedLicensesCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "AccessDeniedException":
        case "com.amazonaws.licensemanager#AccessDeniedException":
            response = {
                ...(await deserializeAws_json1_1AccessDeniedExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "AuthorizationException":
        case "com.amazonaws.licensemanager#AuthorizationException":
            response = {
                ...(await deserializeAws_json1_1AuthorizationExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InvalidParameterValueException":
        case "com.amazonaws.licensemanager#InvalidParameterValueException":
            response = {
                ...(await deserializeAws_json1_1InvalidParameterValueExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "RateLimitExceededException":
        case "com.amazonaws.licensemanager#RateLimitExceededException":
            response = {
                ...(await deserializeAws_json1_1RateLimitExceededExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ResourceLimitExceededException":
        case "com.amazonaws.licensemanager#ResourceLimitExceededException":
            response = {
                ...(await deserializeAws_json1_1ResourceLimitExceededExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ServerInternalException":
        case "com.amazonaws.licensemanager#ServerInternalException":
            response = {
                ...(await deserializeAws_json1_1ServerInternalExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ValidationException":
        case "com.amazonaws.licensemanager#ValidationException":
            response = {
                ...(await deserializeAws_json1_1ValidationExceptionResponse(parsedOutput, context)),
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
const deserializeAws_json1_1ListResourceInventoryCommand = async (output, context) => {
    if (output.statusCode >= 300) {
        return deserializeAws_json1_1ListResourceInventoryCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1ListResourceInventoryResponse(data, context);
    const response = {
        $metadata: deserializeMetadata(output),
        ...contents,
    };
    return Promise.resolve(response);
};
exports.deserializeAws_json1_1ListResourceInventoryCommand = deserializeAws_json1_1ListResourceInventoryCommand;
const deserializeAws_json1_1ListResourceInventoryCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "AccessDeniedException":
        case "com.amazonaws.licensemanager#AccessDeniedException":
            response = {
                ...(await deserializeAws_json1_1AccessDeniedExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "AuthorizationException":
        case "com.amazonaws.licensemanager#AuthorizationException":
            response = {
                ...(await deserializeAws_json1_1AuthorizationExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "FailedDependencyException":
        case "com.amazonaws.licensemanager#FailedDependencyException":
            response = {
                ...(await deserializeAws_json1_1FailedDependencyExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "FilterLimitExceededException":
        case "com.amazonaws.licensemanager#FilterLimitExceededException":
            response = {
                ...(await deserializeAws_json1_1FilterLimitExceededExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InvalidParameterValueException":
        case "com.amazonaws.licensemanager#InvalidParameterValueException":
            response = {
                ...(await deserializeAws_json1_1InvalidParameterValueExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "RateLimitExceededException":
        case "com.amazonaws.licensemanager#RateLimitExceededException":
            response = {
                ...(await deserializeAws_json1_1RateLimitExceededExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ServerInternalException":
        case "com.amazonaws.licensemanager#ServerInternalException":
            response = {
                ...(await deserializeAws_json1_1ServerInternalExceptionResponse(parsedOutput, context)),
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
const deserializeAws_json1_1ListTagsForResourceCommand = async (output, context) => {
    if (output.statusCode >= 300) {
        return deserializeAws_json1_1ListTagsForResourceCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1ListTagsForResourceResponse(data, context);
    const response = {
        $metadata: deserializeMetadata(output),
        ...contents,
    };
    return Promise.resolve(response);
};
exports.deserializeAws_json1_1ListTagsForResourceCommand = deserializeAws_json1_1ListTagsForResourceCommand;
const deserializeAws_json1_1ListTagsForResourceCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "AccessDeniedException":
        case "com.amazonaws.licensemanager#AccessDeniedException":
            response = {
                ...(await deserializeAws_json1_1AccessDeniedExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "AuthorizationException":
        case "com.amazonaws.licensemanager#AuthorizationException":
            response = {
                ...(await deserializeAws_json1_1AuthorizationExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InvalidParameterValueException":
        case "com.amazonaws.licensemanager#InvalidParameterValueException":
            response = {
                ...(await deserializeAws_json1_1InvalidParameterValueExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "RateLimitExceededException":
        case "com.amazonaws.licensemanager#RateLimitExceededException":
            response = {
                ...(await deserializeAws_json1_1RateLimitExceededExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ServerInternalException":
        case "com.amazonaws.licensemanager#ServerInternalException":
            response = {
                ...(await deserializeAws_json1_1ServerInternalExceptionResponse(parsedOutput, context)),
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
const deserializeAws_json1_1ListTokensCommand = async (output, context) => {
    if (output.statusCode >= 300) {
        return deserializeAws_json1_1ListTokensCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1ListTokensResponse(data, context);
    const response = {
        $metadata: deserializeMetadata(output),
        ...contents,
    };
    return Promise.resolve(response);
};
exports.deserializeAws_json1_1ListTokensCommand = deserializeAws_json1_1ListTokensCommand;
const deserializeAws_json1_1ListTokensCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "AccessDeniedException":
        case "com.amazonaws.licensemanager#AccessDeniedException":
            response = {
                ...(await deserializeAws_json1_1AccessDeniedExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "AuthorizationException":
        case "com.amazonaws.licensemanager#AuthorizationException":
            response = {
                ...(await deserializeAws_json1_1AuthorizationExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "RateLimitExceededException":
        case "com.amazonaws.licensemanager#RateLimitExceededException":
            response = {
                ...(await deserializeAws_json1_1RateLimitExceededExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ServerInternalException":
        case "com.amazonaws.licensemanager#ServerInternalException":
            response = {
                ...(await deserializeAws_json1_1ServerInternalExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ValidationException":
        case "com.amazonaws.licensemanager#ValidationException":
            response = {
                ...(await deserializeAws_json1_1ValidationExceptionResponse(parsedOutput, context)),
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
const deserializeAws_json1_1ListUsageForLicenseConfigurationCommand = async (output, context) => {
    if (output.statusCode >= 300) {
        return deserializeAws_json1_1ListUsageForLicenseConfigurationCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1ListUsageForLicenseConfigurationResponse(data, context);
    const response = {
        $metadata: deserializeMetadata(output),
        ...contents,
    };
    return Promise.resolve(response);
};
exports.deserializeAws_json1_1ListUsageForLicenseConfigurationCommand = deserializeAws_json1_1ListUsageForLicenseConfigurationCommand;
const deserializeAws_json1_1ListUsageForLicenseConfigurationCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "AccessDeniedException":
        case "com.amazonaws.licensemanager#AccessDeniedException":
            response = {
                ...(await deserializeAws_json1_1AccessDeniedExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "AuthorizationException":
        case "com.amazonaws.licensemanager#AuthorizationException":
            response = {
                ...(await deserializeAws_json1_1AuthorizationExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "FilterLimitExceededException":
        case "com.amazonaws.licensemanager#FilterLimitExceededException":
            response = {
                ...(await deserializeAws_json1_1FilterLimitExceededExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InvalidParameterValueException":
        case "com.amazonaws.licensemanager#InvalidParameterValueException":
            response = {
                ...(await deserializeAws_json1_1InvalidParameterValueExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "RateLimitExceededException":
        case "com.amazonaws.licensemanager#RateLimitExceededException":
            response = {
                ...(await deserializeAws_json1_1RateLimitExceededExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ServerInternalException":
        case "com.amazonaws.licensemanager#ServerInternalException":
            response = {
                ...(await deserializeAws_json1_1ServerInternalExceptionResponse(parsedOutput, context)),
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
const deserializeAws_json1_1RejectGrantCommand = async (output, context) => {
    if (output.statusCode >= 300) {
        return deserializeAws_json1_1RejectGrantCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1RejectGrantResponse(data, context);
    const response = {
        $metadata: deserializeMetadata(output),
        ...contents,
    };
    return Promise.resolve(response);
};
exports.deserializeAws_json1_1RejectGrantCommand = deserializeAws_json1_1RejectGrantCommand;
const deserializeAws_json1_1RejectGrantCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "AccessDeniedException":
        case "com.amazonaws.licensemanager#AccessDeniedException":
            response = {
                ...(await deserializeAws_json1_1AccessDeniedExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "AuthorizationException":
        case "com.amazonaws.licensemanager#AuthorizationException":
            response = {
                ...(await deserializeAws_json1_1AuthorizationExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InvalidParameterValueException":
        case "com.amazonaws.licensemanager#InvalidParameterValueException":
            response = {
                ...(await deserializeAws_json1_1InvalidParameterValueExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "RateLimitExceededException":
        case "com.amazonaws.licensemanager#RateLimitExceededException":
            response = {
                ...(await deserializeAws_json1_1RateLimitExceededExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ResourceLimitExceededException":
        case "com.amazonaws.licensemanager#ResourceLimitExceededException":
            response = {
                ...(await deserializeAws_json1_1ResourceLimitExceededExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ServerInternalException":
        case "com.amazonaws.licensemanager#ServerInternalException":
            response = {
                ...(await deserializeAws_json1_1ServerInternalExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ValidationException":
        case "com.amazonaws.licensemanager#ValidationException":
            response = {
                ...(await deserializeAws_json1_1ValidationExceptionResponse(parsedOutput, context)),
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
const deserializeAws_json1_1TagResourceCommand = async (output, context) => {
    if (output.statusCode >= 300) {
        return deserializeAws_json1_1TagResourceCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1TagResourceResponse(data, context);
    const response = {
        $metadata: deserializeMetadata(output),
        ...contents,
    };
    return Promise.resolve(response);
};
exports.deserializeAws_json1_1TagResourceCommand = deserializeAws_json1_1TagResourceCommand;
const deserializeAws_json1_1TagResourceCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "AccessDeniedException":
        case "com.amazonaws.licensemanager#AccessDeniedException":
            response = {
                ...(await deserializeAws_json1_1AccessDeniedExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "AuthorizationException":
        case "com.amazonaws.licensemanager#AuthorizationException":
            response = {
                ...(await deserializeAws_json1_1AuthorizationExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InvalidParameterValueException":
        case "com.amazonaws.licensemanager#InvalidParameterValueException":
            response = {
                ...(await deserializeAws_json1_1InvalidParameterValueExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "RateLimitExceededException":
        case "com.amazonaws.licensemanager#RateLimitExceededException":
            response = {
                ...(await deserializeAws_json1_1RateLimitExceededExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ServerInternalException":
        case "com.amazonaws.licensemanager#ServerInternalException":
            response = {
                ...(await deserializeAws_json1_1ServerInternalExceptionResponse(parsedOutput, context)),
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
const deserializeAws_json1_1UntagResourceCommand = async (output, context) => {
    if (output.statusCode >= 300) {
        return deserializeAws_json1_1UntagResourceCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1UntagResourceResponse(data, context);
    const response = {
        $metadata: deserializeMetadata(output),
        ...contents,
    };
    return Promise.resolve(response);
};
exports.deserializeAws_json1_1UntagResourceCommand = deserializeAws_json1_1UntagResourceCommand;
const deserializeAws_json1_1UntagResourceCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "AccessDeniedException":
        case "com.amazonaws.licensemanager#AccessDeniedException":
            response = {
                ...(await deserializeAws_json1_1AccessDeniedExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "AuthorizationException":
        case "com.amazonaws.licensemanager#AuthorizationException":
            response = {
                ...(await deserializeAws_json1_1AuthorizationExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InvalidParameterValueException":
        case "com.amazonaws.licensemanager#InvalidParameterValueException":
            response = {
                ...(await deserializeAws_json1_1InvalidParameterValueExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "RateLimitExceededException":
        case "com.amazonaws.licensemanager#RateLimitExceededException":
            response = {
                ...(await deserializeAws_json1_1RateLimitExceededExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ServerInternalException":
        case "com.amazonaws.licensemanager#ServerInternalException":
            response = {
                ...(await deserializeAws_json1_1ServerInternalExceptionResponse(parsedOutput, context)),
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
const deserializeAws_json1_1UpdateLicenseConfigurationCommand = async (output, context) => {
    if (output.statusCode >= 300) {
        return deserializeAws_json1_1UpdateLicenseConfigurationCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1UpdateLicenseConfigurationResponse(data, context);
    const response = {
        $metadata: deserializeMetadata(output),
        ...contents,
    };
    return Promise.resolve(response);
};
exports.deserializeAws_json1_1UpdateLicenseConfigurationCommand = deserializeAws_json1_1UpdateLicenseConfigurationCommand;
const deserializeAws_json1_1UpdateLicenseConfigurationCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "AccessDeniedException":
        case "com.amazonaws.licensemanager#AccessDeniedException":
            response = {
                ...(await deserializeAws_json1_1AccessDeniedExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "AuthorizationException":
        case "com.amazonaws.licensemanager#AuthorizationException":
            response = {
                ...(await deserializeAws_json1_1AuthorizationExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InvalidParameterValueException":
        case "com.amazonaws.licensemanager#InvalidParameterValueException":
            response = {
                ...(await deserializeAws_json1_1InvalidParameterValueExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "RateLimitExceededException":
        case "com.amazonaws.licensemanager#RateLimitExceededException":
            response = {
                ...(await deserializeAws_json1_1RateLimitExceededExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ResourceLimitExceededException":
        case "com.amazonaws.licensemanager#ResourceLimitExceededException":
            response = {
                ...(await deserializeAws_json1_1ResourceLimitExceededExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ServerInternalException":
        case "com.amazonaws.licensemanager#ServerInternalException":
            response = {
                ...(await deserializeAws_json1_1ServerInternalExceptionResponse(parsedOutput, context)),
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
const deserializeAws_json1_1UpdateLicenseManagerReportGeneratorCommand = async (output, context) => {
    if (output.statusCode >= 300) {
        return deserializeAws_json1_1UpdateLicenseManagerReportGeneratorCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1UpdateLicenseManagerReportGeneratorResponse(data, context);
    const response = {
        $metadata: deserializeMetadata(output),
        ...contents,
    };
    return Promise.resolve(response);
};
exports.deserializeAws_json1_1UpdateLicenseManagerReportGeneratorCommand = deserializeAws_json1_1UpdateLicenseManagerReportGeneratorCommand;
const deserializeAws_json1_1UpdateLicenseManagerReportGeneratorCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "AccessDeniedException":
        case "com.amazonaws.licensemanager#AccessDeniedException":
            response = {
                ...(await deserializeAws_json1_1AccessDeniedExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "AuthorizationException":
        case "com.amazonaws.licensemanager#AuthorizationException":
            response = {
                ...(await deserializeAws_json1_1AuthorizationExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InvalidParameterValueException":
        case "com.amazonaws.licensemanager#InvalidParameterValueException":
            response = {
                ...(await deserializeAws_json1_1InvalidParameterValueExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "RateLimitExceededException":
        case "com.amazonaws.licensemanager#RateLimitExceededException":
            response = {
                ...(await deserializeAws_json1_1RateLimitExceededExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ResourceLimitExceededException":
        case "com.amazonaws.licensemanager#ResourceLimitExceededException":
            response = {
                ...(await deserializeAws_json1_1ResourceLimitExceededExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ResourceNotFoundException":
        case "com.amazonaws.licensemanager#ResourceNotFoundException":
            response = {
                ...(await deserializeAws_json1_1ResourceNotFoundExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ServerInternalException":
        case "com.amazonaws.licensemanager#ServerInternalException":
            response = {
                ...(await deserializeAws_json1_1ServerInternalExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ValidationException":
        case "com.amazonaws.licensemanager#ValidationException":
            response = {
                ...(await deserializeAws_json1_1ValidationExceptionResponse(parsedOutput, context)),
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
const deserializeAws_json1_1UpdateLicenseSpecificationsForResourceCommand = async (output, context) => {
    if (output.statusCode >= 300) {
        return deserializeAws_json1_1UpdateLicenseSpecificationsForResourceCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1UpdateLicenseSpecificationsForResourceResponse(data, context);
    const response = {
        $metadata: deserializeMetadata(output),
        ...contents,
    };
    return Promise.resolve(response);
};
exports.deserializeAws_json1_1UpdateLicenseSpecificationsForResourceCommand = deserializeAws_json1_1UpdateLicenseSpecificationsForResourceCommand;
const deserializeAws_json1_1UpdateLicenseSpecificationsForResourceCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "AccessDeniedException":
        case "com.amazonaws.licensemanager#AccessDeniedException":
            response = {
                ...(await deserializeAws_json1_1AccessDeniedExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "AuthorizationException":
        case "com.amazonaws.licensemanager#AuthorizationException":
            response = {
                ...(await deserializeAws_json1_1AuthorizationExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InvalidParameterValueException":
        case "com.amazonaws.licensemanager#InvalidParameterValueException":
            response = {
                ...(await deserializeAws_json1_1InvalidParameterValueExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InvalidResourceStateException":
        case "com.amazonaws.licensemanager#InvalidResourceStateException":
            response = {
                ...(await deserializeAws_json1_1InvalidResourceStateExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "LicenseUsageException":
        case "com.amazonaws.licensemanager#LicenseUsageException":
            response = {
                ...(await deserializeAws_json1_1LicenseUsageExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "RateLimitExceededException":
        case "com.amazonaws.licensemanager#RateLimitExceededException":
            response = {
                ...(await deserializeAws_json1_1RateLimitExceededExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ServerInternalException":
        case "com.amazonaws.licensemanager#ServerInternalException":
            response = {
                ...(await deserializeAws_json1_1ServerInternalExceptionResponse(parsedOutput, context)),
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
const deserializeAws_json1_1UpdateServiceSettingsCommand = async (output, context) => {
    if (output.statusCode >= 300) {
        return deserializeAws_json1_1UpdateServiceSettingsCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1UpdateServiceSettingsResponse(data, context);
    const response = {
        $metadata: deserializeMetadata(output),
        ...contents,
    };
    return Promise.resolve(response);
};
exports.deserializeAws_json1_1UpdateServiceSettingsCommand = deserializeAws_json1_1UpdateServiceSettingsCommand;
const deserializeAws_json1_1UpdateServiceSettingsCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "AccessDeniedException":
        case "com.amazonaws.licensemanager#AccessDeniedException":
            response = {
                ...(await deserializeAws_json1_1AccessDeniedExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "AuthorizationException":
        case "com.amazonaws.licensemanager#AuthorizationException":
            response = {
                ...(await deserializeAws_json1_1AuthorizationExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InvalidParameterValueException":
        case "com.amazonaws.licensemanager#InvalidParameterValueException":
            response = {
                ...(await deserializeAws_json1_1InvalidParameterValueExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "RateLimitExceededException":
        case "com.amazonaws.licensemanager#RateLimitExceededException":
            response = {
                ...(await deserializeAws_json1_1RateLimitExceededExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ServerInternalException":
        case "com.amazonaws.licensemanager#ServerInternalException":
            response = {
                ...(await deserializeAws_json1_1ServerInternalExceptionResponse(parsedOutput, context)),
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
const deserializeAws_json1_1AccessDeniedExceptionResponse = async (parsedOutput, context) => {
    const body = parsedOutput.body;
    const deserialized = deserializeAws_json1_1AccessDeniedException(body, context);
    const contents = {
        name: "AccessDeniedException",
        $fault: "client",
        $metadata: deserializeMetadata(parsedOutput),
        ...deserialized,
    };
    return contents;
};
const deserializeAws_json1_1AuthorizationExceptionResponse = async (parsedOutput, context) => {
    const body = parsedOutput.body;
    const deserialized = deserializeAws_json1_1AuthorizationException(body, context);
    const contents = {
        name: "AuthorizationException",
        $fault: "client",
        $metadata: deserializeMetadata(parsedOutput),
        ...deserialized,
    };
    return contents;
};
const deserializeAws_json1_1ConflictExceptionResponse = async (parsedOutput, context) => {
    const body = parsedOutput.body;
    const deserialized = deserializeAws_json1_1ConflictException(body, context);
    const contents = {
        name: "ConflictException",
        $fault: "client",
        $metadata: deserializeMetadata(parsedOutput),
        ...deserialized,
    };
    return contents;
};
const deserializeAws_json1_1EntitlementNotAllowedExceptionResponse = async (parsedOutput, context) => {
    const body = parsedOutput.body;
    const deserialized = deserializeAws_json1_1EntitlementNotAllowedException(body, context);
    const contents = {
        name: "EntitlementNotAllowedException",
        $fault: "client",
        $metadata: deserializeMetadata(parsedOutput),
        ...deserialized,
    };
    return contents;
};
const deserializeAws_json1_1FailedDependencyExceptionResponse = async (parsedOutput, context) => {
    const body = parsedOutput.body;
    const deserialized = deserializeAws_json1_1FailedDependencyException(body, context);
    const contents = {
        name: "FailedDependencyException",
        $fault: "client",
        $metadata: deserializeMetadata(parsedOutput),
        ...deserialized,
    };
    return contents;
};
const deserializeAws_json1_1FilterLimitExceededExceptionResponse = async (parsedOutput, context) => {
    const body = parsedOutput.body;
    const deserialized = deserializeAws_json1_1FilterLimitExceededException(body, context);
    const contents = {
        name: "FilterLimitExceededException",
        $fault: "client",
        $metadata: deserializeMetadata(parsedOutput),
        ...deserialized,
    };
    return contents;
};
const deserializeAws_json1_1InvalidParameterValueExceptionResponse = async (parsedOutput, context) => {
    const body = parsedOutput.body;
    const deserialized = deserializeAws_json1_1InvalidParameterValueException(body, context);
    const contents = {
        name: "InvalidParameterValueException",
        $fault: "client",
        $metadata: deserializeMetadata(parsedOutput),
        ...deserialized,
    };
    return contents;
};
const deserializeAws_json1_1InvalidResourceStateExceptionResponse = async (parsedOutput, context) => {
    const body = parsedOutput.body;
    const deserialized = deserializeAws_json1_1InvalidResourceStateException(body, context);
    const contents = {
        name: "InvalidResourceStateException",
        $fault: "client",
        $metadata: deserializeMetadata(parsedOutput),
        ...deserialized,
    };
    return contents;
};
const deserializeAws_json1_1LicenseUsageExceptionResponse = async (parsedOutput, context) => {
    const body = parsedOutput.body;
    const deserialized = deserializeAws_json1_1LicenseUsageException(body, context);
    const contents = {
        name: "LicenseUsageException",
        $fault: "client",
        $metadata: deserializeMetadata(parsedOutput),
        ...deserialized,
    };
    return contents;
};
const deserializeAws_json1_1NoEntitlementsAllowedExceptionResponse = async (parsedOutput, context) => {
    const body = parsedOutput.body;
    const deserialized = deserializeAws_json1_1NoEntitlementsAllowedException(body, context);
    const contents = {
        name: "NoEntitlementsAllowedException",
        $fault: "client",
        $metadata: deserializeMetadata(parsedOutput),
        ...deserialized,
    };
    return contents;
};
const deserializeAws_json1_1RateLimitExceededExceptionResponse = async (parsedOutput, context) => {
    const body = parsedOutput.body;
    const deserialized = deserializeAws_json1_1RateLimitExceededException(body, context);
    const contents = {
        name: "RateLimitExceededException",
        $fault: "client",
        $metadata: deserializeMetadata(parsedOutput),
        ...deserialized,
    };
    return contents;
};
const deserializeAws_json1_1RedirectExceptionResponse = async (parsedOutput, context) => {
    const body = parsedOutput.body;
    const deserialized = deserializeAws_json1_1RedirectException(body, context);
    const contents = {
        name: "RedirectException",
        $fault: "client",
        $metadata: deserializeMetadata(parsedOutput),
        ...deserialized,
    };
    return contents;
};
const deserializeAws_json1_1ResourceLimitExceededExceptionResponse = async (parsedOutput, context) => {
    const body = parsedOutput.body;
    const deserialized = deserializeAws_json1_1ResourceLimitExceededException(body, context);
    const contents = {
        name: "ResourceLimitExceededException",
        $fault: "client",
        $metadata: deserializeMetadata(parsedOutput),
        ...deserialized,
    };
    return contents;
};
const deserializeAws_json1_1ResourceNotFoundExceptionResponse = async (parsedOutput, context) => {
    const body = parsedOutput.body;
    const deserialized = deserializeAws_json1_1ResourceNotFoundException(body, context);
    const contents = {
        name: "ResourceNotFoundException",
        $fault: "client",
        $metadata: deserializeMetadata(parsedOutput),
        ...deserialized,
    };
    return contents;
};
const deserializeAws_json1_1ServerInternalExceptionResponse = async (parsedOutput, context) => {
    const body = parsedOutput.body;
    const deserialized = deserializeAws_json1_1ServerInternalException(body, context);
    const contents = {
        name: "ServerInternalException",
        $fault: "server",
        $metadata: deserializeMetadata(parsedOutput),
        ...deserialized,
    };
    return contents;
};
const deserializeAws_json1_1UnsupportedDigitalSignatureMethodExceptionResponse = async (parsedOutput, context) => {
    const body = parsedOutput.body;
    const deserialized = deserializeAws_json1_1UnsupportedDigitalSignatureMethodException(body, context);
    const contents = {
        name: "UnsupportedDigitalSignatureMethodException",
        $fault: "client",
        $metadata: deserializeMetadata(parsedOutput),
        ...deserialized,
    };
    return contents;
};
const deserializeAws_json1_1ValidationExceptionResponse = async (parsedOutput, context) => {
    const body = parsedOutput.body;
    const deserialized = deserializeAws_json1_1ValidationException(body, context);
    const contents = {
        name: "ValidationException",
        $fault: "client",
        $metadata: deserializeMetadata(parsedOutput),
        ...deserialized,
    };
    return contents;
};
const serializeAws_json1_1AcceptGrantRequest = (input, context) => {
    return {
        ...(input.GrantArn !== undefined && input.GrantArn !== null && { GrantArn: input.GrantArn }),
    };
};
const serializeAws_json1_1AllowedOperationList = (input, context) => {
    return input
        .filter((e) => e != null)
        .map((entry) => {
        if (entry === null) {
            return null;
        }
        return entry;
    });
};
const serializeAws_json1_1ArnList = (input, context) => {
    return input
        .filter((e) => e != null)
        .map((entry) => {
        if (entry === null) {
            return null;
        }
        return entry;
    });
};
const serializeAws_json1_1BorrowConfiguration = (input, context) => {
    return {
        ...(input.AllowEarlyCheckIn !== undefined &&
            input.AllowEarlyCheckIn !== null && { AllowEarlyCheckIn: input.AllowEarlyCheckIn }),
        ...(input.MaxTimeToLiveInMinutes !== undefined &&
            input.MaxTimeToLiveInMinutes !== null && { MaxTimeToLiveInMinutes: input.MaxTimeToLiveInMinutes }),
    };
};
const serializeAws_json1_1CheckInLicenseRequest = (input, context) => {
    return {
        ...(input.Beneficiary !== undefined && input.Beneficiary !== null && { Beneficiary: input.Beneficiary }),
        ...(input.LicenseConsumptionToken !== undefined &&
            input.LicenseConsumptionToken !== null && { LicenseConsumptionToken: input.LicenseConsumptionToken }),
    };
};
const serializeAws_json1_1CheckoutBorrowLicenseRequest = (input, context) => {
    return {
        ...(input.CheckoutMetadata !== undefined &&
            input.CheckoutMetadata !== null && {
            CheckoutMetadata: serializeAws_json1_1MetadataList(input.CheckoutMetadata, context),
        }),
        ...(input.ClientToken !== undefined && input.ClientToken !== null && { ClientToken: input.ClientToken }),
        ...(input.DigitalSignatureMethod !== undefined &&
            input.DigitalSignatureMethod !== null && { DigitalSignatureMethod: input.DigitalSignatureMethod }),
        ...(input.Entitlements !== undefined &&
            input.Entitlements !== null && {
            Entitlements: serializeAws_json1_1EntitlementDataList(input.Entitlements, context),
        }),
        ...(input.LicenseArn !== undefined && input.LicenseArn !== null && { LicenseArn: input.LicenseArn }),
        ...(input.NodeId !== undefined && input.NodeId !== null && { NodeId: input.NodeId }),
    };
};
const serializeAws_json1_1CheckoutLicenseRequest = (input, context) => {
    return {
        ...(input.Beneficiary !== undefined && input.Beneficiary !== null && { Beneficiary: input.Beneficiary }),
        ...(input.CheckoutType !== undefined && input.CheckoutType !== null && { CheckoutType: input.CheckoutType }),
        ...(input.ClientToken !== undefined && input.ClientToken !== null && { ClientToken: input.ClientToken }),
        ...(input.Entitlements !== undefined &&
            input.Entitlements !== null && {
            Entitlements: serializeAws_json1_1EntitlementDataList(input.Entitlements, context),
        }),
        ...(input.KeyFingerprint !== undefined &&
            input.KeyFingerprint !== null && { KeyFingerprint: input.KeyFingerprint }),
        ...(input.NodeId !== undefined && input.NodeId !== null && { NodeId: input.NodeId }),
        ...(input.ProductSKU !== undefined && input.ProductSKU !== null && { ProductSKU: input.ProductSKU }),
    };
};
const serializeAws_json1_1ConsumptionConfiguration = (input, context) => {
    return {
        ...(input.BorrowConfiguration !== undefined &&
            input.BorrowConfiguration !== null && {
            BorrowConfiguration: serializeAws_json1_1BorrowConfiguration(input.BorrowConfiguration, context),
        }),
        ...(input.ProvisionalConfiguration !== undefined &&
            input.ProvisionalConfiguration !== null && {
            ProvisionalConfiguration: serializeAws_json1_1ProvisionalConfiguration(input.ProvisionalConfiguration, context),
        }),
        ...(input.RenewType !== undefined && input.RenewType !== null && { RenewType: input.RenewType }),
    };
};
const serializeAws_json1_1CreateGrantRequest = (input, context) => {
    return {
        ...(input.AllowedOperations !== undefined &&
            input.AllowedOperations !== null && {
            AllowedOperations: serializeAws_json1_1AllowedOperationList(input.AllowedOperations, context),
        }),
        ...(input.ClientToken !== undefined && input.ClientToken !== null && { ClientToken: input.ClientToken }),
        ...(input.GrantName !== undefined && input.GrantName !== null && { GrantName: input.GrantName }),
        ...(input.HomeRegion !== undefined && input.HomeRegion !== null && { HomeRegion: input.HomeRegion }),
        ...(input.LicenseArn !== undefined && input.LicenseArn !== null && { LicenseArn: input.LicenseArn }),
        ...(input.Principals !== undefined &&
            input.Principals !== null && { Principals: serializeAws_json1_1PrincipalArnList(input.Principals, context) }),
    };
};
const serializeAws_json1_1CreateGrantVersionRequest = (input, context) => {
    return {
        ...(input.AllowedOperations !== undefined &&
            input.AllowedOperations !== null && {
            AllowedOperations: serializeAws_json1_1AllowedOperationList(input.AllowedOperations, context),
        }),
        ...(input.ClientToken !== undefined && input.ClientToken !== null && { ClientToken: input.ClientToken }),
        ...(input.GrantArn !== undefined && input.GrantArn !== null && { GrantArn: input.GrantArn }),
        ...(input.GrantName !== undefined && input.GrantName !== null && { GrantName: input.GrantName }),
        ...(input.SourceVersion !== undefined && input.SourceVersion !== null && { SourceVersion: input.SourceVersion }),
        ...(input.Status !== undefined && input.Status !== null && { Status: input.Status }),
    };
};
const serializeAws_json1_1CreateLicenseConfigurationRequest = (input, context) => {
    return {
        ...(input.Description !== undefined && input.Description !== null && { Description: input.Description }),
        ...(input.DisassociateWhenNotFound !== undefined &&
            input.DisassociateWhenNotFound !== null && { DisassociateWhenNotFound: input.DisassociateWhenNotFound }),
        ...(input.LicenseCount !== undefined && input.LicenseCount !== null && { LicenseCount: input.LicenseCount }),
        ...(input.LicenseCountHardLimit !== undefined &&
            input.LicenseCountHardLimit !== null && { LicenseCountHardLimit: input.LicenseCountHardLimit }),
        ...(input.LicenseCountingType !== undefined &&
            input.LicenseCountingType !== null && { LicenseCountingType: input.LicenseCountingType }),
        ...(input.LicenseRules !== undefined &&
            input.LicenseRules !== null && { LicenseRules: serializeAws_json1_1StringList(input.LicenseRules, context) }),
        ...(input.Name !== undefined && input.Name !== null && { Name: input.Name }),
        ...(input.ProductInformationList !== undefined &&
            input.ProductInformationList !== null && {
            ProductInformationList: serializeAws_json1_1ProductInformationList(input.ProductInformationList, context),
        }),
        ...(input.Tags !== undefined && input.Tags !== null && { Tags: serializeAws_json1_1TagList(input.Tags, context) }),
    };
};
const serializeAws_json1_1CreateLicenseManagerReportGeneratorRequest = (input, context) => {
    return {
        ...(input.ClientToken !== undefined && input.ClientToken !== null && { ClientToken: input.ClientToken }),
        ...(input.Description !== undefined && input.Description !== null && { Description: input.Description }),
        ...(input.ReportContext !== undefined &&
            input.ReportContext !== null && {
            ReportContext: serializeAws_json1_1ReportContext(input.ReportContext, context),
        }),
        ...(input.ReportFrequency !== undefined &&
            input.ReportFrequency !== null && {
            ReportFrequency: serializeAws_json1_1ReportFrequency(input.ReportFrequency, context),
        }),
        ...(input.ReportGeneratorName !== undefined &&
            input.ReportGeneratorName !== null && { ReportGeneratorName: input.ReportGeneratorName }),
        ...(input.Tags !== undefined && input.Tags !== null && { Tags: serializeAws_json1_1TagList(input.Tags, context) }),
        ...(input.Type !== undefined &&
            input.Type !== null && { Type: serializeAws_json1_1ReportTypeList(input.Type, context) }),
    };
};
const serializeAws_json1_1CreateLicenseRequest = (input, context) => {
    return {
        ...(input.Beneficiary !== undefined && input.Beneficiary !== null && { Beneficiary: input.Beneficiary }),
        ...(input.ClientToken !== undefined && input.ClientToken !== null && { ClientToken: input.ClientToken }),
        ...(input.ConsumptionConfiguration !== undefined &&
            input.ConsumptionConfiguration !== null && {
            ConsumptionConfiguration: serializeAws_json1_1ConsumptionConfiguration(input.ConsumptionConfiguration, context),
        }),
        ...(input.Entitlements !== undefined &&
            input.Entitlements !== null && {
            Entitlements: serializeAws_json1_1EntitlementList(input.Entitlements, context),
        }),
        ...(input.HomeRegion !== undefined && input.HomeRegion !== null && { HomeRegion: input.HomeRegion }),
        ...(input.Issuer !== undefined &&
            input.Issuer !== null && { Issuer: serializeAws_json1_1Issuer(input.Issuer, context) }),
        ...(input.LicenseMetadata !== undefined &&
            input.LicenseMetadata !== null && {
            LicenseMetadata: serializeAws_json1_1MetadataList(input.LicenseMetadata, context),
        }),
        ...(input.LicenseName !== undefined && input.LicenseName !== null && { LicenseName: input.LicenseName }),
        ...(input.ProductName !== undefined && input.ProductName !== null && { ProductName: input.ProductName }),
        ...(input.ProductSKU !== undefined && input.ProductSKU !== null && { ProductSKU: input.ProductSKU }),
        ...(input.Validity !== undefined &&
            input.Validity !== null && { Validity: serializeAws_json1_1DatetimeRange(input.Validity, context) }),
    };
};
const serializeAws_json1_1CreateLicenseVersionRequest = (input, context) => {
    return {
        ...(input.ClientToken !== undefined && input.ClientToken !== null && { ClientToken: input.ClientToken }),
        ...(input.ConsumptionConfiguration !== undefined &&
            input.ConsumptionConfiguration !== null && {
            ConsumptionConfiguration: serializeAws_json1_1ConsumptionConfiguration(input.ConsumptionConfiguration, context),
        }),
        ...(input.Entitlements !== undefined &&
            input.Entitlements !== null && {
            Entitlements: serializeAws_json1_1EntitlementList(input.Entitlements, context),
        }),
        ...(input.HomeRegion !== undefined && input.HomeRegion !== null && { HomeRegion: input.HomeRegion }),
        ...(input.Issuer !== undefined &&
            input.Issuer !== null && { Issuer: serializeAws_json1_1Issuer(input.Issuer, context) }),
        ...(input.LicenseArn !== undefined && input.LicenseArn !== null && { LicenseArn: input.LicenseArn }),
        ...(input.LicenseMetadata !== undefined &&
            input.LicenseMetadata !== null && {
            LicenseMetadata: serializeAws_json1_1MetadataList(input.LicenseMetadata, context),
        }),
        ...(input.LicenseName !== undefined && input.LicenseName !== null && { LicenseName: input.LicenseName }),
        ...(input.ProductName !== undefined && input.ProductName !== null && { ProductName: input.ProductName }),
        ...(input.SourceVersion !== undefined && input.SourceVersion !== null && { SourceVersion: input.SourceVersion }),
        ...(input.Status !== undefined && input.Status !== null && { Status: input.Status }),
        ...(input.Validity !== undefined &&
            input.Validity !== null && { Validity: serializeAws_json1_1DatetimeRange(input.Validity, context) }),
    };
};
const serializeAws_json1_1CreateTokenRequest = (input, context) => {
    return {
        ...(input.ClientToken !== undefined && input.ClientToken !== null && { ClientToken: input.ClientToken }),
        ...(input.ExpirationInDays !== undefined &&
            input.ExpirationInDays !== null && { ExpirationInDays: input.ExpirationInDays }),
        ...(input.LicenseArn !== undefined && input.LicenseArn !== null && { LicenseArn: input.LicenseArn }),
        ...(input.RoleArns !== undefined &&
            input.RoleArns !== null && { RoleArns: serializeAws_json1_1ArnList(input.RoleArns, context) }),
        ...(input.TokenProperties !== undefined &&
            input.TokenProperties !== null && {
            TokenProperties: serializeAws_json1_1MaxSize3StringList(input.TokenProperties, context),
        }),
    };
};
const serializeAws_json1_1DatetimeRange = (input, context) => {
    return {
        ...(input.Begin !== undefined && input.Begin !== null && { Begin: input.Begin }),
        ...(input.End !== undefined && input.End !== null && { End: input.End }),
    };
};
const serializeAws_json1_1DeleteGrantRequest = (input, context) => {
    return {
        ...(input.GrantArn !== undefined && input.GrantArn !== null && { GrantArn: input.GrantArn }),
        ...(input.Version !== undefined && input.Version !== null && { Version: input.Version }),
    };
};
const serializeAws_json1_1DeleteLicenseConfigurationRequest = (input, context) => {
    return {
        ...(input.LicenseConfigurationArn !== undefined &&
            input.LicenseConfigurationArn !== null && { LicenseConfigurationArn: input.LicenseConfigurationArn }),
    };
};
const serializeAws_json1_1DeleteLicenseManagerReportGeneratorRequest = (input, context) => {
    return {
        ...(input.LicenseManagerReportGeneratorArn !== undefined &&
            input.LicenseManagerReportGeneratorArn !== null && {
            LicenseManagerReportGeneratorArn: input.LicenseManagerReportGeneratorArn,
        }),
    };
};
const serializeAws_json1_1DeleteLicenseRequest = (input, context) => {
    return {
        ...(input.LicenseArn !== undefined && input.LicenseArn !== null && { LicenseArn: input.LicenseArn }),
        ...(input.SourceVersion !== undefined && input.SourceVersion !== null && { SourceVersion: input.SourceVersion }),
    };
};
const serializeAws_json1_1DeleteTokenRequest = (input, context) => {
    return {
        ...(input.TokenId !== undefined && input.TokenId !== null && { TokenId: input.TokenId }),
    };
};
const serializeAws_json1_1Entitlement = (input, context) => {
    return {
        ...(input.AllowCheckIn !== undefined && input.AllowCheckIn !== null && { AllowCheckIn: input.AllowCheckIn }),
        ...(input.MaxCount !== undefined && input.MaxCount !== null && { MaxCount: input.MaxCount }),
        ...(input.Name !== undefined && input.Name !== null && { Name: input.Name }),
        ...(input.Overage !== undefined && input.Overage !== null && { Overage: input.Overage }),
        ...(input.Unit !== undefined && input.Unit !== null && { Unit: input.Unit }),
        ...(input.Value !== undefined && input.Value !== null && { Value: input.Value }),
    };
};
const serializeAws_json1_1EntitlementData = (input, context) => {
    return {
        ...(input.Name !== undefined && input.Name !== null && { Name: input.Name }),
        ...(input.Unit !== undefined && input.Unit !== null && { Unit: input.Unit }),
        ...(input.Value !== undefined && input.Value !== null && { Value: input.Value }),
    };
};
const serializeAws_json1_1EntitlementDataList = (input, context) => {
    return input
        .filter((e) => e != null)
        .map((entry) => {
        if (entry === null) {
            return null;
        }
        return serializeAws_json1_1EntitlementData(entry, context);
    });
};
const serializeAws_json1_1EntitlementList = (input, context) => {
    return input
        .filter((e) => e != null)
        .map((entry) => {
        if (entry === null) {
            return null;
        }
        return serializeAws_json1_1Entitlement(entry, context);
    });
};
const serializeAws_json1_1ExtendLicenseConsumptionRequest = (input, context) => {
    return {
        ...(input.DryRun !== undefined && input.DryRun !== null && { DryRun: input.DryRun }),
        ...(input.LicenseConsumptionToken !== undefined &&
            input.LicenseConsumptionToken !== null && { LicenseConsumptionToken: input.LicenseConsumptionToken }),
    };
};
const serializeAws_json1_1Filter = (input, context) => {
    return {
        ...(input.Name !== undefined && input.Name !== null && { Name: input.Name }),
        ...(input.Values !== undefined &&
            input.Values !== null && { Values: serializeAws_json1_1FilterValues(input.Values, context) }),
    };
};
const serializeAws_json1_1FilterList = (input, context) => {
    return input
        .filter((e) => e != null)
        .map((entry) => {
        if (entry === null) {
            return null;
        }
        return serializeAws_json1_1Filter(entry, context);
    });
};
const serializeAws_json1_1Filters = (input, context) => {
    return input
        .filter((e) => e != null)
        .map((entry) => {
        if (entry === null) {
            return null;
        }
        return serializeAws_json1_1Filter(entry, context);
    });
};
const serializeAws_json1_1FilterValues = (input, context) => {
    return input
        .filter((e) => e != null)
        .map((entry) => {
        if (entry === null) {
            return null;
        }
        return entry;
    });
};
const serializeAws_json1_1GetAccessTokenRequest = (input, context) => {
    return {
        ...(input.Token !== undefined && input.Token !== null && { Token: input.Token }),
        ...(input.TokenProperties !== undefined &&
            input.TokenProperties !== null && {
            TokenProperties: serializeAws_json1_1MaxSize3StringList(input.TokenProperties, context),
        }),
    };
};
const serializeAws_json1_1GetGrantRequest = (input, context) => {
    return {
        ...(input.GrantArn !== undefined && input.GrantArn !== null && { GrantArn: input.GrantArn }),
        ...(input.Version !== undefined && input.Version !== null && { Version: input.Version }),
    };
};
const serializeAws_json1_1GetLicenseConfigurationRequest = (input, context) => {
    return {
        ...(input.LicenseConfigurationArn !== undefined &&
            input.LicenseConfigurationArn !== null && { LicenseConfigurationArn: input.LicenseConfigurationArn }),
    };
};
const serializeAws_json1_1GetLicenseManagerReportGeneratorRequest = (input, context) => {
    return {
        ...(input.LicenseManagerReportGeneratorArn !== undefined &&
            input.LicenseManagerReportGeneratorArn !== null && {
            LicenseManagerReportGeneratorArn: input.LicenseManagerReportGeneratorArn,
        }),
    };
};
const serializeAws_json1_1GetLicenseRequest = (input, context) => {
    return {
        ...(input.LicenseArn !== undefined && input.LicenseArn !== null && { LicenseArn: input.LicenseArn }),
        ...(input.Version !== undefined && input.Version !== null && { Version: input.Version }),
    };
};
const serializeAws_json1_1GetLicenseUsageRequest = (input, context) => {
    return {
        ...(input.LicenseArn !== undefined && input.LicenseArn !== null && { LicenseArn: input.LicenseArn }),
    };
};
const serializeAws_json1_1GetServiceSettingsRequest = (input, context) => {
    return {};
};
const serializeAws_json1_1InventoryFilter = (input, context) => {
    return {
        ...(input.Condition !== undefined && input.Condition !== null && { Condition: input.Condition }),
        ...(input.Name !== undefined && input.Name !== null && { Name: input.Name }),
        ...(input.Value !== undefined && input.Value !== null && { Value: input.Value }),
    };
};
const serializeAws_json1_1InventoryFilterList = (input, context) => {
    return input
        .filter((e) => e != null)
        .map((entry) => {
        if (entry === null) {
            return null;
        }
        return serializeAws_json1_1InventoryFilter(entry, context);
    });
};
const serializeAws_json1_1Issuer = (input, context) => {
    return {
        ...(input.Name !== undefined && input.Name !== null && { Name: input.Name }),
        ...(input.SignKey !== undefined && input.SignKey !== null && { SignKey: input.SignKey }),
    };
};
const serializeAws_json1_1LicenseSpecification = (input, context) => {
    return {
        ...(input.AmiAssociationScope !== undefined &&
            input.AmiAssociationScope !== null && { AmiAssociationScope: input.AmiAssociationScope }),
        ...(input.LicenseConfigurationArn !== undefined &&
            input.LicenseConfigurationArn !== null && { LicenseConfigurationArn: input.LicenseConfigurationArn }),
    };
};
const serializeAws_json1_1LicenseSpecifications = (input, context) => {
    return input
        .filter((e) => e != null)
        .map((entry) => {
        if (entry === null) {
            return null;
        }
        return serializeAws_json1_1LicenseSpecification(entry, context);
    });
};
const serializeAws_json1_1ListAssociationsForLicenseConfigurationRequest = (input, context) => {
    return {
        ...(input.LicenseConfigurationArn !== undefined &&
            input.LicenseConfigurationArn !== null && { LicenseConfigurationArn: input.LicenseConfigurationArn }),
        ...(input.MaxResults !== undefined && input.MaxResults !== null && { MaxResults: input.MaxResults }),
        ...(input.NextToken !== undefined && input.NextToken !== null && { NextToken: input.NextToken }),
    };
};
const serializeAws_json1_1ListDistributedGrantsRequest = (input, context) => {
    return {
        ...(input.Filters !== undefined &&
            input.Filters !== null && { Filters: serializeAws_json1_1FilterList(input.Filters, context) }),
        ...(input.GrantArns !== undefined &&
            input.GrantArns !== null && { GrantArns: serializeAws_json1_1ArnList(input.GrantArns, context) }),
        ...(input.MaxResults !== undefined && input.MaxResults !== null && { MaxResults: input.MaxResults }),
        ...(input.NextToken !== undefined && input.NextToken !== null && { NextToken: input.NextToken }),
    };
};
const serializeAws_json1_1ListFailuresForLicenseConfigurationOperationsRequest = (input, context) => {
    return {
        ...(input.LicenseConfigurationArn !== undefined &&
            input.LicenseConfigurationArn !== null && { LicenseConfigurationArn: input.LicenseConfigurationArn }),
        ...(input.MaxResults !== undefined && input.MaxResults !== null && { MaxResults: input.MaxResults }),
        ...(input.NextToken !== undefined && input.NextToken !== null && { NextToken: input.NextToken }),
    };
};
const serializeAws_json1_1ListLicenseConfigurationsRequest = (input, context) => {
    return {
        ...(input.Filters !== undefined &&
            input.Filters !== null && { Filters: serializeAws_json1_1Filters(input.Filters, context) }),
        ...(input.LicenseConfigurationArns !== undefined &&
            input.LicenseConfigurationArns !== null && {
            LicenseConfigurationArns: serializeAws_json1_1StringList(input.LicenseConfigurationArns, context),
        }),
        ...(input.MaxResults !== undefined && input.MaxResults !== null && { MaxResults: input.MaxResults }),
        ...(input.NextToken !== undefined && input.NextToken !== null && { NextToken: input.NextToken }),
    };
};
const serializeAws_json1_1ListLicenseManagerReportGeneratorsRequest = (input, context) => {
    return {
        ...(input.Filters !== undefined &&
            input.Filters !== null && { Filters: serializeAws_json1_1FilterList(input.Filters, context) }),
        ...(input.MaxResults !== undefined && input.MaxResults !== null && { MaxResults: input.MaxResults }),
        ...(input.NextToken !== undefined && input.NextToken !== null && { NextToken: input.NextToken }),
    };
};
const serializeAws_json1_1ListLicenseSpecificationsForResourceRequest = (input, context) => {
    return {
        ...(input.MaxResults !== undefined && input.MaxResults !== null && { MaxResults: input.MaxResults }),
        ...(input.NextToken !== undefined && input.NextToken !== null && { NextToken: input.NextToken }),
        ...(input.ResourceArn !== undefined && input.ResourceArn !== null && { ResourceArn: input.ResourceArn }),
    };
};
const serializeAws_json1_1ListLicensesRequest = (input, context) => {
    return {
        ...(input.Filters !== undefined &&
            input.Filters !== null && { Filters: serializeAws_json1_1FilterList(input.Filters, context) }),
        ...(input.LicenseArns !== undefined &&
            input.LicenseArns !== null && { LicenseArns: serializeAws_json1_1ArnList(input.LicenseArns, context) }),
        ...(input.MaxResults !== undefined && input.MaxResults !== null && { MaxResults: input.MaxResults }),
        ...(input.NextToken !== undefined && input.NextToken !== null && { NextToken: input.NextToken }),
    };
};
const serializeAws_json1_1ListLicenseVersionsRequest = (input, context) => {
    return {
        ...(input.LicenseArn !== undefined && input.LicenseArn !== null && { LicenseArn: input.LicenseArn }),
        ...(input.MaxResults !== undefined && input.MaxResults !== null && { MaxResults: input.MaxResults }),
        ...(input.NextToken !== undefined && input.NextToken !== null && { NextToken: input.NextToken }),
    };
};
const serializeAws_json1_1ListReceivedGrantsRequest = (input, context) => {
    return {
        ...(input.Filters !== undefined &&
            input.Filters !== null && { Filters: serializeAws_json1_1FilterList(input.Filters, context) }),
        ...(input.GrantArns !== undefined &&
            input.GrantArns !== null && { GrantArns: serializeAws_json1_1ArnList(input.GrantArns, context) }),
        ...(input.MaxResults !== undefined && input.MaxResults !== null && { MaxResults: input.MaxResults }),
        ...(input.NextToken !== undefined && input.NextToken !== null && { NextToken: input.NextToken }),
    };
};
const serializeAws_json1_1ListReceivedLicensesRequest = (input, context) => {
    return {
        ...(input.Filters !== undefined &&
            input.Filters !== null && { Filters: serializeAws_json1_1FilterList(input.Filters, context) }),
        ...(input.LicenseArns !== undefined &&
            input.LicenseArns !== null && { LicenseArns: serializeAws_json1_1ArnList(input.LicenseArns, context) }),
        ...(input.MaxResults !== undefined && input.MaxResults !== null && { MaxResults: input.MaxResults }),
        ...(input.NextToken !== undefined && input.NextToken !== null && { NextToken: input.NextToken }),
    };
};
const serializeAws_json1_1ListResourceInventoryRequest = (input, context) => {
    return {
        ...(input.Filters !== undefined &&
            input.Filters !== null && { Filters: serializeAws_json1_1InventoryFilterList(input.Filters, context) }),
        ...(input.MaxResults !== undefined && input.MaxResults !== null && { MaxResults: input.MaxResults }),
        ...(input.NextToken !== undefined && input.NextToken !== null && { NextToken: input.NextToken }),
    };
};
const serializeAws_json1_1ListTagsForResourceRequest = (input, context) => {
    return {
        ...(input.ResourceArn !== undefined && input.ResourceArn !== null && { ResourceArn: input.ResourceArn }),
    };
};
const serializeAws_json1_1ListTokensRequest = (input, context) => {
    return {
        ...(input.Filters !== undefined &&
            input.Filters !== null && { Filters: serializeAws_json1_1FilterList(input.Filters, context) }),
        ...(input.MaxResults !== undefined && input.MaxResults !== null && { MaxResults: input.MaxResults }),
        ...(input.NextToken !== undefined && input.NextToken !== null && { NextToken: input.NextToken }),
        ...(input.TokenIds !== undefined &&
            input.TokenIds !== null && { TokenIds: serializeAws_json1_1StringList(input.TokenIds, context) }),
    };
};
const serializeAws_json1_1ListUsageForLicenseConfigurationRequest = (input, context) => {
    return {
        ...(input.Filters !== undefined &&
            input.Filters !== null && { Filters: serializeAws_json1_1Filters(input.Filters, context) }),
        ...(input.LicenseConfigurationArn !== undefined &&
            input.LicenseConfigurationArn !== null && { LicenseConfigurationArn: input.LicenseConfigurationArn }),
        ...(input.MaxResults !== undefined && input.MaxResults !== null && { MaxResults: input.MaxResults }),
        ...(input.NextToken !== undefined && input.NextToken !== null && { NextToken: input.NextToken }),
    };
};
const serializeAws_json1_1MaxSize3StringList = (input, context) => {
    return input
        .filter((e) => e != null)
        .map((entry) => {
        if (entry === null) {
            return null;
        }
        return entry;
    });
};
const serializeAws_json1_1Metadata = (input, context) => {
    return {
        ...(input.Name !== undefined && input.Name !== null && { Name: input.Name }),
        ...(input.Value !== undefined && input.Value !== null && { Value: input.Value }),
    };
};
const serializeAws_json1_1MetadataList = (input, context) => {
    return input
        .filter((e) => e != null)
        .map((entry) => {
        if (entry === null) {
            return null;
        }
        return serializeAws_json1_1Metadata(entry, context);
    });
};
const serializeAws_json1_1OrganizationConfiguration = (input, context) => {
    return {
        ...(input.EnableIntegration !== undefined &&
            input.EnableIntegration !== null && { EnableIntegration: input.EnableIntegration }),
    };
};
const serializeAws_json1_1PrincipalArnList = (input, context) => {
    return input
        .filter((e) => e != null)
        .map((entry) => {
        if (entry === null) {
            return null;
        }
        return entry;
    });
};
const serializeAws_json1_1ProductInformation = (input, context) => {
    return {
        ...(input.ProductInformationFilterList !== undefined &&
            input.ProductInformationFilterList !== null && {
            ProductInformationFilterList: serializeAws_json1_1ProductInformationFilterList(input.ProductInformationFilterList, context),
        }),
        ...(input.ResourceType !== undefined && input.ResourceType !== null && { ResourceType: input.ResourceType }),
    };
};
const serializeAws_json1_1ProductInformationFilter = (input, context) => {
    return {
        ...(input.ProductInformationFilterComparator !== undefined &&
            input.ProductInformationFilterComparator !== null && {
            ProductInformationFilterComparator: input.ProductInformationFilterComparator,
        }),
        ...(input.ProductInformationFilterName !== undefined &&
            input.ProductInformationFilterName !== null && {
            ProductInformationFilterName: input.ProductInformationFilterName,
        }),
        ...(input.ProductInformationFilterValue !== undefined &&
            input.ProductInformationFilterValue !== null && {
            ProductInformationFilterValue: serializeAws_json1_1StringList(input.ProductInformationFilterValue, context),
        }),
    };
};
const serializeAws_json1_1ProductInformationFilterList = (input, context) => {
    return input
        .filter((e) => e != null)
        .map((entry) => {
        if (entry === null) {
            return null;
        }
        return serializeAws_json1_1ProductInformationFilter(entry, context);
    });
};
const serializeAws_json1_1ProductInformationList = (input, context) => {
    return input
        .filter((e) => e != null)
        .map((entry) => {
        if (entry === null) {
            return null;
        }
        return serializeAws_json1_1ProductInformation(entry, context);
    });
};
const serializeAws_json1_1ProvisionalConfiguration = (input, context) => {
    return {
        ...(input.MaxTimeToLiveInMinutes !== undefined &&
            input.MaxTimeToLiveInMinutes !== null && { MaxTimeToLiveInMinutes: input.MaxTimeToLiveInMinutes }),
    };
};
const serializeAws_json1_1RejectGrantRequest = (input, context) => {
    return {
        ...(input.GrantArn !== undefined && input.GrantArn !== null && { GrantArn: input.GrantArn }),
    };
};
const serializeAws_json1_1ReportContext = (input, context) => {
    return {
        ...(input.licenseConfigurationArns !== undefined &&
            input.licenseConfigurationArns !== null && {
            licenseConfigurationArns: serializeAws_json1_1ArnList(input.licenseConfigurationArns, context),
        }),
    };
};
const serializeAws_json1_1ReportFrequency = (input, context) => {
    return {
        ...(input.period !== undefined && input.period !== null && { period: input.period }),
        ...(input.value !== undefined && input.value !== null && { value: input.value }),
    };
};
const serializeAws_json1_1ReportTypeList = (input, context) => {
    return input
        .filter((e) => e != null)
        .map((entry) => {
        if (entry === null) {
            return null;
        }
        return entry;
    });
};
const serializeAws_json1_1StringList = (input, context) => {
    return input
        .filter((e) => e != null)
        .map((entry) => {
        if (entry === null) {
            return null;
        }
        return entry;
    });
};
const serializeAws_json1_1Tag = (input, context) => {
    return {
        ...(input.Key !== undefined && input.Key !== null && { Key: input.Key }),
        ...(input.Value !== undefined && input.Value !== null && { Value: input.Value }),
    };
};
const serializeAws_json1_1TagKeyList = (input, context) => {
    return input
        .filter((e) => e != null)
        .map((entry) => {
        if (entry === null) {
            return null;
        }
        return entry;
    });
};
const serializeAws_json1_1TagList = (input, context) => {
    return input
        .filter((e) => e != null)
        .map((entry) => {
        if (entry === null) {
            return null;
        }
        return serializeAws_json1_1Tag(entry, context);
    });
};
const serializeAws_json1_1TagResourceRequest = (input, context) => {
    return {
        ...(input.ResourceArn !== undefined && input.ResourceArn !== null && { ResourceArn: input.ResourceArn }),
        ...(input.Tags !== undefined && input.Tags !== null && { Tags: serializeAws_json1_1TagList(input.Tags, context) }),
    };
};
const serializeAws_json1_1UntagResourceRequest = (input, context) => {
    return {
        ...(input.ResourceArn !== undefined && input.ResourceArn !== null && { ResourceArn: input.ResourceArn }),
        ...(input.TagKeys !== undefined &&
            input.TagKeys !== null && { TagKeys: serializeAws_json1_1TagKeyList(input.TagKeys, context) }),
    };
};
const serializeAws_json1_1UpdateLicenseConfigurationRequest = (input, context) => {
    return {
        ...(input.Description !== undefined && input.Description !== null && { Description: input.Description }),
        ...(input.DisassociateWhenNotFound !== undefined &&
            input.DisassociateWhenNotFound !== null && { DisassociateWhenNotFound: input.DisassociateWhenNotFound }),
        ...(input.LicenseConfigurationArn !== undefined &&
            input.LicenseConfigurationArn !== null && { LicenseConfigurationArn: input.LicenseConfigurationArn }),
        ...(input.LicenseConfigurationStatus !== undefined &&
            input.LicenseConfigurationStatus !== null && { LicenseConfigurationStatus: input.LicenseConfigurationStatus }),
        ...(input.LicenseCount !== undefined && input.LicenseCount !== null && { LicenseCount: input.LicenseCount }),
        ...(input.LicenseCountHardLimit !== undefined &&
            input.LicenseCountHardLimit !== null && { LicenseCountHardLimit: input.LicenseCountHardLimit }),
        ...(input.LicenseRules !== undefined &&
            input.LicenseRules !== null && { LicenseRules: serializeAws_json1_1StringList(input.LicenseRules, context) }),
        ...(input.Name !== undefined && input.Name !== null && { Name: input.Name }),
        ...(input.ProductInformationList !== undefined &&
            input.ProductInformationList !== null && {
            ProductInformationList: serializeAws_json1_1ProductInformationList(input.ProductInformationList, context),
        }),
    };
};
const serializeAws_json1_1UpdateLicenseManagerReportGeneratorRequest = (input, context) => {
    return {
        ...(input.ClientToken !== undefined && input.ClientToken !== null && { ClientToken: input.ClientToken }),
        ...(input.Description !== undefined && input.Description !== null && { Description: input.Description }),
        ...(input.LicenseManagerReportGeneratorArn !== undefined &&
            input.LicenseManagerReportGeneratorArn !== null && {
            LicenseManagerReportGeneratorArn: input.LicenseManagerReportGeneratorArn,
        }),
        ...(input.ReportContext !== undefined &&
            input.ReportContext !== null && {
            ReportContext: serializeAws_json1_1ReportContext(input.ReportContext, context),
        }),
        ...(input.ReportFrequency !== undefined &&
            input.ReportFrequency !== null && {
            ReportFrequency: serializeAws_json1_1ReportFrequency(input.ReportFrequency, context),
        }),
        ...(input.ReportGeneratorName !== undefined &&
            input.ReportGeneratorName !== null && { ReportGeneratorName: input.ReportGeneratorName }),
        ...(input.Type !== undefined &&
            input.Type !== null && { Type: serializeAws_json1_1ReportTypeList(input.Type, context) }),
    };
};
const serializeAws_json1_1UpdateLicenseSpecificationsForResourceRequest = (input, context) => {
    return {
        ...(input.AddLicenseSpecifications !== undefined &&
            input.AddLicenseSpecifications !== null && {
            AddLicenseSpecifications: serializeAws_json1_1LicenseSpecifications(input.AddLicenseSpecifications, context),
        }),
        ...(input.RemoveLicenseSpecifications !== undefined &&
            input.RemoveLicenseSpecifications !== null && {
            RemoveLicenseSpecifications: serializeAws_json1_1LicenseSpecifications(input.RemoveLicenseSpecifications, context),
        }),
        ...(input.ResourceArn !== undefined && input.ResourceArn !== null && { ResourceArn: input.ResourceArn }),
    };
};
const serializeAws_json1_1UpdateServiceSettingsRequest = (input, context) => {
    return {
        ...(input.EnableCrossAccountsDiscovery !== undefined &&
            input.EnableCrossAccountsDiscovery !== null && {
            EnableCrossAccountsDiscovery: input.EnableCrossAccountsDiscovery,
        }),
        ...(input.OrganizationConfiguration !== undefined &&
            input.OrganizationConfiguration !== null && {
            OrganizationConfiguration: serializeAws_json1_1OrganizationConfiguration(input.OrganizationConfiguration, context),
        }),
        ...(input.S3BucketArn !== undefined && input.S3BucketArn !== null && { S3BucketArn: input.S3BucketArn }),
        ...(input.SnsTopicArn !== undefined && input.SnsTopicArn !== null && { SnsTopicArn: input.SnsTopicArn }),
    };
};
const deserializeAws_json1_1AcceptGrantResponse = (output, context) => {
    return {
        GrantArn: output.GrantArn !== undefined && output.GrantArn !== null ? output.GrantArn : undefined,
        Status: output.Status !== undefined && output.Status !== null ? output.Status : undefined,
        Version: output.Version !== undefined && output.Version !== null ? output.Version : undefined,
    };
};
const deserializeAws_json1_1AccessDeniedException = (output, context) => {
    return {
        Message: output.Message !== undefined && output.Message !== null ? output.Message : undefined,
    };
};
const deserializeAws_json1_1AllowedOperationList = (output, context) => {
    return (output || [])
        .filter((e) => e != null)
        .map((entry) => {
        if (entry === null) {
            return null;
        }
        return entry;
    });
};
const deserializeAws_json1_1ArnList = (output, context) => {
    return (output || [])
        .filter((e) => e != null)
        .map((entry) => {
        if (entry === null) {
            return null;
        }
        return entry;
    });
};
const deserializeAws_json1_1AuthorizationException = (output, context) => {
    return {
        Message: output.Message !== undefined && output.Message !== null ? output.Message : undefined,
    };
};
const deserializeAws_json1_1AutomatedDiscoveryInformation = (output, context) => {
    return {
        LastRunTime: output.LastRunTime !== undefined && output.LastRunTime !== null
            ? new Date(Math.round(output.LastRunTime * 1000))
            : undefined,
    };
};
const deserializeAws_json1_1BorrowConfiguration = (output, context) => {
    return {
        AllowEarlyCheckIn: output.AllowEarlyCheckIn !== undefined && output.AllowEarlyCheckIn !== null
            ? output.AllowEarlyCheckIn
            : undefined,
        MaxTimeToLiveInMinutes: output.MaxTimeToLiveInMinutes !== undefined && output.MaxTimeToLiveInMinutes !== null
            ? output.MaxTimeToLiveInMinutes
            : undefined,
    };
};
const deserializeAws_json1_1CheckInLicenseResponse = (output, context) => {
    return {};
};
const deserializeAws_json1_1CheckoutBorrowLicenseResponse = (output, context) => {
    return {
        CheckoutMetadata: output.CheckoutMetadata !== undefined && output.CheckoutMetadata !== null
            ? deserializeAws_json1_1MetadataList(output.CheckoutMetadata, context)
            : undefined,
        EntitlementsAllowed: output.EntitlementsAllowed !== undefined && output.EntitlementsAllowed !== null
            ? deserializeAws_json1_1EntitlementDataList(output.EntitlementsAllowed, context)
            : undefined,
        Expiration: output.Expiration !== undefined && output.Expiration !== null ? output.Expiration : undefined,
        IssuedAt: output.IssuedAt !== undefined && output.IssuedAt !== null ? output.IssuedAt : undefined,
        LicenseArn: output.LicenseArn !== undefined && output.LicenseArn !== null ? output.LicenseArn : undefined,
        LicenseConsumptionToken: output.LicenseConsumptionToken !== undefined && output.LicenseConsumptionToken !== null
            ? output.LicenseConsumptionToken
            : undefined,
        NodeId: output.NodeId !== undefined && output.NodeId !== null ? output.NodeId : undefined,
        SignedToken: output.SignedToken !== undefined && output.SignedToken !== null ? output.SignedToken : undefined,
    };
};
const deserializeAws_json1_1CheckoutLicenseResponse = (output, context) => {
    return {
        CheckoutType: output.CheckoutType !== undefined && output.CheckoutType !== null ? output.CheckoutType : undefined,
        EntitlementsAllowed: output.EntitlementsAllowed !== undefined && output.EntitlementsAllowed !== null
            ? deserializeAws_json1_1EntitlementDataList(output.EntitlementsAllowed, context)
            : undefined,
        Expiration: output.Expiration !== undefined && output.Expiration !== null ? output.Expiration : undefined,
        IssuedAt: output.IssuedAt !== undefined && output.IssuedAt !== null ? output.IssuedAt : undefined,
        LicenseConsumptionToken: output.LicenseConsumptionToken !== undefined && output.LicenseConsumptionToken !== null
            ? output.LicenseConsumptionToken
            : undefined,
        NodeId: output.NodeId !== undefined && output.NodeId !== null ? output.NodeId : undefined,
        SignedToken: output.SignedToken !== undefined && output.SignedToken !== null ? output.SignedToken : undefined,
    };
};
const deserializeAws_json1_1ConflictException = (output, context) => {
    return {
        Message: output.Message !== undefined && output.Message !== null ? output.Message : undefined,
    };
};
const deserializeAws_json1_1ConsumedLicenseSummary = (output, context) => {
    return {
        ConsumedLicenses: output.ConsumedLicenses !== undefined && output.ConsumedLicenses !== null ? output.ConsumedLicenses : undefined,
        ResourceType: output.ResourceType !== undefined && output.ResourceType !== null ? output.ResourceType : undefined,
    };
};
const deserializeAws_json1_1ConsumedLicenseSummaryList = (output, context) => {
    return (output || [])
        .filter((e) => e != null)
        .map((entry) => {
        if (entry === null) {
            return null;
        }
        return deserializeAws_json1_1ConsumedLicenseSummary(entry, context);
    });
};
const deserializeAws_json1_1ConsumptionConfiguration = (output, context) => {
    return {
        BorrowConfiguration: output.BorrowConfiguration !== undefined && output.BorrowConfiguration !== null
            ? deserializeAws_json1_1BorrowConfiguration(output.BorrowConfiguration, context)
            : undefined,
        ProvisionalConfiguration: output.ProvisionalConfiguration !== undefined && output.ProvisionalConfiguration !== null
            ? deserializeAws_json1_1ProvisionalConfiguration(output.ProvisionalConfiguration, context)
            : undefined,
        RenewType: output.RenewType !== undefined && output.RenewType !== null ? output.RenewType : undefined,
    };
};
const deserializeAws_json1_1CreateGrantResponse = (output, context) => {
    return {
        GrantArn: output.GrantArn !== undefined && output.GrantArn !== null ? output.GrantArn : undefined,
        Status: output.Status !== undefined && output.Status !== null ? output.Status : undefined,
        Version: output.Version !== undefined && output.Version !== null ? output.Version : undefined,
    };
};
const deserializeAws_json1_1CreateGrantVersionResponse = (output, context) => {
    return {
        GrantArn: output.GrantArn !== undefined && output.GrantArn !== null ? output.GrantArn : undefined,
        Status: output.Status !== undefined && output.Status !== null ? output.Status : undefined,
        Version: output.Version !== undefined && output.Version !== null ? output.Version : undefined,
    };
};
const deserializeAws_json1_1CreateLicenseConfigurationResponse = (output, context) => {
    return {
        LicenseConfigurationArn: output.LicenseConfigurationArn !== undefined && output.LicenseConfigurationArn !== null
            ? output.LicenseConfigurationArn
            : undefined,
    };
};
const deserializeAws_json1_1CreateLicenseManagerReportGeneratorResponse = (output, context) => {
    return {
        LicenseManagerReportGeneratorArn: output.LicenseManagerReportGeneratorArn !== undefined && output.LicenseManagerReportGeneratorArn !== null
            ? output.LicenseManagerReportGeneratorArn
            : undefined,
    };
};
const deserializeAws_json1_1CreateLicenseResponse = (output, context) => {
    return {
        LicenseArn: output.LicenseArn !== undefined && output.LicenseArn !== null ? output.LicenseArn : undefined,
        Status: output.Status !== undefined && output.Status !== null ? output.Status : undefined,
        Version: output.Version !== undefined && output.Version !== null ? output.Version : undefined,
    };
};
const deserializeAws_json1_1CreateLicenseVersionResponse = (output, context) => {
    return {
        LicenseArn: output.LicenseArn !== undefined && output.LicenseArn !== null ? output.LicenseArn : undefined,
        Status: output.Status !== undefined && output.Status !== null ? output.Status : undefined,
        Version: output.Version !== undefined && output.Version !== null ? output.Version : undefined,
    };
};
const deserializeAws_json1_1CreateTokenResponse = (output, context) => {
    return {
        Token: output.Token !== undefined && output.Token !== null ? output.Token : undefined,
        TokenId: output.TokenId !== undefined && output.TokenId !== null ? output.TokenId : undefined,
        TokenType: output.TokenType !== undefined && output.TokenType !== null ? output.TokenType : undefined,
    };
};
const deserializeAws_json1_1DatetimeRange = (output, context) => {
    return {
        Begin: output.Begin !== undefined && output.Begin !== null ? output.Begin : undefined,
        End: output.End !== undefined && output.End !== null ? output.End : undefined,
    };
};
const deserializeAws_json1_1DeleteGrantResponse = (output, context) => {
    return {
        GrantArn: output.GrantArn !== undefined && output.GrantArn !== null ? output.GrantArn : undefined,
        Status: output.Status !== undefined && output.Status !== null ? output.Status : undefined,
        Version: output.Version !== undefined && output.Version !== null ? output.Version : undefined,
    };
};
const deserializeAws_json1_1DeleteLicenseConfigurationResponse = (output, context) => {
    return {};
};
const deserializeAws_json1_1DeleteLicenseManagerReportGeneratorResponse = (output, context) => {
    return {};
};
const deserializeAws_json1_1DeleteLicenseResponse = (output, context) => {
    return {
        DeletionDate: output.DeletionDate !== undefined && output.DeletionDate !== null ? output.DeletionDate : undefined,
        Status: output.Status !== undefined && output.Status !== null ? output.Status : undefined,
    };
};
const deserializeAws_json1_1DeleteTokenResponse = (output, context) => {
    return {};
};
const deserializeAws_json1_1Entitlement = (output, context) => {
    return {
        AllowCheckIn: output.AllowCheckIn !== undefined && output.AllowCheckIn !== null ? output.AllowCheckIn : undefined,
        MaxCount: output.MaxCount !== undefined && output.MaxCount !== null ? output.MaxCount : undefined,
        Name: output.Name !== undefined && output.Name !== null ? output.Name : undefined,
        Overage: output.Overage !== undefined && output.Overage !== null ? output.Overage : undefined,
        Unit: output.Unit !== undefined && output.Unit !== null ? output.Unit : undefined,
        Value: output.Value !== undefined && output.Value !== null ? output.Value : undefined,
    };
};
const deserializeAws_json1_1EntitlementData = (output, context) => {
    return {
        Name: output.Name !== undefined && output.Name !== null ? output.Name : undefined,
        Unit: output.Unit !== undefined && output.Unit !== null ? output.Unit : undefined,
        Value: output.Value !== undefined && output.Value !== null ? output.Value : undefined,
    };
};
const deserializeAws_json1_1EntitlementDataList = (output, context) => {
    return (output || [])
        .filter((e) => e != null)
        .map((entry) => {
        if (entry === null) {
            return null;
        }
        return deserializeAws_json1_1EntitlementData(entry, context);
    });
};
const deserializeAws_json1_1EntitlementList = (output, context) => {
    return (output || [])
        .filter((e) => e != null)
        .map((entry) => {
        if (entry === null) {
            return null;
        }
        return deserializeAws_json1_1Entitlement(entry, context);
    });
};
const deserializeAws_json1_1EntitlementNotAllowedException = (output, context) => {
    return {
        Message: output.Message !== undefined && output.Message !== null ? output.Message : undefined,
    };
};
const deserializeAws_json1_1EntitlementUsage = (output, context) => {
    return {
        ConsumedValue: output.ConsumedValue !== undefined && output.ConsumedValue !== null ? output.ConsumedValue : undefined,
        MaxCount: output.MaxCount !== undefined && output.MaxCount !== null ? output.MaxCount : undefined,
        Name: output.Name !== undefined && output.Name !== null ? output.Name : undefined,
        Unit: output.Unit !== undefined && output.Unit !== null ? output.Unit : undefined,
    };
};
const deserializeAws_json1_1EntitlementUsageList = (output, context) => {
    return (output || [])
        .filter((e) => e != null)
        .map((entry) => {
        if (entry === null) {
            return null;
        }
        return deserializeAws_json1_1EntitlementUsage(entry, context);
    });
};
const deserializeAws_json1_1ExtendLicenseConsumptionResponse = (output, context) => {
    return {
        Expiration: output.Expiration !== undefined && output.Expiration !== null ? output.Expiration : undefined,
        LicenseConsumptionToken: output.LicenseConsumptionToken !== undefined && output.LicenseConsumptionToken !== null
            ? output.LicenseConsumptionToken
            : undefined,
    };
};
const deserializeAws_json1_1FailedDependencyException = (output, context) => {
    return {
        ErrorCode: output.ErrorCode !== undefined && output.ErrorCode !== null ? output.ErrorCode : undefined,
        Message: output.Message !== undefined && output.Message !== null ? output.Message : undefined,
    };
};
const deserializeAws_json1_1FilterLimitExceededException = (output, context) => {
    return {
        Message: output.Message !== undefined && output.Message !== null ? output.Message : undefined,
    };
};
const deserializeAws_json1_1GetAccessTokenResponse = (output, context) => {
    return {
        AccessToken: output.AccessToken !== undefined && output.AccessToken !== null ? output.AccessToken : undefined,
    };
};
const deserializeAws_json1_1GetGrantResponse = (output, context) => {
    return {
        Grant: output.Grant !== undefined && output.Grant !== null
            ? deserializeAws_json1_1Grant(output.Grant, context)
            : undefined,
    };
};
const deserializeAws_json1_1GetLicenseConfigurationResponse = (output, context) => {
    return {
        AutomatedDiscoveryInformation: output.AutomatedDiscoveryInformation !== undefined && output.AutomatedDiscoveryInformation !== null
            ? deserializeAws_json1_1AutomatedDiscoveryInformation(output.AutomatedDiscoveryInformation, context)
            : undefined,
        ConsumedLicenseSummaryList: output.ConsumedLicenseSummaryList !== undefined && output.ConsumedLicenseSummaryList !== null
            ? deserializeAws_json1_1ConsumedLicenseSummaryList(output.ConsumedLicenseSummaryList, context)
            : undefined,
        ConsumedLicenses: output.ConsumedLicenses !== undefined && output.ConsumedLicenses !== null ? output.ConsumedLicenses : undefined,
        Description: output.Description !== undefined && output.Description !== null ? output.Description : undefined,
        DisassociateWhenNotFound: output.DisassociateWhenNotFound !== undefined && output.DisassociateWhenNotFound !== null
            ? output.DisassociateWhenNotFound
            : undefined,
        LicenseConfigurationArn: output.LicenseConfigurationArn !== undefined && output.LicenseConfigurationArn !== null
            ? output.LicenseConfigurationArn
            : undefined,
        LicenseConfigurationId: output.LicenseConfigurationId !== undefined && output.LicenseConfigurationId !== null
            ? output.LicenseConfigurationId
            : undefined,
        LicenseCount: output.LicenseCount !== undefined && output.LicenseCount !== null ? output.LicenseCount : undefined,
        LicenseCountHardLimit: output.LicenseCountHardLimit !== undefined && output.LicenseCountHardLimit !== null
            ? output.LicenseCountHardLimit
            : undefined,
        LicenseCountingType: output.LicenseCountingType !== undefined && output.LicenseCountingType !== null
            ? output.LicenseCountingType
            : undefined,
        LicenseRules: output.LicenseRules !== undefined && output.LicenseRules !== null
            ? deserializeAws_json1_1StringList(output.LicenseRules, context)
            : undefined,
        ManagedResourceSummaryList: output.ManagedResourceSummaryList !== undefined && output.ManagedResourceSummaryList !== null
            ? deserializeAws_json1_1ManagedResourceSummaryList(output.ManagedResourceSummaryList, context)
            : undefined,
        Name: output.Name !== undefined && output.Name !== null ? output.Name : undefined,
        OwnerAccountId: output.OwnerAccountId !== undefined && output.OwnerAccountId !== null ? output.OwnerAccountId : undefined,
        ProductInformationList: output.ProductInformationList !== undefined && output.ProductInformationList !== null
            ? deserializeAws_json1_1ProductInformationList(output.ProductInformationList, context)
            : undefined,
        Status: output.Status !== undefined && output.Status !== null ? output.Status : undefined,
        Tags: output.Tags !== undefined && output.Tags !== null
            ? deserializeAws_json1_1TagList(output.Tags, context)
            : undefined,
    };
};
const deserializeAws_json1_1GetLicenseManagerReportGeneratorResponse = (output, context) => {
    return {
        ReportGenerator: output.ReportGenerator !== undefined && output.ReportGenerator !== null
            ? deserializeAws_json1_1ReportGenerator(output.ReportGenerator, context)
            : undefined,
    };
};
const deserializeAws_json1_1GetLicenseResponse = (output, context) => {
    return {
        License: output.License !== undefined && output.License !== null
            ? deserializeAws_json1_1License(output.License, context)
            : undefined,
    };
};
const deserializeAws_json1_1GetLicenseUsageResponse = (output, context) => {
    return {
        LicenseUsage: output.LicenseUsage !== undefined && output.LicenseUsage !== null
            ? deserializeAws_json1_1LicenseUsage(output.LicenseUsage, context)
            : undefined,
    };
};
const deserializeAws_json1_1GetServiceSettingsResponse = (output, context) => {
    return {
        EnableCrossAccountsDiscovery: output.EnableCrossAccountsDiscovery !== undefined && output.EnableCrossAccountsDiscovery !== null
            ? output.EnableCrossAccountsDiscovery
            : undefined,
        LicenseManagerResourceShareArn: output.LicenseManagerResourceShareArn !== undefined && output.LicenseManagerResourceShareArn !== null
            ? output.LicenseManagerResourceShareArn
            : undefined,
        OrganizationConfiguration: output.OrganizationConfiguration !== undefined && output.OrganizationConfiguration !== null
            ? deserializeAws_json1_1OrganizationConfiguration(output.OrganizationConfiguration, context)
            : undefined,
        S3BucketArn: output.S3BucketArn !== undefined && output.S3BucketArn !== null ? output.S3BucketArn : undefined,
        SnsTopicArn: output.SnsTopicArn !== undefined && output.SnsTopicArn !== null ? output.SnsTopicArn : undefined,
    };
};
const deserializeAws_json1_1Grant = (output, context) => {
    return {
        GrantArn: output.GrantArn !== undefined && output.GrantArn !== null ? output.GrantArn : undefined,
        GrantName: output.GrantName !== undefined && output.GrantName !== null ? output.GrantName : undefined,
        GrantStatus: output.GrantStatus !== undefined && output.GrantStatus !== null ? output.GrantStatus : undefined,
        GrantedOperations: output.GrantedOperations !== undefined && output.GrantedOperations !== null
            ? deserializeAws_json1_1AllowedOperationList(output.GrantedOperations, context)
            : undefined,
        GranteePrincipalArn: output.GranteePrincipalArn !== undefined && output.GranteePrincipalArn !== null
            ? output.GranteePrincipalArn
            : undefined,
        HomeRegion: output.HomeRegion !== undefined && output.HomeRegion !== null ? output.HomeRegion : undefined,
        LicenseArn: output.LicenseArn !== undefined && output.LicenseArn !== null ? output.LicenseArn : undefined,
        ParentArn: output.ParentArn !== undefined && output.ParentArn !== null ? output.ParentArn : undefined,
        StatusReason: output.StatusReason !== undefined && output.StatusReason !== null ? output.StatusReason : undefined,
        Version: output.Version !== undefined && output.Version !== null ? output.Version : undefined,
    };
};
const deserializeAws_json1_1GrantedLicense = (output, context) => {
    return {
        Beneficiary: output.Beneficiary !== undefined && output.Beneficiary !== null ? output.Beneficiary : undefined,
        ConsumptionConfiguration: output.ConsumptionConfiguration !== undefined && output.ConsumptionConfiguration !== null
            ? deserializeAws_json1_1ConsumptionConfiguration(output.ConsumptionConfiguration, context)
            : undefined,
        CreateTime: output.CreateTime !== undefined && output.CreateTime !== null ? output.CreateTime : undefined,
        Entitlements: output.Entitlements !== undefined && output.Entitlements !== null
            ? deserializeAws_json1_1EntitlementList(output.Entitlements, context)
            : undefined,
        HomeRegion: output.HomeRegion !== undefined && output.HomeRegion !== null ? output.HomeRegion : undefined,
        Issuer: output.Issuer !== undefined && output.Issuer !== null
            ? deserializeAws_json1_1IssuerDetails(output.Issuer, context)
            : undefined,
        LicenseArn: output.LicenseArn !== undefined && output.LicenseArn !== null ? output.LicenseArn : undefined,
        LicenseMetadata: output.LicenseMetadata !== undefined && output.LicenseMetadata !== null
            ? deserializeAws_json1_1MetadataList(output.LicenseMetadata, context)
            : undefined,
        LicenseName: output.LicenseName !== undefined && output.LicenseName !== null ? output.LicenseName : undefined,
        ProductName: output.ProductName !== undefined && output.ProductName !== null ? output.ProductName : undefined,
        ProductSKU: output.ProductSKU !== undefined && output.ProductSKU !== null ? output.ProductSKU : undefined,
        ReceivedMetadata: output.ReceivedMetadata !== undefined && output.ReceivedMetadata !== null
            ? deserializeAws_json1_1ReceivedMetadata(output.ReceivedMetadata, context)
            : undefined,
        Status: output.Status !== undefined && output.Status !== null ? output.Status : undefined,
        Validity: output.Validity !== undefined && output.Validity !== null
            ? deserializeAws_json1_1DatetimeRange(output.Validity, context)
            : undefined,
        Version: output.Version !== undefined && output.Version !== null ? output.Version : undefined,
    };
};
const deserializeAws_json1_1GrantedLicenseList = (output, context) => {
    return (output || [])
        .filter((e) => e != null)
        .map((entry) => {
        if (entry === null) {
            return null;
        }
        return deserializeAws_json1_1GrantedLicense(entry, context);
    });
};
const deserializeAws_json1_1GrantList = (output, context) => {
    return (output || [])
        .filter((e) => e != null)
        .map((entry) => {
        if (entry === null) {
            return null;
        }
        return deserializeAws_json1_1Grant(entry, context);
    });
};
const deserializeAws_json1_1InvalidParameterValueException = (output, context) => {
    return {
        Message: output.Message !== undefined && output.Message !== null ? output.Message : undefined,
    };
};
const deserializeAws_json1_1InvalidResourceStateException = (output, context) => {
    return {
        Message: output.Message !== undefined && output.Message !== null ? output.Message : undefined,
    };
};
const deserializeAws_json1_1IssuerDetails = (output, context) => {
    return {
        KeyFingerprint: output.KeyFingerprint !== undefined && output.KeyFingerprint !== null ? output.KeyFingerprint : undefined,
        Name: output.Name !== undefined && output.Name !== null ? output.Name : undefined,
        SignKey: output.SignKey !== undefined && output.SignKey !== null ? output.SignKey : undefined,
    };
};
const deserializeAws_json1_1License = (output, context) => {
    return {
        Beneficiary: output.Beneficiary !== undefined && output.Beneficiary !== null ? output.Beneficiary : undefined,
        ConsumptionConfiguration: output.ConsumptionConfiguration !== undefined && output.ConsumptionConfiguration !== null
            ? deserializeAws_json1_1ConsumptionConfiguration(output.ConsumptionConfiguration, context)
            : undefined,
        CreateTime: output.CreateTime !== undefined && output.CreateTime !== null ? output.CreateTime : undefined,
        Entitlements: output.Entitlements !== undefined && output.Entitlements !== null
            ? deserializeAws_json1_1EntitlementList(output.Entitlements, context)
            : undefined,
        HomeRegion: output.HomeRegion !== undefined && output.HomeRegion !== null ? output.HomeRegion : undefined,
        Issuer: output.Issuer !== undefined && output.Issuer !== null
            ? deserializeAws_json1_1IssuerDetails(output.Issuer, context)
            : undefined,
        LicenseArn: output.LicenseArn !== undefined && output.LicenseArn !== null ? output.LicenseArn : undefined,
        LicenseMetadata: output.LicenseMetadata !== undefined && output.LicenseMetadata !== null
            ? deserializeAws_json1_1MetadataList(output.LicenseMetadata, context)
            : undefined,
        LicenseName: output.LicenseName !== undefined && output.LicenseName !== null ? output.LicenseName : undefined,
        ProductName: output.ProductName !== undefined && output.ProductName !== null ? output.ProductName : undefined,
        ProductSKU: output.ProductSKU !== undefined && output.ProductSKU !== null ? output.ProductSKU : undefined,
        Status: output.Status !== undefined && output.Status !== null ? output.Status : undefined,
        Validity: output.Validity !== undefined && output.Validity !== null
            ? deserializeAws_json1_1DatetimeRange(output.Validity, context)
            : undefined,
        Version: output.Version !== undefined && output.Version !== null ? output.Version : undefined,
    };
};
const deserializeAws_json1_1LicenseConfiguration = (output, context) => {
    return {
        AutomatedDiscoveryInformation: output.AutomatedDiscoveryInformation !== undefined && output.AutomatedDiscoveryInformation !== null
            ? deserializeAws_json1_1AutomatedDiscoveryInformation(output.AutomatedDiscoveryInformation, context)
            : undefined,
        ConsumedLicenseSummaryList: output.ConsumedLicenseSummaryList !== undefined && output.ConsumedLicenseSummaryList !== null
            ? deserializeAws_json1_1ConsumedLicenseSummaryList(output.ConsumedLicenseSummaryList, context)
            : undefined,
        ConsumedLicenses: output.ConsumedLicenses !== undefined && output.ConsumedLicenses !== null ? output.ConsumedLicenses : undefined,
        Description: output.Description !== undefined && output.Description !== null ? output.Description : undefined,
        DisassociateWhenNotFound: output.DisassociateWhenNotFound !== undefined && output.DisassociateWhenNotFound !== null
            ? output.DisassociateWhenNotFound
            : undefined,
        LicenseConfigurationArn: output.LicenseConfigurationArn !== undefined && output.LicenseConfigurationArn !== null
            ? output.LicenseConfigurationArn
            : undefined,
        LicenseConfigurationId: output.LicenseConfigurationId !== undefined && output.LicenseConfigurationId !== null
            ? output.LicenseConfigurationId
            : undefined,
        LicenseCount: output.LicenseCount !== undefined && output.LicenseCount !== null ? output.LicenseCount : undefined,
        LicenseCountHardLimit: output.LicenseCountHardLimit !== undefined && output.LicenseCountHardLimit !== null
            ? output.LicenseCountHardLimit
            : undefined,
        LicenseCountingType: output.LicenseCountingType !== undefined && output.LicenseCountingType !== null
            ? output.LicenseCountingType
            : undefined,
        LicenseRules: output.LicenseRules !== undefined && output.LicenseRules !== null
            ? deserializeAws_json1_1StringList(output.LicenseRules, context)
            : undefined,
        ManagedResourceSummaryList: output.ManagedResourceSummaryList !== undefined && output.ManagedResourceSummaryList !== null
            ? deserializeAws_json1_1ManagedResourceSummaryList(output.ManagedResourceSummaryList, context)
            : undefined,
        Name: output.Name !== undefined && output.Name !== null ? output.Name : undefined,
        OwnerAccountId: output.OwnerAccountId !== undefined && output.OwnerAccountId !== null ? output.OwnerAccountId : undefined,
        ProductInformationList: output.ProductInformationList !== undefined && output.ProductInformationList !== null
            ? deserializeAws_json1_1ProductInformationList(output.ProductInformationList, context)
            : undefined,
        Status: output.Status !== undefined && output.Status !== null ? output.Status : undefined,
    };
};
const deserializeAws_json1_1LicenseConfigurationAssociation = (output, context) => {
    return {
        AmiAssociationScope: output.AmiAssociationScope !== undefined && output.AmiAssociationScope !== null
            ? output.AmiAssociationScope
            : undefined,
        AssociationTime: output.AssociationTime !== undefined && output.AssociationTime !== null
            ? new Date(Math.round(output.AssociationTime * 1000))
            : undefined,
        ResourceArn: output.ResourceArn !== undefined && output.ResourceArn !== null ? output.ResourceArn : undefined,
        ResourceOwnerId: output.ResourceOwnerId !== undefined && output.ResourceOwnerId !== null ? output.ResourceOwnerId : undefined,
        ResourceType: output.ResourceType !== undefined && output.ResourceType !== null ? output.ResourceType : undefined,
    };
};
const deserializeAws_json1_1LicenseConfigurationAssociations = (output, context) => {
    return (output || [])
        .filter((e) => e != null)
        .map((entry) => {
        if (entry === null) {
            return null;
        }
        return deserializeAws_json1_1LicenseConfigurationAssociation(entry, context);
    });
};
const deserializeAws_json1_1LicenseConfigurations = (output, context) => {
    return (output || [])
        .filter((e) => e != null)
        .map((entry) => {
        if (entry === null) {
            return null;
        }
        return deserializeAws_json1_1LicenseConfiguration(entry, context);
    });
};
const deserializeAws_json1_1LicenseConfigurationUsage = (output, context) => {
    return {
        AssociationTime: output.AssociationTime !== undefined && output.AssociationTime !== null
            ? new Date(Math.round(output.AssociationTime * 1000))
            : undefined,
        ConsumedLicenses: output.ConsumedLicenses !== undefined && output.ConsumedLicenses !== null ? output.ConsumedLicenses : undefined,
        ResourceArn: output.ResourceArn !== undefined && output.ResourceArn !== null ? output.ResourceArn : undefined,
        ResourceOwnerId: output.ResourceOwnerId !== undefined && output.ResourceOwnerId !== null ? output.ResourceOwnerId : undefined,
        ResourceStatus: output.ResourceStatus !== undefined && output.ResourceStatus !== null ? output.ResourceStatus : undefined,
        ResourceType: output.ResourceType !== undefined && output.ResourceType !== null ? output.ResourceType : undefined,
    };
};
const deserializeAws_json1_1LicenseConfigurationUsageList = (output, context) => {
    return (output || [])
        .filter((e) => e != null)
        .map((entry) => {
        if (entry === null) {
            return null;
        }
        return deserializeAws_json1_1LicenseConfigurationUsage(entry, context);
    });
};
const deserializeAws_json1_1LicenseList = (output, context) => {
    return (output || [])
        .filter((e) => e != null)
        .map((entry) => {
        if (entry === null) {
            return null;
        }
        return deserializeAws_json1_1License(entry, context);
    });
};
const deserializeAws_json1_1LicenseOperationFailure = (output, context) => {
    return {
        ErrorMessage: output.ErrorMessage !== undefined && output.ErrorMessage !== null ? output.ErrorMessage : undefined,
        FailureTime: output.FailureTime !== undefined && output.FailureTime !== null
            ? new Date(Math.round(output.FailureTime * 1000))
            : undefined,
        MetadataList: output.MetadataList !== undefined && output.MetadataList !== null
            ? deserializeAws_json1_1MetadataList(output.MetadataList, context)
            : undefined,
        OperationName: output.OperationName !== undefined && output.OperationName !== null ? output.OperationName : undefined,
        OperationRequestedBy: output.OperationRequestedBy !== undefined && output.OperationRequestedBy !== null
            ? output.OperationRequestedBy
            : undefined,
        ResourceArn: output.ResourceArn !== undefined && output.ResourceArn !== null ? output.ResourceArn : undefined,
        ResourceOwnerId: output.ResourceOwnerId !== undefined && output.ResourceOwnerId !== null ? output.ResourceOwnerId : undefined,
        ResourceType: output.ResourceType !== undefined && output.ResourceType !== null ? output.ResourceType : undefined,
    };
};
const deserializeAws_json1_1LicenseOperationFailureList = (output, context) => {
    return (output || [])
        .filter((e) => e != null)
        .map((entry) => {
        if (entry === null) {
            return null;
        }
        return deserializeAws_json1_1LicenseOperationFailure(entry, context);
    });
};
const deserializeAws_json1_1LicenseSpecification = (output, context) => {
    return {
        AmiAssociationScope: output.AmiAssociationScope !== undefined && output.AmiAssociationScope !== null
            ? output.AmiAssociationScope
            : undefined,
        LicenseConfigurationArn: output.LicenseConfigurationArn !== undefined && output.LicenseConfigurationArn !== null
            ? output.LicenseConfigurationArn
            : undefined,
    };
};
const deserializeAws_json1_1LicenseSpecifications = (output, context) => {
    return (output || [])
        .filter((e) => e != null)
        .map((entry) => {
        if (entry === null) {
            return null;
        }
        return deserializeAws_json1_1LicenseSpecification(entry, context);
    });
};
const deserializeAws_json1_1LicenseUsage = (output, context) => {
    return {
        EntitlementUsages: output.EntitlementUsages !== undefined && output.EntitlementUsages !== null
            ? deserializeAws_json1_1EntitlementUsageList(output.EntitlementUsages, context)
            : undefined,
    };
};
const deserializeAws_json1_1LicenseUsageException = (output, context) => {
    return {
        Message: output.Message !== undefined && output.Message !== null ? output.Message : undefined,
    };
};
const deserializeAws_json1_1ListAssociationsForLicenseConfigurationResponse = (output, context) => {
    return {
        LicenseConfigurationAssociations: output.LicenseConfigurationAssociations !== undefined && output.LicenseConfigurationAssociations !== null
            ? deserializeAws_json1_1LicenseConfigurationAssociations(output.LicenseConfigurationAssociations, context)
            : undefined,
        NextToken: output.NextToken !== undefined && output.NextToken !== null ? output.NextToken : undefined,
    };
};
const deserializeAws_json1_1ListDistributedGrantsResponse = (output, context) => {
    return {
        Grants: output.Grants !== undefined && output.Grants !== null
            ? deserializeAws_json1_1GrantList(output.Grants, context)
            : undefined,
        NextToken: output.NextToken !== undefined && output.NextToken !== null ? output.NextToken : undefined,
    };
};
const deserializeAws_json1_1ListFailuresForLicenseConfigurationOperationsResponse = (output, context) => {
    return {
        LicenseOperationFailureList: output.LicenseOperationFailureList !== undefined && output.LicenseOperationFailureList !== null
            ? deserializeAws_json1_1LicenseOperationFailureList(output.LicenseOperationFailureList, context)
            : undefined,
        NextToken: output.NextToken !== undefined && output.NextToken !== null ? output.NextToken : undefined,
    };
};
const deserializeAws_json1_1ListLicenseConfigurationsResponse = (output, context) => {
    return {
        LicenseConfigurations: output.LicenseConfigurations !== undefined && output.LicenseConfigurations !== null
            ? deserializeAws_json1_1LicenseConfigurations(output.LicenseConfigurations, context)
            : undefined,
        NextToken: output.NextToken !== undefined && output.NextToken !== null ? output.NextToken : undefined,
    };
};
const deserializeAws_json1_1ListLicenseManagerReportGeneratorsResponse = (output, context) => {
    return {
        NextToken: output.NextToken !== undefined && output.NextToken !== null ? output.NextToken : undefined,
        ReportGenerators: output.ReportGenerators !== undefined && output.ReportGenerators !== null
            ? deserializeAws_json1_1ReportGeneratorList(output.ReportGenerators, context)
            : undefined,
    };
};
const deserializeAws_json1_1ListLicenseSpecificationsForResourceResponse = (output, context) => {
    return {
        LicenseSpecifications: output.LicenseSpecifications !== undefined && output.LicenseSpecifications !== null
            ? deserializeAws_json1_1LicenseSpecifications(output.LicenseSpecifications, context)
            : undefined,
        NextToken: output.NextToken !== undefined && output.NextToken !== null ? output.NextToken : undefined,
    };
};
const deserializeAws_json1_1ListLicensesResponse = (output, context) => {
    return {
        Licenses: output.Licenses !== undefined && output.Licenses !== null
            ? deserializeAws_json1_1LicenseList(output.Licenses, context)
            : undefined,
        NextToken: output.NextToken !== undefined && output.NextToken !== null ? output.NextToken : undefined,
    };
};
const deserializeAws_json1_1ListLicenseVersionsResponse = (output, context) => {
    return {
        Licenses: output.Licenses !== undefined && output.Licenses !== null
            ? deserializeAws_json1_1LicenseList(output.Licenses, context)
            : undefined,
        NextToken: output.NextToken !== undefined && output.NextToken !== null ? output.NextToken : undefined,
    };
};
const deserializeAws_json1_1ListReceivedGrantsResponse = (output, context) => {
    return {
        Grants: output.Grants !== undefined && output.Grants !== null
            ? deserializeAws_json1_1GrantList(output.Grants, context)
            : undefined,
        NextToken: output.NextToken !== undefined && output.NextToken !== null ? output.NextToken : undefined,
    };
};
const deserializeAws_json1_1ListReceivedLicensesResponse = (output, context) => {
    return {
        Licenses: output.Licenses !== undefined && output.Licenses !== null
            ? deserializeAws_json1_1GrantedLicenseList(output.Licenses, context)
            : undefined,
        NextToken: output.NextToken !== undefined && output.NextToken !== null ? output.NextToken : undefined,
    };
};
const deserializeAws_json1_1ListResourceInventoryResponse = (output, context) => {
    return {
        NextToken: output.NextToken !== undefined && output.NextToken !== null ? output.NextToken : undefined,
        ResourceInventoryList: output.ResourceInventoryList !== undefined && output.ResourceInventoryList !== null
            ? deserializeAws_json1_1ResourceInventoryList(output.ResourceInventoryList, context)
            : undefined,
    };
};
const deserializeAws_json1_1ListTagsForResourceResponse = (output, context) => {
    return {
        Tags: output.Tags !== undefined && output.Tags !== null
            ? deserializeAws_json1_1TagList(output.Tags, context)
            : undefined,
    };
};
const deserializeAws_json1_1ListTokensResponse = (output, context) => {
    return {
        NextToken: output.NextToken !== undefined && output.NextToken !== null ? output.NextToken : undefined,
        Tokens: output.Tokens !== undefined && output.Tokens !== null
            ? deserializeAws_json1_1TokenList(output.Tokens, context)
            : undefined,
    };
};
const deserializeAws_json1_1ListUsageForLicenseConfigurationResponse = (output, context) => {
    return {
        LicenseConfigurationUsageList: output.LicenseConfigurationUsageList !== undefined && output.LicenseConfigurationUsageList !== null
            ? deserializeAws_json1_1LicenseConfigurationUsageList(output.LicenseConfigurationUsageList, context)
            : undefined,
        NextToken: output.NextToken !== undefined && output.NextToken !== null ? output.NextToken : undefined,
    };
};
const deserializeAws_json1_1ManagedResourceSummary = (output, context) => {
    return {
        AssociationCount: output.AssociationCount !== undefined && output.AssociationCount !== null ? output.AssociationCount : undefined,
        ResourceType: output.ResourceType !== undefined && output.ResourceType !== null ? output.ResourceType : undefined,
    };
};
const deserializeAws_json1_1ManagedResourceSummaryList = (output, context) => {
    return (output || [])
        .filter((e) => e != null)
        .map((entry) => {
        if (entry === null) {
            return null;
        }
        return deserializeAws_json1_1ManagedResourceSummary(entry, context);
    });
};
const deserializeAws_json1_1MaxSize3StringList = (output, context) => {
    return (output || [])
        .filter((e) => e != null)
        .map((entry) => {
        if (entry === null) {
            return null;
        }
        return entry;
    });
};
const deserializeAws_json1_1Metadata = (output, context) => {
    return {
        Name: output.Name !== undefined && output.Name !== null ? output.Name : undefined,
        Value: output.Value !== undefined && output.Value !== null ? output.Value : undefined,
    };
};
const deserializeAws_json1_1MetadataList = (output, context) => {
    return (output || [])
        .filter((e) => e != null)
        .map((entry) => {
        if (entry === null) {
            return null;
        }
        return deserializeAws_json1_1Metadata(entry, context);
    });
};
const deserializeAws_json1_1NoEntitlementsAllowedException = (output, context) => {
    return {
        Message: output.Message !== undefined && output.Message !== null ? output.Message : undefined,
    };
};
const deserializeAws_json1_1OrganizationConfiguration = (output, context) => {
    return {
        EnableIntegration: output.EnableIntegration !== undefined && output.EnableIntegration !== null
            ? output.EnableIntegration
            : undefined,
    };
};
const deserializeAws_json1_1ProductInformation = (output, context) => {
    return {
        ProductInformationFilterList: output.ProductInformationFilterList !== undefined && output.ProductInformationFilterList !== null
            ? deserializeAws_json1_1ProductInformationFilterList(output.ProductInformationFilterList, context)
            : undefined,
        ResourceType: output.ResourceType !== undefined && output.ResourceType !== null ? output.ResourceType : undefined,
    };
};
const deserializeAws_json1_1ProductInformationFilter = (output, context) => {
    return {
        ProductInformationFilterComparator: output.ProductInformationFilterComparator !== undefined && output.ProductInformationFilterComparator !== null
            ? output.ProductInformationFilterComparator
            : undefined,
        ProductInformationFilterName: output.ProductInformationFilterName !== undefined && output.ProductInformationFilterName !== null
            ? output.ProductInformationFilterName
            : undefined,
        ProductInformationFilterValue: output.ProductInformationFilterValue !== undefined && output.ProductInformationFilterValue !== null
            ? deserializeAws_json1_1StringList(output.ProductInformationFilterValue, context)
            : undefined,
    };
};
const deserializeAws_json1_1ProductInformationFilterList = (output, context) => {
    return (output || [])
        .filter((e) => e != null)
        .map((entry) => {
        if (entry === null) {
            return null;
        }
        return deserializeAws_json1_1ProductInformationFilter(entry, context);
    });
};
const deserializeAws_json1_1ProductInformationList = (output, context) => {
    return (output || [])
        .filter((e) => e != null)
        .map((entry) => {
        if (entry === null) {
            return null;
        }
        return deserializeAws_json1_1ProductInformation(entry, context);
    });
};
const deserializeAws_json1_1ProvisionalConfiguration = (output, context) => {
    return {
        MaxTimeToLiveInMinutes: output.MaxTimeToLiveInMinutes !== undefined && output.MaxTimeToLiveInMinutes !== null
            ? output.MaxTimeToLiveInMinutes
            : undefined,
    };
};
const deserializeAws_json1_1RateLimitExceededException = (output, context) => {
    return {
        Message: output.Message !== undefined && output.Message !== null ? output.Message : undefined,
    };
};
const deserializeAws_json1_1ReceivedMetadata = (output, context) => {
    return {
        AllowedOperations: output.AllowedOperations !== undefined && output.AllowedOperations !== null
            ? deserializeAws_json1_1AllowedOperationList(output.AllowedOperations, context)
            : undefined,
        ReceivedStatus: output.ReceivedStatus !== undefined && output.ReceivedStatus !== null ? output.ReceivedStatus : undefined,
    };
};
const deserializeAws_json1_1RedirectException = (output, context) => {
    return {
        Location: output.Location !== undefined && output.Location !== null ? output.Location : undefined,
        Message: output.Message !== undefined && output.Message !== null ? output.Message : undefined,
    };
};
const deserializeAws_json1_1RejectGrantResponse = (output, context) => {
    return {
        GrantArn: output.GrantArn !== undefined && output.GrantArn !== null ? output.GrantArn : undefined,
        Status: output.Status !== undefined && output.Status !== null ? output.Status : undefined,
        Version: output.Version !== undefined && output.Version !== null ? output.Version : undefined,
    };
};
const deserializeAws_json1_1ReportContext = (output, context) => {
    return {
        licenseConfigurationArns: output.licenseConfigurationArns !== undefined && output.licenseConfigurationArns !== null
            ? deserializeAws_json1_1ArnList(output.licenseConfigurationArns, context)
            : undefined,
    };
};
const deserializeAws_json1_1ReportFrequency = (output, context) => {
    return {
        period: output.period !== undefined && output.period !== null ? output.period : undefined,
        value: output.value !== undefined && output.value !== null ? output.value : undefined,
    };
};
const deserializeAws_json1_1ReportGenerator = (output, context) => {
    return {
        CreateTime: output.CreateTime !== undefined && output.CreateTime !== null ? output.CreateTime : undefined,
        Description: output.Description !== undefined && output.Description !== null ? output.Description : undefined,
        LastReportGenerationTime: output.LastReportGenerationTime !== undefined && output.LastReportGenerationTime !== null
            ? output.LastReportGenerationTime
            : undefined,
        LastRunFailureReason: output.LastRunFailureReason !== undefined && output.LastRunFailureReason !== null
            ? output.LastRunFailureReason
            : undefined,
        LastRunStatus: output.LastRunStatus !== undefined && output.LastRunStatus !== null ? output.LastRunStatus : undefined,
        LicenseManagerReportGeneratorArn: output.LicenseManagerReportGeneratorArn !== undefined && output.LicenseManagerReportGeneratorArn !== null
            ? output.LicenseManagerReportGeneratorArn
            : undefined,
        ReportContext: output.ReportContext !== undefined && output.ReportContext !== null
            ? deserializeAws_json1_1ReportContext(output.ReportContext, context)
            : undefined,
        ReportCreatorAccount: output.ReportCreatorAccount !== undefined && output.ReportCreatorAccount !== null
            ? output.ReportCreatorAccount
            : undefined,
        ReportFrequency: output.ReportFrequency !== undefined && output.ReportFrequency !== null
            ? deserializeAws_json1_1ReportFrequency(output.ReportFrequency, context)
            : undefined,
        ReportGeneratorName: output.ReportGeneratorName !== undefined && output.ReportGeneratorName !== null
            ? output.ReportGeneratorName
            : undefined,
        ReportType: output.ReportType !== undefined && output.ReportType !== null
            ? deserializeAws_json1_1ReportTypeList(output.ReportType, context)
            : undefined,
        S3Location: output.S3Location !== undefined && output.S3Location !== null
            ? deserializeAws_json1_1S3Location(output.S3Location, context)
            : undefined,
        Tags: output.Tags !== undefined && output.Tags !== null
            ? deserializeAws_json1_1TagList(output.Tags, context)
            : undefined,
    };
};
const deserializeAws_json1_1ReportGeneratorList = (output, context) => {
    return (output || [])
        .filter((e) => e != null)
        .map((entry) => {
        if (entry === null) {
            return null;
        }
        return deserializeAws_json1_1ReportGenerator(entry, context);
    });
};
const deserializeAws_json1_1ReportTypeList = (output, context) => {
    return (output || [])
        .filter((e) => e != null)
        .map((entry) => {
        if (entry === null) {
            return null;
        }
        return entry;
    });
};
const deserializeAws_json1_1ResourceInventory = (output, context) => {
    return {
        Platform: output.Platform !== undefined && output.Platform !== null ? output.Platform : undefined,
        PlatformVersion: output.PlatformVersion !== undefined && output.PlatformVersion !== null ? output.PlatformVersion : undefined,
        ResourceArn: output.ResourceArn !== undefined && output.ResourceArn !== null ? output.ResourceArn : undefined,
        ResourceId: output.ResourceId !== undefined && output.ResourceId !== null ? output.ResourceId : undefined,
        ResourceOwningAccountId: output.ResourceOwningAccountId !== undefined && output.ResourceOwningAccountId !== null
            ? output.ResourceOwningAccountId
            : undefined,
        ResourceType: output.ResourceType !== undefined && output.ResourceType !== null ? output.ResourceType : undefined,
    };
};
const deserializeAws_json1_1ResourceInventoryList = (output, context) => {
    return (output || [])
        .filter((e) => e != null)
        .map((entry) => {
        if (entry === null) {
            return null;
        }
        return deserializeAws_json1_1ResourceInventory(entry, context);
    });
};
const deserializeAws_json1_1ResourceLimitExceededException = (output, context) => {
    return {
        Message: output.Message !== undefined && output.Message !== null ? output.Message : undefined,
    };
};
const deserializeAws_json1_1ResourceNotFoundException = (output, context) => {
    return {
        Message: output.Message !== undefined && output.Message !== null ? output.Message : undefined,
    };
};
const deserializeAws_json1_1S3Location = (output, context) => {
    return {
        bucket: output.bucket !== undefined && output.bucket !== null ? output.bucket : undefined,
        keyPrefix: output.keyPrefix !== undefined && output.keyPrefix !== null ? output.keyPrefix : undefined,
    };
};
const deserializeAws_json1_1ServerInternalException = (output, context) => {
    return {
        Message: output.Message !== undefined && output.Message !== null ? output.Message : undefined,
    };
};
const deserializeAws_json1_1StringList = (output, context) => {
    return (output || [])
        .filter((e) => e != null)
        .map((entry) => {
        if (entry === null) {
            return null;
        }
        return entry;
    });
};
const deserializeAws_json1_1Tag = (output, context) => {
    return {
        Key: output.Key !== undefined && output.Key !== null ? output.Key : undefined,
        Value: output.Value !== undefined && output.Value !== null ? output.Value : undefined,
    };
};
const deserializeAws_json1_1TagList = (output, context) => {
    return (output || [])
        .filter((e) => e != null)
        .map((entry) => {
        if (entry === null) {
            return null;
        }
        return deserializeAws_json1_1Tag(entry, context);
    });
};
const deserializeAws_json1_1TagResourceResponse = (output, context) => {
    return {};
};
const deserializeAws_json1_1TokenData = (output, context) => {
    return {
        ExpirationTime: output.ExpirationTime !== undefined && output.ExpirationTime !== null ? output.ExpirationTime : undefined,
        LicenseArn: output.LicenseArn !== undefined && output.LicenseArn !== null ? output.LicenseArn : undefined,
        RoleArns: output.RoleArns !== undefined && output.RoleArns !== null
            ? deserializeAws_json1_1ArnList(output.RoleArns, context)
            : undefined,
        Status: output.Status !== undefined && output.Status !== null ? output.Status : undefined,
        TokenId: output.TokenId !== undefined && output.TokenId !== null ? output.TokenId : undefined,
        TokenProperties: output.TokenProperties !== undefined && output.TokenProperties !== null
            ? deserializeAws_json1_1MaxSize3StringList(output.TokenProperties, context)
            : undefined,
        TokenType: output.TokenType !== undefined && output.TokenType !== null ? output.TokenType : undefined,
    };
};
const deserializeAws_json1_1TokenList = (output, context) => {
    return (output || [])
        .filter((e) => e != null)
        .map((entry) => {
        if (entry === null) {
            return null;
        }
        return deserializeAws_json1_1TokenData(entry, context);
    });
};
const deserializeAws_json1_1UnsupportedDigitalSignatureMethodException = (output, context) => {
    return {
        Message: output.Message !== undefined && output.Message !== null ? output.Message : undefined,
    };
};
const deserializeAws_json1_1UntagResourceResponse = (output, context) => {
    return {};
};
const deserializeAws_json1_1UpdateLicenseConfigurationResponse = (output, context) => {
    return {};
};
const deserializeAws_json1_1UpdateLicenseManagerReportGeneratorResponse = (output, context) => {
    return {};
};
const deserializeAws_json1_1UpdateLicenseSpecificationsForResourceResponse = (output, context) => {
    return {};
};
const deserializeAws_json1_1UpdateServiceSettingsResponse = (output, context) => {
    return {};
};
const deserializeAws_json1_1ValidationException = (output, context) => {
    return {
        Message: output.Message !== undefined && output.Message !== null ? output.Message : undefined,
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
//# sourceMappingURL=Aws_json1_1.js.map