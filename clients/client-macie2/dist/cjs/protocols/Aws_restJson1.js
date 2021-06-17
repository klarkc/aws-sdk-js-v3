"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.serializeAws_restJson1TestCustomDataIdentifierCommand = exports.serializeAws_restJson1TagResourceCommand = exports.serializeAws_restJson1SearchResourcesCommand = exports.serializeAws_restJson1PutFindingsPublicationConfigurationCommand = exports.serializeAws_restJson1PutClassificationExportConfigurationCommand = exports.serializeAws_restJson1ListTagsForResourceCommand = exports.serializeAws_restJson1ListOrganizationAdminAccountsCommand = exports.serializeAws_restJson1ListMembersCommand = exports.serializeAws_restJson1ListInvitationsCommand = exports.serializeAws_restJson1ListFindingsFiltersCommand = exports.serializeAws_restJson1ListFindingsCommand = exports.serializeAws_restJson1ListCustomDataIdentifiersCommand = exports.serializeAws_restJson1ListClassificationJobsCommand = exports.serializeAws_restJson1GetUsageTotalsCommand = exports.serializeAws_restJson1GetUsageStatisticsCommand = exports.serializeAws_restJson1GetMemberCommand = exports.serializeAws_restJson1GetMasterAccountCommand = exports.serializeAws_restJson1GetMacieSessionCommand = exports.serializeAws_restJson1GetInvitationsCountCommand = exports.serializeAws_restJson1GetFindingStatisticsCommand = exports.serializeAws_restJson1GetFindingsPublicationConfigurationCommand = exports.serializeAws_restJson1GetFindingsFilterCommand = exports.serializeAws_restJson1GetFindingsCommand = exports.serializeAws_restJson1GetCustomDataIdentifierCommand = exports.serializeAws_restJson1GetClassificationExportConfigurationCommand = exports.serializeAws_restJson1GetBucketStatisticsCommand = exports.serializeAws_restJson1GetAdministratorAccountCommand = exports.serializeAws_restJson1EnableOrganizationAdminAccountCommand = exports.serializeAws_restJson1EnableMacieCommand = exports.serializeAws_restJson1DisassociateMemberCommand = exports.serializeAws_restJson1DisassociateFromMasterAccountCommand = exports.serializeAws_restJson1DisassociateFromAdministratorAccountCommand = exports.serializeAws_restJson1DisableOrganizationAdminAccountCommand = exports.serializeAws_restJson1DisableMacieCommand = exports.serializeAws_restJson1DescribeOrganizationConfigurationCommand = exports.serializeAws_restJson1DescribeClassificationJobCommand = exports.serializeAws_restJson1DescribeBucketsCommand = exports.serializeAws_restJson1DeleteMemberCommand = exports.serializeAws_restJson1DeleteInvitationsCommand = exports.serializeAws_restJson1DeleteFindingsFilterCommand = exports.serializeAws_restJson1DeleteCustomDataIdentifierCommand = exports.serializeAws_restJson1DeclineInvitationsCommand = exports.serializeAws_restJson1CreateSampleFindingsCommand = exports.serializeAws_restJson1CreateMemberCommand = exports.serializeAws_restJson1CreateInvitationsCommand = exports.serializeAws_restJson1CreateFindingsFilterCommand = exports.serializeAws_restJson1CreateCustomDataIdentifierCommand = exports.serializeAws_restJson1CreateClassificationJobCommand = exports.serializeAws_restJson1BatchGetCustomDataIdentifiersCommand = exports.serializeAws_restJson1AcceptInvitationCommand = void 0;
exports.deserializeAws_restJson1ListOrganizationAdminAccountsCommand = exports.deserializeAws_restJson1ListMembersCommand = exports.deserializeAws_restJson1ListInvitationsCommand = exports.deserializeAws_restJson1ListFindingsFiltersCommand = exports.deserializeAws_restJson1ListFindingsCommand = exports.deserializeAws_restJson1ListCustomDataIdentifiersCommand = exports.deserializeAws_restJson1ListClassificationJobsCommand = exports.deserializeAws_restJson1GetUsageTotalsCommand = exports.deserializeAws_restJson1GetUsageStatisticsCommand = exports.deserializeAws_restJson1GetMemberCommand = exports.deserializeAws_restJson1GetMasterAccountCommand = exports.deserializeAws_restJson1GetMacieSessionCommand = exports.deserializeAws_restJson1GetInvitationsCountCommand = exports.deserializeAws_restJson1GetFindingStatisticsCommand = exports.deserializeAws_restJson1GetFindingsPublicationConfigurationCommand = exports.deserializeAws_restJson1GetFindingsFilterCommand = exports.deserializeAws_restJson1GetFindingsCommand = exports.deserializeAws_restJson1GetCustomDataIdentifierCommand = exports.deserializeAws_restJson1GetClassificationExportConfigurationCommand = exports.deserializeAws_restJson1GetBucketStatisticsCommand = exports.deserializeAws_restJson1GetAdministratorAccountCommand = exports.deserializeAws_restJson1EnableOrganizationAdminAccountCommand = exports.deserializeAws_restJson1EnableMacieCommand = exports.deserializeAws_restJson1DisassociateMemberCommand = exports.deserializeAws_restJson1DisassociateFromMasterAccountCommand = exports.deserializeAws_restJson1DisassociateFromAdministratorAccountCommand = exports.deserializeAws_restJson1DisableOrganizationAdminAccountCommand = exports.deserializeAws_restJson1DisableMacieCommand = exports.deserializeAws_restJson1DescribeOrganizationConfigurationCommand = exports.deserializeAws_restJson1DescribeClassificationJobCommand = exports.deserializeAws_restJson1DescribeBucketsCommand = exports.deserializeAws_restJson1DeleteMemberCommand = exports.deserializeAws_restJson1DeleteInvitationsCommand = exports.deserializeAws_restJson1DeleteFindingsFilterCommand = exports.deserializeAws_restJson1DeleteCustomDataIdentifierCommand = exports.deserializeAws_restJson1DeclineInvitationsCommand = exports.deserializeAws_restJson1CreateSampleFindingsCommand = exports.deserializeAws_restJson1CreateMemberCommand = exports.deserializeAws_restJson1CreateInvitationsCommand = exports.deserializeAws_restJson1CreateFindingsFilterCommand = exports.deserializeAws_restJson1CreateCustomDataIdentifierCommand = exports.deserializeAws_restJson1CreateClassificationJobCommand = exports.deserializeAws_restJson1BatchGetCustomDataIdentifiersCommand = exports.deserializeAws_restJson1AcceptInvitationCommand = exports.serializeAws_restJson1UpdateOrganizationConfigurationCommand = exports.serializeAws_restJson1UpdateMemberSessionCommand = exports.serializeAws_restJson1UpdateMacieSessionCommand = exports.serializeAws_restJson1UpdateFindingsFilterCommand = exports.serializeAws_restJson1UpdateClassificationJobCommand = exports.serializeAws_restJson1UntagResourceCommand = void 0;
exports.deserializeAws_restJson1UpdateOrganizationConfigurationCommand = exports.deserializeAws_restJson1UpdateMemberSessionCommand = exports.deserializeAws_restJson1UpdateMacieSessionCommand = exports.deserializeAws_restJson1UpdateFindingsFilterCommand = exports.deserializeAws_restJson1UpdateClassificationJobCommand = exports.deserializeAws_restJson1UntagResourceCommand = exports.deserializeAws_restJson1TestCustomDataIdentifierCommand = exports.deserializeAws_restJson1TagResourceCommand = exports.deserializeAws_restJson1SearchResourcesCommand = exports.deserializeAws_restJson1PutFindingsPublicationConfigurationCommand = exports.deserializeAws_restJson1PutClassificationExportConfigurationCommand = exports.deserializeAws_restJson1ListTagsForResourceCommand = void 0;
const protocol_http_1 = require("@aws-sdk/protocol-http");
const smithy_client_1 = require("@aws-sdk/smithy-client");
const uuid_1 = require("uuid");
const serializeAws_restJson1AcceptInvitationCommand = async (input, context) => {
    const headers = {
        "content-type": "application/json",
    };
    let resolvedPath = "/invitations/accept";
    let body;
    body = JSON.stringify({
        ...(input.administratorAccountId !== undefined &&
            input.administratorAccountId !== null && { administratorAccountId: input.administratorAccountId }),
        ...(input.invitationId !== undefined && input.invitationId !== null && { invitationId: input.invitationId }),
        ...(input.masterAccount !== undefined && input.masterAccount !== null && { masterAccount: input.masterAccount }),
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
exports.serializeAws_restJson1AcceptInvitationCommand = serializeAws_restJson1AcceptInvitationCommand;
const serializeAws_restJson1BatchGetCustomDataIdentifiersCommand = async (input, context) => {
    const headers = {
        "content-type": "application/json",
    };
    let resolvedPath = "/custom-data-identifiers/get";
    let body;
    body = JSON.stringify({
        ...(input.ids !== undefined &&
            input.ids !== null && { ids: serializeAws_restJson1__listOf__string(input.ids, context) }),
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
exports.serializeAws_restJson1BatchGetCustomDataIdentifiersCommand = serializeAws_restJson1BatchGetCustomDataIdentifiersCommand;
const serializeAws_restJson1CreateClassificationJobCommand = async (input, context) => {
    var _a;
    const headers = {
        "content-type": "application/json",
    };
    let resolvedPath = "/jobs";
    let body;
    body = JSON.stringify({
        clientToken: (_a = input.clientToken) !== null && _a !== void 0 ? _a : uuid_1.v4(),
        ...(input.customDataIdentifierIds !== undefined &&
            input.customDataIdentifierIds !== null && {
            customDataIdentifierIds: serializeAws_restJson1__listOf__string(input.customDataIdentifierIds, context),
        }),
        ...(input.description !== undefined && input.description !== null && { description: input.description }),
        ...(input.initialRun !== undefined && input.initialRun !== null && { initialRun: input.initialRun }),
        ...(input.jobType !== undefined && input.jobType !== null && { jobType: input.jobType }),
        ...(input.name !== undefined && input.name !== null && { name: input.name }),
        ...(input.s3JobDefinition !== undefined &&
            input.s3JobDefinition !== null && {
            s3JobDefinition: serializeAws_restJson1S3JobDefinition(input.s3JobDefinition, context),
        }),
        ...(input.samplingPercentage !== undefined &&
            input.samplingPercentage !== null && { samplingPercentage: input.samplingPercentage }),
        ...(input.scheduleFrequency !== undefined &&
            input.scheduleFrequency !== null && {
            scheduleFrequency: serializeAws_restJson1JobScheduleFrequency(input.scheduleFrequency, context),
        }),
        ...(input.tags !== undefined && input.tags !== null && { tags: serializeAws_restJson1TagMap(input.tags, context) }),
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
exports.serializeAws_restJson1CreateClassificationJobCommand = serializeAws_restJson1CreateClassificationJobCommand;
const serializeAws_restJson1CreateCustomDataIdentifierCommand = async (input, context) => {
    var _a;
    const headers = {
        "content-type": "application/json",
    };
    let resolvedPath = "/custom-data-identifiers";
    let body;
    body = JSON.stringify({
        clientToken: (_a = input.clientToken) !== null && _a !== void 0 ? _a : uuid_1.v4(),
        ...(input.description !== undefined && input.description !== null && { description: input.description }),
        ...(input.ignoreWords !== undefined &&
            input.ignoreWords !== null && {
            ignoreWords: serializeAws_restJson1__listOf__string(input.ignoreWords, context),
        }),
        ...(input.keywords !== undefined &&
            input.keywords !== null && { keywords: serializeAws_restJson1__listOf__string(input.keywords, context) }),
        ...(input.maximumMatchDistance !== undefined &&
            input.maximumMatchDistance !== null && { maximumMatchDistance: input.maximumMatchDistance }),
        ...(input.name !== undefined && input.name !== null && { name: input.name }),
        ...(input.regex !== undefined && input.regex !== null && { regex: input.regex }),
        ...(input.tags !== undefined && input.tags !== null && { tags: serializeAws_restJson1TagMap(input.tags, context) }),
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
exports.serializeAws_restJson1CreateCustomDataIdentifierCommand = serializeAws_restJson1CreateCustomDataIdentifierCommand;
const serializeAws_restJson1CreateFindingsFilterCommand = async (input, context) => {
    var _a;
    const headers = {
        "content-type": "application/json",
    };
    let resolvedPath = "/findingsfilters";
    let body;
    body = JSON.stringify({
        ...(input.action !== undefined && input.action !== null && { action: input.action }),
        clientToken: (_a = input.clientToken) !== null && _a !== void 0 ? _a : uuid_1.v4(),
        ...(input.description !== undefined && input.description !== null && { description: input.description }),
        ...(input.findingCriteria !== undefined &&
            input.findingCriteria !== null && {
            findingCriteria: serializeAws_restJson1FindingCriteria(input.findingCriteria, context),
        }),
        ...(input.name !== undefined && input.name !== null && { name: input.name }),
        ...(input.position !== undefined && input.position !== null && { position: input.position }),
        ...(input.tags !== undefined && input.tags !== null && { tags: serializeAws_restJson1TagMap(input.tags, context) }),
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
exports.serializeAws_restJson1CreateFindingsFilterCommand = serializeAws_restJson1CreateFindingsFilterCommand;
const serializeAws_restJson1CreateInvitationsCommand = async (input, context) => {
    const headers = {
        "content-type": "application/json",
    };
    let resolvedPath = "/invitations";
    let body;
    body = JSON.stringify({
        ...(input.accountIds !== undefined &&
            input.accountIds !== null && { accountIds: serializeAws_restJson1__listOf__string(input.accountIds, context) }),
        ...(input.disableEmailNotification !== undefined &&
            input.disableEmailNotification !== null && { disableEmailNotification: input.disableEmailNotification }),
        ...(input.message !== undefined && input.message !== null && { message: input.message }),
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
exports.serializeAws_restJson1CreateInvitationsCommand = serializeAws_restJson1CreateInvitationsCommand;
const serializeAws_restJson1CreateMemberCommand = async (input, context) => {
    const headers = {
        "content-type": "application/json",
    };
    let resolvedPath = "/members";
    let body;
    body = JSON.stringify({
        ...(input.account !== undefined &&
            input.account !== null && { account: serializeAws_restJson1AccountDetail(input.account, context) }),
        ...(input.tags !== undefined && input.tags !== null && { tags: serializeAws_restJson1TagMap(input.tags, context) }),
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
exports.serializeAws_restJson1CreateMemberCommand = serializeAws_restJson1CreateMemberCommand;
const serializeAws_restJson1CreateSampleFindingsCommand = async (input, context) => {
    const headers = {
        "content-type": "application/json",
    };
    let resolvedPath = "/findings/sample";
    let body;
    body = JSON.stringify({
        ...(input.findingTypes !== undefined &&
            input.findingTypes !== null && {
            findingTypes: serializeAws_restJson1__listOfFindingType(input.findingTypes, context),
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
exports.serializeAws_restJson1CreateSampleFindingsCommand = serializeAws_restJson1CreateSampleFindingsCommand;
const serializeAws_restJson1DeclineInvitationsCommand = async (input, context) => {
    const headers = {
        "content-type": "application/json",
    };
    let resolvedPath = "/invitations/decline";
    let body;
    body = JSON.stringify({
        ...(input.accountIds !== undefined &&
            input.accountIds !== null && { accountIds: serializeAws_restJson1__listOf__string(input.accountIds, context) }),
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
exports.serializeAws_restJson1DeclineInvitationsCommand = serializeAws_restJson1DeclineInvitationsCommand;
const serializeAws_restJson1DeleteCustomDataIdentifierCommand = async (input, context) => {
    const headers = {};
    let resolvedPath = "/custom-data-identifiers/{id}";
    if (input.id !== undefined) {
        const labelValue = input.id;
        if (labelValue.length <= 0) {
            throw new Error("Empty value provided for input HTTP label: id.");
        }
        resolvedPath = resolvedPath.replace("{id}", smithy_client_1.extendedEncodeURIComponent(labelValue));
    }
    else {
        throw new Error("No value provided for input HTTP label: id.");
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
exports.serializeAws_restJson1DeleteCustomDataIdentifierCommand = serializeAws_restJson1DeleteCustomDataIdentifierCommand;
const serializeAws_restJson1DeleteFindingsFilterCommand = async (input, context) => {
    const headers = {};
    let resolvedPath = "/findingsfilters/{id}";
    if (input.id !== undefined) {
        const labelValue = input.id;
        if (labelValue.length <= 0) {
            throw new Error("Empty value provided for input HTTP label: id.");
        }
        resolvedPath = resolvedPath.replace("{id}", smithy_client_1.extendedEncodeURIComponent(labelValue));
    }
    else {
        throw new Error("No value provided for input HTTP label: id.");
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
exports.serializeAws_restJson1DeleteFindingsFilterCommand = serializeAws_restJson1DeleteFindingsFilterCommand;
const serializeAws_restJson1DeleteInvitationsCommand = async (input, context) => {
    const headers = {
        "content-type": "application/json",
    };
    let resolvedPath = "/invitations/delete";
    let body;
    body = JSON.stringify({
        ...(input.accountIds !== undefined &&
            input.accountIds !== null && { accountIds: serializeAws_restJson1__listOf__string(input.accountIds, context) }),
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
exports.serializeAws_restJson1DeleteInvitationsCommand = serializeAws_restJson1DeleteInvitationsCommand;
const serializeAws_restJson1DeleteMemberCommand = async (input, context) => {
    const headers = {};
    let resolvedPath = "/members/{id}";
    if (input.id !== undefined) {
        const labelValue = input.id;
        if (labelValue.length <= 0) {
            throw new Error("Empty value provided for input HTTP label: id.");
        }
        resolvedPath = resolvedPath.replace("{id}", smithy_client_1.extendedEncodeURIComponent(labelValue));
    }
    else {
        throw new Error("No value provided for input HTTP label: id.");
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
exports.serializeAws_restJson1DeleteMemberCommand = serializeAws_restJson1DeleteMemberCommand;
const serializeAws_restJson1DescribeBucketsCommand = async (input, context) => {
    const headers = {
        "content-type": "application/json",
    };
    let resolvedPath = "/datasources/s3";
    let body;
    body = JSON.stringify({
        ...(input.criteria !== undefined &&
            input.criteria !== null && { criteria: serializeAws_restJson1BucketCriteria(input.criteria, context) }),
        ...(input.maxResults !== undefined && input.maxResults !== null && { maxResults: input.maxResults }),
        ...(input.nextToken !== undefined && input.nextToken !== null && { nextToken: input.nextToken }),
        ...(input.sortCriteria !== undefined &&
            input.sortCriteria !== null && {
            sortCriteria: serializeAws_restJson1BucketSortCriteria(input.sortCriteria, context),
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
exports.serializeAws_restJson1DescribeBucketsCommand = serializeAws_restJson1DescribeBucketsCommand;
const serializeAws_restJson1DescribeClassificationJobCommand = async (input, context) => {
    const headers = {};
    let resolvedPath = "/jobs/{jobId}";
    if (input.jobId !== undefined) {
        const labelValue = input.jobId;
        if (labelValue.length <= 0) {
            throw new Error("Empty value provided for input HTTP label: jobId.");
        }
        resolvedPath = resolvedPath.replace("{jobId}", smithy_client_1.extendedEncodeURIComponent(labelValue));
    }
    else {
        throw new Error("No value provided for input HTTP label: jobId.");
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
exports.serializeAws_restJson1DescribeClassificationJobCommand = serializeAws_restJson1DescribeClassificationJobCommand;
const serializeAws_restJson1DescribeOrganizationConfigurationCommand = async (input, context) => {
    const headers = {
        "content-type": "application/json",
    };
    let resolvedPath = "/admin/configuration";
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
exports.serializeAws_restJson1DescribeOrganizationConfigurationCommand = serializeAws_restJson1DescribeOrganizationConfigurationCommand;
const serializeAws_restJson1DisableMacieCommand = async (input, context) => {
    const headers = {
        "content-type": "application/json",
    };
    let resolvedPath = "/macie";
    let body;
    body = "";
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
exports.serializeAws_restJson1DisableMacieCommand = serializeAws_restJson1DisableMacieCommand;
const serializeAws_restJson1DisableOrganizationAdminAccountCommand = async (input, context) => {
    const headers = {};
    let resolvedPath = "/admin";
    const query = {
        ...(input.adminAccountId !== undefined && { adminAccountId: input.adminAccountId }),
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
exports.serializeAws_restJson1DisableOrganizationAdminAccountCommand = serializeAws_restJson1DisableOrganizationAdminAccountCommand;
const serializeAws_restJson1DisassociateFromAdministratorAccountCommand = async (input, context) => {
    const headers = {
        "content-type": "application/json",
    };
    let resolvedPath = "/administrator/disassociate";
    let body;
    body = "";
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
exports.serializeAws_restJson1DisassociateFromAdministratorAccountCommand = serializeAws_restJson1DisassociateFromAdministratorAccountCommand;
const serializeAws_restJson1DisassociateFromMasterAccountCommand = async (input, context) => {
    const headers = {
        "content-type": "application/json",
    };
    let resolvedPath = "/master/disassociate";
    let body;
    body = "";
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
exports.serializeAws_restJson1DisassociateFromMasterAccountCommand = serializeAws_restJson1DisassociateFromMasterAccountCommand;
const serializeAws_restJson1DisassociateMemberCommand = async (input, context) => {
    const headers = {};
    let resolvedPath = "/members/disassociate/{id}";
    if (input.id !== undefined) {
        const labelValue = input.id;
        if (labelValue.length <= 0) {
            throw new Error("Empty value provided for input HTTP label: id.");
        }
        resolvedPath = resolvedPath.replace("{id}", smithy_client_1.extendedEncodeURIComponent(labelValue));
    }
    else {
        throw new Error("No value provided for input HTTP label: id.");
    }
    let body;
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
exports.serializeAws_restJson1DisassociateMemberCommand = serializeAws_restJson1DisassociateMemberCommand;
const serializeAws_restJson1EnableMacieCommand = async (input, context) => {
    var _a;
    const headers = {
        "content-type": "application/json",
    };
    let resolvedPath = "/macie";
    let body;
    body = JSON.stringify({
        clientToken: (_a = input.clientToken) !== null && _a !== void 0 ? _a : uuid_1.v4(),
        ...(input.findingPublishingFrequency !== undefined &&
            input.findingPublishingFrequency !== null && { findingPublishingFrequency: input.findingPublishingFrequency }),
        ...(input.status !== undefined && input.status !== null && { status: input.status }),
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
exports.serializeAws_restJson1EnableMacieCommand = serializeAws_restJson1EnableMacieCommand;
const serializeAws_restJson1EnableOrganizationAdminAccountCommand = async (input, context) => {
    var _a;
    const headers = {
        "content-type": "application/json",
    };
    let resolvedPath = "/admin";
    let body;
    body = JSON.stringify({
        ...(input.adminAccountId !== undefined &&
            input.adminAccountId !== null && { adminAccountId: input.adminAccountId }),
        clientToken: (_a = input.clientToken) !== null && _a !== void 0 ? _a : uuid_1.v4(),
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
exports.serializeAws_restJson1EnableOrganizationAdminAccountCommand = serializeAws_restJson1EnableOrganizationAdminAccountCommand;
const serializeAws_restJson1GetAdministratorAccountCommand = async (input, context) => {
    const headers = {
        "content-type": "application/json",
    };
    let resolvedPath = "/administrator";
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
exports.serializeAws_restJson1GetAdministratorAccountCommand = serializeAws_restJson1GetAdministratorAccountCommand;
const serializeAws_restJson1GetBucketStatisticsCommand = async (input, context) => {
    const headers = {
        "content-type": "application/json",
    };
    let resolvedPath = "/datasources/s3/statistics";
    let body;
    body = JSON.stringify({
        ...(input.accountId !== undefined && input.accountId !== null && { accountId: input.accountId }),
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
exports.serializeAws_restJson1GetBucketStatisticsCommand = serializeAws_restJson1GetBucketStatisticsCommand;
const serializeAws_restJson1GetClassificationExportConfigurationCommand = async (input, context) => {
    const headers = {
        "content-type": "application/json",
    };
    let resolvedPath = "/classification-export-configuration";
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
exports.serializeAws_restJson1GetClassificationExportConfigurationCommand = serializeAws_restJson1GetClassificationExportConfigurationCommand;
const serializeAws_restJson1GetCustomDataIdentifierCommand = async (input, context) => {
    const headers = {};
    let resolvedPath = "/custom-data-identifiers/{id}";
    if (input.id !== undefined) {
        const labelValue = input.id;
        if (labelValue.length <= 0) {
            throw new Error("Empty value provided for input HTTP label: id.");
        }
        resolvedPath = resolvedPath.replace("{id}", smithy_client_1.extendedEncodeURIComponent(labelValue));
    }
    else {
        throw new Error("No value provided for input HTTP label: id.");
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
exports.serializeAws_restJson1GetCustomDataIdentifierCommand = serializeAws_restJson1GetCustomDataIdentifierCommand;
const serializeAws_restJson1GetFindingsCommand = async (input, context) => {
    const headers = {
        "content-type": "application/json",
    };
    let resolvedPath = "/findings/describe";
    let body;
    body = JSON.stringify({
        ...(input.findingIds !== undefined &&
            input.findingIds !== null && { findingIds: serializeAws_restJson1__listOf__string(input.findingIds, context) }),
        ...(input.sortCriteria !== undefined &&
            input.sortCriteria !== null && { sortCriteria: serializeAws_restJson1SortCriteria(input.sortCriteria, context) }),
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
exports.serializeAws_restJson1GetFindingsCommand = serializeAws_restJson1GetFindingsCommand;
const serializeAws_restJson1GetFindingsFilterCommand = async (input, context) => {
    const headers = {};
    let resolvedPath = "/findingsfilters/{id}";
    if (input.id !== undefined) {
        const labelValue = input.id;
        if (labelValue.length <= 0) {
            throw new Error("Empty value provided for input HTTP label: id.");
        }
        resolvedPath = resolvedPath.replace("{id}", smithy_client_1.extendedEncodeURIComponent(labelValue));
    }
    else {
        throw new Error("No value provided for input HTTP label: id.");
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
exports.serializeAws_restJson1GetFindingsFilterCommand = serializeAws_restJson1GetFindingsFilterCommand;
const serializeAws_restJson1GetFindingsPublicationConfigurationCommand = async (input, context) => {
    const headers = {
        "content-type": "application/json",
    };
    let resolvedPath = "/findings-publication-configuration";
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
exports.serializeAws_restJson1GetFindingsPublicationConfigurationCommand = serializeAws_restJson1GetFindingsPublicationConfigurationCommand;
const serializeAws_restJson1GetFindingStatisticsCommand = async (input, context) => {
    const headers = {
        "content-type": "application/json",
    };
    let resolvedPath = "/findings/statistics";
    let body;
    body = JSON.stringify({
        ...(input.findingCriteria !== undefined &&
            input.findingCriteria !== null && {
            findingCriteria: serializeAws_restJson1FindingCriteria(input.findingCriteria, context),
        }),
        ...(input.groupBy !== undefined && input.groupBy !== null && { groupBy: input.groupBy }),
        ...(input.size !== undefined && input.size !== null && { size: input.size }),
        ...(input.sortCriteria !== undefined &&
            input.sortCriteria !== null && {
            sortCriteria: serializeAws_restJson1FindingStatisticsSortCriteria(input.sortCriteria, context),
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
exports.serializeAws_restJson1GetFindingStatisticsCommand = serializeAws_restJson1GetFindingStatisticsCommand;
const serializeAws_restJson1GetInvitationsCountCommand = async (input, context) => {
    const headers = {
        "content-type": "application/json",
    };
    let resolvedPath = "/invitations/count";
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
exports.serializeAws_restJson1GetInvitationsCountCommand = serializeAws_restJson1GetInvitationsCountCommand;
const serializeAws_restJson1GetMacieSessionCommand = async (input, context) => {
    const headers = {
        "content-type": "application/json",
    };
    let resolvedPath = "/macie";
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
exports.serializeAws_restJson1GetMacieSessionCommand = serializeAws_restJson1GetMacieSessionCommand;
const serializeAws_restJson1GetMasterAccountCommand = async (input, context) => {
    const headers = {
        "content-type": "application/json",
    };
    let resolvedPath = "/master";
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
exports.serializeAws_restJson1GetMasterAccountCommand = serializeAws_restJson1GetMasterAccountCommand;
const serializeAws_restJson1GetMemberCommand = async (input, context) => {
    const headers = {};
    let resolvedPath = "/members/{id}";
    if (input.id !== undefined) {
        const labelValue = input.id;
        if (labelValue.length <= 0) {
            throw new Error("Empty value provided for input HTTP label: id.");
        }
        resolvedPath = resolvedPath.replace("{id}", smithy_client_1.extendedEncodeURIComponent(labelValue));
    }
    else {
        throw new Error("No value provided for input HTTP label: id.");
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
exports.serializeAws_restJson1GetMemberCommand = serializeAws_restJson1GetMemberCommand;
const serializeAws_restJson1GetUsageStatisticsCommand = async (input, context) => {
    const headers = {
        "content-type": "application/json",
    };
    let resolvedPath = "/usage/statistics";
    let body;
    body = JSON.stringify({
        ...(input.filterBy !== undefined &&
            input.filterBy !== null && {
            filterBy: serializeAws_restJson1__listOfUsageStatisticsFilter(input.filterBy, context),
        }),
        ...(input.maxResults !== undefined && input.maxResults !== null && { maxResults: input.maxResults }),
        ...(input.nextToken !== undefined && input.nextToken !== null && { nextToken: input.nextToken }),
        ...(input.sortBy !== undefined &&
            input.sortBy !== null && { sortBy: serializeAws_restJson1UsageStatisticsSortBy(input.sortBy, context) }),
        ...(input.timeRange !== undefined && input.timeRange !== null && { timeRange: input.timeRange }),
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
exports.serializeAws_restJson1GetUsageStatisticsCommand = serializeAws_restJson1GetUsageStatisticsCommand;
const serializeAws_restJson1GetUsageTotalsCommand = async (input, context) => {
    const headers = {};
    let resolvedPath = "/usage";
    const query = {
        ...(input.timeRange !== undefined && { timeRange: input.timeRange }),
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
exports.serializeAws_restJson1GetUsageTotalsCommand = serializeAws_restJson1GetUsageTotalsCommand;
const serializeAws_restJson1ListClassificationJobsCommand = async (input, context) => {
    const headers = {
        "content-type": "application/json",
    };
    let resolvedPath = "/jobs/list";
    let body;
    body = JSON.stringify({
        ...(input.filterCriteria !== undefined &&
            input.filterCriteria !== null && {
            filterCriteria: serializeAws_restJson1ListJobsFilterCriteria(input.filterCriteria, context),
        }),
        ...(input.maxResults !== undefined && input.maxResults !== null && { maxResults: input.maxResults }),
        ...(input.nextToken !== undefined && input.nextToken !== null && { nextToken: input.nextToken }),
        ...(input.sortCriteria !== undefined &&
            input.sortCriteria !== null && {
            sortCriteria: serializeAws_restJson1ListJobsSortCriteria(input.sortCriteria, context),
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
exports.serializeAws_restJson1ListClassificationJobsCommand = serializeAws_restJson1ListClassificationJobsCommand;
const serializeAws_restJson1ListCustomDataIdentifiersCommand = async (input, context) => {
    const headers = {
        "content-type": "application/json",
    };
    let resolvedPath = "/custom-data-identifiers/list";
    let body;
    body = JSON.stringify({
        ...(input.maxResults !== undefined && input.maxResults !== null && { maxResults: input.maxResults }),
        ...(input.nextToken !== undefined && input.nextToken !== null && { nextToken: input.nextToken }),
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
exports.serializeAws_restJson1ListCustomDataIdentifiersCommand = serializeAws_restJson1ListCustomDataIdentifiersCommand;
const serializeAws_restJson1ListFindingsCommand = async (input, context) => {
    const headers = {
        "content-type": "application/json",
    };
    let resolvedPath = "/findings";
    let body;
    body = JSON.stringify({
        ...(input.findingCriteria !== undefined &&
            input.findingCriteria !== null && {
            findingCriteria: serializeAws_restJson1FindingCriteria(input.findingCriteria, context),
        }),
        ...(input.maxResults !== undefined && input.maxResults !== null && { maxResults: input.maxResults }),
        ...(input.nextToken !== undefined && input.nextToken !== null && { nextToken: input.nextToken }),
        ...(input.sortCriteria !== undefined &&
            input.sortCriteria !== null && { sortCriteria: serializeAws_restJson1SortCriteria(input.sortCriteria, context) }),
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
exports.serializeAws_restJson1ListFindingsCommand = serializeAws_restJson1ListFindingsCommand;
const serializeAws_restJson1ListFindingsFiltersCommand = async (input, context) => {
    const headers = {};
    let resolvedPath = "/findingsfilters";
    const query = {
        ...(input.maxResults !== undefined && { maxResults: input.maxResults.toString() }),
        ...(input.nextToken !== undefined && { nextToken: input.nextToken }),
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
exports.serializeAws_restJson1ListFindingsFiltersCommand = serializeAws_restJson1ListFindingsFiltersCommand;
const serializeAws_restJson1ListInvitationsCommand = async (input, context) => {
    const headers = {};
    let resolvedPath = "/invitations";
    const query = {
        ...(input.maxResults !== undefined && { maxResults: input.maxResults.toString() }),
        ...(input.nextToken !== undefined && { nextToken: input.nextToken }),
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
exports.serializeAws_restJson1ListInvitationsCommand = serializeAws_restJson1ListInvitationsCommand;
const serializeAws_restJson1ListMembersCommand = async (input, context) => {
    const headers = {};
    let resolvedPath = "/members";
    const query = {
        ...(input.maxResults !== undefined && { maxResults: input.maxResults.toString() }),
        ...(input.nextToken !== undefined && { nextToken: input.nextToken }),
        ...(input.onlyAssociated !== undefined && { onlyAssociated: input.onlyAssociated }),
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
exports.serializeAws_restJson1ListMembersCommand = serializeAws_restJson1ListMembersCommand;
const serializeAws_restJson1ListOrganizationAdminAccountsCommand = async (input, context) => {
    const headers = {};
    let resolvedPath = "/admin";
    const query = {
        ...(input.maxResults !== undefined && { maxResults: input.maxResults.toString() }),
        ...(input.nextToken !== undefined && { nextToken: input.nextToken }),
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
exports.serializeAws_restJson1ListOrganizationAdminAccountsCommand = serializeAws_restJson1ListOrganizationAdminAccountsCommand;
const serializeAws_restJson1ListTagsForResourceCommand = async (input, context) => {
    const headers = {};
    let resolvedPath = "/tags/{resourceArn}";
    if (input.resourceArn !== undefined) {
        const labelValue = input.resourceArn;
        if (labelValue.length <= 0) {
            throw new Error("Empty value provided for input HTTP label: resourceArn.");
        }
        resolvedPath = resolvedPath.replace("{resourceArn}", smithy_client_1.extendedEncodeURIComponent(labelValue));
    }
    else {
        throw new Error("No value provided for input HTTP label: resourceArn.");
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
exports.serializeAws_restJson1ListTagsForResourceCommand = serializeAws_restJson1ListTagsForResourceCommand;
const serializeAws_restJson1PutClassificationExportConfigurationCommand = async (input, context) => {
    const headers = {
        "content-type": "application/json",
    };
    let resolvedPath = "/classification-export-configuration";
    let body;
    body = JSON.stringify({
        ...(input.configuration !== undefined &&
            input.configuration !== null && {
            configuration: serializeAws_restJson1ClassificationExportConfiguration(input.configuration, context),
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
exports.serializeAws_restJson1PutClassificationExportConfigurationCommand = serializeAws_restJson1PutClassificationExportConfigurationCommand;
const serializeAws_restJson1PutFindingsPublicationConfigurationCommand = async (input, context) => {
    var _a;
    const headers = {
        "content-type": "application/json",
    };
    let resolvedPath = "/findings-publication-configuration";
    let body;
    body = JSON.stringify({
        clientToken: (_a = input.clientToken) !== null && _a !== void 0 ? _a : uuid_1.v4(),
        ...(input.securityHubConfiguration !== undefined &&
            input.securityHubConfiguration !== null && {
            securityHubConfiguration: serializeAws_restJson1SecurityHubConfiguration(input.securityHubConfiguration, context),
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
exports.serializeAws_restJson1PutFindingsPublicationConfigurationCommand = serializeAws_restJson1PutFindingsPublicationConfigurationCommand;
const serializeAws_restJson1SearchResourcesCommand = async (input, context) => {
    const headers = {
        "content-type": "application/json",
    };
    let resolvedPath = "/datasources/search-resources";
    let body;
    body = JSON.stringify({
        ...(input.bucketCriteria !== undefined &&
            input.bucketCriteria !== null && {
            bucketCriteria: serializeAws_restJson1SearchResourcesBucketCriteria(input.bucketCriteria, context),
        }),
        ...(input.maxResults !== undefined && input.maxResults !== null && { maxResults: input.maxResults }),
        ...(input.nextToken !== undefined && input.nextToken !== null && { nextToken: input.nextToken }),
        ...(input.sortCriteria !== undefined &&
            input.sortCriteria !== null && {
            sortCriteria: serializeAws_restJson1SearchResourcesSortCriteria(input.sortCriteria, context),
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
exports.serializeAws_restJson1SearchResourcesCommand = serializeAws_restJson1SearchResourcesCommand;
const serializeAws_restJson1TagResourceCommand = async (input, context) => {
    const headers = {
        "content-type": "application/json",
    };
    let resolvedPath = "/tags/{resourceArn}";
    if (input.resourceArn !== undefined) {
        const labelValue = input.resourceArn;
        if (labelValue.length <= 0) {
            throw new Error("Empty value provided for input HTTP label: resourceArn.");
        }
        resolvedPath = resolvedPath.replace("{resourceArn}", smithy_client_1.extendedEncodeURIComponent(labelValue));
    }
    else {
        throw new Error("No value provided for input HTTP label: resourceArn.");
    }
    let body;
    body = JSON.stringify({
        ...(input.tags !== undefined && input.tags !== null && { tags: serializeAws_restJson1TagMap(input.tags, context) }),
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
const serializeAws_restJson1TestCustomDataIdentifierCommand = async (input, context) => {
    const headers = {
        "content-type": "application/json",
    };
    let resolvedPath = "/custom-data-identifiers/test";
    let body;
    body = JSON.stringify({
        ...(input.ignoreWords !== undefined &&
            input.ignoreWords !== null && {
            ignoreWords: serializeAws_restJson1__listOf__string(input.ignoreWords, context),
        }),
        ...(input.keywords !== undefined &&
            input.keywords !== null && { keywords: serializeAws_restJson1__listOf__string(input.keywords, context) }),
        ...(input.maximumMatchDistance !== undefined &&
            input.maximumMatchDistance !== null && { maximumMatchDistance: input.maximumMatchDistance }),
        ...(input.regex !== undefined && input.regex !== null && { regex: input.regex }),
        ...(input.sampleText !== undefined && input.sampleText !== null && { sampleText: input.sampleText }),
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
exports.serializeAws_restJson1TestCustomDataIdentifierCommand = serializeAws_restJson1TestCustomDataIdentifierCommand;
const serializeAws_restJson1UntagResourceCommand = async (input, context) => {
    const headers = {};
    let resolvedPath = "/tags/{resourceArn}";
    if (input.resourceArn !== undefined) {
        const labelValue = input.resourceArn;
        if (labelValue.length <= 0) {
            throw new Error("Empty value provided for input HTTP label: resourceArn.");
        }
        resolvedPath = resolvedPath.replace("{resourceArn}", smithy_client_1.extendedEncodeURIComponent(labelValue));
    }
    else {
        throw new Error("No value provided for input HTTP label: resourceArn.");
    }
    const query = {
        ...(input.tagKeys !== undefined && { tagKeys: (input.tagKeys || []).map((_entry) => _entry) }),
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
const serializeAws_restJson1UpdateClassificationJobCommand = async (input, context) => {
    const headers = {
        "content-type": "application/json",
    };
    let resolvedPath = "/jobs/{jobId}";
    if (input.jobId !== undefined) {
        const labelValue = input.jobId;
        if (labelValue.length <= 0) {
            throw new Error("Empty value provided for input HTTP label: jobId.");
        }
        resolvedPath = resolvedPath.replace("{jobId}", smithy_client_1.extendedEncodeURIComponent(labelValue));
    }
    else {
        throw new Error("No value provided for input HTTP label: jobId.");
    }
    let body;
    body = JSON.stringify({
        ...(input.jobStatus !== undefined && input.jobStatus !== null && { jobStatus: input.jobStatus }),
    });
    const { hostname, protocol = "https", port } = await context.endpoint();
    return new protocol_http_1.HttpRequest({
        protocol,
        hostname,
        port,
        method: "PATCH",
        headers,
        path: resolvedPath,
        body,
    });
};
exports.serializeAws_restJson1UpdateClassificationJobCommand = serializeAws_restJson1UpdateClassificationJobCommand;
const serializeAws_restJson1UpdateFindingsFilterCommand = async (input, context) => {
    const headers = {
        "content-type": "application/json",
    };
    let resolvedPath = "/findingsfilters/{id}";
    if (input.id !== undefined) {
        const labelValue = input.id;
        if (labelValue.length <= 0) {
            throw new Error("Empty value provided for input HTTP label: id.");
        }
        resolvedPath = resolvedPath.replace("{id}", smithy_client_1.extendedEncodeURIComponent(labelValue));
    }
    else {
        throw new Error("No value provided for input HTTP label: id.");
    }
    let body;
    body = JSON.stringify({
        ...(input.action !== undefined && input.action !== null && { action: input.action }),
        ...(input.description !== undefined && input.description !== null && { description: input.description }),
        ...(input.findingCriteria !== undefined &&
            input.findingCriteria !== null && {
            findingCriteria: serializeAws_restJson1FindingCriteria(input.findingCriteria, context),
        }),
        ...(input.name !== undefined && input.name !== null && { name: input.name }),
        ...(input.position !== undefined && input.position !== null && { position: input.position }),
    });
    const { hostname, protocol = "https", port } = await context.endpoint();
    return new protocol_http_1.HttpRequest({
        protocol,
        hostname,
        port,
        method: "PATCH",
        headers,
        path: resolvedPath,
        body,
    });
};
exports.serializeAws_restJson1UpdateFindingsFilterCommand = serializeAws_restJson1UpdateFindingsFilterCommand;
const serializeAws_restJson1UpdateMacieSessionCommand = async (input, context) => {
    const headers = {
        "content-type": "application/json",
    };
    let resolvedPath = "/macie";
    let body;
    body = JSON.stringify({
        ...(input.findingPublishingFrequency !== undefined &&
            input.findingPublishingFrequency !== null && { findingPublishingFrequency: input.findingPublishingFrequency }),
        ...(input.status !== undefined && input.status !== null && { status: input.status }),
    });
    const { hostname, protocol = "https", port } = await context.endpoint();
    return new protocol_http_1.HttpRequest({
        protocol,
        hostname,
        port,
        method: "PATCH",
        headers,
        path: resolvedPath,
        body,
    });
};
exports.serializeAws_restJson1UpdateMacieSessionCommand = serializeAws_restJson1UpdateMacieSessionCommand;
const serializeAws_restJson1UpdateMemberSessionCommand = async (input, context) => {
    const headers = {
        "content-type": "application/json",
    };
    let resolvedPath = "/macie/members/{id}";
    if (input.id !== undefined) {
        const labelValue = input.id;
        if (labelValue.length <= 0) {
            throw new Error("Empty value provided for input HTTP label: id.");
        }
        resolvedPath = resolvedPath.replace("{id}", smithy_client_1.extendedEncodeURIComponent(labelValue));
    }
    else {
        throw new Error("No value provided for input HTTP label: id.");
    }
    let body;
    body = JSON.stringify({
        ...(input.status !== undefined && input.status !== null && { status: input.status }),
    });
    const { hostname, protocol = "https", port } = await context.endpoint();
    return new protocol_http_1.HttpRequest({
        protocol,
        hostname,
        port,
        method: "PATCH",
        headers,
        path: resolvedPath,
        body,
    });
};
exports.serializeAws_restJson1UpdateMemberSessionCommand = serializeAws_restJson1UpdateMemberSessionCommand;
const serializeAws_restJson1UpdateOrganizationConfigurationCommand = async (input, context) => {
    const headers = {
        "content-type": "application/json",
    };
    let resolvedPath = "/admin/configuration";
    let body;
    body = JSON.stringify({
        ...(input.autoEnable !== undefined && input.autoEnable !== null && { autoEnable: input.autoEnable }),
    });
    const { hostname, protocol = "https", port } = await context.endpoint();
    return new protocol_http_1.HttpRequest({
        protocol,
        hostname,
        port,
        method: "PATCH",
        headers,
        path: resolvedPath,
        body,
    });
};
exports.serializeAws_restJson1UpdateOrganizationConfigurationCommand = serializeAws_restJson1UpdateOrganizationConfigurationCommand;
const deserializeAws_restJson1AcceptInvitationCommand = async (output, context) => {
    if (output.statusCode !== 200 && output.statusCode >= 300) {
        return deserializeAws_restJson1AcceptInvitationCommandError(output, context);
    }
    const contents = {
        $metadata: deserializeMetadata(output),
    };
    await collectBody(output.body, context);
    return Promise.resolve(contents);
};
exports.deserializeAws_restJson1AcceptInvitationCommand = deserializeAws_restJson1AcceptInvitationCommand;
const deserializeAws_restJson1AcceptInvitationCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "AccessDeniedException":
        case "com.amazonaws.macie2#AccessDeniedException":
            response = {
                ...(await deserializeAws_restJson1AccessDeniedExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ConflictException":
        case "com.amazonaws.macie2#ConflictException":
            response = {
                ...(await deserializeAws_restJson1ConflictExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InternalServerException":
        case "com.amazonaws.macie2#InternalServerException":
            response = {
                ...(await deserializeAws_restJson1InternalServerExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ResourceNotFoundException":
        case "com.amazonaws.macie2#ResourceNotFoundException":
            response = {
                ...(await deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ServiceQuotaExceededException":
        case "com.amazonaws.macie2#ServiceQuotaExceededException":
            response = {
                ...(await deserializeAws_restJson1ServiceQuotaExceededExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ThrottlingException":
        case "com.amazonaws.macie2#ThrottlingException":
            response = {
                ...(await deserializeAws_restJson1ThrottlingExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ValidationException":
        case "com.amazonaws.macie2#ValidationException":
            response = {
                ...(await deserializeAws_restJson1ValidationExceptionResponse(parsedOutput, context)),
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
const deserializeAws_restJson1BatchGetCustomDataIdentifiersCommand = async (output, context) => {
    if (output.statusCode !== 200 && output.statusCode >= 300) {
        return deserializeAws_restJson1BatchGetCustomDataIdentifiersCommandError(output, context);
    }
    const contents = {
        $metadata: deserializeMetadata(output),
        customDataIdentifiers: undefined,
        notFoundIdentifierIds: undefined,
    };
    const data = await parseBody(output.body, context);
    if (data.customDataIdentifiers !== undefined && data.customDataIdentifiers !== null) {
        contents.customDataIdentifiers = deserializeAws_restJson1__listOfBatchGetCustomDataIdentifierSummary(data.customDataIdentifiers, context);
    }
    if (data.notFoundIdentifierIds !== undefined && data.notFoundIdentifierIds !== null) {
        contents.notFoundIdentifierIds = deserializeAws_restJson1__listOf__string(data.notFoundIdentifierIds, context);
    }
    return Promise.resolve(contents);
};
exports.deserializeAws_restJson1BatchGetCustomDataIdentifiersCommand = deserializeAws_restJson1BatchGetCustomDataIdentifiersCommand;
const deserializeAws_restJson1BatchGetCustomDataIdentifiersCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "AccessDeniedException":
        case "com.amazonaws.macie2#AccessDeniedException":
            response = {
                ...(await deserializeAws_restJson1AccessDeniedExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ConflictException":
        case "com.amazonaws.macie2#ConflictException":
            response = {
                ...(await deserializeAws_restJson1ConflictExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InternalServerException":
        case "com.amazonaws.macie2#InternalServerException":
            response = {
                ...(await deserializeAws_restJson1InternalServerExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ResourceNotFoundException":
        case "com.amazonaws.macie2#ResourceNotFoundException":
            response = {
                ...(await deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ServiceQuotaExceededException":
        case "com.amazonaws.macie2#ServiceQuotaExceededException":
            response = {
                ...(await deserializeAws_restJson1ServiceQuotaExceededExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ThrottlingException":
        case "com.amazonaws.macie2#ThrottlingException":
            response = {
                ...(await deserializeAws_restJson1ThrottlingExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ValidationException":
        case "com.amazonaws.macie2#ValidationException":
            response = {
                ...(await deserializeAws_restJson1ValidationExceptionResponse(parsedOutput, context)),
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
const deserializeAws_restJson1CreateClassificationJobCommand = async (output, context) => {
    if (output.statusCode !== 200 && output.statusCode >= 300) {
        return deserializeAws_restJson1CreateClassificationJobCommandError(output, context);
    }
    const contents = {
        $metadata: deserializeMetadata(output),
        jobArn: undefined,
        jobId: undefined,
    };
    const data = await parseBody(output.body, context);
    if (data.jobArn !== undefined && data.jobArn !== null) {
        contents.jobArn = data.jobArn;
    }
    if (data.jobId !== undefined && data.jobId !== null) {
        contents.jobId = data.jobId;
    }
    return Promise.resolve(contents);
};
exports.deserializeAws_restJson1CreateClassificationJobCommand = deserializeAws_restJson1CreateClassificationJobCommand;
const deserializeAws_restJson1CreateClassificationJobCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "AccessDeniedException":
        case "com.amazonaws.macie2#AccessDeniedException":
            response = {
                ...(await deserializeAws_restJson1AccessDeniedExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ConflictException":
        case "com.amazonaws.macie2#ConflictException":
            response = {
                ...(await deserializeAws_restJson1ConflictExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InternalServerException":
        case "com.amazonaws.macie2#InternalServerException":
            response = {
                ...(await deserializeAws_restJson1InternalServerExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ResourceNotFoundException":
        case "com.amazonaws.macie2#ResourceNotFoundException":
            response = {
                ...(await deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ServiceQuotaExceededException":
        case "com.amazonaws.macie2#ServiceQuotaExceededException":
            response = {
                ...(await deserializeAws_restJson1ServiceQuotaExceededExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ThrottlingException":
        case "com.amazonaws.macie2#ThrottlingException":
            response = {
                ...(await deserializeAws_restJson1ThrottlingExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ValidationException":
        case "com.amazonaws.macie2#ValidationException":
            response = {
                ...(await deserializeAws_restJson1ValidationExceptionResponse(parsedOutput, context)),
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
const deserializeAws_restJson1CreateCustomDataIdentifierCommand = async (output, context) => {
    if (output.statusCode !== 200 && output.statusCode >= 300) {
        return deserializeAws_restJson1CreateCustomDataIdentifierCommandError(output, context);
    }
    const contents = {
        $metadata: deserializeMetadata(output),
        customDataIdentifierId: undefined,
    };
    const data = await parseBody(output.body, context);
    if (data.customDataIdentifierId !== undefined && data.customDataIdentifierId !== null) {
        contents.customDataIdentifierId = data.customDataIdentifierId;
    }
    return Promise.resolve(contents);
};
exports.deserializeAws_restJson1CreateCustomDataIdentifierCommand = deserializeAws_restJson1CreateCustomDataIdentifierCommand;
const deserializeAws_restJson1CreateCustomDataIdentifierCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "AccessDeniedException":
        case "com.amazonaws.macie2#AccessDeniedException":
            response = {
                ...(await deserializeAws_restJson1AccessDeniedExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ConflictException":
        case "com.amazonaws.macie2#ConflictException":
            response = {
                ...(await deserializeAws_restJson1ConflictExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InternalServerException":
        case "com.amazonaws.macie2#InternalServerException":
            response = {
                ...(await deserializeAws_restJson1InternalServerExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ResourceNotFoundException":
        case "com.amazonaws.macie2#ResourceNotFoundException":
            response = {
                ...(await deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ServiceQuotaExceededException":
        case "com.amazonaws.macie2#ServiceQuotaExceededException":
            response = {
                ...(await deserializeAws_restJson1ServiceQuotaExceededExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ThrottlingException":
        case "com.amazonaws.macie2#ThrottlingException":
            response = {
                ...(await deserializeAws_restJson1ThrottlingExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ValidationException":
        case "com.amazonaws.macie2#ValidationException":
            response = {
                ...(await deserializeAws_restJson1ValidationExceptionResponse(parsedOutput, context)),
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
const deserializeAws_restJson1CreateFindingsFilterCommand = async (output, context) => {
    if (output.statusCode !== 200 && output.statusCode >= 300) {
        return deserializeAws_restJson1CreateFindingsFilterCommandError(output, context);
    }
    const contents = {
        $metadata: deserializeMetadata(output),
        arn: undefined,
        id: undefined,
    };
    const data = await parseBody(output.body, context);
    if (data.arn !== undefined && data.arn !== null) {
        contents.arn = data.arn;
    }
    if (data.id !== undefined && data.id !== null) {
        contents.id = data.id;
    }
    return Promise.resolve(contents);
};
exports.deserializeAws_restJson1CreateFindingsFilterCommand = deserializeAws_restJson1CreateFindingsFilterCommand;
const deserializeAws_restJson1CreateFindingsFilterCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "AccessDeniedException":
        case "com.amazonaws.macie2#AccessDeniedException":
            response = {
                ...(await deserializeAws_restJson1AccessDeniedExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ConflictException":
        case "com.amazonaws.macie2#ConflictException":
            response = {
                ...(await deserializeAws_restJson1ConflictExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InternalServerException":
        case "com.amazonaws.macie2#InternalServerException":
            response = {
                ...(await deserializeAws_restJson1InternalServerExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ResourceNotFoundException":
        case "com.amazonaws.macie2#ResourceNotFoundException":
            response = {
                ...(await deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ServiceQuotaExceededException":
        case "com.amazonaws.macie2#ServiceQuotaExceededException":
            response = {
                ...(await deserializeAws_restJson1ServiceQuotaExceededExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ThrottlingException":
        case "com.amazonaws.macie2#ThrottlingException":
            response = {
                ...(await deserializeAws_restJson1ThrottlingExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ValidationException":
        case "com.amazonaws.macie2#ValidationException":
            response = {
                ...(await deserializeAws_restJson1ValidationExceptionResponse(parsedOutput, context)),
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
const deserializeAws_restJson1CreateInvitationsCommand = async (output, context) => {
    if (output.statusCode !== 200 && output.statusCode >= 300) {
        return deserializeAws_restJson1CreateInvitationsCommandError(output, context);
    }
    const contents = {
        $metadata: deserializeMetadata(output),
        unprocessedAccounts: undefined,
    };
    const data = await parseBody(output.body, context);
    if (data.unprocessedAccounts !== undefined && data.unprocessedAccounts !== null) {
        contents.unprocessedAccounts = deserializeAws_restJson1__listOfUnprocessedAccount(data.unprocessedAccounts, context);
    }
    return Promise.resolve(contents);
};
exports.deserializeAws_restJson1CreateInvitationsCommand = deserializeAws_restJson1CreateInvitationsCommand;
const deserializeAws_restJson1CreateInvitationsCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "AccessDeniedException":
        case "com.amazonaws.macie2#AccessDeniedException":
            response = {
                ...(await deserializeAws_restJson1AccessDeniedExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ConflictException":
        case "com.amazonaws.macie2#ConflictException":
            response = {
                ...(await deserializeAws_restJson1ConflictExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InternalServerException":
        case "com.amazonaws.macie2#InternalServerException":
            response = {
                ...(await deserializeAws_restJson1InternalServerExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ResourceNotFoundException":
        case "com.amazonaws.macie2#ResourceNotFoundException":
            response = {
                ...(await deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ServiceQuotaExceededException":
        case "com.amazonaws.macie2#ServiceQuotaExceededException":
            response = {
                ...(await deserializeAws_restJson1ServiceQuotaExceededExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ThrottlingException":
        case "com.amazonaws.macie2#ThrottlingException":
            response = {
                ...(await deserializeAws_restJson1ThrottlingExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ValidationException":
        case "com.amazonaws.macie2#ValidationException":
            response = {
                ...(await deserializeAws_restJson1ValidationExceptionResponse(parsedOutput, context)),
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
const deserializeAws_restJson1CreateMemberCommand = async (output, context) => {
    if (output.statusCode !== 200 && output.statusCode >= 300) {
        return deserializeAws_restJson1CreateMemberCommandError(output, context);
    }
    const contents = {
        $metadata: deserializeMetadata(output),
        arn: undefined,
    };
    const data = await parseBody(output.body, context);
    if (data.arn !== undefined && data.arn !== null) {
        contents.arn = data.arn;
    }
    return Promise.resolve(contents);
};
exports.deserializeAws_restJson1CreateMemberCommand = deserializeAws_restJson1CreateMemberCommand;
const deserializeAws_restJson1CreateMemberCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "AccessDeniedException":
        case "com.amazonaws.macie2#AccessDeniedException":
            response = {
                ...(await deserializeAws_restJson1AccessDeniedExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ConflictException":
        case "com.amazonaws.macie2#ConflictException":
            response = {
                ...(await deserializeAws_restJson1ConflictExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InternalServerException":
        case "com.amazonaws.macie2#InternalServerException":
            response = {
                ...(await deserializeAws_restJson1InternalServerExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ResourceNotFoundException":
        case "com.amazonaws.macie2#ResourceNotFoundException":
            response = {
                ...(await deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ServiceQuotaExceededException":
        case "com.amazonaws.macie2#ServiceQuotaExceededException":
            response = {
                ...(await deserializeAws_restJson1ServiceQuotaExceededExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ThrottlingException":
        case "com.amazonaws.macie2#ThrottlingException":
            response = {
                ...(await deserializeAws_restJson1ThrottlingExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ValidationException":
        case "com.amazonaws.macie2#ValidationException":
            response = {
                ...(await deserializeAws_restJson1ValidationExceptionResponse(parsedOutput, context)),
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
const deserializeAws_restJson1CreateSampleFindingsCommand = async (output, context) => {
    if (output.statusCode !== 200 && output.statusCode >= 300) {
        return deserializeAws_restJson1CreateSampleFindingsCommandError(output, context);
    }
    const contents = {
        $metadata: deserializeMetadata(output),
    };
    await collectBody(output.body, context);
    return Promise.resolve(contents);
};
exports.deserializeAws_restJson1CreateSampleFindingsCommand = deserializeAws_restJson1CreateSampleFindingsCommand;
const deserializeAws_restJson1CreateSampleFindingsCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "AccessDeniedException":
        case "com.amazonaws.macie2#AccessDeniedException":
            response = {
                ...(await deserializeAws_restJson1AccessDeniedExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ConflictException":
        case "com.amazonaws.macie2#ConflictException":
            response = {
                ...(await deserializeAws_restJson1ConflictExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InternalServerException":
        case "com.amazonaws.macie2#InternalServerException":
            response = {
                ...(await deserializeAws_restJson1InternalServerExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ResourceNotFoundException":
        case "com.amazonaws.macie2#ResourceNotFoundException":
            response = {
                ...(await deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ServiceQuotaExceededException":
        case "com.amazonaws.macie2#ServiceQuotaExceededException":
            response = {
                ...(await deserializeAws_restJson1ServiceQuotaExceededExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ThrottlingException":
        case "com.amazonaws.macie2#ThrottlingException":
            response = {
                ...(await deserializeAws_restJson1ThrottlingExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ValidationException":
        case "com.amazonaws.macie2#ValidationException":
            response = {
                ...(await deserializeAws_restJson1ValidationExceptionResponse(parsedOutput, context)),
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
const deserializeAws_restJson1DeclineInvitationsCommand = async (output, context) => {
    if (output.statusCode !== 200 && output.statusCode >= 300) {
        return deserializeAws_restJson1DeclineInvitationsCommandError(output, context);
    }
    const contents = {
        $metadata: deserializeMetadata(output),
        unprocessedAccounts: undefined,
    };
    const data = await parseBody(output.body, context);
    if (data.unprocessedAccounts !== undefined && data.unprocessedAccounts !== null) {
        contents.unprocessedAccounts = deserializeAws_restJson1__listOfUnprocessedAccount(data.unprocessedAccounts, context);
    }
    return Promise.resolve(contents);
};
exports.deserializeAws_restJson1DeclineInvitationsCommand = deserializeAws_restJson1DeclineInvitationsCommand;
const deserializeAws_restJson1DeclineInvitationsCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "AccessDeniedException":
        case "com.amazonaws.macie2#AccessDeniedException":
            response = {
                ...(await deserializeAws_restJson1AccessDeniedExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ConflictException":
        case "com.amazonaws.macie2#ConflictException":
            response = {
                ...(await deserializeAws_restJson1ConflictExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InternalServerException":
        case "com.amazonaws.macie2#InternalServerException":
            response = {
                ...(await deserializeAws_restJson1InternalServerExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ResourceNotFoundException":
        case "com.amazonaws.macie2#ResourceNotFoundException":
            response = {
                ...(await deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ServiceQuotaExceededException":
        case "com.amazonaws.macie2#ServiceQuotaExceededException":
            response = {
                ...(await deserializeAws_restJson1ServiceQuotaExceededExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ThrottlingException":
        case "com.amazonaws.macie2#ThrottlingException":
            response = {
                ...(await deserializeAws_restJson1ThrottlingExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ValidationException":
        case "com.amazonaws.macie2#ValidationException":
            response = {
                ...(await deserializeAws_restJson1ValidationExceptionResponse(parsedOutput, context)),
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
const deserializeAws_restJson1DeleteCustomDataIdentifierCommand = async (output, context) => {
    if (output.statusCode !== 200 && output.statusCode >= 300) {
        return deserializeAws_restJson1DeleteCustomDataIdentifierCommandError(output, context);
    }
    const contents = {
        $metadata: deserializeMetadata(output),
    };
    await collectBody(output.body, context);
    return Promise.resolve(contents);
};
exports.deserializeAws_restJson1DeleteCustomDataIdentifierCommand = deserializeAws_restJson1DeleteCustomDataIdentifierCommand;
const deserializeAws_restJson1DeleteCustomDataIdentifierCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "AccessDeniedException":
        case "com.amazonaws.macie2#AccessDeniedException":
            response = {
                ...(await deserializeAws_restJson1AccessDeniedExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ConflictException":
        case "com.amazonaws.macie2#ConflictException":
            response = {
                ...(await deserializeAws_restJson1ConflictExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InternalServerException":
        case "com.amazonaws.macie2#InternalServerException":
            response = {
                ...(await deserializeAws_restJson1InternalServerExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ResourceNotFoundException":
        case "com.amazonaws.macie2#ResourceNotFoundException":
            response = {
                ...(await deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ServiceQuotaExceededException":
        case "com.amazonaws.macie2#ServiceQuotaExceededException":
            response = {
                ...(await deserializeAws_restJson1ServiceQuotaExceededExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ThrottlingException":
        case "com.amazonaws.macie2#ThrottlingException":
            response = {
                ...(await deserializeAws_restJson1ThrottlingExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ValidationException":
        case "com.amazonaws.macie2#ValidationException":
            response = {
                ...(await deserializeAws_restJson1ValidationExceptionResponse(parsedOutput, context)),
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
const deserializeAws_restJson1DeleteFindingsFilterCommand = async (output, context) => {
    if (output.statusCode !== 200 && output.statusCode >= 300) {
        return deserializeAws_restJson1DeleteFindingsFilterCommandError(output, context);
    }
    const contents = {
        $metadata: deserializeMetadata(output),
    };
    await collectBody(output.body, context);
    return Promise.resolve(contents);
};
exports.deserializeAws_restJson1DeleteFindingsFilterCommand = deserializeAws_restJson1DeleteFindingsFilterCommand;
const deserializeAws_restJson1DeleteFindingsFilterCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "AccessDeniedException":
        case "com.amazonaws.macie2#AccessDeniedException":
            response = {
                ...(await deserializeAws_restJson1AccessDeniedExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ConflictException":
        case "com.amazonaws.macie2#ConflictException":
            response = {
                ...(await deserializeAws_restJson1ConflictExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InternalServerException":
        case "com.amazonaws.macie2#InternalServerException":
            response = {
                ...(await deserializeAws_restJson1InternalServerExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ResourceNotFoundException":
        case "com.amazonaws.macie2#ResourceNotFoundException":
            response = {
                ...(await deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ServiceQuotaExceededException":
        case "com.amazonaws.macie2#ServiceQuotaExceededException":
            response = {
                ...(await deserializeAws_restJson1ServiceQuotaExceededExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ThrottlingException":
        case "com.amazonaws.macie2#ThrottlingException":
            response = {
                ...(await deserializeAws_restJson1ThrottlingExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ValidationException":
        case "com.amazonaws.macie2#ValidationException":
            response = {
                ...(await deserializeAws_restJson1ValidationExceptionResponse(parsedOutput, context)),
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
const deserializeAws_restJson1DeleteInvitationsCommand = async (output, context) => {
    if (output.statusCode !== 200 && output.statusCode >= 300) {
        return deserializeAws_restJson1DeleteInvitationsCommandError(output, context);
    }
    const contents = {
        $metadata: deserializeMetadata(output),
        unprocessedAccounts: undefined,
    };
    const data = await parseBody(output.body, context);
    if (data.unprocessedAccounts !== undefined && data.unprocessedAccounts !== null) {
        contents.unprocessedAccounts = deserializeAws_restJson1__listOfUnprocessedAccount(data.unprocessedAccounts, context);
    }
    return Promise.resolve(contents);
};
exports.deserializeAws_restJson1DeleteInvitationsCommand = deserializeAws_restJson1DeleteInvitationsCommand;
const deserializeAws_restJson1DeleteInvitationsCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "AccessDeniedException":
        case "com.amazonaws.macie2#AccessDeniedException":
            response = {
                ...(await deserializeAws_restJson1AccessDeniedExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ConflictException":
        case "com.amazonaws.macie2#ConflictException":
            response = {
                ...(await deserializeAws_restJson1ConflictExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InternalServerException":
        case "com.amazonaws.macie2#InternalServerException":
            response = {
                ...(await deserializeAws_restJson1InternalServerExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ResourceNotFoundException":
        case "com.amazonaws.macie2#ResourceNotFoundException":
            response = {
                ...(await deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ServiceQuotaExceededException":
        case "com.amazonaws.macie2#ServiceQuotaExceededException":
            response = {
                ...(await deserializeAws_restJson1ServiceQuotaExceededExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ThrottlingException":
        case "com.amazonaws.macie2#ThrottlingException":
            response = {
                ...(await deserializeAws_restJson1ThrottlingExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ValidationException":
        case "com.amazonaws.macie2#ValidationException":
            response = {
                ...(await deserializeAws_restJson1ValidationExceptionResponse(parsedOutput, context)),
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
const deserializeAws_restJson1DeleteMemberCommand = async (output, context) => {
    if (output.statusCode !== 200 && output.statusCode >= 300) {
        return deserializeAws_restJson1DeleteMemberCommandError(output, context);
    }
    const contents = {
        $metadata: deserializeMetadata(output),
    };
    await collectBody(output.body, context);
    return Promise.resolve(contents);
};
exports.deserializeAws_restJson1DeleteMemberCommand = deserializeAws_restJson1DeleteMemberCommand;
const deserializeAws_restJson1DeleteMemberCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "AccessDeniedException":
        case "com.amazonaws.macie2#AccessDeniedException":
            response = {
                ...(await deserializeAws_restJson1AccessDeniedExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ConflictException":
        case "com.amazonaws.macie2#ConflictException":
            response = {
                ...(await deserializeAws_restJson1ConflictExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InternalServerException":
        case "com.amazonaws.macie2#InternalServerException":
            response = {
                ...(await deserializeAws_restJson1InternalServerExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ResourceNotFoundException":
        case "com.amazonaws.macie2#ResourceNotFoundException":
            response = {
                ...(await deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ServiceQuotaExceededException":
        case "com.amazonaws.macie2#ServiceQuotaExceededException":
            response = {
                ...(await deserializeAws_restJson1ServiceQuotaExceededExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ThrottlingException":
        case "com.amazonaws.macie2#ThrottlingException":
            response = {
                ...(await deserializeAws_restJson1ThrottlingExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ValidationException":
        case "com.amazonaws.macie2#ValidationException":
            response = {
                ...(await deserializeAws_restJson1ValidationExceptionResponse(parsedOutput, context)),
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
const deserializeAws_restJson1DescribeBucketsCommand = async (output, context) => {
    if (output.statusCode !== 200 && output.statusCode >= 300) {
        return deserializeAws_restJson1DescribeBucketsCommandError(output, context);
    }
    const contents = {
        $metadata: deserializeMetadata(output),
        buckets: undefined,
        nextToken: undefined,
    };
    const data = await parseBody(output.body, context);
    if (data.buckets !== undefined && data.buckets !== null) {
        contents.buckets = deserializeAws_restJson1__listOfBucketMetadata(data.buckets, context);
    }
    if (data.nextToken !== undefined && data.nextToken !== null) {
        contents.nextToken = data.nextToken;
    }
    return Promise.resolve(contents);
};
exports.deserializeAws_restJson1DescribeBucketsCommand = deserializeAws_restJson1DescribeBucketsCommand;
const deserializeAws_restJson1DescribeBucketsCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "AccessDeniedException":
        case "com.amazonaws.macie2#AccessDeniedException":
            response = {
                ...(await deserializeAws_restJson1AccessDeniedExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ConflictException":
        case "com.amazonaws.macie2#ConflictException":
            response = {
                ...(await deserializeAws_restJson1ConflictExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InternalServerException":
        case "com.amazonaws.macie2#InternalServerException":
            response = {
                ...(await deserializeAws_restJson1InternalServerExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ResourceNotFoundException":
        case "com.amazonaws.macie2#ResourceNotFoundException":
            response = {
                ...(await deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ServiceQuotaExceededException":
        case "com.amazonaws.macie2#ServiceQuotaExceededException":
            response = {
                ...(await deserializeAws_restJson1ServiceQuotaExceededExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ThrottlingException":
        case "com.amazonaws.macie2#ThrottlingException":
            response = {
                ...(await deserializeAws_restJson1ThrottlingExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ValidationException":
        case "com.amazonaws.macie2#ValidationException":
            response = {
                ...(await deserializeAws_restJson1ValidationExceptionResponse(parsedOutput, context)),
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
const deserializeAws_restJson1DescribeClassificationJobCommand = async (output, context) => {
    if (output.statusCode !== 200 && output.statusCode >= 300) {
        return deserializeAws_restJson1DescribeClassificationJobCommandError(output, context);
    }
    const contents = {
        $metadata: deserializeMetadata(output),
        clientToken: undefined,
        createdAt: undefined,
        customDataIdentifierIds: undefined,
        description: undefined,
        initialRun: undefined,
        jobArn: undefined,
        jobId: undefined,
        jobStatus: undefined,
        jobType: undefined,
        lastRunErrorStatus: undefined,
        lastRunTime: undefined,
        name: undefined,
        s3JobDefinition: undefined,
        samplingPercentage: undefined,
        scheduleFrequency: undefined,
        statistics: undefined,
        tags: undefined,
        userPausedDetails: undefined,
    };
    const data = await parseBody(output.body, context);
    if (data.clientToken !== undefined && data.clientToken !== null) {
        contents.clientToken = data.clientToken;
    }
    if (data.createdAt !== undefined && data.createdAt !== null) {
        contents.createdAt = new Date(data.createdAt);
    }
    if (data.customDataIdentifierIds !== undefined && data.customDataIdentifierIds !== null) {
        contents.customDataIdentifierIds = deserializeAws_restJson1__listOf__string(data.customDataIdentifierIds, context);
    }
    if (data.description !== undefined && data.description !== null) {
        contents.description = data.description;
    }
    if (data.initialRun !== undefined && data.initialRun !== null) {
        contents.initialRun = data.initialRun;
    }
    if (data.jobArn !== undefined && data.jobArn !== null) {
        contents.jobArn = data.jobArn;
    }
    if (data.jobId !== undefined && data.jobId !== null) {
        contents.jobId = data.jobId;
    }
    if (data.jobStatus !== undefined && data.jobStatus !== null) {
        contents.jobStatus = data.jobStatus;
    }
    if (data.jobType !== undefined && data.jobType !== null) {
        contents.jobType = data.jobType;
    }
    if (data.lastRunErrorStatus !== undefined && data.lastRunErrorStatus !== null) {
        contents.lastRunErrorStatus = deserializeAws_restJson1LastRunErrorStatus(data.lastRunErrorStatus, context);
    }
    if (data.lastRunTime !== undefined && data.lastRunTime !== null) {
        contents.lastRunTime = new Date(data.lastRunTime);
    }
    if (data.name !== undefined && data.name !== null) {
        contents.name = data.name;
    }
    if (data.s3JobDefinition !== undefined && data.s3JobDefinition !== null) {
        contents.s3JobDefinition = deserializeAws_restJson1S3JobDefinition(data.s3JobDefinition, context);
    }
    if (data.samplingPercentage !== undefined && data.samplingPercentage !== null) {
        contents.samplingPercentage = data.samplingPercentage;
    }
    if (data.scheduleFrequency !== undefined && data.scheduleFrequency !== null) {
        contents.scheduleFrequency = deserializeAws_restJson1JobScheduleFrequency(data.scheduleFrequency, context);
    }
    if (data.statistics !== undefined && data.statistics !== null) {
        contents.statistics = deserializeAws_restJson1Statistics(data.statistics, context);
    }
    if (data.tags !== undefined && data.tags !== null) {
        contents.tags = deserializeAws_restJson1TagMap(data.tags, context);
    }
    if (data.userPausedDetails !== undefined && data.userPausedDetails !== null) {
        contents.userPausedDetails = deserializeAws_restJson1UserPausedDetails(data.userPausedDetails, context);
    }
    return Promise.resolve(contents);
};
exports.deserializeAws_restJson1DescribeClassificationJobCommand = deserializeAws_restJson1DescribeClassificationJobCommand;
const deserializeAws_restJson1DescribeClassificationJobCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "AccessDeniedException":
        case "com.amazonaws.macie2#AccessDeniedException":
            response = {
                ...(await deserializeAws_restJson1AccessDeniedExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ConflictException":
        case "com.amazonaws.macie2#ConflictException":
            response = {
                ...(await deserializeAws_restJson1ConflictExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InternalServerException":
        case "com.amazonaws.macie2#InternalServerException":
            response = {
                ...(await deserializeAws_restJson1InternalServerExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ResourceNotFoundException":
        case "com.amazonaws.macie2#ResourceNotFoundException":
            response = {
                ...(await deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ServiceQuotaExceededException":
        case "com.amazonaws.macie2#ServiceQuotaExceededException":
            response = {
                ...(await deserializeAws_restJson1ServiceQuotaExceededExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ThrottlingException":
        case "com.amazonaws.macie2#ThrottlingException":
            response = {
                ...(await deserializeAws_restJson1ThrottlingExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ValidationException":
        case "com.amazonaws.macie2#ValidationException":
            response = {
                ...(await deserializeAws_restJson1ValidationExceptionResponse(parsedOutput, context)),
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
const deserializeAws_restJson1DescribeOrganizationConfigurationCommand = async (output, context) => {
    if (output.statusCode !== 200 && output.statusCode >= 300) {
        return deserializeAws_restJson1DescribeOrganizationConfigurationCommandError(output, context);
    }
    const contents = {
        $metadata: deserializeMetadata(output),
        autoEnable: undefined,
        maxAccountLimitReached: undefined,
    };
    const data = await parseBody(output.body, context);
    if (data.autoEnable !== undefined && data.autoEnable !== null) {
        contents.autoEnable = data.autoEnable;
    }
    if (data.maxAccountLimitReached !== undefined && data.maxAccountLimitReached !== null) {
        contents.maxAccountLimitReached = data.maxAccountLimitReached;
    }
    return Promise.resolve(contents);
};
exports.deserializeAws_restJson1DescribeOrganizationConfigurationCommand = deserializeAws_restJson1DescribeOrganizationConfigurationCommand;
const deserializeAws_restJson1DescribeOrganizationConfigurationCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "AccessDeniedException":
        case "com.amazonaws.macie2#AccessDeniedException":
            response = {
                ...(await deserializeAws_restJson1AccessDeniedExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ConflictException":
        case "com.amazonaws.macie2#ConflictException":
            response = {
                ...(await deserializeAws_restJson1ConflictExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InternalServerException":
        case "com.amazonaws.macie2#InternalServerException":
            response = {
                ...(await deserializeAws_restJson1InternalServerExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ResourceNotFoundException":
        case "com.amazonaws.macie2#ResourceNotFoundException":
            response = {
                ...(await deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ServiceQuotaExceededException":
        case "com.amazonaws.macie2#ServiceQuotaExceededException":
            response = {
                ...(await deserializeAws_restJson1ServiceQuotaExceededExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ThrottlingException":
        case "com.amazonaws.macie2#ThrottlingException":
            response = {
                ...(await deserializeAws_restJson1ThrottlingExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ValidationException":
        case "com.amazonaws.macie2#ValidationException":
            response = {
                ...(await deserializeAws_restJson1ValidationExceptionResponse(parsedOutput, context)),
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
const deserializeAws_restJson1DisableMacieCommand = async (output, context) => {
    if (output.statusCode !== 200 && output.statusCode >= 300) {
        return deserializeAws_restJson1DisableMacieCommandError(output, context);
    }
    const contents = {
        $metadata: deserializeMetadata(output),
    };
    await collectBody(output.body, context);
    return Promise.resolve(contents);
};
exports.deserializeAws_restJson1DisableMacieCommand = deserializeAws_restJson1DisableMacieCommand;
const deserializeAws_restJson1DisableMacieCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "AccessDeniedException":
        case "com.amazonaws.macie2#AccessDeniedException":
            response = {
                ...(await deserializeAws_restJson1AccessDeniedExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ConflictException":
        case "com.amazonaws.macie2#ConflictException":
            response = {
                ...(await deserializeAws_restJson1ConflictExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InternalServerException":
        case "com.amazonaws.macie2#InternalServerException":
            response = {
                ...(await deserializeAws_restJson1InternalServerExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ResourceNotFoundException":
        case "com.amazonaws.macie2#ResourceNotFoundException":
            response = {
                ...(await deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ServiceQuotaExceededException":
        case "com.amazonaws.macie2#ServiceQuotaExceededException":
            response = {
                ...(await deserializeAws_restJson1ServiceQuotaExceededExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ThrottlingException":
        case "com.amazonaws.macie2#ThrottlingException":
            response = {
                ...(await deserializeAws_restJson1ThrottlingExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ValidationException":
        case "com.amazonaws.macie2#ValidationException":
            response = {
                ...(await deserializeAws_restJson1ValidationExceptionResponse(parsedOutput, context)),
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
const deserializeAws_restJson1DisableOrganizationAdminAccountCommand = async (output, context) => {
    if (output.statusCode !== 200 && output.statusCode >= 300) {
        return deserializeAws_restJson1DisableOrganizationAdminAccountCommandError(output, context);
    }
    const contents = {
        $metadata: deserializeMetadata(output),
    };
    await collectBody(output.body, context);
    return Promise.resolve(contents);
};
exports.deserializeAws_restJson1DisableOrganizationAdminAccountCommand = deserializeAws_restJson1DisableOrganizationAdminAccountCommand;
const deserializeAws_restJson1DisableOrganizationAdminAccountCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "AccessDeniedException":
        case "com.amazonaws.macie2#AccessDeniedException":
            response = {
                ...(await deserializeAws_restJson1AccessDeniedExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ConflictException":
        case "com.amazonaws.macie2#ConflictException":
            response = {
                ...(await deserializeAws_restJson1ConflictExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InternalServerException":
        case "com.amazonaws.macie2#InternalServerException":
            response = {
                ...(await deserializeAws_restJson1InternalServerExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ResourceNotFoundException":
        case "com.amazonaws.macie2#ResourceNotFoundException":
            response = {
                ...(await deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ServiceQuotaExceededException":
        case "com.amazonaws.macie2#ServiceQuotaExceededException":
            response = {
                ...(await deserializeAws_restJson1ServiceQuotaExceededExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ThrottlingException":
        case "com.amazonaws.macie2#ThrottlingException":
            response = {
                ...(await deserializeAws_restJson1ThrottlingExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ValidationException":
        case "com.amazonaws.macie2#ValidationException":
            response = {
                ...(await deserializeAws_restJson1ValidationExceptionResponse(parsedOutput, context)),
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
const deserializeAws_restJson1DisassociateFromAdministratorAccountCommand = async (output, context) => {
    if (output.statusCode !== 200 && output.statusCode >= 300) {
        return deserializeAws_restJson1DisassociateFromAdministratorAccountCommandError(output, context);
    }
    const contents = {
        $metadata: deserializeMetadata(output),
    };
    await collectBody(output.body, context);
    return Promise.resolve(contents);
};
exports.deserializeAws_restJson1DisassociateFromAdministratorAccountCommand = deserializeAws_restJson1DisassociateFromAdministratorAccountCommand;
const deserializeAws_restJson1DisassociateFromAdministratorAccountCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "AccessDeniedException":
        case "com.amazonaws.macie2#AccessDeniedException":
            response = {
                ...(await deserializeAws_restJson1AccessDeniedExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ConflictException":
        case "com.amazonaws.macie2#ConflictException":
            response = {
                ...(await deserializeAws_restJson1ConflictExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InternalServerException":
        case "com.amazonaws.macie2#InternalServerException":
            response = {
                ...(await deserializeAws_restJson1InternalServerExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ResourceNotFoundException":
        case "com.amazonaws.macie2#ResourceNotFoundException":
            response = {
                ...(await deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ServiceQuotaExceededException":
        case "com.amazonaws.macie2#ServiceQuotaExceededException":
            response = {
                ...(await deserializeAws_restJson1ServiceQuotaExceededExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ThrottlingException":
        case "com.amazonaws.macie2#ThrottlingException":
            response = {
                ...(await deserializeAws_restJson1ThrottlingExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ValidationException":
        case "com.amazonaws.macie2#ValidationException":
            response = {
                ...(await deserializeAws_restJson1ValidationExceptionResponse(parsedOutput, context)),
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
const deserializeAws_restJson1DisassociateFromMasterAccountCommand = async (output, context) => {
    if (output.statusCode !== 200 && output.statusCode >= 300) {
        return deserializeAws_restJson1DisassociateFromMasterAccountCommandError(output, context);
    }
    const contents = {
        $metadata: deserializeMetadata(output),
    };
    await collectBody(output.body, context);
    return Promise.resolve(contents);
};
exports.deserializeAws_restJson1DisassociateFromMasterAccountCommand = deserializeAws_restJson1DisassociateFromMasterAccountCommand;
const deserializeAws_restJson1DisassociateFromMasterAccountCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "AccessDeniedException":
        case "com.amazonaws.macie2#AccessDeniedException":
            response = {
                ...(await deserializeAws_restJson1AccessDeniedExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ConflictException":
        case "com.amazonaws.macie2#ConflictException":
            response = {
                ...(await deserializeAws_restJson1ConflictExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InternalServerException":
        case "com.amazonaws.macie2#InternalServerException":
            response = {
                ...(await deserializeAws_restJson1InternalServerExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ResourceNotFoundException":
        case "com.amazonaws.macie2#ResourceNotFoundException":
            response = {
                ...(await deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ServiceQuotaExceededException":
        case "com.amazonaws.macie2#ServiceQuotaExceededException":
            response = {
                ...(await deserializeAws_restJson1ServiceQuotaExceededExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ThrottlingException":
        case "com.amazonaws.macie2#ThrottlingException":
            response = {
                ...(await deserializeAws_restJson1ThrottlingExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ValidationException":
        case "com.amazonaws.macie2#ValidationException":
            response = {
                ...(await deserializeAws_restJson1ValidationExceptionResponse(parsedOutput, context)),
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
const deserializeAws_restJson1DisassociateMemberCommand = async (output, context) => {
    if (output.statusCode !== 200 && output.statusCode >= 300) {
        return deserializeAws_restJson1DisassociateMemberCommandError(output, context);
    }
    const contents = {
        $metadata: deserializeMetadata(output),
    };
    await collectBody(output.body, context);
    return Promise.resolve(contents);
};
exports.deserializeAws_restJson1DisassociateMemberCommand = deserializeAws_restJson1DisassociateMemberCommand;
const deserializeAws_restJson1DisassociateMemberCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "AccessDeniedException":
        case "com.amazonaws.macie2#AccessDeniedException":
            response = {
                ...(await deserializeAws_restJson1AccessDeniedExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ConflictException":
        case "com.amazonaws.macie2#ConflictException":
            response = {
                ...(await deserializeAws_restJson1ConflictExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InternalServerException":
        case "com.amazonaws.macie2#InternalServerException":
            response = {
                ...(await deserializeAws_restJson1InternalServerExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ResourceNotFoundException":
        case "com.amazonaws.macie2#ResourceNotFoundException":
            response = {
                ...(await deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ServiceQuotaExceededException":
        case "com.amazonaws.macie2#ServiceQuotaExceededException":
            response = {
                ...(await deserializeAws_restJson1ServiceQuotaExceededExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ThrottlingException":
        case "com.amazonaws.macie2#ThrottlingException":
            response = {
                ...(await deserializeAws_restJson1ThrottlingExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ValidationException":
        case "com.amazonaws.macie2#ValidationException":
            response = {
                ...(await deserializeAws_restJson1ValidationExceptionResponse(parsedOutput, context)),
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
const deserializeAws_restJson1EnableMacieCommand = async (output, context) => {
    if (output.statusCode !== 200 && output.statusCode >= 300) {
        return deserializeAws_restJson1EnableMacieCommandError(output, context);
    }
    const contents = {
        $metadata: deserializeMetadata(output),
    };
    await collectBody(output.body, context);
    return Promise.resolve(contents);
};
exports.deserializeAws_restJson1EnableMacieCommand = deserializeAws_restJson1EnableMacieCommand;
const deserializeAws_restJson1EnableMacieCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "AccessDeniedException":
        case "com.amazonaws.macie2#AccessDeniedException":
            response = {
                ...(await deserializeAws_restJson1AccessDeniedExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ConflictException":
        case "com.amazonaws.macie2#ConflictException":
            response = {
                ...(await deserializeAws_restJson1ConflictExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InternalServerException":
        case "com.amazonaws.macie2#InternalServerException":
            response = {
                ...(await deserializeAws_restJson1InternalServerExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ResourceNotFoundException":
        case "com.amazonaws.macie2#ResourceNotFoundException":
            response = {
                ...(await deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ServiceQuotaExceededException":
        case "com.amazonaws.macie2#ServiceQuotaExceededException":
            response = {
                ...(await deserializeAws_restJson1ServiceQuotaExceededExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ThrottlingException":
        case "com.amazonaws.macie2#ThrottlingException":
            response = {
                ...(await deserializeAws_restJson1ThrottlingExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ValidationException":
        case "com.amazonaws.macie2#ValidationException":
            response = {
                ...(await deserializeAws_restJson1ValidationExceptionResponse(parsedOutput, context)),
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
const deserializeAws_restJson1EnableOrganizationAdminAccountCommand = async (output, context) => {
    if (output.statusCode !== 200 && output.statusCode >= 300) {
        return deserializeAws_restJson1EnableOrganizationAdminAccountCommandError(output, context);
    }
    const contents = {
        $metadata: deserializeMetadata(output),
    };
    await collectBody(output.body, context);
    return Promise.resolve(contents);
};
exports.deserializeAws_restJson1EnableOrganizationAdminAccountCommand = deserializeAws_restJson1EnableOrganizationAdminAccountCommand;
const deserializeAws_restJson1EnableOrganizationAdminAccountCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "AccessDeniedException":
        case "com.amazonaws.macie2#AccessDeniedException":
            response = {
                ...(await deserializeAws_restJson1AccessDeniedExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ConflictException":
        case "com.amazonaws.macie2#ConflictException":
            response = {
                ...(await deserializeAws_restJson1ConflictExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InternalServerException":
        case "com.amazonaws.macie2#InternalServerException":
            response = {
                ...(await deserializeAws_restJson1InternalServerExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ResourceNotFoundException":
        case "com.amazonaws.macie2#ResourceNotFoundException":
            response = {
                ...(await deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ServiceQuotaExceededException":
        case "com.amazonaws.macie2#ServiceQuotaExceededException":
            response = {
                ...(await deserializeAws_restJson1ServiceQuotaExceededExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ThrottlingException":
        case "com.amazonaws.macie2#ThrottlingException":
            response = {
                ...(await deserializeAws_restJson1ThrottlingExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ValidationException":
        case "com.amazonaws.macie2#ValidationException":
            response = {
                ...(await deserializeAws_restJson1ValidationExceptionResponse(parsedOutput, context)),
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
const deserializeAws_restJson1GetAdministratorAccountCommand = async (output, context) => {
    if (output.statusCode !== 200 && output.statusCode >= 300) {
        return deserializeAws_restJson1GetAdministratorAccountCommandError(output, context);
    }
    const contents = {
        $metadata: deserializeMetadata(output),
        administrator: undefined,
    };
    const data = await parseBody(output.body, context);
    if (data.administrator !== undefined && data.administrator !== null) {
        contents.administrator = deserializeAws_restJson1Invitation(data.administrator, context);
    }
    return Promise.resolve(contents);
};
exports.deserializeAws_restJson1GetAdministratorAccountCommand = deserializeAws_restJson1GetAdministratorAccountCommand;
const deserializeAws_restJson1GetAdministratorAccountCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "AccessDeniedException":
        case "com.amazonaws.macie2#AccessDeniedException":
            response = {
                ...(await deserializeAws_restJson1AccessDeniedExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ConflictException":
        case "com.amazonaws.macie2#ConflictException":
            response = {
                ...(await deserializeAws_restJson1ConflictExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InternalServerException":
        case "com.amazonaws.macie2#InternalServerException":
            response = {
                ...(await deserializeAws_restJson1InternalServerExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ResourceNotFoundException":
        case "com.amazonaws.macie2#ResourceNotFoundException":
            response = {
                ...(await deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ServiceQuotaExceededException":
        case "com.amazonaws.macie2#ServiceQuotaExceededException":
            response = {
                ...(await deserializeAws_restJson1ServiceQuotaExceededExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ThrottlingException":
        case "com.amazonaws.macie2#ThrottlingException":
            response = {
                ...(await deserializeAws_restJson1ThrottlingExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ValidationException":
        case "com.amazonaws.macie2#ValidationException":
            response = {
                ...(await deserializeAws_restJson1ValidationExceptionResponse(parsedOutput, context)),
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
const deserializeAws_restJson1GetBucketStatisticsCommand = async (output, context) => {
    if (output.statusCode !== 200 && output.statusCode >= 300) {
        return deserializeAws_restJson1GetBucketStatisticsCommandError(output, context);
    }
    const contents = {
        $metadata: deserializeMetadata(output),
        bucketCount: undefined,
        bucketCountByEffectivePermission: undefined,
        bucketCountByEncryptionType: undefined,
        bucketCountByObjectEncryptionRequirement: undefined,
        bucketCountBySharedAccessType: undefined,
        classifiableObjectCount: undefined,
        classifiableSizeInBytes: undefined,
        lastUpdated: undefined,
        objectCount: undefined,
        sizeInBytes: undefined,
        sizeInBytesCompressed: undefined,
        unclassifiableObjectCount: undefined,
        unclassifiableObjectSizeInBytes: undefined,
    };
    const data = await parseBody(output.body, context);
    if (data.bucketCount !== undefined && data.bucketCount !== null) {
        contents.bucketCount = data.bucketCount;
    }
    if (data.bucketCountByEffectivePermission !== undefined && data.bucketCountByEffectivePermission !== null) {
        contents.bucketCountByEffectivePermission = deserializeAws_restJson1BucketCountByEffectivePermission(data.bucketCountByEffectivePermission, context);
    }
    if (data.bucketCountByEncryptionType !== undefined && data.bucketCountByEncryptionType !== null) {
        contents.bucketCountByEncryptionType = deserializeAws_restJson1BucketCountByEncryptionType(data.bucketCountByEncryptionType, context);
    }
    if (data.bucketCountByObjectEncryptionRequirement !== undefined &&
        data.bucketCountByObjectEncryptionRequirement !== null) {
        contents.bucketCountByObjectEncryptionRequirement =
            deserializeAws_restJson1BucketCountPolicyAllowsUnencryptedObjectUploads(data.bucketCountByObjectEncryptionRequirement, context);
    }
    if (data.bucketCountBySharedAccessType !== undefined && data.bucketCountBySharedAccessType !== null) {
        contents.bucketCountBySharedAccessType = deserializeAws_restJson1BucketCountBySharedAccessType(data.bucketCountBySharedAccessType, context);
    }
    if (data.classifiableObjectCount !== undefined && data.classifiableObjectCount !== null) {
        contents.classifiableObjectCount = data.classifiableObjectCount;
    }
    if (data.classifiableSizeInBytes !== undefined && data.classifiableSizeInBytes !== null) {
        contents.classifiableSizeInBytes = data.classifiableSizeInBytes;
    }
    if (data.lastUpdated !== undefined && data.lastUpdated !== null) {
        contents.lastUpdated = new Date(data.lastUpdated);
    }
    if (data.objectCount !== undefined && data.objectCount !== null) {
        contents.objectCount = data.objectCount;
    }
    if (data.sizeInBytes !== undefined && data.sizeInBytes !== null) {
        contents.sizeInBytes = data.sizeInBytes;
    }
    if (data.sizeInBytesCompressed !== undefined && data.sizeInBytesCompressed !== null) {
        contents.sizeInBytesCompressed = data.sizeInBytesCompressed;
    }
    if (data.unclassifiableObjectCount !== undefined && data.unclassifiableObjectCount !== null) {
        contents.unclassifiableObjectCount = deserializeAws_restJson1ObjectLevelStatistics(data.unclassifiableObjectCount, context);
    }
    if (data.unclassifiableObjectSizeInBytes !== undefined && data.unclassifiableObjectSizeInBytes !== null) {
        contents.unclassifiableObjectSizeInBytes = deserializeAws_restJson1ObjectLevelStatistics(data.unclassifiableObjectSizeInBytes, context);
    }
    return Promise.resolve(contents);
};
exports.deserializeAws_restJson1GetBucketStatisticsCommand = deserializeAws_restJson1GetBucketStatisticsCommand;
const deserializeAws_restJson1GetBucketStatisticsCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "AccessDeniedException":
        case "com.amazonaws.macie2#AccessDeniedException":
            response = {
                ...(await deserializeAws_restJson1AccessDeniedExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ConflictException":
        case "com.amazonaws.macie2#ConflictException":
            response = {
                ...(await deserializeAws_restJson1ConflictExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InternalServerException":
        case "com.amazonaws.macie2#InternalServerException":
            response = {
                ...(await deserializeAws_restJson1InternalServerExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ResourceNotFoundException":
        case "com.amazonaws.macie2#ResourceNotFoundException":
            response = {
                ...(await deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ServiceQuotaExceededException":
        case "com.amazonaws.macie2#ServiceQuotaExceededException":
            response = {
                ...(await deserializeAws_restJson1ServiceQuotaExceededExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ThrottlingException":
        case "com.amazonaws.macie2#ThrottlingException":
            response = {
                ...(await deserializeAws_restJson1ThrottlingExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ValidationException":
        case "com.amazonaws.macie2#ValidationException":
            response = {
                ...(await deserializeAws_restJson1ValidationExceptionResponse(parsedOutput, context)),
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
const deserializeAws_restJson1GetClassificationExportConfigurationCommand = async (output, context) => {
    if (output.statusCode !== 200 && output.statusCode >= 300) {
        return deserializeAws_restJson1GetClassificationExportConfigurationCommandError(output, context);
    }
    const contents = {
        $metadata: deserializeMetadata(output),
        configuration: undefined,
    };
    const data = await parseBody(output.body, context);
    if (data.configuration !== undefined && data.configuration !== null) {
        contents.configuration = deserializeAws_restJson1ClassificationExportConfiguration(data.configuration, context);
    }
    return Promise.resolve(contents);
};
exports.deserializeAws_restJson1GetClassificationExportConfigurationCommand = deserializeAws_restJson1GetClassificationExportConfigurationCommand;
const deserializeAws_restJson1GetClassificationExportConfigurationCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "AccessDeniedException":
        case "com.amazonaws.macie2#AccessDeniedException":
            response = {
                ...(await deserializeAws_restJson1AccessDeniedExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ConflictException":
        case "com.amazonaws.macie2#ConflictException":
            response = {
                ...(await deserializeAws_restJson1ConflictExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InternalServerException":
        case "com.amazonaws.macie2#InternalServerException":
            response = {
                ...(await deserializeAws_restJson1InternalServerExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ResourceNotFoundException":
        case "com.amazonaws.macie2#ResourceNotFoundException":
            response = {
                ...(await deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ServiceQuotaExceededException":
        case "com.amazonaws.macie2#ServiceQuotaExceededException":
            response = {
                ...(await deserializeAws_restJson1ServiceQuotaExceededExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ThrottlingException":
        case "com.amazonaws.macie2#ThrottlingException":
            response = {
                ...(await deserializeAws_restJson1ThrottlingExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ValidationException":
        case "com.amazonaws.macie2#ValidationException":
            response = {
                ...(await deserializeAws_restJson1ValidationExceptionResponse(parsedOutput, context)),
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
const deserializeAws_restJson1GetCustomDataIdentifierCommand = async (output, context) => {
    if (output.statusCode !== 200 && output.statusCode >= 300) {
        return deserializeAws_restJson1GetCustomDataIdentifierCommandError(output, context);
    }
    const contents = {
        $metadata: deserializeMetadata(output),
        arn: undefined,
        createdAt: undefined,
        deleted: undefined,
        description: undefined,
        id: undefined,
        ignoreWords: undefined,
        keywords: undefined,
        maximumMatchDistance: undefined,
        name: undefined,
        regex: undefined,
        tags: undefined,
    };
    const data = await parseBody(output.body, context);
    if (data.arn !== undefined && data.arn !== null) {
        contents.arn = data.arn;
    }
    if (data.createdAt !== undefined && data.createdAt !== null) {
        contents.createdAt = new Date(data.createdAt);
    }
    if (data.deleted !== undefined && data.deleted !== null) {
        contents.deleted = data.deleted;
    }
    if (data.description !== undefined && data.description !== null) {
        contents.description = data.description;
    }
    if (data.id !== undefined && data.id !== null) {
        contents.id = data.id;
    }
    if (data.ignoreWords !== undefined && data.ignoreWords !== null) {
        contents.ignoreWords = deserializeAws_restJson1__listOf__string(data.ignoreWords, context);
    }
    if (data.keywords !== undefined && data.keywords !== null) {
        contents.keywords = deserializeAws_restJson1__listOf__string(data.keywords, context);
    }
    if (data.maximumMatchDistance !== undefined && data.maximumMatchDistance !== null) {
        contents.maximumMatchDistance = data.maximumMatchDistance;
    }
    if (data.name !== undefined && data.name !== null) {
        contents.name = data.name;
    }
    if (data.regex !== undefined && data.regex !== null) {
        contents.regex = data.regex;
    }
    if (data.tags !== undefined && data.tags !== null) {
        contents.tags = deserializeAws_restJson1TagMap(data.tags, context);
    }
    return Promise.resolve(contents);
};
exports.deserializeAws_restJson1GetCustomDataIdentifierCommand = deserializeAws_restJson1GetCustomDataIdentifierCommand;
const deserializeAws_restJson1GetCustomDataIdentifierCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "AccessDeniedException":
        case "com.amazonaws.macie2#AccessDeniedException":
            response = {
                ...(await deserializeAws_restJson1AccessDeniedExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ConflictException":
        case "com.amazonaws.macie2#ConflictException":
            response = {
                ...(await deserializeAws_restJson1ConflictExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InternalServerException":
        case "com.amazonaws.macie2#InternalServerException":
            response = {
                ...(await deserializeAws_restJson1InternalServerExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ResourceNotFoundException":
        case "com.amazonaws.macie2#ResourceNotFoundException":
            response = {
                ...(await deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ServiceQuotaExceededException":
        case "com.amazonaws.macie2#ServiceQuotaExceededException":
            response = {
                ...(await deserializeAws_restJson1ServiceQuotaExceededExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ThrottlingException":
        case "com.amazonaws.macie2#ThrottlingException":
            response = {
                ...(await deserializeAws_restJson1ThrottlingExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ValidationException":
        case "com.amazonaws.macie2#ValidationException":
            response = {
                ...(await deserializeAws_restJson1ValidationExceptionResponse(parsedOutput, context)),
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
const deserializeAws_restJson1GetFindingsCommand = async (output, context) => {
    if (output.statusCode !== 200 && output.statusCode >= 300) {
        return deserializeAws_restJson1GetFindingsCommandError(output, context);
    }
    const contents = {
        $metadata: deserializeMetadata(output),
        findings: undefined,
    };
    const data = await parseBody(output.body, context);
    if (data.findings !== undefined && data.findings !== null) {
        contents.findings = deserializeAws_restJson1__listOfFinding(data.findings, context);
    }
    return Promise.resolve(contents);
};
exports.deserializeAws_restJson1GetFindingsCommand = deserializeAws_restJson1GetFindingsCommand;
const deserializeAws_restJson1GetFindingsCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "AccessDeniedException":
        case "com.amazonaws.macie2#AccessDeniedException":
            response = {
                ...(await deserializeAws_restJson1AccessDeniedExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ConflictException":
        case "com.amazonaws.macie2#ConflictException":
            response = {
                ...(await deserializeAws_restJson1ConflictExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InternalServerException":
        case "com.amazonaws.macie2#InternalServerException":
            response = {
                ...(await deserializeAws_restJson1InternalServerExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ResourceNotFoundException":
        case "com.amazonaws.macie2#ResourceNotFoundException":
            response = {
                ...(await deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ServiceQuotaExceededException":
        case "com.amazonaws.macie2#ServiceQuotaExceededException":
            response = {
                ...(await deserializeAws_restJson1ServiceQuotaExceededExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ThrottlingException":
        case "com.amazonaws.macie2#ThrottlingException":
            response = {
                ...(await deserializeAws_restJson1ThrottlingExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ValidationException":
        case "com.amazonaws.macie2#ValidationException":
            response = {
                ...(await deserializeAws_restJson1ValidationExceptionResponse(parsedOutput, context)),
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
const deserializeAws_restJson1GetFindingsFilterCommand = async (output, context) => {
    if (output.statusCode !== 200 && output.statusCode >= 300) {
        return deserializeAws_restJson1GetFindingsFilterCommandError(output, context);
    }
    const contents = {
        $metadata: deserializeMetadata(output),
        action: undefined,
        arn: undefined,
        description: undefined,
        findingCriteria: undefined,
        id: undefined,
        name: undefined,
        position: undefined,
        tags: undefined,
    };
    const data = await parseBody(output.body, context);
    if (data.action !== undefined && data.action !== null) {
        contents.action = data.action;
    }
    if (data.arn !== undefined && data.arn !== null) {
        contents.arn = data.arn;
    }
    if (data.description !== undefined && data.description !== null) {
        contents.description = data.description;
    }
    if (data.findingCriteria !== undefined && data.findingCriteria !== null) {
        contents.findingCriteria = deserializeAws_restJson1FindingCriteria(data.findingCriteria, context);
    }
    if (data.id !== undefined && data.id !== null) {
        contents.id = data.id;
    }
    if (data.name !== undefined && data.name !== null) {
        contents.name = data.name;
    }
    if (data.position !== undefined && data.position !== null) {
        contents.position = data.position;
    }
    if (data.tags !== undefined && data.tags !== null) {
        contents.tags = deserializeAws_restJson1TagMap(data.tags, context);
    }
    return Promise.resolve(contents);
};
exports.deserializeAws_restJson1GetFindingsFilterCommand = deserializeAws_restJson1GetFindingsFilterCommand;
const deserializeAws_restJson1GetFindingsFilterCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "AccessDeniedException":
        case "com.amazonaws.macie2#AccessDeniedException":
            response = {
                ...(await deserializeAws_restJson1AccessDeniedExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ConflictException":
        case "com.amazonaws.macie2#ConflictException":
            response = {
                ...(await deserializeAws_restJson1ConflictExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InternalServerException":
        case "com.amazonaws.macie2#InternalServerException":
            response = {
                ...(await deserializeAws_restJson1InternalServerExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ResourceNotFoundException":
        case "com.amazonaws.macie2#ResourceNotFoundException":
            response = {
                ...(await deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ServiceQuotaExceededException":
        case "com.amazonaws.macie2#ServiceQuotaExceededException":
            response = {
                ...(await deserializeAws_restJson1ServiceQuotaExceededExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ThrottlingException":
        case "com.amazonaws.macie2#ThrottlingException":
            response = {
                ...(await deserializeAws_restJson1ThrottlingExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ValidationException":
        case "com.amazonaws.macie2#ValidationException":
            response = {
                ...(await deserializeAws_restJson1ValidationExceptionResponse(parsedOutput, context)),
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
const deserializeAws_restJson1GetFindingsPublicationConfigurationCommand = async (output, context) => {
    if (output.statusCode !== 200 && output.statusCode >= 300) {
        return deserializeAws_restJson1GetFindingsPublicationConfigurationCommandError(output, context);
    }
    const contents = {
        $metadata: deserializeMetadata(output),
        securityHubConfiguration: undefined,
    };
    const data = await parseBody(output.body, context);
    if (data.securityHubConfiguration !== undefined && data.securityHubConfiguration !== null) {
        contents.securityHubConfiguration = deserializeAws_restJson1SecurityHubConfiguration(data.securityHubConfiguration, context);
    }
    return Promise.resolve(contents);
};
exports.deserializeAws_restJson1GetFindingsPublicationConfigurationCommand = deserializeAws_restJson1GetFindingsPublicationConfigurationCommand;
const deserializeAws_restJson1GetFindingsPublicationConfigurationCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "AccessDeniedException":
        case "com.amazonaws.macie2#AccessDeniedException":
            response = {
                ...(await deserializeAws_restJson1AccessDeniedExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ConflictException":
        case "com.amazonaws.macie2#ConflictException":
            response = {
                ...(await deserializeAws_restJson1ConflictExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InternalServerException":
        case "com.amazonaws.macie2#InternalServerException":
            response = {
                ...(await deserializeAws_restJson1InternalServerExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ResourceNotFoundException":
        case "com.amazonaws.macie2#ResourceNotFoundException":
            response = {
                ...(await deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ServiceQuotaExceededException":
        case "com.amazonaws.macie2#ServiceQuotaExceededException":
            response = {
                ...(await deserializeAws_restJson1ServiceQuotaExceededExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ThrottlingException":
        case "com.amazonaws.macie2#ThrottlingException":
            response = {
                ...(await deserializeAws_restJson1ThrottlingExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ValidationException":
        case "com.amazonaws.macie2#ValidationException":
            response = {
                ...(await deserializeAws_restJson1ValidationExceptionResponse(parsedOutput, context)),
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
const deserializeAws_restJson1GetFindingStatisticsCommand = async (output, context) => {
    if (output.statusCode !== 200 && output.statusCode >= 300) {
        return deserializeAws_restJson1GetFindingStatisticsCommandError(output, context);
    }
    const contents = {
        $metadata: deserializeMetadata(output),
        countsByGroup: undefined,
    };
    const data = await parseBody(output.body, context);
    if (data.countsByGroup !== undefined && data.countsByGroup !== null) {
        contents.countsByGroup = deserializeAws_restJson1__listOfGroupCount(data.countsByGroup, context);
    }
    return Promise.resolve(contents);
};
exports.deserializeAws_restJson1GetFindingStatisticsCommand = deserializeAws_restJson1GetFindingStatisticsCommand;
const deserializeAws_restJson1GetFindingStatisticsCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "AccessDeniedException":
        case "com.amazonaws.macie2#AccessDeniedException":
            response = {
                ...(await deserializeAws_restJson1AccessDeniedExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ConflictException":
        case "com.amazonaws.macie2#ConflictException":
            response = {
                ...(await deserializeAws_restJson1ConflictExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InternalServerException":
        case "com.amazonaws.macie2#InternalServerException":
            response = {
                ...(await deserializeAws_restJson1InternalServerExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ResourceNotFoundException":
        case "com.amazonaws.macie2#ResourceNotFoundException":
            response = {
                ...(await deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ServiceQuotaExceededException":
        case "com.amazonaws.macie2#ServiceQuotaExceededException":
            response = {
                ...(await deserializeAws_restJson1ServiceQuotaExceededExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ThrottlingException":
        case "com.amazonaws.macie2#ThrottlingException":
            response = {
                ...(await deserializeAws_restJson1ThrottlingExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ValidationException":
        case "com.amazonaws.macie2#ValidationException":
            response = {
                ...(await deserializeAws_restJson1ValidationExceptionResponse(parsedOutput, context)),
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
const deserializeAws_restJson1GetInvitationsCountCommand = async (output, context) => {
    if (output.statusCode !== 200 && output.statusCode >= 300) {
        return deserializeAws_restJson1GetInvitationsCountCommandError(output, context);
    }
    const contents = {
        $metadata: deserializeMetadata(output),
        invitationsCount: undefined,
    };
    const data = await parseBody(output.body, context);
    if (data.invitationsCount !== undefined && data.invitationsCount !== null) {
        contents.invitationsCount = data.invitationsCount;
    }
    return Promise.resolve(contents);
};
exports.deserializeAws_restJson1GetInvitationsCountCommand = deserializeAws_restJson1GetInvitationsCountCommand;
const deserializeAws_restJson1GetInvitationsCountCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "AccessDeniedException":
        case "com.amazonaws.macie2#AccessDeniedException":
            response = {
                ...(await deserializeAws_restJson1AccessDeniedExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ConflictException":
        case "com.amazonaws.macie2#ConflictException":
            response = {
                ...(await deserializeAws_restJson1ConflictExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InternalServerException":
        case "com.amazonaws.macie2#InternalServerException":
            response = {
                ...(await deserializeAws_restJson1InternalServerExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ResourceNotFoundException":
        case "com.amazonaws.macie2#ResourceNotFoundException":
            response = {
                ...(await deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ServiceQuotaExceededException":
        case "com.amazonaws.macie2#ServiceQuotaExceededException":
            response = {
                ...(await deserializeAws_restJson1ServiceQuotaExceededExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ThrottlingException":
        case "com.amazonaws.macie2#ThrottlingException":
            response = {
                ...(await deserializeAws_restJson1ThrottlingExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ValidationException":
        case "com.amazonaws.macie2#ValidationException":
            response = {
                ...(await deserializeAws_restJson1ValidationExceptionResponse(parsedOutput, context)),
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
const deserializeAws_restJson1GetMacieSessionCommand = async (output, context) => {
    if (output.statusCode !== 200 && output.statusCode >= 300) {
        return deserializeAws_restJson1GetMacieSessionCommandError(output, context);
    }
    const contents = {
        $metadata: deserializeMetadata(output),
        createdAt: undefined,
        findingPublishingFrequency: undefined,
        serviceRole: undefined,
        status: undefined,
        updatedAt: undefined,
    };
    const data = await parseBody(output.body, context);
    if (data.createdAt !== undefined && data.createdAt !== null) {
        contents.createdAt = new Date(data.createdAt);
    }
    if (data.findingPublishingFrequency !== undefined && data.findingPublishingFrequency !== null) {
        contents.findingPublishingFrequency = data.findingPublishingFrequency;
    }
    if (data.serviceRole !== undefined && data.serviceRole !== null) {
        contents.serviceRole = data.serviceRole;
    }
    if (data.status !== undefined && data.status !== null) {
        contents.status = data.status;
    }
    if (data.updatedAt !== undefined && data.updatedAt !== null) {
        contents.updatedAt = new Date(data.updatedAt);
    }
    return Promise.resolve(contents);
};
exports.deserializeAws_restJson1GetMacieSessionCommand = deserializeAws_restJson1GetMacieSessionCommand;
const deserializeAws_restJson1GetMacieSessionCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "AccessDeniedException":
        case "com.amazonaws.macie2#AccessDeniedException":
            response = {
                ...(await deserializeAws_restJson1AccessDeniedExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ConflictException":
        case "com.amazonaws.macie2#ConflictException":
            response = {
                ...(await deserializeAws_restJson1ConflictExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InternalServerException":
        case "com.amazonaws.macie2#InternalServerException":
            response = {
                ...(await deserializeAws_restJson1InternalServerExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ResourceNotFoundException":
        case "com.amazonaws.macie2#ResourceNotFoundException":
            response = {
                ...(await deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ServiceQuotaExceededException":
        case "com.amazonaws.macie2#ServiceQuotaExceededException":
            response = {
                ...(await deserializeAws_restJson1ServiceQuotaExceededExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ThrottlingException":
        case "com.amazonaws.macie2#ThrottlingException":
            response = {
                ...(await deserializeAws_restJson1ThrottlingExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ValidationException":
        case "com.amazonaws.macie2#ValidationException":
            response = {
                ...(await deserializeAws_restJson1ValidationExceptionResponse(parsedOutput, context)),
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
const deserializeAws_restJson1GetMasterAccountCommand = async (output, context) => {
    if (output.statusCode !== 200 && output.statusCode >= 300) {
        return deserializeAws_restJson1GetMasterAccountCommandError(output, context);
    }
    const contents = {
        $metadata: deserializeMetadata(output),
        master: undefined,
    };
    const data = await parseBody(output.body, context);
    if (data.master !== undefined && data.master !== null) {
        contents.master = deserializeAws_restJson1Invitation(data.master, context);
    }
    return Promise.resolve(contents);
};
exports.deserializeAws_restJson1GetMasterAccountCommand = deserializeAws_restJson1GetMasterAccountCommand;
const deserializeAws_restJson1GetMasterAccountCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "AccessDeniedException":
        case "com.amazonaws.macie2#AccessDeniedException":
            response = {
                ...(await deserializeAws_restJson1AccessDeniedExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ConflictException":
        case "com.amazonaws.macie2#ConflictException":
            response = {
                ...(await deserializeAws_restJson1ConflictExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InternalServerException":
        case "com.amazonaws.macie2#InternalServerException":
            response = {
                ...(await deserializeAws_restJson1InternalServerExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ResourceNotFoundException":
        case "com.amazonaws.macie2#ResourceNotFoundException":
            response = {
                ...(await deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ServiceQuotaExceededException":
        case "com.amazonaws.macie2#ServiceQuotaExceededException":
            response = {
                ...(await deserializeAws_restJson1ServiceQuotaExceededExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ThrottlingException":
        case "com.amazonaws.macie2#ThrottlingException":
            response = {
                ...(await deserializeAws_restJson1ThrottlingExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ValidationException":
        case "com.amazonaws.macie2#ValidationException":
            response = {
                ...(await deserializeAws_restJson1ValidationExceptionResponse(parsedOutput, context)),
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
const deserializeAws_restJson1GetMemberCommand = async (output, context) => {
    if (output.statusCode !== 200 && output.statusCode >= 300) {
        return deserializeAws_restJson1GetMemberCommandError(output, context);
    }
    const contents = {
        $metadata: deserializeMetadata(output),
        accountId: undefined,
        administratorAccountId: undefined,
        arn: undefined,
        email: undefined,
        invitedAt: undefined,
        masterAccountId: undefined,
        relationshipStatus: undefined,
        tags: undefined,
        updatedAt: undefined,
    };
    const data = await parseBody(output.body, context);
    if (data.accountId !== undefined && data.accountId !== null) {
        contents.accountId = data.accountId;
    }
    if (data.administratorAccountId !== undefined && data.administratorAccountId !== null) {
        contents.administratorAccountId = data.administratorAccountId;
    }
    if (data.arn !== undefined && data.arn !== null) {
        contents.arn = data.arn;
    }
    if (data.email !== undefined && data.email !== null) {
        contents.email = data.email;
    }
    if (data.invitedAt !== undefined && data.invitedAt !== null) {
        contents.invitedAt = new Date(data.invitedAt);
    }
    if (data.masterAccountId !== undefined && data.masterAccountId !== null) {
        contents.masterAccountId = data.masterAccountId;
    }
    if (data.relationshipStatus !== undefined && data.relationshipStatus !== null) {
        contents.relationshipStatus = data.relationshipStatus;
    }
    if (data.tags !== undefined && data.tags !== null) {
        contents.tags = deserializeAws_restJson1TagMap(data.tags, context);
    }
    if (data.updatedAt !== undefined && data.updatedAt !== null) {
        contents.updatedAt = new Date(data.updatedAt);
    }
    return Promise.resolve(contents);
};
exports.deserializeAws_restJson1GetMemberCommand = deserializeAws_restJson1GetMemberCommand;
const deserializeAws_restJson1GetMemberCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "AccessDeniedException":
        case "com.amazonaws.macie2#AccessDeniedException":
            response = {
                ...(await deserializeAws_restJson1AccessDeniedExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ConflictException":
        case "com.amazonaws.macie2#ConflictException":
            response = {
                ...(await deserializeAws_restJson1ConflictExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InternalServerException":
        case "com.amazonaws.macie2#InternalServerException":
            response = {
                ...(await deserializeAws_restJson1InternalServerExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ResourceNotFoundException":
        case "com.amazonaws.macie2#ResourceNotFoundException":
            response = {
                ...(await deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ServiceQuotaExceededException":
        case "com.amazonaws.macie2#ServiceQuotaExceededException":
            response = {
                ...(await deserializeAws_restJson1ServiceQuotaExceededExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ThrottlingException":
        case "com.amazonaws.macie2#ThrottlingException":
            response = {
                ...(await deserializeAws_restJson1ThrottlingExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ValidationException":
        case "com.amazonaws.macie2#ValidationException":
            response = {
                ...(await deserializeAws_restJson1ValidationExceptionResponse(parsedOutput, context)),
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
const deserializeAws_restJson1GetUsageStatisticsCommand = async (output, context) => {
    if (output.statusCode !== 200 && output.statusCode >= 300) {
        return deserializeAws_restJson1GetUsageStatisticsCommandError(output, context);
    }
    const contents = {
        $metadata: deserializeMetadata(output),
        nextToken: undefined,
        records: undefined,
        timeRange: undefined,
    };
    const data = await parseBody(output.body, context);
    if (data.nextToken !== undefined && data.nextToken !== null) {
        contents.nextToken = data.nextToken;
    }
    if (data.records !== undefined && data.records !== null) {
        contents.records = deserializeAws_restJson1__listOfUsageRecord(data.records, context);
    }
    if (data.timeRange !== undefined && data.timeRange !== null) {
        contents.timeRange = data.timeRange;
    }
    return Promise.resolve(contents);
};
exports.deserializeAws_restJson1GetUsageStatisticsCommand = deserializeAws_restJson1GetUsageStatisticsCommand;
const deserializeAws_restJson1GetUsageStatisticsCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "AccessDeniedException":
        case "com.amazonaws.macie2#AccessDeniedException":
            response = {
                ...(await deserializeAws_restJson1AccessDeniedExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ConflictException":
        case "com.amazonaws.macie2#ConflictException":
            response = {
                ...(await deserializeAws_restJson1ConflictExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InternalServerException":
        case "com.amazonaws.macie2#InternalServerException":
            response = {
                ...(await deserializeAws_restJson1InternalServerExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ResourceNotFoundException":
        case "com.amazonaws.macie2#ResourceNotFoundException":
            response = {
                ...(await deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ServiceQuotaExceededException":
        case "com.amazonaws.macie2#ServiceQuotaExceededException":
            response = {
                ...(await deserializeAws_restJson1ServiceQuotaExceededExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ThrottlingException":
        case "com.amazonaws.macie2#ThrottlingException":
            response = {
                ...(await deserializeAws_restJson1ThrottlingExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ValidationException":
        case "com.amazonaws.macie2#ValidationException":
            response = {
                ...(await deserializeAws_restJson1ValidationExceptionResponse(parsedOutput, context)),
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
const deserializeAws_restJson1GetUsageTotalsCommand = async (output, context) => {
    if (output.statusCode !== 200 && output.statusCode >= 300) {
        return deserializeAws_restJson1GetUsageTotalsCommandError(output, context);
    }
    const contents = {
        $metadata: deserializeMetadata(output),
        timeRange: undefined,
        usageTotals: undefined,
    };
    const data = await parseBody(output.body, context);
    if (data.timeRange !== undefined && data.timeRange !== null) {
        contents.timeRange = data.timeRange;
    }
    if (data.usageTotals !== undefined && data.usageTotals !== null) {
        contents.usageTotals = deserializeAws_restJson1__listOfUsageTotal(data.usageTotals, context);
    }
    return Promise.resolve(contents);
};
exports.deserializeAws_restJson1GetUsageTotalsCommand = deserializeAws_restJson1GetUsageTotalsCommand;
const deserializeAws_restJson1GetUsageTotalsCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "AccessDeniedException":
        case "com.amazonaws.macie2#AccessDeniedException":
            response = {
                ...(await deserializeAws_restJson1AccessDeniedExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ConflictException":
        case "com.amazonaws.macie2#ConflictException":
            response = {
                ...(await deserializeAws_restJson1ConflictExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InternalServerException":
        case "com.amazonaws.macie2#InternalServerException":
            response = {
                ...(await deserializeAws_restJson1InternalServerExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ResourceNotFoundException":
        case "com.amazonaws.macie2#ResourceNotFoundException":
            response = {
                ...(await deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ServiceQuotaExceededException":
        case "com.amazonaws.macie2#ServiceQuotaExceededException":
            response = {
                ...(await deserializeAws_restJson1ServiceQuotaExceededExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ThrottlingException":
        case "com.amazonaws.macie2#ThrottlingException":
            response = {
                ...(await deserializeAws_restJson1ThrottlingExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ValidationException":
        case "com.amazonaws.macie2#ValidationException":
            response = {
                ...(await deserializeAws_restJson1ValidationExceptionResponse(parsedOutput, context)),
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
const deserializeAws_restJson1ListClassificationJobsCommand = async (output, context) => {
    if (output.statusCode !== 200 && output.statusCode >= 300) {
        return deserializeAws_restJson1ListClassificationJobsCommandError(output, context);
    }
    const contents = {
        $metadata: deserializeMetadata(output),
        items: undefined,
        nextToken: undefined,
    };
    const data = await parseBody(output.body, context);
    if (data.items !== undefined && data.items !== null) {
        contents.items = deserializeAws_restJson1__listOfJobSummary(data.items, context);
    }
    if (data.nextToken !== undefined && data.nextToken !== null) {
        contents.nextToken = data.nextToken;
    }
    return Promise.resolve(contents);
};
exports.deserializeAws_restJson1ListClassificationJobsCommand = deserializeAws_restJson1ListClassificationJobsCommand;
const deserializeAws_restJson1ListClassificationJobsCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "AccessDeniedException":
        case "com.amazonaws.macie2#AccessDeniedException":
            response = {
                ...(await deserializeAws_restJson1AccessDeniedExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ConflictException":
        case "com.amazonaws.macie2#ConflictException":
            response = {
                ...(await deserializeAws_restJson1ConflictExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InternalServerException":
        case "com.amazonaws.macie2#InternalServerException":
            response = {
                ...(await deserializeAws_restJson1InternalServerExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ResourceNotFoundException":
        case "com.amazonaws.macie2#ResourceNotFoundException":
            response = {
                ...(await deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ServiceQuotaExceededException":
        case "com.amazonaws.macie2#ServiceQuotaExceededException":
            response = {
                ...(await deserializeAws_restJson1ServiceQuotaExceededExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ThrottlingException":
        case "com.amazonaws.macie2#ThrottlingException":
            response = {
                ...(await deserializeAws_restJson1ThrottlingExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ValidationException":
        case "com.amazonaws.macie2#ValidationException":
            response = {
                ...(await deserializeAws_restJson1ValidationExceptionResponse(parsedOutput, context)),
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
const deserializeAws_restJson1ListCustomDataIdentifiersCommand = async (output, context) => {
    if (output.statusCode !== 200 && output.statusCode >= 300) {
        return deserializeAws_restJson1ListCustomDataIdentifiersCommandError(output, context);
    }
    const contents = {
        $metadata: deserializeMetadata(output),
        items: undefined,
        nextToken: undefined,
    };
    const data = await parseBody(output.body, context);
    if (data.items !== undefined && data.items !== null) {
        contents.items = deserializeAws_restJson1__listOfCustomDataIdentifierSummary(data.items, context);
    }
    if (data.nextToken !== undefined && data.nextToken !== null) {
        contents.nextToken = data.nextToken;
    }
    return Promise.resolve(contents);
};
exports.deserializeAws_restJson1ListCustomDataIdentifiersCommand = deserializeAws_restJson1ListCustomDataIdentifiersCommand;
const deserializeAws_restJson1ListCustomDataIdentifiersCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "AccessDeniedException":
        case "com.amazonaws.macie2#AccessDeniedException":
            response = {
                ...(await deserializeAws_restJson1AccessDeniedExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ConflictException":
        case "com.amazonaws.macie2#ConflictException":
            response = {
                ...(await deserializeAws_restJson1ConflictExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InternalServerException":
        case "com.amazonaws.macie2#InternalServerException":
            response = {
                ...(await deserializeAws_restJson1InternalServerExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ResourceNotFoundException":
        case "com.amazonaws.macie2#ResourceNotFoundException":
            response = {
                ...(await deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ServiceQuotaExceededException":
        case "com.amazonaws.macie2#ServiceQuotaExceededException":
            response = {
                ...(await deserializeAws_restJson1ServiceQuotaExceededExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ThrottlingException":
        case "com.amazonaws.macie2#ThrottlingException":
            response = {
                ...(await deserializeAws_restJson1ThrottlingExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ValidationException":
        case "com.amazonaws.macie2#ValidationException":
            response = {
                ...(await deserializeAws_restJson1ValidationExceptionResponse(parsedOutput, context)),
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
const deserializeAws_restJson1ListFindingsCommand = async (output, context) => {
    if (output.statusCode !== 200 && output.statusCode >= 300) {
        return deserializeAws_restJson1ListFindingsCommandError(output, context);
    }
    const contents = {
        $metadata: deserializeMetadata(output),
        findingIds: undefined,
        nextToken: undefined,
    };
    const data = await parseBody(output.body, context);
    if (data.findingIds !== undefined && data.findingIds !== null) {
        contents.findingIds = deserializeAws_restJson1__listOf__string(data.findingIds, context);
    }
    if (data.nextToken !== undefined && data.nextToken !== null) {
        contents.nextToken = data.nextToken;
    }
    return Promise.resolve(contents);
};
exports.deserializeAws_restJson1ListFindingsCommand = deserializeAws_restJson1ListFindingsCommand;
const deserializeAws_restJson1ListFindingsCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "AccessDeniedException":
        case "com.amazonaws.macie2#AccessDeniedException":
            response = {
                ...(await deserializeAws_restJson1AccessDeniedExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ConflictException":
        case "com.amazonaws.macie2#ConflictException":
            response = {
                ...(await deserializeAws_restJson1ConflictExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InternalServerException":
        case "com.amazonaws.macie2#InternalServerException":
            response = {
                ...(await deserializeAws_restJson1InternalServerExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ResourceNotFoundException":
        case "com.amazonaws.macie2#ResourceNotFoundException":
            response = {
                ...(await deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ServiceQuotaExceededException":
        case "com.amazonaws.macie2#ServiceQuotaExceededException":
            response = {
                ...(await deserializeAws_restJson1ServiceQuotaExceededExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ThrottlingException":
        case "com.amazonaws.macie2#ThrottlingException":
            response = {
                ...(await deserializeAws_restJson1ThrottlingExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ValidationException":
        case "com.amazonaws.macie2#ValidationException":
            response = {
                ...(await deserializeAws_restJson1ValidationExceptionResponse(parsedOutput, context)),
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
const deserializeAws_restJson1ListFindingsFiltersCommand = async (output, context) => {
    if (output.statusCode !== 200 && output.statusCode >= 300) {
        return deserializeAws_restJson1ListFindingsFiltersCommandError(output, context);
    }
    const contents = {
        $metadata: deserializeMetadata(output),
        findingsFilterListItems: undefined,
        nextToken: undefined,
    };
    const data = await parseBody(output.body, context);
    if (data.findingsFilterListItems !== undefined && data.findingsFilterListItems !== null) {
        contents.findingsFilterListItems = deserializeAws_restJson1__listOfFindingsFilterListItem(data.findingsFilterListItems, context);
    }
    if (data.nextToken !== undefined && data.nextToken !== null) {
        contents.nextToken = data.nextToken;
    }
    return Promise.resolve(contents);
};
exports.deserializeAws_restJson1ListFindingsFiltersCommand = deserializeAws_restJson1ListFindingsFiltersCommand;
const deserializeAws_restJson1ListFindingsFiltersCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "AccessDeniedException":
        case "com.amazonaws.macie2#AccessDeniedException":
            response = {
                ...(await deserializeAws_restJson1AccessDeniedExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ConflictException":
        case "com.amazonaws.macie2#ConflictException":
            response = {
                ...(await deserializeAws_restJson1ConflictExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InternalServerException":
        case "com.amazonaws.macie2#InternalServerException":
            response = {
                ...(await deserializeAws_restJson1InternalServerExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ResourceNotFoundException":
        case "com.amazonaws.macie2#ResourceNotFoundException":
            response = {
                ...(await deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ServiceQuotaExceededException":
        case "com.amazonaws.macie2#ServiceQuotaExceededException":
            response = {
                ...(await deserializeAws_restJson1ServiceQuotaExceededExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ThrottlingException":
        case "com.amazonaws.macie2#ThrottlingException":
            response = {
                ...(await deserializeAws_restJson1ThrottlingExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ValidationException":
        case "com.amazonaws.macie2#ValidationException":
            response = {
                ...(await deserializeAws_restJson1ValidationExceptionResponse(parsedOutput, context)),
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
const deserializeAws_restJson1ListInvitationsCommand = async (output, context) => {
    if (output.statusCode !== 200 && output.statusCode >= 300) {
        return deserializeAws_restJson1ListInvitationsCommandError(output, context);
    }
    const contents = {
        $metadata: deserializeMetadata(output),
        invitations: undefined,
        nextToken: undefined,
    };
    const data = await parseBody(output.body, context);
    if (data.invitations !== undefined && data.invitations !== null) {
        contents.invitations = deserializeAws_restJson1__listOfInvitation(data.invitations, context);
    }
    if (data.nextToken !== undefined && data.nextToken !== null) {
        contents.nextToken = data.nextToken;
    }
    return Promise.resolve(contents);
};
exports.deserializeAws_restJson1ListInvitationsCommand = deserializeAws_restJson1ListInvitationsCommand;
const deserializeAws_restJson1ListInvitationsCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "AccessDeniedException":
        case "com.amazonaws.macie2#AccessDeniedException":
            response = {
                ...(await deserializeAws_restJson1AccessDeniedExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ConflictException":
        case "com.amazonaws.macie2#ConflictException":
            response = {
                ...(await deserializeAws_restJson1ConflictExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InternalServerException":
        case "com.amazonaws.macie2#InternalServerException":
            response = {
                ...(await deserializeAws_restJson1InternalServerExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ResourceNotFoundException":
        case "com.amazonaws.macie2#ResourceNotFoundException":
            response = {
                ...(await deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ServiceQuotaExceededException":
        case "com.amazonaws.macie2#ServiceQuotaExceededException":
            response = {
                ...(await deserializeAws_restJson1ServiceQuotaExceededExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ThrottlingException":
        case "com.amazonaws.macie2#ThrottlingException":
            response = {
                ...(await deserializeAws_restJson1ThrottlingExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ValidationException":
        case "com.amazonaws.macie2#ValidationException":
            response = {
                ...(await deserializeAws_restJson1ValidationExceptionResponse(parsedOutput, context)),
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
const deserializeAws_restJson1ListMembersCommand = async (output, context) => {
    if (output.statusCode !== 200 && output.statusCode >= 300) {
        return deserializeAws_restJson1ListMembersCommandError(output, context);
    }
    const contents = {
        $metadata: deserializeMetadata(output),
        members: undefined,
        nextToken: undefined,
    };
    const data = await parseBody(output.body, context);
    if (data.members !== undefined && data.members !== null) {
        contents.members = deserializeAws_restJson1__listOfMember(data.members, context);
    }
    if (data.nextToken !== undefined && data.nextToken !== null) {
        contents.nextToken = data.nextToken;
    }
    return Promise.resolve(contents);
};
exports.deserializeAws_restJson1ListMembersCommand = deserializeAws_restJson1ListMembersCommand;
const deserializeAws_restJson1ListMembersCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "AccessDeniedException":
        case "com.amazonaws.macie2#AccessDeniedException":
            response = {
                ...(await deserializeAws_restJson1AccessDeniedExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ConflictException":
        case "com.amazonaws.macie2#ConflictException":
            response = {
                ...(await deserializeAws_restJson1ConflictExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InternalServerException":
        case "com.amazonaws.macie2#InternalServerException":
            response = {
                ...(await deserializeAws_restJson1InternalServerExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ResourceNotFoundException":
        case "com.amazonaws.macie2#ResourceNotFoundException":
            response = {
                ...(await deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ServiceQuotaExceededException":
        case "com.amazonaws.macie2#ServiceQuotaExceededException":
            response = {
                ...(await deserializeAws_restJson1ServiceQuotaExceededExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ThrottlingException":
        case "com.amazonaws.macie2#ThrottlingException":
            response = {
                ...(await deserializeAws_restJson1ThrottlingExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ValidationException":
        case "com.amazonaws.macie2#ValidationException":
            response = {
                ...(await deserializeAws_restJson1ValidationExceptionResponse(parsedOutput, context)),
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
const deserializeAws_restJson1ListOrganizationAdminAccountsCommand = async (output, context) => {
    if (output.statusCode !== 200 && output.statusCode >= 300) {
        return deserializeAws_restJson1ListOrganizationAdminAccountsCommandError(output, context);
    }
    const contents = {
        $metadata: deserializeMetadata(output),
        adminAccounts: undefined,
        nextToken: undefined,
    };
    const data = await parseBody(output.body, context);
    if (data.adminAccounts !== undefined && data.adminAccounts !== null) {
        contents.adminAccounts = deserializeAws_restJson1__listOfAdminAccount(data.adminAccounts, context);
    }
    if (data.nextToken !== undefined && data.nextToken !== null) {
        contents.nextToken = data.nextToken;
    }
    return Promise.resolve(contents);
};
exports.deserializeAws_restJson1ListOrganizationAdminAccountsCommand = deserializeAws_restJson1ListOrganizationAdminAccountsCommand;
const deserializeAws_restJson1ListOrganizationAdminAccountsCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "AccessDeniedException":
        case "com.amazonaws.macie2#AccessDeniedException":
            response = {
                ...(await deserializeAws_restJson1AccessDeniedExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ConflictException":
        case "com.amazonaws.macie2#ConflictException":
            response = {
                ...(await deserializeAws_restJson1ConflictExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InternalServerException":
        case "com.amazonaws.macie2#InternalServerException":
            response = {
                ...(await deserializeAws_restJson1InternalServerExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ResourceNotFoundException":
        case "com.amazonaws.macie2#ResourceNotFoundException":
            response = {
                ...(await deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ServiceQuotaExceededException":
        case "com.amazonaws.macie2#ServiceQuotaExceededException":
            response = {
                ...(await deserializeAws_restJson1ServiceQuotaExceededExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ThrottlingException":
        case "com.amazonaws.macie2#ThrottlingException":
            response = {
                ...(await deserializeAws_restJson1ThrottlingExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ValidationException":
        case "com.amazonaws.macie2#ValidationException":
            response = {
                ...(await deserializeAws_restJson1ValidationExceptionResponse(parsedOutput, context)),
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
        tags: undefined,
    };
    const data = await parseBody(output.body, context);
    if (data.tags !== undefined && data.tags !== null) {
        contents.tags = deserializeAws_restJson1TagMap(data.tags, context);
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
const deserializeAws_restJson1PutClassificationExportConfigurationCommand = async (output, context) => {
    if (output.statusCode !== 200 && output.statusCode >= 300) {
        return deserializeAws_restJson1PutClassificationExportConfigurationCommandError(output, context);
    }
    const contents = {
        $metadata: deserializeMetadata(output),
        configuration: undefined,
    };
    const data = await parseBody(output.body, context);
    if (data.configuration !== undefined && data.configuration !== null) {
        contents.configuration = deserializeAws_restJson1ClassificationExportConfiguration(data.configuration, context);
    }
    return Promise.resolve(contents);
};
exports.deserializeAws_restJson1PutClassificationExportConfigurationCommand = deserializeAws_restJson1PutClassificationExportConfigurationCommand;
const deserializeAws_restJson1PutClassificationExportConfigurationCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "AccessDeniedException":
        case "com.amazonaws.macie2#AccessDeniedException":
            response = {
                ...(await deserializeAws_restJson1AccessDeniedExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ConflictException":
        case "com.amazonaws.macie2#ConflictException":
            response = {
                ...(await deserializeAws_restJson1ConflictExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InternalServerException":
        case "com.amazonaws.macie2#InternalServerException":
            response = {
                ...(await deserializeAws_restJson1InternalServerExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ResourceNotFoundException":
        case "com.amazonaws.macie2#ResourceNotFoundException":
            response = {
                ...(await deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ServiceQuotaExceededException":
        case "com.amazonaws.macie2#ServiceQuotaExceededException":
            response = {
                ...(await deserializeAws_restJson1ServiceQuotaExceededExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ThrottlingException":
        case "com.amazonaws.macie2#ThrottlingException":
            response = {
                ...(await deserializeAws_restJson1ThrottlingExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ValidationException":
        case "com.amazonaws.macie2#ValidationException":
            response = {
                ...(await deserializeAws_restJson1ValidationExceptionResponse(parsedOutput, context)),
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
const deserializeAws_restJson1PutFindingsPublicationConfigurationCommand = async (output, context) => {
    if (output.statusCode !== 200 && output.statusCode >= 300) {
        return deserializeAws_restJson1PutFindingsPublicationConfigurationCommandError(output, context);
    }
    const contents = {
        $metadata: deserializeMetadata(output),
    };
    await collectBody(output.body, context);
    return Promise.resolve(contents);
};
exports.deserializeAws_restJson1PutFindingsPublicationConfigurationCommand = deserializeAws_restJson1PutFindingsPublicationConfigurationCommand;
const deserializeAws_restJson1PutFindingsPublicationConfigurationCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "AccessDeniedException":
        case "com.amazonaws.macie2#AccessDeniedException":
            response = {
                ...(await deserializeAws_restJson1AccessDeniedExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ConflictException":
        case "com.amazonaws.macie2#ConflictException":
            response = {
                ...(await deserializeAws_restJson1ConflictExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InternalServerException":
        case "com.amazonaws.macie2#InternalServerException":
            response = {
                ...(await deserializeAws_restJson1InternalServerExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ResourceNotFoundException":
        case "com.amazonaws.macie2#ResourceNotFoundException":
            response = {
                ...(await deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ServiceQuotaExceededException":
        case "com.amazonaws.macie2#ServiceQuotaExceededException":
            response = {
                ...(await deserializeAws_restJson1ServiceQuotaExceededExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ThrottlingException":
        case "com.amazonaws.macie2#ThrottlingException":
            response = {
                ...(await deserializeAws_restJson1ThrottlingExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ValidationException":
        case "com.amazonaws.macie2#ValidationException":
            response = {
                ...(await deserializeAws_restJson1ValidationExceptionResponse(parsedOutput, context)),
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
const deserializeAws_restJson1SearchResourcesCommand = async (output, context) => {
    if (output.statusCode !== 200 && output.statusCode >= 300) {
        return deserializeAws_restJson1SearchResourcesCommandError(output, context);
    }
    const contents = {
        $metadata: deserializeMetadata(output),
        matchingResources: undefined,
        nextToken: undefined,
    };
    const data = await parseBody(output.body, context);
    if (data.matchingResources !== undefined && data.matchingResources !== null) {
        contents.matchingResources = deserializeAws_restJson1__listOfMatchingResource(data.matchingResources, context);
    }
    if (data.nextToken !== undefined && data.nextToken !== null) {
        contents.nextToken = data.nextToken;
    }
    return Promise.resolve(contents);
};
exports.deserializeAws_restJson1SearchResourcesCommand = deserializeAws_restJson1SearchResourcesCommand;
const deserializeAws_restJson1SearchResourcesCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "AccessDeniedException":
        case "com.amazonaws.macie2#AccessDeniedException":
            response = {
                ...(await deserializeAws_restJson1AccessDeniedExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ConflictException":
        case "com.amazonaws.macie2#ConflictException":
            response = {
                ...(await deserializeAws_restJson1ConflictExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InternalServerException":
        case "com.amazonaws.macie2#InternalServerException":
            response = {
                ...(await deserializeAws_restJson1InternalServerExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ResourceNotFoundException":
        case "com.amazonaws.macie2#ResourceNotFoundException":
            response = {
                ...(await deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ServiceQuotaExceededException":
        case "com.amazonaws.macie2#ServiceQuotaExceededException":
            response = {
                ...(await deserializeAws_restJson1ServiceQuotaExceededExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ThrottlingException":
        case "com.amazonaws.macie2#ThrottlingException":
            response = {
                ...(await deserializeAws_restJson1ThrottlingExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ValidationException":
        case "com.amazonaws.macie2#ValidationException":
            response = {
                ...(await deserializeAws_restJson1ValidationExceptionResponse(parsedOutput, context)),
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
    if (output.statusCode !== 204 && output.statusCode >= 300) {
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
const deserializeAws_restJson1TestCustomDataIdentifierCommand = async (output, context) => {
    if (output.statusCode !== 200 && output.statusCode >= 300) {
        return deserializeAws_restJson1TestCustomDataIdentifierCommandError(output, context);
    }
    const contents = {
        $metadata: deserializeMetadata(output),
        matchCount: undefined,
    };
    const data = await parseBody(output.body, context);
    if (data.matchCount !== undefined && data.matchCount !== null) {
        contents.matchCount = data.matchCount;
    }
    return Promise.resolve(contents);
};
exports.deserializeAws_restJson1TestCustomDataIdentifierCommand = deserializeAws_restJson1TestCustomDataIdentifierCommand;
const deserializeAws_restJson1TestCustomDataIdentifierCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "AccessDeniedException":
        case "com.amazonaws.macie2#AccessDeniedException":
            response = {
                ...(await deserializeAws_restJson1AccessDeniedExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ConflictException":
        case "com.amazonaws.macie2#ConflictException":
            response = {
                ...(await deserializeAws_restJson1ConflictExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InternalServerException":
        case "com.amazonaws.macie2#InternalServerException":
            response = {
                ...(await deserializeAws_restJson1InternalServerExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ResourceNotFoundException":
        case "com.amazonaws.macie2#ResourceNotFoundException":
            response = {
                ...(await deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ServiceQuotaExceededException":
        case "com.amazonaws.macie2#ServiceQuotaExceededException":
            response = {
                ...(await deserializeAws_restJson1ServiceQuotaExceededExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ThrottlingException":
        case "com.amazonaws.macie2#ThrottlingException":
            response = {
                ...(await deserializeAws_restJson1ThrottlingExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ValidationException":
        case "com.amazonaws.macie2#ValidationException":
            response = {
                ...(await deserializeAws_restJson1ValidationExceptionResponse(parsedOutput, context)),
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
    if (output.statusCode !== 204 && output.statusCode >= 300) {
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
const deserializeAws_restJson1UpdateClassificationJobCommand = async (output, context) => {
    if (output.statusCode !== 200 && output.statusCode >= 300) {
        return deserializeAws_restJson1UpdateClassificationJobCommandError(output, context);
    }
    const contents = {
        $metadata: deserializeMetadata(output),
    };
    await collectBody(output.body, context);
    return Promise.resolve(contents);
};
exports.deserializeAws_restJson1UpdateClassificationJobCommand = deserializeAws_restJson1UpdateClassificationJobCommand;
const deserializeAws_restJson1UpdateClassificationJobCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "AccessDeniedException":
        case "com.amazonaws.macie2#AccessDeniedException":
            response = {
                ...(await deserializeAws_restJson1AccessDeniedExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ConflictException":
        case "com.amazonaws.macie2#ConflictException":
            response = {
                ...(await deserializeAws_restJson1ConflictExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InternalServerException":
        case "com.amazonaws.macie2#InternalServerException":
            response = {
                ...(await deserializeAws_restJson1InternalServerExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ResourceNotFoundException":
        case "com.amazonaws.macie2#ResourceNotFoundException":
            response = {
                ...(await deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ServiceQuotaExceededException":
        case "com.amazonaws.macie2#ServiceQuotaExceededException":
            response = {
                ...(await deserializeAws_restJson1ServiceQuotaExceededExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ThrottlingException":
        case "com.amazonaws.macie2#ThrottlingException":
            response = {
                ...(await deserializeAws_restJson1ThrottlingExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ValidationException":
        case "com.amazonaws.macie2#ValidationException":
            response = {
                ...(await deserializeAws_restJson1ValidationExceptionResponse(parsedOutput, context)),
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
const deserializeAws_restJson1UpdateFindingsFilterCommand = async (output, context) => {
    if (output.statusCode !== 200 && output.statusCode >= 300) {
        return deserializeAws_restJson1UpdateFindingsFilterCommandError(output, context);
    }
    const contents = {
        $metadata: deserializeMetadata(output),
        arn: undefined,
        id: undefined,
    };
    const data = await parseBody(output.body, context);
    if (data.arn !== undefined && data.arn !== null) {
        contents.arn = data.arn;
    }
    if (data.id !== undefined && data.id !== null) {
        contents.id = data.id;
    }
    return Promise.resolve(contents);
};
exports.deserializeAws_restJson1UpdateFindingsFilterCommand = deserializeAws_restJson1UpdateFindingsFilterCommand;
const deserializeAws_restJson1UpdateFindingsFilterCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "AccessDeniedException":
        case "com.amazonaws.macie2#AccessDeniedException":
            response = {
                ...(await deserializeAws_restJson1AccessDeniedExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ConflictException":
        case "com.amazonaws.macie2#ConflictException":
            response = {
                ...(await deserializeAws_restJson1ConflictExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InternalServerException":
        case "com.amazonaws.macie2#InternalServerException":
            response = {
                ...(await deserializeAws_restJson1InternalServerExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ResourceNotFoundException":
        case "com.amazonaws.macie2#ResourceNotFoundException":
            response = {
                ...(await deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ServiceQuotaExceededException":
        case "com.amazonaws.macie2#ServiceQuotaExceededException":
            response = {
                ...(await deserializeAws_restJson1ServiceQuotaExceededExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ThrottlingException":
        case "com.amazonaws.macie2#ThrottlingException":
            response = {
                ...(await deserializeAws_restJson1ThrottlingExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ValidationException":
        case "com.amazonaws.macie2#ValidationException":
            response = {
                ...(await deserializeAws_restJson1ValidationExceptionResponse(parsedOutput, context)),
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
const deserializeAws_restJson1UpdateMacieSessionCommand = async (output, context) => {
    if (output.statusCode !== 200 && output.statusCode >= 300) {
        return deserializeAws_restJson1UpdateMacieSessionCommandError(output, context);
    }
    const contents = {
        $metadata: deserializeMetadata(output),
    };
    await collectBody(output.body, context);
    return Promise.resolve(contents);
};
exports.deserializeAws_restJson1UpdateMacieSessionCommand = deserializeAws_restJson1UpdateMacieSessionCommand;
const deserializeAws_restJson1UpdateMacieSessionCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "AccessDeniedException":
        case "com.amazonaws.macie2#AccessDeniedException":
            response = {
                ...(await deserializeAws_restJson1AccessDeniedExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ConflictException":
        case "com.amazonaws.macie2#ConflictException":
            response = {
                ...(await deserializeAws_restJson1ConflictExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InternalServerException":
        case "com.amazonaws.macie2#InternalServerException":
            response = {
                ...(await deserializeAws_restJson1InternalServerExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ResourceNotFoundException":
        case "com.amazonaws.macie2#ResourceNotFoundException":
            response = {
                ...(await deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ServiceQuotaExceededException":
        case "com.amazonaws.macie2#ServiceQuotaExceededException":
            response = {
                ...(await deserializeAws_restJson1ServiceQuotaExceededExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ThrottlingException":
        case "com.amazonaws.macie2#ThrottlingException":
            response = {
                ...(await deserializeAws_restJson1ThrottlingExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ValidationException":
        case "com.amazonaws.macie2#ValidationException":
            response = {
                ...(await deserializeAws_restJson1ValidationExceptionResponse(parsedOutput, context)),
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
const deserializeAws_restJson1UpdateMemberSessionCommand = async (output, context) => {
    if (output.statusCode !== 200 && output.statusCode >= 300) {
        return deserializeAws_restJson1UpdateMemberSessionCommandError(output, context);
    }
    const contents = {
        $metadata: deserializeMetadata(output),
    };
    await collectBody(output.body, context);
    return Promise.resolve(contents);
};
exports.deserializeAws_restJson1UpdateMemberSessionCommand = deserializeAws_restJson1UpdateMemberSessionCommand;
const deserializeAws_restJson1UpdateMemberSessionCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "AccessDeniedException":
        case "com.amazonaws.macie2#AccessDeniedException":
            response = {
                ...(await deserializeAws_restJson1AccessDeniedExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ConflictException":
        case "com.amazonaws.macie2#ConflictException":
            response = {
                ...(await deserializeAws_restJson1ConflictExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InternalServerException":
        case "com.amazonaws.macie2#InternalServerException":
            response = {
                ...(await deserializeAws_restJson1InternalServerExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ResourceNotFoundException":
        case "com.amazonaws.macie2#ResourceNotFoundException":
            response = {
                ...(await deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ServiceQuotaExceededException":
        case "com.amazonaws.macie2#ServiceQuotaExceededException":
            response = {
                ...(await deserializeAws_restJson1ServiceQuotaExceededExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ThrottlingException":
        case "com.amazonaws.macie2#ThrottlingException":
            response = {
                ...(await deserializeAws_restJson1ThrottlingExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ValidationException":
        case "com.amazonaws.macie2#ValidationException":
            response = {
                ...(await deserializeAws_restJson1ValidationExceptionResponse(parsedOutput, context)),
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
const deserializeAws_restJson1UpdateOrganizationConfigurationCommand = async (output, context) => {
    if (output.statusCode !== 200 && output.statusCode >= 300) {
        return deserializeAws_restJson1UpdateOrganizationConfigurationCommandError(output, context);
    }
    const contents = {
        $metadata: deserializeMetadata(output),
    };
    await collectBody(output.body, context);
    return Promise.resolve(contents);
};
exports.deserializeAws_restJson1UpdateOrganizationConfigurationCommand = deserializeAws_restJson1UpdateOrganizationConfigurationCommand;
const deserializeAws_restJson1UpdateOrganizationConfigurationCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "AccessDeniedException":
        case "com.amazonaws.macie2#AccessDeniedException":
            response = {
                ...(await deserializeAws_restJson1AccessDeniedExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ConflictException":
        case "com.amazonaws.macie2#ConflictException":
            response = {
                ...(await deserializeAws_restJson1ConflictExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InternalServerException":
        case "com.amazonaws.macie2#InternalServerException":
            response = {
                ...(await deserializeAws_restJson1InternalServerExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ResourceNotFoundException":
        case "com.amazonaws.macie2#ResourceNotFoundException":
            response = {
                ...(await deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ServiceQuotaExceededException":
        case "com.amazonaws.macie2#ServiceQuotaExceededException":
            response = {
                ...(await deserializeAws_restJson1ServiceQuotaExceededExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ThrottlingException":
        case "com.amazonaws.macie2#ThrottlingException":
            response = {
                ...(await deserializeAws_restJson1ThrottlingExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ValidationException":
        case "com.amazonaws.macie2#ValidationException":
            response = {
                ...(await deserializeAws_restJson1ValidationExceptionResponse(parsedOutput, context)),
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
const deserializeAws_restJson1AccessDeniedExceptionResponse = async (parsedOutput, context) => {
    const contents = {
        name: "AccessDeniedException",
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
const deserializeAws_restJson1InternalServerExceptionResponse = async (parsedOutput, context) => {
    const contents = {
        name: "InternalServerException",
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
const deserializeAws_restJson1ResourceNotFoundExceptionResponse = async (parsedOutput, context) => {
    const contents = {
        name: "ResourceNotFoundException",
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
const deserializeAws_restJson1ServiceQuotaExceededExceptionResponse = async (parsedOutput, context) => {
    const contents = {
        name: "ServiceQuotaExceededException",
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
const deserializeAws_restJson1ThrottlingExceptionResponse = async (parsedOutput, context) => {
    const contents = {
        name: "ThrottlingException",
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
const deserializeAws_restJson1ValidationExceptionResponse = async (parsedOutput, context) => {
    const contents = {
        name: "ValidationException",
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
const serializeAws_restJson1__listOf__string = (input, context) => {
    return input
        .filter((e) => e != null)
        .map((entry) => {
        if (entry === null) {
            return null;
        }
        return entry;
    });
};
const serializeAws_restJson1__listOfCriteriaForJob = (input, context) => {
    return input
        .filter((e) => e != null)
        .map((entry) => {
        if (entry === null) {
            return null;
        }
        return serializeAws_restJson1CriteriaForJob(entry, context);
    });
};
const serializeAws_restJson1__listOfFindingType = (input, context) => {
    return input
        .filter((e) => e != null)
        .map((entry) => {
        if (entry === null) {
            return null;
        }
        return entry;
    });
};
const serializeAws_restJson1__listOfJobScopeTerm = (input, context) => {
    return input
        .filter((e) => e != null)
        .map((entry) => {
        if (entry === null) {
            return null;
        }
        return serializeAws_restJson1JobScopeTerm(entry, context);
    });
};
const serializeAws_restJson1__listOfListJobsFilterTerm = (input, context) => {
    return input
        .filter((e) => e != null)
        .map((entry) => {
        if (entry === null) {
            return null;
        }
        return serializeAws_restJson1ListJobsFilterTerm(entry, context);
    });
};
const serializeAws_restJson1__listOfS3BucketDefinitionForJob = (input, context) => {
    return input
        .filter((e) => e != null)
        .map((entry) => {
        if (entry === null) {
            return null;
        }
        return serializeAws_restJson1S3BucketDefinitionForJob(entry, context);
    });
};
const serializeAws_restJson1__listOfSearchResourcesCriteria = (input, context) => {
    return input
        .filter((e) => e != null)
        .map((entry) => {
        if (entry === null) {
            return null;
        }
        return serializeAws_restJson1SearchResourcesCriteria(entry, context);
    });
};
const serializeAws_restJson1__listOfSearchResourcesTagCriterionPair = (input, context) => {
    return input
        .filter((e) => e != null)
        .map((entry) => {
        if (entry === null) {
            return null;
        }
        return serializeAws_restJson1SearchResourcesTagCriterionPair(entry, context);
    });
};
const serializeAws_restJson1__listOfTagCriterionPairForJob = (input, context) => {
    return input
        .filter((e) => e != null)
        .map((entry) => {
        if (entry === null) {
            return null;
        }
        return serializeAws_restJson1TagCriterionPairForJob(entry, context);
    });
};
const serializeAws_restJson1__listOfTagValuePair = (input, context) => {
    return input
        .filter((e) => e != null)
        .map((entry) => {
        if (entry === null) {
            return null;
        }
        return serializeAws_restJson1TagValuePair(entry, context);
    });
};
const serializeAws_restJson1__listOfUsageStatisticsFilter = (input, context) => {
    return input
        .filter((e) => e != null)
        .map((entry) => {
        if (entry === null) {
            return null;
        }
        return serializeAws_restJson1UsageStatisticsFilter(entry, context);
    });
};
const serializeAws_restJson1AccountDetail = (input, context) => {
    return {
        ...(input.accountId !== undefined && input.accountId !== null && { accountId: input.accountId }),
        ...(input.email !== undefined && input.email !== null && { email: input.email }),
    };
};
const serializeAws_restJson1BucketCriteria = (input, context) => {
    return Object.entries(input).reduce((acc, [key, value]) => {
        if (value === null) {
            return acc;
        }
        return {
            ...acc,
            [key]: serializeAws_restJson1BucketCriteriaAdditionalProperties(value, context),
        };
    }, {});
};
const serializeAws_restJson1BucketCriteriaAdditionalProperties = (input, context) => {
    return {
        ...(input.eq !== undefined &&
            input.eq !== null && { eq: serializeAws_restJson1__listOf__string(input.eq, context) }),
        ...(input.gt !== undefined && input.gt !== null && { gt: input.gt }),
        ...(input.gte !== undefined && input.gte !== null && { gte: input.gte }),
        ...(input.lt !== undefined && input.lt !== null && { lt: input.lt }),
        ...(input.lte !== undefined && input.lte !== null && { lte: input.lte }),
        ...(input.neq !== undefined &&
            input.neq !== null && { neq: serializeAws_restJson1__listOf__string(input.neq, context) }),
        ...(input.prefix !== undefined && input.prefix !== null && { prefix: input.prefix }),
    };
};
const serializeAws_restJson1BucketSortCriteria = (input, context) => {
    return {
        ...(input.attributeName !== undefined && input.attributeName !== null && { attributeName: input.attributeName }),
        ...(input.orderBy !== undefined && input.orderBy !== null && { orderBy: input.orderBy }),
    };
};
const serializeAws_restJson1ClassificationExportConfiguration = (input, context) => {
    return {
        ...(input.s3Destination !== undefined &&
            input.s3Destination !== null && {
            s3Destination: serializeAws_restJson1S3Destination(input.s3Destination, context),
        }),
    };
};
const serializeAws_restJson1CriteriaBlockForJob = (input, context) => {
    return {
        ...(input.and !== undefined &&
            input.and !== null && { and: serializeAws_restJson1__listOfCriteriaForJob(input.and, context) }),
    };
};
const serializeAws_restJson1CriteriaForJob = (input, context) => {
    return {
        ...(input.simpleCriterion !== undefined &&
            input.simpleCriterion !== null && {
            simpleCriterion: serializeAws_restJson1SimpleCriterionForJob(input.simpleCriterion, context),
        }),
        ...(input.tagCriterion !== undefined &&
            input.tagCriterion !== null && {
            tagCriterion: serializeAws_restJson1TagCriterionForJob(input.tagCriterion, context),
        }),
    };
};
const serializeAws_restJson1Criterion = (input, context) => {
    return Object.entries(input).reduce((acc, [key, value]) => {
        if (value === null) {
            return acc;
        }
        return {
            ...acc,
            [key]: serializeAws_restJson1CriterionAdditionalProperties(value, context),
        };
    }, {});
};
const serializeAws_restJson1CriterionAdditionalProperties = (input, context) => {
    return {
        ...(input.eq !== undefined &&
            input.eq !== null && { eq: serializeAws_restJson1__listOf__string(input.eq, context) }),
        ...(input.eqExactMatch !== undefined &&
            input.eqExactMatch !== null && {
            eqExactMatch: serializeAws_restJson1__listOf__string(input.eqExactMatch, context),
        }),
        ...(input.gt !== undefined && input.gt !== null && { gt: input.gt }),
        ...(input.gte !== undefined && input.gte !== null && { gte: input.gte }),
        ...(input.lt !== undefined && input.lt !== null && { lt: input.lt }),
        ...(input.lte !== undefined && input.lte !== null && { lte: input.lte }),
        ...(input.neq !== undefined &&
            input.neq !== null && { neq: serializeAws_restJson1__listOf__string(input.neq, context) }),
    };
};
const serializeAws_restJson1DailySchedule = (input, context) => {
    return {};
};
const serializeAws_restJson1FindingCriteria = (input, context) => {
    return {
        ...(input.criterion !== undefined &&
            input.criterion !== null && { criterion: serializeAws_restJson1Criterion(input.criterion, context) }),
    };
};
const serializeAws_restJson1FindingStatisticsSortCriteria = (input, context) => {
    return {
        ...(input.attributeName !== undefined && input.attributeName !== null && { attributeName: input.attributeName }),
        ...(input.orderBy !== undefined && input.orderBy !== null && { orderBy: input.orderBy }),
    };
};
const serializeAws_restJson1JobScheduleFrequency = (input, context) => {
    return {
        ...(input.dailySchedule !== undefined &&
            input.dailySchedule !== null && {
            dailySchedule: serializeAws_restJson1DailySchedule(input.dailySchedule, context),
        }),
        ...(input.monthlySchedule !== undefined &&
            input.monthlySchedule !== null && {
            monthlySchedule: serializeAws_restJson1MonthlySchedule(input.monthlySchedule, context),
        }),
        ...(input.weeklySchedule !== undefined &&
            input.weeklySchedule !== null && {
            weeklySchedule: serializeAws_restJson1WeeklySchedule(input.weeklySchedule, context),
        }),
    };
};
const serializeAws_restJson1JobScopeTerm = (input, context) => {
    return {
        ...(input.simpleScopeTerm !== undefined &&
            input.simpleScopeTerm !== null && {
            simpleScopeTerm: serializeAws_restJson1SimpleScopeTerm(input.simpleScopeTerm, context),
        }),
        ...(input.tagScopeTerm !== undefined &&
            input.tagScopeTerm !== null && { tagScopeTerm: serializeAws_restJson1TagScopeTerm(input.tagScopeTerm, context) }),
    };
};
const serializeAws_restJson1JobScopingBlock = (input, context) => {
    return {
        ...(input.and !== undefined &&
            input.and !== null && { and: serializeAws_restJson1__listOfJobScopeTerm(input.and, context) }),
    };
};
const serializeAws_restJson1ListJobsFilterCriteria = (input, context) => {
    return {
        ...(input.excludes !== undefined &&
            input.excludes !== null && {
            excludes: serializeAws_restJson1__listOfListJobsFilterTerm(input.excludes, context),
        }),
        ...(input.includes !== undefined &&
            input.includes !== null && {
            includes: serializeAws_restJson1__listOfListJobsFilterTerm(input.includes, context),
        }),
    };
};
const serializeAws_restJson1ListJobsFilterTerm = (input, context) => {
    return {
        ...(input.comparator !== undefined && input.comparator !== null && { comparator: input.comparator }),
        ...(input.key !== undefined && input.key !== null && { key: input.key }),
        ...(input.values !== undefined &&
            input.values !== null && { values: serializeAws_restJson1__listOf__string(input.values, context) }),
    };
};
const serializeAws_restJson1ListJobsSortCriteria = (input, context) => {
    return {
        ...(input.attributeName !== undefined && input.attributeName !== null && { attributeName: input.attributeName }),
        ...(input.orderBy !== undefined && input.orderBy !== null && { orderBy: input.orderBy }),
    };
};
const serializeAws_restJson1MonthlySchedule = (input, context) => {
    return {
        ...(input.dayOfMonth !== undefined && input.dayOfMonth !== null && { dayOfMonth: input.dayOfMonth }),
    };
};
const serializeAws_restJson1S3BucketCriteriaForJob = (input, context) => {
    return {
        ...(input.excludes !== undefined &&
            input.excludes !== null && { excludes: serializeAws_restJson1CriteriaBlockForJob(input.excludes, context) }),
        ...(input.includes !== undefined &&
            input.includes !== null && { includes: serializeAws_restJson1CriteriaBlockForJob(input.includes, context) }),
    };
};
const serializeAws_restJson1S3BucketDefinitionForJob = (input, context) => {
    return {
        ...(input.accountId !== undefined && input.accountId !== null && { accountId: input.accountId }),
        ...(input.buckets !== undefined &&
            input.buckets !== null && { buckets: serializeAws_restJson1__listOf__string(input.buckets, context) }),
    };
};
const serializeAws_restJson1S3Destination = (input, context) => {
    return {
        ...(input.bucketName !== undefined && input.bucketName !== null && { bucketName: input.bucketName }),
        ...(input.keyPrefix !== undefined && input.keyPrefix !== null && { keyPrefix: input.keyPrefix }),
        ...(input.kmsKeyArn !== undefined && input.kmsKeyArn !== null && { kmsKeyArn: input.kmsKeyArn }),
    };
};
const serializeAws_restJson1S3JobDefinition = (input, context) => {
    return {
        ...(input.bucketCriteria !== undefined &&
            input.bucketCriteria !== null && {
            bucketCriteria: serializeAws_restJson1S3BucketCriteriaForJob(input.bucketCriteria, context),
        }),
        ...(input.bucketDefinitions !== undefined &&
            input.bucketDefinitions !== null && {
            bucketDefinitions: serializeAws_restJson1__listOfS3BucketDefinitionForJob(input.bucketDefinitions, context),
        }),
        ...(input.scoping !== undefined &&
            input.scoping !== null && { scoping: serializeAws_restJson1Scoping(input.scoping, context) }),
    };
};
const serializeAws_restJson1Scoping = (input, context) => {
    return {
        ...(input.excludes !== undefined &&
            input.excludes !== null && { excludes: serializeAws_restJson1JobScopingBlock(input.excludes, context) }),
        ...(input.includes !== undefined &&
            input.includes !== null && { includes: serializeAws_restJson1JobScopingBlock(input.includes, context) }),
    };
};
const serializeAws_restJson1SearchResourcesBucketCriteria = (input, context) => {
    return {
        ...(input.excludes !== undefined &&
            input.excludes !== null && {
            excludes: serializeAws_restJson1SearchResourcesCriteriaBlock(input.excludes, context),
        }),
        ...(input.includes !== undefined &&
            input.includes !== null && {
            includes: serializeAws_restJson1SearchResourcesCriteriaBlock(input.includes, context),
        }),
    };
};
const serializeAws_restJson1SearchResourcesCriteria = (input, context) => {
    return {
        ...(input.simpleCriterion !== undefined &&
            input.simpleCriterion !== null && {
            simpleCriterion: serializeAws_restJson1SearchResourcesSimpleCriterion(input.simpleCriterion, context),
        }),
        ...(input.tagCriterion !== undefined &&
            input.tagCriterion !== null && {
            tagCriterion: serializeAws_restJson1SearchResourcesTagCriterion(input.tagCriterion, context),
        }),
    };
};
const serializeAws_restJson1SearchResourcesCriteriaBlock = (input, context) => {
    return {
        ...(input.and !== undefined &&
            input.and !== null && { and: serializeAws_restJson1__listOfSearchResourcesCriteria(input.and, context) }),
    };
};
const serializeAws_restJson1SearchResourcesSimpleCriterion = (input, context) => {
    return {
        ...(input.comparator !== undefined && input.comparator !== null && { comparator: input.comparator }),
        ...(input.key !== undefined && input.key !== null && { key: input.key }),
        ...(input.values !== undefined &&
            input.values !== null && { values: serializeAws_restJson1__listOf__string(input.values, context) }),
    };
};
const serializeAws_restJson1SearchResourcesSortCriteria = (input, context) => {
    return {
        ...(input.attributeName !== undefined && input.attributeName !== null && { attributeName: input.attributeName }),
        ...(input.orderBy !== undefined && input.orderBy !== null && { orderBy: input.orderBy }),
    };
};
const serializeAws_restJson1SearchResourcesTagCriterion = (input, context) => {
    return {
        ...(input.comparator !== undefined && input.comparator !== null && { comparator: input.comparator }),
        ...(input.tagValues !== undefined &&
            input.tagValues !== null && {
            tagValues: serializeAws_restJson1__listOfSearchResourcesTagCriterionPair(input.tagValues, context),
        }),
    };
};
const serializeAws_restJson1SearchResourcesTagCriterionPair = (input, context) => {
    return {
        ...(input.key !== undefined && input.key !== null && { key: input.key }),
        ...(input.value !== undefined && input.value !== null && { value: input.value }),
    };
};
const serializeAws_restJson1SecurityHubConfiguration = (input, context) => {
    return {
        ...(input.publishClassificationFindings !== undefined &&
            input.publishClassificationFindings !== null && {
            publishClassificationFindings: input.publishClassificationFindings,
        }),
        ...(input.publishPolicyFindings !== undefined &&
            input.publishPolicyFindings !== null && { publishPolicyFindings: input.publishPolicyFindings }),
    };
};
const serializeAws_restJson1SimpleCriterionForJob = (input, context) => {
    return {
        ...(input.comparator !== undefined && input.comparator !== null && { comparator: input.comparator }),
        ...(input.key !== undefined && input.key !== null && { key: input.key }),
        ...(input.values !== undefined &&
            input.values !== null && { values: serializeAws_restJson1__listOf__string(input.values, context) }),
    };
};
const serializeAws_restJson1SimpleScopeTerm = (input, context) => {
    return {
        ...(input.comparator !== undefined && input.comparator !== null && { comparator: input.comparator }),
        ...(input.key !== undefined && input.key !== null && { key: input.key }),
        ...(input.values !== undefined &&
            input.values !== null && { values: serializeAws_restJson1__listOf__string(input.values, context) }),
    };
};
const serializeAws_restJson1SortCriteria = (input, context) => {
    return {
        ...(input.attributeName !== undefined && input.attributeName !== null && { attributeName: input.attributeName }),
        ...(input.orderBy !== undefined && input.orderBy !== null && { orderBy: input.orderBy }),
    };
};
const serializeAws_restJson1TagCriterionForJob = (input, context) => {
    return {
        ...(input.comparator !== undefined && input.comparator !== null && { comparator: input.comparator }),
        ...(input.tagValues !== undefined &&
            input.tagValues !== null && {
            tagValues: serializeAws_restJson1__listOfTagCriterionPairForJob(input.tagValues, context),
        }),
    };
};
const serializeAws_restJson1TagCriterionPairForJob = (input, context) => {
    return {
        ...(input.key !== undefined && input.key !== null && { key: input.key }),
        ...(input.value !== undefined && input.value !== null && { value: input.value }),
    };
};
const serializeAws_restJson1TagMap = (input, context) => {
    return Object.entries(input).reduce((acc, [key, value]) => {
        if (value === null) {
            return acc;
        }
        return {
            ...acc,
            [key]: value,
        };
    }, {});
};
const serializeAws_restJson1TagScopeTerm = (input, context) => {
    return {
        ...(input.comparator !== undefined && input.comparator !== null && { comparator: input.comparator }),
        ...(input.key !== undefined && input.key !== null && { key: input.key }),
        ...(input.tagValues !== undefined &&
            input.tagValues !== null && { tagValues: serializeAws_restJson1__listOfTagValuePair(input.tagValues, context) }),
        ...(input.target !== undefined && input.target !== null && { target: input.target }),
    };
};
const serializeAws_restJson1TagValuePair = (input, context) => {
    return {
        ...(input.key !== undefined && input.key !== null && { key: input.key }),
        ...(input.value !== undefined && input.value !== null && { value: input.value }),
    };
};
const serializeAws_restJson1UsageStatisticsFilter = (input, context) => {
    return {
        ...(input.comparator !== undefined && input.comparator !== null && { comparator: input.comparator }),
        ...(input.key !== undefined && input.key !== null && { key: input.key }),
        ...(input.values !== undefined &&
            input.values !== null && { values: serializeAws_restJson1__listOf__string(input.values, context) }),
    };
};
const serializeAws_restJson1UsageStatisticsSortBy = (input, context) => {
    return {
        ...(input.key !== undefined && input.key !== null && { key: input.key }),
        ...(input.orderBy !== undefined && input.orderBy !== null && { orderBy: input.orderBy }),
    };
};
const serializeAws_restJson1WeeklySchedule = (input, context) => {
    return {
        ...(input.dayOfWeek !== undefined && input.dayOfWeek !== null && { dayOfWeek: input.dayOfWeek }),
    };
};
const deserializeAws_restJson1__listOf__string = (output, context) => {
    return (output || [])
        .filter((e) => e != null)
        .map((entry) => {
        if (entry === null) {
            return null;
        }
        return entry;
    });
};
const deserializeAws_restJson1__listOfAdminAccount = (output, context) => {
    return (output || [])
        .filter((e) => e != null)
        .map((entry) => {
        if (entry === null) {
            return null;
        }
        return deserializeAws_restJson1AdminAccount(entry, context);
    });
};
const deserializeAws_restJson1__listOfBatchGetCustomDataIdentifierSummary = (output, context) => {
    return (output || [])
        .filter((e) => e != null)
        .map((entry) => {
        if (entry === null) {
            return null;
        }
        return deserializeAws_restJson1BatchGetCustomDataIdentifierSummary(entry, context);
    });
};
const deserializeAws_restJson1__listOfBucketMetadata = (output, context) => {
    return (output || [])
        .filter((e) => e != null)
        .map((entry) => {
        if (entry === null) {
            return null;
        }
        return deserializeAws_restJson1BucketMetadata(entry, context);
    });
};
const deserializeAws_restJson1__listOfCriteriaForJob = (output, context) => {
    return (output || [])
        .filter((e) => e != null)
        .map((entry) => {
        if (entry === null) {
            return null;
        }
        return deserializeAws_restJson1CriteriaForJob(entry, context);
    });
};
const deserializeAws_restJson1__listOfCustomDataIdentifierSummary = (output, context) => {
    return (output || [])
        .filter((e) => e != null)
        .map((entry) => {
        if (entry === null) {
            return null;
        }
        return deserializeAws_restJson1CustomDataIdentifierSummary(entry, context);
    });
};
const deserializeAws_restJson1__listOfFinding = (output, context) => {
    return (output || [])
        .filter((e) => e != null)
        .map((entry) => {
        if (entry === null) {
            return null;
        }
        return deserializeAws_restJson1Finding(entry, context);
    });
};
const deserializeAws_restJson1__listOfFindingsFilterListItem = (output, context) => {
    return (output || [])
        .filter((e) => e != null)
        .map((entry) => {
        if (entry === null) {
            return null;
        }
        return deserializeAws_restJson1FindingsFilterListItem(entry, context);
    });
};
const deserializeAws_restJson1__listOfGroupCount = (output, context) => {
    return (output || [])
        .filter((e) => e != null)
        .map((entry) => {
        if (entry === null) {
            return null;
        }
        return deserializeAws_restJson1GroupCount(entry, context);
    });
};
const deserializeAws_restJson1__listOfInvitation = (output, context) => {
    return (output || [])
        .filter((e) => e != null)
        .map((entry) => {
        if (entry === null) {
            return null;
        }
        return deserializeAws_restJson1Invitation(entry, context);
    });
};
const deserializeAws_restJson1__listOfJobScopeTerm = (output, context) => {
    return (output || [])
        .filter((e) => e != null)
        .map((entry) => {
        if (entry === null) {
            return null;
        }
        return deserializeAws_restJson1JobScopeTerm(entry, context);
    });
};
const deserializeAws_restJson1__listOfJobSummary = (output, context) => {
    return (output || [])
        .filter((e) => e != null)
        .map((entry) => {
        if (entry === null) {
            return null;
        }
        return deserializeAws_restJson1JobSummary(entry, context);
    });
};
const deserializeAws_restJson1__listOfKeyValuePair = (output, context) => {
    return (output || [])
        .filter((e) => e != null)
        .map((entry) => {
        if (entry === null) {
            return null;
        }
        return deserializeAws_restJson1KeyValuePair(entry, context);
    });
};
const deserializeAws_restJson1__listOfMatchingResource = (output, context) => {
    return (output || [])
        .filter((e) => e != null)
        .map((entry) => {
        if (entry === null) {
            return null;
        }
        return deserializeAws_restJson1MatchingResource(entry, context);
    });
};
const deserializeAws_restJson1__listOfMember = (output, context) => {
    return (output || [])
        .filter((e) => e != null)
        .map((entry) => {
        if (entry === null) {
            return null;
        }
        return deserializeAws_restJson1Member(entry, context);
    });
};
const deserializeAws_restJson1__listOfS3BucketDefinitionForJob = (output, context) => {
    return (output || [])
        .filter((e) => e != null)
        .map((entry) => {
        if (entry === null) {
            return null;
        }
        return deserializeAws_restJson1S3BucketDefinitionForJob(entry, context);
    });
};
const deserializeAws_restJson1__listOfTagCriterionPairForJob = (output, context) => {
    return (output || [])
        .filter((e) => e != null)
        .map((entry) => {
        if (entry === null) {
            return null;
        }
        return deserializeAws_restJson1TagCriterionPairForJob(entry, context);
    });
};
const deserializeAws_restJson1__listOfTagValuePair = (output, context) => {
    return (output || [])
        .filter((e) => e != null)
        .map((entry) => {
        if (entry === null) {
            return null;
        }
        return deserializeAws_restJson1TagValuePair(entry, context);
    });
};
const deserializeAws_restJson1__listOfUnprocessedAccount = (output, context) => {
    return (output || [])
        .filter((e) => e != null)
        .map((entry) => {
        if (entry === null) {
            return null;
        }
        return deserializeAws_restJson1UnprocessedAccount(entry, context);
    });
};
const deserializeAws_restJson1__listOfUsageByAccount = (output, context) => {
    return (output || [])
        .filter((e) => e != null)
        .map((entry) => {
        if (entry === null) {
            return null;
        }
        return deserializeAws_restJson1UsageByAccount(entry, context);
    });
};
const deserializeAws_restJson1__listOfUsageRecord = (output, context) => {
    return (output || [])
        .filter((e) => e != null)
        .map((entry) => {
        if (entry === null) {
            return null;
        }
        return deserializeAws_restJson1UsageRecord(entry, context);
    });
};
const deserializeAws_restJson1__listOfUsageTotal = (output, context) => {
    return (output || [])
        .filter((e) => e != null)
        .map((entry) => {
        if (entry === null) {
            return null;
        }
        return deserializeAws_restJson1UsageTotal(entry, context);
    });
};
const deserializeAws_restJson1AccessControlList = (output, context) => {
    return {
        allowsPublicReadAccess: output.allowsPublicReadAccess !== undefined && output.allowsPublicReadAccess !== null
            ? output.allowsPublicReadAccess
            : undefined,
        allowsPublicWriteAccess: output.allowsPublicWriteAccess !== undefined && output.allowsPublicWriteAccess !== null
            ? output.allowsPublicWriteAccess
            : undefined,
    };
};
const deserializeAws_restJson1AccountLevelPermissions = (output, context) => {
    return {
        blockPublicAccess: output.blockPublicAccess !== undefined && output.blockPublicAccess !== null
            ? deserializeAws_restJson1BlockPublicAccess(output.blockPublicAccess, context)
            : undefined,
    };
};
const deserializeAws_restJson1AdminAccount = (output, context) => {
    return {
        accountId: output.accountId !== undefined && output.accountId !== null ? output.accountId : undefined,
        status: output.status !== undefined && output.status !== null ? output.status : undefined,
    };
};
const deserializeAws_restJson1ApiCallDetails = (output, context) => {
    return {
        api: output.api !== undefined && output.api !== null ? output.api : undefined,
        apiServiceName: output.apiServiceName !== undefined && output.apiServiceName !== null ? output.apiServiceName : undefined,
        firstSeen: output.firstSeen !== undefined && output.firstSeen !== null ? new Date(output.firstSeen) : undefined,
        lastSeen: output.lastSeen !== undefined && output.lastSeen !== null ? new Date(output.lastSeen) : undefined,
    };
};
const deserializeAws_restJson1AssumedRole = (output, context) => {
    return {
        accessKeyId: output.accessKeyId !== undefined && output.accessKeyId !== null ? output.accessKeyId : undefined,
        accountId: output.accountId !== undefined && output.accountId !== null ? output.accountId : undefined,
        arn: output.arn !== undefined && output.arn !== null ? output.arn : undefined,
        principalId: output.principalId !== undefined && output.principalId !== null ? output.principalId : undefined,
        sessionContext: output.sessionContext !== undefined && output.sessionContext !== null
            ? deserializeAws_restJson1SessionContext(output.sessionContext, context)
            : undefined,
    };
};
const deserializeAws_restJson1AwsAccount = (output, context) => {
    return {
        accountId: output.accountId !== undefined && output.accountId !== null ? output.accountId : undefined,
        principalId: output.principalId !== undefined && output.principalId !== null ? output.principalId : undefined,
    };
};
const deserializeAws_restJson1AwsService = (output, context) => {
    return {
        invokedBy: output.invokedBy !== undefined && output.invokedBy !== null ? output.invokedBy : undefined,
    };
};
const deserializeAws_restJson1BatchGetCustomDataIdentifierSummary = (output, context) => {
    return {
        arn: output.arn !== undefined && output.arn !== null ? output.arn : undefined,
        createdAt: output.createdAt !== undefined && output.createdAt !== null ? new Date(output.createdAt) : undefined,
        deleted: output.deleted !== undefined && output.deleted !== null ? output.deleted : undefined,
        description: output.description !== undefined && output.description !== null ? output.description : undefined,
        id: output.id !== undefined && output.id !== null ? output.id : undefined,
        name: output.name !== undefined && output.name !== null ? output.name : undefined,
    };
};
const deserializeAws_restJson1BlockPublicAccess = (output, context) => {
    return {
        blockPublicAcls: output.blockPublicAcls !== undefined && output.blockPublicAcls !== null ? output.blockPublicAcls : undefined,
        blockPublicPolicy: output.blockPublicPolicy !== undefined && output.blockPublicPolicy !== null
            ? output.blockPublicPolicy
            : undefined,
        ignorePublicAcls: output.ignorePublicAcls !== undefined && output.ignorePublicAcls !== null ? output.ignorePublicAcls : undefined,
        restrictPublicBuckets: output.restrictPublicBuckets !== undefined && output.restrictPublicBuckets !== null
            ? output.restrictPublicBuckets
            : undefined,
    };
};
const deserializeAws_restJson1BucketCountByEffectivePermission = (output, context) => {
    return {
        publiclyAccessible: output.publiclyAccessible !== undefined && output.publiclyAccessible !== null
            ? output.publiclyAccessible
            : undefined,
        publiclyReadable: output.publiclyReadable !== undefined && output.publiclyReadable !== null ? output.publiclyReadable : undefined,
        publiclyWritable: output.publiclyWritable !== undefined && output.publiclyWritable !== null ? output.publiclyWritable : undefined,
        unknown: output.unknown !== undefined && output.unknown !== null ? output.unknown : undefined,
    };
};
const deserializeAws_restJson1BucketCountByEncryptionType = (output, context) => {
    return {
        kmsManaged: output.kmsManaged !== undefined && output.kmsManaged !== null ? output.kmsManaged : undefined,
        s3Managed: output.s3Managed !== undefined && output.s3Managed !== null ? output.s3Managed : undefined,
        unencrypted: output.unencrypted !== undefined && output.unencrypted !== null ? output.unencrypted : undefined,
        unknown: output.unknown !== undefined && output.unknown !== null ? output.unknown : undefined,
    };
};
const deserializeAws_restJson1BucketCountBySharedAccessType = (output, context) => {
    return {
        external: output.external !== undefined && output.external !== null ? output.external : undefined,
        internal: output.internal !== undefined && output.internal !== null ? output.internal : undefined,
        notShared: output.notShared !== undefined && output.notShared !== null ? output.notShared : undefined,
        unknown: output.unknown !== undefined && output.unknown !== null ? output.unknown : undefined,
    };
};
const deserializeAws_restJson1BucketCountPolicyAllowsUnencryptedObjectUploads = (output, context) => {
    return {
        allowsUnencryptedObjectUploads: output.allowsUnencryptedObjectUploads !== undefined && output.allowsUnencryptedObjectUploads !== null
            ? output.allowsUnencryptedObjectUploads
            : undefined,
        deniesUnencryptedObjectUploads: output.deniesUnencryptedObjectUploads !== undefined && output.deniesUnencryptedObjectUploads !== null
            ? output.deniesUnencryptedObjectUploads
            : undefined,
        unknown: output.unknown !== undefined && output.unknown !== null ? output.unknown : undefined,
    };
};
const deserializeAws_restJson1BucketLevelPermissions = (output, context) => {
    return {
        accessControlList: output.accessControlList !== undefined && output.accessControlList !== null
            ? deserializeAws_restJson1AccessControlList(output.accessControlList, context)
            : undefined,
        blockPublicAccess: output.blockPublicAccess !== undefined && output.blockPublicAccess !== null
            ? deserializeAws_restJson1BlockPublicAccess(output.blockPublicAccess, context)
            : undefined,
        bucketPolicy: output.bucketPolicy !== undefined && output.bucketPolicy !== null
            ? deserializeAws_restJson1BucketPolicy(output.bucketPolicy, context)
            : undefined,
    };
};
const deserializeAws_restJson1BucketMetadata = (output, context) => {
    return {
        accountId: output.accountId !== undefined && output.accountId !== null ? output.accountId : undefined,
        allowsUnencryptedObjectUploads: output.allowsUnencryptedObjectUploads !== undefined && output.allowsUnencryptedObjectUploads !== null
            ? output.allowsUnencryptedObjectUploads
            : undefined,
        bucketArn: output.bucketArn !== undefined && output.bucketArn !== null ? output.bucketArn : undefined,
        bucketCreatedAt: output.bucketCreatedAt !== undefined && output.bucketCreatedAt !== null
            ? new Date(output.bucketCreatedAt)
            : undefined,
        bucketName: output.bucketName !== undefined && output.bucketName !== null ? output.bucketName : undefined,
        classifiableObjectCount: output.classifiableObjectCount !== undefined && output.classifiableObjectCount !== null
            ? output.classifiableObjectCount
            : undefined,
        classifiableSizeInBytes: output.classifiableSizeInBytes !== undefined && output.classifiableSizeInBytes !== null
            ? output.classifiableSizeInBytes
            : undefined,
        jobDetails: output.jobDetails !== undefined && output.jobDetails !== null
            ? deserializeAws_restJson1JobDetails(output.jobDetails, context)
            : undefined,
        lastUpdated: output.lastUpdated !== undefined && output.lastUpdated !== null ? new Date(output.lastUpdated) : undefined,
        objectCount: output.objectCount !== undefined && output.objectCount !== null ? output.objectCount : undefined,
        objectCountByEncryptionType: output.objectCountByEncryptionType !== undefined && output.objectCountByEncryptionType !== null
            ? deserializeAws_restJson1ObjectCountByEncryptionType(output.objectCountByEncryptionType, context)
            : undefined,
        publicAccess: output.publicAccess !== undefined && output.publicAccess !== null
            ? deserializeAws_restJson1BucketPublicAccess(output.publicAccess, context)
            : undefined,
        region: output.region !== undefined && output.region !== null ? output.region : undefined,
        replicationDetails: output.replicationDetails !== undefined && output.replicationDetails !== null
            ? deserializeAws_restJson1ReplicationDetails(output.replicationDetails, context)
            : undefined,
        serverSideEncryption: output.serverSideEncryption !== undefined && output.serverSideEncryption !== null
            ? deserializeAws_restJson1BucketServerSideEncryption(output.serverSideEncryption, context)
            : undefined,
        sharedAccess: output.sharedAccess !== undefined && output.sharedAccess !== null ? output.sharedAccess : undefined,
        sizeInBytes: output.sizeInBytes !== undefined && output.sizeInBytes !== null ? output.sizeInBytes : undefined,
        sizeInBytesCompressed: output.sizeInBytesCompressed !== undefined && output.sizeInBytesCompressed !== null
            ? output.sizeInBytesCompressed
            : undefined,
        tags: output.tags !== undefined && output.tags !== null
            ? deserializeAws_restJson1__listOfKeyValuePair(output.tags, context)
            : undefined,
        unclassifiableObjectCount: output.unclassifiableObjectCount !== undefined && output.unclassifiableObjectCount !== null
            ? deserializeAws_restJson1ObjectLevelStatistics(output.unclassifiableObjectCount, context)
            : undefined,
        unclassifiableObjectSizeInBytes: output.unclassifiableObjectSizeInBytes !== undefined && output.unclassifiableObjectSizeInBytes !== null
            ? deserializeAws_restJson1ObjectLevelStatistics(output.unclassifiableObjectSizeInBytes, context)
            : undefined,
        versioning: output.versioning !== undefined && output.versioning !== null ? output.versioning : undefined,
    };
};
const deserializeAws_restJson1BucketPermissionConfiguration = (output, context) => {
    return {
        accountLevelPermissions: output.accountLevelPermissions !== undefined && output.accountLevelPermissions !== null
            ? deserializeAws_restJson1AccountLevelPermissions(output.accountLevelPermissions, context)
            : undefined,
        bucketLevelPermissions: output.bucketLevelPermissions !== undefined && output.bucketLevelPermissions !== null
            ? deserializeAws_restJson1BucketLevelPermissions(output.bucketLevelPermissions, context)
            : undefined,
    };
};
const deserializeAws_restJson1BucketPolicy = (output, context) => {
    return {
        allowsPublicReadAccess: output.allowsPublicReadAccess !== undefined && output.allowsPublicReadAccess !== null
            ? output.allowsPublicReadAccess
            : undefined,
        allowsPublicWriteAccess: output.allowsPublicWriteAccess !== undefined && output.allowsPublicWriteAccess !== null
            ? output.allowsPublicWriteAccess
            : undefined,
    };
};
const deserializeAws_restJson1BucketPublicAccess = (output, context) => {
    return {
        effectivePermission: output.effectivePermission !== undefined && output.effectivePermission !== null
            ? output.effectivePermission
            : undefined,
        permissionConfiguration: output.permissionConfiguration !== undefined && output.permissionConfiguration !== null
            ? deserializeAws_restJson1BucketPermissionConfiguration(output.permissionConfiguration, context)
            : undefined,
    };
};
const deserializeAws_restJson1BucketServerSideEncryption = (output, context) => {
    return {
        kmsMasterKeyId: output.kmsMasterKeyId !== undefined && output.kmsMasterKeyId !== null ? output.kmsMasterKeyId : undefined,
        type: output.type !== undefined && output.type !== null ? output.type : undefined,
    };
};
const deserializeAws_restJson1Cell = (output, context) => {
    return {
        cellReference: output.cellReference !== undefined && output.cellReference !== null ? output.cellReference : undefined,
        column: output.column !== undefined && output.column !== null ? output.column : undefined,
        columnName: output.columnName !== undefined && output.columnName !== null ? output.columnName : undefined,
        row: output.row !== undefined && output.row !== null ? output.row : undefined,
    };
};
const deserializeAws_restJson1Cells = (output, context) => {
    return (output || [])
        .filter((e) => e != null)
        .map((entry) => {
        if (entry === null) {
            return null;
        }
        return deserializeAws_restJson1Cell(entry, context);
    });
};
const deserializeAws_restJson1ClassificationDetails = (output, context) => {
    return {
        detailedResultsLocation: output.detailedResultsLocation !== undefined && output.detailedResultsLocation !== null
            ? output.detailedResultsLocation
            : undefined,
        jobArn: output.jobArn !== undefined && output.jobArn !== null ? output.jobArn : undefined,
        jobId: output.jobId !== undefined && output.jobId !== null ? output.jobId : undefined,
        result: output.result !== undefined && output.result !== null
            ? deserializeAws_restJson1ClassificationResult(output.result, context)
            : undefined,
    };
};
const deserializeAws_restJson1ClassificationExportConfiguration = (output, context) => {
    return {
        s3Destination: output.s3Destination !== undefined && output.s3Destination !== null
            ? deserializeAws_restJson1S3Destination(output.s3Destination, context)
            : undefined,
    };
};
const deserializeAws_restJson1ClassificationResult = (output, context) => {
    return {
        additionalOccurrences: output.additionalOccurrences !== undefined && output.additionalOccurrences !== null
            ? output.additionalOccurrences
            : undefined,
        customDataIdentifiers: output.customDataIdentifiers !== undefined && output.customDataIdentifiers !== null
            ? deserializeAws_restJson1CustomDataIdentifiers(output.customDataIdentifiers, context)
            : undefined,
        mimeType: output.mimeType !== undefined && output.mimeType !== null ? output.mimeType : undefined,
        sensitiveData: output.sensitiveData !== undefined && output.sensitiveData !== null
            ? deserializeAws_restJson1SensitiveData(output.sensitiveData, context)
            : undefined,
        sizeClassified: output.sizeClassified !== undefined && output.sizeClassified !== null ? output.sizeClassified : undefined,
        status: output.status !== undefined && output.status !== null
            ? deserializeAws_restJson1ClassificationResultStatus(output.status, context)
            : undefined,
    };
};
const deserializeAws_restJson1ClassificationResultStatus = (output, context) => {
    return {
        code: output.code !== undefined && output.code !== null ? output.code : undefined,
        reason: output.reason !== undefined && output.reason !== null ? output.reason : undefined,
    };
};
const deserializeAws_restJson1CriteriaBlockForJob = (output, context) => {
    return {
        and: output.and !== undefined && output.and !== null
            ? deserializeAws_restJson1__listOfCriteriaForJob(output.and, context)
            : undefined,
    };
};
const deserializeAws_restJson1CriteriaForJob = (output, context) => {
    return {
        simpleCriterion: output.simpleCriterion !== undefined && output.simpleCriterion !== null
            ? deserializeAws_restJson1SimpleCriterionForJob(output.simpleCriterion, context)
            : undefined,
        tagCriterion: output.tagCriterion !== undefined && output.tagCriterion !== null
            ? deserializeAws_restJson1TagCriterionForJob(output.tagCriterion, context)
            : undefined,
    };
};
const deserializeAws_restJson1Criterion = (output, context) => {
    return Object.entries(output).reduce((acc, [key, value]) => {
        if (value === null) {
            return acc;
        }
        return {
            ...acc,
            [key]: deserializeAws_restJson1CriterionAdditionalProperties(value, context),
        };
    }, {});
};
const deserializeAws_restJson1CriterionAdditionalProperties = (output, context) => {
    return {
        eq: output.eq !== undefined && output.eq !== null
            ? deserializeAws_restJson1__listOf__string(output.eq, context)
            : undefined,
        eqExactMatch: output.eqExactMatch !== undefined && output.eqExactMatch !== null
            ? deserializeAws_restJson1__listOf__string(output.eqExactMatch, context)
            : undefined,
        gt: output.gt !== undefined && output.gt !== null ? output.gt : undefined,
        gte: output.gte !== undefined && output.gte !== null ? output.gte : undefined,
        lt: output.lt !== undefined && output.lt !== null ? output.lt : undefined,
        lte: output.lte !== undefined && output.lte !== null ? output.lte : undefined,
        neq: output.neq !== undefined && output.neq !== null
            ? deserializeAws_restJson1__listOf__string(output.neq, context)
            : undefined,
    };
};
const deserializeAws_restJson1CustomDataIdentifiers = (output, context) => {
    return {
        detections: output.detections !== undefined && output.detections !== null
            ? deserializeAws_restJson1CustomDetections(output.detections, context)
            : undefined,
        totalCount: output.totalCount !== undefined && output.totalCount !== null ? output.totalCount : undefined,
    };
};
const deserializeAws_restJson1CustomDataIdentifierSummary = (output, context) => {
    return {
        arn: output.arn !== undefined && output.arn !== null ? output.arn : undefined,
        createdAt: output.createdAt !== undefined && output.createdAt !== null ? new Date(output.createdAt) : undefined,
        description: output.description !== undefined && output.description !== null ? output.description : undefined,
        id: output.id !== undefined && output.id !== null ? output.id : undefined,
        name: output.name !== undefined && output.name !== null ? output.name : undefined,
    };
};
const deserializeAws_restJson1CustomDetection = (output, context) => {
    return {
        arn: output.arn !== undefined && output.arn !== null ? output.arn : undefined,
        count: output.count !== undefined && output.count !== null ? output.count : undefined,
        name: output.name !== undefined && output.name !== null ? output.name : undefined,
        occurrences: output.occurrences !== undefined && output.occurrences !== null
            ? deserializeAws_restJson1Occurrences(output.occurrences, context)
            : undefined,
    };
};
const deserializeAws_restJson1CustomDetections = (output, context) => {
    return (output || [])
        .filter((e) => e != null)
        .map((entry) => {
        if (entry === null) {
            return null;
        }
        return deserializeAws_restJson1CustomDetection(entry, context);
    });
};
const deserializeAws_restJson1DailySchedule = (output, context) => {
    return {};
};
const deserializeAws_restJson1DefaultDetection = (output, context) => {
    return {
        count: output.count !== undefined && output.count !== null ? output.count : undefined,
        occurrences: output.occurrences !== undefined && output.occurrences !== null
            ? deserializeAws_restJson1Occurrences(output.occurrences, context)
            : undefined,
        type: output.type !== undefined && output.type !== null ? output.type : undefined,
    };
};
const deserializeAws_restJson1DefaultDetections = (output, context) => {
    return (output || [])
        .filter((e) => e != null)
        .map((entry) => {
        if (entry === null) {
            return null;
        }
        return deserializeAws_restJson1DefaultDetection(entry, context);
    });
};
const deserializeAws_restJson1DomainDetails = (output, context) => {
    return {
        domainName: output.domainName !== undefined && output.domainName !== null ? output.domainName : undefined,
    };
};
const deserializeAws_restJson1FederatedUser = (output, context) => {
    return {
        accessKeyId: output.accessKeyId !== undefined && output.accessKeyId !== null ? output.accessKeyId : undefined,
        accountId: output.accountId !== undefined && output.accountId !== null ? output.accountId : undefined,
        arn: output.arn !== undefined && output.arn !== null ? output.arn : undefined,
        principalId: output.principalId !== undefined && output.principalId !== null ? output.principalId : undefined,
        sessionContext: output.sessionContext !== undefined && output.sessionContext !== null
            ? deserializeAws_restJson1SessionContext(output.sessionContext, context)
            : undefined,
    };
};
const deserializeAws_restJson1Finding = (output, context) => {
    return {
        accountId: output.accountId !== undefined && output.accountId !== null ? output.accountId : undefined,
        archived: output.archived !== undefined && output.archived !== null ? output.archived : undefined,
        category: output.category !== undefined && output.category !== null ? output.category : undefined,
        classificationDetails: output.classificationDetails !== undefined && output.classificationDetails !== null
            ? deserializeAws_restJson1ClassificationDetails(output.classificationDetails, context)
            : undefined,
        count: output.count !== undefined && output.count !== null ? output.count : undefined,
        createdAt: output.createdAt !== undefined && output.createdAt !== null ? new Date(output.createdAt) : undefined,
        description: output.description !== undefined && output.description !== null ? output.description : undefined,
        id: output.id !== undefined && output.id !== null ? output.id : undefined,
        partition: output.partition !== undefined && output.partition !== null ? output.partition : undefined,
        policyDetails: output.policyDetails !== undefined && output.policyDetails !== null
            ? deserializeAws_restJson1PolicyDetails(output.policyDetails, context)
            : undefined,
        region: output.region !== undefined && output.region !== null ? output.region : undefined,
        resourcesAffected: output.resourcesAffected !== undefined && output.resourcesAffected !== null
            ? deserializeAws_restJson1ResourcesAffected(output.resourcesAffected, context)
            : undefined,
        sample: output.sample !== undefined && output.sample !== null ? output.sample : undefined,
        schemaVersion: output.schemaVersion !== undefined && output.schemaVersion !== null ? output.schemaVersion : undefined,
        severity: output.severity !== undefined && output.severity !== null
            ? deserializeAws_restJson1Severity(output.severity, context)
            : undefined,
        title: output.title !== undefined && output.title !== null ? output.title : undefined,
        type: output.type !== undefined && output.type !== null ? output.type : undefined,
        updatedAt: output.updatedAt !== undefined && output.updatedAt !== null ? new Date(output.updatedAt) : undefined,
    };
};
const deserializeAws_restJson1FindingAction = (output, context) => {
    return {
        actionType: output.actionType !== undefined && output.actionType !== null ? output.actionType : undefined,
        apiCallDetails: output.apiCallDetails !== undefined && output.apiCallDetails !== null
            ? deserializeAws_restJson1ApiCallDetails(output.apiCallDetails, context)
            : undefined,
    };
};
const deserializeAws_restJson1FindingActor = (output, context) => {
    return {
        domainDetails: output.domainDetails !== undefined && output.domainDetails !== null
            ? deserializeAws_restJson1DomainDetails(output.domainDetails, context)
            : undefined,
        ipAddressDetails: output.ipAddressDetails !== undefined && output.ipAddressDetails !== null
            ? deserializeAws_restJson1IpAddressDetails(output.ipAddressDetails, context)
            : undefined,
        userIdentity: output.userIdentity !== undefined && output.userIdentity !== null
            ? deserializeAws_restJson1UserIdentity(output.userIdentity, context)
            : undefined,
    };
};
const deserializeAws_restJson1FindingCriteria = (output, context) => {
    return {
        criterion: output.criterion !== undefined && output.criterion !== null
            ? deserializeAws_restJson1Criterion(output.criterion, context)
            : undefined,
    };
};
const deserializeAws_restJson1FindingsFilterListItem = (output, context) => {
    return {
        action: output.action !== undefined && output.action !== null ? output.action : undefined,
        arn: output.arn !== undefined && output.arn !== null ? output.arn : undefined,
        id: output.id !== undefined && output.id !== null ? output.id : undefined,
        name: output.name !== undefined && output.name !== null ? output.name : undefined,
        tags: output.tags !== undefined && output.tags !== null
            ? deserializeAws_restJson1TagMap(output.tags, context)
            : undefined,
    };
};
const deserializeAws_restJson1GroupCount = (output, context) => {
    return {
        count: output.count !== undefined && output.count !== null ? output.count : undefined,
        groupKey: output.groupKey !== undefined && output.groupKey !== null ? output.groupKey : undefined,
    };
};
const deserializeAws_restJson1IamUser = (output, context) => {
    return {
        accountId: output.accountId !== undefined && output.accountId !== null ? output.accountId : undefined,
        arn: output.arn !== undefined && output.arn !== null ? output.arn : undefined,
        principalId: output.principalId !== undefined && output.principalId !== null ? output.principalId : undefined,
        userName: output.userName !== undefined && output.userName !== null ? output.userName : undefined,
    };
};
const deserializeAws_restJson1Invitation = (output, context) => {
    return {
        accountId: output.accountId !== undefined && output.accountId !== null ? output.accountId : undefined,
        invitationId: output.invitationId !== undefined && output.invitationId !== null ? output.invitationId : undefined,
        invitedAt: output.invitedAt !== undefined && output.invitedAt !== null ? new Date(output.invitedAt) : undefined,
        relationshipStatus: output.relationshipStatus !== undefined && output.relationshipStatus !== null
            ? output.relationshipStatus
            : undefined,
    };
};
const deserializeAws_restJson1IpAddressDetails = (output, context) => {
    return {
        ipAddressV4: output.ipAddressV4 !== undefined && output.ipAddressV4 !== null ? output.ipAddressV4 : undefined,
        ipCity: output.ipCity !== undefined && output.ipCity !== null
            ? deserializeAws_restJson1IpCity(output.ipCity, context)
            : undefined,
        ipCountry: output.ipCountry !== undefined && output.ipCountry !== null
            ? deserializeAws_restJson1IpCountry(output.ipCountry, context)
            : undefined,
        ipGeoLocation: output.ipGeoLocation !== undefined && output.ipGeoLocation !== null
            ? deserializeAws_restJson1IpGeoLocation(output.ipGeoLocation, context)
            : undefined,
        ipOwner: output.ipOwner !== undefined && output.ipOwner !== null
            ? deserializeAws_restJson1IpOwner(output.ipOwner, context)
            : undefined,
    };
};
const deserializeAws_restJson1IpCity = (output, context) => {
    return {
        name: output.name !== undefined && output.name !== null ? output.name : undefined,
    };
};
const deserializeAws_restJson1IpCountry = (output, context) => {
    return {
        code: output.code !== undefined && output.code !== null ? output.code : undefined,
        name: output.name !== undefined && output.name !== null ? output.name : undefined,
    };
};
const deserializeAws_restJson1IpGeoLocation = (output, context) => {
    return {
        lat: output.lat !== undefined && output.lat !== null ? output.lat : undefined,
        lon: output.lon !== undefined && output.lon !== null ? output.lon : undefined,
    };
};
const deserializeAws_restJson1IpOwner = (output, context) => {
    return {
        asn: output.asn !== undefined && output.asn !== null ? output.asn : undefined,
        asnOrg: output.asnOrg !== undefined && output.asnOrg !== null ? output.asnOrg : undefined,
        isp: output.isp !== undefined && output.isp !== null ? output.isp : undefined,
        org: output.org !== undefined && output.org !== null ? output.org : undefined,
    };
};
const deserializeAws_restJson1JobDetails = (output, context) => {
    return {
        isDefinedInJob: output.isDefinedInJob !== undefined && output.isDefinedInJob !== null ? output.isDefinedInJob : undefined,
        isMonitoredByJob: output.isMonitoredByJob !== undefined && output.isMonitoredByJob !== null ? output.isMonitoredByJob : undefined,
        lastJobId: output.lastJobId !== undefined && output.lastJobId !== null ? output.lastJobId : undefined,
        lastJobRunTime: output.lastJobRunTime !== undefined && output.lastJobRunTime !== null
            ? new Date(output.lastJobRunTime)
            : undefined,
    };
};
const deserializeAws_restJson1JobScheduleFrequency = (output, context) => {
    return {
        dailySchedule: output.dailySchedule !== undefined && output.dailySchedule !== null
            ? deserializeAws_restJson1DailySchedule(output.dailySchedule, context)
            : undefined,
        monthlySchedule: output.monthlySchedule !== undefined && output.monthlySchedule !== null
            ? deserializeAws_restJson1MonthlySchedule(output.monthlySchedule, context)
            : undefined,
        weeklySchedule: output.weeklySchedule !== undefined && output.weeklySchedule !== null
            ? deserializeAws_restJson1WeeklySchedule(output.weeklySchedule, context)
            : undefined,
    };
};
const deserializeAws_restJson1JobScopeTerm = (output, context) => {
    return {
        simpleScopeTerm: output.simpleScopeTerm !== undefined && output.simpleScopeTerm !== null
            ? deserializeAws_restJson1SimpleScopeTerm(output.simpleScopeTerm, context)
            : undefined,
        tagScopeTerm: output.tagScopeTerm !== undefined && output.tagScopeTerm !== null
            ? deserializeAws_restJson1TagScopeTerm(output.tagScopeTerm, context)
            : undefined,
    };
};
const deserializeAws_restJson1JobScopingBlock = (output, context) => {
    return {
        and: output.and !== undefined && output.and !== null
            ? deserializeAws_restJson1__listOfJobScopeTerm(output.and, context)
            : undefined,
    };
};
const deserializeAws_restJson1JobSummary = (output, context) => {
    return {
        bucketCriteria: output.bucketCriteria !== undefined && output.bucketCriteria !== null
            ? deserializeAws_restJson1S3BucketCriteriaForJob(output.bucketCriteria, context)
            : undefined,
        bucketDefinitions: output.bucketDefinitions !== undefined && output.bucketDefinitions !== null
            ? deserializeAws_restJson1__listOfS3BucketDefinitionForJob(output.bucketDefinitions, context)
            : undefined,
        createdAt: output.createdAt !== undefined && output.createdAt !== null ? new Date(output.createdAt) : undefined,
        jobId: output.jobId !== undefined && output.jobId !== null ? output.jobId : undefined,
        jobStatus: output.jobStatus !== undefined && output.jobStatus !== null ? output.jobStatus : undefined,
        jobType: output.jobType !== undefined && output.jobType !== null ? output.jobType : undefined,
        lastRunErrorStatus: output.lastRunErrorStatus !== undefined && output.lastRunErrorStatus !== null
            ? deserializeAws_restJson1LastRunErrorStatus(output.lastRunErrorStatus, context)
            : undefined,
        name: output.name !== undefined && output.name !== null ? output.name : undefined,
        userPausedDetails: output.userPausedDetails !== undefined && output.userPausedDetails !== null
            ? deserializeAws_restJson1UserPausedDetails(output.userPausedDetails, context)
            : undefined,
    };
};
const deserializeAws_restJson1KeyValuePair = (output, context) => {
    return {
        key: output.key !== undefined && output.key !== null ? output.key : undefined,
        value: output.value !== undefined && output.value !== null ? output.value : undefined,
    };
};
const deserializeAws_restJson1KeyValuePairList = (output, context) => {
    return (output || [])
        .filter((e) => e != null)
        .map((entry) => {
        if (entry === null) {
            return null;
        }
        return deserializeAws_restJson1KeyValuePair(entry, context);
    });
};
const deserializeAws_restJson1LastRunErrorStatus = (output, context) => {
    return {
        code: output.code !== undefined && output.code !== null ? output.code : undefined,
    };
};
const deserializeAws_restJson1MatchingBucket = (output, context) => {
    return {
        accountId: output.accountId !== undefined && output.accountId !== null ? output.accountId : undefined,
        bucketName: output.bucketName !== undefined && output.bucketName !== null ? output.bucketName : undefined,
        classifiableObjectCount: output.classifiableObjectCount !== undefined && output.classifiableObjectCount !== null
            ? output.classifiableObjectCount
            : undefined,
        classifiableSizeInBytes: output.classifiableSizeInBytes !== undefined && output.classifiableSizeInBytes !== null
            ? output.classifiableSizeInBytes
            : undefined,
        jobDetails: output.jobDetails !== undefined && output.jobDetails !== null
            ? deserializeAws_restJson1JobDetails(output.jobDetails, context)
            : undefined,
        objectCount: output.objectCount !== undefined && output.objectCount !== null ? output.objectCount : undefined,
        objectCountByEncryptionType: output.objectCountByEncryptionType !== undefined && output.objectCountByEncryptionType !== null
            ? deserializeAws_restJson1ObjectCountByEncryptionType(output.objectCountByEncryptionType, context)
            : undefined,
        sizeInBytes: output.sizeInBytes !== undefined && output.sizeInBytes !== null ? output.sizeInBytes : undefined,
        sizeInBytesCompressed: output.sizeInBytesCompressed !== undefined && output.sizeInBytesCompressed !== null
            ? output.sizeInBytesCompressed
            : undefined,
        unclassifiableObjectCount: output.unclassifiableObjectCount !== undefined && output.unclassifiableObjectCount !== null
            ? deserializeAws_restJson1ObjectLevelStatistics(output.unclassifiableObjectCount, context)
            : undefined,
        unclassifiableObjectSizeInBytes: output.unclassifiableObjectSizeInBytes !== undefined && output.unclassifiableObjectSizeInBytes !== null
            ? deserializeAws_restJson1ObjectLevelStatistics(output.unclassifiableObjectSizeInBytes, context)
            : undefined,
    };
};
const deserializeAws_restJson1MatchingResource = (output, context) => {
    return {
        matchingBucket: output.matchingBucket !== undefined && output.matchingBucket !== null
            ? deserializeAws_restJson1MatchingBucket(output.matchingBucket, context)
            : undefined,
    };
};
const deserializeAws_restJson1Member = (output, context) => {
    return {
        accountId: output.accountId !== undefined && output.accountId !== null ? output.accountId : undefined,
        administratorAccountId: output.administratorAccountId !== undefined && output.administratorAccountId !== null
            ? output.administratorAccountId
            : undefined,
        arn: output.arn !== undefined && output.arn !== null ? output.arn : undefined,
        email: output.email !== undefined && output.email !== null ? output.email : undefined,
        invitedAt: output.invitedAt !== undefined && output.invitedAt !== null ? new Date(output.invitedAt) : undefined,
        masterAccountId: output.masterAccountId !== undefined && output.masterAccountId !== null ? output.masterAccountId : undefined,
        relationshipStatus: output.relationshipStatus !== undefined && output.relationshipStatus !== null
            ? output.relationshipStatus
            : undefined,
        tags: output.tags !== undefined && output.tags !== null
            ? deserializeAws_restJson1TagMap(output.tags, context)
            : undefined,
        updatedAt: output.updatedAt !== undefined && output.updatedAt !== null ? new Date(output.updatedAt) : undefined,
    };
};
const deserializeAws_restJson1MonthlySchedule = (output, context) => {
    return {
        dayOfMonth: output.dayOfMonth !== undefined && output.dayOfMonth !== null ? output.dayOfMonth : undefined,
    };
};
const deserializeAws_restJson1ObjectCountByEncryptionType = (output, context) => {
    return {
        customerManaged: output.customerManaged !== undefined && output.customerManaged !== null ? output.customerManaged : undefined,
        kmsManaged: output.kmsManaged !== undefined && output.kmsManaged !== null ? output.kmsManaged : undefined,
        s3Managed: output.s3Managed !== undefined && output.s3Managed !== null ? output.s3Managed : undefined,
        unencrypted: output.unencrypted !== undefined && output.unencrypted !== null ? output.unencrypted : undefined,
        unknown: output.unknown !== undefined && output.unknown !== null ? output.unknown : undefined,
    };
};
const deserializeAws_restJson1ObjectLevelStatistics = (output, context) => {
    return {
        fileType: output.fileType !== undefined && output.fileType !== null ? output.fileType : undefined,
        storageClass: output.storageClass !== undefined && output.storageClass !== null ? output.storageClass : undefined,
        total: output.total !== undefined && output.total !== null ? output.total : undefined,
    };
};
const deserializeAws_restJson1Occurrences = (output, context) => {
    return {
        cells: output.cells !== undefined && output.cells !== null
            ? deserializeAws_restJson1Cells(output.cells, context)
            : undefined,
        lineRanges: output.lineRanges !== undefined && output.lineRanges !== null
            ? deserializeAws_restJson1Ranges(output.lineRanges, context)
            : undefined,
        offsetRanges: output.offsetRanges !== undefined && output.offsetRanges !== null
            ? deserializeAws_restJson1Ranges(output.offsetRanges, context)
            : undefined,
        pages: output.pages !== undefined && output.pages !== null
            ? deserializeAws_restJson1Pages(output.pages, context)
            : undefined,
        records: output.records !== undefined && output.records !== null
            ? deserializeAws_restJson1Records(output.records, context)
            : undefined,
    };
};
const deserializeAws_restJson1Page = (output, context) => {
    return {
        lineRange: output.lineRange !== undefined && output.lineRange !== null
            ? deserializeAws_restJson1Range(output.lineRange, context)
            : undefined,
        offsetRange: output.offsetRange !== undefined && output.offsetRange !== null
            ? deserializeAws_restJson1Range(output.offsetRange, context)
            : undefined,
        pageNumber: output.pageNumber !== undefined && output.pageNumber !== null ? output.pageNumber : undefined,
    };
};
const deserializeAws_restJson1Pages = (output, context) => {
    return (output || [])
        .filter((e) => e != null)
        .map((entry) => {
        if (entry === null) {
            return null;
        }
        return deserializeAws_restJson1Page(entry, context);
    });
};
const deserializeAws_restJson1PolicyDetails = (output, context) => {
    return {
        action: output.action !== undefined && output.action !== null
            ? deserializeAws_restJson1FindingAction(output.action, context)
            : undefined,
        actor: output.actor !== undefined && output.actor !== null
            ? deserializeAws_restJson1FindingActor(output.actor, context)
            : undefined,
    };
};
const deserializeAws_restJson1Range = (output, context) => {
    return {
        end: output.end !== undefined && output.end !== null ? output.end : undefined,
        start: output.start !== undefined && output.start !== null ? output.start : undefined,
        startColumn: output.startColumn !== undefined && output.startColumn !== null ? output.startColumn : undefined,
    };
};
const deserializeAws_restJson1Ranges = (output, context) => {
    return (output || [])
        .filter((e) => e != null)
        .map((entry) => {
        if (entry === null) {
            return null;
        }
        return deserializeAws_restJson1Range(entry, context);
    });
};
const deserializeAws_restJson1_Record = (output, context) => {
    return {
        jsonPath: output.jsonPath !== undefined && output.jsonPath !== null ? output.jsonPath : undefined,
        recordIndex: output.recordIndex !== undefined && output.recordIndex !== null ? output.recordIndex : undefined,
    };
};
const deserializeAws_restJson1Records = (output, context) => {
    return (output || [])
        .filter((e) => e != null)
        .map((entry) => {
        if (entry === null) {
            return null;
        }
        return deserializeAws_restJson1_Record(entry, context);
    });
};
const deserializeAws_restJson1ReplicationDetails = (output, context) => {
    return {
        replicated: output.replicated !== undefined && output.replicated !== null ? output.replicated : undefined,
        replicatedExternally: output.replicatedExternally !== undefined && output.replicatedExternally !== null
            ? output.replicatedExternally
            : undefined,
        replicationAccounts: output.replicationAccounts !== undefined && output.replicationAccounts !== null
            ? deserializeAws_restJson1__listOf__string(output.replicationAccounts, context)
            : undefined,
    };
};
const deserializeAws_restJson1ResourcesAffected = (output, context) => {
    return {
        s3Bucket: output.s3Bucket !== undefined && output.s3Bucket !== null
            ? deserializeAws_restJson1S3Bucket(output.s3Bucket, context)
            : undefined,
        s3Object: output.s3Object !== undefined && output.s3Object !== null
            ? deserializeAws_restJson1S3Object(output.s3Object, context)
            : undefined,
    };
};
const deserializeAws_restJson1S3Bucket = (output, context) => {
    return {
        allowsUnencryptedObjectUploads: output.allowsUnencryptedObjectUploads !== undefined && output.allowsUnencryptedObjectUploads !== null
            ? output.allowsUnencryptedObjectUploads
            : undefined,
        arn: output.arn !== undefined && output.arn !== null ? output.arn : undefined,
        createdAt: output.createdAt !== undefined && output.createdAt !== null ? new Date(output.createdAt) : undefined,
        defaultServerSideEncryption: output.defaultServerSideEncryption !== undefined && output.defaultServerSideEncryption !== null
            ? deserializeAws_restJson1ServerSideEncryption(output.defaultServerSideEncryption, context)
            : undefined,
        name: output.name !== undefined && output.name !== null ? output.name : undefined,
        owner: output.owner !== undefined && output.owner !== null
            ? deserializeAws_restJson1S3BucketOwner(output.owner, context)
            : undefined,
        publicAccess: output.publicAccess !== undefined && output.publicAccess !== null
            ? deserializeAws_restJson1BucketPublicAccess(output.publicAccess, context)
            : undefined,
        tags: output.tags !== undefined && output.tags !== null
            ? deserializeAws_restJson1KeyValuePairList(output.tags, context)
            : undefined,
    };
};
const deserializeAws_restJson1S3BucketCriteriaForJob = (output, context) => {
    return {
        excludes: output.excludes !== undefined && output.excludes !== null
            ? deserializeAws_restJson1CriteriaBlockForJob(output.excludes, context)
            : undefined,
        includes: output.includes !== undefined && output.includes !== null
            ? deserializeAws_restJson1CriteriaBlockForJob(output.includes, context)
            : undefined,
    };
};
const deserializeAws_restJson1S3BucketDefinitionForJob = (output, context) => {
    return {
        accountId: output.accountId !== undefined && output.accountId !== null ? output.accountId : undefined,
        buckets: output.buckets !== undefined && output.buckets !== null
            ? deserializeAws_restJson1__listOf__string(output.buckets, context)
            : undefined,
    };
};
const deserializeAws_restJson1S3BucketOwner = (output, context) => {
    return {
        displayName: output.displayName !== undefined && output.displayName !== null ? output.displayName : undefined,
        id: output.id !== undefined && output.id !== null ? output.id : undefined,
    };
};
const deserializeAws_restJson1S3Destination = (output, context) => {
    return {
        bucketName: output.bucketName !== undefined && output.bucketName !== null ? output.bucketName : undefined,
        keyPrefix: output.keyPrefix !== undefined && output.keyPrefix !== null ? output.keyPrefix : undefined,
        kmsKeyArn: output.kmsKeyArn !== undefined && output.kmsKeyArn !== null ? output.kmsKeyArn : undefined,
    };
};
const deserializeAws_restJson1S3JobDefinition = (output, context) => {
    return {
        bucketCriteria: output.bucketCriteria !== undefined && output.bucketCriteria !== null
            ? deserializeAws_restJson1S3BucketCriteriaForJob(output.bucketCriteria, context)
            : undefined,
        bucketDefinitions: output.bucketDefinitions !== undefined && output.bucketDefinitions !== null
            ? deserializeAws_restJson1__listOfS3BucketDefinitionForJob(output.bucketDefinitions, context)
            : undefined,
        scoping: output.scoping !== undefined && output.scoping !== null
            ? deserializeAws_restJson1Scoping(output.scoping, context)
            : undefined,
    };
};
const deserializeAws_restJson1S3Object = (output, context) => {
    return {
        bucketArn: output.bucketArn !== undefined && output.bucketArn !== null ? output.bucketArn : undefined,
        eTag: output.eTag !== undefined && output.eTag !== null ? output.eTag : undefined,
        extension: output.extension !== undefined && output.extension !== null ? output.extension : undefined,
        key: output.key !== undefined && output.key !== null ? output.key : undefined,
        lastModified: output.lastModified !== undefined && output.lastModified !== null ? new Date(output.lastModified) : undefined,
        path: output.path !== undefined && output.path !== null ? output.path : undefined,
        publicAccess: output.publicAccess !== undefined && output.publicAccess !== null ? output.publicAccess : undefined,
        serverSideEncryption: output.serverSideEncryption !== undefined && output.serverSideEncryption !== null
            ? deserializeAws_restJson1ServerSideEncryption(output.serverSideEncryption, context)
            : undefined,
        size: output.size !== undefined && output.size !== null ? output.size : undefined,
        storageClass: output.storageClass !== undefined && output.storageClass !== null ? output.storageClass : undefined,
        tags: output.tags !== undefined && output.tags !== null
            ? deserializeAws_restJson1KeyValuePairList(output.tags, context)
            : undefined,
        versionId: output.versionId !== undefined && output.versionId !== null ? output.versionId : undefined,
    };
};
const deserializeAws_restJson1Scoping = (output, context) => {
    return {
        excludes: output.excludes !== undefined && output.excludes !== null
            ? deserializeAws_restJson1JobScopingBlock(output.excludes, context)
            : undefined,
        includes: output.includes !== undefined && output.includes !== null
            ? deserializeAws_restJson1JobScopingBlock(output.includes, context)
            : undefined,
    };
};
const deserializeAws_restJson1SecurityHubConfiguration = (output, context) => {
    return {
        publishClassificationFindings: output.publishClassificationFindings !== undefined && output.publishClassificationFindings !== null
            ? output.publishClassificationFindings
            : undefined,
        publishPolicyFindings: output.publishPolicyFindings !== undefined && output.publishPolicyFindings !== null
            ? output.publishPolicyFindings
            : undefined,
    };
};
const deserializeAws_restJson1SensitiveData = (output, context) => {
    return (output || [])
        .filter((e) => e != null)
        .map((entry) => {
        if (entry === null) {
            return null;
        }
        return deserializeAws_restJson1SensitiveDataItem(entry, context);
    });
};
const deserializeAws_restJson1SensitiveDataItem = (output, context) => {
    return {
        category: output.category !== undefined && output.category !== null ? output.category : undefined,
        detections: output.detections !== undefined && output.detections !== null
            ? deserializeAws_restJson1DefaultDetections(output.detections, context)
            : undefined,
        totalCount: output.totalCount !== undefined && output.totalCount !== null ? output.totalCount : undefined,
    };
};
const deserializeAws_restJson1ServerSideEncryption = (output, context) => {
    return {
        encryptionType: output.encryptionType !== undefined && output.encryptionType !== null ? output.encryptionType : undefined,
        kmsMasterKeyId: output.kmsMasterKeyId !== undefined && output.kmsMasterKeyId !== null ? output.kmsMasterKeyId : undefined,
    };
};
const deserializeAws_restJson1ServiceLimit = (output, context) => {
    return {
        isServiceLimited: output.isServiceLimited !== undefined && output.isServiceLimited !== null ? output.isServiceLimited : undefined,
        unit: output.unit !== undefined && output.unit !== null ? output.unit : undefined,
        value: output.value !== undefined && output.value !== null ? output.value : undefined,
    };
};
const deserializeAws_restJson1SessionContext = (output, context) => {
    return {
        attributes: output.attributes !== undefined && output.attributes !== null
            ? deserializeAws_restJson1SessionContextAttributes(output.attributes, context)
            : undefined,
        sessionIssuer: output.sessionIssuer !== undefined && output.sessionIssuer !== null
            ? deserializeAws_restJson1SessionIssuer(output.sessionIssuer, context)
            : undefined,
    };
};
const deserializeAws_restJson1SessionContextAttributes = (output, context) => {
    return {
        creationDate: output.creationDate !== undefined && output.creationDate !== null ? new Date(output.creationDate) : undefined,
        mfaAuthenticated: output.mfaAuthenticated !== undefined && output.mfaAuthenticated !== null ? output.mfaAuthenticated : undefined,
    };
};
const deserializeAws_restJson1SessionIssuer = (output, context) => {
    return {
        accountId: output.accountId !== undefined && output.accountId !== null ? output.accountId : undefined,
        arn: output.arn !== undefined && output.arn !== null ? output.arn : undefined,
        principalId: output.principalId !== undefined && output.principalId !== null ? output.principalId : undefined,
        type: output.type !== undefined && output.type !== null ? output.type : undefined,
        userName: output.userName !== undefined && output.userName !== null ? output.userName : undefined,
    };
};
const deserializeAws_restJson1Severity = (output, context) => {
    return {
        description: output.description !== undefined && output.description !== null ? output.description : undefined,
        score: output.score !== undefined && output.score !== null ? output.score : undefined,
    };
};
const deserializeAws_restJson1SimpleCriterionForJob = (output, context) => {
    return {
        comparator: output.comparator !== undefined && output.comparator !== null ? output.comparator : undefined,
        key: output.key !== undefined && output.key !== null ? output.key : undefined,
        values: output.values !== undefined && output.values !== null
            ? deserializeAws_restJson1__listOf__string(output.values, context)
            : undefined,
    };
};
const deserializeAws_restJson1SimpleScopeTerm = (output, context) => {
    return {
        comparator: output.comparator !== undefined && output.comparator !== null ? output.comparator : undefined,
        key: output.key !== undefined && output.key !== null ? output.key : undefined,
        values: output.values !== undefined && output.values !== null
            ? deserializeAws_restJson1__listOf__string(output.values, context)
            : undefined,
    };
};
const deserializeAws_restJson1Statistics = (output, context) => {
    return {
        approximateNumberOfObjectsToProcess: output.approximateNumberOfObjectsToProcess !== undefined && output.approximateNumberOfObjectsToProcess !== null
            ? output.approximateNumberOfObjectsToProcess
            : undefined,
        numberOfRuns: output.numberOfRuns !== undefined && output.numberOfRuns !== null ? output.numberOfRuns : undefined,
    };
};
const deserializeAws_restJson1TagCriterionForJob = (output, context) => {
    return {
        comparator: output.comparator !== undefined && output.comparator !== null ? output.comparator : undefined,
        tagValues: output.tagValues !== undefined && output.tagValues !== null
            ? deserializeAws_restJson1__listOfTagCriterionPairForJob(output.tagValues, context)
            : undefined,
    };
};
const deserializeAws_restJson1TagCriterionPairForJob = (output, context) => {
    return {
        key: output.key !== undefined && output.key !== null ? output.key : undefined,
        value: output.value !== undefined && output.value !== null ? output.value : undefined,
    };
};
const deserializeAws_restJson1TagMap = (output, context) => {
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
const deserializeAws_restJson1TagScopeTerm = (output, context) => {
    return {
        comparator: output.comparator !== undefined && output.comparator !== null ? output.comparator : undefined,
        key: output.key !== undefined && output.key !== null ? output.key : undefined,
        tagValues: output.tagValues !== undefined && output.tagValues !== null
            ? deserializeAws_restJson1__listOfTagValuePair(output.tagValues, context)
            : undefined,
        target: output.target !== undefined && output.target !== null ? output.target : undefined,
    };
};
const deserializeAws_restJson1TagValuePair = (output, context) => {
    return {
        key: output.key !== undefined && output.key !== null ? output.key : undefined,
        value: output.value !== undefined && output.value !== null ? output.value : undefined,
    };
};
const deserializeAws_restJson1UnprocessedAccount = (output, context) => {
    return {
        accountId: output.accountId !== undefined && output.accountId !== null ? output.accountId : undefined,
        errorCode: output.errorCode !== undefined && output.errorCode !== null ? output.errorCode : undefined,
        errorMessage: output.errorMessage !== undefined && output.errorMessage !== null ? output.errorMessage : undefined,
    };
};
const deserializeAws_restJson1UsageByAccount = (output, context) => {
    return {
        currency: output.currency !== undefined && output.currency !== null ? output.currency : undefined,
        estimatedCost: output.estimatedCost !== undefined && output.estimatedCost !== null ? output.estimatedCost : undefined,
        serviceLimit: output.serviceLimit !== undefined && output.serviceLimit !== null
            ? deserializeAws_restJson1ServiceLimit(output.serviceLimit, context)
            : undefined,
        type: output.type !== undefined && output.type !== null ? output.type : undefined,
    };
};
const deserializeAws_restJson1UsageRecord = (output, context) => {
    return {
        accountId: output.accountId !== undefined && output.accountId !== null ? output.accountId : undefined,
        freeTrialStartDate: output.freeTrialStartDate !== undefined && output.freeTrialStartDate !== null
            ? new Date(output.freeTrialStartDate)
            : undefined,
        usage: output.usage !== undefined && output.usage !== null
            ? deserializeAws_restJson1__listOfUsageByAccount(output.usage, context)
            : undefined,
    };
};
const deserializeAws_restJson1UsageTotal = (output, context) => {
    return {
        currency: output.currency !== undefined && output.currency !== null ? output.currency : undefined,
        estimatedCost: output.estimatedCost !== undefined && output.estimatedCost !== null ? output.estimatedCost : undefined,
        type: output.type !== undefined && output.type !== null ? output.type : undefined,
    };
};
const deserializeAws_restJson1UserIdentity = (output, context) => {
    return {
        assumedRole: output.assumedRole !== undefined && output.assumedRole !== null
            ? deserializeAws_restJson1AssumedRole(output.assumedRole, context)
            : undefined,
        awsAccount: output.awsAccount !== undefined && output.awsAccount !== null
            ? deserializeAws_restJson1AwsAccount(output.awsAccount, context)
            : undefined,
        awsService: output.awsService !== undefined && output.awsService !== null
            ? deserializeAws_restJson1AwsService(output.awsService, context)
            : undefined,
        federatedUser: output.federatedUser !== undefined && output.federatedUser !== null
            ? deserializeAws_restJson1FederatedUser(output.federatedUser, context)
            : undefined,
        iamUser: output.iamUser !== undefined && output.iamUser !== null
            ? deserializeAws_restJson1IamUser(output.iamUser, context)
            : undefined,
        root: output.root !== undefined && output.root !== null
            ? deserializeAws_restJson1UserIdentityRoot(output.root, context)
            : undefined,
        type: output.type !== undefined && output.type !== null ? output.type : undefined,
    };
};
const deserializeAws_restJson1UserIdentityRoot = (output, context) => {
    return {
        accountId: output.accountId !== undefined && output.accountId !== null ? output.accountId : undefined,
        arn: output.arn !== undefined && output.arn !== null ? output.arn : undefined,
        principalId: output.principalId !== undefined && output.principalId !== null ? output.principalId : undefined,
    };
};
const deserializeAws_restJson1UserPausedDetails = (output, context) => {
    return {
        jobExpiresAt: output.jobExpiresAt !== undefined && output.jobExpiresAt !== null ? new Date(output.jobExpiresAt) : undefined,
        jobImminentExpirationHealthEventArn: output.jobImminentExpirationHealthEventArn !== undefined && output.jobImminentExpirationHealthEventArn !== null
            ? output.jobImminentExpirationHealthEventArn
            : undefined,
        jobPausedAt: output.jobPausedAt !== undefined && output.jobPausedAt !== null ? new Date(output.jobPausedAt) : undefined,
    };
};
const deserializeAws_restJson1WeeklySchedule = (output, context) => {
    return {
        dayOfWeek: output.dayOfWeek !== undefined && output.dayOfWeek !== null ? output.dayOfWeek : undefined,
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