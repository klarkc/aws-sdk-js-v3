"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.serializeAws_json1_1RemoveIpRoutesCommand = exports.serializeAws_json1_1RejectSharedDirectoryCommand = exports.serializeAws_json1_1RegisterEventTopicCommand = exports.serializeAws_json1_1RegisterCertificateCommand = exports.serializeAws_json1_1ListTagsForResourceCommand = exports.serializeAws_json1_1ListSchemaExtensionsCommand = exports.serializeAws_json1_1ListLogSubscriptionsCommand = exports.serializeAws_json1_1ListIpRoutesCommand = exports.serializeAws_json1_1ListCertificatesCommand = exports.serializeAws_json1_1GetSnapshotLimitsCommand = exports.serializeAws_json1_1GetDirectoryLimitsCommand = exports.serializeAws_json1_1EnableSsoCommand = exports.serializeAws_json1_1EnableRadiusCommand = exports.serializeAws_json1_1EnableLDAPSCommand = exports.serializeAws_json1_1EnableClientAuthenticationCommand = exports.serializeAws_json1_1DisableSsoCommand = exports.serializeAws_json1_1DisableRadiusCommand = exports.serializeAws_json1_1DisableLDAPSCommand = exports.serializeAws_json1_1DisableClientAuthenticationCommand = exports.serializeAws_json1_1DescribeTrustsCommand = exports.serializeAws_json1_1DescribeSnapshotsCommand = exports.serializeAws_json1_1DescribeSharedDirectoriesCommand = exports.serializeAws_json1_1DescribeRegionsCommand = exports.serializeAws_json1_1DescribeLDAPSSettingsCommand = exports.serializeAws_json1_1DescribeEventTopicsCommand = exports.serializeAws_json1_1DescribeDomainControllersCommand = exports.serializeAws_json1_1DescribeDirectoriesCommand = exports.serializeAws_json1_1DescribeConditionalForwardersCommand = exports.serializeAws_json1_1DescribeCertificateCommand = exports.serializeAws_json1_1DeregisterEventTopicCommand = exports.serializeAws_json1_1DeregisterCertificateCommand = exports.serializeAws_json1_1DeleteTrustCommand = exports.serializeAws_json1_1DeleteSnapshotCommand = exports.serializeAws_json1_1DeleteLogSubscriptionCommand = exports.serializeAws_json1_1DeleteDirectoryCommand = exports.serializeAws_json1_1DeleteConditionalForwarderCommand = exports.serializeAws_json1_1CreateTrustCommand = exports.serializeAws_json1_1CreateSnapshotCommand = exports.serializeAws_json1_1CreateMicrosoftADCommand = exports.serializeAws_json1_1CreateLogSubscriptionCommand = exports.serializeAws_json1_1CreateDirectoryCommand = exports.serializeAws_json1_1CreateConditionalForwarderCommand = exports.serializeAws_json1_1CreateComputerCommand = exports.serializeAws_json1_1CreateAliasCommand = exports.serializeAws_json1_1ConnectDirectoryCommand = exports.serializeAws_json1_1CancelSchemaExtensionCommand = exports.serializeAws_json1_1AddTagsToResourceCommand = exports.serializeAws_json1_1AddRegionCommand = exports.serializeAws_json1_1AddIpRoutesCommand = exports.serializeAws_json1_1AcceptSharedDirectoryCommand = void 0;
exports.deserializeAws_json1_1EnableRadiusCommand = exports.deserializeAws_json1_1EnableLDAPSCommand = exports.deserializeAws_json1_1EnableClientAuthenticationCommand = exports.deserializeAws_json1_1DisableSsoCommand = exports.deserializeAws_json1_1DisableRadiusCommand = exports.deserializeAws_json1_1DisableLDAPSCommand = exports.deserializeAws_json1_1DisableClientAuthenticationCommand = exports.deserializeAws_json1_1DescribeTrustsCommand = exports.deserializeAws_json1_1DescribeSnapshotsCommand = exports.deserializeAws_json1_1DescribeSharedDirectoriesCommand = exports.deserializeAws_json1_1DescribeRegionsCommand = exports.deserializeAws_json1_1DescribeLDAPSSettingsCommand = exports.deserializeAws_json1_1DescribeEventTopicsCommand = exports.deserializeAws_json1_1DescribeDomainControllersCommand = exports.deserializeAws_json1_1DescribeDirectoriesCommand = exports.deserializeAws_json1_1DescribeConditionalForwardersCommand = exports.deserializeAws_json1_1DescribeCertificateCommand = exports.deserializeAws_json1_1DeregisterEventTopicCommand = exports.deserializeAws_json1_1DeregisterCertificateCommand = exports.deserializeAws_json1_1DeleteTrustCommand = exports.deserializeAws_json1_1DeleteSnapshotCommand = exports.deserializeAws_json1_1DeleteLogSubscriptionCommand = exports.deserializeAws_json1_1DeleteDirectoryCommand = exports.deserializeAws_json1_1DeleteConditionalForwarderCommand = exports.deserializeAws_json1_1CreateTrustCommand = exports.deserializeAws_json1_1CreateSnapshotCommand = exports.deserializeAws_json1_1CreateMicrosoftADCommand = exports.deserializeAws_json1_1CreateLogSubscriptionCommand = exports.deserializeAws_json1_1CreateDirectoryCommand = exports.deserializeAws_json1_1CreateConditionalForwarderCommand = exports.deserializeAws_json1_1CreateComputerCommand = exports.deserializeAws_json1_1CreateAliasCommand = exports.deserializeAws_json1_1ConnectDirectoryCommand = exports.deserializeAws_json1_1CancelSchemaExtensionCommand = exports.deserializeAws_json1_1AddTagsToResourceCommand = exports.deserializeAws_json1_1AddRegionCommand = exports.deserializeAws_json1_1AddIpRoutesCommand = exports.deserializeAws_json1_1AcceptSharedDirectoryCommand = exports.serializeAws_json1_1VerifyTrustCommand = exports.serializeAws_json1_1UpdateTrustCommand = exports.serializeAws_json1_1UpdateRadiusCommand = exports.serializeAws_json1_1UpdateNumberOfDomainControllersCommand = exports.serializeAws_json1_1UpdateConditionalForwarderCommand = exports.serializeAws_json1_1UnshareDirectoryCommand = exports.serializeAws_json1_1StartSchemaExtensionCommand = exports.serializeAws_json1_1ShareDirectoryCommand = exports.serializeAws_json1_1RestoreFromSnapshotCommand = exports.serializeAws_json1_1ResetUserPasswordCommand = exports.serializeAws_json1_1RemoveTagsFromResourceCommand = exports.serializeAws_json1_1RemoveRegionCommand = void 0;
exports.deserializeAws_json1_1VerifyTrustCommand = exports.deserializeAws_json1_1UpdateTrustCommand = exports.deserializeAws_json1_1UpdateRadiusCommand = exports.deserializeAws_json1_1UpdateNumberOfDomainControllersCommand = exports.deserializeAws_json1_1UpdateConditionalForwarderCommand = exports.deserializeAws_json1_1UnshareDirectoryCommand = exports.deserializeAws_json1_1StartSchemaExtensionCommand = exports.deserializeAws_json1_1ShareDirectoryCommand = exports.deserializeAws_json1_1RestoreFromSnapshotCommand = exports.deserializeAws_json1_1ResetUserPasswordCommand = exports.deserializeAws_json1_1RemoveTagsFromResourceCommand = exports.deserializeAws_json1_1RemoveRegionCommand = exports.deserializeAws_json1_1RemoveIpRoutesCommand = exports.deserializeAws_json1_1RejectSharedDirectoryCommand = exports.deserializeAws_json1_1RegisterEventTopicCommand = exports.deserializeAws_json1_1RegisterCertificateCommand = exports.deserializeAws_json1_1ListTagsForResourceCommand = exports.deserializeAws_json1_1ListSchemaExtensionsCommand = exports.deserializeAws_json1_1ListLogSubscriptionsCommand = exports.deserializeAws_json1_1ListIpRoutesCommand = exports.deserializeAws_json1_1ListCertificatesCommand = exports.deserializeAws_json1_1GetSnapshotLimitsCommand = exports.deserializeAws_json1_1GetDirectoryLimitsCommand = exports.deserializeAws_json1_1EnableSsoCommand = void 0;
const protocol_http_1 = require("@aws-sdk/protocol-http");
const serializeAws_json1_1AcceptSharedDirectoryCommand = async (input, context) => {
    const headers = {
        "content-type": "application/x-amz-json-1.1",
        "x-amz-target": "DirectoryService_20150416.AcceptSharedDirectory",
    };
    let body;
    body = JSON.stringify(serializeAws_json1_1AcceptSharedDirectoryRequest(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
exports.serializeAws_json1_1AcceptSharedDirectoryCommand = serializeAws_json1_1AcceptSharedDirectoryCommand;
const serializeAws_json1_1AddIpRoutesCommand = async (input, context) => {
    const headers = {
        "content-type": "application/x-amz-json-1.1",
        "x-amz-target": "DirectoryService_20150416.AddIpRoutes",
    };
    let body;
    body = JSON.stringify(serializeAws_json1_1AddIpRoutesRequest(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
exports.serializeAws_json1_1AddIpRoutesCommand = serializeAws_json1_1AddIpRoutesCommand;
const serializeAws_json1_1AddRegionCommand = async (input, context) => {
    const headers = {
        "content-type": "application/x-amz-json-1.1",
        "x-amz-target": "DirectoryService_20150416.AddRegion",
    };
    let body;
    body = JSON.stringify(serializeAws_json1_1AddRegionRequest(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
exports.serializeAws_json1_1AddRegionCommand = serializeAws_json1_1AddRegionCommand;
const serializeAws_json1_1AddTagsToResourceCommand = async (input, context) => {
    const headers = {
        "content-type": "application/x-amz-json-1.1",
        "x-amz-target": "DirectoryService_20150416.AddTagsToResource",
    };
    let body;
    body = JSON.stringify(serializeAws_json1_1AddTagsToResourceRequest(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
exports.serializeAws_json1_1AddTagsToResourceCommand = serializeAws_json1_1AddTagsToResourceCommand;
const serializeAws_json1_1CancelSchemaExtensionCommand = async (input, context) => {
    const headers = {
        "content-type": "application/x-amz-json-1.1",
        "x-amz-target": "DirectoryService_20150416.CancelSchemaExtension",
    };
    let body;
    body = JSON.stringify(serializeAws_json1_1CancelSchemaExtensionRequest(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
exports.serializeAws_json1_1CancelSchemaExtensionCommand = serializeAws_json1_1CancelSchemaExtensionCommand;
const serializeAws_json1_1ConnectDirectoryCommand = async (input, context) => {
    const headers = {
        "content-type": "application/x-amz-json-1.1",
        "x-amz-target": "DirectoryService_20150416.ConnectDirectory",
    };
    let body;
    body = JSON.stringify(serializeAws_json1_1ConnectDirectoryRequest(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
exports.serializeAws_json1_1ConnectDirectoryCommand = serializeAws_json1_1ConnectDirectoryCommand;
const serializeAws_json1_1CreateAliasCommand = async (input, context) => {
    const headers = {
        "content-type": "application/x-amz-json-1.1",
        "x-amz-target": "DirectoryService_20150416.CreateAlias",
    };
    let body;
    body = JSON.stringify(serializeAws_json1_1CreateAliasRequest(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
exports.serializeAws_json1_1CreateAliasCommand = serializeAws_json1_1CreateAliasCommand;
const serializeAws_json1_1CreateComputerCommand = async (input, context) => {
    const headers = {
        "content-type": "application/x-amz-json-1.1",
        "x-amz-target": "DirectoryService_20150416.CreateComputer",
    };
    let body;
    body = JSON.stringify(serializeAws_json1_1CreateComputerRequest(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
exports.serializeAws_json1_1CreateComputerCommand = serializeAws_json1_1CreateComputerCommand;
const serializeAws_json1_1CreateConditionalForwarderCommand = async (input, context) => {
    const headers = {
        "content-type": "application/x-amz-json-1.1",
        "x-amz-target": "DirectoryService_20150416.CreateConditionalForwarder",
    };
    let body;
    body = JSON.stringify(serializeAws_json1_1CreateConditionalForwarderRequest(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
exports.serializeAws_json1_1CreateConditionalForwarderCommand = serializeAws_json1_1CreateConditionalForwarderCommand;
const serializeAws_json1_1CreateDirectoryCommand = async (input, context) => {
    const headers = {
        "content-type": "application/x-amz-json-1.1",
        "x-amz-target": "DirectoryService_20150416.CreateDirectory",
    };
    let body;
    body = JSON.stringify(serializeAws_json1_1CreateDirectoryRequest(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
exports.serializeAws_json1_1CreateDirectoryCommand = serializeAws_json1_1CreateDirectoryCommand;
const serializeAws_json1_1CreateLogSubscriptionCommand = async (input, context) => {
    const headers = {
        "content-type": "application/x-amz-json-1.1",
        "x-amz-target": "DirectoryService_20150416.CreateLogSubscription",
    };
    let body;
    body = JSON.stringify(serializeAws_json1_1CreateLogSubscriptionRequest(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
exports.serializeAws_json1_1CreateLogSubscriptionCommand = serializeAws_json1_1CreateLogSubscriptionCommand;
const serializeAws_json1_1CreateMicrosoftADCommand = async (input, context) => {
    const headers = {
        "content-type": "application/x-amz-json-1.1",
        "x-amz-target": "DirectoryService_20150416.CreateMicrosoftAD",
    };
    let body;
    body = JSON.stringify(serializeAws_json1_1CreateMicrosoftADRequest(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
exports.serializeAws_json1_1CreateMicrosoftADCommand = serializeAws_json1_1CreateMicrosoftADCommand;
const serializeAws_json1_1CreateSnapshotCommand = async (input, context) => {
    const headers = {
        "content-type": "application/x-amz-json-1.1",
        "x-amz-target": "DirectoryService_20150416.CreateSnapshot",
    };
    let body;
    body = JSON.stringify(serializeAws_json1_1CreateSnapshotRequest(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
exports.serializeAws_json1_1CreateSnapshotCommand = serializeAws_json1_1CreateSnapshotCommand;
const serializeAws_json1_1CreateTrustCommand = async (input, context) => {
    const headers = {
        "content-type": "application/x-amz-json-1.1",
        "x-amz-target": "DirectoryService_20150416.CreateTrust",
    };
    let body;
    body = JSON.stringify(serializeAws_json1_1CreateTrustRequest(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
exports.serializeAws_json1_1CreateTrustCommand = serializeAws_json1_1CreateTrustCommand;
const serializeAws_json1_1DeleteConditionalForwarderCommand = async (input, context) => {
    const headers = {
        "content-type": "application/x-amz-json-1.1",
        "x-amz-target": "DirectoryService_20150416.DeleteConditionalForwarder",
    };
    let body;
    body = JSON.stringify(serializeAws_json1_1DeleteConditionalForwarderRequest(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
exports.serializeAws_json1_1DeleteConditionalForwarderCommand = serializeAws_json1_1DeleteConditionalForwarderCommand;
const serializeAws_json1_1DeleteDirectoryCommand = async (input, context) => {
    const headers = {
        "content-type": "application/x-amz-json-1.1",
        "x-amz-target": "DirectoryService_20150416.DeleteDirectory",
    };
    let body;
    body = JSON.stringify(serializeAws_json1_1DeleteDirectoryRequest(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
exports.serializeAws_json1_1DeleteDirectoryCommand = serializeAws_json1_1DeleteDirectoryCommand;
const serializeAws_json1_1DeleteLogSubscriptionCommand = async (input, context) => {
    const headers = {
        "content-type": "application/x-amz-json-1.1",
        "x-amz-target": "DirectoryService_20150416.DeleteLogSubscription",
    };
    let body;
    body = JSON.stringify(serializeAws_json1_1DeleteLogSubscriptionRequest(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
exports.serializeAws_json1_1DeleteLogSubscriptionCommand = serializeAws_json1_1DeleteLogSubscriptionCommand;
const serializeAws_json1_1DeleteSnapshotCommand = async (input, context) => {
    const headers = {
        "content-type": "application/x-amz-json-1.1",
        "x-amz-target": "DirectoryService_20150416.DeleteSnapshot",
    };
    let body;
    body = JSON.stringify(serializeAws_json1_1DeleteSnapshotRequest(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
exports.serializeAws_json1_1DeleteSnapshotCommand = serializeAws_json1_1DeleteSnapshotCommand;
const serializeAws_json1_1DeleteTrustCommand = async (input, context) => {
    const headers = {
        "content-type": "application/x-amz-json-1.1",
        "x-amz-target": "DirectoryService_20150416.DeleteTrust",
    };
    let body;
    body = JSON.stringify(serializeAws_json1_1DeleteTrustRequest(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
exports.serializeAws_json1_1DeleteTrustCommand = serializeAws_json1_1DeleteTrustCommand;
const serializeAws_json1_1DeregisterCertificateCommand = async (input, context) => {
    const headers = {
        "content-type": "application/x-amz-json-1.1",
        "x-amz-target": "DirectoryService_20150416.DeregisterCertificate",
    };
    let body;
    body = JSON.stringify(serializeAws_json1_1DeregisterCertificateRequest(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
exports.serializeAws_json1_1DeregisterCertificateCommand = serializeAws_json1_1DeregisterCertificateCommand;
const serializeAws_json1_1DeregisterEventTopicCommand = async (input, context) => {
    const headers = {
        "content-type": "application/x-amz-json-1.1",
        "x-amz-target": "DirectoryService_20150416.DeregisterEventTopic",
    };
    let body;
    body = JSON.stringify(serializeAws_json1_1DeregisterEventTopicRequest(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
exports.serializeAws_json1_1DeregisterEventTopicCommand = serializeAws_json1_1DeregisterEventTopicCommand;
const serializeAws_json1_1DescribeCertificateCommand = async (input, context) => {
    const headers = {
        "content-type": "application/x-amz-json-1.1",
        "x-amz-target": "DirectoryService_20150416.DescribeCertificate",
    };
    let body;
    body = JSON.stringify(serializeAws_json1_1DescribeCertificateRequest(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
exports.serializeAws_json1_1DescribeCertificateCommand = serializeAws_json1_1DescribeCertificateCommand;
const serializeAws_json1_1DescribeConditionalForwardersCommand = async (input, context) => {
    const headers = {
        "content-type": "application/x-amz-json-1.1",
        "x-amz-target": "DirectoryService_20150416.DescribeConditionalForwarders",
    };
    let body;
    body = JSON.stringify(serializeAws_json1_1DescribeConditionalForwardersRequest(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
exports.serializeAws_json1_1DescribeConditionalForwardersCommand = serializeAws_json1_1DescribeConditionalForwardersCommand;
const serializeAws_json1_1DescribeDirectoriesCommand = async (input, context) => {
    const headers = {
        "content-type": "application/x-amz-json-1.1",
        "x-amz-target": "DirectoryService_20150416.DescribeDirectories",
    };
    let body;
    body = JSON.stringify(serializeAws_json1_1DescribeDirectoriesRequest(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
exports.serializeAws_json1_1DescribeDirectoriesCommand = serializeAws_json1_1DescribeDirectoriesCommand;
const serializeAws_json1_1DescribeDomainControllersCommand = async (input, context) => {
    const headers = {
        "content-type": "application/x-amz-json-1.1",
        "x-amz-target": "DirectoryService_20150416.DescribeDomainControllers",
    };
    let body;
    body = JSON.stringify(serializeAws_json1_1DescribeDomainControllersRequest(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
exports.serializeAws_json1_1DescribeDomainControllersCommand = serializeAws_json1_1DescribeDomainControllersCommand;
const serializeAws_json1_1DescribeEventTopicsCommand = async (input, context) => {
    const headers = {
        "content-type": "application/x-amz-json-1.1",
        "x-amz-target": "DirectoryService_20150416.DescribeEventTopics",
    };
    let body;
    body = JSON.stringify(serializeAws_json1_1DescribeEventTopicsRequest(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
exports.serializeAws_json1_1DescribeEventTopicsCommand = serializeAws_json1_1DescribeEventTopicsCommand;
const serializeAws_json1_1DescribeLDAPSSettingsCommand = async (input, context) => {
    const headers = {
        "content-type": "application/x-amz-json-1.1",
        "x-amz-target": "DirectoryService_20150416.DescribeLDAPSSettings",
    };
    let body;
    body = JSON.stringify(serializeAws_json1_1DescribeLDAPSSettingsRequest(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
exports.serializeAws_json1_1DescribeLDAPSSettingsCommand = serializeAws_json1_1DescribeLDAPSSettingsCommand;
const serializeAws_json1_1DescribeRegionsCommand = async (input, context) => {
    const headers = {
        "content-type": "application/x-amz-json-1.1",
        "x-amz-target": "DirectoryService_20150416.DescribeRegions",
    };
    let body;
    body = JSON.stringify(serializeAws_json1_1DescribeRegionsRequest(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
exports.serializeAws_json1_1DescribeRegionsCommand = serializeAws_json1_1DescribeRegionsCommand;
const serializeAws_json1_1DescribeSharedDirectoriesCommand = async (input, context) => {
    const headers = {
        "content-type": "application/x-amz-json-1.1",
        "x-amz-target": "DirectoryService_20150416.DescribeSharedDirectories",
    };
    let body;
    body = JSON.stringify(serializeAws_json1_1DescribeSharedDirectoriesRequest(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
exports.serializeAws_json1_1DescribeSharedDirectoriesCommand = serializeAws_json1_1DescribeSharedDirectoriesCommand;
const serializeAws_json1_1DescribeSnapshotsCommand = async (input, context) => {
    const headers = {
        "content-type": "application/x-amz-json-1.1",
        "x-amz-target": "DirectoryService_20150416.DescribeSnapshots",
    };
    let body;
    body = JSON.stringify(serializeAws_json1_1DescribeSnapshotsRequest(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
exports.serializeAws_json1_1DescribeSnapshotsCommand = serializeAws_json1_1DescribeSnapshotsCommand;
const serializeAws_json1_1DescribeTrustsCommand = async (input, context) => {
    const headers = {
        "content-type": "application/x-amz-json-1.1",
        "x-amz-target": "DirectoryService_20150416.DescribeTrusts",
    };
    let body;
    body = JSON.stringify(serializeAws_json1_1DescribeTrustsRequest(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
exports.serializeAws_json1_1DescribeTrustsCommand = serializeAws_json1_1DescribeTrustsCommand;
const serializeAws_json1_1DisableClientAuthenticationCommand = async (input, context) => {
    const headers = {
        "content-type": "application/x-amz-json-1.1",
        "x-amz-target": "DirectoryService_20150416.DisableClientAuthentication",
    };
    let body;
    body = JSON.stringify(serializeAws_json1_1DisableClientAuthenticationRequest(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
exports.serializeAws_json1_1DisableClientAuthenticationCommand = serializeAws_json1_1DisableClientAuthenticationCommand;
const serializeAws_json1_1DisableLDAPSCommand = async (input, context) => {
    const headers = {
        "content-type": "application/x-amz-json-1.1",
        "x-amz-target": "DirectoryService_20150416.DisableLDAPS",
    };
    let body;
    body = JSON.stringify(serializeAws_json1_1DisableLDAPSRequest(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
exports.serializeAws_json1_1DisableLDAPSCommand = serializeAws_json1_1DisableLDAPSCommand;
const serializeAws_json1_1DisableRadiusCommand = async (input, context) => {
    const headers = {
        "content-type": "application/x-amz-json-1.1",
        "x-amz-target": "DirectoryService_20150416.DisableRadius",
    };
    let body;
    body = JSON.stringify(serializeAws_json1_1DisableRadiusRequest(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
exports.serializeAws_json1_1DisableRadiusCommand = serializeAws_json1_1DisableRadiusCommand;
const serializeAws_json1_1DisableSsoCommand = async (input, context) => {
    const headers = {
        "content-type": "application/x-amz-json-1.1",
        "x-amz-target": "DirectoryService_20150416.DisableSso",
    };
    let body;
    body = JSON.stringify(serializeAws_json1_1DisableSsoRequest(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
exports.serializeAws_json1_1DisableSsoCommand = serializeAws_json1_1DisableSsoCommand;
const serializeAws_json1_1EnableClientAuthenticationCommand = async (input, context) => {
    const headers = {
        "content-type": "application/x-amz-json-1.1",
        "x-amz-target": "DirectoryService_20150416.EnableClientAuthentication",
    };
    let body;
    body = JSON.stringify(serializeAws_json1_1EnableClientAuthenticationRequest(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
exports.serializeAws_json1_1EnableClientAuthenticationCommand = serializeAws_json1_1EnableClientAuthenticationCommand;
const serializeAws_json1_1EnableLDAPSCommand = async (input, context) => {
    const headers = {
        "content-type": "application/x-amz-json-1.1",
        "x-amz-target": "DirectoryService_20150416.EnableLDAPS",
    };
    let body;
    body = JSON.stringify(serializeAws_json1_1EnableLDAPSRequest(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
exports.serializeAws_json1_1EnableLDAPSCommand = serializeAws_json1_1EnableLDAPSCommand;
const serializeAws_json1_1EnableRadiusCommand = async (input, context) => {
    const headers = {
        "content-type": "application/x-amz-json-1.1",
        "x-amz-target": "DirectoryService_20150416.EnableRadius",
    };
    let body;
    body = JSON.stringify(serializeAws_json1_1EnableRadiusRequest(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
exports.serializeAws_json1_1EnableRadiusCommand = serializeAws_json1_1EnableRadiusCommand;
const serializeAws_json1_1EnableSsoCommand = async (input, context) => {
    const headers = {
        "content-type": "application/x-amz-json-1.1",
        "x-amz-target": "DirectoryService_20150416.EnableSso",
    };
    let body;
    body = JSON.stringify(serializeAws_json1_1EnableSsoRequest(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
exports.serializeAws_json1_1EnableSsoCommand = serializeAws_json1_1EnableSsoCommand;
const serializeAws_json1_1GetDirectoryLimitsCommand = async (input, context) => {
    const headers = {
        "content-type": "application/x-amz-json-1.1",
        "x-amz-target": "DirectoryService_20150416.GetDirectoryLimits",
    };
    let body;
    body = JSON.stringify(serializeAws_json1_1GetDirectoryLimitsRequest(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
exports.serializeAws_json1_1GetDirectoryLimitsCommand = serializeAws_json1_1GetDirectoryLimitsCommand;
const serializeAws_json1_1GetSnapshotLimitsCommand = async (input, context) => {
    const headers = {
        "content-type": "application/x-amz-json-1.1",
        "x-amz-target": "DirectoryService_20150416.GetSnapshotLimits",
    };
    let body;
    body = JSON.stringify(serializeAws_json1_1GetSnapshotLimitsRequest(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
exports.serializeAws_json1_1GetSnapshotLimitsCommand = serializeAws_json1_1GetSnapshotLimitsCommand;
const serializeAws_json1_1ListCertificatesCommand = async (input, context) => {
    const headers = {
        "content-type": "application/x-amz-json-1.1",
        "x-amz-target": "DirectoryService_20150416.ListCertificates",
    };
    let body;
    body = JSON.stringify(serializeAws_json1_1ListCertificatesRequest(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
exports.serializeAws_json1_1ListCertificatesCommand = serializeAws_json1_1ListCertificatesCommand;
const serializeAws_json1_1ListIpRoutesCommand = async (input, context) => {
    const headers = {
        "content-type": "application/x-amz-json-1.1",
        "x-amz-target": "DirectoryService_20150416.ListIpRoutes",
    };
    let body;
    body = JSON.stringify(serializeAws_json1_1ListIpRoutesRequest(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
exports.serializeAws_json1_1ListIpRoutesCommand = serializeAws_json1_1ListIpRoutesCommand;
const serializeAws_json1_1ListLogSubscriptionsCommand = async (input, context) => {
    const headers = {
        "content-type": "application/x-amz-json-1.1",
        "x-amz-target": "DirectoryService_20150416.ListLogSubscriptions",
    };
    let body;
    body = JSON.stringify(serializeAws_json1_1ListLogSubscriptionsRequest(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
exports.serializeAws_json1_1ListLogSubscriptionsCommand = serializeAws_json1_1ListLogSubscriptionsCommand;
const serializeAws_json1_1ListSchemaExtensionsCommand = async (input, context) => {
    const headers = {
        "content-type": "application/x-amz-json-1.1",
        "x-amz-target": "DirectoryService_20150416.ListSchemaExtensions",
    };
    let body;
    body = JSON.stringify(serializeAws_json1_1ListSchemaExtensionsRequest(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
exports.serializeAws_json1_1ListSchemaExtensionsCommand = serializeAws_json1_1ListSchemaExtensionsCommand;
const serializeAws_json1_1ListTagsForResourceCommand = async (input, context) => {
    const headers = {
        "content-type": "application/x-amz-json-1.1",
        "x-amz-target": "DirectoryService_20150416.ListTagsForResource",
    };
    let body;
    body = JSON.stringify(serializeAws_json1_1ListTagsForResourceRequest(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
exports.serializeAws_json1_1ListTagsForResourceCommand = serializeAws_json1_1ListTagsForResourceCommand;
const serializeAws_json1_1RegisterCertificateCommand = async (input, context) => {
    const headers = {
        "content-type": "application/x-amz-json-1.1",
        "x-amz-target": "DirectoryService_20150416.RegisterCertificate",
    };
    let body;
    body = JSON.stringify(serializeAws_json1_1RegisterCertificateRequest(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
exports.serializeAws_json1_1RegisterCertificateCommand = serializeAws_json1_1RegisterCertificateCommand;
const serializeAws_json1_1RegisterEventTopicCommand = async (input, context) => {
    const headers = {
        "content-type": "application/x-amz-json-1.1",
        "x-amz-target": "DirectoryService_20150416.RegisterEventTopic",
    };
    let body;
    body = JSON.stringify(serializeAws_json1_1RegisterEventTopicRequest(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
exports.serializeAws_json1_1RegisterEventTopicCommand = serializeAws_json1_1RegisterEventTopicCommand;
const serializeAws_json1_1RejectSharedDirectoryCommand = async (input, context) => {
    const headers = {
        "content-type": "application/x-amz-json-1.1",
        "x-amz-target": "DirectoryService_20150416.RejectSharedDirectory",
    };
    let body;
    body = JSON.stringify(serializeAws_json1_1RejectSharedDirectoryRequest(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
exports.serializeAws_json1_1RejectSharedDirectoryCommand = serializeAws_json1_1RejectSharedDirectoryCommand;
const serializeAws_json1_1RemoveIpRoutesCommand = async (input, context) => {
    const headers = {
        "content-type": "application/x-amz-json-1.1",
        "x-amz-target": "DirectoryService_20150416.RemoveIpRoutes",
    };
    let body;
    body = JSON.stringify(serializeAws_json1_1RemoveIpRoutesRequest(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
exports.serializeAws_json1_1RemoveIpRoutesCommand = serializeAws_json1_1RemoveIpRoutesCommand;
const serializeAws_json1_1RemoveRegionCommand = async (input, context) => {
    const headers = {
        "content-type": "application/x-amz-json-1.1",
        "x-amz-target": "DirectoryService_20150416.RemoveRegion",
    };
    let body;
    body = JSON.stringify(serializeAws_json1_1RemoveRegionRequest(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
exports.serializeAws_json1_1RemoveRegionCommand = serializeAws_json1_1RemoveRegionCommand;
const serializeAws_json1_1RemoveTagsFromResourceCommand = async (input, context) => {
    const headers = {
        "content-type": "application/x-amz-json-1.1",
        "x-amz-target": "DirectoryService_20150416.RemoveTagsFromResource",
    };
    let body;
    body = JSON.stringify(serializeAws_json1_1RemoveTagsFromResourceRequest(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
exports.serializeAws_json1_1RemoveTagsFromResourceCommand = serializeAws_json1_1RemoveTagsFromResourceCommand;
const serializeAws_json1_1ResetUserPasswordCommand = async (input, context) => {
    const headers = {
        "content-type": "application/x-amz-json-1.1",
        "x-amz-target": "DirectoryService_20150416.ResetUserPassword",
    };
    let body;
    body = JSON.stringify(serializeAws_json1_1ResetUserPasswordRequest(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
exports.serializeAws_json1_1ResetUserPasswordCommand = serializeAws_json1_1ResetUserPasswordCommand;
const serializeAws_json1_1RestoreFromSnapshotCommand = async (input, context) => {
    const headers = {
        "content-type": "application/x-amz-json-1.1",
        "x-amz-target": "DirectoryService_20150416.RestoreFromSnapshot",
    };
    let body;
    body = JSON.stringify(serializeAws_json1_1RestoreFromSnapshotRequest(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
exports.serializeAws_json1_1RestoreFromSnapshotCommand = serializeAws_json1_1RestoreFromSnapshotCommand;
const serializeAws_json1_1ShareDirectoryCommand = async (input, context) => {
    const headers = {
        "content-type": "application/x-amz-json-1.1",
        "x-amz-target": "DirectoryService_20150416.ShareDirectory",
    };
    let body;
    body = JSON.stringify(serializeAws_json1_1ShareDirectoryRequest(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
exports.serializeAws_json1_1ShareDirectoryCommand = serializeAws_json1_1ShareDirectoryCommand;
const serializeAws_json1_1StartSchemaExtensionCommand = async (input, context) => {
    const headers = {
        "content-type": "application/x-amz-json-1.1",
        "x-amz-target": "DirectoryService_20150416.StartSchemaExtension",
    };
    let body;
    body = JSON.stringify(serializeAws_json1_1StartSchemaExtensionRequest(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
exports.serializeAws_json1_1StartSchemaExtensionCommand = serializeAws_json1_1StartSchemaExtensionCommand;
const serializeAws_json1_1UnshareDirectoryCommand = async (input, context) => {
    const headers = {
        "content-type": "application/x-amz-json-1.1",
        "x-amz-target": "DirectoryService_20150416.UnshareDirectory",
    };
    let body;
    body = JSON.stringify(serializeAws_json1_1UnshareDirectoryRequest(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
exports.serializeAws_json1_1UnshareDirectoryCommand = serializeAws_json1_1UnshareDirectoryCommand;
const serializeAws_json1_1UpdateConditionalForwarderCommand = async (input, context) => {
    const headers = {
        "content-type": "application/x-amz-json-1.1",
        "x-amz-target": "DirectoryService_20150416.UpdateConditionalForwarder",
    };
    let body;
    body = JSON.stringify(serializeAws_json1_1UpdateConditionalForwarderRequest(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
exports.serializeAws_json1_1UpdateConditionalForwarderCommand = serializeAws_json1_1UpdateConditionalForwarderCommand;
const serializeAws_json1_1UpdateNumberOfDomainControllersCommand = async (input, context) => {
    const headers = {
        "content-type": "application/x-amz-json-1.1",
        "x-amz-target": "DirectoryService_20150416.UpdateNumberOfDomainControllers",
    };
    let body;
    body = JSON.stringify(serializeAws_json1_1UpdateNumberOfDomainControllersRequest(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
exports.serializeAws_json1_1UpdateNumberOfDomainControllersCommand = serializeAws_json1_1UpdateNumberOfDomainControllersCommand;
const serializeAws_json1_1UpdateRadiusCommand = async (input, context) => {
    const headers = {
        "content-type": "application/x-amz-json-1.1",
        "x-amz-target": "DirectoryService_20150416.UpdateRadius",
    };
    let body;
    body = JSON.stringify(serializeAws_json1_1UpdateRadiusRequest(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
exports.serializeAws_json1_1UpdateRadiusCommand = serializeAws_json1_1UpdateRadiusCommand;
const serializeAws_json1_1UpdateTrustCommand = async (input, context) => {
    const headers = {
        "content-type": "application/x-amz-json-1.1",
        "x-amz-target": "DirectoryService_20150416.UpdateTrust",
    };
    let body;
    body = JSON.stringify(serializeAws_json1_1UpdateTrustRequest(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
exports.serializeAws_json1_1UpdateTrustCommand = serializeAws_json1_1UpdateTrustCommand;
const serializeAws_json1_1VerifyTrustCommand = async (input, context) => {
    const headers = {
        "content-type": "application/x-amz-json-1.1",
        "x-amz-target": "DirectoryService_20150416.VerifyTrust",
    };
    let body;
    body = JSON.stringify(serializeAws_json1_1VerifyTrustRequest(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
exports.serializeAws_json1_1VerifyTrustCommand = serializeAws_json1_1VerifyTrustCommand;
const deserializeAws_json1_1AcceptSharedDirectoryCommand = async (output, context) => {
    if (output.statusCode >= 300) {
        return deserializeAws_json1_1AcceptSharedDirectoryCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1AcceptSharedDirectoryResult(data, context);
    const response = {
        $metadata: deserializeMetadata(output),
        ...contents,
    };
    return Promise.resolve(response);
};
exports.deserializeAws_json1_1AcceptSharedDirectoryCommand = deserializeAws_json1_1AcceptSharedDirectoryCommand;
const deserializeAws_json1_1AcceptSharedDirectoryCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "ClientException":
        case "com.amazonaws.directoryservice#ClientException":
            response = {
                ...(await deserializeAws_json1_1ClientExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "DirectoryAlreadySharedException":
        case "com.amazonaws.directoryservice#DirectoryAlreadySharedException":
            response = {
                ...(await deserializeAws_json1_1DirectoryAlreadySharedExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "EntityDoesNotExistException":
        case "com.amazonaws.directoryservice#EntityDoesNotExistException":
            response = {
                ...(await deserializeAws_json1_1EntityDoesNotExistExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InvalidParameterException":
        case "com.amazonaws.directoryservice#InvalidParameterException":
            response = {
                ...(await deserializeAws_json1_1InvalidParameterExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ServiceException":
        case "com.amazonaws.directoryservice#ServiceException":
            response = {
                ...(await deserializeAws_json1_1ServiceExceptionResponse(parsedOutput, context)),
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
const deserializeAws_json1_1AddIpRoutesCommand = async (output, context) => {
    if (output.statusCode >= 300) {
        return deserializeAws_json1_1AddIpRoutesCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1AddIpRoutesResult(data, context);
    const response = {
        $metadata: deserializeMetadata(output),
        ...contents,
    };
    return Promise.resolve(response);
};
exports.deserializeAws_json1_1AddIpRoutesCommand = deserializeAws_json1_1AddIpRoutesCommand;
const deserializeAws_json1_1AddIpRoutesCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "ClientException":
        case "com.amazonaws.directoryservice#ClientException":
            response = {
                ...(await deserializeAws_json1_1ClientExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "DirectoryUnavailableException":
        case "com.amazonaws.directoryservice#DirectoryUnavailableException":
            response = {
                ...(await deserializeAws_json1_1DirectoryUnavailableExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "EntityAlreadyExistsException":
        case "com.amazonaws.directoryservice#EntityAlreadyExistsException":
            response = {
                ...(await deserializeAws_json1_1EntityAlreadyExistsExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "EntityDoesNotExistException":
        case "com.amazonaws.directoryservice#EntityDoesNotExistException":
            response = {
                ...(await deserializeAws_json1_1EntityDoesNotExistExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InvalidParameterException":
        case "com.amazonaws.directoryservice#InvalidParameterException":
            response = {
                ...(await deserializeAws_json1_1InvalidParameterExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "IpRouteLimitExceededException":
        case "com.amazonaws.directoryservice#IpRouteLimitExceededException":
            response = {
                ...(await deserializeAws_json1_1IpRouteLimitExceededExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ServiceException":
        case "com.amazonaws.directoryservice#ServiceException":
            response = {
                ...(await deserializeAws_json1_1ServiceExceptionResponse(parsedOutput, context)),
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
const deserializeAws_json1_1AddRegionCommand = async (output, context) => {
    if (output.statusCode >= 300) {
        return deserializeAws_json1_1AddRegionCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1AddRegionResult(data, context);
    const response = {
        $metadata: deserializeMetadata(output),
        ...contents,
    };
    return Promise.resolve(response);
};
exports.deserializeAws_json1_1AddRegionCommand = deserializeAws_json1_1AddRegionCommand;
const deserializeAws_json1_1AddRegionCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "AccessDeniedException":
        case "com.amazonaws.directoryservice#AccessDeniedException":
            response = {
                ...(await deserializeAws_json1_1AccessDeniedExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ClientException":
        case "com.amazonaws.directoryservice#ClientException":
            response = {
                ...(await deserializeAws_json1_1ClientExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "DirectoryAlreadyInRegionException":
        case "com.amazonaws.directoryservice#DirectoryAlreadyInRegionException":
            response = {
                ...(await deserializeAws_json1_1DirectoryAlreadyInRegionExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "DirectoryDoesNotExistException":
        case "com.amazonaws.directoryservice#DirectoryDoesNotExistException":
            response = {
                ...(await deserializeAws_json1_1DirectoryDoesNotExistExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "DirectoryUnavailableException":
        case "com.amazonaws.directoryservice#DirectoryUnavailableException":
            response = {
                ...(await deserializeAws_json1_1DirectoryUnavailableExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "EntityDoesNotExistException":
        case "com.amazonaws.directoryservice#EntityDoesNotExistException":
            response = {
                ...(await deserializeAws_json1_1EntityDoesNotExistExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InvalidParameterException":
        case "com.amazonaws.directoryservice#InvalidParameterException":
            response = {
                ...(await deserializeAws_json1_1InvalidParameterExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "RegionLimitExceededException":
        case "com.amazonaws.directoryservice#RegionLimitExceededException":
            response = {
                ...(await deserializeAws_json1_1RegionLimitExceededExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ServiceException":
        case "com.amazonaws.directoryservice#ServiceException":
            response = {
                ...(await deserializeAws_json1_1ServiceExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "UnsupportedOperationException":
        case "com.amazonaws.directoryservice#UnsupportedOperationException":
            response = {
                ...(await deserializeAws_json1_1UnsupportedOperationExceptionResponse(parsedOutput, context)),
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
const deserializeAws_json1_1AddTagsToResourceCommand = async (output, context) => {
    if (output.statusCode >= 300) {
        return deserializeAws_json1_1AddTagsToResourceCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1AddTagsToResourceResult(data, context);
    const response = {
        $metadata: deserializeMetadata(output),
        ...contents,
    };
    return Promise.resolve(response);
};
exports.deserializeAws_json1_1AddTagsToResourceCommand = deserializeAws_json1_1AddTagsToResourceCommand;
const deserializeAws_json1_1AddTagsToResourceCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "ClientException":
        case "com.amazonaws.directoryservice#ClientException":
            response = {
                ...(await deserializeAws_json1_1ClientExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "EntityDoesNotExistException":
        case "com.amazonaws.directoryservice#EntityDoesNotExistException":
            response = {
                ...(await deserializeAws_json1_1EntityDoesNotExistExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InvalidParameterException":
        case "com.amazonaws.directoryservice#InvalidParameterException":
            response = {
                ...(await deserializeAws_json1_1InvalidParameterExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ServiceException":
        case "com.amazonaws.directoryservice#ServiceException":
            response = {
                ...(await deserializeAws_json1_1ServiceExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "TagLimitExceededException":
        case "com.amazonaws.directoryservice#TagLimitExceededException":
            response = {
                ...(await deserializeAws_json1_1TagLimitExceededExceptionResponse(parsedOutput, context)),
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
const deserializeAws_json1_1CancelSchemaExtensionCommand = async (output, context) => {
    if (output.statusCode >= 300) {
        return deserializeAws_json1_1CancelSchemaExtensionCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1CancelSchemaExtensionResult(data, context);
    const response = {
        $metadata: deserializeMetadata(output),
        ...contents,
    };
    return Promise.resolve(response);
};
exports.deserializeAws_json1_1CancelSchemaExtensionCommand = deserializeAws_json1_1CancelSchemaExtensionCommand;
const deserializeAws_json1_1CancelSchemaExtensionCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "ClientException":
        case "com.amazonaws.directoryservice#ClientException":
            response = {
                ...(await deserializeAws_json1_1ClientExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "EntityDoesNotExistException":
        case "com.amazonaws.directoryservice#EntityDoesNotExistException":
            response = {
                ...(await deserializeAws_json1_1EntityDoesNotExistExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ServiceException":
        case "com.amazonaws.directoryservice#ServiceException":
            response = {
                ...(await deserializeAws_json1_1ServiceExceptionResponse(parsedOutput, context)),
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
const deserializeAws_json1_1ConnectDirectoryCommand = async (output, context) => {
    if (output.statusCode >= 300) {
        return deserializeAws_json1_1ConnectDirectoryCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1ConnectDirectoryResult(data, context);
    const response = {
        $metadata: deserializeMetadata(output),
        ...contents,
    };
    return Promise.resolve(response);
};
exports.deserializeAws_json1_1ConnectDirectoryCommand = deserializeAws_json1_1ConnectDirectoryCommand;
const deserializeAws_json1_1ConnectDirectoryCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "ClientException":
        case "com.amazonaws.directoryservice#ClientException":
            response = {
                ...(await deserializeAws_json1_1ClientExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "DirectoryLimitExceededException":
        case "com.amazonaws.directoryservice#DirectoryLimitExceededException":
            response = {
                ...(await deserializeAws_json1_1DirectoryLimitExceededExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InvalidParameterException":
        case "com.amazonaws.directoryservice#InvalidParameterException":
            response = {
                ...(await deserializeAws_json1_1InvalidParameterExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ServiceException":
        case "com.amazonaws.directoryservice#ServiceException":
            response = {
                ...(await deserializeAws_json1_1ServiceExceptionResponse(parsedOutput, context)),
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
const deserializeAws_json1_1CreateAliasCommand = async (output, context) => {
    if (output.statusCode >= 300) {
        return deserializeAws_json1_1CreateAliasCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1CreateAliasResult(data, context);
    const response = {
        $metadata: deserializeMetadata(output),
        ...contents,
    };
    return Promise.resolve(response);
};
exports.deserializeAws_json1_1CreateAliasCommand = deserializeAws_json1_1CreateAliasCommand;
const deserializeAws_json1_1CreateAliasCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "ClientException":
        case "com.amazonaws.directoryservice#ClientException":
            response = {
                ...(await deserializeAws_json1_1ClientExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "EntityAlreadyExistsException":
        case "com.amazonaws.directoryservice#EntityAlreadyExistsException":
            response = {
                ...(await deserializeAws_json1_1EntityAlreadyExistsExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "EntityDoesNotExistException":
        case "com.amazonaws.directoryservice#EntityDoesNotExistException":
            response = {
                ...(await deserializeAws_json1_1EntityDoesNotExistExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InvalidParameterException":
        case "com.amazonaws.directoryservice#InvalidParameterException":
            response = {
                ...(await deserializeAws_json1_1InvalidParameterExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ServiceException":
        case "com.amazonaws.directoryservice#ServiceException":
            response = {
                ...(await deserializeAws_json1_1ServiceExceptionResponse(parsedOutput, context)),
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
const deserializeAws_json1_1CreateComputerCommand = async (output, context) => {
    if (output.statusCode >= 300) {
        return deserializeAws_json1_1CreateComputerCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1CreateComputerResult(data, context);
    const response = {
        $metadata: deserializeMetadata(output),
        ...contents,
    };
    return Promise.resolve(response);
};
exports.deserializeAws_json1_1CreateComputerCommand = deserializeAws_json1_1CreateComputerCommand;
const deserializeAws_json1_1CreateComputerCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "AuthenticationFailedException":
        case "com.amazonaws.directoryservice#AuthenticationFailedException":
            response = {
                ...(await deserializeAws_json1_1AuthenticationFailedExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ClientException":
        case "com.amazonaws.directoryservice#ClientException":
            response = {
                ...(await deserializeAws_json1_1ClientExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "DirectoryUnavailableException":
        case "com.amazonaws.directoryservice#DirectoryUnavailableException":
            response = {
                ...(await deserializeAws_json1_1DirectoryUnavailableExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "EntityAlreadyExistsException":
        case "com.amazonaws.directoryservice#EntityAlreadyExistsException":
            response = {
                ...(await deserializeAws_json1_1EntityAlreadyExistsExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "EntityDoesNotExistException":
        case "com.amazonaws.directoryservice#EntityDoesNotExistException":
            response = {
                ...(await deserializeAws_json1_1EntityDoesNotExistExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InvalidParameterException":
        case "com.amazonaws.directoryservice#InvalidParameterException":
            response = {
                ...(await deserializeAws_json1_1InvalidParameterExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ServiceException":
        case "com.amazonaws.directoryservice#ServiceException":
            response = {
                ...(await deserializeAws_json1_1ServiceExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "UnsupportedOperationException":
        case "com.amazonaws.directoryservice#UnsupportedOperationException":
            response = {
                ...(await deserializeAws_json1_1UnsupportedOperationExceptionResponse(parsedOutput, context)),
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
const deserializeAws_json1_1CreateConditionalForwarderCommand = async (output, context) => {
    if (output.statusCode >= 300) {
        return deserializeAws_json1_1CreateConditionalForwarderCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1CreateConditionalForwarderResult(data, context);
    const response = {
        $metadata: deserializeMetadata(output),
        ...contents,
    };
    return Promise.resolve(response);
};
exports.deserializeAws_json1_1CreateConditionalForwarderCommand = deserializeAws_json1_1CreateConditionalForwarderCommand;
const deserializeAws_json1_1CreateConditionalForwarderCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "ClientException":
        case "com.amazonaws.directoryservice#ClientException":
            response = {
                ...(await deserializeAws_json1_1ClientExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "DirectoryUnavailableException":
        case "com.amazonaws.directoryservice#DirectoryUnavailableException":
            response = {
                ...(await deserializeAws_json1_1DirectoryUnavailableExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "EntityAlreadyExistsException":
        case "com.amazonaws.directoryservice#EntityAlreadyExistsException":
            response = {
                ...(await deserializeAws_json1_1EntityAlreadyExistsExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "EntityDoesNotExistException":
        case "com.amazonaws.directoryservice#EntityDoesNotExistException":
            response = {
                ...(await deserializeAws_json1_1EntityDoesNotExistExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InvalidParameterException":
        case "com.amazonaws.directoryservice#InvalidParameterException":
            response = {
                ...(await deserializeAws_json1_1InvalidParameterExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ServiceException":
        case "com.amazonaws.directoryservice#ServiceException":
            response = {
                ...(await deserializeAws_json1_1ServiceExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "UnsupportedOperationException":
        case "com.amazonaws.directoryservice#UnsupportedOperationException":
            response = {
                ...(await deserializeAws_json1_1UnsupportedOperationExceptionResponse(parsedOutput, context)),
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
const deserializeAws_json1_1CreateDirectoryCommand = async (output, context) => {
    if (output.statusCode >= 300) {
        return deserializeAws_json1_1CreateDirectoryCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1CreateDirectoryResult(data, context);
    const response = {
        $metadata: deserializeMetadata(output),
        ...contents,
    };
    return Promise.resolve(response);
};
exports.deserializeAws_json1_1CreateDirectoryCommand = deserializeAws_json1_1CreateDirectoryCommand;
const deserializeAws_json1_1CreateDirectoryCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "ClientException":
        case "com.amazonaws.directoryservice#ClientException":
            response = {
                ...(await deserializeAws_json1_1ClientExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "DirectoryLimitExceededException":
        case "com.amazonaws.directoryservice#DirectoryLimitExceededException":
            response = {
                ...(await deserializeAws_json1_1DirectoryLimitExceededExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InvalidParameterException":
        case "com.amazonaws.directoryservice#InvalidParameterException":
            response = {
                ...(await deserializeAws_json1_1InvalidParameterExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ServiceException":
        case "com.amazonaws.directoryservice#ServiceException":
            response = {
                ...(await deserializeAws_json1_1ServiceExceptionResponse(parsedOutput, context)),
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
const deserializeAws_json1_1CreateLogSubscriptionCommand = async (output, context) => {
    if (output.statusCode >= 300) {
        return deserializeAws_json1_1CreateLogSubscriptionCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1CreateLogSubscriptionResult(data, context);
    const response = {
        $metadata: deserializeMetadata(output),
        ...contents,
    };
    return Promise.resolve(response);
};
exports.deserializeAws_json1_1CreateLogSubscriptionCommand = deserializeAws_json1_1CreateLogSubscriptionCommand;
const deserializeAws_json1_1CreateLogSubscriptionCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "ClientException":
        case "com.amazonaws.directoryservice#ClientException":
            response = {
                ...(await deserializeAws_json1_1ClientExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "EntityAlreadyExistsException":
        case "com.amazonaws.directoryservice#EntityAlreadyExistsException":
            response = {
                ...(await deserializeAws_json1_1EntityAlreadyExistsExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "EntityDoesNotExistException":
        case "com.amazonaws.directoryservice#EntityDoesNotExistException":
            response = {
                ...(await deserializeAws_json1_1EntityDoesNotExistExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InsufficientPermissionsException":
        case "com.amazonaws.directoryservice#InsufficientPermissionsException":
            response = {
                ...(await deserializeAws_json1_1InsufficientPermissionsExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ServiceException":
        case "com.amazonaws.directoryservice#ServiceException":
            response = {
                ...(await deserializeAws_json1_1ServiceExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "UnsupportedOperationException":
        case "com.amazonaws.directoryservice#UnsupportedOperationException":
            response = {
                ...(await deserializeAws_json1_1UnsupportedOperationExceptionResponse(parsedOutput, context)),
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
const deserializeAws_json1_1CreateMicrosoftADCommand = async (output, context) => {
    if (output.statusCode >= 300) {
        return deserializeAws_json1_1CreateMicrosoftADCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1CreateMicrosoftADResult(data, context);
    const response = {
        $metadata: deserializeMetadata(output),
        ...contents,
    };
    return Promise.resolve(response);
};
exports.deserializeAws_json1_1CreateMicrosoftADCommand = deserializeAws_json1_1CreateMicrosoftADCommand;
const deserializeAws_json1_1CreateMicrosoftADCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "ClientException":
        case "com.amazonaws.directoryservice#ClientException":
            response = {
                ...(await deserializeAws_json1_1ClientExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "DirectoryLimitExceededException":
        case "com.amazonaws.directoryservice#DirectoryLimitExceededException":
            response = {
                ...(await deserializeAws_json1_1DirectoryLimitExceededExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InvalidParameterException":
        case "com.amazonaws.directoryservice#InvalidParameterException":
            response = {
                ...(await deserializeAws_json1_1InvalidParameterExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ServiceException":
        case "com.amazonaws.directoryservice#ServiceException":
            response = {
                ...(await deserializeAws_json1_1ServiceExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "UnsupportedOperationException":
        case "com.amazonaws.directoryservice#UnsupportedOperationException":
            response = {
                ...(await deserializeAws_json1_1UnsupportedOperationExceptionResponse(parsedOutput, context)),
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
const deserializeAws_json1_1CreateSnapshotCommand = async (output, context) => {
    if (output.statusCode >= 300) {
        return deserializeAws_json1_1CreateSnapshotCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1CreateSnapshotResult(data, context);
    const response = {
        $metadata: deserializeMetadata(output),
        ...contents,
    };
    return Promise.resolve(response);
};
exports.deserializeAws_json1_1CreateSnapshotCommand = deserializeAws_json1_1CreateSnapshotCommand;
const deserializeAws_json1_1CreateSnapshotCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "ClientException":
        case "com.amazonaws.directoryservice#ClientException":
            response = {
                ...(await deserializeAws_json1_1ClientExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "EntityDoesNotExistException":
        case "com.amazonaws.directoryservice#EntityDoesNotExistException":
            response = {
                ...(await deserializeAws_json1_1EntityDoesNotExistExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InvalidParameterException":
        case "com.amazonaws.directoryservice#InvalidParameterException":
            response = {
                ...(await deserializeAws_json1_1InvalidParameterExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ServiceException":
        case "com.amazonaws.directoryservice#ServiceException":
            response = {
                ...(await deserializeAws_json1_1ServiceExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "SnapshotLimitExceededException":
        case "com.amazonaws.directoryservice#SnapshotLimitExceededException":
            response = {
                ...(await deserializeAws_json1_1SnapshotLimitExceededExceptionResponse(parsedOutput, context)),
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
const deserializeAws_json1_1CreateTrustCommand = async (output, context) => {
    if (output.statusCode >= 300) {
        return deserializeAws_json1_1CreateTrustCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1CreateTrustResult(data, context);
    const response = {
        $metadata: deserializeMetadata(output),
        ...contents,
    };
    return Promise.resolve(response);
};
exports.deserializeAws_json1_1CreateTrustCommand = deserializeAws_json1_1CreateTrustCommand;
const deserializeAws_json1_1CreateTrustCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "ClientException":
        case "com.amazonaws.directoryservice#ClientException":
            response = {
                ...(await deserializeAws_json1_1ClientExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "EntityAlreadyExistsException":
        case "com.amazonaws.directoryservice#EntityAlreadyExistsException":
            response = {
                ...(await deserializeAws_json1_1EntityAlreadyExistsExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "EntityDoesNotExistException":
        case "com.amazonaws.directoryservice#EntityDoesNotExistException":
            response = {
                ...(await deserializeAws_json1_1EntityDoesNotExistExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InvalidParameterException":
        case "com.amazonaws.directoryservice#InvalidParameterException":
            response = {
                ...(await deserializeAws_json1_1InvalidParameterExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ServiceException":
        case "com.amazonaws.directoryservice#ServiceException":
            response = {
                ...(await deserializeAws_json1_1ServiceExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "UnsupportedOperationException":
        case "com.amazonaws.directoryservice#UnsupportedOperationException":
            response = {
                ...(await deserializeAws_json1_1UnsupportedOperationExceptionResponse(parsedOutput, context)),
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
const deserializeAws_json1_1DeleteConditionalForwarderCommand = async (output, context) => {
    if (output.statusCode >= 300) {
        return deserializeAws_json1_1DeleteConditionalForwarderCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1DeleteConditionalForwarderResult(data, context);
    const response = {
        $metadata: deserializeMetadata(output),
        ...contents,
    };
    return Promise.resolve(response);
};
exports.deserializeAws_json1_1DeleteConditionalForwarderCommand = deserializeAws_json1_1DeleteConditionalForwarderCommand;
const deserializeAws_json1_1DeleteConditionalForwarderCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "ClientException":
        case "com.amazonaws.directoryservice#ClientException":
            response = {
                ...(await deserializeAws_json1_1ClientExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "DirectoryUnavailableException":
        case "com.amazonaws.directoryservice#DirectoryUnavailableException":
            response = {
                ...(await deserializeAws_json1_1DirectoryUnavailableExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "EntityDoesNotExistException":
        case "com.amazonaws.directoryservice#EntityDoesNotExistException":
            response = {
                ...(await deserializeAws_json1_1EntityDoesNotExistExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InvalidParameterException":
        case "com.amazonaws.directoryservice#InvalidParameterException":
            response = {
                ...(await deserializeAws_json1_1InvalidParameterExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ServiceException":
        case "com.amazonaws.directoryservice#ServiceException":
            response = {
                ...(await deserializeAws_json1_1ServiceExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "UnsupportedOperationException":
        case "com.amazonaws.directoryservice#UnsupportedOperationException":
            response = {
                ...(await deserializeAws_json1_1UnsupportedOperationExceptionResponse(parsedOutput, context)),
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
const deserializeAws_json1_1DeleteDirectoryCommand = async (output, context) => {
    if (output.statusCode >= 300) {
        return deserializeAws_json1_1DeleteDirectoryCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1DeleteDirectoryResult(data, context);
    const response = {
        $metadata: deserializeMetadata(output),
        ...contents,
    };
    return Promise.resolve(response);
};
exports.deserializeAws_json1_1DeleteDirectoryCommand = deserializeAws_json1_1DeleteDirectoryCommand;
const deserializeAws_json1_1DeleteDirectoryCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "ClientException":
        case "com.amazonaws.directoryservice#ClientException":
            response = {
                ...(await deserializeAws_json1_1ClientExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "EntityDoesNotExistException":
        case "com.amazonaws.directoryservice#EntityDoesNotExistException":
            response = {
                ...(await deserializeAws_json1_1EntityDoesNotExistExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ServiceException":
        case "com.amazonaws.directoryservice#ServiceException":
            response = {
                ...(await deserializeAws_json1_1ServiceExceptionResponse(parsedOutput, context)),
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
const deserializeAws_json1_1DeleteLogSubscriptionCommand = async (output, context) => {
    if (output.statusCode >= 300) {
        return deserializeAws_json1_1DeleteLogSubscriptionCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1DeleteLogSubscriptionResult(data, context);
    const response = {
        $metadata: deserializeMetadata(output),
        ...contents,
    };
    return Promise.resolve(response);
};
exports.deserializeAws_json1_1DeleteLogSubscriptionCommand = deserializeAws_json1_1DeleteLogSubscriptionCommand;
const deserializeAws_json1_1DeleteLogSubscriptionCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "ClientException":
        case "com.amazonaws.directoryservice#ClientException":
            response = {
                ...(await deserializeAws_json1_1ClientExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "EntityDoesNotExistException":
        case "com.amazonaws.directoryservice#EntityDoesNotExistException":
            response = {
                ...(await deserializeAws_json1_1EntityDoesNotExistExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ServiceException":
        case "com.amazonaws.directoryservice#ServiceException":
            response = {
                ...(await deserializeAws_json1_1ServiceExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "UnsupportedOperationException":
        case "com.amazonaws.directoryservice#UnsupportedOperationException":
            response = {
                ...(await deserializeAws_json1_1UnsupportedOperationExceptionResponse(parsedOutput, context)),
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
const deserializeAws_json1_1DeleteSnapshotCommand = async (output, context) => {
    if (output.statusCode >= 300) {
        return deserializeAws_json1_1DeleteSnapshotCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1DeleteSnapshotResult(data, context);
    const response = {
        $metadata: deserializeMetadata(output),
        ...contents,
    };
    return Promise.resolve(response);
};
exports.deserializeAws_json1_1DeleteSnapshotCommand = deserializeAws_json1_1DeleteSnapshotCommand;
const deserializeAws_json1_1DeleteSnapshotCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "ClientException":
        case "com.amazonaws.directoryservice#ClientException":
            response = {
                ...(await deserializeAws_json1_1ClientExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "EntityDoesNotExistException":
        case "com.amazonaws.directoryservice#EntityDoesNotExistException":
            response = {
                ...(await deserializeAws_json1_1EntityDoesNotExistExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InvalidParameterException":
        case "com.amazonaws.directoryservice#InvalidParameterException":
            response = {
                ...(await deserializeAws_json1_1InvalidParameterExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ServiceException":
        case "com.amazonaws.directoryservice#ServiceException":
            response = {
                ...(await deserializeAws_json1_1ServiceExceptionResponse(parsedOutput, context)),
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
const deserializeAws_json1_1DeleteTrustCommand = async (output, context) => {
    if (output.statusCode >= 300) {
        return deserializeAws_json1_1DeleteTrustCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1DeleteTrustResult(data, context);
    const response = {
        $metadata: deserializeMetadata(output),
        ...contents,
    };
    return Promise.resolve(response);
};
exports.deserializeAws_json1_1DeleteTrustCommand = deserializeAws_json1_1DeleteTrustCommand;
const deserializeAws_json1_1DeleteTrustCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "ClientException":
        case "com.amazonaws.directoryservice#ClientException":
            response = {
                ...(await deserializeAws_json1_1ClientExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "EntityDoesNotExistException":
        case "com.amazonaws.directoryservice#EntityDoesNotExistException":
            response = {
                ...(await deserializeAws_json1_1EntityDoesNotExistExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InvalidParameterException":
        case "com.amazonaws.directoryservice#InvalidParameterException":
            response = {
                ...(await deserializeAws_json1_1InvalidParameterExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ServiceException":
        case "com.amazonaws.directoryservice#ServiceException":
            response = {
                ...(await deserializeAws_json1_1ServiceExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "UnsupportedOperationException":
        case "com.amazonaws.directoryservice#UnsupportedOperationException":
            response = {
                ...(await deserializeAws_json1_1UnsupportedOperationExceptionResponse(parsedOutput, context)),
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
const deserializeAws_json1_1DeregisterCertificateCommand = async (output, context) => {
    if (output.statusCode >= 300) {
        return deserializeAws_json1_1DeregisterCertificateCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1DeregisterCertificateResult(data, context);
    const response = {
        $metadata: deserializeMetadata(output),
        ...contents,
    };
    return Promise.resolve(response);
};
exports.deserializeAws_json1_1DeregisterCertificateCommand = deserializeAws_json1_1DeregisterCertificateCommand;
const deserializeAws_json1_1DeregisterCertificateCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "CertificateDoesNotExistException":
        case "com.amazonaws.directoryservice#CertificateDoesNotExistException":
            response = {
                ...(await deserializeAws_json1_1CertificateDoesNotExistExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "CertificateInUseException":
        case "com.amazonaws.directoryservice#CertificateInUseException":
            response = {
                ...(await deserializeAws_json1_1CertificateInUseExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ClientException":
        case "com.amazonaws.directoryservice#ClientException":
            response = {
                ...(await deserializeAws_json1_1ClientExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "DirectoryDoesNotExistException":
        case "com.amazonaws.directoryservice#DirectoryDoesNotExistException":
            response = {
                ...(await deserializeAws_json1_1DirectoryDoesNotExistExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "DirectoryUnavailableException":
        case "com.amazonaws.directoryservice#DirectoryUnavailableException":
            response = {
                ...(await deserializeAws_json1_1DirectoryUnavailableExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InvalidParameterException":
        case "com.amazonaws.directoryservice#InvalidParameterException":
            response = {
                ...(await deserializeAws_json1_1InvalidParameterExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ServiceException":
        case "com.amazonaws.directoryservice#ServiceException":
            response = {
                ...(await deserializeAws_json1_1ServiceExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "UnsupportedOperationException":
        case "com.amazonaws.directoryservice#UnsupportedOperationException":
            response = {
                ...(await deserializeAws_json1_1UnsupportedOperationExceptionResponse(parsedOutput, context)),
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
const deserializeAws_json1_1DeregisterEventTopicCommand = async (output, context) => {
    if (output.statusCode >= 300) {
        return deserializeAws_json1_1DeregisterEventTopicCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1DeregisterEventTopicResult(data, context);
    const response = {
        $metadata: deserializeMetadata(output),
        ...contents,
    };
    return Promise.resolve(response);
};
exports.deserializeAws_json1_1DeregisterEventTopicCommand = deserializeAws_json1_1DeregisterEventTopicCommand;
const deserializeAws_json1_1DeregisterEventTopicCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "ClientException":
        case "com.amazonaws.directoryservice#ClientException":
            response = {
                ...(await deserializeAws_json1_1ClientExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "EntityDoesNotExistException":
        case "com.amazonaws.directoryservice#EntityDoesNotExistException":
            response = {
                ...(await deserializeAws_json1_1EntityDoesNotExistExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InvalidParameterException":
        case "com.amazonaws.directoryservice#InvalidParameterException":
            response = {
                ...(await deserializeAws_json1_1InvalidParameterExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ServiceException":
        case "com.amazonaws.directoryservice#ServiceException":
            response = {
                ...(await deserializeAws_json1_1ServiceExceptionResponse(parsedOutput, context)),
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
const deserializeAws_json1_1DescribeCertificateCommand = async (output, context) => {
    if (output.statusCode >= 300) {
        return deserializeAws_json1_1DescribeCertificateCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1DescribeCertificateResult(data, context);
    const response = {
        $metadata: deserializeMetadata(output),
        ...contents,
    };
    return Promise.resolve(response);
};
exports.deserializeAws_json1_1DescribeCertificateCommand = deserializeAws_json1_1DescribeCertificateCommand;
const deserializeAws_json1_1DescribeCertificateCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "CertificateDoesNotExistException":
        case "com.amazonaws.directoryservice#CertificateDoesNotExistException":
            response = {
                ...(await deserializeAws_json1_1CertificateDoesNotExistExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ClientException":
        case "com.amazonaws.directoryservice#ClientException":
            response = {
                ...(await deserializeAws_json1_1ClientExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "DirectoryDoesNotExistException":
        case "com.amazonaws.directoryservice#DirectoryDoesNotExistException":
            response = {
                ...(await deserializeAws_json1_1DirectoryDoesNotExistExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InvalidParameterException":
        case "com.amazonaws.directoryservice#InvalidParameterException":
            response = {
                ...(await deserializeAws_json1_1InvalidParameterExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ServiceException":
        case "com.amazonaws.directoryservice#ServiceException":
            response = {
                ...(await deserializeAws_json1_1ServiceExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "UnsupportedOperationException":
        case "com.amazonaws.directoryservice#UnsupportedOperationException":
            response = {
                ...(await deserializeAws_json1_1UnsupportedOperationExceptionResponse(parsedOutput, context)),
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
const deserializeAws_json1_1DescribeConditionalForwardersCommand = async (output, context) => {
    if (output.statusCode >= 300) {
        return deserializeAws_json1_1DescribeConditionalForwardersCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1DescribeConditionalForwardersResult(data, context);
    const response = {
        $metadata: deserializeMetadata(output),
        ...contents,
    };
    return Promise.resolve(response);
};
exports.deserializeAws_json1_1DescribeConditionalForwardersCommand = deserializeAws_json1_1DescribeConditionalForwardersCommand;
const deserializeAws_json1_1DescribeConditionalForwardersCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "ClientException":
        case "com.amazonaws.directoryservice#ClientException":
            response = {
                ...(await deserializeAws_json1_1ClientExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "DirectoryUnavailableException":
        case "com.amazonaws.directoryservice#DirectoryUnavailableException":
            response = {
                ...(await deserializeAws_json1_1DirectoryUnavailableExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "EntityDoesNotExistException":
        case "com.amazonaws.directoryservice#EntityDoesNotExistException":
            response = {
                ...(await deserializeAws_json1_1EntityDoesNotExistExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InvalidParameterException":
        case "com.amazonaws.directoryservice#InvalidParameterException":
            response = {
                ...(await deserializeAws_json1_1InvalidParameterExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ServiceException":
        case "com.amazonaws.directoryservice#ServiceException":
            response = {
                ...(await deserializeAws_json1_1ServiceExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "UnsupportedOperationException":
        case "com.amazonaws.directoryservice#UnsupportedOperationException":
            response = {
                ...(await deserializeAws_json1_1UnsupportedOperationExceptionResponse(parsedOutput, context)),
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
const deserializeAws_json1_1DescribeDirectoriesCommand = async (output, context) => {
    if (output.statusCode >= 300) {
        return deserializeAws_json1_1DescribeDirectoriesCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1DescribeDirectoriesResult(data, context);
    const response = {
        $metadata: deserializeMetadata(output),
        ...contents,
    };
    return Promise.resolve(response);
};
exports.deserializeAws_json1_1DescribeDirectoriesCommand = deserializeAws_json1_1DescribeDirectoriesCommand;
const deserializeAws_json1_1DescribeDirectoriesCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "ClientException":
        case "com.amazonaws.directoryservice#ClientException":
            response = {
                ...(await deserializeAws_json1_1ClientExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "EntityDoesNotExistException":
        case "com.amazonaws.directoryservice#EntityDoesNotExistException":
            response = {
                ...(await deserializeAws_json1_1EntityDoesNotExistExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InvalidNextTokenException":
        case "com.amazonaws.directoryservice#InvalidNextTokenException":
            response = {
                ...(await deserializeAws_json1_1InvalidNextTokenExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InvalidParameterException":
        case "com.amazonaws.directoryservice#InvalidParameterException":
            response = {
                ...(await deserializeAws_json1_1InvalidParameterExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ServiceException":
        case "com.amazonaws.directoryservice#ServiceException":
            response = {
                ...(await deserializeAws_json1_1ServiceExceptionResponse(parsedOutput, context)),
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
const deserializeAws_json1_1DescribeDomainControllersCommand = async (output, context) => {
    if (output.statusCode >= 300) {
        return deserializeAws_json1_1DescribeDomainControllersCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1DescribeDomainControllersResult(data, context);
    const response = {
        $metadata: deserializeMetadata(output),
        ...contents,
    };
    return Promise.resolve(response);
};
exports.deserializeAws_json1_1DescribeDomainControllersCommand = deserializeAws_json1_1DescribeDomainControllersCommand;
const deserializeAws_json1_1DescribeDomainControllersCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "ClientException":
        case "com.amazonaws.directoryservice#ClientException":
            response = {
                ...(await deserializeAws_json1_1ClientExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "EntityDoesNotExistException":
        case "com.amazonaws.directoryservice#EntityDoesNotExistException":
            response = {
                ...(await deserializeAws_json1_1EntityDoesNotExistExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InvalidNextTokenException":
        case "com.amazonaws.directoryservice#InvalidNextTokenException":
            response = {
                ...(await deserializeAws_json1_1InvalidNextTokenExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InvalidParameterException":
        case "com.amazonaws.directoryservice#InvalidParameterException":
            response = {
                ...(await deserializeAws_json1_1InvalidParameterExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ServiceException":
        case "com.amazonaws.directoryservice#ServiceException":
            response = {
                ...(await deserializeAws_json1_1ServiceExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "UnsupportedOperationException":
        case "com.amazonaws.directoryservice#UnsupportedOperationException":
            response = {
                ...(await deserializeAws_json1_1UnsupportedOperationExceptionResponse(parsedOutput, context)),
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
const deserializeAws_json1_1DescribeEventTopicsCommand = async (output, context) => {
    if (output.statusCode >= 300) {
        return deserializeAws_json1_1DescribeEventTopicsCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1DescribeEventTopicsResult(data, context);
    const response = {
        $metadata: deserializeMetadata(output),
        ...contents,
    };
    return Promise.resolve(response);
};
exports.deserializeAws_json1_1DescribeEventTopicsCommand = deserializeAws_json1_1DescribeEventTopicsCommand;
const deserializeAws_json1_1DescribeEventTopicsCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "ClientException":
        case "com.amazonaws.directoryservice#ClientException":
            response = {
                ...(await deserializeAws_json1_1ClientExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "EntityDoesNotExistException":
        case "com.amazonaws.directoryservice#EntityDoesNotExistException":
            response = {
                ...(await deserializeAws_json1_1EntityDoesNotExistExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InvalidParameterException":
        case "com.amazonaws.directoryservice#InvalidParameterException":
            response = {
                ...(await deserializeAws_json1_1InvalidParameterExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ServiceException":
        case "com.amazonaws.directoryservice#ServiceException":
            response = {
                ...(await deserializeAws_json1_1ServiceExceptionResponse(parsedOutput, context)),
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
const deserializeAws_json1_1DescribeLDAPSSettingsCommand = async (output, context) => {
    if (output.statusCode >= 300) {
        return deserializeAws_json1_1DescribeLDAPSSettingsCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1DescribeLDAPSSettingsResult(data, context);
    const response = {
        $metadata: deserializeMetadata(output),
        ...contents,
    };
    return Promise.resolve(response);
};
exports.deserializeAws_json1_1DescribeLDAPSSettingsCommand = deserializeAws_json1_1DescribeLDAPSSettingsCommand;
const deserializeAws_json1_1DescribeLDAPSSettingsCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "ClientException":
        case "com.amazonaws.directoryservice#ClientException":
            response = {
                ...(await deserializeAws_json1_1ClientExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "DirectoryDoesNotExistException":
        case "com.amazonaws.directoryservice#DirectoryDoesNotExistException":
            response = {
                ...(await deserializeAws_json1_1DirectoryDoesNotExistExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InvalidNextTokenException":
        case "com.amazonaws.directoryservice#InvalidNextTokenException":
            response = {
                ...(await deserializeAws_json1_1InvalidNextTokenExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InvalidParameterException":
        case "com.amazonaws.directoryservice#InvalidParameterException":
            response = {
                ...(await deserializeAws_json1_1InvalidParameterExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ServiceException":
        case "com.amazonaws.directoryservice#ServiceException":
            response = {
                ...(await deserializeAws_json1_1ServiceExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "UnsupportedOperationException":
        case "com.amazonaws.directoryservice#UnsupportedOperationException":
            response = {
                ...(await deserializeAws_json1_1UnsupportedOperationExceptionResponse(parsedOutput, context)),
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
const deserializeAws_json1_1DescribeRegionsCommand = async (output, context) => {
    if (output.statusCode >= 300) {
        return deserializeAws_json1_1DescribeRegionsCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1DescribeRegionsResult(data, context);
    const response = {
        $metadata: deserializeMetadata(output),
        ...contents,
    };
    return Promise.resolve(response);
};
exports.deserializeAws_json1_1DescribeRegionsCommand = deserializeAws_json1_1DescribeRegionsCommand;
const deserializeAws_json1_1DescribeRegionsCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "AccessDeniedException":
        case "com.amazonaws.directoryservice#AccessDeniedException":
            response = {
                ...(await deserializeAws_json1_1AccessDeniedExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ClientException":
        case "com.amazonaws.directoryservice#ClientException":
            response = {
                ...(await deserializeAws_json1_1ClientExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "DirectoryDoesNotExistException":
        case "com.amazonaws.directoryservice#DirectoryDoesNotExistException":
            response = {
                ...(await deserializeAws_json1_1DirectoryDoesNotExistExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InvalidNextTokenException":
        case "com.amazonaws.directoryservice#InvalidNextTokenException":
            response = {
                ...(await deserializeAws_json1_1InvalidNextTokenExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InvalidParameterException":
        case "com.amazonaws.directoryservice#InvalidParameterException":
            response = {
                ...(await deserializeAws_json1_1InvalidParameterExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ServiceException":
        case "com.amazonaws.directoryservice#ServiceException":
            response = {
                ...(await deserializeAws_json1_1ServiceExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "UnsupportedOperationException":
        case "com.amazonaws.directoryservice#UnsupportedOperationException":
            response = {
                ...(await deserializeAws_json1_1UnsupportedOperationExceptionResponse(parsedOutput, context)),
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
const deserializeAws_json1_1DescribeSharedDirectoriesCommand = async (output, context) => {
    if (output.statusCode >= 300) {
        return deserializeAws_json1_1DescribeSharedDirectoriesCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1DescribeSharedDirectoriesResult(data, context);
    const response = {
        $metadata: deserializeMetadata(output),
        ...contents,
    };
    return Promise.resolve(response);
};
exports.deserializeAws_json1_1DescribeSharedDirectoriesCommand = deserializeAws_json1_1DescribeSharedDirectoriesCommand;
const deserializeAws_json1_1DescribeSharedDirectoriesCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "ClientException":
        case "com.amazonaws.directoryservice#ClientException":
            response = {
                ...(await deserializeAws_json1_1ClientExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "EntityDoesNotExistException":
        case "com.amazonaws.directoryservice#EntityDoesNotExistException":
            response = {
                ...(await deserializeAws_json1_1EntityDoesNotExistExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InvalidNextTokenException":
        case "com.amazonaws.directoryservice#InvalidNextTokenException":
            response = {
                ...(await deserializeAws_json1_1InvalidNextTokenExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InvalidParameterException":
        case "com.amazonaws.directoryservice#InvalidParameterException":
            response = {
                ...(await deserializeAws_json1_1InvalidParameterExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ServiceException":
        case "com.amazonaws.directoryservice#ServiceException":
            response = {
                ...(await deserializeAws_json1_1ServiceExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "UnsupportedOperationException":
        case "com.amazonaws.directoryservice#UnsupportedOperationException":
            response = {
                ...(await deserializeAws_json1_1UnsupportedOperationExceptionResponse(parsedOutput, context)),
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
const deserializeAws_json1_1DescribeSnapshotsCommand = async (output, context) => {
    if (output.statusCode >= 300) {
        return deserializeAws_json1_1DescribeSnapshotsCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1DescribeSnapshotsResult(data, context);
    const response = {
        $metadata: deserializeMetadata(output),
        ...contents,
    };
    return Promise.resolve(response);
};
exports.deserializeAws_json1_1DescribeSnapshotsCommand = deserializeAws_json1_1DescribeSnapshotsCommand;
const deserializeAws_json1_1DescribeSnapshotsCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "ClientException":
        case "com.amazonaws.directoryservice#ClientException":
            response = {
                ...(await deserializeAws_json1_1ClientExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "EntityDoesNotExistException":
        case "com.amazonaws.directoryservice#EntityDoesNotExistException":
            response = {
                ...(await deserializeAws_json1_1EntityDoesNotExistExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InvalidNextTokenException":
        case "com.amazonaws.directoryservice#InvalidNextTokenException":
            response = {
                ...(await deserializeAws_json1_1InvalidNextTokenExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InvalidParameterException":
        case "com.amazonaws.directoryservice#InvalidParameterException":
            response = {
                ...(await deserializeAws_json1_1InvalidParameterExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ServiceException":
        case "com.amazonaws.directoryservice#ServiceException":
            response = {
                ...(await deserializeAws_json1_1ServiceExceptionResponse(parsedOutput, context)),
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
const deserializeAws_json1_1DescribeTrustsCommand = async (output, context) => {
    if (output.statusCode >= 300) {
        return deserializeAws_json1_1DescribeTrustsCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1DescribeTrustsResult(data, context);
    const response = {
        $metadata: deserializeMetadata(output),
        ...contents,
    };
    return Promise.resolve(response);
};
exports.deserializeAws_json1_1DescribeTrustsCommand = deserializeAws_json1_1DescribeTrustsCommand;
const deserializeAws_json1_1DescribeTrustsCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "ClientException":
        case "com.amazonaws.directoryservice#ClientException":
            response = {
                ...(await deserializeAws_json1_1ClientExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "EntityDoesNotExistException":
        case "com.amazonaws.directoryservice#EntityDoesNotExistException":
            response = {
                ...(await deserializeAws_json1_1EntityDoesNotExistExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InvalidNextTokenException":
        case "com.amazonaws.directoryservice#InvalidNextTokenException":
            response = {
                ...(await deserializeAws_json1_1InvalidNextTokenExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InvalidParameterException":
        case "com.amazonaws.directoryservice#InvalidParameterException":
            response = {
                ...(await deserializeAws_json1_1InvalidParameterExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ServiceException":
        case "com.amazonaws.directoryservice#ServiceException":
            response = {
                ...(await deserializeAws_json1_1ServiceExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "UnsupportedOperationException":
        case "com.amazonaws.directoryservice#UnsupportedOperationException":
            response = {
                ...(await deserializeAws_json1_1UnsupportedOperationExceptionResponse(parsedOutput, context)),
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
const deserializeAws_json1_1DisableClientAuthenticationCommand = async (output, context) => {
    if (output.statusCode >= 300) {
        return deserializeAws_json1_1DisableClientAuthenticationCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1DisableClientAuthenticationResult(data, context);
    const response = {
        $metadata: deserializeMetadata(output),
        ...contents,
    };
    return Promise.resolve(response);
};
exports.deserializeAws_json1_1DisableClientAuthenticationCommand = deserializeAws_json1_1DisableClientAuthenticationCommand;
const deserializeAws_json1_1DisableClientAuthenticationCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "AccessDeniedException":
        case "com.amazonaws.directoryservice#AccessDeniedException":
            response = {
                ...(await deserializeAws_json1_1AccessDeniedExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ClientException":
        case "com.amazonaws.directoryservice#ClientException":
            response = {
                ...(await deserializeAws_json1_1ClientExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "DirectoryDoesNotExistException":
        case "com.amazonaws.directoryservice#DirectoryDoesNotExistException":
            response = {
                ...(await deserializeAws_json1_1DirectoryDoesNotExistExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InvalidClientAuthStatusException":
        case "com.amazonaws.directoryservice#InvalidClientAuthStatusException":
            response = {
                ...(await deserializeAws_json1_1InvalidClientAuthStatusExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ServiceException":
        case "com.amazonaws.directoryservice#ServiceException":
            response = {
                ...(await deserializeAws_json1_1ServiceExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "UnsupportedOperationException":
        case "com.amazonaws.directoryservice#UnsupportedOperationException":
            response = {
                ...(await deserializeAws_json1_1UnsupportedOperationExceptionResponse(parsedOutput, context)),
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
const deserializeAws_json1_1DisableLDAPSCommand = async (output, context) => {
    if (output.statusCode >= 300) {
        return deserializeAws_json1_1DisableLDAPSCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1DisableLDAPSResult(data, context);
    const response = {
        $metadata: deserializeMetadata(output),
        ...contents,
    };
    return Promise.resolve(response);
};
exports.deserializeAws_json1_1DisableLDAPSCommand = deserializeAws_json1_1DisableLDAPSCommand;
const deserializeAws_json1_1DisableLDAPSCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "ClientException":
        case "com.amazonaws.directoryservice#ClientException":
            response = {
                ...(await deserializeAws_json1_1ClientExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "DirectoryDoesNotExistException":
        case "com.amazonaws.directoryservice#DirectoryDoesNotExistException":
            response = {
                ...(await deserializeAws_json1_1DirectoryDoesNotExistExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "DirectoryUnavailableException":
        case "com.amazonaws.directoryservice#DirectoryUnavailableException":
            response = {
                ...(await deserializeAws_json1_1DirectoryUnavailableExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InvalidLDAPSStatusException":
        case "com.amazonaws.directoryservice#InvalidLDAPSStatusException":
            response = {
                ...(await deserializeAws_json1_1InvalidLDAPSStatusExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InvalidParameterException":
        case "com.amazonaws.directoryservice#InvalidParameterException":
            response = {
                ...(await deserializeAws_json1_1InvalidParameterExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ServiceException":
        case "com.amazonaws.directoryservice#ServiceException":
            response = {
                ...(await deserializeAws_json1_1ServiceExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "UnsupportedOperationException":
        case "com.amazonaws.directoryservice#UnsupportedOperationException":
            response = {
                ...(await deserializeAws_json1_1UnsupportedOperationExceptionResponse(parsedOutput, context)),
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
const deserializeAws_json1_1DisableRadiusCommand = async (output, context) => {
    if (output.statusCode >= 300) {
        return deserializeAws_json1_1DisableRadiusCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1DisableRadiusResult(data, context);
    const response = {
        $metadata: deserializeMetadata(output),
        ...contents,
    };
    return Promise.resolve(response);
};
exports.deserializeAws_json1_1DisableRadiusCommand = deserializeAws_json1_1DisableRadiusCommand;
const deserializeAws_json1_1DisableRadiusCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "ClientException":
        case "com.amazonaws.directoryservice#ClientException":
            response = {
                ...(await deserializeAws_json1_1ClientExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "EntityDoesNotExistException":
        case "com.amazonaws.directoryservice#EntityDoesNotExistException":
            response = {
                ...(await deserializeAws_json1_1EntityDoesNotExistExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ServiceException":
        case "com.amazonaws.directoryservice#ServiceException":
            response = {
                ...(await deserializeAws_json1_1ServiceExceptionResponse(parsedOutput, context)),
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
const deserializeAws_json1_1DisableSsoCommand = async (output, context) => {
    if (output.statusCode >= 300) {
        return deserializeAws_json1_1DisableSsoCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1DisableSsoResult(data, context);
    const response = {
        $metadata: deserializeMetadata(output),
        ...contents,
    };
    return Promise.resolve(response);
};
exports.deserializeAws_json1_1DisableSsoCommand = deserializeAws_json1_1DisableSsoCommand;
const deserializeAws_json1_1DisableSsoCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "AuthenticationFailedException":
        case "com.amazonaws.directoryservice#AuthenticationFailedException":
            response = {
                ...(await deserializeAws_json1_1AuthenticationFailedExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ClientException":
        case "com.amazonaws.directoryservice#ClientException":
            response = {
                ...(await deserializeAws_json1_1ClientExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "EntityDoesNotExistException":
        case "com.amazonaws.directoryservice#EntityDoesNotExistException":
            response = {
                ...(await deserializeAws_json1_1EntityDoesNotExistExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InsufficientPermissionsException":
        case "com.amazonaws.directoryservice#InsufficientPermissionsException":
            response = {
                ...(await deserializeAws_json1_1InsufficientPermissionsExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ServiceException":
        case "com.amazonaws.directoryservice#ServiceException":
            response = {
                ...(await deserializeAws_json1_1ServiceExceptionResponse(parsedOutput, context)),
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
const deserializeAws_json1_1EnableClientAuthenticationCommand = async (output, context) => {
    if (output.statusCode >= 300) {
        return deserializeAws_json1_1EnableClientAuthenticationCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1EnableClientAuthenticationResult(data, context);
    const response = {
        $metadata: deserializeMetadata(output),
        ...contents,
    };
    return Promise.resolve(response);
};
exports.deserializeAws_json1_1EnableClientAuthenticationCommand = deserializeAws_json1_1EnableClientAuthenticationCommand;
const deserializeAws_json1_1EnableClientAuthenticationCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "AccessDeniedException":
        case "com.amazonaws.directoryservice#AccessDeniedException":
            response = {
                ...(await deserializeAws_json1_1AccessDeniedExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ClientException":
        case "com.amazonaws.directoryservice#ClientException":
            response = {
                ...(await deserializeAws_json1_1ClientExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "DirectoryDoesNotExistException":
        case "com.amazonaws.directoryservice#DirectoryDoesNotExistException":
            response = {
                ...(await deserializeAws_json1_1DirectoryDoesNotExistExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InvalidClientAuthStatusException":
        case "com.amazonaws.directoryservice#InvalidClientAuthStatusException":
            response = {
                ...(await deserializeAws_json1_1InvalidClientAuthStatusExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "NoAvailableCertificateException":
        case "com.amazonaws.directoryservice#NoAvailableCertificateException":
            response = {
                ...(await deserializeAws_json1_1NoAvailableCertificateExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ServiceException":
        case "com.amazonaws.directoryservice#ServiceException":
            response = {
                ...(await deserializeAws_json1_1ServiceExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "UnsupportedOperationException":
        case "com.amazonaws.directoryservice#UnsupportedOperationException":
            response = {
                ...(await deserializeAws_json1_1UnsupportedOperationExceptionResponse(parsedOutput, context)),
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
const deserializeAws_json1_1EnableLDAPSCommand = async (output, context) => {
    if (output.statusCode >= 300) {
        return deserializeAws_json1_1EnableLDAPSCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1EnableLDAPSResult(data, context);
    const response = {
        $metadata: deserializeMetadata(output),
        ...contents,
    };
    return Promise.resolve(response);
};
exports.deserializeAws_json1_1EnableLDAPSCommand = deserializeAws_json1_1EnableLDAPSCommand;
const deserializeAws_json1_1EnableLDAPSCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "ClientException":
        case "com.amazonaws.directoryservice#ClientException":
            response = {
                ...(await deserializeAws_json1_1ClientExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "DirectoryDoesNotExistException":
        case "com.amazonaws.directoryservice#DirectoryDoesNotExistException":
            response = {
                ...(await deserializeAws_json1_1DirectoryDoesNotExistExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "DirectoryUnavailableException":
        case "com.amazonaws.directoryservice#DirectoryUnavailableException":
            response = {
                ...(await deserializeAws_json1_1DirectoryUnavailableExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InvalidLDAPSStatusException":
        case "com.amazonaws.directoryservice#InvalidLDAPSStatusException":
            response = {
                ...(await deserializeAws_json1_1InvalidLDAPSStatusExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InvalidParameterException":
        case "com.amazonaws.directoryservice#InvalidParameterException":
            response = {
                ...(await deserializeAws_json1_1InvalidParameterExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "NoAvailableCertificateException":
        case "com.amazonaws.directoryservice#NoAvailableCertificateException":
            response = {
                ...(await deserializeAws_json1_1NoAvailableCertificateExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ServiceException":
        case "com.amazonaws.directoryservice#ServiceException":
            response = {
                ...(await deserializeAws_json1_1ServiceExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "UnsupportedOperationException":
        case "com.amazonaws.directoryservice#UnsupportedOperationException":
            response = {
                ...(await deserializeAws_json1_1UnsupportedOperationExceptionResponse(parsedOutput, context)),
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
const deserializeAws_json1_1EnableRadiusCommand = async (output, context) => {
    if (output.statusCode >= 300) {
        return deserializeAws_json1_1EnableRadiusCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1EnableRadiusResult(data, context);
    const response = {
        $metadata: deserializeMetadata(output),
        ...contents,
    };
    return Promise.resolve(response);
};
exports.deserializeAws_json1_1EnableRadiusCommand = deserializeAws_json1_1EnableRadiusCommand;
const deserializeAws_json1_1EnableRadiusCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "ClientException":
        case "com.amazonaws.directoryservice#ClientException":
            response = {
                ...(await deserializeAws_json1_1ClientExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "EntityAlreadyExistsException":
        case "com.amazonaws.directoryservice#EntityAlreadyExistsException":
            response = {
                ...(await deserializeAws_json1_1EntityAlreadyExistsExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "EntityDoesNotExistException":
        case "com.amazonaws.directoryservice#EntityDoesNotExistException":
            response = {
                ...(await deserializeAws_json1_1EntityDoesNotExistExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InvalidParameterException":
        case "com.amazonaws.directoryservice#InvalidParameterException":
            response = {
                ...(await deserializeAws_json1_1InvalidParameterExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ServiceException":
        case "com.amazonaws.directoryservice#ServiceException":
            response = {
                ...(await deserializeAws_json1_1ServiceExceptionResponse(parsedOutput, context)),
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
const deserializeAws_json1_1EnableSsoCommand = async (output, context) => {
    if (output.statusCode >= 300) {
        return deserializeAws_json1_1EnableSsoCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1EnableSsoResult(data, context);
    const response = {
        $metadata: deserializeMetadata(output),
        ...contents,
    };
    return Promise.resolve(response);
};
exports.deserializeAws_json1_1EnableSsoCommand = deserializeAws_json1_1EnableSsoCommand;
const deserializeAws_json1_1EnableSsoCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "AuthenticationFailedException":
        case "com.amazonaws.directoryservice#AuthenticationFailedException":
            response = {
                ...(await deserializeAws_json1_1AuthenticationFailedExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ClientException":
        case "com.amazonaws.directoryservice#ClientException":
            response = {
                ...(await deserializeAws_json1_1ClientExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "EntityDoesNotExistException":
        case "com.amazonaws.directoryservice#EntityDoesNotExistException":
            response = {
                ...(await deserializeAws_json1_1EntityDoesNotExistExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InsufficientPermissionsException":
        case "com.amazonaws.directoryservice#InsufficientPermissionsException":
            response = {
                ...(await deserializeAws_json1_1InsufficientPermissionsExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ServiceException":
        case "com.amazonaws.directoryservice#ServiceException":
            response = {
                ...(await deserializeAws_json1_1ServiceExceptionResponse(parsedOutput, context)),
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
const deserializeAws_json1_1GetDirectoryLimitsCommand = async (output, context) => {
    if (output.statusCode >= 300) {
        return deserializeAws_json1_1GetDirectoryLimitsCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1GetDirectoryLimitsResult(data, context);
    const response = {
        $metadata: deserializeMetadata(output),
        ...contents,
    };
    return Promise.resolve(response);
};
exports.deserializeAws_json1_1GetDirectoryLimitsCommand = deserializeAws_json1_1GetDirectoryLimitsCommand;
const deserializeAws_json1_1GetDirectoryLimitsCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "ClientException":
        case "com.amazonaws.directoryservice#ClientException":
            response = {
                ...(await deserializeAws_json1_1ClientExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "EntityDoesNotExistException":
        case "com.amazonaws.directoryservice#EntityDoesNotExistException":
            response = {
                ...(await deserializeAws_json1_1EntityDoesNotExistExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ServiceException":
        case "com.amazonaws.directoryservice#ServiceException":
            response = {
                ...(await deserializeAws_json1_1ServiceExceptionResponse(parsedOutput, context)),
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
const deserializeAws_json1_1GetSnapshotLimitsCommand = async (output, context) => {
    if (output.statusCode >= 300) {
        return deserializeAws_json1_1GetSnapshotLimitsCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1GetSnapshotLimitsResult(data, context);
    const response = {
        $metadata: deserializeMetadata(output),
        ...contents,
    };
    return Promise.resolve(response);
};
exports.deserializeAws_json1_1GetSnapshotLimitsCommand = deserializeAws_json1_1GetSnapshotLimitsCommand;
const deserializeAws_json1_1GetSnapshotLimitsCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "ClientException":
        case "com.amazonaws.directoryservice#ClientException":
            response = {
                ...(await deserializeAws_json1_1ClientExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "EntityDoesNotExistException":
        case "com.amazonaws.directoryservice#EntityDoesNotExistException":
            response = {
                ...(await deserializeAws_json1_1EntityDoesNotExistExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ServiceException":
        case "com.amazonaws.directoryservice#ServiceException":
            response = {
                ...(await deserializeAws_json1_1ServiceExceptionResponse(parsedOutput, context)),
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
const deserializeAws_json1_1ListCertificatesCommand = async (output, context) => {
    if (output.statusCode >= 300) {
        return deserializeAws_json1_1ListCertificatesCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1ListCertificatesResult(data, context);
    const response = {
        $metadata: deserializeMetadata(output),
        ...contents,
    };
    return Promise.resolve(response);
};
exports.deserializeAws_json1_1ListCertificatesCommand = deserializeAws_json1_1ListCertificatesCommand;
const deserializeAws_json1_1ListCertificatesCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "ClientException":
        case "com.amazonaws.directoryservice#ClientException":
            response = {
                ...(await deserializeAws_json1_1ClientExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "DirectoryDoesNotExistException":
        case "com.amazonaws.directoryservice#DirectoryDoesNotExistException":
            response = {
                ...(await deserializeAws_json1_1DirectoryDoesNotExistExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InvalidNextTokenException":
        case "com.amazonaws.directoryservice#InvalidNextTokenException":
            response = {
                ...(await deserializeAws_json1_1InvalidNextTokenExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InvalidParameterException":
        case "com.amazonaws.directoryservice#InvalidParameterException":
            response = {
                ...(await deserializeAws_json1_1InvalidParameterExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ServiceException":
        case "com.amazonaws.directoryservice#ServiceException":
            response = {
                ...(await deserializeAws_json1_1ServiceExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "UnsupportedOperationException":
        case "com.amazonaws.directoryservice#UnsupportedOperationException":
            response = {
                ...(await deserializeAws_json1_1UnsupportedOperationExceptionResponse(parsedOutput, context)),
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
const deserializeAws_json1_1ListIpRoutesCommand = async (output, context) => {
    if (output.statusCode >= 300) {
        return deserializeAws_json1_1ListIpRoutesCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1ListIpRoutesResult(data, context);
    const response = {
        $metadata: deserializeMetadata(output),
        ...contents,
    };
    return Promise.resolve(response);
};
exports.deserializeAws_json1_1ListIpRoutesCommand = deserializeAws_json1_1ListIpRoutesCommand;
const deserializeAws_json1_1ListIpRoutesCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "ClientException":
        case "com.amazonaws.directoryservice#ClientException":
            response = {
                ...(await deserializeAws_json1_1ClientExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "EntityDoesNotExistException":
        case "com.amazonaws.directoryservice#EntityDoesNotExistException":
            response = {
                ...(await deserializeAws_json1_1EntityDoesNotExistExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InvalidNextTokenException":
        case "com.amazonaws.directoryservice#InvalidNextTokenException":
            response = {
                ...(await deserializeAws_json1_1InvalidNextTokenExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InvalidParameterException":
        case "com.amazonaws.directoryservice#InvalidParameterException":
            response = {
                ...(await deserializeAws_json1_1InvalidParameterExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ServiceException":
        case "com.amazonaws.directoryservice#ServiceException":
            response = {
                ...(await deserializeAws_json1_1ServiceExceptionResponse(parsedOutput, context)),
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
const deserializeAws_json1_1ListLogSubscriptionsCommand = async (output, context) => {
    if (output.statusCode >= 300) {
        return deserializeAws_json1_1ListLogSubscriptionsCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1ListLogSubscriptionsResult(data, context);
    const response = {
        $metadata: deserializeMetadata(output),
        ...contents,
    };
    return Promise.resolve(response);
};
exports.deserializeAws_json1_1ListLogSubscriptionsCommand = deserializeAws_json1_1ListLogSubscriptionsCommand;
const deserializeAws_json1_1ListLogSubscriptionsCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "ClientException":
        case "com.amazonaws.directoryservice#ClientException":
            response = {
                ...(await deserializeAws_json1_1ClientExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "EntityDoesNotExistException":
        case "com.amazonaws.directoryservice#EntityDoesNotExistException":
            response = {
                ...(await deserializeAws_json1_1EntityDoesNotExistExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InvalidNextTokenException":
        case "com.amazonaws.directoryservice#InvalidNextTokenException":
            response = {
                ...(await deserializeAws_json1_1InvalidNextTokenExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ServiceException":
        case "com.amazonaws.directoryservice#ServiceException":
            response = {
                ...(await deserializeAws_json1_1ServiceExceptionResponse(parsedOutput, context)),
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
const deserializeAws_json1_1ListSchemaExtensionsCommand = async (output, context) => {
    if (output.statusCode >= 300) {
        return deserializeAws_json1_1ListSchemaExtensionsCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1ListSchemaExtensionsResult(data, context);
    const response = {
        $metadata: deserializeMetadata(output),
        ...contents,
    };
    return Promise.resolve(response);
};
exports.deserializeAws_json1_1ListSchemaExtensionsCommand = deserializeAws_json1_1ListSchemaExtensionsCommand;
const deserializeAws_json1_1ListSchemaExtensionsCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "ClientException":
        case "com.amazonaws.directoryservice#ClientException":
            response = {
                ...(await deserializeAws_json1_1ClientExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "EntityDoesNotExistException":
        case "com.amazonaws.directoryservice#EntityDoesNotExistException":
            response = {
                ...(await deserializeAws_json1_1EntityDoesNotExistExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InvalidNextTokenException":
        case "com.amazonaws.directoryservice#InvalidNextTokenException":
            response = {
                ...(await deserializeAws_json1_1InvalidNextTokenExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ServiceException":
        case "com.amazonaws.directoryservice#ServiceException":
            response = {
                ...(await deserializeAws_json1_1ServiceExceptionResponse(parsedOutput, context)),
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
    contents = deserializeAws_json1_1ListTagsForResourceResult(data, context);
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
        case "ClientException":
        case "com.amazonaws.directoryservice#ClientException":
            response = {
                ...(await deserializeAws_json1_1ClientExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "EntityDoesNotExistException":
        case "com.amazonaws.directoryservice#EntityDoesNotExistException":
            response = {
                ...(await deserializeAws_json1_1EntityDoesNotExistExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InvalidNextTokenException":
        case "com.amazonaws.directoryservice#InvalidNextTokenException":
            response = {
                ...(await deserializeAws_json1_1InvalidNextTokenExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InvalidParameterException":
        case "com.amazonaws.directoryservice#InvalidParameterException":
            response = {
                ...(await deserializeAws_json1_1InvalidParameterExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ServiceException":
        case "com.amazonaws.directoryservice#ServiceException":
            response = {
                ...(await deserializeAws_json1_1ServiceExceptionResponse(parsedOutput, context)),
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
const deserializeAws_json1_1RegisterCertificateCommand = async (output, context) => {
    if (output.statusCode >= 300) {
        return deserializeAws_json1_1RegisterCertificateCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1RegisterCertificateResult(data, context);
    const response = {
        $metadata: deserializeMetadata(output),
        ...contents,
    };
    return Promise.resolve(response);
};
exports.deserializeAws_json1_1RegisterCertificateCommand = deserializeAws_json1_1RegisterCertificateCommand;
const deserializeAws_json1_1RegisterCertificateCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "CertificateAlreadyExistsException":
        case "com.amazonaws.directoryservice#CertificateAlreadyExistsException":
            response = {
                ...(await deserializeAws_json1_1CertificateAlreadyExistsExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "CertificateLimitExceededException":
        case "com.amazonaws.directoryservice#CertificateLimitExceededException":
            response = {
                ...(await deserializeAws_json1_1CertificateLimitExceededExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ClientException":
        case "com.amazonaws.directoryservice#ClientException":
            response = {
                ...(await deserializeAws_json1_1ClientExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "DirectoryDoesNotExistException":
        case "com.amazonaws.directoryservice#DirectoryDoesNotExistException":
            response = {
                ...(await deserializeAws_json1_1DirectoryDoesNotExistExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "DirectoryUnavailableException":
        case "com.amazonaws.directoryservice#DirectoryUnavailableException":
            response = {
                ...(await deserializeAws_json1_1DirectoryUnavailableExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InvalidCertificateException":
        case "com.amazonaws.directoryservice#InvalidCertificateException":
            response = {
                ...(await deserializeAws_json1_1InvalidCertificateExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InvalidParameterException":
        case "com.amazonaws.directoryservice#InvalidParameterException":
            response = {
                ...(await deserializeAws_json1_1InvalidParameterExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ServiceException":
        case "com.amazonaws.directoryservice#ServiceException":
            response = {
                ...(await deserializeAws_json1_1ServiceExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "UnsupportedOperationException":
        case "com.amazonaws.directoryservice#UnsupportedOperationException":
            response = {
                ...(await deserializeAws_json1_1UnsupportedOperationExceptionResponse(parsedOutput, context)),
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
const deserializeAws_json1_1RegisterEventTopicCommand = async (output, context) => {
    if (output.statusCode >= 300) {
        return deserializeAws_json1_1RegisterEventTopicCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1RegisterEventTopicResult(data, context);
    const response = {
        $metadata: deserializeMetadata(output),
        ...contents,
    };
    return Promise.resolve(response);
};
exports.deserializeAws_json1_1RegisterEventTopicCommand = deserializeAws_json1_1RegisterEventTopicCommand;
const deserializeAws_json1_1RegisterEventTopicCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "ClientException":
        case "com.amazonaws.directoryservice#ClientException":
            response = {
                ...(await deserializeAws_json1_1ClientExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "EntityDoesNotExistException":
        case "com.amazonaws.directoryservice#EntityDoesNotExistException":
            response = {
                ...(await deserializeAws_json1_1EntityDoesNotExistExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InvalidParameterException":
        case "com.amazonaws.directoryservice#InvalidParameterException":
            response = {
                ...(await deserializeAws_json1_1InvalidParameterExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ServiceException":
        case "com.amazonaws.directoryservice#ServiceException":
            response = {
                ...(await deserializeAws_json1_1ServiceExceptionResponse(parsedOutput, context)),
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
const deserializeAws_json1_1RejectSharedDirectoryCommand = async (output, context) => {
    if (output.statusCode >= 300) {
        return deserializeAws_json1_1RejectSharedDirectoryCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1RejectSharedDirectoryResult(data, context);
    const response = {
        $metadata: deserializeMetadata(output),
        ...contents,
    };
    return Promise.resolve(response);
};
exports.deserializeAws_json1_1RejectSharedDirectoryCommand = deserializeAws_json1_1RejectSharedDirectoryCommand;
const deserializeAws_json1_1RejectSharedDirectoryCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "ClientException":
        case "com.amazonaws.directoryservice#ClientException":
            response = {
                ...(await deserializeAws_json1_1ClientExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "DirectoryAlreadySharedException":
        case "com.amazonaws.directoryservice#DirectoryAlreadySharedException":
            response = {
                ...(await deserializeAws_json1_1DirectoryAlreadySharedExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "EntityDoesNotExistException":
        case "com.amazonaws.directoryservice#EntityDoesNotExistException":
            response = {
                ...(await deserializeAws_json1_1EntityDoesNotExistExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InvalidParameterException":
        case "com.amazonaws.directoryservice#InvalidParameterException":
            response = {
                ...(await deserializeAws_json1_1InvalidParameterExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ServiceException":
        case "com.amazonaws.directoryservice#ServiceException":
            response = {
                ...(await deserializeAws_json1_1ServiceExceptionResponse(parsedOutput, context)),
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
const deserializeAws_json1_1RemoveIpRoutesCommand = async (output, context) => {
    if (output.statusCode >= 300) {
        return deserializeAws_json1_1RemoveIpRoutesCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1RemoveIpRoutesResult(data, context);
    const response = {
        $metadata: deserializeMetadata(output),
        ...contents,
    };
    return Promise.resolve(response);
};
exports.deserializeAws_json1_1RemoveIpRoutesCommand = deserializeAws_json1_1RemoveIpRoutesCommand;
const deserializeAws_json1_1RemoveIpRoutesCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "ClientException":
        case "com.amazonaws.directoryservice#ClientException":
            response = {
                ...(await deserializeAws_json1_1ClientExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "DirectoryUnavailableException":
        case "com.amazonaws.directoryservice#DirectoryUnavailableException":
            response = {
                ...(await deserializeAws_json1_1DirectoryUnavailableExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "EntityDoesNotExistException":
        case "com.amazonaws.directoryservice#EntityDoesNotExistException":
            response = {
                ...(await deserializeAws_json1_1EntityDoesNotExistExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InvalidParameterException":
        case "com.amazonaws.directoryservice#InvalidParameterException":
            response = {
                ...(await deserializeAws_json1_1InvalidParameterExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ServiceException":
        case "com.amazonaws.directoryservice#ServiceException":
            response = {
                ...(await deserializeAws_json1_1ServiceExceptionResponse(parsedOutput, context)),
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
const deserializeAws_json1_1RemoveRegionCommand = async (output, context) => {
    if (output.statusCode >= 300) {
        return deserializeAws_json1_1RemoveRegionCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1RemoveRegionResult(data, context);
    const response = {
        $metadata: deserializeMetadata(output),
        ...contents,
    };
    return Promise.resolve(response);
};
exports.deserializeAws_json1_1RemoveRegionCommand = deserializeAws_json1_1RemoveRegionCommand;
const deserializeAws_json1_1RemoveRegionCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "AccessDeniedException":
        case "com.amazonaws.directoryservice#AccessDeniedException":
            response = {
                ...(await deserializeAws_json1_1AccessDeniedExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ClientException":
        case "com.amazonaws.directoryservice#ClientException":
            response = {
                ...(await deserializeAws_json1_1ClientExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "DirectoryDoesNotExistException":
        case "com.amazonaws.directoryservice#DirectoryDoesNotExistException":
            response = {
                ...(await deserializeAws_json1_1DirectoryDoesNotExistExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "DirectoryUnavailableException":
        case "com.amazonaws.directoryservice#DirectoryUnavailableException":
            response = {
                ...(await deserializeAws_json1_1DirectoryUnavailableExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ServiceException":
        case "com.amazonaws.directoryservice#ServiceException":
            response = {
                ...(await deserializeAws_json1_1ServiceExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "UnsupportedOperationException":
        case "com.amazonaws.directoryservice#UnsupportedOperationException":
            response = {
                ...(await deserializeAws_json1_1UnsupportedOperationExceptionResponse(parsedOutput, context)),
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
const deserializeAws_json1_1RemoveTagsFromResourceCommand = async (output, context) => {
    if (output.statusCode >= 300) {
        return deserializeAws_json1_1RemoveTagsFromResourceCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1RemoveTagsFromResourceResult(data, context);
    const response = {
        $metadata: deserializeMetadata(output),
        ...contents,
    };
    return Promise.resolve(response);
};
exports.deserializeAws_json1_1RemoveTagsFromResourceCommand = deserializeAws_json1_1RemoveTagsFromResourceCommand;
const deserializeAws_json1_1RemoveTagsFromResourceCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "ClientException":
        case "com.amazonaws.directoryservice#ClientException":
            response = {
                ...(await deserializeAws_json1_1ClientExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "EntityDoesNotExistException":
        case "com.amazonaws.directoryservice#EntityDoesNotExistException":
            response = {
                ...(await deserializeAws_json1_1EntityDoesNotExistExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InvalidParameterException":
        case "com.amazonaws.directoryservice#InvalidParameterException":
            response = {
                ...(await deserializeAws_json1_1InvalidParameterExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ServiceException":
        case "com.amazonaws.directoryservice#ServiceException":
            response = {
                ...(await deserializeAws_json1_1ServiceExceptionResponse(parsedOutput, context)),
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
const deserializeAws_json1_1ResetUserPasswordCommand = async (output, context) => {
    if (output.statusCode >= 300) {
        return deserializeAws_json1_1ResetUserPasswordCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1ResetUserPasswordResult(data, context);
    const response = {
        $metadata: deserializeMetadata(output),
        ...contents,
    };
    return Promise.resolve(response);
};
exports.deserializeAws_json1_1ResetUserPasswordCommand = deserializeAws_json1_1ResetUserPasswordCommand;
const deserializeAws_json1_1ResetUserPasswordCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "ClientException":
        case "com.amazonaws.directoryservice#ClientException":
            response = {
                ...(await deserializeAws_json1_1ClientExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "DirectoryUnavailableException":
        case "com.amazonaws.directoryservice#DirectoryUnavailableException":
            response = {
                ...(await deserializeAws_json1_1DirectoryUnavailableExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "EntityDoesNotExistException":
        case "com.amazonaws.directoryservice#EntityDoesNotExistException":
            response = {
                ...(await deserializeAws_json1_1EntityDoesNotExistExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InvalidPasswordException":
        case "com.amazonaws.directoryservice#InvalidPasswordException":
            response = {
                ...(await deserializeAws_json1_1InvalidPasswordExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ServiceException":
        case "com.amazonaws.directoryservice#ServiceException":
            response = {
                ...(await deserializeAws_json1_1ServiceExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "UnsupportedOperationException":
        case "com.amazonaws.directoryservice#UnsupportedOperationException":
            response = {
                ...(await deserializeAws_json1_1UnsupportedOperationExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "UserDoesNotExistException":
        case "com.amazonaws.directoryservice#UserDoesNotExistException":
            response = {
                ...(await deserializeAws_json1_1UserDoesNotExistExceptionResponse(parsedOutput, context)),
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
const deserializeAws_json1_1RestoreFromSnapshotCommand = async (output, context) => {
    if (output.statusCode >= 300) {
        return deserializeAws_json1_1RestoreFromSnapshotCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1RestoreFromSnapshotResult(data, context);
    const response = {
        $metadata: deserializeMetadata(output),
        ...contents,
    };
    return Promise.resolve(response);
};
exports.deserializeAws_json1_1RestoreFromSnapshotCommand = deserializeAws_json1_1RestoreFromSnapshotCommand;
const deserializeAws_json1_1RestoreFromSnapshotCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "ClientException":
        case "com.amazonaws.directoryservice#ClientException":
            response = {
                ...(await deserializeAws_json1_1ClientExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "EntityDoesNotExistException":
        case "com.amazonaws.directoryservice#EntityDoesNotExistException":
            response = {
                ...(await deserializeAws_json1_1EntityDoesNotExistExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InvalidParameterException":
        case "com.amazonaws.directoryservice#InvalidParameterException":
            response = {
                ...(await deserializeAws_json1_1InvalidParameterExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ServiceException":
        case "com.amazonaws.directoryservice#ServiceException":
            response = {
                ...(await deserializeAws_json1_1ServiceExceptionResponse(parsedOutput, context)),
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
const deserializeAws_json1_1ShareDirectoryCommand = async (output, context) => {
    if (output.statusCode >= 300) {
        return deserializeAws_json1_1ShareDirectoryCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1ShareDirectoryResult(data, context);
    const response = {
        $metadata: deserializeMetadata(output),
        ...contents,
    };
    return Promise.resolve(response);
};
exports.deserializeAws_json1_1ShareDirectoryCommand = deserializeAws_json1_1ShareDirectoryCommand;
const deserializeAws_json1_1ShareDirectoryCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "AccessDeniedException":
        case "com.amazonaws.directoryservice#AccessDeniedException":
            response = {
                ...(await deserializeAws_json1_1AccessDeniedExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ClientException":
        case "com.amazonaws.directoryservice#ClientException":
            response = {
                ...(await deserializeAws_json1_1ClientExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "DirectoryAlreadySharedException":
        case "com.amazonaws.directoryservice#DirectoryAlreadySharedException":
            response = {
                ...(await deserializeAws_json1_1DirectoryAlreadySharedExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "EntityDoesNotExistException":
        case "com.amazonaws.directoryservice#EntityDoesNotExistException":
            response = {
                ...(await deserializeAws_json1_1EntityDoesNotExistExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InvalidParameterException":
        case "com.amazonaws.directoryservice#InvalidParameterException":
            response = {
                ...(await deserializeAws_json1_1InvalidParameterExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InvalidTargetException":
        case "com.amazonaws.directoryservice#InvalidTargetException":
            response = {
                ...(await deserializeAws_json1_1InvalidTargetExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "OrganizationsException":
        case "com.amazonaws.directoryservice#OrganizationsException":
            response = {
                ...(await deserializeAws_json1_1OrganizationsExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ServiceException":
        case "com.amazonaws.directoryservice#ServiceException":
            response = {
                ...(await deserializeAws_json1_1ServiceExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ShareLimitExceededException":
        case "com.amazonaws.directoryservice#ShareLimitExceededException":
            response = {
                ...(await deserializeAws_json1_1ShareLimitExceededExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "UnsupportedOperationException":
        case "com.amazonaws.directoryservice#UnsupportedOperationException":
            response = {
                ...(await deserializeAws_json1_1UnsupportedOperationExceptionResponse(parsedOutput, context)),
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
const deserializeAws_json1_1StartSchemaExtensionCommand = async (output, context) => {
    if (output.statusCode >= 300) {
        return deserializeAws_json1_1StartSchemaExtensionCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1StartSchemaExtensionResult(data, context);
    const response = {
        $metadata: deserializeMetadata(output),
        ...contents,
    };
    return Promise.resolve(response);
};
exports.deserializeAws_json1_1StartSchemaExtensionCommand = deserializeAws_json1_1StartSchemaExtensionCommand;
const deserializeAws_json1_1StartSchemaExtensionCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "ClientException":
        case "com.amazonaws.directoryservice#ClientException":
            response = {
                ...(await deserializeAws_json1_1ClientExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "DirectoryUnavailableException":
        case "com.amazonaws.directoryservice#DirectoryUnavailableException":
            response = {
                ...(await deserializeAws_json1_1DirectoryUnavailableExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "EntityDoesNotExistException":
        case "com.amazonaws.directoryservice#EntityDoesNotExistException":
            response = {
                ...(await deserializeAws_json1_1EntityDoesNotExistExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InvalidParameterException":
        case "com.amazonaws.directoryservice#InvalidParameterException":
            response = {
                ...(await deserializeAws_json1_1InvalidParameterExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ServiceException":
        case "com.amazonaws.directoryservice#ServiceException":
            response = {
                ...(await deserializeAws_json1_1ServiceExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "SnapshotLimitExceededException":
        case "com.amazonaws.directoryservice#SnapshotLimitExceededException":
            response = {
                ...(await deserializeAws_json1_1SnapshotLimitExceededExceptionResponse(parsedOutput, context)),
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
const deserializeAws_json1_1UnshareDirectoryCommand = async (output, context) => {
    if (output.statusCode >= 300) {
        return deserializeAws_json1_1UnshareDirectoryCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1UnshareDirectoryResult(data, context);
    const response = {
        $metadata: deserializeMetadata(output),
        ...contents,
    };
    return Promise.resolve(response);
};
exports.deserializeAws_json1_1UnshareDirectoryCommand = deserializeAws_json1_1UnshareDirectoryCommand;
const deserializeAws_json1_1UnshareDirectoryCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "ClientException":
        case "com.amazonaws.directoryservice#ClientException":
            response = {
                ...(await deserializeAws_json1_1ClientExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "DirectoryNotSharedException":
        case "com.amazonaws.directoryservice#DirectoryNotSharedException":
            response = {
                ...(await deserializeAws_json1_1DirectoryNotSharedExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "EntityDoesNotExistException":
        case "com.amazonaws.directoryservice#EntityDoesNotExistException":
            response = {
                ...(await deserializeAws_json1_1EntityDoesNotExistExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InvalidTargetException":
        case "com.amazonaws.directoryservice#InvalidTargetException":
            response = {
                ...(await deserializeAws_json1_1InvalidTargetExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ServiceException":
        case "com.amazonaws.directoryservice#ServiceException":
            response = {
                ...(await deserializeAws_json1_1ServiceExceptionResponse(parsedOutput, context)),
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
const deserializeAws_json1_1UpdateConditionalForwarderCommand = async (output, context) => {
    if (output.statusCode >= 300) {
        return deserializeAws_json1_1UpdateConditionalForwarderCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1UpdateConditionalForwarderResult(data, context);
    const response = {
        $metadata: deserializeMetadata(output),
        ...contents,
    };
    return Promise.resolve(response);
};
exports.deserializeAws_json1_1UpdateConditionalForwarderCommand = deserializeAws_json1_1UpdateConditionalForwarderCommand;
const deserializeAws_json1_1UpdateConditionalForwarderCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "ClientException":
        case "com.amazonaws.directoryservice#ClientException":
            response = {
                ...(await deserializeAws_json1_1ClientExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "DirectoryUnavailableException":
        case "com.amazonaws.directoryservice#DirectoryUnavailableException":
            response = {
                ...(await deserializeAws_json1_1DirectoryUnavailableExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "EntityDoesNotExistException":
        case "com.amazonaws.directoryservice#EntityDoesNotExistException":
            response = {
                ...(await deserializeAws_json1_1EntityDoesNotExistExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InvalidParameterException":
        case "com.amazonaws.directoryservice#InvalidParameterException":
            response = {
                ...(await deserializeAws_json1_1InvalidParameterExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ServiceException":
        case "com.amazonaws.directoryservice#ServiceException":
            response = {
                ...(await deserializeAws_json1_1ServiceExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "UnsupportedOperationException":
        case "com.amazonaws.directoryservice#UnsupportedOperationException":
            response = {
                ...(await deserializeAws_json1_1UnsupportedOperationExceptionResponse(parsedOutput, context)),
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
const deserializeAws_json1_1UpdateNumberOfDomainControllersCommand = async (output, context) => {
    if (output.statusCode >= 300) {
        return deserializeAws_json1_1UpdateNumberOfDomainControllersCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1UpdateNumberOfDomainControllersResult(data, context);
    const response = {
        $metadata: deserializeMetadata(output),
        ...contents,
    };
    return Promise.resolve(response);
};
exports.deserializeAws_json1_1UpdateNumberOfDomainControllersCommand = deserializeAws_json1_1UpdateNumberOfDomainControllersCommand;
const deserializeAws_json1_1UpdateNumberOfDomainControllersCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "ClientException":
        case "com.amazonaws.directoryservice#ClientException":
            response = {
                ...(await deserializeAws_json1_1ClientExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "DirectoryUnavailableException":
        case "com.amazonaws.directoryservice#DirectoryUnavailableException":
            response = {
                ...(await deserializeAws_json1_1DirectoryUnavailableExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "DomainControllerLimitExceededException":
        case "com.amazonaws.directoryservice#DomainControllerLimitExceededException":
            response = {
                ...(await deserializeAws_json1_1DomainControllerLimitExceededExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "EntityDoesNotExistException":
        case "com.amazonaws.directoryservice#EntityDoesNotExistException":
            response = {
                ...(await deserializeAws_json1_1EntityDoesNotExistExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InvalidParameterException":
        case "com.amazonaws.directoryservice#InvalidParameterException":
            response = {
                ...(await deserializeAws_json1_1InvalidParameterExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ServiceException":
        case "com.amazonaws.directoryservice#ServiceException":
            response = {
                ...(await deserializeAws_json1_1ServiceExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "UnsupportedOperationException":
        case "com.amazonaws.directoryservice#UnsupportedOperationException":
            response = {
                ...(await deserializeAws_json1_1UnsupportedOperationExceptionResponse(parsedOutput, context)),
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
const deserializeAws_json1_1UpdateRadiusCommand = async (output, context) => {
    if (output.statusCode >= 300) {
        return deserializeAws_json1_1UpdateRadiusCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1UpdateRadiusResult(data, context);
    const response = {
        $metadata: deserializeMetadata(output),
        ...contents,
    };
    return Promise.resolve(response);
};
exports.deserializeAws_json1_1UpdateRadiusCommand = deserializeAws_json1_1UpdateRadiusCommand;
const deserializeAws_json1_1UpdateRadiusCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "ClientException":
        case "com.amazonaws.directoryservice#ClientException":
            response = {
                ...(await deserializeAws_json1_1ClientExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "EntityDoesNotExistException":
        case "com.amazonaws.directoryservice#EntityDoesNotExistException":
            response = {
                ...(await deserializeAws_json1_1EntityDoesNotExistExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InvalidParameterException":
        case "com.amazonaws.directoryservice#InvalidParameterException":
            response = {
                ...(await deserializeAws_json1_1InvalidParameterExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ServiceException":
        case "com.amazonaws.directoryservice#ServiceException":
            response = {
                ...(await deserializeAws_json1_1ServiceExceptionResponse(parsedOutput, context)),
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
const deserializeAws_json1_1UpdateTrustCommand = async (output, context) => {
    if (output.statusCode >= 300) {
        return deserializeAws_json1_1UpdateTrustCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1UpdateTrustResult(data, context);
    const response = {
        $metadata: deserializeMetadata(output),
        ...contents,
    };
    return Promise.resolve(response);
};
exports.deserializeAws_json1_1UpdateTrustCommand = deserializeAws_json1_1UpdateTrustCommand;
const deserializeAws_json1_1UpdateTrustCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "ClientException":
        case "com.amazonaws.directoryservice#ClientException":
            response = {
                ...(await deserializeAws_json1_1ClientExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "EntityDoesNotExistException":
        case "com.amazonaws.directoryservice#EntityDoesNotExistException":
            response = {
                ...(await deserializeAws_json1_1EntityDoesNotExistExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InvalidParameterException":
        case "com.amazonaws.directoryservice#InvalidParameterException":
            response = {
                ...(await deserializeAws_json1_1InvalidParameterExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ServiceException":
        case "com.amazonaws.directoryservice#ServiceException":
            response = {
                ...(await deserializeAws_json1_1ServiceExceptionResponse(parsedOutput, context)),
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
const deserializeAws_json1_1VerifyTrustCommand = async (output, context) => {
    if (output.statusCode >= 300) {
        return deserializeAws_json1_1VerifyTrustCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1VerifyTrustResult(data, context);
    const response = {
        $metadata: deserializeMetadata(output),
        ...contents,
    };
    return Promise.resolve(response);
};
exports.deserializeAws_json1_1VerifyTrustCommand = deserializeAws_json1_1VerifyTrustCommand;
const deserializeAws_json1_1VerifyTrustCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "ClientException":
        case "com.amazonaws.directoryservice#ClientException":
            response = {
                ...(await deserializeAws_json1_1ClientExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "EntityDoesNotExistException":
        case "com.amazonaws.directoryservice#EntityDoesNotExistException":
            response = {
                ...(await deserializeAws_json1_1EntityDoesNotExistExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InvalidParameterException":
        case "com.amazonaws.directoryservice#InvalidParameterException":
            response = {
                ...(await deserializeAws_json1_1InvalidParameterExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ServiceException":
        case "com.amazonaws.directoryservice#ServiceException":
            response = {
                ...(await deserializeAws_json1_1ServiceExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "UnsupportedOperationException":
        case "com.amazonaws.directoryservice#UnsupportedOperationException":
            response = {
                ...(await deserializeAws_json1_1UnsupportedOperationExceptionResponse(parsedOutput, context)),
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
const deserializeAws_json1_1AuthenticationFailedExceptionResponse = async (parsedOutput, context) => {
    const body = parsedOutput.body;
    const deserialized = deserializeAws_json1_1AuthenticationFailedException(body, context);
    const contents = {
        name: "AuthenticationFailedException",
        $fault: "client",
        $metadata: deserializeMetadata(parsedOutput),
        ...deserialized,
    };
    return contents;
};
const deserializeAws_json1_1CertificateAlreadyExistsExceptionResponse = async (parsedOutput, context) => {
    const body = parsedOutput.body;
    const deserialized = deserializeAws_json1_1CertificateAlreadyExistsException(body, context);
    const contents = {
        name: "CertificateAlreadyExistsException",
        $fault: "client",
        $metadata: deserializeMetadata(parsedOutput),
        ...deserialized,
    };
    return contents;
};
const deserializeAws_json1_1CertificateDoesNotExistExceptionResponse = async (parsedOutput, context) => {
    const body = parsedOutput.body;
    const deserialized = deserializeAws_json1_1CertificateDoesNotExistException(body, context);
    const contents = {
        name: "CertificateDoesNotExistException",
        $fault: "client",
        $metadata: deserializeMetadata(parsedOutput),
        ...deserialized,
    };
    return contents;
};
const deserializeAws_json1_1CertificateInUseExceptionResponse = async (parsedOutput, context) => {
    const body = parsedOutput.body;
    const deserialized = deserializeAws_json1_1CertificateInUseException(body, context);
    const contents = {
        name: "CertificateInUseException",
        $fault: "client",
        $metadata: deserializeMetadata(parsedOutput),
        ...deserialized,
    };
    return contents;
};
const deserializeAws_json1_1CertificateLimitExceededExceptionResponse = async (parsedOutput, context) => {
    const body = parsedOutput.body;
    const deserialized = deserializeAws_json1_1CertificateLimitExceededException(body, context);
    const contents = {
        name: "CertificateLimitExceededException",
        $fault: "client",
        $metadata: deserializeMetadata(parsedOutput),
        ...deserialized,
    };
    return contents;
};
const deserializeAws_json1_1ClientExceptionResponse = async (parsedOutput, context) => {
    const body = parsedOutput.body;
    const deserialized = deserializeAws_json1_1ClientException(body, context);
    const contents = {
        name: "ClientException",
        $fault: "client",
        $metadata: deserializeMetadata(parsedOutput),
        ...deserialized,
    };
    return contents;
};
const deserializeAws_json1_1DirectoryAlreadyInRegionExceptionResponse = async (parsedOutput, context) => {
    const body = parsedOutput.body;
    const deserialized = deserializeAws_json1_1DirectoryAlreadyInRegionException(body, context);
    const contents = {
        name: "DirectoryAlreadyInRegionException",
        $fault: "client",
        $metadata: deserializeMetadata(parsedOutput),
        ...deserialized,
    };
    return contents;
};
const deserializeAws_json1_1DirectoryAlreadySharedExceptionResponse = async (parsedOutput, context) => {
    const body = parsedOutput.body;
    const deserialized = deserializeAws_json1_1DirectoryAlreadySharedException(body, context);
    const contents = {
        name: "DirectoryAlreadySharedException",
        $fault: "client",
        $metadata: deserializeMetadata(parsedOutput),
        ...deserialized,
    };
    return contents;
};
const deserializeAws_json1_1DirectoryDoesNotExistExceptionResponse = async (parsedOutput, context) => {
    const body = parsedOutput.body;
    const deserialized = deserializeAws_json1_1DirectoryDoesNotExistException(body, context);
    const contents = {
        name: "DirectoryDoesNotExistException",
        $fault: "client",
        $metadata: deserializeMetadata(parsedOutput),
        ...deserialized,
    };
    return contents;
};
const deserializeAws_json1_1DirectoryLimitExceededExceptionResponse = async (parsedOutput, context) => {
    const body = parsedOutput.body;
    const deserialized = deserializeAws_json1_1DirectoryLimitExceededException(body, context);
    const contents = {
        name: "DirectoryLimitExceededException",
        $fault: "client",
        $metadata: deserializeMetadata(parsedOutput),
        ...deserialized,
    };
    return contents;
};
const deserializeAws_json1_1DirectoryNotSharedExceptionResponse = async (parsedOutput, context) => {
    const body = parsedOutput.body;
    const deserialized = deserializeAws_json1_1DirectoryNotSharedException(body, context);
    const contents = {
        name: "DirectoryNotSharedException",
        $fault: "client",
        $metadata: deserializeMetadata(parsedOutput),
        ...deserialized,
    };
    return contents;
};
const deserializeAws_json1_1DirectoryUnavailableExceptionResponse = async (parsedOutput, context) => {
    const body = parsedOutput.body;
    const deserialized = deserializeAws_json1_1DirectoryUnavailableException(body, context);
    const contents = {
        name: "DirectoryUnavailableException",
        $fault: "client",
        $metadata: deserializeMetadata(parsedOutput),
        ...deserialized,
    };
    return contents;
};
const deserializeAws_json1_1DomainControllerLimitExceededExceptionResponse = async (parsedOutput, context) => {
    const body = parsedOutput.body;
    const deserialized = deserializeAws_json1_1DomainControllerLimitExceededException(body, context);
    const contents = {
        name: "DomainControllerLimitExceededException",
        $fault: "client",
        $metadata: deserializeMetadata(parsedOutput),
        ...deserialized,
    };
    return contents;
};
const deserializeAws_json1_1EntityAlreadyExistsExceptionResponse = async (parsedOutput, context) => {
    const body = parsedOutput.body;
    const deserialized = deserializeAws_json1_1EntityAlreadyExistsException(body, context);
    const contents = {
        name: "EntityAlreadyExistsException",
        $fault: "client",
        $metadata: deserializeMetadata(parsedOutput),
        ...deserialized,
    };
    return contents;
};
const deserializeAws_json1_1EntityDoesNotExistExceptionResponse = async (parsedOutput, context) => {
    const body = parsedOutput.body;
    const deserialized = deserializeAws_json1_1EntityDoesNotExistException(body, context);
    const contents = {
        name: "EntityDoesNotExistException",
        $fault: "client",
        $metadata: deserializeMetadata(parsedOutput),
        ...deserialized,
    };
    return contents;
};
const deserializeAws_json1_1InsufficientPermissionsExceptionResponse = async (parsedOutput, context) => {
    const body = parsedOutput.body;
    const deserialized = deserializeAws_json1_1InsufficientPermissionsException(body, context);
    const contents = {
        name: "InsufficientPermissionsException",
        $fault: "client",
        $metadata: deserializeMetadata(parsedOutput),
        ...deserialized,
    };
    return contents;
};
const deserializeAws_json1_1InvalidCertificateExceptionResponse = async (parsedOutput, context) => {
    const body = parsedOutput.body;
    const deserialized = deserializeAws_json1_1InvalidCertificateException(body, context);
    const contents = {
        name: "InvalidCertificateException",
        $fault: "client",
        $metadata: deserializeMetadata(parsedOutput),
        ...deserialized,
    };
    return contents;
};
const deserializeAws_json1_1InvalidClientAuthStatusExceptionResponse = async (parsedOutput, context) => {
    const body = parsedOutput.body;
    const deserialized = deserializeAws_json1_1InvalidClientAuthStatusException(body, context);
    const contents = {
        name: "InvalidClientAuthStatusException",
        $fault: "client",
        $metadata: deserializeMetadata(parsedOutput),
        ...deserialized,
    };
    return contents;
};
const deserializeAws_json1_1InvalidLDAPSStatusExceptionResponse = async (parsedOutput, context) => {
    const body = parsedOutput.body;
    const deserialized = deserializeAws_json1_1InvalidLDAPSStatusException(body, context);
    const contents = {
        name: "InvalidLDAPSStatusException",
        $fault: "client",
        $metadata: deserializeMetadata(parsedOutput),
        ...deserialized,
    };
    return contents;
};
const deserializeAws_json1_1InvalidNextTokenExceptionResponse = async (parsedOutput, context) => {
    const body = parsedOutput.body;
    const deserialized = deserializeAws_json1_1InvalidNextTokenException(body, context);
    const contents = {
        name: "InvalidNextTokenException",
        $fault: "client",
        $metadata: deserializeMetadata(parsedOutput),
        ...deserialized,
    };
    return contents;
};
const deserializeAws_json1_1InvalidParameterExceptionResponse = async (parsedOutput, context) => {
    const body = parsedOutput.body;
    const deserialized = deserializeAws_json1_1InvalidParameterException(body, context);
    const contents = {
        name: "InvalidParameterException",
        $fault: "client",
        $metadata: deserializeMetadata(parsedOutput),
        ...deserialized,
    };
    return contents;
};
const deserializeAws_json1_1InvalidPasswordExceptionResponse = async (parsedOutput, context) => {
    const body = parsedOutput.body;
    const deserialized = deserializeAws_json1_1InvalidPasswordException(body, context);
    const contents = {
        name: "InvalidPasswordException",
        $fault: "client",
        $metadata: deserializeMetadata(parsedOutput),
        ...deserialized,
    };
    return contents;
};
const deserializeAws_json1_1InvalidTargetExceptionResponse = async (parsedOutput, context) => {
    const body = parsedOutput.body;
    const deserialized = deserializeAws_json1_1InvalidTargetException(body, context);
    const contents = {
        name: "InvalidTargetException",
        $fault: "client",
        $metadata: deserializeMetadata(parsedOutput),
        ...deserialized,
    };
    return contents;
};
const deserializeAws_json1_1IpRouteLimitExceededExceptionResponse = async (parsedOutput, context) => {
    const body = parsedOutput.body;
    const deserialized = deserializeAws_json1_1IpRouteLimitExceededException(body, context);
    const contents = {
        name: "IpRouteLimitExceededException",
        $fault: "client",
        $metadata: deserializeMetadata(parsedOutput),
        ...deserialized,
    };
    return contents;
};
const deserializeAws_json1_1NoAvailableCertificateExceptionResponse = async (parsedOutput, context) => {
    const body = parsedOutput.body;
    const deserialized = deserializeAws_json1_1NoAvailableCertificateException(body, context);
    const contents = {
        name: "NoAvailableCertificateException",
        $fault: "client",
        $metadata: deserializeMetadata(parsedOutput),
        ...deserialized,
    };
    return contents;
};
const deserializeAws_json1_1OrganizationsExceptionResponse = async (parsedOutput, context) => {
    const body = parsedOutput.body;
    const deserialized = deserializeAws_json1_1OrganizationsException(body, context);
    const contents = {
        name: "OrganizationsException",
        $fault: "client",
        $metadata: deserializeMetadata(parsedOutput),
        ...deserialized,
    };
    return contents;
};
const deserializeAws_json1_1RegionLimitExceededExceptionResponse = async (parsedOutput, context) => {
    const body = parsedOutput.body;
    const deserialized = deserializeAws_json1_1RegionLimitExceededException(body, context);
    const contents = {
        name: "RegionLimitExceededException",
        $fault: "client",
        $metadata: deserializeMetadata(parsedOutput),
        ...deserialized,
    };
    return contents;
};
const deserializeAws_json1_1ServiceExceptionResponse = async (parsedOutput, context) => {
    const body = parsedOutput.body;
    const deserialized = deserializeAws_json1_1ServiceException(body, context);
    const contents = {
        name: "ServiceException",
        $fault: "server",
        $metadata: deserializeMetadata(parsedOutput),
        ...deserialized,
    };
    return contents;
};
const deserializeAws_json1_1ShareLimitExceededExceptionResponse = async (parsedOutput, context) => {
    const body = parsedOutput.body;
    const deserialized = deserializeAws_json1_1ShareLimitExceededException(body, context);
    const contents = {
        name: "ShareLimitExceededException",
        $fault: "client",
        $metadata: deserializeMetadata(parsedOutput),
        ...deserialized,
    };
    return contents;
};
const deserializeAws_json1_1SnapshotLimitExceededExceptionResponse = async (parsedOutput, context) => {
    const body = parsedOutput.body;
    const deserialized = deserializeAws_json1_1SnapshotLimitExceededException(body, context);
    const contents = {
        name: "SnapshotLimitExceededException",
        $fault: "client",
        $metadata: deserializeMetadata(parsedOutput),
        ...deserialized,
    };
    return contents;
};
const deserializeAws_json1_1TagLimitExceededExceptionResponse = async (parsedOutput, context) => {
    const body = parsedOutput.body;
    const deserialized = deserializeAws_json1_1TagLimitExceededException(body, context);
    const contents = {
        name: "TagLimitExceededException",
        $fault: "client",
        $metadata: deserializeMetadata(parsedOutput),
        ...deserialized,
    };
    return contents;
};
const deserializeAws_json1_1UnsupportedOperationExceptionResponse = async (parsedOutput, context) => {
    const body = parsedOutput.body;
    const deserialized = deserializeAws_json1_1UnsupportedOperationException(body, context);
    const contents = {
        name: "UnsupportedOperationException",
        $fault: "client",
        $metadata: deserializeMetadata(parsedOutput),
        ...deserialized,
    };
    return contents;
};
const deserializeAws_json1_1UserDoesNotExistExceptionResponse = async (parsedOutput, context) => {
    const body = parsedOutput.body;
    const deserialized = deserializeAws_json1_1UserDoesNotExistException(body, context);
    const contents = {
        name: "UserDoesNotExistException",
        $fault: "client",
        $metadata: deserializeMetadata(parsedOutput),
        ...deserialized,
    };
    return contents;
};
const serializeAws_json1_1AcceptSharedDirectoryRequest = (input, context) => {
    return {
        ...(input.SharedDirectoryId !== undefined &&
            input.SharedDirectoryId !== null && { SharedDirectoryId: input.SharedDirectoryId }),
    };
};
const serializeAws_json1_1AddIpRoutesRequest = (input, context) => {
    return {
        ...(input.DirectoryId !== undefined && input.DirectoryId !== null && { DirectoryId: input.DirectoryId }),
        ...(input.IpRoutes !== undefined &&
            input.IpRoutes !== null && { IpRoutes: serializeAws_json1_1IpRoutes(input.IpRoutes, context) }),
        ...(input.UpdateSecurityGroupForDirectoryControllers !== undefined &&
            input.UpdateSecurityGroupForDirectoryControllers !== null && {
            UpdateSecurityGroupForDirectoryControllers: input.UpdateSecurityGroupForDirectoryControllers,
        }),
    };
};
const serializeAws_json1_1AddRegionRequest = (input, context) => {
    return {
        ...(input.DirectoryId !== undefined && input.DirectoryId !== null && { DirectoryId: input.DirectoryId }),
        ...(input.RegionName !== undefined && input.RegionName !== null && { RegionName: input.RegionName }),
        ...(input.VPCSettings !== undefined &&
            input.VPCSettings !== null && {
            VPCSettings: serializeAws_json1_1DirectoryVpcSettings(input.VPCSettings, context),
        }),
    };
};
const serializeAws_json1_1AddTagsToResourceRequest = (input, context) => {
    return {
        ...(input.ResourceId !== undefined && input.ResourceId !== null && { ResourceId: input.ResourceId }),
        ...(input.Tags !== undefined && input.Tags !== null && { Tags: serializeAws_json1_1Tags(input.Tags, context) }),
    };
};
const serializeAws_json1_1Attribute = (input, context) => {
    return {
        ...(input.Name !== undefined && input.Name !== null && { Name: input.Name }),
        ...(input.Value !== undefined && input.Value !== null && { Value: input.Value }),
    };
};
const serializeAws_json1_1Attributes = (input, context) => {
    return input
        .filter((e) => e != null)
        .map((entry) => {
        if (entry === null) {
            return null;
        }
        return serializeAws_json1_1Attribute(entry, context);
    });
};
const serializeAws_json1_1CancelSchemaExtensionRequest = (input, context) => {
    return {
        ...(input.DirectoryId !== undefined && input.DirectoryId !== null && { DirectoryId: input.DirectoryId }),
        ...(input.SchemaExtensionId !== undefined &&
            input.SchemaExtensionId !== null && { SchemaExtensionId: input.SchemaExtensionId }),
    };
};
const serializeAws_json1_1CidrIps = (input, context) => {
    return input
        .filter((e) => e != null)
        .map((entry) => {
        if (entry === null) {
            return null;
        }
        return entry;
    });
};
const serializeAws_json1_1ClientCertAuthSettings = (input, context) => {
    return {
        ...(input.OCSPUrl !== undefined && input.OCSPUrl !== null && { OCSPUrl: input.OCSPUrl }),
    };
};
const serializeAws_json1_1ConnectDirectoryRequest = (input, context) => {
    return {
        ...(input.ConnectSettings !== undefined &&
            input.ConnectSettings !== null && {
            ConnectSettings: serializeAws_json1_1DirectoryConnectSettings(input.ConnectSettings, context),
        }),
        ...(input.Description !== undefined && input.Description !== null && { Description: input.Description }),
        ...(input.Name !== undefined && input.Name !== null && { Name: input.Name }),
        ...(input.Password !== undefined && input.Password !== null && { Password: input.Password }),
        ...(input.ShortName !== undefined && input.ShortName !== null && { ShortName: input.ShortName }),
        ...(input.Size !== undefined && input.Size !== null && { Size: input.Size }),
        ...(input.Tags !== undefined && input.Tags !== null && { Tags: serializeAws_json1_1Tags(input.Tags, context) }),
    };
};
const serializeAws_json1_1CreateAliasRequest = (input, context) => {
    return {
        ...(input.Alias !== undefined && input.Alias !== null && { Alias: input.Alias }),
        ...(input.DirectoryId !== undefined && input.DirectoryId !== null && { DirectoryId: input.DirectoryId }),
    };
};
const serializeAws_json1_1CreateComputerRequest = (input, context) => {
    return {
        ...(input.ComputerAttributes !== undefined &&
            input.ComputerAttributes !== null && {
            ComputerAttributes: serializeAws_json1_1Attributes(input.ComputerAttributes, context),
        }),
        ...(input.ComputerName !== undefined && input.ComputerName !== null && { ComputerName: input.ComputerName }),
        ...(input.DirectoryId !== undefined && input.DirectoryId !== null && { DirectoryId: input.DirectoryId }),
        ...(input.OrganizationalUnitDistinguishedName !== undefined &&
            input.OrganizationalUnitDistinguishedName !== null && {
            OrganizationalUnitDistinguishedName: input.OrganizationalUnitDistinguishedName,
        }),
        ...(input.Password !== undefined && input.Password !== null && { Password: input.Password }),
    };
};
const serializeAws_json1_1CreateConditionalForwarderRequest = (input, context) => {
    return {
        ...(input.DirectoryId !== undefined && input.DirectoryId !== null && { DirectoryId: input.DirectoryId }),
        ...(input.DnsIpAddrs !== undefined &&
            input.DnsIpAddrs !== null && { DnsIpAddrs: serializeAws_json1_1DnsIpAddrs(input.DnsIpAddrs, context) }),
        ...(input.RemoteDomainName !== undefined &&
            input.RemoteDomainName !== null && { RemoteDomainName: input.RemoteDomainName }),
    };
};
const serializeAws_json1_1CreateDirectoryRequest = (input, context) => {
    return {
        ...(input.Description !== undefined && input.Description !== null && { Description: input.Description }),
        ...(input.Name !== undefined && input.Name !== null && { Name: input.Name }),
        ...(input.Password !== undefined && input.Password !== null && { Password: input.Password }),
        ...(input.ShortName !== undefined && input.ShortName !== null && { ShortName: input.ShortName }),
        ...(input.Size !== undefined && input.Size !== null && { Size: input.Size }),
        ...(input.Tags !== undefined && input.Tags !== null && { Tags: serializeAws_json1_1Tags(input.Tags, context) }),
        ...(input.VpcSettings !== undefined &&
            input.VpcSettings !== null && {
            VpcSettings: serializeAws_json1_1DirectoryVpcSettings(input.VpcSettings, context),
        }),
    };
};
const serializeAws_json1_1CreateLogSubscriptionRequest = (input, context) => {
    return {
        ...(input.DirectoryId !== undefined && input.DirectoryId !== null && { DirectoryId: input.DirectoryId }),
        ...(input.LogGroupName !== undefined && input.LogGroupName !== null && { LogGroupName: input.LogGroupName }),
    };
};
const serializeAws_json1_1CreateMicrosoftADRequest = (input, context) => {
    return {
        ...(input.Description !== undefined && input.Description !== null && { Description: input.Description }),
        ...(input.Edition !== undefined && input.Edition !== null && { Edition: input.Edition }),
        ...(input.Name !== undefined && input.Name !== null && { Name: input.Name }),
        ...(input.Password !== undefined && input.Password !== null && { Password: input.Password }),
        ...(input.ShortName !== undefined && input.ShortName !== null && { ShortName: input.ShortName }),
        ...(input.Tags !== undefined && input.Tags !== null && { Tags: serializeAws_json1_1Tags(input.Tags, context) }),
        ...(input.VpcSettings !== undefined &&
            input.VpcSettings !== null && {
            VpcSettings: serializeAws_json1_1DirectoryVpcSettings(input.VpcSettings, context),
        }),
    };
};
const serializeAws_json1_1CreateSnapshotRequest = (input, context) => {
    return {
        ...(input.DirectoryId !== undefined && input.DirectoryId !== null && { DirectoryId: input.DirectoryId }),
        ...(input.Name !== undefined && input.Name !== null && { Name: input.Name }),
    };
};
const serializeAws_json1_1CreateTrustRequest = (input, context) => {
    return {
        ...(input.ConditionalForwarderIpAddrs !== undefined &&
            input.ConditionalForwarderIpAddrs !== null && {
            ConditionalForwarderIpAddrs: serializeAws_json1_1DnsIpAddrs(input.ConditionalForwarderIpAddrs, context),
        }),
        ...(input.DirectoryId !== undefined && input.DirectoryId !== null && { DirectoryId: input.DirectoryId }),
        ...(input.RemoteDomainName !== undefined &&
            input.RemoteDomainName !== null && { RemoteDomainName: input.RemoteDomainName }),
        ...(input.SelectiveAuth !== undefined && input.SelectiveAuth !== null && { SelectiveAuth: input.SelectiveAuth }),
        ...(input.TrustDirection !== undefined &&
            input.TrustDirection !== null && { TrustDirection: input.TrustDirection }),
        ...(input.TrustPassword !== undefined && input.TrustPassword !== null && { TrustPassword: input.TrustPassword }),
        ...(input.TrustType !== undefined && input.TrustType !== null && { TrustType: input.TrustType }),
    };
};
const serializeAws_json1_1DeleteConditionalForwarderRequest = (input, context) => {
    return {
        ...(input.DirectoryId !== undefined && input.DirectoryId !== null && { DirectoryId: input.DirectoryId }),
        ...(input.RemoteDomainName !== undefined &&
            input.RemoteDomainName !== null && { RemoteDomainName: input.RemoteDomainName }),
    };
};
const serializeAws_json1_1DeleteDirectoryRequest = (input, context) => {
    return {
        ...(input.DirectoryId !== undefined && input.DirectoryId !== null && { DirectoryId: input.DirectoryId }),
    };
};
const serializeAws_json1_1DeleteLogSubscriptionRequest = (input, context) => {
    return {
        ...(input.DirectoryId !== undefined && input.DirectoryId !== null && { DirectoryId: input.DirectoryId }),
    };
};
const serializeAws_json1_1DeleteSnapshotRequest = (input, context) => {
    return {
        ...(input.SnapshotId !== undefined && input.SnapshotId !== null && { SnapshotId: input.SnapshotId }),
    };
};
const serializeAws_json1_1DeleteTrustRequest = (input, context) => {
    return {
        ...(input.DeleteAssociatedConditionalForwarder !== undefined &&
            input.DeleteAssociatedConditionalForwarder !== null && {
            DeleteAssociatedConditionalForwarder: input.DeleteAssociatedConditionalForwarder,
        }),
        ...(input.TrustId !== undefined && input.TrustId !== null && { TrustId: input.TrustId }),
    };
};
const serializeAws_json1_1DeregisterCertificateRequest = (input, context) => {
    return {
        ...(input.CertificateId !== undefined && input.CertificateId !== null && { CertificateId: input.CertificateId }),
        ...(input.DirectoryId !== undefined && input.DirectoryId !== null && { DirectoryId: input.DirectoryId }),
    };
};
const serializeAws_json1_1DeregisterEventTopicRequest = (input, context) => {
    return {
        ...(input.DirectoryId !== undefined && input.DirectoryId !== null && { DirectoryId: input.DirectoryId }),
        ...(input.TopicName !== undefined && input.TopicName !== null && { TopicName: input.TopicName }),
    };
};
const serializeAws_json1_1DescribeCertificateRequest = (input, context) => {
    return {
        ...(input.CertificateId !== undefined && input.CertificateId !== null && { CertificateId: input.CertificateId }),
        ...(input.DirectoryId !== undefined && input.DirectoryId !== null && { DirectoryId: input.DirectoryId }),
    };
};
const serializeAws_json1_1DescribeConditionalForwardersRequest = (input, context) => {
    return {
        ...(input.DirectoryId !== undefined && input.DirectoryId !== null && { DirectoryId: input.DirectoryId }),
        ...(input.RemoteDomainNames !== undefined &&
            input.RemoteDomainNames !== null && {
            RemoteDomainNames: serializeAws_json1_1RemoteDomainNames(input.RemoteDomainNames, context),
        }),
    };
};
const serializeAws_json1_1DescribeDirectoriesRequest = (input, context) => {
    return {
        ...(input.DirectoryIds !== undefined &&
            input.DirectoryIds !== null && { DirectoryIds: serializeAws_json1_1DirectoryIds(input.DirectoryIds, context) }),
        ...(input.Limit !== undefined && input.Limit !== null && { Limit: input.Limit }),
        ...(input.NextToken !== undefined && input.NextToken !== null && { NextToken: input.NextToken }),
    };
};
const serializeAws_json1_1DescribeDomainControllersRequest = (input, context) => {
    return {
        ...(input.DirectoryId !== undefined && input.DirectoryId !== null && { DirectoryId: input.DirectoryId }),
        ...(input.DomainControllerIds !== undefined &&
            input.DomainControllerIds !== null && {
            DomainControllerIds: serializeAws_json1_1DomainControllerIds(input.DomainControllerIds, context),
        }),
        ...(input.Limit !== undefined && input.Limit !== null && { Limit: input.Limit }),
        ...(input.NextToken !== undefined && input.NextToken !== null && { NextToken: input.NextToken }),
    };
};
const serializeAws_json1_1DescribeEventTopicsRequest = (input, context) => {
    return {
        ...(input.DirectoryId !== undefined && input.DirectoryId !== null && { DirectoryId: input.DirectoryId }),
        ...(input.TopicNames !== undefined &&
            input.TopicNames !== null && { TopicNames: serializeAws_json1_1TopicNames(input.TopicNames, context) }),
    };
};
const serializeAws_json1_1DescribeLDAPSSettingsRequest = (input, context) => {
    return {
        ...(input.DirectoryId !== undefined && input.DirectoryId !== null && { DirectoryId: input.DirectoryId }),
        ...(input.Limit !== undefined && input.Limit !== null && { Limit: input.Limit }),
        ...(input.NextToken !== undefined && input.NextToken !== null && { NextToken: input.NextToken }),
        ...(input.Type !== undefined && input.Type !== null && { Type: input.Type }),
    };
};
const serializeAws_json1_1DescribeRegionsRequest = (input, context) => {
    return {
        ...(input.DirectoryId !== undefined && input.DirectoryId !== null && { DirectoryId: input.DirectoryId }),
        ...(input.NextToken !== undefined && input.NextToken !== null && { NextToken: input.NextToken }),
        ...(input.RegionName !== undefined && input.RegionName !== null && { RegionName: input.RegionName }),
    };
};
const serializeAws_json1_1DescribeSharedDirectoriesRequest = (input, context) => {
    return {
        ...(input.Limit !== undefined && input.Limit !== null && { Limit: input.Limit }),
        ...(input.NextToken !== undefined && input.NextToken !== null && { NextToken: input.NextToken }),
        ...(input.OwnerDirectoryId !== undefined &&
            input.OwnerDirectoryId !== null && { OwnerDirectoryId: input.OwnerDirectoryId }),
        ...(input.SharedDirectoryIds !== undefined &&
            input.SharedDirectoryIds !== null && {
            SharedDirectoryIds: serializeAws_json1_1DirectoryIds(input.SharedDirectoryIds, context),
        }),
    };
};
const serializeAws_json1_1DescribeSnapshotsRequest = (input, context) => {
    return {
        ...(input.DirectoryId !== undefined && input.DirectoryId !== null && { DirectoryId: input.DirectoryId }),
        ...(input.Limit !== undefined && input.Limit !== null && { Limit: input.Limit }),
        ...(input.NextToken !== undefined && input.NextToken !== null && { NextToken: input.NextToken }),
        ...(input.SnapshotIds !== undefined &&
            input.SnapshotIds !== null && { SnapshotIds: serializeAws_json1_1SnapshotIds(input.SnapshotIds, context) }),
    };
};
const serializeAws_json1_1DescribeTrustsRequest = (input, context) => {
    return {
        ...(input.DirectoryId !== undefined && input.DirectoryId !== null && { DirectoryId: input.DirectoryId }),
        ...(input.Limit !== undefined && input.Limit !== null && { Limit: input.Limit }),
        ...(input.NextToken !== undefined && input.NextToken !== null && { NextToken: input.NextToken }),
        ...(input.TrustIds !== undefined &&
            input.TrustIds !== null && { TrustIds: serializeAws_json1_1TrustIds(input.TrustIds, context) }),
    };
};
const serializeAws_json1_1DirectoryConnectSettings = (input, context) => {
    return {
        ...(input.CustomerDnsIps !== undefined &&
            input.CustomerDnsIps !== null && {
            CustomerDnsIps: serializeAws_json1_1DnsIpAddrs(input.CustomerDnsIps, context),
        }),
        ...(input.CustomerUserName !== undefined &&
            input.CustomerUserName !== null && { CustomerUserName: input.CustomerUserName }),
        ...(input.SubnetIds !== undefined &&
            input.SubnetIds !== null && { SubnetIds: serializeAws_json1_1SubnetIds(input.SubnetIds, context) }),
        ...(input.VpcId !== undefined && input.VpcId !== null && { VpcId: input.VpcId }),
    };
};
const serializeAws_json1_1DirectoryIds = (input, context) => {
    return input
        .filter((e) => e != null)
        .map((entry) => {
        if (entry === null) {
            return null;
        }
        return entry;
    });
};
const serializeAws_json1_1DirectoryVpcSettings = (input, context) => {
    return {
        ...(input.SubnetIds !== undefined &&
            input.SubnetIds !== null && { SubnetIds: serializeAws_json1_1SubnetIds(input.SubnetIds, context) }),
        ...(input.VpcId !== undefined && input.VpcId !== null && { VpcId: input.VpcId }),
    };
};
const serializeAws_json1_1DisableClientAuthenticationRequest = (input, context) => {
    return {
        ...(input.DirectoryId !== undefined && input.DirectoryId !== null && { DirectoryId: input.DirectoryId }),
        ...(input.Type !== undefined && input.Type !== null && { Type: input.Type }),
    };
};
const serializeAws_json1_1DisableLDAPSRequest = (input, context) => {
    return {
        ...(input.DirectoryId !== undefined && input.DirectoryId !== null && { DirectoryId: input.DirectoryId }),
        ...(input.Type !== undefined && input.Type !== null && { Type: input.Type }),
    };
};
const serializeAws_json1_1DisableRadiusRequest = (input, context) => {
    return {
        ...(input.DirectoryId !== undefined && input.DirectoryId !== null && { DirectoryId: input.DirectoryId }),
    };
};
const serializeAws_json1_1DisableSsoRequest = (input, context) => {
    return {
        ...(input.DirectoryId !== undefined && input.DirectoryId !== null && { DirectoryId: input.DirectoryId }),
        ...(input.Password !== undefined && input.Password !== null && { Password: input.Password }),
        ...(input.UserName !== undefined && input.UserName !== null && { UserName: input.UserName }),
    };
};
const serializeAws_json1_1DnsIpAddrs = (input, context) => {
    return input
        .filter((e) => e != null)
        .map((entry) => {
        if (entry === null) {
            return null;
        }
        return entry;
    });
};
const serializeAws_json1_1DomainControllerIds = (input, context) => {
    return input
        .filter((e) => e != null)
        .map((entry) => {
        if (entry === null) {
            return null;
        }
        return entry;
    });
};
const serializeAws_json1_1EnableClientAuthenticationRequest = (input, context) => {
    return {
        ...(input.DirectoryId !== undefined && input.DirectoryId !== null && { DirectoryId: input.DirectoryId }),
        ...(input.Type !== undefined && input.Type !== null && { Type: input.Type }),
    };
};
const serializeAws_json1_1EnableLDAPSRequest = (input, context) => {
    return {
        ...(input.DirectoryId !== undefined && input.DirectoryId !== null && { DirectoryId: input.DirectoryId }),
        ...(input.Type !== undefined && input.Type !== null && { Type: input.Type }),
    };
};
const serializeAws_json1_1EnableRadiusRequest = (input, context) => {
    return {
        ...(input.DirectoryId !== undefined && input.DirectoryId !== null && { DirectoryId: input.DirectoryId }),
        ...(input.RadiusSettings !== undefined &&
            input.RadiusSettings !== null && {
            RadiusSettings: serializeAws_json1_1RadiusSettings(input.RadiusSettings, context),
        }),
    };
};
const serializeAws_json1_1EnableSsoRequest = (input, context) => {
    return {
        ...(input.DirectoryId !== undefined && input.DirectoryId !== null && { DirectoryId: input.DirectoryId }),
        ...(input.Password !== undefined && input.Password !== null && { Password: input.Password }),
        ...(input.UserName !== undefined && input.UserName !== null && { UserName: input.UserName }),
    };
};
const serializeAws_json1_1GetDirectoryLimitsRequest = (input, context) => {
    return {};
};
const serializeAws_json1_1GetSnapshotLimitsRequest = (input, context) => {
    return {
        ...(input.DirectoryId !== undefined && input.DirectoryId !== null && { DirectoryId: input.DirectoryId }),
    };
};
const serializeAws_json1_1IpRoute = (input, context) => {
    return {
        ...(input.CidrIp !== undefined && input.CidrIp !== null && { CidrIp: input.CidrIp }),
        ...(input.Description !== undefined && input.Description !== null && { Description: input.Description }),
    };
};
const serializeAws_json1_1IpRoutes = (input, context) => {
    return input
        .filter((e) => e != null)
        .map((entry) => {
        if (entry === null) {
            return null;
        }
        return serializeAws_json1_1IpRoute(entry, context);
    });
};
const serializeAws_json1_1ListCertificatesRequest = (input, context) => {
    return {
        ...(input.DirectoryId !== undefined && input.DirectoryId !== null && { DirectoryId: input.DirectoryId }),
        ...(input.Limit !== undefined && input.Limit !== null && { Limit: input.Limit }),
        ...(input.NextToken !== undefined && input.NextToken !== null && { NextToken: input.NextToken }),
    };
};
const serializeAws_json1_1ListIpRoutesRequest = (input, context) => {
    return {
        ...(input.DirectoryId !== undefined && input.DirectoryId !== null && { DirectoryId: input.DirectoryId }),
        ...(input.Limit !== undefined && input.Limit !== null && { Limit: input.Limit }),
        ...(input.NextToken !== undefined && input.NextToken !== null && { NextToken: input.NextToken }),
    };
};
const serializeAws_json1_1ListLogSubscriptionsRequest = (input, context) => {
    return {
        ...(input.DirectoryId !== undefined && input.DirectoryId !== null && { DirectoryId: input.DirectoryId }),
        ...(input.Limit !== undefined && input.Limit !== null && { Limit: input.Limit }),
        ...(input.NextToken !== undefined && input.NextToken !== null && { NextToken: input.NextToken }),
    };
};
const serializeAws_json1_1ListSchemaExtensionsRequest = (input, context) => {
    return {
        ...(input.DirectoryId !== undefined && input.DirectoryId !== null && { DirectoryId: input.DirectoryId }),
        ...(input.Limit !== undefined && input.Limit !== null && { Limit: input.Limit }),
        ...(input.NextToken !== undefined && input.NextToken !== null && { NextToken: input.NextToken }),
    };
};
const serializeAws_json1_1ListTagsForResourceRequest = (input, context) => {
    return {
        ...(input.Limit !== undefined && input.Limit !== null && { Limit: input.Limit }),
        ...(input.NextToken !== undefined && input.NextToken !== null && { NextToken: input.NextToken }),
        ...(input.ResourceId !== undefined && input.ResourceId !== null && { ResourceId: input.ResourceId }),
    };
};
const serializeAws_json1_1RadiusSettings = (input, context) => {
    return {
        ...(input.AuthenticationProtocol !== undefined &&
            input.AuthenticationProtocol !== null && { AuthenticationProtocol: input.AuthenticationProtocol }),
        ...(input.DisplayLabel !== undefined && input.DisplayLabel !== null && { DisplayLabel: input.DisplayLabel }),
        ...(input.RadiusPort !== undefined && input.RadiusPort !== null && { RadiusPort: input.RadiusPort }),
        ...(input.RadiusRetries !== undefined && input.RadiusRetries !== null && { RadiusRetries: input.RadiusRetries }),
        ...(input.RadiusServers !== undefined &&
            input.RadiusServers !== null && { RadiusServers: serializeAws_json1_1Servers(input.RadiusServers, context) }),
        ...(input.RadiusTimeout !== undefined && input.RadiusTimeout !== null && { RadiusTimeout: input.RadiusTimeout }),
        ...(input.SharedSecret !== undefined && input.SharedSecret !== null && { SharedSecret: input.SharedSecret }),
        ...(input.UseSameUsername !== undefined &&
            input.UseSameUsername !== null && { UseSameUsername: input.UseSameUsername }),
    };
};
const serializeAws_json1_1RegisterCertificateRequest = (input, context) => {
    return {
        ...(input.CertificateData !== undefined &&
            input.CertificateData !== null && { CertificateData: input.CertificateData }),
        ...(input.ClientCertAuthSettings !== undefined &&
            input.ClientCertAuthSettings !== null && {
            ClientCertAuthSettings: serializeAws_json1_1ClientCertAuthSettings(input.ClientCertAuthSettings, context),
        }),
        ...(input.DirectoryId !== undefined && input.DirectoryId !== null && { DirectoryId: input.DirectoryId }),
        ...(input.Type !== undefined && input.Type !== null && { Type: input.Type }),
    };
};
const serializeAws_json1_1RegisterEventTopicRequest = (input, context) => {
    return {
        ...(input.DirectoryId !== undefined && input.DirectoryId !== null && { DirectoryId: input.DirectoryId }),
        ...(input.TopicName !== undefined && input.TopicName !== null && { TopicName: input.TopicName }),
    };
};
const serializeAws_json1_1RejectSharedDirectoryRequest = (input, context) => {
    return {
        ...(input.SharedDirectoryId !== undefined &&
            input.SharedDirectoryId !== null && { SharedDirectoryId: input.SharedDirectoryId }),
    };
};
const serializeAws_json1_1RemoteDomainNames = (input, context) => {
    return input
        .filter((e) => e != null)
        .map((entry) => {
        if (entry === null) {
            return null;
        }
        return entry;
    });
};
const serializeAws_json1_1RemoveIpRoutesRequest = (input, context) => {
    return {
        ...(input.CidrIps !== undefined &&
            input.CidrIps !== null && { CidrIps: serializeAws_json1_1CidrIps(input.CidrIps, context) }),
        ...(input.DirectoryId !== undefined && input.DirectoryId !== null && { DirectoryId: input.DirectoryId }),
    };
};
const serializeAws_json1_1RemoveRegionRequest = (input, context) => {
    return {
        ...(input.DirectoryId !== undefined && input.DirectoryId !== null && { DirectoryId: input.DirectoryId }),
    };
};
const serializeAws_json1_1RemoveTagsFromResourceRequest = (input, context) => {
    return {
        ...(input.ResourceId !== undefined && input.ResourceId !== null && { ResourceId: input.ResourceId }),
        ...(input.TagKeys !== undefined &&
            input.TagKeys !== null && { TagKeys: serializeAws_json1_1TagKeys(input.TagKeys, context) }),
    };
};
const serializeAws_json1_1ResetUserPasswordRequest = (input, context) => {
    return {
        ...(input.DirectoryId !== undefined && input.DirectoryId !== null && { DirectoryId: input.DirectoryId }),
        ...(input.NewPassword !== undefined && input.NewPassword !== null && { NewPassword: input.NewPassword }),
        ...(input.UserName !== undefined && input.UserName !== null && { UserName: input.UserName }),
    };
};
const serializeAws_json1_1RestoreFromSnapshotRequest = (input, context) => {
    return {
        ...(input.SnapshotId !== undefined && input.SnapshotId !== null && { SnapshotId: input.SnapshotId }),
    };
};
const serializeAws_json1_1Servers = (input, context) => {
    return input
        .filter((e) => e != null)
        .map((entry) => {
        if (entry === null) {
            return null;
        }
        return entry;
    });
};
const serializeAws_json1_1ShareDirectoryRequest = (input, context) => {
    return {
        ...(input.DirectoryId !== undefined && input.DirectoryId !== null && { DirectoryId: input.DirectoryId }),
        ...(input.ShareMethod !== undefined && input.ShareMethod !== null && { ShareMethod: input.ShareMethod }),
        ...(input.ShareNotes !== undefined && input.ShareNotes !== null && { ShareNotes: input.ShareNotes }),
        ...(input.ShareTarget !== undefined &&
            input.ShareTarget !== null && { ShareTarget: serializeAws_json1_1ShareTarget(input.ShareTarget, context) }),
    };
};
const serializeAws_json1_1ShareTarget = (input, context) => {
    return {
        ...(input.Id !== undefined && input.Id !== null && { Id: input.Id }),
        ...(input.Type !== undefined && input.Type !== null && { Type: input.Type }),
    };
};
const serializeAws_json1_1SnapshotIds = (input, context) => {
    return input
        .filter((e) => e != null)
        .map((entry) => {
        if (entry === null) {
            return null;
        }
        return entry;
    });
};
const serializeAws_json1_1StartSchemaExtensionRequest = (input, context) => {
    return {
        ...(input.CreateSnapshotBeforeSchemaExtension !== undefined &&
            input.CreateSnapshotBeforeSchemaExtension !== null && {
            CreateSnapshotBeforeSchemaExtension: input.CreateSnapshotBeforeSchemaExtension,
        }),
        ...(input.Description !== undefined && input.Description !== null && { Description: input.Description }),
        ...(input.DirectoryId !== undefined && input.DirectoryId !== null && { DirectoryId: input.DirectoryId }),
        ...(input.LdifContent !== undefined && input.LdifContent !== null && { LdifContent: input.LdifContent }),
    };
};
const serializeAws_json1_1SubnetIds = (input, context) => {
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
const serializeAws_json1_1TagKeys = (input, context) => {
    return input
        .filter((e) => e != null)
        .map((entry) => {
        if (entry === null) {
            return null;
        }
        return entry;
    });
};
const serializeAws_json1_1Tags = (input, context) => {
    return input
        .filter((e) => e != null)
        .map((entry) => {
        if (entry === null) {
            return null;
        }
        return serializeAws_json1_1Tag(entry, context);
    });
};
const serializeAws_json1_1TopicNames = (input, context) => {
    return input
        .filter((e) => e != null)
        .map((entry) => {
        if (entry === null) {
            return null;
        }
        return entry;
    });
};
const serializeAws_json1_1TrustIds = (input, context) => {
    return input
        .filter((e) => e != null)
        .map((entry) => {
        if (entry === null) {
            return null;
        }
        return entry;
    });
};
const serializeAws_json1_1UnshareDirectoryRequest = (input, context) => {
    return {
        ...(input.DirectoryId !== undefined && input.DirectoryId !== null && { DirectoryId: input.DirectoryId }),
        ...(input.UnshareTarget !== undefined &&
            input.UnshareTarget !== null && {
            UnshareTarget: serializeAws_json1_1UnshareTarget(input.UnshareTarget, context),
        }),
    };
};
const serializeAws_json1_1UnshareTarget = (input, context) => {
    return {
        ...(input.Id !== undefined && input.Id !== null && { Id: input.Id }),
        ...(input.Type !== undefined && input.Type !== null && { Type: input.Type }),
    };
};
const serializeAws_json1_1UpdateConditionalForwarderRequest = (input, context) => {
    return {
        ...(input.DirectoryId !== undefined && input.DirectoryId !== null && { DirectoryId: input.DirectoryId }),
        ...(input.DnsIpAddrs !== undefined &&
            input.DnsIpAddrs !== null && { DnsIpAddrs: serializeAws_json1_1DnsIpAddrs(input.DnsIpAddrs, context) }),
        ...(input.RemoteDomainName !== undefined &&
            input.RemoteDomainName !== null && { RemoteDomainName: input.RemoteDomainName }),
    };
};
const serializeAws_json1_1UpdateNumberOfDomainControllersRequest = (input, context) => {
    return {
        ...(input.DesiredNumber !== undefined && input.DesiredNumber !== null && { DesiredNumber: input.DesiredNumber }),
        ...(input.DirectoryId !== undefined && input.DirectoryId !== null && { DirectoryId: input.DirectoryId }),
    };
};
const serializeAws_json1_1UpdateRadiusRequest = (input, context) => {
    return {
        ...(input.DirectoryId !== undefined && input.DirectoryId !== null && { DirectoryId: input.DirectoryId }),
        ...(input.RadiusSettings !== undefined &&
            input.RadiusSettings !== null && {
            RadiusSettings: serializeAws_json1_1RadiusSettings(input.RadiusSettings, context),
        }),
    };
};
const serializeAws_json1_1UpdateTrustRequest = (input, context) => {
    return {
        ...(input.SelectiveAuth !== undefined && input.SelectiveAuth !== null && { SelectiveAuth: input.SelectiveAuth }),
        ...(input.TrustId !== undefined && input.TrustId !== null && { TrustId: input.TrustId }),
    };
};
const serializeAws_json1_1VerifyTrustRequest = (input, context) => {
    return {
        ...(input.TrustId !== undefined && input.TrustId !== null && { TrustId: input.TrustId }),
    };
};
const deserializeAws_json1_1AcceptSharedDirectoryResult = (output, context) => {
    return {
        SharedDirectory: output.SharedDirectory !== undefined && output.SharedDirectory !== null
            ? deserializeAws_json1_1SharedDirectory(output.SharedDirectory, context)
            : undefined,
    };
};
const deserializeAws_json1_1AccessDeniedException = (output, context) => {
    return {
        Message: output.Message !== undefined && output.Message !== null ? output.Message : undefined,
        RequestId: output.RequestId !== undefined && output.RequestId !== null ? output.RequestId : undefined,
    };
};
const deserializeAws_json1_1AddIpRoutesResult = (output, context) => {
    return {};
};
const deserializeAws_json1_1AdditionalRegions = (output, context) => {
    return (output || [])
        .filter((e) => e != null)
        .map((entry) => {
        if (entry === null) {
            return null;
        }
        return entry;
    });
};
const deserializeAws_json1_1AddRegionResult = (output, context) => {
    return {};
};
const deserializeAws_json1_1AddTagsToResourceResult = (output, context) => {
    return {};
};
const deserializeAws_json1_1Attribute = (output, context) => {
    return {
        Name: output.Name !== undefined && output.Name !== null ? output.Name : undefined,
        Value: output.Value !== undefined && output.Value !== null ? output.Value : undefined,
    };
};
const deserializeAws_json1_1Attributes = (output, context) => {
    return (output || [])
        .filter((e) => e != null)
        .map((entry) => {
        if (entry === null) {
            return null;
        }
        return deserializeAws_json1_1Attribute(entry, context);
    });
};
const deserializeAws_json1_1AuthenticationFailedException = (output, context) => {
    return {
        Message: output.Message !== undefined && output.Message !== null ? output.Message : undefined,
        RequestId: output.RequestId !== undefined && output.RequestId !== null ? output.RequestId : undefined,
    };
};
const deserializeAws_json1_1AvailabilityZones = (output, context) => {
    return (output || [])
        .filter((e) => e != null)
        .map((entry) => {
        if (entry === null) {
            return null;
        }
        return entry;
    });
};
const deserializeAws_json1_1CancelSchemaExtensionResult = (output, context) => {
    return {};
};
const deserializeAws_json1_1Certificate = (output, context) => {
    return {
        CertificateId: output.CertificateId !== undefined && output.CertificateId !== null ? output.CertificateId : undefined,
        ClientCertAuthSettings: output.ClientCertAuthSettings !== undefined && output.ClientCertAuthSettings !== null
            ? deserializeAws_json1_1ClientCertAuthSettings(output.ClientCertAuthSettings, context)
            : undefined,
        CommonName: output.CommonName !== undefined && output.CommonName !== null ? output.CommonName : undefined,
        ExpiryDateTime: output.ExpiryDateTime !== undefined && output.ExpiryDateTime !== null
            ? new Date(Math.round(output.ExpiryDateTime * 1000))
            : undefined,
        RegisteredDateTime: output.RegisteredDateTime !== undefined && output.RegisteredDateTime !== null
            ? new Date(Math.round(output.RegisteredDateTime * 1000))
            : undefined,
        State: output.State !== undefined && output.State !== null ? output.State : undefined,
        StateReason: output.StateReason !== undefined && output.StateReason !== null ? output.StateReason : undefined,
        Type: output.Type !== undefined && output.Type !== null ? output.Type : undefined,
    };
};
const deserializeAws_json1_1CertificateAlreadyExistsException = (output, context) => {
    return {
        Message: output.Message !== undefined && output.Message !== null ? output.Message : undefined,
        RequestId: output.RequestId !== undefined && output.RequestId !== null ? output.RequestId : undefined,
    };
};
const deserializeAws_json1_1CertificateDoesNotExistException = (output, context) => {
    return {
        Message: output.Message !== undefined && output.Message !== null ? output.Message : undefined,
        RequestId: output.RequestId !== undefined && output.RequestId !== null ? output.RequestId : undefined,
    };
};
const deserializeAws_json1_1CertificateInfo = (output, context) => {
    return {
        CertificateId: output.CertificateId !== undefined && output.CertificateId !== null ? output.CertificateId : undefined,
        CommonName: output.CommonName !== undefined && output.CommonName !== null ? output.CommonName : undefined,
        ExpiryDateTime: output.ExpiryDateTime !== undefined && output.ExpiryDateTime !== null
            ? new Date(Math.round(output.ExpiryDateTime * 1000))
            : undefined,
        State: output.State !== undefined && output.State !== null ? output.State : undefined,
        Type: output.Type !== undefined && output.Type !== null ? output.Type : undefined,
    };
};
const deserializeAws_json1_1CertificateInUseException = (output, context) => {
    return {
        Message: output.Message !== undefined && output.Message !== null ? output.Message : undefined,
        RequestId: output.RequestId !== undefined && output.RequestId !== null ? output.RequestId : undefined,
    };
};
const deserializeAws_json1_1CertificateLimitExceededException = (output, context) => {
    return {
        Message: output.Message !== undefined && output.Message !== null ? output.Message : undefined,
        RequestId: output.RequestId !== undefined && output.RequestId !== null ? output.RequestId : undefined,
    };
};
const deserializeAws_json1_1CertificatesInfo = (output, context) => {
    return (output || [])
        .filter((e) => e != null)
        .map((entry) => {
        if (entry === null) {
            return null;
        }
        return deserializeAws_json1_1CertificateInfo(entry, context);
    });
};
const deserializeAws_json1_1ClientCertAuthSettings = (output, context) => {
    return {
        OCSPUrl: output.OCSPUrl !== undefined && output.OCSPUrl !== null ? output.OCSPUrl : undefined,
    };
};
const deserializeAws_json1_1ClientException = (output, context) => {
    return {
        Message: output.Message !== undefined && output.Message !== null ? output.Message : undefined,
        RequestId: output.RequestId !== undefined && output.RequestId !== null ? output.RequestId : undefined,
    };
};
const deserializeAws_json1_1Computer = (output, context) => {
    return {
        ComputerAttributes: output.ComputerAttributes !== undefined && output.ComputerAttributes !== null
            ? deserializeAws_json1_1Attributes(output.ComputerAttributes, context)
            : undefined,
        ComputerId: output.ComputerId !== undefined && output.ComputerId !== null ? output.ComputerId : undefined,
        ComputerName: output.ComputerName !== undefined && output.ComputerName !== null ? output.ComputerName : undefined,
    };
};
const deserializeAws_json1_1ConditionalForwarder = (output, context) => {
    return {
        DnsIpAddrs: output.DnsIpAddrs !== undefined && output.DnsIpAddrs !== null
            ? deserializeAws_json1_1DnsIpAddrs(output.DnsIpAddrs, context)
            : undefined,
        RemoteDomainName: output.RemoteDomainName !== undefined && output.RemoteDomainName !== null ? output.RemoteDomainName : undefined,
        ReplicationScope: output.ReplicationScope !== undefined && output.ReplicationScope !== null ? output.ReplicationScope : undefined,
    };
};
const deserializeAws_json1_1ConditionalForwarders = (output, context) => {
    return (output || [])
        .filter((e) => e != null)
        .map((entry) => {
        if (entry === null) {
            return null;
        }
        return deserializeAws_json1_1ConditionalForwarder(entry, context);
    });
};
const deserializeAws_json1_1ConnectDirectoryResult = (output, context) => {
    return {
        DirectoryId: output.DirectoryId !== undefined && output.DirectoryId !== null ? output.DirectoryId : undefined,
    };
};
const deserializeAws_json1_1CreateAliasResult = (output, context) => {
    return {
        Alias: output.Alias !== undefined && output.Alias !== null ? output.Alias : undefined,
        DirectoryId: output.DirectoryId !== undefined && output.DirectoryId !== null ? output.DirectoryId : undefined,
    };
};
const deserializeAws_json1_1CreateComputerResult = (output, context) => {
    return {
        Computer: output.Computer !== undefined && output.Computer !== null
            ? deserializeAws_json1_1Computer(output.Computer, context)
            : undefined,
    };
};
const deserializeAws_json1_1CreateConditionalForwarderResult = (output, context) => {
    return {};
};
const deserializeAws_json1_1CreateDirectoryResult = (output, context) => {
    return {
        DirectoryId: output.DirectoryId !== undefined && output.DirectoryId !== null ? output.DirectoryId : undefined,
    };
};
const deserializeAws_json1_1CreateLogSubscriptionResult = (output, context) => {
    return {};
};
const deserializeAws_json1_1CreateMicrosoftADResult = (output, context) => {
    return {
        DirectoryId: output.DirectoryId !== undefined && output.DirectoryId !== null ? output.DirectoryId : undefined,
    };
};
const deserializeAws_json1_1CreateSnapshotResult = (output, context) => {
    return {
        SnapshotId: output.SnapshotId !== undefined && output.SnapshotId !== null ? output.SnapshotId : undefined,
    };
};
const deserializeAws_json1_1CreateTrustResult = (output, context) => {
    return {
        TrustId: output.TrustId !== undefined && output.TrustId !== null ? output.TrustId : undefined,
    };
};
const deserializeAws_json1_1DeleteConditionalForwarderResult = (output, context) => {
    return {};
};
const deserializeAws_json1_1DeleteDirectoryResult = (output, context) => {
    return {
        DirectoryId: output.DirectoryId !== undefined && output.DirectoryId !== null ? output.DirectoryId : undefined,
    };
};
const deserializeAws_json1_1DeleteLogSubscriptionResult = (output, context) => {
    return {};
};
const deserializeAws_json1_1DeleteSnapshotResult = (output, context) => {
    return {
        SnapshotId: output.SnapshotId !== undefined && output.SnapshotId !== null ? output.SnapshotId : undefined,
    };
};
const deserializeAws_json1_1DeleteTrustResult = (output, context) => {
    return {
        TrustId: output.TrustId !== undefined && output.TrustId !== null ? output.TrustId : undefined,
    };
};
const deserializeAws_json1_1DeregisterCertificateResult = (output, context) => {
    return {};
};
const deserializeAws_json1_1DeregisterEventTopicResult = (output, context) => {
    return {};
};
const deserializeAws_json1_1DescribeCertificateResult = (output, context) => {
    return {
        Certificate: output.Certificate !== undefined && output.Certificate !== null
            ? deserializeAws_json1_1Certificate(output.Certificate, context)
            : undefined,
    };
};
const deserializeAws_json1_1DescribeConditionalForwardersResult = (output, context) => {
    return {
        ConditionalForwarders: output.ConditionalForwarders !== undefined && output.ConditionalForwarders !== null
            ? deserializeAws_json1_1ConditionalForwarders(output.ConditionalForwarders, context)
            : undefined,
    };
};
const deserializeAws_json1_1DescribeDirectoriesResult = (output, context) => {
    return {
        DirectoryDescriptions: output.DirectoryDescriptions !== undefined && output.DirectoryDescriptions !== null
            ? deserializeAws_json1_1DirectoryDescriptions(output.DirectoryDescriptions, context)
            : undefined,
        NextToken: output.NextToken !== undefined && output.NextToken !== null ? output.NextToken : undefined,
    };
};
const deserializeAws_json1_1DescribeDomainControllersResult = (output, context) => {
    return {
        DomainControllers: output.DomainControllers !== undefined && output.DomainControllers !== null
            ? deserializeAws_json1_1DomainControllers(output.DomainControllers, context)
            : undefined,
        NextToken: output.NextToken !== undefined && output.NextToken !== null ? output.NextToken : undefined,
    };
};
const deserializeAws_json1_1DescribeEventTopicsResult = (output, context) => {
    return {
        EventTopics: output.EventTopics !== undefined && output.EventTopics !== null
            ? deserializeAws_json1_1EventTopics(output.EventTopics, context)
            : undefined,
    };
};
const deserializeAws_json1_1DescribeLDAPSSettingsResult = (output, context) => {
    return {
        LDAPSSettingsInfo: output.LDAPSSettingsInfo !== undefined && output.LDAPSSettingsInfo !== null
            ? deserializeAws_json1_1LDAPSSettingsInfo(output.LDAPSSettingsInfo, context)
            : undefined,
        NextToken: output.NextToken !== undefined && output.NextToken !== null ? output.NextToken : undefined,
    };
};
const deserializeAws_json1_1DescribeRegionsResult = (output, context) => {
    return {
        NextToken: output.NextToken !== undefined && output.NextToken !== null ? output.NextToken : undefined,
        RegionsDescription: output.RegionsDescription !== undefined && output.RegionsDescription !== null
            ? deserializeAws_json1_1RegionsDescription(output.RegionsDescription, context)
            : undefined,
    };
};
const deserializeAws_json1_1DescribeSharedDirectoriesResult = (output, context) => {
    return {
        NextToken: output.NextToken !== undefined && output.NextToken !== null ? output.NextToken : undefined,
        SharedDirectories: output.SharedDirectories !== undefined && output.SharedDirectories !== null
            ? deserializeAws_json1_1SharedDirectories(output.SharedDirectories, context)
            : undefined,
    };
};
const deserializeAws_json1_1DescribeSnapshotsResult = (output, context) => {
    return {
        NextToken: output.NextToken !== undefined && output.NextToken !== null ? output.NextToken : undefined,
        Snapshots: output.Snapshots !== undefined && output.Snapshots !== null
            ? deserializeAws_json1_1Snapshots(output.Snapshots, context)
            : undefined,
    };
};
const deserializeAws_json1_1DescribeTrustsResult = (output, context) => {
    return {
        NextToken: output.NextToken !== undefined && output.NextToken !== null ? output.NextToken : undefined,
        Trusts: output.Trusts !== undefined && output.Trusts !== null
            ? deserializeAws_json1_1Trusts(output.Trusts, context)
            : undefined,
    };
};
const deserializeAws_json1_1DirectoryAlreadyInRegionException = (output, context) => {
    return {
        Message: output.Message !== undefined && output.Message !== null ? output.Message : undefined,
        RequestId: output.RequestId !== undefined && output.RequestId !== null ? output.RequestId : undefined,
    };
};
const deserializeAws_json1_1DirectoryAlreadySharedException = (output, context) => {
    return {
        Message: output.Message !== undefined && output.Message !== null ? output.Message : undefined,
        RequestId: output.RequestId !== undefined && output.RequestId !== null ? output.RequestId : undefined,
    };
};
const deserializeAws_json1_1DirectoryConnectSettingsDescription = (output, context) => {
    return {
        AvailabilityZones: output.AvailabilityZones !== undefined && output.AvailabilityZones !== null
            ? deserializeAws_json1_1AvailabilityZones(output.AvailabilityZones, context)
            : undefined,
        ConnectIps: output.ConnectIps !== undefined && output.ConnectIps !== null
            ? deserializeAws_json1_1IpAddrs(output.ConnectIps, context)
            : undefined,
        CustomerUserName: output.CustomerUserName !== undefined && output.CustomerUserName !== null ? output.CustomerUserName : undefined,
        SecurityGroupId: output.SecurityGroupId !== undefined && output.SecurityGroupId !== null ? output.SecurityGroupId : undefined,
        SubnetIds: output.SubnetIds !== undefined && output.SubnetIds !== null
            ? deserializeAws_json1_1SubnetIds(output.SubnetIds, context)
            : undefined,
        VpcId: output.VpcId !== undefined && output.VpcId !== null ? output.VpcId : undefined,
    };
};
const deserializeAws_json1_1DirectoryDescription = (output, context) => {
    return {
        AccessUrl: output.AccessUrl !== undefined && output.AccessUrl !== null ? output.AccessUrl : undefined,
        Alias: output.Alias !== undefined && output.Alias !== null ? output.Alias : undefined,
        ConnectSettings: output.ConnectSettings !== undefined && output.ConnectSettings !== null
            ? deserializeAws_json1_1DirectoryConnectSettingsDescription(output.ConnectSettings, context)
            : undefined,
        Description: output.Description !== undefined && output.Description !== null ? output.Description : undefined,
        DesiredNumberOfDomainControllers: output.DesiredNumberOfDomainControllers !== undefined && output.DesiredNumberOfDomainControllers !== null
            ? output.DesiredNumberOfDomainControllers
            : undefined,
        DirectoryId: output.DirectoryId !== undefined && output.DirectoryId !== null ? output.DirectoryId : undefined,
        DnsIpAddrs: output.DnsIpAddrs !== undefined && output.DnsIpAddrs !== null
            ? deserializeAws_json1_1DnsIpAddrs(output.DnsIpAddrs, context)
            : undefined,
        Edition: output.Edition !== undefined && output.Edition !== null ? output.Edition : undefined,
        LaunchTime: output.LaunchTime !== undefined && output.LaunchTime !== null
            ? new Date(Math.round(output.LaunchTime * 1000))
            : undefined,
        Name: output.Name !== undefined && output.Name !== null ? output.Name : undefined,
        OwnerDirectoryDescription: output.OwnerDirectoryDescription !== undefined && output.OwnerDirectoryDescription !== null
            ? deserializeAws_json1_1OwnerDirectoryDescription(output.OwnerDirectoryDescription, context)
            : undefined,
        RadiusSettings: output.RadiusSettings !== undefined && output.RadiusSettings !== null
            ? deserializeAws_json1_1RadiusSettings(output.RadiusSettings, context)
            : undefined,
        RadiusStatus: output.RadiusStatus !== undefined && output.RadiusStatus !== null ? output.RadiusStatus : undefined,
        RegionsInfo: output.RegionsInfo !== undefined && output.RegionsInfo !== null
            ? deserializeAws_json1_1RegionsInfo(output.RegionsInfo, context)
            : undefined,
        ShareMethod: output.ShareMethod !== undefined && output.ShareMethod !== null ? output.ShareMethod : undefined,
        ShareNotes: output.ShareNotes !== undefined && output.ShareNotes !== null ? output.ShareNotes : undefined,
        ShareStatus: output.ShareStatus !== undefined && output.ShareStatus !== null ? output.ShareStatus : undefined,
        ShortName: output.ShortName !== undefined && output.ShortName !== null ? output.ShortName : undefined,
        Size: output.Size !== undefined && output.Size !== null ? output.Size : undefined,
        SsoEnabled: output.SsoEnabled !== undefined && output.SsoEnabled !== null ? output.SsoEnabled : undefined,
        Stage: output.Stage !== undefined && output.Stage !== null ? output.Stage : undefined,
        StageLastUpdatedDateTime: output.StageLastUpdatedDateTime !== undefined && output.StageLastUpdatedDateTime !== null
            ? new Date(Math.round(output.StageLastUpdatedDateTime * 1000))
            : undefined,
        StageReason: output.StageReason !== undefined && output.StageReason !== null ? output.StageReason : undefined,
        Type: output.Type !== undefined && output.Type !== null ? output.Type : undefined,
        VpcSettings: output.VpcSettings !== undefined && output.VpcSettings !== null
            ? deserializeAws_json1_1DirectoryVpcSettingsDescription(output.VpcSettings, context)
            : undefined,
    };
};
const deserializeAws_json1_1DirectoryDescriptions = (output, context) => {
    return (output || [])
        .filter((e) => e != null)
        .map((entry) => {
        if (entry === null) {
            return null;
        }
        return deserializeAws_json1_1DirectoryDescription(entry, context);
    });
};
const deserializeAws_json1_1DirectoryDoesNotExistException = (output, context) => {
    return {
        Message: output.Message !== undefined && output.Message !== null ? output.Message : undefined,
        RequestId: output.RequestId !== undefined && output.RequestId !== null ? output.RequestId : undefined,
    };
};
const deserializeAws_json1_1DirectoryLimitExceededException = (output, context) => {
    return {
        Message: output.Message !== undefined && output.Message !== null ? output.Message : undefined,
        RequestId: output.RequestId !== undefined && output.RequestId !== null ? output.RequestId : undefined,
    };
};
const deserializeAws_json1_1DirectoryLimits = (output, context) => {
    return {
        CloudOnlyDirectoriesCurrentCount: output.CloudOnlyDirectoriesCurrentCount !== undefined && output.CloudOnlyDirectoriesCurrentCount !== null
            ? output.CloudOnlyDirectoriesCurrentCount
            : undefined,
        CloudOnlyDirectoriesLimit: output.CloudOnlyDirectoriesLimit !== undefined && output.CloudOnlyDirectoriesLimit !== null
            ? output.CloudOnlyDirectoriesLimit
            : undefined,
        CloudOnlyDirectoriesLimitReached: output.CloudOnlyDirectoriesLimitReached !== undefined && output.CloudOnlyDirectoriesLimitReached !== null
            ? output.CloudOnlyDirectoriesLimitReached
            : undefined,
        CloudOnlyMicrosoftADCurrentCount: output.CloudOnlyMicrosoftADCurrentCount !== undefined && output.CloudOnlyMicrosoftADCurrentCount !== null
            ? output.CloudOnlyMicrosoftADCurrentCount
            : undefined,
        CloudOnlyMicrosoftADLimit: output.CloudOnlyMicrosoftADLimit !== undefined && output.CloudOnlyMicrosoftADLimit !== null
            ? output.CloudOnlyMicrosoftADLimit
            : undefined,
        CloudOnlyMicrosoftADLimitReached: output.CloudOnlyMicrosoftADLimitReached !== undefined && output.CloudOnlyMicrosoftADLimitReached !== null
            ? output.CloudOnlyMicrosoftADLimitReached
            : undefined,
        ConnectedDirectoriesCurrentCount: output.ConnectedDirectoriesCurrentCount !== undefined && output.ConnectedDirectoriesCurrentCount !== null
            ? output.ConnectedDirectoriesCurrentCount
            : undefined,
        ConnectedDirectoriesLimit: output.ConnectedDirectoriesLimit !== undefined && output.ConnectedDirectoriesLimit !== null
            ? output.ConnectedDirectoriesLimit
            : undefined,
        ConnectedDirectoriesLimitReached: output.ConnectedDirectoriesLimitReached !== undefined && output.ConnectedDirectoriesLimitReached !== null
            ? output.ConnectedDirectoriesLimitReached
            : undefined,
    };
};
const deserializeAws_json1_1DirectoryNotSharedException = (output, context) => {
    return {
        Message: output.Message !== undefined && output.Message !== null ? output.Message : undefined,
        RequestId: output.RequestId !== undefined && output.RequestId !== null ? output.RequestId : undefined,
    };
};
const deserializeAws_json1_1DirectoryUnavailableException = (output, context) => {
    return {
        Message: output.Message !== undefined && output.Message !== null ? output.Message : undefined,
        RequestId: output.RequestId !== undefined && output.RequestId !== null ? output.RequestId : undefined,
    };
};
const deserializeAws_json1_1DirectoryVpcSettings = (output, context) => {
    return {
        SubnetIds: output.SubnetIds !== undefined && output.SubnetIds !== null
            ? deserializeAws_json1_1SubnetIds(output.SubnetIds, context)
            : undefined,
        VpcId: output.VpcId !== undefined && output.VpcId !== null ? output.VpcId : undefined,
    };
};
const deserializeAws_json1_1DirectoryVpcSettingsDescription = (output, context) => {
    return {
        AvailabilityZones: output.AvailabilityZones !== undefined && output.AvailabilityZones !== null
            ? deserializeAws_json1_1AvailabilityZones(output.AvailabilityZones, context)
            : undefined,
        SecurityGroupId: output.SecurityGroupId !== undefined && output.SecurityGroupId !== null ? output.SecurityGroupId : undefined,
        SubnetIds: output.SubnetIds !== undefined && output.SubnetIds !== null
            ? deserializeAws_json1_1SubnetIds(output.SubnetIds, context)
            : undefined,
        VpcId: output.VpcId !== undefined && output.VpcId !== null ? output.VpcId : undefined,
    };
};
const deserializeAws_json1_1DisableClientAuthenticationResult = (output, context) => {
    return {};
};
const deserializeAws_json1_1DisableLDAPSResult = (output, context) => {
    return {};
};
const deserializeAws_json1_1DisableRadiusResult = (output, context) => {
    return {};
};
const deserializeAws_json1_1DisableSsoResult = (output, context) => {
    return {};
};
const deserializeAws_json1_1DnsIpAddrs = (output, context) => {
    return (output || [])
        .filter((e) => e != null)
        .map((entry) => {
        if (entry === null) {
            return null;
        }
        return entry;
    });
};
const deserializeAws_json1_1DomainController = (output, context) => {
    return {
        AvailabilityZone: output.AvailabilityZone !== undefined && output.AvailabilityZone !== null ? output.AvailabilityZone : undefined,
        DirectoryId: output.DirectoryId !== undefined && output.DirectoryId !== null ? output.DirectoryId : undefined,
        DnsIpAddr: output.DnsIpAddr !== undefined && output.DnsIpAddr !== null ? output.DnsIpAddr : undefined,
        DomainControllerId: output.DomainControllerId !== undefined && output.DomainControllerId !== null
            ? output.DomainControllerId
            : undefined,
        LaunchTime: output.LaunchTime !== undefined && output.LaunchTime !== null
            ? new Date(Math.round(output.LaunchTime * 1000))
            : undefined,
        Status: output.Status !== undefined && output.Status !== null ? output.Status : undefined,
        StatusLastUpdatedDateTime: output.StatusLastUpdatedDateTime !== undefined && output.StatusLastUpdatedDateTime !== null
            ? new Date(Math.round(output.StatusLastUpdatedDateTime * 1000))
            : undefined,
        StatusReason: output.StatusReason !== undefined && output.StatusReason !== null ? output.StatusReason : undefined,
        SubnetId: output.SubnetId !== undefined && output.SubnetId !== null ? output.SubnetId : undefined,
        VpcId: output.VpcId !== undefined && output.VpcId !== null ? output.VpcId : undefined,
    };
};
const deserializeAws_json1_1DomainControllerLimitExceededException = (output, context) => {
    return {
        Message: output.Message !== undefined && output.Message !== null ? output.Message : undefined,
        RequestId: output.RequestId !== undefined && output.RequestId !== null ? output.RequestId : undefined,
    };
};
const deserializeAws_json1_1DomainControllers = (output, context) => {
    return (output || [])
        .filter((e) => e != null)
        .map((entry) => {
        if (entry === null) {
            return null;
        }
        return deserializeAws_json1_1DomainController(entry, context);
    });
};
const deserializeAws_json1_1EnableClientAuthenticationResult = (output, context) => {
    return {};
};
const deserializeAws_json1_1EnableLDAPSResult = (output, context) => {
    return {};
};
const deserializeAws_json1_1EnableRadiusResult = (output, context) => {
    return {};
};
const deserializeAws_json1_1EnableSsoResult = (output, context) => {
    return {};
};
const deserializeAws_json1_1EntityAlreadyExistsException = (output, context) => {
    return {
        Message: output.Message !== undefined && output.Message !== null ? output.Message : undefined,
        RequestId: output.RequestId !== undefined && output.RequestId !== null ? output.RequestId : undefined,
    };
};
const deserializeAws_json1_1EntityDoesNotExistException = (output, context) => {
    return {
        Message: output.Message !== undefined && output.Message !== null ? output.Message : undefined,
        RequestId: output.RequestId !== undefined && output.RequestId !== null ? output.RequestId : undefined,
    };
};
const deserializeAws_json1_1EventTopic = (output, context) => {
    return {
        CreatedDateTime: output.CreatedDateTime !== undefined && output.CreatedDateTime !== null
            ? new Date(Math.round(output.CreatedDateTime * 1000))
            : undefined,
        DirectoryId: output.DirectoryId !== undefined && output.DirectoryId !== null ? output.DirectoryId : undefined,
        Status: output.Status !== undefined && output.Status !== null ? output.Status : undefined,
        TopicArn: output.TopicArn !== undefined && output.TopicArn !== null ? output.TopicArn : undefined,
        TopicName: output.TopicName !== undefined && output.TopicName !== null ? output.TopicName : undefined,
    };
};
const deserializeAws_json1_1EventTopics = (output, context) => {
    return (output || [])
        .filter((e) => e != null)
        .map((entry) => {
        if (entry === null) {
            return null;
        }
        return deserializeAws_json1_1EventTopic(entry, context);
    });
};
const deserializeAws_json1_1GetDirectoryLimitsResult = (output, context) => {
    return {
        DirectoryLimits: output.DirectoryLimits !== undefined && output.DirectoryLimits !== null
            ? deserializeAws_json1_1DirectoryLimits(output.DirectoryLimits, context)
            : undefined,
    };
};
const deserializeAws_json1_1GetSnapshotLimitsResult = (output, context) => {
    return {
        SnapshotLimits: output.SnapshotLimits !== undefined && output.SnapshotLimits !== null
            ? deserializeAws_json1_1SnapshotLimits(output.SnapshotLimits, context)
            : undefined,
    };
};
const deserializeAws_json1_1InsufficientPermissionsException = (output, context) => {
    return {
        Message: output.Message !== undefined && output.Message !== null ? output.Message : undefined,
        RequestId: output.RequestId !== undefined && output.RequestId !== null ? output.RequestId : undefined,
    };
};
const deserializeAws_json1_1InvalidCertificateException = (output, context) => {
    return {
        Message: output.Message !== undefined && output.Message !== null ? output.Message : undefined,
        RequestId: output.RequestId !== undefined && output.RequestId !== null ? output.RequestId : undefined,
    };
};
const deserializeAws_json1_1InvalidClientAuthStatusException = (output, context) => {
    return {
        Message: output.Message !== undefined && output.Message !== null ? output.Message : undefined,
        RequestId: output.RequestId !== undefined && output.RequestId !== null ? output.RequestId : undefined,
    };
};
const deserializeAws_json1_1InvalidLDAPSStatusException = (output, context) => {
    return {
        Message: output.Message !== undefined && output.Message !== null ? output.Message : undefined,
        RequestId: output.RequestId !== undefined && output.RequestId !== null ? output.RequestId : undefined,
    };
};
const deserializeAws_json1_1InvalidNextTokenException = (output, context) => {
    return {
        Message: output.Message !== undefined && output.Message !== null ? output.Message : undefined,
        RequestId: output.RequestId !== undefined && output.RequestId !== null ? output.RequestId : undefined,
    };
};
const deserializeAws_json1_1InvalidParameterException = (output, context) => {
    return {
        Message: output.Message !== undefined && output.Message !== null ? output.Message : undefined,
        RequestId: output.RequestId !== undefined && output.RequestId !== null ? output.RequestId : undefined,
    };
};
const deserializeAws_json1_1InvalidPasswordException = (output, context) => {
    return {
        Message: output.Message !== undefined && output.Message !== null ? output.Message : undefined,
        RequestId: output.RequestId !== undefined && output.RequestId !== null ? output.RequestId : undefined,
    };
};
const deserializeAws_json1_1InvalidTargetException = (output, context) => {
    return {
        Message: output.Message !== undefined && output.Message !== null ? output.Message : undefined,
        RequestId: output.RequestId !== undefined && output.RequestId !== null ? output.RequestId : undefined,
    };
};
const deserializeAws_json1_1IpAddrs = (output, context) => {
    return (output || [])
        .filter((e) => e != null)
        .map((entry) => {
        if (entry === null) {
            return null;
        }
        return entry;
    });
};
const deserializeAws_json1_1IpRouteInfo = (output, context) => {
    return {
        AddedDateTime: output.AddedDateTime !== undefined && output.AddedDateTime !== null
            ? new Date(Math.round(output.AddedDateTime * 1000))
            : undefined,
        CidrIp: output.CidrIp !== undefined && output.CidrIp !== null ? output.CidrIp : undefined,
        Description: output.Description !== undefined && output.Description !== null ? output.Description : undefined,
        DirectoryId: output.DirectoryId !== undefined && output.DirectoryId !== null ? output.DirectoryId : undefined,
        IpRouteStatusMsg: output.IpRouteStatusMsg !== undefined && output.IpRouteStatusMsg !== null ? output.IpRouteStatusMsg : undefined,
        IpRouteStatusReason: output.IpRouteStatusReason !== undefined && output.IpRouteStatusReason !== null
            ? output.IpRouteStatusReason
            : undefined,
    };
};
const deserializeAws_json1_1IpRouteLimitExceededException = (output, context) => {
    return {
        Message: output.Message !== undefined && output.Message !== null ? output.Message : undefined,
        RequestId: output.RequestId !== undefined && output.RequestId !== null ? output.RequestId : undefined,
    };
};
const deserializeAws_json1_1IpRoutesInfo = (output, context) => {
    return (output || [])
        .filter((e) => e != null)
        .map((entry) => {
        if (entry === null) {
            return null;
        }
        return deserializeAws_json1_1IpRouteInfo(entry, context);
    });
};
const deserializeAws_json1_1LDAPSSettingInfo = (output, context) => {
    return {
        LDAPSStatus: output.LDAPSStatus !== undefined && output.LDAPSStatus !== null ? output.LDAPSStatus : undefined,
        LDAPSStatusReason: output.LDAPSStatusReason !== undefined && output.LDAPSStatusReason !== null
            ? output.LDAPSStatusReason
            : undefined,
        LastUpdatedDateTime: output.LastUpdatedDateTime !== undefined && output.LastUpdatedDateTime !== null
            ? new Date(Math.round(output.LastUpdatedDateTime * 1000))
            : undefined,
    };
};
const deserializeAws_json1_1LDAPSSettingsInfo = (output, context) => {
    return (output || [])
        .filter((e) => e != null)
        .map((entry) => {
        if (entry === null) {
            return null;
        }
        return deserializeAws_json1_1LDAPSSettingInfo(entry, context);
    });
};
const deserializeAws_json1_1ListCertificatesResult = (output, context) => {
    return {
        CertificatesInfo: output.CertificatesInfo !== undefined && output.CertificatesInfo !== null
            ? deserializeAws_json1_1CertificatesInfo(output.CertificatesInfo, context)
            : undefined,
        NextToken: output.NextToken !== undefined && output.NextToken !== null ? output.NextToken : undefined,
    };
};
const deserializeAws_json1_1ListIpRoutesResult = (output, context) => {
    return {
        IpRoutesInfo: output.IpRoutesInfo !== undefined && output.IpRoutesInfo !== null
            ? deserializeAws_json1_1IpRoutesInfo(output.IpRoutesInfo, context)
            : undefined,
        NextToken: output.NextToken !== undefined && output.NextToken !== null ? output.NextToken : undefined,
    };
};
const deserializeAws_json1_1ListLogSubscriptionsResult = (output, context) => {
    return {
        LogSubscriptions: output.LogSubscriptions !== undefined && output.LogSubscriptions !== null
            ? deserializeAws_json1_1LogSubscriptions(output.LogSubscriptions, context)
            : undefined,
        NextToken: output.NextToken !== undefined && output.NextToken !== null ? output.NextToken : undefined,
    };
};
const deserializeAws_json1_1ListSchemaExtensionsResult = (output, context) => {
    return {
        NextToken: output.NextToken !== undefined && output.NextToken !== null ? output.NextToken : undefined,
        SchemaExtensionsInfo: output.SchemaExtensionsInfo !== undefined && output.SchemaExtensionsInfo !== null
            ? deserializeAws_json1_1SchemaExtensionsInfo(output.SchemaExtensionsInfo, context)
            : undefined,
    };
};
const deserializeAws_json1_1ListTagsForResourceResult = (output, context) => {
    return {
        NextToken: output.NextToken !== undefined && output.NextToken !== null ? output.NextToken : undefined,
        Tags: output.Tags !== undefined && output.Tags !== null ? deserializeAws_json1_1Tags(output.Tags, context) : undefined,
    };
};
const deserializeAws_json1_1LogSubscription = (output, context) => {
    return {
        DirectoryId: output.DirectoryId !== undefined && output.DirectoryId !== null ? output.DirectoryId : undefined,
        LogGroupName: output.LogGroupName !== undefined && output.LogGroupName !== null ? output.LogGroupName : undefined,
        SubscriptionCreatedDateTime: output.SubscriptionCreatedDateTime !== undefined && output.SubscriptionCreatedDateTime !== null
            ? new Date(Math.round(output.SubscriptionCreatedDateTime * 1000))
            : undefined,
    };
};
const deserializeAws_json1_1LogSubscriptions = (output, context) => {
    return (output || [])
        .filter((e) => e != null)
        .map((entry) => {
        if (entry === null) {
            return null;
        }
        return deserializeAws_json1_1LogSubscription(entry, context);
    });
};
const deserializeAws_json1_1NoAvailableCertificateException = (output, context) => {
    return {
        Message: output.Message !== undefined && output.Message !== null ? output.Message : undefined,
        RequestId: output.RequestId !== undefined && output.RequestId !== null ? output.RequestId : undefined,
    };
};
const deserializeAws_json1_1OrganizationsException = (output, context) => {
    return {
        Message: output.Message !== undefined && output.Message !== null ? output.Message : undefined,
        RequestId: output.RequestId !== undefined && output.RequestId !== null ? output.RequestId : undefined,
    };
};
const deserializeAws_json1_1OwnerDirectoryDescription = (output, context) => {
    return {
        AccountId: output.AccountId !== undefined && output.AccountId !== null ? output.AccountId : undefined,
        DirectoryId: output.DirectoryId !== undefined && output.DirectoryId !== null ? output.DirectoryId : undefined,
        DnsIpAddrs: output.DnsIpAddrs !== undefined && output.DnsIpAddrs !== null
            ? deserializeAws_json1_1DnsIpAddrs(output.DnsIpAddrs, context)
            : undefined,
        RadiusSettings: output.RadiusSettings !== undefined && output.RadiusSettings !== null
            ? deserializeAws_json1_1RadiusSettings(output.RadiusSettings, context)
            : undefined,
        RadiusStatus: output.RadiusStatus !== undefined && output.RadiusStatus !== null ? output.RadiusStatus : undefined,
        VpcSettings: output.VpcSettings !== undefined && output.VpcSettings !== null
            ? deserializeAws_json1_1DirectoryVpcSettingsDescription(output.VpcSettings, context)
            : undefined,
    };
};
const deserializeAws_json1_1RadiusSettings = (output, context) => {
    return {
        AuthenticationProtocol: output.AuthenticationProtocol !== undefined && output.AuthenticationProtocol !== null
            ? output.AuthenticationProtocol
            : undefined,
        DisplayLabel: output.DisplayLabel !== undefined && output.DisplayLabel !== null ? output.DisplayLabel : undefined,
        RadiusPort: output.RadiusPort !== undefined && output.RadiusPort !== null ? output.RadiusPort : undefined,
        RadiusRetries: output.RadiusRetries !== undefined && output.RadiusRetries !== null ? output.RadiusRetries : undefined,
        RadiusServers: output.RadiusServers !== undefined && output.RadiusServers !== null
            ? deserializeAws_json1_1Servers(output.RadiusServers, context)
            : undefined,
        RadiusTimeout: output.RadiusTimeout !== undefined && output.RadiusTimeout !== null ? output.RadiusTimeout : undefined,
        SharedSecret: output.SharedSecret !== undefined && output.SharedSecret !== null ? output.SharedSecret : undefined,
        UseSameUsername: output.UseSameUsername !== undefined && output.UseSameUsername !== null ? output.UseSameUsername : undefined,
    };
};
const deserializeAws_json1_1RegionDescription = (output, context) => {
    return {
        DesiredNumberOfDomainControllers: output.DesiredNumberOfDomainControllers !== undefined && output.DesiredNumberOfDomainControllers !== null
            ? output.DesiredNumberOfDomainControllers
            : undefined,
        DirectoryId: output.DirectoryId !== undefined && output.DirectoryId !== null ? output.DirectoryId : undefined,
        LastUpdatedDateTime: output.LastUpdatedDateTime !== undefined && output.LastUpdatedDateTime !== null
            ? new Date(Math.round(output.LastUpdatedDateTime * 1000))
            : undefined,
        LaunchTime: output.LaunchTime !== undefined && output.LaunchTime !== null
            ? new Date(Math.round(output.LaunchTime * 1000))
            : undefined,
        RegionName: output.RegionName !== undefined && output.RegionName !== null ? output.RegionName : undefined,
        RegionType: output.RegionType !== undefined && output.RegionType !== null ? output.RegionType : undefined,
        Status: output.Status !== undefined && output.Status !== null ? output.Status : undefined,
        StatusLastUpdatedDateTime: output.StatusLastUpdatedDateTime !== undefined && output.StatusLastUpdatedDateTime !== null
            ? new Date(Math.round(output.StatusLastUpdatedDateTime * 1000))
            : undefined,
        VpcSettings: output.VpcSettings !== undefined && output.VpcSettings !== null
            ? deserializeAws_json1_1DirectoryVpcSettings(output.VpcSettings, context)
            : undefined,
    };
};
const deserializeAws_json1_1RegionLimitExceededException = (output, context) => {
    return {
        Message: output.Message !== undefined && output.Message !== null ? output.Message : undefined,
        RequestId: output.RequestId !== undefined && output.RequestId !== null ? output.RequestId : undefined,
    };
};
const deserializeAws_json1_1RegionsDescription = (output, context) => {
    return (output || [])
        .filter((e) => e != null)
        .map((entry) => {
        if (entry === null) {
            return null;
        }
        return deserializeAws_json1_1RegionDescription(entry, context);
    });
};
const deserializeAws_json1_1RegionsInfo = (output, context) => {
    return {
        AdditionalRegions: output.AdditionalRegions !== undefined && output.AdditionalRegions !== null
            ? deserializeAws_json1_1AdditionalRegions(output.AdditionalRegions, context)
            : undefined,
        PrimaryRegion: output.PrimaryRegion !== undefined && output.PrimaryRegion !== null ? output.PrimaryRegion : undefined,
    };
};
const deserializeAws_json1_1RegisterCertificateResult = (output, context) => {
    return {
        CertificateId: output.CertificateId !== undefined && output.CertificateId !== null ? output.CertificateId : undefined,
    };
};
const deserializeAws_json1_1RegisterEventTopicResult = (output, context) => {
    return {};
};
const deserializeAws_json1_1RejectSharedDirectoryResult = (output, context) => {
    return {
        SharedDirectoryId: output.SharedDirectoryId !== undefined && output.SharedDirectoryId !== null
            ? output.SharedDirectoryId
            : undefined,
    };
};
const deserializeAws_json1_1RemoveIpRoutesResult = (output, context) => {
    return {};
};
const deserializeAws_json1_1RemoveRegionResult = (output, context) => {
    return {};
};
const deserializeAws_json1_1RemoveTagsFromResourceResult = (output, context) => {
    return {};
};
const deserializeAws_json1_1ResetUserPasswordResult = (output, context) => {
    return {};
};
const deserializeAws_json1_1RestoreFromSnapshotResult = (output, context) => {
    return {};
};
const deserializeAws_json1_1SchemaExtensionInfo = (output, context) => {
    return {
        Description: output.Description !== undefined && output.Description !== null ? output.Description : undefined,
        DirectoryId: output.DirectoryId !== undefined && output.DirectoryId !== null ? output.DirectoryId : undefined,
        EndDateTime: output.EndDateTime !== undefined && output.EndDateTime !== null
            ? new Date(Math.round(output.EndDateTime * 1000))
            : undefined,
        SchemaExtensionId: output.SchemaExtensionId !== undefined && output.SchemaExtensionId !== null
            ? output.SchemaExtensionId
            : undefined,
        SchemaExtensionStatus: output.SchemaExtensionStatus !== undefined && output.SchemaExtensionStatus !== null
            ? output.SchemaExtensionStatus
            : undefined,
        SchemaExtensionStatusReason: output.SchemaExtensionStatusReason !== undefined && output.SchemaExtensionStatusReason !== null
            ? output.SchemaExtensionStatusReason
            : undefined,
        StartDateTime: output.StartDateTime !== undefined && output.StartDateTime !== null
            ? new Date(Math.round(output.StartDateTime * 1000))
            : undefined,
    };
};
const deserializeAws_json1_1SchemaExtensionsInfo = (output, context) => {
    return (output || [])
        .filter((e) => e != null)
        .map((entry) => {
        if (entry === null) {
            return null;
        }
        return deserializeAws_json1_1SchemaExtensionInfo(entry, context);
    });
};
const deserializeAws_json1_1Servers = (output, context) => {
    return (output || [])
        .filter((e) => e != null)
        .map((entry) => {
        if (entry === null) {
            return null;
        }
        return entry;
    });
};
const deserializeAws_json1_1ServiceException = (output, context) => {
    return {
        Message: output.Message !== undefined && output.Message !== null ? output.Message : undefined,
        RequestId: output.RequestId !== undefined && output.RequestId !== null ? output.RequestId : undefined,
    };
};
const deserializeAws_json1_1SharedDirectories = (output, context) => {
    return (output || [])
        .filter((e) => e != null)
        .map((entry) => {
        if (entry === null) {
            return null;
        }
        return deserializeAws_json1_1SharedDirectory(entry, context);
    });
};
const deserializeAws_json1_1SharedDirectory = (output, context) => {
    return {
        CreatedDateTime: output.CreatedDateTime !== undefined && output.CreatedDateTime !== null
            ? new Date(Math.round(output.CreatedDateTime * 1000))
            : undefined,
        LastUpdatedDateTime: output.LastUpdatedDateTime !== undefined && output.LastUpdatedDateTime !== null
            ? new Date(Math.round(output.LastUpdatedDateTime * 1000))
            : undefined,
        OwnerAccountId: output.OwnerAccountId !== undefined && output.OwnerAccountId !== null ? output.OwnerAccountId : undefined,
        OwnerDirectoryId: output.OwnerDirectoryId !== undefined && output.OwnerDirectoryId !== null ? output.OwnerDirectoryId : undefined,
        ShareMethod: output.ShareMethod !== undefined && output.ShareMethod !== null ? output.ShareMethod : undefined,
        ShareNotes: output.ShareNotes !== undefined && output.ShareNotes !== null ? output.ShareNotes : undefined,
        ShareStatus: output.ShareStatus !== undefined && output.ShareStatus !== null ? output.ShareStatus : undefined,
        SharedAccountId: output.SharedAccountId !== undefined && output.SharedAccountId !== null ? output.SharedAccountId : undefined,
        SharedDirectoryId: output.SharedDirectoryId !== undefined && output.SharedDirectoryId !== null
            ? output.SharedDirectoryId
            : undefined,
    };
};
const deserializeAws_json1_1ShareDirectoryResult = (output, context) => {
    return {
        SharedDirectoryId: output.SharedDirectoryId !== undefined && output.SharedDirectoryId !== null
            ? output.SharedDirectoryId
            : undefined,
    };
};
const deserializeAws_json1_1ShareLimitExceededException = (output, context) => {
    return {
        Message: output.Message !== undefined && output.Message !== null ? output.Message : undefined,
        RequestId: output.RequestId !== undefined && output.RequestId !== null ? output.RequestId : undefined,
    };
};
const deserializeAws_json1_1Snapshot = (output, context) => {
    return {
        DirectoryId: output.DirectoryId !== undefined && output.DirectoryId !== null ? output.DirectoryId : undefined,
        Name: output.Name !== undefined && output.Name !== null ? output.Name : undefined,
        SnapshotId: output.SnapshotId !== undefined && output.SnapshotId !== null ? output.SnapshotId : undefined,
        StartTime: output.StartTime !== undefined && output.StartTime !== null
            ? new Date(Math.round(output.StartTime * 1000))
            : undefined,
        Status: output.Status !== undefined && output.Status !== null ? output.Status : undefined,
        Type: output.Type !== undefined && output.Type !== null ? output.Type : undefined,
    };
};
const deserializeAws_json1_1SnapshotLimitExceededException = (output, context) => {
    return {
        Message: output.Message !== undefined && output.Message !== null ? output.Message : undefined,
        RequestId: output.RequestId !== undefined && output.RequestId !== null ? output.RequestId : undefined,
    };
};
const deserializeAws_json1_1SnapshotLimits = (output, context) => {
    return {
        ManualSnapshotsCurrentCount: output.ManualSnapshotsCurrentCount !== undefined && output.ManualSnapshotsCurrentCount !== null
            ? output.ManualSnapshotsCurrentCount
            : undefined,
        ManualSnapshotsLimit: output.ManualSnapshotsLimit !== undefined && output.ManualSnapshotsLimit !== null
            ? output.ManualSnapshotsLimit
            : undefined,
        ManualSnapshotsLimitReached: output.ManualSnapshotsLimitReached !== undefined && output.ManualSnapshotsLimitReached !== null
            ? output.ManualSnapshotsLimitReached
            : undefined,
    };
};
const deserializeAws_json1_1Snapshots = (output, context) => {
    return (output || [])
        .filter((e) => e != null)
        .map((entry) => {
        if (entry === null) {
            return null;
        }
        return deserializeAws_json1_1Snapshot(entry, context);
    });
};
const deserializeAws_json1_1StartSchemaExtensionResult = (output, context) => {
    return {
        SchemaExtensionId: output.SchemaExtensionId !== undefined && output.SchemaExtensionId !== null
            ? output.SchemaExtensionId
            : undefined,
    };
};
const deserializeAws_json1_1SubnetIds = (output, context) => {
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
const deserializeAws_json1_1TagLimitExceededException = (output, context) => {
    return {
        Message: output.Message !== undefined && output.Message !== null ? output.Message : undefined,
        RequestId: output.RequestId !== undefined && output.RequestId !== null ? output.RequestId : undefined,
    };
};
const deserializeAws_json1_1Tags = (output, context) => {
    return (output || [])
        .filter((e) => e != null)
        .map((entry) => {
        if (entry === null) {
            return null;
        }
        return deserializeAws_json1_1Tag(entry, context);
    });
};
const deserializeAws_json1_1Trust = (output, context) => {
    return {
        CreatedDateTime: output.CreatedDateTime !== undefined && output.CreatedDateTime !== null
            ? new Date(Math.round(output.CreatedDateTime * 1000))
            : undefined,
        DirectoryId: output.DirectoryId !== undefined && output.DirectoryId !== null ? output.DirectoryId : undefined,
        LastUpdatedDateTime: output.LastUpdatedDateTime !== undefined && output.LastUpdatedDateTime !== null
            ? new Date(Math.round(output.LastUpdatedDateTime * 1000))
            : undefined,
        RemoteDomainName: output.RemoteDomainName !== undefined && output.RemoteDomainName !== null ? output.RemoteDomainName : undefined,
        SelectiveAuth: output.SelectiveAuth !== undefined && output.SelectiveAuth !== null ? output.SelectiveAuth : undefined,
        StateLastUpdatedDateTime: output.StateLastUpdatedDateTime !== undefined && output.StateLastUpdatedDateTime !== null
            ? new Date(Math.round(output.StateLastUpdatedDateTime * 1000))
            : undefined,
        TrustDirection: output.TrustDirection !== undefined && output.TrustDirection !== null ? output.TrustDirection : undefined,
        TrustId: output.TrustId !== undefined && output.TrustId !== null ? output.TrustId : undefined,
        TrustState: output.TrustState !== undefined && output.TrustState !== null ? output.TrustState : undefined,
        TrustStateReason: output.TrustStateReason !== undefined && output.TrustStateReason !== null ? output.TrustStateReason : undefined,
        TrustType: output.TrustType !== undefined && output.TrustType !== null ? output.TrustType : undefined,
    };
};
const deserializeAws_json1_1Trusts = (output, context) => {
    return (output || [])
        .filter((e) => e != null)
        .map((entry) => {
        if (entry === null) {
            return null;
        }
        return deserializeAws_json1_1Trust(entry, context);
    });
};
const deserializeAws_json1_1UnshareDirectoryResult = (output, context) => {
    return {
        SharedDirectoryId: output.SharedDirectoryId !== undefined && output.SharedDirectoryId !== null
            ? output.SharedDirectoryId
            : undefined,
    };
};
const deserializeAws_json1_1UnsupportedOperationException = (output, context) => {
    return {
        Message: output.Message !== undefined && output.Message !== null ? output.Message : undefined,
        RequestId: output.RequestId !== undefined && output.RequestId !== null ? output.RequestId : undefined,
    };
};
const deserializeAws_json1_1UpdateConditionalForwarderResult = (output, context) => {
    return {};
};
const deserializeAws_json1_1UpdateNumberOfDomainControllersResult = (output, context) => {
    return {};
};
const deserializeAws_json1_1UpdateRadiusResult = (output, context) => {
    return {};
};
const deserializeAws_json1_1UpdateTrustResult = (output, context) => {
    return {
        RequestId: output.RequestId !== undefined && output.RequestId !== null ? output.RequestId : undefined,
        TrustId: output.TrustId !== undefined && output.TrustId !== null ? output.TrustId : undefined,
    };
};
const deserializeAws_json1_1UserDoesNotExistException = (output, context) => {
    return {
        Message: output.Message !== undefined && output.Message !== null ? output.Message : undefined,
        RequestId: output.RequestId !== undefined && output.RequestId !== null ? output.RequestId : undefined,
    };
};
const deserializeAws_json1_1VerifyTrustResult = (output, context) => {
    return {
        TrustId: output.TrustId !== undefined && output.TrustId !== null ? output.TrustId : undefined,
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