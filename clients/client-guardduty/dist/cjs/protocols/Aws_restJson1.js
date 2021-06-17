"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.serializeAws_restJson1UntagResourceCommand = exports.serializeAws_restJson1UnarchiveFindingsCommand = exports.serializeAws_restJson1TagResourceCommand = exports.serializeAws_restJson1StopMonitoringMembersCommand = exports.serializeAws_restJson1StartMonitoringMembersCommand = exports.serializeAws_restJson1ListThreatIntelSetsCommand = exports.serializeAws_restJson1ListTagsForResourceCommand = exports.serializeAws_restJson1ListPublishingDestinationsCommand = exports.serializeAws_restJson1ListOrganizationAdminAccountsCommand = exports.serializeAws_restJson1ListMembersCommand = exports.serializeAws_restJson1ListIPSetsCommand = exports.serializeAws_restJson1ListInvitationsCommand = exports.serializeAws_restJson1ListFindingsCommand = exports.serializeAws_restJson1ListFiltersCommand = exports.serializeAws_restJson1ListDetectorsCommand = exports.serializeAws_restJson1InviteMembersCommand = exports.serializeAws_restJson1GetUsageStatisticsCommand = exports.serializeAws_restJson1GetThreatIntelSetCommand = exports.serializeAws_restJson1GetMembersCommand = exports.serializeAws_restJson1GetMemberDetectorsCommand = exports.serializeAws_restJson1GetMasterAccountCommand = exports.serializeAws_restJson1GetIPSetCommand = exports.serializeAws_restJson1GetInvitationsCountCommand = exports.serializeAws_restJson1GetFindingsStatisticsCommand = exports.serializeAws_restJson1GetFindingsCommand = exports.serializeAws_restJson1GetFilterCommand = exports.serializeAws_restJson1GetDetectorCommand = exports.serializeAws_restJson1EnableOrganizationAdminAccountCommand = exports.serializeAws_restJson1DisassociateMembersCommand = exports.serializeAws_restJson1DisassociateFromMasterAccountCommand = exports.serializeAws_restJson1DisableOrganizationAdminAccountCommand = exports.serializeAws_restJson1DescribePublishingDestinationCommand = exports.serializeAws_restJson1DescribeOrganizationConfigurationCommand = exports.serializeAws_restJson1DeleteThreatIntelSetCommand = exports.serializeAws_restJson1DeletePublishingDestinationCommand = exports.serializeAws_restJson1DeleteMembersCommand = exports.serializeAws_restJson1DeleteIPSetCommand = exports.serializeAws_restJson1DeleteInvitationsCommand = exports.serializeAws_restJson1DeleteFilterCommand = exports.serializeAws_restJson1DeleteDetectorCommand = exports.serializeAws_restJson1DeclineInvitationsCommand = exports.serializeAws_restJson1CreateThreatIntelSetCommand = exports.serializeAws_restJson1CreateSampleFindingsCommand = exports.serializeAws_restJson1CreatePublishingDestinationCommand = exports.serializeAws_restJson1CreateMembersCommand = exports.serializeAws_restJson1CreateIPSetCommand = exports.serializeAws_restJson1CreateFilterCommand = exports.serializeAws_restJson1CreateDetectorCommand = exports.serializeAws_restJson1ArchiveFindingsCommand = exports.serializeAws_restJson1AcceptInvitationCommand = void 0;
exports.deserializeAws_restJson1ListOrganizationAdminAccountsCommand = exports.deserializeAws_restJson1ListMembersCommand = exports.deserializeAws_restJson1ListIPSetsCommand = exports.deserializeAws_restJson1ListInvitationsCommand = exports.deserializeAws_restJson1ListFindingsCommand = exports.deserializeAws_restJson1ListFiltersCommand = exports.deserializeAws_restJson1ListDetectorsCommand = exports.deserializeAws_restJson1InviteMembersCommand = exports.deserializeAws_restJson1GetUsageStatisticsCommand = exports.deserializeAws_restJson1GetThreatIntelSetCommand = exports.deserializeAws_restJson1GetMembersCommand = exports.deserializeAws_restJson1GetMemberDetectorsCommand = exports.deserializeAws_restJson1GetMasterAccountCommand = exports.deserializeAws_restJson1GetIPSetCommand = exports.deserializeAws_restJson1GetInvitationsCountCommand = exports.deserializeAws_restJson1GetFindingsStatisticsCommand = exports.deserializeAws_restJson1GetFindingsCommand = exports.deserializeAws_restJson1GetFilterCommand = exports.deserializeAws_restJson1GetDetectorCommand = exports.deserializeAws_restJson1EnableOrganizationAdminAccountCommand = exports.deserializeAws_restJson1DisassociateMembersCommand = exports.deserializeAws_restJson1DisassociateFromMasterAccountCommand = exports.deserializeAws_restJson1DisableOrganizationAdminAccountCommand = exports.deserializeAws_restJson1DescribePublishingDestinationCommand = exports.deserializeAws_restJson1DescribeOrganizationConfigurationCommand = exports.deserializeAws_restJson1DeleteThreatIntelSetCommand = exports.deserializeAws_restJson1DeletePublishingDestinationCommand = exports.deserializeAws_restJson1DeleteMembersCommand = exports.deserializeAws_restJson1DeleteIPSetCommand = exports.deserializeAws_restJson1DeleteInvitationsCommand = exports.deserializeAws_restJson1DeleteFilterCommand = exports.deserializeAws_restJson1DeleteDetectorCommand = exports.deserializeAws_restJson1DeclineInvitationsCommand = exports.deserializeAws_restJson1CreateThreatIntelSetCommand = exports.deserializeAws_restJson1CreateSampleFindingsCommand = exports.deserializeAws_restJson1CreatePublishingDestinationCommand = exports.deserializeAws_restJson1CreateMembersCommand = exports.deserializeAws_restJson1CreateIPSetCommand = exports.deserializeAws_restJson1CreateFilterCommand = exports.deserializeAws_restJson1CreateDetectorCommand = exports.deserializeAws_restJson1ArchiveFindingsCommand = exports.deserializeAws_restJson1AcceptInvitationCommand = exports.serializeAws_restJson1UpdateThreatIntelSetCommand = exports.serializeAws_restJson1UpdatePublishingDestinationCommand = exports.serializeAws_restJson1UpdateOrganizationConfigurationCommand = exports.serializeAws_restJson1UpdateMemberDetectorsCommand = exports.serializeAws_restJson1UpdateIPSetCommand = exports.serializeAws_restJson1UpdateFindingsFeedbackCommand = exports.serializeAws_restJson1UpdateFilterCommand = exports.serializeAws_restJson1UpdateDetectorCommand = void 0;
exports.deserializeAws_restJson1UpdateThreatIntelSetCommand = exports.deserializeAws_restJson1UpdatePublishingDestinationCommand = exports.deserializeAws_restJson1UpdateOrganizationConfigurationCommand = exports.deserializeAws_restJson1UpdateMemberDetectorsCommand = exports.deserializeAws_restJson1UpdateIPSetCommand = exports.deserializeAws_restJson1UpdateFindingsFeedbackCommand = exports.deserializeAws_restJson1UpdateFilterCommand = exports.deserializeAws_restJson1UpdateDetectorCommand = exports.deserializeAws_restJson1UntagResourceCommand = exports.deserializeAws_restJson1UnarchiveFindingsCommand = exports.deserializeAws_restJson1TagResourceCommand = exports.deserializeAws_restJson1StopMonitoringMembersCommand = exports.deserializeAws_restJson1StartMonitoringMembersCommand = exports.deserializeAws_restJson1ListThreatIntelSetsCommand = exports.deserializeAws_restJson1ListTagsForResourceCommand = exports.deserializeAws_restJson1ListPublishingDestinationsCommand = void 0;
const protocol_http_1 = require("@aws-sdk/protocol-http");
const smithy_client_1 = require("@aws-sdk/smithy-client");
const uuid_1 = require("uuid");
const serializeAws_restJson1AcceptInvitationCommand = async (input, context) => {
    const headers = {
        "content-type": "application/json",
    };
    let resolvedPath = "/detector/{DetectorId}/master";
    if (input.DetectorId !== undefined) {
        const labelValue = input.DetectorId;
        if (labelValue.length <= 0) {
            throw new Error("Empty value provided for input HTTP label: DetectorId.");
        }
        resolvedPath = resolvedPath.replace("{DetectorId}", smithy_client_1.extendedEncodeURIComponent(labelValue));
    }
    else {
        throw new Error("No value provided for input HTTP label: DetectorId.");
    }
    let body;
    body = JSON.stringify({
        ...(input.InvitationId !== undefined && input.InvitationId !== null && { invitationId: input.InvitationId }),
        ...(input.MasterId !== undefined && input.MasterId !== null && { masterId: input.MasterId }),
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
const serializeAws_restJson1ArchiveFindingsCommand = async (input, context) => {
    const headers = {
        "content-type": "application/json",
    };
    let resolvedPath = "/detector/{DetectorId}/findings/archive";
    if (input.DetectorId !== undefined) {
        const labelValue = input.DetectorId;
        if (labelValue.length <= 0) {
            throw new Error("Empty value provided for input HTTP label: DetectorId.");
        }
        resolvedPath = resolvedPath.replace("{DetectorId}", smithy_client_1.extendedEncodeURIComponent(labelValue));
    }
    else {
        throw new Error("No value provided for input HTTP label: DetectorId.");
    }
    let body;
    body = JSON.stringify({
        ...(input.FindingIds !== undefined &&
            input.FindingIds !== null && { findingIds: serializeAws_restJson1FindingIds(input.FindingIds, context) }),
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
exports.serializeAws_restJson1ArchiveFindingsCommand = serializeAws_restJson1ArchiveFindingsCommand;
const serializeAws_restJson1CreateDetectorCommand = async (input, context) => {
    var _a;
    const headers = {
        "content-type": "application/json",
    };
    let resolvedPath = "/detector";
    let body;
    body = JSON.stringify({
        clientToken: (_a = input.ClientToken) !== null && _a !== void 0 ? _a : uuid_1.v4(),
        ...(input.DataSources !== undefined &&
            input.DataSources !== null && {
            dataSources: serializeAws_restJson1DataSourceConfigurations(input.DataSources, context),
        }),
        ...(input.Enable !== undefined && input.Enable !== null && { enable: input.Enable }),
        ...(input.FindingPublishingFrequency !== undefined &&
            input.FindingPublishingFrequency !== null && { findingPublishingFrequency: input.FindingPublishingFrequency }),
        ...(input.Tags !== undefined && input.Tags !== null && { tags: serializeAws_restJson1TagMap(input.Tags, context) }),
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
exports.serializeAws_restJson1CreateDetectorCommand = serializeAws_restJson1CreateDetectorCommand;
const serializeAws_restJson1CreateFilterCommand = async (input, context) => {
    var _a;
    const headers = {
        "content-type": "application/json",
    };
    let resolvedPath = "/detector/{DetectorId}/filter";
    if (input.DetectorId !== undefined) {
        const labelValue = input.DetectorId;
        if (labelValue.length <= 0) {
            throw new Error("Empty value provided for input HTTP label: DetectorId.");
        }
        resolvedPath = resolvedPath.replace("{DetectorId}", smithy_client_1.extendedEncodeURIComponent(labelValue));
    }
    else {
        throw new Error("No value provided for input HTTP label: DetectorId.");
    }
    let body;
    body = JSON.stringify({
        ...(input.Action !== undefined && input.Action !== null && { action: input.Action }),
        clientToken: (_a = input.ClientToken) !== null && _a !== void 0 ? _a : uuid_1.v4(),
        ...(input.Description !== undefined && input.Description !== null && { description: input.Description }),
        ...(input.FindingCriteria !== undefined &&
            input.FindingCriteria !== null && {
            findingCriteria: serializeAws_restJson1FindingCriteria(input.FindingCriteria, context),
        }),
        ...(input.Name !== undefined && input.Name !== null && { name: input.Name }),
        ...(input.Rank !== undefined && input.Rank !== null && { rank: input.Rank }),
        ...(input.Tags !== undefined && input.Tags !== null && { tags: serializeAws_restJson1TagMap(input.Tags, context) }),
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
exports.serializeAws_restJson1CreateFilterCommand = serializeAws_restJson1CreateFilterCommand;
const serializeAws_restJson1CreateIPSetCommand = async (input, context) => {
    var _a;
    const headers = {
        "content-type": "application/json",
    };
    let resolvedPath = "/detector/{DetectorId}/ipset";
    if (input.DetectorId !== undefined) {
        const labelValue = input.DetectorId;
        if (labelValue.length <= 0) {
            throw new Error("Empty value provided for input HTTP label: DetectorId.");
        }
        resolvedPath = resolvedPath.replace("{DetectorId}", smithy_client_1.extendedEncodeURIComponent(labelValue));
    }
    else {
        throw new Error("No value provided for input HTTP label: DetectorId.");
    }
    let body;
    body = JSON.stringify({
        ...(input.Activate !== undefined && input.Activate !== null && { activate: input.Activate }),
        clientToken: (_a = input.ClientToken) !== null && _a !== void 0 ? _a : uuid_1.v4(),
        ...(input.Format !== undefined && input.Format !== null && { format: input.Format }),
        ...(input.Location !== undefined && input.Location !== null && { location: input.Location }),
        ...(input.Name !== undefined && input.Name !== null && { name: input.Name }),
        ...(input.Tags !== undefined && input.Tags !== null && { tags: serializeAws_restJson1TagMap(input.Tags, context) }),
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
exports.serializeAws_restJson1CreateIPSetCommand = serializeAws_restJson1CreateIPSetCommand;
const serializeAws_restJson1CreateMembersCommand = async (input, context) => {
    const headers = {
        "content-type": "application/json",
    };
    let resolvedPath = "/detector/{DetectorId}/member";
    if (input.DetectorId !== undefined) {
        const labelValue = input.DetectorId;
        if (labelValue.length <= 0) {
            throw new Error("Empty value provided for input HTTP label: DetectorId.");
        }
        resolvedPath = resolvedPath.replace("{DetectorId}", smithy_client_1.extendedEncodeURIComponent(labelValue));
    }
    else {
        throw new Error("No value provided for input HTTP label: DetectorId.");
    }
    let body;
    body = JSON.stringify({
        ...(input.AccountDetails !== undefined &&
            input.AccountDetails !== null && {
            accountDetails: serializeAws_restJson1AccountDetails(input.AccountDetails, context),
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
exports.serializeAws_restJson1CreateMembersCommand = serializeAws_restJson1CreateMembersCommand;
const serializeAws_restJson1CreatePublishingDestinationCommand = async (input, context) => {
    var _a;
    const headers = {
        "content-type": "application/json",
    };
    let resolvedPath = "/detector/{DetectorId}/publishingDestination";
    if (input.DetectorId !== undefined) {
        const labelValue = input.DetectorId;
        if (labelValue.length <= 0) {
            throw new Error("Empty value provided for input HTTP label: DetectorId.");
        }
        resolvedPath = resolvedPath.replace("{DetectorId}", smithy_client_1.extendedEncodeURIComponent(labelValue));
    }
    else {
        throw new Error("No value provided for input HTTP label: DetectorId.");
    }
    let body;
    body = JSON.stringify({
        clientToken: (_a = input.ClientToken) !== null && _a !== void 0 ? _a : uuid_1.v4(),
        ...(input.DestinationProperties !== undefined &&
            input.DestinationProperties !== null && {
            destinationProperties: serializeAws_restJson1DestinationProperties(input.DestinationProperties, context),
        }),
        ...(input.DestinationType !== undefined &&
            input.DestinationType !== null && { destinationType: input.DestinationType }),
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
exports.serializeAws_restJson1CreatePublishingDestinationCommand = serializeAws_restJson1CreatePublishingDestinationCommand;
const serializeAws_restJson1CreateSampleFindingsCommand = async (input, context) => {
    const headers = {
        "content-type": "application/json",
    };
    let resolvedPath = "/detector/{DetectorId}/findings/create";
    if (input.DetectorId !== undefined) {
        const labelValue = input.DetectorId;
        if (labelValue.length <= 0) {
            throw new Error("Empty value provided for input HTTP label: DetectorId.");
        }
        resolvedPath = resolvedPath.replace("{DetectorId}", smithy_client_1.extendedEncodeURIComponent(labelValue));
    }
    else {
        throw new Error("No value provided for input HTTP label: DetectorId.");
    }
    let body;
    body = JSON.stringify({
        ...(input.FindingTypes !== undefined &&
            input.FindingTypes !== null && { findingTypes: serializeAws_restJson1FindingTypes(input.FindingTypes, context) }),
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
const serializeAws_restJson1CreateThreatIntelSetCommand = async (input, context) => {
    var _a;
    const headers = {
        "content-type": "application/json",
    };
    let resolvedPath = "/detector/{DetectorId}/threatintelset";
    if (input.DetectorId !== undefined) {
        const labelValue = input.DetectorId;
        if (labelValue.length <= 0) {
            throw new Error("Empty value provided for input HTTP label: DetectorId.");
        }
        resolvedPath = resolvedPath.replace("{DetectorId}", smithy_client_1.extendedEncodeURIComponent(labelValue));
    }
    else {
        throw new Error("No value provided for input HTTP label: DetectorId.");
    }
    let body;
    body = JSON.stringify({
        ...(input.Activate !== undefined && input.Activate !== null && { activate: input.Activate }),
        clientToken: (_a = input.ClientToken) !== null && _a !== void 0 ? _a : uuid_1.v4(),
        ...(input.Format !== undefined && input.Format !== null && { format: input.Format }),
        ...(input.Location !== undefined && input.Location !== null && { location: input.Location }),
        ...(input.Name !== undefined && input.Name !== null && { name: input.Name }),
        ...(input.Tags !== undefined && input.Tags !== null && { tags: serializeAws_restJson1TagMap(input.Tags, context) }),
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
exports.serializeAws_restJson1CreateThreatIntelSetCommand = serializeAws_restJson1CreateThreatIntelSetCommand;
const serializeAws_restJson1DeclineInvitationsCommand = async (input, context) => {
    const headers = {
        "content-type": "application/json",
    };
    let resolvedPath = "/invitation/decline";
    let body;
    body = JSON.stringify({
        ...(input.AccountIds !== undefined &&
            input.AccountIds !== null && { accountIds: serializeAws_restJson1AccountIds(input.AccountIds, context) }),
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
const serializeAws_restJson1DeleteDetectorCommand = async (input, context) => {
    const headers = {};
    let resolvedPath = "/detector/{DetectorId}";
    if (input.DetectorId !== undefined) {
        const labelValue = input.DetectorId;
        if (labelValue.length <= 0) {
            throw new Error("Empty value provided for input HTTP label: DetectorId.");
        }
        resolvedPath = resolvedPath.replace("{DetectorId}", smithy_client_1.extendedEncodeURIComponent(labelValue));
    }
    else {
        throw new Error("No value provided for input HTTP label: DetectorId.");
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
exports.serializeAws_restJson1DeleteDetectorCommand = serializeAws_restJson1DeleteDetectorCommand;
const serializeAws_restJson1DeleteFilterCommand = async (input, context) => {
    const headers = {};
    let resolvedPath = "/detector/{DetectorId}/filter/{FilterName}";
    if (input.DetectorId !== undefined) {
        const labelValue = input.DetectorId;
        if (labelValue.length <= 0) {
            throw new Error("Empty value provided for input HTTP label: DetectorId.");
        }
        resolvedPath = resolvedPath.replace("{DetectorId}", smithy_client_1.extendedEncodeURIComponent(labelValue));
    }
    else {
        throw new Error("No value provided for input HTTP label: DetectorId.");
    }
    if (input.FilterName !== undefined) {
        const labelValue = input.FilterName;
        if (labelValue.length <= 0) {
            throw new Error("Empty value provided for input HTTP label: FilterName.");
        }
        resolvedPath = resolvedPath.replace("{FilterName}", smithy_client_1.extendedEncodeURIComponent(labelValue));
    }
    else {
        throw new Error("No value provided for input HTTP label: FilterName.");
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
exports.serializeAws_restJson1DeleteFilterCommand = serializeAws_restJson1DeleteFilterCommand;
const serializeAws_restJson1DeleteInvitationsCommand = async (input, context) => {
    const headers = {
        "content-type": "application/json",
    };
    let resolvedPath = "/invitation/delete";
    let body;
    body = JSON.stringify({
        ...(input.AccountIds !== undefined &&
            input.AccountIds !== null && { accountIds: serializeAws_restJson1AccountIds(input.AccountIds, context) }),
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
const serializeAws_restJson1DeleteIPSetCommand = async (input, context) => {
    const headers = {};
    let resolvedPath = "/detector/{DetectorId}/ipset/{IpSetId}";
    if (input.DetectorId !== undefined) {
        const labelValue = input.DetectorId;
        if (labelValue.length <= 0) {
            throw new Error("Empty value provided for input HTTP label: DetectorId.");
        }
        resolvedPath = resolvedPath.replace("{DetectorId}", smithy_client_1.extendedEncodeURIComponent(labelValue));
    }
    else {
        throw new Error("No value provided for input HTTP label: DetectorId.");
    }
    if (input.IpSetId !== undefined) {
        const labelValue = input.IpSetId;
        if (labelValue.length <= 0) {
            throw new Error("Empty value provided for input HTTP label: IpSetId.");
        }
        resolvedPath = resolvedPath.replace("{IpSetId}", smithy_client_1.extendedEncodeURIComponent(labelValue));
    }
    else {
        throw new Error("No value provided for input HTTP label: IpSetId.");
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
exports.serializeAws_restJson1DeleteIPSetCommand = serializeAws_restJson1DeleteIPSetCommand;
const serializeAws_restJson1DeleteMembersCommand = async (input, context) => {
    const headers = {
        "content-type": "application/json",
    };
    let resolvedPath = "/detector/{DetectorId}/member/delete";
    if (input.DetectorId !== undefined) {
        const labelValue = input.DetectorId;
        if (labelValue.length <= 0) {
            throw new Error("Empty value provided for input HTTP label: DetectorId.");
        }
        resolvedPath = resolvedPath.replace("{DetectorId}", smithy_client_1.extendedEncodeURIComponent(labelValue));
    }
    else {
        throw new Error("No value provided for input HTTP label: DetectorId.");
    }
    let body;
    body = JSON.stringify({
        ...(input.AccountIds !== undefined &&
            input.AccountIds !== null && { accountIds: serializeAws_restJson1AccountIds(input.AccountIds, context) }),
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
exports.serializeAws_restJson1DeleteMembersCommand = serializeAws_restJson1DeleteMembersCommand;
const serializeAws_restJson1DeletePublishingDestinationCommand = async (input, context) => {
    const headers = {};
    let resolvedPath = "/detector/{DetectorId}/publishingDestination/{DestinationId}";
    if (input.DetectorId !== undefined) {
        const labelValue = input.DetectorId;
        if (labelValue.length <= 0) {
            throw new Error("Empty value provided for input HTTP label: DetectorId.");
        }
        resolvedPath = resolvedPath.replace("{DetectorId}", smithy_client_1.extendedEncodeURIComponent(labelValue));
    }
    else {
        throw new Error("No value provided for input HTTP label: DetectorId.");
    }
    if (input.DestinationId !== undefined) {
        const labelValue = input.DestinationId;
        if (labelValue.length <= 0) {
            throw new Error("Empty value provided for input HTTP label: DestinationId.");
        }
        resolvedPath = resolvedPath.replace("{DestinationId}", smithy_client_1.extendedEncodeURIComponent(labelValue));
    }
    else {
        throw new Error("No value provided for input HTTP label: DestinationId.");
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
exports.serializeAws_restJson1DeletePublishingDestinationCommand = serializeAws_restJson1DeletePublishingDestinationCommand;
const serializeAws_restJson1DeleteThreatIntelSetCommand = async (input, context) => {
    const headers = {};
    let resolvedPath = "/detector/{DetectorId}/threatintelset/{ThreatIntelSetId}";
    if (input.DetectorId !== undefined) {
        const labelValue = input.DetectorId;
        if (labelValue.length <= 0) {
            throw new Error("Empty value provided for input HTTP label: DetectorId.");
        }
        resolvedPath = resolvedPath.replace("{DetectorId}", smithy_client_1.extendedEncodeURIComponent(labelValue));
    }
    else {
        throw new Error("No value provided for input HTTP label: DetectorId.");
    }
    if (input.ThreatIntelSetId !== undefined) {
        const labelValue = input.ThreatIntelSetId;
        if (labelValue.length <= 0) {
            throw new Error("Empty value provided for input HTTP label: ThreatIntelSetId.");
        }
        resolvedPath = resolvedPath.replace("{ThreatIntelSetId}", smithy_client_1.extendedEncodeURIComponent(labelValue));
    }
    else {
        throw new Error("No value provided for input HTTP label: ThreatIntelSetId.");
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
exports.serializeAws_restJson1DeleteThreatIntelSetCommand = serializeAws_restJson1DeleteThreatIntelSetCommand;
const serializeAws_restJson1DescribeOrganizationConfigurationCommand = async (input, context) => {
    const headers = {};
    let resolvedPath = "/detector/{DetectorId}/admin";
    if (input.DetectorId !== undefined) {
        const labelValue = input.DetectorId;
        if (labelValue.length <= 0) {
            throw new Error("Empty value provided for input HTTP label: DetectorId.");
        }
        resolvedPath = resolvedPath.replace("{DetectorId}", smithy_client_1.extendedEncodeURIComponent(labelValue));
    }
    else {
        throw new Error("No value provided for input HTTP label: DetectorId.");
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
exports.serializeAws_restJson1DescribeOrganizationConfigurationCommand = serializeAws_restJson1DescribeOrganizationConfigurationCommand;
const serializeAws_restJson1DescribePublishingDestinationCommand = async (input, context) => {
    const headers = {};
    let resolvedPath = "/detector/{DetectorId}/publishingDestination/{DestinationId}";
    if (input.DetectorId !== undefined) {
        const labelValue = input.DetectorId;
        if (labelValue.length <= 0) {
            throw new Error("Empty value provided for input HTTP label: DetectorId.");
        }
        resolvedPath = resolvedPath.replace("{DetectorId}", smithy_client_1.extendedEncodeURIComponent(labelValue));
    }
    else {
        throw new Error("No value provided for input HTTP label: DetectorId.");
    }
    if (input.DestinationId !== undefined) {
        const labelValue = input.DestinationId;
        if (labelValue.length <= 0) {
            throw new Error("Empty value provided for input HTTP label: DestinationId.");
        }
        resolvedPath = resolvedPath.replace("{DestinationId}", smithy_client_1.extendedEncodeURIComponent(labelValue));
    }
    else {
        throw new Error("No value provided for input HTTP label: DestinationId.");
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
exports.serializeAws_restJson1DescribePublishingDestinationCommand = serializeAws_restJson1DescribePublishingDestinationCommand;
const serializeAws_restJson1DisableOrganizationAdminAccountCommand = async (input, context) => {
    const headers = {
        "content-type": "application/json",
    };
    let resolvedPath = "/admin/disable";
    let body;
    body = JSON.stringify({
        ...(input.AdminAccountId !== undefined &&
            input.AdminAccountId !== null && { adminAccountId: input.AdminAccountId }),
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
exports.serializeAws_restJson1DisableOrganizationAdminAccountCommand = serializeAws_restJson1DisableOrganizationAdminAccountCommand;
const serializeAws_restJson1DisassociateFromMasterAccountCommand = async (input, context) => {
    const headers = {};
    let resolvedPath = "/detector/{DetectorId}/master/disassociate";
    if (input.DetectorId !== undefined) {
        const labelValue = input.DetectorId;
        if (labelValue.length <= 0) {
            throw new Error("Empty value provided for input HTTP label: DetectorId.");
        }
        resolvedPath = resolvedPath.replace("{DetectorId}", smithy_client_1.extendedEncodeURIComponent(labelValue));
    }
    else {
        throw new Error("No value provided for input HTTP label: DetectorId.");
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
exports.serializeAws_restJson1DisassociateFromMasterAccountCommand = serializeAws_restJson1DisassociateFromMasterAccountCommand;
const serializeAws_restJson1DisassociateMembersCommand = async (input, context) => {
    const headers = {
        "content-type": "application/json",
    };
    let resolvedPath = "/detector/{DetectorId}/member/disassociate";
    if (input.DetectorId !== undefined) {
        const labelValue = input.DetectorId;
        if (labelValue.length <= 0) {
            throw new Error("Empty value provided for input HTTP label: DetectorId.");
        }
        resolvedPath = resolvedPath.replace("{DetectorId}", smithy_client_1.extendedEncodeURIComponent(labelValue));
    }
    else {
        throw new Error("No value provided for input HTTP label: DetectorId.");
    }
    let body;
    body = JSON.stringify({
        ...(input.AccountIds !== undefined &&
            input.AccountIds !== null && { accountIds: serializeAws_restJson1AccountIds(input.AccountIds, context) }),
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
exports.serializeAws_restJson1DisassociateMembersCommand = serializeAws_restJson1DisassociateMembersCommand;
const serializeAws_restJson1EnableOrganizationAdminAccountCommand = async (input, context) => {
    const headers = {
        "content-type": "application/json",
    };
    let resolvedPath = "/admin/enable";
    let body;
    body = JSON.stringify({
        ...(input.AdminAccountId !== undefined &&
            input.AdminAccountId !== null && { adminAccountId: input.AdminAccountId }),
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
const serializeAws_restJson1GetDetectorCommand = async (input, context) => {
    const headers = {};
    let resolvedPath = "/detector/{DetectorId}";
    if (input.DetectorId !== undefined) {
        const labelValue = input.DetectorId;
        if (labelValue.length <= 0) {
            throw new Error("Empty value provided for input HTTP label: DetectorId.");
        }
        resolvedPath = resolvedPath.replace("{DetectorId}", smithy_client_1.extendedEncodeURIComponent(labelValue));
    }
    else {
        throw new Error("No value provided for input HTTP label: DetectorId.");
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
exports.serializeAws_restJson1GetDetectorCommand = serializeAws_restJson1GetDetectorCommand;
const serializeAws_restJson1GetFilterCommand = async (input, context) => {
    const headers = {};
    let resolvedPath = "/detector/{DetectorId}/filter/{FilterName}";
    if (input.DetectorId !== undefined) {
        const labelValue = input.DetectorId;
        if (labelValue.length <= 0) {
            throw new Error("Empty value provided for input HTTP label: DetectorId.");
        }
        resolvedPath = resolvedPath.replace("{DetectorId}", smithy_client_1.extendedEncodeURIComponent(labelValue));
    }
    else {
        throw new Error("No value provided for input HTTP label: DetectorId.");
    }
    if (input.FilterName !== undefined) {
        const labelValue = input.FilterName;
        if (labelValue.length <= 0) {
            throw new Error("Empty value provided for input HTTP label: FilterName.");
        }
        resolvedPath = resolvedPath.replace("{FilterName}", smithy_client_1.extendedEncodeURIComponent(labelValue));
    }
    else {
        throw new Error("No value provided for input HTTP label: FilterName.");
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
exports.serializeAws_restJson1GetFilterCommand = serializeAws_restJson1GetFilterCommand;
const serializeAws_restJson1GetFindingsCommand = async (input, context) => {
    const headers = {
        "content-type": "application/json",
    };
    let resolvedPath = "/detector/{DetectorId}/findings/get";
    if (input.DetectorId !== undefined) {
        const labelValue = input.DetectorId;
        if (labelValue.length <= 0) {
            throw new Error("Empty value provided for input HTTP label: DetectorId.");
        }
        resolvedPath = resolvedPath.replace("{DetectorId}", smithy_client_1.extendedEncodeURIComponent(labelValue));
    }
    else {
        throw new Error("No value provided for input HTTP label: DetectorId.");
    }
    let body;
    body = JSON.stringify({
        ...(input.FindingIds !== undefined &&
            input.FindingIds !== null && { findingIds: serializeAws_restJson1FindingIds(input.FindingIds, context) }),
        ...(input.SortCriteria !== undefined &&
            input.SortCriteria !== null && { sortCriteria: serializeAws_restJson1SortCriteria(input.SortCriteria, context) }),
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
const serializeAws_restJson1GetFindingsStatisticsCommand = async (input, context) => {
    const headers = {
        "content-type": "application/json",
    };
    let resolvedPath = "/detector/{DetectorId}/findings/statistics";
    if (input.DetectorId !== undefined) {
        const labelValue = input.DetectorId;
        if (labelValue.length <= 0) {
            throw new Error("Empty value provided for input HTTP label: DetectorId.");
        }
        resolvedPath = resolvedPath.replace("{DetectorId}", smithy_client_1.extendedEncodeURIComponent(labelValue));
    }
    else {
        throw new Error("No value provided for input HTTP label: DetectorId.");
    }
    let body;
    body = JSON.stringify({
        ...(input.FindingCriteria !== undefined &&
            input.FindingCriteria !== null && {
            findingCriteria: serializeAws_restJson1FindingCriteria(input.FindingCriteria, context),
        }),
        ...(input.FindingStatisticTypes !== undefined &&
            input.FindingStatisticTypes !== null && {
            findingStatisticTypes: serializeAws_restJson1FindingStatisticTypes(input.FindingStatisticTypes, context),
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
exports.serializeAws_restJson1GetFindingsStatisticsCommand = serializeAws_restJson1GetFindingsStatisticsCommand;
const serializeAws_restJson1GetInvitationsCountCommand = async (input, context) => {
    const headers = {
        "content-type": "application/json",
    };
    let resolvedPath = "/invitation/count";
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
const serializeAws_restJson1GetIPSetCommand = async (input, context) => {
    const headers = {};
    let resolvedPath = "/detector/{DetectorId}/ipset/{IpSetId}";
    if (input.DetectorId !== undefined) {
        const labelValue = input.DetectorId;
        if (labelValue.length <= 0) {
            throw new Error("Empty value provided for input HTTP label: DetectorId.");
        }
        resolvedPath = resolvedPath.replace("{DetectorId}", smithy_client_1.extendedEncodeURIComponent(labelValue));
    }
    else {
        throw new Error("No value provided for input HTTP label: DetectorId.");
    }
    if (input.IpSetId !== undefined) {
        const labelValue = input.IpSetId;
        if (labelValue.length <= 0) {
            throw new Error("Empty value provided for input HTTP label: IpSetId.");
        }
        resolvedPath = resolvedPath.replace("{IpSetId}", smithy_client_1.extendedEncodeURIComponent(labelValue));
    }
    else {
        throw new Error("No value provided for input HTTP label: IpSetId.");
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
exports.serializeAws_restJson1GetIPSetCommand = serializeAws_restJson1GetIPSetCommand;
const serializeAws_restJson1GetMasterAccountCommand = async (input, context) => {
    const headers = {};
    let resolvedPath = "/detector/{DetectorId}/master";
    if (input.DetectorId !== undefined) {
        const labelValue = input.DetectorId;
        if (labelValue.length <= 0) {
            throw new Error("Empty value provided for input HTTP label: DetectorId.");
        }
        resolvedPath = resolvedPath.replace("{DetectorId}", smithy_client_1.extendedEncodeURIComponent(labelValue));
    }
    else {
        throw new Error("No value provided for input HTTP label: DetectorId.");
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
exports.serializeAws_restJson1GetMasterAccountCommand = serializeAws_restJson1GetMasterAccountCommand;
const serializeAws_restJson1GetMemberDetectorsCommand = async (input, context) => {
    const headers = {
        "content-type": "application/json",
    };
    let resolvedPath = "/detector/{DetectorId}/member/detector/get";
    if (input.DetectorId !== undefined) {
        const labelValue = input.DetectorId;
        if (labelValue.length <= 0) {
            throw new Error("Empty value provided for input HTTP label: DetectorId.");
        }
        resolvedPath = resolvedPath.replace("{DetectorId}", smithy_client_1.extendedEncodeURIComponent(labelValue));
    }
    else {
        throw new Error("No value provided for input HTTP label: DetectorId.");
    }
    let body;
    body = JSON.stringify({
        ...(input.AccountIds !== undefined &&
            input.AccountIds !== null && { accountIds: serializeAws_restJson1AccountIds(input.AccountIds, context) }),
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
exports.serializeAws_restJson1GetMemberDetectorsCommand = serializeAws_restJson1GetMemberDetectorsCommand;
const serializeAws_restJson1GetMembersCommand = async (input, context) => {
    const headers = {
        "content-type": "application/json",
    };
    let resolvedPath = "/detector/{DetectorId}/member/get";
    if (input.DetectorId !== undefined) {
        const labelValue = input.DetectorId;
        if (labelValue.length <= 0) {
            throw new Error("Empty value provided for input HTTP label: DetectorId.");
        }
        resolvedPath = resolvedPath.replace("{DetectorId}", smithy_client_1.extendedEncodeURIComponent(labelValue));
    }
    else {
        throw new Error("No value provided for input HTTP label: DetectorId.");
    }
    let body;
    body = JSON.stringify({
        ...(input.AccountIds !== undefined &&
            input.AccountIds !== null && { accountIds: serializeAws_restJson1AccountIds(input.AccountIds, context) }),
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
exports.serializeAws_restJson1GetMembersCommand = serializeAws_restJson1GetMembersCommand;
const serializeAws_restJson1GetThreatIntelSetCommand = async (input, context) => {
    const headers = {};
    let resolvedPath = "/detector/{DetectorId}/threatintelset/{ThreatIntelSetId}";
    if (input.DetectorId !== undefined) {
        const labelValue = input.DetectorId;
        if (labelValue.length <= 0) {
            throw new Error("Empty value provided for input HTTP label: DetectorId.");
        }
        resolvedPath = resolvedPath.replace("{DetectorId}", smithy_client_1.extendedEncodeURIComponent(labelValue));
    }
    else {
        throw new Error("No value provided for input HTTP label: DetectorId.");
    }
    if (input.ThreatIntelSetId !== undefined) {
        const labelValue = input.ThreatIntelSetId;
        if (labelValue.length <= 0) {
            throw new Error("Empty value provided for input HTTP label: ThreatIntelSetId.");
        }
        resolvedPath = resolvedPath.replace("{ThreatIntelSetId}", smithy_client_1.extendedEncodeURIComponent(labelValue));
    }
    else {
        throw new Error("No value provided for input HTTP label: ThreatIntelSetId.");
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
exports.serializeAws_restJson1GetThreatIntelSetCommand = serializeAws_restJson1GetThreatIntelSetCommand;
const serializeAws_restJson1GetUsageStatisticsCommand = async (input, context) => {
    const headers = {
        "content-type": "application/json",
    };
    let resolvedPath = "/detector/{DetectorId}/usage/statistics";
    if (input.DetectorId !== undefined) {
        const labelValue = input.DetectorId;
        if (labelValue.length <= 0) {
            throw new Error("Empty value provided for input HTTP label: DetectorId.");
        }
        resolvedPath = resolvedPath.replace("{DetectorId}", smithy_client_1.extendedEncodeURIComponent(labelValue));
    }
    else {
        throw new Error("No value provided for input HTTP label: DetectorId.");
    }
    let body;
    body = JSON.stringify({
        ...(input.MaxResults !== undefined && input.MaxResults !== null && { maxResults: input.MaxResults }),
        ...(input.NextToken !== undefined && input.NextToken !== null && { nextToken: input.NextToken }),
        ...(input.Unit !== undefined && input.Unit !== null && { unit: input.Unit }),
        ...(input.UsageCriteria !== undefined &&
            input.UsageCriteria !== null && {
            usageCriteria: serializeAws_restJson1UsageCriteria(input.UsageCriteria, context),
        }),
        ...(input.UsageStatisticType !== undefined &&
            input.UsageStatisticType !== null && { usageStatisticsType: input.UsageStatisticType }),
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
const serializeAws_restJson1InviteMembersCommand = async (input, context) => {
    const headers = {
        "content-type": "application/json",
    };
    let resolvedPath = "/detector/{DetectorId}/member/invite";
    if (input.DetectorId !== undefined) {
        const labelValue = input.DetectorId;
        if (labelValue.length <= 0) {
            throw new Error("Empty value provided for input HTTP label: DetectorId.");
        }
        resolvedPath = resolvedPath.replace("{DetectorId}", smithy_client_1.extendedEncodeURIComponent(labelValue));
    }
    else {
        throw new Error("No value provided for input HTTP label: DetectorId.");
    }
    let body;
    body = JSON.stringify({
        ...(input.AccountIds !== undefined &&
            input.AccountIds !== null && { accountIds: serializeAws_restJson1AccountIds(input.AccountIds, context) }),
        ...(input.DisableEmailNotification !== undefined &&
            input.DisableEmailNotification !== null && { disableEmailNotification: input.DisableEmailNotification }),
        ...(input.Message !== undefined && input.Message !== null && { message: input.Message }),
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
exports.serializeAws_restJson1InviteMembersCommand = serializeAws_restJson1InviteMembersCommand;
const serializeAws_restJson1ListDetectorsCommand = async (input, context) => {
    const headers = {};
    let resolvedPath = "/detector";
    const query = {
        ...(input.MaxResults !== undefined && { maxResults: input.MaxResults.toString() }),
        ...(input.NextToken !== undefined && { nextToken: input.NextToken }),
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
exports.serializeAws_restJson1ListDetectorsCommand = serializeAws_restJson1ListDetectorsCommand;
const serializeAws_restJson1ListFiltersCommand = async (input, context) => {
    const headers = {};
    let resolvedPath = "/detector/{DetectorId}/filter";
    if (input.DetectorId !== undefined) {
        const labelValue = input.DetectorId;
        if (labelValue.length <= 0) {
            throw new Error("Empty value provided for input HTTP label: DetectorId.");
        }
        resolvedPath = resolvedPath.replace("{DetectorId}", smithy_client_1.extendedEncodeURIComponent(labelValue));
    }
    else {
        throw new Error("No value provided for input HTTP label: DetectorId.");
    }
    const query = {
        ...(input.MaxResults !== undefined && { maxResults: input.MaxResults.toString() }),
        ...(input.NextToken !== undefined && { nextToken: input.NextToken }),
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
exports.serializeAws_restJson1ListFiltersCommand = serializeAws_restJson1ListFiltersCommand;
const serializeAws_restJson1ListFindingsCommand = async (input, context) => {
    const headers = {
        "content-type": "application/json",
    };
    let resolvedPath = "/detector/{DetectorId}/findings";
    if (input.DetectorId !== undefined) {
        const labelValue = input.DetectorId;
        if (labelValue.length <= 0) {
            throw new Error("Empty value provided for input HTTP label: DetectorId.");
        }
        resolvedPath = resolvedPath.replace("{DetectorId}", smithy_client_1.extendedEncodeURIComponent(labelValue));
    }
    else {
        throw new Error("No value provided for input HTTP label: DetectorId.");
    }
    let body;
    body = JSON.stringify({
        ...(input.FindingCriteria !== undefined &&
            input.FindingCriteria !== null && {
            findingCriteria: serializeAws_restJson1FindingCriteria(input.FindingCriteria, context),
        }),
        ...(input.MaxResults !== undefined && input.MaxResults !== null && { maxResults: input.MaxResults }),
        ...(input.NextToken !== undefined && input.NextToken !== null && { nextToken: input.NextToken }),
        ...(input.SortCriteria !== undefined &&
            input.SortCriteria !== null && { sortCriteria: serializeAws_restJson1SortCriteria(input.SortCriteria, context) }),
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
const serializeAws_restJson1ListInvitationsCommand = async (input, context) => {
    const headers = {};
    let resolvedPath = "/invitation";
    const query = {
        ...(input.MaxResults !== undefined && { maxResults: input.MaxResults.toString() }),
        ...(input.NextToken !== undefined && { nextToken: input.NextToken }),
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
const serializeAws_restJson1ListIPSetsCommand = async (input, context) => {
    const headers = {};
    let resolvedPath = "/detector/{DetectorId}/ipset";
    if (input.DetectorId !== undefined) {
        const labelValue = input.DetectorId;
        if (labelValue.length <= 0) {
            throw new Error("Empty value provided for input HTTP label: DetectorId.");
        }
        resolvedPath = resolvedPath.replace("{DetectorId}", smithy_client_1.extendedEncodeURIComponent(labelValue));
    }
    else {
        throw new Error("No value provided for input HTTP label: DetectorId.");
    }
    const query = {
        ...(input.MaxResults !== undefined && { maxResults: input.MaxResults.toString() }),
        ...(input.NextToken !== undefined && { nextToken: input.NextToken }),
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
exports.serializeAws_restJson1ListIPSetsCommand = serializeAws_restJson1ListIPSetsCommand;
const serializeAws_restJson1ListMembersCommand = async (input, context) => {
    const headers = {};
    let resolvedPath = "/detector/{DetectorId}/member";
    if (input.DetectorId !== undefined) {
        const labelValue = input.DetectorId;
        if (labelValue.length <= 0) {
            throw new Error("Empty value provided for input HTTP label: DetectorId.");
        }
        resolvedPath = resolvedPath.replace("{DetectorId}", smithy_client_1.extendedEncodeURIComponent(labelValue));
    }
    else {
        throw new Error("No value provided for input HTTP label: DetectorId.");
    }
    const query = {
        ...(input.MaxResults !== undefined && { maxResults: input.MaxResults.toString() }),
        ...(input.NextToken !== undefined && { nextToken: input.NextToken }),
        ...(input.OnlyAssociated !== undefined && { onlyAssociated: input.OnlyAssociated }),
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
        ...(input.MaxResults !== undefined && { maxResults: input.MaxResults.toString() }),
        ...(input.NextToken !== undefined && { nextToken: input.NextToken }),
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
const serializeAws_restJson1ListPublishingDestinationsCommand = async (input, context) => {
    const headers = {};
    let resolvedPath = "/detector/{DetectorId}/publishingDestination";
    if (input.DetectorId !== undefined) {
        const labelValue = input.DetectorId;
        if (labelValue.length <= 0) {
            throw new Error("Empty value provided for input HTTP label: DetectorId.");
        }
        resolvedPath = resolvedPath.replace("{DetectorId}", smithy_client_1.extendedEncodeURIComponent(labelValue));
    }
    else {
        throw new Error("No value provided for input HTTP label: DetectorId.");
    }
    const query = {
        ...(input.MaxResults !== undefined && { maxResults: input.MaxResults.toString() }),
        ...(input.NextToken !== undefined && { nextToken: input.NextToken }),
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
exports.serializeAws_restJson1ListPublishingDestinationsCommand = serializeAws_restJson1ListPublishingDestinationsCommand;
const serializeAws_restJson1ListTagsForResourceCommand = async (input, context) => {
    const headers = {};
    let resolvedPath = "/tags/{ResourceArn}";
    if (input.ResourceArn !== undefined) {
        const labelValue = input.ResourceArn;
        if (labelValue.length <= 0) {
            throw new Error("Empty value provided for input HTTP label: ResourceArn.");
        }
        resolvedPath = resolvedPath.replace("{ResourceArn}", smithy_client_1.extendedEncodeURIComponent(labelValue));
    }
    else {
        throw new Error("No value provided for input HTTP label: ResourceArn.");
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
const serializeAws_restJson1ListThreatIntelSetsCommand = async (input, context) => {
    const headers = {};
    let resolvedPath = "/detector/{DetectorId}/threatintelset";
    if (input.DetectorId !== undefined) {
        const labelValue = input.DetectorId;
        if (labelValue.length <= 0) {
            throw new Error("Empty value provided for input HTTP label: DetectorId.");
        }
        resolvedPath = resolvedPath.replace("{DetectorId}", smithy_client_1.extendedEncodeURIComponent(labelValue));
    }
    else {
        throw new Error("No value provided for input HTTP label: DetectorId.");
    }
    const query = {
        ...(input.MaxResults !== undefined && { maxResults: input.MaxResults.toString() }),
        ...(input.NextToken !== undefined && { nextToken: input.NextToken }),
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
exports.serializeAws_restJson1ListThreatIntelSetsCommand = serializeAws_restJson1ListThreatIntelSetsCommand;
const serializeAws_restJson1StartMonitoringMembersCommand = async (input, context) => {
    const headers = {
        "content-type": "application/json",
    };
    let resolvedPath = "/detector/{DetectorId}/member/start";
    if (input.DetectorId !== undefined) {
        const labelValue = input.DetectorId;
        if (labelValue.length <= 0) {
            throw new Error("Empty value provided for input HTTP label: DetectorId.");
        }
        resolvedPath = resolvedPath.replace("{DetectorId}", smithy_client_1.extendedEncodeURIComponent(labelValue));
    }
    else {
        throw new Error("No value provided for input HTTP label: DetectorId.");
    }
    let body;
    body = JSON.stringify({
        ...(input.AccountIds !== undefined &&
            input.AccountIds !== null && { accountIds: serializeAws_restJson1AccountIds(input.AccountIds, context) }),
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
exports.serializeAws_restJson1StartMonitoringMembersCommand = serializeAws_restJson1StartMonitoringMembersCommand;
const serializeAws_restJson1StopMonitoringMembersCommand = async (input, context) => {
    const headers = {
        "content-type": "application/json",
    };
    let resolvedPath = "/detector/{DetectorId}/member/stop";
    if (input.DetectorId !== undefined) {
        const labelValue = input.DetectorId;
        if (labelValue.length <= 0) {
            throw new Error("Empty value provided for input HTTP label: DetectorId.");
        }
        resolvedPath = resolvedPath.replace("{DetectorId}", smithy_client_1.extendedEncodeURIComponent(labelValue));
    }
    else {
        throw new Error("No value provided for input HTTP label: DetectorId.");
    }
    let body;
    body = JSON.stringify({
        ...(input.AccountIds !== undefined &&
            input.AccountIds !== null && { accountIds: serializeAws_restJson1AccountIds(input.AccountIds, context) }),
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
exports.serializeAws_restJson1StopMonitoringMembersCommand = serializeAws_restJson1StopMonitoringMembersCommand;
const serializeAws_restJson1TagResourceCommand = async (input, context) => {
    const headers = {
        "content-type": "application/json",
    };
    let resolvedPath = "/tags/{ResourceArn}";
    if (input.ResourceArn !== undefined) {
        const labelValue = input.ResourceArn;
        if (labelValue.length <= 0) {
            throw new Error("Empty value provided for input HTTP label: ResourceArn.");
        }
        resolvedPath = resolvedPath.replace("{ResourceArn}", smithy_client_1.extendedEncodeURIComponent(labelValue));
    }
    else {
        throw new Error("No value provided for input HTTP label: ResourceArn.");
    }
    let body;
    body = JSON.stringify({
        ...(input.Tags !== undefined && input.Tags !== null && { tags: serializeAws_restJson1TagMap(input.Tags, context) }),
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
const serializeAws_restJson1UnarchiveFindingsCommand = async (input, context) => {
    const headers = {
        "content-type": "application/json",
    };
    let resolvedPath = "/detector/{DetectorId}/findings/unarchive";
    if (input.DetectorId !== undefined) {
        const labelValue = input.DetectorId;
        if (labelValue.length <= 0) {
            throw new Error("Empty value provided for input HTTP label: DetectorId.");
        }
        resolvedPath = resolvedPath.replace("{DetectorId}", smithy_client_1.extendedEncodeURIComponent(labelValue));
    }
    else {
        throw new Error("No value provided for input HTTP label: DetectorId.");
    }
    let body;
    body = JSON.stringify({
        ...(input.FindingIds !== undefined &&
            input.FindingIds !== null && { findingIds: serializeAws_restJson1FindingIds(input.FindingIds, context) }),
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
exports.serializeAws_restJson1UnarchiveFindingsCommand = serializeAws_restJson1UnarchiveFindingsCommand;
const serializeAws_restJson1UntagResourceCommand = async (input, context) => {
    const headers = {};
    let resolvedPath = "/tags/{ResourceArn}";
    if (input.ResourceArn !== undefined) {
        const labelValue = input.ResourceArn;
        if (labelValue.length <= 0) {
            throw new Error("Empty value provided for input HTTP label: ResourceArn.");
        }
        resolvedPath = resolvedPath.replace("{ResourceArn}", smithy_client_1.extendedEncodeURIComponent(labelValue));
    }
    else {
        throw new Error("No value provided for input HTTP label: ResourceArn.");
    }
    const query = {
        ...(input.TagKeys !== undefined && { tagKeys: (input.TagKeys || []).map((_entry) => _entry) }),
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
const serializeAws_restJson1UpdateDetectorCommand = async (input, context) => {
    const headers = {
        "content-type": "application/json",
    };
    let resolvedPath = "/detector/{DetectorId}";
    if (input.DetectorId !== undefined) {
        const labelValue = input.DetectorId;
        if (labelValue.length <= 0) {
            throw new Error("Empty value provided for input HTTP label: DetectorId.");
        }
        resolvedPath = resolvedPath.replace("{DetectorId}", smithy_client_1.extendedEncodeURIComponent(labelValue));
    }
    else {
        throw new Error("No value provided for input HTTP label: DetectorId.");
    }
    let body;
    body = JSON.stringify({
        ...(input.DataSources !== undefined &&
            input.DataSources !== null && {
            dataSources: serializeAws_restJson1DataSourceConfigurations(input.DataSources, context),
        }),
        ...(input.Enable !== undefined && input.Enable !== null && { enable: input.Enable }),
        ...(input.FindingPublishingFrequency !== undefined &&
            input.FindingPublishingFrequency !== null && { findingPublishingFrequency: input.FindingPublishingFrequency }),
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
exports.serializeAws_restJson1UpdateDetectorCommand = serializeAws_restJson1UpdateDetectorCommand;
const serializeAws_restJson1UpdateFilterCommand = async (input, context) => {
    const headers = {
        "content-type": "application/json",
    };
    let resolvedPath = "/detector/{DetectorId}/filter/{FilterName}";
    if (input.DetectorId !== undefined) {
        const labelValue = input.DetectorId;
        if (labelValue.length <= 0) {
            throw new Error("Empty value provided for input HTTP label: DetectorId.");
        }
        resolvedPath = resolvedPath.replace("{DetectorId}", smithy_client_1.extendedEncodeURIComponent(labelValue));
    }
    else {
        throw new Error("No value provided for input HTTP label: DetectorId.");
    }
    if (input.FilterName !== undefined) {
        const labelValue = input.FilterName;
        if (labelValue.length <= 0) {
            throw new Error("Empty value provided for input HTTP label: FilterName.");
        }
        resolvedPath = resolvedPath.replace("{FilterName}", smithy_client_1.extendedEncodeURIComponent(labelValue));
    }
    else {
        throw new Error("No value provided for input HTTP label: FilterName.");
    }
    let body;
    body = JSON.stringify({
        ...(input.Action !== undefined && input.Action !== null && { action: input.Action }),
        ...(input.Description !== undefined && input.Description !== null && { description: input.Description }),
        ...(input.FindingCriteria !== undefined &&
            input.FindingCriteria !== null && {
            findingCriteria: serializeAws_restJson1FindingCriteria(input.FindingCriteria, context),
        }),
        ...(input.Rank !== undefined && input.Rank !== null && { rank: input.Rank }),
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
exports.serializeAws_restJson1UpdateFilterCommand = serializeAws_restJson1UpdateFilterCommand;
const serializeAws_restJson1UpdateFindingsFeedbackCommand = async (input, context) => {
    const headers = {
        "content-type": "application/json",
    };
    let resolvedPath = "/detector/{DetectorId}/findings/feedback";
    if (input.DetectorId !== undefined) {
        const labelValue = input.DetectorId;
        if (labelValue.length <= 0) {
            throw new Error("Empty value provided for input HTTP label: DetectorId.");
        }
        resolvedPath = resolvedPath.replace("{DetectorId}", smithy_client_1.extendedEncodeURIComponent(labelValue));
    }
    else {
        throw new Error("No value provided for input HTTP label: DetectorId.");
    }
    let body;
    body = JSON.stringify({
        ...(input.Comments !== undefined && input.Comments !== null && { comments: input.Comments }),
        ...(input.Feedback !== undefined && input.Feedback !== null && { feedback: input.Feedback }),
        ...(input.FindingIds !== undefined &&
            input.FindingIds !== null && { findingIds: serializeAws_restJson1FindingIds(input.FindingIds, context) }),
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
exports.serializeAws_restJson1UpdateFindingsFeedbackCommand = serializeAws_restJson1UpdateFindingsFeedbackCommand;
const serializeAws_restJson1UpdateIPSetCommand = async (input, context) => {
    const headers = {
        "content-type": "application/json",
    };
    let resolvedPath = "/detector/{DetectorId}/ipset/{IpSetId}";
    if (input.DetectorId !== undefined) {
        const labelValue = input.DetectorId;
        if (labelValue.length <= 0) {
            throw new Error("Empty value provided for input HTTP label: DetectorId.");
        }
        resolvedPath = resolvedPath.replace("{DetectorId}", smithy_client_1.extendedEncodeURIComponent(labelValue));
    }
    else {
        throw new Error("No value provided for input HTTP label: DetectorId.");
    }
    if (input.IpSetId !== undefined) {
        const labelValue = input.IpSetId;
        if (labelValue.length <= 0) {
            throw new Error("Empty value provided for input HTTP label: IpSetId.");
        }
        resolvedPath = resolvedPath.replace("{IpSetId}", smithy_client_1.extendedEncodeURIComponent(labelValue));
    }
    else {
        throw new Error("No value provided for input HTTP label: IpSetId.");
    }
    let body;
    body = JSON.stringify({
        ...(input.Activate !== undefined && input.Activate !== null && { activate: input.Activate }),
        ...(input.Location !== undefined && input.Location !== null && { location: input.Location }),
        ...(input.Name !== undefined && input.Name !== null && { name: input.Name }),
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
exports.serializeAws_restJson1UpdateIPSetCommand = serializeAws_restJson1UpdateIPSetCommand;
const serializeAws_restJson1UpdateMemberDetectorsCommand = async (input, context) => {
    const headers = {
        "content-type": "application/json",
    };
    let resolvedPath = "/detector/{DetectorId}/member/detector/update";
    if (input.DetectorId !== undefined) {
        const labelValue = input.DetectorId;
        if (labelValue.length <= 0) {
            throw new Error("Empty value provided for input HTTP label: DetectorId.");
        }
        resolvedPath = resolvedPath.replace("{DetectorId}", smithy_client_1.extendedEncodeURIComponent(labelValue));
    }
    else {
        throw new Error("No value provided for input HTTP label: DetectorId.");
    }
    let body;
    body = JSON.stringify({
        ...(input.AccountIds !== undefined &&
            input.AccountIds !== null && { accountIds: serializeAws_restJson1AccountIds(input.AccountIds, context) }),
        ...(input.DataSources !== undefined &&
            input.DataSources !== null && {
            dataSources: serializeAws_restJson1DataSourceConfigurations(input.DataSources, context),
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
exports.serializeAws_restJson1UpdateMemberDetectorsCommand = serializeAws_restJson1UpdateMemberDetectorsCommand;
const serializeAws_restJson1UpdateOrganizationConfigurationCommand = async (input, context) => {
    const headers = {
        "content-type": "application/json",
    };
    let resolvedPath = "/detector/{DetectorId}/admin";
    if (input.DetectorId !== undefined) {
        const labelValue = input.DetectorId;
        if (labelValue.length <= 0) {
            throw new Error("Empty value provided for input HTTP label: DetectorId.");
        }
        resolvedPath = resolvedPath.replace("{DetectorId}", smithy_client_1.extendedEncodeURIComponent(labelValue));
    }
    else {
        throw new Error("No value provided for input HTTP label: DetectorId.");
    }
    let body;
    body = JSON.stringify({
        ...(input.AutoEnable !== undefined && input.AutoEnable !== null && { autoEnable: input.AutoEnable }),
        ...(input.DataSources !== undefined &&
            input.DataSources !== null && {
            dataSources: serializeAws_restJson1OrganizationDataSourceConfigurations(input.DataSources, context),
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
exports.serializeAws_restJson1UpdateOrganizationConfigurationCommand = serializeAws_restJson1UpdateOrganizationConfigurationCommand;
const serializeAws_restJson1UpdatePublishingDestinationCommand = async (input, context) => {
    const headers = {
        "content-type": "application/json",
    };
    let resolvedPath = "/detector/{DetectorId}/publishingDestination/{DestinationId}";
    if (input.DetectorId !== undefined) {
        const labelValue = input.DetectorId;
        if (labelValue.length <= 0) {
            throw new Error("Empty value provided for input HTTP label: DetectorId.");
        }
        resolvedPath = resolvedPath.replace("{DetectorId}", smithy_client_1.extendedEncodeURIComponent(labelValue));
    }
    else {
        throw new Error("No value provided for input HTTP label: DetectorId.");
    }
    if (input.DestinationId !== undefined) {
        const labelValue = input.DestinationId;
        if (labelValue.length <= 0) {
            throw new Error("Empty value provided for input HTTP label: DestinationId.");
        }
        resolvedPath = resolvedPath.replace("{DestinationId}", smithy_client_1.extendedEncodeURIComponent(labelValue));
    }
    else {
        throw new Error("No value provided for input HTTP label: DestinationId.");
    }
    let body;
    body = JSON.stringify({
        ...(input.DestinationProperties !== undefined &&
            input.DestinationProperties !== null && {
            destinationProperties: serializeAws_restJson1DestinationProperties(input.DestinationProperties, context),
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
exports.serializeAws_restJson1UpdatePublishingDestinationCommand = serializeAws_restJson1UpdatePublishingDestinationCommand;
const serializeAws_restJson1UpdateThreatIntelSetCommand = async (input, context) => {
    const headers = {
        "content-type": "application/json",
    };
    let resolvedPath = "/detector/{DetectorId}/threatintelset/{ThreatIntelSetId}";
    if (input.DetectorId !== undefined) {
        const labelValue = input.DetectorId;
        if (labelValue.length <= 0) {
            throw new Error("Empty value provided for input HTTP label: DetectorId.");
        }
        resolvedPath = resolvedPath.replace("{DetectorId}", smithy_client_1.extendedEncodeURIComponent(labelValue));
    }
    else {
        throw new Error("No value provided for input HTTP label: DetectorId.");
    }
    if (input.ThreatIntelSetId !== undefined) {
        const labelValue = input.ThreatIntelSetId;
        if (labelValue.length <= 0) {
            throw new Error("Empty value provided for input HTTP label: ThreatIntelSetId.");
        }
        resolvedPath = resolvedPath.replace("{ThreatIntelSetId}", smithy_client_1.extendedEncodeURIComponent(labelValue));
    }
    else {
        throw new Error("No value provided for input HTTP label: ThreatIntelSetId.");
    }
    let body;
    body = JSON.stringify({
        ...(input.Activate !== undefined && input.Activate !== null && { activate: input.Activate }),
        ...(input.Location !== undefined && input.Location !== null && { location: input.Location }),
        ...(input.Name !== undefined && input.Name !== null && { name: input.Name }),
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
exports.serializeAws_restJson1UpdateThreatIntelSetCommand = serializeAws_restJson1UpdateThreatIntelSetCommand;
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
        case "BadRequestException":
        case "com.amazonaws.guardduty#BadRequestException":
            response = {
                ...(await deserializeAws_restJson1BadRequestExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InternalServerErrorException":
        case "com.amazonaws.guardduty#InternalServerErrorException":
            response = {
                ...(await deserializeAws_restJson1InternalServerErrorExceptionResponse(parsedOutput, context)),
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
const deserializeAws_restJson1ArchiveFindingsCommand = async (output, context) => {
    if (output.statusCode !== 200 && output.statusCode >= 300) {
        return deserializeAws_restJson1ArchiveFindingsCommandError(output, context);
    }
    const contents = {
        $metadata: deserializeMetadata(output),
    };
    await collectBody(output.body, context);
    return Promise.resolve(contents);
};
exports.deserializeAws_restJson1ArchiveFindingsCommand = deserializeAws_restJson1ArchiveFindingsCommand;
const deserializeAws_restJson1ArchiveFindingsCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "BadRequestException":
        case "com.amazonaws.guardduty#BadRequestException":
            response = {
                ...(await deserializeAws_restJson1BadRequestExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InternalServerErrorException":
        case "com.amazonaws.guardduty#InternalServerErrorException":
            response = {
                ...(await deserializeAws_restJson1InternalServerErrorExceptionResponse(parsedOutput, context)),
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
const deserializeAws_restJson1CreateDetectorCommand = async (output, context) => {
    if (output.statusCode !== 200 && output.statusCode >= 300) {
        return deserializeAws_restJson1CreateDetectorCommandError(output, context);
    }
    const contents = {
        $metadata: deserializeMetadata(output),
        DetectorId: undefined,
    };
    const data = await parseBody(output.body, context);
    if (data.detectorId !== undefined && data.detectorId !== null) {
        contents.DetectorId = data.detectorId;
    }
    return Promise.resolve(contents);
};
exports.deserializeAws_restJson1CreateDetectorCommand = deserializeAws_restJson1CreateDetectorCommand;
const deserializeAws_restJson1CreateDetectorCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "BadRequestException":
        case "com.amazonaws.guardduty#BadRequestException":
            response = {
                ...(await deserializeAws_restJson1BadRequestExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InternalServerErrorException":
        case "com.amazonaws.guardduty#InternalServerErrorException":
            response = {
                ...(await deserializeAws_restJson1InternalServerErrorExceptionResponse(parsedOutput, context)),
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
const deserializeAws_restJson1CreateFilterCommand = async (output, context) => {
    if (output.statusCode !== 200 && output.statusCode >= 300) {
        return deserializeAws_restJson1CreateFilterCommandError(output, context);
    }
    const contents = {
        $metadata: deserializeMetadata(output),
        Name: undefined,
    };
    const data = await parseBody(output.body, context);
    if (data.name !== undefined && data.name !== null) {
        contents.Name = data.name;
    }
    return Promise.resolve(contents);
};
exports.deserializeAws_restJson1CreateFilterCommand = deserializeAws_restJson1CreateFilterCommand;
const deserializeAws_restJson1CreateFilterCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "BadRequestException":
        case "com.amazonaws.guardduty#BadRequestException":
            response = {
                ...(await deserializeAws_restJson1BadRequestExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InternalServerErrorException":
        case "com.amazonaws.guardduty#InternalServerErrorException":
            response = {
                ...(await deserializeAws_restJson1InternalServerErrorExceptionResponse(parsedOutput, context)),
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
const deserializeAws_restJson1CreateIPSetCommand = async (output, context) => {
    if (output.statusCode !== 200 && output.statusCode >= 300) {
        return deserializeAws_restJson1CreateIPSetCommandError(output, context);
    }
    const contents = {
        $metadata: deserializeMetadata(output),
        IpSetId: undefined,
    };
    const data = await parseBody(output.body, context);
    if (data.ipSetId !== undefined && data.ipSetId !== null) {
        contents.IpSetId = data.ipSetId;
    }
    return Promise.resolve(contents);
};
exports.deserializeAws_restJson1CreateIPSetCommand = deserializeAws_restJson1CreateIPSetCommand;
const deserializeAws_restJson1CreateIPSetCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "BadRequestException":
        case "com.amazonaws.guardduty#BadRequestException":
            response = {
                ...(await deserializeAws_restJson1BadRequestExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InternalServerErrorException":
        case "com.amazonaws.guardduty#InternalServerErrorException":
            response = {
                ...(await deserializeAws_restJson1InternalServerErrorExceptionResponse(parsedOutput, context)),
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
const deserializeAws_restJson1CreateMembersCommand = async (output, context) => {
    if (output.statusCode !== 200 && output.statusCode >= 300) {
        return deserializeAws_restJson1CreateMembersCommandError(output, context);
    }
    const contents = {
        $metadata: deserializeMetadata(output),
        UnprocessedAccounts: undefined,
    };
    const data = await parseBody(output.body, context);
    if (data.unprocessedAccounts !== undefined && data.unprocessedAccounts !== null) {
        contents.UnprocessedAccounts = deserializeAws_restJson1UnprocessedAccounts(data.unprocessedAccounts, context);
    }
    return Promise.resolve(contents);
};
exports.deserializeAws_restJson1CreateMembersCommand = deserializeAws_restJson1CreateMembersCommand;
const deserializeAws_restJson1CreateMembersCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "BadRequestException":
        case "com.amazonaws.guardduty#BadRequestException":
            response = {
                ...(await deserializeAws_restJson1BadRequestExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InternalServerErrorException":
        case "com.amazonaws.guardduty#InternalServerErrorException":
            response = {
                ...(await deserializeAws_restJson1InternalServerErrorExceptionResponse(parsedOutput, context)),
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
const deserializeAws_restJson1CreatePublishingDestinationCommand = async (output, context) => {
    if (output.statusCode !== 200 && output.statusCode >= 300) {
        return deserializeAws_restJson1CreatePublishingDestinationCommandError(output, context);
    }
    const contents = {
        $metadata: deserializeMetadata(output),
        DestinationId: undefined,
    };
    const data = await parseBody(output.body, context);
    if (data.destinationId !== undefined && data.destinationId !== null) {
        contents.DestinationId = data.destinationId;
    }
    return Promise.resolve(contents);
};
exports.deserializeAws_restJson1CreatePublishingDestinationCommand = deserializeAws_restJson1CreatePublishingDestinationCommand;
const deserializeAws_restJson1CreatePublishingDestinationCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "BadRequestException":
        case "com.amazonaws.guardduty#BadRequestException":
            response = {
                ...(await deserializeAws_restJson1BadRequestExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InternalServerErrorException":
        case "com.amazonaws.guardduty#InternalServerErrorException":
            response = {
                ...(await deserializeAws_restJson1InternalServerErrorExceptionResponse(parsedOutput, context)),
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
        case "BadRequestException":
        case "com.amazonaws.guardduty#BadRequestException":
            response = {
                ...(await deserializeAws_restJson1BadRequestExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InternalServerErrorException":
        case "com.amazonaws.guardduty#InternalServerErrorException":
            response = {
                ...(await deserializeAws_restJson1InternalServerErrorExceptionResponse(parsedOutput, context)),
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
const deserializeAws_restJson1CreateThreatIntelSetCommand = async (output, context) => {
    if (output.statusCode !== 200 && output.statusCode >= 300) {
        return deserializeAws_restJson1CreateThreatIntelSetCommandError(output, context);
    }
    const contents = {
        $metadata: deserializeMetadata(output),
        ThreatIntelSetId: undefined,
    };
    const data = await parseBody(output.body, context);
    if (data.threatIntelSetId !== undefined && data.threatIntelSetId !== null) {
        contents.ThreatIntelSetId = data.threatIntelSetId;
    }
    return Promise.resolve(contents);
};
exports.deserializeAws_restJson1CreateThreatIntelSetCommand = deserializeAws_restJson1CreateThreatIntelSetCommand;
const deserializeAws_restJson1CreateThreatIntelSetCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "BadRequestException":
        case "com.amazonaws.guardduty#BadRequestException":
            response = {
                ...(await deserializeAws_restJson1BadRequestExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InternalServerErrorException":
        case "com.amazonaws.guardduty#InternalServerErrorException":
            response = {
                ...(await deserializeAws_restJson1InternalServerErrorExceptionResponse(parsedOutput, context)),
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
        UnprocessedAccounts: undefined,
    };
    const data = await parseBody(output.body, context);
    if (data.unprocessedAccounts !== undefined && data.unprocessedAccounts !== null) {
        contents.UnprocessedAccounts = deserializeAws_restJson1UnprocessedAccounts(data.unprocessedAccounts, context);
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
        case "BadRequestException":
        case "com.amazonaws.guardduty#BadRequestException":
            response = {
                ...(await deserializeAws_restJson1BadRequestExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InternalServerErrorException":
        case "com.amazonaws.guardduty#InternalServerErrorException":
            response = {
                ...(await deserializeAws_restJson1InternalServerErrorExceptionResponse(parsedOutput, context)),
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
const deserializeAws_restJson1DeleteDetectorCommand = async (output, context) => {
    if (output.statusCode !== 200 && output.statusCode >= 300) {
        return deserializeAws_restJson1DeleteDetectorCommandError(output, context);
    }
    const contents = {
        $metadata: deserializeMetadata(output),
    };
    await collectBody(output.body, context);
    return Promise.resolve(contents);
};
exports.deserializeAws_restJson1DeleteDetectorCommand = deserializeAws_restJson1DeleteDetectorCommand;
const deserializeAws_restJson1DeleteDetectorCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "BadRequestException":
        case "com.amazonaws.guardduty#BadRequestException":
            response = {
                ...(await deserializeAws_restJson1BadRequestExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InternalServerErrorException":
        case "com.amazonaws.guardduty#InternalServerErrorException":
            response = {
                ...(await deserializeAws_restJson1InternalServerErrorExceptionResponse(parsedOutput, context)),
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
const deserializeAws_restJson1DeleteFilterCommand = async (output, context) => {
    if (output.statusCode !== 200 && output.statusCode >= 300) {
        return deserializeAws_restJson1DeleteFilterCommandError(output, context);
    }
    const contents = {
        $metadata: deserializeMetadata(output),
    };
    await collectBody(output.body, context);
    return Promise.resolve(contents);
};
exports.deserializeAws_restJson1DeleteFilterCommand = deserializeAws_restJson1DeleteFilterCommand;
const deserializeAws_restJson1DeleteFilterCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "BadRequestException":
        case "com.amazonaws.guardduty#BadRequestException":
            response = {
                ...(await deserializeAws_restJson1BadRequestExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InternalServerErrorException":
        case "com.amazonaws.guardduty#InternalServerErrorException":
            response = {
                ...(await deserializeAws_restJson1InternalServerErrorExceptionResponse(parsedOutput, context)),
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
        UnprocessedAccounts: undefined,
    };
    const data = await parseBody(output.body, context);
    if (data.unprocessedAccounts !== undefined && data.unprocessedAccounts !== null) {
        contents.UnprocessedAccounts = deserializeAws_restJson1UnprocessedAccounts(data.unprocessedAccounts, context);
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
        case "BadRequestException":
        case "com.amazonaws.guardduty#BadRequestException":
            response = {
                ...(await deserializeAws_restJson1BadRequestExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InternalServerErrorException":
        case "com.amazonaws.guardduty#InternalServerErrorException":
            response = {
                ...(await deserializeAws_restJson1InternalServerErrorExceptionResponse(parsedOutput, context)),
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
const deserializeAws_restJson1DeleteIPSetCommand = async (output, context) => {
    if (output.statusCode !== 200 && output.statusCode >= 300) {
        return deserializeAws_restJson1DeleteIPSetCommandError(output, context);
    }
    const contents = {
        $metadata: deserializeMetadata(output),
    };
    await collectBody(output.body, context);
    return Promise.resolve(contents);
};
exports.deserializeAws_restJson1DeleteIPSetCommand = deserializeAws_restJson1DeleteIPSetCommand;
const deserializeAws_restJson1DeleteIPSetCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "BadRequestException":
        case "com.amazonaws.guardduty#BadRequestException":
            response = {
                ...(await deserializeAws_restJson1BadRequestExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InternalServerErrorException":
        case "com.amazonaws.guardduty#InternalServerErrorException":
            response = {
                ...(await deserializeAws_restJson1InternalServerErrorExceptionResponse(parsedOutput, context)),
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
const deserializeAws_restJson1DeleteMembersCommand = async (output, context) => {
    if (output.statusCode !== 200 && output.statusCode >= 300) {
        return deserializeAws_restJson1DeleteMembersCommandError(output, context);
    }
    const contents = {
        $metadata: deserializeMetadata(output),
        UnprocessedAccounts: undefined,
    };
    const data = await parseBody(output.body, context);
    if (data.unprocessedAccounts !== undefined && data.unprocessedAccounts !== null) {
        contents.UnprocessedAccounts = deserializeAws_restJson1UnprocessedAccounts(data.unprocessedAccounts, context);
    }
    return Promise.resolve(contents);
};
exports.deserializeAws_restJson1DeleteMembersCommand = deserializeAws_restJson1DeleteMembersCommand;
const deserializeAws_restJson1DeleteMembersCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "BadRequestException":
        case "com.amazonaws.guardduty#BadRequestException":
            response = {
                ...(await deserializeAws_restJson1BadRequestExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InternalServerErrorException":
        case "com.amazonaws.guardduty#InternalServerErrorException":
            response = {
                ...(await deserializeAws_restJson1InternalServerErrorExceptionResponse(parsedOutput, context)),
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
const deserializeAws_restJson1DeletePublishingDestinationCommand = async (output, context) => {
    if (output.statusCode !== 200 && output.statusCode >= 300) {
        return deserializeAws_restJson1DeletePublishingDestinationCommandError(output, context);
    }
    const contents = {
        $metadata: deserializeMetadata(output),
    };
    await collectBody(output.body, context);
    return Promise.resolve(contents);
};
exports.deserializeAws_restJson1DeletePublishingDestinationCommand = deserializeAws_restJson1DeletePublishingDestinationCommand;
const deserializeAws_restJson1DeletePublishingDestinationCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "BadRequestException":
        case "com.amazonaws.guardduty#BadRequestException":
            response = {
                ...(await deserializeAws_restJson1BadRequestExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InternalServerErrorException":
        case "com.amazonaws.guardduty#InternalServerErrorException":
            response = {
                ...(await deserializeAws_restJson1InternalServerErrorExceptionResponse(parsedOutput, context)),
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
const deserializeAws_restJson1DeleteThreatIntelSetCommand = async (output, context) => {
    if (output.statusCode !== 200 && output.statusCode >= 300) {
        return deserializeAws_restJson1DeleteThreatIntelSetCommandError(output, context);
    }
    const contents = {
        $metadata: deserializeMetadata(output),
    };
    await collectBody(output.body, context);
    return Promise.resolve(contents);
};
exports.deserializeAws_restJson1DeleteThreatIntelSetCommand = deserializeAws_restJson1DeleteThreatIntelSetCommand;
const deserializeAws_restJson1DeleteThreatIntelSetCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "BadRequestException":
        case "com.amazonaws.guardduty#BadRequestException":
            response = {
                ...(await deserializeAws_restJson1BadRequestExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InternalServerErrorException":
        case "com.amazonaws.guardduty#InternalServerErrorException":
            response = {
                ...(await deserializeAws_restJson1InternalServerErrorExceptionResponse(parsedOutput, context)),
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
        AutoEnable: undefined,
        DataSources: undefined,
        MemberAccountLimitReached: undefined,
    };
    const data = await parseBody(output.body, context);
    if (data.autoEnable !== undefined && data.autoEnable !== null) {
        contents.AutoEnable = data.autoEnable;
    }
    if (data.dataSources !== undefined && data.dataSources !== null) {
        contents.DataSources = deserializeAws_restJson1OrganizationDataSourceConfigurationsResult(data.dataSources, context);
    }
    if (data.memberAccountLimitReached !== undefined && data.memberAccountLimitReached !== null) {
        contents.MemberAccountLimitReached = data.memberAccountLimitReached;
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
        case "BadRequestException":
        case "com.amazonaws.guardduty#BadRequestException":
            response = {
                ...(await deserializeAws_restJson1BadRequestExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InternalServerErrorException":
        case "com.amazonaws.guardduty#InternalServerErrorException":
            response = {
                ...(await deserializeAws_restJson1InternalServerErrorExceptionResponse(parsedOutput, context)),
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
const deserializeAws_restJson1DescribePublishingDestinationCommand = async (output, context) => {
    if (output.statusCode !== 200 && output.statusCode >= 300) {
        return deserializeAws_restJson1DescribePublishingDestinationCommandError(output, context);
    }
    const contents = {
        $metadata: deserializeMetadata(output),
        DestinationId: undefined,
        DestinationProperties: undefined,
        DestinationType: undefined,
        PublishingFailureStartTimestamp: undefined,
        Status: undefined,
    };
    const data = await parseBody(output.body, context);
    if (data.destinationId !== undefined && data.destinationId !== null) {
        contents.DestinationId = data.destinationId;
    }
    if (data.destinationProperties !== undefined && data.destinationProperties !== null) {
        contents.DestinationProperties = deserializeAws_restJson1DestinationProperties(data.destinationProperties, context);
    }
    if (data.destinationType !== undefined && data.destinationType !== null) {
        contents.DestinationType = data.destinationType;
    }
    if (data.publishingFailureStartTimestamp !== undefined && data.publishingFailureStartTimestamp !== null) {
        contents.PublishingFailureStartTimestamp = data.publishingFailureStartTimestamp;
    }
    if (data.status !== undefined && data.status !== null) {
        contents.Status = data.status;
    }
    return Promise.resolve(contents);
};
exports.deserializeAws_restJson1DescribePublishingDestinationCommand = deserializeAws_restJson1DescribePublishingDestinationCommand;
const deserializeAws_restJson1DescribePublishingDestinationCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "BadRequestException":
        case "com.amazonaws.guardduty#BadRequestException":
            response = {
                ...(await deserializeAws_restJson1BadRequestExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InternalServerErrorException":
        case "com.amazonaws.guardduty#InternalServerErrorException":
            response = {
                ...(await deserializeAws_restJson1InternalServerErrorExceptionResponse(parsedOutput, context)),
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
        case "BadRequestException":
        case "com.amazonaws.guardduty#BadRequestException":
            response = {
                ...(await deserializeAws_restJson1BadRequestExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InternalServerErrorException":
        case "com.amazonaws.guardduty#InternalServerErrorException":
            response = {
                ...(await deserializeAws_restJson1InternalServerErrorExceptionResponse(parsedOutput, context)),
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
        case "BadRequestException":
        case "com.amazonaws.guardduty#BadRequestException":
            response = {
                ...(await deserializeAws_restJson1BadRequestExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InternalServerErrorException":
        case "com.amazonaws.guardduty#InternalServerErrorException":
            response = {
                ...(await deserializeAws_restJson1InternalServerErrorExceptionResponse(parsedOutput, context)),
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
const deserializeAws_restJson1DisassociateMembersCommand = async (output, context) => {
    if (output.statusCode !== 200 && output.statusCode >= 300) {
        return deserializeAws_restJson1DisassociateMembersCommandError(output, context);
    }
    const contents = {
        $metadata: deserializeMetadata(output),
        UnprocessedAccounts: undefined,
    };
    const data = await parseBody(output.body, context);
    if (data.unprocessedAccounts !== undefined && data.unprocessedAccounts !== null) {
        contents.UnprocessedAccounts = deserializeAws_restJson1UnprocessedAccounts(data.unprocessedAccounts, context);
    }
    return Promise.resolve(contents);
};
exports.deserializeAws_restJson1DisassociateMembersCommand = deserializeAws_restJson1DisassociateMembersCommand;
const deserializeAws_restJson1DisassociateMembersCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "BadRequestException":
        case "com.amazonaws.guardduty#BadRequestException":
            response = {
                ...(await deserializeAws_restJson1BadRequestExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InternalServerErrorException":
        case "com.amazonaws.guardduty#InternalServerErrorException":
            response = {
                ...(await deserializeAws_restJson1InternalServerErrorExceptionResponse(parsedOutput, context)),
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
        case "BadRequestException":
        case "com.amazonaws.guardduty#BadRequestException":
            response = {
                ...(await deserializeAws_restJson1BadRequestExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InternalServerErrorException":
        case "com.amazonaws.guardduty#InternalServerErrorException":
            response = {
                ...(await deserializeAws_restJson1InternalServerErrorExceptionResponse(parsedOutput, context)),
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
const deserializeAws_restJson1GetDetectorCommand = async (output, context) => {
    if (output.statusCode !== 200 && output.statusCode >= 300) {
        return deserializeAws_restJson1GetDetectorCommandError(output, context);
    }
    const contents = {
        $metadata: deserializeMetadata(output),
        CreatedAt: undefined,
        DataSources: undefined,
        FindingPublishingFrequency: undefined,
        ServiceRole: undefined,
        Status: undefined,
        Tags: undefined,
        UpdatedAt: undefined,
    };
    const data = await parseBody(output.body, context);
    if (data.createdAt !== undefined && data.createdAt !== null) {
        contents.CreatedAt = data.createdAt;
    }
    if (data.dataSources !== undefined && data.dataSources !== null) {
        contents.DataSources = deserializeAws_restJson1DataSourceConfigurationsResult(data.dataSources, context);
    }
    if (data.findingPublishingFrequency !== undefined && data.findingPublishingFrequency !== null) {
        contents.FindingPublishingFrequency = data.findingPublishingFrequency;
    }
    if (data.serviceRole !== undefined && data.serviceRole !== null) {
        contents.ServiceRole = data.serviceRole;
    }
    if (data.status !== undefined && data.status !== null) {
        contents.Status = data.status;
    }
    if (data.tags !== undefined && data.tags !== null) {
        contents.Tags = deserializeAws_restJson1TagMap(data.tags, context);
    }
    if (data.updatedAt !== undefined && data.updatedAt !== null) {
        contents.UpdatedAt = data.updatedAt;
    }
    return Promise.resolve(contents);
};
exports.deserializeAws_restJson1GetDetectorCommand = deserializeAws_restJson1GetDetectorCommand;
const deserializeAws_restJson1GetDetectorCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "BadRequestException":
        case "com.amazonaws.guardduty#BadRequestException":
            response = {
                ...(await deserializeAws_restJson1BadRequestExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InternalServerErrorException":
        case "com.amazonaws.guardduty#InternalServerErrorException":
            response = {
                ...(await deserializeAws_restJson1InternalServerErrorExceptionResponse(parsedOutput, context)),
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
const deserializeAws_restJson1GetFilterCommand = async (output, context) => {
    if (output.statusCode !== 200 && output.statusCode >= 300) {
        return deserializeAws_restJson1GetFilterCommandError(output, context);
    }
    const contents = {
        $metadata: deserializeMetadata(output),
        Action: undefined,
        Description: undefined,
        FindingCriteria: undefined,
        Name: undefined,
        Rank: undefined,
        Tags: undefined,
    };
    const data = await parseBody(output.body, context);
    if (data.action !== undefined && data.action !== null) {
        contents.Action = data.action;
    }
    if (data.description !== undefined && data.description !== null) {
        contents.Description = data.description;
    }
    if (data.findingCriteria !== undefined && data.findingCriteria !== null) {
        contents.FindingCriteria = deserializeAws_restJson1FindingCriteria(data.findingCriteria, context);
    }
    if (data.name !== undefined && data.name !== null) {
        contents.Name = data.name;
    }
    if (data.rank !== undefined && data.rank !== null) {
        contents.Rank = data.rank;
    }
    if (data.tags !== undefined && data.tags !== null) {
        contents.Tags = deserializeAws_restJson1TagMap(data.tags, context);
    }
    return Promise.resolve(contents);
};
exports.deserializeAws_restJson1GetFilterCommand = deserializeAws_restJson1GetFilterCommand;
const deserializeAws_restJson1GetFilterCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "BadRequestException":
        case "com.amazonaws.guardduty#BadRequestException":
            response = {
                ...(await deserializeAws_restJson1BadRequestExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InternalServerErrorException":
        case "com.amazonaws.guardduty#InternalServerErrorException":
            response = {
                ...(await deserializeAws_restJson1InternalServerErrorExceptionResponse(parsedOutput, context)),
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
        Findings: undefined,
    };
    const data = await parseBody(output.body, context);
    if (data.findings !== undefined && data.findings !== null) {
        contents.Findings = deserializeAws_restJson1Findings(data.findings, context);
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
        case "BadRequestException":
        case "com.amazonaws.guardduty#BadRequestException":
            response = {
                ...(await deserializeAws_restJson1BadRequestExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InternalServerErrorException":
        case "com.amazonaws.guardduty#InternalServerErrorException":
            response = {
                ...(await deserializeAws_restJson1InternalServerErrorExceptionResponse(parsedOutput, context)),
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
const deserializeAws_restJson1GetFindingsStatisticsCommand = async (output, context) => {
    if (output.statusCode !== 200 && output.statusCode >= 300) {
        return deserializeAws_restJson1GetFindingsStatisticsCommandError(output, context);
    }
    const contents = {
        $metadata: deserializeMetadata(output),
        FindingStatistics: undefined,
    };
    const data = await parseBody(output.body, context);
    if (data.findingStatistics !== undefined && data.findingStatistics !== null) {
        contents.FindingStatistics = deserializeAws_restJson1FindingStatistics(data.findingStatistics, context);
    }
    return Promise.resolve(contents);
};
exports.deserializeAws_restJson1GetFindingsStatisticsCommand = deserializeAws_restJson1GetFindingsStatisticsCommand;
const deserializeAws_restJson1GetFindingsStatisticsCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "BadRequestException":
        case "com.amazonaws.guardduty#BadRequestException":
            response = {
                ...(await deserializeAws_restJson1BadRequestExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InternalServerErrorException":
        case "com.amazonaws.guardduty#InternalServerErrorException":
            response = {
                ...(await deserializeAws_restJson1InternalServerErrorExceptionResponse(parsedOutput, context)),
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
        InvitationsCount: undefined,
    };
    const data = await parseBody(output.body, context);
    if (data.invitationsCount !== undefined && data.invitationsCount !== null) {
        contents.InvitationsCount = data.invitationsCount;
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
        case "BadRequestException":
        case "com.amazonaws.guardduty#BadRequestException":
            response = {
                ...(await deserializeAws_restJson1BadRequestExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InternalServerErrorException":
        case "com.amazonaws.guardduty#InternalServerErrorException":
            response = {
                ...(await deserializeAws_restJson1InternalServerErrorExceptionResponse(parsedOutput, context)),
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
const deserializeAws_restJson1GetIPSetCommand = async (output, context) => {
    if (output.statusCode !== 200 && output.statusCode >= 300) {
        return deserializeAws_restJson1GetIPSetCommandError(output, context);
    }
    const contents = {
        $metadata: deserializeMetadata(output),
        Format: undefined,
        Location: undefined,
        Name: undefined,
        Status: undefined,
        Tags: undefined,
    };
    const data = await parseBody(output.body, context);
    if (data.format !== undefined && data.format !== null) {
        contents.Format = data.format;
    }
    if (data.location !== undefined && data.location !== null) {
        contents.Location = data.location;
    }
    if (data.name !== undefined && data.name !== null) {
        contents.Name = data.name;
    }
    if (data.status !== undefined && data.status !== null) {
        contents.Status = data.status;
    }
    if (data.tags !== undefined && data.tags !== null) {
        contents.Tags = deserializeAws_restJson1TagMap(data.tags, context);
    }
    return Promise.resolve(contents);
};
exports.deserializeAws_restJson1GetIPSetCommand = deserializeAws_restJson1GetIPSetCommand;
const deserializeAws_restJson1GetIPSetCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "BadRequestException":
        case "com.amazonaws.guardduty#BadRequestException":
            response = {
                ...(await deserializeAws_restJson1BadRequestExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InternalServerErrorException":
        case "com.amazonaws.guardduty#InternalServerErrorException":
            response = {
                ...(await deserializeAws_restJson1InternalServerErrorExceptionResponse(parsedOutput, context)),
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
        Master: undefined,
    };
    const data = await parseBody(output.body, context);
    if (data.master !== undefined && data.master !== null) {
        contents.Master = deserializeAws_restJson1Master(data.master, context);
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
        case "BadRequestException":
        case "com.amazonaws.guardduty#BadRequestException":
            response = {
                ...(await deserializeAws_restJson1BadRequestExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InternalServerErrorException":
        case "com.amazonaws.guardduty#InternalServerErrorException":
            response = {
                ...(await deserializeAws_restJson1InternalServerErrorExceptionResponse(parsedOutput, context)),
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
const deserializeAws_restJson1GetMemberDetectorsCommand = async (output, context) => {
    if (output.statusCode !== 200 && output.statusCode >= 300) {
        return deserializeAws_restJson1GetMemberDetectorsCommandError(output, context);
    }
    const contents = {
        $metadata: deserializeMetadata(output),
        MemberDataSourceConfigurations: undefined,
        UnprocessedAccounts: undefined,
    };
    const data = await parseBody(output.body, context);
    if (data.members !== undefined && data.members !== null) {
        contents.MemberDataSourceConfigurations = deserializeAws_restJson1MemberDataSourceConfigurations(data.members, context);
    }
    if (data.unprocessedAccounts !== undefined && data.unprocessedAccounts !== null) {
        contents.UnprocessedAccounts = deserializeAws_restJson1UnprocessedAccounts(data.unprocessedAccounts, context);
    }
    return Promise.resolve(contents);
};
exports.deserializeAws_restJson1GetMemberDetectorsCommand = deserializeAws_restJson1GetMemberDetectorsCommand;
const deserializeAws_restJson1GetMemberDetectorsCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "BadRequestException":
        case "com.amazonaws.guardduty#BadRequestException":
            response = {
                ...(await deserializeAws_restJson1BadRequestExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InternalServerErrorException":
        case "com.amazonaws.guardduty#InternalServerErrorException":
            response = {
                ...(await deserializeAws_restJson1InternalServerErrorExceptionResponse(parsedOutput, context)),
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
const deserializeAws_restJson1GetMembersCommand = async (output, context) => {
    if (output.statusCode !== 200 && output.statusCode >= 300) {
        return deserializeAws_restJson1GetMembersCommandError(output, context);
    }
    const contents = {
        $metadata: deserializeMetadata(output),
        Members: undefined,
        UnprocessedAccounts: undefined,
    };
    const data = await parseBody(output.body, context);
    if (data.members !== undefined && data.members !== null) {
        contents.Members = deserializeAws_restJson1Members(data.members, context);
    }
    if (data.unprocessedAccounts !== undefined && data.unprocessedAccounts !== null) {
        contents.UnprocessedAccounts = deserializeAws_restJson1UnprocessedAccounts(data.unprocessedAccounts, context);
    }
    return Promise.resolve(contents);
};
exports.deserializeAws_restJson1GetMembersCommand = deserializeAws_restJson1GetMembersCommand;
const deserializeAws_restJson1GetMembersCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "BadRequestException":
        case "com.amazonaws.guardduty#BadRequestException":
            response = {
                ...(await deserializeAws_restJson1BadRequestExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InternalServerErrorException":
        case "com.amazonaws.guardduty#InternalServerErrorException":
            response = {
                ...(await deserializeAws_restJson1InternalServerErrorExceptionResponse(parsedOutput, context)),
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
const deserializeAws_restJson1GetThreatIntelSetCommand = async (output, context) => {
    if (output.statusCode !== 200 && output.statusCode >= 300) {
        return deserializeAws_restJson1GetThreatIntelSetCommandError(output, context);
    }
    const contents = {
        $metadata: deserializeMetadata(output),
        Format: undefined,
        Location: undefined,
        Name: undefined,
        Status: undefined,
        Tags: undefined,
    };
    const data = await parseBody(output.body, context);
    if (data.format !== undefined && data.format !== null) {
        contents.Format = data.format;
    }
    if (data.location !== undefined && data.location !== null) {
        contents.Location = data.location;
    }
    if (data.name !== undefined && data.name !== null) {
        contents.Name = data.name;
    }
    if (data.status !== undefined && data.status !== null) {
        contents.Status = data.status;
    }
    if (data.tags !== undefined && data.tags !== null) {
        contents.Tags = deserializeAws_restJson1TagMap(data.tags, context);
    }
    return Promise.resolve(contents);
};
exports.deserializeAws_restJson1GetThreatIntelSetCommand = deserializeAws_restJson1GetThreatIntelSetCommand;
const deserializeAws_restJson1GetThreatIntelSetCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "BadRequestException":
        case "com.amazonaws.guardduty#BadRequestException":
            response = {
                ...(await deserializeAws_restJson1BadRequestExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InternalServerErrorException":
        case "com.amazonaws.guardduty#InternalServerErrorException":
            response = {
                ...(await deserializeAws_restJson1InternalServerErrorExceptionResponse(parsedOutput, context)),
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
        NextToken: undefined,
        UsageStatistics: undefined,
    };
    const data = await parseBody(output.body, context);
    if (data.nextToken !== undefined && data.nextToken !== null) {
        contents.NextToken = data.nextToken;
    }
    if (data.usageStatistics !== undefined && data.usageStatistics !== null) {
        contents.UsageStatistics = deserializeAws_restJson1UsageStatistics(data.usageStatistics, context);
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
        case "BadRequestException":
        case "com.amazonaws.guardduty#BadRequestException":
            response = {
                ...(await deserializeAws_restJson1BadRequestExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InternalServerErrorException":
        case "com.amazonaws.guardduty#InternalServerErrorException":
            response = {
                ...(await deserializeAws_restJson1InternalServerErrorExceptionResponse(parsedOutput, context)),
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
const deserializeAws_restJson1InviteMembersCommand = async (output, context) => {
    if (output.statusCode !== 200 && output.statusCode >= 300) {
        return deserializeAws_restJson1InviteMembersCommandError(output, context);
    }
    const contents = {
        $metadata: deserializeMetadata(output),
        UnprocessedAccounts: undefined,
    };
    const data = await parseBody(output.body, context);
    if (data.unprocessedAccounts !== undefined && data.unprocessedAccounts !== null) {
        contents.UnprocessedAccounts = deserializeAws_restJson1UnprocessedAccounts(data.unprocessedAccounts, context);
    }
    return Promise.resolve(contents);
};
exports.deserializeAws_restJson1InviteMembersCommand = deserializeAws_restJson1InviteMembersCommand;
const deserializeAws_restJson1InviteMembersCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "BadRequestException":
        case "com.amazonaws.guardduty#BadRequestException":
            response = {
                ...(await deserializeAws_restJson1BadRequestExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InternalServerErrorException":
        case "com.amazonaws.guardduty#InternalServerErrorException":
            response = {
                ...(await deserializeAws_restJson1InternalServerErrorExceptionResponse(parsedOutput, context)),
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
const deserializeAws_restJson1ListDetectorsCommand = async (output, context) => {
    if (output.statusCode !== 200 && output.statusCode >= 300) {
        return deserializeAws_restJson1ListDetectorsCommandError(output, context);
    }
    const contents = {
        $metadata: deserializeMetadata(output),
        DetectorIds: undefined,
        NextToken: undefined,
    };
    const data = await parseBody(output.body, context);
    if (data.detectorIds !== undefined && data.detectorIds !== null) {
        contents.DetectorIds = deserializeAws_restJson1DetectorIds(data.detectorIds, context);
    }
    if (data.nextToken !== undefined && data.nextToken !== null) {
        contents.NextToken = data.nextToken;
    }
    return Promise.resolve(contents);
};
exports.deserializeAws_restJson1ListDetectorsCommand = deserializeAws_restJson1ListDetectorsCommand;
const deserializeAws_restJson1ListDetectorsCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "BadRequestException":
        case "com.amazonaws.guardduty#BadRequestException":
            response = {
                ...(await deserializeAws_restJson1BadRequestExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InternalServerErrorException":
        case "com.amazonaws.guardduty#InternalServerErrorException":
            response = {
                ...(await deserializeAws_restJson1InternalServerErrorExceptionResponse(parsedOutput, context)),
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
const deserializeAws_restJson1ListFiltersCommand = async (output, context) => {
    if (output.statusCode !== 200 && output.statusCode >= 300) {
        return deserializeAws_restJson1ListFiltersCommandError(output, context);
    }
    const contents = {
        $metadata: deserializeMetadata(output),
        FilterNames: undefined,
        NextToken: undefined,
    };
    const data = await parseBody(output.body, context);
    if (data.filterNames !== undefined && data.filterNames !== null) {
        contents.FilterNames = deserializeAws_restJson1FilterNames(data.filterNames, context);
    }
    if (data.nextToken !== undefined && data.nextToken !== null) {
        contents.NextToken = data.nextToken;
    }
    return Promise.resolve(contents);
};
exports.deserializeAws_restJson1ListFiltersCommand = deserializeAws_restJson1ListFiltersCommand;
const deserializeAws_restJson1ListFiltersCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "BadRequestException":
        case "com.amazonaws.guardduty#BadRequestException":
            response = {
                ...(await deserializeAws_restJson1BadRequestExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InternalServerErrorException":
        case "com.amazonaws.guardduty#InternalServerErrorException":
            response = {
                ...(await deserializeAws_restJson1InternalServerErrorExceptionResponse(parsedOutput, context)),
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
        FindingIds: undefined,
        NextToken: undefined,
    };
    const data = await parseBody(output.body, context);
    if (data.findingIds !== undefined && data.findingIds !== null) {
        contents.FindingIds = deserializeAws_restJson1FindingIds(data.findingIds, context);
    }
    if (data.nextToken !== undefined && data.nextToken !== null) {
        contents.NextToken = data.nextToken;
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
        case "BadRequestException":
        case "com.amazonaws.guardduty#BadRequestException":
            response = {
                ...(await deserializeAws_restJson1BadRequestExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InternalServerErrorException":
        case "com.amazonaws.guardduty#InternalServerErrorException":
            response = {
                ...(await deserializeAws_restJson1InternalServerErrorExceptionResponse(parsedOutput, context)),
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
        Invitations: undefined,
        NextToken: undefined,
    };
    const data = await parseBody(output.body, context);
    if (data.invitations !== undefined && data.invitations !== null) {
        contents.Invitations = deserializeAws_restJson1Invitations(data.invitations, context);
    }
    if (data.nextToken !== undefined && data.nextToken !== null) {
        contents.NextToken = data.nextToken;
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
        case "BadRequestException":
        case "com.amazonaws.guardduty#BadRequestException":
            response = {
                ...(await deserializeAws_restJson1BadRequestExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InternalServerErrorException":
        case "com.amazonaws.guardduty#InternalServerErrorException":
            response = {
                ...(await deserializeAws_restJson1InternalServerErrorExceptionResponse(parsedOutput, context)),
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
const deserializeAws_restJson1ListIPSetsCommand = async (output, context) => {
    if (output.statusCode !== 200 && output.statusCode >= 300) {
        return deserializeAws_restJson1ListIPSetsCommandError(output, context);
    }
    const contents = {
        $metadata: deserializeMetadata(output),
        IpSetIds: undefined,
        NextToken: undefined,
    };
    const data = await parseBody(output.body, context);
    if (data.ipSetIds !== undefined && data.ipSetIds !== null) {
        contents.IpSetIds = deserializeAws_restJson1IpSetIds(data.ipSetIds, context);
    }
    if (data.nextToken !== undefined && data.nextToken !== null) {
        contents.NextToken = data.nextToken;
    }
    return Promise.resolve(contents);
};
exports.deserializeAws_restJson1ListIPSetsCommand = deserializeAws_restJson1ListIPSetsCommand;
const deserializeAws_restJson1ListIPSetsCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "BadRequestException":
        case "com.amazonaws.guardduty#BadRequestException":
            response = {
                ...(await deserializeAws_restJson1BadRequestExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InternalServerErrorException":
        case "com.amazonaws.guardduty#InternalServerErrorException":
            response = {
                ...(await deserializeAws_restJson1InternalServerErrorExceptionResponse(parsedOutput, context)),
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
        Members: undefined,
        NextToken: undefined,
    };
    const data = await parseBody(output.body, context);
    if (data.members !== undefined && data.members !== null) {
        contents.Members = deserializeAws_restJson1Members(data.members, context);
    }
    if (data.nextToken !== undefined && data.nextToken !== null) {
        contents.NextToken = data.nextToken;
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
        case "BadRequestException":
        case "com.amazonaws.guardduty#BadRequestException":
            response = {
                ...(await deserializeAws_restJson1BadRequestExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InternalServerErrorException":
        case "com.amazonaws.guardduty#InternalServerErrorException":
            response = {
                ...(await deserializeAws_restJson1InternalServerErrorExceptionResponse(parsedOutput, context)),
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
        AdminAccounts: undefined,
        NextToken: undefined,
    };
    const data = await parseBody(output.body, context);
    if (data.adminAccounts !== undefined && data.adminAccounts !== null) {
        contents.AdminAccounts = deserializeAws_restJson1AdminAccounts(data.adminAccounts, context);
    }
    if (data.nextToken !== undefined && data.nextToken !== null) {
        contents.NextToken = data.nextToken;
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
        case "BadRequestException":
        case "com.amazonaws.guardduty#BadRequestException":
            response = {
                ...(await deserializeAws_restJson1BadRequestExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InternalServerErrorException":
        case "com.amazonaws.guardduty#InternalServerErrorException":
            response = {
                ...(await deserializeAws_restJson1InternalServerErrorExceptionResponse(parsedOutput, context)),
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
const deserializeAws_restJson1ListPublishingDestinationsCommand = async (output, context) => {
    if (output.statusCode !== 200 && output.statusCode >= 300) {
        return deserializeAws_restJson1ListPublishingDestinationsCommandError(output, context);
    }
    const contents = {
        $metadata: deserializeMetadata(output),
        Destinations: undefined,
        NextToken: undefined,
    };
    const data = await parseBody(output.body, context);
    if (data.destinations !== undefined && data.destinations !== null) {
        contents.Destinations = deserializeAws_restJson1Destinations(data.destinations, context);
    }
    if (data.nextToken !== undefined && data.nextToken !== null) {
        contents.NextToken = data.nextToken;
    }
    return Promise.resolve(contents);
};
exports.deserializeAws_restJson1ListPublishingDestinationsCommand = deserializeAws_restJson1ListPublishingDestinationsCommand;
const deserializeAws_restJson1ListPublishingDestinationsCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "BadRequestException":
        case "com.amazonaws.guardduty#BadRequestException":
            response = {
                ...(await deserializeAws_restJson1BadRequestExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InternalServerErrorException":
        case "com.amazonaws.guardduty#InternalServerErrorException":
            response = {
                ...(await deserializeAws_restJson1InternalServerErrorExceptionResponse(parsedOutput, context)),
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
    if (data.tags !== undefined && data.tags !== null) {
        contents.Tags = deserializeAws_restJson1TagMap(data.tags, context);
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
        case "com.amazonaws.guardduty#BadRequestException":
            response = {
                ...(await deserializeAws_restJson1BadRequestExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InternalServerErrorException":
        case "com.amazonaws.guardduty#InternalServerErrorException":
            response = {
                ...(await deserializeAws_restJson1InternalServerErrorExceptionResponse(parsedOutput, context)),
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
const deserializeAws_restJson1ListThreatIntelSetsCommand = async (output, context) => {
    if (output.statusCode !== 200 && output.statusCode >= 300) {
        return deserializeAws_restJson1ListThreatIntelSetsCommandError(output, context);
    }
    const contents = {
        $metadata: deserializeMetadata(output),
        NextToken: undefined,
        ThreatIntelSetIds: undefined,
    };
    const data = await parseBody(output.body, context);
    if (data.nextToken !== undefined && data.nextToken !== null) {
        contents.NextToken = data.nextToken;
    }
    if (data.threatIntelSetIds !== undefined && data.threatIntelSetIds !== null) {
        contents.ThreatIntelSetIds = deserializeAws_restJson1ThreatIntelSetIds(data.threatIntelSetIds, context);
    }
    return Promise.resolve(contents);
};
exports.deserializeAws_restJson1ListThreatIntelSetsCommand = deserializeAws_restJson1ListThreatIntelSetsCommand;
const deserializeAws_restJson1ListThreatIntelSetsCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "BadRequestException":
        case "com.amazonaws.guardduty#BadRequestException":
            response = {
                ...(await deserializeAws_restJson1BadRequestExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InternalServerErrorException":
        case "com.amazonaws.guardduty#InternalServerErrorException":
            response = {
                ...(await deserializeAws_restJson1InternalServerErrorExceptionResponse(parsedOutput, context)),
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
const deserializeAws_restJson1StartMonitoringMembersCommand = async (output, context) => {
    if (output.statusCode !== 200 && output.statusCode >= 300) {
        return deserializeAws_restJson1StartMonitoringMembersCommandError(output, context);
    }
    const contents = {
        $metadata: deserializeMetadata(output),
        UnprocessedAccounts: undefined,
    };
    const data = await parseBody(output.body, context);
    if (data.unprocessedAccounts !== undefined && data.unprocessedAccounts !== null) {
        contents.UnprocessedAccounts = deserializeAws_restJson1UnprocessedAccounts(data.unprocessedAccounts, context);
    }
    return Promise.resolve(contents);
};
exports.deserializeAws_restJson1StartMonitoringMembersCommand = deserializeAws_restJson1StartMonitoringMembersCommand;
const deserializeAws_restJson1StartMonitoringMembersCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "BadRequestException":
        case "com.amazonaws.guardduty#BadRequestException":
            response = {
                ...(await deserializeAws_restJson1BadRequestExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InternalServerErrorException":
        case "com.amazonaws.guardduty#InternalServerErrorException":
            response = {
                ...(await deserializeAws_restJson1InternalServerErrorExceptionResponse(parsedOutput, context)),
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
const deserializeAws_restJson1StopMonitoringMembersCommand = async (output, context) => {
    if (output.statusCode !== 200 && output.statusCode >= 300) {
        return deserializeAws_restJson1StopMonitoringMembersCommandError(output, context);
    }
    const contents = {
        $metadata: deserializeMetadata(output),
        UnprocessedAccounts: undefined,
    };
    const data = await parseBody(output.body, context);
    if (data.unprocessedAccounts !== undefined && data.unprocessedAccounts !== null) {
        contents.UnprocessedAccounts = deserializeAws_restJson1UnprocessedAccounts(data.unprocessedAccounts, context);
    }
    return Promise.resolve(contents);
};
exports.deserializeAws_restJson1StopMonitoringMembersCommand = deserializeAws_restJson1StopMonitoringMembersCommand;
const deserializeAws_restJson1StopMonitoringMembersCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "BadRequestException":
        case "com.amazonaws.guardduty#BadRequestException":
            response = {
                ...(await deserializeAws_restJson1BadRequestExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InternalServerErrorException":
        case "com.amazonaws.guardduty#InternalServerErrorException":
            response = {
                ...(await deserializeAws_restJson1InternalServerErrorExceptionResponse(parsedOutput, context)),
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
        case "BadRequestException":
        case "com.amazonaws.guardduty#BadRequestException":
            response = {
                ...(await deserializeAws_restJson1BadRequestExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InternalServerErrorException":
        case "com.amazonaws.guardduty#InternalServerErrorException":
            response = {
                ...(await deserializeAws_restJson1InternalServerErrorExceptionResponse(parsedOutput, context)),
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
const deserializeAws_restJson1UnarchiveFindingsCommand = async (output, context) => {
    if (output.statusCode !== 200 && output.statusCode >= 300) {
        return deserializeAws_restJson1UnarchiveFindingsCommandError(output, context);
    }
    const contents = {
        $metadata: deserializeMetadata(output),
    };
    await collectBody(output.body, context);
    return Promise.resolve(contents);
};
exports.deserializeAws_restJson1UnarchiveFindingsCommand = deserializeAws_restJson1UnarchiveFindingsCommand;
const deserializeAws_restJson1UnarchiveFindingsCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "BadRequestException":
        case "com.amazonaws.guardduty#BadRequestException":
            response = {
                ...(await deserializeAws_restJson1BadRequestExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InternalServerErrorException":
        case "com.amazonaws.guardduty#InternalServerErrorException":
            response = {
                ...(await deserializeAws_restJson1InternalServerErrorExceptionResponse(parsedOutput, context)),
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
        case "BadRequestException":
        case "com.amazonaws.guardduty#BadRequestException":
            response = {
                ...(await deserializeAws_restJson1BadRequestExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InternalServerErrorException":
        case "com.amazonaws.guardduty#InternalServerErrorException":
            response = {
                ...(await deserializeAws_restJson1InternalServerErrorExceptionResponse(parsedOutput, context)),
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
const deserializeAws_restJson1UpdateDetectorCommand = async (output, context) => {
    if (output.statusCode !== 200 && output.statusCode >= 300) {
        return deserializeAws_restJson1UpdateDetectorCommandError(output, context);
    }
    const contents = {
        $metadata: deserializeMetadata(output),
    };
    await collectBody(output.body, context);
    return Promise.resolve(contents);
};
exports.deserializeAws_restJson1UpdateDetectorCommand = deserializeAws_restJson1UpdateDetectorCommand;
const deserializeAws_restJson1UpdateDetectorCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "BadRequestException":
        case "com.amazonaws.guardduty#BadRequestException":
            response = {
                ...(await deserializeAws_restJson1BadRequestExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InternalServerErrorException":
        case "com.amazonaws.guardduty#InternalServerErrorException":
            response = {
                ...(await deserializeAws_restJson1InternalServerErrorExceptionResponse(parsedOutput, context)),
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
const deserializeAws_restJson1UpdateFilterCommand = async (output, context) => {
    if (output.statusCode !== 200 && output.statusCode >= 300) {
        return deserializeAws_restJson1UpdateFilterCommandError(output, context);
    }
    const contents = {
        $metadata: deserializeMetadata(output),
        Name: undefined,
    };
    const data = await parseBody(output.body, context);
    if (data.name !== undefined && data.name !== null) {
        contents.Name = data.name;
    }
    return Promise.resolve(contents);
};
exports.deserializeAws_restJson1UpdateFilterCommand = deserializeAws_restJson1UpdateFilterCommand;
const deserializeAws_restJson1UpdateFilterCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "BadRequestException":
        case "com.amazonaws.guardduty#BadRequestException":
            response = {
                ...(await deserializeAws_restJson1BadRequestExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InternalServerErrorException":
        case "com.amazonaws.guardduty#InternalServerErrorException":
            response = {
                ...(await deserializeAws_restJson1InternalServerErrorExceptionResponse(parsedOutput, context)),
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
const deserializeAws_restJson1UpdateFindingsFeedbackCommand = async (output, context) => {
    if (output.statusCode !== 200 && output.statusCode >= 300) {
        return deserializeAws_restJson1UpdateFindingsFeedbackCommandError(output, context);
    }
    const contents = {
        $metadata: deserializeMetadata(output),
    };
    await collectBody(output.body, context);
    return Promise.resolve(contents);
};
exports.deserializeAws_restJson1UpdateFindingsFeedbackCommand = deserializeAws_restJson1UpdateFindingsFeedbackCommand;
const deserializeAws_restJson1UpdateFindingsFeedbackCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "BadRequestException":
        case "com.amazonaws.guardduty#BadRequestException":
            response = {
                ...(await deserializeAws_restJson1BadRequestExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InternalServerErrorException":
        case "com.amazonaws.guardduty#InternalServerErrorException":
            response = {
                ...(await deserializeAws_restJson1InternalServerErrorExceptionResponse(parsedOutput, context)),
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
const deserializeAws_restJson1UpdateIPSetCommand = async (output, context) => {
    if (output.statusCode !== 200 && output.statusCode >= 300) {
        return deserializeAws_restJson1UpdateIPSetCommandError(output, context);
    }
    const contents = {
        $metadata: deserializeMetadata(output),
    };
    await collectBody(output.body, context);
    return Promise.resolve(contents);
};
exports.deserializeAws_restJson1UpdateIPSetCommand = deserializeAws_restJson1UpdateIPSetCommand;
const deserializeAws_restJson1UpdateIPSetCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "BadRequestException":
        case "com.amazonaws.guardduty#BadRequestException":
            response = {
                ...(await deserializeAws_restJson1BadRequestExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InternalServerErrorException":
        case "com.amazonaws.guardduty#InternalServerErrorException":
            response = {
                ...(await deserializeAws_restJson1InternalServerErrorExceptionResponse(parsedOutput, context)),
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
const deserializeAws_restJson1UpdateMemberDetectorsCommand = async (output, context) => {
    if (output.statusCode !== 200 && output.statusCode >= 300) {
        return deserializeAws_restJson1UpdateMemberDetectorsCommandError(output, context);
    }
    const contents = {
        $metadata: deserializeMetadata(output),
        UnprocessedAccounts: undefined,
    };
    const data = await parseBody(output.body, context);
    if (data.unprocessedAccounts !== undefined && data.unprocessedAccounts !== null) {
        contents.UnprocessedAccounts = deserializeAws_restJson1UnprocessedAccounts(data.unprocessedAccounts, context);
    }
    return Promise.resolve(contents);
};
exports.deserializeAws_restJson1UpdateMemberDetectorsCommand = deserializeAws_restJson1UpdateMemberDetectorsCommand;
const deserializeAws_restJson1UpdateMemberDetectorsCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "BadRequestException":
        case "com.amazonaws.guardduty#BadRequestException":
            response = {
                ...(await deserializeAws_restJson1BadRequestExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InternalServerErrorException":
        case "com.amazonaws.guardduty#InternalServerErrorException":
            response = {
                ...(await deserializeAws_restJson1InternalServerErrorExceptionResponse(parsedOutput, context)),
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
        case "BadRequestException":
        case "com.amazonaws.guardduty#BadRequestException":
            response = {
                ...(await deserializeAws_restJson1BadRequestExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InternalServerErrorException":
        case "com.amazonaws.guardduty#InternalServerErrorException":
            response = {
                ...(await deserializeAws_restJson1InternalServerErrorExceptionResponse(parsedOutput, context)),
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
const deserializeAws_restJson1UpdatePublishingDestinationCommand = async (output, context) => {
    if (output.statusCode !== 200 && output.statusCode >= 300) {
        return deserializeAws_restJson1UpdatePublishingDestinationCommandError(output, context);
    }
    const contents = {
        $metadata: deserializeMetadata(output),
    };
    await collectBody(output.body, context);
    return Promise.resolve(contents);
};
exports.deserializeAws_restJson1UpdatePublishingDestinationCommand = deserializeAws_restJson1UpdatePublishingDestinationCommand;
const deserializeAws_restJson1UpdatePublishingDestinationCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "BadRequestException":
        case "com.amazonaws.guardduty#BadRequestException":
            response = {
                ...(await deserializeAws_restJson1BadRequestExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InternalServerErrorException":
        case "com.amazonaws.guardduty#InternalServerErrorException":
            response = {
                ...(await deserializeAws_restJson1InternalServerErrorExceptionResponse(parsedOutput, context)),
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
const deserializeAws_restJson1UpdateThreatIntelSetCommand = async (output, context) => {
    if (output.statusCode !== 200 && output.statusCode >= 300) {
        return deserializeAws_restJson1UpdateThreatIntelSetCommandError(output, context);
    }
    const contents = {
        $metadata: deserializeMetadata(output),
    };
    await collectBody(output.body, context);
    return Promise.resolve(contents);
};
exports.deserializeAws_restJson1UpdateThreatIntelSetCommand = deserializeAws_restJson1UpdateThreatIntelSetCommand;
const deserializeAws_restJson1UpdateThreatIntelSetCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "BadRequestException":
        case "com.amazonaws.guardduty#BadRequestException":
            response = {
                ...(await deserializeAws_restJson1BadRequestExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InternalServerErrorException":
        case "com.amazonaws.guardduty#InternalServerErrorException":
            response = {
                ...(await deserializeAws_restJson1InternalServerErrorExceptionResponse(parsedOutput, context)),
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
const deserializeAws_restJson1BadRequestExceptionResponse = async (parsedOutput, context) => {
    const contents = {
        name: "BadRequestException",
        $fault: "client",
        $metadata: deserializeMetadata(parsedOutput),
        Message: undefined,
        Type: undefined,
    };
    const data = parsedOutput.body;
    if (data.message !== undefined && data.message !== null) {
        contents.Message = data.message;
    }
    if (data.__type !== undefined && data.__type !== null) {
        contents.Type = data.__type;
    }
    return contents;
};
const deserializeAws_restJson1InternalServerErrorExceptionResponse = async (parsedOutput, context) => {
    const contents = {
        name: "InternalServerErrorException",
        $fault: "server",
        $metadata: deserializeMetadata(parsedOutput),
        Message: undefined,
        Type: undefined,
    };
    const data = parsedOutput.body;
    if (data.message !== undefined && data.message !== null) {
        contents.Message = data.message;
    }
    if (data.__type !== undefined && data.__type !== null) {
        contents.Type = data.__type;
    }
    return contents;
};
const serializeAws_restJson1AccountDetail = (input, context) => {
    return {
        ...(input.AccountId !== undefined && input.AccountId !== null && { accountId: input.AccountId }),
        ...(input.Email !== undefined && input.Email !== null && { email: input.Email }),
    };
};
const serializeAws_restJson1AccountDetails = (input, context) => {
    return input
        .filter((e) => e != null)
        .map((entry) => {
        if (entry === null) {
            return null;
        }
        return serializeAws_restJson1AccountDetail(entry, context);
    });
};
const serializeAws_restJson1AccountIds = (input, context) => {
    return input
        .filter((e) => e != null)
        .map((entry) => {
        if (entry === null) {
            return null;
        }
        return entry;
    });
};
const serializeAws_restJson1Condition = (input, context) => {
    return {
        ...(input.Eq !== undefined && input.Eq !== null && { eq: serializeAws_restJson1Eq(input.Eq, context) }),
        ...(input.Equals !== undefined &&
            input.Equals !== null && { equals: serializeAws_restJson1Equals(input.Equals, context) }),
        ...(input.GreaterThan !== undefined && input.GreaterThan !== null && { greaterThan: input.GreaterThan }),
        ...(input.GreaterThanOrEqual !== undefined &&
            input.GreaterThanOrEqual !== null && { greaterThanOrEqual: input.GreaterThanOrEqual }),
        ...(input.Gt !== undefined && input.Gt !== null && { gt: input.Gt }),
        ...(input.Gte !== undefined && input.Gte !== null && { gte: input.Gte }),
        ...(input.LessThan !== undefined && input.LessThan !== null && { lessThan: input.LessThan }),
        ...(input.LessThanOrEqual !== undefined &&
            input.LessThanOrEqual !== null && { lessThanOrEqual: input.LessThanOrEqual }),
        ...(input.Lt !== undefined && input.Lt !== null && { lt: input.Lt }),
        ...(input.Lte !== undefined && input.Lte !== null && { lte: input.Lte }),
        ...(input.Neq !== undefined && input.Neq !== null && { neq: serializeAws_restJson1Neq(input.Neq, context) }),
        ...(input.NotEquals !== undefined &&
            input.NotEquals !== null && { notEquals: serializeAws_restJson1NotEquals(input.NotEquals, context) }),
    };
};
const serializeAws_restJson1Criterion = (input, context) => {
    return Object.entries(input).reduce((acc, [key, value]) => {
        if (value === null) {
            return acc;
        }
        return {
            ...acc,
            [key]: serializeAws_restJson1Condition(value, context),
        };
    }, {});
};
const serializeAws_restJson1DataSourceConfigurations = (input, context) => {
    return {
        ...(input.S3Logs !== undefined &&
            input.S3Logs !== null && { s3Logs: serializeAws_restJson1S3LogsConfiguration(input.S3Logs, context) }),
    };
};
const serializeAws_restJson1DataSourceList = (input, context) => {
    return input
        .filter((e) => e != null)
        .map((entry) => {
        if (entry === null) {
            return null;
        }
        return entry;
    });
};
const serializeAws_restJson1DestinationProperties = (input, context) => {
    return {
        ...(input.DestinationArn !== undefined &&
            input.DestinationArn !== null && { destinationArn: input.DestinationArn }),
        ...(input.KmsKeyArn !== undefined && input.KmsKeyArn !== null && { kmsKeyArn: input.KmsKeyArn }),
    };
};
const serializeAws_restJson1Eq = (input, context) => {
    return input
        .filter((e) => e != null)
        .map((entry) => {
        if (entry === null) {
            return null;
        }
        return entry;
    });
};
const serializeAws_restJson1Equals = (input, context) => {
    return input
        .filter((e) => e != null)
        .map((entry) => {
        if (entry === null) {
            return null;
        }
        return entry;
    });
};
const serializeAws_restJson1FindingCriteria = (input, context) => {
    return {
        ...(input.Criterion !== undefined &&
            input.Criterion !== null && { criterion: serializeAws_restJson1Criterion(input.Criterion, context) }),
    };
};
const serializeAws_restJson1FindingIds = (input, context) => {
    return input
        .filter((e) => e != null)
        .map((entry) => {
        if (entry === null) {
            return null;
        }
        return entry;
    });
};
const serializeAws_restJson1FindingStatisticTypes = (input, context) => {
    return input
        .filter((e) => e != null)
        .map((entry) => {
        if (entry === null) {
            return null;
        }
        return entry;
    });
};
const serializeAws_restJson1FindingTypes = (input, context) => {
    return input
        .filter((e) => e != null)
        .map((entry) => {
        if (entry === null) {
            return null;
        }
        return entry;
    });
};
const serializeAws_restJson1Neq = (input, context) => {
    return input
        .filter((e) => e != null)
        .map((entry) => {
        if (entry === null) {
            return null;
        }
        return entry;
    });
};
const serializeAws_restJson1NotEquals = (input, context) => {
    return input
        .filter((e) => e != null)
        .map((entry) => {
        if (entry === null) {
            return null;
        }
        return entry;
    });
};
const serializeAws_restJson1OrganizationDataSourceConfigurations = (input, context) => {
    return {
        ...(input.S3Logs !== undefined &&
            input.S3Logs !== null && {
            s3Logs: serializeAws_restJson1OrganizationS3LogsConfiguration(input.S3Logs, context),
        }),
    };
};
const serializeAws_restJson1OrganizationS3LogsConfiguration = (input, context) => {
    return {
        ...(input.AutoEnable !== undefined && input.AutoEnable !== null && { autoEnable: input.AutoEnable }),
    };
};
const serializeAws_restJson1ResourceList = (input, context) => {
    return input
        .filter((e) => e != null)
        .map((entry) => {
        if (entry === null) {
            return null;
        }
        return entry;
    });
};
const serializeAws_restJson1S3LogsConfiguration = (input, context) => {
    return {
        ...(input.Enable !== undefined && input.Enable !== null && { enable: input.Enable }),
    };
};
const serializeAws_restJson1SortCriteria = (input, context) => {
    return {
        ...(input.AttributeName !== undefined && input.AttributeName !== null && { attributeName: input.AttributeName }),
        ...(input.OrderBy !== undefined && input.OrderBy !== null && { orderBy: input.OrderBy }),
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
const serializeAws_restJson1UsageCriteria = (input, context) => {
    return {
        ...(input.AccountIds !== undefined &&
            input.AccountIds !== null && { accountIds: serializeAws_restJson1AccountIds(input.AccountIds, context) }),
        ...(input.DataSources !== undefined &&
            input.DataSources !== null && { dataSources: serializeAws_restJson1DataSourceList(input.DataSources, context) }),
        ...(input.Resources !== undefined &&
            input.Resources !== null && { resources: serializeAws_restJson1ResourceList(input.Resources, context) }),
    };
};
const deserializeAws_restJson1AccessControlList = (output, context) => {
    return {
        AllowsPublicReadAccess: output.allowsPublicReadAccess !== undefined && output.allowsPublicReadAccess !== null
            ? output.allowsPublicReadAccess
            : undefined,
        AllowsPublicWriteAccess: output.allowsPublicWriteAccess !== undefined && output.allowsPublicWriteAccess !== null
            ? output.allowsPublicWriteAccess
            : undefined,
    };
};
const deserializeAws_restJson1AccessKeyDetails = (output, context) => {
    return {
        AccessKeyId: output.accessKeyId !== undefined && output.accessKeyId !== null ? output.accessKeyId : undefined,
        PrincipalId: output.principalId !== undefined && output.principalId !== null ? output.principalId : undefined,
        UserName: output.userName !== undefined && output.userName !== null ? output.userName : undefined,
        UserType: output.userType !== undefined && output.userType !== null ? output.userType : undefined,
    };
};
const deserializeAws_restJson1AccountLevelPermissions = (output, context) => {
    return {
        BlockPublicAccess: output.blockPublicAccess !== undefined && output.blockPublicAccess !== null
            ? deserializeAws_restJson1BlockPublicAccess(output.blockPublicAccess, context)
            : undefined,
    };
};
const deserializeAws_restJson1Action = (output, context) => {
    return {
        ActionType: output.actionType !== undefined && output.actionType !== null ? output.actionType : undefined,
        AwsApiCallAction: output.awsApiCallAction !== undefined && output.awsApiCallAction !== null
            ? deserializeAws_restJson1AwsApiCallAction(output.awsApiCallAction, context)
            : undefined,
        DnsRequestAction: output.dnsRequestAction !== undefined && output.dnsRequestAction !== null
            ? deserializeAws_restJson1DnsRequestAction(output.dnsRequestAction, context)
            : undefined,
        NetworkConnectionAction: output.networkConnectionAction !== undefined && output.networkConnectionAction !== null
            ? deserializeAws_restJson1NetworkConnectionAction(output.networkConnectionAction, context)
            : undefined,
        PortProbeAction: output.portProbeAction !== undefined && output.portProbeAction !== null
            ? deserializeAws_restJson1PortProbeAction(output.portProbeAction, context)
            : undefined,
    };
};
const deserializeAws_restJson1AdminAccount = (output, context) => {
    return {
        AdminAccountId: output.adminAccountId !== undefined && output.adminAccountId !== null ? output.adminAccountId : undefined,
        AdminStatus: output.adminStatus !== undefined && output.adminStatus !== null ? output.adminStatus : undefined,
    };
};
const deserializeAws_restJson1AdminAccounts = (output, context) => {
    return (output || [])
        .filter((e) => e != null)
        .map((entry) => {
        if (entry === null) {
            return null;
        }
        return deserializeAws_restJson1AdminAccount(entry, context);
    });
};
const deserializeAws_restJson1AwsApiCallAction = (output, context) => {
    return {
        Api: output.api !== undefined && output.api !== null ? output.api : undefined,
        CallerType: output.callerType !== undefined && output.callerType !== null ? output.callerType : undefined,
        DomainDetails: output.domainDetails !== undefined && output.domainDetails !== null
            ? deserializeAws_restJson1DomainDetails(output.domainDetails, context)
            : undefined,
        ErrorCode: output.errorCode !== undefined && output.errorCode !== null ? output.errorCode : undefined,
        RemoteIpDetails: output.remoteIpDetails !== undefined && output.remoteIpDetails !== null
            ? deserializeAws_restJson1RemoteIpDetails(output.remoteIpDetails, context)
            : undefined,
        ServiceName: output.serviceName !== undefined && output.serviceName !== null ? output.serviceName : undefined,
    };
};
const deserializeAws_restJson1BlockPublicAccess = (output, context) => {
    return {
        BlockPublicAcls: output.blockPublicAcls !== undefined && output.blockPublicAcls !== null ? output.blockPublicAcls : undefined,
        BlockPublicPolicy: output.blockPublicPolicy !== undefined && output.blockPublicPolicy !== null
            ? output.blockPublicPolicy
            : undefined,
        IgnorePublicAcls: output.ignorePublicAcls !== undefined && output.ignorePublicAcls !== null ? output.ignorePublicAcls : undefined,
        RestrictPublicBuckets: output.restrictPublicBuckets !== undefined && output.restrictPublicBuckets !== null
            ? output.restrictPublicBuckets
            : undefined,
    };
};
const deserializeAws_restJson1BucketLevelPermissions = (output, context) => {
    return {
        AccessControlList: output.accessControlList !== undefined && output.accessControlList !== null
            ? deserializeAws_restJson1AccessControlList(output.accessControlList, context)
            : undefined,
        BlockPublicAccess: output.blockPublicAccess !== undefined && output.blockPublicAccess !== null
            ? deserializeAws_restJson1BlockPublicAccess(output.blockPublicAccess, context)
            : undefined,
        BucketPolicy: output.bucketPolicy !== undefined && output.bucketPolicy !== null
            ? deserializeAws_restJson1BucketPolicy(output.bucketPolicy, context)
            : undefined,
    };
};
const deserializeAws_restJson1BucketPolicy = (output, context) => {
    return {
        AllowsPublicReadAccess: output.allowsPublicReadAccess !== undefined && output.allowsPublicReadAccess !== null
            ? output.allowsPublicReadAccess
            : undefined,
        AllowsPublicWriteAccess: output.allowsPublicWriteAccess !== undefined && output.allowsPublicWriteAccess !== null
            ? output.allowsPublicWriteAccess
            : undefined,
    };
};
const deserializeAws_restJson1City = (output, context) => {
    return {
        CityName: output.cityName !== undefined && output.cityName !== null ? output.cityName : undefined,
    };
};
const deserializeAws_restJson1CloudTrailConfigurationResult = (output, context) => {
    return {
        Status: output.status !== undefined && output.status !== null ? output.status : undefined,
    };
};
const deserializeAws_restJson1Condition = (output, context) => {
    return {
        Eq: output.eq !== undefined && output.eq !== null ? deserializeAws_restJson1Eq(output.eq, context) : undefined,
        Equals: output.equals !== undefined && output.equals !== null
            ? deserializeAws_restJson1Equals(output.equals, context)
            : undefined,
        GreaterThan: output.greaterThan !== undefined && output.greaterThan !== null ? output.greaterThan : undefined,
        GreaterThanOrEqual: output.greaterThanOrEqual !== undefined && output.greaterThanOrEqual !== null
            ? output.greaterThanOrEqual
            : undefined,
        Gt: output.gt !== undefined && output.gt !== null ? output.gt : undefined,
        Gte: output.gte !== undefined && output.gte !== null ? output.gte : undefined,
        LessThan: output.lessThan !== undefined && output.lessThan !== null ? output.lessThan : undefined,
        LessThanOrEqual: output.lessThanOrEqual !== undefined && output.lessThanOrEqual !== null ? output.lessThanOrEqual : undefined,
        Lt: output.lt !== undefined && output.lt !== null ? output.lt : undefined,
        Lte: output.lte !== undefined && output.lte !== null ? output.lte : undefined,
        Neq: output.neq !== undefined && output.neq !== null ? deserializeAws_restJson1Neq(output.neq, context) : undefined,
        NotEquals: output.notEquals !== undefined && output.notEquals !== null
            ? deserializeAws_restJson1NotEquals(output.notEquals, context)
            : undefined,
    };
};
const deserializeAws_restJson1CountBySeverity = (output, context) => {
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
const deserializeAws_restJson1Country = (output, context) => {
    return {
        CountryCode: output.countryCode !== undefined && output.countryCode !== null ? output.countryCode : undefined,
        CountryName: output.countryName !== undefined && output.countryName !== null ? output.countryName : undefined,
    };
};
const deserializeAws_restJson1Criterion = (output, context) => {
    return Object.entries(output).reduce((acc, [key, value]) => {
        if (value === null) {
            return acc;
        }
        return {
            ...acc,
            [key]: deserializeAws_restJson1Condition(value, context),
        };
    }, {});
};
const deserializeAws_restJson1DataSourceConfigurationsResult = (output, context) => {
    return {
        CloudTrail: output.cloudTrail !== undefined && output.cloudTrail !== null
            ? deserializeAws_restJson1CloudTrailConfigurationResult(output.cloudTrail, context)
            : undefined,
        DNSLogs: output.dnsLogs !== undefined && output.dnsLogs !== null
            ? deserializeAws_restJson1DNSLogsConfigurationResult(output.dnsLogs, context)
            : undefined,
        FlowLogs: output.flowLogs !== undefined && output.flowLogs !== null
            ? deserializeAws_restJson1FlowLogsConfigurationResult(output.flowLogs, context)
            : undefined,
        S3Logs: output.s3Logs !== undefined && output.s3Logs !== null
            ? deserializeAws_restJson1S3LogsConfigurationResult(output.s3Logs, context)
            : undefined,
    };
};
const deserializeAws_restJson1DefaultServerSideEncryption = (output, context) => {
    return {
        EncryptionType: output.encryptionType !== undefined && output.encryptionType !== null ? output.encryptionType : undefined,
        KmsMasterKeyArn: output.kmsMasterKeyArn !== undefined && output.kmsMasterKeyArn !== null ? output.kmsMasterKeyArn : undefined,
    };
};
const deserializeAws_restJson1Destination = (output, context) => {
    return {
        DestinationId: output.destinationId !== undefined && output.destinationId !== null ? output.destinationId : undefined,
        DestinationType: output.destinationType !== undefined && output.destinationType !== null ? output.destinationType : undefined,
        Status: output.status !== undefined && output.status !== null ? output.status : undefined,
    };
};
const deserializeAws_restJson1DestinationProperties = (output, context) => {
    return {
        DestinationArn: output.destinationArn !== undefined && output.destinationArn !== null ? output.destinationArn : undefined,
        KmsKeyArn: output.kmsKeyArn !== undefined && output.kmsKeyArn !== null ? output.kmsKeyArn : undefined,
    };
};
const deserializeAws_restJson1Destinations = (output, context) => {
    return (output || [])
        .filter((e) => e != null)
        .map((entry) => {
        if (entry === null) {
            return null;
        }
        return deserializeAws_restJson1Destination(entry, context);
    });
};
const deserializeAws_restJson1DetectorIds = (output, context) => {
    return (output || [])
        .filter((e) => e != null)
        .map((entry) => {
        if (entry === null) {
            return null;
        }
        return entry;
    });
};
const deserializeAws_restJson1DNSLogsConfigurationResult = (output, context) => {
    return {
        Status: output.status !== undefined && output.status !== null ? output.status : undefined,
    };
};
const deserializeAws_restJson1DnsRequestAction = (output, context) => {
    return {
        Domain: output.domain !== undefined && output.domain !== null ? output.domain : undefined,
    };
};
const deserializeAws_restJson1DomainDetails = (output, context) => {
    return {
        Domain: output.domain !== undefined && output.domain !== null ? output.domain : undefined,
    };
};
const deserializeAws_restJson1Eq = (output, context) => {
    return (output || [])
        .filter((e) => e != null)
        .map((entry) => {
        if (entry === null) {
            return null;
        }
        return entry;
    });
};
const deserializeAws_restJson1Equals = (output, context) => {
    return (output || [])
        .filter((e) => e != null)
        .map((entry) => {
        if (entry === null) {
            return null;
        }
        return entry;
    });
};
const deserializeAws_restJson1Evidence = (output, context) => {
    return {
        ThreatIntelligenceDetails: output.threatIntelligenceDetails !== undefined && output.threatIntelligenceDetails !== null
            ? deserializeAws_restJson1ThreatIntelligenceDetails(output.threatIntelligenceDetails, context)
            : undefined,
    };
};
const deserializeAws_restJson1FilterNames = (output, context) => {
    return (output || [])
        .filter((e) => e != null)
        .map((entry) => {
        if (entry === null) {
            return null;
        }
        return entry;
    });
};
const deserializeAws_restJson1Finding = (output, context) => {
    return {
        AccountId: output.accountId !== undefined && output.accountId !== null ? output.accountId : undefined,
        Arn: output.arn !== undefined && output.arn !== null ? output.arn : undefined,
        Confidence: output.confidence !== undefined && output.confidence !== null ? output.confidence : undefined,
        CreatedAt: output.createdAt !== undefined && output.createdAt !== null ? output.createdAt : undefined,
        Description: output.description !== undefined && output.description !== null ? output.description : undefined,
        Id: output.id !== undefined && output.id !== null ? output.id : undefined,
        Partition: output.partition !== undefined && output.partition !== null ? output.partition : undefined,
        Region: output.region !== undefined && output.region !== null ? output.region : undefined,
        Resource: output.resource !== undefined && output.resource !== null
            ? deserializeAws_restJson1Resource(output.resource, context)
            : undefined,
        SchemaVersion: output.schemaVersion !== undefined && output.schemaVersion !== null ? output.schemaVersion : undefined,
        Service: output.service !== undefined && output.service !== null
            ? deserializeAws_restJson1Service(output.service, context)
            : undefined,
        Severity: output.severity !== undefined && output.severity !== null ? output.severity : undefined,
        Title: output.title !== undefined && output.title !== null ? output.title : undefined,
        Type: output.type !== undefined && output.type !== null ? output.type : undefined,
        UpdatedAt: output.updatedAt !== undefined && output.updatedAt !== null ? output.updatedAt : undefined,
    };
};
const deserializeAws_restJson1FindingCriteria = (output, context) => {
    return {
        Criterion: output.criterion !== undefined && output.criterion !== null
            ? deserializeAws_restJson1Criterion(output.criterion, context)
            : undefined,
    };
};
const deserializeAws_restJson1FindingIds = (output, context) => {
    return (output || [])
        .filter((e) => e != null)
        .map((entry) => {
        if (entry === null) {
            return null;
        }
        return entry;
    });
};
const deserializeAws_restJson1Findings = (output, context) => {
    return (output || [])
        .filter((e) => e != null)
        .map((entry) => {
        if (entry === null) {
            return null;
        }
        return deserializeAws_restJson1Finding(entry, context);
    });
};
const deserializeAws_restJson1FindingStatistics = (output, context) => {
    return {
        CountBySeverity: output.countBySeverity !== undefined && output.countBySeverity !== null
            ? deserializeAws_restJson1CountBySeverity(output.countBySeverity, context)
            : undefined,
    };
};
const deserializeAws_restJson1FlowLogsConfigurationResult = (output, context) => {
    return {
        Status: output.status !== undefined && output.status !== null ? output.status : undefined,
    };
};
const deserializeAws_restJson1GeoLocation = (output, context) => {
    return {
        Lat: output.lat !== undefined && output.lat !== null ? output.lat : undefined,
        Lon: output.lon !== undefined && output.lon !== null ? output.lon : undefined,
    };
};
const deserializeAws_restJson1IamInstanceProfile = (output, context) => {
    return {
        Arn: output.arn !== undefined && output.arn !== null ? output.arn : undefined,
        Id: output.id !== undefined && output.id !== null ? output.id : undefined,
    };
};
const deserializeAws_restJson1InstanceDetails = (output, context) => {
    return {
        AvailabilityZone: output.availabilityZone !== undefined && output.availabilityZone !== null ? output.availabilityZone : undefined,
        IamInstanceProfile: output.iamInstanceProfile !== undefined && output.iamInstanceProfile !== null
            ? deserializeAws_restJson1IamInstanceProfile(output.iamInstanceProfile, context)
            : undefined,
        ImageDescription: output.imageDescription !== undefined && output.imageDescription !== null ? output.imageDescription : undefined,
        ImageId: output.imageId !== undefined && output.imageId !== null ? output.imageId : undefined,
        InstanceId: output.instanceId !== undefined && output.instanceId !== null ? output.instanceId : undefined,
        InstanceState: output.instanceState !== undefined && output.instanceState !== null ? output.instanceState : undefined,
        InstanceType: output.instanceType !== undefined && output.instanceType !== null ? output.instanceType : undefined,
        LaunchTime: output.launchTime !== undefined && output.launchTime !== null ? output.launchTime : undefined,
        NetworkInterfaces: output.networkInterfaces !== undefined && output.networkInterfaces !== null
            ? deserializeAws_restJson1NetworkInterfaces(output.networkInterfaces, context)
            : undefined,
        OutpostArn: output.outpostArn !== undefined && output.outpostArn !== null ? output.outpostArn : undefined,
        Platform: output.platform !== undefined && output.platform !== null ? output.platform : undefined,
        ProductCodes: output.productCodes !== undefined && output.productCodes !== null
            ? deserializeAws_restJson1ProductCodes(output.productCodes, context)
            : undefined,
        Tags: output.tags !== undefined && output.tags !== null
            ? deserializeAws_restJson1Tags(output.tags, context)
            : undefined,
    };
};
const deserializeAws_restJson1Invitation = (output, context) => {
    return {
        AccountId: output.accountId !== undefined && output.accountId !== null ? output.accountId : undefined,
        InvitationId: output.invitationId !== undefined && output.invitationId !== null ? output.invitationId : undefined,
        InvitedAt: output.invitedAt !== undefined && output.invitedAt !== null ? output.invitedAt : undefined,
        RelationshipStatus: output.relationshipStatus !== undefined && output.relationshipStatus !== null
            ? output.relationshipStatus
            : undefined,
    };
};
const deserializeAws_restJson1Invitations = (output, context) => {
    return (output || [])
        .filter((e) => e != null)
        .map((entry) => {
        if (entry === null) {
            return null;
        }
        return deserializeAws_restJson1Invitation(entry, context);
    });
};
const deserializeAws_restJson1IpSetIds = (output, context) => {
    return (output || [])
        .filter((e) => e != null)
        .map((entry) => {
        if (entry === null) {
            return null;
        }
        return entry;
    });
};
const deserializeAws_restJson1Ipv6Addresses = (output, context) => {
    return (output || [])
        .filter((e) => e != null)
        .map((entry) => {
        if (entry === null) {
            return null;
        }
        return entry;
    });
};
const deserializeAws_restJson1LocalIpDetails = (output, context) => {
    return {
        IpAddressV4: output.ipAddressV4 !== undefined && output.ipAddressV4 !== null ? output.ipAddressV4 : undefined,
    };
};
const deserializeAws_restJson1LocalPortDetails = (output, context) => {
    return {
        Port: output.port !== undefined && output.port !== null ? output.port : undefined,
        PortName: output.portName !== undefined && output.portName !== null ? output.portName : undefined,
    };
};
const deserializeAws_restJson1Master = (output, context) => {
    return {
        AccountId: output.accountId !== undefined && output.accountId !== null ? output.accountId : undefined,
        InvitationId: output.invitationId !== undefined && output.invitationId !== null ? output.invitationId : undefined,
        InvitedAt: output.invitedAt !== undefined && output.invitedAt !== null ? output.invitedAt : undefined,
        RelationshipStatus: output.relationshipStatus !== undefined && output.relationshipStatus !== null
            ? output.relationshipStatus
            : undefined,
    };
};
const deserializeAws_restJson1Member = (output, context) => {
    return {
        AccountId: output.accountId !== undefined && output.accountId !== null ? output.accountId : undefined,
        DetectorId: output.detectorId !== undefined && output.detectorId !== null ? output.detectorId : undefined,
        Email: output.email !== undefined && output.email !== null ? output.email : undefined,
        InvitedAt: output.invitedAt !== undefined && output.invitedAt !== null ? output.invitedAt : undefined,
        MasterId: output.masterId !== undefined && output.masterId !== null ? output.masterId : undefined,
        RelationshipStatus: output.relationshipStatus !== undefined && output.relationshipStatus !== null
            ? output.relationshipStatus
            : undefined,
        UpdatedAt: output.updatedAt !== undefined && output.updatedAt !== null ? output.updatedAt : undefined,
    };
};
const deserializeAws_restJson1MemberDataSourceConfiguration = (output, context) => {
    return {
        AccountId: output.accountId !== undefined && output.accountId !== null ? output.accountId : undefined,
        DataSources: output.dataSources !== undefined && output.dataSources !== null
            ? deserializeAws_restJson1DataSourceConfigurationsResult(output.dataSources, context)
            : undefined,
    };
};
const deserializeAws_restJson1MemberDataSourceConfigurations = (output, context) => {
    return (output || [])
        .filter((e) => e != null)
        .map((entry) => {
        if (entry === null) {
            return null;
        }
        return deserializeAws_restJson1MemberDataSourceConfiguration(entry, context);
    });
};
const deserializeAws_restJson1Members = (output, context) => {
    return (output || [])
        .filter((e) => e != null)
        .map((entry) => {
        if (entry === null) {
            return null;
        }
        return deserializeAws_restJson1Member(entry, context);
    });
};
const deserializeAws_restJson1Neq = (output, context) => {
    return (output || [])
        .filter((e) => e != null)
        .map((entry) => {
        if (entry === null) {
            return null;
        }
        return entry;
    });
};
const deserializeAws_restJson1NetworkConnectionAction = (output, context) => {
    return {
        Blocked: output.blocked !== undefined && output.blocked !== null ? output.blocked : undefined,
        ConnectionDirection: output.connectionDirection !== undefined && output.connectionDirection !== null
            ? output.connectionDirection
            : undefined,
        LocalIpDetails: output.localIpDetails !== undefined && output.localIpDetails !== null
            ? deserializeAws_restJson1LocalIpDetails(output.localIpDetails, context)
            : undefined,
        LocalPortDetails: output.localPortDetails !== undefined && output.localPortDetails !== null
            ? deserializeAws_restJson1LocalPortDetails(output.localPortDetails, context)
            : undefined,
        Protocol: output.protocol !== undefined && output.protocol !== null ? output.protocol : undefined,
        RemoteIpDetails: output.remoteIpDetails !== undefined && output.remoteIpDetails !== null
            ? deserializeAws_restJson1RemoteIpDetails(output.remoteIpDetails, context)
            : undefined,
        RemotePortDetails: output.remotePortDetails !== undefined && output.remotePortDetails !== null
            ? deserializeAws_restJson1RemotePortDetails(output.remotePortDetails, context)
            : undefined,
    };
};
const deserializeAws_restJson1NetworkInterface = (output, context) => {
    return {
        Ipv6Addresses: output.ipv6Addresses !== undefined && output.ipv6Addresses !== null
            ? deserializeAws_restJson1Ipv6Addresses(output.ipv6Addresses, context)
            : undefined,
        NetworkInterfaceId: output.networkInterfaceId !== undefined && output.networkInterfaceId !== null
            ? output.networkInterfaceId
            : undefined,
        PrivateDnsName: output.privateDnsName !== undefined && output.privateDnsName !== null ? output.privateDnsName : undefined,
        PrivateIpAddress: output.privateIpAddress !== undefined && output.privateIpAddress !== null ? output.privateIpAddress : undefined,
        PrivateIpAddresses: output.privateIpAddresses !== undefined && output.privateIpAddresses !== null
            ? deserializeAws_restJson1PrivateIpAddresses(output.privateIpAddresses, context)
            : undefined,
        PublicDnsName: output.publicDnsName !== undefined && output.publicDnsName !== null ? output.publicDnsName : undefined,
        PublicIp: output.publicIp !== undefined && output.publicIp !== null ? output.publicIp : undefined,
        SecurityGroups: output.securityGroups !== undefined && output.securityGroups !== null
            ? deserializeAws_restJson1SecurityGroups(output.securityGroups, context)
            : undefined,
        SubnetId: output.subnetId !== undefined && output.subnetId !== null ? output.subnetId : undefined,
        VpcId: output.vpcId !== undefined && output.vpcId !== null ? output.vpcId : undefined,
    };
};
const deserializeAws_restJson1NetworkInterfaces = (output, context) => {
    return (output || [])
        .filter((e) => e != null)
        .map((entry) => {
        if (entry === null) {
            return null;
        }
        return deserializeAws_restJson1NetworkInterface(entry, context);
    });
};
const deserializeAws_restJson1NotEquals = (output, context) => {
    return (output || [])
        .filter((e) => e != null)
        .map((entry) => {
        if (entry === null) {
            return null;
        }
        return entry;
    });
};
const deserializeAws_restJson1Organization = (output, context) => {
    return {
        Asn: output.asn !== undefined && output.asn !== null ? output.asn : undefined,
        AsnOrg: output.asnOrg !== undefined && output.asnOrg !== null ? output.asnOrg : undefined,
        Isp: output.isp !== undefined && output.isp !== null ? output.isp : undefined,
        Org: output.org !== undefined && output.org !== null ? output.org : undefined,
    };
};
const deserializeAws_restJson1OrganizationDataSourceConfigurationsResult = (output, context) => {
    return {
        S3Logs: output.s3Logs !== undefined && output.s3Logs !== null
            ? deserializeAws_restJson1OrganizationS3LogsConfigurationResult(output.s3Logs, context)
            : undefined,
    };
};
const deserializeAws_restJson1OrganizationS3LogsConfigurationResult = (output, context) => {
    return {
        AutoEnable: output.autoEnable !== undefined && output.autoEnable !== null ? output.autoEnable : undefined,
    };
};
const deserializeAws_restJson1Owner = (output, context) => {
    return {
        Id: output.id !== undefined && output.id !== null ? output.id : undefined,
    };
};
const deserializeAws_restJson1PermissionConfiguration = (output, context) => {
    return {
        AccountLevelPermissions: output.accountLevelPermissions !== undefined && output.accountLevelPermissions !== null
            ? deserializeAws_restJson1AccountLevelPermissions(output.accountLevelPermissions, context)
            : undefined,
        BucketLevelPermissions: output.bucketLevelPermissions !== undefined && output.bucketLevelPermissions !== null
            ? deserializeAws_restJson1BucketLevelPermissions(output.bucketLevelPermissions, context)
            : undefined,
    };
};
const deserializeAws_restJson1PortProbeAction = (output, context) => {
    return {
        Blocked: output.blocked !== undefined && output.blocked !== null ? output.blocked : undefined,
        PortProbeDetails: output.portProbeDetails !== undefined && output.portProbeDetails !== null
            ? deserializeAws_restJson1PortProbeDetails(output.portProbeDetails, context)
            : undefined,
    };
};
const deserializeAws_restJson1PortProbeDetail = (output, context) => {
    return {
        LocalIpDetails: output.localIpDetails !== undefined && output.localIpDetails !== null
            ? deserializeAws_restJson1LocalIpDetails(output.localIpDetails, context)
            : undefined,
        LocalPortDetails: output.localPortDetails !== undefined && output.localPortDetails !== null
            ? deserializeAws_restJson1LocalPortDetails(output.localPortDetails, context)
            : undefined,
        RemoteIpDetails: output.remoteIpDetails !== undefined && output.remoteIpDetails !== null
            ? deserializeAws_restJson1RemoteIpDetails(output.remoteIpDetails, context)
            : undefined,
    };
};
const deserializeAws_restJson1PortProbeDetails = (output, context) => {
    return (output || [])
        .filter((e) => e != null)
        .map((entry) => {
        if (entry === null) {
            return null;
        }
        return deserializeAws_restJson1PortProbeDetail(entry, context);
    });
};
const deserializeAws_restJson1PrivateIpAddressDetails = (output, context) => {
    return {
        PrivateDnsName: output.privateDnsName !== undefined && output.privateDnsName !== null ? output.privateDnsName : undefined,
        PrivateIpAddress: output.privateIpAddress !== undefined && output.privateIpAddress !== null ? output.privateIpAddress : undefined,
    };
};
const deserializeAws_restJson1PrivateIpAddresses = (output, context) => {
    return (output || [])
        .filter((e) => e != null)
        .map((entry) => {
        if (entry === null) {
            return null;
        }
        return deserializeAws_restJson1PrivateIpAddressDetails(entry, context);
    });
};
const deserializeAws_restJson1ProductCode = (output, context) => {
    return {
        Code: output.code !== undefined && output.code !== null ? output.code : undefined,
        ProductType: output.productType !== undefined && output.productType !== null ? output.productType : undefined,
    };
};
const deserializeAws_restJson1ProductCodes = (output, context) => {
    return (output || [])
        .filter((e) => e != null)
        .map((entry) => {
        if (entry === null) {
            return null;
        }
        return deserializeAws_restJson1ProductCode(entry, context);
    });
};
const deserializeAws_restJson1PublicAccess = (output, context) => {
    return {
        EffectivePermission: output.effectivePermission !== undefined && output.effectivePermission !== null
            ? output.effectivePermission
            : undefined,
        PermissionConfiguration: output.permissionConfiguration !== undefined && output.permissionConfiguration !== null
            ? deserializeAws_restJson1PermissionConfiguration(output.permissionConfiguration, context)
            : undefined,
    };
};
const deserializeAws_restJson1RemoteIpDetails = (output, context) => {
    return {
        City: output.city !== undefined && output.city !== null
            ? deserializeAws_restJson1City(output.city, context)
            : undefined,
        Country: output.country !== undefined && output.country !== null
            ? deserializeAws_restJson1Country(output.country, context)
            : undefined,
        GeoLocation: output.geoLocation !== undefined && output.geoLocation !== null
            ? deserializeAws_restJson1GeoLocation(output.geoLocation, context)
            : undefined,
        IpAddressV4: output.ipAddressV4 !== undefined && output.ipAddressV4 !== null ? output.ipAddressV4 : undefined,
        Organization: output.organization !== undefined && output.organization !== null
            ? deserializeAws_restJson1Organization(output.organization, context)
            : undefined,
    };
};
const deserializeAws_restJson1RemotePortDetails = (output, context) => {
    return {
        Port: output.port !== undefined && output.port !== null ? output.port : undefined,
        PortName: output.portName !== undefined && output.portName !== null ? output.portName : undefined,
    };
};
const deserializeAws_restJson1Resource = (output, context) => {
    return {
        AccessKeyDetails: output.accessKeyDetails !== undefined && output.accessKeyDetails !== null
            ? deserializeAws_restJson1AccessKeyDetails(output.accessKeyDetails, context)
            : undefined,
        InstanceDetails: output.instanceDetails !== undefined && output.instanceDetails !== null
            ? deserializeAws_restJson1InstanceDetails(output.instanceDetails, context)
            : undefined,
        ResourceType: output.resourceType !== undefined && output.resourceType !== null ? output.resourceType : undefined,
        S3BucketDetails: output.s3BucketDetails !== undefined && output.s3BucketDetails !== null
            ? deserializeAws_restJson1S3BucketDetails(output.s3BucketDetails, context)
            : undefined,
    };
};
const deserializeAws_restJson1S3BucketDetail = (output, context) => {
    return {
        Arn: output.arn !== undefined && output.arn !== null ? output.arn : undefined,
        CreatedAt: output.createdAt !== undefined && output.createdAt !== null
            ? new Date(Math.round(output.createdAt * 1000))
            : undefined,
        DefaultServerSideEncryption: output.defaultServerSideEncryption !== undefined && output.defaultServerSideEncryption !== null
            ? deserializeAws_restJson1DefaultServerSideEncryption(output.defaultServerSideEncryption, context)
            : undefined,
        Name: output.name !== undefined && output.name !== null ? output.name : undefined,
        Owner: output.owner !== undefined && output.owner !== null
            ? deserializeAws_restJson1Owner(output.owner, context)
            : undefined,
        PublicAccess: output.publicAccess !== undefined && output.publicAccess !== null
            ? deserializeAws_restJson1PublicAccess(output.publicAccess, context)
            : undefined,
        Tags: output.tags !== undefined && output.tags !== null
            ? deserializeAws_restJson1Tags(output.tags, context)
            : undefined,
        Type: output.type !== undefined && output.type !== null ? output.type : undefined,
    };
};
const deserializeAws_restJson1S3BucketDetails = (output, context) => {
    return (output || [])
        .filter((e) => e != null)
        .map((entry) => {
        if (entry === null) {
            return null;
        }
        return deserializeAws_restJson1S3BucketDetail(entry, context);
    });
};
const deserializeAws_restJson1S3LogsConfigurationResult = (output, context) => {
    return {
        Status: output.status !== undefined && output.status !== null ? output.status : undefined,
    };
};
const deserializeAws_restJson1SecurityGroup = (output, context) => {
    return {
        GroupId: output.groupId !== undefined && output.groupId !== null ? output.groupId : undefined,
        GroupName: output.groupName !== undefined && output.groupName !== null ? output.groupName : undefined,
    };
};
const deserializeAws_restJson1SecurityGroups = (output, context) => {
    return (output || [])
        .filter((e) => e != null)
        .map((entry) => {
        if (entry === null) {
            return null;
        }
        return deserializeAws_restJson1SecurityGroup(entry, context);
    });
};
const deserializeAws_restJson1Service = (output, context) => {
    return {
        Action: output.action !== undefined && output.action !== null
            ? deserializeAws_restJson1Action(output.action, context)
            : undefined,
        Archived: output.archived !== undefined && output.archived !== null ? output.archived : undefined,
        Count: output.count !== undefined && output.count !== null ? output.count : undefined,
        DetectorId: output.detectorId !== undefined && output.detectorId !== null ? output.detectorId : undefined,
        EventFirstSeen: output.eventFirstSeen !== undefined && output.eventFirstSeen !== null ? output.eventFirstSeen : undefined,
        EventLastSeen: output.eventLastSeen !== undefined && output.eventLastSeen !== null ? output.eventLastSeen : undefined,
        Evidence: output.evidence !== undefined && output.evidence !== null
            ? deserializeAws_restJson1Evidence(output.evidence, context)
            : undefined,
        ResourceRole: output.resourceRole !== undefined && output.resourceRole !== null ? output.resourceRole : undefined,
        ServiceName: output.serviceName !== undefined && output.serviceName !== null ? output.serviceName : undefined,
        UserFeedback: output.userFeedback !== undefined && output.userFeedback !== null ? output.userFeedback : undefined,
    };
};
const deserializeAws_restJson1Tag = (output, context) => {
    return {
        Key: output.key !== undefined && output.key !== null ? output.key : undefined,
        Value: output.value !== undefined && output.value !== null ? output.value : undefined,
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
const deserializeAws_restJson1Tags = (output, context) => {
    return (output || [])
        .filter((e) => e != null)
        .map((entry) => {
        if (entry === null) {
            return null;
        }
        return deserializeAws_restJson1Tag(entry, context);
    });
};
const deserializeAws_restJson1ThreatIntelligenceDetail = (output, context) => {
    return {
        ThreatListName: output.threatListName !== undefined && output.threatListName !== null ? output.threatListName : undefined,
        ThreatNames: output.threatNames !== undefined && output.threatNames !== null
            ? deserializeAws_restJson1ThreatNames(output.threatNames, context)
            : undefined,
    };
};
const deserializeAws_restJson1ThreatIntelligenceDetails = (output, context) => {
    return (output || [])
        .filter((e) => e != null)
        .map((entry) => {
        if (entry === null) {
            return null;
        }
        return deserializeAws_restJson1ThreatIntelligenceDetail(entry, context);
    });
};
const deserializeAws_restJson1ThreatIntelSetIds = (output, context) => {
    return (output || [])
        .filter((e) => e != null)
        .map((entry) => {
        if (entry === null) {
            return null;
        }
        return entry;
    });
};
const deserializeAws_restJson1ThreatNames = (output, context) => {
    return (output || [])
        .filter((e) => e != null)
        .map((entry) => {
        if (entry === null) {
            return null;
        }
        return entry;
    });
};
const deserializeAws_restJson1Total = (output, context) => {
    return {
        Amount: output.amount !== undefined && output.amount !== null ? output.amount : undefined,
        Unit: output.unit !== undefined && output.unit !== null ? output.unit : undefined,
    };
};
const deserializeAws_restJson1UnprocessedAccount = (output, context) => {
    return {
        AccountId: output.accountId !== undefined && output.accountId !== null ? output.accountId : undefined,
        Result: output.result !== undefined && output.result !== null ? output.result : undefined,
    };
};
const deserializeAws_restJson1UnprocessedAccounts = (output, context) => {
    return (output || [])
        .filter((e) => e != null)
        .map((entry) => {
        if (entry === null) {
            return null;
        }
        return deserializeAws_restJson1UnprocessedAccount(entry, context);
    });
};
const deserializeAws_restJson1UsageAccountResult = (output, context) => {
    return {
        AccountId: output.accountId !== undefined && output.accountId !== null ? output.accountId : undefined,
        Total: output.total !== undefined && output.total !== null
            ? deserializeAws_restJson1Total(output.total, context)
            : undefined,
    };
};
const deserializeAws_restJson1UsageAccountResultList = (output, context) => {
    return (output || [])
        .filter((e) => e != null)
        .map((entry) => {
        if (entry === null) {
            return null;
        }
        return deserializeAws_restJson1UsageAccountResult(entry, context);
    });
};
const deserializeAws_restJson1UsageDataSourceResult = (output, context) => {
    return {
        DataSource: output.dataSource !== undefined && output.dataSource !== null ? output.dataSource : undefined,
        Total: output.total !== undefined && output.total !== null
            ? deserializeAws_restJson1Total(output.total, context)
            : undefined,
    };
};
const deserializeAws_restJson1UsageDataSourceResultList = (output, context) => {
    return (output || [])
        .filter((e) => e != null)
        .map((entry) => {
        if (entry === null) {
            return null;
        }
        return deserializeAws_restJson1UsageDataSourceResult(entry, context);
    });
};
const deserializeAws_restJson1UsageResourceResult = (output, context) => {
    return {
        Resource: output.resource !== undefined && output.resource !== null ? output.resource : undefined,
        Total: output.total !== undefined && output.total !== null
            ? deserializeAws_restJson1Total(output.total, context)
            : undefined,
    };
};
const deserializeAws_restJson1UsageResourceResultList = (output, context) => {
    return (output || [])
        .filter((e) => e != null)
        .map((entry) => {
        if (entry === null) {
            return null;
        }
        return deserializeAws_restJson1UsageResourceResult(entry, context);
    });
};
const deserializeAws_restJson1UsageStatistics = (output, context) => {
    return {
        SumByAccount: output.sumByAccount !== undefined && output.sumByAccount !== null
            ? deserializeAws_restJson1UsageAccountResultList(output.sumByAccount, context)
            : undefined,
        SumByDataSource: output.sumByDataSource !== undefined && output.sumByDataSource !== null
            ? deserializeAws_restJson1UsageDataSourceResultList(output.sumByDataSource, context)
            : undefined,
        SumByResource: output.sumByResource !== undefined && output.sumByResource !== null
            ? deserializeAws_restJson1UsageResourceResultList(output.sumByResource, context)
            : undefined,
        TopResources: output.topResources !== undefined && output.topResources !== null
            ? deserializeAws_restJson1UsageResourceResultList(output.topResources, context)
            : undefined,
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