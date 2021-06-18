"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.deserializeAws_json1_1RegisterScalableTargetCommand =
  exports.deserializeAws_json1_1PutScheduledActionCommand =
  exports.deserializeAws_json1_1PutScalingPolicyCommand =
  exports.deserializeAws_json1_1DescribeScheduledActionsCommand =
  exports.deserializeAws_json1_1DescribeScalingPoliciesCommand =
  exports.deserializeAws_json1_1DescribeScalingActivitiesCommand =
  exports.deserializeAws_json1_1DescribeScalableTargetsCommand =
  exports.deserializeAws_json1_1DeregisterScalableTargetCommand =
  exports.deserializeAws_json1_1DeleteScheduledActionCommand =
  exports.deserializeAws_json1_1DeleteScalingPolicyCommand =
  exports.serializeAws_json1_1RegisterScalableTargetCommand =
  exports.serializeAws_json1_1PutScheduledActionCommand =
  exports.serializeAws_json1_1PutScalingPolicyCommand =
  exports.serializeAws_json1_1DescribeScheduledActionsCommand =
  exports.serializeAws_json1_1DescribeScalingPoliciesCommand =
  exports.serializeAws_json1_1DescribeScalingActivitiesCommand =
  exports.serializeAws_json1_1DescribeScalableTargetsCommand =
  exports.serializeAws_json1_1DeregisterScalableTargetCommand =
  exports.serializeAws_json1_1DeleteScheduledActionCommand =
  exports.serializeAws_json1_1DeleteScalingPolicyCommand =
    void 0;
const protocol_http_1 = require("@aws-sdk/protocol-http");
const serializeAws_json1_1DeleteScalingPolicyCommand = async (input, context) => {
  const headers = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "AnyScaleFrontendService.DeleteScalingPolicy",
  };
  let body;
  body = JSON.stringify(serializeAws_json1_1DeleteScalingPolicyRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
exports.serializeAws_json1_1DeleteScalingPolicyCommand = serializeAws_json1_1DeleteScalingPolicyCommand;
const serializeAws_json1_1DeleteScheduledActionCommand = async (input, context) => {
  const headers = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "AnyScaleFrontendService.DeleteScheduledAction",
  };
  let body;
  body = JSON.stringify(serializeAws_json1_1DeleteScheduledActionRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
exports.serializeAws_json1_1DeleteScheduledActionCommand = serializeAws_json1_1DeleteScheduledActionCommand;
const serializeAws_json1_1DeregisterScalableTargetCommand = async (input, context) => {
  const headers = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "AnyScaleFrontendService.DeregisterScalableTarget",
  };
  let body;
  body = JSON.stringify(serializeAws_json1_1DeregisterScalableTargetRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
exports.serializeAws_json1_1DeregisterScalableTargetCommand = serializeAws_json1_1DeregisterScalableTargetCommand;
const serializeAws_json1_1DescribeScalableTargetsCommand = async (input, context) => {
  const headers = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "AnyScaleFrontendService.DescribeScalableTargets",
  };
  let body;
  body = JSON.stringify(serializeAws_json1_1DescribeScalableTargetsRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
exports.serializeAws_json1_1DescribeScalableTargetsCommand = serializeAws_json1_1DescribeScalableTargetsCommand;
const serializeAws_json1_1DescribeScalingActivitiesCommand = async (input, context) => {
  const headers = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "AnyScaleFrontendService.DescribeScalingActivities",
  };
  let body;
  body = JSON.stringify(serializeAws_json1_1DescribeScalingActivitiesRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
exports.serializeAws_json1_1DescribeScalingActivitiesCommand = serializeAws_json1_1DescribeScalingActivitiesCommand;
const serializeAws_json1_1DescribeScalingPoliciesCommand = async (input, context) => {
  const headers = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "AnyScaleFrontendService.DescribeScalingPolicies",
  };
  let body;
  body = JSON.stringify(serializeAws_json1_1DescribeScalingPoliciesRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
exports.serializeAws_json1_1DescribeScalingPoliciesCommand = serializeAws_json1_1DescribeScalingPoliciesCommand;
const serializeAws_json1_1DescribeScheduledActionsCommand = async (input, context) => {
  const headers = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "AnyScaleFrontendService.DescribeScheduledActions",
  };
  let body;
  body = JSON.stringify(serializeAws_json1_1DescribeScheduledActionsRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
exports.serializeAws_json1_1DescribeScheduledActionsCommand = serializeAws_json1_1DescribeScheduledActionsCommand;
const serializeAws_json1_1PutScalingPolicyCommand = async (input, context) => {
  const headers = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "AnyScaleFrontendService.PutScalingPolicy",
  };
  let body;
  body = JSON.stringify(serializeAws_json1_1PutScalingPolicyRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
exports.serializeAws_json1_1PutScalingPolicyCommand = serializeAws_json1_1PutScalingPolicyCommand;
const serializeAws_json1_1PutScheduledActionCommand = async (input, context) => {
  const headers = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "AnyScaleFrontendService.PutScheduledAction",
  };
  let body;
  body = JSON.stringify(serializeAws_json1_1PutScheduledActionRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
exports.serializeAws_json1_1PutScheduledActionCommand = serializeAws_json1_1PutScheduledActionCommand;
const serializeAws_json1_1RegisterScalableTargetCommand = async (input, context) => {
  const headers = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "AnyScaleFrontendService.RegisterScalableTarget",
  };
  let body;
  body = JSON.stringify(serializeAws_json1_1RegisterScalableTargetRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
exports.serializeAws_json1_1RegisterScalableTargetCommand = serializeAws_json1_1RegisterScalableTargetCommand;
const deserializeAws_json1_1DeleteScalingPolicyCommand = async (output, context) => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_1DeleteScalingPolicyCommandError(output, context);
  }
  const data = await parseBody(output.body, context);
  let contents = {};
  contents = deserializeAws_json1_1DeleteScalingPolicyResponse(data, context);
  const response = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};
exports.deserializeAws_json1_1DeleteScalingPolicyCommand = deserializeAws_json1_1DeleteScalingPolicyCommand;
const deserializeAws_json1_1DeleteScalingPolicyCommandError = async (output, context) => {
  const parsedOutput = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response;
  let errorCode = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "ConcurrentUpdateException":
    case "com.amazonaws.applicationautoscaling#ConcurrentUpdateException":
      response = {
        ...(await deserializeAws_json1_1ConcurrentUpdateExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InternalServiceException":
    case "com.amazonaws.applicationautoscaling#InternalServiceException":
      response = {
        ...(await deserializeAws_json1_1InternalServiceExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ObjectNotFoundException":
    case "com.amazonaws.applicationautoscaling#ObjectNotFoundException":
      response = {
        ...(await deserializeAws_json1_1ObjectNotFoundExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ValidationException":
    case "com.amazonaws.applicationautoscaling#ValidationException":
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
const deserializeAws_json1_1DeleteScheduledActionCommand = async (output, context) => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_1DeleteScheduledActionCommandError(output, context);
  }
  const data = await parseBody(output.body, context);
  let contents = {};
  contents = deserializeAws_json1_1DeleteScheduledActionResponse(data, context);
  const response = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};
exports.deserializeAws_json1_1DeleteScheduledActionCommand = deserializeAws_json1_1DeleteScheduledActionCommand;
const deserializeAws_json1_1DeleteScheduledActionCommandError = async (output, context) => {
  const parsedOutput = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response;
  let errorCode = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "ConcurrentUpdateException":
    case "com.amazonaws.applicationautoscaling#ConcurrentUpdateException":
      response = {
        ...(await deserializeAws_json1_1ConcurrentUpdateExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InternalServiceException":
    case "com.amazonaws.applicationautoscaling#InternalServiceException":
      response = {
        ...(await deserializeAws_json1_1InternalServiceExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ObjectNotFoundException":
    case "com.amazonaws.applicationautoscaling#ObjectNotFoundException":
      response = {
        ...(await deserializeAws_json1_1ObjectNotFoundExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ValidationException":
    case "com.amazonaws.applicationautoscaling#ValidationException":
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
const deserializeAws_json1_1DeregisterScalableTargetCommand = async (output, context) => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_1DeregisterScalableTargetCommandError(output, context);
  }
  const data = await parseBody(output.body, context);
  let contents = {};
  contents = deserializeAws_json1_1DeregisterScalableTargetResponse(data, context);
  const response = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};
exports.deserializeAws_json1_1DeregisterScalableTargetCommand = deserializeAws_json1_1DeregisterScalableTargetCommand;
const deserializeAws_json1_1DeregisterScalableTargetCommandError = async (output, context) => {
  const parsedOutput = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response;
  let errorCode = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "ConcurrentUpdateException":
    case "com.amazonaws.applicationautoscaling#ConcurrentUpdateException":
      response = {
        ...(await deserializeAws_json1_1ConcurrentUpdateExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InternalServiceException":
    case "com.amazonaws.applicationautoscaling#InternalServiceException":
      response = {
        ...(await deserializeAws_json1_1InternalServiceExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ObjectNotFoundException":
    case "com.amazonaws.applicationautoscaling#ObjectNotFoundException":
      response = {
        ...(await deserializeAws_json1_1ObjectNotFoundExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ValidationException":
    case "com.amazonaws.applicationautoscaling#ValidationException":
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
const deserializeAws_json1_1DescribeScalableTargetsCommand = async (output, context) => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_1DescribeScalableTargetsCommandError(output, context);
  }
  const data = await parseBody(output.body, context);
  let contents = {};
  contents = deserializeAws_json1_1DescribeScalableTargetsResponse(data, context);
  const response = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};
exports.deserializeAws_json1_1DescribeScalableTargetsCommand = deserializeAws_json1_1DescribeScalableTargetsCommand;
const deserializeAws_json1_1DescribeScalableTargetsCommandError = async (output, context) => {
  const parsedOutput = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response;
  let errorCode = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "ConcurrentUpdateException":
    case "com.amazonaws.applicationautoscaling#ConcurrentUpdateException":
      response = {
        ...(await deserializeAws_json1_1ConcurrentUpdateExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InternalServiceException":
    case "com.amazonaws.applicationautoscaling#InternalServiceException":
      response = {
        ...(await deserializeAws_json1_1InternalServiceExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InvalidNextTokenException":
    case "com.amazonaws.applicationautoscaling#InvalidNextTokenException":
      response = {
        ...(await deserializeAws_json1_1InvalidNextTokenExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ValidationException":
    case "com.amazonaws.applicationautoscaling#ValidationException":
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
const deserializeAws_json1_1DescribeScalingActivitiesCommand = async (output, context) => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_1DescribeScalingActivitiesCommandError(output, context);
  }
  const data = await parseBody(output.body, context);
  let contents = {};
  contents = deserializeAws_json1_1DescribeScalingActivitiesResponse(data, context);
  const response = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};
exports.deserializeAws_json1_1DescribeScalingActivitiesCommand = deserializeAws_json1_1DescribeScalingActivitiesCommand;
const deserializeAws_json1_1DescribeScalingActivitiesCommandError = async (output, context) => {
  const parsedOutput = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response;
  let errorCode = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "ConcurrentUpdateException":
    case "com.amazonaws.applicationautoscaling#ConcurrentUpdateException":
      response = {
        ...(await deserializeAws_json1_1ConcurrentUpdateExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InternalServiceException":
    case "com.amazonaws.applicationautoscaling#InternalServiceException":
      response = {
        ...(await deserializeAws_json1_1InternalServiceExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InvalidNextTokenException":
    case "com.amazonaws.applicationautoscaling#InvalidNextTokenException":
      response = {
        ...(await deserializeAws_json1_1InvalidNextTokenExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ValidationException":
    case "com.amazonaws.applicationautoscaling#ValidationException":
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
const deserializeAws_json1_1DescribeScalingPoliciesCommand = async (output, context) => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_1DescribeScalingPoliciesCommandError(output, context);
  }
  const data = await parseBody(output.body, context);
  let contents = {};
  contents = deserializeAws_json1_1DescribeScalingPoliciesResponse(data, context);
  const response = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};
exports.deserializeAws_json1_1DescribeScalingPoliciesCommand = deserializeAws_json1_1DescribeScalingPoliciesCommand;
const deserializeAws_json1_1DescribeScalingPoliciesCommandError = async (output, context) => {
  const parsedOutput = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response;
  let errorCode = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "ConcurrentUpdateException":
    case "com.amazonaws.applicationautoscaling#ConcurrentUpdateException":
      response = {
        ...(await deserializeAws_json1_1ConcurrentUpdateExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "FailedResourceAccessException":
    case "com.amazonaws.applicationautoscaling#FailedResourceAccessException":
      response = {
        ...(await deserializeAws_json1_1FailedResourceAccessExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InternalServiceException":
    case "com.amazonaws.applicationautoscaling#InternalServiceException":
      response = {
        ...(await deserializeAws_json1_1InternalServiceExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InvalidNextTokenException":
    case "com.amazonaws.applicationautoscaling#InvalidNextTokenException":
      response = {
        ...(await deserializeAws_json1_1InvalidNextTokenExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ValidationException":
    case "com.amazonaws.applicationautoscaling#ValidationException":
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
const deserializeAws_json1_1DescribeScheduledActionsCommand = async (output, context) => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_1DescribeScheduledActionsCommandError(output, context);
  }
  const data = await parseBody(output.body, context);
  let contents = {};
  contents = deserializeAws_json1_1DescribeScheduledActionsResponse(data, context);
  const response = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};
exports.deserializeAws_json1_1DescribeScheduledActionsCommand = deserializeAws_json1_1DescribeScheduledActionsCommand;
const deserializeAws_json1_1DescribeScheduledActionsCommandError = async (output, context) => {
  const parsedOutput = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response;
  let errorCode = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "ConcurrentUpdateException":
    case "com.amazonaws.applicationautoscaling#ConcurrentUpdateException":
      response = {
        ...(await deserializeAws_json1_1ConcurrentUpdateExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InternalServiceException":
    case "com.amazonaws.applicationautoscaling#InternalServiceException":
      response = {
        ...(await deserializeAws_json1_1InternalServiceExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InvalidNextTokenException":
    case "com.amazonaws.applicationautoscaling#InvalidNextTokenException":
      response = {
        ...(await deserializeAws_json1_1InvalidNextTokenExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ValidationException":
    case "com.amazonaws.applicationautoscaling#ValidationException":
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
const deserializeAws_json1_1PutScalingPolicyCommand = async (output, context) => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_1PutScalingPolicyCommandError(output, context);
  }
  const data = await parseBody(output.body, context);
  let contents = {};
  contents = deserializeAws_json1_1PutScalingPolicyResponse(data, context);
  const response = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};
exports.deserializeAws_json1_1PutScalingPolicyCommand = deserializeAws_json1_1PutScalingPolicyCommand;
const deserializeAws_json1_1PutScalingPolicyCommandError = async (output, context) => {
  const parsedOutput = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response;
  let errorCode = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "ConcurrentUpdateException":
    case "com.amazonaws.applicationautoscaling#ConcurrentUpdateException":
      response = {
        ...(await deserializeAws_json1_1ConcurrentUpdateExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "FailedResourceAccessException":
    case "com.amazonaws.applicationautoscaling#FailedResourceAccessException":
      response = {
        ...(await deserializeAws_json1_1FailedResourceAccessExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InternalServiceException":
    case "com.amazonaws.applicationautoscaling#InternalServiceException":
      response = {
        ...(await deserializeAws_json1_1InternalServiceExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "LimitExceededException":
    case "com.amazonaws.applicationautoscaling#LimitExceededException":
      response = {
        ...(await deserializeAws_json1_1LimitExceededExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ObjectNotFoundException":
    case "com.amazonaws.applicationautoscaling#ObjectNotFoundException":
      response = {
        ...(await deserializeAws_json1_1ObjectNotFoundExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ValidationException":
    case "com.amazonaws.applicationautoscaling#ValidationException":
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
const deserializeAws_json1_1PutScheduledActionCommand = async (output, context) => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_1PutScheduledActionCommandError(output, context);
  }
  const data = await parseBody(output.body, context);
  let contents = {};
  contents = deserializeAws_json1_1PutScheduledActionResponse(data, context);
  const response = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};
exports.deserializeAws_json1_1PutScheduledActionCommand = deserializeAws_json1_1PutScheduledActionCommand;
const deserializeAws_json1_1PutScheduledActionCommandError = async (output, context) => {
  const parsedOutput = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response;
  let errorCode = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "ConcurrentUpdateException":
    case "com.amazonaws.applicationautoscaling#ConcurrentUpdateException":
      response = {
        ...(await deserializeAws_json1_1ConcurrentUpdateExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InternalServiceException":
    case "com.amazonaws.applicationautoscaling#InternalServiceException":
      response = {
        ...(await deserializeAws_json1_1InternalServiceExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "LimitExceededException":
    case "com.amazonaws.applicationautoscaling#LimitExceededException":
      response = {
        ...(await deserializeAws_json1_1LimitExceededExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ObjectNotFoundException":
    case "com.amazonaws.applicationautoscaling#ObjectNotFoundException":
      response = {
        ...(await deserializeAws_json1_1ObjectNotFoundExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ValidationException":
    case "com.amazonaws.applicationautoscaling#ValidationException":
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
const deserializeAws_json1_1RegisterScalableTargetCommand = async (output, context) => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_1RegisterScalableTargetCommandError(output, context);
  }
  const data = await parseBody(output.body, context);
  let contents = {};
  contents = deserializeAws_json1_1RegisterScalableTargetResponse(data, context);
  const response = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};
exports.deserializeAws_json1_1RegisterScalableTargetCommand = deserializeAws_json1_1RegisterScalableTargetCommand;
const deserializeAws_json1_1RegisterScalableTargetCommandError = async (output, context) => {
  const parsedOutput = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response;
  let errorCode = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "ConcurrentUpdateException":
    case "com.amazonaws.applicationautoscaling#ConcurrentUpdateException":
      response = {
        ...(await deserializeAws_json1_1ConcurrentUpdateExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InternalServiceException":
    case "com.amazonaws.applicationautoscaling#InternalServiceException":
      response = {
        ...(await deserializeAws_json1_1InternalServiceExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "LimitExceededException":
    case "com.amazonaws.applicationautoscaling#LimitExceededException":
      response = {
        ...(await deserializeAws_json1_1LimitExceededExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ValidationException":
    case "com.amazonaws.applicationautoscaling#ValidationException":
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
const deserializeAws_json1_1FailedResourceAccessExceptionResponse = async (parsedOutput, context) => {
  const body = parsedOutput.body;
  const deserialized = deserializeAws_json1_1FailedResourceAccessException(body, context);
  const contents = {
    name: "FailedResourceAccessException",
    $fault: "client",
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
const serializeAws_json1_1CustomizedMetricSpecification = (input, context) => {
  return {
    ...(input.Dimensions !== undefined &&
      input.Dimensions !== null && { Dimensions: serializeAws_json1_1MetricDimensions(input.Dimensions, context) }),
    ...(input.MetricName !== undefined && input.MetricName !== null && { MetricName: input.MetricName }),
    ...(input.Namespace !== undefined && input.Namespace !== null && { Namespace: input.Namespace }),
    ...(input.Statistic !== undefined && input.Statistic !== null && { Statistic: input.Statistic }),
    ...(input.Unit !== undefined && input.Unit !== null && { Unit: input.Unit }),
  };
};
const serializeAws_json1_1DeleteScalingPolicyRequest = (input, context) => {
  return {
    ...(input.PolicyName !== undefined && input.PolicyName !== null && { PolicyName: input.PolicyName }),
    ...(input.ResourceId !== undefined && input.ResourceId !== null && { ResourceId: input.ResourceId }),
    ...(input.ScalableDimension !== undefined &&
      input.ScalableDimension !== null && { ScalableDimension: input.ScalableDimension }),
    ...(input.ServiceNamespace !== undefined &&
      input.ServiceNamespace !== null && { ServiceNamespace: input.ServiceNamespace }),
  };
};
const serializeAws_json1_1DeleteScheduledActionRequest = (input, context) => {
  return {
    ...(input.ResourceId !== undefined && input.ResourceId !== null && { ResourceId: input.ResourceId }),
    ...(input.ScalableDimension !== undefined &&
      input.ScalableDimension !== null && { ScalableDimension: input.ScalableDimension }),
    ...(input.ScheduledActionName !== undefined &&
      input.ScheduledActionName !== null && { ScheduledActionName: input.ScheduledActionName }),
    ...(input.ServiceNamespace !== undefined &&
      input.ServiceNamespace !== null && { ServiceNamespace: input.ServiceNamespace }),
  };
};
const serializeAws_json1_1DeregisterScalableTargetRequest = (input, context) => {
  return {
    ...(input.ResourceId !== undefined && input.ResourceId !== null && { ResourceId: input.ResourceId }),
    ...(input.ScalableDimension !== undefined &&
      input.ScalableDimension !== null && { ScalableDimension: input.ScalableDimension }),
    ...(input.ServiceNamespace !== undefined &&
      input.ServiceNamespace !== null && { ServiceNamespace: input.ServiceNamespace }),
  };
};
const serializeAws_json1_1DescribeScalableTargetsRequest = (input, context) => {
  return {
    ...(input.MaxResults !== undefined && input.MaxResults !== null && { MaxResults: input.MaxResults }),
    ...(input.NextToken !== undefined && input.NextToken !== null && { NextToken: input.NextToken }),
    ...(input.ResourceIds !== undefined &&
      input.ResourceIds !== null && {
        ResourceIds: serializeAws_json1_1ResourceIdsMaxLen1600(input.ResourceIds, context),
      }),
    ...(input.ScalableDimension !== undefined &&
      input.ScalableDimension !== null && { ScalableDimension: input.ScalableDimension }),
    ...(input.ServiceNamespace !== undefined &&
      input.ServiceNamespace !== null && { ServiceNamespace: input.ServiceNamespace }),
  };
};
const serializeAws_json1_1DescribeScalingActivitiesRequest = (input, context) => {
  return {
    ...(input.MaxResults !== undefined && input.MaxResults !== null && { MaxResults: input.MaxResults }),
    ...(input.NextToken !== undefined && input.NextToken !== null && { NextToken: input.NextToken }),
    ...(input.ResourceId !== undefined && input.ResourceId !== null && { ResourceId: input.ResourceId }),
    ...(input.ScalableDimension !== undefined &&
      input.ScalableDimension !== null && { ScalableDimension: input.ScalableDimension }),
    ...(input.ServiceNamespace !== undefined &&
      input.ServiceNamespace !== null && { ServiceNamespace: input.ServiceNamespace }),
  };
};
const serializeAws_json1_1DescribeScalingPoliciesRequest = (input, context) => {
  return {
    ...(input.MaxResults !== undefined && input.MaxResults !== null && { MaxResults: input.MaxResults }),
    ...(input.NextToken !== undefined && input.NextToken !== null && { NextToken: input.NextToken }),
    ...(input.PolicyNames !== undefined &&
      input.PolicyNames !== null && {
        PolicyNames: serializeAws_json1_1ResourceIdsMaxLen1600(input.PolicyNames, context),
      }),
    ...(input.ResourceId !== undefined && input.ResourceId !== null && { ResourceId: input.ResourceId }),
    ...(input.ScalableDimension !== undefined &&
      input.ScalableDimension !== null && { ScalableDimension: input.ScalableDimension }),
    ...(input.ServiceNamespace !== undefined &&
      input.ServiceNamespace !== null && { ServiceNamespace: input.ServiceNamespace }),
  };
};
const serializeAws_json1_1DescribeScheduledActionsRequest = (input, context) => {
  return {
    ...(input.MaxResults !== undefined && input.MaxResults !== null && { MaxResults: input.MaxResults }),
    ...(input.NextToken !== undefined && input.NextToken !== null && { NextToken: input.NextToken }),
    ...(input.ResourceId !== undefined && input.ResourceId !== null && { ResourceId: input.ResourceId }),
    ...(input.ScalableDimension !== undefined &&
      input.ScalableDimension !== null && { ScalableDimension: input.ScalableDimension }),
    ...(input.ScheduledActionNames !== undefined &&
      input.ScheduledActionNames !== null && {
        ScheduledActionNames: serializeAws_json1_1ResourceIdsMaxLen1600(input.ScheduledActionNames, context),
      }),
    ...(input.ServiceNamespace !== undefined &&
      input.ServiceNamespace !== null && { ServiceNamespace: input.ServiceNamespace }),
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
const serializeAws_json1_1PredefinedMetricSpecification = (input, context) => {
  return {
    ...(input.PredefinedMetricType !== undefined &&
      input.PredefinedMetricType !== null && { PredefinedMetricType: input.PredefinedMetricType }),
    ...(input.ResourceLabel !== undefined && input.ResourceLabel !== null && { ResourceLabel: input.ResourceLabel }),
  };
};
const serializeAws_json1_1PutScalingPolicyRequest = (input, context) => {
  return {
    ...(input.PolicyName !== undefined && input.PolicyName !== null && { PolicyName: input.PolicyName }),
    ...(input.PolicyType !== undefined && input.PolicyType !== null && { PolicyType: input.PolicyType }),
    ...(input.ResourceId !== undefined && input.ResourceId !== null && { ResourceId: input.ResourceId }),
    ...(input.ScalableDimension !== undefined &&
      input.ScalableDimension !== null && { ScalableDimension: input.ScalableDimension }),
    ...(input.ServiceNamespace !== undefined &&
      input.ServiceNamespace !== null && { ServiceNamespace: input.ServiceNamespace }),
    ...(input.StepScalingPolicyConfiguration !== undefined &&
      input.StepScalingPolicyConfiguration !== null && {
        StepScalingPolicyConfiguration: serializeAws_json1_1StepScalingPolicyConfiguration(
          input.StepScalingPolicyConfiguration,
          context
        ),
      }),
    ...(input.TargetTrackingScalingPolicyConfiguration !== undefined &&
      input.TargetTrackingScalingPolicyConfiguration !== null && {
        TargetTrackingScalingPolicyConfiguration: serializeAws_json1_1TargetTrackingScalingPolicyConfiguration(
          input.TargetTrackingScalingPolicyConfiguration,
          context
        ),
      }),
  };
};
const serializeAws_json1_1PutScheduledActionRequest = (input, context) => {
  return {
    ...(input.EndTime !== undefined &&
      input.EndTime !== null && { EndTime: Math.round(input.EndTime.getTime() / 1000) }),
    ...(input.ResourceId !== undefined && input.ResourceId !== null && { ResourceId: input.ResourceId }),
    ...(input.ScalableDimension !== undefined &&
      input.ScalableDimension !== null && { ScalableDimension: input.ScalableDimension }),
    ...(input.ScalableTargetAction !== undefined &&
      input.ScalableTargetAction !== null && {
        ScalableTargetAction: serializeAws_json1_1ScalableTargetAction(input.ScalableTargetAction, context),
      }),
    ...(input.Schedule !== undefined && input.Schedule !== null && { Schedule: input.Schedule }),
    ...(input.ScheduledActionName !== undefined &&
      input.ScheduledActionName !== null && { ScheduledActionName: input.ScheduledActionName }),
    ...(input.ServiceNamespace !== undefined &&
      input.ServiceNamespace !== null && { ServiceNamespace: input.ServiceNamespace }),
    ...(input.StartTime !== undefined &&
      input.StartTime !== null && { StartTime: Math.round(input.StartTime.getTime() / 1000) }),
    ...(input.Timezone !== undefined && input.Timezone !== null && { Timezone: input.Timezone }),
  };
};
const serializeAws_json1_1RegisterScalableTargetRequest = (input, context) => {
  return {
    ...(input.MaxCapacity !== undefined && input.MaxCapacity !== null && { MaxCapacity: input.MaxCapacity }),
    ...(input.MinCapacity !== undefined && input.MinCapacity !== null && { MinCapacity: input.MinCapacity }),
    ...(input.ResourceId !== undefined && input.ResourceId !== null && { ResourceId: input.ResourceId }),
    ...(input.RoleARN !== undefined && input.RoleARN !== null && { RoleARN: input.RoleARN }),
    ...(input.ScalableDimension !== undefined &&
      input.ScalableDimension !== null && { ScalableDimension: input.ScalableDimension }),
    ...(input.ServiceNamespace !== undefined &&
      input.ServiceNamespace !== null && { ServiceNamespace: input.ServiceNamespace }),
    ...(input.SuspendedState !== undefined &&
      input.SuspendedState !== null && {
        SuspendedState: serializeAws_json1_1SuspendedState(input.SuspendedState, context),
      }),
  };
};
const serializeAws_json1_1ResourceIdsMaxLen1600 = (input, context) => {
  return input
    .filter((e) => e != null)
    .map((entry) => {
      if (entry === null) {
        return null;
      }
      return entry;
    });
};
const serializeAws_json1_1ScalableTargetAction = (input, context) => {
  return {
    ...(input.MaxCapacity !== undefined && input.MaxCapacity !== null && { MaxCapacity: input.MaxCapacity }),
    ...(input.MinCapacity !== undefined && input.MinCapacity !== null && { MinCapacity: input.MinCapacity }),
  };
};
const serializeAws_json1_1StepAdjustment = (input, context) => {
  return {
    ...(input.MetricIntervalLowerBound !== undefined &&
      input.MetricIntervalLowerBound !== null && { MetricIntervalLowerBound: input.MetricIntervalLowerBound }),
    ...(input.MetricIntervalUpperBound !== undefined &&
      input.MetricIntervalUpperBound !== null && { MetricIntervalUpperBound: input.MetricIntervalUpperBound }),
    ...(input.ScalingAdjustment !== undefined &&
      input.ScalingAdjustment !== null && { ScalingAdjustment: input.ScalingAdjustment }),
  };
};
const serializeAws_json1_1StepAdjustments = (input, context) => {
  return input
    .filter((e) => e != null)
    .map((entry) => {
      if (entry === null) {
        return null;
      }
      return serializeAws_json1_1StepAdjustment(entry, context);
    });
};
const serializeAws_json1_1StepScalingPolicyConfiguration = (input, context) => {
  return {
    ...(input.AdjustmentType !== undefined &&
      input.AdjustmentType !== null && { AdjustmentType: input.AdjustmentType }),
    ...(input.Cooldown !== undefined && input.Cooldown !== null && { Cooldown: input.Cooldown }),
    ...(input.MetricAggregationType !== undefined &&
      input.MetricAggregationType !== null && { MetricAggregationType: input.MetricAggregationType }),
    ...(input.MinAdjustmentMagnitude !== undefined &&
      input.MinAdjustmentMagnitude !== null && { MinAdjustmentMagnitude: input.MinAdjustmentMagnitude }),
    ...(input.StepAdjustments !== undefined &&
      input.StepAdjustments !== null && {
        StepAdjustments: serializeAws_json1_1StepAdjustments(input.StepAdjustments, context),
      }),
  };
};
const serializeAws_json1_1SuspendedState = (input, context) => {
  return {
    ...(input.DynamicScalingInSuspended !== undefined &&
      input.DynamicScalingInSuspended !== null && { DynamicScalingInSuspended: input.DynamicScalingInSuspended }),
    ...(input.DynamicScalingOutSuspended !== undefined &&
      input.DynamicScalingOutSuspended !== null && { DynamicScalingOutSuspended: input.DynamicScalingOutSuspended }),
    ...(input.ScheduledScalingSuspended !== undefined &&
      input.ScheduledScalingSuspended !== null && { ScheduledScalingSuspended: input.ScheduledScalingSuspended }),
  };
};
const serializeAws_json1_1TargetTrackingScalingPolicyConfiguration = (input, context) => {
  return {
    ...(input.CustomizedMetricSpecification !== undefined &&
      input.CustomizedMetricSpecification !== null && {
        CustomizedMetricSpecification: serializeAws_json1_1CustomizedMetricSpecification(
          input.CustomizedMetricSpecification,
          context
        ),
      }),
    ...(input.DisableScaleIn !== undefined &&
      input.DisableScaleIn !== null && { DisableScaleIn: input.DisableScaleIn }),
    ...(input.PredefinedMetricSpecification !== undefined &&
      input.PredefinedMetricSpecification !== null && {
        PredefinedMetricSpecification: serializeAws_json1_1PredefinedMetricSpecification(
          input.PredefinedMetricSpecification,
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
const deserializeAws_json1_1Alarm = (output, context) => {
  return {
    AlarmARN: output.AlarmARN !== undefined && output.AlarmARN !== null ? output.AlarmARN : undefined,
    AlarmName: output.AlarmName !== undefined && output.AlarmName !== null ? output.AlarmName : undefined,
  };
};
const deserializeAws_json1_1Alarms = (output, context) => {
  return (output || [])
    .filter((e) => e != null)
    .map((entry) => {
      if (entry === null) {
        return null;
      }
      return deserializeAws_json1_1Alarm(entry, context);
    });
};
const deserializeAws_json1_1ConcurrentUpdateException = (output, context) => {
  return {
    Message: output.Message !== undefined && output.Message !== null ? output.Message : undefined,
  };
};
const deserializeAws_json1_1CustomizedMetricSpecification = (output, context) => {
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
const deserializeAws_json1_1DeleteScalingPolicyResponse = (output, context) => {
  return {};
};
const deserializeAws_json1_1DeleteScheduledActionResponse = (output, context) => {
  return {};
};
const deserializeAws_json1_1DeregisterScalableTargetResponse = (output, context) => {
  return {};
};
const deserializeAws_json1_1DescribeScalableTargetsResponse = (output, context) => {
  return {
    NextToken: output.NextToken !== undefined && output.NextToken !== null ? output.NextToken : undefined,
    ScalableTargets:
      output.ScalableTargets !== undefined && output.ScalableTargets !== null
        ? deserializeAws_json1_1ScalableTargets(output.ScalableTargets, context)
        : undefined,
  };
};
const deserializeAws_json1_1DescribeScalingActivitiesResponse = (output, context) => {
  return {
    NextToken: output.NextToken !== undefined && output.NextToken !== null ? output.NextToken : undefined,
    ScalingActivities:
      output.ScalingActivities !== undefined && output.ScalingActivities !== null
        ? deserializeAws_json1_1ScalingActivities(output.ScalingActivities, context)
        : undefined,
  };
};
const deserializeAws_json1_1DescribeScalingPoliciesResponse = (output, context) => {
  return {
    NextToken: output.NextToken !== undefined && output.NextToken !== null ? output.NextToken : undefined,
    ScalingPolicies:
      output.ScalingPolicies !== undefined && output.ScalingPolicies !== null
        ? deserializeAws_json1_1ScalingPolicies(output.ScalingPolicies, context)
        : undefined,
  };
};
const deserializeAws_json1_1DescribeScheduledActionsResponse = (output, context) => {
  return {
    NextToken: output.NextToken !== undefined && output.NextToken !== null ? output.NextToken : undefined,
    ScheduledActions:
      output.ScheduledActions !== undefined && output.ScheduledActions !== null
        ? deserializeAws_json1_1ScheduledActions(output.ScheduledActions, context)
        : undefined,
  };
};
const deserializeAws_json1_1FailedResourceAccessException = (output, context) => {
  return {
    Message: output.Message !== undefined && output.Message !== null ? output.Message : undefined,
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
const deserializeAws_json1_1PredefinedMetricSpecification = (output, context) => {
  return {
    PredefinedMetricType:
      output.PredefinedMetricType !== undefined && output.PredefinedMetricType !== null
        ? output.PredefinedMetricType
        : undefined,
    ResourceLabel:
      output.ResourceLabel !== undefined && output.ResourceLabel !== null ? output.ResourceLabel : undefined,
  };
};
const deserializeAws_json1_1PutScalingPolicyResponse = (output, context) => {
  return {
    Alarms:
      output.Alarms !== undefined && output.Alarms !== null
        ? deserializeAws_json1_1Alarms(output.Alarms, context)
        : undefined,
    PolicyARN: output.PolicyARN !== undefined && output.PolicyARN !== null ? output.PolicyARN : undefined,
  };
};
const deserializeAws_json1_1PutScheduledActionResponse = (output, context) => {
  return {};
};
const deserializeAws_json1_1RegisterScalableTargetResponse = (output, context) => {
  return {};
};
const deserializeAws_json1_1ScalableTarget = (output, context) => {
  return {
    CreationTime:
      output.CreationTime !== undefined && output.CreationTime !== null
        ? new Date(Math.round(output.CreationTime * 1000))
        : undefined,
    MaxCapacity: output.MaxCapacity !== undefined && output.MaxCapacity !== null ? output.MaxCapacity : undefined,
    MinCapacity: output.MinCapacity !== undefined && output.MinCapacity !== null ? output.MinCapacity : undefined,
    ResourceId: output.ResourceId !== undefined && output.ResourceId !== null ? output.ResourceId : undefined,
    RoleARN: output.RoleARN !== undefined && output.RoleARN !== null ? output.RoleARN : undefined,
    ScalableDimension:
      output.ScalableDimension !== undefined && output.ScalableDimension !== null
        ? output.ScalableDimension
        : undefined,
    ServiceNamespace:
      output.ServiceNamespace !== undefined && output.ServiceNamespace !== null ? output.ServiceNamespace : undefined,
    SuspendedState:
      output.SuspendedState !== undefined && output.SuspendedState !== null
        ? deserializeAws_json1_1SuspendedState(output.SuspendedState, context)
        : undefined,
  };
};
const deserializeAws_json1_1ScalableTargetAction = (output, context) => {
  return {
    MaxCapacity: output.MaxCapacity !== undefined && output.MaxCapacity !== null ? output.MaxCapacity : undefined,
    MinCapacity: output.MinCapacity !== undefined && output.MinCapacity !== null ? output.MinCapacity : undefined,
  };
};
const deserializeAws_json1_1ScalableTargets = (output, context) => {
  return (output || [])
    .filter((e) => e != null)
    .map((entry) => {
      if (entry === null) {
        return null;
      }
      return deserializeAws_json1_1ScalableTarget(entry, context);
    });
};
const deserializeAws_json1_1ScalingActivities = (output, context) => {
  return (output || [])
    .filter((e) => e != null)
    .map((entry) => {
      if (entry === null) {
        return null;
      }
      return deserializeAws_json1_1ScalingActivity(entry, context);
    });
};
const deserializeAws_json1_1ScalingActivity = (output, context) => {
  return {
    ActivityId: output.ActivityId !== undefined && output.ActivityId !== null ? output.ActivityId : undefined,
    Cause: output.Cause !== undefined && output.Cause !== null ? output.Cause : undefined,
    Description: output.Description !== undefined && output.Description !== null ? output.Description : undefined,
    Details: output.Details !== undefined && output.Details !== null ? output.Details : undefined,
    EndTime:
      output.EndTime !== undefined && output.EndTime !== null ? new Date(Math.round(output.EndTime * 1000)) : undefined,
    ResourceId: output.ResourceId !== undefined && output.ResourceId !== null ? output.ResourceId : undefined,
    ScalableDimension:
      output.ScalableDimension !== undefined && output.ScalableDimension !== null
        ? output.ScalableDimension
        : undefined,
    ServiceNamespace:
      output.ServiceNamespace !== undefined && output.ServiceNamespace !== null ? output.ServiceNamespace : undefined,
    StartTime:
      output.StartTime !== undefined && output.StartTime !== null
        ? new Date(Math.round(output.StartTime * 1000))
        : undefined,
    StatusCode: output.StatusCode !== undefined && output.StatusCode !== null ? output.StatusCode : undefined,
    StatusMessage:
      output.StatusMessage !== undefined && output.StatusMessage !== null ? output.StatusMessage : undefined,
  };
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
    Alarms:
      output.Alarms !== undefined && output.Alarms !== null
        ? deserializeAws_json1_1Alarms(output.Alarms, context)
        : undefined,
    CreationTime:
      output.CreationTime !== undefined && output.CreationTime !== null
        ? new Date(Math.round(output.CreationTime * 1000))
        : undefined,
    PolicyARN: output.PolicyARN !== undefined && output.PolicyARN !== null ? output.PolicyARN : undefined,
    PolicyName: output.PolicyName !== undefined && output.PolicyName !== null ? output.PolicyName : undefined,
    PolicyType: output.PolicyType !== undefined && output.PolicyType !== null ? output.PolicyType : undefined,
    ResourceId: output.ResourceId !== undefined && output.ResourceId !== null ? output.ResourceId : undefined,
    ScalableDimension:
      output.ScalableDimension !== undefined && output.ScalableDimension !== null
        ? output.ScalableDimension
        : undefined,
    ServiceNamespace:
      output.ServiceNamespace !== undefined && output.ServiceNamespace !== null ? output.ServiceNamespace : undefined,
    StepScalingPolicyConfiguration:
      output.StepScalingPolicyConfiguration !== undefined && output.StepScalingPolicyConfiguration !== null
        ? deserializeAws_json1_1StepScalingPolicyConfiguration(output.StepScalingPolicyConfiguration, context)
        : undefined,
    TargetTrackingScalingPolicyConfiguration:
      output.TargetTrackingScalingPolicyConfiguration !== undefined &&
      output.TargetTrackingScalingPolicyConfiguration !== null
        ? deserializeAws_json1_1TargetTrackingScalingPolicyConfiguration(
            output.TargetTrackingScalingPolicyConfiguration,
            context
          )
        : undefined,
  };
};
const deserializeAws_json1_1ScheduledAction = (output, context) => {
  return {
    CreationTime:
      output.CreationTime !== undefined && output.CreationTime !== null
        ? new Date(Math.round(output.CreationTime * 1000))
        : undefined,
    EndTime:
      output.EndTime !== undefined && output.EndTime !== null ? new Date(Math.round(output.EndTime * 1000)) : undefined,
    ResourceId: output.ResourceId !== undefined && output.ResourceId !== null ? output.ResourceId : undefined,
    ScalableDimension:
      output.ScalableDimension !== undefined && output.ScalableDimension !== null
        ? output.ScalableDimension
        : undefined,
    ScalableTargetAction:
      output.ScalableTargetAction !== undefined && output.ScalableTargetAction !== null
        ? deserializeAws_json1_1ScalableTargetAction(output.ScalableTargetAction, context)
        : undefined,
    Schedule: output.Schedule !== undefined && output.Schedule !== null ? output.Schedule : undefined,
    ScheduledActionARN:
      output.ScheduledActionARN !== undefined && output.ScheduledActionARN !== null
        ? output.ScheduledActionARN
        : undefined,
    ScheduledActionName:
      output.ScheduledActionName !== undefined && output.ScheduledActionName !== null
        ? output.ScheduledActionName
        : undefined,
    ServiceNamespace:
      output.ServiceNamespace !== undefined && output.ServiceNamespace !== null ? output.ServiceNamespace : undefined,
    StartTime:
      output.StartTime !== undefined && output.StartTime !== null
        ? new Date(Math.round(output.StartTime * 1000))
        : undefined,
    Timezone: output.Timezone !== undefined && output.Timezone !== null ? output.Timezone : undefined,
  };
};
const deserializeAws_json1_1ScheduledActions = (output, context) => {
  return (output || [])
    .filter((e) => e != null)
    .map((entry) => {
      if (entry === null) {
        return null;
      }
      return deserializeAws_json1_1ScheduledAction(entry, context);
    });
};
const deserializeAws_json1_1StepAdjustment = (output, context) => {
  return {
    MetricIntervalLowerBound:
      output.MetricIntervalLowerBound !== undefined && output.MetricIntervalLowerBound !== null
        ? output.MetricIntervalLowerBound
        : undefined,
    MetricIntervalUpperBound:
      output.MetricIntervalUpperBound !== undefined && output.MetricIntervalUpperBound !== null
        ? output.MetricIntervalUpperBound
        : undefined,
    ScalingAdjustment:
      output.ScalingAdjustment !== undefined && output.ScalingAdjustment !== null
        ? output.ScalingAdjustment
        : undefined,
  };
};
const deserializeAws_json1_1StepAdjustments = (output, context) => {
  return (output || [])
    .filter((e) => e != null)
    .map((entry) => {
      if (entry === null) {
        return null;
      }
      return deserializeAws_json1_1StepAdjustment(entry, context);
    });
};
const deserializeAws_json1_1StepScalingPolicyConfiguration = (output, context) => {
  return {
    AdjustmentType:
      output.AdjustmentType !== undefined && output.AdjustmentType !== null ? output.AdjustmentType : undefined,
    Cooldown: output.Cooldown !== undefined && output.Cooldown !== null ? output.Cooldown : undefined,
    MetricAggregationType:
      output.MetricAggregationType !== undefined && output.MetricAggregationType !== null
        ? output.MetricAggregationType
        : undefined,
    MinAdjustmentMagnitude:
      output.MinAdjustmentMagnitude !== undefined && output.MinAdjustmentMagnitude !== null
        ? output.MinAdjustmentMagnitude
        : undefined,
    StepAdjustments:
      output.StepAdjustments !== undefined && output.StepAdjustments !== null
        ? deserializeAws_json1_1StepAdjustments(output.StepAdjustments, context)
        : undefined,
  };
};
const deserializeAws_json1_1SuspendedState = (output, context) => {
  return {
    DynamicScalingInSuspended:
      output.DynamicScalingInSuspended !== undefined && output.DynamicScalingInSuspended !== null
        ? output.DynamicScalingInSuspended
        : undefined,
    DynamicScalingOutSuspended:
      output.DynamicScalingOutSuspended !== undefined && output.DynamicScalingOutSuspended !== null
        ? output.DynamicScalingOutSuspended
        : undefined,
    ScheduledScalingSuspended:
      output.ScheduledScalingSuspended !== undefined && output.ScheduledScalingSuspended !== null
        ? output.ScheduledScalingSuspended
        : undefined,
  };
};
const deserializeAws_json1_1TargetTrackingScalingPolicyConfiguration = (output, context) => {
  return {
    CustomizedMetricSpecification:
      output.CustomizedMetricSpecification !== undefined && output.CustomizedMetricSpecification !== null
        ? deserializeAws_json1_1CustomizedMetricSpecification(output.CustomizedMetricSpecification, context)
        : undefined,
    DisableScaleIn:
      output.DisableScaleIn !== undefined && output.DisableScaleIn !== null ? output.DisableScaleIn : undefined,
    PredefinedMetricSpecification:
      output.PredefinedMetricSpecification !== undefined && output.PredefinedMetricSpecification !== null
        ? deserializeAws_json1_1PredefinedMetricSpecification(output.PredefinedMetricSpecification, context)
        : undefined,
    ScaleInCooldown:
      output.ScaleInCooldown !== undefined && output.ScaleInCooldown !== null ? output.ScaleInCooldown : undefined,
    ScaleOutCooldown:
      output.ScaleOutCooldown !== undefined && output.ScaleOutCooldown !== null ? output.ScaleOutCooldown : undefined,
    TargetValue: output.TargetValue !== undefined && output.TargetValue !== null ? output.TargetValue : undefined,
  };
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
