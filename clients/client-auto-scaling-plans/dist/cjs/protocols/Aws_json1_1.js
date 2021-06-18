"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.deserializeAws_json1_1UpdateScalingPlanCommand =
  exports.deserializeAws_json1_1GetScalingPlanResourceForecastDataCommand =
  exports.deserializeAws_json1_1DescribeScalingPlansCommand =
  exports.deserializeAws_json1_1DescribeScalingPlanResourcesCommand =
  exports.deserializeAws_json1_1DeleteScalingPlanCommand =
  exports.deserializeAws_json1_1CreateScalingPlanCommand =
  exports.serializeAws_json1_1UpdateScalingPlanCommand =
  exports.serializeAws_json1_1GetScalingPlanResourceForecastDataCommand =
  exports.serializeAws_json1_1DescribeScalingPlansCommand =
  exports.serializeAws_json1_1DescribeScalingPlanResourcesCommand =
  exports.serializeAws_json1_1DeleteScalingPlanCommand =
  exports.serializeAws_json1_1CreateScalingPlanCommand =
    void 0;
const protocol_http_1 = require("@aws-sdk/protocol-http");
const serializeAws_json1_1CreateScalingPlanCommand = async (input, context) => {
  const headers = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "AnyScaleScalingPlannerFrontendService.CreateScalingPlan",
  };
  let body;
  body = JSON.stringify(serializeAws_json1_1CreateScalingPlanRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
exports.serializeAws_json1_1CreateScalingPlanCommand = serializeAws_json1_1CreateScalingPlanCommand;
const serializeAws_json1_1DeleteScalingPlanCommand = async (input, context) => {
  const headers = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "AnyScaleScalingPlannerFrontendService.DeleteScalingPlan",
  };
  let body;
  body = JSON.stringify(serializeAws_json1_1DeleteScalingPlanRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
exports.serializeAws_json1_1DeleteScalingPlanCommand = serializeAws_json1_1DeleteScalingPlanCommand;
const serializeAws_json1_1DescribeScalingPlanResourcesCommand = async (input, context) => {
  const headers = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "AnyScaleScalingPlannerFrontendService.DescribeScalingPlanResources",
  };
  let body;
  body = JSON.stringify(serializeAws_json1_1DescribeScalingPlanResourcesRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
exports.serializeAws_json1_1DescribeScalingPlanResourcesCommand =
  serializeAws_json1_1DescribeScalingPlanResourcesCommand;
const serializeAws_json1_1DescribeScalingPlansCommand = async (input, context) => {
  const headers = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "AnyScaleScalingPlannerFrontendService.DescribeScalingPlans",
  };
  let body;
  body = JSON.stringify(serializeAws_json1_1DescribeScalingPlansRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
exports.serializeAws_json1_1DescribeScalingPlansCommand = serializeAws_json1_1DescribeScalingPlansCommand;
const serializeAws_json1_1GetScalingPlanResourceForecastDataCommand = async (input, context) => {
  const headers = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "AnyScaleScalingPlannerFrontendService.GetScalingPlanResourceForecastData",
  };
  let body;
  body = JSON.stringify(serializeAws_json1_1GetScalingPlanResourceForecastDataRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
exports.serializeAws_json1_1GetScalingPlanResourceForecastDataCommand =
  serializeAws_json1_1GetScalingPlanResourceForecastDataCommand;
const serializeAws_json1_1UpdateScalingPlanCommand = async (input, context) => {
  const headers = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "AnyScaleScalingPlannerFrontendService.UpdateScalingPlan",
  };
  let body;
  body = JSON.stringify(serializeAws_json1_1UpdateScalingPlanRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
exports.serializeAws_json1_1UpdateScalingPlanCommand = serializeAws_json1_1UpdateScalingPlanCommand;
const deserializeAws_json1_1CreateScalingPlanCommand = async (output, context) => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_1CreateScalingPlanCommandError(output, context);
  }
  const data = await parseBody(output.body, context);
  let contents = {};
  contents = deserializeAws_json1_1CreateScalingPlanResponse(data, context);
  const response = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};
exports.deserializeAws_json1_1CreateScalingPlanCommand = deserializeAws_json1_1CreateScalingPlanCommand;
const deserializeAws_json1_1CreateScalingPlanCommandError = async (output, context) => {
  const parsedOutput = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response;
  let errorCode = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "ConcurrentUpdateException":
    case "com.amazonaws.autoscalingplans#ConcurrentUpdateException":
      response = {
        ...(await deserializeAws_json1_1ConcurrentUpdateExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InternalServiceException":
    case "com.amazonaws.autoscalingplans#InternalServiceException":
      response = {
        ...(await deserializeAws_json1_1InternalServiceExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "LimitExceededException":
    case "com.amazonaws.autoscalingplans#LimitExceededException":
      response = {
        ...(await deserializeAws_json1_1LimitExceededExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ValidationException":
    case "com.amazonaws.autoscalingplans#ValidationException":
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
const deserializeAws_json1_1DeleteScalingPlanCommand = async (output, context) => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_1DeleteScalingPlanCommandError(output, context);
  }
  const data = await parseBody(output.body, context);
  let contents = {};
  contents = deserializeAws_json1_1DeleteScalingPlanResponse(data, context);
  const response = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};
exports.deserializeAws_json1_1DeleteScalingPlanCommand = deserializeAws_json1_1DeleteScalingPlanCommand;
const deserializeAws_json1_1DeleteScalingPlanCommandError = async (output, context) => {
  const parsedOutput = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response;
  let errorCode = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "ConcurrentUpdateException":
    case "com.amazonaws.autoscalingplans#ConcurrentUpdateException":
      response = {
        ...(await deserializeAws_json1_1ConcurrentUpdateExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InternalServiceException":
    case "com.amazonaws.autoscalingplans#InternalServiceException":
      response = {
        ...(await deserializeAws_json1_1InternalServiceExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ObjectNotFoundException":
    case "com.amazonaws.autoscalingplans#ObjectNotFoundException":
      response = {
        ...(await deserializeAws_json1_1ObjectNotFoundExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ValidationException":
    case "com.amazonaws.autoscalingplans#ValidationException":
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
const deserializeAws_json1_1DescribeScalingPlanResourcesCommand = async (output, context) => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_1DescribeScalingPlanResourcesCommandError(output, context);
  }
  const data = await parseBody(output.body, context);
  let contents = {};
  contents = deserializeAws_json1_1DescribeScalingPlanResourcesResponse(data, context);
  const response = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};
exports.deserializeAws_json1_1DescribeScalingPlanResourcesCommand =
  deserializeAws_json1_1DescribeScalingPlanResourcesCommand;
const deserializeAws_json1_1DescribeScalingPlanResourcesCommandError = async (output, context) => {
  const parsedOutput = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response;
  let errorCode = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "ConcurrentUpdateException":
    case "com.amazonaws.autoscalingplans#ConcurrentUpdateException":
      response = {
        ...(await deserializeAws_json1_1ConcurrentUpdateExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InternalServiceException":
    case "com.amazonaws.autoscalingplans#InternalServiceException":
      response = {
        ...(await deserializeAws_json1_1InternalServiceExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InvalidNextTokenException":
    case "com.amazonaws.autoscalingplans#InvalidNextTokenException":
      response = {
        ...(await deserializeAws_json1_1InvalidNextTokenExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ValidationException":
    case "com.amazonaws.autoscalingplans#ValidationException":
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
const deserializeAws_json1_1DescribeScalingPlansCommand = async (output, context) => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_1DescribeScalingPlansCommandError(output, context);
  }
  const data = await parseBody(output.body, context);
  let contents = {};
  contents = deserializeAws_json1_1DescribeScalingPlansResponse(data, context);
  const response = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};
exports.deserializeAws_json1_1DescribeScalingPlansCommand = deserializeAws_json1_1DescribeScalingPlansCommand;
const deserializeAws_json1_1DescribeScalingPlansCommandError = async (output, context) => {
  const parsedOutput = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response;
  let errorCode = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "ConcurrentUpdateException":
    case "com.amazonaws.autoscalingplans#ConcurrentUpdateException":
      response = {
        ...(await deserializeAws_json1_1ConcurrentUpdateExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InternalServiceException":
    case "com.amazonaws.autoscalingplans#InternalServiceException":
      response = {
        ...(await deserializeAws_json1_1InternalServiceExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InvalidNextTokenException":
    case "com.amazonaws.autoscalingplans#InvalidNextTokenException":
      response = {
        ...(await deserializeAws_json1_1InvalidNextTokenExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ValidationException":
    case "com.amazonaws.autoscalingplans#ValidationException":
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
const deserializeAws_json1_1GetScalingPlanResourceForecastDataCommand = async (output, context) => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_1GetScalingPlanResourceForecastDataCommandError(output, context);
  }
  const data = await parseBody(output.body, context);
  let contents = {};
  contents = deserializeAws_json1_1GetScalingPlanResourceForecastDataResponse(data, context);
  const response = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};
exports.deserializeAws_json1_1GetScalingPlanResourceForecastDataCommand =
  deserializeAws_json1_1GetScalingPlanResourceForecastDataCommand;
const deserializeAws_json1_1GetScalingPlanResourceForecastDataCommandError = async (output, context) => {
  const parsedOutput = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response;
  let errorCode = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InternalServiceException":
    case "com.amazonaws.autoscalingplans#InternalServiceException":
      response = {
        ...(await deserializeAws_json1_1InternalServiceExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ValidationException":
    case "com.amazonaws.autoscalingplans#ValidationException":
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
const deserializeAws_json1_1UpdateScalingPlanCommand = async (output, context) => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_1UpdateScalingPlanCommandError(output, context);
  }
  const data = await parseBody(output.body, context);
  let contents = {};
  contents = deserializeAws_json1_1UpdateScalingPlanResponse(data, context);
  const response = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};
exports.deserializeAws_json1_1UpdateScalingPlanCommand = deserializeAws_json1_1UpdateScalingPlanCommand;
const deserializeAws_json1_1UpdateScalingPlanCommandError = async (output, context) => {
  const parsedOutput = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response;
  let errorCode = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "ConcurrentUpdateException":
    case "com.amazonaws.autoscalingplans#ConcurrentUpdateException":
      response = {
        ...(await deserializeAws_json1_1ConcurrentUpdateExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InternalServiceException":
    case "com.amazonaws.autoscalingplans#InternalServiceException":
      response = {
        ...(await deserializeAws_json1_1InternalServiceExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ObjectNotFoundException":
    case "com.amazonaws.autoscalingplans#ObjectNotFoundException":
      response = {
        ...(await deserializeAws_json1_1ObjectNotFoundExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ValidationException":
    case "com.amazonaws.autoscalingplans#ValidationException":
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
const deserializeAws_json1_1ConcurrentUpdateExceptionResponse = async (parsedOutput, context) => {
  const body = parsedOutput.body;
  const deserialized = deserializeAws_json1_1ConcurrentUpdateException(body, context);
  const contents = {
    name: "ConcurrentUpdateException",
    $fault: "server",
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  };
  return contents;
};
const deserializeAws_json1_1InternalServiceExceptionResponse = async (parsedOutput, context) => {
  const body = parsedOutput.body;
  const deserialized = deserializeAws_json1_1InternalServiceException(body, context);
  const contents = {
    name: "InternalServiceException",
    $fault: "server",
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
const deserializeAws_json1_1LimitExceededExceptionResponse = async (parsedOutput, context) => {
  const body = parsedOutput.body;
  const deserialized = deserializeAws_json1_1LimitExceededException(body, context);
  const contents = {
    name: "LimitExceededException",
    $fault: "client",
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  };
  return contents;
};
const deserializeAws_json1_1ObjectNotFoundExceptionResponse = async (parsedOutput, context) => {
  const body = parsedOutput.body;
  const deserialized = deserializeAws_json1_1ObjectNotFoundException(body, context);
  const contents = {
    name: "ObjectNotFoundException",
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
const serializeAws_json1_1ApplicationSource = (input, context) => {
  return {
    ...(input.CloudFormationStackARN !== undefined &&
      input.CloudFormationStackARN !== null && { CloudFormationStackARN: input.CloudFormationStackARN }),
    ...(input.TagFilters !== undefined &&
      input.TagFilters !== null && { TagFilters: serializeAws_json1_1TagFilters(input.TagFilters, context) }),
  };
};
const serializeAws_json1_1ApplicationSources = (input, context) => {
  return input
    .filter((e) => e != null)
    .map((entry) => {
      if (entry === null) {
        return null;
      }
      return serializeAws_json1_1ApplicationSource(entry, context);
    });
};
const serializeAws_json1_1CreateScalingPlanRequest = (input, context) => {
  return {
    ...(input.ApplicationSource !== undefined &&
      input.ApplicationSource !== null && {
        ApplicationSource: serializeAws_json1_1ApplicationSource(input.ApplicationSource, context),
      }),
    ...(input.ScalingInstructions !== undefined &&
      input.ScalingInstructions !== null && {
        ScalingInstructions: serializeAws_json1_1ScalingInstructions(input.ScalingInstructions, context),
      }),
    ...(input.ScalingPlanName !== undefined &&
      input.ScalingPlanName !== null && { ScalingPlanName: input.ScalingPlanName }),
  };
};
const serializeAws_json1_1CustomizedLoadMetricSpecification = (input, context) => {
  return {
    ...(input.Dimensions !== undefined &&
      input.Dimensions !== null && { Dimensions: serializeAws_json1_1MetricDimensions(input.Dimensions, context) }),
    ...(input.MetricName !== undefined && input.MetricName !== null && { MetricName: input.MetricName }),
    ...(input.Namespace !== undefined && input.Namespace !== null && { Namespace: input.Namespace }),
    ...(input.Statistic !== undefined && input.Statistic !== null && { Statistic: input.Statistic }),
    ...(input.Unit !== undefined && input.Unit !== null && { Unit: input.Unit }),
  };
};
const serializeAws_json1_1CustomizedScalingMetricSpecification = (input, context) => {
  return {
    ...(input.Dimensions !== undefined &&
      input.Dimensions !== null && { Dimensions: serializeAws_json1_1MetricDimensions(input.Dimensions, context) }),
    ...(input.MetricName !== undefined && input.MetricName !== null && { MetricName: input.MetricName }),
    ...(input.Namespace !== undefined && input.Namespace !== null && { Namespace: input.Namespace }),
    ...(input.Statistic !== undefined && input.Statistic !== null && { Statistic: input.Statistic }),
    ...(input.Unit !== undefined && input.Unit !== null && { Unit: input.Unit }),
  };
};
const serializeAws_json1_1DeleteScalingPlanRequest = (input, context) => {
  return {
    ...(input.ScalingPlanName !== undefined &&
      input.ScalingPlanName !== null && { ScalingPlanName: input.ScalingPlanName }),
    ...(input.ScalingPlanVersion !== undefined &&
      input.ScalingPlanVersion !== null && { ScalingPlanVersion: input.ScalingPlanVersion }),
  };
};
const serializeAws_json1_1DescribeScalingPlanResourcesRequest = (input, context) => {
  return {
    ...(input.MaxResults !== undefined && input.MaxResults !== null && { MaxResults: input.MaxResults }),
    ...(input.NextToken !== undefined && input.NextToken !== null && { NextToken: input.NextToken }),
    ...(input.ScalingPlanName !== undefined &&
      input.ScalingPlanName !== null && { ScalingPlanName: input.ScalingPlanName }),
    ...(input.ScalingPlanVersion !== undefined &&
      input.ScalingPlanVersion !== null && { ScalingPlanVersion: input.ScalingPlanVersion }),
  };
};
const serializeAws_json1_1DescribeScalingPlansRequest = (input, context) => {
  return {
    ...(input.ApplicationSources !== undefined &&
      input.ApplicationSources !== null && {
        ApplicationSources: serializeAws_json1_1ApplicationSources(input.ApplicationSources, context),
      }),
    ...(input.MaxResults !== undefined && input.MaxResults !== null && { MaxResults: input.MaxResults }),
    ...(input.NextToken !== undefined && input.NextToken !== null && { NextToken: input.NextToken }),
    ...(input.ScalingPlanNames !== undefined &&
      input.ScalingPlanNames !== null && {
        ScalingPlanNames: serializeAws_json1_1ScalingPlanNames(input.ScalingPlanNames, context),
      }),
    ...(input.ScalingPlanVersion !== undefined &&
      input.ScalingPlanVersion !== null && { ScalingPlanVersion: input.ScalingPlanVersion }),
  };
};
const serializeAws_json1_1GetScalingPlanResourceForecastDataRequest = (input, context) => {
  return {
    ...(input.EndTime !== undefined &&
      input.EndTime !== null && { EndTime: Math.round(input.EndTime.getTime() / 1000) }),
    ...(input.ForecastDataType !== undefined &&
      input.ForecastDataType !== null && { ForecastDataType: input.ForecastDataType }),
    ...(input.ResourceId !== undefined && input.ResourceId !== null && { ResourceId: input.ResourceId }),
    ...(input.ScalableDimension !== undefined &&
      input.ScalableDimension !== null && { ScalableDimension: input.ScalableDimension }),
    ...(input.ScalingPlanName !== undefined &&
      input.ScalingPlanName !== null && { ScalingPlanName: input.ScalingPlanName }),
    ...(input.ScalingPlanVersion !== undefined &&
      input.ScalingPlanVersion !== null && { ScalingPlanVersion: input.ScalingPlanVersion }),
    ...(input.ServiceNamespace !== undefined &&
      input.ServiceNamespace !== null && { ServiceNamespace: input.ServiceNamespace }),
    ...(input.StartTime !== undefined &&
      input.StartTime !== null && { StartTime: Math.round(input.StartTime.getTime() / 1000) }),
  };
};
const serializeAws_json1_1MetricDimension = (input, context) => {
  return {
    ...(input.Name !== undefined && input.Name !== null && { Name: input.Name }),
    ...(input.Value !== undefined && input.Value !== null && { Value: input.Value }),
  };
};
const serializeAws_json1_1MetricDimensions = (input, context) => {
  return input
    .filter((e) => e != null)
    .map((entry) => {
      if (entry === null) {
        return null;
      }
      return serializeAws_json1_1MetricDimension(entry, context);
    });
};
const serializeAws_json1_1PredefinedLoadMetricSpecification = (input, context) => {
  return {
    ...(input.PredefinedLoadMetricType !== undefined &&
      input.PredefinedLoadMetricType !== null && { PredefinedLoadMetricType: input.PredefinedLoadMetricType }),
    ...(input.ResourceLabel !== undefined && input.ResourceLabel !== null && { ResourceLabel: input.ResourceLabel }),
  };
};
const serializeAws_json1_1PredefinedScalingMetricSpecification = (input, context) => {
  return {
    ...(input.PredefinedScalingMetricType !== undefined &&
      input.PredefinedScalingMetricType !== null && { PredefinedScalingMetricType: input.PredefinedScalingMetricType }),
    ...(input.ResourceLabel !== undefined && input.ResourceLabel !== null && { ResourceLabel: input.ResourceLabel }),
  };
};
const serializeAws_json1_1ScalingInstruction = (input, context) => {
  return {
    ...(input.CustomizedLoadMetricSpecification !== undefined &&
      input.CustomizedLoadMetricSpecification !== null && {
        CustomizedLoadMetricSpecification: serializeAws_json1_1CustomizedLoadMetricSpecification(
          input.CustomizedLoadMetricSpecification,
          context
        ),
      }),
    ...(input.DisableDynamicScaling !== undefined &&
      input.DisableDynamicScaling !== null && { DisableDynamicScaling: input.DisableDynamicScaling }),
    ...(input.MaxCapacity !== undefined && input.MaxCapacity !== null && { MaxCapacity: input.MaxCapacity }),
    ...(input.MinCapacity !== undefined && input.MinCapacity !== null && { MinCapacity: input.MinCapacity }),
    ...(input.PredefinedLoadMetricSpecification !== undefined &&
      input.PredefinedLoadMetricSpecification !== null && {
        PredefinedLoadMetricSpecification: serializeAws_json1_1PredefinedLoadMetricSpecification(
          input.PredefinedLoadMetricSpecification,
          context
        ),
      }),
    ...(input.PredictiveScalingMaxCapacityBehavior !== undefined &&
      input.PredictiveScalingMaxCapacityBehavior !== null && {
        PredictiveScalingMaxCapacityBehavior: input.PredictiveScalingMaxCapacityBehavior,
      }),
    ...(input.PredictiveScalingMaxCapacityBuffer !== undefined &&
      input.PredictiveScalingMaxCapacityBuffer !== null && {
        PredictiveScalingMaxCapacityBuffer: input.PredictiveScalingMaxCapacityBuffer,
      }),
    ...(input.PredictiveScalingMode !== undefined &&
      input.PredictiveScalingMode !== null && { PredictiveScalingMode: input.PredictiveScalingMode }),
    ...(input.ResourceId !== undefined && input.ResourceId !== null && { ResourceId: input.ResourceId }),
    ...(input.ScalableDimension !== undefined &&
      input.ScalableDimension !== null && { ScalableDimension: input.ScalableDimension }),
    ...(input.ScalingPolicyUpdateBehavior !== undefined &&
      input.ScalingPolicyUpdateBehavior !== null && { ScalingPolicyUpdateBehavior: input.ScalingPolicyUpdateBehavior }),
    ...(input.ScheduledActionBufferTime !== undefined &&
      input.ScheduledActionBufferTime !== null && { ScheduledActionBufferTime: input.ScheduledActionBufferTime }),
    ...(input.ServiceNamespace !== undefined &&
      input.ServiceNamespace !== null && { ServiceNamespace: input.ServiceNamespace }),
    ...(input.TargetTrackingConfigurations !== undefined &&
      input.TargetTrackingConfigurations !== null && {
        TargetTrackingConfigurations: serializeAws_json1_1TargetTrackingConfigurations(
          input.TargetTrackingConfigurations,
          context
        ),
      }),
  };
};
const serializeAws_json1_1ScalingInstructions = (input, context) => {
  return input
    .filter((e) => e != null)
    .map((entry) => {
      if (entry === null) {
        return null;
      }
      return serializeAws_json1_1ScalingInstruction(entry, context);
    });
};
const serializeAws_json1_1ScalingPlanNames = (input, context) => {
  return input
    .filter((e) => e != null)
    .map((entry) => {
      if (entry === null) {
        return null;
      }
      return entry;
    });
};
const serializeAws_json1_1TagFilter = (input, context) => {
  return {
    ...(input.Key !== undefined && input.Key !== null && { Key: input.Key }),
    ...(input.Values !== undefined &&
      input.Values !== null && { Values: serializeAws_json1_1TagValues(input.Values, context) }),
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
const serializeAws_json1_1TagValues = (input, context) => {
  return input
    .filter((e) => e != null)
    .map((entry) => {
      if (entry === null) {
        return null;
      }
      return entry;
    });
};
const serializeAws_json1_1TargetTrackingConfiguration = (input, context) => {
  return {
    ...(input.CustomizedScalingMetricSpecification !== undefined &&
      input.CustomizedScalingMetricSpecification !== null && {
        CustomizedScalingMetricSpecification: serializeAws_json1_1CustomizedScalingMetricSpecification(
          input.CustomizedScalingMetricSpecification,
          context
        ),
      }),
    ...(input.DisableScaleIn !== undefined &&
      input.DisableScaleIn !== null && { DisableScaleIn: input.DisableScaleIn }),
    ...(input.EstimatedInstanceWarmup !== undefined &&
      input.EstimatedInstanceWarmup !== null && { EstimatedInstanceWarmup: input.EstimatedInstanceWarmup }),
    ...(input.PredefinedScalingMetricSpecification !== undefined &&
      input.PredefinedScalingMetricSpecification !== null && {
        PredefinedScalingMetricSpecification: serializeAws_json1_1PredefinedScalingMetricSpecification(
          input.PredefinedScalingMetricSpecification,
          context
        ),
      }),
    ...(input.ScaleInCooldown !== undefined &&
      input.ScaleInCooldown !== null && { ScaleInCooldown: input.ScaleInCooldown }),
    ...(input.ScaleOutCooldown !== undefined &&
      input.ScaleOutCooldown !== null && { ScaleOutCooldown: input.ScaleOutCooldown }),
    ...(input.TargetValue !== undefined && input.TargetValue !== null && { TargetValue: input.TargetValue }),
  };
};
const serializeAws_json1_1TargetTrackingConfigurations = (input, context) => {
  return input
    .filter((e) => e != null)
    .map((entry) => {
      if (entry === null) {
        return null;
      }
      return serializeAws_json1_1TargetTrackingConfiguration(entry, context);
    });
};
const serializeAws_json1_1UpdateScalingPlanRequest = (input, context) => {
  return {
    ...(input.ApplicationSource !== undefined &&
      input.ApplicationSource !== null && {
        ApplicationSource: serializeAws_json1_1ApplicationSource(input.ApplicationSource, context),
      }),
    ...(input.ScalingInstructions !== undefined &&
      input.ScalingInstructions !== null && {
        ScalingInstructions: serializeAws_json1_1ScalingInstructions(input.ScalingInstructions, context),
      }),
    ...(input.ScalingPlanName !== undefined &&
      input.ScalingPlanName !== null && { ScalingPlanName: input.ScalingPlanName }),
    ...(input.ScalingPlanVersion !== undefined &&
      input.ScalingPlanVersion !== null && { ScalingPlanVersion: input.ScalingPlanVersion }),
  };
};
const deserializeAws_json1_1ApplicationSource = (output, context) => {
  return {
    CloudFormationStackARN:
      output.CloudFormationStackARN !== undefined && output.CloudFormationStackARN !== null
        ? output.CloudFormationStackARN
        : undefined,
    TagFilters:
      output.TagFilters !== undefined && output.TagFilters !== null
        ? deserializeAws_json1_1TagFilters(output.TagFilters, context)
        : undefined,
  };
};
const deserializeAws_json1_1ConcurrentUpdateException = (output, context) => {
  return {
    Message: output.Message !== undefined && output.Message !== null ? output.Message : undefined,
  };
};
const deserializeAws_json1_1CreateScalingPlanResponse = (output, context) => {
  return {
    ScalingPlanVersion:
      output.ScalingPlanVersion !== undefined && output.ScalingPlanVersion !== null
        ? output.ScalingPlanVersion
        : undefined,
  };
};
const deserializeAws_json1_1CustomizedLoadMetricSpecification = (output, context) => {
  return {
    Dimensions:
      output.Dimensions !== undefined && output.Dimensions !== null
        ? deserializeAws_json1_1MetricDimensions(output.Dimensions, context)
        : undefined,
    MetricName: output.MetricName !== undefined && output.MetricName !== null ? output.MetricName : undefined,
    Namespace: output.Namespace !== undefined && output.Namespace !== null ? output.Namespace : undefined,
    Statistic: output.Statistic !== undefined && output.Statistic !== null ? output.Statistic : undefined,
    Unit: output.Unit !== undefined && output.Unit !== null ? output.Unit : undefined,
  };
};
const deserializeAws_json1_1CustomizedScalingMetricSpecification = (output, context) => {
  return {
    Dimensions:
      output.Dimensions !== undefined && output.Dimensions !== null
        ? deserializeAws_json1_1MetricDimensions(output.Dimensions, context)
        : undefined,
    MetricName: output.MetricName !== undefined && output.MetricName !== null ? output.MetricName : undefined,
    Namespace: output.Namespace !== undefined && output.Namespace !== null ? output.Namespace : undefined,
    Statistic: output.Statistic !== undefined && output.Statistic !== null ? output.Statistic : undefined,
    Unit: output.Unit !== undefined && output.Unit !== null ? output.Unit : undefined,
  };
};
const deserializeAws_json1_1Datapoint = (output, context) => {
  return {
    Timestamp:
      output.Timestamp !== undefined && output.Timestamp !== null
        ? new Date(Math.round(output.Timestamp * 1000))
        : undefined,
    Value: output.Value !== undefined && output.Value !== null ? output.Value : undefined,
  };
};
const deserializeAws_json1_1Datapoints = (output, context) => {
  return (output || [])
    .filter((e) => e != null)
    .map((entry) => {
      if (entry === null) {
        return null;
      }
      return deserializeAws_json1_1Datapoint(entry, context);
    });
};
const deserializeAws_json1_1DeleteScalingPlanResponse = (output, context) => {
  return {};
};
const deserializeAws_json1_1DescribeScalingPlanResourcesResponse = (output, context) => {
  return {
    NextToken: output.NextToken !== undefined && output.NextToken !== null ? output.NextToken : undefined,
    ScalingPlanResources:
      output.ScalingPlanResources !== undefined && output.ScalingPlanResources !== null
        ? deserializeAws_json1_1ScalingPlanResources(output.ScalingPlanResources, context)
        : undefined,
  };
};
const deserializeAws_json1_1DescribeScalingPlansResponse = (output, context) => {
  return {
    NextToken: output.NextToken !== undefined && output.NextToken !== null ? output.NextToken : undefined,
    ScalingPlans:
      output.ScalingPlans !== undefined && output.ScalingPlans !== null
        ? deserializeAws_json1_1ScalingPlans(output.ScalingPlans, context)
        : undefined,
  };
};
const deserializeAws_json1_1GetScalingPlanResourceForecastDataResponse = (output, context) => {
  return {
    Datapoints:
      output.Datapoints !== undefined && output.Datapoints !== null
        ? deserializeAws_json1_1Datapoints(output.Datapoints, context)
        : undefined,
  };
};
const deserializeAws_json1_1InternalServiceException = (output, context) => {
  return {
    Message: output.Message !== undefined && output.Message !== null ? output.Message : undefined,
  };
};
const deserializeAws_json1_1InvalidNextTokenException = (output, context) => {
  return {
    Message: output.Message !== undefined && output.Message !== null ? output.Message : undefined,
  };
};
const deserializeAws_json1_1LimitExceededException = (output, context) => {
  return {
    Message: output.Message !== undefined && output.Message !== null ? output.Message : undefined,
  };
};
const deserializeAws_json1_1MetricDimension = (output, context) => {
  return {
    Name: output.Name !== undefined && output.Name !== null ? output.Name : undefined,
    Value: output.Value !== undefined && output.Value !== null ? output.Value : undefined,
  };
};
const deserializeAws_json1_1MetricDimensions = (output, context) => {
  return (output || [])
    .filter((e) => e != null)
    .map((entry) => {
      if (entry === null) {
        return null;
      }
      return deserializeAws_json1_1MetricDimension(entry, context);
    });
};
const deserializeAws_json1_1ObjectNotFoundException = (output, context) => {
  return {
    Message: output.Message !== undefined && output.Message !== null ? output.Message : undefined,
  };
};
const deserializeAws_json1_1PredefinedLoadMetricSpecification = (output, context) => {
  return {
    PredefinedLoadMetricType:
      output.PredefinedLoadMetricType !== undefined && output.PredefinedLoadMetricType !== null
        ? output.PredefinedLoadMetricType
        : undefined,
    ResourceLabel:
      output.ResourceLabel !== undefined && output.ResourceLabel !== null ? output.ResourceLabel : undefined,
  };
};
const deserializeAws_json1_1PredefinedScalingMetricSpecification = (output, context) => {
  return {
    PredefinedScalingMetricType:
      output.PredefinedScalingMetricType !== undefined && output.PredefinedScalingMetricType !== null
        ? output.PredefinedScalingMetricType
        : undefined,
    ResourceLabel:
      output.ResourceLabel !== undefined && output.ResourceLabel !== null ? output.ResourceLabel : undefined,
  };
};
const deserializeAws_json1_1ScalingInstruction = (output, context) => {
  return {
    CustomizedLoadMetricSpecification:
      output.CustomizedLoadMetricSpecification !== undefined && output.CustomizedLoadMetricSpecification !== null
        ? deserializeAws_json1_1CustomizedLoadMetricSpecification(output.CustomizedLoadMetricSpecification, context)
        : undefined,
    DisableDynamicScaling:
      output.DisableDynamicScaling !== undefined && output.DisableDynamicScaling !== null
        ? output.DisableDynamicScaling
        : undefined,
    MaxCapacity: output.MaxCapacity !== undefined && output.MaxCapacity !== null ? output.MaxCapacity : undefined,
    MinCapacity: output.MinCapacity !== undefined && output.MinCapacity !== null ? output.MinCapacity : undefined,
    PredefinedLoadMetricSpecification:
      output.PredefinedLoadMetricSpecification !== undefined && output.PredefinedLoadMetricSpecification !== null
        ? deserializeAws_json1_1PredefinedLoadMetricSpecification(output.PredefinedLoadMetricSpecification, context)
        : undefined,
    PredictiveScalingMaxCapacityBehavior:
      output.PredictiveScalingMaxCapacityBehavior !== undefined && output.PredictiveScalingMaxCapacityBehavior !== null
        ? output.PredictiveScalingMaxCapacityBehavior
        : undefined,
    PredictiveScalingMaxCapacityBuffer:
      output.PredictiveScalingMaxCapacityBuffer !== undefined && output.PredictiveScalingMaxCapacityBuffer !== null
        ? output.PredictiveScalingMaxCapacityBuffer
        : undefined,
    PredictiveScalingMode:
      output.PredictiveScalingMode !== undefined && output.PredictiveScalingMode !== null
        ? output.PredictiveScalingMode
        : undefined,
    ResourceId: output.ResourceId !== undefined && output.ResourceId !== null ? output.ResourceId : undefined,
    ScalableDimension:
      output.ScalableDimension !== undefined && output.ScalableDimension !== null
        ? output.ScalableDimension
        : undefined,
    ScalingPolicyUpdateBehavior:
      output.ScalingPolicyUpdateBehavior !== undefined && output.ScalingPolicyUpdateBehavior !== null
        ? output.ScalingPolicyUpdateBehavior
        : undefined,
    ScheduledActionBufferTime:
      output.ScheduledActionBufferTime !== undefined && output.ScheduledActionBufferTime !== null
        ? output.ScheduledActionBufferTime
        : undefined,
    ServiceNamespace:
      output.ServiceNamespace !== undefined && output.ServiceNamespace !== null ? output.ServiceNamespace : undefined,
    TargetTrackingConfigurations:
      output.TargetTrackingConfigurations !== undefined && output.TargetTrackingConfigurations !== null
        ? deserializeAws_json1_1TargetTrackingConfigurations(output.TargetTrackingConfigurations, context)
        : undefined,
  };
};
const deserializeAws_json1_1ScalingInstructions = (output, context) => {
  return (output || [])
    .filter((e) => e != null)
    .map((entry) => {
      if (entry === null) {
        return null;
      }
      return deserializeAws_json1_1ScalingInstruction(entry, context);
    });
};
const deserializeAws_json1_1ScalingPlan = (output, context) => {
  return {
    ApplicationSource:
      output.ApplicationSource !== undefined && output.ApplicationSource !== null
        ? deserializeAws_json1_1ApplicationSource(output.ApplicationSource, context)
        : undefined,
    CreationTime:
      output.CreationTime !== undefined && output.CreationTime !== null
        ? new Date(Math.round(output.CreationTime * 1000))
        : undefined,
    ScalingInstructions:
      output.ScalingInstructions !== undefined && output.ScalingInstructions !== null
        ? deserializeAws_json1_1ScalingInstructions(output.ScalingInstructions, context)
        : undefined,
    ScalingPlanName:
      output.ScalingPlanName !== undefined && output.ScalingPlanName !== null ? output.ScalingPlanName : undefined,
    ScalingPlanVersion:
      output.ScalingPlanVersion !== undefined && output.ScalingPlanVersion !== null
        ? output.ScalingPlanVersion
        : undefined,
    StatusCode: output.StatusCode !== undefined && output.StatusCode !== null ? output.StatusCode : undefined,
    StatusMessage:
      output.StatusMessage !== undefined && output.StatusMessage !== null ? output.StatusMessage : undefined,
    StatusStartTime:
      output.StatusStartTime !== undefined && output.StatusStartTime !== null
        ? new Date(Math.round(output.StatusStartTime * 1000))
        : undefined,
  };
};
const deserializeAws_json1_1ScalingPlanResource = (output, context) => {
  return {
    ResourceId: output.ResourceId !== undefined && output.ResourceId !== null ? output.ResourceId : undefined,
    ScalableDimension:
      output.ScalableDimension !== undefined && output.ScalableDimension !== null
        ? output.ScalableDimension
        : undefined,
    ScalingPlanName:
      output.ScalingPlanName !== undefined && output.ScalingPlanName !== null ? output.ScalingPlanName : undefined,
    ScalingPlanVersion:
      output.ScalingPlanVersion !== undefined && output.ScalingPlanVersion !== null
        ? output.ScalingPlanVersion
        : undefined,
    ScalingPolicies:
      output.ScalingPolicies !== undefined && output.ScalingPolicies !== null
        ? deserializeAws_json1_1ScalingPolicies(output.ScalingPolicies, context)
        : undefined,
    ScalingStatusCode:
      output.ScalingStatusCode !== undefined && output.ScalingStatusCode !== null
        ? output.ScalingStatusCode
        : undefined,
    ScalingStatusMessage:
      output.ScalingStatusMessage !== undefined && output.ScalingStatusMessage !== null
        ? output.ScalingStatusMessage
        : undefined,
    ServiceNamespace:
      output.ServiceNamespace !== undefined && output.ServiceNamespace !== null ? output.ServiceNamespace : undefined,
  };
};
const deserializeAws_json1_1ScalingPlanResources = (output, context) => {
  return (output || [])
    .filter((e) => e != null)
    .map((entry) => {
      if (entry === null) {
        return null;
      }
      return deserializeAws_json1_1ScalingPlanResource(entry, context);
    });
};
const deserializeAws_json1_1ScalingPlans = (output, context) => {
  return (output || [])
    .filter((e) => e != null)
    .map((entry) => {
      if (entry === null) {
        return null;
      }
      return deserializeAws_json1_1ScalingPlan(entry, context);
    });
};
const deserializeAws_json1_1ScalingPolicies = (output, context) => {
  return (output || [])
    .filter((e) => e != null)
    .map((entry) => {
      if (entry === null) {
        return null;
      }
      return deserializeAws_json1_1ScalingPolicy(entry, context);
    });
};
const deserializeAws_json1_1ScalingPolicy = (output, context) => {
  return {
    PolicyName: output.PolicyName !== undefined && output.PolicyName !== null ? output.PolicyName : undefined,
    PolicyType: output.PolicyType !== undefined && output.PolicyType !== null ? output.PolicyType : undefined,
    TargetTrackingConfiguration:
      output.TargetTrackingConfiguration !== undefined && output.TargetTrackingConfiguration !== null
        ? deserializeAws_json1_1TargetTrackingConfiguration(output.TargetTrackingConfiguration, context)
        : undefined,
  };
};
const deserializeAws_json1_1TagFilter = (output, context) => {
  return {
    Key: output.Key !== undefined && output.Key !== null ? output.Key : undefined,
    Values:
      output.Values !== undefined && output.Values !== null
        ? deserializeAws_json1_1TagValues(output.Values, context)
        : undefined,
  };
};
const deserializeAws_json1_1TagFilters = (output, context) => {
  return (output || [])
    .filter((e) => e != null)
    .map((entry) => {
      if (entry === null) {
        return null;
      }
      return deserializeAws_json1_1TagFilter(entry, context);
    });
};
const deserializeAws_json1_1TagValues = (output, context) => {
  return (output || [])
    .filter((e) => e != null)
    .map((entry) => {
      if (entry === null) {
        return null;
      }
      return entry;
    });
};
const deserializeAws_json1_1TargetTrackingConfiguration = (output, context) => {
  return {
    CustomizedScalingMetricSpecification:
      output.CustomizedScalingMetricSpecification !== undefined && output.CustomizedScalingMetricSpecification !== null
        ? deserializeAws_json1_1CustomizedScalingMetricSpecification(
            output.CustomizedScalingMetricSpecification,
            context
          )
        : undefined,
    DisableScaleIn:
      output.DisableScaleIn !== undefined && output.DisableScaleIn !== null ? output.DisableScaleIn : undefined,
    EstimatedInstanceWarmup:
      output.EstimatedInstanceWarmup !== undefined && output.EstimatedInstanceWarmup !== null
        ? output.EstimatedInstanceWarmup
        : undefined,
    PredefinedScalingMetricSpecification:
      output.PredefinedScalingMetricSpecification !== undefined && output.PredefinedScalingMetricSpecification !== null
        ? deserializeAws_json1_1PredefinedScalingMetricSpecification(
            output.PredefinedScalingMetricSpecification,
            context
          )
        : undefined,
    ScaleInCooldown:
      output.ScaleInCooldown !== undefined && output.ScaleInCooldown !== null ? output.ScaleInCooldown : undefined,
    ScaleOutCooldown:
      output.ScaleOutCooldown !== undefined && output.ScaleOutCooldown !== null ? output.ScaleOutCooldown : undefined,
    TargetValue: output.TargetValue !== undefined && output.TargetValue !== null ? output.TargetValue : undefined,
  };
};
const deserializeAws_json1_1TargetTrackingConfigurations = (output, context) => {
  return (output || [])
    .filter((e) => e != null)
    .map((entry) => {
      if (entry === null) {
        return null;
      }
      return deserializeAws_json1_1TargetTrackingConfiguration(entry, context);
    });
};
const deserializeAws_json1_1UpdateScalingPlanResponse = (output, context) => {
  return {};
};
const deserializeAws_json1_1ValidationException = (output, context) => {
  return {
    Message: output.Message !== undefined && output.Message !== null ? output.Message : undefined,
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
