"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.deserializeAws_restJson1UpdateJobQueueCommand =
  exports.deserializeAws_restJson1UpdateComputeEnvironmentCommand =
  exports.deserializeAws_restJson1UntagResourceCommand =
  exports.deserializeAws_restJson1TerminateJobCommand =
  exports.deserializeAws_restJson1TagResourceCommand =
  exports.deserializeAws_restJson1SubmitJobCommand =
  exports.deserializeAws_restJson1RegisterJobDefinitionCommand =
  exports.deserializeAws_restJson1ListTagsForResourceCommand =
  exports.deserializeAws_restJson1ListJobsCommand =
  exports.deserializeAws_restJson1DescribeJobsCommand =
  exports.deserializeAws_restJson1DescribeJobQueuesCommand =
  exports.deserializeAws_restJson1DescribeJobDefinitionsCommand =
  exports.deserializeAws_restJson1DescribeComputeEnvironmentsCommand =
  exports.deserializeAws_restJson1DeregisterJobDefinitionCommand =
  exports.deserializeAws_restJson1DeleteJobQueueCommand =
  exports.deserializeAws_restJson1DeleteComputeEnvironmentCommand =
  exports.deserializeAws_restJson1CreateJobQueueCommand =
  exports.deserializeAws_restJson1CreateComputeEnvironmentCommand =
  exports.deserializeAws_restJson1CancelJobCommand =
  exports.serializeAws_restJson1UpdateJobQueueCommand =
  exports.serializeAws_restJson1UpdateComputeEnvironmentCommand =
  exports.serializeAws_restJson1UntagResourceCommand =
  exports.serializeAws_restJson1TerminateJobCommand =
  exports.serializeAws_restJson1TagResourceCommand =
  exports.serializeAws_restJson1SubmitJobCommand =
  exports.serializeAws_restJson1RegisterJobDefinitionCommand =
  exports.serializeAws_restJson1ListTagsForResourceCommand =
  exports.serializeAws_restJson1ListJobsCommand =
  exports.serializeAws_restJson1DescribeJobsCommand =
  exports.serializeAws_restJson1DescribeJobQueuesCommand =
  exports.serializeAws_restJson1DescribeJobDefinitionsCommand =
  exports.serializeAws_restJson1DescribeComputeEnvironmentsCommand =
  exports.serializeAws_restJson1DeregisterJobDefinitionCommand =
  exports.serializeAws_restJson1DeleteJobQueueCommand =
  exports.serializeAws_restJson1DeleteComputeEnvironmentCommand =
  exports.serializeAws_restJson1CreateJobQueueCommand =
  exports.serializeAws_restJson1CreateComputeEnvironmentCommand =
  exports.serializeAws_restJson1CancelJobCommand =
    void 0;
const protocol_http_1 = require("@aws-sdk/protocol-http");
const smithy_client_1 = require("@aws-sdk/smithy-client");
const serializeAws_restJson1CancelJobCommand = async (input, context) => {
  const headers = {
    "content-type": "application/json",
  };
  let resolvedPath = "/v1/canceljob";
  let body;
  body = JSON.stringify({
    ...(input.jobId !== undefined && input.jobId !== null && { jobId: input.jobId }),
    ...(input.reason !== undefined && input.reason !== null && { reason: input.reason }),
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
exports.serializeAws_restJson1CancelJobCommand = serializeAws_restJson1CancelJobCommand;
const serializeAws_restJson1CreateComputeEnvironmentCommand = async (input, context) => {
  const headers = {
    "content-type": "application/json",
  };
  let resolvedPath = "/v1/createcomputeenvironment";
  let body;
  body = JSON.stringify({
    ...(input.computeEnvironmentName !== undefined &&
      input.computeEnvironmentName !== null && { computeEnvironmentName: input.computeEnvironmentName }),
    ...(input.computeResources !== undefined &&
      input.computeResources !== null && {
        computeResources: serializeAws_restJson1ComputeResource(input.computeResources, context),
      }),
    ...(input.serviceRole !== undefined && input.serviceRole !== null && { serviceRole: input.serviceRole }),
    ...(input.state !== undefined && input.state !== null && { state: input.state }),
    ...(input.tags !== undefined &&
      input.tags !== null && { tags: serializeAws_restJson1TagrisTagsMap(input.tags, context) }),
    ...(input.type !== undefined && input.type !== null && { type: input.type }),
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
exports.serializeAws_restJson1CreateComputeEnvironmentCommand = serializeAws_restJson1CreateComputeEnvironmentCommand;
const serializeAws_restJson1CreateJobQueueCommand = async (input, context) => {
  const headers = {
    "content-type": "application/json",
  };
  let resolvedPath = "/v1/createjobqueue";
  let body;
  body = JSON.stringify({
    ...(input.computeEnvironmentOrder !== undefined &&
      input.computeEnvironmentOrder !== null && {
        computeEnvironmentOrder: serializeAws_restJson1ComputeEnvironmentOrders(input.computeEnvironmentOrder, context),
      }),
    ...(input.jobQueueName !== undefined && input.jobQueueName !== null && { jobQueueName: input.jobQueueName }),
    ...(input.priority !== undefined && input.priority !== null && { priority: input.priority }),
    ...(input.state !== undefined && input.state !== null && { state: input.state }),
    ...(input.tags !== undefined &&
      input.tags !== null && { tags: serializeAws_restJson1TagrisTagsMap(input.tags, context) }),
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
exports.serializeAws_restJson1CreateJobQueueCommand = serializeAws_restJson1CreateJobQueueCommand;
const serializeAws_restJson1DeleteComputeEnvironmentCommand = async (input, context) => {
  const headers = {
    "content-type": "application/json",
  };
  let resolvedPath = "/v1/deletecomputeenvironment";
  let body;
  body = JSON.stringify({
    ...(input.computeEnvironment !== undefined &&
      input.computeEnvironment !== null && { computeEnvironment: input.computeEnvironment }),
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
exports.serializeAws_restJson1DeleteComputeEnvironmentCommand = serializeAws_restJson1DeleteComputeEnvironmentCommand;
const serializeAws_restJson1DeleteJobQueueCommand = async (input, context) => {
  const headers = {
    "content-type": "application/json",
  };
  let resolvedPath = "/v1/deletejobqueue";
  let body;
  body = JSON.stringify({
    ...(input.jobQueue !== undefined && input.jobQueue !== null && { jobQueue: input.jobQueue }),
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
exports.serializeAws_restJson1DeleteJobQueueCommand = serializeAws_restJson1DeleteJobQueueCommand;
const serializeAws_restJson1DeregisterJobDefinitionCommand = async (input, context) => {
  const headers = {
    "content-type": "application/json",
  };
  let resolvedPath = "/v1/deregisterjobdefinition";
  let body;
  body = JSON.stringify({
    ...(input.jobDefinition !== undefined && input.jobDefinition !== null && { jobDefinition: input.jobDefinition }),
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
exports.serializeAws_restJson1DeregisterJobDefinitionCommand = serializeAws_restJson1DeregisterJobDefinitionCommand;
const serializeAws_restJson1DescribeComputeEnvironmentsCommand = async (input, context) => {
  const headers = {
    "content-type": "application/json",
  };
  let resolvedPath = "/v1/describecomputeenvironments";
  let body;
  body = JSON.stringify({
    ...(input.computeEnvironments !== undefined &&
      input.computeEnvironments !== null && {
        computeEnvironments: serializeAws_restJson1StringList(input.computeEnvironments, context),
      }),
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
exports.serializeAws_restJson1DescribeComputeEnvironmentsCommand =
  serializeAws_restJson1DescribeComputeEnvironmentsCommand;
const serializeAws_restJson1DescribeJobDefinitionsCommand = async (input, context) => {
  const headers = {
    "content-type": "application/json",
  };
  let resolvedPath = "/v1/describejobdefinitions";
  let body;
  body = JSON.stringify({
    ...(input.jobDefinitionName !== undefined &&
      input.jobDefinitionName !== null && { jobDefinitionName: input.jobDefinitionName }),
    ...(input.jobDefinitions !== undefined &&
      input.jobDefinitions !== null && {
        jobDefinitions: serializeAws_restJson1StringList(input.jobDefinitions, context),
      }),
    ...(input.maxResults !== undefined && input.maxResults !== null && { maxResults: input.maxResults }),
    ...(input.nextToken !== undefined && input.nextToken !== null && { nextToken: input.nextToken }),
    ...(input.status !== undefined && input.status !== null && { status: input.status }),
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
exports.serializeAws_restJson1DescribeJobDefinitionsCommand = serializeAws_restJson1DescribeJobDefinitionsCommand;
const serializeAws_restJson1DescribeJobQueuesCommand = async (input, context) => {
  const headers = {
    "content-type": "application/json",
  };
  let resolvedPath = "/v1/describejobqueues";
  let body;
  body = JSON.stringify({
    ...(input.jobQueues !== undefined &&
      input.jobQueues !== null && { jobQueues: serializeAws_restJson1StringList(input.jobQueues, context) }),
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
exports.serializeAws_restJson1DescribeJobQueuesCommand = serializeAws_restJson1DescribeJobQueuesCommand;
const serializeAws_restJson1DescribeJobsCommand = async (input, context) => {
  const headers = {
    "content-type": "application/json",
  };
  let resolvedPath = "/v1/describejobs";
  let body;
  body = JSON.stringify({
    ...(input.jobs !== undefined &&
      input.jobs !== null && { jobs: serializeAws_restJson1StringList(input.jobs, context) }),
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
exports.serializeAws_restJson1DescribeJobsCommand = serializeAws_restJson1DescribeJobsCommand;
const serializeAws_restJson1ListJobsCommand = async (input, context) => {
  const headers = {
    "content-type": "application/json",
  };
  let resolvedPath = "/v1/listjobs";
  let body;
  body = JSON.stringify({
    ...(input.arrayJobId !== undefined && input.arrayJobId !== null && { arrayJobId: input.arrayJobId }),
    ...(input.jobQueue !== undefined && input.jobQueue !== null && { jobQueue: input.jobQueue }),
    ...(input.jobStatus !== undefined && input.jobStatus !== null && { jobStatus: input.jobStatus }),
    ...(input.maxResults !== undefined && input.maxResults !== null && { maxResults: input.maxResults }),
    ...(input.multiNodeJobId !== undefined &&
      input.multiNodeJobId !== null && { multiNodeJobId: input.multiNodeJobId }),
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
exports.serializeAws_restJson1ListJobsCommand = serializeAws_restJson1ListJobsCommand;
const serializeAws_restJson1ListTagsForResourceCommand = async (input, context) => {
  const headers = {};
  let resolvedPath = "/v1/tags/{resourceArn}";
  if (input.resourceArn !== undefined) {
    const labelValue = input.resourceArn;
    if (labelValue.length <= 0) {
      throw new Error("Empty value provided for input HTTP label: resourceArn.");
    }
    resolvedPath = resolvedPath.replace("{resourceArn}", smithy_client_1.extendedEncodeURIComponent(labelValue));
  } else {
    throw new Error("No value provided for input HTTP label: resourceArn.");
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
const serializeAws_restJson1RegisterJobDefinitionCommand = async (input, context) => {
  const headers = {
    "content-type": "application/json",
  };
  let resolvedPath = "/v1/registerjobdefinition";
  let body;
  body = JSON.stringify({
    ...(input.containerProperties !== undefined &&
      input.containerProperties !== null && {
        containerProperties: serializeAws_restJson1ContainerProperties(input.containerProperties, context),
      }),
    ...(input.jobDefinitionName !== undefined &&
      input.jobDefinitionName !== null && { jobDefinitionName: input.jobDefinitionName }),
    ...(input.nodeProperties !== undefined &&
      input.nodeProperties !== null && {
        nodeProperties: serializeAws_restJson1NodeProperties(input.nodeProperties, context),
      }),
    ...(input.parameters !== undefined &&
      input.parameters !== null && { parameters: serializeAws_restJson1ParametersMap(input.parameters, context) }),
    ...(input.platformCapabilities !== undefined &&
      input.platformCapabilities !== null && {
        platformCapabilities: serializeAws_restJson1PlatformCapabilityList(input.platformCapabilities, context),
      }),
    ...(input.propagateTags !== undefined && input.propagateTags !== null && { propagateTags: input.propagateTags }),
    ...(input.retryStrategy !== undefined &&
      input.retryStrategy !== null && {
        retryStrategy: serializeAws_restJson1RetryStrategy(input.retryStrategy, context),
      }),
    ...(input.tags !== undefined &&
      input.tags !== null && { tags: serializeAws_restJson1TagrisTagsMap(input.tags, context) }),
    ...(input.timeout !== undefined &&
      input.timeout !== null && { timeout: serializeAws_restJson1JobTimeout(input.timeout, context) }),
    ...(input.type !== undefined && input.type !== null && { type: input.type }),
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
exports.serializeAws_restJson1RegisterJobDefinitionCommand = serializeAws_restJson1RegisterJobDefinitionCommand;
const serializeAws_restJson1SubmitJobCommand = async (input, context) => {
  const headers = {
    "content-type": "application/json",
  };
  let resolvedPath = "/v1/submitjob";
  let body;
  body = JSON.stringify({
    ...(input.arrayProperties !== undefined &&
      input.arrayProperties !== null && {
        arrayProperties: serializeAws_restJson1ArrayProperties(input.arrayProperties, context),
      }),
    ...(input.containerOverrides !== undefined &&
      input.containerOverrides !== null && {
        containerOverrides: serializeAws_restJson1ContainerOverrides(input.containerOverrides, context),
      }),
    ...(input.dependsOn !== undefined &&
      input.dependsOn !== null && { dependsOn: serializeAws_restJson1JobDependencyList(input.dependsOn, context) }),
    ...(input.jobDefinition !== undefined && input.jobDefinition !== null && { jobDefinition: input.jobDefinition }),
    ...(input.jobName !== undefined && input.jobName !== null && { jobName: input.jobName }),
    ...(input.jobQueue !== undefined && input.jobQueue !== null && { jobQueue: input.jobQueue }),
    ...(input.nodeOverrides !== undefined &&
      input.nodeOverrides !== null && {
        nodeOverrides: serializeAws_restJson1NodeOverrides(input.nodeOverrides, context),
      }),
    ...(input.parameters !== undefined &&
      input.parameters !== null && { parameters: serializeAws_restJson1ParametersMap(input.parameters, context) }),
    ...(input.propagateTags !== undefined && input.propagateTags !== null && { propagateTags: input.propagateTags }),
    ...(input.retryStrategy !== undefined &&
      input.retryStrategy !== null && {
        retryStrategy: serializeAws_restJson1RetryStrategy(input.retryStrategy, context),
      }),
    ...(input.tags !== undefined &&
      input.tags !== null && { tags: serializeAws_restJson1TagrisTagsMap(input.tags, context) }),
    ...(input.timeout !== undefined &&
      input.timeout !== null && { timeout: serializeAws_restJson1JobTimeout(input.timeout, context) }),
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
exports.serializeAws_restJson1SubmitJobCommand = serializeAws_restJson1SubmitJobCommand;
const serializeAws_restJson1TagResourceCommand = async (input, context) => {
  const headers = {
    "content-type": "application/json",
  };
  let resolvedPath = "/v1/tags/{resourceArn}";
  if (input.resourceArn !== undefined) {
    const labelValue = input.resourceArn;
    if (labelValue.length <= 0) {
      throw new Error("Empty value provided for input HTTP label: resourceArn.");
    }
    resolvedPath = resolvedPath.replace("{resourceArn}", smithy_client_1.extendedEncodeURIComponent(labelValue));
  } else {
    throw new Error("No value provided for input HTTP label: resourceArn.");
  }
  let body;
  body = JSON.stringify({
    ...(input.tags !== undefined &&
      input.tags !== null && { tags: serializeAws_restJson1TagrisTagsMap(input.tags, context) }),
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
const serializeAws_restJson1TerminateJobCommand = async (input, context) => {
  const headers = {
    "content-type": "application/json",
  };
  let resolvedPath = "/v1/terminatejob";
  let body;
  body = JSON.stringify({
    ...(input.jobId !== undefined && input.jobId !== null && { jobId: input.jobId }),
    ...(input.reason !== undefined && input.reason !== null && { reason: input.reason }),
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
exports.serializeAws_restJson1TerminateJobCommand = serializeAws_restJson1TerminateJobCommand;
const serializeAws_restJson1UntagResourceCommand = async (input, context) => {
  const headers = {};
  let resolvedPath = "/v1/tags/{resourceArn}";
  if (input.resourceArn !== undefined) {
    const labelValue = input.resourceArn;
    if (labelValue.length <= 0) {
      throw new Error("Empty value provided for input HTTP label: resourceArn.");
    }
    resolvedPath = resolvedPath.replace("{resourceArn}", smithy_client_1.extendedEncodeURIComponent(labelValue));
  } else {
    throw new Error("No value provided for input HTTP label: resourceArn.");
  }
  const query = {
    ...(input.tagKeys !== undefined && { tagKeys: (input.tagKeys || []).map((_entry) => _entry) }),
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
const serializeAws_restJson1UpdateComputeEnvironmentCommand = async (input, context) => {
  const headers = {
    "content-type": "application/json",
  };
  let resolvedPath = "/v1/updatecomputeenvironment";
  let body;
  body = JSON.stringify({
    ...(input.computeEnvironment !== undefined &&
      input.computeEnvironment !== null && { computeEnvironment: input.computeEnvironment }),
    ...(input.computeResources !== undefined &&
      input.computeResources !== null && {
        computeResources: serializeAws_restJson1ComputeResourceUpdate(input.computeResources, context),
      }),
    ...(input.serviceRole !== undefined && input.serviceRole !== null && { serviceRole: input.serviceRole }),
    ...(input.state !== undefined && input.state !== null && { state: input.state }),
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
exports.serializeAws_restJson1UpdateComputeEnvironmentCommand = serializeAws_restJson1UpdateComputeEnvironmentCommand;
const serializeAws_restJson1UpdateJobQueueCommand = async (input, context) => {
  const headers = {
    "content-type": "application/json",
  };
  let resolvedPath = "/v1/updatejobqueue";
  let body;
  body = JSON.stringify({
    ...(input.computeEnvironmentOrder !== undefined &&
      input.computeEnvironmentOrder !== null && {
        computeEnvironmentOrder: serializeAws_restJson1ComputeEnvironmentOrders(input.computeEnvironmentOrder, context),
      }),
    ...(input.jobQueue !== undefined && input.jobQueue !== null && { jobQueue: input.jobQueue }),
    ...(input.priority !== undefined && input.priority !== null && { priority: input.priority }),
    ...(input.state !== undefined && input.state !== null && { state: input.state }),
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
exports.serializeAws_restJson1UpdateJobQueueCommand = serializeAws_restJson1UpdateJobQueueCommand;
const deserializeAws_restJson1CancelJobCommand = async (output, context) => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1CancelJobCommandError(output, context);
  }
  const contents = {
    $metadata: deserializeMetadata(output),
  };
  await collectBody(output.body, context);
  return Promise.resolve(contents);
};
exports.deserializeAws_restJson1CancelJobCommand = deserializeAws_restJson1CancelJobCommand;
const deserializeAws_restJson1CancelJobCommandError = async (output, context) => {
  const parsedOutput = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response;
  let errorCode = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "ClientException":
    case "com.amazonaws.batch#ClientException":
      response = {
        ...(await deserializeAws_restJson1ClientExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ServerException":
    case "com.amazonaws.batch#ServerException":
      response = {
        ...(await deserializeAws_restJson1ServerExceptionResponse(parsedOutput, context)),
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
const deserializeAws_restJson1CreateComputeEnvironmentCommand = async (output, context) => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1CreateComputeEnvironmentCommandError(output, context);
  }
  const contents = {
    $metadata: deserializeMetadata(output),
    computeEnvironmentArn: undefined,
    computeEnvironmentName: undefined,
  };
  const data = await parseBody(output.body, context);
  if (data.computeEnvironmentArn !== undefined && data.computeEnvironmentArn !== null) {
    contents.computeEnvironmentArn = data.computeEnvironmentArn;
  }
  if (data.computeEnvironmentName !== undefined && data.computeEnvironmentName !== null) {
    contents.computeEnvironmentName = data.computeEnvironmentName;
  }
  return Promise.resolve(contents);
};
exports.deserializeAws_restJson1CreateComputeEnvironmentCommand =
  deserializeAws_restJson1CreateComputeEnvironmentCommand;
const deserializeAws_restJson1CreateComputeEnvironmentCommandError = async (output, context) => {
  const parsedOutput = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response;
  let errorCode = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "ClientException":
    case "com.amazonaws.batch#ClientException":
      response = {
        ...(await deserializeAws_restJson1ClientExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ServerException":
    case "com.amazonaws.batch#ServerException":
      response = {
        ...(await deserializeAws_restJson1ServerExceptionResponse(parsedOutput, context)),
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
const deserializeAws_restJson1CreateJobQueueCommand = async (output, context) => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1CreateJobQueueCommandError(output, context);
  }
  const contents = {
    $metadata: deserializeMetadata(output),
    jobQueueArn: undefined,
    jobQueueName: undefined,
  };
  const data = await parseBody(output.body, context);
  if (data.jobQueueArn !== undefined && data.jobQueueArn !== null) {
    contents.jobQueueArn = data.jobQueueArn;
  }
  if (data.jobQueueName !== undefined && data.jobQueueName !== null) {
    contents.jobQueueName = data.jobQueueName;
  }
  return Promise.resolve(contents);
};
exports.deserializeAws_restJson1CreateJobQueueCommand = deserializeAws_restJson1CreateJobQueueCommand;
const deserializeAws_restJson1CreateJobQueueCommandError = async (output, context) => {
  const parsedOutput = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response;
  let errorCode = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "ClientException":
    case "com.amazonaws.batch#ClientException":
      response = {
        ...(await deserializeAws_restJson1ClientExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ServerException":
    case "com.amazonaws.batch#ServerException":
      response = {
        ...(await deserializeAws_restJson1ServerExceptionResponse(parsedOutput, context)),
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
const deserializeAws_restJson1DeleteComputeEnvironmentCommand = async (output, context) => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1DeleteComputeEnvironmentCommandError(output, context);
  }
  const contents = {
    $metadata: deserializeMetadata(output),
  };
  await collectBody(output.body, context);
  return Promise.resolve(contents);
};
exports.deserializeAws_restJson1DeleteComputeEnvironmentCommand =
  deserializeAws_restJson1DeleteComputeEnvironmentCommand;
const deserializeAws_restJson1DeleteComputeEnvironmentCommandError = async (output, context) => {
  const parsedOutput = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response;
  let errorCode = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "ClientException":
    case "com.amazonaws.batch#ClientException":
      response = {
        ...(await deserializeAws_restJson1ClientExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ServerException":
    case "com.amazonaws.batch#ServerException":
      response = {
        ...(await deserializeAws_restJson1ServerExceptionResponse(parsedOutput, context)),
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
const deserializeAws_restJson1DeleteJobQueueCommand = async (output, context) => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1DeleteJobQueueCommandError(output, context);
  }
  const contents = {
    $metadata: deserializeMetadata(output),
  };
  await collectBody(output.body, context);
  return Promise.resolve(contents);
};
exports.deserializeAws_restJson1DeleteJobQueueCommand = deserializeAws_restJson1DeleteJobQueueCommand;
const deserializeAws_restJson1DeleteJobQueueCommandError = async (output, context) => {
  const parsedOutput = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response;
  let errorCode = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "ClientException":
    case "com.amazonaws.batch#ClientException":
      response = {
        ...(await deserializeAws_restJson1ClientExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ServerException":
    case "com.amazonaws.batch#ServerException":
      response = {
        ...(await deserializeAws_restJson1ServerExceptionResponse(parsedOutput, context)),
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
const deserializeAws_restJson1DeregisterJobDefinitionCommand = async (output, context) => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1DeregisterJobDefinitionCommandError(output, context);
  }
  const contents = {
    $metadata: deserializeMetadata(output),
  };
  await collectBody(output.body, context);
  return Promise.resolve(contents);
};
exports.deserializeAws_restJson1DeregisterJobDefinitionCommand = deserializeAws_restJson1DeregisterJobDefinitionCommand;
const deserializeAws_restJson1DeregisterJobDefinitionCommandError = async (output, context) => {
  const parsedOutput = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response;
  let errorCode = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "ClientException":
    case "com.amazonaws.batch#ClientException":
      response = {
        ...(await deserializeAws_restJson1ClientExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ServerException":
    case "com.amazonaws.batch#ServerException":
      response = {
        ...(await deserializeAws_restJson1ServerExceptionResponse(parsedOutput, context)),
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
const deserializeAws_restJson1DescribeComputeEnvironmentsCommand = async (output, context) => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1DescribeComputeEnvironmentsCommandError(output, context);
  }
  const contents = {
    $metadata: deserializeMetadata(output),
    computeEnvironments: undefined,
    nextToken: undefined,
  };
  const data = await parseBody(output.body, context);
  if (data.computeEnvironments !== undefined && data.computeEnvironments !== null) {
    contents.computeEnvironments = deserializeAws_restJson1ComputeEnvironmentDetailList(
      data.computeEnvironments,
      context
    );
  }
  if (data.nextToken !== undefined && data.nextToken !== null) {
    contents.nextToken = data.nextToken;
  }
  return Promise.resolve(contents);
};
exports.deserializeAws_restJson1DescribeComputeEnvironmentsCommand =
  deserializeAws_restJson1DescribeComputeEnvironmentsCommand;
const deserializeAws_restJson1DescribeComputeEnvironmentsCommandError = async (output, context) => {
  const parsedOutput = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response;
  let errorCode = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "ClientException":
    case "com.amazonaws.batch#ClientException":
      response = {
        ...(await deserializeAws_restJson1ClientExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ServerException":
    case "com.amazonaws.batch#ServerException":
      response = {
        ...(await deserializeAws_restJson1ServerExceptionResponse(parsedOutput, context)),
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
const deserializeAws_restJson1DescribeJobDefinitionsCommand = async (output, context) => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1DescribeJobDefinitionsCommandError(output, context);
  }
  const contents = {
    $metadata: deserializeMetadata(output),
    jobDefinitions: undefined,
    nextToken: undefined,
  };
  const data = await parseBody(output.body, context);
  if (data.jobDefinitions !== undefined && data.jobDefinitions !== null) {
    contents.jobDefinitions = deserializeAws_restJson1JobDefinitionList(data.jobDefinitions, context);
  }
  if (data.nextToken !== undefined && data.nextToken !== null) {
    contents.nextToken = data.nextToken;
  }
  return Promise.resolve(contents);
};
exports.deserializeAws_restJson1DescribeJobDefinitionsCommand = deserializeAws_restJson1DescribeJobDefinitionsCommand;
const deserializeAws_restJson1DescribeJobDefinitionsCommandError = async (output, context) => {
  const parsedOutput = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response;
  let errorCode = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "ClientException":
    case "com.amazonaws.batch#ClientException":
      response = {
        ...(await deserializeAws_restJson1ClientExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ServerException":
    case "com.amazonaws.batch#ServerException":
      response = {
        ...(await deserializeAws_restJson1ServerExceptionResponse(parsedOutput, context)),
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
const deserializeAws_restJson1DescribeJobQueuesCommand = async (output, context) => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1DescribeJobQueuesCommandError(output, context);
  }
  const contents = {
    $metadata: deserializeMetadata(output),
    jobQueues: undefined,
    nextToken: undefined,
  };
  const data = await parseBody(output.body, context);
  if (data.jobQueues !== undefined && data.jobQueues !== null) {
    contents.jobQueues = deserializeAws_restJson1JobQueueDetailList(data.jobQueues, context);
  }
  if (data.nextToken !== undefined && data.nextToken !== null) {
    contents.nextToken = data.nextToken;
  }
  return Promise.resolve(contents);
};
exports.deserializeAws_restJson1DescribeJobQueuesCommand = deserializeAws_restJson1DescribeJobQueuesCommand;
const deserializeAws_restJson1DescribeJobQueuesCommandError = async (output, context) => {
  const parsedOutput = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response;
  let errorCode = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "ClientException":
    case "com.amazonaws.batch#ClientException":
      response = {
        ...(await deserializeAws_restJson1ClientExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ServerException":
    case "com.amazonaws.batch#ServerException":
      response = {
        ...(await deserializeAws_restJson1ServerExceptionResponse(parsedOutput, context)),
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
const deserializeAws_restJson1DescribeJobsCommand = async (output, context) => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1DescribeJobsCommandError(output, context);
  }
  const contents = {
    $metadata: deserializeMetadata(output),
    jobs: undefined,
  };
  const data = await parseBody(output.body, context);
  if (data.jobs !== undefined && data.jobs !== null) {
    contents.jobs = deserializeAws_restJson1JobDetailList(data.jobs, context);
  }
  return Promise.resolve(contents);
};
exports.deserializeAws_restJson1DescribeJobsCommand = deserializeAws_restJson1DescribeJobsCommand;
const deserializeAws_restJson1DescribeJobsCommandError = async (output, context) => {
  const parsedOutput = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response;
  let errorCode = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "ClientException":
    case "com.amazonaws.batch#ClientException":
      response = {
        ...(await deserializeAws_restJson1ClientExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ServerException":
    case "com.amazonaws.batch#ServerException":
      response = {
        ...(await deserializeAws_restJson1ServerExceptionResponse(parsedOutput, context)),
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
const deserializeAws_restJson1ListJobsCommand = async (output, context) => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1ListJobsCommandError(output, context);
  }
  const contents = {
    $metadata: deserializeMetadata(output),
    jobSummaryList: undefined,
    nextToken: undefined,
  };
  const data = await parseBody(output.body, context);
  if (data.jobSummaryList !== undefined && data.jobSummaryList !== null) {
    contents.jobSummaryList = deserializeAws_restJson1JobSummaryList(data.jobSummaryList, context);
  }
  if (data.nextToken !== undefined && data.nextToken !== null) {
    contents.nextToken = data.nextToken;
  }
  return Promise.resolve(contents);
};
exports.deserializeAws_restJson1ListJobsCommand = deserializeAws_restJson1ListJobsCommand;
const deserializeAws_restJson1ListJobsCommandError = async (output, context) => {
  const parsedOutput = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response;
  let errorCode = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "ClientException":
    case "com.amazonaws.batch#ClientException":
      response = {
        ...(await deserializeAws_restJson1ClientExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ServerException":
    case "com.amazonaws.batch#ServerException":
      response = {
        ...(await deserializeAws_restJson1ServerExceptionResponse(parsedOutput, context)),
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
    tags: undefined,
  };
  const data = await parseBody(output.body, context);
  if (data.tags !== undefined && data.tags !== null) {
    contents.tags = deserializeAws_restJson1TagrisTagsMap(data.tags, context);
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
    case "ClientException":
    case "com.amazonaws.batch#ClientException":
      response = {
        ...(await deserializeAws_restJson1ClientExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ServerException":
    case "com.amazonaws.batch#ServerException":
      response = {
        ...(await deserializeAws_restJson1ServerExceptionResponse(parsedOutput, context)),
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
const deserializeAws_restJson1RegisterJobDefinitionCommand = async (output, context) => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1RegisterJobDefinitionCommandError(output, context);
  }
  const contents = {
    $metadata: deserializeMetadata(output),
    jobDefinitionArn: undefined,
    jobDefinitionName: undefined,
    revision: undefined,
  };
  const data = await parseBody(output.body, context);
  if (data.jobDefinitionArn !== undefined && data.jobDefinitionArn !== null) {
    contents.jobDefinitionArn = data.jobDefinitionArn;
  }
  if (data.jobDefinitionName !== undefined && data.jobDefinitionName !== null) {
    contents.jobDefinitionName = data.jobDefinitionName;
  }
  if (data.revision !== undefined && data.revision !== null) {
    contents.revision = data.revision;
  }
  return Promise.resolve(contents);
};
exports.deserializeAws_restJson1RegisterJobDefinitionCommand = deserializeAws_restJson1RegisterJobDefinitionCommand;
const deserializeAws_restJson1RegisterJobDefinitionCommandError = async (output, context) => {
  const parsedOutput = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response;
  let errorCode = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "ClientException":
    case "com.amazonaws.batch#ClientException":
      response = {
        ...(await deserializeAws_restJson1ClientExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ServerException":
    case "com.amazonaws.batch#ServerException":
      response = {
        ...(await deserializeAws_restJson1ServerExceptionResponse(parsedOutput, context)),
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
const deserializeAws_restJson1SubmitJobCommand = async (output, context) => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1SubmitJobCommandError(output, context);
  }
  const contents = {
    $metadata: deserializeMetadata(output),
    jobArn: undefined,
    jobId: undefined,
    jobName: undefined,
  };
  const data = await parseBody(output.body, context);
  if (data.jobArn !== undefined && data.jobArn !== null) {
    contents.jobArn = data.jobArn;
  }
  if (data.jobId !== undefined && data.jobId !== null) {
    contents.jobId = data.jobId;
  }
  if (data.jobName !== undefined && data.jobName !== null) {
    contents.jobName = data.jobName;
  }
  return Promise.resolve(contents);
};
exports.deserializeAws_restJson1SubmitJobCommand = deserializeAws_restJson1SubmitJobCommand;
const deserializeAws_restJson1SubmitJobCommandError = async (output, context) => {
  const parsedOutput = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response;
  let errorCode = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "ClientException":
    case "com.amazonaws.batch#ClientException":
      response = {
        ...(await deserializeAws_restJson1ClientExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ServerException":
    case "com.amazonaws.batch#ServerException":
      response = {
        ...(await deserializeAws_restJson1ServerExceptionResponse(parsedOutput, context)),
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
    case "ClientException":
    case "com.amazonaws.batch#ClientException":
      response = {
        ...(await deserializeAws_restJson1ClientExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ServerException":
    case "com.amazonaws.batch#ServerException":
      response = {
        ...(await deserializeAws_restJson1ServerExceptionResponse(parsedOutput, context)),
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
const deserializeAws_restJson1TerminateJobCommand = async (output, context) => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1TerminateJobCommandError(output, context);
  }
  const contents = {
    $metadata: deserializeMetadata(output),
  };
  await collectBody(output.body, context);
  return Promise.resolve(contents);
};
exports.deserializeAws_restJson1TerminateJobCommand = deserializeAws_restJson1TerminateJobCommand;
const deserializeAws_restJson1TerminateJobCommandError = async (output, context) => {
  const parsedOutput = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response;
  let errorCode = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "ClientException":
    case "com.amazonaws.batch#ClientException":
      response = {
        ...(await deserializeAws_restJson1ClientExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ServerException":
    case "com.amazonaws.batch#ServerException":
      response = {
        ...(await deserializeAws_restJson1ServerExceptionResponse(parsedOutput, context)),
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
    case "ClientException":
    case "com.amazonaws.batch#ClientException":
      response = {
        ...(await deserializeAws_restJson1ClientExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ServerException":
    case "com.amazonaws.batch#ServerException":
      response = {
        ...(await deserializeAws_restJson1ServerExceptionResponse(parsedOutput, context)),
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
const deserializeAws_restJson1UpdateComputeEnvironmentCommand = async (output, context) => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1UpdateComputeEnvironmentCommandError(output, context);
  }
  const contents = {
    $metadata: deserializeMetadata(output),
    computeEnvironmentArn: undefined,
    computeEnvironmentName: undefined,
  };
  const data = await parseBody(output.body, context);
  if (data.computeEnvironmentArn !== undefined && data.computeEnvironmentArn !== null) {
    contents.computeEnvironmentArn = data.computeEnvironmentArn;
  }
  if (data.computeEnvironmentName !== undefined && data.computeEnvironmentName !== null) {
    contents.computeEnvironmentName = data.computeEnvironmentName;
  }
  return Promise.resolve(contents);
};
exports.deserializeAws_restJson1UpdateComputeEnvironmentCommand =
  deserializeAws_restJson1UpdateComputeEnvironmentCommand;
const deserializeAws_restJson1UpdateComputeEnvironmentCommandError = async (output, context) => {
  const parsedOutput = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response;
  let errorCode = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "ClientException":
    case "com.amazonaws.batch#ClientException":
      response = {
        ...(await deserializeAws_restJson1ClientExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ServerException":
    case "com.amazonaws.batch#ServerException":
      response = {
        ...(await deserializeAws_restJson1ServerExceptionResponse(parsedOutput, context)),
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
const deserializeAws_restJson1UpdateJobQueueCommand = async (output, context) => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1UpdateJobQueueCommandError(output, context);
  }
  const contents = {
    $metadata: deserializeMetadata(output),
    jobQueueArn: undefined,
    jobQueueName: undefined,
  };
  const data = await parseBody(output.body, context);
  if (data.jobQueueArn !== undefined && data.jobQueueArn !== null) {
    contents.jobQueueArn = data.jobQueueArn;
  }
  if (data.jobQueueName !== undefined && data.jobQueueName !== null) {
    contents.jobQueueName = data.jobQueueName;
  }
  return Promise.resolve(contents);
};
exports.deserializeAws_restJson1UpdateJobQueueCommand = deserializeAws_restJson1UpdateJobQueueCommand;
const deserializeAws_restJson1UpdateJobQueueCommandError = async (output, context) => {
  const parsedOutput = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response;
  let errorCode = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "ClientException":
    case "com.amazonaws.batch#ClientException":
      response = {
        ...(await deserializeAws_restJson1ClientExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ServerException":
    case "com.amazonaws.batch#ServerException":
      response = {
        ...(await deserializeAws_restJson1ServerExceptionResponse(parsedOutput, context)),
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
const deserializeAws_restJson1ClientExceptionResponse = async (parsedOutput, context) => {
  const contents = {
    name: "ClientException",
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
const deserializeAws_restJson1ServerExceptionResponse = async (parsedOutput, context) => {
  const contents = {
    name: "ServerException",
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
const serializeAws_restJson1ArrayProperties = (input, context) => {
  return {
    ...(input.size !== undefined && input.size !== null && { size: input.size }),
  };
};
const serializeAws_restJson1ComputeEnvironmentOrder = (input, context) => {
  return {
    ...(input.computeEnvironment !== undefined &&
      input.computeEnvironment !== null && { computeEnvironment: input.computeEnvironment }),
    ...(input.order !== undefined && input.order !== null && { order: input.order }),
  };
};
const serializeAws_restJson1ComputeEnvironmentOrders = (input, context) => {
  return input
    .filter((e) => e != null)
    .map((entry) => {
      if (entry === null) {
        return null;
      }
      return serializeAws_restJson1ComputeEnvironmentOrder(entry, context);
    });
};
const serializeAws_restJson1ComputeResource = (input, context) => {
  return {
    ...(input.allocationStrategy !== undefined &&
      input.allocationStrategy !== null && { allocationStrategy: input.allocationStrategy }),
    ...(input.bidPercentage !== undefined && input.bidPercentage !== null && { bidPercentage: input.bidPercentage }),
    ...(input.desiredvCpus !== undefined && input.desiredvCpus !== null && { desiredvCpus: input.desiredvCpus }),
    ...(input.ec2Configuration !== undefined &&
      input.ec2Configuration !== null && {
        ec2Configuration: serializeAws_restJson1Ec2ConfigurationList(input.ec2Configuration, context),
      }),
    ...(input.ec2KeyPair !== undefined && input.ec2KeyPair !== null && { ec2KeyPair: input.ec2KeyPair }),
    ...(input.imageId !== undefined && input.imageId !== null && { imageId: input.imageId }),
    ...(input.instanceRole !== undefined && input.instanceRole !== null && { instanceRole: input.instanceRole }),
    ...(input.instanceTypes !== undefined &&
      input.instanceTypes !== null && {
        instanceTypes: serializeAws_restJson1StringList(input.instanceTypes, context),
      }),
    ...(input.launchTemplate !== undefined &&
      input.launchTemplate !== null && {
        launchTemplate: serializeAws_restJson1LaunchTemplateSpecification(input.launchTemplate, context),
      }),
    ...(input.maxvCpus !== undefined && input.maxvCpus !== null && { maxvCpus: input.maxvCpus }),
    ...(input.minvCpus !== undefined && input.minvCpus !== null && { minvCpus: input.minvCpus }),
    ...(input.placementGroup !== undefined &&
      input.placementGroup !== null && { placementGroup: input.placementGroup }),
    ...(input.securityGroupIds !== undefined &&
      input.securityGroupIds !== null && {
        securityGroupIds: serializeAws_restJson1StringList(input.securityGroupIds, context),
      }),
    ...(input.spotIamFleetRole !== undefined &&
      input.spotIamFleetRole !== null && { spotIamFleetRole: input.spotIamFleetRole }),
    ...(input.subnets !== undefined &&
      input.subnets !== null && { subnets: serializeAws_restJson1StringList(input.subnets, context) }),
    ...(input.tags !== undefined &&
      input.tags !== null && { tags: serializeAws_restJson1TagsMap(input.tags, context) }),
    ...(input.type !== undefined && input.type !== null && { type: input.type }),
  };
};
const serializeAws_restJson1ComputeResourceUpdate = (input, context) => {
  return {
    ...(input.desiredvCpus !== undefined && input.desiredvCpus !== null && { desiredvCpus: input.desiredvCpus }),
    ...(input.maxvCpus !== undefined && input.maxvCpus !== null && { maxvCpus: input.maxvCpus }),
    ...(input.minvCpus !== undefined && input.minvCpus !== null && { minvCpus: input.minvCpus }),
    ...(input.securityGroupIds !== undefined &&
      input.securityGroupIds !== null && {
        securityGroupIds: serializeAws_restJson1StringList(input.securityGroupIds, context),
      }),
    ...(input.subnets !== undefined &&
      input.subnets !== null && { subnets: serializeAws_restJson1StringList(input.subnets, context) }),
  };
};
const serializeAws_restJson1ContainerOverrides = (input, context) => {
  return {
    ...(input.command !== undefined &&
      input.command !== null && { command: serializeAws_restJson1StringList(input.command, context) }),
    ...(input.environment !== undefined &&
      input.environment !== null && {
        environment: serializeAws_restJson1EnvironmentVariables(input.environment, context),
      }),
    ...(input.instanceType !== undefined && input.instanceType !== null && { instanceType: input.instanceType }),
    ...(input.memory !== undefined && input.memory !== null && { memory: input.memory }),
    ...(input.resourceRequirements !== undefined &&
      input.resourceRequirements !== null && {
        resourceRequirements: serializeAws_restJson1ResourceRequirements(input.resourceRequirements, context),
      }),
    ...(input.vcpus !== undefined && input.vcpus !== null && { vcpus: input.vcpus }),
  };
};
const serializeAws_restJson1ContainerProperties = (input, context) => {
  return {
    ...(input.command !== undefined &&
      input.command !== null && { command: serializeAws_restJson1StringList(input.command, context) }),
    ...(input.environment !== undefined &&
      input.environment !== null && {
        environment: serializeAws_restJson1EnvironmentVariables(input.environment, context),
      }),
    ...(input.executionRoleArn !== undefined &&
      input.executionRoleArn !== null && { executionRoleArn: input.executionRoleArn }),
    ...(input.fargatePlatformConfiguration !== undefined &&
      input.fargatePlatformConfiguration !== null && {
        fargatePlatformConfiguration: serializeAws_restJson1FargatePlatformConfiguration(
          input.fargatePlatformConfiguration,
          context
        ),
      }),
    ...(input.image !== undefined && input.image !== null && { image: input.image }),
    ...(input.instanceType !== undefined && input.instanceType !== null && { instanceType: input.instanceType }),
    ...(input.jobRoleArn !== undefined && input.jobRoleArn !== null && { jobRoleArn: input.jobRoleArn }),
    ...(input.linuxParameters !== undefined &&
      input.linuxParameters !== null && {
        linuxParameters: serializeAws_restJson1LinuxParameters(input.linuxParameters, context),
      }),
    ...(input.logConfiguration !== undefined &&
      input.logConfiguration !== null && {
        logConfiguration: serializeAws_restJson1LogConfiguration(input.logConfiguration, context),
      }),
    ...(input.memory !== undefined && input.memory !== null && { memory: input.memory }),
    ...(input.mountPoints !== undefined &&
      input.mountPoints !== null && { mountPoints: serializeAws_restJson1MountPoints(input.mountPoints, context) }),
    ...(input.networkConfiguration !== undefined &&
      input.networkConfiguration !== null && {
        networkConfiguration: serializeAws_restJson1NetworkConfiguration(input.networkConfiguration, context),
      }),
    ...(input.privileged !== undefined && input.privileged !== null && { privileged: input.privileged }),
    ...(input.readonlyRootFilesystem !== undefined &&
      input.readonlyRootFilesystem !== null && { readonlyRootFilesystem: input.readonlyRootFilesystem }),
    ...(input.resourceRequirements !== undefined &&
      input.resourceRequirements !== null && {
        resourceRequirements: serializeAws_restJson1ResourceRequirements(input.resourceRequirements, context),
      }),
    ...(input.secrets !== undefined &&
      input.secrets !== null && { secrets: serializeAws_restJson1SecretList(input.secrets, context) }),
    ...(input.ulimits !== undefined &&
      input.ulimits !== null && { ulimits: serializeAws_restJson1Ulimits(input.ulimits, context) }),
    ...(input.user !== undefined && input.user !== null && { user: input.user }),
    ...(input.vcpus !== undefined && input.vcpus !== null && { vcpus: input.vcpus }),
    ...(input.volumes !== undefined &&
      input.volumes !== null && { volumes: serializeAws_restJson1Volumes(input.volumes, context) }),
  };
};
const serializeAws_restJson1Device = (input, context) => {
  return {
    ...(input.containerPath !== undefined && input.containerPath !== null && { containerPath: input.containerPath }),
    ...(input.hostPath !== undefined && input.hostPath !== null && { hostPath: input.hostPath }),
    ...(input.permissions !== undefined &&
      input.permissions !== null && {
        permissions: serializeAws_restJson1DeviceCgroupPermissions(input.permissions, context),
      }),
  };
};
const serializeAws_restJson1DeviceCgroupPermissions = (input, context) => {
  return input
    .filter((e) => e != null)
    .map((entry) => {
      if (entry === null) {
        return null;
      }
      return entry;
    });
};
const serializeAws_restJson1DevicesList = (input, context) => {
  return input
    .filter((e) => e != null)
    .map((entry) => {
      if (entry === null) {
        return null;
      }
      return serializeAws_restJson1Device(entry, context);
    });
};
const serializeAws_restJson1Ec2Configuration = (input, context) => {
  return {
    ...(input.imageIdOverride !== undefined &&
      input.imageIdOverride !== null && { imageIdOverride: input.imageIdOverride }),
    ...(input.imageType !== undefined && input.imageType !== null && { imageType: input.imageType }),
  };
};
const serializeAws_restJson1Ec2ConfigurationList = (input, context) => {
  return input
    .filter((e) => e != null)
    .map((entry) => {
      if (entry === null) {
        return null;
      }
      return serializeAws_restJson1Ec2Configuration(entry, context);
    });
};
const serializeAws_restJson1EFSAuthorizationConfig = (input, context) => {
  return {
    ...(input.accessPointId !== undefined && input.accessPointId !== null && { accessPointId: input.accessPointId }),
    ...(input.iam !== undefined && input.iam !== null && { iam: input.iam }),
  };
};
const serializeAws_restJson1EFSVolumeConfiguration = (input, context) => {
  return {
    ...(input.authorizationConfig !== undefined &&
      input.authorizationConfig !== null && {
        authorizationConfig: serializeAws_restJson1EFSAuthorizationConfig(input.authorizationConfig, context),
      }),
    ...(input.fileSystemId !== undefined && input.fileSystemId !== null && { fileSystemId: input.fileSystemId }),
    ...(input.rootDirectory !== undefined && input.rootDirectory !== null && { rootDirectory: input.rootDirectory }),
    ...(input.transitEncryption !== undefined &&
      input.transitEncryption !== null && { transitEncryption: input.transitEncryption }),
    ...(input.transitEncryptionPort !== undefined &&
      input.transitEncryptionPort !== null && { transitEncryptionPort: input.transitEncryptionPort }),
  };
};
const serializeAws_restJson1EnvironmentVariables = (input, context) => {
  return input
    .filter((e) => e != null)
    .map((entry) => {
      if (entry === null) {
        return null;
      }
      return serializeAws_restJson1KeyValuePair(entry, context);
    });
};
const serializeAws_restJson1EvaluateOnExit = (input, context) => {
  return {
    ...(input.action !== undefined && input.action !== null && { action: input.action }),
    ...(input.onExitCode !== undefined && input.onExitCode !== null && { onExitCode: input.onExitCode }),
    ...(input.onReason !== undefined && input.onReason !== null && { onReason: input.onReason }),
    ...(input.onStatusReason !== undefined &&
      input.onStatusReason !== null && { onStatusReason: input.onStatusReason }),
  };
};
const serializeAws_restJson1EvaluateOnExitList = (input, context) => {
  return input
    .filter((e) => e != null)
    .map((entry) => {
      if (entry === null) {
        return null;
      }
      return serializeAws_restJson1EvaluateOnExit(entry, context);
    });
};
const serializeAws_restJson1FargatePlatformConfiguration = (input, context) => {
  return {
    ...(input.platformVersion !== undefined &&
      input.platformVersion !== null && { platformVersion: input.platformVersion }),
  };
};
const serializeAws_restJson1Host = (input, context) => {
  return {
    ...(input.sourcePath !== undefined && input.sourcePath !== null && { sourcePath: input.sourcePath }),
  };
};
const serializeAws_restJson1JobDependency = (input, context) => {
  return {
    ...(input.jobId !== undefined && input.jobId !== null && { jobId: input.jobId }),
    ...(input.type !== undefined && input.type !== null && { type: input.type }),
  };
};
const serializeAws_restJson1JobDependencyList = (input, context) => {
  return input
    .filter((e) => e != null)
    .map((entry) => {
      if (entry === null) {
        return null;
      }
      return serializeAws_restJson1JobDependency(entry, context);
    });
};
const serializeAws_restJson1JobTimeout = (input, context) => {
  return {
    ...(input.attemptDurationSeconds !== undefined &&
      input.attemptDurationSeconds !== null && { attemptDurationSeconds: input.attemptDurationSeconds }),
  };
};
const serializeAws_restJson1KeyValuePair = (input, context) => {
  return {
    ...(input.name !== undefined && input.name !== null && { name: input.name }),
    ...(input.value !== undefined && input.value !== null && { value: input.value }),
  };
};
const serializeAws_restJson1LaunchTemplateSpecification = (input, context) => {
  return {
    ...(input.launchTemplateId !== undefined &&
      input.launchTemplateId !== null && { launchTemplateId: input.launchTemplateId }),
    ...(input.launchTemplateName !== undefined &&
      input.launchTemplateName !== null && { launchTemplateName: input.launchTemplateName }),
    ...(input.version !== undefined && input.version !== null && { version: input.version }),
  };
};
const serializeAws_restJson1LinuxParameters = (input, context) => {
  return {
    ...(input.devices !== undefined &&
      input.devices !== null && { devices: serializeAws_restJson1DevicesList(input.devices, context) }),
    ...(input.initProcessEnabled !== undefined &&
      input.initProcessEnabled !== null && { initProcessEnabled: input.initProcessEnabled }),
    ...(input.maxSwap !== undefined && input.maxSwap !== null && { maxSwap: input.maxSwap }),
    ...(input.sharedMemorySize !== undefined &&
      input.sharedMemorySize !== null && { sharedMemorySize: input.sharedMemorySize }),
    ...(input.swappiness !== undefined && input.swappiness !== null && { swappiness: input.swappiness }),
    ...(input.tmpfs !== undefined &&
      input.tmpfs !== null && { tmpfs: serializeAws_restJson1TmpfsList(input.tmpfs, context) }),
  };
};
const serializeAws_restJson1LogConfiguration = (input, context) => {
  return {
    ...(input.logDriver !== undefined && input.logDriver !== null && { logDriver: input.logDriver }),
    ...(input.options !== undefined &&
      input.options !== null && { options: serializeAws_restJson1LogConfigurationOptionsMap(input.options, context) }),
    ...(input.secretOptions !== undefined &&
      input.secretOptions !== null && {
        secretOptions: serializeAws_restJson1SecretList(input.secretOptions, context),
      }),
  };
};
const serializeAws_restJson1LogConfigurationOptionsMap = (input, context) => {
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
const serializeAws_restJson1MountPoint = (input, context) => {
  return {
    ...(input.containerPath !== undefined && input.containerPath !== null && { containerPath: input.containerPath }),
    ...(input.readOnly !== undefined && input.readOnly !== null && { readOnly: input.readOnly }),
    ...(input.sourceVolume !== undefined && input.sourceVolume !== null && { sourceVolume: input.sourceVolume }),
  };
};
const serializeAws_restJson1MountPoints = (input, context) => {
  return input
    .filter((e) => e != null)
    .map((entry) => {
      if (entry === null) {
        return null;
      }
      return serializeAws_restJson1MountPoint(entry, context);
    });
};
const serializeAws_restJson1NetworkConfiguration = (input, context) => {
  return {
    ...(input.assignPublicIp !== undefined &&
      input.assignPublicIp !== null && { assignPublicIp: input.assignPublicIp }),
  };
};
const serializeAws_restJson1NodeOverrides = (input, context) => {
  return {
    ...(input.nodePropertyOverrides !== undefined &&
      input.nodePropertyOverrides !== null && {
        nodePropertyOverrides: serializeAws_restJson1NodePropertyOverrides(input.nodePropertyOverrides, context),
      }),
    ...(input.numNodes !== undefined && input.numNodes !== null && { numNodes: input.numNodes }),
  };
};
const serializeAws_restJson1NodeProperties = (input, context) => {
  return {
    ...(input.mainNode !== undefined && input.mainNode !== null && { mainNode: input.mainNode }),
    ...(input.nodeRangeProperties !== undefined &&
      input.nodeRangeProperties !== null && {
        nodeRangeProperties: serializeAws_restJson1NodeRangeProperties(input.nodeRangeProperties, context),
      }),
    ...(input.numNodes !== undefined && input.numNodes !== null && { numNodes: input.numNodes }),
  };
};
const serializeAws_restJson1NodePropertyOverride = (input, context) => {
  return {
    ...(input.containerOverrides !== undefined &&
      input.containerOverrides !== null && {
        containerOverrides: serializeAws_restJson1ContainerOverrides(input.containerOverrides, context),
      }),
    ...(input.targetNodes !== undefined && input.targetNodes !== null && { targetNodes: input.targetNodes }),
  };
};
const serializeAws_restJson1NodePropertyOverrides = (input, context) => {
  return input
    .filter((e) => e != null)
    .map((entry) => {
      if (entry === null) {
        return null;
      }
      return serializeAws_restJson1NodePropertyOverride(entry, context);
    });
};
const serializeAws_restJson1NodeRangeProperties = (input, context) => {
  return input
    .filter((e) => e != null)
    .map((entry) => {
      if (entry === null) {
        return null;
      }
      return serializeAws_restJson1NodeRangeProperty(entry, context);
    });
};
const serializeAws_restJson1NodeRangeProperty = (input, context) => {
  return {
    ...(input.container !== undefined &&
      input.container !== null && { container: serializeAws_restJson1ContainerProperties(input.container, context) }),
    ...(input.targetNodes !== undefined && input.targetNodes !== null && { targetNodes: input.targetNodes }),
  };
};
const serializeAws_restJson1ParametersMap = (input, context) => {
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
const serializeAws_restJson1PlatformCapabilityList = (input, context) => {
  return input
    .filter((e) => e != null)
    .map((entry) => {
      if (entry === null) {
        return null;
      }
      return entry;
    });
};
const serializeAws_restJson1ResourceRequirement = (input, context) => {
  return {
    ...(input.type !== undefined && input.type !== null && { type: input.type }),
    ...(input.value !== undefined && input.value !== null && { value: input.value }),
  };
};
const serializeAws_restJson1ResourceRequirements = (input, context) => {
  return input
    .filter((e) => e != null)
    .map((entry) => {
      if (entry === null) {
        return null;
      }
      return serializeAws_restJson1ResourceRequirement(entry, context);
    });
};
const serializeAws_restJson1RetryStrategy = (input, context) => {
  return {
    ...(input.attempts !== undefined && input.attempts !== null && { attempts: input.attempts }),
    ...(input.evaluateOnExit !== undefined &&
      input.evaluateOnExit !== null && {
        evaluateOnExit: serializeAws_restJson1EvaluateOnExitList(input.evaluateOnExit, context),
      }),
  };
};
const serializeAws_restJson1Secret = (input, context) => {
  return {
    ...(input.name !== undefined && input.name !== null && { name: input.name }),
    ...(input.valueFrom !== undefined && input.valueFrom !== null && { valueFrom: input.valueFrom }),
  };
};
const serializeAws_restJson1SecretList = (input, context) => {
  return input
    .filter((e) => e != null)
    .map((entry) => {
      if (entry === null) {
        return null;
      }
      return serializeAws_restJson1Secret(entry, context);
    });
};
const serializeAws_restJson1StringList = (input, context) => {
  return input
    .filter((e) => e != null)
    .map((entry) => {
      if (entry === null) {
        return null;
      }
      return entry;
    });
};
const serializeAws_restJson1TagrisTagsMap = (input, context) => {
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
const serializeAws_restJson1TagsMap = (input, context) => {
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
const serializeAws_restJson1Tmpfs = (input, context) => {
  return {
    ...(input.containerPath !== undefined && input.containerPath !== null && { containerPath: input.containerPath }),
    ...(input.mountOptions !== undefined &&
      input.mountOptions !== null && { mountOptions: serializeAws_restJson1StringList(input.mountOptions, context) }),
    ...(input.size !== undefined && input.size !== null && { size: input.size }),
  };
};
const serializeAws_restJson1TmpfsList = (input, context) => {
  return input
    .filter((e) => e != null)
    .map((entry) => {
      if (entry === null) {
        return null;
      }
      return serializeAws_restJson1Tmpfs(entry, context);
    });
};
const serializeAws_restJson1Ulimit = (input, context) => {
  return {
    ...(input.hardLimit !== undefined && input.hardLimit !== null && { hardLimit: input.hardLimit }),
    ...(input.name !== undefined && input.name !== null && { name: input.name }),
    ...(input.softLimit !== undefined && input.softLimit !== null && { softLimit: input.softLimit }),
  };
};
const serializeAws_restJson1Ulimits = (input, context) => {
  return input
    .filter((e) => e != null)
    .map((entry) => {
      if (entry === null) {
        return null;
      }
      return serializeAws_restJson1Ulimit(entry, context);
    });
};
const serializeAws_restJson1Volume = (input, context) => {
  return {
    ...(input.efsVolumeConfiguration !== undefined &&
      input.efsVolumeConfiguration !== null && {
        efsVolumeConfiguration: serializeAws_restJson1EFSVolumeConfiguration(input.efsVolumeConfiguration, context),
      }),
    ...(input.host !== undefined && input.host !== null && { host: serializeAws_restJson1Host(input.host, context) }),
    ...(input.name !== undefined && input.name !== null && { name: input.name }),
  };
};
const serializeAws_restJson1Volumes = (input, context) => {
  return input
    .filter((e) => e != null)
    .map((entry) => {
      if (entry === null) {
        return null;
      }
      return serializeAws_restJson1Volume(entry, context);
    });
};
const deserializeAws_restJson1ArrayJobStatusSummary = (output, context) => {
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
const deserializeAws_restJson1ArrayPropertiesDetail = (output, context) => {
  return {
    index: output.index !== undefined && output.index !== null ? output.index : undefined,
    size: output.size !== undefined && output.size !== null ? output.size : undefined,
    statusSummary:
      output.statusSummary !== undefined && output.statusSummary !== null
        ? deserializeAws_restJson1ArrayJobStatusSummary(output.statusSummary, context)
        : undefined,
  };
};
const deserializeAws_restJson1ArrayPropertiesSummary = (output, context) => {
  return {
    index: output.index !== undefined && output.index !== null ? output.index : undefined,
    size: output.size !== undefined && output.size !== null ? output.size : undefined,
  };
};
const deserializeAws_restJson1AttemptContainerDetail = (output, context) => {
  return {
    containerInstanceArn:
      output.containerInstanceArn !== undefined && output.containerInstanceArn !== null
        ? output.containerInstanceArn
        : undefined,
    exitCode: output.exitCode !== undefined && output.exitCode !== null ? output.exitCode : undefined,
    logStreamName:
      output.logStreamName !== undefined && output.logStreamName !== null ? output.logStreamName : undefined,
    networkInterfaces:
      output.networkInterfaces !== undefined && output.networkInterfaces !== null
        ? deserializeAws_restJson1NetworkInterfaceList(output.networkInterfaces, context)
        : undefined,
    reason: output.reason !== undefined && output.reason !== null ? output.reason : undefined,
    taskArn: output.taskArn !== undefined && output.taskArn !== null ? output.taskArn : undefined,
  };
};
const deserializeAws_restJson1AttemptDetail = (output, context) => {
  return {
    container:
      output.container !== undefined && output.container !== null
        ? deserializeAws_restJson1AttemptContainerDetail(output.container, context)
        : undefined,
    startedAt: output.startedAt !== undefined && output.startedAt !== null ? output.startedAt : undefined,
    statusReason: output.statusReason !== undefined && output.statusReason !== null ? output.statusReason : undefined,
    stoppedAt: output.stoppedAt !== undefined && output.stoppedAt !== null ? output.stoppedAt : undefined,
  };
};
const deserializeAws_restJson1AttemptDetails = (output, context) => {
  return (output || [])
    .filter((e) => e != null)
    .map((entry) => {
      if (entry === null) {
        return null;
      }
      return deserializeAws_restJson1AttemptDetail(entry, context);
    });
};
const deserializeAws_restJson1ComputeEnvironmentDetail = (output, context) => {
  return {
    computeEnvironmentArn:
      output.computeEnvironmentArn !== undefined && output.computeEnvironmentArn !== null
        ? output.computeEnvironmentArn
        : undefined,
    computeEnvironmentName:
      output.computeEnvironmentName !== undefined && output.computeEnvironmentName !== null
        ? output.computeEnvironmentName
        : undefined,
    computeResources:
      output.computeResources !== undefined && output.computeResources !== null
        ? deserializeAws_restJson1ComputeResource(output.computeResources, context)
        : undefined,
    ecsClusterArn:
      output.ecsClusterArn !== undefined && output.ecsClusterArn !== null ? output.ecsClusterArn : undefined,
    serviceRole: output.serviceRole !== undefined && output.serviceRole !== null ? output.serviceRole : undefined,
    state: output.state !== undefined && output.state !== null ? output.state : undefined,
    status: output.status !== undefined && output.status !== null ? output.status : undefined,
    statusReason: output.statusReason !== undefined && output.statusReason !== null ? output.statusReason : undefined,
    tags:
      output.tags !== undefined && output.tags !== null
        ? deserializeAws_restJson1TagrisTagsMap(output.tags, context)
        : undefined,
    type: output.type !== undefined && output.type !== null ? output.type : undefined,
  };
};
const deserializeAws_restJson1ComputeEnvironmentDetailList = (output, context) => {
  return (output || [])
    .filter((e) => e != null)
    .map((entry) => {
      if (entry === null) {
        return null;
      }
      return deserializeAws_restJson1ComputeEnvironmentDetail(entry, context);
    });
};
const deserializeAws_restJson1ComputeEnvironmentOrder = (output, context) => {
  return {
    computeEnvironment:
      output.computeEnvironment !== undefined && output.computeEnvironment !== null
        ? output.computeEnvironment
        : undefined,
    order: output.order !== undefined && output.order !== null ? output.order : undefined,
  };
};
const deserializeAws_restJson1ComputeEnvironmentOrders = (output, context) => {
  return (output || [])
    .filter((e) => e != null)
    .map((entry) => {
      if (entry === null) {
        return null;
      }
      return deserializeAws_restJson1ComputeEnvironmentOrder(entry, context);
    });
};
const deserializeAws_restJson1ComputeResource = (output, context) => {
  return {
    allocationStrategy:
      output.allocationStrategy !== undefined && output.allocationStrategy !== null
        ? output.allocationStrategy
        : undefined,
    bidPercentage:
      output.bidPercentage !== undefined && output.bidPercentage !== null ? output.bidPercentage : undefined,
    desiredvCpus: output.desiredvCpus !== undefined && output.desiredvCpus !== null ? output.desiredvCpus : undefined,
    ec2Configuration:
      output.ec2Configuration !== undefined && output.ec2Configuration !== null
        ? deserializeAws_restJson1Ec2ConfigurationList(output.ec2Configuration, context)
        : undefined,
    ec2KeyPair: output.ec2KeyPair !== undefined && output.ec2KeyPair !== null ? output.ec2KeyPair : undefined,
    imageId: output.imageId !== undefined && output.imageId !== null ? output.imageId : undefined,
    instanceRole: output.instanceRole !== undefined && output.instanceRole !== null ? output.instanceRole : undefined,
    instanceTypes:
      output.instanceTypes !== undefined && output.instanceTypes !== null
        ? deserializeAws_restJson1StringList(output.instanceTypes, context)
        : undefined,
    launchTemplate:
      output.launchTemplate !== undefined && output.launchTemplate !== null
        ? deserializeAws_restJson1LaunchTemplateSpecification(output.launchTemplate, context)
        : undefined,
    maxvCpus: output.maxvCpus !== undefined && output.maxvCpus !== null ? output.maxvCpus : undefined,
    minvCpus: output.minvCpus !== undefined && output.minvCpus !== null ? output.minvCpus : undefined,
    placementGroup:
      output.placementGroup !== undefined && output.placementGroup !== null ? output.placementGroup : undefined,
    securityGroupIds:
      output.securityGroupIds !== undefined && output.securityGroupIds !== null
        ? deserializeAws_restJson1StringList(output.securityGroupIds, context)
        : undefined,
    spotIamFleetRole:
      output.spotIamFleetRole !== undefined && output.spotIamFleetRole !== null ? output.spotIamFleetRole : undefined,
    subnets:
      output.subnets !== undefined && output.subnets !== null
        ? deserializeAws_restJson1StringList(output.subnets, context)
        : undefined,
    tags:
      output.tags !== undefined && output.tags !== null
        ? deserializeAws_restJson1TagsMap(output.tags, context)
        : undefined,
    type: output.type !== undefined && output.type !== null ? output.type : undefined,
  };
};
const deserializeAws_restJson1ContainerDetail = (output, context) => {
  return {
    command:
      output.command !== undefined && output.command !== null
        ? deserializeAws_restJson1StringList(output.command, context)
        : undefined,
    containerInstanceArn:
      output.containerInstanceArn !== undefined && output.containerInstanceArn !== null
        ? output.containerInstanceArn
        : undefined,
    environment:
      output.environment !== undefined && output.environment !== null
        ? deserializeAws_restJson1EnvironmentVariables(output.environment, context)
        : undefined,
    executionRoleArn:
      output.executionRoleArn !== undefined && output.executionRoleArn !== null ? output.executionRoleArn : undefined,
    exitCode: output.exitCode !== undefined && output.exitCode !== null ? output.exitCode : undefined,
    fargatePlatformConfiguration:
      output.fargatePlatformConfiguration !== undefined && output.fargatePlatformConfiguration !== null
        ? deserializeAws_restJson1FargatePlatformConfiguration(output.fargatePlatformConfiguration, context)
        : undefined,
    image: output.image !== undefined && output.image !== null ? output.image : undefined,
    instanceType: output.instanceType !== undefined && output.instanceType !== null ? output.instanceType : undefined,
    jobRoleArn: output.jobRoleArn !== undefined && output.jobRoleArn !== null ? output.jobRoleArn : undefined,
    linuxParameters:
      output.linuxParameters !== undefined && output.linuxParameters !== null
        ? deserializeAws_restJson1LinuxParameters(output.linuxParameters, context)
        : undefined,
    logConfiguration:
      output.logConfiguration !== undefined && output.logConfiguration !== null
        ? deserializeAws_restJson1LogConfiguration(output.logConfiguration, context)
        : undefined,
    logStreamName:
      output.logStreamName !== undefined && output.logStreamName !== null ? output.logStreamName : undefined,
    memory: output.memory !== undefined && output.memory !== null ? output.memory : undefined,
    mountPoints:
      output.mountPoints !== undefined && output.mountPoints !== null
        ? deserializeAws_restJson1MountPoints(output.mountPoints, context)
        : undefined,
    networkConfiguration:
      output.networkConfiguration !== undefined && output.networkConfiguration !== null
        ? deserializeAws_restJson1NetworkConfiguration(output.networkConfiguration, context)
        : undefined,
    networkInterfaces:
      output.networkInterfaces !== undefined && output.networkInterfaces !== null
        ? deserializeAws_restJson1NetworkInterfaceList(output.networkInterfaces, context)
        : undefined,
    privileged: output.privileged !== undefined && output.privileged !== null ? output.privileged : undefined,
    readonlyRootFilesystem:
      output.readonlyRootFilesystem !== undefined && output.readonlyRootFilesystem !== null
        ? output.readonlyRootFilesystem
        : undefined,
    reason: output.reason !== undefined && output.reason !== null ? output.reason : undefined,
    resourceRequirements:
      output.resourceRequirements !== undefined && output.resourceRequirements !== null
        ? deserializeAws_restJson1ResourceRequirements(output.resourceRequirements, context)
        : undefined,
    secrets:
      output.secrets !== undefined && output.secrets !== null
        ? deserializeAws_restJson1SecretList(output.secrets, context)
        : undefined,
    taskArn: output.taskArn !== undefined && output.taskArn !== null ? output.taskArn : undefined,
    ulimits:
      output.ulimits !== undefined && output.ulimits !== null
        ? deserializeAws_restJson1Ulimits(output.ulimits, context)
        : undefined,
    user: output.user !== undefined && output.user !== null ? output.user : undefined,
    vcpus: output.vcpus !== undefined && output.vcpus !== null ? output.vcpus : undefined,
    volumes:
      output.volumes !== undefined && output.volumes !== null
        ? deserializeAws_restJson1Volumes(output.volumes, context)
        : undefined,
  };
};
const deserializeAws_restJson1ContainerProperties = (output, context) => {
  return {
    command:
      output.command !== undefined && output.command !== null
        ? deserializeAws_restJson1StringList(output.command, context)
        : undefined,
    environment:
      output.environment !== undefined && output.environment !== null
        ? deserializeAws_restJson1EnvironmentVariables(output.environment, context)
        : undefined,
    executionRoleArn:
      output.executionRoleArn !== undefined && output.executionRoleArn !== null ? output.executionRoleArn : undefined,
    fargatePlatformConfiguration:
      output.fargatePlatformConfiguration !== undefined && output.fargatePlatformConfiguration !== null
        ? deserializeAws_restJson1FargatePlatformConfiguration(output.fargatePlatformConfiguration, context)
        : undefined,
    image: output.image !== undefined && output.image !== null ? output.image : undefined,
    instanceType: output.instanceType !== undefined && output.instanceType !== null ? output.instanceType : undefined,
    jobRoleArn: output.jobRoleArn !== undefined && output.jobRoleArn !== null ? output.jobRoleArn : undefined,
    linuxParameters:
      output.linuxParameters !== undefined && output.linuxParameters !== null
        ? deserializeAws_restJson1LinuxParameters(output.linuxParameters, context)
        : undefined,
    logConfiguration:
      output.logConfiguration !== undefined && output.logConfiguration !== null
        ? deserializeAws_restJson1LogConfiguration(output.logConfiguration, context)
        : undefined,
    memory: output.memory !== undefined && output.memory !== null ? output.memory : undefined,
    mountPoints:
      output.mountPoints !== undefined && output.mountPoints !== null
        ? deserializeAws_restJson1MountPoints(output.mountPoints, context)
        : undefined,
    networkConfiguration:
      output.networkConfiguration !== undefined && output.networkConfiguration !== null
        ? deserializeAws_restJson1NetworkConfiguration(output.networkConfiguration, context)
        : undefined,
    privileged: output.privileged !== undefined && output.privileged !== null ? output.privileged : undefined,
    readonlyRootFilesystem:
      output.readonlyRootFilesystem !== undefined && output.readonlyRootFilesystem !== null
        ? output.readonlyRootFilesystem
        : undefined,
    resourceRequirements:
      output.resourceRequirements !== undefined && output.resourceRequirements !== null
        ? deserializeAws_restJson1ResourceRequirements(output.resourceRequirements, context)
        : undefined,
    secrets:
      output.secrets !== undefined && output.secrets !== null
        ? deserializeAws_restJson1SecretList(output.secrets, context)
        : undefined,
    ulimits:
      output.ulimits !== undefined && output.ulimits !== null
        ? deserializeAws_restJson1Ulimits(output.ulimits, context)
        : undefined,
    user: output.user !== undefined && output.user !== null ? output.user : undefined,
    vcpus: output.vcpus !== undefined && output.vcpus !== null ? output.vcpus : undefined,
    volumes:
      output.volumes !== undefined && output.volumes !== null
        ? deserializeAws_restJson1Volumes(output.volumes, context)
        : undefined,
  };
};
const deserializeAws_restJson1ContainerSummary = (output, context) => {
  return {
    exitCode: output.exitCode !== undefined && output.exitCode !== null ? output.exitCode : undefined,
    reason: output.reason !== undefined && output.reason !== null ? output.reason : undefined,
  };
};
const deserializeAws_restJson1Device = (output, context) => {
  return {
    containerPath:
      output.containerPath !== undefined && output.containerPath !== null ? output.containerPath : undefined,
    hostPath: output.hostPath !== undefined && output.hostPath !== null ? output.hostPath : undefined,
    permissions:
      output.permissions !== undefined && output.permissions !== null
        ? deserializeAws_restJson1DeviceCgroupPermissions(output.permissions, context)
        : undefined,
  };
};
const deserializeAws_restJson1DeviceCgroupPermissions = (output, context) => {
  return (output || [])
    .filter((e) => e != null)
    .map((entry) => {
      if (entry === null) {
        return null;
      }
      return entry;
    });
};
const deserializeAws_restJson1DevicesList = (output, context) => {
  return (output || [])
    .filter((e) => e != null)
    .map((entry) => {
      if (entry === null) {
        return null;
      }
      return deserializeAws_restJson1Device(entry, context);
    });
};
const deserializeAws_restJson1Ec2Configuration = (output, context) => {
  return {
    imageIdOverride:
      output.imageIdOverride !== undefined && output.imageIdOverride !== null ? output.imageIdOverride : undefined,
    imageType: output.imageType !== undefined && output.imageType !== null ? output.imageType : undefined,
  };
};
const deserializeAws_restJson1Ec2ConfigurationList = (output, context) => {
  return (output || [])
    .filter((e) => e != null)
    .map((entry) => {
      if (entry === null) {
        return null;
      }
      return deserializeAws_restJson1Ec2Configuration(entry, context);
    });
};
const deserializeAws_restJson1EFSAuthorizationConfig = (output, context) => {
  return {
    accessPointId:
      output.accessPointId !== undefined && output.accessPointId !== null ? output.accessPointId : undefined,
    iam: output.iam !== undefined && output.iam !== null ? output.iam : undefined,
  };
};
const deserializeAws_restJson1EFSVolumeConfiguration = (output, context) => {
  return {
    authorizationConfig:
      output.authorizationConfig !== undefined && output.authorizationConfig !== null
        ? deserializeAws_restJson1EFSAuthorizationConfig(output.authorizationConfig, context)
        : undefined,
    fileSystemId: output.fileSystemId !== undefined && output.fileSystemId !== null ? output.fileSystemId : undefined,
    rootDirectory:
      output.rootDirectory !== undefined && output.rootDirectory !== null ? output.rootDirectory : undefined,
    transitEncryption:
      output.transitEncryption !== undefined && output.transitEncryption !== null
        ? output.transitEncryption
        : undefined,
    transitEncryptionPort:
      output.transitEncryptionPort !== undefined && output.transitEncryptionPort !== null
        ? output.transitEncryptionPort
        : undefined,
  };
};
const deserializeAws_restJson1EnvironmentVariables = (output, context) => {
  return (output || [])
    .filter((e) => e != null)
    .map((entry) => {
      if (entry === null) {
        return null;
      }
      return deserializeAws_restJson1KeyValuePair(entry, context);
    });
};
const deserializeAws_restJson1EvaluateOnExit = (output, context) => {
  return {
    action: output.action !== undefined && output.action !== null ? output.action : undefined,
    onExitCode: output.onExitCode !== undefined && output.onExitCode !== null ? output.onExitCode : undefined,
    onReason: output.onReason !== undefined && output.onReason !== null ? output.onReason : undefined,
    onStatusReason:
      output.onStatusReason !== undefined && output.onStatusReason !== null ? output.onStatusReason : undefined,
  };
};
const deserializeAws_restJson1EvaluateOnExitList = (output, context) => {
  return (output || [])
    .filter((e) => e != null)
    .map((entry) => {
      if (entry === null) {
        return null;
      }
      return deserializeAws_restJson1EvaluateOnExit(entry, context);
    });
};
const deserializeAws_restJson1FargatePlatformConfiguration = (output, context) => {
  return {
    platformVersion:
      output.platformVersion !== undefined && output.platformVersion !== null ? output.platformVersion : undefined,
  };
};
const deserializeAws_restJson1Host = (output, context) => {
  return {
    sourcePath: output.sourcePath !== undefined && output.sourcePath !== null ? output.sourcePath : undefined,
  };
};
const deserializeAws_restJson1JobDefinition = (output, context) => {
  return {
    containerProperties:
      output.containerProperties !== undefined && output.containerProperties !== null
        ? deserializeAws_restJson1ContainerProperties(output.containerProperties, context)
        : undefined,
    jobDefinitionArn:
      output.jobDefinitionArn !== undefined && output.jobDefinitionArn !== null ? output.jobDefinitionArn : undefined,
    jobDefinitionName:
      output.jobDefinitionName !== undefined && output.jobDefinitionName !== null
        ? output.jobDefinitionName
        : undefined,
    nodeProperties:
      output.nodeProperties !== undefined && output.nodeProperties !== null
        ? deserializeAws_restJson1NodeProperties(output.nodeProperties, context)
        : undefined,
    parameters:
      output.parameters !== undefined && output.parameters !== null
        ? deserializeAws_restJson1ParametersMap(output.parameters, context)
        : undefined,
    platformCapabilities:
      output.platformCapabilities !== undefined && output.platformCapabilities !== null
        ? deserializeAws_restJson1PlatformCapabilityList(output.platformCapabilities, context)
        : undefined,
    propagateTags:
      output.propagateTags !== undefined && output.propagateTags !== null ? output.propagateTags : undefined,
    retryStrategy:
      output.retryStrategy !== undefined && output.retryStrategy !== null
        ? deserializeAws_restJson1RetryStrategy(output.retryStrategy, context)
        : undefined,
    revision: output.revision !== undefined && output.revision !== null ? output.revision : undefined,
    status: output.status !== undefined && output.status !== null ? output.status : undefined,
    tags:
      output.tags !== undefined && output.tags !== null
        ? deserializeAws_restJson1TagrisTagsMap(output.tags, context)
        : undefined,
    timeout:
      output.timeout !== undefined && output.timeout !== null
        ? deserializeAws_restJson1JobTimeout(output.timeout, context)
        : undefined,
    type: output.type !== undefined && output.type !== null ? output.type : undefined,
  };
};
const deserializeAws_restJson1JobDefinitionList = (output, context) => {
  return (output || [])
    .filter((e) => e != null)
    .map((entry) => {
      if (entry === null) {
        return null;
      }
      return deserializeAws_restJson1JobDefinition(entry, context);
    });
};
const deserializeAws_restJson1JobDependency = (output, context) => {
  return {
    jobId: output.jobId !== undefined && output.jobId !== null ? output.jobId : undefined,
    type: output.type !== undefined && output.type !== null ? output.type : undefined,
  };
};
const deserializeAws_restJson1JobDependencyList = (output, context) => {
  return (output || [])
    .filter((e) => e != null)
    .map((entry) => {
      if (entry === null) {
        return null;
      }
      return deserializeAws_restJson1JobDependency(entry, context);
    });
};
const deserializeAws_restJson1JobDetail = (output, context) => {
  return {
    arrayProperties:
      output.arrayProperties !== undefined && output.arrayProperties !== null
        ? deserializeAws_restJson1ArrayPropertiesDetail(output.arrayProperties, context)
        : undefined,
    attempts:
      output.attempts !== undefined && output.attempts !== null
        ? deserializeAws_restJson1AttemptDetails(output.attempts, context)
        : undefined,
    container:
      output.container !== undefined && output.container !== null
        ? deserializeAws_restJson1ContainerDetail(output.container, context)
        : undefined,
    createdAt: output.createdAt !== undefined && output.createdAt !== null ? output.createdAt : undefined,
    dependsOn:
      output.dependsOn !== undefined && output.dependsOn !== null
        ? deserializeAws_restJson1JobDependencyList(output.dependsOn, context)
        : undefined,
    jobArn: output.jobArn !== undefined && output.jobArn !== null ? output.jobArn : undefined,
    jobDefinition:
      output.jobDefinition !== undefined && output.jobDefinition !== null ? output.jobDefinition : undefined,
    jobId: output.jobId !== undefined && output.jobId !== null ? output.jobId : undefined,
    jobName: output.jobName !== undefined && output.jobName !== null ? output.jobName : undefined,
    jobQueue: output.jobQueue !== undefined && output.jobQueue !== null ? output.jobQueue : undefined,
    nodeDetails:
      output.nodeDetails !== undefined && output.nodeDetails !== null
        ? deserializeAws_restJson1NodeDetails(output.nodeDetails, context)
        : undefined,
    nodeProperties:
      output.nodeProperties !== undefined && output.nodeProperties !== null
        ? deserializeAws_restJson1NodeProperties(output.nodeProperties, context)
        : undefined,
    parameters:
      output.parameters !== undefined && output.parameters !== null
        ? deserializeAws_restJson1ParametersMap(output.parameters, context)
        : undefined,
    platformCapabilities:
      output.platformCapabilities !== undefined && output.platformCapabilities !== null
        ? deserializeAws_restJson1PlatformCapabilityList(output.platformCapabilities, context)
        : undefined,
    propagateTags:
      output.propagateTags !== undefined && output.propagateTags !== null ? output.propagateTags : undefined,
    retryStrategy:
      output.retryStrategy !== undefined && output.retryStrategy !== null
        ? deserializeAws_restJson1RetryStrategy(output.retryStrategy, context)
        : undefined,
    startedAt: output.startedAt !== undefined && output.startedAt !== null ? output.startedAt : undefined,
    status: output.status !== undefined && output.status !== null ? output.status : undefined,
    statusReason: output.statusReason !== undefined && output.statusReason !== null ? output.statusReason : undefined,
    stoppedAt: output.stoppedAt !== undefined && output.stoppedAt !== null ? output.stoppedAt : undefined,
    tags:
      output.tags !== undefined && output.tags !== null
        ? deserializeAws_restJson1TagrisTagsMap(output.tags, context)
        : undefined,
    timeout:
      output.timeout !== undefined && output.timeout !== null
        ? deserializeAws_restJson1JobTimeout(output.timeout, context)
        : undefined,
  };
};
const deserializeAws_restJson1JobDetailList = (output, context) => {
  return (output || [])
    .filter((e) => e != null)
    .map((entry) => {
      if (entry === null) {
        return null;
      }
      return deserializeAws_restJson1JobDetail(entry, context);
    });
};
const deserializeAws_restJson1JobQueueDetail = (output, context) => {
  return {
    computeEnvironmentOrder:
      output.computeEnvironmentOrder !== undefined && output.computeEnvironmentOrder !== null
        ? deserializeAws_restJson1ComputeEnvironmentOrders(output.computeEnvironmentOrder, context)
        : undefined,
    jobQueueArn: output.jobQueueArn !== undefined && output.jobQueueArn !== null ? output.jobQueueArn : undefined,
    jobQueueName: output.jobQueueName !== undefined && output.jobQueueName !== null ? output.jobQueueName : undefined,
    priority: output.priority !== undefined && output.priority !== null ? output.priority : undefined,
    state: output.state !== undefined && output.state !== null ? output.state : undefined,
    status: output.status !== undefined && output.status !== null ? output.status : undefined,
    statusReason: output.statusReason !== undefined && output.statusReason !== null ? output.statusReason : undefined,
    tags:
      output.tags !== undefined && output.tags !== null
        ? deserializeAws_restJson1TagrisTagsMap(output.tags, context)
        : undefined,
  };
};
const deserializeAws_restJson1JobQueueDetailList = (output, context) => {
  return (output || [])
    .filter((e) => e != null)
    .map((entry) => {
      if (entry === null) {
        return null;
      }
      return deserializeAws_restJson1JobQueueDetail(entry, context);
    });
};
const deserializeAws_restJson1JobSummary = (output, context) => {
  return {
    arrayProperties:
      output.arrayProperties !== undefined && output.arrayProperties !== null
        ? deserializeAws_restJson1ArrayPropertiesSummary(output.arrayProperties, context)
        : undefined,
    container:
      output.container !== undefined && output.container !== null
        ? deserializeAws_restJson1ContainerSummary(output.container, context)
        : undefined,
    createdAt: output.createdAt !== undefined && output.createdAt !== null ? output.createdAt : undefined,
    jobArn: output.jobArn !== undefined && output.jobArn !== null ? output.jobArn : undefined,
    jobId: output.jobId !== undefined && output.jobId !== null ? output.jobId : undefined,
    jobName: output.jobName !== undefined && output.jobName !== null ? output.jobName : undefined,
    nodeProperties:
      output.nodeProperties !== undefined && output.nodeProperties !== null
        ? deserializeAws_restJson1NodePropertiesSummary(output.nodeProperties, context)
        : undefined,
    startedAt: output.startedAt !== undefined && output.startedAt !== null ? output.startedAt : undefined,
    status: output.status !== undefined && output.status !== null ? output.status : undefined,
    statusReason: output.statusReason !== undefined && output.statusReason !== null ? output.statusReason : undefined,
    stoppedAt: output.stoppedAt !== undefined && output.stoppedAt !== null ? output.stoppedAt : undefined,
  };
};
const deserializeAws_restJson1JobSummaryList = (output, context) => {
  return (output || [])
    .filter((e) => e != null)
    .map((entry) => {
      if (entry === null) {
        return null;
      }
      return deserializeAws_restJson1JobSummary(entry, context);
    });
};
const deserializeAws_restJson1JobTimeout = (output, context) => {
  return {
    attemptDurationSeconds:
      output.attemptDurationSeconds !== undefined && output.attemptDurationSeconds !== null
        ? output.attemptDurationSeconds
        : undefined,
  };
};
const deserializeAws_restJson1KeyValuePair = (output, context) => {
  return {
    name: output.name !== undefined && output.name !== null ? output.name : undefined,
    value: output.value !== undefined && output.value !== null ? output.value : undefined,
  };
};
const deserializeAws_restJson1LaunchTemplateSpecification = (output, context) => {
  return {
    launchTemplateId:
      output.launchTemplateId !== undefined && output.launchTemplateId !== null ? output.launchTemplateId : undefined,
    launchTemplateName:
      output.launchTemplateName !== undefined && output.launchTemplateName !== null
        ? output.launchTemplateName
        : undefined,
    version: output.version !== undefined && output.version !== null ? output.version : undefined,
  };
};
const deserializeAws_restJson1LinuxParameters = (output, context) => {
  return {
    devices:
      output.devices !== undefined && output.devices !== null
        ? deserializeAws_restJson1DevicesList(output.devices, context)
        : undefined,
    initProcessEnabled:
      output.initProcessEnabled !== undefined && output.initProcessEnabled !== null
        ? output.initProcessEnabled
        : undefined,
    maxSwap: output.maxSwap !== undefined && output.maxSwap !== null ? output.maxSwap : undefined,
    sharedMemorySize:
      output.sharedMemorySize !== undefined && output.sharedMemorySize !== null ? output.sharedMemorySize : undefined,
    swappiness: output.swappiness !== undefined && output.swappiness !== null ? output.swappiness : undefined,
    tmpfs:
      output.tmpfs !== undefined && output.tmpfs !== null
        ? deserializeAws_restJson1TmpfsList(output.tmpfs, context)
        : undefined,
  };
};
const deserializeAws_restJson1LogConfiguration = (output, context) => {
  return {
    logDriver: output.logDriver !== undefined && output.logDriver !== null ? output.logDriver : undefined,
    options:
      output.options !== undefined && output.options !== null
        ? deserializeAws_restJson1LogConfigurationOptionsMap(output.options, context)
        : undefined,
    secretOptions:
      output.secretOptions !== undefined && output.secretOptions !== null
        ? deserializeAws_restJson1SecretList(output.secretOptions, context)
        : undefined,
  };
};
const deserializeAws_restJson1LogConfigurationOptionsMap = (output, context) => {
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
const deserializeAws_restJson1MountPoint = (output, context) => {
  return {
    containerPath:
      output.containerPath !== undefined && output.containerPath !== null ? output.containerPath : undefined,
    readOnly: output.readOnly !== undefined && output.readOnly !== null ? output.readOnly : undefined,
    sourceVolume: output.sourceVolume !== undefined && output.sourceVolume !== null ? output.sourceVolume : undefined,
  };
};
const deserializeAws_restJson1MountPoints = (output, context) => {
  return (output || [])
    .filter((e) => e != null)
    .map((entry) => {
      if (entry === null) {
        return null;
      }
      return deserializeAws_restJson1MountPoint(entry, context);
    });
};
const deserializeAws_restJson1NetworkConfiguration = (output, context) => {
  return {
    assignPublicIp:
      output.assignPublicIp !== undefined && output.assignPublicIp !== null ? output.assignPublicIp : undefined,
  };
};
const deserializeAws_restJson1NetworkInterface = (output, context) => {
  return {
    attachmentId: output.attachmentId !== undefined && output.attachmentId !== null ? output.attachmentId : undefined,
    ipv6Address: output.ipv6Address !== undefined && output.ipv6Address !== null ? output.ipv6Address : undefined,
    privateIpv4Address:
      output.privateIpv4Address !== undefined && output.privateIpv4Address !== null
        ? output.privateIpv4Address
        : undefined,
  };
};
const deserializeAws_restJson1NetworkInterfaceList = (output, context) => {
  return (output || [])
    .filter((e) => e != null)
    .map((entry) => {
      if (entry === null) {
        return null;
      }
      return deserializeAws_restJson1NetworkInterface(entry, context);
    });
};
const deserializeAws_restJson1NodeDetails = (output, context) => {
  return {
    isMainNode: output.isMainNode !== undefined && output.isMainNode !== null ? output.isMainNode : undefined,
    nodeIndex: output.nodeIndex !== undefined && output.nodeIndex !== null ? output.nodeIndex : undefined,
  };
};
const deserializeAws_restJson1NodeProperties = (output, context) => {
  return {
    mainNode: output.mainNode !== undefined && output.mainNode !== null ? output.mainNode : undefined,
    nodeRangeProperties:
      output.nodeRangeProperties !== undefined && output.nodeRangeProperties !== null
        ? deserializeAws_restJson1NodeRangeProperties(output.nodeRangeProperties, context)
        : undefined,
    numNodes: output.numNodes !== undefined && output.numNodes !== null ? output.numNodes : undefined,
  };
};
const deserializeAws_restJson1NodePropertiesSummary = (output, context) => {
  return {
    isMainNode: output.isMainNode !== undefined && output.isMainNode !== null ? output.isMainNode : undefined,
    nodeIndex: output.nodeIndex !== undefined && output.nodeIndex !== null ? output.nodeIndex : undefined,
    numNodes: output.numNodes !== undefined && output.numNodes !== null ? output.numNodes : undefined,
  };
};
const deserializeAws_restJson1NodeRangeProperties = (output, context) => {
  return (output || [])
    .filter((e) => e != null)
    .map((entry) => {
      if (entry === null) {
        return null;
      }
      return deserializeAws_restJson1NodeRangeProperty(entry, context);
    });
};
const deserializeAws_restJson1NodeRangeProperty = (output, context) => {
  return {
    container:
      output.container !== undefined && output.container !== null
        ? deserializeAws_restJson1ContainerProperties(output.container, context)
        : undefined,
    targetNodes: output.targetNodes !== undefined && output.targetNodes !== null ? output.targetNodes : undefined,
  };
};
const deserializeAws_restJson1ParametersMap = (output, context) => {
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
const deserializeAws_restJson1PlatformCapabilityList = (output, context) => {
  return (output || [])
    .filter((e) => e != null)
    .map((entry) => {
      if (entry === null) {
        return null;
      }
      return entry;
    });
};
const deserializeAws_restJson1ResourceRequirement = (output, context) => {
  return {
    type: output.type !== undefined && output.type !== null ? output.type : undefined,
    value: output.value !== undefined && output.value !== null ? output.value : undefined,
  };
};
const deserializeAws_restJson1ResourceRequirements = (output, context) => {
  return (output || [])
    .filter((e) => e != null)
    .map((entry) => {
      if (entry === null) {
        return null;
      }
      return deserializeAws_restJson1ResourceRequirement(entry, context);
    });
};
const deserializeAws_restJson1RetryStrategy = (output, context) => {
  return {
    attempts: output.attempts !== undefined && output.attempts !== null ? output.attempts : undefined,
    evaluateOnExit:
      output.evaluateOnExit !== undefined && output.evaluateOnExit !== null
        ? deserializeAws_restJson1EvaluateOnExitList(output.evaluateOnExit, context)
        : undefined,
  };
};
const deserializeAws_restJson1Secret = (output, context) => {
  return {
    name: output.name !== undefined && output.name !== null ? output.name : undefined,
    valueFrom: output.valueFrom !== undefined && output.valueFrom !== null ? output.valueFrom : undefined,
  };
};
const deserializeAws_restJson1SecretList = (output, context) => {
  return (output || [])
    .filter((e) => e != null)
    .map((entry) => {
      if (entry === null) {
        return null;
      }
      return deserializeAws_restJson1Secret(entry, context);
    });
};
const deserializeAws_restJson1StringList = (output, context) => {
  return (output || [])
    .filter((e) => e != null)
    .map((entry) => {
      if (entry === null) {
        return null;
      }
      return entry;
    });
};
const deserializeAws_restJson1TagrisTagsMap = (output, context) => {
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
const deserializeAws_restJson1TagsMap = (output, context) => {
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
const deserializeAws_restJson1Tmpfs = (output, context) => {
  return {
    containerPath:
      output.containerPath !== undefined && output.containerPath !== null ? output.containerPath : undefined,
    mountOptions:
      output.mountOptions !== undefined && output.mountOptions !== null
        ? deserializeAws_restJson1StringList(output.mountOptions, context)
        : undefined,
    size: output.size !== undefined && output.size !== null ? output.size : undefined,
  };
};
const deserializeAws_restJson1TmpfsList = (output, context) => {
  return (output || [])
    .filter((e) => e != null)
    .map((entry) => {
      if (entry === null) {
        return null;
      }
      return deserializeAws_restJson1Tmpfs(entry, context);
    });
};
const deserializeAws_restJson1Ulimit = (output, context) => {
  return {
    hardLimit: output.hardLimit !== undefined && output.hardLimit !== null ? output.hardLimit : undefined,
    name: output.name !== undefined && output.name !== null ? output.name : undefined,
    softLimit: output.softLimit !== undefined && output.softLimit !== null ? output.softLimit : undefined,
  };
};
const deserializeAws_restJson1Ulimits = (output, context) => {
  return (output || [])
    .filter((e) => e != null)
    .map((entry) => {
      if (entry === null) {
        return null;
      }
      return deserializeAws_restJson1Ulimit(entry, context);
    });
};
const deserializeAws_restJson1Volume = (output, context) => {
  return {
    efsVolumeConfiguration:
      output.efsVolumeConfiguration !== undefined && output.efsVolumeConfiguration !== null
        ? deserializeAws_restJson1EFSVolumeConfiguration(output.efsVolumeConfiguration, context)
        : undefined,
    host:
      output.host !== undefined && output.host !== null
        ? deserializeAws_restJson1Host(output.host, context)
        : undefined,
    name: output.name !== undefined && output.name !== null ? output.name : undefined,
  };
};
const deserializeAws_restJson1Volumes = (output, context) => {
  return (output || [])
    .filter((e) => e != null)
    .map((entry) => {
      if (entry === null) {
        return null;
      }
      return deserializeAws_restJson1Volume(entry, context);
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
const isSerializableHeaderValue = (value) =>
  value !== undefined &&
  value !== null &&
  value !== "" &&
  (!Object.getOwnPropertyNames(value).includes("length") || value.length != 0) &&
  (!Object.getOwnPropertyNames(value).includes("size") || value.size != 0);
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
//# sourceMappingURL=Aws_restJson1.js.map
