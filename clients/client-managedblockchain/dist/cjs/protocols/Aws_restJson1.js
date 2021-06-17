"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.deserializeAws_restJson1VoteOnProposalCommand = exports.deserializeAws_restJson1UpdateNodeCommand = exports.deserializeAws_restJson1UpdateMemberCommand = exports.deserializeAws_restJson1UntagResourceCommand = exports.deserializeAws_restJson1TagResourceCommand = exports.deserializeAws_restJson1RejectInvitationCommand = exports.deserializeAws_restJson1ListTagsForResourceCommand = exports.deserializeAws_restJson1ListProposalVotesCommand = exports.deserializeAws_restJson1ListProposalsCommand = exports.deserializeAws_restJson1ListNodesCommand = exports.deserializeAws_restJson1ListNetworksCommand = exports.deserializeAws_restJson1ListMembersCommand = exports.deserializeAws_restJson1ListInvitationsCommand = exports.deserializeAws_restJson1GetProposalCommand = exports.deserializeAws_restJson1GetNodeCommand = exports.deserializeAws_restJson1GetNetworkCommand = exports.deserializeAws_restJson1GetMemberCommand = exports.deserializeAws_restJson1DeleteNodeCommand = exports.deserializeAws_restJson1DeleteMemberCommand = exports.deserializeAws_restJson1CreateProposalCommand = exports.deserializeAws_restJson1CreateNodeCommand = exports.deserializeAws_restJson1CreateNetworkCommand = exports.deserializeAws_restJson1CreateMemberCommand = exports.serializeAws_restJson1VoteOnProposalCommand = exports.serializeAws_restJson1UpdateNodeCommand = exports.serializeAws_restJson1UpdateMemberCommand = exports.serializeAws_restJson1UntagResourceCommand = exports.serializeAws_restJson1TagResourceCommand = exports.serializeAws_restJson1RejectInvitationCommand = exports.serializeAws_restJson1ListTagsForResourceCommand = exports.serializeAws_restJson1ListProposalVotesCommand = exports.serializeAws_restJson1ListProposalsCommand = exports.serializeAws_restJson1ListNodesCommand = exports.serializeAws_restJson1ListNetworksCommand = exports.serializeAws_restJson1ListMembersCommand = exports.serializeAws_restJson1ListInvitationsCommand = exports.serializeAws_restJson1GetProposalCommand = exports.serializeAws_restJson1GetNodeCommand = exports.serializeAws_restJson1GetNetworkCommand = exports.serializeAws_restJson1GetMemberCommand = exports.serializeAws_restJson1DeleteNodeCommand = exports.serializeAws_restJson1DeleteMemberCommand = exports.serializeAws_restJson1CreateProposalCommand = exports.serializeAws_restJson1CreateNodeCommand = exports.serializeAws_restJson1CreateNetworkCommand = exports.serializeAws_restJson1CreateMemberCommand = void 0;
const protocol_http_1 = require("@aws-sdk/protocol-http");
const smithy_client_1 = require("@aws-sdk/smithy-client");
const uuid_1 = require("uuid");
const serializeAws_restJson1CreateMemberCommand = async (input, context) => {
    var _a;
    const headers = {
        "content-type": "application/json",
    };
    let resolvedPath = "/networks/{NetworkId}/members";
    if (input.NetworkId !== undefined) {
        const labelValue = input.NetworkId;
        if (labelValue.length <= 0) {
            throw new Error("Empty value provided for input HTTP label: NetworkId.");
        }
        resolvedPath = resolvedPath.replace("{NetworkId}", smithy_client_1.extendedEncodeURIComponent(labelValue));
    }
    else {
        throw new Error("No value provided for input HTTP label: NetworkId.");
    }
    let body;
    body = JSON.stringify({
        ClientRequestToken: (_a = input.ClientRequestToken) !== null && _a !== void 0 ? _a : uuid_1.v4(),
        ...(input.InvitationId !== undefined && input.InvitationId !== null && { InvitationId: input.InvitationId }),
        ...(input.MemberConfiguration !== undefined &&
            input.MemberConfiguration !== null && {
            MemberConfiguration: serializeAws_restJson1MemberConfiguration(input.MemberConfiguration, context),
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
exports.serializeAws_restJson1CreateMemberCommand = serializeAws_restJson1CreateMemberCommand;
const serializeAws_restJson1CreateNetworkCommand = async (input, context) => {
    var _a;
    const headers = {
        "content-type": "application/json",
    };
    let resolvedPath = "/networks";
    let body;
    body = JSON.stringify({
        ClientRequestToken: (_a = input.ClientRequestToken) !== null && _a !== void 0 ? _a : uuid_1.v4(),
        ...(input.Description !== undefined && input.Description !== null && { Description: input.Description }),
        ...(input.Framework !== undefined && input.Framework !== null && { Framework: input.Framework }),
        ...(input.FrameworkConfiguration !== undefined &&
            input.FrameworkConfiguration !== null && {
            FrameworkConfiguration: serializeAws_restJson1NetworkFrameworkConfiguration(input.FrameworkConfiguration, context),
        }),
        ...(input.FrameworkVersion !== undefined &&
            input.FrameworkVersion !== null && { FrameworkVersion: input.FrameworkVersion }),
        ...(input.MemberConfiguration !== undefined &&
            input.MemberConfiguration !== null && {
            MemberConfiguration: serializeAws_restJson1MemberConfiguration(input.MemberConfiguration, context),
        }),
        ...(input.Name !== undefined && input.Name !== null && { Name: input.Name }),
        ...(input.Tags !== undefined &&
            input.Tags !== null && { Tags: serializeAws_restJson1InputTagMap(input.Tags, context) }),
        ...(input.VotingPolicy !== undefined &&
            input.VotingPolicy !== null && { VotingPolicy: serializeAws_restJson1VotingPolicy(input.VotingPolicy, context) }),
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
exports.serializeAws_restJson1CreateNetworkCommand = serializeAws_restJson1CreateNetworkCommand;
const serializeAws_restJson1CreateNodeCommand = async (input, context) => {
    var _a;
    const headers = {
        "content-type": "application/json",
    };
    let resolvedPath = "/networks/{NetworkId}/nodes";
    if (input.NetworkId !== undefined) {
        const labelValue = input.NetworkId;
        if (labelValue.length <= 0) {
            throw new Error("Empty value provided for input HTTP label: NetworkId.");
        }
        resolvedPath = resolvedPath.replace("{NetworkId}", smithy_client_1.extendedEncodeURIComponent(labelValue));
    }
    else {
        throw new Error("No value provided for input HTTP label: NetworkId.");
    }
    let body;
    body = JSON.stringify({
        ClientRequestToken: (_a = input.ClientRequestToken) !== null && _a !== void 0 ? _a : uuid_1.v4(),
        ...(input.MemberId !== undefined && input.MemberId !== null && { MemberId: input.MemberId }),
        ...(input.NodeConfiguration !== undefined &&
            input.NodeConfiguration !== null && {
            NodeConfiguration: serializeAws_restJson1NodeConfiguration(input.NodeConfiguration, context),
        }),
        ...(input.Tags !== undefined &&
            input.Tags !== null && { Tags: serializeAws_restJson1InputTagMap(input.Tags, context) }),
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
exports.serializeAws_restJson1CreateNodeCommand = serializeAws_restJson1CreateNodeCommand;
const serializeAws_restJson1CreateProposalCommand = async (input, context) => {
    var _a;
    const headers = {
        "content-type": "application/json",
    };
    let resolvedPath = "/networks/{NetworkId}/proposals";
    if (input.NetworkId !== undefined) {
        const labelValue = input.NetworkId;
        if (labelValue.length <= 0) {
            throw new Error("Empty value provided for input HTTP label: NetworkId.");
        }
        resolvedPath = resolvedPath.replace("{NetworkId}", smithy_client_1.extendedEncodeURIComponent(labelValue));
    }
    else {
        throw new Error("No value provided for input HTTP label: NetworkId.");
    }
    let body;
    body = JSON.stringify({
        ...(input.Actions !== undefined &&
            input.Actions !== null && { Actions: serializeAws_restJson1ProposalActions(input.Actions, context) }),
        ClientRequestToken: (_a = input.ClientRequestToken) !== null && _a !== void 0 ? _a : uuid_1.v4(),
        ...(input.Description !== undefined && input.Description !== null && { Description: input.Description }),
        ...(input.MemberId !== undefined && input.MemberId !== null && { MemberId: input.MemberId }),
        ...(input.Tags !== undefined &&
            input.Tags !== null && { Tags: serializeAws_restJson1InputTagMap(input.Tags, context) }),
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
exports.serializeAws_restJson1CreateProposalCommand = serializeAws_restJson1CreateProposalCommand;
const serializeAws_restJson1DeleteMemberCommand = async (input, context) => {
    const headers = {};
    let resolvedPath = "/networks/{NetworkId}/members/{MemberId}";
    if (input.NetworkId !== undefined) {
        const labelValue = input.NetworkId;
        if (labelValue.length <= 0) {
            throw new Error("Empty value provided for input HTTP label: NetworkId.");
        }
        resolvedPath = resolvedPath.replace("{NetworkId}", smithy_client_1.extendedEncodeURIComponent(labelValue));
    }
    else {
        throw new Error("No value provided for input HTTP label: NetworkId.");
    }
    if (input.MemberId !== undefined) {
        const labelValue = input.MemberId;
        if (labelValue.length <= 0) {
            throw new Error("Empty value provided for input HTTP label: MemberId.");
        }
        resolvedPath = resolvedPath.replace("{MemberId}", smithy_client_1.extendedEncodeURIComponent(labelValue));
    }
    else {
        throw new Error("No value provided for input HTTP label: MemberId.");
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
const serializeAws_restJson1DeleteNodeCommand = async (input, context) => {
    const headers = {};
    let resolvedPath = "/networks/{NetworkId}/nodes/{NodeId}";
    if (input.NetworkId !== undefined) {
        const labelValue = input.NetworkId;
        if (labelValue.length <= 0) {
            throw new Error("Empty value provided for input HTTP label: NetworkId.");
        }
        resolvedPath = resolvedPath.replace("{NetworkId}", smithy_client_1.extendedEncodeURIComponent(labelValue));
    }
    else {
        throw new Error("No value provided for input HTTP label: NetworkId.");
    }
    if (input.NodeId !== undefined) {
        const labelValue = input.NodeId;
        if (labelValue.length <= 0) {
            throw new Error("Empty value provided for input HTTP label: NodeId.");
        }
        resolvedPath = resolvedPath.replace("{NodeId}", smithy_client_1.extendedEncodeURIComponent(labelValue));
    }
    else {
        throw new Error("No value provided for input HTTP label: NodeId.");
    }
    const query = {
        ...(input.MemberId !== undefined && { memberId: input.MemberId }),
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
exports.serializeAws_restJson1DeleteNodeCommand = serializeAws_restJson1DeleteNodeCommand;
const serializeAws_restJson1GetMemberCommand = async (input, context) => {
    const headers = {};
    let resolvedPath = "/networks/{NetworkId}/members/{MemberId}";
    if (input.NetworkId !== undefined) {
        const labelValue = input.NetworkId;
        if (labelValue.length <= 0) {
            throw new Error("Empty value provided for input HTTP label: NetworkId.");
        }
        resolvedPath = resolvedPath.replace("{NetworkId}", smithy_client_1.extendedEncodeURIComponent(labelValue));
    }
    else {
        throw new Error("No value provided for input HTTP label: NetworkId.");
    }
    if (input.MemberId !== undefined) {
        const labelValue = input.MemberId;
        if (labelValue.length <= 0) {
            throw new Error("Empty value provided for input HTTP label: MemberId.");
        }
        resolvedPath = resolvedPath.replace("{MemberId}", smithy_client_1.extendedEncodeURIComponent(labelValue));
    }
    else {
        throw new Error("No value provided for input HTTP label: MemberId.");
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
const serializeAws_restJson1GetNetworkCommand = async (input, context) => {
    const headers = {};
    let resolvedPath = "/networks/{NetworkId}";
    if (input.NetworkId !== undefined) {
        const labelValue = input.NetworkId;
        if (labelValue.length <= 0) {
            throw new Error("Empty value provided for input HTTP label: NetworkId.");
        }
        resolvedPath = resolvedPath.replace("{NetworkId}", smithy_client_1.extendedEncodeURIComponent(labelValue));
    }
    else {
        throw new Error("No value provided for input HTTP label: NetworkId.");
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
exports.serializeAws_restJson1GetNetworkCommand = serializeAws_restJson1GetNetworkCommand;
const serializeAws_restJson1GetNodeCommand = async (input, context) => {
    const headers = {};
    let resolvedPath = "/networks/{NetworkId}/nodes/{NodeId}";
    if (input.NetworkId !== undefined) {
        const labelValue = input.NetworkId;
        if (labelValue.length <= 0) {
            throw new Error("Empty value provided for input HTTP label: NetworkId.");
        }
        resolvedPath = resolvedPath.replace("{NetworkId}", smithy_client_1.extendedEncodeURIComponent(labelValue));
    }
    else {
        throw new Error("No value provided for input HTTP label: NetworkId.");
    }
    if (input.NodeId !== undefined) {
        const labelValue = input.NodeId;
        if (labelValue.length <= 0) {
            throw new Error("Empty value provided for input HTTP label: NodeId.");
        }
        resolvedPath = resolvedPath.replace("{NodeId}", smithy_client_1.extendedEncodeURIComponent(labelValue));
    }
    else {
        throw new Error("No value provided for input HTTP label: NodeId.");
    }
    const query = {
        ...(input.MemberId !== undefined && { memberId: input.MemberId }),
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
exports.serializeAws_restJson1GetNodeCommand = serializeAws_restJson1GetNodeCommand;
const serializeAws_restJson1GetProposalCommand = async (input, context) => {
    const headers = {};
    let resolvedPath = "/networks/{NetworkId}/proposals/{ProposalId}";
    if (input.NetworkId !== undefined) {
        const labelValue = input.NetworkId;
        if (labelValue.length <= 0) {
            throw new Error("Empty value provided for input HTTP label: NetworkId.");
        }
        resolvedPath = resolvedPath.replace("{NetworkId}", smithy_client_1.extendedEncodeURIComponent(labelValue));
    }
    else {
        throw new Error("No value provided for input HTTP label: NetworkId.");
    }
    if (input.ProposalId !== undefined) {
        const labelValue = input.ProposalId;
        if (labelValue.length <= 0) {
            throw new Error("Empty value provided for input HTTP label: ProposalId.");
        }
        resolvedPath = resolvedPath.replace("{ProposalId}", smithy_client_1.extendedEncodeURIComponent(labelValue));
    }
    else {
        throw new Error("No value provided for input HTTP label: ProposalId.");
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
exports.serializeAws_restJson1GetProposalCommand = serializeAws_restJson1GetProposalCommand;
const serializeAws_restJson1ListInvitationsCommand = async (input, context) => {
    const headers = {};
    let resolvedPath = "/invitations";
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
const serializeAws_restJson1ListMembersCommand = async (input, context) => {
    const headers = {};
    let resolvedPath = "/networks/{NetworkId}/members";
    if (input.NetworkId !== undefined) {
        const labelValue = input.NetworkId;
        if (labelValue.length <= 0) {
            throw new Error("Empty value provided for input HTTP label: NetworkId.");
        }
        resolvedPath = resolvedPath.replace("{NetworkId}", smithy_client_1.extendedEncodeURIComponent(labelValue));
    }
    else {
        throw new Error("No value provided for input HTTP label: NetworkId.");
    }
    const query = {
        ...(input.Name !== undefined && { name: input.Name }),
        ...(input.Status !== undefined && { status: input.Status }),
        ...(input.IsOwned !== undefined && { isOwned: input.IsOwned.toString() }),
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
exports.serializeAws_restJson1ListMembersCommand = serializeAws_restJson1ListMembersCommand;
const serializeAws_restJson1ListNetworksCommand = async (input, context) => {
    const headers = {};
    let resolvedPath = "/networks";
    const query = {
        ...(input.Name !== undefined && { name: input.Name }),
        ...(input.Framework !== undefined && { framework: input.Framework }),
        ...(input.Status !== undefined && { status: input.Status }),
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
exports.serializeAws_restJson1ListNetworksCommand = serializeAws_restJson1ListNetworksCommand;
const serializeAws_restJson1ListNodesCommand = async (input, context) => {
    const headers = {};
    let resolvedPath = "/networks/{NetworkId}/nodes";
    if (input.NetworkId !== undefined) {
        const labelValue = input.NetworkId;
        if (labelValue.length <= 0) {
            throw new Error("Empty value provided for input HTTP label: NetworkId.");
        }
        resolvedPath = resolvedPath.replace("{NetworkId}", smithy_client_1.extendedEncodeURIComponent(labelValue));
    }
    else {
        throw new Error("No value provided for input HTTP label: NetworkId.");
    }
    const query = {
        ...(input.MemberId !== undefined && { memberId: input.MemberId }),
        ...(input.Status !== undefined && { status: input.Status }),
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
exports.serializeAws_restJson1ListNodesCommand = serializeAws_restJson1ListNodesCommand;
const serializeAws_restJson1ListProposalsCommand = async (input, context) => {
    const headers = {};
    let resolvedPath = "/networks/{NetworkId}/proposals";
    if (input.NetworkId !== undefined) {
        const labelValue = input.NetworkId;
        if (labelValue.length <= 0) {
            throw new Error("Empty value provided for input HTTP label: NetworkId.");
        }
        resolvedPath = resolvedPath.replace("{NetworkId}", smithy_client_1.extendedEncodeURIComponent(labelValue));
    }
    else {
        throw new Error("No value provided for input HTTP label: NetworkId.");
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
exports.serializeAws_restJson1ListProposalsCommand = serializeAws_restJson1ListProposalsCommand;
const serializeAws_restJson1ListProposalVotesCommand = async (input, context) => {
    const headers = {};
    let resolvedPath = "/networks/{NetworkId}/proposals/{ProposalId}/votes";
    if (input.NetworkId !== undefined) {
        const labelValue = input.NetworkId;
        if (labelValue.length <= 0) {
            throw new Error("Empty value provided for input HTTP label: NetworkId.");
        }
        resolvedPath = resolvedPath.replace("{NetworkId}", smithy_client_1.extendedEncodeURIComponent(labelValue));
    }
    else {
        throw new Error("No value provided for input HTTP label: NetworkId.");
    }
    if (input.ProposalId !== undefined) {
        const labelValue = input.ProposalId;
        if (labelValue.length <= 0) {
            throw new Error("Empty value provided for input HTTP label: ProposalId.");
        }
        resolvedPath = resolvedPath.replace("{ProposalId}", smithy_client_1.extendedEncodeURIComponent(labelValue));
    }
    else {
        throw new Error("No value provided for input HTTP label: ProposalId.");
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
exports.serializeAws_restJson1ListProposalVotesCommand = serializeAws_restJson1ListProposalVotesCommand;
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
const serializeAws_restJson1RejectInvitationCommand = async (input, context) => {
    const headers = {};
    let resolvedPath = "/invitations/{InvitationId}";
    if (input.InvitationId !== undefined) {
        const labelValue = input.InvitationId;
        if (labelValue.length <= 0) {
            throw new Error("Empty value provided for input HTTP label: InvitationId.");
        }
        resolvedPath = resolvedPath.replace("{InvitationId}", smithy_client_1.extendedEncodeURIComponent(labelValue));
    }
    else {
        throw new Error("No value provided for input HTTP label: InvitationId.");
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
exports.serializeAws_restJson1RejectInvitationCommand = serializeAws_restJson1RejectInvitationCommand;
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
        ...(input.Tags !== undefined &&
            input.Tags !== null && { Tags: serializeAws_restJson1InputTagMap(input.Tags, context) }),
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
const serializeAws_restJson1UpdateMemberCommand = async (input, context) => {
    const headers = {
        "content-type": "application/json",
    };
    let resolvedPath = "/networks/{NetworkId}/members/{MemberId}";
    if (input.NetworkId !== undefined) {
        const labelValue = input.NetworkId;
        if (labelValue.length <= 0) {
            throw new Error("Empty value provided for input HTTP label: NetworkId.");
        }
        resolvedPath = resolvedPath.replace("{NetworkId}", smithy_client_1.extendedEncodeURIComponent(labelValue));
    }
    else {
        throw new Error("No value provided for input HTTP label: NetworkId.");
    }
    if (input.MemberId !== undefined) {
        const labelValue = input.MemberId;
        if (labelValue.length <= 0) {
            throw new Error("Empty value provided for input HTTP label: MemberId.");
        }
        resolvedPath = resolvedPath.replace("{MemberId}", smithy_client_1.extendedEncodeURIComponent(labelValue));
    }
    else {
        throw new Error("No value provided for input HTTP label: MemberId.");
    }
    let body;
    body = JSON.stringify({
        ...(input.LogPublishingConfiguration !== undefined &&
            input.LogPublishingConfiguration !== null && {
            LogPublishingConfiguration: serializeAws_restJson1MemberLogPublishingConfiguration(input.LogPublishingConfiguration, context),
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
exports.serializeAws_restJson1UpdateMemberCommand = serializeAws_restJson1UpdateMemberCommand;
const serializeAws_restJson1UpdateNodeCommand = async (input, context) => {
    const headers = {
        "content-type": "application/json",
    };
    let resolvedPath = "/networks/{NetworkId}/nodes/{NodeId}";
    if (input.NetworkId !== undefined) {
        const labelValue = input.NetworkId;
        if (labelValue.length <= 0) {
            throw new Error("Empty value provided for input HTTP label: NetworkId.");
        }
        resolvedPath = resolvedPath.replace("{NetworkId}", smithy_client_1.extendedEncodeURIComponent(labelValue));
    }
    else {
        throw new Error("No value provided for input HTTP label: NetworkId.");
    }
    if (input.NodeId !== undefined) {
        const labelValue = input.NodeId;
        if (labelValue.length <= 0) {
            throw new Error("Empty value provided for input HTTP label: NodeId.");
        }
        resolvedPath = resolvedPath.replace("{NodeId}", smithy_client_1.extendedEncodeURIComponent(labelValue));
    }
    else {
        throw new Error("No value provided for input HTTP label: NodeId.");
    }
    let body;
    body = JSON.stringify({
        ...(input.LogPublishingConfiguration !== undefined &&
            input.LogPublishingConfiguration !== null && {
            LogPublishingConfiguration: serializeAws_restJson1NodeLogPublishingConfiguration(input.LogPublishingConfiguration, context),
        }),
        ...(input.MemberId !== undefined && input.MemberId !== null && { MemberId: input.MemberId }),
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
exports.serializeAws_restJson1UpdateNodeCommand = serializeAws_restJson1UpdateNodeCommand;
const serializeAws_restJson1VoteOnProposalCommand = async (input, context) => {
    const headers = {
        "content-type": "application/json",
    };
    let resolvedPath = "/networks/{NetworkId}/proposals/{ProposalId}/votes";
    if (input.NetworkId !== undefined) {
        const labelValue = input.NetworkId;
        if (labelValue.length <= 0) {
            throw new Error("Empty value provided for input HTTP label: NetworkId.");
        }
        resolvedPath = resolvedPath.replace("{NetworkId}", smithy_client_1.extendedEncodeURIComponent(labelValue));
    }
    else {
        throw new Error("No value provided for input HTTP label: NetworkId.");
    }
    if (input.ProposalId !== undefined) {
        const labelValue = input.ProposalId;
        if (labelValue.length <= 0) {
            throw new Error("Empty value provided for input HTTP label: ProposalId.");
        }
        resolvedPath = resolvedPath.replace("{ProposalId}", smithy_client_1.extendedEncodeURIComponent(labelValue));
    }
    else {
        throw new Error("No value provided for input HTTP label: ProposalId.");
    }
    let body;
    body = JSON.stringify({
        ...(input.Vote !== undefined && input.Vote !== null && { Vote: input.Vote }),
        ...(input.VoterMemberId !== undefined && input.VoterMemberId !== null && { VoterMemberId: input.VoterMemberId }),
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
exports.serializeAws_restJson1VoteOnProposalCommand = serializeAws_restJson1VoteOnProposalCommand;
const deserializeAws_restJson1CreateMemberCommand = async (output, context) => {
    if (output.statusCode !== 200 && output.statusCode >= 300) {
        return deserializeAws_restJson1CreateMemberCommandError(output, context);
    }
    const contents = {
        $metadata: deserializeMetadata(output),
        MemberId: undefined,
    };
    const data = await parseBody(output.body, context);
    if (data.MemberId !== undefined && data.MemberId !== null) {
        contents.MemberId = data.MemberId;
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
        case "com.amazonaws.managedblockchain#AccessDeniedException":
            response = {
                ...(await deserializeAws_restJson1AccessDeniedExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InternalServiceErrorException":
        case "com.amazonaws.managedblockchain#InternalServiceErrorException":
            response = {
                ...(await deserializeAws_restJson1InternalServiceErrorExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InvalidRequestException":
        case "com.amazonaws.managedblockchain#InvalidRequestException":
            response = {
                ...(await deserializeAws_restJson1InvalidRequestExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ResourceAlreadyExistsException":
        case "com.amazonaws.managedblockchain#ResourceAlreadyExistsException":
            response = {
                ...(await deserializeAws_restJson1ResourceAlreadyExistsExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ResourceLimitExceededException":
        case "com.amazonaws.managedblockchain#ResourceLimitExceededException":
            response = {
                ...(await deserializeAws_restJson1ResourceLimitExceededExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ResourceNotFoundException":
        case "com.amazonaws.managedblockchain#ResourceNotFoundException":
            response = {
                ...(await deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ResourceNotReadyException":
        case "com.amazonaws.managedblockchain#ResourceNotReadyException":
            response = {
                ...(await deserializeAws_restJson1ResourceNotReadyExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ThrottlingException":
        case "com.amazonaws.managedblockchain#ThrottlingException":
            response = {
                ...(await deserializeAws_restJson1ThrottlingExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "TooManyTagsException":
        case "com.amazonaws.managedblockchain#TooManyTagsException":
            response = {
                ...(await deserializeAws_restJson1TooManyTagsExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        default:
            const parsedBody = parsedOutput.body;
            errorCode = parsedBody.code || parsedBody.Code || errorCode;
            response = {
                ...parsedBody,
                name: `${errorCode}`,
                message: parsedBody.message || parsedBody.Message || errorCode,
                $fault: "client",
                $metadata: deserializeMetadata(output),
            };
    }
    const message = response.message || response.Message || errorCode;
    response.message = message;
    delete response.Message;
    return Promise.reject(Object.assign(new Error(message), response));
};
const deserializeAws_restJson1CreateNetworkCommand = async (output, context) => {
    if (output.statusCode !== 200 && output.statusCode >= 300) {
        return deserializeAws_restJson1CreateNetworkCommandError(output, context);
    }
    const contents = {
        $metadata: deserializeMetadata(output),
        MemberId: undefined,
        NetworkId: undefined,
    };
    const data = await parseBody(output.body, context);
    if (data.MemberId !== undefined && data.MemberId !== null) {
        contents.MemberId = data.MemberId;
    }
    if (data.NetworkId !== undefined && data.NetworkId !== null) {
        contents.NetworkId = data.NetworkId;
    }
    return Promise.resolve(contents);
};
exports.deserializeAws_restJson1CreateNetworkCommand = deserializeAws_restJson1CreateNetworkCommand;
const deserializeAws_restJson1CreateNetworkCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "AccessDeniedException":
        case "com.amazonaws.managedblockchain#AccessDeniedException":
            response = {
                ...(await deserializeAws_restJson1AccessDeniedExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InternalServiceErrorException":
        case "com.amazonaws.managedblockchain#InternalServiceErrorException":
            response = {
                ...(await deserializeAws_restJson1InternalServiceErrorExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InvalidRequestException":
        case "com.amazonaws.managedblockchain#InvalidRequestException":
            response = {
                ...(await deserializeAws_restJson1InvalidRequestExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ResourceAlreadyExistsException":
        case "com.amazonaws.managedblockchain#ResourceAlreadyExistsException":
            response = {
                ...(await deserializeAws_restJson1ResourceAlreadyExistsExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ResourceLimitExceededException":
        case "com.amazonaws.managedblockchain#ResourceLimitExceededException":
            response = {
                ...(await deserializeAws_restJson1ResourceLimitExceededExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ThrottlingException":
        case "com.amazonaws.managedblockchain#ThrottlingException":
            response = {
                ...(await deserializeAws_restJson1ThrottlingExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "TooManyTagsException":
        case "com.amazonaws.managedblockchain#TooManyTagsException":
            response = {
                ...(await deserializeAws_restJson1TooManyTagsExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        default:
            const parsedBody = parsedOutput.body;
            errorCode = parsedBody.code || parsedBody.Code || errorCode;
            response = {
                ...parsedBody,
                name: `${errorCode}`,
                message: parsedBody.message || parsedBody.Message || errorCode,
                $fault: "client",
                $metadata: deserializeMetadata(output),
            };
    }
    const message = response.message || response.Message || errorCode;
    response.message = message;
    delete response.Message;
    return Promise.reject(Object.assign(new Error(message), response));
};
const deserializeAws_restJson1CreateNodeCommand = async (output, context) => {
    if (output.statusCode !== 200 && output.statusCode >= 300) {
        return deserializeAws_restJson1CreateNodeCommandError(output, context);
    }
    const contents = {
        $metadata: deserializeMetadata(output),
        NodeId: undefined,
    };
    const data = await parseBody(output.body, context);
    if (data.NodeId !== undefined && data.NodeId !== null) {
        contents.NodeId = data.NodeId;
    }
    return Promise.resolve(contents);
};
exports.deserializeAws_restJson1CreateNodeCommand = deserializeAws_restJson1CreateNodeCommand;
const deserializeAws_restJson1CreateNodeCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "AccessDeniedException":
        case "com.amazonaws.managedblockchain#AccessDeniedException":
            response = {
                ...(await deserializeAws_restJson1AccessDeniedExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InternalServiceErrorException":
        case "com.amazonaws.managedblockchain#InternalServiceErrorException":
            response = {
                ...(await deserializeAws_restJson1InternalServiceErrorExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InvalidRequestException":
        case "com.amazonaws.managedblockchain#InvalidRequestException":
            response = {
                ...(await deserializeAws_restJson1InvalidRequestExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ResourceAlreadyExistsException":
        case "com.amazonaws.managedblockchain#ResourceAlreadyExistsException":
            response = {
                ...(await deserializeAws_restJson1ResourceAlreadyExistsExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ResourceLimitExceededException":
        case "com.amazonaws.managedblockchain#ResourceLimitExceededException":
            response = {
                ...(await deserializeAws_restJson1ResourceLimitExceededExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ResourceNotFoundException":
        case "com.amazonaws.managedblockchain#ResourceNotFoundException":
            response = {
                ...(await deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ResourceNotReadyException":
        case "com.amazonaws.managedblockchain#ResourceNotReadyException":
            response = {
                ...(await deserializeAws_restJson1ResourceNotReadyExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ThrottlingException":
        case "com.amazonaws.managedblockchain#ThrottlingException":
            response = {
                ...(await deserializeAws_restJson1ThrottlingExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "TooManyTagsException":
        case "com.amazonaws.managedblockchain#TooManyTagsException":
            response = {
                ...(await deserializeAws_restJson1TooManyTagsExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        default:
            const parsedBody = parsedOutput.body;
            errorCode = parsedBody.code || parsedBody.Code || errorCode;
            response = {
                ...parsedBody,
                name: `${errorCode}`,
                message: parsedBody.message || parsedBody.Message || errorCode,
                $fault: "client",
                $metadata: deserializeMetadata(output),
            };
    }
    const message = response.message || response.Message || errorCode;
    response.message = message;
    delete response.Message;
    return Promise.reject(Object.assign(new Error(message), response));
};
const deserializeAws_restJson1CreateProposalCommand = async (output, context) => {
    if (output.statusCode !== 200 && output.statusCode >= 300) {
        return deserializeAws_restJson1CreateProposalCommandError(output, context);
    }
    const contents = {
        $metadata: deserializeMetadata(output),
        ProposalId: undefined,
    };
    const data = await parseBody(output.body, context);
    if (data.ProposalId !== undefined && data.ProposalId !== null) {
        contents.ProposalId = data.ProposalId;
    }
    return Promise.resolve(contents);
};
exports.deserializeAws_restJson1CreateProposalCommand = deserializeAws_restJson1CreateProposalCommand;
const deserializeAws_restJson1CreateProposalCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "AccessDeniedException":
        case "com.amazonaws.managedblockchain#AccessDeniedException":
            response = {
                ...(await deserializeAws_restJson1AccessDeniedExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InternalServiceErrorException":
        case "com.amazonaws.managedblockchain#InternalServiceErrorException":
            response = {
                ...(await deserializeAws_restJson1InternalServiceErrorExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InvalidRequestException":
        case "com.amazonaws.managedblockchain#InvalidRequestException":
            response = {
                ...(await deserializeAws_restJson1InvalidRequestExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ResourceNotFoundException":
        case "com.amazonaws.managedblockchain#ResourceNotFoundException":
            response = {
                ...(await deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ResourceNotReadyException":
        case "com.amazonaws.managedblockchain#ResourceNotReadyException":
            response = {
                ...(await deserializeAws_restJson1ResourceNotReadyExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ThrottlingException":
        case "com.amazonaws.managedblockchain#ThrottlingException":
            response = {
                ...(await deserializeAws_restJson1ThrottlingExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "TooManyTagsException":
        case "com.amazonaws.managedblockchain#TooManyTagsException":
            response = {
                ...(await deserializeAws_restJson1TooManyTagsExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        default:
            const parsedBody = parsedOutput.body;
            errorCode = parsedBody.code || parsedBody.Code || errorCode;
            response = {
                ...parsedBody,
                name: `${errorCode}`,
                message: parsedBody.message || parsedBody.Message || errorCode,
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
        case "com.amazonaws.managedblockchain#AccessDeniedException":
            response = {
                ...(await deserializeAws_restJson1AccessDeniedExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InternalServiceErrorException":
        case "com.amazonaws.managedblockchain#InternalServiceErrorException":
            response = {
                ...(await deserializeAws_restJson1InternalServiceErrorExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InvalidRequestException":
        case "com.amazonaws.managedblockchain#InvalidRequestException":
            response = {
                ...(await deserializeAws_restJson1InvalidRequestExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ResourceNotFoundException":
        case "com.amazonaws.managedblockchain#ResourceNotFoundException":
            response = {
                ...(await deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ResourceNotReadyException":
        case "com.amazonaws.managedblockchain#ResourceNotReadyException":
            response = {
                ...(await deserializeAws_restJson1ResourceNotReadyExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ThrottlingException":
        case "com.amazonaws.managedblockchain#ThrottlingException":
            response = {
                ...(await deserializeAws_restJson1ThrottlingExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        default:
            const parsedBody = parsedOutput.body;
            errorCode = parsedBody.code || parsedBody.Code || errorCode;
            response = {
                ...parsedBody,
                name: `${errorCode}`,
                message: parsedBody.message || parsedBody.Message || errorCode,
                $fault: "client",
                $metadata: deserializeMetadata(output),
            };
    }
    const message = response.message || response.Message || errorCode;
    response.message = message;
    delete response.Message;
    return Promise.reject(Object.assign(new Error(message), response));
};
const deserializeAws_restJson1DeleteNodeCommand = async (output, context) => {
    if (output.statusCode !== 200 && output.statusCode >= 300) {
        return deserializeAws_restJson1DeleteNodeCommandError(output, context);
    }
    const contents = {
        $metadata: deserializeMetadata(output),
    };
    await collectBody(output.body, context);
    return Promise.resolve(contents);
};
exports.deserializeAws_restJson1DeleteNodeCommand = deserializeAws_restJson1DeleteNodeCommand;
const deserializeAws_restJson1DeleteNodeCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "AccessDeniedException":
        case "com.amazonaws.managedblockchain#AccessDeniedException":
            response = {
                ...(await deserializeAws_restJson1AccessDeniedExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InternalServiceErrorException":
        case "com.amazonaws.managedblockchain#InternalServiceErrorException":
            response = {
                ...(await deserializeAws_restJson1InternalServiceErrorExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InvalidRequestException":
        case "com.amazonaws.managedblockchain#InvalidRequestException":
            response = {
                ...(await deserializeAws_restJson1InvalidRequestExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ResourceNotFoundException":
        case "com.amazonaws.managedblockchain#ResourceNotFoundException":
            response = {
                ...(await deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ResourceNotReadyException":
        case "com.amazonaws.managedblockchain#ResourceNotReadyException":
            response = {
                ...(await deserializeAws_restJson1ResourceNotReadyExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ThrottlingException":
        case "com.amazonaws.managedblockchain#ThrottlingException":
            response = {
                ...(await deserializeAws_restJson1ThrottlingExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        default:
            const parsedBody = parsedOutput.body;
            errorCode = parsedBody.code || parsedBody.Code || errorCode;
            response = {
                ...parsedBody,
                name: `${errorCode}`,
                message: parsedBody.message || parsedBody.Message || errorCode,
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
        Member: undefined,
    };
    const data = await parseBody(output.body, context);
    if (data.Member !== undefined && data.Member !== null) {
        contents.Member = deserializeAws_restJson1Member(data.Member, context);
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
        case "com.amazonaws.managedblockchain#AccessDeniedException":
            response = {
                ...(await deserializeAws_restJson1AccessDeniedExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InternalServiceErrorException":
        case "com.amazonaws.managedblockchain#InternalServiceErrorException":
            response = {
                ...(await deserializeAws_restJson1InternalServiceErrorExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InvalidRequestException":
        case "com.amazonaws.managedblockchain#InvalidRequestException":
            response = {
                ...(await deserializeAws_restJson1InvalidRequestExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ResourceNotFoundException":
        case "com.amazonaws.managedblockchain#ResourceNotFoundException":
            response = {
                ...(await deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ThrottlingException":
        case "com.amazonaws.managedblockchain#ThrottlingException":
            response = {
                ...(await deserializeAws_restJson1ThrottlingExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        default:
            const parsedBody = parsedOutput.body;
            errorCode = parsedBody.code || parsedBody.Code || errorCode;
            response = {
                ...parsedBody,
                name: `${errorCode}`,
                message: parsedBody.message || parsedBody.Message || errorCode,
                $fault: "client",
                $metadata: deserializeMetadata(output),
            };
    }
    const message = response.message || response.Message || errorCode;
    response.message = message;
    delete response.Message;
    return Promise.reject(Object.assign(new Error(message), response));
};
const deserializeAws_restJson1GetNetworkCommand = async (output, context) => {
    if (output.statusCode !== 200 && output.statusCode >= 300) {
        return deserializeAws_restJson1GetNetworkCommandError(output, context);
    }
    const contents = {
        $metadata: deserializeMetadata(output),
        Network: undefined,
    };
    const data = await parseBody(output.body, context);
    if (data.Network !== undefined && data.Network !== null) {
        contents.Network = deserializeAws_restJson1Network(data.Network, context);
    }
    return Promise.resolve(contents);
};
exports.deserializeAws_restJson1GetNetworkCommand = deserializeAws_restJson1GetNetworkCommand;
const deserializeAws_restJson1GetNetworkCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "AccessDeniedException":
        case "com.amazonaws.managedblockchain#AccessDeniedException":
            response = {
                ...(await deserializeAws_restJson1AccessDeniedExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InternalServiceErrorException":
        case "com.amazonaws.managedblockchain#InternalServiceErrorException":
            response = {
                ...(await deserializeAws_restJson1InternalServiceErrorExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InvalidRequestException":
        case "com.amazonaws.managedblockchain#InvalidRequestException":
            response = {
                ...(await deserializeAws_restJson1InvalidRequestExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ResourceNotFoundException":
        case "com.amazonaws.managedblockchain#ResourceNotFoundException":
            response = {
                ...(await deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ThrottlingException":
        case "com.amazonaws.managedblockchain#ThrottlingException":
            response = {
                ...(await deserializeAws_restJson1ThrottlingExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        default:
            const parsedBody = parsedOutput.body;
            errorCode = parsedBody.code || parsedBody.Code || errorCode;
            response = {
                ...parsedBody,
                name: `${errorCode}`,
                message: parsedBody.message || parsedBody.Message || errorCode,
                $fault: "client",
                $metadata: deserializeMetadata(output),
            };
    }
    const message = response.message || response.Message || errorCode;
    response.message = message;
    delete response.Message;
    return Promise.reject(Object.assign(new Error(message), response));
};
const deserializeAws_restJson1GetNodeCommand = async (output, context) => {
    if (output.statusCode !== 200 && output.statusCode >= 300) {
        return deserializeAws_restJson1GetNodeCommandError(output, context);
    }
    const contents = {
        $metadata: deserializeMetadata(output),
        Node: undefined,
    };
    const data = await parseBody(output.body, context);
    if (data.Node !== undefined && data.Node !== null) {
        contents.Node = deserializeAws_restJson1Node(data.Node, context);
    }
    return Promise.resolve(contents);
};
exports.deserializeAws_restJson1GetNodeCommand = deserializeAws_restJson1GetNodeCommand;
const deserializeAws_restJson1GetNodeCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "AccessDeniedException":
        case "com.amazonaws.managedblockchain#AccessDeniedException":
            response = {
                ...(await deserializeAws_restJson1AccessDeniedExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InternalServiceErrorException":
        case "com.amazonaws.managedblockchain#InternalServiceErrorException":
            response = {
                ...(await deserializeAws_restJson1InternalServiceErrorExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InvalidRequestException":
        case "com.amazonaws.managedblockchain#InvalidRequestException":
            response = {
                ...(await deserializeAws_restJson1InvalidRequestExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ResourceNotFoundException":
        case "com.amazonaws.managedblockchain#ResourceNotFoundException":
            response = {
                ...(await deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ThrottlingException":
        case "com.amazonaws.managedblockchain#ThrottlingException":
            response = {
                ...(await deserializeAws_restJson1ThrottlingExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        default:
            const parsedBody = parsedOutput.body;
            errorCode = parsedBody.code || parsedBody.Code || errorCode;
            response = {
                ...parsedBody,
                name: `${errorCode}`,
                message: parsedBody.message || parsedBody.Message || errorCode,
                $fault: "client",
                $metadata: deserializeMetadata(output),
            };
    }
    const message = response.message || response.Message || errorCode;
    response.message = message;
    delete response.Message;
    return Promise.reject(Object.assign(new Error(message), response));
};
const deserializeAws_restJson1GetProposalCommand = async (output, context) => {
    if (output.statusCode !== 200 && output.statusCode >= 300) {
        return deserializeAws_restJson1GetProposalCommandError(output, context);
    }
    const contents = {
        $metadata: deserializeMetadata(output),
        Proposal: undefined,
    };
    const data = await parseBody(output.body, context);
    if (data.Proposal !== undefined && data.Proposal !== null) {
        contents.Proposal = deserializeAws_restJson1Proposal(data.Proposal, context);
    }
    return Promise.resolve(contents);
};
exports.deserializeAws_restJson1GetProposalCommand = deserializeAws_restJson1GetProposalCommand;
const deserializeAws_restJson1GetProposalCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "AccessDeniedException":
        case "com.amazonaws.managedblockchain#AccessDeniedException":
            response = {
                ...(await deserializeAws_restJson1AccessDeniedExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InternalServiceErrorException":
        case "com.amazonaws.managedblockchain#InternalServiceErrorException":
            response = {
                ...(await deserializeAws_restJson1InternalServiceErrorExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InvalidRequestException":
        case "com.amazonaws.managedblockchain#InvalidRequestException":
            response = {
                ...(await deserializeAws_restJson1InvalidRequestExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ResourceNotFoundException":
        case "com.amazonaws.managedblockchain#ResourceNotFoundException":
            response = {
                ...(await deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ThrottlingException":
        case "com.amazonaws.managedblockchain#ThrottlingException":
            response = {
                ...(await deserializeAws_restJson1ThrottlingExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        default:
            const parsedBody = parsedOutput.body;
            errorCode = parsedBody.code || parsedBody.Code || errorCode;
            response = {
                ...parsedBody,
                name: `${errorCode}`,
                message: parsedBody.message || parsedBody.Message || errorCode,
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
    if (data.Invitations !== undefined && data.Invitations !== null) {
        contents.Invitations = deserializeAws_restJson1InvitationList(data.Invitations, context);
    }
    if (data.NextToken !== undefined && data.NextToken !== null) {
        contents.NextToken = data.NextToken;
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
        case "com.amazonaws.managedblockchain#AccessDeniedException":
            response = {
                ...(await deserializeAws_restJson1AccessDeniedExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InternalServiceErrorException":
        case "com.amazonaws.managedblockchain#InternalServiceErrorException":
            response = {
                ...(await deserializeAws_restJson1InternalServiceErrorExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InvalidRequestException":
        case "com.amazonaws.managedblockchain#InvalidRequestException":
            response = {
                ...(await deserializeAws_restJson1InvalidRequestExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ResourceLimitExceededException":
        case "com.amazonaws.managedblockchain#ResourceLimitExceededException":
            response = {
                ...(await deserializeAws_restJson1ResourceLimitExceededExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ResourceNotFoundException":
        case "com.amazonaws.managedblockchain#ResourceNotFoundException":
            response = {
                ...(await deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ThrottlingException":
        case "com.amazonaws.managedblockchain#ThrottlingException":
            response = {
                ...(await deserializeAws_restJson1ThrottlingExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        default:
            const parsedBody = parsedOutput.body;
            errorCode = parsedBody.code || parsedBody.Code || errorCode;
            response = {
                ...parsedBody,
                name: `${errorCode}`,
                message: parsedBody.message || parsedBody.Message || errorCode,
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
    if (data.Members !== undefined && data.Members !== null) {
        contents.Members = deserializeAws_restJson1MemberSummaryList(data.Members, context);
    }
    if (data.NextToken !== undefined && data.NextToken !== null) {
        contents.NextToken = data.NextToken;
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
        case "com.amazonaws.managedblockchain#AccessDeniedException":
            response = {
                ...(await deserializeAws_restJson1AccessDeniedExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InternalServiceErrorException":
        case "com.amazonaws.managedblockchain#InternalServiceErrorException":
            response = {
                ...(await deserializeAws_restJson1InternalServiceErrorExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InvalidRequestException":
        case "com.amazonaws.managedblockchain#InvalidRequestException":
            response = {
                ...(await deserializeAws_restJson1InvalidRequestExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ThrottlingException":
        case "com.amazonaws.managedblockchain#ThrottlingException":
            response = {
                ...(await deserializeAws_restJson1ThrottlingExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        default:
            const parsedBody = parsedOutput.body;
            errorCode = parsedBody.code || parsedBody.Code || errorCode;
            response = {
                ...parsedBody,
                name: `${errorCode}`,
                message: parsedBody.message || parsedBody.Message || errorCode,
                $fault: "client",
                $metadata: deserializeMetadata(output),
            };
    }
    const message = response.message || response.Message || errorCode;
    response.message = message;
    delete response.Message;
    return Promise.reject(Object.assign(new Error(message), response));
};
const deserializeAws_restJson1ListNetworksCommand = async (output, context) => {
    if (output.statusCode !== 200 && output.statusCode >= 300) {
        return deserializeAws_restJson1ListNetworksCommandError(output, context);
    }
    const contents = {
        $metadata: deserializeMetadata(output),
        Networks: undefined,
        NextToken: undefined,
    };
    const data = await parseBody(output.body, context);
    if (data.Networks !== undefined && data.Networks !== null) {
        contents.Networks = deserializeAws_restJson1NetworkSummaryList(data.Networks, context);
    }
    if (data.NextToken !== undefined && data.NextToken !== null) {
        contents.NextToken = data.NextToken;
    }
    return Promise.resolve(contents);
};
exports.deserializeAws_restJson1ListNetworksCommand = deserializeAws_restJson1ListNetworksCommand;
const deserializeAws_restJson1ListNetworksCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "AccessDeniedException":
        case "com.amazonaws.managedblockchain#AccessDeniedException":
            response = {
                ...(await deserializeAws_restJson1AccessDeniedExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InternalServiceErrorException":
        case "com.amazonaws.managedblockchain#InternalServiceErrorException":
            response = {
                ...(await deserializeAws_restJson1InternalServiceErrorExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InvalidRequestException":
        case "com.amazonaws.managedblockchain#InvalidRequestException":
            response = {
                ...(await deserializeAws_restJson1InvalidRequestExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ThrottlingException":
        case "com.amazonaws.managedblockchain#ThrottlingException":
            response = {
                ...(await deserializeAws_restJson1ThrottlingExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        default:
            const parsedBody = parsedOutput.body;
            errorCode = parsedBody.code || parsedBody.Code || errorCode;
            response = {
                ...parsedBody,
                name: `${errorCode}`,
                message: parsedBody.message || parsedBody.Message || errorCode,
                $fault: "client",
                $metadata: deserializeMetadata(output),
            };
    }
    const message = response.message || response.Message || errorCode;
    response.message = message;
    delete response.Message;
    return Promise.reject(Object.assign(new Error(message), response));
};
const deserializeAws_restJson1ListNodesCommand = async (output, context) => {
    if (output.statusCode !== 200 && output.statusCode >= 300) {
        return deserializeAws_restJson1ListNodesCommandError(output, context);
    }
    const contents = {
        $metadata: deserializeMetadata(output),
        NextToken: undefined,
        Nodes: undefined,
    };
    const data = await parseBody(output.body, context);
    if (data.NextToken !== undefined && data.NextToken !== null) {
        contents.NextToken = data.NextToken;
    }
    if (data.Nodes !== undefined && data.Nodes !== null) {
        contents.Nodes = deserializeAws_restJson1NodeSummaryList(data.Nodes, context);
    }
    return Promise.resolve(contents);
};
exports.deserializeAws_restJson1ListNodesCommand = deserializeAws_restJson1ListNodesCommand;
const deserializeAws_restJson1ListNodesCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "AccessDeniedException":
        case "com.amazonaws.managedblockchain#AccessDeniedException":
            response = {
                ...(await deserializeAws_restJson1AccessDeniedExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InternalServiceErrorException":
        case "com.amazonaws.managedblockchain#InternalServiceErrorException":
            response = {
                ...(await deserializeAws_restJson1InternalServiceErrorExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InvalidRequestException":
        case "com.amazonaws.managedblockchain#InvalidRequestException":
            response = {
                ...(await deserializeAws_restJson1InvalidRequestExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ThrottlingException":
        case "com.amazonaws.managedblockchain#ThrottlingException":
            response = {
                ...(await deserializeAws_restJson1ThrottlingExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        default:
            const parsedBody = parsedOutput.body;
            errorCode = parsedBody.code || parsedBody.Code || errorCode;
            response = {
                ...parsedBody,
                name: `${errorCode}`,
                message: parsedBody.message || parsedBody.Message || errorCode,
                $fault: "client",
                $metadata: deserializeMetadata(output),
            };
    }
    const message = response.message || response.Message || errorCode;
    response.message = message;
    delete response.Message;
    return Promise.reject(Object.assign(new Error(message), response));
};
const deserializeAws_restJson1ListProposalsCommand = async (output, context) => {
    if (output.statusCode !== 200 && output.statusCode >= 300) {
        return deserializeAws_restJson1ListProposalsCommandError(output, context);
    }
    const contents = {
        $metadata: deserializeMetadata(output),
        NextToken: undefined,
        Proposals: undefined,
    };
    const data = await parseBody(output.body, context);
    if (data.NextToken !== undefined && data.NextToken !== null) {
        contents.NextToken = data.NextToken;
    }
    if (data.Proposals !== undefined && data.Proposals !== null) {
        contents.Proposals = deserializeAws_restJson1ProposalSummaryList(data.Proposals, context);
    }
    return Promise.resolve(contents);
};
exports.deserializeAws_restJson1ListProposalsCommand = deserializeAws_restJson1ListProposalsCommand;
const deserializeAws_restJson1ListProposalsCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "AccessDeniedException":
        case "com.amazonaws.managedblockchain#AccessDeniedException":
            response = {
                ...(await deserializeAws_restJson1AccessDeniedExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InternalServiceErrorException":
        case "com.amazonaws.managedblockchain#InternalServiceErrorException":
            response = {
                ...(await deserializeAws_restJson1InternalServiceErrorExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InvalidRequestException":
        case "com.amazonaws.managedblockchain#InvalidRequestException":
            response = {
                ...(await deserializeAws_restJson1InvalidRequestExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ResourceNotFoundException":
        case "com.amazonaws.managedblockchain#ResourceNotFoundException":
            response = {
                ...(await deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ThrottlingException":
        case "com.amazonaws.managedblockchain#ThrottlingException":
            response = {
                ...(await deserializeAws_restJson1ThrottlingExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        default:
            const parsedBody = parsedOutput.body;
            errorCode = parsedBody.code || parsedBody.Code || errorCode;
            response = {
                ...parsedBody,
                name: `${errorCode}`,
                message: parsedBody.message || parsedBody.Message || errorCode,
                $fault: "client",
                $metadata: deserializeMetadata(output),
            };
    }
    const message = response.message || response.Message || errorCode;
    response.message = message;
    delete response.Message;
    return Promise.reject(Object.assign(new Error(message), response));
};
const deserializeAws_restJson1ListProposalVotesCommand = async (output, context) => {
    if (output.statusCode !== 200 && output.statusCode >= 300) {
        return deserializeAws_restJson1ListProposalVotesCommandError(output, context);
    }
    const contents = {
        $metadata: deserializeMetadata(output),
        NextToken: undefined,
        ProposalVotes: undefined,
    };
    const data = await parseBody(output.body, context);
    if (data.NextToken !== undefined && data.NextToken !== null) {
        contents.NextToken = data.NextToken;
    }
    if (data.ProposalVotes !== undefined && data.ProposalVotes !== null) {
        contents.ProposalVotes = deserializeAws_restJson1ProposalVoteList(data.ProposalVotes, context);
    }
    return Promise.resolve(contents);
};
exports.deserializeAws_restJson1ListProposalVotesCommand = deserializeAws_restJson1ListProposalVotesCommand;
const deserializeAws_restJson1ListProposalVotesCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "AccessDeniedException":
        case "com.amazonaws.managedblockchain#AccessDeniedException":
            response = {
                ...(await deserializeAws_restJson1AccessDeniedExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InternalServiceErrorException":
        case "com.amazonaws.managedblockchain#InternalServiceErrorException":
            response = {
                ...(await deserializeAws_restJson1InternalServiceErrorExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InvalidRequestException":
        case "com.amazonaws.managedblockchain#InvalidRequestException":
            response = {
                ...(await deserializeAws_restJson1InvalidRequestExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ThrottlingException":
        case "com.amazonaws.managedblockchain#ThrottlingException":
            response = {
                ...(await deserializeAws_restJson1ThrottlingExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        default:
            const parsedBody = parsedOutput.body;
            errorCode = parsedBody.code || parsedBody.Code || errorCode;
            response = {
                ...parsedBody,
                name: `${errorCode}`,
                message: parsedBody.message || parsedBody.Message || errorCode,
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
        contents.Tags = deserializeAws_restJson1OutputTagMap(data.Tags, context);
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
        case "InternalServiceErrorException":
        case "com.amazonaws.managedblockchain#InternalServiceErrorException":
            response = {
                ...(await deserializeAws_restJson1InternalServiceErrorExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InvalidRequestException":
        case "com.amazonaws.managedblockchain#InvalidRequestException":
            response = {
                ...(await deserializeAws_restJson1InvalidRequestExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ResourceNotFoundException":
        case "com.amazonaws.managedblockchain#ResourceNotFoundException":
            response = {
                ...(await deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ResourceNotReadyException":
        case "com.amazonaws.managedblockchain#ResourceNotReadyException":
            response = {
                ...(await deserializeAws_restJson1ResourceNotReadyExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        default:
            const parsedBody = parsedOutput.body;
            errorCode = parsedBody.code || parsedBody.Code || errorCode;
            response = {
                ...parsedBody,
                name: `${errorCode}`,
                message: parsedBody.message || parsedBody.Message || errorCode,
                $fault: "client",
                $metadata: deserializeMetadata(output),
            };
    }
    const message = response.message || response.Message || errorCode;
    response.message = message;
    delete response.Message;
    return Promise.reject(Object.assign(new Error(message), response));
};
const deserializeAws_restJson1RejectInvitationCommand = async (output, context) => {
    if (output.statusCode !== 200 && output.statusCode >= 300) {
        return deserializeAws_restJson1RejectInvitationCommandError(output, context);
    }
    const contents = {
        $metadata: deserializeMetadata(output),
    };
    await collectBody(output.body, context);
    return Promise.resolve(contents);
};
exports.deserializeAws_restJson1RejectInvitationCommand = deserializeAws_restJson1RejectInvitationCommand;
const deserializeAws_restJson1RejectInvitationCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "AccessDeniedException":
        case "com.amazonaws.managedblockchain#AccessDeniedException":
            response = {
                ...(await deserializeAws_restJson1AccessDeniedExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "IllegalActionException":
        case "com.amazonaws.managedblockchain#IllegalActionException":
            response = {
                ...(await deserializeAws_restJson1IllegalActionExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InternalServiceErrorException":
        case "com.amazonaws.managedblockchain#InternalServiceErrorException":
            response = {
                ...(await deserializeAws_restJson1InternalServiceErrorExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InvalidRequestException":
        case "com.amazonaws.managedblockchain#InvalidRequestException":
            response = {
                ...(await deserializeAws_restJson1InvalidRequestExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ResourceNotFoundException":
        case "com.amazonaws.managedblockchain#ResourceNotFoundException":
            response = {
                ...(await deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ThrottlingException":
        case "com.amazonaws.managedblockchain#ThrottlingException":
            response = {
                ...(await deserializeAws_restJson1ThrottlingExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        default:
            const parsedBody = parsedOutput.body;
            errorCode = parsedBody.code || parsedBody.Code || errorCode;
            response = {
                ...parsedBody,
                name: `${errorCode}`,
                message: parsedBody.message || parsedBody.Message || errorCode,
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
        case "InternalServiceErrorException":
        case "com.amazonaws.managedblockchain#InternalServiceErrorException":
            response = {
                ...(await deserializeAws_restJson1InternalServiceErrorExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InvalidRequestException":
        case "com.amazonaws.managedblockchain#InvalidRequestException":
            response = {
                ...(await deserializeAws_restJson1InvalidRequestExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ResourceNotFoundException":
        case "com.amazonaws.managedblockchain#ResourceNotFoundException":
            response = {
                ...(await deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ResourceNotReadyException":
        case "com.amazonaws.managedblockchain#ResourceNotReadyException":
            response = {
                ...(await deserializeAws_restJson1ResourceNotReadyExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "TooManyTagsException":
        case "com.amazonaws.managedblockchain#TooManyTagsException":
            response = {
                ...(await deserializeAws_restJson1TooManyTagsExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        default:
            const parsedBody = parsedOutput.body;
            errorCode = parsedBody.code || parsedBody.Code || errorCode;
            response = {
                ...parsedBody,
                name: `${errorCode}`,
                message: parsedBody.message || parsedBody.Message || errorCode,
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
        case "InternalServiceErrorException":
        case "com.amazonaws.managedblockchain#InternalServiceErrorException":
            response = {
                ...(await deserializeAws_restJson1InternalServiceErrorExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InvalidRequestException":
        case "com.amazonaws.managedblockchain#InvalidRequestException":
            response = {
                ...(await deserializeAws_restJson1InvalidRequestExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ResourceNotFoundException":
        case "com.amazonaws.managedblockchain#ResourceNotFoundException":
            response = {
                ...(await deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ResourceNotReadyException":
        case "com.amazonaws.managedblockchain#ResourceNotReadyException":
            response = {
                ...(await deserializeAws_restJson1ResourceNotReadyExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        default:
            const parsedBody = parsedOutput.body;
            errorCode = parsedBody.code || parsedBody.Code || errorCode;
            response = {
                ...parsedBody,
                name: `${errorCode}`,
                message: parsedBody.message || parsedBody.Message || errorCode,
                $fault: "client",
                $metadata: deserializeMetadata(output),
            };
    }
    const message = response.message || response.Message || errorCode;
    response.message = message;
    delete response.Message;
    return Promise.reject(Object.assign(new Error(message), response));
};
const deserializeAws_restJson1UpdateMemberCommand = async (output, context) => {
    if (output.statusCode !== 200 && output.statusCode >= 300) {
        return deserializeAws_restJson1UpdateMemberCommandError(output, context);
    }
    const contents = {
        $metadata: deserializeMetadata(output),
    };
    await collectBody(output.body, context);
    return Promise.resolve(contents);
};
exports.deserializeAws_restJson1UpdateMemberCommand = deserializeAws_restJson1UpdateMemberCommand;
const deserializeAws_restJson1UpdateMemberCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "AccessDeniedException":
        case "com.amazonaws.managedblockchain#AccessDeniedException":
            response = {
                ...(await deserializeAws_restJson1AccessDeniedExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InternalServiceErrorException":
        case "com.amazonaws.managedblockchain#InternalServiceErrorException":
            response = {
                ...(await deserializeAws_restJson1InternalServiceErrorExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InvalidRequestException":
        case "com.amazonaws.managedblockchain#InvalidRequestException":
            response = {
                ...(await deserializeAws_restJson1InvalidRequestExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ResourceNotFoundException":
        case "com.amazonaws.managedblockchain#ResourceNotFoundException":
            response = {
                ...(await deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ThrottlingException":
        case "com.amazonaws.managedblockchain#ThrottlingException":
            response = {
                ...(await deserializeAws_restJson1ThrottlingExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        default:
            const parsedBody = parsedOutput.body;
            errorCode = parsedBody.code || parsedBody.Code || errorCode;
            response = {
                ...parsedBody,
                name: `${errorCode}`,
                message: parsedBody.message || parsedBody.Message || errorCode,
                $fault: "client",
                $metadata: deserializeMetadata(output),
            };
    }
    const message = response.message || response.Message || errorCode;
    response.message = message;
    delete response.Message;
    return Promise.reject(Object.assign(new Error(message), response));
};
const deserializeAws_restJson1UpdateNodeCommand = async (output, context) => {
    if (output.statusCode !== 200 && output.statusCode >= 300) {
        return deserializeAws_restJson1UpdateNodeCommandError(output, context);
    }
    const contents = {
        $metadata: deserializeMetadata(output),
    };
    await collectBody(output.body, context);
    return Promise.resolve(contents);
};
exports.deserializeAws_restJson1UpdateNodeCommand = deserializeAws_restJson1UpdateNodeCommand;
const deserializeAws_restJson1UpdateNodeCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "AccessDeniedException":
        case "com.amazonaws.managedblockchain#AccessDeniedException":
            response = {
                ...(await deserializeAws_restJson1AccessDeniedExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InternalServiceErrorException":
        case "com.amazonaws.managedblockchain#InternalServiceErrorException":
            response = {
                ...(await deserializeAws_restJson1InternalServiceErrorExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InvalidRequestException":
        case "com.amazonaws.managedblockchain#InvalidRequestException":
            response = {
                ...(await deserializeAws_restJson1InvalidRequestExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ResourceNotFoundException":
        case "com.amazonaws.managedblockchain#ResourceNotFoundException":
            response = {
                ...(await deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ThrottlingException":
        case "com.amazonaws.managedblockchain#ThrottlingException":
            response = {
                ...(await deserializeAws_restJson1ThrottlingExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        default:
            const parsedBody = parsedOutput.body;
            errorCode = parsedBody.code || parsedBody.Code || errorCode;
            response = {
                ...parsedBody,
                name: `${errorCode}`,
                message: parsedBody.message || parsedBody.Message || errorCode,
                $fault: "client",
                $metadata: deserializeMetadata(output),
            };
    }
    const message = response.message || response.Message || errorCode;
    response.message = message;
    delete response.Message;
    return Promise.reject(Object.assign(new Error(message), response));
};
const deserializeAws_restJson1VoteOnProposalCommand = async (output, context) => {
    if (output.statusCode !== 200 && output.statusCode >= 300) {
        return deserializeAws_restJson1VoteOnProposalCommandError(output, context);
    }
    const contents = {
        $metadata: deserializeMetadata(output),
    };
    await collectBody(output.body, context);
    return Promise.resolve(contents);
};
exports.deserializeAws_restJson1VoteOnProposalCommand = deserializeAws_restJson1VoteOnProposalCommand;
const deserializeAws_restJson1VoteOnProposalCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "AccessDeniedException":
        case "com.amazonaws.managedblockchain#AccessDeniedException":
            response = {
                ...(await deserializeAws_restJson1AccessDeniedExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "IllegalActionException":
        case "com.amazonaws.managedblockchain#IllegalActionException":
            response = {
                ...(await deserializeAws_restJson1IllegalActionExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InternalServiceErrorException":
        case "com.amazonaws.managedblockchain#InternalServiceErrorException":
            response = {
                ...(await deserializeAws_restJson1InternalServiceErrorExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InvalidRequestException":
        case "com.amazonaws.managedblockchain#InvalidRequestException":
            response = {
                ...(await deserializeAws_restJson1InvalidRequestExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ResourceNotFoundException":
        case "com.amazonaws.managedblockchain#ResourceNotFoundException":
            response = {
                ...(await deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ThrottlingException":
        case "com.amazonaws.managedblockchain#ThrottlingException":
            response = {
                ...(await deserializeAws_restJson1ThrottlingExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        default:
            const parsedBody = parsedOutput.body;
            errorCode = parsedBody.code || parsedBody.Code || errorCode;
            response = {
                ...parsedBody,
                name: `${errorCode}`,
                message: parsedBody.message || parsedBody.Message || errorCode,
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
const deserializeAws_restJson1IllegalActionExceptionResponse = async (parsedOutput, context) => {
    const contents = {
        name: "IllegalActionException",
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
const deserializeAws_restJson1InternalServiceErrorExceptionResponse = async (parsedOutput, context) => {
    const contents = {
        name: "InternalServiceErrorException",
        $fault: "server",
        $metadata: deserializeMetadata(parsedOutput),
    };
    const data = parsedOutput.body;
    return contents;
};
const deserializeAws_restJson1InvalidRequestExceptionResponse = async (parsedOutput, context) => {
    const contents = {
        name: "InvalidRequestException",
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
const deserializeAws_restJson1ResourceAlreadyExistsExceptionResponse = async (parsedOutput, context) => {
    const contents = {
        name: "ResourceAlreadyExistsException",
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
const deserializeAws_restJson1ResourceLimitExceededExceptionResponse = async (parsedOutput, context) => {
    const contents = {
        name: "ResourceLimitExceededException",
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
const deserializeAws_restJson1ResourceNotFoundExceptionResponse = async (parsedOutput, context) => {
    const contents = {
        name: "ResourceNotFoundException",
        $fault: "client",
        $metadata: deserializeMetadata(parsedOutput),
        Message: undefined,
        ResourceName: undefined,
    };
    const data = parsedOutput.body;
    if (data.Message !== undefined && data.Message !== null) {
        contents.Message = data.Message;
    }
    if (data.ResourceName !== undefined && data.ResourceName !== null) {
        contents.ResourceName = data.ResourceName;
    }
    return contents;
};
const deserializeAws_restJson1ResourceNotReadyExceptionResponse = async (parsedOutput, context) => {
    const contents = {
        name: "ResourceNotReadyException",
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
const deserializeAws_restJson1ThrottlingExceptionResponse = async (parsedOutput, context) => {
    const contents = {
        name: "ThrottlingException",
        $fault: "client",
        $metadata: deserializeMetadata(parsedOutput),
    };
    const data = parsedOutput.body;
    return contents;
};
const deserializeAws_restJson1TooManyTagsExceptionResponse = async (parsedOutput, context) => {
    const contents = {
        name: "TooManyTagsException",
        $fault: "client",
        $metadata: deserializeMetadata(parsedOutput),
        Message: undefined,
        ResourceName: undefined,
    };
    const data = parsedOutput.body;
    if (data.Message !== undefined && data.Message !== null) {
        contents.Message = data.Message;
    }
    if (data.ResourceName !== undefined && data.ResourceName !== null) {
        contents.ResourceName = data.ResourceName;
    }
    return contents;
};
const serializeAws_restJson1ApprovalThresholdPolicy = (input, context) => {
    return {
        ...(input.ProposalDurationInHours !== undefined &&
            input.ProposalDurationInHours !== null && { ProposalDurationInHours: input.ProposalDurationInHours }),
        ...(input.ThresholdComparator !== undefined &&
            input.ThresholdComparator !== null && { ThresholdComparator: input.ThresholdComparator }),
        ...(input.ThresholdPercentage !== undefined &&
            input.ThresholdPercentage !== null && { ThresholdPercentage: input.ThresholdPercentage }),
    };
};
const serializeAws_restJson1InputTagMap = (input, context) => {
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
const serializeAws_restJson1InviteAction = (input, context) => {
    return {
        ...(input.Principal !== undefined && input.Principal !== null && { Principal: input.Principal }),
    };
};
const serializeAws_restJson1InviteActionList = (input, context) => {
    return input
        .filter((e) => e != null)
        .map((entry) => {
        if (entry === null) {
            return null;
        }
        return serializeAws_restJson1InviteAction(entry, context);
    });
};
const serializeAws_restJson1LogConfiguration = (input, context) => {
    return {
        ...(input.Enabled !== undefined && input.Enabled !== null && { Enabled: input.Enabled }),
    };
};
const serializeAws_restJson1LogConfigurations = (input, context) => {
    return {
        ...(input.Cloudwatch !== undefined &&
            input.Cloudwatch !== null && { Cloudwatch: serializeAws_restJson1LogConfiguration(input.Cloudwatch, context) }),
    };
};
const serializeAws_restJson1MemberConfiguration = (input, context) => {
    return {
        ...(input.Description !== undefined && input.Description !== null && { Description: input.Description }),
        ...(input.FrameworkConfiguration !== undefined &&
            input.FrameworkConfiguration !== null && {
            FrameworkConfiguration: serializeAws_restJson1MemberFrameworkConfiguration(input.FrameworkConfiguration, context),
        }),
        ...(input.LogPublishingConfiguration !== undefined &&
            input.LogPublishingConfiguration !== null && {
            LogPublishingConfiguration: serializeAws_restJson1MemberLogPublishingConfiguration(input.LogPublishingConfiguration, context),
        }),
        ...(input.Name !== undefined && input.Name !== null && { Name: input.Name }),
        ...(input.Tags !== undefined &&
            input.Tags !== null && { Tags: serializeAws_restJson1InputTagMap(input.Tags, context) }),
    };
};
const serializeAws_restJson1MemberFabricConfiguration = (input, context) => {
    return {
        ...(input.AdminPassword !== undefined && input.AdminPassword !== null && { AdminPassword: input.AdminPassword }),
        ...(input.AdminUsername !== undefined && input.AdminUsername !== null && { AdminUsername: input.AdminUsername }),
    };
};
const serializeAws_restJson1MemberFabricLogPublishingConfiguration = (input, context) => {
    return {
        ...(input.CaLogs !== undefined &&
            input.CaLogs !== null && { CaLogs: serializeAws_restJson1LogConfigurations(input.CaLogs, context) }),
    };
};
const serializeAws_restJson1MemberFrameworkConfiguration = (input, context) => {
    return {
        ...(input.Fabric !== undefined &&
            input.Fabric !== null && { Fabric: serializeAws_restJson1MemberFabricConfiguration(input.Fabric, context) }),
    };
};
const serializeAws_restJson1MemberLogPublishingConfiguration = (input, context) => {
    return {
        ...(input.Fabric !== undefined &&
            input.Fabric !== null && {
            Fabric: serializeAws_restJson1MemberFabricLogPublishingConfiguration(input.Fabric, context),
        }),
    };
};
const serializeAws_restJson1NetworkFabricConfiguration = (input, context) => {
    return {
        ...(input.Edition !== undefined && input.Edition !== null && { Edition: input.Edition }),
    };
};
const serializeAws_restJson1NetworkFrameworkConfiguration = (input, context) => {
    return {
        ...(input.Fabric !== undefined &&
            input.Fabric !== null && { Fabric: serializeAws_restJson1NetworkFabricConfiguration(input.Fabric, context) }),
    };
};
const serializeAws_restJson1NodeConfiguration = (input, context) => {
    return {
        ...(input.AvailabilityZone !== undefined &&
            input.AvailabilityZone !== null && { AvailabilityZone: input.AvailabilityZone }),
        ...(input.InstanceType !== undefined && input.InstanceType !== null && { InstanceType: input.InstanceType }),
        ...(input.LogPublishingConfiguration !== undefined &&
            input.LogPublishingConfiguration !== null && {
            LogPublishingConfiguration: serializeAws_restJson1NodeLogPublishingConfiguration(input.LogPublishingConfiguration, context),
        }),
        ...(input.StateDB !== undefined && input.StateDB !== null && { StateDB: input.StateDB }),
    };
};
const serializeAws_restJson1NodeFabricLogPublishingConfiguration = (input, context) => {
    return {
        ...(input.ChaincodeLogs !== undefined &&
            input.ChaincodeLogs !== null && {
            ChaincodeLogs: serializeAws_restJson1LogConfigurations(input.ChaincodeLogs, context),
        }),
        ...(input.PeerLogs !== undefined &&
            input.PeerLogs !== null && { PeerLogs: serializeAws_restJson1LogConfigurations(input.PeerLogs, context) }),
    };
};
const serializeAws_restJson1NodeLogPublishingConfiguration = (input, context) => {
    return {
        ...(input.Fabric !== undefined &&
            input.Fabric !== null && {
            Fabric: serializeAws_restJson1NodeFabricLogPublishingConfiguration(input.Fabric, context),
        }),
    };
};
const serializeAws_restJson1ProposalActions = (input, context) => {
    return {
        ...(input.Invitations !== undefined &&
            input.Invitations !== null && {
            Invitations: serializeAws_restJson1InviteActionList(input.Invitations, context),
        }),
        ...(input.Removals !== undefined &&
            input.Removals !== null && { Removals: serializeAws_restJson1RemoveActionList(input.Removals, context) }),
    };
};
const serializeAws_restJson1RemoveAction = (input, context) => {
    return {
        ...(input.MemberId !== undefined && input.MemberId !== null && { MemberId: input.MemberId }),
    };
};
const serializeAws_restJson1RemoveActionList = (input, context) => {
    return input
        .filter((e) => e != null)
        .map((entry) => {
        if (entry === null) {
            return null;
        }
        return serializeAws_restJson1RemoveAction(entry, context);
    });
};
const serializeAws_restJson1VotingPolicy = (input, context) => {
    return {
        ...(input.ApprovalThresholdPolicy !== undefined &&
            input.ApprovalThresholdPolicy !== null && {
            ApprovalThresholdPolicy: serializeAws_restJson1ApprovalThresholdPolicy(input.ApprovalThresholdPolicy, context),
        }),
    };
};
const deserializeAws_restJson1ApprovalThresholdPolicy = (output, context) => {
    return {
        ProposalDurationInHours: output.ProposalDurationInHours !== undefined && output.ProposalDurationInHours !== null
            ? output.ProposalDurationInHours
            : undefined,
        ThresholdComparator: output.ThresholdComparator !== undefined && output.ThresholdComparator !== null
            ? output.ThresholdComparator
            : undefined,
        ThresholdPercentage: output.ThresholdPercentage !== undefined && output.ThresholdPercentage !== null
            ? output.ThresholdPercentage
            : undefined,
    };
};
const deserializeAws_restJson1Invitation = (output, context) => {
    return {
        Arn: output.Arn !== undefined && output.Arn !== null ? output.Arn : undefined,
        CreationDate: output.CreationDate !== undefined && output.CreationDate !== null ? new Date(output.CreationDate) : undefined,
        ExpirationDate: output.ExpirationDate !== undefined && output.ExpirationDate !== null
            ? new Date(output.ExpirationDate)
            : undefined,
        InvitationId: output.InvitationId !== undefined && output.InvitationId !== null ? output.InvitationId : undefined,
        NetworkSummary: output.NetworkSummary !== undefined && output.NetworkSummary !== null
            ? deserializeAws_restJson1NetworkSummary(output.NetworkSummary, context)
            : undefined,
        Status: output.Status !== undefined && output.Status !== null ? output.Status : undefined,
    };
};
const deserializeAws_restJson1InvitationList = (output, context) => {
    return (output || [])
        .filter((e) => e != null)
        .map((entry) => {
        if (entry === null) {
            return null;
        }
        return deserializeAws_restJson1Invitation(entry, context);
    });
};
const deserializeAws_restJson1InviteAction = (output, context) => {
    return {
        Principal: output.Principal !== undefined && output.Principal !== null ? output.Principal : undefined,
    };
};
const deserializeAws_restJson1InviteActionList = (output, context) => {
    return (output || [])
        .filter((e) => e != null)
        .map((entry) => {
        if (entry === null) {
            return null;
        }
        return deserializeAws_restJson1InviteAction(entry, context);
    });
};
const deserializeAws_restJson1LogConfiguration = (output, context) => {
    return {
        Enabled: output.Enabled !== undefined && output.Enabled !== null ? output.Enabled : undefined,
    };
};
const deserializeAws_restJson1LogConfigurations = (output, context) => {
    return {
        Cloudwatch: output.Cloudwatch !== undefined && output.Cloudwatch !== null
            ? deserializeAws_restJson1LogConfiguration(output.Cloudwatch, context)
            : undefined,
    };
};
const deserializeAws_restJson1Member = (output, context) => {
    return {
        Arn: output.Arn !== undefined && output.Arn !== null ? output.Arn : undefined,
        CreationDate: output.CreationDate !== undefined && output.CreationDate !== null ? new Date(output.CreationDate) : undefined,
        Description: output.Description !== undefined && output.Description !== null ? output.Description : undefined,
        FrameworkAttributes: output.FrameworkAttributes !== undefined && output.FrameworkAttributes !== null
            ? deserializeAws_restJson1MemberFrameworkAttributes(output.FrameworkAttributes, context)
            : undefined,
        Id: output.Id !== undefined && output.Id !== null ? output.Id : undefined,
        LogPublishingConfiguration: output.LogPublishingConfiguration !== undefined && output.LogPublishingConfiguration !== null
            ? deserializeAws_restJson1MemberLogPublishingConfiguration(output.LogPublishingConfiguration, context)
            : undefined,
        Name: output.Name !== undefined && output.Name !== null ? output.Name : undefined,
        NetworkId: output.NetworkId !== undefined && output.NetworkId !== null ? output.NetworkId : undefined,
        Status: output.Status !== undefined && output.Status !== null ? output.Status : undefined,
        Tags: output.Tags !== undefined && output.Tags !== null
            ? deserializeAws_restJson1OutputTagMap(output.Tags, context)
            : undefined,
    };
};
const deserializeAws_restJson1MemberFabricAttributes = (output, context) => {
    return {
        AdminUsername: output.AdminUsername !== undefined && output.AdminUsername !== null ? output.AdminUsername : undefined,
        CaEndpoint: output.CaEndpoint !== undefined && output.CaEndpoint !== null ? output.CaEndpoint : undefined,
    };
};
const deserializeAws_restJson1MemberFabricLogPublishingConfiguration = (output, context) => {
    return {
        CaLogs: output.CaLogs !== undefined && output.CaLogs !== null
            ? deserializeAws_restJson1LogConfigurations(output.CaLogs, context)
            : undefined,
    };
};
const deserializeAws_restJson1MemberFrameworkAttributes = (output, context) => {
    return {
        Fabric: output.Fabric !== undefined && output.Fabric !== null
            ? deserializeAws_restJson1MemberFabricAttributes(output.Fabric, context)
            : undefined,
    };
};
const deserializeAws_restJson1MemberLogPublishingConfiguration = (output, context) => {
    return {
        Fabric: output.Fabric !== undefined && output.Fabric !== null
            ? deserializeAws_restJson1MemberFabricLogPublishingConfiguration(output.Fabric, context)
            : undefined,
    };
};
const deserializeAws_restJson1MemberSummary = (output, context) => {
    return {
        Arn: output.Arn !== undefined && output.Arn !== null ? output.Arn : undefined,
        CreationDate: output.CreationDate !== undefined && output.CreationDate !== null ? new Date(output.CreationDate) : undefined,
        Description: output.Description !== undefined && output.Description !== null ? output.Description : undefined,
        Id: output.Id !== undefined && output.Id !== null ? output.Id : undefined,
        IsOwned: output.IsOwned !== undefined && output.IsOwned !== null ? output.IsOwned : undefined,
        Name: output.Name !== undefined && output.Name !== null ? output.Name : undefined,
        Status: output.Status !== undefined && output.Status !== null ? output.Status : undefined,
    };
};
const deserializeAws_restJson1MemberSummaryList = (output, context) => {
    return (output || [])
        .filter((e) => e != null)
        .map((entry) => {
        if (entry === null) {
            return null;
        }
        return deserializeAws_restJson1MemberSummary(entry, context);
    });
};
const deserializeAws_restJson1Network = (output, context) => {
    return {
        Arn: output.Arn !== undefined && output.Arn !== null ? output.Arn : undefined,
        CreationDate: output.CreationDate !== undefined && output.CreationDate !== null ? new Date(output.CreationDate) : undefined,
        Description: output.Description !== undefined && output.Description !== null ? output.Description : undefined,
        Framework: output.Framework !== undefined && output.Framework !== null ? output.Framework : undefined,
        FrameworkAttributes: output.FrameworkAttributes !== undefined && output.FrameworkAttributes !== null
            ? deserializeAws_restJson1NetworkFrameworkAttributes(output.FrameworkAttributes, context)
            : undefined,
        FrameworkVersion: output.FrameworkVersion !== undefined && output.FrameworkVersion !== null ? output.FrameworkVersion : undefined,
        Id: output.Id !== undefined && output.Id !== null ? output.Id : undefined,
        Name: output.Name !== undefined && output.Name !== null ? output.Name : undefined,
        Status: output.Status !== undefined && output.Status !== null ? output.Status : undefined,
        Tags: output.Tags !== undefined && output.Tags !== null
            ? deserializeAws_restJson1OutputTagMap(output.Tags, context)
            : undefined,
        VotingPolicy: output.VotingPolicy !== undefined && output.VotingPolicy !== null
            ? deserializeAws_restJson1VotingPolicy(output.VotingPolicy, context)
            : undefined,
        VpcEndpointServiceName: output.VpcEndpointServiceName !== undefined && output.VpcEndpointServiceName !== null
            ? output.VpcEndpointServiceName
            : undefined,
    };
};
const deserializeAws_restJson1NetworkEthereumAttributes = (output, context) => {
    return {
        ChainId: output.ChainId !== undefined && output.ChainId !== null ? output.ChainId : undefined,
    };
};
const deserializeAws_restJson1NetworkFabricAttributes = (output, context) => {
    return {
        Edition: output.Edition !== undefined && output.Edition !== null ? output.Edition : undefined,
        OrderingServiceEndpoint: output.OrderingServiceEndpoint !== undefined && output.OrderingServiceEndpoint !== null
            ? output.OrderingServiceEndpoint
            : undefined,
    };
};
const deserializeAws_restJson1NetworkFrameworkAttributes = (output, context) => {
    return {
        Ethereum: output.Ethereum !== undefined && output.Ethereum !== null
            ? deserializeAws_restJson1NetworkEthereumAttributes(output.Ethereum, context)
            : undefined,
        Fabric: output.Fabric !== undefined && output.Fabric !== null
            ? deserializeAws_restJson1NetworkFabricAttributes(output.Fabric, context)
            : undefined,
    };
};
const deserializeAws_restJson1NetworkSummary = (output, context) => {
    return {
        Arn: output.Arn !== undefined && output.Arn !== null ? output.Arn : undefined,
        CreationDate: output.CreationDate !== undefined && output.CreationDate !== null ? new Date(output.CreationDate) : undefined,
        Description: output.Description !== undefined && output.Description !== null ? output.Description : undefined,
        Framework: output.Framework !== undefined && output.Framework !== null ? output.Framework : undefined,
        FrameworkVersion: output.FrameworkVersion !== undefined && output.FrameworkVersion !== null ? output.FrameworkVersion : undefined,
        Id: output.Id !== undefined && output.Id !== null ? output.Id : undefined,
        Name: output.Name !== undefined && output.Name !== null ? output.Name : undefined,
        Status: output.Status !== undefined && output.Status !== null ? output.Status : undefined,
    };
};
const deserializeAws_restJson1NetworkSummaryList = (output, context) => {
    return (output || [])
        .filter((e) => e != null)
        .map((entry) => {
        if (entry === null) {
            return null;
        }
        return deserializeAws_restJson1NetworkSummary(entry, context);
    });
};
const deserializeAws_restJson1Node = (output, context) => {
    return {
        Arn: output.Arn !== undefined && output.Arn !== null ? output.Arn : undefined,
        AvailabilityZone: output.AvailabilityZone !== undefined && output.AvailabilityZone !== null ? output.AvailabilityZone : undefined,
        CreationDate: output.CreationDate !== undefined && output.CreationDate !== null ? new Date(output.CreationDate) : undefined,
        FrameworkAttributes: output.FrameworkAttributes !== undefined && output.FrameworkAttributes !== null
            ? deserializeAws_restJson1NodeFrameworkAttributes(output.FrameworkAttributes, context)
            : undefined,
        Id: output.Id !== undefined && output.Id !== null ? output.Id : undefined,
        InstanceType: output.InstanceType !== undefined && output.InstanceType !== null ? output.InstanceType : undefined,
        LogPublishingConfiguration: output.LogPublishingConfiguration !== undefined && output.LogPublishingConfiguration !== null
            ? deserializeAws_restJson1NodeLogPublishingConfiguration(output.LogPublishingConfiguration, context)
            : undefined,
        MemberId: output.MemberId !== undefined && output.MemberId !== null ? output.MemberId : undefined,
        NetworkId: output.NetworkId !== undefined && output.NetworkId !== null ? output.NetworkId : undefined,
        StateDB: output.StateDB !== undefined && output.StateDB !== null ? output.StateDB : undefined,
        Status: output.Status !== undefined && output.Status !== null ? output.Status : undefined,
        Tags: output.Tags !== undefined && output.Tags !== null
            ? deserializeAws_restJson1OutputTagMap(output.Tags, context)
            : undefined,
    };
};
const deserializeAws_restJson1NodeEthereumAttributes = (output, context) => {
    return {
        HttpEndpoint: output.HttpEndpoint !== undefined && output.HttpEndpoint !== null ? output.HttpEndpoint : undefined,
        WebSocketEndpoint: output.WebSocketEndpoint !== undefined && output.WebSocketEndpoint !== null
            ? output.WebSocketEndpoint
            : undefined,
    };
};
const deserializeAws_restJson1NodeFabricAttributes = (output, context) => {
    return {
        PeerEndpoint: output.PeerEndpoint !== undefined && output.PeerEndpoint !== null ? output.PeerEndpoint : undefined,
        PeerEventEndpoint: output.PeerEventEndpoint !== undefined && output.PeerEventEndpoint !== null
            ? output.PeerEventEndpoint
            : undefined,
    };
};
const deserializeAws_restJson1NodeFabricLogPublishingConfiguration = (output, context) => {
    return {
        ChaincodeLogs: output.ChaincodeLogs !== undefined && output.ChaincodeLogs !== null
            ? deserializeAws_restJson1LogConfigurations(output.ChaincodeLogs, context)
            : undefined,
        PeerLogs: output.PeerLogs !== undefined && output.PeerLogs !== null
            ? deserializeAws_restJson1LogConfigurations(output.PeerLogs, context)
            : undefined,
    };
};
const deserializeAws_restJson1NodeFrameworkAttributes = (output, context) => {
    return {
        Ethereum: output.Ethereum !== undefined && output.Ethereum !== null
            ? deserializeAws_restJson1NodeEthereumAttributes(output.Ethereum, context)
            : undefined,
        Fabric: output.Fabric !== undefined && output.Fabric !== null
            ? deserializeAws_restJson1NodeFabricAttributes(output.Fabric, context)
            : undefined,
    };
};
const deserializeAws_restJson1NodeLogPublishingConfiguration = (output, context) => {
    return {
        Fabric: output.Fabric !== undefined && output.Fabric !== null
            ? deserializeAws_restJson1NodeFabricLogPublishingConfiguration(output.Fabric, context)
            : undefined,
    };
};
const deserializeAws_restJson1NodeSummary = (output, context) => {
    return {
        Arn: output.Arn !== undefined && output.Arn !== null ? output.Arn : undefined,
        AvailabilityZone: output.AvailabilityZone !== undefined && output.AvailabilityZone !== null ? output.AvailabilityZone : undefined,
        CreationDate: output.CreationDate !== undefined && output.CreationDate !== null ? new Date(output.CreationDate) : undefined,
        Id: output.Id !== undefined && output.Id !== null ? output.Id : undefined,
        InstanceType: output.InstanceType !== undefined && output.InstanceType !== null ? output.InstanceType : undefined,
        Status: output.Status !== undefined && output.Status !== null ? output.Status : undefined,
    };
};
const deserializeAws_restJson1NodeSummaryList = (output, context) => {
    return (output || [])
        .filter((e) => e != null)
        .map((entry) => {
        if (entry === null) {
            return null;
        }
        return deserializeAws_restJson1NodeSummary(entry, context);
    });
};
const deserializeAws_restJson1OutputTagMap = (output, context) => {
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
const deserializeAws_restJson1Proposal = (output, context) => {
    return {
        Actions: output.Actions !== undefined && output.Actions !== null
            ? deserializeAws_restJson1ProposalActions(output.Actions, context)
            : undefined,
        Arn: output.Arn !== undefined && output.Arn !== null ? output.Arn : undefined,
        CreationDate: output.CreationDate !== undefined && output.CreationDate !== null ? new Date(output.CreationDate) : undefined,
        Description: output.Description !== undefined && output.Description !== null ? output.Description : undefined,
        ExpirationDate: output.ExpirationDate !== undefined && output.ExpirationDate !== null
            ? new Date(output.ExpirationDate)
            : undefined,
        NetworkId: output.NetworkId !== undefined && output.NetworkId !== null ? output.NetworkId : undefined,
        NoVoteCount: output.NoVoteCount !== undefined && output.NoVoteCount !== null ? output.NoVoteCount : undefined,
        OutstandingVoteCount: output.OutstandingVoteCount !== undefined && output.OutstandingVoteCount !== null
            ? output.OutstandingVoteCount
            : undefined,
        ProposalId: output.ProposalId !== undefined && output.ProposalId !== null ? output.ProposalId : undefined,
        ProposedByMemberId: output.ProposedByMemberId !== undefined && output.ProposedByMemberId !== null
            ? output.ProposedByMemberId
            : undefined,
        ProposedByMemberName: output.ProposedByMemberName !== undefined && output.ProposedByMemberName !== null
            ? output.ProposedByMemberName
            : undefined,
        Status: output.Status !== undefined && output.Status !== null ? output.Status : undefined,
        Tags: output.Tags !== undefined && output.Tags !== null
            ? deserializeAws_restJson1OutputTagMap(output.Tags, context)
            : undefined,
        YesVoteCount: output.YesVoteCount !== undefined && output.YesVoteCount !== null ? output.YesVoteCount : undefined,
    };
};
const deserializeAws_restJson1ProposalActions = (output, context) => {
    return {
        Invitations: output.Invitations !== undefined && output.Invitations !== null
            ? deserializeAws_restJson1InviteActionList(output.Invitations, context)
            : undefined,
        Removals: output.Removals !== undefined && output.Removals !== null
            ? deserializeAws_restJson1RemoveActionList(output.Removals, context)
            : undefined,
    };
};
const deserializeAws_restJson1ProposalSummary = (output, context) => {
    return {
        Arn: output.Arn !== undefined && output.Arn !== null ? output.Arn : undefined,
        CreationDate: output.CreationDate !== undefined && output.CreationDate !== null ? new Date(output.CreationDate) : undefined,
        Description: output.Description !== undefined && output.Description !== null ? output.Description : undefined,
        ExpirationDate: output.ExpirationDate !== undefined && output.ExpirationDate !== null
            ? new Date(output.ExpirationDate)
            : undefined,
        ProposalId: output.ProposalId !== undefined && output.ProposalId !== null ? output.ProposalId : undefined,
        ProposedByMemberId: output.ProposedByMemberId !== undefined && output.ProposedByMemberId !== null
            ? output.ProposedByMemberId
            : undefined,
        ProposedByMemberName: output.ProposedByMemberName !== undefined && output.ProposedByMemberName !== null
            ? output.ProposedByMemberName
            : undefined,
        Status: output.Status !== undefined && output.Status !== null ? output.Status : undefined,
    };
};
const deserializeAws_restJson1ProposalSummaryList = (output, context) => {
    return (output || [])
        .filter((e) => e != null)
        .map((entry) => {
        if (entry === null) {
            return null;
        }
        return deserializeAws_restJson1ProposalSummary(entry, context);
    });
};
const deserializeAws_restJson1ProposalVoteList = (output, context) => {
    return (output || [])
        .filter((e) => e != null)
        .map((entry) => {
        if (entry === null) {
            return null;
        }
        return deserializeAws_restJson1VoteSummary(entry, context);
    });
};
const deserializeAws_restJson1RemoveAction = (output, context) => {
    return {
        MemberId: output.MemberId !== undefined && output.MemberId !== null ? output.MemberId : undefined,
    };
};
const deserializeAws_restJson1RemoveActionList = (output, context) => {
    return (output || [])
        .filter((e) => e != null)
        .map((entry) => {
        if (entry === null) {
            return null;
        }
        return deserializeAws_restJson1RemoveAction(entry, context);
    });
};
const deserializeAws_restJson1VoteSummary = (output, context) => {
    return {
        MemberId: output.MemberId !== undefined && output.MemberId !== null ? output.MemberId : undefined,
        MemberName: output.MemberName !== undefined && output.MemberName !== null ? output.MemberName : undefined,
        Vote: output.Vote !== undefined && output.Vote !== null ? output.Vote : undefined,
    };
};
const deserializeAws_restJson1VotingPolicy = (output, context) => {
    return {
        ApprovalThresholdPolicy: output.ApprovalThresholdPolicy !== undefined && output.ApprovalThresholdPolicy !== null
            ? deserializeAws_restJson1ApprovalThresholdPolicy(output.ApprovalThresholdPolicy, context)
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