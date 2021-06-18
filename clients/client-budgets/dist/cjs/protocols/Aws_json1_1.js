"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.deserializeAws_json1_1UpdateSubscriberCommand =
  exports.deserializeAws_json1_1UpdateNotificationCommand =
  exports.deserializeAws_json1_1UpdateBudgetActionCommand =
  exports.deserializeAws_json1_1UpdateBudgetCommand =
  exports.deserializeAws_json1_1ExecuteBudgetActionCommand =
  exports.deserializeAws_json1_1DescribeSubscribersForNotificationCommand =
  exports.deserializeAws_json1_1DescribeNotificationsForBudgetCommand =
  exports.deserializeAws_json1_1DescribeBudgetsCommand =
  exports.deserializeAws_json1_1DescribeBudgetPerformanceHistoryCommand =
  exports.deserializeAws_json1_1DescribeBudgetActionsForBudgetCommand =
  exports.deserializeAws_json1_1DescribeBudgetActionsForAccountCommand =
  exports.deserializeAws_json1_1DescribeBudgetActionHistoriesCommand =
  exports.deserializeAws_json1_1DescribeBudgetActionCommand =
  exports.deserializeAws_json1_1DescribeBudgetCommand =
  exports.deserializeAws_json1_1DeleteSubscriberCommand =
  exports.deserializeAws_json1_1DeleteNotificationCommand =
  exports.deserializeAws_json1_1DeleteBudgetActionCommand =
  exports.deserializeAws_json1_1DeleteBudgetCommand =
  exports.deserializeAws_json1_1CreateSubscriberCommand =
  exports.deserializeAws_json1_1CreateNotificationCommand =
  exports.deserializeAws_json1_1CreateBudgetActionCommand =
  exports.deserializeAws_json1_1CreateBudgetCommand =
  exports.serializeAws_json1_1UpdateSubscriberCommand =
  exports.serializeAws_json1_1UpdateNotificationCommand =
  exports.serializeAws_json1_1UpdateBudgetActionCommand =
  exports.serializeAws_json1_1UpdateBudgetCommand =
  exports.serializeAws_json1_1ExecuteBudgetActionCommand =
  exports.serializeAws_json1_1DescribeSubscribersForNotificationCommand =
  exports.serializeAws_json1_1DescribeNotificationsForBudgetCommand =
  exports.serializeAws_json1_1DescribeBudgetsCommand =
  exports.serializeAws_json1_1DescribeBudgetPerformanceHistoryCommand =
  exports.serializeAws_json1_1DescribeBudgetActionsForBudgetCommand =
  exports.serializeAws_json1_1DescribeBudgetActionsForAccountCommand =
  exports.serializeAws_json1_1DescribeBudgetActionHistoriesCommand =
  exports.serializeAws_json1_1DescribeBudgetActionCommand =
  exports.serializeAws_json1_1DescribeBudgetCommand =
  exports.serializeAws_json1_1DeleteSubscriberCommand =
  exports.serializeAws_json1_1DeleteNotificationCommand =
  exports.serializeAws_json1_1DeleteBudgetActionCommand =
  exports.serializeAws_json1_1DeleteBudgetCommand =
  exports.serializeAws_json1_1CreateSubscriberCommand =
  exports.serializeAws_json1_1CreateNotificationCommand =
  exports.serializeAws_json1_1CreateBudgetActionCommand =
  exports.serializeAws_json1_1CreateBudgetCommand =
    void 0;
const protocol_http_1 = require("@aws-sdk/protocol-http");
const serializeAws_json1_1CreateBudgetCommand = async (input, context) => {
  const headers = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "AWSBudgetServiceGateway.CreateBudget",
  };
  let body;
  body = JSON.stringify(serializeAws_json1_1CreateBudgetRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
exports.serializeAws_json1_1CreateBudgetCommand = serializeAws_json1_1CreateBudgetCommand;
const serializeAws_json1_1CreateBudgetActionCommand = async (input, context) => {
  const headers = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "AWSBudgetServiceGateway.CreateBudgetAction",
  };
  let body;
  body = JSON.stringify(serializeAws_json1_1CreateBudgetActionRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
exports.serializeAws_json1_1CreateBudgetActionCommand = serializeAws_json1_1CreateBudgetActionCommand;
const serializeAws_json1_1CreateNotificationCommand = async (input, context) => {
  const headers = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "AWSBudgetServiceGateway.CreateNotification",
  };
  let body;
  body = JSON.stringify(serializeAws_json1_1CreateNotificationRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
exports.serializeAws_json1_1CreateNotificationCommand = serializeAws_json1_1CreateNotificationCommand;
const serializeAws_json1_1CreateSubscriberCommand = async (input, context) => {
  const headers = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "AWSBudgetServiceGateway.CreateSubscriber",
  };
  let body;
  body = JSON.stringify(serializeAws_json1_1CreateSubscriberRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
exports.serializeAws_json1_1CreateSubscriberCommand = serializeAws_json1_1CreateSubscriberCommand;
const serializeAws_json1_1DeleteBudgetCommand = async (input, context) => {
  const headers = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "AWSBudgetServiceGateway.DeleteBudget",
  };
  let body;
  body = JSON.stringify(serializeAws_json1_1DeleteBudgetRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
exports.serializeAws_json1_1DeleteBudgetCommand = serializeAws_json1_1DeleteBudgetCommand;
const serializeAws_json1_1DeleteBudgetActionCommand = async (input, context) => {
  const headers = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "AWSBudgetServiceGateway.DeleteBudgetAction",
  };
  let body;
  body = JSON.stringify(serializeAws_json1_1DeleteBudgetActionRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
exports.serializeAws_json1_1DeleteBudgetActionCommand = serializeAws_json1_1DeleteBudgetActionCommand;
const serializeAws_json1_1DeleteNotificationCommand = async (input, context) => {
  const headers = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "AWSBudgetServiceGateway.DeleteNotification",
  };
  let body;
  body = JSON.stringify(serializeAws_json1_1DeleteNotificationRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
exports.serializeAws_json1_1DeleteNotificationCommand = serializeAws_json1_1DeleteNotificationCommand;
const serializeAws_json1_1DeleteSubscriberCommand = async (input, context) => {
  const headers = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "AWSBudgetServiceGateway.DeleteSubscriber",
  };
  let body;
  body = JSON.stringify(serializeAws_json1_1DeleteSubscriberRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
exports.serializeAws_json1_1DeleteSubscriberCommand = serializeAws_json1_1DeleteSubscriberCommand;
const serializeAws_json1_1DescribeBudgetCommand = async (input, context) => {
  const headers = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "AWSBudgetServiceGateway.DescribeBudget",
  };
  let body;
  body = JSON.stringify(serializeAws_json1_1DescribeBudgetRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
exports.serializeAws_json1_1DescribeBudgetCommand = serializeAws_json1_1DescribeBudgetCommand;
const serializeAws_json1_1DescribeBudgetActionCommand = async (input, context) => {
  const headers = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "AWSBudgetServiceGateway.DescribeBudgetAction",
  };
  let body;
  body = JSON.stringify(serializeAws_json1_1DescribeBudgetActionRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
exports.serializeAws_json1_1DescribeBudgetActionCommand = serializeAws_json1_1DescribeBudgetActionCommand;
const serializeAws_json1_1DescribeBudgetActionHistoriesCommand = async (input, context) => {
  const headers = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "AWSBudgetServiceGateway.DescribeBudgetActionHistories",
  };
  let body;
  body = JSON.stringify(serializeAws_json1_1DescribeBudgetActionHistoriesRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
exports.serializeAws_json1_1DescribeBudgetActionHistoriesCommand =
  serializeAws_json1_1DescribeBudgetActionHistoriesCommand;
const serializeAws_json1_1DescribeBudgetActionsForAccountCommand = async (input, context) => {
  const headers = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "AWSBudgetServiceGateway.DescribeBudgetActionsForAccount",
  };
  let body;
  body = JSON.stringify(serializeAws_json1_1DescribeBudgetActionsForAccountRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
exports.serializeAws_json1_1DescribeBudgetActionsForAccountCommand =
  serializeAws_json1_1DescribeBudgetActionsForAccountCommand;
const serializeAws_json1_1DescribeBudgetActionsForBudgetCommand = async (input, context) => {
  const headers = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "AWSBudgetServiceGateway.DescribeBudgetActionsForBudget",
  };
  let body;
  body = JSON.stringify(serializeAws_json1_1DescribeBudgetActionsForBudgetRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
exports.serializeAws_json1_1DescribeBudgetActionsForBudgetCommand =
  serializeAws_json1_1DescribeBudgetActionsForBudgetCommand;
const serializeAws_json1_1DescribeBudgetPerformanceHistoryCommand = async (input, context) => {
  const headers = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "AWSBudgetServiceGateway.DescribeBudgetPerformanceHistory",
  };
  let body;
  body = JSON.stringify(serializeAws_json1_1DescribeBudgetPerformanceHistoryRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
exports.serializeAws_json1_1DescribeBudgetPerformanceHistoryCommand =
  serializeAws_json1_1DescribeBudgetPerformanceHistoryCommand;
const serializeAws_json1_1DescribeBudgetsCommand = async (input, context) => {
  const headers = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "AWSBudgetServiceGateway.DescribeBudgets",
  };
  let body;
  body = JSON.stringify(serializeAws_json1_1DescribeBudgetsRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
exports.serializeAws_json1_1DescribeBudgetsCommand = serializeAws_json1_1DescribeBudgetsCommand;
const serializeAws_json1_1DescribeNotificationsForBudgetCommand = async (input, context) => {
  const headers = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "AWSBudgetServiceGateway.DescribeNotificationsForBudget",
  };
  let body;
  body = JSON.stringify(serializeAws_json1_1DescribeNotificationsForBudgetRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
exports.serializeAws_json1_1DescribeNotificationsForBudgetCommand =
  serializeAws_json1_1DescribeNotificationsForBudgetCommand;
const serializeAws_json1_1DescribeSubscribersForNotificationCommand = async (input, context) => {
  const headers = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "AWSBudgetServiceGateway.DescribeSubscribersForNotification",
  };
  let body;
  body = JSON.stringify(serializeAws_json1_1DescribeSubscribersForNotificationRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
exports.serializeAws_json1_1DescribeSubscribersForNotificationCommand =
  serializeAws_json1_1DescribeSubscribersForNotificationCommand;
const serializeAws_json1_1ExecuteBudgetActionCommand = async (input, context) => {
  const headers = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "AWSBudgetServiceGateway.ExecuteBudgetAction",
  };
  let body;
  body = JSON.stringify(serializeAws_json1_1ExecuteBudgetActionRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
exports.serializeAws_json1_1ExecuteBudgetActionCommand = serializeAws_json1_1ExecuteBudgetActionCommand;
const serializeAws_json1_1UpdateBudgetCommand = async (input, context) => {
  const headers = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "AWSBudgetServiceGateway.UpdateBudget",
  };
  let body;
  body = JSON.stringify(serializeAws_json1_1UpdateBudgetRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
exports.serializeAws_json1_1UpdateBudgetCommand = serializeAws_json1_1UpdateBudgetCommand;
const serializeAws_json1_1UpdateBudgetActionCommand = async (input, context) => {
  const headers = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "AWSBudgetServiceGateway.UpdateBudgetAction",
  };
  let body;
  body = JSON.stringify(serializeAws_json1_1UpdateBudgetActionRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
exports.serializeAws_json1_1UpdateBudgetActionCommand = serializeAws_json1_1UpdateBudgetActionCommand;
const serializeAws_json1_1UpdateNotificationCommand = async (input, context) => {
  const headers = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "AWSBudgetServiceGateway.UpdateNotification",
  };
  let body;
  body = JSON.stringify(serializeAws_json1_1UpdateNotificationRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
exports.serializeAws_json1_1UpdateNotificationCommand = serializeAws_json1_1UpdateNotificationCommand;
const serializeAws_json1_1UpdateSubscriberCommand = async (input, context) => {
  const headers = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "AWSBudgetServiceGateway.UpdateSubscriber",
  };
  let body;
  body = JSON.stringify(serializeAws_json1_1UpdateSubscriberRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
exports.serializeAws_json1_1UpdateSubscriberCommand = serializeAws_json1_1UpdateSubscriberCommand;
const deserializeAws_json1_1CreateBudgetCommand = async (output, context) => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_1CreateBudgetCommandError(output, context);
  }
  const data = await parseBody(output.body, context);
  let contents = {};
  contents = deserializeAws_json1_1CreateBudgetResponse(data, context);
  const response = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};
exports.deserializeAws_json1_1CreateBudgetCommand = deserializeAws_json1_1CreateBudgetCommand;
const deserializeAws_json1_1CreateBudgetCommandError = async (output, context) => {
  const parsedOutput = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response;
  let errorCode = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.budgets#AccessDeniedException":
      response = {
        ...(await deserializeAws_json1_1AccessDeniedExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "CreationLimitExceededException":
    case "com.amazonaws.budgets#CreationLimitExceededException":
      response = {
        ...(await deserializeAws_json1_1CreationLimitExceededExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "DuplicateRecordException":
    case "com.amazonaws.budgets#DuplicateRecordException":
      response = {
        ...(await deserializeAws_json1_1DuplicateRecordExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InternalErrorException":
    case "com.amazonaws.budgets#InternalErrorException":
      response = {
        ...(await deserializeAws_json1_1InternalErrorExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InvalidParameterException":
    case "com.amazonaws.budgets#InvalidParameterException":
      response = {
        ...(await deserializeAws_json1_1InvalidParameterExceptionResponse(parsedOutput, context)),
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
const deserializeAws_json1_1CreateBudgetActionCommand = async (output, context) => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_1CreateBudgetActionCommandError(output, context);
  }
  const data = await parseBody(output.body, context);
  let contents = {};
  contents = deserializeAws_json1_1CreateBudgetActionResponse(data, context);
  const response = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};
exports.deserializeAws_json1_1CreateBudgetActionCommand = deserializeAws_json1_1CreateBudgetActionCommand;
const deserializeAws_json1_1CreateBudgetActionCommandError = async (output, context) => {
  const parsedOutput = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response;
  let errorCode = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.budgets#AccessDeniedException":
      response = {
        ...(await deserializeAws_json1_1AccessDeniedExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "CreationLimitExceededException":
    case "com.amazonaws.budgets#CreationLimitExceededException":
      response = {
        ...(await deserializeAws_json1_1CreationLimitExceededExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "DuplicateRecordException":
    case "com.amazonaws.budgets#DuplicateRecordException":
      response = {
        ...(await deserializeAws_json1_1DuplicateRecordExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InternalErrorException":
    case "com.amazonaws.budgets#InternalErrorException":
      response = {
        ...(await deserializeAws_json1_1InternalErrorExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InvalidParameterException":
    case "com.amazonaws.budgets#InvalidParameterException":
      response = {
        ...(await deserializeAws_json1_1InvalidParameterExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "NotFoundException":
    case "com.amazonaws.budgets#NotFoundException":
      response = {
        ...(await deserializeAws_json1_1NotFoundExceptionResponse(parsedOutput, context)),
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
const deserializeAws_json1_1CreateNotificationCommand = async (output, context) => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_1CreateNotificationCommandError(output, context);
  }
  const data = await parseBody(output.body, context);
  let contents = {};
  contents = deserializeAws_json1_1CreateNotificationResponse(data, context);
  const response = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};
exports.deserializeAws_json1_1CreateNotificationCommand = deserializeAws_json1_1CreateNotificationCommand;
const deserializeAws_json1_1CreateNotificationCommandError = async (output, context) => {
  const parsedOutput = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response;
  let errorCode = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.budgets#AccessDeniedException":
      response = {
        ...(await deserializeAws_json1_1AccessDeniedExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "CreationLimitExceededException":
    case "com.amazonaws.budgets#CreationLimitExceededException":
      response = {
        ...(await deserializeAws_json1_1CreationLimitExceededExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "DuplicateRecordException":
    case "com.amazonaws.budgets#DuplicateRecordException":
      response = {
        ...(await deserializeAws_json1_1DuplicateRecordExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InternalErrorException":
    case "com.amazonaws.budgets#InternalErrorException":
      response = {
        ...(await deserializeAws_json1_1InternalErrorExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InvalidParameterException":
    case "com.amazonaws.budgets#InvalidParameterException":
      response = {
        ...(await deserializeAws_json1_1InvalidParameterExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "NotFoundException":
    case "com.amazonaws.budgets#NotFoundException":
      response = {
        ...(await deserializeAws_json1_1NotFoundExceptionResponse(parsedOutput, context)),
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
const deserializeAws_json1_1CreateSubscriberCommand = async (output, context) => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_1CreateSubscriberCommandError(output, context);
  }
  const data = await parseBody(output.body, context);
  let contents = {};
  contents = deserializeAws_json1_1CreateSubscriberResponse(data, context);
  const response = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};
exports.deserializeAws_json1_1CreateSubscriberCommand = deserializeAws_json1_1CreateSubscriberCommand;
const deserializeAws_json1_1CreateSubscriberCommandError = async (output, context) => {
  const parsedOutput = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response;
  let errorCode = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.budgets#AccessDeniedException":
      response = {
        ...(await deserializeAws_json1_1AccessDeniedExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "CreationLimitExceededException":
    case "com.amazonaws.budgets#CreationLimitExceededException":
      response = {
        ...(await deserializeAws_json1_1CreationLimitExceededExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "DuplicateRecordException":
    case "com.amazonaws.budgets#DuplicateRecordException":
      response = {
        ...(await deserializeAws_json1_1DuplicateRecordExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InternalErrorException":
    case "com.amazonaws.budgets#InternalErrorException":
      response = {
        ...(await deserializeAws_json1_1InternalErrorExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InvalidParameterException":
    case "com.amazonaws.budgets#InvalidParameterException":
      response = {
        ...(await deserializeAws_json1_1InvalidParameterExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "NotFoundException":
    case "com.amazonaws.budgets#NotFoundException":
      response = {
        ...(await deserializeAws_json1_1NotFoundExceptionResponse(parsedOutput, context)),
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
const deserializeAws_json1_1DeleteBudgetCommand = async (output, context) => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_1DeleteBudgetCommandError(output, context);
  }
  const data = await parseBody(output.body, context);
  let contents = {};
  contents = deserializeAws_json1_1DeleteBudgetResponse(data, context);
  const response = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};
exports.deserializeAws_json1_1DeleteBudgetCommand = deserializeAws_json1_1DeleteBudgetCommand;
const deserializeAws_json1_1DeleteBudgetCommandError = async (output, context) => {
  const parsedOutput = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response;
  let errorCode = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.budgets#AccessDeniedException":
      response = {
        ...(await deserializeAws_json1_1AccessDeniedExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InternalErrorException":
    case "com.amazonaws.budgets#InternalErrorException":
      response = {
        ...(await deserializeAws_json1_1InternalErrorExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InvalidParameterException":
    case "com.amazonaws.budgets#InvalidParameterException":
      response = {
        ...(await deserializeAws_json1_1InvalidParameterExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "NotFoundException":
    case "com.amazonaws.budgets#NotFoundException":
      response = {
        ...(await deserializeAws_json1_1NotFoundExceptionResponse(parsedOutput, context)),
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
const deserializeAws_json1_1DeleteBudgetActionCommand = async (output, context) => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_1DeleteBudgetActionCommandError(output, context);
  }
  const data = await parseBody(output.body, context);
  let contents = {};
  contents = deserializeAws_json1_1DeleteBudgetActionResponse(data, context);
  const response = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};
exports.deserializeAws_json1_1DeleteBudgetActionCommand = deserializeAws_json1_1DeleteBudgetActionCommand;
const deserializeAws_json1_1DeleteBudgetActionCommandError = async (output, context) => {
  const parsedOutput = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response;
  let errorCode = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.budgets#AccessDeniedException":
      response = {
        ...(await deserializeAws_json1_1AccessDeniedExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InternalErrorException":
    case "com.amazonaws.budgets#InternalErrorException":
      response = {
        ...(await deserializeAws_json1_1InternalErrorExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InvalidParameterException":
    case "com.amazonaws.budgets#InvalidParameterException":
      response = {
        ...(await deserializeAws_json1_1InvalidParameterExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "NotFoundException":
    case "com.amazonaws.budgets#NotFoundException":
      response = {
        ...(await deserializeAws_json1_1NotFoundExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ResourceLockedException":
    case "com.amazonaws.budgets#ResourceLockedException":
      response = {
        ...(await deserializeAws_json1_1ResourceLockedExceptionResponse(parsedOutput, context)),
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
const deserializeAws_json1_1DeleteNotificationCommand = async (output, context) => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_1DeleteNotificationCommandError(output, context);
  }
  const data = await parseBody(output.body, context);
  let contents = {};
  contents = deserializeAws_json1_1DeleteNotificationResponse(data, context);
  const response = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};
exports.deserializeAws_json1_1DeleteNotificationCommand = deserializeAws_json1_1DeleteNotificationCommand;
const deserializeAws_json1_1DeleteNotificationCommandError = async (output, context) => {
  const parsedOutput = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response;
  let errorCode = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.budgets#AccessDeniedException":
      response = {
        ...(await deserializeAws_json1_1AccessDeniedExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InternalErrorException":
    case "com.amazonaws.budgets#InternalErrorException":
      response = {
        ...(await deserializeAws_json1_1InternalErrorExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InvalidParameterException":
    case "com.amazonaws.budgets#InvalidParameterException":
      response = {
        ...(await deserializeAws_json1_1InvalidParameterExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "NotFoundException":
    case "com.amazonaws.budgets#NotFoundException":
      response = {
        ...(await deserializeAws_json1_1NotFoundExceptionResponse(parsedOutput, context)),
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
const deserializeAws_json1_1DeleteSubscriberCommand = async (output, context) => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_1DeleteSubscriberCommandError(output, context);
  }
  const data = await parseBody(output.body, context);
  let contents = {};
  contents = deserializeAws_json1_1DeleteSubscriberResponse(data, context);
  const response = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};
exports.deserializeAws_json1_1DeleteSubscriberCommand = deserializeAws_json1_1DeleteSubscriberCommand;
const deserializeAws_json1_1DeleteSubscriberCommandError = async (output, context) => {
  const parsedOutput = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response;
  let errorCode = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.budgets#AccessDeniedException":
      response = {
        ...(await deserializeAws_json1_1AccessDeniedExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InternalErrorException":
    case "com.amazonaws.budgets#InternalErrorException":
      response = {
        ...(await deserializeAws_json1_1InternalErrorExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InvalidParameterException":
    case "com.amazonaws.budgets#InvalidParameterException":
      response = {
        ...(await deserializeAws_json1_1InvalidParameterExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "NotFoundException":
    case "com.amazonaws.budgets#NotFoundException":
      response = {
        ...(await deserializeAws_json1_1NotFoundExceptionResponse(parsedOutput, context)),
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
const deserializeAws_json1_1DescribeBudgetCommand = async (output, context) => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_1DescribeBudgetCommandError(output, context);
  }
  const data = await parseBody(output.body, context);
  let contents = {};
  contents = deserializeAws_json1_1DescribeBudgetResponse(data, context);
  const response = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};
exports.deserializeAws_json1_1DescribeBudgetCommand = deserializeAws_json1_1DescribeBudgetCommand;
const deserializeAws_json1_1DescribeBudgetCommandError = async (output, context) => {
  const parsedOutput = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response;
  let errorCode = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.budgets#AccessDeniedException":
      response = {
        ...(await deserializeAws_json1_1AccessDeniedExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InternalErrorException":
    case "com.amazonaws.budgets#InternalErrorException":
      response = {
        ...(await deserializeAws_json1_1InternalErrorExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InvalidParameterException":
    case "com.amazonaws.budgets#InvalidParameterException":
      response = {
        ...(await deserializeAws_json1_1InvalidParameterExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "NotFoundException":
    case "com.amazonaws.budgets#NotFoundException":
      response = {
        ...(await deserializeAws_json1_1NotFoundExceptionResponse(parsedOutput, context)),
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
const deserializeAws_json1_1DescribeBudgetActionCommand = async (output, context) => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_1DescribeBudgetActionCommandError(output, context);
  }
  const data = await parseBody(output.body, context);
  let contents = {};
  contents = deserializeAws_json1_1DescribeBudgetActionResponse(data, context);
  const response = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};
exports.deserializeAws_json1_1DescribeBudgetActionCommand = deserializeAws_json1_1DescribeBudgetActionCommand;
const deserializeAws_json1_1DescribeBudgetActionCommandError = async (output, context) => {
  const parsedOutput = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response;
  let errorCode = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.budgets#AccessDeniedException":
      response = {
        ...(await deserializeAws_json1_1AccessDeniedExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InternalErrorException":
    case "com.amazonaws.budgets#InternalErrorException":
      response = {
        ...(await deserializeAws_json1_1InternalErrorExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InvalidParameterException":
    case "com.amazonaws.budgets#InvalidParameterException":
      response = {
        ...(await deserializeAws_json1_1InvalidParameterExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "NotFoundException":
    case "com.amazonaws.budgets#NotFoundException":
      response = {
        ...(await deserializeAws_json1_1NotFoundExceptionResponse(parsedOutput, context)),
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
const deserializeAws_json1_1DescribeBudgetActionHistoriesCommand = async (output, context) => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_1DescribeBudgetActionHistoriesCommandError(output, context);
  }
  const data = await parseBody(output.body, context);
  let contents = {};
  contents = deserializeAws_json1_1DescribeBudgetActionHistoriesResponse(data, context);
  const response = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};
exports.deserializeAws_json1_1DescribeBudgetActionHistoriesCommand =
  deserializeAws_json1_1DescribeBudgetActionHistoriesCommand;
const deserializeAws_json1_1DescribeBudgetActionHistoriesCommandError = async (output, context) => {
  const parsedOutput = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response;
  let errorCode = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.budgets#AccessDeniedException":
      response = {
        ...(await deserializeAws_json1_1AccessDeniedExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InternalErrorException":
    case "com.amazonaws.budgets#InternalErrorException":
      response = {
        ...(await deserializeAws_json1_1InternalErrorExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InvalidNextTokenException":
    case "com.amazonaws.budgets#InvalidNextTokenException":
      response = {
        ...(await deserializeAws_json1_1InvalidNextTokenExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InvalidParameterException":
    case "com.amazonaws.budgets#InvalidParameterException":
      response = {
        ...(await deserializeAws_json1_1InvalidParameterExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "NotFoundException":
    case "com.amazonaws.budgets#NotFoundException":
      response = {
        ...(await deserializeAws_json1_1NotFoundExceptionResponse(parsedOutput, context)),
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
const deserializeAws_json1_1DescribeBudgetActionsForAccountCommand = async (output, context) => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_1DescribeBudgetActionsForAccountCommandError(output, context);
  }
  const data = await parseBody(output.body, context);
  let contents = {};
  contents = deserializeAws_json1_1DescribeBudgetActionsForAccountResponse(data, context);
  const response = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};
exports.deserializeAws_json1_1DescribeBudgetActionsForAccountCommand =
  deserializeAws_json1_1DescribeBudgetActionsForAccountCommand;
const deserializeAws_json1_1DescribeBudgetActionsForAccountCommandError = async (output, context) => {
  const parsedOutput = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response;
  let errorCode = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.budgets#AccessDeniedException":
      response = {
        ...(await deserializeAws_json1_1AccessDeniedExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InternalErrorException":
    case "com.amazonaws.budgets#InternalErrorException":
      response = {
        ...(await deserializeAws_json1_1InternalErrorExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InvalidNextTokenException":
    case "com.amazonaws.budgets#InvalidNextTokenException":
      response = {
        ...(await deserializeAws_json1_1InvalidNextTokenExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InvalidParameterException":
    case "com.amazonaws.budgets#InvalidParameterException":
      response = {
        ...(await deserializeAws_json1_1InvalidParameterExceptionResponse(parsedOutput, context)),
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
const deserializeAws_json1_1DescribeBudgetActionsForBudgetCommand = async (output, context) => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_1DescribeBudgetActionsForBudgetCommandError(output, context);
  }
  const data = await parseBody(output.body, context);
  let contents = {};
  contents = deserializeAws_json1_1DescribeBudgetActionsForBudgetResponse(data, context);
  const response = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};
exports.deserializeAws_json1_1DescribeBudgetActionsForBudgetCommand =
  deserializeAws_json1_1DescribeBudgetActionsForBudgetCommand;
const deserializeAws_json1_1DescribeBudgetActionsForBudgetCommandError = async (output, context) => {
  const parsedOutput = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response;
  let errorCode = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.budgets#AccessDeniedException":
      response = {
        ...(await deserializeAws_json1_1AccessDeniedExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InternalErrorException":
    case "com.amazonaws.budgets#InternalErrorException":
      response = {
        ...(await deserializeAws_json1_1InternalErrorExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InvalidNextTokenException":
    case "com.amazonaws.budgets#InvalidNextTokenException":
      response = {
        ...(await deserializeAws_json1_1InvalidNextTokenExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InvalidParameterException":
    case "com.amazonaws.budgets#InvalidParameterException":
      response = {
        ...(await deserializeAws_json1_1InvalidParameterExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "NotFoundException":
    case "com.amazonaws.budgets#NotFoundException":
      response = {
        ...(await deserializeAws_json1_1NotFoundExceptionResponse(parsedOutput, context)),
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
const deserializeAws_json1_1DescribeBudgetPerformanceHistoryCommand = async (output, context) => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_1DescribeBudgetPerformanceHistoryCommandError(output, context);
  }
  const data = await parseBody(output.body, context);
  let contents = {};
  contents = deserializeAws_json1_1DescribeBudgetPerformanceHistoryResponse(data, context);
  const response = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};
exports.deserializeAws_json1_1DescribeBudgetPerformanceHistoryCommand =
  deserializeAws_json1_1DescribeBudgetPerformanceHistoryCommand;
const deserializeAws_json1_1DescribeBudgetPerformanceHistoryCommandError = async (output, context) => {
  const parsedOutput = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response;
  let errorCode = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.budgets#AccessDeniedException":
      response = {
        ...(await deserializeAws_json1_1AccessDeniedExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ExpiredNextTokenException":
    case "com.amazonaws.budgets#ExpiredNextTokenException":
      response = {
        ...(await deserializeAws_json1_1ExpiredNextTokenExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InternalErrorException":
    case "com.amazonaws.budgets#InternalErrorException":
      response = {
        ...(await deserializeAws_json1_1InternalErrorExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InvalidNextTokenException":
    case "com.amazonaws.budgets#InvalidNextTokenException":
      response = {
        ...(await deserializeAws_json1_1InvalidNextTokenExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InvalidParameterException":
    case "com.amazonaws.budgets#InvalidParameterException":
      response = {
        ...(await deserializeAws_json1_1InvalidParameterExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "NotFoundException":
    case "com.amazonaws.budgets#NotFoundException":
      response = {
        ...(await deserializeAws_json1_1NotFoundExceptionResponse(parsedOutput, context)),
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
const deserializeAws_json1_1DescribeBudgetsCommand = async (output, context) => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_1DescribeBudgetsCommandError(output, context);
  }
  const data = await parseBody(output.body, context);
  let contents = {};
  contents = deserializeAws_json1_1DescribeBudgetsResponse(data, context);
  const response = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};
exports.deserializeAws_json1_1DescribeBudgetsCommand = deserializeAws_json1_1DescribeBudgetsCommand;
const deserializeAws_json1_1DescribeBudgetsCommandError = async (output, context) => {
  const parsedOutput = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response;
  let errorCode = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.budgets#AccessDeniedException":
      response = {
        ...(await deserializeAws_json1_1AccessDeniedExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ExpiredNextTokenException":
    case "com.amazonaws.budgets#ExpiredNextTokenException":
      response = {
        ...(await deserializeAws_json1_1ExpiredNextTokenExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InternalErrorException":
    case "com.amazonaws.budgets#InternalErrorException":
      response = {
        ...(await deserializeAws_json1_1InternalErrorExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InvalidNextTokenException":
    case "com.amazonaws.budgets#InvalidNextTokenException":
      response = {
        ...(await deserializeAws_json1_1InvalidNextTokenExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InvalidParameterException":
    case "com.amazonaws.budgets#InvalidParameterException":
      response = {
        ...(await deserializeAws_json1_1InvalidParameterExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "NotFoundException":
    case "com.amazonaws.budgets#NotFoundException":
      response = {
        ...(await deserializeAws_json1_1NotFoundExceptionResponse(parsedOutput, context)),
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
const deserializeAws_json1_1DescribeNotificationsForBudgetCommand = async (output, context) => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_1DescribeNotificationsForBudgetCommandError(output, context);
  }
  const data = await parseBody(output.body, context);
  let contents = {};
  contents = deserializeAws_json1_1DescribeNotificationsForBudgetResponse(data, context);
  const response = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};
exports.deserializeAws_json1_1DescribeNotificationsForBudgetCommand =
  deserializeAws_json1_1DescribeNotificationsForBudgetCommand;
const deserializeAws_json1_1DescribeNotificationsForBudgetCommandError = async (output, context) => {
  const parsedOutput = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response;
  let errorCode = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.budgets#AccessDeniedException":
      response = {
        ...(await deserializeAws_json1_1AccessDeniedExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ExpiredNextTokenException":
    case "com.amazonaws.budgets#ExpiredNextTokenException":
      response = {
        ...(await deserializeAws_json1_1ExpiredNextTokenExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InternalErrorException":
    case "com.amazonaws.budgets#InternalErrorException":
      response = {
        ...(await deserializeAws_json1_1InternalErrorExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InvalidNextTokenException":
    case "com.amazonaws.budgets#InvalidNextTokenException":
      response = {
        ...(await deserializeAws_json1_1InvalidNextTokenExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InvalidParameterException":
    case "com.amazonaws.budgets#InvalidParameterException":
      response = {
        ...(await deserializeAws_json1_1InvalidParameterExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "NotFoundException":
    case "com.amazonaws.budgets#NotFoundException":
      response = {
        ...(await deserializeAws_json1_1NotFoundExceptionResponse(parsedOutput, context)),
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
const deserializeAws_json1_1DescribeSubscribersForNotificationCommand = async (output, context) => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_1DescribeSubscribersForNotificationCommandError(output, context);
  }
  const data = await parseBody(output.body, context);
  let contents = {};
  contents = deserializeAws_json1_1DescribeSubscribersForNotificationResponse(data, context);
  const response = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};
exports.deserializeAws_json1_1DescribeSubscribersForNotificationCommand =
  deserializeAws_json1_1DescribeSubscribersForNotificationCommand;
const deserializeAws_json1_1DescribeSubscribersForNotificationCommandError = async (output, context) => {
  const parsedOutput = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response;
  let errorCode = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.budgets#AccessDeniedException":
      response = {
        ...(await deserializeAws_json1_1AccessDeniedExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ExpiredNextTokenException":
    case "com.amazonaws.budgets#ExpiredNextTokenException":
      response = {
        ...(await deserializeAws_json1_1ExpiredNextTokenExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InternalErrorException":
    case "com.amazonaws.budgets#InternalErrorException":
      response = {
        ...(await deserializeAws_json1_1InternalErrorExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InvalidNextTokenException":
    case "com.amazonaws.budgets#InvalidNextTokenException":
      response = {
        ...(await deserializeAws_json1_1InvalidNextTokenExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InvalidParameterException":
    case "com.amazonaws.budgets#InvalidParameterException":
      response = {
        ...(await deserializeAws_json1_1InvalidParameterExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "NotFoundException":
    case "com.amazonaws.budgets#NotFoundException":
      response = {
        ...(await deserializeAws_json1_1NotFoundExceptionResponse(parsedOutput, context)),
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
const deserializeAws_json1_1ExecuteBudgetActionCommand = async (output, context) => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_1ExecuteBudgetActionCommandError(output, context);
  }
  const data = await parseBody(output.body, context);
  let contents = {};
  contents = deserializeAws_json1_1ExecuteBudgetActionResponse(data, context);
  const response = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};
exports.deserializeAws_json1_1ExecuteBudgetActionCommand = deserializeAws_json1_1ExecuteBudgetActionCommand;
const deserializeAws_json1_1ExecuteBudgetActionCommandError = async (output, context) => {
  const parsedOutput = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response;
  let errorCode = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.budgets#AccessDeniedException":
      response = {
        ...(await deserializeAws_json1_1AccessDeniedExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InternalErrorException":
    case "com.amazonaws.budgets#InternalErrorException":
      response = {
        ...(await deserializeAws_json1_1InternalErrorExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InvalidParameterException":
    case "com.amazonaws.budgets#InvalidParameterException":
      response = {
        ...(await deserializeAws_json1_1InvalidParameterExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "NotFoundException":
    case "com.amazonaws.budgets#NotFoundException":
      response = {
        ...(await deserializeAws_json1_1NotFoundExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ResourceLockedException":
    case "com.amazonaws.budgets#ResourceLockedException":
      response = {
        ...(await deserializeAws_json1_1ResourceLockedExceptionResponse(parsedOutput, context)),
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
const deserializeAws_json1_1UpdateBudgetCommand = async (output, context) => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_1UpdateBudgetCommandError(output, context);
  }
  const data = await parseBody(output.body, context);
  let contents = {};
  contents = deserializeAws_json1_1UpdateBudgetResponse(data, context);
  const response = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};
exports.deserializeAws_json1_1UpdateBudgetCommand = deserializeAws_json1_1UpdateBudgetCommand;
const deserializeAws_json1_1UpdateBudgetCommandError = async (output, context) => {
  const parsedOutput = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response;
  let errorCode = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.budgets#AccessDeniedException":
      response = {
        ...(await deserializeAws_json1_1AccessDeniedExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InternalErrorException":
    case "com.amazonaws.budgets#InternalErrorException":
      response = {
        ...(await deserializeAws_json1_1InternalErrorExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InvalidParameterException":
    case "com.amazonaws.budgets#InvalidParameterException":
      response = {
        ...(await deserializeAws_json1_1InvalidParameterExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "NotFoundException":
    case "com.amazonaws.budgets#NotFoundException":
      response = {
        ...(await deserializeAws_json1_1NotFoundExceptionResponse(parsedOutput, context)),
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
const deserializeAws_json1_1UpdateBudgetActionCommand = async (output, context) => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_1UpdateBudgetActionCommandError(output, context);
  }
  const data = await parseBody(output.body, context);
  let contents = {};
  contents = deserializeAws_json1_1UpdateBudgetActionResponse(data, context);
  const response = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};
exports.deserializeAws_json1_1UpdateBudgetActionCommand = deserializeAws_json1_1UpdateBudgetActionCommand;
const deserializeAws_json1_1UpdateBudgetActionCommandError = async (output, context) => {
  const parsedOutput = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response;
  let errorCode = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.budgets#AccessDeniedException":
      response = {
        ...(await deserializeAws_json1_1AccessDeniedExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InternalErrorException":
    case "com.amazonaws.budgets#InternalErrorException":
      response = {
        ...(await deserializeAws_json1_1InternalErrorExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InvalidParameterException":
    case "com.amazonaws.budgets#InvalidParameterException":
      response = {
        ...(await deserializeAws_json1_1InvalidParameterExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "NotFoundException":
    case "com.amazonaws.budgets#NotFoundException":
      response = {
        ...(await deserializeAws_json1_1NotFoundExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ResourceLockedException":
    case "com.amazonaws.budgets#ResourceLockedException":
      response = {
        ...(await deserializeAws_json1_1ResourceLockedExceptionResponse(parsedOutput, context)),
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
const deserializeAws_json1_1UpdateNotificationCommand = async (output, context) => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_1UpdateNotificationCommandError(output, context);
  }
  const data = await parseBody(output.body, context);
  let contents = {};
  contents = deserializeAws_json1_1UpdateNotificationResponse(data, context);
  const response = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};
exports.deserializeAws_json1_1UpdateNotificationCommand = deserializeAws_json1_1UpdateNotificationCommand;
const deserializeAws_json1_1UpdateNotificationCommandError = async (output, context) => {
  const parsedOutput = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response;
  let errorCode = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.budgets#AccessDeniedException":
      response = {
        ...(await deserializeAws_json1_1AccessDeniedExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "DuplicateRecordException":
    case "com.amazonaws.budgets#DuplicateRecordException":
      response = {
        ...(await deserializeAws_json1_1DuplicateRecordExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InternalErrorException":
    case "com.amazonaws.budgets#InternalErrorException":
      response = {
        ...(await deserializeAws_json1_1InternalErrorExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InvalidParameterException":
    case "com.amazonaws.budgets#InvalidParameterException":
      response = {
        ...(await deserializeAws_json1_1InvalidParameterExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "NotFoundException":
    case "com.amazonaws.budgets#NotFoundException":
      response = {
        ...(await deserializeAws_json1_1NotFoundExceptionResponse(parsedOutput, context)),
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
const deserializeAws_json1_1UpdateSubscriberCommand = async (output, context) => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_1UpdateSubscriberCommandError(output, context);
  }
  const data = await parseBody(output.body, context);
  let contents = {};
  contents = deserializeAws_json1_1UpdateSubscriberResponse(data, context);
  const response = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};
exports.deserializeAws_json1_1UpdateSubscriberCommand = deserializeAws_json1_1UpdateSubscriberCommand;
const deserializeAws_json1_1UpdateSubscriberCommandError = async (output, context) => {
  const parsedOutput = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response;
  let errorCode = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.budgets#AccessDeniedException":
      response = {
        ...(await deserializeAws_json1_1AccessDeniedExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "DuplicateRecordException":
    case "com.amazonaws.budgets#DuplicateRecordException":
      response = {
        ...(await deserializeAws_json1_1DuplicateRecordExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InternalErrorException":
    case "com.amazonaws.budgets#InternalErrorException":
      response = {
        ...(await deserializeAws_json1_1InternalErrorExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InvalidParameterException":
    case "com.amazonaws.budgets#InvalidParameterException":
      response = {
        ...(await deserializeAws_json1_1InvalidParameterExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "NotFoundException":
    case "com.amazonaws.budgets#NotFoundException":
      response = {
        ...(await deserializeAws_json1_1NotFoundExceptionResponse(parsedOutput, context)),
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
const deserializeAws_json1_1CreationLimitExceededExceptionResponse = async (parsedOutput, context) => {
  const body = parsedOutput.body;
  const deserialized = deserializeAws_json1_1CreationLimitExceededException(body, context);
  const contents = {
    name: "CreationLimitExceededException",
    $fault: "client",
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  };
  return contents;
};
const deserializeAws_json1_1DuplicateRecordExceptionResponse = async (parsedOutput, context) => {
  const body = parsedOutput.body;
  const deserialized = deserializeAws_json1_1DuplicateRecordException(body, context);
  const contents = {
    name: "DuplicateRecordException",
    $fault: "client",
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  };
  return contents;
};
const deserializeAws_json1_1ExpiredNextTokenExceptionResponse = async (parsedOutput, context) => {
  const body = parsedOutput.body;
  const deserialized = deserializeAws_json1_1ExpiredNextTokenException(body, context);
  const contents = {
    name: "ExpiredNextTokenException",
    $fault: "client",
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  };
  return contents;
};
const deserializeAws_json1_1InternalErrorExceptionResponse = async (parsedOutput, context) => {
  const body = parsedOutput.body;
  const deserialized = deserializeAws_json1_1InternalErrorException(body, context);
  const contents = {
    name: "InternalErrorException",
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
const deserializeAws_json1_1NotFoundExceptionResponse = async (parsedOutput, context) => {
  const body = parsedOutput.body;
  const deserialized = deserializeAws_json1_1NotFoundException(body, context);
  const contents = {
    name: "NotFoundException",
    $fault: "client",
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  };
  return contents;
};
const deserializeAws_json1_1ResourceLockedExceptionResponse = async (parsedOutput, context) => {
  const body = parsedOutput.body;
  const deserialized = deserializeAws_json1_1ResourceLockedException(body, context);
  const contents = {
    name: "ResourceLockedException",
    $fault: "client",
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  };
  return contents;
};
const serializeAws_json1_1ActionThreshold = (input, context) => {
  return {
    ...(input.ActionThresholdType !== undefined &&
      input.ActionThresholdType !== null && { ActionThresholdType: input.ActionThresholdType }),
    ...(input.ActionThresholdValue !== undefined &&
      input.ActionThresholdValue !== null && { ActionThresholdValue: input.ActionThresholdValue }),
  };
};
const serializeAws_json1_1Budget = (input, context) => {
  return {
    ...(input.BudgetLimit !== undefined &&
      input.BudgetLimit !== null && { BudgetLimit: serializeAws_json1_1Spend(input.BudgetLimit, context) }),
    ...(input.BudgetName !== undefined && input.BudgetName !== null && { BudgetName: input.BudgetName }),
    ...(input.BudgetType !== undefined && input.BudgetType !== null && { BudgetType: input.BudgetType }),
    ...(input.CalculatedSpend !== undefined &&
      input.CalculatedSpend !== null && {
        CalculatedSpend: serializeAws_json1_1CalculatedSpend(input.CalculatedSpend, context),
      }),
    ...(input.CostFilters !== undefined &&
      input.CostFilters !== null && { CostFilters: serializeAws_json1_1CostFilters(input.CostFilters, context) }),
    ...(input.CostTypes !== undefined &&
      input.CostTypes !== null && { CostTypes: serializeAws_json1_1CostTypes(input.CostTypes, context) }),
    ...(input.LastUpdatedTime !== undefined &&
      input.LastUpdatedTime !== null && { LastUpdatedTime: Math.round(input.LastUpdatedTime.getTime() / 1000) }),
    ...(input.PlannedBudgetLimits !== undefined &&
      input.PlannedBudgetLimits !== null && {
        PlannedBudgetLimits: serializeAws_json1_1PlannedBudgetLimits(input.PlannedBudgetLimits, context),
      }),
    ...(input.TimePeriod !== undefined &&
      input.TimePeriod !== null && { TimePeriod: serializeAws_json1_1TimePeriod(input.TimePeriod, context) }),
    ...(input.TimeUnit !== undefined && input.TimeUnit !== null && { TimeUnit: input.TimeUnit }),
  };
};
const serializeAws_json1_1CalculatedSpend = (input, context) => {
  return {
    ...(input.ActualSpend !== undefined &&
      input.ActualSpend !== null && { ActualSpend: serializeAws_json1_1Spend(input.ActualSpend, context) }),
    ...(input.ForecastedSpend !== undefined &&
      input.ForecastedSpend !== null && { ForecastedSpend: serializeAws_json1_1Spend(input.ForecastedSpend, context) }),
  };
};
const serializeAws_json1_1CostFilters = (input, context) => {
  return Object.entries(input).reduce((acc, [key, value]) => {
    if (value === null) {
      return acc;
    }
    return {
      ...acc,
      [key]: serializeAws_json1_1DimensionValues(value, context),
    };
  }, {});
};
const serializeAws_json1_1CostTypes = (input, context) => {
  return {
    ...(input.IncludeCredit !== undefined && input.IncludeCredit !== null && { IncludeCredit: input.IncludeCredit }),
    ...(input.IncludeDiscount !== undefined &&
      input.IncludeDiscount !== null && { IncludeDiscount: input.IncludeDiscount }),
    ...(input.IncludeOtherSubscription !== undefined &&
      input.IncludeOtherSubscription !== null && { IncludeOtherSubscription: input.IncludeOtherSubscription }),
    ...(input.IncludeRecurring !== undefined &&
      input.IncludeRecurring !== null && { IncludeRecurring: input.IncludeRecurring }),
    ...(input.IncludeRefund !== undefined && input.IncludeRefund !== null && { IncludeRefund: input.IncludeRefund }),
    ...(input.IncludeSubscription !== undefined &&
      input.IncludeSubscription !== null && { IncludeSubscription: input.IncludeSubscription }),
    ...(input.IncludeSupport !== undefined &&
      input.IncludeSupport !== null && { IncludeSupport: input.IncludeSupport }),
    ...(input.IncludeTax !== undefined && input.IncludeTax !== null && { IncludeTax: input.IncludeTax }),
    ...(input.IncludeUpfront !== undefined &&
      input.IncludeUpfront !== null && { IncludeUpfront: input.IncludeUpfront }),
    ...(input.UseAmortized !== undefined && input.UseAmortized !== null && { UseAmortized: input.UseAmortized }),
    ...(input.UseBlended !== undefined && input.UseBlended !== null && { UseBlended: input.UseBlended }),
  };
};
const serializeAws_json1_1CreateBudgetActionRequest = (input, context) => {
  return {
    ...(input.AccountId !== undefined && input.AccountId !== null && { AccountId: input.AccountId }),
    ...(input.ActionThreshold !== undefined &&
      input.ActionThreshold !== null && {
        ActionThreshold: serializeAws_json1_1ActionThreshold(input.ActionThreshold, context),
      }),
    ...(input.ActionType !== undefined && input.ActionType !== null && { ActionType: input.ActionType }),
    ...(input.ApprovalModel !== undefined && input.ApprovalModel !== null && { ApprovalModel: input.ApprovalModel }),
    ...(input.BudgetName !== undefined && input.BudgetName !== null && { BudgetName: input.BudgetName }),
    ...(input.Definition !== undefined &&
      input.Definition !== null && { Definition: serializeAws_json1_1Definition(input.Definition, context) }),
    ...(input.ExecutionRoleArn !== undefined &&
      input.ExecutionRoleArn !== null && { ExecutionRoleArn: input.ExecutionRoleArn }),
    ...(input.NotificationType !== undefined &&
      input.NotificationType !== null && { NotificationType: input.NotificationType }),
    ...(input.Subscribers !== undefined &&
      input.Subscribers !== null && { Subscribers: serializeAws_json1_1Subscribers(input.Subscribers, context) }),
  };
};
const serializeAws_json1_1CreateBudgetRequest = (input, context) => {
  return {
    ...(input.AccountId !== undefined && input.AccountId !== null && { AccountId: input.AccountId }),
    ...(input.Budget !== undefined &&
      input.Budget !== null && { Budget: serializeAws_json1_1Budget(input.Budget, context) }),
    ...(input.NotificationsWithSubscribers !== undefined &&
      input.NotificationsWithSubscribers !== null && {
        NotificationsWithSubscribers: serializeAws_json1_1NotificationWithSubscribersList(
          input.NotificationsWithSubscribers,
          context
        ),
      }),
  };
};
const serializeAws_json1_1CreateNotificationRequest = (input, context) => {
  return {
    ...(input.AccountId !== undefined && input.AccountId !== null && { AccountId: input.AccountId }),
    ...(input.BudgetName !== undefined && input.BudgetName !== null && { BudgetName: input.BudgetName }),
    ...(input.Notification !== undefined &&
      input.Notification !== null && { Notification: serializeAws_json1_1Notification(input.Notification, context) }),
    ...(input.Subscribers !== undefined &&
      input.Subscribers !== null && { Subscribers: serializeAws_json1_1Subscribers(input.Subscribers, context) }),
  };
};
const serializeAws_json1_1CreateSubscriberRequest = (input, context) => {
  return {
    ...(input.AccountId !== undefined && input.AccountId !== null && { AccountId: input.AccountId }),
    ...(input.BudgetName !== undefined && input.BudgetName !== null && { BudgetName: input.BudgetName }),
    ...(input.Notification !== undefined &&
      input.Notification !== null && { Notification: serializeAws_json1_1Notification(input.Notification, context) }),
    ...(input.Subscriber !== undefined &&
      input.Subscriber !== null && { Subscriber: serializeAws_json1_1Subscriber(input.Subscriber, context) }),
  };
};
const serializeAws_json1_1Definition = (input, context) => {
  return {
    ...(input.IamActionDefinition !== undefined &&
      input.IamActionDefinition !== null && {
        IamActionDefinition: serializeAws_json1_1IamActionDefinition(input.IamActionDefinition, context),
      }),
    ...(input.ScpActionDefinition !== undefined &&
      input.ScpActionDefinition !== null && {
        ScpActionDefinition: serializeAws_json1_1ScpActionDefinition(input.ScpActionDefinition, context),
      }),
    ...(input.SsmActionDefinition !== undefined &&
      input.SsmActionDefinition !== null && {
        SsmActionDefinition: serializeAws_json1_1SsmActionDefinition(input.SsmActionDefinition, context),
      }),
  };
};
const serializeAws_json1_1DeleteBudgetActionRequest = (input, context) => {
  return {
    ...(input.AccountId !== undefined && input.AccountId !== null && { AccountId: input.AccountId }),
    ...(input.ActionId !== undefined && input.ActionId !== null && { ActionId: input.ActionId }),
    ...(input.BudgetName !== undefined && input.BudgetName !== null && { BudgetName: input.BudgetName }),
  };
};
const serializeAws_json1_1DeleteBudgetRequest = (input, context) => {
  return {
    ...(input.AccountId !== undefined && input.AccountId !== null && { AccountId: input.AccountId }),
    ...(input.BudgetName !== undefined && input.BudgetName !== null && { BudgetName: input.BudgetName }),
  };
};
const serializeAws_json1_1DeleteNotificationRequest = (input, context) => {
  return {
    ...(input.AccountId !== undefined && input.AccountId !== null && { AccountId: input.AccountId }),
    ...(input.BudgetName !== undefined && input.BudgetName !== null && { BudgetName: input.BudgetName }),
    ...(input.Notification !== undefined &&
      input.Notification !== null && { Notification: serializeAws_json1_1Notification(input.Notification, context) }),
  };
};
const serializeAws_json1_1DeleteSubscriberRequest = (input, context) => {
  return {
    ...(input.AccountId !== undefined && input.AccountId !== null && { AccountId: input.AccountId }),
    ...(input.BudgetName !== undefined && input.BudgetName !== null && { BudgetName: input.BudgetName }),
    ...(input.Notification !== undefined &&
      input.Notification !== null && { Notification: serializeAws_json1_1Notification(input.Notification, context) }),
    ...(input.Subscriber !== undefined &&
      input.Subscriber !== null && { Subscriber: serializeAws_json1_1Subscriber(input.Subscriber, context) }),
  };
};
const serializeAws_json1_1DescribeBudgetActionHistoriesRequest = (input, context) => {
  return {
    ...(input.AccountId !== undefined && input.AccountId !== null && { AccountId: input.AccountId }),
    ...(input.ActionId !== undefined && input.ActionId !== null && { ActionId: input.ActionId }),
    ...(input.BudgetName !== undefined && input.BudgetName !== null && { BudgetName: input.BudgetName }),
    ...(input.MaxResults !== undefined && input.MaxResults !== null && { MaxResults: input.MaxResults }),
    ...(input.NextToken !== undefined && input.NextToken !== null && { NextToken: input.NextToken }),
    ...(input.TimePeriod !== undefined &&
      input.TimePeriod !== null && { TimePeriod: serializeAws_json1_1TimePeriod(input.TimePeriod, context) }),
  };
};
const serializeAws_json1_1DescribeBudgetActionRequest = (input, context) => {
  return {
    ...(input.AccountId !== undefined && input.AccountId !== null && { AccountId: input.AccountId }),
    ...(input.ActionId !== undefined && input.ActionId !== null && { ActionId: input.ActionId }),
    ...(input.BudgetName !== undefined && input.BudgetName !== null && { BudgetName: input.BudgetName }),
  };
};
const serializeAws_json1_1DescribeBudgetActionsForAccountRequest = (input, context) => {
  return {
    ...(input.AccountId !== undefined && input.AccountId !== null && { AccountId: input.AccountId }),
    ...(input.MaxResults !== undefined && input.MaxResults !== null && { MaxResults: input.MaxResults }),
    ...(input.NextToken !== undefined && input.NextToken !== null && { NextToken: input.NextToken }),
  };
};
const serializeAws_json1_1DescribeBudgetActionsForBudgetRequest = (input, context) => {
  return {
    ...(input.AccountId !== undefined && input.AccountId !== null && { AccountId: input.AccountId }),
    ...(input.BudgetName !== undefined && input.BudgetName !== null && { BudgetName: input.BudgetName }),
    ...(input.MaxResults !== undefined && input.MaxResults !== null && { MaxResults: input.MaxResults }),
    ...(input.NextToken !== undefined && input.NextToken !== null && { NextToken: input.NextToken }),
  };
};
const serializeAws_json1_1DescribeBudgetPerformanceHistoryRequest = (input, context) => {
  return {
    ...(input.AccountId !== undefined && input.AccountId !== null && { AccountId: input.AccountId }),
    ...(input.BudgetName !== undefined && input.BudgetName !== null && { BudgetName: input.BudgetName }),
    ...(input.MaxResults !== undefined && input.MaxResults !== null && { MaxResults: input.MaxResults }),
    ...(input.NextToken !== undefined && input.NextToken !== null && { NextToken: input.NextToken }),
    ...(input.TimePeriod !== undefined &&
      input.TimePeriod !== null && { TimePeriod: serializeAws_json1_1TimePeriod(input.TimePeriod, context) }),
  };
};
const serializeAws_json1_1DescribeBudgetRequest = (input, context) => {
  return {
    ...(input.AccountId !== undefined && input.AccountId !== null && { AccountId: input.AccountId }),
    ...(input.BudgetName !== undefined && input.BudgetName !== null && { BudgetName: input.BudgetName }),
  };
};
const serializeAws_json1_1DescribeBudgetsRequest = (input, context) => {
  return {
    ...(input.AccountId !== undefined && input.AccountId !== null && { AccountId: input.AccountId }),
    ...(input.MaxResults !== undefined && input.MaxResults !== null && { MaxResults: input.MaxResults }),
    ...(input.NextToken !== undefined && input.NextToken !== null && { NextToken: input.NextToken }),
  };
};
const serializeAws_json1_1DescribeNotificationsForBudgetRequest = (input, context) => {
  return {
    ...(input.AccountId !== undefined && input.AccountId !== null && { AccountId: input.AccountId }),
    ...(input.BudgetName !== undefined && input.BudgetName !== null && { BudgetName: input.BudgetName }),
    ...(input.MaxResults !== undefined && input.MaxResults !== null && { MaxResults: input.MaxResults }),
    ...(input.NextToken !== undefined && input.NextToken !== null && { NextToken: input.NextToken }),
  };
};
const serializeAws_json1_1DescribeSubscribersForNotificationRequest = (input, context) => {
  return {
    ...(input.AccountId !== undefined && input.AccountId !== null && { AccountId: input.AccountId }),
    ...(input.BudgetName !== undefined && input.BudgetName !== null && { BudgetName: input.BudgetName }),
    ...(input.MaxResults !== undefined && input.MaxResults !== null && { MaxResults: input.MaxResults }),
    ...(input.NextToken !== undefined && input.NextToken !== null && { NextToken: input.NextToken }),
    ...(input.Notification !== undefined &&
      input.Notification !== null && { Notification: serializeAws_json1_1Notification(input.Notification, context) }),
  };
};
const serializeAws_json1_1DimensionValues = (input, context) => {
  return input
    .filter((e) => e != null)
    .map((entry) => {
      if (entry === null) {
        return null;
      }
      return entry;
    });
};
const serializeAws_json1_1ExecuteBudgetActionRequest = (input, context) => {
  return {
    ...(input.AccountId !== undefined && input.AccountId !== null && { AccountId: input.AccountId }),
    ...(input.ActionId !== undefined && input.ActionId !== null && { ActionId: input.ActionId }),
    ...(input.BudgetName !== undefined && input.BudgetName !== null && { BudgetName: input.BudgetName }),
    ...(input.ExecutionType !== undefined && input.ExecutionType !== null && { ExecutionType: input.ExecutionType }),
  };
};
const serializeAws_json1_1Groups = (input, context) => {
  return input
    .filter((e) => e != null)
    .map((entry) => {
      if (entry === null) {
        return null;
      }
      return entry;
    });
};
const serializeAws_json1_1IamActionDefinition = (input, context) => {
  return {
    ...(input.Groups !== undefined &&
      input.Groups !== null && { Groups: serializeAws_json1_1Groups(input.Groups, context) }),
    ...(input.PolicyArn !== undefined && input.PolicyArn !== null && { PolicyArn: input.PolicyArn }),
    ...(input.Roles !== undefined &&
      input.Roles !== null && { Roles: serializeAws_json1_1Roles(input.Roles, context) }),
    ...(input.Users !== undefined &&
      input.Users !== null && { Users: serializeAws_json1_1Users(input.Users, context) }),
  };
};
const serializeAws_json1_1InstanceIds = (input, context) => {
  return input
    .filter((e) => e != null)
    .map((entry) => {
      if (entry === null) {
        return null;
      }
      return entry;
    });
};
const serializeAws_json1_1Notification = (input, context) => {
  return {
    ...(input.ComparisonOperator !== undefined &&
      input.ComparisonOperator !== null && { ComparisonOperator: input.ComparisonOperator }),
    ...(input.NotificationState !== undefined &&
      input.NotificationState !== null && { NotificationState: input.NotificationState }),
    ...(input.NotificationType !== undefined &&
      input.NotificationType !== null && { NotificationType: input.NotificationType }),
    ...(input.Threshold !== undefined && input.Threshold !== null && { Threshold: input.Threshold }),
    ...(input.ThresholdType !== undefined && input.ThresholdType !== null && { ThresholdType: input.ThresholdType }),
  };
};
const serializeAws_json1_1NotificationWithSubscribers = (input, context) => {
  return {
    ...(input.Notification !== undefined &&
      input.Notification !== null && { Notification: serializeAws_json1_1Notification(input.Notification, context) }),
    ...(input.Subscribers !== undefined &&
      input.Subscribers !== null && { Subscribers: serializeAws_json1_1Subscribers(input.Subscribers, context) }),
  };
};
const serializeAws_json1_1NotificationWithSubscribersList = (input, context) => {
  return input
    .filter((e) => e != null)
    .map((entry) => {
      if (entry === null) {
        return null;
      }
      return serializeAws_json1_1NotificationWithSubscribers(entry, context);
    });
};
const serializeAws_json1_1PlannedBudgetLimits = (input, context) => {
  return Object.entries(input).reduce((acc, [key, value]) => {
    if (value === null) {
      return acc;
    }
    return {
      ...acc,
      [key]: serializeAws_json1_1Spend(value, context),
    };
  }, {});
};
const serializeAws_json1_1Roles = (input, context) => {
  return input
    .filter((e) => e != null)
    .map((entry) => {
      if (entry === null) {
        return null;
      }
      return entry;
    });
};
const serializeAws_json1_1ScpActionDefinition = (input, context) => {
  return {
    ...(input.PolicyId !== undefined && input.PolicyId !== null && { PolicyId: input.PolicyId }),
    ...(input.TargetIds !== undefined &&
      input.TargetIds !== null && { TargetIds: serializeAws_json1_1TargetIds(input.TargetIds, context) }),
  };
};
const serializeAws_json1_1Spend = (input, context) => {
  return {
    ...(input.Amount !== undefined && input.Amount !== null && { Amount: input.Amount }),
    ...(input.Unit !== undefined && input.Unit !== null && { Unit: input.Unit }),
  };
};
const serializeAws_json1_1SsmActionDefinition = (input, context) => {
  return {
    ...(input.ActionSubType !== undefined && input.ActionSubType !== null && { ActionSubType: input.ActionSubType }),
    ...(input.InstanceIds !== undefined &&
      input.InstanceIds !== null && { InstanceIds: serializeAws_json1_1InstanceIds(input.InstanceIds, context) }),
    ...(input.Region !== undefined && input.Region !== null && { Region: input.Region }),
  };
};
const serializeAws_json1_1Subscriber = (input, context) => {
  return {
    ...(input.Address !== undefined && input.Address !== null && { Address: input.Address }),
    ...(input.SubscriptionType !== undefined &&
      input.SubscriptionType !== null && { SubscriptionType: input.SubscriptionType }),
  };
};
const serializeAws_json1_1Subscribers = (input, context) => {
  return input
    .filter((e) => e != null)
    .map((entry) => {
      if (entry === null) {
        return null;
      }
      return serializeAws_json1_1Subscriber(entry, context);
    });
};
const serializeAws_json1_1TargetIds = (input, context) => {
  return input
    .filter((e) => e != null)
    .map((entry) => {
      if (entry === null) {
        return null;
      }
      return entry;
    });
};
const serializeAws_json1_1TimePeriod = (input, context) => {
  return {
    ...(input.End !== undefined && input.End !== null && { End: Math.round(input.End.getTime() / 1000) }),
    ...(input.Start !== undefined && input.Start !== null && { Start: Math.round(input.Start.getTime() / 1000) }),
  };
};
const serializeAws_json1_1UpdateBudgetActionRequest = (input, context) => {
  return {
    ...(input.AccountId !== undefined && input.AccountId !== null && { AccountId: input.AccountId }),
    ...(input.ActionId !== undefined && input.ActionId !== null && { ActionId: input.ActionId }),
    ...(input.ActionThreshold !== undefined &&
      input.ActionThreshold !== null && {
        ActionThreshold: serializeAws_json1_1ActionThreshold(input.ActionThreshold, context),
      }),
    ...(input.ApprovalModel !== undefined && input.ApprovalModel !== null && { ApprovalModel: input.ApprovalModel }),
    ...(input.BudgetName !== undefined && input.BudgetName !== null && { BudgetName: input.BudgetName }),
    ...(input.Definition !== undefined &&
      input.Definition !== null && { Definition: serializeAws_json1_1Definition(input.Definition, context) }),
    ...(input.ExecutionRoleArn !== undefined &&
      input.ExecutionRoleArn !== null && { ExecutionRoleArn: input.ExecutionRoleArn }),
    ...(input.NotificationType !== undefined &&
      input.NotificationType !== null && { NotificationType: input.NotificationType }),
    ...(input.Subscribers !== undefined &&
      input.Subscribers !== null && { Subscribers: serializeAws_json1_1Subscribers(input.Subscribers, context) }),
  };
};
const serializeAws_json1_1UpdateBudgetRequest = (input, context) => {
  return {
    ...(input.AccountId !== undefined && input.AccountId !== null && { AccountId: input.AccountId }),
    ...(input.NewBudget !== undefined &&
      input.NewBudget !== null && { NewBudget: serializeAws_json1_1Budget(input.NewBudget, context) }),
  };
};
const serializeAws_json1_1UpdateNotificationRequest = (input, context) => {
  return {
    ...(input.AccountId !== undefined && input.AccountId !== null && { AccountId: input.AccountId }),
    ...(input.BudgetName !== undefined && input.BudgetName !== null && { BudgetName: input.BudgetName }),
    ...(input.NewNotification !== undefined &&
      input.NewNotification !== null && {
        NewNotification: serializeAws_json1_1Notification(input.NewNotification, context),
      }),
    ...(input.OldNotification !== undefined &&
      input.OldNotification !== null && {
        OldNotification: serializeAws_json1_1Notification(input.OldNotification, context),
      }),
  };
};
const serializeAws_json1_1UpdateSubscriberRequest = (input, context) => {
  return {
    ...(input.AccountId !== undefined && input.AccountId !== null && { AccountId: input.AccountId }),
    ...(input.BudgetName !== undefined && input.BudgetName !== null && { BudgetName: input.BudgetName }),
    ...(input.NewSubscriber !== undefined &&
      input.NewSubscriber !== null && { NewSubscriber: serializeAws_json1_1Subscriber(input.NewSubscriber, context) }),
    ...(input.Notification !== undefined &&
      input.Notification !== null && { Notification: serializeAws_json1_1Notification(input.Notification, context) }),
    ...(input.OldSubscriber !== undefined &&
      input.OldSubscriber !== null && { OldSubscriber: serializeAws_json1_1Subscriber(input.OldSubscriber, context) }),
  };
};
const serializeAws_json1_1Users = (input, context) => {
  return input
    .filter((e) => e != null)
    .map((entry) => {
      if (entry === null) {
        return null;
      }
      return entry;
    });
};
const deserializeAws_json1_1AccessDeniedException = (output, context) => {
  return {
    Message: output.Message !== undefined && output.Message !== null ? output.Message : undefined,
  };
};
const deserializeAws_json1_1Action = (output, context) => {
  return {
    ActionId: output.ActionId !== undefined && output.ActionId !== null ? output.ActionId : undefined,
    ActionThreshold:
      output.ActionThreshold !== undefined && output.ActionThreshold !== null
        ? deserializeAws_json1_1ActionThreshold(output.ActionThreshold, context)
        : undefined,
    ActionType: output.ActionType !== undefined && output.ActionType !== null ? output.ActionType : undefined,
    ApprovalModel:
      output.ApprovalModel !== undefined && output.ApprovalModel !== null ? output.ApprovalModel : undefined,
    BudgetName: output.BudgetName !== undefined && output.BudgetName !== null ? output.BudgetName : undefined,
    Definition:
      output.Definition !== undefined && output.Definition !== null
        ? deserializeAws_json1_1Definition(output.Definition, context)
        : undefined,
    ExecutionRoleArn:
      output.ExecutionRoleArn !== undefined && output.ExecutionRoleArn !== null ? output.ExecutionRoleArn : undefined,
    NotificationType:
      output.NotificationType !== undefined && output.NotificationType !== null ? output.NotificationType : undefined,
    Status: output.Status !== undefined && output.Status !== null ? output.Status : undefined,
    Subscribers:
      output.Subscribers !== undefined && output.Subscribers !== null
        ? deserializeAws_json1_1Subscribers(output.Subscribers, context)
        : undefined,
  };
};
const deserializeAws_json1_1ActionHistories = (output, context) => {
  return (output || [])
    .filter((e) => e != null)
    .map((entry) => {
      if (entry === null) {
        return null;
      }
      return deserializeAws_json1_1ActionHistory(entry, context);
    });
};
const deserializeAws_json1_1ActionHistory = (output, context) => {
  return {
    ActionHistoryDetails:
      output.ActionHistoryDetails !== undefined && output.ActionHistoryDetails !== null
        ? deserializeAws_json1_1ActionHistoryDetails(output.ActionHistoryDetails, context)
        : undefined,
    EventType: output.EventType !== undefined && output.EventType !== null ? output.EventType : undefined,
    Status: output.Status !== undefined && output.Status !== null ? output.Status : undefined,
    Timestamp:
      output.Timestamp !== undefined && output.Timestamp !== null
        ? new Date(Math.round(output.Timestamp * 1000))
        : undefined,
  };
};
const deserializeAws_json1_1ActionHistoryDetails = (output, context) => {
  return {
    Action:
      output.Action !== undefined && output.Action !== null
        ? deserializeAws_json1_1Action(output.Action, context)
        : undefined,
    Message: output.Message !== undefined && output.Message !== null ? output.Message : undefined,
  };
};
const deserializeAws_json1_1Actions = (output, context) => {
  return (output || [])
    .filter((e) => e != null)
    .map((entry) => {
      if (entry === null) {
        return null;
      }
      return deserializeAws_json1_1Action(entry, context);
    });
};
const deserializeAws_json1_1ActionThreshold = (output, context) => {
  return {
    ActionThresholdType:
      output.ActionThresholdType !== undefined && output.ActionThresholdType !== null
        ? output.ActionThresholdType
        : undefined,
    ActionThresholdValue:
      output.ActionThresholdValue !== undefined && output.ActionThresholdValue !== null
        ? output.ActionThresholdValue
        : undefined,
  };
};
const deserializeAws_json1_1Budget = (output, context) => {
  return {
    BudgetLimit:
      output.BudgetLimit !== undefined && output.BudgetLimit !== null
        ? deserializeAws_json1_1Spend(output.BudgetLimit, context)
        : undefined,
    BudgetName: output.BudgetName !== undefined && output.BudgetName !== null ? output.BudgetName : undefined,
    BudgetType: output.BudgetType !== undefined && output.BudgetType !== null ? output.BudgetType : undefined,
    CalculatedSpend:
      output.CalculatedSpend !== undefined && output.CalculatedSpend !== null
        ? deserializeAws_json1_1CalculatedSpend(output.CalculatedSpend, context)
        : undefined,
    CostFilters:
      output.CostFilters !== undefined && output.CostFilters !== null
        ? deserializeAws_json1_1CostFilters(output.CostFilters, context)
        : undefined,
    CostTypes:
      output.CostTypes !== undefined && output.CostTypes !== null
        ? deserializeAws_json1_1CostTypes(output.CostTypes, context)
        : undefined,
    LastUpdatedTime:
      output.LastUpdatedTime !== undefined && output.LastUpdatedTime !== null
        ? new Date(Math.round(output.LastUpdatedTime * 1000))
        : undefined,
    PlannedBudgetLimits:
      output.PlannedBudgetLimits !== undefined && output.PlannedBudgetLimits !== null
        ? deserializeAws_json1_1PlannedBudgetLimits(output.PlannedBudgetLimits, context)
        : undefined,
    TimePeriod:
      output.TimePeriod !== undefined && output.TimePeriod !== null
        ? deserializeAws_json1_1TimePeriod(output.TimePeriod, context)
        : undefined,
    TimeUnit: output.TimeUnit !== undefined && output.TimeUnit !== null ? output.TimeUnit : undefined,
  };
};
const deserializeAws_json1_1BudgetedAndActualAmounts = (output, context) => {
  return {
    ActualAmount:
      output.ActualAmount !== undefined && output.ActualAmount !== null
        ? deserializeAws_json1_1Spend(output.ActualAmount, context)
        : undefined,
    BudgetedAmount:
      output.BudgetedAmount !== undefined && output.BudgetedAmount !== null
        ? deserializeAws_json1_1Spend(output.BudgetedAmount, context)
        : undefined,
    TimePeriod:
      output.TimePeriod !== undefined && output.TimePeriod !== null
        ? deserializeAws_json1_1TimePeriod(output.TimePeriod, context)
        : undefined,
  };
};
const deserializeAws_json1_1BudgetedAndActualAmountsList = (output, context) => {
  return (output || [])
    .filter((e) => e != null)
    .map((entry) => {
      if (entry === null) {
        return null;
      }
      return deserializeAws_json1_1BudgetedAndActualAmounts(entry, context);
    });
};
const deserializeAws_json1_1BudgetPerformanceHistory = (output, context) => {
  return {
    BudgetName: output.BudgetName !== undefined && output.BudgetName !== null ? output.BudgetName : undefined,
    BudgetType: output.BudgetType !== undefined && output.BudgetType !== null ? output.BudgetType : undefined,
    BudgetedAndActualAmountsList:
      output.BudgetedAndActualAmountsList !== undefined && output.BudgetedAndActualAmountsList !== null
        ? deserializeAws_json1_1BudgetedAndActualAmountsList(output.BudgetedAndActualAmountsList, context)
        : undefined,
    CostFilters:
      output.CostFilters !== undefined && output.CostFilters !== null
        ? deserializeAws_json1_1CostFilters(output.CostFilters, context)
        : undefined,
    CostTypes:
      output.CostTypes !== undefined && output.CostTypes !== null
        ? deserializeAws_json1_1CostTypes(output.CostTypes, context)
        : undefined,
    TimeUnit: output.TimeUnit !== undefined && output.TimeUnit !== null ? output.TimeUnit : undefined,
  };
};
const deserializeAws_json1_1Budgets = (output, context) => {
  return (output || [])
    .filter((e) => e != null)
    .map((entry) => {
      if (entry === null) {
        return null;
      }
      return deserializeAws_json1_1Budget(entry, context);
    });
};
const deserializeAws_json1_1CalculatedSpend = (output, context) => {
  return {
    ActualSpend:
      output.ActualSpend !== undefined && output.ActualSpend !== null
        ? deserializeAws_json1_1Spend(output.ActualSpend, context)
        : undefined,
    ForecastedSpend:
      output.ForecastedSpend !== undefined && output.ForecastedSpend !== null
        ? deserializeAws_json1_1Spend(output.ForecastedSpend, context)
        : undefined,
  };
};
const deserializeAws_json1_1CostFilters = (output, context) => {
  return Object.entries(output).reduce((acc, [key, value]) => {
    if (value === null) {
      return acc;
    }
    return {
      ...acc,
      [key]: deserializeAws_json1_1DimensionValues(value, context),
    };
  }, {});
};
const deserializeAws_json1_1CostTypes = (output, context) => {
  return {
    IncludeCredit:
      output.IncludeCredit !== undefined && output.IncludeCredit !== null ? output.IncludeCredit : undefined,
    IncludeDiscount:
      output.IncludeDiscount !== undefined && output.IncludeDiscount !== null ? output.IncludeDiscount : undefined,
    IncludeOtherSubscription:
      output.IncludeOtherSubscription !== undefined && output.IncludeOtherSubscription !== null
        ? output.IncludeOtherSubscription
        : undefined,
    IncludeRecurring:
      output.IncludeRecurring !== undefined && output.IncludeRecurring !== null ? output.IncludeRecurring : undefined,
    IncludeRefund:
      output.IncludeRefund !== undefined && output.IncludeRefund !== null ? output.IncludeRefund : undefined,
    IncludeSubscription:
      output.IncludeSubscription !== undefined && output.IncludeSubscription !== null
        ? output.IncludeSubscription
        : undefined,
    IncludeSupport:
      output.IncludeSupport !== undefined && output.IncludeSupport !== null ? output.IncludeSupport : undefined,
    IncludeTax: output.IncludeTax !== undefined && output.IncludeTax !== null ? output.IncludeTax : undefined,
    IncludeUpfront:
      output.IncludeUpfront !== undefined && output.IncludeUpfront !== null ? output.IncludeUpfront : undefined,
    UseAmortized: output.UseAmortized !== undefined && output.UseAmortized !== null ? output.UseAmortized : undefined,
    UseBlended: output.UseBlended !== undefined && output.UseBlended !== null ? output.UseBlended : undefined,
  };
};
const deserializeAws_json1_1CreateBudgetActionResponse = (output, context) => {
  return {
    AccountId: output.AccountId !== undefined && output.AccountId !== null ? output.AccountId : undefined,
    ActionId: output.ActionId !== undefined && output.ActionId !== null ? output.ActionId : undefined,
    BudgetName: output.BudgetName !== undefined && output.BudgetName !== null ? output.BudgetName : undefined,
  };
};
const deserializeAws_json1_1CreateBudgetResponse = (output, context) => {
  return {};
};
const deserializeAws_json1_1CreateNotificationResponse = (output, context) => {
  return {};
};
const deserializeAws_json1_1CreateSubscriberResponse = (output, context) => {
  return {};
};
const deserializeAws_json1_1CreationLimitExceededException = (output, context) => {
  return {
    Message: output.Message !== undefined && output.Message !== null ? output.Message : undefined,
  };
};
const deserializeAws_json1_1Definition = (output, context) => {
  return {
    IamActionDefinition:
      output.IamActionDefinition !== undefined && output.IamActionDefinition !== null
        ? deserializeAws_json1_1IamActionDefinition(output.IamActionDefinition, context)
        : undefined,
    ScpActionDefinition:
      output.ScpActionDefinition !== undefined && output.ScpActionDefinition !== null
        ? deserializeAws_json1_1ScpActionDefinition(output.ScpActionDefinition, context)
        : undefined,
    SsmActionDefinition:
      output.SsmActionDefinition !== undefined && output.SsmActionDefinition !== null
        ? deserializeAws_json1_1SsmActionDefinition(output.SsmActionDefinition, context)
        : undefined,
  };
};
const deserializeAws_json1_1DeleteBudgetActionResponse = (output, context) => {
  return {
    AccountId: output.AccountId !== undefined && output.AccountId !== null ? output.AccountId : undefined,
    Action:
      output.Action !== undefined && output.Action !== null
        ? deserializeAws_json1_1Action(output.Action, context)
        : undefined,
    BudgetName: output.BudgetName !== undefined && output.BudgetName !== null ? output.BudgetName : undefined,
  };
};
const deserializeAws_json1_1DeleteBudgetResponse = (output, context) => {
  return {};
};
const deserializeAws_json1_1DeleteNotificationResponse = (output, context) => {
  return {};
};
const deserializeAws_json1_1DeleteSubscriberResponse = (output, context) => {
  return {};
};
const deserializeAws_json1_1DescribeBudgetActionHistoriesResponse = (output, context) => {
  return {
    ActionHistories:
      output.ActionHistories !== undefined && output.ActionHistories !== null
        ? deserializeAws_json1_1ActionHistories(output.ActionHistories, context)
        : undefined,
    NextToken: output.NextToken !== undefined && output.NextToken !== null ? output.NextToken : undefined,
  };
};
const deserializeAws_json1_1DescribeBudgetActionResponse = (output, context) => {
  return {
    AccountId: output.AccountId !== undefined && output.AccountId !== null ? output.AccountId : undefined,
    Action:
      output.Action !== undefined && output.Action !== null
        ? deserializeAws_json1_1Action(output.Action, context)
        : undefined,
    BudgetName: output.BudgetName !== undefined && output.BudgetName !== null ? output.BudgetName : undefined,
  };
};
const deserializeAws_json1_1DescribeBudgetActionsForAccountResponse = (output, context) => {
  return {
    Actions:
      output.Actions !== undefined && output.Actions !== null
        ? deserializeAws_json1_1Actions(output.Actions, context)
        : undefined,
    NextToken: output.NextToken !== undefined && output.NextToken !== null ? output.NextToken : undefined,
  };
};
const deserializeAws_json1_1DescribeBudgetActionsForBudgetResponse = (output, context) => {
  return {
    Actions:
      output.Actions !== undefined && output.Actions !== null
        ? deserializeAws_json1_1Actions(output.Actions, context)
        : undefined,
    NextToken: output.NextToken !== undefined && output.NextToken !== null ? output.NextToken : undefined,
  };
};
const deserializeAws_json1_1DescribeBudgetPerformanceHistoryResponse = (output, context) => {
  return {
    BudgetPerformanceHistory:
      output.BudgetPerformanceHistory !== undefined && output.BudgetPerformanceHistory !== null
        ? deserializeAws_json1_1BudgetPerformanceHistory(output.BudgetPerformanceHistory, context)
        : undefined,
    NextToken: output.NextToken !== undefined && output.NextToken !== null ? output.NextToken : undefined,
  };
};
const deserializeAws_json1_1DescribeBudgetResponse = (output, context) => {
  return {
    Budget:
      output.Budget !== undefined && output.Budget !== null
        ? deserializeAws_json1_1Budget(output.Budget, context)
        : undefined,
  };
};
const deserializeAws_json1_1DescribeBudgetsResponse = (output, context) => {
  return {
    Budgets:
      output.Budgets !== undefined && output.Budgets !== null
        ? deserializeAws_json1_1Budgets(output.Budgets, context)
        : undefined,
    NextToken: output.NextToken !== undefined && output.NextToken !== null ? output.NextToken : undefined,
  };
};
const deserializeAws_json1_1DescribeNotificationsForBudgetResponse = (output, context) => {
  return {
    NextToken: output.NextToken !== undefined && output.NextToken !== null ? output.NextToken : undefined,
    Notifications:
      output.Notifications !== undefined && output.Notifications !== null
        ? deserializeAws_json1_1Notifications(output.Notifications, context)
        : undefined,
  };
};
const deserializeAws_json1_1DescribeSubscribersForNotificationResponse = (output, context) => {
  return {
    NextToken: output.NextToken !== undefined && output.NextToken !== null ? output.NextToken : undefined,
    Subscribers:
      output.Subscribers !== undefined && output.Subscribers !== null
        ? deserializeAws_json1_1Subscribers(output.Subscribers, context)
        : undefined,
  };
};
const deserializeAws_json1_1DimensionValues = (output, context) => {
  return (output || [])
    .filter((e) => e != null)
    .map((entry) => {
      if (entry === null) {
        return null;
      }
      return entry;
    });
};
const deserializeAws_json1_1DuplicateRecordException = (output, context) => {
  return {
    Message: output.Message !== undefined && output.Message !== null ? output.Message : undefined,
  };
};
const deserializeAws_json1_1ExecuteBudgetActionResponse = (output, context) => {
  return {
    AccountId: output.AccountId !== undefined && output.AccountId !== null ? output.AccountId : undefined,
    ActionId: output.ActionId !== undefined && output.ActionId !== null ? output.ActionId : undefined,
    BudgetName: output.BudgetName !== undefined && output.BudgetName !== null ? output.BudgetName : undefined,
    ExecutionType:
      output.ExecutionType !== undefined && output.ExecutionType !== null ? output.ExecutionType : undefined,
  };
};
const deserializeAws_json1_1ExpiredNextTokenException = (output, context) => {
  return {
    Message: output.Message !== undefined && output.Message !== null ? output.Message : undefined,
  };
};
const deserializeAws_json1_1Groups = (output, context) => {
  return (output || [])
    .filter((e) => e != null)
    .map((entry) => {
      if (entry === null) {
        return null;
      }
      return entry;
    });
};
const deserializeAws_json1_1IamActionDefinition = (output, context) => {
  return {
    Groups:
      output.Groups !== undefined && output.Groups !== null
        ? deserializeAws_json1_1Groups(output.Groups, context)
        : undefined,
    PolicyArn: output.PolicyArn !== undefined && output.PolicyArn !== null ? output.PolicyArn : undefined,
    Roles:
      output.Roles !== undefined && output.Roles !== null
        ? deserializeAws_json1_1Roles(output.Roles, context)
        : undefined,
    Users:
      output.Users !== undefined && output.Users !== null
        ? deserializeAws_json1_1Users(output.Users, context)
        : undefined,
  };
};
const deserializeAws_json1_1InstanceIds = (output, context) => {
  return (output || [])
    .filter((e) => e != null)
    .map((entry) => {
      if (entry === null) {
        return null;
      }
      return entry;
    });
};
const deserializeAws_json1_1InternalErrorException = (output, context) => {
  return {
    Message: output.Message !== undefined && output.Message !== null ? output.Message : undefined,
  };
};
const deserializeAws_json1_1InvalidNextTokenException = (output, context) => {
  return {
    Message: output.Message !== undefined && output.Message !== null ? output.Message : undefined,
  };
};
const deserializeAws_json1_1InvalidParameterException = (output, context) => {
  return {
    Message: output.Message !== undefined && output.Message !== null ? output.Message : undefined,
  };
};
const deserializeAws_json1_1NotFoundException = (output, context) => {
  return {
    Message: output.Message !== undefined && output.Message !== null ? output.Message : undefined,
  };
};
const deserializeAws_json1_1Notification = (output, context) => {
  return {
    ComparisonOperator:
      output.ComparisonOperator !== undefined && output.ComparisonOperator !== null
        ? output.ComparisonOperator
        : undefined,
    NotificationState:
      output.NotificationState !== undefined && output.NotificationState !== null
        ? output.NotificationState
        : undefined,
    NotificationType:
      output.NotificationType !== undefined && output.NotificationType !== null ? output.NotificationType : undefined,
    Threshold: output.Threshold !== undefined && output.Threshold !== null ? output.Threshold : undefined,
    ThresholdType:
      output.ThresholdType !== undefined && output.ThresholdType !== null ? output.ThresholdType : undefined,
  };
};
const deserializeAws_json1_1Notifications = (output, context) => {
  return (output || [])
    .filter((e) => e != null)
    .map((entry) => {
      if (entry === null) {
        return null;
      }
      return deserializeAws_json1_1Notification(entry, context);
    });
};
const deserializeAws_json1_1PlannedBudgetLimits = (output, context) => {
  return Object.entries(output).reduce((acc, [key, value]) => {
    if (value === null) {
      return acc;
    }
    return {
      ...acc,
      [key]: deserializeAws_json1_1Spend(value, context),
    };
  }, {});
};
const deserializeAws_json1_1ResourceLockedException = (output, context) => {
  return {
    Message: output.Message !== undefined && output.Message !== null ? output.Message : undefined,
  };
};
const deserializeAws_json1_1Roles = (output, context) => {
  return (output || [])
    .filter((e) => e != null)
    .map((entry) => {
      if (entry === null) {
        return null;
      }
      return entry;
    });
};
const deserializeAws_json1_1ScpActionDefinition = (output, context) => {
  return {
    PolicyId: output.PolicyId !== undefined && output.PolicyId !== null ? output.PolicyId : undefined,
    TargetIds:
      output.TargetIds !== undefined && output.TargetIds !== null
        ? deserializeAws_json1_1TargetIds(output.TargetIds, context)
        : undefined,
  };
};
const deserializeAws_json1_1Spend = (output, context) => {
  return {
    Amount: output.Amount !== undefined && output.Amount !== null ? output.Amount : undefined,
    Unit: output.Unit !== undefined && output.Unit !== null ? output.Unit : undefined,
  };
};
const deserializeAws_json1_1SsmActionDefinition = (output, context) => {
  return {
    ActionSubType:
      output.ActionSubType !== undefined && output.ActionSubType !== null ? output.ActionSubType : undefined,
    InstanceIds:
      output.InstanceIds !== undefined && output.InstanceIds !== null
        ? deserializeAws_json1_1InstanceIds(output.InstanceIds, context)
        : undefined,
    Region: output.Region !== undefined && output.Region !== null ? output.Region : undefined,
  };
};
const deserializeAws_json1_1Subscriber = (output, context) => {
  return {
    Address: output.Address !== undefined && output.Address !== null ? output.Address : undefined,
    SubscriptionType:
      output.SubscriptionType !== undefined && output.SubscriptionType !== null ? output.SubscriptionType : undefined,
  };
};
const deserializeAws_json1_1Subscribers = (output, context) => {
  return (output || [])
    .filter((e) => e != null)
    .map((entry) => {
      if (entry === null) {
        return null;
      }
      return deserializeAws_json1_1Subscriber(entry, context);
    });
};
const deserializeAws_json1_1TargetIds = (output, context) => {
  return (output || [])
    .filter((e) => e != null)
    .map((entry) => {
      if (entry === null) {
        return null;
      }
      return entry;
    });
};
const deserializeAws_json1_1TimePeriod = (output, context) => {
  return {
    End: output.End !== undefined && output.End !== null ? new Date(Math.round(output.End * 1000)) : undefined,
    Start: output.Start !== undefined && output.Start !== null ? new Date(Math.round(output.Start * 1000)) : undefined,
  };
};
const deserializeAws_json1_1UpdateBudgetActionResponse = (output, context) => {
  return {
    AccountId: output.AccountId !== undefined && output.AccountId !== null ? output.AccountId : undefined,
    BudgetName: output.BudgetName !== undefined && output.BudgetName !== null ? output.BudgetName : undefined,
    NewAction:
      output.NewAction !== undefined && output.NewAction !== null
        ? deserializeAws_json1_1Action(output.NewAction, context)
        : undefined,
    OldAction:
      output.OldAction !== undefined && output.OldAction !== null
        ? deserializeAws_json1_1Action(output.OldAction, context)
        : undefined,
  };
};
const deserializeAws_json1_1UpdateBudgetResponse = (output, context) => {
  return {};
};
const deserializeAws_json1_1UpdateNotificationResponse = (output, context) => {
  return {};
};
const deserializeAws_json1_1UpdateSubscriberResponse = (output, context) => {
  return {};
};
const deserializeAws_json1_1Users = (output, context) => {
  return (output || [])
    .filter((e) => e != null)
    .map((entry) => {
      if (entry === null) {
        return null;
      }
      return entry;
    });
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
