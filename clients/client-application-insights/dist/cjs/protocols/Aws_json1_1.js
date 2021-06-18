"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.deserializeAws_json1_1UntagResourceCommand =
  exports.deserializeAws_json1_1TagResourceCommand =
  exports.deserializeAws_json1_1ListTagsForResourceCommand =
  exports.deserializeAws_json1_1ListProblemsCommand =
  exports.deserializeAws_json1_1ListLogPatternSetsCommand =
  exports.deserializeAws_json1_1ListLogPatternsCommand =
  exports.deserializeAws_json1_1ListConfigurationHistoryCommand =
  exports.deserializeAws_json1_1ListComponentsCommand =
  exports.deserializeAws_json1_1ListApplicationsCommand =
  exports.deserializeAws_json1_1DescribeProblemObservationsCommand =
  exports.deserializeAws_json1_1DescribeProblemCommand =
  exports.deserializeAws_json1_1DescribeObservationCommand =
  exports.deserializeAws_json1_1DescribeLogPatternCommand =
  exports.deserializeAws_json1_1DescribeComponentConfigurationRecommendationCommand =
  exports.deserializeAws_json1_1DescribeComponentConfigurationCommand =
  exports.deserializeAws_json1_1DescribeComponentCommand =
  exports.deserializeAws_json1_1DescribeApplicationCommand =
  exports.deserializeAws_json1_1DeleteLogPatternCommand =
  exports.deserializeAws_json1_1DeleteComponentCommand =
  exports.deserializeAws_json1_1DeleteApplicationCommand =
  exports.deserializeAws_json1_1CreateLogPatternCommand =
  exports.deserializeAws_json1_1CreateComponentCommand =
  exports.deserializeAws_json1_1CreateApplicationCommand =
  exports.serializeAws_json1_1UpdateLogPatternCommand =
  exports.serializeAws_json1_1UpdateComponentConfigurationCommand =
  exports.serializeAws_json1_1UpdateComponentCommand =
  exports.serializeAws_json1_1UpdateApplicationCommand =
  exports.serializeAws_json1_1UntagResourceCommand =
  exports.serializeAws_json1_1TagResourceCommand =
  exports.serializeAws_json1_1ListTagsForResourceCommand =
  exports.serializeAws_json1_1ListProblemsCommand =
  exports.serializeAws_json1_1ListLogPatternSetsCommand =
  exports.serializeAws_json1_1ListLogPatternsCommand =
  exports.serializeAws_json1_1ListConfigurationHistoryCommand =
  exports.serializeAws_json1_1ListComponentsCommand =
  exports.serializeAws_json1_1ListApplicationsCommand =
  exports.serializeAws_json1_1DescribeProblemObservationsCommand =
  exports.serializeAws_json1_1DescribeProblemCommand =
  exports.serializeAws_json1_1DescribeObservationCommand =
  exports.serializeAws_json1_1DescribeLogPatternCommand =
  exports.serializeAws_json1_1DescribeComponentConfigurationRecommendationCommand =
  exports.serializeAws_json1_1DescribeComponentConfigurationCommand =
  exports.serializeAws_json1_1DescribeComponentCommand =
  exports.serializeAws_json1_1DescribeApplicationCommand =
  exports.serializeAws_json1_1DeleteLogPatternCommand =
  exports.serializeAws_json1_1DeleteComponentCommand =
  exports.serializeAws_json1_1DeleteApplicationCommand =
  exports.serializeAws_json1_1CreateLogPatternCommand =
  exports.serializeAws_json1_1CreateComponentCommand =
  exports.serializeAws_json1_1CreateApplicationCommand =
    void 0;
exports.deserializeAws_json1_1UpdateLogPatternCommand =
  exports.deserializeAws_json1_1UpdateComponentConfigurationCommand =
  exports.deserializeAws_json1_1UpdateComponentCommand =
  exports.deserializeAws_json1_1UpdateApplicationCommand =
    void 0;
const protocol_http_1 = require("@aws-sdk/protocol-http");
const serializeAws_json1_1CreateApplicationCommand = async (input, context) => {
  const headers = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "EC2WindowsBarleyService.CreateApplication",
  };
  let body;
  body = JSON.stringify(serializeAws_json1_1CreateApplicationRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
exports.serializeAws_json1_1CreateApplicationCommand = serializeAws_json1_1CreateApplicationCommand;
const serializeAws_json1_1CreateComponentCommand = async (input, context) => {
  const headers = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "EC2WindowsBarleyService.CreateComponent",
  };
  let body;
  body = JSON.stringify(serializeAws_json1_1CreateComponentRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
exports.serializeAws_json1_1CreateComponentCommand = serializeAws_json1_1CreateComponentCommand;
const serializeAws_json1_1CreateLogPatternCommand = async (input, context) => {
  const headers = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "EC2WindowsBarleyService.CreateLogPattern",
  };
  let body;
  body = JSON.stringify(serializeAws_json1_1CreateLogPatternRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
exports.serializeAws_json1_1CreateLogPatternCommand = serializeAws_json1_1CreateLogPatternCommand;
const serializeAws_json1_1DeleteApplicationCommand = async (input, context) => {
  const headers = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "EC2WindowsBarleyService.DeleteApplication",
  };
  let body;
  body = JSON.stringify(serializeAws_json1_1DeleteApplicationRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
exports.serializeAws_json1_1DeleteApplicationCommand = serializeAws_json1_1DeleteApplicationCommand;
const serializeAws_json1_1DeleteComponentCommand = async (input, context) => {
  const headers = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "EC2WindowsBarleyService.DeleteComponent",
  };
  let body;
  body = JSON.stringify(serializeAws_json1_1DeleteComponentRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
exports.serializeAws_json1_1DeleteComponentCommand = serializeAws_json1_1DeleteComponentCommand;
const serializeAws_json1_1DeleteLogPatternCommand = async (input, context) => {
  const headers = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "EC2WindowsBarleyService.DeleteLogPattern",
  };
  let body;
  body = JSON.stringify(serializeAws_json1_1DeleteLogPatternRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
exports.serializeAws_json1_1DeleteLogPatternCommand = serializeAws_json1_1DeleteLogPatternCommand;
const serializeAws_json1_1DescribeApplicationCommand = async (input, context) => {
  const headers = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "EC2WindowsBarleyService.DescribeApplication",
  };
  let body;
  body = JSON.stringify(serializeAws_json1_1DescribeApplicationRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
exports.serializeAws_json1_1DescribeApplicationCommand = serializeAws_json1_1DescribeApplicationCommand;
const serializeAws_json1_1DescribeComponentCommand = async (input, context) => {
  const headers = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "EC2WindowsBarleyService.DescribeComponent",
  };
  let body;
  body = JSON.stringify(serializeAws_json1_1DescribeComponentRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
exports.serializeAws_json1_1DescribeComponentCommand = serializeAws_json1_1DescribeComponentCommand;
const serializeAws_json1_1DescribeComponentConfigurationCommand = async (input, context) => {
  const headers = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "EC2WindowsBarleyService.DescribeComponentConfiguration",
  };
  let body;
  body = JSON.stringify(serializeAws_json1_1DescribeComponentConfigurationRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
exports.serializeAws_json1_1DescribeComponentConfigurationCommand =
  serializeAws_json1_1DescribeComponentConfigurationCommand;
const serializeAws_json1_1DescribeComponentConfigurationRecommendationCommand = async (input, context) => {
  const headers = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "EC2WindowsBarleyService.DescribeComponentConfigurationRecommendation",
  };
  let body;
  body = JSON.stringify(serializeAws_json1_1DescribeComponentConfigurationRecommendationRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
exports.serializeAws_json1_1DescribeComponentConfigurationRecommendationCommand =
  serializeAws_json1_1DescribeComponentConfigurationRecommendationCommand;
const serializeAws_json1_1DescribeLogPatternCommand = async (input, context) => {
  const headers = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "EC2WindowsBarleyService.DescribeLogPattern",
  };
  let body;
  body = JSON.stringify(serializeAws_json1_1DescribeLogPatternRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
exports.serializeAws_json1_1DescribeLogPatternCommand = serializeAws_json1_1DescribeLogPatternCommand;
const serializeAws_json1_1DescribeObservationCommand = async (input, context) => {
  const headers = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "EC2WindowsBarleyService.DescribeObservation",
  };
  let body;
  body = JSON.stringify(serializeAws_json1_1DescribeObservationRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
exports.serializeAws_json1_1DescribeObservationCommand = serializeAws_json1_1DescribeObservationCommand;
const serializeAws_json1_1DescribeProblemCommand = async (input, context) => {
  const headers = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "EC2WindowsBarleyService.DescribeProblem",
  };
  let body;
  body = JSON.stringify(serializeAws_json1_1DescribeProblemRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
exports.serializeAws_json1_1DescribeProblemCommand = serializeAws_json1_1DescribeProblemCommand;
const serializeAws_json1_1DescribeProblemObservationsCommand = async (input, context) => {
  const headers = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "EC2WindowsBarleyService.DescribeProblemObservations",
  };
  let body;
  body = JSON.stringify(serializeAws_json1_1DescribeProblemObservationsRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
exports.serializeAws_json1_1DescribeProblemObservationsCommand = serializeAws_json1_1DescribeProblemObservationsCommand;
const serializeAws_json1_1ListApplicationsCommand = async (input, context) => {
  const headers = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "EC2WindowsBarleyService.ListApplications",
  };
  let body;
  body = JSON.stringify(serializeAws_json1_1ListApplicationsRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
exports.serializeAws_json1_1ListApplicationsCommand = serializeAws_json1_1ListApplicationsCommand;
const serializeAws_json1_1ListComponentsCommand = async (input, context) => {
  const headers = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "EC2WindowsBarleyService.ListComponents",
  };
  let body;
  body = JSON.stringify(serializeAws_json1_1ListComponentsRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
exports.serializeAws_json1_1ListComponentsCommand = serializeAws_json1_1ListComponentsCommand;
const serializeAws_json1_1ListConfigurationHistoryCommand = async (input, context) => {
  const headers = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "EC2WindowsBarleyService.ListConfigurationHistory",
  };
  let body;
  body = JSON.stringify(serializeAws_json1_1ListConfigurationHistoryRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
exports.serializeAws_json1_1ListConfigurationHistoryCommand = serializeAws_json1_1ListConfigurationHistoryCommand;
const serializeAws_json1_1ListLogPatternsCommand = async (input, context) => {
  const headers = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "EC2WindowsBarleyService.ListLogPatterns",
  };
  let body;
  body = JSON.stringify(serializeAws_json1_1ListLogPatternsRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
exports.serializeAws_json1_1ListLogPatternsCommand = serializeAws_json1_1ListLogPatternsCommand;
const serializeAws_json1_1ListLogPatternSetsCommand = async (input, context) => {
  const headers = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "EC2WindowsBarleyService.ListLogPatternSets",
  };
  let body;
  body = JSON.stringify(serializeAws_json1_1ListLogPatternSetsRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
exports.serializeAws_json1_1ListLogPatternSetsCommand = serializeAws_json1_1ListLogPatternSetsCommand;
const serializeAws_json1_1ListProblemsCommand = async (input, context) => {
  const headers = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "EC2WindowsBarleyService.ListProblems",
  };
  let body;
  body = JSON.stringify(serializeAws_json1_1ListProblemsRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
exports.serializeAws_json1_1ListProblemsCommand = serializeAws_json1_1ListProblemsCommand;
const serializeAws_json1_1ListTagsForResourceCommand = async (input, context) => {
  const headers = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "EC2WindowsBarleyService.ListTagsForResource",
  };
  let body;
  body = JSON.stringify(serializeAws_json1_1ListTagsForResourceRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
exports.serializeAws_json1_1ListTagsForResourceCommand = serializeAws_json1_1ListTagsForResourceCommand;
const serializeAws_json1_1TagResourceCommand = async (input, context) => {
  const headers = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "EC2WindowsBarleyService.TagResource",
  };
  let body;
  body = JSON.stringify(serializeAws_json1_1TagResourceRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
exports.serializeAws_json1_1TagResourceCommand = serializeAws_json1_1TagResourceCommand;
const serializeAws_json1_1UntagResourceCommand = async (input, context) => {
  const headers = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "EC2WindowsBarleyService.UntagResource",
  };
  let body;
  body = JSON.stringify(serializeAws_json1_1UntagResourceRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
exports.serializeAws_json1_1UntagResourceCommand = serializeAws_json1_1UntagResourceCommand;
const serializeAws_json1_1UpdateApplicationCommand = async (input, context) => {
  const headers = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "EC2WindowsBarleyService.UpdateApplication",
  };
  let body;
  body = JSON.stringify(serializeAws_json1_1UpdateApplicationRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
exports.serializeAws_json1_1UpdateApplicationCommand = serializeAws_json1_1UpdateApplicationCommand;
const serializeAws_json1_1UpdateComponentCommand = async (input, context) => {
  const headers = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "EC2WindowsBarleyService.UpdateComponent",
  };
  let body;
  body = JSON.stringify(serializeAws_json1_1UpdateComponentRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
exports.serializeAws_json1_1UpdateComponentCommand = serializeAws_json1_1UpdateComponentCommand;
const serializeAws_json1_1UpdateComponentConfigurationCommand = async (input, context) => {
  const headers = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "EC2WindowsBarleyService.UpdateComponentConfiguration",
  };
  let body;
  body = JSON.stringify(serializeAws_json1_1UpdateComponentConfigurationRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
exports.serializeAws_json1_1UpdateComponentConfigurationCommand =
  serializeAws_json1_1UpdateComponentConfigurationCommand;
const serializeAws_json1_1UpdateLogPatternCommand = async (input, context) => {
  const headers = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "EC2WindowsBarleyService.UpdateLogPattern",
  };
  let body;
  body = JSON.stringify(serializeAws_json1_1UpdateLogPatternRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
exports.serializeAws_json1_1UpdateLogPatternCommand = serializeAws_json1_1UpdateLogPatternCommand;
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
    case "AccessDeniedException":
    case "com.amazonaws.applicationinsights#AccessDeniedException":
      response = {
        ...(await deserializeAws_json1_1AccessDeniedExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InternalServerException":
    case "com.amazonaws.applicationinsights#InternalServerException":
      response = {
        ...(await deserializeAws_json1_1InternalServerExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ResourceInUseException":
    case "com.amazonaws.applicationinsights#ResourceInUseException":
      response = {
        ...(await deserializeAws_json1_1ResourceInUseExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ResourceNotFoundException":
    case "com.amazonaws.applicationinsights#ResourceNotFoundException":
      response = {
        ...(await deserializeAws_json1_1ResourceNotFoundExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "TagsAlreadyExistException":
    case "com.amazonaws.applicationinsights#TagsAlreadyExistException":
      response = {
        ...(await deserializeAws_json1_1TagsAlreadyExistExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ValidationException":
    case "com.amazonaws.applicationinsights#ValidationException":
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
const deserializeAws_json1_1CreateComponentCommand = async (output, context) => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_1CreateComponentCommandError(output, context);
  }
  const data = await parseBody(output.body, context);
  let contents = {};
  contents = deserializeAws_json1_1CreateComponentResponse(data, context);
  const response = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};
exports.deserializeAws_json1_1CreateComponentCommand = deserializeAws_json1_1CreateComponentCommand;
const deserializeAws_json1_1CreateComponentCommandError = async (output, context) => {
  const parsedOutput = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response;
  let errorCode = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InternalServerException":
    case "com.amazonaws.applicationinsights#InternalServerException":
      response = {
        ...(await deserializeAws_json1_1InternalServerExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ResourceInUseException":
    case "com.amazonaws.applicationinsights#ResourceInUseException":
      response = {
        ...(await deserializeAws_json1_1ResourceInUseExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ResourceNotFoundException":
    case "com.amazonaws.applicationinsights#ResourceNotFoundException":
      response = {
        ...(await deserializeAws_json1_1ResourceNotFoundExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ValidationException":
    case "com.amazonaws.applicationinsights#ValidationException":
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
const deserializeAws_json1_1CreateLogPatternCommand = async (output, context) => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_1CreateLogPatternCommandError(output, context);
  }
  const data = await parseBody(output.body, context);
  let contents = {};
  contents = deserializeAws_json1_1CreateLogPatternResponse(data, context);
  const response = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};
exports.deserializeAws_json1_1CreateLogPatternCommand = deserializeAws_json1_1CreateLogPatternCommand;
const deserializeAws_json1_1CreateLogPatternCommandError = async (output, context) => {
  const parsedOutput = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response;
  let errorCode = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InternalServerException":
    case "com.amazonaws.applicationinsights#InternalServerException":
      response = {
        ...(await deserializeAws_json1_1InternalServerExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ResourceInUseException":
    case "com.amazonaws.applicationinsights#ResourceInUseException":
      response = {
        ...(await deserializeAws_json1_1ResourceInUseExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ResourceNotFoundException":
    case "com.amazonaws.applicationinsights#ResourceNotFoundException":
      response = {
        ...(await deserializeAws_json1_1ResourceNotFoundExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ValidationException":
    case "com.amazonaws.applicationinsights#ValidationException":
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
const deserializeAws_json1_1DeleteApplicationCommand = async (output, context) => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_1DeleteApplicationCommandError(output, context);
  }
  const data = await parseBody(output.body, context);
  let contents = {};
  contents = deserializeAws_json1_1DeleteApplicationResponse(data, context);
  const response = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};
exports.deserializeAws_json1_1DeleteApplicationCommand = deserializeAws_json1_1DeleteApplicationCommand;
const deserializeAws_json1_1DeleteApplicationCommandError = async (output, context) => {
  const parsedOutput = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response;
  let errorCode = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "BadRequestException":
    case "com.amazonaws.applicationinsights#BadRequestException":
      response = {
        ...(await deserializeAws_json1_1BadRequestExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InternalServerException":
    case "com.amazonaws.applicationinsights#InternalServerException":
      response = {
        ...(await deserializeAws_json1_1InternalServerExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ResourceNotFoundException":
    case "com.amazonaws.applicationinsights#ResourceNotFoundException":
      response = {
        ...(await deserializeAws_json1_1ResourceNotFoundExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ValidationException":
    case "com.amazonaws.applicationinsights#ValidationException":
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
const deserializeAws_json1_1DeleteComponentCommand = async (output, context) => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_1DeleteComponentCommandError(output, context);
  }
  const data = await parseBody(output.body, context);
  let contents = {};
  contents = deserializeAws_json1_1DeleteComponentResponse(data, context);
  const response = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};
exports.deserializeAws_json1_1DeleteComponentCommand = deserializeAws_json1_1DeleteComponentCommand;
const deserializeAws_json1_1DeleteComponentCommandError = async (output, context) => {
  const parsedOutput = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response;
  let errorCode = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InternalServerException":
    case "com.amazonaws.applicationinsights#InternalServerException":
      response = {
        ...(await deserializeAws_json1_1InternalServerExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ResourceNotFoundException":
    case "com.amazonaws.applicationinsights#ResourceNotFoundException":
      response = {
        ...(await deserializeAws_json1_1ResourceNotFoundExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ValidationException":
    case "com.amazonaws.applicationinsights#ValidationException":
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
const deserializeAws_json1_1DeleteLogPatternCommand = async (output, context) => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_1DeleteLogPatternCommandError(output, context);
  }
  const data = await parseBody(output.body, context);
  let contents = {};
  contents = deserializeAws_json1_1DeleteLogPatternResponse(data, context);
  const response = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};
exports.deserializeAws_json1_1DeleteLogPatternCommand = deserializeAws_json1_1DeleteLogPatternCommand;
const deserializeAws_json1_1DeleteLogPatternCommandError = async (output, context) => {
  const parsedOutput = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response;
  let errorCode = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "BadRequestException":
    case "com.amazonaws.applicationinsights#BadRequestException":
      response = {
        ...(await deserializeAws_json1_1BadRequestExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InternalServerException":
    case "com.amazonaws.applicationinsights#InternalServerException":
      response = {
        ...(await deserializeAws_json1_1InternalServerExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ResourceNotFoundException":
    case "com.amazonaws.applicationinsights#ResourceNotFoundException":
      response = {
        ...(await deserializeAws_json1_1ResourceNotFoundExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ValidationException":
    case "com.amazonaws.applicationinsights#ValidationException":
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
const deserializeAws_json1_1DescribeApplicationCommand = async (output, context) => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_1DescribeApplicationCommandError(output, context);
  }
  const data = await parseBody(output.body, context);
  let contents = {};
  contents = deserializeAws_json1_1DescribeApplicationResponse(data, context);
  const response = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};
exports.deserializeAws_json1_1DescribeApplicationCommand = deserializeAws_json1_1DescribeApplicationCommand;
const deserializeAws_json1_1DescribeApplicationCommandError = async (output, context) => {
  const parsedOutput = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response;
  let errorCode = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InternalServerException":
    case "com.amazonaws.applicationinsights#InternalServerException":
      response = {
        ...(await deserializeAws_json1_1InternalServerExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ResourceNotFoundException":
    case "com.amazonaws.applicationinsights#ResourceNotFoundException":
      response = {
        ...(await deserializeAws_json1_1ResourceNotFoundExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ValidationException":
    case "com.amazonaws.applicationinsights#ValidationException":
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
const deserializeAws_json1_1DescribeComponentCommand = async (output, context) => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_1DescribeComponentCommandError(output, context);
  }
  const data = await parseBody(output.body, context);
  let contents = {};
  contents = deserializeAws_json1_1DescribeComponentResponse(data, context);
  const response = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};
exports.deserializeAws_json1_1DescribeComponentCommand = deserializeAws_json1_1DescribeComponentCommand;
const deserializeAws_json1_1DescribeComponentCommandError = async (output, context) => {
  const parsedOutput = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response;
  let errorCode = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InternalServerException":
    case "com.amazonaws.applicationinsights#InternalServerException":
      response = {
        ...(await deserializeAws_json1_1InternalServerExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ResourceNotFoundException":
    case "com.amazonaws.applicationinsights#ResourceNotFoundException":
      response = {
        ...(await deserializeAws_json1_1ResourceNotFoundExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ValidationException":
    case "com.amazonaws.applicationinsights#ValidationException":
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
const deserializeAws_json1_1DescribeComponentConfigurationCommand = async (output, context) => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_1DescribeComponentConfigurationCommandError(output, context);
  }
  const data = await parseBody(output.body, context);
  let contents = {};
  contents = deserializeAws_json1_1DescribeComponentConfigurationResponse(data, context);
  const response = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};
exports.deserializeAws_json1_1DescribeComponentConfigurationCommand =
  deserializeAws_json1_1DescribeComponentConfigurationCommand;
const deserializeAws_json1_1DescribeComponentConfigurationCommandError = async (output, context) => {
  const parsedOutput = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response;
  let errorCode = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InternalServerException":
    case "com.amazonaws.applicationinsights#InternalServerException":
      response = {
        ...(await deserializeAws_json1_1InternalServerExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ResourceNotFoundException":
    case "com.amazonaws.applicationinsights#ResourceNotFoundException":
      response = {
        ...(await deserializeAws_json1_1ResourceNotFoundExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ValidationException":
    case "com.amazonaws.applicationinsights#ValidationException":
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
const deserializeAws_json1_1DescribeComponentConfigurationRecommendationCommand = async (output, context) => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_1DescribeComponentConfigurationRecommendationCommandError(output, context);
  }
  const data = await parseBody(output.body, context);
  let contents = {};
  contents = deserializeAws_json1_1DescribeComponentConfigurationRecommendationResponse(data, context);
  const response = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};
exports.deserializeAws_json1_1DescribeComponentConfigurationRecommendationCommand =
  deserializeAws_json1_1DescribeComponentConfigurationRecommendationCommand;
const deserializeAws_json1_1DescribeComponentConfigurationRecommendationCommandError = async (output, context) => {
  const parsedOutput = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response;
  let errorCode = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InternalServerException":
    case "com.amazonaws.applicationinsights#InternalServerException":
      response = {
        ...(await deserializeAws_json1_1InternalServerExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ResourceNotFoundException":
    case "com.amazonaws.applicationinsights#ResourceNotFoundException":
      response = {
        ...(await deserializeAws_json1_1ResourceNotFoundExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ValidationException":
    case "com.amazonaws.applicationinsights#ValidationException":
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
const deserializeAws_json1_1DescribeLogPatternCommand = async (output, context) => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_1DescribeLogPatternCommandError(output, context);
  }
  const data = await parseBody(output.body, context);
  let contents = {};
  contents = deserializeAws_json1_1DescribeLogPatternResponse(data, context);
  const response = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};
exports.deserializeAws_json1_1DescribeLogPatternCommand = deserializeAws_json1_1DescribeLogPatternCommand;
const deserializeAws_json1_1DescribeLogPatternCommandError = async (output, context) => {
  const parsedOutput = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response;
  let errorCode = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InternalServerException":
    case "com.amazonaws.applicationinsights#InternalServerException":
      response = {
        ...(await deserializeAws_json1_1InternalServerExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ResourceNotFoundException":
    case "com.amazonaws.applicationinsights#ResourceNotFoundException":
      response = {
        ...(await deserializeAws_json1_1ResourceNotFoundExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ValidationException":
    case "com.amazonaws.applicationinsights#ValidationException":
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
const deserializeAws_json1_1DescribeObservationCommand = async (output, context) => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_1DescribeObservationCommandError(output, context);
  }
  const data = await parseBody(output.body, context);
  let contents = {};
  contents = deserializeAws_json1_1DescribeObservationResponse(data, context);
  const response = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};
exports.deserializeAws_json1_1DescribeObservationCommand = deserializeAws_json1_1DescribeObservationCommand;
const deserializeAws_json1_1DescribeObservationCommandError = async (output, context) => {
  const parsedOutput = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response;
  let errorCode = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InternalServerException":
    case "com.amazonaws.applicationinsights#InternalServerException":
      response = {
        ...(await deserializeAws_json1_1InternalServerExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ResourceNotFoundException":
    case "com.amazonaws.applicationinsights#ResourceNotFoundException":
      response = {
        ...(await deserializeAws_json1_1ResourceNotFoundExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ValidationException":
    case "com.amazonaws.applicationinsights#ValidationException":
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
const deserializeAws_json1_1DescribeProblemCommand = async (output, context) => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_1DescribeProblemCommandError(output, context);
  }
  const data = await parseBody(output.body, context);
  let contents = {};
  contents = deserializeAws_json1_1DescribeProblemResponse(data, context);
  const response = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};
exports.deserializeAws_json1_1DescribeProblemCommand = deserializeAws_json1_1DescribeProblemCommand;
const deserializeAws_json1_1DescribeProblemCommandError = async (output, context) => {
  const parsedOutput = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response;
  let errorCode = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InternalServerException":
    case "com.amazonaws.applicationinsights#InternalServerException":
      response = {
        ...(await deserializeAws_json1_1InternalServerExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ResourceNotFoundException":
    case "com.amazonaws.applicationinsights#ResourceNotFoundException":
      response = {
        ...(await deserializeAws_json1_1ResourceNotFoundExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ValidationException":
    case "com.amazonaws.applicationinsights#ValidationException":
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
const deserializeAws_json1_1DescribeProblemObservationsCommand = async (output, context) => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_1DescribeProblemObservationsCommandError(output, context);
  }
  const data = await parseBody(output.body, context);
  let contents = {};
  contents = deserializeAws_json1_1DescribeProblemObservationsResponse(data, context);
  const response = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};
exports.deserializeAws_json1_1DescribeProblemObservationsCommand =
  deserializeAws_json1_1DescribeProblemObservationsCommand;
const deserializeAws_json1_1DescribeProblemObservationsCommandError = async (output, context) => {
  const parsedOutput = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response;
  let errorCode = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InternalServerException":
    case "com.amazonaws.applicationinsights#InternalServerException":
      response = {
        ...(await deserializeAws_json1_1InternalServerExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ResourceNotFoundException":
    case "com.amazonaws.applicationinsights#ResourceNotFoundException":
      response = {
        ...(await deserializeAws_json1_1ResourceNotFoundExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ValidationException":
    case "com.amazonaws.applicationinsights#ValidationException":
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
const deserializeAws_json1_1ListApplicationsCommand = async (output, context) => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_1ListApplicationsCommandError(output, context);
  }
  const data = await parseBody(output.body, context);
  let contents = {};
  contents = deserializeAws_json1_1ListApplicationsResponse(data, context);
  const response = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};
exports.deserializeAws_json1_1ListApplicationsCommand = deserializeAws_json1_1ListApplicationsCommand;
const deserializeAws_json1_1ListApplicationsCommandError = async (output, context) => {
  const parsedOutput = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response;
  let errorCode = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InternalServerException":
    case "com.amazonaws.applicationinsights#InternalServerException":
      response = {
        ...(await deserializeAws_json1_1InternalServerExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ValidationException":
    case "com.amazonaws.applicationinsights#ValidationException":
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
const deserializeAws_json1_1ListComponentsCommand = async (output, context) => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_1ListComponentsCommandError(output, context);
  }
  const data = await parseBody(output.body, context);
  let contents = {};
  contents = deserializeAws_json1_1ListComponentsResponse(data, context);
  const response = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};
exports.deserializeAws_json1_1ListComponentsCommand = deserializeAws_json1_1ListComponentsCommand;
const deserializeAws_json1_1ListComponentsCommandError = async (output, context) => {
  const parsedOutput = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response;
  let errorCode = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InternalServerException":
    case "com.amazonaws.applicationinsights#InternalServerException":
      response = {
        ...(await deserializeAws_json1_1InternalServerExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ResourceNotFoundException":
    case "com.amazonaws.applicationinsights#ResourceNotFoundException":
      response = {
        ...(await deserializeAws_json1_1ResourceNotFoundExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ValidationException":
    case "com.amazonaws.applicationinsights#ValidationException":
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
const deserializeAws_json1_1ListConfigurationHistoryCommand = async (output, context) => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_1ListConfigurationHistoryCommandError(output, context);
  }
  const data = await parseBody(output.body, context);
  let contents = {};
  contents = deserializeAws_json1_1ListConfigurationHistoryResponse(data, context);
  const response = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};
exports.deserializeAws_json1_1ListConfigurationHistoryCommand = deserializeAws_json1_1ListConfigurationHistoryCommand;
const deserializeAws_json1_1ListConfigurationHistoryCommandError = async (output, context) => {
  const parsedOutput = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response;
  let errorCode = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InternalServerException":
    case "com.amazonaws.applicationinsights#InternalServerException":
      response = {
        ...(await deserializeAws_json1_1InternalServerExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ResourceNotFoundException":
    case "com.amazonaws.applicationinsights#ResourceNotFoundException":
      response = {
        ...(await deserializeAws_json1_1ResourceNotFoundExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ValidationException":
    case "com.amazonaws.applicationinsights#ValidationException":
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
const deserializeAws_json1_1ListLogPatternsCommand = async (output, context) => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_1ListLogPatternsCommandError(output, context);
  }
  const data = await parseBody(output.body, context);
  let contents = {};
  contents = deserializeAws_json1_1ListLogPatternsResponse(data, context);
  const response = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};
exports.deserializeAws_json1_1ListLogPatternsCommand = deserializeAws_json1_1ListLogPatternsCommand;
const deserializeAws_json1_1ListLogPatternsCommandError = async (output, context) => {
  const parsedOutput = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response;
  let errorCode = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InternalServerException":
    case "com.amazonaws.applicationinsights#InternalServerException":
      response = {
        ...(await deserializeAws_json1_1InternalServerExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ResourceNotFoundException":
    case "com.amazonaws.applicationinsights#ResourceNotFoundException":
      response = {
        ...(await deserializeAws_json1_1ResourceNotFoundExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ValidationException":
    case "com.amazonaws.applicationinsights#ValidationException":
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
const deserializeAws_json1_1ListLogPatternSetsCommand = async (output, context) => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_1ListLogPatternSetsCommandError(output, context);
  }
  const data = await parseBody(output.body, context);
  let contents = {};
  contents = deserializeAws_json1_1ListLogPatternSetsResponse(data, context);
  const response = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};
exports.deserializeAws_json1_1ListLogPatternSetsCommand = deserializeAws_json1_1ListLogPatternSetsCommand;
const deserializeAws_json1_1ListLogPatternSetsCommandError = async (output, context) => {
  const parsedOutput = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response;
  let errorCode = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InternalServerException":
    case "com.amazonaws.applicationinsights#InternalServerException":
      response = {
        ...(await deserializeAws_json1_1InternalServerExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ResourceNotFoundException":
    case "com.amazonaws.applicationinsights#ResourceNotFoundException":
      response = {
        ...(await deserializeAws_json1_1ResourceNotFoundExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ValidationException":
    case "com.amazonaws.applicationinsights#ValidationException":
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
const deserializeAws_json1_1ListProblemsCommand = async (output, context) => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_1ListProblemsCommandError(output, context);
  }
  const data = await parseBody(output.body, context);
  let contents = {};
  contents = deserializeAws_json1_1ListProblemsResponse(data, context);
  const response = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};
exports.deserializeAws_json1_1ListProblemsCommand = deserializeAws_json1_1ListProblemsCommand;
const deserializeAws_json1_1ListProblemsCommandError = async (output, context) => {
  const parsedOutput = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response;
  let errorCode = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InternalServerException":
    case "com.amazonaws.applicationinsights#InternalServerException":
      response = {
        ...(await deserializeAws_json1_1InternalServerExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ResourceNotFoundException":
    case "com.amazonaws.applicationinsights#ResourceNotFoundException":
      response = {
        ...(await deserializeAws_json1_1ResourceNotFoundExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ValidationException":
    case "com.amazonaws.applicationinsights#ValidationException":
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
const deserializeAws_json1_1ListTagsForResourceCommand = async (output, context) => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_1ListTagsForResourceCommandError(output, context);
  }
  const data = await parseBody(output.body, context);
  let contents = {};
  contents = deserializeAws_json1_1ListTagsForResourceResponse(data, context);
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
    case "ResourceNotFoundException":
    case "com.amazonaws.applicationinsights#ResourceNotFoundException":
      response = {
        ...(await deserializeAws_json1_1ResourceNotFoundExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ValidationException":
    case "com.amazonaws.applicationinsights#ValidationException":
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
const deserializeAws_json1_1TagResourceCommand = async (output, context) => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_1TagResourceCommandError(output, context);
  }
  const data = await parseBody(output.body, context);
  let contents = {};
  contents = deserializeAws_json1_1TagResourceResponse(data, context);
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
    case "ResourceNotFoundException":
    case "com.amazonaws.applicationinsights#ResourceNotFoundException":
      response = {
        ...(await deserializeAws_json1_1ResourceNotFoundExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "TooManyTagsException":
    case "com.amazonaws.applicationinsights#TooManyTagsException":
      response = {
        ...(await deserializeAws_json1_1TooManyTagsExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ValidationException":
    case "com.amazonaws.applicationinsights#ValidationException":
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
const deserializeAws_json1_1UntagResourceCommand = async (output, context) => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_1UntagResourceCommandError(output, context);
  }
  const data = await parseBody(output.body, context);
  let contents = {};
  contents = deserializeAws_json1_1UntagResourceResponse(data, context);
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
    case "ResourceNotFoundException":
    case "com.amazonaws.applicationinsights#ResourceNotFoundException":
      response = {
        ...(await deserializeAws_json1_1ResourceNotFoundExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ValidationException":
    case "com.amazonaws.applicationinsights#ValidationException":
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
    case "InternalServerException":
    case "com.amazonaws.applicationinsights#InternalServerException":
      response = {
        ...(await deserializeAws_json1_1InternalServerExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ResourceNotFoundException":
    case "com.amazonaws.applicationinsights#ResourceNotFoundException":
      response = {
        ...(await deserializeAws_json1_1ResourceNotFoundExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ValidationException":
    case "com.amazonaws.applicationinsights#ValidationException":
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
const deserializeAws_json1_1UpdateComponentCommand = async (output, context) => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_1UpdateComponentCommandError(output, context);
  }
  const data = await parseBody(output.body, context);
  let contents = {};
  contents = deserializeAws_json1_1UpdateComponentResponse(data, context);
  const response = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};
exports.deserializeAws_json1_1UpdateComponentCommand = deserializeAws_json1_1UpdateComponentCommand;
const deserializeAws_json1_1UpdateComponentCommandError = async (output, context) => {
  const parsedOutput = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response;
  let errorCode = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InternalServerException":
    case "com.amazonaws.applicationinsights#InternalServerException":
      response = {
        ...(await deserializeAws_json1_1InternalServerExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ResourceInUseException":
    case "com.amazonaws.applicationinsights#ResourceInUseException":
      response = {
        ...(await deserializeAws_json1_1ResourceInUseExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ResourceNotFoundException":
    case "com.amazonaws.applicationinsights#ResourceNotFoundException":
      response = {
        ...(await deserializeAws_json1_1ResourceNotFoundExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ValidationException":
    case "com.amazonaws.applicationinsights#ValidationException":
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
const deserializeAws_json1_1UpdateComponentConfigurationCommand = async (output, context) => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_1UpdateComponentConfigurationCommandError(output, context);
  }
  const data = await parseBody(output.body, context);
  let contents = {};
  contents = deserializeAws_json1_1UpdateComponentConfigurationResponse(data, context);
  const response = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};
exports.deserializeAws_json1_1UpdateComponentConfigurationCommand =
  deserializeAws_json1_1UpdateComponentConfigurationCommand;
const deserializeAws_json1_1UpdateComponentConfigurationCommandError = async (output, context) => {
  const parsedOutput = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response;
  let errorCode = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InternalServerException":
    case "com.amazonaws.applicationinsights#InternalServerException":
      response = {
        ...(await deserializeAws_json1_1InternalServerExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ResourceNotFoundException":
    case "com.amazonaws.applicationinsights#ResourceNotFoundException":
      response = {
        ...(await deserializeAws_json1_1ResourceNotFoundExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ValidationException":
    case "com.amazonaws.applicationinsights#ValidationException":
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
const deserializeAws_json1_1UpdateLogPatternCommand = async (output, context) => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_1UpdateLogPatternCommandError(output, context);
  }
  const data = await parseBody(output.body, context);
  let contents = {};
  contents = deserializeAws_json1_1UpdateLogPatternResponse(data, context);
  const response = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};
exports.deserializeAws_json1_1UpdateLogPatternCommand = deserializeAws_json1_1UpdateLogPatternCommand;
const deserializeAws_json1_1UpdateLogPatternCommandError = async (output, context) => {
  const parsedOutput = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response;
  let errorCode = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InternalServerException":
    case "com.amazonaws.applicationinsights#InternalServerException":
      response = {
        ...(await deserializeAws_json1_1InternalServerExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ResourceInUseException":
    case "com.amazonaws.applicationinsights#ResourceInUseException":
      response = {
        ...(await deserializeAws_json1_1ResourceInUseExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ResourceNotFoundException":
    case "com.amazonaws.applicationinsights#ResourceNotFoundException":
      response = {
        ...(await deserializeAws_json1_1ResourceNotFoundExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ValidationException":
    case "com.amazonaws.applicationinsights#ValidationException":
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
const deserializeAws_json1_1BadRequestExceptionResponse = async (parsedOutput, context) => {
  const body = parsedOutput.body;
  const deserialized = deserializeAws_json1_1BadRequestException(body, context);
  const contents = {
    name: "BadRequestException",
    $fault: "client",
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  };
  return contents;
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
const deserializeAws_json1_1TagsAlreadyExistExceptionResponse = async (parsedOutput, context) => {
  const body = parsedOutput.body;
  const deserialized = deserializeAws_json1_1TagsAlreadyExistException(body, context);
  const contents = {
    name: "TagsAlreadyExistException",
    $fault: "client",
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  };
  return contents;
};
const deserializeAws_json1_1TooManyTagsExceptionResponse = async (parsedOutput, context) => {
  const body = parsedOutput.body;
  const deserialized = deserializeAws_json1_1TooManyTagsException(body, context);
  const contents = {
    name: "TooManyTagsException",
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
const serializeAws_json1_1CreateApplicationRequest = (input, context) => {
  return {
    ...(input.CWEMonitorEnabled !== undefined &&
      input.CWEMonitorEnabled !== null && { CWEMonitorEnabled: input.CWEMonitorEnabled }),
    ...(input.OpsCenterEnabled !== undefined &&
      input.OpsCenterEnabled !== null && { OpsCenterEnabled: input.OpsCenterEnabled }),
    ...(input.OpsItemSNSTopicArn !== undefined &&
      input.OpsItemSNSTopicArn !== null && { OpsItemSNSTopicArn: input.OpsItemSNSTopicArn }),
    ...(input.ResourceGroupName !== undefined &&
      input.ResourceGroupName !== null && { ResourceGroupName: input.ResourceGroupName }),
    ...(input.Tags !== undefined && input.Tags !== null && { Tags: serializeAws_json1_1TagList(input.Tags, context) }),
  };
};
const serializeAws_json1_1CreateComponentRequest = (input, context) => {
  return {
    ...(input.ComponentName !== undefined && input.ComponentName !== null && { ComponentName: input.ComponentName }),
    ...(input.ResourceGroupName !== undefined &&
      input.ResourceGroupName !== null && { ResourceGroupName: input.ResourceGroupName }),
    ...(input.ResourceList !== undefined &&
      input.ResourceList !== null && { ResourceList: serializeAws_json1_1ResourceList(input.ResourceList, context) }),
  };
};
const serializeAws_json1_1CreateLogPatternRequest = (input, context) => {
  return {
    ...(input.Pattern !== undefined && input.Pattern !== null && { Pattern: input.Pattern }),
    ...(input.PatternName !== undefined && input.PatternName !== null && { PatternName: input.PatternName }),
    ...(input.PatternSetName !== undefined &&
      input.PatternSetName !== null && { PatternSetName: input.PatternSetName }),
    ...(input.Rank !== undefined && input.Rank !== null && { Rank: input.Rank }),
    ...(input.ResourceGroupName !== undefined &&
      input.ResourceGroupName !== null && { ResourceGroupName: input.ResourceGroupName }),
  };
};
const serializeAws_json1_1DeleteApplicationRequest = (input, context) => {
  return {
    ...(input.ResourceGroupName !== undefined &&
      input.ResourceGroupName !== null && { ResourceGroupName: input.ResourceGroupName }),
  };
};
const serializeAws_json1_1DeleteComponentRequest = (input, context) => {
  return {
    ...(input.ComponentName !== undefined && input.ComponentName !== null && { ComponentName: input.ComponentName }),
    ...(input.ResourceGroupName !== undefined &&
      input.ResourceGroupName !== null && { ResourceGroupName: input.ResourceGroupName }),
  };
};
const serializeAws_json1_1DeleteLogPatternRequest = (input, context) => {
  return {
    ...(input.PatternName !== undefined && input.PatternName !== null && { PatternName: input.PatternName }),
    ...(input.PatternSetName !== undefined &&
      input.PatternSetName !== null && { PatternSetName: input.PatternSetName }),
    ...(input.ResourceGroupName !== undefined &&
      input.ResourceGroupName !== null && { ResourceGroupName: input.ResourceGroupName }),
  };
};
const serializeAws_json1_1DescribeApplicationRequest = (input, context) => {
  return {
    ...(input.ResourceGroupName !== undefined &&
      input.ResourceGroupName !== null && { ResourceGroupName: input.ResourceGroupName }),
  };
};
const serializeAws_json1_1DescribeComponentConfigurationRecommendationRequest = (input, context) => {
  return {
    ...(input.ComponentName !== undefined && input.ComponentName !== null && { ComponentName: input.ComponentName }),
    ...(input.ResourceGroupName !== undefined &&
      input.ResourceGroupName !== null && { ResourceGroupName: input.ResourceGroupName }),
    ...(input.Tier !== undefined && input.Tier !== null && { Tier: input.Tier }),
  };
};
const serializeAws_json1_1DescribeComponentConfigurationRequest = (input, context) => {
  return {
    ...(input.ComponentName !== undefined && input.ComponentName !== null && { ComponentName: input.ComponentName }),
    ...(input.ResourceGroupName !== undefined &&
      input.ResourceGroupName !== null && { ResourceGroupName: input.ResourceGroupName }),
  };
};
const serializeAws_json1_1DescribeComponentRequest = (input, context) => {
  return {
    ...(input.ComponentName !== undefined && input.ComponentName !== null && { ComponentName: input.ComponentName }),
    ...(input.ResourceGroupName !== undefined &&
      input.ResourceGroupName !== null && { ResourceGroupName: input.ResourceGroupName }),
  };
};
const serializeAws_json1_1DescribeLogPatternRequest = (input, context) => {
  return {
    ...(input.PatternName !== undefined && input.PatternName !== null && { PatternName: input.PatternName }),
    ...(input.PatternSetName !== undefined &&
      input.PatternSetName !== null && { PatternSetName: input.PatternSetName }),
    ...(input.ResourceGroupName !== undefined &&
      input.ResourceGroupName !== null && { ResourceGroupName: input.ResourceGroupName }),
  };
};
const serializeAws_json1_1DescribeObservationRequest = (input, context) => {
  return {
    ...(input.ObservationId !== undefined && input.ObservationId !== null && { ObservationId: input.ObservationId }),
  };
};
const serializeAws_json1_1DescribeProblemObservationsRequest = (input, context) => {
  return {
    ...(input.ProblemId !== undefined && input.ProblemId !== null && { ProblemId: input.ProblemId }),
  };
};
const serializeAws_json1_1DescribeProblemRequest = (input, context) => {
  return {
    ...(input.ProblemId !== undefined && input.ProblemId !== null && { ProblemId: input.ProblemId }),
  };
};
const serializeAws_json1_1ListApplicationsRequest = (input, context) => {
  return {
    ...(input.MaxResults !== undefined && input.MaxResults !== null && { MaxResults: input.MaxResults }),
    ...(input.NextToken !== undefined && input.NextToken !== null && { NextToken: input.NextToken }),
  };
};
const serializeAws_json1_1ListComponentsRequest = (input, context) => {
  return {
    ...(input.MaxResults !== undefined && input.MaxResults !== null && { MaxResults: input.MaxResults }),
    ...(input.NextToken !== undefined && input.NextToken !== null && { NextToken: input.NextToken }),
    ...(input.ResourceGroupName !== undefined &&
      input.ResourceGroupName !== null && { ResourceGroupName: input.ResourceGroupName }),
  };
};
const serializeAws_json1_1ListConfigurationHistoryRequest = (input, context) => {
  return {
    ...(input.EndTime !== undefined &&
      input.EndTime !== null && { EndTime: Math.round(input.EndTime.getTime() / 1000) }),
    ...(input.EventStatus !== undefined && input.EventStatus !== null && { EventStatus: input.EventStatus }),
    ...(input.MaxResults !== undefined && input.MaxResults !== null && { MaxResults: input.MaxResults }),
    ...(input.NextToken !== undefined && input.NextToken !== null && { NextToken: input.NextToken }),
    ...(input.ResourceGroupName !== undefined &&
      input.ResourceGroupName !== null && { ResourceGroupName: input.ResourceGroupName }),
    ...(input.StartTime !== undefined &&
      input.StartTime !== null && { StartTime: Math.round(input.StartTime.getTime() / 1000) }),
  };
};
const serializeAws_json1_1ListLogPatternSetsRequest = (input, context) => {
  return {
    ...(input.MaxResults !== undefined && input.MaxResults !== null && { MaxResults: input.MaxResults }),
    ...(input.NextToken !== undefined && input.NextToken !== null && { NextToken: input.NextToken }),
    ...(input.ResourceGroupName !== undefined &&
      input.ResourceGroupName !== null && { ResourceGroupName: input.ResourceGroupName }),
  };
};
const serializeAws_json1_1ListLogPatternsRequest = (input, context) => {
  return {
    ...(input.MaxResults !== undefined && input.MaxResults !== null && { MaxResults: input.MaxResults }),
    ...(input.NextToken !== undefined && input.NextToken !== null && { NextToken: input.NextToken }),
    ...(input.PatternSetName !== undefined &&
      input.PatternSetName !== null && { PatternSetName: input.PatternSetName }),
    ...(input.ResourceGroupName !== undefined &&
      input.ResourceGroupName !== null && { ResourceGroupName: input.ResourceGroupName }),
  };
};
const serializeAws_json1_1ListProblemsRequest = (input, context) => {
  return {
    ...(input.EndTime !== undefined &&
      input.EndTime !== null && { EndTime: Math.round(input.EndTime.getTime() / 1000) }),
    ...(input.MaxResults !== undefined && input.MaxResults !== null && { MaxResults: input.MaxResults }),
    ...(input.NextToken !== undefined && input.NextToken !== null && { NextToken: input.NextToken }),
    ...(input.ResourceGroupName !== undefined &&
      input.ResourceGroupName !== null && { ResourceGroupName: input.ResourceGroupName }),
    ...(input.StartTime !== undefined &&
      input.StartTime !== null && { StartTime: Math.round(input.StartTime.getTime() / 1000) }),
  };
};
const serializeAws_json1_1ListTagsForResourceRequest = (input, context) => {
  return {
    ...(input.ResourceARN !== undefined && input.ResourceARN !== null && { ResourceARN: input.ResourceARN }),
  };
};
const serializeAws_json1_1ResourceList = (input, context) => {
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
const serializeAws_json1_1TagResourceRequest = (input, context) => {
  return {
    ...(input.ResourceARN !== undefined && input.ResourceARN !== null && { ResourceARN: input.ResourceARN }),
    ...(input.Tags !== undefined && input.Tags !== null && { Tags: serializeAws_json1_1TagList(input.Tags, context) }),
  };
};
const serializeAws_json1_1UntagResourceRequest = (input, context) => {
  return {
    ...(input.ResourceARN !== undefined && input.ResourceARN !== null && { ResourceARN: input.ResourceARN }),
    ...(input.TagKeys !== undefined &&
      input.TagKeys !== null && { TagKeys: serializeAws_json1_1TagKeyList(input.TagKeys, context) }),
  };
};
const serializeAws_json1_1UpdateApplicationRequest = (input, context) => {
  return {
    ...(input.CWEMonitorEnabled !== undefined &&
      input.CWEMonitorEnabled !== null && { CWEMonitorEnabled: input.CWEMonitorEnabled }),
    ...(input.OpsCenterEnabled !== undefined &&
      input.OpsCenterEnabled !== null && { OpsCenterEnabled: input.OpsCenterEnabled }),
    ...(input.OpsItemSNSTopicArn !== undefined &&
      input.OpsItemSNSTopicArn !== null && { OpsItemSNSTopicArn: input.OpsItemSNSTopicArn }),
    ...(input.RemoveSNSTopic !== undefined &&
      input.RemoveSNSTopic !== null && { RemoveSNSTopic: input.RemoveSNSTopic }),
    ...(input.ResourceGroupName !== undefined &&
      input.ResourceGroupName !== null && { ResourceGroupName: input.ResourceGroupName }),
  };
};
const serializeAws_json1_1UpdateComponentConfigurationRequest = (input, context) => {
  return {
    ...(input.ComponentConfiguration !== undefined &&
      input.ComponentConfiguration !== null && { ComponentConfiguration: input.ComponentConfiguration }),
    ...(input.ComponentName !== undefined && input.ComponentName !== null && { ComponentName: input.ComponentName }),
    ...(input.Monitor !== undefined && input.Monitor !== null && { Monitor: input.Monitor }),
    ...(input.ResourceGroupName !== undefined &&
      input.ResourceGroupName !== null && { ResourceGroupName: input.ResourceGroupName }),
    ...(input.Tier !== undefined && input.Tier !== null && { Tier: input.Tier }),
  };
};
const serializeAws_json1_1UpdateComponentRequest = (input, context) => {
  return {
    ...(input.ComponentName !== undefined && input.ComponentName !== null && { ComponentName: input.ComponentName }),
    ...(input.NewComponentName !== undefined &&
      input.NewComponentName !== null && { NewComponentName: input.NewComponentName }),
    ...(input.ResourceGroupName !== undefined &&
      input.ResourceGroupName !== null && { ResourceGroupName: input.ResourceGroupName }),
    ...(input.ResourceList !== undefined &&
      input.ResourceList !== null && { ResourceList: serializeAws_json1_1ResourceList(input.ResourceList, context) }),
  };
};
const serializeAws_json1_1UpdateLogPatternRequest = (input, context) => {
  return {
    ...(input.Pattern !== undefined && input.Pattern !== null && { Pattern: input.Pattern }),
    ...(input.PatternName !== undefined && input.PatternName !== null && { PatternName: input.PatternName }),
    ...(input.PatternSetName !== undefined &&
      input.PatternSetName !== null && { PatternSetName: input.PatternSetName }),
    ...(input.Rank !== undefined && input.Rank !== null && { Rank: input.Rank }),
    ...(input.ResourceGroupName !== undefined &&
      input.ResourceGroupName !== null && { ResourceGroupName: input.ResourceGroupName }),
  };
};
const deserializeAws_json1_1AccessDeniedException = (output, context) => {
  return {
    Message: output.Message !== undefined && output.Message !== null ? output.Message : undefined,
  };
};
const deserializeAws_json1_1ApplicationComponent = (output, context) => {
  return {
    ComponentName:
      output.ComponentName !== undefined && output.ComponentName !== null ? output.ComponentName : undefined,
    ComponentRemarks:
      output.ComponentRemarks !== undefined && output.ComponentRemarks !== null ? output.ComponentRemarks : undefined,
    DetectedWorkload:
      output.DetectedWorkload !== undefined && output.DetectedWorkload !== null
        ? deserializeAws_json1_1DetectedWorkload(output.DetectedWorkload, context)
        : undefined,
    Monitor: output.Monitor !== undefined && output.Monitor !== null ? output.Monitor : undefined,
    OsType: output.OsType !== undefined && output.OsType !== null ? output.OsType : undefined,
    ResourceType: output.ResourceType !== undefined && output.ResourceType !== null ? output.ResourceType : undefined,
    Tier: output.Tier !== undefined && output.Tier !== null ? output.Tier : undefined,
  };
};
const deserializeAws_json1_1ApplicationComponentList = (output, context) => {
  return (output || [])
    .filter((e) => e != null)
    .map((entry) => {
      if (entry === null) {
        return null;
      }
      return deserializeAws_json1_1ApplicationComponent(entry, context);
    });
};
const deserializeAws_json1_1ApplicationInfo = (output, context) => {
  return {
    CWEMonitorEnabled:
      output.CWEMonitorEnabled !== undefined && output.CWEMonitorEnabled !== null
        ? output.CWEMonitorEnabled
        : undefined,
    LifeCycle: output.LifeCycle !== undefined && output.LifeCycle !== null ? output.LifeCycle : undefined,
    OpsCenterEnabled:
      output.OpsCenterEnabled !== undefined && output.OpsCenterEnabled !== null ? output.OpsCenterEnabled : undefined,
    OpsItemSNSTopicArn:
      output.OpsItemSNSTopicArn !== undefined && output.OpsItemSNSTopicArn !== null
        ? output.OpsItemSNSTopicArn
        : undefined,
    Remarks: output.Remarks !== undefined && output.Remarks !== null ? output.Remarks : undefined,
    ResourceGroupName:
      output.ResourceGroupName !== undefined && output.ResourceGroupName !== null
        ? output.ResourceGroupName
        : undefined,
  };
};
const deserializeAws_json1_1ApplicationInfoList = (output, context) => {
  return (output || [])
    .filter((e) => e != null)
    .map((entry) => {
      if (entry === null) {
        return null;
      }
      return deserializeAws_json1_1ApplicationInfo(entry, context);
    });
};
const deserializeAws_json1_1BadRequestException = (output, context) => {
  return {
    Message: output.Message !== undefined && output.Message !== null ? output.Message : undefined,
  };
};
const deserializeAws_json1_1ConfigurationEvent = (output, context) => {
  return {
    EventDetail: output.EventDetail !== undefined && output.EventDetail !== null ? output.EventDetail : undefined,
    EventResourceName:
      output.EventResourceName !== undefined && output.EventResourceName !== null
        ? output.EventResourceName
        : undefined,
    EventResourceType:
      output.EventResourceType !== undefined && output.EventResourceType !== null
        ? output.EventResourceType
        : undefined,
    EventStatus: output.EventStatus !== undefined && output.EventStatus !== null ? output.EventStatus : undefined,
    EventTime:
      output.EventTime !== undefined && output.EventTime !== null
        ? new Date(Math.round(output.EventTime * 1000))
        : undefined,
    MonitoredResourceARN:
      output.MonitoredResourceARN !== undefined && output.MonitoredResourceARN !== null
        ? output.MonitoredResourceARN
        : undefined,
  };
};
const deserializeAws_json1_1ConfigurationEventList = (output, context) => {
  return (output || [])
    .filter((e) => e != null)
    .map((entry) => {
      if (entry === null) {
        return null;
      }
      return deserializeAws_json1_1ConfigurationEvent(entry, context);
    });
};
const deserializeAws_json1_1CreateApplicationResponse = (output, context) => {
  return {
    ApplicationInfo:
      output.ApplicationInfo !== undefined && output.ApplicationInfo !== null
        ? deserializeAws_json1_1ApplicationInfo(output.ApplicationInfo, context)
        : undefined,
  };
};
const deserializeAws_json1_1CreateComponentResponse = (output, context) => {
  return {};
};
const deserializeAws_json1_1CreateLogPatternResponse = (output, context) => {
  return {
    LogPattern:
      output.LogPattern !== undefined && output.LogPattern !== null
        ? deserializeAws_json1_1LogPattern(output.LogPattern, context)
        : undefined,
    ResourceGroupName:
      output.ResourceGroupName !== undefined && output.ResourceGroupName !== null
        ? output.ResourceGroupName
        : undefined,
  };
};
const deserializeAws_json1_1DeleteApplicationResponse = (output, context) => {
  return {};
};
const deserializeAws_json1_1DeleteComponentResponse = (output, context) => {
  return {};
};
const deserializeAws_json1_1DeleteLogPatternResponse = (output, context) => {
  return {};
};
const deserializeAws_json1_1DescribeApplicationResponse = (output, context) => {
  return {
    ApplicationInfo:
      output.ApplicationInfo !== undefined && output.ApplicationInfo !== null
        ? deserializeAws_json1_1ApplicationInfo(output.ApplicationInfo, context)
        : undefined,
  };
};
const deserializeAws_json1_1DescribeComponentConfigurationRecommendationResponse = (output, context) => {
  return {
    ComponentConfiguration:
      output.ComponentConfiguration !== undefined && output.ComponentConfiguration !== null
        ? output.ComponentConfiguration
        : undefined,
  };
};
const deserializeAws_json1_1DescribeComponentConfigurationResponse = (output, context) => {
  return {
    ComponentConfiguration:
      output.ComponentConfiguration !== undefined && output.ComponentConfiguration !== null
        ? output.ComponentConfiguration
        : undefined,
    Monitor: output.Monitor !== undefined && output.Monitor !== null ? output.Monitor : undefined,
    Tier: output.Tier !== undefined && output.Tier !== null ? output.Tier : undefined,
  };
};
const deserializeAws_json1_1DescribeComponentResponse = (output, context) => {
  return {
    ApplicationComponent:
      output.ApplicationComponent !== undefined && output.ApplicationComponent !== null
        ? deserializeAws_json1_1ApplicationComponent(output.ApplicationComponent, context)
        : undefined,
    ResourceList:
      output.ResourceList !== undefined && output.ResourceList !== null
        ? deserializeAws_json1_1ResourceList(output.ResourceList, context)
        : undefined,
  };
};
const deserializeAws_json1_1DescribeLogPatternResponse = (output, context) => {
  return {
    LogPattern:
      output.LogPattern !== undefined && output.LogPattern !== null
        ? deserializeAws_json1_1LogPattern(output.LogPattern, context)
        : undefined,
    ResourceGroupName:
      output.ResourceGroupName !== undefined && output.ResourceGroupName !== null
        ? output.ResourceGroupName
        : undefined,
  };
};
const deserializeAws_json1_1DescribeObservationResponse = (output, context) => {
  return {
    Observation:
      output.Observation !== undefined && output.Observation !== null
        ? deserializeAws_json1_1Observation(output.Observation, context)
        : undefined,
  };
};
const deserializeAws_json1_1DescribeProblemObservationsResponse = (output, context) => {
  return {
    RelatedObservations:
      output.RelatedObservations !== undefined && output.RelatedObservations !== null
        ? deserializeAws_json1_1RelatedObservations(output.RelatedObservations, context)
        : undefined,
  };
};
const deserializeAws_json1_1DescribeProblemResponse = (output, context) => {
  return {
    Problem:
      output.Problem !== undefined && output.Problem !== null
        ? deserializeAws_json1_1Problem(output.Problem, context)
        : undefined,
  };
};
const deserializeAws_json1_1DetectedWorkload = (output, context) => {
  return Object.entries(output).reduce((acc, [key, value]) => {
    if (value === null) {
      return acc;
    }
    return {
      ...acc,
      [key]: deserializeAws_json1_1WorkloadMetaData(value, context),
    };
  }, {});
};
const deserializeAws_json1_1Feedback = (output, context) => {
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
const deserializeAws_json1_1InternalServerException = (output, context) => {
  return {
    Message: output.Message !== undefined && output.Message !== null ? output.Message : undefined,
  };
};
const deserializeAws_json1_1ListApplicationsResponse = (output, context) => {
  return {
    ApplicationInfoList:
      output.ApplicationInfoList !== undefined && output.ApplicationInfoList !== null
        ? deserializeAws_json1_1ApplicationInfoList(output.ApplicationInfoList, context)
        : undefined,
    NextToken: output.NextToken !== undefined && output.NextToken !== null ? output.NextToken : undefined,
  };
};
const deserializeAws_json1_1ListComponentsResponse = (output, context) => {
  return {
    ApplicationComponentList:
      output.ApplicationComponentList !== undefined && output.ApplicationComponentList !== null
        ? deserializeAws_json1_1ApplicationComponentList(output.ApplicationComponentList, context)
        : undefined,
    NextToken: output.NextToken !== undefined && output.NextToken !== null ? output.NextToken : undefined,
  };
};
const deserializeAws_json1_1ListConfigurationHistoryResponse = (output, context) => {
  return {
    EventList:
      output.EventList !== undefined && output.EventList !== null
        ? deserializeAws_json1_1ConfigurationEventList(output.EventList, context)
        : undefined,
    NextToken: output.NextToken !== undefined && output.NextToken !== null ? output.NextToken : undefined,
  };
};
const deserializeAws_json1_1ListLogPatternSetsResponse = (output, context) => {
  return {
    LogPatternSets:
      output.LogPatternSets !== undefined && output.LogPatternSets !== null
        ? deserializeAws_json1_1LogPatternSetList(output.LogPatternSets, context)
        : undefined,
    NextToken: output.NextToken !== undefined && output.NextToken !== null ? output.NextToken : undefined,
    ResourceGroupName:
      output.ResourceGroupName !== undefined && output.ResourceGroupName !== null
        ? output.ResourceGroupName
        : undefined,
  };
};
const deserializeAws_json1_1ListLogPatternsResponse = (output, context) => {
  return {
    LogPatterns:
      output.LogPatterns !== undefined && output.LogPatterns !== null
        ? deserializeAws_json1_1LogPatternList(output.LogPatterns, context)
        : undefined,
    NextToken: output.NextToken !== undefined && output.NextToken !== null ? output.NextToken : undefined,
    ResourceGroupName:
      output.ResourceGroupName !== undefined && output.ResourceGroupName !== null
        ? output.ResourceGroupName
        : undefined,
  };
};
const deserializeAws_json1_1ListProblemsResponse = (output, context) => {
  return {
    NextToken: output.NextToken !== undefined && output.NextToken !== null ? output.NextToken : undefined,
    ProblemList:
      output.ProblemList !== undefined && output.ProblemList !== null
        ? deserializeAws_json1_1ProblemList(output.ProblemList, context)
        : undefined,
  };
};
const deserializeAws_json1_1ListTagsForResourceResponse = (output, context) => {
  return {
    Tags:
      output.Tags !== undefined && output.Tags !== null
        ? deserializeAws_json1_1TagList(output.Tags, context)
        : undefined,
  };
};
const deserializeAws_json1_1LogPattern = (output, context) => {
  return {
    Pattern: output.Pattern !== undefined && output.Pattern !== null ? output.Pattern : undefined,
    PatternName: output.PatternName !== undefined && output.PatternName !== null ? output.PatternName : undefined,
    PatternSetName:
      output.PatternSetName !== undefined && output.PatternSetName !== null ? output.PatternSetName : undefined,
    Rank: output.Rank !== undefined && output.Rank !== null ? output.Rank : undefined,
  };
};
const deserializeAws_json1_1LogPatternList = (output, context) => {
  return (output || [])
    .filter((e) => e != null)
    .map((entry) => {
      if (entry === null) {
        return null;
      }
      return deserializeAws_json1_1LogPattern(entry, context);
    });
};
const deserializeAws_json1_1LogPatternSetList = (output, context) => {
  return (output || [])
    .filter((e) => e != null)
    .map((entry) => {
      if (entry === null) {
        return null;
      }
      return entry;
    });
};
const deserializeAws_json1_1Observation = (output, context) => {
  return {
    CloudWatchEventDetailType:
      output.CloudWatchEventDetailType !== undefined && output.CloudWatchEventDetailType !== null
        ? output.CloudWatchEventDetailType
        : undefined,
    CloudWatchEventId:
      output.CloudWatchEventId !== undefined && output.CloudWatchEventId !== null
        ? output.CloudWatchEventId
        : undefined,
    CloudWatchEventSource:
      output.CloudWatchEventSource !== undefined && output.CloudWatchEventSource !== null
        ? output.CloudWatchEventSource
        : undefined,
    CodeDeployApplication:
      output.CodeDeployApplication !== undefined && output.CodeDeployApplication !== null
        ? output.CodeDeployApplication
        : undefined,
    CodeDeployDeploymentGroup:
      output.CodeDeployDeploymentGroup !== undefined && output.CodeDeployDeploymentGroup !== null
        ? output.CodeDeployDeploymentGroup
        : undefined,
    CodeDeployDeploymentId:
      output.CodeDeployDeploymentId !== undefined && output.CodeDeployDeploymentId !== null
        ? output.CodeDeployDeploymentId
        : undefined,
    CodeDeployInstanceGroupId:
      output.CodeDeployInstanceGroupId !== undefined && output.CodeDeployInstanceGroupId !== null
        ? output.CodeDeployInstanceGroupId
        : undefined,
    CodeDeployState:
      output.CodeDeployState !== undefined && output.CodeDeployState !== null ? output.CodeDeployState : undefined,
    EbsCause: output.EbsCause !== undefined && output.EbsCause !== null ? output.EbsCause : undefined,
    EbsEvent: output.EbsEvent !== undefined && output.EbsEvent !== null ? output.EbsEvent : undefined,
    EbsRequestId: output.EbsRequestId !== undefined && output.EbsRequestId !== null ? output.EbsRequestId : undefined,
    EbsResult: output.EbsResult !== undefined && output.EbsResult !== null ? output.EbsResult : undefined,
    Ec2State: output.Ec2State !== undefined && output.Ec2State !== null ? output.Ec2State : undefined,
    EndTime:
      output.EndTime !== undefined && output.EndTime !== null ? new Date(Math.round(output.EndTime * 1000)) : undefined,
    HealthEventArn:
      output.HealthEventArn !== undefined && output.HealthEventArn !== null ? output.HealthEventArn : undefined,
    HealthEventDescription:
      output.HealthEventDescription !== undefined && output.HealthEventDescription !== null
        ? output.HealthEventDescription
        : undefined,
    HealthEventTypeCategory:
      output.HealthEventTypeCategory !== undefined && output.HealthEventTypeCategory !== null
        ? output.HealthEventTypeCategory
        : undefined,
    HealthEventTypeCode:
      output.HealthEventTypeCode !== undefined && output.HealthEventTypeCode !== null
        ? output.HealthEventTypeCode
        : undefined,
    HealthService:
      output.HealthService !== undefined && output.HealthService !== null ? output.HealthService : undefined,
    Id: output.Id !== undefined && output.Id !== null ? output.Id : undefined,
    LineTime:
      output.LineTime !== undefined && output.LineTime !== null
        ? new Date(Math.round(output.LineTime * 1000))
        : undefined,
    LogFilter: output.LogFilter !== undefined && output.LogFilter !== null ? output.LogFilter : undefined,
    LogGroup: output.LogGroup !== undefined && output.LogGroup !== null ? output.LogGroup : undefined,
    LogText: output.LogText !== undefined && output.LogText !== null ? output.LogText : undefined,
    MetricName: output.MetricName !== undefined && output.MetricName !== null ? output.MetricName : undefined,
    MetricNamespace:
      output.MetricNamespace !== undefined && output.MetricNamespace !== null ? output.MetricNamespace : undefined,
    RdsEventCategories:
      output.RdsEventCategories !== undefined && output.RdsEventCategories !== null
        ? output.RdsEventCategories
        : undefined,
    RdsEventMessage:
      output.RdsEventMessage !== undefined && output.RdsEventMessage !== null ? output.RdsEventMessage : undefined,
    S3EventName: output.S3EventName !== undefined && output.S3EventName !== null ? output.S3EventName : undefined,
    SourceARN: output.SourceARN !== undefined && output.SourceARN !== null ? output.SourceARN : undefined,
    SourceType: output.SourceType !== undefined && output.SourceType !== null ? output.SourceType : undefined,
    StartTime:
      output.StartTime !== undefined && output.StartTime !== null
        ? new Date(Math.round(output.StartTime * 1000))
        : undefined,
    StatesArn: output.StatesArn !== undefined && output.StatesArn !== null ? output.StatesArn : undefined,
    StatesExecutionArn:
      output.StatesExecutionArn !== undefined && output.StatesExecutionArn !== null
        ? output.StatesExecutionArn
        : undefined,
    StatesInput: output.StatesInput !== undefined && output.StatesInput !== null ? output.StatesInput : undefined,
    StatesStatus: output.StatesStatus !== undefined && output.StatesStatus !== null ? output.StatesStatus : undefined,
    Unit: output.Unit !== undefined && output.Unit !== null ? output.Unit : undefined,
    Value: output.Value !== undefined && output.Value !== null ? output.Value : undefined,
    XRayErrorPercent:
      output.XRayErrorPercent !== undefined && output.XRayErrorPercent !== null ? output.XRayErrorPercent : undefined,
    XRayFaultPercent:
      output.XRayFaultPercent !== undefined && output.XRayFaultPercent !== null ? output.XRayFaultPercent : undefined,
    XRayNodeName: output.XRayNodeName !== undefined && output.XRayNodeName !== null ? output.XRayNodeName : undefined,
    XRayNodeType: output.XRayNodeType !== undefined && output.XRayNodeType !== null ? output.XRayNodeType : undefined,
    XRayRequestAverageLatency:
      output.XRayRequestAverageLatency !== undefined && output.XRayRequestAverageLatency !== null
        ? output.XRayRequestAverageLatency
        : undefined,
    XRayRequestCount:
      output.XRayRequestCount !== undefined && output.XRayRequestCount !== null ? output.XRayRequestCount : undefined,
    XRayThrottlePercent:
      output.XRayThrottlePercent !== undefined && output.XRayThrottlePercent !== null
        ? output.XRayThrottlePercent
        : undefined,
  };
};
const deserializeAws_json1_1ObservationList = (output, context) => {
  return (output || [])
    .filter((e) => e != null)
    .map((entry) => {
      if (entry === null) {
        return null;
      }
      return deserializeAws_json1_1Observation(entry, context);
    });
};
const deserializeAws_json1_1Problem = (output, context) => {
  return {
    AffectedResource:
      output.AffectedResource !== undefined && output.AffectedResource !== null ? output.AffectedResource : undefined,
    EndTime:
      output.EndTime !== undefined && output.EndTime !== null ? new Date(Math.round(output.EndTime * 1000)) : undefined,
    Feedback:
      output.Feedback !== undefined && output.Feedback !== null
        ? deserializeAws_json1_1Feedback(output.Feedback, context)
        : undefined,
    Id: output.Id !== undefined && output.Id !== null ? output.Id : undefined,
    Insights: output.Insights !== undefined && output.Insights !== null ? output.Insights : undefined,
    ResourceGroupName:
      output.ResourceGroupName !== undefined && output.ResourceGroupName !== null
        ? output.ResourceGroupName
        : undefined,
    SeverityLevel:
      output.SeverityLevel !== undefined && output.SeverityLevel !== null ? output.SeverityLevel : undefined,
    StartTime:
      output.StartTime !== undefined && output.StartTime !== null
        ? new Date(Math.round(output.StartTime * 1000))
        : undefined,
    Status: output.Status !== undefined && output.Status !== null ? output.Status : undefined,
    Title: output.Title !== undefined && output.Title !== null ? output.Title : undefined,
  };
};
const deserializeAws_json1_1ProblemList = (output, context) => {
  return (output || [])
    .filter((e) => e != null)
    .map((entry) => {
      if (entry === null) {
        return null;
      }
      return deserializeAws_json1_1Problem(entry, context);
    });
};
const deserializeAws_json1_1RelatedObservations = (output, context) => {
  return {
    ObservationList:
      output.ObservationList !== undefined && output.ObservationList !== null
        ? deserializeAws_json1_1ObservationList(output.ObservationList, context)
        : undefined,
  };
};
const deserializeAws_json1_1ResourceInUseException = (output, context) => {
  return {
    Message: output.Message !== undefined && output.Message !== null ? output.Message : undefined,
  };
};
const deserializeAws_json1_1ResourceList = (output, context) => {
  return (output || [])
    .filter((e) => e != null)
    .map((entry) => {
      if (entry === null) {
        return null;
      }
      return entry;
    });
};
const deserializeAws_json1_1ResourceNotFoundException = (output, context) => {
  return {
    Message: output.Message !== undefined && output.Message !== null ? output.Message : undefined,
  };
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
const deserializeAws_json1_1TagResourceResponse = (output, context) => {
  return {};
};
const deserializeAws_json1_1TagsAlreadyExistException = (output, context) => {
  return {
    Message: output.Message !== undefined && output.Message !== null ? output.Message : undefined,
  };
};
const deserializeAws_json1_1TooManyTagsException = (output, context) => {
  return {
    Message: output.Message !== undefined && output.Message !== null ? output.Message : undefined,
    ResourceName: output.ResourceName !== undefined && output.ResourceName !== null ? output.ResourceName : undefined,
  };
};
const deserializeAws_json1_1UntagResourceResponse = (output, context) => {
  return {};
};
const deserializeAws_json1_1UpdateApplicationResponse = (output, context) => {
  return {
    ApplicationInfo:
      output.ApplicationInfo !== undefined && output.ApplicationInfo !== null
        ? deserializeAws_json1_1ApplicationInfo(output.ApplicationInfo, context)
        : undefined,
  };
};
const deserializeAws_json1_1UpdateComponentConfigurationResponse = (output, context) => {
  return {};
};
const deserializeAws_json1_1UpdateComponentResponse = (output, context) => {
  return {};
};
const deserializeAws_json1_1UpdateLogPatternResponse = (output, context) => {
  return {
    LogPattern:
      output.LogPattern !== undefined && output.LogPattern !== null
        ? deserializeAws_json1_1LogPattern(output.LogPattern, context)
        : undefined,
    ResourceGroupName:
      output.ResourceGroupName !== undefined && output.ResourceGroupName !== null
        ? output.ResourceGroupName
        : undefined,
  };
};
const deserializeAws_json1_1ValidationException = (output, context) => {
  return {
    Message: output.Message !== undefined && output.Message !== null ? output.Message : undefined,
  };
};
const deserializeAws_json1_1WorkloadMetaData = (output, context) => {
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
