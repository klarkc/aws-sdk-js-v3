"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.deserializeAws_json1_1GetQueryResultsCommand =
  exports.deserializeAws_json1_1GetQueryExecutionCommand =
  exports.deserializeAws_json1_1GetPreparedStatementCommand =
  exports.deserializeAws_json1_1GetNamedQueryCommand =
  exports.deserializeAws_json1_1GetDataCatalogCommand =
  exports.deserializeAws_json1_1GetDatabaseCommand =
  exports.deserializeAws_json1_1DeleteWorkGroupCommand =
  exports.deserializeAws_json1_1DeletePreparedStatementCommand =
  exports.deserializeAws_json1_1DeleteNamedQueryCommand =
  exports.deserializeAws_json1_1DeleteDataCatalogCommand =
  exports.deserializeAws_json1_1CreateWorkGroupCommand =
  exports.deserializeAws_json1_1CreatePreparedStatementCommand =
  exports.deserializeAws_json1_1CreateNamedQueryCommand =
  exports.deserializeAws_json1_1CreateDataCatalogCommand =
  exports.deserializeAws_json1_1BatchGetQueryExecutionCommand =
  exports.deserializeAws_json1_1BatchGetNamedQueryCommand =
  exports.serializeAws_json1_1UpdateWorkGroupCommand =
  exports.serializeAws_json1_1UpdatePreparedStatementCommand =
  exports.serializeAws_json1_1UpdateDataCatalogCommand =
  exports.serializeAws_json1_1UntagResourceCommand =
  exports.serializeAws_json1_1TagResourceCommand =
  exports.serializeAws_json1_1StopQueryExecutionCommand =
  exports.serializeAws_json1_1StartQueryExecutionCommand =
  exports.serializeAws_json1_1ListWorkGroupsCommand =
  exports.serializeAws_json1_1ListTagsForResourceCommand =
  exports.serializeAws_json1_1ListTableMetadataCommand =
  exports.serializeAws_json1_1ListQueryExecutionsCommand =
  exports.serializeAws_json1_1ListPreparedStatementsCommand =
  exports.serializeAws_json1_1ListNamedQueriesCommand =
  exports.serializeAws_json1_1ListEngineVersionsCommand =
  exports.serializeAws_json1_1ListDataCatalogsCommand =
  exports.serializeAws_json1_1ListDatabasesCommand =
  exports.serializeAws_json1_1GetWorkGroupCommand =
  exports.serializeAws_json1_1GetTableMetadataCommand =
  exports.serializeAws_json1_1GetQueryResultsCommand =
  exports.serializeAws_json1_1GetQueryExecutionCommand =
  exports.serializeAws_json1_1GetPreparedStatementCommand =
  exports.serializeAws_json1_1GetNamedQueryCommand =
  exports.serializeAws_json1_1GetDataCatalogCommand =
  exports.serializeAws_json1_1GetDatabaseCommand =
  exports.serializeAws_json1_1DeleteWorkGroupCommand =
  exports.serializeAws_json1_1DeletePreparedStatementCommand =
  exports.serializeAws_json1_1DeleteNamedQueryCommand =
  exports.serializeAws_json1_1DeleteDataCatalogCommand =
  exports.serializeAws_json1_1CreateWorkGroupCommand =
  exports.serializeAws_json1_1CreatePreparedStatementCommand =
  exports.serializeAws_json1_1CreateNamedQueryCommand =
  exports.serializeAws_json1_1CreateDataCatalogCommand =
  exports.serializeAws_json1_1BatchGetQueryExecutionCommand =
  exports.serializeAws_json1_1BatchGetNamedQueryCommand =
    void 0;
exports.deserializeAws_json1_1UpdateWorkGroupCommand =
  exports.deserializeAws_json1_1UpdatePreparedStatementCommand =
  exports.deserializeAws_json1_1UpdateDataCatalogCommand =
  exports.deserializeAws_json1_1UntagResourceCommand =
  exports.deserializeAws_json1_1TagResourceCommand =
  exports.deserializeAws_json1_1StopQueryExecutionCommand =
  exports.deserializeAws_json1_1StartQueryExecutionCommand =
  exports.deserializeAws_json1_1ListWorkGroupsCommand =
  exports.deserializeAws_json1_1ListTagsForResourceCommand =
  exports.deserializeAws_json1_1ListTableMetadataCommand =
  exports.deserializeAws_json1_1ListQueryExecutionsCommand =
  exports.deserializeAws_json1_1ListPreparedStatementsCommand =
  exports.deserializeAws_json1_1ListNamedQueriesCommand =
  exports.deserializeAws_json1_1ListEngineVersionsCommand =
  exports.deserializeAws_json1_1ListDataCatalogsCommand =
  exports.deserializeAws_json1_1ListDatabasesCommand =
  exports.deserializeAws_json1_1GetWorkGroupCommand =
  exports.deserializeAws_json1_1GetTableMetadataCommand =
    void 0;
const protocol_http_1 = require("@aws-sdk/protocol-http");
const uuid_1 = require("uuid");
const serializeAws_json1_1BatchGetNamedQueryCommand = async (input, context) => {
  const headers = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "AmazonAthena.BatchGetNamedQuery",
  };
  let body;
  body = JSON.stringify(serializeAws_json1_1BatchGetNamedQueryInput(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
exports.serializeAws_json1_1BatchGetNamedQueryCommand = serializeAws_json1_1BatchGetNamedQueryCommand;
const serializeAws_json1_1BatchGetQueryExecutionCommand = async (input, context) => {
  const headers = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "AmazonAthena.BatchGetQueryExecution",
  };
  let body;
  body = JSON.stringify(serializeAws_json1_1BatchGetQueryExecutionInput(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
exports.serializeAws_json1_1BatchGetQueryExecutionCommand = serializeAws_json1_1BatchGetQueryExecutionCommand;
const serializeAws_json1_1CreateDataCatalogCommand = async (input, context) => {
  const headers = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "AmazonAthena.CreateDataCatalog",
  };
  let body;
  body = JSON.stringify(serializeAws_json1_1CreateDataCatalogInput(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
exports.serializeAws_json1_1CreateDataCatalogCommand = serializeAws_json1_1CreateDataCatalogCommand;
const serializeAws_json1_1CreateNamedQueryCommand = async (input, context) => {
  const headers = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "AmazonAthena.CreateNamedQuery",
  };
  let body;
  body = JSON.stringify(serializeAws_json1_1CreateNamedQueryInput(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
exports.serializeAws_json1_1CreateNamedQueryCommand = serializeAws_json1_1CreateNamedQueryCommand;
const serializeAws_json1_1CreatePreparedStatementCommand = async (input, context) => {
  const headers = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "AmazonAthena.CreatePreparedStatement",
  };
  let body;
  body = JSON.stringify(serializeAws_json1_1CreatePreparedStatementInput(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
exports.serializeAws_json1_1CreatePreparedStatementCommand = serializeAws_json1_1CreatePreparedStatementCommand;
const serializeAws_json1_1CreateWorkGroupCommand = async (input, context) => {
  const headers = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "AmazonAthena.CreateWorkGroup",
  };
  let body;
  body = JSON.stringify(serializeAws_json1_1CreateWorkGroupInput(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
exports.serializeAws_json1_1CreateWorkGroupCommand = serializeAws_json1_1CreateWorkGroupCommand;
const serializeAws_json1_1DeleteDataCatalogCommand = async (input, context) => {
  const headers = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "AmazonAthena.DeleteDataCatalog",
  };
  let body;
  body = JSON.stringify(serializeAws_json1_1DeleteDataCatalogInput(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
exports.serializeAws_json1_1DeleteDataCatalogCommand = serializeAws_json1_1DeleteDataCatalogCommand;
const serializeAws_json1_1DeleteNamedQueryCommand = async (input, context) => {
  const headers = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "AmazonAthena.DeleteNamedQuery",
  };
  let body;
  body = JSON.stringify(serializeAws_json1_1DeleteNamedQueryInput(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
exports.serializeAws_json1_1DeleteNamedQueryCommand = serializeAws_json1_1DeleteNamedQueryCommand;
const serializeAws_json1_1DeletePreparedStatementCommand = async (input, context) => {
  const headers = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "AmazonAthena.DeletePreparedStatement",
  };
  let body;
  body = JSON.stringify(serializeAws_json1_1DeletePreparedStatementInput(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
exports.serializeAws_json1_1DeletePreparedStatementCommand = serializeAws_json1_1DeletePreparedStatementCommand;
const serializeAws_json1_1DeleteWorkGroupCommand = async (input, context) => {
  const headers = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "AmazonAthena.DeleteWorkGroup",
  };
  let body;
  body = JSON.stringify(serializeAws_json1_1DeleteWorkGroupInput(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
exports.serializeAws_json1_1DeleteWorkGroupCommand = serializeAws_json1_1DeleteWorkGroupCommand;
const serializeAws_json1_1GetDatabaseCommand = async (input, context) => {
  const headers = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "AmazonAthena.GetDatabase",
  };
  let body;
  body = JSON.stringify(serializeAws_json1_1GetDatabaseInput(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
exports.serializeAws_json1_1GetDatabaseCommand = serializeAws_json1_1GetDatabaseCommand;
const serializeAws_json1_1GetDataCatalogCommand = async (input, context) => {
  const headers = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "AmazonAthena.GetDataCatalog",
  };
  let body;
  body = JSON.stringify(serializeAws_json1_1GetDataCatalogInput(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
exports.serializeAws_json1_1GetDataCatalogCommand = serializeAws_json1_1GetDataCatalogCommand;
const serializeAws_json1_1GetNamedQueryCommand = async (input, context) => {
  const headers = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "AmazonAthena.GetNamedQuery",
  };
  let body;
  body = JSON.stringify(serializeAws_json1_1GetNamedQueryInput(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
exports.serializeAws_json1_1GetNamedQueryCommand = serializeAws_json1_1GetNamedQueryCommand;
const serializeAws_json1_1GetPreparedStatementCommand = async (input, context) => {
  const headers = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "AmazonAthena.GetPreparedStatement",
  };
  let body;
  body = JSON.stringify(serializeAws_json1_1GetPreparedStatementInput(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
exports.serializeAws_json1_1GetPreparedStatementCommand = serializeAws_json1_1GetPreparedStatementCommand;
const serializeAws_json1_1GetQueryExecutionCommand = async (input, context) => {
  const headers = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "AmazonAthena.GetQueryExecution",
  };
  let body;
  body = JSON.stringify(serializeAws_json1_1GetQueryExecutionInput(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
exports.serializeAws_json1_1GetQueryExecutionCommand = serializeAws_json1_1GetQueryExecutionCommand;
const serializeAws_json1_1GetQueryResultsCommand = async (input, context) => {
  const headers = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "AmazonAthena.GetQueryResults",
  };
  let body;
  body = JSON.stringify(serializeAws_json1_1GetQueryResultsInput(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
exports.serializeAws_json1_1GetQueryResultsCommand = serializeAws_json1_1GetQueryResultsCommand;
const serializeAws_json1_1GetTableMetadataCommand = async (input, context) => {
  const headers = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "AmazonAthena.GetTableMetadata",
  };
  let body;
  body = JSON.stringify(serializeAws_json1_1GetTableMetadataInput(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
exports.serializeAws_json1_1GetTableMetadataCommand = serializeAws_json1_1GetTableMetadataCommand;
const serializeAws_json1_1GetWorkGroupCommand = async (input, context) => {
  const headers = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "AmazonAthena.GetWorkGroup",
  };
  let body;
  body = JSON.stringify(serializeAws_json1_1GetWorkGroupInput(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
exports.serializeAws_json1_1GetWorkGroupCommand = serializeAws_json1_1GetWorkGroupCommand;
const serializeAws_json1_1ListDatabasesCommand = async (input, context) => {
  const headers = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "AmazonAthena.ListDatabases",
  };
  let body;
  body = JSON.stringify(serializeAws_json1_1ListDatabasesInput(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
exports.serializeAws_json1_1ListDatabasesCommand = serializeAws_json1_1ListDatabasesCommand;
const serializeAws_json1_1ListDataCatalogsCommand = async (input, context) => {
  const headers = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "AmazonAthena.ListDataCatalogs",
  };
  let body;
  body = JSON.stringify(serializeAws_json1_1ListDataCatalogsInput(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
exports.serializeAws_json1_1ListDataCatalogsCommand = serializeAws_json1_1ListDataCatalogsCommand;
const serializeAws_json1_1ListEngineVersionsCommand = async (input, context) => {
  const headers = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "AmazonAthena.ListEngineVersions",
  };
  let body;
  body = JSON.stringify(serializeAws_json1_1ListEngineVersionsInput(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
exports.serializeAws_json1_1ListEngineVersionsCommand = serializeAws_json1_1ListEngineVersionsCommand;
const serializeAws_json1_1ListNamedQueriesCommand = async (input, context) => {
  const headers = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "AmazonAthena.ListNamedQueries",
  };
  let body;
  body = JSON.stringify(serializeAws_json1_1ListNamedQueriesInput(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
exports.serializeAws_json1_1ListNamedQueriesCommand = serializeAws_json1_1ListNamedQueriesCommand;
const serializeAws_json1_1ListPreparedStatementsCommand = async (input, context) => {
  const headers = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "AmazonAthena.ListPreparedStatements",
  };
  let body;
  body = JSON.stringify(serializeAws_json1_1ListPreparedStatementsInput(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
exports.serializeAws_json1_1ListPreparedStatementsCommand = serializeAws_json1_1ListPreparedStatementsCommand;
const serializeAws_json1_1ListQueryExecutionsCommand = async (input, context) => {
  const headers = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "AmazonAthena.ListQueryExecutions",
  };
  let body;
  body = JSON.stringify(serializeAws_json1_1ListQueryExecutionsInput(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
exports.serializeAws_json1_1ListQueryExecutionsCommand = serializeAws_json1_1ListQueryExecutionsCommand;
const serializeAws_json1_1ListTableMetadataCommand = async (input, context) => {
  const headers = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "AmazonAthena.ListTableMetadata",
  };
  let body;
  body = JSON.stringify(serializeAws_json1_1ListTableMetadataInput(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
exports.serializeAws_json1_1ListTableMetadataCommand = serializeAws_json1_1ListTableMetadataCommand;
const serializeAws_json1_1ListTagsForResourceCommand = async (input, context) => {
  const headers = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "AmazonAthena.ListTagsForResource",
  };
  let body;
  body = JSON.stringify(serializeAws_json1_1ListTagsForResourceInput(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
exports.serializeAws_json1_1ListTagsForResourceCommand = serializeAws_json1_1ListTagsForResourceCommand;
const serializeAws_json1_1ListWorkGroupsCommand = async (input, context) => {
  const headers = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "AmazonAthena.ListWorkGroups",
  };
  let body;
  body = JSON.stringify(serializeAws_json1_1ListWorkGroupsInput(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
exports.serializeAws_json1_1ListWorkGroupsCommand = serializeAws_json1_1ListWorkGroupsCommand;
const serializeAws_json1_1StartQueryExecutionCommand = async (input, context) => {
  const headers = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "AmazonAthena.StartQueryExecution",
  };
  let body;
  body = JSON.stringify(serializeAws_json1_1StartQueryExecutionInput(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
exports.serializeAws_json1_1StartQueryExecutionCommand = serializeAws_json1_1StartQueryExecutionCommand;
const serializeAws_json1_1StopQueryExecutionCommand = async (input, context) => {
  const headers = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "AmazonAthena.StopQueryExecution",
  };
  let body;
  body = JSON.stringify(serializeAws_json1_1StopQueryExecutionInput(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
exports.serializeAws_json1_1StopQueryExecutionCommand = serializeAws_json1_1StopQueryExecutionCommand;
const serializeAws_json1_1TagResourceCommand = async (input, context) => {
  const headers = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "AmazonAthena.TagResource",
  };
  let body;
  body = JSON.stringify(serializeAws_json1_1TagResourceInput(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
exports.serializeAws_json1_1TagResourceCommand = serializeAws_json1_1TagResourceCommand;
const serializeAws_json1_1UntagResourceCommand = async (input, context) => {
  const headers = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "AmazonAthena.UntagResource",
  };
  let body;
  body = JSON.stringify(serializeAws_json1_1UntagResourceInput(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
exports.serializeAws_json1_1UntagResourceCommand = serializeAws_json1_1UntagResourceCommand;
const serializeAws_json1_1UpdateDataCatalogCommand = async (input, context) => {
  const headers = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "AmazonAthena.UpdateDataCatalog",
  };
  let body;
  body = JSON.stringify(serializeAws_json1_1UpdateDataCatalogInput(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
exports.serializeAws_json1_1UpdateDataCatalogCommand = serializeAws_json1_1UpdateDataCatalogCommand;
const serializeAws_json1_1UpdatePreparedStatementCommand = async (input, context) => {
  const headers = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "AmazonAthena.UpdatePreparedStatement",
  };
  let body;
  body = JSON.stringify(serializeAws_json1_1UpdatePreparedStatementInput(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
exports.serializeAws_json1_1UpdatePreparedStatementCommand = serializeAws_json1_1UpdatePreparedStatementCommand;
const serializeAws_json1_1UpdateWorkGroupCommand = async (input, context) => {
  const headers = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "AmazonAthena.UpdateWorkGroup",
  };
  let body;
  body = JSON.stringify(serializeAws_json1_1UpdateWorkGroupInput(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
exports.serializeAws_json1_1UpdateWorkGroupCommand = serializeAws_json1_1UpdateWorkGroupCommand;
const deserializeAws_json1_1BatchGetNamedQueryCommand = async (output, context) => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_1BatchGetNamedQueryCommandError(output, context);
  }
  const data = await parseBody(output.body, context);
  let contents = {};
  contents = deserializeAws_json1_1BatchGetNamedQueryOutput(data, context);
  const response = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};
exports.deserializeAws_json1_1BatchGetNamedQueryCommand = deserializeAws_json1_1BatchGetNamedQueryCommand;
const deserializeAws_json1_1BatchGetNamedQueryCommandError = async (output, context) => {
  const parsedOutput = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response;
  let errorCode = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InternalServerException":
    case "com.amazonaws.athena#InternalServerException":
      response = {
        ...(await deserializeAws_json1_1InternalServerExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InvalidRequestException":
    case "com.amazonaws.athena#InvalidRequestException":
      response = {
        ...(await deserializeAws_json1_1InvalidRequestExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    default:
      const parsedBody = parsedOutput.body;
      errorCode = parsedBody.code || parsedBody.Code || errorCode;
      response = {
        ...parsedBody,
        name: `${errorCode}`,
        message: parsedBody.message || parsedBody.Message || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output),
      };
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
};
const deserializeAws_json1_1BatchGetQueryExecutionCommand = async (output, context) => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_1BatchGetQueryExecutionCommandError(output, context);
  }
  const data = await parseBody(output.body, context);
  let contents = {};
  contents = deserializeAws_json1_1BatchGetQueryExecutionOutput(data, context);
  const response = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};
exports.deserializeAws_json1_1BatchGetQueryExecutionCommand = deserializeAws_json1_1BatchGetQueryExecutionCommand;
const deserializeAws_json1_1BatchGetQueryExecutionCommandError = async (output, context) => {
  const parsedOutput = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response;
  let errorCode = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InternalServerException":
    case "com.amazonaws.athena#InternalServerException":
      response = {
        ...(await deserializeAws_json1_1InternalServerExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InvalidRequestException":
    case "com.amazonaws.athena#InvalidRequestException":
      response = {
        ...(await deserializeAws_json1_1InvalidRequestExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    default:
      const parsedBody = parsedOutput.body;
      errorCode = parsedBody.code || parsedBody.Code || errorCode;
      response = {
        ...parsedBody,
        name: `${errorCode}`,
        message: parsedBody.message || parsedBody.Message || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output),
      };
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
};
const deserializeAws_json1_1CreateDataCatalogCommand = async (output, context) => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_1CreateDataCatalogCommandError(output, context);
  }
  const data = await parseBody(output.body, context);
  let contents = {};
  contents = deserializeAws_json1_1CreateDataCatalogOutput(data, context);
  const response = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};
exports.deserializeAws_json1_1CreateDataCatalogCommand = deserializeAws_json1_1CreateDataCatalogCommand;
const deserializeAws_json1_1CreateDataCatalogCommandError = async (output, context) => {
  const parsedOutput = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response;
  let errorCode = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InternalServerException":
    case "com.amazonaws.athena#InternalServerException":
      response = {
        ...(await deserializeAws_json1_1InternalServerExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InvalidRequestException":
    case "com.amazonaws.athena#InvalidRequestException":
      response = {
        ...(await deserializeAws_json1_1InvalidRequestExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    default:
      const parsedBody = parsedOutput.body;
      errorCode = parsedBody.code || parsedBody.Code || errorCode;
      response = {
        ...parsedBody,
        name: `${errorCode}`,
        message: parsedBody.message || parsedBody.Message || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output),
      };
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
};
const deserializeAws_json1_1CreateNamedQueryCommand = async (output, context) => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_1CreateNamedQueryCommandError(output, context);
  }
  const data = await parseBody(output.body, context);
  let contents = {};
  contents = deserializeAws_json1_1CreateNamedQueryOutput(data, context);
  const response = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};
exports.deserializeAws_json1_1CreateNamedQueryCommand = deserializeAws_json1_1CreateNamedQueryCommand;
const deserializeAws_json1_1CreateNamedQueryCommandError = async (output, context) => {
  const parsedOutput = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response;
  let errorCode = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InternalServerException":
    case "com.amazonaws.athena#InternalServerException":
      response = {
        ...(await deserializeAws_json1_1InternalServerExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InvalidRequestException":
    case "com.amazonaws.athena#InvalidRequestException":
      response = {
        ...(await deserializeAws_json1_1InvalidRequestExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    default:
      const parsedBody = parsedOutput.body;
      errorCode = parsedBody.code || parsedBody.Code || errorCode;
      response = {
        ...parsedBody,
        name: `${errorCode}`,
        message: parsedBody.message || parsedBody.Message || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output),
      };
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
};
const deserializeAws_json1_1CreatePreparedStatementCommand = async (output, context) => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_1CreatePreparedStatementCommandError(output, context);
  }
  const data = await parseBody(output.body, context);
  let contents = {};
  contents = deserializeAws_json1_1CreatePreparedStatementOutput(data, context);
  const response = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};
exports.deserializeAws_json1_1CreatePreparedStatementCommand = deserializeAws_json1_1CreatePreparedStatementCommand;
const deserializeAws_json1_1CreatePreparedStatementCommandError = async (output, context) => {
  const parsedOutput = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response;
  let errorCode = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InternalServerException":
    case "com.amazonaws.athena#InternalServerException":
      response = {
        ...(await deserializeAws_json1_1InternalServerExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InvalidRequestException":
    case "com.amazonaws.athena#InvalidRequestException":
      response = {
        ...(await deserializeAws_json1_1InvalidRequestExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    default:
      const parsedBody = parsedOutput.body;
      errorCode = parsedBody.code || parsedBody.Code || errorCode;
      response = {
        ...parsedBody,
        name: `${errorCode}`,
        message: parsedBody.message || parsedBody.Message || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output),
      };
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
};
const deserializeAws_json1_1CreateWorkGroupCommand = async (output, context) => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_1CreateWorkGroupCommandError(output, context);
  }
  const data = await parseBody(output.body, context);
  let contents = {};
  contents = deserializeAws_json1_1CreateWorkGroupOutput(data, context);
  const response = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};
exports.deserializeAws_json1_1CreateWorkGroupCommand = deserializeAws_json1_1CreateWorkGroupCommand;
const deserializeAws_json1_1CreateWorkGroupCommandError = async (output, context) => {
  const parsedOutput = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response;
  let errorCode = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InternalServerException":
    case "com.amazonaws.athena#InternalServerException":
      response = {
        ...(await deserializeAws_json1_1InternalServerExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InvalidRequestException":
    case "com.amazonaws.athena#InvalidRequestException":
      response = {
        ...(await deserializeAws_json1_1InvalidRequestExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    default:
      const parsedBody = parsedOutput.body;
      errorCode = parsedBody.code || parsedBody.Code || errorCode;
      response = {
        ...parsedBody,
        name: `${errorCode}`,
        message: parsedBody.message || parsedBody.Message || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output),
      };
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
};
const deserializeAws_json1_1DeleteDataCatalogCommand = async (output, context) => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_1DeleteDataCatalogCommandError(output, context);
  }
  const data = await parseBody(output.body, context);
  let contents = {};
  contents = deserializeAws_json1_1DeleteDataCatalogOutput(data, context);
  const response = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};
exports.deserializeAws_json1_1DeleteDataCatalogCommand = deserializeAws_json1_1DeleteDataCatalogCommand;
const deserializeAws_json1_1DeleteDataCatalogCommandError = async (output, context) => {
  const parsedOutput = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response;
  let errorCode = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InternalServerException":
    case "com.amazonaws.athena#InternalServerException":
      response = {
        ...(await deserializeAws_json1_1InternalServerExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InvalidRequestException":
    case "com.amazonaws.athena#InvalidRequestException":
      response = {
        ...(await deserializeAws_json1_1InvalidRequestExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    default:
      const parsedBody = parsedOutput.body;
      errorCode = parsedBody.code || parsedBody.Code || errorCode;
      response = {
        ...parsedBody,
        name: `${errorCode}`,
        message: parsedBody.message || parsedBody.Message || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output),
      };
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
};
const deserializeAws_json1_1DeleteNamedQueryCommand = async (output, context) => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_1DeleteNamedQueryCommandError(output, context);
  }
  const data = await parseBody(output.body, context);
  let contents = {};
  contents = deserializeAws_json1_1DeleteNamedQueryOutput(data, context);
  const response = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};
exports.deserializeAws_json1_1DeleteNamedQueryCommand = deserializeAws_json1_1DeleteNamedQueryCommand;
const deserializeAws_json1_1DeleteNamedQueryCommandError = async (output, context) => {
  const parsedOutput = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response;
  let errorCode = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InternalServerException":
    case "com.amazonaws.athena#InternalServerException":
      response = {
        ...(await deserializeAws_json1_1InternalServerExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InvalidRequestException":
    case "com.amazonaws.athena#InvalidRequestException":
      response = {
        ...(await deserializeAws_json1_1InvalidRequestExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    default:
      const parsedBody = parsedOutput.body;
      errorCode = parsedBody.code || parsedBody.Code || errorCode;
      response = {
        ...parsedBody,
        name: `${errorCode}`,
        message: parsedBody.message || parsedBody.Message || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output),
      };
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
};
const deserializeAws_json1_1DeletePreparedStatementCommand = async (output, context) => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_1DeletePreparedStatementCommandError(output, context);
  }
  const data = await parseBody(output.body, context);
  let contents = {};
  contents = deserializeAws_json1_1DeletePreparedStatementOutput(data, context);
  const response = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};
exports.deserializeAws_json1_1DeletePreparedStatementCommand = deserializeAws_json1_1DeletePreparedStatementCommand;
const deserializeAws_json1_1DeletePreparedStatementCommandError = async (output, context) => {
  const parsedOutput = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response;
  let errorCode = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InternalServerException":
    case "com.amazonaws.athena#InternalServerException":
      response = {
        ...(await deserializeAws_json1_1InternalServerExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InvalidRequestException":
    case "com.amazonaws.athena#InvalidRequestException":
      response = {
        ...(await deserializeAws_json1_1InvalidRequestExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ResourceNotFoundException":
    case "com.amazonaws.athena#ResourceNotFoundException":
      response = {
        ...(await deserializeAws_json1_1ResourceNotFoundExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    default:
      const parsedBody = parsedOutput.body;
      errorCode = parsedBody.code || parsedBody.Code || errorCode;
      response = {
        ...parsedBody,
        name: `${errorCode}`,
        message: parsedBody.message || parsedBody.Message || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output),
      };
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
};
const deserializeAws_json1_1DeleteWorkGroupCommand = async (output, context) => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_1DeleteWorkGroupCommandError(output, context);
  }
  const data = await parseBody(output.body, context);
  let contents = {};
  contents = deserializeAws_json1_1DeleteWorkGroupOutput(data, context);
  const response = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};
exports.deserializeAws_json1_1DeleteWorkGroupCommand = deserializeAws_json1_1DeleteWorkGroupCommand;
const deserializeAws_json1_1DeleteWorkGroupCommandError = async (output, context) => {
  const parsedOutput = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response;
  let errorCode = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InternalServerException":
    case "com.amazonaws.athena#InternalServerException":
      response = {
        ...(await deserializeAws_json1_1InternalServerExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InvalidRequestException":
    case "com.amazonaws.athena#InvalidRequestException":
      response = {
        ...(await deserializeAws_json1_1InvalidRequestExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    default:
      const parsedBody = parsedOutput.body;
      errorCode = parsedBody.code || parsedBody.Code || errorCode;
      response = {
        ...parsedBody,
        name: `${errorCode}`,
        message: parsedBody.message || parsedBody.Message || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output),
      };
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
};
const deserializeAws_json1_1GetDatabaseCommand = async (output, context) => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_1GetDatabaseCommandError(output, context);
  }
  const data = await parseBody(output.body, context);
  let contents = {};
  contents = deserializeAws_json1_1GetDatabaseOutput(data, context);
  const response = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};
exports.deserializeAws_json1_1GetDatabaseCommand = deserializeAws_json1_1GetDatabaseCommand;
const deserializeAws_json1_1GetDatabaseCommandError = async (output, context) => {
  const parsedOutput = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response;
  let errorCode = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InternalServerException":
    case "com.amazonaws.athena#InternalServerException":
      response = {
        ...(await deserializeAws_json1_1InternalServerExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InvalidRequestException":
    case "com.amazonaws.athena#InvalidRequestException":
      response = {
        ...(await deserializeAws_json1_1InvalidRequestExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "MetadataException":
    case "com.amazonaws.athena#MetadataException":
      response = {
        ...(await deserializeAws_json1_1MetadataExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    default:
      const parsedBody = parsedOutput.body;
      errorCode = parsedBody.code || parsedBody.Code || errorCode;
      response = {
        ...parsedBody,
        name: `${errorCode}`,
        message: parsedBody.message || parsedBody.Message || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output),
      };
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
};
const deserializeAws_json1_1GetDataCatalogCommand = async (output, context) => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_1GetDataCatalogCommandError(output, context);
  }
  const data = await parseBody(output.body, context);
  let contents = {};
  contents = deserializeAws_json1_1GetDataCatalogOutput(data, context);
  const response = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};
exports.deserializeAws_json1_1GetDataCatalogCommand = deserializeAws_json1_1GetDataCatalogCommand;
const deserializeAws_json1_1GetDataCatalogCommandError = async (output, context) => {
  const parsedOutput = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response;
  let errorCode = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InternalServerException":
    case "com.amazonaws.athena#InternalServerException":
      response = {
        ...(await deserializeAws_json1_1InternalServerExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InvalidRequestException":
    case "com.amazonaws.athena#InvalidRequestException":
      response = {
        ...(await deserializeAws_json1_1InvalidRequestExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    default:
      const parsedBody = parsedOutput.body;
      errorCode = parsedBody.code || parsedBody.Code || errorCode;
      response = {
        ...parsedBody,
        name: `${errorCode}`,
        message: parsedBody.message || parsedBody.Message || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output),
      };
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
};
const deserializeAws_json1_1GetNamedQueryCommand = async (output, context) => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_1GetNamedQueryCommandError(output, context);
  }
  const data = await parseBody(output.body, context);
  let contents = {};
  contents = deserializeAws_json1_1GetNamedQueryOutput(data, context);
  const response = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};
exports.deserializeAws_json1_1GetNamedQueryCommand = deserializeAws_json1_1GetNamedQueryCommand;
const deserializeAws_json1_1GetNamedQueryCommandError = async (output, context) => {
  const parsedOutput = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response;
  let errorCode = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InternalServerException":
    case "com.amazonaws.athena#InternalServerException":
      response = {
        ...(await deserializeAws_json1_1InternalServerExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InvalidRequestException":
    case "com.amazonaws.athena#InvalidRequestException":
      response = {
        ...(await deserializeAws_json1_1InvalidRequestExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    default:
      const parsedBody = parsedOutput.body;
      errorCode = parsedBody.code || parsedBody.Code || errorCode;
      response = {
        ...parsedBody,
        name: `${errorCode}`,
        message: parsedBody.message || parsedBody.Message || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output),
      };
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
};
const deserializeAws_json1_1GetPreparedStatementCommand = async (output, context) => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_1GetPreparedStatementCommandError(output, context);
  }
  const data = await parseBody(output.body, context);
  let contents = {};
  contents = deserializeAws_json1_1GetPreparedStatementOutput(data, context);
  const response = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};
exports.deserializeAws_json1_1GetPreparedStatementCommand = deserializeAws_json1_1GetPreparedStatementCommand;
const deserializeAws_json1_1GetPreparedStatementCommandError = async (output, context) => {
  const parsedOutput = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response;
  let errorCode = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InternalServerException":
    case "com.amazonaws.athena#InternalServerException":
      response = {
        ...(await deserializeAws_json1_1InternalServerExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InvalidRequestException":
    case "com.amazonaws.athena#InvalidRequestException":
      response = {
        ...(await deserializeAws_json1_1InvalidRequestExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ResourceNotFoundException":
    case "com.amazonaws.athena#ResourceNotFoundException":
      response = {
        ...(await deserializeAws_json1_1ResourceNotFoundExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    default:
      const parsedBody = parsedOutput.body;
      errorCode = parsedBody.code || parsedBody.Code || errorCode;
      response = {
        ...parsedBody,
        name: `${errorCode}`,
        message: parsedBody.message || parsedBody.Message || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output),
      };
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
};
const deserializeAws_json1_1GetQueryExecutionCommand = async (output, context) => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_1GetQueryExecutionCommandError(output, context);
  }
  const data = await parseBody(output.body, context);
  let contents = {};
  contents = deserializeAws_json1_1GetQueryExecutionOutput(data, context);
  const response = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};
exports.deserializeAws_json1_1GetQueryExecutionCommand = deserializeAws_json1_1GetQueryExecutionCommand;
const deserializeAws_json1_1GetQueryExecutionCommandError = async (output, context) => {
  const parsedOutput = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response;
  let errorCode = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InternalServerException":
    case "com.amazonaws.athena#InternalServerException":
      response = {
        ...(await deserializeAws_json1_1InternalServerExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InvalidRequestException":
    case "com.amazonaws.athena#InvalidRequestException":
      response = {
        ...(await deserializeAws_json1_1InvalidRequestExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    default:
      const parsedBody = parsedOutput.body;
      errorCode = parsedBody.code || parsedBody.Code || errorCode;
      response = {
        ...parsedBody,
        name: `${errorCode}`,
        message: parsedBody.message || parsedBody.Message || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output),
      };
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
};
const deserializeAws_json1_1GetQueryResultsCommand = async (output, context) => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_1GetQueryResultsCommandError(output, context);
  }
  const data = await parseBody(output.body, context);
  let contents = {};
  contents = deserializeAws_json1_1GetQueryResultsOutput(data, context);
  const response = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};
exports.deserializeAws_json1_1GetQueryResultsCommand = deserializeAws_json1_1GetQueryResultsCommand;
const deserializeAws_json1_1GetQueryResultsCommandError = async (output, context) => {
  const parsedOutput = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response;
  let errorCode = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InternalServerException":
    case "com.amazonaws.athena#InternalServerException":
      response = {
        ...(await deserializeAws_json1_1InternalServerExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InvalidRequestException":
    case "com.amazonaws.athena#InvalidRequestException":
      response = {
        ...(await deserializeAws_json1_1InvalidRequestExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    default:
      const parsedBody = parsedOutput.body;
      errorCode = parsedBody.code || parsedBody.Code || errorCode;
      response = {
        ...parsedBody,
        name: `${errorCode}`,
        message: parsedBody.message || parsedBody.Message || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output),
      };
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
};
const deserializeAws_json1_1GetTableMetadataCommand = async (output, context) => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_1GetTableMetadataCommandError(output, context);
  }
  const data = await parseBody(output.body, context);
  let contents = {};
  contents = deserializeAws_json1_1GetTableMetadataOutput(data, context);
  const response = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};
exports.deserializeAws_json1_1GetTableMetadataCommand = deserializeAws_json1_1GetTableMetadataCommand;
const deserializeAws_json1_1GetTableMetadataCommandError = async (output, context) => {
  const parsedOutput = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response;
  let errorCode = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InternalServerException":
    case "com.amazonaws.athena#InternalServerException":
      response = {
        ...(await deserializeAws_json1_1InternalServerExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InvalidRequestException":
    case "com.amazonaws.athena#InvalidRequestException":
      response = {
        ...(await deserializeAws_json1_1InvalidRequestExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "MetadataException":
    case "com.amazonaws.athena#MetadataException":
      response = {
        ...(await deserializeAws_json1_1MetadataExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    default:
      const parsedBody = parsedOutput.body;
      errorCode = parsedBody.code || parsedBody.Code || errorCode;
      response = {
        ...parsedBody,
        name: `${errorCode}`,
        message: parsedBody.message || parsedBody.Message || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output),
      };
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
};
const deserializeAws_json1_1GetWorkGroupCommand = async (output, context) => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_1GetWorkGroupCommandError(output, context);
  }
  const data = await parseBody(output.body, context);
  let contents = {};
  contents = deserializeAws_json1_1GetWorkGroupOutput(data, context);
  const response = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};
exports.deserializeAws_json1_1GetWorkGroupCommand = deserializeAws_json1_1GetWorkGroupCommand;
const deserializeAws_json1_1GetWorkGroupCommandError = async (output, context) => {
  const parsedOutput = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response;
  let errorCode = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InternalServerException":
    case "com.amazonaws.athena#InternalServerException":
      response = {
        ...(await deserializeAws_json1_1InternalServerExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InvalidRequestException":
    case "com.amazonaws.athena#InvalidRequestException":
      response = {
        ...(await deserializeAws_json1_1InvalidRequestExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    default:
      const parsedBody = parsedOutput.body;
      errorCode = parsedBody.code || parsedBody.Code || errorCode;
      response = {
        ...parsedBody,
        name: `${errorCode}`,
        message: parsedBody.message || parsedBody.Message || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output),
      };
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
};
const deserializeAws_json1_1ListDatabasesCommand = async (output, context) => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_1ListDatabasesCommandError(output, context);
  }
  const data = await parseBody(output.body, context);
  let contents = {};
  contents = deserializeAws_json1_1ListDatabasesOutput(data, context);
  const response = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};
exports.deserializeAws_json1_1ListDatabasesCommand = deserializeAws_json1_1ListDatabasesCommand;
const deserializeAws_json1_1ListDatabasesCommandError = async (output, context) => {
  const parsedOutput = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response;
  let errorCode = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InternalServerException":
    case "com.amazonaws.athena#InternalServerException":
      response = {
        ...(await deserializeAws_json1_1InternalServerExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InvalidRequestException":
    case "com.amazonaws.athena#InvalidRequestException":
      response = {
        ...(await deserializeAws_json1_1InvalidRequestExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "MetadataException":
    case "com.amazonaws.athena#MetadataException":
      response = {
        ...(await deserializeAws_json1_1MetadataExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    default:
      const parsedBody = parsedOutput.body;
      errorCode = parsedBody.code || parsedBody.Code || errorCode;
      response = {
        ...parsedBody,
        name: `${errorCode}`,
        message: parsedBody.message || parsedBody.Message || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output),
      };
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
};
const deserializeAws_json1_1ListDataCatalogsCommand = async (output, context) => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_1ListDataCatalogsCommandError(output, context);
  }
  const data = await parseBody(output.body, context);
  let contents = {};
  contents = deserializeAws_json1_1ListDataCatalogsOutput(data, context);
  const response = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};
exports.deserializeAws_json1_1ListDataCatalogsCommand = deserializeAws_json1_1ListDataCatalogsCommand;
const deserializeAws_json1_1ListDataCatalogsCommandError = async (output, context) => {
  const parsedOutput = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response;
  let errorCode = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InternalServerException":
    case "com.amazonaws.athena#InternalServerException":
      response = {
        ...(await deserializeAws_json1_1InternalServerExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InvalidRequestException":
    case "com.amazonaws.athena#InvalidRequestException":
      response = {
        ...(await deserializeAws_json1_1InvalidRequestExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    default:
      const parsedBody = parsedOutput.body;
      errorCode = parsedBody.code || parsedBody.Code || errorCode;
      response = {
        ...parsedBody,
        name: `${errorCode}`,
        message: parsedBody.message || parsedBody.Message || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output),
      };
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
};
const deserializeAws_json1_1ListEngineVersionsCommand = async (output, context) => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_1ListEngineVersionsCommandError(output, context);
  }
  const data = await parseBody(output.body, context);
  let contents = {};
  contents = deserializeAws_json1_1ListEngineVersionsOutput(data, context);
  const response = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};
exports.deserializeAws_json1_1ListEngineVersionsCommand = deserializeAws_json1_1ListEngineVersionsCommand;
const deserializeAws_json1_1ListEngineVersionsCommandError = async (output, context) => {
  const parsedOutput = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response;
  let errorCode = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InternalServerException":
    case "com.amazonaws.athena#InternalServerException":
      response = {
        ...(await deserializeAws_json1_1InternalServerExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InvalidRequestException":
    case "com.amazonaws.athena#InvalidRequestException":
      response = {
        ...(await deserializeAws_json1_1InvalidRequestExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    default:
      const parsedBody = parsedOutput.body;
      errorCode = parsedBody.code || parsedBody.Code || errorCode;
      response = {
        ...parsedBody,
        name: `${errorCode}`,
        message: parsedBody.message || parsedBody.Message || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output),
      };
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
};
const deserializeAws_json1_1ListNamedQueriesCommand = async (output, context) => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_1ListNamedQueriesCommandError(output, context);
  }
  const data = await parseBody(output.body, context);
  let contents = {};
  contents = deserializeAws_json1_1ListNamedQueriesOutput(data, context);
  const response = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};
exports.deserializeAws_json1_1ListNamedQueriesCommand = deserializeAws_json1_1ListNamedQueriesCommand;
const deserializeAws_json1_1ListNamedQueriesCommandError = async (output, context) => {
  const parsedOutput = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response;
  let errorCode = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InternalServerException":
    case "com.amazonaws.athena#InternalServerException":
      response = {
        ...(await deserializeAws_json1_1InternalServerExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InvalidRequestException":
    case "com.amazonaws.athena#InvalidRequestException":
      response = {
        ...(await deserializeAws_json1_1InvalidRequestExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    default:
      const parsedBody = parsedOutput.body;
      errorCode = parsedBody.code || parsedBody.Code || errorCode;
      response = {
        ...parsedBody,
        name: `${errorCode}`,
        message: parsedBody.message || parsedBody.Message || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output),
      };
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
};
const deserializeAws_json1_1ListPreparedStatementsCommand = async (output, context) => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_1ListPreparedStatementsCommandError(output, context);
  }
  const data = await parseBody(output.body, context);
  let contents = {};
  contents = deserializeAws_json1_1ListPreparedStatementsOutput(data, context);
  const response = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};
exports.deserializeAws_json1_1ListPreparedStatementsCommand = deserializeAws_json1_1ListPreparedStatementsCommand;
const deserializeAws_json1_1ListPreparedStatementsCommandError = async (output, context) => {
  const parsedOutput = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response;
  let errorCode = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InternalServerException":
    case "com.amazonaws.athena#InternalServerException":
      response = {
        ...(await deserializeAws_json1_1InternalServerExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InvalidRequestException":
    case "com.amazonaws.athena#InvalidRequestException":
      response = {
        ...(await deserializeAws_json1_1InvalidRequestExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    default:
      const parsedBody = parsedOutput.body;
      errorCode = parsedBody.code || parsedBody.Code || errorCode;
      response = {
        ...parsedBody,
        name: `${errorCode}`,
        message: parsedBody.message || parsedBody.Message || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output),
      };
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
};
const deserializeAws_json1_1ListQueryExecutionsCommand = async (output, context) => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_1ListQueryExecutionsCommandError(output, context);
  }
  const data = await parseBody(output.body, context);
  let contents = {};
  contents = deserializeAws_json1_1ListQueryExecutionsOutput(data, context);
  const response = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};
exports.deserializeAws_json1_1ListQueryExecutionsCommand = deserializeAws_json1_1ListQueryExecutionsCommand;
const deserializeAws_json1_1ListQueryExecutionsCommandError = async (output, context) => {
  const parsedOutput = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response;
  let errorCode = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InternalServerException":
    case "com.amazonaws.athena#InternalServerException":
      response = {
        ...(await deserializeAws_json1_1InternalServerExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InvalidRequestException":
    case "com.amazonaws.athena#InvalidRequestException":
      response = {
        ...(await deserializeAws_json1_1InvalidRequestExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    default:
      const parsedBody = parsedOutput.body;
      errorCode = parsedBody.code || parsedBody.Code || errorCode;
      response = {
        ...parsedBody,
        name: `${errorCode}`,
        message: parsedBody.message || parsedBody.Message || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output),
      };
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
};
const deserializeAws_json1_1ListTableMetadataCommand = async (output, context) => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_1ListTableMetadataCommandError(output, context);
  }
  const data = await parseBody(output.body, context);
  let contents = {};
  contents = deserializeAws_json1_1ListTableMetadataOutput(data, context);
  const response = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};
exports.deserializeAws_json1_1ListTableMetadataCommand = deserializeAws_json1_1ListTableMetadataCommand;
const deserializeAws_json1_1ListTableMetadataCommandError = async (output, context) => {
  const parsedOutput = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response;
  let errorCode = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InternalServerException":
    case "com.amazonaws.athena#InternalServerException":
      response = {
        ...(await deserializeAws_json1_1InternalServerExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InvalidRequestException":
    case "com.amazonaws.athena#InvalidRequestException":
      response = {
        ...(await deserializeAws_json1_1InvalidRequestExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "MetadataException":
    case "com.amazonaws.athena#MetadataException":
      response = {
        ...(await deserializeAws_json1_1MetadataExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    default:
      const parsedBody = parsedOutput.body;
      errorCode = parsedBody.code || parsedBody.Code || errorCode;
      response = {
        ...parsedBody,
        name: `${errorCode}`,
        message: parsedBody.message || parsedBody.Message || errorCode,
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
  contents = deserializeAws_json1_1ListTagsForResourceOutput(data, context);
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
    case "InternalServerException":
    case "com.amazonaws.athena#InternalServerException":
      response = {
        ...(await deserializeAws_json1_1InternalServerExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InvalidRequestException":
    case "com.amazonaws.athena#InvalidRequestException":
      response = {
        ...(await deserializeAws_json1_1InvalidRequestExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ResourceNotFoundException":
    case "com.amazonaws.athena#ResourceNotFoundException":
      response = {
        ...(await deserializeAws_json1_1ResourceNotFoundExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    default:
      const parsedBody = parsedOutput.body;
      errorCode = parsedBody.code || parsedBody.Code || errorCode;
      response = {
        ...parsedBody,
        name: `${errorCode}`,
        message: parsedBody.message || parsedBody.Message || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output),
      };
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
};
const deserializeAws_json1_1ListWorkGroupsCommand = async (output, context) => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_1ListWorkGroupsCommandError(output, context);
  }
  const data = await parseBody(output.body, context);
  let contents = {};
  contents = deserializeAws_json1_1ListWorkGroupsOutput(data, context);
  const response = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};
exports.deserializeAws_json1_1ListWorkGroupsCommand = deserializeAws_json1_1ListWorkGroupsCommand;
const deserializeAws_json1_1ListWorkGroupsCommandError = async (output, context) => {
  const parsedOutput = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response;
  let errorCode = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InternalServerException":
    case "com.amazonaws.athena#InternalServerException":
      response = {
        ...(await deserializeAws_json1_1InternalServerExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InvalidRequestException":
    case "com.amazonaws.athena#InvalidRequestException":
      response = {
        ...(await deserializeAws_json1_1InvalidRequestExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    default:
      const parsedBody = parsedOutput.body;
      errorCode = parsedBody.code || parsedBody.Code || errorCode;
      response = {
        ...parsedBody,
        name: `${errorCode}`,
        message: parsedBody.message || parsedBody.Message || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output),
      };
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
};
const deserializeAws_json1_1StartQueryExecutionCommand = async (output, context) => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_1StartQueryExecutionCommandError(output, context);
  }
  const data = await parseBody(output.body, context);
  let contents = {};
  contents = deserializeAws_json1_1StartQueryExecutionOutput(data, context);
  const response = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};
exports.deserializeAws_json1_1StartQueryExecutionCommand = deserializeAws_json1_1StartQueryExecutionCommand;
const deserializeAws_json1_1StartQueryExecutionCommandError = async (output, context) => {
  const parsedOutput = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response;
  let errorCode = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InternalServerException":
    case "com.amazonaws.athena#InternalServerException":
      response = {
        ...(await deserializeAws_json1_1InternalServerExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InvalidRequestException":
    case "com.amazonaws.athena#InvalidRequestException":
      response = {
        ...(await deserializeAws_json1_1InvalidRequestExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "TooManyRequestsException":
    case "com.amazonaws.athena#TooManyRequestsException":
      response = {
        ...(await deserializeAws_json1_1TooManyRequestsExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    default:
      const parsedBody = parsedOutput.body;
      errorCode = parsedBody.code || parsedBody.Code || errorCode;
      response = {
        ...parsedBody,
        name: `${errorCode}`,
        message: parsedBody.message || parsedBody.Message || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output),
      };
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
};
const deserializeAws_json1_1StopQueryExecutionCommand = async (output, context) => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_1StopQueryExecutionCommandError(output, context);
  }
  const data = await parseBody(output.body, context);
  let contents = {};
  contents = deserializeAws_json1_1StopQueryExecutionOutput(data, context);
  const response = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};
exports.deserializeAws_json1_1StopQueryExecutionCommand = deserializeAws_json1_1StopQueryExecutionCommand;
const deserializeAws_json1_1StopQueryExecutionCommandError = async (output, context) => {
  const parsedOutput = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response;
  let errorCode = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InternalServerException":
    case "com.amazonaws.athena#InternalServerException":
      response = {
        ...(await deserializeAws_json1_1InternalServerExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InvalidRequestException":
    case "com.amazonaws.athena#InvalidRequestException":
      response = {
        ...(await deserializeAws_json1_1InvalidRequestExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    default:
      const parsedBody = parsedOutput.body;
      errorCode = parsedBody.code || parsedBody.Code || errorCode;
      response = {
        ...parsedBody,
        name: `${errorCode}`,
        message: parsedBody.message || parsedBody.Message || errorCode,
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
  contents = deserializeAws_json1_1TagResourceOutput(data, context);
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
    case "InternalServerException":
    case "com.amazonaws.athena#InternalServerException":
      response = {
        ...(await deserializeAws_json1_1InternalServerExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InvalidRequestException":
    case "com.amazonaws.athena#InvalidRequestException":
      response = {
        ...(await deserializeAws_json1_1InvalidRequestExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ResourceNotFoundException":
    case "com.amazonaws.athena#ResourceNotFoundException":
      response = {
        ...(await deserializeAws_json1_1ResourceNotFoundExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    default:
      const parsedBody = parsedOutput.body;
      errorCode = parsedBody.code || parsedBody.Code || errorCode;
      response = {
        ...parsedBody,
        name: `${errorCode}`,
        message: parsedBody.message || parsedBody.Message || errorCode,
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
  contents = deserializeAws_json1_1UntagResourceOutput(data, context);
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
    case "InternalServerException":
    case "com.amazonaws.athena#InternalServerException":
      response = {
        ...(await deserializeAws_json1_1InternalServerExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InvalidRequestException":
    case "com.amazonaws.athena#InvalidRequestException":
      response = {
        ...(await deserializeAws_json1_1InvalidRequestExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ResourceNotFoundException":
    case "com.amazonaws.athena#ResourceNotFoundException":
      response = {
        ...(await deserializeAws_json1_1ResourceNotFoundExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    default:
      const parsedBody = parsedOutput.body;
      errorCode = parsedBody.code || parsedBody.Code || errorCode;
      response = {
        ...parsedBody,
        name: `${errorCode}`,
        message: parsedBody.message || parsedBody.Message || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output),
      };
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
};
const deserializeAws_json1_1UpdateDataCatalogCommand = async (output, context) => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_1UpdateDataCatalogCommandError(output, context);
  }
  const data = await parseBody(output.body, context);
  let contents = {};
  contents = deserializeAws_json1_1UpdateDataCatalogOutput(data, context);
  const response = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};
exports.deserializeAws_json1_1UpdateDataCatalogCommand = deserializeAws_json1_1UpdateDataCatalogCommand;
const deserializeAws_json1_1UpdateDataCatalogCommandError = async (output, context) => {
  const parsedOutput = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response;
  let errorCode = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InternalServerException":
    case "com.amazonaws.athena#InternalServerException":
      response = {
        ...(await deserializeAws_json1_1InternalServerExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InvalidRequestException":
    case "com.amazonaws.athena#InvalidRequestException":
      response = {
        ...(await deserializeAws_json1_1InvalidRequestExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    default:
      const parsedBody = parsedOutput.body;
      errorCode = parsedBody.code || parsedBody.Code || errorCode;
      response = {
        ...parsedBody,
        name: `${errorCode}`,
        message: parsedBody.message || parsedBody.Message || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output),
      };
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
};
const deserializeAws_json1_1UpdatePreparedStatementCommand = async (output, context) => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_1UpdatePreparedStatementCommandError(output, context);
  }
  const data = await parseBody(output.body, context);
  let contents = {};
  contents = deserializeAws_json1_1UpdatePreparedStatementOutput(data, context);
  const response = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};
exports.deserializeAws_json1_1UpdatePreparedStatementCommand = deserializeAws_json1_1UpdatePreparedStatementCommand;
const deserializeAws_json1_1UpdatePreparedStatementCommandError = async (output, context) => {
  const parsedOutput = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response;
  let errorCode = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InternalServerException":
    case "com.amazonaws.athena#InternalServerException":
      response = {
        ...(await deserializeAws_json1_1InternalServerExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InvalidRequestException":
    case "com.amazonaws.athena#InvalidRequestException":
      response = {
        ...(await deserializeAws_json1_1InvalidRequestExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ResourceNotFoundException":
    case "com.amazonaws.athena#ResourceNotFoundException":
      response = {
        ...(await deserializeAws_json1_1ResourceNotFoundExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    default:
      const parsedBody = parsedOutput.body;
      errorCode = parsedBody.code || parsedBody.Code || errorCode;
      response = {
        ...parsedBody,
        name: `${errorCode}`,
        message: parsedBody.message || parsedBody.Message || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output),
      };
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
};
const deserializeAws_json1_1UpdateWorkGroupCommand = async (output, context) => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_1UpdateWorkGroupCommandError(output, context);
  }
  const data = await parseBody(output.body, context);
  let contents = {};
  contents = deserializeAws_json1_1UpdateWorkGroupOutput(data, context);
  const response = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};
exports.deserializeAws_json1_1UpdateWorkGroupCommand = deserializeAws_json1_1UpdateWorkGroupCommand;
const deserializeAws_json1_1UpdateWorkGroupCommandError = async (output, context) => {
  const parsedOutput = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response;
  let errorCode = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InternalServerException":
    case "com.amazonaws.athena#InternalServerException":
      response = {
        ...(await deserializeAws_json1_1InternalServerExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InvalidRequestException":
    case "com.amazonaws.athena#InvalidRequestException":
      response = {
        ...(await deserializeAws_json1_1InvalidRequestExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    default:
      const parsedBody = parsedOutput.body;
      errorCode = parsedBody.code || parsedBody.Code || errorCode;
      response = {
        ...parsedBody,
        name: `${errorCode}`,
        message: parsedBody.message || parsedBody.Message || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output),
      };
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
};
const deserializeAws_json1_1InternalServerExceptionResponse = async (parsedOutput, context) => {
  const body = parsedOutput.body;
  const deserialized = deserializeAws_json1_1InternalServerException(body, context);
  const contents = {
    name: "InternalServerException",
    $fault: "server",
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  };
  return contents;
};
const deserializeAws_json1_1InvalidRequestExceptionResponse = async (parsedOutput, context) => {
  const body = parsedOutput.body;
  const deserialized = deserializeAws_json1_1InvalidRequestException(body, context);
  const contents = {
    name: "InvalidRequestException",
    $fault: "client",
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  };
  return contents;
};
const deserializeAws_json1_1MetadataExceptionResponse = async (parsedOutput, context) => {
  const body = parsedOutput.body;
  const deserialized = deserializeAws_json1_1MetadataException(body, context);
  const contents = {
    name: "MetadataException",
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
const deserializeAws_json1_1TooManyRequestsExceptionResponse = async (parsedOutput, context) => {
  const body = parsedOutput.body;
  const deserialized = deserializeAws_json1_1TooManyRequestsException(body, context);
  const contents = {
    name: "TooManyRequestsException",
    $fault: "client",
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  };
  return contents;
};
const serializeAws_json1_1BatchGetNamedQueryInput = (input, context) => {
  return {
    ...(input.NamedQueryIds !== undefined &&
      input.NamedQueryIds !== null && {
        NamedQueryIds: serializeAws_json1_1NamedQueryIdList(input.NamedQueryIds, context),
      }),
  };
};
const serializeAws_json1_1BatchGetQueryExecutionInput = (input, context) => {
  return {
    ...(input.QueryExecutionIds !== undefined &&
      input.QueryExecutionIds !== null && {
        QueryExecutionIds: serializeAws_json1_1QueryExecutionIdList(input.QueryExecutionIds, context),
      }),
  };
};
const serializeAws_json1_1CreateDataCatalogInput = (input, context) => {
  return {
    ...(input.Description !== undefined && input.Description !== null && { Description: input.Description }),
    ...(input.Name !== undefined && input.Name !== null && { Name: input.Name }),
    ...(input.Parameters !== undefined &&
      input.Parameters !== null && { Parameters: serializeAws_json1_1ParametersMap(input.Parameters, context) }),
    ...(input.Tags !== undefined && input.Tags !== null && { Tags: serializeAws_json1_1TagList(input.Tags, context) }),
    ...(input.Type !== undefined && input.Type !== null && { Type: input.Type }),
  };
};
const serializeAws_json1_1CreateNamedQueryInput = (input, context) => {
  var _a;
  return {
    ClientRequestToken: (_a = input.ClientRequestToken) !== null && _a !== void 0 ? _a : uuid_1.v4(),
    ...(input.Database !== undefined && input.Database !== null && { Database: input.Database }),
    ...(input.Description !== undefined && input.Description !== null && { Description: input.Description }),
    ...(input.Name !== undefined && input.Name !== null && { Name: input.Name }),
    ...(input.QueryString !== undefined && input.QueryString !== null && { QueryString: input.QueryString }),
    ...(input.WorkGroup !== undefined && input.WorkGroup !== null && { WorkGroup: input.WorkGroup }),
  };
};
const serializeAws_json1_1CreatePreparedStatementInput = (input, context) => {
  return {
    ...(input.Description !== undefined && input.Description !== null && { Description: input.Description }),
    ...(input.QueryStatement !== undefined &&
      input.QueryStatement !== null && { QueryStatement: input.QueryStatement }),
    ...(input.StatementName !== undefined && input.StatementName !== null && { StatementName: input.StatementName }),
    ...(input.WorkGroup !== undefined && input.WorkGroup !== null && { WorkGroup: input.WorkGroup }),
  };
};
const serializeAws_json1_1CreateWorkGroupInput = (input, context) => {
  return {
    ...(input.Configuration !== undefined &&
      input.Configuration !== null && {
        Configuration: serializeAws_json1_1WorkGroupConfiguration(input.Configuration, context),
      }),
    ...(input.Description !== undefined && input.Description !== null && { Description: input.Description }),
    ...(input.Name !== undefined && input.Name !== null && { Name: input.Name }),
    ...(input.Tags !== undefined && input.Tags !== null && { Tags: serializeAws_json1_1TagList(input.Tags, context) }),
  };
};
const serializeAws_json1_1DeleteDataCatalogInput = (input, context) => {
  return {
    ...(input.Name !== undefined && input.Name !== null && { Name: input.Name }),
  };
};
const serializeAws_json1_1DeleteNamedQueryInput = (input, context) => {
  var _a;
  return {
    NamedQueryId: (_a = input.NamedQueryId) !== null && _a !== void 0 ? _a : uuid_1.v4(),
  };
};
const serializeAws_json1_1DeletePreparedStatementInput = (input, context) => {
  return {
    ...(input.StatementName !== undefined && input.StatementName !== null && { StatementName: input.StatementName }),
    ...(input.WorkGroup !== undefined && input.WorkGroup !== null && { WorkGroup: input.WorkGroup }),
  };
};
const serializeAws_json1_1DeleteWorkGroupInput = (input, context) => {
  return {
    ...(input.RecursiveDeleteOption !== undefined &&
      input.RecursiveDeleteOption !== null && { RecursiveDeleteOption: input.RecursiveDeleteOption }),
    ...(input.WorkGroup !== undefined && input.WorkGroup !== null && { WorkGroup: input.WorkGroup }),
  };
};
const serializeAws_json1_1EncryptionConfiguration = (input, context) => {
  return {
    ...(input.EncryptionOption !== undefined &&
      input.EncryptionOption !== null && { EncryptionOption: input.EncryptionOption }),
    ...(input.KmsKey !== undefined && input.KmsKey !== null && { KmsKey: input.KmsKey }),
  };
};
const serializeAws_json1_1EngineVersion = (input, context) => {
  return {
    ...(input.EffectiveEngineVersion !== undefined &&
      input.EffectiveEngineVersion !== null && { EffectiveEngineVersion: input.EffectiveEngineVersion }),
    ...(input.SelectedEngineVersion !== undefined &&
      input.SelectedEngineVersion !== null && { SelectedEngineVersion: input.SelectedEngineVersion }),
  };
};
const serializeAws_json1_1GetDatabaseInput = (input, context) => {
  return {
    ...(input.CatalogName !== undefined && input.CatalogName !== null && { CatalogName: input.CatalogName }),
    ...(input.DatabaseName !== undefined && input.DatabaseName !== null && { DatabaseName: input.DatabaseName }),
  };
};
const serializeAws_json1_1GetDataCatalogInput = (input, context) => {
  return {
    ...(input.Name !== undefined && input.Name !== null && { Name: input.Name }),
  };
};
const serializeAws_json1_1GetNamedQueryInput = (input, context) => {
  return {
    ...(input.NamedQueryId !== undefined && input.NamedQueryId !== null && { NamedQueryId: input.NamedQueryId }),
  };
};
const serializeAws_json1_1GetPreparedStatementInput = (input, context) => {
  return {
    ...(input.StatementName !== undefined && input.StatementName !== null && { StatementName: input.StatementName }),
    ...(input.WorkGroup !== undefined && input.WorkGroup !== null && { WorkGroup: input.WorkGroup }),
  };
};
const serializeAws_json1_1GetQueryExecutionInput = (input, context) => {
  return {
    ...(input.QueryExecutionId !== undefined &&
      input.QueryExecutionId !== null && { QueryExecutionId: input.QueryExecutionId }),
  };
};
const serializeAws_json1_1GetQueryResultsInput = (input, context) => {
  return {
    ...(input.MaxResults !== undefined && input.MaxResults !== null && { MaxResults: input.MaxResults }),
    ...(input.NextToken !== undefined && input.NextToken !== null && { NextToken: input.NextToken }),
    ...(input.QueryExecutionId !== undefined &&
      input.QueryExecutionId !== null && { QueryExecutionId: input.QueryExecutionId }),
  };
};
const serializeAws_json1_1GetTableMetadataInput = (input, context) => {
  return {
    ...(input.CatalogName !== undefined && input.CatalogName !== null && { CatalogName: input.CatalogName }),
    ...(input.DatabaseName !== undefined && input.DatabaseName !== null && { DatabaseName: input.DatabaseName }),
    ...(input.TableName !== undefined && input.TableName !== null && { TableName: input.TableName }),
  };
};
const serializeAws_json1_1GetWorkGroupInput = (input, context) => {
  return {
    ...(input.WorkGroup !== undefined && input.WorkGroup !== null && { WorkGroup: input.WorkGroup }),
  };
};
const serializeAws_json1_1ListDatabasesInput = (input, context) => {
  return {
    ...(input.CatalogName !== undefined && input.CatalogName !== null && { CatalogName: input.CatalogName }),
    ...(input.MaxResults !== undefined && input.MaxResults !== null && { MaxResults: input.MaxResults }),
    ...(input.NextToken !== undefined && input.NextToken !== null && { NextToken: input.NextToken }),
  };
};
const serializeAws_json1_1ListDataCatalogsInput = (input, context) => {
  return {
    ...(input.MaxResults !== undefined && input.MaxResults !== null && { MaxResults: input.MaxResults }),
    ...(input.NextToken !== undefined && input.NextToken !== null && { NextToken: input.NextToken }),
  };
};
const serializeAws_json1_1ListEngineVersionsInput = (input, context) => {
  return {
    ...(input.MaxResults !== undefined && input.MaxResults !== null && { MaxResults: input.MaxResults }),
    ...(input.NextToken !== undefined && input.NextToken !== null && { NextToken: input.NextToken }),
  };
};
const serializeAws_json1_1ListNamedQueriesInput = (input, context) => {
  return {
    ...(input.MaxResults !== undefined && input.MaxResults !== null && { MaxResults: input.MaxResults }),
    ...(input.NextToken !== undefined && input.NextToken !== null && { NextToken: input.NextToken }),
    ...(input.WorkGroup !== undefined && input.WorkGroup !== null && { WorkGroup: input.WorkGroup }),
  };
};
const serializeAws_json1_1ListPreparedStatementsInput = (input, context) => {
  return {
    ...(input.MaxResults !== undefined && input.MaxResults !== null && { MaxResults: input.MaxResults }),
    ...(input.NextToken !== undefined && input.NextToken !== null && { NextToken: input.NextToken }),
    ...(input.WorkGroup !== undefined && input.WorkGroup !== null && { WorkGroup: input.WorkGroup }),
  };
};
const serializeAws_json1_1ListQueryExecutionsInput = (input, context) => {
  return {
    ...(input.MaxResults !== undefined && input.MaxResults !== null && { MaxResults: input.MaxResults }),
    ...(input.NextToken !== undefined && input.NextToken !== null && { NextToken: input.NextToken }),
    ...(input.WorkGroup !== undefined && input.WorkGroup !== null && { WorkGroup: input.WorkGroup }),
  };
};
const serializeAws_json1_1ListTableMetadataInput = (input, context) => {
  return {
    ...(input.CatalogName !== undefined && input.CatalogName !== null && { CatalogName: input.CatalogName }),
    ...(input.DatabaseName !== undefined && input.DatabaseName !== null && { DatabaseName: input.DatabaseName }),
    ...(input.Expression !== undefined && input.Expression !== null && { Expression: input.Expression }),
    ...(input.MaxResults !== undefined && input.MaxResults !== null && { MaxResults: input.MaxResults }),
    ...(input.NextToken !== undefined && input.NextToken !== null && { NextToken: input.NextToken }),
  };
};
const serializeAws_json1_1ListTagsForResourceInput = (input, context) => {
  return {
    ...(input.MaxResults !== undefined && input.MaxResults !== null && { MaxResults: input.MaxResults }),
    ...(input.NextToken !== undefined && input.NextToken !== null && { NextToken: input.NextToken }),
    ...(input.ResourceARN !== undefined && input.ResourceARN !== null && { ResourceARN: input.ResourceARN }),
  };
};
const serializeAws_json1_1ListWorkGroupsInput = (input, context) => {
  return {
    ...(input.MaxResults !== undefined && input.MaxResults !== null && { MaxResults: input.MaxResults }),
    ...(input.NextToken !== undefined && input.NextToken !== null && { NextToken: input.NextToken }),
  };
};
const serializeAws_json1_1NamedQueryIdList = (input, context) => {
  return input
    .filter((e) => e != null)
    .map((entry) => {
      if (entry === null) {
        return null;
      }
      return entry;
    });
};
const serializeAws_json1_1ParametersMap = (input, context) => {
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
const serializeAws_json1_1QueryExecutionContext = (input, context) => {
  return {
    ...(input.Catalog !== undefined && input.Catalog !== null && { Catalog: input.Catalog }),
    ...(input.Database !== undefined && input.Database !== null && { Database: input.Database }),
  };
};
const serializeAws_json1_1QueryExecutionIdList = (input, context) => {
  return input
    .filter((e) => e != null)
    .map((entry) => {
      if (entry === null) {
        return null;
      }
      return entry;
    });
};
const serializeAws_json1_1ResultConfiguration = (input, context) => {
  return {
    ...(input.EncryptionConfiguration !== undefined &&
      input.EncryptionConfiguration !== null && {
        EncryptionConfiguration: serializeAws_json1_1EncryptionConfiguration(input.EncryptionConfiguration, context),
      }),
    ...(input.OutputLocation !== undefined &&
      input.OutputLocation !== null && { OutputLocation: input.OutputLocation }),
  };
};
const serializeAws_json1_1ResultConfigurationUpdates = (input, context) => {
  return {
    ...(input.EncryptionConfiguration !== undefined &&
      input.EncryptionConfiguration !== null && {
        EncryptionConfiguration: serializeAws_json1_1EncryptionConfiguration(input.EncryptionConfiguration, context),
      }),
    ...(input.OutputLocation !== undefined &&
      input.OutputLocation !== null && { OutputLocation: input.OutputLocation }),
    ...(input.RemoveEncryptionConfiguration !== undefined &&
      input.RemoveEncryptionConfiguration !== null && {
        RemoveEncryptionConfiguration: input.RemoveEncryptionConfiguration,
      }),
    ...(input.RemoveOutputLocation !== undefined &&
      input.RemoveOutputLocation !== null && { RemoveOutputLocation: input.RemoveOutputLocation }),
  };
};
const serializeAws_json1_1StartQueryExecutionInput = (input, context) => {
  var _a;
  return {
    ClientRequestToken: (_a = input.ClientRequestToken) !== null && _a !== void 0 ? _a : uuid_1.v4(),
    ...(input.QueryExecutionContext !== undefined &&
      input.QueryExecutionContext !== null && {
        QueryExecutionContext: serializeAws_json1_1QueryExecutionContext(input.QueryExecutionContext, context),
      }),
    ...(input.QueryString !== undefined && input.QueryString !== null && { QueryString: input.QueryString }),
    ...(input.ResultConfiguration !== undefined &&
      input.ResultConfiguration !== null && {
        ResultConfiguration: serializeAws_json1_1ResultConfiguration(input.ResultConfiguration, context),
      }),
    ...(input.WorkGroup !== undefined && input.WorkGroup !== null && { WorkGroup: input.WorkGroup }),
  };
};
const serializeAws_json1_1StopQueryExecutionInput = (input, context) => {
  var _a;
  return {
    QueryExecutionId: (_a = input.QueryExecutionId) !== null && _a !== void 0 ? _a : uuid_1.v4(),
  };
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
const serializeAws_json1_1TagResourceInput = (input, context) => {
  return {
    ...(input.ResourceARN !== undefined && input.ResourceARN !== null && { ResourceARN: input.ResourceARN }),
    ...(input.Tags !== undefined && input.Tags !== null && { Tags: serializeAws_json1_1TagList(input.Tags, context) }),
  };
};
const serializeAws_json1_1UntagResourceInput = (input, context) => {
  return {
    ...(input.ResourceARN !== undefined && input.ResourceARN !== null && { ResourceARN: input.ResourceARN }),
    ...(input.TagKeys !== undefined &&
      input.TagKeys !== null && { TagKeys: serializeAws_json1_1TagKeyList(input.TagKeys, context) }),
  };
};
const serializeAws_json1_1UpdateDataCatalogInput = (input, context) => {
  return {
    ...(input.Description !== undefined && input.Description !== null && { Description: input.Description }),
    ...(input.Name !== undefined && input.Name !== null && { Name: input.Name }),
    ...(input.Parameters !== undefined &&
      input.Parameters !== null && { Parameters: serializeAws_json1_1ParametersMap(input.Parameters, context) }),
    ...(input.Type !== undefined && input.Type !== null && { Type: input.Type }),
  };
};
const serializeAws_json1_1UpdatePreparedStatementInput = (input, context) => {
  return {
    ...(input.Description !== undefined && input.Description !== null && { Description: input.Description }),
    ...(input.QueryStatement !== undefined &&
      input.QueryStatement !== null && { QueryStatement: input.QueryStatement }),
    ...(input.StatementName !== undefined && input.StatementName !== null && { StatementName: input.StatementName }),
    ...(input.WorkGroup !== undefined && input.WorkGroup !== null && { WorkGroup: input.WorkGroup }),
  };
};
const serializeAws_json1_1UpdateWorkGroupInput = (input, context) => {
  return {
    ...(input.ConfigurationUpdates !== undefined &&
      input.ConfigurationUpdates !== null && {
        ConfigurationUpdates: serializeAws_json1_1WorkGroupConfigurationUpdates(input.ConfigurationUpdates, context),
      }),
    ...(input.Description !== undefined && input.Description !== null && { Description: input.Description }),
    ...(input.State !== undefined && input.State !== null && { State: input.State }),
    ...(input.WorkGroup !== undefined && input.WorkGroup !== null && { WorkGroup: input.WorkGroup }),
  };
};
const serializeAws_json1_1WorkGroupConfiguration = (input, context) => {
  return {
    ...(input.BytesScannedCutoffPerQuery !== undefined &&
      input.BytesScannedCutoffPerQuery !== null && { BytesScannedCutoffPerQuery: input.BytesScannedCutoffPerQuery }),
    ...(input.EnforceWorkGroupConfiguration !== undefined &&
      input.EnforceWorkGroupConfiguration !== null && {
        EnforceWorkGroupConfiguration: input.EnforceWorkGroupConfiguration,
      }),
    ...(input.EngineVersion !== undefined &&
      input.EngineVersion !== null && {
        EngineVersion: serializeAws_json1_1EngineVersion(input.EngineVersion, context),
      }),
    ...(input.PublishCloudWatchMetricsEnabled !== undefined &&
      input.PublishCloudWatchMetricsEnabled !== null && {
        PublishCloudWatchMetricsEnabled: input.PublishCloudWatchMetricsEnabled,
      }),
    ...(input.RequesterPaysEnabled !== undefined &&
      input.RequesterPaysEnabled !== null && { RequesterPaysEnabled: input.RequesterPaysEnabled }),
    ...(input.ResultConfiguration !== undefined &&
      input.ResultConfiguration !== null && {
        ResultConfiguration: serializeAws_json1_1ResultConfiguration(input.ResultConfiguration, context),
      }),
  };
};
const serializeAws_json1_1WorkGroupConfigurationUpdates = (input, context) => {
  return {
    ...(input.BytesScannedCutoffPerQuery !== undefined &&
      input.BytesScannedCutoffPerQuery !== null && { BytesScannedCutoffPerQuery: input.BytesScannedCutoffPerQuery }),
    ...(input.EnforceWorkGroupConfiguration !== undefined &&
      input.EnforceWorkGroupConfiguration !== null && {
        EnforceWorkGroupConfiguration: input.EnforceWorkGroupConfiguration,
      }),
    ...(input.EngineVersion !== undefined &&
      input.EngineVersion !== null && {
        EngineVersion: serializeAws_json1_1EngineVersion(input.EngineVersion, context),
      }),
    ...(input.PublishCloudWatchMetricsEnabled !== undefined &&
      input.PublishCloudWatchMetricsEnabled !== null && {
        PublishCloudWatchMetricsEnabled: input.PublishCloudWatchMetricsEnabled,
      }),
    ...(input.RemoveBytesScannedCutoffPerQuery !== undefined &&
      input.RemoveBytesScannedCutoffPerQuery !== null && {
        RemoveBytesScannedCutoffPerQuery: input.RemoveBytesScannedCutoffPerQuery,
      }),
    ...(input.RequesterPaysEnabled !== undefined &&
      input.RequesterPaysEnabled !== null && { RequesterPaysEnabled: input.RequesterPaysEnabled }),
    ...(input.ResultConfigurationUpdates !== undefined &&
      input.ResultConfigurationUpdates !== null && {
        ResultConfigurationUpdates: serializeAws_json1_1ResultConfigurationUpdates(
          input.ResultConfigurationUpdates,
          context
        ),
      }),
  };
};
const deserializeAws_json1_1BatchGetNamedQueryOutput = (output, context) => {
  return {
    NamedQueries:
      output.NamedQueries !== undefined && output.NamedQueries !== null
        ? deserializeAws_json1_1NamedQueryList(output.NamedQueries, context)
        : undefined,
    UnprocessedNamedQueryIds:
      output.UnprocessedNamedQueryIds !== undefined && output.UnprocessedNamedQueryIds !== null
        ? deserializeAws_json1_1UnprocessedNamedQueryIdList(output.UnprocessedNamedQueryIds, context)
        : undefined,
  };
};
const deserializeAws_json1_1BatchGetQueryExecutionOutput = (output, context) => {
  return {
    QueryExecutions:
      output.QueryExecutions !== undefined && output.QueryExecutions !== null
        ? deserializeAws_json1_1QueryExecutionList(output.QueryExecutions, context)
        : undefined,
    UnprocessedQueryExecutionIds:
      output.UnprocessedQueryExecutionIds !== undefined && output.UnprocessedQueryExecutionIds !== null
        ? deserializeAws_json1_1UnprocessedQueryExecutionIdList(output.UnprocessedQueryExecutionIds, context)
        : undefined,
  };
};
const deserializeAws_json1_1Column = (output, context) => {
  return {
    Comment: output.Comment !== undefined && output.Comment !== null ? output.Comment : undefined,
    Name: output.Name !== undefined && output.Name !== null ? output.Name : undefined,
    Type: output.Type !== undefined && output.Type !== null ? output.Type : undefined,
  };
};
const deserializeAws_json1_1ColumnInfo = (output, context) => {
  return {
    CaseSensitive:
      output.CaseSensitive !== undefined && output.CaseSensitive !== null ? output.CaseSensitive : undefined,
    CatalogName: output.CatalogName !== undefined && output.CatalogName !== null ? output.CatalogName : undefined,
    Label: output.Label !== undefined && output.Label !== null ? output.Label : undefined,
    Name: output.Name !== undefined && output.Name !== null ? output.Name : undefined,
    Nullable: output.Nullable !== undefined && output.Nullable !== null ? output.Nullable : undefined,
    Precision: output.Precision !== undefined && output.Precision !== null ? output.Precision : undefined,
    Scale: output.Scale !== undefined && output.Scale !== null ? output.Scale : undefined,
    SchemaName: output.SchemaName !== undefined && output.SchemaName !== null ? output.SchemaName : undefined,
    TableName: output.TableName !== undefined && output.TableName !== null ? output.TableName : undefined,
    Type: output.Type !== undefined && output.Type !== null ? output.Type : undefined,
  };
};
const deserializeAws_json1_1ColumnInfoList = (output, context) => {
  return (output || [])
    .filter((e) => e != null)
    .map((entry) => {
      if (entry === null) {
        return null;
      }
      return deserializeAws_json1_1ColumnInfo(entry, context);
    });
};
const deserializeAws_json1_1ColumnList = (output, context) => {
  return (output || [])
    .filter((e) => e != null)
    .map((entry) => {
      if (entry === null) {
        return null;
      }
      return deserializeAws_json1_1Column(entry, context);
    });
};
const deserializeAws_json1_1CreateDataCatalogOutput = (output, context) => {
  return {};
};
const deserializeAws_json1_1CreateNamedQueryOutput = (output, context) => {
  return {
    NamedQueryId: output.NamedQueryId !== undefined && output.NamedQueryId !== null ? output.NamedQueryId : undefined,
  };
};
const deserializeAws_json1_1CreatePreparedStatementOutput = (output, context) => {
  return {};
};
const deserializeAws_json1_1CreateWorkGroupOutput = (output, context) => {
  return {};
};
const deserializeAws_json1_1Database = (output, context) => {
  return {
    Description: output.Description !== undefined && output.Description !== null ? output.Description : undefined,
    Name: output.Name !== undefined && output.Name !== null ? output.Name : undefined,
    Parameters:
      output.Parameters !== undefined && output.Parameters !== null
        ? deserializeAws_json1_1ParametersMap(output.Parameters, context)
        : undefined,
  };
};
const deserializeAws_json1_1DatabaseList = (output, context) => {
  return (output || [])
    .filter((e) => e != null)
    .map((entry) => {
      if (entry === null) {
        return null;
      }
      return deserializeAws_json1_1Database(entry, context);
    });
};
const deserializeAws_json1_1DataCatalog = (output, context) => {
  return {
    Description: output.Description !== undefined && output.Description !== null ? output.Description : undefined,
    Name: output.Name !== undefined && output.Name !== null ? output.Name : undefined,
    Parameters:
      output.Parameters !== undefined && output.Parameters !== null
        ? deserializeAws_json1_1ParametersMap(output.Parameters, context)
        : undefined,
    Type: output.Type !== undefined && output.Type !== null ? output.Type : undefined,
  };
};
const deserializeAws_json1_1DataCatalogSummary = (output, context) => {
  return {
    CatalogName: output.CatalogName !== undefined && output.CatalogName !== null ? output.CatalogName : undefined,
    Type: output.Type !== undefined && output.Type !== null ? output.Type : undefined,
  };
};
const deserializeAws_json1_1DataCatalogSummaryList = (output, context) => {
  return (output || [])
    .filter((e) => e != null)
    .map((entry) => {
      if (entry === null) {
        return null;
      }
      return deserializeAws_json1_1DataCatalogSummary(entry, context);
    });
};
const deserializeAws_json1_1Datum = (output, context) => {
  return {
    VarCharValue: output.VarCharValue !== undefined && output.VarCharValue !== null ? output.VarCharValue : undefined,
  };
};
const deserializeAws_json1_1datumList = (output, context) => {
  return (output || [])
    .filter((e) => e != null)
    .map((entry) => {
      if (entry === null) {
        return null;
      }
      return deserializeAws_json1_1Datum(entry, context);
    });
};
const deserializeAws_json1_1DeleteDataCatalogOutput = (output, context) => {
  return {};
};
const deserializeAws_json1_1DeleteNamedQueryOutput = (output, context) => {
  return {};
};
const deserializeAws_json1_1DeletePreparedStatementOutput = (output, context) => {
  return {};
};
const deserializeAws_json1_1DeleteWorkGroupOutput = (output, context) => {
  return {};
};
const deserializeAws_json1_1EncryptionConfiguration = (output, context) => {
  return {
    EncryptionOption:
      output.EncryptionOption !== undefined && output.EncryptionOption !== null ? output.EncryptionOption : undefined,
    KmsKey: output.KmsKey !== undefined && output.KmsKey !== null ? output.KmsKey : undefined,
  };
};
const deserializeAws_json1_1EngineVersion = (output, context) => {
  return {
    EffectiveEngineVersion:
      output.EffectiveEngineVersion !== undefined && output.EffectiveEngineVersion !== null
        ? output.EffectiveEngineVersion
        : undefined,
    SelectedEngineVersion:
      output.SelectedEngineVersion !== undefined && output.SelectedEngineVersion !== null
        ? output.SelectedEngineVersion
        : undefined,
  };
};
const deserializeAws_json1_1EngineVersionsList = (output, context) => {
  return (output || [])
    .filter((e) => e != null)
    .map((entry) => {
      if (entry === null) {
        return null;
      }
      return deserializeAws_json1_1EngineVersion(entry, context);
    });
};
const deserializeAws_json1_1GetDatabaseOutput = (output, context) => {
  return {
    Database:
      output.Database !== undefined && output.Database !== null
        ? deserializeAws_json1_1Database(output.Database, context)
        : undefined,
  };
};
const deserializeAws_json1_1GetDataCatalogOutput = (output, context) => {
  return {
    DataCatalog:
      output.DataCatalog !== undefined && output.DataCatalog !== null
        ? deserializeAws_json1_1DataCatalog(output.DataCatalog, context)
        : undefined,
  };
};
const deserializeAws_json1_1GetNamedQueryOutput = (output, context) => {
  return {
    NamedQuery:
      output.NamedQuery !== undefined && output.NamedQuery !== null
        ? deserializeAws_json1_1NamedQuery(output.NamedQuery, context)
        : undefined,
  };
};
const deserializeAws_json1_1GetPreparedStatementOutput = (output, context) => {
  return {
    PreparedStatement:
      output.PreparedStatement !== undefined && output.PreparedStatement !== null
        ? deserializeAws_json1_1PreparedStatement(output.PreparedStatement, context)
        : undefined,
  };
};
const deserializeAws_json1_1GetQueryExecutionOutput = (output, context) => {
  return {
    QueryExecution:
      output.QueryExecution !== undefined && output.QueryExecution !== null
        ? deserializeAws_json1_1QueryExecution(output.QueryExecution, context)
        : undefined,
  };
};
const deserializeAws_json1_1GetQueryResultsOutput = (output, context) => {
  return {
    NextToken: output.NextToken !== undefined && output.NextToken !== null ? output.NextToken : undefined,
    ResultSet:
      output.ResultSet !== undefined && output.ResultSet !== null
        ? deserializeAws_json1_1ResultSet(output.ResultSet, context)
        : undefined,
    UpdateCount: output.UpdateCount !== undefined && output.UpdateCount !== null ? output.UpdateCount : undefined,
  };
};
const deserializeAws_json1_1GetTableMetadataOutput = (output, context) => {
  return {
    TableMetadata:
      output.TableMetadata !== undefined && output.TableMetadata !== null
        ? deserializeAws_json1_1TableMetadata(output.TableMetadata, context)
        : undefined,
  };
};
const deserializeAws_json1_1GetWorkGroupOutput = (output, context) => {
  return {
    WorkGroup:
      output.WorkGroup !== undefined && output.WorkGroup !== null
        ? deserializeAws_json1_1WorkGroup(output.WorkGroup, context)
        : undefined,
  };
};
const deserializeAws_json1_1InternalServerException = (output, context) => {
  return {
    Message: output.Message !== undefined && output.Message !== null ? output.Message : undefined,
  };
};
const deserializeAws_json1_1InvalidRequestException = (output, context) => {
  return {
    AthenaErrorCode:
      output.AthenaErrorCode !== undefined && output.AthenaErrorCode !== null ? output.AthenaErrorCode : undefined,
    Message: output.Message !== undefined && output.Message !== null ? output.Message : undefined,
  };
};
const deserializeAws_json1_1ListDatabasesOutput = (output, context) => {
  return {
    DatabaseList:
      output.DatabaseList !== undefined && output.DatabaseList !== null
        ? deserializeAws_json1_1DatabaseList(output.DatabaseList, context)
        : undefined,
    NextToken: output.NextToken !== undefined && output.NextToken !== null ? output.NextToken : undefined,
  };
};
const deserializeAws_json1_1ListDataCatalogsOutput = (output, context) => {
  return {
    DataCatalogsSummary:
      output.DataCatalogsSummary !== undefined && output.DataCatalogsSummary !== null
        ? deserializeAws_json1_1DataCatalogSummaryList(output.DataCatalogsSummary, context)
        : undefined,
    NextToken: output.NextToken !== undefined && output.NextToken !== null ? output.NextToken : undefined,
  };
};
const deserializeAws_json1_1ListEngineVersionsOutput = (output, context) => {
  return {
    EngineVersions:
      output.EngineVersions !== undefined && output.EngineVersions !== null
        ? deserializeAws_json1_1EngineVersionsList(output.EngineVersions, context)
        : undefined,
    NextToken: output.NextToken !== undefined && output.NextToken !== null ? output.NextToken : undefined,
  };
};
const deserializeAws_json1_1ListNamedQueriesOutput = (output, context) => {
  return {
    NamedQueryIds:
      output.NamedQueryIds !== undefined && output.NamedQueryIds !== null
        ? deserializeAws_json1_1NamedQueryIdList(output.NamedQueryIds, context)
        : undefined,
    NextToken: output.NextToken !== undefined && output.NextToken !== null ? output.NextToken : undefined,
  };
};
const deserializeAws_json1_1ListPreparedStatementsOutput = (output, context) => {
  return {
    NextToken: output.NextToken !== undefined && output.NextToken !== null ? output.NextToken : undefined,
    PreparedStatements:
      output.PreparedStatements !== undefined && output.PreparedStatements !== null
        ? deserializeAws_json1_1PreparedStatementsList(output.PreparedStatements, context)
        : undefined,
  };
};
const deserializeAws_json1_1ListQueryExecutionsOutput = (output, context) => {
  return {
    NextToken: output.NextToken !== undefined && output.NextToken !== null ? output.NextToken : undefined,
    QueryExecutionIds:
      output.QueryExecutionIds !== undefined && output.QueryExecutionIds !== null
        ? deserializeAws_json1_1QueryExecutionIdList(output.QueryExecutionIds, context)
        : undefined,
  };
};
const deserializeAws_json1_1ListTableMetadataOutput = (output, context) => {
  return {
    NextToken: output.NextToken !== undefined && output.NextToken !== null ? output.NextToken : undefined,
    TableMetadataList:
      output.TableMetadataList !== undefined && output.TableMetadataList !== null
        ? deserializeAws_json1_1TableMetadataList(output.TableMetadataList, context)
        : undefined,
  };
};
const deserializeAws_json1_1ListTagsForResourceOutput = (output, context) => {
  return {
    NextToken: output.NextToken !== undefined && output.NextToken !== null ? output.NextToken : undefined,
    Tags:
      output.Tags !== undefined && output.Tags !== null
        ? deserializeAws_json1_1TagList(output.Tags, context)
        : undefined,
  };
};
const deserializeAws_json1_1ListWorkGroupsOutput = (output, context) => {
  return {
    NextToken: output.NextToken !== undefined && output.NextToken !== null ? output.NextToken : undefined,
    WorkGroups:
      output.WorkGroups !== undefined && output.WorkGroups !== null
        ? deserializeAws_json1_1WorkGroupsList(output.WorkGroups, context)
        : undefined,
  };
};
const deserializeAws_json1_1MetadataException = (output, context) => {
  return {
    Message: output.Message !== undefined && output.Message !== null ? output.Message : undefined,
  };
};
const deserializeAws_json1_1NamedQuery = (output, context) => {
  return {
    Database: output.Database !== undefined && output.Database !== null ? output.Database : undefined,
    Description: output.Description !== undefined && output.Description !== null ? output.Description : undefined,
    Name: output.Name !== undefined && output.Name !== null ? output.Name : undefined,
    NamedQueryId: output.NamedQueryId !== undefined && output.NamedQueryId !== null ? output.NamedQueryId : undefined,
    QueryString: output.QueryString !== undefined && output.QueryString !== null ? output.QueryString : undefined,
    WorkGroup: output.WorkGroup !== undefined && output.WorkGroup !== null ? output.WorkGroup : undefined,
  };
};
const deserializeAws_json1_1NamedQueryIdList = (output, context) => {
  return (output || [])
    .filter((e) => e != null)
    .map((entry) => {
      if (entry === null) {
        return null;
      }
      return entry;
    });
};
const deserializeAws_json1_1NamedQueryList = (output, context) => {
  return (output || [])
    .filter((e) => e != null)
    .map((entry) => {
      if (entry === null) {
        return null;
      }
      return deserializeAws_json1_1NamedQuery(entry, context);
    });
};
const deserializeAws_json1_1ParametersMap = (output, context) => {
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
const deserializeAws_json1_1PreparedStatement = (output, context) => {
  return {
    Description: output.Description !== undefined && output.Description !== null ? output.Description : undefined,
    LastModifiedTime:
      output.LastModifiedTime !== undefined && output.LastModifiedTime !== null
        ? new Date(Math.round(output.LastModifiedTime * 1000))
        : undefined,
    QueryStatement:
      output.QueryStatement !== undefined && output.QueryStatement !== null ? output.QueryStatement : undefined,
    StatementName:
      output.StatementName !== undefined && output.StatementName !== null ? output.StatementName : undefined,
    WorkGroupName:
      output.WorkGroupName !== undefined && output.WorkGroupName !== null ? output.WorkGroupName : undefined,
  };
};
const deserializeAws_json1_1PreparedStatementsList = (output, context) => {
  return (output || [])
    .filter((e) => e != null)
    .map((entry) => {
      if (entry === null) {
        return null;
      }
      return deserializeAws_json1_1PreparedStatementSummary(entry, context);
    });
};
const deserializeAws_json1_1PreparedStatementSummary = (output, context) => {
  return {
    LastModifiedTime:
      output.LastModifiedTime !== undefined && output.LastModifiedTime !== null
        ? new Date(Math.round(output.LastModifiedTime * 1000))
        : undefined,
    StatementName:
      output.StatementName !== undefined && output.StatementName !== null ? output.StatementName : undefined,
  };
};
const deserializeAws_json1_1QueryExecution = (output, context) => {
  return {
    EngineVersion:
      output.EngineVersion !== undefined && output.EngineVersion !== null
        ? deserializeAws_json1_1EngineVersion(output.EngineVersion, context)
        : undefined,
    Query: output.Query !== undefined && output.Query !== null ? output.Query : undefined,
    QueryExecutionContext:
      output.QueryExecutionContext !== undefined && output.QueryExecutionContext !== null
        ? deserializeAws_json1_1QueryExecutionContext(output.QueryExecutionContext, context)
        : undefined,
    QueryExecutionId:
      output.QueryExecutionId !== undefined && output.QueryExecutionId !== null ? output.QueryExecutionId : undefined,
    ResultConfiguration:
      output.ResultConfiguration !== undefined && output.ResultConfiguration !== null
        ? deserializeAws_json1_1ResultConfiguration(output.ResultConfiguration, context)
        : undefined,
    StatementType:
      output.StatementType !== undefined && output.StatementType !== null ? output.StatementType : undefined,
    Statistics:
      output.Statistics !== undefined && output.Statistics !== null
        ? deserializeAws_json1_1QueryExecutionStatistics(output.Statistics, context)
        : undefined,
    Status:
      output.Status !== undefined && output.Status !== null
        ? deserializeAws_json1_1QueryExecutionStatus(output.Status, context)
        : undefined,
    WorkGroup: output.WorkGroup !== undefined && output.WorkGroup !== null ? output.WorkGroup : undefined,
  };
};
const deserializeAws_json1_1QueryExecutionContext = (output, context) => {
  return {
    Catalog: output.Catalog !== undefined && output.Catalog !== null ? output.Catalog : undefined,
    Database: output.Database !== undefined && output.Database !== null ? output.Database : undefined,
  };
};
const deserializeAws_json1_1QueryExecutionIdList = (output, context) => {
  return (output || [])
    .filter((e) => e != null)
    .map((entry) => {
      if (entry === null) {
        return null;
      }
      return entry;
    });
};
const deserializeAws_json1_1QueryExecutionList = (output, context) => {
  return (output || [])
    .filter((e) => e != null)
    .map((entry) => {
      if (entry === null) {
        return null;
      }
      return deserializeAws_json1_1QueryExecution(entry, context);
    });
};
const deserializeAws_json1_1QueryExecutionStatistics = (output, context) => {
  return {
    DataManifestLocation:
      output.DataManifestLocation !== undefined && output.DataManifestLocation !== null
        ? output.DataManifestLocation
        : undefined,
    DataScannedInBytes:
      output.DataScannedInBytes !== undefined && output.DataScannedInBytes !== null
        ? output.DataScannedInBytes
        : undefined,
    EngineExecutionTimeInMillis:
      output.EngineExecutionTimeInMillis !== undefined && output.EngineExecutionTimeInMillis !== null
        ? output.EngineExecutionTimeInMillis
        : undefined,
    QueryPlanningTimeInMillis:
      output.QueryPlanningTimeInMillis !== undefined && output.QueryPlanningTimeInMillis !== null
        ? output.QueryPlanningTimeInMillis
        : undefined,
    QueryQueueTimeInMillis:
      output.QueryQueueTimeInMillis !== undefined && output.QueryQueueTimeInMillis !== null
        ? output.QueryQueueTimeInMillis
        : undefined,
    ServiceProcessingTimeInMillis:
      output.ServiceProcessingTimeInMillis !== undefined && output.ServiceProcessingTimeInMillis !== null
        ? output.ServiceProcessingTimeInMillis
        : undefined,
    TotalExecutionTimeInMillis:
      output.TotalExecutionTimeInMillis !== undefined && output.TotalExecutionTimeInMillis !== null
        ? output.TotalExecutionTimeInMillis
        : undefined,
  };
};
const deserializeAws_json1_1QueryExecutionStatus = (output, context) => {
  return {
    CompletionDateTime:
      output.CompletionDateTime !== undefined && output.CompletionDateTime !== null
        ? new Date(Math.round(output.CompletionDateTime * 1000))
        : undefined,
    State: output.State !== undefined && output.State !== null ? output.State : undefined,
    StateChangeReason:
      output.StateChangeReason !== undefined && output.StateChangeReason !== null
        ? output.StateChangeReason
        : undefined,
    SubmissionDateTime:
      output.SubmissionDateTime !== undefined && output.SubmissionDateTime !== null
        ? new Date(Math.round(output.SubmissionDateTime * 1000))
        : undefined,
  };
};
const deserializeAws_json1_1ResourceNotFoundException = (output, context) => {
  return {
    Message: output.Message !== undefined && output.Message !== null ? output.Message : undefined,
    ResourceName: output.ResourceName !== undefined && output.ResourceName !== null ? output.ResourceName : undefined,
  };
};
const deserializeAws_json1_1ResultConfiguration = (output, context) => {
  return {
    EncryptionConfiguration:
      output.EncryptionConfiguration !== undefined && output.EncryptionConfiguration !== null
        ? deserializeAws_json1_1EncryptionConfiguration(output.EncryptionConfiguration, context)
        : undefined,
    OutputLocation:
      output.OutputLocation !== undefined && output.OutputLocation !== null ? output.OutputLocation : undefined,
  };
};
const deserializeAws_json1_1ResultSet = (output, context) => {
  return {
    ResultSetMetadata:
      output.ResultSetMetadata !== undefined && output.ResultSetMetadata !== null
        ? deserializeAws_json1_1ResultSetMetadata(output.ResultSetMetadata, context)
        : undefined,
    Rows:
      output.Rows !== undefined && output.Rows !== null
        ? deserializeAws_json1_1RowList(output.Rows, context)
        : undefined,
  };
};
const deserializeAws_json1_1ResultSetMetadata = (output, context) => {
  return {
    ColumnInfo:
      output.ColumnInfo !== undefined && output.ColumnInfo !== null
        ? deserializeAws_json1_1ColumnInfoList(output.ColumnInfo, context)
        : undefined,
  };
};
const deserializeAws_json1_1Row = (output, context) => {
  return {
    Data:
      output.Data !== undefined && output.Data !== null
        ? deserializeAws_json1_1datumList(output.Data, context)
        : undefined,
  };
};
const deserializeAws_json1_1RowList = (output, context) => {
  return (output || [])
    .filter((e) => e != null)
    .map((entry) => {
      if (entry === null) {
        return null;
      }
      return deserializeAws_json1_1Row(entry, context);
    });
};
const deserializeAws_json1_1StartQueryExecutionOutput = (output, context) => {
  return {
    QueryExecutionId:
      output.QueryExecutionId !== undefined && output.QueryExecutionId !== null ? output.QueryExecutionId : undefined,
  };
};
const deserializeAws_json1_1StopQueryExecutionOutput = (output, context) => {
  return {};
};
const deserializeAws_json1_1TableMetadata = (output, context) => {
  return {
    Columns:
      output.Columns !== undefined && output.Columns !== null
        ? deserializeAws_json1_1ColumnList(output.Columns, context)
        : undefined,
    CreateTime:
      output.CreateTime !== undefined && output.CreateTime !== null
        ? new Date(Math.round(output.CreateTime * 1000))
        : undefined,
    LastAccessTime:
      output.LastAccessTime !== undefined && output.LastAccessTime !== null
        ? new Date(Math.round(output.LastAccessTime * 1000))
        : undefined,
    Name: output.Name !== undefined && output.Name !== null ? output.Name : undefined,
    Parameters:
      output.Parameters !== undefined && output.Parameters !== null
        ? deserializeAws_json1_1ParametersMap(output.Parameters, context)
        : undefined,
    PartitionKeys:
      output.PartitionKeys !== undefined && output.PartitionKeys !== null
        ? deserializeAws_json1_1ColumnList(output.PartitionKeys, context)
        : undefined,
    TableType: output.TableType !== undefined && output.TableType !== null ? output.TableType : undefined,
  };
};
const deserializeAws_json1_1TableMetadataList = (output, context) => {
  return (output || [])
    .filter((e) => e != null)
    .map((entry) => {
      if (entry === null) {
        return null;
      }
      return deserializeAws_json1_1TableMetadata(entry, context);
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
const deserializeAws_json1_1TagResourceOutput = (output, context) => {
  return {};
};
const deserializeAws_json1_1TooManyRequestsException = (output, context) => {
  return {
    Message: output.Message !== undefined && output.Message !== null ? output.Message : undefined,
    Reason: output.Reason !== undefined && output.Reason !== null ? output.Reason : undefined,
  };
};
const deserializeAws_json1_1UnprocessedNamedQueryId = (output, context) => {
  return {
    ErrorCode: output.ErrorCode !== undefined && output.ErrorCode !== null ? output.ErrorCode : undefined,
    ErrorMessage: output.ErrorMessage !== undefined && output.ErrorMessage !== null ? output.ErrorMessage : undefined,
    NamedQueryId: output.NamedQueryId !== undefined && output.NamedQueryId !== null ? output.NamedQueryId : undefined,
  };
};
const deserializeAws_json1_1UnprocessedNamedQueryIdList = (output, context) => {
  return (output || [])
    .filter((e) => e != null)
    .map((entry) => {
      if (entry === null) {
        return null;
      }
      return deserializeAws_json1_1UnprocessedNamedQueryId(entry, context);
    });
};
const deserializeAws_json1_1UnprocessedQueryExecutionId = (output, context) => {
  return {
    ErrorCode: output.ErrorCode !== undefined && output.ErrorCode !== null ? output.ErrorCode : undefined,
    ErrorMessage: output.ErrorMessage !== undefined && output.ErrorMessage !== null ? output.ErrorMessage : undefined,
    QueryExecutionId:
      output.QueryExecutionId !== undefined && output.QueryExecutionId !== null ? output.QueryExecutionId : undefined,
  };
};
const deserializeAws_json1_1UnprocessedQueryExecutionIdList = (output, context) => {
  return (output || [])
    .filter((e) => e != null)
    .map((entry) => {
      if (entry === null) {
        return null;
      }
      return deserializeAws_json1_1UnprocessedQueryExecutionId(entry, context);
    });
};
const deserializeAws_json1_1UntagResourceOutput = (output, context) => {
  return {};
};
const deserializeAws_json1_1UpdateDataCatalogOutput = (output, context) => {
  return {};
};
const deserializeAws_json1_1UpdatePreparedStatementOutput = (output, context) => {
  return {};
};
const deserializeAws_json1_1UpdateWorkGroupOutput = (output, context) => {
  return {};
};
const deserializeAws_json1_1WorkGroup = (output, context) => {
  return {
    Configuration:
      output.Configuration !== undefined && output.Configuration !== null
        ? deserializeAws_json1_1WorkGroupConfiguration(output.Configuration, context)
        : undefined,
    CreationTime:
      output.CreationTime !== undefined && output.CreationTime !== null
        ? new Date(Math.round(output.CreationTime * 1000))
        : undefined,
    Description: output.Description !== undefined && output.Description !== null ? output.Description : undefined,
    Name: output.Name !== undefined && output.Name !== null ? output.Name : undefined,
    State: output.State !== undefined && output.State !== null ? output.State : undefined,
  };
};
const deserializeAws_json1_1WorkGroupConfiguration = (output, context) => {
  return {
    BytesScannedCutoffPerQuery:
      output.BytesScannedCutoffPerQuery !== undefined && output.BytesScannedCutoffPerQuery !== null
        ? output.BytesScannedCutoffPerQuery
        : undefined,
    EnforceWorkGroupConfiguration:
      output.EnforceWorkGroupConfiguration !== undefined && output.EnforceWorkGroupConfiguration !== null
        ? output.EnforceWorkGroupConfiguration
        : undefined,
    EngineVersion:
      output.EngineVersion !== undefined && output.EngineVersion !== null
        ? deserializeAws_json1_1EngineVersion(output.EngineVersion, context)
        : undefined,
    PublishCloudWatchMetricsEnabled:
      output.PublishCloudWatchMetricsEnabled !== undefined && output.PublishCloudWatchMetricsEnabled !== null
        ? output.PublishCloudWatchMetricsEnabled
        : undefined,
    RequesterPaysEnabled:
      output.RequesterPaysEnabled !== undefined && output.RequesterPaysEnabled !== null
        ? output.RequesterPaysEnabled
        : undefined,
    ResultConfiguration:
      output.ResultConfiguration !== undefined && output.ResultConfiguration !== null
        ? deserializeAws_json1_1ResultConfiguration(output.ResultConfiguration, context)
        : undefined,
  };
};
const deserializeAws_json1_1WorkGroupsList = (output, context) => {
  return (output || [])
    .filter((e) => e != null)
    .map((entry) => {
      if (entry === null) {
        return null;
      }
      return deserializeAws_json1_1WorkGroupSummary(entry, context);
    });
};
const deserializeAws_json1_1WorkGroupSummary = (output, context) => {
  return {
    CreationTime:
      output.CreationTime !== undefined && output.CreationTime !== null
        ? new Date(Math.round(output.CreationTime * 1000))
        : undefined,
    Description: output.Description !== undefined && output.Description !== null ? output.Description : undefined,
    EngineVersion:
      output.EngineVersion !== undefined && output.EngineVersion !== null
        ? deserializeAws_json1_1EngineVersion(output.EngineVersion, context)
        : undefined,
    Name: output.Name !== undefined && output.Name !== null ? output.Name : undefined,
    State: output.State !== undefined && output.State !== null ? output.State : undefined,
  };
};
const deserializeMetadata = (output) => {
  var _a;
  return {
    httpStatusCode: output.statusCode,
    requestId:
      (_a = output.headers["x-amzn-requestid"]) !== null && _a !== void 0 ? _a : output.headers["x-amzn-request-id"],
    extendedRequestId: output.headers["x-amz-id-2"],
    cfId: output.headers["x-amz-cf-id"],
  };
};
// Collect low-level response body stream to Uint8Array.
const collectBody = (streamBody = new Uint8Array(), context) => {
  if (streamBody instanceof Uint8Array) {
    return Promise.resolve(streamBody);
  }
  return context.streamCollector(streamBody) || Promise.resolve(new Uint8Array());
};
// Encode Uint8Array data into string with utf-8.
const collectBodyString = (streamBody, context) =>
  collectBody(streamBody, context).then((body) => context.utf8Encoder(body));
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
const parseBody = (streamBody, context) =>
  collectBodyString(streamBody, context).then((encoded) => {
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
