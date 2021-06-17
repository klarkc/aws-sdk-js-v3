"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.deserializeAws_restJson1ListNotificationsCommand = exports.deserializeAws_restJson1ListMilestonesCommand = exports.deserializeAws_restJson1ListLensReviewsCommand = exports.deserializeAws_restJson1ListLensReviewImprovementsCommand = exports.deserializeAws_restJson1ListLensesCommand = exports.deserializeAws_restJson1ListAnswersCommand = exports.deserializeAws_restJson1GetWorkloadCommand = exports.deserializeAws_restJson1GetMilestoneCommand = exports.deserializeAws_restJson1GetLensVersionDifferenceCommand = exports.deserializeAws_restJson1GetLensReviewReportCommand = exports.deserializeAws_restJson1GetLensReviewCommand = exports.deserializeAws_restJson1GetAnswerCommand = exports.deserializeAws_restJson1DisassociateLensesCommand = exports.deserializeAws_restJson1DeleteWorkloadShareCommand = exports.deserializeAws_restJson1DeleteWorkloadCommand = exports.deserializeAws_restJson1CreateWorkloadShareCommand = exports.deserializeAws_restJson1CreateWorkloadCommand = exports.deserializeAws_restJson1CreateMilestoneCommand = exports.deserializeAws_restJson1AssociateLensesCommand = exports.serializeAws_restJson1UpgradeLensReviewCommand = exports.serializeAws_restJson1UpdateWorkloadShareCommand = exports.serializeAws_restJson1UpdateWorkloadCommand = exports.serializeAws_restJson1UpdateShareInvitationCommand = exports.serializeAws_restJson1UpdateLensReviewCommand = exports.serializeAws_restJson1UpdateAnswerCommand = exports.serializeAws_restJson1UntagResourceCommand = exports.serializeAws_restJson1TagResourceCommand = exports.serializeAws_restJson1ListWorkloadSharesCommand = exports.serializeAws_restJson1ListWorkloadsCommand = exports.serializeAws_restJson1ListTagsForResourceCommand = exports.serializeAws_restJson1ListShareInvitationsCommand = exports.serializeAws_restJson1ListNotificationsCommand = exports.serializeAws_restJson1ListMilestonesCommand = exports.serializeAws_restJson1ListLensReviewsCommand = exports.serializeAws_restJson1ListLensReviewImprovementsCommand = exports.serializeAws_restJson1ListLensesCommand = exports.serializeAws_restJson1ListAnswersCommand = exports.serializeAws_restJson1GetWorkloadCommand = exports.serializeAws_restJson1GetMilestoneCommand = exports.serializeAws_restJson1GetLensVersionDifferenceCommand = exports.serializeAws_restJson1GetLensReviewReportCommand = exports.serializeAws_restJson1GetLensReviewCommand = exports.serializeAws_restJson1GetAnswerCommand = exports.serializeAws_restJson1DisassociateLensesCommand = exports.serializeAws_restJson1DeleteWorkloadShareCommand = exports.serializeAws_restJson1DeleteWorkloadCommand = exports.serializeAws_restJson1CreateWorkloadShareCommand = exports.serializeAws_restJson1CreateWorkloadCommand = exports.serializeAws_restJson1CreateMilestoneCommand = exports.serializeAws_restJson1AssociateLensesCommand = void 0;
exports.deserializeAws_restJson1UpgradeLensReviewCommand = exports.deserializeAws_restJson1UpdateWorkloadShareCommand = exports.deserializeAws_restJson1UpdateWorkloadCommand = exports.deserializeAws_restJson1UpdateShareInvitationCommand = exports.deserializeAws_restJson1UpdateLensReviewCommand = exports.deserializeAws_restJson1UpdateAnswerCommand = exports.deserializeAws_restJson1UntagResourceCommand = exports.deserializeAws_restJson1TagResourceCommand = exports.deserializeAws_restJson1ListWorkloadSharesCommand = exports.deserializeAws_restJson1ListWorkloadsCommand = exports.deserializeAws_restJson1ListTagsForResourceCommand = exports.deserializeAws_restJson1ListShareInvitationsCommand = void 0;
const protocol_http_1 = require("@aws-sdk/protocol-http");
const smithy_client_1 = require("@aws-sdk/smithy-client");
const uuid_1 = require("uuid");
const serializeAws_restJson1AssociateLensesCommand = async (input, context) => {
    const headers = {
        "content-type": "application/json",
    };
    let resolvedPath = "/workloads/{WorkloadId}/associateLenses";
    if (input.WorkloadId !== undefined) {
        const labelValue = input.WorkloadId;
        if (labelValue.length <= 0) {
            throw new Error("Empty value provided for input HTTP label: WorkloadId.");
        }
        resolvedPath = resolvedPath.replace("{WorkloadId}", smithy_client_1.extendedEncodeURIComponent(labelValue));
    }
    else {
        throw new Error("No value provided for input HTTP label: WorkloadId.");
    }
    let body;
    body = JSON.stringify({
        ...(input.LensAliases !== undefined &&
            input.LensAliases !== null && { LensAliases: serializeAws_restJson1LensAliases(input.LensAliases, context) }),
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
exports.serializeAws_restJson1AssociateLensesCommand = serializeAws_restJson1AssociateLensesCommand;
const serializeAws_restJson1CreateMilestoneCommand = async (input, context) => {
    var _a;
    const headers = {
        "content-type": "application/json",
    };
    let resolvedPath = "/workloads/{WorkloadId}/milestones";
    if (input.WorkloadId !== undefined) {
        const labelValue = input.WorkloadId;
        if (labelValue.length <= 0) {
            throw new Error("Empty value provided for input HTTP label: WorkloadId.");
        }
        resolvedPath = resolvedPath.replace("{WorkloadId}", smithy_client_1.extendedEncodeURIComponent(labelValue));
    }
    else {
        throw new Error("No value provided for input HTTP label: WorkloadId.");
    }
    let body;
    body = JSON.stringify({
        ClientRequestToken: (_a = input.ClientRequestToken) !== null && _a !== void 0 ? _a : uuid_1.v4(),
        ...(input.MilestoneName !== undefined && input.MilestoneName !== null && { MilestoneName: input.MilestoneName }),
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
exports.serializeAws_restJson1CreateMilestoneCommand = serializeAws_restJson1CreateMilestoneCommand;
const serializeAws_restJson1CreateWorkloadCommand = async (input, context) => {
    var _a;
    const headers = {
        "content-type": "application/json",
    };
    let resolvedPath = "/workloads";
    let body;
    body = JSON.stringify({
        ...(input.AccountIds !== undefined &&
            input.AccountIds !== null && { AccountIds: serializeAws_restJson1WorkloadAccountIds(input.AccountIds, context) }),
        ...(input.ArchitecturalDesign !== undefined &&
            input.ArchitecturalDesign !== null && { ArchitecturalDesign: input.ArchitecturalDesign }),
        ...(input.AwsRegions !== undefined &&
            input.AwsRegions !== null && { AwsRegions: serializeAws_restJson1WorkloadAwsRegions(input.AwsRegions, context) }),
        ClientRequestToken: (_a = input.ClientRequestToken) !== null && _a !== void 0 ? _a : uuid_1.v4(),
        ...(input.Description !== undefined && input.Description !== null && { Description: input.Description }),
        ...(input.Environment !== undefined && input.Environment !== null && { Environment: input.Environment }),
        ...(input.Industry !== undefined && input.Industry !== null && { Industry: input.Industry }),
        ...(input.IndustryType !== undefined && input.IndustryType !== null && { IndustryType: input.IndustryType }),
        ...(input.Lenses !== undefined &&
            input.Lenses !== null && { Lenses: serializeAws_restJson1WorkloadLenses(input.Lenses, context) }),
        ...(input.NonAwsRegions !== undefined &&
            input.NonAwsRegions !== null && {
            NonAwsRegions: serializeAws_restJson1WorkloadNonAwsRegions(input.NonAwsRegions, context),
        }),
        ...(input.Notes !== undefined && input.Notes !== null && { Notes: input.Notes }),
        ...(input.PillarPriorities !== undefined &&
            input.PillarPriorities !== null && {
            PillarPriorities: serializeAws_restJson1WorkloadPillarPriorities(input.PillarPriorities, context),
        }),
        ...(input.ReviewOwner !== undefined && input.ReviewOwner !== null && { ReviewOwner: input.ReviewOwner }),
        ...(input.Tags !== undefined && input.Tags !== null && { Tags: serializeAws_restJson1TagMap(input.Tags, context) }),
        ...(input.WorkloadName !== undefined && input.WorkloadName !== null && { WorkloadName: input.WorkloadName }),
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
exports.serializeAws_restJson1CreateWorkloadCommand = serializeAws_restJson1CreateWorkloadCommand;
const serializeAws_restJson1CreateWorkloadShareCommand = async (input, context) => {
    var _a;
    const headers = {
        "content-type": "application/json",
    };
    let resolvedPath = "/workloads/{WorkloadId}/shares";
    if (input.WorkloadId !== undefined) {
        const labelValue = input.WorkloadId;
        if (labelValue.length <= 0) {
            throw new Error("Empty value provided for input HTTP label: WorkloadId.");
        }
        resolvedPath = resolvedPath.replace("{WorkloadId}", smithy_client_1.extendedEncodeURIComponent(labelValue));
    }
    else {
        throw new Error("No value provided for input HTTP label: WorkloadId.");
    }
    let body;
    body = JSON.stringify({
        ClientRequestToken: (_a = input.ClientRequestToken) !== null && _a !== void 0 ? _a : uuid_1.v4(),
        ...(input.PermissionType !== undefined &&
            input.PermissionType !== null && { PermissionType: input.PermissionType }),
        ...(input.SharedWith !== undefined && input.SharedWith !== null && { SharedWith: input.SharedWith }),
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
exports.serializeAws_restJson1CreateWorkloadShareCommand = serializeAws_restJson1CreateWorkloadShareCommand;
const serializeAws_restJson1DeleteWorkloadCommand = async (input, context) => {
    const headers = {};
    let resolvedPath = "/workloads/{WorkloadId}";
    if (input.WorkloadId !== undefined) {
        const labelValue = input.WorkloadId;
        if (labelValue.length <= 0) {
            throw new Error("Empty value provided for input HTTP label: WorkloadId.");
        }
        resolvedPath = resolvedPath.replace("{WorkloadId}", smithy_client_1.extendedEncodeURIComponent(labelValue));
    }
    else {
        throw new Error("No value provided for input HTTP label: WorkloadId.");
    }
    const query = {
        ...(input.ClientRequestToken !== undefined && { ClientRequestToken: input.ClientRequestToken }),
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
exports.serializeAws_restJson1DeleteWorkloadCommand = serializeAws_restJson1DeleteWorkloadCommand;
const serializeAws_restJson1DeleteWorkloadShareCommand = async (input, context) => {
    const headers = {};
    let resolvedPath = "/workloads/{WorkloadId}/shares/{ShareId}";
    if (input.ShareId !== undefined) {
        const labelValue = input.ShareId;
        if (labelValue.length <= 0) {
            throw new Error("Empty value provided for input HTTP label: ShareId.");
        }
        resolvedPath = resolvedPath.replace("{ShareId}", smithy_client_1.extendedEncodeURIComponent(labelValue));
    }
    else {
        throw new Error("No value provided for input HTTP label: ShareId.");
    }
    if (input.WorkloadId !== undefined) {
        const labelValue = input.WorkloadId;
        if (labelValue.length <= 0) {
            throw new Error("Empty value provided for input HTTP label: WorkloadId.");
        }
        resolvedPath = resolvedPath.replace("{WorkloadId}", smithy_client_1.extendedEncodeURIComponent(labelValue));
    }
    else {
        throw new Error("No value provided for input HTTP label: WorkloadId.");
    }
    const query = {
        ...(input.ClientRequestToken !== undefined && { ClientRequestToken: input.ClientRequestToken }),
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
exports.serializeAws_restJson1DeleteWorkloadShareCommand = serializeAws_restJson1DeleteWorkloadShareCommand;
const serializeAws_restJson1DisassociateLensesCommand = async (input, context) => {
    const headers = {
        "content-type": "application/json",
    };
    let resolvedPath = "/workloads/{WorkloadId}/disassociateLenses";
    if (input.WorkloadId !== undefined) {
        const labelValue = input.WorkloadId;
        if (labelValue.length <= 0) {
            throw new Error("Empty value provided for input HTTP label: WorkloadId.");
        }
        resolvedPath = resolvedPath.replace("{WorkloadId}", smithy_client_1.extendedEncodeURIComponent(labelValue));
    }
    else {
        throw new Error("No value provided for input HTTP label: WorkloadId.");
    }
    let body;
    body = JSON.stringify({
        ...(input.LensAliases !== undefined &&
            input.LensAliases !== null && { LensAliases: serializeAws_restJson1LensAliases(input.LensAliases, context) }),
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
exports.serializeAws_restJson1DisassociateLensesCommand = serializeAws_restJson1DisassociateLensesCommand;
const serializeAws_restJson1GetAnswerCommand = async (input, context) => {
    const headers = {};
    let resolvedPath = "/workloads/{WorkloadId}/lensReviews/{LensAlias}/answers/{QuestionId}";
    if (input.WorkloadId !== undefined) {
        const labelValue = input.WorkloadId;
        if (labelValue.length <= 0) {
            throw new Error("Empty value provided for input HTTP label: WorkloadId.");
        }
        resolvedPath = resolvedPath.replace("{WorkloadId}", smithy_client_1.extendedEncodeURIComponent(labelValue));
    }
    else {
        throw new Error("No value provided for input HTTP label: WorkloadId.");
    }
    if (input.LensAlias !== undefined) {
        const labelValue = input.LensAlias;
        if (labelValue.length <= 0) {
            throw new Error("Empty value provided for input HTTP label: LensAlias.");
        }
        resolvedPath = resolvedPath.replace("{LensAlias}", smithy_client_1.extendedEncodeURIComponent(labelValue));
    }
    else {
        throw new Error("No value provided for input HTTP label: LensAlias.");
    }
    if (input.QuestionId !== undefined) {
        const labelValue = input.QuestionId;
        if (labelValue.length <= 0) {
            throw new Error("Empty value provided for input HTTP label: QuestionId.");
        }
        resolvedPath = resolvedPath.replace("{QuestionId}", smithy_client_1.extendedEncodeURIComponent(labelValue));
    }
    else {
        throw new Error("No value provided for input HTTP label: QuestionId.");
    }
    const query = {
        ...(input.MilestoneNumber !== undefined && { MilestoneNumber: input.MilestoneNumber.toString() }),
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
exports.serializeAws_restJson1GetAnswerCommand = serializeAws_restJson1GetAnswerCommand;
const serializeAws_restJson1GetLensReviewCommand = async (input, context) => {
    const headers = {};
    let resolvedPath = "/workloads/{WorkloadId}/lensReviews/{LensAlias}";
    if (input.WorkloadId !== undefined) {
        const labelValue = input.WorkloadId;
        if (labelValue.length <= 0) {
            throw new Error("Empty value provided for input HTTP label: WorkloadId.");
        }
        resolvedPath = resolvedPath.replace("{WorkloadId}", smithy_client_1.extendedEncodeURIComponent(labelValue));
    }
    else {
        throw new Error("No value provided for input HTTP label: WorkloadId.");
    }
    if (input.LensAlias !== undefined) {
        const labelValue = input.LensAlias;
        if (labelValue.length <= 0) {
            throw new Error("Empty value provided for input HTTP label: LensAlias.");
        }
        resolvedPath = resolvedPath.replace("{LensAlias}", smithy_client_1.extendedEncodeURIComponent(labelValue));
    }
    else {
        throw new Error("No value provided for input HTTP label: LensAlias.");
    }
    const query = {
        ...(input.MilestoneNumber !== undefined && { MilestoneNumber: input.MilestoneNumber.toString() }),
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
exports.serializeAws_restJson1GetLensReviewCommand = serializeAws_restJson1GetLensReviewCommand;
const serializeAws_restJson1GetLensReviewReportCommand = async (input, context) => {
    const headers = {};
    let resolvedPath = "/workloads/{WorkloadId}/lensReviews/{LensAlias}/report";
    if (input.WorkloadId !== undefined) {
        const labelValue = input.WorkloadId;
        if (labelValue.length <= 0) {
            throw new Error("Empty value provided for input HTTP label: WorkloadId.");
        }
        resolvedPath = resolvedPath.replace("{WorkloadId}", smithy_client_1.extendedEncodeURIComponent(labelValue));
    }
    else {
        throw new Error("No value provided for input HTTP label: WorkloadId.");
    }
    if (input.LensAlias !== undefined) {
        const labelValue = input.LensAlias;
        if (labelValue.length <= 0) {
            throw new Error("Empty value provided for input HTTP label: LensAlias.");
        }
        resolvedPath = resolvedPath.replace("{LensAlias}", smithy_client_1.extendedEncodeURIComponent(labelValue));
    }
    else {
        throw new Error("No value provided for input HTTP label: LensAlias.");
    }
    const query = {
        ...(input.MilestoneNumber !== undefined && { MilestoneNumber: input.MilestoneNumber.toString() }),
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
exports.serializeAws_restJson1GetLensReviewReportCommand = serializeAws_restJson1GetLensReviewReportCommand;
const serializeAws_restJson1GetLensVersionDifferenceCommand = async (input, context) => {
    const headers = {};
    let resolvedPath = "/lenses/{LensAlias}/versionDifference";
    if (input.LensAlias !== undefined) {
        const labelValue = input.LensAlias;
        if (labelValue.length <= 0) {
            throw new Error("Empty value provided for input HTTP label: LensAlias.");
        }
        resolvedPath = resolvedPath.replace("{LensAlias}", smithy_client_1.extendedEncodeURIComponent(labelValue));
    }
    else {
        throw new Error("No value provided for input HTTP label: LensAlias.");
    }
    const query = {
        ...(input.BaseLensVersion !== undefined && { BaseLensVersion: input.BaseLensVersion }),
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
exports.serializeAws_restJson1GetLensVersionDifferenceCommand = serializeAws_restJson1GetLensVersionDifferenceCommand;
const serializeAws_restJson1GetMilestoneCommand = async (input, context) => {
    const headers = {};
    let resolvedPath = "/workloads/{WorkloadId}/milestones/{MilestoneNumber}";
    if (input.WorkloadId !== undefined) {
        const labelValue = input.WorkloadId;
        if (labelValue.length <= 0) {
            throw new Error("Empty value provided for input HTTP label: WorkloadId.");
        }
        resolvedPath = resolvedPath.replace("{WorkloadId}", smithy_client_1.extendedEncodeURIComponent(labelValue));
    }
    else {
        throw new Error("No value provided for input HTTP label: WorkloadId.");
    }
    if (input.MilestoneNumber !== undefined) {
        const labelValue = input.MilestoneNumber.toString();
        if (labelValue.length <= 0) {
            throw new Error("Empty value provided for input HTTP label: MilestoneNumber.");
        }
        resolvedPath = resolvedPath.replace("{MilestoneNumber}", smithy_client_1.extendedEncodeURIComponent(labelValue));
    }
    else {
        throw new Error("No value provided for input HTTP label: MilestoneNumber.");
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
exports.serializeAws_restJson1GetMilestoneCommand = serializeAws_restJson1GetMilestoneCommand;
const serializeAws_restJson1GetWorkloadCommand = async (input, context) => {
    const headers = {};
    let resolvedPath = "/workloads/{WorkloadId}";
    if (input.WorkloadId !== undefined) {
        const labelValue = input.WorkloadId;
        if (labelValue.length <= 0) {
            throw new Error("Empty value provided for input HTTP label: WorkloadId.");
        }
        resolvedPath = resolvedPath.replace("{WorkloadId}", smithy_client_1.extendedEncodeURIComponent(labelValue));
    }
    else {
        throw new Error("No value provided for input HTTP label: WorkloadId.");
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
exports.serializeAws_restJson1GetWorkloadCommand = serializeAws_restJson1GetWorkloadCommand;
const serializeAws_restJson1ListAnswersCommand = async (input, context) => {
    const headers = {};
    let resolvedPath = "/workloads/{WorkloadId}/lensReviews/{LensAlias}/answers";
    if (input.WorkloadId !== undefined) {
        const labelValue = input.WorkloadId;
        if (labelValue.length <= 0) {
            throw new Error("Empty value provided for input HTTP label: WorkloadId.");
        }
        resolvedPath = resolvedPath.replace("{WorkloadId}", smithy_client_1.extendedEncodeURIComponent(labelValue));
    }
    else {
        throw new Error("No value provided for input HTTP label: WorkloadId.");
    }
    if (input.LensAlias !== undefined) {
        const labelValue = input.LensAlias;
        if (labelValue.length <= 0) {
            throw new Error("Empty value provided for input HTTP label: LensAlias.");
        }
        resolvedPath = resolvedPath.replace("{LensAlias}", smithy_client_1.extendedEncodeURIComponent(labelValue));
    }
    else {
        throw new Error("No value provided for input HTTP label: LensAlias.");
    }
    const query = {
        ...(input.PillarId !== undefined && { PillarId: input.PillarId }),
        ...(input.MilestoneNumber !== undefined && { MilestoneNumber: input.MilestoneNumber.toString() }),
        ...(input.NextToken !== undefined && { NextToken: input.NextToken }),
        ...(input.MaxResults !== undefined && { MaxResults: input.MaxResults.toString() }),
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
exports.serializeAws_restJson1ListAnswersCommand = serializeAws_restJson1ListAnswersCommand;
const serializeAws_restJson1ListLensesCommand = async (input, context) => {
    const headers = {};
    let resolvedPath = "/lenses";
    const query = {
        ...(input.NextToken !== undefined && { NextToken: input.NextToken }),
        ...(input.MaxResults !== undefined && { MaxResults: input.MaxResults.toString() }),
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
exports.serializeAws_restJson1ListLensesCommand = serializeAws_restJson1ListLensesCommand;
const serializeAws_restJson1ListLensReviewImprovementsCommand = async (input, context) => {
    const headers = {};
    let resolvedPath = "/workloads/{WorkloadId}/lensReviews/{LensAlias}/improvements";
    if (input.WorkloadId !== undefined) {
        const labelValue = input.WorkloadId;
        if (labelValue.length <= 0) {
            throw new Error("Empty value provided for input HTTP label: WorkloadId.");
        }
        resolvedPath = resolvedPath.replace("{WorkloadId}", smithy_client_1.extendedEncodeURIComponent(labelValue));
    }
    else {
        throw new Error("No value provided for input HTTP label: WorkloadId.");
    }
    if (input.LensAlias !== undefined) {
        const labelValue = input.LensAlias;
        if (labelValue.length <= 0) {
            throw new Error("Empty value provided for input HTTP label: LensAlias.");
        }
        resolvedPath = resolvedPath.replace("{LensAlias}", smithy_client_1.extendedEncodeURIComponent(labelValue));
    }
    else {
        throw new Error("No value provided for input HTTP label: LensAlias.");
    }
    const query = {
        ...(input.PillarId !== undefined && { PillarId: input.PillarId }),
        ...(input.MilestoneNumber !== undefined && { MilestoneNumber: input.MilestoneNumber.toString() }),
        ...(input.NextToken !== undefined && { NextToken: input.NextToken }),
        ...(input.MaxResults !== undefined && { MaxResults: input.MaxResults.toString() }),
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
exports.serializeAws_restJson1ListLensReviewImprovementsCommand = serializeAws_restJson1ListLensReviewImprovementsCommand;
const serializeAws_restJson1ListLensReviewsCommand = async (input, context) => {
    const headers = {};
    let resolvedPath = "/workloads/{WorkloadId}/lensReviews";
    if (input.WorkloadId !== undefined) {
        const labelValue = input.WorkloadId;
        if (labelValue.length <= 0) {
            throw new Error("Empty value provided for input HTTP label: WorkloadId.");
        }
        resolvedPath = resolvedPath.replace("{WorkloadId}", smithy_client_1.extendedEncodeURIComponent(labelValue));
    }
    else {
        throw new Error("No value provided for input HTTP label: WorkloadId.");
    }
    const query = {
        ...(input.MilestoneNumber !== undefined && { MilestoneNumber: input.MilestoneNumber.toString() }),
        ...(input.NextToken !== undefined && { NextToken: input.NextToken }),
        ...(input.MaxResults !== undefined && { MaxResults: input.MaxResults.toString() }),
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
exports.serializeAws_restJson1ListLensReviewsCommand = serializeAws_restJson1ListLensReviewsCommand;
const serializeAws_restJson1ListMilestonesCommand = async (input, context) => {
    const headers = {
        "content-type": "application/json",
    };
    let resolvedPath = "/workloads/{WorkloadId}/milestonesSummaries";
    if (input.WorkloadId !== undefined) {
        const labelValue = input.WorkloadId;
        if (labelValue.length <= 0) {
            throw new Error("Empty value provided for input HTTP label: WorkloadId.");
        }
        resolvedPath = resolvedPath.replace("{WorkloadId}", smithy_client_1.extendedEncodeURIComponent(labelValue));
    }
    else {
        throw new Error("No value provided for input HTTP label: WorkloadId.");
    }
    let body;
    body = JSON.stringify({
        ...(input.MaxResults !== undefined && input.MaxResults !== null && { MaxResults: input.MaxResults }),
        ...(input.NextToken !== undefined && input.NextToken !== null && { NextToken: input.NextToken }),
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
exports.serializeAws_restJson1ListMilestonesCommand = serializeAws_restJson1ListMilestonesCommand;
const serializeAws_restJson1ListNotificationsCommand = async (input, context) => {
    const headers = {
        "content-type": "application/json",
    };
    let resolvedPath = "/notifications";
    let body;
    body = JSON.stringify({
        ...(input.MaxResults !== undefined && input.MaxResults !== null && { MaxResults: input.MaxResults }),
        ...(input.NextToken !== undefined && input.NextToken !== null && { NextToken: input.NextToken }),
        ...(input.WorkloadId !== undefined && input.WorkloadId !== null && { WorkloadId: input.WorkloadId }),
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
exports.serializeAws_restJson1ListNotificationsCommand = serializeAws_restJson1ListNotificationsCommand;
const serializeAws_restJson1ListShareInvitationsCommand = async (input, context) => {
    const headers = {};
    let resolvedPath = "/shareInvitations";
    const query = {
        ...(input.WorkloadNamePrefix !== undefined && { WorkloadNamePrefix: input.WorkloadNamePrefix }),
        ...(input.NextToken !== undefined && { NextToken: input.NextToken }),
        ...(input.MaxResults !== undefined && { MaxResults: input.MaxResults.toString() }),
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
exports.serializeAws_restJson1ListShareInvitationsCommand = serializeAws_restJson1ListShareInvitationsCommand;
const serializeAws_restJson1ListTagsForResourceCommand = async (input, context) => {
    const headers = {};
    let resolvedPath = "/tags/{WorkloadArn}";
    if (input.WorkloadArn !== undefined) {
        const labelValue = input.WorkloadArn;
        if (labelValue.length <= 0) {
            throw new Error("Empty value provided for input HTTP label: WorkloadArn.");
        }
        resolvedPath = resolvedPath.replace("{WorkloadArn}", smithy_client_1.extendedEncodeURIComponent(labelValue));
    }
    else {
        throw new Error("No value provided for input HTTP label: WorkloadArn.");
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
const serializeAws_restJson1ListWorkloadsCommand = async (input, context) => {
    const headers = {
        "content-type": "application/json",
    };
    let resolvedPath = "/workloadsSummaries";
    let body;
    body = JSON.stringify({
        ...(input.MaxResults !== undefined && input.MaxResults !== null && { MaxResults: input.MaxResults }),
        ...(input.NextToken !== undefined && input.NextToken !== null && { NextToken: input.NextToken }),
        ...(input.WorkloadNamePrefix !== undefined &&
            input.WorkloadNamePrefix !== null && { WorkloadNamePrefix: input.WorkloadNamePrefix }),
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
exports.serializeAws_restJson1ListWorkloadsCommand = serializeAws_restJson1ListWorkloadsCommand;
const serializeAws_restJson1ListWorkloadSharesCommand = async (input, context) => {
    const headers = {};
    let resolvedPath = "/workloads/{WorkloadId}/shares";
    if (input.WorkloadId !== undefined) {
        const labelValue = input.WorkloadId;
        if (labelValue.length <= 0) {
            throw new Error("Empty value provided for input HTTP label: WorkloadId.");
        }
        resolvedPath = resolvedPath.replace("{WorkloadId}", smithy_client_1.extendedEncodeURIComponent(labelValue));
    }
    else {
        throw new Error("No value provided for input HTTP label: WorkloadId.");
    }
    const query = {
        ...(input.SharedWithPrefix !== undefined && { SharedWithPrefix: input.SharedWithPrefix }),
        ...(input.NextToken !== undefined && { NextToken: input.NextToken }),
        ...(input.MaxResults !== undefined && { MaxResults: input.MaxResults.toString() }),
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
exports.serializeAws_restJson1ListWorkloadSharesCommand = serializeAws_restJson1ListWorkloadSharesCommand;
const serializeAws_restJson1TagResourceCommand = async (input, context) => {
    const headers = {
        "content-type": "application/json",
    };
    let resolvedPath = "/tags/{WorkloadArn}";
    if (input.WorkloadArn !== undefined) {
        const labelValue = input.WorkloadArn;
        if (labelValue.length <= 0) {
            throw new Error("Empty value provided for input HTTP label: WorkloadArn.");
        }
        resolvedPath = resolvedPath.replace("{WorkloadArn}", smithy_client_1.extendedEncodeURIComponent(labelValue));
    }
    else {
        throw new Error("No value provided for input HTTP label: WorkloadArn.");
    }
    let body;
    body = JSON.stringify({
        ...(input.Tags !== undefined && input.Tags !== null && { Tags: serializeAws_restJson1TagMap(input.Tags, context) }),
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
const serializeAws_restJson1UntagResourceCommand = async (input, context) => {
    const headers = {};
    let resolvedPath = "/tags/{WorkloadArn}";
    if (input.WorkloadArn !== undefined) {
        const labelValue = input.WorkloadArn;
        if (labelValue.length <= 0) {
            throw new Error("Empty value provided for input HTTP label: WorkloadArn.");
        }
        resolvedPath = resolvedPath.replace("{WorkloadArn}", smithy_client_1.extendedEncodeURIComponent(labelValue));
    }
    else {
        throw new Error("No value provided for input HTTP label: WorkloadArn.");
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
const serializeAws_restJson1UpdateAnswerCommand = async (input, context) => {
    const headers = {
        "content-type": "application/json",
    };
    let resolvedPath = "/workloads/{WorkloadId}/lensReviews/{LensAlias}/answers/{QuestionId}";
    if (input.WorkloadId !== undefined) {
        const labelValue = input.WorkloadId;
        if (labelValue.length <= 0) {
            throw new Error("Empty value provided for input HTTP label: WorkloadId.");
        }
        resolvedPath = resolvedPath.replace("{WorkloadId}", smithy_client_1.extendedEncodeURIComponent(labelValue));
    }
    else {
        throw new Error("No value provided for input HTTP label: WorkloadId.");
    }
    if (input.LensAlias !== undefined) {
        const labelValue = input.LensAlias;
        if (labelValue.length <= 0) {
            throw new Error("Empty value provided for input HTTP label: LensAlias.");
        }
        resolvedPath = resolvedPath.replace("{LensAlias}", smithy_client_1.extendedEncodeURIComponent(labelValue));
    }
    else {
        throw new Error("No value provided for input HTTP label: LensAlias.");
    }
    if (input.QuestionId !== undefined) {
        const labelValue = input.QuestionId;
        if (labelValue.length <= 0) {
            throw new Error("Empty value provided for input HTTP label: QuestionId.");
        }
        resolvedPath = resolvedPath.replace("{QuestionId}", smithy_client_1.extendedEncodeURIComponent(labelValue));
    }
    else {
        throw new Error("No value provided for input HTTP label: QuestionId.");
    }
    let body;
    body = JSON.stringify({
        ...(input.IsApplicable !== undefined && input.IsApplicable !== null && { IsApplicable: input.IsApplicable }),
        ...(input.Notes !== undefined && input.Notes !== null && { Notes: input.Notes }),
        ...(input.SelectedChoices !== undefined &&
            input.SelectedChoices !== null && {
            SelectedChoices: serializeAws_restJson1SelectedChoices(input.SelectedChoices, context),
        }),
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
exports.serializeAws_restJson1UpdateAnswerCommand = serializeAws_restJson1UpdateAnswerCommand;
const serializeAws_restJson1UpdateLensReviewCommand = async (input, context) => {
    const headers = {
        "content-type": "application/json",
    };
    let resolvedPath = "/workloads/{WorkloadId}/lensReviews/{LensAlias}";
    if (input.WorkloadId !== undefined) {
        const labelValue = input.WorkloadId;
        if (labelValue.length <= 0) {
            throw new Error("Empty value provided for input HTTP label: WorkloadId.");
        }
        resolvedPath = resolvedPath.replace("{WorkloadId}", smithy_client_1.extendedEncodeURIComponent(labelValue));
    }
    else {
        throw new Error("No value provided for input HTTP label: WorkloadId.");
    }
    if (input.LensAlias !== undefined) {
        const labelValue = input.LensAlias;
        if (labelValue.length <= 0) {
            throw new Error("Empty value provided for input HTTP label: LensAlias.");
        }
        resolvedPath = resolvedPath.replace("{LensAlias}", smithy_client_1.extendedEncodeURIComponent(labelValue));
    }
    else {
        throw new Error("No value provided for input HTTP label: LensAlias.");
    }
    let body;
    body = JSON.stringify({
        ...(input.LensNotes !== undefined && input.LensNotes !== null && { LensNotes: input.LensNotes }),
        ...(input.PillarNotes !== undefined &&
            input.PillarNotes !== null && { PillarNotes: serializeAws_restJson1PillarNotes(input.PillarNotes, context) }),
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
exports.serializeAws_restJson1UpdateLensReviewCommand = serializeAws_restJson1UpdateLensReviewCommand;
const serializeAws_restJson1UpdateShareInvitationCommand = async (input, context) => {
    const headers = {
        "content-type": "application/json",
    };
    let resolvedPath = "/shareInvitations/{ShareInvitationId}";
    if (input.ShareInvitationId !== undefined) {
        const labelValue = input.ShareInvitationId;
        if (labelValue.length <= 0) {
            throw new Error("Empty value provided for input HTTP label: ShareInvitationId.");
        }
        resolvedPath = resolvedPath.replace("{ShareInvitationId}", smithy_client_1.extendedEncodeURIComponent(labelValue));
    }
    else {
        throw new Error("No value provided for input HTTP label: ShareInvitationId.");
    }
    let body;
    body = JSON.stringify({
        ...(input.ShareInvitationAction !== undefined &&
            input.ShareInvitationAction !== null && { ShareInvitationAction: input.ShareInvitationAction }),
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
exports.serializeAws_restJson1UpdateShareInvitationCommand = serializeAws_restJson1UpdateShareInvitationCommand;
const serializeAws_restJson1UpdateWorkloadCommand = async (input, context) => {
    const headers = {
        "content-type": "application/json",
    };
    let resolvedPath = "/workloads/{WorkloadId}";
    if (input.WorkloadId !== undefined) {
        const labelValue = input.WorkloadId;
        if (labelValue.length <= 0) {
            throw new Error("Empty value provided for input HTTP label: WorkloadId.");
        }
        resolvedPath = resolvedPath.replace("{WorkloadId}", smithy_client_1.extendedEncodeURIComponent(labelValue));
    }
    else {
        throw new Error("No value provided for input HTTP label: WorkloadId.");
    }
    let body;
    body = JSON.stringify({
        ...(input.AccountIds !== undefined &&
            input.AccountIds !== null && { AccountIds: serializeAws_restJson1WorkloadAccountIds(input.AccountIds, context) }),
        ...(input.ArchitecturalDesign !== undefined &&
            input.ArchitecturalDesign !== null && { ArchitecturalDesign: input.ArchitecturalDesign }),
        ...(input.AwsRegions !== undefined &&
            input.AwsRegions !== null && { AwsRegions: serializeAws_restJson1WorkloadAwsRegions(input.AwsRegions, context) }),
        ...(input.Description !== undefined && input.Description !== null && { Description: input.Description }),
        ...(input.Environment !== undefined && input.Environment !== null && { Environment: input.Environment }),
        ...(input.ImprovementStatus !== undefined &&
            input.ImprovementStatus !== null && { ImprovementStatus: input.ImprovementStatus }),
        ...(input.Industry !== undefined && input.Industry !== null && { Industry: input.Industry }),
        ...(input.IndustryType !== undefined && input.IndustryType !== null && { IndustryType: input.IndustryType }),
        ...(input.IsReviewOwnerUpdateAcknowledged !== undefined &&
            input.IsReviewOwnerUpdateAcknowledged !== null && {
            IsReviewOwnerUpdateAcknowledged: input.IsReviewOwnerUpdateAcknowledged,
        }),
        ...(input.NonAwsRegions !== undefined &&
            input.NonAwsRegions !== null && {
            NonAwsRegions: serializeAws_restJson1WorkloadNonAwsRegions(input.NonAwsRegions, context),
        }),
        ...(input.Notes !== undefined && input.Notes !== null && { Notes: input.Notes }),
        ...(input.PillarPriorities !== undefined &&
            input.PillarPriorities !== null && {
            PillarPriorities: serializeAws_restJson1WorkloadPillarPriorities(input.PillarPriorities, context),
        }),
        ...(input.ReviewOwner !== undefined && input.ReviewOwner !== null && { ReviewOwner: input.ReviewOwner }),
        ...(input.WorkloadName !== undefined && input.WorkloadName !== null && { WorkloadName: input.WorkloadName }),
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
exports.serializeAws_restJson1UpdateWorkloadCommand = serializeAws_restJson1UpdateWorkloadCommand;
const serializeAws_restJson1UpdateWorkloadShareCommand = async (input, context) => {
    const headers = {
        "content-type": "application/json",
    };
    let resolvedPath = "/workloads/{WorkloadId}/shares/{ShareId}";
    if (input.ShareId !== undefined) {
        const labelValue = input.ShareId;
        if (labelValue.length <= 0) {
            throw new Error("Empty value provided for input HTTP label: ShareId.");
        }
        resolvedPath = resolvedPath.replace("{ShareId}", smithy_client_1.extendedEncodeURIComponent(labelValue));
    }
    else {
        throw new Error("No value provided for input HTTP label: ShareId.");
    }
    if (input.WorkloadId !== undefined) {
        const labelValue = input.WorkloadId;
        if (labelValue.length <= 0) {
            throw new Error("Empty value provided for input HTTP label: WorkloadId.");
        }
        resolvedPath = resolvedPath.replace("{WorkloadId}", smithy_client_1.extendedEncodeURIComponent(labelValue));
    }
    else {
        throw new Error("No value provided for input HTTP label: WorkloadId.");
    }
    let body;
    body = JSON.stringify({
        ...(input.PermissionType !== undefined &&
            input.PermissionType !== null && { PermissionType: input.PermissionType }),
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
exports.serializeAws_restJson1UpdateWorkloadShareCommand = serializeAws_restJson1UpdateWorkloadShareCommand;
const serializeAws_restJson1UpgradeLensReviewCommand = async (input, context) => {
    const headers = {
        "content-type": "application/json",
    };
    let resolvedPath = "/workloads/{WorkloadId}/lensReviews/{LensAlias}/upgrade";
    if (input.WorkloadId !== undefined) {
        const labelValue = input.WorkloadId;
        if (labelValue.length <= 0) {
            throw new Error("Empty value provided for input HTTP label: WorkloadId.");
        }
        resolvedPath = resolvedPath.replace("{WorkloadId}", smithy_client_1.extendedEncodeURIComponent(labelValue));
    }
    else {
        throw new Error("No value provided for input HTTP label: WorkloadId.");
    }
    if (input.LensAlias !== undefined) {
        const labelValue = input.LensAlias;
        if (labelValue.length <= 0) {
            throw new Error("Empty value provided for input HTTP label: LensAlias.");
        }
        resolvedPath = resolvedPath.replace("{LensAlias}", smithy_client_1.extendedEncodeURIComponent(labelValue));
    }
    else {
        throw new Error("No value provided for input HTTP label: LensAlias.");
    }
    let body;
    body = JSON.stringify({
        ...(input.ClientRequestToken !== undefined &&
            input.ClientRequestToken !== null && { ClientRequestToken: input.ClientRequestToken }),
        ...(input.MilestoneName !== undefined && input.MilestoneName !== null && { MilestoneName: input.MilestoneName }),
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
exports.serializeAws_restJson1UpgradeLensReviewCommand = serializeAws_restJson1UpgradeLensReviewCommand;
const deserializeAws_restJson1AssociateLensesCommand = async (output, context) => {
    if (output.statusCode !== 200 && output.statusCode >= 300) {
        return deserializeAws_restJson1AssociateLensesCommandError(output, context);
    }
    const contents = {
        $metadata: deserializeMetadata(output),
    };
    await collectBody(output.body, context);
    return Promise.resolve(contents);
};
exports.deserializeAws_restJson1AssociateLensesCommand = deserializeAws_restJson1AssociateLensesCommand;
const deserializeAws_restJson1AssociateLensesCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "AccessDeniedException":
        case "com.amazonaws.wellarchitected#AccessDeniedException":
            response = {
                ...(await deserializeAws_restJson1AccessDeniedExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ConflictException":
        case "com.amazonaws.wellarchitected#ConflictException":
            response = {
                ...(await deserializeAws_restJson1ConflictExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InternalServerException":
        case "com.amazonaws.wellarchitected#InternalServerException":
            response = {
                ...(await deserializeAws_restJson1InternalServerExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ResourceNotFoundException":
        case "com.amazonaws.wellarchitected#ResourceNotFoundException":
            response = {
                ...(await deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ThrottlingException":
        case "com.amazonaws.wellarchitected#ThrottlingException":
            response = {
                ...(await deserializeAws_restJson1ThrottlingExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ValidationException":
        case "com.amazonaws.wellarchitected#ValidationException":
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
const deserializeAws_restJson1CreateMilestoneCommand = async (output, context) => {
    if (output.statusCode !== 200 && output.statusCode >= 300) {
        return deserializeAws_restJson1CreateMilestoneCommandError(output, context);
    }
    const contents = {
        $metadata: deserializeMetadata(output),
        MilestoneNumber: undefined,
        WorkloadId: undefined,
    };
    const data = await parseBody(output.body, context);
    if (data.MilestoneNumber !== undefined && data.MilestoneNumber !== null) {
        contents.MilestoneNumber = data.MilestoneNumber;
    }
    if (data.WorkloadId !== undefined && data.WorkloadId !== null) {
        contents.WorkloadId = data.WorkloadId;
    }
    return Promise.resolve(contents);
};
exports.deserializeAws_restJson1CreateMilestoneCommand = deserializeAws_restJson1CreateMilestoneCommand;
const deserializeAws_restJson1CreateMilestoneCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "AccessDeniedException":
        case "com.amazonaws.wellarchitected#AccessDeniedException":
            response = {
                ...(await deserializeAws_restJson1AccessDeniedExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ConflictException":
        case "com.amazonaws.wellarchitected#ConflictException":
            response = {
                ...(await deserializeAws_restJson1ConflictExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InternalServerException":
        case "com.amazonaws.wellarchitected#InternalServerException":
            response = {
                ...(await deserializeAws_restJson1InternalServerExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ResourceNotFoundException":
        case "com.amazonaws.wellarchitected#ResourceNotFoundException":
            response = {
                ...(await deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ServiceQuotaExceededException":
        case "com.amazonaws.wellarchitected#ServiceQuotaExceededException":
            response = {
                ...(await deserializeAws_restJson1ServiceQuotaExceededExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ThrottlingException":
        case "com.amazonaws.wellarchitected#ThrottlingException":
            response = {
                ...(await deserializeAws_restJson1ThrottlingExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ValidationException":
        case "com.amazonaws.wellarchitected#ValidationException":
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
const deserializeAws_restJson1CreateWorkloadCommand = async (output, context) => {
    if (output.statusCode !== 200 && output.statusCode >= 300) {
        return deserializeAws_restJson1CreateWorkloadCommandError(output, context);
    }
    const contents = {
        $metadata: deserializeMetadata(output),
        WorkloadArn: undefined,
        WorkloadId: undefined,
    };
    const data = await parseBody(output.body, context);
    if (data.WorkloadArn !== undefined && data.WorkloadArn !== null) {
        contents.WorkloadArn = data.WorkloadArn;
    }
    if (data.WorkloadId !== undefined && data.WorkloadId !== null) {
        contents.WorkloadId = data.WorkloadId;
    }
    return Promise.resolve(contents);
};
exports.deserializeAws_restJson1CreateWorkloadCommand = deserializeAws_restJson1CreateWorkloadCommand;
const deserializeAws_restJson1CreateWorkloadCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "AccessDeniedException":
        case "com.amazonaws.wellarchitected#AccessDeniedException":
            response = {
                ...(await deserializeAws_restJson1AccessDeniedExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ConflictException":
        case "com.amazonaws.wellarchitected#ConflictException":
            response = {
                ...(await deserializeAws_restJson1ConflictExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InternalServerException":
        case "com.amazonaws.wellarchitected#InternalServerException":
            response = {
                ...(await deserializeAws_restJson1InternalServerExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ServiceQuotaExceededException":
        case "com.amazonaws.wellarchitected#ServiceQuotaExceededException":
            response = {
                ...(await deserializeAws_restJson1ServiceQuotaExceededExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ThrottlingException":
        case "com.amazonaws.wellarchitected#ThrottlingException":
            response = {
                ...(await deserializeAws_restJson1ThrottlingExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ValidationException":
        case "com.amazonaws.wellarchitected#ValidationException":
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
const deserializeAws_restJson1CreateWorkloadShareCommand = async (output, context) => {
    if (output.statusCode !== 200 && output.statusCode >= 300) {
        return deserializeAws_restJson1CreateWorkloadShareCommandError(output, context);
    }
    const contents = {
        $metadata: deserializeMetadata(output),
        ShareId: undefined,
        WorkloadId: undefined,
    };
    const data = await parseBody(output.body, context);
    if (data.ShareId !== undefined && data.ShareId !== null) {
        contents.ShareId = data.ShareId;
    }
    if (data.WorkloadId !== undefined && data.WorkloadId !== null) {
        contents.WorkloadId = data.WorkloadId;
    }
    return Promise.resolve(contents);
};
exports.deserializeAws_restJson1CreateWorkloadShareCommand = deserializeAws_restJson1CreateWorkloadShareCommand;
const deserializeAws_restJson1CreateWorkloadShareCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "AccessDeniedException":
        case "com.amazonaws.wellarchitected#AccessDeniedException":
            response = {
                ...(await deserializeAws_restJson1AccessDeniedExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ConflictException":
        case "com.amazonaws.wellarchitected#ConflictException":
            response = {
                ...(await deserializeAws_restJson1ConflictExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InternalServerException":
        case "com.amazonaws.wellarchitected#InternalServerException":
            response = {
                ...(await deserializeAws_restJson1InternalServerExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ResourceNotFoundException":
        case "com.amazonaws.wellarchitected#ResourceNotFoundException":
            response = {
                ...(await deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ServiceQuotaExceededException":
        case "com.amazonaws.wellarchitected#ServiceQuotaExceededException":
            response = {
                ...(await deserializeAws_restJson1ServiceQuotaExceededExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ThrottlingException":
        case "com.amazonaws.wellarchitected#ThrottlingException":
            response = {
                ...(await deserializeAws_restJson1ThrottlingExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ValidationException":
        case "com.amazonaws.wellarchitected#ValidationException":
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
const deserializeAws_restJson1DeleteWorkloadCommand = async (output, context) => {
    if (output.statusCode !== 200 && output.statusCode >= 300) {
        return deserializeAws_restJson1DeleteWorkloadCommandError(output, context);
    }
    const contents = {
        $metadata: deserializeMetadata(output),
    };
    await collectBody(output.body, context);
    return Promise.resolve(contents);
};
exports.deserializeAws_restJson1DeleteWorkloadCommand = deserializeAws_restJson1DeleteWorkloadCommand;
const deserializeAws_restJson1DeleteWorkloadCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "AccessDeniedException":
        case "com.amazonaws.wellarchitected#AccessDeniedException":
            response = {
                ...(await deserializeAws_restJson1AccessDeniedExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ConflictException":
        case "com.amazonaws.wellarchitected#ConflictException":
            response = {
                ...(await deserializeAws_restJson1ConflictExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InternalServerException":
        case "com.amazonaws.wellarchitected#InternalServerException":
            response = {
                ...(await deserializeAws_restJson1InternalServerExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ResourceNotFoundException":
        case "com.amazonaws.wellarchitected#ResourceNotFoundException":
            response = {
                ...(await deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ThrottlingException":
        case "com.amazonaws.wellarchitected#ThrottlingException":
            response = {
                ...(await deserializeAws_restJson1ThrottlingExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ValidationException":
        case "com.amazonaws.wellarchitected#ValidationException":
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
const deserializeAws_restJson1DeleteWorkloadShareCommand = async (output, context) => {
    if (output.statusCode !== 200 && output.statusCode >= 300) {
        return deserializeAws_restJson1DeleteWorkloadShareCommandError(output, context);
    }
    const contents = {
        $metadata: deserializeMetadata(output),
    };
    await collectBody(output.body, context);
    return Promise.resolve(contents);
};
exports.deserializeAws_restJson1DeleteWorkloadShareCommand = deserializeAws_restJson1DeleteWorkloadShareCommand;
const deserializeAws_restJson1DeleteWorkloadShareCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "AccessDeniedException":
        case "com.amazonaws.wellarchitected#AccessDeniedException":
            response = {
                ...(await deserializeAws_restJson1AccessDeniedExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ConflictException":
        case "com.amazonaws.wellarchitected#ConflictException":
            response = {
                ...(await deserializeAws_restJson1ConflictExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InternalServerException":
        case "com.amazonaws.wellarchitected#InternalServerException":
            response = {
                ...(await deserializeAws_restJson1InternalServerExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ResourceNotFoundException":
        case "com.amazonaws.wellarchitected#ResourceNotFoundException":
            response = {
                ...(await deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ThrottlingException":
        case "com.amazonaws.wellarchitected#ThrottlingException":
            response = {
                ...(await deserializeAws_restJson1ThrottlingExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ValidationException":
        case "com.amazonaws.wellarchitected#ValidationException":
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
const deserializeAws_restJson1DisassociateLensesCommand = async (output, context) => {
    if (output.statusCode !== 200 && output.statusCode >= 300) {
        return deserializeAws_restJson1DisassociateLensesCommandError(output, context);
    }
    const contents = {
        $metadata: deserializeMetadata(output),
    };
    await collectBody(output.body, context);
    return Promise.resolve(contents);
};
exports.deserializeAws_restJson1DisassociateLensesCommand = deserializeAws_restJson1DisassociateLensesCommand;
const deserializeAws_restJson1DisassociateLensesCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "AccessDeniedException":
        case "com.amazonaws.wellarchitected#AccessDeniedException":
            response = {
                ...(await deserializeAws_restJson1AccessDeniedExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ConflictException":
        case "com.amazonaws.wellarchitected#ConflictException":
            response = {
                ...(await deserializeAws_restJson1ConflictExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InternalServerException":
        case "com.amazonaws.wellarchitected#InternalServerException":
            response = {
                ...(await deserializeAws_restJson1InternalServerExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ResourceNotFoundException":
        case "com.amazonaws.wellarchitected#ResourceNotFoundException":
            response = {
                ...(await deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ThrottlingException":
        case "com.amazonaws.wellarchitected#ThrottlingException":
            response = {
                ...(await deserializeAws_restJson1ThrottlingExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ValidationException":
        case "com.amazonaws.wellarchitected#ValidationException":
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
const deserializeAws_restJson1GetAnswerCommand = async (output, context) => {
    if (output.statusCode !== 200 && output.statusCode >= 300) {
        return deserializeAws_restJson1GetAnswerCommandError(output, context);
    }
    const contents = {
        $metadata: deserializeMetadata(output),
        Answer: undefined,
        LensAlias: undefined,
        MilestoneNumber: undefined,
        WorkloadId: undefined,
    };
    const data = await parseBody(output.body, context);
    if (data.Answer !== undefined && data.Answer !== null) {
        contents.Answer = deserializeAws_restJson1Answer(data.Answer, context);
    }
    if (data.LensAlias !== undefined && data.LensAlias !== null) {
        contents.LensAlias = data.LensAlias;
    }
    if (data.MilestoneNumber !== undefined && data.MilestoneNumber !== null) {
        contents.MilestoneNumber = data.MilestoneNumber;
    }
    if (data.WorkloadId !== undefined && data.WorkloadId !== null) {
        contents.WorkloadId = data.WorkloadId;
    }
    return Promise.resolve(contents);
};
exports.deserializeAws_restJson1GetAnswerCommand = deserializeAws_restJson1GetAnswerCommand;
const deserializeAws_restJson1GetAnswerCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "AccessDeniedException":
        case "com.amazonaws.wellarchitected#AccessDeniedException":
            response = {
                ...(await deserializeAws_restJson1AccessDeniedExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InternalServerException":
        case "com.amazonaws.wellarchitected#InternalServerException":
            response = {
                ...(await deserializeAws_restJson1InternalServerExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ResourceNotFoundException":
        case "com.amazonaws.wellarchitected#ResourceNotFoundException":
            response = {
                ...(await deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ThrottlingException":
        case "com.amazonaws.wellarchitected#ThrottlingException":
            response = {
                ...(await deserializeAws_restJson1ThrottlingExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ValidationException":
        case "com.amazonaws.wellarchitected#ValidationException":
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
const deserializeAws_restJson1GetLensReviewCommand = async (output, context) => {
    if (output.statusCode !== 200 && output.statusCode >= 300) {
        return deserializeAws_restJson1GetLensReviewCommandError(output, context);
    }
    const contents = {
        $metadata: deserializeMetadata(output),
        LensReview: undefined,
        MilestoneNumber: undefined,
        WorkloadId: undefined,
    };
    const data = await parseBody(output.body, context);
    if (data.LensReview !== undefined && data.LensReview !== null) {
        contents.LensReview = deserializeAws_restJson1LensReview(data.LensReview, context);
    }
    if (data.MilestoneNumber !== undefined && data.MilestoneNumber !== null) {
        contents.MilestoneNumber = data.MilestoneNumber;
    }
    if (data.WorkloadId !== undefined && data.WorkloadId !== null) {
        contents.WorkloadId = data.WorkloadId;
    }
    return Promise.resolve(contents);
};
exports.deserializeAws_restJson1GetLensReviewCommand = deserializeAws_restJson1GetLensReviewCommand;
const deserializeAws_restJson1GetLensReviewCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "AccessDeniedException":
        case "com.amazonaws.wellarchitected#AccessDeniedException":
            response = {
                ...(await deserializeAws_restJson1AccessDeniedExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InternalServerException":
        case "com.amazonaws.wellarchitected#InternalServerException":
            response = {
                ...(await deserializeAws_restJson1InternalServerExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ResourceNotFoundException":
        case "com.amazonaws.wellarchitected#ResourceNotFoundException":
            response = {
                ...(await deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ThrottlingException":
        case "com.amazonaws.wellarchitected#ThrottlingException":
            response = {
                ...(await deserializeAws_restJson1ThrottlingExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ValidationException":
        case "com.amazonaws.wellarchitected#ValidationException":
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
const deserializeAws_restJson1GetLensReviewReportCommand = async (output, context) => {
    if (output.statusCode !== 200 && output.statusCode >= 300) {
        return deserializeAws_restJson1GetLensReviewReportCommandError(output, context);
    }
    const contents = {
        $metadata: deserializeMetadata(output),
        LensReviewReport: undefined,
        MilestoneNumber: undefined,
        WorkloadId: undefined,
    };
    const data = await parseBody(output.body, context);
    if (data.LensReviewReport !== undefined && data.LensReviewReport !== null) {
        contents.LensReviewReport = deserializeAws_restJson1LensReviewReport(data.LensReviewReport, context);
    }
    if (data.MilestoneNumber !== undefined && data.MilestoneNumber !== null) {
        contents.MilestoneNumber = data.MilestoneNumber;
    }
    if (data.WorkloadId !== undefined && data.WorkloadId !== null) {
        contents.WorkloadId = data.WorkloadId;
    }
    return Promise.resolve(contents);
};
exports.deserializeAws_restJson1GetLensReviewReportCommand = deserializeAws_restJson1GetLensReviewReportCommand;
const deserializeAws_restJson1GetLensReviewReportCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "AccessDeniedException":
        case "com.amazonaws.wellarchitected#AccessDeniedException":
            response = {
                ...(await deserializeAws_restJson1AccessDeniedExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InternalServerException":
        case "com.amazonaws.wellarchitected#InternalServerException":
            response = {
                ...(await deserializeAws_restJson1InternalServerExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ResourceNotFoundException":
        case "com.amazonaws.wellarchitected#ResourceNotFoundException":
            response = {
                ...(await deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ThrottlingException":
        case "com.amazonaws.wellarchitected#ThrottlingException":
            response = {
                ...(await deserializeAws_restJson1ThrottlingExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ValidationException":
        case "com.amazonaws.wellarchitected#ValidationException":
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
const deserializeAws_restJson1GetLensVersionDifferenceCommand = async (output, context) => {
    if (output.statusCode !== 200 && output.statusCode >= 300) {
        return deserializeAws_restJson1GetLensVersionDifferenceCommandError(output, context);
    }
    const contents = {
        $metadata: deserializeMetadata(output),
        BaseLensVersion: undefined,
        LatestLensVersion: undefined,
        LensAlias: undefined,
        VersionDifferences: undefined,
    };
    const data = await parseBody(output.body, context);
    if (data.BaseLensVersion !== undefined && data.BaseLensVersion !== null) {
        contents.BaseLensVersion = data.BaseLensVersion;
    }
    if (data.LatestLensVersion !== undefined && data.LatestLensVersion !== null) {
        contents.LatestLensVersion = data.LatestLensVersion;
    }
    if (data.LensAlias !== undefined && data.LensAlias !== null) {
        contents.LensAlias = data.LensAlias;
    }
    if (data.VersionDifferences !== undefined && data.VersionDifferences !== null) {
        contents.VersionDifferences = deserializeAws_restJson1VersionDifferences(data.VersionDifferences, context);
    }
    return Promise.resolve(contents);
};
exports.deserializeAws_restJson1GetLensVersionDifferenceCommand = deserializeAws_restJson1GetLensVersionDifferenceCommand;
const deserializeAws_restJson1GetLensVersionDifferenceCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "AccessDeniedException":
        case "com.amazonaws.wellarchitected#AccessDeniedException":
            response = {
                ...(await deserializeAws_restJson1AccessDeniedExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InternalServerException":
        case "com.amazonaws.wellarchitected#InternalServerException":
            response = {
                ...(await deserializeAws_restJson1InternalServerExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ResourceNotFoundException":
        case "com.amazonaws.wellarchitected#ResourceNotFoundException":
            response = {
                ...(await deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ThrottlingException":
        case "com.amazonaws.wellarchitected#ThrottlingException":
            response = {
                ...(await deserializeAws_restJson1ThrottlingExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ValidationException":
        case "com.amazonaws.wellarchitected#ValidationException":
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
const deserializeAws_restJson1GetMilestoneCommand = async (output, context) => {
    if (output.statusCode !== 200 && output.statusCode >= 300) {
        return deserializeAws_restJson1GetMilestoneCommandError(output, context);
    }
    const contents = {
        $metadata: deserializeMetadata(output),
        Milestone: undefined,
        WorkloadId: undefined,
    };
    const data = await parseBody(output.body, context);
    if (data.Milestone !== undefined && data.Milestone !== null) {
        contents.Milestone = deserializeAws_restJson1Milestone(data.Milestone, context);
    }
    if (data.WorkloadId !== undefined && data.WorkloadId !== null) {
        contents.WorkloadId = data.WorkloadId;
    }
    return Promise.resolve(contents);
};
exports.deserializeAws_restJson1GetMilestoneCommand = deserializeAws_restJson1GetMilestoneCommand;
const deserializeAws_restJson1GetMilestoneCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "AccessDeniedException":
        case "com.amazonaws.wellarchitected#AccessDeniedException":
            response = {
                ...(await deserializeAws_restJson1AccessDeniedExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InternalServerException":
        case "com.amazonaws.wellarchitected#InternalServerException":
            response = {
                ...(await deserializeAws_restJson1InternalServerExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ResourceNotFoundException":
        case "com.amazonaws.wellarchitected#ResourceNotFoundException":
            response = {
                ...(await deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ThrottlingException":
        case "com.amazonaws.wellarchitected#ThrottlingException":
            response = {
                ...(await deserializeAws_restJson1ThrottlingExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ValidationException":
        case "com.amazonaws.wellarchitected#ValidationException":
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
const deserializeAws_restJson1GetWorkloadCommand = async (output, context) => {
    if (output.statusCode !== 200 && output.statusCode >= 300) {
        return deserializeAws_restJson1GetWorkloadCommandError(output, context);
    }
    const contents = {
        $metadata: deserializeMetadata(output),
        Workload: undefined,
    };
    const data = await parseBody(output.body, context);
    if (data.Workload !== undefined && data.Workload !== null) {
        contents.Workload = deserializeAws_restJson1Workload(data.Workload, context);
    }
    return Promise.resolve(contents);
};
exports.deserializeAws_restJson1GetWorkloadCommand = deserializeAws_restJson1GetWorkloadCommand;
const deserializeAws_restJson1GetWorkloadCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "AccessDeniedException":
        case "com.amazonaws.wellarchitected#AccessDeniedException":
            response = {
                ...(await deserializeAws_restJson1AccessDeniedExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InternalServerException":
        case "com.amazonaws.wellarchitected#InternalServerException":
            response = {
                ...(await deserializeAws_restJson1InternalServerExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ResourceNotFoundException":
        case "com.amazonaws.wellarchitected#ResourceNotFoundException":
            response = {
                ...(await deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ThrottlingException":
        case "com.amazonaws.wellarchitected#ThrottlingException":
            response = {
                ...(await deserializeAws_restJson1ThrottlingExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ValidationException":
        case "com.amazonaws.wellarchitected#ValidationException":
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
const deserializeAws_restJson1ListAnswersCommand = async (output, context) => {
    if (output.statusCode !== 200 && output.statusCode >= 300) {
        return deserializeAws_restJson1ListAnswersCommandError(output, context);
    }
    const contents = {
        $metadata: deserializeMetadata(output),
        AnswerSummaries: undefined,
        LensAlias: undefined,
        MilestoneNumber: undefined,
        NextToken: undefined,
        WorkloadId: undefined,
    };
    const data = await parseBody(output.body, context);
    if (data.AnswerSummaries !== undefined && data.AnswerSummaries !== null) {
        contents.AnswerSummaries = deserializeAws_restJson1AnswerSummaries(data.AnswerSummaries, context);
    }
    if (data.LensAlias !== undefined && data.LensAlias !== null) {
        contents.LensAlias = data.LensAlias;
    }
    if (data.MilestoneNumber !== undefined && data.MilestoneNumber !== null) {
        contents.MilestoneNumber = data.MilestoneNumber;
    }
    if (data.NextToken !== undefined && data.NextToken !== null) {
        contents.NextToken = data.NextToken;
    }
    if (data.WorkloadId !== undefined && data.WorkloadId !== null) {
        contents.WorkloadId = data.WorkloadId;
    }
    return Promise.resolve(contents);
};
exports.deserializeAws_restJson1ListAnswersCommand = deserializeAws_restJson1ListAnswersCommand;
const deserializeAws_restJson1ListAnswersCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "AccessDeniedException":
        case "com.amazonaws.wellarchitected#AccessDeniedException":
            response = {
                ...(await deserializeAws_restJson1AccessDeniedExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InternalServerException":
        case "com.amazonaws.wellarchitected#InternalServerException":
            response = {
                ...(await deserializeAws_restJson1InternalServerExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ResourceNotFoundException":
        case "com.amazonaws.wellarchitected#ResourceNotFoundException":
            response = {
                ...(await deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ThrottlingException":
        case "com.amazonaws.wellarchitected#ThrottlingException":
            response = {
                ...(await deserializeAws_restJson1ThrottlingExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ValidationException":
        case "com.amazonaws.wellarchitected#ValidationException":
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
const deserializeAws_restJson1ListLensesCommand = async (output, context) => {
    if (output.statusCode !== 200 && output.statusCode >= 300) {
        return deserializeAws_restJson1ListLensesCommandError(output, context);
    }
    const contents = {
        $metadata: deserializeMetadata(output),
        LensSummaries: undefined,
        NextToken: undefined,
    };
    const data = await parseBody(output.body, context);
    if (data.LensSummaries !== undefined && data.LensSummaries !== null) {
        contents.LensSummaries = deserializeAws_restJson1LensSummaries(data.LensSummaries, context);
    }
    if (data.NextToken !== undefined && data.NextToken !== null) {
        contents.NextToken = data.NextToken;
    }
    return Promise.resolve(contents);
};
exports.deserializeAws_restJson1ListLensesCommand = deserializeAws_restJson1ListLensesCommand;
const deserializeAws_restJson1ListLensesCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "AccessDeniedException":
        case "com.amazonaws.wellarchitected#AccessDeniedException":
            response = {
                ...(await deserializeAws_restJson1AccessDeniedExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InternalServerException":
        case "com.amazonaws.wellarchitected#InternalServerException":
            response = {
                ...(await deserializeAws_restJson1InternalServerExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ThrottlingException":
        case "com.amazonaws.wellarchitected#ThrottlingException":
            response = {
                ...(await deserializeAws_restJson1ThrottlingExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ValidationException":
        case "com.amazonaws.wellarchitected#ValidationException":
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
const deserializeAws_restJson1ListLensReviewImprovementsCommand = async (output, context) => {
    if (output.statusCode !== 200 && output.statusCode >= 300) {
        return deserializeAws_restJson1ListLensReviewImprovementsCommandError(output, context);
    }
    const contents = {
        $metadata: deserializeMetadata(output),
        ImprovementSummaries: undefined,
        LensAlias: undefined,
        MilestoneNumber: undefined,
        NextToken: undefined,
        WorkloadId: undefined,
    };
    const data = await parseBody(output.body, context);
    if (data.ImprovementSummaries !== undefined && data.ImprovementSummaries !== null) {
        contents.ImprovementSummaries = deserializeAws_restJson1ImprovementSummaries(data.ImprovementSummaries, context);
    }
    if (data.LensAlias !== undefined && data.LensAlias !== null) {
        contents.LensAlias = data.LensAlias;
    }
    if (data.MilestoneNumber !== undefined && data.MilestoneNumber !== null) {
        contents.MilestoneNumber = data.MilestoneNumber;
    }
    if (data.NextToken !== undefined && data.NextToken !== null) {
        contents.NextToken = data.NextToken;
    }
    if (data.WorkloadId !== undefined && data.WorkloadId !== null) {
        contents.WorkloadId = data.WorkloadId;
    }
    return Promise.resolve(contents);
};
exports.deserializeAws_restJson1ListLensReviewImprovementsCommand = deserializeAws_restJson1ListLensReviewImprovementsCommand;
const deserializeAws_restJson1ListLensReviewImprovementsCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "AccessDeniedException":
        case "com.amazonaws.wellarchitected#AccessDeniedException":
            response = {
                ...(await deserializeAws_restJson1AccessDeniedExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InternalServerException":
        case "com.amazonaws.wellarchitected#InternalServerException":
            response = {
                ...(await deserializeAws_restJson1InternalServerExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ResourceNotFoundException":
        case "com.amazonaws.wellarchitected#ResourceNotFoundException":
            response = {
                ...(await deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ThrottlingException":
        case "com.amazonaws.wellarchitected#ThrottlingException":
            response = {
                ...(await deserializeAws_restJson1ThrottlingExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ValidationException":
        case "com.amazonaws.wellarchitected#ValidationException":
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
const deserializeAws_restJson1ListLensReviewsCommand = async (output, context) => {
    if (output.statusCode !== 200 && output.statusCode >= 300) {
        return deserializeAws_restJson1ListLensReviewsCommandError(output, context);
    }
    const contents = {
        $metadata: deserializeMetadata(output),
        LensReviewSummaries: undefined,
        MilestoneNumber: undefined,
        NextToken: undefined,
        WorkloadId: undefined,
    };
    const data = await parseBody(output.body, context);
    if (data.LensReviewSummaries !== undefined && data.LensReviewSummaries !== null) {
        contents.LensReviewSummaries = deserializeAws_restJson1LensReviewSummaries(data.LensReviewSummaries, context);
    }
    if (data.MilestoneNumber !== undefined && data.MilestoneNumber !== null) {
        contents.MilestoneNumber = data.MilestoneNumber;
    }
    if (data.NextToken !== undefined && data.NextToken !== null) {
        contents.NextToken = data.NextToken;
    }
    if (data.WorkloadId !== undefined && data.WorkloadId !== null) {
        contents.WorkloadId = data.WorkloadId;
    }
    return Promise.resolve(contents);
};
exports.deserializeAws_restJson1ListLensReviewsCommand = deserializeAws_restJson1ListLensReviewsCommand;
const deserializeAws_restJson1ListLensReviewsCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "AccessDeniedException":
        case "com.amazonaws.wellarchitected#AccessDeniedException":
            response = {
                ...(await deserializeAws_restJson1AccessDeniedExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InternalServerException":
        case "com.amazonaws.wellarchitected#InternalServerException":
            response = {
                ...(await deserializeAws_restJson1InternalServerExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ResourceNotFoundException":
        case "com.amazonaws.wellarchitected#ResourceNotFoundException":
            response = {
                ...(await deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ThrottlingException":
        case "com.amazonaws.wellarchitected#ThrottlingException":
            response = {
                ...(await deserializeAws_restJson1ThrottlingExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ValidationException":
        case "com.amazonaws.wellarchitected#ValidationException":
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
const deserializeAws_restJson1ListMilestonesCommand = async (output, context) => {
    if (output.statusCode !== 200 && output.statusCode >= 300) {
        return deserializeAws_restJson1ListMilestonesCommandError(output, context);
    }
    const contents = {
        $metadata: deserializeMetadata(output),
        MilestoneSummaries: undefined,
        NextToken: undefined,
        WorkloadId: undefined,
    };
    const data = await parseBody(output.body, context);
    if (data.MilestoneSummaries !== undefined && data.MilestoneSummaries !== null) {
        contents.MilestoneSummaries = deserializeAws_restJson1MilestoneSummaries(data.MilestoneSummaries, context);
    }
    if (data.NextToken !== undefined && data.NextToken !== null) {
        contents.NextToken = data.NextToken;
    }
    if (data.WorkloadId !== undefined && data.WorkloadId !== null) {
        contents.WorkloadId = data.WorkloadId;
    }
    return Promise.resolve(contents);
};
exports.deserializeAws_restJson1ListMilestonesCommand = deserializeAws_restJson1ListMilestonesCommand;
const deserializeAws_restJson1ListMilestonesCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "AccessDeniedException":
        case "com.amazonaws.wellarchitected#AccessDeniedException":
            response = {
                ...(await deserializeAws_restJson1AccessDeniedExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InternalServerException":
        case "com.amazonaws.wellarchitected#InternalServerException":
            response = {
                ...(await deserializeAws_restJson1InternalServerExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ResourceNotFoundException":
        case "com.amazonaws.wellarchitected#ResourceNotFoundException":
            response = {
                ...(await deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ThrottlingException":
        case "com.amazonaws.wellarchitected#ThrottlingException":
            response = {
                ...(await deserializeAws_restJson1ThrottlingExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ValidationException":
        case "com.amazonaws.wellarchitected#ValidationException":
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
const deserializeAws_restJson1ListNotificationsCommand = async (output, context) => {
    if (output.statusCode !== 200 && output.statusCode >= 300) {
        return deserializeAws_restJson1ListNotificationsCommandError(output, context);
    }
    const contents = {
        $metadata: deserializeMetadata(output),
        NextToken: undefined,
        NotificationSummaries: undefined,
    };
    const data = await parseBody(output.body, context);
    if (data.NextToken !== undefined && data.NextToken !== null) {
        contents.NextToken = data.NextToken;
    }
    if (data.NotificationSummaries !== undefined && data.NotificationSummaries !== null) {
        contents.NotificationSummaries = deserializeAws_restJson1NotificationSummaries(data.NotificationSummaries, context);
    }
    return Promise.resolve(contents);
};
exports.deserializeAws_restJson1ListNotificationsCommand = deserializeAws_restJson1ListNotificationsCommand;
const deserializeAws_restJson1ListNotificationsCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "AccessDeniedException":
        case "com.amazonaws.wellarchitected#AccessDeniedException":
            response = {
                ...(await deserializeAws_restJson1AccessDeniedExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InternalServerException":
        case "com.amazonaws.wellarchitected#InternalServerException":
            response = {
                ...(await deserializeAws_restJson1InternalServerExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ThrottlingException":
        case "com.amazonaws.wellarchitected#ThrottlingException":
            response = {
                ...(await deserializeAws_restJson1ThrottlingExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ValidationException":
        case "com.amazonaws.wellarchitected#ValidationException":
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
const deserializeAws_restJson1ListShareInvitationsCommand = async (output, context) => {
    if (output.statusCode !== 200 && output.statusCode >= 300) {
        return deserializeAws_restJson1ListShareInvitationsCommandError(output, context);
    }
    const contents = {
        $metadata: deserializeMetadata(output),
        NextToken: undefined,
        ShareInvitationSummaries: undefined,
    };
    const data = await parseBody(output.body, context);
    if (data.NextToken !== undefined && data.NextToken !== null) {
        contents.NextToken = data.NextToken;
    }
    if (data.ShareInvitationSummaries !== undefined && data.ShareInvitationSummaries !== null) {
        contents.ShareInvitationSummaries = deserializeAws_restJson1ShareInvitationSummaries(data.ShareInvitationSummaries, context);
    }
    return Promise.resolve(contents);
};
exports.deserializeAws_restJson1ListShareInvitationsCommand = deserializeAws_restJson1ListShareInvitationsCommand;
const deserializeAws_restJson1ListShareInvitationsCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "AccessDeniedException":
        case "com.amazonaws.wellarchitected#AccessDeniedException":
            response = {
                ...(await deserializeAws_restJson1AccessDeniedExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InternalServerException":
        case "com.amazonaws.wellarchitected#InternalServerException":
            response = {
                ...(await deserializeAws_restJson1InternalServerExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ThrottlingException":
        case "com.amazonaws.wellarchitected#ThrottlingException":
            response = {
                ...(await deserializeAws_restJson1ThrottlingExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ValidationException":
        case "com.amazonaws.wellarchitected#ValidationException":
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
        Tags: undefined,
    };
    const data = await parseBody(output.body, context);
    if (data.Tags !== undefined && data.Tags !== null) {
        contents.Tags = deserializeAws_restJson1TagMap(data.Tags, context);
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
        case "InternalServerException":
        case "com.amazonaws.wellarchitected#InternalServerException":
            response = {
                ...(await deserializeAws_restJson1InternalServerExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ResourceNotFoundException":
        case "com.amazonaws.wellarchitected#ResourceNotFoundException":
            response = {
                ...(await deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        default:
            const parsedBody = parsedOutput.body;
            errorCode = parsedBody.code || parsedBody.Code || errorCode;
            response = {
                ...parsedBody,
                name: `${errorCode}`,
                message: parsedBody.message || parsedBody.Message || errorCode,
                $fault: "client",
                $metadata: deserializeMetadata(output),
            };
    }
    const message = response.message || response.Message || errorCode;
    response.message = message;
    delete response.Message;
    return Promise.reject(Object.assign(new Error(message), response));
};
const deserializeAws_restJson1ListWorkloadsCommand = async (output, context) => {
    if (output.statusCode !== 200 && output.statusCode >= 300) {
        return deserializeAws_restJson1ListWorkloadsCommandError(output, context);
    }
    const contents = {
        $metadata: deserializeMetadata(output),
        NextToken: undefined,
        WorkloadSummaries: undefined,
    };
    const data = await parseBody(output.body, context);
    if (data.NextToken !== undefined && data.NextToken !== null) {
        contents.NextToken = data.NextToken;
    }
    if (data.WorkloadSummaries !== undefined && data.WorkloadSummaries !== null) {
        contents.WorkloadSummaries = deserializeAws_restJson1WorkloadSummaries(data.WorkloadSummaries, context);
    }
    return Promise.resolve(contents);
};
exports.deserializeAws_restJson1ListWorkloadsCommand = deserializeAws_restJson1ListWorkloadsCommand;
const deserializeAws_restJson1ListWorkloadsCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "AccessDeniedException":
        case "com.amazonaws.wellarchitected#AccessDeniedException":
            response = {
                ...(await deserializeAws_restJson1AccessDeniedExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InternalServerException":
        case "com.amazonaws.wellarchitected#InternalServerException":
            response = {
                ...(await deserializeAws_restJson1InternalServerExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ThrottlingException":
        case "com.amazonaws.wellarchitected#ThrottlingException":
            response = {
                ...(await deserializeAws_restJson1ThrottlingExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ValidationException":
        case "com.amazonaws.wellarchitected#ValidationException":
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
const deserializeAws_restJson1ListWorkloadSharesCommand = async (output, context) => {
    if (output.statusCode !== 200 && output.statusCode >= 300) {
        return deserializeAws_restJson1ListWorkloadSharesCommandError(output, context);
    }
    const contents = {
        $metadata: deserializeMetadata(output),
        NextToken: undefined,
        WorkloadId: undefined,
        WorkloadShareSummaries: undefined,
    };
    const data = await parseBody(output.body, context);
    if (data.NextToken !== undefined && data.NextToken !== null) {
        contents.NextToken = data.NextToken;
    }
    if (data.WorkloadId !== undefined && data.WorkloadId !== null) {
        contents.WorkloadId = data.WorkloadId;
    }
    if (data.WorkloadShareSummaries !== undefined && data.WorkloadShareSummaries !== null) {
        contents.WorkloadShareSummaries = deserializeAws_restJson1WorkloadShareSummaries(data.WorkloadShareSummaries, context);
    }
    return Promise.resolve(contents);
};
exports.deserializeAws_restJson1ListWorkloadSharesCommand = deserializeAws_restJson1ListWorkloadSharesCommand;
const deserializeAws_restJson1ListWorkloadSharesCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "AccessDeniedException":
        case "com.amazonaws.wellarchitected#AccessDeniedException":
            response = {
                ...(await deserializeAws_restJson1AccessDeniedExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InternalServerException":
        case "com.amazonaws.wellarchitected#InternalServerException":
            response = {
                ...(await deserializeAws_restJson1InternalServerExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ResourceNotFoundException":
        case "com.amazonaws.wellarchitected#ResourceNotFoundException":
            response = {
                ...(await deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ThrottlingException":
        case "com.amazonaws.wellarchitected#ThrottlingException":
            response = {
                ...(await deserializeAws_restJson1ThrottlingExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ValidationException":
        case "com.amazonaws.wellarchitected#ValidationException":
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
        case "InternalServerException":
        case "com.amazonaws.wellarchitected#InternalServerException":
            response = {
                ...(await deserializeAws_restJson1InternalServerExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ResourceNotFoundException":
        case "com.amazonaws.wellarchitected#ResourceNotFoundException":
            response = {
                ...(await deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        default:
            const parsedBody = parsedOutput.body;
            errorCode = parsedBody.code || parsedBody.Code || errorCode;
            response = {
                ...parsedBody,
                name: `${errorCode}`,
                message: parsedBody.message || parsedBody.Message || errorCode,
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
        case "InternalServerException":
        case "com.amazonaws.wellarchitected#InternalServerException":
            response = {
                ...(await deserializeAws_restJson1InternalServerExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ResourceNotFoundException":
        case "com.amazonaws.wellarchitected#ResourceNotFoundException":
            response = {
                ...(await deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        default:
            const parsedBody = parsedOutput.body;
            errorCode = parsedBody.code || parsedBody.Code || errorCode;
            response = {
                ...parsedBody,
                name: `${errorCode}`,
                message: parsedBody.message || parsedBody.Message || errorCode,
                $fault: "client",
                $metadata: deserializeMetadata(output),
            };
    }
    const message = response.message || response.Message || errorCode;
    response.message = message;
    delete response.Message;
    return Promise.reject(Object.assign(new Error(message), response));
};
const deserializeAws_restJson1UpdateAnswerCommand = async (output, context) => {
    if (output.statusCode !== 200 && output.statusCode >= 300) {
        return deserializeAws_restJson1UpdateAnswerCommandError(output, context);
    }
    const contents = {
        $metadata: deserializeMetadata(output),
        Answer: undefined,
        LensAlias: undefined,
        WorkloadId: undefined,
    };
    const data = await parseBody(output.body, context);
    if (data.Answer !== undefined && data.Answer !== null) {
        contents.Answer = deserializeAws_restJson1Answer(data.Answer, context);
    }
    if (data.LensAlias !== undefined && data.LensAlias !== null) {
        contents.LensAlias = data.LensAlias;
    }
    if (data.WorkloadId !== undefined && data.WorkloadId !== null) {
        contents.WorkloadId = data.WorkloadId;
    }
    return Promise.resolve(contents);
};
exports.deserializeAws_restJson1UpdateAnswerCommand = deserializeAws_restJson1UpdateAnswerCommand;
const deserializeAws_restJson1UpdateAnswerCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "AccessDeniedException":
        case "com.amazonaws.wellarchitected#AccessDeniedException":
            response = {
                ...(await deserializeAws_restJson1AccessDeniedExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ConflictException":
        case "com.amazonaws.wellarchitected#ConflictException":
            response = {
                ...(await deserializeAws_restJson1ConflictExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InternalServerException":
        case "com.amazonaws.wellarchitected#InternalServerException":
            response = {
                ...(await deserializeAws_restJson1InternalServerExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ResourceNotFoundException":
        case "com.amazonaws.wellarchitected#ResourceNotFoundException":
            response = {
                ...(await deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ThrottlingException":
        case "com.amazonaws.wellarchitected#ThrottlingException":
            response = {
                ...(await deserializeAws_restJson1ThrottlingExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ValidationException":
        case "com.amazonaws.wellarchitected#ValidationException":
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
const deserializeAws_restJson1UpdateLensReviewCommand = async (output, context) => {
    if (output.statusCode !== 200 && output.statusCode >= 300) {
        return deserializeAws_restJson1UpdateLensReviewCommandError(output, context);
    }
    const contents = {
        $metadata: deserializeMetadata(output),
        LensReview: undefined,
        WorkloadId: undefined,
    };
    const data = await parseBody(output.body, context);
    if (data.LensReview !== undefined && data.LensReview !== null) {
        contents.LensReview = deserializeAws_restJson1LensReview(data.LensReview, context);
    }
    if (data.WorkloadId !== undefined && data.WorkloadId !== null) {
        contents.WorkloadId = data.WorkloadId;
    }
    return Promise.resolve(contents);
};
exports.deserializeAws_restJson1UpdateLensReviewCommand = deserializeAws_restJson1UpdateLensReviewCommand;
const deserializeAws_restJson1UpdateLensReviewCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "AccessDeniedException":
        case "com.amazonaws.wellarchitected#AccessDeniedException":
            response = {
                ...(await deserializeAws_restJson1AccessDeniedExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ConflictException":
        case "com.amazonaws.wellarchitected#ConflictException":
            response = {
                ...(await deserializeAws_restJson1ConflictExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InternalServerException":
        case "com.amazonaws.wellarchitected#InternalServerException":
            response = {
                ...(await deserializeAws_restJson1InternalServerExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ResourceNotFoundException":
        case "com.amazonaws.wellarchitected#ResourceNotFoundException":
            response = {
                ...(await deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ThrottlingException":
        case "com.amazonaws.wellarchitected#ThrottlingException":
            response = {
                ...(await deserializeAws_restJson1ThrottlingExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ValidationException":
        case "com.amazonaws.wellarchitected#ValidationException":
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
const deserializeAws_restJson1UpdateShareInvitationCommand = async (output, context) => {
    if (output.statusCode !== 200 && output.statusCode >= 300) {
        return deserializeAws_restJson1UpdateShareInvitationCommandError(output, context);
    }
    const contents = {
        $metadata: deserializeMetadata(output),
        ShareInvitation: undefined,
    };
    const data = await parseBody(output.body, context);
    if (data.ShareInvitation !== undefined && data.ShareInvitation !== null) {
        contents.ShareInvitation = deserializeAws_restJson1ShareInvitation(data.ShareInvitation, context);
    }
    return Promise.resolve(contents);
};
exports.deserializeAws_restJson1UpdateShareInvitationCommand = deserializeAws_restJson1UpdateShareInvitationCommand;
const deserializeAws_restJson1UpdateShareInvitationCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "AccessDeniedException":
        case "com.amazonaws.wellarchitected#AccessDeniedException":
            response = {
                ...(await deserializeAws_restJson1AccessDeniedExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ConflictException":
        case "com.amazonaws.wellarchitected#ConflictException":
            response = {
                ...(await deserializeAws_restJson1ConflictExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InternalServerException":
        case "com.amazonaws.wellarchitected#InternalServerException":
            response = {
                ...(await deserializeAws_restJson1InternalServerExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ResourceNotFoundException":
        case "com.amazonaws.wellarchitected#ResourceNotFoundException":
            response = {
                ...(await deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ThrottlingException":
        case "com.amazonaws.wellarchitected#ThrottlingException":
            response = {
                ...(await deserializeAws_restJson1ThrottlingExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ValidationException":
        case "com.amazonaws.wellarchitected#ValidationException":
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
const deserializeAws_restJson1UpdateWorkloadCommand = async (output, context) => {
    if (output.statusCode !== 200 && output.statusCode >= 300) {
        return deserializeAws_restJson1UpdateWorkloadCommandError(output, context);
    }
    const contents = {
        $metadata: deserializeMetadata(output),
        Workload: undefined,
    };
    const data = await parseBody(output.body, context);
    if (data.Workload !== undefined && data.Workload !== null) {
        contents.Workload = deserializeAws_restJson1Workload(data.Workload, context);
    }
    return Promise.resolve(contents);
};
exports.deserializeAws_restJson1UpdateWorkloadCommand = deserializeAws_restJson1UpdateWorkloadCommand;
const deserializeAws_restJson1UpdateWorkloadCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "AccessDeniedException":
        case "com.amazonaws.wellarchitected#AccessDeniedException":
            response = {
                ...(await deserializeAws_restJson1AccessDeniedExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ConflictException":
        case "com.amazonaws.wellarchitected#ConflictException":
            response = {
                ...(await deserializeAws_restJson1ConflictExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InternalServerException":
        case "com.amazonaws.wellarchitected#InternalServerException":
            response = {
                ...(await deserializeAws_restJson1InternalServerExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ResourceNotFoundException":
        case "com.amazonaws.wellarchitected#ResourceNotFoundException":
            response = {
                ...(await deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ThrottlingException":
        case "com.amazonaws.wellarchitected#ThrottlingException":
            response = {
                ...(await deserializeAws_restJson1ThrottlingExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ValidationException":
        case "com.amazonaws.wellarchitected#ValidationException":
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
const deserializeAws_restJson1UpdateWorkloadShareCommand = async (output, context) => {
    if (output.statusCode !== 200 && output.statusCode >= 300) {
        return deserializeAws_restJson1UpdateWorkloadShareCommandError(output, context);
    }
    const contents = {
        $metadata: deserializeMetadata(output),
        WorkloadId: undefined,
        WorkloadShare: undefined,
    };
    const data = await parseBody(output.body, context);
    if (data.WorkloadId !== undefined && data.WorkloadId !== null) {
        contents.WorkloadId = data.WorkloadId;
    }
    if (data.WorkloadShare !== undefined && data.WorkloadShare !== null) {
        contents.WorkloadShare = deserializeAws_restJson1WorkloadShare(data.WorkloadShare, context);
    }
    return Promise.resolve(contents);
};
exports.deserializeAws_restJson1UpdateWorkloadShareCommand = deserializeAws_restJson1UpdateWorkloadShareCommand;
const deserializeAws_restJson1UpdateWorkloadShareCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "AccessDeniedException":
        case "com.amazonaws.wellarchitected#AccessDeniedException":
            response = {
                ...(await deserializeAws_restJson1AccessDeniedExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ConflictException":
        case "com.amazonaws.wellarchitected#ConflictException":
            response = {
                ...(await deserializeAws_restJson1ConflictExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InternalServerException":
        case "com.amazonaws.wellarchitected#InternalServerException":
            response = {
                ...(await deserializeAws_restJson1InternalServerExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ResourceNotFoundException":
        case "com.amazonaws.wellarchitected#ResourceNotFoundException":
            response = {
                ...(await deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ThrottlingException":
        case "com.amazonaws.wellarchitected#ThrottlingException":
            response = {
                ...(await deserializeAws_restJson1ThrottlingExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ValidationException":
        case "com.amazonaws.wellarchitected#ValidationException":
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
const deserializeAws_restJson1UpgradeLensReviewCommand = async (output, context) => {
    if (output.statusCode !== 200 && output.statusCode >= 300) {
        return deserializeAws_restJson1UpgradeLensReviewCommandError(output, context);
    }
    const contents = {
        $metadata: deserializeMetadata(output),
    };
    await collectBody(output.body, context);
    return Promise.resolve(contents);
};
exports.deserializeAws_restJson1UpgradeLensReviewCommand = deserializeAws_restJson1UpgradeLensReviewCommand;
const deserializeAws_restJson1UpgradeLensReviewCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "AccessDeniedException":
        case "com.amazonaws.wellarchitected#AccessDeniedException":
            response = {
                ...(await deserializeAws_restJson1AccessDeniedExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ConflictException":
        case "com.amazonaws.wellarchitected#ConflictException":
            response = {
                ...(await deserializeAws_restJson1ConflictExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InternalServerException":
        case "com.amazonaws.wellarchitected#InternalServerException":
            response = {
                ...(await deserializeAws_restJson1InternalServerExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ResourceNotFoundException":
        case "com.amazonaws.wellarchitected#ResourceNotFoundException":
            response = {
                ...(await deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ThrottlingException":
        case "com.amazonaws.wellarchitected#ThrottlingException":
            response = {
                ...(await deserializeAws_restJson1ThrottlingExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ValidationException":
        case "com.amazonaws.wellarchitected#ValidationException":
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
        Message: undefined,
    };
    const data = parsedOutput.body;
    if (data.Message !== undefined && data.Message !== null) {
        contents.Message = data.Message;
    }
    return contents;
};
const deserializeAws_restJson1ConflictExceptionResponse = async (parsedOutput, context) => {
    const contents = {
        name: "ConflictException",
        $fault: "client",
        $metadata: deserializeMetadata(parsedOutput),
        Message: undefined,
        ResourceId: undefined,
        ResourceType: undefined,
    };
    const data = parsedOutput.body;
    if (data.Message !== undefined && data.Message !== null) {
        contents.Message = data.Message;
    }
    if (data.ResourceId !== undefined && data.ResourceId !== null) {
        contents.ResourceId = data.ResourceId;
    }
    if (data.ResourceType !== undefined && data.ResourceType !== null) {
        contents.ResourceType = data.ResourceType;
    }
    return contents;
};
const deserializeAws_restJson1InternalServerExceptionResponse = async (parsedOutput, context) => {
    const contents = {
        name: "InternalServerException",
        $fault: "server",
        $metadata: deserializeMetadata(parsedOutput),
        Message: undefined,
    };
    const data = parsedOutput.body;
    if (data.Message !== undefined && data.Message !== null) {
        contents.Message = data.Message;
    }
    return contents;
};
const deserializeAws_restJson1ResourceNotFoundExceptionResponse = async (parsedOutput, context) => {
    const contents = {
        name: "ResourceNotFoundException",
        $fault: "client",
        $metadata: deserializeMetadata(parsedOutput),
        Message: undefined,
        ResourceId: undefined,
        ResourceType: undefined,
    };
    const data = parsedOutput.body;
    if (data.Message !== undefined && data.Message !== null) {
        contents.Message = data.Message;
    }
    if (data.ResourceId !== undefined && data.ResourceId !== null) {
        contents.ResourceId = data.ResourceId;
    }
    if (data.ResourceType !== undefined && data.ResourceType !== null) {
        contents.ResourceType = data.ResourceType;
    }
    return contents;
};
const deserializeAws_restJson1ServiceQuotaExceededExceptionResponse = async (parsedOutput, context) => {
    const contents = {
        name: "ServiceQuotaExceededException",
        $fault: "client",
        $metadata: deserializeMetadata(parsedOutput),
        Message: undefined,
        QuotaCode: undefined,
        ResourceId: undefined,
        ResourceType: undefined,
        ServiceCode: undefined,
    };
    const data = parsedOutput.body;
    if (data.Message !== undefined && data.Message !== null) {
        contents.Message = data.Message;
    }
    if (data.QuotaCode !== undefined && data.QuotaCode !== null) {
        contents.QuotaCode = data.QuotaCode;
    }
    if (data.ResourceId !== undefined && data.ResourceId !== null) {
        contents.ResourceId = data.ResourceId;
    }
    if (data.ResourceType !== undefined && data.ResourceType !== null) {
        contents.ResourceType = data.ResourceType;
    }
    if (data.ServiceCode !== undefined && data.ServiceCode !== null) {
        contents.ServiceCode = data.ServiceCode;
    }
    return contents;
};
const deserializeAws_restJson1ThrottlingExceptionResponse = async (parsedOutput, context) => {
    const contents = {
        name: "ThrottlingException",
        $fault: "client",
        $metadata: deserializeMetadata(parsedOutput),
        Message: undefined,
        QuotaCode: undefined,
        ServiceCode: undefined,
    };
    const data = parsedOutput.body;
    if (data.Message !== undefined && data.Message !== null) {
        contents.Message = data.Message;
    }
    if (data.QuotaCode !== undefined && data.QuotaCode !== null) {
        contents.QuotaCode = data.QuotaCode;
    }
    if (data.ServiceCode !== undefined && data.ServiceCode !== null) {
        contents.ServiceCode = data.ServiceCode;
    }
    return contents;
};
const deserializeAws_restJson1ValidationExceptionResponse = async (parsedOutput, context) => {
    const contents = {
        name: "ValidationException",
        $fault: "client",
        $metadata: deserializeMetadata(parsedOutput),
        Fields: undefined,
        Message: undefined,
        Reason: undefined,
    };
    const data = parsedOutput.body;
    if (data.Fields !== undefined && data.Fields !== null) {
        contents.Fields = deserializeAws_restJson1ValidationExceptionFieldList(data.Fields, context);
    }
    if (data.Message !== undefined && data.Message !== null) {
        contents.Message = data.Message;
    }
    if (data.Reason !== undefined && data.Reason !== null) {
        contents.Reason = data.Reason;
    }
    return contents;
};
const serializeAws_restJson1LensAliases = (input, context) => {
    return input
        .filter((e) => e != null)
        .map((entry) => {
        if (entry === null) {
            return null;
        }
        return entry;
    });
};
const serializeAws_restJson1PillarNotes = (input, context) => {
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
const serializeAws_restJson1SelectedChoices = (input, context) => {
    return input
        .filter((e) => e != null)
        .map((entry) => {
        if (entry === null) {
            return null;
        }
        return entry;
    });
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
const serializeAws_restJson1WorkloadAccountIds = (input, context) => {
    return input
        .filter((e) => e != null)
        .map((entry) => {
        if (entry === null) {
            return null;
        }
        return entry;
    });
};
const serializeAws_restJson1WorkloadAwsRegions = (input, context) => {
    return input
        .filter((e) => e != null)
        .map((entry) => {
        if (entry === null) {
            return null;
        }
        return entry;
    });
};
const serializeAws_restJson1WorkloadLenses = (input, context) => {
    return input
        .filter((e) => e != null)
        .map((entry) => {
        if (entry === null) {
            return null;
        }
        return entry;
    });
};
const serializeAws_restJson1WorkloadNonAwsRegions = (input, context) => {
    return input
        .filter((e) => e != null)
        .map((entry) => {
        if (entry === null) {
            return null;
        }
        return entry;
    });
};
const serializeAws_restJson1WorkloadPillarPriorities = (input, context) => {
    return input
        .filter((e) => e != null)
        .map((entry) => {
        if (entry === null) {
            return null;
        }
        return entry;
    });
};
const deserializeAws_restJson1Answer = (output, context) => {
    return {
        Choices: output.Choices !== undefined && output.Choices !== null
            ? deserializeAws_restJson1Choices(output.Choices, context)
            : undefined,
        HelpfulResourceUrl: output.HelpfulResourceUrl !== undefined && output.HelpfulResourceUrl !== null
            ? output.HelpfulResourceUrl
            : undefined,
        ImprovementPlanUrl: output.ImprovementPlanUrl !== undefined && output.ImprovementPlanUrl !== null
            ? output.ImprovementPlanUrl
            : undefined,
        IsApplicable: output.IsApplicable !== undefined && output.IsApplicable !== null ? output.IsApplicable : undefined,
        Notes: output.Notes !== undefined && output.Notes !== null ? output.Notes : undefined,
        PillarId: output.PillarId !== undefined && output.PillarId !== null ? output.PillarId : undefined,
        QuestionDescription: output.QuestionDescription !== undefined && output.QuestionDescription !== null
            ? output.QuestionDescription
            : undefined,
        QuestionId: output.QuestionId !== undefined && output.QuestionId !== null ? output.QuestionId : undefined,
        QuestionTitle: output.QuestionTitle !== undefined && output.QuestionTitle !== null ? output.QuestionTitle : undefined,
        Risk: output.Risk !== undefined && output.Risk !== null ? output.Risk : undefined,
        SelectedChoices: output.SelectedChoices !== undefined && output.SelectedChoices !== null
            ? deserializeAws_restJson1SelectedChoices(output.SelectedChoices, context)
            : undefined,
    };
};
const deserializeAws_restJson1AnswerSummaries = (output, context) => {
    return (output || [])
        .filter((e) => e != null)
        .map((entry) => {
        if (entry === null) {
            return null;
        }
        return deserializeAws_restJson1AnswerSummary(entry, context);
    });
};
const deserializeAws_restJson1AnswerSummary = (output, context) => {
    return {
        Choices: output.Choices !== undefined && output.Choices !== null
            ? deserializeAws_restJson1Choices(output.Choices, context)
            : undefined,
        IsApplicable: output.IsApplicable !== undefined && output.IsApplicable !== null ? output.IsApplicable : undefined,
        PillarId: output.PillarId !== undefined && output.PillarId !== null ? output.PillarId : undefined,
        QuestionId: output.QuestionId !== undefined && output.QuestionId !== null ? output.QuestionId : undefined,
        QuestionTitle: output.QuestionTitle !== undefined && output.QuestionTitle !== null ? output.QuestionTitle : undefined,
        Risk: output.Risk !== undefined && output.Risk !== null ? output.Risk : undefined,
        SelectedChoices: output.SelectedChoices !== undefined && output.SelectedChoices !== null
            ? deserializeAws_restJson1SelectedChoices(output.SelectedChoices, context)
            : undefined,
    };
};
const deserializeAws_restJson1Choice = (output, context) => {
    return {
        ChoiceId: output.ChoiceId !== undefined && output.ChoiceId !== null ? output.ChoiceId : undefined,
        Description: output.Description !== undefined && output.Description !== null ? output.Description : undefined,
        Title: output.Title !== undefined && output.Title !== null ? output.Title : undefined,
    };
};
const deserializeAws_restJson1Choices = (output, context) => {
    return (output || [])
        .filter((e) => e != null)
        .map((entry) => {
        if (entry === null) {
            return null;
        }
        return deserializeAws_restJson1Choice(entry, context);
    });
};
const deserializeAws_restJson1ImprovementSummaries = (output, context) => {
    return (output || [])
        .filter((e) => e != null)
        .map((entry) => {
        if (entry === null) {
            return null;
        }
        return deserializeAws_restJson1ImprovementSummary(entry, context);
    });
};
const deserializeAws_restJson1ImprovementSummary = (output, context) => {
    return {
        ImprovementPlanUrl: output.ImprovementPlanUrl !== undefined && output.ImprovementPlanUrl !== null
            ? output.ImprovementPlanUrl
            : undefined,
        PillarId: output.PillarId !== undefined && output.PillarId !== null ? output.PillarId : undefined,
        QuestionId: output.QuestionId !== undefined && output.QuestionId !== null ? output.QuestionId : undefined,
        QuestionTitle: output.QuestionTitle !== undefined && output.QuestionTitle !== null ? output.QuestionTitle : undefined,
        Risk: output.Risk !== undefined && output.Risk !== null ? output.Risk : undefined,
    };
};
const deserializeAws_restJson1LensReview = (output, context) => {
    return {
        LensAlias: output.LensAlias !== undefined && output.LensAlias !== null ? output.LensAlias : undefined,
        LensName: output.LensName !== undefined && output.LensName !== null ? output.LensName : undefined,
        LensStatus: output.LensStatus !== undefined && output.LensStatus !== null ? output.LensStatus : undefined,
        LensVersion: output.LensVersion !== undefined && output.LensVersion !== null ? output.LensVersion : undefined,
        NextToken: output.NextToken !== undefined && output.NextToken !== null ? output.NextToken : undefined,
        Notes: output.Notes !== undefined && output.Notes !== null ? output.Notes : undefined,
        PillarReviewSummaries: output.PillarReviewSummaries !== undefined && output.PillarReviewSummaries !== null
            ? deserializeAws_restJson1PillarReviewSummaries(output.PillarReviewSummaries, context)
            : undefined,
        RiskCounts: output.RiskCounts !== undefined && output.RiskCounts !== null
            ? deserializeAws_restJson1RiskCounts(output.RiskCounts, context)
            : undefined,
        UpdatedAt: output.UpdatedAt !== undefined && output.UpdatedAt !== null
            ? new Date(Math.round(output.UpdatedAt * 1000))
            : undefined,
    };
};
const deserializeAws_restJson1LensReviewReport = (output, context) => {
    return {
        Base64String: output.Base64String !== undefined && output.Base64String !== null ? output.Base64String : undefined,
        LensAlias: output.LensAlias !== undefined && output.LensAlias !== null ? output.LensAlias : undefined,
    };
};
const deserializeAws_restJson1LensReviewSummaries = (output, context) => {
    return (output || [])
        .filter((e) => e != null)
        .map((entry) => {
        if (entry === null) {
            return null;
        }
        return deserializeAws_restJson1LensReviewSummary(entry, context);
    });
};
const deserializeAws_restJson1LensReviewSummary = (output, context) => {
    return {
        LensAlias: output.LensAlias !== undefined && output.LensAlias !== null ? output.LensAlias : undefined,
        LensName: output.LensName !== undefined && output.LensName !== null ? output.LensName : undefined,
        LensStatus: output.LensStatus !== undefined && output.LensStatus !== null ? output.LensStatus : undefined,
        LensVersion: output.LensVersion !== undefined && output.LensVersion !== null ? output.LensVersion : undefined,
        RiskCounts: output.RiskCounts !== undefined && output.RiskCounts !== null
            ? deserializeAws_restJson1RiskCounts(output.RiskCounts, context)
            : undefined,
        UpdatedAt: output.UpdatedAt !== undefined && output.UpdatedAt !== null
            ? new Date(Math.round(output.UpdatedAt * 1000))
            : undefined,
    };
};
const deserializeAws_restJson1LensSummaries = (output, context) => {
    return (output || [])
        .filter((e) => e != null)
        .map((entry) => {
        if (entry === null) {
            return null;
        }
        return deserializeAws_restJson1LensSummary(entry, context);
    });
};
const deserializeAws_restJson1LensSummary = (output, context) => {
    return {
        Description: output.Description !== undefined && output.Description !== null ? output.Description : undefined,
        LensAlias: output.LensAlias !== undefined && output.LensAlias !== null ? output.LensAlias : undefined,
        LensName: output.LensName !== undefined && output.LensName !== null ? output.LensName : undefined,
        LensVersion: output.LensVersion !== undefined && output.LensVersion !== null ? output.LensVersion : undefined,
    };
};
const deserializeAws_restJson1LensUpgradeSummary = (output, context) => {
    return {
        CurrentLensVersion: output.CurrentLensVersion !== undefined && output.CurrentLensVersion !== null
            ? output.CurrentLensVersion
            : undefined,
        LatestLensVersion: output.LatestLensVersion !== undefined && output.LatestLensVersion !== null
            ? output.LatestLensVersion
            : undefined,
        LensAlias: output.LensAlias !== undefined && output.LensAlias !== null ? output.LensAlias : undefined,
        WorkloadId: output.WorkloadId !== undefined && output.WorkloadId !== null ? output.WorkloadId : undefined,
        WorkloadName: output.WorkloadName !== undefined && output.WorkloadName !== null ? output.WorkloadName : undefined,
    };
};
const deserializeAws_restJson1Milestone = (output, context) => {
    return {
        MilestoneName: output.MilestoneName !== undefined && output.MilestoneName !== null ? output.MilestoneName : undefined,
        MilestoneNumber: output.MilestoneNumber !== undefined && output.MilestoneNumber !== null ? output.MilestoneNumber : undefined,
        RecordedAt: output.RecordedAt !== undefined && output.RecordedAt !== null
            ? new Date(Math.round(output.RecordedAt * 1000))
            : undefined,
        Workload: output.Workload !== undefined && output.Workload !== null
            ? deserializeAws_restJson1Workload(output.Workload, context)
            : undefined,
    };
};
const deserializeAws_restJson1MilestoneSummaries = (output, context) => {
    return (output || [])
        .filter((e) => e != null)
        .map((entry) => {
        if (entry === null) {
            return null;
        }
        return deserializeAws_restJson1MilestoneSummary(entry, context);
    });
};
const deserializeAws_restJson1MilestoneSummary = (output, context) => {
    return {
        MilestoneName: output.MilestoneName !== undefined && output.MilestoneName !== null ? output.MilestoneName : undefined,
        MilestoneNumber: output.MilestoneNumber !== undefined && output.MilestoneNumber !== null ? output.MilestoneNumber : undefined,
        RecordedAt: output.RecordedAt !== undefined && output.RecordedAt !== null
            ? new Date(Math.round(output.RecordedAt * 1000))
            : undefined,
        WorkloadSummary: output.WorkloadSummary !== undefined && output.WorkloadSummary !== null
            ? deserializeAws_restJson1WorkloadSummary(output.WorkloadSummary, context)
            : undefined,
    };
};
const deserializeAws_restJson1NotificationSummaries = (output, context) => {
    return (output || [])
        .filter((e) => e != null)
        .map((entry) => {
        if (entry === null) {
            return null;
        }
        return deserializeAws_restJson1NotificationSummary(entry, context);
    });
};
const deserializeAws_restJson1NotificationSummary = (output, context) => {
    return {
        LensUpgradeSummary: output.LensUpgradeSummary !== undefined && output.LensUpgradeSummary !== null
            ? deserializeAws_restJson1LensUpgradeSummary(output.LensUpgradeSummary, context)
            : undefined,
        Type: output.Type !== undefined && output.Type !== null ? output.Type : undefined,
    };
};
const deserializeAws_restJson1PillarDifference = (output, context) => {
    return {
        DifferenceStatus: output.DifferenceStatus !== undefined && output.DifferenceStatus !== null ? output.DifferenceStatus : undefined,
        PillarId: output.PillarId !== undefined && output.PillarId !== null ? output.PillarId : undefined,
        QuestionDifferences: output.QuestionDifferences !== undefined && output.QuestionDifferences !== null
            ? deserializeAws_restJson1QuestionDifferences(output.QuestionDifferences, context)
            : undefined,
    };
};
const deserializeAws_restJson1PillarDifferences = (output, context) => {
    return (output || [])
        .filter((e) => e != null)
        .map((entry) => {
        if (entry === null) {
            return null;
        }
        return deserializeAws_restJson1PillarDifference(entry, context);
    });
};
const deserializeAws_restJson1PillarReviewSummaries = (output, context) => {
    return (output || [])
        .filter((e) => e != null)
        .map((entry) => {
        if (entry === null) {
            return null;
        }
        return deserializeAws_restJson1PillarReviewSummary(entry, context);
    });
};
const deserializeAws_restJson1PillarReviewSummary = (output, context) => {
    return {
        Notes: output.Notes !== undefined && output.Notes !== null ? output.Notes : undefined,
        PillarId: output.PillarId !== undefined && output.PillarId !== null ? output.PillarId : undefined,
        PillarName: output.PillarName !== undefined && output.PillarName !== null ? output.PillarName : undefined,
        RiskCounts: output.RiskCounts !== undefined && output.RiskCounts !== null
            ? deserializeAws_restJson1RiskCounts(output.RiskCounts, context)
            : undefined,
    };
};
const deserializeAws_restJson1QuestionDifference = (output, context) => {
    return {
        DifferenceStatus: output.DifferenceStatus !== undefined && output.DifferenceStatus !== null ? output.DifferenceStatus : undefined,
        QuestionId: output.QuestionId !== undefined && output.QuestionId !== null ? output.QuestionId : undefined,
        QuestionTitle: output.QuestionTitle !== undefined && output.QuestionTitle !== null ? output.QuestionTitle : undefined,
    };
};
const deserializeAws_restJson1QuestionDifferences = (output, context) => {
    return (output || [])
        .filter((e) => e != null)
        .map((entry) => {
        if (entry === null) {
            return null;
        }
        return deserializeAws_restJson1QuestionDifference(entry, context);
    });
};
const deserializeAws_restJson1RiskCounts = (output, context) => {
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
const deserializeAws_restJson1SelectedChoices = (output, context) => {
    return (output || [])
        .filter((e) => e != null)
        .map((entry) => {
        if (entry === null) {
            return null;
        }
        return entry;
    });
};
const deserializeAws_restJson1ShareInvitation = (output, context) => {
    return {
        ShareInvitationId: output.ShareInvitationId !== undefined && output.ShareInvitationId !== null
            ? output.ShareInvitationId
            : undefined,
        WorkloadId: output.WorkloadId !== undefined && output.WorkloadId !== null ? output.WorkloadId : undefined,
    };
};
const deserializeAws_restJson1ShareInvitationSummaries = (output, context) => {
    return (output || [])
        .filter((e) => e != null)
        .map((entry) => {
        if (entry === null) {
            return null;
        }
        return deserializeAws_restJson1ShareInvitationSummary(entry, context);
    });
};
const deserializeAws_restJson1ShareInvitationSummary = (output, context) => {
    return {
        PermissionType: output.PermissionType !== undefined && output.PermissionType !== null ? output.PermissionType : undefined,
        ShareInvitationId: output.ShareInvitationId !== undefined && output.ShareInvitationId !== null
            ? output.ShareInvitationId
            : undefined,
        SharedBy: output.SharedBy !== undefined && output.SharedBy !== null ? output.SharedBy : undefined,
        SharedWith: output.SharedWith !== undefined && output.SharedWith !== null ? output.SharedWith : undefined,
        WorkloadId: output.WorkloadId !== undefined && output.WorkloadId !== null ? output.WorkloadId : undefined,
        WorkloadName: output.WorkloadName !== undefined && output.WorkloadName !== null ? output.WorkloadName : undefined,
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
const deserializeAws_restJson1ValidationExceptionField = (output, context) => {
    return {
        Message: output.Message !== undefined && output.Message !== null ? output.Message : undefined,
        Name: output.Name !== undefined && output.Name !== null ? output.Name : undefined,
    };
};
const deserializeAws_restJson1ValidationExceptionFieldList = (output, context) => {
    return (output || [])
        .filter((e) => e != null)
        .map((entry) => {
        if (entry === null) {
            return null;
        }
        return deserializeAws_restJson1ValidationExceptionField(entry, context);
    });
};
const deserializeAws_restJson1VersionDifferences = (output, context) => {
    return {
        PillarDifferences: output.PillarDifferences !== undefined && output.PillarDifferences !== null
            ? deserializeAws_restJson1PillarDifferences(output.PillarDifferences, context)
            : undefined,
    };
};
const deserializeAws_restJson1Workload = (output, context) => {
    return {
        AccountIds: output.AccountIds !== undefined && output.AccountIds !== null
            ? deserializeAws_restJson1WorkloadAccountIds(output.AccountIds, context)
            : undefined,
        ArchitecturalDesign: output.ArchitecturalDesign !== undefined && output.ArchitecturalDesign !== null
            ? output.ArchitecturalDesign
            : undefined,
        AwsRegions: output.AwsRegions !== undefined && output.AwsRegions !== null
            ? deserializeAws_restJson1WorkloadAwsRegions(output.AwsRegions, context)
            : undefined,
        Description: output.Description !== undefined && output.Description !== null ? output.Description : undefined,
        Environment: output.Environment !== undefined && output.Environment !== null ? output.Environment : undefined,
        ImprovementStatus: output.ImprovementStatus !== undefined && output.ImprovementStatus !== null
            ? output.ImprovementStatus
            : undefined,
        Industry: output.Industry !== undefined && output.Industry !== null ? output.Industry : undefined,
        IndustryType: output.IndustryType !== undefined && output.IndustryType !== null ? output.IndustryType : undefined,
        IsReviewOwnerUpdateAcknowledged: output.IsReviewOwnerUpdateAcknowledged !== undefined && output.IsReviewOwnerUpdateAcknowledged !== null
            ? output.IsReviewOwnerUpdateAcknowledged
            : undefined,
        Lenses: output.Lenses !== undefined && output.Lenses !== null
            ? deserializeAws_restJson1WorkloadLenses(output.Lenses, context)
            : undefined,
        NonAwsRegions: output.NonAwsRegions !== undefined && output.NonAwsRegions !== null
            ? deserializeAws_restJson1WorkloadNonAwsRegions(output.NonAwsRegions, context)
            : undefined,
        Notes: output.Notes !== undefined && output.Notes !== null ? output.Notes : undefined,
        Owner: output.Owner !== undefined && output.Owner !== null ? output.Owner : undefined,
        PillarPriorities: output.PillarPriorities !== undefined && output.PillarPriorities !== null
            ? deserializeAws_restJson1WorkloadPillarPriorities(output.PillarPriorities, context)
            : undefined,
        ReviewOwner: output.ReviewOwner !== undefined && output.ReviewOwner !== null ? output.ReviewOwner : undefined,
        ReviewRestrictionDate: output.ReviewRestrictionDate !== undefined && output.ReviewRestrictionDate !== null
            ? new Date(Math.round(output.ReviewRestrictionDate * 1000))
            : undefined,
        RiskCounts: output.RiskCounts !== undefined && output.RiskCounts !== null
            ? deserializeAws_restJson1RiskCounts(output.RiskCounts, context)
            : undefined,
        ShareInvitationId: output.ShareInvitationId !== undefined && output.ShareInvitationId !== null
            ? output.ShareInvitationId
            : undefined,
        Tags: output.Tags !== undefined && output.Tags !== null
            ? deserializeAws_restJson1TagMap(output.Tags, context)
            : undefined,
        UpdatedAt: output.UpdatedAt !== undefined && output.UpdatedAt !== null
            ? new Date(Math.round(output.UpdatedAt * 1000))
            : undefined,
        WorkloadArn: output.WorkloadArn !== undefined && output.WorkloadArn !== null ? output.WorkloadArn : undefined,
        WorkloadId: output.WorkloadId !== undefined && output.WorkloadId !== null ? output.WorkloadId : undefined,
        WorkloadName: output.WorkloadName !== undefined && output.WorkloadName !== null ? output.WorkloadName : undefined,
    };
};
const deserializeAws_restJson1WorkloadAccountIds = (output, context) => {
    return (output || [])
        .filter((e) => e != null)
        .map((entry) => {
        if (entry === null) {
            return null;
        }
        return entry;
    });
};
const deserializeAws_restJson1WorkloadAwsRegions = (output, context) => {
    return (output || [])
        .filter((e) => e != null)
        .map((entry) => {
        if (entry === null) {
            return null;
        }
        return entry;
    });
};
const deserializeAws_restJson1WorkloadLenses = (output, context) => {
    return (output || [])
        .filter((e) => e != null)
        .map((entry) => {
        if (entry === null) {
            return null;
        }
        return entry;
    });
};
const deserializeAws_restJson1WorkloadNonAwsRegions = (output, context) => {
    return (output || [])
        .filter((e) => e != null)
        .map((entry) => {
        if (entry === null) {
            return null;
        }
        return entry;
    });
};
const deserializeAws_restJson1WorkloadPillarPriorities = (output, context) => {
    return (output || [])
        .filter((e) => e != null)
        .map((entry) => {
        if (entry === null) {
            return null;
        }
        return entry;
    });
};
const deserializeAws_restJson1WorkloadShare = (output, context) => {
    return {
        PermissionType: output.PermissionType !== undefined && output.PermissionType !== null ? output.PermissionType : undefined,
        ShareId: output.ShareId !== undefined && output.ShareId !== null ? output.ShareId : undefined,
        SharedBy: output.SharedBy !== undefined && output.SharedBy !== null ? output.SharedBy : undefined,
        SharedWith: output.SharedWith !== undefined && output.SharedWith !== null ? output.SharedWith : undefined,
        Status: output.Status !== undefined && output.Status !== null ? output.Status : undefined,
        WorkloadId: output.WorkloadId !== undefined && output.WorkloadId !== null ? output.WorkloadId : undefined,
        WorkloadName: output.WorkloadName !== undefined && output.WorkloadName !== null ? output.WorkloadName : undefined,
    };
};
const deserializeAws_restJson1WorkloadShareSummaries = (output, context) => {
    return (output || [])
        .filter((e) => e != null)
        .map((entry) => {
        if (entry === null) {
            return null;
        }
        return deserializeAws_restJson1WorkloadShareSummary(entry, context);
    });
};
const deserializeAws_restJson1WorkloadShareSummary = (output, context) => {
    return {
        PermissionType: output.PermissionType !== undefined && output.PermissionType !== null ? output.PermissionType : undefined,
        ShareId: output.ShareId !== undefined && output.ShareId !== null ? output.ShareId : undefined,
        SharedWith: output.SharedWith !== undefined && output.SharedWith !== null ? output.SharedWith : undefined,
        Status: output.Status !== undefined && output.Status !== null ? output.Status : undefined,
    };
};
const deserializeAws_restJson1WorkloadSummaries = (output, context) => {
    return (output || [])
        .filter((e) => e != null)
        .map((entry) => {
        if (entry === null) {
            return null;
        }
        return deserializeAws_restJson1WorkloadSummary(entry, context);
    });
};
const deserializeAws_restJson1WorkloadSummary = (output, context) => {
    return {
        ImprovementStatus: output.ImprovementStatus !== undefined && output.ImprovementStatus !== null
            ? output.ImprovementStatus
            : undefined,
        Lenses: output.Lenses !== undefined && output.Lenses !== null
            ? deserializeAws_restJson1WorkloadLenses(output.Lenses, context)
            : undefined,
        Owner: output.Owner !== undefined && output.Owner !== null ? output.Owner : undefined,
        RiskCounts: output.RiskCounts !== undefined && output.RiskCounts !== null
            ? deserializeAws_restJson1RiskCounts(output.RiskCounts, context)
            : undefined,
        UpdatedAt: output.UpdatedAt !== undefined && output.UpdatedAt !== null
            ? new Date(Math.round(output.UpdatedAt * 1000))
            : undefined,
        WorkloadArn: output.WorkloadArn !== undefined && output.WorkloadArn !== null ? output.WorkloadArn : undefined,
        WorkloadId: output.WorkloadId !== undefined && output.WorkloadId !== null ? output.WorkloadId : undefined,
        WorkloadName: output.WorkloadName !== undefined && output.WorkloadName !== null ? output.WorkloadName : undefined,
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