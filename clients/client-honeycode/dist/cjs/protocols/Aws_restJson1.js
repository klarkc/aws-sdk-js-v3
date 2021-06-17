"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.deserializeAws_restJson1StartTableDataImportJobCommand = exports.deserializeAws_restJson1QueryTableRowsCommand = exports.deserializeAws_restJson1ListTablesCommand = exports.deserializeAws_restJson1ListTableRowsCommand = exports.deserializeAws_restJson1ListTableColumnsCommand = exports.deserializeAws_restJson1InvokeScreenAutomationCommand = exports.deserializeAws_restJson1GetScreenDataCommand = exports.deserializeAws_restJson1DescribeTableDataImportJobCommand = exports.deserializeAws_restJson1BatchUpsertTableRowsCommand = exports.deserializeAws_restJson1BatchUpdateTableRowsCommand = exports.deserializeAws_restJson1BatchDeleteTableRowsCommand = exports.deserializeAws_restJson1BatchCreateTableRowsCommand = exports.serializeAws_restJson1StartTableDataImportJobCommand = exports.serializeAws_restJson1QueryTableRowsCommand = exports.serializeAws_restJson1ListTablesCommand = exports.serializeAws_restJson1ListTableRowsCommand = exports.serializeAws_restJson1ListTableColumnsCommand = exports.serializeAws_restJson1InvokeScreenAutomationCommand = exports.serializeAws_restJson1GetScreenDataCommand = exports.serializeAws_restJson1DescribeTableDataImportJobCommand = exports.serializeAws_restJson1BatchUpsertTableRowsCommand = exports.serializeAws_restJson1BatchUpdateTableRowsCommand = exports.serializeAws_restJson1BatchDeleteTableRowsCommand = exports.serializeAws_restJson1BatchCreateTableRowsCommand = void 0;
const protocol_http_1 = require("@aws-sdk/protocol-http");
const smithy_client_1 = require("@aws-sdk/smithy-client");
const serializeAws_restJson1BatchCreateTableRowsCommand = async (input, context) => {
    const headers = {
        "content-type": "application/json",
    };
    let resolvedPath = "/workbooks/{workbookId}/tables/{tableId}/rows/batchcreate";
    if (input.workbookId !== undefined) {
        const labelValue = input.workbookId;
        if (labelValue.length <= 0) {
            throw new Error("Empty value provided for input HTTP label: workbookId.");
        }
        resolvedPath = resolvedPath.replace("{workbookId}", smithy_client_1.extendedEncodeURIComponent(labelValue));
    }
    else {
        throw new Error("No value provided for input HTTP label: workbookId.");
    }
    if (input.tableId !== undefined) {
        const labelValue = input.tableId;
        if (labelValue.length <= 0) {
            throw new Error("Empty value provided for input HTTP label: tableId.");
        }
        resolvedPath = resolvedPath.replace("{tableId}", smithy_client_1.extendedEncodeURIComponent(labelValue));
    }
    else {
        throw new Error("No value provided for input HTTP label: tableId.");
    }
    let body;
    body = JSON.stringify({
        ...(input.clientRequestToken !== undefined &&
            input.clientRequestToken !== null && { clientRequestToken: input.clientRequestToken }),
        ...(input.rowsToCreate !== undefined &&
            input.rowsToCreate !== null && {
            rowsToCreate: serializeAws_restJson1CreateRowDataList(input.rowsToCreate, context),
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
exports.serializeAws_restJson1BatchCreateTableRowsCommand = serializeAws_restJson1BatchCreateTableRowsCommand;
const serializeAws_restJson1BatchDeleteTableRowsCommand = async (input, context) => {
    const headers = {
        "content-type": "application/json",
    };
    let resolvedPath = "/workbooks/{workbookId}/tables/{tableId}/rows/batchdelete";
    if (input.workbookId !== undefined) {
        const labelValue = input.workbookId;
        if (labelValue.length <= 0) {
            throw new Error("Empty value provided for input HTTP label: workbookId.");
        }
        resolvedPath = resolvedPath.replace("{workbookId}", smithy_client_1.extendedEncodeURIComponent(labelValue));
    }
    else {
        throw new Error("No value provided for input HTTP label: workbookId.");
    }
    if (input.tableId !== undefined) {
        const labelValue = input.tableId;
        if (labelValue.length <= 0) {
            throw new Error("Empty value provided for input HTTP label: tableId.");
        }
        resolvedPath = resolvedPath.replace("{tableId}", smithy_client_1.extendedEncodeURIComponent(labelValue));
    }
    else {
        throw new Error("No value provided for input HTTP label: tableId.");
    }
    let body;
    body = JSON.stringify({
        ...(input.clientRequestToken !== undefined &&
            input.clientRequestToken !== null && { clientRequestToken: input.clientRequestToken }),
        ...(input.rowIds !== undefined &&
            input.rowIds !== null && { rowIds: serializeAws_restJson1RowIdList(input.rowIds, context) }),
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
exports.serializeAws_restJson1BatchDeleteTableRowsCommand = serializeAws_restJson1BatchDeleteTableRowsCommand;
const serializeAws_restJson1BatchUpdateTableRowsCommand = async (input, context) => {
    const headers = {
        "content-type": "application/json",
    };
    let resolvedPath = "/workbooks/{workbookId}/tables/{tableId}/rows/batchupdate";
    if (input.workbookId !== undefined) {
        const labelValue = input.workbookId;
        if (labelValue.length <= 0) {
            throw new Error("Empty value provided for input HTTP label: workbookId.");
        }
        resolvedPath = resolvedPath.replace("{workbookId}", smithy_client_1.extendedEncodeURIComponent(labelValue));
    }
    else {
        throw new Error("No value provided for input HTTP label: workbookId.");
    }
    if (input.tableId !== undefined) {
        const labelValue = input.tableId;
        if (labelValue.length <= 0) {
            throw new Error("Empty value provided for input HTTP label: tableId.");
        }
        resolvedPath = resolvedPath.replace("{tableId}", smithy_client_1.extendedEncodeURIComponent(labelValue));
    }
    else {
        throw new Error("No value provided for input HTTP label: tableId.");
    }
    let body;
    body = JSON.stringify({
        ...(input.clientRequestToken !== undefined &&
            input.clientRequestToken !== null && { clientRequestToken: input.clientRequestToken }),
        ...(input.rowsToUpdate !== undefined &&
            input.rowsToUpdate !== null && {
            rowsToUpdate: serializeAws_restJson1UpdateRowDataList(input.rowsToUpdate, context),
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
exports.serializeAws_restJson1BatchUpdateTableRowsCommand = serializeAws_restJson1BatchUpdateTableRowsCommand;
const serializeAws_restJson1BatchUpsertTableRowsCommand = async (input, context) => {
    const headers = {
        "content-type": "application/json",
    };
    let resolvedPath = "/workbooks/{workbookId}/tables/{tableId}/rows/batchupsert";
    if (input.workbookId !== undefined) {
        const labelValue = input.workbookId;
        if (labelValue.length <= 0) {
            throw new Error("Empty value provided for input HTTP label: workbookId.");
        }
        resolvedPath = resolvedPath.replace("{workbookId}", smithy_client_1.extendedEncodeURIComponent(labelValue));
    }
    else {
        throw new Error("No value provided for input HTTP label: workbookId.");
    }
    if (input.tableId !== undefined) {
        const labelValue = input.tableId;
        if (labelValue.length <= 0) {
            throw new Error("Empty value provided for input HTTP label: tableId.");
        }
        resolvedPath = resolvedPath.replace("{tableId}", smithy_client_1.extendedEncodeURIComponent(labelValue));
    }
    else {
        throw new Error("No value provided for input HTTP label: tableId.");
    }
    let body;
    body = JSON.stringify({
        ...(input.clientRequestToken !== undefined &&
            input.clientRequestToken !== null && { clientRequestToken: input.clientRequestToken }),
        ...(input.rowsToUpsert !== undefined &&
            input.rowsToUpsert !== null && {
            rowsToUpsert: serializeAws_restJson1UpsertRowDataList(input.rowsToUpsert, context),
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
exports.serializeAws_restJson1BatchUpsertTableRowsCommand = serializeAws_restJson1BatchUpsertTableRowsCommand;
const serializeAws_restJson1DescribeTableDataImportJobCommand = async (input, context) => {
    const headers = {};
    let resolvedPath = "/workbooks/{workbookId}/tables/{tableId}/import/{jobId}";
    if (input.workbookId !== undefined) {
        const labelValue = input.workbookId;
        if (labelValue.length <= 0) {
            throw new Error("Empty value provided for input HTTP label: workbookId.");
        }
        resolvedPath = resolvedPath.replace("{workbookId}", smithy_client_1.extendedEncodeURIComponent(labelValue));
    }
    else {
        throw new Error("No value provided for input HTTP label: workbookId.");
    }
    if (input.tableId !== undefined) {
        const labelValue = input.tableId;
        if (labelValue.length <= 0) {
            throw new Error("Empty value provided for input HTTP label: tableId.");
        }
        resolvedPath = resolvedPath.replace("{tableId}", smithy_client_1.extendedEncodeURIComponent(labelValue));
    }
    else {
        throw new Error("No value provided for input HTTP label: tableId.");
    }
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
exports.serializeAws_restJson1DescribeTableDataImportJobCommand = serializeAws_restJson1DescribeTableDataImportJobCommand;
const serializeAws_restJson1GetScreenDataCommand = async (input, context) => {
    const headers = {
        "content-type": "application/json",
    };
    let resolvedPath = "/screendata";
    let body;
    body = JSON.stringify({
        ...(input.appId !== undefined && input.appId !== null && { appId: input.appId }),
        ...(input.maxResults !== undefined && input.maxResults !== null && { maxResults: input.maxResults }),
        ...(input.nextToken !== undefined && input.nextToken !== null && { nextToken: input.nextToken }),
        ...(input.screenId !== undefined && input.screenId !== null && { screenId: input.screenId }),
        ...(input.variables !== undefined &&
            input.variables !== null && { variables: serializeAws_restJson1VariableValueMap(input.variables, context) }),
        ...(input.workbookId !== undefined && input.workbookId !== null && { workbookId: input.workbookId }),
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
exports.serializeAws_restJson1GetScreenDataCommand = serializeAws_restJson1GetScreenDataCommand;
const serializeAws_restJson1InvokeScreenAutomationCommand = async (input, context) => {
    const headers = {
        "content-type": "application/json",
    };
    let resolvedPath = "/workbooks/{workbookId}/apps/{appId}/screens/{screenId}/automations/{screenAutomationId}";
    if (input.workbookId !== undefined) {
        const labelValue = input.workbookId;
        if (labelValue.length <= 0) {
            throw new Error("Empty value provided for input HTTP label: workbookId.");
        }
        resolvedPath = resolvedPath.replace("{workbookId}", smithy_client_1.extendedEncodeURIComponent(labelValue));
    }
    else {
        throw new Error("No value provided for input HTTP label: workbookId.");
    }
    if (input.appId !== undefined) {
        const labelValue = input.appId;
        if (labelValue.length <= 0) {
            throw new Error("Empty value provided for input HTTP label: appId.");
        }
        resolvedPath = resolvedPath.replace("{appId}", smithy_client_1.extendedEncodeURIComponent(labelValue));
    }
    else {
        throw new Error("No value provided for input HTTP label: appId.");
    }
    if (input.screenId !== undefined) {
        const labelValue = input.screenId;
        if (labelValue.length <= 0) {
            throw new Error("Empty value provided for input HTTP label: screenId.");
        }
        resolvedPath = resolvedPath.replace("{screenId}", smithy_client_1.extendedEncodeURIComponent(labelValue));
    }
    else {
        throw new Error("No value provided for input HTTP label: screenId.");
    }
    if (input.screenAutomationId !== undefined) {
        const labelValue = input.screenAutomationId;
        if (labelValue.length <= 0) {
            throw new Error("Empty value provided for input HTTP label: screenAutomationId.");
        }
        resolvedPath = resolvedPath.replace("{screenAutomationId}", smithy_client_1.extendedEncodeURIComponent(labelValue));
    }
    else {
        throw new Error("No value provided for input HTTP label: screenAutomationId.");
    }
    let body;
    body = JSON.stringify({
        ...(input.clientRequestToken !== undefined &&
            input.clientRequestToken !== null && { clientRequestToken: input.clientRequestToken }),
        ...(input.rowId !== undefined && input.rowId !== null && { rowId: input.rowId }),
        ...(input.variables !== undefined &&
            input.variables !== null && { variables: serializeAws_restJson1VariableValueMap(input.variables, context) }),
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
exports.serializeAws_restJson1InvokeScreenAutomationCommand = serializeAws_restJson1InvokeScreenAutomationCommand;
const serializeAws_restJson1ListTableColumnsCommand = async (input, context) => {
    const headers = {};
    let resolvedPath = "/workbooks/{workbookId}/tables/{tableId}/columns";
    if (input.workbookId !== undefined) {
        const labelValue = input.workbookId;
        if (labelValue.length <= 0) {
            throw new Error("Empty value provided for input HTTP label: workbookId.");
        }
        resolvedPath = resolvedPath.replace("{workbookId}", smithy_client_1.extendedEncodeURIComponent(labelValue));
    }
    else {
        throw new Error("No value provided for input HTTP label: workbookId.");
    }
    if (input.tableId !== undefined) {
        const labelValue = input.tableId;
        if (labelValue.length <= 0) {
            throw new Error("Empty value provided for input HTTP label: tableId.");
        }
        resolvedPath = resolvedPath.replace("{tableId}", smithy_client_1.extendedEncodeURIComponent(labelValue));
    }
    else {
        throw new Error("No value provided for input HTTP label: tableId.");
    }
    const query = {
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
exports.serializeAws_restJson1ListTableColumnsCommand = serializeAws_restJson1ListTableColumnsCommand;
const serializeAws_restJson1ListTableRowsCommand = async (input, context) => {
    const headers = {
        "content-type": "application/json",
    };
    let resolvedPath = "/workbooks/{workbookId}/tables/{tableId}/rows/list";
    if (input.workbookId !== undefined) {
        const labelValue = input.workbookId;
        if (labelValue.length <= 0) {
            throw new Error("Empty value provided for input HTTP label: workbookId.");
        }
        resolvedPath = resolvedPath.replace("{workbookId}", smithy_client_1.extendedEncodeURIComponent(labelValue));
    }
    else {
        throw new Error("No value provided for input HTTP label: workbookId.");
    }
    if (input.tableId !== undefined) {
        const labelValue = input.tableId;
        if (labelValue.length <= 0) {
            throw new Error("Empty value provided for input HTTP label: tableId.");
        }
        resolvedPath = resolvedPath.replace("{tableId}", smithy_client_1.extendedEncodeURIComponent(labelValue));
    }
    else {
        throw new Error("No value provided for input HTTP label: tableId.");
    }
    let body;
    body = JSON.stringify({
        ...(input.maxResults !== undefined && input.maxResults !== null && { maxResults: input.maxResults }),
        ...(input.nextToken !== undefined && input.nextToken !== null && { nextToken: input.nextToken }),
        ...(input.rowIds !== undefined &&
            input.rowIds !== null && { rowIds: serializeAws_restJson1RowIdList(input.rowIds, context) }),
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
exports.serializeAws_restJson1ListTableRowsCommand = serializeAws_restJson1ListTableRowsCommand;
const serializeAws_restJson1ListTablesCommand = async (input, context) => {
    const headers = {};
    let resolvedPath = "/workbooks/{workbookId}/tables";
    if (input.workbookId !== undefined) {
        const labelValue = input.workbookId;
        if (labelValue.length <= 0) {
            throw new Error("Empty value provided for input HTTP label: workbookId.");
        }
        resolvedPath = resolvedPath.replace("{workbookId}", smithy_client_1.extendedEncodeURIComponent(labelValue));
    }
    else {
        throw new Error("No value provided for input HTTP label: workbookId.");
    }
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
exports.serializeAws_restJson1ListTablesCommand = serializeAws_restJson1ListTablesCommand;
const serializeAws_restJson1QueryTableRowsCommand = async (input, context) => {
    const headers = {
        "content-type": "application/json",
    };
    let resolvedPath = "/workbooks/{workbookId}/tables/{tableId}/rows/query";
    if (input.workbookId !== undefined) {
        const labelValue = input.workbookId;
        if (labelValue.length <= 0) {
            throw new Error("Empty value provided for input HTTP label: workbookId.");
        }
        resolvedPath = resolvedPath.replace("{workbookId}", smithy_client_1.extendedEncodeURIComponent(labelValue));
    }
    else {
        throw new Error("No value provided for input HTTP label: workbookId.");
    }
    if (input.tableId !== undefined) {
        const labelValue = input.tableId;
        if (labelValue.length <= 0) {
            throw new Error("Empty value provided for input HTTP label: tableId.");
        }
        resolvedPath = resolvedPath.replace("{tableId}", smithy_client_1.extendedEncodeURIComponent(labelValue));
    }
    else {
        throw new Error("No value provided for input HTTP label: tableId.");
    }
    let body;
    body = JSON.stringify({
        ...(input.filterFormula !== undefined &&
            input.filterFormula !== null && { filterFormula: serializeAws_restJson1Filter(input.filterFormula, context) }),
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
exports.serializeAws_restJson1QueryTableRowsCommand = serializeAws_restJson1QueryTableRowsCommand;
const serializeAws_restJson1StartTableDataImportJobCommand = async (input, context) => {
    const headers = {
        "content-type": "application/json",
    };
    let resolvedPath = "/workbooks/{workbookId}/tables/{destinationTableId}/import";
    if (input.workbookId !== undefined) {
        const labelValue = input.workbookId;
        if (labelValue.length <= 0) {
            throw new Error("Empty value provided for input HTTP label: workbookId.");
        }
        resolvedPath = resolvedPath.replace("{workbookId}", smithy_client_1.extendedEncodeURIComponent(labelValue));
    }
    else {
        throw new Error("No value provided for input HTTP label: workbookId.");
    }
    if (input.destinationTableId !== undefined) {
        const labelValue = input.destinationTableId;
        if (labelValue.length <= 0) {
            throw new Error("Empty value provided for input HTTP label: destinationTableId.");
        }
        resolvedPath = resolvedPath.replace("{destinationTableId}", smithy_client_1.extendedEncodeURIComponent(labelValue));
    }
    else {
        throw new Error("No value provided for input HTTP label: destinationTableId.");
    }
    let body;
    body = JSON.stringify({
        ...(input.clientRequestToken !== undefined &&
            input.clientRequestToken !== null && { clientRequestToken: input.clientRequestToken }),
        ...(input.dataFormat !== undefined && input.dataFormat !== null && { dataFormat: input.dataFormat }),
        ...(input.dataSource !== undefined &&
            input.dataSource !== null && { dataSource: serializeAws_restJson1ImportDataSource(input.dataSource, context) }),
        ...(input.importOptions !== undefined &&
            input.importOptions !== null && {
            importOptions: serializeAws_restJson1ImportOptions(input.importOptions, context),
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
exports.serializeAws_restJson1StartTableDataImportJobCommand = serializeAws_restJson1StartTableDataImportJobCommand;
const deserializeAws_restJson1BatchCreateTableRowsCommand = async (output, context) => {
    if (output.statusCode !== 200 && output.statusCode >= 300) {
        return deserializeAws_restJson1BatchCreateTableRowsCommandError(output, context);
    }
    const contents = {
        $metadata: deserializeMetadata(output),
        createdRows: undefined,
        failedBatchItems: undefined,
        workbookCursor: undefined,
    };
    const data = await parseBody(output.body, context);
    if (data.createdRows !== undefined && data.createdRows !== null) {
        contents.createdRows = deserializeAws_restJson1CreatedRowsMap(data.createdRows, context);
    }
    if (data.failedBatchItems !== undefined && data.failedBatchItems !== null) {
        contents.failedBatchItems = deserializeAws_restJson1FailedBatchItems(data.failedBatchItems, context);
    }
    if (data.workbookCursor !== undefined && data.workbookCursor !== null) {
        contents.workbookCursor = data.workbookCursor;
    }
    return Promise.resolve(contents);
};
exports.deserializeAws_restJson1BatchCreateTableRowsCommand = deserializeAws_restJson1BatchCreateTableRowsCommand;
const deserializeAws_restJson1BatchCreateTableRowsCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "AccessDeniedException":
        case "com.amazonaws.honeycode#AccessDeniedException":
            response = {
                ...(await deserializeAws_restJson1AccessDeniedExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InternalServerException":
        case "com.amazonaws.honeycode#InternalServerException":
            response = {
                ...(await deserializeAws_restJson1InternalServerExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "RequestTimeoutException":
        case "com.amazonaws.honeycode#RequestTimeoutException":
            response = {
                ...(await deserializeAws_restJson1RequestTimeoutExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ResourceNotFoundException":
        case "com.amazonaws.honeycode#ResourceNotFoundException":
            response = {
                ...(await deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ServiceQuotaExceededException":
        case "com.amazonaws.honeycode#ServiceQuotaExceededException":
            response = {
                ...(await deserializeAws_restJson1ServiceQuotaExceededExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ServiceUnavailableException":
        case "com.amazonaws.honeycode#ServiceUnavailableException":
            response = {
                ...(await deserializeAws_restJson1ServiceUnavailableExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ThrottlingException":
        case "com.amazonaws.honeycode#ThrottlingException":
            response = {
                ...(await deserializeAws_restJson1ThrottlingExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ValidationException":
        case "com.amazonaws.honeycode#ValidationException":
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
const deserializeAws_restJson1BatchDeleteTableRowsCommand = async (output, context) => {
    if (output.statusCode !== 200 && output.statusCode >= 300) {
        return deserializeAws_restJson1BatchDeleteTableRowsCommandError(output, context);
    }
    const contents = {
        $metadata: deserializeMetadata(output),
        failedBatchItems: undefined,
        workbookCursor: undefined,
    };
    const data = await parseBody(output.body, context);
    if (data.failedBatchItems !== undefined && data.failedBatchItems !== null) {
        contents.failedBatchItems = deserializeAws_restJson1FailedBatchItems(data.failedBatchItems, context);
    }
    if (data.workbookCursor !== undefined && data.workbookCursor !== null) {
        contents.workbookCursor = data.workbookCursor;
    }
    return Promise.resolve(contents);
};
exports.deserializeAws_restJson1BatchDeleteTableRowsCommand = deserializeAws_restJson1BatchDeleteTableRowsCommand;
const deserializeAws_restJson1BatchDeleteTableRowsCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "AccessDeniedException":
        case "com.amazonaws.honeycode#AccessDeniedException":
            response = {
                ...(await deserializeAws_restJson1AccessDeniedExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InternalServerException":
        case "com.amazonaws.honeycode#InternalServerException":
            response = {
                ...(await deserializeAws_restJson1InternalServerExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "RequestTimeoutException":
        case "com.amazonaws.honeycode#RequestTimeoutException":
            response = {
                ...(await deserializeAws_restJson1RequestTimeoutExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ResourceNotFoundException":
        case "com.amazonaws.honeycode#ResourceNotFoundException":
            response = {
                ...(await deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ServiceUnavailableException":
        case "com.amazonaws.honeycode#ServiceUnavailableException":
            response = {
                ...(await deserializeAws_restJson1ServiceUnavailableExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ThrottlingException":
        case "com.amazonaws.honeycode#ThrottlingException":
            response = {
                ...(await deserializeAws_restJson1ThrottlingExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ValidationException":
        case "com.amazonaws.honeycode#ValidationException":
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
const deserializeAws_restJson1BatchUpdateTableRowsCommand = async (output, context) => {
    if (output.statusCode !== 200 && output.statusCode >= 300) {
        return deserializeAws_restJson1BatchUpdateTableRowsCommandError(output, context);
    }
    const contents = {
        $metadata: deserializeMetadata(output),
        failedBatchItems: undefined,
        workbookCursor: undefined,
    };
    const data = await parseBody(output.body, context);
    if (data.failedBatchItems !== undefined && data.failedBatchItems !== null) {
        contents.failedBatchItems = deserializeAws_restJson1FailedBatchItems(data.failedBatchItems, context);
    }
    if (data.workbookCursor !== undefined && data.workbookCursor !== null) {
        contents.workbookCursor = data.workbookCursor;
    }
    return Promise.resolve(contents);
};
exports.deserializeAws_restJson1BatchUpdateTableRowsCommand = deserializeAws_restJson1BatchUpdateTableRowsCommand;
const deserializeAws_restJson1BatchUpdateTableRowsCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "AccessDeniedException":
        case "com.amazonaws.honeycode#AccessDeniedException":
            response = {
                ...(await deserializeAws_restJson1AccessDeniedExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InternalServerException":
        case "com.amazonaws.honeycode#InternalServerException":
            response = {
                ...(await deserializeAws_restJson1InternalServerExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "RequestTimeoutException":
        case "com.amazonaws.honeycode#RequestTimeoutException":
            response = {
                ...(await deserializeAws_restJson1RequestTimeoutExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ResourceNotFoundException":
        case "com.amazonaws.honeycode#ResourceNotFoundException":
            response = {
                ...(await deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ServiceUnavailableException":
        case "com.amazonaws.honeycode#ServiceUnavailableException":
            response = {
                ...(await deserializeAws_restJson1ServiceUnavailableExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ThrottlingException":
        case "com.amazonaws.honeycode#ThrottlingException":
            response = {
                ...(await deserializeAws_restJson1ThrottlingExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ValidationException":
        case "com.amazonaws.honeycode#ValidationException":
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
const deserializeAws_restJson1BatchUpsertTableRowsCommand = async (output, context) => {
    if (output.statusCode !== 200 && output.statusCode >= 300) {
        return deserializeAws_restJson1BatchUpsertTableRowsCommandError(output, context);
    }
    const contents = {
        $metadata: deserializeMetadata(output),
        failedBatchItems: undefined,
        rows: undefined,
        workbookCursor: undefined,
    };
    const data = await parseBody(output.body, context);
    if (data.failedBatchItems !== undefined && data.failedBatchItems !== null) {
        contents.failedBatchItems = deserializeAws_restJson1FailedBatchItems(data.failedBatchItems, context);
    }
    if (data.rows !== undefined && data.rows !== null) {
        contents.rows = deserializeAws_restJson1UpsertRowsResultMap(data.rows, context);
    }
    if (data.workbookCursor !== undefined && data.workbookCursor !== null) {
        contents.workbookCursor = data.workbookCursor;
    }
    return Promise.resolve(contents);
};
exports.deserializeAws_restJson1BatchUpsertTableRowsCommand = deserializeAws_restJson1BatchUpsertTableRowsCommand;
const deserializeAws_restJson1BatchUpsertTableRowsCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "AccessDeniedException":
        case "com.amazonaws.honeycode#AccessDeniedException":
            response = {
                ...(await deserializeAws_restJson1AccessDeniedExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InternalServerException":
        case "com.amazonaws.honeycode#InternalServerException":
            response = {
                ...(await deserializeAws_restJson1InternalServerExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "RequestTimeoutException":
        case "com.amazonaws.honeycode#RequestTimeoutException":
            response = {
                ...(await deserializeAws_restJson1RequestTimeoutExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ResourceNotFoundException":
        case "com.amazonaws.honeycode#ResourceNotFoundException":
            response = {
                ...(await deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ServiceQuotaExceededException":
        case "com.amazonaws.honeycode#ServiceQuotaExceededException":
            response = {
                ...(await deserializeAws_restJson1ServiceQuotaExceededExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ServiceUnavailableException":
        case "com.amazonaws.honeycode#ServiceUnavailableException":
            response = {
                ...(await deserializeAws_restJson1ServiceUnavailableExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ThrottlingException":
        case "com.amazonaws.honeycode#ThrottlingException":
            response = {
                ...(await deserializeAws_restJson1ThrottlingExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ValidationException":
        case "com.amazonaws.honeycode#ValidationException":
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
const deserializeAws_restJson1DescribeTableDataImportJobCommand = async (output, context) => {
    if (output.statusCode !== 200 && output.statusCode >= 300) {
        return deserializeAws_restJson1DescribeTableDataImportJobCommandError(output, context);
    }
    const contents = {
        $metadata: deserializeMetadata(output),
        jobMetadata: undefined,
        jobStatus: undefined,
        message: undefined,
    };
    const data = await parseBody(output.body, context);
    if (data.jobMetadata !== undefined && data.jobMetadata !== null) {
        contents.jobMetadata = deserializeAws_restJson1TableDataImportJobMetadata(data.jobMetadata, context);
    }
    if (data.jobStatus !== undefined && data.jobStatus !== null) {
        contents.jobStatus = data.jobStatus;
    }
    if (data.message !== undefined && data.message !== null) {
        contents.message = data.message;
    }
    return Promise.resolve(contents);
};
exports.deserializeAws_restJson1DescribeTableDataImportJobCommand = deserializeAws_restJson1DescribeTableDataImportJobCommand;
const deserializeAws_restJson1DescribeTableDataImportJobCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "AccessDeniedException":
        case "com.amazonaws.honeycode#AccessDeniedException":
            response = {
                ...(await deserializeAws_restJson1AccessDeniedExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InternalServerException":
        case "com.amazonaws.honeycode#InternalServerException":
            response = {
                ...(await deserializeAws_restJson1InternalServerExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ResourceNotFoundException":
        case "com.amazonaws.honeycode#ResourceNotFoundException":
            response = {
                ...(await deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ServiceUnavailableException":
        case "com.amazonaws.honeycode#ServiceUnavailableException":
            response = {
                ...(await deserializeAws_restJson1ServiceUnavailableExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ThrottlingException":
        case "com.amazonaws.honeycode#ThrottlingException":
            response = {
                ...(await deserializeAws_restJson1ThrottlingExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ValidationException":
        case "com.amazonaws.honeycode#ValidationException":
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
const deserializeAws_restJson1GetScreenDataCommand = async (output, context) => {
    if (output.statusCode !== 200 && output.statusCode >= 300) {
        return deserializeAws_restJson1GetScreenDataCommandError(output, context);
    }
    const contents = {
        $metadata: deserializeMetadata(output),
        nextToken: undefined,
        results: undefined,
        workbookCursor: undefined,
    };
    const data = await parseBody(output.body, context);
    if (data.nextToken !== undefined && data.nextToken !== null) {
        contents.nextToken = data.nextToken;
    }
    if (data.results !== undefined && data.results !== null) {
        contents.results = deserializeAws_restJson1ResultSetMap(data.results, context);
    }
    if (data.workbookCursor !== undefined && data.workbookCursor !== null) {
        contents.workbookCursor = data.workbookCursor;
    }
    return Promise.resolve(contents);
};
exports.deserializeAws_restJson1GetScreenDataCommand = deserializeAws_restJson1GetScreenDataCommand;
const deserializeAws_restJson1GetScreenDataCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "AccessDeniedException":
        case "com.amazonaws.honeycode#AccessDeniedException":
            response = {
                ...(await deserializeAws_restJson1AccessDeniedExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InternalServerException":
        case "com.amazonaws.honeycode#InternalServerException":
            response = {
                ...(await deserializeAws_restJson1InternalServerExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "RequestTimeoutException":
        case "com.amazonaws.honeycode#RequestTimeoutException":
            response = {
                ...(await deserializeAws_restJson1RequestTimeoutExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ResourceNotFoundException":
        case "com.amazonaws.honeycode#ResourceNotFoundException":
            response = {
                ...(await deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ServiceUnavailableException":
        case "com.amazonaws.honeycode#ServiceUnavailableException":
            response = {
                ...(await deserializeAws_restJson1ServiceUnavailableExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ThrottlingException":
        case "com.amazonaws.honeycode#ThrottlingException":
            response = {
                ...(await deserializeAws_restJson1ThrottlingExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ValidationException":
        case "com.amazonaws.honeycode#ValidationException":
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
const deserializeAws_restJson1InvokeScreenAutomationCommand = async (output, context) => {
    if (output.statusCode !== 200 && output.statusCode >= 300) {
        return deserializeAws_restJson1InvokeScreenAutomationCommandError(output, context);
    }
    const contents = {
        $metadata: deserializeMetadata(output),
        workbookCursor: undefined,
    };
    const data = await parseBody(output.body, context);
    if (data.workbookCursor !== undefined && data.workbookCursor !== null) {
        contents.workbookCursor = data.workbookCursor;
    }
    return Promise.resolve(contents);
};
exports.deserializeAws_restJson1InvokeScreenAutomationCommand = deserializeAws_restJson1InvokeScreenAutomationCommand;
const deserializeAws_restJson1InvokeScreenAutomationCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "AccessDeniedException":
        case "com.amazonaws.honeycode#AccessDeniedException":
            response = {
                ...(await deserializeAws_restJson1AccessDeniedExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "AutomationExecutionException":
        case "com.amazonaws.honeycode#AutomationExecutionException":
            response = {
                ...(await deserializeAws_restJson1AutomationExecutionExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "AutomationExecutionTimeoutException":
        case "com.amazonaws.honeycode#AutomationExecutionTimeoutException":
            response = {
                ...(await deserializeAws_restJson1AutomationExecutionTimeoutExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InternalServerException":
        case "com.amazonaws.honeycode#InternalServerException":
            response = {
                ...(await deserializeAws_restJson1InternalServerExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "RequestTimeoutException":
        case "com.amazonaws.honeycode#RequestTimeoutException":
            response = {
                ...(await deserializeAws_restJson1RequestTimeoutExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ResourceNotFoundException":
        case "com.amazonaws.honeycode#ResourceNotFoundException":
            response = {
                ...(await deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ServiceUnavailableException":
        case "com.amazonaws.honeycode#ServiceUnavailableException":
            response = {
                ...(await deserializeAws_restJson1ServiceUnavailableExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ThrottlingException":
        case "com.amazonaws.honeycode#ThrottlingException":
            response = {
                ...(await deserializeAws_restJson1ThrottlingExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ValidationException":
        case "com.amazonaws.honeycode#ValidationException":
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
const deserializeAws_restJson1ListTableColumnsCommand = async (output, context) => {
    if (output.statusCode !== 200 && output.statusCode >= 300) {
        return deserializeAws_restJson1ListTableColumnsCommandError(output, context);
    }
    const contents = {
        $metadata: deserializeMetadata(output),
        nextToken: undefined,
        tableColumns: undefined,
        workbookCursor: undefined,
    };
    const data = await parseBody(output.body, context);
    if (data.nextToken !== undefined && data.nextToken !== null) {
        contents.nextToken = data.nextToken;
    }
    if (data.tableColumns !== undefined && data.tableColumns !== null) {
        contents.tableColumns = deserializeAws_restJson1TableColumns(data.tableColumns, context);
    }
    if (data.workbookCursor !== undefined && data.workbookCursor !== null) {
        contents.workbookCursor = data.workbookCursor;
    }
    return Promise.resolve(contents);
};
exports.deserializeAws_restJson1ListTableColumnsCommand = deserializeAws_restJson1ListTableColumnsCommand;
const deserializeAws_restJson1ListTableColumnsCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "AccessDeniedException":
        case "com.amazonaws.honeycode#AccessDeniedException":
            response = {
                ...(await deserializeAws_restJson1AccessDeniedExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InternalServerException":
        case "com.amazonaws.honeycode#InternalServerException":
            response = {
                ...(await deserializeAws_restJson1InternalServerExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "RequestTimeoutException":
        case "com.amazonaws.honeycode#RequestTimeoutException":
            response = {
                ...(await deserializeAws_restJson1RequestTimeoutExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ResourceNotFoundException":
        case "com.amazonaws.honeycode#ResourceNotFoundException":
            response = {
                ...(await deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ServiceUnavailableException":
        case "com.amazonaws.honeycode#ServiceUnavailableException":
            response = {
                ...(await deserializeAws_restJson1ServiceUnavailableExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ThrottlingException":
        case "com.amazonaws.honeycode#ThrottlingException":
            response = {
                ...(await deserializeAws_restJson1ThrottlingExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ValidationException":
        case "com.amazonaws.honeycode#ValidationException":
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
const deserializeAws_restJson1ListTableRowsCommand = async (output, context) => {
    if (output.statusCode !== 200 && output.statusCode >= 300) {
        return deserializeAws_restJson1ListTableRowsCommandError(output, context);
    }
    const contents = {
        $metadata: deserializeMetadata(output),
        columnIds: undefined,
        nextToken: undefined,
        rowIdsNotFound: undefined,
        rows: undefined,
        workbookCursor: undefined,
    };
    const data = await parseBody(output.body, context);
    if (data.columnIds !== undefined && data.columnIds !== null) {
        contents.columnIds = deserializeAws_restJson1ResourceIds(data.columnIds, context);
    }
    if (data.nextToken !== undefined && data.nextToken !== null) {
        contents.nextToken = data.nextToken;
    }
    if (data.rowIdsNotFound !== undefined && data.rowIdsNotFound !== null) {
        contents.rowIdsNotFound = deserializeAws_restJson1RowIdList(data.rowIdsNotFound, context);
    }
    if (data.rows !== undefined && data.rows !== null) {
        contents.rows = deserializeAws_restJson1TableRows(data.rows, context);
    }
    if (data.workbookCursor !== undefined && data.workbookCursor !== null) {
        contents.workbookCursor = data.workbookCursor;
    }
    return Promise.resolve(contents);
};
exports.deserializeAws_restJson1ListTableRowsCommand = deserializeAws_restJson1ListTableRowsCommand;
const deserializeAws_restJson1ListTableRowsCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "AccessDeniedException":
        case "com.amazonaws.honeycode#AccessDeniedException":
            response = {
                ...(await deserializeAws_restJson1AccessDeniedExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InternalServerException":
        case "com.amazonaws.honeycode#InternalServerException":
            response = {
                ...(await deserializeAws_restJson1InternalServerExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "RequestTimeoutException":
        case "com.amazonaws.honeycode#RequestTimeoutException":
            response = {
                ...(await deserializeAws_restJson1RequestTimeoutExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ResourceNotFoundException":
        case "com.amazonaws.honeycode#ResourceNotFoundException":
            response = {
                ...(await deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ServiceUnavailableException":
        case "com.amazonaws.honeycode#ServiceUnavailableException":
            response = {
                ...(await deserializeAws_restJson1ServiceUnavailableExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ThrottlingException":
        case "com.amazonaws.honeycode#ThrottlingException":
            response = {
                ...(await deserializeAws_restJson1ThrottlingExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ValidationException":
        case "com.amazonaws.honeycode#ValidationException":
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
const deserializeAws_restJson1ListTablesCommand = async (output, context) => {
    if (output.statusCode !== 200 && output.statusCode >= 300) {
        return deserializeAws_restJson1ListTablesCommandError(output, context);
    }
    const contents = {
        $metadata: deserializeMetadata(output),
        nextToken: undefined,
        tables: undefined,
        workbookCursor: undefined,
    };
    const data = await parseBody(output.body, context);
    if (data.nextToken !== undefined && data.nextToken !== null) {
        contents.nextToken = data.nextToken;
    }
    if (data.tables !== undefined && data.tables !== null) {
        contents.tables = deserializeAws_restJson1Tables(data.tables, context);
    }
    if (data.workbookCursor !== undefined && data.workbookCursor !== null) {
        contents.workbookCursor = data.workbookCursor;
    }
    return Promise.resolve(contents);
};
exports.deserializeAws_restJson1ListTablesCommand = deserializeAws_restJson1ListTablesCommand;
const deserializeAws_restJson1ListTablesCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "AccessDeniedException":
        case "com.amazonaws.honeycode#AccessDeniedException":
            response = {
                ...(await deserializeAws_restJson1AccessDeniedExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InternalServerException":
        case "com.amazonaws.honeycode#InternalServerException":
            response = {
                ...(await deserializeAws_restJson1InternalServerExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "RequestTimeoutException":
        case "com.amazonaws.honeycode#RequestTimeoutException":
            response = {
                ...(await deserializeAws_restJson1RequestTimeoutExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ResourceNotFoundException":
        case "com.amazonaws.honeycode#ResourceNotFoundException":
            response = {
                ...(await deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ServiceUnavailableException":
        case "com.amazonaws.honeycode#ServiceUnavailableException":
            response = {
                ...(await deserializeAws_restJson1ServiceUnavailableExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ThrottlingException":
        case "com.amazonaws.honeycode#ThrottlingException":
            response = {
                ...(await deserializeAws_restJson1ThrottlingExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ValidationException":
        case "com.amazonaws.honeycode#ValidationException":
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
const deserializeAws_restJson1QueryTableRowsCommand = async (output, context) => {
    if (output.statusCode !== 200 && output.statusCode >= 300) {
        return deserializeAws_restJson1QueryTableRowsCommandError(output, context);
    }
    const contents = {
        $metadata: deserializeMetadata(output),
        columnIds: undefined,
        nextToken: undefined,
        rows: undefined,
        workbookCursor: undefined,
    };
    const data = await parseBody(output.body, context);
    if (data.columnIds !== undefined && data.columnIds !== null) {
        contents.columnIds = deserializeAws_restJson1ResourceIds(data.columnIds, context);
    }
    if (data.nextToken !== undefined && data.nextToken !== null) {
        contents.nextToken = data.nextToken;
    }
    if (data.rows !== undefined && data.rows !== null) {
        contents.rows = deserializeAws_restJson1TableRows(data.rows, context);
    }
    if (data.workbookCursor !== undefined && data.workbookCursor !== null) {
        contents.workbookCursor = data.workbookCursor;
    }
    return Promise.resolve(contents);
};
exports.deserializeAws_restJson1QueryTableRowsCommand = deserializeAws_restJson1QueryTableRowsCommand;
const deserializeAws_restJson1QueryTableRowsCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "AccessDeniedException":
        case "com.amazonaws.honeycode#AccessDeniedException":
            response = {
                ...(await deserializeAws_restJson1AccessDeniedExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InternalServerException":
        case "com.amazonaws.honeycode#InternalServerException":
            response = {
                ...(await deserializeAws_restJson1InternalServerExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "RequestTimeoutException":
        case "com.amazonaws.honeycode#RequestTimeoutException":
            response = {
                ...(await deserializeAws_restJson1RequestTimeoutExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ResourceNotFoundException":
        case "com.amazonaws.honeycode#ResourceNotFoundException":
            response = {
                ...(await deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ServiceUnavailableException":
        case "com.amazonaws.honeycode#ServiceUnavailableException":
            response = {
                ...(await deserializeAws_restJson1ServiceUnavailableExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ThrottlingException":
        case "com.amazonaws.honeycode#ThrottlingException":
            response = {
                ...(await deserializeAws_restJson1ThrottlingExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ValidationException":
        case "com.amazonaws.honeycode#ValidationException":
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
const deserializeAws_restJson1StartTableDataImportJobCommand = async (output, context) => {
    if (output.statusCode !== 200 && output.statusCode >= 300) {
        return deserializeAws_restJson1StartTableDataImportJobCommandError(output, context);
    }
    const contents = {
        $metadata: deserializeMetadata(output),
        jobId: undefined,
        jobStatus: undefined,
    };
    const data = await parseBody(output.body, context);
    if (data.jobId !== undefined && data.jobId !== null) {
        contents.jobId = data.jobId;
    }
    if (data.jobStatus !== undefined && data.jobStatus !== null) {
        contents.jobStatus = data.jobStatus;
    }
    return Promise.resolve(contents);
};
exports.deserializeAws_restJson1StartTableDataImportJobCommand = deserializeAws_restJson1StartTableDataImportJobCommand;
const deserializeAws_restJson1StartTableDataImportJobCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "AccessDeniedException":
        case "com.amazonaws.honeycode#AccessDeniedException":
            response = {
                ...(await deserializeAws_restJson1AccessDeniedExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InternalServerException":
        case "com.amazonaws.honeycode#InternalServerException":
            response = {
                ...(await deserializeAws_restJson1InternalServerExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ResourceNotFoundException":
        case "com.amazonaws.honeycode#ResourceNotFoundException":
            response = {
                ...(await deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ServiceUnavailableException":
        case "com.amazonaws.honeycode#ServiceUnavailableException":
            response = {
                ...(await deserializeAws_restJson1ServiceUnavailableExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ThrottlingException":
        case "com.amazonaws.honeycode#ThrottlingException":
            response = {
                ...(await deserializeAws_restJson1ThrottlingExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ValidationException":
        case "com.amazonaws.honeycode#ValidationException":
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
const deserializeAws_restJson1AutomationExecutionExceptionResponse = async (parsedOutput, context) => {
    const contents = {
        name: "AutomationExecutionException",
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
const deserializeAws_restJson1AutomationExecutionTimeoutExceptionResponse = async (parsedOutput, context) => {
    const contents = {
        name: "AutomationExecutionTimeoutException",
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
const deserializeAws_restJson1RequestTimeoutExceptionResponse = async (parsedOutput, context) => {
    const contents = {
        name: "RequestTimeoutException",
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
const deserializeAws_restJson1ServiceUnavailableExceptionResponse = async (parsedOutput, context) => {
    const contents = {
        name: "ServiceUnavailableException",
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
const serializeAws_restJson1CellInput = (input, context) => {
    return {
        ...(input.fact !== undefined && input.fact !== null && { fact: input.fact }),
    };
};
const serializeAws_restJson1CreateRowData = (input, context) => {
    return {
        ...(input.batchItemId !== undefined && input.batchItemId !== null && { batchItemId: input.batchItemId }),
        ...(input.cellsToCreate !== undefined &&
            input.cellsToCreate !== null && {
            cellsToCreate: serializeAws_restJson1RowDataInput(input.cellsToCreate, context),
        }),
    };
};
const serializeAws_restJson1CreateRowDataList = (input, context) => {
    return input
        .filter((e) => e != null)
        .map((entry) => {
        if (entry === null) {
            return null;
        }
        return serializeAws_restJson1CreateRowData(entry, context);
    });
};
const serializeAws_restJson1DelimitedTextImportOptions = (input, context) => {
    return {
        ...(input.dataCharacterEncoding !== undefined &&
            input.dataCharacterEncoding !== null && { dataCharacterEncoding: input.dataCharacterEncoding }),
        ...(input.delimiter !== undefined && input.delimiter !== null && { delimiter: input.delimiter }),
        ...(input.hasHeaderRow !== undefined && input.hasHeaderRow !== null && { hasHeaderRow: input.hasHeaderRow }),
        ...(input.ignoreEmptyRows !== undefined &&
            input.ignoreEmptyRows !== null && { ignoreEmptyRows: input.ignoreEmptyRows }),
    };
};
const serializeAws_restJson1DestinationOptions = (input, context) => {
    return {
        ...(input.columnMap !== undefined &&
            input.columnMap !== null && { columnMap: serializeAws_restJson1ImportColumnMap(input.columnMap, context) }),
    };
};
const serializeAws_restJson1Filter = (input, context) => {
    return {
        ...(input.contextRowId !== undefined && input.contextRowId !== null && { contextRowId: input.contextRowId }),
        ...(input.formula !== undefined && input.formula !== null && { formula: input.formula }),
    };
};
const serializeAws_restJson1ImportColumnMap = (input, context) => {
    return Object.entries(input).reduce((acc, [key, value]) => {
        if (value === null) {
            return acc;
        }
        return {
            ...acc,
            [key]: serializeAws_restJson1SourceDataColumnProperties(value, context),
        };
    }, {});
};
const serializeAws_restJson1ImportDataSource = (input, context) => {
    return {
        ...(input.dataSourceConfig !== undefined &&
            input.dataSourceConfig !== null && {
            dataSourceConfig: serializeAws_restJson1ImportDataSourceConfig(input.dataSourceConfig, context),
        }),
    };
};
const serializeAws_restJson1ImportDataSourceConfig = (input, context) => {
    return {
        ...(input.dataSourceUrl !== undefined && input.dataSourceUrl !== null && { dataSourceUrl: input.dataSourceUrl }),
    };
};
const serializeAws_restJson1ImportOptions = (input, context) => {
    return {
        ...(input.delimitedTextOptions !== undefined &&
            input.delimitedTextOptions !== null && {
            delimitedTextOptions: serializeAws_restJson1DelimitedTextImportOptions(input.delimitedTextOptions, context),
        }),
        ...(input.destinationOptions !== undefined &&
            input.destinationOptions !== null && {
            destinationOptions: serializeAws_restJson1DestinationOptions(input.destinationOptions, context),
        }),
    };
};
const serializeAws_restJson1RowDataInput = (input, context) => {
    return Object.entries(input).reduce((acc, [key, value]) => {
        if (value === null) {
            return acc;
        }
        return {
            ...acc,
            [key]: serializeAws_restJson1CellInput(value, context),
        };
    }, {});
};
const serializeAws_restJson1RowIdList = (input, context) => {
    return input
        .filter((e) => e != null)
        .map((entry) => {
        if (entry === null) {
            return null;
        }
        return entry;
    });
};
const serializeAws_restJson1SourceDataColumnProperties = (input, context) => {
    return {
        ...(input.columnIndex !== undefined && input.columnIndex !== null && { columnIndex: input.columnIndex }),
    };
};
const serializeAws_restJson1UpdateRowData = (input, context) => {
    return {
        ...(input.cellsToUpdate !== undefined &&
            input.cellsToUpdate !== null && {
            cellsToUpdate: serializeAws_restJson1RowDataInput(input.cellsToUpdate, context),
        }),
        ...(input.rowId !== undefined && input.rowId !== null && { rowId: input.rowId }),
    };
};
const serializeAws_restJson1UpdateRowDataList = (input, context) => {
    return input
        .filter((e) => e != null)
        .map((entry) => {
        if (entry === null) {
            return null;
        }
        return serializeAws_restJson1UpdateRowData(entry, context);
    });
};
const serializeAws_restJson1UpsertRowData = (input, context) => {
    return {
        ...(input.batchItemId !== undefined && input.batchItemId !== null && { batchItemId: input.batchItemId }),
        ...(input.cellsToUpdate !== undefined &&
            input.cellsToUpdate !== null && {
            cellsToUpdate: serializeAws_restJson1RowDataInput(input.cellsToUpdate, context),
        }),
        ...(input.filter !== undefined &&
            input.filter !== null && { filter: serializeAws_restJson1Filter(input.filter, context) }),
    };
};
const serializeAws_restJson1UpsertRowDataList = (input, context) => {
    return input
        .filter((e) => e != null)
        .map((entry) => {
        if (entry === null) {
            return null;
        }
        return serializeAws_restJson1UpsertRowData(entry, context);
    });
};
const serializeAws_restJson1VariableValue = (input, context) => {
    return {
        ...(input.rawValue !== undefined && input.rawValue !== null && { rawValue: input.rawValue }),
    };
};
const serializeAws_restJson1VariableValueMap = (input, context) => {
    return Object.entries(input).reduce((acc, [key, value]) => {
        if (value === null) {
            return acc;
        }
        return {
            ...acc,
            [key]: serializeAws_restJson1VariableValue(value, context),
        };
    }, {});
};
const deserializeAws_restJson1Cell = (output, context) => {
    return {
        format: output.format !== undefined && output.format !== null ? output.format : undefined,
        formattedValue: output.formattedValue !== undefined && output.formattedValue !== null ? output.formattedValue : undefined,
        formula: output.formula !== undefined && output.formula !== null ? output.formula : undefined,
        rawValue: output.rawValue !== undefined && output.rawValue !== null ? output.rawValue : undefined,
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
const deserializeAws_restJson1ColumnMetadata = (output, context) => {
    return {
        format: output.format !== undefined && output.format !== null ? output.format : undefined,
        name: output.name !== undefined && output.name !== null ? output.name : undefined,
    };
};
const deserializeAws_restJson1CreatedRowsMap = (output, context) => {
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
const deserializeAws_restJson1DataItem = (output, context) => {
    return {
        formattedValue: output.formattedValue !== undefined && output.formattedValue !== null ? output.formattedValue : undefined,
        overrideFormat: output.overrideFormat !== undefined && output.overrideFormat !== null ? output.overrideFormat : undefined,
        rawValue: output.rawValue !== undefined && output.rawValue !== null ? output.rawValue : undefined,
    };
};
const deserializeAws_restJson1DataItems = (output, context) => {
    return (output || [])
        .filter((e) => e != null)
        .map((entry) => {
        if (entry === null) {
            return null;
        }
        return deserializeAws_restJson1DataItem(entry, context);
    });
};
const deserializeAws_restJson1DelimitedTextImportOptions = (output, context) => {
    return {
        dataCharacterEncoding: output.dataCharacterEncoding !== undefined && output.dataCharacterEncoding !== null
            ? output.dataCharacterEncoding
            : undefined,
        delimiter: output.delimiter !== undefined && output.delimiter !== null ? output.delimiter : undefined,
        hasHeaderRow: output.hasHeaderRow !== undefined && output.hasHeaderRow !== null ? output.hasHeaderRow : undefined,
        ignoreEmptyRows: output.ignoreEmptyRows !== undefined && output.ignoreEmptyRows !== null ? output.ignoreEmptyRows : undefined,
    };
};
const deserializeAws_restJson1DestinationOptions = (output, context) => {
    return {
        columnMap: output.columnMap !== undefined && output.columnMap !== null
            ? deserializeAws_restJson1ImportColumnMap(output.columnMap, context)
            : undefined,
    };
};
const deserializeAws_restJson1FailedBatchItem = (output, context) => {
    return {
        errorMessage: output.errorMessage !== undefined && output.errorMessage !== null ? output.errorMessage : undefined,
        id: output.id !== undefined && output.id !== null ? output.id : undefined,
    };
};
const deserializeAws_restJson1FailedBatchItems = (output, context) => {
    return (output || [])
        .filter((e) => e != null)
        .map((entry) => {
        if (entry === null) {
            return null;
        }
        return deserializeAws_restJson1FailedBatchItem(entry, context);
    });
};
const deserializeAws_restJson1ImportColumnMap = (output, context) => {
    return Object.entries(output).reduce((acc, [key, value]) => {
        if (value === null) {
            return acc;
        }
        return {
            ...acc,
            [key]: deserializeAws_restJson1SourceDataColumnProperties(value, context),
        };
    }, {});
};
const deserializeAws_restJson1ImportDataSource = (output, context) => {
    return {
        dataSourceConfig: output.dataSourceConfig !== undefined && output.dataSourceConfig !== null
            ? deserializeAws_restJson1ImportDataSourceConfig(output.dataSourceConfig, context)
            : undefined,
    };
};
const deserializeAws_restJson1ImportDataSourceConfig = (output, context) => {
    return {
        dataSourceUrl: output.dataSourceUrl !== undefined && output.dataSourceUrl !== null ? output.dataSourceUrl : undefined,
    };
};
const deserializeAws_restJson1ImportJobSubmitter = (output, context) => {
    return {
        email: output.email !== undefined && output.email !== null ? output.email : undefined,
        userArn: output.userArn !== undefined && output.userArn !== null ? output.userArn : undefined,
    };
};
const deserializeAws_restJson1ImportOptions = (output, context) => {
    return {
        delimitedTextOptions: output.delimitedTextOptions !== undefined && output.delimitedTextOptions !== null
            ? deserializeAws_restJson1DelimitedTextImportOptions(output.delimitedTextOptions, context)
            : undefined,
        destinationOptions: output.destinationOptions !== undefined && output.destinationOptions !== null
            ? deserializeAws_restJson1DestinationOptions(output.destinationOptions, context)
            : undefined,
    };
};
const deserializeAws_restJson1ResourceIds = (output, context) => {
    return (output || [])
        .filter((e) => e != null)
        .map((entry) => {
        if (entry === null) {
            return null;
        }
        return entry;
    });
};
const deserializeAws_restJson1ResultHeader = (output, context) => {
    return (output || [])
        .filter((e) => e != null)
        .map((entry) => {
        if (entry === null) {
            return null;
        }
        return deserializeAws_restJson1ColumnMetadata(entry, context);
    });
};
const deserializeAws_restJson1ResultRow = (output, context) => {
    return {
        dataItems: output.dataItems !== undefined && output.dataItems !== null
            ? deserializeAws_restJson1DataItems(output.dataItems, context)
            : undefined,
        rowId: output.rowId !== undefined && output.rowId !== null ? output.rowId : undefined,
    };
};
const deserializeAws_restJson1ResultRows = (output, context) => {
    return (output || [])
        .filter((e) => e != null)
        .map((entry) => {
        if (entry === null) {
            return null;
        }
        return deserializeAws_restJson1ResultRow(entry, context);
    });
};
const deserializeAws_restJson1ResultSet = (output, context) => {
    return {
        headers: output.headers !== undefined && output.headers !== null
            ? deserializeAws_restJson1ResultHeader(output.headers, context)
            : undefined,
        rows: output.rows !== undefined && output.rows !== null
            ? deserializeAws_restJson1ResultRows(output.rows, context)
            : undefined,
    };
};
const deserializeAws_restJson1ResultSetMap = (output, context) => {
    return Object.entries(output).reduce((acc, [key, value]) => {
        if (value === null) {
            return acc;
        }
        return {
            ...acc,
            [key]: deserializeAws_restJson1ResultSet(value, context),
        };
    }, {});
};
const deserializeAws_restJson1RowIdList = (output, context) => {
    return (output || [])
        .filter((e) => e != null)
        .map((entry) => {
        if (entry === null) {
            return null;
        }
        return entry;
    });
};
const deserializeAws_restJson1SourceDataColumnProperties = (output, context) => {
    return {
        columnIndex: output.columnIndex !== undefined && output.columnIndex !== null ? output.columnIndex : undefined,
    };
};
const deserializeAws_restJson1Table = (output, context) => {
    return {
        tableId: output.tableId !== undefined && output.tableId !== null ? output.tableId : undefined,
        tableName: output.tableName !== undefined && output.tableName !== null ? output.tableName : undefined,
    };
};
const deserializeAws_restJson1TableColumn = (output, context) => {
    return {
        format: output.format !== undefined && output.format !== null ? output.format : undefined,
        tableColumnId: output.tableColumnId !== undefined && output.tableColumnId !== null ? output.tableColumnId : undefined,
        tableColumnName: output.tableColumnName !== undefined && output.tableColumnName !== null ? output.tableColumnName : undefined,
    };
};
const deserializeAws_restJson1TableColumns = (output, context) => {
    return (output || [])
        .filter((e) => e != null)
        .map((entry) => {
        if (entry === null) {
            return null;
        }
        return deserializeAws_restJson1TableColumn(entry, context);
    });
};
const deserializeAws_restJson1TableDataImportJobMetadata = (output, context) => {
    return {
        dataSource: output.dataSource !== undefined && output.dataSource !== null
            ? deserializeAws_restJson1ImportDataSource(output.dataSource, context)
            : undefined,
        importOptions: output.importOptions !== undefined && output.importOptions !== null
            ? deserializeAws_restJson1ImportOptions(output.importOptions, context)
            : undefined,
        submitTime: output.submitTime !== undefined && output.submitTime !== null
            ? new Date(Math.round(output.submitTime * 1000))
            : undefined,
        submitter: output.submitter !== undefined && output.submitter !== null
            ? deserializeAws_restJson1ImportJobSubmitter(output.submitter, context)
            : undefined,
    };
};
const deserializeAws_restJson1TableRow = (output, context) => {
    return {
        cells: output.cells !== undefined && output.cells !== null
            ? deserializeAws_restJson1Cells(output.cells, context)
            : undefined,
        rowId: output.rowId !== undefined && output.rowId !== null ? output.rowId : undefined,
    };
};
const deserializeAws_restJson1TableRows = (output, context) => {
    return (output || [])
        .filter((e) => e != null)
        .map((entry) => {
        if (entry === null) {
            return null;
        }
        return deserializeAws_restJson1TableRow(entry, context);
    });
};
const deserializeAws_restJson1Tables = (output, context) => {
    return (output || [])
        .filter((e) => e != null)
        .map((entry) => {
        if (entry === null) {
            return null;
        }
        return deserializeAws_restJson1Table(entry, context);
    });
};
const deserializeAws_restJson1UpsertRowsResult = (output, context) => {
    return {
        rowIds: output.rowIds !== undefined && output.rowIds !== null
            ? deserializeAws_restJson1RowIdList(output.rowIds, context)
            : undefined,
        upsertAction: output.upsertAction !== undefined && output.upsertAction !== null ? output.upsertAction : undefined,
    };
};
const deserializeAws_restJson1UpsertRowsResultMap = (output, context) => {
    return Object.entries(output).reduce((acc, [key, value]) => {
        if (value === null) {
            return acc;
        }
        return {
            ...acc,
            [key]: deserializeAws_restJson1UpsertRowsResult(value, context),
        };
    }, {});
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