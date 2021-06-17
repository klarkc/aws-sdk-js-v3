"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.deserializeAws_restJson1UpdateLedgerPermissionsModeCommand = exports.deserializeAws_restJson1UpdateLedgerCommand = exports.deserializeAws_restJson1UntagResourceCommand = exports.deserializeAws_restJson1TagResourceCommand = exports.deserializeAws_restJson1StreamJournalToKinesisCommand = exports.deserializeAws_restJson1ListTagsForResourceCommand = exports.deserializeAws_restJson1ListLedgersCommand = exports.deserializeAws_restJson1ListJournalS3ExportsForLedgerCommand = exports.deserializeAws_restJson1ListJournalS3ExportsCommand = exports.deserializeAws_restJson1ListJournalKinesisStreamsForLedgerCommand = exports.deserializeAws_restJson1GetRevisionCommand = exports.deserializeAws_restJson1GetDigestCommand = exports.deserializeAws_restJson1GetBlockCommand = exports.deserializeAws_restJson1ExportJournalToS3Command = exports.deserializeAws_restJson1DescribeLedgerCommand = exports.deserializeAws_restJson1DescribeJournalS3ExportCommand = exports.deserializeAws_restJson1DescribeJournalKinesisStreamCommand = exports.deserializeAws_restJson1DeleteLedgerCommand = exports.deserializeAws_restJson1CreateLedgerCommand = exports.deserializeAws_restJson1CancelJournalKinesisStreamCommand = exports.serializeAws_restJson1UpdateLedgerPermissionsModeCommand = exports.serializeAws_restJson1UpdateLedgerCommand = exports.serializeAws_restJson1UntagResourceCommand = exports.serializeAws_restJson1TagResourceCommand = exports.serializeAws_restJson1StreamJournalToKinesisCommand = exports.serializeAws_restJson1ListTagsForResourceCommand = exports.serializeAws_restJson1ListLedgersCommand = exports.serializeAws_restJson1ListJournalS3ExportsForLedgerCommand = exports.serializeAws_restJson1ListJournalS3ExportsCommand = exports.serializeAws_restJson1ListJournalKinesisStreamsForLedgerCommand = exports.serializeAws_restJson1GetRevisionCommand = exports.serializeAws_restJson1GetDigestCommand = exports.serializeAws_restJson1GetBlockCommand = exports.serializeAws_restJson1ExportJournalToS3Command = exports.serializeAws_restJson1DescribeLedgerCommand = exports.serializeAws_restJson1DescribeJournalS3ExportCommand = exports.serializeAws_restJson1DescribeJournalKinesisStreamCommand = exports.serializeAws_restJson1DeleteLedgerCommand = exports.serializeAws_restJson1CreateLedgerCommand = exports.serializeAws_restJson1CancelJournalKinesisStreamCommand = void 0;
const protocol_http_1 = require("@aws-sdk/protocol-http");
const smithy_client_1 = require("@aws-sdk/smithy-client");
const serializeAws_restJson1CancelJournalKinesisStreamCommand = async (input, context) => {
    const headers = {};
    let resolvedPath = "/ledgers/{LedgerName}/journal-kinesis-streams/{StreamId}";
    if (input.LedgerName !== undefined) {
        const labelValue = input.LedgerName;
        if (labelValue.length <= 0) {
            throw new Error("Empty value provided for input HTTP label: LedgerName.");
        }
        resolvedPath = resolvedPath.replace("{LedgerName}", smithy_client_1.extendedEncodeURIComponent(labelValue));
    }
    else {
        throw new Error("No value provided for input HTTP label: LedgerName.");
    }
    if (input.StreamId !== undefined) {
        const labelValue = input.StreamId;
        if (labelValue.length <= 0) {
            throw new Error("Empty value provided for input HTTP label: StreamId.");
        }
        resolvedPath = resolvedPath.replace("{StreamId}", smithy_client_1.extendedEncodeURIComponent(labelValue));
    }
    else {
        throw new Error("No value provided for input HTTP label: StreamId.");
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
exports.serializeAws_restJson1CancelJournalKinesisStreamCommand = serializeAws_restJson1CancelJournalKinesisStreamCommand;
const serializeAws_restJson1CreateLedgerCommand = async (input, context) => {
    const headers = {
        "content-type": "application/json",
    };
    let resolvedPath = "/ledgers";
    let body;
    body = JSON.stringify({
        ...(input.DeletionProtection !== undefined &&
            input.DeletionProtection !== null && { DeletionProtection: input.DeletionProtection }),
        ...(input.Name !== undefined && input.Name !== null && { Name: input.Name }),
        ...(input.PermissionsMode !== undefined &&
            input.PermissionsMode !== null && { PermissionsMode: input.PermissionsMode }),
        ...(input.Tags !== undefined && input.Tags !== null && { Tags: serializeAws_restJson1Tags(input.Tags, context) }),
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
exports.serializeAws_restJson1CreateLedgerCommand = serializeAws_restJson1CreateLedgerCommand;
const serializeAws_restJson1DeleteLedgerCommand = async (input, context) => {
    const headers = {};
    let resolvedPath = "/ledgers/{Name}";
    if (input.Name !== undefined) {
        const labelValue = input.Name;
        if (labelValue.length <= 0) {
            throw new Error("Empty value provided for input HTTP label: Name.");
        }
        resolvedPath = resolvedPath.replace("{Name}", smithy_client_1.extendedEncodeURIComponent(labelValue));
    }
    else {
        throw new Error("No value provided for input HTTP label: Name.");
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
exports.serializeAws_restJson1DeleteLedgerCommand = serializeAws_restJson1DeleteLedgerCommand;
const serializeAws_restJson1DescribeJournalKinesisStreamCommand = async (input, context) => {
    const headers = {};
    let resolvedPath = "/ledgers/{LedgerName}/journal-kinesis-streams/{StreamId}";
    if (input.LedgerName !== undefined) {
        const labelValue = input.LedgerName;
        if (labelValue.length <= 0) {
            throw new Error("Empty value provided for input HTTP label: LedgerName.");
        }
        resolvedPath = resolvedPath.replace("{LedgerName}", smithy_client_1.extendedEncodeURIComponent(labelValue));
    }
    else {
        throw new Error("No value provided for input HTTP label: LedgerName.");
    }
    if (input.StreamId !== undefined) {
        const labelValue = input.StreamId;
        if (labelValue.length <= 0) {
            throw new Error("Empty value provided for input HTTP label: StreamId.");
        }
        resolvedPath = resolvedPath.replace("{StreamId}", smithy_client_1.extendedEncodeURIComponent(labelValue));
    }
    else {
        throw new Error("No value provided for input HTTP label: StreamId.");
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
exports.serializeAws_restJson1DescribeJournalKinesisStreamCommand = serializeAws_restJson1DescribeJournalKinesisStreamCommand;
const serializeAws_restJson1DescribeJournalS3ExportCommand = async (input, context) => {
    const headers = {};
    let resolvedPath = "/ledgers/{Name}/journal-s3-exports/{ExportId}";
    if (input.Name !== undefined) {
        const labelValue = input.Name;
        if (labelValue.length <= 0) {
            throw new Error("Empty value provided for input HTTP label: Name.");
        }
        resolvedPath = resolvedPath.replace("{Name}", smithy_client_1.extendedEncodeURIComponent(labelValue));
    }
    else {
        throw new Error("No value provided for input HTTP label: Name.");
    }
    if (input.ExportId !== undefined) {
        const labelValue = input.ExportId;
        if (labelValue.length <= 0) {
            throw new Error("Empty value provided for input HTTP label: ExportId.");
        }
        resolvedPath = resolvedPath.replace("{ExportId}", smithy_client_1.extendedEncodeURIComponent(labelValue));
    }
    else {
        throw new Error("No value provided for input HTTP label: ExportId.");
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
exports.serializeAws_restJson1DescribeJournalS3ExportCommand = serializeAws_restJson1DescribeJournalS3ExportCommand;
const serializeAws_restJson1DescribeLedgerCommand = async (input, context) => {
    const headers = {};
    let resolvedPath = "/ledgers/{Name}";
    if (input.Name !== undefined) {
        const labelValue = input.Name;
        if (labelValue.length <= 0) {
            throw new Error("Empty value provided for input HTTP label: Name.");
        }
        resolvedPath = resolvedPath.replace("{Name}", smithy_client_1.extendedEncodeURIComponent(labelValue));
    }
    else {
        throw new Error("No value provided for input HTTP label: Name.");
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
exports.serializeAws_restJson1DescribeLedgerCommand = serializeAws_restJson1DescribeLedgerCommand;
const serializeAws_restJson1ExportJournalToS3Command = async (input, context) => {
    const headers = {
        "content-type": "application/json",
    };
    let resolvedPath = "/ledgers/{Name}/journal-s3-exports";
    if (input.Name !== undefined) {
        const labelValue = input.Name;
        if (labelValue.length <= 0) {
            throw new Error("Empty value provided for input HTTP label: Name.");
        }
        resolvedPath = resolvedPath.replace("{Name}", smithy_client_1.extendedEncodeURIComponent(labelValue));
    }
    else {
        throw new Error("No value provided for input HTTP label: Name.");
    }
    let body;
    body = JSON.stringify({
        ...(input.ExclusiveEndTime !== undefined &&
            input.ExclusiveEndTime !== null && { ExclusiveEndTime: Math.round(input.ExclusiveEndTime.getTime() / 1000) }),
        ...(input.InclusiveStartTime !== undefined &&
            input.InclusiveStartTime !== null && {
            InclusiveStartTime: Math.round(input.InclusiveStartTime.getTime() / 1000),
        }),
        ...(input.RoleArn !== undefined && input.RoleArn !== null && { RoleArn: input.RoleArn }),
        ...(input.S3ExportConfiguration !== undefined &&
            input.S3ExportConfiguration !== null && {
            S3ExportConfiguration: serializeAws_restJson1S3ExportConfiguration(input.S3ExportConfiguration, context),
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
exports.serializeAws_restJson1ExportJournalToS3Command = serializeAws_restJson1ExportJournalToS3Command;
const serializeAws_restJson1GetBlockCommand = async (input, context) => {
    const headers = {
        "content-type": "application/json",
    };
    let resolvedPath = "/ledgers/{Name}/block";
    if (input.Name !== undefined) {
        const labelValue = input.Name;
        if (labelValue.length <= 0) {
            throw new Error("Empty value provided for input HTTP label: Name.");
        }
        resolvedPath = resolvedPath.replace("{Name}", smithy_client_1.extendedEncodeURIComponent(labelValue));
    }
    else {
        throw new Error("No value provided for input HTTP label: Name.");
    }
    let body;
    body = JSON.stringify({
        ...(input.BlockAddress !== undefined &&
            input.BlockAddress !== null && { BlockAddress: serializeAws_restJson1ValueHolder(input.BlockAddress, context) }),
        ...(input.DigestTipAddress !== undefined &&
            input.DigestTipAddress !== null && {
            DigestTipAddress: serializeAws_restJson1ValueHolder(input.DigestTipAddress, context),
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
exports.serializeAws_restJson1GetBlockCommand = serializeAws_restJson1GetBlockCommand;
const serializeAws_restJson1GetDigestCommand = async (input, context) => {
    const headers = {};
    let resolvedPath = "/ledgers/{Name}/digest";
    if (input.Name !== undefined) {
        const labelValue = input.Name;
        if (labelValue.length <= 0) {
            throw new Error("Empty value provided for input HTTP label: Name.");
        }
        resolvedPath = resolvedPath.replace("{Name}", smithy_client_1.extendedEncodeURIComponent(labelValue));
    }
    else {
        throw new Error("No value provided for input HTTP label: Name.");
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
exports.serializeAws_restJson1GetDigestCommand = serializeAws_restJson1GetDigestCommand;
const serializeAws_restJson1GetRevisionCommand = async (input, context) => {
    const headers = {
        "content-type": "application/json",
    };
    let resolvedPath = "/ledgers/{Name}/revision";
    if (input.Name !== undefined) {
        const labelValue = input.Name;
        if (labelValue.length <= 0) {
            throw new Error("Empty value provided for input HTTP label: Name.");
        }
        resolvedPath = resolvedPath.replace("{Name}", smithy_client_1.extendedEncodeURIComponent(labelValue));
    }
    else {
        throw new Error("No value provided for input HTTP label: Name.");
    }
    let body;
    body = JSON.stringify({
        ...(input.BlockAddress !== undefined &&
            input.BlockAddress !== null && { BlockAddress: serializeAws_restJson1ValueHolder(input.BlockAddress, context) }),
        ...(input.DigestTipAddress !== undefined &&
            input.DigestTipAddress !== null && {
            DigestTipAddress: serializeAws_restJson1ValueHolder(input.DigestTipAddress, context),
        }),
        ...(input.DocumentId !== undefined && input.DocumentId !== null && { DocumentId: input.DocumentId }),
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
exports.serializeAws_restJson1GetRevisionCommand = serializeAws_restJson1GetRevisionCommand;
const serializeAws_restJson1ListJournalKinesisStreamsForLedgerCommand = async (input, context) => {
    const headers = {};
    let resolvedPath = "/ledgers/{LedgerName}/journal-kinesis-streams";
    if (input.LedgerName !== undefined) {
        const labelValue = input.LedgerName;
        if (labelValue.length <= 0) {
            throw new Error("Empty value provided for input HTTP label: LedgerName.");
        }
        resolvedPath = resolvedPath.replace("{LedgerName}", smithy_client_1.extendedEncodeURIComponent(labelValue));
    }
    else {
        throw new Error("No value provided for input HTTP label: LedgerName.");
    }
    const query = {
        ...(input.MaxResults !== undefined && { max_results: input.MaxResults.toString() }),
        ...(input.NextToken !== undefined && { next_token: input.NextToken }),
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
exports.serializeAws_restJson1ListJournalKinesisStreamsForLedgerCommand = serializeAws_restJson1ListJournalKinesisStreamsForLedgerCommand;
const serializeAws_restJson1ListJournalS3ExportsCommand = async (input, context) => {
    const headers = {};
    let resolvedPath = "/journal-s3-exports";
    const query = {
        ...(input.MaxResults !== undefined && { max_results: input.MaxResults.toString() }),
        ...(input.NextToken !== undefined && { next_token: input.NextToken }),
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
exports.serializeAws_restJson1ListJournalS3ExportsCommand = serializeAws_restJson1ListJournalS3ExportsCommand;
const serializeAws_restJson1ListJournalS3ExportsForLedgerCommand = async (input, context) => {
    const headers = {};
    let resolvedPath = "/ledgers/{Name}/journal-s3-exports";
    if (input.Name !== undefined) {
        const labelValue = input.Name;
        if (labelValue.length <= 0) {
            throw new Error("Empty value provided for input HTTP label: Name.");
        }
        resolvedPath = resolvedPath.replace("{Name}", smithy_client_1.extendedEncodeURIComponent(labelValue));
    }
    else {
        throw new Error("No value provided for input HTTP label: Name.");
    }
    const query = {
        ...(input.MaxResults !== undefined && { max_results: input.MaxResults.toString() }),
        ...(input.NextToken !== undefined && { next_token: input.NextToken }),
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
exports.serializeAws_restJson1ListJournalS3ExportsForLedgerCommand = serializeAws_restJson1ListJournalS3ExportsForLedgerCommand;
const serializeAws_restJson1ListLedgersCommand = async (input, context) => {
    const headers = {};
    let resolvedPath = "/ledgers";
    const query = {
        ...(input.MaxResults !== undefined && { max_results: input.MaxResults.toString() }),
        ...(input.NextToken !== undefined && { next_token: input.NextToken }),
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
exports.serializeAws_restJson1ListLedgersCommand = serializeAws_restJson1ListLedgersCommand;
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
const serializeAws_restJson1StreamJournalToKinesisCommand = async (input, context) => {
    const headers = {
        "content-type": "application/json",
    };
    let resolvedPath = "/ledgers/{LedgerName}/journal-kinesis-streams";
    if (input.LedgerName !== undefined) {
        const labelValue = input.LedgerName;
        if (labelValue.length <= 0) {
            throw new Error("Empty value provided for input HTTP label: LedgerName.");
        }
        resolvedPath = resolvedPath.replace("{LedgerName}", smithy_client_1.extendedEncodeURIComponent(labelValue));
    }
    else {
        throw new Error("No value provided for input HTTP label: LedgerName.");
    }
    let body;
    body = JSON.stringify({
        ...(input.ExclusiveEndTime !== undefined &&
            input.ExclusiveEndTime !== null && { ExclusiveEndTime: Math.round(input.ExclusiveEndTime.getTime() / 1000) }),
        ...(input.InclusiveStartTime !== undefined &&
            input.InclusiveStartTime !== null && {
            InclusiveStartTime: Math.round(input.InclusiveStartTime.getTime() / 1000),
        }),
        ...(input.KinesisConfiguration !== undefined &&
            input.KinesisConfiguration !== null && {
            KinesisConfiguration: serializeAws_restJson1KinesisConfiguration(input.KinesisConfiguration, context),
        }),
        ...(input.RoleArn !== undefined && input.RoleArn !== null && { RoleArn: input.RoleArn }),
        ...(input.StreamName !== undefined && input.StreamName !== null && { StreamName: input.StreamName }),
        ...(input.Tags !== undefined && input.Tags !== null && { Tags: serializeAws_restJson1Tags(input.Tags, context) }),
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
exports.serializeAws_restJson1StreamJournalToKinesisCommand = serializeAws_restJson1StreamJournalToKinesisCommand;
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
        ...(input.Tags !== undefined && input.Tags !== null && { Tags: serializeAws_restJson1Tags(input.Tags, context) }),
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
const serializeAws_restJson1UpdateLedgerCommand = async (input, context) => {
    const headers = {
        "content-type": "application/json",
    };
    let resolvedPath = "/ledgers/{Name}";
    if (input.Name !== undefined) {
        const labelValue = input.Name;
        if (labelValue.length <= 0) {
            throw new Error("Empty value provided for input HTTP label: Name.");
        }
        resolvedPath = resolvedPath.replace("{Name}", smithy_client_1.extendedEncodeURIComponent(labelValue));
    }
    else {
        throw new Error("No value provided for input HTTP label: Name.");
    }
    let body;
    body = JSON.stringify({
        ...(input.DeletionProtection !== undefined &&
            input.DeletionProtection !== null && { DeletionProtection: input.DeletionProtection }),
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
exports.serializeAws_restJson1UpdateLedgerCommand = serializeAws_restJson1UpdateLedgerCommand;
const serializeAws_restJson1UpdateLedgerPermissionsModeCommand = async (input, context) => {
    const headers = {
        "content-type": "application/json",
    };
    let resolvedPath = "/ledgers/{Name}/permissions-mode";
    if (input.Name !== undefined) {
        const labelValue = input.Name;
        if (labelValue.length <= 0) {
            throw new Error("Empty value provided for input HTTP label: Name.");
        }
        resolvedPath = resolvedPath.replace("{Name}", smithy_client_1.extendedEncodeURIComponent(labelValue));
    }
    else {
        throw new Error("No value provided for input HTTP label: Name.");
    }
    let body;
    body = JSON.stringify({
        ...(input.PermissionsMode !== undefined &&
            input.PermissionsMode !== null && { PermissionsMode: input.PermissionsMode }),
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
exports.serializeAws_restJson1UpdateLedgerPermissionsModeCommand = serializeAws_restJson1UpdateLedgerPermissionsModeCommand;
const deserializeAws_restJson1CancelJournalKinesisStreamCommand = async (output, context) => {
    if (output.statusCode !== 200 && output.statusCode >= 300) {
        return deserializeAws_restJson1CancelJournalKinesisStreamCommandError(output, context);
    }
    const contents = {
        $metadata: deserializeMetadata(output),
        StreamId: undefined,
    };
    const data = await parseBody(output.body, context);
    if (data.StreamId !== undefined && data.StreamId !== null) {
        contents.StreamId = data.StreamId;
    }
    return Promise.resolve(contents);
};
exports.deserializeAws_restJson1CancelJournalKinesisStreamCommand = deserializeAws_restJson1CancelJournalKinesisStreamCommand;
const deserializeAws_restJson1CancelJournalKinesisStreamCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "InvalidParameterException":
        case "com.amazonaws.qldb#InvalidParameterException":
            response = {
                ...(await deserializeAws_restJson1InvalidParameterExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ResourceNotFoundException":
        case "com.amazonaws.qldb#ResourceNotFoundException":
            response = {
                ...(await deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ResourcePreconditionNotMetException":
        case "com.amazonaws.qldb#ResourcePreconditionNotMetException":
            response = {
                ...(await deserializeAws_restJson1ResourcePreconditionNotMetExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        default:
            const parsedBody = parsedOutput.body;
            errorCode = parsedBody.code || parsedBody.Code || errorCode;
            response = {
                ...parsedBody,
                name: `${errorCode}`,
                message: parsedBody.message || parsedBody.Message || errorCode,
                $fault: "client",
                $metadata: deserializeMetadata(output),
            };
    }
    const message = response.message || response.Message || errorCode;
    response.message = message;
    delete response.Message;
    return Promise.reject(Object.assign(new Error(message), response));
};
const deserializeAws_restJson1CreateLedgerCommand = async (output, context) => {
    if (output.statusCode !== 200 && output.statusCode >= 300) {
        return deserializeAws_restJson1CreateLedgerCommandError(output, context);
    }
    const contents = {
        $metadata: deserializeMetadata(output),
        Arn: undefined,
        CreationDateTime: undefined,
        DeletionProtection: undefined,
        Name: undefined,
        PermissionsMode: undefined,
        State: undefined,
    };
    const data = await parseBody(output.body, context);
    if (data.Arn !== undefined && data.Arn !== null) {
        contents.Arn = data.Arn;
    }
    if (data.CreationDateTime !== undefined && data.CreationDateTime !== null) {
        contents.CreationDateTime = new Date(Math.round(data.CreationDateTime * 1000));
    }
    if (data.DeletionProtection !== undefined && data.DeletionProtection !== null) {
        contents.DeletionProtection = data.DeletionProtection;
    }
    if (data.Name !== undefined && data.Name !== null) {
        contents.Name = data.Name;
    }
    if (data.PermissionsMode !== undefined && data.PermissionsMode !== null) {
        contents.PermissionsMode = data.PermissionsMode;
    }
    if (data.State !== undefined && data.State !== null) {
        contents.State = data.State;
    }
    return Promise.resolve(contents);
};
exports.deserializeAws_restJson1CreateLedgerCommand = deserializeAws_restJson1CreateLedgerCommand;
const deserializeAws_restJson1CreateLedgerCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "InvalidParameterException":
        case "com.amazonaws.qldb#InvalidParameterException":
            response = {
                ...(await deserializeAws_restJson1InvalidParameterExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "LimitExceededException":
        case "com.amazonaws.qldb#LimitExceededException":
            response = {
                ...(await deserializeAws_restJson1LimitExceededExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ResourceAlreadyExistsException":
        case "com.amazonaws.qldb#ResourceAlreadyExistsException":
            response = {
                ...(await deserializeAws_restJson1ResourceAlreadyExistsExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ResourceInUseException":
        case "com.amazonaws.qldb#ResourceInUseException":
            response = {
                ...(await deserializeAws_restJson1ResourceInUseExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        default:
            const parsedBody = parsedOutput.body;
            errorCode = parsedBody.code || parsedBody.Code || errorCode;
            response = {
                ...parsedBody,
                name: `${errorCode}`,
                message: parsedBody.message || parsedBody.Message || errorCode,
                $fault: "client",
                $metadata: deserializeMetadata(output),
            };
    }
    const message = response.message || response.Message || errorCode;
    response.message = message;
    delete response.Message;
    return Promise.reject(Object.assign(new Error(message), response));
};
const deserializeAws_restJson1DeleteLedgerCommand = async (output, context) => {
    if (output.statusCode !== 200 && output.statusCode >= 300) {
        return deserializeAws_restJson1DeleteLedgerCommandError(output, context);
    }
    const contents = {
        $metadata: deserializeMetadata(output),
    };
    await collectBody(output.body, context);
    return Promise.resolve(contents);
};
exports.deserializeAws_restJson1DeleteLedgerCommand = deserializeAws_restJson1DeleteLedgerCommand;
const deserializeAws_restJson1DeleteLedgerCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "InvalidParameterException":
        case "com.amazonaws.qldb#InvalidParameterException":
            response = {
                ...(await deserializeAws_restJson1InvalidParameterExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ResourceInUseException":
        case "com.amazonaws.qldb#ResourceInUseException":
            response = {
                ...(await deserializeAws_restJson1ResourceInUseExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ResourceNotFoundException":
        case "com.amazonaws.qldb#ResourceNotFoundException":
            response = {
                ...(await deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ResourcePreconditionNotMetException":
        case "com.amazonaws.qldb#ResourcePreconditionNotMetException":
            response = {
                ...(await deserializeAws_restJson1ResourcePreconditionNotMetExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        default:
            const parsedBody = parsedOutput.body;
            errorCode = parsedBody.code || parsedBody.Code || errorCode;
            response = {
                ...parsedBody,
                name: `${errorCode}`,
                message: parsedBody.message || parsedBody.Message || errorCode,
                $fault: "client",
                $metadata: deserializeMetadata(output),
            };
    }
    const message = response.message || response.Message || errorCode;
    response.message = message;
    delete response.Message;
    return Promise.reject(Object.assign(new Error(message), response));
};
const deserializeAws_restJson1DescribeJournalKinesisStreamCommand = async (output, context) => {
    if (output.statusCode !== 200 && output.statusCode >= 300) {
        return deserializeAws_restJson1DescribeJournalKinesisStreamCommandError(output, context);
    }
    const contents = {
        $metadata: deserializeMetadata(output),
        Stream: undefined,
    };
    const data = await parseBody(output.body, context);
    if (data.Stream !== undefined && data.Stream !== null) {
        contents.Stream = deserializeAws_restJson1JournalKinesisStreamDescription(data.Stream, context);
    }
    return Promise.resolve(contents);
};
exports.deserializeAws_restJson1DescribeJournalKinesisStreamCommand = deserializeAws_restJson1DescribeJournalKinesisStreamCommand;
const deserializeAws_restJson1DescribeJournalKinesisStreamCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "InvalidParameterException":
        case "com.amazonaws.qldb#InvalidParameterException":
            response = {
                ...(await deserializeAws_restJson1InvalidParameterExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ResourceNotFoundException":
        case "com.amazonaws.qldb#ResourceNotFoundException":
            response = {
                ...(await deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ResourcePreconditionNotMetException":
        case "com.amazonaws.qldb#ResourcePreconditionNotMetException":
            response = {
                ...(await deserializeAws_restJson1ResourcePreconditionNotMetExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        default:
            const parsedBody = parsedOutput.body;
            errorCode = parsedBody.code || parsedBody.Code || errorCode;
            response = {
                ...parsedBody,
                name: `${errorCode}`,
                message: parsedBody.message || parsedBody.Message || errorCode,
                $fault: "client",
                $metadata: deserializeMetadata(output),
            };
    }
    const message = response.message || response.Message || errorCode;
    response.message = message;
    delete response.Message;
    return Promise.reject(Object.assign(new Error(message), response));
};
const deserializeAws_restJson1DescribeJournalS3ExportCommand = async (output, context) => {
    if (output.statusCode !== 200 && output.statusCode >= 300) {
        return deserializeAws_restJson1DescribeJournalS3ExportCommandError(output, context);
    }
    const contents = {
        $metadata: deserializeMetadata(output),
        ExportDescription: undefined,
    };
    const data = await parseBody(output.body, context);
    if (data.ExportDescription !== undefined && data.ExportDescription !== null) {
        contents.ExportDescription = deserializeAws_restJson1JournalS3ExportDescription(data.ExportDescription, context);
    }
    return Promise.resolve(contents);
};
exports.deserializeAws_restJson1DescribeJournalS3ExportCommand = deserializeAws_restJson1DescribeJournalS3ExportCommand;
const deserializeAws_restJson1DescribeJournalS3ExportCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "ResourceNotFoundException":
        case "com.amazonaws.qldb#ResourceNotFoundException":
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
const deserializeAws_restJson1DescribeLedgerCommand = async (output, context) => {
    if (output.statusCode !== 200 && output.statusCode >= 300) {
        return deserializeAws_restJson1DescribeLedgerCommandError(output, context);
    }
    const contents = {
        $metadata: deserializeMetadata(output),
        Arn: undefined,
        CreationDateTime: undefined,
        DeletionProtection: undefined,
        Name: undefined,
        PermissionsMode: undefined,
        State: undefined,
    };
    const data = await parseBody(output.body, context);
    if (data.Arn !== undefined && data.Arn !== null) {
        contents.Arn = data.Arn;
    }
    if (data.CreationDateTime !== undefined && data.CreationDateTime !== null) {
        contents.CreationDateTime = new Date(Math.round(data.CreationDateTime * 1000));
    }
    if (data.DeletionProtection !== undefined && data.DeletionProtection !== null) {
        contents.DeletionProtection = data.DeletionProtection;
    }
    if (data.Name !== undefined && data.Name !== null) {
        contents.Name = data.Name;
    }
    if (data.PermissionsMode !== undefined && data.PermissionsMode !== null) {
        contents.PermissionsMode = data.PermissionsMode;
    }
    if (data.State !== undefined && data.State !== null) {
        contents.State = data.State;
    }
    return Promise.resolve(contents);
};
exports.deserializeAws_restJson1DescribeLedgerCommand = deserializeAws_restJson1DescribeLedgerCommand;
const deserializeAws_restJson1DescribeLedgerCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "InvalidParameterException":
        case "com.amazonaws.qldb#InvalidParameterException":
            response = {
                ...(await deserializeAws_restJson1InvalidParameterExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ResourceNotFoundException":
        case "com.amazonaws.qldb#ResourceNotFoundException":
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
const deserializeAws_restJson1ExportJournalToS3Command = async (output, context) => {
    if (output.statusCode !== 200 && output.statusCode >= 300) {
        return deserializeAws_restJson1ExportJournalToS3CommandError(output, context);
    }
    const contents = {
        $metadata: deserializeMetadata(output),
        ExportId: undefined,
    };
    const data = await parseBody(output.body, context);
    if (data.ExportId !== undefined && data.ExportId !== null) {
        contents.ExportId = data.ExportId;
    }
    return Promise.resolve(contents);
};
exports.deserializeAws_restJson1ExportJournalToS3Command = deserializeAws_restJson1ExportJournalToS3Command;
const deserializeAws_restJson1ExportJournalToS3CommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "ResourceNotFoundException":
        case "com.amazonaws.qldb#ResourceNotFoundException":
            response = {
                ...(await deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ResourcePreconditionNotMetException":
        case "com.amazonaws.qldb#ResourcePreconditionNotMetException":
            response = {
                ...(await deserializeAws_restJson1ResourcePreconditionNotMetExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        default:
            const parsedBody = parsedOutput.body;
            errorCode = parsedBody.code || parsedBody.Code || errorCode;
            response = {
                ...parsedBody,
                name: `${errorCode}`,
                message: parsedBody.message || parsedBody.Message || errorCode,
                $fault: "client",
                $metadata: deserializeMetadata(output),
            };
    }
    const message = response.message || response.Message || errorCode;
    response.message = message;
    delete response.Message;
    return Promise.reject(Object.assign(new Error(message), response));
};
const deserializeAws_restJson1GetBlockCommand = async (output, context) => {
    if (output.statusCode !== 200 && output.statusCode >= 300) {
        return deserializeAws_restJson1GetBlockCommandError(output, context);
    }
    const contents = {
        $metadata: deserializeMetadata(output),
        Block: undefined,
        Proof: undefined,
    };
    const data = await parseBody(output.body, context);
    if (data.Block !== undefined && data.Block !== null) {
        contents.Block = deserializeAws_restJson1ValueHolder(data.Block, context);
    }
    if (data.Proof !== undefined && data.Proof !== null) {
        contents.Proof = deserializeAws_restJson1ValueHolder(data.Proof, context);
    }
    return Promise.resolve(contents);
};
exports.deserializeAws_restJson1GetBlockCommand = deserializeAws_restJson1GetBlockCommand;
const deserializeAws_restJson1GetBlockCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "InvalidParameterException":
        case "com.amazonaws.qldb#InvalidParameterException":
            response = {
                ...(await deserializeAws_restJson1InvalidParameterExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ResourceNotFoundException":
        case "com.amazonaws.qldb#ResourceNotFoundException":
            response = {
                ...(await deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ResourcePreconditionNotMetException":
        case "com.amazonaws.qldb#ResourcePreconditionNotMetException":
            response = {
                ...(await deserializeAws_restJson1ResourcePreconditionNotMetExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        default:
            const parsedBody = parsedOutput.body;
            errorCode = parsedBody.code || parsedBody.Code || errorCode;
            response = {
                ...parsedBody,
                name: `${errorCode}`,
                message: parsedBody.message || parsedBody.Message || errorCode,
                $fault: "client",
                $metadata: deserializeMetadata(output),
            };
    }
    const message = response.message || response.Message || errorCode;
    response.message = message;
    delete response.Message;
    return Promise.reject(Object.assign(new Error(message), response));
};
const deserializeAws_restJson1GetDigestCommand = async (output, context) => {
    if (output.statusCode !== 200 && output.statusCode >= 300) {
        return deserializeAws_restJson1GetDigestCommandError(output, context);
    }
    const contents = {
        $metadata: deserializeMetadata(output),
        Digest: undefined,
        DigestTipAddress: undefined,
    };
    const data = await parseBody(output.body, context);
    if (data.Digest !== undefined && data.Digest !== null) {
        contents.Digest = context.base64Decoder(data.Digest);
    }
    if (data.DigestTipAddress !== undefined && data.DigestTipAddress !== null) {
        contents.DigestTipAddress = deserializeAws_restJson1ValueHolder(data.DigestTipAddress, context);
    }
    return Promise.resolve(contents);
};
exports.deserializeAws_restJson1GetDigestCommand = deserializeAws_restJson1GetDigestCommand;
const deserializeAws_restJson1GetDigestCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "InvalidParameterException":
        case "com.amazonaws.qldb#InvalidParameterException":
            response = {
                ...(await deserializeAws_restJson1InvalidParameterExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ResourceNotFoundException":
        case "com.amazonaws.qldb#ResourceNotFoundException":
            response = {
                ...(await deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ResourcePreconditionNotMetException":
        case "com.amazonaws.qldb#ResourcePreconditionNotMetException":
            response = {
                ...(await deserializeAws_restJson1ResourcePreconditionNotMetExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        default:
            const parsedBody = parsedOutput.body;
            errorCode = parsedBody.code || parsedBody.Code || errorCode;
            response = {
                ...parsedBody,
                name: `${errorCode}`,
                message: parsedBody.message || parsedBody.Message || errorCode,
                $fault: "client",
                $metadata: deserializeMetadata(output),
            };
    }
    const message = response.message || response.Message || errorCode;
    response.message = message;
    delete response.Message;
    return Promise.reject(Object.assign(new Error(message), response));
};
const deserializeAws_restJson1GetRevisionCommand = async (output, context) => {
    if (output.statusCode !== 200 && output.statusCode >= 300) {
        return deserializeAws_restJson1GetRevisionCommandError(output, context);
    }
    const contents = {
        $metadata: deserializeMetadata(output),
        Proof: undefined,
        Revision: undefined,
    };
    const data = await parseBody(output.body, context);
    if (data.Proof !== undefined && data.Proof !== null) {
        contents.Proof = deserializeAws_restJson1ValueHolder(data.Proof, context);
    }
    if (data.Revision !== undefined && data.Revision !== null) {
        contents.Revision = deserializeAws_restJson1ValueHolder(data.Revision, context);
    }
    return Promise.resolve(contents);
};
exports.deserializeAws_restJson1GetRevisionCommand = deserializeAws_restJson1GetRevisionCommand;
const deserializeAws_restJson1GetRevisionCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "InvalidParameterException":
        case "com.amazonaws.qldb#InvalidParameterException":
            response = {
                ...(await deserializeAws_restJson1InvalidParameterExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ResourceNotFoundException":
        case "com.amazonaws.qldb#ResourceNotFoundException":
            response = {
                ...(await deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ResourcePreconditionNotMetException":
        case "com.amazonaws.qldb#ResourcePreconditionNotMetException":
            response = {
                ...(await deserializeAws_restJson1ResourcePreconditionNotMetExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        default:
            const parsedBody = parsedOutput.body;
            errorCode = parsedBody.code || parsedBody.Code || errorCode;
            response = {
                ...parsedBody,
                name: `${errorCode}`,
                message: parsedBody.message || parsedBody.Message || errorCode,
                $fault: "client",
                $metadata: deserializeMetadata(output),
            };
    }
    const message = response.message || response.Message || errorCode;
    response.message = message;
    delete response.Message;
    return Promise.reject(Object.assign(new Error(message), response));
};
const deserializeAws_restJson1ListJournalKinesisStreamsForLedgerCommand = async (output, context) => {
    if (output.statusCode !== 200 && output.statusCode >= 300) {
        return deserializeAws_restJson1ListJournalKinesisStreamsForLedgerCommandError(output, context);
    }
    const contents = {
        $metadata: deserializeMetadata(output),
        NextToken: undefined,
        Streams: undefined,
    };
    const data = await parseBody(output.body, context);
    if (data.NextToken !== undefined && data.NextToken !== null) {
        contents.NextToken = data.NextToken;
    }
    if (data.Streams !== undefined && data.Streams !== null) {
        contents.Streams = deserializeAws_restJson1JournalKinesisStreamDescriptionList(data.Streams, context);
    }
    return Promise.resolve(contents);
};
exports.deserializeAws_restJson1ListJournalKinesisStreamsForLedgerCommand = deserializeAws_restJson1ListJournalKinesisStreamsForLedgerCommand;
const deserializeAws_restJson1ListJournalKinesisStreamsForLedgerCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "InvalidParameterException":
        case "com.amazonaws.qldb#InvalidParameterException":
            response = {
                ...(await deserializeAws_restJson1InvalidParameterExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ResourceNotFoundException":
        case "com.amazonaws.qldb#ResourceNotFoundException":
            response = {
                ...(await deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ResourcePreconditionNotMetException":
        case "com.amazonaws.qldb#ResourcePreconditionNotMetException":
            response = {
                ...(await deserializeAws_restJson1ResourcePreconditionNotMetExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        default:
            const parsedBody = parsedOutput.body;
            errorCode = parsedBody.code || parsedBody.Code || errorCode;
            response = {
                ...parsedBody,
                name: `${errorCode}`,
                message: parsedBody.message || parsedBody.Message || errorCode,
                $fault: "client",
                $metadata: deserializeMetadata(output),
            };
    }
    const message = response.message || response.Message || errorCode;
    response.message = message;
    delete response.Message;
    return Promise.reject(Object.assign(new Error(message), response));
};
const deserializeAws_restJson1ListJournalS3ExportsCommand = async (output, context) => {
    if (output.statusCode !== 200 && output.statusCode >= 300) {
        return deserializeAws_restJson1ListJournalS3ExportsCommandError(output, context);
    }
    const contents = {
        $metadata: deserializeMetadata(output),
        JournalS3Exports: undefined,
        NextToken: undefined,
    };
    const data = await parseBody(output.body, context);
    if (data.JournalS3Exports !== undefined && data.JournalS3Exports !== null) {
        contents.JournalS3Exports = deserializeAws_restJson1JournalS3ExportList(data.JournalS3Exports, context);
    }
    if (data.NextToken !== undefined && data.NextToken !== null) {
        contents.NextToken = data.NextToken;
    }
    return Promise.resolve(contents);
};
exports.deserializeAws_restJson1ListJournalS3ExportsCommand = deserializeAws_restJson1ListJournalS3ExportsCommand;
const deserializeAws_restJson1ListJournalS3ExportsCommandError = async (output, context) => {
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
const deserializeAws_restJson1ListJournalS3ExportsForLedgerCommand = async (output, context) => {
    if (output.statusCode !== 200 && output.statusCode >= 300) {
        return deserializeAws_restJson1ListJournalS3ExportsForLedgerCommandError(output, context);
    }
    const contents = {
        $metadata: deserializeMetadata(output),
        JournalS3Exports: undefined,
        NextToken: undefined,
    };
    const data = await parseBody(output.body, context);
    if (data.JournalS3Exports !== undefined && data.JournalS3Exports !== null) {
        contents.JournalS3Exports = deserializeAws_restJson1JournalS3ExportList(data.JournalS3Exports, context);
    }
    if (data.NextToken !== undefined && data.NextToken !== null) {
        contents.NextToken = data.NextToken;
    }
    return Promise.resolve(contents);
};
exports.deserializeAws_restJson1ListJournalS3ExportsForLedgerCommand = deserializeAws_restJson1ListJournalS3ExportsForLedgerCommand;
const deserializeAws_restJson1ListJournalS3ExportsForLedgerCommandError = async (output, context) => {
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
const deserializeAws_restJson1ListLedgersCommand = async (output, context) => {
    if (output.statusCode !== 200 && output.statusCode >= 300) {
        return deserializeAws_restJson1ListLedgersCommandError(output, context);
    }
    const contents = {
        $metadata: deserializeMetadata(output),
        Ledgers: undefined,
        NextToken: undefined,
    };
    const data = await parseBody(output.body, context);
    if (data.Ledgers !== undefined && data.Ledgers !== null) {
        contents.Ledgers = deserializeAws_restJson1LedgerList(data.Ledgers, context);
    }
    if (data.NextToken !== undefined && data.NextToken !== null) {
        contents.NextToken = data.NextToken;
    }
    return Promise.resolve(contents);
};
exports.deserializeAws_restJson1ListLedgersCommand = deserializeAws_restJson1ListLedgersCommand;
const deserializeAws_restJson1ListLedgersCommandError = async (output, context) => {
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
        contents.Tags = deserializeAws_restJson1Tags(data.Tags, context);
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
        case "InvalidParameterException":
        case "com.amazonaws.qldb#InvalidParameterException":
            response = {
                ...(await deserializeAws_restJson1InvalidParameterExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ResourceNotFoundException":
        case "com.amazonaws.qldb#ResourceNotFoundException":
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
const deserializeAws_restJson1StreamJournalToKinesisCommand = async (output, context) => {
    if (output.statusCode !== 200 && output.statusCode >= 300) {
        return deserializeAws_restJson1StreamJournalToKinesisCommandError(output, context);
    }
    const contents = {
        $metadata: deserializeMetadata(output),
        StreamId: undefined,
    };
    const data = await parseBody(output.body, context);
    if (data.StreamId !== undefined && data.StreamId !== null) {
        contents.StreamId = data.StreamId;
    }
    return Promise.resolve(contents);
};
exports.deserializeAws_restJson1StreamJournalToKinesisCommand = deserializeAws_restJson1StreamJournalToKinesisCommand;
const deserializeAws_restJson1StreamJournalToKinesisCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "InvalidParameterException":
        case "com.amazonaws.qldb#InvalidParameterException":
            response = {
                ...(await deserializeAws_restJson1InvalidParameterExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ResourceNotFoundException":
        case "com.amazonaws.qldb#ResourceNotFoundException":
            response = {
                ...(await deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ResourcePreconditionNotMetException":
        case "com.amazonaws.qldb#ResourcePreconditionNotMetException":
            response = {
                ...(await deserializeAws_restJson1ResourcePreconditionNotMetExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        default:
            const parsedBody = parsedOutput.body;
            errorCode = parsedBody.code || parsedBody.Code || errorCode;
            response = {
                ...parsedBody,
                name: `${errorCode}`,
                message: parsedBody.message || parsedBody.Message || errorCode,
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
        case "InvalidParameterException":
        case "com.amazonaws.qldb#InvalidParameterException":
            response = {
                ...(await deserializeAws_restJson1InvalidParameterExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ResourceNotFoundException":
        case "com.amazonaws.qldb#ResourceNotFoundException":
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
        case "InvalidParameterException":
        case "com.amazonaws.qldb#InvalidParameterException":
            response = {
                ...(await deserializeAws_restJson1InvalidParameterExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ResourceNotFoundException":
        case "com.amazonaws.qldb#ResourceNotFoundException":
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
const deserializeAws_restJson1UpdateLedgerCommand = async (output, context) => {
    if (output.statusCode !== 200 && output.statusCode >= 300) {
        return deserializeAws_restJson1UpdateLedgerCommandError(output, context);
    }
    const contents = {
        $metadata: deserializeMetadata(output),
        Arn: undefined,
        CreationDateTime: undefined,
        DeletionProtection: undefined,
        Name: undefined,
        State: undefined,
    };
    const data = await parseBody(output.body, context);
    if (data.Arn !== undefined && data.Arn !== null) {
        contents.Arn = data.Arn;
    }
    if (data.CreationDateTime !== undefined && data.CreationDateTime !== null) {
        contents.CreationDateTime = new Date(Math.round(data.CreationDateTime * 1000));
    }
    if (data.DeletionProtection !== undefined && data.DeletionProtection !== null) {
        contents.DeletionProtection = data.DeletionProtection;
    }
    if (data.Name !== undefined && data.Name !== null) {
        contents.Name = data.Name;
    }
    if (data.State !== undefined && data.State !== null) {
        contents.State = data.State;
    }
    return Promise.resolve(contents);
};
exports.deserializeAws_restJson1UpdateLedgerCommand = deserializeAws_restJson1UpdateLedgerCommand;
const deserializeAws_restJson1UpdateLedgerCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "InvalidParameterException":
        case "com.amazonaws.qldb#InvalidParameterException":
            response = {
                ...(await deserializeAws_restJson1InvalidParameterExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ResourceNotFoundException":
        case "com.amazonaws.qldb#ResourceNotFoundException":
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
const deserializeAws_restJson1UpdateLedgerPermissionsModeCommand = async (output, context) => {
    if (output.statusCode !== 200 && output.statusCode >= 300) {
        return deserializeAws_restJson1UpdateLedgerPermissionsModeCommandError(output, context);
    }
    const contents = {
        $metadata: deserializeMetadata(output),
        Arn: undefined,
        Name: undefined,
        PermissionsMode: undefined,
    };
    const data = await parseBody(output.body, context);
    if (data.Arn !== undefined && data.Arn !== null) {
        contents.Arn = data.Arn;
    }
    if (data.Name !== undefined && data.Name !== null) {
        contents.Name = data.Name;
    }
    if (data.PermissionsMode !== undefined && data.PermissionsMode !== null) {
        contents.PermissionsMode = data.PermissionsMode;
    }
    return Promise.resolve(contents);
};
exports.deserializeAws_restJson1UpdateLedgerPermissionsModeCommand = deserializeAws_restJson1UpdateLedgerPermissionsModeCommand;
const deserializeAws_restJson1UpdateLedgerPermissionsModeCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "InvalidParameterException":
        case "com.amazonaws.qldb#InvalidParameterException":
            response = {
                ...(await deserializeAws_restJson1InvalidParameterExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ResourceNotFoundException":
        case "com.amazonaws.qldb#ResourceNotFoundException":
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
const deserializeAws_restJson1InvalidParameterExceptionResponse = async (parsedOutput, context) => {
    const contents = {
        name: "InvalidParameterException",
        $fault: "client",
        $metadata: deserializeMetadata(parsedOutput),
        Message: undefined,
        ParameterName: undefined,
    };
    const data = parsedOutput.body;
    if (data.Message !== undefined && data.Message !== null) {
        contents.Message = data.Message;
    }
    if (data.ParameterName !== undefined && data.ParameterName !== null) {
        contents.ParameterName = data.ParameterName;
    }
    return contents;
};
const deserializeAws_restJson1LimitExceededExceptionResponse = async (parsedOutput, context) => {
    const contents = {
        name: "LimitExceededException",
        $fault: "client",
        $metadata: deserializeMetadata(parsedOutput),
        Message: undefined,
        ResourceType: undefined,
    };
    const data = parsedOutput.body;
    if (data.Message !== undefined && data.Message !== null) {
        contents.Message = data.Message;
    }
    if (data.ResourceType !== undefined && data.ResourceType !== null) {
        contents.ResourceType = data.ResourceType;
    }
    return contents;
};
const deserializeAws_restJson1ResourceAlreadyExistsExceptionResponse = async (parsedOutput, context) => {
    const contents = {
        name: "ResourceAlreadyExistsException",
        $fault: "client",
        $metadata: deserializeMetadata(parsedOutput),
        Message: undefined,
        ResourceName: undefined,
        ResourceType: undefined,
    };
    const data = parsedOutput.body;
    if (data.Message !== undefined && data.Message !== null) {
        contents.Message = data.Message;
    }
    if (data.ResourceName !== undefined && data.ResourceName !== null) {
        contents.ResourceName = data.ResourceName;
    }
    if (data.ResourceType !== undefined && data.ResourceType !== null) {
        contents.ResourceType = data.ResourceType;
    }
    return contents;
};
const deserializeAws_restJson1ResourceInUseExceptionResponse = async (parsedOutput, context) => {
    const contents = {
        name: "ResourceInUseException",
        $fault: "client",
        $metadata: deserializeMetadata(parsedOutput),
        Message: undefined,
        ResourceName: undefined,
        ResourceType: undefined,
    };
    const data = parsedOutput.body;
    if (data.Message !== undefined && data.Message !== null) {
        contents.Message = data.Message;
    }
    if (data.ResourceName !== undefined && data.ResourceName !== null) {
        contents.ResourceName = data.ResourceName;
    }
    if (data.ResourceType !== undefined && data.ResourceType !== null) {
        contents.ResourceType = data.ResourceType;
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
        ResourceType: undefined,
    };
    const data = parsedOutput.body;
    if (data.Message !== undefined && data.Message !== null) {
        contents.Message = data.Message;
    }
    if (data.ResourceName !== undefined && data.ResourceName !== null) {
        contents.ResourceName = data.ResourceName;
    }
    if (data.ResourceType !== undefined && data.ResourceType !== null) {
        contents.ResourceType = data.ResourceType;
    }
    return contents;
};
const deserializeAws_restJson1ResourcePreconditionNotMetExceptionResponse = async (parsedOutput, context) => {
    const contents = {
        name: "ResourcePreconditionNotMetException",
        $fault: "client",
        $metadata: deserializeMetadata(parsedOutput),
        Message: undefined,
        ResourceName: undefined,
        ResourceType: undefined,
    };
    const data = parsedOutput.body;
    if (data.Message !== undefined && data.Message !== null) {
        contents.Message = data.Message;
    }
    if (data.ResourceName !== undefined && data.ResourceName !== null) {
        contents.ResourceName = data.ResourceName;
    }
    if (data.ResourceType !== undefined && data.ResourceType !== null) {
        contents.ResourceType = data.ResourceType;
    }
    return contents;
};
const serializeAws_restJson1KinesisConfiguration = (input, context) => {
    return {
        ...(input.AggregationEnabled !== undefined &&
            input.AggregationEnabled !== null && { AggregationEnabled: input.AggregationEnabled }),
        ...(input.StreamArn !== undefined && input.StreamArn !== null && { StreamArn: input.StreamArn }),
    };
};
const serializeAws_restJson1S3EncryptionConfiguration = (input, context) => {
    return {
        ...(input.KmsKeyArn !== undefined && input.KmsKeyArn !== null && { KmsKeyArn: input.KmsKeyArn }),
        ...(input.ObjectEncryptionType !== undefined &&
            input.ObjectEncryptionType !== null && { ObjectEncryptionType: input.ObjectEncryptionType }),
    };
};
const serializeAws_restJson1S3ExportConfiguration = (input, context) => {
    return {
        ...(input.Bucket !== undefined && input.Bucket !== null && { Bucket: input.Bucket }),
        ...(input.EncryptionConfiguration !== undefined &&
            input.EncryptionConfiguration !== null && {
            EncryptionConfiguration: serializeAws_restJson1S3EncryptionConfiguration(input.EncryptionConfiguration, context),
        }),
        ...(input.Prefix !== undefined && input.Prefix !== null && { Prefix: input.Prefix }),
    };
};
const serializeAws_restJson1Tags = (input, context) => {
    return Object.entries(input).reduce((acc, [key, value]) => {
        if (value === null) {
            return { ...acc, [key]: null };
        }
        return {
            ...acc,
            [key]: value,
        };
    }, {});
};
const serializeAws_restJson1ValueHolder = (input, context) => {
    return {
        ...(input.IonText !== undefined && input.IonText !== null && { IonText: input.IonText }),
    };
};
const deserializeAws_restJson1JournalKinesisStreamDescription = (output, context) => {
    return {
        Arn: output.Arn !== undefined && output.Arn !== null ? output.Arn : undefined,
        CreationTime: output.CreationTime !== undefined && output.CreationTime !== null
            ? new Date(Math.round(output.CreationTime * 1000))
            : undefined,
        ErrorCause: output.ErrorCause !== undefined && output.ErrorCause !== null ? output.ErrorCause : undefined,
        ExclusiveEndTime: output.ExclusiveEndTime !== undefined && output.ExclusiveEndTime !== null
            ? new Date(Math.round(output.ExclusiveEndTime * 1000))
            : undefined,
        InclusiveStartTime: output.InclusiveStartTime !== undefined && output.InclusiveStartTime !== null
            ? new Date(Math.round(output.InclusiveStartTime * 1000))
            : undefined,
        KinesisConfiguration: output.KinesisConfiguration !== undefined && output.KinesisConfiguration !== null
            ? deserializeAws_restJson1KinesisConfiguration(output.KinesisConfiguration, context)
            : undefined,
        LedgerName: output.LedgerName !== undefined && output.LedgerName !== null ? output.LedgerName : undefined,
        RoleArn: output.RoleArn !== undefined && output.RoleArn !== null ? output.RoleArn : undefined,
        Status: output.Status !== undefined && output.Status !== null ? output.Status : undefined,
        StreamId: output.StreamId !== undefined && output.StreamId !== null ? output.StreamId : undefined,
        StreamName: output.StreamName !== undefined && output.StreamName !== null ? output.StreamName : undefined,
    };
};
const deserializeAws_restJson1JournalKinesisStreamDescriptionList = (output, context) => {
    return (output || [])
        .filter((e) => e != null)
        .map((entry) => {
        if (entry === null) {
            return null;
        }
        return deserializeAws_restJson1JournalKinesisStreamDescription(entry, context);
    });
};
const deserializeAws_restJson1JournalS3ExportDescription = (output, context) => {
    return {
        ExclusiveEndTime: output.ExclusiveEndTime !== undefined && output.ExclusiveEndTime !== null
            ? new Date(Math.round(output.ExclusiveEndTime * 1000))
            : undefined,
        ExportCreationTime: output.ExportCreationTime !== undefined && output.ExportCreationTime !== null
            ? new Date(Math.round(output.ExportCreationTime * 1000))
            : undefined,
        ExportId: output.ExportId !== undefined && output.ExportId !== null ? output.ExportId : undefined,
        InclusiveStartTime: output.InclusiveStartTime !== undefined && output.InclusiveStartTime !== null
            ? new Date(Math.round(output.InclusiveStartTime * 1000))
            : undefined,
        LedgerName: output.LedgerName !== undefined && output.LedgerName !== null ? output.LedgerName : undefined,
        RoleArn: output.RoleArn !== undefined && output.RoleArn !== null ? output.RoleArn : undefined,
        S3ExportConfiguration: output.S3ExportConfiguration !== undefined && output.S3ExportConfiguration !== null
            ? deserializeAws_restJson1S3ExportConfiguration(output.S3ExportConfiguration, context)
            : undefined,
        Status: output.Status !== undefined && output.Status !== null ? output.Status : undefined,
    };
};
const deserializeAws_restJson1JournalS3ExportList = (output, context) => {
    return (output || [])
        .filter((e) => e != null)
        .map((entry) => {
        if (entry === null) {
            return null;
        }
        return deserializeAws_restJson1JournalS3ExportDescription(entry, context);
    });
};
const deserializeAws_restJson1KinesisConfiguration = (output, context) => {
    return {
        AggregationEnabled: output.AggregationEnabled !== undefined && output.AggregationEnabled !== null
            ? output.AggregationEnabled
            : undefined,
        StreamArn: output.StreamArn !== undefined && output.StreamArn !== null ? output.StreamArn : undefined,
    };
};
const deserializeAws_restJson1LedgerList = (output, context) => {
    return (output || [])
        .filter((e) => e != null)
        .map((entry) => {
        if (entry === null) {
            return null;
        }
        return deserializeAws_restJson1LedgerSummary(entry, context);
    });
};
const deserializeAws_restJson1LedgerSummary = (output, context) => {
    return {
        CreationDateTime: output.CreationDateTime !== undefined && output.CreationDateTime !== null
            ? new Date(Math.round(output.CreationDateTime * 1000))
            : undefined,
        Name: output.Name !== undefined && output.Name !== null ? output.Name : undefined,
        State: output.State !== undefined && output.State !== null ? output.State : undefined,
    };
};
const deserializeAws_restJson1S3EncryptionConfiguration = (output, context) => {
    return {
        KmsKeyArn: output.KmsKeyArn !== undefined && output.KmsKeyArn !== null ? output.KmsKeyArn : undefined,
        ObjectEncryptionType: output.ObjectEncryptionType !== undefined && output.ObjectEncryptionType !== null
            ? output.ObjectEncryptionType
            : undefined,
    };
};
const deserializeAws_restJson1S3ExportConfiguration = (output, context) => {
    return {
        Bucket: output.Bucket !== undefined && output.Bucket !== null ? output.Bucket : undefined,
        EncryptionConfiguration: output.EncryptionConfiguration !== undefined && output.EncryptionConfiguration !== null
            ? deserializeAws_restJson1S3EncryptionConfiguration(output.EncryptionConfiguration, context)
            : undefined,
        Prefix: output.Prefix !== undefined && output.Prefix !== null ? output.Prefix : undefined,
    };
};
const deserializeAws_restJson1Tags = (output, context) => {
    return Object.entries(output).reduce((acc, [key, value]) => {
        if (value === null) {
            return { ...acc, [key]: null };
        }
        return {
            ...acc,
            [key]: value,
        };
    }, {});
};
const deserializeAws_restJson1ValueHolder = (output, context) => {
    return {
        IonText: output.IonText !== undefined && output.IonText !== null ? output.IonText : undefined,
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