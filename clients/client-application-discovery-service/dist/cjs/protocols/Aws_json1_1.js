"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.deserializeAws_json1_1UpdateApplicationCommand =
  exports.deserializeAws_json1_1StopDataCollectionByAgentIdsCommand =
  exports.deserializeAws_json1_1StopContinuousExportCommand =
  exports.deserializeAws_json1_1StartImportTaskCommand =
  exports.deserializeAws_json1_1StartExportTaskCommand =
  exports.deserializeAws_json1_1StartDataCollectionByAgentIdsCommand =
  exports.deserializeAws_json1_1StartContinuousExportCommand =
  exports.deserializeAws_json1_1ListServerNeighborsCommand =
  exports.deserializeAws_json1_1ListConfigurationsCommand =
  exports.deserializeAws_json1_1GetDiscoverySummaryCommand =
  exports.deserializeAws_json1_1ExportConfigurationsCommand =
  exports.deserializeAws_json1_1DisassociateConfigurationItemsFromApplicationCommand =
  exports.deserializeAws_json1_1DescribeTagsCommand =
  exports.deserializeAws_json1_1DescribeImportTasksCommand =
  exports.deserializeAws_json1_1DescribeExportTasksCommand =
  exports.deserializeAws_json1_1DescribeExportConfigurationsCommand =
  exports.deserializeAws_json1_1DescribeContinuousExportsCommand =
  exports.deserializeAws_json1_1DescribeConfigurationsCommand =
  exports.deserializeAws_json1_1DescribeAgentsCommand =
  exports.deserializeAws_json1_1DeleteTagsCommand =
  exports.deserializeAws_json1_1DeleteApplicationsCommand =
  exports.deserializeAws_json1_1CreateTagsCommand =
  exports.deserializeAws_json1_1CreateApplicationCommand =
  exports.deserializeAws_json1_1BatchDeleteImportDataCommand =
  exports.deserializeAws_json1_1AssociateConfigurationItemsToApplicationCommand =
  exports.serializeAws_json1_1UpdateApplicationCommand =
  exports.serializeAws_json1_1StopDataCollectionByAgentIdsCommand =
  exports.serializeAws_json1_1StopContinuousExportCommand =
  exports.serializeAws_json1_1StartImportTaskCommand =
  exports.serializeAws_json1_1StartExportTaskCommand =
  exports.serializeAws_json1_1StartDataCollectionByAgentIdsCommand =
  exports.serializeAws_json1_1StartContinuousExportCommand =
  exports.serializeAws_json1_1ListServerNeighborsCommand =
  exports.serializeAws_json1_1ListConfigurationsCommand =
  exports.serializeAws_json1_1GetDiscoverySummaryCommand =
  exports.serializeAws_json1_1ExportConfigurationsCommand =
  exports.serializeAws_json1_1DisassociateConfigurationItemsFromApplicationCommand =
  exports.serializeAws_json1_1DescribeTagsCommand =
  exports.serializeAws_json1_1DescribeImportTasksCommand =
  exports.serializeAws_json1_1DescribeExportTasksCommand =
  exports.serializeAws_json1_1DescribeExportConfigurationsCommand =
  exports.serializeAws_json1_1DescribeContinuousExportsCommand =
  exports.serializeAws_json1_1DescribeConfigurationsCommand =
  exports.serializeAws_json1_1DescribeAgentsCommand =
  exports.serializeAws_json1_1DeleteTagsCommand =
  exports.serializeAws_json1_1DeleteApplicationsCommand =
  exports.serializeAws_json1_1CreateTagsCommand =
  exports.serializeAws_json1_1CreateApplicationCommand =
  exports.serializeAws_json1_1BatchDeleteImportDataCommand =
  exports.serializeAws_json1_1AssociateConfigurationItemsToApplicationCommand =
    void 0;
const protocol_http_1 = require("@aws-sdk/protocol-http");
const uuid_1 = require("uuid");
const serializeAws_json1_1AssociateConfigurationItemsToApplicationCommand = async (input, context) => {
  const headers = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "AWSPoseidonService_V2015_11_01.AssociateConfigurationItemsToApplication",
  };
  let body;
  body = JSON.stringify(serializeAws_json1_1AssociateConfigurationItemsToApplicationRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
exports.serializeAws_json1_1AssociateConfigurationItemsToApplicationCommand =
  serializeAws_json1_1AssociateConfigurationItemsToApplicationCommand;
const serializeAws_json1_1BatchDeleteImportDataCommand = async (input, context) => {
  const headers = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "AWSPoseidonService_V2015_11_01.BatchDeleteImportData",
  };
  let body;
  body = JSON.stringify(serializeAws_json1_1BatchDeleteImportDataRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
exports.serializeAws_json1_1BatchDeleteImportDataCommand = serializeAws_json1_1BatchDeleteImportDataCommand;
const serializeAws_json1_1CreateApplicationCommand = async (input, context) => {
  const headers = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "AWSPoseidonService_V2015_11_01.CreateApplication",
  };
  let body;
  body = JSON.stringify(serializeAws_json1_1CreateApplicationRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
exports.serializeAws_json1_1CreateApplicationCommand = serializeAws_json1_1CreateApplicationCommand;
const serializeAws_json1_1CreateTagsCommand = async (input, context) => {
  const headers = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "AWSPoseidonService_V2015_11_01.CreateTags",
  };
  let body;
  body = JSON.stringify(serializeAws_json1_1CreateTagsRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
exports.serializeAws_json1_1CreateTagsCommand = serializeAws_json1_1CreateTagsCommand;
const serializeAws_json1_1DeleteApplicationsCommand = async (input, context) => {
  const headers = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "AWSPoseidonService_V2015_11_01.DeleteApplications",
  };
  let body;
  body = JSON.stringify(serializeAws_json1_1DeleteApplicationsRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
exports.serializeAws_json1_1DeleteApplicationsCommand = serializeAws_json1_1DeleteApplicationsCommand;
const serializeAws_json1_1DeleteTagsCommand = async (input, context) => {
  const headers = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "AWSPoseidonService_V2015_11_01.DeleteTags",
  };
  let body;
  body = JSON.stringify(serializeAws_json1_1DeleteTagsRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
exports.serializeAws_json1_1DeleteTagsCommand = serializeAws_json1_1DeleteTagsCommand;
const serializeAws_json1_1DescribeAgentsCommand = async (input, context) => {
  const headers = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "AWSPoseidonService_V2015_11_01.DescribeAgents",
  };
  let body;
  body = JSON.stringify(serializeAws_json1_1DescribeAgentsRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
exports.serializeAws_json1_1DescribeAgentsCommand = serializeAws_json1_1DescribeAgentsCommand;
const serializeAws_json1_1DescribeConfigurationsCommand = async (input, context) => {
  const headers = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "AWSPoseidonService_V2015_11_01.DescribeConfigurations",
  };
  let body;
  body = JSON.stringify(serializeAws_json1_1DescribeConfigurationsRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
exports.serializeAws_json1_1DescribeConfigurationsCommand = serializeAws_json1_1DescribeConfigurationsCommand;
const serializeAws_json1_1DescribeContinuousExportsCommand = async (input, context) => {
  const headers = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "AWSPoseidonService_V2015_11_01.DescribeContinuousExports",
  };
  let body;
  body = JSON.stringify(serializeAws_json1_1DescribeContinuousExportsRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
exports.serializeAws_json1_1DescribeContinuousExportsCommand = serializeAws_json1_1DescribeContinuousExportsCommand;
const serializeAws_json1_1DescribeExportConfigurationsCommand = async (input, context) => {
  const headers = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "AWSPoseidonService_V2015_11_01.DescribeExportConfigurations",
  };
  let body;
  body = JSON.stringify(serializeAws_json1_1DescribeExportConfigurationsRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
exports.serializeAws_json1_1DescribeExportConfigurationsCommand =
  serializeAws_json1_1DescribeExportConfigurationsCommand;
const serializeAws_json1_1DescribeExportTasksCommand = async (input, context) => {
  const headers = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "AWSPoseidonService_V2015_11_01.DescribeExportTasks",
  };
  let body;
  body = JSON.stringify(serializeAws_json1_1DescribeExportTasksRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
exports.serializeAws_json1_1DescribeExportTasksCommand = serializeAws_json1_1DescribeExportTasksCommand;
const serializeAws_json1_1DescribeImportTasksCommand = async (input, context) => {
  const headers = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "AWSPoseidonService_V2015_11_01.DescribeImportTasks",
  };
  let body;
  body = JSON.stringify(serializeAws_json1_1DescribeImportTasksRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
exports.serializeAws_json1_1DescribeImportTasksCommand = serializeAws_json1_1DescribeImportTasksCommand;
const serializeAws_json1_1DescribeTagsCommand = async (input, context) => {
  const headers = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "AWSPoseidonService_V2015_11_01.DescribeTags",
  };
  let body;
  body = JSON.stringify(serializeAws_json1_1DescribeTagsRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
exports.serializeAws_json1_1DescribeTagsCommand = serializeAws_json1_1DescribeTagsCommand;
const serializeAws_json1_1DisassociateConfigurationItemsFromApplicationCommand = async (input, context) => {
  const headers = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "AWSPoseidonService_V2015_11_01.DisassociateConfigurationItemsFromApplication",
  };
  let body;
  body = JSON.stringify(serializeAws_json1_1DisassociateConfigurationItemsFromApplicationRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
exports.serializeAws_json1_1DisassociateConfigurationItemsFromApplicationCommand =
  serializeAws_json1_1DisassociateConfigurationItemsFromApplicationCommand;
const serializeAws_json1_1ExportConfigurationsCommand = async (input, context) => {
  const headers = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "AWSPoseidonService_V2015_11_01.ExportConfigurations",
  };
  const body = "{}";
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
exports.serializeAws_json1_1ExportConfigurationsCommand = serializeAws_json1_1ExportConfigurationsCommand;
const serializeAws_json1_1GetDiscoverySummaryCommand = async (input, context) => {
  const headers = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "AWSPoseidonService_V2015_11_01.GetDiscoverySummary",
  };
  let body;
  body = JSON.stringify(serializeAws_json1_1GetDiscoverySummaryRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
exports.serializeAws_json1_1GetDiscoverySummaryCommand = serializeAws_json1_1GetDiscoverySummaryCommand;
const serializeAws_json1_1ListConfigurationsCommand = async (input, context) => {
  const headers = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "AWSPoseidonService_V2015_11_01.ListConfigurations",
  };
  let body;
  body = JSON.stringify(serializeAws_json1_1ListConfigurationsRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
exports.serializeAws_json1_1ListConfigurationsCommand = serializeAws_json1_1ListConfigurationsCommand;
const serializeAws_json1_1ListServerNeighborsCommand = async (input, context) => {
  const headers = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "AWSPoseidonService_V2015_11_01.ListServerNeighbors",
  };
  let body;
  body = JSON.stringify(serializeAws_json1_1ListServerNeighborsRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
exports.serializeAws_json1_1ListServerNeighborsCommand = serializeAws_json1_1ListServerNeighborsCommand;
const serializeAws_json1_1StartContinuousExportCommand = async (input, context) => {
  const headers = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "AWSPoseidonService_V2015_11_01.StartContinuousExport",
  };
  let body;
  body = JSON.stringify(serializeAws_json1_1StartContinuousExportRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
exports.serializeAws_json1_1StartContinuousExportCommand = serializeAws_json1_1StartContinuousExportCommand;
const serializeAws_json1_1StartDataCollectionByAgentIdsCommand = async (input, context) => {
  const headers = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "AWSPoseidonService_V2015_11_01.StartDataCollectionByAgentIds",
  };
  let body;
  body = JSON.stringify(serializeAws_json1_1StartDataCollectionByAgentIdsRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
exports.serializeAws_json1_1StartDataCollectionByAgentIdsCommand =
  serializeAws_json1_1StartDataCollectionByAgentIdsCommand;
const serializeAws_json1_1StartExportTaskCommand = async (input, context) => {
  const headers = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "AWSPoseidonService_V2015_11_01.StartExportTask",
  };
  let body;
  body = JSON.stringify(serializeAws_json1_1StartExportTaskRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
exports.serializeAws_json1_1StartExportTaskCommand = serializeAws_json1_1StartExportTaskCommand;
const serializeAws_json1_1StartImportTaskCommand = async (input, context) => {
  const headers = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "AWSPoseidonService_V2015_11_01.StartImportTask",
  };
  let body;
  body = JSON.stringify(serializeAws_json1_1StartImportTaskRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
exports.serializeAws_json1_1StartImportTaskCommand = serializeAws_json1_1StartImportTaskCommand;
const serializeAws_json1_1StopContinuousExportCommand = async (input, context) => {
  const headers = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "AWSPoseidonService_V2015_11_01.StopContinuousExport",
  };
  let body;
  body = JSON.stringify(serializeAws_json1_1StopContinuousExportRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
exports.serializeAws_json1_1StopContinuousExportCommand = serializeAws_json1_1StopContinuousExportCommand;
const serializeAws_json1_1StopDataCollectionByAgentIdsCommand = async (input, context) => {
  const headers = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "AWSPoseidonService_V2015_11_01.StopDataCollectionByAgentIds",
  };
  let body;
  body = JSON.stringify(serializeAws_json1_1StopDataCollectionByAgentIdsRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
exports.serializeAws_json1_1StopDataCollectionByAgentIdsCommand =
  serializeAws_json1_1StopDataCollectionByAgentIdsCommand;
const serializeAws_json1_1UpdateApplicationCommand = async (input, context) => {
  const headers = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "AWSPoseidonService_V2015_11_01.UpdateApplication",
  };
  let body;
  body = JSON.stringify(serializeAws_json1_1UpdateApplicationRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
exports.serializeAws_json1_1UpdateApplicationCommand = serializeAws_json1_1UpdateApplicationCommand;
const deserializeAws_json1_1AssociateConfigurationItemsToApplicationCommand = async (output, context) => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_1AssociateConfigurationItemsToApplicationCommandError(output, context);
  }
  const data = await parseBody(output.body, context);
  let contents = {};
  contents = deserializeAws_json1_1AssociateConfigurationItemsToApplicationResponse(data, context);
  const response = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};
exports.deserializeAws_json1_1AssociateConfigurationItemsToApplicationCommand =
  deserializeAws_json1_1AssociateConfigurationItemsToApplicationCommand;
const deserializeAws_json1_1AssociateConfigurationItemsToApplicationCommandError = async (output, context) => {
  const parsedOutput = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response;
  let errorCode = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AuthorizationErrorException":
    case "com.amazonaws.applicationdiscoveryservice#AuthorizationErrorException":
      response = {
        ...(await deserializeAws_json1_1AuthorizationErrorExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "HomeRegionNotSetException":
    case "com.amazonaws.applicationdiscoveryservice#HomeRegionNotSetException":
      response = {
        ...(await deserializeAws_json1_1HomeRegionNotSetExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InvalidParameterException":
    case "com.amazonaws.applicationdiscoveryservice#InvalidParameterException":
      response = {
        ...(await deserializeAws_json1_1InvalidParameterExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InvalidParameterValueException":
    case "com.amazonaws.applicationdiscoveryservice#InvalidParameterValueException":
      response = {
        ...(await deserializeAws_json1_1InvalidParameterValueExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ServerInternalErrorException":
    case "com.amazonaws.applicationdiscoveryservice#ServerInternalErrorException":
      response = {
        ...(await deserializeAws_json1_1ServerInternalErrorExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    default:
      const parsedBody = parsedOutput.body;
      errorCode = parsedBody.code || parsedBody.Code || errorCode;
      response = {
        ...parsedBody,
        name: `${errorCode}`,
        message: parsedBody.message || parsedBody.Message || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output),
      };
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
};
const deserializeAws_json1_1BatchDeleteImportDataCommand = async (output, context) => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_1BatchDeleteImportDataCommandError(output, context);
  }
  const data = await parseBody(output.body, context);
  let contents = {};
  contents = deserializeAws_json1_1BatchDeleteImportDataResponse(data, context);
  const response = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};
exports.deserializeAws_json1_1BatchDeleteImportDataCommand = deserializeAws_json1_1BatchDeleteImportDataCommand;
const deserializeAws_json1_1BatchDeleteImportDataCommandError = async (output, context) => {
  const parsedOutput = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response;
  let errorCode = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AuthorizationErrorException":
    case "com.amazonaws.applicationdiscoveryservice#AuthorizationErrorException":
      response = {
        ...(await deserializeAws_json1_1AuthorizationErrorExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "HomeRegionNotSetException":
    case "com.amazonaws.applicationdiscoveryservice#HomeRegionNotSetException":
      response = {
        ...(await deserializeAws_json1_1HomeRegionNotSetExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InvalidParameterException":
    case "com.amazonaws.applicationdiscoveryservice#InvalidParameterException":
      response = {
        ...(await deserializeAws_json1_1InvalidParameterExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InvalidParameterValueException":
    case "com.amazonaws.applicationdiscoveryservice#InvalidParameterValueException":
      response = {
        ...(await deserializeAws_json1_1InvalidParameterValueExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ServerInternalErrorException":
    case "com.amazonaws.applicationdiscoveryservice#ServerInternalErrorException":
      response = {
        ...(await deserializeAws_json1_1ServerInternalErrorExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    default:
      const parsedBody = parsedOutput.body;
      errorCode = parsedBody.code || parsedBody.Code || errorCode;
      response = {
        ...parsedBody,
        name: `${errorCode}`,
        message: parsedBody.message || parsedBody.Message || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output),
      };
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
};
const deserializeAws_json1_1CreateApplicationCommand = async (output, context) => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_1CreateApplicationCommandError(output, context);
  }
  const data = await parseBody(output.body, context);
  let contents = {};
  contents = deserializeAws_json1_1CreateApplicationResponse(data, context);
  const response = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};
exports.deserializeAws_json1_1CreateApplicationCommand = deserializeAws_json1_1CreateApplicationCommand;
const deserializeAws_json1_1CreateApplicationCommandError = async (output, context) => {
  const parsedOutput = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response;
  let errorCode = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AuthorizationErrorException":
    case "com.amazonaws.applicationdiscoveryservice#AuthorizationErrorException":
      response = {
        ...(await deserializeAws_json1_1AuthorizationErrorExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "HomeRegionNotSetException":
    case "com.amazonaws.applicationdiscoveryservice#HomeRegionNotSetException":
      response = {
        ...(await deserializeAws_json1_1HomeRegionNotSetExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InvalidParameterException":
    case "com.amazonaws.applicationdiscoveryservice#InvalidParameterException":
      response = {
        ...(await deserializeAws_json1_1InvalidParameterExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InvalidParameterValueException":
    case "com.amazonaws.applicationdiscoveryservice#InvalidParameterValueException":
      response = {
        ...(await deserializeAws_json1_1InvalidParameterValueExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ServerInternalErrorException":
    case "com.amazonaws.applicationdiscoveryservice#ServerInternalErrorException":
      response = {
        ...(await deserializeAws_json1_1ServerInternalErrorExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    default:
      const parsedBody = parsedOutput.body;
      errorCode = parsedBody.code || parsedBody.Code || errorCode;
      response = {
        ...parsedBody,
        name: `${errorCode}`,
        message: parsedBody.message || parsedBody.Message || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output),
      };
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
};
const deserializeAws_json1_1CreateTagsCommand = async (output, context) => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_1CreateTagsCommandError(output, context);
  }
  const data = await parseBody(output.body, context);
  let contents = {};
  contents = deserializeAws_json1_1CreateTagsResponse(data, context);
  const response = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};
exports.deserializeAws_json1_1CreateTagsCommand = deserializeAws_json1_1CreateTagsCommand;
const deserializeAws_json1_1CreateTagsCommandError = async (output, context) => {
  const parsedOutput = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response;
  let errorCode = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AuthorizationErrorException":
    case "com.amazonaws.applicationdiscoveryservice#AuthorizationErrorException":
      response = {
        ...(await deserializeAws_json1_1AuthorizationErrorExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "HomeRegionNotSetException":
    case "com.amazonaws.applicationdiscoveryservice#HomeRegionNotSetException":
      response = {
        ...(await deserializeAws_json1_1HomeRegionNotSetExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InvalidParameterException":
    case "com.amazonaws.applicationdiscoveryservice#InvalidParameterException":
      response = {
        ...(await deserializeAws_json1_1InvalidParameterExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InvalidParameterValueException":
    case "com.amazonaws.applicationdiscoveryservice#InvalidParameterValueException":
      response = {
        ...(await deserializeAws_json1_1InvalidParameterValueExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ResourceNotFoundException":
    case "com.amazonaws.applicationdiscoveryservice#ResourceNotFoundException":
      response = {
        ...(await deserializeAws_json1_1ResourceNotFoundExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ServerInternalErrorException":
    case "com.amazonaws.applicationdiscoveryservice#ServerInternalErrorException":
      response = {
        ...(await deserializeAws_json1_1ServerInternalErrorExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    default:
      const parsedBody = parsedOutput.body;
      errorCode = parsedBody.code || parsedBody.Code || errorCode;
      response = {
        ...parsedBody,
        name: `${errorCode}`,
        message: parsedBody.message || parsedBody.Message || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output),
      };
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
};
const deserializeAws_json1_1DeleteApplicationsCommand = async (output, context) => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_1DeleteApplicationsCommandError(output, context);
  }
  const data = await parseBody(output.body, context);
  let contents = {};
  contents = deserializeAws_json1_1DeleteApplicationsResponse(data, context);
  const response = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};
exports.deserializeAws_json1_1DeleteApplicationsCommand = deserializeAws_json1_1DeleteApplicationsCommand;
const deserializeAws_json1_1DeleteApplicationsCommandError = async (output, context) => {
  const parsedOutput = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response;
  let errorCode = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AuthorizationErrorException":
    case "com.amazonaws.applicationdiscoveryservice#AuthorizationErrorException":
      response = {
        ...(await deserializeAws_json1_1AuthorizationErrorExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "HomeRegionNotSetException":
    case "com.amazonaws.applicationdiscoveryservice#HomeRegionNotSetException":
      response = {
        ...(await deserializeAws_json1_1HomeRegionNotSetExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InvalidParameterException":
    case "com.amazonaws.applicationdiscoveryservice#InvalidParameterException":
      response = {
        ...(await deserializeAws_json1_1InvalidParameterExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InvalidParameterValueException":
    case "com.amazonaws.applicationdiscoveryservice#InvalidParameterValueException":
      response = {
        ...(await deserializeAws_json1_1InvalidParameterValueExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ServerInternalErrorException":
    case "com.amazonaws.applicationdiscoveryservice#ServerInternalErrorException":
      response = {
        ...(await deserializeAws_json1_1ServerInternalErrorExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    default:
      const parsedBody = parsedOutput.body;
      errorCode = parsedBody.code || parsedBody.Code || errorCode;
      response = {
        ...parsedBody,
        name: `${errorCode}`,
        message: parsedBody.message || parsedBody.Message || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output),
      };
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
};
const deserializeAws_json1_1DeleteTagsCommand = async (output, context) => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_1DeleteTagsCommandError(output, context);
  }
  const data = await parseBody(output.body, context);
  let contents = {};
  contents = deserializeAws_json1_1DeleteTagsResponse(data, context);
  const response = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};
exports.deserializeAws_json1_1DeleteTagsCommand = deserializeAws_json1_1DeleteTagsCommand;
const deserializeAws_json1_1DeleteTagsCommandError = async (output, context) => {
  const parsedOutput = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response;
  let errorCode = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AuthorizationErrorException":
    case "com.amazonaws.applicationdiscoveryservice#AuthorizationErrorException":
      response = {
        ...(await deserializeAws_json1_1AuthorizationErrorExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "HomeRegionNotSetException":
    case "com.amazonaws.applicationdiscoveryservice#HomeRegionNotSetException":
      response = {
        ...(await deserializeAws_json1_1HomeRegionNotSetExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InvalidParameterException":
    case "com.amazonaws.applicationdiscoveryservice#InvalidParameterException":
      response = {
        ...(await deserializeAws_json1_1InvalidParameterExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InvalidParameterValueException":
    case "com.amazonaws.applicationdiscoveryservice#InvalidParameterValueException":
      response = {
        ...(await deserializeAws_json1_1InvalidParameterValueExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ResourceNotFoundException":
    case "com.amazonaws.applicationdiscoveryservice#ResourceNotFoundException":
      response = {
        ...(await deserializeAws_json1_1ResourceNotFoundExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ServerInternalErrorException":
    case "com.amazonaws.applicationdiscoveryservice#ServerInternalErrorException":
      response = {
        ...(await deserializeAws_json1_1ServerInternalErrorExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    default:
      const parsedBody = parsedOutput.body;
      errorCode = parsedBody.code || parsedBody.Code || errorCode;
      response = {
        ...parsedBody,
        name: `${errorCode}`,
        message: parsedBody.message || parsedBody.Message || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output),
      };
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
};
const deserializeAws_json1_1DescribeAgentsCommand = async (output, context) => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_1DescribeAgentsCommandError(output, context);
  }
  const data = await parseBody(output.body, context);
  let contents = {};
  contents = deserializeAws_json1_1DescribeAgentsResponse(data, context);
  const response = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};
exports.deserializeAws_json1_1DescribeAgentsCommand = deserializeAws_json1_1DescribeAgentsCommand;
const deserializeAws_json1_1DescribeAgentsCommandError = async (output, context) => {
  const parsedOutput = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response;
  let errorCode = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AuthorizationErrorException":
    case "com.amazonaws.applicationdiscoveryservice#AuthorizationErrorException":
      response = {
        ...(await deserializeAws_json1_1AuthorizationErrorExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "HomeRegionNotSetException":
    case "com.amazonaws.applicationdiscoveryservice#HomeRegionNotSetException":
      response = {
        ...(await deserializeAws_json1_1HomeRegionNotSetExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InvalidParameterException":
    case "com.amazonaws.applicationdiscoveryservice#InvalidParameterException":
      response = {
        ...(await deserializeAws_json1_1InvalidParameterExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InvalidParameterValueException":
    case "com.amazonaws.applicationdiscoveryservice#InvalidParameterValueException":
      response = {
        ...(await deserializeAws_json1_1InvalidParameterValueExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ServerInternalErrorException":
    case "com.amazonaws.applicationdiscoveryservice#ServerInternalErrorException":
      response = {
        ...(await deserializeAws_json1_1ServerInternalErrorExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    default:
      const parsedBody = parsedOutput.body;
      errorCode = parsedBody.code || parsedBody.Code || errorCode;
      response = {
        ...parsedBody,
        name: `${errorCode}`,
        message: parsedBody.message || parsedBody.Message || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output),
      };
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
};
const deserializeAws_json1_1DescribeConfigurationsCommand = async (output, context) => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_1DescribeConfigurationsCommandError(output, context);
  }
  const data = await parseBody(output.body, context);
  let contents = {};
  contents = deserializeAws_json1_1DescribeConfigurationsResponse(data, context);
  const response = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};
exports.deserializeAws_json1_1DescribeConfigurationsCommand = deserializeAws_json1_1DescribeConfigurationsCommand;
const deserializeAws_json1_1DescribeConfigurationsCommandError = async (output, context) => {
  const parsedOutput = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response;
  let errorCode = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AuthorizationErrorException":
    case "com.amazonaws.applicationdiscoveryservice#AuthorizationErrorException":
      response = {
        ...(await deserializeAws_json1_1AuthorizationErrorExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "HomeRegionNotSetException":
    case "com.amazonaws.applicationdiscoveryservice#HomeRegionNotSetException":
      response = {
        ...(await deserializeAws_json1_1HomeRegionNotSetExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InvalidParameterException":
    case "com.amazonaws.applicationdiscoveryservice#InvalidParameterException":
      response = {
        ...(await deserializeAws_json1_1InvalidParameterExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InvalidParameterValueException":
    case "com.amazonaws.applicationdiscoveryservice#InvalidParameterValueException":
      response = {
        ...(await deserializeAws_json1_1InvalidParameterValueExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ServerInternalErrorException":
    case "com.amazonaws.applicationdiscoveryservice#ServerInternalErrorException":
      response = {
        ...(await deserializeAws_json1_1ServerInternalErrorExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    default:
      const parsedBody = parsedOutput.body;
      errorCode = parsedBody.code || parsedBody.Code || errorCode;
      response = {
        ...parsedBody,
        name: `${errorCode}`,
        message: parsedBody.message || parsedBody.Message || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output),
      };
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
};
const deserializeAws_json1_1DescribeContinuousExportsCommand = async (output, context) => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_1DescribeContinuousExportsCommandError(output, context);
  }
  const data = await parseBody(output.body, context);
  let contents = {};
  contents = deserializeAws_json1_1DescribeContinuousExportsResponse(data, context);
  const response = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};
exports.deserializeAws_json1_1DescribeContinuousExportsCommand = deserializeAws_json1_1DescribeContinuousExportsCommand;
const deserializeAws_json1_1DescribeContinuousExportsCommandError = async (output, context) => {
  const parsedOutput = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response;
  let errorCode = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AuthorizationErrorException":
    case "com.amazonaws.applicationdiscoveryservice#AuthorizationErrorException":
      response = {
        ...(await deserializeAws_json1_1AuthorizationErrorExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "HomeRegionNotSetException":
    case "com.amazonaws.applicationdiscoveryservice#HomeRegionNotSetException":
      response = {
        ...(await deserializeAws_json1_1HomeRegionNotSetExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InvalidParameterException":
    case "com.amazonaws.applicationdiscoveryservice#InvalidParameterException":
      response = {
        ...(await deserializeAws_json1_1InvalidParameterExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InvalidParameterValueException":
    case "com.amazonaws.applicationdiscoveryservice#InvalidParameterValueException":
      response = {
        ...(await deserializeAws_json1_1InvalidParameterValueExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "OperationNotPermittedException":
    case "com.amazonaws.applicationdiscoveryservice#OperationNotPermittedException":
      response = {
        ...(await deserializeAws_json1_1OperationNotPermittedExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ResourceNotFoundException":
    case "com.amazonaws.applicationdiscoveryservice#ResourceNotFoundException":
      response = {
        ...(await deserializeAws_json1_1ResourceNotFoundExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ServerInternalErrorException":
    case "com.amazonaws.applicationdiscoveryservice#ServerInternalErrorException":
      response = {
        ...(await deserializeAws_json1_1ServerInternalErrorExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    default:
      const parsedBody = parsedOutput.body;
      errorCode = parsedBody.code || parsedBody.Code || errorCode;
      response = {
        ...parsedBody,
        name: `${errorCode}`,
        message: parsedBody.message || parsedBody.Message || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output),
      };
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
};
const deserializeAws_json1_1DescribeExportConfigurationsCommand = async (output, context) => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_1DescribeExportConfigurationsCommandError(output, context);
  }
  const data = await parseBody(output.body, context);
  let contents = {};
  contents = deserializeAws_json1_1DescribeExportConfigurationsResponse(data, context);
  const response = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};
exports.deserializeAws_json1_1DescribeExportConfigurationsCommand =
  deserializeAws_json1_1DescribeExportConfigurationsCommand;
const deserializeAws_json1_1DescribeExportConfigurationsCommandError = async (output, context) => {
  const parsedOutput = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response;
  let errorCode = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AuthorizationErrorException":
    case "com.amazonaws.applicationdiscoveryservice#AuthorizationErrorException":
      response = {
        ...(await deserializeAws_json1_1AuthorizationErrorExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "HomeRegionNotSetException":
    case "com.amazonaws.applicationdiscoveryservice#HomeRegionNotSetException":
      response = {
        ...(await deserializeAws_json1_1HomeRegionNotSetExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InvalidParameterException":
    case "com.amazonaws.applicationdiscoveryservice#InvalidParameterException":
      response = {
        ...(await deserializeAws_json1_1InvalidParameterExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InvalidParameterValueException":
    case "com.amazonaws.applicationdiscoveryservice#InvalidParameterValueException":
      response = {
        ...(await deserializeAws_json1_1InvalidParameterValueExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ResourceNotFoundException":
    case "com.amazonaws.applicationdiscoveryservice#ResourceNotFoundException":
      response = {
        ...(await deserializeAws_json1_1ResourceNotFoundExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ServerInternalErrorException":
    case "com.amazonaws.applicationdiscoveryservice#ServerInternalErrorException":
      response = {
        ...(await deserializeAws_json1_1ServerInternalErrorExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    default:
      const parsedBody = parsedOutput.body;
      errorCode = parsedBody.code || parsedBody.Code || errorCode;
      response = {
        ...parsedBody,
        name: `${errorCode}`,
        message: parsedBody.message || parsedBody.Message || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output),
      };
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
};
const deserializeAws_json1_1DescribeExportTasksCommand = async (output, context) => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_1DescribeExportTasksCommandError(output, context);
  }
  const data = await parseBody(output.body, context);
  let contents = {};
  contents = deserializeAws_json1_1DescribeExportTasksResponse(data, context);
  const response = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};
exports.deserializeAws_json1_1DescribeExportTasksCommand = deserializeAws_json1_1DescribeExportTasksCommand;
const deserializeAws_json1_1DescribeExportTasksCommandError = async (output, context) => {
  const parsedOutput = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response;
  let errorCode = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AuthorizationErrorException":
    case "com.amazonaws.applicationdiscoveryservice#AuthorizationErrorException":
      response = {
        ...(await deserializeAws_json1_1AuthorizationErrorExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "HomeRegionNotSetException":
    case "com.amazonaws.applicationdiscoveryservice#HomeRegionNotSetException":
      response = {
        ...(await deserializeAws_json1_1HomeRegionNotSetExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InvalidParameterException":
    case "com.amazonaws.applicationdiscoveryservice#InvalidParameterException":
      response = {
        ...(await deserializeAws_json1_1InvalidParameterExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InvalidParameterValueException":
    case "com.amazonaws.applicationdiscoveryservice#InvalidParameterValueException":
      response = {
        ...(await deserializeAws_json1_1InvalidParameterValueExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ServerInternalErrorException":
    case "com.amazonaws.applicationdiscoveryservice#ServerInternalErrorException":
      response = {
        ...(await deserializeAws_json1_1ServerInternalErrorExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    default:
      const parsedBody = parsedOutput.body;
      errorCode = parsedBody.code || parsedBody.Code || errorCode;
      response = {
        ...parsedBody,
        name: `${errorCode}`,
        message: parsedBody.message || parsedBody.Message || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output),
      };
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
};
const deserializeAws_json1_1DescribeImportTasksCommand = async (output, context) => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_1DescribeImportTasksCommandError(output, context);
  }
  const data = await parseBody(output.body, context);
  let contents = {};
  contents = deserializeAws_json1_1DescribeImportTasksResponse(data, context);
  const response = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};
exports.deserializeAws_json1_1DescribeImportTasksCommand = deserializeAws_json1_1DescribeImportTasksCommand;
const deserializeAws_json1_1DescribeImportTasksCommandError = async (output, context) => {
  const parsedOutput = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response;
  let errorCode = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AuthorizationErrorException":
    case "com.amazonaws.applicationdiscoveryservice#AuthorizationErrorException":
      response = {
        ...(await deserializeAws_json1_1AuthorizationErrorExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "HomeRegionNotSetException":
    case "com.amazonaws.applicationdiscoveryservice#HomeRegionNotSetException":
      response = {
        ...(await deserializeAws_json1_1HomeRegionNotSetExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InvalidParameterException":
    case "com.amazonaws.applicationdiscoveryservice#InvalidParameterException":
      response = {
        ...(await deserializeAws_json1_1InvalidParameterExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InvalidParameterValueException":
    case "com.amazonaws.applicationdiscoveryservice#InvalidParameterValueException":
      response = {
        ...(await deserializeAws_json1_1InvalidParameterValueExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ServerInternalErrorException":
    case "com.amazonaws.applicationdiscoveryservice#ServerInternalErrorException":
      response = {
        ...(await deserializeAws_json1_1ServerInternalErrorExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    default:
      const parsedBody = parsedOutput.body;
      errorCode = parsedBody.code || parsedBody.Code || errorCode;
      response = {
        ...parsedBody,
        name: `${errorCode}`,
        message: parsedBody.message || parsedBody.Message || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output),
      };
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
};
const deserializeAws_json1_1DescribeTagsCommand = async (output, context) => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_1DescribeTagsCommandError(output, context);
  }
  const data = await parseBody(output.body, context);
  let contents = {};
  contents = deserializeAws_json1_1DescribeTagsResponse(data, context);
  const response = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};
exports.deserializeAws_json1_1DescribeTagsCommand = deserializeAws_json1_1DescribeTagsCommand;
const deserializeAws_json1_1DescribeTagsCommandError = async (output, context) => {
  const parsedOutput = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response;
  let errorCode = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AuthorizationErrorException":
    case "com.amazonaws.applicationdiscoveryservice#AuthorizationErrorException":
      response = {
        ...(await deserializeAws_json1_1AuthorizationErrorExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "HomeRegionNotSetException":
    case "com.amazonaws.applicationdiscoveryservice#HomeRegionNotSetException":
      response = {
        ...(await deserializeAws_json1_1HomeRegionNotSetExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InvalidParameterException":
    case "com.amazonaws.applicationdiscoveryservice#InvalidParameterException":
      response = {
        ...(await deserializeAws_json1_1InvalidParameterExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InvalidParameterValueException":
    case "com.amazonaws.applicationdiscoveryservice#InvalidParameterValueException":
      response = {
        ...(await deserializeAws_json1_1InvalidParameterValueExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ResourceNotFoundException":
    case "com.amazonaws.applicationdiscoveryservice#ResourceNotFoundException":
      response = {
        ...(await deserializeAws_json1_1ResourceNotFoundExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ServerInternalErrorException":
    case "com.amazonaws.applicationdiscoveryservice#ServerInternalErrorException":
      response = {
        ...(await deserializeAws_json1_1ServerInternalErrorExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    default:
      const parsedBody = parsedOutput.body;
      errorCode = parsedBody.code || parsedBody.Code || errorCode;
      response = {
        ...parsedBody,
        name: `${errorCode}`,
        message: parsedBody.message || parsedBody.Message || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output),
      };
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
};
const deserializeAws_json1_1DisassociateConfigurationItemsFromApplicationCommand = async (output, context) => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_1DisassociateConfigurationItemsFromApplicationCommandError(output, context);
  }
  const data = await parseBody(output.body, context);
  let contents = {};
  contents = deserializeAws_json1_1DisassociateConfigurationItemsFromApplicationResponse(data, context);
  const response = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};
exports.deserializeAws_json1_1DisassociateConfigurationItemsFromApplicationCommand =
  deserializeAws_json1_1DisassociateConfigurationItemsFromApplicationCommand;
const deserializeAws_json1_1DisassociateConfigurationItemsFromApplicationCommandError = async (output, context) => {
  const parsedOutput = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response;
  let errorCode = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AuthorizationErrorException":
    case "com.amazonaws.applicationdiscoveryservice#AuthorizationErrorException":
      response = {
        ...(await deserializeAws_json1_1AuthorizationErrorExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "HomeRegionNotSetException":
    case "com.amazonaws.applicationdiscoveryservice#HomeRegionNotSetException":
      response = {
        ...(await deserializeAws_json1_1HomeRegionNotSetExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InvalidParameterException":
    case "com.amazonaws.applicationdiscoveryservice#InvalidParameterException":
      response = {
        ...(await deserializeAws_json1_1InvalidParameterExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InvalidParameterValueException":
    case "com.amazonaws.applicationdiscoveryservice#InvalidParameterValueException":
      response = {
        ...(await deserializeAws_json1_1InvalidParameterValueExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ServerInternalErrorException":
    case "com.amazonaws.applicationdiscoveryservice#ServerInternalErrorException":
      response = {
        ...(await deserializeAws_json1_1ServerInternalErrorExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    default:
      const parsedBody = parsedOutput.body;
      errorCode = parsedBody.code || parsedBody.Code || errorCode;
      response = {
        ...parsedBody,
        name: `${errorCode}`,
        message: parsedBody.message || parsedBody.Message || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output),
      };
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
};
const deserializeAws_json1_1ExportConfigurationsCommand = async (output, context) => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_1ExportConfigurationsCommandError(output, context);
  }
  const data = await parseBody(output.body, context);
  let contents = {};
  contents = deserializeAws_json1_1ExportConfigurationsResponse(data, context);
  const response = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};
exports.deserializeAws_json1_1ExportConfigurationsCommand = deserializeAws_json1_1ExportConfigurationsCommand;
const deserializeAws_json1_1ExportConfigurationsCommandError = async (output, context) => {
  const parsedOutput = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response;
  let errorCode = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AuthorizationErrorException":
    case "com.amazonaws.applicationdiscoveryservice#AuthorizationErrorException":
      response = {
        ...(await deserializeAws_json1_1AuthorizationErrorExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "HomeRegionNotSetException":
    case "com.amazonaws.applicationdiscoveryservice#HomeRegionNotSetException":
      response = {
        ...(await deserializeAws_json1_1HomeRegionNotSetExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InvalidParameterException":
    case "com.amazonaws.applicationdiscoveryservice#InvalidParameterException":
      response = {
        ...(await deserializeAws_json1_1InvalidParameterExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InvalidParameterValueException":
    case "com.amazonaws.applicationdiscoveryservice#InvalidParameterValueException":
      response = {
        ...(await deserializeAws_json1_1InvalidParameterValueExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "OperationNotPermittedException":
    case "com.amazonaws.applicationdiscoveryservice#OperationNotPermittedException":
      response = {
        ...(await deserializeAws_json1_1OperationNotPermittedExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ServerInternalErrorException":
    case "com.amazonaws.applicationdiscoveryservice#ServerInternalErrorException":
      response = {
        ...(await deserializeAws_json1_1ServerInternalErrorExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    default:
      const parsedBody = parsedOutput.body;
      errorCode = parsedBody.code || parsedBody.Code || errorCode;
      response = {
        ...parsedBody,
        name: `${errorCode}`,
        message: parsedBody.message || parsedBody.Message || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output),
      };
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
};
const deserializeAws_json1_1GetDiscoverySummaryCommand = async (output, context) => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_1GetDiscoverySummaryCommandError(output, context);
  }
  const data = await parseBody(output.body, context);
  let contents = {};
  contents = deserializeAws_json1_1GetDiscoverySummaryResponse(data, context);
  const response = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};
exports.deserializeAws_json1_1GetDiscoverySummaryCommand = deserializeAws_json1_1GetDiscoverySummaryCommand;
const deserializeAws_json1_1GetDiscoverySummaryCommandError = async (output, context) => {
  const parsedOutput = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response;
  let errorCode = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AuthorizationErrorException":
    case "com.amazonaws.applicationdiscoveryservice#AuthorizationErrorException":
      response = {
        ...(await deserializeAws_json1_1AuthorizationErrorExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "HomeRegionNotSetException":
    case "com.amazonaws.applicationdiscoveryservice#HomeRegionNotSetException":
      response = {
        ...(await deserializeAws_json1_1HomeRegionNotSetExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InvalidParameterException":
    case "com.amazonaws.applicationdiscoveryservice#InvalidParameterException":
      response = {
        ...(await deserializeAws_json1_1InvalidParameterExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InvalidParameterValueException":
    case "com.amazonaws.applicationdiscoveryservice#InvalidParameterValueException":
      response = {
        ...(await deserializeAws_json1_1InvalidParameterValueExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ServerInternalErrorException":
    case "com.amazonaws.applicationdiscoveryservice#ServerInternalErrorException":
      response = {
        ...(await deserializeAws_json1_1ServerInternalErrorExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    default:
      const parsedBody = parsedOutput.body;
      errorCode = parsedBody.code || parsedBody.Code || errorCode;
      response = {
        ...parsedBody,
        name: `${errorCode}`,
        message: parsedBody.message || parsedBody.Message || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output),
      };
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
};
const deserializeAws_json1_1ListConfigurationsCommand = async (output, context) => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_1ListConfigurationsCommandError(output, context);
  }
  const data = await parseBody(output.body, context);
  let contents = {};
  contents = deserializeAws_json1_1ListConfigurationsResponse(data, context);
  const response = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};
exports.deserializeAws_json1_1ListConfigurationsCommand = deserializeAws_json1_1ListConfigurationsCommand;
const deserializeAws_json1_1ListConfigurationsCommandError = async (output, context) => {
  const parsedOutput = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response;
  let errorCode = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AuthorizationErrorException":
    case "com.amazonaws.applicationdiscoveryservice#AuthorizationErrorException":
      response = {
        ...(await deserializeAws_json1_1AuthorizationErrorExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "HomeRegionNotSetException":
    case "com.amazonaws.applicationdiscoveryservice#HomeRegionNotSetException":
      response = {
        ...(await deserializeAws_json1_1HomeRegionNotSetExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InvalidParameterException":
    case "com.amazonaws.applicationdiscoveryservice#InvalidParameterException":
      response = {
        ...(await deserializeAws_json1_1InvalidParameterExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InvalidParameterValueException":
    case "com.amazonaws.applicationdiscoveryservice#InvalidParameterValueException":
      response = {
        ...(await deserializeAws_json1_1InvalidParameterValueExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ResourceNotFoundException":
    case "com.amazonaws.applicationdiscoveryservice#ResourceNotFoundException":
      response = {
        ...(await deserializeAws_json1_1ResourceNotFoundExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ServerInternalErrorException":
    case "com.amazonaws.applicationdiscoveryservice#ServerInternalErrorException":
      response = {
        ...(await deserializeAws_json1_1ServerInternalErrorExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    default:
      const parsedBody = parsedOutput.body;
      errorCode = parsedBody.code || parsedBody.Code || errorCode;
      response = {
        ...parsedBody,
        name: `${errorCode}`,
        message: parsedBody.message || parsedBody.Message || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output),
      };
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
};
const deserializeAws_json1_1ListServerNeighborsCommand = async (output, context) => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_1ListServerNeighborsCommandError(output, context);
  }
  const data = await parseBody(output.body, context);
  let contents = {};
  contents = deserializeAws_json1_1ListServerNeighborsResponse(data, context);
  const response = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};
exports.deserializeAws_json1_1ListServerNeighborsCommand = deserializeAws_json1_1ListServerNeighborsCommand;
const deserializeAws_json1_1ListServerNeighborsCommandError = async (output, context) => {
  const parsedOutput = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response;
  let errorCode = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AuthorizationErrorException":
    case "com.amazonaws.applicationdiscoveryservice#AuthorizationErrorException":
      response = {
        ...(await deserializeAws_json1_1AuthorizationErrorExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "HomeRegionNotSetException":
    case "com.amazonaws.applicationdiscoveryservice#HomeRegionNotSetException":
      response = {
        ...(await deserializeAws_json1_1HomeRegionNotSetExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InvalidParameterException":
    case "com.amazonaws.applicationdiscoveryservice#InvalidParameterException":
      response = {
        ...(await deserializeAws_json1_1InvalidParameterExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InvalidParameterValueException":
    case "com.amazonaws.applicationdiscoveryservice#InvalidParameterValueException":
      response = {
        ...(await deserializeAws_json1_1InvalidParameterValueExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ServerInternalErrorException":
    case "com.amazonaws.applicationdiscoveryservice#ServerInternalErrorException":
      response = {
        ...(await deserializeAws_json1_1ServerInternalErrorExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    default:
      const parsedBody = parsedOutput.body;
      errorCode = parsedBody.code || parsedBody.Code || errorCode;
      response = {
        ...parsedBody,
        name: `${errorCode}`,
        message: parsedBody.message || parsedBody.Message || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output),
      };
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
};
const deserializeAws_json1_1StartContinuousExportCommand = async (output, context) => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_1StartContinuousExportCommandError(output, context);
  }
  const data = await parseBody(output.body, context);
  let contents = {};
  contents = deserializeAws_json1_1StartContinuousExportResponse(data, context);
  const response = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};
exports.deserializeAws_json1_1StartContinuousExportCommand = deserializeAws_json1_1StartContinuousExportCommand;
const deserializeAws_json1_1StartContinuousExportCommandError = async (output, context) => {
  const parsedOutput = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response;
  let errorCode = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AuthorizationErrorException":
    case "com.amazonaws.applicationdiscoveryservice#AuthorizationErrorException":
      response = {
        ...(await deserializeAws_json1_1AuthorizationErrorExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ConflictErrorException":
    case "com.amazonaws.applicationdiscoveryservice#ConflictErrorException":
      response = {
        ...(await deserializeAws_json1_1ConflictErrorExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "HomeRegionNotSetException":
    case "com.amazonaws.applicationdiscoveryservice#HomeRegionNotSetException":
      response = {
        ...(await deserializeAws_json1_1HomeRegionNotSetExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InvalidParameterException":
    case "com.amazonaws.applicationdiscoveryservice#InvalidParameterException":
      response = {
        ...(await deserializeAws_json1_1InvalidParameterExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InvalidParameterValueException":
    case "com.amazonaws.applicationdiscoveryservice#InvalidParameterValueException":
      response = {
        ...(await deserializeAws_json1_1InvalidParameterValueExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "OperationNotPermittedException":
    case "com.amazonaws.applicationdiscoveryservice#OperationNotPermittedException":
      response = {
        ...(await deserializeAws_json1_1OperationNotPermittedExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ResourceInUseException":
    case "com.amazonaws.applicationdiscoveryservice#ResourceInUseException":
      response = {
        ...(await deserializeAws_json1_1ResourceInUseExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ServerInternalErrorException":
    case "com.amazonaws.applicationdiscoveryservice#ServerInternalErrorException":
      response = {
        ...(await deserializeAws_json1_1ServerInternalErrorExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    default:
      const parsedBody = parsedOutput.body;
      errorCode = parsedBody.code || parsedBody.Code || errorCode;
      response = {
        ...parsedBody,
        name: `${errorCode}`,
        message: parsedBody.message || parsedBody.Message || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output),
      };
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
};
const deserializeAws_json1_1StartDataCollectionByAgentIdsCommand = async (output, context) => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_1StartDataCollectionByAgentIdsCommandError(output, context);
  }
  const data = await parseBody(output.body, context);
  let contents = {};
  contents = deserializeAws_json1_1StartDataCollectionByAgentIdsResponse(data, context);
  const response = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};
exports.deserializeAws_json1_1StartDataCollectionByAgentIdsCommand =
  deserializeAws_json1_1StartDataCollectionByAgentIdsCommand;
const deserializeAws_json1_1StartDataCollectionByAgentIdsCommandError = async (output, context) => {
  const parsedOutput = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response;
  let errorCode = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AuthorizationErrorException":
    case "com.amazonaws.applicationdiscoveryservice#AuthorizationErrorException":
      response = {
        ...(await deserializeAws_json1_1AuthorizationErrorExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "HomeRegionNotSetException":
    case "com.amazonaws.applicationdiscoveryservice#HomeRegionNotSetException":
      response = {
        ...(await deserializeAws_json1_1HomeRegionNotSetExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InvalidParameterException":
    case "com.amazonaws.applicationdiscoveryservice#InvalidParameterException":
      response = {
        ...(await deserializeAws_json1_1InvalidParameterExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InvalidParameterValueException":
    case "com.amazonaws.applicationdiscoveryservice#InvalidParameterValueException":
      response = {
        ...(await deserializeAws_json1_1InvalidParameterValueExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ServerInternalErrorException":
    case "com.amazonaws.applicationdiscoveryservice#ServerInternalErrorException":
      response = {
        ...(await deserializeAws_json1_1ServerInternalErrorExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    default:
      const parsedBody = parsedOutput.body;
      errorCode = parsedBody.code || parsedBody.Code || errorCode;
      response = {
        ...parsedBody,
        name: `${errorCode}`,
        message: parsedBody.message || parsedBody.Message || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output),
      };
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
};
const deserializeAws_json1_1StartExportTaskCommand = async (output, context) => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_1StartExportTaskCommandError(output, context);
  }
  const data = await parseBody(output.body, context);
  let contents = {};
  contents = deserializeAws_json1_1StartExportTaskResponse(data, context);
  const response = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};
exports.deserializeAws_json1_1StartExportTaskCommand = deserializeAws_json1_1StartExportTaskCommand;
const deserializeAws_json1_1StartExportTaskCommandError = async (output, context) => {
  const parsedOutput = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response;
  let errorCode = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AuthorizationErrorException":
    case "com.amazonaws.applicationdiscoveryservice#AuthorizationErrorException":
      response = {
        ...(await deserializeAws_json1_1AuthorizationErrorExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "HomeRegionNotSetException":
    case "com.amazonaws.applicationdiscoveryservice#HomeRegionNotSetException":
      response = {
        ...(await deserializeAws_json1_1HomeRegionNotSetExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InvalidParameterException":
    case "com.amazonaws.applicationdiscoveryservice#InvalidParameterException":
      response = {
        ...(await deserializeAws_json1_1InvalidParameterExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InvalidParameterValueException":
    case "com.amazonaws.applicationdiscoveryservice#InvalidParameterValueException":
      response = {
        ...(await deserializeAws_json1_1InvalidParameterValueExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "OperationNotPermittedException":
    case "com.amazonaws.applicationdiscoveryservice#OperationNotPermittedException":
      response = {
        ...(await deserializeAws_json1_1OperationNotPermittedExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ServerInternalErrorException":
    case "com.amazonaws.applicationdiscoveryservice#ServerInternalErrorException":
      response = {
        ...(await deserializeAws_json1_1ServerInternalErrorExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    default:
      const parsedBody = parsedOutput.body;
      errorCode = parsedBody.code || parsedBody.Code || errorCode;
      response = {
        ...parsedBody,
        name: `${errorCode}`,
        message: parsedBody.message || parsedBody.Message || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output),
      };
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
};
const deserializeAws_json1_1StartImportTaskCommand = async (output, context) => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_1StartImportTaskCommandError(output, context);
  }
  const data = await parseBody(output.body, context);
  let contents = {};
  contents = deserializeAws_json1_1StartImportTaskResponse(data, context);
  const response = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};
exports.deserializeAws_json1_1StartImportTaskCommand = deserializeAws_json1_1StartImportTaskCommand;
const deserializeAws_json1_1StartImportTaskCommandError = async (output, context) => {
  const parsedOutput = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response;
  let errorCode = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AuthorizationErrorException":
    case "com.amazonaws.applicationdiscoveryservice#AuthorizationErrorException":
      response = {
        ...(await deserializeAws_json1_1AuthorizationErrorExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "HomeRegionNotSetException":
    case "com.amazonaws.applicationdiscoveryservice#HomeRegionNotSetException":
      response = {
        ...(await deserializeAws_json1_1HomeRegionNotSetExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InvalidParameterException":
    case "com.amazonaws.applicationdiscoveryservice#InvalidParameterException":
      response = {
        ...(await deserializeAws_json1_1InvalidParameterExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InvalidParameterValueException":
    case "com.amazonaws.applicationdiscoveryservice#InvalidParameterValueException":
      response = {
        ...(await deserializeAws_json1_1InvalidParameterValueExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ResourceInUseException":
    case "com.amazonaws.applicationdiscoveryservice#ResourceInUseException":
      response = {
        ...(await deserializeAws_json1_1ResourceInUseExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ServerInternalErrorException":
    case "com.amazonaws.applicationdiscoveryservice#ServerInternalErrorException":
      response = {
        ...(await deserializeAws_json1_1ServerInternalErrorExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    default:
      const parsedBody = parsedOutput.body;
      errorCode = parsedBody.code || parsedBody.Code || errorCode;
      response = {
        ...parsedBody,
        name: `${errorCode}`,
        message: parsedBody.message || parsedBody.Message || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output),
      };
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
};
const deserializeAws_json1_1StopContinuousExportCommand = async (output, context) => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_1StopContinuousExportCommandError(output, context);
  }
  const data = await parseBody(output.body, context);
  let contents = {};
  contents = deserializeAws_json1_1StopContinuousExportResponse(data, context);
  const response = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};
exports.deserializeAws_json1_1StopContinuousExportCommand = deserializeAws_json1_1StopContinuousExportCommand;
const deserializeAws_json1_1StopContinuousExportCommandError = async (output, context) => {
  const parsedOutput = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response;
  let errorCode = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AuthorizationErrorException":
    case "com.amazonaws.applicationdiscoveryservice#AuthorizationErrorException":
      response = {
        ...(await deserializeAws_json1_1AuthorizationErrorExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "HomeRegionNotSetException":
    case "com.amazonaws.applicationdiscoveryservice#HomeRegionNotSetException":
      response = {
        ...(await deserializeAws_json1_1HomeRegionNotSetExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InvalidParameterException":
    case "com.amazonaws.applicationdiscoveryservice#InvalidParameterException":
      response = {
        ...(await deserializeAws_json1_1InvalidParameterExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InvalidParameterValueException":
    case "com.amazonaws.applicationdiscoveryservice#InvalidParameterValueException":
      response = {
        ...(await deserializeAws_json1_1InvalidParameterValueExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "OperationNotPermittedException":
    case "com.amazonaws.applicationdiscoveryservice#OperationNotPermittedException":
      response = {
        ...(await deserializeAws_json1_1OperationNotPermittedExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ResourceInUseException":
    case "com.amazonaws.applicationdiscoveryservice#ResourceInUseException":
      response = {
        ...(await deserializeAws_json1_1ResourceInUseExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ResourceNotFoundException":
    case "com.amazonaws.applicationdiscoveryservice#ResourceNotFoundException":
      response = {
        ...(await deserializeAws_json1_1ResourceNotFoundExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ServerInternalErrorException":
    case "com.amazonaws.applicationdiscoveryservice#ServerInternalErrorException":
      response = {
        ...(await deserializeAws_json1_1ServerInternalErrorExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    default:
      const parsedBody = parsedOutput.body;
      errorCode = parsedBody.code || parsedBody.Code || errorCode;
      response = {
        ...parsedBody,
        name: `${errorCode}`,
        message: parsedBody.message || parsedBody.Message || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output),
      };
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
};
const deserializeAws_json1_1StopDataCollectionByAgentIdsCommand = async (output, context) => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_1StopDataCollectionByAgentIdsCommandError(output, context);
  }
  const data = await parseBody(output.body, context);
  let contents = {};
  contents = deserializeAws_json1_1StopDataCollectionByAgentIdsResponse(data, context);
  const response = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};
exports.deserializeAws_json1_1StopDataCollectionByAgentIdsCommand =
  deserializeAws_json1_1StopDataCollectionByAgentIdsCommand;
const deserializeAws_json1_1StopDataCollectionByAgentIdsCommandError = async (output, context) => {
  const parsedOutput = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response;
  let errorCode = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AuthorizationErrorException":
    case "com.amazonaws.applicationdiscoveryservice#AuthorizationErrorException":
      response = {
        ...(await deserializeAws_json1_1AuthorizationErrorExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "HomeRegionNotSetException":
    case "com.amazonaws.applicationdiscoveryservice#HomeRegionNotSetException":
      response = {
        ...(await deserializeAws_json1_1HomeRegionNotSetExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InvalidParameterException":
    case "com.amazonaws.applicationdiscoveryservice#InvalidParameterException":
      response = {
        ...(await deserializeAws_json1_1InvalidParameterExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InvalidParameterValueException":
    case "com.amazonaws.applicationdiscoveryservice#InvalidParameterValueException":
      response = {
        ...(await deserializeAws_json1_1InvalidParameterValueExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ServerInternalErrorException":
    case "com.amazonaws.applicationdiscoveryservice#ServerInternalErrorException":
      response = {
        ...(await deserializeAws_json1_1ServerInternalErrorExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    default:
      const parsedBody = parsedOutput.body;
      errorCode = parsedBody.code || parsedBody.Code || errorCode;
      response = {
        ...parsedBody,
        name: `${errorCode}`,
        message: parsedBody.message || parsedBody.Message || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output),
      };
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
};
const deserializeAws_json1_1UpdateApplicationCommand = async (output, context) => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_1UpdateApplicationCommandError(output, context);
  }
  const data = await parseBody(output.body, context);
  let contents = {};
  contents = deserializeAws_json1_1UpdateApplicationResponse(data, context);
  const response = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};
exports.deserializeAws_json1_1UpdateApplicationCommand = deserializeAws_json1_1UpdateApplicationCommand;
const deserializeAws_json1_1UpdateApplicationCommandError = async (output, context) => {
  const parsedOutput = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response;
  let errorCode = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AuthorizationErrorException":
    case "com.amazonaws.applicationdiscoveryservice#AuthorizationErrorException":
      response = {
        ...(await deserializeAws_json1_1AuthorizationErrorExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "HomeRegionNotSetException":
    case "com.amazonaws.applicationdiscoveryservice#HomeRegionNotSetException":
      response = {
        ...(await deserializeAws_json1_1HomeRegionNotSetExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InvalidParameterException":
    case "com.amazonaws.applicationdiscoveryservice#InvalidParameterException":
      response = {
        ...(await deserializeAws_json1_1InvalidParameterExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InvalidParameterValueException":
    case "com.amazonaws.applicationdiscoveryservice#InvalidParameterValueException":
      response = {
        ...(await deserializeAws_json1_1InvalidParameterValueExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ServerInternalErrorException":
    case "com.amazonaws.applicationdiscoveryservice#ServerInternalErrorException":
      response = {
        ...(await deserializeAws_json1_1ServerInternalErrorExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    default:
      const parsedBody = parsedOutput.body;
      errorCode = parsedBody.code || parsedBody.Code || errorCode;
      response = {
        ...parsedBody,
        name: `${errorCode}`,
        message: parsedBody.message || parsedBody.Message || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output),
      };
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
};
const deserializeAws_json1_1AuthorizationErrorExceptionResponse = async (parsedOutput, context) => {
  const body = parsedOutput.body;
  const deserialized = deserializeAws_json1_1AuthorizationErrorException(body, context);
  const contents = {
    name: "AuthorizationErrorException",
    $fault: "client",
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  };
  return contents;
};
const deserializeAws_json1_1ConflictErrorExceptionResponse = async (parsedOutput, context) => {
  const body = parsedOutput.body;
  const deserialized = deserializeAws_json1_1ConflictErrorException(body, context);
  const contents = {
    name: "ConflictErrorException",
    $fault: "client",
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  };
  return contents;
};
const deserializeAws_json1_1HomeRegionNotSetExceptionResponse = async (parsedOutput, context) => {
  const body = parsedOutput.body;
  const deserialized = deserializeAws_json1_1HomeRegionNotSetException(body, context);
  const contents = {
    name: "HomeRegionNotSetException",
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
const deserializeAws_json1_1OperationNotPermittedExceptionResponse = async (parsedOutput, context) => {
  const body = parsedOutput.body;
  const deserialized = deserializeAws_json1_1OperationNotPermittedException(body, context);
  const contents = {
    name: "OperationNotPermittedException",
    $fault: "client",
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  };
  return contents;
};
const deserializeAws_json1_1ResourceInUseExceptionResponse = async (parsedOutput, context) => {
  const body = parsedOutput.body;
  const deserialized = deserializeAws_json1_1ResourceInUseException(body, context);
  const contents = {
    name: "ResourceInUseException",
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
const deserializeAws_json1_1ServerInternalErrorExceptionResponse = async (parsedOutput, context) => {
  const body = parsedOutput.body;
  const deserialized = deserializeAws_json1_1ServerInternalErrorException(body, context);
  const contents = {
    name: "ServerInternalErrorException",
    $fault: "server",
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  };
  return contents;
};
const serializeAws_json1_1AgentIds = (input, context) => {
  return input
    .filter((e) => e != null)
    .map((entry) => {
      if (entry === null) {
        return null;
      }
      return entry;
    });
};
const serializeAws_json1_1ApplicationIdsList = (input, context) => {
  return input
    .filter((e) => e != null)
    .map((entry) => {
      if (entry === null) {
        return null;
      }
      return entry;
    });
};
const serializeAws_json1_1AssociateConfigurationItemsToApplicationRequest = (input, context) => {
  return {
    ...(input.applicationConfigurationId !== undefined &&
      input.applicationConfigurationId !== null && { applicationConfigurationId: input.applicationConfigurationId }),
    ...(input.configurationIds !== undefined &&
      input.configurationIds !== null && {
        configurationIds: serializeAws_json1_1ConfigurationIdList(input.configurationIds, context),
      }),
  };
};
const serializeAws_json1_1BatchDeleteImportDataRequest = (input, context) => {
  return {
    ...(input.importTaskIds !== undefined &&
      input.importTaskIds !== null && {
        importTaskIds: serializeAws_json1_1ToDeleteIdentifierList(input.importTaskIds, context),
      }),
  };
};
const serializeAws_json1_1ConfigurationIdList = (input, context) => {
  return input
    .filter((e) => e != null)
    .map((entry) => {
      if (entry === null) {
        return null;
      }
      return entry;
    });
};
const serializeAws_json1_1ContinuousExportIds = (input, context) => {
  return input
    .filter((e) => e != null)
    .map((entry) => {
      if (entry === null) {
        return null;
      }
      return entry;
    });
};
const serializeAws_json1_1CreateApplicationRequest = (input, context) => {
  return {
    ...(input.description !== undefined && input.description !== null && { description: input.description }),
    ...(input.name !== undefined && input.name !== null && { name: input.name }),
  };
};
const serializeAws_json1_1CreateTagsRequest = (input, context) => {
  return {
    ...(input.configurationIds !== undefined &&
      input.configurationIds !== null && {
        configurationIds: serializeAws_json1_1ConfigurationIdList(input.configurationIds, context),
      }),
    ...(input.tags !== undefined && input.tags !== null && { tags: serializeAws_json1_1TagSet(input.tags, context) }),
  };
};
const serializeAws_json1_1DeleteApplicationsRequest = (input, context) => {
  return {
    ...(input.configurationIds !== undefined &&
      input.configurationIds !== null && {
        configurationIds: serializeAws_json1_1ApplicationIdsList(input.configurationIds, context),
      }),
  };
};
const serializeAws_json1_1DeleteTagsRequest = (input, context) => {
  return {
    ...(input.configurationIds !== undefined &&
      input.configurationIds !== null && {
        configurationIds: serializeAws_json1_1ConfigurationIdList(input.configurationIds, context),
      }),
    ...(input.tags !== undefined && input.tags !== null && { tags: serializeAws_json1_1TagSet(input.tags, context) }),
  };
};
const serializeAws_json1_1DescribeAgentsRequest = (input, context) => {
  return {
    ...(input.agentIds !== undefined &&
      input.agentIds !== null && { agentIds: serializeAws_json1_1AgentIds(input.agentIds, context) }),
    ...(input.filters !== undefined &&
      input.filters !== null && { filters: serializeAws_json1_1Filters(input.filters, context) }),
    ...(input.maxResults !== undefined && input.maxResults !== null && { maxResults: input.maxResults }),
    ...(input.nextToken !== undefined && input.nextToken !== null && { nextToken: input.nextToken }),
  };
};
const serializeAws_json1_1DescribeConfigurationsRequest = (input, context) => {
  return {
    ...(input.configurationIds !== undefined &&
      input.configurationIds !== null && {
        configurationIds: serializeAws_json1_1ConfigurationIdList(input.configurationIds, context),
      }),
  };
};
const serializeAws_json1_1DescribeContinuousExportsRequest = (input, context) => {
  return {
    ...(input.exportIds !== undefined &&
      input.exportIds !== null && { exportIds: serializeAws_json1_1ContinuousExportIds(input.exportIds, context) }),
    ...(input.maxResults !== undefined && input.maxResults !== null && { maxResults: input.maxResults }),
    ...(input.nextToken !== undefined && input.nextToken !== null && { nextToken: input.nextToken }),
  };
};
const serializeAws_json1_1DescribeExportConfigurationsRequest = (input, context) => {
  return {
    ...(input.exportIds !== undefined &&
      input.exportIds !== null && { exportIds: serializeAws_json1_1ExportIds(input.exportIds, context) }),
    ...(input.maxResults !== undefined && input.maxResults !== null && { maxResults: input.maxResults }),
    ...(input.nextToken !== undefined && input.nextToken !== null && { nextToken: input.nextToken }),
  };
};
const serializeAws_json1_1DescribeExportTasksRequest = (input, context) => {
  return {
    ...(input.exportIds !== undefined &&
      input.exportIds !== null && { exportIds: serializeAws_json1_1ExportIds(input.exportIds, context) }),
    ...(input.filters !== undefined &&
      input.filters !== null && { filters: serializeAws_json1_1ExportFilters(input.filters, context) }),
    ...(input.maxResults !== undefined && input.maxResults !== null && { maxResults: input.maxResults }),
    ...(input.nextToken !== undefined && input.nextToken !== null && { nextToken: input.nextToken }),
  };
};
const serializeAws_json1_1DescribeImportTasksFilterList = (input, context) => {
  return input
    .filter((e) => e != null)
    .map((entry) => {
      if (entry === null) {
        return null;
      }
      return serializeAws_json1_1ImportTaskFilter(entry, context);
    });
};
const serializeAws_json1_1DescribeImportTasksRequest = (input, context) => {
  return {
    ...(input.filters !== undefined &&
      input.filters !== null && { filters: serializeAws_json1_1DescribeImportTasksFilterList(input.filters, context) }),
    ...(input.maxResults !== undefined && input.maxResults !== null && { maxResults: input.maxResults }),
    ...(input.nextToken !== undefined && input.nextToken !== null && { nextToken: input.nextToken }),
  };
};
const serializeAws_json1_1DescribeTagsRequest = (input, context) => {
  return {
    ...(input.filters !== undefined &&
      input.filters !== null && { filters: serializeAws_json1_1TagFilters(input.filters, context) }),
    ...(input.maxResults !== undefined && input.maxResults !== null && { maxResults: input.maxResults }),
    ...(input.nextToken !== undefined && input.nextToken !== null && { nextToken: input.nextToken }),
  };
};
const serializeAws_json1_1DisassociateConfigurationItemsFromApplicationRequest = (input, context) => {
  return {
    ...(input.applicationConfigurationId !== undefined &&
      input.applicationConfigurationId !== null && { applicationConfigurationId: input.applicationConfigurationId }),
    ...(input.configurationIds !== undefined &&
      input.configurationIds !== null && {
        configurationIds: serializeAws_json1_1ConfigurationIdList(input.configurationIds, context),
      }),
  };
};
const serializeAws_json1_1ExportDataFormats = (input, context) => {
  return input
    .filter((e) => e != null)
    .map((entry) => {
      if (entry === null) {
        return null;
      }
      return entry;
    });
};
const serializeAws_json1_1ExportFilter = (input, context) => {
  return {
    ...(input.condition !== undefined && input.condition !== null && { condition: input.condition }),
    ...(input.name !== undefined && input.name !== null && { name: input.name }),
    ...(input.values !== undefined &&
      input.values !== null && { values: serializeAws_json1_1FilterValues(input.values, context) }),
  };
};
const serializeAws_json1_1ExportFilters = (input, context) => {
  return input
    .filter((e) => e != null)
    .map((entry) => {
      if (entry === null) {
        return null;
      }
      return serializeAws_json1_1ExportFilter(entry, context);
    });
};
const serializeAws_json1_1ExportIds = (input, context) => {
  return input
    .filter((e) => e != null)
    .map((entry) => {
      if (entry === null) {
        return null;
      }
      return entry;
    });
};
const serializeAws_json1_1Filter = (input, context) => {
  return {
    ...(input.condition !== undefined && input.condition !== null && { condition: input.condition }),
    ...(input.name !== undefined && input.name !== null && { name: input.name }),
    ...(input.values !== undefined &&
      input.values !== null && { values: serializeAws_json1_1FilterValues(input.values, context) }),
  };
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
const serializeAws_json1_1GetDiscoverySummaryRequest = (input, context) => {
  return {};
};
const serializeAws_json1_1ImportTaskFilter = (input, context) => {
  return {
    ...(input.name !== undefined && input.name !== null && { name: input.name }),
    ...(input.values !== undefined &&
      input.values !== null && { values: serializeAws_json1_1ImportTaskFilterValueList(input.values, context) }),
  };
};
const serializeAws_json1_1ImportTaskFilterValueList = (input, context) => {
  return input
    .filter((e) => e != null)
    .map((entry) => {
      if (entry === null) {
        return null;
      }
      return entry;
    });
};
const serializeAws_json1_1ListConfigurationsRequest = (input, context) => {
  return {
    ...(input.configurationType !== undefined &&
      input.configurationType !== null && { configurationType: input.configurationType }),
    ...(input.filters !== undefined &&
      input.filters !== null && { filters: serializeAws_json1_1Filters(input.filters, context) }),
    ...(input.maxResults !== undefined && input.maxResults !== null && { maxResults: input.maxResults }),
    ...(input.nextToken !== undefined && input.nextToken !== null && { nextToken: input.nextToken }),
    ...(input.orderBy !== undefined &&
      input.orderBy !== null && { orderBy: serializeAws_json1_1OrderByList(input.orderBy, context) }),
  };
};
const serializeAws_json1_1ListServerNeighborsRequest = (input, context) => {
  return {
    ...(input.configurationId !== undefined &&
      input.configurationId !== null && { configurationId: input.configurationId }),
    ...(input.maxResults !== undefined && input.maxResults !== null && { maxResults: input.maxResults }),
    ...(input.neighborConfigurationIds !== undefined &&
      input.neighborConfigurationIds !== null && {
        neighborConfigurationIds: serializeAws_json1_1ConfigurationIdList(input.neighborConfigurationIds, context),
      }),
    ...(input.nextToken !== undefined && input.nextToken !== null && { nextToken: input.nextToken }),
    ...(input.portInformationNeeded !== undefined &&
      input.portInformationNeeded !== null && { portInformationNeeded: input.portInformationNeeded }),
  };
};
const serializeAws_json1_1OrderByElement = (input, context) => {
  return {
    ...(input.fieldName !== undefined && input.fieldName !== null && { fieldName: input.fieldName }),
    ...(input.sortOrder !== undefined && input.sortOrder !== null && { sortOrder: input.sortOrder }),
  };
};
const serializeAws_json1_1OrderByList = (input, context) => {
  return input
    .filter((e) => e != null)
    .map((entry) => {
      if (entry === null) {
        return null;
      }
      return serializeAws_json1_1OrderByElement(entry, context);
    });
};
const serializeAws_json1_1StartContinuousExportRequest = (input, context) => {
  return {};
};
const serializeAws_json1_1StartDataCollectionByAgentIdsRequest = (input, context) => {
  return {
    ...(input.agentIds !== undefined &&
      input.agentIds !== null && { agentIds: serializeAws_json1_1AgentIds(input.agentIds, context) }),
  };
};
const serializeAws_json1_1StartExportTaskRequest = (input, context) => {
  return {
    ...(input.endTime !== undefined &&
      input.endTime !== null && { endTime: Math.round(input.endTime.getTime() / 1000) }),
    ...(input.exportDataFormat !== undefined &&
      input.exportDataFormat !== null && {
        exportDataFormat: serializeAws_json1_1ExportDataFormats(input.exportDataFormat, context),
      }),
    ...(input.filters !== undefined &&
      input.filters !== null && { filters: serializeAws_json1_1ExportFilters(input.filters, context) }),
    ...(input.startTime !== undefined &&
      input.startTime !== null && { startTime: Math.round(input.startTime.getTime() / 1000) }),
  };
};
const serializeAws_json1_1StartImportTaskRequest = (input, context) => {
  var _a;
  return {
    clientRequestToken: (_a = input.clientRequestToken) !== null && _a !== void 0 ? _a : uuid_1.v4(),
    ...(input.importUrl !== undefined && input.importUrl !== null && { importUrl: input.importUrl }),
    ...(input.name !== undefined && input.name !== null && { name: input.name }),
  };
};
const serializeAws_json1_1StopContinuousExportRequest = (input, context) => {
  return {
    ...(input.exportId !== undefined && input.exportId !== null && { exportId: input.exportId }),
  };
};
const serializeAws_json1_1StopDataCollectionByAgentIdsRequest = (input, context) => {
  return {
    ...(input.agentIds !== undefined &&
      input.agentIds !== null && { agentIds: serializeAws_json1_1AgentIds(input.agentIds, context) }),
  };
};
const serializeAws_json1_1Tag = (input, context) => {
  return {
    ...(input.key !== undefined && input.key !== null && { key: input.key }),
    ...(input.value !== undefined && input.value !== null && { value: input.value }),
  };
};
const serializeAws_json1_1TagFilter = (input, context) => {
  return {
    ...(input.name !== undefined && input.name !== null && { name: input.name }),
    ...(input.values !== undefined &&
      input.values !== null && { values: serializeAws_json1_1FilterValues(input.values, context) }),
  };
};
const serializeAws_json1_1TagFilters = (input, context) => {
  return input
    .filter((e) => e != null)
    .map((entry) => {
      if (entry === null) {
        return null;
      }
      return serializeAws_json1_1TagFilter(entry, context);
    });
};
const serializeAws_json1_1TagSet = (input, context) => {
  return input
    .filter((e) => e != null)
    .map((entry) => {
      if (entry === null) {
        return null;
      }
      return serializeAws_json1_1Tag(entry, context);
    });
};
const serializeAws_json1_1ToDeleteIdentifierList = (input, context) => {
  return input
    .filter((e) => e != null)
    .map((entry) => {
      if (entry === null) {
        return null;
      }
      return entry;
    });
};
const serializeAws_json1_1UpdateApplicationRequest = (input, context) => {
  return {
    ...(input.configurationId !== undefined &&
      input.configurationId !== null && { configurationId: input.configurationId }),
    ...(input.description !== undefined && input.description !== null && { description: input.description }),
    ...(input.name !== undefined && input.name !== null && { name: input.name }),
  };
};
const deserializeAws_json1_1AgentConfigurationStatus = (output, context) => {
  return {
    agentId: output.agentId !== undefined && output.agentId !== null ? output.agentId : undefined,
    description: output.description !== undefined && output.description !== null ? output.description : undefined,
    operationSucceeded:
      output.operationSucceeded !== undefined && output.operationSucceeded !== null
        ? output.operationSucceeded
        : undefined,
  };
};
const deserializeAws_json1_1AgentConfigurationStatusList = (output, context) => {
  return (output || [])
    .filter((e) => e != null)
    .map((entry) => {
      if (entry === null) {
        return null;
      }
      return deserializeAws_json1_1AgentConfigurationStatus(entry, context);
    });
};
const deserializeAws_json1_1AgentInfo = (output, context) => {
  return {
    agentId: output.agentId !== undefined && output.agentId !== null ? output.agentId : undefined,
    agentNetworkInfoList:
      output.agentNetworkInfoList !== undefined && output.agentNetworkInfoList !== null
        ? deserializeAws_json1_1AgentNetworkInfoList(output.agentNetworkInfoList, context)
        : undefined,
    agentType: output.agentType !== undefined && output.agentType !== null ? output.agentType : undefined,
    collectionStatus:
      output.collectionStatus !== undefined && output.collectionStatus !== null ? output.collectionStatus : undefined,
    connectorId: output.connectorId !== undefined && output.connectorId !== null ? output.connectorId : undefined,
    health: output.health !== undefined && output.health !== null ? output.health : undefined,
    hostName: output.hostName !== undefined && output.hostName !== null ? output.hostName : undefined,
    lastHealthPingTime:
      output.lastHealthPingTime !== undefined && output.lastHealthPingTime !== null
        ? output.lastHealthPingTime
        : undefined,
    registeredTime:
      output.registeredTime !== undefined && output.registeredTime !== null ? output.registeredTime : undefined,
    version: output.version !== undefined && output.version !== null ? output.version : undefined,
  };
};
const deserializeAws_json1_1AgentNetworkInfo = (output, context) => {
  return {
    ipAddress: output.ipAddress !== undefined && output.ipAddress !== null ? output.ipAddress : undefined,
    macAddress: output.macAddress !== undefined && output.macAddress !== null ? output.macAddress : undefined,
  };
};
const deserializeAws_json1_1AgentNetworkInfoList = (output, context) => {
  return (output || [])
    .filter((e) => e != null)
    .map((entry) => {
      if (entry === null) {
        return null;
      }
      return deserializeAws_json1_1AgentNetworkInfo(entry, context);
    });
};
const deserializeAws_json1_1AgentsInfo = (output, context) => {
  return (output || [])
    .filter((e) => e != null)
    .map((entry) => {
      if (entry === null) {
        return null;
      }
      return deserializeAws_json1_1AgentInfo(entry, context);
    });
};
const deserializeAws_json1_1AssociateConfigurationItemsToApplicationResponse = (output, context) => {
  return {};
};
const deserializeAws_json1_1AuthorizationErrorException = (output, context) => {
  return {
    message: output.message !== undefined && output.message !== null ? output.message : undefined,
  };
};
const deserializeAws_json1_1BatchDeleteImportDataError = (output, context) => {
  return {
    errorCode: output.errorCode !== undefined && output.errorCode !== null ? output.errorCode : undefined,
    errorDescription:
      output.errorDescription !== undefined && output.errorDescription !== null ? output.errorDescription : undefined,
    importTaskId: output.importTaskId !== undefined && output.importTaskId !== null ? output.importTaskId : undefined,
  };
};
const deserializeAws_json1_1BatchDeleteImportDataErrorList = (output, context) => {
  return (output || [])
    .filter((e) => e != null)
    .map((entry) => {
      if (entry === null) {
        return null;
      }
      return deserializeAws_json1_1BatchDeleteImportDataError(entry, context);
    });
};
const deserializeAws_json1_1BatchDeleteImportDataResponse = (output, context) => {
  return {
    errors:
      output.errors !== undefined && output.errors !== null
        ? deserializeAws_json1_1BatchDeleteImportDataErrorList(output.errors, context)
        : undefined,
  };
};
const deserializeAws_json1_1Configuration = (output, context) => {
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
const deserializeAws_json1_1Configurations = (output, context) => {
  return (output || [])
    .filter((e) => e != null)
    .map((entry) => {
      if (entry === null) {
        return null;
      }
      return deserializeAws_json1_1Configuration(entry, context);
    });
};
const deserializeAws_json1_1ConfigurationTag = (output, context) => {
  return {
    configurationId:
      output.configurationId !== undefined && output.configurationId !== null ? output.configurationId : undefined,
    configurationType:
      output.configurationType !== undefined && output.configurationType !== null
        ? output.configurationType
        : undefined,
    key: output.key !== undefined && output.key !== null ? output.key : undefined,
    timeOfCreation:
      output.timeOfCreation !== undefined && output.timeOfCreation !== null
        ? new Date(Math.round(output.timeOfCreation * 1000))
        : undefined,
    value: output.value !== undefined && output.value !== null ? output.value : undefined,
  };
};
const deserializeAws_json1_1ConfigurationTagSet = (output, context) => {
  return (output || [])
    .filter((e) => e != null)
    .map((entry) => {
      if (entry === null) {
        return null;
      }
      return deserializeAws_json1_1ConfigurationTag(entry, context);
    });
};
const deserializeAws_json1_1ConflictErrorException = (output, context) => {
  return {
    message: output.message !== undefined && output.message !== null ? output.message : undefined,
  };
};
const deserializeAws_json1_1ContinuousExportDescription = (output, context) => {
  return {
    dataSource: output.dataSource !== undefined && output.dataSource !== null ? output.dataSource : undefined,
    exportId: output.exportId !== undefined && output.exportId !== null ? output.exportId : undefined,
    s3Bucket: output.s3Bucket !== undefined && output.s3Bucket !== null ? output.s3Bucket : undefined,
    schemaStorageConfig:
      output.schemaStorageConfig !== undefined && output.schemaStorageConfig !== null
        ? deserializeAws_json1_1SchemaStorageConfig(output.schemaStorageConfig, context)
        : undefined,
    startTime:
      output.startTime !== undefined && output.startTime !== null
        ? new Date(Math.round(output.startTime * 1000))
        : undefined,
    status: output.status !== undefined && output.status !== null ? output.status : undefined,
    statusDetail: output.statusDetail !== undefined && output.statusDetail !== null ? output.statusDetail : undefined,
    stopTime:
      output.stopTime !== undefined && output.stopTime !== null
        ? new Date(Math.round(output.stopTime * 1000))
        : undefined,
  };
};
const deserializeAws_json1_1ContinuousExportDescriptions = (output, context) => {
  return (output || [])
    .filter((e) => e != null)
    .map((entry) => {
      if (entry === null) {
        return null;
      }
      return deserializeAws_json1_1ContinuousExportDescription(entry, context);
    });
};
const deserializeAws_json1_1CreateApplicationResponse = (output, context) => {
  return {
    configurationId:
      output.configurationId !== undefined && output.configurationId !== null ? output.configurationId : undefined,
  };
};
const deserializeAws_json1_1CreateTagsResponse = (output, context) => {
  return {};
};
const deserializeAws_json1_1CustomerAgentInfo = (output, context) => {
  return {
    activeAgents: output.activeAgents !== undefined && output.activeAgents !== null ? output.activeAgents : undefined,
    blackListedAgents:
      output.blackListedAgents !== undefined && output.blackListedAgents !== null
        ? output.blackListedAgents
        : undefined,
    healthyAgents:
      output.healthyAgents !== undefined && output.healthyAgents !== null ? output.healthyAgents : undefined,
    shutdownAgents:
      output.shutdownAgents !== undefined && output.shutdownAgents !== null ? output.shutdownAgents : undefined,
    totalAgents: output.totalAgents !== undefined && output.totalAgents !== null ? output.totalAgents : undefined,
    unhealthyAgents:
      output.unhealthyAgents !== undefined && output.unhealthyAgents !== null ? output.unhealthyAgents : undefined,
    unknownAgents:
      output.unknownAgents !== undefined && output.unknownAgents !== null ? output.unknownAgents : undefined,
  };
};
const deserializeAws_json1_1CustomerConnectorInfo = (output, context) => {
  return {
    activeConnectors:
      output.activeConnectors !== undefined && output.activeConnectors !== null ? output.activeConnectors : undefined,
    blackListedConnectors:
      output.blackListedConnectors !== undefined && output.blackListedConnectors !== null
        ? output.blackListedConnectors
        : undefined,
    healthyConnectors:
      output.healthyConnectors !== undefined && output.healthyConnectors !== null
        ? output.healthyConnectors
        : undefined,
    shutdownConnectors:
      output.shutdownConnectors !== undefined && output.shutdownConnectors !== null
        ? output.shutdownConnectors
        : undefined,
    totalConnectors:
      output.totalConnectors !== undefined && output.totalConnectors !== null ? output.totalConnectors : undefined,
    unhealthyConnectors:
      output.unhealthyConnectors !== undefined && output.unhealthyConnectors !== null
        ? output.unhealthyConnectors
        : undefined,
    unknownConnectors:
      output.unknownConnectors !== undefined && output.unknownConnectors !== null
        ? output.unknownConnectors
        : undefined,
  };
};
const deserializeAws_json1_1DeleteApplicationsResponse = (output, context) => {
  return {};
};
const deserializeAws_json1_1DeleteTagsResponse = (output, context) => {
  return {};
};
const deserializeAws_json1_1DescribeAgentsResponse = (output, context) => {
  return {
    agentsInfo:
      output.agentsInfo !== undefined && output.agentsInfo !== null
        ? deserializeAws_json1_1AgentsInfo(output.agentsInfo, context)
        : undefined,
    nextToken: output.nextToken !== undefined && output.nextToken !== null ? output.nextToken : undefined,
  };
};
const deserializeAws_json1_1DescribeConfigurationsAttribute = (output, context) => {
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
const deserializeAws_json1_1DescribeConfigurationsAttributes = (output, context) => {
  return (output || [])
    .filter((e) => e != null)
    .map((entry) => {
      if (entry === null) {
        return null;
      }
      return deserializeAws_json1_1DescribeConfigurationsAttribute(entry, context);
    });
};
const deserializeAws_json1_1DescribeConfigurationsResponse = (output, context) => {
  return {
    configurations:
      output.configurations !== undefined && output.configurations !== null
        ? deserializeAws_json1_1DescribeConfigurationsAttributes(output.configurations, context)
        : undefined,
  };
};
const deserializeAws_json1_1DescribeContinuousExportsResponse = (output, context) => {
  return {
    descriptions:
      output.descriptions !== undefined && output.descriptions !== null
        ? deserializeAws_json1_1ContinuousExportDescriptions(output.descriptions, context)
        : undefined,
    nextToken: output.nextToken !== undefined && output.nextToken !== null ? output.nextToken : undefined,
  };
};
const deserializeAws_json1_1DescribeExportConfigurationsResponse = (output, context) => {
  return {
    exportsInfo:
      output.exportsInfo !== undefined && output.exportsInfo !== null
        ? deserializeAws_json1_1ExportsInfo(output.exportsInfo, context)
        : undefined,
    nextToken: output.nextToken !== undefined && output.nextToken !== null ? output.nextToken : undefined,
  };
};
const deserializeAws_json1_1DescribeExportTasksResponse = (output, context) => {
  return {
    exportsInfo:
      output.exportsInfo !== undefined && output.exportsInfo !== null
        ? deserializeAws_json1_1ExportsInfo(output.exportsInfo, context)
        : undefined,
    nextToken: output.nextToken !== undefined && output.nextToken !== null ? output.nextToken : undefined,
  };
};
const deserializeAws_json1_1DescribeImportTasksResponse = (output, context) => {
  return {
    nextToken: output.nextToken !== undefined && output.nextToken !== null ? output.nextToken : undefined,
    tasks:
      output.tasks !== undefined && output.tasks !== null
        ? deserializeAws_json1_1ImportTaskList(output.tasks, context)
        : undefined,
  };
};
const deserializeAws_json1_1DescribeTagsResponse = (output, context) => {
  return {
    nextToken: output.nextToken !== undefined && output.nextToken !== null ? output.nextToken : undefined,
    tags:
      output.tags !== undefined && output.tags !== null
        ? deserializeAws_json1_1ConfigurationTagSet(output.tags, context)
        : undefined,
  };
};
const deserializeAws_json1_1DisassociateConfigurationItemsFromApplicationResponse = (output, context) => {
  return {};
};
const deserializeAws_json1_1ExportConfigurationsResponse = (output, context) => {
  return {
    exportId: output.exportId !== undefined && output.exportId !== null ? output.exportId : undefined,
  };
};
const deserializeAws_json1_1ExportInfo = (output, context) => {
  return {
    configurationsDownloadUrl:
      output.configurationsDownloadUrl !== undefined && output.configurationsDownloadUrl !== null
        ? output.configurationsDownloadUrl
        : undefined,
    exportId: output.exportId !== undefined && output.exportId !== null ? output.exportId : undefined,
    exportRequestTime:
      output.exportRequestTime !== undefined && output.exportRequestTime !== null
        ? new Date(Math.round(output.exportRequestTime * 1000))
        : undefined,
    exportStatus: output.exportStatus !== undefined && output.exportStatus !== null ? output.exportStatus : undefined,
    isTruncated: output.isTruncated !== undefined && output.isTruncated !== null ? output.isTruncated : undefined,
    requestedEndTime:
      output.requestedEndTime !== undefined && output.requestedEndTime !== null
        ? new Date(Math.round(output.requestedEndTime * 1000))
        : undefined,
    requestedStartTime:
      output.requestedStartTime !== undefined && output.requestedStartTime !== null
        ? new Date(Math.round(output.requestedStartTime * 1000))
        : undefined,
    statusMessage:
      output.statusMessage !== undefined && output.statusMessage !== null ? output.statusMessage : undefined,
  };
};
const deserializeAws_json1_1ExportsInfo = (output, context) => {
  return (output || [])
    .filter((e) => e != null)
    .map((entry) => {
      if (entry === null) {
        return null;
      }
      return deserializeAws_json1_1ExportInfo(entry, context);
    });
};
const deserializeAws_json1_1GetDiscoverySummaryResponse = (output, context) => {
  return {
    agentSummary:
      output.agentSummary !== undefined && output.agentSummary !== null
        ? deserializeAws_json1_1CustomerAgentInfo(output.agentSummary, context)
        : undefined,
    applications: output.applications !== undefined && output.applications !== null ? output.applications : undefined,
    connectorSummary:
      output.connectorSummary !== undefined && output.connectorSummary !== null
        ? deserializeAws_json1_1CustomerConnectorInfo(output.connectorSummary, context)
        : undefined,
    servers: output.servers !== undefined && output.servers !== null ? output.servers : undefined,
    serversMappedToApplications:
      output.serversMappedToApplications !== undefined && output.serversMappedToApplications !== null
        ? output.serversMappedToApplications
        : undefined,
    serversMappedtoTags:
      output.serversMappedtoTags !== undefined && output.serversMappedtoTags !== null
        ? output.serversMappedtoTags
        : undefined,
  };
};
const deserializeAws_json1_1HomeRegionNotSetException = (output, context) => {
  return {
    message: output.message !== undefined && output.message !== null ? output.message : undefined,
  };
};
const deserializeAws_json1_1ImportTask = (output, context) => {
  return {
    applicationImportFailure:
      output.applicationImportFailure !== undefined && output.applicationImportFailure !== null
        ? output.applicationImportFailure
        : undefined,
    applicationImportSuccess:
      output.applicationImportSuccess !== undefined && output.applicationImportSuccess !== null
        ? output.applicationImportSuccess
        : undefined,
    clientRequestToken:
      output.clientRequestToken !== undefined && output.clientRequestToken !== null
        ? output.clientRequestToken
        : undefined,
    errorsAndFailedEntriesZip:
      output.errorsAndFailedEntriesZip !== undefined && output.errorsAndFailedEntriesZip !== null
        ? output.errorsAndFailedEntriesZip
        : undefined,
    importCompletionTime:
      output.importCompletionTime !== undefined && output.importCompletionTime !== null
        ? new Date(Math.round(output.importCompletionTime * 1000))
        : undefined,
    importDeletedTime:
      output.importDeletedTime !== undefined && output.importDeletedTime !== null
        ? new Date(Math.round(output.importDeletedTime * 1000))
        : undefined,
    importRequestTime:
      output.importRequestTime !== undefined && output.importRequestTime !== null
        ? new Date(Math.round(output.importRequestTime * 1000))
        : undefined,
    importTaskId: output.importTaskId !== undefined && output.importTaskId !== null ? output.importTaskId : undefined,
    importUrl: output.importUrl !== undefined && output.importUrl !== null ? output.importUrl : undefined,
    name: output.name !== undefined && output.name !== null ? output.name : undefined,
    serverImportFailure:
      output.serverImportFailure !== undefined && output.serverImportFailure !== null
        ? output.serverImportFailure
        : undefined,
    serverImportSuccess:
      output.serverImportSuccess !== undefined && output.serverImportSuccess !== null
        ? output.serverImportSuccess
        : undefined,
    status: output.status !== undefined && output.status !== null ? output.status : undefined,
  };
};
const deserializeAws_json1_1ImportTaskList = (output, context) => {
  return (output || [])
    .filter((e) => e != null)
    .map((entry) => {
      if (entry === null) {
        return null;
      }
      return deserializeAws_json1_1ImportTask(entry, context);
    });
};
const deserializeAws_json1_1InvalidParameterException = (output, context) => {
  return {
    message: output.message !== undefined && output.message !== null ? output.message : undefined,
  };
};
const deserializeAws_json1_1InvalidParameterValueException = (output, context) => {
  return {
    message: output.message !== undefined && output.message !== null ? output.message : undefined,
  };
};
const deserializeAws_json1_1ListConfigurationsResponse = (output, context) => {
  return {
    configurations:
      output.configurations !== undefined && output.configurations !== null
        ? deserializeAws_json1_1Configurations(output.configurations, context)
        : undefined,
    nextToken: output.nextToken !== undefined && output.nextToken !== null ? output.nextToken : undefined,
  };
};
const deserializeAws_json1_1ListServerNeighborsResponse = (output, context) => {
  return {
    knownDependencyCount:
      output.knownDependencyCount !== undefined && output.knownDependencyCount !== null
        ? output.knownDependencyCount
        : undefined,
    neighbors:
      output.neighbors !== undefined && output.neighbors !== null
        ? deserializeAws_json1_1NeighborDetailsList(output.neighbors, context)
        : undefined,
    nextToken: output.nextToken !== undefined && output.nextToken !== null ? output.nextToken : undefined,
  };
};
const deserializeAws_json1_1NeighborConnectionDetail = (output, context) => {
  return {
    connectionsCount:
      output.connectionsCount !== undefined && output.connectionsCount !== null ? output.connectionsCount : undefined,
    destinationPort:
      output.destinationPort !== undefined && output.destinationPort !== null ? output.destinationPort : undefined,
    destinationServerId:
      output.destinationServerId !== undefined && output.destinationServerId !== null
        ? output.destinationServerId
        : undefined,
    sourceServerId:
      output.sourceServerId !== undefined && output.sourceServerId !== null ? output.sourceServerId : undefined,
    transportProtocol:
      output.transportProtocol !== undefined && output.transportProtocol !== null
        ? output.transportProtocol
        : undefined,
  };
};
const deserializeAws_json1_1NeighborDetailsList = (output, context) => {
  return (output || [])
    .filter((e) => e != null)
    .map((entry) => {
      if (entry === null) {
        return null;
      }
      return deserializeAws_json1_1NeighborConnectionDetail(entry, context);
    });
};
const deserializeAws_json1_1OperationNotPermittedException = (output, context) => {
  return {
    message: output.message !== undefined && output.message !== null ? output.message : undefined,
  };
};
const deserializeAws_json1_1ResourceInUseException = (output, context) => {
  return {
    message: output.message !== undefined && output.message !== null ? output.message : undefined,
  };
};
const deserializeAws_json1_1ResourceNotFoundException = (output, context) => {
  return {
    message: output.message !== undefined && output.message !== null ? output.message : undefined,
  };
};
const deserializeAws_json1_1SchemaStorageConfig = (output, context) => {
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
const deserializeAws_json1_1ServerInternalErrorException = (output, context) => {
  return {
    message: output.message !== undefined && output.message !== null ? output.message : undefined,
  };
};
const deserializeAws_json1_1StartContinuousExportResponse = (output, context) => {
  return {
    dataSource: output.dataSource !== undefined && output.dataSource !== null ? output.dataSource : undefined,
    exportId: output.exportId !== undefined && output.exportId !== null ? output.exportId : undefined,
    s3Bucket: output.s3Bucket !== undefined && output.s3Bucket !== null ? output.s3Bucket : undefined,
    schemaStorageConfig:
      output.schemaStorageConfig !== undefined && output.schemaStorageConfig !== null
        ? deserializeAws_json1_1SchemaStorageConfig(output.schemaStorageConfig, context)
        : undefined,
    startTime:
      output.startTime !== undefined && output.startTime !== null
        ? new Date(Math.round(output.startTime * 1000))
        : undefined,
  };
};
const deserializeAws_json1_1StartDataCollectionByAgentIdsResponse = (output, context) => {
  return {
    agentsConfigurationStatus:
      output.agentsConfigurationStatus !== undefined && output.agentsConfigurationStatus !== null
        ? deserializeAws_json1_1AgentConfigurationStatusList(output.agentsConfigurationStatus, context)
        : undefined,
  };
};
const deserializeAws_json1_1StartExportTaskResponse = (output, context) => {
  return {
    exportId: output.exportId !== undefined && output.exportId !== null ? output.exportId : undefined,
  };
};
const deserializeAws_json1_1StartImportTaskResponse = (output, context) => {
  return {
    task:
      output.task !== undefined && output.task !== null
        ? deserializeAws_json1_1ImportTask(output.task, context)
        : undefined,
  };
};
const deserializeAws_json1_1StopContinuousExportResponse = (output, context) => {
  return {
    startTime:
      output.startTime !== undefined && output.startTime !== null
        ? new Date(Math.round(output.startTime * 1000))
        : undefined,
    stopTime:
      output.stopTime !== undefined && output.stopTime !== null
        ? new Date(Math.round(output.stopTime * 1000))
        : undefined,
  };
};
const deserializeAws_json1_1StopDataCollectionByAgentIdsResponse = (output, context) => {
  return {
    agentsConfigurationStatus:
      output.agentsConfigurationStatus !== undefined && output.agentsConfigurationStatus !== null
        ? deserializeAws_json1_1AgentConfigurationStatusList(output.agentsConfigurationStatus, context)
        : undefined,
  };
};
const deserializeAws_json1_1UpdateApplicationResponse = (output, context) => {
  return {};
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
